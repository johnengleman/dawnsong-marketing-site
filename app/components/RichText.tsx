import type { RichTextPart } from "../lib/siteContent";

export function RichText({ parts }: { parts: RichTextPart[] }) {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === "string") return <span key={index}>{part}</span>;
        if ("em" in part) return <em key={index}>{part.em}</em>;
        if ("strong" in part) return <strong key={index}>{part.strong}</strong>;
        return <br key={index} className="gallery-br" />;
      })}
    </>
  );
}
