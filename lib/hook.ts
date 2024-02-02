import { useActiveSection } from "@/context/ActiveSectionProvider";
import React from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

type useSectionInViewProps = {
  actionName: SectionName;
  threshold: number;
};

const useSectionInView = ({ actionName, threshold = 0.5 }: useSectionInViewProps) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSection();

  React.useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(actionName);
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return {
    ref,
  };
};

export { useSectionInView };
