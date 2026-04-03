import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload } from "lucide-react";
import { useAuth } from "@/lib/auth";

const timelineData = [
  {
    year: 1966,
    yearLabel: "1966",
    title: "Thành lập Nông trường Chè Quân Chu",
    content:
      "Tiền thân là Nông trường chè Quân Chu được thành lập vào ngày 26/04/1966. Đây là một trong những đơn vị kinh tế quốc doanh đặt nền móng đầu tiên cho ngành chè tại khu vực chân núi Tam Đảo, huyện Đại Từ, Thái Nguyên.",
    img: "/images/1966.jpg",
  },
  {
    year: 1978,
    yearLabel: "1978",
    title: "Vùng Nguyên Liệu Trọng Điểm",
    content:
      "Nông trường được giao quản lý hơn 2.000 ha đất, trở thành vùng nguyên liệu trọng điểm cung cấp chè đen xuất khẩu cho các thị trường Đông Âu và Liên Xô cũ.",
    img: "/images/1978.png",
  },
  {
    year: 2000 - 2005 ,
    yearLabel: "2000–2005",
    title: "Cổ phần hóa – Chuyển mình sang mô hình mới",
    content:
      "Thực hiện chủ trương của Nhà nước, Nông trường chè Quân Chu tiến hành cổ phần hóa, chính thức chuyển đổi mô hình hoạt động thành Công ty Cổ phần Chè Quân Chu.",
    img: "/images/2000-2005.png",
  },
  {
    year: 2011,
    yearLabel: "2011",
    title: "Kỷ niệm 45 năm – Quy hoạch vùng chè chất lượng cao",
    content:
      "Công ty tổ chức kỷ niệm 45 năm ngày thành lập, khẳng định vị thế là doanh nghiệp có bề dày lịch sử bậc nhất vùng chè Đại Từ; tập trung vào việc bàn giao đất về địa phương để quản lý hiệu quả hơn, đồng thời bắt đầu quy hoạch lại các vùng chè chất lượng cao để chuyển từ chè đen sang chè xanh đặc sản.",
    img: "/images/2011.png",
  },
  {
    year: 2025,
    yearLabel: "2025",
    title: "Ra mắt thương hiệu ESGValley",
    content:
      "Đánh dấu bước chuyển mình mang tính lịch sử khi Công ty Cổ phần Chè Quân Chu chính thức sáng tạo và ra mắt thương hiệu ESGValley, chuyển mình từ một nhà máy truyền thống sang một doanh nghiệp xanh, gắn sản phẩm chè, hoạt động sản xuất với các tiêu chuẩn bền vững toàn cầu với trách nhiệm bảo vệ hệ sinh thái và phát triển cộng đồng; đóng vai trò quan trọng trong việc hỗ trợ sinh kế cho bà con nông dân xã Quân Chu nói riêng và trên địa bàn tỉnh nói chung.",
    img: "/images/2025.png",
  },
  {
    year: 2026,
    yearLabel: "2026",
    title: "ESGValley – Hệ Sinh Thái Văn Hóa & Kinh Tế",
    content:
      "ESGValley bắt đầu xuất hiện mạnh mẽ hơn trong các hoạt động xúc tiến thương mại và kết nối doanh nghiệp tỉnh Thái Nguyên. Định vị là đơn vị tiên phong với mô hình \"Tiệc Trà Di sản\" tại Thái Nguyên. Ngày 22/03/2026, Công ty Cổ phần Chè Quân Chu hoàn tất công đoạn xuống giống cho vùng chè đầu tiên – một cột mốc quan trọng trong lộ trình bảo tồn và nâng tầm giá trị Trà gắn liền với phát triển du lịch bền vững tại xã Quân Chu, Thái Nguyên.",
    img: "/images/2026.png",
  },
];

const defaultMissionImages = [
  { src: "/images/su-menh-1.jpg", label: "Trà xanh tươi" },
  { src: "/images/su-menh-2.jpg", label: "Trà vàng" },
  { src: "/images/su-menh-3.jpg", label: "Trà đỏ" },
  { src: "/images/su-menh-4.jpg", label: "Trà cổ thụ" },
];

const achievementImages = [
  { src: "/images/thanh-tuu-1.png", label: "Triển lãm quốc tế 2023" },
  { src: "/images/thanh-tuu-2.png", label: "Giải thưởng ESG xuất sắc" },
  { src: "/images/thanh-tuu-3.png", label: "Hội chợ Nông sản Việt" },
  { src: "/images/thanh-tuu-4.png", label: "Cộng đồng nông dân bền vững" },
  { src: "/images/thanh-tuu-1.png", label: "Chứng nhận hữu cơ" },
  { src: "/images/thanh-tuu-2.png", label: "Top thương hiệu xanh" },
  { src: "/images/thanh-tuu-3.png", label: "Đối tác bền vững" },
  { src: "/images/thanh-tuu-4.png", label: "Sản phẩm tiêu biểu" },
];

