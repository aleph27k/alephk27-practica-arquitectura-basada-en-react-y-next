import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Casa Nómada",
    description:
      "Sitio de reservas para alojamientos sostenibles y experiencias locales.",
    technologies: "React · CSS",
  },
  {
    title: "Ritmo Local",
    description: "Agenda digital para descubrir conciertos y salas independientes.",
    technologies: "Next.js · TypeScript",
  },
  {
    title: "Verde Cerca",
    description:
      "Directorio de mercados y productores de alimentos de temporada.",
    technologies: "React · JavaScript",
  },
];

export default function ProjectsSection() {
  return (
    <section className="section projects" id="proyectos">
      <p className="section__label">Proyectos</p>
      <h2>Algunos trabajos</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}