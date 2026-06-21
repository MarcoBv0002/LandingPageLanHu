import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tigre Azul | Academia de artes marciales",
  description:
    "Academia Tigre Azul: boxeo, MMA, BJJ, Sanda y preparación física para alumnos nuevos, familias y competidores.",
  openGraph: {
    title: "Tigre Azul | Academia de artes marciales",
    description:
      "Disciplina, respeto, técnica y preparación física en una academia de deportes de combate.",
    images: ["/images/tigre-azul/tigre-azul-logo.png"]
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
