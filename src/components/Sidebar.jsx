import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { navItems } from '../data/dashboardData';
import { useSidebar } from '../context/SidebarContext';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const location = useLocation(); // Get the current route location

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-gray-700 to-gray-900 border-r transition-all duration-300 fixed top-0 left-0 min-h-screen z-30 
          ${sidebarOpen ? 'w-64' : 'w-16'} `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {/* Show the text logo only when sidebar is open */}
          {sidebarOpen && (
            <Link
              to="/"
              className="text-xl font-bold whitespace-nowrap text-amber-600"
            >
              TOTAL SURVEY
            </Link>
          )}

          <button
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            className="text-white cursor-pointer"
          >
            {sidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-4">
          {navItems.map((item, index) => {
            // Check if the current route matches the item's href
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center p-2 rounded-md text-white hover:bg-gray-700 cursor-pointer ${
                  isActive ? 'bg-blue-900 text-white' : 'text-gray-400'
                }`} // Apply active state styling
              >
                <item.icon className={`text-2xl ${item.color}`} />
                {sidebarOpen && <span className="ml-2">{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Overlay for background dimming */}
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-20"
        />
      )}

      {/* Content Area */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-16'
        }`}
      ></div>
    </div>
  );
}
