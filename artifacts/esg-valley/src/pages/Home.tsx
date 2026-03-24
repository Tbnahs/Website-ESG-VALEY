import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play, Shield, ChevronRight, Calendar, Clock, MapPin, Award, Leaf, Users } from "lucide-react";
import { products, news, certifications, esgPillars } from "@/lib/data";

const slides = [
  {
    image: `${import.meta.env.BASE_URL}images/hero-slide-1.png`,
    title: "Bộ Sưu Tập Quà Tặng Tết 2026",
    subtitle: "Tinh Hoa Trà Việt - Trọn Vẹn Tâm Tình",
    cta: "Khám Phá Ngay",
    link: "/san-pham"
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero-slide-2.png`,
    title: "Trà Di Sản Shan Tuyết",
    subtitle: "Hương vị nguyên bản từ những rừng trà cổ thụ hàng trăm năm tuổi.",
    cta: "Tìm Hiểu Nguồn Gốc",
    link: "/ve-esg-valley"
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero-slide-3.png`,
    title: "Hệ Sinh Thái ESG Valley",
    subtitle: "Kết nối thiên nhiên, tôn vinh văn hóa, phát triển cộng đồng bền vững.",
    cta: "Xem Thêm",
    link: "/ve-esg-valley"
  }
];

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const update = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
}

const upcomingEvent = {
  title: "Khởi Động Dự Án Le Mont Resort & Golf",
  subtitle: "Công Bố ESGValley · Khánh Thành Đường Vành Đai V",
  date: new Date("2025-10-05T09:00:00"),
  dateLabel: "05 / 10 / 2025",
  time: "9:00 – 12:00",
  location: "Le Mont Resort & Golf, Thái Nguyên",
  description: "Sự kiện đánh dấu cột mốc quan trọng trong hành trình phát triển bền vững của ESG Valley – ra mắt không gian sinh thái trà đẳng cấp quốc tế, kết hợp bảo tồn thiên nhiên và văn hóa Việt.",
};

const featuredProducts = products.filter(p => [2, 3, 4, 5].includes(p.id));

