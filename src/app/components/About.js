import Image from "next/image";

export default function About() {
  return (
    <section className="fade-in about-section">
      <h2>About Me</h2>

      <div className="about-content">

        <div className="about-img">
          <Image
            src="/myphoto.jpeg"
            width={220}
            height={220}
            alt="me"
            className="profile-img"
          />
        </div>

        <div className="about-text">
          <p>
            Final-year CSE student with strong skills in React, Next.js, and full-stack development.
          </p>

          <p>
            Passionate about building real-world projects, problem solving, and learning new technologies.
          </p>

          <p>
            Seeking opportunities to grow and contribute as a software developer.
          </p>
        </div>

      </div>
    </section>
  );
}