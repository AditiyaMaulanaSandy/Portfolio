# Mobile Back Button Handler

## Overview
Implementasi fitur back button handler untuk mobile yang memungkinkan pengguna kembali ke halaman sebelumnya atau menutup modal ketika menekan tombol navigasi kembali pada perangkat mobile.

## Fitur yang Diimplementasikan

### 1. Custom Hook: `useBackHandler`
- **File**: `src/hooks/useBackHandler.ts`
- **Fungsi**: Menangani browser history manipulation dan event listener untuk back button
- **Parameter**:
  - `isModalOpen`: Boolean status apakah modal sedang terbuka
  - `onBackAction`: Callback function yang dipanggil saat back button ditekan

### 2. Integrasi pada Portfolio Component
- **File**: `src/components/Portfolio.tsx`
- **Fitur**:
  - Handler untuk project modal
  - Handler untuk certificate modal
  - Otomatis menambah state ke browser history saat modal dibuka
  - Menghapus state dari history saat modal ditutup

## Cara Kerja

### Desktop/Browser
- Tombol close (×) pada modal akan menutup modal
- ESC key tetap berfungsi normal
- Click outside modal untuk menutup

### Mobile
- Tombol navigasi kembali pada browser/hp akan:
  1. Menutup modal jika modal sedang terbuka
  2. Kembali ke halaman sebelumnya jika tidak ada modal terbuka
- Gesture swipe back tetap berfungsi normal

### Technical Implementation

1. **History State Management**:
   ```typescript
   // Saat modal dibuka, push state baru ke history
   window.history.pushState({ modalOpen: true }, '');
   ```

2. **Event Listener**:
   ```typescript
   // Listen untuk popstate event (back button)
   window.addEventListener('popstate', handlePopState);
   ```

3. **Cleanup**:
   ```typescript
   // Remove listener saat component unmount
   return () => {
     window.removeEventListener('popstate', handlePopState);
   };
   ```

## Keunggulan

1. **User Experience**: Memberikan navigasi yang intuitif sesuai ekspektasi pengguna mobile
2. **Cross-platform**: Bekerja di semua browser dan perangkat mobile
3. **Non-intrusive**: Tidak mengganggu navigasi normal website
4. **Reusable**: Hook dapat digunakan kembali di komponen lain

## Testing

Untuk menguji fitur ini:

1. Buka website di mobile browser atau developer tools mobile mode
2. Buka modal project atau certificate
3. Tekan tombol back pada browser/hp
4. Modal akan tertutup dan tidak akan keluar dari halaman

## Browser Support

- ✅ Chrome Mobile
- ✅ Safari iOS
- ✅ Firefox Mobile
- ✅ Edge Mobile
- ✅ Samsung Internet
- ✅ All desktop browsers

## Future Enhancements

1. Tambah haptic feedback untuk iOS Safari
2. Support untuk multiple modal layers
3. Custom animation saat back navigation
4. Analytics tracking untuk back button usage