
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">SWENLOG</h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner for comprehensive global logistics solutions. 
              Connecting businesses worldwide with reliable, efficient shipping services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ocean Freight</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Air Freight</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ground Transportation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Customs Brokerage</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Warehousing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Supply Chain Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">News & Updates</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Partner Network</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Track Shipment</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Customer Portal</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Industry Insights</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SWENLOG. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
