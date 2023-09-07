
import Hero from "@/components/hero";
import Inspiration from "@/components/inspiration";
import Curriculum from "@/components/curriculum";
import Faqs from "@/components/faqs";
import Cta from "@/components/cta";




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
      <Hero />
      <Inspiration />
      <Curriculum />
      <Faqs />
      <Cta /> {/* contributor call to action */}
    </>
  );
}
