import React from 'react';
import { ShieldCheck, Truck, HeartHandshake, Gem } from 'lucide-react';

const ShopIntro: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">The Boutique</span>
          <h2 className="font-serif text-4xl md:text-5xl text-black mb-6 relative inline-block">
            DUPLO SENTIDO
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-red-700"></span>
          </h2>
          <p className="font-serif italic text-xl text-gray-500 mt-2">Cosmetics & Beauty</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm rounded-sm">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-3">100% Authentic</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Cam kết sản phẩm chính hãng. Hoàn tiền gấp đôi nếu phát hiện hàng giả.</p>
          </div>

          <div className="bg-white p-8 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm rounded-sm">
             <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-3">Giao Hàng Tốc Độ</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Vận chuyển toàn quốc nhanh chóng. Đóng gói quà tặng sang trọng miễn phí.</p>
          </div>

          <div className="bg-white p-8 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm rounded-sm">
             <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-3">Tư Vấn Tận Tâm</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Đội ngũ chuyên nghiệp luôn sẵn sàng hỗ trợ bạn tìm ra sắc màu hoàn hảo.</p>
          </div>

           <div className="bg-white p-8 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm rounded-sm">
             <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Gem className="w-6 h-6" />
            </div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-3">Ưu Đãi Độc Quyền</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Tích điểm thành viên và nhận quà tặng giá trị cho khách hàng thân thiết.</p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
           <p className="text-gray-600 italic font-serif text-lg leading-loose">
            "Tại Duplo Sentido, chúng tôi không chỉ bán son môi, chúng tôi trao cho bạn sự tự tin và vẻ đẹp kiêu hãnh. Mỗi thỏi son là một tác phẩm nghệ thuật được tuyển chọn kỹ lưỡng."
           </p>
        </div>

      </div>
    </section>
  );
};

export default ShopIntro;