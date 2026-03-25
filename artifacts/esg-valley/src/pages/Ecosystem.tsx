import { motion } from "framer-motion";
import {
  Microscope, Leaf, Landmark, FlaskConical, Compass, GraduationCap,
  ChevronRight, Cpu, ScanLine, BarChart3, Sprout, Factory, Award,
  MapPin, BookOpen, Users, Beaker, Palette, TreePine,
} from "lucide-react";

const sections = [
  {
    id: "vien-nghien-cuu",
    number: "01",
    icon: Microscope,
    title: "Viện Nghiên Cứu Công Nghệ & Chuyển Đổi Số",
    color: "bg-[#1a3a5c]",
    lightColor: "bg-blue-50",
    accentColor: "text-blue-700",
    borderColor: "border-blue-200",
    tagColor: "bg-blue-100 text-blue-800",
    description:
      "Tiên phong ứng dụng công nghệ hiện đại vào ngành nông nghiệp trà Việt Nam, thúc đẩy quá trình chuyển đổi số toàn diện từ vùng trồng đến tay người tiêu dùng.",
    items: [
      {
        icon: Sprout,
        title: "Phát triển chuyển đổi số ngành Nông nghiệp",
        desc: "Ứng dụng IoT, AI và dữ liệu lớn vào giám sát, phân tích và tối ưu hóa quy trình canh tác trà hữu cơ trên các vùng nguyên liệu.",
      },
      {
        icon: ScanLine,
        title: "Truy xuất nguồn gốc",
        desc: "Hệ thống blockchain và QR code cho phép người tiêu dùng truy xuất toàn bộ hành trình của từng lô trà — từ vườn cây, quy trình chế biến đến tay khách hàng.",
      },
      {
        icon: BarChart3,
        title: "Chuyển đổi số trong quản trị & vận hành doanh nghiệp",
        desc: "Triển khai hệ thống ERP, CRM và BI giúp doanh nghiệp vận hành minh bạch, hiệu quả và đáp ứng tiêu chuẩn ESG quốc tế.",
      },
    ],
  },
  {
    id: "vung-nguyen-lieu",
    number: "02",
    icon: Leaf,
    title: "Phát Triển Vùng Nguyên Liệu & Sản Xuất",
    color: "bg-[#2d5a27]",
    lightColor: "bg-green-50",
    accentColor: "text-green-700",
    borderColor: "border-green-200",
    tagColor: "bg-green-100 text-green-800",
    description:
      "Xây dựng vùng nguyên liệu hữu cơ bền vững, kết hợp trung tâm vận hành hiện đại theo chuẩn ESG quốc tế, đảm bảo chất lượng từ gốc đến sản phẩm.",
    items: [
      {
        icon: Sprout,
        title: "Phát triển vùng nguyên liệu hữu cơ",
        desc: "Quy hoạch và phát triển các vùng trồng chè chuẩn hữu cơ, bảo vệ hệ sinh thái tự nhiên và đa dạng sinh học, không sử dụng hóa chất độc hại.",
      },
      {
        icon: Factory,
        title: "Trung tâm vận hành ESGValley Quân Chu",
        desc: "Trung tâm sản xuất và vận hành tích hợp tại Quân Chu — nơi kết hợp giữa công nghệ hiện đại và tri thức truyền thống trong từng công đoạn chế biến.",
      },
      {
        icon: Award,
        title: "Tiêu chuẩn ESG",
        desc: "Áp dụng toàn diện bộ tiêu chuẩn Environmental – Social – Governance vào chuỗi giá trị, từ canh tác, chế biến đến phân phối và kinh doanh.",
      },
    ],
  },
  {
    id: "bao-ton-di-san",
    number: "03",
    icon: Landmark,
    title: "Bảo Tồn Di Sản",
    color: "bg-[#5a3a1a]",
    lightColor: "bg-amber-50",
    accentColor: "text-amber-700",
    borderColor: "border-amber-200",
    tagColor: "bg-amber-100 text-amber-800",
    description:
      "Gìn giữ và phát huy những giá trị văn hóa trà lâu đời của người Việt, bảo vệ nguồn gen quý hiếm của các cây chè cổ thụ trăm năm tuổi.",
    items: [
      {
        icon: TreePine,
        title: "Hành trình bảo tồn Di sản vùng chè Shan Tuyết cổ thụ Đồng Phúc, Thái Nguyên",
        desc: "Dự án dài hạn nhằm bảo vệ, nhân giống và phát triển những cây chè Shan Tuyết cổ thụ hàng trăm năm tuổi tại vùng núi Đồng Phúc, Thái Nguyên — một trong những báu vật thiên nhiên hiếm có của Việt Nam. ESGValley cam kết đồng hành cùng cộng đồng địa phương để gìn giữ di sản xanh cho các thế hệ mai sau.",
      },
    ],
  },
  {
    id: "nghien-cuu-san-pham",
    number: "04",
    icon: FlaskConical,
    title: "Nghiên Cứu & Phát Triển Sản Phẩm",
    color: "bg-[#3a1a5c]",
    lightColor: "bg-purple-50",
    accentColor: "text-purple-700",
    borderColor: "border-purple-200",
    tagColor: "bg-purple-100 text-purple-800",
    description:
      "Liên tục đầu tư vào R&D để tạo ra những dòng sản phẩm đột phá, mở rộng hệ sinh thái giá trị từ cây trà, đáp ứng tiêu chuẩn khắt khe của thị trường trong nước và quốc tế.",
    items: [
      {
        icon: BarChart3,
        title: "Nghiên cứu đầu tư dự án",
        desc: "Phân tích thị trường, đánh giá tiềm năng và xây dựng lộ trình đầu tư cho các dự án phát triển hệ sinh thái trà bền vững.",
      },
      {
        icon: Beaker,
        title: "Nghiên cứu sản phẩm",
        desc: "Phát triển các dòng sản phẩm mới từ nguyên liệu trà thuần Việt, kết hợp giữa khoa học hiện đại và tinh hoa truyền thống.",
      },
      {
        icon: Cpu,
        title: "Nghiên cứu quy trình sản xuất & quản lý chất lượng",
        desc: "Tối ưu hóa từng công đoạn sản xuất và xây dựng hệ thống kiểm soát chất lượng chặt chẽ theo chuẩn quốc tế.",
      },
      {
        icon: Microscope,
        title: "Nghiên cứu Công nghệ",
        desc: "Ứng dụng các công nghệ tiên tiến trong chiết xuất, bảo quản và chế biến để giữ nguyên dưỡng chất và hương vị tự nhiên của trà.",
      },
      {
        icon: Palette,
        title: "Nghiên cứu Hệ sinh thái từ Trà",
        desc: "Mở rộng giá trị cây trà sang các lĩnh vực mới: Dược Trà, Mỹ phẩm Trà, Nước cho Trà, Trà Cụ và nhiều sản phẩm phái sinh cao cấp khác.",
      },
    ],
  },
  {
    id: "trai-nghiem-van-hoa",
    number: "05",
    icon: Compass,
    title: "Trải Nghiệm, Văn Hoá & Du Lịch Cộng Đồng",
    color: "bg-[#1a4a4a]",
    lightColor: "bg-teal-50",
    accentColor: "text-teal-700",
    borderColor: "border-teal-200",
    tagColor: "bg-teal-100 text-teal-800",
    description:
      "Kiến tạo không gian trải nghiệm trà đặc sắc, kết hợp du lịch sinh thái cộng đồng và bảo tồn văn hóa bản địa, mang lại giá trị bền vững cho người dân địa phương.",
    items: [
      {
        icon: MapPin,
        title: "Khu Trung Tâm Trải Nghiệm",
        desc: "Không gian tích hợp bao gồm khu trình diễn nghệ thuật pha trà, triển lãm văn hóa trà Việt, tour thăm vườn chè cổ thụ và các workshop trải nghiệm chế biến trà thủ công — nơi du khách được sống trọn vẹn với văn hóa trà di sản.",
      },
    ],
  },
  {
    id: "giao-duc",
    number: "06",
    icon: GraduationCap,
    title: "Giáo Dục & Đào Tạo",
    color: "bg-[#1a3a2a]",
    lightColor: "bg-emerald-50",
    accentColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    tagColor: "bg-emerald-100 text-emerald-800",
    description:
      "Xây dựng nền tảng kiến thức và kỹ năng cho cộng đồng, góp phần nâng cao giá trị nghề làm trà và tạo sinh kế bền vững cho người dân bản địa theo chuẩn ESG.",
    items: [
      {
        icon: BookOpen,
        title: "Hiểu về Trà",
        desc: "Chương trình giáo dục phổ thông về văn hóa trà Việt Nam — lịch sử, phân loại, cách thưởng trà và giá trị dinh dưỡng — dành cho mọi đối tượng từ học sinh đến người tiêu dùng.",
      },
      {
        icon: Users,
        title: "Đào tạo & Tập huấn nâng cao giá trị nghề làm trà",
        desc: "Chương trình tập huấn chuyên sâu cho người dân bản địa về kỹ thuật canh tác hữu cơ, chế biến, đóng gói và tiếp thị sản phẩm trà — đảm bảo yếu tố ESG thông qua việc tạo ra sinh kế bền vững, nâng cao thu nhập và gìn giữ bản sắc văn hóa địa phương.",
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08 } }),
};

