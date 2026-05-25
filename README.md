# Erlangga Yehezkiel — Portfolio

Personal portfolio website untuk **Erlangga Yehezkiel M** — Performance Marketing Specialist.

---

## 🚀 Quick Start

### Opsi 1 — Node.js (tanpa install apapun)
```bash
node server.js
# Buka: http://localhost:3000
```

### Opsi 2 — Python (built-in, tanpa install)
```bash
python3 server.py
# Buka: http://localhost:3000
```

### Opsi 3 — Port custom
```bash
PORT=8080 node server.js
PORT=8080 python3 server.py
```

---

## 📁 Struktur File

```
portfolio-site/
├── index.html      ← Portfolio utama (semua-in-one)
├── server.js       ← Server Node.js (zero dependencies)
├── server.py       ← Server Python (built-in library)
├── package.json    ← Metadata project
└── README.md       ← Dokumentasi ini
```

---

## 🌐 Deploy

### Vercel (gratis)
```bash
npm i -g vercel
vercel
```

### Netlify Drop
Drag & drop folder ini ke [netlify.com/drop](https://app.netlify.com/drop)

### GitHub Pages
Push ke GitHub → Settings → Pages → Deploy from branch

### VPS / Cloud
```bash
# Install PM2 untuk keep-alive
npm i -g pm2
pm2 start server.js --name "erlangga-portfolio"
pm2 save
```

---

## ✏️ Customisasi

Semua konten ada di `index.html`. Cari bagian yang ingin diubah:
- **Hero text** → cari `hero-title`
- **Stats** → cari `stat-card`
- **Case studies** → cari `case-item`
- **Contact info** → cari `contact-card`
- **Warna** → edit CSS variables di `:root { ... }`

---

Built with pure HTML/CSS/JS — no framework, no build step needed.
