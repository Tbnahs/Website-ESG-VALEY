import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Phone, Mail, Clock, ChevronDown,
  Shield, RefreshCw, HelpCircle, MessageSquare, Search, Package,
  CheckCircle, AlertCircle, Truck, RotateCcw, Lock, Eye, FileText,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { useOrders } from "@/lib/orders";

const SECTIONS = [
  { id: "lien-he",           label: "Liên Hệ",                icon: MessageSquare },
  { id: "chinh-sach-bao-mat", label: "Chính Sách Bảo Mật",   icon: Shield },
  { id: "chinh-sach-doi-tra", label: "Chính Sách Đổi Trả",   icon: RefreshCw },
  { id: "faq",               label: "Câu Hỏi Thường Gặp",    icon: HelpCircle },
  { id: "tra-cuu-don-hang",  label: "Tra Cứu Đơn Hàng",      icon: Package },
];

const faqs = [
  {
    q: "ESG Valley có giao hàng toàn quốc không?",
    a: "Có, chúng tôi giao hàng đến tất cả 63 tỉnh thành trên toàn quốc. Thời gian giao hàng thông thường từ 2–5 ngày làm việc. Đối với khu vực Hà Nội và TP.HCM, chúng tôi có dịch vụ giao nhanh trong ngày."
  },
  {
    q: "Làm thế nào để phân biệt trà hữu cơ ESG Valley?",
    a: "Tất cả sản phẩm của ESG Valley đều có tem quét mã QR truy xuất nguồn gốc rõ ràng từ vườn trồng đến thành phẩm. Bạn chỉ cần quét mã QR trên bao bì để xem toàn bộ hành trình của sản phẩm."
  },
  {
    q: "ESG Valley có dịch vụ tiệc trà tại nhà không?",
    a: "Hiện tại chúng tôi cung cấp dịch vụ tiệc trà di sản tại không gian Showroom và nhận tổ chức tại sự kiện doanh nghiệp với quy mô từ 10–50 khách. Vui lòng liên hệ trước ít nhất 3 ngày để được sắp xếp."
  },
  {
    q: "Sản phẩm có hạn sử dụng bao lâu?",
    a: "Trà khô của ESG Valley có hạn sử dụng từ 12–24 tháng tùy loại, nếu được bảo quản đúng cách ở nơi khô thoáng, tránh ánh sáng trực tiếp và mùi lạ. Trà cụ (ấm, tách) không có hạn sử dụng nhưng nên vệ sinh đúng cách sau mỗi lần dùng."
  },
  {
    q: "Tôi có thể mua sỉ không?",
    a: "ESG Valley có chương trình hợp tác dành cho khách hàng mua số lượng lớn, nhà phân phối và doanh nghiệp. Vui lòng liên hệ qua email b2b@esgvalley.vn hoặc gọi hotline 0969 510 955 để được tư vấn."
  },
  {
    q: "Làm thế nào để bảo quản trà đúng cách?",
    a: "Trà nên được bảo quản trong hộp kín, tránh ẩm, ánh sáng và mùi lạ. Không để trà trong tủ lạnh vì độ ẩm cao có thể làm hỏng trà. Nên dùng hộp thiếc hoặc hộp gốm để bảo quản tốt nhất."
  },
];

