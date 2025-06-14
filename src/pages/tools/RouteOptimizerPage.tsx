import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Map, Navigation, Clock, DollarSign, Fuel, Leaf, MapPin, Plus, Trash2 } from 'lucide-react';
import RouteStopInput from "../../components/tools/RouteStopInput";

const RouteOptimizerPage = () => {
  const [routes, setRoutes] = useState([
    { id: 1, name: '', location: '', latitude: '', longitude: '', priority: 'medium' },
    { id: 2, name: '', location: '', latitude: '', longitude: '', priority: 'medium' }
  ]);
  const [routeType, setRouteType] = useState("land");
  const [routeSubType, setRouteSubType] = useState("road");
  const [viaStops, setViaStops] = useState<any[]>([]);

  // Simulated AI suggestion (real implementation would use Puter.js)
  const aiSuggest = async (type: string, _term: string, setValue: (v: string) => void) => {
    // You would use Puter.js here for intelligent suggestions!
    if (routeType === "air") setValue("LHR"); // Just an example AI picks Heathrow for air
    else if (routeType === "ocean") setValue("CNSHA"); // Shanghai for ocean
    else setValue("Detected Place");
  };

  const addViaStop = () => {
    const newId = viaStops.length ? Math.max(...viaStops.map(v => v.id)) + 1 : 1000;
    setViaStops([...viaStops, {
      id: newId,
      name: "",
      location: "",
      latitude: "",
      longitude: "",
      priority: "medium",
      portOrAirport: "",
    }]);
  };
  const removeViaStop = (id: number) => setViaStops(viaStops.filter(v => v.id !== id));

  // Subcategories for each mode
  const routeTypeOptions = [
    {
      type: "land",
      label: "Land",
      sub: [
        { key: "road", label: "Road" },
        { key: "rail", label: "Rail" },
      ],
    },
    {
      type: "ocean",
      label: "Ocean",
      sub: [
        { key: "fcl", label: "Full Container (FCL)" },
        { key: "lcl", label: "Less Container (LCL)" },
      ],
    },
    {
      type: "air",
      label: "Air",
      sub: [
        { key: "express", label: "Express" },
        { key: "cargo", label: "General Cargo" },
      ],
    }
  ];

  const addRoute = () => {
    const newId = Math.max(...routes.map(r => r.id)) + 1;
    setRoutes([...routes, { 
      id: newId, 
      name: '', 
      location: '', 
      latitude: '', 
      longitude: '', 
      priority: 'medium' 
    }]);
  };

  const removeRoute = (id: number) => {
    if (routes.length > 2) {
      setRoutes(routes.filter(route => route.id !== id));
    }
  };

  const updateRoute = (id: number, field: string, value: string) => {
    setRoutes(routes.map(route => 
      route.id === id ? { ...route, [field]: value } : route
    ));
  };

  const optimizeRoute = async () => {
    setIsOptimizing(true);
    
    // Enhanced AI optimization simulation
    setTimeout(() => {
      const baseDistance = routes.length * 150 + Math.random() * 500;
      const baseTime = routes.length * 3 + Math.random() * 10;
      const baseFuel = baseDistance * 0.35;
      
      // Apply optimization adjustments
      let distanceMultiplier = 1;
      let timeMultiplier = 1;
      let fuelMultiplier = 1;
      
      if (optimizationGoal === 'distance') {
        distanceMultiplier = 0.85;
        timeMultiplier = 0.9;
        fuelMultiplier = 0.85;
      } else if (optimizationGoal === 'cost') {
        distanceMultiplier = 0.9;
        timeMultiplier = 0.95;
        fuelMultiplier = 0.8;
      } else {
        distanceMultiplier = 0.95;
        timeMultiplier = 0.8;
        fuelMultiplier = 0.9;
      }

      const optimizedDistance = baseDistance * distanceMultiplier;
      const optimizedTime = baseTime * timeMultiplier;
      const optimizedFuel = baseFuel * fuelMultiplier;

      const priorityRoutes = routes.filter(r => r.priority === 'high');
      const normalRoutes = routes.filter(r => r.priority === 'medium');
      const lowRoutes = routes.filter(r => r.priority === 'low');
      
      const orderedRoutes = [...priorityRoutes, ...normalRoutes, ...lowRoutes];

      const mockOptimized = {
        totalDistance: `${optimizedDistance.toFixed(0)} km`,
        estimatedTime: `${optimizedTime.toFixed(1)} hours`,
        fuelCost: `$${optimizedFuel.toFixed(0)}`,
        fuelConsumption: `${(optimizedFuel / 1.4).toFixed(0)}L`,
        carbonFootprint: `${(optimizedFuel * 0.002387).toFixed(2)} tons CO2`,
        costSavings: `$${(baseDistance * 0.15).toFixed(0)}`,
        timeSavings: `${((baseTime - optimizedTime) * 60).toFixed(0)} minutes`,
        routeEfficiency: `${((1 - distanceMultiplier) * 100).toFixed(1)}%`,
        optimizedOrder: orderedRoutes.map((route, index) => ({
          ...route,
          order: index + 1,
          estimatedArrival: new Date(Date.now() + (index + 1) * 4 * 60 * 60 * 1000).toLocaleDateString(),
          arrivalTime: `${8 + (index * 2)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
          distanceFromPrevious: index === 0 ? '0 km' : `${(50 + Math.random() * 100).toFixed(0)} km`,
          drivingTime: index === 0 ? '0 min' : `${(30 + Math.random() * 90).toFixed(0)} min`
        })),
        alternatives: [
          {
            name: 'Shortest Distance',
            distance: `${(optimizedDistance * 0.9).toFixed(0)} km`,
            time: `${(optimizedTime * 1.1).toFixed(1)} hours`,
            cost: `$${(optimizedFuel * 0.95).toFixed(0)}`
          },
          {
            name: 'Fastest Time',
            distance: `${(optimizedDistance * 1.05).toFixed(0)} km`,
            time: `${(optimizedTime * 0.85).toFixed(1)} hours`,
            cost: `$${(optimizedFuel * 1.1).toFixed(0)}`
          }
        ]
      };
      
      setOptimizedRoute(mockOptimized);
      setIsOptimizing(false);
    }, 3000);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'low': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Map className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900">Smart Route Optimizer</h1>
              <p className="mt-4 text-lg text-gray-600">
                AI-powered route optimization with advanced cost analysis and sustainability metrics
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Input Panel */}
              <div className="lg:col-span-2 bg-gray-50 rounded-lg p-8">
                {/* ROUTING TYPE SELECTION */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Route Type</label>
                  <div className="flex gap-3 mb-4">
                    {routeTypeOptions.map(rt => (
                      <button
                        key={rt.type}
                        onClick={() => {
                          setRouteType(rt.type);
                          setRouteSubType(rt.sub[0].key);
                        }}
                        className={`px-3 py-1 rounded ${routeType === rt.type
                          ? "bg-blue-600 text-white"
                          : "bg-white border text-blue-600"
                          }`}
                      >
                        {rt.label}
                      </button>
                    ))}
                  </div>
                  <div className="mb-2">
                    <label className="block text-xs font-medium text-gray-600">Subcategory</label>
                    <select
                      value={routeSubType}
                      onChange={e => setRouteSubType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    >
                      {routeTypeOptions.find(rt => rt.type === routeType)?.sub.map(sub => (
                        <option key={sub.key} value={sub.key}>{sub.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  {/* Start+End Points */}
                  {routes.map((route, idx) => (
                    <RouteStopInput
                      key={route.id}
                      stop={route}
                      index={idx}
                      total={routes.length}
                      onChange={updateRoute}
                      canRemove={routes.length > 2}
                      onRemove={removeRoute}
                      type={routeType}
                      subcategory={routeSubType}
                      showPolPod
                      aiSuggest={aiSuggest}
                    />
                  ))}
                  {/* VIA Stops */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-700 font-medium">Via Stops</span>
                      <button className="text-xs text-blue-600 hover:underline" type="button" onClick={addViaStop}>Add Via Stop</button>
                    </div>
                    {viaStops.map((stop, idx) => (
                      <RouteStopInput
                        key={stop.id}
                        stop={stop}
                        index={idx + 1}
                        total={viaStops.length + 2}
                        onChange={(id, field, value) => {
                          setViaStops(viaStops.map(s => s.id === id ? { ...s, [field]: value } : s));
                        }}
                        canRemove
                        onRemove={removeViaStop}
                        type={routeType}
                        subcategory={routeSubType}
                        isVia
                        aiSuggest={aiSuggest}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Vehicle & Optimization Settings */}
                <div className="grid md:grid-cols-2 gap-4 mb-6 p-4 bg-white rounded-lg border">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Type
                    </label>
                    <select
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    >
                      <option value="truck">🚛 Standard Truck</option>
                      <option value="van">🚐 Delivery Van</option>
                      <option value="motorcycle">🏍️ Motorcycle</option>
                      <option value="bicycle">🚲 Bicycle</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Optimize For
                    </label>
                    <select
                      value={optimizationGoal}
                      onChange={(e) => setOptimizationGoal(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    >
                      <option value="time">⏱️ Fastest Time</option>
                      <option value="distance">📏 Shortest Distance</option>
                      <option value="cost">💰 Lowest Cost</option>
                      <option value="eco">🌱 Most Eco-Friendly</option>
                    </select>
                  </div>
                </div>

                {/* Route Destinations */}
                <div className="space-y-4">
                  {routes.map((route, index) => (
                    <div key={route.id} className="p-4 bg-white rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                          <span className="font-medium text-gray-700">
                            {index === 0 ? 'Starting Point' : `Stop ${index}`}
                          </span>
                        </div>
                        {routes.length > 2 && (
                          <button
                            onClick={() => removeRoute(route.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-3 mb-3">
                        <input
                          type="text"
                          placeholder="Location name"
                          value={route.name}
                          onChange={(e) => updateRoute(route.id, 'name', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                        />
                        <input
                          type="text"
                          placeholder="Address or coordinates"
                          value={route.location}
                          onChange={(e) => updateRoute(route.id, 'location', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Latitude"
                          value={route.latitude}
                          onChange={(e) => updateRoute(route.id, 'latitude', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 text-sm"
                        />
                        <input
                          type="text"
                          placeholder="Longitude"
                          value={route.longitude}
                          onChange={(e) => updateRoute(route.id, 'longitude', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 text-sm"
                        />
                        <select
                          value={route.priority}
                          onChange={(e) => updateRoute(route.id, 'priority', e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 text-sm"
                        >
                          <option value="high">High Priority</option>
                          <option value="medium">Medium Priority</option>
                          <option value="low">Low Priority</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={optimizeRoute}
                  disabled={isOptimizing || routes.length < 2 || !routes.every(r => r.name && r.location)}
                  className="w-full mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isOptimizing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      AI Optimizing Route...
                    </>
                  ) : (
                    <>
                      <Navigation className="h-5 w-5 mr-2" />
                      Optimize Route with AI
                    </>
                  )}
                </button>
              </div>

              {/* Results Panel */}
              <div className="space-y-6">
                {optimizedRoute && (
                  <>
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <Navigation className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                        <div className="text-lg font-semibold text-blue-800">{optimizedRoute.totalDistance}</div>
                        <div className="text-xs text-blue-600">Total Distance</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                        <Clock className="h-6 w-6 text-green-600 mx-auto mb-1" />
                        <div className="text-lg font-semibold text-green-800">{optimizedRoute.estimatedTime}</div>
                        <div className="text-xs text-green-600">Travel Time</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <DollarSign className="h-6 w-6 text-yellow-600 mx-auto mb-1" />
                        <div className="text-lg font-semibold text-yellow-800">{optimizedRoute.fuelCost}</div>
                        <div className="text-xs text-yellow-600">Fuel Cost</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <Leaf className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                        <div className="text-lg font-semibold text-purple-800">{optimizedRoute.carbonFootprint}</div>
                        <div className="text-xs text-purple-600">CO2 Emissions</div>
                      </div>
                    </div>

                    {/* Savings Summary */}
                    <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Optimization Results</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium">Cost Savings</div>
                          <div className="text-green-100">{optimizedRoute.costSavings}</div>
                        </div>
                        <div>
                          <div className="font-medium">Time Saved</div>
                          <div className="text-green-100">{optimizedRoute.timeSavings}</div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="font-medium">Route Efficiency</div>
                        <div className="text-green-100">{optimizedRoute.routeEfficiency} improvement</div>
                      </div>
                    </div>

                    {/* Alternative Routes */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                      <h4 className="font-semibold text-gray-800 mb-3">Alternative Routes</h4>
                      <div className="space-y-2">
                        {optimizedRoute.alternatives.map((alt: any, index: number) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-md">
                            <div className="font-medium text-gray-800 mb-1">{alt.name}</div>
                            <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                              <div>{alt.distance}</div>
                              <div>{alt.time}</div>
                              <div>{alt.cost}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {!optimizedRoute && (
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <Map className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Configure your route stops</p>
                    <p className="text-sm text-gray-500">Add locations and click optimize to see AI-powered route suggestions</p>
                  </div>
                )}
              </div>
            </div>

            {/* Optimized Route Details */}
            {optimizedRoute && (
              <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Optimized Stop Sequence</h3>
                <div className="space-y-3">
                  {optimizedRoute.optimizedOrder.map((stop: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-4">
                          {stop.order}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{stop.name || `Stop ${stop.order}`}</div>
                          <div className="text-sm text-gray-600">{stop.location}</div>
                        </div>
                        <div className={`ml-4 px-2 py-1 rounded-full text-xs border ${getPriorityColor(stop.priority)}`}>
                          {stop.priority}
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <div className="font-medium">{stop.arrivalTime}</div>
                        <div>{stop.estimatedArrival}</div>
                        {index > 0 && (
                          <div className="text-xs text-gray-500">
                            {stop.distanceFromPrevious} • {stop.drivingTime}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RouteOptimizerPage;
