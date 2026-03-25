import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Minus, Plus, ShoppingBag, CheckCircle, Copy, Package, Search, ClipboardList, LogIn, ChevronDown, ChevronUp } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useOrders, BuyerInfo, Order } from "@/lib/orders";
import { useAuth } from "@/lib/auth";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

const STATUS_COLOR: Record<string, string> = {
  "Đã đặt hàng":    "bg-blue-100 text-blue-700",
  "Đang xử lý":     "bg-yellow-100 text-yellow-700",
  "Đang vận chuyển":"bg-orange-100 text-orange-700",
  "Hoàn tất":       "bg-green-100 text-green-700",
  "Đã huỷ":         "bg-red-100 text-red-700",
};

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart } = useCart();
  const { createOrder, lookupOrder, orders } = useOrders();
  const { isLoggedIn, openAuthModal } = useAuth();
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState<"cart" | "lookup">("cart");
  const [step, setStep] = useState<"cart" | "form" | "success">("cart");
  const [order, setOrder] = useState<{ code: string; createdAt: string; paymentMethod: string } | null>(null);
  const [buyer, setBuyer] = useState<BuyerInfo>({ name: "", phone: "", address: "", note: "", paymentMethod: "cod" });

  const [searchCode, setSearchCode] = useState("");
  const [searchResult, setSearchResult] = useState<Order | null | "not_found">(null);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const PAYMENT_METHODS = [
    { id: "cod",      label: "COD",             sub: "Thanh toán khi nhận hàng" },
    { id: "bank",     label: "Chuyển khoản",    sub: "Ngân hàng / Internet Banking" },
    { id: "vietqr",  label: "VietQR",           sub: "Quét mã QR nhanh" },
    { id: "zalopay", label: "Zalo Pay",         sub: "Ví điện tử Zalo" },
    { id: "visa",    label: "Visa / Mastercard",sub: "Thẻ tín dụng / ghi nợ" },
    { id: "atm",     label: "ATM nội địa",      sub: "Thẻ ATM / Internet Banking" },
    { id: "paypal",  label: "PayPal",           sub: "Thanh toán quốc tế" },
    { id: "momo",    label: "MoMo",             sub: "Ví điện tử MoMo" },
  ];

  const handleClose = () => {
    closeCart();
    if (step === "success") setTimeout(() => setStep("cart"), 300);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder = createOrder(items, buyer);
    clearCart();
    setOrder({ code: newOrder.code, createdAt: newOrder.createdAt, paymentMethod: buyer.paymentMethod });
    setStep("success");
  };

  const copyCode = () => {
    if (order) {
      navigator.clipboard.writeText(order.code);
      toast({ title: "Đã sao chép mã đơn hàng", description: order.code });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchCode.trim()) return;
    const found = lookupOrder(searchCode.trim());
    setSearchResult(found ?? "not_found");
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString("vi-VN", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

  const formatPrice = (n: number) => n.toLocaleString("vi-VN") + "₫";
  const total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

  const tabTitle = activeTab === "lookup"
    ? "Tra Cứu Đơn Hàng"
    : step === "cart" ? "Giỏ Hàng"
    : step === "form" ? "Thông Tin Đặt Hàng"
    : "Đặt Hàng Thành Công";

  const OrderCard = ({ o }: { o: Order }) => {
    const isExpanded = expandedOrder === o.code;
    const orderTotal = o.items.reduce((s, { product, quantity }) => s + product.price * quantity, 0);
    return (
      <div className="border border-border rounded-lg overflow-hidden">
        <button
          className="w-full text-left px-4 py-3 flex items-start justify-between gap-2 hover:bg-muted/40 transition-colors"
          onClick={() => setExpandedOrder(isExpanded ? null : o.code)}
        >
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-mono text-sm font-bold text-primary">{o.code}</span>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${STATUS_COLOR[o.status] ?? "bg-muted text-muted-foreground"}`}>
                {o.status}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{formatDate(o.createdAt)} · {formatPrice(orderTotal)}</p>
          </div>
          {isExpanded ? <ChevronUp className="w-4 h-4 flex-shrink-0 mt-1 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 flex-shrink-0 mt-1 text-muted-foreground" />}
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-border"
            >
              <div className="px-4 py-3 space-y-2 bg-muted/20">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Sản phẩm</p>
                {o.items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center gap-3">
                    <img src={product.image} alt={product.name} className="w-10 h-10 object-contain rounded bg-background border border-border flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-foreground truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground">x{quantity} · {formatPrice(product.price * quantity)}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-2 border-t border-border flex justify-between text-xs font-bold">
                  <span className="text-muted-foreground">Tổng tiền</span>
                  <span className="text-primary">{formatPrice(orderTotal)}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Thanh toán: <span className="font-medium text-foreground">{PAYMENT_METHODS.find(m => m.id === o.buyer.paymentMethod)?.label ?? o.buyer.paymentMethod}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Địa chỉ: <span className="font-medium text-foreground">{o.buyer.address}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-[80]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[460px] bg-background text-foreground z-[90] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                {activeTab === "cart"
                  ? <ShoppingBag className="w-5 h-5 text-primary" />
                  : <ClipboardList className="w-5 h-5 text-primary" />
                }
                <h2 className="font-display text-xl font-bold">{tabTitle}</h2>
              </div>
              <button onClick={handleClose} className="p-1.5 hover:bg-muted rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab switcher — only show on main cart step */}
            {step === "cart" && (
              <div className="flex border-b border-border">
                <button
                  onClick={() => setActiveTab("cart")}
                  className={`flex-1 py-2.5 text-sm font-semibold transition-colors relative ${
                    activeTab === "cart" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Giỏ Hàng
                  {activeTab === "cart" && (
                    <motion.div layoutId="cart-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("lookup")}
                  className={`flex-1 py-2.5 text-sm font-semibold transition-colors relative ${
                    activeTab === "lookup" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Tra Cứu Đơn Hàng
                  {activeTab === "lookup" && (
                    <motion.div layoutId="cart-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              </div>
            )}

            {/* ── TAB: LOOKUP ── */}
            {activeTab === "lookup" && step === "cart" && (
              <div className="flex-1 overflow-y-auto px-5 py-5">
                {isLoggedIn ? (
                  <div className="space-y-5">
                    {/* Search by code */}
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Tra cứu theo mã đơn hàng</p>
                      <form onSubmit={handleSearch} className="flex gap-2">
                        <input
                          type="text"
                          value={searchCode}
                          onChange={e => { setSearchCode(e.target.value); setSearchResult(null); }}
                          placeholder="VD: ESG2025123456"
                          className="flex-1 px-3 py-2.5 bg-card border border-border rounded-sm text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2.5 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
                        >
                          <Search className="w-4 h-4" />
                        </button>
                      </form>

                      {searchResult === "not_found" && (
                        <p className="text-xs text-red-500 mt-2">Không tìm thấy đơn hàng với mã này.</p>
                      )}
                      {searchResult && searchResult !== "not_found" && (
                        <div className="mt-3">
                          <OrderCard o={searchResult} />
                        </div>
                      )}
                    </div>

                    {/* All orders */}
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3">
                        Đơn hàng của bạn
                        {orders.length > 0 && (
                          <span className="ml-2 text-xs font-normal text-muted-foreground">({orders.length} đơn)</span>
                        )}
                      </p>
                      {orders.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                          <Package className="w-12 h-12 text-muted-foreground/30 mb-3" />
                          <p className="text-sm text-muted-foreground">Bạn chưa có đơn hàng nào</p>
                          <button
                            onClick={() => setActiveTab("cart")}
                            className="mt-3 text-sm text-primary font-semibold hover:underline"
                          >
                            Mua sắm ngay →
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {orders.map(o => <OrderCard key={o.code} o={o} />)}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Not logged in */
                  <div className="flex flex-col items-center justify-center h-full text-center py-12 px-4 space-y-5">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <LogIn className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold mb-1">Đăng nhập để tra cứu</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Đăng nhập để xem toàn bộ lịch sử đơn hàng của bạn tại đây.
                      </p>
                    </div>
                    <button
                      onClick={() => { handleClose(); openAuthModal(); }}
                      className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all text-sm"
                    >
                      Đăng nhập ngay
                    </button>
                    <div className="w-full border-t border-border pt-4">
                      <p className="text-xs text-muted-foreground mb-3">Chưa có tài khoản? Bạn vẫn có thể tra cứu đơn hàng bằng mã đơn tại trang Hỗ Trợ.</p>
                      <Link
                        href="/ho-tro"
                        onClick={handleClose}
                        className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline"
                      >
                        <ClipboardList className="w-4 h-4" />
                        Tra cứu tại Hỗ Trợ Khách Hàng
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── TAB: CART — STEP: CART ── */}
            {activeTab === "cart" && step === "cart" && (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center py-16">
                      <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                      <p className="text-muted-foreground font-medium">Giỏ hàng đang trống</p>
                      <p className="text-sm text-muted-foreground/70 mt-1">Hãy thêm sản phẩm vào giỏ hàng</p>
                    </div>
                  ) : (
                    <ul className="space-y-4">
                      {items.map(({ product, quantity }) => (
                        <li key={product.id} className="flex gap-4 p-3 bg-card rounded-lg border border-border">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-contain rounded-md bg-muted flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-0.5">{product.category}</p>
                            <p className="font-semibold text-sm text-foreground truncate">{product.name}</p>
                            <p className="text-xs font-semibold text-primary mt-0.5">{formatPrice(product.price)}</p>
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center border border-border rounded-full overflow-hidden">
                                <button onClick={() => updateQuantity(product.id, quantity - 1)} className="px-2.5 py-1 hover:bg-muted transition-colors">
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="px-3 text-sm font-semibold min-w-[32px] text-center">{quantity}</span>
                                <button onClick={() => updateQuantity(product.id, quantity + 1)} className="px-2.5 py-1 hover:bg-muted transition-colors">
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <button onClick={() => removeItem(product.id)} className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {items.length > 0 && (
                  <div className="px-6 py-4 border-t border-border space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Số lượng</span>
                      <span className="font-semibold text-foreground">{items.reduce((s, i) => s + i.quantity, 0)} sản phẩm</span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-bold text-foreground">
                      <span>Tổng tiền</span>
                      <span className="text-primary text-base">{formatPrice(total)}</span>
                    </div>
                    <button
                      onClick={() => setStep("form")}
                      className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all uppercase tracking-wider text-sm"
                    >
                      Đặt Hàng Ngay
                    </button>
                  </div>
                )}
              </>
            )}

            {/* ── STEP: FORM ── */}
            {step === "form" && (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <div className="mb-5 p-4 bg-card border border-border rounded-lg">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Sản phẩm đặt hàng</p>
                    <ul className="space-y-1.5">
                      {items.map(({ product, quantity }) => (
                        <li key={product.id} className="flex justify-between text-sm">
                          <span className="text-foreground truncate pr-2">{product.name} <span className="text-muted-foreground">x{quantity}</span></span>
                          <span className="font-semibold text-primary shrink-0">{formatPrice(product.price * quantity)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 pt-2 border-t border-border flex justify-between text-sm font-bold">
                      <span>Tổng tiền</span>
                      <span className="text-primary">{formatPrice(total)}</span>
                    </div>
                  </div>

                  <form id="order-form" onSubmit={handleConfirm} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Họ và tên *</label>
                      <input type="text" required value={buyer.name} onChange={e => setBuyer(b => ({ ...b, name: e.target.value }))} placeholder="Nguyễn Văn A" className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Số điện thoại *</label>
                      <input type="tel" required value={buyer.phone} onChange={e => setBuyer(b => ({ ...b, phone: e.target.value }))} placeholder="0969 510 955" className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Địa chỉ giao hàng *</label>
                      <textarea required rows={2} value={buyer.address} onChange={e => setBuyer(b => ({ ...b, address: e.target.value }))} placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố" className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Ghi chú</label>
                      <textarea rows={2} value={buyer.note} onChange={e => setBuyer(b => ({ ...b, note: e.target.value }))} placeholder="Yêu cầu đặc biệt, thời gian giao hàng..." className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none" />
                    </div>
                  </form>

                  <div className="mt-5">
                    <p className="text-sm font-medium text-foreground mb-3">Phương thức thanh toán *</p>
                    <img src="/images/payment-methods.png" alt="Phương thức thanh toán được chấp nhận" className="w-full rounded-md mb-3 border border-border" />
                    <div className="grid grid-cols-2 gap-2">
                      {PAYMENT_METHODS.map(m => (
                        <button key={m.id} type="button" onClick={() => setBuyer(b => ({ ...b, paymentMethod: m.id }))} className={`text-left px-3 py-2.5 rounded-lg border-2 transition-all ${buyer.paymentMethod === m.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}>
                          <p className={`text-xs font-bold leading-tight ${buyer.paymentMethod === m.id ? "text-primary" : "text-foreground"}`}>{m.label}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{m.sub}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-border flex gap-3">
                  <button onClick={() => setStep("cart")} className="flex-1 py-3 border border-border rounded-sm font-semibold text-sm hover:bg-muted transition-colors">
                    ← Quay lại
                  </button>
                  <button type="submit" form="order-form" className="flex-1 py-3 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all text-sm uppercase tracking-wider">
                    Xác Nhận Đơn
                  </button>
                </div>
              </>
            )}

            {/* ── STEP: SUCCESS ── */}
            {step === "success" && order && (
              <div className="flex-1 flex flex-col items-center justify-center px-8 text-center py-12 space-y-6">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.5 }}>
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
                </motion.div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">Đặt hàng thành công!</h3>
                  <p className="text-muted-foreground text-sm">Chúng tôi sẽ liên hệ xác nhận và báo giá trong vòng 2 giờ làm việc.</p>
                </div>

                <div className="w-full bg-primary/5 border border-primary/20 rounded-lg p-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2 flex items-center justify-center gap-1.5">
                    <Package className="w-3.5 h-3.5" /> Mã đơn hàng của bạn
                  </p>
                  <div className="flex items-center gap-2 justify-center">
                    <span className="font-mono text-2xl font-bold text-primary tracking-wider">{order.code}</span>
                    <button onClick={copyCode} className="p-1.5 hover:bg-primary/10 rounded transition-colors" title="Sao chép mã">
                      <Copy className="w-4 h-4 text-primary" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Đặt lúc {formatDate(order.createdAt)}</p>
                </div>

                <div className="w-full text-sm text-center text-muted-foreground">
                  Thanh toán qua:{" "}
                  <span className="font-semibold text-foreground">
                    {PAYMENT_METHODS.find(m => m.id === order.paymentMethod)?.label ?? order.paymentMethod}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  Dùng mã này để tra cứu đơn hàng tại{" "}
                  <button
                    onClick={() => { setStep("cart"); setActiveTab("lookup"); }}
                    className="text-primary font-semibold hover:underline"
                  >
                    tab Tra Cứu Đơn Hàng
                  </button>
                  {" "}hoặc{" "}
                  <Link href="/ho-tro" onClick={handleClose} className="text-primary font-semibold hover:underline">
                    Hỗ Trợ Khách Hàng
                  </Link>
                </p>

                <button
                  onClick={() => { handleClose(); setStep("cart"); setBuyer({ name: "", phone: "", address: "", note: "", paymentMethod: "cod" }); }}
                  className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all text-sm"
                >
                  Đóng
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
