import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Phone, Mail, Clock, ChevronDown,
  Shield, RefreshCw, HelpCircle, MessageSquare, Search, Package,
  CheckCircle, AlertCircle, Truck, RotateCcw, Lock, Eye, FileText, Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { useOrders } from "@/lib/orders";

const SECTIONS = [
  { id: "lien-he",            label: "Liên Hệ",               icon: MessageSquare },
  { id: "chinh-sach-bao-mat", label: "Chính Sách Bảo Mật",   icon: Shield },
  { id: "chinh-sach-doi-tra", label: "Chính Sách Đổi Trả",   icon: RefreshCw },
  { id: "faq",                label: "Câu Hỏi Thường Gặp",   icon: HelpCircle },
  { id: "tra-cuu-don-hang",   label: "Tra Cứu Đơn Hàng",     icon: Package },
];

const PRODUCTS = [
  "Mã Đáo Thành Công",
  "Tản Viên Trà",
  "Mạc Triều Trà",
  "Bách Niên Trà",
  "Thượng Cổ Trà",
  "Matcha",
  "Tách Trà",
  "Ấm Trà",
  "Tống Trà",
  "Ly Nước",
  "Đĩa Lót",
  "Tiệc Trà Di Sản",
  "Tea Show – Trình Diễn Nghệ Thuật Pha Trà",
];

const faqs = [
  {
    q: "Chè của bạn được trồng ở đâu? Có gì đặc biệt so với các vùng khác?",
    a: "Chè của chúng tôi được trồng tại các vùng nguyên liệu nổi tiếng như Tản Viên, Mộc Châu, Hà Giang – nơi có khí hậu quanh năm mát mẻ, đất đỏ bazan giàu dưỡng chất và sương mù bao phủ vào mỗi sáng tinh mơ. Chính những điều kiện tự nhiên đặc biệt này đã tạo ra hương vị chè thanh thuần, tinh tế và sắc vị đậm đà mà ít nơi nào có được. Chúng chỉ là vùng chè tinh anh nhất, nơi chúng tôi áp dụng kỹ thuật canh tác truyền thống, kết hợp giữa thiên nhiên và bàn tay cần mẫn của người dân bản địa.",
  },
  {
    q: "Chè bên bạn có đạt chuẩn hữu cơ không? Có dùng thuốc bảo vệ thực vật không?",
    a: "Tất cả sản phẩm của ESG Valley đều được trồng theo tiêu chuẩn hữu cơ, không sử dụng thuốc trừ sâu hay phân bón hóa học. Chúng tôi có chứng nhận hữu cơ từ các tổ chức uy tín và tem truy xuất nguồn gốc QR trên mỗi sản phẩm.",
  },
  {
    q: "Khi nào là thời điểm tốt nhất để uống chè để có lợi cho sức khỏe?",
    a: "Uống chè vào buổi sáng giúp tỉnh táo và tăng cường trao đổi chất. Buổi chiều là thời điểm lý tưởng để thưởng trà và thư giãn. Tránh uống chè quá muộn vào buổi tối để không ảnh hưởng đến giấc ngủ.",
  },
  {
    q: "Một ấm chè có thể pha được bao nhiêu lần nước? Hương vị có thay đổi không?",
    a: "Tùy loại trà, có thể pha từ 3–7 lần nước. Mỗi lần pha sẽ mang lại một tầng hương vị khác nhau – ban đầu đậm đà và thơm nồng, về sau nhẹ nhàng và ngọt hậu hơn. Đây chính là nghệ thuật thưởng trà mà ESG Valley muốn chia sẻ.",
  },
  {
    q: "Tôi nên bảo quản chè như thế nào để giữ được hương vị lâu dài nhất?",
    a: "Bảo quản chè trong hộp kín, tránh ánh sáng trực tiếp, ẩm và mùi lạ. Không để chè trong tủ lạnh. Nên dùng hộp thiếc hoặc hộp gốm sứ để bảo quản tốt nhất, giúp duy trì hương thơm trong 12–24 tháng.",
  },
  {
    q: "Chè bên bạn có phù hợp để làm quà tặng không? Có hộp quà không?",
    a: "Có, ESG Valley có dịch vụ đóng gói quà tặng cao cấp với hộp gift box sang trọng, phù hợp làm quà biếu doanh nghiệp, sự kiện hay quà tặng cá nhân. Vui lòng liên hệ để được tư vấn bộ quà phù hợp.",
  },
  {
    q: "Tôi muốn mua hàng online thì làm thế nào? Có giao hàng toàn quốc không?",
    a: "Bạn có thể đặt hàng trực tiếp trên website, qua Zalo 0969 510 955 hoặc email. Chúng tôi giao hàng toàn quốc, thời gian 2–5 ngày làm việc. Nội thành Hà Nội có dịch vụ giao nhanh trong ngày.",
  },
];

