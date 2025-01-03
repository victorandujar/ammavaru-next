"use client";

import { useTranslations } from "next-intl";
import FluidMesh from "../FluidMesh/FluidMesh";
import LinesAnimation from "../LinesAnimation/LinesAnimation";
import SpiralAnimation from "../SpiralAnimation/SpiralAnimation";
import { useState, useRef, useEffect } from "react";
import useAnimations from "@/app/hooks/useAnimations";

const MethodologySection = (): React.ReactElement => {
  const t = useTranslations("Methodology");
  const { screenObserverVertical, showAnimateItems } = useAnimations();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animateItems, setAnimateItems] = useState<boolean>(false);
  const [delayedItems, setDelayedItems] = useState([false, false, false]);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    screenObserverVertical(setIsVisible, sectionRef);
  }, [screenObserverVertical]);

  useEffect(() => {
    showAnimateItems(isVisible, setAnimateItems);
  }, [isVisible, showAnimateItems]);

  useEffect(() => {
    if (animateItems) {
      const timeouts = [
        setTimeout(() => setDelayedItems([true, false, false]), 0),
        setTimeout(() => setDelayedItems([true, true, false]), 300),
        setTimeout(() => setDelayedItems([true, true, true]), 900),
      ];
      return () => timeouts.forEach(clearTimeout);
    }
  }, [animateItems]);

  return (
    <section
      className={`pt-32 flex flex-col gap-10 mobile:overflow-hidden mobile:h-fit transition-all duration-1000 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      ref={sectionRef}
    >
      <div className="relative pb-2 w-full mobile:px-5 mobile:w-[90%]">
        <div className="absolute bottom-0 left-0 mobile:left-5 w-full h-[1px] bg-gradient-to-r from-mainColor/70 via-mainColor/40 to-mainColor/20"></div>
        <h5 className="font-bold text-mainColor">{t("title")}</h5>
      </div>
      <section className="flex mobile:flex-col gap-5 w-full mobile:px-5">
        <div className="w-1/2 mobile:w-full">
          <div className="flex gap-4 mobile:flex-col mobile:gap-1 w-full">
            <h6 className="text-xxl mobile:text-xl text-mainColor">
              {t("subtitle-first")}
            </h6>
            <h6 className="text-xxl mobile:text-xl text-mainColor font-bold italic">
              {t("subtitle-purpose")},
            </h6>
          </div>
          <h6 className="text-xxl mobile:text-xl text-mainColor mobile:w-full mobile:text-right">
            {t("subtitle-second")}
          </h6>
          <h6 className="text-xxl mobile:text-xl text-mainColor font-bold italic mobile:w-full mobile:text-right">
            {t("subtitle-connection")}
          </h6>
        </div>
        <div className="flex flex-col w-1/2 gap-8 mobile:w-full mobile:text-center">
          <p className="text-ms leading-loose mb-0">{t("top-text-left")}</p>
          <p className="text-ms leading-loose mt-0">{t("top-text-right")}</p>
        </div>
      </section>
      <section
        className={`flex w-full items-center justify-center gap-40 pt-40 mobile:pt-0 mobile:flex-col mobile:items-center mobile:h-fit transform transition-all duration-500 ease-in-out ${
          animateItems
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        } mobile:h-[1300px]`}
      >
        <div
          className={`relative w-96 mobile:w-full h-40 flex items-center justify-center mobile:h-64 group transition-all duration-1000 ease-in-out ${
            delayedItems[0] ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <div className="mobile:w-screen absolute w-full h-full bg-gradient-to-r from-tertiary via-tertiary to-tertiary rounded-full blur-[50px] opacity-50"></div>
          <FluidMesh />
          <span className="absolute z-10 tracking-widest text-l lg:group-hover:hidden">
            DISCOVERY
          </span>
          <p className="text-ms opacity-0 lg:group-hover:opacity-100 absolute left-0 mx-auto text-center text-white font-light p-4 rounded-lg transform translate-y-10 lg:group-hover:translate-y-0 transition-all duration-1000 ease-in-out tracking-wider">
            {t("discovery-text")}
          </p>
        </div>
        <div
          className={`relative w-96 mobile:w-full h-40 flex items-center justify-center mobile:h-64 group transition-all duration-1000 ease-in-out ${
            delayedItems[1] ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="absolute w-full h-full bg-gradient-to-r from-mainColor via-mainColor to-mainColor rounded-full blur-[50px] opacity-50 animate-smoke"></div>
          <div className="lg:group-hover:hidden w-full h-full flex justify-center items-center">
            <SpiralAnimation />
          </div>
          <span className="absolute z-10 tracking-widest text-l lg:group-hover:hidden">
            CREATION
          </span>
          <p className="w-full h-full text-ms opacity-0 lg:group-hover:opacity-100 absolute left-0 mx-auto text-center text-white font-light p-4 rounded-lg transform translate-y-10 lg:group-hover:translate-y-0 transition-all duration-1000 ease-in-out tracking-wider">
            {t("creation-text")}
          </p>
        </div>
        <div
          className={`relative w-96 h-40  mobile:w-full flex flex-col gap-10 items-center justify-center mobile:pt-10 group transition-all duration-1000 ease-in-out ${
            delayedItems[2] ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute w-full h-full bg-gradient-to-r from-primary via-primary to-primary rounded-full blur-[50px] opacity-50 "></div>
          <div className="lg:group-hover:hidden w-96">
            <LinesAnimation />
          </div>
          <span className="absolute z-10 tracking-widest text-l lg:group-hover:hidden">
            DEVELOPMENT
          </span>
          <div className="lg:group-hover:hidden w-96">
            <LinesAnimation />
          </div>
          <p className="text-ms opacity-0 lg:group-hover:opacity-100 absolute left-0  text-center text-white font-light p-4 rounded-lg transform translate-y-10 lg:group-hover:translate-y-0 transition-all duration-1000 ease-in-out tracking-wider">
            {t("development-text")}
          </p>
        </div>
      </section>
    </section>
  );
};

export default MethodologySection;
