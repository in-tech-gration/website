"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import config from "@/config.yaml";
import styles from "../styles.module.css";
import { NavItem } from "../../types/";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const isDev = process.env.NODE_ENV === "development";

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
  const email = useRef("c3RhZmYuaW50ZWNoZ3JhdGlvbkBnbWFpbC5jb20=");

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
      <Disclosure
        as="nav"
        className={`flex flex-col sm:flex-row justify-between items-center py-6 w-full lg:px-48 md:px-12 px-4 content-center  bg-secondary z-10 fixed md:bg-opacity-98 transition duration-300 ease-in-out ${
          !top && "bg-secondary shadow-xl"
        }`}
      >
        <div className="flex w-full justify-evenly sm:w-fit sm:items-center mb-2 sm:mb-0">
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-wide text-gray-600	">
              in<span className="text-black ">tech</span>gration
            </h1>
          </Link>

          <div className="sm:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/* TODO: Figure out how each one can be properly hidden after button click */}
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </Disclosure.Button>
          </div>
        </div>

        {/* NAVIGATION: See config.yaml */}
        <div className="hidden sm:flex">
          {config.navigation.map((menuItem: NavItem) => {
            const className = menuItem.className
              ? menuItem.className
              : `${addActive(menuItem.link)} ${styles.header_btn} ${
                  styles.highlight
                }`;
            const target = menuItem.external ? { target: "_blank" } : {};

            // Do not display content that is under development:
            if (menuItem.dev && !isDev) return;

            return (
              <Link
                {...target}
                key={menuItem.label}
                href={menuItem.link}
                className={className}
              >
                {menuItem.label}
              </Link>
            );
          })}
          <Link
            onClick={(e) => {
              e.preventDefault();
              alert(`Send us an email at: ${window.atob(email.current)}`);
              location.href = "mailto:" + window.atob(email.current);
            }}
            className={`${styles.header_btn} ${styles.highlight}`}
            href={email.current}
          >
            Contact
          </Link>
        </div>
        <Disclosure.Panel className="sm:hidden">
          <div className="min-h-[calc(100vh-92px)] flex flex-col justify-evenly space-y-1 pb-3 pt-2">
            {config.navigation.map((menuItem: NavItem) => {
              const className = menuItem.className
                ? menuItem.className
                : `${addActive(menuItem.link)} ${styles.header_btn} ${
                    styles.highlight
                  }`;
              const target = menuItem.external ? { target: "_blank" } : {};

              // Do not display content that is under development:
              if (menuItem.dev && !isDev) return;

              return (
                <Disclosure.Button
                  as="a"
                  {...target}
                  key={menuItem.label}
                  href={menuItem.link}
                  className={className}
                >
                  {menuItem.label}
                </Disclosure.Button>
              );
            })}
            <Link
              onClick={(e) => {
                e.preventDefault();
                alert(`Send us an email at: ${window.atob(email.current)}`);
                location.href = "mailto:" + window.atob(email.current);
              }}
              className={`${styles.header_btn} ${styles.highlight}`}
              href={email.current}
            >
              Contact
            </Link>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </header>
  );
}
