"use client";

import { useTranslations } from "next-intl";

const MethodologySection = (): React.ReactElement => {
  const t = useTranslations("Methodology");

  return (
    <section className="flex flex-col gap-24">
      <h5 className="font-bold text-mainColor">{t("title")}</h5>
      <section className="flex w-full justify-center gap-40">
        <div className="w-80 h-40 border-t-2 border-x-2 border-mainColor rounded-t-full flex items-end justify-center">
          <span>Discovery</span>
        </div>
        <div className="relative w-80 h-80 flex items-center justify-center">
          <div className="absolute w-full h-full bg-gradient-to-r from-primary via-primary via-secondary to-mainColor rounded-full blur-[50px] opacity-50 animate-smoke"></div>
          <span className="z-10 text-white tracking-widest text-l animate-smoke">
            CREATION
          </span>
        </div>
        <div className="pt-40">
          <div className="w-80 h-40 border-b-2 border-x-2 border-mainColor rounded-b-full flex items-start justify-center">
            <span>Application / Development</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MethodologySection;
