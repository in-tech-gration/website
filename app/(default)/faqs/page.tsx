"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question:
      "Am I eligible for the course? (What qualifies me to get accepted into the course?)",
    answer:
      "Currently, our course is offered to underserved communities and groups that struggle due to discrimination, war, harsh social and economic conditions. Such groups include: refugees, asylum seekers, migrants, people with disabilities, former inmates, and other struggling groups that reside in countries within the following timezones: GMT+2, GMT+3, GMT+4.",
  },
  {
    question: "Are all types of disabled included in this course?",
    answer:
      "At this time, the course can be attended remotely by people with mobility impairments (such as wheelchair users, people with lower limb amputations). Soon we will have access to an accessible space, so that everyone can attend the courses in person. As we are unable to provide support for other types of impairments (e.g.blind,deaf and hard of hearing), we can only guarantee that a specific group of the disabled community can have a seamless experience of the course. However, if you are a disabled person, not in the aforementioned group, do not hesitate to contact us and maybe we can find a way!",
  },
  {
    question: "How is the course structured?",
    answer:
      "The course is based on our open source Web Development X (WDX) curriculum. The course spans 9 months in total and <b>requires at least 4 to 5 hours</b> of commitment (study and practice) on a daily basis.",
  },
  {
    question: "What are the requirements for enrolling to the WDX180?",
    answer:
      "<ul><li>Good english language skills</li><li>Basic computer skills</li><li>Computer equipped with a web camera and microphone**</li><li>Stable Internet connection</li></ul>",
  },
  {
    question: "Will I be able to attend the course on-site?",
    answer:
      "If you are a wheel-chair user, you will be attending the course remotely as we are not currently providing an accessible space. We are constantly looking for organisations that will provide us with an accessible space.",
  },
  {
    question: "How much is the tuition fee?",
    answer:
      "There’s no tuition fee. Our curriculum and courses are and will always be open-source and tuition-free.",
  },
  {
    question: "After registration, what next?",
    answer:
      "We’ll get in touch with you, so we get to know each other and help you with the onboarding process",
  },
  {
    question: "What happens if I don't pass the assessment?",
    answer:
      "You can still access and follow our curriculum for free or apply for one of our upcoming courses",
  },
  {
    question: "When will the classes start?",
    answer: "Our next cohort starts October 2nd, 2023",
  },
  {
    question: "What is the duration of the course?",
    answer:
      "The course lasts for 9-months and specifically requires attendance for 180 days.",
  },
  {
    question: "Will I get a Diploma or Certificate at the end of the training?",
    answer:
      "We are going to provide you with a digital certificate of attendance so you share it on your professional profiles such as LinkedIn, etc.",
  },
  {
    question:
      "Do I need to have studied or have a background in tech to apply?",
    answer:
      "You should have basic computer skills and be fluent with the operating system (managing files and folder, configuring system settings, operating a browser, etc.)",
  },
  {
    question: "Where will the classes take place?",
    answer:
      "If you are attending in person, you will be joining the 2nd trimester with us at the EchoHub Athens.",
  },
  {
    question: "What will I learn in class for 9 months?",
    answer:
      "<span>You will learn:</span><ul><li>How the Internet and the World Wide Web works </li><li>How to program in the languages of the Web (HTML, CSS, JavaScript) </li><li>CSS and JavaScript libraries and frameworks, such as Tailwind and React.js </li><li>Backend technologies (Node.js, Express, Databases, etc.)</li></ul>",
  },
];

export default function Faqs() {
  return (
    <div className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="h2 font-cabinet-grotesk">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
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
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
