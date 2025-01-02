"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { serviceSections } from "./utils/serviceSections";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ServicesSection = (): React.ReactElement => {
  const t = useTranslations("Services");
  const containerRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [currentCard, setCurrentCard] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount =
        containerRef.current.firstElementChild?.clientWidth || 0;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const updateScrollState = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.offsetWidth < container.scrollWidth,
      );
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleCardIndex = cardRefs.current.indexOf(
              entry.target as HTMLLIElement,
            );
            setCurrentCard(visibleCardIndex);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    updateScrollState();

    if (container) {
      container.addEventListener("scroll", updateScrollState);
      return () => container.removeEventListener("scroll", updateScrollState);
    }
  }, []);

  return (
    <section className="relative flex flex-col gap-20 pt-24 mobile:pt-0 mobile:px-5">
      <div className="relative pb-2 w-full">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-mainColor/70 via-mainColor/40 to-mainColor/20"></div>
        <h5 className="font-bold text-mainColor">{t("title")}</h5>
      </div>

      <div className="relative">
        <ul
          ref={containerRef}
          className="flex gap-32 overflow-x-auto scrollbar-hide "
          style={{
            scrollSnapType: "x mandatory",
            paddingBottom: "10px",
          }}
        >
          {serviceSections.map((section, index) => (
            <li
              key={section.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="w-96 flex-shrink-0 mobile:w-fit "
              style={{ scrollSnapAlign: "start" }}
            >
              <article className="flex flex-col gap-10  mobile:pb-10 w-fit">
                <span className="text-mainColor h-10">{t(section.title)}</span>
                <span className="text-mss">{t(section.description)}</span>
                <ul className="list-disc flex flex-col items-center gap-3 h-40">
                  {section.details.map((detail) => (
                    <li
                      key={detail.id}
                      className="leading-5 text-mss flex gap-4"
                    >
                      <div className="w-1 pt-2">•</div>
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
            onClick={() => handleScroll("left")}
            className="absolute top-1/2 -left-10 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md mobile:hidden"
          >
            <BsChevronLeft color={"#888aff"} size={40} />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md mobile:hidden"
          >
            <BsChevronRight color={"#888aff"} size={40} />
          </button>
        )}

        <div className="gap-2 justify-center items-center mt-4 mobile:flex hidden ">
          {serviceSections.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-2 rounded-3xl ${
                index === currentCard ? "bg-mainColor" : "bg-mainColor/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
