import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ShoppingCart, Phone, ArrowLeft } from "lucide-react";
import { products } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formatPrice = (price: number) =>
  price.toLocaleString("vi-VN") + "₫";

function DoubleChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6 17L11 12L6 7" stroke="#5F9654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 17L18 12L13 7" stroke="#5F9654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();
  const { isLoggedIn, openAuthModal } = useAuth();
  const { toast } = useToast();
  const [added, setAdded] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground text-lg">Không tìm thấy sản phẩm.</p>
        <button onClick={() => navigate("/san-pham")} className="text-primary font-semibold hover:underline flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
        </button>
      </div>
    );
  }

  const related = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const handleAddToCart = () => {
    if (!isLoggedIn) { openAuthModal(); return; }
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
    toast({ title: "Đã thêm vào giỏ hàng", description: product.name });
  };

  const handleContact = () => {
    navigate("/ho-tro");
    setTimeout(() => { window.location.hash = "lien-he"; }, 150);
  };

  const isSpecial = product.category === "Dịch Vụ Đặc Biệt";

  const thumbs = product.thumbnails && product.thumbnails.length > 0
    ? product.thumbnails
    : [product.image, product.image];

  const mainImage = thumbs[activeThumb] ?? product.image;

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Product name */}
            <h1
              className="font-display font-bold leading-tight mb-2"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#572A01", letterSpacing: "-0.03em" }}
            >
              {product.name}
            </h1>

            {/* Tagline */}
            {product.tagline && (
              <p
                className="font-semibold mb-6"
                style={{ fontSize: "32px", lineHeight: "40px", color: "#525252" }}
              >
                {product.tagline}
              </p>
            )}

            {/* Thumbnails */}
            {thumbs.length > 0 && (
              <div className="flex gap-3 mb-8">
                {thumbs.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveThumb(i)}
                    className="flex-shrink-0 overflow-hidden transition-all"
                    style={{
                      width: "80px", height: "80px",
                      borderRadius: "4px",
                      border: activeThumb === i ? "2px solid #572A01" : "2px solid #E4E4E4",
                    }}
                  >
                    <img src={src} alt={product.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Description */}
            <p
              className="font-medium text-justify mb-8"
              style={{ fontSize: "20px", lineHeight: "30px", color: "#525252" }}
            >
              {product.description}
            </p>

            {/* CTA */}
            {isSpecial ? (
              <button
                onClick={handleContact}
                className="flex items-center justify-center gap-2 font-bold transition-opacity hover:opacity-80 self-start"
                style={{
                  background: "#572A01",
                  borderRadius: "12px",
                  padding: "12px 20px",
                  fontSize: "24px",
                  lineHeight: "30px",
                  color: "#FFFFFF",
                  height: "54px",
                }}
              >
                <Phone className="w-5 h-5" />
                Liên hệ báo giá
              </button>
            ) : (
              <div className="flex items-center gap-5">
                <span
                  className="font-bold"
                  style={{ fontSize: "28px", color: "#572A01" }}
                >
                  {formatPrice(product.price)}
                </span>
                <button
                  onClick={handleAddToCart}
                  className="flex items-center gap-2 font-bold transition-opacity hover:opacity-80"
                  style={{
                    background: added ? "#5F9654" : "#572A01",
                    borderRadius: "12px",
                    padding: "12px 20px",
                    fontSize: "20px",
                    color: "#FFFFFF",
                    height: "54px",
                  }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {added ? "Đã thêm!" : "Thêm vào giỏ"}
                </button>
              </div>
            )}
          </motion.div>

          {/* Right: Main Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="overflow-hidden bg-gray-50"
              style={{
                width: "100%",
                maxWidth: "471px",
                aspectRatio: "1/1",
                borderRadius: "8px",
              }}
            >
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STORY SECTIONS ── */}
      {product.story && product.story.length > 0 && (
        <div>
          {product.story.map((section, idx) => {
            const isImageLeft = section.imagePosition === "left";
            return (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-6 lg:px-16 py-14"
                style={{ borderTop: idx === 0 ? "1px solid #E4E4E4" : "none" }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${!isImageLeft ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
                  {/* Text */}
                  <div className="flex flex-col gap-6">
                    {section.title && (
                      <h2
                        className="font-display font-bold"
                        style={{ fontSize: "32px", lineHeight: "40px", color: "#572A01" }}
                      >
                        {section.title}
                      </h2>
                    )}
                    {section.text.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        className="font-medium text-justify"
                        style={{ fontSize: "20px", lineHeight: "30px", color: "#525252" }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Image */}
                  {section.image && (
                    <div
                      className="overflow-hidden bg-gray-50"
                      style={{ borderRadius: "8px", aspectRatio: "4/3" }}
                    >
                      <img
                        src={section.image}
                        alt={section.title ?? product.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  )}
                </div>
              </motion.section>
            );
          })}
        </div>
      )}

      {/* ── CÓ THỂ BẠN QUAN TÂM ── */}
      {related.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">

            {/* Divider */}
            <div style={{ height: "1px", background: "#E4E4E4", marginBottom: "48px" }} />

            {/* Title */}
            <h2
              className="font-display font-bold text-center mb-3"
              style={{ fontSize: "48px", lineHeight: "60px", color: "#525252", letterSpacing: "-0.03em" }}
            >
              Có thể bạn quan tâm
            </h2>

            {/* Subtitle */}
            <p
              className="font-semibold text-center mb-14"
              style={{ fontSize: "20px", lineHeight: "30px", color: "#A2A2A2" }}
            >
              Khám phá thêm những sản phẩm cùng dòng từ ESG Valley
            </p>

            {/* Related cards */}
            <div className="flex flex-wrap justify-center gap-[47px] lg:gap-[95px]">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col cursor-pointer group"
                  style={{ width: "295px" }}
                  onClick={() => navigate(`/san-pham/${p.slug}`)}
                >
                  {/* Image */}
                  <div
                    className="overflow-hidden mb-6 flex-shrink-0"
                    style={{ width: "295px", height: "295px", borderRadius: "32px", background: "#F5F5F5" }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text info */}
                  <div className="flex flex-col gap-2">
                    {/* Category + Name */}
                    <div className="flex flex-col gap-2">
                      <span
                        className="font-semibold"
                        style={{ fontSize: "18px", lineHeight: "22px", color: "#5F9654", letterSpacing: "-0.03em" }}
                      >
                        {p.category}
                      </span>
                      <h3
                        className="font-display font-bold"
                        style={{ fontSize: "24px", lineHeight: "30px", color: "#525252", letterSpacing: "-0.03em" }}
                      >
                        {p.name}
                      </h3>
                    </div>

                    {/* Excerpt */}
                    <p
                      className="font-semibold line-clamp-2"
                      style={{ fontSize: "18px", lineHeight: "30px", color: "#A2A2A2" }}
                    >
                      {p.description}
                    </p>

                    {/* Xem thêm */}
                    <div className="flex items-center gap-1 pt-1">
                      <span
                        className="font-semibold"
                        style={{ fontSize: "18px", lineHeight: "30px", color: "#525252" }}
                      >
                        Xem thêm
                      </span>
                      <DoubleChevronRight />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
