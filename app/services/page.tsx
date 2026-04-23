import { services } from '@/lib/services'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  'Services',
  'Our Tech Services',
  'Explore our full range of tech services for home and business.'
)

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-bg-primary to-bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              title="What We Do"
              subtitle="Comprehensive tech solutions for home and business"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.slug} delay={index * 0.1}>
                <ServiceCard
                  title={service.title}
                  description={service.fullDescription}
                  icon={service.icon}
                  slug={service.slug}
                  full
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
