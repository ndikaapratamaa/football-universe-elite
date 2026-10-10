# Football Universe Elite

Website khusus penggemar sepak bola: berita, statistik, kompetisi, kuis, mini game, dan leaderboard dalam satu tempat.

> **Status:** sedang dalam pengembangan. Untuk saat ini pengunjung melihat halaman "Segera Hadir" (lihat bagian [Mode "Segera Hadir"](#mode-segera-hadir)).

## Teknologi

- [Next.js 15](https://nextjs.org/) (App Router) dan React 19
- TypeScript
- Tailwind CSS 3
- Framer Motion untuk animasi
- Lucide React untuk ikon
- next-themes untuk tema gelap
- Radix UI Dialog untuk komponen dialog

## Fitur

- Layar sambutan (onboarding) sebelum masuk ke beranda
- Beranda dengan banyak bagian, antara lain: Hero, Live Match Ticker, Quick Stats, Player Spotlight, Daily Challenge, Feature Preview, Competitions, News, Leaderboard, Elite Labs, Your Journey, Elite Locker, Hall of Fame, Ultimate Challenge, Community, dan Why Football Universe
- Tampilan gelap bergaya kaca (glassmorphism) dengan pencahayaan ambient
- Halaman "Segera Hadir" yang bisa dinyalakan atau dimatikan tanpa mengubah kode

## Menjalankan di komputer

Butuh Node.js 18.18 atau yang lebih baru.

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

Saat pertama kali build, Next.js perlu internet untuk mengunduh font Inter dan Poppins dari Google Fonts.

```bash
npm run build   # build untuk produksi
npm run start   # jalankan hasil build
npm run lint    # cek kode
```

## Mode "Segera Hadir"

Halaman utama punya saklar lewat environment variable `NEXT_PUBLIC_COMING_SOON`.

| Nilai | Yang tampil |
|---|---|
| tidak diisi (default) | Halaman "Segera Hadir" |
| `false` | Web Football Universe yang asli |

Mencoba web asli di komputer: buat file `.env.local` di folder utama, isi:

```
NEXT_PUBLIC_COMING_SOON=false
```

Lalu jalankan ulang `npm run dev`.

## Deploy ke Vercel

1. Import repo ini di [Vercel](https://vercel.com/).
2. Pilih **Application Preset: Next.js** dan biarkan **Root Directory** di `./`.
3. Klik **Deploy**. Selama variabel belum diubah, yang tampil adalah halaman "Segera Hadir".

### Membuka web resmi

1. Buka **Settings → Environment Variables** di project Vercel.
2. Tambahkan `NEXT_PUBLIC_COMING_SOON` dengan nilai `false`.
3. Buka tab **Deployments** lalu klik **Redeploy**.

Redeploy wajib dilakukan karena nilai variabel dibaca saat proses build.

## Struktur folder

```
app/
  layout.tsx            Layout utama, font, tema
  page.tsx              Halaman utama + saklar "Segera Hadir"
  globals.css           Desain token dan kelas utilitas
components/
  coming-soon/          Halaman "Segera Hadir"
  layout/               Navbar, Footer, AppShell, pencahayaan, pengaturan
  onboarding/           Layar sambutan dan pilihan avatar
  sections/             Bagian-bagian beranda
  ui/                   Komponen dasar: Button, Dialog, GlassCard, BadgePill
data/                   Data statis
hooks/                  Custom hooks (profil, local storage, animasi angka)
lib/                    Fungsi bantu
public/                 Gambar dan logo
types/                  Tipe TypeScript bersama
```

## Dibuat oleh

[@ndikaapratamaa](https://github.com/ndikaapratamaa)
