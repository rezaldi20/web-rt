// Layanan dan autentikasi tetap ditangani oleh portal yang sudah berjalan.
// Jangan arahkan URL ini ke API istimewa atau menyimpan kunci rahasia di browser.
export const PORTAL_URL = 'https://mywarga.vercel.app';

export const portalLink = (path) => `${PORTAL_URL}/html/${path}.html`;

export const services = [
  {
    number: '01',
    name: 'Surat Pengantar',
    category: 'ADMINISTRASI',
    description: 'Ajukan antrean surat dan pantau prosesnya dengan lebih mudah.',
    path: 'surat',
    icon: 'file',
    tone: 'mint',
  },
  {
    number: '02',
    name: 'Kas & Iuran',
    category: 'KEUANGAN',
    description: 'Lihat catatan kas lingkungan dan informasi iuran warga.',
    path: 'keuangan',
    icon: 'wallet',
    tone: 'sand',
  },
  {
    number: '03',
    name: 'Jadwal Ronda',
    category: 'KEAMANAN',
    description: 'Lihat jadwal dan informasi keamanan di lingkungan kita.',
    path: 'ronda',
    icon: 'shield',
    tone: 'blue',
  },
  {
    number: '04',
    name: 'Kegiatan Warga',
    category: 'KEBERSAMAAN',
    description: 'Cari tahu kegiatan dan peminjaman aset lingkungan.',
    path: 'kegiatan',
    icon: 'calendar',
    tone: 'peach',
  },
  {
    number: '05',
    name: 'Pengumuman & Aspirasi',
    category: 'INFORMASI',
    description: 'Akses kabar, sampaikan laporan, dan berikan suara Anda.',
    path: 'pengaduan',
    icon: 'message',
    tone: 'lavender',
  },
  {
    number: '06',
    name: 'Data Keluarga',
    category: 'KEPENDUDUKAN',
    description: 'Kelola informasi keluarga Anda melalui akun resmi warga.',
    path: 'dashboard',
    icon: 'users',
    tone: 'sage',
  },
];

export const connectivity = [
  {
    value: '06',
    unit: 'layanan',
    title: 'Satu pintu digital',
    description: 'Administrasi, kas, keamanan, sampai kabar lingkungan dalam satu tempat.',
  },
  {
    value: '01',
    unit: 'akun',
    title: 'Satu akun warga',
    description: 'Cukup sekali masuk untuk membuka seluruh layanan Portal Warga.',
  },
  {
    value: '24',
    unit: 'jam',
    title: 'Kabar kapan saja',
    description: 'Informasi dan aspirasi tetap bisa diakses dari mana pun warga berada.',
  },
];

export const faqs = [
  {
    question: 'Bagaimana cara mendapatkan akun warga?',
    answer: 'Akun resmi dibuat oleh pengurus RT. Jika Anda warga baru atau belum memiliki akun, silakan hubungi Ketua RT untuk mendapatkan bantuan.',
  },
  {
    question: 'Bagaimana jika saya lupa kata sandi?',
    answer: 'Hubungi Ketua RT. Pengurus dapat membantu melakukan pengaturan ulang kata sandi akun rumah Anda.',
  },
  {
    question: 'Apakah layanan tetap tersedia secara tatap muka?',
    answer: 'Ya. Warga yang membutuhkan bantuan, termasuk lansia, tetap dapat dilayani secara langsung oleh pengurus di sekretariat lingkungan.',
  },
];
