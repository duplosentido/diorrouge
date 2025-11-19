import React from 'react';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import BeautyAI from './components/BeautyAI';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col relative selection:bg-black selection:text-white">
      <Navbar />
      <ProductDetail />
      <BeautyAI />
      
      <footer className="border-t border-gray-100 mt-auto py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-xs uppercase tracking-widest">
          <p>© 2024 ECLAT Paris. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
