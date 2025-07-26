import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Trash2, Edit3, Check, X } from 'lucide-react';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        text: newTaskText.trim(),
        completed: false,
        createdAt: new Date()
      };
      setTasks([newTask, ...tasks]);
      setNewTaskText('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (task: Task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = () => {
    if (editText.trim() && editingId) {
      setTasks(tasks.map(task => 
        task.id === editingId ? { ...task, text: editText.trim() } : task
      ));
      setEditingId(null);
      setEditText('');
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const handleEditKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      saveEdit();
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-xl border border-gray-700 p-6 shadow-sm h-96 flex flex-col"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-100 mb-2">What do you need to do?</h3>
        
        {/* Add Task Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className="flex-1 bg-gray-700 text-gray-100 px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
          />
          <motion.button
            onClick={addTask}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={20} />
          </motion.button>
        </div>
      </div>

      {/* Tasks List */}
      <div className="flex-1 overflow-y-auto space-y-2">
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className={`bg-gray-700 rounded-lg p-3 border border-gray-600 ${
                task.completed ? 'opacity-60' : ''
              }`}
            >
              {editingId === task.id ? (
                // Edit Mode
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyPress={handleEditKeyPress}
                    className="flex-1 bg-gray-600 text-gray-100 px-3 py-1 rounded border border-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    autoFocus
                  />
                  <motion.button
                    onClick={saveEdit}
                    className="text-green-400 hover:text-green-300 p-1"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Check size={16} />
                  </motion.button>
                  <motion.button
                    onClick={cancelEdit}
                    className="text-red-400 hover:text-red-300 p-1"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={16} />
                  </motion.button>
                </div>
              ) : (
                // View Mode
                <div className="flex items-center gap-3">
                  <motion.button
                    onClick={() => toggleTask(task.id)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      task.completed 
                        ? 'bg-green-500 border-green-500' 
                        : 'border-gray-400 hover:border-green-500'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {task.completed && <Check size={12} className="text-white" />}
                  </motion.button>
                  
                  <span 
                    className={`flex-1 text-gray-100 ${
                      task.completed ? 'line-through text-gray-400' : ''
                    }`}
                  >
                    {task.text}
                  </span>
                  
                  <div className="flex gap-1">
                    <motion.button
                      onClick={() => startEditing(task)}
                      className="text-blue-400 hover:text-blue-300 p-1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Edit3 size={14} />
                    </motion.button>
                    <motion.button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 size={14} />
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        
        {tasks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 py-8"
          >
            No tasks yet. Add one above!
          </motion.div>
        )}
      </div>

      {/* Task Count */}
      {tasks.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            {tasks.filter(t => t.completed).length} of {tasks.length} completed
          </p>
        </div>
      )}
    </motion.div>
  );
} 