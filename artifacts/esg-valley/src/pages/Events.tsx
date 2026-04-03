import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Clock, CalendarDays, ArrowRight, ChevronRight } from "lucide-react";
import { news } from "@/lib/data";

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
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

const EVENT_DATE = new Date("2026-03-22T09:00:00");

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ─── Upcoming events ─── */
const upcomingEvents = [
  {
    id: 1,
    name: "Lễ Xuống Giống",
    subtitle: "Nghi lễ truyền thống khởi đầu mùa trà mới",
    date: "22/03/2026",
    time: "09:00 - 11:00",
    location: "Xã Quân Chu, Đại Từ, Thái Nguyên",
    image: "/images/su-kien.jpg",
    isFeatured: true,
    badge: "Sự kiện nổi bật",
    badgeColor: "#C9A84C",
    description:
      "Sự kiện đánh dấu cột mốc quan trọng trong hành trình phát triển bền vững của ESG Valley — kết nối nông nghiệp xanh, du lịch sinh thái và cộng đồng địa phương trên vùng đất Thái Nguyên. Nghi lễ xuống giống được tổ chức theo truyền thống, cầu mong một mùa trà bội thu.",
    tags: ["Nông nghiệp", "Di sản", "Cộng đồng"],
  },
  {
    id: 2,
    name: "Tiệc Trà Di Sản",
    subtitle: "Trải nghiệm văn hóa trà cung đình Việt",
    date: "15/04/2026",
    time: "14:00 - 17:00",
    location: "Showroom ESG Valley, Tây Hồ, Hà Nội",
    image: "/images/news-5.jpg",
    isFeatured: false,
    badge: "Văn hóa",
    badgeColor: "#5F9654",
    description:
      "Buổi thưởng trà theo phong cách cung đình, nơi khách mời được trải nghiệm trọn vẹn hành trình từ hái búp đến pha chén trà hoàn hảo theo bộ quy tắc Nhất Thủy — Nhì Trà — Tam Pha — Tứ Ấm.",
    tags: ["Thưởng trà", "Văn hóa"],
  },
  {
    id: 3,
    name: "Tea Show — Hương Trà Thái Nguyên",
    subtitle: "Triển lãm và trình diễn trà đặc sản",
    date: "10/05/2026",
    time: "08:00 - 17:00",
    location: "Trung tâm Triển lãm, TP. Thái Nguyên",
    image: "/images/news-6.jpg",
    isFeatured: false,
    badge: "Triển lãm",
    badgeColor: "#572A01",
    description:
      "Sự kiện quy tụ các nhà sản xuất trà uy tín toàn quốc, nơi ESG Valley giới thiệu bộ sưu tập trà cổ thụ độc quyền và tổ chức các workshop pha trà dành cho người yêu trà.",
    tags: ["Triển lãm", "Workshop"],
  },
];

/* ─── Past events from news ─── */
const pastEvents = news.slice(0, 4).map((n) => ({
  id: n.id,
  slug: n.slug,
  title: n.title,
  date: n.date,
  category: n.category,
  excerpt: n.excerpt,
  image: n.image,
}));

