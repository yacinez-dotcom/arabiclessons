"use strict";

/* Supprime le tashkeel */
const strip = s => s.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');

/* ═══════════════════════════════════════════════
   NIVEAUX
═══════════════════════════════════════════════ */
const LEVELS = [
  { id:'A1', name:'Débutant',       ar:'مبتدئ' },
  { id:'A2', name:'Élémentaire',    ar:'أساسي' },
  { id:'B1', name:'Intermédiaire',  ar:'متوسط' },
  { id:'B2', name:'Interm. avancé', ar:'متوسط متقدم' },
  { id:'C1', name:'Avancé',         ar:'متقدم' },
  { id:'C2', name:'Maîtrise',       ar:'إتقان' },
];

/* ═══════════════════════════════════════════════
   A1 · T1 — يَوْمٌ فِي الْمَدِينَةِ
   Grammaire : الجملة الاسمية
═══════════════════════════════════════════════ */
const A1_T1 = {
  id:'a1-1', level:'A1',
  titleW:'يَوْمٌ فِي الْمَدِينَةِ', titleP:'يوم في المدينة',
  titleFr:'Un jour dans la ville',
  sentences:[
    [{w:'هَذَا',t:"voici, c\'est — démonstratif masc."},{w:'أَحْمَدُ',t:'Ahmad — prénom masculin'}],
    [{w:'هُوَ',t:'il'},{w:'طَالِبٌ',t:'un étudiant (m.)'}],
    [{w:'يَسْكُنُ',t:'il habite, il réside (Form I · س‑ك‑ن)'},{w:'فِي',t:'dans, à, en'},{w:'الْمَدِينَةِ',t:'la ville'}],
    [{w:'كُلَّ صَبَاحٍ',t:'chaque matin'},{w:'يَذْهَبُ',t:'il va, il part (Form I · ذ‑ه‑ب)'},{w:'إِلَى',t:"vers, à, jusqu\'à"},{w:'الْمَدْرَسَةِ',t:"l\'école"}],
    [{w:'الْمَدْرَسَةُ',t:"l\'école (sujet nominatif)"},{w:'كَبِيرَةٌ',t:'grande (adj. fém.)'},{w:'وَجَمِيلَةٌ',t:'et belle (adj. fém.)'}],
    [{w:'فِيهَا',t:"en elle, à l\'intérieur — fém."},{w:'أَصْدِقَاءٌ',t:'des amis (pl. brisé de صَدِيق)'},{w:'كَثِيرُونَ',t:'nombreux (pl. masc. sain)'}],
    [{w:'بَعْدَ الدِّرَاسَةِ',t:"après les cours"},{w:'يَرْجِعُ',t:'il rentre (Form I · ر‑ج‑ع)'},{w:'أَحْمَدُ',t:'Ahmad'},{w:'إِلَى الْبَيْتِ',t:'à la maison'}],
    [{w:'هُوَ',t:'il'},{w:'سَعِيدٌ',t:'heureux (adj. · schème فَعِيل)'}],
  ],
  vocabulary:[
    {w:'هَذَا',p:'هذا',tr:'hādhā',fr:"voici, c\'est (démonstratif masc.)",fm:'Pronom démonstratif',root:'ه ذ'},
    {w:'طَالِب',p:'طالب',tr:'ṭālib',fr:'étudiant, apprenant',fm:'Participe actif Form I — schème فَاعِل',root:'ط ل ب'},
    {w:'سَكَنَ',p:'سكن',tr:'sakana',fr:'habiter, résider',fm:'Verbe Form I',root:'س ك ن'},
    {w:'مَدِينَة',p:'مدينة',tr:'madīna',fr:'ville',fm:'Nom — schème مَفْعِلَة',root:'م د ن'},
    {w:'صَبَاح',p:'صباح',tr:'ṣabāḥ',fr:'matin',fm:'Nom — schème فَعَال',root:'ص ب ح'},
    {w:'ذَهَبَ',p:'ذهب',tr:'dhahaba',fr:'aller, partir',fm:'Verbe Form I',root:'ذ ه ب'},
    {w:'مَدْرَسَة',p:'مدرسة',tr:'madrasa',fr:'école',fm:'Nom de lieu — schème مَفْعَلَة',root:'د ر س'},
    {w:'كَبِير',p:'كبير',tr:'kabīr',fr:'grand, important',fm:'Adjectif — schème فَعِيل',root:'ك ب ر'},
    {w:'جَمِيل',p:'جميل',tr:'jamīl',fr:'beau, belle',fm:'Adjectif — schème فَعِيل',root:'ج م ل'},
    {w:'أَصْدِقَاء',p:'أصدقاء',tr:'aṣdiqāʾ',fr:'amis (pluriel)',fm:'Pl. brisé de صَدِيق',root:'ص د ق'},
    {w:'كَثِير',p:'كثير',tr:'kathīr',fr:'nombreux, beaucoup',fm:'Adjectif — schème فَعِيل',root:'ك ث ر'},
    {w:'رَجَعَ',p:'رجع',tr:'rajaʿa',fr:'rentrer, retourner',fm:'Verbe Form I',root:'ر ج ع'},
    {w:'بَيْت',p:'بيت',tr:'bayt',fr:'maison',fm:'Nom — schème فَيْعَل',root:'ب ي ت'},
    {w:'سَعِيد',p:'سعيد',tr:"saʿīd",fr:'heureux, content',fm:'Adjectif — schème فَعِيل',root:'س ع د'},
  ],
  grammar:{
    concept:'الجملة الاسمية — La phrase nominale',
    excerptW:'هُوَ طَالِبٌ · الْمَدْرَسَةُ كَبِيرَةٌ وَجَمِيلَةٌ · هُوَ سَعِيدٌ',
    excerptP:'هو طالب · المدرسة كبيرة وجميلة · هو سعيد',
    exp:"En arabe, le verbe <strong>être</strong> au présent n\'existe pas. Une phrase se forme avec un <strong>مُبْتَدَأ (sujet)</strong> + <strong>خَبَر (prédicat)</strong> sans aucun verbe. Les deux termes s\'accordent en genre et en nombre.",
    gtblHeaders:['مبتدأ (Sujet)','Rôle','خبر (Prédicat)','Traduction'],
    table:[
      {v:'هُوَ',f:'مبتدأ',m:'طَالِبٌ',fr:'Il est étudiant'},
      {v:'الْمَدْرَسَةُ',f:'مبتدأ',m:'كَبِيرَةٌ وَجَمِيلَةٌ',fr:"L\'école est grande et belle"},
      {v:'فِيهَا',f:'مبتدأ (شبه جملة)',m:'أَصْدِقَاءٌ كَثِيرُونَ',fr:"Il y a de nombreux amis"},
      {v:'هُوَ',f:'مبتدأ',m:'سَعِيدٌ',fr:'Il est heureux'},
    ],
    note:"Le <strong>tanwīn (ـٌ)</strong> sur le خبر indique qu\'il est indéfini — طَالِبٌ = \"un étudiant\". Avec article : هُوَ الطَّالِبُ = \"il est l\'étudiant\".",
  },
};

/* ═══════════════════════════════════════════════
   A1 · T2 — الأُسْرَة
   Grammaire : المذكر والمؤنث (genre)
═══════════════════════════════════════════════ */
const A1_T2 = {
  id:'a1-2', level:'A1',
  titleW:'الأُسْرَة', titleP:'الأسرة',
  titleFr:'La famille',
  sentences:[
    [
      {w:'هَذِهِ',t:"voici, c\'est — démonstratif fém."},
      {w:'أُسْرَةُ مُحَمَّدٍ',t:"la famille de Mohammed (annexion nominale)"},
    ],[
      {w:'الأَبُ',t:'le père (sujet)'},
      {w:'اسْمُهُ',t:'son nom (possessif masc.)'},
      {w:'كَرِيمٌ',t:'Karim — prénom'},
      {w:'وَالأُمُّ',t:'et la mère'},
      {w:'اسْمُهَا',t:'son nom (possessif fém.)'},
      {w:'فَاطِمَةُ',t:'Fatima — prénom féminin'},
    ],[
      {w:'لَهُمَا',t:"ils ont (litt. : à eux deux)"},
      {w:'ثَلَاثَةُ أَطْفَالٍ',t:'trois enfants'},
    ],[
      {w:'وَلَدَانِ',t:'deux garçons (duel nominatif)'},
      {w:'وَبِنْتٌ وَاحِدَةٌ',t:'et une seule fille'},
    ],[
      {w:'الأَخُ الأَكْبَرُ',t:"le frère aîné"},
      {w:'اسْمُهُ يُوسُفُ',t:'se prénomme Youssef'},
      {w:'وَالأُخْتُ',t:'et la sœur'},
      {w:'اسْمُهَا مَرْيَمُ',t:'se prénomme Maryam'},
    ],[
      {w:'الْجَدُّ وَالْجَدَّةُ',t:'le grand-père et la grand-mère'},
      {w:'يَسْكُنَانِ',t:'ils habitent tous deux (forme duelle)'},
      {w:'فِي بَيْتٍ قَرِيبٍ',t:'dans une maison proche'},
    ],[
      {w:'هُمْ',t:'ils'},
      {w:'أُسْرَةٌ كَبِيرَةٌ',t:'une grande famille'},
      {w:'وَمُتَرَابِطَةٌ',t:'et unie, soudée'},
    ],
  ],
  vocabulary:[
    {w:'أُسْرَة',p:'أسرة',tr:'usra',fr:'famille',fm:'Nom — schème أُفْعَلَة',root:'أ س ر'},
    {w:'أَب',p:'أب',tr:'ab',fr:'père',fm:'Nom — masc. irrégulier (déficient)',root:'أ ب و'},
    {w:'أُمّ',p:'أم',tr:'umm',fr:'mère',fm:'Nom — fém. irrégulier (sans ة)',root:'أ م م'},
    {w:'وَلَد',p:'ولد',tr:'walad',fr:'garçon, fils, enfant (m.)',fm:'Nom — schème فَعَل',root:'و ل د'},
    {w:'بِنْت',p:'بنت',tr:'bint',fr:'fille (pl. بَنَات)',fm:'Nom — fém. irrégulier (sans ة)',root:'ب ن ت'},
    {w:'أَخ',p:'أخ',tr:'akh',fr:'frère (pl. إِخْوَة)',fm:"Nom — déficient (akhū- devant possessif)",root:'أ خ و'},
    {w:'أُخْت',p:'أخت',tr:'ukht',fr:'sœur (pl. أَخَوَات)',fm:'Nom — fém. irrégulier',root:'أ خ ت'},
    {w:'جَدّ',p:'جد',tr:'jadd',fr:'grand-père',fm:'Nom — schème فَعْل (géminé)',root:'ج د د'},
    {w:'جَدَّة',p:'جدة',tr:'jadda',fr:'grand-mère',fm:'Féminin de جَدّ avec ة',root:'ج د د'},
    {w:'طِفْل',p:'طفل',tr:'ṭifl',fr:'enfant (pl. أَطْفَال)',fm:'Nom — schème فِعْل',root:'ط ف ل'},
    {w:'اسْم',p:'اسم',tr:'ism',fr:'nom, prénom',fm:"Nom — schème اِفْعِل (alif prosthétique)",root:'س م و'},
    {w:'أَكْبَر',p:'أكبر',tr:'akbar',fr:'plus grand, aîné',fm:'Adjectif comparatif — schème أَفْعَل',root:'ك ب ر'},
    {w:'قَرِيب',p:'قريب',tr:'qarīb',fr:'proche, voisin',fm:'Adjectif — schème فَعِيل',root:'ق ر ب'},
    {w:'مُتَرَابِط',p:'مترابط',tr:'mutarābiṭ',fr:'uni, soudé, solidaire',fm:'Participe actif Form VI',root:'ر ب ط'},
  ],
  grammar:{
    concept:'المذكر والمؤنث — Genre masculin et féminin',
    excerptW:'الأَبُ · الأُمُّ · الأَخُ · الأُخْتُ · الْجَدُّ · الْجَدَّةُ',
    excerptP:'الأب · الأم · الأخ · الأخت · الجد · الجدة',
    exp:"En arabe, chaque nom est <strong>masculin (مذكر)</strong> ou <strong>féminin (مؤنث)</strong>. La règle générale : le féminin se forme en ajoutant <strong>ة (tā marbūṭa)</strong>. Certains féminins sont <strong>irréguliers</strong> (بِنْت, أُخْت, أُمّ) — il faut les mémoriser. Les adjectifs s\'accordent toujours avec le nom qu\'ils qualifient.",
    gtblHeaders:['Masculin (مذكر)','↔','Féminin (مؤنث)','Remarque'],
    table:[
      {v:'أَبٌ',f:'←',m:'أُمٌّ',fr:'père / mère — paire irrégulière'},
      {v:'أَخٌ',f:'←',m:'أُخْتٌ',fr:'frère / sœur — irrégulier'},
      {v:'وَلَدٌ',f:'←',m:'بِنْتٌ',fr:'garçon / fille — irrégulier'},
      {v:'جَدٌّ',f:'←',m:'جَدَّةٌ',fr:"grand-père / mère — + ة (règle)"},
      {v:'مُعَلِّمٌ',f:'←',m:'مُعَلِّمَةٌ',fr:"enseignant(e) — + ة (règle)"},
      {v:'كَبِيرٌ',f:'←',m:'كَبِيرَةٌ',fr:"accord adj. — + ة sur le fém."},
    ],
    note:'Astuce : quand un adjectif qualifie un nom féminin, il prend aussi le <strong>ة</strong> : أُسْرَةٌ <strong>كَبِيرَةٌ</strong> (fém.) vs بَيْتٌ <strong>كَبِيرٌ</strong> (masc.).',
  },
};

