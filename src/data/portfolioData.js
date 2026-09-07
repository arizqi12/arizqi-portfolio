// src/data/portfolioData.js
export const personalInfo = {
  name: "Arizqi Ramadhan",
  title: "Frontend Developer & UI/UX Design Enthusiast",
  bio: "Fresh graduate (2025) dengan minat pada pengembangan Frontend dan desain UI/UX. Aktif belajar membangun antarmuka web yang rapi, responsif, dan nyaman digunakan menggunakan React, Tailwind CSS, serta Figma.",
  email: "arizqiramadhan2@gmail.com",
  socials: {
    github: "https://github.com/arizqi12",
    linkedin: "https://linkedin.com/in/arizqi-ramadhan",
  },
};

export const projects = [
  {
    id: 1,
    title: "Portofolio Web",
    description:
      "Aplikasi portofolio pribadi dibangun dengan React, Vite dan Tailwind CSS.",
    techStack: ["React", "Vite", "Tailwind CSS"],
    image: "/projects/portfolio.png",
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 2,
    title: "TeamDetik UI",
    description:
      "Slicing landing page dan halaman blog multi-page interaktif menggunakan HTML5 Semantik, CSS3, dan Bootstrap 4.",
    techStack: ["HTML5", "CSS3", "Bootstrap"],
    image: "/projects/teamdetik.png",
    demoLink: "https://team-detik.vercel.app/",
    githubLink: "https://github.com/arizqi12/team-detik",
  },
  {
    id: 3,
    title: "Explore Thailand by Detiktravel",
    description:
      "Mengembangkan landing page interaktif dan responsif untuk kampanye Explore Thailand bersama Detiktravel. Platform ini dirancang untuk mempromosikan kompetisi perjalanan ke Thailand, memberikan informasi mekanisme pendaftaran, serta menyajikan artikel travel update terkini secara visual dan menarik.",
    techStack: ["React", "Vite", "Tailwind CSS"],
    image: "/projects/explorethailand.png",
    demoLink: "https://explore-thailand.vercel.app/",
    githubLink: "https://github.com/arizqi12/explore-thailand",
  },
];

export const skills = [
  {
    category: "UI/UX Design",
    description:
      "Merancang antarmuka pengguna yang intuitif, menarik, dan berfokus pada kebutuhan pengguna.",
    items: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Flow",
      "Design Systems",
      "Responsive Web Design",
    ],
  },
  {
    category: "Frontend Development",
    description:
      "Mengimplementasikan rancangan desain menjadi kode yang bersih, cepat, dan responsif.",
    items: [
      "ReactJS",
      "Vite",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Bootstrap",
      "Git & GitHub",
      "REST API Integration",
    ],
  },
];
