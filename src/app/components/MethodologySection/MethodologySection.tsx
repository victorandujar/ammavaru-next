"use client";

import { useTranslations } from "next-intl";

const MethodologySection = (): React.ReactElement => {
  const t = useTranslations("Methodology");
  return (
    <section className="flex flex-col gap-24">
      <h5 className="font-bold text-mainColor">{t("title")}</h5>
      <section className="flex w-full justify-between">
        <div className="w-80 h-40 border-t-2 border-x-2 border-mainColor rounded-t-full flex items-end justify-center">
          <span>Discovery</span>
        </div>
        <div
          className="relative w-64 h-64 bg-black rounded-full overflow-hidden group perspective-1000"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            e.currentTarget.style.setProperty("--rotateX", `${y / 20}deg`);
            e.currentTarget.style.setProperty("--rotateY", `${x / 20}deg`);
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.setProperty("--rotateX", `0deg`);
            e.currentTarget.style.setProperty("--rotateY", `0deg`);
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(var(--rotateX)) rotateY(var(--rotateY))",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-mainColor via-primary to-secondary blur-[150px] opacity-50 transition-transform duration-500 group-hover:scale-125"></div>

          <div className="absolute top-12 left-14 w-36 h-36 bg-mainColor rounded-full blur-[100px] opacity-30 animate-smoke transition-transform duration-500 group-hover:scale-110"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-tertiary rounded-full blur-[120px] opacity-25 animate-smokeReverse transition-transform duration-500 group-hover:scale-120"></div>
          <div className="absolute top-8 right-8 w-28 h-28 bg-secondary rounded-full blur-[100px] opacity-35 animate-smoke transition-transform duration-500 group-hover:scale-125"></div>
          <div className="absolute bottom-16 left-12 w-32 h-32 bg-tertiary rounded-full blur-[110px] opacity-20 animate-smokeReverse transition-transform duration-500 group-hover:scale-110"></div>
        </div>
        <div className="w-80 h-40 border-b-2 border-x-2 border-mainColor rounded-b-full flex items-start justify-center">
          <span>Application / Development</span>
        </div>
      </section>
    </section>
  );
};

export default MethodologySection;
