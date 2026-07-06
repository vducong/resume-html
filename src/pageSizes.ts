export type PageSizePreset = "a4" | "letter" | "custom";

export type PageDimensions = {
  width: string;
  height: string;
};

export type PageSizePresetConfig = PageDimensions & {
  label: string;
};

export const PAGE_SIZE_PRESETS: Record<Exclude<PageSizePreset, "custom">, PageSizePresetConfig> = {
  a4: {
    label: "A4",
    width: "210mm",
    height: "297mm",
  },
  letter: {
    label: "US Letter",
    width: "216mm",
    height: "279mm",
  },
};

export const DEFAULT_CUSTOM_DIMENSIONS: PageDimensions = {
  width: "210mm",
  height: "297mm",
};

export const DEFAULT_PAGE_SIZE_PRESET: PageSizePreset = "a4";

export const PAGE_SIZE_STORAGE_KEY = "resume-page-size";

export type StoredPageSize = {
  preset: PageSizePreset;
  customWidth: string;
  customHeight: string;
};

export function getDimensionsForPreset(
  preset: PageSizePreset,
  custom: PageDimensions,
): PageDimensions {
  if (preset === "custom") {
    return custom;
  }

  const { width, height } = PAGE_SIZE_PRESETS[preset];
  return { width, height };
}

export function loadStoredPageSize(): StoredPageSize {
  try {
    const raw = localStorage.getItem(PAGE_SIZE_STORAGE_KEY);
    if (!raw) {
      return {
        preset: DEFAULT_PAGE_SIZE_PRESET,
        customWidth: DEFAULT_CUSTOM_DIMENSIONS.width,
        customHeight: DEFAULT_CUSTOM_DIMENSIONS.height,
      };
    }

    const parsed = JSON.parse(raw) as Partial<StoredPageSize>;
    const preset = parsed.preset ?? DEFAULT_PAGE_SIZE_PRESET;

    if (preset !== "a4" && preset !== "letter" && preset !== "custom") {
      return {
        preset: DEFAULT_PAGE_SIZE_PRESET,
        customWidth: DEFAULT_CUSTOM_DIMENSIONS.width,
        customHeight: DEFAULT_CUSTOM_DIMENSIONS.height,
      };
    }

    return {
      preset,
      customWidth: parsed.customWidth ?? DEFAULT_CUSTOM_DIMENSIONS.width,
      customHeight: parsed.customHeight ?? DEFAULT_CUSTOM_DIMENSIONS.height,
    };
  } catch {
    return {
      preset: DEFAULT_PAGE_SIZE_PRESET,
      customWidth: DEFAULT_CUSTOM_DIMENSIONS.width,
      customHeight: DEFAULT_CUSTOM_DIMENSIONS.height,
    };
  }
}

export function saveStoredPageSize(state: StoredPageSize): void {
  localStorage.setItem(PAGE_SIZE_STORAGE_KEY, JSON.stringify(state));
}
