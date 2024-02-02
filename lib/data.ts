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
    title: "Associate Software Engineer",
    location: "Agra",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer and backend developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2021 - Sep 2022",
  },
  {
    title: "Software Developer",
    location: "Gurugram, Haryana, India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Checklistgurus",
    description:
      "I worked as a full-stack developer on this startup project for 1 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MaterialUI", "Java", "Spring Boot", "MySQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "GPP food Donation",
    description:
      "Food donation platform. I was the front-end developer. It has features like filtering, sorting, pagination ,Create donation , accept donation and manage different dashboard for different type of users. ",
    tags: ["React", "TypeScript", "Tailwind", "Redux","firebase"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Credit Ghar",
    description:
      "A web app for collect payment against there loan. I was the full stack devdeloper and managing team.",
    tags: ["React", "Next.js", "PostgresSQL", "Tailwind", "Azure" , "Express"],
    imageUrl: wordanalyticsImg,
  },
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