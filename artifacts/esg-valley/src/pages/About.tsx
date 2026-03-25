import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";
import { useAuth } from "@/lib/auth";

const timelineData = [
  {
    year: 2020,
    title: "Khởi Nguồn Ý Tưởng",
    content:
      "Từ những chuyến đi thực địa lên các vùng chè cổ thụ Thái Nguyên, Hà Giang, một nhóm những người trẻ yêu trà đã ấp ủ giấc mơ về một thương hiệu trà di sản mang tinh thần ESG – kết nối bền vững giữa con người, thiên nhiên và cộng đồng.",
    img: "https://images.unsplash.com/photo-1606113294786-44c5cd3b56c0?w=700&q=80",
  },
  {
    year: 2021,
    title: "Điểm Khởi Đầu",
    content:
      "Từ những đồi chè cổ hàng trăm năm tuổi, nơi mỗi búp trà là kết tinh của đất trời và bàn tay người nông dân, ESG Valley chính thức ra đời. Chúng tôi bắt đầu với tâm niệm: trà không chỉ là thức uống – đó là di sản văn hóa cần được gìn giữ và tôn vinh.\n\nNăm đó, giữa vô số thách thức về thị trường, chúng tôi vẫn chọn đi con đường khó hơn: xây dựng chuỗi cung ứng minh bạch, gắn kết trực tiếp với người trồng trà, hướng tới phát triển bền vững theo tiêu chuẩn quốc tế.",
    img: "/images/hanh-trinh.jpg",
  },
  {
    year: 2022,
    title: "Mở Rộng Vùng Trồng",
    content:
      "ESG Valley mở rộng hợp tác với các hộ nông dân tại Hà Giang, Lai Châu và Lâm Đồng. Các vùng nguyên liệu được chứng nhận hữu cơ, quy trình canh tác bền vững được áp dụng đồng bộ, đảm bảo chất lượng từ gốc rễ đến tách trà.",
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6d72a?w=700&q=80",
  },
  {
    year: 2023,
    title: "Ra Mắt Dòng Sản Phẩm",
    content:
      "Bộ sản phẩm đầu tiên chính thức ra mắt thị trường: Mã Đáo Thành Công, Bách Niên Trà, Mạc Triều Trà. Mỗi dòng sản phẩm là một câu chuyện riêng, mang theo hồn cốt của vùng đất và con người nơi nó được sinh ra.",
    img: "https://images.unsplash.com/photo-1530831916053-1d9a93ee5e3c?w=700&q=80",
  },
  {
    year: 2024,
    title: "Hệ Sinh Thái ESG",
    content:
      "ESG Valley không chỉ là thương hiệu trà – chúng tôi kiến tạo một hệ sinh thái hoàn chỉnh: từ không gian trải nghiệm trà, dịch vụ tiệc trà cao cấp, đến chương trình giáo dục và kết nối cộng đồng những người yêu trà Việt.",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=700&q=80",
  },
  {
    year: 2025,
    title: "Tầm Nhìn Toàn Cầu",
    content:
      "Đưa trà Việt ra thế giới theo đúng nghĩa: không chỉ xuất khẩu nguyên liệu mà tôn vinh câu chuyện, văn hóa và bản sắc. ESG Valley hướng tới trở thành đại sứ của trà di sản Việt Nam trên bản đồ trà thế giới.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80",
  },
];

const defaultMissionImages = [
  { src: "/images/su-menh-1.jpg", label: "Trà xanh tươi" },
  { src: "/images/su-menh-2.jpg", label: "Trà vàng" },
  { src: "/images/su-menh-3.jpg", label: "Trà đỏ" },
  { src: "/images/su-menh-4.jpg", label: "Trà cổ thụ" },
];

const achievementImages = [
  {
    src: "/images/thanh-tuu-1.png",
    label: "Triển lãm quốc tế 2023",
  },
  {
    src: "/images/thanh-tuu-2.png",
    label: "Giải thưởng ESG xuất sắc",
  },
  {
    src: "/images/thanh-tuu-3.png",
    label: "Hội chợ Nông sản Việt",
  },
  {
    src: "/images/thanh-tuu-4.png",
    label: "Cộng đồng nông dân bền vững",
  },
];

