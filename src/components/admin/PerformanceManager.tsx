
import { Gauge, Zap, BarChart2, Rocket } from "lucide-react";

const performanceTools = [
  {
    name: "Cache Management",
    description: "Manage static and dynamic caching for optimal delivery.",
    icon: <BarChart2 className="text-primary w-6 h-6" />,
  },
  {
    name: "Speed Optimizations",
    description: "Optimize resource loading and improve page speed.",
    icon: <Zap className="text-yellow-500 w-6 h-6" />,
  },
  {
    name: "Landing Page Optimizer",
    description: "Test and improve landing page performance.",
    icon: <Rocket className="text-green-500 w-6 h-6" />,
  },
];

const PerformanceManager = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Gauge className="w-7 h-7 text-primary" />
        Website Performance Tools
      </h2>
      <ul className="space-y-4">
        {performanceTools.map((tool) => (
          <li key={tool.name} className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            {tool.icon}
            <div>
              <div className="font-semibold">{tool.name}</div>
              <div className="text-gray-500 text-sm">{tool.description}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-gray-400 text-sm">* Integrate each tool module as needed for full functionality.</div>
    </section>
  );
};

export default PerformanceManager;
