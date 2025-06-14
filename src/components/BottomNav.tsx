
import React from 'react';
import { Home, Map, User, Menu } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  {
    title: "Home",
    path: "/",
    icon: Home
  },
  {
    title: "Optimizer",
    path: "/tools/route-optimizer",
    icon: Map
  },
  {
    title: "Account",
    path: "/admin",
    icon: User
  },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-[60] bg-white border-t border-gray-200 shadow-md flex justify-around items-center h-[60px] lg:hidden">
      {NAV_LINKS.map(link => {
        const active = location.pathname === link.path;
        const Icon = link.icon;
        return (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`flex flex-col items-center justify-center flex-1 py-2 mx-1 rounded-md transition-colors ${active ? 'text-blue-700 bg-blue-50' : 'text-gray-500 hover:bg-gray-50'}`}
            aria-label={link.title}
          >
            <Icon className="w-6 h-6 mb-0.5" />
            <span className="text-xs">{link.title}</span>
          </button>
        );
      })}
    </nav>
  );
}
