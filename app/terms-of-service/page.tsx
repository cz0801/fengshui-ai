// app/terms-of-service/page.tsx

export const metadata = {
  title: 'Terms of Service | AI Feng Shui',
  description:
    'Please read the terms and conditions of using aifengshui.app. Learn about usage rules, disclaimers, and your responsibilities as a user.',
  alternates: {
    canonical: 'https://www.aifengshui.app/terms-of-service',
  },
};

export default function TermsOfService() {
  return (
    <main className="max-w-screen-lg mx-auto px-6 gap-10 py-10 leading-relaxed text-default-600">
      <h1 className="text-2xl font-bold mb-6 text-default-800">Terms of Service</h1>

      <p>Last updated: May 13, 2025</p>

      <h2 className="mt-6 font-semibold text-default-800">1. Acceptance of Terms</h2>
      <p className="mt-2">
        By accessing or using aifengshui.app (&quot;the Site&quot;), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part, please do not use the Site.
      </p>

      <h2 className="mt-6 font-semibold text-default-800">2. Use of the Site</h2>
      <p className="mt-2">
        This website offers AI-generated Feng Shui and Bazi-related content for informational and entertainment purposes only. We do not guarantee the accuracy or completeness of any interpretation or prediction.
      </p>

      <h2 className="mt-6 font-semibold text-default-800">3. Intellectual Property</h2>
      <p className="mt-2">
        All content, trademarks, logos, and designs on the Site are the intellectual property of aifengshui.app and may not be copied, reproduced, or distributed without permission.
      </p>

      <h2 className="mt-6 font-semibold text-default-800">4. Disclaimer</h2>
      <p className="mt-2">
        The Site provides no professional or legal advice. AI interpretations and Feng Shui suggestions should not be considered a substitute for licensed professional consultation.
      </p>

      <h2 className="mt-6 font-semibold text-default-800">5. Limitation of Liability</h2>
      <p className="mt-2">
        We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site or reliance on its content.
      </p>

      <h2 className="mt-6 font-semibold text-default-800">6. Modifications</h2>
      <p className="mt-2">
        We reserve the right to update or modify these Terms at any time. Continued use of the Site after changes constitutes acceptance of the revised terms.
      </p>

      <h2 className="mt-6 font-semibold text-default-800">7. Governing Law</h2>
      <p className="mt-2">
        These Terms shall be governed by and interpreted in accordance with the laws of your local jurisdiction, without regard to its conflict of law provisions.
      </p>

      <h2 className="mt-6 font-semibold text-default-800">8. Contact</h2>
      <p className="mt-2">
        If you have questions about these Terms, please contact us at:
      </p>
      <a
        href="https://x.com/ZhuoChen6876"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline font-medium text-sm mt-2"
      >
        @ZhuoChen6876 on X (Twitter)
      </a>
    </main>
  );
}