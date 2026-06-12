export const metadata = {
  title: "Support - Dawn Song",
  description: "Get help with the Dawn Song app.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#fffbf7] text-[#2d2a26]">
      <div className="mx-auto w-full max-w-3xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Support
        </h1>
        <p className="text-lg text-[#6b6560] mb-8">
          Need help with Dawn Song? Email us and we’ll get back to you.
        </p>
        <a
          className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#2d2a26] text-white font-semibold hover:bg-[#3d3a36] transition-colors shadow-xl shadow-amber-900/10"
          href="mailto:sona@englemanconsulting.com"
        >
          sona@englemanconsulting.com
        </a>
        <p className="text-sm text-[#6b6560] mt-6">
          Include your device model, iOS version, and a brief description of the
          issue for faster help.
        </p>
      </div>
    </main>
  );
}
