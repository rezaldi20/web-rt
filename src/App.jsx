import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  FileText,
  HeartHandshake,
  LockKeyhole,
  Menu,
  MessageCircleMore,
  MessagesSquare,
  Plus,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WalletCards,
  X,
} from 'lucide-react';
import { faqs, portalLink, services } from './content.js';

const iconMap = {
  file: FileText,
  wallet: WalletCards,
  shield: ShieldCheck,
  calendar: CalendarDays,
  message: MessagesSquare,
  users: UsersRound,
};

const navigation = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#informasi', label: 'Informasi' },
  { href: '#tentang', label: 'Tentang' },
];

function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand--light' : ''}`} href="#beranda">
      <svg className="brand__mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect width="48" height="48" rx="14" fill="currentColor" />
        <path d="M9.5 26.2 23.7 14 38.5 26.2M14.4 23.8v12.1h18.8V23.8M20.3 35.9v-8.4h6.3v8.4" stroke="var(--logo-stroke, #fffdf7)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36.2" cy="13" r="3.2" fill="#EDB278" />
      </svg>
      <span className="brand__text">
        <span className="brand__name">ruang<span>warga</span><b>.</b></span>
        <span className="brand__sub">RUANG BERSAMA KITA</span>
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-help" href="#bantuan">Butuh bantuan?</a>
          <a className="button button--header" href={portalLink('masuk')}>
            Masuk Portal <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Navigasi seluler" hidden={!menuOpen}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}<ChevronRight size={16} aria-hidden="true" />
          </a>
        ))}
        <a href="#bantuan" onClick={() => setMenuOpen(false)}>
          Bantuan<ChevronRight size={16} aria-hidden="true" />
        </a>
        <a className="mobile-nav__login" href={portalLink('masuk')}>
          Masuk Portal <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

function SectionLabel({ children, light = false }) {
  return <p className={`section-label${light ? ' section-label--light' : ''}`}><span aria-hidden="true" />{children}</p>;
}

function Hero() {
  return (
    <section id="beranda" className="hero" aria-labelledby="hero-heading">
      <img className="hero__image" src="/images/lingkungan.jpg" alt="" fetchPriority="high" />
      <div className="hero__shade" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__eyebrow"><Sparkles size={16} strokeWidth={1.8} aria-hidden="true" /> SELAMAT DATANG DI RUANG WARGA</div>
          <h1 id="hero-heading">Lebih dekat,<br /><em>lebih terhubung.</em></h1>
          <p className="hero__description">Kabar lingkungan, layanan warga, dan semangat kebersamaan — semua hadir lebih dekat di satu ruang.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#layanan">Jelajahi layanan <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="hero__text-link" href="#tentang">Kenali Ruang Warga <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero__bottom">
          <div className="hero__motto"><span className="hero__motto-icon"><HeartHandshake size={18} aria-hidden="true" /></span><span>Untuk warga,<br /><strong>oleh warga.</strong></span></div>
          <a className="hero__scroll" href="#layanan"><span>GULIR UNTUK MENJELAJAHI</span><ArrowDown size={16} aria-hidden="true" /></a>
          <span className="hero__credit">FOTO ILUSTRASI</span>
        </div>
      </div>
    </section>
  );
}

function WelcomeStrip() {
  return (
    <div className="welcome-strip">
      <div className="container welcome-strip__inner">
        <div className="welcome-strip__intro"><span className="welcome-strip__hello">Halo, Warga <span aria-hidden="true">✳</span></span><span className="welcome-strip__separator" /><p>Hal-hal baik dimulai dari lingkungan kita.</p></div>
        <a href="#tentang">Lebih dekat dengan kami <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon];
  return (
    <a className="service-card" href={portalLink(service.path)}>
      <div className="service-card__top">
        <span className={`service-card__icon service-card__icon--${service.tone}`}><Icon size={23} strokeWidth={1.7} aria-hidden="true" /></span>
        <ArrowUpRight className="service-card__corner" size={19} aria-hidden="true" />
      </div>
      <div className="service-card__body">
        <p className="service-card__category">{service.category} <span aria-hidden="true">/</span> {service.number}</p>
        <h3>{service.name}</h3>
        <p className="service-card__description">{service.description}</p>
      </div>
      <div className="service-card__bottom">Buka layanan <span className="visually-hidden"> di Portal Warga</span><ArrowRight size={16} aria-hidden="true" /></div>
    </a>
  );
}

function Services() {
  return (
    <section className="section services" id="layanan" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-heading services__heading">
          <div>
            <SectionLabel>LAYANAN UNTUK WARGA</SectionLabel>
            <h2 id="services-heading">Semua kebutuhan,<br /><em>lebih mudah dijangkau.</em></h2>
          </div>
          <div className="section-heading__aside"><p>Dari urusan administrasi hingga kabar lingkungan, temukan layanan yang Anda butuhkan di sini.</p><span className="section-heading__counter">LAYANAN WARGA <i /> 01 — 06</span></div>
        </div>
        <div className="services-grid">
          {services.map((service) => <ServiceCard key={service.path} service={service} />)}
        </div>
        <p className="services__note"><LockKeyhole size={16} aria-hidden="true" /> Layanan akan dibuka di Portal Warga. Beberapa layanan memerlukan akun resmi.</p>
      </div>
    </section>
  );
}

