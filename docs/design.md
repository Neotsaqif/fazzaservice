# Design System — fazzaservice

Website jasa service & bongkar pasang AC. Target lokal: Purwokerto, Banyumas, Purbalingga, Cilacap, Banjarnegara.
Referensi struktur: kliknclean.com/layanan/servis-ac (disederhanakan untuk skala usaha lokal, bukan platform nasional).

---

## 1. Arah Desain

**Pattern:** Trust & Authority + Conversion (disesuaikan skala lokal)
Hero berisi kredibilitas → bukti kerja/cakupan area → layanan → cara pesan → CTA jelas ke WhatsApp di setiap section penting.

**Gaya visual:** Minimalism / Swiss-inspired
Bersih, banyak white space, grid rapi, kontras tinggi antara teks dan background, tanpa dekorasi berlebihan. Cocok untuk kesan jasa teknisi yang rapi & terpercaya, dan selaras dengan permintaan Bapak: **putih dominan, nuansa sejuk**.

**Mood kata kunci:** bersih, sejuk, cepat tanggap, terpercaya, rapi, lokal.

---

## 2. Color Palette — "Full White & Fresh"

Putih sebagai warna dasar dominan, biru sejuk hanya sebagai aksen tipis, hijau khusus untuk tombol WhatsApp (dibiarkan standar supaya langsung dikenali).

| Role | Hex | CSS Variable | Pemakaian |
|---|---|---|---|
| Background utama | `#FFFFFF` | `--color-background` | Section utama, base seluruh halaman |
| Background sekunder | `#FAFBFC` | `--color-muted` | Section selang-seling, card background alternatif |
| Card | `#FFFFFF` | `--color-card` | Kartu layanan, kartu testimoni |
| Border / divider | `#E5E9EC` | `--color-border` | Garis pemisah antar section, outline card |
| Teks utama | `#232B33` | `--color-foreground` | Judul, body text |
| Teks sekunder | `#8A94A0` | `--color-muted-foreground` | Caption, deskripsi singkat |
| Aksen (ikon, garis bawah judul, hover) | `#5BAFD9` | `--color-accent` | Dipakai secukupnya, bukan warna dasar |
| Aksen gelap (untuk teks di atas aksen) | `#0F172A` | `--color-on-accent` | — |
| Tombol WhatsApp (CTA utama) | `#25D366` | `--color-cta-wa` | Tombol WA floating + semua CTA ke WA |
| Hover tombol WA | `#1EBE5A` | `--color-cta-wa-hover` | State hover/active |
| Destructive (jarang dipakai, error form) | `#DC2626` | `--color-destructive` | Validasi form kontak jika ada |

**Prinsip pemakaian:**
- Putih & abu super halus mendominasi ±85% tampilan.
- Biru (`#5BAFD9`) hanya untuk ikon, garis bawah judul section, border aktif, hover link — jangan dipakai sebagai background section penuh.
- Hijau WA **tidak** diubah ke tema situs — dibiarkan hijau standar WhatsApp supaya tombol langsung dikenali sebagai jalur kontak, bukan tombol biasa.

---

## 3. Tipografi

