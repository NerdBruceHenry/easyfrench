/* A2 基础：8 个单元 */
EF.units.push(
  {
    id: 'a2-1', level: 'A2', icon: '🧑‍🎨', title: 'Portraits', zh: '描述人物、形容词与比较级',
    goal: '描述外貌和性格，掌握形容词的阴阳性、位置和比较级。',
    vocab: [
      ['grand(e)', 'tall / big', '≈ grand'],
      ['petit(e)', 'small / short', '≈ petite'],
      ['jeune', 'young', '≈ juvenile'],
      ['vieux (vieille)', 'old', '元音前阳性用 vieil：un vieil homme'],
      ['beau (belle)', 'beautiful / handsome', '元音前阳性用 bel：un bel homme'],
      ['gentil(le)', 'kind / nice', '⚠️ 不是 gentle 的「温柔」，是「友善」'],
      ['sympa', 'nice / friendly (informal)', 'sympathique 的缩写，⚠️ 不是 sympathetic'],
      ['drôle', 'funny', '≈ droll'],
      ['timide', 'shy', '≈ timid'],
      ['sérieux (sérieuse)', 'serious', '-ous → -eux'],
      ['heureux (heureuse)', 'happy'],
      ['intelligent(e)', 'intelligent / smart'],
      ['les cheveux (m.)', 'hair (on the head)', '永远用复数'],
      ['les yeux (m.)', 'eyes', '单数 un œil，非常不规则'],
      ['blond(e)', 'blond'],
      ['mince', 'slim'],
    ],
    grammar: {
      title: '形容词：阴阳性、位置 · 比较级',
      html: `<p><b>① 阴阳性和单复数</b>：形容词跟名词一致。</p>
<table><tr><th>规则</th><th>阳性</th><th>阴性</th></tr>
<tr><td>一般 + e</td><td><em>grand</em></td><td><em>grande</em></td></tr>
<tr><td>-e 结尾不变</td><td><em>jeune</em></td><td><em>jeune</em></td></tr>
<tr><td>-eux → -euse</td><td><em>heureux</em></td><td><em>heureuse</em></td></tr>
<tr><td>-if → -ive</td><td><em>sportif</em></td><td><em>sportive</em></td></tr>
<tr><td>双写辅音</td><td><em>gentil, bon</em></td><td><em>gentille, bonne</em></td></tr>
<tr><td>不规则</td><td><em>beau, vieux, nouveau</em></td><td><em>belle, vieille, nouvelle</em></td></tr></table>
<p><b>② 位置</b>：和英语相反，法语形容词大多放在名词<b>后面</b>：<em>un film intéressant</em>（an interesting film）。<br>
但少数常用短形容词放<b>前面</b>，记口诀 <b>BAGS</b>：<b>B</b>eauty 美（<em>beau, joli</em>）、<b>A</b>ge 年龄（<em>jeune, vieux, nouveau</em>）、<b>G</b>oodness 好坏（<em>bon, mauvais</em>）、<b>S</b>ize 大小（<em>grand, petit</em>）：<em>une belle maison</em>、<em>un petit chat</em>。</p>
<div class="box"><b>③ 比较级</b>：<br>
<em><b>plus</b> grand <b>que</b></em> = taller than · <em><b>moins</b> grand <b>que</b></em> = less tall than · <em><b>aussi</b> grand <b>que</b></em> = as tall as<br>
最高级：<em>le plus grand</em>（the tallest）、<em>la plus belle</em>。<br>
⚠️ 不规则：<em>bon → <b>meilleur</b></em>（better，不说 plus bon），<em>le meilleur</em>（the best）。</div>`,
    },
    examples: [
      ['Ma sœur est grande et blonde.', 'My sister is tall and blond.'],
      ['Il a les cheveux noirs et les yeux bleus.', 'He has black hair and blue eyes.'],
      ["C'est une femme très intelligente.", "She's a very intelligent woman."],
      ["J'ai un petit appartement dans une vieille maison.", 'I have a small flat in an old house.'],
      ['Paul est plus grand que son frère.', 'Paul is taller than his brother.'],
      ['Ce restaurant est meilleur que l\'autre.', 'This restaurant is better than the other one.'],
      ["C'est la plus belle ville du monde !", "It's the most beautiful city in the world!"],
      ['Mes amies sont drôles et sympas.', 'My (female) friends are funny and nice.'],
    ],
    quiz: [
      { q: 'Ma mère est très ___.', o: ['gentille', 'gentil', 'gentils', 'gentile'], a: 0, e: 'gentil → gentille（双写 l + e）' },
      { q: "C'est une ___ maison.", o: ['belle', 'beau', 'bel', 'beaux'], a: 0, e: 'maison 阴性 → belle，且放在名词前（BAGS）' },
      { q: 'Il regarde un film ___.', o: ['intéressant', 'intéressante', 'intéressants', 'plus'], a: 0, e: '大多数形容词放后面，和 film（阳性）一致' },
      { q: 'Ce gâteau est ___ que le gâteau de ma tante.', o: ['meilleur', 'plus bon', 'bonne', 'mieux bon'], a: 0, e: 'bon 的比较级 → meilleur' },
      { q: 'Elles sont ___.', o: ['heureuses', 'heureux', 'heureuse', 'heureuxs'], a: 0, e: '阴性复数：-euses' },
      { q: 'Marc est ___ grand que Julie : ils font 1m70 tous les deux.', o: ['aussi', 'plus', 'moins', 'très'], a: 0, e: '一样高 → aussi ... que' },
    ],
  },
  {
    id: 'a2-2', level: 'A2', icon: '⏰', title: 'Ma journée', zh: '一天的作息与反身动词',
    goal: '讲述一天的作息，掌握反身动词（se lever...）和顺序连接词。',
    vocab: [
      ['se réveiller', 'to wake up'],
      ['se lever', 'to get up', 'je me lève（加重音符）'],
      ['se doucher', 'to take a shower', '≈ douche'],
      ["s'habiller", 'to get dressed', '≈ habit（衣服）'],
      ['se brosser les dents', 'to brush your teeth', '≈ dentist'],
      ['se coucher', 'to go to bed', '≈ couch'],
      ['se dépêcher', 'to hurry', '≈ dispatch'],
      ["s'amuser", 'to have fun', '≈ amuse'],
      ['le petit-déjeuner', 'breakfast', '字面：小午餐'],
      ['le déjeuner', 'lunch'],
      ['le dîner', 'dinner', '≈ dine'],
      ["d'abord", 'first (of all)'],
      ['ensuite', 'then / next'],
      ['puis', 'then'],
      ['enfin', 'finally'],
      ["d'habitude", 'usually', '≈ habit'],
    ],
    grammar: {
      title: '反身动词 (verbes pronominaux)',
      html: `<p>英语里 <i>I wash <u>myself</u></i> 很少说，法语却很常见：动作作用在自己身上时，动词前加<b>反身代词</b>。</p>
<table><tr><th colspan="2">se lever（to get up）</th></tr>
<tr><td><em>je me lève</em></td><td><em>nous nous levons</em></td></tr>
<tr><td><em>tu te lèves</em></td><td><em>vous vous levez</em></td></tr>
<tr><td><em>il / elle se lève</em></td><td><em>ils / elles se lèvent</em></td></tr></table>
<p>元音前 <em>me / te / se</em> → <em>m' / t' / s'</em>：<em>je m'habille</em>、<em>il s'appelle</em>（原来 <em>je m'appelle</em> 就是反身动词！）</p>
<div class="box"><b>有无反身代词，意思不同：</b><br>
<em>Je lave la voiture.</em> — I wash the car.<br><em>Je <b>me</b> lave.</em> — I wash (myself).<br>
<em>Je réveille mon fils.</em> — I wake my son up.<br><em>Je <b>me</b> réveille.</em> — I wake up.</div>
<p><b>否定：</b>ne 放在反身代词前：<em>Je <b>ne</b> me lève <b>pas</b> tôt.</em><br>
<b>身体部位用定冠词：</b><em>Je me brosse <b>les</b> dents</em>（不是 mes dents）——反身代词已经说明是「我的」。</p>
<p><b>讲顺序：</b><em>D'abord</em> … <em>ensuite</em> … <em>puis</em> … <em>enfin</em> …</p>`,
    },
    examples: [
      ['Je me lève à sept heures.', 'I get up at seven.'],
      ["D'abord, je me douche, ensuite je m'habille.", 'First I shower, then I get dressed.'],
      ["D'habitude, nous prenons le petit-déjeuner ensemble.", 'We usually have breakfast together.'],
      ['Tu te couches tard ?', 'Do you go to bed late?'],
      ['Dépêche-toi, on va être en retard !', "Hurry up, we're going to be late!"],
      ['Les enfants s\'amusent dans le jardin.', 'The children are having fun in the garden.'],
      ['Le dimanche, je ne me réveille pas avant dix heures.', "On Sundays I don't wake up before ten."],
    ],
    quiz: [
      { q: 'Je ___ lève tôt.', o: ['me', 'se', 'te', 'moi'], a: 0, e: 'je → me' },
      { q: 'Nous ___ couchons à minuit.', o: ['nous', 'se', 'vous', 'nos'], a: 0, e: 'nous → nous' },
      { q: 'Elle ___ habille vite.', o: ["s'", 'se', "m'", 'si'], a: 0, e: 'se + 元音 → s\'' },
      { q: 'Je me brosse ___ dents.', o: ['les', 'mes', 'des', 'ses'], a: 0, e: '身体部位用定冠词' },
      { q: 'Il ne ___ pas.', o: ['se rase', 'rase se', 'se pas rase', 'rase'], a: 0, e: 'ne + 反身代词 + 动词 + pas' },
      { q: "___, je prends un café. Ensuite, je vais au travail.", o: ["D'abord", 'Enfin', 'Puis', 'Hier'], a: 0, e: '第一步 → d\'abord' },
    ],
  },
  {
    id: 'a2-3', level: 'A2', icon: '🎬', title: 'Le week-end dernier', zh: '复合过去时（avoir）',
    goal: '讲述过去发生的事，掌握复合过去时的构成和常见不规则过去分词。',
    vocab: [
      ['hier soir', 'last night'],
      ['le week-end dernier', 'last weekend'],
      ['la semaine dernière', 'last week'],
      ['il y a deux jours', 'two days ago', 'il y a + 时间 = ago'],
      ['déjà', 'already', '≈ déjà vu（已经看过）'],
      ['pas encore', 'not yet'],
      ['faire les courses', 'to do the shopping (groceries)'],
      ['voir', 'to see', '过去分词 vu'],
      ['faire', 'to do / to make', '过去分词 fait'],
      ['prendre', 'to take', '过去分词 pris'],
      ['boire', 'to drink', '过去分词 bu'],
      ['lire', 'to read', '过去分词 lu'],
      ['écrire', 'to write', '过去分词 écrit'],
      ['le concert', 'concert'],
      ['la soirée', 'evening / party', '≈ soirée'],
      ['passer', 'to spend (time) / to pass', "J'ai passé un bon week-end."],
    ],
    grammar: {
      title: '复合过去时 (passé composé) ①：avoir + 过去分词',
      html: `<p>结构和英语现在完成时 <i>I <u>have</u> eaten</i> 一模一样：<b>avoir（现在时）+ 过去分词</b>。但用法相当于英语的<b>一般过去时</b> <i>I ate</i>。</p>
<div class="box"><em>J'<b>ai mangé</b> une pizza hier.</em> — I ate a pizza yesterday.<br>（英语不能说 <i>I have eaten a pizza yesterday</i>，法语可以！）</div>
<table><tr><th>动词类型</th><th>过去分词</th><th>例子</th></tr>
<tr><td>-er</td><td>-é</td><td><em>parler → parlé</em></td></tr>
<tr><td>-ir</td><td>-i</td><td><em>finir → fini</em></td></tr>
<tr><td>-re</td><td>-u</td><td><em>attendre → attendu</em></td></tr></table>
<p><b>常见不规则过去分词（必背）：</b><em>être → été</em>，<em>avoir → eu</em>，<em>faire → fait</em>，<em>prendre → pris</em>，<em>voir → vu</em>，<em>boire → bu</em>，<em>lire → lu</em>，<em>dire → dit</em>，<em>écrire → écrit</em>，<em>mettre → mis</em>，<em>pouvoir → pu</em>，<em>vouloir → voulu</em>。</p>
<p><b>否定：</b>夹住助动词：<em>Je <b>n'</b>ai <b>pas</b> vu le film.</em><br>
<b>副词位置：</b><em>déjà, bien, beaucoup, pas encore</em> 放在助动词和分词之间：<em>J'ai <b>déjà</b> mangé.</em> · <em>Tu as <b>bien</b> dormi ?</em></p>`,
    },
    examples: [
      ["Hier soir, j'ai regardé un film.", 'Last night I watched a film.'],
      ['Le week-end dernier, nous avons fait les courses.', 'Last weekend we did the shopping.'],
      ['Tu as bien dormi ?', 'Did you sleep well?'],
      ["Elle a pris le métro il y a une heure.", 'She took the metro an hour ago.'],
      ["Je n'ai pas encore lu ce livre.", "I haven't read this book yet."],
      ['Ils ont bu du champagne à la soirée.', 'They drank champagne at the party.'],
      ["Qu'est-ce que tu as fait samedi ?", 'What did you do on Saturday?'],
      ["J'ai passé un excellent week-end.", 'I had an excellent weekend.'],
    ],
    quiz: [
      { q: "Hier, j'___ travaillé.", o: ['ai', 'suis', 'as', 'a'], a: 0, e: 'avoir + 过去分词' },
      { q: 'Nous avons ___ un film.', o: ['vu', 'voir', 'voyé', 'vous'], a: 0, e: 'voir → vu' },
      { q: "Qu'est-ce que tu as ___ ce week-end ?", o: ['fait', 'faire', 'faisé', 'fais'], a: 0, e: 'faire → fait' },
      { q: "Elle n'a ___ mangé.", o: ['pas', 'ne', 'rien pas', 'non'], a: 0, e: '否定：ne + avoir + pas + 分词' },
      { q: 'Ils ont ___ le train.', o: ['pris', 'prendu', 'prené', 'prendre'], a: 0, e: 'prendre → pris' },
      { q: "J'ai ___ fini mes devoirs !", o: ['déjà', 'hier', 'demain', 'il y a'], a: 0, e: '副词 déjà 放在助动词和分词之间' },
    ],
  },
  {
    id: 'a2-4', level: 'A2', icon: '✈️', title: 'En voyage', zh: '旅行与复合过去时（être）',
    goal: '讲述旅行经历，掌握用 être 作助动词的动词及过去分词的配合。',
    vocab: [
      ['le voyage', 'trip / journey', '≈ voyage'],
      ['les vacances (f.)', 'holidays / vacation', '永远复数；≈ vacancy'],
      ['partir', 'to leave', '过去分词 parti，用 être'],
      ['arriver', 'to arrive', '用 être'],
      ['rester', 'to stay', '⚠️ 不是 rest'],
      ['tomber', 'to fall', '用 être'],
      ['naître', 'to be born', '过去分词 né；≈ née（娘家姓）'],
      ['le train', 'train'],
      ["l'avion (m.)", 'plane', '≈ aviation'],
      ['la valise', 'suitcase', '≈ valise'],
      ['le billet', 'ticket', '≈ billet（军队住宿券）'],
      ['la plage', 'beach'],
      ['la montagne', 'mountain'],
      ["l'hôtel (m.)", 'hotel', 'h 不发音，用 l\''],
      ['le pays', 'country', '≈ peasant（乡下人）'],
      ['réserver', 'to book / reserve'],
    ],
    grammar: {
      title: '复合过去时 ②：être + 过去分词',
      html: `<p>大约 15 个表示<b>位置移动或状态改变</b>的动词用 <b>être</b> 作助动词。口诀 <b>DR & MRS VANDERTRAMP</b>：</p>
<p class="small"><b>D</b>evenir · <b>R</b>evenir · <b>M</b>onter · <b>R</b>ester · <b>S</b>ortir · <b>V</b>enir · <b>A</b>ller · <b>N</b>aître · <b>D</b>escendre · <b>E</b>ntrer · <b>R</b>entrer · <b>T</b>omber · <b>R</b>etourner · <b>A</b>rriver · <b>M</b>ourir · <b>P</b>artir</p>
<div class="box"><b>用 être 时，过去分词要和主语配合</b>（像形容词一样）：<br>
<em>Il est allé à Nice.</em><br><em>Elle est allé<b>e</b> à Nice.</em><br><em>Ils sont allé<b>s</b> à Nice.</em><br><em>Elles sont allé<b>es</b> à Nice.</em><br>
大多数情况下发音不变，但写作时一定要加！</div>
<p>可以想象一座房子 🏠：<em>naître</em>（出生）→ <em>entrer</em> → <em>monter</em> → <em>rester</em> → <em>descendre</em> → <em>sortir</em> → <em>partir</em> → <em>mourir</em>……这些「在房子里移动」的动作都用 être。</p>
<p><b>所有反身动词</b>也用 être：<em>Je me suis levé(e) tôt.</em></p>
<p><b>旅行常用：</b><em>en train / en avion / en voiture</em>（交通工具用 en），但 <em>à pied</em>（步行）、<em>à vélo</em>。</p>`,
    },
    examples: [
      ['Nous sommes partis en vacances en juillet.', 'We went on holiday in July.'],
      ['Elle est arrivée à Paris en avion.', 'She arrived in Paris by plane.'],
      ['Je suis né à Chengdu en 2000.', 'I was born in Chengdu in 2000.'],
      ['Ils sont restés une semaine à la montagne.', 'They stayed a week in the mountains.'],
      ['Ma valise est tombée dans le train !', 'My suitcase fell in the train!'],
      ['Tu es déjà allé en France ?', 'Have you ever been to France?'],
      ["J'ai réservé une chambre d'hôtel près de la plage.", 'I booked a hotel room near the beach.'],
      ['Elles se sont levées très tôt pour prendre le train.', 'They got up very early to catch the train.'],
    ],
    quiz: [
      { q: 'Elle ___ partie hier.', o: ['est', 'a', 'es', 'ai'], a: 0, e: 'partir 用 être' },
      { q: 'Nous sommes ___ à Lyon.', o: ['allés', 'allé', 'aller', 'allez'], a: 0, e: '主语 nous → 分词加 -s' },
      { q: 'Marie est ___ à huit heures.', o: ['arrivée', 'arrivé', 'arrivés', 'arriver'], a: 0, e: 'Marie 阴性 → 加 -e' },
      { q: "J'___ visité le musée.", o: ['ai', 'suis', 'es', 'a'], a: 0, e: 'visiter 不是移动类动词 → avoir' },
      { q: 'Ils sont ___ une semaine.', o: ['restés', 'resté', 'restées', 'rester'], a: 0, e: 'ils（阳性复数）→ -s' },
      { q: 'Je vais à Marseille ___ train.', o: ['en', 'à', 'par', 'dans'], a: 0, e: '交通工具：en train / en avion' },
    ],
  },
  {
    id: 'a2-5', level: 'A2', icon: '🧸', title: "Quand j'étais petit", zh: '童年回忆与未完成过去时',
    goal: '描述过去的习惯和背景，学会区分 imparfait 和 passé composé。',
    vocab: [
      ["l'enfance (f.)", 'childhood', '≈ infancy'],
      ['autrefois', 'in the past / formerly'],
      ['souvent', 'often'],
      ['tous les jours', 'every day'],
      ['parfois', 'sometimes'],
      ['jouer', 'to play', 'jouer à + 游戏/运动，jouer de + 乐器'],
      ['la campagne', 'countryside', '≈ campaign（原意：野外作战）'],
      ["l'école (f.)", 'school', 'é- ≈ s-：school'],
      ['le jardin', 'garden'],
      ['le vélo', 'bike', '≈ velocity'],
      ['le jouet', 'toy'],
      ['la ferme', 'farm'],
      ['se souvenir de', 'to remember', '≈ souvenir（纪念品）'],
      ['grandir', 'to grow up', '≈ grand'],
      ['pendant', 'during / for', '≈ pending'],
      ['quand', 'when'],
    ],
    grammar: {
      title: '未完成过去时 (imparfait) vs 复合过去时',
      html: `<p><b>构成：</b>取现在时 <em>nous</em> 形式，去掉 <em>-ons</em>，加词尾 <em>-ais, -ais, -ait, -ions, -iez, -aient</em>。</p>
<table><tr><td>nous <em>parlons</em> → <em>parl-</em></td><td><em>je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient</em></td></tr>
<tr><td>nous <em>finissons</em> → <em>finiss-</em></td><td><em>je finissais</em></td></tr>
<tr><td>唯一例外 être → <em>ét-</em></td><td><em>j'étais, tu étais, il était…</em></td></tr></table>
<div class="box"><b>两种过去时的分工（对应英语）：</b><br>
<b>Imparfait</b> = 背景、描写、习惯 ≈ <i>was doing / used to do / would do</i><br>
<em>Quand j'étais petit, je jouais au foot tous les jours.</em> — When I was little, I used to play football every day.<br><br>
<b>Passé composé</b> = 完成的、具体的事件 ≈ <i>did</i><br>
<em>Un jour, je suis tombé de vélo.</em> — One day, I fell off my bike.</div>
<p><b>经典组合：</b>背景（imparfait）+ 突然发生的事（passé composé）：<br>
<em>Je <b>regardais</b> la télé quand le téléphone <b>a sonné</b>.</em> — I was watching TV when the phone rang.</p>
<p><b>信号词：</b>imparfait 常和 <em>souvent, tous les jours, d'habitude, autrefois</em> 连用；passé composé 常和 <em>un jour, soudain, hier, une fois</em> 连用。</p>`,
    },
    examples: [
      ["Quand j'étais petit, j'habitais à la campagne.", 'When I was little, I lived in the countryside.'],
      ['Nous jouions souvent dans le jardin.', 'We often played in the garden.'],
      ['Mes grands-parents avaient une ferme.', 'My grandparents had a farm.'],
      ['Il faisait beau et les enfants étaient contents.', 'The weather was nice and the children were happy.'],
      ['Je lisais quand tu as appelé.', 'I was reading when you called.'],
      ['Tu te souviens de ton premier vélo ?', 'Do you remember your first bike?'],
      ["Pendant les vacances, on allait à la plage tous les jours.", 'During the holidays, we used to go to the beach every day.'],
    ],
    quiz: [
      { q: "Quand j'___ enfant, j'aimais le chocolat.", o: ['étais', 'ai été', 'suis', 'serai'], a: 0, e: '过去的状态/背景 → imparfait' },
      { q: 'Nous ___ souvent au parc.', o: ['allions', 'sommes allés', 'allons', 'irons'], a: 0, e: 'souvent → 习惯 → imparfait' },
      { q: 'Je dormais quand le téléphone ___.', o: ['a sonné', 'sonnait', 'sonne', 'sonnera'], a: 0, e: '突然发生的事件 → passé composé' },
      { q: 'Il ___ beau ce jour-là.', o: ['faisait', 'a fait', 'fait', 'faisons'], a: 0, e: '天气描写 → imparfait' },
      { q: 'Vous ___ à Paris avant ?', o: ['habitiez', 'habitez', 'habitions', 'habitaient'], a: 0, e: 'vous → -iez' },
      { q: 'Un jour, elle ___ de vélo.', o: ['est tombée', 'tombait', 'tombe', 'a tombé'], a: 0, e: 'un jour → 具体事件 → passé composé，tomber 用 être' },
    ],
  },
  {
    id: 'a2-6', level: 'A2', icon: '🛍️', title: 'Faire du shopping', zh: '购物与宾语代词',
    goal: '购物、买礼物，学会用 le/la/les/lui/leur 代替名词，避免重复。',
    vocab: [
      ['le cadeau', 'gift / present'],
      ['offrir', 'to give (as a gift) / to offer', '≈ offer'],
      ['donner', 'to give', '≈ donate'],
      ['acheter', 'to buy', "j'achète（加重音符）"],
      ['montrer', 'to show', '≈ demonstrate'],
      ['envoyer', 'to send', '≈ envoy（使节）'],
      ['essayer', 'to try (on)', '≈ essay（原意：尝试）'],
      ['la boutique', 'shop', '≈ boutique'],
      ['le magasin', 'shop / store', '⚠️ 不是 magazine（杂志 = le magazine）'],
      ['le prix', 'price', '≈ price / prize'],
      ['cher (chère)', 'expensive / dear', '≈ cherish'],
      ['bon marché', 'cheap', '字面：好市场'],
      ['la taille', 'size', '≈ tailor'],
      ['la robe', 'dress', '≈ robe'],
      ['la chemise', 'shirt', '⚠️ 男士衬衫，不是女士睡衣'],
      ['les chaussures (f.)', 'shoes'],
    ],
    grammar: {
      title: '直接 & 间接宾语代词',
      html: `<p>和英语 <i>it / him / her / them</i> 作用一样，但<b>位置不同</b>：法语宾语代词放在<b>动词前面</b>。</p>
<div class="box"><em>Je vois <b>Marie</b>.</em> → <em>Je <b>la</b> vois.</em>（I see <b>her</b>.）<br>
<em>J'achète <b>le pull</b>.</em> → <em>Je <b>l'</b>achète.</em>（I'm buying <b>it</b>.）</div>
<table><tr><th>直接宾语 (COD)</th><th>间接宾语 (COI)：à + 人</th></tr>
<tr><td><em>me, te, nous, vous</em></td><td><em>me, te, nous, vous</em>（相同）</td></tr>
<tr><td><em>le</em>（him/it m.）<em>la</em>（her/it f.）<em>les</em>（them）</td><td><em>lui</em>（to him / to her）<em>leur</em>（to them）</td></tr></table>
<p><b>直接还是间接？</b>看动词后面有没有 <b>à</b>：<em>donner qch <b>à</b> qn</em>、<em>téléphoner <b>à</b> qn</em>、<em>parler <b>à</b> qn</em> → 用 <em>lui / leur</em>。<br>
<em>Je téléphone <b>à ma mère</b>.</em> → <em>Je <b>lui</b> téléphone.</em><br>
⚠️ <em>lui</em> 既是 to him 也是 to her！</p>
<p><b>否定：</b><em>Je ne <b>la</b> vois pas.</em> · <b>复合过去时：</b>代词在助动词前：<em>Je l'ai acheté.</em><br>
<b>最近将来时：</b>代词在原形动词前：<em>Je vais <b>lui</b> offrir un cadeau.</em></p>`,
    },
    examples: [
      ['Cette robe ? Je la trouve trop chère.', 'This dress? I find it too expensive.'],
      ['Je peux essayer cette chemise ?', 'Can I try on this shirt?'],
      ["C'est l'anniversaire de Paul. Je lui offre un livre.", "It's Paul's birthday. I'm giving him a book."],
      ['Tu connais mes parents ? Oui, je les connais.', 'Do you know my parents? Yes, I know them.'],
      ["Je vais leur envoyer une carte postale.", "I'm going to send them a postcard."],
      ['Vous faites quelle taille ?', 'What size are you?'],
      ["Ces chaussures sont bon marché, je les achète !", "These shoes are cheap, I'm buying them!"],
      ["Le cadeau ? Je ne l'ai pas encore acheté.", "The gift? I haven't bought it yet."],
    ],
    quiz: [
      { q: 'Le livre ? Je ___ lis.', o: ['le', 'la', 'lui', 'les'], a: 0, e: 'livre 阳性直接宾语 → le' },
      { q: 'Ma sœur ? Je ___ téléphone ce soir.', o: ['lui', 'la', 'le', 'leur'], a: 0, e: 'téléphoner à qn → 间接宾语 lui' },
      { q: 'Mes amis ? Je ___ donne un cadeau.', o: ['leur', 'les', 'lui', 'leurs'], a: 0, e: 'donner à + 复数人 → leur' },
      { q: 'Ces chaussures ? Je ___ achète.', o: ['les', 'leur', 'la', 'lui'], a: 0, e: '复数直接宾语 → les' },
      { q: 'La robe ? Je ne ___ aime pas.', o: ["l'", 'la', 'le', 'lui'], a: 0, e: 'la + 元音 → l\'' },
      { q: 'Je vais ___ montrer mes photos (à toi).', o: ['te', 'toi', 'lui', 'tu'], a: 0, e: '代词放在原形动词前，à toi → te' },
    ],
  },
  {
    id: 'a2-7', level: 'A2', icon: '🩺', title: 'Chez le médecin', zh: '健康、身体与命令式',
    goal: '描述身体不适，听懂医生的建议，掌握命令式和代词 y / en。',
    vocab: [
      ['la tête', 'head', '^ = 消失的 s（古法语 teste）'],
      ['le ventre', 'belly / stomach', '≈ ventriloquist'],
      ['le dos', 'back', '≈ dorsal'],
      ['la gorge', 'throat', '≈ gorge'],
      ['le bras', 'arm', '≈ bracelet'],
      ['la jambe', 'leg'],
      ['avoir mal à', 'to have a pain in / to hurt', "j'ai mal à la tête"],
      ['le médecin', 'doctor', '≈ medicine'],
      ['malade', 'sick / ill', '≈ malady'],
      ['la fièvre', 'fever'],
      ['le rhume', 'a cold', '≈ rheum'],
      ['le médicament', 'medicine (drug)'],
      ["l'ordonnance (f.)", 'prescription'],
      ['se reposer', 'to rest', '≈ repose'],
      ['fatigué(e)', 'tired', '≈ fatigue'],
      ['la santé', 'health', 'À votre santé ! = Cheers!'],
    ],
    grammar: {
      title: '命令式 · 代词 y 和 en',
      html: `<p><b>命令式</b>：去掉主语即可，只有 <em>tu / nous / vous</em> 三种形式。</p>
<table><tr><th></th><th>prendre</th><th>se reposer</th></tr>
<tr><td>tu</td><td><em>Prends !</em></td><td><em>Repose-toi !</em></td></tr>
<tr><td>nous</td><td><em>Prenons !</em>（Let's take）</td><td><em>Reposons-nous !</em></td></tr>
<tr><td>vous</td><td><em>Prenez !</em></td><td><em>Reposez-vous !</em></td></tr></table>
<p>⚠️ -er 动词 tu 形式去掉 s：<em>tu manges → Mange !</em> · 否定：<em>Ne mange pas trop !</em><br>
不规则：<em>être → sois / soyez</em>，<em>avoir → aie / ayez</em>。</p>
<div class="box"><b>代词 en</b> = 代替「de + 名词」或数量，≈ <i>some / of it / of them</i>：<br>
<em>Tu as <b>des médicaments</b> ? — Oui, j'<b>en</b> ai.</em><br><em>Vous avez combien d'enfants ? — J'<b>en</b> ai deux.</em>（英语可以省略，法语必须有 en！）<br><br>
<b>代词 y</b> = 代替「à / en / chez + 地点」，≈ <i>there</i>：<br>
<em>Tu vas <b>chez le médecin</b> ? — Oui, j'<b>y</b> vais demain.</em></div>
<p><b>说哪里疼：</b><em>avoir mal + à</em>：<em>j'ai mal <b>à la</b> tête / <b>au</b> ventre / <b>aux</b> dents</em>。</p>
<p><b>il faut + 原形</b> = one must / you need to：<em>Il faut boire beaucoup d'eau.</em></p>`,
    },
    examples: [
      ["J'ai mal à la tête et j'ai de la fièvre.", 'I have a headache and a fever.'],
      ['Reposez-vous et buvez beaucoup d\'eau.', 'Rest and drink a lot of water.'],
      ['Prenez ce médicament trois fois par jour.', 'Take this medicine three times a day.'],
      ['Tu es malade ? Ne va pas au travail !', "You're sick? Don't go to work!"],
      ["Des médicaments ? Oui, j'en ai dans mon sac.", 'Medicine? Yes, I have some in my bag.'],
      ["La pharmacie ? J'y vais tout de suite.", "The pharmacy? I'm going there right away."],
      ["Il faut dormir au moins huit heures.", 'You need to sleep at least eight hours.'],
      ["J'ai un rhume, j'ai mal à la gorge.", 'I have a cold, my throat hurts.'],
    ],
    quiz: [
      { q: "J'ai mal ___ ventre.", o: ['au', 'à la', 'aux', 'à le'], a: 0, e: 'à + le ventre → au' },
      { q: '(à toi) ___ ce médicament !', o: ['Prends', 'Prendre', 'Tu prends', 'Prenez-toi'], a: 0, e: 'tu 的命令式：Prends !' },
      { q: '(à vous) ___ !', o: ['Reposez-vous', 'Vous reposez', 'Repose-toi', 'Reposer'], a: 0, e: 'vous 命令式 + 反身代词放后面' },
      { q: 'Tu as des enfants ? — Oui, j\'___ ai trois.', o: ['en', 'y', 'les', 'leur'], a: 0, e: '数量 → en' },
      { q: 'Tu vas à Paris ? — Oui, j\'___ vais en mai.', o: ['y', 'en', 'la', 'le'], a: 0, e: 'à + 地点 → y' },
      { q: '(à toi) Ne ___ pas trop de sucre !', o: ['mange', 'manges', 'mangez', 'manger'], a: 0, e: '-er 动词 tu 命令式去掉 s' },
    ],
  },
  {
    id: 'a2-8', level: 'A2', icon: '🔮', title: "Projets d'avenir", zh: '未来计划与简单将来时',
    goal: '谈论未来计划和梦想，掌握简单将来时及「si + 现在时 + 将来时」。',
    vocab: [
      ["l'avenir (m.)", 'the future', 'à venir = to come'],
      ['le projet', 'plan / project', '⚠️ 常指「计划」'],
      ['un jour', 'one day / someday'],
      ['plus tard', 'later'],
      ['devenir', 'to become', '将来时 je deviendrai'],
      ['le métier', 'job / profession', '≈ métier'],
      ['réussir', 'to succeed / to pass', 'réussir un examen = pass an exam'],
      ["l'examen (m.)", 'exam'],
      ["l'université (f.)", 'university', '-ty → -té'],
      ['trouver un travail', 'to find a job'],
      ['déménager', 'to move (house)'],
      ['rêver de', 'to dream of'],
      ["l'étranger (m.)", 'abroad / foreigner', 'à l\'étranger = abroad；≈ strange'],
      ['économiser', 'to save (money)', '≈ economize'],
      ['peut-être', 'maybe / perhaps', '字面：can be'],
      ['bientôt', 'soon'],
    ],
    grammar: {
      title: '简单将来时 (futur simple) · si 条件句 ①',
      html: `<p><b>构成：</b>动词原形 + 词尾 <em>-ai, -as, -a, -ons, -ez, -ont</em>（就是 avoir 的现在时！）。-re 动词去掉 e。</p>
<table><tr><td><em>parler → je parlerai</em></td><td><em>finir → tu finiras</em></td><td><em>prendre → il prendra</em></td></tr></table>
<p><b>不规则词干（必背）：</b><em>être → ser-</em>、<em>avoir → aur-</em>、<em>aller → ir-</em>、<em>faire → fer-</em>、<em>pouvoir → pourr-</em>、<em>vouloir → voudr-</em>、<em>venir → viendr-</em>、<em>voir → verr-</em>、<em>savoir → saur-</em>、<em>devoir → devr-</em>。词尾都一样规则。</p>
<div class="box"><b>futur proche vs futur simple：</b><br>
<em>Je vais partir.</em> — 马上、已决定（≈ I'm going to leave）<br>
<em>Je partirai un jour.</em> — 较远、较不确定、更书面（≈ I will leave）</div>
<p><b>si 条件句（真实条件）：si + 现在时，将来时</b>——和英语 <i>If it rains, I will stay</i> 完全一样：<br>
<em><b>S'il</b> pleut demain, je <b>resterai</b> à la maison.</em><br>
⚠️ 和英语一样，si 从句里<b>不能</b>用将来时。<em>si + il → s'il</em>（但 <em>si elle</em> 不省音）。</p>`,
    },
    examples: [
      ["Plus tard, je serai médecin.", "Later I'll be a doctor."],
      ["L'année prochaine, nous irons en France.", "Next year we'll go to France."],
      ['Si je réussis mon examen, je ferai la fête.', "If I pass my exam, I'll throw a party."],
      ["Un jour, j'habiterai à l'étranger.", "One day, I'll live abroad."],
      ['Elle deviendra une grande artiste.', "She'll become a great artist."],
      ["S'il fait beau, on pourra aller à la plage.", "If the weather is nice, we'll be able to go to the beach."],
      ["Je rêve de faire le tour du monde.", 'I dream of travelling around the world.'],
      ['Tu auras le temps de venir ?', 'Will you have time to come?'],
    ],
    quiz: [
      { q: 'Demain, je ___ à Paris.', o: ['serai', 'étais', 'suis été', 'sera'], a: 0, e: 'être → ser- + ai' },
      { q: 'Nous ___ en vacances en août.', o: ['irons', 'allerons', 'allions', 'irez'], a: 0, e: 'aller → ir- + ons' },
      { q: 'Si tu travailles, tu ___.', o: ['réussiras', 'réussis', 'réussirais', 'réussissais'], a: 0, e: 'si + 现在时 → 主句将来时' },
      { q: "S'il ___ beau, on sortira.", o: ['fait', 'fera', 'faisait', 'ferait'], a: 0, e: 'si 从句用现在时，不用将来时' },
      { q: 'Ils ___ le temps ?', o: ['auront', 'avront', 'aurent', 'ont eu'], a: 0, e: 'avoir → aur- + ont' },
      { q: 'Vous ___ venir ce soir ?', o: ['pourrez', 'pouvrez', 'pourez', 'pouviez'], a: 0, e: 'pouvoir → pourr-（两个 r）' },
    ],
  },
);
