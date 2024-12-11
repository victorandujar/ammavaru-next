"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

const AboutSection = (): React.ReactElement => {
  const t = useTranslations("About");
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => setShowFirstText(true), 100);
    const secondTimer = setTimeout(() => setShowSecondText(true), 1000);
    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <section className="flex justify-between">
      <div
        className={`w-2/5 transition-all duration-1000 ease-out transform ${
          showFirstText
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <span className="text-l font-thin">{t("we-are")}</span>
      </div>

      <div
        className={`w-2/5 transition-opacity duration-1000 ease-in ${
          showSecondText ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-s font-bold">{t("we-do")}</span>
      </div>
    </section>
  );
};

export default AboutSection;
