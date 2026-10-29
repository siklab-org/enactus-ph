import { PH_REGIONS } from "./types.js";
import type { ProvinceUpdate } from "./types.js";
import { getAllRegionPaths, downloadSvg } from "./svg.js";
import { saveUpdates } from "./api.js";
import { showToast } from "../shared/toast.js";
import { PROVINCE_NAMES, lookupRegionForProvince } from "./provinceRegions.js";

export class Editor {
  private svg: SVGSVGElement;
  private selected = new Set<string>();
  private editMode = false;
  private dirty = new Map<string, ProvinceUpdate>();

  private root: HTMLElement;
  private toggleBtn: HTMLButtonElement;
  private panel: HTMLElement;
  private selectionCountEl: HTMLElement;
  private nameInput: HTMLInputElement;
  private regionSelect: HTMLSelectElement;
  private applyBtn: HTMLButtonElement;
  private clearBtn: HTMLButtonElement;
  private saveBtn: HTMLButtonElement;
  private downloadBtn: HTMLButtonElement;

  constructor(svg: SVGSVGElement, root: HTMLElement) {
    this.svg = svg;
    this.root = root;

    this.toggleBtn = root.querySelector("[data-edit-toggle]")!;
    this.panel = root.querySelector("[data-editor-panel]")!;
    this.selectionCountEl = root.querySelector("[data-selection-count]")!;
    this.nameInput = root.querySelector("[data-province-name]")!;
    this.regionSelect = root.querySelector("[data-region-select]")!;
    this.applyBtn = root.querySelector("[data-apply-btn]")!;
    this.clearBtn = root.querySelector("[data-clear-btn]")!;
    this.saveBtn = root.querySelector("[data-save-btn]")!;
    this.downloadBtn = root.querySelector("[data-download-btn]")!;

    this.populateRegionOptions();
    this.populateProvinceDatalist();
    this.wireEvents();
    this.renderPanel();
  }

  private populateRegionOptions(): void {
    this.regionSelect.innerHTML = '<option value="">Select a region…</option>';
    for (const region of PH_REGIONS) {
      const opt = document.createElement("option");
      opt.value = region;
      opt.textContent = region;
      this.regionSelect.appendChild(opt);
    }
  }

  /** Fills the <datalist> backing the province-name input's autocomplete suggestions. */
  private populateProvinceDatalist(): void {
    const list = this.root.querySelector<HTMLDataListElement>("[data-province-datalist]");
    if (!list) return;
    list.innerHTML = "";
    for (const name of PROVINCE_NAMES) {
      const opt = document.createElement("option");
      opt.value = name;
      list.appendChild(opt);
    }
  }

  private wireEvents(): void {
    this.toggleBtn.addEventListener("click", () => this.setEditMode(!this.editMode));

    for (const p of getAllRegionPaths(this.svg)) {
      p.addEventListener("click", () => this.onPathClick(p));
    }

    this.applyBtn.addEventListener("click", () => this.applyToSelection());
    this.clearBtn.addEventListener("click", () => this.clearSelection());
    this.saveBtn.addEventListener("click", () => void this.save());
    this.downloadBtn.addEventListener("click", () => downloadSvg(this.svg));
    this.nameInput.addEventListener("input", () => this.onProvinceNameInput());
  }

  /** Recognized province name typed in -> auto-select its region for the user. */
  private onProvinceNameInput(): void {
    const region = lookupRegionForProvince(this.nameInput.value);
    if (region) {
      this.regionSelect.value = region;
    }
  }

  private setEditMode(on: boolean): void {
    this.editMode = on;
    this.toggleBtn.classList.toggle("active", on);
    this.toggleBtn.textContent = on ? "Exit Edit Mode" : "Edit Mode";
    this.panel.classList.toggle("visible", on);
    this.root.classList.toggle("edit-mode", on);
    if (!on) this.clearSelection();
  }

  private onPathClick(p: SVGPathElement): void {
    if (!this.editMode) return;
    const id = p.id;

    // Every click just toggles that shape into/out of the selection — no
    // modifier key needed, since Shift-click isn't available on touch and
    // this app runs on mobile-landscape too. Use "Clear Selection" to reset.
    if (this.selected.has(id)) {
      this.selected.delete(id);
      p.classList.remove("selected");
    } else {
      this.selected.add(id);
      p.classList.add("selected");
    }

    this.renderPanel();
  }

  private renderPanel(): void {
    this.selectionCountEl.textContent = `${this.selected.size} selected`;
    this.applyBtn.disabled = this.selected.size === 0;
    this.clearBtn.disabled = this.selected.size === 0;

    if (this.selected.size === 1) {
      const [id] = this.selected;
      const p = this.svg.getElementById(id);
      this.nameInput.value = p?.getAttribute("data-province") ?? "";
      this.regionSelect.value = p?.getAttribute("data-region") ?? "";
    } else if (this.selected.size === 0) {
      this.nameInput.value = "";
      this.regionSelect.value = "";
    }
    // for multi-selection, leave fields as-is so the user can type one name/region
    // and apply it to the whole group at once.
  }

  private applyToSelection(): void {
    const province = this.nameInput.value.trim();
    const region = this.regionSelect.value;
    if (!province || !region) {
      showToast("Enter a province name and pick a region first.", "error");
      return;
    }
    for (const id of this.selected) {
      const p = this.svg.getElementById(id) as SVGPathElement | null;
      if (!p) continue;
      p.setAttribute("data-province", province);
      p.setAttribute("data-region", region);
      this.dirty.set(id, { id, province, region });
    }
    showToast(`Applied "${province}" to ${this.selected.size} shape(s). Remember to Save.`, "success");
  }

  private clearSelection(): void {
    for (const id of this.selected) {
      this.svg.getElementById(id)?.classList.remove("selected");
    }
    this.selected.clear();
    this.renderPanel();
  }

  private async save(): Promise<void> {
    if (this.dirty.size === 0) {
      showToast("No unsaved changes yet.", "error");
      return;
    }
    this.saveBtn.disabled = true;
    this.saveBtn.textContent = "Saving…";
    const updates = Array.from(this.dirty.values());
    const result = await saveUpdates(updates);
    this.saveBtn.disabled = false;
    this.saveBtn.textContent = "Save Changes";

    if (result.ok) {
      this.dirty.clear();
      showToast(`Saved ${updates.length} update(s) to the SVG file.`, "success");
    } else {
      showToast(`Save failed: ${result.error}`, "error");
    }
  }
}
