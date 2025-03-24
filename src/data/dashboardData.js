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
  { label: 'Reports', href: '#', icon: FaChartBar, color: 'text-indigo-500' },
  { label: 'Notifications', href: '#', icon: FaBell, color: 'text-red-500' },
  { label: 'Messages', href: '#', icon: FaEnvelope, color: 'text-pink-500' },
  { label: 'Users', href: '#', icon: FaUsers, color: 'text-teal-500' },
  { label: 'Settings', href: '#', icon: FaCog, color: 'text-gray-600' },
  { label: 'Logout', href: '#', icon: FaSignOutAlt, color: 'text-red-500' },
];
