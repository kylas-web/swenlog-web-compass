
import React from 'react';
import { Link } from 'react-router-dom';

type AdminLayoutProps = {
  children: React.ReactNode;
  activeView: string;
  setActiveView: (view: string) => void;
};

const AdminLayout = ({ children, activeView, setActiveView }: AdminLayoutProps) => {
  const navItems = [
    { key: 'hero', label: 'Hero Section' },
    { key: 'cta', label: 'Global CTA' },
    { key: 'pages', label: 'Page Management' },
    { key: 'media', label: 'Media Library' },
    { key: 'quote', label: 'Quote Configurator' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">SWENLOG Admin</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => setActiveView(item.key)}
                  className={`flex w-full items-center p-2 rounded-lg text-left transition-colors ${
                    activeView === item.key
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Link to="/" className="text-sm text-gray-400 hover:text-white">
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
