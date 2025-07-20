
import { 
  LayoutDashboard, Building, Wrench, PanelTop, PanelBottom, Globe, FileText, 
  Image as ImageIcon, Quote, Users, MessageSquare, Shield, Gauge, Bot 
} from "lucide-react";
import HeroManager from "./HeroManager";
import AboutManager from "./AboutManager";
import ServicesManager from "./ServicesManager";
import HeaderManager from "./HeaderManager";
import FooterManager from "./FooterManager";
import CtaManager from "./CtaManager";
import PageManager from "./PageManager";
import MediaManager from "./MediaManager";
import QuoteManager from "./QuoteManager";
import CrmManager from "./CrmManager";
import WhatsappManager from "./WhatsappManager";
import PerformanceManager from "./PerformanceManager";
import SecurityManager from "./SecurityManager";
import ChatbotManager from "./ChatbotManager";

export const adminModules = [
  {
    key: 'hero',
    label: 'Hero Section',
    icon: LayoutDashboard,
    component: HeroManager,
  },
  {
    key: 'about',
    label: 'About Section',
    icon: Building,
    component: AboutManager,
  },
  {
    key: 'services',
    label: 'Services Section',
    icon: Wrench,
    component: ServicesManager,
  },
  {
    key: 'header',
    label: 'Header',
    icon: PanelTop,
    component: HeaderManager,
  },
  {
    key: 'footer',
    label: 'Footer',
    icon: PanelBottom,
    component: FooterManager,
  },
  {
    key: 'cta',
    label: 'Global CTA',
    icon: Globe,
    component: CtaManager,
  },
  {
    key: 'pages',
    label: 'Page Management',
    icon: FileText,
    component: PageManager,
  },
  {
    key: 'media',
    label: 'Media Library',
    icon: ImageIcon,
    component: MediaManager,
  },
  {
    key: 'quote',
    label: 'Quote Configurator',
    icon: Quote,
    component: QuoteManager,
  },
  {
    key: 'crm',
    label: 'CRM',
    icon: Users,
    component: CrmManager,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp Marketing',
    icon: MessageSquare,
    component: WhatsappManager,
  },
  {
    key: 'chatbot',
    label: 'Chatbot Training',
    icon: Bot,
    component: ChatbotManager,
  },
  {
    key: 'performance',
    label: 'Performance Tools',
    icon: Gauge,
    component: PerformanceManager,
  },
  {
    key: 'security',
    label: 'Security Tools',
    icon: Shield,
    component: SecurityManager,
  },
];

// Optionally export a lookup object by key for convenience
export const adminModulesByKey = adminModules.reduce((acc, mod) => {
  acc[mod.key] = mod;
  return acc;
}, {} as Record<string, (typeof adminModules)[number]>);
