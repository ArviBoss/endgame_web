// ── CLOCK ──
function tick() {
  const t = new Date().toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric', minute: '2-digit', hour12: true
  });
  document.getElementById('naplesClock').textContent = t;
}
tick();
setInterval(tick, 1000);

// ── SLIDESHOW ──
const slides = document.querySelectorAll('.slide');
const dotsEl = document.getElementById('dots');
let cur = 0, timer;

slides.forEach((_, i) => {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  dotsEl.appendChild(d);
});

function goTo(n) {
  slides[cur].classList.remove('active');
  dotsEl.children[cur].classList.remove('active');
  cur = n;
  const s = slides[cur];
  if (s.dataset.bg) {
    s.style.backgroundImage = "url('" + s.dataset.bg + "')";
    delete s.dataset.bg;
  }
  s.classList.add('active');
  dotsEl.children[cur].classList.add('active');
}

timer = setInterval(() => goTo((cur + 1) % slides.length), 5500);

// ── HAMBURGER MENU ──
const hbg = document.getElementById('hbg');
const menuOverlay = document.getElementById('menuOverlay');

hbg.addEventListener('click', () => {
  hbg.classList.toggle('open');
  menuOverlay.classList.toggle('open');
});

menuOverlay.addEventListener('click', e => {
  if (e.target === menuOverlay) {
    hbg.classList.remove('open');
    menuOverlay.classList.remove('open');
  }
});

// ── MANIFESTO ──
const manifestoPage = document.getElementById('manifestoPage');

document.getElementById('manifestoLink').addEventListener('click', () => {
  hbg.classList.remove('open');
  menuOverlay.classList.remove('open');
  manifestoPage.classList.add('visible');
  clearInterval(timer);
});

document.getElementById('mClose').addEventListener('click', () => {
  manifestoPage.classList.remove('visible');
  manifestoPage.scrollTop = 0;
  timer = setInterval(() => goTo((cur + 1) % slides.length), 5500);
});
