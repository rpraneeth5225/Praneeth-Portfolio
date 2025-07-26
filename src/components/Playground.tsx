import { motion } from 'framer-motion';
import { ArrowLeft, Lightbulb, Github, ExternalLink, Heart, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Calculator } from './widgets/Calculator';
import { TaskManager } from './widgets/TaskManager';
import { StockTracker } from './widgets/StockTracker';

export function Playground() {
  const techStack = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express', 
    'MongoDB', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite', 'Git'
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 p-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                <ArrowLeft size={20} />
                <span>Back to Portfolio</span>
              </Link>
            </motion.div>
          </div>
          
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-100">playground by praneeth</h1>
            <motion.button
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Lightbulb size={20} className="text-gray-400" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* About Section */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 shadow-sm">
              {/* Title */}
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-100">playground</h2>
                <p className="text-sm text-gray-400">by praneeth</p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                a showcase featuring a variety of independent widgets with different functionalities utilizing both frontend and backend technologies.
              </p>
              
              {/* Tech Stack Grid */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="bg-gray-700 rounded-lg p-3 text-center text-sm font-medium text-gray-200 hover:bg-gray-600 transition-colors cursor-pointer"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>

              {/* GitHub Activity */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-300">GitHub Activity</h3>
                  <motion.button
                    className="text-gray-500 hover:text-gray-300 p-1"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RefreshCw size={14} />
                  </motion.button>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(month => (
                    <div key={month} className="text-xs text-gray-500 text-center">
                      {month}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 91 }, (_, i) => (
                    <motion.div
                      key={i}
                      className={`h-3 rounded-sm ${
                        Math.random() > 0.8 ? 'bg-green-500' : 
                        Math.random() > 0.6 ? 'bg-green-400' : 
                        Math.random() > 0.4 ? 'bg-green-300' : 'bg-gray-600'
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 1 + i * 0.01 }}
                    />
                  ))}
                </div>
              </div>

              <motion.a
                href="https://github.com/rpraneeth5225"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <Github size={16} />
                view playground repository
                <ExternalLink size={14} />
              </motion.a>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <span className="text-sm text-gray-400">about</span>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Heart size={14} className="text-red-500" />
                  <span>62</span>
                </div>
              </div>
            </div>

            {/* Stock Tracker Widget */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <StockTracker />
            </motion.div>
          </motion.div>

          {/* Middle Column */}
          <motion.div 
            className="space-y-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Calculator Widget */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Calculator />
            </motion.div>

            {/* Under Construction Widget */}
            <motion.div
              className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-xl border border-yellow-700/50 p-6 shadow-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🚧</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100">Under Construction</h3>
                  <p className="text-sm text-gray-400">More widgets coming soon!</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <p className="text-sm text-gray-200">
                    The playground is actively being developed with new interactive widgets and features.
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Progress: 60%</span>
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Next up: Weather widget, Music player, and more!
                </div>
              </div>
            </motion.div>

            {/* IP Address Widget */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-100">Your IP Address</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">IP Address:</span>
                  <span className="font-mono text-gray-200">108.35.145.120</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Country:</span>
                  <span className="text-gray-200">United States</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Region:</span>
                  <span className="text-gray-200">New Jersey</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">City:</span>
                  <span className="text-gray-200">Jersey City</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Browser:</span>
                  <span className="text-gray-200">Chrome</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">OS:</span>
                  <span className="text-gray-200">macOS</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Task Manager Widget */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <TaskManager />
            </motion.div>

            {/* Josh W. Comeau Card */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  JW
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-100">Josh W. Comeau</h4>
                  <p className="text-sm text-gray-300 mb-2">Friendly tutorials focusing on React, CSS, and Animation</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {['#react', '#css', '#animation', '#tutorials'].map(tag => (
                      <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>❤️ 12</span>
                    <span>💬 3</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}