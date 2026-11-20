/* ==================== AYARLAR ==================== */
const MAIL = 'yenalkocer06006@gmail.com';

const FAQ = [
  ['Hiç kod bilmiyorum, başvurabilir miyim?',
   'Evet. Hiç başlamamış biriyle ilk hedefimiz küçük ama bitmiş bir oyun olur. Nereden başlayacağını birlikte seçeriz.'],
  ['Görüşmeler nasıl yapılıyor?',
   'Online, görüntülü görüşmeyle. Çoğu zaman ekranını paylaşırsın ve doğrudan senin projen üzerinde çalışırız.'],
  ['Ücreti ne kadar?',
   'İlk tanışma görüşmesi ücretsiz. Sonrası görüşme sıklığına ve biçimine göre değişir; tanışmada açıkça konuşuruz.'],
  ['Benim yerime oyunumu yapar mısın?',
   'Mentörlükte oyunu sen yaparsın, ben yol gösteririm. Oyunun baştan sona yapılmasını istiyorsan <a href="siparis.html">oyun siparişi</a> sayfasına bak.'],
  ['Sadece araba oyunları mı?',
   'Hayır. Yerle 1 araba temalı oyunlar yapıyor ama konuştuğumuz şeylerin çoğu (kapsam, prototip, yayın, tanıtım) her tür oyun için geçerli.'],
  ['Kaç kişiyle çalışıyorsun?',
   'Kendi oyunlarımı da geliştirdiğim için aynı anda az sayıda kişiyle çalışıyorum. Yer yoksa sıradaki boşluğu söylerim.'],
];

document.getElementById('faq').innerHTML = FAQ.map(([q, a]) => `
  <details class="faq reveal"><summary>${q}</summary><p>${a}</p></details>
`).join('');

/* ==================== FORM ==================== */
const form = document.getElementById('mentorForm');
const val = n => (form.elements[n] && form.elements[n].value || '').trim();
const checked = n => [...form.querySelectorAll(`input[name="${n}"]:checked`)].map(i => i.value);

form.addEventListener('input', () => {
  document.getElementById('hedefSay').textContent = val('hedef').length;
});

function buildText() {
  const line = (k, v) => v ? `${k}: ${v}\n` : '';
  return (
    line('Seviye', checked('seviye')[0]) +
    line('Konular', checked('konu').join(', ')) +
    line('Görüşme biçimi', val('bicim')) +
    line('Haftalık vakit', val('vakit')) +
    `\nHEDEF\n${val('hedef')}\n\n` +
    line('Ad', val('ad')) +
    line('E-posta', val('eposta')) +
    line('Telefon / Instagram', val('tel')) +
    `\n— yenalkocer.github.io/mentorluk.html üzerinden gönderildi`
  );
}

const err = document.getElementById('formErr');
form.addEventListener('submit', e => {
  e.preventDefault();
  const missing = [];
  if (!val('hedef')) missing.push('hedefini');
  if (!val('ad')) missing.push('adını');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val('eposta'))) missing.push('geçerli bir e-posta adresini');
  if (missing.length) {
    err.textContent = `Lütfen ${missing.join(', ')} yaz.`;
    const first = !val('hedef') ? 'hedef' : !val('ad') ? 'ad' : 'eposta';
    form.elements[first].focus();
    return;
  }
  err.textContent = '';

  const subject = `Mentörlük başvurusu — ${val('ad')}`;
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
