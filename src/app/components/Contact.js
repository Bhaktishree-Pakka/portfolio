export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>

        <button className="btn">Submit</button>
      </form>
    </section>
  );
}