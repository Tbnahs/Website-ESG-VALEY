import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play, Leaf, Users, Shield, Globe } from "lucide-react";
import { products, news, certifications } from "@/lib/data";

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
    cta: "Khám Phá Hệ Sinh Thái",
    link: "/he-sinh-thai"
  }
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <div className="w-full">
      {/* 1. Hero Banner */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 relative h-full">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Dark Wash for text readability */}
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
        {/* Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${selectedIndex === idx ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Vòng Tuần Hoàn ESG Valley */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Vòng Tuần Hoàn ESG Valley</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Sự kết hợp hài hòa giữa phát triển kinh tế, bảo vệ môi trường, tôn vinh văn hóa và đóng góp cho xã hội.</p>
          </motion.div>

          <div className="relative w-full max-w-[600px] h-[400px] md:h-[600px] mx-auto mt-12">
            {/* Center */}
            <motion.div 
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, type: "spring" }} viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary to-[#184a2b] flex items-center justify-center shadow-2xl z-20 border-4 border-background"
            >
              <div className="text-center text-primary-foreground">
                <div className="font-display text-3xl md:text-4xl font-bold">ESG</div>
                <div className="text-xs uppercase tracking-widest mt-1 opacity-80">Valley</div>
              </div>
            </motion.div>

            {/* Connecting lines SVG */}
            <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 600 600">
              <circle cx="300" cy="300" r="200" fill="none" stroke="currentColor" className="text-border" strokeWidth="1" strokeDasharray="5,5" />
            </svg>

            {/* Orbiting Elements */}
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="absolute top-[5%] md:top-[10%] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center mb-3 border border-border">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <span className="font-semibold text-foreground bg-background/80 backdrop-blur px-3 py-1 rounded-full text-sm">Môi Trường</span>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="absolute top-1/2 right-[5%] md:right-[10%] -translate-y-1/2 z-30 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center mb-3 border border-border">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <span className="font-semibold text-foreground bg-background/80 backdrop-blur px-3 py-1 rounded-full text-sm">Cộng Đồng</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="absolute bottom-[5%] md:bottom-[10%] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center mb-3 border border-border">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <span className="font-semibold text-foreground bg-background/80 backdrop-blur px-3 py-1 rounded-full text-sm">Quản Trị</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} viewport={{ once: true }} className="absolute top-1/2 left-[5%] md:left-[10%] -translate-y-1/2 z-30 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center mb-3 border border-border">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <span className="font-semibold text-foreground bg-background/80 backdrop-blur px-3 py-1 rounded-full text-sm">Văn Hoá</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Brand Video */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="text-accent font-semibold tracking-widest uppercase mb-4 text-sm">Khám Phá</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Câu Chuyện ESG Valley</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Khởi nguồn từ niềm đam mê sâu sắc với trà Việt, ESG Valley không chỉ mang đến những phẩm trà thượng hạng mà còn kể câu chuyện về văn hóa, con người và vùng đất sinh ra nó. Mỗi tách trà là một hành trình kết nối quá khứ, hiện tại và tương lai bền vững.
              </p>
              <Link href="/ve-esg-valley">
                <button className="flex items-center text-primary font-semibold uppercase tracking-wider group hover:text-primary/80 transition-colors">
                  Tìm Hiểu Hành Trình <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="relative rounded-sm overflow-hidden shadow-2xl group cursor-pointer aspect-video"
            >
              <img src={`${import.meta.env.BASE_URL}images/video-thumb.png`} alt="Video Thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Tuyệt Phẩm Từ Thiên Nhiên</h2>
              <p className="text-muted-foreground">Những sản phẩm tự hào mang thương hiệu ESG Valley, được chăm chút từ búp trà non đến tay người thưởng thức.</p>
            </motion.div>
            <Link href="/san-pham" className="mt-6 md:mt-0">
              <button className="hidden md:flex items-center text-primary font-semibold uppercase tracking-wider group hover:text-primary/80 transition-colors">
                Xem Tất Cả <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }} viewport={{ once: true }}
                className="group bg-card border border-border/50 rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur text-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mt-6">
                    <span className="font-semibold text-lg text-foreground">{product.price}</span>
                    <button className="text-primary hover:text-primary/80 font-medium text-sm border-b border-primary pb-0.5">
                      Xem Chi Tiết
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link href="/san-pham">
              <button className="inline-flex items-center text-primary font-semibold uppercase tracking-wider group hover:text-primary/80 transition-colors">
                Xem Tất Cả <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Certifications */}
      <section className="py-12 bg-accent/10 border-y border-accent/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest">Bảo Chứng Chất Lượng & Bền Vững</p>
          </div>
          {/* Simple Marquee effect */}
          <div className="flex space-x-12 md:space-x-24 animate-[scroll_30s_linear_infinite] w-max items-center">
            {[...certifications, ...certifications, ...certifications].map((cert, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-foreground/70 opacity-70 hover:opacity-100 transition-opacity">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-display font-bold text-xl md:text-2xl whitespace-nowrap">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. News Highlights */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Tin Tức & Hoạt Động</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <motion.article 
                key={item.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }} viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/2] overflow-hidden rounded-sm mb-6 relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-sm">
                    {item.category}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-3">{item.date}</div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{item.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* 7. Newsletter CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={`${import.meta.env.BASE_URL}images/ecosystem-banner.png`} alt="Texture" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Trở Thành Một Phần Của ESG Valley</h2>
            <p className="text-primary-foreground/80 mb-10 text-lg">Đăng ký nhận bản tin để cập nhật những kiến thức về văn hóa trà và các dự án phát triển bền vững của chúng tôi.</p>
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
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
