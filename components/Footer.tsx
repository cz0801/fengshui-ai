// components/landing/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full border-t border-default-200 bg-background text-default-600 py-8 px-6 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* 左侧版权信息 */}
        <div>
          <p className="font-medium text-default-800">AI Feng Shui</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* 中间链接 */}
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
        </div>

        {/* 右侧友情链接 */}
        <div>
          <p className="font-medium text-default-800 mb-1">Related Tools</p>
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