/* ═══════════════════════════════════════════════
   A1 · T3 — الْبَيْت وَالْغُرَف
   Grammaire : حروف الجر (prépositions)
═══════════════════════════════════════════════ */
const A1_T3 = {
  id:'a1-3', level:'A1',
  titleW:'الْبَيْتُ وَالْغُرَفُ', titleP:'البيت والغرف',
  titleFr:'La maison et les pièces',
  sentences:[
    [
      {w:'بَيْتُنَا',t:'notre maison (possessif pl.)'},
      {w:'فِي شَارِعٍ هَادِئٍ',t:'dans une rue calme'},
    ],[
      {w:'فِيهِ',t:'en lui, il contient (masc.)'},
      {w:'ثَلَاثُ غُرَفٍ',t:'trois chambres'},
      {w:'وَصَالَةٌ',t:'et un salon'},
      {w:'وَمَطْبَخٌ',t:'et une cuisine'},
      {w:'وَحَمَّامٌ',t:'et une salle de bain'},
    ],[
      {w:'غُرْفَةُ النَّوْمِ',t:'la chambre à coucher (annexion)'},
      {w:'فِيهَا سَرِيرٌ كَبِيرٌ',t:'contient un grand lit'},
      {w:'وَخِزَانَةٌ',t:'et une armoire'},
      {w:'وَمِصْبَاحٌ',t:'et une lampe'},
    ],[
      {w:'الصَّالَةُ',t:'le salon'},
      {w:'فِيهَا طَاوِلَةٌ',t:'a une table'},
      {w:'وَكَرَاسِيُّ',t:'et des chaises (pl. de كُرْسِيّ)'},
      {w:'وَتِلْفَازٌ',t:'et une télévision'},
    ],[
      {w:'الْمَطْبَخُ',t:'la cuisine'},
      {w:'نَظِيفٌ',t:'propre'},
      {w:'وَفِيهِ فُرْنٌ',t:'et il y a un four'},
      {w:'وَبَرَّادٌ',t:'et un réfrigérateur'},
    ],[
      {w:'أَمَامَ الْبَيْتِ',t:'devant la maison'},
      {w:'حَدِيقَةٌ صَغِيرَةٌ',t:'un petit jardin'},
      {w:'فِيهَا أَزْهَارٌ جَمِيلَةٌ',t:'avec de belles fleurs'},
    ],
  ],
  vocabulary:[
    {w:'شَارِع',p:'شارع',tr:'shāriʿ',fr:'rue, avenue',fm:'Nom — schème فَاعِل',root:'ش ر ع'},
    {w:'هَادِئ',p:'هادئ',tr:'hādiʾ',fr:'calme, tranquille',fm:'Adjectif — participe actif Form I',root:'ه د أ'},
    {w:'غُرْفَة',p:'غرفة',tr:'ghurfa',fr:'chambre, pièce (pl. غُرَف)',fm:'Nom — schème فُعْلَة',root:'غ ر ف'},
    {w:'صَالَة',p:'صالة',tr:'ṣāla',fr:'salon, salle de séjour',fm:'Nom — schème فَاعِلَة',root:'ص و ل'},
    {w:'مَطْبَخ',p:'مطبخ',tr:'maṭbakh',fr:'cuisine (pièce)',fm:'Nom de lieu — schème مَفْعَل',root:'ط ب خ'},
    {w:'حَمَّام',p:'حمام',tr:'ḥammām',fr:'salle de bain, hammam',fm:'Nom — schème فَعَّال',root:'ح م م'},
    {w:'سَرِير',p:'سرير',tr:'sarīr',fr:'lit (pl. أَسِرَّة)',fm:'Nom — schème فَعِيل',root:'س ر ر'},
    {w:'خِزَانَة',p:'خزانة',tr:'khizāna',fr:'armoire, placard',fm:'Nom — schème فِعَالَة',root:'خ ز ن'},
    {w:'مِصْبَاح',p:'مصباح',tr:'miṣbāḥ',fr:'lampe, lumière (pl. مَصَابِيح)',fm:'Nom — schème مِفْعَال',root:'ص ب ح'},
    {w:'طَاوِلَة',p:'طاولة',tr:'ṭāwila',fr:'table',fm:'Nom (emprunt arabisé)',root:'ط و ل'},
    {w:'كُرْسِيّ',p:'كرسي',tr:'kursī',fr:'chaise (pl. كَرَاسِيّ)',fm:'Nom — schème فُعْلِيّ',root:'ك ر س'},
    {w:'تِلْفَاز',p:'تلفاز',tr:'tilfāz',fr:'télévision',fm:'Nom (arabisation de TV)',root:'ل ف ز'},
    {w:'فُرْن',p:'فرن',tr:'furn',fr:'four, boulangerie',fm:'Nom — schème فُعْل',root:'ف ر ن'},
    {w:'بَرَّاد',p:'برّاد',tr:'barrād',fr:'réfrigérateur',fm:'Nom — schème فَعَّال',root:'ب ر د'},
    {w:'حَدِيقَة',p:'حديقة',tr:'ḥadīqa',fr:'jardin (pl. حَدَائِق)',fm:'Nom — schème فَعِيلَة',root:'ح د ق'},
    {w:'صَغِير',p:'صغير',tr:'ṣaghīr',fr:'petit (≠ كَبِير)',fm:'Adjectif — schème فَعِيل',root:'ص غ ر'},
    {w:'زَهْرَة',p:'زهرة',tr:'zahra',fr:'fleur (pl. أَزْهَار)',fm:'Nom — schème فَعْلَة',root:'ز ه ر'},
    {w:'نَظِيف',p:'نظيف',tr:'naẓīf',fr:'propre, net',fm:'Adjectif — schème فَعِيل',root:'ن ظ ف'},
  ],
  grammar:{
    concept:'حُرُوفُ الْجَرِّ — Les prépositions',
    excerptW:'فِي شَارِعٍ · أَمَامَ الْبَيْتِ · فِيهَا أَزْهَارٌ',
    excerptP:'في شارع · أمام البيت · فيها أزهار',
    exp:"En arabe, les prépositions (<strong>حُرُوف الجَرّ</strong>) sont suivies d\'un nom au <strong>cas génitif (مَجْرُور)</strong>, reconnaissable à sa voyelle finale <strong>ـِ</strong> (kasra) ou tanwīn kasra <strong>ـٍ</strong>. La préposition peut aussi se fusionner avec un pronom : فِي + هِيَ → <strong>فِيهَا</strong>.",
    gtblHeaders:['Préposition','Transcription','Sens','Exemple'],
    table:[
      {v:'فِي',f:'fī',m:'فِي الْبَيْتِ',fr:'dans — dans la maison'},
      {v:'عَلَى',f:"ʿalā",m:'عَلَى الطَّاوِلَةِ',fr:'sur — sur la table'},
      {v:'أَمَامَ',f:'amāma',m:'أَمَامَ الْبَيْتِ',fr:'devant — devant la maison'},
      {v:'خَلْفَ',f:'khalfa',m:'خَلْفَ الْبَابِ',fr:'derrière — derrière la porte'},
      {v:'بَيْنَ',f:'bayna',m:'بَيْنَ الْغُرَفِ',fr:'entre — entre les chambres'},
      {v:'إِلَى',f:'ilā',m:'إِلَى الْمَطْبَخِ',fr:"vers — vers la cuisine"},
    ],
    note:'Les prépositions <strong>بِ</strong> (avec/par), <strong>لِ</strong> (pour/à) et <strong>كَ</strong> (comme) sont des préfixes qui se collent directement au mot suivant : بِالنَّعْنَاعِ = avec la menthe.',
  },
};

/* ═══════════════════════════════════════════════
   A1 · T4 — الطَّعَامُ وَالشَّرَابُ
   Grammaire : الجملة الفعلية (phrase verbale, ordre VSO)
═══════════════════════════════════════════════ */
const A1_T4 = {
  id:'a1-4', level:'A1',
  titleW:'الطَّعَامُ وَالشَّرَابُ', titleP:'الطعام والشراب',
  titleFr:'La nourriture et les boissons',
  sentences:[
    [
      {w:'يُحِبُّ أَحْمَدُ',t:'Ahmad aime (verbe avant sujet — VSO)'},
      {w:'الطَّعَامَ الْعَرَبِيَّ',t:'la nourriture arabe (acc.)'},
      {w:'كَثِيرًا',t:'beaucoup (accusatif adverbial)'},
    ],[
      {w:'فِي الصَّبَاحِ',t:'le matin'},
      {w:'يَأْكُلُ',t:'il mange (Form I · أ‑ك‑ل)'},
      {w:'خُبْزًا',t:'du pain (indéfini, acc.)'},
      {w:'وَجُبْنًا',t:'et du fromage'},
      {w:'وَزَيْتُونًا',t:'et des olives'},
    ],[
      {w:'وَيَشْرَبُ',t:'et il boit (Form I · ش‑ر‑ب)'},
      {w:'كُوبَ شَايٍ',t:'une tasse de thé (annexion)'},
      {w:'بِالنَّعْنَاعِ',t:'à la menthe'},
      {w:'أَوْ فِنْجَانَ قَهْوَةٍ',t:"ou une tasse de café"},
    ],[
      {w:'فِي الْغَدَاءِ',t:'au déjeuner'},
      {w:'يَأْكُلُ',t:'il mange'},
      {w:'أَرُزًّا',t:'du riz'},
      {w:'وَلَحْمًا',t:'et de la viande'},
      {w:'وَخُضَارًا طَازِجًا',t:'et des légumes frais'},
    ],[
      {w:'الْفَوَاكِهُ',t:'les fruits (pl. brisé de فَاكِهَة)'},
      {w:'مَوْجُودَةٌ دَائِمًا',t:'toujours présents'},
      {w:'عَلَى الطَّاوِلَةِ',t:'sur la table'},
    ],[
      {w:'الطَّعَامُ الصِّحِّيُّ',t:'la nourriture saine'},
      {w:'يُقَوِّي الْجِسْمَ',t:'renforce le corps (Form II · ق‑و‑ي)'},
      {w:'وَيُنَشِّطُ الْعَقْلَ',t:"et stimule l\'esprit (Form II · ن‑ش‑ط)"},
    ],
  ],
  vocabulary:[
    {w:'طَعَام',p:'طعام',tr:"ṭaʿām",fr:'nourriture, repas',fm:'Nom — schème فَعَال',root:'ط ع م'},
    {w:'شَرَاب',p:'شراب',tr:'sharāb',fr:'boisson',fm:'Nom — schème فَعَال',root:'ش ر ب'},
    {w:'أَكَلَ',p:'أكل',tr:'akala',fr:'manger',fm:'Verbe Form I — défectueux hamza',root:'أ ك ل'},
    {w:'شَرِبَ',p:'شرب',tr:'shariba',fr:'boire',fm:'Verbe Form I',root:'ش ر ب'},
    {w:'أَحَبَّ',p:'أحب',tr:'aḥabba',fr:'aimer, apprécier',fm:'Verbe Form IV — géminé',root:'ح ب ب'},
    {w:'خُبْز',p:'خبز',tr:'khubz',fr:'pain',fm:'Nom — schème فُعْل',root:'خ ب ز'},
    {w:'جُبْن',p:'جبن',tr:'jubn',fr:'fromage',fm:'Nom — schème فُعْل',root:'ج ب ن'},
    {w:'زَيْتُون',p:'زيتون',tr:'zaytūn',fr:'olive(s), olivier',fm:'Nom collectif — schème فَيْعُول',root:'ز ي ت'},
    {w:'شَاي',p:'شاي',tr:'shāy',fr:'thé',fm:'Nom (emprunt)',root:'ش ا ي'},
    {w:'كُوب',p:'كوب',tr:'kūb',fr:'tasse, verre, gobelet',fm:'Nom — schème فُوعَل',root:'ك و ب'},
    {w:'نَعْنَاع',p:'نعناع',tr:"naʿnāʿ",fr:'menthe',fm:'Nom (redoublé)',root:'ن ع ع'},
    {w:'قَهْوَة',p:'قهوة',tr:'qahwa',fr:'café (boisson)',fm:'Nom — schème فَعْلَة',root:'ق ه و'},
    {w:'غَدَاء',p:'غداء',tr:'ghadāʾ',fr:'déjeuner',fm:'Nom — schème فَعَاء',root:'غ د و'},
    {w:'أَرُزّ',p:'أرز',tr:'aruzz',fr:'riz',fm:'Nom (emprunt — géminé)',root:'أ ر ز'},
    {w:'لَحْم',p:'لحم',tr:'laḥm',fr:'viande, chair',fm:'Nom — schème فَعْل',root:'ل ح م'},
    {w:'خُضَار',p:'خضار',tr:'khuḍār',fr:'légumes (collectif)',fm:'Nom collectif — schème فُعَال',root:'خ ض ر'},
    {w:'طَازِج',p:'طازج',tr:'ṭāzij',fr:'frais, fraîche',fm:'Adjectif — schème فَاعِل',root:'ط ز ج'},
    {w:'فَاكِهَة',p:'فاكهة',tr:'fākiha',fr:'fruit (pl. بrisé فَوَاكِه)',fm:'Nom — schème فَاعِلَة',root:'ف ك ه'},
    {w:'مَوْجُود',p:'موجود',tr:'mawjūd',fr:'présent, existant, disponible',fm:'Participe passif Form I',root:'و ج د'},
    {w:'صِحِّيّ',p:'صحي',tr:"ṣiḥḥī",fr:'sain, nutritif, hygiénique',fm:"Adjectif de relation (nisba) — صِحَّة + ي",root:'ص ح ح'},
  ],
  grammar:{
    concept:'الجملة الفعلية — La phrase verbale (ordre VSO)',
    excerptW:'يُحِبُّ أَحْمَدُ الطَّعَامَ · يَأْكُلُ خُبْزًا · يَشْرَبُ كُوبَ شَايٍ',
    excerptP:'يحب أحمد الطعام · يأكل خبزًا · يشرب كوب شاي',
    exp:"La phrase verbale arabe suit l\'ordre <strong>Verbe — Sujet — Objet (VSO)</strong>, l\'inverse du français. Le verbe s\'accorde en genre avec le sujet mais reste au <strong>singulier</strong> même si le sujet est pluriel (accord partiel). L\'objet se met à l'<strong>accusatif (ـَ / ـًا)</strong>.",
    gtblHeaders:['Verbe (فِعْل)','Sujet (فَاعِل)','Objet (مَفْعُول بِهِ)','Traduction'],
    table:[
      {v:'يُحِبُّ',f:'أَحْمَدُ',m:'الطَّعَامَ',fr:'Ahmad aime la nourriture'},
      {v:'يَأْكُلُ',f:'—',m:'خُبْزًا',fr:'Il mange du pain'},
      {v:'يَشْرَبُ',f:'—',m:'كُوبَ شَايٍ',fr:'Il boit une tasse de thé'},
      {v:'يُقَوِّي',f:'الطَّعَامُ',m:'الْجِسْمَ',fr:'La nourriture renforce le corps'},
    ],
    note:'Comparez : <strong>أَحْمَدُ يُحِبُّ</strong> (phrase nominale, sujet en premier — insiste sur Ahmad) vs <strong>يُحِبُّ أَحْمَدُ</strong> (phrase verbale, verbe en premier — action au premier plan).',
  },
};

/* ═══════════════════════════════════════════════
   A1 · T5 — الْجِسْمُ وَالصِّحَّة
   Grammaire : أدوات الاستفهام (mots interrogatifs)
═══════════════════════════════════════════════ */
const A1_T5 = {
  id:'a1-5', level:'A1',
  titleW:'الْجِسْمُ وَالصِّحَّةُ', titleP:'الجسم والصحة',
  titleFr:'Le corps humain et la santé',
  sentences:[
    [
      {w:'جِسْمُ الإِنْسَانِ',t:"le corps de l\'être humain (annexion)"},
      {w:'مِنْ أَعَاجِيبِ اللهِ',t:'parmi les merveilles de Dieu'},
    ],[
      {w:'الرَّأْسُ',t:'la tête'},
      {w:'فِيهِ عَيْنَانِ',t:'il contient deux yeux (duel)'},
      {w:'وَأُذُنَانِ',t:'et deux oreilles (duel)'},
      {w:'وَأَنْفٌ',t:'et un nez'},
      {w:'وَفَمٌ',t:'et une bouche'},
    ],[
      {w:'الْيَدَانِ لِلْعَمَلِ',t:'les deux mains pour le travail'},
      {w:'وَالرِّجْلَانِ لِلْمَشْيِ',t:'et les deux jambes pour la marche'},
    ],[
      {w:'الصِّحَّةُ',t:'la santé'},
      {w:'نِعْمَةٌ كَبِيرَةٌ',t:'une grande bénédiction'},
      {w:'مِنَ اللهِ',t:'venant de Dieu'},
    ],[
      {w:'لِصِحَّةٍ جَيِّدَةٍ',t:'pour une bonne santé'},
      {w:'كُلُوا الْخُضَارَ وَالْفَوَاكِهَ',t:'mangez les légumes et les fruits (impératif pl.)'},
      {w:'وَامْشُوا كُلَّ يَوْمٍ',t:'et marchez chaque jour (impératif pl.)'},
    ],[
      {w:'إِذَا مَرِضَ الإِنْسَانُ',t:"si l\'être humain tombe malade"},
      {w:'يَذْهَبُ',t:'il va'},
      {w:'إِلَى الطَّبِيبِ',t:'chez le médecin'},
    ],
  ],
  vocabulary:[
    {w:'جِسْم',p:'جسم',tr:'jism',fr:'corps (pl. أَجْسَام)',fm:'Nom — schème فِعْل',root:'ج س م'},
    {w:'إِنْسَان',p:'إنسان',tr:'insān',fr:"être humain, homme (pl. بَشَر / نَاس)",fm:'Nom — schème إِفْعَال',root:'أ ن س'},
    {w:'أُعْجُوبَة',p:'أعجوبة',tr:"ujūba",fr:'merveille, prodige (pl. أَعَاجِيب)',fm:'Nom — schème أُفْعُولَة',root:'ع ج ب'},
    {w:'رَأْس',p:'رأس',tr:"raʾs",fr:'tête (pl. رُؤُوس)',fm:'Nom — schème فَعْل',root:'ر أ س'},
    {w:'عَيْن',p:'عين',tr:"ʿayn",fr:'œil (duel عَيْنَانِ, pl. عُيُون)',fm:'Nom — schème فَعْل (fém.)',root:'ع ي ن'},
    {w:'أُذُن',p:'أذن',tr:'udhun',fr:'oreille (duel أُذُنَانِ, pl. آذَان)',fm:'Nom — féminin (sans ة)',root:'أ ذ ن'},
    {w:'أَنْف',p:'أنف',tr:'anf',fr:'nez (pl. أُنُوف)',fm:'Nom — schème فَعْل',root:'أ ن ف'},
    {w:'فَم',p:'فم',tr:'fam',fr:'bouche, embouchure',fm:'Nom — déficient (faw-)',root:'ف و ه'},
    {w:'يَد',p:'يد',tr:'yad',fr:'main (duel يَدَانِ, pl. أَيْدِي)',fm:'Nom — déficient (fém.)',root:'ي د ي'},
    {w:'رِجْل',p:'رجل',tr:'rijl',fr:'jambe, pied (duel رِجْلَانِ, pl. أَرْجُل)',fm:'Nom — schème فِعْل (fém.)',root:'ر ج ل'},
    {w:'صِحَّة',p:'صحة',tr:"ṣiḥḥa",fr:'santé',fm:'Nom verbal — schème فِعْلَة (géminé)',root:'ص ح ح'},
    {w:'نِعْمَة',p:'نعمة',tr:"niʿma",fr:'bénédiction, bienfait (pl. نِعَم)',fm:'Nom — schème فِعْلَة',root:'ن ع م'},
    {w:'عَمَل',p:'عمل',tr:"ʿamal",fr:'travail, action (pl. أَعْمَال)',fm:'Nom — schème فَعَل',root:'ع م ل'},
    {w:'مَشْي',p:'مشي',tr:'mashī',fr:'marche, action de marcher',fm:'Masdar Form I (défectueux)',root:'م ش ي'},
    {w:'مَرِضَ',p:'مرض',tr:'mariḍa',fr:'tomber malade',fm:'Verbe Form I — schème فَعِلَ',root:'م ر ض'},
    {w:'طَبِيب',p:'طبيب',tr:'ṭabīb',fr:'médecin (pl. أَطِبَّاء)',fm:'Nom — schème فَعِيل',root:'ط ب ب'},
    {w:'إِذَا',p:'إذا',tr:'idhā',fr:'si, lorsque (conjonction conditionnelle)',fm:'Particule conditionnelle',root:'—'},
  ],
  grammar:{
    concept:'أَدَوَاتُ الاسْتِفْهَامِ — Les mots interrogatifs',
    excerptW:'مَنْ هَذَا؟ · مَاذَا تَأْكُلُ؟ · أَيْنَ الطَّبِيبُ؟ · كَيْفَ صِحَّتُكَ؟',
    excerptP:'من هذا؟ · ماذا تأكل؟ · أين الطبيب؟ · كيف صحتك؟',
    exp:"Les interrogatifs arabes se placent en <strong>tête de phrase</strong>. Contrairement au français, il n\'y a pas d\'inversion sujet-verbe : <strong>أَيْنَ يَسْكُنُ أَحْمَدُ؟</strong> = \"Où habite Ahmad ?\" (litt. Où habite Ahmad). Pour les questions fermées (oui/non), on utilise <strong>هَلْ</strong> ou <strong>أَ</strong> devant une phrase normale.",
    gtblHeaders:['Interrogatif','Transcription','Sens','Exemple'],
    table:[
      {v:'مَنْ؟',f:'man',m:'مَنْ هَذَا؟',fr:"Qui est-ce ?"},
      {v:'مَاذَا؟',f:'mādhā',m:'مَاذَا تَأْكُلُ؟',fr:"Que manges-tu ?"},
      {v:'أَيْنَ؟',f:'ayna',m:'أَيْنَ الطَّبِيبُ؟',fr:"Où est le médecin ?"},
      {v:'مَتَى؟',f:'matā',m:'مَتَى تَذْهَبُ؟',fr:"Quand pars-tu ?"},
      {v:'كَيْفَ؟',f:'kayfa',m:'كَيْفَ صِحَّتُكَ؟',fr:"Comment va ta santé ?"},
      {v:'لِمَاذَا؟',f:'limādhā',m:'لِمَاذَا تَمْشِي؟',fr:"Pourquoi marches-tu ?"},
      {v:'كَمْ؟',f:'kam',m:'كَمْ عَيْنًا لَدَيْكَ؟',fr:"Combien d\'yeux as-tu ?"},
      {v:'هَلْ؟',f:'hal',m:'هَلْ أَنْتَ بِخَيْرٍ؟',fr:"Es-tu en bonne santé ?"},
    ],
    note:'<strong>مَا</strong> s\'utilise devant un nom (مَا اسْمُكَ؟ = Quel est ton nom ?) tandis que <strong>مَاذَا</strong> s\'utilise devant un verbe (مَاذَا تَفْعَلُ؟ = Que fais-tu ?).',
  },
};

