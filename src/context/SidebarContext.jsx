import { createContext, useContext, useState } from "react";

// Create the context
const SidebarContext = createContext();

// Sidebar Provider Component
export const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Hook for easy access
export const useSidebar = () => useContext(SidebarContext);
