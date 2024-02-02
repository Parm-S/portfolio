"use client";

import React from "react";

import SectionHeading from "../SectionHeading";
import { projectsData } from "@/lib/data";

import ProjectCard from "./ProjectCard";

import { useSectionInView } from "@/lib/hook";
const Project = () => {
  const { ref } = useSectionInView({ actionName: "Projects", threshold: 0.5 });

  return (
    <section id="projects" className="scroll-m-28 mb-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Project;
