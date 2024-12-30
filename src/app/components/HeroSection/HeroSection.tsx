"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HeroSection = (): React.ReactElement => {
  const t = useTranslations("HeroSection");

  const lines = useMemo(() => [t("welcome-first"), t("welcome-second")], [t]);
  const [showCursor, setShowCursor] = useState(true);
  const [position, setPosition] = useState(0);
  const [isWritingFirstLine, setIsWritingFirstLine] = useState(true);
  const [isWritingSecondLine, setIsWritingSecondLine] = useState(false);

  useEffect(() => {
    if (isWritingFirstLine) {
      const firstLineLength = lines[0].length;

      const interval = setInterval(() => {
        setPosition((prev) => {
          if (prev < firstLineLength) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setTimeout(() => {
              setIsWritingFirstLine(false);
              setIsWritingSecondLine(true);
              setPosition(0);
            }, 500);
            return prev;
          }
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isWritingFirstLine, lines]);

  useEffect(() => {
    if (isWritingSecondLine) {
      const secondLineLength = lines[1].length;

      const interval = setInterval(() => {
        setPosition((prev) => {
          if (prev < secondLineLength) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isWritingSecondLine, lines]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="flex mobile:flex-col-reverse mobile:gap-10 items-center justify-between w-full">
      <div className="flex flex-col text-mainColor">
        <span className="text-xxl font-bold">
          {lines[0].slice(0, isWritingFirstLine ? position : lines[0].length)}
          {isWritingFirstLine && showCursor && (
            <span className="blinking-cursor">|</span>
          )}
        </span>
        <span className="text-xxl font-bold">
          {lines[1].slice(0, isWritingSecondLine ? position : 0)}
          {isWritingSecondLine && position < lines[1].length && showCursor && (
            <span className="blinking-cursor">|</span>
          )}
        </span>
      </div>
      <section className="flex items-center justify-center ">
        <div className="relative w-[200px] h-[200px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-mainColor via-primary via-secondary to-tertiary opacity-60 blur-2xl animate-smoke"></div>
          <Image
            src={"/logo-colors.png"}
            alt="logo colors"
            height={200}
            width={200}
            className="relative z-1 rounded-full"
          />
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
