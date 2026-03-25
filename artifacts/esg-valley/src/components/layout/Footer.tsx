import { Link } from "wouter";
import { Facebook, Youtube, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { SiShopee, SiTiktok, SiWalmart } from "react-icons/si";
import { FaAmazon } from "react-icons/fa6";

export function Footer() {
  return (
    <footer
      className="relative text-white pt-10 pb-5"
      style={{
        backgroundImage: "url('/images/hanh-trinh.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/72" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">

          {/* Câu chuyện ESG Valley */}
          <div className="space-y-3">
            <img src="/images/logo-white.png" alt="ESG Valley" className="h-16 w-auto object-contain" />
            <p className="text-white/75 text-xs leading-relaxed">
              Thương hiệu trà di sản Việt Nam, cam kết phát triển bền vững theo tiêu chuẩn ESG. Kết nối văn hóa, thiên nhiên và cộng đồng.
            </p>
            <div className="flex items-center gap-2 flex-wrap pt-1">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Youtube" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
            {/* Giấy CNĐKKD / Bộ Công Thương */}
            <div className="pt-1">
              <a href="https://online.gov.vn" target="_blank" rel="noopener noreferrer">
                <img src="/images/bo-cong-thuong.png" alt="Đã đăng ký Bộ Công Thương" className="h-10 w-auto object-contain" />
              </a>
            </div>
          </div>

          {/* Liên Hệ */}
          <div>
            <h3 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-[#C9A84C]">Liên Hệ</h3>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 flex-shrink-0 text-[#C9A84C]" />
                <span>0969 510 955</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 flex-shrink-0 text-[#C9A84C]" />
                <span>info@esgvalley.vn</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#C9A84C]" />
                <span className="leading-relaxed">Số 586, đường Cách mạng Tháng Tám, Phường Gia Sàng, Thái Nguyên</span>
              </li>
            </ul>
          </div>

          {/* Liên Kết Nhanh */}
          <div>
            <h3 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-[#C9A84C]">Liên Kết Nhanh</h3>
            <ul className="space-y-2 text-xs text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Câu chuyện ESG Valley</Link></li>
              <li><Link href="/san-pham" className="hover:text-white transition-colors">Sản phẩm</Link></li>
              <li><Link href={`/san-pham?category=${encodeURIComponent("Trà Cụ")}`} className="hover:text-white transition-colors">Trà cụ</Link></li>
              <li><Link href="/lien-he" className="hover:text-white transition-colors">Liên hệ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Chính sách bảo mật</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</Link></li>
            </ul>
          </div>

          {/* Có trên các sàn TMĐT */}
          <div>
            <h3 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-[#C9A84C]">Có Trên Các Sàn TMĐT</h3>
            <div className="flex flex-wrap gap-3 items-center">
              {/* Shopee */}
              <a href="#" title="Shopee" className="w-9 h-9 rounded-lg bg-[#EE4D2D] flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
                <SiShopee className="w-5 h-5 text-white" />
              </a>
              {/* Lazada */}
              <a href="#" title="Lazada" className="opacity-85 hover:opacity-100 transition-opacity">
                <img src="/images/lazada-icon.png" alt="Lazada" className="w-9 h-9 object-contain" />
              </a>
              {/* Tiki */}
              <a href="#" title="Tiki" className="w-9 h-9 rounded-lg bg-[#1A94FF] flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 48 48" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="26" r="10" fill="white"/>
                  <rect x="20" y="10" width="8" height="4" rx="2" fill="white"/>
                  <circle cx="20" cy="26" r="3" fill="#1A94FF"/>
                  <circle cx="28" cy="26" r="3" fill="#1A94FF"/>
                  <path d="M20 33 Q24 36 28 33" stroke="#1A94FF" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </a>
              {/* TikTok Shop */}
              <a href="#" title="TikTok Shop" className="w-9 h-9 rounded-lg bg-[#010101] border border-white/10 flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
                <SiTiktok className="w-5 h-5 text-white" />
              </a>
            </div>
            <p className="text-white/50 text-xs mt-3 mb-2">Quốc tế</p>
            <div className="flex flex-wrap gap-3 items-center">
              {/* Amazon */}
              <a href="#" title="Amazon" className="w-9 h-9 rounded-lg bg-[#232F3E] flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
                <FaAmazon className="w-5 h-5 text-[#FF9900]" />
              </a>
              {/* Walmart */}
              <a href="#" title="Walmart" className="w-9 h-9 rounded-lg bg-[#0071CE] flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
                <SiWalmart className="w-5 h-5 text-[#FFC220]" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-white/50 text-xs mb-2">Phương thức thanh toán</p>
              <img src="/images/payment-methods.png" alt="Phương thức thanh toán" className="h-20 w-auto object-contain opacity-85" />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-2">
          <p>&copy; {new Date().getFullYear()} ESG Valley. Bảo lưu mọi quyền.</p>
          <p>Thương hiệu trà di sản Việt Nam</p>
        </div>
      </div>
    </footer>
  );
}
