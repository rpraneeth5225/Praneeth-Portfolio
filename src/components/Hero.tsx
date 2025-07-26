import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Code, Palette, Zap } from 'lucide-react';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const gradientVariants: Variants = {
    hover: {
      backgroundPosition: ["0%", "100%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-black text-white p-4 md:p-6 overflow-hidden pb-8 md:pb-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-green-400/30"
          variants={floatingVariants}
          animate="animate"
        >
          <Code size={24} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 text-purple-400/30"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        >
          <Palette size={20} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 text-blue-400/30"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          <Zap size={18} />
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Mouse Follow Effect */}
      <motion.div
        className="fixed w-4 h-4 bg-green-400/30 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <div className="hidden md:block absolute right-[-40px] top-1/2 -translate-y-1/2">
        <motion.div
          className="text-[100px] md:text-[150px] font-bold rotate-90 select-none"
          style={{
            fontFamily: 'var(--font-primary)',
            color: '#4A4A4A',
          }}
          whileHover={{
            color: '#FFFFFF',
            transition: { duration: 0.3 },
          }}
        >
          DEV
        </motion.div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto pl-4 md:pl-8 pt-24 md:pt-32 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="max-w-xl" variants={itemVariants}>
          <motion.h1 
            className="text-2xl md:text-4xl font-medium mb-2 tracking-tight" 
            variants={itemVariants}
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Hi there, I'm 👋
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            variants={gradientVariants}
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{
              fontFamily: 'var(--font-primary)',
              background: "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6, #ec4899)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Praneeth Regonda.
          </motion.h2>

          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h3 
              className="text-base md:text-lg text-green-400 font-medium tracking-wide" 
              variants={itemVariants}
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              DESIGNER + DEVELOPER
            </motion.h3>

            <motion.p 
              className="text-white/70 text-sm md:text-base leading-relaxed" 
              variants={itemVariants}
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              I'm a developer based in New Jersey, USA. I create beautiful, functional, and user-centered digital experiences.
            </motion.p>

            {/* Skills Tags */}
            <motion.div className="flex flex-wrap gap-2 mt-6" variants={itemVariants}>
              {['React', 'TypeScript', 'Node.js', 'UI/UX', 'E-COM'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20 font-medium"
                  style={{ fontFamily: 'var(--font-secondary)' }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 197, 94, 0.2)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.button
              onClick={scrollToFooter}
              className="group relative bg-green-400/20 text-green-400 px-4 md:px-6 py-2 rounded-full hover:bg-green-400/30 transition-colors text-xs md:text-sm cursor-pointer border border-green-400/30 hover:border-green-400/50 font-medium tracking-wide"
              style={{ fontFamily: 'var(--font-secondary)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <span className="flex items-center gap-2">
                Hire Me
                <Sparkles
                  className="opacity-50 group-hover:opacity-100 transition-opacity font-normal group-hover:font-bold"
                  size={14}
                />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div 
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-96"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h4 
              className="text-lg font-semibold mb-4 text-green-400"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              What I Do
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span 
                  className="text-sm text-white/70"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Frontend Development
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span 
                  className="text-sm text-white/70"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  UI/UX Design
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span 
                  className="text-sm text-white/70"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  E-Commerce
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
