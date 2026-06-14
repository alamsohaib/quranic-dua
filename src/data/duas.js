// Quranic Duas of the Prophets (عليهم السلام)
// Each entry: Arabic (Uthmani-style), transliteration, Urdu & English translations, and the Qur'anic reference.
// Categories let users filter by the *type* of supplication and by the *prophet* who made it.

export const CATEGORIES = {
  forgiveness: { label: 'Forgiveness', labelUr: 'مغفرت', icon: '🤲', color: '#1f9d72' },
  guidance: { label: 'Guidance', labelUr: 'ہدایت', icon: '🧭', color: '#2f6fb0' },
  progeny: { label: 'Children & Family', labelUr: 'اولاد و خاندان', icon: '👪', color: '#b07d2f' },
  distress: { label: 'Relief from Distress', labelUr: 'پریشانی سے نجات', icon: '🌊', color: '#5b6abf' },
  protection: { label: 'Protection', labelUr: 'حفاظت', icon: '🛡️', color: '#8a5cb0' },
  gratitude: { label: 'Gratitude', labelUr: 'شکر', icon: '✨', color: '#c79a2f' },
  mercy: { label: 'Mercy', labelUr: 'رحمت', icon: '💚', color: '#1f9d72' },
  steadfastness: { label: 'Steadfastness', labelUr: 'استقامت', icon: '⛰️', color: '#4a7a5c' },
  provision: { label: 'Provision', labelUr: 'رزق', icon: '🌾', color: '#a06a2f' },
}

