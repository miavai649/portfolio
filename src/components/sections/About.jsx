import { motion } from 'framer-motion';
import { Briefcase, Minus, User } from 'lucide-react'; // Added User icon
import { aboutContent } from '../../data/about';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section id='about' className='pt-32 bg-white dark:bg-dark-bg transition-colors duration-500'>
      <Container>
        {/* --- HEADER & INTRO --- */}
        <div className='max-w-4xl mb-24'>
          <SectionTitle
            subtitle='Professionalism'
            title='Design-led engineering for modern web systems.'
            icon={User} // Added relevant icon here
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-xl md:text-2xl text-gray-600 dark:text-zinc-400 leading-relaxed font-medium'>
            {aboutContent.intro}
          </motion.p>
        </div>

        {/* ... rest of the component remains exactly the same ... */}
        <div className='flex flex-col lg:flex-row gap-16 lg:gap-24'>
          {/* LEFT: PROFESSIONAL JOURNEY */}
          <div className='lg:w-[65%] order-2 lg:order-1'>
            {/* ... Journey logic ... */}
            <div className='flex items-center gap-4 mb-12'>
              <div className='p-2 rounded-lg bg-primary/10 text-primary'>
                <Briefcase size={20} />
              </div>
              <h3 className='text-sm font-black uppercase tracking-[0.3em] text-gray-400'>Experience History</h3>
            </div>

            <div className='space-y-20'>
              {aboutContent.journey.map((job, idx) => (
                <motion.div key={idx} /* ... existing props ... */ className='group relative'>
                  {/* ... existing job rendering logic ... */}
                  <span className='absolute -left-10 top-2 text-4xl font-black text-black/[0.03] dark:text-white/[0.03] hidden md:block'>
                    0{idx + 1}
                  </span>

                  <div className='flex flex-col md:flex-row md:items-baseline justify-between mb-6 border-b border-gray-100 dark:border-zinc-800 pb-4'>
                    <h4 className='text-3xl md:text-4xl font-display font-bold group-hover:text-primary transition-colors'>{job.role}</h4>
                    <span className='text-sm font-bold text-primary tracking-widest uppercase mt-2 md:mt-0'>{job.period}</span>
                  </div>

                  <div className='flex flex-col md:flex-row gap-8'>
                    <div className='md:w-1/3'>
                      <p className='text-lg font-bold text-gray-400 dark:text-zinc-600 uppercase tracking-tighter'>{job.company}</p>
                    </div>
                    <div className='md:w-2/3'>
                      <ul className='space-y-4'>
                        {job.points.map((point, pIdx) => (
                          <li key={pIdx} className='flex items-start gap-3 text-gray-600 dark:text-zinc-400 text-base leading-relaxed'>
                            <Minus size={18} className='mt-1 text-primary shrink-0' />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: SUPPORTING PILLARS */}
          <div className='lg:w-[35%] order-1 lg:order-2'>
            <div className='sticky top-32 space-y-8'>
              <div className='p-8 rounded-[2rem] bg-gray-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5'>
                <h3 className='text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-black/5 dark:border-white/5 pb-4'>
                  Professional Pillars
                </h3>
                {/* ... Pillar mapping logic ... */}
                <div className='space-y-10'>
                  {aboutContent.pillars.map((pillar, idx) => (
                    <motion.div key={idx} className='group flex gap-5'>
                      <div className='mt-1 p-2 h-fit rounded-lg bg-white dark:bg-zinc-800 border border-black/5 dark:border-white/5 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300'>
                        <pillar.icon size={18} />
                      </div>
                      <div>
                        <h4 className='text-sm font-bold mb-2 uppercase tracking-wide'>{pillar.title}</h4>
                        <p className='text-xs text-gray-500 dark:text-zinc-500 leading-relaxed'>{pillar.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
