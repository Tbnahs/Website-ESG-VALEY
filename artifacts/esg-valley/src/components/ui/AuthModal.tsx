import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff, User, Phone, Mail, Lock } from "lucide-react";
import { useAuth } from "@/lib/auth";

export function AuthModal() {
  const { showAuthModal, closeAuthModal, login } = useAuth();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [idType, setIdType] = useState<"email" | "phone">("email");
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ name: "", identifier: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.identifier.trim()) { setError("Vui lòng nhập email hoặc số điện thoại."); return; }
    if (!form.password) { setError("Vui lòng nhập mật khẩu."); return; }
    if (tab === "register") {
      if (!form.name.trim()) { setError("Vui lòng nhập họ tên."); return; }
      if (form.password !== form.confirm) { setError("Mật khẩu xác nhận không khớp."); return; }
      if (form.password.length < 6) { setError("Mật khẩu phải có ít nhất 6 ký tự."); return; }
    }
    login({ name: form.name || form.identifier.split("@")[0], identifier: form.identifier, type: idType });
    setForm({ name: "", identifier: "", password: "", confirm: "" });
  };

  return (
    <AnimatePresence>
      {showAuthModal && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && closeAuthModal()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-background rounded-sm shadow-2xl w-full max-w-md overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="relative bg-primary px-8 pt-8 pb-6 text-primary-foreground">
              <button onClick={closeAuthModal} className="absolute top-4 right-4 p-1.5 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
              <img src="/images/logo-esg-valley.png" alt="ESG Valley" className="h-12 w-auto object-contain mb-4 brightness-0 invert" />
              <h2 className="font-display text-2xl font-bold">
                {tab === "login" ? "Đăng Nhập" : "Tạo Tài Khoản"}
              </h2>
              <p className="text-primary-foreground/70 text-sm mt-1">
                {tab === "login" ? "Chào mừng trở lại với ESG Valley" : "Trở thành thành viên của ESG Valley"}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border">
              {(["login", "register"] as const).map(t => (
                <button
                  key={t}
                  onClick={() => { setTab(t); setError(""); }}
                  className={`flex-1 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${tab === t ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {t === "login" ? "Đăng Nhập" : "Đăng Ký"}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              {/* ID type toggle */}
              <div className="flex rounded-sm overflow-hidden border border-border text-sm">
                <button type="button" onClick={() => setIdType("email")}
                  className={`flex-1 py-2 flex items-center justify-center gap-1.5 transition-colors ${idType === "email" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
                  <Mail className="w-3.5 h-3.5" /> Email
                </button>
                <button type="button" onClick={() => setIdType("phone")}
                  className={`flex-1 py-2 flex items-center justify-center gap-1.5 transition-colors ${idType === "phone" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
                  <Phone className="w-3.5 h-3.5" /> Số điện thoại
                </button>
              </div>

              {/* Name (register only) */}
              {tab === "register" && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text" placeholder="Họ và tên" value={form.name} onChange={set("name")}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              )}

              {/* Email or Phone */}
              <div className="relative">
                {idType === "email"
                  ? <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  : <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                }
                <input
                  type={idType === "email" ? "email" : "tel"}
                  placeholder={idType === "email" ? "Địa chỉ email" : "Số điện thoại (VD: 0969510955)"}
                  value={form.identifier} onChange={set("identifier")}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPw ? "text" : "password"} placeholder="Mật khẩu"
                  value={form.password} onChange={set("password")}
                  className="w-full pl-10 pr-10 py-3 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button type="button" onClick={() => setShowPw(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Confirm password (register only) */}
              {tab === "register" && (
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="password" placeholder="Xác nhận mật khẩu"
                    value={form.confirm} onChange={set("confirm")}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              )}

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors mt-2">
                {tab === "login" ? "Đăng Nhập" : "Tạo Tài Khoản"}
              </button>

              <p className="text-center text-sm text-muted-foreground">
                {tab === "login" ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
                <button type="button" onClick={() => { setTab(tab === "login" ? "register" : "login"); setError(""); }}
                  className="text-primary font-semibold hover:underline">
                  {tab === "login" ? "Đăng ký ngay" : "Đăng nhập"}
                </button>
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
