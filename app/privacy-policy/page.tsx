// app/privacy-policy/page.tsx（Next.js App Router 示例）
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: 'Privacy Policy | AI Feng Shui',
  description:
    'Learn how we handle your personal data at aifengshui.app. We value your privacy and respect your choices.',
    canonical: 'https://www.aifengshui.app/privacy-policy',
});

export default function PrivacyPolicy() {
  return (
    <main className="max-w-screen-lg mx-auto px-6 gap-10 py-10">
      <h1 className="text-2xl font-bold mb-6 text-default-800">Privacy Policy</h1>

      <p>Last updated: May 13, 2025</p>

      <p className="mt-4">
        This Privacy Policy explains how we collect, use, and protect your information when you visit our website <strong>aifengshui.app</strong>.
      </p>

      <h2 className="mt-6 font-semibold text-default-800">1. Information We Collect</h2>
      <ul className="list-disc pl-5 mt-2">
        <li>Device and browser information (e.g., IP address, browser type)</li>
        <li>Optional input data such as birth date and location (for Feng Shui analysis)</li>
        <li>Contact information if you submit a form (email, name, etc.)</li>
      </ul>

      <h2 className="mt-6 font-semibold text-default-800">2. How We Use Your Information</h2>
      <ul className="list-disc pl-5 mt-2">
        <li>To provide personalized Feng Shui analysis or Bazi reading</li>
        <li>To improve website functionality and user experience</li>
        <li>To comply with legal obligations and protect our platform</li>
      </ul>

      <h2 className="mt-6 font-semibold text-default-800">3. Sharing of Information</h2>
      <p className="mt-2">
        We do not sell or share your personal information with third parties, except:
      </p>
      <ul className="list-disc pl-5 mt-2">
        <li>With service providers that help us operate the site</li>
        <li>When required by law or legal process</li>
      </ul>

      <h2 className="mt-6 font-semibold text-default-800">4. Cookies</h2>
      <p className="mt-2">
        We may use cookies or similar tracking technologies to analyze site traffic and enhance your experience. You can disable cookies through your browser settings.
      </p>

      <h2 className="mt-6 font-semibold text-default-800">5. Data Retention</h2>
      <p className="mt-2">
        We retain your information only as long as necessary to fulfill the purposes described in this policy.
      </p>

      <h2 className="mt-6 font-semibold text-default-800">6. Your Rights</h2>
      <p className="mt-2">
        You may request to access, correct, or delete your personal information by contacting us (see below).
      </p>

      <h2 className="mt-6 font-semibold text-default-800">7. Contact Us</h2>
      <p className="mt-2">
        If you have any questions about this Privacy Policy, you can contact us at:
      </p>
        <a
          href="https://x.com/ZhuoChen6876"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium text-sm mt-4"
        >
          @ZhuoChen6876 on X (Twitter)
        </a>
    </main>
  );
}