import { Monitor, Target, Zap } from 'lucide-react';
export const aboutContent = {
  intro:
    'I am a Frontend Engineer driven by the challenge of turning complex logic into elegant, high-performance interfaces. My focus is on building scalable architectures that provide a seamless bridge between design and technology.',

  // The Pillars: Meaningful supporting elements
  pillars: [
    {
      title: 'Work Approach',
      value: 'Goal-oriented development with a focus on clean, maintainable code structures.',
      icon: Target
    },
    {
      title: 'Current Focus',
      value: 'Advanced React patterns, Server-Side Rendering, and Web Performance.',
      icon: Monitor
    },
    {
      title: 'Performance',
      value: 'Optimizing critical rendering paths to achieve sub-second load times.',
      icon: Zap
    }
  ],

  // The Main Experience
  journey: [
    {
      company: 'Octidev',
      role: 'Software Engineer',
      period: '2024 — 2025',
      points: [
        'Architected enterprise-scale admin dashboards with granular access control systems.',
        'Engineered stable frontend solutions for the Shopify application ecosystem.'
      ]
    },
    {
      company: 'DevsNest LLC',
      role: 'JavaScript Developer',
      period: '2023',
      points: [
        'Built Puppeteer-driven scraping engines for large-scale data collection automation.',
        'Developed merchant-facing Shopify widgets centered on UI customization.'
      ]
    }
  ]
};
