import Link from "next/link";
import config from "@/config.yaml";

export default function PartialFaq() {

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
                <h3 className="text-xl font-cabinet-grotesk font-bold">
                  {config.faqs[0].question}
                </h3>
                <p 
                  className="text-gray-800" 
                  dangerouslySetInnerHTML={{ __html: config.faqs[0].answer }}>
                </p>
              </div>
              {/* Item */}
              {/* Item */}
              <div className="space-y-2">
                <h3 className="text-xl font-cabinet-grotesk font-bold">
                {config.faqs[2].question}
                </h3>
                <p className="text-gray-800">
                {config.faqs[2].answer}
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8 self-center">
              {/* Item */}
              <div className="space-y-2">
                <h3 className="text-xl font-cabinet-grotesk font-bold">
                  {config.faqs[1].question}
                </h3>
                <p className="text-gray-800">
                  {config.faqs[1].answer}
                </p>
              </div>
            </div>
          </div>
          {/*Button added to /faqs page*/}
          <div className="pt-8 md:pt-12 text-center">
            <Link
              href="/faq"
              className="py-2 px-10 mx-4 text-white bg-black hover:bg-gray-900 rounded-3xl shadow-md hover:shadow-xl font-bold"
            >
              Read our extensive FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
