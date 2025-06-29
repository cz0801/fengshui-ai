// LandingSubNavbar.tsx
export default function LandingNavbar() {
  return (
    <div className="w-full bg-background border-b border-default-200">
      <div className="w-full flex gap-6 py-3 text-sm text-default-600">
        <a href="#floor-layout-fengshui" className="hover:text-primary transition-colors">
          Home Fengshui
        </a>
        <a href="#bedroom-fengshui" className="hover:text-primary transition-colors">
          Bedroom Fengshui
        </a>
        <a href="#room-layout-planner" className="hover:text-primary transition-colors">
          Draw Bedroom Layout
        </a>
      </div>
    </div>
  );
}