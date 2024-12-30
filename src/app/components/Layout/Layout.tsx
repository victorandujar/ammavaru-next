"use client";

import { ScrollProvider } from "@/app/contexts/ScrollContext";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <ScrollProvider>
      <div>
        <Header />
        <div className="flex justify-center pt-20 pb-10">{children}</div>
      </div>
    </ScrollProvider>
  );
}
