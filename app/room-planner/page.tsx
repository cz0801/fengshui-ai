// RoomPlannerPage.tsx
import BedroomExampleGallery from "@/components/BedroomExampleGallery";
import RoomLayoutPlanner from "./components/RoomPlanner";
import RoomPlannerHero from "./components/RoomPlannerHero";
import { generateMetadata } from "@/utils/metadata";
import RoomPlannerFaq from "./components/RoomPlannerFaq";
import RoomPlannerNavbar from "./components/RoomPlannerNavbar";

export const metadata = generateMetadata({
  title: 'Bedroom Layout Generator | AI Feng Shui Room Planner Tool',
  description:
    'Design your bedroom layout online and get AI-powered feng shui analysis. Optimize bed placement and energy flow for a harmonious layout.',
  keywords: [
    'feng shui bedroom layout',
    'small bedroom feng shui layout',
    'feng shui room layout',
    'bedroom feng shui',
    'AI feng shui tool',
    'feng shui bed placement',
    'room planner feng shui',
    'feng shui interior design',
    'feng shui floor plan'
  ],
  canonical: 'https://www.aifengshui.app/room-planner',
});

export default function RoomPlannerPage() {
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto px-6 gap-10 pb-10">
      <RoomPlannerNavbar />
      <RoomPlannerHero />
      <RoomLayoutPlanner />
      <BedroomExampleGallery />
      <RoomPlannerFaq />
    </main>
  );
}