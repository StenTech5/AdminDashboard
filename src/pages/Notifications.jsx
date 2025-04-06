import { useState } from 'react';
import { notifications as initialNotifications } from '../data/dashboardData'; // Import notifications data
import { motion } from 'framer-motion'; // Import Framer Motion

export default function Notifications() {
  // Initialize state to store notifications with their read status
  const [notifications, setNotifications] = useState(initialNotifications);

  // Function to mark a notification as read
  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 max-w-full sm:max-w-3xl mx-auto mt-10 overflow-x-hidden">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Notifications
      </h2>

      <div className="space-y-6">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }} // Control the duration of the animation
            className={`${
              notification.read ? 'bg-gray-100' : 'bg-gray-50'
            } hover:bg-gray-100 p-5 border border-gray-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between space-x-6 transition duration-300 ease-in-out`}
          >
            <div className="flex-1 mb-4 sm:mb-0">
              <p className="text-sm font-medium text-gray-800">
                {notification.message}
              </p>
              <span className="text-sm text-gray-500">{notification.time}</span>
            </div>

            {/* "Mark as Read" button with dynamic styling based on read status */}
            <div className="flex sm:flex-shrink-0">
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification.id)} // Call function when clicked
                  className="text-sm bg-blue-900 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transition"
                >
                  Mark as Read
                </button>
              )}
              {notification.read && (
                <span className="text-sm text-green-500">Read</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
