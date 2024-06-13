import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
{
    title: "Software Developer",
    location: "Gurugram, Haryana, India",
    description: `
      Futurionic (Sep 2022 - Present)
      - Frontend Development: Experienced in React.js and TypeScript with a focus on functional components. Competent in JavaScript (ECMAScript), Axios, routing, NPM, local storage, and styles. Developed a custom reusable React component library.
      - Backend Development: Skilled in Express.js, Node.js, and Sequelize for server-side development. Experienced with databases like PostgreSQL and MongoDB.
      - React Concepts: Familiar with Context API, navigation, hooks, Redux, third-party API integrations, and other React concepts.
      - Version Control: Proficient in using Git Bash and GitHub Desktop.
      - Project Development: Designed and developed a range of client and in-house applications, streamlining internal processes and enhancing team productivity.
      - Team Management: Effectively managed a team of 6, ensuring project goals were met on schedule and within scope. Provided training to 3 employees, fostering skill growth and professional development in React.js and Node.js.
      - Client Communication: Acted as a point of contact for multiple clients, facilitating clear and open communication, understanding client requirements, and managing expectations.
      - Technical Leadership: Conducted technical interviews to assess candidates and build a skilled team, contributing to overall company growth. Actively participated in code reviews, ensuring code quality, best practices, and knowledge sharing.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - Present",
  },  
{
    title: "Associate Software Engineer",
    location: "Agra, Uttar Pradesh, India",
    description: `
      Iedaas (Aug 2021 - Sep 2022)
      - Web Design: Worked on web design, including HTML, JavaScript, and CSS.
      - Frontend Development: Hands-on experience with React.js and TypeScript, with a solid understanding of functional components.
      - Backend Development: Experience with Spring Boot, MVC, Hibernate, Express.js, and Node.js.
      - Database Management: Good understanding of working with different databases, such as MySQL and MongoDB.
      - React Concepts: Familiar with Context API, navigation, hooks, and other React concepts.
      - JavaScript Proficiency: Proficient in JavaScript (ECMAScript), Axios, routing, NPM, local storage, and stylesheets.
      - Component Library: Created a custom reusable React components library.
      - Testing: Hands-on experience writing unit test cases using Jest and Mockito.
    `,
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2021 - Sep 2022",
  }
] as const;

export const projectsData = [
  {
    title: "CreditGhar",
    description:
      "A web app for collecting payments against loans. I was the full-stack developer and managed the team.",
    tags: ["React", "Next.js", "PostgresSQL", "Tailwind", "Azure", "Express"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "GPP Food Donation",
    description:
      "Created a food donation platform with user-specific dashboards, filtering, sorting, pagination, and donation management as the front-end developer.",
    tags: ["React", "TypeScript", "Tailwind", "Redux", "Firebase"],
    imageUrl: rmtdevImg,
  },
 {
    title: "mtrack",
    description:
      "Developed leave, attendance, job, and policy modules, and handled backend maintenance.",
    tags: ["Node.js", "Express", "Sequelize", "PostgreSQL"],
    imageUrl: wordanalyticsImg, 
  },
  {
    title: "Checklistgurus",
    description:
      "I worked as a full-stack developer on this startup project for 1 year. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MaterialUI", "Java", "Spring Boot", "MySQL"],
    imageUrl: corpcommentImg,
  },
{
    title: "Iedeas.com",
    description:
      "Built the website using Next.js, integrated React Hook Form, SendGrid API, themes, and translations.",
    tags: ["Next.js", "TypeScript", "Material UI", "SendGrid"],
    imageUrl: wordanalyticsImg,  
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MaterialUI",
  "MongoDB",
  "Redux",
  "MySQL",
  "Azure",
  "Express",
  "PostgreSQL",
  "Java",
  "Spring Boot",
  "Framer Motion",
] as const;