export const DUAS = [
  // ---------------- Adam عليه السلام ----------------
  {
    id: 'adam-1',
    prophet: 'Adam',
    prophetAr: 'آدم',
    prophetUr: 'آدم',
    category: 'forgiveness',
    arabic: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
    transliteration: 'Rabbanā ẓalamnā anfusanā wa il-lam taghfir lanā wa tarḥamnā lanakūnanna mina-l-khāsirīn',
    english:
      'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.',
    urdu: 'اے ہمارے رب! ہم نے اپنی جانوں پر ظلم کیا، اور اگر تو نے ہمیں نہ بخشا اور ہم پر رحم نہ کیا تو ہم یقیناً نقصان اٹھانے والوں میں سے ہو جائیں گے۔',
    reference: 'Surah Al-A‘raf 7:23',
    note: 'The supplication of Adam and Hawwa after their slip in Paradise.',
  },

  // ---------------- Nuh عليه السلام ----------------
  {
    id: 'nuh-1',
    prophet: 'Nuh',
    prophetAr: 'نوح',
    prophetUr: 'نوح',
    category: 'forgiveness',
    arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ',
    transliteration: 'Rabbi-ghfir lī wa li-wālidayya wa liman dakhala baytiya mu’minan wa lil-mu’minīna wal-mu’mināt',
    english:
      'My Lord, forgive me and my parents and whoever enters my house a believer, and the believing men and believing women.',
    urdu: 'اے میرے رب! مجھے بخش دے اور میرے والدین کو اور ہر اُس شخص کو جو ایمان کے ساتھ میرے گھر میں داخل ہو، اور تمام مومن مردوں اور عورتوں کو۔',
    reference: 'Surah Nuh 71:28',
  },
  {
    id: 'nuh-2',
    prophet: 'Nuh',
    prophetAr: 'نوح',
    prophetUr: 'نوح',
    category: 'distress',
    arabic: 'أَنِّي مَغْلُوبٌ فَانتَصِرْ',
    transliteration: 'Annī maghlūbun fa-ntaṣir',
    english: 'Indeed, I am overpowered, so help (me).',
    urdu: 'میں تو مغلوب ہوں، پس تُو بدلہ لے۔',
    reference: 'Surah Al-Qamar 54:10',
  },

  // ---------------- Ibrahim عليه السلام ----------------
  {
    id: 'ibrahim-1',
    prophet: 'Ibrahim',
    prophetAr: 'إبراهيم',
    prophetUr: 'ابراہیم',
    category: 'progeny',
    arabic: 'رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ',
    transliteration: 'Rabbi hab lī mina-ṣ-ṣāliḥīn',
    english: 'My Lord, grant me (a child) from among the righteous.',
    urdu: 'اے میرے رب! مجھے ایک نیک (بیٹا) عطا فرما۔',
    reference: 'Surah As-Saffat 37:100',
  },
  {
    id: 'ibrahim-2',
    prophet: 'Ibrahim',
    prophetAr: 'إبراهيم',
    prophetUr: 'ابراہیم',
    category: 'steadfastness',
    arabic: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ',
    transliteration: 'Rabbi-j‘alnī muqīma-ṣ-ṣalāti wa min dhurriyyatī, Rabbanā wa taqabbal du‘ā’',
    english:
      'My Lord, make me an establisher of prayer, and (many) from my descendants. Our Lord, and accept my supplication.',
    urdu: 'اے میرے رب! مجھے نماز قائم کرنے والا بنا دے اور میری اولاد میں سے بھی، اے ہمارے رب! میری دعا قبول فرما۔',
    reference: 'Surah Ibrahim 14:40',
  },
  {
    id: 'ibrahim-3',
    prophet: 'Ibrahim',
    prophetAr: 'إبراهيم',
    prophetUr: 'ابراہیم',
    category: 'forgiveness',
    arabic: 'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ',
    transliteration: 'Rabbanā-ghfir lī wa li-wālidayya wa lil-mu’minīna yawma yaqūmu-l-ḥisāb',
    english:
      'Our Lord, forgive me and my parents and the believers on the Day the account is established.',
    urdu: 'اے ہمارے رب! مجھے، میرے والدین کو اور تمام مومنوں کو اُس دن بخش دینا جس دن حساب قائم ہوگا۔',
    reference: 'Surah Ibrahim 14:41',
  },
  {
    id: 'ibrahim-4',
    prophet: 'Ibrahim',
    prophetAr: 'إبراهيم',
    prophetUr: 'ابراہیم',
    category: 'gratitude',
    arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ',
    transliteration: 'Rabbanā taqabbal minnā, innaka anta-s-Samī‘u-l-‘Alīm',
    english: 'Our Lord, accept (this) from us. Indeed, You are the All-Hearing, the All-Knowing.',
    urdu: 'اے ہمارے رب! ہم سے (یہ خدمت) قبول فرما، بے شک تُو ہی خوب سننے والا، خوب جاننے والا ہے۔',
    reference: 'Surah Al-Baqarah 2:127',
    note: 'Said by Ibrahim and Isma‘il while raising the foundations of the Ka‘bah.',
  },
  {
    id: 'ibrahim-5',
    prophet: 'Ibrahim',
    prophetAr: 'إبراهيم',
    prophetUr: 'ابراہیم',
    category: 'protection',
    arabic: 'رَبِّ اجْعَلْ هَٰذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ',
    transliteration: 'Rabbi-j‘al hādhā baladan āminan wa-rzuq ahlahū mina-th-thamarāt',
    english:
      'My Lord, make this a secure city and provide its people with fruits (provision).',
    urdu: 'اے میرے رب! اس شہر کو امن والا بنا دے اور اس کے رہنے والوں کو پھلوں (رزق) سے نواز۔',
    reference: 'Surah Al-Baqarah 2:126',
  },

  // ---------------- Yusuf عليه السلام ----------------
  {
    id: 'yusuf-1',
    prophet: 'Yusuf',
    prophetAr: 'يوسف',
    prophetUr: 'یوسف',
    category: 'gratitude',
    arabic:
      'فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ أَنتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ ۖ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ',
    transliteration:
      'Fāṭira-s-samāwāti wal-arḍ, anta waliyyī fi-d-dunyā wal-ākhirah, tawaffanī Musliman wa alḥiqnī biṣ-ṣāliḥīn',
    english:
      'Creator of the heavens and earth, You are my protector in this world and the Hereafter. Cause me to die a Muslim and join me with the righteous.',
    urdu: 'آسمانوں اور زمین کے پیدا کرنے والے! تُو ہی دنیا و آخرت میں میرا کارساز ہے، مجھے اسلام کی حالت میں موت دینا اور نیک لوگوں میں شامل فرمانا۔',
    reference: 'Surah Yusuf 12:101',
  },

  // ---------------- Musa عليه السلام ----------------
  {
    id: 'musa-1',
    prophet: 'Musa',
    prophetAr: 'موسى',
    prophetUr: 'موسیٰ',
    category: 'guidance',
    arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
    transliteration:
      'Rabbi-shraḥ lī ṣadrī, wa yassir lī amrī, wa-ḥlul ‘uqdatan min lisānī, yafqahū qawlī',
    english:
      'My Lord, expand for me my breast, and ease for me my task, and untie the knot from my tongue that they may understand my speech.',
    urdu: 'اے میرے رب! میرا سینہ کھول دے، اور میرا کام آسان کر دے، اور میری زبان کی گرہ کھول دے تاکہ لوگ میری بات سمجھ سکیں۔',
    reference: 'Surah Ta-Ha 20:25–28',
  },
  {
    id: 'musa-2',
    prophet: 'Musa',
    prophetAr: 'موسى',
    prophetUr: 'موسیٰ',
    category: 'provision',
    arabic: 'رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ',
    transliteration: 'Rabbi innī limā anzalta ilayya min khayrin faqīr',
    english: 'My Lord, indeed I am, for whatever good You would send down to me, in need.',
    urdu: 'اے میرے رب! تُو جو بھلائی بھی مجھ پر نازل فرما دے، میں اُس کا محتاج ہوں۔',
    reference: 'Surah Al-Qasas 28:24',
  },
  {
    id: 'musa-3',
    prophet: 'Musa',
    prophetAr: 'موسى',
    prophetUr: 'موسیٰ',
    category: 'forgiveness',
    arabic: 'رَبِّ اغْفِرْ لِي وَلِأَخِي وَأَدْخِلْنَا فِي رَحْمَتِكَ ۖ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
    transliteration: 'Rabbi-ghfir lī wa li-akhī wa adkhilnā fī raḥmatika wa anta arḥamu-r-rāḥimīn',
    english:
      'My Lord, forgive me and my brother and admit us into Your mercy, for You are the Most Merciful of the merciful.',
    urdu: 'اے میرے رب! مجھے اور میرے بھائی کو بخش دے اور ہمیں اپنی رحمت میں داخل فرما، اور تُو سب رحم کرنے والوں سے بڑھ کر رحم کرنے والا ہے۔',
    reference: 'Surah Al-A‘raf 7:151',
  },

  // ---------------- Ayyub عليه السلام ----------------
  {
    id: 'ayyub-1',
    prophet: 'Ayyub',
    prophetAr: 'أيوب',
    prophetUr: 'ایوب',
    category: 'distress',
    arabic: 'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
    transliteration: 'Annī massaniya-ḍ-ḍurru wa anta arḥamu-r-rāḥimīn',
    english: 'Indeed, adversity has touched me, and You are the Most Merciful of the merciful.',
    urdu: 'مجھے یہ تکلیف پہنچی ہے، اور تُو سب رحم کرنے والوں سے بڑھ کر رحم کرنے والا ہے۔',
    reference: 'Surah Al-Anbiya 21:83',
    note: 'The dua of Ayyub during his long illness; Allah then removed his affliction.',
  },

  // ---------------- Yunus عليه السلام ----------------
  {
    id: 'yunus-1',
    prophet: 'Yunus',
    prophetAr: 'يونس',
    prophetUr: 'یونس',
    category: 'distress',
    arabic: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
    transliteration: 'Lā ilāha illā anta subḥānaka innī kuntu mina-ẓ-ẓālimīn',
    english:
      'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
    urdu: 'تیرے سوا کوئی معبود نہیں، تُو پاک ہے، بے شک میں ہی قصور وار ہوں۔',
    reference: 'Surah Al-Anbiya 21:87',
    note: 'The dua of Yunus from within the belly of the whale (Dhun-Nun).',
  },

  // ---------------- Zakariya عليه السلام ----------------
  {
    id: 'zakariya-1',
    prophet: 'Zakariya',
    prophetAr: 'زكريا',
    prophetUr: 'زکریا',
    category: 'progeny',
    arabic: 'رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ',
    transliteration: 'Rabbi hab lī min ladunka dhurriyyatan ṭayyibah, innaka samī‘u-d-du‘ā’',
    english:
      'My Lord, grant me from Yourself a good offspring. Indeed, You are the Hearer of supplication.',
    urdu: 'اے میرے رب! مجھے اپنے پاس سے پاکیزہ اولاد عطا فرما، بے شک تُو دعا سننے والا ہے۔',
    reference: 'Surah Aal ‘Imran 3:38',
  },
  {
    id: 'zakariya-2',
    prophet: 'Zakariya',
    prophetAr: 'زكريا',
    prophetUr: 'زکریا',
    category: 'progeny',
    arabic: 'رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ',
    transliteration: 'Rabbi lā tadharnī fardan wa anta khayru-l-wārithīn',
    english: 'My Lord, do not leave me alone (childless), while You are the best of inheritors.',
    urdu: 'اے میرے رب! مجھے اکیلا (بے اولاد) نہ چھوڑ، اور تُو سب وارثوں سے بہتر ہے۔',
    reference: 'Surah Al-Anbiya 21:89',
  },

  // ---------------- Sulaiman عليه السلام ----------------
  {
    id: 'sulaiman-1',
    prophet: 'Sulaiman',
    prophetAr: 'سليمان',
    prophetUr: 'سلیمان',
    category: 'gratitude',
    arabic:
      'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ',
    transliteration:
      'Rabbi awzi‘nī an ashkura ni‘mataka-llatī an‘amta ‘alayya wa ‘alā wālidayya wa an a‘mala ṣāliḥan tarḍāhu wa adkhilnī biraḥmatika fī ‘ibādika-ṣ-ṣāliḥīn',
    english:
      'My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents, and to do righteousness of which You approve, and admit me by Your mercy among Your righteous servants.',
    urdu: 'اے میرے رب! مجھے توفیق دے کہ میں تیری اُس نعمت کا شکر ادا کروں جو تُو نے مجھ پر اور میرے والدین پر کی، اور یہ کہ میں ایسے نیک عمل کروں جسے تُو پسند کرے، اور مجھے اپنی رحمت سے اپنے نیک بندوں میں داخل فرما۔',
    reference: 'Surah An-Naml 27:19',
  },

  // ---------------- Lut عليه السلام ----------------
  {
    id: 'lut-1',
    prophet: 'Lut',
    prophetAr: 'لوط',
    prophetUr: 'لوط',
    category: 'protection',
    arabic: 'رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ',
    transliteration: 'Rabbi najjinī wa ahlī mimmā ya‘malūn',
    english: 'My Lord, save me and my family from (the consequence of) what they do.',
    urdu: 'اے میرے رب! مجھے اور میرے گھر والوں کو اِن کے کاموں (کے انجام) سے نجات دے۔',
    reference: 'Surah Ash-Shu‘ara 26:169',
  },

  // ---------------- Shu‘ayb عليه السلام ----------------
  {
    id: 'shuayb-1',
    prophet: 'Shu‘ayb',
    prophetAr: 'شعيب',
    prophetUr: 'شعیب',
    category: 'guidance',
    arabic: 'رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ',
    transliteration: 'Rabbanā-ftaḥ baynanā wa bayna qawminā bil-ḥaqqi wa anta khayru-l-fātiḥīn',
    english:
      'Our Lord, decide between us and our people in truth, for You are the best of those who give decision.',
    urdu: 'اے ہمارے رب! ہمارے اور ہماری قوم کے درمیان حق کے ساتھ فیصلہ فرما دے، اور تُو سب سے بہتر فیصلہ کرنے والا ہے۔',
    reference: 'Surah Al-A‘raf 7:89',
  },

  // ---------------- Isa عليه السلام ----------------
  {
    id: 'isa-1',
    prophet: 'Isa',
    prophetAr: 'عيسى',
    prophetUr: 'عیسیٰ',
    category: 'provision',
    arabic:
      'اللَّهُمَّ رَبَّنَا أَنزِلْ عَلَيْنَا مَائِدَةً مِّنَ السَّمَاءِ تَكُونُ لَنَا عِيدًا لِّأَوَّلِنَا وَآخِرِنَا وَآيَةً مِّنكَ ۖ وَارْزُقْنَا وَأَنتَ خَيْرُ الرَّازِقِينَ',
    transliteration:
      'Allāhumma Rabbanā anzil ‘alaynā mā’idatan mina-s-samā’i takūnu lanā ‘īdan li-awwalinā wa ākhirinā wa āyatan minka, wa-rzuqnā wa anta khayru-r-rāziqīn',
    english:
      'O Allah, our Lord, send down to us a table (with food) from heaven to be a festival for the first and the last of us and a sign from You. And provide for us, for You are the best of providers.',
    urdu: 'اے اللہ! اے ہمارے رب! ہم پر آسمان سے ایک خوان (دستر خوان) نازل فرما جو ہمارے اگلوں اور پچھلوں کے لیے عید ہو اور تیری طرف سے ایک نشانی ہو، اور ہمیں رزق دے، اور تُو سب سے بہتر رزق دینے والا ہے۔',
    reference: 'Surah Al-Ma’idah 5:114',
  },

  // ---------------- Muhammad ﷺ ----------------
  {
    id: 'muhammad-1',
    prophet: 'Muhammad ﷺ',
    prophetAr: 'محمد ﷺ',
    prophetUr: 'محمد ﷺ',
    category: 'mercy',
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transliteration: 'Rabbanā ātinā fi-d-dunyā ḥasanatan wa fi-l-ākhirati ḥasanatan wa qinā ‘adhāba-n-nār',
    english:
      'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.',
    urdu: 'اے ہمارے رب! ہمیں دنیا میں بھلائی دے اور آخرت میں بھی بھلائی دے، اور ہمیں آگ کے عذاب سے بچا۔',
    reference: 'Surah Al-Baqarah 2:201',
    note: 'The most frequently recited comprehensive dua, taught in the Qur’an.',
  },
  {
    id: 'muhammad-2',
    prophet: 'Muhammad ﷺ',
    prophetAr: 'محمد ﷺ',
    prophetUr: 'محمد ﷺ',
    category: 'guidance',
    arabic: 'رَّبِّ زِدْنِي عِلْمًا',
    transliteration: 'Rabbi zidnī ‘ilmā',
    english: 'My Lord, increase me in knowledge.',
    urdu: 'اے میرے رب! میرے علم میں اضافہ فرما۔',
    reference: 'Surah Ta-Ha 20:114',
  },
  {
    id: 'muhammad-3',
    prophet: 'Muhammad ﷺ',
    prophetAr: 'محمد ﷺ',
    prophetUr: 'محمد ﷺ',
    category: 'mercy',
    arabic: 'رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ',
    transliteration: 'Rabbi-ghfir wa-rḥam wa anta khayru-r-rāḥimīn',
    english: 'My Lord, forgive and have mercy, for You are the best of the merciful.',
    urdu: 'اے میرے رب! بخش دے اور رحم فرما، اور تُو سب رحم کرنے والوں سے بہتر ہے۔',
    reference: 'Surah Al-Mu’minun 23:118',
  },
]
