import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="hero-content">

        <div className="hero-text">
          <h1>Hi, I'm Bhaktishree</h1>
          <p>Full Stack Developer | React | Next.js</p>
          <a href="https://github.com/Bhaktishree-Pakka" className="btn">GitHub</a>
          <a href="https://www.linkedin.com/in/bhaktishree-pakka-080ba2268?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="btn">LinkedIn</a>
        </div>

        <Image
          src="/myphoto.jpeg"
          width={250}
          height={250}
          alt="profile"
          className="profile-img"
        />
      </div>
    </section>
  );
}