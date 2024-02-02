"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import myimage from "@/public/my-picuture.jpeg";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb:0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={myimage}
              className="h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl rounded-full"
              quality={100}
              priority={true}
              alt="Parminder Portrait"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Parminder.</span> I'm a{" "}
        <span className="font-bold">mern stack developer</span> with{" "}
        <span className="font-bold">2.5 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white py-3 px-7 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
          "
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition " />
        </Link>

        <a
          href="/CV.pdf"
          className="group bg-white  py-3 px-7 flex 
                    items-center gap-2 rounded-full cursor-pointer
                    outline-none focus:scale-110 hover:scale-110 
                    active:scale-105 transition border border-black/10"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
        </a>
        <a
          href="https://www.linkedin.com/in/parminder-singh-1815ba5a/"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 
          rounded-full  cursor-pointer
        outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
         active:scale-105 transition border border-black/10"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Parm-S"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full  cursor-pointer
        outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
         active:scale-105 transition border border-black/10"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
