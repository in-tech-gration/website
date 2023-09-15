import Link from "next/link";

export default function Faqs() {
  // Questions formatted just like in `app/(default)/faqs/page.tsx`.
  const faqs = [
    {
      question: "How do I enrol in the WDX 180° course?",
      answer:
        "You have to apply through our <b>application form</b> and we will contact you with more details shortly after you've submitted your application.",
    },
    {
      question: "Do I need prior coding experience to qualify?",
      answer:
        "Coding knowledge is not a prerequisite. However, it is considered a big plus. If you do have some experience, it will impact your acceptance decision and will give you a head start.",
    },
    {
      question: "Will I be able to attend the course on-site?",
      answer:
        "The Core part of the program (2nd phase which happen to be the middle 3 months) will take place in-person in Kyspeli. If you are a wheel-chair user, you will be attending the course remotely as unfortunately our space isn't accessible. However, we are on the lookout for an accessible space and we'll make an announcement once we find one.",
    },
    {
      question: "Is it really free? Are there any hidden fees?",
      answer:
        "Our course is 100% free of charge and our curriculum is open source. There are no additional or hidden fees whatsoever. We're just a group of techies that wanna pay it forward😉.",
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-b border-gray-100">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk">Questions and answers</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">
                  How do I enrol in the WDX 180° course?
                </h4>
                <p className="text-gray-500">
                  You have to apply through our{" "}
                  <Link href="/apply" className="font-bold">
                    application form
                  </Link>{" "}
                  and we will contact you with more details shortly after you've
                  submitted your application.
                </p>
              </div>
              {/* Item */}
              {/* Item */}
              <div className="space-y-2">
                <h3 className="text-xl font-cabinet-grotesk font-bold">
                  Will I be able to attend the course on-site?
                </h3>
                <p className="text-gray-700">
                  The Core part of the program (2nd phase which happen to be the
                  middle 3 months) will take place in-person in Kyspeli. If you
                  are a wheel-chair user, you will be attending the course
                  remotely as unfortunately our space isn&apos;t accessible.
                  However, we are on the lookout for an accessible space and
                  we&apos;ll make an announcement once we find one.
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">
                  Do I need prior coding experience to qualify?
                </h4>
                <p className="text-gray-500">
                  Coding knowledge is not a prerequisite. However, it is
                  considered a big plus. If you do have some experience, it will
                  impact your acceptance decision and will give you a head
                  start.
                </p>
              </div>
              {/* Item */}
              {/* <div className="space-y-2">
                <h3 className="text-xl font-cabinet-grotesk font-bold">Is there a way to become an Affiliate reseller?</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
              </div> */}
              {/* Item */}
              {/* <div className="space-y-2">
                <h3 className="text-xl font-cabinet-grotesk font-bold">What forms of payment do you accept?</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
              </div> */}
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">
                  Is it really free? Are there any hidden fees?
                </h4>
                <p className="text-gray-500">
                  Our course is 100% free of charge and our curriculum is open
                  source. There are no additional or hidden fees whatsoever.
                  We're just a group of techies that wanna pay it forward😉.
                </p>
              </div>
            </div>
          </div>
          {/*Button added to /faqs page*/}
          <div className="pt-8 md:pt-12 text-center">
            <Link
              href="/faqs"
              className="py-2 px-10 mx-4 text-white bg-black hover:bg-gray-900 rounded-3xl shadow-md hover:shadow-xl font-bold"
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
