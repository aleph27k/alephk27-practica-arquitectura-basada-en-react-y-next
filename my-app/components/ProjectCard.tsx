export type Project = {
  title: string;
  description: string;
  technologies: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="project-technologies">{project.technologies}</p>
    </article>
  );
}