import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export const contactContent = {
  subtitle: 'Connect',
  title: "Let's bring your next big idea to life.",
  description:
    "I'm currently available for full-time roles or high-impact freelance projects. Drop me a line, and I'll get back to you within 24 hours.",

  details: [
    { label: 'Email', value: 'alexander.rivers@example.com', icon: 'Mail', href: 'mailto:alexander.rivers@example.com' },
    { label: 'Phone', value: '+1 (555) 123-4567', icon: 'Phone', href: 'tel:+15551234567' },
    { label: 'Location', value: 'New York, USA', icon: 'MapPin', href: null }
  ],

  socials: [
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com' },
    { name: 'Twitter', icon: FaXTwitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com' }
  ]
};
