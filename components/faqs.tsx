import Link from "next/link";

export default function Faqs() {
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
                <h3 className="text-xl font-cabinet-grotesk font-bold">How do I enrol in the WDX 180° course?</h3>
                <p className="text-gray-700">You have to apply through our <Link href="/apply" className="font-bold">application form</Link> and we will get back to you with more details after you&apos;ve submitted your application.</p>
              </div>
              {/* Item */}
              {/* Item */}
              <div className="space-y-2">
                <h3 className="text-xl font-cabinet-grotesk font-bold">Will I be able to attend the course on-site?</h3>
                <p className="text-gray-700">The Core part of the program (2nd phase which happen to be the middle 3 months) will take place in-person in Kyspeli. If you are a wheel-chair user, you will be attending the course remotely as unfortunately our space isn&apos;t accessible. However, we are on the lookout for an accessible space and we&apos;ll make an announcement once we find one.</p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h3 className="text-xl font-cabinet-grotesk font-bold">Do I need prior coding experience to qualify?</h3>
                <p className="text-gray-700">Coding knowledge is not a prerequisite. However, it is considered a big plus. If you have some experience, it will certainly add more value and personal impact to the process, as you will be able to support other students with no coding background.</p>
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
                <h3 className="text-xl font-cabinet-grotesk font-bold">Is it really free? Are there any hidden fees?</h3>
                <p className="text-gray-700">Our course is 100% free of charge and our curriculum is open source. There are no additional hidden fees whatsoever. We&apos;re just a group of techies that want to support people that cannot afford a paid coding bootcamp or university.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}