const stats = [
  { num: "18k+", label: "Đánh giá tốt" },
  { num: "10k", label: "Nhân viên" },
  { num: "5k", label: "Chuyên gia" },
  { num: "31", label: "Giải thưởng" },
];

export default function About() {
  const { isAdmin } = useAuth();
  const [activeYear, setActiveYear] = useState(1966);
  const years = timelineData.map((t) => t.year);
  const activeData = timelineData.find((t) => t.year === activeYear)!;
  const activeIndex = years.indexOf(activeYear);

  const prev = () => activeIndex > 0 && setActiveYear(years[activeIndex - 1]);
  const next = () =>
    activeIndex < years.length - 1 && setActiveYear(years[activeIndex + 1]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 258 + 37;
    const interval = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      const res = await fetch(`${import.meta.env.BASE_URL}api/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setMissionImages((prev) =>
          prev.map((img, i) => (i === index ? { ...img, src: data.url } : img))
        );
      }
    } catch (e) {
      console.error(e);
    } finally {
      setUploading(null);
    }
  };

  return (
    <div style={{ isolation: "isolate" }} className="w-full bg-white">
      {/* ══════════════════════════════════════
          1. HÀNH TRÌNH CÙNG ESG — Hero
      ══════════════════════════════════════ */}
      <section className="pt-36 pb-0 bg-white">
        <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title + subtitle */}
          <div className="text-center mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display font-bold"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.25", color: "#5F9654" }}
            >
              Hành trình <span style={{ color: "#525252" }}>cùng</span> ESG
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-semibold text-[20px] leading-[30px] text-center max-w-4xl mx-auto mt-4"
              style={{ color: "#A2A2A2" }}
            >
              Mỗi tách trà là một câu chuyện – về đất, về người, về hành trình kiên định theo đuổi giá trị bền vững và di sản văn hóa Việt Nam.
            </motion.p>
          </div>

          {/* Hero image — full width, border-radius 20px */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="w-full overflow-hidden"
            style={{ borderRadius: "20px" }}
          >
            <img
              src="/images/hanh-trinh.jpg"
              alt="ESG Valley tea garden"
              className="w-full h-[360px] md:h-[503px] object-cover"
            />
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          2. TIMELINE — Year rail + content
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Year rail */}
          <div className="flex items-center justify-center mb-12 overflow-x-auto pb-2">
            <div className="relative flex items-center gap-4 flex-nowrap">
              {timelineData.map((t, i) => (
                <div key={t.year} className="flex items-center gap-4 flex-shrink-0">
                  {i > 0 && (
                    <div className="w-8 h-px" style={{ background: "#E4E4E4" }} />
                  )}
                  <button
                    onClick={() => setActiveYear(t.year)}
                    className="font-semibold leading-[30px] transition-all whitespace-nowrap rounded-[32px]"
                    style={{
                      fontSize: "clamp(14px, 1.8vw, 22px)",
                      color: t.year === activeYear ? "#FFFFFF" : "#525252",
                      fontWeight: t.year === activeYear ? 700 : 500,
                      background: t.year === activeYear ? "#183806" : "transparent",
                      padding: "4px 16px",
                    }}
                  >
                    {t.yearLabel}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Content card */}
          <div className="relative flex items-center gap-6">

            {/* Left arrow */}
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              className="flex-shrink-0 flex items-center justify-center disabled:opacity-30 transition-all hover:scale-110"
              style={{
                width: "52px", height: "52px",
                border: "2px solid #5F9654",
                borderRadius: "50%",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#5F9654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex-1 flex flex-col md:flex-row items-center gap-10"
              >
                {/* Thumbnail image */}
                <div
                  className="flex-shrink-0 overflow-hidden"
                  style={{ width: "298px", height: "298px", borderRadius: "32px" }}
                >
                  <img
                    src={activeData.img}
                    alt={activeData.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Vertical separator */}
                <div
                  className="hidden md:block flex-shrink-0"
                  style={{ width: "6px", height: "41px", background: "#E4E4E4", borderRadius: "10px" }}
                />

                {/* Text */}
                <div className="flex-1 flex flex-col gap-4">
                  <h2
                    className="font-display font-bold text-center md:text-left"
                    style={{ fontSize: "36px", lineHeight: "45px", color: "#525252" }}
                  >
                    {activeData.title}
                  </h2>
                  <p
                    className="font-semibold leading-[28px] text-justify"
                    style={{ fontSize: "18px", color: "#525252" }}
                  >
                    {activeData.content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right arrow */}
            <button
              onClick={next}
              disabled={activeIndex === years.length - 1}
              className="flex-shrink-0 flex items-center justify-center disabled:opacity-30 transition-all hover:scale-110"
              style={{
                width: "52px", height: "52px",
                border: "2px solid #5F9654",
                borderRadius: "50%",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="#5F9654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          3. SỨ MỆNH CỦA CHÚNG TÔI
      ══════════════════════════════════════ */}
      <section className="py-20" style={{ background: "#E9F8EB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.25", color: "#5F9654" }}
            >
              Sứ mệnh của chúng tôi
            </h2>
            <p
              className="font-semibold max-w-2xl mx-auto mt-4 text-center text-[18px]"
              style={{ color: "#525252", textWrap: "balance" } as React.CSSProperties}
            >
Hiện thực hóa hệ sinh thái ESGValley để bảo tồn tinh hoa và đưa thương hiệu trà Việt vươn tầm thế giới. Chúng tôi cam kết kiến tạo môi trường sinh thái bền vững, nâng tầm giá trị cộng đồng và là đơn vị tiên phong thực hiện hóa các chủ trương chiến lược của Trung ương (Nghị quyết 68-NQ/TW) và Tỉnh ủy Thái Nguyên (Nghị quyết 11-NQ/TU) về phát triển ngành chè theo định hướng ESG giai đoạn 2025-2030.
            </p>
          </div>

          {/* 4 images row */}
          <div className="flex justify-center gap-3 flex-wrap">
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
                  className={`relative overflow-hidden ${isAdmin ? "cursor-pointer group" : ""}`}
                  style={{ width: "171px", height: "171px", borderRadius: "8px" }}
                  onClick={() => isAdmin && fileInputRefs[i].current?.click()}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {isAdmin && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      {uploading === i ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Upload className="w-5 h-5 text-white" />
                      )}
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRefs[i]}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleUpload(i, f);
                    e.target.value = "";
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. TỔNG QUAN
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden"
              style={{ borderRadius: "40px", width: "100%", maxWidth: "450px" }}
            >
              <img
                src="/images/tong-quan.jpg"
                alt="ESG Valley overview"
                className="w-full h-[450px] object-cover"
              />
            </motion.div>

            {/* Right content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="font-semibold text-[16px] leading-[20px] text-center block"
                style={{ color: "#5F9654" }}
              >
                Về chúng tôi
              </span>
              <h2
                className="font-display font-bold mt-2 mb-6"
                style={{ fontSize: "36px", lineHeight: "45px", color: "#525252" }}
              >
                Tổng quan
              </h2>
              <p
                className="font-semibold text-[18px] leading-[28px] text-justify mb-4"
                style={{ color: "#525252" }}
              >
                Tại chúng tôi, làm chè không chỉ là một công việc – đó là một sứ mệnh, một cách sống, và là niềm tin rằng từng búp chè, nếu được chăm sóc tử tế từ gốc, sẽ mang đến điều tốt đẹp cho người thưởng thức.
              </p>
              <p
                className="font-semibold text-[18px] leading-[28px] text-justify mb-10"
                style={{ color: "#525252" }}
              >
                Chúng tôi tin rằng chè ngon bắt đầu từ đất. Không hóa chất, không thúc ép – chỉ có nắng, mưa, khí lạnh vùng cao và sự chăm sóc kiên nhẫn của người nông dân. Mỗi đồi chè là một hệ sinh thái sống, nơi cây cỏ, côn trùng và con người cùng tồn tại hài hòa.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-x-14 gap-y-6">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span
                      className="font-semibold tracking-tight"
                      style={{ fontSize: "clamp(36px, 4vw, 64px)", lineHeight: "80px", color: "#5F9654", letterSpacing: "-0.03em" }}
                    >
                      {stat.num}
                    </span>
                    <span
                      className="font-medium text-[20px] leading-[25px] tracking-tight"
                      style={{ color: "#A2A2A2", letterSpacing: "-0.03em" }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          5. CÂU CHUYỆN VỚI "CHÈ"
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.25", color: "#525252" }}
            >
              Câu chuyện với "<span style={{ color: "#5F9654" }}>chè</span>"
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
              className="w-full drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
      {/* ══════════════════════════════════════
          6. THÀNH TỰU
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "1.25", color: "#525252" }}
            >
              Thành tựu
            </h2>
            <p
              className="font-semibold text-[20px] leading-[30px] text-center max-w-2xl mx-auto mt-4"
              style={{ color: "#A2A2A2" }}
            >
              Những dấu mốc tự hào trên hành trình kiến tạo thương hiệu trà di sản Việt Nam.
            </p>
          </div>
        </div>

        {/* Scrolling strip — full bleed */}
        <div ref={scrollRef} className="mt-12 overflow-x-auto no-scrollbar" style={{ scrollBehavior: "smooth", msOverflowStyle: "none", scrollbarWidth: "none" }}>
          <div className="flex gap-[37px] px-8" style={{ width: "max-content" }}>
            {achievementImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative overflow-hidden flex-shrink-0 group"
                style={{
                  width: "258px", height: "258px",
                  borderRadius: "8px",
                  boxShadow: "0px 10px 21px rgba(0,0,0,0.25)",
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
