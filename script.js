/* ==================== GAMES DATA ==================== */
const GAMES = [
  {
    id: 1, num: "01", title: "Traffic Dodge", category: "arcade",
    icon: "🚗", color: "#f97316", status: "wip",
    desc: "Üstten bakış sonsuz trafik kaçış oyunu. Hız arttıkça zorluk da artar.",
    tags: ["2D", "Endless", "Arcade", "Highscore"],
    features: ["Object Pooling", "Hız artış sistemi", "En yüksek skor kaydı", "4 şerit trafik"],
  },
  {
    id: 2, num: "02", title: "Park It", category: "simulation",
    icon: "🅿️", color: "#3b82f6", status: "live",
    image: "assets/parkit-kart.jpg",
    cover: "assets/parkit-afis.jpg",
    link: "https://realyenal.itch.io/park-it",
    desc: "12 otoparklı park etme simülasyonu. Binek araçtan römorklu TIR'a, sağanaktan buz pistine — tarayıcıda ücretsiz oynanır.",
    tags: ["3D", "Simülasyon", "12 Bölüm", "WebGL", "TR + EN"],
    features: [
      "12 otopark · 4 araç: binek, kamyonet, otobüs, TIR + römork",
      "İki mod: Serbest ve Zaman Yarışı",
      "Hasar sistemi — motor, fren ve direksiyon bozulur; tamir istasyonunda onarılır",
      "Sağanak, buz pisti, gece vardiyası, katlı otopark, yaya trafiği",
      "Her gün gece yarısı değişen 'günün görevi'",
      "163 PlayMode testi · sıfır üçüncü taraf varlık, tüm içerik prosedürel üretim",
    ],
  },
  {
    id: 3, num: "03", title: "Drag Race Tap", category: "arcade",
    icon: "🏁", color: "#ef4444", status: "soon",
    desc: "Zamanlama tabanlı drag yarışı. Vites zamanlamasına dikkat et, rakibi geç.",
    tags: ["2D", "Timing", "Arcade", "1v1"],
    features: ["Vites timing mekaniği", "Boost bar", "Rakip AI", "Animation curves"],
  },
  {
    id: 4, num: "04", title: "Road Rage Runner", category: "arcade",
    icon: "💨", color: "#06b6d4", status: "soon",
    desc: "Yatay kaydırmalı endless runner. Yoldan çıkma, engelleri aş.",
    tags: ["2D", "Side-scroll", "Endless"],
    features: ["Parallax scrolling", "Prosedürel spawn", "Boost sistemi", "Coinler"],
  },
  {
    id: 5, num: "05", title: "Car Color Match", category: "puzzle",
    icon: "🎨", color: "#ec4899", status: "soon",
    desc: "Arabaları boyayarak renk kombinasyonu oluştur. Renkli bir bulmaca.",
    tags: ["Puzzle", "Renk", "Casual"],
    features: ["UI Toolkit", "PlayerPrefs kayıt", "Renk sistemi", "Seviye editörü"],
  },
  {
    id: 6, num: "06", title: "Mini Circuit Racer", category: "racing",
    icon: "🏎️", color: "#22c55e", status: "soon",
    desc: "3D pist yarışı. 3 AI rakip, tur sayacı, podyum ekranı.",
    tags: ["3D", "Circuit", "AI", "PC"],
    features: ["WheelCollider", "Cinemachine", "Tur sistemi", "3 AI rakip"],
  },
  {
    id: 7, num: "07", title: "Police Chase 2D", category: "arcade",
    icon: "🚔", color: "#3b82f6", status: "soon",
    desc: "Polisten kaç, barikatları aş. Zaman doldukça polis sayısı artar.",
    tags: ["2D", "Chase", "Kaçış"],
    features: ["AI takip", "Barikat engelleri", "State machine", "Timer sistemi"],
  },
  {
    id: 8, num: "08", title: "Demolition Derby", category: "arcade",
    icon: "💥", color: "#f59e0b", status: "soon",
    desc: "Çarpışma tahribat arenası. Rakipleri yok et, son ayakta kalan kazan.",
    tags: ["3D", "Physics", "Arena", "Destruction"],
    features: ["Rigidbody impulse", "Hasar sistemi", "Particle efektleri", "Arena AI"],
  },
  {
    id: 9, num: "09", title: "Fuel Run", category: "arcade",
    icon: "⛽", color: "#10b981", status: "soon",
    desc: "Yakıt biteceği yakın, collectible'ları topla. Yönetim ve hız dengesi.",
    tags: ["2D", "Resource", "Endless"],
    features: ["Yakıt yönetimi", "Trigger zones", "Resource management", "Difficulty curve"],
  },
  {
    id: 10, num: "10", title: "Car Dealer Idle", category: "simulation",
    icon: "🏪", color: "#6366f1", status: "soon",
    desc: "Araba satın al, yükselt, sat. Casual idle/clicker oyunu.",
    tags: ["Idle", "Clicker", "Casual", "Simülasyon"],
    features: ["ScriptableObjects", "Save sistemi", "Upgrade ağacı", "Passive income"],
  },
  {
    id: 11, num: "11", title: "Stunt Ramp", category: "arcade",
    icon: "🎯", color: "#f97316", status: "soon",
    desc: "Rampadan atla, havada rotasyon yap, puan topla. Fizik temelli stunts.",
    tags: ["3D", "Physics", "Stunt"],
    features: ["Ragdoll physics", "Rotasyon puanı", "Score multiplier", "Ramp sistemi"],
  },
  {
    id: 12, num: "12", title: "Night Drive", category: "arcade",
    icon: "🌙", color: "#7c3aed", status: "soon",
    desc: "Karanlık yolda sadece far ışığıyla sür. Atmosferik ve gerilimli.",
    tags: ["3D", "Atmosfer", "Arcade"],
    features: ["Light systems", "Fog efekti", "Post-processing", "Görüş alanı sınırı"],
  },
  {
    id: 13, num: "13", title: "Drift King", category: "racing",
    icon: "💫", color: "#f43f5e", status: "soon",
    desc: "3D drift puanlama oyunu. Drift açısı, duman efekti, kombo sistemi.",
    tags: ["3D", "Drift", "Racing", "Combo"],
    features: ["Custom fizik", "Shader Graph duman", "Drift açısı hesabı", "Combo multiplier"],
  },
  {
    id: 14, num: "14", title: "Car Mechanic Puzzle", category: "puzzle",
    icon: "🔧", color: "#0ea5e9", status: "soon",
    desc: "Araç tamir bulmacası. Parçaları söküp tak, arabayı çalıştır.",
    tags: ["Puzzle", "Mekanik", "Drag-drop"],
    features: ["Drag-drop UI", "Inventory sistemi", "Parça kataloğu", "Zamanlayıcı"],
  },
  {
    id: 15, num: "15", title: "Traffic Jam Manager", category: "puzzle",
    icon: "🚦", color: "#84cc16", status: "soon",
    desc: "Trafik yönetim bulmacası. Araçları doğru yönlendirip sıkışıklığı çöz.",
    tags: ["Puzzle", "Strateji", "Yönetim"],
    features: ["Grid sistemi", "Pathfinding", "Trafik AI", "Zorluk seviyeleri"],
  },
  {
    id: 16, num: "16", title: "Road Trip Survival", category: "simulation",
    icon: "🗺️", color: "#f59e0b", status: "soon",
    desc: "Şehirler arası yolculuk. Yakıt, para ve yemek yönet, karar ver.",
    tags: ["Simülasyon", "Survival", "Karar"],
    features: ["Event sistemi", "Random olaylar", "Kaynak yönetimi", "Karar ağacı"],
  },
  {
    id: 17, num: "17", title: "Car Showroom 3D", category: "simulation",
    icon: "✨", color: "#a78bfa", status: "soon",
    desc: "3D araba vitrini. Araca bak, renk ve jant değiştir, özelleştir.",
    tags: ["3D", "Özelleştirme", "Vitrin"],
    features: ["Runtime material swap", "3D UI", "Döndürme kontrolü", "Renk/jant sistemi"],
  },
  {
    id: 18, num: "18", title: "Rally Championship", category: "racing",
    icon: "🏆", color: "#f97316", status: "soon",
    desc: "5 pistli tam 3D ralli yarışması. Sıralama tablosu, replay sistemi.",
    tags: ["3D", "Championship", "Racing", "Replay"],
    features: ["5 pist", "Replay sistemi", "Liderlik tablosu", "Hava durumu"],
  },
  {
    id: 19, num: "19", title: "Open City Driver", category: "simulation",
    icon: "🌆", color: "#38bdf8", status: "soon",
    desc: "Küçük açık dünya şehri. Görevler al, free roam yap, keşfet.",
    tags: ["3D", "Açık Dünya", "Görevler", "Free Roam"],
    features: ["Açık dünya şehir", "Görev sistemi", "NPC trafik", "Mini harita"],
  },
];

