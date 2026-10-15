/* ==================== AYARLAR ====================
   Fiyat, süre ve iletişim bilgileri buradan değişir; sayfa bunlardan üretilir. */
const MAIL = 'yenalkocer06006@gmail.com';
const INSTAGRAM = ''; // örn: 'https://instagram.com/kullaniciadi' — boşsa "Takip Et" düğmesi gizlenir

const PACKS = [
  {
    id: 'tasarim', icon: '📐', name: 'Oyun Tasarımı',
    price: '₺3.000 – 7.500', time: '1 hafta',
    desc: 'Fikrini kâğıda dökelim: kim oynar, ne yapar, neden tekrar oynar.',
    items: ['Oyun tasarım dokümanı (GDD)', 'Ekran taslakları', 'Kapsam ve maliyet planı', 'Yapımcıya ya da yatırımcıya hazır'],
  },
  {
    id: 'mini', icon: '🎁', name: 'Mini Oyun',
    price: '₺7.500 – 20.000', time: '1 – 2 hafta', hot: true,
    desc: 'Hediye ya da kampanya için tek mekanikli, bağlantıyla açılan oyun.',
    items: ['Tek mekanik, 1–3 dakikalık tur', 'Kişiye özel isim, foto, mesaj', 'Tarayıcıda ve telefonda çalışır', 'Paylaşılabilir bağlantı ya da QR'],
  },
  {
    id: 'marka', icon: '🏁', name: 'Marka Oyunu / Prototip',
    price: '₺20.000 – 60.000', time: '3 – 6 hafta',
    desc: 'Birkaç bölümlü, cilalı, ölçülebilir oyun ya da yatırımcı demosu.',
    items: ['Birden çok bölüm ya da mod', 'Skor tablosu, marka teması', 'Ses, efekt, arayüz cilası', 'Mobil, PC ya da etkinlik ekranı'],
  },
  {
    id: 'tam', icon: '🚀', name: 'Tam Oyun',
    price: 'Teklifle', time: '2 ay +',
    desc: 'Steam ya da mağazalarda satılacak, uçtan uca bir oyun.',
    items: ['Tasarımdan yayına tüm süreç', 'Kilometre taşlı ödeme', 'Mağaza sayfası ve tanıtım görselleri', 'Yayın sonrası güncelleme desteği'],
  },
];

const FAQ = [
  ['Kod ya da oyun bilgim yok, yine de sipariş verebilir miyim?',
   'Elbette. Siparişlerin çoğu tek cümlelik bir fikirle başlıyor. Teknik kararları biz veriyoruz, sana her adımda sade bir dille anlatıyoruz.'],
  ['Fiyat neye göre belirleniyor?',
   'Oyunun büyüklüğüne, platform sayısına, özel çizim ya da ses gerekip gerekmediğine ve teslim tarihine göre. Paketlerdeki rakamlar tahminidir; kesin fiyatı ilk görüşmeden sonra yazılı olarak veriyoruz.'],
  ['Ödeme nasıl yapılıyor?',
   'Küçük işlerde yarısı başta, yarısı teslimde. Büyük projelerde ödeme kilometre taşlarına bölünür; her aşamanın sonunda oynanabilir bir sürüm görürsün.'],
  ['Oyunun hakları kimde olacak?',
   'Ödeme tamamlandığında oyun senindir. Kaynak kodun da teslim edilmesini istiyorsan teklifte ayrıca belirtiyoruz. Yerle 1, yalnız iznin olursa işi portfolyosunda gösterir.'],
  ['Fikrimi çalarlar mı diye endişeliyim.',
   'Fikrin yalnız bu iş için kullanılır. İstersen görüşmeden önce gizlilik sözleşmesi (NDA) imzalarız.'],
  ['Değişiklik isteyebilir miyim?',
   'Evet. Her hafta oynanabilir bir sürüm görüyorsun; teklifteki kapsam içinde kalan değişiklikler ücretsiz. Kapsamı büyüten istekler için önce ek süre ve fiyatı konuşuruz.'],
  ['Instagram serisine fikrim seçilirse ne oluyor?',
   'Oyunu bir günde yapıp sürecin videosunu çekiyoruz, oyun tarayıcıda ücretsiz oynanır. Oyunun daha büyük bir sürümünü istersen normal sipariş olarak devam edebiliriz.'],
  ['Neden ayda yalnız iki proje alıyorsunuz?',
   'Kendi oyunlarımızı da geliştiren küçük bir stüdyoyuz. Az iş almak, aldığımız işe gereken özeni göstermemizi sağlıyor. Takvim doluysa sıradaki boş ayı söylüyoruz.'],
];

