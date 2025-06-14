
import { Shield, Lock, Bug, Cloud } from "lucide-react";

const securityTools = [
  {
    name: "Access Control",
    description: "Configure user roles and permissions.",
    icon: <Lock className="text-primary w-6 h-6" />,
  },
  {
    name: "Bot Protection",
    description: "Activate reCAPTCHA and anti-bot features.",
    icon: <Bug className="text-yellow-500 w-6 h-6" />,
  },
  {
    name: "SSL/HTTPS Settings",
    description: "Manage certificate and HTTPS preferences.",
    icon: <Cloud className="text-green-500 w-6 h-6" />,
  },
];

const SecurityManager = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Shield className="w-7 h-7 text-primary" />
        Website Security Tools
      </h2>
      <ul className="space-y-4">
        {securityTools.map((tool) => (
          <li key={tool.name} className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            {tool.icon}
            <div>
              <div className="font-semibold">{tool.name}</div>
              <div className="text-gray-500 text-sm">{tool.description}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-gray-400 text-sm">* Integrate each module as required for enhanced site security.</div>
    </section>
  );
};

export default SecurityManager;
