/* A1 入门：8 个单元
 * vocab: [法语, 英文释义, 提示(可选)]；名词带冠词，l' 开头的名词用 (m.)/(f.) 标性别
 * grammar.html 中 <em> 包裹的法语可点击朗读
 */
EF.units.push(
  {
    id: 'a1-1', level: 'A1', icon: '👋', title: 'Bonjour !', zh: '问候与自我介绍',
    goal: '会打招呼、说出自己的名字和国籍，掌握 être 的变位和 tu / vous 的区别。',
    vocab: [
      ['bonjour', 'hello / good morning', '白天通用，bon = good, jour = day'],
      ['bonsoir', 'good evening'],
      ['salut', 'hi / bye (informal)', '朋友之间用'],
      ['au revoir', 'goodbye', '字面：直到再见'],
      ['merci', 'thank you', 'merci beaucoup = thanks a lot'],
      ["s'il vous plaît", 'please (formal)', "≈ if it pleases you；对朋友用 s'il te plaît"],
      ['oui', 'yes'],
      ['non', 'no'],
      ["je m'appelle", 'my name is', '字面：I call myself'],
      ['enchanté(e)', 'nice to meet you', '≈ enchanted！女生写 enchantée，发音相同'],
      ['comment ça va ?', 'how are you?', '口语常简化为 ça va ?'],
      ['ça va bien', "I'm fine"],
      ['à bientôt', 'see you soon'],
      ['excusez-moi', 'excuse me', '≈ excuse me'],
      ['chinois(e)', 'Chinese', '女性形式 chinoise，末尾 s 开始发音'],
      ['étudiant(e)', 'student', '≈ student：é- 开头常对应英语 s-'],
    ],
    grammar: {
      title: '主语代词 & 动词 être（to be）',
      html: `<p>和英语的 <i>I am / you are / he is</i> 一样，法语最重要的动词是 <b>être</b>，而且同样不规则。</p>
<table><tr><th>法语</th><th>英语</th><th>法语</th><th>英语</th></tr>
<tr><td><em>je suis</em></td><td>I am</td><td><em>nous sommes</em></td><td>we are</td></tr>
<tr><td><em>tu es</em></td><td>you are（熟人）</td><td><em>vous êtes</em></td><td>you are（礼貌 / 复数）</td></tr>
<tr><td><em>il est / elle est</em></td><td>he / she is</td><td><em>ils sont / elles sont</em></td><td>they are</td></tr></table>
<div class="box"><b>tu 还是 vous？</b>英语只有一个 <i>you</i>，法语分两种：<br>
• <b>tu</b>：朋友、家人、小孩、同龄年轻人。<br>• <b>vous</b>：陌生人、长辈、店员、上司——以及<b>任何多于一个人</b>的情况。<br>拿不准时用 <b>vous</b>，不会出错。</div>
<p><b>和英语的区别：</b>说职业、国籍时<b>不加冠词</b>：<em>Je suis étudiant.</em>（不是 <i>Je suis un étudiant</i>）≈ <i>I am a student</i>。</p>
<p><b>阴阳性初体验：</b>形容词要和主语一致。女性通常加 <b>-e</b>：<em>Il est chinois.</em> / <em>Elle est chinoise.</em>——加 e 后，原本不发音的 s 要读出来。</p>`,
    },
    examples: [
      ["Bonjour, je m'appelle Léa.", 'Hello, my name is Léa.'],
      ['Je suis chinois. Et toi ?', 'I am Chinese. And you?'],
      ['Elle est étudiante à Paris.', 'She is a student in Paris.'],
      ['Nous sommes amis.', 'We are friends.'],
      ['Vous êtes français ?', 'Are you French?'],
      ['Comment ça va ? Ça va bien, merci.', "How are you? I'm fine, thanks."],
      ['Enchanté, Monsieur Dupont.', 'Nice to meet you, Mr Dupont.'],
      ['Au revoir et à bientôt !', 'Goodbye and see you soon!'],
    ],
    quiz: [
      { q: 'Je ___ étudiant.', o: ['suis', 'es', 'est', 'sommes'], a: 0, e: 'je → suis' },
      { q: 'Vous ___ français ?', o: ['êtes', 'est', 'sont', 'es'], a: 0, e: 'vous → êtes' },
      { q: 'Ils ___ à Paris.', o: ['sont', 'sommes', 'est', 'êtes'], a: 0, e: 'ils → sont' },
      { q: 'Marie est ___.', o: ['chinoise', 'chinois', 'chinoises', 'chinoiss'], a: 0, e: 'Marie 是女性 → 形容词加 -e' },
      { q: "Pour parler à ton professeur, tu dis : « ___ êtes très gentil. »", o: ['Vous', 'Tu', 'Il', 'Nous'], a: 0, e: '对老师、长辈用礼貌的 vous' },
      { q: 'Il est ___.', o: ['médecin', 'un médecin', 'le médecin', 'une médecin'], a: 0, e: '职业前不加冠词：Il est médecin.' },
    ],
  },
  {
    id: 'a1-2', level: 'A1', icon: '🔢', title: "J'ai vingt ans", zh: '数字、年龄与 avoir',
    goal: '会数 0–20 及整十数，用 avoir 说年龄和「饿、渴、冷」等感觉。',
    vocab: [
      ['un', 'one'], ['deux', 'two'], ['trois', 'three'], ['quatre', 'four'], ['cinq', 'five'],
      ['six', 'six'], ['sept', 'seven', 'p 不发音'], ['huit', 'eight'], ['neuf', 'nine'], ['dix', 'ten'],
      ['vingt', 'twenty', 'gt 不发音'], ['trente', 'thirty'], ['cent', 'one hundred', '≈ cent（美分＝百分之一）'],
      ['un an', 'a year', "年龄说 j'ai 20 ans"],
      ["l'âge (m.)", 'age', '≈ age；^ 往往代表古法语里消失的 s'],
      ['avoir faim', 'to be hungry', '字面：have hunger'],
      ['avoir soif', 'to be thirsty'],
      ['avoir froid', 'to be cold'],
    ],
    grammar: {
      title: '动词 avoir（to have）& 年龄的说法',
      html: `<table><tr><td><em>j'ai</em></td><td>I have</td><td><em>nous avons</em></td><td>we have</td></tr>
<tr><td><em>tu as</em></td><td>you have</td><td><em>vous avez</em></td><td>you have</td></tr>
<tr><td><em>il a / elle a</em></td><td>he/she has</td><td><em>ils ont / elles ont</em></td><td>they have</td></tr></table>
<div class="box"><b>⚠️ 英语思维陷阱：</b>英语说 <i>I <u>am</u> 20</i>，法语说 <em>J'<b>ai</b> vingt ans</em>（我<b>有</b> 20 岁）。<br>
同样：<em>J'ai faim</em>（I am hungry），<em>J'ai soif</em>（thirsty），<em>J'ai froid / chaud</em>（cold / hot），<em>J'ai peur</em>（afraid），<em>J'ai raison / tort</em>（right / wrong）。</div>
<p><b>省音 (élision)：</b><em>je</em> 遇到元音开头的词要变成 <em>j'</em>：<em>j'ai</em>、<em>j'aime</em>、<em>j'habite</em>。英语的 <i>I'm</i> 是可选的，法语的省音是<b>强制的</b>。</p>
<p><b>数字小贴士：</b>11–16 要单独记：<em>onze, douze, treize, quatorze, quinze, seize</em>；17–19 是「10+7」：<em>dix-sept, dix-huit, dix-neuf</em>。21 = <em>vingt et un</em>，22 = <em>vingt-deux</em>。去游戏里的「数字听写」多练！</p>
<p><b>疑问：</b><em>Tu as quel âge ?</em> = How old are you?</p>`,
    },
    examples: [
      ["J'ai vingt-deux ans.", "I'm twenty-two years old."],
      ['Tu as quel âge ?', 'How old are you?'],
      ['Mon frère a dix-huit ans.', 'My brother is eighteen.'],
      ["J'ai faim et j'ai soif.", "I'm hungry and I'm thirsty."],
      ['Nous avons deux chats.', 'We have two cats.'],
      ['Ils ont trois enfants.', 'They have three children.'],
      ['Vous avez froid ?', 'Are you cold?'],
    ],
    quiz: [
      { q: "J'___ vingt ans.", o: ['ai', 'suis', 'as', 'a'], a: 0, e: '年龄用 avoir：j\'ai ... ans' },
      { q: 'Tu ___ quel âge ?', o: ['as', 'es', 'a', 'ai'], a: 0, e: 'tu → as' },
      { q: 'Nous ___ faim.', o: ['avons', 'sommes', 'avez', 'ont'], a: 0, e: '「饿」用 avoir faim' },
      { q: 'Elles ___ deux enfants.', o: ['ont', 'sont', 'a', 'avons'], a: 0, e: 'elles → ont' },
      { q: '17 = ?', o: ['dix-sept', 'sept-dix', 'dix et sept', 'soixante-dix'], a: 0, e: '17 = 10 + 7 = dix-sept' },
      { q: '___ aime le chocolat.', o: ["J'", 'Je', "Je l'", 'Jai'], a: 0, e: 'je + 元音 → j\'' },
    ],
  },
  {
    id: 'a1-3', level: 'A1', icon: '👨‍👩‍👧', title: 'Ma famille', zh: '家庭、冠词与物主形容词',
    goal: '介绍家庭成员，掌握 le/la/les、un/une/des 以及 mon/ma/mes。',
    vocab: [
      ['le père', 'father', '≈ paternal'],
      ['la mère', 'mother', '≈ maternal'],
      ['le frère', 'brother', '≈ fraternal'],
      ['la sœur', 'sister', '≈ sorority'],
      ['le fils', 'son', 's 要发音：[fis]'],
      ['la fille', 'daughter / girl'],
      ['les parents', 'parents / relatives', '≈ parents'],
      ['le mari', 'husband', '≈ married'],
      ['la femme', 'wife / woman', '发音 [fam]，很特殊'],
      ["l'enfant (m.)", 'child', '≈ infant'],
      ['le grand-père', 'grandfather'],
      ['la grand-mère', 'grandmother'],
      ["l'ami (m.)", 'friend (male)', "女性朋友 l'amie；≈ amicable"],
      ['le chien', 'dog', '≈ canine'],
      ['le chat', 'cat', 't 不发音'],
      ['la maison', 'house', '≈ mansion'],
    ],
    grammar: {
      title: '冠词与阴阳性 · 物主形容词',
      html: `<p>英语只有 <i>the / a</i>，法语的冠词要根据名词的<b>阴阳性</b>和<b>单复数</b>变化。每个名词都有性别，即使是桌子和房子。</p>
<table><tr><th></th><th>阳性单数</th><th>阴性单数</th><th>复数</th></tr>
<tr><td>the（定冠词）</td><td><em>le père</em></td><td><em>la mère</em></td><td><em>les parents</em></td></tr>
<tr><td>a / some（不定冠词）</td><td><em>un frère</em></td><td><em>une sœur</em></td><td><em>des amis</em></td></tr></table>
<p><em>le / la</em> 遇到元音或哑音 h 变成 <em>l'</em>：<em>l'enfant</em>、<em>l'école</em>、<em>l'hôtel</em>。</p>
<div class="box"><b>物主形容词</b>和<b>被拥有的东西</b>的性别一致，而不是拥有者！<br>
<em>mon père</em>（my father）· <em>ma mère</em>（my mother）· <em>mes parents</em>（my parents）<br>
<em>ton / ta / tes</em> = your（tu） · <em>son / sa / ses</em> = his <b>或</b> her<br>
<em>notre / nos</em> = our · <em>votre / vos</em> = your（vous） · <em>leur / leurs</em> = their<br>
⚠️ <em>sa mère</em> 既可以是 his mother 也可以是 her mother——由 mère 是阴性决定，与「他/她」无关。<br>
⚠️ 阴性名词以元音开头时用 <em>mon</em>：<em>mon amie</em>（不说 ma amie），为了好发音。</div>
<p><b>复数：</b>大多数加 <b>-s</b>，但这个 s <b>不发音</b>！听力上要靠冠词 <em>le</em> [lə] / <em>les</em> [le] 区分单复数。</p>`,
    },
    examples: [
      ["J'ai un frère et une sœur.", 'I have a brother and a sister.'],
      ["Ma mère s'appelle Sophie.", "My mother's name is Sophie."],
      ['Mon père est professeur.', 'My father is a teacher.'],
      ['Ses enfants sont petits.', 'His/Her children are small.'],
      ['Le chien de mon ami est noir.', "My friend's dog is black."],
      ['Nos grands-parents ont une maison.', 'Our grandparents have a house.'],
      ["C'est la fille de Paul.", "This is Paul's daughter."],
    ],
    quiz: [
      { q: "J'ai ___ sœur.", o: ['une', 'un', 'le', 'des'], a: 0, e: 'sœur 是阴性 → une' },
      { q: '___ parents sont gentils.', o: ['Mes', 'Mon', 'Ma', 'Me'], a: 0, e: 'parents 复数 → mes' },
      { q: 'Paul aime ___ mère.', o: ['sa', 'son', 'ses', 'leur'], a: 0, e: '跟 mère（阴性）一致 → sa，即便 Paul 是男性' },
      { q: '___ enfant est petit.', o: ["L'", 'Le', 'La', 'Les'], a: 0, e: '元音开头 → l\'' },
      { q: 'Elle a ___ amie française.', o: ['une', 'un', 'des', 'la'], a: 0, e: 'amie（女性朋友）→ une' },
      { q: "C'est ___ amie Julie.", o: ['mon', 'ma', 'mes', 'me'], a: 0, e: '元音开头的阴性名词前用 mon，避免 ma amie' },
    ],
  },
  {
    id: 'a1-4', level: 'A1', icon: '☕', title: 'Ma vie quotidienne', zh: '日常生活与 -er 动词',
    goal: '用规则 -er 动词描述日常活动，理解法语「写的多、读的少」的特点。',
    vocab: [
      ['parler', 'to speak', '≈ parliament（议会：说话的地方）'],
      ['habiter', 'to live (in a place)', '≈ inhabit'],
      ['travailler', 'to work', '≈ travail（艰苦劳作）'],
      ['aimer', 'to like / to love', '≈ amiable'],
      ['regarder', 'to watch / look at', '≈ regard'],
      ['écouter', 'to listen to', '不需要 to：écouter la musique'],
      ['manger', 'to eat', '≈ manger（马槽）；nous mangeons 保留 e'],
      ['étudier', 'to study', '≈ study'],
      ['adorer', 'to love / adore', '≈ adore'],
      ['détester', 'to hate', '≈ detest'],
      ['cuisiner', 'to cook', '≈ cuisine'],
      ['la musique', 'music', '≈ music：-ic → -ique'],
      ['le sport', 'sport'],
      ['le film', 'film / movie'],
      ['le matin', 'morning'],
      ['le soir', 'evening'],
    ],
    grammar: {
      title: '规则 -er 动词现在时（约占法语动词 90%）',
      html: `<p>去掉 <b>-er</b>，加上词尾：</p>
<table><tr><th colspan="2">parler（to speak）</th><th>词尾</th><th>发音</th></tr>
<tr><td>je</td><td><em>parle</em></td><td>-e</td><td rowspan="3">这四个形式<b>发音完全一样</b> [paʁl]！</td></tr>
<tr><td>tu</td><td><em>parles</em></td><td>-es</td></tr>
<tr><td>il / elle</td><td><em>parle</em></td><td>-e</td></tr>
<tr><td>nous</td><td><em>parlons</em></td><td>-ons</td><td>[paʁlɔ̃]</td></tr>
<tr><td>vous</td><td><em>parlez</em></td><td>-ez</td><td>[paʁle]</td></tr>
<tr><td>ils / elles</td><td><em>parlent</em></td><td>-ent</td><td>-ent 不发音！[paʁl]</td></tr></table>
<div class="box"><b>好消息：</b>口语里你只需要会 3 个读音。<b>坏消息：</b>写的时候要写对词尾——这也是为什么法语听写特别有用。</div>
<p><b>现在时 = 英语的两种时态：</b><em>Je travaille</em> = I work <b>和</b> I am working。法语没有进行时形式（强调「正在」可用 <em>être en train de</em>）。</p>
<p><b>喜好动词 + 定冠词：</b>英语说 <i>I like music</i>，法语必须说 <em>J'aime <b>la</b> musique</em>。泛指一类事物要加 le/la/les。</p>`,
    },
    examples: [
      ["J'habite à Shanghai.", 'I live in Shanghai.'],
      ['Tu parles anglais ?', 'Do you speak English?'],
      ['Elle travaille le matin.', 'She works in the morning.'],
      ["Nous regardons un film ce soir.", "We're watching a film tonight."],
      ["J'adore la musique française.", 'I love French music.'],
      ['Vous aimez le sport ?', 'Do you like sport?'],
      ['Ils étudient le français.', 'They are studying French.'],
      ['Mon père cuisine très bien.', 'My father cooks very well.'],
    ],
    quiz: [
      { q: 'Nous ___ français.', o: ['parlons', 'parlez', 'parle', 'parlent'], a: 0, e: 'nous → -ons' },
      { q: 'Ils ___ à Lyon.', o: ['habitent', 'habitons', 'habitez', 'habites'], a: 0, e: 'ils → -ent（不发音）' },
      { q: 'Vous ___ le café ?', o: ['aimez', 'aimons', 'aime', 'aiment'], a: 0, e: 'vous → -ez' },
      { q: "J'aime ___ musique.", o: ['la', 'une', '(rien)', 'de'], a: 0, e: '喜好动词后泛指用定冠词' },
      { q: 'Tu ___ la télé.', o: ['regardes', 'regarde', 'regardez', 'regardent'], a: 0, e: 'tu → -es' },
      { q: '« Je travaille » = ?', o: ['I work / I am working', 'I worked', 'I will work', 'I have worked'], a: 0, e: '法语现在时包含了英语的一般现在时和进行时' },
    ],
  },
  {
    id: 'a1-5', level: 'A1', icon: '❓', title: 'Questions & négation', zh: '提问与否定',
    goal: '用三种方式提问，掌握疑问词，学会 ne ... pas 否定句。',
    vocab: [
      ['qui', 'who'],
      ['quoi', 'what (stressed)', '句末用：Tu fais quoi ?'],
      ["qu'est-ce que", 'what (at start)', 'Qu\'est-ce que tu fais ?'],
      ['où', 'where', '注意重音：ou = or，où = where'],
      ['quand', 'when'],
      ['comment', 'how'],
      ['pourquoi', 'why', 'pour + quoi = for what'],
      ['parce que', 'because'],
      ['combien', 'how much / how many'],
      ['quel (quelle)', 'which / what', '跟名词：Quelle heure ?'],
      ['est-ce que', '(question marker)', '放句首把陈述句变疑问句'],
      ['ne ... pas', 'not'],
      ['ne ... jamais', 'never'],
      ['ne ... plus', 'no longer / not anymore'],
      ['rien', 'nothing'],
      ['toujours', 'always / still'],
    ],
    grammar: {
      title: '三种提问方式 · ne ... pas 否定',
      html: `<p>同一个问题「你说英语吗？」可以有三种说法，从随意到正式：</p>
<table><tr><th>方式</th><th>例子</th><th>使用场合</th></tr>
<tr><td>① 升调</td><td><em>Tu parles anglais ?</em></td><td>口语最常用</td></tr>
<tr><td>② est-ce que</td><td><em>Est-ce que tu parles anglais ?</em></td><td>中性，任何场合</td></tr>
<tr><td>③ 倒装</td><td><em>Parles-tu anglais ?</em></td><td>书面 / 正式（像英语 <i>Do you…</i> 那样倒装）</td></tr></table>
<p>疑问词放句首或句末：<em>Où tu habites ?</em> / <em>Tu habites où ?</em> / <em>Où est-ce que tu habites ?</em></p>
<div class="box"><b>否定：ne + 动词 + pas</b>，像三明治一样夹住动词。<br>
<em>Je <b>ne</b> parle <b>pas</b> allemand.</em> — I don't speak German.<br>
<em>Il <b>n'</b>aime <b>pas</b> le café.</em>（元音前 ne → n'）<br>
英语需要助动词 <i>do</i>，法语不需要！<br>
其他否定：<em>ne ... jamais</em>（never）、<em>ne ... plus</em>（not anymore）、<em>ne ... rien</em>（nothing）。</div>
<p><b>⚠️ 否定后 un/une/des → de：</b><em>J'ai un chat.</em> → <em>Je n'ai <b>pas de</b> chat.</em>（I don't have <b>a</b> cat → no cat）</p>
<p><b>口语提示：</b>法国人说话时经常省略 ne：<em>Je sais pas.</em> 听得懂即可，写作时要写完整。</p>`,
    },
    examples: [
      ['Où est-ce que tu habites ?', 'Where do you live?'],
      ["Pourquoi tu apprends le français ? Parce que j'aime la France.", "Why are you learning French? Because I love France."],
      ['Je ne parle pas allemand.', "I don't speak German."],
      ["Il n'a pas de voiture.", "He doesn't have a car."],
      ["Elle ne mange jamais de viande.", 'She never eats meat.'],
      ['Combien ça coûte ?', 'How much does it cost?'],
      ['Quelle heure est-il ?', 'What time is it?'],
      ["Qu'est-ce que vous aimez ?", 'What do you like?'],
    ],
    quiz: [
      { q: 'Je ___ parle pas espagnol.', o: ['ne', 'non', 'pas', "n'"], a: 0, e: 'ne + 动词 + pas' },
      { q: "Il ___ aime pas le thé.", o: ["n'", 'ne', 'non', 'pas'], a: 0, e: '元音前 ne → n\'' },
      { q: "Je n'ai pas ___ frère.", o: ['de', 'un', 'le', 'des'], a: 0, e: '否定后 un → de' },
      { q: '___ tu habites ? — À Pékin.', o: ['Où', 'Ou', 'Quand', 'Qui'], a: 0, e: 'où = where（带重音）' },
      { q: '___ est-ce que tu fais ce soir ?', o: ["Qu'", 'Quoi', 'Quel', 'Qui'], a: 0, e: "what 放句首 → Qu'est-ce que" },
      { q: '___ heure est-il ?', o: ['Quelle', 'Quel', 'Quels', 'Quoi'], a: 0, e: 'heure 是阴性 → quelle' },
    ],
  },
  {
    id: 'a1-6', level: 'A1', icon: '🥐', title: 'Au café', zh: '点餐与部分冠词',
    goal: '在咖啡馆和餐厅点餐，用部分冠词 du / de la 表达「一些」。',
    vocab: [
      ['un café', 'a coffee', '在法国默认是浓缩咖啡'],
      ['un thé', 'a tea'],
      ["l'eau (f.)", 'water', '发音 [o]，和 « oh » 一样'],
      ['le pain', 'bread', '⚠️ 不是 pain（疼痛）'],
      ['le fromage', 'cheese'],
      ['le vin', 'wine', '≈ vine'],
      ['la bière', 'beer'],
      ['un croissant', 'a croissant'],
      ['le lait', 'milk', '≈ latte（意大利语）'],
      ['le sucre', 'sugar'],
      ['la viande', 'meat'],
      ['le poisson', 'fish', '⚠️ 不是 poison（毒药 = le poison）'],
      ['les légumes (m.)', 'vegetables'],
      ["l'addition (f.)", 'the bill / check', '≈ addition（加法）'],
      ['je voudrais', 'I would like', '礼貌点餐必备'],
      ['la carte', 'the menu', '⚠️ le menu = 套餐'],
    ],
    grammar: {
      title: '部分冠词 du / de la / des · 礼貌点餐',
      html: `<p>英语说 <i>I drink water</i> 或 <i>some water</i>，法语<b>必须</b>加一个冠词，表示「一部分、一些」：</p>
<table><tr><th>阳性</th><th>阴性</th><th>元音前</th><th>复数</th></tr>
<tr><td><em>du pain</em></td><td><em>de la viande</em></td><td><em>de l'eau</em></td><td><em>des légumes</em></td></tr></table>
<div class="box"><b>三种冠词怎么选？</b><br>
• <em>J'aime <b>le</b> fromage.</em> — 喜欢「奶酪」这类东西（泛指）<br>
• <em>Je mange <b>du</b> fromage.</em> — 吃一些奶酪（不定量）<br>
• <em>Je voudrais <b>un</b> fromage.</em> — 一整块/一份奶酪（可数）</div>
<p><b>否定和数量词后一律变 de：</b><em>Je ne bois pas <b>de</b> vin.</em> · <em>beaucoup <b>de</b> sucre</em>（a lot of sugar）· <em>un peu <b>de</b> lait</em> · <em>un verre <b>d'</b>eau</em>。</p>
<p><b>礼貌点餐：</b>用 <em>je voudrais</em>（I would like）而不是 <em>je veux</em>（I want，显得粗鲁）。<br>
<em>Je voudrais un café, s'il vous plaît.</em> · <em>L'addition, s'il vous plaît !</em></p>`,
    },
    examples: [
      ["Je voudrais un café et un croissant, s'il vous plaît.", "I'd like a coffee and a croissant, please."],
      ["Tu veux de l'eau ?", 'Do you want some water?'],
      ['Je mange du pain avec du fromage.', 'I eat bread with cheese.'],
      ['Elle ne boit pas de vin.', "She doesn't drink wine."],
      ['Vous prenez du sucre ?', 'Do you take sugar?'],
      ["L'addition, s'il vous plaît !", 'The bill, please!'],
      ['Il y a beaucoup de légumes dans la soupe.', 'There are a lot of vegetables in the soup.'],
    ],
    quiz: [
      { q: 'Je bois ___ lait.', o: ['du', 'de la', 'des', 'le'], a: 0, e: 'lait 阳性，不定量 → du' },
      { q: 'Tu veux ___ eau ?', o: ["de l'", 'du', 'de la', 'des'], a: 0, e: '元音前 → de l\'' },
      { q: 'Je ne mange pas ___ viande.', o: ['de', 'de la', 'la', 'du'], a: 0, e: '否定后 → de' },
      { q: "J'adore ___ chocolat.", o: ['le', 'du', 'de', 'un'], a: 0, e: 'adorer 表示喜好，泛指 → 定冠词' },
      { q: 'Il y a beaucoup ___ touristes.', o: ['de', 'des', 'du', 'les'], a: 0, e: 'beaucoup de + 名词' },
      { q: "Au café, c'est plus poli de dire :", o: ['Je voudrais un thé.', 'Je veux un thé.', 'Donne-moi un thé.', 'Un thé !'], a: 0, e: 'je voudrais = I would like，礼貌' },
    ],
  },
  {
    id: 'a1-7', level: 'A1', icon: '🏙️', title: 'En ville', zh: '城市、问路与 aller',
    goal: '说出城市里的地点，问路指路，掌握 aller 和 à + le = au 的缩合。',
    vocab: [
      ['la gare', 'train station'],
      ['la banque', 'bank'],
      ['le musée', 'museum'],
      ['la pharmacie', 'pharmacy'],
      ['le supermarché', 'supermarket', 'marché = market'],
      ["l'hôpital (m.)", 'hospital', '^ = 消失的 s：hospital'],
      ['la rue', 'street', '路牌上常见：Rue de Rivoli'],
      ['la place', 'square (in a town)', '⚠️ 不是泛指的 place'],
      ['le restaurant', 'restaurant'],
      ['à gauche', 'to the left', '≈ gauche（笨拙的，原意「左边的」）'],
      ['à droite', 'to the right', '≈ adroit（灵巧的，原意「右手的」）'],
      ['tout droit', 'straight ahead', '别和 à droite 混淆！'],
      ['près de', 'near'],
      ['loin de', 'far from'],
      ['aller', 'to go'],
      ['il y a', 'there is / there are'],
    ],
    grammar: {
      title: '动词 aller · à 与 de 的缩合',
      html: `<table><tr><td><em>je vais</em></td><td><em>nous allons</em></td></tr>
<tr><td><em>tu vas</em></td><td><em>vous allez</em></td></tr>
<tr><td><em>il / elle va</em></td><td><em>ils / elles vont</em></td></tr></table>
<div class="box"><b>à（to / at）+ 定冠词会合并：</b><br>
<em>à + le = <b>au</b></em> → <em>Je vais au musée.</em><br>
<em>à + la = à la</em> → <em>Je vais à la gare.</em>（不变）<br>
<em>à + l' = à l'</em> → <em>Je vais à l'hôpital.</em><br>
<em>à + les = <b>aux</b></em> → <em>Je vais aux toilettes.</em></div>
<p><b>de（of / from）同理：</b><em>de + le = <b>du</b></em>，<em>de + les = <b>des</b></em>：<em>près <b>du</b> musée</em>（near the museum）、<em>loin <b>de la</b> gare</em>。</p>
<p><b>城市和国家：</b>城市用 <em>à</em>：<em>à Paris</em>；阴性国家（多以 -e 结尾）用 <em>en</em>：<em>en France, en Chine</em>；阳性国家用 <em>au</em>：<em>au Canada, au Japon</em>；复数用 <em>aux</em>：<em>aux États-Unis</em>。</p>
<p><b>问路：</b><em>Excusez-moi, où est la gare ?</em> · <em>Il y a une pharmacie près d'ici ?</em> · <em>Allez tout droit, puis tournez à gauche.</em></p>`,
    },
    examples: [
      ['Excusez-moi, où est la gare ?', 'Excuse me, where is the train station?'],
      ["Il y a une pharmacie près d'ici ?", 'Is there a pharmacy near here?'],
      ['Allez tout droit, puis tournez à droite.', 'Go straight ahead, then turn right.'],
      ['Je vais au musée avec mes amis.', "I'm going to the museum with my friends."],
      ["Nous allons à la banque.", "We're going to the bank."],
      ['Le restaurant est à côté du cinéma.', 'The restaurant is next to the cinema.'],
      ['Ils vont en France cet été.', 'They are going to France this summer.'],
      ["L'hôtel est loin de la gare ?", 'Is the hotel far from the station?'],
    ],
    quiz: [
      { q: 'Je vais ___ musée.', o: ['au', 'à le', 'à la', 'aux'], a: 0, e: 'à + le = au' },
      { q: 'Nous ___ à la plage.', o: ['allons', 'allez', 'vont', 'vais'], a: 0, e: 'nous → allons' },
      { q: 'La banque est près ___ supermarché.', o: ['du', 'de le', 'de la', 'des'], a: 0, e: 'de + le = du' },
      { q: "J'habite ___ Chine.", o: ['en', 'au', 'à', 'aux'], a: 0, e: 'Chine 是阴性国家 → en' },
      { q: 'Ils ___ au cinéma ce soir.', o: ['vont', 'vas', 'allons', 'va'], a: 0, e: 'ils → vont' },
      { q: '« tout droit » = ?', o: ['straight ahead', 'to the right', 'all right', 'right now'], a: 0, e: '⚠️ 不是 to the right（à droite）' },
    ],
  },
  {
    id: 'a1-8', level: 'A1', icon: '📅', title: 'Le temps et les projets', zh: '日期、天气与最近将来时',
    goal: '说星期、天气和时间，用 aller + 动词原形谈论马上要做的事。',
    vocab: [
      ['lundi', 'Monday', 'Lune 月亮日'],
      ['mardi', 'Tuesday', 'Mars 火星日'],
      ['mercredi', 'Wednesday', 'Mercure 水星日'],
      ['jeudi', 'Thursday', 'Jupiter 木星日'],
      ['vendredi', 'Friday', 'Vénus 金星日'],
      ['samedi', 'Saturday'],
      ['dimanche', 'Sunday'],
      ["aujourd'hui", 'today'],
      ['demain', 'tomorrow'],
      ['hier', 'yesterday'],
      ['la semaine', 'week'],
      ['le week-end', 'weekend'],
      ['il fait beau', "it's nice weather"],
      ['il pleut', "it's raining", '≈ pluvial'],
      ['il fait froid', "it's cold"],
      ["l'heure (f.)", 'hour / time', '≈ hour：h 不发音'],
    ],
    grammar: {
      title: '最近将来时 (futur proche) · 天气与时间',
      html: `<p>和英语的 <i>be going to + verb</i> 一模一样！<b>aller（变位）+ 动词原形</b>：</p>
<div class="box"><em>Je <b>vais manger</b>.</em> — I'm going to eat.<br>
<em>Nous <b>allons voyager</b> demain.</em> — We're going to travel tomorrow.<br>
否定夹住 aller：<em>Je <b>ne vais pas</b> travailler.</em></div>
<p><b>天气用 il fait</b>（字面 <i>it makes</i>）：<em>il fait beau / chaud / froid / mauvais</em>。下雨下雪是专门的动词：<em>il pleut</em>、<em>il neige</em>。</p>
<p><b>时间：</b><em>Il est trois heures.</em>（It's 3 o'clock）· <em>Il est huit heures et demie.</em>（8:30）· <em>à midi</em>（at noon）。法国日常常用 24 小时制：<em>dix-huit heures</em> = 6 pm。</p>
<p><b>星期不大写，也不用介词：</b><em>Je travaille lundi.</em>（I work on Monday）；<em>le lundi</em> = every Monday。</p>`,
    },
    examples: [
      ["Qu'est-ce que tu vas faire ce week-end ?", 'What are you going to do this weekend?'],
      ['Je vais visiter le Louvre samedi.', "I'm going to visit the Louvre on Saturday."],
      ["Aujourd'hui, il fait beau.", "Today the weather is nice."],
      ['Demain, il va pleuvoir.', "Tomorrow it's going to rain."],
      ['Il est quelle heure ? Il est six heures.', "What time is it? It's six o'clock."],
      ['Le lundi, je fais du sport.', 'On Mondays, I do sport.'],
      ["Nous n'allons pas sortir ce soir.", "We're not going to go out tonight."],
    ],
    quiz: [
      { q: 'Demain, je ___ travailler.', o: ['vais', 'suis', 'vas', 'va'], a: 0, e: '最近将来时：aller + 原形' },
      { q: 'Ils vont ___ un film.', o: ['regarder', 'regardent', 'regardé', 'regardez'], a: 0, e: 'aller 后接动词原形' },
      { q: "Aujourd'hui, il ___ beau.", o: ['fait', 'est', 'a', 'va'], a: 0, e: '天气：il fait beau' },
      { q: 'Je ne ___ pas sortir.', o: ['vais', 'va', 'allons', 'aller'], a: 0, e: '否定夹住 aller' },
      { q: '« Le samedi, je dors. » = ?', o: ['On Saturdays I sleep.', 'This Saturday I sleep.', 'Last Saturday I slept.', 'Saturday is sleep.'], a: 0, e: 'le + 星期 = 每逢那天' },
      { q: 'Il est huit heures et ___.', o: ['demie', 'moitié', 'half', 'quart'], a: 0, e: '8:30 = huit heures et demie' },
    ],
  },
);
