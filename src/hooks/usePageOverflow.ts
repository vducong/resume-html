import { RefObject, useEffect, useState } from "react";

function measurePageHeightPx(): number {
  const probe = document.createElement("div");
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  probe.style.height = "var(--page-height)";
  probe.style.width = "0";
  probe.style.pointerEvents = "none";
  document.body.appendChild(probe);
  const height = probe.getBoundingClientRect().height;
  document.body.removeChild(probe);
  return height;
}

export function usePageOverflow(pageRef: RefObject<HTMLElement | null>): boolean {
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) {
      return;
    }

    const checkOverflow = () => {
      const pageHeightPx = measurePageHeightPx();
      setOverflows(page.scrollHeight > pageHeightPx + 1);
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(page);

    const rootObserver = new MutationObserver(checkOverflow);
    rootObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "data-page-size"],
    });

    window.addEventListener("resize", checkOverflow);

    return () => {
      resizeObserver.disconnect();
      rootObserver.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, [pageRef]);

  return overflows;
}
