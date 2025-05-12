import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export function Button() {
  return (
    <div className="relative isolate mt-8 inline-block group">
      
      {/* Outer glow ring - appears on hover */}
      <div className="absolute inset-0 -z-10 rounded-lg transition group-hover:ring-4 group-hover:ring-violet-300/15" />
      
      {/* Inner ring - always visible but changes color on hover */}
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition group-hover:ring-violet-200" />
      
      {/* The actual button/link */}
      <Link 
        to="/register" 
        className="relative flex items-center px-4 py-2.5 text-sm text-gray-900 bg-transparent rounded-lg"
      >
        Learn More
        <ChevronRightIcon 
          className="h-4 w-4 ml-2 text-gray-900"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}