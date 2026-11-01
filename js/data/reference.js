/* 发音课、同源词规律、假朋友 */

EF.pron.push(
  {
    id: 'silent', title: '不发音的字母', sub: '词尾辅音、-ent、h —— 法语「写得多读得少」',
    html: `<p>法语最让英语使用者困惑的：<b>大多数词尾辅音不发音</b>。</p>
<ul><li>词尾 <b>-s, -t, -d, -x, -z, -p</b> 通常不读：<em>Paris</em> [paʁi]、<em>petit</em>、<em>grand</em>、<em>deux</em>、<em>nez</em>、<em>trop</em></li>
<li>例外口诀 <b>CaReFuL</b>：词尾的 <b>c, r, f, l</b> 通常要读：<em>avec</em>、<em>bonjour</em>、<em>neuf</em>、<em>sel</em>（但 -er 动词的 r 不读：<em>parler</em>）</li>
<li>动词复数词尾 <b>-ent</b> 完全不读：<em>ils parlent</em> = <em>il parle</em> 的读音</li>
<li><b>h 永远不发音</b>：<em>hôtel</em> [otɛl]、<em>homme</em>、<em>heure</em></li>
<li>词尾的 <b>e</b>（无重音）一般不读，但会让前面的辅音发出来：<em>petit</em> [pəti] vs <em>petite</em> [pətit]</li></ul>
<div class="box">💡 这条规则能帮你听懂阴阳性：<em>grand</em> [ɡʁɑ̃] / <em>grande</em> [ɡʁɑ̃d]，<em>français</em> / <em>française</em>。</div>`,
    examples: ['Paris', 'petit', 'petite', 'grand', 'grande', 'avec', 'bonjour', 'neuf', 'ils parlent', 'hôtel', 'beaucoup', 'vous avez'],
    pairs: [['petit', 'petite'], ['grand', 'grande'], ['français', 'française'], ['il parle', 'il parlait'], ['vert', 'verte']],
  },
  {
    id: 'u', title: '[y] u vs [u] ou', sub: 'tu / tout —— 英语里没有的 u 音',
    html: `<p>法语的 <b>u</b> [y] 是英语没有的音，必须专门练：</p>
<div class="box"><b>方法：</b>先发「衣」[i]，舌头不动，嘴唇撅圆成发「乌」的形状 → 就是 [y]。<br>和普通话的「<b>鱼</b> ü」几乎一样！这是中文母语者的优势。</div>
<p><b>ou</b> [u] 就是普通话的「乌」，英语 <i>food</i> 里的 oo。</p>
<p>这两个音能区分意思：<em>tu</em>（你）/ <em>tout</em>（全部），<em>dessus</em>（上面）/ <em>dessous</em>（下面），<em>rue</em>（街）/ <em>roue</em>（轮子）。</p>`,
    examples: ['tu', 'tout', 'rue', 'roue', 'vu', 'vous', 'dessus', 'dessous', 'salut', 'beaucoup', 'musique', 'nous'],
    pairs: [['tu', 'tout'], ['rue', 'roue'], ['vu', 'vous'], ['dessus', 'dessous'], ['pur', 'pour'], ['lu', 'loup']],
  },
  {
    id: 'r', title: '法语的 R [ʁ]', sub: '喉咙后部的小摩擦，不卷舌',
    html: `<p>法语 <b>r</b> 不像英语那样卷舌，而是在<b>喉咙后部</b>发出轻微的摩擦音，有点像漱口或者普通话「喝 h」带一点震动。</p>
<div class="box"><b>练习步骤：</b><br>1. 发「哈」[x]，感受喉咙后部的气流<br>2. 加上声带振动 → 就是 [ʁ]<br>3. 舌尖抵住下齿背，不要动！</div>
<p>先练元音之间的 r：<em>Paris</em>、<em>arrêt</em>；再练词首：<em>rouge</em>、<em>rue</em>；最后练辅音组合：<em>très</em>、<em>train</em>、<em>croissant</em>。</p>`,
    examples: ['Paris', 'rouge', 'rue', 'très', 'merci', 'croissant', 'bonjour', 'train', 'frère', 'au revoir', 'Roland', 'heureux'],
    pairs: [],
  },
  {
    id: 'nasal', title: '鼻化元音', sub: 'an / on / in —— 法语的招牌音',
    html: `<p>元音 + <b>n / m</b>（且后面没有元音）时，<b>n/m 不发音</b>，而是让元音「从鼻子出气」。</p>
<table><tr><th>音</th><th>拼写</th><th>中文近似</th><th>例子</th></tr>
<tr><td>[ɑ̃]</td><td>an, am, en, em</td><td>「昂」但不收 ng</td><td><em>enfant, temps, chambre</em></td></tr>
<tr><td>[ɔ̃]</td><td>on, om</td><td>「翁」嘴更圆</td><td><em>bonbon, nom, maison</em></td></tr>
<tr><td>[ɛ̃]</td><td>in, im, ain, ein, un</td><td>「安」偏前</td><td><em>vin, pain, impossible</em></td></tr></table>
<div class="box">⚠️ 后面有元音或双写 n/m 时，<b>不鼻化</b>：<em>bon</em> [bɔ̃] vs <em>bonne</em> [bɔn]，<em>un</em> vs <em>une</em>，<em>plein</em> vs <em>pleine</em>。这对听辨阴阳性很重要！</div>`,
    examples: ['enfant', 'temps', 'bonbon', 'maison', 'vin', 'pain', 'bon', 'bonne', 'un', 'une', 'chien', 'lundi'],
    pairs: [['vent', 'vont'], ['bon', 'bonne'], ['lent', 'long'], ['vin', 'vent'], ['un', 'une'], ['sain', 'son']],
  },
  {
    id: 'e', title: 'e / é / è 的区别', sub: '重音符号决定读音',
    html: `<table><tr><th>拼写</th><th>音</th><th>描述</th><th>例子</th></tr>
<tr><td><b>é</b></td><td>[e]</td><td>闭口的「诶」，像英语 <i>day</i> 但不滑动</td><td><em>café, été, parlé</em></td></tr>
<tr><td><b>è, ê</b></td><td>[ɛ]</td><td>开口的「哎」，像英语 <i>bed</i></td><td><em>père, fête, mère</em></td></tr>
<tr><td><b>e</b>（无符号）</td><td>[ə] 或不发音</td><td>轻短的「呃」</td><td><em>le, petit, je</em></td></tr></table>
<p><b>同样读 [e] 的拼写：</b><em>-er</em>（<em>parler</em>）、<em>-ez</em>（<em>parlez</em>）、<em>-et</em>（<em>et</em>）、<em>-ai</em>（<em>j'ai</em>）——所以 <em>parler / parlez / parlé</em> 发音相同！</p>
<p><b>同样读 [ɛ] 的拼写：</b><em>ai</em>（<em>maison</em>）、<em>ei</em>（<em>neige</em>）、<em>-ais / -ait</em>（<em>parlait</em>）。</p>`,
    examples: ['café', 'été', 'père', 'fête', 'le', 'les', 'parler', 'parlez', 'parlé', 'maison', 'neige', 'je'],
    pairs: [['le', 'les'], ['de', 'des'], ['ce', 'ces'], ['premier', 'première'], ['parlé', 'parlait']],
  },
  {
    id: 'combos', title: '常见字母组合', sub: 'oi / eu / ch / gn / ill / qu',
    html: `<table><tr><th>组合</th><th>读音</th><th>例子</th></tr>
<tr><td><b>oi</b></td><td>[wa]「哇」</td><td><em>moi, trois, voiture</em></td></tr>
<tr><td><b>au, eau</b></td><td>[o]「哦」</td><td><em>au revoir, beau, eau</em></td></tr>
<tr><td><b>eu, œu</b></td><td>[ø] / [œ] 圆唇的「呃」</td><td><em>deux, peu, sœur, heure</em></td></tr>
<tr><td><b>ch</b></td><td>[ʃ]「sh」（不是 ch！）</td><td><em>chat, chocolat, chercher</em></td></tr>
<tr><td><b>gn</b></td><td>[ɲ]「尼」</td><td><em>montagne, champagne</em></td></tr>
<tr><td><b>ill</b></td><td>[j]「耶」</td><td><em>fille, famille, travailler</em>（例外：<em>ville, mille</em> 读 [il]）</td></tr>
<tr><td><b>qu</b></td><td>[k]（u 不发音）</td><td><em>qui, quatre, musique</em></td></tr>
<tr><td><b>ç</b></td><td>[s]</td><td><em>ça, français, garçon</em></td></tr>
<tr><td><b>c / g + e,i,y</b></td><td>[s] / [ʒ]</td><td><em>ici, merci / manger, girafe</em></td></tr></table>`,
    examples: ['moi', 'trois', 'beau', 'deux', 'sœur', 'chat', 'montagne', 'fille', 'ville', 'quatre', 'français', 'manger'],
    pairs: [['deux', 'douze'], ['chat', 'ça'], ['peu', 'peur'], ['fille', 'ville'], ['beau', 'bœufs']],
  },
  {
    id: 'liaison', title: '连诵与省音', sub: 'les amis [lezami] —— 法语听起来「连成一片」的原因',
    html: `<p><b>连诵 (liaison)</b>：本来不发音的词尾辅音，遇到下一个词以元音开头时要发出来，并和下个词连读。</p>
<ul><li><em>les amis</em> [lezami]（s 读成 [z]）</li><li><em>vous avez</em> [vuzave]</li><li><em>un enfant</em> [œ̃nɑ̃fɑ̃]</li><li><em>petit ami</em> [pətitami]</li><li><em>deux heures</em> [døzœʁ]（x 读 [z]）</li></ul>
<div class="box"><b>必须连诵：</b>冠词/限定词 + 名词，代词 + 动词，形容词 + 名词。<br><b>禁止连诵：</b><em>et</em> 后面（<em>et / un</em>）；单数名词 + 动词；所谓「嘘音 h」前（<em>les héros</em> 不连）。</div>
<p><b>联诵 (enchaînement)</b>：读出来的词尾辅音直接连到下一个元音：<em>il est</em> [i-lɛ]、<em>avec elle</em> [a-vɛ-kɛl]。</p>
<p>这就是为什么 <em>Il est arrivé à huit heures</em> 听起来像一个长单词！听写时多注意。</p>`,
    examples: ['les amis', 'vous avez', 'un enfant', 'deux heures', 'petit ami', 'ils ont', 'ils sont', 'il est arrivé', 'avec elle', 'nous allons'],
    pairs: [['ils ont', 'ils sont'], ['vous avez', 'vous savez'], ['nous avons', 'nous savons'], ['un an', 'un banc']],
  },
  {
    id: 'rhythm', title: '节奏与语调', sub: '每个音节一样长，重音在最后',
    html: `<p>英语是「重音计时」语言（有轻重之分），法语是「<b>音节计时</b>」语言：每个音节基本<b>一样长、一样重</b>，只有<b>词组的最后一个音节</b>稍长稍重。</p>
<div class="box">英语：<i>pho-TO-gra-phy</i>, <i>res-TAU-rant</i><br>法语：<em>pho-to-gra-PHIE</em>, <em>res-tau-RANT</em><br>整句话：<em>Je voudrais un ca-FÉ</em>, <em>s'il vous PLAÎT</em>.</div>
<p>这和普通话不分轻重的节奏其实比较接近——<b>不要把英语的重音习惯带进法语</b>。</p>
<p><b>语调：</b>陈述句结尾下降 ↘；一般疑问句（不用 est-ce que 时）结尾上升 ↗：<em>Tu viens ?</em> ↗ / <em>Tu viens.</em> ↘</p>
<p>练习方法：去「口语 → 跟读」模仿语调，或者用「录音回放」对比自己和原声。</p>`,
    examples: ['restaurant', 'photographie', 'université', 'Tu viens ?', 'Tu viens.', 'Je voudrais un café', 'Qu\'est-ce que tu fais ?', 'C\'est formidable !'],
    pairs: [['Tu viens ?', 'Tu viens.'], ['Il pleut ?', 'Il pleut.'], ['Ça va ?', 'Ça va.']],
  },
);