/* ═══════════════════════════════════════════════
   B2 · T1 — التعليم في العصر الرقمي
   Grammaire : المصدر الصريح
═══════════════════════════════════════════════ */
const B2_T1 = {
  id:'b2-1', level:'B2',
  titleW:'التَّعْلِيمُ فِي الْعَصْرِ الرَّقْمِيِّ', titleP:'التعليم في العصر الرقمي',
  titleFr:"L\'éducation à l\'ère numérique",
  sentences:[
    [
      {w:'أَحْدَثَتِ',t:'a provoqué / causé (Form IV · ح‑د‑ث)'},
      {w:'التِّكْنُولُوجِيَا',t:'la technologie'},
      {w:'ثَوْرَةً',t:'une révolution'},
      {w:'حَقِيقِيَّةً',t:'véritable, réelle'},
      {w:'فِي مَجَالِ',t:'dans le domaine de'},
      {w:'التَّعْلِيمِ',t:"l\'éducation, l\'enseignement"},
    ],[
      {w:'فَبَعْدَ أَنْ كَانَ',t:"alors qu\'autrefois"},
      {w:'الطُّلَّابُ',t:'les étudiants'},
      {w:'يَعْتَمِدُونَ',t:"dépendaient de (Form VIII · ع‑م‑د)"},
      {w:'اعْتِمَادًا كُلِّيًّا',t:'entièrement (accusatif absolu)'},
      {w:'عَلَى الْكُتُبِ',t:'sur les livres'},
      {w:'وَالْفُصُولِ الدِّرَاسِيَّةِ',t:'et les salles de classe'},
      {w:'أَصْبَحَ بِإِمْكَانِهِمُ',t:'il leur est désormais possible'},
      {w:'الْيَوْمَ',t:"aujourd\'hui"},
      {w:'الْوُصُولُ',t:"l\'accès (masdar de وَصَلَ)"},
      {w:'إِلَى مَصَادِرَ',t:'à des sources'},
      {w:'لَا حَصْرَ لَهَا',t:'innombrables, sans limite'},
      {w:'عَبْرَ الْإِنْتَرْنِتِ',t:'via internet'},
    ],[
      {w:'وَيَرَى كَثِيرٌ مِنَ',t:'de nombreux … estiment'},
      {w:'الْمُرَبِّينَ',t:'les éducateurs, les pédagogues'},
      {w:'أَنَّ هَذَا التَّحَوُّلَ',t:'que cette transformation (masdar Form V)'},
      {w:'يُتِيحُ',t:'permet, offre (Form IV · أَتَاحَ)'},
      {w:'لِلْمُتَعَلِّمِ',t:"à l\'apprenant (participe actif Form V)"},
      {w:'حُرِّيَّةً أَكْبَرَ',t:'une plus grande liberté'},
      {w:'فِي اخْتِيَارِ مُحْتَوَاهُ',t:'dans le choix de son contenu (masdar Form VIII)'},
      {w:'وَتَحْدِيدِ',t:'et la définition (masdar Form II)'},
      {w:'وَتِيرَةِ تَعَلُّمِهِ',t:'du rythme de son apprentissage (masdar Form V)'},
    ],[
      {w:'غَيْرَ أَنَّ',t:'cependant, toutefois'},
      {w:'ثَمَّةَ',t:'il existe, il y a (particule existentielle)'},
      {w:'تَحَدِّيَاتٍ جِدِّيَّةً',t:'des défis sérieux'},
      {w:'لَا يُمْكِنُ إِغْفَالُهَا',t:"qu\'on ne peut ignorer (masdar Form IV)"},
      {w:'مِنْهَا',t:'parmi eux'},
      {w:'ضَعْفُ الرَّبْطِ بِالشَّبَكَةِ',t:'la faiblesse de la connexion réseau'},
      {w:'فِي الْمَنَاطِقِ النَّائِيَةِ',t:'dans les régions reculées'},
      {w:'وَمَا يُسَمَّى',t:"et ce qu\'on appelle (passif Form II)"},
      {w:'بِالْهُوَّةِ الرَّقْمِيَّةِ',t:'la fracture numérique'},
      {w:'الَّتِي تُكَرِّسُ',t:'qui perpétue (Form II)'},
      {w:'الْفَوَارِقَ الاجْتِمَاعِيَّةَ',t:'les inégalités sociales'},
    ],[
      {w:'وَخَلَصَ',t:'et ils ont conclu'},
      {w:'بَعْضُ الْبَاحِثِينَ',t:'certains chercheurs'},
      {w:'إِلَى أَنَّ',t:'à la conclusion que'},
      {w:'التَّعْلِيمَ الْهَجِينَ',t:"l\'enseignement hybride"},
      {w:'الَّذِي يَجْمَعُ بَيْنَ',t:'qui combine'},
      {w:'الْحُضُورِ الْجِسْدِيِّ',t:'la présence physique (masdar Form I)'},
      {w:'وَالتَّعَلُّمِ الْإِلِكْتُرُونِيِّ',t:"et l\'apprentissage en ligne (masdar Form V)"},
      {w:'قَدْ يَكُونُ',t:"pourrait être (قَدْ + muḍāriʿ)"},
      {w:'الْحَلَّ الأَمْثَلَ',t:'la solution optimale'},
      {w:'لِمُوَاجَهَةِ هَذِهِ التَّحَدِّيَاتِ',t:'pour faire face à ces défis (masdar Form III)'},
    ],
  ],
  vocabulary:[
    {w:'أَحْدَثَ',p:'أحدث',tr:'aḥdatha',fr:'provoquer, causer',fm:'Verbe Form IV',root:'ح د ث'},
    {w:'ثَوْرَة',p:'ثورة',tr:'thawra',fr:'révolution',fm:'Nom · schème فَعْلَة',root:'ث و ر'},
    {w:'اعْتَمَدَ عَلَى',p:'اعتمد على',tr:"iʿtamada ʿalā",fr:"dépendre de, s\'appuyer sur",fm:'Verbe Form VIII',root:'ع م د'},
    {w:'وُصُول',p:'وصول',tr:'wuṣūl',fr:'accès, arrivée',fm:'Masdar Form I (وَصَلَ)',root:'و ص ل'},
    {w:'مَصَادِر',p:'مصادر',tr:'maṣādir',fr:'sources (pl.)',fm:'Pl. de مَصْدَر · schème مَفَاعِل',root:'ص د ر'},
    {w:'تَحَوُّل',p:'تحول',tr:'taḥawwul',fr:'transformation',fm:'Masdar Form V',root:'ح و ل'},
    {w:'أَتَاحَ',p:'أتاح',tr:'atāḥa',fr:'permettre, rendre possible',fm:'Verbe Form IV',root:'ت و ح'},
    {w:'مُتَعَلِّم',p:'متعلم',tr:"mutaʿallim",fr:'apprenant',fm:'Participe actif Form V',root:'ع ل م'},
    {w:'اخْتِيَار',p:'اختيار',tr:'ikhtiyār',fr:'choix',fm:'Masdar Form VIII',root:'خ ي ر'},
    {w:'وَتِيرَة',p:'وتيرة',tr:'watīra',fr:'rythme, cadence',fm:'Nom · schème فَعِيلَة',root:'و ت ر'},
    {w:'تَعَلُّم',p:'تعلم',tr:"taʿallum",fr:'apprentissage',fm:'Masdar Form V',root:'ع ل م'},
    {w:'إِغْفَال',p:'إغفال',tr:"ighfāl",fr:"fait d\'ignorer",fm:'Masdar Form IV',root:'غ ف ل'},
    {w:'هُوَّة رَقْمِيَّة',p:'هوة رقمية',tr:'huwwa raqmiyya',fr:'fracture numérique',fm:'Expression nominale',root:'—'},
    {w:'كَرَّسَ',p:'كرس',tr:'karrasa',fr:'perpétuer, consolider',fm:'Verbe Form II',root:'ك ر س'},
    {w:'فَوَارِق',p:'فوارق',tr:'fawāriq',fr:'inégalités, écarts',fm:'Pl. de فَارِق · schème فَوَاعِل',root:'ف ر ق'},
    {w:'خَلَصَ إِلَى',p:'خلص إلى',tr:'khalaṣa ilā',fr:'conclure à',fm:'Verbe Form I',root:'خ ل ص'},
    {w:'هَجِين',p:'هجين',tr:'hajīn',fr:'hybride, mixte',fm:'Adjectif · schème فَعِيل',root:'ه ج ن'},
    {w:'مُوَاجَهَة',p:'مواجهة',tr:'muwājaha',fr:'fait de faire face',fm:'Masdar Form III',root:'و ج ه'},
  ],
  grammar:{
    concept:'المصدر الصريح — Le nom verbal (masdar)',
    excerptW:'أَصْبَحَ بِإِمْكَانِهِمُ الْوُصُولُ … وَتَحْدِيدِ وَتِيرَةِ تَعَلُّمِهِ … لَا يُمْكِنُ إِغْفَالُهَا',
    excerptP:'أصبح بإمكانهم الوصول … وتحديد وتيرة تعلمه … لا يمكن إغفالها',
    exp:"Le <strong>masdar (المصدر)</strong> est le nom verbal : il nominalise l\'action et peut être sujet, objet ou régime d\'une préposition. Les formes II à X ont des masdar <strong>totalement réguliers et prévisibles</strong>.",
    gtblHeaders:['Verbe','Forme','Masdar','Signification'],
    table:[
      {v:'وَصَلَ',f:'Form I',m:'وُصُول',fr:"l\'accès"},
      {v:'اعْتَمَدَ',f:'Form VIII',m:'اعْتِمَاد',fr:'la dépendance'},
      {v:'تَحَوَّلَ',f:'Form V',m:'تَحَوُّل',fr:'la transformation'},
      {v:'اخْتَارَ',f:'Form VIII',m:'اخْتِيَار',fr:'le choix'},
      {v:'حَدَّدَ',f:'Form II',m:'تَحْدِيد',fr:'la détermination'},
      {v:'تَعَلَّمَ',f:'Form V',m:'تَعَلُّم',fr:"l\'apprentissage"},
      {v:'أَغْفَلَ',f:'Form IV',m:'إِغْفَال',fr:"le fait d\'ignorer"},
      {v:'وَاجَهَ',f:'Form III',m:'مُوَاجَهَة',fr:'le fait de faire face'},
    ],
    note:'Schèmes : Form II → <strong>تَفْعِيل</strong> · Form III → <strong>مُفَاعَلَة</strong> · Form IV → <strong>إِفْعَال</strong> · Form V → <strong>تَفَعُّل</strong> · Form VIII → <strong>اِفْتِعَال</strong>.',
  },
};

