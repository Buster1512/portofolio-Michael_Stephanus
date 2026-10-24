# Portfolio — Michael Stephanus (Next.js)

Portofolio statis, siap di-deploy GRATIS ke Vercel. Gaya desainnya remake dari
irfansabrian.vercel.app (struktur, tipografi besar, nuansa minimalis gelap),
dikombinasi dengan custom crosshair cursor dari styfensagala.vercel.app, dan
dipadu warna aksen sendiri (lime/hijau terang) biar gak sama persis.

## Menjalankan di lokal

```
npm install
npm run dev
```

Buka http://localhost:3000

## Cara edit isi portofolio

Semua teks (nama, ringkasan, skill, project, pengalaman, kontak) ada di SATU
file: `data/profile.js`. Buka file itu, edit teksnya, simpan — tampilannya
otomatis berubah (kalau `npm run dev` lagi jalan).

Gak ada admin panel / database di versi ini (beda sama versi Laravel yang
kemarin) — karena ini situs statis biar bisa di-hosting gratis permanen di
Vercel. Tiap kali mau update isi portofolio, caranya: edit `data/profile.js`
→ commit → push ke GitHub → Vercel otomatis build ulang & publish sendiri.

## Nambahin foto project

1. Taruh file foto di folder `public/projects/` (lihat `BACA-INI.txt` di
   dalamnya).
2. Buka `data/profile.js`, cari project yang sesuai, isi field `cover:`
   dengan path foto itu, contoh: `cover: "/projects/go-padel.jpg"`.

Kalau belum ada foto, kartunya otomatis nampilin placeholder "project
thumbnail" — gak error.

## Deploy GRATIS ke Vercel

1. Bikin repo baru di GitHub, push project ini ke situ:
   ```
   git init
   git add .
   git commit -m "init portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```
2. Buka https://vercel.com → Sign up / login pakai akun GitHub.
3. Klik **Add New... > Project**, pilih repo yang baru kamu push.
4. Framework Preset otomatis kedeteksi "Next.js" — biarin default, klik **Deploy**.
5. Tunggu ±1 menit, nanti dikasih link publik gratis (`namakamu.vercel.app`).

Setelah itu, SETIAP kali kamu `git push` ke branch `main`, Vercel otomatis
build & update situsnya sendiri — gak perlu deploy manual lagi.

## Struktur project

- `data/profile.js` — semua konten (edit di sini)
- `app/page.js` — layout halaman (Hero, About, Skills, Projects, Journey, Contact)
- `app/layout.js` — wrapper global (font, title tab browser)
- `app/globals.css` — semua styling
- `components/CrosshairCursor.js` — efek custom cursor crosshair
- `public/projects/` — taruh foto project di sini

## Catatan

- Kontennya aku susun dari CV kamu (PDF) — cek lagi di `data/profile.js`,
  kalau ada yang mau diubah/ditambah tinggal edit teksnya langsung.
- Crosshair cursor otomatis nonaktif di HP/tablet (device tanpa mouse),
  jadi gak ganggu pengalaman di mobile.
- Section "Journey" nyampur pengalaman kerja, internship, akademik, dan
  organisasi jadi satu timeline — urutannya tinggal diatur di array
  `journey` dalam `data/profile.js`.
