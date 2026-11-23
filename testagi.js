/* ==================== AYARLAR ==================== */
const MAIL = 'yenalkocer06006@gmail.com';
const DISCORD = ''; // Discord davet bağlantısı; boşken bağlantı satırı gizli kalır

const FAQ = [
  ['Ücretli mi?',
   'İlk pilot testleri ücretsiz. Amacımız hizmeti ilk geliştiricilerle birlikte şekillendirmek. Ücretli testler 2027 baharında başlayacak; pilotta yer alanlar bunu herkesten önce duyacak.'],
  ['Hangi motorlar destekleniyor?',
   'Veri toplayan paketi önce Unity için yazıyoruz. Başka bir motor kullanıyorsan yine başvur: oyuncu bulma ve form kısmı motordan bağımsız, talep olursa diğer motorlara da paket yazılır.'],
  ['Oyunum sızdırılırsa?',
   'Dağıtım Steam Playtest ya da itch.io kısıtlı sayfa üzerinden, davetli oyuncuya özel yapılır. Testçiler gizlilik kuralını kabul eder; oyunu sızdıran ağdan kalıcı olarak çıkarılır.'],
  ['Oyuncu olarak ne kadar vakit ayırmam gerekir?',
   'Bir test genelde 30–60 dakika sürüyor ve sonunda birkaç kısa soru var. Her daveti kabul etmek zorunda değilsin.'],
  ['Oyunda benim hakkımda ne toplanıyor?',
   'Yalnızca oyun içi olaylar: hangi sahnede ne kadar kaldın, nerede bıraktın, soruları nasıl puanladın, hata olduysa kaydı. Adın, e-postan ve konumun oyun paketine hiç girmez; oyuncular rastgele bir kodla tanınır.'],
  ['Kim yapıyor?',
   'Yerle 1, araba temalı oyunlar yapan küçük bir Türk stüdyosu. Bu ağı kendi oyunumuz 1:64 Koleksiyoner\'in kapalı testinde yaşadığımız sorundan yola çıkarak kuruyoruz; ilk testi de kendi oyunumuzla yapacağız.'],
];

document.getElementById('faq').innerHTML = FAQ.map(([q, a]) => `
  <details class="faq reveal"><summary>${q}</summary><p>${a}</p></details>
`).join('');

/* ==================== FORM ==================== */
const form = document.getElementById('kayitForm');
const val = n => (form.elements[n] && form.elements[n].value || '').trim();
const checked = n => [...form.querySelectorAll(`input[name="${n}"]:checked`)].map(i => i.value);
const rol = () => checked('rol')[0] || '';

function rolGoster(r) {
  form.querySelectorAll('[data-rol]').forEach(el => { el.hidden = el.dataset.rol !== r; });
  form.querySelector('[data-rol-ortak]').hidden = !r;
  document.getElementById('gonderBtn').hidden = !r;
}

form.addEventListener('change', e => { if (e.target.name === 'rol') rolGoster(e.target.value); });

// Hero'daki iki buton formda doğru rolü seçili getirir
document.querySelectorAll('[data-rol-sec]').forEach(a => a.addEventListener('click', () => {
  const r = a.dataset.rolSec;
  form.querySelector(`input[name="rol"][value="${r}"]`).checked = true;
  rolGoster(r);
}));

function buildText() {
  const line = (k, v) => v ? `${k}: ${v}\n` : '';
  const r = rol();
  let t = `ROL: ${r === 'gelistirici' ? 'Geliştirici (pilot başvurusu)' : 'Oyuncu (testçi kaydı)'}\n\n`;
  if (r === 'gelistirici') {
    t += line('Oyun', val('oyun')) + line('Ekip', val('ekip')) + line('Bağlantı', val('oyunLink')) +
         line('Motor', val('motor')) + line('Test zamanı', val('zaman'));
    if (val('sonTest')) t += `\nSON TEST DENEYİMİ\n${val('sonTest')}\n`;
  } else {
    t += line('Türler', checked('tur').join(', ')) + line('Platform', val('platform')) +
         line('Ayda test', val('siklik')) + line('18 yaş üstü', checked('yas').length ? 'Evet' : '');
  }
  t += '\n' + line('Ad', val('ad')) + line('E-posta', val('eposta')) + line('Discord', val('discord'));
  return t + `\n— yenalkocer.github.io/testagi.html üzerinden gönderildi`;
}

const err = document.getElementById('formErr');
form.addEventListener('submit', e => {
  e.preventDefault();
  const r = rol();
  const missing = [];
  if (r === 'gelistirici' && !val('oyun')) missing.push('oyununun adını');
  if (r === 'oyuncu' && !checked('yas').length) missing.push('18 yaş onayını');
  if (!val('ad')) missing.push('adını');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val('eposta'))) missing.push('geçerli bir e-posta adresini');
  if (missing.length) {
    err.textContent = `Lütfen ${missing.join(', ')} gir.`;
    return;
  }
  err.textContent = '';

  const subject = `Test Ağı ön kayıt (${r === 'gelistirici' ? 'geliştirici' : 'oyuncu'}) — ${val('ad')}`;
  const body = buildText();
  const enc = encodeURIComponent;

  document.getElementById('doneText').textContent = body;
  document.getElementById('gmailLink').href = `https://mail.google.com/mail/?view=cm&fs=1&to=${MAIL}&su=${enc(subject)}&body=${enc(body)}`;
  const addr = document.getElementById('mailAddr');
  addr.textContent = MAIL;
  addr.href = `mailto:${MAIL}`;
  if (DISCORD) {
    document.getElementById('discordLink').href = DISCORD;
    document.getElementById('discordSatir').hidden = false;
  }

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
    const rg = document.createRange();
    rg.selectNodeContents(document.getElementById('doneText'));
    getSelection().removeAllRanges(); getSelection().addRange(rg);
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
