'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { MobileNav } from './MobileNav'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/build', label: 'Build a PC' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-2 grid grid-cols-3 items-center border-b border-white/5">
          {/* Nav links - Left */}
          <motion.nav
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 text-xs font-medium tracking-widest uppercase transition-all duration-200 rounded-sm ${
                  isActive(link.href)
                    ? 'text-text-primary border-b-2 border-primary'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>

          {/* Mobile menu button - Left (mobile only) */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 hover:bg-white/5 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-text-primary" />
              )}
            </button>
          </div>

          {/* Title Logo - Center */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <Link href="/" className="group">
              <Image
                src="/Log.png"
                alt="The Tech Hub"
                width={180}
                height={72}
                className="h-14 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          </motion.div>

          {/* CTA - Right */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-end"
          >
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-1.5 text-sm font-semibold bg-primary hover:bg-primary/90 text-white rounded-md transition-all duration-200 shadow-sm hover:shadow-primary/30 hover:shadow-md"
            >
              Get Support
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileNav
          navLinks={navLinks}
          isActive={isActive}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
