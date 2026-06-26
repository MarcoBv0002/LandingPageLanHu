export const afcSite = {
  name: "AFC Peru",
  fullName: "Apex Fighting Championship",
  tagline: "El punto máximo del combate",
  location: "Chincha Alta, Ica - Perú",
  contact: {
    phone: "+51 901 081 980",
    email: "afcperu.ica@gmail.com",
    address: "Chincha Alta, Ica - Perú"
  }
} as const;

export const afcNavItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Clasificaciones", href: "#clasificaciones" },
  { label: "Categorías", href: "#categorias" },
  { label: "Fechas", href: "#fechas" },
  { label: "Inscripciones", href: "#inscripciones" }
] as const;

export type ClassificationStatus = "classified" | "pending" | "notQualified";

export const classificationEvents = [
  {
    id: "afc-2026-torneo-1",
    label: "AFC 2026 - Torneo 1",
    date: "15 de Marzo, 2026",
    athletes: [
      { position: 1, name: "Fabian Cardenas", discipline: "MMA", category: "-61 kg", status: "classified", points: 100 },
      { position: 2, name: "Alonso Ruiz", discipline: "Boxeo", category: "-67 kg", status: "classified", points: 85 },
      { position: 3, name: "Mateo Salas", discipline: "Sanda", category: "-70 kg", status: "pending", points: 70 },
      { position: 4, name: "Luis Torres", discipline: "Jiu-Jitsu", category: "-77 kg", status: "notQualified", points: 45 }
    ]
  },
  {
    id: "afc-2026-torneo-2",
    label: "AFC 2026 - Torneo 2",
    date: "17 de Mayo, 2026",
    athletes: [
      { position: 1, name: "Renato Vera", discipline: "MMA", category: "-66 kg", status: "classified", points: 100 },
      { position: 2, name: "Nicolas Flores", discipline: "Jiu-Jitsu", category: "-70 kg", status: "classified", points: 85 },
      { position: 3, name: "Ivan Paredes", discipline: "Sanda", category: "-72 kg", status: "classified", points: 75 },
      { position: 4, name: "Bruno Mejia", discipline: "Boxeo", category: "-75 kg", status: "notQualified", points: 50 }
    ]
  },
  {
    id: "afc-2026-torneo-3",
    label: "AFC 2026 - Torneo 3",
    date: "26 de Julio, 2026",
    athletes: [
      { position: 1, name: "Diego Ramirez", discipline: "MMA", category: "-70 kg", status: "classified", points: 100 },
      { position: 2, name: "Bruno Salazar", discipline: "MMA", category: "-70 kg", status: "classified", points: 85 },
      { position: 3, name: "Andres Quispe", discipline: "Sanda", category: "-67 kg", status: "classified", points: 75 },
      { position: 4, name: "Luis Huaman", discipline: "MMA", category: "-70 kg", status: "notQualified", points: 60 },
      { position: 5, name: "Marco Villanueva", discipline: "Boxeo", category: "-67 kg", status: "notQualified", points: 45 },
      { position: 6, name: "Renzo Valdivia", discipline: "Jiu-Jitsu", category: "-77 kg", status: "notQualified", points: 30 }
    ]
  },
  {
    id: "afc-2026-torneo-4",
    label: "AFC 2026 - Torneo 4",
    date: "20 de Septiembre, 2026",
    athletes: [
      { position: 1, name: "Rodrigo Nieto", discipline: "MMA", category: "-66 kg", status: "pending", points: 0 },
      { position: 2, name: "Samuel Paz", discipline: "Jiu-Jitsu", category: "-94 kg", status: "pending", points: 0 },
      { position: 3, name: "Cristian Luna", discipline: "Boxeo", category: "-72 kg", status: "pending", points: 0 }
    ]
  },
  {
    id: "afc-2026-torneo-5",
    label: "AFC 2026 - Torneo 5",
    date: "25 de Octubre, 2026",
    athletes: [
      { position: 1, name: "Mario Quispe", discipline: "Boxeo", category: "-69 kg", status: "pending", points: 0 },
      { position: 2, name: "Adrian Soto", discipline: "MMA", category: "-57 kg", status: "pending", points: 0 },
      { position: 3, name: "Emilio Vega", discipline: "Jiu-Jitsu", category: "-88 kg", status: "pending", points: 0 }
    ]
  },
  {
    id: "afc-2026-torneo-6",
    label: "AFC 2026 - Torneo 6",
    date: "15 de Noviembre, 2026",
    athletes: [
      { position: 1, name: "Piero Castillo", discipline: "Jiu-Jitsu", category: "-82 kg", status: "pending", points: 0 },
      { position: 2, name: "Hugo Campos", discipline: "Sanda", category: "-68 kg", status: "pending", points: 0 },
      { position: 3, name: "Kevin Mora", discipline: "Boxeo", category: "-81 kg", status: "pending", points: 0 }
    ]
  },
  {
    id: "afc-2026-torneo-7",
    label: "AFC 2026 - Torneo 7",
    date: "13 de Diciembre, 2026",
    athletes: [
      { position: 1, name: "Andre Rojas", discipline: "MMA", category: "-70 kg", status: "pending", points: 0 },
      { position: 2, name: "Gael Rivera", discipline: "Boxeo", category: "-60 kg", status: "pending", points: 0 },
      { position: 3, name: "Tomas Ibarra", discipline: "Sanda", category: "-75 kg", status: "pending", points: 0 }
    ]
  },
  {
    id: "afc-2026-torneo-8",
    label: "AFC 2026 - Torneo 8",
    date: "20 de Diciembre, 2026",
    athletes: [
      { position: 1, name: "Campeon Ranking A", discipline: "MMA", category: "-70 kg", status: "pending", points: 0 },
      { position: 2, name: "Campeon Ranking B", discipline: "Boxeo", category: "-67 kg", status: "pending", points: 0 },
      { position: 3, name: "Campeon Ranking C", discipline: "Jiu-Jitsu", category: "-77 kg", status: "pending", points: 0 }
    ]
  }
] as const;

