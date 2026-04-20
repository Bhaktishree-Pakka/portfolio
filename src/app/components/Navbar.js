"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDark(false);
      document.body.classList.add("light-mode");
    }
  }, []);

  // Apply theme
  useEffect(() => {
    if (dark) {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <Link href="/">
          <Image
            src="/myphoto.jpeg"
            width={50}
            height={50}
            alt="Profile"
            className="logo-img"
          />
        </Link>
      </div>

      {/* MENU */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link href="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
        <li><Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        {/* THEME BUTTON */}
        <button className="btn" onClick={() => setDark(!dark)}>
          {dark ? "🌙" : "☀️"}
        </button>

        {/* HAMBURGER */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
}