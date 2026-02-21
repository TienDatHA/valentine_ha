# 🚀 Deploy lên GitHub Pages

## Bước 1: Tạo Repository trên GitHub

1. Truy cập: https://github.com/new
2. Điền thông tin:
   - **Repository name**: `valentine-hai-anh` (hoặc tên bạn thích)
   - **Description**: `Valentine website for Hải Anh 💝`
   - **Public** (để có thể dùng GitHub Pages miễn phí)
   - ❌ **KHÔNG** tick vào: "Add a README file"
   - ❌ **KHÔNG** tick vào: "Add .gitignore"
   - ❌ **KHÔNG** chọn License
3. Click **"Create repository"**

---

## Bước 2: Push code lên GitHub

Sau khi tạo repo, GitHub sẽ hiển thị màn hình hướng dẫn. Copy lệnh hoặc chạy các lệnh sau:

```bash
cd /home/datpt/valentine-website-2025

# Thay YOUR_USERNAME bằng username GitHub của bạn
git remote add origin https://github.com/YOUR_USERNAME/valentine-hai-anh.git

git push -u origin main
```

**Ví dụ:** Nếu username của bạn là `datpt`:
```bash
git remote add origin https://github.com/datpt/valentine-hai-anh.git
git push -u origin main
```

Nhập username và password (hoặc personal access token) khi được yêu cầu.

---

## Bước 3: Enable GitHub Pages

1. Vào repository trên GitHub
2. Click **"Settings"** (tab phía trên)
3. Scroll xuống tìm **"Pages"** (menu bên trái)
4. Trong phần **"Source"**:
   - Chọn: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **"Save"**

---

## Bước 4: Chờ Deploy (1-2 phút)

GitHub sẽ tự động deploy website. Sau vài phút:

1. Refresh trang Settings → Pages
2. Sẽ thấy thông báo màu xanh:
   ```
   ✅ Your site is live at https://YOUR_USERNAME.github.io/valentine-hai-anh/
   ```
3. Click vào link để xem website!

---

## 🎯 URL Website của bạn

```
https://YOUR_USERNAME.github.io/valentine-hai-anh/
```

**Ví dụ:** 
- Username: `datpt`
- Repo name: `valentine-hai-anh`
- URL: `https://datpt.github.io/valentine-hai-anh/`

---

## 🔄 Cập nhật Website (khi có thay đổi)

Sau khi sửa code, chạy:

```bash
cd /home/datpt/valentine-website-2025
git add .
git commit -m "Update website"
git push origin main
```

Website sẽ tự động cập nhật sau 1-2 phút!

---

## ✅ Checklist

- [ ] Tạo repository trên GitHub
- [ ] Push code lên GitHub
- [ ] Enable GitHub Pages
- [ ] Kiểm tra website hoạt động
- [ ] Test gửi email
- [ ] Chia sẻ link với Hải Anh! 💝

---

## 💡 Tips

1. **Tên repo ngắn gọn** → URL dễ nhớ hơn
2. **Custom domain** (nâng cao): Có thể dùng domain riêng của bạn
3. **HTTPS tự động**: GitHub Pages tự động enable HTTPS
4. **EmailJS vẫn hoạt động**: Không cần thay đổi gì!

---

## 🆘 Troubleshooting

**Lỗi: "Permission denied"**
- Cần tạo Personal Access Token: https://github.com/settings/tokens
- Chọn scopes: `repo`
- Dùng token thay cho password

**Website không hiện:**
- Đợi 2-3 phút sau khi enable Pages
- Check Settings → Pages xem có lỗi không
- Đảm bảo file `index.html` ở root folder

**Email không gửi được:**
- Check console (F12) xem có lỗi không
- Verify EmailJS credentials trong [config.js](config.js)
- Test lại trên EmailJS dashboard

---

**Chúc bạn deploy thành công! 🚀💝**
