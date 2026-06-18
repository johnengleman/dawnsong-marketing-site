export const metadata = {
  title: "Privacy Policy - Daybreak",
  description:
    "Daybreak privacy policy describing data collection, use, and user rights.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fffbf7] text-[#2d2a26]">
      <div className="mx-auto w-full max-w-3xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#6b6560] mb-10">
          Last updated: Feb 1, 2026
        </p>

        <section className="space-y-4 text-[#4b4742] leading-relaxed">
          <p>
            This Privacy Policy explains how Daybreak (“we,” “us,” or “our”) handles
            information when you use the Daybreak mobile application and related
            services (the “Service”).
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">Summary</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We collect only the data needed to provide the Service.</li>
            <li>Your data is never sold.</li>
            <li>
              You can request access, correction, or deletion at any time.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Information We Collect
          </h2>
          <p>
            <strong>Account Information:</strong> If you create an account, we
            may collect your email address and authentication details.
          </p>
          <p>
            <strong>App Data:</strong> Habit entries, schedules, reminders, and
            related app settings that you choose to store in the Service.
          </p>
          <p>
            <strong>Usage Data:</strong> Basic analytics about app performance
            and feature usage to improve reliability (e.g., crash reports).
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            How We Use Data
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain the Service.</li>
            <li>Sync your data across devices (if enabled).</li>
            <li>Improve app stability and user experience.</li>
            <li>Respond to support requests.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Data Sharing
          </h2>
          <p>
            We do not sell your data. We may share data with trusted service
            providers who help us operate the Service (e.g., hosting,
            analytics), under strict confidentiality obligations.
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Data Retention
          </h2>
          <p>
            We retain your data only as long as necessary to provide the Service
            or as required by law. You may request deletion at any time.
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access, update, or delete your personal data.</li>
            <li>Withdraw consent where applicable.</li>
            <li>Opt out of non-essential analytics where available.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect
            your information. However, no system is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Children’s Privacy
          </h2>
          <p>
            The Service is not directed to children under 13, and we do not
            knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">Contact</h2>
          <p>
            If you have any questions or requests, contact us at:
            <br />
            <a
              className="text-[#4a6fa5] underline"
              href="mailto:support@daybreakhabits.com"
            >
              support@daybreakhabits.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
