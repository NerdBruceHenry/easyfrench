/* EasyFrench — 路由与主要页面 */
(function () {
  const { $, $$, esc } = EF;
  const app = () => $('#app');

  EF.LEVEL_INFO = {
    A1: { name: '入门', color: '#2bb673', desc: '能听懂并使用日常熟悉的表达，介绍自己，问路、点餐、谈论家人。' },
    A2: { name: '基础', color: '#1e90ff', desc: '能讲述过去的经历和未来的计划，处理购物、看病、旅行等常见情境。' },
    B1: { name: '进阶', color: '#8e5cf7', desc: '能应对工作和旅行中的大多数情况，表达观点、讲故事、给出理由。' },
    B2: { name: '中高级', color: '#ef4135', desc: '能流利、自然地与母语者交流，读懂报刊文章，写出有条理的议论文。' },
  };

  /* ---------- 路由 ---------- */
  const routes = [];
  EF.route = (re, fn) => routes.push([re, fn]);
  EF.go = (hash) => (location.hash = hash);

  function dispatch() {
    EF.speech.stop();
    (EF._cleanups || []).forEach((f) => f());
    EF._cleanups = [];
    const path = location.hash.replace(/^#\/?/, '');
    for (const [re, fn] of routes) {
      const m = path.match(re);
      if (m) {
        app().innerHTML = '';
        fn(...m.slice(1));
        window.scrollTo(0, 0);
        markTab(path);
        return;
      }
    }
    EF.go('#/');
  }
  EF.onLeave = (fn) => EF._cleanups.push(fn);

  function markTab(path) {
    const first = path.split('/')[0];
    const map = { '': 'home', path: 'path', unit: 'path', review: 'review', games: 'games', game: 'games' };
    const tab = map[first] || (['skills', 'listen', 'speak', 'pron', 'read', 'write', 'dialogue'].includes(first) ? 'skills' : '');
    $$('.tabbar a').forEach((a) => a.classList.toggle('active', a.dataset.tab === tab));
  }

  EF.updateTopbar = () => {
    $('#tb-streak').textContent = EF.currentStreak();
    $('#tb-xp').textContent = EF.state.xp;
    const due = EF.srs.due().length;
    const badge = $('#tb-due');
    badge.textContent = due > 99 ? '99+' : due;
    badge.hidden = !due;
  };

  EF.nextUnit = () => EF.units.find((u) => !(EF.state.units[u.id] && EF.state.units[u.id].done)) || EF.units[EF.units.length - 1];

  const levelProgress = (lvl) => {
    const us = EF.units.filter((u) => u.level === lvl);
    const done = us.filter((u) => EF.state.units[u.id] && EF.state.units[u.id].done).length;
    return { done, total: us.length };
  };

  /* ---------- 首页 ---------- */
  EF.route(/^$/, () => {
    const s = EF.state;
    const r = EF.rank();
    const dxp = EF.dailyXP();
    const goal = s.settings.goal;
    const pct = Math.min(100, Math.round((dxp / goal) * 100));
    const nu = EF.nextUnit();
    const due = EF.srs.due().length;
    const dayIdx = new Date().getDate() % 2;
    const tasks = [
      { key: 'review', icon: '🔁', text: due ? `复习 ${due} 张到期卡片` : Object.keys(s.srs).length ? '复习卡片（今天已清空 ✓）' : '复习卡片（学完第一课后开始）', href: '#/review', done: EF.taskDone('review') || (!due && Object.keys(s.srs).length > 0) },
      { key: 'lesson', icon: '📘', text: `学习：${nu.title} · ${nu.zh}`, href: `#/unit/${nu.id}`, done: EF.taskDone('lesson') },
      { key: 'listen', icon: '🎧', text: '听写 5 句', href: '#/listen', done: EF.taskDone('listen') },
      { key: 'speak', icon: '🗣️', text: '跟读 5 句 / 情景对话', href: '#/speak', done: EF.taskDone('speak') },
      dayIdx
        ? { key: 'read', icon: '📖', text: '读一篇短文', href: '#/read', done: EF.taskDone('read') }
        : { key: 'write', icon: '✍️', text: '写一段法语', href: '#/write', done: EF.taskDone('write') },
      { key: 'game', icon: '🎮', text: '玩一局小游戏放松一下', href: '#/games', done: EF.taskDone('game') },
    ];
    const doneTasks = tasks.filter((t) => t.done).length;
    const nextRankPct = r.next ? Math.round(((s.xp - r.xp) / (r.next.xp - r.xp)) * 100) : 100;

    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = EF.addDays(EF.today(), -i);
      days.push({ d, xp: s.history[d] || 0 });
    }
    const maxXp = Math.max(goal, ...days.map((d) => d.xp));
    const st = EF.srs.stats();

    app().innerHTML = `
      <section class="hero">
        <div>
          <div class="muted">${greeting()}</div>
          <h1>${r.icon} ${r.name}</h1>
          <div class="rankbar"><div style="width:${nextRankPct}%"></div></div>
          <div class="muted small">${r.next ? `距离「${r.next.name}」还差 ${r.next.xp - s.xp} XP` : '最高段位！C\'est magnifique !'}</div>
        </div>
        <div class="ring" style="--p:${pct}">
          <div><b>${dxp}</b><span>/ ${goal} XP</span></div>
        </div>
      </section>

      <section class="card">
        <div class="card-h"><h2>📋 今日计划</h2><span class="pill">${doneTasks}/${tasks.length}</span></div>
        <ul class="tasks">
          ${tasks.map((t) => `<li class="${t.done ? 'done' : ''}"><a href="${t.href}"><span class="ti">${t.done ? '✅' : t.icon}</span><span>${esc(t.text)}</span><span class="arr">›</span></a></li>`).join('')}
        </ul>
      </section>

      <section class="card">
        <div class="card-h"><h2>🗺️ 通往 B2 之路</h2><a href="#/path" class="link">全部课程 ›</a></div>
        <div class="levels">
          ${EF.LEVELS.map((l) => {
            const p = levelProgress(l);
            return `<div class="lvl"><span class="lvl-tag" style="background:${EF.LEVEL_INFO[l].color}">${l}</span>
              <div class="lvl-bar"><div style="width:${p.total ? (p.done / p.total) * 100 : 0}%;background:${EF.LEVEL_INFO[l].color}"></div></div>
              <span class="small muted">${p.done}/${p.total}</span></div>`;
          }).join('')}
        </div>
      </section>

      <section class="grid2">
        <div class="card stat"><div class="si">🔥</div><b>${EF.currentStreak()}</b><span>连续天数（最长 ${s.bestStreak}）</span></div>
        <div class="card stat"><div class="si">🧠</div><b>${st.total}</b><span>词汇卡片（已掌握 ${st.mature}）</span></div>
        <div class="card stat"><div class="si">🎧</div><b>${s.stats.listen}</b><span>听写句子</span></div>
        <div class="card stat"><div class="si">🗣️</div><b>${s.stats.speak}</b><span>跟读句子</span></div>
        <div class="card stat"><div class="si">📖</div><b>${Object.keys(s.reads).length}</b><span>读完的文章</span></div>
        <div class="card stat"><div class="si">✍️</div><b>${Object.keys(s.writes).length}</b><span>完成的写作</span></div>
      </section>

      <section class="card">
        <div class="card-h"><h2>📈 最近 14 天</h2></div>
        <div class="spark">${days.map((d) => `<div title="${d.d}: ${d.xp} XP"><i style="height:${Math.max(3, (d.xp / maxXp) * 100)}%" class="${d.xp >= goal ? 'hit' : ''}"></i></div>`).join('')}</div>
      </section>

      <section class="card">
        <div class="card-h"><h2>🏅 成就</h2><span class="pill">${Object.keys(s.achievements).length}/${EF.ACHIEVEMENTS.length}</span></div>
        <div class="badges">${EF.ACHIEVEMENTS.map((a) => `<div class="badge ${s.achievements[a.id] ? 'got' : ''}" title="${esc(a.desc)}"><span>${a.icon}</span><small>${esc(a.name)}</small></div>`).join('')}</div>
      </section>

      <section class="links3">
        <a class="card" href="#/tools">🧰<span>工具箱</span><small>变位 · 同源词 · 假朋友</small></a>
        <a class="card" href="#/resources">🌍<span>沉浸资源</span><small>播客 · 视频 · 考试</small></a>
        <a class="card" href="#/settings">⚙️<span>设置</span><small>语速 · 目标 · 备份</small></a>
      </section>`;
  });

  function greeting() {
    const h = new Date().getHours();
    if (h < 5) return 'Bonne nuit 🌙 夜深了，学几分钟就去睡吧';
    if (h < 12) return 'Bonjour ☀️ 早上好';
    if (h < 18) return 'Bon après-midi 🌤️ 下午好';
    return 'Bonsoir 🌆 晚上好';
  }

  /* ---------- 课程地图 ---------- */
  EF.route(/^path$/, () => {
    const nu = EF.nextUnit();
    app().innerHTML = `<h1 class="page-h">🗺️ 课程地图</h1>
      <p class="muted">共 ${EF.units.length} 个单元，从零基础到 B2。建议按顺序学习；每单元：词汇 → 语法 → 例句 → 练习 → 口语。练习正确率 ≥70% 即算完成。</p>
      ${EF.LEVELS.map((l) => {
        const info = EF.LEVEL_INFO[l];
        const p = levelProgress(l);
        return `<section class="level-sec">
          <div class="level-h" style="--c:${info.color}"><span class="lvl-tag" style="background:${info.color}">${l}</span>
            <div><b>${info.name}</b> <span class="small muted">${p.done}/${p.total} 完成</span><div class="small muted">${info.desc}</div></div></div>
          <div class="units">
          ${EF.units.filter((u) => u.level === l).map((u, i) => {
            const us = EF.state.units[u.id] || {};
            return `<a class="unit-card ${us.done ? 'done' : ''} ${u === nu ? 'next' : ''}" href="#/unit/${u.id}" style="--c:${info.color}">
              <span class="uicon">${u.icon}</span>
              <span class="ut"><b>${i + 1}. ${esc(u.title)}</b><small>${esc(u.zh)}</small><small class="ug">${esc(u.grammar.title)}</small></span>
              <span class="us">${us.done ? `✅<small>${us.best}%</small>` : u === nu ? '<span class="pill hot">下一课</span>' : ''}</span>
            </a>`;
          }).join('')}
          </div></section>`;
      }).join('')}`;
  });

  /* ---------- 单元 ---------- */
  const UNIT_TABS = [
    ['vocab', '📝 词汇'],
    ['grammar', '📐 语法'],
    ['examples', '💬 例句'],
    ['practice', '🎯 练习'],
    ['speak', '🎤 口语'],
  ];

  EF.route(/^unit\/([\w-]+)(?:\/(\w+))?$/, (id, tab = 'vocab') => {
    const u = EF.units.find((x) => x.id === id);
    if (!u) return EF.go('#/path');
    const idx = EF.units.indexOf(u);
    const info = EF.LEVEL_INFO[u.level];
    const us = (EF.state.units[u.id] = EF.state.units[u.id] || {});
    app().innerHTML = `
      <div class="unit-h" style="--c:${info.color}">
        <a href="#/path" class="back">‹ 课程</a>
        <div class="uh-main"><span class="uicon big">${u.icon}</span>
          <div><span class="lvl-tag" style="background:${info.color}">${u.level}</span> <span class="small muted">第 ${idx + 1} / ${EF.units.length} 单元</span>
          <h1>${esc(u.title)}</h1><div class="muted">${esc(u.zh)}</div></div></div>
        <div class="goal">🎯 ${esc(u.goal)}</div>
      </div>
      <nav class="subtabs">${UNIT_TABS.map(([k, label]) => `<a href="#/unit/${u.id}/${k}" class="${k === tab ? 'active' : ''}">${label}</a>`).join('')}</nav>
      <div id="utab"></div>`;
    const el = $('#utab');
    ({ vocab: unitVocab, grammar: unitGrammar, examples: unitExamples, practice: unitPractice, speak: unitSpeak }[tab] || unitVocab)(u, el, us);
  });

  function nextTabBtn(u, tab, label) {
    return `<div class="next-step"><a class="btn primary" href="#/unit/${u.id}/${tab}">下一步：${label} ›</a></div>`;
  }

  function unitVocab(u, el, us) {
    const inDeck = u.vocab.filter(([fr]) => EF.srs.has(EF.clean(fr))).length;
    el.innerHTML = `
      <div class="toolbar"><button class="btn" id="playall">▶️ 全部朗读</button>
        <button class="btn" id="hideen">🙈 遮住英文</button>
        <button class="btn primary" id="adddeck" ${inDeck === u.vocab.length ? 'disabled' : ''}>➕ 加入复习卡片（${inDeck}/${u.vocab.length}）</button></div>
      <p class="tip">💡 颜色提示：<span class="g-m">蓝色 = 阳性 (le/un)</span>，<span class="g-f">红色 = 阴性 (la/une)</span>。记名词时连冠词一起记！标 ≈ 的是英法同源词，利用你的英语秒记。</p>
      <div class="vocab-list">${u.vocab.map(([fr, en, tip]) => {
        const g = EF.gender(fr);
        return `<div class="vcard ${g ? 'g-' + g : ''}" data-say="${esc(fr)}">
          <div class="vfr">${esc(fr)} <span class="spk">🔊</span></div>
          <div class="ven">${esc(en)}</div>
          ${tip ? `<div class="vtip">${esc(tip)}</div>` : ''}
        </div>`;
      }).join('')}</div>
      ${nextTabBtn(u, 'grammar', '语法')}`;
    us.vocabSeen = true;
    EF.save();
    let stop = false;
    EF.onLeave(() => (stop = true));
    $('#playall').onclick = async () => {
      stop = false;
      for (const card of $$('.vcard', el)) {
        if (stop) break;
        card.classList.add('speaking');
        card.scrollIntoView({ block: 'center', behavior: 'smooth' });
        await EF.speech.speak(card.dataset.say);
        card.classList.remove('speaking');
        await new Promise((r) => setTimeout(r, 500));
      }
    };
    $('#hideen').onclick = () => el.classList.toggle('hide-en');
    $('#adddeck').onclick = () => {
      const n = EF.srs.add(u.vocab.map(([fr]) => EF.clean(fr)));
      EF.toast(`已加入 ${n} 张卡片，去「复习」里背吧！`);
      EF.updateTopbar();
      $('#adddeck').disabled = true;
      $('#adddeck').textContent = `✅ 已全部加入复习卡片`;
    };
  }

  function unitGrammar(u, el) {
    el.innerHTML = `<article class="card grammar"><h2>${esc(u.grammar.title)}</h2>${u.grammar.html}</article>
      <p class="tip">💡 点击<em class="fr-demo">斜体法语</em>可以听发音。</p>
      ${nextTabBtn(u, 'examples', '例句')}`;
    $$('.grammar em', el).forEach((e) => {
      e.dataset.say = e.textContent;
      e.classList.add('sayable');
    });
  }

  function unitExamples(u, el) {
    el.innerHTML = `<div class="toolbar"><button class="btn" id="hideen2">🙈 遮住英文（先自己理解）</button></div>
      <div class="examples">${u.examples.map(([fr, en]) => `<div class="ex">
        <button class="say-sm" data-say="${esc(fr)}">🔊</button><button class="say-sm" data-say="${esc(fr)}" data-rate="0.65">🐢</button>
        <div><div class="exfr">${esc(fr)}</div><div class="exen">${esc(en)}</div></div></div>`).join('')}</div>
      ${nextTabBtn(u, 'practice', '练习')}`;
    $('#hideen2').onclick = () => el.classList.toggle('hide-en');
  }

  EF.unitQuestions = (u) => {
    const pool = [...u.vocab];
    // 干扰项不够时从同级别其他单元补充
    if (pool.length < 8) EF.units.filter((x) => x.level === u.level && x !== u).forEach((x) => pool.push(...x.vocab));
    const vs = EF.shuffle(u.vocab);
    const qs = [];
    vs.slice(0, 3).forEach((v) => qs.push(EF.q.frToEn(v, pool)));
    vs.slice(3, 5).forEach((v) => qs.push(EF.q.enToFr(v, pool)));
    vs.slice(5, 7).forEach((v) => qs.push(EF.q.listen(v, pool)));
    vs.slice(7, 9).forEach((v) => qs.push(EF.q.type(v)));
    const grammarQs = u.quiz.map(EF.q.grammar);
    const orderQs = EF.sample(u.examples.filter(([fr]) => fr.split(' ').length <= 10), 2).map(EF.q.order);
    // 交错排列：词汇、语法穿插，避免枯燥
    const mixed = [];
    const a = EF.shuffle(qs), b = EF.shuffle(grammarQs);
    while (a.length || b.length) {
      if (a.length) mixed.push(a.shift());
      if (a.length) mixed.push(a.shift());
      if (b.length) mixed.push(b.shift());
    }
    return [...mixed, ...orderQs];
  };

  function unitPractice(u, el, us) {
    const qs = EF.unitQuestions(u);
    el.innerHTML = `<div class="card center">
      <h2>🎯 单元练习</h2><p>${qs.length} 道题：词义、听音、拼写、语法、连词成句。答错的题会在最后再出现一次。</p>
      <p class="muted small">快捷键：数字键 1-4 选择，Enter 继续。</p>
      ${us.best ? `<p>历史最佳：<b>${us.best}%</b></p>` : ''}
      <button class="btn primary big" id="start">开始 Allons-y !</button></div>`;
    $('#start').onclick = () => {
      EF.runQuiz(el, qs, (res) => {
        const pct = Math.round(res.ratio * 100);
        const passed = pct >= 70;
        const firstPass = passed && !us.done;
        us.best = Math.max(us.best || 0, pct);
        if (passed) us.done = true;
        const added = passed ? EF.srs.add(u.vocab.map(([fr]) => EF.clean(fr))) : 0;
        EF.save();
        const xp = res.xp + (firstPass ? 30 : 0);
        EF.addXP(xp, 'lessons');
        EF.doTask('lesson');
        if (passed) EF.confetti();
        const idx = EF.units.indexOf(u);
        const nxt = EF.units[idx + 1];
        el.innerHTML = EF.resultCard({ ...res, xp }, `
          ${firstPass ? '<p>🎊 单元首次完成奖励 +30 XP</p>' : ''}
          ${added ? `<p>📚 ${added} 个新词已加入复习卡片</p>` : ''}
          ${passed ? '' : '<p class="muted">正确率达到 70% 才算完成本单元，建议回看语法和词汇后再试一次。</p>'}
          <div class="row center">
            <a class="btn" href="#/unit/${u.id}/practice" onclick="setTimeout(()=>window.dispatchEvent(new HashChangeEvent('hashchange')),0)">🔁 再练一次</a>
            <a class="btn" href="#/unit/${u.id}/speak">🎤 口语练习</a>
            ${nxt && passed ? `<a class="btn primary" href="#/unit/${nxt.id}">下一单元 ›</a>` : ''}
          </div>`);
      });
    };
  }

  function unitSpeak(u, el) {
    el.innerHTML = `<p class="muted">听原声 → 模仿 → 录音。系统会识别你的发音并标出每个词是否被听懂。</p><div id="shadow"></div>`;
    EF.shadowing($('#shadow', el), u.examples, { onRound: () => {} });
  }

  /* ---------- 复习（间隔重复） ---------- */
  EF.route(/^review$/, () => {
    const st = EF.srs.stats();
    if (!st.total) {
      app().innerHTML = `<h1 class="page-h">🔁 复习</h1><div class="card center"><div class="big">🗂️</div>
        <p>你的卡片盒还是空的。完成单元练习，或者在单元词汇页点「加入复习卡片」。</p>
        <a class="btn primary" href="#/unit/${EF.nextUnit().id}">去学第一课</a></div>`;
      return;
    }
    const due = EF.srs.due();
    app().innerHTML = `<h1 class="page-h">🔁 复习</h1>
      <div class="grid3">
        <div class="card stat"><b>${st.due}</b><span>今日到期</span></div>
        <div class="card stat"><b>${st.learning}</b><span>学习中</span></div>
        <div class="card stat"><b>${st.mature}</b><span>已掌握（≥21天）</span></div>
      </div>
      <div class="card center">
        ${due.length
          ? `<p>间隔重复会在你<b>快要忘记</b>时安排复习，这是记单词最高效的方法。</p><button class="btn primary big" id="go">开始复习 ${Math.min(due.length, 50)} 张</button>`
          : `<div class="big">🎉</div><p>今天的卡片都复习完啦！明天再来。</p><button class="btn" id="cram">🎲 随便练 20 张（不影响进度）</button>`}
      </div>
      <p class="tip">💡 评分说明：<b>忘了</b> = 今天再看一次；<b>模糊</b> = 稍后再见；<b>记得</b> = 正常间隔；<b>太简单</b> = 大幅延长间隔。诚实评分效果最好。</p>`;
    const go = $('#go'), cram = $('#cram');
    if (go) go.onclick = () => reviewSession(EF.shuffle(due).slice(0, 50), true);
    if (cram) cram.onclick = () => reviewSession(EF.sample(Object.keys(EF.state.srs).filter((id) => EF.vocab[id]), 20), false);
  });

  function reviewSession(ids, graded) {
    const queue = ids.map((id) => ({ id, rev: Math.random() < 0.3 }));
    let n = 0, xp = 0;
    const total = ids.length;
    const el = app();
    function show() {
      if (!queue.length) return finish();
      const c = queue.shift();
      const v = EF.vocab[c.id];
      const front = c.rev ? `<div class="fc-en">${esc(v.en)}</div><div class="small muted">想一想法语怎么说（连冠词）</div>` : `<div class="fc-fr ${EF.gender(v.fr) ? 'g-' + EF.gender(v.fr) : ''}">${esc(v.fr)}</div>`;
      el.innerHTML = `<div class="qbar"><div style="width:${(n / total) * 100}%"></div></div>
        <div class="flashcard" id="fc">
          <div class="fc-front">${front}${c.rev ? '' : `<button class="say-big" data-say="${esc(v.fr)}">🔊</button>`}</div>
          <div class="fc-back" hidden>
            ${c.rev ? `<div class="fc-fr ${EF.gender(v.fr) ? 'g-' + EF.gender(v.fr) : ''}">${esc(v.fr)} <button class="say-sm" data-say="${esc(v.fr)}">🔊</button></div>` : `<div class="fc-en">${esc(v.en)}</div>`}
            ${v.tip ? `<div class="vtip">${esc(v.tip)}</div>` : ''}
            <div class="small muted">${v.level} · ${esc((EF.units.find((u) => u.id === v.unit) || {}).title || '')}</div>
          </div>
        </div>
        <div id="fcbtns"><button class="btn primary big" id="flip">显示答案（空格）</button></div>`;
      if (!c.rev) EF.speech.speak(v.fr);
      const flip = () => {
        $('.fc-back', el).hidden = false;
        if (c.rev) EF.speech.speak(v.fr);
        const card = EF.state.srs[c.id];
        const lbl = (q) => (graded ? previewInterval(card, q) : '');
        $('#fcbtns').innerHTML = `<div class="grade">
          <button class="g0" data-q="0">😵 忘了<small>${lbl(0)}</small></button>
          <button class="g1" data-q="1">🤔 模糊<small>${lbl(1)}</small></button>
          <button class="g2" data-q="2">🙂 记得<small>${lbl(2)}</small></button>
          <button class="g3" data-q="3">😎 太简单<small>${lbl(3)}</small></button></div>`;
        $$('.grade button').forEach((b) => (b.onclick = () => grade(c, Number(b.dataset.q))));
      };
      $('#flip').onclick = flip;
      keyH = (e) => {
        if (e.key === ' ' && $('#flip')) {
          e.preventDefault();
          flip();
        } else if (['1', '2', '3', '4'].includes(e.key) && !$('#flip')) grade(c, Number(e.key) - 1);
      };
    }
    let keyH = null;
    const onKey = (e) => keyH && keyH(e);
    document.addEventListener('keydown', onKey);
    EF.onLeave(() => document.removeEventListener('keydown', onKey));
    function grade(c, q) {
      keyH = null;
      if (graded) EF.srs.grade(c.id, q);
      if (q === 0) queue.push({ ...c, again: true });
      if (!c.again) {
        n++;
        xp += graded ? 2 : 1;
      }
      EF.state.stats.review++;
      show();
    }
    function finish() {
      EF.addXP(xp, null);
      if (graded) EF.doTask('review');
      EF.updateTopbar();
      el.innerHTML = `<div class="result"><div class="big">🧠</div><h2>复习完成！</h2><p>复习了 ${total} 张卡片 · +${xp} XP</p>
        <div class="row center"><a class="btn" href="#/">回首页</a><a class="btn primary" href="#/unit/${EF.nextUnit().id}">学新单元</a></div></div>`;
    }
    show();
  }

  function previewInterval(card, q) {
    if (!card) return '';
    const c = { ...card };
    if (q === 0) return '今天';
    let i;
    if (q === 1) i = Math.max(1, Math.round(c.i * 1.2));
    else if (q === 2) i = c.r === 0 ? 1 : c.r === 1 ? 3 : Math.round(c.i * c.e);
    else i = c.r === 0 ? 4 : Math.round(Math.max(c.i, 1) * c.e * 1.3);
    return i >= 30 ? Math.round(i / 30) + '个月' : i + '天';
  }

  /* ---------- 听说读写 中心 ---------- */
  EF.route(/^skills$/, () => {
    const s = EF.state.stats;
    app().innerHTML = `<h1 class="page-h">🧭 听说读写</h1>
      <p class="muted">B2 要求四项技能均衡。每天至少碰一下每项技能，效果远好于只背单词。</p>
      <div class="skill-grid">
        <a class="skill" href="#/listen" style="--c:#1e90ff"><span>🎧</span><b>听 Écouter</b><small>听写 · 慢速/正常语速 · 已完成 ${s.listen} 句</small></a>
        <a class="skill" href="#/speak" style="--c:#2bb673"><span>🗣️</span><b>说 Parler</b><small>跟读评分 · 情景对话 · 已完成 ${s.speak} 句</small></a>
        <a class="skill" href="#/read" style="--c:#8e5cf7"><span>📖</span><b>读 Lire</b><small>分级短文 · 点词查义 · 阅读理解</small></a>
        <a class="skill" href="#/write" style="--c:#ef4135"><span>✍️</span><b>写 Écrire</b><small>分级写作任务 · 自动检查 · AI 批改提示</small></a>
        <a class="skill" href="#/pron" style="--c:#f5a623"><span>👄</span><b>发音课 Prononciation</b><small>法语难点音 · 对比英语 · 辨音练习</small></a>
        <a class="skill" href="#/tools" style="--c:#555"><span>🧰</span><b>工具箱 Outils</b><small>动词变位表 · 同源词 · 假朋友</small></a>
      </div>`;
  });

  /* ---------- 工具箱 ---------- */
  EF.route(/^tools(?:\/(\w+))?$/, (tab = 'conj') => {
    const tabs = [['conj', '🔤 变位表'], ['cognates', '🔗 同源词规律'], ['faux', '⚠️ 假朋友'], ['gender', '⚥ 阴阳性规律']];
    app().innerHTML = `<h1 class="page-h">🧰 工具箱</h1>
      <nav class="subtabs">${tabs.map(([k, l]) => `<a href="#/tools/${k}" class="${k === tab ? 'active' : ''}">${l}</a>`).join('')}</nav><div id="tt"></div>`;
    const el = $('#tt');
    if (tab === 'conj') toolConj(el);
    else if (tab === 'cognates') toolCognates(el);
    else if (tab === 'faux') toolFaux(el);
    else toolGender(el);
  });

  function toolConj(el) {
    const verbs = EF.conj.verbs();
    el.innerHTML = `<div class="row"><select id="cv">${verbs.map((v) => `<option value="${v}">${v} — ${esc(EF.conj.meaning(v))}${EF.conj.isIrregular(v) ? ' ★' : ''}</option>`).join('')}</select></div>
      <p class="small muted">★ = 不规则动词（必须背）。其余为规则动词，掌握词尾规律即可。点击任意形式可朗读。</p>
      <div id="ctab" class="conj-grid"></div>`;
    const draw = () => {
      const v = $('#cv').value;
      $('#ctab').innerHTML = Object.entries(EF.conj.TENSES).map(([t, info]) => `<div class="card ctable">
        <h3>${info.fr} <small>${info.zh} · ${info.level}</small></h3>
        ${[0, 1, 2, 3, 4, 5].map((i) => {
          const f = EF.conj.full(v, t, i);
          return `<div class="cf" data-say="${esc(f.replace('il/elle', 'il').replace('ils/elles', 'ils'))}">${esc(f)}</div>`;
        }).join('')}</div>`).join('');
    };
    $('#cv').onchange = draw;
    draw();
  }

  function toolCognates(el) {
    el.innerHTML = `<p>英语里约 <b>30%–45%</b> 的词汇来自法语。掌握下面的「转换规律」，你已经认识几千个法语词了——这是你相比零基础学习者的最大优势。</p>
      <div class="cog-list">${EF.cognates.map((c) => `<div class="card cog"><div class="cog-rule"><b>${esc(c.en)}</b> → <b class="fr">${esc(c.fr)}</b></div>
        <div class="small">${esc(c.note)}</div>
        <div class="cog-ex">${c.ex.map(([f, e]) => `<span class="chip" data-say="${esc(f)}">${esc(f)} <small>${esc(e)}</small></span>`).join('')}</div></div>`).join('')}</div>`;
  }

  function toolFaux(el) {
    el.innerHTML = `<p>「假朋友」(faux amis) 是长得像英语、意思却不同的词。英语好的人最容易在这里翻车！去「游戏 → 假朋友陷阱」测试一下。</p>
      <div class="faux-list">${EF.fauxAmis.map((f) => `<div class="card faux"><div><b class="fr" data-say="${esc(f.fr)}">${esc(f.fr)} 🔊</b></div>
        <div class="small">❌ 不是 <s>${esc(f.looks)}</s></div><div>✅ ${esc(f.real)}</div>
        ${f.ex ? `<div class="small muted" data-say="${esc(f.ex)}">${esc(f.ex)}</div>` : ''}</div>`).join('')}</div>`;
  }

  function toolGender(el) {
    const rows = [
      ['阴性 f.', '-tion / -sion', 'la nation, la télévision', '约 99%'],
      ['阴性 f.', '-té', 'la liberté, la société, l’université', '约 95%（例外 le été, le côté）'],
      ['阴性 f.', '-ette / -elle', 'la baguette, la vaisselle', '约 95%'],
      ['阴性 f.', '-ure', 'la voiture, la culture', '约 90%'],
      ['阴性 f.', '-ence / -ance', 'la différence, la chance', '约 95%（例外 le silence）'],
      ['阴性 f.', '-ie / -ise / -ude', 'la biologie, la valise, la solitude', '约 90%'],
      ['阳性 m.', '-ment', 'le gouvernement, le moment', '约 99%'],
      ['阳性 m.', '-age', 'le fromage, le voyage', '约 90%（例外 la page, la plage, l’image）'],
      ['阳性 m.', '-eau', 'le bateau, le gâteau', '约 95%（例外 l’eau, la peau）'],
      ['阳性 m.', '-isme / -iste(男性)', 'le tourisme, le réalisme', '约 99%'],
      ['阳性 m.', '-oir / -ier', 'le miroir, le papier', '约 95%'],
      ['阳性 m.', '以辅音结尾', 'le sac, le lit, le chat', '大多数（但不是全部）'],
    ];
    el.innerHTML = `<p>法语名词分阴阳性，没有完全的规则，但<b>词尾</b>能帮你猜对 80% 以上。英语没有语法性别，所以要刻意练习：永远「冠词 + 名词」一起记。</p>
      <div class="card"><table class="tbl"><tr><th>性别</th><th>词尾</th><th>例子</th><th>可靠度</th></tr>
      ${rows.map((r) => `<tr><td>${r[0]}</td><td><b>${r[1]}</b></td><td class="fr">${r[2]}</td><td class="small">${r[3]}</td></tr>`).join('')}</table></div>
      <a class="btn primary" href="#/game/gender">🎮 去玩「Le ou La ?」</a>`;
  }

  /* ---------- 资源 ---------- */
  EF.route(/^resources$/, () => {
    const R = [
      ['A1-A2', '📺', 'TV5Monde Apprendre le français', 'https://apprendre.tv5monde.com/', '按等级分类的视频练习，免费，有字幕和练习题。'],
      ['A2-B1', '📻', 'RFI · Journal en français facile', 'https://francaisfacile.rfi.fr/', '每天 10 分钟慢速新闻，配全文文本，听力最佳材料。'],
      ['A2-B2', '🎙️', 'InnerFrench（播客 / YouTube）', 'https://innerfrench.com/', '用清晰、略慢的法语聊有趣话题，适合中级突破。'],
      ['A1-B1', '🎬', 'Easy French（YouTube）', 'https://www.youtube.com/@EasyFrench', '街头采访真实法国人，带法英双字幕。'],
      ['B1-B2', '📰', '1jour1actu', 'https://www.1jour1actu.com/', '为法国青少年写的新闻，句子简洁，内容真实。'],
      ['B1-B2', '🎧', 'France Culture / France Inter 播客', 'https://www.radiofrance.fr/podcasts', '母语者节目，B2 阶段每天磨耳朵。'],
      ['全部', '📖', 'WordReference 法英词典', 'https://www.wordreference.com/fren/', '最好的法英词典，论坛里有大量用法讨论。'],
      ['全部', '🔤', 'Le Conjugueur', 'https://leconjugueur.lefigaro.fr/', '查询任意动词的全部变位。'],
      ['全部', '🗣️', 'Forvo 真人发音', 'https://forvo.com/languages/fr/', '母语者真人发音词典。'],
      ['B1-B2', '🏅', 'France Éducation international · DELF', 'https://www.france-education-international.fr/diplome/delf-tout-public', 'DELF 官方信息与样题，B2 考试准备。'],
      ['全部', '💬', 'Tandem / HelloTalk', 'https://www.tandem.net/', '找法语母语者语伴，用中文或英语交换。'],
    ];
    app().innerHTML = `<h1 class="page-h">🌍 沉浸资源</h1>
      <p>本工具负责<b>系统化的骨架</b>（词汇、语法、四项技能训练）。要真正达到 B2，你还需要大量<b>真实输入</b>：从 A2 开始，每天至少 20–30 分钟听/看法语内容。</p>
      <div class="res-list">${R.map(([lvl, ic, name, url, desc]) => `<a class="card res" href="${url}" target="_blank" rel="noopener">
        <span class="ric">${ic}</span><span><b>${esc(name)}</b> <span class="pill">${lvl}</span><small>${esc(desc)}</small></span></a>`).join('')}</div>
      <div class="card"><h2>⏱️ 时间预估（欧洲语言共同参考框架）</h2>
        <table class="tbl"><tr><th>等级</th><th>累计学习时长</th><th>每天 1 小时约需</th></tr>
        <tr><td>A1</td><td>80–100 小时</td><td>3 个月</td></tr>
        <tr><td>A2</td><td>180–200 小时</td><td>6 个月</td></tr>
        <tr><td>B1</td><td>350–400 小时</td><td>12 个月</td></tr>
        <tr><td>B2</td><td>550–650 小时</td><td>18–20 个月</td></tr></table>
        <p class="small muted">英语好的学习者通常能更快，因为大量词汇和部分语法结构是相通的。</p></div>`;
  });

  /* ---------- 设置 ---------- */
  EF.route(/^settings$/, () => {
    const s = EF.state.settings;
    const voices = EF.speech.voices;
    app().innerHTML = `<h1 class="page-h">⚙️ 设置</h1>
      <div class="card form">
        <label>朗读语速：<b id="ratev">${s.rate}</b>
          <input type="range" id="rate" min="0.5" max="1.3" step="0.05" value="${s.rate}"></label>
        <label>法语声音：
          <select id="voice">${voices.length ? voices.map((v) => `<option ${v.name === s.voice ? 'selected' : ''} value="${esc(v.name)}">${esc(v.name)} (${v.lang})</option>`).join('') : '<option>未找到法语声音（可在系统设置中安装法语语音包）</option>'}</select></label>
        <button class="btn" data-say="Bonjour ! Je m'appelle Claire. J'adore apprendre le français.">🔊 试听</button>
        <label>每日目标：
          <select id="goal">${[[20, '轻松 20 XP（约 10 分钟）'], [50, '正常 50 XP（约 20 分钟）'], [100, '认真 100 XP（约 40 分钟）'], [150, '冲刺 150 XP（约 1 小时）']].map(([v, l]) => `<option value="${v}" ${s.goal === v ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
        <label class="check"><input type="checkbox" id="sound" ${s.sound !== false ? 'checked' : ''}> 答题音效</label>
        <label class="check"><input type="checkbox" id="autoplay" ${s.autoplay !== false ? 'checked' : ''}> 题目自动朗读</label>
      </div>
      <div class="card form">
        <h2>💾 备份与恢复</h2>
        <p class="small muted">进度保存在本浏览器里。换设备或清理浏览器前，请先导出备份。</p>
        <div class="row"><button class="btn" id="exp">⬇️ 导出进度</button><label class="btn">⬆️ 导入进度<input type="file" id="imp" accept=".json" hidden></label></div>
        <button class="btn danger" id="reset">🗑️ 清空所有进度</button>
      </div>
      <div class="card small muted">
        <p>语音识别（口语评分）需要 Chrome、Edge 或 Safari，并允许麦克风权限。语音朗读使用系统自带的法语声音；如果听起来机械，可以在系统设置里下载更好的法语语音（如 macOS 的 Amélie/Thomas 增强版，Windows 的 Microsoft Denise Natural）。</p>
      </div>`;
    $('#rate').oninput = (e) => {
      s.rate = Number(e.target.value);
      $('#ratev').textContent = s.rate;
      EF.save();
    };
    $('#voice').onchange = (e) => {
      s.voice = e.target.value;
      EF.save();
    };
    $('#goal').onchange = (e) => {
      s.goal = Number(e.target.value);
      EF.save();
    };
    $('#sound').onchange = (e) => {
      s.sound = e.target.checked;
      EF.save();
    };
    $('#autoplay').onchange = (e) => {
      s.autoplay = e.target.checked;
      EF.save();
    };
    $('#exp').onclick = () => {
      const blob = new Blob([EF.exportData()], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `easyfrench-backup-${EF.today()}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
    };
    $('#imp').onchange = (e) => {
      const f = e.target.files[0];
      if (!f) return;
      f.text().then((t) => {
        try {
          EF.importData(t);
          EF.updateTopbar();
          EF.toast('✅ 导入成功');
        } catch (err) {
          EF.toast('❌ 导入失败：' + err.message);
        }
      });
    };
    $('#reset').onclick = () => {
      if (confirm('确定清空所有学习进度吗？此操作不可恢复（建议先导出备份）。')) {
        EF.resetAll();
        EF.updateTopbar();
        EF.go('#/');
      }
    };
  });

  /* ---------- 启动 ---------- */
  EF.start = () => {
    EF.buildIndex();
    EF.updateTopbar();
    window.addEventListener('hashchange', dispatch);
    dispatch();
  };
})();
