
import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import HeroManager from '@/components/admin/HeroManager';
import CtaManager from '@/components/admin/CtaManager';
import MediaManager from '@/components/admin/MediaManager';
import QuoteManager from '@/components/admin/QuoteManager';
import PageManager from '@/components/admin/PageManager';
import AboutManager from '@/components/admin/AboutManager';
import ServicesManager from '@/components/admin/ServicesManager';
import HeaderManager from '@/components/admin/HeaderManager';
import FooterManager from '@/components/admin/FooterManager';
import CrmManager from '@/components/admin/CrmManager';
import WhatsappManager from '@/components/admin/WhatsappManager';
import AIAdminAssistant from '@/components/admin/AIAdminAssistant';

const AdminPage = () => {
  const [activeView, setActiveView] = useState('hero');

  useEffect(() => {
    // Load Puter.js script for admin AI
    const script = document.createElement('script');
    script.src = 'https://js.puter.com/v2/';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.head.querySelector('script[src="https://js.puter.com/v2/"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const renderContent = () => {
    const components = {
      hero: <HeroManager />,
      about: <AboutManager />,
      services: <ServicesManager />,
      header: <HeaderManager />,
      footer: <FooterManager />,
      cta: <CtaManager />,
      pages: <PageManager />,
      media: <MediaManager />,
      quote: <QuoteManager />,
      crm: <CrmManager />,
      whatsapp: <WhatsappManager />
    };

    const activeComponent = components[activeView as keyof typeof components] || <HeroManager />;

    return (
      <div>
        {activeComponent}
        <AIAdminAssistant context={activeView} />
      </div>
    );
  };

  return (
    <AdminLayout activeView={activeView} setActiveView={setActiveView}>
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminPage;
