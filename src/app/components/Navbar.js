"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Load theme
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

  const isActive = (path) => pathname === path;

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

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link href="/" className={isActive("/") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={isActive("/about") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className={isActive("/skills") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link href="/projects" className={isActive("/projects") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className={isActive("/contact") ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <button className="btn" onClick={() => setDark(!dark)}>
          {dark ? "🌙" : "☀️"}
        </button>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
}
