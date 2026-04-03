import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Play, Search, ChevronDown, ArrowUpDown, ChevronRight } from "lucide-react";
import { news } from "@/lib/data";

const ITEMS_PER_PAGE = 6;

const allArticles = news;

function parseDate(dateStr: string) {
  const [d, m, y] = dateStr.split("/").map(Number);
  return new Date(y, m - 1, d);
}

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

export default function News() {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState("Bài viết");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"recent" | "oldest">("recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả danh mục");
  const [showCatDropdown, setShowCatDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const tabs = ["Bài viết", "Video", "Thư viện ảnh"];
  const categories = ["Tất cả danh mục", ...Array.from(new Set(allArticles.map(a => a.category)))];

  const filtered = allArticles
    .filter(a => selectedCategory === "Tất cả danh mục" || a.category === selectedCategory)
    .filter(a => !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      const da = parseDate(a.date).getTime();
      const db = parseDate(b.date).getTime();
      return sortOrder === "recent" ? db - da : da - db;
    });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="w-full bg-background pb-24" style={{ isolation: "isolate" }}>
      {/* ── HERO BANNER ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "380px" }}>
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=85"
          alt="Tin tức ESG Valley"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(21, 40, 29, 0.62)" }} />

        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-8 md:pb-14">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 mb-3">
            <span className="font-medium text-white text-base md:text-2xl">Trang chủ</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <span className="font-medium text-white text-base md:text-2xl">Tin tức</span>
          </div>
          {/* Title */}
          <h1
            className="font-display font-bold text-white text-center text-3xl md:text-5xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Tin tức mới nhất
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── TABS ── */}
        <div className="flex justify-center mt-10 mb-8 border-b border-border/50">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
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

        {/* ── CONTENT ── */}
        <div className="min-h-[400px]">

          {/* BAI VIET */}
          {activeTab === "Bài viết" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

              {/* Filters */}
              <div className="flex items-center gap-4 mb-10 flex-wrap">

                {/* Sort */}
                <div className="relative">
                  <button
                    onClick={() => { setShowSortDropdown(p => !p); setShowCatDropdown(false); }}
                    className="flex items-center gap-2 font-medium text-[20px] px-8 py-2 rounded-2xl"
                    style={{ background: "#F9F9F9", height: "54px", color: "#525252" }}
                  >
                    <span>{sortOrder === "recent" ? "Gần đây" : "Cũ nhất"}</span>
                    <ArrowUpDown className="w-5 h-5" style={{ color: "#B7820B" }} />
                  </button>
                  {showSortDropdown && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-xl z-20 py-1 min-w-[160px]">
                      {["recent", "oldest"].map(s => (
                        <button
                          key={s}
                          onClick={() => { setSortOrder(s as "recent" | "oldest"); setShowSortDropdown(false); setCurrentPage(1); }}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                          style={{ color: sortOrder === s ? "#5F9654" : "#525252" }}
                        >
                          {s === "recent" ? "Gần đây" : "Cũ nhất"}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Category */}
                <div className="relative">
                  <button
                    onClick={() => { setShowCatDropdown(p => !p); setShowSortDropdown(false); }}
                    className="flex items-center gap-2 font-medium text-[20px] px-8 py-2 rounded-2xl"
                    style={{ background: "#F9F9F9", height: "54px", color: "#525252" }}
                  >
                    <span>{selectedCategory}</span>
                    <ChevronDown className="w-5 h-5" style={{ color: "#B7820B" }} />
                  </button>
                  {showCatDropdown && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-xl z-20 py-1 min-w-[200px]">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => { setSelectedCategory(cat); setShowCatDropdown(false); setCurrentPage(1); }}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                          style={{ color: selectedCategory === cat ? "#5F9654" : "#525252" }}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search */}
                <div
                  className="flex items-center gap-3 flex-1 px-8 rounded-2xl"
                  style={{ background: "#F9F9F9", height: "54px", minWidth: "280px" }}
                >
                  <Search className="w-5 h-5 flex-shrink-0" style={{ color: "#B7820B" }} />
                  <input
                    type="text"
                    placeholder="Tìm kiếm theo chủ đề"
                    value={searchQuery}
                    onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    className="bg-transparent outline-none w-full font-medium"
                    style={{ fontSize: "20px", color: "#525252" }}
                  />
                </div>
              </div>

              {/* Article Grid */}
              {paginated.length === 0 ? (
                <p className="text-center text-muted-foreground py-16 text-lg">Không tìm thấy bài viết nào.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[47px]">
                  {paginated.map((item, idx) => {
                    const { day, month } = formatDateBadge(item.date);
                    return (
                      <motion.article
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.07 }}
                        className="cursor-pointer group flex flex-col items-center"
                        style={{ width: "100%", maxWidth: "369px", margin: "0 auto" }}
                        onClick={() => navigate(`/tin-tuc/${(item as any).slug || item.id}`)}
                      >
                        {/* Image + badge */}
                        <div className="relative w-full" style={{ paddingBottom: "95%" }}>
                          <div
                            className="absolute inset-0 overflow-hidden"
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
                              left: 0,
                              bottom: "-12px",
                            }}
                          >
                            <span className="font-bold leading-tight text-center" style={{ fontSize: "22px", color: "#B7820B" }}>
                              {day}
                            </span>
                            <span className="font-bold leading-tight text-center" style={{ fontSize: "14px", color: "#B7820B" }}>
                              {month}
                            </span>
                          </div>
                        </div>
                        {/* Text content */}
                        <div className="mt-8 flex flex-col items-center gap-2 w-full px-2">
                          <span
                            className="font-bold text-center uppercase"
                            style={{ fontSize: "16px", color: "#5F9654", letterSpacing: "-0.03em" }}
                          >
                            {item.category}
                          </span>
                          <h3
                            className="font-display font-semibold text-center leading-tight"
                            style={{ fontSize: "28px", color: "#183806" }}
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
                            onClick={e => { e.stopPropagation(); navigate(`/tin-tuc/${(item as any).slug || item.id}`); }}
                          >
                            <span>Xem chi tiết</span>
                            <ArrowBendUpRight />
                          </button>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-14">
                  <div
                    className="flex items-center gap-4 px-[10px]"
                    style={{
                      background: "#F9F9F9",
                      borderRadius: "12px",
                      height: "60px",
                    }}
                  >
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className="font-semibold flex items-center justify-center transition-colors"
                        style={{
                          width: "40px", height: "40px",
                          borderRadius: "8px",
                          fontSize: "20px",
                          background: currentPage === page ? "#5F9654" : "#FFFFFF",
                          color: currentPage === page ? "#FFFFFF" : "#525252",
                        }}
                      >
                        {page}
                      </button>
                    ))}
                    {currentPage < totalPages && (
                      <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        className="flex items-center justify-center transition-colors hover:bg-gray-100"
                        style={{ width: "40px", height: "40px", borderRadius: "8px", background: "#FFFFFF" }}
                      >
                        <ChevronRight className="w-5 h-5" style={{ color: "#525252" }} />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* VIDEO */}
          {activeTab === "Video" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="relative aspect-video bg-muted rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Video"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* THU VIEN ANH */}
          {activeTab === "Thư viện ảnh" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {Array.from({ length: 24 }, (_, i) => `/images/news-${i + 1}.jpg`).map((src, i) => (
                <div key={i} className="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group">
                  <img src={src} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" alt={`Ảnh tin tức ${i + 1}`} />
                </div>
              ))}
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
