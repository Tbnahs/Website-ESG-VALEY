import { Link } from "wouter";
import { Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative text-white pt-8 pb-5"
      style={{
        backgroundImage: "url('/images/hanh-trinh.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">

          {/* Brand Info */}
          <div className="space-y-3">
            <img src="/images/logo-white.png" alt="ESG Valley" className="h-16 w-auto object-contain" />
            <p className="text-white/80 text-xs leading-relaxed">
              Thương hiệu trà di sản Việt Nam, cam kết phát triển bền vững theo tiêu chuẩn ESG. Kết nối văn hóa, thiên nhiên và cộng đồng.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="https://online.gov.vn" target="_blank" rel="noopener noreferrer">
                <img src="/images/bo-cong-thuong.png" alt="Đã đăng ký Bộ Công Thương" className="h-8 w-auto object-contain" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-[#C9A84C]">Liên Hệ</h3>
            <ul className="space-y-2 text-xs text-white/80">
              <li>0969 510 955</li>
              <li>info@esgvalley.vn</li>
              <li className="leading-relaxed">Số 586, đường Cách mạng Tháng Tám, Phường Gia Sàng, Thái Nguyên</li>
            </ul>
          </div>

          {/* Liên Kết */}
          <div>
            <h3 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-[#C9A84C]">Liên Kết</h3>
            <ul className="space-y-2 text-xs text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Hành trình nông nghiệp xanh</Link></li>
              <li><Link href={`/san-pham`} className="hover:text-white transition-colors">Sản phẩm</Link></li>
              <li><Link href={`/san-pham?category=${encodeURIComponent("Trà Cụ")}`} className="hover:text-white transition-colors">Trà cụ</Link></li>
            </ul>
          </div>

          {/* Quy Định */}
          <div>
            <h3 className="font-display text-sm font-semibold mb-4 uppercase tracking-wider text-[#C9A84C]">Quy Định</h3>
            <ul className="space-y-2 text-xs text-white/80">
              <li><Link href="#" className="hover:text-white transition-colors">Chính sách bảo mật</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} ESG Valley. Bảo lưu mọi quyền.</p>
        </div>
      </div>
    </footer>
  );
}
