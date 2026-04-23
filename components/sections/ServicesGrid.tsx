import { services } from '@/lib/services'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="What We Do"
            subtitle="Comprehensive tech solutions for home and business"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <AnimatedSection key={service.slug} delay={index * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
