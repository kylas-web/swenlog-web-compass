
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import HeroManager from '@/components/admin/HeroManager';
import CtaManager from '@/components/admin/CtaManager';

const PlaceholderCard = ({ title }: { title: string }) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    <p className="mt-4 text-gray-600">This feature is coming soon.</p>
  </div>
);

const AdminPage = () => {
  const [activeView, setActiveView] = useState('hero');

  const renderContent = () => {
    switch (activeView) {
      case 'hero':
        return <HeroManager />;
      case 'cta':
        return <CtaManager />;
      case 'pages':
        return <PlaceholderCard title="Page Management" />;
      case 'media':
        return <PlaceholderCard title="Media Library" />;
      case 'quote':
        return <PlaceholderCard title="Quote Configurator" />;
      default:
        return <HeroManager />;
    }
  };

  return (
    <AdminLayout activeView={activeView} setActiveView={setActiveView}>
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminPage;
