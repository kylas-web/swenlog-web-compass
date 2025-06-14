
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Globe, FileText, Image as ImageIcon, Quote, Building, Wrench, PanelTop, PanelBottom, Users, MessageSquare } from 'lucide-react';

type AdminLayoutProps = {
  children: React.ReactNode;
  activeView: string;
  setActiveView: (view: string) => void;
};

const AdminLayout = ({ children, activeView, setActiveView }: AdminLayoutProps) => {
  const navItems = [
    { key: 'hero', label: 'Hero Section', Icon: LayoutDashboard },
    { key: 'about', label: 'About Section', Icon: Building },
    { key: 'services', label: 'Services Section', Icon: Wrench },
    { key: 'header', label: 'Header', Icon: PanelTop },
    { key: 'footer', label: 'Footer', Icon: PanelBottom },
    { key: 'cta', label: 'Global CTA', Icon: Globe },
    { key: 'pages', label: 'Page Management', Icon: FileText },
    { key: 'media', label: 'Media Library', Icon: ImageIcon },
    { key: 'quote', label: 'Quote Configurator', Icon: Quote },
    { key: 'crm', label: 'CRM', Icon: Users },
    { key: 'whatsapp', label: 'WhatsApp Marketing', Icon: MessageSquare },
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
                  <item.Icon className="mr-3 h-5 w-5 shrink-0" />
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
