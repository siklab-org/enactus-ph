"use client";

import { useEffect, useRef, useState } from "react";
import {
  enactusUniversityLocations,
  islandGroupLabels,
  islandGroups,
  mapViewBox,
  type IslandGroup,
} from "@/lib/enactus-universities";
import styles from "./PhilippinesMap.module.css";

function isIslandGroup(value: string): value is IslandGroup {
  return islandGroups.some((island) => island === value);
}

export function PhilippinesMap() {
  const rootRef = useRef<HTMLDivElement>(null);
  const mapFrameRef = useRef<HTMLDivElement>(null);
  const svgHostRef = useRef<HTMLDivElement>(null);
  const mapDragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    offsetX: number;
    offsetY: number;
    moved: boolean;
  } | null>(null);
  const suppressNextMapClickRef = useRef(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [mapCanvasSize, setMapCanvasSize] = useState<{ width: number; height: number } | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [selectedIsland, setSelectedIsland] = useState<IslandGroup | null>(null);
  const [hoveredUniversityId, setHoveredUniversityId] = useState<string | null>(null);
  const [pinnedUniversityId, setPinnedUniversityId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1.25);
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);

  const activeUniversityId = pinnedUniversityId ?? hoveredUniversityId;

  useEffect(() => {
    const controller = new AbortController();
    let mountedSvg: HTMLElement | null = null;
    let mapClickHandler: ((event: MouseEvent) => void) | null = null;
    let disposed = false;

    const loadMap = async () => {
      try {
        const response = await fetch("/maps/ph-islands.svg", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`The map file could not be loaded (HTTP ${response.status}).`);
        }

        const source = await response.text();
        const document = new DOMParser().parseFromString(source, "image/svg+xml");
        const parsedSvg = document.documentElement;
        if (document.querySelector("parsererror") || parsedSvg.localName !== "svg") {
          throw new Error("The Philippines map file is not valid SVG.");
        }

        const viewBox = parsedSvg
          .getAttribute("viewBox")
          ?.trim()
          .split(/\s+/)
          .map(Number);
        if (
          !viewBox ||
          viewBox.length !== 4 ||
          viewBox[0] !== mapViewBox.x ||
          viewBox[1] !== mapViewBox.y ||
          viewBox[2] !== mapViewBox.width ||
          viewBox[3] !== mapViewBox.height
        ) {
          throw new Error("The map viewBox changed; update the university marker projection.");
        }

        const svg = document.importNode(parsedSvg, true);
        svg.querySelectorAll("script, metadata, foreignObject").forEach((element) => element.remove());
        svg.querySelectorAll("*").forEach((element) => {
          Array.from(element.attributes).forEach((attribute) => {
            if (attribute.name.toLowerCase().startsWith("on")) {
              element.removeAttribute(attribute.name);
            }
          });
        });
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.setAttribute("aria-hidden", "true");

        if (!svg.querySelector("path.region[data-island]")) {
          throw new Error("The map does not contain island-group paths.");
        }

        mapClickHandler = (event: MouseEvent) => {
          if (suppressNextMapClickRef.current) {
            suppressNextMapClickRef.current = false;
            return;
          }
          if (!(event.target instanceof Element)) return;
          const path = event.target.closest<SVGPathElement>("path.region[data-island]");
          const island = path?.getAttribute("data-island");
          if (island && isIslandGroup(island)) {
            setSelectedIsland((current) => (current === island ? null : island));
          }
          setPinnedUniversityId(null);
        };

        svg.addEventListener("click", mapClickHandler);
        mountedSvg = svg;
        svgHostRef.current?.replaceChildren(svg);
        if (!disposed) {
          setMapError(null);
          setMapReady(true);
        }
      } catch (error) {
        if (controller.signal.aborted) return;
        const message =
          error instanceof Error ? error.message : "The Philippines map could not be loaded.";
        if (!disposed) setMapError(message);
      }
    };

    void loadMap();

    return () => {
      disposed = true;
      controller.abort();
      if (mountedSvg && mapClickHandler) {
        mountedSvg.removeEventListener("click", mapClickHandler);
      }
    };
  }, []);

  useEffect(() => {
    const frame = mapFrameRef.current;
    if (!frame) return;

    const updateCanvasSize = () => {
      const { width, height } = frame.getBoundingClientRect();
      if (!width || !height) return;

      const scale = Math.max(width / mapViewBox.width, height / mapViewBox.height);
      setMapCanvasSize({
        width: mapViewBox.width * scale,
        height: mapViewBox.height * scale,
      });
    };

    updateCanvasSize();
    const observer = new ResizeObserver(updateCanvasSize);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const svg = svgHostRef.current?.querySelector("svg");
    if (!svg) return;

    svg.querySelectorAll<SVGPathElement>("path.region[data-island]").forEach((path) => {
      path.classList.toggle("island-active", path.dataset.island === selectedIsland);
    });
  }, [selectedIsland, mapError]);

  useEffect(() => {
    if (!selectedIsland || !mapReady || !mapCanvasSize) return;

    const frame = mapFrameRef.current;
    const svg = svgHostRef.current?.querySelector("svg");
    if (!frame || !svg) return;

    const paths = svg.querySelectorAll<SVGPathElement>(
      `path.region[data-island="${selectedIsland}"]`,
    );
    if (!paths.length) return;

    const regionBounds = Array.from(paths).reduce(
      (bounds, path) => {
        const pathBounds = path.getBBox();
        const left = Math.min(bounds.left, pathBounds.x);
        const top = Math.min(bounds.top, pathBounds.y);
        const right = Math.max(bounds.right, pathBounds.x + pathBounds.width);
        const bottom = Math.max(bounds.bottom, pathBounds.y + pathBounds.height);
        return { left, top, right, bottom };
      },
      {
        left: Number.POSITIVE_INFINITY,
        top: Number.POSITIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
      },
    );
    const frameBounds = frame.getBoundingClientRect();
    const canvasScale = mapCanvasSize.width / mapViewBox.width;
    const regionWidth = (regionBounds.right - regionBounds.left) * canvasScale;
    const regionHeight = (regionBounds.bottom - regionBounds.top) * canvasScale;
    const targetZoom = Math.min(
      6,
      Math.max(
        1.25,
        Math.min(
          (frameBounds.width * 0.78) / regionWidth,
          (frameBounds.height * 0.78) / regionHeight,
        ),
      ),
    );
    const centerX = (regionBounds.left + regionBounds.right) / 2;
    const centerY = (regionBounds.top + regionBounds.bottom) / 2;
    const maxOffsetX = Math.max(
      0,
      (mapCanvasSize.width * targetZoom - frameBounds.width) / 2,
    );
    const maxOffsetY = Math.max(
      0,
      (mapCanvasSize.height * targetZoom - frameBounds.height) / 2,
    );
    const targetOffsetX = -(
      (centerX / mapViewBox.width) * mapCanvasSize.width -
      mapCanvasSize.width / 2
    ) * targetZoom;
    const targetOffsetY = -(
      (centerY / mapViewBox.height) * mapCanvasSize.height -
      mapCanvasSize.height / 2
    ) * targetZoom;

    setZoom(targetZoom);
    setMapOffset({
      x: Math.max(-maxOffsetX, Math.min(maxOffsetX, targetOffsetX)),
      y: Math.max(-maxOffsetY, Math.min(maxOffsetY, targetOffsetY)),
    });
  }, [mapCanvasSize, mapReady, selectedIsland]);

  useEffect(() => {
    const dismissOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setPinnedUniversityId(null);
        setHoveredUniversityId(null);
      }
    };

    document.addEventListener("pointerdown", dismissOutside);
    return () => document.removeEventListener("pointerdown", dismissOutside);
  }, []);

  const selectIsland = (island: IslandGroup | null) => {
    setSelectedIsland(island);
    setPinnedUniversityId(null);
    if (!island) resetMapView();
  };

  const resetMapView = () => {
    setZoom(1.25);
    setMapOffset({ x: 0, y: 0 });
  };

  const adjustZoom = (change: number) => {
    setZoom((current) => Math.min(2.5, Math.max(1, current + change)));
  };

  return (
    <div
      className={styles.root}
      ref={rootRef}
      role="group"
      aria-label="Interactive map of Enactus Philippines university participants"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setPinnedUniversityId(null);
          setHoveredUniversityId(null);
        }
      }}
      onClick={(event) => {
        if (!(event.target instanceof Element) || !event.target.closest("[data-university-marker]")) {
          setPinnedUniversityId(null);
        }
      }}
    >
      <aside className={styles.regionPanel} aria-label="Explore island groups">
        <h2 className={styles.panelTitle}>Explore by region</h2>
        <div className={styles.islandControls} role="group" aria-label="Select a region">
          <button
            type="button"
            className={`${styles.islandButton} ${selectedIsland === null ? styles.islandButtonSelected : ""}`}
            aria-pressed={selectedIsland === null}
            onClick={() => selectIsland(null)}
          >
            All islands
          </button>
          {islandGroups.map((island) => (
          <button
            type="button"
            className={`${styles.islandButton} ${selectedIsland === island ? styles.islandButtonSelected : ""}`}
            aria-pressed={selectedIsland === island}
            key={island}
            onClick={() => selectIsland(island)}
          >
            {islandGroupLabels[island]}
          </button>
          ))}
        </div>
        <div className={styles.regionSummary} aria-live="polite">
          {selectedIsland ? (
            <>
              <h3>{islandGroupLabels[selectedIsland]}</h3>
              <p>
                {selectedIsland === "luzon" &&
                  "The northern island group, stretching from the Ilocos region through Metro Manila to the Bicol peninsula."}
                {selectedIsland === "visayas" &&
                  "The central archipelago, where island communities connect across the Philippine sea lanes."}
                {selectedIsland === "mindanao" &&
                  "The southern island group, home to communities across Mindanao and nearby islands."}
              </p>
              <strong>
                {enactusUniversityLocations.filter(
                  (university) => university.islandGroup === selectedIsland,
                ).length}{" "}
                mapped campuses
              </strong>
              <p className={styles.campusLocations}>
                {enactusUniversityLocations
                  .filter((university) => university.islandGroup === selectedIsland)
                  .map((university) => university.cityProvince.split(",")[0])
                  .filter((location, index, locations) => locations.indexOf(location) === index)
                  .join(" · ")}
              </p>
            </>
          ) : (
            <>
              <h3>Across the Philippines</h3>
              <p>Explore the island groups represented in the 2026 National Competition Top 30.</p>
              <strong>{enactusUniversityLocations.length} mapped campuses</strong>
            </>
          )}
        </div>
      </aside>

      <div
        className={`${styles.mapFrame} ${isPanning ? styles.mapFramePanning : ""}`}
        ref={mapFrameRef}
        onPointerDown={(event) => {
          if (event.button !== 0 || (event.target instanceof Element && event.target.closest("button"))) {
            return;
          }
          mapDragRef.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            offsetX: mapOffset.x,
            offsetY: mapOffset.y,
            moved: false,
          };
          event.currentTarget.setPointerCapture(event.pointerId);
          setIsPanning(true);
        }}
        onPointerMove={(event) => {
          const drag = mapDragRef.current;
          if (!drag || drag.pointerId !== event.pointerId) return;

          const deltaX = event.clientX - drag.startX;
          const deltaY = event.clientY - drag.startY;
          if (!drag.moved && Math.hypot(deltaX, deltaY) < 4) return;
          drag.moved = true;

          const bounds = event.currentTarget.getBoundingClientRect();
          const fitScale = Math.max(
            bounds.width / mapViewBox.width,
            bounds.height / mapViewBox.height,
          );
          const mapWidth = mapViewBox.width * fitScale;
          const mapHeight = mapViewBox.height * fitScale;
          const maxOffsetX = Math.max(0, (mapWidth * zoom - bounds.width) / 2);
          const maxOffsetY = Math.max(0, (mapHeight * zoom - bounds.height) / 2);
          setMapOffset({
            x: Math.max(-maxOffsetX, Math.min(maxOffsetX, drag.offsetX + deltaX)),
            y: Math.max(-maxOffsetY, Math.min(maxOffsetY, drag.offsetY + deltaY)),
          });
        }}
        onPointerUp={(event) => {
          const drag = mapDragRef.current;
          if (!drag || drag.pointerId !== event.pointerId) return;
          suppressNextMapClickRef.current = drag.moved;
          mapDragRef.current = null;
          setIsPanning(false);
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={() => {
          mapDragRef.current = null;
          setIsPanning(false);
        }}
        onClick={() => {
          suppressNextMapClickRef.current = false;
        }}
      >
        <div
          className={styles.mapCanvas}
          style={{
            width: mapCanvasSize?.width ?? "100%",
            height: mapCanvasSize?.height ?? "auto",
            transform: `translate3d(calc(-50% + ${mapOffset.x}px), calc(-50% + ${mapOffset.y}px), 0) scale(${zoom})`,
          }}
        >
          <div className={styles.svgHost} ref={svgHostRef}>
            {mapError ? (
              <p className={styles.mapError} role="alert">
                {mapError}
              </p>
            ) : (
              <p className={styles.mapLoading} role="status">
                Loading the Philippines map…
              </p>
            )}
          </div>

          {enactusUniversityLocations.map((university) => {
            const isActive = activeUniversityId === university.id;
            const isHighlighted =
              selectedIsland !== null && selectedIsland === university.islandGroup;
            const position = {
              left: `${(university.mapCoordinates.x / mapViewBox.width) * 100}%`,
              top: `${(university.mapCoordinates.y / mapViewBox.height) * 100}%`,
            };

            return (
              <div
                className={`${styles.markerPosition} ${isActive ? styles.markerPositionActive : ""}`}
                key={university.id}
                style={position}
              >
                <button
                  type="button"
                  data-university-marker
                  className={`${styles.marker} ${isHighlighted ? styles.markerHighlighted : ""}`}
                  aria-label={`${university.name}, ${university.cityProvince}. ${university.participationEvidence}. Activate for details.`}
                  aria-expanded={isActive}
                  aria-controls={`university-popup-${university.id}`}
                  aria-describedby={isActive ? `university-popup-${university.id}` : undefined}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") {
                      setHoveredUniversityId(university.id);
                    }
                  }}
                  onPointerLeave={() => setHoveredUniversityId(null)}
                  onFocus={() => setHoveredUniversityId(university.id)}
                  onBlur={() => setHoveredUniversityId(null)}
                  onClick={() =>
                    setPinnedUniversityId((current) =>
                      current === university.id ? null : university.id,
                    )
                  }
                >
                  <span className={styles.markerDot} aria-hidden="true" />
                </button>

                {isActive && (
                  <div
                    className={`${styles.popup} ${
                      university.mapCoordinates.x / mapViewBox.width > 0.78
                        ? styles.popupRight
                        : university.mapCoordinates.x / mapViewBox.width < 0.22
                          ? styles.popupLeft
                          : ""
                    }`}
                    id={`university-popup-${university.id}`}
                    role="tooltip"
                  >
                    <strong>{university.name}</strong>
                    <span>{university.cityProvince}</span>
                    <small>{university.participationEvidence}</small>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.zoomControls} role="group" aria-label="Map zoom controls">
          <button
            type="button"
            className={styles.zoomButton}
            aria-label="Zoom in"
            disabled={zoom >= 2.5}
            onClick={() => adjustZoom(0.25)}
          >
            +
          </button>
          <button
            type="button"
            className={styles.zoomButton}
            aria-label="Zoom out"
            disabled={zoom <= 1}
            onClick={() => adjustZoom(-0.25)}
          >
            −
          </button>
          <button
            type="button"
            className={styles.resetButton}
            onClick={resetMapView}
          >
            Reset
          </button>
        </div>
      </div>

      <p className={styles.mapCaption}>
        Select a region to move the map; drag to explore.
      </p>
    </div>
  );
}
