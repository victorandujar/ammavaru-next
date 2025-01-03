"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { headerSections } from "../Header/utils/headerSections";
import { RiCloseLargeFill } from "react-icons/ri";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useScrollContext } from "@/app/contexts/ScrollContext";
import useAnimations from "@/app/hooks/useAnimations";

interface Props {
  isVisible: boolean;
  handleMenuOpen: () => void;
}

const SideBar = ({ isVisible, handleMenuOpen }: Props): React.ReactElement => {
  const t = useTranslations("Header");
  const path = usePathname();
  const { scrollToSection } = useScrollContext();
  const { showAnimateItems } = useAnimations();

  const [animateItems, setAnimateItems] = useState(false);

  const handleSectionOnClick = (id: string) => {
    handleMenuOpen();
    scrollToSection(id);
  };

  useEffect(() => {
    showAnimateItems(isVisible, setAnimateItems);
  }, [isVisible, showAnimateItems]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <nav
        className={`fixed top-0 right-0 w-80 h-full bg-background shadow-lg transform origin-top transition-transform duration-500 ease-in-out flex flex-col items-center gap-1 pb-5 ${
          animateItems
            ? "translate-x-0 opacity-100"
            : "translate-x-20 opacity-0"
        }`}
      >
        <div
          className={`transform transition-all duration-700 ease-in-out flex items-center w-full h-fit p-5 ${
            animateItems
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          } `}
        >
          <Image src={"/logo-colors.png"} alt="logo" width={30} height={30} />
          <button
            onClick={handleMenuOpen}
            className="absolute top-0 right-4 text-black pt-5"
          >
            <RiCloseLargeFill size={25} color="#888aff" />
          </button>
        </div>

        <ul className="flex flex-col gap-5 w-full mt-16 px-4">
          {headerSections.map((section, index) => (
            <li
              className={`w-full px-2 py-5 border-b border-mainColor last:border-none transform transition-all duration-500 ease-in-out ${path.includes(section.name) && "font-bold"}  ${
                animateItems
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 300}ms`,
              }}
              key={section.id}
            >
              <button
                onClick={() => handleSectionOnClick(section.name)}
                className="flex items-center justify-between w-full"
              >
                <span className="font-ppHatton text-ml">{t(section.name)}</span>
                <IoIosArrowForward />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
