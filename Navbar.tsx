import React from 'react';
import { Menu, ShoppingBag, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
           <button className="p-2 hover:bg-gray-50 rounded-full transition-colors" aria-label="Menu">
             <Menu className="w-5 h-5 text-gray-900" />
           </button>
           <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
             <a href="#" className="hover:text-black transition-colors">Makeup</a>
             <a href="#" className="hover:text-black transition-colors">Skincare</a>
             <a href="#" className="hover:text-black transition-colors">Fragrance</a>
           </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="font-serif text-2xl tracking-widest font-bold text-black">ECLAT</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors" aria-label="Search">
            <Search className="w-5 h-5 text-gray-900" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5 text-gray-900" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
