/* ═══════════════════════════════════════════════
   BRIQUE DONNÉES — A1
   Format : var A1_TEXTS = [ ...objets textes... ]
   Règle  : TOUTES les strings en backticks `...`
            → apostrophes et guillemets jamais problématiques
   Ajouter un texte : copier le bloc T1, changer l'id,
   ajouter l'objet dans le tableau A1_TEXTS.
═══════════════════════════════════════════════ */
'use strict';

var A1_TEXTS = (function () {

  /* ─── Texte 1 ─────────────────────────────── */
  var T1 = {
    id:      `a1-1`,
    level:   `A1`,
    titleW:  `يَوْمٌ فِي الْمَدِينَةِ`,
    titleP:  `يوم في المدينة`,
    titleFr: `Un jour dans la ville`,

    sentences: [
      [
        {w:`هَذَا`,      t:`voici, c'est — démonstratif masc.`},
        {w:`أَحْمَدُ`,  t:`Ahmad — prénom masculin`},
      ],[
        {w:`هُوَ`,       t:`il`},
        {w:`طَالِبٌ`,   t:`un étudiant (m.)`},
      ],[
        {w:`يَسْكُنُ`,   t:`il habite, il réside (Form I · س‑ك‑ن)`},
        {w:`فِي`,        t:`dans, à, en`},
        {w:`الْمَدِينَةِ`, t:`la ville`},
      ],[
        {w:`كُلَّ صَبَاحٍ`, t:`chaque matin`},
        {w:`يَذْهَبُ`,   t:`il va, il part (Form I · ذ‑ه‑ب)`},
        {w:`إِلَى`,      t:`vers, à, jusqu'à`},
        {w:`الْمَدْرَسَةِ`, t:`l'école`},
      ],[
        {w:`الْمَدْرَسَةُ`, t:`l'école (sujet nominatif)`},
        {w:`كَبِيرَةٌ`,  t:`grande (adj. fém.)`},
        {w:`وَجَمِيلَةٌ`, t:`et belle (adj. fém.)`},
      ],[
        {w:`فِيهَا`,     t:`en elle, à l'intérieur — fém.`},
        {w:`أَصْدِقَاءٌ`, t:`des amis (pl. brisé de صَدِيق)`},
        {w:`كَثِيرُونَ`, t:`nombreux (pl. masc. sain)`},
      ],[
        {w:`بَعْدَ الدِّرَاسَةِ`, t:`après les cours`},
        {w:`يَرْجِعُ`,   t:`il rentre (Form I · ر‑ج‑ع)`},
        {w:`أَحْمَدُ`,  t:`Ahmad`},
        {w:`إِلَى الْبَيْتِ`, t:`à la maison`},
      ],[
        {w:`هُوَ`,       t:`il`},
        {w:`سَعِيدٌ`,   t:`heureux (adj. · schème فَعِيل)`},
      ],
    ],

    vocabulary: [
      {w:`هَذَا`,          p:`هذا`,         tr:`hādhā`,       fr:`voici, c'est (démonstratif masc. sing.)`, fm:`Pronom démonstratif`,                   root:`ه ذ`},
      {w:`طَالِب`,         p:`طالب`,        tr:`ṭālib`,        fr:`étudiant, apprenant`,                     fm:`Participe actif Form I — schème فَاعِل`, root:`ط ل ب`},
      {w:`سَكَنَ`,         p:`سكن`,         tr:`sakana`,       fr:`habiter, résider`,                        fm:`Verbe Form I`,                           root:`س ك ن`},
      {w:`مَدِينَة`,       p:`مدينة`,       tr:`madīna`,       fr:`ville`,                                   fm:`Nom — schème مَفْعِلَة`,                 root:`م د ن`},
      {w:`صَبَاح`,         p:`صباح`,        tr:`ṣabāḥ`,        fr:`matin`,                                   fm:`Nom — schème فَعَال`,                    root:`ص ب ح`},
      {w:`ذَهَبَ`,         p:`ذهب`,         tr:`dhahaba`,      fr:`aller, partir`,                           fm:`Verbe Form I`,                           root:`ذ ه ب`},
      {w:`مَدْرَسَة`,      p:`مدرسة`,       tr:`madrasa`,      fr:`école`,                                   fm:`Nom de lieu — schème مَفْعَلَة`,         root:`د ر س`},
      {w:`كَبِير`,         p:`كبير`,        tr:`kabīr`,        fr:`grand, important`,                        fm:`Adjectif — schème فَعِيل`,               root:`ك ب ر`},
      {w:`جَمِيل`,         p:`جميل`,        tr:`jamīl`,        fr:`beau, belle`,                             fm:`Adjectif — schème فَعِيل`,               root:`ج م ل`},
      {w:`أَصْدِقَاء`,     p:`أصدقاء`,      tr:`aṣdiqāʾ`,      fr:`amis (pluriel)`,                          fm:`Pl. brisé de صَدِيق — schème أَفْعِلَاء`, root:`ص د ق`},
      {w:`كَثِير`,         p:`كثير`,        tr:`kathīr`,       fr:`nombreux, beaucoup`,                      fm:`Adjectif — schème فَعِيل`,               root:`ك ث ر`},
      {w:`رَجَعَ`,         p:`رجع`,         tr:`rajaʿa`,       fr:`rentrer, retourner`,                      fm:`Verbe Form I`,                           root:`ر ج ع`},
      {w:`بَيْت`,          p:`بيت`,         tr:`bayt`,         fr:`maison`,                                  fm:`Nom — schème فَيْعَل`,                   root:`ب ي ت`},
      {w:`سَعِيد`,         p:`سعيد`,        tr:`saʿīd`,        fr:`heureux, content`,                        fm:`Adjectif — schème فَعِيل`,               root:`س ع د`},
    ],

    grammar: {
      concept:    `الجملة الاسمية — La phrase nominale`,
      excerptW:   `هُوَ طَالِبٌ · الْمَدْرَسَةُ كَبِيرَةٌ وَجَمِيلَةٌ · هُوَ سَعِيدٌ`,
      excerptP:   `هو طالب · المدرسة كبيرة وجميلة · هو سعيد`,
      exp:        `En arabe, le verbe <strong>être</strong> au présent n'existe pas ! Une phrase se forme avec un <strong>مُبْتَدَأ (sujet)</strong> + <strong>خَبَر (prédicat)</strong>, sans aucun verbe. Les deux termes s'accordent en genre et en nombre.`,
      gtblHeaders:[`مبتدأ (Sujet)`, `Rôle`, `خبر (Prédicat)`, `Traduction`],
      table: [
        {v:`هُوَ`,            f:`مبتدأ`,             m:`طَالِبٌ`,                fr:`Il est étudiant`},
        {v:`الْمَدْرَسَةُ`,  f:`مبتدأ`,             m:`كَبِيرَةٌ وَجَمِيلَةٌ`,  fr:`L'école est grande et belle`},
        {v:`فِيهَا`,         f:`مبتدأ (شبه جملة)`, m:`أَصْدِقَاءٌ كَثِيرُونَ`, fr:`Il y a de nombreux amis`},
        {v:`هُوَ`,            f:`مبتدأ`,             m:`سَعِيدٌ`,                fr:`Il est heureux`},
      ],
      note: `Le <strong>tanwīn (ـٌ)</strong> sur le خبر indique qu'il est indéfini — طَالِبٌ = "un étudiant". Avec article : هُوَ الطَّالِبُ = "il est l'étudiant".`,
    },
  };

  /* ─── Ajouter les prochains textes ici ─────
     var T2 = { id:'a1-2', ... };
     var T3 = { id:'a1-3', ... };
  ─────────────────────────────────────────── */

  return [T1];

}());