**Pairing:** Modern Professional — Poppins (heading) + Open Sans (body)
Kesan modern, profesional, ramah, mudah dibaca di HP — cocok untuk usaha jasa lokal yang ingin terlihat kredibel tanpa terkesan kaku/korporat.

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');
```

| Elemen | Font | Weight | Ukuran (mobile) |
|---|---|---|---|
| H1 (hero) | Poppins | 700 | 28–32px |
| H2 (judul section) | Poppins | 600 | 22–24px |
| H3 (judul card) | Poppins | 600 | 18px |
| Body | Open Sans | 400 | 16px (base, jangan lebih kecil) |
| Caption / label kecil | Open Sans | 500 | 13–14px |

Line-height body: 1.5. Line-height heading: 1.25–1.3.

---

## 4. Layout & Struktur Halaman (Mobile-First)

Mengacu referensi kliknclean, disederhanakan untuk 1 usaha lokal (bukan multi-kota, bukan aplikasi). Urutan section:

1. **Navbar**
   Logo "fazzaservice" (kiri) + tombol "Hubungi via WA" (kanan, versi mini). Sticky di atas saat scroll.

2. **Hero Section**
   - Headline: layanan service & bongkar pasang AC, area Purwokerto & sekitarnya.
   - Sub-headline singkat: respon cepat, teknisi berpengalaman.
   - CTA utama: tombol besar "Chat via WhatsApp" (hijau).
   - Placeholder foto: `[PLACEHOLDER: foto teknisi sedang service AC / unit AC bersih]`

3. **Area Layanan**
   Badge/chip area cakupan: Purwokerto, Banyumas, Purbalingga, Cilacap, Banjarnegara. Bisa pakai ikon pin lokasi kecil di tiap chip.

4. **Pilihan Layanan** (grid card, 2 kolom di mobile)
   Contoh kartu layanan (isi disesuaikan dengan Pak Suswanto nanti):
   - Cuci AC Split/Standar
   - Cuci Besar (Overhaul)
   - Isi/Tambah Freon
   - Bongkar Pasang AC
   - Perbaikan AC (tidak dingin, bocor, dll)
   Setiap card: ikon SVG (bukan emoji) + judul + 1 baris deskripsi singkat + `[PLACEHOLDER: ikon layanan]`.

5. **Kenapa Pilih fazzaservice**
   3–4 poin singkat dengan ikon: Berpengalaman, Respon Cepat, Harga Transparan, Garansi Pengerjaan. Sederhana, tidak perlu carousel.

6. **Cara Memesan** (3 langkah, bukan 4 seperti kliknclean karena tidak ada app/payment gateway)
   1. Chat via WhatsApp → jelaskan kebutuhan
   2. Sepakati jadwal & estimasi biaya
   3. Teknisi datang & mengerjakan

7. **Testimoni** (opsional, isi placeholder dulu)
   2–3 card testimoni sederhana. `[PLACEHOLDER: foto/nama pelanggan]`

8. **FAQ**
   Accordion sederhana (3–5 pertanyaan umum: area layanan, estimasi harga, garansi, jenis AC yang dilayani).

9. **CTA Penutup**
   Section penuh dengan background `--color-muted`, headline ajakan singkat + tombol WA besar.

10. **Footer**
    Nama usaha, area layanan, kontak (WA, opsional telepon/email), jam operasional. Tidak perlu logo besar seperti kliknclean — cukup sederhana untuk usaha lokal.

11. **Floating WhatsApp Button** (persistent, semua halaman)
    Posisi: fixed bottom-right, selalu terlihat saat scroll. Ikon WA + label singkat opsional ("Chat Kami"). Min. touch target 56×56px, warna `--color-cta-wa`, shadow lembut, tidak menutupi konten (beri padding-bottom pada body/section terakhir).

---

## 5. Komponen Kunci

**Tombol CTA WhatsApp (utama)**
- Background `--color-cta-wa`, teks putih, radius penuh (pill) atau rounded-lg.
- Min. tinggi 44px (idealnya 48–56px untuk floating button), padding horizontal cukup lega.
- Hover/press → `--color-cta-wa-hover`, transisi 150–200ms.
- Selalu disertai ikon WhatsApp (SVG), jangan emoji 📱.

**Card layanan**
- Background `--color-card`, border tipis `--color-border`, radius 12–16px, shadow sangat halus (jangan berat — sesuai gaya minimal).
- Hover (desktop): elevasi sedikit naik / shadow sedikit lebih tegas.

**Chip area layanan**
- Background `--color-muted`, teks `--color-foreground`, border `--color-border`, radius penuh (pill).

**Section divider**
- Alternasi background `#FFFFFF` ↔ `#FAFBFC` antar section untuk beri ritme tanpa perlu warna mencolok.

---

## 6. Prinsip UX & Aksesibilitas (wajib)

- Kontras teks minimum 4.5:1 — teks utama `#232B33` di atas putih sudah aman; hindari abu-abu terlalu terang untuk body text.
- Semua elemen interaktif (tombol, link, chip) minimum area sentuh 44×44px (khusus floating WA: 56×56px karena ini CTA paling penting).
- Sticky navbar & floating WA button tidak boleh menutupi konten — beri padding/margin pengaman di section terakhir.
- Gunakan ikon SVG (Lucide/Heroicons), bukan emoji, untuk semua ikon layanan/fitur.
- Semua gambar butuh alt text deskriptif (mis. "Teknisi fazzaservice sedang membersihkan unit indoor AC").
- Layout mobile-first, breakpoint uji di 375px / 768px / 1024px / 1440px, tanpa horizontal scroll.
- Hormati `prefers-reduced-motion` — animasi/transisi tetap halus tapi tidak wajib untuk fungsi.
- Gambar pakai lazy loading & format modern (WebP) begitu foto asli tersedia, untuk jaga performa di koneksi mobile.

---

## 7. Placeholder Foto yang Dibutuhkan

Semua ditandai `[PLACEHOLDER]` dulu sampai Pak Suswanto kirim foto asli:

- Hero: foto teknisi bekerja / unit AC yang sudah rapi
- Ikon tiap layanan (bisa pakai ikon SVG generik dulu, bukan harus foto)
- Foto tim/teknisi untuk section "Kenapa Pilih Kami" (opsional)
- Foto/testimoni pelanggan (opsional, bisa pakai inisial + rating dulu tanpa foto)

---

## 8. Anti-Pattern (Dihindari)

- Jangan pakai warna biru sebagai background section penuh — cukup aksen.
- Jangan sembunyikan tombol WA di balik menu — harus selalu terlihat (floating).
- Jangan tiru fitur yang tidak relevan untuk skala lokal (app download, multi-kota switcher, payment gateway) — fokus ke: lihat layanan → chat WA.
- Jangan pakai emoji sebagai pengganti ikon di UI.
- Jangan gunakan font di bawah 16px untuk body text.
