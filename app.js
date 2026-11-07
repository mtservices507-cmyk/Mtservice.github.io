/* ===== Iconos (SVG incluidos, sin dependencias externas) ===== */
const ICONS = {
  "play":"<polygon points=\"5 3 19 12 5 21 5 3\"/>",
  "pause":"<rect x=\"14\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/>",
  "menu":"<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"/><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"/><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"/>",
  "x":"<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>",
  "plus":"<path d=\"M5 12h14\"/><path d=\"M12 5v14\"/>",
  "minus":"<path d=\"M5 12h14\"/>",
  "arrow-right":"<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>",
  "check":"<path d=\"M20 6 9 17l-5-5\"/>",
  "check-circle-2":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12 2 2 4-4\"/>",
  "globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"/><path d=\"M2 12h20\"/>",
  "phone":"<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"/>",
  "send":"<path d=\"m22 2-7 20-4-9-9-4Z\"/><path d=\"M22 2 11 13\"/>",
  "code":"<polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/>",
  "layout":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"M9 21V9\"/>",
  "monitor":"<rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><line x1=\"8\" x2=\"16\" y1=\"21\" y2=\"21\"/><line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"21\"/>",
  "zap":"<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/>",
  "wrench":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"/>",
  "shield-check":"<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/>",
  "megaphone":"<path d=\"m3 11 18-5v12L3 14v-3z\"/><path d=\"M11.6 16.8a3 3 0 1 1-5.8-1.6\"/>",
  "sparkles":"<path d=\"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z\"/><path d=\"M5 3v4\"/><path d=\"M19 17v4\"/><path d=\"M3 5h4\"/><path d=\"M17 19h4\"/>",
  "shopping-cart":"<circle cx=\"8\" cy=\"21\" r=\"1\"/><circle cx=\"19\" cy=\"21\" r=\"1\"/><path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\"/>",
  "message-circle":"<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/>",
  "message-square":"<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/>",
  "user-check":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><polyline points=\"16 11 18 13 22 9\"/>",
  "volume-2":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"/><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"/><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14\"/>",
  "volume-x":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"/><line x1=\"22\" x2=\"16\" y1=\"9\" y2=\"15\"/><line x1=\"16\" x2=\"22\" y1=\"9\" y2=\"15\"/>"
};
function renderIcons(){
  document.querySelectorAll('svg[data-i]').forEach(s => {
    const body = ICONS[s.getAttribute('data-i')];
    if (!body) return;
    s.setAttribute('viewBox','0 0 24 24');
    if (!s.classList.contains('ic')) s.classList.add('ic');
    s.innerHTML = body;
  });
}
renderIcons();

/* ===== Encabezado, menú móvil y enlace activo ===== */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive:true });

const burger = document.getElementById('burger');
const mnav = document.getElementById('mobile-menu');
if (burger && mnav){
  burger.addEventListener('click', () => {
    const open = mnav.classList.toggle('open');
    burger.querySelector('svg').setAttribute('data-i', open ? 'x' : 'menu');
    renderIcons();
  });
  mnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mnav.classList.remove('open');
    burger.querySelector('svg').setAttribute('data-i', 'menu');
    renderIcons();
  }));
}

// Marca como activo el enlace de la página actual (inicio = index.html)
const currentPage = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('[data-page]').forEach(a => {
  if (a.dataset.page.toLowerCase() === currentPage) a.classList.add('active');
});

/* ===== Animaciones de entrada y brillo que sigue al mouse ===== */
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

