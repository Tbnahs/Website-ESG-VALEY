import { Link } from "wouter";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-widest uppercase">
              ESG VALLEY
            </h2>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Thương hiệu trà di sản Việt Nam, cam kết phát triển bền vững theo tiêu chuẩn ESG. Kết nối văn hóa, thiên nhiên và cộng đồng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 uppercase tracking-wider">Liên Kết</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/he-sinh-thai" className="hover:text-white transition-colors">Hệ Sinh Thái</Link></li>
              <li><Link href="/tin-tuc" className="hover:text-white transition-colors">Tin Tức & Media</Link></li>
              <li><Link href="/lien-he" className="hover:text-white transition-colors">Liên Hệ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Câu Hỏi Thường Gặp (FAQ)</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 uppercase tracking-wider">Sản Phẩm</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/san-pham" className="hover:text-white transition-colors">Mã Đáo Thành Công</Link></li>
              <li><Link href="/san-pham" className="hover:text-white transition-colors">Bách Niên Trà</Link></li>
              <li><Link href="/san-pham" className="hover:text-white transition-colors">Mạc Triều Trà</Link></li>
              <li><Link href="/san-pham" className="hover:text-white transition-colors">Trà Cụ Cao Cấp</Link></li>
              <li><Link href="/san-pham" className="hover:text-white transition-colors">Dịch Vụ Tiệc Trà</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 uppercase tracking-wider">Liên Hệ</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/80 mb-6">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5" />
                <span>123 Đường Trà, Quận Tây Hồ, Hà Nội</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>0969 510 955</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>info@esgvalley.vn</span>
              </li>
            </ul>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Đăng ký nhận bản tin..." 
                className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm py-3 pl-4 pr-12 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ESG Valley. Bảo lưu mọi quyền.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</Link>
            <Link href="#" className="hover:text-white transition-colors">Chính sách đổi trả</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
