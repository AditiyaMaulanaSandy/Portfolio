# Setup Email Functionality

Untuk mengaktifkan fitur pengiriman email pada form contact, ikuti langkah-langkah berikut:

## 1. Buat Akun EmailJS

1. Kunjungi [https://www.emailjs.com](https://www.emailjs.com)
2. Daftar akun baru atau login jika sudah memiliki akun
3. Buat service email baru (Gmail, Outlook, dll.)

## 2. Setup Email Service

1. Di dashboard EmailJS, pilih "Email Services"
2. Klik "Add New Service"
3. Pilih provider email (contoh: Gmail)
4. Ikuti instruksi untuk menghubungkan akun email Anda
5. Catat **Service ID** yang diberikan

## 3. Buat Email Template

1. Di dashboard EmailJS, pilih "Email Templates"
2. Klik "Create New Template"
3. Buat template dengan variabel berikut:
   ```
   From: {{from_name}} <{{from_email}}>
   To: {{to_email}}
   
   Subject: New Contact Form Message from Portfolio
   
   Hello,
   
   You have received a new message from your portfolio contact form:
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio website.
   ```
4. Catat **Template ID** yang diberikan

## 4. Dapatkan Public Key

1. Di dashboard EmailJS, klik pada nama akun Anda (pojok kanan atas)
2. Pilih "Account"
3. Catat **Public Key** dari bagian "General"

## 5. Update Konfigurasi

Edit file `src/config/email.ts` dengan data yang sudah didapat:

```typescript
export const emailConfig = {
  serviceId: 'YOUR_SERVICE_ID',     // Ganti dengan Service ID
  templateId: 'YOUR_TEMPLATE_ID',   // Ganti dengan Template ID  
  publicKey: 'YOUR_PUBLIC_KEY',     // Ganti dengan Public Key
};
```

## 6. Testing

Setelah konfigurasi selesai, coba kirim pesan melalui form contact di portfolio Anda. Pesan akan masuk ke email yang sudah dikonfigurasi di EmailJS.

## Troubleshooting

### Error: Service ID not found
- Pastikan Service ID sudah benar
- Pastikan service sudah aktif di dashboard EmailJS

### Error: Template ID not found  
- Pastikan Template ID sudah benar
- Pastikan template sudah di-save dan dipublish

### Error: Invalid public key
- Pastikan Public Key sudah benar
- Coba generate ulang public key di dashboard

### Email tidak masuk
- Cek folder spam/junk email
- Pastikan template email sudah benar
- Cek log error di browser console

## Keamanan

- Public Key EmailJS aman untuk digunakan di client-side
- Jangan share Service ID dan Template ID secara publik
- Pertimbangkan untuk menggunakan rate limiting untuk mencegah spam

## Alternative: Environment Variables

Untuk keamanan yang lebih baik, Anda bisa menggunakan environment variables:

1. Buat file `.env.local` di root project:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update `src/config/email.ts`:
```typescript
export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};
```