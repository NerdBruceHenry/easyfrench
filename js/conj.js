/* EasyFrench — 动词变位引擎 */
(function () {
  const PRON = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'];
  const TENSES = {
    present: { fr: 'Présent', zh: '现在时', level: 'A1' },
    pc: { fr: 'Passé composé', zh: '复合过去时', level: 'A2' },
    imparfait: { fr: 'Imparfait', zh: '未完成过去时', level: 'A2' },
    futur: { fr: 'Futur simple', zh: '简单将来时', level: 'A2' },
    conditionnel: { fr: 'Conditionnel', zh: '条件式', level: 'B1' },
    subjonctif: { fr: 'Subjonctif', zh: '虚拟式', level: 'B1' },
  };

  const ETRE_VERBS = new Set([
    'aller', 'venir', 'partir', 'arriver', 'entrer', 'sortir', 'monter', 'descendre',
    'naître', 'mourir', 'rester', 'tomber', 'retourner', 'devenir', 'revenir',
  ]);

  // 不规则动词：présent, 过去分词, 将来时词干, 虚拟式（可选，省略则按规则推导）, 未完成过去时词干（可选）
  const IRR = {
    être: { en: 'to be', p: 'suis es est sommes êtes sont', pp: 'été', fut: 'ser', imp: 'ét', subj: 'sois sois soit soyons soyez soient' },
    avoir: { en: 'to have', p: 'ai as a avons avez ont', pp: 'eu', fut: 'aur', subj: 'aie aies ait ayons ayez aient' },
    aller: { en: 'to go', p: 'vais vas va allons allez vont', pp: 'allé', fut: 'ir', subj: 'aille ailles aille allions alliez aillent' },
    faire: { en: 'to do / make', p: 'fais fais fait faisons faites font', pp: 'fait', fut: 'fer', subj: 'fasse fasses fasse fassions fassiez fassent' },
    pouvoir: { en: 'can / to be able', p: 'peux peux peut pouvons pouvez peuvent', pp: 'pu', fut: 'pourr', subj: 'puisse puisses puisse puissions puissiez puissent' },
    vouloir: { en: 'to want', p: 'veux veux veut voulons voulez veulent', pp: 'voulu', fut: 'voudr', subj: 'veuille veuilles veuille voulions vouliez veuillent' },
    devoir: { en: 'must / to owe', p: 'dois dois doit devons devez doivent', pp: 'dû', fut: 'devr' },
    savoir: { en: 'to know (facts)', p: 'sais sais sait savons savez savent', pp: 'su', fut: 'saur', subj: 'sache saches sache sachions sachiez sachent' },
    venir: { en: 'to come', p: 'viens viens vient venons venez viennent', pp: 'venu', fut: 'viendr' },
    devenir: { en: 'to become', p: 'deviens deviens devient devenons devenez deviennent', pp: 'devenu', fut: 'deviendr' },
    prendre: { en: 'to take', p: 'prends prends prend prenons prenez prennent', pp: 'pris', fut: 'prendr' },
    apprendre: { en: 'to learn', p: 'apprends apprends apprend apprenons apprenez apprennent', pp: 'appris', fut: 'apprendr' },
    comprendre: { en: 'to understand', p: 'comprends comprends comprend comprenons comprenez comprennent', pp: 'compris', fut: 'comprendr' },
    dire: { en: 'to say', p: 'dis dis dit disons dites disent', pp: 'dit', fut: 'dir' },
    voir: { en: 'to see', p: 'vois vois voit voyons voyez voient', pp: 'vu', fut: 'verr' },
    mettre: { en: 'to put', p: 'mets mets met mettons mettez mettent', pp: 'mis', fut: 'mettr' },
    partir: { en: 'to leave', p: 'pars pars part partons partez partent', pp: 'parti', fut: 'partir' },
    sortir: { en: 'to go out', p: 'sors sors sort sortons sortez sortent', pp: 'sorti', fut: 'sortir' },
    dormir: { en: 'to sleep', p: 'dors dors dort dormons dormez dorment', pp: 'dormi', fut: 'dormir' },
    boire: { en: 'to drink', p: 'bois bois boit buvons buvez boivent', pp: 'bu', fut: 'boir' },
    écrire: { en: 'to write', p: 'écris écris écrit écrivons écrivez écrivent', pp: 'écrit', fut: 'écrir' },
    lire: { en: 'to read', p: 'lis lis lit lisons lisez lisent', pp: 'lu', fut: 'lir' },
    connaître: { en: 'to know (people/places)', p: 'connais connais connaît connaissons connaissez connaissent', pp: 'connu', fut: 'connaîtr' },
    vivre: { en: 'to live', p: 'vis vis vit vivons vivez vivent', pp: 'vécu', fut: 'vivr' },
    ouvrir: { en: 'to open', p: 'ouvre ouvres ouvre ouvrons ouvrez ouvrent', pp: 'ouvert', fut: 'ouvrir' },
    falloir: { en: 'to be necessary (il faut)', p: '- - faut - - -', pp: 'fallu', fut: 'faudr', subj: '- - faille - - -', imp: 'fall' },
  };

  const REG = {
    parler: 'to speak', aimer: 'to like / love', habiter: 'to live (in)', travailler: 'to work',
    regarder: 'to watch', écouter: 'to listen', chanter: 'to sing', danser: 'to dance', donner: 'to give',
    trouver: 'to find', penser: 'to think', arriver: 'to arrive', rester: 'to stay', entrer: 'to enter',
    demander: 'to ask', chercher: 'to look for', porter: 'to wear / carry', oublier: 'to forget',
    étudier: 'to study', jouer: 'to play', visiter: 'to visit', monter: 'to go up', tomber: 'to fall',
    finir: 'to finish', choisir: 'to choose', réussir: 'to succeed', grandir: 'to grow up', réfléchir: 'to think over',
    attendre: 'to wait (for)', vendre: 'to sell', répondre: 'to answer', entendre: 'to hear', perdre: 'to lose',
    descendre: 'to go down',
  };

  const vowel = (s) => /^[aeiouéèêâîôûœh]/i.test(s);

  function present(v) {
    if (IRR[v]) return IRR[v].p.split(' ');
    if (v.endsWith('er')) {
      const s = v.slice(0, -2);
      return ['e', 'es', 'e', 'ons', 'ez', 'ent'].map((e) => s + e);
    }
    if (v.endsWith('ir')) {
      const s = v.slice(0, -2);
      return ['is', 'is', 'it', 'issons', 'issez', 'issent'].map((e) => s + e);
    }
    const s = v.slice(0, -2); // -re
    return ['s', 's', '', 'ons', 'ez', 'ent'].map((e) => s + e);
  }

  function pp(v) {
    if (IRR[v]) return IRR[v].pp;
    if (v.endsWith('er')) return v.slice(0, -2) + 'é';
    if (v.endsWith('ir')) return v.slice(0, -2) + 'i';
    return v.slice(0, -2) + 'u';
  }

  function impStem(v) {
    if (IRR[v] && IRR[v].imp) return IRR[v].imp;
    return present(v)[3].replace(/ons$/, '');
  }

  function futStem(v) {
    if (IRR[v]) return IRR[v].fut;
    return v.endsWith('re') ? v.slice(0, -1) : v;
  }

  function subj(v) {
    if (IRR[v] && IRR[v].subj) return IRR[v].subj.split(' ');
    const ils = present(v)[5].replace(/ent$/, '');
    const imp = impStem(v);
    return [ils + 'e', ils + 'es', ils + 'e', imp + 'ions', imp + 'iez', ils + 'ent'];
  }

  /** 返回 6 个人称的变位（不含主语），复合过去时含助动词 */
  function conj(v, tense) {
    switch (tense) {
      case 'present':
        return present(v);
      case 'imparfait':
        return ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map((e) => impStem(v) + e);
      case 'futur':
        return ['ai', 'as', 'a', 'ons', 'ez', 'ont'].map((e) => futStem(v) + e);
      case 'conditionnel':
        return ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'].map((e) => futStem(v) + e);
      case 'subjonctif':
        return subj(v);
      case 'pc': {
        const etre = ETRE_VERBS.has(v);
        const aux = etre ? IRR.être.p.split(' ') : IRR.avoir.p.split(' ');
        const p = pp(v);
        return aux.map((a, i) => `${a} ${p}${etre ? (i < 3 ? '(e)' : '(e)s') : ''}`);
      }
    }
    return [];
  }

  /** 加上主语：「j'aime」「que nous parlions」 */
  function full(v, tense, i) {
    const form = conj(v, tense)[i];
    if (form === '-') return '—';
    let pro = PRON[i];
    if (i === 0 && vowel(form)) pro = "j'";
    const glue = pro.endsWith("'") ? '' : ' ';
    if (tense === 'subjonctif') {
      const que = vowel(pro) ? "qu'" : 'que ';
      return `${que}${pro}${glue}${form}`;
    }
    return `${pro}${glue}${form}`;
  }

  EF.conj = {
    PRON,
    TENSES,
    IRR,
    REG,
    ETRE_VERBS,
    conj,
    full,
    pp,
    verbs: () => [...Object.keys(IRR).filter((v) => v !== 'falloir'), ...Object.keys(REG)],
    meaning: (v) => (IRR[v] && IRR[v].en) || REG[v] || '',
    isIrregular: (v) => !!IRR[v],
  };
})();
