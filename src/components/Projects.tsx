import { Folder } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const projects = [
    {
      title: 'FlowPlan.',
      subtitle: '',
      technologies: ['NEXTJS', 'TS', 'JS', 'MONGODB','WEBSOCKETS'],
      color: 'bg-gradient-to-br from-[#ffddc9] to-[#ffe8dc]',
      githubLink: 'https://github.com/rpraneeth5225/Weather-App',
      liveLink: 'https://weather-app-ten-coral-63.vercel.app/'
    },
    {
      title: 'Personal ',
      subtitle: 'Portfolio.',
      technologies: ['JS', 'REACT', 'TS'],
      color: 'bg-gradient-to-br from-[#c9e7ff] to-[#f2e3ff]',
      githubLink: 'https://github.com/rpraneeth5225',
      liveLink: 'https://praneeth-dev-portfolio.vercel.app/'
    },
    {
      title: 'Playground.',
      subtitle: '',
      technologies: ['HTML/CSS', 'JS', 'NODEJS','EXPRESS','MONGODB'],
      color: 'bg-gradient-to-br from-[#e3c9ff] to-[#ffe3f6]',
      githubLink: 'https://github.com/rpraneeth5225/Craigslist-Redesigned-Project',
      liveLink: 'https://craigslist-redesigned.vercel.app/'
    },
    {
      title: 'MindWell',
      subtitle: 'Health.',
      technologies: ['TS', 'REACT','NODEJS','LANGCHAIN','OPENAI','API'],
      color: 'bg-gradient-to-br from-[#ffcdb0] to-[#ffc4e4]',
      githubLink: 'https://github.com',
      liveLink: 'https://moderntrendystore.com'
    },
    {
      title: 'Expense',
      subtitle: 'Tracker.',
      technologies: ['JS', 'TS','REACT'],
      color: 'bg-gradient-to-br from-[#b0e5ff] to-[#e7c4ff]',
      githubLink: 'https://github.com/rpraneeth5225/Expense-Tracker-MERN',
      liveLink: 'https://example.com'
    },{
      title: 'Modern',
      subtitle: 'Trendy Store.',
      technologies: ['E-COM', 'TS','REACT'],
      color: 'bg-gradient-to-br from-[#b0e5ff] to-[#e7c4ff]',
      githubLink: 'https://github.com/rpraneeth5225/Expense-Tracker-MERN',
      liveLink: 'https://example.com'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="projects" 
      className="bg-black text-black py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-white text-sm tracking-widest">FEATURED PROJECTS —</h2>
          <motion.h2 
            className="text-white text-sm tracking-widest flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Stuff I've Worked On <Folder size={16} />
          </motion.h2>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}