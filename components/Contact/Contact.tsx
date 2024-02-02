"use client";

import React from "react";
import SectionHeading from "../SectionHeading";
import { FaPaperPlane } from "react-icons/fa";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import { sendEmail } from "@/actions/sendEmail";

const Contact = () => {
  const { ref } = useSectionInView({ actionName: "Contact", threshold: 0.5 });
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="text-center scroll-mt-28 mb-28 sm:mb-40 w-[min(100%, 38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a href="mailto:parminder.singh629@gmail.com" className="underline">
          parminder.singh629@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col" action={async(formData) =>  await sendEmail(formData)}>
        <input
          className="h-14 rounded-lg borderBlack p-4"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
          required
          maxLength={500}
          placeholder="Your Message"
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
         flex items-center justify-center gap-2
         focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
          group-hover:translate-x-1
          group-hover:-translate-y-1
          "
          />{" "}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
