import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { MapPin, Phone, Search, ShoppingBag, User, Menu, X, ChevronDown, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/lib/auth";
import { useLang, LANGUAGES, type Lang } from "@/lib/lang";

const productMenu = [
  {
    heading: "Trà",
    items: [
      { label: "Mã Đáo Thành Công", cat: "Trà" },
      { label: "Tản Viên Trà", cat: "Trà" },
      { label: "Mạc Triều Trà", cat: "Trà" },
      { label: "Bách Niên Trà", cat: "Trà" },
      { label: "Thượng Cổ Trà", cat: "Trà" },
    ],
  },
  {
    heading: "Matcha",
    items: [
      { label: "Matcha", cat: "Matcha" },
    ],
  },
  {
    heading: "Trà Cụ",
    items: [
      { label: "Tách Trà", cat: "Trà Cụ" },
      { label: "Ấm Trà", cat: "Trà Cụ" },
      { label: "Tống Trà", cat: "Trà Cụ" },
      { label: "Ly Nước", cat: "Trà Cụ" },
      { label: "Đĩa Lót", cat: "Trà Cụ" },
    ],
  },
  {
    heading: "Dịch Vụ Đặc Biệt",
    items: [
      { label: "Tiệc Trà Di Sản", cat: "Dịch Vụ Đặc Biệt" },
      { label: "Tea Show – Trình Diễn Nghệ Thuật Pha Trà", cat: "Dịch Vụ Đặc Biệt" },
    ],
  },
];

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const { user, isLoggedIn, logout, openAuthModal } = useAuth();
  const { lang, setLang } = useLang();

  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsScrolled(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (userRef.current && !userRef.current.contains(e.target as Node)) setUserMenuOpen(false);
      if (productRef.current && !productRef.current.contains(e.target as Node)) setProductMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isTransparent = isHomePage && !isScrolled;

  const navLinks = [
    { path: "/", label: "Trang Chủ" },
    { path: "/ve-esg-valley", label: "Câu chuyện ESGValley" },
    { path: "/tin-tuc", label: "Tin Tức" },
    { path: "/lien-he", label: "Liên Hệ và tra cứu" },
  ];

  const currentLang = LANGUAGES.find(l => l.code === lang)!;

  const handleCartClick = () => {
    if (!isLoggedIn) openAuthModal();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent text-white border-b border-white/10 py-2"
          : "bg-background text-foreground border-b border-border shadow-sm py-1"
      }`}
    >
      {/* Top Bar */}
      <div className={`hidden md:flex justify-between items-center px-8 py-1.5 text-xs border-b ${isTransparent ? "border-white/10" : "border-border/50"} font-medium`}>
        <div className="flex items-center space-x-6">
          <span className="flex items-center hover:text-accent transition-colors cursor-pointer">
            <MapPin className="w-3 h-3 mr-1.5" />
            Showroom: 123 Đường Trà, Tây Hồ, Hà Nội
          </span>
          <span className="flex items-center hover:text-accent transition-colors cursor-pointer">
            <Phone className="w-3 h-3 mr-1.5" />
            0969 510 955
          </span>
        </div>

        <div className="relative" ref={langRef}>
          <button
            onClick={() => setLangOpen(v => !v)}
            className="flex items-center gap-1.5 cursor-pointer hover:text-accent transition-colors group px-2 py-1 rounded"
          >
            <span className="font-semibold">{currentLang.code}</span>
            <span className="text-[10px] opacity-60">— {currentLang.nativeName}</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-full mt-1 bg-background border border-border rounded-sm shadow-xl overflow-hidden min-w-[170px] z-[60]"
              >
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code as Lang); setLangOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted transition-colors text-foreground ${lang === l.code ? "bg-primary/10 font-semibold text-primary" : ""}`}
                  >
                    <span className="font-bold text-xs w-6">{l.code}</span>
                    <span>{l.nativeName}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Nav */}
      <div className="px-4 md:px-8 py-4 flex justify-between items-center">
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        <Link href="/" className="flex-shrink-0">
          <img
            src={isTransparent ? "/images/logo-white.png" : "/images/logo-esg-valley.png"}
            alt="ESG Valley"
            className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Regular links before Sản Phẩm */}
          {navLinks.slice(0, 2).map(link => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm uppercase tracking-wider font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                location === link.path ? "after:w-full" : ""
              } ${isTransparent ? "after:bg-white" : "after:bg-primary"}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Sản Phẩm mega-menu */}
          <div className="relative" ref={productRef}>
            <button
              onClick={() => setProductMenuOpen(v => !v)}
              onMouseEnter={() => setProductMenuOpen(true)}
              className={`text-sm uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-1 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:transition-all after:duration-300 ${
                location.startsWith("/san-pham") ? "after:w-full" : "after:w-0 hover:after:w-full"
              } ${isTransparent ? "after:bg-white" : "after:bg-primary"}`}
            >
              Sản Phẩm
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productMenuOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {productMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  onMouseLeave={() => setProductMenuOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-background border border-border rounded-xl shadow-2xl z-[60] overflow-hidden"
                  style={{ minWidth: "720px" }}
                >
                  <div className="grid grid-cols-4 gap-0">
                    {productMenu.map((col, ci) => (
                      <div key={ci} className={`p-5 ${ci < productMenu.length - 1 ? "border-r border-border" : ""}`}>
                        <Link
                          href={`/san-pham?category=${encodeURIComponent(col.heading)}`}
                          onClick={() => setProductMenuOpen(false)}
                          className="block text-primary text-[10px] font-bold uppercase tracking-widest mb-3 hover:underline"
                        >{col.heading}</Link>
                        <ul className="space-y-1">
                          {col.items.map(item => (
                            <li key={item.label}>
                              <Link
                                href={`/san-pham?category=${encodeURIComponent(item.cat)}`}
                                onClick={() => setProductMenuOpen(false)}
                                className="block text-sm text-foreground hover:text-primary hover:bg-primary/5 px-2 py-1.5 rounded-lg transition-colors"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {ci === 0 && (
                          <Link
                            href="/san-pham"
                            onClick={() => setProductMenuOpen(false)}
                            className="mt-3 inline-flex items-center text-xs text-primary font-semibold hover:underline"
                          >
                            Xem tất cả →
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Remaining nav links */}
          {navLinks.slice(2).map(link => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm uppercase tracking-wider font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                location === link.path ? "after:w-full" : ""
              } ${isTransparent ? "after:bg-white" : "after:bg-primary"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <form
            onSubmit={(e) => { e.preventDefault(); }}
            className={`hidden md:flex items-center rounded-full border px-3 py-1.5 transition-all duration-300 ${
              isTransparent
                ? "border-white/40 bg-white/10 text-white focus-within:bg-white/20"
                : "border-border bg-muted/50 focus-within:bg-background focus-within:border-primary/50"
            }`}
          >
            <Search className="w-4 h-4 flex-shrink-0 opacity-70" />
            <input
              type="search"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm..."
              className="bg-transparent outline-none border-none ml-2 text-sm w-36 lg:w-44"
            />
          </form>

          <div className="relative hidden md:block" ref={userRef}>
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => setUserMenuOpen(v => !v)}
                  className="flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${isTransparent ? "bg-white text-primary" : "bg-primary text-primary-foreground"}`}>
                    {user!.name.charAt(0).toUpperCase()}
                  </div>
                  <ChevronDown className={`w-3 h-3 transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                      className="absolute right-0 top-full mt-2 bg-background border border-border rounded-sm shadow-xl min-w-[180px] z-[60] overflow-hidden"
                    >
                      <div className="px-4 py-3 border-b border-border">
                        <p className="font-semibold text-sm text-foreground">{user!.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user!.identifier}</p>
                      </div>
                      <button
                        onClick={() => { logout(); setUserMenuOpen(false); }}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted transition-colors text-foreground"
                      >
                        <LogOut className="w-4 h-4" /> Đăng xuất
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <button onClick={openAuthModal} className="flex items-center gap-1.5 hover:text-accent transition-colors hover:scale-110 transform duration-200">
                <User className="w-5 h-5" />
                <span className="text-xs font-medium hidden lg:block">Đăng nhập</span>
              </button>
            )}
          </div>

          <button
            onClick={handleCartClick}
            className="relative hover:text-accent transition-colors hover:scale-110 transform duration-200"
            title={isLoggedIn ? "Giỏ hàng" : "Đăng nhập để thêm vào giỏ hàng"}
          >
            <ShoppingBag className="w-5 h-5" />
            {isLoggedIn && (
              <span className={`absolute -top-2 -right-2 w-4 h-4 text-[10px] flex items-center justify-center rounded-full ${isTransparent ? "bg-white text-primary" : "bg-primary text-white"}`}>
                0
              </span>
            )}
          </button>

          <button className="md:hidden hover:text-accent transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[300px] bg-background text-foreground z-50 shadow-2xl flex flex-col"
            >
              <div className="p-4 flex justify-between items-center border-b">
                <img src="/images/logo-esg-valley.png" alt="ESG Valley" className="h-12 w-auto object-contain" />
                <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={e => e.preventDefault()} className="flex items-center mx-4 mt-4 rounded-full border border-border bg-muted/50 px-3 py-2">
                <Search className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                <input
                  type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="bg-transparent outline-none border-none ml-2 text-sm flex-1"
                />
              </form>

              <nav className="flex flex-col p-4 space-y-1 flex-grow overflow-y-auto mt-2">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-3 px-2 border-b border-border/50 uppercase tracking-wider transition-colors hover:text-primary ${location === "/" ? "text-primary font-semibold" : ""}`}>
                  Trang Chủ
                </Link>
                <Link href="/ve-esg-valley" onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-3 px-2 border-b border-border/50 uppercase tracking-wider transition-colors hover:text-primary ${location === "/ve-esg-valley" ? "text-primary font-semibold" : ""}`}>
                  Câu chuyện ESGValley
                </Link>

                {/* Mobile Sản Phẩm accordion */}
                <div className="border-b border-border/50">
                  <button
                    onClick={() => setMobileProductOpen(v => !v)}
                    className="w-full flex items-center justify-between text-base font-medium py-3 px-2 uppercase tracking-wider hover:text-primary transition-colors"
                  >
                    Sản Phẩm
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileProductOpen && (
                    <div className="pb-2 pl-3">
                      {productMenu.map((col) => (
                        <div key={col.heading} className="mb-3">
                          <Link
                            href={`/san-pham?category=${encodeURIComponent(col.heading)}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-primary text-[10px] font-bold uppercase tracking-widest px-2 mb-1 hover:underline"
                          >{col.heading}</Link>
                          {col.items.map(item => (
                            <Link
                              key={item.label}
                              href={`/san-pham?category=${encodeURIComponent(item.cat)}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-sm text-foreground hover:text-primary px-2 py-1.5 transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/tin-tuc" onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-3 px-2 border-b border-border/50 uppercase tracking-wider transition-colors hover:text-primary ${location === "/tin-tuc" ? "text-primary font-semibold" : ""}`}>
                  Tin Tức
                </Link>
                <Link href="/lien-he" onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-3 px-2 border-b border-border/50 uppercase tracking-wider transition-colors hover:text-primary ${location === "/lien-he" ? "text-primary font-semibold" : ""}`}>
                  Liên Hệ và tra cứu
                </Link>
              </nav>

              <div className="px-4 py-3 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Ngôn ngữ</p>
                <div className="grid grid-cols-2 gap-2">
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code as Lang)}
                      className={`py-1.5 px-2 rounded text-xs font-medium border transition-colors ${lang === l.code ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"}`}
                    >
                      {l.nativeName}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-muted border-t border-border space-y-3">
                {isLoggedIn ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {user!.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{user!.name}</p>
                        <p className="text-xs text-muted-foreground">{user!.identifier}</p>
                      </div>
                    </div>
                    <button onClick={logout} className="text-xs text-muted-foreground flex items-center gap-1 hover:text-foreground">
                      <LogOut className="w-3.5 h-3.5" /> Thoát
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => { setMobileMenuOpen(false); openAuthModal(); }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground rounded-sm text-sm font-semibold"
                  >
                    <User className="w-4 h-4" /> Đăng nhập / Đăng ký
                  </button>
                )}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" /> <span>0969 510 955</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
