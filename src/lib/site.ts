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

export const heroContent = {
  eyebrow: "Academia de artes marciales",
  headline: {
    lead: ["Disciplina", "que"],
    accent: ["transforma"]
  },
  body: "Entrena mente, cuerpo y carácter.",
  mobileBody: "Entrena mente, cuerpo y carácter.",
  disciplines: "Boxeo · MMA · BJJ · Sanda · Fitness",
  primaryCta: {
    mobileLabel: "Reserva tu clase",
    desktopLabel: "Reserva tu clase"
  },
  videoCta: {
    label: "Ver video",
    href: "#galeria"
  },
  highlights: [
    {
      icon: "shield",
      title: "Entrenadores certificados",
      description: "Profesionales a tu servicio"
    },
    {
      icon: "pin",
      title: "Sedes a nivel nacional",
      description: "Encuentra tu academia"
    },
    {
      icon: "team",
      title: "Comunidad que te impulsa",
      description: "Más que un equipo, una familia"
    }
  ]
} as const;

export const aboutContent = {
  eyebrow: "¿QUIENES SOMOS?",
  headline: {
    desktopLead: "MÁS QUE UNA ACADEMIA,",
    mobileLead: ["MÁS QUE UNA", "ACADEMIA,", "SOMOS UNA"],
    bridge: "SOMOS UNA",
    accent: "FAMILIA."
  },
  paragraphs: [
    {
      text: "En Tigre Azul formamos personas a través de las artes marciales. Enseñamos disciplina, respeto y perseverancia para que cada alumno supere sus límites dentro y fuera del tatami.",
      strong: ["disciplina, respeto y perseverancia"]
    },
    {
      text: "Nuestro compromiso es brindar entrenamiento de calidad en un ambiente seguro, donde niños, jóvenes y adultos desarrollen su mejor versión.",
      strong: ["entrenamiento de calidad", "su mejor versión"]
    }
  ],
  pillars: [
    {
      icon: "mission",
      title: "MISIÓN",
      description: "Formar personas íntegras a través de las artes marciales."
    },
    {
      icon: "vision",
      title: "VISIÓN",
      description: "Ser la academia líder en formación marcial a nivel nacional."
    },
    {
      icon: "values",
      title: "VALORES",
      description: "Disciplina, respeto, humildad, constancia y pasión."
    },
    {
      icon: "community",
      title: "COMUNIDAD",
      description: "Un equipo unido que te impulsa a crecer cada día."
    }
  ]
} as const;

export const navItems = [
  {
    label: "Inicio",
    shortLabel: "Inicio",
    href: "#inicio",
    primary: true
  },
  {
    label: "Quiénes somos",
    shortLabel: "Quiénes somos",
    href: "#quienes-somos",
    primary: false,
    description:
      "Historia, origen, evolución y filosofía de formación Tigre Azul."
  },
  {
    label: "Nuestras disciplinas",
    shortLabel: "Disciplinas",
    href: "#disciplinas",
    primary: true,
    description:
      "Boxeo, MMA, Jiu-Jitsu Brasileño, Sanda Wushu y preparación física."
  },
  {
    label: "Profesores",
    shortLabel: "Profesores",
    href: "#profesores",
    primary: true,
    description:
      "Equipo técnico, especialidades, grados, experiencia y certificaciones."
  },
  {
    label: "Sedes oficiales",
    shortLabel: "Sedes",
    href: "#sedes",
    primary: true,
    description:
      "Direcciones, horarios, disciplinas disponibles e instructores responsables."
  },
  {
    label: "Árbol de aprendizaje",
    shortLabel: "Árbol",
    href: "#arbol-aprendizaje",
    primary: false,
    description:
      "Ruta del alumno desde la primera clase hasta nivel avanzado, competencia o instructor."
  },
  {
    label: "Equipo competitivo",
    shortLabel: "Equipo",
    href: "#equipo-competitivo",
    primary: false,
    description:
      "Competidores actuales, campeones, categorías, medallas y preparación atlética."
  },
  {
    label: "Eventos y trayectoria",
    shortLabel: "Eventos",
    href: "#eventos-trayectoria",
    primary: false,
    description:
      "Campeonatos, seminarios, exhibiciones, participaciones y memoria histórica."
  },
  {
    label: "Convenios",
    shortLabel: "Convenios",
    href: "#convenios",
    primary: false,
    description:
      "Afiliaciones deportivas, alianzas institucionales y respaldos oficiales."
  },
  {
    label: "Salón de la fama",
    shortLabel: "Fama",
    href: "#salon-fama",
    primary: false,
    description:
      "Campeones, representantes e instructores formados dentro de Tigre Azul."
  },
  {
    label: "Galería",
    shortLabel: "Galería",
    href: "#galeria",
    primary: false,
    description:
      "Entrenamientos, competencias, niños, adultos, profesores y comunidad."
  },
  {
    label: "Blog",
    shortLabel: "Blog",
    href: "#blog",
    primary: false,
    description:
      "Artículos sobre beneficios, cómo empezar, disciplinas y preparación para competir."
  },
  {
    label: "FAQ",
    shortLabel: "FAQ",
    href: "#faq",
    primary: false,
    description:
      "Respuestas sobre experiencia previa, edades, niveles, equipo y competencia."
  },
  {
    label: "Contacto",
    shortLabel: "Contacto",
    href: "#contacto",
    primary: true
  }
] as const;

export const sectionNavItems = navItems.filter(
  (item) => item.href !== "#inicio" && item.href !== "#contacto"
);
