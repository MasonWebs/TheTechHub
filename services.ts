export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  includes: string[];
  icon: string; // Lucide icon name
};

export const services: Service[] = [
  {
    slug: "pc-repair",
    title: "PC Repair & Diagnostics",
    shortDescription:
      "Fast, reliable diagnosis and repair for desktops and laptops of all makes and models.",
    fullDescription:
      "Whether your machine won't boot, runs slowly, or has suffered physical damage, our technicians run thorough hardware and software diagnostics to find the root cause and get you back up and running fast.",
    includes: [
      "Hardware diagnostics & component testing",
      "Screen, keyboard, and port repairs",
      "Power supply & motherboard troubleshooting",
      "OS reinstallation & driver updates",
      "Post-repair performance verification",
    ],
    icon: "Wrench",
  },
  {
    slug: "custom-builds",
    title: "Custom PC Builds",
    shortDescription:
      "Handcrafted gaming PCs, workstations, and servers built to your exact specs and budget.",
    fullDescription:
      "We design and build custom machines from the ground up — whether you need a high-performance gaming rig, a professional workstation for creative work, or a dedicated server for your business. Every build is tested and optimized before delivery.",
    includes: [
      "Gaming PC builds (entry to enthusiast level)",
      "Professional workstations (CAD, video editing, 3D)",
      "Business & home servers",
      "Component sourcing & compatibility verification",
      "Full OS setup, drivers, and software installation",
      "Cable management & thermal optimization",
    ],
    icon: "Cpu",
  },
  {
    slug: "printer-support",
    title: "Printer Support & Setup",
    shortDescription:
      "Installation, configuration, and repair for all major printer brands — wired and wireless.",
    fullDescription:
      "Printers shouldn't be a headache. We handle setup, driver installation, network configuration, and repairs for inkjet, laser, and multifunction printers in both home and office environments.",
    includes: [
      "Wired & wireless printer setup",
      "Driver installation & updates",
      "Network printer configuration",
      "Paper jam & mechanical repairs",
      "Ink system flushing & print head cleaning",
    ],
    icon: "Printer",
  },
  {
    slug: "networking",
    title: "Wireless Networking",
    shortDescription:
      "Solid, secure Wi-Fi and network infrastructure for homes and businesses of any size.",
    fullDescription:
      "From simple home Wi-Fi troubleshooting to full business network design and installation, we build reliable, secure, and scalable networks. We work with all major hardware brands and can design a solution around your space and needs.",
    includes: [
      "Wireless router setup & optimization",
      "Mesh network design & installation",
      "Business LAN/WAN infrastructure",
      "Network security & firewall configuration",
      "VPN setup & remote access",
      "Dead zone elimination & range extension",
    ],
    icon: "Wifi",
  },
  {
    slug: "service-agreements",
    title: "Service Agreements",
    shortDescription:
      "Ongoing tech support plans for businesses and households — no surprises, just peace of mind.",
    fullDescription:
      "Our residential and business service agreements give you priority access to our team, regular maintenance checkups, and discounted labor rates. Think of it as having your own IT department without the overhead.",
    includes: [
      "Priority scheduling & faster response times",
      "Quarterly system health checkups",
      "Discounted parts & labor rates",
      "Remote support included",
      "Residential & business tiers available",
    ],
    icon: "ShieldCheck",
  },
  {
    slug: "fiber-internet",
    title: "High-Speed Fiber Internet",
    shortDescription:
      "Blazing-fast fiber internet service for homes and businesses in the Rochelle, IL area.",
    fullDescription:
      "We offer high-speed fiber internet connectivity with professional installation and ongoing support. Say goodbye to slow speeds and unreliable connections — fiber delivers symmetrical upload and download speeds you can count on.",
    includes: [
      "Residential & business fiber plans",
      "Professional installation & equipment setup",
      "Symmetrical upload/download speeds",
      "Ongoing technical support",
      "Bundling options with networking services",
    ],
    icon: "Zap",
  },
  {
    slug: "virus-removal",
    title: "Virus Removal & Malware Protection",
    shortDescription:
      "Complete eradication of viruses, spyware, ransomware, and malware — plus protection to prevent re-infection.",
    fullDescription:
      "If your computer is running strangely, showing unexpected pop-ups, or you suspect a breach, we perform a deep scan and full remediation. We also set up layered security tools to keep you protected going forward.",
    includes: [
      "Full system malware & virus scan",
      "Ransomware detection & removal",
      "Spyware & adware cleanup",
      "Browser hijack remediation",
      "Antivirus software setup & configuration",
      "Security best practices consultation",
    ],
    icon: "ShieldAlert",
  },
  {
    slug: "system-cleanup",
    title: "System Cleanup & Optimization",
    shortDescription:
      "Breathe new life into a sluggish computer without the cost of a new one.",
    fullDescription:
      "Over time, systems accumulate junk files, startup bloat, fragmented storage, and outdated software that drags performance down. Our cleanup and optimization service restores speed and stability without wiping your data.",
    includes: [
      "Startup program audit & optimization",
      "Junk file & temp data removal",
      "Storage defragmentation & SSD optimization",
      "Software audit & bloatware removal",
      "OS & driver updates",
      "Performance benchmarking before & after",
    ],
    icon: "Gauge",
  },
  {
    slug: "data-backup",
    title: "Data Backup & Recovery",
    shortDescription:
      "Protect your irreplaceable files and recover data from failed or damaged drives.",
    fullDescription:
      "Data loss can happen to anyone — hard drive failure, accidental deletion, ransomware, or physical damage. We offer both proactive backup solutions and reactive data recovery services to help you get critical files back.",
    includes: [
      "Local & cloud backup solution setup",
      "Automated backup scheduling",
      "Hard drive & SSD data recovery",
      "RAID array recovery",
      "Backup health monitoring",
      "Disaster recovery planning for businesses",
    ],
    icon: "DatabaseBackup",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return services.map((s) => s.slug);
}