export default function Support() {
  const [activeSection, setActiveSection] = useState("lien-he");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [orderCode, setOrderCode] = useState("");
  const [foundOrder, setFoundOrder] = useState<ReturnType<typeof lookupOrder> | null>(null);
  const [orderNotFound, setOrderNotFound] = useState(false);
  const { toast } = useToast();
  const { lookupOrder } = useOrders();
  const [, navigate] = useLocation();
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToHash = (hash: string) => {
    if (hash && SECTIONS.find(s => s.id === hash)) {
      setActiveSection(hash);
      setTimeout(() => {
        sectionRefs.current[hash]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };

  useEffect(() => {
    scrollToHash(window.location.hash.replace("#", ""));

    const onHashChange = () => {
      scrollToHash(window.location.hash.replace("#", ""));
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    window.history.pushState(null, "", `#${id}`);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Gửi thành công", description: "Chúng tôi đã nhận được tin nhắn và sẽ phản hồi trong vòng 24 giờ." });
    (e.target as HTMLFormElement).reset();
  };

  const handleOrderLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const result = lookupOrder(orderCode.trim());
    if (result) {
      setFoundOrder(result);
      setOrderNotFound(false);
    } else {
      setFoundOrder(null);
      setOrderNotFound(true);
    }
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero */}
      <div className="relative py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85"
          alt="Hỗ trợ khách hàng ESG Valley"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm uppercase tracking-[0.3em] font-semibold mb-3">ESG Valley</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Hỗ Trợ Khách Hàng</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên hành trình thưởng trà.
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* ── 1. LIÊN HỆ ── */}
        <section ref={el => { sectionRefs.current["lien-he"] = el; }} id="lien-he" className="scroll-mt-36">
          <SectionHeading icon={MessageSquare} title="Liên Hệ Với Chúng Tôi" subtitle="Hãy để lại lời nhắn, chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field label="Họ và tên *">
                    <input type="text" required className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </Field>
                  <Field label="Số điện thoại">
                    <input type="tel" className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </Field>
                </div>
                <Field label="Email *">
                  <input type="email" required className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </Field>
                <Field label="Chủ đề">
                  <select className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                    <option>Tư vấn sản phẩm</option>
                    <option>Đơn hàng & vận chuyển</option>
                    <option>Đổi trả & hoàn tiền</option>
                    <option>Hợp tác kinh doanh</option>
                    <option>Khác</option>
                  </select>
                </Field>
                <Field label="Nội dung *">
                  <textarea required rows={5} className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
                </Field>
                <button type="submit" className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-lg rounded-sm">
                  Gửi Tin Nhắn
                </button>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="space-y-6 mb-8">
                {[
                  { icon: MapPin, label: "Địa chỉ Showroom", value: "123 Đường Trà, Quận Tây Hồ, Hà Nội" },
                  { icon: Phone, label: "Điện thoại / Zalo", value: "0969 510 955" },
                  { icon: Mail, label: "Email", value: "info@esgvalley.vn" },
                  { icon: Clock, label: "Giờ mở cửa", value: "Thứ 2 – Chủ Nhật: 08:00 – 21:00" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{label}</p>
                      <p className="text-muted-foreground mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full h-56 bg-muted border border-border rounded-sm flex items-center justify-center overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] opacity-40 bg-cover bg-center grayscale" />
                <div className="relative z-10 bg-background/80 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center shadow group-hover:scale-105 transition-transform">
                  <MapPin className="w-4 h-4 text-primary mr-2" />
                  <span className="font-semibold text-sm">Xem trên Google Maps</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Divider />

        {/* ── 2. CHÍNH SÁCH BẢO MẬT ── */}
        <section ref={el => { sectionRefs.current["chinh-sach-bao-mat"] = el; }} id="chinh-sach-bao-mat" className="scroll-mt-36">
          <SectionHeading icon={Shield} title="Chính Sách Bảo Mật" subtitle="ESG Valley cam kết bảo vệ thông tin cá nhân của khách hàng theo tiêu chuẩn cao nhất." />
          <div className="mt-10 max-w-4xl space-y-8">
            {[
              {
                icon: Lock,
                title: "1. Thu thập thông tin",
                body: "Chúng tôi chỉ thu thập những thông tin cần thiết để xử lý đơn hàng và cải thiện trải nghiệm của bạn, bao gồm: họ tên, số điện thoại, địa chỉ giao hàng, địa chỉ email. Chúng tôi không thu thập thông tin thẻ ngân hàng — mọi giao dịch thanh toán được xử lý an toàn qua cổng thanh toán được chứng nhận PCI-DSS.",
              },
              {
                icon: Eye,
                title: "2. Sử dụng thông tin",
                body: "Thông tin của bạn được sử dụng để: xác nhận và xử lý đơn hàng, giao hàng và thông báo trạng thái vận chuyển, hỗ trợ giải quyết khiếu nại, gửi thông tin khuyến mãi (nếu bạn đồng ý). Chúng tôi không bán, trao đổi hay chia sẻ thông tin cá nhân của bạn với bên thứ ba vì mục đích thương mại.",
              },
              {
                icon: Shield,
                title: "3. Bảo mật thông tin",
                body: "ESG Valley áp dụng các biện pháp bảo mật kỹ thuật tiên tiến bao gồm mã hóa SSL 256-bit, xác thực hai yếu tố và kiểm tra bảo mật định kỳ. Dữ liệu được lưu trữ trên máy chủ được bảo vệ bởi tường lửa và hệ thống phát hiện xâm nhập.",
              },
              {
                icon: FileText,
                title: "4. Quyền của khách hàng",
                body: "Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân của mình bất kỳ lúc nào. Để thực hiện, vui lòng gửi email đến privacy@esgvalley.vn. Yêu cầu sẽ được xử lý trong vòng 5 ngày làm việc.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex gap-5 p-6 bg-card border border-border rounded-lg"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
                </div>
              </motion.div>
            ))}
            <p className="text-xs text-muted-foreground italic">Chính sách có hiệu lực từ ngày 01/01/2025. Mọi thay đổi sẽ được thông báo trên website.</p>
          </div>
        </section>

        <Divider />

        {/* ── 3. CHÍNH SÁCH ĐỔI TRẢ ── */}
        <section ref={el => { sectionRefs.current["chinh-sach-doi-tra"] = el; }} id="chinh-sach-doi-tra" className="scroll-mt-36">
          <SectionHeading icon={RefreshCw} title="Chính Sách Đổi Trả Hàng" subtitle="Chúng tôi cam kết mang đến sự hài lòng tuyệt đối — đổi trả dễ dàng, minh bạch." />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: CheckCircle, color: "text-green-600", bg: "bg-green-50", border: "border-green-200", title: "Được đổi trả", items: ["Sản phẩm bị lỗi do nhà sản xuất", "Sản phẩm giao sai mẫu mã / size", "Sản phẩm không đúng số lượng đặt hàng", "Sản phẩm bị hỏng do vận chuyển"] },
              { icon: AlertCircle, color: "text-red-600", bg: "bg-red-50", border: "border-red-200", title: "Không đổi trả", items: ["Sản phẩm đã qua sử dụng, mở niêm phong", "Trà đã được pha / pha chế", "Sản phẩm mua theo chương trình giảm giá đặc biệt", "Hết thời gian đổi trả (sau 7 ngày)"] },
              { icon: Truck, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", title: "Quy trình đổi trả", items: ["Liên hệ hotline hoặc email trong 7 ngày", "Cung cấp ảnh chụp lỗi sản phẩm", "Chúng tôi gửi hàng mới / hoàn tiền trong 3–5 ngày", "Phí vận chuyển đổi trả: ESG Valley chịu hoàn toàn"] },
            ].map(({ icon: Icon, color, bg, border, title, items }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`p-6 rounded-lg border ${border} ${bg}`}
              >
                <div className={`flex items-center gap-2 mb-4 ${color}`}>
                  <Icon className="w-5 h-5" />
                  <h4 className="font-bold">{title}</h4>
                </div>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="text-sm text-foreground/80 flex gap-2">
                      <span className="mt-1 shrink-0">•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="max-w-4xl bg-card border border-border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <RotateCcw className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">Hoàn tiền</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Trong trường hợp không có sản phẩm thay thế, chúng tôi sẽ hoàn tiền 100% vào tài khoản ngân hàng hoặc ví điện tử của bạn trong vòng 5–7 ngày làm việc. Liên hệ <strong>0969 510 955</strong> hoặc <strong>support@esgvalley.vn</strong> để được hỗ trợ nhanh nhất.</p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 4. FAQ ── */}
        <section ref={el => { sectionRefs.current["faq"] = el; }} id="faq" className="scroll-mt-36">
          <SectionHeading icon={HelpCircle} title="Câu Hỏi Thường Gặp" subtitle="Những thắc mắc phổ biến nhất từ cộng đồng trà nhân ESG Valley." />
          <div className="mt-10 max-w-3xl space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border rounded-lg overflow-hidden bg-card">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 border-t border-border/60 text-muted-foreground text-sm leading-relaxed">
                        <div className="pt-4">{faq.a}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl p-5 bg-primary/5 border border-primary/20 rounded-lg text-sm text-foreground">
            Không tìm thấy câu trả lời bạn cần?{" "}
            <button
              onClick={() => scrollTo("lien-he")}
              className="text-primary font-semibold hover:underline"
            >
              Liên hệ trực tiếp với chúng tôi →
            </button>
          </div>
        </section>

        <Divider />

        {/* ── 5. TRA CỨU ĐƠN HÀNG ── */}
        <section ref={el => { sectionRefs.current["tra-cuu-don-hang"] = el; }} id="tra-cuu-don-hang" className="scroll-mt-36">
          <SectionHeading icon={Package} title="Tra Cứu Đơn Hàng" subtitle="Nhập mã đơn hàng để kiểm tra trạng thái giao hàng của bạn." />
          <div className="mt-10 max-w-xl">
            <form onSubmit={handleOrderLookup} className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={orderCode}
                  onChange={e => { setOrderCode(e.target.value); setFoundOrder(null); setOrderNotFound(false); }}
                  placeholder="Nhập mã đơn hàng (VD: ESG2026123456)"
                  className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  required
                />
              </div>
              <button type="submit" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-all whitespace-nowrap">
                Tra cứu
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-2">Mã đơn hàng được hiển thị sau khi đặt hàng thành công (bắt đầu bằng ESG).</p>

            <AnimatePresence>
              {foundOrder && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 border border-border rounded-lg overflow-hidden"
                >
                  <div className="bg-green-50 border-b border-border px-6 py-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="font-bold text-green-800">Đơn hàng: <span className="font-mono">{foundOrder.code}</span></p>
                  </div>
                  <div className="px-6 py-5 space-y-3 bg-card">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Trạng thái</span>
                      <span className="font-semibold text-blue-600 flex items-center gap-1">
                        <Truck className="w-4 h-4" /> {foundOrder.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Ngày đặt hàng</span>
                      <span className="font-semibold">
                        {new Date(foundOrder.createdAt).toLocaleString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Người đặt</span>
                      <span className="font-semibold">{foundOrder.buyer.name} — {foundOrder.buyer.phone}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Địa chỉ giao</span>
                      <span className="font-semibold text-right max-w-[55%]">{foundOrder.buyer.address}</span>
                    </div>

                    <div className="pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">Sản phẩm đặt</p>
                      <ul className="space-y-1">
                        {foundOrder.items.map(({ product, quantity }) => (
                          <li key={product.id} className="flex justify-between text-sm">
                            <span>{product.name}</span>
                            <span className="font-semibold text-muted-foreground">x{quantity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-border">
                      {(() => {
                        const steps = ["Đã đặt hàng", "Đang xử lý", "Đang vận chuyển", "Hoàn tất"];
                        const currentIdx = steps.indexOf(foundOrder.status);
                        return (
                          <div className="flex items-center gap-0">
                            {steps.map((s, i) => (
                              <div key={s} className="flex items-center flex-1">
                                <div className="flex flex-col items-center flex-1">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i <= currentIdx ? "bg-primary text-primary-foreground" : "bg-muted border-2 border-border text-muted-foreground"}`}>
                                    {i <= currentIdx ? <CheckCircle className="w-3.5 h-3.5" /> : i + 1}
                                  </div>
                                  <span className="text-[9px] mt-1 text-center text-muted-foreground leading-tight">{s}</span>
                                </div>
                                {i < steps.length - 1 && (
                                  <div className={`h-0.5 flex-1 mb-4 ${i < currentIdx ? "bg-primary" : "bg-border"}`} />
                                )}
                              </div>
                            ))}
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </motion.div>
              )}

              {orderNotFound && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6 p-5 border border-red-200 bg-red-50 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800">Không tìm thấy đơn hàng</p>
                    <p className="text-sm text-red-700 mt-1">Vui lòng kiểm tra lại mã đơn hàng hoặc{" "}
                      <button onClick={() => scrollTo("lien-he")} className="underline font-medium">liên hệ hỗ trợ</button>.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </div>
    </div>
  );
}

function SectionHeading({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground mt-1 max-w-2xl">{subtitle}</p>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-border/60" />;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      {children}
    </div>
  );
}
