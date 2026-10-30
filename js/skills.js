/* EasyFrench — 听说读写训练页面 */
(function () {
  const { $, $$, esc } = EF;
  const app = () => $('#app');

  const levelPicker = (cur, base) =>
    `<div class="lvl-pick">${EF.LEVELS.map((l) => `<a href="${base}${l}" class="${l === cur ? 'active' : ''}" style="--c:${EF.LEVEL_INFO[l].color}">${l}</a>`).join('')}</div>`;

  /** 推荐级别：下一单元所在级别 */
  const curLevel = () => EF.nextUnit().level;

  /** 某级别的所有例句（只取已学单元 + 下一单元，若太少则取整个级别） */
  function sentencesFor(level) {
    const us = EF.units.filter((u) => u.level === level);
    const learned = us.filter((u) => EF.state.units[u.id] && (EF.state.units[u.id].done || EF.state.units[u.id].vocabSeen));
    const src = learned.length >= 2 ? learned : us;
    return src.flatMap((u) => u.examples);
  }

  /* ---------- 听写 ---------- */
  EF.route(/^listen(?:\/(\w\d))?$/, (lvl) => {
    lvl = lvl || curLevel();
    const pool = EF.sample(sentencesFor(lvl), 5);
    app().innerHTML = `<h1 class="page-h">🎧 听写 Dictée</h1>
      <p class="muted">听写是提高听力最有效的方法之一：它强迫你听清每一个词。可以无限次重听，🐢 是慢速。</p>
      ${levelPicker(lvl, '#/listen/')}
      <div id="dict"></div>
      <div class="card"><h2>更多听力练习</h2>
        <div class="row"><a class="btn" href="#/game/numbers">🔢 数字听写（法语数字是公认难点）</a><a class="btn" href="#/pron">👄 辨音练习</a><a class="btn" href="#/resources">📻 真实听力资源</a></div></div>`;
    dictation($('#dict'), pool, lvl);
  });

  function dictation(el, pool, lvl) {
    let i = 0, total = 0;
    function show() {
      if (i >= pool.length) {
        const xp = Math.round(total / 10);
        EF.addXP(xp, null);
        EF.doTask('listen');
        el.innerHTML = `<div class="result"><div class="big">👂</div><h2>听写完成！</h2><p>平均准确率 ${Math.round(total / pool.length)}% · +${xp} XP</p>
          <a class="btn primary" href="#/listen/${lvl}" onclick="setTimeout(()=>window.dispatchEvent(new HashChangeEvent('hashchange')),0)">再来 5 句</a></div>`;
        return;
      }
      const [fr, en] = pool[i];
      el.innerHTML = `<div class="qbar"><div style="width:${(i / pool.length) * 100}%"></div></div>
        <div class="card center">
          <div class="small muted">第 ${i + 1} / ${pool.length} 句</div>
          <div class="row center"><button class="say-big" data-say="${esc(fr)}">🔊</button><button class="say-big" data-say="${esc(fr)}" data-rate="0.6">🐢</button></div>
          <button class="btn ghost small" id="hint">💡 提示（英文意思）</button><div id="hinttxt" class="muted" hidden>${esc(en)}</div>
          <form id="df"><textarea id="din" rows="2" placeholder="写下你听到的法语句子…" autocapitalize="off" spellcheck="false"></textarea>
          ${EF.accentBar('din')}<button class="btn primary">检查</button></form>
          <div id="dres"></div>
        </div>`;
      setTimeout(() => EF.speech.speak(fr), 300);
      $('#hint').onclick = () => ($('#hinttxt').hidden = false);
      $('#din').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          $('#df').requestSubmit();
        }
      });
      $('#df').onsubmit = (e) => {
        e.preventDefault();
        if ($('#dnext')) return;
        const diff = wordDiff(fr, $('#din').value);
        total += diff.score;
        EF.state.stats.listen++;
        EF.save();
        EF.beep(diff.score >= 80);
        $('#dres').innerHTML = `<div class="feedback show ${diff.score >= 80 ? 'ok' : 'bad'}">
          <div class="fbhead">准确率 ${diff.score}%</div>
          <div class="diff">${diff.html}</div>
          <div class="exfr">${esc(fr)}</div><div class="exen">${esc(en)}</div>
          <button class="btn primary" id="dnext">下一句 ›</button></div>`;
        $('#dnext').onclick = () => {
          i++;
          show();
        };
        $('#dnext').focus();
      };
      $('#din').focus();
    }
    show();
  }

  /** 逐词对比，返回彩色 html 和得分 */
  function wordDiff(target, input) {
    const tw = EF.norm(target).split(' ').filter(Boolean);
    const iw = EF.norm(input).split(' ').filter(Boolean);
    const used = new Array(iw.length).fill(false);
    let pts = 0;
    const html = tw
      .map((w) => {
        let k = iw.findIndex((x, j) => !used[j] && x === w);
        if (k >= 0) {
          used[k] = true;
          pts += 1;
          return `<span class="w-ok">${esc(w)}</span>`;
        }
        k = iw.findIndex((x, j) => !used[j] && EF.stripAccents(x) === EF.stripAccents(w));
        if (k >= 0) {
          used[k] = true;
          pts += 0.7;
          return `<span class="w-acc" title="你写的：${esc(iw[k])}">${esc(w)}</span>`;
        }
        return `<span class="w-miss">${esc(w)}</span>`;
      })
      .join(' ');
    const extra = used.filter((u) => !u).length;
    const score = Math.max(0, Math.round(((pts - extra * 0.3) / tw.length) * 100));
    return { html: html + `<div class="small muted">绿色 = 正确，黄色 = 重音/拼写小错，红色 = 漏听或写错</div>`, score: Math.min(100, score) };
  }

  /* ---------- 跟读组件 ---------- */
  EF.shadowing = (el, sentences, opts = {}) => {
    let i = 0, sum = 0, cnt = 0;
    const list = sentences.slice();
    function show() {
      if (i >= list.length) {
        const xp = cnt * 4;
        EF.addXP(xp, null);
        EF.doTask('speak');
        el.innerHTML = `<div class="result"><div class="big">🗣️</div><h2>跟读完成！</h2>
          <p>${cnt ? `平均得分 ${Math.round(sum / cnt)} · ` : ''}+${xp} XP</p>${opts.after || ''}</div>`;
        opts.onRound && opts.onRound();
        return;
      }
      const [fr, en] = list[i];
      el.innerHTML = `<div class="qbar"><div style="width:${(i / list.length) * 100}%"></div></div>
        <div class="card center shadow">
          <div class="small muted">${i + 1} / ${list.length}</div>
          <div class="sh-fr" id="shfr">${esc(fr)}</div>
          <div class="exen">${esc(en)}</div>
          <div class="row center">
            <button class="btn" data-say="${esc(fr)}">🔊 原声</button>
            <button class="btn" data-say="${esc(fr)}" data-rate="0.65">🐢 慢速</button>
            ${EF.speech.canListen ? `<button class="btn primary" id="rec">🎤 我来说</button>` : ''}
            ${window.MediaRecorder ? `<button class="btn" id="selfrec">⏺ 录音回放</button>` : ''}
          </div>
          ${EF.speech.canListen ? '' : '<p class="small muted">当前浏览器不支持语音识别评分（推荐 Chrome / Edge）。你仍然可以大声跟读，并用「录音回放」对比自己和原声。</p>'}
          <div id="shres"></div>
          <div class="row center"><button class="btn ghost" id="skip">${EF.speech.canListen ? '跳过' : '我读完了'} ›</button></div>
        </div>`;
      setTimeout(() => EF.speech.speak(fr), 300);
      $('#skip', el).onclick = () => {
        if (!EF.speech.canListen) {
          cnt++;
          sum += 0;
          EF.state.stats.speak++;
          EF.save();
        }
        i++;
        show();
      };
      const rec = $('#rec', el);
      if (rec)
        rec.onclick = async () => {
          rec.disabled = true;
          rec.textContent = '🔴 正在听…';
          try {
            const alts = await EF.speech.listen();
            const r = EF.speech.compare(fr, alts);
            $('#shfr', el).innerHTML = r.words.map((w) => `<span class="${w.ok ? 'w-ok' : 'w-miss'}">${esc(w.w)}</span>`).join(' ');
            const msg = r.score >= 90 ? 'Excellent ! 🌟' : r.score >= 70 ? 'Très bien ! 👍' : r.score >= 40 ? 'Pas mal, encore une fois ! 💪' : 'Essaie encore ! 🔁';
            $('#shres', el).innerHTML = `<div class="feedback show ${r.score >= 70 ? 'ok' : 'bad'}"><div class="fbhead">${r.score} 分 · ${msg}</div>
              <div class="small">识别到：「${esc(r.heard || '（没有听到声音）')}」</div>
              <div class="row center"><button class="btn primary" id="shnext">下一句 ›</button></div></div>`;
            EF.beep(r.score >= 70);
            cnt++;
            sum += r.score;
            EF.state.stats.speak++;
            EF.save();
            $('#shnext', el).onclick = () => {
              i++;
              show();
            };
          } catch (err) {
            const m = err.message === 'not-allowed' ? '请允许浏览器使用麦克风' : err.message === 'no-speech' ? '没有听到声音，请靠近麦克风再试' : '识别出错：' + err.message;
            EF.toast(m);
          }
          rec.disabled = false;
          rec.textContent = '🎤 再说一次';
        };
      const sr = $('#selfrec', el);
      if (sr) sr.onclick = () => selfRecord(sr);
    }
    show();
  };

  /** 用 MediaRecorder 录 4 秒并回放 */
  async function selfRecord(btn) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      const chunks = [];
      mr.ondataavailable = (e) => chunks.push(e.data);
      mr.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const url = URL.createObjectURL(new Blob(chunks, { type: mr.mimeType }));
        new Audio(url).play();
        btn.textContent = '⏺ 录音回放';
        btn.disabled = false;
      };
      btn.disabled = true;
      btn.textContent = '🔴 录音中（5秒）…';
      mr.start();
      setTimeout(() => mr.state === 'recording' && mr.stop(), 5000);
    } catch (e) {
      EF.toast('无法使用麦克风：' + e.message);
    }
  }

  /* ---------- 口语中心 ---------- */
  EF.route(/^speak(?:\/(\w\d))?$/, (lvl) => {
    lvl = lvl || curLevel();
    app().innerHTML = `<h1 class="page-h">🗣️ 口语 Parler</h1>
      <div class="card"><h2>🎭 情景对话</h2><p class="muted small">你扮演其中一个角色。看英文提示，用法语说出来，系统给你打分。</p>
        <div class="dlg-list">${EF.dialogues.map((d) => `<a class="dlg" href="#/dialogue/${d.id}"><span class="lvl-tag" style="background:${EF.LEVEL_INFO[d.level].color}">${d.level}</span> ${d.icon} <b>${esc(d.title)}</b><small>${esc(d.zh)}</small></a>`).join('')}</div></div>
      <div class="card"><h2>🔁 跟读 Shadowing</h2><p class="muted small">先听，再模仿语调和节奏。法语的重音总在<b>词组最后一个音节</b>，和英语很不一样。</p>
        ${levelPicker(lvl, '#/speak/')}<div id="shadow"></div></div>
      <a class="card skill-inline" href="#/pron">👄 不会发某些音？去 <b>发音课</b> ›</a>`;
    EF.shadowing($('#shadow'), EF.sample(sentencesFor(lvl), 5), {
      after: `<a class="btn primary" href="#/speak/${lvl}" onclick="setTimeout(()=>window.dispatchEvent(new HashChangeEvent('hashchange')),0)">再来 5 句</a>`,
    });
  });

  /* ---------- 情景对话 ---------- */
  EF.route(/^dialogue\/([\w-]+)$/, (id) => {
    const d = EF.dialogues.find((x) => x.id === id);
    if (!d) return EF.go('#/speak');
    app().innerHTML = `<a href="#/speak" class="back">‹ 口语</a><h1 class="page-h">${d.icon} ${esc(d.title)}</h1>
      <p class="muted">${esc(d.zh)} · 你是 <b>${esc(d.you)}</b></p>
      <div class="chat" id="chat"></div><div id="ctl" class="chat-ctl"></div>`;
    const chat = $('#chat'), ctl = $('#ctl');
    let i = 0, sum = 0, n = 0;
    let alive = true;
    EF.onLeave(() => (alive = false));
    const bubble = (cls, html) => {
      chat.insertAdjacentHTML('beforeend', `<div class="bubble ${cls}">${html}</div>`);
      chat.lastElementChild.scrollIntoView({ block: 'end', behavior: 'smooth' });
    };
    async function step() {
      if (!alive) return;
      if (i >= d.lines.length) {
        const xp = 15 + n * 3;
        EF.addXP(xp, null);
        EF.doTask('speak');
        ctl.innerHTML = `<div class="result"><div class="big">🎭</div><h2>对话完成！</h2><p>${n ? `平均得分 ${Math.round(sum / n)} · ` : ''}+${xp} XP</p>
          <div class="row center"><a class="btn" href="#/dialogue/${d.id}" onclick="setTimeout(()=>window.dispatchEvent(new HashChangeEvent('hashchange')),0)">再练一遍</a><a class="btn primary" href="#/speak">其他对话</a></div></div>`;
        return;
      }
      const [who, fr, en] = d.lines[i];
      if (who === 'A') {
        bubble('them', `<b>${esc(d.them)}</b><div class="fr" data-say="${esc(fr)}">${esc(fr)} 🔊</div><div class="small muted">${esc(en)}</div>`);
        ctl.innerHTML = '';
        await EF.speech.speak(fr);
        i++;
        setTimeout(step, 400);
      } else {
        ctl.innerHTML = `<div class="card center"><div class="small muted">轮到你了，用法语说：</div><div class="hint-en">${esc(en)}</div>
          <div class="row center">
            ${EF.speech.canListen ? '<button class="btn primary" id="say">🎤 说</button>' : ''}
            <button class="btn" id="peek">👀 看答案</button></div></div>`;
        const reveal = (scoreHtml) => {
          bubble('me', `<b>${esc(d.you)}</b><div class="fr" data-say="${esc(fr)}">${esc(fr)} 🔊</div>${scoreHtml || ''}`);
          i++;
          ctl.innerHTML = `<div class="row center"><button class="btn" data-say="${esc(fr)}">🔊 听标准读法</button><button class="btn primary" id="cont">继续 ›</button></div>`;
          $('#cont').onclick = step;
        };
        $('#peek').onclick = () => reveal('<div class="small muted">（看了答案——大声读一遍吧！）</div>');
        const say = $('#say');
        if (say)
          say.onclick = async () => {
            say.disabled = true;
            say.textContent = '🔴 正在听…';
            try {
              const alts = await EF.speech.listen();
              const r = EF.speech.compare(fr, alts);
              n++;
              sum += r.score;
              EF.state.stats.speak++;
              EF.save();
              EF.beep(r.score >= 60);
              reveal(`<div class="small">${r.score} 分 · 你说：「${esc(r.heard || '…')}」</div>`);
            } catch (err) {
              EF.toast(err.message === 'not-allowed' ? '请允许使用麦克风' : '没听清，再试一次');
              say.disabled = false;
              say.textContent = '🎤 说';
            }
          };
      }
    }
    step();
  });

  /* ---------- 发音课 ---------- */
  EF.route(/^pron(?:\/([\w-]+))?$/, (id) => {
    if (!id) {
      app().innerHTML = `<h1 class="page-h">👄 发音课</h1>
        <p>法语发音对英语使用者有几个经典难点。每课包含讲解、例词和<b>辨音小测</b>（听音选词）。</p>
        <div class="pron-list">${EF.pron.map((p, k) => `<a class="card pron-item" href="#/pron/${p.id}"><span class="pnum">${k + 1}</span><span><b>${esc(p.title)}</b><small>${esc(p.sub)}</small></span><span class="arr">›</span></a>`).join('')}</div>`;
      return;
    }
    const p = EF.pron.find((x) => x.id === id);
    if (!p) return EF.go('#/pron');
    const idx = EF.pron.indexOf(p);
    const nxt = EF.pron[idx + 1];
    app().innerHTML = `<a href="#/pron" class="back">‹ 发音课</a><h1 class="page-h">${esc(p.title)}</h1>
      <article class="card grammar">${p.html}</article>
      <div class="card"><h2>例词（点击朗读）</h2><div class="chips">${p.examples.map((w) => `<span class="chip" data-say="${esc(EF.clean(w))}">${esc(w)}</span>`).join('')}</div></div>
      ${p.pairs && p.pairs.length ? `<div class="card"><h2>🎧 辨音小测</h2><div id="mp"></div></div>` : ''}
      ${nxt ? `<div class="next-step"><a class="btn primary" href="#/pron/${nxt.id}">下一课：${esc(nxt.title)} ›</a></div>` : ''}`;
    $$('.grammar em').forEach((e) => {
      e.dataset.say = e.textContent;
      e.classList.add('sayable');
    });
    if (p.pairs && p.pairs.length) minimalPairs($('#mp'), p.pairs);
  });

  function minimalPairs(el, pairs) {
    const qs = EF.shuffle(pairs.flatMap((pr) => [{ pr, k: 0 }, { pr, k: 1 }])).slice(0, 8);
    let i = 0, ok = 0;
    function show() {
      if (i >= qs.length) {
        EF.addXP(ok * 2, null);
        el.innerHTML = `<p class="center">得分 <b>${ok}/${qs.length}</b> · +${ok * 2} XP</p><div class="row center"><button class="btn" id="again">再测一次</button></div>`;
        $('#again', el).onclick = () => minimalPairs(el, pairs);
        return;
      }
      const { pr, k } = qs[i];
      el.innerHTML = `<div class="center"><div class="small muted">${i + 1}/${qs.length} · 你听到的是哪一个？</div>
        <div class="row center"><button class="say-big" data-say="${esc(pr[k])}">🔊</button></div>
        <div class="row center">${pr.map((w, j) => `<button class="btn opt-mp" data-j="${j}">${esc(w)}</button>`).join('')}</div><div id="mpr"></div></div>`;
      setTimeout(() => EF.speech.speak(pr[k]), 250);
      $$('.opt-mp', el).forEach((b) => {
        b.onclick = () => {
          const right = Number(b.dataset.j) === k;
          if (right) ok++;
          EF.beep(right);
          $$('.opt-mp', el).forEach((x, j) => {
            x.disabled = true;
            if (j === k) x.classList.add('right');
          });
          if (!right) b.classList.add('wrong');
          $('#mpr', el).innerHTML = `<div class="row center"><button class="btn" data-say="${esc(pr[0])}">🔊 ${esc(pr[0])}</button><button class="btn" data-say="${esc(pr[1])}">🔊 ${esc(pr[1])}</button><button class="btn primary" id="mpn">下一个 ›</button></div>`;
          $('#mpn', el).onclick = () => {
            i++;
            show();
          };
        };
      });
    }
    show();
  }

  /* ---------- 阅读 ---------- */
  EF.route(/^read$/, () => {
    app().innerHTML = `<h1 class="page-h">📖 阅读 Lire</h1>
      <p class="muted">分级短文，点击任意单词查看释义，▶️ 可以听全文朗读。读完做理解题。<br>阅读技巧：先不查词通读一遍，猜大意；再细读查词；最后跟着朗读一遍。</p>
      ${EF.LEVELS.map((l) => `<h2 class="sec-h"><span class="lvl-tag" style="background:${EF.LEVEL_INFO[l].color}">${l}</span> ${EF.LEVEL_INFO[l].name}</h2>
        <div class="read-list">${EF.readings.filter((r) => r.level === l).map((r) => {
          const sc = EF.state.reads[r.id];
          return `<a class="card read-item" href="#/read/${r.id}"><span class="ric">${r.icon}</span><span><b>${esc(r.title)}</b><small>${esc(r.zh)} · 约 ${r.text.split(/\s+/).length} 词</small></span>${sc != null ? `<span class="pill">✅ ${sc}%</span>` : ''}</a>`;
        }).join('')}</div>`).join('')}`;
  });

  EF.route(/^read\/([\w-]+)$/, (id) => {
    const r = EF.readings.find((x) => x.id === id);
    if (!r) return EF.go('#/read');
    const paras = r.text.split(/\n\s*\n/);
    app().innerHTML = `<a href="#/read" class="back">‹ 阅读</a>
      <h1 class="page-h">${r.icon} ${esc(r.title)}</h1><p class="muted">${esc(r.zh)} · <span class="lvl-tag" style="background:${EF.LEVEL_INFO[r.level].color}">${r.level}</span></p>
      <div class="toolbar"><button class="btn" id="readall">▶️ 朗读全文</button><button class="btn" id="stopread">⏹ 停止</button></div>
      <article class="card reading" id="rtext">${paras.map((p) => `<p>${tokenize(p)}</p>`).join('')}</article>
      <div id="pop" class="pop" hidden></div>
      <div class="card"><h2>📝 理解题</h2><div id="rq"></div></div>`;
    const pop = $('#pop');
    $('#rtext').addEventListener('click', (e) => {
      const w = e.target.closest('.w');
      if (!w) return;
      const word = w.textContent;
      const g = lookup(word, r.gloss);
      EF.speech.speak(word);
      const rect = w.getBoundingClientRect();
      pop.innerHTML = `<b>${esc(word)}</b> ${g ? `<div>${esc(g)}</div>` : `<div class="small muted">本文未收录</div>`}
        <a class="small" target="_blank" rel="noopener" href="https://www.wordreference.com/fren/${encodeURIComponent(word.replace(/^[a-z]+'/i, ''))}">WordReference ↗</a>`;
      pop.hidden = false;
      pop.style.top = window.scrollY + rect.bottom + 6 + 'px';
      pop.style.left = Math.max(8, Math.min(window.innerWidth - 248, rect.left)) + 'px';
      $$('.w.sel').forEach((x) => x.classList.remove('sel'));
      w.classList.add('sel');
    });
    const hidePop = (e) => {
      if (!e.target.closest('.w') && !e.target.closest('#pop')) pop.hidden = true;
    };
    document.addEventListener('click', hidePop);
    EF.onLeave(() => document.removeEventListener('click', hidePop));
    let stop = false;
    EF.onLeave(() => (stop = true));
    $('#readall').onclick = async () => {
      stop = false;
      for (const p of $$('#rtext p')) {
        if (stop) break;
        p.classList.add('speaking');
        await EF.speech.speak(p.textContent);
        p.classList.remove('speaking');
      }
    };
    $('#stopread').onclick = () => {
      stop = true;
      EF.speech.stop();
      $$('#rtext p').forEach((p) => p.classList.remove('speaking'));
    };
    const qs = r.questions.map((q) => ({ type: 'mcq', label: '阅读理解', prompt: esc(q.q), ...EF.q.mix(q.o, q.a), explain: q.e || '' }));
    $('#rq').innerHTML = `<button class="btn primary" id="rstart">开始答题</button>`;
    $('#rstart').onclick = () =>
      EF.runQuiz($('#rq'), qs, (res) => {
        const pct = Math.round(res.ratio * 100);
        EF.state.reads[r.id] = Math.max(EF.state.reads[r.id] || 0, pct);
        EF.save();
        const xp = res.xp + 15;
        EF.addXP(xp, 'read');
        EF.doTask('read');
        $('#rq').innerHTML = EF.resultCard({ ...res, xp }, `<a class="btn primary" href="#/read">更多文章</a>`);
      });
  });

  function tokenize(p) {
    return esc(p)
      .replace(/&#39;/g, "'")
      .replace(/([A-Za-zÀ-ÖØ-öø-ÿœŒ]+(?:['’][A-Za-zÀ-ÖØ-öø-ÿœŒ]+)?(?:-[A-Za-zÀ-ÖØ-öø-ÿœŒ]+)*)/g, '<span class="w">$1</span>');
  }

  /** 查词：先查文章词汇表，再查课程词库 */
  function lookup(word, gloss = {}) {
    const w = word.toLowerCase().replace(/’/g, "'");
    const cands = [w, w.replace(/^(l|d|j|m|t|s|n|c|qu|jusqu|lorsqu|puisqu)'/, '')];
    for (const c of cands) {
      if (gloss[c]) return gloss[c];
      for (const k of Object.keys(gloss)) if (k.toLowerCase() === c) return gloss[k];
    }
    for (const c of cands) {
      for (const v of Object.values(EF.vocab)) {
        const base = EF.noArticle(v.fr).toLowerCase();
        if (base === c || base.split(/[ ,]/)[0] === c) return v.en;
      }
    }
    return '';
  }

  /* ---------- 写作 ---------- */

  /** 让 \b 和 \w 支持法语重音字母（JS 默认只认 ASCII） */
  const W = '[\\p{L}\\p{N}_]';
  function wordRe(src) {
    const re = src
      .replace(/\\b/g, `(?:(?<!${W})(?=${W})|(?<=${W})(?!${W}))`)
      .replace(/\\w/g, W);
    return new RegExp(re, 'iu');
  }

  /* ---------- 写作页面 ---------- */
  EF.route(/^write$/, () => {
    app().innerHTML = `<h1 class="page-h">✍️ 写作 Écrire</h1>
      <p class="muted">每个任务都有明确的要求清单（字数、必须用到的语法和连接词），写的时候会实时检查。完成后可以一键复制「AI 批改提示词」，粘贴给 Claude 等 AI 获得详细批改。</p>
      ${EF.LEVELS.map((l) => `<h2 class="sec-h"><span class="lvl-tag" style="background:${EF.LEVEL_INFO[l].color}">${l}</span> ${EF.LEVEL_INFO[l].name}</h2>
        <div class="read-list">${EF.prompts.filter((p) => p.level === l).map((p) => {
          const w = EF.state.writes[p.id];
          return `<a class="card read-item" href="#/write/${p.id}"><span class="ric">${p.icon}</span><span><b>${esc(p.title)}</b><small>${esc(p.zh)} · ≥ ${p.min} 词</small></span>${w ? `<span class="pill">✅ ${w.words} 词</span>` : ''}</a>`;
        }).join('')}</div>`).join('')}`;
  });

  EF.route(/^write\/([\w-]+)$/, (id) => {
    const p = EF.prompts.find((x) => x.id === id);
    if (!p) return EF.go('#/write');
    const saved = EF.state.writes[p.id] || {};
    const draftKey = 'ef-draft-' + p.id;
    let draft = '';
    try {
      draft = localStorage.getItem(draftKey) || saved.text || '';
    } catch (e) {
      draft = saved.text || '';
    }
    app().innerHTML = `<a href="#/write" class="back">‹ 写作</a>
      <h1 class="page-h">${p.icon} ${esc(p.title)}</h1>
      <div class="card"><div class="lvl-tag" style="background:${EF.LEVEL_INFO[p.level].color}">${p.level}</div>
        <p><b>任务：</b>${esc(p.zh)}</p><p class="fr-task">${esc(p.fr)}</p>
        ${p.help ? `<details><summary>💡 有用的表达</summary><div class="chips">${p.help.map((h) => `<span class="chip" data-say="${esc(h)}">${esc(h)}</span>`).join('')}</div></details>` : ''}
      </div>
      <div class="write-wrap">
        <textarea id="wt" rows="12" placeholder="Écris ici…" spellcheck="false">${esc(draft)}</textarea>
        ${EF.accentBar('wt')}
        <div class="checklist" id="cl"></div>
      </div>
      <div class="row"><button class="btn primary" id="wdone">✅ 完成</button><button class="btn" id="wai">🤖 复制 AI 批改提示词</button><button class="btn" id="wread">🔊 朗读我写的</button><button class="btn ghost" id="wmodel">📄 参考范文</button></div>
      <div id="model" class="card" hidden><h3>参考范文</h3><p class="fr-task" data-say="${esc(p.model)}">${esc(p.model)} 🔊</p><p class="small muted">范文只是一种写法，不要照抄——先自己写，再对比学习表达。</p></div>`;
    const ta = $('#wt');
    const count = (t) => (t.match(/[A-Za-zÀ-ÖØ-öø-ÿœŒ]+(?:['’-][A-Za-zÀ-ÖØ-öø-ÿœŒ]+)*/g) || []).length;
    const update = () => {
      const t = ta.value;
      const n = count(t);
      const items = [{ label: `字数 ${n} / ${p.min}`, ok: n >= p.min }, ...p.checks.map((c) => ({ label: c.label, ok: wordRe(c.re).test(t) }))];
      $('#cl').innerHTML = items.map((x) => `<div class="${x.ok ? 'ok' : ''}">${x.ok ? '✅' : '⬜'} ${esc(x.label)}</div>`).join('');
      try {
        localStorage.setItem(draftKey, t);
      } catch (e) {}
      return { n, items };
    };
    ta.addEventListener('input', update);
    update();
    $('#wmodel').onclick = () => ($('#model').hidden = !$('#model').hidden);
    $('#wread').onclick = () => EF.speech.speak(ta.value);
    $('#wai').onclick = () => {
      const prompt = `I'm a Chinese learner of French (my English is B2–C1). My current French level is about ${p.level}, and my goal is B2.
Please correct the following French text I wrote for this task:
Task: ${p.fr}

My text:
"""
${ta.value.trim()}
"""

Please:
1. Give a corrected version.
2. List each mistake with a short explanation (in Chinese), grouped by type (grammar, vocabulary, spelling/accents, style).
3. Point out where I could use more natural or more advanced (${p.level === 'B2' ? 'C1' : EF.LEVELS[EF.LEVELS.indexOf(p.level) + 1]}) expressions.
4. Estimate the CEFR level of this text and give me 2 concrete things to focus on next.`;
      navigator.clipboard.writeText(prompt).then(
        () => EF.toast('📋 已复制！粘贴到 Claude / ChatGPT 等 AI 即可获得批改'),
        () => {
          window.prompt('复制下面的内容：', prompt);
        },
      );
    };
    $('#wdone').onclick = () => {
      const { n, items } = update();
      if (n < Math.min(10, p.min)) return EF.toast('再多写一点吧！');
      const passed = items.filter((x) => x.ok).length;
      const first = !EF.state.writes[p.id];
      EF.state.writes[p.id] = { text: ta.value, words: n, date: EF.today() };
      EF.save();
      const xp = Math.min(60, Math.round(n / 3)) + passed * 5 + (first ? 10 : 0);
      EF.addXP(xp, 'write');
      EF.doTask('write');
      EF.confetti();
      EF.toast(`✍️ 写作完成：+${xp} XP（满足 ${passed}/${items.length} 项要求）。建议用「AI 批改」获得反馈！`, 4000);
    };
  });
})();
