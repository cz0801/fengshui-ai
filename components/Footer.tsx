// components/landing/Footer.tsx
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="max-w-screen-lg mx-auto w-full border-t border-default-200 bg-background text-default-600 py-8 px-6 text-sm">
      <div className="w-full flex flex-col md:flex-row justify-between gap-6">
        {/* 左侧版权信息 */}
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            className="hover:underline text-primary"
          >
            Floor Layout Fengshui
          </Link>
          <Link
            href="/bedroom-layout"
            className="hover:underline text-primary"
          >
            Bedroom Fengshui
          </Link>
          <p className="font-medium text-default-800 mt-2">AI Feng Shui</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* 右侧友情链接 */}
        <div className="flex flex-col gap-1">
          <a
            href="/privacy-policy"
            className="hover:underline text-primary"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="hover:underline text-primary"
          >
            Terms of Service
          </a>
          <p className="font-medium text-default-800 mt-2">Related Tools</p>
          <a
            href="https://shen-shu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            AI-Powered Bazi Calculator – shen-shu.com
          </a>
        </div>
      </div>
    </footer>
  );
}