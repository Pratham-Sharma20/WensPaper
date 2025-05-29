
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b-4 border-black bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">
            ENGLISH EDITION | 29 MARCH 2025 (THURSDAY) | GLOBAL
          </div>
          <Link to="/" className="block">
            <h1 className="text-6xl md:text-8xl font-bold text-black tracking-wide hover:text-gray-800 transition-colors">
              WENSPAPER
            </h1>
          </Link>
          <div className="text-sm text-gray-700 mt-2 italic">
            The Largest Circulated Paper In Telangana Connection
          </div>
        </div>
        
        <nav className="mt-6 border-t border-b border-black py-2">
          <div className="flex justify-center space-x-8 text-sm font-semibold">
            <Link to="/" className="hover:bg-gray-100 px-3 py-1 cursor-pointer">SUCCESS STORIES</Link>
            <Link to="/job-careers" className="hover:bg-gray-100 px-3 py-1 cursor-pointer">JOB CAREERS</Link>
            <Link to="/marriage-profiles" className="hover:bg-gray-100 px-3 py-1 cursor-pointer">MARRIAGE PROFILES</Link>
            <Link to="/business-brands" className="hover:bg-gray-100 px-3 py-1 cursor-pointer">BUSINESS BRANDS</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
