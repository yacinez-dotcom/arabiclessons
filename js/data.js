/* ═══════════════════════════════════════════════════════════════
   MADRASA AL-ARABIYYA — Données des textes et niveaux
   Pour ajouter un texte : créer un objet de la même structure
   et l'ajouter dans le tableau TEXTS[niveau].
═══════════════════════════════════════════════════════════════ */

"use strict";

/* ── Utilitaire : supprime les voyelles (tashkeel) ── */
const strip = s => s.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');

/* ═══════════════════════════════════════════════════
   DÉFINITION DES NIVEAUX
═══════════════════════════════════════════════════ */
const LEVELS = [
  { id: 'A1', name: 'Débutant',        ar: 'مبتدئ' },
  { id: 'A2', name: 'Élémentaire',     ar: 'أساسي' },
  { id: 'B1', name: 'Intermédiaire',   ar: 'متوسط' },
  { id: 'B2', name: 'Interm. avancé',  ar: 'متوسط متقدم' },
  { id: 'C1', name: 'Avancé',          ar: 'متقدم' },
  { id: 'C2', name: 'Maîtrise',        ar: 'إتقان' },
];

/* ═══════════════════════════════════════════════════
   TEXTE A1 — يَوْمٌ فِي الْمَدِينَةِ
   Grammaire : الجملة الاسمية (phrase nominale)
═══════════════════════════════════════════════════ */
const A1_T1 = {
  id: 'a1-1',
  level: 'A1',
  titleW:  'يَوْمٌ فِي الْمَدِينَةِ',
  titleP:  'يوم في المدينة',
  titleFr: 'Un jour dans la ville',

  /* Chaque phrase = tableau de groupes de mots { w: avec voyelles, t: traduction FR } */
  sentences: [
    [
      { w: 'هَذَا',      t: 'voici, c\'est — démonstratif masc.' },
      { w: 'أَحْمَدُ',   t: 'Ahmad — prénom masculin' },
    ],[
      { w: 'هُوَ',       t: 'il' },
      { w: 'طَالِبٌ',   t: 'un étudiant (m.)' },
    ],[
      { w: 'يَسْكُنُ',   t: 'il habite, il réside (Form I · س‑ك‑ن)' },
      { w: 'فِي',        t: 'dans, à, en' },
      { w: 'الْمَدِينَةِ', t: 'la ville' },
    ],[
      { w: 'كُلَّ صَبَاحٍ', t: 'chaque matin' },
      { w: 'يَذْهَبُ',   t: 'il va, il part (Form I · ذ‑ه‑ب)' },
      { w: 'إِلَى',      t: 'vers, à, jusqu\'à' },
      { w: 'الْمَدْرَسَةِ', t: 'l\'école' },
    ],[
      { w: 'الْمَدْرَسَةُ', t: 'l\'école (sujet nominatif)' },
      { w: 'كَبِيرَةٌ',  t: 'grande (adj. fém.)' },
      { w: 'وَجَمِيلَةٌ', t: 'et belle (adj. fém.)' },
    ],[
      { w: 'فِيهَا',     t: 'en elle, à l\'intérieur — fém.' },
      { w: 'أَصْدِقَاءٌ', t: 'des amis (pl. brisé de صَدِيق)' },
      { w: 'كَثِيرُونَ', t: 'nombreux (pl. masc. sain)' },
    ],[
      { w: 'بَعْدَ الدِّرَاسَةِ', t: 'après les cours, après l\'étude' },
      { w: 'يَرْجِعُ',   t: 'il rentre, il retourne (Form I · ر‑ج‑ع)' },
      { w: 'أَحْمَدُ',   t: 'Ahmad — sujet' },
      { w: 'إِلَى الْبَيْتِ', t: 'à la maison' },
    ],[
      { w: 'هُوَ',       t: 'il' },
      { w: 'سَعِيدٌ',   t: 'heureux (adj. · schème فَعِيل)' },
    ],
  ],

  vocabulary: [
    { w: 'هَذَا',             p: 'هذا',             tr: 'hādhā',          fr: 'voici, c\'est (démonstratif masc. sing.)',  fm: 'Pronom démonstratif',              root: 'ه ذ' },
    { w: 'طَالِب',            p: 'طالب',            tr: 'ṭālib',          fr: 'étudiant, apprenant',                      fm: 'Participe actif Form I — schème فَاعِل', root: 'ط ل ب' },
    { w: 'سَكَنَ',            p: 'سكن',             tr: 'sakana',         fr: 'habiter, résider, demeurer',               fm: 'Verbe Form I',                     root: 'س ك ن' },
    { w: 'مَدِينَة',          p: 'مدينة',           tr: 'madīna',         fr: 'ville',                                    fm: 'Nom — schème مَفْعِلَة',           root: 'م د ن' },
    { w: 'صَبَاح',            p: 'صباح',            tr: 'ṣabāḥ',         fr: 'matin',                                    fm: 'Nom — schème فَعَال',              root: 'ص ب ح' },
    { w: 'ذَهَبَ',            p: 'ذهب',             tr: 'dhahaba',        fr: 'aller, partir',                            fm: 'Verbe Form I',                     root: 'ذ ه ب' },
    { w: 'مَدْرَسَة',         p: 'مدرسة',           tr: 'madrasa',        fr: 'école',                                    fm: 'Nom de lieu — schème مَفْعَلَة',   root: 'د ر س' },
    { w: 'كَبِير',            p: 'كبير',            tr: 'kabīr',          fr: 'grand, important',                         fm: 'Adjectif — schème فَعِيل',         root: 'ك ب ر' },
    { w: 'جَمِيل',            p: 'جميل',            tr: 'jamīl',          fr: 'beau, belle',                              fm: 'Adjectif — schème فَعِيل',         root: 'ج م ل' },
    { w: 'أَصْدِقَاء',        p: 'أصدقاء',          tr: 'aṣdiqāʾ',       fr: 'amis (pluriel)',                           fm: 'Pl. brisé de صَدِيق — schème أَفْعِلَاء', root: 'ص د ق' },
    { w: 'كَثِير',            p: 'كثير',            tr: 'kathīr',         fr: 'nombreux, beaucoup de',                    fm: 'Adjectif — schème فَعِيل',         root: 'ك ث ر' },
    { w: 'رَجَعَ',            p: 'رجع',             tr: 'rajaʿa',         fr: 'rentrer, retourner, revenir',              fm: 'Verbe Form I',                     root: 'ر ج ع' },
    { w: 'بَيْت',             p: 'بيت',             tr: 'bayt',           fr: 'maison, demeure',                          fm: 'Nom — schème فَيْعَل',             root: 'ب ي ت' },
    { w: 'سَعِيد',            p: 'سعيد',            tr: 'saʿīd',          fr: 'heureux, content',                         fm: 'Adjectif — schème فَعِيل',         root: 'س ع د' },
  ],

  grammar: {
    concept:    'الجملة الاسمية — La phrase nominale',
    excerptW:   'هُوَ طَالِبٌ · الْمَدْرَسَةُ كَبِيرَةٌ وَجَمِيلَةٌ · هُوَ سَعِيدٌ',
    excerptP:   'هو طالب · المدرسة كبيرة وجميلة · هو سعيد',
    exp:        'En arabe, le verbe <strong>être</strong> au présent n\'existe pas ! Une phrase se forme avec un simple <strong>مُبْتَدَأ (sujet)</strong> + <strong>خَبَر (prédicat)</strong>, sans verbe. C\'est la <strong>الجملة الاسمية</strong> — la phrase nominale. Les deux termes s\'accordent en genre et en nombre.',
    gtblHeaders: ['مبتدأ (Sujet)', 'Rôle', 'خبر (Prédicat)', 'Traduction'],
    table: [
      { v: 'هُوَ',            f: 'مبتدأ',              m: 'طَالِبٌ',                   fr: 'Il est étudiant' },
      { v: 'الْمَدْرَسَةُ',  f: 'مبتدأ',              m: 'كَبِيرَةٌ وَجَمِيلَةٌ',    fr: 'L\'école est grande et belle' },
      { v: 'فِيهَا',         f: 'مبتدأ (شبه جملة)',   m: 'أَصْدِقَاءٌ كَثِيرُونَ',  fr: 'En elle, il y a de nombreux amis' },
      { v: 'هُوَ',            f: 'مبتدأ',              m: 'سَعِيدٌ',                   fr: 'Il est heureux' },
    ],
    note: 'Remarque : le <strong>tanwīn (ـٌ ـٍ ـً)</strong> sur le خبر indique qu\'il est indéfini — طَالِبٌ = "un étudiant". Avec l\'article : هُوَ الطَّالِبُ = "il est l\'étudiant".',
  },
};