export default function About() {
  const { isAdmin } = useAuth();
  const [activeYear, setActiveYear] = useState(2021);
  const years = timelineData.map((t) => t.year);
  const activeData = timelineData.find((t) => t.year === activeYear)!;
  const activeIndex = years.indexOf(activeYear);

  const prev = () => activeIndex > 0 && setActiveYear(years[activeIndex - 1]);
  const next = () => activeIndex < years.length - 1 && setActiveYear(years[activeIndex + 1]);

  const [missionImages, setMissionImages] = useState(defaultMissionImages);
  const [uploading, setUploading] = useState<number | null>(null);
  const fileInputRef0 = useRef<HTMLInputElement>(null);
  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);
  const fileInputRef3 = useRef<HTMLInputElement>(null);
  const fileInputRefs = [fileInputRef0, fileInputRef1, fileInputRef2, fileInputRef3];

  const handleUpload = async (index: number, file: File) => {
    setUploading(index);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await fetch(`${import.meta.env.BASE_URL}api/upload`, { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) {
        setMissionImages((prev) => prev.map((img, i) => i === index ? { ...img, src: data.url } : img));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setUploading(null);
    }
  };

  return (
    <div className="w-full bg-background">
      {/* ── HÀNH TRÌNH CÙNG ESG ── */}
      <section className="pt-36 pb-0 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-primary">Hành trình</span>{" "}
              <span className="text-foreground">cùng ESG</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base"
            >
              Mỗi tách trà là một câu chuyện – về đất, về người, về hành trình kiên định theo đuổi giá trị bền vững và di sản văn hóa Việt Nam.
            </motion.p>
          </div>

          {/* Wide hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="w-full overflow-hidden rounded-2xl mb-10"
          >
            <img
              src="/images/hanh-trinh.jpg"
              alt="ESG Valley tea garden"
              className="w-full h-[320px] md:h-[400px] object-cover"
            />
          </motion.div>

          {/* Year rail */}
          <div className="flex items-center justify-center gap-0 mb-10">
            <div className="flex items-center">
              {years.map((y, i) => (
                <div key={y} className="flex items-center">
                  {i > 0 && (
                    <div
                      className={`w-10 sm:w-16 h-px transition-colors ${
                        y <= activeYear ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                  <button
                    onClick={() => setActiveYear(y)}
                    className={`relative flex flex-col items-center transition-all ${
                      y === activeYear ? "scale-110" : ""
                    }`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full border-2 transition-colors ${
                        y === activeYear
                          ? "bg-primary border-primary"
                          : y < activeYear
                          ? "bg-primary/40 border-primary/40"
                          : "bg-background border-border"
                      }`}
                    />
                    <span
                      className={`mt-2 text-sm font-semibold px-3 py-0.5 rounded-full transition-all ${
                        y === activeYear
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {y}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline content */}
          <div className="relative flex items-center gap-4">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            >
              <div className="overflow-hidden rounded-2xl aspect-square max-w-[220px]">
                <img
                  src={activeData.img}
                  alt={activeData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold mt-2 mb-3">
                  {activeData.title}
                </h2>
                {activeData.content.split("\n\n").map((para, i) => (
                  <p key={i} className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            <button
              onClick={next}
              disabled={activeIndex === years.length - 1}
              className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      {/* ── SỨ MỆNH ── */}
      <section className="py-20 bg-[#f5f9f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Sứ Mệnh Của Chúng Tôi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Gìn giữ và tôn vinh những giá trị trà di sản Việt Nam, kiến tạo hệ sinh thái bền vững kết nối con người, thiên nhiên và cộng đồng theo chuẩn mực ESG quốc tế.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl w-full">
              {missionImages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className={`relative overflow-hidden rounded-xl aspect-square w-full max-w-[130px] shadow-md ${isAdmin ? "cursor-pointer group" : ""}`}
                    onClick={() => isAdmin && fileInputRefs[i].current?.click()}
                  >
                    <img src={item.src} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {isAdmin && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {uploading === i
                          ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          : <Upload className="w-5 h-5 text-white" />
                        }
                      </div>
                    )}
                  </div>
                  <input
                    ref={fileInputRefs[i]}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => { const f = e.target.files?.[0]; if (f) handleUpload(i, f); e.target.value = ""; }}
                  />
                  <span className="text-xs text-muted-foreground font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              Chúng tôi tin rằng một tách trà ngon là kết tinh của ba yếu tố:{" "}
              <strong className="text-foreground">đất lành</strong> – nơi những cây chè cổ thụ bám rễ qua trăm năm;{" "}
              <strong className="text-foreground">tay nghề</strong> – di truyền từ thế hệ này sang thế hệ khác; và{" "}
              <strong className="text-foreground">tâm thức</strong> – sự trân trọng với từng búp trà, từng giây phút thưởng trà. ESG Valley ra đời để bảo tồn và lan tỏa những giá trị đó.
            </p>
          </div>
        </div>
      </section>
      {/* ── TỔNG QUAN ── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[30px]"
            >
              <img
                src="/images/tong-quan.jpg"
                alt="ESG Valley overview"
                className="w-full h-[420px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Về chúng tôi
              </span>
              <h2 className="font-display text-4xl font-bold mt-2 mb-6">Tổng Quan</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ESG Valley là thương hiệu trà di sản Việt Nam tiên phong áp dụng tiêu chuẩn ESG (Environmental – Social – Governance) vào toàn bộ chuỗi giá trị, từ vùng nguyên liệu đến tay người tiêu dùng.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Chúng tôi không chỉ mang đến những dòng trà thượng hạng mà còn góp phần bảo tồn rừng chè cổ, cải thiện sinh kế cho đồng bào dân tộc và truyền bá văn hóa trà Việt ra thế giới.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { num: "18k+", label: "Đánh giá" },
                  { num: "10k", label: "Khách hàng" },
                  { num: "5k", label: "Đối tác" },
                  { num: "31", label: "Sản phẩm" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display text-3xl font-bold text-primary">{stat.num}</div>
                    <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ── CÂU CHUYỆN VỚI "CHÈ" ── */}
      <section className="py-20 bg-[#f5f9f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Câu Chuyện Với{" "}
              <span className="text-primary">"Chè"</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/che-story-nobg.png`}
              alt="Câu chuyện với chè"
              className="w-full max-w-2xl drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
      {/* ── THÀNH TỰU ── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Thành Tựu</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Những dấu mốc tự hào trên hành trình kiến tạo thương hiệu trà di sản Việt Nam.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {achievementImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-sm group"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
