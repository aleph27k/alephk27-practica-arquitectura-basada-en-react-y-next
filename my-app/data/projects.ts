export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string;
  details: string;
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "casa-nomada",
    title: "Casa Nómada",
    description:
      "Sitio de reservas para alojamientos sostenibles y experiencias locales.",
    technologies: "React · CSS",
    details:
      "Una propuesta de alojamiento para quienes buscan viajar de forma consciente. El proyecto organiza la información de cada estancia para facilitar la comparación de opciones, conocer sus prácticas sostenibles y planificar una visita con actividades de la comunidad local.",
    features: [
      "Catálogo de alojamientos con información sobre sus servicios.",
      "Consulta de disponibilidad y selección de fechas de viaje.",
      "Presentación de experiencias y actividades locales.",
    ],
  },
  {
    slug: "ritmo-local",
    title: "Ritmo Local",
    description: "Agenda digital para descubrir conciertos y salas independientes.",
    technologies: "Next.js · TypeScript",
    details:
      "Una agenda pensada para dar visibilidad a la escena musical independiente. Reúne conciertos, artistas y salas en una misma experiencia para que las personas puedan descubrir nuevas propuestas y organizar sus próximas salidas.",
    features: [
      "Listado de conciertos con fechas y ubicaciones.",
      "Información de artistas y salas participantes.",
      "Organización de eventos por estilo musical.",
    ],
  },
  {
    slug: "verde-cerca",
    title: "Verde Cerca",
    description:
      "Directorio de mercados y productores de alimentos de temporada.",
    technologies: "React · JavaScript",
    details:
      "Un directorio que conecta a las personas con productores de su zona. Su objetivo es facilitar el acceso a productos de temporada y acercar la información de mercados, horarios y procedencia de los alimentos para promover el consumo local.",
    features: [
      "Directorio de productores y mercados locales.",
      "Consulta de horarios y puntos de venta.",
      "Información sobre productos de temporada.",
    ],
  },
];