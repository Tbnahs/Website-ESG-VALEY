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
