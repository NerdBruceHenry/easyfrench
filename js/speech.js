/* EasyFrench — 语音合成（听）与语音识别（说） */
(function () {
  const synth = window.speechSynthesis;
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;

  const sp = (EF.speech = {
    voices: [],
    canSpeak: !!synth,
    canListen: !!Rec,

    loadVoices() {
      if (!synth) return;
      const all = synth.getVoices();
      sp.voices = all.filter((v) => /^fr/i.test(v.lang));
      // 优先 fr-FR，其次加拿大/比利时/瑞士法语
      sp.voices.sort((a, b) => score(b) - score(a));
    },

    voice() {
      const want = EF.state.settings.voice;
      return sp.voices.find((v) => v.name === want) || sp.voices[0] || null;
    },

    /** 朗读法语；返回 Promise，读完后 resolve */
    speak(text, opts = {}) {
      return new Promise((resolve) => {
        if (!synth) {
          EF.toast('当前浏览器不支持语音朗读，建议使用 Chrome / Edge / Safari');
          return resolve();
        }
        synth.cancel();
        const u = new SpeechSynthesisUtterance(EF.clean(text));
        u.lang = 'fr-FR';
        const v = sp.voice();
        if (v) u.voice = v;
        u.rate = (opts.rate || 1) * (EF.state.settings.rate || 0.9);
        u.onend = u.onerror = () => resolve();
        synth.speak(u);
      });
    },

    stop() {
      synth && synth.cancel();
    },

    /** 录音识别；返回 Promise<string[]>（多个候选结果） */
    listen() {
      return new Promise((resolve, reject) => {
        if (!Rec) return reject(new Error('unsupported'));
        sp.stop();
        const r = new Rec();
        r.lang = 'fr-FR';
        r.interimResults = false;
        r.maxAlternatives = 5;
        let done = false;
        r.onresult = (e) => {
          done = true;
          const alts = Array.from(e.results[0]).map((a) => a.transcript);
          resolve(alts);
        };
        r.onerror = (e) => {
          done = true;
          reject(new Error(e.error || 'error'));
        };
        r.onend = () => {
          if (!done) resolve([]);
        };
        r.start();
        sp._rec = r;
      });
    },

    /**
     * 比较目标句子和识别结果，返回 { score, words:[{w, ok}] }
     * 只看单词是否被识别到（对重音、大小写、标点宽容）
     */
    compare(target, alts) {
      const words = EF.norm(EF.clean(target)).split(' ').filter(Boolean);
      const key = (w) => EF.stripAccents(w).replace(/'/g, ' ').trim();
      let best = { score: 0, words: words.map((w) => ({ w, ok: false })), heard: alts[0] || '' };
      for (const said of alts) {
        const pool = EF.norm(said).split(' ').map(key).join(' ').split(' ').filter(Boolean);
        const used = new Array(pool.length).fill(false);
        const res = words.map((w) => {
          const parts = key(w).split(' ');
          const ok = parts.every((p) => {
            const idx = pool.findIndex((x, i) => !used[i] && (x === p || (p.length > 4 && EF.lev(x, p) <= 1)));
            if (idx >= 0) used[idx] = true;
            return idx >= 0;
          });
          return { w, ok };
        });
        const score = Math.round((res.filter((r) => r.ok).length / Math.max(1, res.length)) * 100);
        if (score > best.score || !best.heard) best = { score, words: res, heard: said };
      }
      return best;
    },
  });

  function score(v) {
    let s = 0;
    if (/fr[-_]FR/i.test(v.lang)) s += 10;
    if (/google|natural|neural|premium|enhanced|amélie|thomas|audrey/i.test(v.name)) s += 5;
    if (v.localService) s += 1;
    return s;
  }

  if (synth) {
    sp.loadVoices();
    synth.onvoiceschanged = sp.loadVoices;
  }

  // 全局：任何带 data-say 的元素点击即朗读
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-say]');
    if (!el) return;
    e.preventDefault();
    const rate = el.dataset.rate ? Number(el.dataset.rate) : 1;
    el.classList.add('speaking');
    sp.speak(el.dataset.say, { rate }).then(() => el.classList.remove('speaking'));
  });
})();
