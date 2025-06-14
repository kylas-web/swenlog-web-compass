
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/useLocalStorage';
// A simple markdown to html converter could be added here later
// For now, we'll render text with line breaks.

type Page = {
  id: string;
  title: string;
  slug: string;
  content: string;
  published: boolean;
};

const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [pages] = useLocalStorage<Page[]>('pagesData', []);

  const page = pages.find(p => p.slug === slug && p.published);

  if (!page) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-lg">The page you are looking for does not exist or is not published.</p>
        <Link to="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Go to Homepage
        </Link>
      </div>
    );
  }

  return (
    // This is a minimal layout. It would typically be wrapped in a site-wide Header/Footer.
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <article className="prose lg:prose-xl">
        <h1>{page.title}</h1>
        {/* For now, rendering content with preserved whitespace */}
        <div className="whitespace-pre-wrap">{page.content}</div>
      </article>
    </div>
  );
};

export default DynamicPage;
