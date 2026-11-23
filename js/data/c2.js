/* ═══════════════════════════════════════════════
   BRIQUE DONNÉES — C2 (16 textes)
   Niveau : Maîtrise · إتقان
   Textes authentiques : Coran · Hadith · Classiques
   littéraires · Philosophie · Rhétorique avancée
   RÈGLE : toutes les strings en backticks `...`
═══════════════════════════════════════════════ */
'use strict';

var C2_TEXTS = (function () {


  /* ─── T1 — سُورَةُ الْفَاتِحَةِ وَتَفْسِيرُهَا ─── */
  var T1 = {
    id:`c2-1`, level:`C2`,
    titleW:`سُورَةُ الْفَاتِحَةِ وَتَفْسِيرُهَا`, titleP:`سورة الفاتحة وتفسيرها`,
    titleFr:`La Sourate Al-Fatiha et son exégèse`,
    sentences:[
      [{w:`بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ`,t:`Au nom de Dieu, le Tout Miséricordieux, le Très Miséricordieux`}],
      [{w:`الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ`,t:`Toute louange appartient à Dieu, Seigneur des mondes`}],
      [{w:`الرَّحْمَنِ الرَّحِيمِ`,t:`le Tout Miséricordieux, le Très Miséricordieux (en apposition)`}],
      [{w:`مَالِكِ يَوْمِ الدِّينِ`,t:`Maître du Jour de la Rétribution (idāfa)`}],
      [{w:`إِيَّاكَ نَعْبُدُ`,t:`C'est Toi seul que nous adorons (objet en tête — قصر)`},{w:`وَإِيَّاكَ نَسْتَعِينُ`,t:`et c'est Toi seul dont nous implorons l'aide`}],
      [{w:`اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ`,t:`Guide-nous sur le droit chemin (double objet : إِيَّانَا + الصِّرَاط)`}],
      [{w:`صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ`,t:`le chemin de ceux que Tu as comblés de bienfaits (relative définie sans الَّذِي لأن الأول معرّف بإضافة)`},{w:`غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ`,t:`non pas ceux contre qui s'est exercée la colère`},{w:`وَلَا الضَّالِّينَ`,t:`ni les égarés`}],
      [{w:`هَذِهِ السُّورَةُ الْكَرِيمَةُ`,t:`cette noble sourate`},{w:`تَجْمَعُ حَقَائِقَ الْإِيمَانِ`,t:`rassemble les vérités de la foi`},{w:`فِي سَبْعِ آيَاتٍ بَلِيغَاتٍ`,t:`en sept versets éloquents`},{w:`لَا يَمَلُّ الْمُؤْمِنُ مِنْ تِلَاوَتِهَا`,t:`dont le croyant ne se lasse pas de la récitation`}],
      [{w:`وَقَدْ جَمَعَ ابْنُ كَثِيرٍ فِي تَفْسِيرِهَا`,t:`et Ibn Kathir a rassemblé dans son exégèse`},{w:`أَوَّلَ مَجَلَّدٍ مِنْ تَفْسِيرِهِ`,t:`le premier volume de son commentaire`},{w:`مُبَيِّنًا أَنَّ الْفَاتِحَةَ أُمُّ الْقُرْآنِ وَسَبْعُ الْمَثَانِي`,t:`montrant que la Fatiha est la Mère du Coran et les Sept Redoublées`}],
    ],
    vocabulary:[
      {w:`بَسْمَلَة`,p:`بسملة`,tr:`basmala`,fr:`bismillāh (formule d'invocation)`,fm:`Nom verbifié (quadrilitère)`,root:`ب س م`},
      {w:`حَمْد`,p:`حمد`,tr:`ḥamd`,fr:`louange, glorification (≠ شُكْر — gratitude)`,fm:`Masdar Form I`,root:`ح م د`},
      {w:`رَبّ`,p:`رب`,tr:`rabb`,fr:`Seigneur, maître éducateur (pl. أَرْبَاب)`,fm:`Nom — géminé`,root:`ر ب ب`},
      {w:`عَالَمِين`,p:`عالمين`,tr:`ʿālamīn`,fr:`les mondes (pl. de عَالَم — forme unique au pl.)`,fm:`Pl. masc. sain — pl. irrégulier`,root:`ع ل م`},
      {w:`رَحْمَن`,p:`رحمن`,tr:`raḥmān`,fr:`le Tout Miséricordieux (attribut exclusif à Dieu)`,fm:`Adjectif — schème فَعْلَان (diptote)`,root:`ر ح م`},
      {w:`رَحِيم`,p:`رحيم`,tr:`raḥīm`,fr:`le Très Miséricordieux (s'applique aux hommes aussi)`,fm:`Adjectif — schème فَعِيل`,root:`ر ح م`},
      {w:`مَالِك`,p:`مالك`,tr:`mālik`,fr:`Maître absolu, propriétaire (≠ مَلِك roi)`,fm:`Participe actif Form I`,root:`م ل ك`},
      {w:`دِين`,p:`دين`,tr:`dīn`,fr:`religion, rétribution, jugement (pl. أَدْيَان)`,fm:`Masdar Form I`,root:`د ي ن`},
      {w:`صِرَاط`,p:`صراط`,tr:`ṣirāṭ`,fr:`chemin, voie, route droite`,fm:`Nom — schème فِعَال`,root:`ص ر ط`},
      {w:`أَنْعَمَ عَلَى`,p:`أنعم على`,tr:`anʿama ʿalā`,fr:`combler de bienfaits, gratifier`,fm:`Verbe Form IV`,root:`ن ع م`},
      {w:`مَغْضُوب`,p:`مغضوب`,tr:`maghḍūb`,fr:`celui sur qui s'est exercée la colère`,fm:`Participe passif Form I`,root:`غ ض ب`},
      {w:`ضَالّ`,p:`ضال`,tr:`ḍāll`,fr:`égaré, perdu (pl. الضَّالِّين)`,fm:`Participe actif Form I — géminé`,root:`ض ل ل`},
      {w:`أُمُّ الْقُرْآن`,p:`أم القرآن`,tr:`umm al-Qurʾān`,fr:`Mère du Coran (nom de la Fatiha)`,fm:`Idāfa honorifique`,root:`أ م م`},
    ],
    grammar:{
      concept:`أُسْلُوبُ التَّفْسِيرِ الْقُرْآنِيِّ — L'exégèse coranique (تفسير · تأويل · إعراب)`,
      excerptW:`إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ — تقديم إِيَّاك يُفِيدُ الْقَصْرَ وَالتَّخْصِيصَ`,
      excerptP:`إياك نعبد وإياك نستعين — تقديم إياك يفيد القصر والتخصيص`,
      exp:`L'exégèse (التَّفْسِير) analyse le texte coranique à plusieurs niveaux. <strong>الإعراب</strong> (analyse grammaticale) : إِيَّاكَ = مفعول به مقدم (objet antéposé). <strong>البلاغة</strong> : التقديم يُفيد القصر — "C'est Toi seul que nous adorons". <strong>التأويل</strong> (herméneutique) : الجمع بين العبادة والاستعانة = إشارة إلى إسلام الظاهر والباطن.`,
      gtblHeaders:[`Niveau d'analyse`,`Outil`,`Application sur la Fatiha`,`Apport`],
      table:[
        {v:`إعراب (syntaxe)`,f:`تحديد وظيفة كل كلمة`,m:`إِيَّاكَ = مفعول به مقدم`,fr:`Structure de l'objet antéposé`},
        {v:`بلاغة (rhétorique)`,f:`القصر بالتقديم`,m:`إِيَّاكَ نَعْبُدُ = نعبدك أنت فحسب`,fr:`Exclusivité de l'adoration`},
        {v:`تفسير (commentaire)`,f:`شرح المعنى`,m:`رَبِّ الْعَالَمِينَ = التربية الشاملة لكل الخلق`,fr:`Portée universelle du Seigneuriage`},
        {v:`تأويل (herméneutique)`,f:`البعد الباطني`,m:`الصِّرَاطُ الْمُسْتَقِيمُ = التوسط والاعتدال`,fr:`La voie du juste milieu`},
        {v:`أسباب النزول`,f:`contexte révélation`,m:`نزلت في مكة / المدينة — خلاف`,fr:`Impact sur la jurisprudence`},
        {v:`قراءات (variantes)`,f:`مَالِك / مَلِك`,m:`مَالِكِ vs مَلِكِ — قراءتان متواترتان`,fr:`Deux lectures canoniques complémentaires`},
      ],
      note:`Les quatre méthodes d'exégèse : <strong>① التفسير بالمأثور</strong> (par transmission) · <strong>② التفسير بالرأي</strong> (par opinion raisonnée) · <strong>③ التفسير الإشاري</strong> (soufi) · <strong>④ التفسير العلمي</strong> (scientifique moderne).`,
    },
  };

  /* ─── T2 — الأَرْبَعُونَ النَّوَوِيَّةُ ─────────── */
  var T2 = {
    id:`c2-2`, level:`C2`,
    titleW:`الأَرْبَعُونَ النَّوَوِيَّةُ`, titleP:`الأربعون النووية`,
    titleFr:`Les Quarante Hadith de l'Imam al-Nawawi`,
    sentences:[
      [{w:`عَنْ أَمِيرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللهُ عَنْهُ`,t:`De l'Émir des croyants, Abu Hafs Omar ibn al-Khattab, que Dieu soit satisfait de lui`},{w:`قَالَ سَمِعْتُ رَسُولَ اللهِ ﷺ يَقُولُ`,t:`il dit : j'ai entendu le Messager de Dieu (PBSL) dire`}],
      [{w:`إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ`,t:`certes les actes ne valent que par les intentions (إِنَّمَا — restriction)`},{w:`وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى`,t:`et chaque personne n'obtient que ce qu'elle a eu l'intention de faire`}],
      [{w:`فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللهِ وَرَسُولِهِ`,t:`alors quiconque a émigré vers Dieu et Son Messager`},{w:`فَهِجْرَتُهُ إِلَى اللهِ وَرَسُولِهِ`,t:`son émigration est vers Dieu et Son Messager (résultat = intention)`}],
      [{w:`وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا`,t:`et quiconque a émigré pour une vie mondaine qu'il cherche à obtenir`},{w:`أَوِ امْرَأَةٍ يَنْكِحُهَا`,t:`ou pour une femme qu'il veut épouser`},{w:`فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ`,t:`son émigration n'a de valeur que pour ce vers quoi il a émigré`}],
      [{w:`رَوَاهُ إِمَامَا الْمُحَدِّثِينَ`,t:`rapporté par les deux imams des traditionnistes`},{w:`أَبُو عَبْدِ اللهِ مُحَمَّدُ بْنُ إِسْمَاعِيلَ بْنِ إِبْرَاهِيمَ ابْنُ الْمُغِيرَةِ بْنِ بَرْدِزْبَهَ الْبُخَارِيُّ`,t:`Abu Abdillah Muhammad ibn Ismail al-Bukhari`},{w:`وَأَبُو الْحُسَيْنِ مُسْلِمُ بْنُ الْحَجَّاجِ الْقُشَيْرِيُّ النَّيْسَابُورِيُّ`,t:`et Abu al-Husayn Muslim ibn al-Hajjaj al-Naysaburi`}],
      [{w:`وَهَذَا الْحَدِيثُ أَحَدُ الأَحَادِيثِ الَّتِي عَلَيْهَا مَدَارُ الإِسْلَامِ`,t:`et ce hadith est l'un des hadiths sur lesquels repose l'islam`},{w:`قَالَ الشَّافِعِيُّ رَحِمَهُ اللهُ`,t:`Al-Shafi'i, que Dieu lui fasse miséricorde, dit`},{w:`إِنَّهُ يَدْخُلُ فِي سَبْعِينَ بَابًا مِنَ الْفِقْهِ`,t:`qu'il entre dans soixante-dix chapitres du fiqh`}],
    ],
    vocabulary:[
      {w:`الأَرْبَعُون النَّوَوِيَّة`,p:`الأربعون النووية`,tr:`al-Arbaʿūn an-Nawawiyya`,fr:`Les Quarante Hadith d'An-Nawawi (1233-1277)`,fm:`Titre (pl. + nisba)`,root:`—`},
      {w:`نِيَّة`,p:`نية`,tr:`niyya`,fr:`intention, volonté (pl. نِيَّات)`,fm:`Nom — géminé`,root:`ن و ي`},
      {w:`امْرُؤ`,p:`امرؤ`,tr:`imruʾ`,fr:`personne, individu (forme archaïque)`,fm:`Nom — hamzé irrégulier`,root:`م ر أ`},
      {w:`هِجْرَة`,p:`هجرة`,tr:`hijra`,fr:`émigration (concept islamique fondamental)`,fm:`Masdar Form I`,root:`ه ج ر`},
      {w:`دُنْيَا`,p:`دنيا`,tr:`dunyā`,fr:`vie mondaine, bas monde (opp. آخِرَة)`,fm:`Superlatif fém. — défectueux (adj. substantivé)`,root:`د ن و`},
      {w:`نَكَحَ`,p:`نكح`,tr:`nakaḥa`,fr:`épouser, se marier`,fm:`Verbe Form I`,root:`ن ك ح`},
      {w:`مُحَدِّث`,p:`محدث`,tr:`muḥaddith`,fr:`spécialiste du hadith (pl. مُحَدِّثُون)`,fm:`Participe actif Form II`,root:`ح د ث`},
      {w:`الْبُخَارِيّ`,p:`البخاري`,tr:`al-Bukhārī`,fr:`Al-Bukhari (810-870) — auteur du Ṣaḥīḥ al-Bukhārī`,fm:`Nom propre`,root:`—`},
      {w:`مُسْلِم`,p:`مسلم`,tr:`Muslim`,fr:`Muslim ibn al-Hajjaj (815-875) — auteur du Ṣaḥīḥ Muslim`,fm:`Nom propre`,root:`—`},
      {w:`مَدَار`,p:`مدار`,tr:`madār`,fr:`pivot, centre, fondement (sur lequel repose)`,fm:`Nom de lieu — schème مَفْعَل`,root:`د و ر`},
      {w:`الشَّافِعِيّ`,p:`الشافعي`,tr:`ash-Shāfiʿī`,fr:`Al-Shafi'i (767-820) — fondateur du madhhab shafi'ite`,fm:`Nom propre`,root:`ش ف ع`},
    ],
    grammar:{
      concept:`عِلْمُ الْحَدِيثِ — La science du hadith (إسناد · متن · رجال)`,
      excerptW:`عَنْ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللهُ عَنْهُ قَالَ سَمِعْتُ رَسُولَ اللهِ ﷺ يَقُولُ`,
      excerptP:`عن عمر بن الخطاب رضي الله عنه قال سمعت رسول الله ﷺ يقول`,
      exp:`La science du hadith (عِلْم الحديث) distingue l'<strong>إسناد</strong> (chaîne de transmission) du <strong>متن</strong> (texte du hadith). L'authenticité est classifiée en degrés : صَحِيح · حَسَن · ضَعِيف. Le mot عَنْ indique la transmission; يَقُولُ après سَمِعْتُ = discours direct.`,
      gtblHeaders:[`Degré`,`Nom arabe`,`Critères`,`Exemples`],
      table:[
        {v:`Authentique`,f:`صَحِيح`,m:`chaîne continue + narr. fiables`,fr:`Ṣaḥīḥ al-Bukhārī · Ṣaḥīḥ Muslim`},
        {v:`Bon`,f:`حَسَن`,m:`légèrement inférieur en rigueur`,fr:`Jāmiʿ al-Tirmidhī`},
        {v:`Faible`,f:`ضَعِيف`,m:`manquement dans la chaîne`,fr:`Non utilisable en jurisprudence`},
        {v:`Inventé`,f:`مَوْضُوع`,m:`forgé, sans fondement`,fr:`Rejeté catégoriquement`},
        {v:`Continu (متصل)`,f:`مُسْنَد`,m:`chaîne jusqu'au Prophète`,fr:`Niveau le plus élevé`},
        {v:`Interrompu`,f:`مُرْسَل · مُنْقَطِع`,m:`un ou plusieurs maillons manquants`,fr:`Controverse entre écoles`},
      ],
      note:`La formule <strong>رَضِيَ اللهُ عَنْهُ</strong> (abrégée رض) après un Compagnon · <strong>رَحِمَهُ اللهُ</strong> (رح) après un savant · <strong>حَفِظَهُ اللهُ</strong> après un savant vivant. Ces formules de piété font partie du style islamique académique.`,
    },
  };

  /* ─── T3 — رِحْلَةُ ابْنِ بَطُّوطَةَ ──────────── */
  var T3 = {
    id:`c2-3`, level:`C2`,
    titleW:`رِحْلَةُ ابْنِ بَطُّوطَةَ`, titleP:`رحلة ابن بطوطة`,
    titleFr:`Le Voyage d'Ibn Battuta`,
    sentences:[
      [{w:`أَبُو عَبْدِ اللهِ مُحَمَّدُ بْنُ عَبْدِ اللهِ ابْنُ بَطُّوطَةَ اللَّوَاتِيُّ الطَّنْجِيُّ`,t:`Abu Abdillah Muhammad ibn Abdillah ibn Battuta, le Lawati de Tanger`},{w:`رَحَّالَةٌ مَغْرِبِيٌّ عَاشَ فِي الْقَرْنِ الثَّامِنِ الْهِجْرِيِّ`,t:`est un voyageur marocain qui a vécu au 8ème siècle de l'Hégire`}],
      [{w:`قَطَعَ فِي رِحْلَتِهِ مَا يَزِيدُ عَلَى خَمْسَةٍ وَسَبْعِينَ أَلْفَ مِيلٍ`,t:`il a parcouru dans son voyage plus de 75 000 miles`},{w:`مُتَجَاوِزًا كُلَّ مَسَافَاتِ الرَّحَّالَةِ الَّذِينَ سَبَقُوهُ`,t:`dépassant toutes les distances des voyageurs qui le précédèrent`}],
      [{w:`كَتَبَ عَنْ زِيَارَتِهِ لِلْقَاهِرَةِ`,t:`il écrivit au sujet de sa visite au Caire`},{w:`قَائِلًا`,t:`disant`},{w:`وَصَلْتُ إِلَى مِصْرَ أُمِّ الْبِلَادِ وَمَعْدِنِ الإِسْلَامِ`,t:`"Je suis arrivé en Égypte, mère des pays et mine de l'islam`},{w:`وَقَدِ اتَّسَعَتِ الْفُسْحَةُ بَيْنَ طَرَفَيْهَا وَطَغَى فِيضُ النِّيلِ عَلَى ضِفَافِهَا`,t:`dont l'étendue s'est dilatée entre ses deux extrémités et dont la crue du Nil a débordé sur ses rives"`}],
      [{w:`وَوَصَفَ مَجَالِسَ الْعُلَمَاءِ فِي الأَزْهَرِ`,t:`et il décrivit les cercles des savants à Al-Azhar`},{w:`بِقَوْلِهِ`,t:`en ces termes`},{w:`وَالطُّلَّابُ مِنَ الأَقْطَارِ الشَّتَّى يَتَحَلَّقُونَ حَوْلَ الشُّيُوخِ`,t:`"et les étudiants des contrées diverses forment des cercles autour des cheikhs`},{w:`تَسُودُ فِيهَا رَوَائِحُ الْعِلْمِ وَنَسِيمُ الإِيمَانِ`,t:`où règnent les parfums du savoir et la brise de la foi"`}],
      [{w:`وَقَدْ أَمْلَى ابْنُ بَطُّوطَةَ رِحْلَتَهُ`,t:`et Ibn Battuta a dicté son voyage`},{w:`عَلَى الْكَاتِبِ مُحَمَّدِ بْنِ جُزَيٍّ الْكَلْبِيِّ`,t:`au scribe Muhammad ibn Juzayy al-Kalbi`},{w:`الَّذِي أَضَافَ إِلَيْهَا لَمَسَاتٍ أَدَبِيَّةً رَفِيعَةً`,t:`qui y ajouta des touches littéraires raffinées`}],
    ],
    vocabulary:[
      {w:`اِبْن بَطُّوطَة`,p:`ابن بطوطة`,tr:`ibn Baṭṭūṭa`,fr:`Ibn Battuta (1304-1368/69) — plus grand voyageur médiéval`,fm:`Nom propre`,root:`—`},
      {w:`رَحَّالَة`,p:`رحالة`,tr:`raḥḥāla`,fr:`grand voyageur, explorateur`,fm:`Nom — schème فَعَّالَة (صيغة مبالغة)`,root:`ر ح ل`},
      {w:`مِيل`,p:`ميل`,tr:`mīl`,fr:`mile (unité de distance) (pl. أَمْيَال)`,fm:`Nom`,root:`م ي ل`},
      {w:`فُسْحَة`,p:`فسحة`,tr:`fusḥa`,fr:`étendue, espace libre, superficie`,fm:`Nom — schème فُعْلَة`,root:`ف س ح`},
      {w:`طَغَى`,p:`طغى`,tr:`ṭaghā`,fr:`déborder, inonder, se déchaîner`,fm:`Verbe Form I — défectueux`,root:`ط غ و`},
      {w:`فَيَضَان`,p:`فيضان`,tr:`fayaḍān`,fr:`crue, inondation (du Nil)`,fm:`Masdar Form I`,root:`ف ي ض`},
      {w:`ضِفَاف`,p:`ضفاف`,tr:`ḍifāf`,fr:`rives, berges (pl. de ضِفَّة)`,fm:`Pl. brisé`,root:`ض ف ف`},
      {w:`تَحَلَّقَ`,p:`تحلق`,tr:`taḥallaqa`,fr:`former un cercle, se réunir en demi-cercle`,fm:`Verbe Form V`,root:`ح ل ق`},
      {w:`رَائِحَة`,p:`رائحة`,tr:`rāʾiḥa`,fr:`parfum, odeur (pl. رَوَائِح)`,fm:`Participe actif fém. Form I`,root:`ر و ح`},
      {w:`نَسِيم`,p:`نسيم`,tr:`nasīm`,fr:`brise, zéphyr, vent léger`,fm:`Nom — schème فَعِيل`,root:`ن س م`},
      {w:`أَمْلَى`,p:`أملى`,tr:`amlā`,fr:`dicter, faire écrire sous dictée`,fm:`Verbe Form IV — défectueux`,root:`م ل و`},
      {w:`ابْن جُزَيّ`,p:`ابن جزي`,tr:`ibn Juzayy`,fr:`Ibn Juzayy al-Kalbi — scribe et compilateur de la Rihla`,fm:`Nom propre`,root:`—`},
      {w:`لَمْسَة`,p:`لمسة`,tr:`lamsa`,fr:`touche, nuance, légère addition (pl. لَمَسَات)`,fm:`Nom — schème فَعْلَة`,root:`ل م س`},
    ],
    grammar:{
      concept:`أُسْلُوبُ الرِّحْلَةِ — La prose de voyage (الوصف · السرد · المكان)`,
      excerptW:`وَصَلْتُ إِلَى مِصْرَ أُمِّ الْبِلَادِ · وَالطُّلَّابُ مِنَ الأَقْطَارِ الشَّتَّى يَتَحَلَّقُونَ`,
      excerptP:`وصلت إلى مصر أم البلاد · والطلاب من الأقطار الشتى يتحلقون`,
      exp:`La prose de voyage (أدب الرحلة) combine trois modalités : <strong>الوصف</strong> (description des lieux, peuples, monuments), <strong>السرد</strong> (narration des événements du voyage) et <strong>التأمل</strong> (réflexion culturelle et religieuse). Ibn Battuta maîtrise les trois avec une perfection rare.`,
      gtblHeaders:[`Modalité`,`Marqueurs linguistiques`,`Exemple`,`Effet`],
      table:[
        {v:`الوصف (statique)`,f:`يَتَّسِعُ · يَشْمَلُ · فِيهِ`,m:`وَقَدِ اتَّسَعَتِ الْفُسْحَةُ`,fr:`Tableau spatial`},
        {v:`السرد (dynamique)`,f:`ثُمَّ · فَ · وَصَلْتُ · رَحَلْتُ`,m:`وَصَلْتُ إِلَى مِصْرَ`,fr:`Séquence temporelle`},
        {v:`التأمل (réflexif)`,f:`وَقَدْ أَعْجَبَنِي · يَقُولُ ابْنُ بَطُّوطَةَ`,m:`يَسُودُ فِيهَا رَوَائِحُ الْعِلْمِ`,fr:`Dimension spirituelle`},
        {v:`الإحالة (comparaison)`,f:`أَكْبَرُ مِنْ · يُشْبِهُ · كَـ`,m:`مَعْدِنُ الإِسْلَامِ (métaph.)`,fr:`Mise en valeur rhétorique`},
        {v:`النقل المباشر`,f:`قَالَ · قَائِلًا · بِقَوْلِهِ`,m:`قَائِلًا وَصَلْتُ إِلَى مِصْرَ`,fr:`Authenticité de témoignage`},
        {v:`الإحصاء`,f:`أَرْقَام وَمَسَافَات وَتَوَارِيخ`,m:`خَمْسَةٌ وَسَبْعُونَ أَلْفَ مِيلٍ`,fr:`Précision et crédibilité`},
      ],
      note:`Le genre de la رحلة (voyage) est unique à la littérature arabe médiévale. À distinguer : <strong>رحلة حجازية</strong> (vers La Mecque) · <strong>رحلة علمية</strong> (en quête de savoir) · <strong>رحلة سفارية</strong> (diplomatique). Ibn Battuta combine les trois.`,
    },
  };

  /* ─── T4 — نَهْجُ الْبَلَاغَةِ ───────────────── */
  var T4 = {
    id:`c2-4`, level:`C2`,
    titleW:`نَهْجُ الْبَلَاغَةِ`, titleP:`نهج البلاغة`,
    titleFr:`La Voie de l'Éloquence`,
    sentences:[
      [{w:`نَهْجُ الْبَلَاغَةِ`,t:`La Voie de l'Éloquence`},{w:`مَجْمُوعَةٌ مِنْ خُطَبِ وَرَسَائِلَ وَكَلِمَاتٍ`,t:`est un recueil de discours, lettres et maximes`},{w:`تُنْسَبُ إِلَى أَمِيرِ الْمُؤْمِنِينَ عَلِيِّ بْنِ أَبِي طَالِبٍ كَرَّمَ اللهُ وَجْهَهُ`,t:`attribuées au commandeur des croyants Ali ibn Abi Talib, que Dieu honore son visage`}],
      [{w:`وَمِنْ أَبْلَغِ مَا قِيلَ فِي وَصْفِ الدُّنْيَا`,t:`et parmi les paroles les plus éloquentes sur la description de la vie mondaine`},{w:`قَوْلُهُ عَلَيْهِ السَّلَامُ`,t:`sa parole (paix sur lui)`},{w:`الدُّنْيَا دَارُ مَمَرٍّ لَا دَارُ مَقَرٍّ`,t:`le monde est une demeure de passage, non une demeure d'établissement`}],
      [{w:`وَالنَّاسُ فِيهَا رَجُلَانِ`,t:`et les hommes en ce monde sont de deux catégories`},{w:`رَجُلٌ بَاعَ نَفْسَهُ فَأَوْبَقَهَا`,t:`un homme qui s'est vendu lui-même et s'est perdu`},{w:`وَرَجُلٌ ابْتَاعَ نَفْسَهُ فَأَعْتَقَهَا`,t:`et un homme qui s'est racheté lui-même et s'est libéré`}],
      [{w:`وَمِنْ خُطَبِهِ الشَّرِيفَةِ الْخُطْبَةُ الشِّقْشِقِيَّةُ`,t:`et parmi ses nobles discours le Sermon du sifflement (al-Shiqshiqiyya)`},{w:`الَّتِي فِيهَا يَصِفُ مُعَانَاتَهُ بَعْدَ وَفَاةِ النَّبِيِّ ﷺ`,t:`dans laquelle il décrit ses souffrances après le décès du Prophète (PBSL)`}],
      [{w:`أَمَا وَاللهِ لَقَدْ تَقَمَّصَهَا فُلَانٌ وَإِنَّهُ لَيَعْلَمُ`,t:`"Or, par Dieu, Untel a enfilé cette robe (le califat) alors qu'il sait bien`},{w:`أَنَّ مَحَلِّي مِنْهَا مَحَلُّ الْقُطْبِ مِنَ الرَّحَى`,t:`que ma place en elle est celle du pivot dans la meule (image de la mouture)"`}],
      [{w:`وَكَانَ نَهْجُ الْبَلَاغَةِ مُلْهِمًا لِمُعْظَمِ الأُدَبَاءِ وَالْخُطَبَاءِ الْعَرَبِ`,t:`et la Voie de l'Éloquence a été une inspiration pour la plupart des écrivains et orateurs arabes`},{w:`عَلَى مَرِّ الْعُصُورِ`,t:`au fil des siècles`}],
    ],
    vocabulary:[
      {w:`نَهْج`,p:`نهج`,tr:`nahj`,fr:`voie, méthode, chemin clair`,fm:`Masdar Form I`,root:`ن ه ج`},
      {w:`خُطْبَة`,p:`خطبة`,tr:`khuṭba`,fr:`discours, prône, sermon (pl. خُطَب)`,fm:`Nom — schème فُعْلَة`,root:`خ ط ب`},
      {w:`رِسَالَة`,p:`رسالة`,tr:`risāla`,fr:`lettre, épître, traité (pl. رَسَائِل)`,fm:`Nom — schème فِعَالَة`,root:`ر س ل`},
      {w:`مَمَرّ`,p:`ممر`,tr:`mamarr`,fr:`passage, couloir, transit`,fm:`Nom de lieu — schème مَفْعَل`,root:`م ر ر`},
      {w:`مَقَرّ`,p:`مقر`,tr:`maqarr`,fr:`demeure fixe, établissement, siège`,fm:`Nom de lieu — schème مَفْعَل`,root:`ق ر ر`},
      {w:`أَوْبَقَ`,p:`أوبق`,tr:`awbaqa`,fr:`perdre, détruire, damner`,fm:`Verbe Form IV`,root:`و ب ق`},
      {w:`ابْتَاعَ`,p:`ابتاع`,tr:`ibtāʿa`,fr:`racheter, acquérir`,fm:`Verbe Form VIII`,root:`ب ي ع`},
      {w:`أَعْتَقَ`,p:`أعتق`,tr:`aʿtaqa`,fr:`affranchir, libérer`,fm:`Verbe Form IV`,root:`ع ت ق`},
      {w:`تَقَمَّصَ`,p:`تقمص`,tr:`taqammaṣa`,fr:`revêtir (une robe), endosser`,fm:`Verbe Form V`,root:`ق م ص`},
      {w:`قُطْب`,p:`قطب`,tr:`quṭb`,fr:`pivot, pôle, axe`,fm:`Nom — schème فُعْل`,root:`ق ط ب`},
      {w:`رَحَى`,p:`رحى`,tr:`raḥā`,fr:`meule à moudre`,fm:`Nom — défectueux`,root:`ر ح و`},
      {w:`مُلْهِم`,p:`ملهم`,tr:`mulhim`,fr:`inspirant, source d'inspiration`,fm:`Participe actif Form IV`,root:`ل ه م`},
    ],
    grammar:{
      concept:`أُسْلُوبُ الْخُطْبَةِ الْبَلِيغَةِ — L'art oratoire classique (الخطبة · البنية · الإيقاع)`,
      excerptW:`الدُّنْيَا دَارُ مَمَرٍّ لَا دَارُ مَقَرٍّ · رَجُلٌ بَاعَ نَفْسَهُ فَأَوْبَقَهَا وَرَجُلٌ ابْتَاعَ نَفْسَهُ فَأَعْتَقَهَا`,
      excerptP:`الدنيا دار ممر لا دار مقر · رجل باع نفسه فأوبقها ورجل ابتاع نفسه فأعتقها`,
      exp:`La خطبة classique est structurée en <strong>① التحميد</strong> (louange à Dieu) → <strong>② التشهد</strong> → <strong>③ الموضوع</strong> (corps) → <strong>④ الخاتمة</strong>. L'extrait illustre deux figures majeures : <strong>الطباق</strong> (ممرّ ≠ مقرّ) et <strong>المقابلة</strong> (باع ≠ ابتاع / أوبق ≠ أعتق).`,
      gtblHeaders:[`Figure rhétorique`,`Dans le texte`,`Analyse`,`Effet`],
      table:[
        {v:`طباق (antithèse)`,f:`مَمَرّ ≠ مَقَرّ`,m:`دَارُ مَمَرٍّ لَا دَارُ مَقَرٍّ`,fr:`Opposition sur une racine proche — saisissant`},
        {v:`مقابلة (parallélisme inversé)`,f:`بَاعَ / ابْتَاعَ`,m:`بَاعَ فَأَوْبَقَ ↔ ابْتَاعَ فَأَعْتَقَ`,fr:`Structure 1-2 contre 1-2 inversée`},
        {v:`استعارة تمثيلية`,f:`مَحَلُّ الْقُطْبِ مِنَ الرَّحَى`,m:`place du pivot dans la meule = Ali dans le califat`,fr:`Image de la nécessité structurale`},
        {v:`قسم (serment)`,f:`أَمَا وَاللهِ لَقَدْ`,m:`أَمَا وَاللهِ لَقَدْ تَقَمَّصَهَا`,fr:`Emphase par invocation divine`},
        {v:`تقسيم (bipartition)`,f:`رَجُلَانِ : رَجُلٌ...وَرَجُلٌ`,m:`الناس رجلان: باع / ابتاع`,fr:`Division exhaustive de l'humanité`},
        {v:`سجع (prose rimée)`,f:`مَمَرٍّ / مَقَرٍّ`,m:`rime sur ـَرٍّ`,fr:`Harmonie phonique et mémoire`},
      ],
      note:`La خطبة balaghiyya est le genre le plus complet de la prose arabe : elle intègre القرآن والحديث والشعر والحكمة dans un discours unique. L'apprendre revient à apprendre toute la rhétorique arabe.`,
    },
  };

  /* ─── T5 — كَلِيلَةُ وَدِمْنَةُ ────────────── */
  var T5 = {
    id:`c2-5`, level:`C2`,
    titleW:`كَلِيلَةُ وَدِمْنَةُ`, titleP:`كليلة ودمنة`,
    titleFr:`Kalila wa Dimna`,
    sentences:[
      [{w:`كَلِيلَةُ وَدِمْنَةُ`,t:`Kalila et Dimna`},{w:`كِتَابٌ حِكَمِيٌّ تَعْلِيمِيٌّ`,t:`est un livre de sagesse didactique`},{w:`أَصْلُهُ هِنْدِيٌّ وَعَرَّبَهُ ابْنُ الْمُقَفَّعِ`,t:`d'origine indienne, arabisé par Ibn al-Muqaffa`},{w:`فِي الْقَرْنِ الثَّانِي الْهِجْرِيِّ`,t:`au 2ème siècle de l'Hégire (8ème siècle de l'ère chrétienne)`}],
      [{w:`وَقَدِ اتَّخَذَ ابْنُ الْمُقَفَّعِ مِنَ الْحَيَوَانَاتِ رُمُوزًا`,t:`et Ibn al-Muqaffa a fait des animaux des symboles`},{w:`لِيُوَصِّلَ حِكَمَ السِّيَاسَةِ وَالأَخْلَاقِ`,t:`pour transmettre les sagesses de la politique et de l'éthique`},{w:`بِأُسْلُوبٍ قَصَصِيٍّ يَتَجَنَّبُ الْخَطَرَ الْمُبَاشِرَ`,t:`dans un style narratif évitant le danger direct`}],
      [{w:`وَمِنْ حِكَمِهِ الْخَالِدَةِ`,t:`et parmi ses sagesses éternelles`},{w:`قَوْلُهُ`,t:`sa parole`},{w:`إِيَّاكَ وَصُحْبَةَ الأَشْرَارِ`,t:`"Garde-toi de la fréquentation des malfaisants`},{w:`فَإِنَّ الرِّيحَ إِنْ مَرَّتْ عَلَى الطِّيبِ حَمَلَتِ الطِّيبَ`,t:`car le vent qui passe sur le parfum porte le parfum`},{w:`وَإِنْ مَرَّتْ عَلَى النَّتِنِ حَمَلَتِ النَّتِنَ`,t:`et s'il passe sur la fétidité, il porte la fétidité"`}],
      [{w:`وَهَذِهِ الْحِكْمَةُ نَمُوذَجٌ عَلَى`,t:`et cette maxime est un modèle`},{w:`أُسْلُوبِ التَّمْثِيلِ بِظَوَاهِرِ الطَّبِيعَةِ`,t:`du style de l'analogie par les phénomènes naturels`},{w:`لِتَوْصِيلِ مَعَانٍ أَخْلَاقِيَّةٍ عَمِيقَةٍ`,t:`pour transmettre des sens éthiques profonds`}],
      [{w:`وَيَتَمَيَّزُ أُسْلُوبُ ابْنِ الْمُقَفَّعِ`,t:`et le style d'Ibn al-Muqaffa se distingue`},{w:`بِسَلَاسَةِ الْعِبَارَةِ`,t:`par la fluidité de l'expression`},{w:`وَعُمْقِ الْمَعْنَى`,t:`et la profondeur du sens`},{w:`وَالاقْتِصَادِ فِي اللَّفْظِ`,t:`et l'économie des mots`},{w:`مَعَ الإِيفَاءِ بِالْمَقْصُودِ`,t:`tout en atteignant pleinement le but visé`}],
    ],
    vocabulary:[
      {w:`اِبْن الْمُقَفَّع`,p:`ابن المقفع`,tr:`ibn al-Muqaffaʿ`,fr:`Ibn al-Muqaffa (724-759) — écrivain et traducteur`,fm:`Nom propre`,root:`ق ف ع`},
      {w:`حِكَمِيّ`,p:`حكمي`,tr:`ḥikmī`,fr:`de sagesse, sapiential`,fm:`Nisba de حِكْمَة`,root:`ح ك م`},
      {w:`تَعْلِيمِيّ`,p:`تعليمي`,tr:`taʿlīmī`,fr:`didactique, pédagogique`,fm:`Nisba de تَعْلِيم`,root:`ع ل م`},
      {w:`رَمَزَ`,p:`رمز`,tr:`ramaza`,fr:`symboliser, représenter`,fm:`Verbe Form I`,root:`ر م ز`},
      {w:`قَصَصِيّ`,p:`قصصي`,tr:`qaṣaṣī`,fr:`narratif, de récit`,fm:`Nisba de قِصَّة`,root:`ق ص ص`},
      {w:`طِيب`,p:`طيب`,tr:`ṭīb`,fr:`parfum, bonne odeur`,fm:`Masdar Form I`,root:`ط ي ب`},
      {w:`نَتِن`,p:`نتن`,tr:`natin`,fr:`fétidité, mauvaise odeur`,fm:`Adjectif / nom Form I`,root:`ن ت ن`},
      {w:`تَمْثِيل`,p:`تمثيل`,tr:`tamthīl`,fr:`analogie, représentation, exemple`,fm:`Masdar Form II`,root:`م ث ل`},
      {w:`سَلَاسَة`,p:`سلاسة`,tr:`salāsa`,fr:`fluidité, aisance stylistique`,fm:`Masdar Form I`,root:`س ل س`},
      {w:`اقْتِصَاد`,p:`اقتصاد`,tr:`iqtiṣād`,fr:`économie, épargne, sobriété stylistique`,fm:`Masdar Form VIII`,root:`ق ص د`},
      {w:`إِيفَاء`,p:`إيفاء`,tr:`īfāʾ`,fr:`accomplissement, satisfaction pleine`,fm:`Masdar Form IV`,root:`و ف ي`},
      {w:`مَقْصُود`,p:`مقصود`,tr:`maqṣūd`,fr:`but visé, intention (pl. مَقَاصِد)`,fm:`Participe passif Form I`,root:`ق ص د`},
    ],
    grammar:{
      concept:`أُسْلُوبُ الْحِكَايَةِ التَّعْلِيمِيَّةِ — Le récit didactique (الفابل et la sentence)`,
      excerptW:`إِيَّاكَ وَصُحْبَةَ الأَشْرَارِ · فَإِنَّ الرِّيحَ إِنْ مَرَّتْ عَلَى الطِّيبِ حَمَلَتِ الطِّيبَ`,
      excerptP:`إياك وصحبة الأشرار · فإن الريح إن مرت على الطيب حملت الطيب`,
      exp:`La fable (حِكَايَة تَعْلِيمِيَّة) suit un schéma précis : <strong>① حكمة (sentence)</strong> → <strong>② تمثيل (illustration)</strong> → <strong>③ نتيجة (conclusion morale)</strong>. La structure conditionnelle إِنْ...حَمَلَتْ illustre un raisonnement par analogie (قياس شعري).`,
      gtblHeaders:[`Élément`,`Forme`,`Exemple`,`Fonction`],
      table:[
        {v:`حكمة (sentence)`,f:`جملة قصيرة مكثفة`,m:`الدُّنْيَا دَارُ مَمَرٍّ لَا دَارُ مَقَرٍّ`,fr:`Vérité condensée à mémoriser`},
        {v:`تحذير (mise en garde)`,f:`إِيَّاكَ وَـ`,m:`إِيَّاكَ وَصُحْبَةَ الأَشْرَارِ`,fr:`Structure d'évitement — manṣūb`},
        {v:`تعليل (justification)`,f:`فَـ + إِنَّ`,m:`فَإِنَّ الرِّيحَ إِنْ مَرَّتْ`,fr:`Causalité explicite`},
        {v:`تمثيل طبيعي`,f:`ظاهرة طبيعية → نتيجة أخلاقية`,m:`الريح + الطيب → التطيب`,fr:`Analogie pédagogique`},
        {v:`مقابلة (antithèse)`,f:`A → A' / non-A → non-A'`,m:`طِيب → طِيب / نَتِن → نَتِن`,fr:`Symétrie morale parfaite`},
        {v:`إيجاز بليغ`,f:`beaucoup en peu de mots`,m:`الكتاب كله dans 2 lignes`,fr:`Condensation maximale`},
      ],
      note:`La structure <strong>إِيَّاكَ + وَ + منصوب</strong> est un avertissement figé. Elle met le terme évité à l'accusatif : إِيَّاكَ وَصُحْبَةَ (garde-toi de la fréquentation). Équivalent de "méfie-toi de".`,
    },
  };

  /* ─── T6 — أَبُو الْعَلَاءِ الْمَعَرِّيُّ ──────── */
  var T6 = {
    id:`c2-6`, level:`C2`,
    titleW:`أَبُو الْعَلَاءِ الْمَعَرِّيُّ`, titleP:`أبو العلاء المعري`,
    titleFr:`Abou al-Ala al-Maarri`,
    sentences:[
      [{w:`أَبُو الْعَلَاءِ أَحْمَدُ بْنُ عَبْدِ اللهِ الْمَعَرِّيُّ`,t:`Abou al-Ala Ahmad ibn Abdillah al-Maarri`},{w:`شَاعِرٌ وَفَيْلَسُوفٌ وَنَاثِرٌ عَبَّاسِيٌّ`,t:`est un poète, philosophe et prosateur abbasside`},{w:`عَاشَ فِي الْقَرْنِ الْخَامِسِ الْهِجْرِيِّ`,t:`qui a vécu au 5ème siècle de l'Hégire`},{w:`وَفَقَدَ بَصَرَهُ فِي الثَّالِثَةِ مِنْ عُمُرِهِ جَرَّاءَ الْجُدَرِيِّ`,t:`et a perdu la vue à l'âge de trois ans à la suite de la variole`}],
      [{w:`عُرِفَ بِتَشَاؤُمِهِ الْفَلْسَفِيِّ`,t:`il est connu pour son pessimisme philosophique`},{w:`وَتَشْكِيكِهِ فِي كَثِيرٍ مِنَ الْمَسَلَّمَاتِ`,t:`et son questionnement de nombreuses évidences admises`},{w:`غَيْرَ أَنَّ بَعْضَ الْبَاحِثِينَ يَرَوْنَ أَنَّ تَشَاؤُمَهُ زُهْدٌ لَا كُفْرٌ`,t:`cependant certains chercheurs pensent que son pessimisme est ascétisme, non athéisme`}],
      [{w:`وَمِنْ أَشْهَرِ قَصَائِدِهِ اللُّزُومِيَّاتُ`,t:`et parmi ses poèmes les plus célèbres les Luzumiyyāt`},{w:`وَهِيَ ذَاتُ قَافِيَةٍ مُزْدَوَجَةٍ مُلْتَزِمَةٍ`,t:`qui ont une rime double obligatoire (contrainte qu'il s'est imposée)`}],
      [{w:`قَالَ فِي بَعْضِ لُزُومِيَّاتِهِ`,t:`il dit dans certains de ses Luzumiyyāt`},{w:`غَدَوْنَا وَرُحْنَا فِي غُرُورٍ وَبَاطِلٍ`,t:`"nous avons été et nous sommes allés dans l'illusion et le vain`},{w:`وَنَامَ كَثِيرٌ وَانْتَبَهَ الأَقَلُّونَ`,t:`et beaucoup dormirent et peu s'éveillèrent"`}],
      [{w:`وَرُغْمَ تَشَاؤُمِهِ`,t:`et malgré son pessimisme`},{w:`فَقَدِ اشْتَهَرَ بِتَقْوَاهُ الشَّخْصِيَّةِ وَزُهْدِهِ وَتَرْكِهِ لِلَّحْمِ وَالأَذَى`,t:`il était connu pour sa piété personnelle, son ascétisme et son abstention de viande et de nuisance`},{w:`مُعَلِّمًا بِسُلُوكِهِ مَا عَجَزَ عَنْ تَعْلِيمِهِ بِقَوْلِهِ`,t:`enseignant par sa conduite ce que ses paroles n'avaient pu enseigner`}],
    ],
    vocabulary:[
      {w:`الْمَعَرِّيّ`,p:`المعري`,tr:`al-Maʿarrī`,fr:`Al-Maarri (973-1057) — poète-philosophe aveugle`,fm:`Nom propre`,root:`—`},
      {w:`نَاثِر`,p:`ناثر`,tr:`nāthir`,fr:`prosateur, auteur de prose`,fm:`Participe actif Form I`,root:`ن ث ر`},
      {w:`جُدَرِيّ`,p:`جدري`,tr:`judarī`,fr:`variole`,fm:`Nisba de جَدَر`,root:`ج د ر`},
      {w:`تَشَاؤُم`,p:`تشاؤم`,tr:`tashāʾum`,fr:`pessimisme (opp. de تَفَاؤُل)`,fm:`Masdar Form VI`,root:`ش أ م`},
      {w:`مُسَلَّمَة`,p:`مسلمة`,tr:`musalamma`,fr:`évidence admise, axiome, vérité acceptée (pl. مُسَلَّمَات)`,fm:`Participe passif Form II (fém.)`,root:`س ل م`},
      {w:`زُهْد`,p:`زهد`,tr:`zuhd`,fr:`ascétisme, détachement du monde`,fm:`Masdar Form I`,root:`ز ه د`},
      {w:`لُزُومِيَّات`,p:`لزوميات`,tr:`luzūmiyyāt`,fr:`Les Luzumiyyāt (poèmes à double contrainte de rime)`,fm:`Pl. de لُزُومِيَّة (nisba)`,root:`ل ز م`},
      {w:`مُزْدَوَجَة`,p:`مزدوجة`,tr:`muzdawwaja`,fr:`double, redoublée`,fm:`Participe passif Form VIII (fém.)`,root:`ز و ج`},
      {w:`غَدَا`,p:`غدا`,tr:`ghadā`,fr:`aller le matin, partir à l'aube`,fm:`Verbe Form I — défectueux`,root:`غ د و`},
      {w:`رَاحَ`,p:`راح`,tr:`rāḥa`,fr:`aller le soir, rentrer`,fm:`Verbe Form I — défectueux`,root:`ر و ح`},
      {w:`غُرُور`,p:`غرور`,tr:`ghurūr`,fr:`illusion, vanité, tromperie`,fm:`Masdar Form I`,root:`غ ر ر`},
      {w:`تَقْوَى`,p:`تقوى`,tr:`taqwā`,fr:`piété, crainte de Dieu`,fm:`Masdar Form I — défectueux`,root:`و ق ي`},
    ],
    grammar:{
      concept:`الشِّعْرُ الْفَلْسَفِيُّ — La poésie philosophique et ses figures`,
      excerptW:`غَدَوْنَا وَرُحْنَا فِي غُرُورٍ وَبَاطِلٍ · وَنَامَ كَثِيرٌ وَانْتَبَهَ الأَقَلُّونَ`,
      excerptP:`غدونا ورحنا في غرور وباطل · ونام كثير وانتبه الأقلون`,
      exp:`La poésie philosophique (الشعر الفلسفي التأملي) d'Al-Maarri use de trois registres simultanés : <strong>الصورة الطبيعية</strong> (غَدَوْنَا وَرُحْنَا = jour et nuit), <strong>الدلالة الرمزية</strong> (الغرور والباطل = illusion humaine), <strong>التشاؤم الفلسفي</strong> (نام كثير = l'ignorance est la norme).`,
      gtblHeaders:[`Figure`,`Exemple`,`Lecture littérale`,`Lecture philosophique`],
      table:[
        {v:`تعارض زمني`,f:`غَدَوْنَا وَرُحْنَا`,m:`aller le matin / rentrer le soir`,fr:`La vie entière = passage vain`},
        {v:`طباق ضمني`,f:`نَامَ كَثِيرٌ / انْتَبَهَ الأَقَلُّونَ`,m:`les uns dorment / les autres s'éveillent`,fr:`L'ignorance majoritaire ≠ l'éveil rare`},
        {v:`قلة مقابل كثرة`,f:`كَثِيرٌ ↔ الأَقَلُّونَ`,m:`quantitatif`,fr:`La vérité est le domaine des rares`},
        {v:`تورية`,f:`نَامَ / انْتَبَهَ`,m:`sommeil physique`,fr:`Ignorance / conscience intellectuelle`},
        {v:`إيجاز`,f:`بيتان يحملان فلسفة`,m:`4 mots = toute une vision`,fr:`Concentration maximale de sens`},
        {v:`سخرية مرة`,f:`غُرُورٌ وَبَاطِلٌ`,m:`jugement de valeur négatif`,fr:`Pessimisme radical — tout est vain`},
      ],
      note:`L'ambivalence d'Al-Maarri : ses poèmes semblent nier et douter, mais sa vie (végétarisme, ascétisme, piété) contredit ce pessimisme. Cette tension entre le dire et le faire est elle-même philosophique — il enseigne par l'acte ce que le poème nie.`,
    },
  };

  /* ─── T7 — شِعْرُ الأَنْدَلُسِ ───────────────── */
  var T7 = {
    id:`c2-7`, level:`C2`,
    titleW:`شِعْرُ الأَنْدَلُسِ`, titleP:`شعر الأندلس`,
    titleFr:`La poésie d'Andalousie`,
    sentences:[
      [{w:`أَنْجَبَتِ الأَنْدَلُسُ شُعَرَاءَ بَلَغُوا فِي أَشْعَارِهِمْ ذُرْوَةً مِنَ الْجَمَالِ`,t:`l'Andalousie a engendré des poètes qui ont atteint dans leurs poèmes un sommet de beauté`},{w:`يَخْتَلِطُ فِيهَا الْحَنِينُ وَالْبَهْجَةُ وَالْمَوْتُ`,t:`où se mêlent nostalgie, joie et mort`}],
      [{w:`وَلِسَانُ الدِّينِ ابْنُ الْخَطِيبِ`,t:`et Lisan al-Din ibn al-Khatib`},{w:`مِنْ أَرْوَعِ مَنْ نَظَمَ فِيهَا`,t:`est parmi les plus beaux versificateurs du genre`},{w:`وَيُمَثِّلُ مَوْشَّحُهُ جَادِكَ الْغَيْثُ`,t:`et sa muwashshah "Jādaka l-Ghayth" représente`},{w:`مِنْ أَبْلَغِ مَا كُتِبَ فِي الرِّثَاءِ الْأَنْدَلُسِيِّ`,t:`l'une des pièces les plus éloquentes de l'élégie andalouse`}],
      [{w:`جَادَكَ الْغَيْثُ إِذَا الْغَيْثُ هَمَى`,t:`"Que la pluie t'abreuve quand la pluie se répand (vers d'ouverture)"`},{w:`يَا زَمَانَ الْوَصْلِ بِالأَنْدَلُسِ`,t:`ô temps de l'union en Andalousie`}],
      [{w:`وَابْنُ زَيْدُونَ شَاعِرُ الْحُبِّ الأَنْدَلُسِيُّ بِامْتِيَازٍ`,t:`et Ibn Zaydun est le poète de l'amour andalou par excellence`},{w:`نَسَجَ مِنْ لَهْفَةِ الشَّوْقِ إِلَى وَلَّادَةَ بِنْتِ الْمُسْتَكْفِي`,t:`il a tissé de l'ardeur du désir pour Wallada bint al-Mustakfi`},{w:`قَصَائِدَ هِيَ مِنْ أَرَقِّ مَا أَنْتَجَهُ الشِّعْرُ الْعَرَبِيُّ وَأَرْوَعِهِ`,t:`des poèmes parmi les plus tendres et beaux de la poésie arabe`}],
      [{w:`قَالَ ابْنُ زَيْدُونَ مُتَشَوِّقًا`,t:`Ibn Zaydun dit, nostalgique`},{w:`أَضْحَى التَّنَائِي بَدِيلًا مِنْ تَدَانِينَا`,t:`"La séparation est devenue un substitut de notre rapprochement`},{w:`وَنَابَ عَنْ طِيبِ لُقْيَانَا تَجَافِينَا`,t:`et notre distancement a remplacé la douceur de nos rencontres"`}],
      [{w:`وَيَتَمَيَّزُ شِعْرُ الأَنْدَلُسِ`,t:`et la poésie d'Andalousie se distingue`},{w:`بِجَمْعِهِ بَيْنَ الرُّوحِ الْعَرَبِيَّةِ الأَصِيلَةِ وَالْحِسِّ الأَنْدَلُسِيِّ الْخَاصِّ`,t:`par sa réunion de l'esprit arabe authentique et de la sensibilité andalouse particulière`},{w:`الَّذِي فِيهِ شَيْءٌ مِنَ الرِّقَّةِ الأُورُوبِّيَّةِ`,t:`qui contient quelque chose de la sensibilité européenne`}],
    ],
    vocabulary:[
      {w:`أَنْجَبَ`,p:`أنجب`,tr:`anjaba`,fr:`enfanter, produire, engendrer`,fm:`Verbe Form IV`,root:`ن ج ب`},
      {w:`ذُرْوَة`,p:`ذروة`,tr:`dhurwa`,fr:`sommet, apogée, point culminant`,fm:`Nom — schème فُعْلَة`,root:`ذ ر و`},
      {w:`حَنِين`,p:`حنين`,tr:`ḥanīn`,fr:`nostalgie, désir ardent du retour`,fm:`Masdar Form I`,root:`ح ن ن`},
      {w:`مَوْشَّح`,p:`موشح`,tr:`muwashshah`,fr:`Muwashshah — genre poétique andalou`,fm:`Participe passif Form II`,root:`و ش ح`},
      {w:`رِثَاء`,p:`رثاء`,tr:`rithāʾ`,fr:`élégie, poème funèbre`,fm:`Masdar Form I`,root:`ر ث و`},
      {w:`اِبْن زَيْدُون`,p:`ابن زيدون`,tr:`ibn Zaydūn`,fr:`Ibn Zaydun (1003-1070) — poète andalou de l'amour`,fm:`Nom propre`,root:`—`},
      {w:`وَلَّادَة`,p:`ولادة`,tr:`Wallāda`,fr:`Wallada bint al-Mustakfi — poétesse et princesse`,fm:`Nom propre`,root:`و ل د`},
      {w:`لَهْفَة`,p:`لهفة`,tr:`lahfa`,fr:`ardeur, impatience, désir brûlant`,fm:`Nom — schème فَعْلَة`,root:`ل ه ف`},
      {w:`تَنَائِي`,p:`تنائي`,tr:`tanāʾī`,fr:`séparation, éloignement (masdar Form VI)`,fm:`Masdar Form VI — défectueux`,root:`ن أ ي`},
      {w:`تَدَانٍ`,p:`تدانٍ`,tr:`tadānin`,fr:`rapprochement, proximité`,fm:`Masdar Form VI — défectueux`,root:`د ن و`},
      {w:`تَجَافٍ`,p:`تجافٍ`,tr:`tajāfin`,fr:`distancement, éloignement mutuel`,fm:`Masdar Form VI — défectueux`,root:`ج ف و`},
      {w:`لُقْيَا`,p:`لقيا`,tr:`luqyā`,fr:`rencontre, retrouvailles`,fm:`Masdar — défectueux`,root:`ل ق ي`},
    ],
    grammar:{
      concept:`الْمَوْشَّحُ وَالزَّجَلُ — Le muwashshah et le zajal (genres poétiques andalous)`,
      excerptW:`جَادَكَ الْغَيْثُ إِذَا الْغَيْثُ هَمَى · يَا زَمَانَ الْوَصْلِ بِالأَنْدَلُسِ`,
      excerptP:`جادك الغيث إذا الغيث هما · يا زمان الوصل بالأندلس`,
      exp:`Le <strong>مُوَشَّح</strong> est une forme poétique inventée en Andalousie, à structure strophique (≠ قصيدة monolithique). Ses parties : <strong>المطلع</strong> (ouverture) → <strong>الأدوار</strong> (strophes) → <strong>الخرجة</strong> (finale en dialecte). Le <strong>زجل</strong> est sa variante en dialecte.`,
      gtblHeaders:[`Terme`,`Définition`,`Rôle dans le مُوَشَّح`,`Exemple`],
      table:[
        {v:`المطلع`,f:`vers d'ouverture`,m:`établit la rime principale (aa)`,fr:`جَادَكَ الْغَيْثُ إِذَا الْغَيْثُ هَمَى`},
        {v:`الدور`,f:`strophe centrale`,m:`rime différente (bbb)`,fr:`développement thématique`},
        {v:`القفل`,f:`reprise du mطلع`,m:`retour à la rime principale (aa)`,fr:`cohésion musicale`},
        {v:`الخرجة`,f:`finale en dialecte ou hébreu/roman`,m:`le plus souvent en dialecte`,fr:`chute dramatique — voix populaire`},
        {v:`الزجل`,f:`muwashshah en dialecte arabe`,m:`Ibn Quzman — pionnier du genre`,fr:`Lien entre haute culture et peuple`},
        {v:`الأغصان`,f:`hémistiches courts`,m:`rythme rapide, lyrique`,fr:`Musicalité accentuée`},
      ],
      note:`Le مُوَشَّح d'Andalousie a influencé la poésie provençale médiévale européenne — une des formes d'influence culturelle islamique sur l'Occident. La خرجة en hébreu ou roman témoigne du cosmopolitisme andalou.`,
    },
  };

  /* ─── T8 — الْمُعَلَّقَاتُ وَالشِّعْرُ الْجَاهِلِيُّ */
  var T8 = {
    id:`c2-8`, level:`C2`,
    titleW:`الْمُعَلَّقَاتُ وَالشِّعْرُ الْجَاهِلِيُّ`, titleP:`المعلقات والشعر الجاهلي`,
    titleFr:`Les Muallaqat et la poésie préislamique`,
    sentences:[
      [{w:`الْمُعَلَّقَاتُ`,t:`les Muallaqāt`},{w:`سَبْعُ قَصَائِدَ جَاهِلِيَّةٍ ذَهَبِيَّةٍ`,t:`sont sept odes préislamiques d'or`},{w:`تُمَثِّلُ ذِرْوَةَ الإِبْدَاعِ الشِّعْرِيِّ الْعَرَبِيِّ الْقَدِيمِ`,t:`représentant le sommet de la création poétique arabe ancienne`}],
      [{w:`وَقَدِ اخْتَارَهَا الرَّاوِيَةُ الْمُفَضَّلُ الضَّبِّيُّ`,t:`et le rapporteur al-Mufaddal al-Dabbi les a sélectionnées`},{w:`أَوِ ابْنُ الأَنْبَارِيِّ عَلَى رَأْيٍ آخَرَ`,t:`ou Ibn al-Anbari selon une autre opinion`},{w:`مِنْ بَيْنِ دَوَاوِينِ الشُّعَرَاءِ الْكُبَارِ`,t:`parmi les diwans des grands poètes`}],
      [{w:`وَقَدِ افْتَتَحَ امْرُؤُ الْقَيْسِ مُعَلَّقَتَهُ بِمَطْلَعٍ شَهِيرٍ`,t:`et Imru' al-Qays a ouvert sa muallaqah par un incipit célèbre`},{w:`قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ`,t:`"Arrêtez-vous, pleurons au souvenir d'une bien-aimée et d'un campement`},{w:`بِسِقْطِ اللِّوَى بَيْنَ الدَّخُولِ فَحَوْمَلِ`,t:`au pied de la dune entre al-Dakhoul et Hawmal"`}],
      [{w:`وَيُلَاحَظُ فِي هَذَا الْمَطْلَعِ ثَلَاثُ خُصَائِصَ بَلَاغِيَّةٍ رَئِيسِيَّةٍ`,t:`et on observe dans cet incipit trois caractéristiques rhétoriques principales`},{w:`الْأُولَى الاسْتِغَاثَةُ بِالرَّفِيقَيْنِ بِصِيغَةِ الدُّعَاءِ`,t:`la première : l'appel aux deux compagnons sous forme d'invocation`},{w:`وَالثَّانِيَةُ تَجَلِّي الطَّلَلِ رَمْزَ الذَّاكِرَةِ وَالْهُوِيَّةِ`,t:`la deuxième : l'apparition des ruines comme symbole de mémoire et d'identité`},{w:`وَالثَّالِثَةُ دِقَّةُ التَّوْطِينِ الْجُغْرَافِيِّ الَّتِي تُعَمِّقُ الأَثَرَ الْعَاطِفِيَّ`,t:`la troisième : la précision de la localisation géographique qui approfondit l'impact émotionnel`}],
      [{w:`وَلَبِيدُ بْنُ رَبِيعَةَ صَاحِبُ الْمُعَلَّقَةِ الَّتِي اشْتَهَرَتْ بِالصِّدْقِ وَالنُّبُوءَةِ`,t:`et Labid ibn Rabi'a, auteur de la muallaqah connue pour sa sincérité et sa sagesse prophétique`},{w:`وَالَّتِي قَالَ عَنْهَا عُمَرُ بْنُ الْخَطَّابِ أَنَّهَا أَصْدَقُ كَلِمَةٍ قَالَهَا شَاعِرٌ`,t:`dont Omar ibn al-Khattab dit qu'elle contient le vers le plus sincère jamais dit par un poète`}],
    ],
    vocabulary:[
      {w:`مُعَلَّقَة`,p:`معلقة`,tr:`muʿallaqa`,fr:`ode suspendue, muallaqah (pl. مُعَلَّقَات)`,fm:`Participe passif Form II`,root:`ع ل ق`},
      {w:`رَاوِيَة`,p:`راوية`,tr:`rāwiya`,fr:`transmetteur de poésie, rapporteur (pl. رُوَاة)`,fm:`Participe actif Form I — fém. (valeur intensive)`,root:`ر و ي`},
      {w:`دِيوَان`,p:`ديوان`,tr:`dīwān`,fr:`recueil de poèmes (pl. دَوَاوِين)`,fm:`Nom (emprunt persan)`,root:`—`},
      {w:`سِقْط`,p:`سقط`,tr:`siqṭ`,fr:`pied, bas d'une dune`,fm:`Nom — schème فِعْل`,root:`س ق ط`},
      {w:`لِوًى`,p:`لوى`,tr:`liwā`,fr:`dune, méandre sableux`,fm:`Nom — défectueux`,root:`ل و ي`},
      {w:`اسْتِغَاثَة`,p:`استغاثة`,tr:`istighátha`,fr:`appel au secours, invocation`,fm:`Masdar Form X`,root:`غ و ث`},
      {w:`طَلَل`,p:`طلل`,tr:`ṭalal`,fr:`ruines d'un campement nomade (pl. أَطْلَال)`,fm:`Nom — schème فَعَل`,root:`ط ل ل`},
      {w:`تَوْطِين`,p:`توطين`,tr:`tawṭīn`,fr:`localisation, implantation, ancrage`,fm:`Masdar Form II`,root:`و ط ن`},
      {w:`لَبِيد`,p:`لبيد`,tr:`Labīd`,fr:`Labid ibn Rabi'a (mort vers 661) — poète du Koran`,fm:`Nom propre`,root:`ل ب د`},
      {w:`صِدْق`,p:`صدق`,tr:`ṣidq`,fr:`sincérité, véracité`,fm:`Masdar Form I`,root:`ص د ق`},
      {w:`نُبُوءَة`,p:`نبوءة`,tr:`nubūʾa`,fr:`prophétie, sagesse visionnaire`,fm:`Masdar Form I`,root:`ن ب أ`},
    ],
    grammar:{
      concept:`بِنَاءُ الْقَصِيدَةِ الْجَاهِلِيَّةِ — Architecture de la qasida préislamique`,
      excerptW:`قِفَا نَبْكِ مِنْ ذِكْرَى حَبِيبٍ وَمَنْزِلِ — الطلل ثم الرحلة ثم الموضوع الرئيسي`,
      excerptP:`قفا نبك من ذكرى حبيب ومنزل — الطلل ثم الرحلة ثم الموضوع الرئيسي`,
      exp:`La قصيدة جاهلية suit une structure tripartite canonique : <strong>① الطلل</strong> (arrêt devant les ruines — nostalgie) → <strong>② الرحلة</strong> (traversée du désert — épreuves) → <strong>③ الموضوع الرئيسي</strong> (mدح, هجاء, غزل, فخر...). Cette structure est le cadre de toute la poésie arabe classique.`,
      gtblHeaders:[`Partie`,`Nom arabe`,`Fonction`,`Longueur moyenne`],
      table:[
        {v:`① Ruines`,f:`الطلل / النسيب`,m:`ancrage émotionnel — nostalgie — mémoire`,fr:`10-25% de la qasida`},
        {v:`② Voyage/monture`,f:`الرحيل / وصف الناقة`,m:`transition — épreuves — force`,fr:`10-20%`},
        {v:`③ Thème principal`,f:`الموضوع الرئيسي`,m:`مدح · هجاء · فخر · غزل · رثاء`,fr:`60-80% — cœur du poème`},
        {v:`مدح`,f:`Panégyrique`,m:`éloge d'un mécène ou héros`,fr:`Imru' al-Qays / Al-Mutanabbi`},
        {v:`هجاء`,f:`Satire`,m:`humiliation d'un ennemi`,fr:`Jarir vs Al-Farazdaq`},
        {v:`رثاء`,f:`Élégie`,m:`pleure d'un mort — consolation`,fr:`Al-Khansaa pour son frère Sakhr`},
      ],
      note:`La tripartition de la قصيدة est un <strong>héritage culturel</strong> : le poète nomade commence toujours par s'arrêter devant les ruines du campement (atlāl) pour pleurer son passé avant de voyager vers son but. C'est une métaphore de la condition humaine.`,
    },
  };

  /* ─── T9 — طَوْقُ الْحَمَامَةِ لِابْنِ حَزْمٍ ──── */
  var T9 = {
    id:`c2-9`, level:`C2`,
    titleW:`طَوْقُ الْحَمَامَةِ لِابْنِ حَزْمٍ`, titleP:`طوق الحمامة لابن حزم`,
    titleFr:`Le Collier de la Colombe d'Ibn Hazm`,
    sentences:[
      [{w:`طَوْقُ الْحَمَامَةِ فِي الأُلْفَةِ وَالأُلَّافِ`,t:`Le Collier de la Colombe sur l'attachement et les attachés`},{w:`رِسَالَةٌ أَدَبِيَّةٌ فَرِيدَةٌ`,t:`est un traité littéraire unique`},{w:`كَتَبَهَا الْعَالِمُ الأَنْدَلُسِيُّ أَبُو مُحَمَّدٍ ابْنُ حَزْمٍ`,t:`qu'a écrit le savant andalou Abu Muhammad ibn Hazm`},{w:`فِي الْقَرْنِ الْخَامِسِ الْهِجْرِيِّ`,t:`au 5ème siècle de l'Hégire`}],
      [{w:`يَتَنَاوَلُ فِيهَا مَوْضُوعَ الْحُبِّ`,t:`dans lequel il traite du sujet de l'amour`},{w:`بِنَظَرَةٍ نَفْسِيَّةٍ وَأَخْلَاقِيَّةٍ وَأَدَبِيَّةٍ مُرَكَّبَةٍ`,t:`avec un regard psychologique, éthique et littéraire complexe`},{w:`جَامِعًا بَيْنَ التَّحْلِيلِ الْعَقْلِيِّ وَاللَّمَسَةِ الشِّعْرِيَّةِ`,t:`réunissant analyse rationnelle et touche poétique`}],
      [{w:`وَيَرَى ابْنُ حَزْمٍ أَنَّ الْحُبَّ الْحَقِيقِيَّ`,t:`et ibn Hazm voit que le vrai amour`},{w:`لَيْسَ مُجَرَّدَ نَزْوَةٍ أَوْ شَهْوَةٍ`,t:`n'est pas une simple lubie ou désir charnel`},{w:`بَلْ هُوَ اتِّحَادُ الأَرْوَاحِ وَتَوَافُقُ الطِّبَاعِ`,t:`mais union des âmes et accord des natures`}],
      [{w:`وَيَقُولُ فِي تَعْرِيفِ الْحُبِّ`,t:`et il dit dans sa définition de l'amour`},{w:`الْحُبُّ اتِّصَالٌ بَيْنَ أَجْزَاءِ النُّفُوسِ الْمُتَقَطِّعَةِ فِي هَذَا الْخَلْقِ`,t:`"l'amour est une connexion entre les parties des âmes éparses dans cette création`},{w:`وَمُشَارَكَةٌ لِرُوحٍ تَبْحَثُ عَنْ نَظِيرِهَا`,t:`et une participation d'une âme qui cherche son semblable"`}],
      [{w:`وَمَا يُمَيِّزُ هَذَا الْكِتَابَ`,t:`et ce qui distingue ce livre`},{w:`أَنَّهُ يَسْتَشْهِدُ بِتَجَارِبِ شَخْصِيَّةٍ حَقِيقِيَّةٍ`,t:`c'est qu'il cite des expériences personnelles réelles`},{w:`وَأَشْعَارٍ جَمَعَهَا مِنَ الْبِيئَةِ الأَنْدَلُسِيَّةِ الزَّاخِرَةِ بِالأَدَبِ`,t:`et des poèmes recueillis dans l'environnement andalou débordant de littérature`}],
    ],
    vocabulary:[
      {w:`طَوْق`,p:`طوق`,tr:`ṭawq`,fr:`collier, carcan, tour de cou`,fm:`Nom — schème فَعْل`,root:`ط و ق`},
      {w:`حَمَامَة`,p:`حمامة`,tr:`ḥamāma`,fr:`colombe, pigeon (pl. حَمَام)`,fm:`Nom — schème فَعَالَة`,root:`ح م م`},
      {w:`أُلْفَة`,p:`ألفة`,tr:`ulfa`,fr:`attachement, affinité, familiarité`,fm:`Masdar Form I`,root:`أ ل ف`},
      {w:`اِبْن حَزْم`,p:`ابن حزم`,tr:`ibn Ḥazm`,fr:`Ibn Hazm (994-1064) — savant et littérateur andalou`,fm:`Nom propre`,root:`ح ز م`},
      {w:`نَزْوَة`,p:`نزوة`,tr:`nazwa`,fr:`caprice, lubie, impulsion passagère`,fm:`Nom — schème فَعْلَة`,root:`ن ز و`},
      {w:`شَهْوَة`,p:`شهوة`,tr:`shahwa`,fr:`désir charnel, appétit sensuel`,fm:`Nom — schème فَعْلَة`,root:`ش ه و`},
      {w:`اتِّحَاد`,p:`اتحاد`,tr:`ittiḥād`,fr:`union, unification, fusion`,fm:`Masdar Form VIII`,root:`و ح د`},
      {w:`تَوَافُق`,p:`توافق`,tr:`tawāfuq`,fr:`accord, harmonie, concordance`,fm:`Masdar Form VI`,root:`و ف ق`},
      {w:`طِبَاع`,p:`طباع`,tr:`ṭibāʿ`,fr:`natures, caractères innés (pl. de طَبْع)`,fm:`Pl. brisé`,root:`ط ب ع`},
      {w:`مُتَقَطِّع`,p:`متقطع`,tr:`mutaqaṭṭiʿ`,fr:`épars, fragmenté, dispersé`,fm:`Participe actif Form V`,root:`ق ط ع`},
      {w:`مُشَارَكَة`,p:`مشاركة`,tr:`mushāraka`,fr:`partage, participation, communion`,fm:`Masdar Form III`,root:`ش ر ك`},
      {w:`نَظِير`,p:`نظير`,tr:`naẓīr`,fr:`semblable, équivalent, pendant`,fm:`Nom — schème فَعِيل`,root:`ن ظ ر`},
    ],
    grammar:{
      concept:`النَّثْرُ الْوِجْدَانِيُّ الرَّفِيعُ — La prose émotionnelle élaborée`,
      excerptW:`الْحُبُّ اتِّصَالٌ بَيْنَ أَجْزَاءِ النُّفُوسِ الْمُتَقَطِّعَةِ · مُشَارَكَةٌ لِرُوحٍ تَبْحَثُ عَنْ نَظِيرِهَا`,
      excerptP:`الحب اتصال بين أجزاء النفوس المتقطعة · مشاركة لروح تبحث عن نظيرها`,
      exp:`La prose émotionnelle (النثر الوجداني) allie <strong>précision intellectuelle</strong> et <strong>sensibilité poétique</strong>. Ibn Hazm définit l'amour en philosophe mais l'exprime en poète. Marqueurs stylistiques : إضافة philosophique (اتِّصَال بَيْنَ أَجْزَاءِ), relative descriptive profonde (رُوحٍ تَبْحَثُ عَنْ نَظِيرِهَا).`,
      gtblHeaders:[`Registre`,`Outil`,`Exemple`,`Effet`],
      table:[
        {v:`définition philosophique`,f:`X = Y (جملة اسمية)`,m:`الْحُبُّ اتِّصَالٌ`,fr:`précision conceptuelle`},
        {v:`idāfa complexe`,f:`masdar + بين + pl.`,m:`اتِّصَالٌ بَيْنَ أَجْزَاءِ النُّفُوسِ`,fr:`abstraction philosophique`},
        {v:`relative décrivant l'âme`,f:`روح + الَّتِي/تَبْحَثُ`,m:`رُوحٍ تَبْحَثُ عَنْ نَظِيرِهَا`,fr:`personnification de l'âme`},
        {v:`contraste éthique`,f:`لَيْسَ A بَلْ B`,m:`لَيْسَ نَزْوَةً بَلْ اتِّحَادُ`,fr:`élévation morale`},
        {v:`témoignage personnel`,f:`je + expérience + vers`,m:`وَيَسْتَشْهِدُ بِتَجَارِبِ شَخْصِيَّةٍ`,fr:`authenticité et crédibilité`},
        {v:`accumulation synonymique`,f:`A وَ B وَ C`,m:`نَفْسِيَّةٌ وَأَخْلَاقِيَّةٌ وَأَدَبِيَّةٌ`,fr:`richesse des perspectives`},
      ],
      note:`طوق الحمامة est un texte essentiel pour comprendre la <strong>conception islamique de l'amour</strong> : ni ascétique (rejet du corps), ni libertine (rejet de l'âme), mais synthétique — union des âmes dans le respect éthique.`,
    },
  };

  /* ─── T10 — سِيبَوَيْهِ وَالنَّحْوُ الْعَرَبِيُّ ─ */
  var T10 = {
    id:`c2-10`, level:`C2`,
    titleW:`سِيبَوَيْهِ وَالنَّحْوُ الْعَرَبِيُّ`, titleP:`سيبويه والنحو العربي`,
    titleFr:`Sibawayhi et la grammaire arabe`,
    sentences:[
      [{w:`يُعَدُّ الْكِتَابُ`,t:`le Kitāb (Le Livre) est considéré`},{w:`الَّذِي أَلَّفَهُ سِيبَوَيْهِ`,t:`que Sibawayhi a composé`},{w:`فِي الْقَرْنِ الثَّانِي الْهِجْرِيِّ`,t:`au 2ème siècle de l'Hégire`},{w:`التَّأْسِيسَ الْأَكْبَرَ لِعِلْمِ النَّحْوِ الْعَرَبِيِّ`,t:`la fondation majeure de la grammaire arabe`}],
      [{w:`وَكَانَ سِيبَوَيْهِ فَارِسِيَّ الْأَصْلِ`,t:`et Sibawayhi était d'origine persane`},{w:`أَتْقَنَ الْعَرَبِيَّةَ حَتَّى صَارَ أُسْتَاذَهَا الأَوَّلَ`,t:`et a maîtrisé l'arabe au point de devenir son premier maître`},{w:`مُلَقَّبًا بِإِمَامِ النَّحْوِيِّينَ`,t:`surnommé l'imam des grammairiens`}],
      [{w:`وَيَقُولُ فِي مُسْتَهَلِّ كِتَابِهِ`,t:`et il dit à l'ouverture de son Livre`},{w:`هَذَا بَابُ عِلْمِ مَا الْكَلِمُ مِنَ الْعَرَبِيَّةِ`,t:`"Voici le chapitre sur la science de ce que sont les mots en arabe`},{w:`فَالْكَلِمُ اسْمٌ وَفِعْلٌ وَحَرْفٌ جَاءَ لِمَعْنًى`,t:`les mots sont un nom, un verbe et une particule venue pour un sens"`}],
      [{w:`هَذَا التَّقْسِيمُ الثُّلَاثِيُّ الَّذِي صَاغَهُ سِيبَوَيْهِ`,t:`cette tripartition que Sibawayhi a formulée`},{w:`لَا يَزَالُ الأَسَاسَ الَّذِي يَقُومُ عَلَيْهِ النَّحْوُ الْعَرَبِيُّ`,t:`demeure le fondement sur lequel repose la grammaire arabe`},{w:`فِي كُلِّ الْمَدَارِسِ النَّحْوِيَّةِ وَالتَّعْلِيمِيَّةِ`,t:`dans toutes les écoles grammaticales et pédagogiques`}],
      [{w:`وَاشْتُهِرَ كِتَابُهُ بِالاسْتِشْهَادِ الْوَافِرِ`,t:`et son Livre est célèbre pour l'abondance des citations`},{w:`بِالْقُرْآنِ وَالْحَدِيثِ وَالشِّعْرِ الْجَاهِلِيِّ وَالأَقْوَالِ الْمَأْثُورَةِ`,t:`du Coran, du hadith, de la poésie préislamique et des dits mémorables`},{w:`لِإِثْبَاتِ كُلِّ قَاعِدَةٍ نَحْوِيَّةٍ`,t:`pour prouver chaque règle grammaticale`}],
    ],
    vocabulary:[
      {w:`سِيبَوَيْهِ`,p:`سيبويه`,tr:`Sībawayhi`,fr:`Sibawayhi (v. 760-796) — fondateur de la grammaire arabe`,fm:`Nom propre (persan = "pomme de terre")`,root:`—`},
      {w:`مُلَقَّب`,p:`ملقب`,tr:`mulaqqab`,fr:`surnommé, portant un titre (لَقَب)`,fm:`Participe passif Form II`,root:`ل ق ب`},
      {w:`إِمَام النَّحْوِيِّين`,p:`إمام النحويين`,tr:`imām an-naḥwiyyīn`,fr:`l'imam des grammairiens (titre de Sibawayhi)`,fm:`Idāfa honorifique`,root:`أ م م`},
      {w:`مُسْتَهَلّ`,p:`مستهل`,tr:`mustahall`,fr:`ouverture, incipit, début d'une œuvre`,fm:`Participe passif Form X`,root:`ه ل ل`},
      {w:`الْكَلِم`,p:`الكلم`,tr:`al-kalim`,fr:`les mots (collectif — ancienne forme)`,fm:`Nom collectif (vieille forme)`,root:`ك ل م`},
      {w:`اسْم`,p:`اسم`,tr:`ism`,fr:`nom (catégorie grammaticale)`,fm:`Nom — hamzé prosthétique`,root:`س م و`},
      {w:`فِعْل`,p:`فعل`,tr:`fiʿl`,fr:`verbe (catégorie grammaticale)`,fm:`Masdar Form I`,root:`ف ع ل`},
      {w:`حَرْف`,p:`حرف`,tr:`ḥarf`,fr:`particule (3ème catégorie grammaticale)`,fm:`Nom — schème فَعْل`,root:`ح ر ف`},
      {w:`صَاغَ`,p:`صاغ`,tr:`ṣāgha`,fr:`formuler, modeler, créer une formule`,fm:`Verbe Form I — défectueux`,root:`ص و غ`},
      {w:`مَأْثُور`,p:`مأثور`,tr:`maʾthūr`,fr:`transmis, mémorable, hérité`,fm:`Participe passif Form I`,root:`أ ث ر`},
      {w:`وَافِر`,p:`وافر`,tr:`wāfir`,fr:`abondant, généreux, copieux`,fm:`Participe actif Form I`,root:`و ف ر`},
    ],
    grammar:{
      concept:`أُصُولُ النَّحْوِ الْعَرَبِيِّ — Les fondements de la grammaire arabe`,
      excerptW:`هَذَا بَابُ عِلْمِ مَا الْكَلِمُ مِنَ الْعَرَبِيَّةِ · فَالْكَلِمُ اسْمٌ وَفِعْلٌ وَحَرْفٌ جَاءَ لِمَعْنًى`,
      excerptP:`هذا باب علم ما الكلم من العربية · فالكلم اسم وفعل وحرف جاء لمعنى`,
      exp:`La tripartition de Sibawayhi (اسم · فعل · حرف) est le fondement de toute la grammaire arabe. Elle définit les mots par leur <strong>fonction sémantique et syntaxique</strong>, non par leur forme. Le <strong>حرف</strong> est la particule "venue pour un sens" — il ne désigne pas un objet ni une action mais une relation.`,
      gtblHeaders:[`Catégorie`,`Définition`,`Marques`,`Exemples`],
      table:[
        {v:`الاسم (nom)`,f:`désigne un être, objet, concept`,m:`التنوين · الجر · أل · الإسناد إليه`,fr:`كِتَابٌ · مُعَلِّمٌ · عِلْمٌ`},
        {v:`الفعل (verbe)`,f:`désigne une action avec un temps`,m:`تاء الفاعل · نون التوكيد · لم`,fr:`كَتَبَ · يَكْتُبُ · اكْتُبْ`},
        {v:`الحرف (particule)`,f:`venu pour un sens — relation`,m:`لا يقبل علامات الاسم ولا الفعل`,fr:`مِنْ · إِلَى · أَنَّ · لَمْ · لَكِنْ`},
        {v:`الحرف الجار`,f:`prép. + génitif`,m:`يجر ما بعده`,fr:`فِي · عَلَى · عَنْ · إِلَى · بِـ`},
        {v:`الحرف الناصب`,f:`مضارع manṣūb`,m:`ينصب المضارع`,fr:`أَنْ · لَنْ · كَيْ · حَتَّى`},
        {v:`الحرف الجازم`,f:`مضارع majzūm`,m:`يجزم المضارع`,fr:`لَمْ · لَمَّا · لَا (ناهية)`},
      ],
      note:`La grande contribution de Sibawayhi est d'avoir <strong>ordonné le matériau linguistique</strong> — analogy (القياس) vs. exception (السماع). Il a établi que la règle vient de l'usage attesté (كلام العرب), non de la logique abstraite.`,
    },
  };

  /* ─── T11 — الإِمَامُ الشَّافِعِيُّ وَالْفِقْهُ ─── */
  var T11 = {
    id:`c2-11`, level:`C2`,
    titleW:`الإِمَامُ الشَّافِعِيُّ وَالرِّسَالَةُ`, titleP:`الإمام الشافعي والرسالة`,
    titleFr:`L'Imam Al-Shafi'i et la Risāla`,
    sentences:[
      [{w:`الإِمَامُ مُحَمَّدُ بْنُ إِدْرِيسَ الشَّافِعِيُّ`,t:`l'Imam Muhammad ibn Idris Al-Shafi'i`},{w:`وَاضِعُ أَوَّلِ نَظَرِيَّةٍ أُصُولِيَّةٍ مُنْتَظِمَةٍ فِي الإِسْلَامِ`,t:`est le fondateur de la première théorie juridico-méthodologique organisée en islam`},{w:`تَمَثَّلَتْ فِي كِتَابِهِ الرِّسَالَةِ`,t:`qui s'est matérialisée dans son livre al-Risāla`}],
      [{w:`وَيَقُولُ فِي مُسْتَهَلِّ الرِّسَالَةِ`,t:`et il dit à l'ouverture de la Risāla`},{w:`الْحَمْدُ لِلَّهِ الَّذِي جَعَلَ الإِسْلَامَ نِعْمَتَهُ الْعُظْمَى`,t:`"Louange à Dieu qui a fait de l'islam Sa plus grande bénédiction`},{w:`وَبَيَّنَ لِعِبَادِهِ فَرَائِضَهُ بِكِتَابِهِ وَسُنَّةِ رَسُولِهِ`,t:`et a exposé à Ses serviteurs Ses obligations par Son Livre et la Sunna de Son Messager"`}],
      [{w:`وَالرِّسَالَةُ أَوَّلُ كِتَابٍ صُنِّفَ فِي أُصُولِ الْفِقْهِ`,t:`et la Risāla est le premier livre composé en Uṣūl al-fiqh`},{w:`حَدَّدَ فِيهِ الشَّافِعِيُّ مَصَادِرَ التَّشْرِيعِ`,t:`dans lequel Al-Shafi'i a déterminé les sources de la législation`},{w:`وَضَبَطَ مَنْهَجِيَّةَ الاسْتِنْبَاطِ الْفِقْهِيِّ`,t:`et a fixé la méthodologie de la déduction juridique`}],
      [{w:`وَبَيَّنَ أَنَّ السُّنَّةَ الصَّحِيحَةَ مُلْزِمَةٌ`,t:`et il a montré que la Sunna authentique est contraignante`},{w:`وَلَوْ كَانَتْ خَبَرَ آحَادٍ`,t:`même si elle est un hadith isolé (non-mutawatir)`},{w:`مَا دَامَتْ قَدْ صَحَّتْ رِوَايَتُهَا`,t:`du moment que sa transmission s'est avérée authentique`}],
      [{w:`وَقَدِ اسْتَطَاعَ الشَّافِعِيُّ`,t:`et Al-Shafi'i a réussi`},{w:`أَنْ يَجْمَعَ بَيْنَ عَقْلَانِيَّةِ الْمَدْرَسَةِ الْعِرَاقِيَّةِ وَنَقْلِيَّةِ الْمَدِينَةِ`,t:`à concilier le rationalisme de l'école irakienne et le traditionnisme de Médine`},{w:`مُؤَسِّسًا مَذْهَبًا وَسَطًا جَامِعًا`,t:`fondant un madhhab intermédiaire et intégrateur`}],
    ],
    vocabulary:[
      {w:`الشَّافِعِيّ`,p:`الشافعي`,tr:`ash-Shāfiʿī`,fr:`Al-Shafi'i (767-820) — fondateur du madhhab shaféite`,fm:`Nom propre`,root:`ش ف ع`},
      {w:`الرِّسَالَة`,p:`الرسالة`,tr:`ar-Risāla`,fr:`La Risāla — premier traité d'Uṣūl al-fiqh`,fm:`Titre (nom)`,root:`ر س ل`},
      {w:`أُصُول الْفِقْه`,p:`أصول الفقه`,tr:`uṣūl al-fiqh`,fr:`fondements du droit islamique`,fm:`Idāfa (titre de discipline)`,root:`أ ص ل`},
      {w:`صَنَّفَ`,p:`صنف`,tr:`ṣannafa`,fr:`composer, rédiger, classifier`,fm:`Verbe Form II`,root:`ص ن ف`},
      {w:`مَنْهَجِيَّة`,p:`منهجية`,tr:`manhajiyya`,fr:`méthodologie, méthode systématique`,fm:`Nisba de مَنْهَج`,root:`ن ه ج`},
      {w:`مُلْزِم`,p:`ملزم`,tr:`mulzim`,fr:`contraignant, obligatoire, impératif`,fm:`Participe actif Form IV`,root:`ل ز م`},
      {w:`خَبَر آحَاد`,p:`خبر آحاد`,tr:`khabar āḥād`,fr:`hadith isolé (transmis par 1-2 voies, non-mutawatir)`,fm:`Idāfa`,root:`خ ب ر`},
      {w:`صَحَّتْ رِوَايَتُهَا`,p:`صحت روايتها`,tr:`ṣaḥḥat riwāyatuhā`,fr:`dont la transmission s'est avérée authentique`,fm:`Formule juridique`,root:`ص ح ح`},
      {w:`عَقْلَانِيَّة`,p:`عقلانية`,tr:`ʿaqlāniyya`,fr:`rationalisme`,fm:`Nisba de عَقْل + ـَانِيَّة`,root:`ع ق ل`},
      {w:`نَقْلِيَّة`,p:`نقلية`,tr:`naqliyya`,fr:`traditionnisme (basé sur la transmission)`,fm:`Nisba de نَقْل`,root:`ن ق ل`},
      {w:`وَسَط`,p:`وسط`,tr:`wasaṭ`,fr:`intermédiaire, milieu juste (voie médiane)`,fm:`Adjectif / nom`,root:`و س ط`},
    ],
    grammar:{
      concept:`الأُسْلُوبُ الْقَانُونِيُّ الإِسْلَامِيُّ — Le style juridique islamique (التعريف · الحكم · الدليل)`,
      excerptW:`السُّنَّةُ الصَّحِيحَةُ مُلْزِمَةٌ · وَلَوْ كَانَتْ خَبَرَ آحَادٍ · مَا دَامَتْ قَدْ صَحَّتْ رِوَايَتُهَا`,
      excerptP:`السنة الصحيحة ملزمة · ولو كانت خبر آحاد · ما دامت قد صحت روايتها`,
      exp:`Le style juridique islamique (الأُسْلُوب الْفِقْهِيّ) suit un schéma précis : <strong>① التعريف</strong> (définir le concept) → <strong>② الحكم</strong> (énoncer la règle) → <strong>③ الدليل</strong> (citer la preuve) → <strong>④ الشروط</strong> (les conditions) → <strong>⑤ الاستثناء</strong> (les exceptions). Chaque élément est indispensable.`,
      gtblHeaders:[`Élément`,`Fonction`,`Marqueurs`,`Exemple de la Risāla`],
      table:[
        {v:`① التعريف`,f:`définir`,m:`هو · تعريف الاصطلاحي`,fr:`الفِقْهُ عِلْمٌ بِالأَحْكَامِ`},
        {v:`② الحكم`,f:`énoncer la règle`,m:`يَجِبُ · يَحْرُمُ · يُسْتَحَبُّ`,fr:`السُّنَّةُ مُلْزِمَةٌ`},
        {v:`③ الدليل`,f:`citer la preuve`,m:`لِقَوْلِهِ تَعَالَى · لِحَدِيثِ`,fr:`بِكِتَابِهِ وَسُنَّةِ رَسُولِهِ`},
        {v:`④ الشروط`,f:`préciser les conditions`,m:`وَشَرْطُهُ · بِشَرْطِ أَنْ`,fr:`مَا دَامَتْ قَدْ صَحَّتْ`},
        {v:`⑤ الاستثناء`,f:`indiquer les exceptions`,m:`إِلَّا · غَيْرَ أَنَّ · مَا لَمْ`,fr:`وَلَوْ كَانَتْ خَبَرَ آحَادٍ`},
        {v:`⑥ الخلاف`,f:`présenter les opinions`,m:`قَالَ أَبُو حَنِيفَةَ · وَعِنْدَ مَالِكٍ`,fr:`عَقْلَانِيَّةُ الْعِرَاقِ ↔ نَقْلِيَّةُ الْمَدِينَةِ`},
      ],
      note:`La formule شَرَطَ أَنْ (condition obligatoire) ≠ اسْتَحْسَنَ أَنْ (condition recommandée) ≠ أَجَازَ أَنْ (permission) — distinguer ces trois niveaux est fondamental pour lire les textes juridiques islamiques.`,
    },
  };

  /* ─── T12 — الأَمِيرُ عَبْدُ الْقَادِرِ الْجَزَائِرِيُّ */
  var T12 = {
    id:`c2-12`, level:`C2`,
    titleW:`الأَمِيرُ عَبْدُ الْقَادِرِ الْجَزَائِرِيُّ`, titleP:`الأمير عبد القادر الجزائري`,
    titleFr:`L'Émir Abd el-Kader`,
    sentences:[
      [{w:`الأَمِيرُ عَبْدُ الْقَادِرِ بْنُ مُحْيِي الدِّينِ الْجَزَائِرِيُّ`,t:`l'Émir Abd el-Kader ibn Muhyi al-Din al-Jaza'iri`},{w:`شَخْصِيَّةٌ جَامِعَةٌ نَادِرَةٌ`,t:`est une personnalité totale et rare`},{w:`جَمَعَ فِيهَا الإِسْلَامُ بَيْنَ الْمَدَافِعِ عَنِ الدِّينِ وَالْعَالِمِ بِهِ وَالشَّاعِرِ الْمُتَصَوِّفِ`,t:`en qui l'islam a réuni défenseur de la religion, savant en elle, et poète mystique`}],
      [{w:`قَادَ مُقَاوَمَةً بَطُولِيَّةً ضِدَّ الاحْتِلَالِ الْفَرَنْسِيِّ لِلْجَزَائِرِ`,t:`il a conduit une résistance héroïque contre l'occupation française de l'Algérie`},{w:`لِسَبْعَةَ عَشَرَ عَامًا مُتَوَاصِلَةً`,t:`pendant dix-sept années consécutives`},{w:`مُوَظِّفًا مَبَادِئَ الشَّرِيعَةِ الإِسْلَامِيَّةِ فِي إِدَارَةِ دَوْلَتِهِ`,t:`en appliquant les principes de la charia islamique dans l'administration de son État`}],
      [{w:`وَحِينَ أَسَرَهُ الْفَرَنْسِيُّونَ وَنَقَلُوهُ إِلَى فَرَنْسَا ثُمَّ الشَّامِ`,t:`et lorsque les Français l'ont capturé et transféré en France puis en Syrie`},{w:`لَمْ يَتَخَلَّ عَنْ مَبَادِئِهِ الإِنْسَانِيَّةِ`,t:`il n'a pas renoncé à ses principes humanitaires`},{w:`بَلِ انْتَصَرَ لِلْمَسِيحِيِّينَ الْمَهَدَّدِينَ بِدِمَشْقَ عَامَ أَلْفٍ وَثَمَانِمِئَةٍ وَسِتِّينَ`,t:`mais il a défendu les chrétiens menacés à Damas en 1860`}],
      [{w:`وَقَدِ أَثَارَ مَوْقِفُهُ هَذَا`,t:`et cette position a suscité`},{w:`إِعْجَابَ الرَّأْيِ الْعَالَمِيِّ`,t:`l'admiration de l'opinion mondiale`},{w:`وَكَانَ تَجْسِيدًا لِمَبَادِئِ الإِسْلَامِ فِي حِمَايَةِ غَيْرِ الْمُسْلِمِينَ`,t:`et fut une incarnation des principes de l'islam dans la protection des non-musulmans`}],
      [{w:`كَانَ كَذَلِكَ صُوفِيًّا مُتَعَمِّقًا فِي أَفْكَارِ ابْنِ عَرَبِيٍّ`,t:`il était aussi un soufi profondément imprégné des idées d'Ibn Arabi`},{w:`وَأَلَّفَ الْمَوَاقِفَ`,t:`et a composé Al-Mawaqif`},{w:`وَهُوَ كِتَابٌ يَجْمَعُ بَيْنَ الشِّعْرِ وَالتَّصَوُّفِ وَالسِّيَاسَةِ وَالنَّضَالِ`,t:`un livre qui réunit poésie, soufisme, politique et lutte`}],
    ],
    vocabulary:[
      {w:`عَبْد الْقَادِر الجَزَائِرِيّ`,p:`عبد القادر الجزائري`,tr:`ʿAbd al-Qādir al-Jazāʾirī`,fr:`Émir Abd el-Kader (1808-1883) — héros algérien`,fm:`Nom propre`,root:`—`},
      {w:`شَخْصِيَّة جَامِعَة`,p:`شخصية جامعة`,tr:`shakhṣiyya jāmiʿa`,fr:`personnalité totale, polymathe`,fm:`Idāfa qualificative`,root:`ش خ ص`},
      {w:`مُقَاوَمَة`,p:`مقاومة`,tr:`muqāwama`,fr:`résistance, opposition`,fm:`Masdar Form III`,root:`ق و م`},
      {w:`احْتِلَال`,p:`احتلال`,tr:`iḥtilāl`,fr:`occupation, colonisation`,fm:`Masdar Form VIII`,root:`ح ل ل`},
      {w:`مُتَوَاصِل`,p:`متواصل`,tr:`mutawāṣil`,fr:`ininterrompu, continu, consécutif`,fm:`Participe actif Form VI`,root:`و ص ل`},
      {w:`أَسَرَ`,p:`أسر`,tr:`asara`,fr:`capturer, faire prisonnier`,fm:`Verbe Form I`,root:`أ س ر`},
      {w:`انْتَصَرَ لـ`,p:`انتصر لـ`,tr:`intaṣara li`,fr:`défendre, prendre le parti de`,fm:`Verbe Form VIII`,root:`ن ص ر`},
      {w:`مَوَاقِف`,p:`مواقف`,tr:`mawāqif`,fr:`Al-Mawaqif (œuvre de l'Émir) — positions, stations`,fm:`Pl. de مَوْقِف`,root:`و ق ف`},
      {w:`نِضَال`,p:`نضال`,tr:`niḍāl`,fr:`lutte, résistance, engagement`,fm:`Masdar Form I`,root:`ن ض ل`},
      {w:`تَجْسِيد`,p:`تجسيد`,tr:`tajsīd`,fr:`incarnation, concrétisation, matérialisation`,fm:`Masdar Form II`,root:`ج س د`},
      {w:`مُتَعَمِّق`,p:`متعمق`,tr:`mutaʿammiq`,fr:`profondément imprégné, qui approfondit`,fm:`Participe actif Form V`,root:`ع م ق`},
    ],
    grammar:{
      concept:`النَّصُّ الْبِيُوغْرَافِيُّ الإِسْلَامِيُّ — La biographie islamique (السيرة · التراجم)`,
      excerptW:`جَمَعَ فِيهَا بَيْنَ الْمُدَافِعِ وَالْعَالِمِ وَالشَّاعِرِ · انْتَصَرَ لِلْمَسِيحِيِّينَ الْمَهَدَّدِينَ`,
      excerptP:`جمع فيها بين المدافع والعالم والشاعر · انتصر للمسيحيين المهددين`,
      exp:`Le genre de la <strong>سِيرَة (biographie islamique)</strong> et des <strong>تَرَاجِم (notices biographiques)</strong> est l'un des plus riches de la littérature arabe. Sa structure : النسب (généalogie) → المولد والنشأة → المكانة العلمية → المواقف والأعمال → الوفاة والمرثية.`,
      gtblHeaders:[`Élément biographique`,`Terme arabe`,`Exemple dans le texte`,`But`],
      table:[
        {v:`Nom complet et nasab`,f:`الاسم الكامل + نسب`,m:`عَبْدُ الْقَادِرِ بْنُ مُحْيِي الدِّينِ`,fr:`Identification et légitimité`},
        {v:`Caractérisation globale`,f:`شخصية جامعة + تعداد`,m:`الْمُدَافِعُ وَالْعَالِمُ وَالشَّاعِرُ`,fr:`Profil syncrétique`},
        {v:`Exploit principal`,f:`فعل ماضٍ بارز`,m:`قَادَ مُقَاوَمَةً بَطُولِيَّةً`,fr:`Action mémorable centrale`},
        {v:`Épreuve / retournement`,f:`وَحِينَ / عِنْدَمَا`,m:`حِينَ أَسَرَهُ الْفَرَنْسِيُّونَ`,fr:`Moment de vérité`},
        {v:`Vertu révélée`,f:`لَمْ يَتَخَلَّ + نقيض`,m:`لَمْ يَتَخَلَّ بَلِ انْتَصَرَ`,fr:`Grandeur morale paradoxale`},
        {v:`Héritage intellectuel`,f:`أَلَّفَ / وَضَعَ`,m:`أَلَّفَ الْمَوَاقِفَ`,fr:`Dimension savante`},
      ],
      note:`La <strong>طَبَقَات (classes)</strong> est un genre biographique collectif classant les savants par génération ou spécialité. Ex : طبقات المفسرين · طبقات النحويين · طبقات الشعراء. À distinguer de la <strong>سِيرَة ذاتية</strong> (autobiographie).`,
    },
  };

  /* ─── T13 — الشِّعْرُ الصُّوفِيُّ لِابْنِ عَرَبِيٍّ */
  var T13 = {
    id:`c2-13`, level:`C2`,
    titleW:`الشِّعْرُ الصُّوفِيُّ لِابْنِ عَرَبِيٍّ`, titleP:`الشعر الصوفي لابن عربي`,
    titleFr:`La poésie mystique d'Ibn Arabi`,
    sentences:[
      [{w:`مُحْيِي الدِّينِ ابْنُ عَرَبِيٍّ`,t:`Muhyi al-Din ibn Arabi`},{w:`الشَّيْخُ الأَكْبَرُ فِي التَّصَوُّفِ الإِسْلَامِيِّ`,t:`est le Grand Cheikh dans le soufisme islamique`},{w:`وُلِدَ بِمُرْسِيَّةَ الأَنْدَلُسِيَّةِ وَمَاتَ بِدِمَشْقَ`,t:`né à Murcie en Andalousie, mort à Damas`}],
      [{w:`مِنْ أَبْرَزِ أَعْمَالِهِ دِيوَانُ تَرْجُمَانِ الأَشْوَاقِ`,t:`l'une de ses œuvres les plus saillantes est le Divan "Interprète des désirs (Tarjumān al-Ashwāq)"`},{w:`الَّذِي نَسَجَهُ مِنْ وَحْيِ لِقَائِهِ بِالشَّيْخَةِ نِظَامٍ فِي مَكَّةَ`,t:`qu'il a tissé sous l'inspiration de sa rencontre avec la cheikha Nizam à La Mecque`}],
      [{w:`وَقَدْ جَمَعَ هَذَا الدِّيوَانُ`,t:`et ce divan a réuni`},{w:`بَيْنَ الْغَزَلِ الإِنْسَانِيِّ الرَّقِيقِ`,t:`entre la poésie d'amour humaine et tendre`},{w:`وَالرُّؤَى الرُّوحِيَّةِ الْعَمِيقَةِ`,t:`et les visions spirituelles profondes`},{w:`بِحَيْثُ لَا تَكَادُ تُفَرِّقُ بَيْنَ الشِّعْرِ الإِنْسَانِيِّ وَالرُّوحَانِيِّ`,t:`au point que l'on ne peut presque pas distinguer entre le poétique humain et le spirituel`}],
      [{w:`قَالَ فِي شَرْحِهِ لِقَصَائِدِهِ`,t:`il dit dans son commentaire de ses poèmes`},{w:`كُلُّ مَا أَذْكُرُهُ مِنَ الأَشْوَاقِ وَالأَشْجَانِ`,t:`"Tout ce que j'évoque de désirs et de peines`},{w:`فَهُوَ إِشَارَةٌ إِلَى مَرَاتِبِ الأَسْمَاءِ الإِلَهِيَّةِ`,t:`est une allusion aux degrés des Noms divins`},{w:`وَلَيْسَ غَزَلًا فَحَسْبُ`,t:`et non de la simple poésie amoureuse"`}],
      [{w:`وَيَتَمَيَّزُ شِعْرُهُ بِالتَّلَاعُبِ بِمُسْتَوَيَيْنِ دَلَالِيَّيْنِ مُتَزَامِنَيْنِ`,t:`et sa poésie se distingue par le jeu sur deux niveaux sémantiques simultanés`},{w:`الظَّاهِرُ الْعَاطِفِيُّ وَالْبَاطِنُ الْمَعْرِفِيُّ الإِلَهِيُّ`,t:`l'apparent émotionnel et le caché gnostique-divin`}],
    ],
    vocabulary:[
      {w:`تَرْجُمَان`,p:`ترجمان`,tr:`tarjumān`,fr:`interprète, traducteur (pl. تَرَاجِمَة)`,fm:`Nom (emprunt)`,root:`ت ر ج م`},
      {w:`أَشْوَاق`,p:`أشواق`,tr:`ashwāq`,fr:`désirs ardents, aspirations (pl. de شَوْق)`,fm:`Pl. brisé — schème أَفْعَال`,root:`ش و ق`},
      {w:`نِظَام`,p:`نظام`,tr:`Niẓām`,fr:`Nizam — la cheikha source d'inspiration d'Ibn Arabi`,fm:`Nom propre féminin`,root:`ن ظ م`},
      {w:`غَزَل`,p:`غزل`,tr:`ghazal`,fr:`poème d'amour, poésie amoureuse`,fm:`Masdar Form I`,root:`غ ز ل`},
      {w:`رُؤَى`,p:`رؤى`,tr:`ruʾā`,fr:`visions, révélations (pl. de رُؤْيَة)`,fm:`Pl. brisé — défectueux`,root:`ر أ ي`},
      {w:`رُوحَانِيّ`,p:`روحاني`,tr:`rūḥānī`,fr:`spirituel, de l'esprit`,fm:`Nisba de رُوح`,root:`ر و ح`},
      {w:`أَشْجَان`,p:`أشجان`,tr:`ashjān`,fr:`peines, chagrins (pl. de شَجَن)`,fm:`Pl. brisé — schème أَفْعَال`,root:`ش ج ن`},
      {w:`إِشَارَة`,p:`إشارة`,tr:`ishāra`,fr:`allusion, symbole, signe (≠ عِبَارَة expression directe)`,fm:`Masdar Form IV`,root:`ش و ر`},
      {w:`مَرَاتِب`,p:`مراتب`,tr:`marātib`,fr:`degrés, niveaux, rangs (pl. de مَرْتَبَة)`,fm:`Pl. brisé — schème مَفَاعِل`,root:`ر ت ب`},
      {w:`أَسْمَاء إِلَهِيَّة`,p:`أسماء إلهية`,tr:`asmāʾ ilāhiyya`,fr:`Noms divins (les 99 noms d'Allah)`,fm:`Pl. de اسم + nisba`,root:`س م و`},
      {w:`مُتَزَامِن`,p:`متزامن`,tr:`mutazāmin`,fr:`simultané, concomitant`,fm:`Participe actif Form VI`,root:`ز م ن`},
      {w:`مَعْرِفِيّ`,p:`معرفي`,tr:`maʿrifī`,fr:`gnostique, de la connaissance mystique`,fm:`Nisba de مَعْرِفَة`,root:`ع ر ف`},
    ],
    grammar:{
      concept:`الإِشَارَةُ وَالْعِبَارَةُ — Allusion et expression directe (langage mystique)`,
      excerptW:`مَا أَذْكُرُهُ مِنَ الأَشْوَاقِ فَهُوَ إِشَارَةٌ · الظَّاهِرُ الْعَاطِفِيُّ وَالْبَاطِنُ الْمَعْرِفِيُّ`,
      excerptP:`ما أذكره من الأشواق فهو إشارة · الظاهر العاطفي والباطن المعرفي`,
      exp:`En soufisme, tout texte fonctionne sur deux niveaux : <strong>الظاهر (l'apparent)</strong> = sens littéral, accessible à tous, et <strong>الباطن (le caché)</strong> = sens symbolique, gnostique, accessible aux initiés. Cette herméneutique double est nommée <strong>التأويل الإشاري</strong>.`,
      gtblHeaders:[`Terme`,`Sens littéral (ظاهر)`,`Sens symbolique (باطن)`,`Usage typique`],
      table:[
        {v:`النَّاي (flûte)`,f:`instrument de musique`,m:`l'âme séparée de sa source divine`,fr:`Rumi — Masnavi`},
        {v:`الحَبِيبَة (la bien-aimée)`,f:`femme aimée`,m:`Dieu ou la sagesse divine`,fr:`Ibn Arabi — Tarjuman`},
        {v:`الخَمْر (le vin)`,f:`boisson alcoolisée`,m:`l'amour mystique enivrant`,fr:`Ibn al-Farid — Khamriyya`},
        {v:`السُّكْر (l'ivresse)`,f:`état d'ébriété`,m:`l'extase mystique (وجد)`,fr:`Al-Hallaj · Ibn Arabi`},
        {v:`الصَّحْو (la sobriété)`,f:`état sobre`,m:`la conscience ordinaire — avant l'éveil`,fr:`Langage commun soufi`},
        {v:`الوِصَال (l'union)`,f:`retrouvailles amoureuses`,m:`l'union avec le Divin (فناء)`,fr:`Toute la poésie soufie`},
      ],
      note:`Le سوفي هو من يقرأ الإشارة (le soufi est celui qui lit l'allusion) — ibn Arabi. Ce niveau de lecture exige une formation longue dans la terminologie mystique (اصطلاح القوم). Sans elle, le texte soufi n'est qu'une belle poésie d'amour.`,
    },
  };

  /* ─── T14 — الْمُقَدِّمَةُ وَفَلْسَفَةُ الْحَضَارَةِ */
  var T14 = {
    id:`c2-14`, level:`C2`,
    titleW:`الْمُقَدِّمَةُ وَفَلْسَفَةُ الْحَضَارَةِ`, titleP:`المقدمة وفلسفة الحضارة`,
    titleFr:`La Muqaddima et la philosophie de la civilisation`,
    sentences:[
      [{w:`يَقُولُ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ`,t:`Ibn Khaldun dit dans sa Muqaddimah`},{w:`اعْلَمْ أَنَّ تَارِيخَ الإِنْسَانِيَّةِ`,t:`"Sache que l'histoire de l'humanité`},{w:`لَيْسَ مُجَرَّدَ سِجِلٍّ لِمَلُوكٍ وَأَحْدَاثٍ`,t:`n'est pas un simple registre de rois et d'événements`},{w:`بَلْ هُوَ عِلْمٌ يَبْحَثُ فِي قَوَانِينِ الاجْتِمَاعِ الإِنْسَانِيِّ`,t:`mais une science qui recherche les lois de la société humaine"`}],
      [{w:`وَمِنْ أَبْرَزِ مَا أَسَّسَ لَهُ ابْنُ خَلْدُونَ`,t:`et parmi les fondements les plus remarquables qu'Ibn Khaldun a établis`},{w:`نَظَرِيَّةُ الْعُمْرَانِ الْبَشَرِيِّ`,t:`la théorie de l'urbanité humaine (al-ʿumrān al-basharī)`},{w:`الَّتِي تَرَى أَنَّ الْحَضَارَةَ لَا تَنْشَأُ مِنَ الْفَرَاغِ`,t:`qui postule que la civilisation ne naît pas du néant`},{w:`بَلْ هِيَ نِتَاجُ شُرُوطٍ اجْتِمَاعِيَّةٍ وَاقْتِصَادِيَّةٍ مُحَدَّدَةٍ`,t:`mais est le fruit de conditions sociales et économiques définies`}],
      [{w:`وَيُمَيِّزُ بَيْنَ طَوْرَيْنِ حَضَارِيَّيْنِ أَسَاسِيَّيْنِ`,t:`et il distingue entre deux phases civilisationnelles fondamentales`},{w:`الْبَادِيَةُ أَوِ الْحَيَاةُ الرِّيفِيَّةُ الَّتِي تُوَلِّدُ الْقُوَّةَ وَالْعُصْبِيَّةَ`,t:`le nomadisme ou la vie rurale qui génèrent force et cohésion`},{w:`وَالْمَدِينَةُ أَوِ الْحَضَرُ الَّذِي يُنَمِّي الرَّفَاهِيَّةَ وَالتَّخَصُّصَ وَلَكِنَّهُ يُرَخِّي الْعُصْبِيَّةَ`,t:`et la ville ou la cité qui développe bien-être et spécialisation mais affaiblit la cohésion`}],
      [{w:`قَالَ رَحِمَهُ اللهُ`,t:`il dit, que Dieu lui fasse miséricorde`},{w:`وَالرَّفَاهِيَّةُ وَالنِّعَمُ إِذَا اسْتَوْلَتْ عَلَى أَهْلِ الدَّوْلَةِ`,t:`"et la prospérité et les bienfaits lorsqu'ils s'emparent des gens de l'État`},{w:`وَوَسَّعَتْ خِطَطَهُمْ وَرَفَعَتْ أَحْوَالَهُمْ فِي الْمَعَاشِ`,t:`et élargissent leurs projets et élèvent leur niveau de vie`},{w:`صَارُوا بَعِيدِينَ عَنِ الشَّجَاعَةِ وَالنُّصْرَةِ",`,t:`ils deviennent éloignés du courage et de la défense mutuelle"`}],
    ],
    vocabulary:[
      {w:`سِجِلّ`,p:`سجل`,tr:`sijill`,fr:`registre, archive, document (pl. سِجِلَّات)`,fm:`Nom — géminé`,root:`س ج ل`},
      {w:`عُمْرَان`,p:`عمران`,tr:`ʿumrān`,fr:`civilisation, peuplement, urbanité (concept d'Ibn Khaldun)`,fm:`Masdar Form I`,root:`ع م ر`},
      {w:`نِتَاج`,p:`نتاج`,tr:`nitāj`,fr:`fruit, résultat, produit`,fm:`Masdar Form I`,root:`ن ت ج`},
      {w:`طَوْر`,p:`طور`,tr:`ṭawr`,fr:`phase, stade, étape (pl. أَطْوَار)`,fm:`Nom — schème فَعْل`,root:`ط و ر`},
      {w:`بَادِيَة`,p:`بادية`,tr:`bādiya`,fr:`steppe, nomadisme, campagne`,fm:`Participe actif fém. Form I`,root:`ب د و`},
      {w:`حَضَر`,p:`حضر`,tr:`ḥaḍar`,fr:`ville, sédentarité, civilisation urbaine`,fm:`Masdar Form I`,root:`ح ض ر`},
      {w:`رَفَاهِيَّة`,p:`رفاهية`,tr:`rafāhiyya`,fr:`prospérité, bien-être, luxe`,fm:`Nisba de رَفَاه`,root:`ر ف ه`},
      {w:`رَخَّى`,p:`رخى`,tr:`rakhkhā`,fr:`affaiblir, relâcher, assouplir`,fm:`Verbe Form II — défectueux`,root:`ر خ و`},
      {w:`اسْتَوْلَى عَلَى`,p:`استولى على`,tr:`istawlā ʿalā`,fr:`s'emparer de, prendre le contrôle de`,fm:`Verbe Form X — défectueux`,root:`و ل ي`},
      {w:`خِطَط`,p:`خطط`,tr:`khiṭaṭ`,fr:`quartiers, plans, projets (pl. de خِطَّة)`,fm:`Pl. brisé`,root:`خ ط ط`},
      {w:`مَعَاش`,p:`معاش`,tr:`maʿāsh`,fr:`niveau de vie, moyens d'existence`,fm:`Masdar Form I`,root:`ع ي ش`},
      {w:`نُصْرَة`,p:`نصرة`,tr:`nuṣra`,fr:`défense mutuelle, soutien, solidarité`,fm:`Masdar Form I`,root:`ن ص ر`},
    ],
    grammar:{
      concept:`نَصُّ ابْنِ خَلْدُونَ — Style et structure de la prose analytique classique`,
      excerptW:`اعْلَمْ أَنَّ تَارِيخَ الإِنْسَانِيَّةِ لَيْسَ مُجَرَّدَ سِجِلٍّ بَلْ هُوَ عِلْمٌ`,
      excerptP:`اعلم أن تاريخ الإنسانية ليس مجرد سجل بل هو علم`,
      exp:`Le style d'Ibn Khaldun combine <strong>اعْلَمْ (apostrophe pédagogique)</strong>, <strong>التعريف السلبي ثم الإيجابي</strong> (définir par la négation puis l'affirmation) et <strong>التدرج التحليلي</strong> (du simple au complexe). C'est le modèle de la prose analytique islamique.`,
      gtblHeaders:[`Marqueur stylistique`,`Fonction`,`Exemple`,`Effet pédagogique`],
      table:[
        {v:`اعْلَمْ أَنَّ`,f:`apostrophe + assertion`,m:`اعْلَمْ أَنَّ تَارِيخَ الإِنْسَانِيَّةِ`,fr:`Attire l'attention et crée un contrat de lecture`},
        {v:`لَيْسَ A بَلْ B`,f:`correction définitionnelle`,m:`لَيْسَ مُجَرَّدَ سِجِلٍّ بَلْ عِلْمٌ`,fr:`Redéfinit contre la conception ordinaire`},
        {v:`وَمِنْ أَبْرَزِ مَا`,f:`hiérarchisation`,m:`وَمِنْ أَبْرَزِ مَا أَسَّسَ لَهُ`,fr:`Sélection des idées centrales`},
        {v:`يُمَيِّزُ بَيْنَ`,f:`bipartition analytique`,m:`يُمَيِّزُ بَيْنَ طَوْرَيْنِ`,fr:`Structuration en catégories`},
        {v:`إِذَا A + B`,f:`causalité conditionnelle`,m:`إِذَا اسْتَوْلَتِ الرَّفَاهِيَّةُ صَارُوا`,fr:`Loi civilisationnelle — si A alors B`},
        {v:`ولكنه`,f:`restriction / concession`,m:`يُنَمِّي الرَّفَاهِيَّةَ وَلَكِنَّهُ يُرَخِّي`,fr:`Nuance dialectique`},
      ],
      note:`La formule <strong>اعلم أن</strong> (sache que) est une convention didactique classique arabophone. Elle signale que ce qui suit est une vérité fondamentale ou contre-intuitive. On la retrouve dans les Épîtres des Ikhwān al-Ṣafā, Ibn Khaldun, et les textes soufis.`,
    },
  };

  /* ─── T15 — الإِسْلَامُ بَيْنَ الأَمْسِ وَالْغَدِ ── */
  var T15 = {
    id:`c2-15`, level:`C2`,
    titleW:`الإِسْلَامُ بَيْنَ الأَمْسِ وَالْغَدِ`, titleP:`الإسلام بين الأمس والغد`,
    titleFr:`L'islam entre hier et demain`,
    sentences:[
      [{w:`إِنَّمَا تُقَاسُ عَظَمَةُ الْأُمَمِ`,t:`la grandeur des nations ne se mesure uniquement (إِنَّمَا)`},{w:`بِقُدْرَتِهَا عَلَى التَّجَدُّدِ`,t:`par leur capacité de renouveau`},{w:`دُونَ أَنْ تَفْقِدَ رُوحَهَا الَّتِي مِنْهَا انْبَثَقَتْ`,t:`sans perdre l'esprit dont elle a jailli`}],
      [{w:`وَالأُمَّةُ الإِسْلَامِيَّةُ تَمْلِكُ مِنَ الثَّرْوَةِ الرُّوحِيَّةِ وَالْفِكْرِيَّةِ`,t:`et la nation islamique détient de la richesse spirituelle et intellectuelle`},{w:`مَا يُؤَهِّلُهَا لِأَنْ تَكُونَ فَاعِلَةً فِي الْحَضَارَةِ الْإِنْسَانِيَّةِ الْمُعَاصِرَةِ`,t:`ce qui la qualifie pour être active dans la civilisation humaine contemporaine`}],
      [{w:`وَقَدْ أَبَانَ شَيْخُ الإِسْلَامِ ابْنُ تَيْمِيَّةَ`,t:`et le Sheikh de l'Islam Ibn Taymiyya a montré`},{w:`أَنَّ الشَّرِيعَةَ لَيْسَتْ عَائِقًا أَمَامَ التَّقَدُّمِ`,t:`que la charia n'est pas un obstacle au progrès`},{w:`بَلْ هِيَ الضَّامِنَةُ لِحُقُوقِ الإِنْسَانِ وَالْعَدَالَةِ الاجْتِمَاعِيَّةِ`,t:`mais elle est la garante des droits de l'homme et de la justice sociale`}],
      [{w:`وَمَا يَحْتَاجُهُ الْمُسْلِمُونَ اليَوْمَ`,t:`et ce dont les musulmans ont besoin aujourd'hui`},{w:`لَيْسَ التَّقْلِيدَ الأَعْمَى لِلْغَرْبِ`,t:`n'est pas l'imitation aveugle de l'Occident`},{w:`وَلَا الانْغِلَاقَ عَنِ الْعَالَمِ`,t:`ni l'enfermement vis-à-vis du monde`},{w:`بَلِ الْانْخِرَاطَ الْوَاعِيَ فِي الْحَضَارَةِ الإِنْسَانِيَّةِ`,t:`mais l'engagement conscient dans la civilisation humaine`},{w:`مُحَافِظِينَ عَلَى هُوِيَّتِهِمْ وَقِيَمِهِمِ الرَّاسِخَةِ`,t:`en préservant leur identité et leurs valeurs solidement enracinées`}],
      [{w:`وَخَيْرُ شَاهِدٍ عَلَى هَذَا التَّوَازُنِ`,t:`et le meilleur témoignage sur cet équilibre`},{w:`أُولَئِكَ الْعُلَمَاءُ الَّذِينَ أَبَدَعُوا فِي الرِّيَاضِيَّاتِ وَالطِّبِّ وَالْفَلَكِ`,t:`sont ces savants qui ont excellé en mathématiques, médecine et astronomie`},{w:`وَلَمْ يَفْقِدُوا إِيمَانَهُمْ وَلَمْ يَتَرَاجَعُوا عَنِ التِّزَامِهِمِ الإِسْلَامِيِّ`,t:`sans perdre leur foi ni reculer dans leur engagement islamique`}],
    ],
    vocabulary:[
      {w:`قَاسَ`,p:`قاس`,tr:`qāsa`,fr:`mesurer, évaluer, comparer`,fm:`Verbe Form I — défectueux`,root:`ق ي س`},
      {w:`انْبَثَقَ`,p:`انبثق`,tr:`inbathaqa`,fr:`jaillir, émaner, surgir`,fm:`Verbe Form VII`,root:`ب ث ق`},
      {w:`أَهَّلَ`,p:`أهل`,tr:`ahhala`,fr:`qualifier, rendre apte, habiliter`,fm:`Verbe Form II`,root:`أ ه ل`},
      {w:`فَاعِل`,p:`فاعل`,tr:`fāʿil`,fr:`actif, opérant, efficace`,fm:`Participe actif Form I`,root:`ف ع ل`},
      {w:`أَبَانَ`,p:`أبان`,tr:`abāna`,fr:`montrer clairement, révéler, démontrer`,fm:`Verbe Form IV`,root:`ب ي ن`},
      {w:`ضَامِن`,p:`ضامن`,tr:`ḍāmin`,fr:`garant, caution, assureur`,fm:`Participe actif Form I`,root:`ض م ن`},
      {w:`انْغِلَاق`,p:`انغلاق`,tr:`inghilāq`,fr:`enfermement, fermeture, isolement`,fm:`Masdar Form VII`,root:`غ ل ق`},
      {w:`انْخِرَاط`,p:`انخراط`,tr:`inkhirāṭ`,fr:`engagement, participation, enrôlement`,fm:`Masdar Form VII`,root:`خ ر ط`},
      {w:`تَقْلِيد أَعْمَى`,p:`تقليد أعمى`,tr:`taqlīd aʿmā`,fr:`imitation aveugle`,fm:`Idāfa + adjectif`,root:`ق ل د`},
      {w:`تَرَاجَعَ عَن`,p:`تراجع عن`,tr:`tarājaʿa ʿan`,fr:`reculer sur, se rétracter de`,fm:`Verbe Form VI`,root:`ر ج ع`},
      {w:`الْتِزَام`,p:`التزام`,tr:`iltizām`,fr:`engagement, commitment, obligation`,fm:`Masdar Form VIII`,root:`ل ز م`},
    ],
    grammar:{
      concept:`الأُسْلُوبُ الْخِطَابِيُّ الرَّفِيعُ — Le style oratoire de haut niveau`,
      excerptW:`إِنَّمَا تُقَاسُ عَظَمَةُ الأُمَمِ بِقُدْرَتِهَا · لَيْسَ التَّقْلِيدَ الأَعْمَى وَلَا الانْغِلَاقَ بَلِ الانْخِرَاطَ`,
      excerptP:`إنما تقاس عظمة الأمم بقدرتها · ليس التقليد الأعمى ولا الانغلاق بل الانخراط`,
      exp:`Le style oratoire (الأسلوب الخطابي) de haut niveau intègre toutes les ressources rhétoriques apprises : إِنَّمَا (restriction), لَيْسَ...وَلَا...بَلْ (triple structure corrective), المفعول المطلق, التقديم والتأخير, et le شاهد (témoignage des savants classiques).`,
      gtblHeaders:[`Ressource rhétorique`,`Exemple`,`Niveau`,`Effet`],
      table:[
        {v:`إِنَّمَا (restriction)`,f:`إِنَّمَا تُقَاسُ عَظَمَةُ`,m:`C1`,fr:`Focus exclusif sur le critère`},
        {v:`لَيْسَ A وَلَا B بَلْ C`,f:`لَيْسَ تَقْلِيدًا وَلَا انْغِلَاقًا`,m:`B2`,fr:`Triple correction élaborée`},
        {v:`دُونَ أَنْ + منصوب`,f:`دُونَ أَنْ تَفْقِدَ رُوحَهَا`,m:`B2`,fr:`Condition négative de simultanéité`},
        {v:`الشاهد العلمي`,f:`أَبَانَ ابْنُ تَيْمِيَّةَ`,m:`C1`,fr:`Ancrage dans l'autorité classique`},
        {v:`الحال الجملية`,f:`مُحَافِظِينَ عَلَى هُوِيَّتِهِمْ`,m:`B1`,fr:`Condition d'accompagnement`},
        {v:`خير شاهد`,f:`وَخَيْرُ شَاهِدٍ عَلَى ذَلِكَ`,m:`C1`,fr:`Clôture par l'exemple parfait`},
      ],
      note:`Ce texte de synthèse C2 mobilise simultanément toutes les ressources apprises. À ce niveau, la lecture est une récompense : chaque structure reconnue est une preuve de maîtrise accumulée. L'objectif n'est plus de comprendre la grammaire mais de <strong>lire l'arabe authentique comme les Arabes le lisent</strong>.`,
    },
  };

  /* ─── T16 — مُرَاجَعَةٌ شَامِلَةٌ C2 — الْخَتَامُ */
  var T16 = {
    id:`c2-16`, level:`C2`,
    titleW:`الْخِتَامُ — إِلَى آفَاقِ اللُّغَةِ الرَّحِيبَةِ`, titleP:`الختام — إلى آفاق اللغة الرحيبة`,
    titleFr:`Le mot final — Vers les horizons de la langue`,
    sentences:[
      [{w:`قَالَ أَبُو مَنْصُورٍ الثَّعَالِبِيُّ`,t:`Abou Mansour al-Tha'alibi dit`},{w:`مَنْ أَحَبَّ اللهَ أَحَبَّ رَسُولَهُ مُحَمَّدًا`,t:`"celui qui aime Dieu aime Son Messager Mohammed`},{w:`وَمَنْ أَحَبَّ الرَّسُولَ الْعَرَبِيَّ أَحَبَّ الْعَرَبَ`,t:`et celui qui aime le Messager arabe aime les Arabes`},{w:`وَمَنْ أَحَبَّ الْعَرَبَ أَحَبَّ الْعَرَبِيَّةَ الَّتِي بِهَا نَزَلَ أَشْرَفُ الْكُتُبِ عَلَى أَشْرَفِ الْعَرَبِ",`,t:`et celui qui aime les Arabes aime l'arabe par lequel est descendu le plus noble des Livres sur le plus noble des Arabes"`}],
      [{w:`وَالْعَرَبِيَّةُ الَّتِي وَصَلْتَ إِلَى هَذَا الْمُسْتَوَى مِنِ اسْتِيعَابِهَا`,t:`et l'arabe auquel tu as atteint ce niveau de maîtrise`},{w:`هِيَ لُغَةُ الْقُرْآنِ وَالْحَدِيثِ`,t:`est la langue du Coran et du hadith`},{w:`وَلُغَةُ الشِّعْرِ وَالنَّثْرِ وَالْفَلْسَفَةِ وَالْحَضَارَةِ`,t:`et la langue de la poésie, de la prose, de la philosophie et de la civilisation`}],
      [{w:`وَمَا بَلَغْتَهُ الآنَ`,t:`et ce que tu as atteint maintenant`},{w:`لَيْسَ نِهَايَةَ الطَّرِيقِ`,t:`n'est pas la fin du chemin`},{w:`بَلْ هُوَ بِدَايَةُ عَالَمٍ`,t:`mais le début d'un monde`},{w:`تَتَكَشَّفُ أَسْرَارُهُ كُلَّمَا تَعَمَّقْتَ فِي قِرَاءَةِ نُصُوصِهِ الأَصِيلَةِ`,t:`dont les secrets se révèlent d'autant plus que tu t'approfondis dans la lecture de ses textes authentiques`}],
      [{w:`اقْرَأِ الْقُرْآنَ بِتَدَبُّرٍ`,t:`lis le Coran avec méditation`},{w:`وَتَأَمَّلْ فِي مُعَلَّقَةِ امْرِئِ الْقَيْسِ`,t:`et réfléchis sur la muallaqah d'Imru' al-Qays`},{w:`وَاسْتَمِعْ إِلَى حِكَمِ الْغَزَالِيِّ`,t:`et écoute les sagesses d'Al-Ghazali`},{w:`وَاسْبَحْ فِي إِشَارَاتِ ابْنِ عَرَبِيٍّ`,t:`et baigne-toi dans les allusions d'Ibn Arabi`}],
      [{w:`وَاعْلَمْ أَنَّ اللُّغَةَ الْعَرَبِيَّةَ الَّتِي حَمَلَتِ الْحَضَارَةَ الْإِسْلَامِيَّةَ لِأَلْفِ سَنَةٍ`,t:`et sache que la langue arabe qui a porté la civilisation islamique pendant mille ans`},{w:`هِيَ أَمَانَةٌ فِي عُنُقِكَ`,t:`est un dépôt que tu dois honorer`},{w:`تَرُدُّهَا إِلَى أَهْلِهَا مُثْرَاةً بِمَا تَعَلَّمْتَ وَفَهِمْتَ وَأَبْدَعْتَ`,t:`en la restituant à ses gens enrichie de ce que tu as appris, compris et créé`}],
    ],
    vocabulary:[
      {w:`أَبُو مَنْصُور الثَّعَالِبِيّ`,p:`أبو منصور الثعالبي`,tr:`al-Thaʿālibī`,fr:`Al-Tha'alibi (961-1038) — anthologiste et linguiste`,fm:`Nom propre`,root:`ث ع ل`},
      {w:`اسْتِيعَاب`,p:`استيعاب`,tr:`istiʿāb`,fr:`maîtrise, absorption, assimilation`,fm:`Masdar Form X`,root:`و س ع`},
      {w:`أَصِيل`,p:`أصيل`,tr:`aṣīl`,fr:`authentique, pur, de bonne origine`,fm:`Adjectif — schème فَعِيل`,root:`أ ص ل`},
      {w:`تَدَبُّر`,p:`تدبر`,tr:`tadabbur`,fr:`méditation profonde, réflexion sur le sens`,fm:`Masdar Form V`,root:`د ب ر`},
      {w:`اسْبَحَ`,p:`اسبح`,tr:`isbaḥ`,fr:`nager, se mouvoir librement dans`,fm:`Verbe Form I`,root:`س ب ح`},
      {w:`أَمَانَة`,p:`أمانة`,tr:`amāna`,fr:`dépôt, confiance, honnêteté`,fm:`Masdar Form I`,root:`أ م ن`},
      {w:`تَكَشَّفَ`,p:`تكشف`,tr:`takashafa`,fr:`se révéler, s'exposer, apparaître`,fm:`Verbe Form V`,root:`ك ش ف`},
      {w:`مُثْرَى`,p:`مثرى`,tr:`muthrā`,fr:`enrichi, prospéré`,fm:`Participe passif Form IV — défectueux`,root:`ث ر و`},
      {w:`أَبْدَعَ`,p:`أبدع`,tr:`abdaʿa`,fr:`créer, innover, faire preuve de génie`,fm:`Verbe Form IV`,root:`ب د ع`},
    ],
    grammar:{
      concept:`مُرَاجَعَةٌ شَامِلَةٌ C2 — Maîtrise des niveaux A1 à C2`,
      excerptW:`مَنْ أَحَبَّ اللهَ أَحَبَّ رَسُولَهُ · وَاعْلَمْ أَنَّ اللُّغَةَ أَمَانَةٌ فِي عُنُقِكَ`,
      excerptP:`من أحب الله أحب رسوله · واعلم أن اللغة أمانة في عنقك`,
      exp:`Ce dernier texte récapitule le parcours entier — de الجملة الاسمية (A1) au تناص الصوفي (C2). La citation d'al-Tha'alibi illustre le style de la محبة المتدرجة (l'amour en cascade), et l'impératif final (اقرأ · تأمل · استمع · اسبح) est un programme de vie pour l'arabophone accompli.`,
      gtblHeaders:[`Niveau`,`Concept fondateur`,`Textes de référence du site`,`Compétence acquise`],
      table:[
        {v:`A1`,f:`الجملة الاسمية`,m:`يَوْمٌ فِي الْمَدِينَةِ`,fr:`Construire une phrase sans verbe être`},
        {v:`A2`,f:`المضارع · الأمر`,m:`الرُّوتِين · فِي الْمَطْعَم`,fr:`Conjuguer · ordonner · narrer`},
        {v:`B1`,f:`الاستثناء · Forms V–X`,m:`التَّعْلِيم · الاقْتِصَاد`,fr:`Nuancer · employer les formes augmentées`},
        {v:`B2`,f:`التقديم · القسم · جناس`,m:`الهُوِيَّة · الفَلْسَفَة`,fr:`Rhétorique avancée · style littéraire`},
        {v:`C1`,f:`البلاغة · الاستدلال`,m:`الفَلْسَفَة الإِسْلَامِيَّة · ابن خلدون`,fr:`Analyser · argumenter · lire les classiques`},
        {v:`C2`,f:`التناص · التفسير`,m:`الفَاتِحَة · المعلقات · الصوفية`,fr:`Comprendre les textes authentiques fondateurs`},
      ],
      note:`🏆 <strong>Félicitations pour ce parcours complet</strong> — 96 textes · A1→C2 · ~1 600 mots cumulés. Tu lis maintenant l'arabe de la civilisation islamique dans toute sa richesse. اللهم انفعنا بما علمتنا وعلمنا ما ينفعنا.`,
    },
  };

  return [T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16];

}());
