
import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { Review } from '../types';

interface ReviewsProps {
  reviews: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
             <h2 className="font-serif text-3xl font-medium mb-2">Đánh giá từ khách hàng</h2>
             <p className="text-gray-500">Khám phá trải nghiệm thực tế</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0 bg-gray-50 px-6 py-3 rounded-sm">
            <div className="flex text-yellow-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-lg font-bold">4.9/5</span>
            <span className="text-sm text-gray-500">(128 lượt đánh giá)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="border border-gray-100 p-6 hover:shadow-md transition-shadow rounded-sm bg-gray-50/50">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {review.user.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{review.user}</h4>
                    <div className="flex items-center gap-2">
                       <span className="text-xs text-gray-500">{review.date}</span>
                       {review.verified && (
                         <div className="flex items-center gap-1 text-green-700">
                           <CheckCircle className="w-3 h-3" />
                           <span className="text-[10px] font-medium uppercase tracking-wide">Đã mua hàng</span>
                         </div>
                       )}
                    </div>
                  </div>
                </div>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="text-black border-b border-black pb-1 text-sm uppercase tracking-widest hover:text-gray-600 hover:border-gray-600 transition-all">
            Xem tất cả đánh giá
          </button>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
