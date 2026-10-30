/* EasyFrench — 学习进度存储（localStorage） */
(function () {
  const KEY = 'easyfrench-v1';

  const defaults = () => ({
    xp: 0,
    streak: 0,
    bestStreak: 0,
    lastActive: null,
    daily: { date: null, xp: 0, tasks: {} },
    history: {}, // date -> xp
    units: {}, // unitId -> { done, best, vocabSeen }
    srs: {}, // cardId -> { i, e, d, r, l }
    stats: { listen: 0, speak: 0, read: 0, write: 0, review: 0, games: 0, lessons: 0 },
    reads: {}, // readingId -> score
    writes: {}, // promptId -> { text, words, date }
    games: {}, // gameId -> best score
    achievements: {},
    settings: { rate: 0.9, goal: 50, voice: '', sound: true },
  });

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      const d = defaults();
      const s = JSON.parse(raw);
      return {
        ...d,
        ...s,
        stats: { ...d.stats, ...s.stats },
        settings: { ...d.settings, ...s.settings },
        daily: { ...d.daily, ...s.daily },
      };
    } catch (e) {
      return defaults();
    }
  }

  EF.state = load();

  EF.save = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(EF.state));
    } catch (e) {
      /* 隐私模式等情况 */
    }
  };

  EF.resetAll = () => {
    EF.state = defaults();
    EF.save();
  };

  EF.exportData = () => JSON.stringify(EF.state, null, 2);
  EF.importData = (json) => {
    const s = JSON.parse(json);
    if (typeof s !== 'object' || s === null || typeof s.xp !== 'number') throw new Error('格式不正确');
    localStorage.setItem(KEY, JSON.stringify(s));
    EF.state = load();
  };

  function rollDaily() {
    const t = EF.today();
    if (EF.state.daily.date !== t) EF.state.daily = { date: t, xp: 0, tasks: {} };
  }

  /** 当前连续天数（如果昨天和今天都没学，显示 0） */
  EF.currentStreak = () => {
    const s = EF.state;
    if (!s.lastActive) return 0;
    const t = EF.today();
    if (s.lastActive === t || s.lastActive === EF.addDays(t, -1)) return s.streak;
    return 0;
  };

  /** 加经验值；skill 可选 listen/speak/read/write/review/games/lessons */
  EF.addXP = (n, skill) => {
    rollDaily();
    const s = EF.state;
    const t = EF.today();
    const goalBefore = s.daily.xp >= s.settings.goal;
    if (s.lastActive !== t) {
      s.streak = s.lastActive === EF.addDays(t, -1) ? s.streak + 1 : 1;
      s.lastActive = t;
      s.bestStreak = Math.max(s.bestStreak, s.streak);
    }
    const rankBefore = EF.rank().name;
    s.xp += n;
    s.daily.xp += n;
    s.history[t] = (s.history[t] || 0) + n;
    if (skill && skill in s.stats) s.stats[skill] += 1;
    EF.save();
    EF.updateTopbar && EF.updateTopbar();
    if (!goalBefore && s.daily.xp >= s.settings.goal) {
      setTimeout(() => {
        EF.confetti();
        EF.toast('🎯 今日目标达成！Bravo !', 3000);
      }, 400);
    }
    const rankAfter = EF.rank();
    if (rankAfter.name !== rankBefore) {
      setTimeout(() => EF.toast(`${rankAfter.icon} 升级！你现在是「${rankAfter.name}」`, 3500), 900);
    }
    EF.checkAchievements();
  };

  EF.doTask = (key) => {
    rollDaily();
    EF.state.daily.tasks[key] = true;
    EF.save();
  };
  EF.taskDone = (key) => {
    rollDaily();
    return !!EF.state.daily.tasks[key];
  };
  EF.dailyXP = () => {
    rollDaily();
    return EF.state.daily.xp;
  };

  EF.RANKS = [
    { xp: 0, name: 'Touriste 游客', icon: '🧳' },
    { xp: 300, name: 'Curieux 好奇者', icon: '🔎' },
    { xp: 900, name: 'Flâneur 漫步者', icon: '🚶' },
    { xp: 2000, name: 'Bavard 话痨', icon: '💬' },
    { xp: 4000, name: 'Habitué 常客', icon: '☕' },
    { xp: 7500, name: 'Francophile 法语迷', icon: '🥐' },
    { xp: 12000, name: 'Parisien 巴黎人', icon: '🗼' },
    { xp: 20000, name: 'Académicien 院士', icon: '🎓' },
  ];
  EF.rank = (xp = EF.state.xp) => {
    let r = EF.RANKS[0];
    for (const k of EF.RANKS) if (xp >= k.xp) r = k;
    const next = EF.RANKS[EF.RANKS.indexOf(r) + 1];
    return { ...r, next };
  };

  EF.ACHIEVEMENTS = [
    { id: 'first', icon: '🌱', name: '第一步', desc: '完成第一个单元', test: (s) => doneCount(s) >= 1 },
    { id: 'a1', icon: '🥉', name: 'A1 毕业', desc: '完成全部 A1 单元', test: (s) => levelDone(s, 'A1') },
    { id: 'a2', icon: '🥈', name: 'A2 毕业', desc: '完成全部 A2 单元', test: (s) => levelDone(s, 'A2') },
    { id: 'b1', icon: '🥇', name: 'B1 毕业', desc: '完成全部 B1 单元', test: (s) => levelDone(s, 'B1') },
    { id: 'b2', icon: '🏆', name: 'B2 达成', desc: '完成全部 B2 单元', test: (s) => levelDone(s, 'B2') },
    { id: 's3', icon: '🔥', name: '三日之火', desc: '连续学习 3 天', test: (s) => s.bestStreak >= 3 },
    { id: 's7', icon: '📅', name: '一周不断', desc: '连续学习 7 天', test: (s) => s.bestStreak >= 7 },
    { id: 's30', icon: '💎', name: '月度坚持', desc: '连续学习 30 天', test: (s) => s.bestStreak >= 30 },
    { id: 'w100', icon: '📚', name: '百词斩', desc: '复习卡片里有 100 个词', test: (s) => Object.keys(s.srs).length >= 100 },
    { id: 'w500', icon: '🧠', name: '词汇达人', desc: '复习卡片里有 500 个词', test: (s) => Object.keys(s.srs).length >= 500 },
    { id: 'rev', icon: '🔁', name: '温故知新', desc: '累计复习 200 次', test: (s) => s.stats.review >= 200 },
    { id: 'ear', icon: '👂', name: '顺风耳', desc: '完成 50 次听写', test: (s) => s.stats.listen >= 50 },
    { id: 'mouth', icon: '🗣️', name: '开口达人', desc: '完成 50 次跟读', test: (s) => s.stats.speak >= 50 },
    { id: 'reader', icon: '📖', name: '书虫', desc: '读完 5 篇文章', test: (s) => Object.keys(s.reads).length >= 5 },
    { id: 'writer', icon: '✍️', name: '笔耕不辍', desc: '完成 5 篇写作', test: (s) => Object.keys(s.writes).length >= 5 },
    { id: 'gamer', icon: '🎮', name: '游戏玩家', desc: '玩 30 局小游戏', test: (s) => s.stats.games >= 30 },
    { id: 'xp5k', icon: '⭐', name: '五千经验', desc: '累计 5000 XP', test: (s) => s.xp >= 5000 },
  ];
  function doneCount(s) {
    return Object.values(s.units).filter((u) => u.done).length;
  }
  function levelDone(s, lvl) {
    const us = EF.units.filter((u) => u.level === lvl);
    return us.length > 0 && us.every((u) => s.units[u.id] && s.units[u.id].done);
  }

  EF.checkAchievements = () => {
    const s = EF.state;
    for (const a of EF.ACHIEVEMENTS) {
      if (!s.achievements[a.id] && a.test(s)) {
        s.achievements[a.id] = EF.today();
        EF.save();
        setTimeout(() => EF.toast(`${a.icon} 解锁成就：<b>${a.name}</b>`, 3500), 1600);
      }
    }
  };
})();
