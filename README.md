# Ruang Warga

Beranda publik yang responsif untuk membantu warga menemukan layanan dan informasi lingkungan. Dibangun dengan React dan Vite, dengan latar utama penuh tanpa panel kotak di atasnya.

## Hubungan dengan Portal Warga

Tombol masuk dan enam tautan layanan mengarah ke `mywarga.vercel.app`, yaitu Portal Warga yang sudah berjalan. Proses masuk, data warga, dan transaksi tetap ditangani oleh portal tersebut dan Supabase yang sudah digunakannya. **Beranda ini tidak mengakses Supabase secara langsung** dan tidak menyimpan kunci maupun data pribadi. Dengan demikian, hak akses dan alur masuk portal lama tidak perlu diubah.

Alamat dan daftar layanan berada di `src/content.js`. Laman ini tidak menggantikan fitur internal atau memperbaiki kode di repositori Portal Warga yang berbeda.

## Menjalankan secara lokal

Gunakan Node.js 20 atau lebih baru.

```sh
npm ci
npm run dev
```

Untuk membuat dan memeriksa hasil produksi:

```sh
npm run build
npm run preview
```

## Pengujian

```sh
npm test
npx playwright install chromium
npm run test:e2e
```

Tes browser memeriksa navigasi, tautan layanan, menu ponsel, FAQ, ukuran layar, serta pemeriksaan aksesibilitas otomatis. Di lingkungan Linux minimal, Chromium mungkin membutuhkan paket sistem tambahan; jalankan `npx playwright install-deps chromium` bila diperlukan.

## Vercel

Website ini dapat diterbitkan sebagai **proyek Vercel baru pada akun yang sama**, dengan framework Vite, perintah build `npm run build`, dan direktori output `dist`. Proyek Vercel `portal-warga` yang sudah online memiliki repositori dan pengaturan root tersendiri; jangan menggantinya tanpa persetujuan karena dapat memengaruhi situs produksi. Tidak ada variabel lingkungan Supabase yang diperlukan untuk beranda ini.

## Kredit foto ilustrasi

- Foto lingkungan: [Arief Komarudin / Unsplash](https://unsplash.com/photos/an-aerial-view-of-a-village-at-sunset-j7xWCyH2wYQ).
- Foto kebersamaan: [Dio Alif Utomo / Pexels](https://www.pexels.com/photo/community-gathering-in-a-rural-village-street-36596582/).
