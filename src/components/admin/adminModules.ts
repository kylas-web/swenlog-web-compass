import { 
  LayoutDashboard, Building, Wrench, PanelTop, PanelBottom, Globe, FileText, 
  Image as ImageIcon, Quote, Users, MessageSquare, Shield, Gauge, Bot, Settings,
  UserPlus, Sliders, Database, FormInput
} from "lucide-react";
import HeroManager from "./HeroManager";
import AboutManager from "./AboutManager";
import ServicesManager from "./ServicesManager";
import HeaderManager from "./HeaderManager";
import FooterManager from "./FooterManager";
import CtaManager from "./CtaManager";
import EnhancedPageManager from "./EnhancedPageManager";
import AdvancedMediaManager from "./AdvancedMediaManager";
import QuoteManager from "./QuoteManager";
import EnhancedChatbotManager from "./EnhancedChatbotManager";
import SliderManager from "./SliderManager";
import GeneralSettingsManager from "./GeneralSettingsManager";
import FormsManager from "./FormsManager";
import CompleteCrmManager from "./CompleteCrmManager";
import CompleteHrmManager from "./CompleteHrmManager";
import WhatsappManager from "./WhatsappManager";
import PerformanceManager from "./PerformanceManager";
import SecurityManager from "./SecurityManager";

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
    label: 'Enhanced Pages',
    icon: FileText,
    component: EnhancedPageManager,
  },
  {
    key: 'media',
    label: 'Advanced Media Library',
    icon: ImageIcon,
    component: AdvancedMediaManager,
  },
  {
    key: 'quote',
    label: 'Quote Configurator',
    icon: Quote,
    component: QuoteManager,
  },
  {
    key: 'crm',
    label: 'Complete CRM',
    icon: Users,
    component: CompleteCrmManager,
  },
  {
    key: 'hrm',
    label: 'Complete HRM',
    icon: UserPlus,
    component: CompleteHrmManager,
  },
  {
    key: 'sliders',
    label: 'Slider Management',
    icon: Sliders,
    component: SliderManager,
  },
  {
    key: 'chatbot',
    label: 'Enhanced Chatbot',
    icon: Bot,
    component: EnhancedChatbotManager,
  },
  {
    key: 'forms',
    label: 'Forms Management',
    icon: FormInput,
    component: FormsManager,
  },
  {
    key: 'settings',
    label: 'General Settings',
    icon: Settings,
    component: GeneralSettingsManager,
  },
];

export const adminModulesByKey = adminModules.reduce((acc, mod) => {
  acc[mod.key] = mod;
  return acc;
}, {} as Record<string, (typeof adminModules)[number]>);