/* ═══════════════════════════════════════════════
   A1 · T6 — الْمَلَابِسُ
   Grammaire : المفرد والجمع
═══════════════════════════════════════════════ */
const A1_T6 = {
  id:'a1-6', level:'A1',
  titleW:'الْمَلَابِسُ', titleP:'الملابس',
  titleFr:'Les vêtements',
  sentences:[
    [
      {w:'يَلْبَسُ أَحْمَدُ',t:'Ahmad porte, met (Form I · ل‑ب‑س)'},
      {w:'كُلَّ يَوْمٍ',t:'chaque jour'},
      {w:'ثِيَابًا نَظِيفَةً',t:'des vêtements propres (acc. pl.)'},
    ],[
      {w:'فِي الشِّتَاءِ',t:'en hiver'},
      {w:'يَلْبَسُ',t:'il porte'},
      {w:'سُتْرَةً',t:'une veste, un blouson'},
      {w:'وَسَرْوَالًا',t:'et un pantalon'},
      {w:'وَجَوْرَبَيْنِ',t:'et deux chaussettes (duel)'},
    ],[
      {w:'وَفِي الصَّيْفِ',t:'et en été'},
      {w:'يَلْبَسُ',t:'il porte'},
      {w:'قَمِيصًا خَفِيفًا',t:'une chemise légère'},
      {w:'وَبَنْطَلُونًا',t:'et un pantalon'},
    ],[
      {w:'أُمُّهُ',t:'sa mère'},
      {w:'تَلْبَسُ',t:'elle porte'},
      {w:'ثَوْبًا جَمِيلًا',t:'une belle robe'},
      {w:'وَحِجَابًا',t:'et un hidjab'},
    ],[
      {w:'فِي الْمَدْرَسَةِ',t:"à l\'école"},
      {w:'يَلْبَسُ الطُّلَّابُ',t:'les étudiants portent'},
      {w:'زِيًّا مُوَحَّدًا',t:'un uniforme'},
    ],[
      {w:'الأَحْذِيَةُ',t:'les chaussures (pl. brisé de حِذَاء)'},
      {w:'مُهِمَّةٌ',t:'importantes (fém. pl.)'},
      {w:'لِلرِّيَاضَةِ',t:'pour le sport'},
    ],
  ],
  vocabulary:[
    {w:'لَبِسَ',p:'لبس',tr:'labisa',fr:'porter, mettre (un vêtement)',fm:'Verbe Form I',root:'ل ب س'},
    {w:'مَلَابِس',p:'ملابس',tr:'malābis',fr:'vêtements (pl. de مَلْبَس)',fm:'Pl. brisé — schème مَفَاعِل',root:'ل ب س'},
    {w:'ثَوْب',p:'ثوب',tr:'thawb',fr:'robe, vêtement (pl. ثِيَاب)',fm:'Nom — schème فَعْل',root:'ث و ب'},
    {w:'شِتَاء',p:'شتاء',tr:"shitāʾ",fr:'hiver',fm:'Nom — schème فِعَاء',root:'ش ت و'},
    {w:'سُتْرَة',p:'سترة',tr:'sutra',fr:'veste, gilet, blouson',fm:'Nom — schème فُعْلَة',root:'س ت ر'},
    {w:'سَرْوَال',p:'سروال',tr:'sarwāl',fr:'pantalon (pl. سَرَاوِيل)',fm:'Nom — schème فَعْلَال',root:'س ر ل'},
    {w:'جَوْرَب',p:'جورب',tr:'jawrab',fr:'chaussette (pl. جَوَارِب)',fm:'Nom (emprunt persan)',root:'ج و ر'},
    {w:'صَيْف',p:'صيف',tr:'ṣayf',fr:'été',fm:'Nom — schème فَيْعَل',root:'ص ي ف'},
    {w:'قَمِيص',p:'قميص',tr:'qamīṣ',fr:'chemise (pl. قُمُصَان)',fm:'Nom — schème فَعِيل',root:'ق م ص'},
    {w:'خَفِيف',p:'خفيف',tr:'khafīf',fr:'léger, mince',fm:'Adjectif — schème فَعِيل',root:'خ ف ف'},
    {w:'بَنْطَلُون',p:'بنطلون',tr:'banṭalūn',fr:'pantalon (emprunt du français)',fm:'Nom (emprunt)',root:'—'},
    {w:'حِجَاب',p:'حجاب',tr:'ḥijāb',fr:'voile, hidjab (pl. حُجُب)',fm:'Nom — schème فِعَال',root:'ح ج ب'},
    {w:'زِيّ مُوَحَّد',p:'زي موحد',tr:'ziyy muwaḥḥad',fr:'uniforme scolaire',fm:'Syntagme nominal',root:'ز ي ي'},
    {w:'حِذَاء',p:'حذاء',tr:"ḥidhāʾ",fr:'chaussure (pl. أَحْذِيَة)',fm:'Nom — schème فِعَاء',root:'ح ذ و'},
    {w:'مُهِمّ',p:'مهم',tr:'muhimm',fr:'important, essentiel',fm:'Adjectif — participe actif Form IV',root:'ه م م'},
    {w:'رِيَاضَة',p:'رياضة',tr:'riyāḍa',fr:'sport, exercice physique',fm:'Nom — schème فِعَالَة',root:'ر و ض'},
  ],
  grammar:{
    concept:'الْمُفْرَدُ وَالْجَمْعُ — Singulier et pluriel',
    excerptW:'ثَوْبٌ ← ثِيَابٌ · طَالِبٌ ← طُلَّابٌ · حِذَاءٌ ← أَحْذِيَةٌ · مُعَلِّمٌ ← مُعَلِّمُونَ',
    excerptP:'ثوب ← ثياب · طالب ← طلاب · حذاء ← أحذية · معلم ← معلمون',
    exp:"L\'arabe a trois types de pluriel. <strong>① Pluriel sain masculin</strong> : ajouter ـُونَ / ـِينَ. <strong>② Pluriel sain féminin</strong> : ajouter ـَات. <strong>③ Pluriel brisé (جَمْع التَّكْسِير)</strong> : la structure interne change — c\'est le plus fréquent et il faut le mémoriser mot à mot.",
    gtblHeaders:['Singulier','Type','Pluriel','Signification'],
    table:[
      {v:'ثَوْبٌ',f:'pl. brisé',m:'ثِيَابٌ',fr:'vêtement(s)'},
      {v:'طَالِبٌ',f:'pl. brisé',m:'طُلَّابٌ',fr:'étudiant(s)'},
      {v:'حِذَاءٌ',f:'pl. brisé',m:'أَحْذِيَةٌ',fr:'chaussure(s)'},
      {v:'كِتَابٌ',f:'pl. brisé',m:'كُتُبٌ',fr:'livre(s)'},
      {v:'مُعَلِّمٌ',f:'pl. masc. sain',m:'مُعَلِّمُونَ',fr:'enseignant(s)'},
      {v:'مُعَلِّمَةٌ',f:'pl. fém. sain',m:'مُعَلِّمَاتٌ',fr:'enseignante(s)'},
    ],
    note:"Schèmes fréquents : <strong>فَعِيل → فُعَلَاء</strong> (طَبِيب → أَطِبَّاء) · <strong>فِعَال → فُعُل</strong> (كِتَاب → كُتُب) · <strong>فَاعِل → فَوَاعِل</strong> (شَارِع → شَوَارِع).",
  },
};

/* ═══════════════════════════════════════════════
   A1 · T7 — الطَّقْسُ وَالْفُصُولُ
   Grammaire : الضمائر الشخصية
═══════════════════════════════════════════════ */
const A1_T7 = {
  id:'a1-7', level:'A1',
  titleW:'الطَّقْسُ وَالْفُصُولُ', titleP:'الطقس والفصول',
  titleFr:'La météo et les saisons',
  sentences:[
    [
      {w:'فُصُولُ السَّنَةِ',t:"les saisons de l\'année (idāfa)"},
      {w:'أَرْبَعَةٌ',t:'quatre'},
      {w:'الرَّبِيعُ وَالصَّيْفُ وَالْخَرِيفُ وَالشِّتَاءُ',t:"le printemps, l\'été, l\'automne et l\'hiver"},
    ],[
      {w:'فِي الرَّبِيعِ',t:'au printemps'},
      {w:'يَكُونُ الطَّقْسُ مُعْتَدِلًا',t:'le temps est doux, tempéré'},
      {w:'وَتَتَفَتَّحُ الأَزْهَارُ',t:"et les fleurs s\'épanouissent (Form V)"},
    ],[
      {w:'فِي الصَّيْفِ',t:'en été'},
      {w:'تَشْتَدُّ الْحَرَارَةُ',t:'la chaleur est intense (Form VIII · ش‑د‑د)'},
      {w:'وَيَذْهَبُ النَّاسُ',t:'et les gens vont'},
      {w:'إِلَى الشَّاطِئِ',t:'à la plage'},
    ],[
      {w:'فِي الْخَرِيفِ',t:'en automne'},
      {w:'تَتَسَاقَطُ الأَوْرَاقُ',t:'les feuilles tombent (Form VI)'},
      {w:'وَيَبْدَأُ الْمَطَرُ',t:'et la pluie commence'},
    ],[
      {w:'فِي الشِّتَاءِ',t:'en hiver'},
      {w:'يَبْرُدُ الْجَوُّ',t:"l\'air refroidit"},
      {w:'وَأَحْيَانًا',t:'et parfois'},
      {w:'تَتَسَاقَطُ الثُّلُوجُ',t:'il neige (litt. les neiges tombent)'},
    ],[
      {w:'أَيُّ فَصْلٍ',t:'quelle saison'},
      {w:'تُحِبُّ؟',t:'aimes-tu ? (masc. sg.)'},
    ],
  ],
  vocabulary:[
    {w:'فَصْل',p:'فصل',tr:'faṣl',fr:'saison, chapitre (pl. فُصُول)',fm:'Nom — schème فَعْل',root:'ف ص ل'},
    {w:'سَنَة',p:'سنة',tr:'sana',fr:'année, an (pl. سَنَوَات)',fm:'Nom — schème فَعَلَة',root:'س ن و'},
    {w:'رَبِيع',p:'ربيع',tr:"rabīʿ",fr:'printemps',fm:'Nom — schème فَعِيل',root:'ر ب ع'},
    {w:'خَرِيف',p:'خريف',tr:'kharīf',fr:'automne',fm:'Nom — schème فَعِيل',root:'خ ر ف'},
    {w:'طَقْس',p:'طقس',tr:'ṭaqs',fr:'météo, temps (atmosphérique)',fm:'Nom — schème فَعْل',root:'ط ق س'},
    {w:'مُعْتَدِل',p:'معتدل',tr:"muʿtadil",fr:'doux, tempéré, modéré',fm:'Participe actif Form VIII',root:'ع د ل'},
    {w:'حَرَارَة',p:'حرارة',tr:'ḥarāra',fr:'chaleur, température',fm:'Nom — schème فَعَالَة',root:'ح ر ر'},
    {w:'شَاطِئ',p:'شاطئ',tr:"shāṭiʾ",fr:'plage, rivage (pl. شَوَاطِئ)',fm:'Nom — schème فَاعِل',root:'ش ط أ'},
    {w:'وَرَقَة',p:'ورقة',tr:'waraqa',fr:'feuille (pl. أَوْرَاق)',fm:'Nom — schème فَعَلَة',root:'و ر ق'},
    {w:'مَطَر',p:'مطر',tr:'maṭar',fr:'pluie (pl. أَمْطَار)',fm:'Nom — schème فَعَل',root:'م ط ر'},
    {w:'جَوّ',p:'جو',tr:'jaww',fr:'atmosphère, air, ambiance',fm:'Nom — géminé',root:'ج و و'},
    {w:'ثَلْج',p:'ثلج',tr:'thalj',fr:'neige (pl. ثُلُوج)',fm:'Nom — schème فَعْل',root:'ث ل ج'},
    {w:'بَرَدَ',p:'برد',tr:'barada',fr:'refroidir, devenir froid',fm:'Verbe Form I',root:'ب ر د'},
    {w:'أَحْيَانًا',p:'أحيانا',tr:'aḥyānan',fr:'parfois, de temps en temps',fm:'Adverbe (pl. de حِين)',root:'ح ي ن'},
    {w:'نَاس',p:'ناس',tr:'nās',fr:'gens, personnes',fm:'Nom collectif (pl. de إِنْسَان)',root:'أ ن س'},
    {w:'تَفَتَّحَ',p:'تفتح',tr:'tafattaḥa',fr:"s\'épanouir, s\'ouvrir",fm:'Verbe Form V',root:'ف ت ح'},
  ],
  grammar:{
    concept:'الضَّمَائِرُ الشَّخْصِيَّةُ — Les pronoms personnels',
    excerptW:'هُوَ سَعِيدٌ · هِيَ جَمِيلَةٌ · نَحْنُ طُلَّابٌ · أَنْتُمْ أَصْدِقَاءُ',
    excerptP:'هو سعيد · هي جميلة · نحن طلاب · أنتم أصدقاء',
    exp:"Les pronoms personnels arabes distinguent le genre au singulier ET au pluriel, et ont une forme spéciale pour le <strong>duel</strong>. Ils s\'utilisent seuls dans la phrase nominale ou pour renforcer le sujet. Différence essentielle : <strong>أَنْتَ</strong> (tu, m.) ≠ <strong>أَنْتِ</strong> (tu, f.).",
    gtblHeaders:['Pronom','Transcription','Sens','Exemple'],
    table:[
      {v:'أَنَا',f:'anā',m:'أَنَا طَالِبٌ',fr:'je — je suis étudiant'},
      {v:'أَنْتَ',f:'anta',m:'أَنْتَ كَبِيرٌ',fr:'tu (m.) — tu es grand'},
      {v:'أَنْتِ',f:'anti',m:'أَنْتِ جَمِيلَةٌ',fr:'tu (f.) — tu es belle'},
      {v:'هُوَ',f:'huwa',m:'هُوَ سَعِيدٌ',fr:'il — il est heureux'},
      {v:'هِيَ',f:'hiya',m:'هِيَ طَالِبَةٌ',fr:'elle — elle est étudiante'},
      {v:'نَحْنُ',f:'naḥnu',m:'نَحْنُ أَصْدِقَاءُ',fr:'nous — nous sommes amis'},
      {v:'أَنْتُمْ',f:'antum',m:'أَنْتُمْ طُلَّابٌ',fr:'vous (m. pl.) — vous êtes étudiants'},
      {v:'هُمْ',f:'hum',m:'هُمْ سُعَدَاءُ',fr:'ils — ils sont heureux'},
    ],
    note:"Formes à connaître aussi : <strong>هُنَّ</strong> (elles) · <strong>أَنْتُنَّ</strong> (vous, f. pl.) · <strong>هُمَا / أَنْتُمَا</strong> (eux/vous deux — duel). En pratique, les formes masculines servent souvent de formes génériques.",
  },
};

/* ═══════════════════════════════════════════════
   A1 · T8 — الْحَيَوَانَاتُ
   Grammaire : الإضافة (annexion nominale)
═══════════════════════════════════════════════ */
const A1_T8 = {
  id:'a1-8', level:'A1',
  titleW:'الْحَيَوَانَاتُ', titleP:'الحيوانات',
  titleFr:'Les animaux',
  sentences:[
    [
      {w:'تَعِيشُ',t:'vivent (Form I · ع‑ي‑ش, défectueux)'},
      {w:'حَيَوَانَاتٌ كَثِيرَةٌ',t:'de nombreux animaux'},
      {w:'فِي الطَّبِيعَةِ',t:'dans la nature'},
    ],[
      {w:'أَسَدُ الْغَابَةِ',t:"le lion de la forêt (idāfa)"},
      {w:'هُوَ مَلِكُ الْحَيَوَانَاتِ',t:'est le roi des animaux (idāfa)'},
    ],[
      {w:'جَمَلُ الصَّحْرَاءِ',t:'le chameau du désert (idāfa)'},
      {w:'يَتَحَمَّلُ',t:'supporte, endure (Form V · ح‑م‑ل)'},
      {w:'الْحَرَارَةَ وَالْعَطَشَ',t:'la chaleur et la soif'},
    ],[
      {w:'الطُّيُورُ',t:'les oiseaux (pl. brisé de طَائِر)'},
      {w:'تُغَرِّدُ',t:'gazouillent (Form II · غ‑ر‑د)'},
      {w:'بِأَصْوَاتٍ جَمِيلَةٍ',t:'avec de belles voix'},
      {w:'فِي الصَّبَاحِ',t:'le matin'},
    ],[
      {w:'فِي الْبَيْتِ',t:'à la maison'},
      {w:'يُحِبُّ الأَطْفَالُ',t:'les enfants aiment'},
      {w:'تَرْبِيَةَ الْقِطَطِ وَالْكِلَابِ',t:"l\'élevage des chats et des chiens (idāfa)"},
    ],[
      {w:'الْحِيتَانُ',t:'les baleines (pl. de حُوت)'},
      {w:'هِيَ أَكْبَرُ',t:'elles sont les plus grandes'},
      {w:'حَيَوَانَاتِ الْبَحْرِ',t:'des animaux de la mer (idāfa)'},
    ],
  ],
  vocabulary:[
    {w:'حَيَوَان',p:'حيوان',tr:'ḥayawān',fr:'animal (pl. حَيَوَانَات)',fm:'Nom — schème فَعَلَان',root:'ح ي و'},
    {w:'طَبِيعَة',p:'طبيعة',tr:"ṭabīʿa",fr:'nature',fm:'Nom — schème فَعِيلَة',root:'ط ب ع'},
    {w:'أَسَد',p:'أسد',tr:'asad',fr:'lion (pl. أُسُود)',fm:'Nom — schème فَعَل',root:'أ س د'},
    {w:'غَابَة',p:'غابة',tr:'ghāba',fr:'forêt (pl. غَابَات)',fm:'Nom — schème فَاعَلَة',root:'غ ي ب'},
    {w:'مَلِك',p:'ملك',tr:'malik',fr:'roi, monarque (pl. مُلُوك)',fm:'Nom — schème فَعِل',root:'م ل ك'},
    {w:'جَمَل',p:'جمل',tr:'jamal',fr:'chameau (pl. جِمَال)',fm:'Nom — schème فَعَل',root:'ج م ل'},
    {w:'صَحْرَاء',p:'صحراء',tr:"ṣaḥrāʾ",fr:'désert (pl. صَحَارَى)',fm:'Nom — schème فَعْلَاء',root:'ص ح ر'},
    {w:'تَحَمَّلَ',p:'تحمل',tr:'taḥammala',fr:'supporter, endurer, tolérer',fm:'Verbe Form V',root:'ح م ل'},
    {w:'عَطَش',p:'عطش',tr:"ʿaṭash",fr:'soif',fm:'Nom — schème فَعَل',root:'ع ط ش'},
    {w:'طَائِر',p:'طائر',tr:"ṭāʾir",fr:'oiseau (pl. بrisé طُيُور)',fm:'Participe actif Form I',root:'ط ي ر'},
    {w:'غَرَّدَ',p:'غرد',tr:'gharrada',fr:'gazouiller, chanter (oiseau)',fm:'Verbe Form II',root:'غ ر د'},
    {w:'صَوْت',p:'صوت',tr:'ṣawt',fr:'voix, son (pl. أَصْوَات)',fm:'Nom — schème فَعْل',root:'ص و ت'},
    {w:'قِطَّة',p:'قطة',tr:'qiṭṭa',fr:'chat, chatte (pl. قِطَط)',fm:'Nom — géminé avec ة',root:'ق ط ط'},
    {w:'كَلْب',p:'كلب',tr:'kalb',fr:'chien (pl. كِلَاب)',fm:'Nom — schème فَعْل',root:'ك ل ب'},
    {w:'حُوت',p:'حوت',tr:'ḥūt',fr:'baleine, grand poisson (pl. حِيتَان)',fm:'Nom — schème فُعْل',root:'ح و ت'},
    {w:'بَحْر',p:'بحر',tr:'baḥr',fr:'mer, océan (pl. بِحَار)',fm:'Nom — schème فَعْل',root:'ب ح ر'},
    {w:'تَرْبِيَة',p:'تربية',tr:'tarbiya',fr:"éducation, élevage",fm:'Masdar Form II (رَبَّى)',root:'ر ب و'},
    {w:'عَاشَ',p:'عاش',tr:"ʿāsha",fr:'vivre, exister, habiter',fm:'Verbe Form I — défectueux',root:'ع ي ش'},
  ],
  grammar:{
    concept:'الإِضَافَةُ — L\'annexion nominale (idāfa)',
    excerptW:'أَسَدُ الْغَابَةِ · مَلِكُ الْحَيَوَانَاتِ · جَمَلُ الصَّحْرَاءِ · حَيَوَانَاتُ الْبَحْرِ',
    excerptP:'أسد الغابة · ملك الحيوانات · جمل الصحراء · حيوانات البحر',
    exp:"L\'idāfa exprime la possession ou l\'appartenance (équivalent du \"de\" français). Deux règles absolues : <strong>① le premier terme (مُضَاف)</strong> perd son article ET son tanwīn. <strong>② le second terme (مُضَاف إِلَيْهِ)</strong> se met au <strong>cas génitif (ـِ / ـٍ)</strong>.",
    gtblHeaders:['مُضَاف','مُضَاف إِلَيْهِ','Idāfa complète','Traduction'],
    table:[
      {v:'أَسَدُ',f:'الْغَابَةِ',m:'أَسَدُ الْغَابَةِ',fr:'le lion de la forêt'},
      {v:'مَلِكُ',f:'الْحَيَوَانَاتِ',m:'مَلِكُ الْحَيَوَانَاتِ',fr:'le roi des animaux'},
      {v:'جَمَلُ',f:'الصَّحْرَاءِ',m:'جَمَلُ الصَّحْرَاءِ',fr:'le chameau du désert'},
      {v:'غُرْفَةُ',f:'النَّوْمِ',m:'غُرْفَةُ النَّوْمِ',fr:'la chambre à coucher'},
      {v:'كِتَابُ',f:'الطَّالِبِ',m:'كِتَابُ الطَّالِبِ',fr:"le livre de l\'étudiant"},
      {v:'بَيْتُ',f:'أَحْمَدَ',m:'بَيْتُ أَحْمَدَ',fr:"la maison d\'Ahmad"},
    ],
    note:"L\'idāfa peut s\'enchaîner sur trois termes : <strong>كِتَابُ طَالِبِ الْمَدْرَسَةِ</strong> = le livre de l\'étudiant de l\'école. Dans ce cas seul le dernier terme garde son article.",
  },
};

