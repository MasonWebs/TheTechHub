import Image from 'next/image'
import { whyChooseUs, team } from '@/lib/constants'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { getLucideIcon } from '@/lib/lucide-helpers'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  'About Us',
  'About The Tech Hub',
  'Learn about The Tech Hub, your trusted local tech partner in Rochelle, IL.'
)

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-bg-primary to-bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              title="About The Tech Hub"
              subtitle="Your trusted local tech partner"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold font-display text-text-primary mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-text-muted mb-4">
                  Founded with a simple mission: to provide expert, reliable tech support to the
                  Rochelle community. We believe in treating every customer like they're part of our
                  family.
                </p>
                <p className="text-lg text-text-muted mb-4">
                  Whether you're a homeowner dealing with a computer problem or a business owner
                  looking to upgrade your IT infrastructure, we're here to help. Our team of
                  experienced technicians has years of expertise in everything from PC repair to
                  networking solutions.
                </p>
                <p className="text-lg text-text-muted">
                  We're committed to delivering <span className="text-primary font-semibold">end to end support</span> —
                  from the moment you reach out to us, through implementation, and beyond.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 bg-gradient-to-br from-bg-surface to-bg-primary border border-border rounded-lg">
                <Image
                  src="https://placehold.co/500x400?text=Our+Team"
                  alt="The Tech Hub Team"
                  width={500}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              title="Our Mission & Values"
              subtitle="What drives us every day"
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

      {/* Team */}
      <section className="py-16 lg:py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              title="Meet Our Team"
              subtitle="Experienced professionals dedicated to your tech needs"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.15}>
                <div className="group">
                  <div className="mb-4 overflow-hidden rounded-lg border border-border">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-display text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-text-muted">{member.title}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
