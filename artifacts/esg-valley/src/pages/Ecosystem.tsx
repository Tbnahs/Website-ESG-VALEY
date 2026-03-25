import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Microscope, Leaf, Landmark, FlaskConical, Compass, GraduationCap,
  ChevronRight, ScanLine, BarChart3, Factory, Award, TreePine,
  BookOpen, Users, Beaker, Cpu, Palette, Sprout, ArrowRight,
} from "lucide-react";

/* ─── Quick overview pillars ─── */
const pillars = [
  { icon: Microscope, label: "Viện Nghiên Cứu & Công Nghệ", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Leaf, label: "Vùng Nguyên Liệu & Sản Xuất", color: "text-green-600", bg: "bg-green-50" },
  { icon: Landmark, label: "Bảo Tồn Di Sản", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: FlaskConical, label: "Nghiên Cứu & Phát Triển", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: Compass, label: "Trải Nghiệm & Du Lịch", color: "text-teal-600", bg: "bg-teal-50" },
  { icon: GraduationCap, label: "Giáo Dục & Đào Tạo", color: "text-rose-600", bg: "bg-rose-50" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

export default function Ecosystem() {
  return (
    <div className="w-full bg-background">

      {/* ════════ HERO ════════ */}
      <div className="relative pt-44 pb-32 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/ecosystem-banner.png`}
          alt="Hệ sinh thái ESGValley"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
            className="text-[#C9A84C] text-sm uppercase tracking-[0.35em] font-semibold mb-4"
          >
            ESG Valley
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Hệ Sinh Thái <span className="text-[#C9A84C]">ESGValley</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed mb-10"
          >
            Mô hình vòng tuần hoàn khép kín — nơi công nghệ, thiên nhiên, văn hóa và con người cùng phát triển bền vững theo chuẩn mực ESG quốc tế.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {pillars.map((p, i) => (
              <span key={i} className="flex items-center gap-1.5 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs font-medium">
                <p.icon className="w-3.5 h-3.5" /> {p.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ════════ 01 — VIỆN NGHIÊN CỨU ════════ */}
      <section id="vien-nghien-cuu" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C9A84C] text-sm uppercase tracking-[0.3em] font-semibold mb-3">01</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Viện Nghiên Cứu Công Nghệ & Chuyển Đổi Số
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              Tiên phong ứng dụng công nghệ hiện đại vào ngành nông nghiệp trà Việt Nam, thúc đẩy chuyển đổi số toàn diện từ vùng trồng đến tay người tiêu dùng.
            </p>
          </motion.div>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Sprout,
                title: "Chuyển đổi số Nông nghiệp",
                desc: "Ứng dụng IoT, AI và dữ liệu lớn vào giám sát, phân tích và tối ưu hóa quy trình canh tác trà hữu cơ trên các vùng nguyên liệu.",
                num: "A",
              },
              {
                icon: ScanLine,
                title: "Truy xuất nguồn gốc",
                desc: "Hệ thống blockchain và QR code cho phép người tiêu dùng truy xuất toàn bộ hành trình của từng lô trà — từ vườn cây đến tay khách hàng.",
                num: "B",
              },
              {
                icon: BarChart3,
                title: "Số hóa quản trị & vận hành",
                desc: "Triển khai ERP, CRM và BI giúp doanh nghiệp vận hành minh bạch, hiệu quả và đáp ứng tiêu chuẩn ESG quốc tế.",
                num: "C",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/3 rounded-bl-full" />
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-6 text-6xl font-display font-bold text-primary/5 select-none">{item.num}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ 02 — VÙNG NGUYÊN LIỆU ════════ */}
      <section id="vung-nguyen-lieu" className="py-24 bg-[#f5f9f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="/images/cau-chuyen-01.jpg"
                  alt="Vùng nguyên liệu ESGValley"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-2xl font-display font-bold">100%</div>
                <div className="text-xs text-white/80">Hữu cơ tự nhiên</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
            >
              <p className="text-[#C9A84C] text-sm uppercase tracking-[0.3em] font-semibold mb-3">02</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                Phát Triển Vùng Nguyên Liệu & Sản Xuất
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Xây dựng vùng nguyên liệu hữu cơ bền vững, kết hợp trung tâm vận hành hiện đại theo chuẩn ESG quốc tế, đảm bảo chất lượng từ gốc đến sản phẩm.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Sprout, title: "Vùng nguyên liệu hữu cơ", desc: "Quy hoạch vùng trồng chè chuẩn hữu cơ, bảo vệ hệ sinh thái và đa dạng sinh học, không sử dụng hóa chất độc hại." },
                  { icon: Factory, title: "Trung tâm vận hành Quân Chu", desc: "Nơi kết hợp công nghệ hiện đại và tri thức truyền thống trong từng công đoạn chế biến trà thượng hạng." },
                  { icon: Award, title: "Tiêu chuẩn ESG", desc: "Áp dụng toàn diện bộ tiêu chuẩn Environmental – Social – Governance vào toàn bộ chuỗi giá trị." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm mb-1">{item.title}</div>
                        <div className="text-muted-foreground text-xs leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ 03 — BẢO TỒN DI SẢN (full bleed) ════════ */}
      <section id="bao-ton-di-san" className="relative py-32 overflow-hidden">
        <img
          src="/images/tong-quan.jpg"
          alt="Bảo tồn di sản trà Shan Tuyết"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-[#C9A84C] text-sm uppercase tracking-[0.3em] font-semibold mb-3">03</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Bảo Tồn Di Sản
              </h2>
              <div className="h-1 w-16 bg-[#C9A84C] rounded mb-6" />
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Hành trình bảo tồn Di sản vùng chè Shan Tuyết cổ thụ <strong className="text-[#C9A84C]">Đồng Phúc, Thái Nguyên</strong>.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Dự án dài hạn nhằm bảo vệ, nhân giống và phát triển những cây chè Shan Tuyết cổ thụ hàng trăm năm tuổi tại vùng núi Đồng Phúc — một trong những báu vật thiên nhiên hiếm có của Việt Nam. ESGValley cam kết đồng hành cùng cộng đồng địa phương để gìn giữ di sản xanh cho các thế hệ mai sau.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Cây chè 100+ năm tuổi", "Bảo tồn nguồn gen quý", "Hợp tác cộng đồng bản địa"].map((tag, i) => (
                  <span key={i} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-xs font-medium">
                    <TreePine className="w-3.5 h-3.5 text-[#C9A84C]" /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ 04 — R&D SẢN PHẨM ════════ */}
      <section id="nghien-cuu-san-pham" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C9A84C] text-sm uppercase tracking-[0.3em] font-semibold mb-3">04</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nghiên Cứu & Phát Triển Sản Phẩm
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Liên tục đầu tư R&D để tạo ra những dòng sản phẩm đột phá, mở rộng hệ sinh thái giá trị từ cây trà, đáp ứng tiêu chuẩn khắt khe của thị trường quốc tế.
            </p>
          </motion.div>

          {/* 2 + 3 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {[
              { icon: BarChart3, title: "Nghiên cứu đầu tư dự án", desc: "Phân tích thị trường, đánh giá tiềm năng và xây dựng lộ trình đầu tư cho các dự án phát triển hệ sinh thái trà bền vững." },
              { icon: Beaker, title: "Nghiên cứu sản phẩm", desc: "Phát triển các dòng sản phẩm mới từ nguyên liệu trà thuần Việt, kết hợp khoa học hiện đại và tinh hoa truyền thống." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  className="flex gap-5 p-7 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/25 transition-all duration-400 group"
                >
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "Nghiên cứu quy trình & quản lý chất lượng", desc: "Tối ưu từng công đoạn sản xuất, xây dựng hệ thống kiểm soát chất lượng theo chuẩn quốc tế." },
              { icon: Microscope, title: "Nghiên cứu Công nghệ", desc: "Ứng dụng công nghệ tiên tiến trong chiết xuất, bảo quản để giữ nguyên dưỡng chất và hương vị tự nhiên." },
              { icon: Palette, title: "Hệ sinh thái từ Trà", desc: "Mở rộng sang Dược Trà, Mỹ phẩm Trà, Nước cho Trà, Trà Cụ và nhiều sản phẩm phái sinh cao cấp khác." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  className="p-7 bg-[#f5f9f4] border border-border rounded-2xl hover:shadow-lg hover:border-primary/25 transition-all duration-400"
                >
                  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════ 05 — TRẢI NGHIỆM & DU LỊCH ════════ */}
      <section id="trai-nghiem-van-hoa" className="py-24 bg-[#f5f9f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <p className="text-[#C9A84C] text-sm uppercase tracking-[0.3em] font-semibold mb-3">05</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                Trải Nghiệm, Văn Hoá & Du Lịch Cộng Đồng
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Kiến tạo không gian trải nghiệm trà đặc sắc, kết hợp du lịch sinh thái cộng đồng và bảo tồn văn hóa bản địa, mang lại giá trị bền vững cho người dân địa phương.
              </p>

              <div className="bg-white rounded-2xl border border-border p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <Compass className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-display font-bold text-foreground">Khu Trung Tâm Trải Nghiệm</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Không gian tích hợp bao gồm khu trình diễn nghệ thuật pha trà, triển lãm văn hóa trà Việt, tour thăm vườn chè cổ thụ và các workshop trải nghiệm chế biến trà thủ công.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Tea Show nghệ thuật", "Workshop làm trà", "Tour vườn chè cổ", "Triển lãm văn hóa"].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 bg-teal-50 text-teal-700 border border-teal-200 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="relative"
            >
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="/images/hanh-trinh.jpg"
                  alt="Trải nghiệm văn hóa trà"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#C9A84C]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════ 06 — GIÁO DỤC ════════ */}
      <section id="giao-duc" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C9A84C] text-sm uppercase tracking-[0.3em] font-semibold mb-3">06</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Giáo Dục & Đào Tạo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Xây dựng nền tảng kiến thức cho cộng đồng, nâng cao giá trị nghề làm trà và tạo sinh kế bền vững cho người dân bản địa theo chuẩn ESG.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                color: "bg-rose-50",
                iconColor: "text-rose-600",
                badge: "bg-rose-100 text-rose-700",
                badgeLabel: "Đào tạo phổ thông",
                title: "Hiểu về Trà",
                desc: "Chương trình giáo dục phổ thông về văn hóa trà Việt Nam — lịch sử, phân loại, cách thưởng trà và giá trị dinh dưỡng — dành cho mọi đối tượng từ học sinh đến người tiêu dùng.",
              },
              {
                icon: Users,
                color: "bg-emerald-50",
                iconColor: "text-emerald-600",
                badge: "bg-emerald-100 text-emerald-700",
                badgeLabel: "Đào tạo chuyên sâu",
                title: "Nâng cao giá trị nghề làm trà",
                desc: "Chương trình tập huấn chuyên sâu cho người dân bản địa về kỹ thuật canh tác hữu cơ, chế biến, đóng gói và tiếp thị sản phẩm trà — đảm bảo yếu tố ESG thông qua việc tạo sinh kế bền vững, nâng cao thu nhập và gìn giữ bản sắc văn hóa địa phương.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/25 transition-all duration-500"
                >
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 ${item.badge}`}>
                    {item.badgeLabel}
                  </span>
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-5`}>
                    <Icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Quote */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <div className="text-5xl text-primary/20 font-display leading-none mb-4">"</div>
            <p className="text-foreground/70 text-lg italic leading-relaxed">
              Tri thức về trà là di sản vô hình quý giá nhất — ESGValley cam kết gìn giữ và lan tỏa nó đến mọi thế hệ người Việt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════ STATS STRIP ════════ */}
      <section className="py-16 bg-[#f5f9f4] border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "6", label: "Trụ cột hệ sinh thái" },
              { num: "100+", label: "Năm tuổi chè Shan Tuyết" },
              { num: "5.000+", label: "Hộ nông dân đối tác" },
              { num: "100%", label: "Tiêu chuẩn hữu cơ" },
            ].map((stat, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">{stat.num}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-24 bg-[#1a2e1e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <p className="text-white/60 text-sm uppercase tracking-[0.3em] font-semibold mb-4">Hợp tác & Đầu tư</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
              Cùng Kiến Tạo Tương Lai Bền Vững
            </h2>
            <p className="text-white/75 mb-10 text-lg leading-relaxed">
              Hệ sinh thái ESGValley đang mở rộng — chúng tôi tìm kiếm những đối tác cùng chung tầm nhìn về phát triển bền vững và di sản văn hóa Việt Nam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ho-tro#lien-he"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-all text-sm shadow-xl"
              >
                Liên hệ hợp tác <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ve-esg-valley"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-sm"
              >
                Tìm hiểu thêm <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
