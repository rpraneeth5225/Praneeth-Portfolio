import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { DevText } from './DevText';
import { TechStack } from './TechStack';
import { Projects } from './Projects';
import { Footer } from './Footer';

export function Home() {
  return (
    <motion.div
      className="bg-black min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Navbar />
      <main className="space-y-0"> 
        <Hero />
        <DevText />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </motion.div>
  );
} 