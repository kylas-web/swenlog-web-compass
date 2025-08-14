import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Ship, Globe, Navigation, Anchor, MapPin, Waves, Wind, Eye, Maximize, Minimize } from 'lucide-react';

const MarineTrafficPage = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const marineTrafficUrl = "https://www.marinetraffic.com/en/ais/home/centerx:1.9/centery:51.6/zoom:6";

  return (
    <>
      {!isFullscreen && <Header />}
      <main className={isFullscreen ? "min-h-screen" : "pt-16 min-h-screen"}>
        <div className={`${isFullscreen ? 'h-screen' : 'bg-gradient-to-br from-blue-50 to-cyan-50 py-8'}`}>
          {!isFullscreen && (
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Marine Traffic Monitor
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Real-time vessel tracking and global maritime traffic monitoring
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <Ship className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">Live Vessel Tracking</h3>
                  <p className="text-sm text-gray-600 mt-2">Track ships worldwide in real-time</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <Globe className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">Global Coverage</h3>
                  <p className="text-sm text-gray-600 mt-2">Worldwide AIS data coverage</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <Navigation className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">Route Planning</h3>
                  <p className="text-sm text-gray-600 mt-2">Plan optimal maritime routes</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <Anchor className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">Port Information</h3>
                  <p className="text-sm text-gray-600 mt-2">Detailed port and harbor data</p>
                </div>
              </div>
            </div>
          )}

          <div className={`${isFullscreen ? 'h-full' : 'mx-auto max-w-7xl px-6 lg:px-8'}`}>
            <div className={`bg-white rounded-lg shadow-xl overflow-hidden ${isFullscreen ? 'h-full' : 'h-[800px]'}`}>
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Waves className="h-5 w-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Live Marine Traffic</h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Live Data</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Wind className="h-4 w-4" />
                    <span>Weather Overlay Available</span>
                  </div>
                  <button
                    onClick={toggleFullscreen}
                    className="flex items-center space-x-2 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {isFullscreen ? (
                      <>
                        <Minimize className="h-4 w-4" />
                        <span>Exit Fullscreen</span>
                      </>
                    ) : (
                      <>
                        <Maximize className="h-4 w-4" />
                        <span>Fullscreen</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className={`relative ${isFullscreen ? 'h-full' : 'h-full'}`}>
                {loading && (
                  <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading Marine Traffic Data...</p>
                    </div>
                  </div>
                )}
                
                <iframe
                  src={marineTrafficUrl}
                  className="w-full h-full border-0"
                  title="Marine Traffic Monitor"
                  allow="geolocation; fullscreen"
                  loading="lazy"
                  onLoad={() => setLoading(false)}
                />
                
                {/* Overlay Controls */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Cargo Ships</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Tankers</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Passenger</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Other</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg">
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Focus: European Waters</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Data provided by MarineTraffic.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {!isFullscreen && <Footer />}
    </>
  );
};

export default MarineTrafficPage;