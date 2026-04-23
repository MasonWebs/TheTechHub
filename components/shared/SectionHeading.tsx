import { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export function SectionHeading({ title, subtitle, children }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold font-display text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
      {children}
    </div>
  )
}
