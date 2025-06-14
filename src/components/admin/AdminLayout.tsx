
import React from 'react';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">SWENLOG Admin</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li>
              <Link to="/admin" className="flex items-center p-2 rounded-lg bg-gray-700 text-white">
                Hero Section
              </Link>
            </li>
            {/* Future management modules will be added here */}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
            <Link to="/" className="text-sm text-gray-400 hover:text-white">← Back to Site</Link>
        </div>
      </aside>
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
