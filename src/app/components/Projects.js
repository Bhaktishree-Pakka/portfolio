import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "News App",
      desc: "Real-time news app using React and APIs",
      image: "/news-image.png",
    },
    {
      title: "ASD Detection",
      desc: "AI system for Autism Spectrum Disorder support",
      image: "/ASD.png",
    },
    {
      title: "AI Career Coach",
      desc: "AI tool for career guidance and resumes",
      image: "/ai-carerr-coach.png",
    },
    {
      title: "Portfolio",
      desc: "Personal site showcasing skills and projects",
      image: "/portfolio.png",
    },
    {
      title: "Expense Tracker",
      desc: "App to track income, expenses, and budget",
      image: "/expense-tracker.png",
    },
  ];

  return (
    <section>
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">

            <Image
              src={p.image}
              width={300}
              height={180}
              alt={p.title}
              className="project-img"
            />

            <h3>{p.title}</h3>
            <p>{p.desc}</p>

          </div>
        ))}
      </div>
    </section>
  );
}