import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ShoppingCart, Phone, ArrowLeft } from "lucide-react";
import { products } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { useState } from "react";

const formatPrice = (price: number) =>
  price.toLocaleString("vi-VN") + "₫";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const product = products.find(p => p.slug === slug);
  const { addItem } = useCart();
  const { isLoggedIn, openAuthModal } = useAuth();
  const [added, setAdded] = useState(false);

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
    addItem({ product, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleContact = () => {
    navigate("/ho-tro");
    setTimeout(() => { window.location.hash = "lien-he"; }, 150);
  };

  const isSpecial = product.category === "Dịch Vụ Đặc Biệt";

  return (
    <div className="bg-white min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-8 pb-0">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <button onClick={() => navigate("/")} className="hover:text-primary transition-colors">Trang chủ</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => navigate("/san-pham")} className="hover:text-primary transition-colors">Sản phẩm</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-3 block">
              {product.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-3">
              {product.name}
            </h1>
            {product.tagline && (
              <p className="text-muted-foreground text-base italic mb-6">{product.tagline}</p>
            )}
            <p className="text-foreground/80 leading-relaxed text-base mb-8">
              {product.description}
            </p>

            {/* Thumbnails */}
            {product.thumbnails && (
              <div className="flex gap-3 mb-8">
                {product.thumbnails.map((src, i) => (
                  <div key={i} className="w-16 h-16 rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
                    <img src={src} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            {isSpecial ? (
              <div className="flex items-center gap-4">
                <button
                  onClick={handleContact}
                  className="flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all duration-200 text-sm"
                >
                  <Phone className="w-4 h-4" /> Liên hệ báo giá
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
                <button
                  onClick={handleAddToCart}
                  className={`flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                    added ? "bg-green-500 text-white" : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {added ? "Đã thêm vào giỏ!" : "Thêm vào giỏ"}
                </button>
              </div>
            )}
          </motion.div>

          {/* Right: Main Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-6"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Story sections */}
      {product.story && product.story.length > 0 && (
        <section className="border-t border-gray-100">
          {product.story.map((section, idx) => {
            const isImageLeft = section.imagePosition === "left";
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`max-w-6xl mx-auto px-6 lg:px-12 py-16 ${idx > 0 ? "border-t border-gray-50" : ""}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isImageLeft ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"}`}>
                  {/* Text */}
                  <div>
                    {section.title && (
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5 leading-snug">
                        {section.title}
                      </h2>
                    )}
                    {section.text.split("\n\n").map((para, i) => (
                      <p key={i} className="text-foreground/75 leading-relaxed text-base mb-4 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Image */}
                  {section.image && (
                    <div className="rounded-2xl overflow-hidden bg-gray-50 aspect-[4/3]">
                      <img
                        src={section.image}
                        alt={section.title ?? product.name}
                        className="w-full h-full object-contain p-6"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </section>
      )}

      {/* CTA banner (for special services) */}
      {isSpecial && (
        <div className="bg-primary/5 border-y border-primary/10 py-14">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Sẵn sàng trải nghiệm?
            </h3>
            <p className="text-muted-foreground mb-7 text-sm leading-relaxed">
              Liên hệ với ESG Valley để được tư vấn và nhận báo giá phù hợp với nhu cầu của bạn.
            </p>
            <button
              onClick={handleContact}
              className="inline-flex items-center gap-2 px-9 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all text-sm"
            >
              <Phone className="w-4 h-4" /> Liên hệ báo giá
            </button>
          </div>
        </div>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">Có thể bạn quan tâm</h2>
            <p className="text-muted-foreground text-sm">Khám phá thêm những sản phẩm cùng dòng từ ESG Valley</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/san-pham/${p.slug}`)}
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-1">
                  {p.category}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {p.name}
                </h3>
                <p className="text-muted-foreground text-xs line-clamp-2 mb-3">{p.description}</p>
                <button className="text-primary text-xs font-semibold hover:underline flex items-center gap-0.5">
                  Xem thêm <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