/* ═══════════════════════════════════════════════
   A1 · T9 — الأَعْدَادُ وَالتَّارِيخُ
   Grammaire : الأعداد (numéraux cardinaux)
═══════════════════════════════════════════════ */
const A1_T9 = {
  id:'a1-9', level:'A1',
  titleW:'الأَعْدَادُ وَالتَّارِيخُ', titleP:'الأعداد والتاريخ',
  titleFr:'Les chiffres et les dates',
  sentences:[
    [
      {w:'الأَعْدَادُ',t:'les chiffres, les nombres (pl. de عَدَد)'},
      {w:'أَسَاسُ الرِّيَاضِيَّاتِ',t:'la base des mathématiques (idāfa)'},
      {w:'وَالْعُلُومِ',t:'et des sciences'},
    ],[
      {w:'فِي الأُسْبُوعِ',t:'dans la semaine'},
      {w:'سَبْعَةُ أَيَّامٍ',t:'sept jours (polarité : يَوْم est masc. → عدد fém.)'},
      {w:'وَفِي الشَّهْرِ',t:'et dans le mois'},
      {w:'ثَلَاثُونَ يَوْمًا',t:'trente jours'},
    ],[
      {w:'الأَرْقَامُ مِنْ وَاحِدٍ إِلَى عَشَرَةٍ',t:'les chiffres de 1 à 10'},
      {w:'وَاحِدٌ، اثْنَانِ، ثَلَاثَةٌ،',t:'un, deux, trois'},
      {w:'أَرْبَعَةٌ، خَمْسَةٌ، سِتَّةٌ،',t:'quatre, cinq, six'},
      {w:'سَبْعَةٌ، ثَمَانِيَةٌ، تِسْعَةٌ، عَشَرَةٌ',t:'sept, huit, neuf, dix'},
    ],[
      {w:'فِي الصَّفِّ',t:'dans la classe'},
      {w:'خَمْسَةٌ وَعِشْرُونَ طَالِبًا',t:'vingt-cinq étudiants'},
    ],[
      {w:'اشْتَرَى أَحْمَدُ',t:'Ahmad a acheté (Form VIII · ش‑ر‑ي)'},
      {w:'كِتَابًا',t:'un livre'},
      {w:'بِعَشَرَةِ دَرَاهِمَ',t:'pour dix dirhams'},
    ],[
      {w:'كَمْ سَاعَةً فِي الْيَوْمِ؟',t:"combien d\'heures dans le jour ?"},
      {w:'أَرْبَعٌ وَعِشْرُونَ سَاعَةً',t:'vingt-quatre heures'},
    ],
  ],
  vocabulary:[
    {w:'عَدَد',p:'عدد',tr:"ʿadad",fr:'chiffre, nombre (pl. أَعْدَاد)',fm:'Nom — schème فَعَل (géminé)',root:'ع د د'},
    {w:'رَقَم',p:'رقم',tr:'raqam',fr:'chiffre, numéro (pl. أَرْقَام)',fm:'Nom — schème فَعَل',root:'ر ق م'},
    {w:'أَسَاس',p:'أساس',tr:'asās',fr:'fondement, base (pl. أُسُس)',fm:'Nom — schème فَعَال',root:'أ س س'},
    {w:'رِيَاضِيَّات',p:'رياضيات',tr:'riyāḍiyyāt',fr:'mathématiques',fm:'Pl. de رِيَاضِيَّة (nisba + ات)',root:'ر و ض'},
    {w:'عِلْم',p:'علم',tr:"ʿilm",fr:'science, savoir (pl. عُلُوم)',fm:'Nom — schème فِعْل',root:'ع ل م'},
    {w:'أُسْبُوع',p:'أسبوع',tr:"usbūʿ",fr:'semaine (pl. أَسَابِيع)',fm:'Nom — schème أُفْعُول',root:'س ب ع'},
    {w:'يَوْم',p:'يوم',tr:'yawm',fr:'jour (pl. أَيَّام)',fm:'Nom — schème فَعْل',root:'ي و م'},
    {w:'شَهْر',p:'شهر',tr:'shahr',fr:'mois (pl. شُهُور / أَشْهُر)',fm:'Nom — schème فَعْل',root:'ش ه ر'},
    {w:'تَارِيخ',p:'تاريخ',tr:'tārīkh',fr:'date, histoire',fm:'Nom — schème فَاعِيل',root:'أ ر خ'},
    {w:'صَفّ',p:'صف',tr:'ṣaff',fr:'classe scolaire, rang (pl. صُفُوف)',fm:'Nom — géminé',root:'ص ف ف'},
    {w:'اشْتَرَى',p:'اشترى',tr:'ishtarā',fr:'acheter',fm:'Verbe Form VIII — défectueux',root:'ش ر ي'},
    {w:'كِتَاب',p:'كتاب',tr:'kitāb',fr:'livre (pl. كُتُب)',fm:'Nom — schème فِعَال',root:'ك ت ب'},
    {w:'دِرْهَم',p:'درهم',tr:'dirham',fr:'dirham (pl. دَرَاهِم)',fm:'Nom (emprunt grec)',root:'د ر ه'},
    {w:'سَاعَة',p:'ساعة',tr:'sāʿa',fr:'heure, montre, horloge (pl. سَاعَات)',fm:'Nom (emprunt)',root:'س و ع'},
  ],
  grammar:{
    concept:'الأَعْدَادُ الأَصْلِيَّةُ — Les numéraux cardinaux',
    excerptW:'سَبْعَةُ أَيَّامٍ · ثَلَاثُونَ يَوْمًا · خَمْسَةٌ وَعِشْرُونَ طَالِبًا',
    excerptP:'سبعة أيام · ثلاثون يومًا · خمسة وعشرون طالبًا',
    exp:"Les numéraux arabes obéissent à la règle de <strong>polarité (مُخَالَفَة)</strong> pour les nombres 3–10 : si le nom compté est <strong>masculin</strong>, le nombre prend la forme <strong>féminine</strong>, et vice-versa. Au-delà de 10, les règles se simplifient. Le nom compté se met toujours au <strong>génitif pluriel</strong>.",
    gtblHeaders:['Chiffre','Masc. (avec fém.)','Fém. (avec masc.)','Exemple'],
    table:[
      {v:'1',f:'وَاحِدٌ',m:'وَاحِدَةٌ',fr:'accord normal de genre'},
      {v:'2',f:'اثْنَانِ',m:'اثْنَتَانِ',fr:'accord genre (duel)'},
      {v:'3',f:'ثَلَاثَةٌ ← رِجَال',m:'ثَلَاثٌ ← نِسَاء',fr:'polarité active'},
      {v:'10',f:'عَشَرَةٌ ← رِجَال',m:'عَشْرٌ ← نِسَاء',fr:'polarité active'},
      {v:'11–19',f:'أَحَدَ عَشَرَ',m:'إِحْدَى عَشْرَةَ',fr:'seul le 1er varie'},
      {v:'20–90',f:'عِشْرُونَ … تِسْعُونَ',m:'(invariable)',fr:'même forme masc./fém.'},
    ],
    note:"Mémorisez les 10 premiers nombres : وَاحِد · اثْنَان · ثَلَاثَة · أَرْبَعَة · خَمْسَة · سِتَّة · سَبْعَة · ثَمَانِيَة · تِسْعَة · عَشَرَة. Ce sont les formes masculines (avec fém. = enlever ة pour 3–9).",
  },
};

/* ═══════════════════════════════════════════════
   A1 · T10 — التَّحِيَّاتُ وَالتَّعَارُفُ
   Grammaire : كَانَ وَأَخَوَاتُهَا
═══════════════════════════════════════════════ */
const A1_T10 = {
  id:'a1-10', level:'A1',
  titleW:'التَّحِيَّاتُ وَالتَّعَارُفُ', titleP:'التحيات والتعارف',
  titleFr:'Salutations et présentations',
  sentences:[
    [
      {w:'حِينَ الْتَقَى أَحْمَدُ',t:"quand Ahmad rencontra (Form VIII · ل‑ق‑ي)"},
      {w:'بِصَدِيقِهِ',t:'avec son ami (possessif m.)'},
      {w:'قَالَ',t:'il dit (Form I · ق‑و‑ل, défectueux)'},
    ],[
      {w:'السَّلَامُ عَلَيْكُمْ!',t:'que la paix soit sur vous ! (salutation islamique)'},
      {w:'وَعَلَيْكُمُ السَّلَامُ!',t:'et sur vous la paix ! (réponse)'},
    ],[
      {w:'كَيْفَ حَالُكَ؟',t:'comment vas-tu ? (litt. comment ton état ?)'},
      {w:'أَنَا بِخَيْرٍ، شُكْرًا',t:"je vais bien, merci"},
      {w:'وَأَنْتَ؟',t:'et toi ? (masc.)'},
    ],[
      {w:'كَانَ أَحْمَدُ',t:"Ahmad était (كَانَ + اسمها nominatif)"},
      {w:'مُبْتَسِمًا وَمَسْرُورًا',t:'souriant et content (خبرها accusatif)'},
    ],[
      {w:'ثُمَّ تَعَرَّفَ',t:'puis il fit connaissance (Form V · ع‑ر‑ف)'},
      {w:'عَلَى شَخْصٍ جَدِيدٍ',t:"avec une nouvelle personne"},
    ],[
      {w:'مَرْحَبًا!',t:'bonjour ! bienvenue !'},
      {w:'اسْمِي أَحْمَدُ',t:'je m\'appelle Ahmad (litt. mon nom est)'},
      {w:'أَنَا مِنَ الْمَغْرِبِ',t:'je suis du Maroc'},
    ],[
      {w:'أَهْلًا وَسَهْلًا!',t:'bienvenue ! (litt. famille et facilité)'},
      {w:'أَنَا خَالِدٌ',t:'je suis Khalid'},
      {w:'مِنَ السُّعُودِيَّةِ',t:"d\'Arabie Saoudite"},
    ],
  ],
  vocabulary:[
    {w:'حِين',p:'حين',tr:'ḥīn',fr:'quand, au moment où (pl. أَحْيَان)',fm:'Nom de temps / conjonction',root:'ح ي ن'},
    {w:'الْتَقَى',p:'التقى',tr:'iltaqā',fr:'rencontrer, se retrouver',fm:'Verbe Form VIII — défectueux',root:'ل ق ي'},
    {w:'قَالَ',p:'قال',tr:'qāla',fr:'dire, déclarer',fm:'Verbe Form I — défectueux (و‑ق‑ل)',root:'ق و ل'},
    {w:'رَدَّ',p:'رد',tr:'radda',fr:'répondre, rendre',fm:'Verbe Form I — géminé',root:'ر د د'},
    {w:'السَّلَام',p:'السلام',tr:'as-salām',fr:'la paix, le salut islamique',fm:'Nom — schème فَعَال',root:'س ل م'},
    {w:'شُكْرًا',p:'شكرا',tr:'shukran',fr:'merci (litt. une action de grâce)',fm:'Masdar à l\'accusatif (formule figée)',root:'ش ك ر'},
    {w:'بِخَيْرٍ',p:'بخير',tr:'bi-khayr',fr:'bien, en bonne santé (litt. en bien)',fm:'Prép. + nom — خَيْر (bien, bonheur)',root:'خ ي ر'},
    {w:'مَرْحَبًا',p:'مرحبا',tr:'marḥaban',fr:'bonjour, bienvenue',fm:'Masdar à l\'accusatif (formule figée)',root:'ر ح ب'},
    {w:'أَهْلًا وَسَهْلًا',p:'أهلا وسهلا',tr:'ahlan wa-sahlan',fr:'bienvenue (formule d\'accueil)',fm:'Expression figée (famille + facilité)',root:'أ ه ل'},
    {w:'تَعَرَّفَ عَلَى',p:'تعرف على',tr:"taʿarrafa ʿalā",fr:'faire connaissance avec',fm:'Verbe Form V',root:'ع ر ف'},
    {w:'شَخْص',p:'شخص',tr:'shakhṣ',fr:'personne, individu (pl. أَشْخَاص)',fm:'Nom — schème فَعْل',root:'ش خ ص'},
    {w:'جَدِيد',p:'جديد',tr:'jadīd',fr:'nouveau, récent, neuf (pl. جُدُد)',fm:'Adjectif — schème فَعِيل',root:'ج د د'},
    {w:'مُبْتَسِم',p:'مبتسم',tr:'mubtasim',fr:'souriant',fm:'Participe actif Form VIII',root:'ب س م'},
    {w:'كَانَ',p:'كان',tr:'kāna',fr:'était, il y avait (auxiliaire passé)',fm:'Verbe Form I — défectueux (و)',root:'ك و ن'},
    {w:'لَيْسَ',p:'ليس',tr:'laysa',fr:"n\'est pas (négation nominale)",fm:'Verbe figé — sœur de كَانَ',root:'ل ي س'},
    {w:'صَارَ',p:'صار',tr:'ṣāra',fr:'devenir, se transformer en',fm:'Verbe Form I — défectueux (sœur de كَانَ)',root:'ص و ر'},
  ],
  grammar:{
    concept:'كَانَ وَأَخَوَاتُهَا — Les sœurs de kāna',
    excerptW:'كَانَ أَحْمَدُ مُبْتَسِمًا · لَيْسَ الأَمْرُ صَعْبًا · صَارَ الطِّفْلُ طَالِبًا',
    excerptP:'كان أحمد مبتسمًا · ليس الأمر صعبًا · صار الطفل طالبًا',
    exp:"كَانَ et ses «sœurs» (أَخَوَات) modifient la phrase nominale. Elles mettent le sujet <strong>(اسمها)</strong> au nominatif et le prédicat <strong>(خبرها)</strong> à l'<strong>accusatif (ـًا / ـَ)</strong>. C\'est la différence essentielle avec la phrase nominale simple : هُوَ سَعِيدٌ → كَانَ سَعِيدًا.",
    gtblHeaders:['Verbe (فِعْل)','Transcription','Exemple','Traduction'],
    table:[
      {v:'كَانَ',f:'kāna',m:'كَانَ الطَّقْسُ بَارِدًا',fr:'Le temps était froid (passé)'},
      {v:'أَصْبَحَ',f:'aṣbaḥa',m:'أَصْبَحَ طَالِبًا',fr:'Il devint / est devenu étudiant'},
      {v:'صَارَ',f:'ṣāra',m:'صَارَ مَشْهُورًا',fr:'Il devint célèbre'},
      {v:'لَيْسَ',f:'laysa',m:'لَيْسَ الدَّرْسُ صَعْبًا',fr:"La leçon n\'est pas difficile"},
      {v:'مَازَالَ',f:'mā zāla',m:'مَازَالَ سَعِيدًا',fr:'Il est encore heureux'},
      {v:'أَمْسَى',f:'amsā',m:'أَمْسَى الجَوُّ بَارِدًا',fr:"L\'air devint froid le soir"},
    ],
    note:"Mémorisez le schéma : <strong>كَانَ + اسم (nominatif) + خبر (accusatif)</strong>. Exemple : كَانَ <strong>أَحْمَدُ</strong> (sujet, marf') <strong>مُبْتَسِمًا</strong> (prédicat, manṣūb).",
  },
};

