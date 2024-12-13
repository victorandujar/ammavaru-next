"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { serviceSections } from "./utils/serviceSections";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

const ServicesSection = (): React.ReactElement => {
  const t = useTranslations("Services");
  const containerRef = useRef<HTMLUListElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScrollRight = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.firstElementChild?.clientWidth || 0;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScrollLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.firstElementChild?.clientWidth || 0;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const updateScrollButtons = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.offsetWidth < container.scrollWidth,
      );
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="relative flex flex-col gap-20">
      <div className="relative pb-2 w-full">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-mainColor/70 via-mainColor/40 to-mainColor/20"></div>
        <h5 className="font-bold text-mainColor">{t("title")}</h5>
      </div>

      <div className="relative">
        <ul
          ref={containerRef}
          className="flex gap-32 overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            paddingBottom: "10px",
          }}
        >
          {serviceSections.map((section) => (
            <li
              key={section.id}
              className="w-96 flex-shrink-0"
              style={{
                scrollSnapAlign: "start",
              }}
            >
              <article className="flex flex-col gap-10">
                <span className="text-mainColor h-10">{t(section.title)}</span>
                <span className="text-mss">{t(section.description)}</span>
                <ul className="list-disc flex flex-col gap-3  h-40">
                  {section.details.map((detail) => (
                    <li
                      key={detail.id}
                      className="leading-5 text-mss flex  gap-4"
                    >
                      <div className="w-1 pt-2">
                        <FaCircle size={5} />
                      </div>
                      {t(detail.name)}
                    </li>
                  ))}
                </ul>
                <div className="flex w-full justify-end items-end">
                  <button className="text-ms text-mainColor border-solid border-1 border-mainColor rounded-3xl px-5 py-2 hover:bg-mainColor hover:text-white hover:font-bold">
                    {t("button-text")}
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
        {canScrollLeft && (
          <button
            onClick={handleScrollLeft}
            className="absolute top-1/2 -left-40 transform -translate-y-1/2  text-white p-2 rounded-full shadow-md"
          >
            <BsChevronLeft color={"#888aff"} size={40} />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={handleScrollRight}
            className="absolute top-1/2 -right-40 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md"
          >
            <BsChevronRight color={"#888aff"} size={40} />
          </button>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
