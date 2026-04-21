import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/CSS.png" },
    { name: "JavaScript", icon: "/javascript-image.png" },
    { name: "React", icon: "/react-image.png" },
    { name: "Java", icon: "/java-image.png" },
    { name: "MongoDB", icon: "/mongodb-image.png" },
    { name:"Next Js", icon:"/Nextjs.png"},
    { name:"Node Js", icon:"/nodejs.png"},
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <Image
              src={skill.icon}
              width={50}
              height={50}
              alt={skill.name}
              className="skill-img"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
