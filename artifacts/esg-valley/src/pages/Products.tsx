import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { products } from "@/lib/data";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const categories = ["Tất cả", "Trà", "Trà Cụ", "Dịch Vụ"];

  const filteredProducts = activeCategory === "Tất cả" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-background pt-24 pb-24">
      {/* Header */}
      <div className="relative py-24 mb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1600&q=85"
          alt="Sản phẩm ESG Valley"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Sản Phẩm ESG Valley</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Trải nghiệm bộ sưu tập tinh hoa hội tụ từ thiên nhiên và nghệ thuật thủ công truyền thống.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-1/4">
            <div className="sticky top-28 bg-card p-6 border border-border rounded-sm">
              <div className="mb-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Tìm kiếm sản phẩm..." 
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                  />
                  <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-display text-xl font-bold mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" /> Danh Mục
                </h3>
                <ul className="space-y-2">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-left px-3 py-2 rounded-sm text-sm transition-colors ${
                          activeCategory === cat ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted text-foreground"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                  className="group bg-card border border-border/50 rounded-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur text-foreground text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-sm">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/50">
                      <span className="font-semibold text-foreground">{product.price}</span>
                      <button className="text-primary hover:text-primary/80 font-medium text-sm">
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
