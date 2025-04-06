import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import { SidebarProvider } from './context/SidebarContext';

export default function App() {
  return (
    <Router>
      <SidebarProvider>
        <Routes>
          {/* The AdminDashboard will handle routing for the sidebar and header */}
          <Route path="/*" element={<AdminDashboard />} />
        </Routes>
      </SidebarProvider>
    </Router>
  );
}
