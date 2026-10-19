import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <Link className="navbar__brand" href="/#sobre-mi">Alex Rivera</Link>
      <div className="navbar__links">
        <Link href="/#proyectos">Proyectos</Link>
        <Link href="/#contacto">Contacto</Link>
        <Link href="/#sobre-mi">Sobre mí</Link>
      </div>
    </nav>
  );
}