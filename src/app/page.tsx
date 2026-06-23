import type { Metadata } from "next";
import { AfcLandingPage } from "@/components/afc/AfcLandingPage";

export const metadata: Metadata = {
  title: "AFC Peru | Apex Fighting Championship",
  description:
    "Landing oficial AFC Peru con clasificaciones demo, categorias, fechas e informacion de inscripcion para competencias de combate.",
  openGraph: {
    title: "AFC Peru | Apex Fighting Championship",
    description:
      "Arena, ranking y competencias oficiales para MMA, boxeo, sanda y jiu-jitsu en jaula.",
    images: ["/images/afc/afc-logo-arena.png"]
  }
};

export default function Home() {
  return <AfcLandingPage />;
}
