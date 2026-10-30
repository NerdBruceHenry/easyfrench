/* EasyFrench — 通用工具函数 */
window.EF = window.EF || {};
Object.assign(EF, {
  units: EF.units || [],
  readings: EF.readings || [],
  prompts: EF.prompts || [],
  dialogues: EF.dialogues || [],
  pron: EF.pron || [],
  fauxAmis: EF.fauxAmis || [],
  cognates: EF.cognates || [],
  LEVELS: ['A1', 'A2', 'B1', 'B2'],
});

EF.$ = (sel, root = document) => root.querySelector(sel);
EF.$$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

EF.esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** 去掉括号里的补充说明：「enchanté(e)」→「enchanté」，「l'école (f.)」→「l'école」 */
EF.clean = (s) => String(s).replace(/\s*\([^)]*\)/g, '').trim();

/** 统一大小写、撇号和标点，用于比对答案 */
EF.norm = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[.!?,;:«»"“”…—–]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

EF.stripAccents = (s) =>
  String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/œ/g, 'oe').replace(/æ/g, 'ae');

EF.shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
EF.sample = (arr, n) => EF.shuffle(arr).slice(0, n);
EF.pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

/** 名词阴阳性：m / f / null */
EF.gender = (fr) => {
  const s = fr.toLowerCase();
  if (s.includes(' / ')) return null;
  if (/\(f\.\)/.test(s)) return 'f';
  if (/\(m\.\)/.test(s)) return 'm';
  if (/^(le|un) /.test(s)) return 'm';
  if (/^(la|une) /.test(s)) return 'f';
  return null;
};

/** 去掉冠词 */
EF.noArticle = (fr) => EF.clean(fr).replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '');

EF.dateStr = (d = new Date()) => {
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};
EF.today = () => EF.dateStr();
EF.addDays = (dateStr, n) => {
  const [y, m, d] = dateStr.split('-').map(Number);
  return EF.dateStr(new Date(y, m - 1, d + n));
};

EF.lev = (a, b) => {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
};

/**
 * 判断输入答案：返回 'exact' | 'accent'（只差重音）| 'close'（拼写差一个字母）| 'wrong'
 */
EF.check = (input, answers) => {
  const list = Array.isArray(answers) ? answers : [answers];
  const a = EF.norm(input);
  if (!a) return 'wrong';
  let best = 'wrong';
  for (const ans of list) {
    const b = EF.norm(EF.clean(ans));
    if (a === b) return 'exact';
    if (EF.stripAccents(a) === EF.stripAccents(b)) best = 'accent';
    else if (best === 'wrong' && b.length > 5 && EF.lev(EF.stripAccents(a), EF.stripAccents(b)) === 1) best = 'close';
  }
  return best;
};

EF.toast = (msg, ms = 2200) => {
  const t = EF.$('#toast');
  t.innerHTML = msg;
  t.classList.add('show');
  clearTimeout(EF._toastT);
  EF._toastT = setTimeout(() => t.classList.remove('show'), ms);
};

EF.confetti = () => {
  const colors = ['#0055a4', '#ef4135', '#f5c518', '#2bb673', '#8e5cf7'];
  const box = document.createElement('div');
  box.className = 'confetti';
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('i');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = EF.pick(colors);
    p.style.animationDelay = Math.random() * 0.4 + 's';
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    box.appendChild(p);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 2600);
};

/** 简单音效（WebAudio，无需音频文件） */
EF.beep = (ok) => {
  if (EF.state && EF.state.settings.sound === false) return;
  try {
    const ctx = EF._ac || (EF._ac = new (window.AudioContext || window.webkitAudioContext)());
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g);
    g.connect(ctx.destination);
    const now = ctx.currentTime;
    if (ok) {
      o.frequency.setValueAtTime(660, now);
      o.frequency.setValueAtTime(880, now + 0.08);
    } else {
      o.frequency.setValueAtTime(220, now);
      o.frequency.setValueAtTime(180, now + 0.1);
    }
    g.gain.setValueAtTime(0.08, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
    o.start(now);
    o.stop(now + 0.26);
  } catch (e) {
    /* 静默失败 */
  }
};

/** 法语特殊字符输入条 */
EF.ACCENTS = ['é', 'è', 'ê', 'à', 'â', 'ç', 'ù', 'û', 'î', 'ï', 'ô', 'ë', 'œ', "'"];
EF.accentBar = (targetId) =>
  `<div class="accents" data-target="${targetId}">${EF.ACCENTS.map((c) => `<button type="button" class="acc">${c}</button>`).join('')}</div>`;

document.addEventListener('click', (e) => {
  const b = e.target.closest('.accents .acc');
  if (!b) return;
  const input = document.getElementById(b.parentElement.dataset.target);
  if (!input) return;
  const s = input.selectionStart ?? input.value.length;
  const t = input.selectionEnd ?? input.value.length;
  input.value = input.value.slice(0, s) + b.textContent + input.value.slice(t);
  input.focus();
  input.setSelectionRange(s + 1, s + 1);
});
