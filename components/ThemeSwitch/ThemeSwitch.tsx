"use client";

import { useTheme } from "@/context/ThemeProvider";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="bottom-5 fixed right-5  bg-white 
    w-[3rem] h-[3rem] rounded-full
    bg-opacity-80 backdrop-blur-[0.5rem] 
    border border-white border-opacity-40
    shadow-2xl flex items-center justify-center
    hover:scale-[1.15]
    active:scale-105
    transition-all
    dark:bg-gray-950
    "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
