export default function Navbar() {
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