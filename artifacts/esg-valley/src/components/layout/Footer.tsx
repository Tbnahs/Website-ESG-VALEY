import { Link } from "wouter";
import { Facebook, Youtube, Instagram, Phone, Mail, MapPin } from "lucide-react";

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
              <a href="#" title="Shopee" className="opacity-80 hover:opacity-100 transition-opacity">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="6" fill="#EE4D2D"/>
                  <path d="M18 7a5 5 0 0 0-4.9 4H13a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-.1A5 5 0 0 0 18 7zm0 2a3 3 0 0 1 2.83 2H15.17A3 3 0 0 1 18 9zm-4 5h8v10H14V14z" fill="white"/>
                  <circle cx="18" cy="19" r="2.5" fill="white"/>
                </svg>
              </a>
              {/* Lazada */}
              <a href="#" title="Lazada" className="opacity-80 hover:opacity-100 transition-opacity">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="6" fill="#0F146D"/>
                  <text x="9" y="26" fontSize="20" fontWeight="bold" fill="#FF6000" fontFamily="Arial">L</text>
                  <text x="18" y="26" fontSize="20" fontWeight="bold" fill="white" fontFamily="Arial">z</text>
                </svg>
              </a>
              {/* Tiki */}
              <a href="#" title="Tiki" className="opacity-80 hover:opacity-100 transition-opacity">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="6" fill="#1A94FF"/>
                  <text x="5" y="26" fontSize="16" fontWeight="bold" fill="white" fontFamily="Arial">TIKI</text>
                </svg>
              </a>
              {/* TikTok Shop */}
              <a href="#" title="TikTok Shop" className="opacity-80 hover:opacity-100 transition-opacity">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="6" fill="#010101"/>
                  <path d="M23.5 10.5h-3v10a2.5 2.5 0 1 1-2.5-2.5c.17 0 .34.02.5.05V15a5.5 5.5 0 1 0 5.5 5.5V14h2.5a3.5 3.5 0 0 1-3-3.5h.5z" fill="white"/>
                  <path d="M24 10.5h-.5a3.5 3.5 0 0 0 3 3.5V10.5H24z" fill="#25F4EE"/>
                  <path d="M18 23a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="#FE2C55" fillOpacity="0.7"/>
                </svg>
              </a>
            </div>
            <p className="text-white/50 text-xs mt-3 mb-2">Quốc tế</p>
            <div className="flex flex-wrap gap-3 items-center">
              {/* Amazon */}
              <a href="#" title="Amazon" className="opacity-80 hover:opacity-100 transition-opacity">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="6" fill="#232F3E"/>
                  <text x="6" y="20" fontSize="11" fontWeight="bold" fill="white" fontFamily="Arial">amazon</text>
                  <path d="M8 23 Q18 28 28 23" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M26 21 L28 23 L26 25" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </a>
              {/* Walmart */}
              <a href="#" title="Walmart" className="opacity-80 hover:opacity-100 transition-opacity">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="6" fill="#0071CE"/>
                  <g transform="translate(18,18)">
                    <rect x="-1.5" y="-8" width="3" height="6" rx="1.5" fill="#FFC220"/>
                    <rect x="-1.5" y="2" width="3" height="6" rx="1.5" fill="#FFC220"/>
                    <rect x="-8" y="-1.5" width="6" height="3" rx="1.5" fill="#FFC220"/>
                    <rect x="2" y="-1.5" width="6" height="3" rx="1.5" fill="#FFC220"/>
                    <rect x="-6.2" y="-6.2" width="3" height="6" rx="1.5" transform="rotate(45)" fill="#FFC220"/>
                    <rect x="2.8" y="-6.2" width="3" height="6" rx="1.5" transform="rotate(-45)" fill="#FFC220"/>
                    <rect x="-6.2" y="0.2" width="3" height="6" rx="1.5" transform="rotate(-45)" fill="#FFC220"/>
                    <rect x="2.8" y="0.2" width="3" height="6" rx="1.5" transform="rotate(45)" fill="#FFC220"/>
                  </g>
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-white/50 text-xs mb-2">Phương thức thanh toán</p>
              <img src="/images/payment-methods.png" alt="Phương thức thanh toán" className="h-6 w-auto object-contain opacity-80" />
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
