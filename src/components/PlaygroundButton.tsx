import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PlaygroundButton() {
  return (
    <motion.div
      className="fixed right-6 bottom-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: 2,
        type: "spring",
        stiffness: 200,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to="/playground">
        <motion.div
          className="relative group"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Main Button Container */}
          <motion.div
            className="relative bg-gray-700 p-4 rounded-full shadow-2xl border border-gray-600 backdrop-blur-sm overflow-hidden"
            whileHover={{
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              transition: { duration: 0.3 }
            }}
          >

            {/* Code Icon */}
            <motion.div
              className="relative"
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
                transition: { duration: 0.6 }
              }}
            >
              <Code size={32} className="text-white relative z-10" />
              
              {/* Icon Glow */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>


          </motion.div>


        </motion.div>
      </Link>
    </motion.div>
  );
} 