/* ==================== KOLEKSİYONER GALERİ ==================== */
const SHOTS = [
  { id: "inceleme",  title: "İnceleme modu",  text: "Kartoneti eline al, döndür, yakınlaş. Her kusur pazarlıkta işine yarar.", big: true },
  { id: "oyuncakci", title: "Oyuncakçı",      text: "Her şey mahallenin oyuncakçısında başlar; raflar her sabah yenilenir." },
  { id: "pazarlik",  title: "Pazarlık",       text: "Her esnafın bir kişiliği var. Güveni artarsa fiyat iner, sabrı biterse kapı kapanır." },
  { id: "pazar",     title: "Antika pazarı",  text: "Ucuz ama belirsiz: acemi tezgâhçı elindeki nadir parçanın değerini bilmeyebilir." },
  { id: "cay",       title: "Çay ocağı",      text: "Çınar gölgesi, sokak kedileri, sarı taksiler." },
  { id: "muze",      title: "Müzen",          text: "Satmak mı, sergilemek mi? Vitrinler doldukça müze kademen yükselir." },
  { id: "atolye",    title: "Atölye",         text: "Hurdayı sök, zımparala, astarla, boya; aslına uygun ya da kendi renginle." },
  { id: "sokak",     title: "Mahalle",        text: "13 mekân, yükleme ekranı yok; her yere yürüyerek gidiyorsun." },
  { id: "hava",      title: "Kuşbakışı",      text: "Mahalle bir dekor değil, oyunun ekonomisi." },
];

