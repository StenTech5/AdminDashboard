import { stats } from "../data/dashboardData";
import { motion } from "framer-motion";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-white w-full h-36 cursor-pointer p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center sm:space-y-0 sm:space-x-4 hover:shadow-lg transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: index * 0.1 }} 
          whileHover={{ scale: 1.05 }}
        >
          <div className={`text-3xl ${stat.color}`}>
            <stat.icon />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-xl font-semibold">{stat.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

