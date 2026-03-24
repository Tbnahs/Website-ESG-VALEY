import { motion } from "framer-motion";
import { Microscope, Leaf, History, FlaskConical, Map, GraduationCap } from "lucide-react";

export default function Ecosystem() {
  const pillars = [
    {
      icon: Microscope,
      title: "Viện Nghiên Cứu",
      subtitle: "Công nghệ & Chuyển đổi số",
      desc: "Ứng dụng công nghệ hiện đại vào nông nghiệp, tối ưu hóa quy trình trồng trọt và sản xuất để đảm bảo chất lượng và minh bạch."
    },
    {
      icon: Leaf,
      title: "Vùng Nguyên Liệu",
      subtitle: "Phát triển bền vững",
      desc: "Quy hoạch và phát triển các vùng nguyên liệu chuẩn hữu cơ, bảo vệ đất, nước và đa dạng sinh học."
    },
    {
      icon: History,
      title: "Bảo Tồn Di Sản",
      subtitle: "Trà Shan Tuyết cổ thụ",
      desc: "Dự án bảo vệ những cây trà hàng trăm năm tuổi tại vùng núi cao, gìn giữ nguồn gen quý hiếm của Việt Nam."
    },
    {
      icon: FlaskConical,
      title: "Nghiên Cứu Sản Phẩm",
      subtitle: "Đổi mới sáng tạo",
      desc: "Liên tục R&D để tạo ra những dòng sản phẩm chất lượng cao, đáp ứng tiêu chuẩn khắt khe của quốc tế."
    },
    {
      icon: Map,
      title: "Trải Nghiệm Văn Hoá",
      subtitle: "Du lịch cộng đồng",
      desc: "Xây dựng các tour du lịch sinh thái tại vùng trồng trà, mang lại trải nghiệm văn hóa chân thực và tạo sinh kế cho bà con."
    },
    {
      icon: GraduationCap,
      title: "Giáo Dục Đào Tạo",
      subtitle: "Phát triển năng lực",
      desc: "Các chương trình đào tạo chuyên sâu về kỹ thuật nông nghiệp bền vững và tiêu chuẩn ESG cho cộng đồng địa phương."
    }
  ];

  return (
    <div className="w-full bg-background pt-20">
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src={`${import.meta.env.BASE_URL}images/ecosystem-banner.png`} 
          alt="Hệ Sinh Thái ESG" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-white font-display text-5xl md:text-7xl font-bold mb-4">Hệ Sinh Thái ESG</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light">
              Mô hình vòng tuần hoàn khép kín, nơi mọi yếu tố bổ trợ và phát triển cùng nhau.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.6 }} viewport={{ once: true }}
                className="group p-8 bg-card border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 rounded-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110 transform">
                  <pillar.icon className="w-32 h-32 text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <pillar.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">{pillar.title}</h3>
                  <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">{pillar.subtitle}</div>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
