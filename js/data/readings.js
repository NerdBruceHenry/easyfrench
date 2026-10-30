/* 分级阅读：每级 3 篇。gloss 为文中词形的释义（点词查义时优先使用） */
EF.readings.push(
  {
    id: 'r-a1-1', level: 'A1', icon: '👩', title: 'Je m\'appelle Camille', zh: '自我介绍',
    text: `Bonjour ! Je m'appelle Camille. J'ai vingt-cinq ans et je suis française. J'habite à Lyon, une grande ville dans le centre de la France.

Je suis professeure d'anglais dans un lycée. J'aime beaucoup mon travail. Le matin, je prends le bus. Le soir, je cuisine et je regarde des séries.

J'ai un frère, Thomas. Il a vingt ans et il est étudiant à Paris. Nous avons aussi un chat, Minou. Il est noir et très mignon !

Le week-end, j'adore aller au marché avec mes amis. Et toi, tu habites où ?`,
    gloss: {
      'je m\'appelle': 'my name is', ans: 'years (old)', française: 'French (f.)', habite: 'live', ville: 'city', centre: 'centre',
      professeure: 'teacher (f.)', lycée: 'high school', beaucoup: 'a lot', travail: 'work / job', prends: 'take', cuisine: 'cook(s)',
      regarde: 'watch', séries: 'TV series', frère: 'brother', étudiant: 'student', avons: 'have (we)', aussi: 'also', noir: 'black',
      mignon: 'cute', marché: 'market', amis: 'friends', toi: 'you', où: 'where', adore: 'love', grande: 'big', soir: 'evening', matin: 'morning',
    },
    questions: [
      { q: 'Camille a quel âge ?', o: ['25 ans', '20 ans', '35 ans', '15 ans'], a: 0 },
      { q: 'Où habite Camille ?', o: ['À Lyon', 'À Paris', 'À Marseille', 'À Nice'], a: 0 },
      { q: 'Quel est son métier ?', o: ["Professeure d'anglais", 'Étudiante', 'Médecin', 'Cuisinière'], a: 0 },
      { q: 'Qui est Minou ?', o: ['Un chat', 'Son frère', 'Une amie', 'Un chien'], a: 0 },
    ],
  },
  {
    id: 'r-a1-2', level: 'A1', icon: '🥖', title: 'À la boulangerie', zh: '在面包店',
    text: `Il est huit heures du matin. Paul entre dans la boulangerie de son quartier.

— Bonjour Madame !
— Bonjour Monsieur. Qu'est-ce que vous voulez ?
— Je voudrais une baguette et deux croissants, s'il vous plaît.
— Voilà. Et avec ça ?
— Euh… un pain au chocolat aussi, pour ma fille.
— Très bien. Ça fait quatre euros cinquante.
— Voilà cinq euros.
— Merci. Et voici votre monnaie : cinquante centimes. Bonne journée !
— Merci, à vous aussi. Au revoir !

Paul rentre à la maison. Sa fille Léa est très contente : elle adore les pains au chocolat !`,
    gloss: {
      boulangerie: 'bakery', quartier: 'neighbourhood', voulez: 'want (vous)', voudrais: 'would like', voilà: 'here it is / there you go',
      'avec ça': 'anything else? (lit. with that)', fille: 'daughter', 'ça fait': "that comes to", monnaie: 'change (coins)',
      'bonne journée': 'have a nice day', rentre: 'goes back home', contente: 'happy (f.)', 'pain au chocolat': 'chocolate croissant',
      euros: 'euros', centimes: 'cents', entre: 'enters', heures: "o'clock / hours", maison: 'house / home',
    },
    questions: [
      { q: 'Quelle heure est-il ?', o: ['8 heures', '9 heures', '7 heures', 'Midi'], a: 0 },
      { q: "Qu'est-ce que Paul achète ?", o: ['Une baguette, deux croissants et un pain au chocolat', 'Deux baguettes', 'Un gâteau', 'Trois croissants'], a: 0 },
      { q: 'Combien Paul paie-t-il ?', o: ['4,50 €', '5 €', '5,50 €', '4 €'], a: 0 },
      { q: '« Monnaie » ici veut dire :', o: ['change (coins given back)', 'money in general', 'Monday', 'a bank'], a: 0 },
    ],
  },
  {
    id: 'r-a1-3', level: 'A1', icon: '📱', title: 'Un message de Julie', zh: '朋友的短信',
    text: `Salut Marc !

Ça va ? Moi, ça va très bien. Samedi, c'est mon anniversaire ! Je vais faire une petite fête chez moi. Tu es libre ?

La fête commence à dix-neuf heures. Il y a de la musique, des jeux et un grand gâteau au chocolat. Mes amis de l'université vont venir aussi.

J'habite 12, rue Victor Hugo, au troisième étage. Ce n'est pas loin de la gare.

Tu peux apporter des boissons, s'il te plaît ? Réponds-moi vite !

Bisous,
Julie`,
    gloss: {
      anniversaire: 'birthday', fête: 'party', 'chez moi': 'at my place', libre: 'free', commence: 'starts', jeux: 'games',
      gâteau: 'cake', venir: 'to come', étage: 'floor', troisième: 'third', loin: 'far', gare: 'train station', peux: 'can (tu)',
      apporter: 'to bring', boissons: 'drinks', réponds: 'answer (imperative)', vite: 'quickly', bisous: 'kisses (informal sign-off)',
    },
    questions: [
      { q: 'Pourquoi Julie fait une fête ?', o: ["C'est son anniversaire", "C'est Noël", 'Elle a un nouveau travail', 'Elle déménage'], a: 0 },
      { q: 'La fête commence à quelle heure ?', o: ['19 h', '17 h', '20 h', '21 h'], a: 0 },
      { q: "Qu'est-ce que Marc doit apporter ?", o: ['Des boissons', 'Un gâteau', 'De la musique', 'Des jeux'], a: 0 },
      { q: "L'appartement de Julie est…", o: ['près de la gare', 'loin de la gare', 'au premier étage', 'dans une autre ville'], a: 0 },
    ],
  },
  {
    id: 'r-a2-1', level: 'A2', icon: '🚆', title: 'Mon premier voyage en France', zh: '第一次去法国',
    text: `L'été dernier, je suis allé en France pour la première fois. J'avais un peu peur parce que je ne parlais pas très bien français, mais tout s'est bien passé.

Je suis arrivé à Paris en avion un lundi matin. D'abord, j'ai pris le RER pour aller au centre-ville. Mon hôtel était petit mais très propre, près du jardin du Luxembourg.

Pendant trois jours, j'ai visité les musées et je me suis promené le long de la Seine. Le soir, je mangeais dans de petits restaurants. Les serveurs étaient sympas et ils parlaient lentement pour moi.

Ensuite, j'ai pris le TGV pour Marseille. Le voyage a duré seulement trois heures ! À Marseille, il faisait très chaud et je suis allé à la plage tous les jours.

Je suis rentré chez moi fatigué mais heureux. L'année prochaine, je retournerai en France, et cette fois, je parlerai mieux !`,
    gloss: {
      'été': 'summer', dernier: 'last', 'première fois': 'first time', peur: 'fear', "s'est bien passé": 'went well', arrivé: 'arrived',
      avion: 'plane', pris: 'took', propre: 'clean', 'me suis promené': 'walked / strolled', 'le long de': 'along', serveurs: 'waiters',
      lentement: 'slowly', ensuite: 'then', 'a duré': 'lasted', seulement: 'only', chaud: 'hot', plage: 'beach', 'tous les jours': 'every day',
      'suis rentré': 'came back', fatigué: 'tired', heureux: 'happy', retournerai: 'will go back', mieux: 'better', pendant: 'for / during',
      RER: 'Paris suburban train', TGV: 'high-speed train',
    },
    questions: [
      { q: "Pourquoi l'auteur avait un peu peur ?", o: ['Il ne parlait pas bien français', "Il n'aimait pas l'avion", 'Il était malade', "Il n'avait pas d'hôtel"], a: 0 },
      { q: 'Combien de temps est-il resté à Paris ?', o: ['Trois jours', 'Une semaine', 'Un jour', 'Un mois'], a: 0 },
      { q: 'Comment est-il allé à Marseille ?', o: ['En TGV', 'En avion', 'En voiture', 'En bus'], a: 0 },
      { q: "Qu'est-ce qu'il a fait à Marseille ?", o: ['Il est allé à la plage', 'Il a visité des musées', 'Il a travaillé', 'Il a pris le RER'], a: 0 },
    ],
  },
  {
    id: 'r-a2-2', level: 'A2', icon: '👵', title: 'Les souvenirs de ma grand-mère', zh: '奶奶的回忆',
    text: `Ma grand-mère s'appelle Jeanne. Elle a quatre-vingt-deux ans. Quand j'étais petit, elle me racontait souvent des histoires de son enfance.

Elle habitait dans un petit village en Bretagne. Sa famille avait une ferme avec des vaches et des poules. Il n'y avait pas de télévision et pas d'Internet ! Le soir, toute la famille se réunissait autour de la cheminée. Son père jouait de l'accordéon et tout le monde chantait.

Pour aller à l'école, elle marchait cinq kilomètres chaque matin, même quand il pleuvait. L'hiver, il faisait très froid dans la classe.

Un jour, quand elle avait dix-huit ans, elle a rencontré mon grand-père à un bal. Ils ont dansé toute la nuit. Un an plus tard, ils se sont mariés et ils sont partis vivre à Paris.

Aujourd'hui, ma grand-mère dit : « La vie était difficile, mais nous étions heureux avec peu de choses. »`,
    gloss: {
      racontait: 'used to tell', histoires: 'stories', enfance: 'childhood', village: 'village', ferme: 'farm', vaches: 'cows', poules: 'hens',
      'se réunissait': 'used to gather', autour: 'around', cheminée: 'fireplace', jouait: 'used to play', accordéon: 'accordion',
      chantait: 'used to sing', marchait: 'used to walk', chaque: 'each / every', même: 'even', pleuvait: 'was raining', hiver: 'winter',
      'a rencontré': 'met', bal: 'dance (party)', 'ont dansé': 'danced', 'se sont mariés': 'got married', vivre: 'to live', peu: 'little / few',
      choses: 'things', difficile: 'difficult', Bretagne: 'Brittany (region in western France)',
    },
    questions: [
      { q: 'Où habitait Jeanne quand elle était enfant ?', o: ['Dans un village en Bretagne', 'À Paris', 'Dans une grande ville', 'À la montagne'], a: 0 },
      { q: 'Que faisait la famille le soir ?', o: ['Elle chantait autour de la cheminée', 'Elle regardait la télévision', 'Elle allait au cinéma', 'Elle dormait tôt'], a: 0 },
      { q: 'Où Jeanne a-t-elle rencontré son mari ?', o: ['À un bal', "À l'école", 'À la ferme', 'À Paris'], a: 0 },
      { q: "Dans ce texte, l'imparfait (habitait, jouait…) sert surtout à :", o: ['décrire des habitudes passées', 'raconter un événement unique', 'parler du futur', 'donner un ordre'], a: 0 },
    ],
  },
  {
    id: 'r-a2-3', level: 'A2', icon: '🏡', title: 'Petite annonce : appartement à louer', zh: '租房广告与邮件',
    text: `À LOUER — Bordeaux centre. Bel appartement de 45 m² au deuxième étage avec ascenseur. Une chambre, un salon lumineux, une cuisine équipée et une salle de bains avec douche. Balcon avec vue sur le parc. Proche du tramway et des commerces. Loyer : 750 € par mois, charges comprises. Libre le 1er septembre. Animaux non acceptés.

Bonjour,

Je m'appelle Lucas et je vous écris au sujet de votre annonce. Je suis étudiant en master à l'université de Bordeaux et je cherche un appartement pour la rentrée.

Votre appartement m'intéresse beaucoup, surtout parce qu'il est près du tramway. Est-ce qu'il est meublé ? Est-ce que je pourrais le visiter la semaine prochaine ? Je suis disponible tous les après-midi.

Merci d'avance pour votre réponse.
Cordialement,
Lucas Martin`,
    gloss: {
      'à louer': 'for rent', ascenseur: 'lift / elevator', chambre: 'bedroom', salon: 'living room', lumineux: 'bright', équipée: 'fitted / equipped',
      'salle de bains': 'bathroom', douche: 'shower', balcon: 'balcony', vue: 'view', proche: 'close', commerces: 'shops', loyer: 'rent',
      'charges comprises': 'bills included', libre: 'available', animaux: 'pets / animals', 'au sujet de': 'about / regarding', annonce: 'ad',
      rentrée: 'start of the academic year', meublé: 'furnished', disponible: 'available', "merci d'avance": 'thanks in advance',
      cordialement: 'kind regards', surtout: 'especially', cherche: 'am looking for', pourrais: 'could',
    },
    questions: [
      { q: "Combien de chambres a l'appartement ?", o: ['Une', 'Deux', 'Trois', 'Aucune'], a: 0 },
      { q: '« Charges comprises » signifie :', o: ['Les factures sont incluses dans le loyer', "Il faut payer l'électricité en plus", "L'appartement est gratuit", 'Il y a un parking'], a: 0 },
      { q: "Pourquoi Lucas s'intéresse à l'appartement ?", o: ['Il est près du tramway', 'Il est grand', 'On peut avoir un chat', 'Il est pas cher'], a: 0 },
      { q: 'Quelle question Lucas ne pose pas ?', o: ['Si on accepte les animaux', "Si l'appartement est meublé", "S'il peut le visiter", 'Rien — il pose les trois'], a: 0 },
    ],
  },
  {
    id: 'r-b1-1', level: 'B1', icon: '🚲', title: 'Paris à vélo', zh: '骑行的巴黎',
    text: `Depuis quelques années, le paysage parisien a beaucoup changé. Là où les voitures dominaient autrefois, on voit maintenant des milliers de cyclistes. La mairie a en effet créé des centaines de kilomètres de pistes cyclables, et certaines grandes avenues ont même été partiellement fermées à la circulation automobile.

Pour beaucoup de Parisiens, le vélo est devenu le moyen de transport le plus pratique. « Avant, je mettais quarante minutes pour aller au bureau en métro, raconte Sophie, 34 ans. Maintenant, à vélo, il me faut vingt minutes, et je fais du sport en même temps ! »

Cependant, tout le monde n'est pas satisfait. Certains automobilistes se plaignent des embouteillages, qui seraient plus fréquents depuis la réduction du nombre de voies. Les commerçants, eux, craignaient de perdre des clients, mais beaucoup reconnaissent aujourd'hui que les rues plus calmes attirent davantage de piétons.

Les spécialistes pensent que cette transformation est nécessaire pour lutter contre la pollution et le réchauffement climatique. Reste à savoir si d'autres villes françaises suivront l'exemple de la capitale.`,
    gloss: {
      depuis: 'since / for', paysage: 'landscape', dominaient: 'used to dominate', milliers: 'thousands', cyclistes: 'cyclists', mairie: 'town hall',
      'en effet': 'indeed', centaines: 'hundreds', 'pistes cyclables': 'cycle lanes', partiellement: 'partially', circulation: 'traffic',
      moyen: 'means', mettais: 'used to take (time)', 'il me faut': 'I need / it takes me', cependant: 'however', satisfait: 'satisfied',
      automobilistes: 'drivers', 'se plaignent': 'complain', embouteillages: 'traffic jams', seraient: 'would be / are said to be',
      voies: 'lanes', commerçants: 'shopkeepers', craignaient: 'feared', reconnaissent: 'admit / recognise', attirent: 'attract',
      davantage: 'more', piétons: 'pedestrians', lutter: 'to fight', 'reste à savoir': 'it remains to be seen', suivront: 'will follow',
    },
    questions: [
      { q: "Qu'a fait la mairie de Paris ?", o: ['Elle a créé des pistes cyclables', 'Elle a interdit les vélos', 'Elle a construit des parkings', 'Elle a fermé le métro'], a: 0 },
      { q: 'Pourquoi Sophie préfère le vélo ?', o: ["C'est plus rapide et elle fait du sport", "C'est moins cher", "Elle n'aime pas le métro", 'Elle habite loin'], a: 0 },
      { q: 'Que pensent aujourd\'hui beaucoup de commerçants ?', o: ['Les rues calmes attirent plus de piétons', 'Ils ont perdu tous leurs clients', 'Il faut rouvrir les avenues', 'Les vélos sont dangereux'], a: 0 },
      { q: 'Le conditionnel « seraient plus fréquents » indique :', o: ["une information qui n'est pas confirmée", 'une certitude', 'un ordre', 'un souhait'], a: 0 },
    ],
  },
  {
    id: 'r-b1-2', level: 'B1', icon: '📵', title: 'Une semaine sans smartphone', zh: '一周不用手机',
    text: `Le mois dernier, j'ai décidé de faire une expérience : vivre une semaine entière sans smartphone. Je me suis rendu compte que je passais plus de cinq heures par jour sur mon téléphone, et cela m'inquiétait.

Les deux premiers jours ont été les plus difficiles. Je cherchais sans arrêt mon téléphone dans ma poche, et j'avais l'impression de rater des informations importantes. Le matin, sans réveil sur mon portable, j'ai dû acheter un vieux réveil dans une brocante !

Mais à partir du troisième jour, quelque chose a changé. J'ai recommencé à lire des livres, ce que je n'avais pas fait depuis des mois. Dans le métro, j'observais les gens autour de moi au lieu de regarder un écran. J'ai même discuté avec une dame âgée qui m'a raconté toute sa vie !

À la fin de la semaine, je me sentais plus calme et je dormais mieux. Bien sûr, j'ai repris mon smartphone, car il est difficile de s'en passer complètement. Mais maintenant, je le laisse dans une autre pièce le soir, et je n'ai plus de notifications sur les réseaux sociaux. Si vous vous sentez dépendant, je vous conseille d'essayer : vous serez surpris !`,
    gloss: {
      expérience: 'experiment', entière: 'whole', 'me suis rendu compte': 'realised', inquiétait: 'worried', 'sans arrêt': 'constantly',
      poche: 'pocket', rater: 'to miss', réveil: 'alarm clock', portable: 'mobile phone', 'ai dû': 'had to', brocante: 'flea market',
      'à partir du': 'from', recommencé: 'started again', 'ce que': 'which / what', observais: 'used to observe', 'au lieu de': 'instead of',
      écran: 'screen', âgée: 'elderly', 'me sentais': 'felt', repris: 'took back', "s'en passer": 'to do without it', laisse: 'leave',
      pièce: 'room', conseille: 'advise', surpris: 'surprised', dépendant: 'addicted / dependent',
    },
    questions: [
      { q: "Pourquoi l'auteur a fait cette expérience ?", o: ['Il passait trop de temps sur son téléphone', 'Son téléphone était cassé', 'Pour un travail scolaire', 'Il voulait économiser'], a: 0 },
      { q: 'Quand est-ce que ça a commencé à aller mieux ?', o: ['À partir du troisième jour', 'Dès le premier jour', 'Le dernier jour', 'Jamais'], a: 0 },
      { q: "Qu'a-t-il fait dans le métro ?", o: ['Il a observé les gens et discuté', 'Il a dormi', 'Il a écouté de la musique', 'Il a travaillé'], a: 0 },
      { q: 'Quelle est sa conclusion ?', o: ["Il utilise son téléphone de façon plus raisonnable", "Il n'utilise plus jamais de smartphone", "L'expérience était inutile", 'Il a acheté un nouveau smartphone'], a: 0 },
    ],
  },
  {
    id: 'r-b1-3', level: 'B1', icon: '🧀', title: 'Le repas gastronomique des Français', zh: '法国人的餐桌',
    text: `En 2010, l'UNESCO a inscrit le « repas gastronomique des Français » au patrimoine culturel immatériel de l'humanité. Ce n'est pas un plat en particulier qui a été récompensé, mais une pratique sociale : l'art de se réunir autour d'une table pour célébrer les moments importants de la vie.

Un repas traditionnel suit un ordre précis. On commence par l'apéritif, puis viennent l'entrée, le plat principal, le fromage et enfin le dessert. Le tout peut durer plusieurs heures ! Pendant le repas, on parle beaucoup — de la nourriture, bien sûr, mais aussi de politique, de culture ou de souvenirs de famille.

Pourtant, les habitudes changent. Selon plusieurs études, les Français passent moins de temps à table qu'il y a vingt ans, surtout en semaine. Les jeunes mangent plus souvent devant un écran ou commandent des plats livrés à domicile.

Malgré cela, le déjeuner du dimanche en famille reste un rituel pour beaucoup. Et quand on demande aux Français ce qui représente le mieux leur pays, la gastronomie arrive presque toujours en tête de liste.`,
    gloss: {
      inscrit: 'listed / registered', patrimoine: 'heritage', immatériel: 'intangible', humanité: 'humanity', plat: 'dish',
      récompensé: 'rewarded', pratique: 'practice', 'se réunir': 'to get together', célébrer: 'to celebrate', suit: 'follows',
      précis: 'precise', apéritif: 'pre-dinner drink', entrée: 'starter (⚠️ not main course)', principal: 'main', durer: 'to last',
      nourriture: 'food', souvenirs: 'memories', pourtant: 'yet / however', habitudes: 'habits', selon: 'according to', études: 'studies',
      commandent: 'order', livrés: 'delivered', 'à domicile': 'to the home', malgré: 'despite', reste: 'remains', 'en tête': 'at the top',
    },
    questions: [
      { q: "Qu'est-ce que l'UNESCO a reconnu ?", o: ['Une pratique sociale autour du repas', 'Un plat français précis', 'Le vin français', 'Les restaurants parisiens'], a: 0 },
      { q: "Dans un repas traditionnel, qu'est-ce qui vient juste avant le dessert ?", o: ['Le fromage', "L'entrée", "L'apéritif", 'Le plat principal'], a: 0 },
      { q: 'Quelle évolution le texte mentionne-t-il ?', o: ['Les Français passent moins de temps à table', 'Les Français mangent plus de fromage', 'Les repas sont plus longs', 'Les jeunes cuisinent plus'], a: 0 },
      { q: '« Entrée » dans un menu français, c\'est :', o: ['le plat avant le plat principal', 'le plat principal', 'la porte du restaurant', 'le dessert'], a: 0 },
    ],
  },
  {
    id: 'r-b2-1', level: 'B2', icon: '🏢', title: 'Le télétravail : révolution ou illusion ?', zh: '远程办公：革命还是幻象？',
    text: `Il y a encore quelques années, le télétravail restait marginal en France. La crise sanitaire de 2020 a tout bouleversé : du jour au lendemain, des millions de salariés ont dû installer leur bureau dans leur salon. Aujourd'hui, si le travail à distance s'est durablement installé, le débat sur ses effets est loin d'être clos.

Ses partisans mettent en avant des avantages indéniables. En supprimant les trajets quotidiens, souvent longs et épuisants dans les grandes agglomérations, le télétravail permettrait de gagner du temps, de réduire le stress et de mieux concilier vie professionnelle et vie personnelle. Certaines études suggèrent même que la productivité augmente lorsque les employés peuvent organiser librement leur journée.

Néanmoins, ce mode d'organisation n'est pas sans risques. Nombre de salariés évoquent un sentiment d'isolement, voire une perte de sens, faute d'échanges informels avec leurs collègues. La frontière entre le bureau et la maison tend par ailleurs à s'effacer, si bien que certains finissent par travailler davantage qu'auparavant. C'est d'ailleurs pour cette raison que la loi française reconnaît désormais un « droit à la déconnexion ».

Enfin, il convient de rappeler que le télétravail reste un privilège : il ne concerne guère les ouvriers, les soignants ou les employés du commerce, dont la présence physique est indispensable. Loin d'être une révolution pour tous, il risque ainsi de creuser de nouvelles inégalités. La question n'est donc peut-être pas de savoir s'il faut l'encourager, mais comment l'encadrer pour qu'il profite au plus grand nombre.`,
    gloss: {
      marginal: 'marginal / rare', 'crise sanitaire': 'health crisis', bouleversé: 'turned upside down', 'du jour au lendemain': 'overnight',
      'à distance': 'remote', durablement: 'lastingly', clos: 'closed', partisans: 'supporters', 'mettent en avant': 'highlight',
      indéniables: 'undeniable', supprimant: 'eliminating', trajets: 'commutes / journeys', quotidiens: 'daily', épuisants: 'exhausting',
      agglomérations: 'urban areas', permettrait: 'would allow', concilier: 'to reconcile / balance', néanmoins: 'nevertheless',
      nombre: 'many', évoquent: 'mention', isolement: 'isolation', voire: 'or even', 'perte de sens': 'loss of meaning', 'faute de': 'for lack of',
      'faute d\'échanges': 'for lack of exchanges', frontière: 'boundary', "s'effacer": 'to fade', 'si bien que': 'so that (result)',
      davantage: 'more', auparavant: 'before', désormais: 'from now on / now', convient: 'is appropriate', guère: 'hardly',
      ouvriers: 'manual workers', soignants: 'healthcare workers', creuser: 'to deepen / dig', encadrer: 'to regulate / frame',
      profite: 'benefits', 'droit à la déconnexion': 'right to disconnect',
    },
    questions: [
      { q: "Selon le texte, qu'est-ce qui a accéléré le télétravail en France ?", o: ['La crise sanitaire de 2020', 'Une nouvelle loi', "L'augmentation des loyers", 'Les grèves des transports'], a: 0 },
      { q: 'Quel inconvénient du télétravail est mentionné ?', o: ["Le sentiment d'isolement", 'La baisse des salaires', 'Le coût des ordinateurs', 'Le manque de bureaux'], a: 0 },
      { q: 'Pourquoi le télétravail risque-t-il de « creuser de nouvelles inégalités » ?', o: ['Beaucoup de métiers ne peuvent pas être exercés à distance', 'Il coûte cher aux entreprises', 'Il est interdit dans certaines villes', 'Les jeunes ne veulent pas télétravailler'], a: 0 },
      { q: 'Quelle est la position finale de l\'auteur ?', o: ["Il faut réfléchir à la manière d'encadrer le télétravail", 'Il faut interdire le télétravail', 'Le télétravail est parfait', "Le télétravail n'a aucun effet"], a: 0 },
      { q: 'Dans le texte, « voire » signifie :', o: ['or even', 'to see', 'true', 'nevertheless'], a: 0 },
    ],
  },
  {
    id: 'r-b2-2', level: 'B2', icon: '🗣️', title: 'Le français, une langue en mouvement', zh: '流动的法语',
    text: `On imagine volontiers le français comme une langue figée, protégée par les quarante « Immortels » de l'Académie française, gardiens sévères de la norme. La réalité est bien plus nuancée. Parlé par plus de 320 millions de personnes sur les cinq continents, le français ne cesse d'évoluer, souvent loin de Paris.

Au Québec, par exemple, on « clavarde » plutôt que de « chatter », on fait son « magasinage » le samedi et on stationne sa voiture plutôt que de la garer. En Afrique, où vit désormais la majorité des francophones, la langue s'enrichit chaque jour d'expressions nouvelles : en Côte d'Ivoire, « enjailler » signifie s'amuser, et un « go » désigne une petite amie. Ces mots, d'abord considérés comme des écarts, finissent parfois par entrer dans les dictionnaires.

En France même, les jeunes inventent constamment de nouveaux termes, empruntés à l'anglais, à l'arabe ou au verlan. Certains puristes s'en inquiètent et dénoncent un appauvrissement de la langue. Les linguistes, en revanche, y voient plutôt le signe de sa vitalité : une langue qui n'évolue plus est une langue morte.

Reste la question des anglicismes, particulièrement sensible. Faut-il dire « courriel » ou « e-mail », « mot-dièse » ou « hashtag » ? Si les institutions recommandent des équivalents français, l'usage, lui, n'obéit à aucun décret. C'est finalement aux locuteurs qu'il appartient de décider de l'avenir de leur langue.`,
    gloss: {
      volontiers: 'readily', figée: 'frozen / fixed', Immortels: 'members of the Académie française', gardiens: 'guardians', nuancée: 'nuanced',
      cesse: 'stops', clavarder: 'to chat online (Quebec)', clavarde: 'chat online (Quebec)', magasinage: 'shopping (Quebec)', stationne: 'park (a car)',
      garer: 'to park', désormais: 'now / from now on', francophones: 'French speakers', "s'enrichit": 'is enriched', écarts: 'deviations',
      empruntés: 'borrowed', puristes: 'purists', "s'en inquiètent": 'worry about it', dénoncent: 'denounce', appauvrissement: 'impoverishment',
      'en revanche': 'on the other hand', vitalité: 'vitality', anglicismes: 'anglicisms', sensible: 'sensitive (⚠️ not sensible)',
      courriel: 'email (official French)', 'mot-dièse': 'hashtag (official French)', usage: 'usage', obéit: 'obeys', décret: 'decree',
      locuteurs: 'speakers', appartient: 'belongs / is up to', enjailler: 'to have fun (Ivory Coast)',
    },
    questions: [
      { q: 'Où vit la majorité des francophones aujourd\'hui ?', o: ['En Afrique', 'En France', 'Au Québec', 'En Belgique'], a: 0 },
      { q: 'Au Québec, « magasiner » signifie :', o: ['faire du shopping', 'travailler dans un magasin', 'lire un magazine', 'stationner'], a: 0 },
      { q: "Comment les linguistes voient-ils l'évolution de la langue ?", o: ['Comme un signe de vitalité', 'Comme un danger', 'Comme une mode passagère', 'Ils sont indifférents'], a: 0 },
      { q: "Selon l'auteur, qui décide finalement de l'avenir de la langue ?", o: ['Les locuteurs', "L'Académie française", 'Le gouvernement', 'Les dictionnaires'], a: 0 },
      { q: "« Sensible » dans « une question particulièrement sensible » veut dire :", o: ['delicate / sensitive', 'sensible / reasonable', 'visible', 'boring'], a: 0 },
    ],
  },
  {
    id: 'r-b2-3', level: 'B2', icon: '🌱', title: 'Faut-il manger moins de viande ?', zh: '该少吃肉吗？（议论文范例）',
    text: `La consommation de viande fait aujourd'hui l'objet de vifs débats. Alors que nos grands-parents en mangeaient rarement, elle est devenue quotidienne dans de nombreux foyers. Faut-il pour autant la réduire ? Nous examinerons d'abord les arguments en faveur d'une diminution, avant de considérer les limites de cette position.

Tout d'abord, l'impact environnemental de l'élevage est considérable. Selon la FAO, celui-ci serait responsable d'environ 14 % des émissions mondiales de gaz à effet de serre. En outre, il nécessite d'immenses surfaces agricoles et de grandes quantités d'eau. Par ailleurs, de nombreux médecins recommandent de limiter la viande rouge, dont une consommation excessive augmenterait le risque de certaines maladies.

Cependant, il serait réducteur de diaboliser la viande. D'une part, elle constitue une source précieuse de protéines, de fer et de vitamine B12. D'autre part, dans certaines régions, l'élevage fait partie du patrimoine et fait vivre des milliers d'agriculteurs. Enfin, toutes les viandes ne se valent pas : un élevage local et extensif n'a pas le même impact qu'une production industrielle.

En conclusion, plutôt que de prôner la suppression totale de la viande, il semble plus raisonnable d'encourager une consommation modérée et de qualité. Manger moins, mais mieux : tel pourrait être le compromis entre plaisir, santé et respect de la planète.`,
    gloss: {
      consommation: 'consumption', "fait l'objet de": 'is the subject of', vifs: 'heated', foyers: 'households', 'pour autant': 'for all that',
      diminution: 'reduction', élevage: 'livestock farming', considérable: 'considerable', serait: 'is said to be', émissions: 'emissions',
      'gaz à effet de serre': 'greenhouse gases', 'en outre': 'furthermore', nécessite: 'requires', surfaces: 'areas', 'par ailleurs': 'besides',
      augmenterait: 'would increase', réducteur: 'simplistic', diaboliser: 'to demonise', précieuse: 'valuable', fer: 'iron',
      patrimoine: 'heritage', agriculteurs: 'farmers', 'ne se valent pas': 'are not equivalent', extensif: 'extensive (low-intensity)',
      prôner: 'to advocate', suppression: 'elimination', modérée: 'moderate', tel: 'such', compromis: 'compromise',
    },
    questions: [
      { q: 'Quelle est la structure de ce texte ?', o: ['Introduction, arguments pour, arguments contre, conclusion', 'Un récit chronologique', 'Une lettre formelle', 'Un dialogue'], a: 0 },
      { q: "Quel argument est utilisé CONTRE la réduction de la viande ?", o: ["L'élevage fait vivre des agriculteurs", "L'élevage produit des gaz à effet de serre", "L'élevage utilise beaucoup d'eau", 'La viande rouge peut être mauvaise pour la santé'], a: 0 },
      { q: 'Quelle est la conclusion de l\'auteur ?', o: ['Manger moins de viande, mais de meilleure qualité', 'Arrêter complètement la viande', 'Manger plus de viande', 'Ne rien changer'], a: 0 },
      { q: 'Quel connecteur introduit la partie « contre » ?', o: ['Cependant', 'Tout d\'abord', 'En outre', 'En conclusion'], a: 0 },
    ],
  },
);
