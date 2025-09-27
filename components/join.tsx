import Link from "next/link";
import v from "@/public/images/V.for.VSCode.notitle.jpg";

// NEW COHORT => OPEN TO APPLICATIONS
function JoinOurNextCohortSection() {
  return (
    <section
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 0",
        backgroundImage: `url(${v.src})`
      }} className=" pt-16 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
      <div className="md:flex-1 mx-auto w-4/5 md:mr-10 sm:w-1/2 my-32 md:w-full md:my-0">

        <div className="font-mono text-6xl text-amber-500 font-bold">
          <Link className="hover:text-amber-400" href="/apply">&lt;join&gt;</Link>
        </div>

        <h1 className="text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-7 mt-6">
          Join our next coding cohort:<br />Oct 1st, 2025
        </h1>
        <p className="font-poppins mb-7 font-bold text-2xl text-white" >
          Become a web developer through our intensive 9-month WDX course.<br />Click on the join tags to join. ;)
        </p>

        <div className="font-mono text-6xl text-amber-500 font-bold">
          <Link className="hover:text-amber-400" href="/apply">&lt;/join&gt;</Link>
        </div>

        <div className="font-montserrat mt-12">
          <Link
            target="_blank"
            href="https://forms.gle/bCAhZw7H174gBAh2A"
            className="bg-white hover:bg-black shadow-md hover:shadow-xl px-8 py-4 rounded-lg border-2 border-solid text-black mr-2 mb-2 font-bold hover:text-white text-2xl"
          >
            Join
          </Link>
        </div>

      </div>
      <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
      </div>
    </section>
  )
}

// NO APPLICATIONS
function IntroSection() {
  return (
    <section
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 0",
        backgroundImage: `url(${v.src})`
      }} className=" pt-16 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
      <div className="md:flex-1 mx-auto w-4/5 md:mr-10 sm:w-1/2 my-24 sm:my-32 md:w-full md:my-0">

        <div className="font-mono text-6xl text-amber-500 font-bold">
          &lt;code&gt;
        </div>

        <h1 className="text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-7 mt-6 sm:leading-[6rem]">
          {/* Start your journey into programming<br/>Oct 01, 2024 */}
          We're on a journey to<br />
          teach programming<br />
          and inspire the world
        </h1>
        <p className="font-poppins mb-2 font-bold text-2xl text-white" >
          Become a web developer through our intensive 9-month WDX course.<br />
        </p>

        <div className="font-mono text-6xl text-amber-500 font-bold">
          &lt;/code&gt;
        </div>

      </div>
      <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
      </div>
    </section>
  )
}

export default function Join() {

  // We're on a journey to teach programming and inspire the world SECTION (No Applications)
  return <IntroSection />

  // JOIN OUR NEXT COHORT SECTION
  // return <JoinOurNextCohortSection />
}
