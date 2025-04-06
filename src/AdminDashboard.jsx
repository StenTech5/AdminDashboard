import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import { Route, Routes } from 'react-router-dom'; // For routing
import Notifications from './pages/Notifications'; // Import Notifications Page
import Reports from './pages/Reports'; // Import Reports Page

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar always visible */}
      <Sidebar />

      <div className="flex-1 p-6">
        {/* Header always visible */}
        <Header />

        <Routes>
          <Route path="/" element={<StatsCards />} />{' '}
          {/* Default Dashboard page */}
          <Route path="/notifications" element={<Notifications />} />{' '}
          {/* Notifications Page */}
          <Route path="/reports" element={<Reports />} /> {/* Reports Page */}
        </Routes>
      </div>
    </div>
  );
}
