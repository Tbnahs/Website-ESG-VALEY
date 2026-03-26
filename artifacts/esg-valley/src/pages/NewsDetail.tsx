import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Share2 } from "lucide-react";
import { news } from "@/lib/data";

function formatDateBadge(dateStr: string) {
  const [d, m] = dateStr.split("/");
  return { day: d, month: `Th${m}` };
}

function ArrowBendUpRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 14.25L21 9.75L16.5 5.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 18.75C3 16.3631 3.94821 14.0739 5.63604 12.386C7.32387 10.6982 9.61305 9.75 12 9.75H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();

  const article = news.find(n => n.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-24">
        <p className="text-muted-foreground text-lg">Không tìm thấy bài viết.</p>
        <button
          onClick={() => navigate("/tin-tuc")}
          className="text-primary font-semibold hover:underline flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại tin tức
        </button>
      </div>
    );
  }

  const related = news
    .filter(n => n.slug !== slug)
    .slice(0, 3);

  const { day, month } = formatDateBadge(article.date);

  const paragraphs = (article.content ?? article.excerpt)
    .split("\n\n")
    .filter(Boolean);

  return (
    <div className="bg-white min-h-screen pb-24 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HERO IMAGE + DATE BADGE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <div
            className="w-full overflow-hidden"
            style={{ height: "415px", borderRadius: "24px" }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Date badge — top-right corner */}
          <div
            className="absolute flex flex-col items-center justify-center"
            style={{
              width: "129px",
              height: "129px",
              background: "#FAD478",
              border: "8px solid #FFFFFF",
              borderRadius: "50%",
              right: "-16px",
              top: "-16px",
            }}
          >
            <span
              className="font-bold text-center leading-tight"
              style={{ fontSize: "36px", lineHeight: "28px", color: "#B7820B" }}
            >
              {day}
            </span>
            <span
              className="font-bold text-center"
              style={{ fontSize: "20px", color: "#B7820B" }}
            >
              {month}
            </span>
          </div>
        </motion.div>

        {/* ── TITLE ── */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-center mb-8"
          style={{ fontSize: "40px", lineHeight: "50px", color: "#183806" }}
        >
          {article.title}
        </motion.h1>

        {/* ── DASHED DIVIDER ── */}
        <div style={{ borderTop: "1px dashed #A2A2A2", marginBottom: "40px" }} />

        {/* ── ARTICLE BODY ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-10"
        >
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-bold text-justify mb-6"
              style={{ fontSize: "22px", lineHeight: "36px", color: "#525252" }}
            >
              {para}
            </p>
          ))}
        </motion.div>

        {/* ── SHARE ── */}
        <div className="flex justify-center mb-20">
          <button
            className="flex items-center gap-2 font-medium transition-opacity hover:opacity-70"
            style={{ fontSize: "20px", color: "#5F9654" }}
            onClick={() => navigator.share?.({ title: article.title, url: window.location.href })}
          >
            <Share2 className="w-5 h-5" />
            Chia sẻ
          </button>
        </div>

        {/* ── CÓ THỂ BẠN QUAN TÂM ── */}
        {related.length > 0 && (
          <section>
            {/* Title */}
            <h2
              className="font-display font-bold text-center mb-3"
              style={{ fontSize: "48px", lineHeight: "60px", color: "#183806" }}
            >
              Có thể bạn quan tâm
            </h2>

            {/* Subtitle */}
            <p
              className="font-semibold text-center mb-12"
              style={{ fontSize: "20px", lineHeight: "30px", color: "#A2A2A2" }}
            >
              Những bài viết liên quan mà bạn có thể quan tâm
            </p>

            {/* Cards row */}
            <div className="flex flex-wrap justify-center gap-[42px]">
              {related.map((item, idx) => {
                const badge = formatDateBadge(item.date);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="cursor-pointer group flex flex-col items-center"
                    style={{ width: "369px" }}
                    onClick={() => navigate(`/tin-tuc/${item.slug}`)}
                  >
                    {/* Image + badge */}
                    <div className="relative w-full mb-4" style={{ height: "350px" }}>
                      <div
                        className="w-full h-full overflow-hidden"
                        style={{ borderRadius: "24px" }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Date badge */}
                      <div
                        className="absolute flex flex-col items-center justify-center"
                        style={{
                          width: "95px", height: "95px",
                          background: "#FAD478",
                          border: "8px solid #FFFFFF",
                          borderRadius: "50%",
                          left: "5px",
                          bottom: "-16px",
                        }}
                      >
                        <span className="font-bold leading-tight text-center" style={{ fontSize: "22px", color: "#B7820B" }}>
                          {badge.day}
                        </span>
                        <span className="font-bold text-center" style={{ fontSize: "13px", color: "#B7820B" }}>
                          {badge.month}
                        </span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex flex-col items-center gap-1 w-full px-2 mt-4">
                      <span
                        className="font-bold text-center uppercase"
                        style={{ fontSize: "16px", lineHeight: "20px", color: "#5F9654", letterSpacing: "-0.03em" }}
                      >
                        {item.category}
                      </span>
                      <h3
                        className="font-display font-semibold text-center"
                        style={{ fontSize: "28px", lineHeight: "35px", color: "#183806" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="font-semibold text-center line-clamp-2"
                        style={{ fontSize: "20px", lineHeight: "30px", color: "#525252" }}
                      >
                        {item.excerpt}
                      </p>

                      {/* Button */}
                      <button
                        className="flex items-center justify-center gap-2 mt-4 font-semibold transition-opacity hover:opacity-80"
                        style={{
                          background: "#5F9654",
                          borderRadius: "12px",
                          padding: "12px 20px",
                          fontSize: "20px",
                          color: "#FFFFFF",
                        }}
                      >
                        <span>Xem chi tiết</span>
                        <ArrowBendUpRight />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
