import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { MapPin, Phone, Search, ShoppingBag, User, Menu, X, ChevronDown, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/lib/auth";
import { useLang, LANGUAGES, type Lang } from "@/lib/lang";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const { user, isLoggedIn, logout, openAuthModal } = useAuth();
  const { lang, setLang } = useLang();

  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (userRef.current && !userRef.current.contains(e.target as Node)) setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isTransparent = isHomePage && !isScrolled;

  const navLinks = [
    { path: "/", label: "Trang Chủ" },
    { path: "/ve-esg-valley", label: "Về ESG Valley" },
    { path: "/san-pham", label: "Sản Phẩm" },
    { path: "/tin-tuc", label: "Tin Tức" },
    { path: "/lien-he", label: "Liên Hệ" },
  ];

  const currentLang = LANGUAGES.find(l => l.code === lang)!;

  const handleCartClick = () => {
    if (!isLoggedIn) {
      openAuthModal();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent text-white border-b border-white/10 py-2"
          : "glass-panel text-foreground py-1"
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

        {/* Language Switcher */}
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
        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/images/logo-esg-valley.png"
            alt="ESG Valley"
            className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
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
          {/* Search */}
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

          {/* User / Account */}
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

          {/* Cart */}
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

          {/* Mobile search */}
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

              {/* Mobile search */}
              <form onSubmit={e => e.preventDefault()} className="flex items-center mx-4 mt-4 rounded-full border border-border bg-muted/50 px-3 py-2">
                <Search className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                <input
                  type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="bg-transparent outline-none border-none ml-2 text-sm flex-1"
                />
              </form>

              <nav className="flex flex-col p-4 space-y-1 flex-grow overflow-y-auto mt-2">
                {navLinks.map(link => (
                  <Link
                    key={link.path} href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium py-3 px-2 border-b border-border/50 uppercase tracking-wider transition-colors hover:text-primary ${location === link.path ? "text-primary font-semibold" : ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Language Switcher */}
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