const gallery = document.getElementById('kolGallery');
gallery.innerHTML = SHOTS.map((s, i) => `
  <button class="shot reveal${s.big ? ' shot--big' : ''}" data-i="${i}" aria-label="${s.title}: büyüt">
    <img src="assets/kol/g_${s.id}${s.big ? '' : '_k'}.jpg" alt="${s.title}: ${s.text}" loading="lazy">
    <span>${s.title}</span>
  </button>
`).join('');

const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCap = document.getElementById('lbCap');
let lbIndex = 0;

function showShot(i) {
  lbIndex = (i + SHOTS.length) % SHOTS.length;
  const s = SHOTS[lbIndex];
  lbImg.src = `assets/kol/g_${s.id}.jpg`;
  lbImg.alt = s.title;
  lbCap.innerHTML = `<b>${s.title}</b>${s.text}`;
}
function openLightbox(i) {
  showShot(i);
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('lbClose').focus();
}
function closeLightbox() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

gallery.querySelectorAll('.shot').forEach(el => {
  el.addEventListener('click', () => openLightbox(parseInt(el.dataset.i)));
});
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => showShot(lbIndex - 1));
document.getElementById('lbNext').addEventListener('click', () => showShot(lbIndex + 1));
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showShot(lbIndex - 1);
  if (e.key === 'ArrowRight') showShot(lbIndex + 1);
});

/* ==================== TYPEWRITER ==================== */
const phrases = [
  "Oyuncak arabalardan gerçek arabaya.",
  "Rafı tara, kusuru gör, pazarlığını yap.",
  "Bir İstanbul mahallesinde diecast avı.",
  "Steam Erken Erişim · 2027 İlkbahar",
];
let pi = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const phrase = phrases[pi];
  if (!deleting) {
    tw.innerHTML = phrase.slice(0, ci + 1) + '<span class="cursor"></span>';
    ci++;
    if (ci === phrase.length) { deleting = true; setTimeout(type, 1800); return; }
    setTimeout(type, 80);
  } else {
    tw.innerHTML = phrase.slice(0, ci - 1) + '<span class="cursor"></span>';
    ci--;
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      setTimeout(type, 300);
      return;
    }
    setTimeout(type, 40);
  }
}
setTimeout(type, 800);

