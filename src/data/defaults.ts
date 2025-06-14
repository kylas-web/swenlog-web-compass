export const defaultHeroData = {
  mainHeading: "Global Logistics",
  subHeading: "Made Simple",
  description: "SWENLOG delivers comprehensive supply chain solutions that connect your business to the world. From freight forwarding to customs brokerage, we handle the complexity so you can focus on growth.",
  imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
};

export const defaultCtaData = {
  text: 'Get Your Free Quote Today!',
  link: '/contact',
  enabled: true,
};

export const defaultMediaData = [
  { id: '1', name: 'Woman on laptop', url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', alt: 'A woman sitting on a bed using a laptop' },
  { id: '2', name: 'Laptop on desk', url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', alt: 'Turned on gray laptop computer' },
  { id: '3', name: 'Circuit board', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', alt: 'Macro photography of black circuit board' },
  { id: '4', name: 'Code on monitor', url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', alt: 'Monitor showing Java programming' },
];

export const defaultPages = [
  { id: 'p1', title: 'About Our Company', slug: 'about-us', content: '## About Us\n\nWe are a leading logistics company...', published: true },
  { id: 'p2', title: 'Terms of Service', slug: 'terms', content: '## Terms of Service\n\nPlease read these terms carefully.', published: false },
];

export const defaultSubmissions = [
    { id: 'q1', name: 'John Doe', email: 'john@example.com', service: 'Air Freight', message: 'Looking to ship 2 tons of coffee beans from Colombia to USA.', status: 'new' as const, createdAt: new Date().toISOString() },
    { id: 'q2', name: 'Jane Smith', email: 'jane@example.com', service: 'Ocean Freight', message: 'Need a quote for a full container load from Shanghai to Los Angeles.', status: 'contacted' as const, createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() },
];

export const defaultAboutData = {
    title: "Your Trusted Logistics Partner Since 1998",
    paragraph1: "SWENLOG has been at the forefront of global logistics, helping businesses of all sizes navigate the complexities of international trade. Our comprehensive suite of services and deep industry expertise make us the preferred choice for companies seeking reliable, efficient logistics solutions.",
    paragraph2: "With offices across major trade routes and a network of trusted partners worldwide, we provide seamless connectivity between markets, ensuring your cargo reaches its destination safely, on time, and cost-effectively.",
    stat1_value: "2M+",
    stat1_label: "Shipments Handled",
    stat2_value: "5000+",
    stat2_label: "Global Clients",
    values_title: "Our Core Values",
    values: [
        { id: 'v1', icon: 'Target', title: 'Precision', description: 'Every shipment is handled with meticulous attention to detail and accuracy.' },
        { id: 'v2', icon: 'Users', title: 'Partnership', description: 'We build long-term relationships based on trust, transparency, and mutual success.' },
        { id: 'v3', icon: 'Award', title: 'Excellence', description: 'Committed to delivering superior service that exceeds customer expectations.' },
        { id: 'v4', icon: 'Zap', title: 'Innovation', description: 'Leveraging cutting-edge technology to optimize logistics operations.' }
    ]
};

export const defaultHeaderData = {
  logoText: "SWENLOG",
  logoSubtext: "Global Logistics Solutions",
  ctaButtonText: "Get Quote",
  navigationItems: [
    {
      name: 'Services',
      url: '#',
      dropdown: [
        { name: 'Ocean Freight', url: '#' },
        { name: 'Air Freight', url: '#' },
        { name: 'Ground Transportation', url: '#' },
        { name: 'Customs Brokerage', url: '#' },
        { name: 'Warehousing & Distribution', url: '#' },
        { name: 'Supply Chain Solutions', url: '#' }
      ]
    },
    {
      name: 'Industries',
      url: '#',
      dropdown: [
        { name: 'Automotive', url: '#' },
        { name: 'Technology', url: '#' },
        { name: 'Retail & Fashion', url: '#' },
        { name: 'Healthcare', url: '#' },
        { name: 'Manufacturing', url: '#' },
        { name: 'Energy', url: '#' }
      ]
    },
    { name: 'About Us', url: '#' },
    { name: 'Resources', url: '#' },
    { name: 'Careers', url: '#' },
    { name: 'Contact', url: '#' }
  ]
};

export const defaultFooterData = {
  logoText: "SWENLOG",
  description: "Your trusted partner for comprehensive global logistics solutions. Connecting businesses worldwide with reliable, efficient shipping services.",
  socials: [
    { name: 'Facebook', url: '#', icon: 'Facebook' },
    { name: 'Twitter', url: '#', icon: 'Twitter' },
    { name: 'Linkedin', url: '#', icon: 'Linkedin' },
    { name: 'Instagram', url: '#', icon: 'Instagram' }
  ],
  columns: [
    {
      title: 'Services',
      links: [
        { name: 'Ocean Freight', url: '#' },
        { name: 'Air Freight', url: '#' },
        { name: 'Ground Transportation', url: '#' },
        { name: 'Customs Brokerage', url: '#' },
        { name: 'Warehousing', url: '#' },
        { name: 'Supply Chain Solutions', url: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '#' },
        { name: 'Careers', url: '#' },
        { name: 'News & Updates', url: '#' },
        { name: 'Investor Relations', url: '#' },
        { name: 'Sustainability', url: '#' },
        { name: 'Partner Network', url: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Track Shipment', url: '#' },
        { name: 'Customer Portal', url: '#' },
        { name: 'Documentation', url: '#' },
        { name: 'Industry Insights', url: '#' },
        { name: 'Support Center', url: '#' },
        { name: 'Contact Us', url: '#' }
      ]
    }
  ],
  bottomText: "© 2024 SWENLOG. All rights reserved.",
  bottomLinks: [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
    { name: 'Cookie Policy', url: '#' }
  ]
};

export const defaultServicesData = {
    title: "Comprehensive Logistics Services",
    subtitle: "From single shipments to complex supply chain management, SWENLOG provides tailored solutions that drive your business forward.",
    services: [
        { id: 's1', icon: 'Ship', title: 'Ocean Freight', description: 'Cost-effective shipping solutions for full container loads (FCL) and less-than-container loads (LCL) worldwide.', features: 'Port-to-port delivery\nDoor-to-door service\nCargo consolidation\nReal-time tracking' },
        { id: 's2', icon: 'Plane', title: 'Air Freight', description: 'Fast, reliable air cargo services for time-sensitive shipments with global network coverage.', features: 'Express delivery\nTemperature controlled\nDangerous goods handling\nCharter services' },
        { id: 's3', icon: 'Truck', title: 'Ground Transportation', description: 'Comprehensive trucking and rail services for domestic and cross-border transportation needs.', features: 'LTL & FTL services\nCross-docking\nLast-mile delivery\nSpecialized equipment' },
        { id: 's4', icon: 'FileText', title: 'Customs Brokerage', description: 'Expert customs clearance and trade compliance services to navigate complex regulations.', features: 'Documentation prep\nDuty optimization\nTrade compliance\nRegulatory updates' },
        { id: 's5', icon: 'Warehouse', title: 'Warehousing & Distribution', description: 'Strategic distribution centers and fulfillment services to optimize your supply chain.', features: 'Inventory management\nPick & pack\nCross-docking\nValue-added services' },
        { id: 's6', icon: 'BarChart3', title: 'Supply Chain Solutions', description: 'End-to-end supply chain optimization and consulting to improve efficiency and reduce costs.', features: 'Supply chain design\nVendor management\nAnalytics & reporting\nProcess optimization' }
    ]
};
