import { motion } from 'framer-motion';
import { experienceContent } from '../../data/content';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const Experience = () => {
  return (
    <section id='experience' className='py-24 bg-black/[0.01] dark:bg-white/[0.01]'>
      <Container>
        <SectionTitle title='Work History' subtitle='Experience' className='text-center flex flex-col items-center' />

        <div className='max-w-4xl mx-auto relative'>
          {/* Vertical Line */}
          <div className='absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-primary/50 via-gray-200 dark:via-gray-800 to-transparent' />

          <div className='space-y-12'>
            {experienceContent.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className='absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-primary border-4 border-white dark:border-zinc-950 z-10' />

                {/* Content Card */}
                <div className='w-full md:w-1/2 pl-8 md:pl-0'>
                  <div
                    className={`p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow ${
                      idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                    }`}>
                    <span className='text-primary text-xs font-bold uppercase tracking-widest block mb-2'>{exp.duration}</span>
                    <h3 className='text-2xl font-bold mb-1'>{exp.role}</h3>
                    <p className='text-lg font-medium text-gray-500 dark:text-gray-400 mb-4'>{exp.company}</p>
                    <p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>{exp.description}</p>
                  </div>
                </div>

                {/* Spacer for desktop alignment */}
                <div className='hidden md:block w-1/2' />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
