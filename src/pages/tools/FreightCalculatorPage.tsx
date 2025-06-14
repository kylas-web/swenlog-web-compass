
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calculator, Ship, Plane, Truck, Package, MapPin, Calendar, DollarSign } from 'lucide-react';

const FreightCalculatorPage = () => {
  const [formData, setFormData] = useState({
    weight: '',
    dimensions: { length: '', width: '', height: '' },
    origin: '',
    destination: '',
    transportMode: 'ocean',
    cargoType: 'general',
    priority: 'standard',
    insurance: false
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: { ...prev.dimensions, [child]: value }
      }));
    } else if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const calculateRate = async () => {
    setLoading(true);
    
    // Simulate API call with enhanced calculations
    setTimeout(() => {
      const weight = parseFloat(formData.weight) || 0;
      const volume = (parseFloat(formData.dimensions.length) || 0) * 
                     (parseFloat(formData.dimensions.width) || 0) * 
                     (parseFloat(formData.dimensions.height) || 0) / 1000000; // Convert to cubic meters
      
      let baseRate = 0;
      let transitDays = 0;
      
      switch (formData.transportMode) {
        case 'ocean': 
          baseRate = 2.5; 
          transitDays = 25;
          break;
        case 'air': 
          baseRate = 8.0; 
          transitDays = 3;
          break;
        case 'ground': 
          baseRate = 1.8; 
          transitDays = 7;
          break;
      }
      
      // Priority adjustments
      if (formData.priority === 'express') {
        baseRate *= 1.5;
        transitDays = Math.ceil(transitDays * 0.6);
      }
      
      // Cargo type adjustments
      if (formData.cargoType === 'hazardous') baseRate *= 1.8;
      if (formData.cargoType === 'refrigerated') baseRate *= 1.4;
      if (formData.cargoType === 'fragile') baseRate *= 1.2;
      
      const baseAmount = Math.max(weight * baseRate, volume * baseRate * 167);
      const insuranceCost = formData.insurance ? baseAmount * 0.02 : 0;
      const totalCost = baseAmount + insuranceCost;
      
      setResult({
        baseAmount: baseAmount.toFixed(2),
        insuranceCost: insuranceCost.toFixed(2),
        totalCost: totalCost.toFixed(2),
        transitDays,
        volume: volume.toFixed(3),
        chargeableWeight: Math.max(weight, volume * 167).toFixed(2),
        estimatedDelivery: new Date(Date.now() + transitDays * 24 * 60 * 60 * 1000).toLocaleDateString(),
        breakdown: {
          freight: baseAmount.toFixed(2),
          fuel: (baseAmount * 0.15).toFixed(2),
          handling: (baseAmount * 0.08).toFixed(2),
          documentation: '25.00'
        }
      });
      
      setLoading(false);
    }, 1500);
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case 'ocean': return <Ship className="h-5 w-5" />;
      case 'air': return <Plane className="h-5 w-5" />;
      case 'ground': return <Truck className="h-5 w-5" />;
      default: return <Package className="h-5 w-5" />;
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900">Enhanced Freight Rate Calculator</h1>
              <p className="mt-4 text-lg text-gray-600">
                Get detailed shipping cost estimates with comprehensive breakdown and analysis
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Shipment Details</h3>
                
                <div className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Package className="h-4 w-4 inline mr-1" />
                        Weight (kg)
                      </label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter weight"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Transport Mode
                      </label>
                      <select
                        name="transportMode"
                        value={formData.transportMode}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="ocean">🚢 Ocean Freight</option>
                        <option value="air">✈️ Air Freight</option>
                        <option value="ground">🚛 Ground Transport</option>
                      </select>
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dimensions (cm)
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="number"
                        name="dimensions.length"
                        value={formData.dimensions.length}
                        onChange={handleInputChange}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Length"
                      />
                      <input
                        type="number"
                        name="dimensions.width"
                        value={formData.dimensions.width}
                        onChange={handleInputChange}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Width"
                      />
                      <input
                        type="number"
                        name="dimensions.height"
                        value={formData.dimensions.height}
                        onChange={handleInputChange}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Height"
                      />
                    </div>
                  </div>

                  {/* Routes */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="h-4 w-4 inline mr-1" />
                        Origin Port/City
                      </label>
                      <input
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Shanghai, Los Angeles"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="h-4 w-4 inline mr-1" />
                        Destination Port/City
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., New York, Hamburg"
                      />
                    </div>
                  </div>

                  {/* Advanced Options */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cargo Type
                      </label>
                      <select
                        name="cargoType"
                        value={formData.cargoType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="general">General Cargo</option>
                        <option value="hazardous">Hazardous Materials</option>
                        <option value="refrigerated">Refrigerated</option>
                        <option value="fragile">Fragile Items</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priority
                      </label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="standard">Standard</option>
                        <option value="express">Express</option>
                      </select>
                    </div>
                  </div>

                  {/* Insurance */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="insurance"
                      checked={formData.insurance}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      Add cargo insurance (2% of shipment value)
                    </label>
                  </div>

                  <button
                    onClick={calculateRate}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Calculating...
                      </>
                    ) : (
                      <>
                        <Calculator className="h-4 w-4 mr-2" />
                        Calculate Detailed Rate
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                {result && (
                  <>
                    {/* Main Cost Display */}
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">Total Shipping Cost</h3>
                        {getModeIcon(formData.transportMode)}
                      </div>
                      <div className="text-3xl font-bold mb-2">${result.totalCost}</div>
                      <div className="flex items-center text-green-100">
                        <Calendar className="h-4 w-4 mr-1" />
                        Estimated delivery: {result.estimatedDelivery}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="text-2xl font-bold text-blue-600">{result.transitDays}</div>
                        <div className="text-sm text-gray-600">Transit Days</div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="text-2xl font-bold text-purple-600">{result.chargeableWeight}</div>
                        <div className="text-sm text-gray-600">Chargeable Weight (kg)</div>
                      </div>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Cost Breakdown</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Base Freight</span>
                          <span className="font-medium">${result.breakdown.freight}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Fuel Surcharge (15%)</span>
                          <span className="font-medium">${result.breakdown.fuel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Handling Fee (8%)</span>
                          <span className="font-medium">${result.breakdown.handling}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Documentation</span>
                          <span className="font-medium">${result.breakdown.documentation}</span>
                        </div>
                        {formData.insurance && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Insurance (2%)</span>
                            <span className="font-medium">${result.insuranceCost}</span>
                          </div>
                        )}
                        <div className="border-t pt-2 flex justify-between font-bold">
                          <span>Total Cost</span>
                          <span className="text-green-600">${result.totalCost}</span>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-medium text-blue-800 mb-2">Important Notes</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Volumetric weight: {result.volume} m³</li>
                        <li>• Rates are estimates and may vary based on market conditions</li>
                        <li>• Additional fees may apply for customs clearance</li>
                        <li>• Contact us for precise quotes and booking</li>
                      </ul>
                    </div>
                  </>
                )}

                {!result && (
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Enter shipment details to calculate freight rates</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FreightCalculatorPage;
