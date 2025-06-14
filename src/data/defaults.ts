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
        { name: 'Ocean Freight', url: '/services/ocean-freight' },
        { name: 'Air Freight', url: '/services/air-freight' },
        { name: 'Ground Transportation', url: '/services/ground-transportation' },
        { name: 'Customs Brokerage', url: '/services/customs-brokerage' },
        { name: 'Warehousing & Distribution', url: '/services/warehousing-distribution' },
        { name: 'Supply Chain Solutions', url: '/services/supply-chain-solutions' }
      ]
    },
    {
      name: 'Industries',
      url: '#',
      dropdown: [
        { name: 'Automotive', url: '/industries/automotive' },
        { name: 'Technology', url: '/industries/technology' },
        { name: 'Retail & Fashion', url: '/industries/retail-fashion' },
        { name: 'Healthcare', url: '/industries/healthcare' },
        { name: 'Manufacturing', url: '/industries/manufacturing' },
        { name: 'Energy', url: '/industries/energy' }
      ]
    },
    { name: 'About Us', url: '/about-us' },
    { name: 'Resources', url: '/resources' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' }
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
        { name: 'Ocean Freight', url: '/services/ocean-freight' },
        { name: 'Air Freight', url: '/services/air-freight' },
        { name: 'Ground Transportation', url: '/services/ground-transportation' },
        { name: 'Customs Brokerage', url: '/services/customs-brokerage' },
        { name: 'Warehousing', url: '/services/warehousing-distribution' },
        { name: 'Supply Chain Solutions', url: '/services/supply-chain-solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about-us' },
        { name: 'Careers', url: '/careers' },
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
        { name: 'Contact Us', url: '/contact' }
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
        { id: 's1', slug: 'ocean-freight', icon: 'Ship', title: 'Ocean Freight', description: 'Cost-effective shipping solutions for full container loads (FCL) and less-than-container loads (LCL) worldwide.', features: 'Port-to-port delivery\nDoor-to-door service\nCargo consolidation\nReal-time tracking' },
        { id: 's2', slug: 'air-freight', icon: 'Plane', title: 'Air Freight', description: 'Fast, reliable air cargo services for time-sensitive shipments with global network coverage.', features: 'Express delivery\nTemperature controlled\nDangerous goods handling\nCharter services' },
        { id: 's3', slug: 'ground-transportation', icon: 'Truck', title: 'Ground Transportation', description: 'Comprehensive trucking and rail services for domestic and cross-border transportation needs.', features: 'LTL & FTL services\nCross-docking\nLast-mile delivery\nSpecialized equipment' },
        { id: 's4', slug: 'customs-brokerage', icon: 'FileText', title: 'Customs Brokerage', description: 'Expert customs clearance and trade compliance services to navigate complex regulations.', features: 'Documentation prep\nDuty optimization\nTrade compliance\nRegulatory updates' },
        { id: 's5', slug: 'warehousing-distribution', icon: 'Warehouse', title: 'Warehousing & Distribution', description: 'Strategic distribution centers and fulfillment services to optimize your supply chain.', features: 'Inventory management\nPick & pack\nCross-docking\nValue-added services' },
        { id: 's6', slug: 'supply-chain-solutions', icon: 'BarChart3', title: 'Supply Chain Solutions', description: 'End-to-end supply chain optimization and consulting to improve efficiency and reduce costs.', features: 'Supply chain design\nVendor management\nAnalytics & reporting\nProcess optimization' }
    ]
};

