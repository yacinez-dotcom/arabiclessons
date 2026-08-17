/* ═══════════════════════════════════════════════
   BRIQUE DONNÉES — B2
   Même format que a1.js — strings en backticks
═══════════════════════════════════════════════ */
'use strict';

var B2_TEXTS = (function () {

  var T1 = {
    id:      `b2-1`,
    level:   `B2`,
    titleW:  `التَّعْلِيمُ فِي الْعَصْرِ الرَّقْمِيِّ`,
    titleP:  `التعليم في العصر الرقمي`,
    titleFr: `L'éducation à l'ère numérique`,

    sentences: [
      [
        {w:`أَحْدَثَتِ`,                      t:`a provoqué, causé (Form IV · ح‑د‑ث)`},
        {w:`التِّكْنُولُوجِيَا`,              t:`la technologie`},
        {w:`ثَوْرَةً`,                         t:`une révolution`},
        {w:`حَقِيقِيَّةً`,                    t:`véritable, réelle`},
        {w:`فِي مَجَالِ`,                     t:`dans le domaine de`},
        {w:`التَّعْلِيمِ`,                    t:`l'éducation, l'enseignement`},
      ],[
        {w:`فَبَعْدَ أَنْ كَانَ`,             t:`alors qu'autrefois`},
        {w:`الطُّلَّابُ`,                     t:`les étudiants`},
        {w:`يَعْتَمِدُونَ`,                   t:`dépendaient de (Form VIII · ع‑م‑د)`},
        {w:`اعْتِمَادًا كُلِّيًّا`,          t:`entièrement (accusatif absolu)`},
        {w:`عَلَى الْكُتُبِ`,                t:`sur les livres`},
        {w:`وَالْفُصُولِ الدِّرَاسِيَّةِ`, t:`et les salles de classe`},
        {w:`أَصْبَحَ بِإِمْكَانِهِمُ`,       t:`il leur est désormais possible`},
        {w:`الْيَوْمَ`,                       t:`aujourd'hui`},
        {w:`الْوُصُولُ`,                      t:`l'accès (masdar de وَصَلَ)`},
        {w:`إِلَى مَصَادِرَ`,                t:`à des sources`},
        {w:`لَا حَصْرَ لَهَا`,              t:`innombrables, sans limite`},
        {w:`عَبْرَ الْإِنْتَرْنِتِ`,        t:`via internet`},
      ],[
        {w:`وَيَرَى كَثِيرٌ مِنَ`,           t:`de nombreux… estiment`},
        {w:`الْمُرَبِّينَ`,                   t:`les éducateurs, les pédagogues`},
        {w:`أَنَّ هَذَا التَّحَوُّلَ`,      t:`que cette transformation (masdar Form V)`},
        {w:`يُتِيحُ`,                         t:`permet, offre (Form IV · أَتَاحَ)`},
        {w:`لِلْمُتَعَلِّمِ`,                t:`à l'apprenant (participe actif Form V)`},
        {w:`حُرِّيَّةً أَكْبَرَ`,            t:`une plus grande liberté`},
        {w:`فِي اخْتِيَارِ مُحْتَوَاهُ`,   t:`dans le choix de son contenu (masdar Form VIII)`},
        {w:`وَتَحْدِيدِ`,                    t:`et la définition (masdar Form II)`},
        {w:`وَتِيرَةِ تَعَلُّمِهِ`,          t:`du rythme de son apprentissage (masdar Form V)`},
      ],[
        {w:`غَيْرَ أَنَّ`,                   t:`cependant, toutefois`},
        {w:`ثَمَّةَ`,                         t:`il existe, il y a (particule existentielle)`},
        {w:`تَحَدِّيَاتٍ جِدِّيَّةً`,       t:`des défis sérieux`},
        {w:`لَا يُمْكِنُ إِغْفَالُهَا`,     t:`qu'on ne peut ignorer (masdar Form IV)`},
        {w:`مِنْهَا`,                         t:`parmi eux`},
        {w:`ضَعْفُ الرَّبْطِ بِالشَّبَكَةِ`, t:`la faiblesse de la connexion réseau`},
        {w:`فِي الْمَنَاطِقِ النَّائِيَةِ`, t:`dans les régions reculées`},
        {w:`وَمَا يُسَمَّى`,                 t:`et ce qu'on appelle`},
        {w:`بِالْهُوَّةِ الرَّقْمِيَّةِ`,  t:`la fracture numérique`},
        {w:`الَّتِي تُكَرِّسُ`,              t:`qui perpétue (Form II)`},
        {w:`الْفَوَارِقَ الاجْتِمَاعِيَّةَ`, t:`les inégalités sociales`},
      ],[
        {w:`وَخَلَصَ`,                        t:`et ils ont conclu`},
        {w:`بَعْضُ الْبَاحِثِينَ`,           t:`certains chercheurs`},
        {w:`إِلَى أَنَّ`,                     t:`à la conclusion que`},
        {w:`التَّعْلِيمَ الْهَجِينَ`,        t:`l'enseignement hybride`},
        {w:`الَّذِي يَجْمَعُ بَيْنَ`,        t:`qui combine`},
        {w:`الْحُضُورِ الْجِسْدِيِّ`,       t:`la présence physique (masdar Form I)`},
        {w:`وَالتَّعَلُّمِ الْإِلِكْتُرُونِيِّ`, t:`et l'apprentissage en ligne (masdar Form V)`},
        {w:`قَدْ يَكُونُ`,                    t:`pourrait être (قَدْ + muḍāriʿ)`},
        {w:`الْحَلَّ الأَمْثَلَ`,            t:`la solution optimale`},
        {w:`لِمُوَاجَهَةِ هَذِهِ التَّحَدِّيَاتِ`, t:`pour faire face à ces défis (masdar Form III)`},
      ],
    ],

    vocabulary: [
      {w:`أَحْدَثَ`,         p:`أحدث`,       tr:`aḥdatha`,       fr:`provoquer, causer`,                  fm:`Verbe Form IV`,                       root:`ح د ث`},
      {w:`ثَوْرَة`,          p:`ثورة`,        tr:`thawra`,        fr:`révolution`,                         fm:`Nom · schème فَعْلَة`,                root:`ث و ر`},
      {w:`اعْتَمَدَ عَلَى`, p:`اعتمد على`,  tr:`iʿtamada ʿalā`, fr:`dépendre de, s'appuyer sur`,         fm:`Verbe Form VIII`,                     root:`ع م د`},
      {w:`وُصُول`,           p:`وصول`,        tr:`wuṣūl`,         fr:`accès, arrivée`,                     fm:`Masdar Form I (وَصَلَ)`,              root:`و ص ل`},
      {w:`مَصَادِر`,         p:`مصادر`,       tr:`maṣādir`,       fr:`sources, ressources (pl.)`,          fm:`Pl. de مَصْدَر · schème مَفَاعِل`,   root:`ص د ر`},
      {w:`تَحَوُّل`,         p:`تحول`,        tr:`taḥawwul`,      fr:`transformation, changement`,         fm:`Masdar Form V (تَحَوَّلَ)`,           root:`ح و ل`},
      {w:`أَتَاحَ`,          p:`أتاح`,        tr:`atāḥa`,         fr:`permettre, rendre possible`,         fm:`Verbe Form IV`,                       root:`ت و ح`},
      {w:`مُتَعَلِّم`,       p:`متعلم`,       tr:`mutaʿallim`,    fr:`apprenant, élève`,                   fm:`Participe actif Form V`,              root:`ع ل م`},
      {w:`اخْتِيَار`,        p:`اختيار`,      tr:`ikhtiyār`,      fr:`choix, sélection`,                   fm:`Masdar Form VIII (اخْتَارَ)`,         root:`خ ي ر`},
      {w:`وَتِيرَة`,         p:`وتيرة`,       tr:`watīra`,        fr:`rythme, cadence`,                    fm:`Nom · schème فَعِيلَة`,               root:`و ت ر`},
      {w:`تَعَلُّم`,         p:`تعلم`,        tr:`taʿallum`,      fr:`apprentissage`,                      fm:`Masdar Form V (تَعَلَّمَ)`,           root:`ع ل م`},
      {w:`غَيْرَ أَنَّ`,     p:`غير أن`,     tr:`ghayra anna`,   fr:`cependant, toutefois`,               fm:`Locution adversative`,                root:`—`},
      {w:`ثَمَّة`,           p:`ثمة`,         tr:`thamma`,        fr:`il y a, il existe`,                  fm:`Particule existentielle`,             root:`—`},
      {w:`إِغْفَال`,         p:`إغفال`,       tr:`ighfāl`,        fr:`fait d'ignorer, négligence`,         fm:`Masdar Form IV (أَغْفَلَ)`,           root:`غ ف ل`},
      {w:`الهُوَّة الرَّقْمِيَّة`, p:`الهوة الرقمية`, tr:`al-huwwa r-raqmiyya`, fr:`fracture numérique`, fm:`Expression nominale`,                root:`—`},
      {w:`كَرَّسَ`,          p:`كرس`,         tr:`karrasa`,       fr:`perpétuer, consolider`,              fm:`Verbe Form II`,                       root:`ك ر س`},
      {w:`فَوَارِق`,         p:`فوارق`,       tr:`fawāriq`,       fr:`inégalités, écarts`,                 fm:`Pl. de فَارِق · schème فَوَاعِل`,    root:`ف ر ق`},
      {w:`خَلَصَ إِلَى`,     p:`خلص إلى`,    tr:`khalaṣa ilā`,   fr:`conclure à, aboutir à`,              fm:`Verbe Form I`,                        root:`خ ل ص`},
      {w:`هَجِين`,           p:`هجين`,        tr:`hajīn`,         fr:`hybride, mixte`,                     fm:`Adjectif · schème فَعِيل`,            root:`ه ج ن`},
      {w:`مُوَاجَهَة`,       p:`مواجهة`,      tr:`muwājaha`,      fr:`fait de faire face`,                 fm:`Masdar Form III (وَاجَهَ)`,           root:`و ج ه`},
    ],

    grammar: {
      concept:    `المصدر الصريح — Le nom verbal (masdar)`,
      excerptW:   `أَصْبَحَ بِإِمْكَانِهِمُ الْوُصُولُ … وَتَحْدِيدِ وَتِيرَةِ تَعَلُّمِهِ … لَا يُمْكِنُ إِغْفَالُهَا`,
      excerptP:   `أصبح بإمكانهم الوصول … وتحديد وتيرة تعلمه … لا يمكن إغفالها`,
      exp:        `Le <strong>masdar (المصدر)</strong> est le nom verbal : il nominalise l'action et peut assumer n'importe quelle fonction syntaxique. Les formes <strong>II à X sont totalement régulières</strong>, contrairement à la Form I.`,
      gtblHeaders:[`Verbe`, `Forme`, `Masdar`, `Signification`],
      table: [
        {v:`وَصَلَ`,    f:`Form I`,    m:`وُصُول`,     fr:`l'accès`},
        {v:`اعْتَمَدَ`, f:`Form VIII`, m:`اعْتِمَاد`,  fr:`la dépendance`},
        {v:`تَحَوَّلَ`, f:`Form V`,    m:`تَحَوُّل`,   fr:`la transformation`},
        {v:`اخْتَارَ`,  f:`Form VIII`, m:`اخْتِيَار`,  fr:`le choix`},
        {v:`حَدَّدَ`,   f:`Form II`,   m:`تَحْدِيد`,   fr:`la détermination`},
        {v:`تَعَلَّمَ`, f:`Form V`,    m:`تَعَلُّم`,   fr:`l'apprentissage`},
        {v:`أَغْفَلَ`,  f:`Form IV`,   m:`إِغْفَال`,   fr:`le fait d'ignorer`},
        {v:`وَاجَهَ`,   f:`Form III`,  m:`مُوَاجَهَة`, fr:`le fait de faire face`},
      ],
      note: `Schèmes réguliers : Form II → <strong>تَفْعِيل</strong> · Form III → <strong>مُفَاعَلَة</strong> · Form IV → <strong>إِفْعَال</strong> · Form V → <strong>تَفَعُّل</strong> · Form VIII → <strong>اِفْتِعَال</strong>.`,
    },
  };

  /* ─── Ajouter les prochains textes B2 ici ── */

  return [T1];

}());
