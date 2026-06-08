import { PricingPackage, ServiceItem, StatItem, TestimonialItem, WorkItem } from '../models/landing.models';

export const HERO_VIDEO =
  'https://cdn.coverr.co/videos/coverr-aerial-view-of-snowy-mountains-8320/1080p.mp4';

export const WORK_ITEMS: WorkItem[] = [
  {
    id: 1,
    title: 'Destino en altura',
    category: 'Turismo',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=80',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-a-beautiful-beach-1566/1080p.mp4'
  },
  {
    id: 2,
    title: 'Lanzamiento de marca',
    category: 'Corporativo',
    thumbnail: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-green-landscape-from-the-sky-1579/1080p.mp4'
  },
  {
    id: 3,
    title: 'Evento premium en costa',
    category: 'Eventos',
    thumbnail: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&w=1400&q=80',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-coast-1570/1080p.mp4'
  },
  {
    id: 4,
    title: 'Residencial de lujo',
    category: 'Inmobiliaria',
    thumbnail: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-aerial-video-of-a-house-near-the-lake-7130/1080p.mp4'
  },
  {
    id: 5,
    title: 'Seguimiento de circuito',
    category: 'Automocion',
    thumbnail: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-cars-driving-on-a-road-shot-from-above-10750/1080p.mp4'
  }
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 1,
    title: 'Grabacion aerea profesional',
    description: 'Tomas cinematicas de alto impacto para narrativas visuales premium.',
    icon: 'M12 3l9 5v8l-9 5-9-5V8l9-5zm0 2.3L5 9v6l7 3.7 7-3.7V9l-7-3.7z'
  },
  {
    id: 2,
    title: 'Fotografia aerea',
    description: 'Imagen fija con composicion editorial y calidad para prensa y branding.',
    icon: 'M4 7h3l1.3-2h7.4L17 7h3v12H4V7zm8 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9z'
  },
  {
    id: 3,
    title: 'Eventos y bodas',
    description: 'Cobertura elegante de momentos clave con perspectiva espectacular.',
    icon: 'M12 21s-7-4.7-7-10a4 4 0 017-2.7A4 4 0 0119 11c0 5.3-7 10-7 10z'
  },
  {
    id: 4,
    title: 'Videos corporativos',
    description: 'Piezas audiovisuales para elevar posicionamiento y percepcion de marca.',
    icon: 'M4 5h16v14H4V5zm6 4v6l5-3-5-3z'
  },
  {
    id: 5,
    title: 'Inspecciones tecnicas',
    description: 'Captura de precision para analisis de infraestructuras y activos.',
    icon: 'M12 2l8 4v6c0 5-3.4 9.3-8 10-4.6-.7-8-5-8-10V6l8-4zm0 4.2L7 8.6V12c0 3.7 2.3 7 5 7.8 2.7-.8 5-4.1 5-7.8V8.6l-5-2.4z'
  },
  {
    id: 6,
    title: 'Marketing inmobiliario',
    description: 'Recorridos aereos para propiedades de alto valor y promociones.',
    icon: 'M3 11l9-7 9 7v9h-6v-6H9v6H3v-9z'
  },
  {
    id: 7,
    title: 'Seguimiento de obra',
    description: 'Documentacion periodica del avance constructivo con trazabilidad visual.',
    icon: 'M2 18h20v2H2v-2zm2-3l6-8 4 5 3-4 5 7H4z'
  },
  {
    id: 8,
    title: 'Contenido para redes sociales',
    description: 'Clips verticales y horizontales optimizados para campanas de alto alcance.',
    icon: 'M7 4h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm5 5.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6z'
  }
];

export const FEATURED_STATS: StatItem[] = [
  { id: 1, label: 'Proyectos realizados', value: 300, suffix: '+' },
  { id: 2, label: 'Clientes satisfechos', value: 50, suffix: '+' },
  { id: 3, label: 'Anos de experiencia', value: 5, suffix: '+' }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 1,
    name: 'Basico',
    price: 'Desde 590 EUR',
    features: ['1 hora de vuelo', 'Edicion basica', 'Entrega digital']
  },
  {
    id: 2,
    name: 'Profesional',
    price: 'Desde 1.390 EUR',
    popular: true,
    features: [
      '3 horas de vuelo',
      'Edicion avanzada',
      'Video promocional',
      'Fotografias editadas'
    ]
  },
  {
    id: 3,
    name: 'Premium',
    price: 'Desde 2.490 EUR',
    features: [
      'Jornada completa',
      'Produccion cinematografica',
      'Edicion profesional',
      'Material para redes sociales',
      'Fotografias premium'
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: 'Laura Martin',
    company: 'Vento Real Estate',
    quote:
      'Consiguieron que nuestras propiedades parecieran producciones de cine. La tasa de visitas subio de forma inmediata.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Carlos Ponce',
    company: 'Northline Events',
    quote:
      'La cobertura aerea fue impecable y muy profesional. Entregaron material listo para campana en tiempo record.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Irene Varela',
    company: 'Aurora Hotels',
    quote:
      'La narrativa visual transmite exactamente el posicionamiento premium de nuestra marca. Trabajo excelente.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  }
];
