import { useCallback, useEffect, useMemo, useState } from "react";

import {
  getDimensionsForPreset,
  loadStoredPageSize,
  saveStoredPageSize,
  type PageDimensions,
  type PageSizePreset,
  type StoredPageSize,
} from "../pageSizes";

const PRINT_STYLE_ID = "print-page-size";

function applyPageDimensions(dimensions: PageDimensions, preset: PageSizePreset) {
  const root = document.documentElement;
  root.style.setProperty("--page-width", dimensions.width);
  root.style.setProperty("--page-height", dimensions.height);
  root.dataset.pageSize = preset;

  let style = document.getElementById(PRINT_STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = PRINT_STYLE_ID;
    document.head.appendChild(style);
  }

  style.textContent = `@media print {
  @page {
    size: ${dimensions.width} ${dimensions.height};
    margin: 0;
  }
}`;
}

export function usePageSize() {
  const [stored, setStored] = useState<StoredPageSize>(loadStoredPageSize);

  const dimensions = useMemo(
    () =>
      getDimensionsForPreset(stored.preset, {
        width: stored.customWidth,
        height: stored.customHeight,
      }),
    [stored],
  );

  useEffect(() => {
    applyPageDimensions(dimensions, stored.preset);
  }, [dimensions, stored.preset]);

  const setPreset = useCallback((preset: PageSizePreset) => {
    setStored((current) => {
      const next = { ...current, preset };
      saveStoredPageSize(next);
      return next;
    });
  }, []);

  const setCustomWidth = useCallback((customWidth: string) => {
    setStored((current) => {
      const next = { ...current, customWidth, preset: "custom" as const };
      saveStoredPageSize(next);
      return next;
    });
  }, []);

  const setCustomHeight = useCallback((customHeight: string) => {
    setStored((current) => {
      const next = { ...current, customHeight, preset: "custom" as const };
      saveStoredPageSize(next);
      return next;
    });
  }, []);

  const print = useCallback(() => {
    window.print();
  }, []);

  return {
    preset: stored.preset,
    customWidth: stored.customWidth,
    customHeight: stored.customHeight,
    dimensions,
    setPreset,
    setCustomWidth,
    setCustomHeight,
    print,
  };
}
