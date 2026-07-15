import { motion } from 'framer-motion';
import { aboutContent } from '../../data/about';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section id='about' className='py-24 relative overflow-hidden'>
      <Container>
        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          {/* Left: Text & Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <SectionTitle title={aboutContent.title} subtitle={aboutContent.subtitle} />
            <p className='text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8'>{aboutContent.description}</p>

            <div className='grid sm:grid-cols-2 gap-6'>
              {aboutContent.highlights.map((item, idx) => (
                <div key={idx} className='p-6 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5'>
                  <item.icon className='text-primary mb-4' size={24} />
                  <h4 className='font-bold mb-2'>{item.title}</h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='grid grid-cols-2 gap-4'>
            {aboutContent.stats.map((stat, idx) => (
              <div
                key={idx}
                className='p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm flex flex-col items-center text-center group hover:border-primary/30 transition-colors'>
                <div className='w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform'>
                  <stat.icon size={24} />
                </div>
                <p className='text-xs font-bold uppercase tracking-widest text-gray-400 mb-1'>{stat.label}</p>
                <p className='text-lg font-bold'>{stat.value}</p>
              </div>
            ))}

            {/* Callout box */}
            <div className='col-span-2 p-8 rounded-[2rem] bg-primary text-white flex flex-col justify-center'>
              <h3 className='text-2xl font-display font-bold mb-2'>Let's build something amazing together.</h3>
              <p className='text-white/80 text-sm italic'>"Driven by logic, inspired by design."</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
