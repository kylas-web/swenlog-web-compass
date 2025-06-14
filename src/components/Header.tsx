
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      name: 'Services',
      dropdown: [
        'Ocean Freight',
        'Air Freight',
        'Ground Transportation',
        'Customs Brokerage',
        'Warehousing & Distribution',
        'Supply Chain Solutions'
      ]
    },
    {
      name: 'Industries',
      dropdown: [
        'Automotive',
        'Technology',
        'Retail & Fashion',
        'Healthcare',
        'Manufacturing',
        'Energy'
      ]
    },
    { name: 'About Us' },
    { name: 'Resources' },
    { name: 'Careers' },
    { name: 'Contact' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-800">SWENLOG</h1>
            <p className="text-xs text-gray-600">Global Logistics Solutions</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-800 font-medium transition-colors">
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors font-medium">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href="#"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-800 font-medium"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
              <button className="w-full mt-4 bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors font-medium">
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
