
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  FileText, 
  BookOpen, 
  Podcast, 
  Calculator, 
  Map, 
  Bot,
  TrendingUp,
  Shield,
  Smartphone,
  Users,
  Video,
  Globe
} from 'lucide-react';

// Declare puter as global to avoid TypeScript errors
declare global {
  interface Window {
    puter: any;
  }
}

const ResourcesPage = () => {
  const [aiResponse, setAiResponse] = useState<string>('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');

  const handleAiQuery = async () => {
    if (!aiQuestion.trim()) return;
    
    setAiLoading(true);
    try {
      if (window.puter && window.puter.ai) {
        const response = await window.puter.ai.chat(aiQuestion);
        setAiResponse(response);
      } else {
        setAiResponse('AI service is loading... Please try again in a moment.');
      }
    } catch (error) {
      setAiResponse('Error connecting to AI service. Please try again later.');
    } finally {
      setAiLoading(false);
    }
  };

  const resourceCategories = [
    {
      title: "Educational Resources",
      icon: BookOpen,
      color: "bg-blue-600",
      resources: [
        { title: 'Supply Chain Academy', description: 'Interactive courses on logistics fundamentals and best practices.' },
        { title: 'Freight Calculator Guide', description: 'Step-by-step tutorials on calculating shipping costs and taxes.' },
        { title: 'Customs Documentation Handbook', description: 'Comprehensive guide to required paperwork for different countries.' },
        { title: 'Incoterms 2020 Interactive Guide', description: 'Visual explanations of shipping terms with real-world examples.' }
      ]
    },
    {
      title: "Digital Tools & Calculators",
      icon: Calculator,
      color: "bg-green-600",
      resources: [
        { title: 'Freight Rate Calculator', description: 'Real-time shipping cost estimates for different transport modes.' },
        { title: 'Container Load Optimizer', description: 'Maximize container space utilization efficiently.' },
        { title: 'Transit Time Calculator', description: 'Estimated delivery times between global ports and cities.' },
        { title: 'Currency Converter', description: 'Real-time exchange rates for international transactions.' },
        { title: 'Customs Duty Calculator', description: 'Estimate import/export duties and taxes by country.' }
      ]
    },
    {
      title: "AI-Powered Tools",
      icon: Bot,
      color: "bg-purple-600",
      resources: [
        { title: 'Smart Route Optimizer', description: 'AI suggests most efficient shipping routes based on cost and time.' },
        { title: 'Demand Forecasting Assistant', description: 'Predictive analytics for inventory planning and demand.' },
        { title: 'Risk Assessment AI', description: 'Automated analysis of shipping risks and weather patterns.' },
        { title: 'Document Scanner & Processor', description: 'AI-powered tool to extract data from shipping documents.' },
        { title: 'Price Prediction Engine', description: 'ML-based forecasting of freight rates and market trends.' }
      ]
    },
    {
      title: "Industry Insights & Reports",
      icon: TrendingUp,
      color: "bg-orange-600",
      resources: [
        { title: 'Global Trade Report', description: 'Monthly analysis of shipping trends and market conditions.' },
        { title: 'Sustainability Tracker', description: 'Carbon footprint calculator and green logistics recommendations.' },
        { title: 'Port Performance Dashboard', description: 'Real-time data on port delays and efficiency metrics.' },
        { title: 'Trade Lane Analytics', description: 'Detailed insights on shipping routes and performance.' }
      ]
    },
    {
      title: "Interactive Tools",
      icon: Map,
      color: "bg-teal-600",
      resources: [
        { title: 'Port Locator Map', description: 'Interactive global map showing ports and real-time status.' },
        { title: 'Packaging Advisor', description: 'Recommend optimal packaging based on product and destination.' },
        { title: 'Insurance Calculator', description: 'Cargo insurance cost estimator with coverage recommendations.' },
        { title: 'Compliance Checker', description: 'Verify shipments meet destination country requirements.' }
      ]
    },
    {
      title: "Mobile & Integration",
      icon: Smartphone,
      color: "bg-indigo-600",
      resources: [
        { title: 'Mobile Tracking App', description: 'Real-time shipment tracking with push notifications.' },
        { title: 'API Documentation', description: 'For developers integrating Swenlog services.' },
        { title: 'ERP Integration Guides', description: 'Connect with popular business systems.' },
        { title: 'Webhook Builder', description: 'Set up automated notifications and data syncing.' }
      ]
    },
    {
      title: "Community & Support",
      icon: Users,
      color: "bg-pink-600",
      resources: [
        { title: 'Shipper Community Forum', description: 'Platform for customers to share experiences and ask questions.' },
        { title: 'Expert Webinar Series', description: 'Regular online sessions with logistics professionals.' },
        { title: 'Case Study Library', description: 'Real success stories from different industries.' },
        { title: 'Video Tutorial Library', description: 'Step-by-step guides for using Swenlog services.' }
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Resources</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Knowledge to Power Your Business
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Explore our comprehensive collection of tools, guides, and AI-powered solutions to optimize your logistics operations.
              </p>
            </div>

            {/* AI Assistant Tool */}
            <div className="mx-auto mt-16 max-w-2xl">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
                <div className="flex items-center mb-4">
                  <Bot className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">AI Logistics Assistant</h3>
                </div>
                <p className="mb-4 text-purple-100">Ask our AI assistant any logistics-related question and get instant expert advice.</p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    placeholder="Ask about shipping, customs, routes, or any logistics question..."
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleAiQuery()}
                  />
                  <button
                    onClick={handleAiQuery}
                    disabled={aiLoading}
                    className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                  >
                    {aiLoading ? 'Thinking...' : 'Ask AI'}
                  </button>
                </div>
                
                {aiResponse && (
                  <div className="mt-4 p-4 bg-white/10 rounded-lg">
                    <p className="text-sm text-purple-100">{aiResponse}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Resource Categories */}
            <div className="mx-auto mt-16 max-w-7xl">
              {resourceCategories.map((category) => (
                <div key={category.title} className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className={`${category.color} p-3 rounded-lg mr-4`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.resources.map((resource) => (
                      <div key={resource.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h4>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                          Access Tool →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Original Resources Section */}
            <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Resources</h3>
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <FileText className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    Whitepaper: The Future of Supply Chains
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">An in-depth look at the trends shaping modern logistics.</dd>
                </div>
                
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <BookOpen className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    Guide: International Shipping Checklist
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">A comprehensive guide to help you navigate the complexities of international shipping.</dd>
                </div>
                
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <Podcast className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    Podcast: Logistics Unlocked
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">Tune in to our podcast for expert interviews and industry insights.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Puter.js Script */}
      <script src="https://js.puter.com/v2/"></script>
    </>
  );
};

export default ResourcesPage;
