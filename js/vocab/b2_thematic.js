/* ═══════════════════════════════════════════════
   VOCABULAIRE THÉMATIQUE — B2
   ~120 mots · 6 thèmes
   RÈGLE : toutes les strings en backticks
═══════════════════════════════════════════════ */
'use strict';
var B2_VOCAB_THEMATIC = [
  {
    theme:`الاقْتِصَادُ الإِسْلَامِيُّ — Finance islamique`,
    words:[
      {w:`رِبَا`,p:`ربا`,tr:`ribā`,fr:`usure, intérêt financier (interdit)`,fm:`Nom — défectueux`,root:`ر ب و`},
      {w:`صُكُوك`,p:`صكوك`,tr:`ṣukūk`,fr:`sukuk (obligations islamiques)`,fm:`Pl. de صَكّ`,root:`ص ك ك`},
      {w:`مُرَابَحَة`,p:`مرابحة`,tr:`murābaḥa`,fr:`murabaha (financement sans intérêt)`,fm:`Masdar Form III`,root:`ر ب ح`},
      {w:`مُضَارَبَة`,p:`مضاربة`,tr:`muḍāraba`,fr:`partenariat d'investissement islamique`,fm:`Masdar Form III`,root:`ض ر ب`},
      {w:`مُشَارَكَة`,p:`مشاركة`,tr:`mushāraka`,fr:`participation, co-investissement islamique`,fm:`Masdar Form III`,root:`ش ر ك`},
      {w:`إِجَارَة`,p:`إجارة`,tr:`ijāra`,fr:`crédit-bail islamique, location`,fm:`Masdar Form IV`,root:`أ ج ر`},
      {w:`وَقْف`,p:`وقف`,tr:`waqf`,fr:`fondation pieuse islamique`,fm:`Masdar Form I`,root:`و ق ف`},
      {w:`بَنْك إِسْلَامِيّ`,p:`بنك إسلامي`,tr:`bank islāmī`,fr:`banque islamique`,fm:`Syntagme`,root:`—`},
      {w:`مَالِيَّة إِسْلَامِيَّة`,p:`مالية إسلامية`,tr:`māliyya islāmiyya`,fr:`finance islamique`,fm:`Syntagme`,root:`م و ل`},
      {w:`هَيْئَة رِقَابِيَّة`,p:`هيئة رقابية`,tr:`hayʾa riqābiyya`,fr:`comité de surveillance (charia)`,fm:`Syntagme`,root:`ر ق ب`},
      {w:`تَحَرُّجٌ مِنَ الرِّبَا`,p:`تحرج من الربا`,tr:`taḥarruj min ar-ribā`,fr:`évitement de l'usure`,fm:`Syntagme`,root:`ح ر ج`},
      {w:`زَكَاة الْمَال`,p:`زكاة المال`,tr:`zakāt al-māl`,fr:`zakat sur la richesse`,fm:`Idāfa`,root:`ز ك و`},
      {w:`نِصَاب`,p:`نصاب`,tr:`niṣāb`,fr:`seuil de la zakat`,fm:`Nom — فِعَال`,root:`ن ص ب`},
      {w:`حَوْل`,p:`حول`,tr:`ḥawl`,fr:`année lunaire (pour la zakat)`,fm:`Nom — فَعْل`,root:`ح و ل`},
      {w:`تَكَافُل`,p:`تكافل`,tr:`takāful`,fr:`assurance islamique (takaful)`,fm:`Masdar Form VI`,root:`ك ف ل`},
      {w:`اسْتِثْمَار حَلَال`,p:`استثمار حلال`,tr:`istithmār ḥalāl`,fr:`investissement licite`,fm:`Syntagme`,root:`ث م ر`},
      {w:`مَبْدَأ الْمُشَارَكَة`,p:`مبدأ المشاركة`,tr:`mabdaʾ al-mushāraka`,fr:`principe de partage des risques`,fm:`Idāfa`,root:`ش ر ك`},
      {w:`مَقَاصِد الشَّرِيعَة`,p:`مقاصد الشريعة`,tr:`maqāṣid ash-sharīʿa`,fr:`finalités de la loi islamique`,fm:`Idāfa`,root:`ق ص د`},
      {w:`مَصْلَحَة`,p:`مصلحة`,tr:`maṣlaḥa`,fr:`intérêt public (concept juridique)`,fm:`Nom de lieu Form I`,root:`ص ل ح`},
      {w:`ضَرُورَة`,p:`ضرورة`,tr:`ḍarūra`,fr:`nécessité (permet l'interdit)`,fm:`Masdar Form I`,root:`ض ر ر`}
    ]
  },
  {
    theme:`الْقَانُونُ الدَّوْلِيُّ وَحُقُوقُ الإِنْسَانِ — Droit international`,
    words:[
      {w:`قَانُون دَوْلِيّ`,p:`قانون دولي`,tr:`qānūn dawlī`,fr:`droit international`,fm:`Syntagme`,root:`ق ن ن`},
      {w:`مَحْكَمَة جِنَائِيَّة`,p:`محكمة جنائية`,tr:`maḥkama jināniyya`,fr:`cour pénale internationale`,fm:`Syntagme`,root:`ح ك م`},
      {w:`مُعَاهَدَة دَوْلِيَّة`,p:`معاهدة دولية`,tr:`muʿāhada dawliyya`,fr:`traité international`,fm:`Syntagme`,root:`ع ه د`},
      {w:`مُنَظَّمَة الأُمَم الْمُتَّحِدَة`,p:`منظمة الأمم المتحدة`,tr:`munazzamat al-umam al-muttaḥida`,fr:`Organisation des Nations Unies`,fm:`Idāfa`,root:`أ م م`},
      {w:`لاجِئ`,p:`لاجئ`,tr:`lājiʾ`,fr:`réfugié (pl. لَاجِئُون)`,fm:`Participe actif Form I`,root:`ل ج أ`},
      {w:`حَقّ اللُّجُوء`,p:`حق اللجوء`,tr:`ḥaqq al-lujūʾ`,fr:`droit d'asile`,fm:`Idāfa`,root:`ل ج أ`},
      {w:`إِبَادَة جَمَاعِيَّة`,p:`إبادة جماعية`,tr:`ibāda jamāʿiyya`,fr:`génocide`,fm:`Syntagme`,root:`ب و د`},
      {w:`جَرِيمَة حَرْب`,p:`جريمة حرب`,tr:`jarīmat ḥarb`,fr:`crime de guerre`,fm:`Idāfa`,root:`ج ر م`},
      {w:`سِيَادَة وَطَنِيَّة`,p:`سيادة وطنية`,tr:`siyāda waṭaniyya`,fr:`souveraineté nationale`,fm:`Syntagme`,root:`س و د`},
      {w:`حَظْر`,p:`حظر`,tr:`ḥaẓr`,fr:`embargo, interdiction`,fm:`Masdar Form I`,root:`ح ظ ر`},
      {w:`عُقُوبَات`,p:`عقوبات`,tr:`ʿuqūbāt`,fr:`sanctions (pl. de عُقُوبَة)`,fm:`Pl. de عُقُوبَة`,root:`ع ق ب`},
      {w:`تَسْوِيَة سَلْمِيَّة`,p:`تسوية سلمية`,tr:`taswiya salmiyya`,fr:`règlement pacifique`,fm:`Syntagme`,root:`س ل م`},
      {w:`وَسَاطَة`,p:`وساطة`,tr:`wasāṭa`,fr:`médiation`,fm:`Masdar Form I`,root:`و س ط`},
      {w:`مَجْلِس الأَمْن`,p:`مجلس الأمن`,tr:`majlis al-amn`,fr:`Conseil de sécurité (ONU)`,fm:`Idāfa`,root:`أ م ن`},
      {w:`تَدَخُّل إِنْسَانِيّ`,p:`تدخل إنساني`,tr:`tadakhkhul insānī`,fr:`intervention humanitaire`,fm:`Syntagme`,root:`د خ ل`},
      {w:`اتِّفَاقِيَّة جِنِيف`,p:`اتفاقية جنيف`,tr:`ittifāqiyyat jīnīf`,fr:`Conventions de Genève`,fm:`Idāfa`,root:`—`},
      {w:`حِيَادِيَّة`,p:`حيادية`,tr:`ḥiyādiyya`,fr:`neutralité`,fm:`Nisba de حِيَاد`,root:`ح ي د`},
      {w:`تَعَاوُن دَوْلِيّ`,p:`تعاون دولي`,tr:`taʿāwun dawlī`,fr:`coopération internationale`,fm:`Syntagme`,root:`ع و ن`},
      {w:`نِزَاع`,p:`نزاع`,tr:`nizāʿ`,fr:`conflit, différend (pl. نِزَاعَات)`,fm:`Masdar Form III`,root:`ن ز ع`},
      {w:`اتِّفَاق سَلَام`,p:`اتفاق سلام`,tr:`ittifāq salām`,fr:`accord de paix`,fm:`Idāfa`,root:`س ل م`}
    ]
  },
  {
    theme:`الْفَلْسَفَةُ الاجْتِمَاعِيَّةُ — Philosophie sociale`,
    words:[
      {w:`عَقْد اجْتِمَاعِيّ`,p:`عقد اجتماعي`,tr:`ʿaqd ijtimāʿī`,fr:`contrat social`,fm:`Syntagme`,root:`ع ق د`},
      {w:`سُلْطَة`,p:`سلطة`,tr:`sulṭa`,fr:`pouvoir, autorité (pl. سُلُطَات)`,fm:`Masdar Form I`,root:`س ل ط`},
      {w:`شَرْعِيَّة`,p:`شرعية`,tr:`sharʿiyya`,fr:`légitimité`,fm:`Nisba de شَرْع`,root:`ش ر ع`},
      {w:`أَيْدِيُولُوجِيَّا`,p:`أيديولوجيا`,tr:`aydiyūlūjiyā`,fr:`idéologie`,fm:`Nom (emprunt)`,root:`—`},
      {w:`هِيمَنَة`,p:`هيمنة`,tr:`haymana`,fr:`hégémonie, domination`,fm:`Masdar quadrilitère`,root:`ه ي م`},
      {w:`صِرَاع الْحَضَارَات`,p:`صراع الحضارات`,tr:`ṣirāʿ al-ḥaḍārāt`,fr:`clash des civilisations`,fm:`Idāfa`,root:`ح ض ر`},
      {w:`كَوْنِيَّة`,p:`كونية`,tr:`kawniyya`,fr:`universalisme`,fm:`Nisba de كَوْن`,root:`ك و ن`},
      {w:`نِسْبِيَّة`,p:`نسبية`,tr:`nisbiyya`,fr:`relativisme`,fm:`Nisba de نِسْبَة`,root:`ن س ب`},
      {w:`تَنْوِير`,p:`تنوير`,tr:`tanwīr`,fr:`Lumières, Aufklärung`,fm:`Masdar Form II`,root:`ن و ر`},
      {w:`حَدَاثَة`,p:`حداثة`,tr:`ḥadātha`,fr:`modernité`,fm:`Masdar Form I`,root:`ح د ث`},
      {w:`مَا بَعْدَ الْحَدَاثَة`,p:`ما بعد الحداثة`,tr:`mā baʿd al-ḥadātha`,fr:`postmodernité`,fm:`Syntagme`,root:`ح د ث`},
      {w:`عَلْمَانِيَّة`,p:`علمانية`,tr:`ʿalmāniyya`,fr:`laïcité, sécularisme`,fm:`Nisba`,root:`ع ل م`},
      {w:`لِيبَرَالِيَّة`,p:`ليبرالية`,tr:`lībārāliyya`,fr:`libéralisme`,fm:`Nom (emprunt)`,root:`—`},
      {w:`اشْتِرَاكِيَّة`,p:`اشتراكية`,tr:`ishtirākiyya`,fr:`socialisme`,fm:`Nisba de اشتراك`,root:`ش ر ك`},
      {w:`مُحَافَظَة`,p:`محافظة`,tr:`muḥāfaẓa`,fr:`conservatisme`,fm:`Masdar Form III`,root:`ح ف ظ`},
      {w:`شُمُولِيَّة`,p:`شمولية`,tr:`shumūliyya`,fr:`totalitarisme`,fm:`Nisba de شُمُول`,root:`ش م ل`},
      {w:`عَدَالَة اجْتِمَاعِيَّة`,p:`عدالة اجتماعية`,tr:`ʿadāla ijtimāʿiyya`,fr:`justice sociale`,fm:`Syntagme`,root:`ع د ل`},
      {w:`تَوْزِيع الثَّرْوَة`,p:`توزيع الثروة`,tr:`tawzīʿ ath-tharwa`,fr:`redistribution des richesses`,fm:`Idāfa`,root:`ث ر و`},
      {w:`مُجْتَمَع مَدَنِيّ`,p:`مجتمع مدني`,tr:`mujtamaʿ madanī`,fr:`société civile`,fm:`Syntagme`,root:`م د ن`},
      {w:`دَوْلَة الرَّفَاه`,p:`دولة الرفاه`,tr:`dawlat ar-rafāh`,fr:`État-providence`,fm:`Idāfa`,root:`ر ف ه`}
    ]
  },
  {
    theme:`مُصْطَلَحَاتٌ قُرْآنِيَّةٌ — Terminologie coranique`,
    words:[
      {w:`تَوْحِيد`,p:`توحيد`,tr:`tawḥīd`,fr:`unicité divine`,fm:`Masdar Form II`,root:`و ح د`},
      {w:`تَنْزِيل`,p:`تنزيل`,tr:`tanzīl`,fr:`révélation descendante`,fm:`Masdar Form II`,root:`ن ز ل`},
      {w:`وَحْي`,p:`وحي`,tr:`waḥy`,fr:`inspiration divine, révélation`,fm:`Masdar Form I`,root:`و ح ي`},
      {w:`مُحْكَم`,p:`محكم`,tr:`muḥkam`,fr:`verset clair et non abrogé`,fm:`Participe passif Form IV`,root:`ح ك م`},
      {w:`مُتَشَابِه`,p:`متشابه`,tr:`mutashābih`,fr:`verset ambigu, allégorique`,fm:`Participe actif Form VI`,root:`ش ب ه`},
      {w:`نَاسِخ`,p:`ناسخ`,tr:`nāsikh`,fr:`verset abrogatif`,fm:`Participe actif Form I`,root:`ن س خ`},
      {w:`مَنْسُوخ`,p:`منسوخ`,tr:`mansūkh`,fr:`verset abrogé`,fm:`Participe passif Form I`,root:`ن س خ`},
      {w:`أَسْبَاب النُّزُول`,p:`أسباب النزول`,tr:`asbāb an-nuzūl`,fr:`occasions de la révélation`,fm:`Idāfa`,root:`ن ز ل`},
      {w:`مَكِّيّ`,p:`مكي`,tr:`makkī`,fr:`révélé à La Mecque (verset)`,fm:`Nisba`,root:`م ك ك`},
      {w:`مَدَنِيّ`,p:`مدني`,tr:`madanī`,fr:`révélé à Médine (verset)`,fm:`Nisba`,root:`م د ن`},
      {w:`قِرَاءَات`,p:`قراءات`,tr:`qirāʾāt`,fr:`lectures canoniques du Coran`,fm:`Pl. de قِرَاءَة`,root:`ق ر أ`},
      {w:`تَجْوِيد`,p:`تجويد`,tr:`tajwīd`,fr:`règles de récitation`,fm:`Masdar Form II`,root:`ج و د`},
      {w:`حَافِظ`,p:`حافظ`,tr:`ḥāfiẓ`,fr:`mémorisateur du Coran`,fm:`Participe actif Form I`,root:`ح ف ظ`},
      {w:`إِعْجَاز`,p:`إعجاز`,tr:`iʿjāz`,fr:`inimitabilité (du Coran)`,fm:`Masdar Form IV`,root:`ع ج ز`},
      {w:`مُتَوَاتِر`,p:`متواتر`,tr:`mutawātir`,fr:`transmis par chaîne ininterrompue`,fm:`Participe actif Form VI`,root:`و ت ر`},
      {w:`آحَاد`,p:`آحاد`,tr:`āḥād`,fr:`rapporté par peu de transmetteurs`,fm:`Pl. de أَحَد`,root:`أ ح د`},
      {w:`إِسْرَائِيلِيَّات`,p:`إسرائيليات`,tr:`isrāʾīliyyāt`,fr:`récits d'origine juive dans le tafsir`,fm:`Pl. nisba`,root:`—`},
      {w:`غَرِيب الْقُرْآن`,p:`غريب القرآن`,tr:`gharīb al-qurʾān`,fr:`mots rares du Coran`,fm:`Idāfa`,root:`غ ر ب`},
      {w:`أُمُّ الْكِتَاب`,p:`أم الكتاب`,tr:`umm al-kitāb`,fr:`Mère du Livre (La Fatiha)`,fm:`Idāfa`,root:`أ م م`},
      {w:`ذِكْر`,p:`ذكر`,tr:`dhikr`,fr:`le Rappel (autre nom du Coran)`,fm:`Masdar Form I`,root:`ذ ك ر`}
    ]
  },
  {
    theme:`الْفِقْهُ وَالأَحْكَامُ — Fiqh et jugements islamiques`,
    words:[
      {w:`مَذْهَب`,p:`مذهب`,tr:`madhhab`,fr:`école juridique (pl. مَذَاهِب)`,fm:`Nom — مَفْعَل`,root:`ذ ه ب`},
      {w:`حَنَفِيّ`,p:`حنفي`,tr:`ḥanafī`,fr:`hanéfite (école d'Abou Hanifa)`,fm:`Nisba`,root:`ح ن ف`},
      {w:`مَالِكِيّ`,p:`مالكي`,tr:`mālikī`,fr:`malékite (école de Malik)`,fm:`Nisba`,root:`م ل ك`},
      {w:`شَافِعِيّ`,p:`شافعي`,tr:`shāfiʿī`,fr:`chaféite (école d'Al-Shafi'i)`,fm:`Nisba`,root:`ش ف ع`},
      {w:`حَنْبَلِيّ`,p:`حنبلي`,tr:`ḥanbalī`,fr:`hanbalite (école d'Ibn Hanbal)`,fm:`Nisba`,root:`ح ن ب`},
      {w:`اجْتِهَاد`,p:`اجتهاد`,tr:`ijtihād`,fr:`effort de déduction juridique`,fm:`Masdar Form VIII`,root:`ج ه د`},
      {w:`قِيَاس`,p:`قياس`,tr:`qiyās`,fr:`analogie juridique`,fm:`Masdar Form I`,root:`ق ي س`},
      {w:`إِجْمَاع`,p:`إجماع`,tr:`ijmāʿ`,fr:`consensus des savants`,fm:`Masdar Form IV`,root:`ج م ع`},
      {w:`اسْتِحْسَان`,p:`استحسان`,tr:`istiḥsān`,fr:`préférence juridique (Hanéfite)`,fm:`Masdar Form X`,root:`ح س ن`},
      {w:`مَصْلَحَة مُرْسَلَة`,p:`مصلحة مرسلة`,tr:`maṣlaḥa mursala`,fr:`intérêt non textuel (Malékite)`,fm:`Syntagme`,root:`ص ل ح`},
      {w:`سَدُّ الذَّرَائِع`,p:`سد الذرائع`,tr:`sadd adh-dharāʾiʿ`,fr:`blocage des moyens (préventif)`,fm:`Idāfa`,root:`ذ ر ع`},
      {w:`خِلَاف`,p:`خلاف`,tr:`khilāf`,fr:`divergence d'opinion`,fm:`Nom — فِعَال`,root:`خ ل ف`},
      {w:`فَتْوَى`,p:`فتوى`,tr:`fatwā`,fr:`avis juridique islamique`,fm:`Nom — défectueux`,root:`ف ت و`},
      {w:`مُفْتٍ`,p:`مفتٍ`,tr:`muftin`,fr:`mufti (émetteur de fatwas)`,fm:`Participe actif Form IV — défectueux`,root:`ف ت و`},
      {w:`نِكَاح`,p:`نكاح`,tr:`nikāḥ`,fr:`mariage islamique`,fm:`Masdar Form I`,root:`ن ك ح`},
      {w:`طَلَاق`,p:`طلاق`,tr:`ṭalāq`,fr:`répudiation, divorce`,fm:`Masdar Form I`,root:`ط ل ق`},
      {w:`مَهْر`,p:`مهر`,tr:`mahr`,fr:`dot (cadeau de l'époux)`,fm:`Masdar Form I`,root:`م ه ر`},
      {w:`إِرْث`,p:`إرث`,tr:`irth`,fr:`héritage islamique`,fm:`Masdar Form I`,root:`و ر ث`},
      {w:`حُدُود`,p:`حدود`,tr:`ḥudūd`,fr:`peines coraniques fixes`,fm:`Pl. de حَدّ`,root:`ح د د`},
      {w:`تَعْزِير`,p:`تعزير`,tr:`taʿzīr`,fr:`peine discrétionnaire`,fm:`Masdar Form II`,root:`ع ز ر`}
    ]
  },
  {
    theme:`الإِعْلَامُ الرَّقْمِيُّ وَمُجْتَمَعُ الْمَعْرِفَةِ — Numérique et société du savoir`,
    words:[
      {w:`ذَكَاء اصْطِنَاعِيّ`,p:`ذكاء اصطناعي`,tr:`dhakāʾ iṣṭināʿī`,fr:`intelligence artificielle`,fm:`Syntagme`,root:`ذ ك و`},
      {w:`تَعَلُّم عَمِيق`,p:`تعلم عميق`,tr:`taʿallum ʿamīq`,fr:`apprentissage profond (deep learning)`,fm:`Syntagme`,root:`ع ل م`},
      {w:`شَبَكَة عَصَبِيَّة`,p:`شبكة عصبية`,tr:`shabaka ʿaṣabiyya`,fr:`réseau neuronal`,fm:`Syntagme`,root:`ع ص ب`},
      {w:`مَعَالَجَة لُغَوِيَّة`,p:`معالجة لغوية`,tr:`muʿālaja lughawiyya`,fr:`traitement du langage naturel (NLP)`,fm:`Syntagme`,root:`ع ل ج`},
      {w:`بَيَانَات ضَخْمَة`,p:`بيانات ضخمة`,tr:`bayānāt ḍakhma`,fr:`big data`,fm:`Syntagme`,root:`ب ي ن`},
      {w:`حَوْسَبَة سَحَابِيَّة`,p:`حوسبة سحابية`,tr:`ḥawsaba saḥābiyya`,fr:`cloud computing`,fm:`Syntagme`,root:`ح س ب`},
      {w:`سَلَامَة مَعْلُومَاتِيَّة`,p:`سلامة معلوماتية`,tr:`salāma maʿlūmātiyya`,fr:`cybersécurité`,fm:`Syntagme`,root:`س ل م`},
      {w:`خَوَارِزْمِيَّة`,p:`خوارزمية`,tr:`khawārizmiyya`,fr:`algorithme`,fm:`Nisba de الخوارزمي`,root:`—`},
      {w:`نَمُوذَج لُغَوِيّ`,p:`نموذج لغوي`,tr:`namūdhaj lughawī`,fr:`modèle de langage (LLM)`,fm:`Syntagme`,root:`ن م ذ`},
      {w:`أَتْمَتَة`,p:`أتمتة`,tr:`atmata`,fr:`automatisation`,fm:`Masdar quadrilitère`,root:`—`},
      {w:`اقْتِصَاد رَقْمِيّ`,p:`اقتصاد رقمي`,tr:`iqtiṣād raqmī`,fr:`économie numérique`,fm:`Syntagme`,root:`ر ق م`},
      {w:`عُمْلَة رَقْمِيَّة`,p:`عملة رقمية`,tr:`ʿumla raqmiyya`,fr:`crypto-monnaie, monnaie numérique`,fm:`Syntagme`,root:`ع م ل`},
      {w:`نَقْل الْمَعْرِفَة`,p:`نقل المعرفة`,tr:`naql al-maʿrifa`,fr:`transfert de connaissance`,fm:`Idāfa`,root:`ن ق ل`},
      {w:`حُقُوق الرَّقْمِيَّة`,p:`حقوق رقمية`,tr:`ḥuqūq raqmiyya`,fr:`droits numériques`,fm:`Syntagme`,root:`ح ق ق`},
      {w:`فَجْوَة رَقْمِيَّة`,p:`فجوة رقمية`,tr:`fajwa raqmiyya`,fr:`fracture numérique`,fm:`Syntagme`,root:`ف ج و`},
      {w:`مُجْتَمَع الْمَعْرِفَة`,p:`مجتمع المعرفة`,tr:`mujtamaʿ al-maʿrifa`,fr:`société de la connaissance`,fm:`Idāfa`,root:`ع ر ف`},
      {w:`ثَوْرَة صِنَاعِيَّة`,p:`ثورة صناعية`,tr:`thawra ṣinā'iyya`,fr:`révolution industrielle`,fm:`Syntagme`,root:`ص ن ع`},
      {w:`إِنْتَرْنِت الأَشْيَاء`,p:`انترنت الأشياء`,tr:`intarnet al-ashyāʾ`,fr:`Internet des objets (IoT)`,fm:`Idāfa`,root:`ش ي أ`},
      {w:`تِقَنِيَّة الْبُلُوكْشَيْن`,p:`تقنية البلوكشين`,tr:`tiqniyyat al-blūkshayn`,fr:`technologie blockchain`,fm:`Syntagme`,root:`—`},
      {w:`مَتَاهَة افْتِرَاضِيَّة`,p:`متاهة افتراضية`,tr:`matāha iftirāḍiyya`,fr:`métavers (monde virtuel)`,fm:`Syntagme`,root:`ف ر ض`}
    ]
  }
];
