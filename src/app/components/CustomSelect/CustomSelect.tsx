"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function CustomSelect() {
  const [selected, setSelected] = useState("EN");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "en", label: "EN" },
    { value: "es", label: "ES" },
  ];

  const params = useParams();
  const router = useRouter();
  const path = usePathname();

  const changePathLanguage = (path: string, targetLocale: string): string => {
    if (path.startsWith("/es")) {
      return path.replace("/es", `/${targetLocale}`);
    }
    if (path.startsWith("/en")) {
      return path.replace("/en", `/${targetLocale}`);
    }
    return `/${targetLocale}${path}`;
  };

  const handleLanguageChange = (locale: string) => {
    const newPath = changePathLanguage(path!, locale);
    setSelected(locale.toUpperCase());
    router.replace(newPath);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelected(
      params?.locale ? (params.locale as string).toUpperCase() : "EN",
    );
  }, [params.locale]);

  return (
    <div className="relative border-b border-white-500">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-background border-b border-red-500 p-1 text-s"
      >
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        {selected}
      </button>
      {isOpen && (
        <ul className="absolute bg-background text-s mt-2 shadow-md">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleLanguageChange(option.value)}
              className="p-2 hover:bg-gray-700 hover:text-white cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
