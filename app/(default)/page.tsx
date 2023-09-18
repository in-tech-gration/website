
import Hero from "@/components/hero";
import Inspiration from "@/components/inspiration";
import Curriculum from "@/components/curriculum";
import PartialFaq from "@/components/partial-faq";
import Cta from "@/components/cta";
import Join from "@/components/join";



// TODO: Move this to config.yaml?
export const metadata = {
  title: "intechgration - coding bootcamp",
  description: "A tuition-free coding bootcamp ⛺︎ for refugees, migrants, people with physical disabilities and other vulnerable groups.",
  openGraph: {
    title: "intechgration - coding bootcamp",
    description: "A tuition-free coding bootcamp ⛺︎ for refugees, migrants, people with physical disabilities and other vulnerable groups.",
    type: "website",
    url: "https://intechgration.io",
    images: [
      {
        url:"https://res.cloudinary.com/cloudinaryforme/image/upload/v1694097349/intechgration/intechgration-meta-logo_jyfrfc.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "intechgration - coding bootcamp",
    description: "A tuition-free coding bootcamp ⛺︎ for refugees, migrants, people with physical disabilities and other vulnerable groups.",
      images: ["https://res.cloudinary.com/cloudinaryforme/image/upload/v1694097349/intechgration/intechgration-meta-logo_jyfrfc.png"],
  },

};


export default function Home() {
  return (
    <>
      <Join />
      <Hero />
      <Inspiration />
      <Curriculum />
      <PartialFaq />
      <Cta /> {/* contributor call to action */}
    </>
  );
}
