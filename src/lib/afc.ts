export const afcSite = {
  name: "AFC Peru",
  fullName: "Apex Fighting Championship",
  tagline: "El punto máximo del combate",
  location: "Chincha Alta, Ica - Perú",
  contact: {
    phone: "+51 901 081 980",
    email: "info@afc-peru.com",
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
    id: "afc-2025-torneo-1",
    label: "AFC 2025 - Torneo 1",
    date: "15 de Marzo, 2025",
    athletes: [
      { position: 1, name: "Fabian Cardenas", discipline: "MMA", category: "-61 kg", status: "classified", points: 100 },
      { position: 2, name: "Alonso Ruiz", discipline: "Boxeo", category: "-67 kg", status: "classified", points: 85 },
      { position: 3, name: "Mateo Salas", discipline: "Sanda", category: "-70 kg", status: "pending", points: 70 },
      { position: 4, name: "Luis Torres", discipline: "Jiu-Jitsu", category: "-77 kg", status: "notQualified", points: 45 }
    ]
  },
  {
    id: "afc-2025-torneo-2",
    label: "AFC 2025 - Torneo 2",
    date: "17 de Mayo, 2025",
    athletes: [
      { position: 1, name: "Renato Vera", discipline: "MMA", category: "-66 kg", status: "classified", points: 100 },
      { position: 2, name: "Nicolas Flores", discipline: "Jiu-Jitsu", category: "-70 kg", status: "classified", points: 85 },
      { position: 3, name: "Ivan Paredes", discipline: "Sanda", category: "-72 kg", status: "classified", points: 75 },
      { position: 4, name: "Bruno Mejia", discipline: "Boxeo", category: "-75 kg", status: "notQualified", points: 50 }
    ]
  },
  {
    id: "afc-2025-torneo-3",
    label: "AFC 2025 - Torneo 3",
    date: "26 de Julio, 2025",
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
    id: "afc-2025-torneo-4",
    label: "AFC 2025 - Torneo 4",
    date: "20 de Septiembre, 2025",
    athletes: [
      { position: 1, name: "Rodrigo Nieto", discipline: "MMA", category: "-66 kg", status: "pending", points: 0 },
      { position: 2, name: "Samuel Paz", discipline: "Jiu-Jitsu", category: "-94 kg", status: "pending", points: 0 },
      { position: 3, name: "Cristian Luna", discipline: "Boxeo", category: "-72 kg", status: "pending", points: 0 }
    ]
  },
  {
    id: "afc-2025-torneo-5",
    label: "AFC 2025 - Torneo 5",
    date: "25 de Octubre, 2025",
    athletes: [
      { position: 1, name: "Mario Quispe", discipline: "Boxeo", category: "-69 kg", status: "pending", points: 0 },
      { position: 2, name: "Adrian Soto", discipline: "MMA", category: "-57 kg", status: "pending", points: 0 },
      { position: 3, name: "Emilio Vega", discipline: "Jiu-Jitsu", category: "-88 kg", status: "pending", points: 0 }
    ]
  },
  {
    id: "afc-2025-torneo-6",
    label: "AFC 2025 - Torneo 6",
    date: "15 de Noviembre, 2025",
    athletes: [
      { position: 1, name: "Piero Castillo", discipline: "Jiu-Jitsu", category: "-82 kg", status: "pending", points: 0 },
      { position: 2, name: "Hugo Campos", discipline: "Sanda", category: "-68 kg", status: "pending", points: 0 },
      { position: 3, name: "Kevin Mora", discipline: "Boxeo", category: "-81 kg", status: "pending", points: 0 }
    ]
  },
  {
    id: "afc-2025-torneo-7",
    label: "AFC 2025 - Torneo 7",
    date: "13 de Diciembre, 2025",
    athletes: [
      { position: 1, name: "Andre Rojas", discipline: "MMA", category: "-70 kg", status: "pending", points: 0 },
      { position: 2, name: "Gael Rivera", discipline: "Boxeo", category: "-60 kg", status: "pending", points: 0 },
      { position: 3, name: "Tomas Ibarra", discipline: "Sanda", category: "-75 kg", status: "pending", points: 0 }
    ]
  },
  {
    id: "afc-2025-torneo-8",
    label: "AFC 2025 - Torneo 8",
    date: "20 de Diciembre, 2025",
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
    weightsList: ["64 kg", "70 kg", "76 kg", "+76 kg"],
    weights: "-64 kg, -70 kg, -76 kg, -82.3 kg, -88.3 kg, -94.3 kg, +94.3 kg",
    rules: "Reglas IBJJF. Sin kimono (No-Gi)."
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

export const tournamentDates = [
  { event: "Torneo 1", date: "15 de Marzo, 2025", venue: "Chincha Alta, Perú", status: "Completado" },
  { event: "Torneo 2", date: "17 de Mayo, 2025", venue: "Chincha Alta, Perú", status: "Completado" },
  { event: "Torneo 3", date: "26 de Julio, 2025", venue: "Chincha Alta, Perú", status: "En curso", highlight: true },
  { event: "Torneo 4", date: "20 de Septiembre, 2025", venue: "Chincha Alta, Perú", status: "Próximo" },
  { event: "Torneo 5", date: "25 de Octubre, 2025", venue: "Chincha Alta, Perú", status: "Próximo" },
  { event: "Torneo 6", date: "15 de Noviembre, 2025", venue: "Chincha Alta, Perú", status: "Próximo" },
  { event: "Torneo 7", date: "13 de Diciembre, 2025", venue: "Chincha Alta, Perú", status: "Próximo" },
  { event: "Torneo 8 (Gran Final)", date: "20 de Diciembre, 2025", venue: "Chincha Alta, Perú", status: "Próximo" }
] as const;
