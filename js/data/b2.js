/* B2 中高级：8 个单元 */
EF.units.push(
  {
    id: 'b2-1', level: 'B2', icon: '🏛️', title: 'Société et politique', zh: '社会时事与被动语态',
    goal: '读懂新闻标题和报道，掌握被动语态及其替代形式（on、se faire、代词式被动）。',
    vocab: [
      ['le gouvernement', 'government'],
      ['la loi', 'law', '≈ legal'],
      ['adopter', 'to pass (a law) / to adopt'],
      ['une élection', 'election'],
      ['voter', 'to vote'],
      ['le citoyen (la citoyenne)', 'citizen'],
      ['la manifestation', 'demonstration / protest', '⚠️ 口语 la manif；不是 manifestation（显现）'],
      ['la grève', 'strike', 'faire grève = to go on strike'],
      ['le débat', 'debate'],
      ['la réforme', 'reform'],
      ['les droits (m.)', 'rights', 'les droits de l\'homme = human rights'],
      ['le pouvoir', 'power'],
      ['le député', 'member of parliament', '≈ deputy'],
      ['la mesure', 'measure (policy)'],
      ['les inégalités (f.)', 'inequalities'],
      ['mettre en place', 'to set up / implement'],
    ],
    grammar: {
      title: '被动语态 (voix passive) 及其替代',
      html: `<p><b>构成</b>：<b>être（变时态）+ 过去分词（配合主语）+ par</b> —— 和英语 <i>be + done + by</i> 一样。</p>
<table><tr><th>时态</th><th>主动</th><th>被动</th></tr>
<tr><td>présent</td><td><em>Le Parlement adopte la loi.</em></td><td><em>La loi <b>est adoptée</b> par le Parlement.</em></td></tr>
<tr><td>passé composé</td><td><em>On a élu le maire.</em></td><td><em>Le maire <b>a été élu</b>.</em></td></tr>
<tr><td>futur</td><td><em>On construira un pont.</em></td><td><em>Un pont <b>sera construit</b>.</em></td></tr></table>
<p>表示状态、情感的动词常用 <b>de</b> 代替 par：<em>Il est aimé / respecté <b>de</b> tous.</em></p>
<div class="box"><b>法语比英语少用被动！</b>常见的三种替代：<br>
① <b>on</b>：<em><b>On</b> parle français au Québec.</em>（French is spoken in Quebec）<br>
② <b>代词式</b>（se + 动词）表示普遍情况：<em>Ce vin <b>se boit</b> frais.</em>（This wine is drunk chilled）· <em>Ça <b>ne se fait pas</b>.</em>（That isn't done）<br>
③ <b>se faire + 不定式</b>，强调主语遭遇：<em>Il <b>s'est fait</b> voler son portefeuille.</em>（He had his wallet stolen）</div>
<p>⚠️ 间接宾语<b>不能</b>做被动主语：英语 <i>I was given a book</i> → 法语只能说 <em><b>On m'a donné</b> un livre.</em></p>
<p><b>新闻标题</b>常省略 être：<em>Réforme des retraites : un accord trouvé</em>。</p>`,
    },
    examples: [
      ["La loi a été adoptée par l'Assemblée nationale.", 'The law was passed by the National Assembly.'],
      ['Le nouveau président sera élu en mai.', 'The new president will be elected in May.'],
      ['Une grande manifestation est organisée samedi contre la réforme.', 'A big demonstration is being organised on Saturday against the reform.'],
      ["Les citoyens se sont fait entendre lors du débat.", 'The citizens made themselves heard during the debate.'],
      ["Ici, on ne parle que français.", 'Only French is spoken here.'],
      ["Ce genre de chose ne se dit pas en public.", "That sort of thing isn't said in public."],
      ["De nouvelles mesures ont été mises en place pour réduire les inégalités.", 'New measures have been implemented to reduce inequalities.'],
      ["On m'a proposé un poste au ministère.", 'I was offered a job at the ministry.'],
    ],
    quiz: [
      { q: 'La décision ___ prise hier par le gouvernement.', o: ['a été', 'est été', 'était été', 'a eu'], a: 0, e: '被动的复合过去时：a été + 分词' },
      { q: 'Les lois ___ votées par les députés.', o: ['sont', 'ont', 'est', 'font'], a: 0, e: 'être + 过去分词' },
      { q: 'La ministre a été ___.', o: ['critiquée', 'critiqué', 'critiqués', 'critiquer'], a: 0, e: '分词与主语（阴性单数）配合' },
      { q: '« I was given a gift » → ___ un cadeau.', o: ["On m'a offert", "J'ai été offert", 'Je suis offert', "On a été offert"], a: 0, e: '间接宾语不能做被动主语 → 用 on' },
      { q: 'Il ___ voler son vélo.', o: ["s'est fait", 'a été', "s'est", 'a fait'], a: 0, e: 'se faire + 不定式：遭遇某事' },
      { q: 'Ce plat ___ mange froid.', o: ['se', 'est', 'on', 'le'], a: 0, e: '代词式被动：se mange' },
    ],
  },
  {
    id: 'b2-2', level: 'B2', icon: '⚖️', title: 'Argumenter', zh: '议论与让步、对立连接词',
    goal: '有逻辑地论证、反驳和让步，这是 DELF B2 写作和口语的核心能力。',
    vocab: [
      ["d'une part… d'autre part", 'on the one hand… on the other hand'],
      ['en effet', 'indeed / in fact', '⚠️ 用来补充说明，不是 in effect'],
      ['de plus', 'moreover / furthermore'],
      ['en outre', 'in addition (formal)'],
      ['cependant', 'however'],
      ['pourtant', 'yet / and yet'],
      ['néanmoins', 'nevertheless'],
      ['toutefois', 'however (formal)'],
      ['en revanche', 'on the other hand / by contrast'],
      ['alors que', 'whereas / while'],
      ['bien que', 'although', '+ 虚拟式！'],
      ['malgré', 'despite', '+ 名词'],
      ['même si', 'even if / even though', '+ 直陈式'],
      ['certes', 'admittedly / of course'],
      ['il est vrai que', 'it is true that'],
      ['en conclusion', 'in conclusion'],
    ],
    grammar: {
      title: '让步与对立：bien que + 虚拟式 vs même si + 直陈式',
      html: `<p>B2 的论证需要「承认对方观点，再提出反驳」。最关键的是区分后面跟什么：</p>
<table><tr><th>连接词</th><th>后接</th><th>例子</th></tr>
<tr><td><em>bien que / quoique</em></td><td><b>虚拟式</b></td><td><em>Bien qu'il <b>soit</b> riche, il n'est pas heureux.</em></td></tr>
<tr><td><em>même si</em></td><td><b>直陈式</b></td><td><em>Même s'il <b>est</b> riche, il n'est pas heureux.</em></td></tr>
<tr><td><em>malgré</em></td><td><b>名词</b></td><td><em>Malgré sa richesse, il n'est pas heureux.</em></td></tr>
<tr><td><em>alors que / tandis que</em></td><td>直陈式（对比）</td><td><em>Il travaille, alors que son frère dort.</em></td></tr>
<tr><td><em>pourtant / cependant</em></td><td>独立副词</td><td><em>Il est riche. Pourtant, il n'est pas heureux.</em></td></tr></table>
<div class="box"><b>经典让步结构（DELF 高分句式）：</b><br>
<em><b>Certes</b>, les réseaux sociaux permettent de rester en contact. <b>Néanmoins</b>, ils peuvent aussi isoler.</em><br>
<em><b>Il est vrai que</b> … ; <b>il n'en reste pas moins que</b> …</em>（it's true that…; the fact remains that…）</div>
<p><b>论证结构：</b>引入 <em>Tout d'abord</em> → 补充 <em>De plus / En outre</em> → 举例 <em>Par exemple / Prenons l'exemple de</em> → 对立 <em>En revanche</em> → 结论 <em>En conclusion / Pour conclure</em>。</p>
<p>⚠️ <em>en effet</em> 用于<b>证实、解释</b>前一句（≈ <i>indeed</i>），不是 <i>in effect</i>。</p>`,
    },
    examples: [
      ["Bien que ce soit difficile, je continue à apprendre le français.", "Although it's difficult, I keep learning French."],
      ["Même s'il pleut, nous irons nous promener.", "Even if it rains, we'll go for a walk."],
      ["Malgré la crise, l'entreprise a embauché.", 'Despite the crisis, the company hired.'],
      ["Certes, le télétravail est pratique. Néanmoins, il peut isoler les salariés.", 'Admittedly, remote work is convenient. Nevertheless, it can isolate employees.'],
      ["D'une part, la ville est chère ; d'autre part, elle offre beaucoup d'opportunités.", 'On the one hand, the city is expensive; on the other hand, it offers many opportunities.'],
      ["Il dit qu'il est pauvre, alors qu'il a trois maisons.", 'He says he is poor, whereas he has three houses.'],
      ["Les jeunes lisent moins de journaux. En revanche, ils s'informent sur Internet.", 'Young people read fewer newspapers. On the other hand, they get information online.'],
      ["Ce projet est ambitieux. En effet, il concerne tout le pays.", 'This project is ambitious. Indeed, it concerns the whole country.'],
    ],
    quiz: [
      { q: "Bien qu'il ___ tard, je continue à travailler.", o: ['soit', 'est', 'sera', 'était'], a: 0, e: 'bien que + 虚拟式' },
      { q: "Même s'il ___ fatigué, il viendra.", o: ['est', 'soit', 'serait', 'sera'], a: 0, e: 'même si + 直陈式' },
      { q: "___ la pluie, le match a eu lieu.", o: ['Malgré', 'Bien que', 'Même si', 'Pourtant'], a: 0, e: '后接名词 → malgré' },
      { q: "Il est intelligent. ___, il a raté son examen.", o: ['Pourtant', 'Bien que', 'Malgré', 'Parce que'], a: 0, e: '独立副词表转折 → pourtant' },
      { q: "Paris est bruyant, ___ la campagne est calme.", o: ['alors que', 'bien que', 'malgré', 'donc'], a: 0, e: '对比两个事实 → alors que' },
      { q: "Ce film a eu un grand succès. ___, plus d'un million de personnes l'ont vu.", o: ['En effet', 'En revanche', 'Pourtant', 'Malgré'], a: 0, e: '补充证实 → en effet' },
    ],
  },
  {
    id: 'b2-3', level: 'B2', icon: '😔', title: 'Regrets et hypothèses', zh: '遗憾与过去条件式',
    goal: '表达对过去的遗憾、批评和假设，掌握过去条件式与「si + 愈过去时」。',
    vocab: [
      ['regretter', 'to regret'],
      ['le regret', 'regret'],
      ['une erreur', 'mistake / error'],
      ['si seulement', 'if only'],
      ["j'aurais dû", 'I should have'],
      ["j'aurais pu", 'I could have'],
      ["j'aurais aimé", 'I would have liked'],
      ['rater', 'to miss / to fail', 'rater le train / un examen'],
      ["saisir l'occasion", 'to seize the opportunity'],
      ['la chance', 'luck / chance', 'avoir de la chance = to be lucky'],
      ['le choix', 'choice', '≈ choice'],
      ['hésiter', 'to hesitate'],
      ['se tromper', 'to be mistaken / make a mistake'],
      ['à ta place', 'in your place / if I were you'],
      ['le destin', 'fate / destiny'],
      ['éviter', 'to avoid'],
    ],
    grammar: {
      title: '过去条件式 (conditionnel passé) · si 条件句 ③',
      html: `<p><b>构成</b>：<b>avoir / être 的条件式 + 过去分词</b> ≈ 英语 <i>would have done</i>。</p>
<div class="box"><em>J'<b>aurais aimé</b> venir.</em> — I would have liked to come.<br>
<em>Elle <b>serait partie</b> plus tôt.</em> — She would have left earlier.</div>
<p><b>三个超高频结构（表遗憾和批评）：</b></p>
<table><tr><td><em>J'aurais dû</em> + 不定式</td><td>I should have…</td><td><em>J'aurais dû étudier plus.</em></td></tr>
<tr><td><em>J'aurais pu</em> + 不定式</td><td>I could have…</td><td><em>Tu aurais pu me prévenir !</em></td></tr>
<tr><td><em>J'aurais aimé / voulu</em></td><td>I would have liked…</td><td><em>J'aurais aimé te voir.</em></td></tr></table>
<p><b>si 条件句 ③（与过去事实相反）：si + 愈过去时，过去条件式</b> —— 和英语 <i>If I had known, I would have come</i> 完全平行：</p>
<p><em><b>Si</b> j'<b>avais su</b>, je <b>serais venu</b>.</em> — If I had known, I would have come.</p>
<p><b>混合条件句：</b><em>Si j'avais pris ce poste (过去), je serais riche aujourd'hui (现在).</em></p>
<div class="box"><b>三种 si 句总复习：</b><br>
① <em>Si + présent → futur</em>：真实可能<br>② <em>Si + imparfait → conditionnel présent</em>：现在的假设<br>③ <em>Si + plus-que-parfait → conditionnel passé</em>：过去的假设<br>
<b>si 从句里永远不用条件式和将来时！</b></div>
<p><b>新闻里的条件式</b>表示「据报道（未证实）」：<em>L'accident <b>aurait fait</b> trois victimes.</em> — The accident reportedly left three victims.</p>`,
    },
    examples: [
      ["Si j'avais su, je ne serais pas venu.", "If I had known, I wouldn't have come."],
      ["J'aurais dû accepter ce poste.", 'I should have accepted that job.'],
      ['Tu aurais pu me prévenir !', 'You could have warned me!'],
      ["Si nous étions partis plus tôt, nous n'aurions pas raté le train.", "If we had left earlier, we wouldn't have missed the train."],
      ["Si seulement j'avais saisi l'occasion !", 'If only I had seized the opportunity!'],
      ["J'aurais aimé apprendre le français plus jeune.", 'I would have liked to learn French when I was younger.'],
      ["À ta place, je ne me serais pas trompé de route.", "In your place, I wouldn't have taken the wrong road."],
      ["Selon la presse, le ministre aurait démissionné.", 'According to the press, the minister has reportedly resigned.'],
    ],
    quiz: [
      { q: "Si j'avais su, je ___ venu.", o: ['serais', 'aurais', 'suis', 'serai'], a: 0, e: 'venir 用 être → serais venu' },
      { q: "Si tu ___ travaillé, tu aurais réussi.", o: ['avais', 'aurais', 'as', 'avait'], a: 0, e: 'si + 愈过去时' },
      { q: "J'___ dû te le dire.", o: ['aurais', 'avais', 'serais', 'aurai'], a: 0, e: 'I should have = j\'aurais dû' },
      { q: "Si elle avait pris le train, elle ___ à l'heure.", o: ['serait arrivée', 'aurait arrivé', 'était arrivée', 'arriverait été'], a: 0, e: 'arriver 用 être + 配合' },
      { q: "Si j'avais accepté ce poste, je ___ riche aujourd'hui.", o: ['serais', 'aurais été', 'suis', 'étais'], a: 0, e: '混合条件句：过去的条件，现在的结果' },
      { q: "D'après les médias, l'incendie ___ par un court-circuit.", o: ['aurait été causé', 'a été causé sûrement', 'était causé', 'sera causé'], a: 0, e: '新闻中的条件式 = 未证实的消息' },
    ],
  },
  {
    id: 'b2-4', level: 'B2', icon: '🤖', title: 'Technologie et numérique', zh: '科技与复合关系代词',
    goal: '讨论科技与 AI 的影响，掌握 lequel / auquel / duquel 等复合关系代词。',
    vocab: [
      ['la technologie', 'technology'],
      ["l'intelligence artificielle (f.)", 'artificial intelligence', '缩写 l\'IA'],
      ["l'outil (m.)", 'tool'],
      ["l'écran (m.)", 'screen'],
      ['le logiciel', 'software', '⚠️ 不是 logical'],
      ['numérique', 'digital', '≈ numeric'],
      ['la vie privée', 'privacy / private life'],
      ['les données (f.)', 'data', '字面：被给予的东西'],
      ['dépendre de', 'to depend on'],
      ["l'innovation (f.)", 'innovation'],
      ['télécharger', 'to download'],
      ['le smartphone', 'smartphone'],
      ['les objets connectés (m.)', 'smart devices / IoT'],
      ['le réseau', 'network'],
      ['remplacer', 'to replace'],
      ['un algorithme', 'algorithm'],
    ],
    grammar: {
      title: '复合关系代词 lequel / auquel / duquel',
      html: `<p>当关系代词前面有<b>介词</b>（avec, pour, sur, dans, à, grâce à…），而先行词是<b>物</b>时，用 <b>lequel</b> 系列（≈ <i>which</i>），与先行词阴阳性单复数一致：</p>
<table><tr><th></th><th>阳单</th><th>阴单</th><th>阳复</th><th>阴复</th></tr>
<tr><td>基本形</td><td><em>lequel</em></td><td><em>laquelle</em></td><td><em>lesquels</em></td><td><em>lesquelles</em></td></tr>
<tr><td>à + </td><td><em><b>auquel</b></em></td><td><em>à laquelle</em></td><td><em><b>auxquels</b></em></td><td><em><b>auxquelles</b></em></td></tr>
<tr><td>de +（介词短语中）</td><td><em><b>duquel</b></em></td><td><em>de laquelle</em></td><td><em><b>desquels</b></em></td><td><em><b>desquelles</b></em></td></tr></table>
<div class="box"><em>L'outil <b>avec lequel</b> je travaille</em> — the tool <b>with which</b> I work（口语英语：the tool I work with）<br>
<em>La raison <b>pour laquelle</b> je suis venu</em> — the reason <b>why</b> I came<br>
<em>Le projet <b>auquel</b> je pense</em> — the project I'm thinking about（penser <b>à</b>）<br>
<em>Le parc <b>près duquel</b> j'habite</em> — the park near which I live（près <b>de</b>）</div>
<p>⚠️ <b>英语可以把介词放句末</b>（<i>the person I talk to</i>），<b>法语绝对不行</b>，介词必须在关系代词前。</p>
<p><b>先行词是人时</b>通常用 <em>介词 + qui</em>：<em>la personne <b>avec qui</b> je travaille</em>、<em>l'ami <b>à qui</b> j'ai parlé</em>。<br>
单独的 <em>de</em> 优先用 <b>dont</b>（B1 学过）：<em>le logiciel <b>dont</b> j'ai besoin</em>。</p>`,
    },
    examples: [
      ["C'est l'application avec laquelle j'apprends le français.", "It's the app I learn French with."],
      ["La raison pour laquelle je n'utilise pas ce réseau social, c'est la vie privée.", "The reason I don't use this social network is privacy."],
      ["Le problème auquel nous sommes confrontés est complexe.", 'The problem we are facing is complex.'],
      ["L'intelligence artificielle va-t-elle remplacer certains métiers ?", 'Will artificial intelligence replace certain jobs?'],
      ["Nos données personnelles sont collectées sans que nous le sachions.", 'Our personal data is collected without us knowing.'],
      ["Le bâtiment en face duquel je travaille est très moderne.", 'The building opposite which I work is very modern.'],
      ["La collègue avec qui je partage mon bureau est ingénieure.", 'The colleague I share my office with is an engineer.'],
      ["Les jeunes passent en moyenne cinq heures par jour devant un écran.", 'Young people spend an average of five hours a day in front of a screen.'],
    ],
    quiz: [
      { q: "L'ordinateur avec ___ je travaille est vieux.", o: ['lequel', 'laquelle', 'qui', 'que'], a: 0, e: 'ordinateur 阳性单数 + 介词 → lequel' },
      { q: "La raison pour ___ il est parti reste un mystère.", o: ['laquelle', 'lequel', 'quoi', 'que'], a: 0, e: 'raison 阴性 → laquelle' },
      { q: "Le projet ___ je pense est ambitieux.", o: ['auquel', 'duquel', 'dont', 'lequel'], a: 0, e: 'penser à → à + lequel = auquel' },
      { q: "Les problèmes ___ nous réfléchissons sont graves.", o: ['auxquels', 'auxquelles', 'desquels', 'lesquels'], a: 0, e: 'réfléchir à + problèmes（阳复）→ auxquels' },
      { q: "Le jardin au milieu ___ se trouve la fontaine est magnifique.", o: ['duquel', 'dont', 'auquel', 'lequel'], a: 0, e: 'au milieu de（介词短语）→ duquel' },
      { q: "L'amie à ___ j'ai prêté mon livre ne me l'a pas rendu.", o: ['qui', 'laquelle seulement', 'que', 'dont'], a: 0, e: '先行词是人 → à qui（à laquelle 也可以，但 qui 更常用）' },
    ],
  },
  {
    id: 'b2-5', level: 'B2', icon: '🎓', title: "L'éducation", zh: '教育与虚拟式进阶',
    goal: '讨论教育制度，掌握连词后的虚拟式（avant que, à moins que, sans que…）和虚拟式过去时。',
    vocab: [
      ["l'éducation (f.)", 'education'],
      ["l'enseignement (m.)", 'teaching / education system'],
      ["l'élève (m./f.)", 'pupil / student (school)'],
      ['la réussite', 'success'],
      ["l'échec (m.)", 'failure', "l'échec scolaire = academic failure；≈ checkmate"],
      ['le diplôme', 'degree / diploma'],
      ['la formation', 'training / education'],
      ['apprendre par cœur', 'to learn by heart'],
      ['la bourse', 'scholarship / stock exchange', '≈ bursary'],
      ['se former', 'to train oneself'],
      ["l'égalité des chances (f.)", 'equal opportunities'],
      ['exigeant(e)', 'demanding', '≈ exigent'],
      ['le lycée', 'high school', '⚠️ le collège = 初中'],
      ['les devoirs (m.)', 'homework'],
      ['le baccalauréat', 'French high school diploma', '口语 le bac'],
      ['redoubler', 'to repeat a year'],
    ],
    grammar: {
      title: '连词 + 虚拟式 · 虚拟式过去时',
      html: `<p>以下连词后面<b>必须</b>用虚拟式：</p>
<table><tr><th>连词</th><th>意思</th><th>例子</th></tr>
<tr><td><em>pour que / afin que</em></td><td>so that</td><td><em>Le prof répète pour que tout le monde <b>comprenne</b>.</em></td></tr>
<tr><td><em>avant que (ne)</em></td><td>before</td><td><em>Rentre avant qu'il <b>fasse</b> nuit.</em></td></tr>
<tr><td><em>jusqu'à ce que</em></td><td>until</td><td><em>J'attendrai jusqu'à ce que tu <b>reviennes</b>.</em></td></tr>
<tr><td><em>à moins que (ne)</em></td><td>unless</td><td><em>Je viendrai, à moins qu'il <b>pleuve</b>.</em></td></tr>
<tr><td><em>sans que</em></td><td>without</td><td><em>Il est parti sans que je le <b>sache</b>.</em></td></tr>
<tr><td><em>bien que</em></td><td>although</td><td><em>Bien qu'il <b>soit</b> doué…</em></td></tr>
<tr><td><em>à condition que</em></td><td>provided that</td><td><em>… à condition que tu <b>travailles</b>.</em></td></tr></table>
<div class="box"><b>⚠️ après que + 直陈式</b>（逻辑：事情已经发生，是确定的）：<em>après qu'il <b>est</b> parti</em>（虽然很多法国人也说错）。<br>
<b>主语相同时用介词 + 不定式：</b><em>avant de partir</em>、<em>pour réussir</em>、<em>sans dire un mot</em>（不说 avant que je parte）。</div>
<p><b>虚拟式过去时</b> = <em>avoir/être 的虚拟式 + 过去分词</em>，表示已完成的动作：<br>
<em>Je suis content que tu <b>aies réussi</b> ton bac.</em> — I'm glad you passed your bac.<br>
<em>Il est dommage qu'elle <b>soit partie</b>.</em></p>
<p><b>书面虚词 ne：</b>在 <em>avant que, à moins que</em> 后有时出现 <em>ne</em>，但<b>没有否定意义</b>：<em>avant qu'il <b>ne</b> soit trop tard</em> — before it's too late。</p>`,
    },
    examples: [
      ["Le professeur explique lentement pour que les élèves comprennent.", 'The teacher explains slowly so that the pupils understand.'],
      ["Il faut agir avant qu'il ne soit trop tard.", 'We must act before it is too late.'],
      ["Je réviserai jusqu'à ce que je connaisse tout par cœur.", "I'll revise until I know everything by heart."],
      ["Elle obtiendra une bourse, à moins que ses notes ne baissent.", 'She will get a scholarship, unless her grades drop.'],
      ["Je suis fier que mon fils ait obtenu son diplôme.", "I'm proud that my son got his degree."],
      ["L'école devrait garantir l'égalité des chances.", 'School should guarantee equal opportunities.'],
      ["Il est sorti sans que personne ne le remarque.", 'He left without anyone noticing.'],
      ["Avant de choisir une formation, renseigne-toi bien.", 'Before choosing a course, get properly informed.'],
    ],
    quiz: [
      { q: "Je t'explique pour que tu ___.", o: ['comprennes', 'comprends', 'comprendras', 'as compris'], a: 0, e: 'pour que + 虚拟式' },
      { q: "Rentrons avant qu'il ___ à pleuvoir.", o: ['commence', 'commencera', 'commençait', 'a commencé'], a: 0, e: 'avant que + 虚拟式' },
      { q: "Je viendrai, à moins que je ___ malade.", o: ['sois', 'suis', 'serai', 'serais'], a: 0, e: 'à moins que + 虚拟式' },
      { q: "Après qu'il ___ parti, nous avons dîné.", o: ['est', 'soit', 'sera', 'serait'], a: 0, e: 'après que + 直陈式（规范用法）' },
      { q: "Je suis heureuse que tu ___ ton examen.", o: ['aies réussi', 'as réussi', 'réussiras', 'avais réussi'], a: 0, e: '已完成 + 情感 → 虚拟式过去时' },
      { q: "Lis bien la consigne avant ___.", o: ['de répondre', 'que tu répondes', 'répondre', 'que répondre'], a: 0, e: '主语相同 → avant de + 不定式' },
    ],
  },
  {
    id: 'b2-6', level: 'B2', icon: '💻', title: 'Le travail de demain', zh: '新型工作方式与副动词',
    goal: '讨论远程办公与工作平衡，掌握副动词（en + -ant）和现在分词。',
    vocab: [
      ['le télétravail', 'remote work / working from home'],
      ["l'équilibre (m.)", 'balance', "l'équilibre vie pro / vie perso"],
      ['le stress', 'stress'],
      ['épuisé(e)', 'exhausted', '≈ exhausted'],
      ["l'épuisement professionnel (m.)", 'burnout', '也说 le burn-out'],
      ["l'horaire (m.)", 'schedule / working hours', 'horaires flexibles'],
      ['la productivité', 'productivity'],
      ['flexible', 'flexible'],
      ['se déconnecter', 'to disconnect / log off', 'le droit à la déconnexion'],
      ['la carrière', 'career'],
      ['motivant(e)', 'motivating'],
      ['la pression', 'pressure'],
      ['le salarié (la salariée)', 'employee', '≈ salaried'],
      ["l'employeur (m.)", 'employer'],
      ['un open space', 'open-plan office'],
      ['la reconversion', 'career change'],
    ],
    grammar: {
      title: '副动词 (gérondif) · 现在分词 (participe présent)',
      html: `<p><b>构成</b>：现在时 <em>nous</em> 形式去掉 <em>-ons</em>，加 <em>-ant</em>（≈ 英语 <i>-ing</i>）。<br>
<em>parlons → parlant</em> · <em>finissons → finissant</em> · <em>faisons → faisant</em><br>
三个例外：<em>être → étant</em>，<em>avoir → ayant</em>，<em>savoir → sachant</em>。</p>
<div class="box"><b>副动词 = en + -ant</b>，主语必须和主句一致，表示：<br>
① <b>同时</b>：<em>Je travaille <b>en écoutant</b> de la musique.</em>（while listening）<br>
② <b>方式</b>：<em>On apprend <b>en faisant</b> des erreurs.</em>（by making mistakes）<br>
③ <b>条件</b>：<em><b>En partant</b> maintenant, tu arriveras à l'heure.</em>（if you leave now）<br>
加 <em>tout</em> 强调对立：<em><b>Tout en</b> travaillant beaucoup, il trouve le temps de voyager.</em>（while / even though）</div>
<p><b>现在分词（不带 en）</b>主要用于书面，相当于 <em>qui + 动词</em> 或表原因：<br>
<em>Les salariés <b>souhaitant</b> télétravailler doivent remplir ce formulaire.</em>（= qui souhaitent）<br>
<em><b>Étant</b> malade, il n'est pas venu.</em>（Being ill, …）</p>
<p>⚠️ <b>英语陷阱：</b>英语 <i>-ing</i> 的很多用法法语<b>不用</b> -ant：<br>
<i>I like swimming</i> → <em>J'aime <b>nager</b></em>（不定式）· <i>I am working</i> → <em>Je <b>travaille</b></em> · <i>before leaving</i> → <em>avant de <b>partir</b></em>。</p>`,
    },
    examples: [
      ['Je travaille souvent en écoutant de la musique.', 'I often work while listening to music.'],
      ["C'est en forgeant qu'on devient forgeron.", 'Practice makes perfect. (lit. It is by forging that one becomes a blacksmith.)'],
      ["En télétravaillant, j'économise deux heures de transport par jour.", 'By working from home, I save two hours of commuting a day.'],
      ["Tout en ayant un bon salaire, elle n'était pas heureuse.", 'Despite having a good salary, she was not happy.'],
      ["Les salariés travaillant le dimanche sont mieux payés.", 'Employees working on Sundays are better paid.'],
      ["Il est important de se déconnecter le soir pour éviter l'épuisement.", 'It is important to disconnect in the evening to avoid burnout.'],
      ["Étant donné la situation, l'entreprise propose des horaires flexibles.", 'Given the situation, the company offers flexible hours.'],
      ["Après dix ans dans la finance, il a fait une reconversion dans l'enseignement.", 'After ten years in finance, he changed careers to teaching.'],
    ],
    quiz: [
      { q: "Il chante ___ la douche.", o: ['en prenant', 'en prendant', 'prenant en', 'à prendre'], a: 0, e: 'nous prenons → prenant' },
      { q: "On apprend une langue ___.", o: ['en pratiquant', 'pratiquer', 'à pratiquant', 'par pratiquer'], a: 0, e: '方式 → 副动词' },
      { q: "___ fatigué, il est rentré tôt.", o: ['Étant', 'Étant été', 'En êtant', 'Être'], a: 0, e: 'être → étant' },
      { q: "J'aime ___ le week-end.", o: ['courir', 'courant', 'en courant', 'cours'], a: 0, e: 'I like running → J\'aime courir（不定式）' },
      { q: "___ ce problème, il a trouvé une solution.", o: ['En analysant', 'En analysent', 'Analysent', 'À analyser'], a: 0, e: 'analysons → analysant' },
      { q: "___ en dormant peu, il reste très productif.", o: ['Tout', 'Même', 'Bien', 'Toute'], a: 0, e: 'tout en + -ant 表示对立' },
    ],
  },
  {
    id: 'b2-7', level: 'B2', icon: '🗯️', title: 'Le français parlé', zh: '口语、俚语与语域',
    goal: '听懂法国人真实的日常口语，了解语域差异和常见习语。',
    vocab: [
      ['bosser', 'to work (slang)', '= travailler'],
      ['le boulot', 'job / work (slang)', '= le travail'],
      ['la bagnole', 'car (slang)', '= la voiture'],
      ['un mec', 'a guy (slang)', '= un homme'],
      ['une meuf', 'a girl / woman (slang)', 'verlan de « femme »'],
      ['le fric', 'money (slang)', '= l\'argent；也说 la thune'],
      ['kiffer', 'to love / to be into (slang)', '= aimer beaucoup'],
      ['chelou', 'weird (slang)', 'verlan de « louche »'],
      ['avoir la flemme', "can't be bothered", 'J\'ai la flemme de sortir.'],
      ['avoir le cafard', 'to feel down', '字面：有蟑螂'],
      ['poser un lapin', 'to stand someone up', '字面：放一只兔子'],
      ['coûter les yeux de la tête', 'to cost an arm and a leg', '字面：值头上的眼睛'],
      ['il pleut des cordes', "it's raining cats and dogs", '字面：下绳子'],
      ['c\'est pas terrible', "it's not great", '⚠️ terrible 口语常表示「很棒」！'],
      ['ça marche', 'OK / that works'],
      ['du coup', 'so / as a result', '口语里无处不在'],
    ],
    grammar: {
      title: '语域 (registres) 与真实口语',
      html: `<p>课本法语和街头法语差别很大。达到 B2，你需要<b>听懂</b>口语，并知道在什么场合<b>说</b>什么。</p>
<table><tr><th>正式 soutenu</th><th>标准 courant</th><th>口语 familier</th></tr>
<tr><td><em>Je ne sais pas.</em></td><td><em>Je ne sais pas.</em></td><td><em>Chais pas.</em></td></tr>
<tr><td><em>Nous allons partir.</em></td><td><em>Nous allons partir.</em></td><td><em>On va y aller.</em></td></tr>
<tr><td><em>Que faites-vous ?</em></td><td><em>Qu'est-ce que vous faites ?</em></td><td><em>Tu fais quoi ?</em></td></tr>
<tr><td><em>un véhicule</em></td><td><em>une voiture</em></td><td><em>une bagnole</em></td></tr></table>
<div class="box"><b>口语五大特点：</b><br>
① <b>省略 ne</b>：<em>C'est pas grave.</em> · <em>J'aime pas ça.</em><br>
② <b>on 代替 nous</b>：<em>On y va ?</em>（Shall we go?）<br>
③ <b>吞音</b>：<em>tu es → t'es</em>，<em>il y a → y a</em>，<em>je suis → chuis</em><br>
④ <b>强调/移位</b>：<em>Moi, je trouve que…</em> · <em>Il est sympa, ton frère.</em><br>
⑤ <b>Verlan</b>（音节倒序的俚语）：<em>femme → meuf</em>，<em>louche → chelou</em>，<em>fou → ouf</em>（<em>c'est ouf !</em> = that's crazy!）</div>
<p><b>填充词：</b><em>bah, ben, bon, genre, du coup, en fait, quoi</em>（放句尾：<em>C'est cool, quoi.</em>）。听懂它们，你的听力会飞跃！</p>
<p>⚠️ 写作和考试中要用标准语，口语词只用于和朋友聊天。</p>`,
    },
    examples: [
      ["J'ai trop la flemme d'aller bosser aujourd'hui.", "I really can't be bothered going to work today."],
      ["Il m'a posé un lapin hier soir !", 'He stood me up last night!'],
      ["Ce resto coûte les yeux de la tête.", 'This restaurant costs an arm and a leg.'],
      ["Du coup, on se retrouve à huit heures ? — Ça marche !", 'So, shall we meet at eight? — Sounds good!'],
      ["Le film était pas terrible, franchement.", "The film wasn't great, honestly."],
      ["Y a un mec chelou devant la porte.", "There's a weird guy in front of the door."],
      ["Je kiffe trop cette chanson, c'est ouf !", "I love this song so much, it's crazy!"],
      ["Il pleut des cordes, je prends la bagnole.", "It's pouring, I'm taking the car."],
    ],
    quiz: [
      { q: '« Je bosse demain. » = ?', o: ['Je travaille demain.', 'Je me repose demain.', 'Je pars demain.', 'Je bois demain.'], a: 0, e: 'bosser = travailler', noSay: true },
      { q: "« J'ai le cafard. » = ?", o: ['Je suis triste / déprimé.', "J'ai un insecte chez moi.", "J'ai faim.", 'Je suis malade.'], a: 0, e: 'avoir le cafard = to feel down' },
      { q: '« meuf » est le verlan de :', o: ['femme', 'fou', 'mère', 'feu'], a: 0, e: 'fem-me → meuf' },
      { q: 'Registre soutenu de « Tu fais quoi ? » :', o: ['Que faites-vous ?', 'Tu fais quoi, toi ?', 'Kesta fé ?', 'Vous faites quoi ?'], a: 0, e: '正式：倒装 + vous' },
      { q: '« Ce film, il est pas terrible. » = ?', o: ["Ce film n'est pas très bon.", 'Ce film fait très peur.', 'Ce film est excellent.', "Ce film n'est pas violent."], a: 0, e: 'pas terrible = not great' },
      { q: '« Il m\'a posé un lapin. » = ?', o: ["Il n'est pas venu au rendez-vous.", "Il m'a offert un animal.", "Il m'a fait une blague.", "Il m'a invité à dîner."], a: 0, e: 'poser un lapin = to stand someone up' },
    ],
  },
  {
    id: 'b2-8', level: 'B2', icon: '🏅', title: 'Objectif DELF B2', zh: '正式书信、议论文与考试策略',
    goal: '掌握正式书信和议论文的固定表达，了解 DELF B2 的题型与评分重点。',
    vocab: [
      ['Madame, Monsieur,', 'Dear Sir or Madam,', '正式信件开头'],
      ['je me permets de', 'I am writing to / I take the liberty of'],
      ['suite à', 'following', 'suite à votre annonce'],
      ['en ce qui concerne', 'regarding / as far as … is concerned'],
      ['à cet égard', 'in this respect'],
      ['il convient de', 'it is appropriate to / one should'],
      ['force est de constater que', 'one cannot but note that', '高分表达'],
      ['nul doute que', 'there is no doubt that'],
      ['dans la mesure où', 'insofar as / since'],
      ['ci-joint', 'attached / enclosed'],
      ["dans l'attente de votre réponse", 'looking forward to your reply'],
      ['veuillez agréer mes salutations distinguées', 'yours faithfully', '正式信件结尾'],
      ['tout d\'abord', 'first of all'],
      ['par ailleurs', 'furthermore / besides'],
      ['pour conclure', 'to conclude'],
      ['la problématique', 'the issue / central question'],
    ],
    grammar: {
      title: 'DELF B2 写作结构 · 时态配合总结',
      html: `<p><b>DELF B2 考试：</b>听力（30 分钟）、阅读（1 小时）、写作（1 小时，≥250 词）、口语（准备 30 分钟 + 20 分钟面试），每项 25 分，总分 ≥50 且每项 ≥5 分即通过。</p>
<div class="box"><b>议论文 / 正式信件模板：</b><br>
<b>① 引言</b>：引出话题 + 提出问题 + 宣布结构<br>
<em>De nos jours, … Faut-il … ? Nous verrons d'abord … , puis …</em><br>
<b>② 正文 1</b>：<em>Tout d'abord, … En effet, … Par exemple, …</em><br>
<b>③ 正文 2</b>：<em>Cependant / En revanche, … De plus, … Prenons l'exemple de …</em><br>
<b>④ 结论</b>：<em>Pour conclure, … Il me semble donc que …</em><br>
正式信件开头：<em>Madame, Monsieur,</em> → <em>Je me permets de vous écrire suite à …</em><br>
结尾：<em>Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.</em></div>
<p><b>时态配合总结（主句过去时 → 从句）：</b></p>
<table><tr><th>从句动作</th><th>直陈式</th><th>虚拟式</th></tr>
<tr><td>同时</td><td>imparfait：<em>Il a dit qu'il <b>était</b> là.</em></td><td>subj. présent：<em>Il voulait que je <b>vienne</b>.</em></td></tr>
<tr><td>之前</td><td>plus-que-parfait：<em>… qu'il <b>avait fini</b>.</em></td><td>subj. passé：<em>Il regrettait que je <b>sois parti</b>.</em></td></tr>
<tr><td>之后</td><td>conditionnel：<em>… qu'il <b>viendrait</b>.</em></td><td>subj. présent</td></tr></table>
<p><b>评分重点：</b>任务完成度、论证的连贯性（连接词！）、词汇丰富度、语法准确度。<b>避免重复同一个词</b>——学会同义替换：<em>problème → difficulté, enjeu, défi</em>；<em>important → essentiel, primordial, crucial</em>。</p>`,
    },
    examples: [
      ["Madame, Monsieur, je me permets de vous écrire suite à votre annonce parue dans Le Monde.", 'Dear Sir or Madam, I am writing to you following your advertisement in Le Monde.'],
      ["En ce qui concerne le télétravail, les avis sont partagés.", 'As far as remote work is concerned, opinions are divided.'],
      ["Force est de constater que la situation s'est dégradée.", 'One cannot but note that the situation has worsened.'],
      ["Il convient de rappeler que ce problème n'est pas nouveau.", 'It should be remembered that this problem is not new.'],
      ["Vous trouverez ci-joint mon curriculum vitae.", 'Please find my CV attached.'],
      ["Nul doute que cette réforme aura des conséquences importantes.", 'There is no doubt that this reform will have significant consequences.'],
      ["Par ailleurs, il faut tenir compte du coût de ces mesures.", 'Furthermore, the cost of these measures must be taken into account.'],
      ["Dans l'attente de votre réponse, je vous prie d'agréer mes salutations distinguées.", 'Looking forward to your reply, yours faithfully.'],
    ],
    quiz: [
      { q: "Il voulait que je ___ avec lui.", o: ['vienne', 'viens', 'viendrais', 'venais'], a: 0, e: 'vouloir que + 虚拟式（同时）' },
      { q: "Elle a dit qu'elle ___ le lendemain.", o: ['partirait', 'partira', 'part', 'parte'], a: 0, e: '过去的将来 → conditionnel' },
      { q: "Il regrettait que nous ___ partis si tôt.", o: ['soyons', 'sommes', 'étions', 'serions'], a: 0, e: '之前 + 虚拟式 → subj. passé：soyons partis' },
      { q: "Formule de fin d'une lettre formelle :", o: ["Veuillez agréer mes salutations distinguées.", 'Bisous !', 'À plus !', 'Salut, à bientôt.'], a: 0, e: '正式信件结尾' },
      { q: "___ est de constater que les jeunes lisent moins.", o: ['Force', 'Fort', 'Il', 'Faut'], a: 0, e: 'force est de constater que = 高分表达' },
      { q: 'Synonyme soutenu de « très important » :', o: ['primordial', 'super', 'grave cool', 'trop bien'], a: 0, e: '书面同义替换' },
    ],
  },
);
