import { Briefcase, Heart, Languages, Layers, MapPin, Zap } from 'lucide-react';

import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export const heroContent = {
  greeting: 'Hello, I am',
  name: 'Mahmudul Haque Noor',
  role: 'MERN Stack Developer',
  description:
    'Specializing in building exceptional digital experiences that merge high-end design with performant code. Dedicated to minimalist aesthetics and user-centric architecture.',
  ctaPrimary: 'View Projects',
  ctaSecondary: 'Download CV',
  socials: [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://twitter.com', label: 'Twitter' }
  ]
};

export const aboutContent = {
  title: 'About Me',
  subtitle: 'My Story',
  description:
    'I am a passionate Frontend Engineer with a focus on creating high-end, interactive web applications. My journey started with a curiosity for how design and code intersect, leading me to specialize in React and modern CSS architectures.',
  stats: [
    {
      label: 'Years Experience',
      value: '5+ Years',
      icon: Briefcase
    },
    {
      label: 'Location',
      value: 'New York, USA',
      icon: MapPin
    },
    {
      label: 'Design Engineering', // REPLACED Education
      value: 'Pixel Perfection',
      icon: Layers
    },
    {
      label: 'Languages',
      value: 'English, Spanish',
      icon: Languages
    }
  ],
  highlights: [
    {
      title: 'Performance First',
      description: 'Optimizing for speed and efficiency in every line of code.',
      icon: Zap
    },
    {
      title: 'User Centric',
      description: 'Designing experiences that feel natural and intuitive.',
      icon: Heart
    }
  ]
};

export const experienceContent = [
  {
    company: 'Octidev',
    role: 'Software Engineer',
    duration: 'Dec 2024 – Oct 2025',
    description:
      'Engineered a comprehensive admin dashboard featuring role-based access control (ACL) to manage complex application data and large-scale user metrics. Contributed to the development and stability of a Shopify Cart application and built a modern, high-conversion marketing platform for product showcasing.'
  },
  {
    company: 'DevsNest LLC',
    role: 'JavaScript Developer',
    duration: 'Apr 2023 – Nov 2023',
    description:
      'Architected a robust web scraping engine using Puppeteer to automate promotional data collection. Developed a customizable Shopify Review App, enabling merchants to manage customer feedback through bespoke widgets, and streamlined management workflows across multiple Shopify extension dashboards.'
  }
];
