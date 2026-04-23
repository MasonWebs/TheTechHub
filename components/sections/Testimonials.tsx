import Image from 'next/image'
import { testimonials } from '@/lib/constants'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading title="What Clients Say" subtitle="Real feedback from real customers" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.15}>
              <div className="p-6 lg:p-8 bg-gradient-to-br from-bg-surface to-bg-primary border border-border rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full border border-primary"
                  />
                  <div>
                    <p className="font-bold font-display text-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-text-muted">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-text-muted italic">"{testimonial.quote}"</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
