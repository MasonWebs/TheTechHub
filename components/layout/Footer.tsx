import Link from 'next/link'
import { Zap } from 'lucide-react'
import { businessInfo } from '@/lib/constants'
import { services } from '@/lib/services'

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold font-display text-text-primary">
                The Tech Hub
              </span>
            </div>
            <p className="text-text-muted">{businessInfo.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold font-display text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-text-muted hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold font-display text-text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold font-display text-text-primary mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-text-muted">{businessInfo.address}</li>
              <li>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">
            © 2025 The Tech Hub — Rochelle, IL. All rights reserved.
          </p>
          <p className="text-text-muted text-sm mt-4 md:mt-0">
            Site by{' '}
            <a
              href="https://etm-marketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              ETM Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
