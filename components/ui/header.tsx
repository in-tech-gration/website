"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import config from "@/config.yaml";
import styles from "../styles.module.css";
import { NavItem } from "../../types/"

const isDev = process.env.NODE_ENV === 'development'

function createAddActive(pathname: string | null) {
  return function addActive(path: string) {
    let condition =
      path === "/" ? pathname === path : pathname?.startsWith(path);
    return condition ? styles.active : "";
  };
}

export default function Header({ nav = true }: { nav?: boolean }) {
  const [top, setTop] = useState(true);
  const addActive = createAddActive(usePathname());

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
        className={`flex flex-col sm:flex-row justify-between items-center py-6 w-full lg:px-48 md:px-12 px-4 content-center  bg-secondary z-10 fixed md:bg-opacity-98 transition duration-300 ease-in-out ${
          !top && "bg-secondary shadow-xl"
        }`}
      >
        <div className="flex items-center mb-2 sm:mb-0">
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-wide text-gray-600	">
              in<span className="text-black ">tech</span>gration
            </h1>
          </Link>
        </div>

        {/* NAVIGATION: See config.yaml */}
        <div>
          {config.navigation.map((menuItem:NavItem) =>{

            const className = menuItem.className ? menuItem.className : `${addActive(menuItem.link)} ${styles.header_btn} ${styles.highlight}`;
            const target = menuItem.external ? { target : "_blank" } : {};
            
            // Do not display content that is under development:
            if ( menuItem.dev && !isDev  ) return;

            return (
              <Link
                {...target}
                key={menuItem.label}
                href={menuItem.link}
                className={className}
              >
                {menuItem.label}
              </Link>
            )
          })}
        </div>

      </nav>
    </header>
  );
}
