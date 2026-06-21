export const siteConfig = {
  name: "Tigre Azul",
  tagline: "Academia de artes marciales",
  whatsappNumber: "51923007839",
  whatsappMessage:
    "Hola Tigre Azul, quiero reservar una clase de prueba.",
  locations: {
    chincha: "Jiron Colon 715, Chincha Alta 11701, Perú",
    piscoReference: "Espalda del tecnológico"
  }
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Disciplinas", href: "#disciplinas" },
  { label: "Horarios", href: "#sistema" },
  { label: "Sedes", href: "#sedes" },
  { label: "Contacto", href: "#contacto" }
] as const;
