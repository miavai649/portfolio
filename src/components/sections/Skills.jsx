import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const Skills = () => {
  return (
    <section id='skills' className='pt-32 '>
      <Container>
        <SectionTitle subtitle='Expertise' title='My Technical Matrix' icon={Zap} />

        <div className='grid lg:grid-cols-2 gap-8'>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className='p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm group hover:shadow-xl transition-all duration-500'>
              {/* Category Header */}
              <div className='flex items-start gap-5 mb-8'>
                <div className='p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500'>
                  <category.icon size={24} />
                </div>
                <div>
                  <h3 className='text-2xl font-display font-bold mb-2 italic tracking-tight'>{category.title}</h3>
                  <p className='text-sm text-gray-500 dark:text-zinc-500 max-w-xs'>{category.description}</p>
                </div>
              </div>

              {/* Core Technologies */}
              <div className='mb-8'>
                <p className='text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-5'>Core Stack</p>
                <div className='flex flex-wrap gap-6'>
                  {category.mainTech.map((tech, tIdx) => (
                    <div key={tIdx} className='group/item flex flex-col items-center gap-2'>
                      <div className='w-14 h-14 rounded-2xl bg-gray-50 dark:bg-zinc-800 flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-lg'>
                        <tech.icon
                          size={28}
                          className='text-gray-400 dark:text-zinc-600 transition-colors duration-300 group-hover/item:text-[var(--hover-color)]'
                          style={{ color: tech.color }}
                        />
                      </div>
                      <span className='text-[10px] font-bold text-gray-400 group-hover/item:text-black dark:group-hover/item:text-white transition-colors'>
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ecosystem Tags */}
              <div>
                <p className='text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4'>Ecosystem & Tools</p>
                <div className='flex flex-wrap gap-2'>
                  {category.ecosystem.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className='px-3 py-1.5 rounded-full bg-gray-50 dark:bg-zinc-800/50 border border-black/5 dark:border-white/5 text-[11px] font-medium text-gray-600 dark:text-zinc-400 hover:border-primary/30 hover:text-primary transition-all duration-300'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
