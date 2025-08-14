import { 
  LayoutDashboard, Building, Wrench, PanelTop, PanelBottom, Globe, FileText, 
  Image as ImageIcon, Quote, Users, MessageSquare, Shield, Gauge, Bot, Settings,
  UserPlus, Sliders, Database, FormInput, Paintbrush, Calendar, BarChart3, Activity, TrendingUp
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
import SecurityManager from "./SecurityManager";
import FeatureManager from "./FeatureManager";
import ResourcesManager from "./ResourcesManager";
import WhatsAppWebManager from "./WhatsAppWebManager";
import TeamChatManager from "./TeamChatManager";
import StaffDashboard from "./StaffDashboard";
import VisualEditor from "./VisualEditor";
import DepartmentManager from "./DepartmentManager";
import LeaveManager from "./LeaveManager";
import PerformanceManager from "./PerformanceManager";
import HRReportsManager from "./HRReportsManager";
import CRMActivitiesManager from "./CRMActivitiesManager";
import CRMReportsManager from "./CRMReportsManager";

export const adminModules = [
  {
    key: 'visual-editor',
    label: 'Visual Page Editor',
    icon: Paintbrush,
    component: VisualEditor,
  },
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
  {
    key: 'features',
    label: 'Feature Manager',
    icon: Settings,
    component: FeatureManager,
  },
  {
    key: 'resources',
    label: 'Resources Manager',
    icon: Database,
    component: ResourcesManager,
  },
  {
    key: 'whatsapp-web',
    label: 'WhatsApp Web',
    icon: MessageSquare,
    component: WhatsAppWebManager,
  },
  {
    key: 'team-chat',
    label: 'Team Chat',
    icon: Users,
    component: TeamChatManager,
  },
  {
    key: 'staff-dashboard',
    label: 'Staff Dashboard',
    icon: UserPlus,
    component: StaffDashboard,
  },
  {
    key: 'departments',
    label: 'Department Management',
    icon: Building,
    component: DepartmentManager,
  },
  {
    key: 'leave-management',
    label: 'Leave Management',
    icon: Calendar,
    component: LeaveManager,
  },
  {
    key: 'performance-management',
    label: 'Performance Management',
    icon: TrendingUp,
    component: PerformanceManager,
  },
  {
    key: 'hr-reports',
    label: 'HR Reports & Analytics',
    icon: BarChart3,
    component: HRReportsManager,
  },
  {
    key: 'crm-activities',
    label: 'CRM Activities',
    icon: Activity,
    component: CRMActivitiesManager,
  },
  {
    key: 'crm-reports',
    label: 'CRM Reports & Analytics',
    icon: BarChart3,
    component: CRMReportsManager,
  },
];

export const adminModulesByKey = adminModules.reduce((acc, mod) => {
  acc[mod.key] = mod;
  return acc;
}, {} as Record<string, (typeof adminModules)[number]>);