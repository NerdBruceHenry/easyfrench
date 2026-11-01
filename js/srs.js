/* EasyFrench — 间隔重复（简化版 SM-2） */
(function () {
  /** 所有课程词汇的索引：id（去括号的法语）→ 词条 */
  EF.buildIndex = () => {
    EF.vocab = {};
    for (const u of EF.units) {
      for (const [fr, en, tip] of u.vocab) {
        const id = EF.clean(fr);
        if (!EF.vocab[id]) EF.vocab[id] = { id, fr, en, tip: tip || '', unit: u.id, level: u.level };
      }
    }
  };

  const srs = (EF.srs = {
    add(ids) {
      const t = EF.today();
      let n = 0;
      for (const id of ids) {
        if (!EF.state.srs[id] && EF.vocab[id]) {
          EF.state.srs[id] = { i: 0, e: 2.5, d: t, r: 0, l: 0 };
          n++;
        }
      }
      EF.save();
      return n;
    },

    has: (id) => !!EF.state.srs[id],

    due() {
      const t = EF.today();
      return Object.entries(EF.state.srs)
        .filter(([id, c]) => c.d <= t && EF.vocab[id])
        .map(([id]) => id);
    },

    /** q: 0 = 忘了, 1 = 模糊, 2 = 记得, 3 = 太简单 */
    grade(id, q) {
      const c = EF.state.srs[id];
      if (!c) return;
      if (q === 0) {
        c.r = 0;
        c.l++;
        c.i = 0;
        c.e = Math.max(1.3, c.e - 0.2);
      } else {
        if (q === 1) {
          c.i = Math.max(1, Math.round(c.i * 1.2));
          c.e = Math.max(1.3, c.e - 0.15);
        } else if (q === 2) {
          c.i = c.r === 0 ? 1 : c.r === 1 ? 3 : Math.round(c.i * c.e);
        } else {
          c.i = c.r === 0 ? 4 : Math.round(Math.max(c.i, 1) * c.e * 1.3);
          c.e += 0.15;
        }
        c.r++;
      }
      c.d = EF.addDays(EF.today(), c.i);
      EF.save();
    },

    /** 掌握程度：间隔 ≥ 21 天视为「已掌握」 */
    stats() {
      const all = Object.values(EF.state.srs);
      return {
        total: all.length,
        mature: all.filter((c) => c.i >= 21).length,
        learning: all.filter((c) => c.i < 21).length,
        due: srs.due().length,
      };
    },
  });
})();