EF.cognates.push(
  { en: '-tion', fr: '-tion', note: '几乎完全相同，而且都是阴性（la）。', ex: [['la nation', 'nation'], ['la question', 'question'], ['la solution', 'solution'], ["l'information", 'information']] },
  { en: '-ty', fr: '-té', note: '都是阴性。', ex: [['la liberté', 'liberty'], ["l'université", 'university'], ['la société', 'society'], ['la qualité', 'quality']] },
  { en: '-ous', fr: '-eux / -euse', note: '形容词，阴性 -euse。', ex: [['dangereux', 'dangerous'], ['curieux', 'curious'], ['nerveux', 'nervous'], ['délicieux', 'delicious']] },
  { en: '-ly', fr: '-ment', note: '副词：通常在形容词阴性形式后加 -ment。', ex: [['rapidement', 'rapidly'], ['finalement', 'finally'], ['exactement', 'exactly'], ['naturellement', 'naturally']] },
  { en: '-ic / -ical', fr: '-ique', note: '', ex: [['la musique', 'music'], ['politique', 'political'], ['électrique', 'electric'], ['logique', 'logical']] },
  { en: '-or / -er（人）', fr: '-eur', note: '阴性多为 -euse / -rice。', ex: [["l'acteur", 'actor'], ['le docteur', 'doctor'], ['la couleur', 'color'], ["l'ordinateur", 'computer']] },
  { en: '-ive', fr: '-if / -ive', note: '阳性 -if，阴性 -ive。', ex: [['actif', 'active'], ['créatif', 'creative'], ['positif', 'positive'], ['négatif', 'negative']] },
  { en: '-y', fr: '-ie', note: '多为阴性。', ex: [['la biologie', 'biology'], ['la philosophie', 'philosophy'], ['la compagnie', 'company'], ['la géographie', 'geography']] },
  { en: '-ize', fr: '-iser', note: '规则 -er 动词，直接能用！', ex: [['organiser', 'to organize'], ['réaliser', 'to realize (achieve)'], ['utiliser', 'to use'], ['analyser', 'to analyze']] },
  { en: '-ist / -ism', fr: '-iste / -isme', note: '', ex: [['le touriste', 'tourist'], ["l'artiste", 'artist'], ['le tourisme', 'tourism'], ['le réalisme', 'realism']] },
  { en: '-ence / -ance', fr: '-ence / -ance', note: '几乎都是阴性。', ex: [['la différence', 'difference'], ["l'importance", 'importance'], ['la patience', 'patience'], ['la distance', 'distance']] },
  { en: '-ate（动词）', fr: '-er', note: '', ex: [['créer', 'to create'], ['décorer', 'to decorate'], ['éduquer', 'to educate'], ['participer', 'to participate']] },
  { en: 's 消失 → ^', fr: 'ê / â / ô / î', note: '扬抑符 ^ 常代表古法语里消失的 s：看到 ^ 就在脑中补一个 s！', ex: [['la forêt', 'forest'], ["l'hôpital", 'hospital'], ['la fête', 'feast'], ["l'île", 'isle'], ['la bête', 'beast'], ['le château', 'castle']] },
  { en: 's- 开头', fr: 'é- 开头', note: '词首 é 常对应英语的 s。', ex: [["l'école", 'school'], ["l'étudiant", 'student'], ["l'état", 'state'], ["l'épice", 'spice'], ["l'éponge", 'sponge']] },
  { en: 'w-', fr: 'g(u)-', note: '日耳曼语词首 w 在法语里变成 g：', ex: [['la guerre', 'war'], ['garder', 'to guard / ward'], ['la garantie', 'warranty'], ['la guêpe', 'wasp']] },
);

