import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff, User, Phone, Mail, Lock, ArrowLeft, CheckCircle, RefreshCw, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/auth";

type Step = "login" | "register" | "forgot" | "otp" | "newpw" | "done";

function maskIdentifier(val: string): string {
  if (val.includes("@")) {
    const [name, domain] = val.split("@");
    return name.slice(0, 2) + "***@" + domain;
  }
  return val.slice(0, 3) + "****" + val.slice(-3);
}

export function AuthModal() {
  const { showAuthModal, closeAuthModal, login, validateLogin, registerAccount, changePassword } = useAuth();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [step, setStep] = useState<Step>("login");
  const [idType, setIdType] = useState<"email" | "phone">("email");
  const [showPw, setShowPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [form, setForm] = useState({ name: "", identifier: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const [forgotId, setForgotId] = useState("");
  const [forgotIdType, setForgotIdType] = useState<"email" | "phone">("phone");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpTimer, setOtpTimer] = useState(120);
  const [newPw, setNewPw] = useState("");
  const [newPwConfirm, setNewPwConfirm] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!showAuthModal) {
      setStep("login");
      setTab("login");
      setError("");
      setForgotId("");
      setOtp(["", "", "", "", "", ""]);
      setNewPw("");
      setNewPwConfirm("");
      setIsSending(false);
      setIsVerifying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [showAuthModal]);

  const startOtpTimer = () => {
    setOtpTimer(120);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setOtpTimer(t => {
        if (t <= 1) { clearInterval(timerRef.current!); return 0; }
        return t - 1;
      });
    }, 1000);
  };

  const sendOtp = async () => {
    if (isSending) return;
    setIsSending(true);
    setError("");
    setOtp(["", "", "", "", "", ""]);
    try {
      const res = await fetch("/api/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: forgotId.trim(), type: forgotIdType }),
      });
      const data = await res.json() as { success: boolean; message?: string };
      if (!res.ok || !data.success) {
        setError(data.message ?? "Không thể gửi OTP. Vui lòng thử lại.");
      } else {
        startOtpTimer();
      }
    } catch {
      setError("Lỗi kết nối. Vui lòng thử lại.");
    } finally {
      setIsSending(false);
    }
  };

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleLoginRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.identifier.trim()) { setError("Vui lòng nhập email hoặc số điện thoại."); return; }
    if (!form.password) { setError("Vui lòng nhập mật khẩu."); return; }
    if (tab === "register") {
      if (!form.name.trim()) { setError("Vui lòng nhập họ tên."); return; }
      if (form.password !== form.confirm) { setError("Mật khẩu xác nhận không khớp."); return; }
      if (form.password.length < 6) { setError("Mật khẩu phải có ít nhất 6 ký tự."); return; }
      registerAccount(form.name, form.identifier, form.password, idType);
    } else {
      if (!validateLogin(form.identifier, form.password)) {
        setError("Mật khẩu không đúng. Vui lòng thử lại.");
        return;
      }
      login({ name: form.identifier.split("@")[0], identifier: form.identifier, type: idType });
    }
    setForm({ name: "", identifier: "", password: "", confirm: "" });
  };

  const handleForgotSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!forgotId.trim()) {
      setError(`Vui lòng nhập ${forgotIdType === "email" ? "địa chỉ email" : "số điện thoại"}.`);
      return;
    }
    setIsSending(true);
    setError("");
    try {
      const res = await fetch("/api/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: forgotId.trim(), type: forgotIdType }),
      });
      const data = await res.json() as { success: boolean; message?: string };
      if (!res.ok || !data.success) {
        setError(data.message ?? "Không thể gửi OTP. Vui lòng thử lại.");
      } else {
        startOtpTimer();
        setOtp(["", "", "", "", "", ""]);
        setStep("otp");
      }
    } catch {
      setError("Lỗi kết nối. Vui lòng thử lại.");
    } finally {
      setIsSending(false);
    }
  };

  const handleOtpChange = (idx: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const next = [...otp];
    next[idx] = val.slice(-1);
    setOtp(next);
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
  };

  const handleOtpKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      otpRefs.current[idx - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length === 6) {
      setOtp(pasted.split(""));
      otpRefs.current[5]?.focus();
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const entered = otp.join("");
    if (entered.length < 6) { setError("Vui lòng nhập đủ 6 chữ số OTP."); return; }
    if (otpTimer === 0) { setError("Mã OTP đã hết hạn. Vui lòng gửi lại."); return; }
    setIsVerifying(true);
    try {
      const res = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: forgotId.trim(), code: entered }),
      });
      const data = await res.json() as { valid: boolean; message?: string };
      if (!res.ok || !data.valid) {
        setError(data.message ?? "Mã OTP không đúng. Vui lòng kiểm tra lại.");
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        setStep("newpw");
      }
    } catch {
      setError("Lỗi kết nối. Vui lòng thử lại.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!newPw) { setError("Vui lòng nhập mật khẩu mới."); return; }
    if (newPw.length < 6) { setError("Mật khẩu phải có ít nhất 6 ký tự."); return; }
    if (newPw !== newPwConfirm) { setError("Mật khẩu xác nhận không khớp."); return; }
    changePassword(forgotId, newPw);
    if (timerRef.current) clearInterval(timerRef.current);
    setStep("done");
  };

  const goBack = () => {
    setError("");
    if (step === "forgot") setStep("login");
    else if (step === "otp") setStep("forgot");
    else if (step === "newpw") setStep("otp");
  };

  const headerTitle = () => {
    if (step === "forgot") return "Quên Mật Khẩu";
    if (step === "otp") return "Xác Nhận OTP";
    if (step === "newpw") return "Đặt Mật Khẩu Mới";
    if (step === "done") return "Thành Công";
    return tab === "login" ? "Đăng Nhập" : "Tạo Tài Khoản";
  };

  const headerSub = () => {
    if (step === "forgot") return "Nhập tài khoản để nhận mã xác nhận";
    if (step === "otp") return `Nhập mã OTP đã gửi đến ${maskIdentifier(forgotId)}`;
    if (step === "newpw") return "Tạo mật khẩu mới cho tài khoản";
    if (step === "done") return "Mật khẩu đã được cập nhật";
    return tab === "login" ? "Chào mừng trở lại với ESG Valley" : "Trở thành thành viên của ESG Valley";
  };

  const inputCls = "w-full pl-10 pr-4 py-3 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary transition-colors";

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
              {step !== "login" && step !== "register" && step !== "done" && (
                <button
                  onClick={goBack}
                  className="absolute top-4 left-4 p-1.5 hover:bg-white/10 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={closeAuthModal}
                className="absolute top-4 right-4 p-1.5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img src="/images/logo-esg-valley.png" alt="ESG Valley" className="h-12 w-auto object-contain mb-4 brightness-0 invert" />
              <h2 className="font-display text-2xl font-bold">{headerTitle()}</h2>
              <p className="text-primary-foreground/70 text-sm mt-1">{headerSub()}</p>
            </div>

            {/* Login / Register tabs */}
            {(step === "login" || step === "register") && (
              <div className="flex border-b border-border">
                {(["login", "register"] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => { setTab(t); setStep(t); setError(""); }}
                    className={`flex-1 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${tab === t ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {t === "login" ? "Đăng Nhập" : "Đăng Ký"}
                  </button>
                ))}
              </div>
            )}

            {/* ── STEP: LOGIN / REGISTER ── */}
            {(step === "login" || step === "register") && (
              <form onSubmit={handleLoginRegister} className="p-8 space-y-4">
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

                {tab === "register" && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input type="text" placeholder="Họ và tên" value={form.name} onChange={set("name")} className={inputCls} />
                  </div>
                )}

                <div className="relative">
                  {idType === "email"
                    ? <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    : <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  }
                  <input
                    type={idType === "email" ? "email" : "tel"}
                    placeholder={idType === "email" ? "Địa chỉ email" : "Số điện thoại (VD: 0969510955)"}
                    value={form.identifier} onChange={set("identifier")} className={inputCls}
                  />
                </div>

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

                {tab === "register" && (
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input type="password" placeholder="Xác nhận mật khẩu" value={form.confirm} onChange={set("confirm")} className={inputCls} />
                  </div>
                )}

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors mt-2">
                  {tab === "login" ? "Đăng Nhập" : "Tạo Tài Khoản"}
                </button>

                {tab === "login" && (
                  <p className="text-center">
                    <button
                      type="button"
                      onClick={() => { setStep("forgot"); setForgotId(form.identifier); setError(""); }}
                      className="text-sm text-primary font-semibold hover:underline"
                    >
                      Quên mật khẩu?
                    </button>
                  </p>
                )}

                <p className="text-center text-sm text-muted-foreground">
                  {tab === "login" ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
                  <button type="button" onClick={() => { setTab(tab === "login" ? "register" : "login"); setStep(tab === "login" ? "register" : "login"); setError(""); }}
                    className="text-primary font-semibold hover:underline">
                    {tab === "login" ? "Đăng ký ngay" : "Đăng nhập"}
                  </button>
                </p>
              </form>
            )}

            {/* ── STEP: FORGOT ── */}
            {step === "forgot" && (
              <form onSubmit={handleForgotSend} className="p-8 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nhập email hoặc số điện thoại đã đăng ký. Chúng tôi sẽ gửi mã OTP để xác nhận danh tính.
                </p>

                <div className="flex rounded-sm overflow-hidden border border-border text-sm">
                  <button type="button" onClick={() => setForgotIdType("phone")}
                    className={`flex-1 py-2 flex items-center justify-center gap-1.5 transition-colors ${forgotIdType === "phone" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
                    <Phone className="w-3.5 h-3.5" /> Số điện thoại
                  </button>
                  <button type="button" onClick={() => setForgotIdType("email")}
                    className={`flex-1 py-2 flex items-center justify-center gap-1.5 transition-colors ${forgotIdType === "email" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
                    <Mail className="w-3.5 h-3.5" /> Email
                  </button>
                </div>

                <div className="relative">
                  {forgotIdType === "phone"
                    ? <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    : <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  }
                  <input
                    type={forgotIdType === "email" ? "email" : "tel"}
                    placeholder={forgotIdType === "email" ? "Địa chỉ email" : "Số điện thoại (VD: 0969510955)"}
                    value={forgotId}
                    onChange={e => setForgotId(e.target.value)}
                    className={inputCls}
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSending ? <><Loader2 className="w-4 h-4 animate-spin" /> Đang gửi...</> : "Gửi Mã OTP"}
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  Nhớ ra rồi?{" "}
                  <button type="button" onClick={() => { setStep("login"); setError(""); }} className="text-primary font-semibold hover:underline">
                    Đăng nhập
                  </button>
                </p>
              </form>
            )}

            {/* ── STEP: OTP ── */}
            {step === "otp" && (
              <form onSubmit={handleVerifyOtp} className="p-8 space-y-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mã OTP đã được gửi đến <span className="font-semibold text-foreground">{maskIdentifier(forgotId)}</span>.
                  Vui lòng nhập mã gồm 6 chữ số.
                </p>

                {/* 6-box OTP input */}
                <div className="flex justify-center gap-2.5" onPaste={handleOtpPaste}>
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={el => { otpRefs.current[idx] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={e => handleOtpChange(idx, e.target.value)}
                      onKeyDown={e => handleOtpKeyDown(idx, e)}
                      className="w-11 h-12 text-center text-xl font-bold border-2 rounded-lg focus:outline-none transition-colors"
                      style={{
                        borderColor: digit ? "var(--primary)" : "var(--border)",
                        background: digit ? "var(--primary)" : "var(--background)",
                        color: digit ? "var(--primary-foreground)" : "var(--foreground)",
                      }}
                    />
                  ))}
                </div>

                {/* Timer + Resend */}
                <div className="flex items-center justify-between text-sm">
                  <span className={`font-medium ${otpTimer > 0 ? "text-muted-foreground" : "text-red-500"}`}>
                    {otpTimer > 0
                      ? `Mã hết hạn sau ${Math.floor(otpTimer / 60)}:${String(otpTimer % 60).padStart(2, "0")}`
                      : "Mã OTP đã hết hạn"
                    }
                  </span>
                  <button
                    type="button"
                    disabled={otpTimer > 90 || isSending}
                    onClick={sendOtp}
                    className={`flex items-center gap-1 font-semibold transition-colors ${otpTimer > 90 || isSending ? "text-muted-foreground cursor-not-allowed" : "text-primary hover:underline"}`}
                  >
                    {isSending
                      ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      : <RefreshCw className="w-3.5 h-3.5" />
                    }
                    {isSending ? "Đang gửi..." : "Gửi lại"}
                  </button>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isVerifying ? <><Loader2 className="w-4 h-4 animate-spin" /> Đang xác nhận...</> : "Xác Nhận"}
                </button>
              </form>
            )}

            {/* ── STEP: NEW PASSWORD ── */}
            {step === "newpw" && (
              <form onSubmit={handleResetPassword} className="p-8 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tạo mật khẩu mới cho tài khoản <span className="font-semibold text-foreground">{maskIdentifier(forgotId)}</span>.
                </p>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type={showNewPw ? "text" : "password"}
                    placeholder="Mật khẩu mới (ít nhất 6 ký tự)"
                    value={newPw}
                    onChange={e => setNewPw(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                  <button type="button" onClick={() => setShowNewPw(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showNewPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="password"
                    placeholder="Xác nhận mật khẩu mới"
                    value={newPwConfirm}
                    onChange={e => setNewPwConfirm(e.target.value)}
                    className={inputCls}
                  />
                </div>

                {/* Password strength hint */}
                {newPw.length > 0 && (
                  <div className="space-y-1">
                    {[
                      { label: "Ít nhất 6 ký tự", ok: newPw.length >= 6 },
                      { label: "Có chữ hoa & chữ thường", ok: /[A-Z]/.test(newPw) && /[a-z]/.test(newPw) },
                      { label: "Có chữ số", ok: /\d/.test(newPw) },
                    ].map(({ label, ok }) => (
                      <div key={label} className="flex items-center gap-1.5 text-xs">
                        <span className={ok ? "text-green-500" : "text-muted-foreground"}>
                          {ok ? "✓" : "○"}
                        </span>
                        <span className={ok ? "text-green-600" : "text-muted-foreground"}>{label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors">
                  Cập Nhật Mật Khẩu
                </button>
              </form>
            )}

            {/* ── STEP: DONE ── */}
            {step === "done" && (
              <div className="p-8 flex flex-col items-center text-center gap-5">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-1">Đổi mật khẩu thành công!</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mật khẩu của bạn đã được cập nhật. Vui lòng đăng nhập lại bằng mật khẩu mới.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => { setStep("login"); setTab("login"); setError(""); }}
                  className="w-full py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
                >
                  Đăng Nhập Ngay
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
