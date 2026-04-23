import Link from 'next/link'
import { getLucideIcon } from '@/lib/lucide-helpers'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  slug: string
  full?: boolean
}

export function ServiceCard({ title, description, icon, slug, full = false }: ServiceCardProps) {
  const IconComponent = getLucideIcon(icon)

  const baseClasses =
    'group relative h-full flex flex-col p-6 lg:p-8 bg-gradient-to-br from-bg-surface to-bg-primary border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20'

  const content = (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          {IconComponent ? (
            <IconComponent className="w-6 h-6 text-primary" />
          ) : (
            <span className="text-2xl">{icon}</span>
          )}
        </div>
      </div>
      <h3 className="text-xl lg:text-2xl font-bold font-display text-text-primary mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-text-muted mb-4">{description}</p>
      <div className="mt-auto inline-flex items-center gap-2 text-primary group-hover:text-accent transition-colors font-semibold">
        Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </>
  )

  if (full) {
    return (
      <article className={`${baseClasses} cursor-pointer`}>
        <Link href={`/services/${slug}`} className="block">{content}</Link>
      </article>
    )
  }

  return (
    <Link href={`/services/${slug}`}>
      <article className={`${baseClasses} cursor-pointer`}>{content}</article>
    </Link>
  )
}
