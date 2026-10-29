# Philippines Interactive Map

An interactive map of the Philippines split into Luzon, Visayas, and Mindanao, with a built-in editor for tagging every province with its name and region.

## Features

- **Island focus:** the Luzon, Visayas and Mindanao buttons zoom the map onto that island group (about 80% of the map area) and dim the other islands. The `1:1` button resets the zoom and restores everything.
- **Province highlight:** hover (or tap) a province to highlight it. A province made of several shapes lights up together.
- **Tooltip:** shows the island, province name, region and the region's color.
- **Zoom and pan:** mouse wheel, drag, and on-screen `+` / `−` / `1:1` buttons.
- **Preview by Region:** colors every province by its region, with a legend.
- **Editor:** in Edit Mode, select one or more shapes, type a province name (autocomplete fills in the region) and apply it. Save writes the changes into the SVG file, or download the edited SVG.
- **Landscape guard:** on small screens in portrait, a message asks the user to rotate the device.

## Project structure

```
src/
  main.ts               entry point (builds to public/dist/main.js)
  map/                  everything for the map
    index.ts            initMap(page): sets up the map inside a page section
    svg.ts, api.ts      SVG helpers and load/save calls
    mapZoom.ts          zoom, pan and focus-on-island
    islandNav.ts        island buttons and dimming
    hover.ts            province highlight
    tooltip.ts          province tooltip
    editor.ts           province/region editor
    regionPreview.ts    color-by-region preview and legend
    regionColors.ts     one fixed color per region
    provinceRegions.ts  province name -> region lookup
    types.ts            shared types and the list of regions
  shared/               reusable on any page
    toast.ts            toast messages
    orientation.ts      portrait/landscape guard
    pageIndicator.ts    scroll-snap page dots
public/
  index.html
  styles.css
data/
  ph_islands.svg        the map (edited by the Save button)
```

## Adding another page

1. Add a `<section class="page" data-page="page2" data-page-name="...">` to `public/index.html`. The page dots pick it up automatically.
2. Import what you need from `src/shared/` in your page's code.
3. To reuse the map on that page, include a `[data-map-host]` element and the map controls in the section, then call `initMap(section)`.

## Server

A small dependency-free Node server (`index.ts`) that:

- serves the files in `public/` (default port `3000`, override with the `PORT` environment variable)
- `GET /api/svg` returns the map SVG from `data/ph_islands.svg`
- `POST /api/svg` writes `data-province` and `data-region` attributes back into that file