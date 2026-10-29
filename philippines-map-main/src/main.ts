import { initMap } from "./map/index.js";
import { initPageIndicator } from "./shared/pageIndicator.js";
import { initOrientationGuard } from "./shared/orientation.js";
import { showToast } from "./shared/toast.js";

async function bootstrap(): Promise<void> {
  const orientationOverlay = document.querySelector<HTMLElement>("[data-orientation-overlay]");
  if (orientationOverlay) initOrientationGuard(orientationOverlay);

  const pagesContainer = document.querySelector<HTMLElement>("[data-pages]");
  const indicatorContainer = document.querySelector<HTMLElement>("[data-page-indicator]");
  if (pagesContainer && indicatorContainer) {
    initPageIndicator(pagesContainer, indicatorContainer);
  }

  const page1 = document.querySelector<HTMLElement>("[data-page='page1']");
  if (!page1) return;

  try {
    await initMap(page1);
  } catch (err) {
    console.error(err);
    showToast("Could not load the map. Is the server running?", "error");
  }
}

void bootstrap();
