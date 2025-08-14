
import { Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react';
import InteractiveMap from './InteractiveMap';

const Contact = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch with SWENLOG</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With offices across India, we're always close to your business. Contact our logistics experts today to discuss your supply chain solutions.
          </p>
        </div>

        {/* Interactive Map Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Strategic Locations</h3>
          <InteractiveMap />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Corporate Headquarters */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Corporate Headquarters</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Corporate Office</div>
                  <div className="text-gray-600">
                    SWENLOG SUPPLY CHAIN SOLUTIONS PVT LTD<br />
                    1st Floor, 3rd Block, 307, 5th A Cross Rd<br />
                    HRBR Layout, Kalyan Nagar<br />
                    Bengaluru, Karnataka - 560043
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">+91-80-4152-XXXX</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">info@swenlog.co</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Business Hours</div>
                  <div className="text-gray-600">Monday - Friday: 9:30 AM - 6:00 PM<br />Saturday: 9:30 AM - 2:00 PM</div>
                </div>
              </div>
            </div>

            {/* Registered Office */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Registered Office</h4>
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-2 rounded">
                  <MapPin className="h-4 w-4 text-red-600" />
                </div>
                <div className="text-sm text-gray-600">
                  1st Floor, No. 45, 1st Main Road<br />
                  West Shenoy Nagar<br />
                  Chennai, Tamil Nadu - 600030
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white border rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Detailed Quote</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              
              <input
                type="text"
                placeholder="Company Name*"
                className="w-full bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none mb-4"
                required
              />
              
              <select className="w-full bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none mb-4" required>
                <option value="">Select Service*</option>
                <option>Ocean Freight</option>
                <option>Air Freight</option>
                <option>Ground Transportation</option>
                <option>Customs Brokerage</option>
                <option>Warehousing & Distribution</option>
                <option>Supply Chain Solutions</option>
              </select>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Origin Location*"
                  className="bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Destination Location*"
                  className="bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Cargo Weight (kg)"
                  className="bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Cargo Dimensions (LxWxH)"
                  className="bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <select className="w-full bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none mb-4">
                <option value="">Cargo Type</option>
                <option>General Cargo</option>
                <option>Hazardous Materials</option>
                <option>Temperature Controlled</option>
                <option>Oversized/Heavy Lift</option>
                <option>Perishable Goods</option>
                <option>Electronics</option>
                <option>Automotive Parts</option>
                <option>Textiles</option>
                <option>Other</option>
              </select>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="date"
                  placeholder="Preferred Ship Date"
                  className="bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                />
                <select className="bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none">
                  <option value="">Urgency Level</option>
                  <option>Standard</option>
                  <option>Express</option>
                  <option>Urgent (24-48 hours)</option>
                  <option>Emergency</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Additional Services Needed:</label>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <label className="flex items-center text-gray-700">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Insurance
                  </label>
                  <label className="flex items-center text-gray-700">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Customs Clearance
                  </label>
                  <label className="flex items-center text-gray-700">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Door-to-Door Delivery
                  </label>
                  <label className="flex items-center text-gray-700">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Packaging Services
                  </label>
                  <label className="flex items-center text-gray-700">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Warehousing
                  </label>
                  <label className="flex items-center text-gray-700">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Real-time Tracking
                  </label>
                </div>
              </div>
              
              <textarea
                placeholder="Detailed Description of Your Shipping Requirements..."
                rows={4}
                className="w-full bg-gray-50 text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none mb-6"
              ></textarea>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Get Detailed Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
