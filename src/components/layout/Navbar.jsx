import { AnimatePresence, motion } from 'framer-motion';
import { FileDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '../../data/navbar';
import Button from '../ui/Button';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for the "snappy" transition
      setIsScrolled(window.scrollY > 40);

      // Fast active section detection
      const scrollPos = window.scrollY + 120;
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none px-4'>
      <motion.nav
        // 1. We only animate Y and Opacity for that snappy "pop"
        // 2. We use 'layout' to handle the internal element positioning without a slow 'width' animation
        layout
        initial={false}
        animate={{
          y: isScrolled ? 16 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 500, // High stiffness = Faster
          damping: 40, // High damping = No bounce/flicker
          mass: 1
        }}
        className={`
          pointer-events-auto flex items-center max-md:w-full
          ${isScrolled
            ? 'w-max px-2 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-2xl shadow-black/5'
            : 'w-full max-w-7xl py-6 bg-transparent border-transparent'
          }
        `}>
        <div className={`flex items-center justify-between w-full gap-8 ${isScrolled ? 'px-4' : 'px-6 md:px-12'}`}>
          {/* Logo stays anchored */}
          <div className='flex-shrink-0'>
            <Logo className={'text-2xl'} />
          </div>

          {/* Desktop Nav: Snappy Active Pill */}
          <div className='hidden md:flex items-center gap-1'>
            <ul className='flex items-center gap-1'>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name} className='relative'>
                    <a
                      href={link.href}
                      className={`relative z-10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-200 ${isActive ? 'text-primary' : 'text-gray-500 hover:text-black dark:hover:text-white'
                        }`}>
                      {link.name}
                    </a>
                    {isActive && (
                      <motion.div
                        layoutId='activePill'
                        className='absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full -z-0'
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className='flex items-center gap-4 ml-4 pl-4 border-l border-black/5 dark:border-white/5'>
              <ThemeToggle />
              <Button
                variant='primary'
                className={`transition-all duration-200 ${isScrolled ? 'h-8 px-4 text-[10px]' : 'h-10 px-6 text-xs'}`}>
                <FileDown size={14} />
                <span className='hidden lg:block'>Resume</span>
              </Button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className='flex md:hidden items-center gap-2'>
            <ThemeToggle />
            <button onClick={() => setIsMobileMenuOpen(true)} className='p-2 text-gray-500 hover:text-primary transition-colors'>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE OVERLAY (Snappy Fade) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 h-screen w-full bg-white/98 dark:bg-zinc-950/98 backdrop-blur-2xl z-[110] flex flex-col p-8 md:hidden pointer-events-auto'>
            <div className='flex justify-between items-center'>
              <Logo className={'text-2xl'} />
              <button onClick={() => setIsMobileMenuOpen(false)} className='p-2 text-gray-500'>
                <X size={32} />
              </button>
            </div>
            <nav className='flex flex-col gap-6 mt-16'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='text-5xl font-display font-black tracking-tighter hover:text-primary transition-colors'>
                  {link.name}
                </a>
              ))}
            </nav>
            <div className='mt-auto pb-4'>
              <Button
                variant='primary'
                className='w-full text-sm py-4'>
                <FileDown size={18} />
                <span>Resume Download</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
