import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { MapPin, Phone, Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine header styling based on page and scroll
  const isTransparent = isHomePage && !isScrolled;
  
  const navLinks = [
    { path: "/", label: "Trang Chủ" },
    { path: "/ve-esg-valley", label: "Về ESG Valley" },
    { path: "/san-pham", label: "Sản Phẩm" },
    { path: "/he-sinh-thai", label: "Hệ Sinh Thái" },
    { path: "/tin-tuc", label: "Tin Tức" },
    { path: "/lien-he", label: "Liên Hệ" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent 
          ? "bg-transparent text-white border-b border-white/10 py-2" 
          : "glass-panel text-foreground py-1"
      }`}
    >
      {/* Top Bar */}
      <div className={`hidden md:flex justify-between items-center px-8 py-1.5 text-xs border-b ${isTransparent ? 'border-white/10' : 'border-border/50'} font-medium`}>
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
        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer hover:text-accent transition-colors group">
            VI <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
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
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-sm uppercase tracking-wider font-semibold transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300 ${
                location === link.path 
                  ? "after:w-full" 
                  : ""
              } ${isTransparent ? "after:bg-white" : "after:bg-primary"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="hover:text-accent transition-colors hover:scale-110 transform duration-200">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden md:block hover:text-accent transition-colors hover:scale-110 transform duration-200">
            <User className="w-5 h-5" />
          </button>
          <button className="relative hover:text-accent transition-colors hover:scale-110 transform duration-200">
            <ShoppingBag className="w-5 h-5" />
            <span className={`absolute -top-2 -right-2 w-4 h-4 text-[10px] flex items-center justify-center rounded-full ${isTransparent ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-background text-foreground z-50 shadow-2xl flex flex-col"
            >
              <div className="p-4 flex justify-between items-center border-b">
                <img src="/images/logo-esg-valley.png" alt="ESG Valley" className="h-12 w-auto object-contain" />
                <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col p-4 space-y-4 flex-grow overflow-y-auto">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium py-2 border-b border-border/50 uppercase font-display tracking-wider"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="p-6 bg-muted">
                <div className="flex items-center space-x-2 text-sm font-medium mb-4">
                  <User className="w-4 h-4" /> <span>Đăng nhập / Đăng ký</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium">
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
