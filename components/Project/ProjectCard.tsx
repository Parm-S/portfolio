"use client";

import React from "react";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectCardProps = (typeof projectsData)[number];

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
}: ProjectCardProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className=" bg-gray-100 max-w-[42rem] 
                 border border-black/5 rounded-lg 
                 overflow-hidden 
                  sm:pr-8 sm:h-[20rem]  relative
                hover:bg-gray-200 transition
                dark:bg-white/10 dark:hover:bg-white/20
                dark:text-white
  "
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 
          sm:pt-10 sm:max-w-[50%]
     flex flex-col h-full sm:group-even:pl-8 
     sm:group-even:ml-[21rem]
     "
        >
          <h3 className="text-2xl font-semibold ">{title}</h3>
          <p className="text-gray-700 dark:text-white/70 mt-2 leading-relaxed">{description}</p>
          <ul className=" flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={"Project worked on"}
          quality={90}
          className="absolute hidden sm:block  top-8 -right-40  w-[28.25rem] rounded-t-lg shadow-2xl
      trasnsition
      group-hover:scale-[1.04]
      group-hover:-translate-x-3
      group-hover:-translate-y-3
      group-hover:rotate-2

      group-even:group-hover:translate-x-3
      group-even:group-hover:translate-y-3
      group-even:group-hover:rotate-2

      group-even:right-[initial]
      group-even:-left-40
      "
        />
      </section>
    </motion.div>
  );
};

export default ProjectCard;
