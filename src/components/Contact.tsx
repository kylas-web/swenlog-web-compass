
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Contact our logistics experts today to discuss your shipping needs and get a customized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-300">+1 (800) 555-SWEN</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">info@swenlog.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-300">First Floor, 630, 4th C Main Rd<br />Bhuvanagiri, OMBR Layout<br />Kasturi Nagar, Bengaluru<br />Karnataka 560043</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Business Hours</div>
                  <div className="text-gray-300">Opens 9:30 AM To 5 PM<br />Monday - Friday</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Request a Detailed Quote</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              
              <input
                type="text"
                placeholder="Company Name*"
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-4"
                required
              />
              
              <select className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-4" required>
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
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Destination Location*"
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Cargo Weight (kg)"
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Cargo Dimensions (LxWxH)"
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <select className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-4">
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
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <select className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none">
                  <option value="">Urgency Level</option>
                  <option>Standard</option>
                  <option>Express</option>
                  <option>Urgent (24-48 hours)</option>
                  <option>Emergency</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-300 text-sm mb-2">Additional Services Needed:</label>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Insurance
                  </label>
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Customs Clearance
                  </label>
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Door-to-Door Delivery
                  </label>
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Packaging Services
                  </label>
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Warehousing
                  </label>
                  <label className="flex items-center text-gray-300">
                    <input type="checkbox" className="mr-2 text-blue-500" />
                    Real-time Tracking
                  </label>
                </div>
              </div>
              
              <textarea
                placeholder="Detailed Description of Your Shipping Requirements..."
                rows={4}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-6"
              ></textarea>
              
              <button className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold">
                Get Detailed Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