export default function Events() {
  const countdown = useCountdown(EVENT_DATE);

  return (
    <div style={{ isolation: "isolate" }}>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#183806]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/images/su-kien.jpg)" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#183806]/60 via-[#183806]/40 to-[#183806]/90" />

        {/* Decorative leaf */}
        <div className="pointer-events-none absolute right-0 top-0 opacity-20">
          <svg width="340" height="400" viewBox="0 0 342 616" fill="none">
            <path d="M-17.1617 391.642C-21.9702 435.852 -28.7342 439.9 -42.5437 521.644C-50.8749 604.702 -49.2542 622.102 -35.7261 614.005C-28.0734 609.425 11.4572 481.67 33.763 420.865C98.1194 268.455 265.438 243.937 341.052 250.729C177.825 139.005 72.8784 265.804 40.8083 343.169C41.569 320.67 47.8537 265.474 70.7176 242.605C183.057 160.673 152.449 46.73 123.102 -8.41073e-05C115.722 54.9338 81.5669 52.4136 56.4662 108.768C36.3857 153.852 38.7993 206.599 37.8483 234.722L15.0379 354.001C26.8918 232.095 -38.2307 165.445 -86.5836 125.498C-134.937 85.5505 -197.769 81.8238 -245.452 87.4002C-283.598 91.8613 -327.085 73.4945 -344.06 63.7535C-248.586 245.419 -173.621 207.775 -88.4321 278.155C-11.7031 341.545 -13.9079 361.78 -17.0826 390.916L-17.1617 391.642Z" fill="#B4E599" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 mb-6">
              <CalendarDays className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm font-semibold tracking-wider uppercase">Sự kiện & Hoạt động</span>
            </div>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.15 }}>
              Sự Kiện Sắp Diễn Ra
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Tham gia cùng ESG Valley trong những hành trình khám phá văn hóa trà, lễ hội nông nghiệp và các sự kiện cộng đồng đặc sắc.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED EVENT ── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {/* Featured event card */}
            <div
              className="relative overflow-hidden rounded-[32px] shadow-2xl"
              style={{ background: "linear-gradient(135deg, #183806 0%, #2d5a1b 50%, #3d7a3d 100%)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left: Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px] overflow-hidden">
                  <img
                    src="/images/su-kien.jpg"
                    alt="Lễ Xuống Giống"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#183806]/60" />

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <span
                      className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold"
                      style={{ background: "#C9A84C", color: "#262626" }}
                    >
                      ✦ Sự kiện nổi bật
                    </span>
                  </div>

                  {/* Location badge */}
                  <div
                    className="absolute bottom-6 left-6 flex flex-col items-start px-5 py-3"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      borderRadius: "20px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    }}
                  >
                    <span className="font-bold text-[#525252] text-[15px]">Lễ xuống giống</span>
                    <span className="font-medium text-[#A2A2A2] text-[12px]">Xã Quân Chu, Việt Nam</span>
                  </div>
                </div>

                {/* Right: Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Nông nghiệp", "Di sản", "Cộng đồng"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-display font-bold text-white mb-2" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                    Lễ Xuống Giống
                  </h2>
                  <p className="text-white/60 font-medium text-base mb-5 italic">
                    Nghi lễ truyền thống khởi đầu mùa trà mới
                  </p>

                  {/* Info rows */}
                  <div className="space-y-3 mb-7">
                    <div className="flex items-center gap-3 text-white/80">
                      <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                        <CalendarDays className="w-4 h-4 text-[#C9A84C]" />
                      </div>
                      <span className="text-sm font-medium">Thứ Bảy, 22 tháng 3 năm 2026</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-[#C9A84C]" />
                      </div>
                      <span className="text-sm font-medium">09:00 – 11:00 (giờ địa phương)</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-[#C9A84C]" />
                      </div>
                      <span className="text-sm font-medium">Xã Quân Chu, Đại Từ, Thái Nguyên</span>
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed text-sm mb-8">
                    Sự kiện đánh dấu cột mốc quan trọng trong hành trình phát triển bền vững của ESG Valley — kết nối nông nghiệp xanh, du lịch sinh thái và cộng đồng địa phương trên vùng đất Thái Nguyên.
                  </p>

                  {/* Countdown */}
                  <div
                    className="rounded-2xl overflow-hidden mb-8"
                    style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <div className="px-4 py-2 border-b border-white/10">
                      <p className="text-white/50 text-xs font-semibold uppercase tracking-widest text-center">Đếm ngược đến sự kiện</p>
                    </div>
                    <div className="grid grid-cols-4 divide-x divide-white/10">
                      {[
                        { val: countdown.days, label: "Ngày" },
                        { val: countdown.hours, label: "Giờ" },
                        { val: countdown.minutes, label: "Phút" },
                        { val: countdown.seconds, label: "Giây" },
                      ].map(({ val, label }) => (
                        <div key={label} className="py-3 flex flex-col items-center">
                          <span className="text-white font-bold text-2xl leading-none">
                            {String(val).padStart(2, "0")}
                          </span>
                          <span className="text-white/50 text-xs mt-1">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/lien-he">
                    <button
                      className="inline-flex items-center gap-2 w-full justify-center font-bold text-[#262626] hover:brightness-95 transition-all rounded-xl py-3"
                      style={{ background: "#C9A84C", fontSize: "16px" }}
                    >
                      Đăng ký tham dự
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CÁC SỰ KIỆN KHÁC ── */}
      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <h2 className="font-display font-bold text-[#183806]" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
              Các sự kiện <span style={{ color: "#C9A84C" }}>sắp tới</span>
            </h2>
            <p className="text-[#A2A2A2] font-medium mt-2">Khám phá thêm những hoạt động thú vị của ESG Valley</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.slice(1).map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group rounded-[24px] overflow-hidden border border-border bg-background hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: event.badgeColor }}
                    >
                      {event.badge}
                    </span>
                  </div>

                  {/* Date overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg leading-tight">{event.name}</p>
                    <p className="text-white/80 text-sm">{event.subtitle}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-[#525252] text-sm">
                      <CalendarDays className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-medium">{event.date} · {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#525252] text-sm">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-[#A2A2A2] text-sm leading-relaxed line-clamp-2 mb-5">{event.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {event.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/lien-he">
                    <button className="w-full py-2.5 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      Tìm hiểu thêm <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SỰ KIỆN ĐÃ QUA ── */}
      <section className="py-20" style={{ background: "#F9F9F9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <svg width="22" height="20" viewBox="0 0 29 26" fill="none">
                <path d="M12.8889 16.8753C12.6587 18.6754 12.8889 18.9004 12.6587 22.2754C12.1984 25.6505 11.9683 26.3255 11.5079 25.8755C11.2475 25.621 10.8942 20.1754 10.5873 17.5503C9.48254 10.8902 3.06878 8.32516 0 7.87516C7.54921 4.9951 10.5106 11.0252 11.0476 14.4003C11.2318 13.5003 11.5079 11.2502 10.8175 10.1252C7.13492 5.80512 9.43651 1.57503 11.0476 0C10.8175 2.25004 12.1984 2.47505 12.6587 4.9501C13.027 6.93014 12.4286 9.00018 12.1984 10.1252L11.9683 15.0753C12.6587 10.1252 15.881 8.10016 18.1825 6.97514C20.4841 5.85012 23.0159 6.30013 24.8571 6.97514C26.3302 7.51515 28.2328 7.20014 29 6.97514C23.4762 13.2753 20.8566 11.0682 16.8016 13.0503C13.1493 14.8355 13.0441 15.6594 12.8927 16.8458L12.8889 16.8753Z" fill="#69CB33" />
              </svg>
              <span className="font-semibold text-[#A2A2A2]">Nhìn lại hành trình</span>
            </div>
            <h2 className="font-display font-bold text-[#183806]" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
              Sự kiện đã diễn ra
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((ev, idx) => {
              const [day, month] = ev.date.split("/");
              return (
                <motion.article
                  key={ev.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => window.location.href = `/tin-tuc/${ev.slug}`}
                >
                  {/* Image + date badge */}
                  <div className="relative" style={{ paddingLeft: "14px", paddingBottom: "10px" }}>
                    <div className="aspect-square overflow-hidden" style={{ borderRadius: "20px" }}>
                      <img
                        src={ev.image}
                        alt={ev.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                    </div>
                    {/* Date badge */}
                    <div
                      className="absolute flex flex-col items-center justify-center"
                      style={{
                        width: "72px", height: "72px",
                        left: 0, bottom: 0,
                        background: "#FAD478",
                        borderRadius: "50%",
                        border: "6px solid #F9F9F9",
                      }}
                    >
                      <span className="font-bold text-center leading-tight" style={{ color: "#B7820B", fontSize: "16px" }}>
                        {day}<br />Th{parseInt(month)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 px-1">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#5F9654" }}>
                      {ev.category}
                    </span>
                    <h3 className="font-semibold text-[15px] leading-snug line-clamp-2 mt-1" style={{ color: "#183806" }}>
                      {ev.title}
                    </h3>
                    <p className="text-[#A2A2A2] text-xs leading-relaxed line-clamp-2 mt-1.5">{ev.excerpt}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/tin-tuc">
              <button className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm text-sm">
                Xem tất cả tin tức <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div
              className="rounded-[32px] p-10 md:p-16"
              style={{
                background: "linear-gradient(135deg, #183806 0%, #3d7a3d 100%)",
              }}
            >
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
                Muốn cập nhật sự kiện sớm nhất?
              </h2>
              <p className="text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
                Đăng ký nhận thông báo từ ESG Valley để không bỏ lỡ bất kỳ sự kiện nào — từ lễ hội nông nghiệp, tea show đến các chương trình tham quan vùng nguyên liệu.
              </p>
              <Link href="/lien-he">
                <button
                  className="inline-flex items-center gap-2 font-bold text-[#262626] hover:brightness-95 transition-all rounded-xl px-8 py-3"
                  style={{ background: "#C9A84C", fontSize: "16px" }}
                >
                  Liên hệ với chúng tôi
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
