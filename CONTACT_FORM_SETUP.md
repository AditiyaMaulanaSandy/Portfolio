# 📧 Fitur Contact Form - Portfolio

## ✅ Yang Sudah Diimplementasikan

Fitur contact form sudah berhasil diintegrasikan dengan lengkap! Berikut yang sudah tersedia:

### 🚀 Fitur Utama
- ✅ Form contact yang responsive dan modern
- ✅ Validasi input (nama, email, pesan)
- ✅ Status loading saat mengirim
- ✅ Notifikasi sukses/error
- ✅ Reset form otomatis setelah berhasil
- ✅ Integrasi dengan EmailJS untuk pengiriman email
- ✅ UI yang menarik dengan animasi dan efek hover

### 🎨 Tampilan Form
- Form dengan desain gradient dan glassmorphism
- Input fields dengan validasi real-time
- Loading spinner saat mengirim pesan
- Status message dengan ikon (✅ sukses / ⚠️ error)
- Animasi smooth dan transisi yang mulus

## 🔧 Cara Setup EmailJS

### 1. Buat Akun EmailJS
1. Kunjungi [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up dengan email Anda
3. Verifikasi email dan login

### 2. Setup Email Service
1. Di dashboard, pilih **"Email Services"**
2. Klik **"Add New Service"**
3. Pilih **Gmail** (atau provider email lainnya)
4. Login dengan akun Gmail yang ingin menerima email
5. Catat **Service ID** yang muncul

### 3. Buat Email Template
1. Pilih **"Email Templates"**
2. Klik **"Create New Template"**
3. Isi template dengan:
```
Subject: New Message from Portfolio - {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```
4. **Save** template dan catat **Template ID**

### 4. Dapatkan Public Key
1. Klik nama profile Anda (pojok kanan atas)
2. Pilih **"Account"**
3. Copy **Public Key** dari bagian API Keys

### 5. Konfigurasi Environment Variables
1. Copy file template:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` dengan data EmailJS Anda:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```

### 6. Test Contact Form
1. Restart development server:
   ```bash
   npm run dev
   ```
2. Buka http://localhost:3000
3. Scroll ke bagian Contact
4. Isi form dan klik "Send Message"
5. Cek email Anda!

## 🛠️ Template Email yang Disarankan

Untuk hasil terbaik, gunakan template berikut di EmailJS:

**Subject:**
```
New Contact from Portfolio - {{from_name}}
```

**Content:**
```html
<h2>New Contact Form Submission</h2>
<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Date:</strong> {{current_date}}</p>

<h3>Message:</h3>
<div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
  {{message}}
</div>

<hr>
<p><small>This message was sent from your portfolio website contact form.</small></p>
```

## 🎯 Fitur Form Contact

### Validasi
- ✅ Nama wajib diisi
- ✅ Email harus format valid
- ✅ Pesan wajib diisi
- ✅ Loading state saat mengirim

### Response Handling
- ✅ Pesan sukses: "Pesan berhasil dikirim! Saya akan membalas secepatnya."
- ✅ Pesan error: Detail error sesuai masalah yang terjadi
- ✅ Auto-clear form setelah berhasil kirim

### UI/UX
- ✅ Disable form saat loading
- ✅ Visual feedback dengan spinner
- ✅ Smooth animations
- ✅ Responsive design
- ✅ Accessibility support

## 🚨 Troubleshooting

### Form tidak mengirim email
1. **Cek console browser** untuk error messages
2. **Pastikan .env.local** ada dan berisi konfigurasi yang benar  
3. **Restart development server** setelah mengedit .env.local
4. **Test EmailJS credentials** di dashboard mereka

### Email tidak masuk
1. **Cek spam folder**
2. **Pastikan email service** sudah terverifikasi di EmailJS
3. **Test template** di dashboard EmailJS
4. **Cek quota** EmailJS (free plan: 200 emails/bulan)

### Error "Service not found"
- Service ID salah atau service tidak aktif
- Double-check Service ID di dashboard EmailJS

### Error "Template not found"  
- Template ID salah atau template tidak aktif
- Double-check Template ID di dashboard EmailJS

## 📱 Fitur Mobile

- ✅ Responsive design
- ✅ Touch-friendly inputs
- ✅ Mobile keyboard optimization
- ✅ Proper viewport handling

## 🔒 Keamanan

- ✅ Client-side validation
- ✅ Server-side validation (EmailJS)
- ✅ Rate limiting by EmailJS
- ✅ No sensitive data exposure
- ✅ Environment variables untuk credentials

**Email yang akan diterima:**
- 📩 Nama pengirim
- 📧 Email pengirim  
- 💬 Pesan lengkap
- 🕐 Timestamp otomatis
- 🌐 Sumber: Portfolio website

Selamat! Contact form Anda sudah siap menerima pesan dari visitor. 🎉