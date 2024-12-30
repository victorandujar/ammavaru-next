"use client";

import React, { createContext, RefObject, useContext, useRef } from "react";

interface ScrollContextProps {
  scrollToSection: (id: string) => void;
  sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>>;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const useScrollContext = (): ScrollContextProps => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const methodologyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs: Record<string, RefObject<HTMLDivElement | null>> = {
    method: methodologyRef,
    services: servicesRef,
    contact: contactRef,
  };

  const scrollToSection = (id: string) => {
    const sectionRef = sectionRefs[id];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, sectionRefs }}>
      {children}
    </ScrollContext.Provider>
  );
};
