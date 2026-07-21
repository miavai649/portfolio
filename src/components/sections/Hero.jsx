import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react'; // UI Icons
import MiavaiImage from '../../assets/images/miavai.jpg';
import { heroContent } from '../../data/hero';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center pt-32 lg:pt-20 overflow-hidden  bg-white dark:bg-dark-bg transition-colors duration-500'>
      {/* Premium Background Decoration */}
      <div className='absolute top-0 left-0 w-full h-full -z-10'>
        <div className='absolute top-[10%] left-[5%] w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[120px] animate-pulse' />
        <div className='absolute bottom-[10%] right-[5%] w-[25rem] h-[25rem] bg-amber-500/8 rounded-full blur-[100px]' />
      </div>

      <div className='max-w-7xl mx-auto px-4 min-[375px]:px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center'>
        {/* Left Side: Content */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6'>
            <Sparkles size={14} />
            Available for work
          </div>

          <h1 className='text-4xl min-[375px]:text-5xl md:text-7xl font-display font-extrabold leading-[1.05] mb-6'>
            {heroContent.greeting} <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600'>{heroContent.name}</span>
          </h1>

          <h2 className='text-xl min-[375px]:text-2xl md:text-3xl font-medium text-gray-500 dark:text-gray-400 mb-6'>{heroContent.role}</h2>

          <p className='text-base min-[375px]:text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-10 leading-relaxed'>{heroContent.description}</p>

          <div className='flex flex-wrap gap-4 min-[375px]:gap-5 mb-12'>
            <Button variant='primary' className='px-6 py-3 min-[375px]:px-8 min-[375px]:py-4 text-sm min-[375px]:text-base'>
              {heroContent.ctaPrimary} <ArrowRight size={20} />
            </Button>
            <Button variant='outline' className='px-6 py-3 min-[375px]:px-8 min-[375px]:py-4 text-sm min-[375px]:text-base'>
              {heroContent.ctaSecondary}
            </Button>
          </div>

          {/* Social Links using React Icons for Brands */}
          <div className='flex items-center gap-6'>
            {heroContent.socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className='text-gray-400 hover:text-primary transition-colors hover:scale-110'>
                <social.icon size={26} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Image with Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative flex justify-center'>
          <div className='relative group'>
            {/* Image Border/Frame */}
            <div className='absolute -inset-3 min-[375px]:-inset-4 border border-black/5 dark:border-white/5 rounded-[2.2rem] min-[375px]:rounded-[3rem] -z-10 group-hover:scale-105 transition-transform duration-700' />

            {/* Profile Image */}
            <div className='w-[270px] h-[380px] min-[375px]:w-[320px] min-[375px]:h-[450px] md:w-[420px] md:h-[550px] rounded-[2rem] min-[375px]:rounded-[2.5rem] overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:rotate-1'>
              <img
                src={MiavaiImage}
                alt='Profile'
                className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700'
              />
            </div>

            {/* Floating UI Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute -top-6 -right-6 bg-white dark:bg-dark-card p-4 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 hidden md:block'>
              <p className='text-xs font-bold text-primary uppercase mb-1'>Experience</p>
              <p className='text-xl font-display font-black'>1+ Years</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className='absolute -bottom-6 -left-6 bg-white dark:bg-dark-card p-4 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 hidden md:block'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center'>
                  <Sparkles className='text-primary' size={20} />
                </div>
                <div>
                  <p className='text-[10px] uppercase font-bold text-gray-500'>Based in</p>
                  <p className='text-sm font-bold'>Dhaka, Bangladesh</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
