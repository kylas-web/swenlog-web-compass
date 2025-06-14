
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const CareersPage = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Work with us</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join our team of dedicated professionals and help us shape the future of global logistics. We are always looking for talented individuals who are passionate about making a difference.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
               <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        Logistics Coordinator
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">We're looking for an organized and detail-oriented Logistics Coordinator to join our team. You will be responsible for managing shipments, coordinating with carriers, and ensuring timely delivery.</p>
                  </div>
                   <Button className="mt-6">Apply Now</Button>
                </article>
                 <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        Sales Executive
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">As a Sales Executive, you will be responsible for generating new business, building client relationships, and achieving sales targets. Strong communication and negotiation skills are a must.</p>
                  </div>
                   <Button className="mt-6">Apply Now</Button>
                </article>
                 <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        Software Engineer
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Join our tech team to build and maintain the software that powers our logistics network. We're looking for a skilled developer with experience in modern web technologies.</p>
                  </div>
                   <Button className="mt-6">Apply Now</Button>
                </article>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CareersPage;
