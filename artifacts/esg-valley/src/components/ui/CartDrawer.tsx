import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Minus, Plus, ShoppingBag, CheckCircle, Copy, Package } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useOrders, BuyerInfo } from "@/lib/orders";
import { useToast } from "@/hooks/use-toast";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, clearCart } = useCart();
  const { createOrder } = useOrders();
  const { toast } = useToast();

  const [step, setStep] = useState<"cart" | "form" | "success">("cart");
  const [order, setOrder] = useState<{ code: string; createdAt: string } | null>(null);
  const [buyer, setBuyer] = useState<BuyerInfo>({ name: "", phone: "", address: "", note: "" });

  const handleClose = () => {
    closeCart();
    if (step === "success") {
      setTimeout(() => setStep("cart"), 300);
    }
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder = createOrder(items, buyer);
    clearCart();
    setOrder({ code: newOrder.code, createdAt: newOrder.createdAt });
    setStep("success");
  };

  const copyCode = () => {
    if (order) {
      navigator.clipboard.writeText(order.code);
      toast({ title: "Đã sao chép mã đơn hàng", description: order.code });
    }
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString("vi-VN", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });

  const formatPrice = (n: number) => n.toLocaleString("vi-VN") + "₫";
  const total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-[80]"
          />

          {/* Drawer */}
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
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="font-display text-xl font-bold">
                  {step === "cart" && "Giỏ Hàng"}
                  {step === "form" && "Thông Tin Đặt Hàng"}
                  {step === "success" && "Đặt Hàng Thành Công"}
                </h2>
              </div>
              <button onClick={handleClose} className="p-1.5 hover:bg-muted rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ── STEP: CART ── */}
            {step === "cart" && (
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
                                <button
                                  onClick={() => updateQuantity(product.id, quantity - 1)}
                                  className="px-2.5 py-1 hover:bg-muted transition-colors"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="px-3 text-sm font-semibold min-w-[32px] text-center">{quantity}</span>
                                <button
                                  onClick={() => updateQuantity(product.id, quantity + 1)}
                                  className="px-2.5 py-1 hover:bg-muted transition-colors"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                              <button
                                onClick={() => removeItem(product.id)}
                                className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors"
                              >
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
                  {/* Order summary */}
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
                      <input
                        type="text"
                        required
                        value={buyer.name}
                        onChange={e => setBuyer(b => ({ ...b, name: e.target.value }))}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Số điện thoại *</label>
                      <input
                        type="tel"
                        required
                        value={buyer.phone}
                        onChange={e => setBuyer(b => ({ ...b, phone: e.target.value }))}
                        placeholder="0969 510 955"
                        className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Địa chỉ giao hàng *</label>
                      <textarea
                        required
                        rows={2}
                        value={buyer.address}
                        onChange={e => setBuyer(b => ({ ...b, address: e.target.value }))}
                        placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
                        className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Ghi chú</label>
                      <textarea
                        rows={2}
                        value={buyer.note}
                        onChange={e => setBuyer(b => ({ ...b, note: e.target.value }))}
                        placeholder="Yêu cầu đặc biệt, thời gian giao hàng..."
                        className="w-full px-4 py-3 bg-card border border-border rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                      />
                    </div>
                  </form>
                </div>

                <div className="px-6 py-4 border-t border-border flex gap-3">
                  <button
                    onClick={() => setStep("cart")}
                    className="flex-1 py-3 border border-border rounded-sm font-semibold text-sm hover:bg-muted transition-colors"
                  >
                    ← Quay lại
                  </button>
                  <button
                    type="submit"
                    form="order-form"
                    className="flex-1 py-3 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all text-sm uppercase tracking-wider"
                  >
                    Xác Nhận Đơn
                  </button>
                </div>
              </>
            )}

            {/* ── STEP: SUCCESS ── */}
            {step === "success" && order && (
              <div className="flex-1 flex flex-col items-center justify-center px-8 text-center py-12 space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
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
                    <button
                      onClick={copyCode}
                      className="p-1.5 hover:bg-primary/10 rounded transition-colors"
                      title="Sao chép mã"
                    >
                      <Copy className="w-4 h-4 text-primary" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Đặt lúc {formatDate(order.createdAt)}</p>
                </div>

                <p className="text-sm text-muted-foreground">
                  Dùng mã này để tra cứu đơn hàng tại mục{" "}
                  <a href="/ho-tro#tra-cuu-don-hang" onClick={handleClose} className="text-primary font-semibold hover:underline">
                    Hỗ Trợ Khách Hàng
                  </a>
                </p>

                <button
                  onClick={() => { handleClose(); setStep("cart"); setBuyer({ name: "", phone: "", address: "", note: "" }); }}
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