/* ═══════════════════════════════════════════════
   A1 · T11 — فِي السُّوقِ
   Grammaire : الظَّرْف الزَّمَانِيّ وَالْمَكَانِيّ
═══════════════════════════════════════════════ */
const A1_T11 = {
  id:'a1-11', level:'A1',
  titleW:'فِي السُّوقِ', titleP:'في السوق',
  titleFr:'Au marché',
  sentences:[
    [
      {w:'يَذْهَبُ أَحْمَدُ',t:'Ahmad se rend'},
      {w:'إِلَى السُّوقِ',t:'au marché'},
      {w:'كُلَّ يَوْمِ جُمُعَةٍ',t:'chaque vendredi (idāfa double)'},
    ],[
      {w:'هُنَاكَ',t:'là-bas (adverbe de lieu)'},
      {w:'يَجِدُ',t:'il trouve (Form I · و‑ج‑د, défectueux)'},
      {w:'خُضَارًا وَفَوَاكِهَ طَازِجَةً',t:'des légumes et des fruits frais'},
    ],[
      {w:'يَسْأَلُ الْبَائِعَ',t:'il demande au vendeur'},
      {w:'بِكَمِ الْكِيلُو؟',t:'combien coûte le kilo ?'},
    ],[
      {w:'فَيَرُدُّ الْبَائِعُ',t:'alors le vendeur répond'},
      {w:'بِخَمْسَةِ دَرَاهِمَ',t:'cinq dirhams'},
      {w:'الْكِيلُو',t:'le kilo'},
    ],[
      {w:'يَشْتَرِي أَحْمَدُ',t:'Ahmad achète'},
      {w:'تُفَّاحًا وَمَوْزًا',t:'des pommes et des bananes'},
      {w:'وَعِنَبًا',t:'et du raisin'},
    ],[
      {w:'ثُمَّ',t:'puis, ensuite (adverbe de temps)'},
      {w:'يَدْفَعُ الثَّمَنَ',t:'il paie le prix'},
      {w:'وَيَشْكُرُ الْبَائِعَ',t:'et remercie le vendeur'},
    ],[
      {w:'فِي السُّوقِ',t:'au marché (adverbe de lieu)'},
      {w:'كُلُّ شَيْءٍ مُتَوَفِّرٌ',t:'tout est disponible'},
      {w:'وَالأَسْعَارُ مَعْقُولَةٌ',t:'et les prix sont raisonnables'},
    ],
  ],
  vocabulary:[
    {w:'سُوق',p:'سوق',tr:'sūq',fr:'marché, souk (pl. أَسْوَاق)',fm:'Nom — schème فُعْل',root:'س و ق'},
    {w:'جُمُعَة',p:'جمعة',tr:"jumuʿa",fr:'vendredi ; semaine',fm:'Nom — schème فُعُلَة',root:'ج م ع'},
    {w:'وَجَدَ',p:'وجد',tr:'wajada',fr:'trouver, découvrir',fm:'Verbe Form I',root:'و ج د'},
    {w:'بَائِع',p:'بائع',tr:"bāʾiʿ",fr:'vendeur, commerçant (pl. بَائِعُون)',fm:'Participe actif Form I',root:'ب ي ع'},
    {w:'كِيلُو',p:'كيلو',tr:'kīlū',fr:'kilogramme',fm:'Nom (emprunt)',root:'—'},
    {w:'تُفَّاح',p:'تفاح',tr:'tuffāḥ',fr:'pomme(s) (nom collectif)',fm:'Nom collectif — schème فُعَّال',root:'ف و ح'},
    {w:'مَوْز',p:'موز',tr:'mawz',fr:'banane(s) (nom collectif)',fm:'Nom collectif',root:'م و ز'},
    {w:'عِنَب',p:'عنب',tr:"ʿinab",fr:'raisin (nom collectif)',fm:'Nom collectif — schème فِعَل',root:'ع ن ب'},
    {w:'دَفَعَ',p:'دفع',tr:"dafaʿa",fr:'payer, pousser',fm:'Verbe Form I',root:'د ف ع'},
    {w:'ثَمَن',p:'ثمن',tr:'thaman',fr:'prix, valeur (pl. أَثْمَان)',fm:'Nom — schème فَعَل',root:'ث م ن'},
    {w:'شَكَرَ',p:'شكر',tr:'shakara',fr:'remercier, rendre grâce',fm:'Verbe Form I',root:'ش ك ر'},
    {w:'شَيْء',p:'شيء',tr:"shayʾ",fr:'chose, objet (pl. أَشْيَاء)',fm:'Nom — schème فَيْعَل',root:'ش ي أ'},
    {w:'مُتَوَفِّر',p:'متوفر',tr:'mutawaffir',fr:'disponible, abondant',fm:'Participe actif Form V',root:'و ف ر'},
    {w:'سِعْر',p:'سعر',tr:"siʿr",fr:'prix, tarif (pl. أَسْعَار)',fm:'Nom — schème فِعْل',root:'س ع ر'},
    {w:'مَعْقُول',p:'معقول',tr:"maʿqūl",fr:'raisonnable, sensé',fm:'Participe passif Form I',root:'ع ق ل'},
    {w:'هُنَاكَ',p:'هناك',tr:'hunāka',fr:'là-bas ; il y a (existentiel)',fm:'Adverbe de lieu',root:'ه ن ك'},
    {w:'ثُمَّ',p:'ثم',tr:'thumma',fr:'puis, ensuite, alors',fm:'Adverbe de temps / conjonction',root:'ث م م'},
  ],
  grammar:{
    concept:'الظَّرْفُ الزَّمَانِيُّ وَالْمَكَانِيُّ — Adverbes de temps et de lieu',
    excerptW:'هُنَاكَ يَجِدُ خُضَارًا · ثُمَّ يَدْفَعُ الثَّمَنَ · كُلَّ يَوْمِ جُمُعَةٍ',
    excerptP:'هناك يجد خضارًا · ثم يدفع الثمن · كل يوم جمعة',
    exp:"Les adverbes de temps <strong>(ظرف زمان)</strong> et de lieu <strong>(ظرف مكان)</strong> se mettent à l'<strong>accusatif (ـًا)</strong> quand ils sont indéfinis. Ils se placent généralement en début de phrase pour mettre en valeur le contexte. Beaucoup sont des noms ordinaires utilisés à l\'accusatif sans préposition.",
    gtblHeaders:['Adverbe','Type','Exemple','Traduction'],
    table:[
      {v:'هُنَا',f:'lieu',m:'هُنَا يَعِيشُ أَحْمَدُ',fr:'ici — Ahmad habite ici'},
      {v:'هُنَاكَ',f:'lieu',m:'هُنَاكَ سُوقٌ كَبِيرٌ',fr:'là-bas — il y a un grand marché'},
      {v:'الآنَ',f:'temps',m:'الآنَ أَفْهَمُ',fr:'maintenant — maintenant je comprends'},
      {v:'غَدًا',f:'temps',m:'غَدًا نَذْهَبُ إِلَى السُّوقِ',fr:'demain — demain nous allons au marché'},
      {v:'أَمْسِ',f:'temps',m:'أَمْسِ كَانَ يَوْمًا جَمِيلًا',fr:'hier — hier était une belle journée'},
      {v:'ثُمَّ',f:'temps',m:'يَأْكُلُ ثُمَّ يَشْرَبُ',fr:'puis — il mange puis il boit'},
      {v:'دَائِمًا',f:'temps',m:'هُوَ دَائِمًا مُبْتَسِمٌ',fr:'toujours — il est toujours souriant'},
      {v:'أَحْيَانًا',f:'temps',m:'أَحْيَانًا تَتَسَاقَطُ الثُّلُوجُ',fr:'parfois — parfois il neige'},
    ],
    note:"غَدًا et صَبَاحًا sont des noms à l\'accusatif utilisés comme adverbes. أَمْسِ est invariable (toujours مكسور). هُنَا / هُنَاكَ ne prennent jamais de tanwīn.",
  },
};

/* ═══════════════════════════════════════════════
   A1 · T12 — فِي الْمَدْرَسَةِ
   Grammaire : الفعل الماضي (conjugaison du passé)
═══════════════════════════════════════════════ */
const A1_T12 = {
  id:'a1-12', level:'A1',
  titleW:'فِي الْمَدْرَسَةِ', titleP:'في المدرسة',
  titleFr:"À l\'école",
  sentences:[
    [
      {w:'فِي الأَمْسِ',t:'hier (adverbe de temps)'},
      {w:'دَرَسَ الطُّلَّابُ',t:'les étudiants étudièrent (passé Form I)'},
      {w:'دَرْسًا جَدِيدًا',t:'une nouvelle leçon (acc. indéf.)'},
    ],[
      {w:'شَرَحَ الْمُعَلِّمُ',t:'le professeur expliqua (Form I · ش‑ر‑ح)'},
      {w:'الدَّرْسَ',t:'la leçon (acc. déf.)'},
      {w:'بِطَرِيقَةٍ وَاضِحَةٍ',t:'de façon claire'},
    ],[
      {w:'كَتَبَ الطُّلَّابُ',t:'les étudiants écrivirent (Form I · ك‑ت‑ب)'},
      {w:'فِي كُرَّاسَاتِهِمْ',t:'dans leurs cahiers'},
      {w:'وَطَرَحُوا',t:'et ils posèrent (3pl masc. passé)'},
      {w:'أَسْئِلَةً كَثِيرَةً',t:'de nombreuses questions'},
    ],[
      {w:'فَهِمَ أَحْمَدُ',t:'Ahmad comprit (Form I · ف‑ه‑م)'},
      {w:'الدَّرْسَ جَيِّدًا',t:'bien la leçon'},
      {w:'وَأَجَابَ',t:'et il répondit (Form IV · ج‑و‑ب)'},
      {w:'عَنْ جَمِيعِ الأَسْئِلَةِ',t:'à toutes les questions'},
    ],[
      {w:'فِي نِهَايَةِ الدَّرْسِ',t:'à la fin de la leçon (idāfa double)'},
      {w:'مَدَحَ الْمُعَلِّمُ',t:'le professeur félicita (Form I · م‑د‑ح)'},
      {w:'طُلَّابَهُ',t:'ses étudiants (acc. + possessif)'},
    ],[
      {w:'رَجَعَ الطُّلَّابُ',t:'les étudiants rentrèrent'},
      {w:'إِلَى بُيُوتِهِمْ',t:'dans leurs maisons (pl. بَيْت)'},
      {w:'فَرِحِينَ',t:'joyeux (hal — manṣūb pluriel)'},
    ],
  ],
  vocabulary:[
    {w:'دَرَسَ',p:'درس',tr:'darasa',fr:'étudier, apprendre',fm:'Verbe Form I',root:'د ر س'},
    {w:'دَرْس',p:'درس',tr:'dars',fr:'leçon, cours (pl. دُرُوس)',fm:'Nom — schème فَعْل',root:'د ر س'},
    {w:'شَرَحَ',p:'شرح',tr:'sharaḥa',fr:'expliquer, commenter',fm:'Verbe Form I',root:'ش ر ح'},
    {w:'مُعَلِّم',p:'معلم',tr:"muʿallim",fr:'enseignant, professeur (pl. مُعَلِّمُون)',fm:'Participe actif Form II',root:'ع ل م'},
    {w:'طَرِيقَة',p:'طريقة',tr:'ṭarīqa',fr:'méthode, façon, voie (pl. طُرُق)',fm:'Nom — schème فَعِيلَة',root:'ط ر ق'},
    {w:'وَاضِح',p:'واضح',tr:'wāḍiḥ',fr:'clair, évident, explicite',fm:'Adjectif — participe actif Form I',root:'و ض ح'},
    {w:'كَتَبَ',p:'كتب',tr:'kataba',fr:'écrire',fm:'Verbe Form I',root:'ك ت ب'},
    {w:'كُرَّاسَة',p:'كراسة',tr:'kurrāsa',fr:'cahier (pl. كُرَّاسَات)',fm:'Nom — schème فُعَّالَة',root:'ك ر س'},
    {w:'طَرَحَ',p:'طرح',tr:'ṭaraḥa',fr:'poser (une question), soumettre',fm:'Verbe Form I',root:'ط ر ح'},
    {w:'سُؤَال',p:'سؤال',tr:"suʾāl",fr:'question (pl. أَسْئِلَة)',fm:'Nom — schème فُعَال',root:'س أ ل'},
    {w:'فَهِمَ',p:'فهم',tr:'fahima',fr:'comprendre, saisir',fm:'Verbe Form I — schème فَعِلَ',root:'ف ه م'},
    {w:'أَجَابَ',p:'أجاب',tr:'ajāba',fr:'répondre, donner une réponse',fm:'Verbe Form IV',root:'ج و ب'},
    {w:'نِهَايَة',p:'نهاية',tr:'nihāya',fr:'fin, terme, conclusion',fm:'Nom — schème فِعَالَة',root:'ن ه ي'},
    {w:'مَدَحَ',p:'مدح',tr:'madaḥa',fr:'féliciter, louer, complimenter',fm:'Verbe Form I',root:'م د ح'},
    {w:'جَيِّد',p:'جيد',tr:'jayyid',fr:'bien, bon, de qualité',fm:'Adjectif — schème فَيْعِل',root:'ج و د'},
    {w:'أَمْس',p:'أمس',tr:'ams',fr:'hier (invariable)',fm:'Adverbe de temps (invariable)',root:'أ م س'},
    {w:'فَرِح',p:'فرح',tr:'fariḥ',fr:'joyeux, content (pl. فَرِحُون)',fm:'Adjectif — schème فَعِل',root:'ف ر ح'},
  ],
  grammar:{
    concept:'الْفِعْلُ الْمَاضِي — Conjugaison du passé',
    excerptW:'دَرَسَ · شَرَحَ · كَتَبُوا · فَهِمَ · أَجَابَ · مَدَحَ · رَجَعُوا',
    excerptP:'درس · شرح · كتبوا · فهم · أجاب · مدح · رجعوا',
    exp:"Le passé arabe se forme en ajoutant des <strong>suffixes</strong> à la racine conjuguée. Le modèle de base est <strong>فَعَلَ</strong> (3sg m) — c\'est la forme du dictionnaire. Les suffixes indiquent la personne, le nombre et le genre. Pas d\'auxiliaire — le passé est un seul mot.",
    gtblHeaders:['Forme','Personne','Exemple (دَرَسَ)','Traduction'],
    table:[
      {v:'فَعَلَ',f:'3sg m.',m:'دَرَسَ',fr:'il étudia'},
      {v:'فَعَلَتْ',f:'3sg f.',m:'دَرَسَتْ',fr:'elle étudia'},
      {v:'فَعَلْتَ',f:'2sg m.',m:'دَرَسْتَ',fr:'tu étudias (m.)'},
      {v:'فَعَلْتِ',f:'2sg f.',m:'دَرَسْتِ',fr:'tu étudias (f.)'},
      {v:'فَعَلْتُ',f:'1sg',m:'دَرَسْتُ',fr:"j\'étudiai"},
      {v:'فَعَلُوا',f:'3pl m.',m:'دَرَسُوا',fr:'ils étudièrent'},
      {v:'فَعَلْنَ',f:'3pl f.',m:'دَرَسْنَ',fr:'elles étudièrent'},
      {v:'فَعَلْنَا',f:'1pl',m:'دَرَسْنَا',fr:'nous étudiâmes'},
    ],
    note:"Règle pratique : la <strong>3ème personne masculin singulier</strong> (دَرَسَ) est la forme de base — c\'est ainsi que les verbes apparaissent dans le dictionnaire. Tous les autres suffixes s\'ajoutent à la racine sans voyelle finale : دَرَسَ → دَرَس + تُ/تَ/تِ/نَا.",
  },
};

