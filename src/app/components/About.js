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
            I am a final-year Computer Science student passionate about full-stack web development.
            I specialize in React, Next.js, and building responsive, user-friendly web applications.
            I enjoy solving real-world problems through clean and efficient code.
            I have worked on multiple personal projects to strengthen my development skills.
            I am actively seeking opportunities to grow as a software developer and contribute to impactful projects.
          </p>

        </div>

      </div>
    </section>
  );
}
