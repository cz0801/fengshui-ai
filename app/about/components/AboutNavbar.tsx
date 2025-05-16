// LandingSubNavbar.tsx
export default function AboutNavbar() {
  return (
    <div className="w-full bg-background border-b border-default-200">
      <div className="w-full flex gap-6 py-3 text-sm text-default-600">
        <a href="#mission" className="hover:text-primary transition-colors">
          Our Mission
        </a>
        <a href="#team" className="hover:text-primary transition-colors">
          Behind AI Feng Shui
        </a>
      </div>
    </div>
  );
}