import { usePageSize } from "../hooks/usePageSize";
import { PAGE_SIZE_PRESETS, type PageSizePreset } from "../pageSizes";

import "../style/PageSizeControls.css";

const PRESET_OPTIONS: { value: PageSizePreset; label: string }[] = [
  { value: "a4", label: PAGE_SIZE_PRESETS.a4.label },
  { value: "letter", label: PAGE_SIZE_PRESETS.letter.label },
  { value: "custom", label: "Custom" },
];

export function PageSizeControls() {
  const { preset, customWidth, customHeight, setPreset, setCustomWidth, setCustomHeight, print } =
    usePageSize();

  return (
    <div className="page-size-controls">
      <label className="page-size-controls__field">
        <span className="page-size-controls__label">Page size</span>
        <select
          className="page-size-controls__select"
          value={preset}
          onChange={(event) => setPreset(event.target.value as PageSizePreset)}
        >
          {PRESET_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      {preset === "custom" && (
        <>
          <label className="page-size-controls__field">
            <span className="page-size-controls__label">Width</span>
            <input
              className="page-size-controls__input"
              type="text"
              value={customWidth}
              placeholder="width in mm"
              onChange={(event) => setCustomWidth(event.target.value)}
            />
          </label>
          <label className="page-size-controls__field">
            <span className="page-size-controls__label">Height</span>
            <input
              className="page-size-controls__input"
              type="text"
              value={customHeight}
              placeholder="height in mm"
              onChange={(event) => setCustomHeight(event.target.value)}
            />
          </label>
        </>
      )}

      <button type="button" className="page-size-controls__print" onClick={print}>
        Print / Save PDF
      </button>
    </div>
  );
}
