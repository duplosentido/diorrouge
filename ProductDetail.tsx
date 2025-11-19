import React, { useState } from 'react';
import { Star, Heart, Clock, Droplet, Sparkles, Check, ShoppingBag } from 'lucide-react';
import { PRODUCT_DATA, REVIEWS_DATA } from '../constants';
import { Shade } from '../types';
import Reviews from './Reviews';
import CustomerFormModal from './CustomerFormModal';
import ShopIntro from './ShopIntro';

const ProductDetail: React.FC = () => {
  const [selectedShade, setSelectedShade] = useState<Shade>(PRODUCT_DATA.shades[0]);
  const [quantity, setQuantity] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleShadeSelect = (shade: Shade) => {
    setSelectedShade(shade);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pb-24">
      
      {/* --- HERO SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 pt-6 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left Column - Main Image */}
          <div className="space-y-8 relative lg:sticky lg:top-24">
            <div className="aspect-[4/5] w-full bg-gray-50 relative group overflow-hidden rounded-sm shadow-sm">
              <img 
                src={selectedShade.image || PRODUCT_DATA.image} 
                alt={`${PRODUCT_DATA.name} - ${selectedShade.name}`}
                key={selectedShade.id} 
                className="w-full h-full object-cover mix-blend-normal p-0 transition-all duration-700 animate-fade-in"
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs tracking-widest uppercase text-black bg-white/90 px-4 py-2 shadow-sm">
                  {selectedShade.finish}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info & Main Cart Action */}
          <div className="flex flex-col space-y-6 pt-4">
            
            {/* Header */}
            <div className="space-y-4 border-b border-gray-100 pb-8">
              <div className="flex justify-between items-start">
                <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">Lipstick</h2>
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  <Star className="fill-current w-4 h-4" />
                  <span className="text-black font-medium ml-1">4.9</span>
                  <span className="text-gray-400 font-normal underline decoration-gray-300 cursor-pointer">(128 Reviews)</span>
                </div>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-black font-medium leading-tight">
                {PRODUCT_DATA.name}
              </h1>
              <p className="text-lg text-gray-600 font-light">{PRODUCT_DATA.subtitle}</p>
              <p className="text-3xl font-medium pt-2 text-red-700">{formatPrice(PRODUCT_DATA.price)}</p>
            </div>

            {/* Current Selection Info */}
            <div className="py-2">
              <span className="text-sm font-medium text-gray-900">Màu đang chọn: <span className="text-red-700 font-bold">{selectedShade.name}</span></span>
            </div>

            {/* Description */}
            <div className="prose prose-sm text-gray-600 leading-relaxed max-w-none">
              <p>{PRODUCT_DATA.description}</p>
            </div>

            {/* Main Add to Cart Actions */}
            <div className="space-y-4 pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-gray-200 rounded-sm h-14 w-full sm:w-32">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex-1 h-full hover:bg-gray-50 text-gray-500 transition-colors flex items-center justify-center"
                  >-</button>
                  <span className="flex-1 text-center font-medium text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex-1 h-full hover:bg-gray-50 text-gray-500 transition-colors flex items-center justify-center"
                  >+</button>
                </div>

                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="flex-1 bg-black text-white text-base font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-lg h-14 px-4 flex items-center justify-center gap-2"
                >
                  Add to Bag <span className="w-1 h-1 bg-white rounded-full mx-1"></span> {formatPrice(PRODUCT_DATA.price * quantity)}
                </button>
                
                <button className="h-14 w-14 flex-shrink-0 flex items-center justify-center border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 transition-all">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- BENEFITS SECTION (Prominent) --- */}
      <div className="bg-gray-50 mt-16 py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-3 p-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm mb-2">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-serif text-lg font-semibold">24H Comfort</h3>
              <p className="text-sm text-gray-500 max-w-xs">Long-wear formula that stays comfortable and hydrated all day long.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 p-4 border-y md:border-y-0 md:border-x border-gray-200">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm mb-2">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-serif text-lg font-semibold">Velvet Finish</h3>
              <p className="text-sm text-gray-500 max-w-xs">A high-haute couture velvet finish that blurs lips for a smooth effect.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 p-4">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm mb-2">
                <Droplet className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-serif text-lg font-semibold">Floral Care</h3>
              <p className="text-sm text-gray-500 max-w-xs">Enriched with red peony and pomegranate flower extracts.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- COLOR GALLERY & SELECTION --- */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="text-center mb-12 space-y-2">
          <h2 className="font-serif text-3xl font-medium">The Collection</h2>
          <p className="text-gray-500">Discover the couture shades</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {PRODUCT_DATA.shades.map((shade) => (
            <div key={shade.id} className="group flex flex-col">
              {/* Image Card */}
              <div 
                className={`relative aspect-[3/4] overflow-hidden mb-4 cursor-pointer bg-gray-100 ${selectedShade.id === shade.id ? 'ring-2 ring-black ring-offset-2' : ''}`}
                onClick={() => handleShadeSelect(shade)}
              >
                <img 
                  src={shade.image} 
                  alt={shade.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Hex Color */}
                <div className="absolute bottom-0 right-0 p-2">
                   <div className="w-6 h-6 rounded-full border border-white shadow-sm" style={{ backgroundColor: shade.hex }}></div>
                </div>
                {selectedShade.id === shade.id && (
                  <div className="absolute top-3 right-3 bg-black text-white rounded-full p-1">
                    <Check className="w-3 h-3" />
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col items-center text-center flex-grow">
                <h3 className="font-medium text-gray-900 mb-1">{shade.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{shade.finish}</p>
                <p className="text-base font-semibold text-black mb-4">{formatPrice(PRODUCT_DATA.price)}</p>
                
                {/* Action Button */}
                <button 
                  onClick={() => handleShadeSelect(shade)}
                  className={`mt-auto w-full py-3 px-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                    selectedShade.id === shade.id 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-black border-gray-200 hover:border-black hover:bg-gray-50'
                  }`}
                >
                  {selectedShade.id === shade.id ? 'ĐANG CHỌN' : 'CHỌN MÀU'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- REVIEWS SECTION --- */}
      <Reviews reviews={REVIEWS_DATA} />

      {/* --- SHOP INTRO SECTION --- */}
      <ShopIntro />

      {/* --- STICKY PURCHASE REMINDER BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-40 px-4 py-3 md:px-6 md:py-4 animate-in slide-in-from-bottom duration-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Product Info */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative">
              <img 
                src={selectedShade.image} 
                alt={selectedShade.name} 
                className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-sm shadow-sm border border-gray-100"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border border-white" style={{ backgroundColor: selectedShade.hex }}></div>
            </div>
            
            <div className="hidden md:block">
              <h4 className="font-serif font-bold text-gray-900">{PRODUCT_DATA.name}</h4>
              <p className="text-sm text-gray-500">{selectedShade.name} - {selectedShade.finish}</p>
            </div>
            
            {/* Mobile simplified info */}
            <div className="md:hidden flex flex-col justify-center">
              <p className="text-xs font-bold text-gray-900 truncate max-w-[120px]">{selectedShade.name}</p>
              <p className="text-xs text-red-700 font-semibold">{formatPrice(PRODUCT_DATA.price)}</p>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:block text-right">
              <p className="text-xs text-gray-500 uppercase tracking-wider">Tổng cộng</p>
              <p className="text-xl font-medium text-red-700">{formatPrice(PRODUCT_DATA.price * quantity)}</p>
            </div>
            
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-black text-white px-4 py-3 md:px-8 md:py-3 uppercase text-xs md:text-sm font-bold tracking-widest hover:bg-gray-800 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap rounded-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>MUA NGAY</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- CUSTOMER FORM MODAL --- */}
      <CustomerFormModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        productName={PRODUCT_DATA.name}
        selectedShade={selectedShade}
        quantity={quantity}
        totalPrice={PRODUCT_DATA.price * quantity}
      />

    </main>
  );
};

export default ProductDetail;