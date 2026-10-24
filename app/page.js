"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

const SECTIONS = ["home", "about", "skills", "projects", "journey", "contact"];

export default function Home() {
  const [active, setActive] = useState("home");
  const [typed, setTyped] = useState("");
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  // typed-role effect
  useEffect(() => {
    let timer;
    function tick() {
      const word = profile.roles[roleIndex.current];
      if (!deleting.current) {
        charIndex.current++;
        setTyped(word.slice(0, charIndex.current));
        if (charIndex.current === word.length) {
          deleting.current = true;
          timer = setTimeout(tick, 1300);
          return;
        }
      } else {
        charIndex.current--;
        setTyped(word.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % profile.roles.length;
          timer = setTimeout(tick, 300);
          return;
        }
      }
      timer = setTimeout(tick, deleting.current ? 40 : 80);
    }
    tick();
    return () => clearTimeout(timer);
  }, []);

  // scroll-spy
  useEffect(() => {
    function onScroll() {
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) current = id;
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header>
        <nav>
          <a href="#home" className="brand">
            {profile.name.split(" ")[0]}
            <span>.</span>
          </a>
          <ul className="nav-links">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? "active" : ""}>
                  {label(id)}
                </a>
              </li>
            ))}
          </ul>
          <a href={`mailto:${profile.email}`} className="nav-cta">
            Say Hello
          </a>
        </nav>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section id="home" className="hero wrap">
        <p className="hero-kicker">
          <span className="dot" /> Based in {profile.location}
        </p>
        <h1>
          Hi, I&apos;m {profile.name.split(" ")[0]}
          <br />
          <span className="accent">{profile.name.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="role-line">
          I work as a{" "}
          <span className="role-typed">
            {typed}
            <span className="role-cursor">&nbsp;</span>
          </span>
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>
        <div className="hero-meta">
          <div>
            <strong>20+</strong>
            Projects Delivered
          </div>
          <div>
            <strong>6</strong>
            Team Members Led
          </div>
          <div>
            <strong>3.82</strong>
            GPA / 4.00
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="wrap">
        <p className="eyebrow">About</p>
        <h2 className="section-title">
          A bit about <span style={{ color: "var(--accent)" }}>how I work</span>
        </h2>

        <div className="about-grid">
          <div>
            <p className="about-text">{profile.summary}</p>
            <div className="chip-row">
              {profile.coreCompetencies.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="fact-card">
              <div className="label">Education</div>
              <div className="value">Gunadarma University</div>
              <div className="about-text" style={{ margin: "6px 0 0" }}>
                Bachelor of Information Systems — GPA 3.82 / 4.00
              </div>
            </div>
            <div className="fact-card">
              <div className="label">Certification</div>
              {profile.certifications.map((c) => (
                <div key={c.name}>
                  <div className="value">{c.name}</div>
                  <div className="about-text" style={{ margin: "6px 0 0" }}>
                    {c.issuer} — {c.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section id="skills" className="wrap">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">
          Tools I <span style={{ color: "var(--accent)" }}>reach for</span>
        </h2>
        <p className="section-sub">Across project management, development, and data.</p>

        <div className="skills-grid">
          {profile.skills.map((group) => (
            <div key={group.label} className="skill-card">
              <h3>{group.label}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="wrap">
        <p className="eyebrow">Selected Work</p>
        <h2 className="section-title">
          Things I&apos;ve <span style={{ color: "var(--accent)" }}>built</span>
        </h2>
        <p className="section-sub">A mix of thesis work, internship projects, and freelance delivery.</p>

        <div className="projects-grid">
          {profile.projects.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-cover">
                {/* Taruh foto di /public/projects/ lalu isi path-nya di data/profile.js */}
                <span>project thumbnail</span>
                <img
                  src={p.cover}
                  alt={p.title}
                  style={{ position: "absolute", inset: 0 }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="project-body">
                <div className="project-period">{p.period}</div>
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.description}</p>
                <ul className="project-highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- JOURNEY ---------------- */}
      <section id="journey" className="wrap">
        <p className="eyebrow">Journey</p>
        <h2 className="section-title">
          How I <span style={{ color: "var(--accent)" }}>got here</span>
        </h2>
        <p className="section-sub">Work, internships, academics, and leadership — in order.</p>

        <div className="timeline">
          {profile.journey.map((j) => (
            <div key={j.title} className="timeline-item">
              <div className="timeline-year">
                {j.year} · {j.role}
              </div>
              <div className="timeline-title">{j.title}</div>
              <div className="timeline-org">{j.org}</div>
              <p className="timeline-desc">{j.description}</p>
              <div className="timeline-tags">
                {j.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="wrap">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">
          Let&apos;s <span style={{ color: "var(--accent)" }}>work together</span>
        </h2>
        <p className="section-sub">Open for freelance, internship, and full-time opportunities.</p>

        <div className="contact-grid">
          <a href={`mailto:${profile.email}`} className="contact-card">
            <div className="label">Email</div>
            <div className="value">{profile.email}</div>
          </a>
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="contact-card">
            <div className="label">Phone</div>
            <div className="value">{profile.phone}</div>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="label">LinkedIn</div>
            <div className="value">Michael Stephanus</div>
          </a>
        </div>

        <a href={`mailto:${profile.email}`} className="btn-primary">
          Email Me
        </a>
      </section>

      <footer>
        &copy; {new Date().getFullYear()} <span>{profile.name}</span>. All rights reserved.
      </footer>
    </>
  );
}

function label(id) {
  const map = {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    journey: "Journey",
    contact: "Contact",
  };
  return map[id] || id;
}