export const defaultIndustriesData = {
  title: "Tailored Solutions for Your Industry",
  subtitle: "We have deep expertise in a wide range of industries, providing specialized logistics solutions to meet unique challenges.",
  industries: [
    { id: 'i1', slug: 'automotive', icon: 'Truck', title: 'Automotive', description: 'Just-in-time delivery and specialized handling for the automotive supply chain.', content: 'Our automotive logistics solutions are designed to meet the high-pressure demands of the automotive industry. We provide reliable and efficient transportation for parts and finished vehicles, ensuring your supply chain runs smoothly.'},
    { id: 'i2', slug: 'technology', icon: 'Zap', title: 'Technology', description: 'Secure and efficient transport for high-value electronics and components.', content: 'We offer secure, climate-controlled shipping and warehousing for sensitive and high-value technology products. Our robust security measures and real-time tracking give you peace of mind.'},
    { id: 'i3', slug: 'retail-fashion', icon: 'Archive', title: 'Retail & Fashion', description: 'Fast-paced logistics solutions to keep up with consumer demand and seasonal trends.', content: 'In the fast-moving world of retail and fashion, speed and accuracy are key. We provide agile logistics solutions, including e-commerce fulfillment and store distribution, to help you stay ahead of trends.'},
    { id: 'i4', slug: 'healthcare', icon: 'Heart', title: 'Healthcare', description: 'Temperature-controlled and compliant shipping for pharmaceuticals and medical devices.', content: 'Our healthcare logistics services are fully compliant with industry regulations. We offer temperature-controlled shipping, secure warehousing, and specialized handling for pharmaceuticals, medical devices, and other healthcare products.'},
    { id: 'i5', slug: 'manufacturing', icon: 'Wrench', title: 'Manufacturing', description: 'Streamlined logistics for raw materials and finished goods to keep production lines moving.', content: 'We support your manufacturing operations with end-to-end logistics for raw materials and finished products. Our solutions are designed to optimize your supply chain, reduce costs, and minimize downtime.'},
    { id: 'i6', slug: 'energy', icon: 'Power', title: 'Energy', description: 'Specialized logistics for the energy sector, including oversized and hazardous materials.', content: 'We have the expertise and equipment to handle the unique logistics challenges of the energy sector. We can transport oversized equipment, hazardous materials, and provide support for remote project sites.'},
  ]
};

export const defaultCrmContacts = [
  { id: 'c1', name: 'Alice Johnson', phone: '+12025550186', status: 'New', tags: ['Lead', 'USA'], lastContacted: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() },
  { id: 'c2', name: 'Bob Williams', phone: '+442079460019', status: 'Contacted', tags: ['Customer', 'UK'], lastContacted: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() },
  { id: 'c3', name: 'Carlos Rodriguez', phone: '+34911234567', status: 'Qualified', tags: ['Lead', 'Spain'], lastContacted: new Date().toISOString() },
];

export const defaultLeads = [
  { id: 'l1', name: 'Global Imports Inc.', source: 'Website Form', status: 'New', assignedTo: 'John Doe', email: 'contact@globalimports.com' },
  { id: 'l2', name: 'Tech Gadgets Co.', source: 'Referral', status: 'Working', assignedTo: 'Jane Smith', email: 'purchasing@techgadgets.com' },
];

export const defaultOpportunities = [
  { id: 'o1', name: 'Q4 Shipping Contract', stage: 'Proposal', value: 50000, closeDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), contactId: 'c1' },
  { id: 'o2', name: 'Urgent Air Freight', stage: 'Negotiation', value: 15000, closeDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), contactId: 'c2' },
];

export const defaultWhatsappData = {
  isConnected: false,
  templates: [
    { id: 't1', name: 'Welcome Message', content: 'Hello {{name}}! Welcome to SWENLOG. How can we help you today with your logistics needs?' },
    { id: 't2', name: 'Quote Follow-up', content: 'Hi {{name}}, just following up on your recent quote request for {{service}}. Do you have any questions we can help with?' },
    { id: 't3', name: 'Shipment Update', content: 'Hi {{name}}, your shipment with tracking number {{trackingNumber}} is now {{status}}. You can view details here: {{link}}' },
    { id: 't4', name: 'Service Inquiry Response', content: 'Hello {{name}}, thank you for your interest in our {{service_name}} services. A specialist will be in touch with you shortly to discuss your requirements.' }
  ],
  flows: [
      { id: 'f1', name: 'New Lead Welcome Flow', trigger: 'New Contact', steps: [
          { type: 'send_message' as const, templateId: 't1', delay: '1 minute' },
          { type: 'wait' as const, duration: '24 hours' },
          { type: 'send_message' as const, templateId: 't2', delay: '0 minutes' },
      ]}
  ]
};
