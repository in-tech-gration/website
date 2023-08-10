"use client";

import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Inspiration() {

  const [write, setWrite] = useState(true); // for typewriter-effect

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 20 ? setWrite(true) : setWrite(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [write]);

  return (
    <section className="bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="pb-12 md:pb-14">
            <div className="relative text-center md:text-left">
              <svg
                className="fill-gray-400  hidden md:block absolute -ml-7 -mt-8"
                width="22"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.07 1.468c-.288-.134-.161-.496.199-1.005.115-.16.583-.483.693-.462.218.039.433.08.612.152.113.04 1.233 1.173 1.62 1.564.385.368.678.795.958 1.234l.841 1.337c.279.446.553.895.814 1.35.089.152.161.312.217.48l.051.17c.177.68.48 1.289.809 1.885l.242.439a.4.4 0 0 0 .179.173c.246.114 1.162 2.064 1.203 2.35.139.698.161 1.445.28 2.146l.028.118a.256.256 0 0 1-.017.196c-.148.296-.038.478.016.685.078.288.145.58.181.883.019.152-.036.331-.064.5-.028.156-.318.209-.367.18-.139-.081-.222.072-.327.133l-.08.043a.206.206 0 0 1-.037.013c-.045.004-1.215-1.096-1.449-1.349l-.032-.037-.77-1.069c-.43-.514-.737-1.116-.83-1.223-.088-.12-.091-.277-.116-.424-.01-.075-1.069-1.706-1.103-1.772-.151-.371-.426-.678-.377-1.151.01-.092-.039-.159-.078-.228-.34-.595-.563-1.25-.826-1.887-.134-.325-.333-.613-.494-.923-.03-.056-.028-.129-.044-.193l-.04-.159a.39.39 0 0 0-.032-.074c-.426-.706-.726-1.492-1.247-2.138-.112-.153-.366-1.07-.52-1.233-.079-.093.024-.652-.093-.704ZM.414 27.098c-.28.091-.397-.262-.414-.873-.006-.196.156-.74.244-.802.172-.117.342-.228.5-.3.098-.038 1.44.005 1.902-.03.446-.021.872.039 1.293.12.859.154 1.728.267 2.596.387.193.027.379.085.562.168.55.26 1.13.358 1.714.417l.386.037a.315.315 0 0 0 .21-.055c.199-.133 2.005.124 2.23.231.561.244 1.11.605 1.677.856.08.04.172.028.236.148.147.276.331.271.509.328.248.077.494.165.737.28.12.059.228.198.341.307.1.1.006.379-.037.407-.124.08-.048.23-.052.353a.583.583 0 0 1-.012.127c-.015.043-1.373.511-1.681.59l-.047.01-1.166.121c-.596.104-1.197.054-1.324.074-.13.013-.25-.07-.374-.124l-1.882-.043c-.352-.077-.728-.03-1.042-.341-.062-.06-.137-.061-.207-.069-.62-.073-1.214-.283-1.813-.465-.305-.092-.623-.129-.934-.196-.056-.012-.104-.059-.158-.086l-.132-.073a.27.27 0 0 0-.07-.023c-.74-.137-1.447-.433-2.202-.517-.175-.017-.911-.496-1.112-.512-.114-.008-.366-.487-.478-.451Z"
                  fillRule="evenodd"
                />
              </svg>
              <h2 className="h2 font-cabinet-grotesk">
              🤔 What is intechgration?
              </h2>
              <section className="mt-6 ml-4">
               
                  <code className="text-2xl font-semibold text-left"> 
                  {write ? (
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Hello World!")
                          .pauseFor(2500)
                          .start();
                          // .deleteAll()
                          // .callFunction(() => {
                          //   console.log("All strings were deleted");
                          // })
                          // 
                      }}
                    />
                  ) : "" }
                  </code>
                  <div className="text-2xl text-left mt-4">
                    <p className="mb-5">
                    We&apos;re on a journey 🚀 to share our knowledge and passion for
                    Computing, Software Engineering and Web Development with the
                    world.</p>
                    <p className="mb-5">More specifically, we are committed to providing free
                    and open source education to underprivileged individuals and
                    marginalized groups, to people who lack access to essential
                    resources and opportunities, to people that are faced with
                    social and economical disadvantages. We want to provide hope
                    and essential skills to refugees, migrants, people with
                    disabilities, people that have completed drug rehabilitation
                    programs, former inmates, single parents and everyone who&apos;s
                    facing the extreme hardships of life and looking for a change
                    in their career.</p>
                    <p className="mb-5">If that sounds moving to you, there
                    are plenty of ways you can support. You can start by filling out <Link className="underline text-blue-800 font-bold" href="https://tally.so/r/nP1zWd">this form</Link>.</p>
                  </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
