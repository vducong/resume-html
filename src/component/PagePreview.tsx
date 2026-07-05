import { ReactNode, useRef } from "react";
import { usePageOverflow } from "../hooks/usePageOverflow";

type PagePreviewProps = {
  readonly children: ReactNode;
};

export function PagePreview({ children }: PagePreviewProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const overflows = usePageOverflow(pageRef);

  return (
    <div
      className={`page-preview${overflows ? " page-preview--overflow" : ""}`}
    >
      <div className="page-one-boundary" aria-hidden="true" />
      {overflows && <div className="page-preview__overflow-warning">p1</div>}
      <div className="page" ref={pageRef}>
        {children}
      </div>
    </div>
  );
}
