import aiChatBotImg from "@/public/aichatbot.png";
import matchboxImg from "@/public/matchbox.png";
import onlineExaminationPlatformImg from "@/public/onlineExaminationPlatform.png";

import { CgWorkAlt } from "react-icons/cg";
import { FaAws, FaReact, FaRaspberryPi } from "react-icons/fa";
import {
  RiCss3Line,
  RiDatabase2Line,
  RiGatsbyLine,
  RiGitBranchLine,
  RiHtml5Line,
  RiJavaLine,
  RiJavascriptLine,
  RiNextjsFill,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
  RiVuejsLine,
} from "react-icons/ri";
import {
  TbBrandDocker,
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandLaravel,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandTypescript,
  TbBrandVercel,
} from "react-icons/tb";

import React from "react";

const experienceInYears = new Date().getFullYear() - 2020;

export const profile = {
  avatar: "https://avatars.githubusercontent.com/u/34062262?v=4",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  name: "Jennifer Hill",
  title: "Senior Full Stack Engineer",
  experience: `${experienceInYears} years`,
  likes: "building web and mobile apps",
  // resumeLink: `https://www.uvic.ca/career-services/_assets/docs/resume-computer-engineering.pdf`,
  linkedInLink: "",
  githubLink: "https://github.com/Spark0914724",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "",
    location: "Upto, China",
    description: [
        "- Led the development of high-performance SaaS applications using React and Node.js, boosting user engagement by 20% with faster load times and improved UI/UX.",
        "- Designed and implemented RESTful and GraphQL APIs, cutting response times by 30% and ensuring seamless system integration.",
        "- Built real-time notification systems with WebSockets, increasing user interaction by 15%, and optimized database performance for PostgreSQL and MongoDB, reducing data retrieval time by 25% during peak traffic.",
        "- Managed Docker and AWS deployment pipelines, improving deployment speed by 40%, and conducted architecture reviews and mentorship, enhancing code quality and reducing production bugs by 18%.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Present",
  },
  {
    title: "",
    location: "Pinduoduo, China",
    description: [
        "- Developed responsive React and Next.js apps for SaaS clients, boosting user retention and performance by 15%.",
        "- Implemented scalable state management with Redux Toolkit, reducing errors by 20%.",
        "- Optimized backend services with Node.js and Express, improving API latency by 25%. Integrated front-end apps with REST and GraphQL APIs, enhancing system efficiency and data retrieval by 30%.",
        "- Contributed to CI/CD automation, cutting manual errors by 50%, and collaborated with remote teams, delivering 10+ features per sprint with a 98% completion rate.",
    ],
    icon: React.createElement(FaReact),
    date: "Oct 2020 - Jul 2023",
  },
  // {
  //   title: "Ordina",
  //   location: "Rotterdam, Netherlands",
  //   description:
  //     "Developed secure web applications in a cybersecurity-focused environment, implementing authentication workflows, secure session handling, and resolving performance and security issues.",
  //   icon: React.createElement(FaReact),
  //   date: "2019 - Oct 2020",
  // },
] as const;

export const projectsData = [
  {
    title: "Matchbox",
    description:
      "A powerful team collaboration and productivity platform that helps users manage projects, track tasks, and monitor performance with real-time updates and analytics.",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Tailwind CSS", "Render", "Vercel"],
    imageUrl: matchboxImg,
    url: "https://matchbox-zeta.vercel.app",
    // sourceLink: "https://github.com/Spark0914724/matchbox-frontend.git"
  },
  {
    title: "EDU-XIE Online Examination Platform",
    description:
      "A secure online exam platform with test creation, encrypted storage, anti-cheat, automated grading, and real-time analytics.",
    tags: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "JWT", "Framer Motion", "Recharts"],
    imageUrl: onlineExaminationPlatformImg,
    url: "http://edu-xie.vercel.app/",
    // sourceLink: "https://github.com/Spark0914724/online-examination-system"
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: RiHtml5Line },
  { name: "CSS", icon: RiCss3Line },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: RiReactjsLine },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "Vue.js", icon: RiVuejsLine },
  { name: "Tailwind CSS", icon: RiTailwindCssLine } ,
  { name: "Material UI", icon: RiTailwindCssLine },
  { name: "Redux", icon: TbBrandRedux },
  { name: "NodeJS", icon: RiNodejsLine },
  { name: "Express", icon: TbBrandNodejs },
  { name: "Laravel", icon: TbBrandLaravel },
  { name: "Java", icon: RiJavaLine },
  { name: "Python", icon: TbBrandPython },
  { name: "GraphQL", icon: TbBrandGraphql },
  { name: "Socket IO", icon: TbBrandSocketIo },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "MySQL", icon: TbBrandMysql },
  { name: "PostgreSQL", icon: RiDatabase2Line },
  { name: "Git", icon: RiGitBranchLine },
  { name: "Docker", icon: TbBrandDocker },
  { name: "Vercel", icon: TbBrandVercel },
  { name: "AWS", icon: FaAws },
] as const;