/* ==================== PAKETLER ==================== */
document.getElementById('packs').innerHTML = PACKS.map(p => `
  <article class="pack reveal${p.hot ? ' pack--hot' : ''}">
    ${p.hot ? '<span class="pack__hot">En çok istenen</span>' : ''}
    <div class="pack__icon">${p.icon}</div>
    <h3 class="pack__name">${p.name}</h3>
    <p class="pack__desc">${p.desc}</p>
    <div class="pack__price"><small>tahmini</small><b>${p.price}</b><span>${p.time}</span></div>
    <ul class="pack__items">${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
    <a href="#teklif" class="btn ${p.hot ? 'btn--primary' : 'btn--ghost'} btn--wide" data-pick-paket="${p.id}">Teklif Al</a>
  </article>
`).join('');

document.getElementById('paketOpts').innerHTML = PACKS.map(p => `
  <label><input type="radio" name="paket" value="${p.name}" data-id="${p.id}"><span>${p.icon} ${p.name}<small>${p.price}</small></span></label>
`).join('') + `<label><input type="radio" name="paket" value="Bilmiyorum, siz önerin"><span>🤔 Bilmiyorum<small>siz önerin</small></span></label>`;

/* ==================== SSS ==================== */
document.getElementById('faq').innerHTML = FAQ.map(([q, a]) => `
  <details class="faq reveal"><summary>${q}</summary><p>${a}</p></details>
`).join('');

/* ==================== INSTAGRAM ==================== */
if (INSTAGRAM) {
  const il = document.getElementById('instaLink');
  il.href = INSTAGRAM;
  il.hidden = false;
}

/* ==================== HERO FİKİR KARTI: örnekler arasında döner ==================== */
const SAMPLES = [
  { t: 'Babamın Taksisi', l: "Babamın 30 yıllık taksisiyle İstanbul'da müşteri kaptığım, doğum gününde hediye edeceğim mini oyun.", c: ['Hediye', 'Telefon', 'Arcade'] },
  { t: 'Kahve Yarışı', l: 'Kafemizin fuar standında 60 saniyede en çok siparişi yetiştiren bedava kahve kazansın.', c: ['Marka', 'Etkinlik ekranı', 'Skor tablosu'] },
  { t: 'Evet Der Mi?', l: 'Sevgilimle ilk tanıştığımız yerlerden geçen, sonunda yüzüğün çıktığı küçük bir macera.', c: ['Hediye', 'Tarayıcı', 'Hikâye'] },
  { t: 'Kedim Uzaya Gitsin', l: 'Kedimiz Pamuk roketle gezegenler arasında balık topluyor.', c: ['Instagram', 'Tarayıcı', 'Arcade'] },
];
let si = 0;
const heroCard = document.getElementById('ideaHero');
setInterval(() => {
  si = (si + 1) % SAMPLES.length;
  heroCard.classList.add('idea--swap');
  setTimeout(() => {
    const s = SAMPLES[si];
    document.getElementById('heroIdeaTitle').textContent = s.t;
    document.getElementById('heroIdeaLine').textContent = s.l;
    document.getElementById('heroIdeaChips').innerHTML = s.c.map(x => `<span>${x}</span>`).join('');
    heroCard.classList.remove('idea--swap');
  }, 350);
}, 4800);

/* ==================== FORM ==================== */
const form = document.getElementById('orderForm');
const val = n => (form.elements[n] && form.elements[n].value || '').trim();
const checked = n => [...form.querySelectorAll(`input[name="${n}"]:checked`)].map(i => i.value);
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Paket kartından ya da Instagram düğmesinden gelince ilgili seçenek seçili gelsin
document.querySelectorAll('[data-pick-paket]').forEach(a => a.addEventListener('click', () => {
  const r = form.querySelector(`input[name="paket"][data-id="${a.dataset.pickPaket}"]`);
  if (r) { r.checked = true; updatePreview(); }
}));
document.querySelectorAll('[data-pick-kim]').forEach(a => a.addEventListener('click', () => {
  const r = form.querySelector('input[name="kim"][value^="Instagram"]');
  if (r) { r.checked = true; updatePreview(); }
}));

