import { whyChooseUs } from '@/lib/constants'
import { getLucideIcon } from '@/lib/lucide-helpers'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Why Choose Us"
            subtitle="Local expertise with enterprise-grade support"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = getLucideIcon(item.icon)
            return (
              <AnimatedSection key={item.id} delay={index * 0.15}>
                <div className="p-8 bg-gradient-to-br from-bg-primary to-bg-surface border border-border rounded-lg hover:border-primary transition-all duration-300 text-center group">
                  <div className="inline-block p-4 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    {IconComponent ? (
                      <IconComponent className="w-8 h-8 text-primary" />
                    ) : (
                      <span className="text-3xl">{item.icon}</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold font-display text-text-primary mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-muted">{item.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
