import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

import { projectsContent } from '../../data/projects';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

const Projects = () => {
  return (
    <SectionWrapper id='projects'>
      <SectionTitle subtitle='Selected Work' title='Featured Projects' icon={Folder} />

      <div className='grid grid-cols-1 gap-24'>
        {projectsContent.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
};

/* --- INTERNAL SUB-COMPONENT: PROJECT CARD --- */
const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
      {/* Image Side */}
      <div className='w-full lg:w-3/5 group relative overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-zinc-900 shadow-2xl'>
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
          src={project.image}
          alt={project.title}
          className='w-full aspect-[16/10] object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700'
        />
        <div className='absolute top-6 left-6'>
          <span className='px-4 py-2 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-primary shadow-xl'>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Side */}
      <div className='w-full lg:w-2/5 flex flex-col justify-center'>
        <span className='text-primary font-black text-xs tracking-[0.3em] uppercase mb-4 block'>Project 0{index + 1}</span>
        <h3 className='text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight'>{project.title}</h3>
        <p className='text-lg text-gray-500 dark:text-zinc-400 leading-relaxed mb-8'>{project.description}</p>

        {/* Tech Stack */}
        <div className='flex flex-wrap gap-4 mb-10'>
          {project.tech.map((item, i) => (
            <div key={i} className='flex items-center gap-2 group/item'>
              <item.icon
                className='text-gray-400 dark:text-zinc-600 group-hover/item:text-primary transition-colors duration-300'
                size={20}
              />
              <span className='text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-tighter'>{item.name}</span>
            </div>
          ))}
        </div>

        {/* Action Links */}
        <div className='flex items-center gap-6'>
          <a
            href={project.live}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 font-black text-xs uppercase tracking-widest hover:text-primary transition-colors group'>
            Live Demo <ExternalLink size={16} className='transition-transform group-hover:-translate-y-1 group-hover:translate-x-1' />
          </a>
          <div className='h-4 w-px bg-gray-200 dark:bg-zinc-800' />
          <a
            href={project.github}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 font-black text-xs uppercase tracking-widest hover:text-primary transition-colors group'>
            {/* Updated to use FaGithub */}
            Source Code <FaGithub size={16} className='transition-transform group-hover:rotate-12' />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
