
import React, { useState } from 'react';
import { X, User, Phone, MapPin, FileText, Loader2 } from 'lucide-react';
import { CustomerFormData, Shade } from '../types';

interface CustomerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  selectedShade: Shade;
  quantity: number;
  totalPrice: number;
}

const CustomerFormModal: React.FC<CustomerFormModalProps> = ({ 
  isOpen, 
  onClose, 
  productName, 
  selectedShade, 
  quantity, 
  totalPrice 
}) => {
  const [formData, setFormData] = useState<CustomerFormData>({
    fullName: '',
    phone: '',
    address: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="bg-white w-full max-w-lg relative z-10 shadow-2xl rounded-sm overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
          <h3 className="font-serif text-xl font-semibold">Thông tin đặt hàng</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-10 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
              <span className="text-3xl">✓</span>
            </div>
            <h4 className="font-serif text-2xl font-medium">Đặt hàng thành công!</h4>
            <p className="text-gray-500">Cảm ơn {formData.fullName}. Chúng tôi sẽ liên hệ với bạn sớm nhất để xác nhận đơn hàng.</p>
            <button 
              onClick={onClose}
              className="mt-6 bg-black text-white px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-gray-800 transition-all"
            >
              Đóng
            </button>
          </div>
        ) : (
          <div className="p-6">
            {/* Order Summary */}
            <div className="bg-gray-50 p-4 mb-6 rounded-sm border border-gray-100 flex gap-4">
              <img src={selectedShade.image} alt={selectedShade.name} className="w-16 h-16 object-cover rounded-sm" />
              <div className="flex-1">
                 <p className="font-bold text-sm">{productName}</p>
                 <p className="text-xs text-gray-500 mt-1">Màu: {selectedShade.name} ({selectedShade.finish})</p>
                 <div className="flex justify-between mt-2 text-sm">
                   <span>SL: {quantity}</span>
                   <span className="font-semibold text-red-700">{formatPrice(totalPrice)}</span>
                 </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wide text-gray-500 flex items-center gap-1">
                  <User className="w-3 h-3" /> Họ và tên
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all rounded-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wide text-gray-500 flex items-center gap-1">
                  <Phone className="w-3 h-3" /> Số điện thoại
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0912xxxxxx"
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all rounded-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wide text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Địa chỉ giao hàng
                </label>
                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Số nhà, đường, phường/xã..."
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all rounded-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wide text-gray-500 flex items-center gap-1">
                  <FileText className="w-3 h-3" /> Ghi chú (Tuỳ chọn)
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Giao giờ hành chính..."
                  className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all rounded-sm resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-black text-white h-12 mt-6 uppercase text-xs font-bold tracking-widest hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Đang xử lý...
                  </>
                ) : (
                  'Hoàn tất đơn hàng'
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerFormModal;
