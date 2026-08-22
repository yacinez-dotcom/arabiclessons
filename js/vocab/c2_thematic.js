/* ═══════════════════════════════════════════════
   VOCABULAIRE THÉMATIQUE — C2
   ~60 mots · 3 thèmes
   RÈGLE : toutes les strings en backticks
═══════════════════════════════════════════════ */
'use strict';
var C2_VOCAB_THEMATIC = [
  {
    theme:`عُلُومُ الْقُرْآنِ — Sciences coraniques`,
    words:[
      {w:`تَفْسِير`,p:`تفسير`,tr:`tafsīr`,fr:`exégèse coranique (commentaire)`,fm:`Masdar Form II`,root:`ف س ر`},
      {w:`تَأْوِيل`,p:`تأويل`,tr:`taʾwīl`,fr:`herméneutique (sens caché)`,fm:`Masdar Form II`,root:`أ و ل`},
      {w:`مُفَسِّر`,p:`مفسر`,tr:`mufassir`,fr:`exégète coranique`,fm:`Participe actif Form II`,root:`ف س ر`},
      {w:`ابْن كَثِير`,p:`ابن كثير`,tr:`ibn kathīr`,fr:`Ibn Kathir (1301-1373) — exégète`,fm:`Nom propre`,root:`—`},
      {w:`الطَّبَرِيّ`,p:`الطبري`,tr:`aṭ-Ṭabarī`,fr:`Al-Tabari (839-923) — exégète fondateur`,fm:`Nom propre`,root:`—`},
      {w:`تَفْسِير بِالْمَأْثُور`,p:`تفسير بالمأثور`,tr:`tafsīr bil-maʾthūr`,fr:`exégèse par la tradition`,fm:`Syntagme`,root:`ث أ ر`},
      {w:`تَفْسِير بِالرَّأْي`,p:`تفسير بالرأي`,tr:`tafsīr bil-raʾy`,fr:`exégèse par la raison`,fm:`Syntagme`,root:`ر أ ي`},
      {w:`عِلْم الْقِرَاءَات`,p:`علم القراءات`,tr:`ʿilm al-qirāʾāt`,fr:`science des lectures canoniques`,fm:`Idāfa`,root:`ق ر أ`},
      {w:`رَسْم`,p:`رسم`,tr:`rasm`,fr:`graphie/tracé du texte coranique`,fm:`Masdar Form I`,root:`ر س م`},
      {w:`حَفْص`,p:`حفص`,tr:`ḥafṣ`,fr:`Hafṣ (transmission la plus répandue)`,fm:`Nom propre`,root:`ح ف ص`},
      {w:`وَرْش`,p:`ورش`,tr:`warsh`,fr:`Warsh (transmission du Maghreb)`,fm:`Nom propre`,root:`و ر ش`},
      {w:`جَمْع الْقُرْآن`,p:`جمع القرآن`,tr:`jamʿ al-qurʾān`,fr:`compilation du Coran (sous Abou Bakr)`,fm:`Idāfa`,root:`ج م ع`},
      {w:`تَوَاتُر`,p:`تواتر`,tr:`tawātur`,fr:`transmission par chaîne ininterrompue`,fm:`Masdar Form VI`,root:`و ت ر`},
      {w:`غَرِيب`,p:`غريب`,tr:`gharīb`,fr:`rare, étrange (mots rares du Coran)`,fm:`Adj — فَعِيل`,root:`غ ر ب`},
      {w:`مُبْهَم`,p:`مبهم`,tr:`mubham`,fr:`indéterminé, obscur`,fm:`Participe passif Form IV`,root:`ب ه م`},
      {w:`مُقَطَّعَات`,p:`مقطعات`,tr:`muqaṭṭaʿāt`,fr:`lettres initiales des sourates (الم etc.)`,fm:`Pl. de مُقَطَّعَة`,root:`ق ط ع`},
      {w:`فَوَاتِح السُّوَر`,p:`فواتح السور`,tr:`fawātiḥ as-suwar`,fr:`ouvertures des sourates`,fm:`Idāfa`,root:`ف ت ح`},
      {w:`إِعْجَاز بَيَانِيّ`,p:`إعجاز بياني`,tr:`iʿjāz bayānī`,fr:`inimitabilité rhétorique`,fm:`Syntagme`,root:`ع ج ز`},
      {w:`إِعْجَاز عِلْمِيّ`,p:`إعجاز علمي`,tr:`iʿjāz ʿilmī`,fr:`inimitabilité scientifique`,fm:`Syntagme`,root:`ع ج ز`},
      {w:`أُمُّ الْقُرْآن`,p:`أم القرآن`,tr:`umm al-qurʾān`,fr:`la Mère du Coran (Al-Fatiha)`,fm:`Idāfa`,root:`أ م م`}
    ]
  },
  {
    theme:`الشِّعْرُ الْعَرَبِيُّ الْكَلَاسِيكِيُّ — Poésie arabe classique`,
    words:[
      {w:`عَرُوض`,p:`عروض`,tr:`ʿarūḍ`,fr:`prosodie, science des mètres poétiques`,fm:`Masdar Form I`,root:`ع ر ض`},
      {w:`الْخَلِيل بْن أَحْمَد`,p:`الخليل بن أحمد`,tr:`al-Khalīl ibn Aḥmad`,fr:`fondateur de la prosodie arabe (718-786)`,fm:`Nom propre`,root:`—`},
      {w:`بَحْر`,p:`بحر`,tr:`baḥr`,fr:`mer, mètre poétique (pl. بُحُور)`,fm:`Nom — فَعْل`,root:`ب ح ر`},
      {w:`تَفْعِيلَة`,p:`تفعيلة`,tr:`tafʿīla`,fr:`pied métrique (pl. تَفَاعِيل)`,fm:`Nom — تَفْعِيلَة`,root:`ف ع ل`},
      {w:`شَطْر`,p:`شطر`,tr:`shaṭr`,fr:`hémistiche (pl. أَشْطَار)`,fm:`Nom — فَعْل`,root:`ش ط ر`},
      {w:`عَجُز`,p:`عجز`,tr:`ʿajuz`,fr:`2e hémistiche (pl. أَعْجَاز)`,fm:`Nom — فَعُل`,root:`ع ج ز`},
      {w:`صَدْر`,p:`صدر`,tr:`ṣadr`,fr:`1er hémistiche`,fm:`Nom — فَعْل`,root:`ص د ر`},
      {w:`مَطْلَع`,p:`مطلع`,tr:`maṭlaʿ`,fr:`vers d'ouverture (incipit)`,fm:`Nom de lieu Form I`,root:`ط ل ع`},
      {w:`مَقْطَع`,p:`مقطع`,tr:`maqṭaʿ`,fr:`finale, coda du poème`,fm:`Nom de lieu Form I`,root:`ق ط ع`},
      {w:`زِحَاف`,p:`زحاف`,tr:`ziḥāf`,fr:`licences métriques (altérations)`,fm:`Masdar Form I`,root:`ز ح ف`},
      {w:`عِلَّة`,p:`علة`,tr:`ʿilla`,fr:`modifications affectant la fin du vers`,fm:`Nom — géminé`,root:`ع ل ل`},
      {w:`قَافِيَة`,p:`قافية`,tr:`qāfiya`,fr:`rime, système de rimes`,fm:`Nom — فَاعِلَة`,root:`ق ف و`},
      {w:`حَرْف الرَّوِيِّ`,p:`حرف الروي`,tr:`ḥarf ar-rawī`,fr:`consonne de rime`,fm:`Idāfa`,root:`ر و ي`},
      {w:`مُعَلَّقَة`,p:`معلقة`,tr:`muʿallaqa`,fr:`ode suspendue préislamique`,fm:`Participe passif Form II`,root:`ع ل ق`},
      {w:`قَصِيدَة`,p:`قصيدة`,tr:`qaṣīda`,fr:`qasida (poème long)`,fm:`Nom — فَعِيلَة`,root:`ق ص د`},
      {w:`مُوَشَّح`,p:`موشح`,tr:`muwashshah`,fr:`poème strophique andalou`,fm:`Participe passif Form II`,root:`و ش ح`},
      {w:`زَجَل`,p:`زجل`,tr:`zajal`,fr:`poème populaire dialectal andalou`,fm:`Nom — فَعَل`,root:`ز ج ل`},
      {w:`خَرْجَة`,p:`خرجة`,tr:`kharja`,fr:`finale dialectale du muwashshah`,fm:`Nom — فَعْلَة`,root:`خ ر ج`},
      {w:`هِجَاء`,p:`هجاء`,tr:`hijāʾ`,fr:`satire poétique`,fm:`Masdar Form I`,root:`ه ج و`},
      {w:`فَخْر`,p:`فخر`,tr:`fakhr`,fr:`auto-éloge poétique (boast)`,fm:`Masdar Form I`,root:`ف خ ر`}
    ]
  },
  {
    theme:`التَّرَاثُ الْعِلْمِيُّ — Patrimoine scientifique islamique`,
    words:[
      {w:`بَيْت الْحِكْمَة`,p:`بيت الحكمة`,tr:`bayt al-ḥikma`,fr:`Maison de la Sagesse (Bagdad)`,fm:`Idāfa`,root:`ح ك م`},
      {w:`حَرَكَة التَّرْجَمَة`,p:`حركة الترجمة`,tr:`ḥarakat at-tarjama`,fr:`mouvement de traduction (8-10e s.)`,fm:`Idāfa`,root:`ت ر ج`},
      {w:`الْخَوَارِزْمِيّ`,p:`الخوارزمي`,tr:`al-Khwārizmī`,fr:`Al-Khwarizmi (780-850) — père de l'algèbre`,fm:`Nom propre`,root:`—`},
      {w:`اِبْن الْهَيْثَم`,p:`ابن الهيثم`,tr:`ibn al-Haytham`,fr:`Alhazen (965-1040) — père de l'optique`,fm:`Nom propre`,root:`—`},
      {w:`اِبْن سِينَا`,p:`ابن سينا`,tr:`ibn Sīnā`,fr:`Avicenne (980-1037) — médecin-philosophe`,fm:`Nom propre`,root:`—`},
      {w:`اِبْن الْبَيْطَار`,p:`ابن البيطار`,tr:`ibn al-Bayyāṭar`,fr:`Ibn al-Baytar (1197-1248) — botaniste`,fm:`Nom propre`,root:`—`},
      {w:`الإِدْرِيسِيّ`,p:`الإدريسي`,tr:`al-Idrīsī`,fr:`Al-Idrisi (1100-1165) — géographe`,fm:`Nom propre`,root:`—`},
      {w:`اِبْن رُشْد`,p:`ابن رشد`,tr:`ibn Rushd`,fr:`Averroès (1126-1198) — philosophe`,fm:`Nom propre`,root:`—`},
      {w:`الرَّازِيّ`,p:`الرازي`,tr:`ar-Rāzī`,fr:`Al-Razi/Rhazès (854-925) — médecin`,fm:`Nom propre`,root:`—`},
      {w:`الْبِيرُونِيّ`,p:`البيروني`,tr:`al-Bīrūnī`,fr:`Al-Biruni (973-1048) — encyclopédiste`,fm:`Nom propre`,root:`—`},
      {w:`عِلْم الْفَلَك`,p:`علم الفلك`,tr:`ʿilm al-falak`,fr:`astronomie`,fm:`Idāfa`,root:`ف ل ك`},
      {w:`عِلْم الْبَصَرِيَّات`,p:`علم البصريات`,tr:`ʿilm al-baṣariyyāt`,fr:`optique`,fm:`Idāfa`,root:`ب ص ر`},
      {w:`الْجَبْر`,p:`الجبر`,tr:`al-jabr`,fr:`algèbre`,fm:`Nom — article`,root:`ج ب ر`},
      {w:`الْمُثَلَّثَات`,p:`المثلثات`,tr:`al-muthallathāt`,fr:`trigonométrie`,fm:`Pl. de مُثَلَّث`,root:`ث ل ث`},
      {w:`عِلْم الْكِيمْيَاء`,p:`علم الكيمياء`,tr:`ʿilm al-kīmiyāʾ`,fr:`chimie`,fm:`Idāfa`,root:`—`},
      {w:`الأَرْقَام الْعَرَبِيَّة`,p:`الأرقام العربية`,tr:`al-arqām al-ʿarabiyya`,fr:`chiffres arabes`,fm:`Syntagme`,root:`ر ق م`},
      {w:`إِرْث حَضَارِيّ`,p:`إرث حضاري`,tr:`irth ḥaḍārī`,fr:`héritage civilisationnel`,fm:`Syntagme`,root:`و ر ث`},
      {w:`نَقْل الْمَعْرِفَة`,p:`نقل المعرفة`,tr:`naql al-maʿrifa`,fr:`transfert de connaissance`,fm:`Idāfa`,root:`ع ر ف`},
      {w:`عَصْر الذَّهَبِيّ`,p:`عصر ذهبي`,tr:`ʿaṣr dhahabī`,fr:`Âge d'or islamique`,fm:`Syntagme`,root:`ذ ه ب`},
      {w:`مُؤَلَّف مَوْسُوعِيّ`,p:`مؤلف موسوعي`,tr:`muʾallaf mawsūʿī`,fr:`œuvre encyclopédique`,fm:`Syntagme`,root:`أ ل ف`}
    ]
  }
];
