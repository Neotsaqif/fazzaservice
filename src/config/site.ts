export const SITE_CONFIG = {
  name: 'fazzaservice',
  tagline: 'Jasa Service & Bongkar Pasang AC Purwokerto & Sekitarnya',
  description: 'Layanan service, cuci, isi freon, dan bongkar pasang AC profesional, terpercaya, dan bergaransi untuk area Purwokerto, Banyumas, Purbalingga, Cilacap, dan Banjarnegara.',
  owner: 'Pak Tri',
  whatsappNumber: '6281234567890', // Placeholder nomor Pak Tri — mudah diganti di satu tempat
  defaultMessage: 'Halo fazzaservice, saya ingin bertanya dan memesan layanan service AC.',
  areas: [
    'Purwokerto',
    'Banyumas',
    'Purbalingga',
    'Cilacap',
    'Banjarnegara'
  ],
  workingHours: 'Senin - Minggu: 08.00 - 17.00 WIB',
  services: [
    {
      id: 'cuci-ac-split',
      title: 'Cuci AC Split / Standar',
      description: 'Pembersihan unit indoor & outdoor secara menyeluruh untuk menjaga AC tetap dingin & hemat listrik.',
      iconName: 'Fan'
    },
    {
      id: 'cuci-besar-overhaul',
      title: 'Cuci Besar (Overhaul)',
      description: 'Pembersihan total dengan penurunan unit indoor untuk kasus AC sangat kotor atau berbau tidak sedap.',
      iconName: 'Sparkles'
    },
    {
      id: 'isi-tambah-freon',
      title: 'Isi / Tambah Freon',
      description: 'Pengisian ulang & penambahan freon (R22, R32, R410a) sesuai standar jenis AC Anda.',
      iconName: 'Gauge'
    },
    {
      id: 'bongkar-pasang-ac',
      title: 'Bongkar Pasang AC',
      description: 'Jasa bongkar, pasang, atau relokasi unit AC rumah/kantor dengan pengerjaan rapi & teruji.',
      iconName: 'Wrench'
    },
    {
      id: 'perbaikan-ac',
      title: 'Perbaikan AC Rusak',
      description: 'Penanganan AC bocor air, mati total, tidak dingin, atau indikator error oleh teknisi berpengalaman.',
      iconName: 'ShieldAlert'
    }
  ],
  whyUs: [
    {
      title: 'Berpengalaman',
      description: 'Teknisi profesional dan terbiasa menangani berbagai merk dan tipe AC.',
      iconName: 'Award'
    },
    {
      title: 'Respon Cepat',
      description: 'Konsultasi dan tanggapan pesan cepat via WhatsApp untuk kemudahan Anda.',
      iconName: 'Clock'
    },
    {
      title: 'Harga Transparan',
      description: 'Estimasi biaya diinformasikan di awal secara jujur tanpa biaya tersembunyi.',
      iconName: 'Tag'
    },
    {
      title: 'Garansi Pengerjaan',
      description: 'Jaminan garansi servis untuk memberikan rasa aman dan tenang bagi pelanggan.',
      iconName: 'ShieldCheck'
    }
  ],
  orderSteps: [
    {
      step: 1,
      title: 'Chat via WhatsApp',
      description: 'Hubungi kami dan sampaikan keluhan atau layanan AC yang Anda butuhkan.'
    },
    {
      step: 2,
      title: 'Sepakati Jadwal & Estimasi',
      description: 'Tentukan waktu kedatangan teknisi dan estimasi biaya penanganan.'
    },
    {
      step: 3,
      title: 'Teknisi Datang & Mengerjakan',
      description: 'Teknisi siap datang ke lokasi Anda dan melakukan pengerjaan dengan rapi.'
    }
  ],
  testimonials: [
    {
      id: 1,
      name: 'Pak Budi',
      location: 'Purwokerto',
      rating: 5,
      comment: 'Pelayanan cepat dan rapi. AC rumah yang tadinya kurang dingin sekarang sejuk lagi. Rekomendasi banget!'
    },
    {
      id: 2,
      name: 'Ibu Ratna',
      location: 'Purbalingga',
      rating: 5,
      comment: 'Teknisi ramah dan komunikatif. Estimasi biayanya jelas sebelum pengerjaan. Sangat puas!'
    },
    {
      id: 3,
      name: 'Mas Herman',
      location: 'Banyumas',
      rating: 5,
      comment: 'Bongkar pasang AC di kantor dilakukan dengan sangat bersih dan teliti. Garansinya bikin tenang.'
    }
  ],
  faqs: [
    {
      question: 'Wilayah mana saja yang dilayani oleh fazzaservice?',
      answer: 'Kami melayani area Purwokerto, Banyumas, Purbalingga, Cilacap, dan Banjarnegara.'
    },
    {
      question: 'Bagaimana cara menentukan estimasi biaya servis?',
      answer: 'Estimasi biaya akan kami sampaikan secara transparan lewat chat WhatsApp setelah Anda menjelaskan keluhan atau jenis layanan yang dibutuhkan.'
    },
    {
      question: 'Apakah ada garansi setelah pengerjaan?',
      answer: 'Ya, setiap pengerjaan service maupun bongkar pasang AC disertai garansi pengerjaan untuk kenyamanan Anda.'
    },
    {
      question: 'Jenis dan merk AC apa saja yang bisa diperbaiki?',
      answer: 'Kami melayani semua jenis AC (Split, Inverter, Standar) dan berbagai merk populer (Daikin, Panasonic, Sharp, LG, Samsung, Gree, dll).'
    }
  ]
};

export const getWhatsAppLink = (customMessage?: string): string => {
  const text = customMessage || SITE_CONFIG.defaultMessage;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
