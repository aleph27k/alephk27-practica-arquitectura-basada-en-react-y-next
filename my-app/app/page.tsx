type Project = {
  title: string;
  description: string;
  technologies: string;
};

const projects: Project[] = [
  {
    title: "Casa Nómada",
    description: "Sitio de reservas para alojamientos sostenibles y experiencias locales.",
    technologies: "React · CSS",
  },
  {
    title: "Ritmo Local",
    description: "Agenda digital para descubrir conciertos y salas independientes.",
    technologies: "Next.js · TypeScript",
  },
  {
    title: "Verde Cerca",
    description: "Directorio de mercados y productores de alimentos de temporada.",
    technologies: "React · JavaScript",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="project-technologies">{project.technologies}</p>
    </article>
  );
}

function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <a className="navbar__brand" href="#sobre-mi">Alex Rivera</a>
      <div className="navbar__links">
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
        <a href="#sobre-mi">Sobre mí</a>
      </div>
    </nav>
  );
}

function AboutSection() {
  return (
    <section className="section about" id="sobre-mi">
      <p className="section__label">Sobre mí</p>
      <h1>Desarrollador web enfocado en crear soluciones útiles.</h1>
      <p>
        Soy Alex Rivera, desarrollador web interesado en construir productos
        digitales claros, accesibles y fáciles de usar. Me gusta participar en
        cada etapa del proceso: comprender el problema, organizar la información
        y convertir las ideas en interfaces funcionales.
      </p>
      <p>
        Trabajo con React, Next.js, JavaScript y CSS. Disfruto aprender nuevas
        herramientas, colaborar con otras personas y cuidar tanto la experiencia
        de quien usa un sitio como la calidad del código que lo hace posible.
        Busco proyectos donde pueda aportar curiosidad, atención al detalle y
        soluciones que respondan a necesidades reales.
      </p>
    </section>
  );
}

function ProjectsSection() {
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

function ContactForm() {
  return (
    <section className="section contact" id="contacto">
      <p className="section__label">Contacto</p>
      <h2>Escríbeme</h2>
      <form className="contact-form">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="tu@email.com" required />
        <label htmlFor="comment">Comentario</label>
        <textarea id="comment" name="comment" rows={5} placeholder="Cuéntame sobre tu proyecto" required />
        <button type="button">Enviar</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Alex Rivera</p>
      <nav aria-label="Redes sociales" className="footer__links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://x.com/" target="_blank" rel="noreferrer">Twitter / X</a>
      </nav>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="page">
      <Navbar />
      <AboutSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
