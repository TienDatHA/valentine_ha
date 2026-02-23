# valentine_ha

Một project nhỏ cho Valentine — tạo trải nghiệm/thiệp Valentine đơn giản để gửi tặng người thương.

## Tính năng
- Giao diện Valentine dễ thương
- Thông điệp/thiệp chúc mừng tuỳ chỉnh
- Hiệu ứng đơn giản (nếu có): tim bay, confetti, v.v.
- Responsive (xem tốt trên điện thoại)

## Công nghệ sử dụng
- HTML / CSS / JavaScript  
*(Nếu project bạn dùng framework như React/Vue/Next.js thì nói mình để mình chỉnh lại đúng stack.)*

## Cài đặt & chạy dự án

### Cách 1: Mở trực tiếp
1. Clone repo:
   ```bash
   git clone https://github.com/TienDatHA/valentine_ha.git
   cd valentine_ha
   ```
2. Mở file `index.html` bằng trình duyệt.

### Cách 2: Chạy bằng Live Server (khuyến nghị)
- Nếu dùng VS Code: cài extension **Live Server** → right click `index.html` → **Open with Live Server**

### (Tuỳ chọn) Chạy bằng Node server
Nếu project có `package.json`, chạy:
```bash
npm install
npm run dev
```

## Tuỳ chỉnh nội dung
Gợi ý các chỗ thường chỉnh:
- Tên người nhận / lời chúc: trong file HTML hoặc JS (ví dụ `index.html`, `script.js`)
- Ảnh nền / font / màu sắc: trong CSS (ví dụ `style.css`)

> Nếu bạn gửi cấu trúc file (danh sách file trong repo) hoặc chụp màn hình trang, mình sẽ ghi README “đúng chuẩn” theo đúng file thật của bạn.

## Deploy (GitHub Pages)
1. Vào **Settings** → **Pages**
2. Source: chọn branch `main` (hoặc `/docs` nếu bạn dùng)
3. Save và lấy link demo

