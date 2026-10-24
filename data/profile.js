// ==========================================================================
// Semua teks & data di portofolio ini ditarik dari sini.
// Mau ganti nama, deskripsi, project, dll -> edit file ini aja, gak perlu
// nyentuh file lain. Foto project taruh di /public/projects/ lalu tulis
// pathnya di sini, contoh: "/projects/gopadel.png"
// ==========================================================================

export const profile = {
  name: "Michael Stephanus",
  roles: ["Project Manager", "Data Analyst", "Software Engineer", "Full Stack Developer"],
  location: "Tangerang, Indonesia",
  email: "michaelstephanus71@gmail.com",
  phone: "+62 858-9208-9247",
  linkedin: "https://linkedin.com/in/michael-stephanus",
  github: "https://github.com/Buster1512", // isi kalau ada, misal "https://github.com/username"
  tagline: "I build systems, lead the people who build them, and make sense of the data they produce.",
  summary:
    "Information Systems graduate from Gunadarma University (GPA 3.82/4.00) with hands-on experience as a freelance Project Manager, delivering 20+ web, desktop, and mobile application projects and leading a team of 6 members. Skilled in requirements gathering, team coordination, and client communication. Built web-based systems using Laravel, PHP, and MySQL, including online payment integration. Completed two independent internships as a Full Stack Engineer and holds a BNSP Data Analyst certification.",

  coreCompetencies: [
    "Project Management Lifecycle",
    "Team Leadership",
    "Requirements Gathering",
    "Client Communication",
    "Scope & Timeline Management",
    "KPI Monitoring & Reporting",
    "Data Analysis",
    "Research & Analysis",
    "Event Management",
  ],

  skills: [
    {
      label: "Web Development",
      items: ["PHP", "Laravel", "MySQL", "Node.Js", "Golang", "Java"],
    },
    {
      label: "Integrations",
      items: ["Midtrans Payment Gateway API", "AI Chatbot (Hybrid / RAG)"],
    },
    {
      label: "Project Tools",
      items: ["Trello", "GitHub", "Excel", "Google Sheets"],
    },
    {
      label: "Languages",
      items: ["Bahasa Indonesia (Native)", "English (Intermediate)"],
    },
  ],

  projects: [
    {
      title: "Go Padel — Court Reservation Information System",
      period: "Apr 2026 – Aug 2026",
      tags: ["Laravel", "MySQL", "Midtrans", "Gemini API"],
      cover: "/projects/go-padel.jpg",
      description:
        "Undergraduate thesis project: a web-based padel court reservation system covering court booking, membership management, event registration, transaction history, and an administrator dashboard.",
      highlights: [
        "Integrated Midtrans Payment Gateway for reservation, membership, and event payments with automatic status updates",
        "Built a hybrid AI chatbot (Rule-Based + Gemini API, RAG concept) to answer customer inquiries",
        "Validated via Black Box Testing and cross-browser/device testing — UAT with 32 respondents resulted in 96.54% acceptance",
      ],
    },
    {
      title: "Winnigram",
      period: "Jan 2026 – Jul 2026",
      tags: ["Full Stack", "Social Media App"],
      cover: "/projects/winnigram.jpg",
      description:
        "An Instagram-inspired social media application built during an independent internship, handling both front-end and back-end development.",
      highlights: [
        "Implemented a content feed, stories, and direct chat between users",
        "Built profile management and core social interactions end-to-end",
      ],
    },
    {
      title: "Tembok Berita",
      period: "Jul 2025 – Dec 2025",
      tags: ["Laravel", "News Portal"],
      cover: "/projects/tembok-berita.jpg",
      description:
        "A news portal delivering the latest and current news, built end-to-end with Laravel during an independent internship.",
      highlights: [
        "Implemented user accounts that let registered users publish news, comment, and join discussion forums",
        "Built an admin moderation feature to review and remove unsuitable content",
      ],
    },
    {
      title: "Toko Pudan Ben — LPG & Mineral Water Sales System",
      period: "Apr 2025 – Aug 2025",
      tags: ["PHP", "MySQL"],
      cover: "/projects/toko-pudan-ben.jpg",
      description:
        "A web-based sales system managing inventory of 1,000+ LPG cylinders and 1,000+ bottled mineral water units, plus sales transactions and reports.",
      highlights: [
        "Simplified the store's record-keeping process",
        "Enabled customers to place orders online through the website",
      ],
    },
  ],

  journey: [
    {
      year: "2026",
      role: "Final Year",
      title: "BSc. Information Systems — Gunadarma University",
      org: "GPA 3.82 / 4.00",
      description:
        'Final project: "Implementation of a Web-Based Court Reservation Information System Using the Laravel Framework with Midtrans Payment Gateway Integration and Hybrid AI Chatbot at Go Padel."',
      tags: ["Laravel", "Midtrans", "Gemini API", "Thesis"],
    },
    {
      year: "2024 – Present",
      role: "Freelance",
      title: "Project Manager",
      org: "Vexrion",
      description:
        "Managed end-to-end delivery of 20+ web, desktop, and mobile application projects. Built and led a cross-functional team of 6, and coordinated client communication to manage scope and keep deliverables on track.",
      tags: ["Project Management", "Team Leadership", "Client Communication"],
    },
    {
      year: "Jan – Jul 2026",
      role: "Independent Internship",
      title: "Full Stack Engineer — Fullstack Developer Program",
      org: "PT Winnicode Garuda Indonesia",
      description:
        "Built Winnigram, an Instagram-inspired social app, covering both front-end and back-end development.",
      tags: ["Full Stack", "Social Media App"],
    },
    {
      year: "Jul – Dec 2025",
      role: "Independent Internship",
      title: "Full Stack Engineer — Laravel Developer Program",
      org: "PT Winnicode Garuda Indonesia",
      description:
        "Built Tembok Berita, a Laravel-based news portal with user publishing, comments, and admin moderation.",
      tags: ["Laravel", "News Portal"],
    },
    {
      year: "2024 – 2025",
      role: "Leadership",
      title: "Head of REVITI & R&D Staff",
      org: "BEM FIKTI, Gunadarma University",
      description:
        "Led REVITI (Recap of Activities) and monitored KPI performance of 14 bureaus and departments, compiling periodic reports for leadership evaluation.",
      tags: ["KPI Monitoring", "Reporting", "Research"],
    },
    {
      year: "2025",
      role: "Leadership",
      title: "Head of Event Division — FIKTI Space 4.0",
      org: "Gunadarma University",
      description:
        "Led a team of 13 to plan and execute 3 events (sports, esports, arts) attended by 50+ participants.",
      tags: ["Event Management", "Team Leadership"],
    },
  ],

  certifications: [
    { name: "Data Analyst Certification", issuer: "BNSP (Badan Nasional Sertifikasi Profesi)", year: "2026" },
  ],
};
