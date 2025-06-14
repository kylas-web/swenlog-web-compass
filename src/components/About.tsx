
import { Target, Users, Award, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every shipment is handled with meticulous attention to detail and accuracy.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term relationships based on trust, transparency, and mutual success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering superior service that exceeds customer expectations.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to optimize logistics operations.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Logistics Partner Since 1998
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              SWENLOG has been at the forefront of global logistics, helping businesses of all sizes 
              navigate the complexities of international trade. Our comprehensive suite of services 
              and deep industry expertise make us the preferred choice for companies seeking reliable, 
              efficient logistics solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With offices across major trade routes and a network of trusted partners worldwide, 
              we provide seamless connectivity between markets, ensuring your cargo reaches its 
              destination safely, on time, and cost-effectively.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-800 mb-2">2M+</div>
                <div className="text-gray-600">Shipments Handled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-800 mb-2">5000+</div>
                <div className="text-gray-600">Global Clients</div>
              </div>
            </div>

            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors font-semibold">
              Our Story
            </button>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h3>
            {values.map((value) => (
              <div key={value.title} className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <value.icon className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
