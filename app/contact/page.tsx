import { businessInfo } from '@/lib/constants'
import { ContactForm } from '@/components/shared/ContactForm'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { createMetadata } from '@/lib/metadata'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata = createMetadata(
  'Contact Us',
  'Get in Touch',
  'Contact The Tech Hub today for all your tech support needs.'
)

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-bg-primary to-bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              title="Get in Touch"
              subtitle="We're here to help. Reach out anytime."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="p-8 lg:p-12 bg-gradient-to-br from-bg-surface to-bg-primary border border-border rounded-lg">
                  <h2 className="text-3xl font-bold font-display text-text-primary mb-8">
                    Send us a message
                  </h2>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Address */}
                <AnimatedSection delay={0.1}>
                  <div className="p-6 bg-gradient-to-br from-bg-surface to-bg-primary border border-border rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold font-display text-text-primary mb-2">Address</h3>
                        <p className="text-text-muted text-sm">{businessInfo.address}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Phone */}
                <AnimatedSection delay={0.2}>
                  <div className="p-6 bg-gradient-to-br from-bg-surface to-bg-primary border border-border rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold font-display text-text-primary mb-2">Phone</h3>
                        <a
                          href={`tel:${businessInfo.phone}`}
                          className="text-accent hover:text-accent/80 transition-colors"
                        >
                          {businessInfo.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Email */}
                <AnimatedSection delay={0.3}>
                  <div className="p-6 bg-gradient-to-br from-bg-surface to-bg-primary border border-border rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold font-display text-text-primary mb-2">Email</h3>
                        <a
                          href={`mailto:${businessInfo.email}`}
                          className="text-accent hover:text-accent/80 transition-colors break-all"
                        >
                          {businessInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Hours */}
                <AnimatedSection delay={0.4}>
                  <div className="p-6 bg-gradient-to-br from-bg-surface to-bg-primary border border-border rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold font-display text-text-primary mb-3">Hours</h3>
                        <div className="space-y-1 text-sm text-text-muted">
                          <div className="flex justify-between">
                            <span>Mon - Fri:</span>
                            <span>{businessInfo.hours.monday}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday:</span>
                            <span>{businessInfo.hours.saturday}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span>{businessInfo.hours.sunday}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="py-16 lg:py-24 bg-bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading title="Find Us" />
          </AnimatedSection>

          <div className="bg-gradient-to-br from-bg-primary to-bg-surface border border-border rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.7631926919607!2d-88.97699!3d41.95200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88059b7c7f15f815%3A0x6c6f6e6d7f8f8f8f!2s415%20Cherry%20Ave%2C%20Rochelle%2C%20IL%2061068!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-center text-text-muted mt-6 text-sm">
            [PLACEHOLDER] Replace the iframe src above with your actual Google Maps embed code
          </p>
        </div>
      </section>
    </div>
  )
}