/* ═══════════════════════════════════════════════
   A1 · T13 — وَسَائِلُ النَّقْلِ
   Grammaire : النَّعْت (accord de l\'adjectif épithète)
═══════════════════════════════════════════════ */
const A1_T13 = {
  id:'a1-13', level:'A1',
  titleW:'وَسَائِلُ النَّقْلِ', titleP:'وسائل النقل',
  titleFr:'Les transports',
  sentences:[
    [
      {w:'تَتَعَدَّدُ',t:'se multiplient, sont variés (Form V · ع‑د‑د)'},
      {w:'وَسَائِلُ النَّقْلِ',t:'les moyens de transport (idāfa)'},
      {w:'فِي الْمَدِينَةِ الْحَدِيثَةِ',t:'dans la ville moderne (adj. accord fém.)'},
    ],[
      {w:'يَرْكَبُ كَثِيرٌ مِنَ النَّاسِ',t:'de nombreuses personnes prennent'},
      {w:'الْحَافِلَةَ الْعَامَّةَ',t:'le bus public (adj. accord fém. déf.)'},
      {w:'لِلتَّنَقُّلِ',t:'pour se déplacer (masdar Form V)'},
    ],[
      {w:'السَّيَّارَةُ الْخَاصَّةُ',t:'la voiture privée (adj. accord fém. déf.)'},
      {w:'مَرِيحَةٌ',t:'confortable (fém. indéf.)'},
      {w:'لَكِنَّهَا مُكْلِفَةٌ',t:'mais elle est chère'},
    ],[
      {w:'الْقِطَارُ السَّرِيعُ',t:'le train rapide (adj. accord masc. déf.)'},
      {w:'يَرْبُطُ',t:'relie, connecte (Form I · ر‑ب‑ط)'},
      {w:'الْمُدُنَ الْكَبِيرَةَ',t:'les grandes villes (non-hum. pl. → adj. fém. sg.)'},
    ],[
      {w:'فِي الأَحْيَاءِ الصَّغِيرَةِ',t:'dans les petits quartiers (adj. accord fém. pl.)'},
      {w:'يَسْتَخْدِمُ النَّاسُ',t:'les gens utilisent (Form X · خ‑د‑م)'},
      {w:'الدَّرَّاجَةَ',t:'le vélo'},
    ],[
      {w:'وَتَبْقَى الطَّائِرَةُ',t:"et l\'avion demeure (Form I · ب‑ق‑ي)"},
      {w:'أَسْرَعَ وَسَائِلِ النَّقْلِ',t:'le plus rapide des moyens de transport'},
    ],
  ],
  vocabulary:[
    {w:'وَسِيلَة',p:'وسيلة',tr:'wasīla',fr:'moyen, outil (pl. وَسَائِل)',fm:'Nom — schème فَعِيلَة',root:'و س ل'},
    {w:'نَقْل',p:'نقل',tr:'naql',fr:'transport, déplacement',fm:'Masdar Form I',root:'ن ق ل'},
    {w:'حَدِيث',p:'حديث',tr:'ḥadīth',fr:'moderne, récent, contemporain',fm:'Adjectif — schème فَعِيل',root:'ح د ث'},
    {w:'رَكِبَ',p:'ركب',tr:'rakiba',fr:'monter dans, prendre (véhicule)',fm:'Verbe Form I',root:'ر ك ب'},
    {w:'حَافِلَة',p:'حافلة',tr:'ḥāfila',fr:'bus, autocar (pl. حَافِلَات)',fm:'Adjectif substantivé — فَاعِلَة',root:'ح ف ل'},
    {w:'عَامّ',p:'عام',tr:"ʿāmm",fr:'public, général, commun',fm:'Adjectif — géminé',root:'ع م م'},
    {w:'تَنَقُّل',p:'تنقل',tr:'tanaqqul',fr:'déplacement, mobilité',fm:'Masdar Form V',root:'ن ق ل'},
    {w:'سَيَّارَة',p:'سيارة',tr:'sayyāra',fr:'voiture, automobile (pl. سَيَّارَات)',fm:'Adjectif substantivé — فَعَّالَة',root:'س ي ر'},
    {w:'خَاصّ',p:'خاص',tr:'khāṣṣ',fr:'privé, particulier, personnel',fm:'Adjectif — géminé',root:'خ ص ص'},
    {w:'مَرِيح',p:'مريح',tr:'marīḥ',fr:'confortable, agréable',fm:'Adjectif — schème فَعِيل',root:'ر و ح'},
    {w:'مُكْلِف',p:'مكلف',tr:'muklif',fr:'cher, coûteux',fm:'Participe actif Form IV',root:'ك ل ف'},
    {w:'قِطَار',p:'قطار',tr:'qiṭār',fr:'train (pl. قِطَارَات)',fm:'Nom — schème فِعَال',root:'ق ط ر'},
    {w:'سَرِيع',p:'سريع',tr:'sarīʿ',fr:'rapide, vite',fm:'Adjectif — schème فَعِيل',root:'س ر ع'},
    {w:'رَبَطَ',p:'ربط',tr:'rabaṭa',fr:'relier, attacher, lier',fm:'Verbe Form I',root:'ر ب ط'},
    {w:'دَرَّاجَة',p:'دراجة',tr:'darrāja',fr:'vélo, bicyclette (pl. دَرَّاجَات)',fm:'Nom — schème فَعَّالَة',root:'د ر ج'},
    {w:'حَيّ',p:'حي',tr:'ḥayy',fr:'quartier, arrondissement (pl. أَحْيَاء)',fm:'Nom — géminé',root:'ح ي ي'},
    {w:'طَائِرَة',p:'طائرة',tr:"ṭāʾira",fr:'avion (pl. طَائِرَات)',fm:'Participe actif Form I — fém.',root:'ط ي ر'},
    {w:'بَقِيَ',p:'بقي',tr:'baqiya',fr:'rester, demeurer, continuer',fm:'Verbe Form I — défectueux',root:'ب ق ي'},
    {w:'اسْتَخْدَمَ',p:'استخدم',tr:'istakhdama',fr:'utiliser, se servir de',fm:'Verbe Form X',root:'خ د م'},
  ],
  grammar:{
    concept:'النَّعْتُ — L\'accord de l\'adjectif épithète',
    excerptW:'الْمَدِينَةُ الْحَدِيثَةُ · الْقِطَارُ السَّرِيعُ · الْمُدُنُ الْكَبِيرَةُ · الأَحْيَاءُ الصَّغِيرَةُ',
    excerptP:'المدينة الحديثة · القطار السريع · المدن الكبيرة · الأحياء الصغيرة',
    exp:"L\'adjectif arabe (نَعْت) s\'accorde avec son nom en <strong>quatre points</strong> : genre (m/f), nombre (sg/pl), état (défini/indéfini) et cas (nominatif/accusatif/génitif). Règle spéciale pour les <strong>non-humains pluriels</strong> : l\'adjectif prend toujours la forme <strong>féminine singulière</strong>.",
    gtblHeaders:['Nom','Accord requis','Syntagme complet','Traduction'],
    table:[
      {v:'قِطَارٌ',f:'masc. sg. indéf.',m:'قِطَارٌ سَرِيعٌ',fr:'un train rapide'},
      {v:'الْقِطَارُ',f:'masc. sg. déf.',m:'الْقِطَارُ السَّرِيعُ',fr:'le train rapide'},
      {v:'سَيَّارَةٌ',f:'fém. sg. indéf.',m:'سَيَّارَةٌ سَرِيعَةٌ',fr:'une voiture rapide'},
      {v:'الْمُدُنُ',f:'non-hum. pl. → f.sg.',m:'الْمُدُنُ الْكَبِيرَةُ',fr:'les grandes villes'},
      {v:'الطُّلَّابُ',f:'hum. pl. m. → pl.',m:'الطُّلَّابُ الْمُجْتَهِدُونَ',fr:'les étudiants studieux'},
      {v:'الْمُعَلِّمَاتُ',f:'hum. pl. f. → pl.',m:'الْمُعَلِّمَاتُ الْمَاهِرَاتُ',fr:'les enseignantes habiles'},
    ],
    note:"Astuce mnémotechnique : pour les pluriels non-humains (animaux, objets, concepts), traitez-les comme un nom <strong>féminin singulier</strong>. الْمُدُنُ الْكَبِيرَةُ (grandes villes) = كَبِيرَة au féminin singulier même si مُدُن est pluriel.",
  },
};

/* ═══════════════════════════════════════════════
   A1 · T14 — الأَلْوَانُ وَالأَشْكَالُ
   Grammaire : حُرُوف الْعَطْف (conjonctions)
═══════════════════════════════════════════════ */
const A1_T14 = {
  id:'a1-14', level:'A1',
  titleW:'الأَلْوَانُ وَالأَشْكَالُ', titleP:'الألوان والأشكال',
  titleFr:'Les couleurs et les formes',
  sentences:[
    [
      {w:'يُحِبُّ أَحْمَدُ',t:'Ahmad aime'},
      {w:'الأَلْوَانَ الزَّاهِيَةَ',t:'les couleurs vives (acc. pl.)'},
    ],[
      {w:'أَلْوَانُ قَوْسِ قُزَحَ',t:"les couleurs de l\'arc-en-ciel (idāfa double)"},
      {w:'جَمِيلَةٌ',t:'sont belles'},
      {w:'الأَحْمَرُ وَالأَصْفَرُ',t:'le rouge et le jaune (conj. وَ)'},
      {w:'وَالأَزْرَقُ وَالأَخْضَرُ',t:'et le bleu et le vert'},
      {w:'وَالْبُرْتُقَالِيُّ',t:'et l\'orange'},
    ],[
      {w:'غُرْفَتُهُ مَطْلِيَّةٌ',t:'sa chambre est peinte'},
      {w:'بِاللَّوْنِ الأَزْرَقِ',t:'en bleu (prép. + idāfa)'},
      {w:'لَا الأَحْمَرِ',t:'et non en rouge (négation coordination)'},
    ],[
      {w:'فِي الْفَصْلِ',t:'en classe'},
      {w:'رَسَمَ',t:'il dessina (passé Form I · ر‑س‑م)'},
      {w:'مُثَلَّثًا',t:'un triangle'},
      {w:'وَمُرَبَّعًا',t:'et un carré'},
      {w:'وَدَائِرَةً',t:'et un cercle'},
    ],[
      {w:'الْمُثَلَّثُ أَصْغَرُ',t:'le triangle est plus petit'},
      {w:'لَكِنَّ الدَّائِرَةَ',t:'mais le cercle (لَكِنَّ + acc.)'},
      {w:'أَكْبَرُ',t:'est plus grand'},
    ],[
      {w:'هَلِ الأَزْرَقُ',t:'est-ce que le bleu'},
      {w:'أَوِ الأَخْضَرُ',t:'ou le vert (conj. أَوْ)'},
      {w:'لَوْنُكَ الْمُفَضَّلُ؟',t:'est ta couleur préférée ?'},
    ],
  ],
  vocabulary:[
    {w:'لَوْن',p:'لون',tr:'lawn',fr:'couleur (pl. أَلْوَان)',fm:'Nom — schème فَعْل',root:'ل و ن'},
    {w:'أَحْمَر',p:'أحمر',tr:'aḥmar',fr:'rouge (fém. حَمْرَاء)',fm:'Adjectif de couleur — schème أَفْعَل (diptote)',root:'ح م ر'},
    {w:'أَصْفَر',p:'أصفر',tr:'aṣfar',fr:'jaune (fém. صَفْرَاء)',fm:'Adjectif de couleur — schème أَفْعَل (diptote)',root:'ص ف ر'},
    {w:'أَزْرَق',p:'أزرق',tr:'azraq',fr:'bleu (fém. زَرْقَاء)',fm:'Adjectif de couleur — schème أَفْعَل (diptote)',root:'ز ر ق'},
    {w:'أَخْضَر',p:'أخضر',tr:'akhḍar',fr:'vert (fém. خَضْرَاء)',fm:'Adjectif de couleur — schème أَفْعَل (diptote)',root:'خ ض ر'},
    {w:'أَبْيَض',p:'أبيض',tr:'abyaḍ',fr:'blanc (fém. بَيْضَاء)',fm:'Adjectif de couleur — schème أَفْعَل (diptote)',root:'ب ي ض'},
    {w:'أَسْوَد',p:'أسود',tr:'aswad',fr:'noir (fém. سَوْدَاء)',fm:'Adjectif de couleur — schème أَفْعَل (diptote)',root:'س و د'},
    {w:'بُرْتُقَالِيّ',p:'برتقالي',tr:'burtuqālī',fr:'orange (couleur)',fm:'Adjectif de couleur (nisba)',root:'ب ر ت'},
    {w:'قَوْس قُزَح',p:'قوس قزح',tr:'qaws quzaḥ',fr:'arc-en-ciel',fm:'Expression figée (arc + Quzaḥ)',root:'ق و س'},
    {w:'زَاهٍ',p:'زاه',tr:'zāhin',fr:'vif, éclatant, brillant (couleur)',fm:'Adjectif — déficient',root:'ز ه و'},
    {w:'مَطْلِيّ',p:'مطلي',tr:'maṭlī',fr:'peint, enduit (de peinture)',fm:'Participe passif Form I',root:'ط ل ي'},
    {w:'شَكْل',p:'شكل',tr:'shakl',fr:'forme, figure (pl. أَشْكَال)',fm:'Nom — schème فَعْل',root:'ش ك ل'},
    {w:'مُثَلَّث',p:'مثلث',tr:'muthallath',fr:'triangle',fm:'Participe passif Form II (ثَلَّثَ)',root:'ث ل ث'},
    {w:'مُرَبَّع',p:'مربع',tr:"murabbāʿ",fr:'carré (forme géométrique)',fm:'Participe passif Form II (رَبَّعَ)',root:'ر ب ع'},
    {w:'دَائِرَة',p:'دائرة',tr:"dāʾira",fr:'cercle, rond (pl. دَوَائِر)',fm:'Participe actif fém. Form I',root:'د و ر'},
    {w:'رَسَمَ',p:'رسم',tr:'rasama',fr:'dessiner, tracer, peindre',fm:'Verbe Form I',root:'ر س م'},
    {w:'مُفَضَّل',p:'مفضل',tr:"mufaḍḍal",fr:'préféré, favori',fm:'Participe passif Form II',root:'ف ض ل'},
  ],
  grammar:{
    concept:'حُرُوفُ الْعَطْفِ — Les conjonctions de coordination',
    excerptW:'الأَحْمَرُ وَالأَصْفَرُ · الأَزْرَقُ لَا الأَحْمَرُ · لَكِنَّ الدَّائِرَةَ أَكْبَرُ · الأَزْرَقُ أَوِ الأَخْضَرُ',
    excerptP:'الأحمر والأصفر · الأزرق لا الأحمر · لكن الدائرة أكبر · الأزرق أو الأخضر',
    exp:"Les conjonctions de coordination (حُرُوف العطف) relient deux mots ou deux phrases de même niveau syntaxique. Le second terme s\'appelle <strong>الْمَعْطُوف</strong> et prend le même cas que le premier. Attention : <strong>لَكِنَّ</strong> (avec تشديد) est une sœur de إِنَّ et met le nom suivant à l\'accusatif.",
    gtblHeaders:['Conjonction','Transcription','Exemple','Rôle'],
    table:[
      {v:'وَ',f:'wa',m:'الأَحْمَرُ وَالأَزْرَقُ',fr:'et — simple addition'},
      {v:'أَوْ',f:'aw',m:'الأَزْرَقُ أَوِ الأَخْضَرُ',fr:'ou — alternative'},
      {v:'لَكِنَّ',f:'lākinna',m:'لَكِنَّ الدَّائِرَةَ أَكْبَرُ',fr:'mais — opposition (+ acc.)'},
      {v:'لَكِنْ',f:'lākin',m:'هُوَ كَبِيرٌ لَكِنْ لَيْسَ كَبِيرًا جِدًّا',fr:'mais — opposition (+ phrase)'},
      {v:'بَلْ',f:'bal',m:'لَيْسَ أَزْرَقَ بَلْ أَخْضَرُ',fr:'mais plutôt — rectification'},
      {v:'لَا',f:'lā',m:'بِالأَزْرَقِ لَا الأَحْمَرِ',fr:'et non, ni — exclusion'},
      {v:'فَ',f:'fa',m:'دَخَلَ فَجَلَسَ',fr:'et alors, donc — enchaînement'},
      {v:'ثُمَّ',f:'thumma',m:'أَكَلَ ثُمَّ شَرِبَ',fr:'puis — séquence temporelle'},
    ],
    note:"<strong>وَ</strong> est la conjonction la plus fréquente — elle peut coordonner des mots ou des phrases entières. <strong>فَ</strong> implique une conséquence immédiate tandis que <strong>ثُمَّ</strong> marque un délai entre les actions.",
  },
};

