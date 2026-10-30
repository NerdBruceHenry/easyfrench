/* B1 进阶：8 个单元 */
EF.units.push(
  {
    id: 'b1-1', level: 'B1', icon: '💼', title: 'Le monde du travail', zh: '求职、职场与关系代词',
    goal: '谈论工作和求职经历，用 qui / que / où / dont 连接句子。',
    vocab: [
      ["l'entreprise (f.)", 'company / business', '≈ enterprise'],
      ['le / la collègue', 'colleague'],
      ['le patron (la patronne)', 'boss', '⚠️ 不是 patron（赞助人）'],
      ['le salaire', 'salary / wage'],
      ["l'entretien d'embauche (m.)", 'job interview'],
      ['le CV', 'CV / résumé'],
      ['postuler', 'to apply (for a job)'],
      ['embaucher', 'to hire'],
      ['le poste', 'position / job', '⚠️ la poste = 邮局'],
      ['la réunion', 'meeting', '≈ reunion'],
      ['le congé', 'leave / time off', 'congé maternité = maternity leave'],
      ["l'expérience (f.)", 'experience / experiment'],
      ['les compétences (f.)', 'skills', '≈ competence'],
      ['le chômage', 'unemployment', 'être au chômage = to be unemployed'],
      ['démissionner', 'to resign', '≈ dismiss（反方向）'],
      ['à temps plein', 'full-time', 'à temps partiel = part-time'],
    ],
    grammar: {
      title: '关系代词 qui · que · où · dont',
      html: `<p>英语用 <i>who / which / that / where / whose</i>，法语用 4 个词，<b>选哪个取决于它在从句里的语法功能</b>，而不是指人还是指物。</p>
<table><tr><th>代词</th><th>功能</th><th>例子</th></tr>
<tr><td><b>qui</b></td><td>从句的<b>主语</b>（后面直接跟动词）</td><td><em>Le collègue <b>qui</b> travaille avec moi est sympa.</em></td></tr>
<tr><td><b>que</b></td><td>从句的<b>直接宾语</b>（后面跟主语+动词）</td><td><em>Le poste <b>que</b> je veux est à Paris.</em></td></tr>
<tr><td><b>où</b></td><td>地点或<b>时间</b></td><td><em>L'entreprise <b>où</b> je travaille…</em><br><em>Le jour <b>où</b> je suis arrivé…</em>（the day <b>when</b>）</td></tr>
<tr><td><b>dont</b></td><td>代替 <b>de + 名词</b></td><td><em>Le projet <b>dont</b> je parle…</em>（parler <b>de</b>）</td></tr></table>
<div class="box"><b>⚠️ 英语思维陷阱：</b><br>
1. 英语可以省略 <i>that</i>：<i>the job (that) I want</i>。法语<b>绝不能</b>省略 que！<br>
2. <i>the day when</i> → <em>le jour <b>où</b></em>（不是 quand）。<br>
3. <b>dont</b> 常见于：<em>parler de, avoir besoin de, avoir peur de, être fier de, se souvenir de</em>。<br>
<em>C'est l'outil <b>dont</b> j'ai besoin.</em> — It's the tool (that) I need.<br>
<em>Mon amie, <b>dont</b> le frère est médecin…</em> — My friend, <b>whose</b> brother is a doctor…</div>
<p>que + 元音 → <em>qu'</em>；qui <b>永远不</b>省音。</p>`,
    },
    examples: [
      ["Je cherche un travail qui me plaît.", "I'm looking for a job that I like."],
      ["Le poste que j'ai obtenu est à temps plein.", 'The position I got is full-time.'],
      ["C'est l'entreprise où travaille mon frère.", "That's the company where my brother works."],
      ["Voilà le projet dont je t'ai parlé.", "Here's the project I told you about."],
      ["J'ai un entretien d'embauche demain matin.", 'I have a job interview tomorrow morning.'],
      ["Elle a démissionné parce que son salaire était trop bas.", 'She resigned because her salary was too low.'],
      ['Le jour où j\'ai commencé, tout le monde était gentil.', 'The day I started, everyone was nice.'],
      ["Quelles compétences sont nécessaires pour ce poste ?", 'What skills are needed for this position?'],
    ],
    quiz: [
      { q: "Le collègue ___ est assis à côté de moi s'appelle Marc.", o: ['qui', 'que', 'dont', 'où'], a: 0, e: '后面直接跟动词 → 主语 → qui' },
      { q: "Le livre ___ je lis est passionnant.", o: ['que', 'qui', 'dont', 'où'], a: 0, e: 'je lis le livre → 直接宾语 → que' },
      { q: "La ville ___ je suis né est petite.", o: ['où', 'que', 'qui', 'dont'], a: 0, e: '地点 → où' },
      { q: "C'est le collègue ___ je t'ai parlé.", o: ['dont', 'que', 'qui', 'où'], a: 0, e: 'parler de qn → dont' },
      { q: "Le jour ___ il est parti, il pleuvait.", o: ['où', 'quand', 'que', 'dont'], a: 0, e: 'the day when → le jour où' },
      { q: "Voici l'ordinateur ___ j'ai besoin.", o: ['dont', 'que', 'qui', 'où'], a: 0, e: 'avoir besoin de → dont' },
    ],
  },
  {
    id: 'b1-2', level: 'B1', icon: '💭', title: 'Si j\'étais riche…', zh: '假设、愿望与条件式',
    goal: '表达愿望、礼貌请求和建议，掌握条件式现在时与「si + imparfait」。',
    vocab: [
      ['riche', 'rich'],
      ['gagner', 'to win / to earn'],
      ['le loto', 'the lottery'],
      ['faire le tour du monde', 'to travel around the world'],
      ['le rêve', 'dream'],
      ['aider', 'to help', '≈ aid'],
      ["j'aimerais", 'I would like'],
      ['je pourrais', 'I could'],
      ['tu devrais', 'you should'],
      ['à ta place', 'if I were you', '字面：in your place'],
      ['il vaudrait mieux', 'it would be better'],
      ['volontiers', 'gladly / with pleasure'],
      ['une maison de campagne', 'a country house'],
      ['donner un conseil', 'to give advice'],
      ['une association caritative', 'a charity'],
      ['imaginer', 'to imagine'],
    ],
    grammar: {
      title: '条件式现在时 (conditionnel présent) · si 条件句 ②',
      html: `<p><b>构成 = 将来时词干 + 未完成过去时词尾</b>（<em>-ais, -ais, -ait, -ions, -iez, -aient</em>）。如果你学会了 futur 和 imparfait，你已经会了！</p>
<table><tr><td><em>aimer → j'aimer<b>ais</b></em></td><td><em>être → je ser<b>ais</b></em></td><td><em>pouvoir → je pourr<b>ais</b></em></td></tr>
<tr><td><em>vouloir → je voudr<b>ais</b></em></td><td><em>faire → nous fer<b>ions</b></em></td><td><em>devoir → tu devr<b>ais</b></em></td></tr></table>
<p>≈ 英语的 <b><i>would</i></b>。三大用法：</p>
<div class="box">① <b>礼貌</b>：<em>Je <b>voudrais</b> un café.</em> · <em><b>Pourriez</b>-vous m'aider ?</em>（Could you help me?）<br>
② <b>建议</b>：<em>Tu <b>devrais</b> te reposer.</em>（You should…）· <em>À ta place, je <b>partirais</b>.</em><br>
③ <b>假设</b>：<b>si + imparfait, conditionnel</b><br>
<em>Si j'<b>étais</b> riche, je <b>ferais</b> le tour du monde.</em> — If I were rich, I would travel the world.</div>
<p>和英语完全平行：<i>If I <u>had</u> money, I <u>would</u> buy…</i> = <em>Si j'<u>avais</u> de l'argent, j'<u>achèterais</u>…</em><br>
⚠️ 和英语一样，si 从句里<b>不用</b>条件式（不能说 <i>si j'aurais</i> ❌，这是法国人自己也常犯的错误）。</p>
<p><b>三种 si 句总结：</b>si + 现在时 → 将来时（真实）；si + imparfait → 条件式（想象）；si + 愈过去时 → 过去条件式（B2 学）。</p>`,
    },
    examples: [
      ["Si je gagnais au loto, j'achèterais une maison de campagne.", "If I won the lottery, I'd buy a country house."],
      ["J'aimerais apprendre à jouer du piano.", "I'd like to learn to play the piano."],
      ["Pourriez-vous parler plus lentement, s'il vous plaît ?", 'Could you speak more slowly, please?'],
      ['Tu devrais dormir plus.', 'You should sleep more.'],
      ["À ta place, j'accepterais ce poste.", "If I were you, I'd accept this job."],
      ['Si nous avions plus de temps, nous voyagerions davantage.', 'If we had more time, we would travel more.'],
      ['Il vaudrait mieux partir tôt.', 'It would be better to leave early.'],
      ["Qu'est-ce que tu ferais si tu étais président ?", 'What would you do if you were president?'],
    ],
    quiz: [
      { q: 'Si j\'étais riche, je ___ une grande maison.', o: ['achèterais', 'achèterai', 'achetais', 'achète'], a: 0, e: 'si + imparfait → conditionnel' },
      { q: 'Si tu ___ plus, tu serais en forme.', o: ['dormais', 'dormirais', 'dors', 'dormiras'], a: 0, e: 'si 从句用 imparfait' },
      { q: '___-vous m\'aider, s\'il vous plaît ?', o: ['Pourriez', 'Pouvriez', 'Pourrez', 'Pouviez'], a: 0, e: '礼貌请求：pourriez-vous' },
      { q: 'Tu ___ voir un médecin.', o: ['devrais', 'devras', 'doivais', 'deverais'], a: 0, e: '建议：tu devrais = you should' },
      { q: 'Nous ___ venir, mais nous sommes occupés.', o: ['aimerions', 'aimerons', 'aimions', 'aimons'], a: 0, e: 'nous → -ions（条件式）' },
      { q: "S'il avait le temps, il ___ du sport.", o: ['ferait', 'fera', 'faisait', 'fait'], a: 0, e: 'faire → fer- + ait' },
    ],
  },
  {
    id: 'b1-3', level: 'B1', icon: '🏠', title: 'La vie en colocation', zh: '合租生活与虚拟式入门',
    goal: '表达必要、愿望和情绪，掌握虚拟式现在时的构成和最常见的触发结构。',
    vocab: [
      ['la colocation', 'flat-sharing', 'colocataire / coloc = flatmate'],
      ['partager', 'to share', '≈ part'],
      ['le loyer', 'rent'],
      ['le ménage', 'housework / cleaning', 'faire le ménage'],
      ['ranger', 'to tidy up', '≈ arrange'],
      ['la vaisselle', 'the dishes', 'faire la vaisselle = do the dishes；≈ vessel'],
      ['propre', 'clean / own', '≈ proper；位置不同意思不同'],
      ['sale', 'dirty', '⚠️ 不是 sale（打折 = les soldes）'],
      ['le bruit', 'noise', '≈ bruit（传闻）'],
      ['se plaindre', 'to complain', '≈ complain / plaintiff'],
      ['la règle', 'rule', '≈ regulate'],
      ['il faut que', 'it is necessary that / must'],
      ['vouloir que', 'to want (someone) to'],
      ['être content(e) que', 'to be glad that'],
      ['avoir peur que', 'to be afraid that'],
      ['pour que', 'so that'],
    ],
    grammar: {
      title: '虚拟式现在时 (subjonctif présent) ①',
      html: `<p>虚拟式表达<b>主观</b>：必要、愿望、情感、怀疑。英语里几乎消失了（只剩 <i>I insist that he <u>be</u> on time</i>、<i>If I <u>were</u></i>），但法语里非常常用，B1–B2 必备。</p>
<p><b>构成：</b>现在时 <em>ils</em> 形式去掉 <em>-ent</em>，加 <em>-e, -es, -e, -ions, -iez, -ent</em>：</p>
<table><tr><td>ils <em>parlent</em> → <em>que je parle, que tu parles, qu'il parle, que nous parlions, que vous parliez, qu'ils parlent</em></td></tr>
<tr><td>ils <em>finissent</em> → <em>que je finisse</em> · ils <em>partent</em> → <em>que je parte</em></td></tr></table>
<p><b>常见不规则（必背）：</b><em>être → que je sois</em>、<em>avoir → que j'aie</em>、<em>aller → que j'aille</em>、<em>faire → que je fasse</em>、<em>pouvoir → que je puisse</em>、<em>savoir → que je sache</em>、<em>vouloir → que je veuille</em>。</p>
<div class="box"><b>触发虚拟式的结构（que 后面）：</b><br>
• 必要：<em>il faut que, il est important que</em><br>
• 愿望/要求：<em>vouloir que, aimer que, demander que</em><br>
• 情感：<em>être content / triste / surpris que, avoir peur que</em><br>
• 目的：<em>pour que</em>（so that）<br><br>
<em>Il faut que tu <b>fasses</b> la vaisselle.</em> — You have to do the dishes.<br>
<em>Je veux que vous <b>soyez</b> à l'heure.</em> — I want you to be on time.（英语用不定式，法语用 que + 虚拟式！）</div>
<p>⚠️ <b>主语相同时用不定式</b>：<em>Je veux partir.</em>（不说 <i>je veux que je parte</i>）。</p>`,
    },
    examples: [
      ['Il faut que tu fasses la vaisselle ce soir.', 'You have to do the dishes tonight.'],
      ['Je veux que mon coloc range sa chambre.', 'I want my flatmate to tidy his room.'],
      ['Je suis content que tu sois là.', "I'm glad you're here."],
      ["Il est important que tout le monde partage le ménage.", "It's important that everyone shares the housework."],
      ["J'ai peur qu'il y ait trop de bruit.", "I'm afraid there will be too much noise."],
      ['Je parle lentement pour que tu comprennes.', 'I speak slowly so that you understand.'],
      ['Nos voisins se plaignent toujours du bruit.', 'Our neighbours always complain about the noise.'],
      ['Le loyer est cher, mais la cuisine est propre.', 'The rent is expensive, but the kitchen is clean.'],
    ],
    quiz: [
      { q: 'Il faut que tu ___ tes devoirs.', o: ['fasses', 'fais', 'feras', 'faisais'], a: 0, e: 'il faut que + 虚拟式；faire → fasse' },
      { q: 'Je veux que vous ___ à l\'heure.', o: ['soyez', 'êtes', 'serez', 'étiez'], a: 0, e: 'être → que vous soyez' },
      { q: 'Je suis content que tu ___ venir.', o: ['puisses', 'peux', 'pourras', 'pouvais'], a: 0, e: '情感 + que → 虚拟式；pouvoir → puisse' },
      { q: 'Je veux ___ en France.', o: ['aller', "que j'aille", 'que je vais', 'allé'], a: 0, e: '主语相同 → 用不定式' },
      { q: 'Il est important que nous ___ ensemble.', o: ['parlions', 'parlons', 'parlerons', 'parlerions'], a: 0, e: 'nous → -ions（虚拟式）' },
      { q: "J'explique encore pour que tu ___.", o: ['comprennes', 'comprends', 'comprenais', 'comprendras'], a: 0, e: 'pour que + 虚拟式；ils comprennent → comprenne' },
    ],
  },
  {
    id: 'b1-4', level: 'B1', icon: '📰', title: 'Les médias', zh: '媒体与表达观点',
    goal: '谈论新闻和社交媒体，表达同意、反对和个人看法。',
    vocab: [
      ['les infos (f.)', 'the news', 'les informations 的缩写'],
      ['le journal', 'newspaper / news programme', '≈ journal'],
      ["l'article (m.)", 'article'],
      ['la chaîne', 'TV channel / chain', '≈ chain：^ 代表消失的字母'],
      ["l'émission (f.)", 'TV/radio programme', '⚠️ 不只是 emission（排放）'],
      ['les réseaux sociaux (m.)', 'social media / networks'],
      ['une fausse information', 'fake news', '也说 une fake news / une infox'],
      ['le / la journaliste', 'journalist'],
      ['à mon avis', 'in my opinion'],
      ['selon', 'according to'],
      ["d'après moi", 'in my view'],
      ['je trouve que', 'I think / I find that'],
      ["être d'accord", 'to agree'],
      ['avoir raison', 'to be right'],
      ['avoir tort', 'to be wrong'],
      ['le point de vue', 'point of view', '≈ point of view'],
    ],
    grammar: {
      title: '表达观点：penser que + 直陈式 / ne pas penser que + 虚拟式',
      html: `<p><b>表达观点的常用句式：</b></p>
<ul><li><em>À mon avis / Selon moi / D'après moi,</em> … — In my opinion, …</li>
<li><em>Je pense que / Je crois que / Je trouve que</em> … — I think that …</li>
<li><em>Il me semble que</em> … — It seems to me that …</li></ul>
<div class="box"><b>重要规则：</b><br>
肯定 → <b>直陈式</b>（确定）：<em>Je pense que c'<b>est</b> vrai.</em><br>
否定或疑问 → <b>虚拟式</b>（不确定）：<em>Je ne pense pas que ce <b>soit</b> vrai.</em> · <em>Crois-tu que ce <b>soit</b> possible ?</em><br>
同理：<em>Je suis sûr qu'il <b>vient</b>.</em> vs. <em>Je doute qu'il <b>vienne</b>.</em>（douter 本身表怀疑 → 虚拟式）</div>
<p><b>同意 / 反对：</b><br>
<em>Je suis (tout à fait) d'accord avec toi.</em> · <em>Tu as raison.</em> · <em>C'est vrai.</em><br>
<em>Je ne suis pas d'accord.</em> · <em>Tu as tort.</em> · <em>Pas du tout !</em> · <em>Ça dépend.</em></p>
<p><b>⚠️ 英语陷阱：</b><i>I agree</i> = <em>je <b>suis</b> d'accord</em>（不是 j'agrée）；<i>you are right</i> = <em>tu <b>as</b> raison</em>（用 avoir！）。</p>`,
    },
    examples: [
      ["À mon avis, les réseaux sociaux sont dangereux pour les jeunes.", 'In my opinion, social media is dangerous for young people.'],
      ["Je pense que cet article est intéressant.", 'I think this article is interesting.'],
      ["Je ne pense pas que ce soit une bonne idée.", "I don't think it's a good idea."],
      ["Selon le journal, il va faire très chaud cet été.", "According to the newspaper, it's going to be very hot this summer."],
      ["Tu as raison, il faut vérifier les informations.", "You're right, you have to check the information."],
      ["Je ne suis pas du tout d'accord avec toi.", "I don't agree with you at all."],
      ['Il y a beaucoup de fausses informations sur Internet.', 'There is a lot of fake news on the Internet.'],
      ['Quelle est ton émission préférée ?', "What's your favourite programme?"],
    ],
    quiz: [
      { q: 'Je pense que tu ___ raison.', o: ['as', 'aies', 'es', 'sois'], a: 0, e: '肯定的 penser que → 直陈式' },
      { q: 'Je ne pense pas que ce ___ vrai.', o: ['soit', 'est', 'sera', 'était'], a: 0, e: '否定的 penser que → 虚拟式' },
      { q: "Je suis ___ avec toi.", o: ["d'accord", 'accord', 'agréé', 'raison'], a: 0, e: 'I agree = je suis d\'accord' },
      { q: 'Tu ___ tort.', o: ['as', 'es', 'fais', 'dis'], a: 0, e: 'avoir tort / avoir raison' },
      { q: '___ le journal, le président va démissionner.', o: ['Selon', 'Pour', 'Avec', 'Par'], a: 0, e: 'according to → selon' },
      { q: "Je doute qu'il ___ ce soir.", o: ['vienne', 'vient', 'viendra', 'venait'], a: 0, e: 'douter que + 虚拟式' },
    ],
  },
  {
    id: 'b1-5', level: 'B1', icon: '📜', title: 'Raconter une histoire', zh: '讲故事与愈过去时',
    goal: '有条理地讲述故事，用愈过去时表达「过去的过去」，用叙事连接词。',
    vocab: [
      ['soudain', 'suddenly', '≈ sudden'],
      ['tout à coup', 'all of a sudden'],
      ['alors', 'so / then'],
      ['ce jour-là', 'that day'],
      ['la veille', 'the day before / the eve'],
      ['le lendemain', 'the next day'],
      ['auparavant', 'beforehand / previously'],
      ['finalement', 'in the end / finally'],
      ['se rendre compte', 'to realize', '⚠️ réaliser 更常指「实现」'],
      ['raconter', 'to tell (a story)', '≈ recount'],
      ['oublier', 'to forget', '≈ oblivion'],
      ['avoir lieu', 'to take place'],
      ["l'histoire (f.)", 'story / history'],
      ['le personnage', 'character (in a story)', '≈ personage'],
      ['perdre', 'to lose', '≈ perdition'],
      ['retrouver', 'to find (again) / to meet up with'],
    ],
    grammar: {
      title: '愈过去时 (plus-que-parfait) · 叙事时态全景',
      html: `<p>和英语的<b>过去完成时</b> <i>had done</i> 完全对应：<b>avoir / être 的 imparfait + 过去分词</b>。</p>
<div class="box"><em>J'<b>avais</b> déjà <b>mangé</b> quand il est arrivé.</em> — I <b>had</b> already <b>eaten</b> when he arrived.<br>
<em>Elle <b>était</b> déjà <b>partie</b>.</em> — She <b>had</b> already <b>left</b>.（用 être 的动词仍要配合）</div>
<p><b>叙事三时态分工：</b></p>
<table><tr><th>时态</th><th>作用</th><th>英语</th></tr>
<tr><td>imparfait</td><td>背景、描写、正在进行</td><td>was doing</td></tr>
<tr><td>passé composé</td><td>推进情节的事件</td><td>did</td></tr>
<tr><td>plus-que-parfait</td><td>比上述事件更早发生的事</td><td>had done</td></tr></table>
<p><em>Il <b>faisait</b> nuit. Je <b>suis rentré</b> chez moi et je <b>me suis rendu compte</b> que j'<b>avais perdu</b> mes clés.</em></p>
<p><b>讲故事的骨架：</b><em>Il était une fois…</em>（从前…）→ <em>Ce jour-là…</em> → <em>Soudain / Tout à coup…</em> → <em>Alors…</em> → <em>Finalement…</em></p>
<p><b>时间转换：</b>讲过去时 <em>hier → la veille</em>，<em>demain → le lendemain</em>，<em>aujourd'hui → ce jour-là</em>（和英语 <i>the day before / the next day</i> 一样）。</p>`,
    },
    examples: [
      ["Quand je suis arrivé, le film avait déjà commencé.", 'When I arrived, the film had already started.'],
      ["Elle s'est rendu compte qu'elle avait oublié son passeport.", 'She realized she had forgotten her passport.'],
      ["Ce jour-là, il pleuvait. Soudain, quelqu'un a frappé à la porte.", 'That day it was raining. Suddenly, someone knocked on the door.'],
      ["La veille, nous avions préparé nos valises.", 'The day before, we had packed our suitcases.'],
      ["Le lendemain, ils ont retrouvé le chat dans le jardin.", 'The next day, they found the cat in the garden.'],
      ["Raconte-moi ce qui s'est passé !", 'Tell me what happened!'],
      ["La réunion a eu lieu dans une petite salle.", 'The meeting took place in a small room.'],
      ["Finalement, tout s'est bien terminé.", 'In the end, everything turned out fine.'],
    ],
    quiz: [
      { q: "Quand je suis arrivé, il ___ déjà parti.", o: ['était', 'avait', 'est', 'a'], a: 0, e: 'partir 用 être → était parti' },
      { q: "J'___ oublié mes clés, alors je n'ai pas pu entrer.", o: ['avais', 'étais', 'ai eu', 'aurais'], a: 0, e: '更早发生 → avais oublié' },
      { q: "Il dormait quand ___ le téléphone a sonné.", o: ['soudain', 'la veille', 'autrefois', "d'habitude"], a: 0, e: '突发事件 → soudain' },
      { q: 'Nous nous sommes mariés en mai. ___, nous étions partis en voyage.', o: ['La veille', 'Le lendemain', 'Demain', 'Hier'], a: 0, e: '叙事中「前一天」→ la veille，配愈过去时' },
      { q: 'Elle ___ compte de son erreur.', o: ["s'est rendu", "s'est rendue", 'a rendu', 'se rend'], a: 0, e: 'se rendre compte：compte 是直接宾语，所以 rendu 不配合（经典难点）' },
      { q: 'Le concert a ___ dans un vieux théâtre.', o: ['eu lieu', 'pris lieu', 'été lieu', 'fait lieu'], a: 0, e: 'take place = avoir lieu' },
    ],
  },
  {
    id: 'b1-6', level: 'B1', icon: '🌍', title: "L'environnement", zh: '环境保护与因果表达',
    goal: '讨论环境问题，熟练使用表示原因和结果的连接词。',
    vocab: [
      ["l'environnement (m.)", 'environment'],
      ['le réchauffement climatique', 'global warming'],
      ['la pollution', 'pollution'],
      ['recycler', 'to recycle'],
      ['les déchets (m.)', 'waste / rubbish'],
      ["l'énergie (f.)", 'energy'],
      ['le gaspillage', 'waste (wasting)', 'gaspiller = to waste'],
      ['protéger', 'to protect'],
      ['la planète', 'planet'],
      ['durable', 'sustainable', '≈ durable；développement durable'],
      ['les transports en commun (m.)', 'public transport'],
      ['le tri', 'sorting (of rubbish)', 'trier = to sort'],
      ['grâce à', 'thanks to', '≈ grace'],
      ['à cause de', 'because of'],
      ['donc', 'so / therefore'],
      ['par conséquent', 'consequently'],
    ],
    grammar: {
      title: '表达原因与结果',
      html: `<table><tr><th>原因</th><th>用法</th><th>例子</th></tr>
<tr><td><em>parce que</em></td><td>because，回答 pourquoi</td><td><em>Je prends le vélo parce que c'est écologique.</em></td></tr>
<tr><td><em>car</em></td><td>because（书面，不能放句首）</td><td><em>Il faut agir, car le temps presse.</em></td></tr>
<tr><td><em>puisque</em></td><td>since（原因是已知的）</td><td><em>Puisque tu es là, aide-moi !</em></td></tr>
<tr><td><em>comme</em></td><td>as（放句首）</td><td><em>Comme il pleuvait, nous sommes restés.</em></td></tr>
<tr><td><em>grâce à</em> + 名词</td><td>thanks to（积极）</td><td><em>grâce au recyclage</em></td></tr>
<tr><td><em>à cause de</em> + 名词</td><td>because of（消极）</td><td><em>à cause de la pollution</em></td></tr></table>
<table><tr><th>结果</th><th>例子</th></tr>
<tr><td><em>donc</em>（so）</td><td><em>Il fait chaud, donc j'ouvre la fenêtre.</em></td></tr>
<tr><td><em>alors</em>（so，口语）</td><td><em>J'étais fatigué, alors je suis rentré.</em></td></tr>
<tr><td><em>c'est pourquoi</em>（that's why）</td><td><em>Le plastique pollue ; c'est pourquoi il faut recycler.</em></td></tr>
<tr><td><em>par conséquent</em>（consequently，书面）</td><td><em>Les températures augmentent ; par conséquent, la glace fond.</em></td></tr>
<tr><td><em>si bien que</em>（so that，结果）</td><td><em>Il a beaucoup plu, si bien que la rivière a débordé.</em></td></tr></table>
<div class="box">⚠️ <b>parce que</b> 后接句子，<b>à cause de / grâce à</b> 后接名词：<br>
<em>parce qu'il pleut</em> ✅ · <em>à cause de la pluie</em> ✅ · <em>à cause de il pleut</em> ❌<br>
注意缩合：<em>à cause <b>du</b> bruit</em>、<em>grâce <b>aux</b> efforts</em>。</div>`,
    },
    examples: [
      ['Je prends les transports en commun parce que c\'est moins polluant.', 'I take public transport because it pollutes less.'],
      ['À cause du réchauffement climatique, les glaciers fondent.', 'Because of global warming, glaciers are melting.'],
      ['Grâce au tri, on peut recycler beaucoup de déchets.', 'Thanks to sorting, we can recycle a lot of waste.'],
      ["Il faut protéger la planète, car nous n'en avons qu'une.", 'We must protect the planet, because we only have one.'],
      ["Le gaspillage alimentaire est énorme ; c'est pourquoi il faut agir.", "Food waste is enormous; that's why we must act."],
      ['Comme il y avait des bouchons, je suis venu à vélo.', 'As there were traffic jams, I came by bike.'],
      ["Les énergies renouvelables sont durables, donc elles sont l'avenir.", 'Renewable energies are sustainable, so they are the future.'],
    ],
    quiz: [
      { q: "Je suis en retard ___ la grève.", o: ['à cause de', 'parce que', 'car', 'grâce à'], a: 0, e: '后接名词 + 消极 → à cause de' },
      { q: "J'ai réussi ___ ton aide.", o: ['grâce à', 'à cause de', 'parce que', 'donc'], a: 0, e: '积极原因 → grâce à' },
      { q: "___ il pleuvait, nous sommes restés à la maison.", o: ['Comme', 'Car', 'Donc', 'Grâce à'], a: 0, e: '句首表原因 → comme（car 不能放句首）' },
      { q: "Il fait froid, ___ je mets un pull.", o: ['donc', 'car', 'parce que', 'puisque'], a: 0, e: '结果 → donc' },
      { q: "Les forêts disparaissent ___ de la déforestation.", o: ['à cause', 'parce', 'grâce', 'car'], a: 0, e: 'à cause de' },
      { q: "___ tu as fini, tu peux partir.", o: ['Puisque', 'Car', 'Donc', 'À cause de'], a: 0, e: '已知的原因 → puisque（since）' },
    ],
  },
  {
    id: 'b1-7', level: 'B1', icon: '🎭', title: 'Culture et loisirs', zh: '文化娱乐与指示/主有代词',
    goal: '谈论电影、书籍和展览，推荐作品，掌握 celui-ci / le mien 等代词。',
    vocab: [
      ['le spectacle', 'show / performance', '≈ spectacle'],
      ['la pièce de théâtre', 'play (theatre)'],
      ["l'exposition (f.)", 'exhibition', '≈ exposition'],
      ['le roman', 'novel', '⚠️ 不是 Roman'],
      ["l'auteur (m.)", 'author', '-or → -eur'],
      ['le tableau', 'painting', '≈ tableau'],
      ['la chanson', 'song', '≈ chanson'],
      ['le réalisateur (la réalisatrice)', 'film director'],
      ["l'acteur (l'actrice)", 'actor / actress'],
      ['la séance', 'showing / screening', '电影场次'],
      ['recommander', 'to recommend'],
      ['émouvant(e)', 'moving / touching', '≈ emotion'],
      ['ennuyeux (ennuyeuse)', 'boring', '≈ ennui'],
      ['passionnant(e)', 'gripping / fascinating', '≈ passion'],
      ['la critique', 'review / criticism'],
      ['sortir', 'to go out / to be released', 'Le film sort mercredi.'],
    ],
    grammar: {
      title: '指示代词 celui / celle · 主有代词 le mien',
      html: `<p><b>指示代词</b> ≈ 英语 <i>the one / this one / that one</i>，要和所指名词的阴阳性单复数一致：</p>
<table><tr><th></th><th>阳性</th><th>阴性</th></tr>
<tr><td>单数</td><td><em>celui</em></td><td><em>celle</em></td></tr>
<tr><td>复数</td><td><em>ceux</em></td><td><em>celles</em></td></tr></table>
<p>后面必须跟：<br>① <em>-ci / -là</em>：<em>Quel film ? <b>Celui-ci</b> ou <b>celui-là</b> ?</em>（this one or that one）<br>
② 关系代词：<em><b>Celle qui</b> chante est ma sœur.</em>（The one who…）<br>
③ de：<em>Mon livre et <b>celui de</b> Paul.</em>（Paul's）</p>
<div class="box"><b>主有代词</b> ≈ <i>mine, yours, his…</i>，带定冠词，和<b>被拥有物</b>一致：<br>
<em>le mien / la mienne / les miens / les miennes</em> — mine<br>
<em>le tien / la tienne</em> — yours (tu) · <em>le sien / la sienne</em> — his / hers<br>
<em>le / la nôtre</em> — ours · <em>le / la vôtre</em> — yours (vous) · <em>le / la leur</em> — theirs<br>
<em>Ton roman est passionnant ; <b>le mien</b> est ennuyeux.</em></div>
<p><b>推荐作品：</b><em>Je te le recommande !</em> · <em>Ça vaut le coup.</em>（It's worth it）· <em>J'ai adoré / Je n'ai pas trop aimé.</em></p>`,
    },
    examples: [
      ["Tu as vu le dernier film de cette réalisatrice ? Il est émouvant.", "Have you seen this director's latest film? It's moving."],
      ["Je préfère celui-ci à celui-là.", 'I prefer this one to that one.'],
      ["Ce roman est passionnant, je te le recommande.", 'This novel is gripping, I recommend it to you.'],
      ["Ta place est au premier rang ; la mienne est au fond.", 'Your seat is in the front row; mine is at the back.'],
      ["Les tableaux de Monet sont plus célèbres que ceux de Sisley.", "Monet's paintings are more famous than Sisley's."],
      ["La séance de 20 heures est complète.", 'The 8 pm showing is sold out.'],
      ["Celle qui chante cette chanson est québécoise.", 'The woman who sings this song is from Quebec.'],
      ["L'exposition vaut vraiment le coup.", 'The exhibition is really worth it.'],
    ],
    quiz: [
      { q: 'Quelle robe tu préfères ? ___-ci.', o: ['Celle', 'Celui', 'Ceux', 'Cette'], a: 0, e: 'robe 阴性单数 → celle' },
      { q: 'Mes chaussures sont noires ; ___ de Julie sont rouges.', o: ['celles', 'ceux', 'celle', 'les siennes de'], a: 0, e: 'chaussures 阴性复数 → celles' },
      { q: "C'est ton livre ? Non, c'est ___ (= à moi).", o: ['le mien', 'la mienne', 'mon', 'moi'], a: 0, e: 'livre 阳性 → le mien' },
      { q: 'Ma voiture est vieille, ___ est neuve (à toi).', o: ['la tienne', 'le tien', 'ta', 'la tien'], a: 0, e: 'voiture 阴性 → la tienne' },
      { q: "Le film ? Je te ___ recommande.", o: ['le', 'la', 'lui', 'en'], a: 0, e: '代替 le film → le' },
      { q: "___ qui veulent venir peuvent s'inscrire.", o: ['Ceux', 'Celui', 'Ces', 'Celles-ci'], a: 0, e: 'those who → ceux qui' },
    ],
  },
  {
    id: 'b1-8', level: 'B1', icon: '🗨️', title: 'Il a dit que…', zh: '间接引语与时态配合',
    goal: '转述别人的话和问题，掌握间接引语中的时态变化。',
    vocab: [
      ['affirmer', 'to state / to assert', '≈ affirm'],
      ['expliquer', 'to explain'],
      ['répondre', 'to answer / to respond'],
      ['prétendre', 'to claim', '⚠️ 不是 pretend（假装 = faire semblant）'],
      ['annoncer', 'to announce'],
      ['ajouter', 'to add'],
      ['demander si', 'to ask if/whether'],
      ['promettre', 'to promise'],
      ['avouer', 'to admit / to confess', '≈ avow'],
      ['préciser', 'to specify', '≈ precise'],
      ['se demander', 'to wonder'],
      ['ce que', 'what (object)', 'Dis-moi ce que tu veux.'],
      ['ce qui', 'what (subject)', 'Je ne sais pas ce qui se passe.'],
      ['la rumeur', 'rumour'],
      ['le message', 'message'],
      ['rappeler', 'to call back / to remind'],
    ],
    grammar: {
      title: '间接引语 (discours indirect)',
      html: `<p><b>① 陈述句</b>：用 <em>que</em>（不能省略，英语可以省 <i>that</i>）。</p>
<p><em>Il dit : « Je suis fatigué. »</em> → <em>Il dit <b>qu'il est</b> fatigué.</em></p>
<p><b>② 问句</b>：一般疑问句用 <em>si</em>（if/whether）；特殊疑问句保留疑问词；<em>qu'est-ce que → ce que</em>；<em>qu'est-ce qui → ce qui</em>。</p>
<p><em>« Tu viens ? »</em> → <em>Il demande <b>si</b> je viens.</em><br>
<em>« Qu'est-ce que tu fais ? »</em> → <em>Il demande <b>ce que</b> je fais.</em><br>
<em>« Où habites-tu ? »</em> → <em>Il demande <b>où</b> j'habite.</em>（不倒装）</p>
<p><b>③ 命令句</b>：<em>de + 不定式</em>：<em>« Viens ! »</em> → <em>Il me dit <b>de venir</b>.</em>（≈ <i>He tells me to come</i>）</p>
<div class="box"><b>时态后移</b>（主句为过去时时，和英语 backshift 一样）：<br>
présent → <b>imparfait</b>：<em>Il a dit qu'il <b>était</b> fatigué.</em>（he said he <u>was</u>）<br>
passé composé → <b>plus-que-parfait</b>：<em>Elle a dit qu'elle <b>avait fini</b>.</em>（she <u>had</u> finished）<br>
futur → <b>conditionnel</b>：<em>Il a promis qu'il <b>viendrait</b>.</em>（he <u>would</u> come）</div>
<p>同时注意人称和时间词的变化：<em>demain → le lendemain</em>，<em>hier → la veille</em>，<em>ici → là</em>。</p>`,
    },
    examples: [
      ["Il m'a dit qu'il était malade.", 'He told me he was sick.'],
      ["Elle a demandé si nous étions libres samedi.", 'She asked if we were free on Saturday.'],
      ["Je me demande ce qu'il va faire.", "I wonder what he's going to do."],
      ["Ils ont promis qu'ils viendraient.", 'They promised they would come.'],
      ["Le directeur a annoncé que l'entreprise avait gagné le contrat.", 'The director announced that the company had won the contract.'],
      ["Ma mère m'a dit de ranger ma chambre.", 'My mother told me to tidy my room.'],
      ["Dis-moi ce qui ne va pas.", "Tell me what's wrong."],
      ["Il prétend qu'il n'a rien vu.", 'He claims he saw nothing.'],
    ],
    quiz: [
      { q: "« Je suis fatigué. » → Il a dit qu'il ___ fatigué.", o: ['était', 'est', 'sera', 'a été'], a: 0, e: '主句过去时：présent → imparfait' },
      { q: "« Tu viens ? » → Elle demande ___ je viens.", o: ['si', 'que', 'ce que', 'quoi'], a: 0, e: '一般疑问句 → si' },
      { q: "« Qu'est-ce que tu veux ? » → Il demande ___ je veux.", o: ['ce que', "qu'est-ce que", 'que', 'quoi'], a: 0, e: "qu'est-ce que → ce que" },
      { q: "« Je viendrai. » → Il a promis qu'il ___.", o: ['viendrait', 'viendra', 'venait', 'vient'], a: 0, e: 'futur → conditionnel' },
      { q: "« J'ai fini. » → Elle a dit qu'elle ___ fini.", o: ['avait', 'a', 'aurait', 'était'], a: 0, e: 'passé composé → plus-que-parfait' },
      { q: "« Ferme la porte ! » → Il m'a dit ___ la porte.", o: ['de fermer', 'que je ferme', 'fermer', 'à fermer'], a: 0, e: '命令句 → de + 不定式' },
    ],
  },
);
