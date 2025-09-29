"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import config from "@/config.yaml";

type IFAQ = {
  question: string;
  answer: string,
  answer_when_applications_are_closed?: string
};

export default function FaqClientComponent() {

  const isApplicationsOpen = config.navigation.some((item: any) => item.label === "Apply");

  return (
    <div className="bg-secondary">
      {/* This empty div has been put here to force the inclusion of dynamic tailwind classes */}
      <div className="list-disc list-inside hidden pl-8"></div>

      <div className="mx-auto mt-10 sm:mt-0 max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="h2 font-cabinet-grotesk">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {config.faqs.map((faq: IFAQ) => {

              let answer = faq.answer;
              const altAnswer = faq.answer_when_applications_are_closed;
              const hasAltAnswer = (x: any): x is "string" => typeof x === "string";

              if (!isApplicationsOpen && hasAltAnswer(altAnswer)) {
                answer = altAnswer;
              }

              return (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <div
                          className="text-base leading-7 text-gray-600"
                          dangerouslySetInnerHTML={{ __html: answer }}
                        />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );

            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