/* ═══════════════════════════════════════════════════
   TEXTE B2 — التعليم في العصر الرقمي
   Grammaire : المصدر الصريح (nom verbal, masdar)
═══════════════════════════════════════════════════ */
const B2_T1 = {
  id: 'b2-1',
  level: 'B2',
  titleW:  'التَّعْلِيمُ فِي الْعَصْرِ الرَّقْمِيِّ',
  titleP:  'التعليم في العصر الرقمي',
  titleFr: 'L\'éducation à l\'ère numérique',

  sentences: [
    [
      { w: 'أَحْدَثَتِ',                     t: 'a provoqué / causé (Form IV · ح‑د‑ث)' },
      { w: 'التِّكْنُولُوجِيَا',             t: 'la technologie' },
      { w: 'ثَوْرَةً',                        t: 'une révolution' },
      { w: 'حَقِيقِيَّةً',                   t: 'véritable, réelle' },
      { w: 'فِي مَجَالِ',                    t: 'dans le domaine de' },
      { w: 'التَّعْلِيمِ',                   t: 'l\'éducation, l\'enseignement' },
    ],[
      { w: 'فَبَعْدَ أَنْ كَانَ',            t: 'alors qu\'autrefois' },
      { w: 'الطُّلَّابُ',                    t: 'les étudiants' },
      { w: 'يَعْتَمِدُونَ',                  t: 'dépendaient de (Form VIII · ع‑م‑د)' },
      { w: 'اعْتِمَادًا كُلِّيًّا',         t: 'entièrement (accusatif absolu)' },
      { w: 'عَلَى الْكُتُبِ',               t: 'sur les livres' },
      { w: 'وَالْفُصُولِ الدِّرَاسِيَّةِ', t: 'et les salles de classe' },
      { w: 'أَصْبَحَ بِإِمْكَانِهِمُ',      t: 'il leur est désormais possible' },
      { w: 'الْيَوْمَ',                      t: 'aujourd\'hui' },
      { w: 'الْوُصُولُ',                     t: 'l\'accès (masdar de وَصَلَ)' },
      { w: 'إِلَى مَصَادِرَ',               t: 'à des sources' },
      { w: 'لَا حَصْرَ لَهَا',             t: 'innombrables, sans limite' },
      { w: 'عَبْرَ الْإِنْتَرْنِتِ',       t: 'via internet' },
    ],[
      { w: 'وَيَرَى كَثِيرٌ مِنَ',          t: 'de nombreux … estiment' },
      { w: 'الْمُرَبِّينَ',                  t: 'les éducateurs, les pédagogues' },
      { w: 'أَنَّ هَذَا التَّحَوُّلَ',     t: 'que cette transformation (masdar Form V)' },
      { w: 'يُتِيحُ',                        t: 'permet, offre (Form IV · أَتَاحَ)' },
      { w: 'لِلْمُتَعَلِّمِ',               t: 'à l\'apprenant (participe actif Form V)' },
      { w: 'حُرِّيَّةً أَكْبَرَ',           t: 'une plus grande liberté' },
      { w: 'فِي اخْتِيَارِ مُحْتَوَاهُ',  t: 'dans le choix de son contenu (masdar Form VIII)' },
      { w: 'وَتَحْدِيدِ',                   t: 'et la définition / détermination (masdar Form II)' },
      { w: 'وَتِيرَةِ تَعَلُّمِهِ',         t: 'du rythme de son apprentissage (masdar Form V)' },
    ],[
      { w: 'غَيْرَ أَنَّ',                  t: 'cependant, toutefois' },
      { w: 'ثَمَّةَ',                        t: 'il existe, il y a (particule existentielle)' },
      { w: 'تَحَدِّيَاتٍ جِدِّيَّةً',      t: 'des défis sérieux' },
      { w: 'لَا يُمْكِنُ إِغْفَالُهَا',    t: 'qu\'on ne peut ignorer (masdar Form IV)' },
      { w: 'مِنْهَا',                        t: 'parmi eux / desquels' },
      { w: 'ضَعْفُ الرَّبْطِ بِالشَّبَكَةِ', t: 'la faiblesse de la connexion réseau' },
      { w: 'فِي الْمَنَاطِقِ النَّائِيَةِ', t: 'dans les régions reculées, isolées' },
      { w: 'وَمَا يُسَمَّى',               t: 'et ce qu\'on appelle (passif Form II)' },
      { w: 'بِالْهُوَّةِ الرَّقْمِيَّةِ', t: 'la fracture numérique' },
      { w: 'الَّتِي تُكَرِّسُ',            t: 'qui perpétue, consolide (Form II)' },
      { w: 'الْفَوَارِقَ الاجْتِمَاعِيَّةَ', t: 'les inégalités sociales (pl. de فَارِق)' },
    ],[
      { w: 'وَخَلَصَ',                        t: 'et ils ont conclu' },
      { w: 'بَعْضُ الْبَاحِثِينَ',          t: 'certains chercheurs' },
      { w: 'إِلَى أَنَّ',                    t: 'à la conclusion que' },
      { w: 'التَّعْلِيمَ الْهَجِينَ',       t: 'l\'enseignement hybride' },
      { w: 'الَّذِي يَجْمَعُ بَيْنَ',       t: 'qui combine, qui réunit' },
      { w: 'الْحُضُورِ الْجِسْدِيِّ',      t: 'la présence physique (masdar Form I)' },
      { w: 'وَالتَّعَلُّمِ الْإِلِكْتُرُونِيِّ', t: 'et l\'apprentissage en ligne (masdar Form V)' },
      { w: 'قَدْ يَكُونُ',                   t: 'pourrait être (قَدْ + muḍāriʿ)' },
      { w: 'الْحَلَّ الأَمْثَلَ',           t: 'la solution optimale, idéale' },
      { w: 'لِمُوَاجَهَةِ هَذِهِ التَّحَدِّيَاتِ', t: 'pour faire face à ces défis (masdar Form III)' },
    ],
  ],

  vocabulary: [
    { w: 'أَحْدَثَ',                p: 'أحدث',          tr: 'aḥdatha',          fr: 'provoquer, causer, déclencher',        fm: 'Verbe Form IV',                        root: 'ح د ث' },
    { w: 'ثَوْرَة',                 p: 'ثورة',           tr: 'thawra',           fr: 'révolution',                           fm: 'Nom · schème فَعْلَة',                 root: 'ث و ر' },
    { w: 'اعْتَمَدَ عَلَى',        p: 'اعتمد على',     tr: 'iʿtamada ʿalā',    fr: 'dépendre de, s\'appuyer sur',          fm: 'Verbe Form VIII',                      root: 'ع م د' },
    { w: 'اعْتِمَاد',              p: 'اعتماد',         tr: 'iʿtimād',          fr: 'dépendance, confiance accordée',       fm: 'Masdar Form VIII',                     root: 'ع م د' },
    { w: 'وُصُول',                  p: 'وصول',           tr: 'wuṣūl',            fr: 'accès, arrivée',                       fm: 'Masdar Form I (وَصَلَ)',               root: 'و ص ل' },
    { w: 'مَصَادِر',               p: 'مصادر',          tr: 'maṣādir',          fr: 'sources, ressources (pl.)',            fm: 'Pl. de مَصْدَر · schème مَفَاعِل',    root: 'ص د ر' },
    { w: 'تَحَوُّل',               p: 'تحول',           tr: 'taḥawwul',         fr: 'transformation, changement',           fm: 'Masdar Form V (تَحَوَّلَ)',            root: 'ح و ل' },
    { w: 'أَتَاحَ',                p: 'أتاح',           tr: 'atāḥa',            fr: 'permettre, rendre possible, offrir',   fm: 'Verbe Form IV',                        root: 'ت و ح' },
    { w: 'مُتَعَلِّم',             p: 'متعلم',          tr: 'mutaʿallim',       fr: 'apprenant, élève',                     fm: 'Participe actif Form V',               root: 'ع ل م' },
    { w: 'اخْتِيَار',              p: 'اختيار',         tr: 'ikhtiyār',         fr: 'choix, sélection',                     fm: 'Masdar Form VIII (اخْتَارَ)',          root: 'خ ي ر' },
    { w: 'وَتِيرَة',               p: 'وتيرة',          tr: 'watīra',           fr: 'rythme, cadence, allure',              fm: 'Nom · schème فَعِيلَة',               root: 'و ت ر' },
    { w: 'تَعَلُّم',               p: 'تعلم',           tr: 'taʿallum',         fr: 'apprentissage',                        fm: 'Masdar Form V (تَعَلَّمَ)',            root: 'ع ل م' },
    { w: 'غَيْرَ أَنَّ',           p: 'غير أن',         tr: 'ghayra anna',      fr: 'cependant, or, toutefois',             fm: 'Locution adversative',                 root: '—' },
    { w: 'ثَمَّة',                  p: 'ثمة',            tr: 'thamma',           fr: 'il y a, il existe',                    fm: 'Particule existentielle (adverbe)',     root: '—' },
    { w: 'إِغْفَال',               p: 'إغفال',          tr: 'ighfāl',           fr: 'fait d\'ignorer, négligence',          fm: 'Masdar Form IV (أَغْفَلَ)',            root: 'غ ف ل' },
    { w: 'نَائٍ',                  p: 'نائ',            tr: 'nāʾin',            fr: 'éloigné, reculé, isolé',               fm: 'Participe actif Form I',               root: 'ن أ ي' },
    { w: 'الهُوَّة الرَّقْمِيَّة', p: 'الهوة الرقمية', tr: 'al-huwwa r-raqmiyya', fr: 'la fracture numérique',             fm: 'Expression nominale',                  root: '—' },
    { w: 'كَرَّسَ',                p: 'كرس',            tr: 'karrasa',          fr: 'perpétuer, consolider, ancrer',        fm: 'Verbe Form II',                        root: 'ك ر س' },
    { w: 'فَوَارِق',               p: 'فوارق',          tr: 'fawāriq',          fr: 'inégalités, écarts, différences',      fm: 'Pl. de فَارِق · schème فَوَاعِل',    root: 'ف ر ق' },
    { w: 'خَلَصَ إِلَى',           p: 'خلص إلى',        tr: 'khalaṣa ilā',      fr: 'conclure à, aboutir à',                fm: 'Verbe Form I',                         root: 'خ ل ص' },
    { w: 'هَجِين',                 p: 'هجين',           tr: 'hajīn',            fr: 'hybride, mixte',                       fm: 'Adjectif · schème فَعِيل',             root: 'ه ج ن' },
    { w: 'مُوَاجَهَة',             p: 'مواجهة',         tr: 'muwājaha',         fr: 'fait de faire face, confrontation',    fm: 'Masdar Form III (وَاجَهَ)',            root: 'و ج ه' },
  ],

  grammar: {
    concept:     'المصدر الصريح — Le nom verbal (masdar)',
    excerptW:    'أَصْبَحَ بِإِمْكَانِهِمُ الْوُصُولُ … وَتَحْدِيدِ وَتِيرَةِ تَعَلُّمِهِ … لَا يُمْكِنُ إِغْفَالُهَا',
    excerptP:    'أصبح بإمكانهم الوصول … وتحديد وتيرة تعلمه … لا يمكن إغفالها',
    exp:         'Le <strong>masdar (المصدر)</strong> est le nom verbal de l\'arabe : il nominalise l\'action et peut assumer n\'importe quelle fonction syntaxique — sujet, complément d\'objet, régime d\'une préposition. Ce texte en est particulièrement riche. La bonne nouvelle : les masdar des formes <strong>II à X sont totalement réguliers et prévisibles</strong>, contrairement à la Forme I.',
    gtblHeaders: ['Verbe', 'Forme', 'Masdar', 'Signification'],
    table: [
      { v: 'وَصَلَ',    f: 'Form I',    m: 'وُصُول',      fr: 'l\'accès / arrivée' },
      { v: 'اعْتَمَدَ', f: 'Form VIII', m: 'اعْتِمَاد',   fr: 'la dépendance / confiance' },
      { v: 'تَحَوَّلَ', f: 'Form V',    m: 'تَحَوُّل',    fr: 'la transformation' },
      { v: 'اخْتَارَ',  f: 'Form VIII', m: 'اخْتِيَار',   fr: 'le choix' },
      { v: 'حَدَّدَ',   f: 'Form II',   m: 'تَحْدِيد',    fr: 'la définition / détermination' },
      { v: 'تَعَلَّمَ', f: 'Form V',    m: 'تَعَلُّم',    fr: 'l\'apprentissage' },
      { v: 'أَغْفَلَ',  f: 'Form IV',   m: 'إِغْفَال',    fr: 'le fait d\'ignorer' },
      { v: 'وَاجَهَ',   f: 'Form III',  m: 'مُوَاجَهَة',  fr: 'le fait de faire face' },
    ],
    note: 'Schèmes réguliers à retenir : Form II → <strong>تَفْعِيل</strong> · Form III → <strong>مُفَاعَلَة</strong> · Form IV → <strong>إِفْعَال</strong> · Form V → <strong>تَفَعُّل</strong> · Form VIII → <strong>اِفْتِعَال</strong>. Les maîtriser, c\'est automatiser un pan entier du lexique arabe.',
  },
};

/* ═══════════════════════════════════════════════════
   MAP GLOBALE — ajouter les futurs textes ici
═══════════════════════════════════════════════════ */
const TEXTS = {
  A1: [A1_T1],
  A2: [],
  B1: [],
  B2: [B2_T1],
  C1: [],
  C2: [],
};
