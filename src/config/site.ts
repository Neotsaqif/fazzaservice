export const SITE_CONFIG = {
  name: "fazzaservice",
  tagline: "Jasa Service & Bongkar Pasang AC Purwokerto & Sekitarnya",
  description:
    "Layanan service, cuci, isi freon, dan bongkar pasang AC profesional, terpercaya, dan bergaransi untuk area Purwokerto, Banyumas, Purbalingga, Cilacap, dan Banjarnegara.",
  owner: "Pak Tri",
  whatsappNumber: "6281992071526", // Nomor WhatsApp
  defaultMessage:
    "Halo fazzaservice, saya ingin bertanya dan memesan layanan service AC.",
  areas: ["Purwokerto", "Banyumas", "Purbalingga", "Cilacap", "Banjarnegara"],
  workingHours: "Senin - Minggu: 08.00 - 17.00 WIB",
  services: [
    {
      id: "cuci-ac",
      title: "Cuci AC",
      description:
        "Servis AC dibersihkan biar dingin lagi & gak boros listrik.",
      prices: [
        { label: "½ PK", price: "Rp85.000" },
        { label: "2 PK", price: "Rp100.000" },
      ],
      iconName: "Fan",
    },
    {
      id: "pasang-ac",
      title: "Jasa Pasang AC",
      description:
        "AC baru Anda dipasang oleh teknisi berpengalaman, rapi & aman.",
      prices: [
        { label: "½ PK", price: "Rp250.000" },
        { label: "2 PK", price: "Rp380.000" },
      ],
      iconName: "Wrench",
    },
    {
      id: "pasang-ac-material",
      title: "Jasa Pasang AC + Material",
      description:
        "Gak perlu beli apa-apa lagi — pipa, kabel, dan bracket sudah termasuk.",
      prices: [
        { label: "½ PK", price: "Mulai Rp650.000" },
        { label: "2 PK", price: "Mulai Rp880.000" },
      ],
      iconName: "Package",
    },
    {
      id: "bongkar-pasang-ac",
      title: "Jasa Bongkar Pasang AC",
      description:
        "Mau pindah rumah atau ganti posisi AC? Kami bongkar & pasang kembali dengan aman.",
      prices: [
        { label: "½ PK", price: "Rp350.000" },
        { label: "2 PK", price: "Rp500.000" },
      ],
      iconName: "Settings",
    },
    {
      id: "tambah-freon",
      title: "Tambah Freon AC",
      description:
        "AC nyala tapi kurang dingin? Tambah freon aja, gak perlu bongkar.",
      prices: [
        { label: "½ PK", price: "Rp200.000" },
        { label: "2 PK", price: "Rp380.000" },
      ],
      iconName: "Gauge",
    },
    {
      id: "isi-freon-dari-nol",
      title: "Isi Freon dari 0 + Jasa Pasang AC",
      description:
        "Untuk AC yang freon-nya benar-benar habis, sekaligus pemasangan unitnya.",
      prices: [
        { label: "½ PK", price: "Rp380.000" },
        { label: "2 PK", price: "Rp680.000" },
      ],
      iconName: "ShieldAlert",
    },
  ],
  whyUs: [
    {
      title: "Berpengalaman",
      description:
        "Teknisi profesional dan terbiasa menangani berbagai merk dan tipe AC.",
      iconName: "Award",
    },
    {
      title: "Respon Cepat",
      description:
        "Konsultasi dan tanggapan pesan cepat via WhatsApp untuk kemudahan Anda.",
      iconName: "Clock",
    },
    {
      title: "Harga Transparan",
      description:
        "Estimasi biaya diinformasikan di awal secara jujur tanpa biaya tersembunyi.",
      iconName: "Tag",
    },
    {
      title: "Garansi Pengerjaan",
      description:
        "Jaminan garansi servis untuk memberikan rasa aman dan tenang bagi pelanggan.",
      iconName: "ShieldCheck",
    },
  ],
  orderSteps: [
    {
      step: 1,
      title: "Chat via WhatsApp",
      description:
        "Hubungi kami dan sampaikan keluhan atau layanan AC yang Anda butuhkan.",
    },
    {
      step: 2,
      title: "Sepakati Jadwal & Estimasi",
      description:
        "Tentukan waktu kedatangan teknisi dan estimasi biaya penanganan.",
    },
    {
      step: 3,
      title: "Teknisi Datang & Mengerjakan",
      description:
        "Teknisi siap datang ke lokasi Anda dan melakukan pengerjaan dengan rapi.",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Pak Budi",
      location: "Purwokerto",
      rating: 5,
      comment:
        "Pelayanan cepat dan rapi. AC rumah yang tadinya kurang dingin sekarang sejuk lagi. Rekomendasi banget!",
    },
    {
      id: 2,
      name: "Ibu Ratna",
      location: "Purbalingga",
      rating: 5,
      comment:
        "Teknisi ramah dan komunikatif. Estimasi biayanya jelas sebelum pengerjaan. Sangat puas!",
    },
    {
      id: 3,
      name: "Mas Herman",
      location: "Banyumas",
      rating: 5,
      comment:
        "Bongkar pasang AC di kantor dilakukan dengan sangat bersih dan teliti. Garansinya bikin tenang.",
    },
  ],
  faqs: [
    {
      question: "Wilayah mana saja yang dilayani oleh fazzaservice?",
      answer:
        "Kami melayani area Purwokerto, Banyumas, Purbalingga, Cilacap, dan Banjarnegara.",
    },
    {
      question: "Bagaimana cara menentukan estimasi biaya servis?",
      answer:
        "Estimasi biaya akan kami sampaikan secara transparan lewat chat WhatsApp setelah Anda menjelaskan keluhan atau jenis layanan yang dibutuhkan.",
    },
    {
      question: "Apakah ada garansi setelah pengerjaan?",
      answer:
        "Ya, setiap pengerjaan service maupun bongkar pasang AC disertai garansi pengerjaan untuk kenyamanan Anda.",
    },
    {
      question: "Jenis dan merk AC apa saja yang bisa diperbaiki?",
      answer:
        "Kami melayani semua jenis AC (Split, Inverter, Standar) dan berbagai merk populer (Daikin, Panasonic, Sharp, LG, Samsung, Gree, dll).",
    },
  ],
};

export const getWhatsAppLink = (customMessage?: string): string => {
  const text = customMessage || SITE_CONFIG.defaultMessage;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
