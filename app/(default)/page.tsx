export const metadata = {
  title: 'Home - Creative',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Inspiration from '@/components/inspiration'
import Carousel from '@/components/archive/carousel'
import Curriculum from '@/components/curriculum'
import Pricing from '@/components/archive/pricing'
import Testimonials from '@/components/archive/testimonials'
import Faqs from '@/components/faqs'
import Blog from '@/components/archive/blog'
import Cta from '@/components/cta'
import How from '@/components/archive/how'

export default function Home() {
  return (
    <>
      <Hero />
      <Inspiration />
      {/* <How /> */}
      {/* <Carousel />  */}  {/* back in v2 */} 
      <Curriculum />
      {/* <Testimonials /> */}  {/* back in v2 */} 
      <Faqs />
      {/* <Blog /> */}  {/* back in v2 */} 
      <Cta /> {/* contributor call to action */} 
    </>
  )
}
