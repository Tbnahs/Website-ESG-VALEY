import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    q: "ESG Valley có dịch vụ tiệc trà tại nhà không?",
    a: "Hiện tại chúng tôi cung cấp dịch vụ tiệc trà di sản tại không gian Showroom và nhận tổ chức tại sự kiện doanh nghiệp với quy mô từ 10-50 khách."
  },
  {
    q: "Chính sách đổi trả sản phẩm như thế nào?",
    a: "Sản phẩm được đổi trả trong vòng 7 ngày nếu có lỗi từ nhà sản xuất, yêu cầu giữ nguyên tem mác và bao bì."
  },
  {
    q: "Làm thế nào để phân biệt trà hữu cơ?",
    a: "Tất cả sản phẩm của ESG Valley đều có tem quét mã QR truy xuất nguồn gốc rõ ràng từ vườn trồng đến thành phẩm."
  }
];

export default function Contact() {
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Gửi thành công",
      description: "Chúng tôi đã nhận được tin nhắn và sẽ phản hồi sớm nhất.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="w-full bg-background pt-24 pb-24">
      {/* Header */}
      <div className="relative py-24 mb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85"
          alt="Liên hệ ESG Valley"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Hỗ trợ khách hàng</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hãy để lại lời nhắn, chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="font-display text-3xl font-bold mb-6">Gửi Tin Nhắn</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Họ và tên *</label>
                  <input type="text" required className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Số điện thoại</label>
                  <input type="tel" className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input type="email" required className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Chủ đề</label>
                <input type="text" className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nội dung *</label>
                <textarea required rows={5} className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 rounded-sm">
                Gửi Tin Nhắn
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="font-display text-3xl font-bold mb-6">Thông Tin Liên Hệ</h3>
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Địa chỉ Showroom</h4>
                  <p className="text-muted-foreground mt-1">123 Đường Trà, Quận Tây Hồ, Hà Nội, Việt Nam</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Điện thoại</h4>
                  <p className="text-muted-foreground mt-1">0969 510 955</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground mt-1">info@esgvalley.vn</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Giờ mở cửa</h4>
                  <p className="text-muted-foreground mt-1">Thứ 2 - Chủ Nhật: 08:00 - 21:00</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-muted border border-border rounded-sm flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] opacity-50 bg-cover bg-center grayscale mix-blend-multiply" />
              <div className="relative z-10 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full flex items-center shadow-lg cursor-pointer group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                <span className="font-semibold">Xem trên Google Maps</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-16 border-t border-border pt-16">
          <h3 className="font-display text-3xl font-bold text-center mb-10">Câu Hỏi Thường Gặp</h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border rounded-sm overflow-hidden bg-card">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-bold text-foreground">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5 pt-0 text-muted-foreground"
                    >
                      <div className="border-t border-border/50 pt-4 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
