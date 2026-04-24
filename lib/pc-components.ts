export interface PCComponent {
  id: string
  name: string
  brand: string
  specs: string
  price: number
  inStock: boolean
}

export interface ComponentCategory {
  id: string
  label: string
  required: boolean
  components: PCComponent[]
}

/**
 * OWNER: Edit this file to manage your stock.
 * Set inStock: false to hide a part from customers.
 * Update prices or add new parts as needed.
 */
export const componentCategories: ComponentCategory[] = [
  {
    id: 'cpu',
    label: 'Processor (CPU)',
    required: true,
    components: [
      { id: 'cpu-1', name: 'Intel Core i5-13400F', brand: 'Intel', specs: '10-Core, 4.6GHz Boost, 65W TDP', price: 189, inStock: true },
      { id: 'cpu-2', name: 'Intel Core i7-13700K', brand: 'Intel', specs: '16-Core, 5.4GHz Boost, 125W TDP', price: 329, inStock: true },
      { id: 'cpu-3', name: 'AMD Ryzen 5 7600X', brand: 'AMD', specs: '6-Core, 5.3GHz Boost, 105W TDP', price: 199, inStock: true },
      { id: 'cpu-4', name: 'AMD Ryzen 7 7700X', brand: 'AMD', specs: '8-Core, 5.4GHz Boost, 105W TDP', price: 299, inStock: false },
    ],
  },
  {
    id: 'gpu',
    label: 'Graphics Card (GPU)',
    required: false,
    components: [
      { id: 'gpu-1', name: 'NVIDIA RTX 4060', brand: 'NVIDIA', specs: '8GB GDDR6, 1080p Gaming', price: 299, inStock: true },
      { id: 'gpu-2', name: 'NVIDIA RTX 4070', brand: 'NVIDIA', specs: '12GB GDDR6X, 1440p Gaming', price: 549, inStock: true },
      { id: 'gpu-3', name: 'AMD RX 7600', brand: 'AMD', specs: '8GB GDDR6, 1080p Gaming', price: 269, inStock: true },
      { id: 'gpu-4', name: 'AMD RX 7700 XT', brand: 'AMD', specs: '12GB GDDR6, 1440p Gaming', price: 399, inStock: false },
    ],
  },
  {
    id: 'ram',
    label: 'Memory (RAM)',
    required: true,
    components: [
      { id: 'ram-1', name: '16GB DDR4 3200MHz', brand: 'Corsair', specs: '2x8GB Dual Channel Kit', price: 49, inStock: true },
      { id: 'ram-2', name: '32GB DDR4 3200MHz', brand: 'Corsair', specs: '2x16GB Dual Channel Kit', price: 89, inStock: true },
      { id: 'ram-3', name: '16GB DDR5 5600MHz', brand: 'G.Skill', specs: '2x8GB Dual Channel Kit', price: 79, inStock: true },
      { id: 'ram-4', name: '32GB DDR5 5600MHz', brand: 'G.Skill', specs: '2x16GB Dual Channel Kit', price: 139, inStock: true },
    ],
  },
  {
    id: 'storage',
    label: 'Storage',
    required: true,
    components: [
      { id: 'storage-1', name: '500GB NVMe SSD', brand: 'Samsung', specs: 'M.2 PCIe 4.0, 6900MB/s Read', price: 59, inStock: true },
      { id: 'storage-2', name: '1TB NVMe SSD', brand: 'Samsung', specs: 'M.2 PCIe 4.0, 7000MB/s Read', price: 89, inStock: true },
      { id: 'storage-3', name: '2TB NVMe SSD', brand: 'WD Black', specs: 'M.2 PCIe 4.0, 7300MB/s Read', price: 159, inStock: true },
      { id: 'storage-4', name: '4TB HDD', brand: 'Seagate', specs: '3.5" SATA, 5400RPM, Mass Storage', price: 79, inStock: true },
    ],
  },
  {
    id: 'motherboard',
    label: 'Motherboard',
    required: true,
    components: [
      { id: 'mb-1', name: 'ASUS PRIME B660M-A', brand: 'ASUS', specs: 'Intel LGA1700, mATX, DDR4', price: 109, inStock: true },
      { id: 'mb-2', name: 'MSI MAG B760 TOMAHAWK', brand: 'MSI', specs: 'Intel LGA1700, ATX, DDR5', price: 189, inStock: true },
      { id: 'mb-3', name: 'ASUS ROG STRIX B650-A', brand: 'ASUS', specs: 'AMD AM5, ATX, DDR5', price: 229, inStock: false },
      { id: 'mb-4', name: 'Gigabyte B650M DS3H', brand: 'Gigabyte', specs: 'AMD AM5, mATX, DDR5', price: 139, inStock: true },
    ],
  },
  {
    id: 'psu',
    label: 'Power Supply (PSU)',
    required: true,
    components: [
      { id: 'psu-1', name: '550W 80+ Bronze', brand: 'EVGA', specs: 'Fully Modular, 550W', price: 69, inStock: true },
      { id: 'psu-2', name: '650W 80+ Gold', brand: 'Corsair', specs: 'Fully Modular, 650W', price: 89, inStock: true },
      { id: 'psu-3', name: '750W 80+ Gold', brand: 'Seasonic', specs: 'Fully Modular, 750W', price: 109, inStock: true },
      { id: 'psu-4', name: '850W 80+ Platinum', brand: 'be quiet!', specs: 'Fully Modular, 850W', price: 149, inStock: false },
    ],
  },
  {
    id: 'case',
    label: 'Case',
    required: true,
    components: [
      { id: 'case-1', name: 'Fractal Design Focus 2', brand: 'Fractal', specs: 'ATX Mid Tower, Tempered Glass', price: 79, inStock: true },
      { id: 'case-2', name: 'NZXT H510', brand: 'NZXT', specs: 'ATX Mid Tower, Tempered Glass', price: 89, inStock: true },
      { id: 'case-3', name: 'Lian Li LANCOOL 216', brand: 'Lian Li', specs: 'ATX Mid Tower, Mesh Front', price: 99, inStock: true },
      { id: 'case-4', name: 'Cooler Master MasterBox TD500', brand: 'Cooler Master', specs: 'ATX Mid Tower, ARGB', price: 89, inStock: false },
    ],
  },
  {
    id: 'cooling',
    label: 'CPU Cooling',
    required: true,
    components: [
      { id: 'cool-1', name: 'Stock Cooler', brand: 'Included', specs: 'Comes with CPU (if applicable)', price: 0, inStock: true },
      { id: 'cool-2', name: 'Cooler Master Hyper 212', brand: 'Cooler Master', specs: 'Air Cooler, 120mm Fan', price: 39, inStock: true },
      { id: 'cool-3', name: 'Noctua NH-D15', brand: 'Noctua', specs: 'Dual Tower Air Cooler, Premium', price: 99, inStock: true },
      { id: 'cool-4', name: 'Corsair H100i 240mm AIO', brand: 'Corsair', specs: 'Liquid Cooler, 240mm Radiator', price: 129, inStock: true },
    ],
  },
]
