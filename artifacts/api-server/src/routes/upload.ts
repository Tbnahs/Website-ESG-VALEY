import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.resolve("../esg-valley/public/uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${Math.random().toString(36).slice(2)}${ext}`;
    cb(null, name);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Chỉ chấp nhận file ảnh"));
  },
});

const router = Router();

router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    res.status(400).json({ error: "Không có file" });
    return;
  }
  res.json({ url: `/uploads/${req.file.filename}` });
});

export default router;
