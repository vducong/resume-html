import { ReactNode } from "react";

export function Section({
  title,
  content,
}: {
  readonly title: string;
  readonly content: ReactNode;
}) {
  return (
    <section className="sectionMain">
      <TitleFormatted title={title} />
      {content}
    </section>
  );
}

function TitleFormatted({ title }: { readonly title: string }) {
  const words = title.split(" ");
  return (
    <div className="sectionTitle">
      {words.map((word, idx) => (
        <span key={`${idx}${word}`}>
          <span style={{ fontSize: "1.25em" }}>{word.charAt(0)}</span>
          {word.slice(1)}{" "}
        </span>
      ))}
    </div>
  );
}
