import Image from "next/image";
import Highlight1 from "@/public/assets/Highlight1.svg";
import Highlight2 from "@/public/assets/Highlight2.svg";
import Macbook from "@/public/assets/MacBookPro.png";
import Link from "next/link";
import config from "../config.yaml";

const isApplyOn = config.navigation.some((nav:any) => nav.link === "apply/" );

export default function Hero() {
  return (
    <section className=" pt-16 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary ">
      <div className="md:flex-1 md:mr-10 ">

        <h1 className="text-gray-700 font-poppins text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-7 mt-6">
          in
          <span className="text-black ">
            {/* className="bg-underline1 pb-2 bg-left-bottom bg-no-repeat bg-100%"> */}
            tech
          </span>
          gration
        </h1>
        <p className="font-poppins mb-7 font-bold text-2xl" >
          A tuition-free coding bootcamp ⛺︎ for refugees, migrants, people with
          physical disabilities and other vulnerable groups.
        </p>
        <div className="font-montserrat flex flex-col sm:flex-row items-center">

          { isApplyOn && (
            <Link
              href="/apply"
              className="bg-black hover:bg-gray-900 shadow-md hover:shadow-xl px-8 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2 font-bold"
            >
              {/*                     className="btn text-white bg-black hover:bg-gray-800 shadow-md hover:shadow-lg" */}
              Apply
            </Link>
          )}

          <Link
            href={config.donation_links.kofi}
            className="px-6 py-4 border-2 border-black border-solid rounded-lg font-bold shadow-md hover:shadow-xl mr-2 mb-2"
          >
            Donate
          </Link>
          <Link
            target="_blank"
            className="bg-black hover:bg-gray-900 shadow-md hover:shadow-xl px-8 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2 font-bold"
            href="https://github.com/in-tech-gration/WDX-180">
            {/* TODO: Make this freaking logo show up properly! */}
            {/* <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
            </svg> */}
            WDX-180
          </Link>


        </div>
      </div>
      <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
        <div className="relative">
          <Image
            src={Highlight1}
            alt="dots highlighting a picture of a laptop"
            className="absolute -top-16 -left-10"
          />
        </div>
        <Image src={Macbook} alt="a picture of a Macbook" />
        <div className="relative">
          <Image
            src={Highlight2}
            alt="dots highlighting the picture of a laptop"
            className="absolute -bottom-10 -right-6"
          />
        </div>
      </div>
    </section>
  );
}
