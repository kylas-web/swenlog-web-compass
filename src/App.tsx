
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdminPage from "./pages/Admin";
import DynamicPage from "./pages/DynamicPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from "./pages/ResourcesPage";

// Service Pages
import OceanFreightPage from "./pages/OceanFreightPage";
import AirFreightPage from "./pages/AirFreightPage";
import GroundTransportationPage from "./pages/GroundTransportationPage";
import CustomsBrokeragePage from "./pages/CustomsBrokeragePage";
import WarehousingDistributionPage from "./pages/WarehousingDistributionPage";
import SupplyChainSolutionsPage from "./pages/SupplyChainSolutionsPage";

// Industry Pages
import AutomotivePage from "./pages/AutomotivePage";
import TechnologyPage from "./pages/TechnologyPage";
import RetailFashionPage from "./pages/RetailFashionPage";
import HealthcarePage from "./pages/HealthcarePage";
import ManufacturingPage from "./pages/ManufacturingPage";
import EnergyPage from "./pages/EnergyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          
          {/* Service Routes */}
          <Route path="/services/ocean-freight" element={<OceanFreightPage />} />
          <Route path="/services/air-freight" element={<AirFreightPage />} />
          <Route path="/services/ground-transportation" element={<GroundTransportationPage />} />
          <Route path="/services/customs-brokerage" element={<CustomsBrokeragePage />} />
          <Route path="/services/warehousing-distribution" element={<WarehousingDistributionPage />} />
          <Route path="/services/supply-chain-solutions" element={<SupplyChainSolutionsPage />} />
          
          {/* Industry Routes */}
          <Route path="/industries/automotive" element={<AutomotivePage />} />
          <Route path="/industries/technology" element={<TechnologyPage />} />
          <Route path="/industries/retail-fashion" element={<RetailFashionPage />} />
          <Route path="/industries/healthcare" element={<HealthcarePage />} />
          <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
          <Route path="/industries/energy" element={<EnergyPage />} />
          
          <Route path="/page/:slug" element={<DynamicPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
