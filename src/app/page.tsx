import { AppShell } from "@/components/layout/AppShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionAnchorTargets } from "@/components/sections/SectionAnchorTargets";

export default function Home() {
  return (
    <AppShell>
      <HeroSection />
      <SectionAnchorTargets />
    </AppShell>
  );
}
