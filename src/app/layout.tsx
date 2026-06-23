import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AFC Peru | Apex Fighting Championship",
    template: "%s"
  },
  description:
    "AFC Peru: arena, ranking y competencias oficiales para deportes de combate.",
  icons: {
    icon: "/images/afc/afc-logo-arena.png",
    apple: "/images/afc/afc-logo-arena.png"
  },
  openGraph: {
    title: "AFC Peru | Apex Fighting Championship",
    description:
      "Arena, ranking y competencias oficiales para MMA, boxeo, sanda y jiu-jitsu en jaula.",
    images: ["/images/afc/afc-logo-arena.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