export default function Ecosystem() {
  return (
    <div className="w-full bg-background">
      {/* ── HERO ── */}
      <div className="relative pt-44 pb-28 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/ecosystem-banner.png`}
          alt="Hệ sinh thái ESGValley"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-[#C9A84C] text-sm uppercase tracking-[0.35em] font-semibold mb-4"
          >
            ESG Valley
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-white mb-5 leading-tight"
          >
            Hệ Sinh Thái ESGValley
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Mô hình vòng tuần hoàn khép kín — nơi công nghệ, thiên nhiên, văn hóa và con người cùng phát triển bền vững theo chuẩn mực ESG quốc tế.
          </motion.p>
        </div>
      </div>

      {/* ── QUICK NAV ── */}
      <div className="sticky top-[72px] z-30 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors whitespace-nowrap"
              >
                <span className="text-[#C9A84C] font-bold">{s.number}</span>
                {s.title.split(" ").slice(0, 3).join(" ")}…
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTIONS ── */}
      {sections.map((section, sIdx) => {
        const Icon = section.icon;
        const isLarge = section.items.length === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-20 ${sIdx % 2 === 0 ? "bg-background" : "bg-[#f7f9f7]"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section header */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                custom={0}
                variants={fadeUp}
                className="flex items-start gap-6 mb-12"
              >
                <div className={`w-16 h-16 rounded-2xl ${section.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#C9A84C] font-bold text-2xl font-display">{section.number}</span>
                    <div className="h-px w-8 bg-[#C9A84C]/40" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground max-w-3xl leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </motion.div>

              {/* Items */}
              <div className={`grid gap-6 ${
                isLarge
                  ? "grid-cols-1"
                  : section.items.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : section.items.length >= 4
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-3"
              }`}>
                {section.items.map((item, iIdx) => {
                  const ItemIcon = item.icon;
                  return (
                    <motion.div
                      key={iIdx}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-60px" }}
                      custom={iIdx + 1}
                      variants={fadeUp}
                      className={`group rounded-2xl border ${section.borderColor} ${section.lightColor} p-6 hover:shadow-lg transition-all duration-300`}
                    >
                      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${section.color} mb-4 shadow`}>
                        <ItemIcon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className={`font-display text-lg font-bold mb-3 ${section.accentColor} leading-snug`}>
                        {item.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Cùng Kiến Tạo Tương Lai Bền Vững
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Hệ sinh thái ESGValley đang mở rộng — chúng tôi tìm kiếm những đối tác cùng chung tầm nhìn về phát triển bền vững và di sản văn hóa Việt Nam.
            </p>
            <a
              href="/ho-tro#lien-he"
              className="inline-flex items-center gap-2 px-9 py-4 bg-white text-primary font-bold rounded-full hover:bg-white/90 transition-all text-sm shadow-lg"
            >
              Liên hệ hợp tác <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
