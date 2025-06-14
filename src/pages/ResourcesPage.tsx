
import Header from '../components/Header';
import Footer from '../components/Footer';
import AIAssistant from '../components/resources/AIAssistant';
import ResourceCategory from '../components/resources/ResourceCategory';
import FeaturedResources from '../components/resources/FeaturedResources';
import { resourceCategories } from '../data/resourceCategories';

const ResourcesPage = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Resources</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Knowledge to Power Your Business
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Explore our comprehensive collection of tools, guides, and AI-powered solutions to optimize your logistics operations.
              </p>
            </div>

            {/* AI Assistant Tool */}
            <AIAssistant />

            {/* Resource Categories */}
            <div className="mx-auto mt-16 max-w-7xl">
              {resourceCategories.map((category) => (
                <ResourceCategory
                  key={category.title}
                  title={category.title}
                  icon={category.icon}
                  color={category.color}
                  resources={category.resources}
                />
              ))}
            </div>

            {/* Featured Resources Section */}
            <FeaturedResources />
          </div>
        </div>
      </main>
      <Footer />

      {/* Puter.js Script */}
      <script src="https://js.puter.com/v2/"></script>
    </>
  );
};

export default ResourcesPage;
