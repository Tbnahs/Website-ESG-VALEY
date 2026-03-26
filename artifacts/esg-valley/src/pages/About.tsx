import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload } from "lucide-react";
import { useAuth } from "@/lib/auth";

const timelineData = [
  {
    year: 2020,
    title: "Khởi Nguồn Ý Tưởng",
    content:
      "Từ những chuyến đi thực địa lên các vùng chè cổ thụ Thái Nguyên, Hà Giang, một nhóm những người trẻ yêu trà đã ấp ủ giấc mơ về một thương hiệu trà di sản mang tinh thần ESG – kết nối bền vững giữa con người, thiên nhiên và cộng đồng.",
    img: "/images/khoi-nguon.jpg",
  },
  {
    year: 2021,
    title: "Điểm Khởi Đầu",
    content:
      "Ý tưởng về một thương hiệu chè tử tế được nhen nhóm từ những lần rong đuổi qua bản làng, ngồi cùng bà con uống chén trà nồng, nghe họ kể chuyện mùa vụ và chứng kiến búp chè non được nâng niu như báu vật. Năm đó, giữa sự thô ráp của núi rừng và ước mơ mang hương vị quê hương đến gần hơn với mọi người, thương hiệu ESG Valley chính thức ra đời.",
    img: "/images/hanh-trinh.jpg",
  },
  {
    year: 2022,
    title: "Mở Rộng Vùng Trồng",
    content:
      "ESG Valley mở rộng hợp tác với các hộ nông dân tại Hà Giang, Lai Châu và Lâm Đồng. Các vùng nguyên liệu được chứng nhận hữu cơ, quy trình canh tác bền vững được áp dụng đồng bộ, đảm bảo chất lượng từ gốc rễ đến tách trà.",
    img: "/images/hinh-doi-che.png",
  },
  {
    year: 2023,
    title: "Ra Mắt Dòng Sản Phẩm",
    content:
      "Bộ sản phẩm đầu tiên chính thức ra mắt thị trường: Mã Đáo Thành Công, Bách Niên Trà, Mạc Triều Trà. Mỗi dòng sản phẩm là một câu chuyện riêng, mang theo hồn cốt của vùng đất và con người nơi nó được sinh ra.",
    img: "/images/mask-group.png",
  },
  {
    year: 2024,
    title: "Hệ Sinh Thái ESG",
    content:
      "ESG Valley không chỉ là thương hiệu trà – chúng tôi kiến tạo một hệ sinh thái hoàn chỉnh: từ không gian trải nghiệm trà, dịch vụ tiệc trà cao cấp, đến chương trình giáo dục và kết nối cộng đồng những người yêu trà Việt.",
    img: "/images/he-sinh-thai.jpg",
  },
  {
    year: 2025,
    title: "Tầm Nhìn Toàn Cầu",
    content:
      "Đưa trà Việt ra thế giới theo đúng nghĩa: không chỉ xuất khẩu nguyên liệu mà tôn vinh câu chuyện, văn hóa và bản sắc. ESG Valley hướng tới trở thành đại sứ của trà di sản Việt Nam trên bản đồ trà thế giới.",
    img: "/images/toan-cau.jpg",
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
  const [activeYear, setActiveYear] = useState(2021);
  const years = timelineData.map((t) => t.year);
  const activeData = timelineData.find((t) => t.year === activeYear)!;
  const activeIndex = years.indexOf(activeYear);

  const prev = () => activeIndex > 0 && setActiveYear(years[activeIndex - 1]);
  const next = () =>
    activeIndex < years.length - 1 && setActiveYear(years[activeIndex + 1]);

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
    <div className="w-full bg-white">

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
          <div className="flex items-center justify-center mb-12">
            <div className="relative flex items-center gap-8">
              {years.map((y, i) => (
                <div key={y} className="flex items-center gap-8">
                  {i > 0 && (
                    <div className="w-14 h-px" style={{ background: "#E4E4E4" }} />
                  )}
                  <button
                    onClick={() => setActiveYear(y)}
                    className="relative font-semibold text-[24px] leading-[30px] transition-all"
                    style={{
                      color: y === activeYear ? "#FFFFFF" : "#525252",
                      fontWeight: y === activeYear ? 700 : 500,
                    }}
                  >
                    {y === activeYear && (
                      <span
                        className="absolute inset-0 -mx-4 -my-1 rounded-[32px] z-0"
                        style={{ background: "#183806" }}
                      />
                    )}
                    <span className="relative z-10 px-4 py-1">{y}</span>
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
              className="font-semibold text-[20px] leading-[30px] text-center max-w-2xl mx-auto mt-4"
              style={{ color: "#525252" }}
            >
              Gìn giữ và tôn vinh những giá trị trà di sản Việt Nam, kiến tạo hệ sinh thái bền vững kết nối con người, thiên nhiên và cộng đồng theo chuẩn mực ESG quốc tế.
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
                <span className="text-xs text-[#A2A2A2] font-medium">{item.label}</span>
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
        <div className="mt-12 overflow-x-auto">
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
