import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export function Popups() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    const seen = sessionStorage.getItem("esg_popup_seen");
    if (!seen) {
      const timer = setTimeout(() => {
        setShow(true);
        sessionStorage.setItem("esg_popup_seen", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setShow(false);
    setTimeout(() => setSubmitted(false), 400);
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 24 }}
            transition={{ type: "spring", duration: 0.45 }}
            className="relative w-full max-w-3xl bg-background rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 p-1.5 bg-black/15 hover:bg-black/30 text-white rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* ── LEFT: Product showcase ── */}
            <div className="relative w-full md:w-[45%] h-56 md:h-auto flex-shrink-0 overflow-hidden">
              <img
                src="https://pixabay.com/get/gb752f68cb12bb28e648b9f26361669b9085302487060195262d7ffdf90e66b0c8591e1139325948612677e1ad65ba159eebdb8ec7b4dd30b8cd4669067f982ba_1280.jpg"
                alt="Trà ESG Valley"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <div className="flex items-center gap-1.5 mb-2">
                  <Gift className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">Ưu Đãi Đặc Quyền</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                  Bộ Sưu Tập<br className="hidden md:block" /> Trà Di Sản
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 hidden md:block">
                  Tinh hoa trà Shan Tuyết cổ thụ từ núi rừng Đồng Phúc, Thái Nguyên — giảm <span className="text-[#C9A84C] font-bold">15%</span> cho đơn đầu tiên.
                </p>
                <Link href="/san-pham" onClick={handleClose}>
                  <button className="px-5 py-2 bg-[#C9A84C] text-white text-sm font-bold rounded-full hover:bg-[#b8973e] transition-colors">
                    Khám Phá Ngay
                  </button>
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Registration form ── */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              {!submitted ? (
                <>
                  <div className="mb-5">
                    <h4 className="font-display text-xl font-bold text-foreground mb-1">
                      Đăng Ký Nhận Thông Tin
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Nhận tin mới nhất về sản phẩm, ưu đãi và hành trình trà di sản Việt Nam.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Họ và tên *"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all text-sm uppercase tracking-wider"
                    >
                      Đăng Ký Ngay
                    </button>
                  </form>

                  <p className="text-[11px] text-center text-muted-foreground mt-3 leading-relaxed">
                    Bằng việc đăng ký, bạn đồng ý với{" "}
                    <Link href="/ho-tro#chinh-sach-bao-mat" onClick={handleClose} className="underline hover:text-foreground">
                      Chính sách bảo mật
                    </Link>{" "}
                    của chúng tôi.
                  </p>

                  <button
                    onClick={handleClose}
                    className="mt-3 text-xs text-center text-muted-foreground hover:text-foreground transition-colors w-full"
                  >
                    Để sau
                  </button>
                </>
              ) : (
                /* Success state */
                <div className="flex flex-col items-center justify-center text-center py-6 space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  >
                    <CheckCircle className="w-14 h-14 text-green-500 mx-auto" />
                  </motion.div>
                  <div>
                    <h4 className="font-display text-xl font-bold mb-1">Đăng ký thành công!</h4>
                    <p className="text-sm text-muted-foreground">
                      Cảm ơn <span className="font-semibold text-foreground">{form.name}</span>. Chúng tôi sẽ gửi thông tin mới nhất đến bạn sớm nhất.
                    </p>
                  </div>
                  <Link href="/san-pham" onClick={handleClose}>
                    <button className="px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all text-sm">
                      Khám Phá Sản Phẩm
                    </button>
                  </Link>
                  <button onClick={handleClose} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Đóng
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
