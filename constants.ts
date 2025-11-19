
import { Product, Review } from './types';

export const PRODUCT_DATA: Product = {
  id: 'rouge-premier-velvet',
  name: 'ROUGE PREMIER',
  subtitle: 'Couture Color Lipstick - Velvet Finish',
  price: 320000,
  description: "Enriched with red peony and pomegranate flower extracts, Rouge Premier delivers highly pigmented color with a comfortable, velvet finish that lasts up to 16 hours. The iconic formula radiates luxury and care.",
  image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=1000", // Default 999
  shades: [
    { 
      id: '999', 
      name: '999 Iconic Red', 
      hex: '#9F1D21', 
      finish: 'Velvet',
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=1000"
    },
    { 
      id: '720', 
      name: '720 Icône', 
      hex: '#A55D5D', 
      finish: 'Velvet',
      image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&q=80&w=1000"
    },
    { 
      id: '777', 
      name: '777 Fahrenheit', 
      hex: '#D1462F', 
      finish: 'Velvet',
      image: "https://images.unsplash.com/photo-1590156206657-b12a74b376f4?auto=format&fit=crop&q=80&w=1000"
    },
    { 
      id: '772', 
      name: '772 Classic Rosewood', 
      hex: '#9C5256', 
      finish: 'Velvet',
      image: "https://images.unsplash.com/photo-1571781535009-20cb147585a2?auto=format&fit=crop&q=80&w=1000"
    },
    { 
      id: '888', 
      name: '888 Strong Red', 
      hex: '#B82823', 
      finish: 'Velvet',
      image: "https://images.unsplash.com/photo-1609523035669-3836f1cc1565?auto=format&fit=crop&q=80&w=1000" 
    },
    { 
      id: '228', 
      name: '228 Mythique', 
      hex: '#6E2526', 
      finish: 'Velvet',
      image: "https://images.unsplash.com/photo-1627289725488-d2980387180c?auto=format&fit=crop&q=80&w=1000"
    },
    { 
      id: '840', 
      name: '840 Rayonnante', 
      hex: '#983C30', 
      finish: 'Velvet',
      image: "https://images.unsplash.com/photo-1591360236480-9c6a4cb3a6de?auto=format&fit=crop&q=80&w=1000"
    },
    { 
      id: '558', 
      name: '558 Grace', 
      hex: '#A85D68', 
      finish: 'Velvet',
      image: "https://images.unsplash.com/photo-1599695590972-f949264436f4?auto=format&fit=crop&q=80&w=1000"
    },
  ]
};

export const INITIAL_CHAT_MESSAGE = "Xin chào. Tôi là cố vấn sắc đẹp cá nhân của bạn tại ECLAT. Hãy hỏi tôi về các màu son, thành phần hoặc cách sử dụng Rouge Premier.";

export const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    user: 'Nguyễn Thuỳ Dương',
    rating: 5,
    date: '10/03/2024',
    comment: 'Màu 999 lên môi cực chuẩn, đỏ quyền lực. Chất son nhung mịn không hề bị khô môi dù để cả ngày. Rất đáng tiền!',
    verified: true
  },
  {
    id: '2',
    user: 'Trần Minh Hà',
    rating: 5,
    date: '08/03/2024',
    comment: 'Mình mua tặng mẹ màu 772 Rosewood, mẹ mình thích lắm. Màu nhẹ nhàng sang trọng, vỏ son cầm rất chắc tay.',
    verified: true
  },
  {
    id: '3',
    user: 'Lê Bảo Ngọc',
    rating: 4,
    date: '01/03/2024',
    comment: 'Giao hàng nhanh, đóng gói đẹp như quà tặng. Màu 228 hơi trầm hơn ảnh một chút nhưng vẫn rất tây.',
    verified: true
  },
  {
    id: '4',
    user: 'Phạm Thanh Hằng',
    rating: 5,
    date: '28/02/2024',
    comment: 'Son lì nhưng rất mướt, không lộ vân môi. Mình đã mua thỏi thứ 3 rồi, màu nào cũng đẹp.',
    verified: true
  }
];
