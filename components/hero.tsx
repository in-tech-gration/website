import Image from "next/image";
import Highlight1 from "@/public/assets/Highlight1.svg";
import Highlight2 from "@/public/assets/Highlight2.svg";
import Macbook from "@/public/assets/MacBookPro.png";
import Link from "next/link";

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
        <div className="font-montserrat">
          <Link
            href="/apply"
            className="bg-black hover:bg-gray-900 shadow-md hover:shadow-xl px-8 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2 font-bold"
          >
            {/*                     className="btn text-white bg-black hover:bg-gray-800 shadow-md hover:shadow-lg"
 */}
            Apply
          </Link>
          <Link
            href="#"
            className="px-6 py-4 border-2 border-black border-solid rounded-lg font-bold shadow-md hover:shadow-xl"
          >
            Donate
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
