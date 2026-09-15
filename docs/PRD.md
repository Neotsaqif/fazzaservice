# fazzaservice — Product Requirements Document (PRD)

**Version:** 1.0
**Status:** Draft — dokumen konsolidasi tunggal (brief produk + rencana implementasi digabung dalam satu referensi)
**Last Updated:** 2026-09-14

---

## 1. Introduction

### 1.1 Purpose
Dokumen ini mendefinisikan lingkup, struktur teknis, dan rencana pengerjaan website **fazzaservice** — website jasa service & bongkar pasang AC milik Pak Tri. Ditujukan untuk Neo (developer) sebagai referensi kerja, dan untuk Pak Tri (klien/pemilik usaha) sebagai acuan cek lingkup sebelum pengerjaan dimulai.

### 1.2 Background
- Belum ada aset digital sebelumnya (belum ada website, belum ada prototype).
- Referensi visual & struktur: [kliknclean.com/layanan/servis-ac](https://www.kliknclean.com/layanan/servis-ac) — disederhanakan karena fazzaservice adalah usaha lokal satu kota, bukan platform multi-kota berbasis aplikasi.
- Design system sudah disiapkan lebih dulu di `design.md` (color palette, tipografi, struktur section, komponen) — PRD ini mengacu ke dokumen tersebut untuk keputusan visual, dan fokus ke lingkup fitur & rencana kerja.
- Belum ada keputusan tech stack final (lihat Bagian 3 & Open Questions).

### 1.3 Definitions
| Term | Meaning |
|---|---|
| `Proto` | UI/UX ada dalam bentuk mockup/prototype, memakai data contoh (belum data asli klien) |
| `BE done` | Backend/logic sudah diimplementasikan, belum terhubung ke frontend |
| `Planned` | Sudah didefinisikan tapi belum dibangun (frontend maupun backend) |
| `Out of MVP` | Sengaja tidak masuk lingkup rilis pertama |
| CTA | Call-to-Action — di project ini hampir selalu berarti tombol/link menuju chat WhatsApp |
| MVP | Versi pertama website yang layak dikirim ke klien untuk dipakai |

---

## 2. Project Overview

| Field | Detail |
|---|---|
| **Project Name** | fazzaservice |
| **Project Type** | Website informasi & lead-generation (bukan e-commerce/aplikasi booking) |
| **Purpose** | Menampilkan layanan service & bongkar pasang AC milik Pak Tri, dan mengarahkan calon pelanggan lokal untuk menghubungi via WhatsApp |
| **Primary User Roles** | Visitor (calon pelanggan), Pemilik Usaha (Pak Tri — pemberi konten & penerima chat WA) |

### 2.1 Goals
- Memberi calon pelanggan di area Purwokerto, Banyumas, Purbalingga, Cilacap, dan Banjarnegara informasi jelas tentang layanan yang tersedia.
- Membuat jalur kontak ke WhatsApp semudah dan sesering mungkin ditemukan (tombol WA selalu tampil di layar).
- Membangun kesan usaha yang rapi, bersih, dan profesional lewat tampilan (nuansa putih & sejuk, mengacu `design.md`).
- Website ringan dan cepat diakses dari HP, karena mayoritas calon pelanggan kemungkinan besar mengakses lewat perangkat mobile.

### 2.2 Explicit Non-Goals (Out of MVP)
- **Tidak ada sistem booking/penjadwalan online** — semua kesepakatan jadwal dilakukan manual lewat chat WhatsApp.
- **Tidak ada payment gateway** — tidak ada pembayaran online di dalam website.
- **Tidak ada aplikasi mobile/download app**, berbeda dari referensi kliknclean.
- **Tidak ada dukungan multi-kota/switcher lokasi** — website hanya untuk satu area layanan (Purwokerto & sekitarnya).
- **Tidak ada admin dashboard/CMS** di MVP — perubahan konten (harga, daftar layanan, testimoni) dilakukan langsung lewat kode oleh Neo, bukan lewat panel admin. *(Bisa dipertimbangkan untuk fase berikutnya — lihat Open Questions.)*
- **Tidak ada sistem akun/login pelanggan.**

---

## 3. Technology Stack & Architecture

| Layer | Choice |
|---|---|
| Frontend | *Belum diputuskan — lihat Open Questions* |
| Backend | Tidak dibutuhkan untuk MVP (situs statis, tanpa data dinamis dari server) |
| Database | Tidak dibutuhkan untuk MVP (konten disimpan langsung di kode/file) |
| Storage | Hosting statis (aset gambar disimpan sebagai file di dalam project) |
| Deployment | *Belum diputuskan — lihat Open Questions* |
| Version Control | Git (direkomendasikan, belum dikonfirmasi digunakan atau tidak) |
| Dev Environment | Lokal, oleh Neo |

**Architecture pattern:** Static site (1 halaman utama, semua section dalam 1 landing page) — tidak ada API/backend server untuk MVP.

```
Visitor (browser/HP) → Static Website (HTML/CSS/JS) → Tombol WA → wa.me link → WhatsApp Pak Tri
```

### 3.1 Project Structure
```
fazzaservice/
├── design.md          # design system (sudah ada)
├── PRD.md              # dokumen ini
├── src/ (atau public/, tergantung stack final)
│   ├── assets/
│   │   └── images/     # foto & ikon (placeholder sampai foto asli tersedia)
│   ├── components/     # navbar, hero, service-card, faq-accordion, wa-float-button, dll.
│   └── index.[ext]     # halaman utama (single-page)
└── ...
```
*(Struktur persis menyesuaikan pilihan stack final — lihat Open Questions.)*

### 3.2 Architectural Assumptions
- Website adalah **single-page** (semua section di satu halaman, navigasi via scroll/anchor), sesuai brief awal — belum ada kebutuhan multi-halaman.
- Tidak ada kebutuhan data real-time atau server-side rendering untuk MVP.
- Semua "aksi" pengguna berakhir di WhatsApp (`wa.me` link atau `api.whatsapp.com/send`), bukan form internal yang perlu diproses server.
- Foto asli dari Pak Tri belum tersedia saat dokumen ini ditulis — semua slot gambar memakai placeholder (lihat `design.md` §7).

---

## 4. Functional Requirements (Feature Scope)

### 4.1 Navigasi & Layout Global
| Feature | Status |
|---|---|
| Navbar sticky (logo + tombol WA mini) | Planned |
| Floating WhatsApp button (persistent di semua scroll position) | Planned |
| Layout responsif mobile-first | Planned |

**Requirements:**
- Navbar harus tetap terlihat (sticky) saat halaman di-scroll, tanpa menutupi konten section pertama.
- Floating WA button harus selalu tampil di posisi fixed bottom-right pada semua ukuran layar, dengan area sentuh minimum 56×56px.
- Floating WA button dan navbar harus mengarah ke nomor WhatsApp yang sama, memakai format `https://wa.me/62XXXXXXXXXX` dengan pesan default yang bisa diisi otomatis (contoh: "Halo, saya ingin bertanya tentang layanan AC").
- Layout harus lolos uji tanpa horizontal scroll di breakpoint 375px, 768px, 1024px, dan 1440px.

#### Open Questions (pending)
- Nomor WhatsApp resmi Pak Tri untuk dipasang di seluruh tombol CTA — belum dikonfirmasi.
- Isi pesan default saat tombol WA ditekan — belum ditentukan redaksinya.

---

### 4.2 Hero Section
| Feature | Status |
|---|---|
| Headline + sub-headline layanan | Planned |
| CTA utama "Chat via WhatsApp" | Planned |
| Foto hero (placeholder) | Planned |

**Requirements:**
- Hero harus menampilkan dalam satu pandangan (above the fold, khususnya di HP): nama usaha, satu kalimat penjelas layanan, dan tombol CTA WA.
- Gambar hero memakai placeholder sampai foto asli dari Pak Tri tersedia (lihat `design.md` §7).

---

### 4.3 Area Layanan
| Feature | Status |
|---|---|
| Daftar chip/badge area cakupan | Planned |

**Requirements:**
- Menampilkan minimum 5 area layanan: Purwokerto, Banyumas, Purbalingga, Cilacap, Banjarnegara.
- Area layanan harus disebut ulang minimal di dua tempat: dekat hero dan di footer, supaya jelas terlihat oleh calon pelanggan dari luar area yang salah sasaran.

---

### 4.4 Katalog Layanan (Service Catalog)
| Feature | Status |
|---|---|
| Grid kartu layanan (2 kolom mobile) | Planned |
| Ikon per layanan (SVG) | Planned |

**Requirements:**
- Setiap kartu layanan menampilkan: ikon, nama layanan, deskripsi 1 baris.
- Daftar layanan awal mengikuti kategori umum (cuci AC, cuci besar/overhaul, isi/tambah freon, bongkar pasang AC, perbaikan AC) — **daftar final dan harga (jika ditampilkan) menunggu konfirmasi Pak Tri.**
- Kartu layanan tidak wajib punya harga tercantum di MVP (harga bisa disampaikan lewat chat WA) — keputusan menampilkan harga atau tidak masuk Open Questions.

#### Open Questions (pending)
- Daftar final jenis layanan yang ditawarkan Pak Tri (di luar dugaan awal berdasarkan referensi kliknclean).
- Apakah harga per layanan ditampilkan di website atau hanya disampaikan via chat.

---

### 4.5 Kenapa Pilih fazzaservice (Trust Section)
| Feature | Status |
|---|---|
| 3–4 poin kelebihan usaha (ikon + teks) | Planned |

**Requirements:**
- Menampilkan poin kredibilitas singkat (contoh: berpengalaman, respon cepat, harga transparan, garansi pengerjaan) — isi final menunggu konfirmasi klaim yang benar-benar bisa dijamin Pak Tri.

---

### 4.6 Cara Memesan (Proses 3 Langkah)
| Feature | Status |
|---|---|
| Section langkah pemesanan (chat → sepakati jadwal → teknisi datang) | Planned |

**Requirements:**
- Menjelaskan proses dalam maksimal 3 langkah, seluruhnya berujung pada kontak WhatsApp (tidak ada form internal untuk MVP).

---

### 4.7 Testimoni
| Feature | Status |
|---|---|
| Card testimoni pelanggan (placeholder) | Out of MVP (opsional, isi jika ada data) |

**Requirements:**
- Jika belum ada testimoni nyata dari Pak Tri saat rilis, section ini disembunyikan dulu (bukan diisi testimoni palsu) — ditampilkan begitu ada data asli.

#### Open Questions (pending)
- Apakah Pak Tri punya testimoni pelanggan yang bisa dipakai (dengan izin) di rilis pertama.

---

### 4.8 FAQ
| Feature | Status |
|---|---|
| Accordion FAQ (3–5 pertanyaan) | Planned |

**Requirements:**
- Minimal mencakup: area layanan, estimasi biaya (umum, tanpa angka pasti jika belum ditentukan), garansi pengerjaan, jenis AC yang dilayani.
- Accordion harus bisa dioperasikan dengan keyboard (accessible), bukan hanya klik/tap.

---

### 4.9 Footer & Kontak
| Feature | Status |
|---|---|
| Info kontak (WA, opsional telepon/email) | Planned |
| Area layanan (diulang) | Planned |
| Jam operasional | Planned |

**Requirements:**
- Footer minimal menampilkan: nama usaha, area layanan, kontak WA, dan jam operasional.

#### Open Questions (pending)
- Jam operasional pasti Pak Tri.
- Apakah ada nomor telepon/email terpisah selain WhatsApp yang ingin ditampilkan.

---

## 5. Non-Functional Requirements

| Category | Requirement |
|---|---|
| **Performance** | Website harus tetap ringan/cepat diakses di koneksi mobile biasa; gambar memakai lazy loading dan format modern (WebP) begitu foto asli tersedia. |
| **Availability** | Website harus bisa diakses 24/7 selama hosting aktif (tidak ada downtime terjadwal yang disengaja). |
| **Accessibility** | Kontras teks minimum 4.5:1, seluruh elemen interaktif minimum area sentuh 44×44px (floating WA button 56×56px), navigasi keyboard untuk accordion FAQ, `prefers-reduced-motion` dihormati. Detail lengkap ada di `design.md` §6. |
| **Compliance/Scope Control** | Tidak menyimpan data pribadi pengunjung di server manapun (tidak ada form yang submit ke backend) — seluruh komunikasi personal terjadi di WhatsApp, di luar website. |

*(Kategori Security, Validation, Data Integrity, dan Auditability sengaja tidak diisi — tidak relevan untuk website statis tanpa backend/data pengguna di MVP ini.)*

---

## 6. User Roles & Permissions

| Role | Capabilities |
|---|---|
| **Visitor** | Melihat seluruh konten publik, menekan tombol CTA menuju WhatsApp. Tidak ada login/akun. |
| **Pemilik Usaha (Pak Tri)** | Sumber konten (teks, foto, daftar layanan, harga) dan penerima seluruh chat WhatsApp dari tombol CTA. Tidak mengelola konten lewat panel admin di MVP — perubahan konten dilakukan lewat Neo. |
| **Developer (Neo)** | Mengelola kode, konten, dan deployment website. |

Tidak ada enforcement teknis berbasis role (tidak ada login/permission system) karena website MVP bersifat publik sepenuhnya tanpa area privat.

---

## 7. Delivery Plan — Phased Roadmap

Direncanakan 4 fase, seluruhnya berstatus `Planned` per tanggal dokumen ini (belum ada kode yang mulai dibangun).

| Phase | Name | Goal | Status |
|---|---|---|---|
| 1 | Finalisasi Requirement & Konten | Mengunci konten, daftar layanan, nomor WA, dan aset visual dari Pak Tri | Planned |
| 2 | Setup & Layout Dasar | Membangun struktur halaman, navbar, floating WA button, dan section kosong sesuai `design.md` | Planned |
| 3 | Pengisian Konten & Styling | Mengisi seluruh section dengan konten real/placeholder final, menerapkan color palette & tipografi | Planned |
| 4 | QA, Optimasi & Rilis | Uji responsif, aksesibilitas, performa, lalu deploy | Planned |

### 7.2 Development Workflow (per feature)
```
Requirement → Task → Development → Integration → Self Check → QA → Bug Fix → Done
```

### 7.4 Assumptions & Delivery Context
- Pengerjaan dilakukan oleh satu developer (Neo), tanpa tim terpisah untuk QA/desain — self-check merangkap QA di workflow di atas.
- Fase 1 adalah blocker untuk fase-fase berikutnya — konten final (nomor WA, daftar layanan, foto) dari Pak Tri dibutuhkan sebelum Fase 3 bisa selesai sepenuhnya (Fase 2 bisa jalan duluan dengan placeholder).

### 7.5 Engineering Phase Details

#### Phase 1 — Finalisasi Requirement & Konten
**Goal:** Mengunci seluruh data yang masih jadi Open Question di dokumen ini (nomor WA, daftar & harga layanan, jam operasional, testimoni jika ada, foto).
**Scope:** Komunikasi dengan Pak Tri, pengumpulan aset, konfirmasi tech stack & rencana hosting/deployment.
**Done when:** Seluruh item di bagian "Open Questions" pada dokumen ini sudah terjawab dan dicatat.

#### Phase 2 — Setup & Layout Dasar
**Goal:** Membangun kerangka halaman sesuai struktur di `design.md` §4 (Navbar → Hero → Area Layanan → ... → Footer → Floating WA Button).
**Scope:** Setup project, komponen kosong/berisi data placeholder, layout responsif dasar.
**Done when:** Semua section bisa di-scroll di mobile viewport (375px) tanpa horizontal scroll, dan floating WA button tampil konsisten di semua section.

#### Phase 3 — Pengisian Konten & Styling
**Goal:** Mengisi seluruh section dengan konten final/placeholder final, menerapkan color palette (`design.md` §2) dan tipografi (`design.md` §3).
**Scope:** Styling komponen, penerapan konten dari Fase 1, penggantian placeholder foto jika sudah tersedia.
**Done when:** Semua tombol CTA WA berfungsi membuka WhatsApp dengan nomor & pesan default yang benar, dan tampilan sesuai `design.md` di breakpoint 375px/768px/1024px.

#### Phase 4 — QA, Optimasi & Rilis
**Goal:** Memastikan website siap dipakai publik.
**Scope:** Uji aksesibilitas (kontras, area sentuh, keyboard nav), optimasi gambar (lazy load, WebP), uji di beberapa device nyata, deploy ke hosting final.
**Done when:** Website live di domain/hosting final, seluruh CTA WA teruji berfungsi dari perangkat mobile nyata, dan checklist di Bagian 10 selesai dicentang.

---

## 8. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Konten (foto, daftar layanan, harga) dari Pak Tri terlambat diberikan, menghambat Fase 3 | Fase 2 tetap jalan dengan placeholder; tetapkan tenggat pengumpulan konten di akhir Fase 1 |
| Nomor WhatsApp berubah setelah website live | Simpan nomor WA sebagai satu variabel/konstanta di kode (bukan hardcode berulang) supaya gampang diganti |
| Belum ada keputusan hosting/domain, berisiko menunda rilis Fase 4 | Diputuskan di Fase 1 sebagai bagian dari finalisasi requirement |
| Tanpa admin panel, setiap perubahan konten butuh Neo turun tangan langsung ke kode | Diterima sebagai batasan MVP; dipertimbangkan ulang di fase berikutnya jika frekuensi perubahan konten tinggi |

### 8.1 Dependencies
- Nomor WhatsApp resmi usaha (dari Pak Tri) — dibutuhkan sebelum Fase 3 selesai.
- Foto/aset visual asli — dibutuhkan sebelum Fase 4 (bisa dirilis dengan placeholder jika mendesak, lalu diganti belakangan).
- Keputusan hosting & domain — dibutuhkan sebelum Fase 4.

---

## 9. Definition of Done (MVP)

MVP dianggap selesai ketika **seluruh** kondisi berikut terpenuhi:

1. Calon pelanggan yang membuka website dari HP dapat melihat layanan yang ditawarkan, area cakupan, dan menekan tombol WA (baik di hero, section CTA penutup, maupun floating button) yang langsung membuka chat WhatsApp Pak Tri dengan pesan default terisi.
2. Pak Tri (sebagai pemilik usaha) telah mengecek dan menyetujui seluruh konten yang tampil (daftar layanan, area, klaim di section "Kenapa Pilih Kami").
3. **Quality:** Website lolos uji manual di breakpoint 375px, 768px, 1024px, dan 1440px, tanpa horizontal scroll, dan lolos cek kontras teks minimum 4.5:1.
4. **Integration:** Tidak ada data placeholder/dummy yang tersisa di konten teks (harga, nama layanan, area) — foto boleh masih placeholder jika memang disepakati untuk diisi belakangan.
5. **Release:** Website berhasil diakses publik dari domain/hosting final yang dipilih di Fase 1.
6. **Deferred:** Booking online, payment gateway, admin dashboard/CMS, sistem akun pelanggan, dan dukungan multi-kota secara eksplisit tidak termasuk di MVP ini (lihat Bagian 2.2).

---

## 10. Launch Checklist

Sebelum rilis, pastikan:
- [ ] Nomor WhatsApp final terpasang dan teruji di semua tombol CTA
- [ ] Seluruh konten (layanan, harga jika ditampilkan, area, jam operasional) sudah dikonfirmasi Pak Tri
- [ ] Foto placeholder sudah diganti foto asli (atau disepakati untuk menyusul)
- [ ] Uji responsif di minimal 2 device nyata (bukan hanya browser resize)
- [ ] Uji aksesibilitas dasar (kontras, ukuran tombol, keyboard nav FAQ)
- [ ] Domain & hosting aktif dan bisa diakses publik
- [ ] Floating WA button teruji tidak menutupi konten penting di semua section

**Launch sequence:** `Final QA → Persetujuan Pak Tri → Launch`

---

## 11. Post-Launch Maintenance

```
Masukan Pak Tri / Pelanggan → Catat sebagai perbaikan/permintaan → Prioritaskan → Kerjakan (Neo) → Cek ulang → Update Live
```

Maintenance mencakup: update daftar layanan/harga, penggantian foto, perbaikan bug tampilan, dan penyesuaian teks berdasarkan masukan Pak Tri — dilakukan manual oleh Neo selama belum ada admin panel.

---

## 12. Appendix — End-to-End Product Flow

**User flow:**
```
Buka website → Lihat layanan & area cakupan → (opsional: baca FAQ) → Tekan tombol WA → Chat dengan Pak Tri → Sepakati jadwal di luar website
```

**Admin flow (Pak Tri):**
```
Terima chat WA dari calon pelanggan → Diskusi kebutuhan & jadwal → Kerjakan service → (opsional) minta testimoni untuk update website
```

**System flow:**
```
Browser Visitor → Static Website (hosting) → Tombol CTA → wa.me link → Aplikasi WhatsApp
```