/* ═══════════════════════════════════════════════
   A1 · T15 — الْمَدِينَةُ وَالشَّارِعُ
   Grammaire : إِنَّ وَأَخَوَاتُهَا
═══════════════════════════════════════════════ */
const A1_T15 = {
  id:'a1-15', level:'A1',
  titleW:'الْمَدِينَةُ وَالشَّارِعُ', titleP:'المدينة والشارع',
  titleFr:'La ville et la rue',
  sentences:[
    [
      {w:'الْمَدِينَةُ',t:'la ville (sujet)'},
      {w:'مَكَانٌ جَمِيلٌ',t:'un bel endroit (phrase nominale)'},
      {w:'حَافِلٌ بِالْحَيَاةِ',t:'plein de vie'},
    ],[
      {w:'إِنَّ شَوَارِعَهَا',t:'certes ses rues (إِنَّ + acc.)'},
      {w:'وَاسِعَةٌ',t:'sont larges (خبر, nominatif)'},
      {w:'وَنَظِيفَةٌ',t:'et propres'},
    ],[
      {w:'فِيهَا حَدَائِقُ خَضْرَاءُ',t:'elle a des jardins verts (non-hum. pl. + f.sg.)'},
      {w:'وَمَسَاجِدُ قَدِيمَةٌ',t:'et des mosquées anciennes'},
    ],[
      {w:'يَسِيرُ الْمُشَاةُ',t:'les piétons marchent (Form I · س‑ي‑ر)'},
      {w:'عَلَى الأَرْصِفَةِ',t:'sur les trottoirs'},
      {w:'وَتَمُرُّ السَّيَّارَاتُ',t:'et les voitures passent (Form I · م‑ر‑ر)'},
      {w:'فِي الطُّرُقِ',t:'dans les rues'},
    ],[
      {w:'الْمَسْجِدُ',t:'la mosquée'},
      {w:'فِي مَرْكَزِ الْمَدِينَةِ',t:'au centre-ville (idāfa double)'},
      {w:'وَلَكِنَّ السُّوقَ',t:'mais le marché (لَكِنَّ + acc.)'},
      {w:'بِجَانِبِهِ',t:'est à côté de lui'},
    ],[
      {w:'لَعَلَّ الْمَدِينَةَ الْقَدِيمَةَ',t:'peut-être que la vieille ville (لَعَلَّ + acc.)'},
      {w:'أَجْمَلُ',t:'est plus belle'},
      {w:'مِنَ الْحَدِيثَةِ',t:'que la moderne'},
    ],
  ],
  vocabulary:[
    {w:'مَكَان',p:'مكان',tr:'makān',fr:'lieu, endroit, place (pl. أَمَاكِن)',fm:'Nom — schème مَفْعَل',root:'ك و ن'},
    {w:'حَافِل',p:'حافل',tr:'ḥāfil',fr:'plein de, rempli de',fm:'Adjectif — participe actif Form I',root:'ح ف ل'},
    {w:'حَيَاة',p:'حياة',tr:'ḥayāh',fr:'vie, existence',fm:'Nom — schème فَعَالَة (défectueux)',root:'ح ي و'},
    {w:'وَاسِع',p:'واسع',tr:'wāsiʿ',fr:'large, vaste, spacieux',fm:'Adjectif — participe actif Form I',root:'و س ع'},
    {w:'مُشَاة',p:'مشاة',tr:'mushāh',fr:'piétons (pl. de مَاشٍ)',fm:'Pl. de participe actif Form I',root:'م ش ي'},
    {w:'رَصِيف',p:'رصيف',tr:'raṣīf',fr:'trottoir, quai (pl. أَرْصِفَة)',fm:'Nom — schème فَعِيل',root:'ر ص ف'},
    {w:'مَرَّ',p:'مر',tr:'marra',fr:'passer, traverser, s\'écouler',fm:'Verbe Form I — géminé',root:'م ر ر'},
    {w:'طَرِيق',p:'طريق',tr:'ṭarīq',fr:'route, chemin (pl. طُرُق)',fm:'Nom — schème فَعِيل',root:'ط ر ق'},
    {w:'مَسْجِد',p:'مسجد',tr:'masjid',fr:'mosquée (pl. مَسَاجِد)',fm:'Nom de lieu — schème مَفْعِل',root:'س ج د'},
    {w:'مَرْكَز',p:'مركز',tr:'markaz',fr:'centre, siège (pl. مَرَاكِز)',fm:'Nom — schème مَفْعَل',root:'ر ك ز'},
    {w:'جَانِب',p:'جانب',tr:'jānib',fr:'côté, flanc (pl. جَوَانِب)',fm:'Nom — schème فَاعِل',root:'ج ن ب'},
    {w:'سَارَ',p:'سار',tr:'sāra',fr:'marcher, avancer, aller',fm:'Verbe Form I — défectueux',root:'س ي ر'},
    {w:'قَدِيم',p:'قديم',tr:'qadīm',fr:'vieux, ancien, antique',fm:'Adjectif — schème فَعِيل',root:'ق د م'},
    {w:'إِنَّ',p:'إن',tr:'inna',fr:'certes, assurément (mise en valeur)',fm:"Particule d\'emphase — sœur de كَانَ",root:'أ ن ن'},
    {w:'لَعَلَّ',p:'لعل',tr:"laʿalla",fr:'peut-être que, espérons que',fm:"Particule souhait/doute — sœur de إِنَّ",root:'ل ع ل'},
    {w:'أَجْمَل',p:'أجمل',tr:'ajmal',fr:'plus beau, le plus beau (élatif)',fm:'Adjectif élatif — schème أَفْعَل',root:'ج م ل'},
  ],
  grammar:{
    concept:'إِنَّ وَأَخَوَاتُهَا — Les particules d\'emphase',
    excerptW:'إِنَّ شَوَارِعَهَا وَاسِعَةٌ · وَلَكِنَّ السُّوقَ بِجَانِبِهِ · لَعَلَّ الْمَدِينَةَ الْقَدِيمَةَ أَجْمَلُ',
    excerptP:'إن شوارعها واسعة · ولكن السوق بجانبه · لعل المدينة القديمة أجمل',
    exp:"Les sœurs de إِنَّ modifient la phrase nominale en sens inverse de <strong>كَانَ</strong> : elles mettent le <strong>sujet (اسمها) à l\'accusatif</strong> et laissent le <strong>prédicat (خبرها) au nominatif</strong>. إِنَّ renforce l\'assertion. لَكِنَّ exprime l\'opposition. لَعَلَّ exprime le souhait ou le doute.",
    gtblHeaders:['Particule','Transcription','Exemple','Sens / Fonction'],
    table:[
      {v:'إِنَّ',f:'inna',m:'إِنَّ أَحْمَدَ طَالِبٌ',fr:'certes Ahmad est étudiant (emphase)'},
      {v:'أَنَّ',f:'anna',m:'أَعْرِفُ أَنَّ الدَّرْسَ صَعْبٌ',fr:'que la leçon est difficile (complétive)'},
      {v:'لَكِنَّ',f:'lākinna',m:'هُوَ كَبِيرٌ لَكِنَّهُ طَيِّبٌ',fr:'mais il est gentil (opposition)'},
      {v:'كَأَنَّ',f:"kaʾanna",m:'كَأَنَّ السَّمَاءَ مِرْآةٌ',fr:'comme si le ciel était un miroir'},
      {v:'لَيْتَ',f:'layta',m:'لَيْتَ الطَّقْسَ دَافِئٌ',fr:'plût au ciel que le temps soit doux'},
      {v:'لَعَلَّ',f:"laʿalla",m:'لَعَلَّ الْجَوَّ جَمِيلٌ غَدًا',fr:'peut-être que le temps sera beau demain'},
    ],
    note:"Comparez les deux structures : <strong>كَانَ</strong> → اسم مرفوع + خبر منصوب (était grand → كَانَ كَبِيرًا). <strong>إِنَّ</strong> → اسم منصوب + خبر مرفوع (certes il est grand → إِنَّهُ كَبِيرٌ). C\'est l\'inverse !",
  },
};

/* ═══════════════════════════════════════════════
   A1 · T16 — يَوْمٌ دِرَاسِيٌّ
   Grammaire : مراجعة شاملة A1
═══════════════════════════════════════════════ */
const A1_T16 = {
  id:'a1-16', level:'A1',
  titleW:'يَوْمٌ دِرَاسِيٌّ', titleP:'يوم دراسي',
  titleFr:'Une journée scolaire',
  sentences:[
    [
      {w:'اسْتَيْقَظَ أَحْمَدُ',t:'Ahmad se réveilla (Form X · ي‑ق‑ظ)'},
      {w:'صَبَاحًا مُبَكِّرًا',t:'tôt le matin (adverbe de temps + adj.)'},
      {w:'وَلَبِسَ ثِيَابَهُ النَّظِيفَةَ',t:'et mit ses vêtements propres'},
    ],[
      {w:'أَكَلَ مَعَ أُسْرَتِهِ',t:'il mangea avec sa famille'},
      {w:'فَطُورًا لَذِيذًا',t:'un délicieux petit-déjeuner'},
      {w:'ثُمَّ ذَهَبَ إِلَى الْمَدْرَسَةِ',t:"puis il alla à l\'école"},
      {w:'مَاشِيًا',t:'en marchant (ḥāl — état du sujet)'},
    ],[
      {w:'فِي الْمَدْرَسَةِ',t:"à l\'école"},
      {w:'حَيَّا أَصْدِقَاءَهُ',t:'il salua ses amis (Form II · ح‑ي‑ي)'},
      {w:'وَجَلَسَ فِي صَفِّهِ',t:'et s\'assit dans sa classe'},
    ],[
      {w:'شَرَحَ الْمُعَلِّمُ',t:'le professeur expliqua'},
      {w:'دَرْسًا جَدِيدًا',t:'une nouvelle leçon'},
      {w:'وَكَتَبَ أَحْمَدُ',t:'et Ahmad écrivit'},
      {w:'كُلَّ شَيْءٍ',t:'tout (litt. chaque chose)'},
      {w:'فِي كُرَّاسَتِهِ',t:'dans son cahier'},
    ],[
      {w:'بَعْدَ الدِّرَاسَةِ',t:'après les cours'},
      {w:'لَعِبَ',t:'il joua (Form I · ل‑ع‑ب)'},
      {w:'مَعَ أَصْدِقَائِهِ',t:'avec ses amis'},
      {w:'فِي الْمَلْعَبِ',t:'dans le terrain de jeux'},
    ],[
      {w:'ثُمَّ رَجَعَ إِلَى الْبَيْتِ',t:'puis il rentra à la maison'},
      {w:'وَهُوَ فَرِحٌ',t:'et il était joyeux (ḥāl — phrase nominale)'},
      {w:'وَمُتْعَبٌ',t:'et fatigué'},
    ],
  ],
  vocabulary:[
    {w:'اسْتَيْقَظَ',p:'استيقظ',tr:'istayqaẓa',fr:'se réveiller',fm:'Verbe Form X',root:'ي ق ظ'},
    {w:'مُبَكِّر',p:'مبكر',tr:'mubakkir',fr:'tôt, de bonne heure, matinal',fm:'Participe actif Form II',root:'ب ك ر'},
    {w:'فَطُور',p:'فطور',tr:'fuṭūr',fr:'petit-déjeuner',fm:'Nom — schème فَعُول',root:'ف ط ر'},
    {w:'لَذِيذ',p:'لذيذ',tr:'ladhīdh',fr:'délicieux, savoureux',fm:'Adjectif — schème فَعِيل',root:'ل ذ ذ'},
    {w:'مَاشٍ',p:'ماش',tr:'māshin',fr:'en marchant, marchant (participe)',fm:'Participe actif Form I — défectueux',root:'م ش ي'},
    {w:'حَيَّا',p:'حيا',tr:'ḥayyā',fr:'saluer, accueillir, souhaiter longue vie',fm:'Verbe Form II — défectueux',root:'ح ي ي'},
    {w:'جَلَسَ',p:'جلس',tr:'jalasa',fr:'s\'asseoir, siéger',fm:'Verbe Form I',root:'ج ل س'},
    {w:'لَعِبَ',p:'لعب',tr:"laʿiba",fr:'jouer',fm:'Verbe Form I',root:'ل ع ب'},
    {w:'مَلْعَب',p:'ملعب',tr:"malʿab",fr:'terrain de jeux, stade (pl. مَلَاعِب)',fm:'Nom de lieu — schème مَفْعَل',root:'ل ع ب'},
    {w:'مُتْعَب',p:'متعب',tr:"mutʿab",fr:'fatigué, épuisé',fm:'Participe passif Form IV',root:'ت ع ب'},
    {w:'مَعَ',p:'مع',tr:"maʿa",fr:'avec, en compagnie de',fm:'Préposition',root:'م ع و'},
  ],
  grammar:{
    concept:'مُرَاجَعَةٌ شَامِلَةٌ A1 — Révision générale',
    excerptW:'يَوْمٌ دِرَاسِيٌّ يَجْمَعُ كُلَّ مَا تَعَلَّمْنَاهُ',
    excerptP:'يوم دراسي يجمع كل ما تعلمناه',
    exp:"Ce texte récapitulatif mobilise les <strong>huit structures fondamentales du niveau A1</strong>. À ce stade, vous devez reconnaître spontanément chacun de ces schémas à la lecture ou à l\'écoute. Ce sont les fondations sur lesquelles repose tout l\'arabe.",
    gtblHeaders:['Concept','Nom français','Exemple du texte A1','Règle essentielle'],
    table:[
      {v:'الجملة الاسمية',f:'Phrase nominale',m:'هُوَ فَرِحٌ وَمُتْعَبٌ',fr:"Pas de verbe 'être' au présent"},
      {v:'الجملة الفعلية',f:'Phrase verbale',m:'لَعِبَ أَحْمَدُ مَعَ أَصْدِقَائِهِ',fr:'Ordre VSO — verbe en premier'},
      {v:'الإضافة',f:'Annexion nominale',m:'طُلَّابُ الْمَدْرَسَةِ',fr:'1er sans art./tanwīn, 2e au génitif'},
      {v:'النَّعْت',f:'Accord adjectif',m:'دَرْسٌ جَدِيدٌ / الثِّيَابُ النَّظِيفَةُ',fr:'Accord en genre, nombre, cas, état'},
      {v:'الفعل الماضي',f:'Passé',m:'اسْتَيْقَظَ · لَعِبَ · رَجَعَ',fr:'Suffixes personnels sur la racine'},
      {v:'حروف الجر',f:'Prépositions',m:'مَعَ أَصْدِقَائِهِ · فِي الْمَلْعَبِ',fr:'Régissent le génitif (ـِ)'},
      {v:'كَانَ وَأَخَوَاتُهَا',f:"Sœurs de kāna",m:'كَانَ فَرِحًا وَمُتْعَبًا',fr:'اسم مرفوع + خبر منصوب'},
      {v:'إِنَّ وَأَخَوَاتُهَا',f:"Sœurs de inna",m:'إِنَّ يَوْمَهُ كَانَ جَمِيلًا',fr:'اسم منصوب + خبر مرفوع — inverse de كَانَ'},
    ],
    note:"🎉 <strong>Félicitations</strong> — vous avez terminé le niveau A1 (16 textes · ~600 mots). Vous maîtrisez les fondations de l\'arabe. Le niveau A2 introduira la conjugaison complète au présent, les formes verbales II-IV, et des textes plus riches.",
  },
};

/* ═══════════════════════════════════════════════
   MAP GLOBALE — A1 COMPLET (16/16)
═══════════════════════════════════════════════ */
const TEXTS = {
  A1: [A1_T1, A1_T2, A1_T3, A1_T4, A1_T5, A1_T6, A1_T7, A1_T8,
       A1_T9, A1_T10, A1_T11, A1_T12, A1_T13, A1_T14, A1_T15, A1_T16],
  A2: [],
  B1: [],
  B2: [B2_T1],
  C1: [],
  C2: [],
};
