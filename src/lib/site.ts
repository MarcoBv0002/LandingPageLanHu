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

export const disciplinesContent = {
  eyebrow: "Nuestras disciplinas",
  headline: {
    lead: "Entrena. Evoluciona.",
    accent: "Transforma",
    tail: "tu vida."
  },
  body: "Descubre nuestras disciplinas y encuentra tu camino.",
  cards: [
    {
      icon: "boxing",
      title: "BOXEO",
      image: "/images/tigre-azul/disciplines/boxeo.png",
      details: [
        {
          icon: "shield",
          title: "Descripción",
          description: "Mejora tu técnica, resistencia y confianza."
        },
        {
          icon: "pulse",
          title: "Beneficios",
          description: "Fuerza, reflejos, disciplina y control mental."
        },
        {
          icon: "levels",
          title: "Niveles",
          description: "Principiante, Intermedio y Avanzado."
        },
        {
          icon: "training",
          title: "Entrenamiento",
          description: "Recreativo y competitivo."
        }
      ]
    },
    {
      icon: "mma",
      title: "MMA",
      image: "/images/tigre-azul/disciplines/mma.png",
      details: [
        {
          icon: "shield",
          title: "Descripción",
          description: "Arte marcial mixto que combina lo mejor de varias disciplinas."
        },
        {
          icon: "target",
          title: "Preparación integral",
          description: "Desarrolla striking, grappling, resistencia y estrategia."
        },
        {
          icon: "levels",
          title: "Niveles",
          description: "Principiante, Intermedio y Avanzado."
        }
      ]
    },
    {
      icon: "bjj",
      title: "JIU-JITSU BRASILEÑO",
      image: "/images/tigre-azul/disciplines/jiu-jitsu.png",
      details: [
        {
          icon: "system",
          title: "Sistema de graduación",
          description: "Método por cinturones que reconoce tu progreso."
        },
        {
          icon: "target",
          title: "Gi / No Gi",
          description: "Entrena con kimono o sin kimono, adaptado a tu estilo."
        },
        {
          icon: "training",
          title: "Competencia",
          description: "Participa en torneos locales, nacionales e internacionales."
        }
      ]
    },
    {
      icon: "sanda",
      title: "SANDA WUSHU",
      image: "/images/tigre-azul/disciplines/sanda.png",
      details: [
        {
          icon: "history",
          title: "Historia",
          description: "Disciplina de origen chino que combina técnica y tradición."
        },
        {
          icon: "rules",
          title: "Sistema competitivo",
          description: "Reglas claras, combates dinámicos y seguros."
        },
        {
          icon: "trophy",
          title: "Logros",
          description: "Formamos atletas con mentalidad de campeón."
        }
      ]
    },
    {
      icon: "fitness",
      title: "PREPARACIÓN FÍSICA / GIMNASIO",
      image: "/images/tigre-azul/disciplines/preparacion-fisica.png",
      details: [
        {
          icon: "conditioning",
          title: "Acondicionamiento",
          description: "Mejora tu resistencia cardiovascular y movilidad."
        },
        {
          icon: "strength",
          title: "Fuerza",
          description: "Aumenta tu fuerza funcional y masa muscular."
        },
        {
          icon: "performance",
          title: "Rendimiento",
          description: "Entrenamiento diseñado para llevar tu cuerpo al máximo."
        }
      ]
    }
  ]
} as const;

export const locationSubNavItems = [
  {
    label: "Chincha",
    shortLabel: "Chincha",
    href: "#sede-chincha",
    principal: true,
    description: "Sede principal en Jirón Colón 715, Chincha Alta."
  },
  {
    label: "Pisco",
    shortLabel: "Pisco",
    href: "#sede-pisco",
    principal: false,
    description: "Sede Pisco con referencia a espaldas del tecnológico."
  }
] as const;

export const aboutSubNavItems = [
  {
    label: "¿Quiénes somos?",
    shortLabel: "¿Quiénes somos?",
    href: "#quienes-somos",
    primary: true,
    description:
      "Historia, origen, evolución y filosofía de formación Tigre Azul."
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
    label: "Eventos y trayectoria",
    shortLabel: "Eventos",
    href: "#eventos-trayectoria",
    primary: false,
    description:
      "Campeonatos, seminarios, exhibiciones, participaciones y memoria histórica."
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
    label: "Convenios",
    shortLabel: "Convenios",
    href: "#convenios",
    primary: false,
    description:
      "Afiliaciones deportivas, alianzas institucionales y respaldos oficiales."
  }
] as const;

export const programSubNavItems = [
  {
    label: "Disciplinas",
    shortLabel: "Disciplinas",
    href: "#disciplinas",
    primary: true,
    description:
      "Boxeo, MMA, Jiu-Jitsu Brasileño, Sanda Wushu y preparación física."
  },
  {
    label: "Árbol de aprendizaje",
    shortLabel: "Árbol",
    href: "#arbol-aprendizaje",
    primary: false,
    description:
      "Ruta del alumno desde la primera clase hasta nivel avanzado, competencia o instructor."
  }
] as const;

export const navItems = [
  {
    label: "Inicio",
    shortLabel: "Inicio",
    href: "#inicio",
    primary: true
  },
  {
    label: "Nosotros",
    shortLabel: "Nosotros",
    href: "#quienes-somos",
    primary: true,
    subItems: aboutSubNavItems
  },
  {
    label: "Programas",
    shortLabel: "Programas",
    href: "#disciplinas",
    primary: true,
    subItems: programSubNavItems
  },
  {
    label: "Sedes",
    shortLabel: "Sedes",
    href: "#sedes",
    primary: true,
    subItems: locationSubNavItems
  },
  {
    label: "Contacto",
    shortLabel: "Contacto",
    href: "#contacto",
    primary: true
  }
] as const;

export const sectionNavItems = [
  ...aboutSubNavItems,
  ...programSubNavItems,
  {
    label: "Sedes oficiales",
    shortLabel: "Sedes",
    href: "#sedes",
    primary: true,
    description:
      "Direcciones, horarios, disciplinas disponibles e instructores responsables.",
    subItems: locationSubNavItems
  }
] as const;
