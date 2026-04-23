import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services } from '@/lib/services'
import { getLucideIcon } from '@/lib/lucide-helpers'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { createMetadata } from '@/lib/metadata'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return {}
  }

  return createMetadata(service.title, service.title, service.fullDescription)
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const IconComponent = getLucideIcon(service.icon)
  const currentIndex = services.findIndex((s) => s.slug === slug)
  const previousService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-text-muted">
            <Link href="/services" className="hover:text-accent transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-text-primary font-semibold">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Service Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-bg-primary to-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-primary/20 rounded-lg">
                    {IconComponent ? (
                      <IconComponent className="w-10 h-10 text-primary" />
                    ) : (
                      <span className="text-4xl">{service.icon}</span>
                    )}
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold font-display text-text-primary mb-6">
                  {service.title}
                </h1>
                <p className="text-lg text-text-muted mb-8 max-w-2xl">{service.fullDescription}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 lg:py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div>
                  <h2 className="text-3xl font-bold font-display text-text-primary mb-8">
                    What's Included
                  </h2>
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 p-4 bg-bg-surface border border-border rounded-lg hover:border-primary transition-colors"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <span className="text-text-primary text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                <div className="sticky top-24 p-8 bg-gradient-to-br from-bg-surface to-bg-primary border border-border rounded-lg">
                  <h3 className="text-2xl font-bold font-display text-text-primary mb-4">
                    Ready to get started?
                  </h3>
                  <p className="text-text-muted mb-6">
                    Contact us today to discuss your tech needs and get a quote.
                  </p>
                  <Link
                    href={`/contact?service=${service.slug}`}
                    className="block w-full px-6 py-3 bg-primary hover:bg-accent text-bg-primary font-bold rounded-lg transition-colors text-center mb-4"
                  >
                    Get a Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 border-2 border-primary hover:border-accent text-primary hover:text-accent font-bold rounded-lg transition-colors text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousService ? (
              <AnimatedSection>
                <Link
                  href={`/services/${previousService.slug}`}
                  className="group p-6 bg-gradient-to-br from-bg-primary to-bg-surface border border-border rounded-lg hover:border-primary transition-all duration-300 flex items-center gap-4"
                >
                  <ArrowLeft className="w-6 h-6 text-text-muted group-hover:text-primary transition-colors" />
                  <div>
                    <p className="text-sm text-text-muted">Previous Service</p>
                    <p className="font-bold text-text-primary group-hover:text-accent transition-colors">
                      {previousService.title}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ) : (
              <div />
            )}

            {nextService ? (
              <AnimatedSection delay={0.1}>
                <Link
                  href={`/services/${nextService.slug}`}
                  className="group p-6 bg-gradient-to-br from-bg-primary to-bg-surface border border-border rounded-lg hover:border-primary transition-all duration-300 flex items-center justify-between gap-4 md:col-start-2"
                >
                  <div className="text-right">
                    <p className="text-sm text-text-muted">Next Service</p>
                    <p className="font-bold text-text-primary group-hover:text-accent transition-colors">
                      {nextService.title}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-text-muted group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
              </AnimatedSection>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  )
}
