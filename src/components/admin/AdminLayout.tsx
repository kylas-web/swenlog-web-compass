import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Globe, FileText, Image as ImageIcon, Quote, Building, Wrench, PanelTop, PanelBottom, Users, MessageSquare, Shield, Gauge } from 'lucide-react';

type AdminLayoutProps = {
  children: React.ReactNode;
  activeView: string;
  setActiveView: (view: string) => void;
};

import { adminModules } from "./adminModules";

const AdminLayout = ({ children, activeView, setActiveView }: AdminLayoutProps) => {
  // Use config instead of hardcoded navItems
  const navItems = adminModules.map(({ key, label, icon: Icon }) => ({
    key,
    label,
    Icon,
  }));

  return (
    <div className="flex min-h-screen bg-gray-200 font-sans">
      <aside className="w-64 bg-gray-200 flex flex-col transition-all duration-300">
        <div className="p-4 border-b border-gray-300/80">
          <h1 className="text-2xl font-bold text-gray-800">SWENLOG Admin</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => setActiveView(item.key)}
                  className={`flex w-full items-center p-3 rounded-xl text-left transition-all duration-200 transform
                    ${
                      activeView === item.key
                        ? 'text-primary shadow-neumorphic-inset'
                        : 'text-gray-600 hover:text-primary shadow-neumorphic active:shadow-neumorphic-inset active:scale-95'
                    }`}
                >
                  <item.Icon className="mr-3 h-5 w-5 shrink-0" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-300/80">
          <Link to="/" className="text-sm text-gray-500 hover:text-primary">
            ← Back to Site
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
