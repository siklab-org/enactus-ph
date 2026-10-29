export function showToast(message: string, kind: "success" | "error" = "success"): void {
  let container = document.querySelector<HTMLElement>("[data-toast-container]");
  if (!container) {
    container = document.createElement("div");
    container.setAttribute("data-toast-container", "");
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${kind}`;
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}
