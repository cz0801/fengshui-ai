import Link from 'next/link';

export default function ExploreYourLayoutCta() {
  return (
    <section className="bg-default-100 p-6 rounded-xl flex flex-col items-start gap-4 md:gap-6" id="room-planner">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Ready to design your own feng shui layout?
      </h2>
      <p className="text-default-700 text-base">
        Inspired by these examples? Try our free interactive tool to plan your bedroom layout online and get instant feng shui insights powered by AI. Discover the best bed placement, chi flow, and furniture arrangement for a peaceful, balanced space.
      </p>
      <Link
        href="/room-planner"
        className="bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-primary-600 transition"
      >
        Try the Room Planner →
      </Link>
    </section>
  );
}