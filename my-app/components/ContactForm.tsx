export default function ContactForm() {
  return (
    <section className="section contact" id="contacto">
      <p className="section__label">Contacto</p>
      <h2>Escríbeme</h2>
      <form className="contact-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          required
        />
        <label htmlFor="comment">Comentario</label>
        <textarea
          id="comment"
          name="comment"
          rows={5}
          placeholder="Cuéntame sobre tu proyecto"
          required
        />
        <button type="button">Enviar</button>
      </form>
    </section>
  );
}