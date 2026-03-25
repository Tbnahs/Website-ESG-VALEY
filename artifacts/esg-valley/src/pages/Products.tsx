import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { products } from "@/lib/data";
import { Link } from "wouter";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const categories = ["Tất cả", "Trà", "Matcha", "Trà Cụ", "Dịch Vụ Đặc Biệt"];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && categories.includes(cat)) {
      setActiveCategory(cat);
    }
  }, []);

  const filteredProducts = activeCategory === "Tất cả"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-[#f8f8f4] min-h-screen">
      {/* Header */}
      <div className="relative pt-28 pb-16 text-center overflow-hidden">
        <img
          src="/images/tong-quan.jpg"
          alt="Danh sách sản phẩm"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <p className="text-white/70 text-sm mb-2 flex items-center justify-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/90">Danh sách sản phẩm</span>
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mt-[100px] mb-[0px]">Danh sách sản phẩm</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="w-full lg:w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Danh mục</h3>
              <ul className="space-y-1">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        activeCategory === cat
                          ? "bg-primary text-white font-semibold"
                          : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product List */}
          <main className="flex-1">
            <div className="space-y-6">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.5 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-0"
                >
                  {/* Image */}
                  <div className="w-52 sm:w-64 flex-shrink-0 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ minHeight: "220px" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      {/* Category + Xem thêm row */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                          {product.category}
                        </span>
                        <button className="text-muted-foreground text-xs hover:text-primary transition-colors flex items-center gap-0.5">
                          Xem thêm <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Name */}
                      <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-5">
                        {product.description}
                      </p>

                      {/* Thumbnails */}
                      <div className="flex gap-2 mb-6">
                        {[0, 1, 2].map(i => (
                          <div key={i} className="w-14 h-14 rounded-lg overflow-hidden border border-border/40 flex-shrink-0">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <button className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors">
                        Liên hệ báo giá
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                  Không có sản phẩm nào trong danh mục này.
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
