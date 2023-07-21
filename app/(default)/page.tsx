export const metadata = {
  title: "Home - Creative",
  description: "Page description",
};

import Hero from "@/components/hero";
import Inspiration from "@/components/inspiration";
import Carousel from "@/components/carousel";
import Creatives from "@/components/creatives";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Faqs from "@/components/faqs";
import Blog from "@/components/blog";
import Cta from "@/components/cta";
import BlogsPreview from "@/components/blogs-preview";

export default function Home() {
  return (
    <>
      <BlogsPreview />
      <Hero />
      <Inspiration />
      <Carousel />
      <Creatives />
      <Pricing />
      <Testimonials />
      <Faqs />
      <Blog />
      <Cta />
    </>
  );
}
