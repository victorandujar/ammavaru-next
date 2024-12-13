"use client";

import { useTranslations } from "next-intl";

const ProjectsSection = (): React.ReactElement => {
  const t = useTranslations("Projects");

  return (
    <section>
      <div className="relative pb-2 w-full">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-mainColor/70 via-mainColor/40 to-mainColor/20"></div>
        <h5 className="font-bold text-mainColor">{t("title")}</h5>
      </div>
    </section>
  );
};

export default ProjectsSection;
