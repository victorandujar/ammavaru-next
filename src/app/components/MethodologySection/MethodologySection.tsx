"use client";

import { useTranslations } from "next-intl";
import FluidMesh from "../FluidMesh/FluidMesh";
import LinesAnimation from "../LinesAnimation/LinesAnimation";
import SpiralAnimation from "../SpiralAnimation/SpiralAnimation";

const MethodologySection = (): React.ReactElement => {
  const t = useTranslations("Methodology");

  return (
    <section className="flex flex-col gap-24">
      <div className="relative pb-2 w-full">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-mainColor/70 via-mainColor/40 to-mainColor/20"></div>
        <h5 className="font-bold text-mainColor">{t("title")}</h5>
      </div>
      <section className="flex w-full justify-center gap-40 pt-20">
        <div className="relative w-72 h-40 flex items-center justify-center">
          <div className="absolute w-full h-full bg-gradient-to-r from-tertiary via-tertiary via-tertiary to-tertiary rounded-full blur-[50px] opacity-50"></div>
          <FluidMesh />
          <span className="absolute z-10 tracking-widest text-l ">
            DISCOVERY
          </span>
        </div>

        <div className="relative w-72 h-40 flex items-center justify-center">
          <div className="absolute w-full h-full bg-gradient-to-r from-mainColor via-mainColor via-secondary to-mainColor rounded-full blur-[50px] opacity-50 animate-smoke"></div>
          <SpiralAnimation />
          <span className="absolute z-10 tracking-widest text-l ">
            CREATION
          </span>
        </div>

        <div className="relative w-72 h-40 flex flex-col gap-10 items-center justify-center">
          <div className="absolute w-full h-full bg-gradient-to-r from-primary via-primary via-secondary to-primary rounded-full blur-[50px] opacity-50 "></div>
          <LinesAnimation />
          <span className="absolute z-10 tracking-widest text-l ">
            DEVELOPMENT
          </span>
          <LinesAnimation />
        </div>
      </section>
    </section>
  );
};

export default MethodologySection;
