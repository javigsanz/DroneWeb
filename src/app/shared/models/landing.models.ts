export interface WorkItem {
  id: number;
  title: string;
  category: 'Eventos' | 'Inmobiliaria' | 'Turismo' | 'Corporativo' | 'Automocion';
  thumbnail: string;
  videoUrl: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPackage {
  id: number;
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  company: string;
  quote: string;
  photo: string;
}

export interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix: string;
}
