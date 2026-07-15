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
