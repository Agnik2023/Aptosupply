'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-red-100 to-orange-200 bg-clip-text text-transparent">
          Error
        </h1>
        <h2 className="text-2xl font-semibold text-gray-200">
          Something went wrong!
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          An error occurred while processing your request.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
} 