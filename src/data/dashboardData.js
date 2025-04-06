import {
  FaClipboardList,
  FaTasks,
  FaQuestion,
  FaUser,
  FaRegClock,
  FaRegPlayCircle,
  FaTachometerAlt,
  FaUpload,
  FaFileAlt,
  FaChartBar,
  FaBell,
  FaEnvelope,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

export const stats = [
  {
    label: 'Assessments Created',
    value: 4,
    icon: FaClipboardList,
    color: 'text-green-500',
  },
  {
    label: 'Active Assessments',
    value: 4,
    icon: FaRegPlayCircle,
    color: 'text-green-500',
  },
  {
    label: 'Inactive Assessments',
    value: 0,
    icon: FaRegClock,
    color: 'text-red-500',
  },
  { label: 'Tasks Uploaded', value: 9, icon: FaTasks, color: 'text-blue-500' },
  {
    label: 'Questions Uploaded',
    value: 20,
    icon: FaQuestion,
    color: 'text-yellow-500',
  },
  { label: 'Users Uploaded', value: 5, icon: FaUser, color: 'text-blue-500' },
];

export const navItems = [
  {
    label: 'Dashboard',
    href: '#',
    icon: FaTachometerAlt,
    color: 'text-blue-500',
  },
  {
    label: 'Assessment',
    href: '#',
    icon: FaClipboardList,
    color: 'text-green-500',
  },
  {
    label: 'Publish Survey',
    href: '#',
    icon: FaUpload,
    color: 'text-purple-500',
  },
  { label: 'Templates', href: '#', icon: FaFileAlt, color: 'text-yellow-500' },
  { label: 'Reports', href: '/reports', icon: FaChartBar, color: 'text-indigo-500' },
  {
    label: 'Notifications',
    href: '/notifications', 
    icon: FaBell,
    color: 'text-red-500',
  },
  { label: 'Messages', href: '#', icon: FaEnvelope, color: 'text-pink-500' },
  { label: 'Users', href: '#', icon: FaUsers, color: 'text-teal-500' },
  { label: 'Settings', href: '#', icon: FaCog, color: 'text-gray-600' },
  { label: 'Logout', href: '#', icon: FaSignOutAlt, color: 'text-red-500' },
];

export const notifications = [
  { id: 1, message: 'New user registered', time: '2 hours ago' },
  { id: 2, message: 'Server is down', time: '1 day ago' },
  { id: 3, message: 'Database backup completed', time: '3 days ago' },
  { id: 4, message: 'New comment on your post', time: '5 days ago' },
];

export const reports = [
  {
    id: 1,
    title: 'Sales Report Q1',
    status: 'Completed',
    date: '2025-01-15',
    category: 'Sales',
  },
  {
    id: 2,
    title: 'Inventory Report',
    status: 'In Progress',
    date: '2025-02-10',
    category: 'Inventory',
  },
  {
    id: 3,
    title: 'Marketing Analysis',
    status: 'Completed',
    date: '2025-03-20',
    category: 'Marketing',
  },
  {
    id: 4,
    title: 'Customer Feedback',
    status: 'Pending',
    date: '2025-04-01',
    category: 'Customer Service',
  },
];
