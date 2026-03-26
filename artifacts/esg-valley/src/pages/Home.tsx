import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play } from "lucide-react";
import { products, news, esgPillars } from "@/lib/data";

/* ─── Hero slides ─── */
const slides = [
  {
    image: `${import.meta.env.BASE_URL}images/hero-slide-1.png`,
    title: "Bộ Sưu Tập Quà Tặng Tết 2026",
    subtitle: "Tinh Hoa Trà Việt - Trọn Vẹn Tâm Tình",
    cta: "Khám Phá Ngay",
    link: "/san-pham",
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero-slide-2.png`,
    title: "Trà Di Sản Thượng Hạng",
    subtitle: "Hương vị nguyên bản từ những rừng trà cổ thụ hàng trăm năm tuổi.",
    cta: "Tìm Hiểu Nguồn Gốc",
    link: "/san-pham",
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero-slide-3.png`,
    title: "Hệ Sinh Thái ESG Valley",
    subtitle: "Kết nối thiên nhiên, tôn vinh văn hóa, phát triển cộng đồng bền vững.",
    cta: "Xem Thêm",
    link: "/ve-esg-valley",
  },
];

/* ─── Countdown hook ─── */
function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

const EVENT_DATE = new Date("2025-10-05T09:00:00");

/* ─── Product images (4 featured) ─── */
const featuredProducts = [
  {
    id: 2, name: "Tản Viên Trà", category: "Chè Thượng Hạng",
    desc: "Linh khí đất trời hội tụ nơi núi Tản Viên – dòng trà đầu tiên nuôi dưỡng con người Việt.",
    price: "450,000 ₫",
    image: "/images/product-tan-vien-tra.png",
  },
  {
    id: 3, name: "Mạc Triều Trà", category: "Chè Thượng Hạng",
    desc: "Từ nương chè giản dị đến chén trà dâng vua chúa — hành trình chắt lọc của bao thế hệ.",
    price: "850,000 ₫",
    image: "/images/product-mac-trieu-tra.png",
  },
  {
    id: 4, name: "Bách Niên Trà", category: "Chè Thượng Hạng",
    desc: "Trà Shan Tuyết cổ thụ trên 100 năm tuổi — báu vật văn hóa thiêng liêng qua từng thế hệ.",
    price: "1,500,000 ₫",
    image: "/images/product-bach-nien-tra.png",
  },
  {
    id: 5, name: "Thượng Cổ Trà", category: "Chè Thượng Hạng",
    desc: "Câu chuyện về nàng Công và những đồi chè cổ xưa nhất vùng đất Thái Nguyên hùng vĩ.",
    price: "2,800,000 ₫",
    image: "/images/product-thuong-co-tra.png",
  },
];

/* ─── Certifications ─── */
const certs = [
  { name: "VietGAP", img: "https://placehold.co/100x60/2d5a27/ffffff?text=VietGAP&font=montserrat" },
  { name: "ISO 9001", img: "https://placehold.co/100x60/2d5a27/ffffff?text=ISO+9001&font=montserrat" },
  { name: "USDA Organic", img: "https://placehold.co/100x60/2d5a27/ffffff?text=USDA&font=montserrat" },
  { name: "EU Organic", img: "https://placehold.co/100x60/2d5a27/ffffff?text=EU+Organic&font=montserrat" },
  { name: "OCOP 4 Sao", img: "https://placehold.co/100x60/2d5a27/ffffff?text=OCOP+4+Sao&font=montserrat" },
  { name: "HACCP", img: "https://placehold.co/100x60/2d5a27/ffffff?text=HACCP&font=montserrat" },
];

