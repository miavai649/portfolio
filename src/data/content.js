import { Briefcase, GraduationCap, Heart, Languages, MapPin, Zap } from 'lucide-react';
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
    { label: 'Years Experience', value: '5+', icon: Briefcase },
    { label: 'Location', value: 'New York, USA', icon: MapPin },
    { label: 'Education', value: 'B.Sc. Comp Science', icon: GraduationCap },
    { label: 'Languages', value: 'English, Spanish', icon: Languages }
  ],
  highlights: [
    { title: 'Performance First', description: 'Optimizing for speed and efficiency in every line of code.', icon: Zap },
    { title: 'User Centric', description: 'Designing experiences that feel natural and intuitive.', icon: Heart }
  ]
};

export const experienceContent = [
  {
    company: 'Creative Pulse Agency',
    role: 'Frontend Developer',
    duration: '2020 - 2022',
    description:
      'Built high-performance marketing sites and interactive dashboards for Fortune 500 clients. Focused on pixel-perfect UI implementation.',
    technologies: ['Next.js', 'JavaScript', 'Styled Components', 'Redux']
  },
  {
    company: 'StartUp Labs',
    role: 'Junior Web Developer',
    duration: '2018 - 2020',
    description: 'Maintained and scaled internal tools. Gained deep experience in component-driven development and Agile methodologies.',
    technologies: ['React', 'CSS3', 'Firebase', 'Node.js']
  }
];
