import type { WorkingItemProps } from "../../types";

export function WorkingItem({ item }: { readonly item: WorkingItemProps }) {
  return <div className="workingItem">{item.work}</div>;
}
