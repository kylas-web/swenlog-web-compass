
import { useState } from "react";
import { Gauge, Zap, BarChart2, Rocket } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const PerformanceManager = () => {
  const [loadingTool, setLoadingTool] = useState<null | string>(null);

  // Handle actions
  const handleFlushCache = () => {
    setLoadingTool("cache");
    setTimeout(() => {
      setLoadingTool(null);
      toast({ title: "Cache flushed!", description: "All cached data has been cleared successfully." });
    }, 1200);
  };

  const handleRunSpeedTest = () => {
    setLoadingTool("speed");
    setTimeout(() => {
      setLoadingTool(null);
      toast({
        title: "Speed test completed",
        description: "Page loaded in 1.3s. Opportunities: Optimize image sizes, minify JS."
      });
    }, 1600);
  };

  const handleLandingPageOptimize = () => {
    setLoadingTool("optimizer");
    setTimeout(() => {
      setLoadingTool(null);
      toast({
        title: "Landing page optimization complete!",
        description: "Optimizations applied: Minified HTML, enabled preloading of critical CSS. 🚀"
      });
    }, 1500);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Gauge className="w-7 h-7 text-primary" />
        Website Performance Tools
      </h2>
      <ul className="space-y-4">
        {/* Cache Management */}
        <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <BarChart2 className="text-primary w-6 h-6" />
          <div className="flex-1">
            <div className="font-semibold">Cache Management</div>
            <div className="text-gray-500 text-sm mb-2">
              Manage static and dynamic caching for optimal delivery.
            </div>
            <Button
              size="sm"
              disabled={loadingTool === "cache"}
              onClick={handleFlushCache}
            >
              {loadingTool === "cache" ? "Flushing..." : "Flush Cache"}
            </Button>
          </div>
        </li>

        {/* Speed Optimizations */}
        <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <Zap className="text-yellow-500 w-6 h-6" />
          <div className="flex-1">
            <div className="font-semibold">Speed Optimizations</div>
            <div className="text-gray-500 text-sm mb-2">
              Optimize resource loading and improve page speed.
            </div>
            <Button
              size="sm"
              disabled={loadingTool === "speed"}
              onClick={handleRunSpeedTest}
            >
              {loadingTool === "speed" ? "Running test..." : "Run Speed Test"}
            </Button>
          </div>
        </li>

        {/* Landing Page Optimizer */}
        <li className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
          <Rocket className="text-green-500 w-6 h-6" />
          <div className="flex-1">
            <div className="font-semibold">Landing Page Optimizer</div>
            <div className="text-gray-500 text-sm mb-2">
              Test and improve landing page performance.
            </div>
            <Button
              size="sm"
              disabled={loadingTool === "optimizer"}
              onClick={handleLandingPageOptimize}
            >
              {loadingTool === "optimizer"
                ? "Optimizing..."
                : "Run Optimizer"}
            </Button>
          </div>
        </li>
      </ul>
      <div className="mt-6 text-gray-400 text-sm">
        * More detailed analytics and settings coming soon.
      </div>
    </section>
  );
};

export default PerformanceManager;
