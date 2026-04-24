import { BuildConfigurator } from '@/components/sections/BuildConfigurator'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build a PC | The Tech Hub',
  description: 'Configure your custom PC build and submit a request to The Tech Hub. Choose from in-stock components for gaming, workstation, or home office builds.',
}

export default function BuildPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              title="Build Your PC"
              subtitle="Select your components, submit your request, and we'll handle the rest"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-bg-surface/30 border border-border rounded-xl p-4 mb-10 flex flex-wrap gap-4 text-sm text-text-muted">
              <span>✓ All in-stock parts available immediately</span>
              <span className="hidden sm:inline text-border">|</span>
              <span>✓ Professional assembly included</span>
              <span className="hidden sm:inline text-border">|</span>
              <span>✓ Tested before delivery</span>
              <span className="hidden sm:inline text-border">|</span>
              <span>✓ No obligation — we&apos;ll confirm availability first</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <BuildConfigurator />
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