function Information() {
  return (
    <section className="section information" id="informasi" aria-labelledby="information-heading">
      <div className="container information__grid">
        <div className="information__visual">
          <div className="information__image-wrap">
            <img src="/images/kebersamaan.jpg" alt="Ilustrasi warga berkegiatan bersama di jalan lingkungan" loading="lazy" />
            <span className="information__photo-note">FOTO ILUSTRASI</span>
          </div>
          <div className="information__visual-caption"><span className="information__caption-icon"><HeartHandshake size={22} strokeWidth={1.6} aria-hidden="true" /></span><div><strong>Bersama terasa lebih dekat.</strong><p>Ruang untuk saling terhubung.</p></div></div>
          <span className="information__decoration" aria-hidden="true">✳</span>
        </div>
        <div className="information__content">
          <SectionLabel>KABAR & KEBERSAMAAN</SectionLabel>
          <h2 id="information-heading">Karena lingkungan<br /><em>adalah tentang kita.</em></h2>
          <p className="information__lead">Tetap terhubung dengan hal-hal yang berarti. Ikuti kabar terbaru, kenali kegiatan lingkungan, dan sampaikan aspirasi Anda.</p>
          <div className="information-list">
            <a href={portalLink('pengaduan')}>
              <span className="information-list__icon"><MessageCircleMore size={20} strokeWidth={1.7} aria-hidden="true" /></span>
              <span><strong>Pengumuman & aspirasi</strong><small>Informasi penting dalam satu tempat</small></span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href={portalLink('kegiatan')}>
              <span className="information-list__icon"><CalendarDays size={20} strokeWidth={1.7} aria-hidden="true" /></span>
              <span><strong>Kegiatan lingkungan</strong><small>Lebih mudah ikut terlibat bersama</small></span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <a className="text-link" href={portalLink('pengaduan')}>Jelajahi kabar warga <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="tentang" aria-labelledby="about-heading">
      <div className="container about__inner">
        <div className="about__symbol" aria-hidden="true"><span>✳</span></div>
        <div className="about__copy">
          <SectionLabel light>RUANG BERSAMA KITA</SectionLabel>
          <h2 id="about-heading">Bukan sekadar tinggal,<br /><em>tapi juga saling mengenal.</em></h2>
          <p>Ruang Warga hadir sebagai pintu menuju layanan dan informasi lingkungan. Supaya hal-hal penting lebih mudah ditemukan, dan kebersamaan tetap terasa dekat.</p>
          <a className="button button--light" href={portalLink('tentang-kami')}>Tentang Portal Warga <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="about__values">
          <div><span><Check size={17} aria-hidden="true" /></span><p><strong>Mudah diakses</strong><small>Layanan dalam satu tempat</small></p></div>
          <div><span><Check size={17} aria-hidden="true" /></span><p><strong>Lebih terhubung</strong><small>Informasi untuk warga</small></p></div>
          <div><span><Check size={17} aria-hidden="true" /></span><p><strong>Tetap bersahabat</strong><small>Pelayanan untuk semua usia</small></p></div>
        </div>
      </div>
    </section>
  );
}

function Help() {
  return (
    <section className="section help" id="bantuan" aria-labelledby="help-heading">
      <div className="container help__grid">
        <div className="help__intro">
          <SectionLabel>ADA YANG BISA KAMI BANTU?</SectionLabel>
          <h2 id="help-heading">Pertanyaan<br /><em>yang sering ditanyakan.</em></h2>
          <p>Belum menemukan jawaban? Pengurus RT siap membantu Anda secara langsung.</p>
          <a className="text-link" href={portalLink('masuk')}>Masuk & panduan akun <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq" key={faq.question}>
              <summary><span>{faq.question}</span><span className="faq__plus"><Plus size={18} aria-hidden="true" /></span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
          <div className="help__privacy"><span><ShieldCheck size={20} aria-hidden="true" /></span><p>Ingin tahu tentang data Anda?<br /><a href={portalLink('kebijakan-privasi')}>Baca kebijakan privasi <ArrowUpRight size={14} aria-hidden="true" /></a></p></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__main">
        <div className="footer__brand"><Brand light /><p>Satu ruang, banyak cerita.<br />Untuk lingkungan yang lebih dekat.</p></div>
        <div className="footer__column"><h2>JELAJAHI</h2><a href="#beranda">Beranda</a><a href="#layanan">Layanan Warga</a><a href="#informasi">Informasi</a><a href="#tentang">Tentang Kami</a></div>
        <div className="footer__column"><h2>LAYANAN</h2><a href={portalLink('surat')}>Surat Pengantar</a><a href={portalLink('keuangan')}>Kas & Iuran</a><a href={portalLink('ronda')}>Jadwal Ronda</a><a href={portalLink('pengaduan')}>Aspirasi Warga</a></div>
        <div className="footer__contact"><h2>BERSAMA LEBIH MUDAH</h2><p>Siap terhubung dengan lingkungan Anda?</p><a href={portalLink('masuk')}>Masuk ke Portal Warga <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </div>
      <div className="container footer__bottom"><p>© {new Date().getFullYear()} Ruang Warga. Dibuat untuk kebersamaan.</p><div><a href={portalLink('kebijakan-privasi')}>Kebijakan privasi</a><a href="#bantuan">Pusat bantuan</a></div></div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#konten-utama">Lewati ke konten utama</a>
      <Header />
      <main id="konten-utama">
        <Hero />
        <WelcomeStrip />
        <Services />
        <Information />
        <About />
        <Help />
      </main>
      <Footer />
    </>
  );
}
