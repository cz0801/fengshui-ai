import ExampleFaqSection from "./components/ExampleFAQ";
import ExampleHeroSection from "./components/ExampleHeroSection";
import ExampleNavbar from "./components/ExampleNavbar";
import ExploreYourLayoutCta from "./components/ExploreYourLayoutCta";
import LayoutCase from "./components/LayoutCase";
import UploadRecommendationSection from "./components/UploadRecommendationSection";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: 'Feng Shui Bedroom Layout Examples | Upload Your Floor Plan',
  description:
    'Explore real bedroom layout examples that follow feng shui principles. Upload your own floor plan and get instant AI feng shui analysis for harmony and balance.',
  keywords: [
    'feng shui bedroom examples',
    'feng shui layout inspiration',
    'bedroom layout ideas',
    'feng shui room layout',
    'bed placement feng shui',
    'feng shui bedroom floor plan',
    'AI feng shui tool',
    'feng shui furniture placement',
    'feng shui bedroom case studies',
    'feng shui layout examples'
  ],
  canonical: 'https://www.aifengshui.app/fengshui-bedroom-example',
});

export default function Page() {
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto px-6 gap-10 pb-10">
      <ExampleNavbar />
      <ExampleHeroSection />
      <UploadRecommendationSection />
      <div className="grid grid-cols-1 gap-4 scroll-mt-[125px]" id="examples">
        <LayoutCase
          title="Single Bedroom with Balanced Bed and Desk Position"
          image="/images/bedroom-layout-examples/bedroom-layout-1.png"
          tags={["#SingleBed", "#NoDoorFacing", "#BalancedChi", "#SmallRoom"]}
          analysis="This compact single bedroom has great feng shui balance. The bed is placed securely against the wall and avoids facing the door, protecting restful energy. Walkways on both sides ensure smooth qi flow, while the desk and wardrobe are well-positioned to separate functions and maintain openness. The layout supports calm, focus, and healthy energy."
        />
        <LayoutCase
          title="Spacious Bedroom Layout with Balanced Zones"
          image="/images/bedroom-layout-examples/bedroom-layout-2.png"
          tags={["#DoubleBed", "#NoDoorFacing", "#DeskInCorner",  "#NoMirrorFacingBed", "#ChiFlowClear", "#FengShuiBalance"]}
          analysis="This layout offers excellent feng shui with a clear, open space in the center that allows smooth chi flow. The bed is placed against a solid wall and avoids facing the door, promoting restful sleep and stability. The desk and reading chair are tucked into quiet corners, supporting focus and relaxation without disrupting bedroom energy. Overall, the space feels grounded, uncluttered, and harmoniously divided for both rest and function."
        />

        <LayoutCase
          title="Symmetrical Bedroom with Strong Backing"
          image="/images/bedroom-layout-examples/bedroom-layout-3.png"
          tags={[
            "#DoubleBed",
            "#NoDoorFacing",
            "#WallBacking",
            "#DeskNotFacingBed",
            "#Symmetry",
            "#GoodChiFlow",
          ]}
          analysis="This bedroom layout creates strong feng shui support by placing the bed centrally against a solid wall with balanced nightstands on both sides, enhancing stability and relationship harmony. The bed avoids direct door alignment, while the desk is positioned with distance and separation, supporting focused energy for work. The open center maintains smooth chi flow throughout the space."
        />

        <LayoutCase
          title="East-Facing Desk with Supportive Bed Position"
          image="/images/bedroom-layout-examples/bedroom-layout-4.png"
          tags={[
            "#DoubleBed",
            "#DeskFacingEast",
            "#WallBacking",
            "#WardrobeClearance",
            "#NoMirrorFacingBed",
            "#BalancedQi"
          ]}
          analysis="This layout ensures strong feng shui with the bed placed against a solid wall and away from the door, offering safety and grounding. The desk faces east, ideal for focus and growth, while keeping a clear separation from sleep space. The wardrobe and walkway maintain energy flow and openness, supporting calm, clarity, and productivity."
        />

        <LayoutCase
          title="Calm Bedroom with Clear Qi Flow and Wall Support"
          image="/images/bedroom-layout-examples/bedroom-layout-5.png"
          tags={["#DoubleBed", "#SolidWallBacking", "#NoMirrorFacingBed", "#ClearEntrance", "#QiCirculation", "#SimpleLayout"]}
          analysis="The bed is placed firmly against a solid wall with open space on both sides, enhancing balance and stability. It avoids direct alignment with the door, allowing qi to enter gently without rushing the bed. The wardrobe is tucked to the side, ensuring a clean energy path and maintaining openness throughout the room."
        />

        <LayoutCase
          title="Symmetrical Double Bed Layout with Clear Qi Flow"
          image="/images/bedroom-layout-examples/bedroom-layout-6.png"
          tags={["#DoubleBed", "#Symmetry", "#NoDoorFacing", "#GoodSpacing", "#QiFlowClear", "#BalancedLayout"]}
          analysis="This layout achieves strong feng shui with perfect symmetry and balanced spacing. The bed is centered on a solid wall, not facing the entrance, ensuring privacy and stability. Equal 0.8m gaps on each side allow smooth qi flow and ease of movement, promoting harmony and restful sleep."
        />

        <LayoutCase
          title="Integrated Bedroom Layout with Smooth Chi Path"
          image="/images/bedroom-layout-examples/bedroom-layout-7.png"
          tags={["#DoubleBed", "#ChiFlowPath", "#DeskInView", "#NoDoorFacingBed", "#AttachedBathroom", "#ZonedLiving"]}
          analysis="This layout supports good feng shui with a clear and intentional chi path running diagonally across the room. The bed avoids direct alignment with the door, and the desk is placed in a bright, active position that encourages productivity. The chair and wardrobe are positioned in calmer zones, and the attached bathroom is visually separated, helping maintain clean, undisturbed bedroom energy."
        />

        <LayoutCase
          title="Compact Bedroom with Wall-Aligned Bed and Hidden Bathroom"
          image="/images/bedroom-layout-examples/bedroom-layout-8.png"
          tags={["#DoubleBed", "#WallAligned", "#NoDoorFacing", "#AttachedBathroom", "#MinimalPathway", "#FengShuiSafeZone"]}
          analysis="This layout provides strong feng shui by placing the bed firmly against a solid wall, away from direct door or bathroom alignment. The wardrobe and bathroom are tucked neatly to one side, maintaining open circulation space. The bathroom door doesn't face the bed, preventing energy disturbances and ensuring restful, protected sleep in a compact but harmonious setting."
        />

        <LayoutCase
          title="Modern Bedroom with Clear Chi Flow and Bathroom Separation"
          image="/images/bedroom-layout-examples/bedroom-layout-9.png"
          tags={["#DoubleBed", "#NoDoorFacing", "#BathroomSeparated", "#ClearPathway", "#WallSupport", "#ChiFlowSafe"]}
          analysis="This bedroom aligns with feng shui principles by placing the bed against a solid wall and away from the door, providing strong backing and restful energy. The ensuite bathroom is clearly divided and doesn't face the bed, which helps avoid qi disturbance. A clear walking path and well-placed wardrobe support organized and balanced energy."
        />

        <LayoutCase
          title="Private Bedroom with Bathroom Buffer and Strong Wall Support"
          image="/images/bedroom-layout-examples/bedroom-layout-10.png"
          tags={["#DoubleBed", "#NoDoorFacing", "#BathroomSeparated", "#WallSupport", "#SpaciousFeel", "#ChiFlowSafe"]}
          analysis="This layout supports good feng shui by keeping the bed away from the door and backing it with a solid wall, ensuring restful energy. The ensuite bathroom is well-separated and doesn't directly face the bed, reducing negative qi influence. The open space in front of the bed allows qi to circulate smoothly, creating a calm and private atmosphere."
        />

        <LayoutCase
          title="Master Bedroom with Strong Wall Support and Privacy"
          image="/images/bedroom-layout-examples/bedroom-layout-11.png"
          tags={["#DoubleBed", "#SolidWallSupport", "#PrivateEntry", "#NoMirrorFacingBed", "#BathroomSeparated", "#CalmEnergy"]}
          analysis="This master bedroom achieves good feng shui by placing the bed against a strong wall and away from the entry. The entrance is tucked into a corner, enhancing privacy and reducing energy disturbance. The ensuite bathroom is clearly separated, and no mirrors face the bed. Overall, the space feels stable, peaceful, and well-shielded."
        />

        <LayoutCase
          title="Minimalist Bedroom with Hidden Energy Flow"
          image="/images/bedroom-layout-examples/bedroom-layout-12.png"
          tags={[
            "#DoubleBed",
            "#NoDoorFacing",
            "#SeparateBathroom",
            "#BedAgainstWall",
            "#NaturalLight",
            "#CleanChiFlow"
          ]}
          analysis="This layout creates peaceful feng shui with a well-anchored bed not facing the door, allowing qi to circulate calmly. The bathroom is tucked behind a buffer zone, avoiding direct energy clash. The open space at the foot of the bed and natural light source ensure clarity, simplicity, and calm energy flow throughout the room."
        />

        <LayoutCase
          title="Serene Bedroom with Wall-Anchored Bed and Corner Chair"
          image="/images/bedroom-layout-examples/bedroom-layout-13.png"
          tags={[
            "#DoubleBed",
            "#NoDoorFacing",
            "#ChairInCorner",
            "#ChiFlowClear",
            "#SeparatedBathroom",
            "#WallSupport"
          ]}
          analysis="This layout supports strong feng shui with a bed placed against a solid wall and not directly aligned with the entrance, protecting restful energy. The reading chair in the bright corner offers a peaceful retreat without disturbing the sleeping zone. The bathroom is set apart, minimizing conflicting energy. Open space allows chi to circulate freely, creating a sense of calm and clarity."
        />

        <LayoutCase
          title="Square Bedroom with Protected Bed and Natural Flow"
          image="/images/bedroom-layout-examples/bedroom-layout-14.png"
          tags={[
            "#DoubleBed",
            "#NoDoorFacing",
            "#ChairInCorner",
            "#WallSupport",
            "#OpenCenter",
            "#ChiFlowSmooth"
          ]}
          analysis="This square layout achieves good feng shui with the bed placed solidly against a back wall and out of direct line with the door, preserving restful energy. The open central space allows chi to move freely, while the reading chair in the corner creates a peaceful focus spot. The room feels balanced, uncluttered, and supportive of calm sleep and gentle energy flow."
        />

        <LayoutCase
          title="Symmetrical Bedroom with Balanced Entry Flow"
          image="/images/bedroom-layout-examples/bedroom-layout-15.png"
          tags={[
            "#DoubleBed",
            "#BalancedLayout",
            "#NoMirrorFacingBed",
            "#SymmetricalDesign",
            "#DeskInCorner",
            "#StableSupport"
          ]}
          analysis="This layout promotes harmony through symmetry. The bed is centered on a solid wall with equal space on both sides, enhancing stability and partnership energy. The door avoids direct alignment with the bed, while the desk is tucked in the far corner for minimal energy disruption. The room feels orderly, grounded, and ideal for restful sleep and focused work."
        />
      </div>
      <ExploreYourLayoutCta />
      <ExampleFaqSection />
    </main>
  );
}