"use client";

import { HeaderSection } from "@/app/interfaces/Header";
import { headerSections } from "./utils/headerSections";
import Image from "next/image";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useTranslations } from "next-intl";
import { useScrollContext } from "@/app/contexts/ScrollContext";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";

const Header = (): React.ReactElement => {
  const t = useTranslations("Header");
  const { scrollToSection } = useScrollContext();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsVisible(!isVisible);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background shadow-md mobile:w-full">
      <button onClick={handleLogoClick}>
        <Image src="/logo.png" height={20} alt="logo" width={20} />
      </button>
      <div className="flex gap-10 ">
        <ul className="flex gap-20 mobile:hidden">
          {headerSections.map((section: HeaderSection) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.name)}
                className="text-mss"
              >
                {t(section.name)}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <CustomSelect />
          <div className="hidden mobile:block relative">
            <BurgerMenu handleMenuOpen={handleMenuOpen} />
            {isMenuOpen && (
              <SideBar handleMenuOpen={handleMenuOpen} isVisible={isVisible} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
