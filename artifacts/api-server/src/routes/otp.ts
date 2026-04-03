import { Router } from "express";
import { Resend } from "resend";
import twilio from "twilio";

const router = Router();

interface OtpEntry {
  code: string;
  expiry: number;
  attempts: number;
}

const otpStore = new Map<string, OtpEntry>();

function generateCode(): string {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function cleanKey(identifier: string): string {
  return identifier.trim().toLowerCase();
}

function maskIdentifier(val: string): string {
  if (val.includes("@")) {
    const [name, domain] = val.split("@");
    return name.slice(0, 2) + "***@" + domain;
  }
  return val.slice(0, 3) + "****" + val.slice(-3);
}

async function sendEmail(to: string, code: string): Promise<void> {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) throw new Error("RESEND_API_KEY chưa được cấu hình.");
  const resend = new Resend(apiKey);
  const fromEmail = process.env["RESEND_FROM_EMAIL"] ?? "ESG Valley <otp@esgvalley.vn>";
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [to],
    subject: "Mã OTP xác nhận ESG Valley",
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; background: #f9f9f9; border-radius: 12px;">
        <img src="https://esgvalley.vn/images/logo-esg-valley.png" alt="ESG Valley" style="height:48px; margin-bottom:24px;" />
        <h2 style="color:#183806; font-size:22px; margin:0 0 8px;">Mã OTP xác nhận</h2>
        <p style="color:#525252; font-size:14px; margin:0 0 24px; line-height:1.6;">
          Bạn vừa yêu cầu đặt lại mật khẩu trên ESG Valley. Sử dụng mã bên dưới để xác nhận danh tính.
        </p>
        <div style="background:#183806; border-radius:12px; padding:20px 24px; text-align:center; margin-bottom:24px;">
          <span style="color:#C9A84C; font-size:36px; font-weight:700; letter-spacing:0.3em;">${code}</span>
        </div>
        <p style="color:#A2A2A2; font-size:12px; margin:0;">
          Mã có hiệu lực trong <strong>5 phút</strong>. Không chia sẻ mã này với bất kỳ ai.
        </p>
      </div>
    `,
  });
  if (error) throw new Error(error.message);
}

async function sendSms(to: string, code: string): Promise<void> {
  const sid = process.env["TWILIO_ACCOUNT_SID"];
  const token = process.env["TWILIO_AUTH_TOKEN"];
  const from = process.env["TWILIO_PHONE_FROM"];
  if (!sid || !token || !from) throw new Error("Twilio chưa được cấu hình.");
  const client = twilio(sid, token);
  await client.messages.create({
    body: `[ESG Valley] Mã OTP của bạn là: ${code}. Hiệu lực 5 phút. Không chia sẻ mã này.`,
    from,
    to,
  });
}

router.post("/otp/send", async (req, res) => {
  const { identifier, type } = req.body as { identifier?: string; type?: "email" | "phone" };
  if (!identifier || !type) {
    return res.status(400).json({ success: false, message: "Thiếu identifier hoặc type." });
  }

  const key = cleanKey(identifier);
  const existing = otpStore.get(key);
  if (existing && existing.expiry - Date.now() > 4 * 60 * 1000) {
    return res.status(429).json({ success: false, message: "Vui lòng chờ trước khi gửi lại OTP." });
  }

  const code = generateCode();
  otpStore.set(key, { code, expiry: Date.now() + 5 * 60 * 1000, attempts: 0 });

  setTimeout(() => otpStore.delete(key), 5 * 60 * 1000);

  try {
    if (type === "email") {
      await sendEmail(identifier, code);
    } else {
      let phone = identifier.trim();
      if (phone.startsWith("0")) phone = "+84" + phone.slice(1);
      await sendSms(phone, code);
    }
    return res.json({ success: true, masked: maskIdentifier(identifier) });
  } catch (err: any) {
    otpStore.delete(key);
    return res.status(500).json({ success: false, message: err.message ?? "Gửi OTP thất bại." });
  }
});

router.post("/otp/verify", (req, res) => {
  const { identifier, code } = req.body as { identifier?: string; code?: string };
  if (!identifier || !code) {
    return res.status(400).json({ valid: false, message: "Thiếu identifier hoặc code." });
  }
  const key = cleanKey(identifier);
  const entry = otpStore.get(key);
  if (!entry) return res.json({ valid: false, message: "Mã OTP không tồn tại hoặc đã hết hạn." });
  if (Date.now() > entry.expiry) {
    otpStore.delete(key);
    return res.json({ valid: false, message: "Mã OTP đã hết hạn." });
  }
  entry.attempts++;
  if (entry.attempts > 5) {
    otpStore.delete(key);
    return res.status(429).json({ valid: false, message: "Quá nhiều lần thử. Vui lòng gửi lại OTP." });
  }
  if (entry.code !== code.trim()) {
    return res.json({ valid: false, message: "Mã OTP không đúng." });
  }
  otpStore.delete(key);
  return res.json({ valid: true });
});

export default router;
