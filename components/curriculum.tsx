"use client";

import Link from "next/link";
import Image from "next/image";
import Stack from "@/public/assets/stack.png";

export default function Curriculum() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk">Curriculum</h2>
          </div>
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0">
            {/* Creatives cards */}
            <div className="md:w-1/2" data-aos-id-cards>
              <h3 className="h3 font-cabinet-grotesk text-4xl mb-8">
                WDX 180°
              </h3>
              <p className="text-xl">
                WDX 180° is a 9-month intensive course designed to teach you
                software engineering and web development, all the way through, from
                the basics  of computing and the World Wide Web to mastering
                Frontend technologies such as ReactJS and NextJS. Our goal is to
                provide highly marketable and industry-relevant skills for our
                graduates and ensure rapid career entry to high demand jobs,
                such as Frontend engineers and web developers.
              </p>
            </div>
            {/* Content */}
            <div className="md:w-1/2 md:pl-10 lg:pl-20">
              <div className="text-center md:text-left">
                <Image
                  className="inline-block mb-12"
                  src={Stack}
                  width={330}
                  height={181}
                  alt="Creatives"
                />
                <h3 className="h3 font-cabinet-grotesk text-4xl mb-4">
                  Beyond the basics.
                </h3>
                <p className="text-xl mb-6">
                  in<span className="font-bold">tech</span>gration&apos;s 9-month-long program goes beyond just the introductions. We take a deep, project-based dive into every tool and the underlying CS concepts to make sure our curious students, no matter the background, truly become competent engineers.
                </p>
                <div>
                  <Link
                    target="_blank"
                    className="btn font-bold text-white bg-black hover:bg-gray-800 shadow-md hover:shadow-lg"
                    href="https://github.com/in-tech-gration/WDX-180"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>{" "}
                    WDX 180° GitHub repo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
