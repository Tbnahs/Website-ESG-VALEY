import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { news } from "@/lib/data";

export default function News() {
  const [activeTab, setActiveTab] = useState("Bài viết");
  const tabs = ["Bài viết", "Video", "Thư viện ảnh"];

  return (
    <div className="w-full bg-background pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Tin Tức & Media</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cập nhật những hoạt động mới nhất và khoảnh khắc đẹp từ ESG Valley.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-border/50">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-semibold uppercase tracking-wider transition-colors relative ${
                  activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="news-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {activeTab === "Bài viết" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, idx) => (
                <article key={item.id} className="group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4 relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-primary text-xs font-bold uppercase">{item.category}</span>
                    <span className="text-muted-foreground text-xs">• {item.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{item.excerpt}</p>
                </article>
              ))}
            </motion.div>
          )}

          {activeTab === "Video" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="relative aspect-video bg-muted rounded-sm overflow-hidden group cursor-pointer">
                  {/* unsplash tea making */}
                  <img src="https://pixabay.com/get/g3fdc7ef5a89c62e595d68080d9ebbaca238585db232835c7b6283655adeab4bbd11722c860db20d096cf702a364a2fcc916a4d8614f09829539a1a72a8691e3f_1280.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Video" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "Thư viện ảnh" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {/* Using same unsplash images just for demo */}
              {[
                "https://images.unsplash.com/photo-1594631252845-29fc4cc8c0a1?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1576092762791-dd9e2220afa1?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&q=80&w=600",
                "https://images.unsplash.com/photo-1610630747444-245f7823f66c?auto=format&fit=crop&q=80&w=600",
              ].map((src, i) => (
                <div key={i} className="break-inside-avoid overflow-hidden rounded-sm cursor-pointer group">
                  <img src={src} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery item" />
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
