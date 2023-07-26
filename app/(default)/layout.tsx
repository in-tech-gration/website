"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import SideNavigation from "@/components/ui/side-navigation";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-screen flex">
        <SideNavigation />
        <main className="grow overflow-hidden px-6">
          <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
