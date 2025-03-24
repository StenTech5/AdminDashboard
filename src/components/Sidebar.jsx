import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { navItems } from "../data/dashboardData";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-800 to-gray-900 border-r transition-all duration-300 min-h-screen overflow-hidden"
      animate={{ width: sidebarOpen ? 256 : 64 }} // Width: 64px (collapsed) → 256px (expanded)
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {sidebarOpen && (
          <motion.span 
            className="text-xl font-bold whitespace-nowrap text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            TOTAL SURVEY
          </motion.span>
        )}
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar" className="text-white cursor-pointer">
          {sidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-4">
        <AnimatePresence>
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-md text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }} // Stagger effect
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className={`text-2xl ${item.color}`} />
              {sidebarOpen && <span className="ml-2">{item.label}</span>}
            </motion.a>
          ))}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
}
