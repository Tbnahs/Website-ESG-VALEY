import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ShoppingCart, CheckCircle } from "lucide-react";
import { products } from "@/lib/data";
import { Link, useLocation } from "wouter";
import { useCart } from "@/lib/cart";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const categories = ["Tất cả", "Trà", "Matcha", "Trà Cụ", "Dịch Vụ Đặc Biệt"];
  const { addItem } = useCart();
  const { isLoggedIn, openAuthModal } = useAuth();
  const [, navigate] = useLocation();
  const [addedId, setAddedId] = useState<number | null>(null);
  const { toast } = useToast();

  const handleContact = () => {
    navigate("/ho-tro");
    setTimeout(() => { window.location.hash = "lien-he"; }, 150);
  };

  const handleAddToCart = (product: typeof products[0]) => {
    if (!isLoggedIn) {
      openAuthModal();
      return;
    }
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
    toast({
      title: "Đã thêm vào giỏ hàng",
      description: product.name,
    });
  };

  const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN") + "₫";

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
    <div className="w-full bg-white min-h-screen pt-28">
      {/* Hero */}
      <div className="relative py-28 overflow-hidden">
        <img
          src="/images/products-hero.jpg"
          alt="Danh sách sản phẩm"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Sản Phẩm</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Tinh hoa trà Việt – từ núi rừng Tây Bắc đến tay bạn.
            </p>
          </div>
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

          {/* Product Grid — 2 columns */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.5 }}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-muted rounded-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <button
                      onClick={() => navigate(`/san-pham/${product.slug}`)}
                      className="absolute top-3 right-3 text-muted-foreground text-xs hover:text-primary transition-colors flex items-center gap-0.5 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full"
                    >
                      Xem thêm <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-1">
                      {product.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                      {product.description}
                    </p>

                    {/* CTA */}
                    {product.category === "Dịch Vụ Đặc Biệt" ? (
                      <button
                        onClick={handleContact}
                        className="w-full py-2.5 border-2 border-primary text-primary text-sm font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        Liên hệ báo giá
                      </button>
                    ) : (
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-lg font-bold text-primary">
                          {formatPrice(product.price)}
                        </span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                            addedId === product.id
                              ? "bg-green-500 text-white"
                              : "bg-primary text-white hover:bg-primary/90"
                          }`}
                        >
                          <AnimatePresence mode="wait">
                            {addedId === product.id ? (
                              <motion.span key="done" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" /> Đã thêm
                              </motion.span>
                            ) : (
                              <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                                <ShoppingCart className="w-4 h-4" /> Thêm vào giỏ
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {filteredProducts.length === 0 && (
                <div className="col-span-2 text-center py-20 text-muted-foreground">
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