EF.fauxAmis.push(
  { fr: 'actuellement', looks: 'actually', real: 'currently / at the moment', ex: 'Actuellement, je travaille à Paris.' },
  { fr: 'éventuellement', looks: 'eventually', real: 'possibly / if need be', ex: 'Je viendrai éventuellement samedi.' },
  { fr: 'la librairie', looks: 'library', real: 'bookshop', ex: "J'achète mes livres à la librairie." },
  { fr: 'la bibliothèque', looks: 'bibliography', real: 'library / bookcase', ex: 'Je lis à la bibliothèque.' },
  { fr: 'assister à', looks: 'to assist', real: 'to attend', ex: "J'ai assisté à une conférence." },
  { fr: 'attendre', looks: 'to attend', real: 'to wait (for)', ex: "J'attends le bus." },
  { fr: 'blesser', looks: 'to bless', real: 'to injure / to hurt', ex: 'Il a été blessé dans un accident.' },
  { fr: 'la déception', looks: 'deception', real: 'disappointment', ex: 'Quelle déception !' },
  { fr: 'la location', looks: 'location', real: 'rental', ex: 'une voiture de location' },
  { fr: 'la monnaie', looks: 'money', real: 'change (coins) / currency', ex: "Vous avez de la monnaie ?" },
  { fr: 'rester', looks: 'to rest', real: 'to stay', ex: 'Je reste à la maison ce soir.' },
  { fr: 'sensible', looks: 'sensible', real: 'sensitive', ex: 'Elle est très sensible.' },
  { fr: 'sympathique', looks: 'sympathetic', real: 'nice / friendly', ex: 'Ton frère est sympathique !' },
  { fr: 'le collège', looks: 'college / university', real: 'middle school', ex: 'Mon fils entre au collège.' },
  { fr: 'demander', looks: 'to demand', real: 'to ask', ex: "Je vais demander l'heure." },
  { fr: 'la figure', looks: 'figure', real: 'face', ex: 'Il a reçu un ballon en pleine figure.' },
  { fr: 'formidable', looks: 'formidable (intimidating)', real: 'great / wonderful', ex: "C'était un concert formidable !" },
  { fr: 'large', looks: 'large (big)', real: 'wide', ex: 'Cette rue est très large.' },
  { fr: 'la lecture', looks: 'lecture', real: 'reading', ex: "J'adore la lecture." },
  { fr: 'le raisin', looks: 'raisin', real: 'grape', ex: 'Le vin est fait avec du raisin.' },
  { fr: 'le magasin', looks: 'magazine', real: 'shop / store', ex: 'Le magasin ferme à 19 h.' },
  { fr: 'la prune', looks: 'prune', real: 'plum', ex: 'une tarte aux prunes' },
  { fr: "l'entrée", looks: 'entrée (US: main course)', real: 'starter / appetizer', ex: "En entrée, je prends une salade." },
  { fr: 'le costume', looks: 'costume', real: "(man's) suit", ex: 'Il porte un costume pour son entretien.' },
  { fr: 'la cave', looks: 'cave', real: 'cellar', ex: 'Le vin est dans la cave.' },
  { fr: 'le délai', looks: 'delay', real: 'deadline / time allowed', ex: 'Le délai est de deux semaines.' },
  { fr: 'le pain', looks: 'pain', real: 'bread', ex: 'Je voudrais du pain.' },
  { fr: 'car', looks: 'car', real: 'because (formal)', ex: 'Je reste, car il pleut.' },
  { fr: 'la journée', looks: 'journey', real: 'day (duration)', ex: 'Bonne journée !' },
  { fr: 'passer un examen', looks: 'to pass an exam', real: 'to take / sit an exam', ex: "Je passe l'examen demain." },
  { fr: 'le préservatif', looks: 'preservative', real: 'condom ⚠️', ex: 'Les conservateurs (pas préservatifs) sont dans les aliments.' },
  { fr: 'le coin', looks: 'coin', real: 'corner', ex: 'Le café est au coin de la rue.' },
  { fr: 'la chance', looks: 'chance (probability)', real: 'luck', ex: 'Bonne chance !' },
  { fr: "l'avertissement", looks: 'advertisement', real: 'warning', ex: "C'est un dernier avertissement." },
  { fr: 'prétendre', looks: 'to pretend', real: 'to claim', ex: 'Il prétend être médecin.' },
  { fr: 'achever', looks: 'to achieve', real: 'to finish / complete', ex: "J'ai achevé mon roman." },
);
