
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Map, Navigation, Clock, DollarSign } from 'lucide-react';

const RouteOptimizerPage = () => {
  const [routes, setRoutes] = useState([
    { name: '', location: '' }
  ]);
  const [optimizedRoute, setOptimizedRoute] = useState<any>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const addRoute = () => {
    setRoutes([...routes, { name: '', location: '' }]);
  };

  const updateRoute = (index: number, field: string, value: string) => {
    const updatedRoutes = routes.map((route, i) => 
      i === index ? { ...route, [field]: value } : route
    );
    setRoutes(updatedRoutes);
  };

  const optimizeRoute = async () => {
    setIsOptimizing(true);
    
    // Simulate AI optimization
    setTimeout(() => {
      const mockOptimized = {
        totalDistance: '2,450 km',
        estimatedTime: '28 hours',
        fuelCost: '$485',
        carbonFootprint: '1.2 tons CO2',
        optimizedOrder: routes.map((route, index) => ({
          ...route,
          order: index + 1,
          estimatedArrival: new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000).toLocaleDateString()
        }))
      };
      setOptimizedRoute(mockOptimized);
      setIsOptimizing(false);
    }, 2000);
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Map className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900">Smart Route Optimizer</h1>
              <p className="mt-4 text-lg text-gray-600">
                AI-powered route optimization for cost and time efficiency
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Route Destinations</h3>
                {routes.map((route, index) => (
                  <div key={index} className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Location name"
                      value={route.name}
                      onChange={(e) => updateRoute(index, 'name', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Address or coordinates"
                      value={route.location}
                      onChange={(e) => updateRoute(index, 'location', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                ))}
                
                <div className="flex gap-3">
                  <button
                    onClick={addRoute}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Add Stop
                  </button>
                  <button
                    onClick={optimizeRoute}
                    disabled={isOptimizing || routes.length < 2}
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    {isOptimizing ? 'Optimizing...' : 'Optimize Route'}
                  </button>
                </div>
              </div>

              {optimizedRoute && (
                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Optimized Route</h3>
                  
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Navigation className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-lg font-semibold">{optimizedRoute.totalDistance}</div>
                      <div className="text-sm text-gray-600">Total Distance</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-lg font-semibold">{optimizedRoute.estimatedTime}</div>
                      <div className="text-sm text-gray-600">Travel Time</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <DollarSign className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                      <div className="text-lg font-semibold">{optimizedRoute.fuelCost}</div>
                      <div className="text-sm text-gray-600">Fuel Cost</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-lg font-semibold">{optimizedRoute.carbonFootprint}</div>
                      <div className="text-sm text-gray-600">CO2 Emissions</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Optimized Stop Order:</h4>
                    {optimizedRoute.optimizedOrder.map((stop: any, index: number) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md mb-2">
                        <div>
                          <span className="font-medium">#{stop.order}</span> - {stop.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          ETA: {stop.estimatedArrival}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RouteOptimizerPage;
