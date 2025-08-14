import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from './ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

interface BranchLocation {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number];
  phone?: string;
  email?: string;
  type: 'registered' | 'corporate' | 'branch';
}

const branchLocations: BranchLocation[] = [
  {
    id: 'registered',
    name: 'Registered Office - Chennai',
    address: '1st Floor, No. 45, 1st Main Road, West Shenoy Nagar, Chennai, Tamil Nadu - 600030',
    coordinates: [80.2707, 13.0827],
    phone: '+91-44-2854-XXXX',
    email: 'chennai@swenlog.co',
    type: 'registered'
  },
  {
    id: 'corporate',
    name: 'Corporate Office - Bengaluru',
    address: '1st Floor, 3rd Block, 307, 5th A Cross Rd, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka - 560043',
    coordinates: [77.6413, 13.0294],
    phone: '+91-80-4152-XXXX',
    email: 'bangalore@swenlog.co',
    type: 'corporate'
  },
  {
    id: 'coimbatore',
    name: 'Coimbatore Branch',
    address: 'No: 103, First Floor, Kumaran Towers, 328, Trichy Road, (Near VGM Hospital), Singanallur, Coimbatore - 641005',
    coordinates: [76.9558, 11.0168],
    phone: '+91-422-XXX-XXXX',
    email: 'coimbatore@swenlog.co',
    type: 'branch'
  },
  {
    id: 'tuticorin',
    name: 'Tuticorin Branch',
    address: '#57/6, Seelan Dozen, Muniasamypuram II Street, Tuticorin - 628003',
    coordinates: [78.1348, 8.7642],
    phone: '+91-461-XXX-XXXX',
    email: 'tuticorin@swenlog.co',
    type: 'branch'
  },
  {
    id: 'cochin',
    name: 'Cochin Branch',
    address: 'A13, The Office, Metro Pillar 720, 4th Floor, JOS Annex Building, JOS Junction, MG Road, Cochin - 682016',
    coordinates: [76.2673, 9.9312],
    phone: '+91-484-XXX-XXXX',
    email: 'cochin@swenlog.co',
    type: 'branch'
  },
  {
    id: 'mumbai',
    name: 'Mumbai Branch',
    address: '7th Floor, 701, Casa Balanca, Sector 11, CBD Belapur, Navi Mumbai, Thane, Maharashtra - 400614',
    coordinates: [73.0479, 19.0176],
    phone: '+91-22-XXX-XXXX',
    email: 'mumbai@swenlog.co',
    type: 'branch'
  },
  {
    id: 'delhi',
    name: 'Delhi Branch',
    address: '10th Floor, Unit No 1099, Vegas Mall, Block B, Sector 14, Dwarka, New Delhi, Delhi - 110078',
    coordinates: [77.0269, 28.5706],
    phone: '+91-11-XXX-XXXX',
    email: 'delhi@swenlog.co',
    type: 'branch'
  }
];

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<BranchLocation | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [77.5946, 12.9716], // Center on South India
      zoom: 5
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each branch
    branchLocations.forEach((branch) => {
      const markerColor = branch.type === 'registered' ? '#dc2626' : 
                         branch.type === 'corporate' ? '#2563eb' : '#059669';
      
      const marker = new mapboxgl.Marker({ color: markerColor })
        .setLngLat(branch.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`
          <div class="p-2">
            <h3 class="font-bold text-sm">${branch.name}</h3>
            <p class="text-xs text-gray-600 mt-1">${branch.address}</p>
            ${branch.phone ? `<p class="text-xs mt-1">📞 ${branch.phone}</p>` : ''}
          </div>
        `))
        .addTo(map.current!);

      marker.getElement().addEventListener('click', () => {
        setSelectedBranch(branch);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <h3 className="text-lg font-semibold mb-4">Interactive Branch Locations Map</h3>
        <p className="text-gray-600 mb-4">Please enter your Mapbox public token to view the interactive map:</p>
        <input
          type="text"
          placeholder="Enter Mapbox Public Token"
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => setMapboxToken(e.target.value)}
        />
        <p className="text-sm text-gray-500 mt-2">
          Get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mapbox.com</a>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <div ref={mapContainer} className="w-full h-96 rounded-lg shadow-lg" />
        
        {/* Legend */}
        <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
          <h4 className="font-semibold text-sm mb-2">Office Types</h4>
          <div className="space-y-1 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
              <span>Registered Office</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
              <span>Corporate Office</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
              <span>Branch Office</span>
            </div>
          </div>
        </div>
      </div>

      {/* Branch Details Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {branchLocations.map((branch) => (
          <Card 
            key={branch.id} 
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedBranch?.id === branch.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
            }`}
            onClick={() => setSelectedBranch(branch)}
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  branch.type === 'registered' ? 'bg-red-100' :
                  branch.type === 'corporate' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  <MapPin className={`h-4 w-4 ${
                    branch.type === 'registered' ? 'text-red-600' :
                    branch.type === 'corporate' ? 'text-blue-600' : 'text-green-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-1">{branch.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{branch.address}</p>
                  {branch.phone && (
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      <Phone className="h-3 w-3 mr-1" />
                      {branch.phone}
                    </div>
                  )}
                  {branch.email && (
                    <div className="flex items-center text-xs text-gray-500">
                      <Mail className="h-3 w-3 mr-1" />
                      {branch.email}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;