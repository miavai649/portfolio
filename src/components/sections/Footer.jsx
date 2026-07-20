import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { footerContent } from '../../data/footer';
import Logo from '../layout/Logo';
import Container from '../ui/Container';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Back to top visibility logic
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='relative pt-24 pb-12 bg-white dark:bg-dark-bg border-t border-black/[0.03] dark:border-white/[0.05] transition-colors duration-500 overflow-hidden'>
      <Container>
        {/* --- TOP SECTION: BRAND & NAVIGATION --- */}
        <div className='grid lg:grid-cols-12 gap-16 mb-24'>
          {/* Brand Column */}
          <div className='lg:col-span-5'>
            <Logo className={'text-3xl'} />
            <p className='text-lg text-gray-500 dark:text-zinc-500 max-w-sm leading-relaxed italic mt-4'>{footerContent.tagline}</p>
          </div>

          {/* Navigation Column */}
          <div className='lg:col-span-4 flex flex-col gap-4'>
            <h4 className='text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2'>Navigation</h4>
            <div className='grid grid-cols-2 gap-y-3 gap-x-8'>
              {footerContent.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-sm font-semibold text-gray-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors w-fit'>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials Column */}
          <div className='lg:col-span-3 flex flex-col items-start lg:items-end gap-6'>
            <h4 className='text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2'>Social Ecosystem</h4>
            <div className='flex gap-3'>
              {footerContent.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target='_blank'
                  rel='noreferrer'
                  className='w-12 h-12 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-black/[0.03] dark:border-white/[0.05] flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/30 transition-all duration-300'
                  aria-label={social.label}>
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: LEGAL --- */}
        <div className='pt-10 border-t border-black/[0.03] dark:border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left'>
          <p className='text-[10px] font-black uppercase tracking-[0.3em] text-gray-400'>{footerContent.copyright}</p>

          <div className='flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400'>
            Crafted with <Heart size={12} className='text-red-500 animate-pulse' /> for the modern web
          </div>
        </div>
      </Container>

      {/* --- BACK TO TOP BUTTON (REFINED) --- */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className='fixed bottom-8 right-8 z-[60] w-14 h-14 rounded-2xl bg-primary text-white shadow-[0_20px_40px_-10px_rgba(139,92,246,0.5)] flex flex-col items-center justify-center group overflow-hidden cursor-pointer'
            aria-label='Back to top'>
            {/* Background Glow Effect */}
            <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500' />

            <div className='relative z-10 flex flex-col items-center'>
              <ArrowUp size={20} strokeWidth={3} className='transition-transform group-hover:-translate-y-1' />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
