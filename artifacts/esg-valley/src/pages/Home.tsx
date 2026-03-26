import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
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
  const [, navigate] = useLocation();
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
                <button
                  className="inline-flex items-center gap-[10px] font-semibold hover:brightness-95 transition-all"
                  style={{
                    background: "#FAD478",
                    borderRadius: "12px",
                    padding: "12px 20px",
                    height: "48px",
                    fontSize: "20px",
                    lineHeight: "24px",
                    color: "#262626",
                  }}
                >
                  Chi tiết sự kiện
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 14.25L21 9.75L16.5 5.25" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 18.75C3 16.3631 3.94821 14.0739 5.63604 12.386C7.32387 10.6982 9.61305 9.75 12 9.75H21" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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
                    <span className="font-semibold text-[#525252] whitespace-nowrap" style={{ fontSize: "15px" }}>Lễ hội trà 2025</span>
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
                  {/* Vector 3 — decorative organic leaf shape */}
                  <svg
                    className="absolute pointer-events-none"
                    style={{ left: "14px", top: "58px" }}
                    width="213" height="176" viewBox="0 0 213 176" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path opacity="0.5" d="M94.6667 124.618C92.9762 137.91 94.6666 139.572 92.9762 164.496C89.5952 189.419 84.5238 164.823 81.1429 161.5C79.2303 159.62 80.0159 148.988 77.7619 129.603C69.6476 80.4201 22.5397 61.4781 0 58.155C55.4476 36.8869 77.1984 81.417 81.1429 106.341C82.4953 99.6943 84.5238 83.0786 79.4524 74.7707C52.4048 42.8685 69.3095 11.631 81.1429 0C79.4524 16.6157 89.5952 18.2773 92.9762 36.5546C95.6809 51.1764 91.2857 66.4629 89.5952 74.7707L87.9048 111.325C92.9762 74.7707 116.643 59.8166 133.548 51.5087C150.452 43.2009 169.048 46.524 182.571 51.5087C193.39 55.4965 207.365 53.1703 213 51.5087C172.429 98.0327 153.188 81.7342 123.405 96.3711C96.5794 109.554 95.8068 115.639 94.6944 124.4L94.6667 124.618Z" fill="#52963E"/>
                  </svg>

                  {/* Date title */}
                  <div className="px-6 pt-5 pb-2 relative z-10">
                    <p className="text-white font-bold text-[22px] leading-tight tracking-tight">5th Oct, 2025</p>
                  </div>

                  {/* Days of week */}
                  <div className="grid grid-cols-7 px-5 relative z-10">
                    {["S","M","T","W","T","F","S"].map((d, i) => (
                      <span key={i} className="text-white font-bold text-[13px] text-center leading-5">{d}</span>
                    ))}
                  </div>

                  {/* Week row 1: 28–04 */}
                  <div className="grid grid-cols-7 px-5 mt-1 relative z-10">
                    {["28","29","30","01","02","03","04"].map((d, i) => (
                      <span key={i} className="text-white/80 text-[14px] font-medium text-center leading-6">{d}</span>
                    ))}
                  </div>

                  {/* Week row 2: 05–11 (05 highlighted) */}
                  <div className="grid grid-cols-7 px-5 mt-1 items-center relative z-10">
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
      <section className="relative py-20 bg-background overflow-hidden">
        {/* Decorative leaf — bleeds in from left edge */}
        <div className="pointer-events-none absolute left-0 top-0 h-full" style={{ zIndex: 0 }}>
          <svg width="342" height="616" viewBox="0 0 342 616" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", left: "-60px", top: "50%", transform: "translateY(-50%)" }}>
            <path d="M-17.1617 391.642C-21.9702 435.852 -28.7342 439.9 -42.5437 521.644C-50.8749 604.702 -49.2542 622.102 -35.7261 614.005C-28.0734 609.425 11.4572 481.67 33.763 420.865C98.1194 268.455 265.438 243.937 341.052 250.729C177.825 139.005 72.8784 265.804 40.8083 343.169C41.569 320.67 47.8537 265.474 70.7176 242.605C183.057 160.673 152.449 46.73 123.102 -8.41073e-05C115.722 54.9338 81.5669 52.4136 56.4662 108.768C36.3857 153.852 38.7993 206.599 37.8483 234.722L15.0379 354.001C26.8918 232.095 -38.2307 165.445 -86.5836 125.498C-134.937 85.5505 -197.769 81.8238 -245.452 87.4002C-283.598 91.8613 -327.085 73.4945 -344.06 63.7535C-248.586 245.419 -173.621 207.775 -88.4321 278.155C-11.7031 341.545 -13.9079 361.78 -17.0826 390.916L-17.1617 391.642Z" fill="#B4E599"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Vòng tuần hoàn <span className="text-primary">ESG</span>
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
          Layout: centered header → 2×2 Figma-spec grid
      ════════════════════════════════════════ */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header — Figma spec */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="font-semibold text-[20px] leading-[25px] text-[#A2A2A2] mb-3">Sản phẩm nổi bật</p>
            <h2 className="font-display font-bold text-[#525252] mb-5" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.25" }}>
              Sản phẩm nổi bật của chúng tôi
            </h2>
            <p className="font-semibold text-[#525252] max-w-2xl mx-auto text-center leading-[30px]" style={{ fontSize: "20px" }}>
              Những sản phẩm được chắt lọc từ thiên nhiên, mang trong mình lịch sử và tâm huyết của nhiều thế hệ người làm trà Việt.
            </p>
          </motion.div>

          {/* 2×2 grid — gap: 72px row, 102px col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[102px] gap-y-[72px]">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }} viewport={{ once: true }}
                className="group cursor-pointer flex flex-col gap-6"
              >
                {/* Square image — border-radius 32px */}
                <div className="aspect-square overflow-hidden bg-muted" style={{ borderRadius: "32px" }}>
                  <img
                    src={product.image} alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Info — all centered */}
                <div className="text-center flex flex-col items-center gap-2">
                  <div className="flex flex-col items-center gap-2">
                    <p className="font-semibold text-[18px] leading-[22px] tracking-tight text-center" style={{ color: "#5F9654" }}>
                      {product.category}
                    </p>
                    <h3 className="font-bold text-[24px] leading-[30px] tracking-tight" style={{ color: "#525252" }}>
                      {product.name}
                    </h3>
                  </div>
                  <p className="font-semibold text-[18px] leading-[30px] line-clamp-2" style={{ color: "#A2A2A2" }}>
                    {product.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
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
      <section className="py-20 bg-white border-y border-border">
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
          7. TIN TỨC GẦN ĐÂY — Figma spec
      ════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "#F9F9F9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-1 mb-3">
              <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8889 16.8753C12.6587 18.6754 12.8889 18.9004 12.6587 22.2754C12.1984 25.6505 11.9683 26.3255 11.5079 25.8755C11.2475 25.621 10.8942 20.1754 10.5873 17.5503C9.48254 10.8902 3.06878 8.32516 0 7.87516C7.54921 4.9951 10.5106 11.0252 11.0476 14.4003C11.2318 13.5003 11.5079 11.2502 10.8175 10.1252C7.13492 5.80512 9.43651 1.57503 11.0476 0C10.8175 2.25004 12.1984 2.47505 12.6587 4.9501C13.027 6.93014 12.4286 9.00018 12.1984 10.1252L11.9683 15.0753C12.6587 10.1252 15.881 8.10016 18.1825 6.97514C20.4841 5.85012 23.0159 6.30013 24.8571 6.97514C26.3302 7.51515 28.2328 7.20014 29 6.97514C23.4762 13.2753 20.8566 11.0682 16.8016 13.0503C13.1493 14.8355 13.0441 15.6594 12.8927 16.8458L12.8889 16.8753Z" fill="#69CB33"/>
              </svg>
              <span className="font-semibold text-[20px] leading-[25px] text-[#A2A2A2]">Tin tức về chúng tôi</span>
            </div>
            <h2 className="font-display font-bold text-[#183806] mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.25" }}>
              Tin tức gần đây
            </h2>
            <p className="font-semibold text-[#A2A2A2] max-w-2xl mx-auto text-center leading-[30px]" style={{ fontSize: "20px" }}>
              Cập nhật những câu chuyện mới nhất về ESG Valley – từ hành trình bảo tồn trà cổ đến những dấu ấn trên bản đồ trà thế giới.
            </p>
          </motion.div>

          {/* 3-column cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[47px]">
            {news.slice(0, 3).map((item, idx) => {
              const [day, month] = item.date.split("/");
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }} viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/tin-tuc/${(item as any).slug || item.id}`)}
                >
                  {/* Image + date badge */}
                  <div className="relative" style={{ paddingLeft: "19px", paddingBottom: "12px" }}>
                    {/* Square image */}
                    <div className="aspect-square overflow-hidden" style={{ borderRadius: "24px" }}>
                      <img
                        src={item.image} alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Date badge — #FAD478 circle, white border, bottom-left */}
                    <div
                      className="absolute flex flex-col items-center justify-center"
                      style={{
                        width: "95px", height: "95px",
                        left: "0px",
                        bottom: "0px",
                        background: "#FAD478",
                        borderRadius: "50%",
                        border: "8px solid #FFFFFF",
                      }}
                    >
                      <span className="font-bold text-center leading-[28px]" style={{ color: "#B7820B", fontSize: "22px" }}>
                        {day}<br />Th{parseInt(month)}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mt-6 text-center flex flex-col items-center gap-2">
                    <p className="font-bold text-[16px] leading-[20px] tracking-tight" style={{ color: "#5F9654" }}>
                      {item.category}
                    </p>
                    <h3 className="font-semibold text-[28px] leading-[35px] line-clamp-2" style={{ color: "#183806" }}>
                      {item.title}
                    </h3>
                    <p className="font-semibold text-[18px] leading-[30px] line-clamp-2" style={{ color: "#525252" }}>
                      {item.excerpt}
                    </p>
                    <button
                      className="mt-2 inline-flex items-center gap-[10px] font-semibold hover:brightness-90 transition-all"
                      style={{
                        background: "#5F9654",
                        borderRadius: "12px",
                        padding: "12px 20px",
                        height: "48px",
                        fontSize: "20px",
                        color: "#FFFFFF",
                      }}
                      onClick={e => { e.stopPropagation(); navigate(`/tin-tuc/${(item as any).slug || item.id}`); }}
                    >
                      Xem chi tiết
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 14.25L21 9.75L16.5 5.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 18.75C3 16.3631 3.94821 14.0739 5.63604 12.386C7.32387 10.6982 9.61305 9.75 12 9.75H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-14 text-center">
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
