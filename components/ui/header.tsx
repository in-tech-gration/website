"use client";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import config from "@/config.yaml";
import styles from "../styles.module.css";
import { NavItem } from "../../types/";
import { SidebarContext } from "@/app/(default)/layout";

const isDev = process.env.NODE_ENV === "development";

export function createAddActive(pathname: string | null) {
  return function addActive(path: string) {
    let condition =
      path === "/" ? pathname === path : pathname?.includes(path);
    return condition ? styles.active : "";
  };
}

export default function Header({ nav = true }: { nav?: boolean }) {
  const [top, setTop] = useState(true);
  const addActive = createAddActive(usePathname());
  const { toggleSidebar } = useContext(SidebarContext);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="absolute w-full z-30">
      <nav
        className={`flex justify-between items-center py-6 w-full lg:px-48 md:px-12 px-4 content-center  bg-secondary z-10 fixed md:bg-opacity-98 transition duration-300 ease-in-out ${
          !top && "bg-secondary shadow-xl"
        }`}
      >
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-wide text-gray-600	">
              in<span className="text-black ">tech</span>gration
            </h1>
          </Link>
        </div>
        <button
          className="sm:hidden text-black focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* NAVIGATION: See config.yaml */}
        <div className="hidden sm:block">
          {config.navigation.map((menuItem: NavItem) => {
            if (menuItem.dev && !isDev) return;
            return (
              <Link
                key={menuItem.label}
                href={menuItem.link}
                className={`${addActive(menuItem.link)} ${styles.header_btn} ${
                  styles.light
                } ${styles.highlight}`}
              >
                {menuItem.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
