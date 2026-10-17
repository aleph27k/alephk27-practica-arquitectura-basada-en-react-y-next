import AboutSection from "../components/AboutSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";

export default function Pages() {
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