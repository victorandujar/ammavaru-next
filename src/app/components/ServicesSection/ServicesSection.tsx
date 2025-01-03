"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { serviceSections } from "./utils/serviceSections";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useAnimations from "@/app/hooks/useAnimations";

const ServicesSection = (): React.ReactElement => {
  const t = useTranslations("Services");
  const { screenObserverHorizontal, screenObserverVertical } = useAnimations();

  const containerRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentCard, setCurrentCard] = useState<number>(0);

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
    screenObserverHorizontal(setCurrentCard, cardRefs, containerRef);
  }, [screenObserverHorizontal]);

  useEffect(() => {
    screenObserverVertical(setIsVisible, sectionRef);
  }, [screenObserverVertical]);

  useEffect(() => {
    const container = containerRef.current;
    updateScrollState();

    if (container) {
      container.addEventListener("scroll", updateScrollState);
      return () => container.removeEventListener("scroll", updateScrollState);
    }
  }, []);

  return (
    <section
      className={`relative flex flex-col gap-20 pt-56 mobile:pt-0 mobile:px-5 transition-all duration-1000 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      ref={sectionRef}
    >
      <div className="relative pb-2 w-full">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-mainColor/50 via-mainColor/20 to-mainColor/20"></div>
        <h5 className="font-bold text-mainColor">{t("title")}</h5>
      </div>

      <div className="relative h-[770px] mobile:h-fit">
        <ul
          ref={containerRef}
          className="flex gap-32 overflow-x-auto scrollbar-hide h-full w-full pb-10"
          style={{
            scrollSnapType: "x mandatory",
          }}
        >
          {serviceSections.map((section, index) => (
            <li
              key={section.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="w-96 flex-shrink-0 mobile:w-fit group h-full relative"
              style={{ scrollSnapAlign: "start" }}
            >
              <article className="flex flex-col gap-6 mobile:pb-10 w-96 mobile:w-full p-4 rounded-lg relative group-hover:absolute top-0 left-0 group-hover:z-50 group-hover:shadow-lg group-hover:bg-mainColor">
                <div className="flex flex-col gap-0 text-mainColor group-hover:text-white">
                  <span className="font-bold">{section.subtitle} |</span>
                  <span>{t(section.title)}</span>
                </div>
                <span className="text-mss">{t(section.description)}</span>
                <ul className="list-disc flex flex-col items-start gap-3 p-2 mobile:hidden">
                  {section.details.slice(0, 4).map((detail) => (
                    <li
                      key={detail.id}
                      className="leading-5 text-mss flex gap-4"
                    >
                      <div className="w-1 pt-2">•</div>
                      <div>
                        <strong>{t(detail.highlight)}</strong> {t(detail.text)}
                      </div>
                    </li>
                  ))}
                  {section.details.length > 4 && (
                    <>
                      <li className="leading-5 text-mss flex gap-4 group-hover:hidden">
                        <div className="w-1 pt-2">•</div>
                        <div>...</div>
                      </li>
                      {section.details.slice(4).map((detail) => (
                        <li
                          key={detail.id}
                          className="leading-5 text-mss gap-4 hidden group-hover:flex"
                        >
                          <div className="w-1 pt-2">•</div>
                          <div>
                            <strong>{t(detail.highlight)}</strong>{" "}
                            {t(detail.text)}
                          </div>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
                <ul className="list-disc mobile:flex-col mobile:items-start gap-3 p-2 hidden mobile:flex">
                  {section.details.map((detail) => (
                    <li
                      key={detail.id}
                      className="leading-5 text-mss flex gap-4"
                    >
                      <div className="w-1 pt-2">•</div>
                      <div>
                        <strong>{t(detail.highlight)}</strong> {t(detail.text)}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="group-hover:flex w-full justify-end items-end hidden">
                  <button className="text-ms text-white border-solid border-1 border-white rounded-3xl px-5 py-2 hover:bg-mainColor hover:text-white hover:font-bold">
                    {t("button-text")}
                  </button>
                </div>
                <div className="gap-2 justify-center items-center mt-4 mobile:flex hidden ">
                  {serviceSections.map((_, index) => (
                    <div
                      key={index}
                      className={`w-8 h-2 rounded-3xl ${
                        index === currentCard
                          ? "bg-mainColor"
                          : "bg-mainColor/40"
                      }`}
                    />
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>

        {canScrollLeft && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute top-1/2 -left-20 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md mobile:hidden"
          >
            <BsChevronLeft color={"#888aff"} size={40} />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute top-1/2 -right-20 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md mobile:hidden"
          >
            <BsChevronRight color={"#888aff"} size={40} />
          </button>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
