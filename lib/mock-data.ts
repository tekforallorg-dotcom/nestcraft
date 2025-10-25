export interface MockProperty {
  id: string;
  title: string;
  location: string;
  neighborhood: string;
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  sqm: number;
  image: string;
  badge?: 'new' | 'featured' | 'reduced';
  type: string;
}

export interface MockNeighborhood {
  name: string;
  description: string;
  properties: number;
  avgPrice: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export const mockProperties: MockProperty[] = [
  {
    id: '1',
    title: 'Luxury Penthouse with Pool',
    location: 'Maitama, Abuja',
    neighborhood: 'Maitama',
    price: 450000000,
    currency: 'NGN',
    bedrooms: 5,
    bathrooms: 6,
    sqm: 450,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    badge: 'featured',
    type: 'Penthouse',
  },
  {
    id: '2',
    title: 'Modern Waterfront Villa',
    location: 'Banana Island, Lagos',
    neighborhood: 'Banana Island',
    price: 850000000,
    currency: 'NGN',
    bedrooms: 6,
    bathrooms: 7,
    sqm: 650,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    badge: 'new',
    type: 'Villa',
  },
  {
    id: '3',
    title: 'Contemporary Family Home',
    location: 'Lekki Phase 1, Lagos',
    neighborhood: 'Lekki',
    price: 185000000,
    currency: 'NGN',
    bedrooms: 4,
    bathrooms: 5,
    sqm: 320,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    type: 'Detached House',
  },
  {
    id: '4',
    title: 'Elegant Townhouse',
    location: 'Ikoyi, Lagos',
    neighborhood: 'Ikoyi',
    price: 320000000,
    currency: 'NGN',
    bedrooms: 4,
    bathrooms: 4,
    sqm: 380,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    badge: 'reduced',
    type: 'Townhouse',
  },
  {
    id: '5',
    title: 'Smart Apartment with City Views',
    location: 'Victoria Island, Lagos',
    neighborhood: 'Victoria Island',
    price: 95000000,
    currency: 'NGN',
    bedrooms: 3,
    bathrooms: 3,
    sqm: 180,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    type: 'Apartment',
  },
  {
    id: '6',
    title: 'Executive Diplomatic Residence',
    location: 'Asokoro, Abuja',
    neighborhood: 'Asokoro',
    price: 520000000,
    currency: 'NGN',
    bedrooms: 6,
    bathrooms: 6,
    sqm: 550,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    badge: 'featured',
    type: 'Mansion',
  },
];

export const mockNeighborhoods: MockNeighborhood[] = [
  {
    name: 'Banana Island',
    description: 'Lagos premier luxury waterfront community',
    properties: 45,
    avgPrice: '₦650M',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
  {
    name: 'Maitama',
    description: 'Abuja\'s most prestigious diplomatic district',
    properties: 78,
    avgPrice: '₦420M',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
  },
  {
    name: 'Ikoyi',
    description: 'Elegant island neighborhood with rich heritage',
    properties: 132,
    avgPrice: '₦280M',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
  },
  {
    name: 'Lekki Phase 1',
    description: 'Modern living with excellent amenities',
    properties: 215,
    avgPrice: '₦165M',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80',
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Amina Bello',
    role: 'CEO, Tech Innovations Ltd',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    text: 'The team made our home search effortless. Their market knowledge and attention to our needs resulted in finding our dream property in Maitama within weeks.',
  },
  {
    id: '2',
    name: 'David Okonkwo',
    role: 'Investment Banker',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Professional service from start to finish. They understood our investment criteria and delivered exceptional value. Highly recommended for serious buyers.',
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    role: 'Diplomat',
    avatar: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    text: 'Relocating to Abuja was seamless thanks to their expertise. They handled everything from viewings to negotiations, making the process stress-free.',
  },
];