const stats = [
  { num: "5.000+", label: "Hộ nông dân đối tác" },
  { num: "20+", label: "Vùng nguyên liệu" },
  { num: "100%", label: "Canh tác hữu cơ" },
  { num: "10+", label: "Năm kinh nghiệm" },
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const countdown = useCountdown(EVENT_DATE);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    const fn = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", fn);
    return () => { emblaApi.off("select", fn); };
  }, [emblaApi]);

  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
  };

  const pillar = esgPillars[activePillar];

  return (
    <div className="w-full">
      {/* ════════════════════════════════════════
          1. HERO BANNER
      ════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 relative h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent z-10" />
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={selectedIndex === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-white/80 font-medium tracking-widest uppercase mb-4 text-sm"
                  >{slide.subtitle}</motion.p>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={selectedIndex === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-white font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 whitespace-nowrap"
                  >{slide.title}</motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={selectedIndex === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <Link href={slide.link}>
                      <button className="px-8 py-4 bg-white text-primary hover:bg-white/90 font-semibold uppercase tracking-wider text-sm transition-all duration-300">
                        {slide.cta}
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => scrollTo(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${selectedIndex === idx ? "bg-white w-8" : "bg-white/50 w-2.5"}`}
            />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. SỰ KIỆN SẮP DIỄN RA
          Layout: left (label+title+desc+btn) | right (photo + calendar + countdown)
      ════════════════════════════════════════ */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* ── LEFT: Text ── */}
            <div>
              <div className="flex items-center gap-1.5 mb-4">
                <span className="text-primary text-sm">🌿</span>
                <span className="text-primary text-sm font-semibold">Sự kiện sắp diễn ra</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4 uppercase">
                Khởi Động Dự Án Le Mont Resort &amp; Golf — Công Bố{" "}
                <span className="text-primary">ESGVALLEY</span>{" "}
                — Khánh Thành Đường Vành Đai V
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Sự kiện đánh dấu cột mốc quan trọng trong hành trình phát triển bền vững của ESG Valley — kết nối nông nghiệp xanh, du lịch sinh thái và cộng đồng địa phương trên vùng đất Thái Nguyên.
              </p>
              <Link href="/he-sinh-thai">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white font-semibold rounded-full hover:bg-[#b8973e] transition-colors text-sm">
                  Chi tiết sự kiện <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* ── RIGHT: Photo + Calendar + Countdown ── */}
            <div className="space-y-4">
              {/* Photo + Calendar row */}
              <div className="flex gap-4 items-stretch">
                {/* Photo card — Figma spec: 245×234px, dark overlay, white badge */}
                <div
                  className="flex-1 relative overflow-hidden"
                  style={{
                    height: "234px",
                    borderRadius: "32px",
                    boxShadow: "0px 7px 20px rgba(37,64,17,0.19)",
                  }}
                >
                  {/* Image with dark overlay */}
                  <img
                    src="/images/footer-bg.png"
                    alt="Sự kiện ESG Valley"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.2)" }} />

                  {/* White info badge */}
                  <div
                    className="absolute flex flex-col items-center justify-center"
                    style={{
                      left: "32px",
                      top: "158px",
                      width: "169px",
                      height: "54px",
                      background: "#FFFFFF",
                      borderRadius: "24px",
                      boxShadow: "0px 4px 4.6px rgba(0,0,0,0.25)",
                      padding: "6px 24px",
                    }}
                  >
                    <span className="font-semibold text-[#525252] leading-tight" style={{ fontSize: "20px" }}>Lễ hội trà 2025</span>
                    <span className="font-semibold text-[#A2A2A2]" style={{ fontSize: "12px" }}>Hà Giang, Việt Nam</span>
                  </div>
                </div>

                {/* Calendar widget — Figma spec */}
                <div
                  className="w-[234px] h-[234px] flex-shrink-0 flex flex-col rounded-[32px] overflow-hidden relative"
                  style={{
                    background: "linear-gradient(180deg, #62B751 0%, #B5ED84 100%)",
                    boxShadow: "0px 7px 20px rgba(37,64,17,0.19)",
                  }}
                >
                  {/* Date title */}
                  <div className="px-6 pt-5 pb-2">
                    <p className="text-white font-bold text-[22px] leading-tight tracking-tight">5th Oct, 2025</p>
                  </div>

                  {/* Days of week */}
                  <div className="grid grid-cols-7 px-5">
                    {["S","M","T","W","T","F","S"].map((d, i) => (
                      <span key={i} className="text-white font-bold text-[13px] text-center leading-5">{d}</span>
                    ))}
                  </div>

                  {/* Week row 1: 28–04 */}
                  <div className="grid grid-cols-7 px-5 mt-1">
                    {["28","29","30","01","02","03","04"].map((d, i) => (
                      <span key={i} className="text-white/80 text-[14px] font-medium text-center leading-6">{d}</span>
                    ))}
                  </div>

                  {/* Week row 2: 05–11 (05 highlighted) */}
                  <div className="grid grid-cols-7 px-5 mt-1 items-center">
                    {["05","06","07","08","09","10","11"].map((d, i) => (
                      i === 0 ? (
                        <span key={i} className="flex items-center justify-center">
                          <span
                            className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[14px] font-semibold"
                            style={{ background: "#C6F316", color: "#183806", boxShadow: "0px 1px 5.9px rgba(226,251,81,0.58)" }}
                          >{d}</span>
                        </span>
                      ) : (
                        <span key={i} className="text-white text-[14px] font-medium text-center leading-6">{d}</span>
                      )
                    ))}
                  </div>

                  {/* White footer */}
                  <div className="absolute bottom-0 left-0 right-0 h-[54px] bg-white flex items-center px-5 gap-2" style={{ borderRadius: "20px 20px 32px 32px" }}>
                    <span className="text-[#69CB33] text-lg">🌿</span>
                    <span className="font-semibold text-[#183806] text-sm">9:00 - 12:00</span>
                  </div>
                </div>
              </div>

              {/* Countdown — Figma spec: single dark pill with dividers */}
              <div
                className="flex items-center justify-around h-[116px] px-4"
                style={{
                  background: "#262626",
                  borderRadius: "32px",
                  boxShadow: "0px 7px 20px rgba(37,64,17,0.19)",
                }}
              >
                {[
                  { val: countdown.days,    label: "Days" },
                  { val: countdown.hours,   label: "Hours" },
                  { val: countdown.minutes, label: "Minutes" },
                  { val: countdown.seconds, label: "Seconds" },
                ].map(({ val, label }, i) => (
                  <div key={i} className="flex items-center flex-1">
                    {/* Divider before items 1-3 */}
                    {i > 0 && (
                      <div className="w-px h-[33px] bg-[#A2A2A2] flex-shrink-0 mx-auto" />
                    )}
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <p className="text-white font-medium leading-none tracking-tight" style={{ fontSize: "48px", lineHeight: "60px" }}>
                        {String(val).padStart(2, "0")}
                      </p>
                      <p className="text-white text-base font-medium mt-0.5 tracking-tight">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3. VÒNG TUẦN HOÀN ESG
          Layout: centered title → 3 tab pills → left text | right image
      ════════════════════════════════════════ */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Vòng tuần hoàn ESG
            </h2>
          </motion.div>

          {/* Buttons + dashed border: buttons sit on top edge of border */}
          <div className="relative mt-4">
            {/* 3 Tab pills — centred on the top border line */}
            <div className="relative z-10 flex justify-center flex-wrap gap-2 mb-0">
              {esgPillars.map((p, idx) => (
                <button
                  key={p.code}
                  onClick={() => setActivePillar(idx)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    activePillar === idx
                      ? "bg-primary text-white border-primary shadow-lg"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {p.title} <span className="font-normal">({p.subtitle})</span>
                </button>
              ))}
            </div>

            {/* Dashed border box — pulled up to overlap buttons */}
            <div className="border-[3px] border-dashed border-green-300 rounded-2xl -mt-5 pt-10 pb-8 px-6 md:px-10 border-t-[#57bd7e] border-r-[#57bd7e] border-b-[#57bd7e] border-l-[#57bd7e]">
              {/* Tab content: left text | right image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  {/* Text */}
                  <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white font-display text-2xl font-bold mb-5 shadow-lg">
                      {pillar.code}
                    </div>
                    <h3 className={`font-display text-2xl md:text-3xl font-bold mb-2 ${pillar.textAccent}`}>{pillar.subtitle}</h3>
                    <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-5">{pillar.title}</p>
                    <p className="text-foreground/75 leading-relaxed mb-6">{pillar.description}</p>
                    <ul className="space-y-3">
                      {pillar.points.map(pt => (
                        <li key={pt} className="flex items-center gap-3 text-sm text-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image */}
                  <div className="order-1 lg:order-2 aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                    <img
                      src={pillar.image}
                      alt={pillar.subtitle}
                      className="w-full h-full object-cover rounded-[30px]"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════
          4. CÂU CHUYỆN CỦA CHÚNG TÔI
          Layout: title → 3-col image mosaic
      ════════════════════════════════════════ */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Câu chuyện của <em className="not-italic text-primary">chúng tôi</em>
            </h2>
          </motion.div>

          {/* Video embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl mb-10"
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/08_TGYCQJM8"
                title="Câu chuyện của ESG Valley"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>

          <div className="text-center">
            <Link href="/ve-esg-valley">
              <button className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider group hover:text-primary/80 transition-colors text-sm">
                Xem Thêm <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════
          5. SẢN PHẨM NỔI BẬT
          Layout: centered header → 2×2 product grid
      ════════════════════════════════════════ */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Centered header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sản phẩm nổi bật của chúng tôi
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Những sản phẩm được chắt lọc từ thiên nhiên, mang trong mình lịch sử và tâm huyết của nhiều thế hệ người làm trà Việt.
            </p>
          </motion.div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }} viewport={{ once: true }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted mb-4">
                  <img
                    src={product.image} alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Info */}
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{product.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/san-pham">
              <button className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm text-sm">
                Xem Tất Cả Sản Phẩm <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════
          6. CHỨNG NHẬN CHẤT LƯỢNG
          Layout: title + description | cert logos row | stats
      ════════════════════════════════════════ */}
      <section className="py-20 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Cam Kết Chất Lượng</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Chứng nhận chất lượng</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
              Mỗi sản phẩm ESG Valley được kiểm định bởi các tổ chức quốc tế uy tín, đảm bảo tiêu chuẩn an toàn thực phẩm và thân thiện với môi trường — để bạn có thể an tâm thưởng thức.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <img
              src="/image_2206_nobg.png"
              alt="100+ đối tác thương hiệu"
              className="w-full max-w-2xl object-contain"
            />
            <img
              src="/_.png"
              alt="+"
              className="w-10 h-10 object-contain flex-shrink-0"
            />
          </motion.div>

        </div>
      </section>
      {/* ════════════════════════════════════════
          7. TIN TỨC GẦN ĐÂY
          Layout: title + 3-column news cards
      ════════════════════════════════════════ */}
      <section className="py-20 bg-[#f5f9f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="text-primary text-sm font-semibold mb-2 flex items-center justify-center gap-1">
              <span>🌿</span> Tin tức về chúng tôi
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Tin tức gần đây</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Cập nhật những câu chuyện mới nhất về ESG Valley – từ hành trình bảo tồn trà cổ đến những dấu ấn trên bản đồ trà thế giới.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, idx) => {
              const [day, month] = item.date.split("/");
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }} viewport={{ once: true }}
                  className="group cursor-pointer bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  {/* Image with date badge */}
                  <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image} alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute bottom-0 left-5 translate-y-1/2 w-14 h-14 rounded-full bg-[#C9A84C] flex flex-col items-center justify-center shadow-md">
                      <span className="text-white font-bold text-lg leading-none">{day}</span>
                      <span className="text-white text-xs leading-none mt-0.5">Th{parseInt(month)}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="px-5 pt-10 pb-6">
                    <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">{item.category}</p>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-5">{item.excerpt}</p>
                    <button className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors">
                      Xem chi tiết <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/tin-tuc">
              <button className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm text-sm">
                Xem Tất Cả Tin Tức <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