export const categoryRules = [
  {
    discipline: "Boxeo",
    icon: "glove",
    gender: "Masculino",
    weightsList: ["60 kg", "70 kg", "80 kg", "+80 kg"],
    weights: "60 kg, 70 kg, 80 kg, +80 kg",
    rules: "3 rounds x 3 min. Reglas AIBA."
  },
  {
    discipline: "MMA",
    icon: "cage",
    gender: "Masculino",
    weightsList: ["61 kg", "70 kg", "77 kg", "84 kg", "+84 kg"],
    weights: "-57 kg, -61 kg, -66 kg, -70 kg, -77 kg, -84 kg, -93 kg, +93 kg",
    rules: "3 rounds x 5 min. Reglas unificadas de MMA."
  },
  {
    discipline: "Muay Thai",
    icon: "shin",
    gender: "Masculino",
    weightsList: ["57 kg", "63 kg", "67 kg", "71 kg", "+71 kg"],
    weights: "-57 kg, -60 kg, -63.5 kg, -67 kg, -71 kg, -75 kg, -81 kg, +81 kg",
    rules: "3 rounds x 3 min. Clinch limitado y striking de pie."
  },
  {
    discipline: "Jiu-Jitsu",
    icon: "gi",
    gender: "Masculino",
    weightsList: ["-65 kg", "-75 kg", "-85 kg", "+85 kg"],
    weights: "-65 kg, -75 kg, -85 kg, +85 kg",
    rules: "5 minutos de combate. Solo sometimiento, sin puntaje."
  },
  {
    discipline: "Sanda",
    icon: "helmet",
    gender: "Masculino",
    weightsList: ["60 kg", "65 kg", "70 kg", "+70 kg"],
    weights: "-60 kg, -65 kg, -70 kg, +70 kg",
    rules: "Golpes, patadas y proyecciones controladas."
  }
] as const;

export const jiuJitsuRulesDetail = {
  discipline: "Jiu-Jitsu",
  title: "Detalle competitivo Jiu-Jitsu No-Gi",
  categories: ["-65 kg", "-75 kg", "-85 kg", "+85 kg"],
  format: "5 minutos de combate",
  summary: "No habrá puntaje: el combate se define por sometimiento.",
  notes: [
    "Cada categoría tendrá sus propias reglas según el grado o experiencia de los competidores.",
    "Si nadie gana por sometimiento durante los 5 minutos, se otorgarán 2 minutos adicionales.",
    "En el tiempo adicional se evaluará la agresividad y quién busca el combate, sin importar la posición final.",
    "La decisión será tomada por el referee o juez del combate.",
    "Los ganadores pasarán al ranking de la AFC, sumando victorias, derrotas o empates."
  ]
} as const;

export const upcomingDisciplineDetail = {
  title: "Reglamento próximamente",
  summary:
    "Esta disciplina se publicará cuando AFC confirme categorías, formato y criterios oficiales.",
  note: "Síguenos en nuestras redes para estar al día."
} as const;

export const afcPaymentInfo = {
  title: "Pagos e inscripciones",
  email: "afcperu.ica@gmail.com",
  accounts: [
    {
      bank: "BCP",
      label: "Cuenta BCP Soles",
      number: "31500201658092",
      color: "bcp"
    },
    {
      bank: "BCP",
      label: "Cuenta interbancaria",
      number: "00231510020165809205",
      color: "bcp"
    },
    {
      bank: "Interbank",
      label: "Cuenta Simple Soles",
      number: "898 3205113926",
      color: "interbank"
    }
  ]
} as const;

export const tournamentDates = [
  { event: "Fecha 1", date: "22 AGO 2026", venue: "Chincha Alta, Perú", status: "PRÓXIMA", highlight: true },
  { event: "Fecha 2", date: "2026", venue: "Chincha Alta, Perú", status: "SIN FECHA" },
  { event: "Fecha 3", date: "2026", venue: "Chincha Alta, Perú", status: "SIN FECHA" },
  { event: "Fecha 4", date: "2026", venue: "Chincha Alta, Perú", status: "SIN FECHA" },
  { event: "Fecha 5", date: "2026", venue: "Chincha Alta, Perú", status: "SIN FECHA" },
  { event: "Fecha 6", date: "2026", venue: "Chincha Alta, Perú", status: "SIN FECHA" },
  { event: "Fecha 7", date: "2026", venue: "Chincha Alta, Perú", status: "SIN FECHA" },
  { event: "Fecha 8", date: "2026", venue: "Chincha Alta, Perú", status: "SIN FECHA" }
] as const;
