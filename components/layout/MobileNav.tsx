'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface NavLink {
  href: string
  label: string
}

interface MobileNavProps {
  navLinks: NavLink[]
  isActive: (href: string) => boolean
  onClose: () => void
}

export function MobileNav({ navLinks, isActive, onClose }: MobileNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="md:hidden bg-bg-primary border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`px-4 py-3 rounded-lg transition-colors ${
              isActive(link.href)
                ? 'bg-primary text-bg-primary font-semibold'
                : 'text-text-muted hover:text-text-primary hover:bg-bg-surface'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={onClose}
          className="px-4 py-3 bg-primary hover:bg-accent text-bg-primary font-semibold rounded-lg transition-colors text-center mt-2"
        >
          Get Support
        </Link>
      </div>
    </motion.div>
  )
}
