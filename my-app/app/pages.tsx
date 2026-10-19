import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import ProjectsSection from "../components/ProjectsSection";

export default function Pages() {
  return (
    <main className="page">
      <AboutSection />
      <ProjectsSection />
      <ContactForm />
    </main>
  );
}