# Ruang Warga

Beranda publik yang responsif untuk membantu warga menemukan layanan dan informasi lingkungan. Dibangun dengan React dan Vite, dengan latar utama penuh tanpa panel kotak di atasnya. Tema visualnya memakai palet hijau hutan, krem hangat, dan aksen pasir, dipadukan dengan ornamen jaringan titik sebagai lambang warga yang saling terhubung.

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

Tes browser memeriksa navigasi, tautan layanan, menu ponsel, FAQ, ukuran layar, pemuatan seluruh gambar ilustrasi, serta pemeriksaan aksesibilitas otomatis. Di lingkungan Linux minimal, Chromium mungkin membutuhkan paket sistem tambahan; jalankan `npx playwright install-deps chromium` bila diperlukan.

## Vercel

Rilis awal tersedia di [web-rt-xi.vercel.app](https://web-rt-xi.vercel.app) sebagai proyek Vercel `web-rt` yang terpisah. Proyek `portal-warga` yang sudah online memiliki repositori dan pengaturan root tersendiri; jangan menggantinya tanpa persetujuan karena dapat memengaruhi situs produksi. Tidak ada variabel lingkungan Supabase yang diperlukan untuk beranda ini.

Integrasi GitHub pada Vercel belum memiliki akses ke repositori `web-rt`. Rilis awal dibuat dari snapshot commit `8f82b124b32de845d46703901d6f7beab0a6ba2a`; perubahan baru **tidak otomatis diterbitkan**. Untuk mengaktifkan deployment otomatis, berikan akses repositori tersebut ke integrasi GitHub Vercel, hubungkan repositori ke proyek `web-rt`, lalu gunakan framework Vite dengan perintah instalasi `npm ci`, perintah build `npm run build`, dan direktori output `dist`. Perintah instalasi sementara di pengaturan proyek mengunduh snapshot tersebut hanya bila source deployment tidak memiliki `package-lock.json`.

## Aset visual

Semua gambar berada di `public/images` dan menampilkan suasana Indonesia: permukiman warga, warga berkegiatan di ruang komunitas, dan peta jaringan Indonesia dalam bentuk SVG (`indonesia-network.svg`, dibuat dari data batas wilayah dunia sehingga bebas dipakai).

## Kredit foto ilustrasi

- Foto hero permukiman saat senja: [Arief Komarudin / Unsplash](https://unsplash.com/photos/an-aerial-view-of-a-village-at-sunset-j7xWCyH2wYQ).
- Foto warga di jalan kampung: [Tom Fisk / Pexels](https://www.pexels.com/photo/people-standing-near-concrete-houses-while-looking-at-the-camera-5144306/) (Rumpin, Jawa Barat).
- Foto warga belajar komputer di ruang komunitas: [Nur Rahmi Nailah (WMID) / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Magang_Wikimedia_Indonesia_di_Ruang_Komunitas_Wikimedia_di_Yogyakarta_Periode_3.jpg), lisensi [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.id). Berkas dipotong (crop) dan disesuaikan warnanya untuk keperluan tata letak; versi turunan ini tetap mengikuti lisensi CC BY-SA 4.0.
- Peta jaringan Indonesia (`indonesia-network.svg`) dibuat dari data [world-atlas](https://github.com/topojson/world-atlas) (Natural Earth, domain publik).
