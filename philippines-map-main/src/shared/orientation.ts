const MOBILE_BREAKPOINT = 900; // px — below this we treat the device as "mobile"

export function initOrientationGuard(overlay: HTMLElement): void {
  const check = () => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT || window.innerHeight < MOBILE_BREAKPOINT;
    const isPortrait = window.innerHeight > window.innerWidth;
    overlay.classList.toggle("visible", isMobile && isPortrait);
  };

  check();
  window.addEventListener("resize", check);
  window.addEventListener("orientationchange", check);
}
