export function initPageIndicator(pagesContainer: HTMLElement, indicatorContainer: HTMLElement): void {
  const pages = Array.from(pagesContainer.querySelectorAll<HTMLElement>(".page"));
  if (pages.length === 0) return;

  indicatorContainer.innerHTML = "";
  const dots: HTMLButtonElement[] = pages.map((page, i) => {
    const dot = document.createElement("button");
    dot.className = "page-dot";
    dot.setAttribute("aria-label", page.dataset.pageName ?? `Page ${i + 1}`);
    dot.addEventListener("click", () => {
      page.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    indicatorContainer.appendChild(dot);
    return dot;
  });

  dots[0]?.classList.add("active");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const idx = pages.indexOf(entry.target as HTMLElement);
          dots.forEach((d, i) => d.classList.toggle("active", i === idx));
        }
      }
    },
    { root: pagesContainer, threshold: 0.55 }
  );

  for (const page of pages) observer.observe(page);
}