function updatePreview() {
  const kim = checked('kim')[0];
  const paket = checked('paket')[0];
  const chips = [...checked('platform'), ...checked('tur')].filter(x => x !== 'Bilmiyorum');
  document.getElementById('liveKim').textContent = kim ? kim.split(' (')[0] : 'Fikir kartı';
  document.getElementById('liveTitle').textContent = val('baslik') || 'Oyununun adı';
  const f = val('fikir');
  document.getElementById('liveLine').textContent = f ? (f.length > 180 ? f.slice(0, 177) + '…' : f) : 'Fikrini yazdıkça burada belirecek.';
  document.getElementById('liveChips').innerHTML = chips.map(x => `<span>${esc(x.split(' (')[0])}</span>`).join('');
  const foot = [paket, val('butce'), val('zaman')].filter(Boolean);
  document.getElementById('liveFoot').innerHTML = foot.map(x => `<span>${esc(x)}</span>`).join('');
  document.getElementById('fikirSay').textContent = f.length;
  document.getElementById('ideaLive').classList.toggle('idea--filled', !!(f || val('baslik')));
}
form.addEventListener('input', updatePreview);
form.addEventListener('change', updatePreview);

function buildText() {
  const line = (k, v) => v ? `${k}: ${v}\n` : '';
  return (
    line('Kim için', checked('kim')[0]) +
    line('Oyunun adı', val('baslik')) +
    line('Paket', checked('paket')[0]) +
    line('Platform', checked('platform').join(', ')) +
    line('Tür', checked('tur').join(', ')) +
    line('Benzediği oyunlar', val('ornek')) +
    line('Bütçe', val('butce')) +
    line('Zaman', val('zaman')) +
    `\nFİKİR\n${val('fikir')}\n\n` +
    line('Ad', val('ad')) +
    line('E-posta', val('eposta')) +
    line('Telefon / Instagram', val('tel')) +
    `\n— yenalkocer.github.io/siparis.html üzerinden gönderildi`
  );
}

const err = document.getElementById('formErr');
form.addEventListener('submit', e => {
  e.preventDefault();
  const missing = [];
  if (!val('fikir')) missing.push('fikrini');
  if (!val('ad')) missing.push('adını');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val('eposta'))) missing.push('geçerli bir e-posta adresini');
  if (missing.length) {
    err.textContent = `Lütfen ${missing.join(', ')} yaz.`;
    const first = !val('fikir') ? 'fikir' : !val('ad') ? 'ad' : 'eposta';
    form.elements[first].focus();
    return;
  }
  err.textContent = '';

  const kim = checked('kim')[0] || '';
  const subject = `${kim.startsWith('Instagram') ? 'Instagram fikri' : 'Oyun siparişi'}: ${val('baslik') || val('fikir').slice(0, 40)} — ${val('ad')}`;
  const body = buildText();
  const enc = encodeURIComponent;

  document.getElementById('doneText').textContent = body;
  document.getElementById('gmailLink').href = `https://mail.google.com/mail/?view=cm&fs=1&to=${MAIL}&su=${enc(subject)}&body=${enc(body)}`;
  const addr = document.getElementById('mailAddr');
  addr.textContent = MAIL;
  addr.href = `mailto:${MAIL}`;

  form.closest('.sp-form-wrap').hidden = true;
  const done = document.getElementById('done');
  done.hidden = false;
  done.focus();
  done.scrollIntoView({ behavior: 'smooth', block: 'start' });

  window.location.href = `mailto:${MAIL}?subject=${enc(subject)}&body=${enc(body)}`;
});

document.getElementById('copyBtn').addEventListener('click', async e => {
  const b = e.currentTarget;
  try {
    await navigator.clipboard.writeText(document.getElementById('doneText').textContent);
    b.textContent = 'Kopyalandı ✓';
  } catch {
    const r = document.createRange();
    r.selectNodeContents(document.getElementById('doneText'));
    getSelection().removeAllRanges(); getSelection().addRange(r);
    b.textContent = 'Seçildi, Ctrl+C ile kopyala';
  }
  setTimeout(() => (b.textContent = 'Metni kopyala'), 2500);
});

document.getElementById('backBtn').addEventListener('click', () => {
  document.getElementById('done').hidden = true;
  form.closest('.sp-form-wrap').hidden = false;
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ==================== ORTAK: reveal, nav, menü ==================== */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => { burger.classList.toggle('open'); navLinks.classList.toggle('open'); });
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open'); navLinks.classList.remove('open');
}));
