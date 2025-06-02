// ExampleNavbar.tsx
export default function RoomPlannerNavbar() {
  return (
    <div className="w-full bg-background border-b border-default-200 sticky top-[79px] z-50 hidden md:block">
      <div className="w-full flex gap-6 py-3 text-sm text-default-600">
        <a href="#examples" className="hover:text-primary transition-colors">
          Fengshui Bedroom Examples
        </a>
        <a href="#faq" className="hover:text-primary transition-colors">
          FAQ
        </a>
      </div>
    </div>
  );
}