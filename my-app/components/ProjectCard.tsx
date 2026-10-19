import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-card" href={`/proyectos/${project.slug}`}>
      <article>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className="project-technologies">{project.technologies}</p>
      </article>
    </Link>
  );
}