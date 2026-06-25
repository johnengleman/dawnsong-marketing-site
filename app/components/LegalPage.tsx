import type { TermsContent } from "../lib/termsContent";
import type { PrivacyPolicyContent } from "../privacy/privacyContent";

type LegalContent = TermsContent | PrivacyPolicyContent;

export function LegalPage({
  content,
  htmlLang,
}: {
  content: LegalContent;
  htmlLang: string;
}) {
  return (
    <main
      className="min-h-screen bg-[#fffbf7] pt-24 text-[#2d2a26]"
      lang={htmlLang}
    >
      <div className="mx-auto w-full max-w-3xl px-6 py-20">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          {content.title}
        </h1>
        <p className="mb-4 text-sm text-[#6b6560]">{content.lastUpdated}</p>
        {content.translationNote ? (
          <p className="mb-10 rounded-2xl border border-[#ead9bf] bg-[#fff7ea] px-5 py-4 text-sm leading-relaxed text-[#6b6560]">
            {content.translationNote}
          </p>
        ) : (
          <div className="mb-10" />
        )}

        <section className="space-y-4 text-[#4b4742] leading-relaxed">
          <p>{content.intro}</p>

          {"summaryTitle" in content ? (
            <>
              <h2 className="mt-10 text-2xl font-bold text-[#2d2a26]">
                {content.summaryTitle}
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                {content.summary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}

          {content.sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="mt-10 text-2xl font-bold text-[#2d2a26]">
                {section.title}
              </h2>
              {section.kind === "list" ? (
                <ul className="list-disc space-y-2 pl-6">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : "paragraphs" in section ? (
                section.paragraphs.map((paragraph) => (
                  <p key={`${paragraph.label ?? ""}${paragraph.text}`}>
                    {paragraph.label ? (
                      <>
                        <strong>{paragraph.label}</strong>{" "}
                      </>
                    ) : null}
                    {paragraph.text}
                  </p>
                ))
              ) : (
                <p>{section.text}</p>
              )}
            </section>
          ))}

          <h2 className="mt-10 text-2xl font-bold text-[#2d2a26]">
            {content.contactTitle}
          </h2>
          <p>
            {content.contactIntro}
            <br />
            <a
              className="text-[#4a6fa5] underline"
              href={`mailto:${content.contactEmail}`}
            >
              {content.contactEmail}
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
