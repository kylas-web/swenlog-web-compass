
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import HeroManager from '@/components/admin/HeroManager';
import CtaManager from '@/components/admin/CtaManager';
import MediaManager from '@/components/admin/MediaManager';
import QuoteManager from '@/components/admin/QuoteManager';
import PageManager from '@/components/admin/PageManager';

const AdminPage = () => {
  const [activeView, setActiveView] = useState('hero');

  const renderContent = () => {
    switch (activeView) {
      case 'hero':
        return <HeroManager />;
      case 'cta':
        return <CtaManager />;
      case 'pages':
        return <PageManager />;
      case 'media':
        return <MediaManager />;
      case 'quote':
        return <QuoteManager />;
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
