import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "wouter";

export function Popups() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showLead, setShowLead] = useState(false);

  useEffect(() => {
    // Show welcome popup after 3 seconds if not seen in this session
    const hasSeenWelcome = sessionStorage.getItem("esg_welcome_seen");
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
        sessionStorage.setItem("esg_welcome_seen", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
    
    // Simulate lead capture popup showing randomly or on intent
    const leadTimer = setTimeout(() => {
      const hasSeenLead = sessionStorage.getItem("esg_lead_seen");
      if (!hasSeenLead && !showWelcome) {
        setShowLead(true);
        sessionStorage.setItem("esg_lead_seen", "true");
      }
    }, 15000);
    
    return () => clearTimeout(leadTimer);
  }, [showWelcome]);

  return (
    <>
      {/* Welcome Popup - Product Promotion */}
      <AnimatePresence>
        {showWelcome && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowWelcome(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-background rounded-md shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setShowWelcome(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 text-foreground md:text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
                {/* product unsplash tea set */}
                <img 
                  src="https://pixabay.com/get/gb752f68cb12bb28e648b9f26361669b9085302487060195262d7ffdf90e66b0c8591e1139325948612677e1ad65ba159eebdb8ec7b4dd30b8cd4669067f982ba_1280.jpg" 
                  alt="Bộ Sưu Tập Tết" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Ưu Đãi Đặc Quyền</div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">Bộ Sưu Tập Quà Tặng Tết 2026</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Trao gửi tâm tình qua những phẩm trà tinh túy nhất từ núi rừng Tây Bắc. Nhận ngay ưu đãi 15% cho đơn hàng đầu tiên.
                </p>
                <div className="flex gap-4">
                  <Link href="/san-pham" onClick={() => setShowWelcome(false)}>
                    <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-all hover:shadow-lg shadow-primary/25">
                      Khám Phá Ngay
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lead Capture Popup */}
      <AnimatePresence>
        {showLead && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowLead(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-background rounded-md shadow-2xl overflow-hidden z-10 p-8"
            >
              <button 
                onClick={() => setShowLead(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold mb-2">Gia Nhập Cộng Đồng ESG Valley</h3>
                <p className="text-sm text-muted-foreground">Nhận thông tin mới nhất về sản phẩm, sự kiện văn hóa và hành trình bền vững.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowLead(false); }}>
                <div>
                  <input type="text" placeholder="Họ và tên" className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" required />
                </div>
                <div>
                  <input type="email" placeholder="Email của bạn" className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" required />
                </div>
                <div>
                  <input type="tel" placeholder="Số điện thoại" className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-all hover:shadow-lg shadow-primary/25 mt-2">
                  Đăng Ký Nhận Thông Tin
                </button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Bằng việc đăng ký, bạn đồng ý với <a href="#" className="underline">Chính sách bảo mật</a> của chúng tôi.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
