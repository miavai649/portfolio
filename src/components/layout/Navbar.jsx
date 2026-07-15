import { AnimatePresence, motion } from 'framer-motion';
import { FileDown, Menu, Moon, Sun, X } from 'lucide-react'; // UI Icons
import { useEffect, useState } from 'react';
import { navLinks } from '../../data/content';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-white/70 dark:bg-dark-bg/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5'
          : 'py-6 bg-transparent'
      }`}>
      <div className='max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between'>
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
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
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors'
              aria-label='Toggle Theme'>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className='flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95'>
              <FileDown size={18} />
              Resume
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className='flex md:hidden items-center gap-4'>
          <button onClick={toggleTheme} className='p-2'>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='fixed inset-0 h-screen bg-white dark:bg-dark-bg z-[60] flex flex-col p-8 md:hidden'>
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
            <div className='mt-auto pb-10'>
              <button className='w-full py-4 rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-2'>
                <FileDown size={22} /> Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
