import { SiJsonwebtokens, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTypescript } from 'react-icons/si';

export const projectsContent = [
  {
    id: 1,
    title: 'Travex',
    category: 'Travel Blogging Platform',
    description:
      'A comprehensive publication ecosystem featuring a rich-text editor for content creation, community engagement tools, and a premium member verification system.',
    // Premium Travel-themed placeholder
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop',
    tech: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Redux', icon: SiRedux }
    ],
    github: 'https://github.com/yourusername/travex',
    live: 'https://travex-demo.com'
  },
  {
    id: 2,
    title: 'Clean Carz',
    category: 'Service Booking System',
    description:
      'An end-to-end booking engine with real-time slot management. Features specialized dashboards for admins and users, including countdown timers and booking analytics.',
    // Premium Automotive/Service-themed placeholder
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200&auto=format&fit=crop',
    tech: [
      { name: 'React.js', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'JWT', icon: SiJsonwebtokens }
    ],
    github: 'https://github.com/yourusername/clean-carz',
    live: 'https://cleancarz-demo.com'
  }
];
