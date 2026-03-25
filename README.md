# ESG Valley

**ESG Valley** là thương hiệu trà di sản Việt Nam kết hợp các nguyên tắc ESG (Môi trường – Xã hội – Quản trị) vào ngành trà, hướng đến bảo tồn và phát huy giá trị trà Shan Tuyết cổ thụ của Việt Nam.

---

## Giới thiệu

ESG Valley xây dựng một hệ sinh thái bền vững kết nối thiên nhiên, văn hóa và cộng đồng, bao gồm:

- **Sản phẩm cao cấp** – Các dòng trà cổ thụ như *Mã Đáo Thành Công*, *Bách Niên Trà*, *Thượng Cổ Trà*.
- **Bảo tồn di sản** – Bảo vệ các rừng trà cổ thụ trên 100 năm tuổi tại Thái Nguyên, Hà Giang.
- **Nông nghiệp bền vững** – Hợp tác với hơn 5.000 hộ nông dân theo tiêu chuẩn 100% hữu cơ (VietGAP, USDA Organic).
- **Du lịch & văn hóa** – Trải nghiệm cộng đồng và các buổi trà đạo.
- **Đào tạo & giáo dục** – Tập huấn cộng đồng địa phương về kỹ thuật canh tác bền vững và tiêu chuẩn ESG.

---

## Công nghệ sử dụng

Dự án được tổ chức theo kiến trúc **PNPM Monorepo** với TypeScript toàn stack.

### Frontend (`artifacts/esg-valley`)
- **React 19** + **Vite**
- **Tailwind CSS 4**, **Framer Motion**, **Radix UI**
- **Wouter** (routing), **TanStack React Query** (data fetching)
- **React Hook Form** + **Zod** (form validation)

### Backend (`artifacts/api-server`)
- **Express.js v5** (TypeScript)
- **Drizzle ORM** + **PostgreSQL**
- **Zod** + **drizzle-zod** (schema & validation)
- **Pino** (logging), **OpenAPI** (API spec)

### Công cụ & hạ tầng
- **Orval** – Tự động sinh React Query hooks từ OpenAPI spec
- **PNPM Workspaces** – Quản lý monorepo
- **Replit** – Môi trường phát triển & triển khai

---

## Cấu trúc dự án

```
workspace/
├── artifacts/
│   ├── esg-valley/          # Web app chính (React + Vite)
│   ├── api-server/          # Backend API (Express)
│   └── mockup-sandbox/      # Sandbox thử nghiệm UI
├── lib/
│   ├── db/                  # Schema database & Drizzle config
│   ├── api-client-react/    # Generated API hooks
│   └── api-zod/             # Shared Zod schemas
└── pnpm-workspace.yaml
```

---

## Bắt đầu phát triển

### Yêu cầu
- Node.js 20+
- PNPM 9+
- PostgreSQL

### Cài đặt

```bash
pnpm install
```

### Chạy ứng dụng

```bash
# Chạy toàn bộ workspace
pnpm dev

# Hoặc chạy từng artifact
pnpm --filter esg-valley dev
pnpm --filter api-server dev
```

---

## Liên hệ

Để biết thêm thông tin về ESG Valley, vui lòng liên hệ qua các kênh chính thức của thương hiệu.
