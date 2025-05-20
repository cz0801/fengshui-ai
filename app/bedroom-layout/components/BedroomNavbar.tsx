// LandingSubNavbar.tsx
export default function BedroomNavbar() {
  return (
    <div className="w-full bg-background border-b border-default-200">
      <div className="w-full flex gap-6 py-3 text-sm text-default-600">
        <a href="#fengshui-analysis" className="hover:text-primary transition-colors">
          Fengshui Analysis
        </a>
        <a href="#how-it-works" className="hover:text-primary transition-colors">
          How It Works
        </a>
        <a href="#faq" className="hover:text-primary transition-colors">
          FAQ
        </a>
      </div>
    </div>
  );
}