
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calculator, Ship, Plane, Truck } from 'lucide-react';

const FreightCalculatorPage = () => {
  const [formData, setFormData] = useState({
    weight: '',
    dimensions: { length: '', width: '', height: '' },
    origin: '',
    destination: '',
    transportMode: 'ocean'
  });
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: { ...prev.dimensions, [child]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const calculateRate = () => {
    const weight = parseFloat(formData.weight) || 0;
    const volume = (parseFloat(formData.dimensions.length) || 0) * 
                   (parseFloat(formData.dimensions.width) || 0) * 
                   (parseFloat(formData.dimensions.height) || 0);
    
    let baseRate = 0;
    switch (formData.transportMode) {
      case 'ocean': baseRate = 2.5; break;
      case 'air': baseRate = 8.0; break;
      case 'ground': baseRate = 1.8; break;
    }
    
    const calculatedRate = Math.max(weight * baseRate, volume * baseRate * 0.167);
    setResult(calculatedRate);
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900">Freight Rate Calculator</h1>
              <p className="mt-4 text-lg text-gray-600">
                Get instant shipping cost estimates for different transport modes
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="ocean">Ocean Freight</option>
                    <option value="air">Air Freight</option>
                    <option value="ground">Ground Transport</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dimensions (cm)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <input
                      type="number"
                      name="dimensions.length"
                      value={formData.dimensions.length}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Length"
                    />
                    <input
                      type="number"
                      name="dimensions.width"
                      value={formData.dimensions.width}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Width"
                    />
                    <input
                      type="number"
                      name="dimensions.height"
                      value={formData.dimensions.height}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Height"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Origin
                  </label>
                  <input
                    type="text"
                    name="origin"
                    value={formData.origin}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Origin port/city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Destination port/city"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    onClick={calculateRate}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Calculate Freight Rate
                  </button>
                </div>

                {result && (
                  <div className="md:col-span-2 mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                    <h3 className="text-lg font-semibold text-green-800">Estimated Cost</h3>
                    <p className="text-2xl font-bold text-green-600">${result.toFixed(2)}</p>
                    <p className="text-sm text-green-600 mt-1">
                      *This is an estimate. Final rates may vary based on additional factors.
                    </p>
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
