

import React from "react";


import SectionHeading from "../SectionHeading";
import { projectsData } from "@/lib/data";

import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section
     id="projects"
     className="scroll-m-28"
    >
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
