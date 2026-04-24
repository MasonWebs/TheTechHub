'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-surface to-bg-primary">
      {/* Circuit Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237c3aed' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150" />
            <Image
              src="/Log.png"
              alt="The Tech Hub Logo"
              width={220}
              height={220}
              className="relative w-40 h-40 md:w-56 md:h-56 mx-auto drop-shadow-[0_0_24px_rgba(139,92,246,0.5)] border-4 border-black rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-text-primary mb-4 leading-tight tracking-tight">
            End to End <span className="text-primary">Support</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-3 mb-10"
        >
          <p className="text-lg md:text-xl text-text-muted max-w-xl mx-auto leading-relaxed">
            Your trusted tech partner in Rochelle, IL. From repairs to custom builds, we handle all your tech needs.
          </p>
          <div className="flex items-center gap-3 text-sm font-semibold text-accent tracking-widest uppercase">
            <span>Reliable</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>Professional</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>Local</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/services"
            className="px-8 py-3.5 bg-primary hover:bg-accent text-bg-primary font-bold rounded-lg transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-primary/40 text-base"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 border-2 border-primary/60 hover:border-primary text-text-muted hover:text-text-primary font-semibold rounded-lg transition-all duration-300 text-base"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