(function(){
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)){
    els.forEach(e => e.classList.remove('reveal'));
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('in');
        io.unobserve(el);
        setTimeout(() => { el.classList.remove('reveal', 'in'); el.style.removeProperty('--d'); }, 1500);
      });
    }, { threshold: 0.12 });
    els.forEach(e => io.observe(e));
  }
  document.querySelectorAll('.stagger').forEach(g => {
    [...g.children].forEach((c, i) => c.style.setProperty('--d', (i * 0.09) + 's'));
  });
  document.addEventListener('mousemove', e => {
    const card = e.target.closest && e.target.closest('.card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
})();

/* ===== Pantalla de bienvenida (solo en index.html, una vez por sesión) ===== */
const splash = document.getElementById('splash');
const ENTERED_KEY = 'mtservice-entered';
if (splash){
  if (sessionStorage.getItem(ENTERED_KEY) === '1'){
    splash.style.display = 'none';
    document.body.classList.remove('locked');
  } else {
    document.body.classList.add('locked');
  }
}
function enterExperience(){
  sessionStorage.setItem(ENTERED_KEY, '1');
  if (splash){
    splash.style.opacity = '0';
    setTimeout(() => { splash.style.display = 'none'; }, 700);
  }
  document.body.classList.remove('locked');
  startCinematicMusic();
}
const btnEnter = document.getElementById('btn-enter');
if (btnEnter) btnEnter.addEventListener('click', enterExperience);

/* ===== Música de fondo (TRUENO) ===== */
const AUDIO_KEY = 'mtservice-audio';
const bgAudio = document.getElementById('bg-music');
let isPlaying = false;
let isMuted = false;
let currentVolume = 70;
let audioMissing = false;

function loadAudioState(){
  try { return JSON.parse(sessionStorage.getItem(AUDIO_KEY)) || null; } catch(e){ return null; }
}
function saveAudioState(){
  try {
    sessionStorage.setItem(AUDIO_KEY, JSON.stringify({
      playing: isPlaying,
      time: bgAudio.currentTime || 0,
      volume: currentVolume,
      muted: isMuted
    }));
  } catch(e){}
}

const savedAudio = loadAudioState();
if (savedAudio){
  currentVolume = typeof savedAudio.volume === 'number' ? savedAudio.volume : 70;
  isMuted = !!savedAudio.muted;
}
bgAudio.volume = currentVolume / 100;
bgAudio.muted = isMuted;
const volSlider = document.getElementById('volume-slider');
if (volSlider){
  volSlider.value = currentVolume;
  document.getElementById('volume-display').innerText = currentVolume + '%';
}

bgAudio.addEventListener('ended', () => {
  isPlaying = false; stopEqualizer(); updateAudioUI(); saveAudioState();
});
const lastAudioSource = bgAudio.querySelector('source:last-of-type');
if (lastAudioSource){
  lastAudioSource.addEventListener('error', () => {
    audioMissing = true; isPlaying = false;
    console.error('No se encontró el audio. Debe llamarse TRUENO.mp3 (o trueno.mp3) y estar en la misma carpeta que index.html');
    stopEqualizer(); updateAudioUI();
  });
}

function startCinematicMusic(){
  if (audioMissing){ updateAudioUI(); return; }
  isPlaying = true;
  const p = bgAudio.play();
  if (p && p.catch) p.catch(err => {
    console.warn('No se pudo reproducir el audio:', err);
    isPlaying = false; stopEqualizer(); updateAudioUI();
  });
  updateAudioUI(); startEqualizer(); saveAudioState();
}
function pauseCinematicMusic(){
  isPlaying = false; bgAudio.pause(); stopEqualizer(); updateAudioUI(); saveAudioState();
}
function toggleAudio(){ isPlaying ? pauseCinematicMusic() : startCinematicMusic(); }

function changeVolume(val){
  currentVolume = parseInt(val, 10);
  document.getElementById('volume-display').innerText = currentVolume + '%';
  bgAudio.volume = currentVolume / 100;
  if (currentVolume > 0 && isMuted) isMuted = false;
  bgAudio.muted = isMuted;
  updateAudioUI(); saveAudioState();
}
function increaseVolume(){
  const v = Math.min(100, parseInt(volSlider.value, 10) + 10);
  volSlider.value = v; changeVolume(v);
}
function decreaseVolume(){
  const v = Math.max(0, parseInt(volSlider.value, 10) - 10);
  volSlider.value = v; changeVolume(v);
}
function toggleMute(){
  isMuted = !isMuted;
  bgAudio.muted = isMuted;
  updateAudioUI(); saveAudioState();
}
function updateAudioUI(){
  const st = document.getElementById('player-status');
  const playIc = document.getElementById('btn-play-icon');
  const muteIc = document.getElementById('icon-mute');
  if (isPlaying){
    st.innerText = isMuted ? 'SILENCIADO' : 'REPRODUCIENDO';
    st.className = isMuted ? 'off' : '';
    playIc.setAttribute('data-i', 'pause');
  } else {
    st.innerText = audioMissing ? 'TRUENO.mp3 NO ENCONTRADO' : 'PAUSADO';
    st.className = audioMissing ? 'err' : 'off';
    playIc.setAttribute('data-i', 'play');
  }
  muteIc.setAttribute('data-i', (isMuted || currentVolume === 0) ? 'volume-x' : 'volume-2');
  renderIcons();
}

/* Ecualizador */
let eqTimer = null;
function startEqualizer(){
  if (eqTimer) clearInterval(eqTimer);
  eqTimer = setInterval(() => {
    for (let i = 1; i <= 6; i++){
      const b = document.getElementById('eq' + i);
      if (b && isPlaying && !isMuted) b.style.height = (Math.floor(Math.random() * 18) + 4) + 'px';
    }
  }, 140);
}
function stopEqualizer(){
  if (eqTimer) clearInterval(eqTimer);
  for (let i = 1; i <= 6; i++){
    const b = document.getElementById('eq' + i);
    if (b) b.style.height = '3px';
  }
}
stopEqualizer();

// Al cambiar de página se guarda el estado y, si sonaba, se retoma en la siguiente
window.addEventListener('pagehide', saveAudioState);
if (savedAudio && savedAudio.playing){
  bgAudio.addEventListener('loadedmetadata', () => {
    if (savedAudio.time) bgAudio.currentTime = savedAudio.time;
  }, { once: true });
  startCinematicMusic();
} else {
  updateAudioUI();
}

/* ===== Video "Nosotros" (video.mp4) ===== */
(function(){
  const vid = document.getElementById('portfolio-video');
  if (!vid) return;
  const missing = document.getElementById('video-missing');
  const lastVidSrc = vid.querySelector('source:last-of-type');
  if (lastVidSrc && missing){
    lastVidSrc.addEventListener('error', () => {
      missing.classList.add('show');
      console.error('No se encontró video.mp4. Debe estar en la misma carpeta que index.html');
    });
  }
  // Mientras suena el video se pausa la música y se reanuda al terminar
  let resumeMusic = false;
  vid.addEventListener('play', () => {
    if (isPlaying){ resumeMusic = true; pauseCinematicMusic(); }
  });
  const backToMusic = () => {
    if (resumeMusic){ resumeMusic = false; startCinematicMusic(); }
  };
  vid.addEventListener('pause', backToMusic);
  vid.addEventListener('ended', backToMusic);
  // Si el video sale de pantalla, se pausa
  if ('IntersectionObserver' in window){
    new IntersectionObserver(es => {
      es.forEach(e => { if (!e.isIntersecting && !vid.paused) vid.pause(); });
    }, { threshold: 0.1 }).observe(vid);
  }
})();

/* ===== Cotizador (solo en cotizador.html) ===== */
(function(){
  const total = document.getElementById('calc-total-price');
  if (!total) return;

  function getCalcState(){
    const radio = document.querySelector('input[name="calc-web"]:checked');
    const webVal = parseInt(radio.value, 10);
    const webLabel = radio.dataset.label;
    const ads = document.getElementById('calc-add-ads').checked;
    const maint = document.getElementById('calc-add-maint').checked;
    const sum = webVal + (ads ? 40 : 0) + (maint ? 25 : 0);
    const time = webVal > 200 ? '5 a 8 Días Hábiles' : '3 a 5 Días Hábiles';
    const name = document.getElementById('calc-name').value.trim();
    const business = document.getElementById('calc-business').value.trim();
    return { webVal, webLabel, ads, maint, total: sum, time, name, business };
  }

  function updateCalculator(){
    const s = getCalcState();
    total.innerText = '$' + s.total + ' USD';
    document.getElementById('calc-time-estimate').innerText = s.time;
    document.getElementById('addon-ads').classList.toggle('on', s.ads);
    document.getElementById('addon-maint').classList.toggle('on', s.maint);
    const row = (label, price) => '<li><span>' + label + '</span><span>' + price + '</span></li>';
    let rows = row(s.webLabel, '$' + s.webVal + ' USD');
    if (s.ads) rows += row('Publicidad Digital', '+$40 USD');
    if (s.maint) rows += row('Mantenimiento mensual', '+$25 USD/mes');
    document.getElementById('calc-breakdown').innerHTML = rows;
  }

  function sendCalculatorToWhatsApp(){
    const s = getCalcState();
    let m = 'Hola David, ';
    m += s.name ? 'soy ' + s.name : 'te escribo';
    m += s.business ? ' de ' + s.business + '.' : '.';
    m += ' Cotizé en la página de MT Service:\n\n';
    m += '- Tipo de sitio: ' + s.webLabel + ' ($' + s.webVal + ' USD)\n';
    if (s.ads) m += '- Publicidad Digital: +$40 USD\n';
    if (s.maint) m += '- Mantenimiento mensual: +$25 USD/mes\n';
    m += '\nTotal estimado: $' + s.total + ' USD\nTiempo estimado: ' + s.time + '\n\n';
    m += 'Quiero iniciar mi proyecto. ¡Gracias!';
    openWhatsApp(m);
  }

  document.querySelectorAll('input[name="calc-web"], #calc-add-ads, #calc-add-maint')
    .forEach(el => el.addEventListener('change', updateCalculator));
  document.getElementById('btn-send-quote').addEventListener('click', sendCalculatorToWhatsApp);
  updateCalculator();
})();

/* ===== WhatsApp y formulario de contacto (solo en contacto.html) ===== */
function openWhatsApp(msg){
  const phone = '573105120977';
  window.open('https://wa.me/' + phone + '?text=' + encodeURIComponent(msg), '_blank');
}
(function(){
  const form = document.getElementById('contact-form');
  if (!form) return;
  // Si llegó desde una tarjeta de servicio (contacto.html?servicio=...), lo preselecciona
  const servicio = new URLSearchParams(location.search).get('servicio');
  const sel = document.getElementById('contact-service');
  if (servicio && sel){
    const opt = [...sel.options].find(o => o.value === servicio);
    if (opt) sel.value = servicio;
  }
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const service = sel.value;
    const msg = document.getElementById('contact-msg').value;
    openWhatsApp('Hola David, mi nombre es ' + name + '.\nInterés: ' + service + '.\nMensaje: ' + msg);
  });
})();
