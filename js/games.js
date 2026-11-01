/* EasyFrench — 小游戏 */
(function () {
  const { $, $$, esc } = EF;
  const app = () => $('#app');

  /** 已学到的词汇（至少包含 A1 全部） */
  function knownVocab() {
    const reached = EF.LEVELS.indexOf(EF.nextUnit().level);
    return EF.units
      .filter((u) => EF.LEVELS.indexOf(u.level) <= Math.max(0, reached) || (EF.state.units[u.id] && EF.state.units[u.id].vocabSeen))
      .flatMap((u) => u.vocab);
  }

  const GAMES = {
    gender: { icon: '⚥', name: 'Le ou La ?', zh: '阴阳性快闪', desc: '60 秒内判断名词阴阳性，越快越好。←/→ 键也能玩。', run: gameGender },
    conj: { icon: '⚡', name: 'Conjugaison Éclair', zh: '变位闪电战', desc: '60 秒内选出正确的动词变位。', run: gameConj },
    numbers: { icon: '🔢', name: 'Les Nombres', zh: '数字听写', desc: '法语的 70、80、90 是出了名的「数学题」。听数字，写阿拉伯数字。', run: gameNumbers },
    match: { icon: '🧩', name: 'Associer', zh: '单词配对', desc: '把法语和英文配对，比比谁更快。', run: gameMatch },
    faux: { icon: '⚠️', name: 'Faux Amis', zh: '假朋友陷阱', desc: '长得像英语的词，真的是那个意思吗？', run: gameFaux },
    vf: { icon: '✔️', name: 'Vrai ou Faux', zh: '真假闪电', desc: '45 秒判断法英释义是否匹配，考验反应速度。', run: gameVF },
  };
  EF.games = GAMES;

  EF.route(/^games$/, () => {
    app().innerHTML = `<h1 class="page-h">🎮 游戏</h1><p class="muted">累了就来玩一局：每个游戏都在偷偷帮你巩固一个法语难点。</p>
      <div class="game-grid">${Object.entries(GAMES).map(([id, g]) => `<a class="card game" href="#/game/${id}"><span class="gi">${g.icon}</span><b>${esc(g.zh)}</b><small class="fr">${esc(g.name)}</small><small>${esc(g.desc)}</small>
        ${EF.state.games[id] != null ? `<span class="pill">🏆 最佳 ${EF.state.games[id]}</span>` : ''}</a>`).join('')}</div>`;
  });

  EF.route(/^game\/(\w+)$/, (id) => {
    const g = GAMES[id];
    if (!g) return EF.go('#/games');
    app().innerHTML = `<a href="#/games" class="back">‹ 游戏</a><h1 class="page-h">${g.icon} ${esc(g.zh)} <small class="fr">${esc(g.name)}</small></h1><div id="gm"></div>`;
    g.run($('#gm'), id);
  });

  function endGame(el, id, score, xp, detail = '') {
    const best = EF.state.games[id];
    const record = best == null || score > best;
    if (record) EF.state.games[id] = score;
    EF.save();
    EF.addXP(xp, 'games');
    EF.doTask('game');
    if (record && best != null) EF.confetti();
    el.innerHTML = `<div class="result"><div class="big">${record ? '🏆' : '🎮'}</div>
      <h2>得分 ${score}${record ? ' · 新纪录！' : ''}</h2><p>${best != null && !record ? `最佳 ${best} · ` : ''}+${xp} XP</p>${detail}
      <div class="row center"><button class="btn primary" id="again">再来一局</button><a class="btn" href="#/games">其他游戏</a></div></div>`;
    $('#again', el).onclick = () => GAMES[id].run(el, id);
  }

  /** 倒计时工具 */
  function timer(sec, onTick, onEnd) {
    let left = sec;
    onTick(left);
    const t = setInterval(() => {
      left--;
      onTick(left);
      if (left <= 0) {
        clearInterval(t);
        onEnd();
      }
    }, 1000);
    EF.onLeave(() => clearInterval(t));
    return () => clearInterval(t);
  }

  function startScreen(el, html, onStart) {
    el.innerHTML = `<div class="card center">${html}<button class="btn primary big" id="gstart">开始！</button></div>`;
    $('#gstart', el).onclick = onStart;
  }

  /* ---------- 阴阳性 ---------- */
  function gameGender(el, id) {
    const nouns = knownVocab().filter(([fr]) => EF.gender(fr));
    startScreen(el, `<p>屏幕上出现一个名词，判断它是 <b class="g-m">阳性 le</b> 还是 <b class="g-f">阴性 la</b>。</p><p class="small muted">题库：你已学到的 ${nouns.length} 个名词</p>`, () => {
      let score = 0, combo = 0, n = 0, alive = true;
      const wrongs = [];
      el.innerHTML = `<div class="ghud"><span>⏱ <b id="gt">60</b></span><span>⭐ <b id="gs">0</b></span><span id="gc"></span></div>
        <div class="card center gcard"><div class="gword" id="gw"></div><div class="small muted" id="gen"></div></div>
        <div class="row center gbtns"><button class="btn big g-m-btn" id="bm">le ←</button><button class="btn big g-f-btn" id="bf">→ la</button></div>`;
      let cur;
      const nextW = () => {
        cur = EF.pick(nouns);
        $('#gw', el).textContent = EF.noArticle(cur[0]);
        $('#gen', el).textContent = cur[1];
      };
      const ans = (g) => {
        if (!alive) return;
        n++;
        const right = EF.gender(cur[0]) === g;
        EF.beep(right);
        if (right) {
          combo++;
          score += 10 + Math.min(combo, 10);
        } else {
          combo = 0;
          wrongs.push(cur[0]);
          EF.toast(`❌ ${esc(EF.clean(cur[0]))}`, 1200);
        }
        $('#gs', el).textContent = score;
        $('#gc', el).textContent = combo >= 3 ? `🔥×${combo}` : '';
        el.querySelector('.gcard').classList.remove('flash-ok', 'flash-bad');
        void el.offsetWidth;
        el.querySelector('.gcard').classList.add(right ? 'flash-ok' : 'flash-bad');
        nextW();
      };
      $('#bm', el).onclick = () => ans('m');
      $('#bf', el).onclick = () => ans('f');
      const onKey = (e) => {
        if (e.key === 'ArrowLeft') ans('m');
        if (e.key === 'ArrowRight') ans('f');
      };
      document.addEventListener('keydown', onKey);
      EF.onLeave(() => document.removeEventListener('keydown', onKey));
      nextW();
      timer(60, (l) => ($('#gt', el) ? ($('#gt', el).textContent = l) : 0), () => {
        alive = false;
        document.removeEventListener('keydown', onKey);
        const uniq = [...new Set(wrongs)].slice(0, 10);
        endGame(el, id, score, Math.min(40, Math.round(score / 15)), `<p>共答 ${n} 题</p>${uniq.length ? `<p class="small">需要记住：${uniq.map((w) => `<span class="chip ${'g-' + EF.gender(w)}" data-say="${esc(EF.clean(w))}">${esc(EF.clean(w))}</span>`).join(' ')}</p>` : ''}<p class="small muted">提示：去「工具箱 → 阴阳性规律」看词尾规律。</p>`);
      });
    });
  }

  /* ---------- 变位 ---------- */
  function gameConj(el, id) {
    const sets = {
      1: { label: '初级：现在时', tenses: ['present'] },
      2: { label: '中级：+ 复合过去时 / 未完成过去时 / 将来时', tenses: ['present', 'pc', 'imparfait', 'futur'] },
      3: { label: '高级：全部时态（含条件式、虚拟式）', tenses: Object.keys(EF.conj.TENSES) },
    };
    el.innerHTML = `<div class="card center"><p>选择难度：</p>${Object.entries(sets).map(([k, s]) => `<button class="btn big block" data-k="${k}">${s.label}</button>`).join('')}</div>`;
    $$('[data-k]', el).forEach((b) => (b.onclick = () => play(sets[b.dataset.k].tenses)));
    function play(tenses) {
      const verbs = EF.conj.verbs();
      let score = 0, combo = 0, n = 0, ok = 0, alive = true;
      el.innerHTML = `<div class="ghud"><span>⏱ <b id="gt">60</b></span><span>⭐ <b id="gs">0</b></span><span id="gc"></span></div>
        <div class="card center gcard"><div class="small muted" id="gtense"></div><div class="gword" id="gq"></div><div class="small muted" id="gen"></div></div>
        <div class="options" id="gopts"></div>`;
      const nextQ = () => {
        const v = EF.pick(verbs);
        const t = EF.pick(tenses);
        let i = Math.floor(Math.random() * 6);
        const forms = EF.conj.conj(v, t);
        const right = forms[i];
        const cands = new Set(forms.filter((f) => f !== right && f !== '-'));
        // 加入其他时态的同人称形式作为干扰
        Object.keys(EF.conj.TENSES).forEach((t2) => {
          const f = EF.conj.conj(v, t2)[i];
          if (f && f !== right && t2 !== t) cands.add(f);
        });
        const opts = EF.shuffle([right, ...EF.sample([...cands], 3)]);
        const info = EF.conj.TENSES[t];
        $('#gtense', el).textContent = `${info.fr} · ${info.zh}`;
        $('#gq', el).innerHTML = `${t === 'subjonctif' ? 'que ' : ''}${EF.conj.PRON[i]} + <b>${v}</b>`;
        $('#gen', el).textContent = EF.conj.meaning(v);
        $('#gopts', el).innerHTML = opts.map((o) => `<button class="opt">${esc(o)}</button>`).join('');
        $$('#gopts .opt', el).forEach((b) => {
          b.onclick = () => {
            if (!alive) return;
            n++;
            const good = b.textContent === right;
            EF.beep(good);
            if (good) {
              ok++;
              combo++;
              score += 10 + Math.min(combo, 10);
              EF.speech.speak(EF.conj.full(v, t, i).replace('il/elle', 'il').replace('ils/elles', 'ils'), { rate: 1.1 });
            } else {
              combo = 0;
              EF.toast(`❌ ${esc(EF.conj.full(v, t, i))}`, 1500);
            }
            $('#gs', el).textContent = score;
            $('#gc', el).textContent = combo >= 3 ? `🔥×${combo}` : '';
            nextQ();
          };
        });
      };
      nextQ();
      timer(60, (l) => ($('#gt', el) ? ($('#gt', el).textContent = l) : 0), () => {
        alive = false;
        endGame(el, id, score, Math.min(40, Math.round(score / 15)), `<p>答对 ${ok} / ${n}</p><a class="btn ghost" href="#/tools/conj">🔤 查看变位表</a>`);
      });
    }
  }

  /* ---------- 数字 ---------- */
  function gameNumbers(el, id) {
    const ranges = {
      a: { label: '0 – 20', min: 0, max: 20 },
      b: { label: '0 – 100（含 70/80/90 难点）', min: 0, max: 100 },
      c: { label: '100 – 9999', min: 100, max: 9999 },
      d: { label: '年份 1900 – 2099', min: 1900, max: 2099 },
      e: { label: '电话号码（两位一组）', phone: true },
    };
    el.innerHTML = `<div class="card center"><p>法语数字逻辑：70 = 60+10（soixante-dix），80 = 4×20（quatre-vingts），90 = 4×20+10（quatre-vingt-dix）。</p>
      ${Object.entries(ranges).map(([k, r]) => `<button class="btn big block" data-k="${k}">${r.label}</button>`).join('')}</div>`;
    $$('[data-k]', el).forEach((b) => (b.onclick = () => play(ranges[b.dataset.k])));
    function play(r) {
      let i = 0, ok = 0;
      const N = 10;
      const gen = () => {
        if (r.phone) return '0' + (6 + Math.floor(Math.random() * 2)) + Array.from({ length: 4 }, () => String(Math.floor(Math.random() * 100)).padStart(2, '0')).join('');
        // 0-100 范围里提高 70-99 的出现概率
        if (r.max === 100 && Math.random() < 0.5) return String(70 + Math.floor(Math.random() * 30));
        return String(r.min + Math.floor(Math.random() * (r.max - r.min + 1)));
      };
      const toSpeech = (n) => (r.phone ? n.match(/../g).join(', ') : n);
      function show() {
        if (i >= N) return endGame(el, id, ok * 10, ok * 3, `<p>答对 ${ok} / ${N}</p>`);
        const num = gen();
        el.innerHTML = `<div class="qbar"><div style="width:${(i / N) * 100}%"></div></div>
          <div class="card center"><div class="small muted">${i + 1} / ${N}</div>
          <div class="row center"><button class="say-big" data-say="${toSpeech(num)}">🔊</button><button class="say-big" data-say="${toSpeech(num)}" data-rate="0.6">🐢</button></div>
          <form id="nf"><input id="nin" inputmode="numeric" autocomplete="off" placeholder="输入数字"><button class="btn primary">确定</button></form><div id="nr"></div></div>`;
        setTimeout(() => EF.speech.speak(toSpeech(num)), 250);
        $('#nin', el).focus();
        $('#nf', el).onsubmit = (e) => {
          e.preventDefault();
          if ($('#nn', el)) return $('#nn', el).click();
          const v = $('#nin', el).value.replace(/\D/g, '');
          const good = v === num;
          if (good) ok++;
          EF.beep(good);
          $('#nr', el).innerHTML = `<div class="feedback show ${good ? 'ok' : 'bad'}"><div class="fbhead">${good ? 'Exact ! ✅' : `答案：${num}`}</div><button class="btn primary" id="nn">下一个 ↵</button></div>`;
          $('#nn', el).onclick = () => {
            i++;
            show();
          };
        };
      }
      show();
    }
  }

  /* ---------- 配对 ---------- */
  function gameMatch(el, id) {
    const vocab = knownVocab();
    const ROUNDS = 3;
    let round = 0, mistakes = 0;
    const t0 = Date.now();
    function show() {
      if (round >= ROUNDS) {
        const sec = Math.round((Date.now() - t0) / 1000);
        const score = Math.max(10, 300 - sec * 2 - mistakes * 10);
        return endGame(el, id, score, Math.min(30, Math.round(score / 10)), `<p>用时 ${sec} 秒 · 失误 ${mistakes} 次</p>`);
      }
      const pairs = EF.sample(vocab, 5);
      const left = EF.shuffle(pairs.map((p, k) => ({ k, t: EF.clean(p[0]) })));
      const right = EF.shuffle(pairs.map((p, k) => ({ k, t: p[1] })));
      el.innerHTML = `<div class="ghud"><span>第 ${round + 1}/${ROUNDS} 轮</span><span>失误 ${mistakes}</span></div>
        <div class="match"><div>${left.map((x) => `<button class="mcell" data-side="l" data-k="${x.k}">${esc(x.t)}</button>`).join('')}</div>
        <div>${right.map((x) => `<button class="mcell" data-side="r" data-k="${x.k}">${esc(x.t)}</button>`).join('')}</div></div>`;
      let sel = null, left2 = 5;
      $$('.mcell', el).forEach((b) => {
        b.onclick = () => {
          if (b.classList.contains('gone')) return;
          if (b.dataset.side === 'l') EF.speech.speak(b.textContent, { rate: 1.1 });
          if (!sel || sel.dataset.side === b.dataset.side) {
            if (sel) sel.classList.remove('sel');
            sel = b;
            b.classList.add('sel');
            return;
          }
          if (sel.dataset.k === b.dataset.k) {
            EF.beep(true);
            sel.classList.add('gone');
            b.classList.add('gone');
            left2--;
            if (!left2) {
              round++;
              setTimeout(show, 400);
            }
          } else {
            EF.beep(false);
            mistakes++;
            const s = sel;
            s.classList.add('shake');
            b.classList.add('shake');
            setTimeout(() => {
              s.classList.remove('shake');
              b.classList.remove('shake');
            }, 400);
            el.querySelector('.ghud span:last-child').textContent = `失误 ${mistakes}`;
          }
          sel.classList.remove('sel');
          sel = null;
        };
      });
    }
    show();
  }

  /* ---------- 假朋友 ---------- */
  function gameFaux(el, id) {
    const items = EF.sample(EF.fauxAmis, 10);
    let i = 0, ok = 0;
    function show() {
      if (i >= items.length) return endGame(el, id, ok * 10, ok * 3, `<p>答对 ${ok} / ${items.length}</p><a class="btn ghost" href="#/tools/faux">⚠️ 查看全部假朋友</a>`);
      const f = items[i];
      const other = EF.pick(EF.fauxAmis.filter((x) => x !== f)).real;
      const opts = EF.shuffle([f.real, f.looks, other]);
      el.innerHTML = `<div class="qbar"><div style="width:${(i / items.length) * 100}%"></div></div>
        <div class="card center gcard"><div class="small muted">这个法语词是什么意思？</div><div class="gword" data-say="${esc(f.fr)}">${esc(f.fr)} 🔊</div></div>
        <div class="options">${opts.map((o) => `<button class="opt">${esc(o)}</button>`).join('')}</div><div id="fr"></div>`;
      EF.speech.speak(f.fr);
      $$('.opt', el).forEach((b) => {
        b.onclick = () => {
          const good = b.textContent === f.real;
          if (good) ok++;
          EF.beep(good);
          $$('.opt', el).forEach((x) => {
            x.disabled = true;
            if (x.textContent === f.real) x.classList.add('right');
          });
          if (!good) b.classList.add('wrong');
          $('#fr', el).innerHTML = `<div class="feedback show ${good ? 'ok' : 'bad'}"><div class="fbhead">${good ? 'Bien vu ! 👀' : b.textContent === f.looks ? '掉进陷阱了！🪤' : '不对哦'}</div>
            <div>${esc(f.fr)} = ${esc(f.real)}（不是 ${esc(f.looks)}）</div>${f.ex ? `<div class="small muted" data-say="${esc(f.ex)}">${esc(f.ex)} 🔊</div>` : ''}
            <button class="btn primary" id="fn">下一个</button></div>`;
          $('#fn', el).onclick = () => {
            i++;
            show();
          };
        };
      });
    }
    show();
  }

  /* ---------- 真假闪电 ---------- */
  function gameVF(el, id) {
    const vocab = knownVocab();
    startScreen(el, `<p>出现「法语 = 英文」，判断是否正确。<br>键盘：← 错 / → 对</p>`, () => {
      let score = 0, combo = 0, n = 0, alive = true, cur, truth;
      el.innerHTML = `<div class="ghud"><span>⏱ <b id="gt">45</b></span><span>⭐ <b id="gs">0</b></span><span id="gc"></span></div>
        <div class="card center gcard"><div class="gword" id="vfr"></div><div class="vf-eq">=</div><div class="gword en" id="ven"></div></div>
        <div class="row center gbtns"><button class="btn big g-f-btn" id="bn">✗ 错 ←</button><button class="btn big g-ok-btn" id="by">→ 对 ✓</button></div>`;
      const nextQ = () => {
        cur = EF.pick(vocab);
        truth = Math.random() < 0.5;
        const en = truth ? cur[1] : EF.pick(vocab.filter((v) => v[1] !== cur[1]))[1];
        $('#vfr', el).textContent = EF.clean(cur[0]);
        $('#ven', el).textContent = en;
      };
      const ans = (yes) => {
        if (!alive) return;
        n++;
        const good = yes === truth;
        EF.beep(good);
        if (good) {
          combo++;
          score += 10 + Math.min(combo, 10);
        } else {
          combo = 0;
          EF.toast(`${esc(EF.clean(cur[0]))} = ${esc(cur[1])}`, 1400);
        }
        $('#gs', el).textContent = score;
        $('#gc', el).textContent = combo >= 3 ? `🔥×${combo}` : '';
        nextQ();
      };
      $('#bn', el).onclick = () => ans(false);
      $('#by', el).onclick = () => ans(true);
      const onKey = (e) => {
        if (e.key === 'ArrowLeft') ans(false);
        if (e.key === 'ArrowRight') ans(true);
      };
      document.addEventListener('keydown', onKey);
      EF.onLeave(() => document.removeEventListener('keydown', onKey));
      nextQ();
      timer(45, (l) => ($('#gt', el) ? ($('#gt', el).textContent = l) : 0), () => {
        alive = false;
        document.removeEventListener('keydown', onKey);
        endGame(el, id, score, Math.min(30, Math.round(score / 15)), `<p>共答 ${n} 题</p>`);
      });
    });
  }
})();
