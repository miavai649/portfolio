import { Cpu, Database, Layers, Layout, Terminal } from 'lucide-react';
import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';

export const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    description: 'Building responsive and modern web applications with React and Next.js.',
    mainTech: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' }
    ],
    ecosystem: ['Redux Toolkit', 'TanStack Query', 'Ant Design', 'Zod', 'React Hook Form']
  },
  {
    title: 'Backend & APIs',
    icon: Cpu,
    description: 'Developing secure REST APIs and scalable backend services.',
    mainTech: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'REST API', icon: Layers, color: '#8b5cf6' }
    ],
    ecosystem: ['JWT Auth', 'Aggregation Pipeline', 'CORS', 'Sequelize']
  },
  {
    title: 'Database',
    icon: Database,
    description: 'Managing structured and scalable application data.',
    mainTech: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' }
    ],
    ecosystem: ['Mongoose', 'Relational Mapping', 'Query Optimization']
  },
  {
    title: 'Development Tools',
    icon: Terminal,
    description: 'Using modern tools for development, deployment and collaboration.',
    mainTech: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' }
    ],
    ecosystem: ['Vercel', 'Netlify', 'Chrome DevTools', 'GitHub']
  }
];
