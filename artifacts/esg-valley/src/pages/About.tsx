import { motion } from "framer-motion";
import { Leaf, Award, Globe, Heart } from "lucide-react";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-background pt-20">
      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={`${import.meta.env.BASE_URL}images/about-banner.png`} 
          alt="Về ESG Valley" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-white font-display text-5xl md:text-7xl font-bold mb-4">Về ESG Valley</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl font-light">
              Hành trình mang văn hoá trà Việt vươn tầm thế giới, kiến tạo giá trị bền vững cho cộng đồng và thiên nhiên.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tổng Quan & Tầm nhìn */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Tầm Nhìn & Sứ Mệnh</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                ESG Valley không chỉ là một thương hiệu trà, mà là một <strong>Hệ Sinh Thái</strong> kết nối giữa con người với con người, và giữa con người với tự nhiên.
              </p>
              <div className="space-y-6 mt-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-display text-2xl font-bold text-foreground">Tầm nhìn</h3>
                    <p className="text-muted-foreground mt-2">Trở thành thương hiệu tiên phong tại Việt Nam áp dụng toàn diện tiêu chuẩn ESG trong nông nghiệp và du lịch văn hoá.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-display text-2xl font-bold text-foreground">Sứ mệnh</h3>
                    <p className="text-muted-foreground mt-2">Bảo tồn di sản trà cổ thụ, nâng cao đời sống bà con vùng cao và lan toả giá trị văn hoá Việt Nam ra toàn cầu.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
            >
              {/* unsplash tea plantation */}
              <img src="https://pixabay.com/get/ge17a0a0b8a8a115aff104fc1b3ba2fe3000a1e7bd25cb0a06a328e7346323c6b2f38796bc4c319d99d5b4f5b66ab52fd323677cf26963b0b766471ec0df316cb_1280.jpg" alt="Tea Plantation" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hành Trình ESG */}
      <section className="py-24 bg-muted/50 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground">Hành Trình Kiến Tạo</h2>
          </motion.div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-transparent">
            
            {[
              { year: "2020", title: "Khởi Nguồn", desc: "Chuyến đi thực tế tại Suối Giàng, Hà Giang, khơi nguồn cảm hứng bảo tồn cây trà cổ thụ." },
              { year: "2022", title: "Thành lập ESG Valley", desc: "Chính thức ra mắt thương hiệu, áp dụng quy trình thu hái và sản xuất chuẩn hữu cơ." },
              { year: "2024", title: "Mở Rộng Hệ Sinh Thái", desc: "Triển khai các dự án du lịch văn hoá và giáo dục cộng đồng tại vùng nguyên liệu." },
              { year: "2026", title: "Vươn Tầm Thế Giới", desc: "Mục tiêu đạt 100% chứng nhận ESG quốc tế và xuất khẩu sang thị trường Châu Âu, Nhật Bản." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-card rounded-sm shadow-md border border-border group-hover:shadow-xl transition-shadow">
                  <span className="font-display font-bold text-primary text-xl mb-1 block">{item.year}</span>
                  <h4 className="font-bold text-lg text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