const certLogos = [
  { icon: Award, name: "VietGAP", sub: "Certified" },
  { icon: Shield, name: "ISO 9001", sub: ":2015" },
  { icon: Leaf, name: "USDA", sub: "Organic" },
  { icon: Shield, name: "EU Organic", sub: "Certified" },
  { icon: Award, name: "OCOP", sub: "4 Sao ★★★★" },
  { icon: Shield, name: "HACCP", sub: "Certified" },
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activePillar, setActivePillar] = useState(0);
  const countdown = useCountdown(upcomingEvent.date);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="w-full">

      {/* ─────────────────────────────────────────
          1. Hero Banner
      ───────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 relative h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={selectedIndex === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-white/80 font-medium tracking-widest uppercase mb-4 text-sm md:text-base"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={selectedIndex === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-white font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-4xl"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={selectedIndex === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <Link href={slide.link}>
                      <button className="px-8 py-4 bg-white text-primary hover:bg-white/90 font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
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
              className={`h-2.5 rounded-full transition-all duration-300 ${selectedIndex === idx ? "bg-white w-8" : "bg-white/50 hover:bg-white/80 w-2.5"}`}
            />
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. Vòng Tuần Hoàn ESG Valley
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Triết Lý Phát Triển</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5">Vòng Tuần Hoàn ESG Valley</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sự kết hợp hài hòa giữa bảo vệ môi trường, phát triển xã hội và quản trị minh bạch — tạo nên vòng tuần hoàn bền vững cho từng búp trà và mỗi cộng đồng.
            </p>
          </motion.div>

          {/* Pillar Tabs (mobile) + 3-column cards (desktop) */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {esgPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.code}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.7 }} viewport={{ once: true }}
                className="group relative rounded-sm overflow-hidden border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Card top bar gradient */}
                <div className={`h-2 w-full bg-gradient-to-r ${pillar.color}`} />
                <div className="p-8">
                  {/* Big letter */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${pillar.color} mb-6 shadow-lg`}>
                    <span className="font-display text-2xl font-bold text-white">{pillar.code}</span>
                  </div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">{pillar.title}</div>
                  <h3 className={`font-display text-2xl font-bold mb-4 ${pillar.textAccent}`}>{pillar.subtitle}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.points.map(pt => (
                      <li key={pt} className="flex items-center gap-2 text-sm text-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${pillar.color}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile accordion */}
          <div className="md:hidden space-y-3">
            {esgPillars.map((pillar, idx) => (
              <div key={pillar.code} className="border border-border rounded-sm overflow-hidden">
                <button
                  onClick={() => setActivePillar(activePillar === idx ? -1 : idx)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="font-display text-lg font-bold text-white">{pillar.code}</span>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{pillar.title}</div>
                    <div className={`font-display text-lg font-bold ${pillar.textAccent}`}>{pillar.subtitle}</div>
                  </div>
                  <ChevronRight className={`ml-auto w-5 h-5 transition-transform ${activePillar === idx ? "rotate-90" : ""}`} />
                </button>
                {activePillar === idx && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    <p className="mb-4">{pillar.description}</p>
                    <ul className="space-y-1.5">
                      {pillar.points.map(pt => (
                        <li key={pt} className="flex items-center gap-2 text-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${pillar.color}`} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Central ESG badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-full px-8 py-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-900 flex items-center justify-center">
                <span className="font-display text-sm font-bold text-white">ESG</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground">Phát Triển Bền Vững – Từ Gốc Rễ Đến Tương Lai</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. Câu Chuyện Của Chúng Tôi
      ───────────────────────────────────────── */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main story block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="text-accent font-semibold tracking-widest uppercase mb-4 text-sm">Khám Phá</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Câu Chuyện Của Chúng Tôi</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Khởi nguồn từ niềm đam mê sâu sắc với trà Việt, ESG Valley không chỉ mang đến những phẩm trà thượng hạng mà còn kể câu chuyện về văn hóa, con người và vùng đất sinh ra nó. Mỗi tách trà là một hành trình kết nối quá khứ, hiện tại và tương lai bền vững.
              </p>
              <Link href="/ve-esg-valley">
                <button className="flex items-center text-primary font-semibold uppercase tracking-wider group hover:text-primary/80 transition-colors">
                  Tìm Hiểu Hành Trình <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="relative rounded-sm overflow-hidden shadow-2xl group cursor-pointer aspect-video"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/video-thumb.png`}
                alt="Video ESG Valley"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Vùng nguyên liệu sub-section */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Leaf,
                title: "Vùng Nguyên Liệu",
                description: "Đây là nơi bắt đầu hành trình của những búp chè – nơi đất trời và con người vùng cao cùng nhau nuôi dưỡng từng mầm non xanh mát.",
                img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80&w=600"
              },
              {
                icon: Users,
                title: "Dự Án Về Nông Nghiệp Xanh",
                description: "Phát triển vùng nguyên liệu chè hữu cơ, bảo tồn văn hóa, và nâng tầm thương hiệu trà Thái Nguyên ra thế giới.",
                img: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=80&w=600"
              },
              {
                icon: Shield,
                title: "Cam Kết Bảo Tồn",
                description: "Mỗi sản phẩm ESG Valley là lời cam kết bảo vệ đa dạng sinh học, duy trì các giống trà cổ quý hiếm và hệ sinh thái rừng trà tự nhiên.",
                img: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=600"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title} variants={fadeUp}
                className="bg-background rounded-sm overflow-hidden border border-border group hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <item.icon className="w-4 h-4 text-primary" />
                    <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Link href="/ve-esg-valley">
              <button className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider group hover:text-primary/80 transition-colors">
                Xem Thêm <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. Sản Phẩm Nổi Bật
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row justify-between items-end mb-14">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Chè Thượng Hạng</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Sản Phẩm Nổi Bật</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sản phẩm nổi bật của chúng tôi — những phẩm trà được chắt lọc từ thiên nhiên, mang trong mình lịch sử, văn hóa và tâm huyết của nhiều thế hệ người làm trà Việt.
              </p>
            </motion.div>
            <Link href="/san-pham" className="mt-6 md:mt-0 flex-shrink-0">
              <button className="hidden md:flex items-center text-primary font-semibold uppercase tracking-wider group hover:text-primary/80 transition-colors">
                Xem Tất Cả <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>

          {/* 4 featured products — 2x2 grid with large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }} viewport={{ once: true }}
                className="group bg-card border border-border/50 rounded-sm overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className="md:w-52 lg:w-64 flex-shrink-0 overflow-hidden relative">
                  <img
                    src={product.image} alt={product.name}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-full">
                    {product.category}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">{product.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/50">
                    <span className="font-bold text-lg text-foreground">{product.price}</span>
                    <button className="flex items-center gap-1 text-primary hover:text-primary/80 font-semibold text-sm group/btn transition-colors">
                      Xem Chi Tiết <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/san-pham">
              <button className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm">
                Khám Phá Toàn Bộ Sản Phẩm <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          5. Bảo Chứng Chất Lượng & Bền Vững
      ───────────────────────────────────────── */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Cam Kết Chất Lượng</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Bảo Chứng Chất Lượng & Bền Vững</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Mỗi sản phẩm ESG Valley được kiểm định bởi các tổ chức quốc tế uy tín, đảm bảo tiêu chuẩn an toàn và thân thiện với môi trường.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {certLogos.map((cert, idx) => (
              <motion.div
                key={cert.name} variants={fadeUp}
                className="flex flex-col items-center justify-center bg-background border border-border rounded-sm p-5 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-display font-bold text-foreground text-center leading-tight text-sm">{cert.name}</span>
                <span className="text-muted-foreground text-xs text-center mt-0.5">{cert.sub}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scrolling marquee of names */}
          <div className="mt-10 overflow-hidden relative">
            <div className="flex space-x-16 animate-[marquee_40s_linear_infinite] w-max items-center py-3">
              {[...certifications, ...certifications, ...certifications].map((cert, idx) => (
                <span key={idx} className="text-muted-foreground/50 font-display text-lg font-bold uppercase whitespace-nowrap tracking-widest">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          6. Tin Tức & Hoạt Động (+ Sự Kiện)
      ───────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">Cập Nhật Mới Nhất</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Tin Tức & Hoạt Động</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Những câu chuyện về trà, con người và hành trình phát triển bền vững của ESG Valley.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Upcoming Event Highlight — spans 1 column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}
              className="lg:col-span-1 bg-primary text-primary-foreground rounded-sm overflow-hidden flex flex-col"
            >
              <div className="px-7 pt-7 pb-5 border-b border-white/10">
                <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">Sự Kiện Sắp Diễn Ra</p>
                <h3 className="font-display text-xl font-bold leading-snug">{upcomingEvent.title}</h3>
                <p className="text-white/70 text-sm mt-1">{upcomingEvent.subtitle}</p>
              </div>

              {/* Countdown */}
              <div className="px-7 py-5 border-b border-white/10">
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { val: countdown.days, label: "Ngày" },
                    { val: countdown.hours, label: "Giờ" },
                    { val: countdown.minutes, label: "Phút" },
                    { val: countdown.seconds, label: "Giây" },
                  ].map(({ val, label }) => (
                    <div key={label} className="bg-white/10 rounded-sm py-3 px-1">
                      <div className="font-display text-2xl font-bold">{String(val).padStart(2, "0")}</div>
                      <div className="text-[10px] uppercase tracking-wider text-white/60 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-7 py-5 flex-grow space-y-3 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-white/60 flex-shrink-0" />
                  <span>{upcomingEvent.dateLabel}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white/60 flex-shrink-0" />
                  <span>{upcomingEvent.time}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" />
                  <span>{upcomingEvent.location}</span>
                </div>
                <p className="text-white/60 text-xs leading-relaxed pt-2 border-t border-white/10">{upcomingEvent.description}</p>
              </div>

              <div className="px-7 pb-7">
                <button className="w-full py-3 bg-white text-primary font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-colors rounded-sm">
                  Chi Tiết Sự Kiện
                </button>
              </div>
            </motion.div>

            {/* News grid — 2 columns */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {news.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }} viewport={{ once: true }}
                  className="group cursor-pointer flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-sm mb-4 relative flex-shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-sm">
                      {item.category}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" /> {item.date}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 flex-grow">{item.excerpt}</p>
                  <button className="mt-3 flex items-center gap-1 text-primary text-xs font-semibold uppercase tracking-wider group/btn">
                    Đọc Thêm <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.article>
              ))}

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }} viewport={{ once: true }}
                className="bg-muted border border-border rounded-sm p-6 flex flex-col justify-center items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">Xem Tất Cả Tin Tức</h4>
                <p className="text-muted-foreground text-sm mb-4">Cập nhật đầy đủ các hoạt động và câu chuyện từ ESG Valley</p>
                <Link href="/tin-tuc">
                  <button className="px-5 py-2.5 border border-primary text-primary text-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm">
                    Tin Tức & Hoạt Động
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          7. Newsletter CTA
      ───────────────────────────────────────── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}images/ecosystem-banner.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Trở Thành Một Phần Của ESG Valley</h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">Đăng ký nhận bản tin để cập nhật kiến thức về văn hóa trà và các dự án phát triển bền vững.</p>
            <form className="flex flex-col sm:flex-row max-w-2xl mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Nhập địa chỉ email của bạn..."
                className="flex-grow px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-white/20 rounded-sm transition-all"
                required
              />
              <button type="submit" className="px-8 py-4 bg-white text-primary font-bold uppercase tracking-wider hover:bg-secondary transition-colors rounded-sm shadow-lg">
                Đăng Ký
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </div>
  );
}
