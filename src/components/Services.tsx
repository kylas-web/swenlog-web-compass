
import { Truck, Plane, Ship, FileText, Warehouse, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Cost-effective shipping solutions for full container loads (FCL) and less-than-container loads (LCL) worldwide.',
      features: ['Port-to-port delivery', 'Door-to-door service', 'Cargo consolidation', 'Real-time tracking']
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast, reliable air cargo services for time-sensitive shipments with global network coverage.',
      features: ['Express delivery', 'Temperature controlled', 'Dangerous goods handling', 'Charter services']
    },
    {
      icon: Truck,
      title: 'Ground Transportation',
      description: 'Comprehensive trucking and rail services for domestic and cross-border transportation needs.',
      features: ['LTL & FTL services', 'Cross-docking', 'Last-mile delivery', 'Specialized equipment']
    },
    {
      icon: FileText,
      title: 'Customs Brokerage',
      description: 'Expert customs clearance and trade compliance services to navigate complex regulations.',
      features: ['Documentation prep', 'Duty optimization', 'Trade compliance', 'Regulatory updates']
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Distribution',
      description: 'Strategic distribution centers and fulfillment services to optimize your supply chain.',
      features: ['Inventory management', 'Pick & pack', 'Cross-docking', 'Value-added services']
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Solutions',
      description: 'End-to-end supply chain optimization and consulting to improve efficiency and reduce costs.',
      features: ['Supply chain design', 'Vendor management', 'Analytics & reporting', 'Process optimization']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Logistics Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From single shipments to complex supply chain management, SWENLOG provides 
            tailored solutions that drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <service.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-800 font-semibold hover:text-blue-900 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
