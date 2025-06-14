
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, BookOpen, Podcast } from 'lucide-react';

const resources = [
  { title: 'Whitepaper: The Future of Supply Chains', icon: FileText, description: 'An in-depth look at the trends shaping modern logistics.' },
  { title: 'Guide: International Shipping Checklist', icon: BookOpen, description: 'A comprehensive guide to help you navigate the complexities of international shipping.' },
  { title: 'Podcast: Logistics Unlocked', icon: Podcast, description: 'Tune in to our podcast for expert interviews and industry insights.' },
]

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
                Explore our collection of whitepapers, guides, and podcasts to stay informed on the latest trends and best practices in logistics.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {resources.map((resource) => (
                  <div key={resource.title} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <resource.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {resource.title}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{resource.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ResourcesPage;
