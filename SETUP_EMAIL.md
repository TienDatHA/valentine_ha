# 📧 Hướng dẫn Setup EmailJS

## Bước 1: Đăng ký tài khoản EmailJS (MIỄN PHÍ)

1. Truy cập: https://www.emailjs.com/
2. Click **"Sign Up"** (góc phải trên)
3. Đăng ký bằng Google hoặc Email
4. **Miễn phí 200 email/tháng** - đủ dùng cho Valentine! ❤️

---

## Bước 2: Tạo Email Service

1. Sau khi đăng nhập, vào **"Email Services"**
2. Click **"Add New Service"**
3. Chọn **Gmail** (hoặc email provider bạn dùng)
4. Click **"Connect Account"** và đăng nhập Gmail của bạn
5. **Service ID** sẽ tự động tạo (ví dụ: `service_abc123`)
6. Copy Service ID này

---

## Bước 3: Tạo Email Template

1. Vào mục **"Email Templates"**
2. Click **"Create New Template"**
3. Sửa template như sau:

### Subject (Tiêu đề email):
```
🎉 {{valentine_name}} đã trả lời Valentine!
```

### Content (Nội dung email):
```
Chào bạn! 💝

{{valentine_name}} đã phản hồi lời mời Valentine của bạn!

📋 Chi tiết:
━━━━━━━━━━━━━━━━━━━━━━━━━━
💖 Người yêu: {{valentine_name}}
✅ Trả lời: {{response}}
💕 Mức độ yêu: {{love_percentage}}
📅 Thời gian: {{date}}

💌 Tin nhắn:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━

Chúc mừng bạn! 🎊🎉💝

---
Tin nhắn tự động từ Valentine Website
```

4. Click **"Save"**
5. **Template ID** sẽ hiện (ví dụ: `template_xyz789`)
6. Copy Template ID này

---

## Bước 4: Lấy Public Key

1. Vào **"Account"** → **"General"**
2. Tìm **"Public Key"** 
3. Copy Public Key (ví dụ: `YOUR_PUBLIC_KEY_12345`)

---

## Bước 5: Cập nhật Config

Mở file `config.js` và thay đổi phần email:

```javascript
email: {
    enabled: true,
    serviceId: "service_abc123",              // ← Thay bằng Service ID của bạn
    templateId: "template_xyz789",            // ← Thay bằng Template ID của bạn
    publicKey: "YOUR_PUBLIC_KEY_12345",       // ← Thay bằng Public Key của bạn
    recipientEmail: "phamtiendat05122003@gmail.com",
    sendOnAccept: true,
    includeDetails: true
}
```

---

## Bước 6: Test thử

1. Mở file `index.html` trên trình duyệt
2. Trả lời các câu hỏi
3. Click **"Đồng ý"** ở câu hỏi cuối
4. Kiểm tra email: **phamtiendat05122003@gmail.com**

---

## ⚠️ Lưu ý

✅ **EmailJS hoạt động 100% trên GitHub Pages** - không cần server!
✅ Miễn phí 200 email/tháng
✅ Email gửi trong vài giây
✅ Không cần cài đặt backend

❌ Nếu không nhận được email:
- Check spam/junk folder
- Verify Service ID, Template ID, Public Key đúng
- Check console (F12) xem có lỗi không

---

## 🚀 Deploy lên GitHub Pages

Sau khi setup EmailJS xong:

```bash
git add .
git commit -m "Add email notification feature"
git push origin main
```

Vào **Settings** → **Pages** → Enable GitHub Pages

Website sẽ có URL: `https://username.github.io/valentine-website-2025/`

---

## 💡 Tips

- Email sẽ tự động gửi khi Hải Anh click "Đồng ý" ❤️
- Email bao gồm mức độ yêu từ love meter
- Email gửi về: phamtiendat05122003@gmail.com
- Có thể tắt tính năng này bằng cách set `enabled: false`

---

**Chúc bạn thành công! 💝🎉**
