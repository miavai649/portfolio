import { AnimatePresence, motion } from 'framer-motion';
import { FileDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '../../data/navbar';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5' : 'py-6'
      }`}>
      <Container className='flex items-center justify-between'>
        <Logo />

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-10'>
          <ul className='flex items-center gap-8'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className='text-sm font-medium opacity-70 hover:opacity-100 hover:text-primary transition-all'>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-4 border-l border-black/10 dark:border-white/10 pl-8'>
            <ThemeToggle />
            <Button variant='primary' className='px-5 py-2.5 text-sm'>
              <FileDown size={18} /> Resume
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className='flex md:hidden items-center gap-4'>
          <ThemeToggle />
          <button onClick={() => setIsMobileMenuOpen(true)} className='p-2'>
            <Menu size={24} />
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='fixed inset-0 h-screen bg-white dark:bg-black z-[60] flex flex-col p-8 md:hidden'>
            <div className='flex justify-end'>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={30} />
              </button>
            </div>
            <ul className='flex flex-col gap-6 mt-12'>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} className='text-4xl font-display font-bold'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button className='mt-auto w-full py-4 text-lg'>
              <FileDown size={22} /> Download Resume
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
