"use client";
import { useEffect, useState } from "react";

import Link from "next/link";

export default function Header({ nav = true }: { nav?: boolean }) {
  const [top, setTop] = useState(true);

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
          <h1 className="text-2xl font-bold tracking-wide text-gray-600	">
            in<span className="text-black ">tech</span>gration
          </h1>
         
        </div>
        <div className="">
          {/* TODO the btn bellow will be back once we have student login and the plaform to take them to. for now the i am puttin an apply button down there temporarly*/}
          {/* <button className="py-2 px-4 text-white bg-black hover:bg-gray-900 rounded-3xl shadow-md hover:shadow-xl">
        student login
      </button> */}
          <Link
            href="/apply"
            className="py-2 px-4 mx-4 text-white bg-black hover:bg-gray-900 rounded-3xl shadow-md hover:shadow-xl font-bold"
          >
            Apply
          </Link>
          <Link  href="/#" className=" py-2 px-4 text-black bg-secondary border-2 border-black rounded-3xl shadow-md hover:shadow-xl font-bold">
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
}
