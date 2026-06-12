export const metadata = {
  title: "Terms of Use - Dawn Song",
  description: "Terms of Use for the Dawn Song mobile application and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fffbf7] text-[#2d2a26]">
      <div className="mx-auto w-full max-w-3xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Terms of Use
        </h1>
        <p className="text-sm text-[#6b6560] mb-10">
          Last updated: Feb 1, 2026
        </p>

        <section className="space-y-4 text-[#4b4742] leading-relaxed">
          <p>
            These Terms of Use govern your use of the Dawn Song mobile application
            and related services (the “Service”). By using the Service, you
            agree to these terms.
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Use of Service
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 13 years old to use the Service.</li>
            <li>
              You are responsible for your account and any activity under it.
            </li>
            <li>Do not misuse the Service or attempt to disrupt it.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Subscriptions
          </h2>
          <p>
            If you purchase a subscription, it will renew automatically unless
            canceled. You can manage or cancel subscriptions in your App Store
            account settings.
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Content and Data
          </h2>
          <p>
            You retain ownership of your data. You grant us a limited license to
            host and process your data to provide the Service.
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Acceptable Use
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Do not violate any laws or third-party rights.</li>
            <li>Do not attempt to access other users’ data.</li>
            <li>Do not reverse engineer or copy the Service.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Disclaimers
          </h2>
          <p>
            The Service is provided “as is” without warranties of any kind. We
            do not guarantee uninterrupted or error-free operation.
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, we are not liable for any
            indirect, incidental, or consequential damages arising from your use
            of the Service.
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">
            Termination
          </h2>
          <p>
            We may suspend or terminate access to the Service if you violate
            these Terms.
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">Changes</h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            Service after changes means you accept the updated Terms.
          </p>

          <h2 className="text-2xl font-bold text-[#2d2a26] mt-10">Contact</h2>
          <p>
            Questions? Contact us at:
            <br />
            <a
              className="text-[#4a6fa5] underline"
              href="mailto:sona@englemanconsulting.com"
            >
              sona@englemanconsulting.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
