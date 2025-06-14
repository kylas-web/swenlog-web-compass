
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
                  <div className="font-semibold">Headquarters</div>
                  <div className="text-gray-300">1234 Logistics Way<br />Global Trade Center, NY 10001</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Business Hours</div>
                  <div className="text-gray-300">24/7 Customer Support<br />Mon-Fri: 8AM-6PM EST</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-4"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-4"
              />
              <select className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-4">
                <option>Select Service</option>
                <option>Ocean Freight</option>
                <option>Air Freight</option>
                <option>Ground Transportation</option>
                <option>Customs Brokerage</option>
                <option>Warehousing</option>
                <option>Supply Chain Solutions</option>
              </select>
              <textarea
                placeholder="Tell us about your shipping needs..."
                rows={4}
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none mb-6"
              ></textarea>
              <button className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold">
                Get My Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