export default function Support() {
  const [activeSection, setActiveSection] = useState("lien-he");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [orderCode, setOrderCode] = useState("");
  const [foundOrder, setFoundOrder] = useState<ReturnType<ReturnType<typeof useOrders>["lookupOrder"]> | null>(null);
  const [orderNotFound, setOrderNotFound] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const productDropdownRef = useRef<HTMLDivElement>(null);
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
    const onHashChange = () => scrollToHash(window.location.hash.replace("#", ""));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productDropdownRef.current && !productDropdownRef.current.contains(e.target as Node)) {
        setProductDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleProduct = (p: string) =>
    setSelectedProducts(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    window.history.pushState(null, "", `#${id}`);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Gửi thành công", description: "Chúng tôi đã nhận được tin nhắn và sẽ phản hồi trong vòng 24 giờ." });
    (e.target as HTMLFormElement).reset();
    setSelectedProducts([]);
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
    <div className="w-full bg-white min-h-screen">
      {/* Hero */}
      <div className="relative py-28 overflow-hidden">
        <img
          src="/images/support-hero.png"
          alt="Hỗ trợ khách hàng ESG Valley"
          className="absolute inset-0 w-full h-full object-cover object-center"
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
      {/* ── SECTION 1: LIÊN HỆ ── */}
      <section
        ref={el => { sectionRefs.current["lien-he"] = el; }}
        id="lien-he"
        className="scroll-mt-24 max-w-6xl mx-auto px-6 lg:px-12 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Gửi tin nhắn cho chúng tôi</h2>
            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Họ tên *</label>
                <input
                  type="text"
                  required
                  placeholder="Nhập..."
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Số điện thoại *</label>
                <input
                  type="tel"
                  required
                  placeholder="Nhập..."
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Lời nhắn của bạn</label>
                <textarea
                  rows={4}
                  placeholder="Nhập tin nhắn..."
                  className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Sản phẩm bạn quan tâm</label>
                <div className="relative" ref={productDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setProductDropdownOpen(o => !o)}
                    className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm bg-white text-left"
                  >
                    <span className={selectedProducts.length === 0 ? "text-gray-400" : "text-foreground"}>
                      {selectedProducts.length === 0
                        ? "-- Chọn sản phẩm --"
                        : selectedProducts.length === 1
                          ? selectedProducts[0]
                          : `${selectedProducts.length} sản phẩm đã chọn`}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${productDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {productDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden max-h-64 overflow-y-auto"
                      >
                        {PRODUCTS.map(p => {
                          const checked = selectedProducts.includes(p);
                          return (
                            <li key={p}>
                              <button
                                type="button"
                                onClick={() => toggleProduct(p)}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${checked ? "bg-[#3d7a3d]/5 text-[#3d7a3d]" : "hover:bg-gray-50 text-foreground"}`}
                              >
                                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${checked ? "bg-[#3d7a3d] border-[#3d7a3d]" : "border-gray-300"}`}>
                                  {checked && <CheckCircle className="w-2.5 h-2.5 text-white" />}
                                </div>
                                {p}
                              </button>
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                {selectedProducts.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {selectedProducts.map(p => (
                      <span key={p} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#3d7a3d]/10 text-[#3d7a3d] text-xs rounded-full font-medium">
                        {p}
                        <button type="button" onClick={() => toggleProduct(p)} className="hover:text-red-500 transition-colors">×</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="mt-2 flex items-center gap-2 px-7 py-3 bg-[#3d7a3d] text-white text-sm font-semibold rounded hover:bg-[#2f612f] transition-all"
              >
                Gửi tin nhắn <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right: Contact Info + Map */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Thông tin liên hệ</h2>
            <div className="space-y-5 mb-8">
              {[
                { icon: MapPin, value: "Số 386, đường Cách mạng tháng Tám, Phường Gia Sàng, Thái Nguyên" },
                { icon: Mail,   value: "esgvalley.com" },
                { icon: Phone,  value: "0969 510 955" },
                { icon: Mail,   value: "contact@esgvalley.vn" },
              ].map(({ icon: Icon, value }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#3d7a3d]" />
                  </div>
                  <p className="text-sm text-foreground pt-2">{value}</p>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                title="ESG Valley Showroom"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.9837604895685!2d105.83844087604!3d21.59256068000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313517cb5a0b9ae3%3A0xb30e8c33e2a0d64!2zVGjDoWkgTmd1ecOqbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-100" />
      {/* ── SECTION 2: FAQ ── */}
      <section
        ref={el => { sectionRefs.current["faq"] = el; }}
        id="faq"
        className="scroll-mt-24 max-w-6xl mx-auto px-6 lg:px-12 py-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">FAQs</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            Tổng hợp những câu hỏi thường gặp từ cộng đồng trà nhân ESG Valley. Không tìm thấy câu trả lời?{" "}
            <button onClick={() => scrollTo("lien-he")} className="text-[#3d7a3d] hover:underline font-medium">
              Liên hệ với chúng tôi.
            </button>
          </p>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-gray-100 border-y border-gray-100">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center py-5 text-left gap-4 hover:text-[#3d7a3d] transition-colors"
              >
                <span className={`text-sm font-medium leading-snug ${openFaq === idx ? "text-[#3d7a3d]" : "text-foreground"}`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-200 ${openFaq === idx ? "rotate-180 text-[#3d7a3d]" : ""}`} />
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-muted-foreground leading-relaxed pr-8">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
      <div className="border-t border-gray-100" />
      {/* ── SECTION 3: CHÍNH SÁCH BẢO MẬT ── */}
      <section
        ref={el => { sectionRefs.current["chinh-sach-bao-mat"] = el; }}
        id="chinh-sach-bao-mat"
        className="scroll-mt-24 max-w-6xl mx-auto px-6 lg:px-12 py-20"
      >
        <SectionHeading icon={Shield} title="Chính Sách Bảo Mật" subtitle="ESG Valley cam kết bảo vệ thông tin cá nhân của khách hàng theo tiêu chuẩn cao nhất." />
        <div className="mt-10 max-w-4xl space-y-5">
          {[
            { icon: Lock, title: "1. Thu thập thông tin", body: "Chúng tôi chỉ thu thập những thông tin cần thiết để xử lý đơn hàng và cải thiện trải nghiệm của bạn, bao gồm: họ tên, số điện thoại, địa chỉ giao hàng, địa chỉ email. Chúng tôi không thu thập thông tin thẻ ngân hàng — mọi giao dịch thanh toán được xử lý an toàn qua cổng thanh toán được chứng nhận PCI-DSS." },
            { icon: Eye,  title: "2. Sử dụng thông tin", body: "Thông tin của bạn được sử dụng để: xác nhận và xử lý đơn hàng, giao hàng và thông báo trạng thái vận chuyển, hỗ trợ giải quyết khiếu nại, gửi thông tin khuyến mãi (nếu bạn đồng ý). Chúng tôi không bán, trao đổi hay chia sẻ thông tin cá nhân của bạn với bên thứ ba vì mục đích thương mại." },
            { icon: Shield, title: "3. Bảo mật thông tin", body: "ESG Valley áp dụng các biện pháp bảo mật kỹ thuật tiên tiến bao gồm mã hóa SSL 256-bit, xác thực hai yếu tố và kiểm tra bảo mật định kỳ. Dữ liệu được lưu trữ trên máy chủ được bảo vệ bởi tường lửa và hệ thống phát hiện xâm nhập." },
            { icon: FileText, title: "4. Quyền của khách hàng", body: "Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân của mình bất kỳ lúc nào. Để thực hiện, vui lòng gửi email đến privacy@esgvalley.vn. Yêu cầu sẽ được xử lý trong vòng 5 ngày làm việc." },
          ].map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="flex gap-5 p-6 border border-gray-100 rounded-lg bg-gray-50"
            >
              <div className="w-9 h-9 bg-[#3d7a3d]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-[#3d7a3d]" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1.5 text-sm">{title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
              </div>
            </motion.div>
          ))}
          <p className="text-xs text-muted-foreground italic pt-2">Chính sách có hiệu lực từ ngày 01/01/2025. Mọi thay đổi sẽ được thông báo trên website.</p>
        </div>
      </section>
      <div className="border-t border-gray-100" />
      {/* ── SECTION 4: CHÍNH SÁCH ĐỔI TRẢ ── */}
      <section
        ref={el => { sectionRefs.current["chinh-sach-doi-tra"] = el; }}
        id="chinh-sach-doi-tra"
        className="scroll-mt-24 max-w-6xl mx-auto px-6 lg:px-12 py-20"
      >
        <SectionHeading icon={RefreshCw} title="Chính Sách Đổi Trả Hàng" subtitle="Chúng tôi cam kết mang đến sự hài lòng tuyệt đối — đổi trả dễ dàng, minh bạch." />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            { icon: CheckCircle, color: "text-green-700", bg: "bg-green-50", border: "border-green-100", title: "Được đổi trả", items: ["Sản phẩm bị lỗi do nhà sản xuất", "Sản phẩm giao sai mẫu mã / size", "Sản phẩm không đúng số lượng đặt hàng", "Sản phẩm bị hỏng do vận chuyển"] },
            { icon: AlertCircle, color: "text-red-600",   bg: "bg-red-50",   border: "border-red-100",   title: "Không đổi trả", items: ["Sản phẩm đã qua sử dụng, mở niêm phong", "Trà đã được pha / pha chế", "Sản phẩm mua theo chương trình giảm giá đặc biệt", "Hết thời gian đổi trả (sau 7 ngày)"] },
            { icon: Truck,       color: "text-blue-600",  bg: "bg-blue-50",  border: "border-blue-100",  title: "Quy trình đổi trả", items: ["Liên hệ hotline hoặc email trong 7 ngày", "Cung cấp ảnh chụp lỗi sản phẩm", "Chúng tôi gửi hàng mới / hoàn tiền trong 3–5 ngày", "Phí vận chuyển đổi trả: ESG Valley chịu hoàn toàn"] },
          ].map(({ icon: Icon, color, bg, border, title, items }) => (
            <div key={title} className={`p-6 rounded-lg border ${border} ${bg}`}>
              <div className={`flex items-center gap-2 mb-4 ${color}`}>
                <Icon className="w-4 h-4" />
                <h4 className="font-semibold text-sm">{title}</h4>
              </div>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="text-xs text-foreground/75 flex gap-2">
                    <span className="mt-0.5 shrink-0">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-4xl border border-gray-100 rounded-lg p-5 bg-gray-50">
          <div className="flex items-start gap-4">
            <RotateCcw className="w-5 h-5 text-[#3d7a3d] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-sm mb-1.5">Hoàn tiền</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Trong trường hợp không có sản phẩm thay thế, chúng tôi sẽ hoàn tiền 100% vào tài khoản ngân hàng hoặc ví điện tử của bạn trong vòng 5–7 ngày làm việc. Liên hệ <strong>0969 510 955</strong> hoặc <strong>support@esgvalley.vn</strong> để được hỗ trợ nhanh nhất.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-100" />
      {/* ── SECTION 5: TRA CỨU ĐƠN HÀNG ── */}
      <section
        ref={el => { sectionRefs.current["tra-cuu-don-hang"] = el; }}
        id="tra-cuu-don-hang"
        className="scroll-mt-24 max-w-6xl mx-auto px-6 lg:px-12 pt-10 pb-20"
      >
        <SectionHeading icon={Package} title="Tra Cứu Đơn Hàng" subtitle="Nhập mã đơn hàng để kiểm tra trạng thái giao hàng của bạn." />

        <div className="mt-10">
          <form onSubmit={handleOrderLookup} className="flex gap-3 max-w-2xl">
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={orderCode}
                onChange={e => { setOrderCode(e.target.value); setFoundOrder(null); setOrderNotFound(false); }}
                placeholder="Nhập mã đơn hàng (VD: ESG2026123456)"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-[#3d7a3d] focus:ring-1 focus:ring-[#3d7a3d] transition-all text-sm"
                required
              />
            </div>
            <button type="submit" className="px-7 py-3 bg-[#3d7a3d] text-white text-sm font-semibold rounded hover:bg-[#2f612f] transition-all whitespace-nowrap">
              Tra cứu
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-2">Mã đơn hàng được hiển thị sau khi đặt hàng thành công (bắt đầu bằng ESG).</p>

          <AnimatePresence>
            {foundOrder && (() => {
              const total = foundOrder.items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);
              const fmtPrice = (n: number) => n.toLocaleString("vi-VN") + "₫";
              const steps = ["Đã đặt hàng", "Đang xử lý", "Đang vận chuyển", "Hoàn tất"];
              const currentIdx = steps.indexOf(foundOrder.status);
              const PAYMENT_LABELS: Record<string, string> = {
                cod: "Thanh toán khi nhận hàng (COD)",
                bank: "Chuyển khoản ngân hàng",
                vietqr: "VietQR",
                zalopay: "ZaloPay",
                visa: "Visa / Mastercard",
                atm: "Thẻ ATM nội địa",
                paypal: "PayPal",
                momo: "Ví MoMo",
              };
              return (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  className="mt-8 border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                >
                  {/* Header */}
                  <div className="bg-[#3d7a3d] px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <div>
                        <p className="text-xs text-green-100 uppercase tracking-widest font-semibold">Mã đơn hàng</p>
                        <p className="font-mono text-xl font-bold text-white tracking-wider">{foundOrder.code}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                      foundOrder.status === "Hoàn tất" ? "bg-white/20 text-white" :
                      foundOrder.status === "Đã huỷ"  ? "bg-red-100 text-red-700" :
                      "bg-white/20 text-white"
                    }`}>
                      {foundOrder.status}
                    </span>
                  </div>

                  {/* Body: 2 columns */}
                  <div className="bg-white grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {/* Left: Thông tin đơn hàng */}
                    <div className="p-6 space-y-4">
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-3">Thông tin đơn hàng</p>
                      <InfoRow label="Ngày đặt">
                        {new Date(foundOrder.createdAt).toLocaleString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </InfoRow>
                      <InfoRow label="Người đặt">{foundOrder.buyer.name}</InfoRow>
                      <InfoRow label="Số điện thoại">{foundOrder.buyer.phone}</InfoRow>
                      <InfoRow label="Địa chỉ giao hàng">{foundOrder.buyer.address}</InfoRow>
                      {foundOrder.buyer.note && (
                        <InfoRow label="Ghi chú">{foundOrder.buyer.note}</InfoRow>
                      )}
                      <InfoRow label="Hình thức thanh toán">
                        {PAYMENT_LABELS[foundOrder.buyer.paymentMethod] ?? foundOrder.buyer.paymentMethod}
                      </InfoRow>
                    </div>

                    {/* Right: Sản phẩm + tổng tiền */}
                    <div className="p-6 flex flex-col">
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-3">Sản phẩm đặt</p>
                      <ul className="space-y-3 flex-1">
                        {foundOrder.items.map(({ product, quantity }) => (
                          <li key={product.id} className="flex items-center justify-between gap-4 text-sm">
                            <span className="text-foreground font-medium">{product.name}</span>
                            <div className="flex items-center gap-4 shrink-0">
                              <span className="text-muted-foreground text-xs">x{quantity}</span>
                              <span className="font-semibold text-foreground tabular-nums">{fmtPrice(product.price * quantity)}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-sm font-semibold text-foreground">Tổng tiền</span>
                        <span className="text-lg font-bold text-[#3d7a3d] tabular-nums">{fmtPrice(total)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress tracker */}
                  <div className="bg-gray-50 border-t border-gray-100 px-6 py-5">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-4">Trạng thái đơn hàng</p>
                    <div className="flex items-center">
                      {steps.map((s, i) => (
                        <div key={s} className="flex items-center flex-1">
                          <div className="flex flex-col items-center flex-1">
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${i <= currentIdx ? "bg-[#3d7a3d] text-white" : "bg-white border-2 border-gray-200 text-gray-400"}`}>
                              {i <= currentIdx ? <CheckCircle className="w-4 h-4" /> : i + 1}
                            </div>
                            <span className="text-[10px] mt-1.5 text-center text-muted-foreground leading-tight font-medium">{s}</span>
                          </div>
                          {i < steps.length - 1 && (
                            <div className={`h-0.5 flex-1 mb-5 transition-colors ${i < currentIdx ? "bg-[#3d7a3d]" : "bg-gray-200"}`} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {orderNotFound && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 p-5 border border-red-100 bg-red-50 rounded-lg flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800 text-sm">Không tìm thấy đơn hàng</p>
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
  );
}

function SectionHeading({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-[#3d7a3d]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
        <Icon className="w-5 h-5 text-[#3d7a3d]" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground mt-1 text-sm max-w-2xl">{subtitle}</p>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-muted-foreground">{label}</span>
      {children}
    </div>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold text-foreground">{children}</span>
    </div>
  );
}
