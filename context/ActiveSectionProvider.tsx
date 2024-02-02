"use client";

import type { SectionName } from "@/lib/types";
import React from "react";



type ActiveSectionProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext =
  React.createContext<ActiveSectionContextType | null>(null);

const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = React.useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = React.useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = (): ActiveSectionContextType => {
  const context = React.useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
};

export default ActiveSectionProvider;
