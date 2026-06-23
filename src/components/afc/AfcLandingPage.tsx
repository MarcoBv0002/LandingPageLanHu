import { AfcCategories } from "@/components/afc/AfcCategories";
import { AfcDates } from "@/components/afc/AfcDates";
import { AfcFooter } from "@/components/afc/AfcFooter";
import { AfcHeader } from "@/components/afc/AfcHeader";
import { AfcHero } from "@/components/afc/AfcHero";
import { AfcRegistration } from "@/components/afc/AfcRegistration";
import { ClassificationBoard } from "@/components/afc/ClassificationBoard";

export function AfcLandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050609] text-white">
      <AfcHeader />
      <main>
        <AfcHero />
        <ClassificationBoard />
        <AfcCategories />
        <AfcDates />
        <AfcRegistration />
      </main>
      <AfcFooter />
    </div>
  );
}
