import {
  Wrench,
  Cpu,
  Printer,
  Wifi,
  Shield,
  Zap,
  AlertTriangle,
  Database,
  MapPin,
  CheckCircle,
} from 'lucide-react'

export function getLucideIcon(iconName: string) {
  const iconMap: Record<string, any> = {
    Wrench,
    Cpu,
    Printer,
    Wifi,
    Shield,
    Zap,
    AlertTriangle,
    Database,
    MapPin,
    CheckCircle,
  }

  return iconMap[iconName] || null
}
