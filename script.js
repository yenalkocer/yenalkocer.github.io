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
    id: 2, num: "02", title: "Parking Master", category: "puzzle",
    icon: "🅿️", color: "#8b5cf6", status: "soon",
    desc: "10 seviyeli 2D park etme bulmacası. Dar alanlarda hassas manevra.",
    tags: ["2D", "Puzzle", "10 Seviye"],
    features: ["2D Fizik", "Collider triggers", "Seviye sistemi", "Yıldız derecelendirme"],
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

/* ==================== CANVAS ANIMATION ==================== */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

class Particle {
  constructor() { this.reset(true); }
  reset(initial) {
    const spread = initial ? Math.random() : 0;
    this.x = W / 2;
    this.y = H / 2;
    this.angle = Math.random() * Math.PI * 2;
    this.dist = initial ? Math.random() * Math.max(W, H) * 0.7 : 0;
    this.speed = Math.random() * 2.5 + 1;
    this.len = Math.random() * 60 + 10;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.isAccent = Math.random() > 0.85;
    if (initial) {
      this.x = W / 2 + Math.cos(this.angle) * this.dist;
      this.y = H / 2 + Math.sin(this.angle) * this.dist;
    }
  }
  update() {
    this.dist += this.speed;
    this.x = W / 2 + Math.cos(this.angle) * this.dist;
    this.y = H / 2 + Math.sin(this.angle) * this.dist;
    if (this.dist > Math.max(W, H) * 0.85) this.reset(false);
  }
  draw() {
    const progress = this.dist / (Math.max(W, H) * 0.85);
    const alpha = Math.min(progress * 3, 1) * this.opacity;
    const trailLen = Math.min(progress * this.len, this.len);
    const tx = this.x - Math.cos(this.angle) * trailLen;
    const ty = this.y - Math.sin(this.angle) * trailLen;

    const grad = ctx.createLinearGradient(tx, ty, this.x, this.y);
    const color = this.isAccent ? `rgba(249,115,22,${alpha})` : `rgba(255,255,255,${alpha})`;
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(1, color);

    ctx.beginPath();
    ctx.strokeStyle = grad;
    ctx.lineWidth = this.isAccent ? 1.5 : 0.8;
    ctx.moveTo(tx, ty);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  }
}

function initParticles() {
  particles = Array.from({ length: 180 }, () => new Particle());
}

function animateCanvas() {
  ctx.fillStyle = 'rgba(8,9,16,0.15)';
  ctx.fillRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateCanvas);
}

resize();
initParticles();
animateCanvas();
window.addEventListener('resize', () => { resize(); initParticles(); });

/* ==================== TYPEWRITER ==================== */
const phrases = [
  "Araba Oyunları Uzmanı",
  "Unity C# Developer",
  "Yarış Simülasyonu",
  "2D & 3D Game Dev",
  "Freelance Geliştirici",
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
  if (s === 'done') return '<span class="badge badge--done">Tamamlandı</span>';
  if (s === 'wip')  return '<span class="badge badge--wip">Yapım Aşamasında</span>';
  return '<span class="badge badge--soon">Çok Yakında</span>';
}

function renderGames(filter) {
  const grid = document.getElementById('gamesGrid');
  const filtered = filter === 'all' ? GAMES : GAMES.filter(g => g.category === filter);
  grid.innerHTML = filtered.map((g, i) => `
    <div class="game-card" data-id="${g.id}" style="animation-delay:${i * 0.06}s">
      <div class="game-card__thumb" style="background: linear-gradient(135deg, ${g.color}22, ${g.color}44)">
        <span style="position:relative;z-index:1">${g.icon}</span>
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
    <div class="modal-thumb" style="background: linear-gradient(135deg, ${g.color}33, ${g.color}55)">
      <span>${g.icon}</span>
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
      ${g.status === 'done' || g.status === 'wip'
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
  const btn = this.querySelector('button[type=submit]');
  btn.textContent = 'Gönderiliyor...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Mesaj Gönder →';
    btn.disabled = false;
    this.reset();
    document.getElementById('formSuccess').classList.add('show');
    setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 4000);
  }, 1200);
});
