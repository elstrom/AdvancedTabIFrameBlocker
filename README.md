# Advanced Tab and IFrame Blocker

**Advanced Tab and IFrame Blocker** adalah UserScript canggih yang membantu melindungi pengalaman browsing Anda dengan memblokir situs yang tidak diinginkan atau mencurigakan, baik dari tab baru, iframe, maupun navigasi langsung.

## 🎯 Fitur Utama

- **Penutupan Otomatis Tab Blacklist**: Secara otomatis menutup tab yang membuka situs dalam daftar blokir.
- **Blokir Tab Baru**: Memastikan tab baru yang diarahkan ke situs dalam daftar blokir dihentikan sebelum terbuka.
- **Blokir Iframe**: Menghapus iframe yang memuat situs berbahaya atau mencurigakan.
- **Pemantauan Elemen Video**: Menghentikan klik pada elemen video yang dapat mengarahkan ke situs dalam daftar blokir.
- **Pemantauan Mutasi Halaman**: Secara real-time memantau perubahan pada halaman untuk mendeteksi dan memblokir elemen mencurigakan.

## 📋 Daftar Situs yang Diblokir

Skrip ini menggunakan daftar situs yang mencakup berbagai kategori:

- **Situs Judi dan Taruhan**: `casino`, `poker`, `slot`, `togel`, `bandarq`, dll.
- **E-commerce dan Marketplace**: `tokopedia.com`, `shopee.co.id`, `lazada.co.id`, `amazon.com`, dll.
- **Situs Berbahaya atau Spam**: `cloudfront`, `visualmirage`, `meenetiy`, dll.
- **Domain Khusus**: Daftar dapat diperbarui sesuai kebutuhan dengan menambahkan kata kunci atau domain pada array `weblack`.

## 📦 Instalasi

1. **Install Tampermonkey** di browser Anda:

   - [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/gngmhiphkjpdilfjlfdjgpohkghcmjoh)

2. Klik [tautan ini](https://raw.githubusercontent.com/elstrom/BlokerWeb/main/AdvancedTabIFrameBlocker.user.js) untuk membuka file skrip.

3. Tampermonkey akan memuat skrip, klik **Install** untuk mengaktifkannya.

## 🛠️ Cara Kerja

1. **Penutupan Tab**: Saat Anda mengakses situs dalam daftar blokir, tab akan langsung ditutup.
2. **Intercept Tab Baru**: Jika skrip mendeteksi upaya membuka tab baru menuju situs dalam daftar blokir, upaya tersebut akan dihentikan dengan pemberitahuan.
3. **Pemblokiran Iframe**: Iframe yang memuat situs berbahaya akan otomatis dihapus dari halaman.
4. **Pemantauan Elemen Video**: Klik pada elemen video yang dapat mengarahkan ke situs mencurigakan akan dicegah.
5. **Pemantauan Mutasi Halaman**: Skrip aktif memantau perubahan pada halaman untuk mencegah elemen baru yang mencurigakan.

## ⚙️ Konfigurasi Tambahan

- Anda dapat memperbarui daftar situs yang diblokir dengan menambahkan kata kunci atau domain pada array `weblack` di skrip.
- Pastikan untuk menyimpan perubahan sebelum menyegarkan browser Anda agar daftar blokir diperbarui.

## 💡 Catatan Penting

- Skrip ini dirancang untuk memberikan perlindungan ekstra saat browsing, tetapi pengguna tetap disarankan untuk tidak mengunjungi situs mencurigakan.
- Jika Anda mengalami masalah dengan situs yang sah diblokir, tambahkan domain tersebut ke daftar pengecualian.

## 📞 Pembaruan 

- **Pembaruan Skrip**: [AdvancedTabIFrameBlocker.user.js](https://raw.githubusercontent.com/elstrom/AdvancedTabIFrameBlocker/main/AdvancedTabIFrameBlocker.user.js)

---

**Advanced Tab and IFrame Blocker**: Mitra terpercaya Anda untuk pengalaman browsing yang lebih aman!