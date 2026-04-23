import { Hero } from '@/components/sections/Hero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABanner } from '@/components/sections/CTABanner'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  'Home',
  'The Tech Hub — End to End Tech Support in Rochelle, IL',
  'Local tech support for home and business. PC repair, custom builds, networking, and fiber internet services.'
)

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  )
}
