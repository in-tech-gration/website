"use client";

import { SidebarContext } from "@/app/(default)/layout";
import { useContext } from "react";
import Link from "next/link";
import config from "@/config.yaml";
import styles from "../styles.module.css";
import { NavItem } from "../../types/";
import { createAddActive } from "./header";
import { usePathname } from "next/navigation";

const isDev = process.env.NODE_ENV === "development";

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const addActive = createAddActive(usePathname());

  return (
    <div
      className={`flex flex-col items-center justify-center w-full fixed left-0 top-0 bottom-0 bg-secondary transition-all duration-300 z-10 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {config.navigation.map((menuItem: NavItem) => {
        if (menuItem.dev && !isDev) return;
        return (
          <Link
            key={menuItem.label}
            href={"/" + menuItem.link}
            onClick={toggleSidebar}
            className={`my-2 ${addActive(menuItem.link)} ${styles.header_btn} ${
              styles.light
            } ${styles.highlight}`}
          >
            {menuItem.label}
          </Link>
        );
      })}
    </div>
  );
}
