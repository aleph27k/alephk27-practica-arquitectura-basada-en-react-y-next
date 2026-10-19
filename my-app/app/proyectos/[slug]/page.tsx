import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="page">
      <article className="section project-detail">
        <Link className="project-detail__back" href="/#proyectos">
          Volver a proyectos
        </Link>
        <p className="section__label">Proyecto</p>
        <h1>{project.title}</h1>
        <p className="project-detail__summary">{project.description}</p>
        <h2>Sobre el proyecto</h2>
        <p>{project.details}</p>
        <h2>Funcionalidades</h2>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <h2>Tecnologías</h2>
        <p>{project.technologies}</p>
      </article>
    </main>
  );
}