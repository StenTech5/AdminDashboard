import { motion } from 'framer-motion';
import { useSidebar } from '../context/SidebarContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { sidebarOpen } = useSidebar();

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <motion.div
      className="flex justify-between items-center mb-6 shadow p-4 bg-white rounded-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Show text logo only when sidebar is collapsed */}
      {!sidebarOpen && (
        <Link to="/" className="text-xl font-bold text-orange-500">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleLogoClick}
          >
            TS
          </motion.span>
        </Link>
      )}

      {/* Title */}
      <motion.h1
        className="text-xl font-bold hidden lg:block"
        style={{ fontSize: 14 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Admin Dashboard
      </motion.h1>

      {/* Right Section: Greeting & Avatar */}
      <motion.div
        className="flex items-center space-x-4 gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.span
          className="text-gray-700 text-lg text-center mx-auto sm:block md:block lg:text-left"
          style={{ fontSize: 14 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hello, Admin
        </motion.span>
        <motion.img
          src="/avater.jpg"
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover border"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
        />
      </motion.div>
    </motion.div>
  );
}