/* ==================== STAT COUNTER ==================== */
function animateCount(el) {
  const target = parseInt(el.dataset.to);
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

/* ==================== SCROLL REVEAL ==================== */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

const countEls = document.querySelectorAll('.count');
const countObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { animateCount(e.target); countObs.unobserve(e.target); }
  });
}, { threshold: 0.5 });
countEls.forEach(el => countObs.observe(el));

/* ==================== NAV SCROLL ==================== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

/* ==================== MOBILE NAV ==================== */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ==================== GAMES GRID ==================== */
function statusLabel(s) {
  if (s === 'live') return '<span class="badge badge--live">Yayında</span>';
  if (s === 'done') return '<span class="badge badge--done">Tamamlandı</span>';
  if (s === 'wip')  return '<span class="badge badge--wip">Yapım Aşamasında</span>';
  return '<span class="badge badge--soon">Çok Yakında</span>';
}

function renderGames(filter) {
  const grid = document.getElementById('gamesGrid');
  const filtered = filter === 'all' ? GAMES : GAMES.filter(g => g.category === filter);
  grid.innerHTML = filtered.map((g, i) => `
    <div class="game-card" data-id="${g.id}" style="animation-delay:${i * 0.06}s">
      <div class="game-card__thumb" style="background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.12))">
        ${g.image
          ? `<img src="${g.image}" alt="${g.title}" class="game-card__img" loading="lazy">`
          : `<span style="position:relative;z-index:1">${g.icon}</span>`}
      </div>
      <div class="game-card__body">
        <div class="game-card__meta">
          <span class="game-card__num"># ${g.num}</span>
          ${statusLabel(g.status)}
        </div>
        <h3 class="game-card__title">${g.title}</h3>
        <p class="game-card__desc">${g.desc}</p>
        <div class="game-card__tags">
          ${g.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });
}

/* ==================== FILTER ==================== */
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGames(btn.dataset.filter);
  });
});

renderGames('all');

/* ==================== MODAL ==================== */
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function openModal(id) {
  const g = GAMES.find(x => x.id === id);
  if (!g) return;
  modalContent.innerHTML = `
    <div class="modal-thumb${g.cover ? ' modal-thumb--img' : ''}" style="background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.16))">
      ${g.cover ? `<img src="${g.cover}" alt="${g.title}">` : `<span>${g.icon}</span>`}
    </div>
    <div class="modal-body">
      <div class="modal-meta">
        <span class="modal-num"># ${g.num}</span>
        ${statusLabel(g.status)}
      </div>
      <h2 class="modal-title">${g.title}</h2>
      <p class="modal-desc">${g.desc}</p>
      <div class="modal-tags">
        ${g.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="modal-features">
        <h4>Teknik Özellikler</h4>
        <ul>${g.features.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
      ${g.link
        ? `<a href="${g.link}" target="_blank" rel="noopener" class="btn btn--primary btn--wide">itch.io'da Ücretsiz Oyna →</a>`
        : g.status === 'done' || g.status === 'wip'
          ? `<a href="#" class="btn btn--primary btn--wide">Oyunu Oyna →</a>`
          : `<button class="btn btn--ghost btn--wide" disabled style="opacity:.4;cursor:not-allowed">Çok Yakında</button>`
      }
    </div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ==================== CONTACT FORM ==================== */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const f = this.elements;
  const subject = f.konu.value.trim() || `Yerle 1 sitesinden mesaj — ${f.ad.value.trim()}`;
  const body = `${f.mesaj.value.trim()}

${f.ad.value.trim()} · ${f.eposta.value.trim()}`;
  window.location.href = `mailto:yenalkocer06006@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('formSuccess').classList.add('show');
});
