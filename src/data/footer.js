import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6';

export const footerContent = {
  name: 'Mahmudul Haque Noor',
  tagline: 'Engineering high-performance digital experiences through design-led development.',
  socials: [
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' }
  ],
  navLinks: [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ],
  copyright: `© ${new Date().getFullYear()} Mahmudul Haque Noor. All rights reserved.`
};
