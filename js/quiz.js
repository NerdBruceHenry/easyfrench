/* EasyFrench — 通用练习引擎（选择题 / 输入题 / 连词成句） */
(function () {
  const { esc, shuffle, sample } = EF;

  /* ---------- 题目生成器 ---------- */

  /** 用词汇生成题目；pool 是可作干扰项的词条数组 [fr, en, tip] */
  EF.q = {
    /** 打乱选项顺序，返回新的正确答案下标 */
    mix(opts, ans) {
      const options = shuffle(opts);
      return { options, answer: options.indexOf(opts[ans]) };
    },
    frToEn(item, pool) {
      const [fr, en] = item;
      const others = sample(pool.filter((p) => p[1] !== en), 3).map((p) => p[1]);
      const options = shuffle([en, ...others]);
      return { type: 'mcq', label: '选出意思', prompt: esc(fr), say: fr, options, answer: options.indexOf(en), explain: item[2] || '' };
    },
    enToFr(item, pool) {
      const [fr, en] = item;
      const others = sample(pool.filter((p) => p[0] !== fr), 3).map((p) => p[0]);
      const options = shuffle([fr, ...others]);
      return { type: 'mcq', label: '用法语怎么说？', prompt: esc(en), options, answer: options.indexOf(fr), sayAfter: fr, explain: item[2] || '' };
    },
    listen(item, pool) {
      const [fr, en] = item;
      const others = sample(pool.filter((p) => p[0] !== fr), 3).map((p) => p[0]);
      const options = shuffle([fr, ...others]);
      return { type: 'mcq', label: '🎧 听音选词', prompt: '', say: fr, autoSay: true, hidePrompt: true, options, answer: options.indexOf(fr), explain: en };
    },
    type(item) {
      const [fr, en] = item;
      return {
        type: 'type',
        label: '写出法语',
        prompt: esc(en),
        answers: [EF.clean(fr)],
        loose: EF.gender(fr) ? [EF.noArticle(fr)] : [],
        looseNote: '别忘了冠词哦（冠词决定阴阳性）',
        sayAfter: fr,
        explain: item[2] || '',
      };
    },
    order([fr, en]) {
      const words = EF.clean(fr).split(/\s+/);
      return { type: 'order', label: '连词成句', prompt: esc(en), words: shuffle(words), answer: words.join(' '), sayAfter: fr };
    },
    grammar(g) {
      const prompt = esc(g.q).replace(/_{2,}/g, '<span class="blank">____</span>');
      const { options, answer } = EF.q.mix(g.o, g.a);
      return { type: 'mcq', label: '语法', prompt, options, answer, explain: g.e || '', sayAfter: /_{2,}/.test(g.q) && !g.noSay ? g.q.replace(/_{2,}/, g.o[g.a]) : '' };
    },
  };

  /* ---------- 运行器 ---------- */

  /**
   * 在 el 中运行一组题目。完成后调用 onDone({ correct, total, xp })
   */
  EF.runQuiz = (el, questions, onDone) => {
    const queue = questions.map((q, i) => ({ ...q, _id: i }));
    const total = questions.length;
    const firstTry = new Set();
    const failed = new Set();
    let done = 0;
    let combo = 0;
    let bonus = 0;

    function next() {
      if (!queue.length) return finish();
      render(queue.shift());
    }

    function header(q) {
      const pct = Math.round((done / total) * 100);
      return `<div class="qbar"><div style="width:${pct}%"></div></div>
        <div class="qmeta"><span class="qlabel">${q.label || ''}${q.retry ? ' · 再试一次' : ''}</span>
        ${combo >= 3 ? `<span class="combo">🔥 连对 ×${combo}</span>` : ''}</div>`;
    }

    function render(q) {
      const sayBtn = q.say ? `<button class="say-big" data-say="${esc(q.say)}" title="朗读">🔊</button>
        <button class="say-slow" data-say="${esc(q.say)}" data-rate="0.65" title="慢速">🐢</button>` : '';
      let body = '';
      if (q.type === 'mcq') {
        body = `<div class="options">${q.options
          .map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span>${esc(o)}</button>`)
          .join('')}</div>`;
      } else if (q.type === 'type') {
        body = `<form class="typeform"><input id="qin" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="输入法语…">
          ${EF.accentBar('qin')}<button class="btn primary">检查</button></form>`;
      } else if (q.type === 'order') {
        body = `<div class="order-target" id="otarget"></div>
          <div class="order-pool">${q.words.map((w, i) => `<button class="chip" data-i="${i}">${esc(w)}</button>`).join('')}</div>
          <div class="row"><button class="btn ghost" id="oreset">重来</button><button class="btn primary" id="ocheck">检查</button></div>`;
      }
      el.innerHTML = `${header(q)}
        <div class="qcard">
          <div class="qprompt ${q.hidePrompt ? 'audio-only' : ''}">${q.hidePrompt ? '' : `<div class="ptxt">${q.prompt}</div>`}${sayBtn}</div>
          ${body}
          <div class="feedback" id="fb"></div>
        </div>`;
      if (q.autoSay || (q.say && EF.state.settings.autoplay !== false)) setTimeout(() => EF.speech.speak(q.say), 250);

      if (q.type === 'mcq') {
        EF.$$('.opt', el).forEach((b) => (b.onclick = () => answer(q, Number(b.dataset.i) === q.answer, b)));
        keyHandler = (e) => {
          const n = Number(e.key);
          if (n >= 1 && n <= q.options.length) {
            const b = EF.$$('.opt', el)[n - 1];
            if (b && !b.disabled) b.click();
          }
        };
      } else if (q.type === 'type') {
        const input = EF.$('#qin', el);
        input.focus();
        EF.$('.typeform', el).onsubmit = (e) => {
          e.preventDefault();
          if (input.disabled) return;
          const r = EF.check(input.value, q.answers);
          let note = '';
          let ok = r === 'exact';
          if (r === 'accent') {
            ok = true;
            note = '✅ 意思对了，注意重音符号！';
          } else if (r === 'close') {
            note = '差一个字母，算你对，但要记住拼写～';
            ok = true;
          } else if (!ok && q.loose && EF.check(input.value, q.loose) !== 'wrong') {
            ok = true;
            note = q.looseNote;
          }
          input.disabled = true;
          answer(q, ok, null, note);
        };
        keyHandler = null;
      } else if (q.type === 'order') {
        const target = EF.$('#otarget', el);
        const picked = [];
        const pool = EF.$$('.order-pool .chip', el);
        pool.forEach((b) => {
          b.onclick = () => {
            if (b.classList.contains('used')) return;
            b.classList.add('used');
            picked.push(b.dataset.i);
            draw();
          };
        });
        function draw() {
          target.innerHTML = picked.map((i, k) => `<button class="chip on" data-k="${k}">${esc(q.words[i])}</button>`).join('');
          EF.$$('.chip', target).forEach((c) => {
            c.onclick = () => {
              const [i] = picked.splice(Number(c.dataset.k), 1);
              pool[i].classList.remove('used');
              draw();
            };
          });
        }
        EF.$('#oreset', el).onclick = () => {
          picked.length = 0;
          pool.forEach((b) => b.classList.remove('used'));
          draw();
        };
        EF.$('#ocheck', el).onclick = () => {
          if (!picked.length) return;
          const s = picked.map((i) => q.words[i]).join(' ');
          EF.$('#ocheck', el).disabled = true;
          answer(q, EF.norm(s) === EF.norm(q.answer));
        };
        keyHandler = null;
      }
    }

    let keyHandler = null;
    const onKey = (e) => {
      if (!document.body.contains(el)) return document.removeEventListener('keydown', onKey);
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'Enter') {
        const n = EF.$('#qnext', el);
        if (n) return n.click();
      }
      keyHandler && keyHandler(e);
    };
    document.addEventListener('keydown', onKey);

    function answer(q, ok, btn, note = '') {
      EF.beep(ok);
      if (q.type === 'mcq') {
        EF.$$('.opt', el).forEach((b, i) => {
          b.disabled = true;
          if (i === q.answer) b.classList.add('right');
        });
        if (!ok && btn) btn.classList.add('wrong');
      }
      if (ok) {
        if (!failed.has(q._id)) firstTry.add(q._id);
        done++;
        combo++;
        if (combo > 0 && combo % 5 === 0) {
          bonus += 5;
          EF.toast(`🔥 连对 ${combo} 题！额外 +5 XP`);
        }
      } else {
        combo = 0;
        failed.add(q._id);
        if (!q.retry) queue.push({ ...q, retry: true, options: q.options, words: q.words ? shuffle(q.words) : q.words });
        else done++;
      }
      let correctLine = '';
      if (!ok || note) {
        if (q.type === 'mcq') correctLine = `正确答案：<b>${esc(q.options[q.answer])}</b>`;
        else if (q.type === 'type') correctLine = `正确答案：<b>${esc(q.answers[0])}</b>`;
        else if (q.type === 'order') correctLine = `正确顺序：<b>${esc(q.answer)}</b>`;
      }
      const fb = EF.$('#fb', el);
      fb.className = 'feedback show ' + (ok ? 'ok' : 'bad');
      fb.innerHTML = `<div class="fbhead">${ok ? EF.pick(['Très bien ! 👏', 'Parfait ! ✨', 'Bravo ! 🎉', 'Super ! 💪', 'Exactement ! ✅']) : EF.pick(['Pas tout à fait… 🤔', 'Presque ! 💡', 'Oups ! 😅'])}</div>
        ${note ? `<div>${esc(note)}</div>` : ''}
        ${correctLine ? `<div>${correctLine}</div>` : ''}
        ${q.explain ? `<div class="explain">${esc(q.explain)}</div>` : ''}
        <button class="btn primary" id="qnext">继续 ↵</button>`;
      if (q.sayAfter) EF.speech.speak(q.sayAfter);
      EF.$('#qnext', el).onclick = next;
      EF.$('#qnext', el).focus({ preventScroll: true });
      fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    function finish() {
      document.removeEventListener('keydown', onKey);
      const correct = firstTry.size;
      const xp = correct * 5 + bonus;
      onDone({ correct, total, xp, ratio: total ? correct / total : 0 });
    }

    next();
  };

  /** 结果页通用模板 */
  EF.resultCard = ({ correct, total, xp, ratio }, extra = '') => {
    const pct = Math.round(ratio * 100);
    const msg = pct >= 90 ? 'Magnifique ! 太棒了！' : pct >= 70 ? 'Bien joué ! 做得好！' : pct >= 50 ? 'Pas mal ! 继续加油！' : 'Courage ! 再来一次会更好！';
    return `<div class="result">
      <div class="big">${pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '💪' : '🌱'}</div>
      <h2>${msg}</h2>
      <p>首次答对 <b>${correct}</b> / ${total}（${pct}%）· 获得 <b>+${xp} XP</b></p>
      ${extra}
    </div>`;
  };
})();
