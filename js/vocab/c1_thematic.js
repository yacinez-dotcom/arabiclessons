/* ═══════════════════════════════════════════════
   VOCABULAIRE THÉMATIQUE — C1
   ~100 mots · 5 thèmes
   RÈGLE : toutes les strings en backticks
═══════════════════════════════════════════════ */
'use strict';
var C1_VOCAB_THEMATIC = [
  {
    theme:`الْفَلْسَفَةُ الإِسْلَامِيَّةُ — Philosophie islamique`,
    words:[
      {w:`فَيْلَسُوف`,p:`فيلسوف`,tr:`faylasūf`,fr:`philosophe (pl. فَلَاسِفَة)`,fm:`Nom (emprunt grec)`,root:`ف ل س`},
      {w:`عَقْل`,p:`عقل`,tr:`ʿaql`,fr:`raison, intellect`,fm:`Masdar Form I`,root:`ع ق ل`},
      {w:`نَقْل`,p:`نقل`,tr:`naql`,fr:`transmission, texte révélé (opp. à عقل)`,fm:`Masdar Form I`,root:`ن ق ل`},
      {w:`وُجُود`,p:`وجود`,tr:`wujūd`,fr:`existence, être`,fm:`Masdar Form I`,root:`و ج د`},
      {w:`مَاهِيَّة`,p:`ماهية`,tr:`māhiyya`,fr:`essence, quiddité`,fm:`Nisba de مَاهِيَّة`,root:`م ا ه`},
      {w:`جَوْهَر`,p:`جوهر`,tr:`jawhar`,fr:`substance, essence`,fm:`Nom (emprunt perse)`,root:`ج و ه`},
      {w:`عَرَض`,p:`عرض`,tr:`ʿaraḍ`,fr:`accident (philosophie) (pl. أَعْرَاض)`,fm:`Masdar Form I`,root:`ع ر ض`},
      {w:`هَيُولَى`,p:`هيولى`,tr:`hayūlā`,fr:`matière première (hylé — grec)`,fm:`Nom (emprunt grec)`,root:`—`},
      {w:`صُورَة`,p:`صورة`,tr:`ṣūra`,fr:`forme (philosophique, pl. صُوَر)`,fm:`Nom — فُعْلَة`,root:`ص و ر`},
      {w:`قَضِيَّة`,p:`قضية`,tr:`qaḍiyya`,fr:`proposition (logique) (pl. قَضَايَا)`,fm:`Nom — فَعِيلَة`,root:`ق ض و`},
      {w:`بُرْهَان`,p:`برهان`,tr:`burhān`,fr:`démonstration, preuve rigoureuse`,fm:`Nom — فُعْلَان`,root:`ب ر ه`},
      {w:`مَنْطِق`,p:`منطق`,tr:`manṭiq`,fr:`logique (discipline)`,fm:`Masdar Form I`,root:`ن ط ق`},
      {w:`قِيَاس`,p:`قياس`,tr:`qiyās`,fr:`syllogisme, analogie`,fm:`Masdar Form I`,root:`ق ي س`},
      {w:`اسْتِقْرَاء`,p:`استقراء`,tr:`istiqrāʾ`,fr:`induction (logique)`,fm:`Masdar Form X`,root:`ق ر أ`},
      {w:`عِلَّة`,p:`علة`,tr:`ʿilla`,fr:`cause, raison (pl. عِلَل)`,fm:`Nom — géminé`,root:`ع ل ل`},
      {w:`مَعْلُول`,p:`معلول`,tr:`maʿlūl`,fr:`effet (de la cause)`,fm:`Participe passif Form I`,root:`ع ل ل`},
      {w:`تَعَالِيم`,p:`تعاليم`,tr:`taʿālīm`,fr:`enseignements (pl. de تَعْلِيم)`,fm:`Pl. de masdar Form II`,root:`ع ل م`},
      {w:`مَشَّاءِيَّة`,p:`مشائية`,tr:`masshāʾiyya`,fr:`école péripatéticienne (Aristote)`,fm:`Nisba de مشاء`,root:`م ش ي`},
      {w:`إِشْرَاقِيَّة`,p:`إشراقية`,tr:`ishrāqiyya`,fr:`illuminationnisme (Suhrawardi)`,fm:`Nisba`,root:`ش ر ق`},
      {w:`تَوَفُّر`,p:`توفر`,tr:`tawaffur`,fr:`disponibilité, présence`,fm:`Masdar Form V`,root:`و ف ر`}
    ]
  },
  {
    theme:`الْبَلَاغَةُ وَالنَّقْدُ الأَدَبِيُّ — Rhétorique et critique`,
    words:[
      {w:`بَلَاغَة`,p:`بلاغة`,tr:`balāgha`,fr:`rhétorique, éloquence`,fm:`Masdar Form I`,root:`ب ل غ`},
      {w:`فَصَاحَة`,p:`فصاحة`,tr:`faṣāḥa`,fr:`pureté linguistique, limpidité`,fm:`Masdar Form I`,root:`ف ص ح`},
      {w:`بَيَان`,p:`بيان`,tr:`bayān`,fr:`expression claire, rhétorique (2e branche)`,fm:`Masdar Form I`,root:`ب ي ن`},
      {w:`مَعَانٍ`,p:`معانٍ`,tr:`maʿānin`,fr:`sens, sémantique (1ère branche)`,fm:`Pl. de مَعْنَى`,root:`ع ن ي`},
      {w:`بَدِيع`,p:`بديع`,tr:`badīʿ`,fr:`ornements du style (3e branche)`,fm:`Nom — فَعِيل`,root:`ب د ع`},
      {w:`إِيجَاز`,p:`إيجاز`,tr:`ījāz`,fr:`concision`,fm:`Masdar Form IV`,root:`و ج ز`},
      {w:`إِطْنَاب`,p:`إطناب`,tr:`iṭnāb`,fr:`prolixité stylistique`,fm:`Masdar Form IV`,root:`ط ن ب`},
      {w:`مُسَاوَاة`,p:`مساواة`,tr:`musāwāh`,fr:`équilibre stylistique (نه qasida)`,fm:`Masdar Form III`,root:`س و ي`},
      {w:`تَشْبِيه`,p:`تشبيه`,tr:`tashbīh`,fr:`comparaison (simile)`,fm:`Masdar Form II`,root:`ش ب ه`},
      {w:`اسْتِعَارَة`,p:`استعارة`,tr:`istiʿāra`,fr:`métaphore`,fm:`Masdar Form X`,root:`ع و ر`},
      {w:`تَصْرِيحِيَّة`,p:`تصريحية`,tr:`taṣrīḥiyya`,fr:`métaphore explicite`,fm:`Nisba de تصريح`,root:`ص ر ح`},
      {w:`مَكْنِيَّة`,p:`مكنية`,tr:`makniyya`,fr:`métaphore implicite`,fm:`Nisba de مَكْنِيَّة`,root:`ك ن و`},
      {w:`كِنَايَة`,p:`كناية`,tr:`kināya`,fr:`allusion, métonymie`,fm:`Masdar Form I`,root:`ك ن و`},
      {w:`مَجَاز`,p:`مجاز`,tr:`majāz`,fr:`sens figuré, métaphore`,fm:`Masdar Form I`,root:`ج و ز`},
      {w:`مَجَاز مُرْسَل`,p:`مجاز مرسل`,tr:`majāz mursal`,fr:`métonymie`,fm:`Syntagme`,root:`ج و ز`},
      {w:`جِنَاس`,p:`جناس`,tr:`jinās`,fr:`paronomase, jeu de mots`,fm:`Masdar Form I`,root:`ج ن س`},
      {w:`طِبَاق`,p:`طباق`,tr:`ṭibāq`,fr:`antithèse`,fm:`Masdar Form III`,root:`ط ب ق`},
      {w:`مُقَابَلَة`,p:`مقابلة`,tr:`muqābala`,fr:`parallélisme inversé`,fm:`Masdar Form III`,root:`ق ب ل`},
      {w:`السَّجْع`,p:`السجع`,tr:`as-sajʿ`,fr:`prose rimée`,fm:`Masdar Form I`,root:`س ج ع`},
      {w:`مُقْتَضَى الْحَال`,p:`مقتضى الحال`,tr:`muqtaḍā al-ḥāl`,fr:`exigences de la situation`,fm:`Syntagme`,root:`ق ض و`}
    ]
  },
  {
    theme:`أُصُولُ الْفِقْهِ — Fondements du droit islamique`,
    words:[
      {w:`أُصُول الْفِقْه`,p:`أصول الفقه`,tr:`uṣūl al-fiqh`,fr:`principes du droit islamique`,fm:`Idāfa`,root:`أ ص ل`},
      {w:`اسْتِنْبَاط`,p:`استنباط`,tr:`istinbāṭ`,fr:`déduction du jugement`,fm:`Masdar Form X`,root:`ن ب ط`},
      {w:`دَلَالَة`,p:`دلالة`,tr:`dalāla`,fr:`signification (textuelle)`,fm:`Masdar Form I`,root:`د ل ل`},
      {w:`نَصّ`,p:`نص`,tr:`naṣṣ`,fr:`texte explicite (pl. نُصُوص)`,fm:`Nom — géminé`,root:`ن ص ص`},
      {w:`ظَاهِر`,p:`ظاهر`,tr:`ẓāhir`,fr:`sens apparent (texte)`,fm:`Participe actif Form I`,root:`ظ ه ر`},
      {w:`مُشْكِل`,p:`مشكل`,tr:`mushkil`,fr:`texte ambigu`,fm:`Participe actif Form IV`,root:`ش ك ل`},
      {w:`مُجْمَل`,p:`مجمل`,tr:`mujmal`,fr:`texte général non spécifié`,fm:`Participe passif Form IV`,root:`ج م ل`},
      {w:`مُبَيَّن`,p:`مبين`,tr:`mubayyan`,fr:`texte expliqué et clarifié`,fm:`Participe passif Form II`,root:`ب ي ن`},
      {w:`أَمْر`,p:`أمر`,tr:`amr`,fr:`commandement (forme verbale)`,fm:`Nom — فَعْل`,root:`أ م ر`},
      {w:`نَهْي`,p:`نهي`,tr:`nahy`,fr:`interdiction (forme verbale)`,fm:`Masdar Form I`,root:`ن ه ي`},
      {w:`خَاصّ`,p:`خاص`,tr:`khāṣṣ`,fr:`texte spécifique`,fm:`Adj — géminé`,root:`خ ص ص`},
      {w:`عَامّ`,p:`عام`,tr:`ʿāmm`,fr:`texte général, universel`,fm:`Adj — géminé`,root:`ع م م`},
      {w:`مُطْلَق`,p:`مطلق`,tr:`muṭlaq`,fr:`non conditionné, absolu`,fm:`Participe passif Form IV`,root:`ط ل ق`},
      {w:`مُقَيَّد`,p:`مقيد`,tr:`muqayyad`,fr:`conditionné, restreint`,fm:`Participe passif Form II`,root:`ق ي د`},
      {w:`حَقِيقَة`,p:`حقيقة`,tr:`ḥaqīqa`,fr:`sens propre (littéral)`,fm:`Nom — فَعِيلَة`,root:`ح ق ق`},
      {w:`مَجَاز`,p:`مجاز`,tr:`majāz`,fr:`sens figuré`,fm:`Masdar Form I`,root:`ج و ز`},
      {w:`مَفْهُوم الْمُوَافَقَة`,p:`مفهوم الموافقة`,tr:`mafhūm al-muwāfaqa`,fr:`argument a fortiori`,fm:`Idāfa`,root:`و ف ق`},
      {w:`مَفْهُوم الْمُخَالَفَة`,p:`مفهوم المخالفة`,tr:`mafhūm al-mukhālafa`,fr:`argument a contrario`,fm:`Idāfa`,root:`خ ل ف`},
      {w:`تَعَارُض`,p:`تعارض`,tr:`taʿāruḍ`,fr:`conflit entre textes`,fm:`Masdar Form VI`,root:`ع ر ض`},
      {w:`تَرْجِيح`,p:`ترجيح`,tr:`tarjīḥ`,fr:`pondération des arguments`,fm:`Masdar Form II`,root:`ر ج ح`}
    ]
  },
  {
    theme:`عِلْمُ الْكَلَامِ وَالتَّصَوُّفُ — Théologie et soufisme`,
    words:[
      {w:`عِلْم الْكَلَام`,p:`علم الكلام`,tr:`ʿilm al-kalām`,fr:`théologie islamique scolastique`,fm:`Idāfa`,root:`ك ل م`},
      {w:`مُتَكَلِّم`,p:`متكلم`,tr:`mutakallim`,fr:`théologien scolastique`,fm:`Participe actif Form V`,root:`ك ل م`},
      {w:`مُعْتَزِلَة`,p:`معتزلة`,tr:`muʿtazila`,fr:`Mutazilites (école rationaliste)`,fm:`Participe passif Form VIII — pl.`,root:`ع ز ل`},
      {w:`أَشَاعِرَة`,p:`أشاعرة`,tr:`ashāʿira`,fr:`Ash'arites (école dominante)`,fm:`Pl. de أَشْعَرِيّ`,root:`ش ع ر`},
      {w:`مَاتُرِيدِيَّة`,p:`ماتريدية`,tr:`māturīdiyya`,fr:`Maturidites (école de Samarkand)`,fm:`Nisba`,root:`—`},
      {w:`صِفَات اللهِ`,p:`صفات الله`,tr:`ṣifāt allāh`,fr:`attributs de Dieu`,fm:`Idāfa`,root:`ص ف ت`},
      {w:`تَنْزِيه`,p:`تنزيه`,tr:`tanzīh`,fr:`transcendance divine (négation anthropomorphisme)`,fm:`Masdar Form II`,root:`ن ز ه`},
      {w:`تَشْبِيه`,p:`تشبيه`,tr:`tashbīh`,fr:`anthropomorphisme (problème théologique)`,fm:`Masdar Form II`,root:`ش ب ه`},
      {w:`جَبْر`,p:`جبر`,tr:`jabr`,fr:`prédéterminisme (libre arbitre nié)`,fm:`Masdar Form I`,root:`ج ب ر`},
      {w:`اخْتِيَار`,p:`اختيار`,tr:`ikhtiyār`,fr:`libre arbitre`,fm:`Masdar Form VIII`,root:`خ ي ر`},
      {w:`تَصَوُّف`,p:`تصوف`,tr:`taṣawwuf`,fr:`soufisme`,fm:`Masdar Form V`,root:`ص و ف`},
      {w:`طَرِيقَة`,p:`طريقة`,tr:`ṭarīqa`,fr:`confrérie soufie (pl. طُرُق)`,fm:`Nom — فَعِيلَة`,root:`ط ر ق`},
      {w:`شَيْخ الطَّرِيقَة`,p:`شيخ الطريقة`,tr:`shaykh aṭ-ṭarīqa`,fr:`maître spirituel`,fm:`Idāfa`,root:`ط ر ق`},
      {w:`مُرِيد`,p:`مريد`,tr:`murīd`,fr:`disciple soufi`,fm:`Participe actif Form IV`,root:`ر و د`},
      {w:`حَال`,p:`حال`,tr:`ḥāl`,fr:`état spirituel (don divin)`,fm:`Nom — فَعَل`,root:`ح و ل`},
      {w:`مَقَام`,p:`مقام`,tr:`maqām`,fr:`station spirituelle (acquise)`,fm:`Nom de lieu Form I`,root:`ق و م`},
      {w:`مَحَبَّة`,p:`محبة`,tr:`maḥabba`,fr:`amour divin`,fm:`Masdar Form I`,root:`ح ب ب`},
      {w:`مَعْرِفَة`,p:`معرفة`,tr:`maʿrifa`,fr:`gnose soufie, connaissance mystique`,fm:`Masdar Form I`,root:`ع ر ف`},
      {w:`فَنَاء`,p:`فناء`,tr:`fanāʾ`,fr:`extinction du moi (dans Dieu)`,fm:`Masdar Form I`,root:`ف ن ي`},
      {w:`بَقَاء`,p:`بقاء`,tr:`baqāʾ`,fr:`subsistance (après l'extinction)`,fm:`Masdar Form I`,root:`ب ق ي`}
    ]
  },
  {
    theme:`اللُّغَةُ الْعَرَبِيَّةُ وَعُلُومُهَا — Sciences de la langue arabe`,
    words:[
      {w:`عِلْم النَّحْو`,p:`علم النحو`,tr:`ʿilm an-naḥw`,fr:`grammaire arabe`,fm:`Idāfa`,root:`ن ح و`},
      {w:`عِلْم الصَّرْف`,p:`علم الصرف`,tr:`ʿilm aṣ-ṣarf`,fr:`morphologie arabe`,fm:`Idāfa`,root:`ص ر ف`},
      {w:`عِلْم الدَّلَالَة`,p:`علم الدلالة`,tr:`ʿilm ad-dalāla`,fr:`sémantique`,fm:`Idāfa`,root:`د ل ل`},
      {w:`عِلْم الأَصْوَات`,p:`علم الأصوات`,tr:`ʿilm al-aṣwāt`,fr:`phonologie`,fm:`Idāfa`,root:`ص و ت`},
      {w:`عِلْم الْعَرُوض`,p:`علم العروض`,tr:`ʿilm al-ʿarūḍ`,fr:`prosodie (mètres poétiques)`,fm:`Idāfa`,root:`ع ر ض`},
      {w:`إِعْرَاب`,p:`إعراب`,tr:`iʿrāb`,fr:`désinentiel (analyse grammaticale)`,fm:`Masdar Form IV`,root:`ع ر ب`},
      {w:`تَشْكِيل`,p:`تشكيل`,tr:`tashkīl`,fr:`voyellation (tashkeel)`,fm:`Masdar Form II`,root:`ش ك ل`},
      {w:`وَزْن الْكَلِمَة`,p:`وزن الكلمة`,tr:`wazn al-kalima`,fr:`schème morphologique`,fm:`Idāfa`,root:`و ز ن`},
      {w:`مِيزَان الصَّرْفِيّ`,p:`ميزان صرفي`,tr:`mīzān ṣarfī`,fr:`balance morphologique (ف ع ل)`,fm:`Syntagme`,root:`و ز ن`},
      {w:`اشْتِقَاق`,p:`اشتقاق`,tr:`ishtiqāq`,fr:`dérivation lexicale`,fm:`Masdar Form VIII`,root:`ش ق ق`},
      {w:`جَذْر`,p:`جذر`,tr:`jadhir`,fr:`racine (trilitère) (pl. جُذُور)`,fm:`Nom — فَعْل`,root:`ج ذ ر`},
      {w:`ثُلَاثِيّ`,p:`ثلاثي`,tr:`thulāthī`,fr:`trilitère`,fm:`Nisba de ثُلَاث`,root:`ث ل ث`},
      {w:`رُبَاعِيّ`,p:`رباعي`,tr:`rubāʿī`,fr:`quadrilitère`,fm:`Nisba de رُبَاع`,root:`ر ب ع`},
      {w:`مُجَرَّد`,p:`مجرد`,tr:`mujarrad`,fr:`radical (verbe simple)`,fm:`Participe passif Form II`,root:`ج ر د`},
      {w:`مَزِيد`,p:`مزيد`,tr:`mazīd`,fr:`augmenté (forme verbale étendue)`,fm:`Participe passif Form II`,root:`ز ي د`},
      {w:`أَفْعَال الشُّذُوذ`,p:`أفعال الشذوذ`,tr:`afʿāl ash-shudhūdh`,fr:`verbes irréguliers`,fm:`Idāfa`,root:`ش ذ ذ`},
      {w:`دِخِيل`,p:`دخيل`,tr:`dakhīl`,fr:`emprunt lexical`,fm:`Nom — فَعِيل`,root:`د خ ل`},
      {w:`مُوَلَّد`,p:`مولد`,tr:`muwallad`,fr:`néologisme`,fm:`Participe passif Form II`,root:`و ل د`},
      {w:`مُصْطَلَح`,p:`مصطلح`,tr:`muṣṭalaḥ`,fr:`terme technique`,fm:`Participe passif Form VIII`,root:`ص ل ح`},
      {w:`فُصْحَى`,p:`فصحى`,tr:`fuṣḥā`,fr:`arabe classique/littéraire`,fm:`Adjectif élatif fém.`,root:`ف ص ح`}
    ]
  }
];
