"use client";

import { HeaderSection } from "@/app/interfaces/Header";
import { headerSections } from "./utils/headerSections";
import Link from "next/link";
import Image from "next/image";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useTranslations } from "next-intl";

const Header = (): React.ReactElement => {
  const t = useTranslations("Header");
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background shadow-md">
      <Image src="/logo.png" height={20} alt="logo" width={20} />
      <div className="flex gap-10">
        <ul className="flex gap-20">
          {headerSections.map((section: HeaderSection) => (
            <li key={section.id}>
              <Link href={section.link} className="text-mss">
                {t(section.name)}
              </Link>
            </li>
          ))}
        </ul>
        <CustomSelect />
      </div>
    </header>
  );
};

export default Header;
