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
  justice: { label: 'Divine Justice & Help', labelUr: 'انصاف و نصرت', icon: '⚖️', color: '#4a6fa5' },
}

// Reciters available for audio playback.
export const RECITERS = {
  alafasy: {
    id: 'alafasy',
    name: 'Mishary Rashid Alafasy',
    nameAr: 'مشاري راشد العفاسي',
    type: 'ayah', // exact per-ayah files (everyayah.com)
  },
  bandar: {
    id: 'bandar',
    name: 'Bandar Baleela',
    nameAr: 'بندر بليلة',
    type: 'segment', // full-surah file (quranicaudio.com) seeked to the verse
  },
}

// Per-dua audio map: which surah/ayah(s) each dua covers, plus Bandar Baleela's
// precise verse timings (seconds) within the full-surah recording.
// Timings sourced from the Quran.com (QDC) segment data for this exact recording.
export const AUDIO = {
  'adam-1': { surah: 7, ayahs: [23], bandar: { from: 324.42, to: 341.53 } },
  'nuh-1': { surah: 71, ayahs: [28], bandar: { from: 294.13, to: 317.1 } },
  'nuh-2': { surah: 54, ayahs: [10], bandar: { from: 85.77, to: 93.94 } },
  'ibrahim-1': { surah: 37, ayahs: [100], bandar: { from: 701.3, to: 705.71 } },
  'ibrahim-2': { surah: 14, ayahs: [40], bandar: { from: 1054.63, to: 1068.7 } },
  'ibrahim-3': { surah: 14, ayahs: [41], bandar: { from: 1068.7, to: 1079.37 } },
  'ibrahim-4': { surah: 2, ayahs: [127], bandar: { from: 2386.94, to: 2401.16 } },
  'ibrahim-5': { surah: 2, ayahs: [126], bandar: { from: 2343.63, to: 2386.94 } },
  'yusuf-1': { surah: 12, ayahs: [101], bandar: { from: 2014.13, to: 2046.57 } },
  'musa-1': { surah: 20, ayahs: [25, 26, 27, 28], bandar: { from: 208.8, to: 222.98 } },
  'musa-2': { surah: 28, ayahs: [24], bandar: { from: 488.21, to: 507.73 } },
  'musa-3': { surah: 7, ayahs: [151], bandar: { from: 2659.35, to: 2673.93 } },
  'ayyub-1': { surah: 21, ayahs: [83], bandar: { from: 1174.89, to: 1189.91 } },
  'yunus-1': { surah: 21, ayahs: [87], bandar: { from: 1237.49, to: 1268.67 } },
  'zakariya-1': { surah: 3, ayahs: [38], bandar: { from: 730.86, to: 744.91 } },
  'zakariya-2': { surah: 21, ayahs: [89], bandar: { from: 1281.47, to: 1304.13 } },
  'sulaiman-1': { surah: 27, ayahs: [19], bandar: { from: 331.01, to: 363.18 } },
  'lut-1': { surah: 26, ayahs: [169], bandar: { from: 1251.93, to: 1258.78 } },
  'shuayb-1': { surah: 7, ayahs: [89], bandar: { from: 1684.21, to: 1721.51 } },
  'isa-1': { surah: 5, ayahs: [114], bandar: { from: 2875.95, to: 2899.24 } },
  'muhammad-1': { surah: 2, ayahs: [201], bandar: { from: 4015.35, to: 4036.78 } },
  'muhammad-2': { surah: 20, ayahs: [114], bandar: { from: 1414.49, to: 1438.03 } },
  'muhammad-3': { surah: 23, ayahs: [118], bandar: { from: 1561.21, to: 1573.26 } },

  'nuh-knowledge': { surah: 11, ayahs: [47], bandar: { from: 1044.08, to: 1063.59 } },
  'nuh-against': { surah: 71, ayahs: [26], bandar: { from: 269.87, to: 279.97 } },
  'nuh-decide': { surah: 26, ayahs: [117, 118], bandar: { from: 865.08, to: 879.97 } },
  'ibrahim-secure': { surah: 14, ayahs: [35], bandar: { from: 927.09, to: 942.64 } },
  'ibrahim-wisdom': { surah: 26, ayahs: [83, 84, 85], bandar: { from: 631.88, to: 653.02 } },
  'ibrahim-submit': { surah: 2, ayahs: [128], bandar: { from: 2401.16, to: 2420.23 } },
  'ibrahim-messenger': { surah: 2, ayahs: [129], bandar: { from: 2420.23, to: 2438.88 } },
  'ibrahim-trust': { surah: 60, ayahs: [5], bandar: { from: 193.54, to: 210.93 } },
  'lut-help': { surah: 29, ayahs: [30], bandar: { from: 597.25, to: 603.89 } },
  'yusuf-prison': { surah: 12, ayahs: [33], bandar: { from: 645.89, to: 665.45 } },
  'musa-self': { surah: 28, ayahs: [16], bandar: { from: 323.5, to: 337.0 } },
  'musa-save': { surah: 28, ayahs: [21], bandar: { from: 425.72, to: 439.47 } },
  'musa-pharaoh': { surah: 10, ayahs: [88], bandar: { from: 2096.12, to: 2128.34 } },
  'musa-separate': { surah: 5, ayahs: [25], bandar: { from: 732.98, to: 745.35 } },
  'sulaiman-kingdom': { surah: 38, ayahs: [35], bandar: { from: 483.62, to: 498.59 } },
  'ayyub-shaytan': { surah: 38, ayahs: [41], bandar: { from: 541.99, to: 556.51 } },
  'zakariya-old': { surah: 19, ayahs: [4, 5, 6], bandar: { from: 25.73, to: 61.38 } },
  'isa-servants': { surah: 5, ayahs: [118], bandar: { from: 2987.84, to: 3003.92 } },
  'muhammad-shaytan': { surah: 23, ayahs: [97, 98], bandar: { from: 1263.18, to: 1277.42 } },
  'muhammad-entrance': { surah: 17, ayahs: [80], bandar: { from: 1647.01, to: 1666.65 } },
  'muhammad-parents': { surah: 17, ayahs: [24], bandar: { from: 536.44, to: 561.05 } },
  'muhammad-judge': { surah: 21, ayahs: [112], bandar: { from: 1660.77, to: 1679.06 } },
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
    category: 'justice',
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
    category: 'justice',
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

  // ---------------- Additional duas ----------------

  // Nuh عليه السلام
  {
    id: 'nuh-knowledge',
    prophet: 'Nuh',
    prophetAr: 'نوح',
    prophetUr: 'نوح',
    category: 'forgiveness',
    arabic:
      'رَبِّ إِنِّىٓ أَعُوذُ بِكَ أَنْ أَسْـَٔلَكَ مَا لَيْسَ لِى بِهِۦ عِلْمٌ ۖ وَإِلَّا تَغْفِرْ لِى وَتَرْحَمْنِىٓ أَكُن مِّنَ ٱلْخَٰسِرِينَ',
    transliteration:
      'Rabbi innī a‘ūdhu bika an as’alaka mā laysa lī bihī ‘ilm, wa illā taghfir lī wa tarḥamnī akun mina-l-khāsirīn',
    english:
      'My Lord, I seek refuge in You from asking that of which I have no knowledge. And unless You forgive me and have mercy upon me, I will be among the losers.',
    urdu: 'میرے پروردگار! میں تجھ سے پناہ مانگتا ہوں کہ ایسی چیز کا سوال کروں جس کی حقیقت مجھے معلوم نہیں۔ اور اگر تو نے مجھے نہ بخشا اور مجھ پر رحم نہ کیا تو میں نقصان اٹھانے والوں میں سے ہو جاؤں گا۔',
    reference: 'Surah Hud 11:47',
  },
  {
    id: 'nuh-against',
    prophet: 'Nuh',
    prophetAr: 'نوح',
    prophetUr: 'نوح',
    category: 'justice',
    arabic: 'رَّبِّ لَا تَذَرْ عَلَى ٱلْأَرْضِ مِنَ ٱلْكَٰفِرِينَ دَيَّارًا',
    transliteration: 'Rabbi lā tadhar ‘ala-l-arḍi mina-l-kāfirīna dayyārā',
    english: 'My Lord, do not leave upon the earth from among the disbelievers an inhabitant.',
    urdu: 'میرے پروردگار! روئے زمین پر کسی کافر کو بسنے والا نہ رہنے دے۔',
    reference: 'Surah Nuh 71:26',
    note: 'Said after his people persisted in rejection for centuries.',
  },
  {
    id: 'nuh-decide',
    prophet: 'Nuh',
    prophetAr: 'نوح',
    prophetUr: 'نوح',
    category: 'justice',
    arabic:
      'رَبِّ إِنَّ قَوْمِى كَذَّبُونِ فَٱفْتَحْ بَيْنِى وَبَيْنَهُمْ فَتْحًا وَنَجِّنِى وَمَن مَّعِىَ مِنَ ٱلْمُؤْمِنِينَ',
    transliteration:
      'Rabbi inna qawmī kadhdhabūn, fa-ftaḥ baynī wa baynahum fatḥan wa najjinī wa man ma‘iya mina-l-mu’minīn',
    english:
      'My Lord, indeed my people have denied me. Then judge between me and them with decisive judgement, and save me and those with me of the believers.',
    urdu: 'میرے پروردگار! میری قوم نے مجھے جھٹلا دیا، سو تو میرے اور اُن کے درمیان کھلا فیصلہ فرما دے، اور مجھے اور جو مومن میرے ساتھ ہیں اُن کو بچا لے۔',
    reference: 'Surah Ash-Shu‘ara 26:117–118',
  },

  // Ibrahim عليه السلام
  {
    id: 'ibrahim-secure',
    prophet: 'Ibrahim',
    prophetAr: 'إبراهيم',
    prophetUr: 'ابراہیم',
    category: 'protection',
    arabic:
      'رَبِّ ٱجْعَلْ هَٰذَا ٱلْبَلَدَ ءَامِنًا وَٱجْنُبْنِى وَبَنِىَّ أَن نَّعْبُدَ ٱلْأَصْنَامَ',
    transliteration: 'Rabbi-j‘al hādha-l-balada āminan wa-jnubnī wa baniyya an na‘buda-l-aṣnām',
    english:
      'My Lord, make this city secure and keep me and my sons away from worshipping idols.',
    urdu: 'میرے پروردگار! اس شہر کو امن کی جگہ بنا دے، اور مجھے اور میری اولاد کو بتوں کی پرستش سے بچائے رکھ۔',
    reference: 'Surah Ibrahim 14:35',
  },
  {
    id: 'ibrahim-wisdom',
    prophet: 'Ibrahim',
    prophetAr: 'إبراهيم',
    prophetUr: 'ابراہیم',
    category: 'guidance',
    arabic:
      'رَبِّ هَبْ لِى حُكْمًا وَأَلْحِقْنِى بِٱلصَّٰلِحِينَ وَٱجْعَل لِّى لِسَانَ صِدْقٍ فِى ٱلْءَاخِرِينَ وَٱجْعَلْنِى مِن وَرَثَةِ جَنَّةِ ٱلنَّعِيمِ',
    transliteration:
      'Rabbi hab lī ḥukman wa alḥiqnī biṣ-ṣāliḥīn, wa-j‘al lī lisāna ṣidqin fi-l-ākhirīn, wa-j‘alnī min warathati jannati-n-na‘īm',
    english:
      'My Lord, grant me wisdom and join me with the righteous, and grant me an honourable mention among later generations, and place me among the inheritors of the Garden of Pleasure.',
    urdu: 'میرے پروردگار! مجھے علم و دانش عطا فرما اور مجھے نیکوکاروں میں شامل کر، اور پچھلوں میں میرا ذکرِ خیر جاری کر، اور مجھے نعمت کی بہشت کے وارثوں میں سے بنا۔',
    reference: 'Surah Ash-Shu‘ara 26:83–85',
  },
  {
    id: 'ibrahim-submit',
    prophet: 'Ibrahim',
    prophetAr: 'إبراهيم',
    prophetUr: 'ابراہیم',
    category: 'steadfastness',
    arabic:
      'رَبَّنَا وَٱجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَآ أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ ۖ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ',
    transliteration:
      'Rabbanā wa-j‘alnā muslimayni laka wa min dhurriyyatinā ummatan muslimatan laka wa arinā manāsikanā wa tub ‘alaynā, innaka anta-t-Tawwābu-r-Raḥīm',
    english:
      'Our Lord, make us Muslims [in submission] to You and from our descendants a Muslim nation in submission to You. And show us our rites and accept our repentance. Indeed, You are the Accepting of repentance, the Merciful.',
    urdu: 'اے ہمارے پروردگار! ہمیں اپنا فرمانبردار بنا اور ہماری اولاد میں سے بھی ایک گروہ کو اپنا مطیع بنا، اور ہمیں عبادت کے طریقے سکھا اور ہم پر توجہ فرما۔ بے شک تو ہی توبہ قبول کرنے والا، مہربان ہے۔',
    reference: 'Surah Al-Baqarah 2:128',
    note: 'Said by Ibrahim and Isma‘il while raising the foundations of the Ka‘bah.',
  },
  {
    id: 'ibrahim-messenger',
    prophet: 'Ibrahim',
    prophetAr: 'إبراهيم',
    prophetUr: 'ابراہیم',
    category: 'guidance',
    arabic:
      'رَبَّنَا وَٱبْعَثْ فِيهِمْ رَسُولًا مِّنْهُمْ يَتْلُوا۟ عَلَيْهِمْ ءَايَٰتِكَ وَيُعَلِّمُهُمُ ٱلْكِتَٰبَ وَٱلْحِكْمَةَ وَيُزَكِّيهِمْ ۚ إِنَّكَ أَنتَ ٱلْعَزِيزُ ٱلْحَكِيمُ',
    transliteration:
      'Rabbanā wa-b‘ath fīhim rasūlan minhum yatlū ‘alayhim āyātika wa yu‘allimuhumu-l-Kitāba wa-l-ḥikmata wa yuzakkīhim, innaka anta-l-‘Azīzu-l-Ḥakīm',
    english:
      'Our Lord, send among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom and purify them. Indeed, You are the Exalted in Might, the Wise.',
    urdu: 'اے ہمارے پروردگار! اِن میں اِنہی میں سے ایک پیغمبر مبعوث فرما جو اُن کو تیری آیتیں پڑھ کر سنائے اور انہیں کتاب و حکمت سکھائے اور اُن کو پاک کرے۔ بے شک تو غالب، حکمت والا ہے۔',
    reference: 'Surah Al-Baqarah 2:129',
    note: 'A prayer answered by the sending of the Prophet Muhammad ﷺ.',
  },
  {
    id: 'ibrahim-trust',
    prophet: 'Ibrahim',
    prophetAr: 'إبراهيم',
    prophetUr: 'ابراہیم',
    category: 'protection',
    arabic:
      'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا۟ وَٱغْفِرْ لَنَا رَبَّنَآ ۖ إِنَّكَ أَنتَ ٱلْعَزِيزُ ٱلْحَكِيمُ',
    transliteration:
      'Rabbanā lā taj‘alnā fitnatan lilladhīna kafarū wa-ghfir lanā Rabbanā, innaka anta-l-‘Azīzu-l-Ḥakīm',
    english:
      'Our Lord, make us not [an object of] trial for the disbelievers, and forgive us, our Lord. Indeed, it is You who is the Exalted in Might, the Wise.',
    urdu: 'اے ہمارے پروردگار! ہمیں کافروں کے لیے آزمائش (کا ذریعہ) نہ بنا، اور اے ہمارے پروردگار! ہمیں بخش دے۔ بے شک تو ہی غالب، حکمت والا ہے۔',
    reference: 'Surah Al-Mumtahanah 60:5',
  },

  // Lut عليه السلام
  {
    id: 'lut-help',
    prophet: 'Lut',
    prophetAr: 'لوط',
    prophetUr: 'لوط',
    category: 'justice',
    arabic: 'رَبِّ ٱنصُرْنِى عَلَى ٱلْقَوْمِ ٱلْمُفْسِدِينَ',
    transliteration: 'Rabbi-nṣurnī ‘ala-l-qawmi-l-mufsidīn',
    english: 'My Lord, support me against the corrupting people.',
    urdu: 'میرے پروردگار! اِن مفسد لوگوں کے مقابلے میں میری مدد فرما۔',
    reference: 'Surah Al-‘Ankabut 29:30',
  },

  // Yusuf عليه السلام
  {
    id: 'yusuf-prison',
    prophet: 'Yusuf',
    prophetAr: 'يوسف',
    prophetUr: 'یوسف',
    category: 'protection',
    arabic:
      'رَبِّ ٱلسِّجْنُ أَحَبُّ إِلَىَّ مِمَّا يَدْعُونَنِىٓ إِلَيْهِ ۖ وَإِلَّا تَصْرِفْ عَنِّى كَيْدَهُنَّ أَصْبُ إِلَيْهِنَّ وَأَكُن مِّنَ ٱلْجَٰهِلِينَ',
    transliteration:
      'Rabbi-s-sijnu aḥabbu ilayya mimmā yad‘ūnanī ilayh, wa illā taṣrif ‘annī kaydahunna aṣbu ilayhinna wa akun mina-l-jāhilīn',
    english:
      'My Lord, prison is more to my liking than that to which they invite me. And if You do not avert their plan from me, I might incline toward them and be of the ignorant.',
    urdu: 'میرے پروردگار! جس کام کی طرف یہ مجھے بلاتی ہیں اُس سے تو مجھے قید زیادہ پسند ہے۔ اور اگر تو نے اِن کے فریب کو مجھ سے نہ ہٹایا تو میں اِن کی طرف مائل ہو جاؤں گا اور نادانوں میں سے ہو جاؤں گا۔',
    reference: 'Surah Yusuf 12:33',
  },

  // Musa عليه السلام
  {
    id: 'musa-self',
    prophet: 'Musa',
    prophetAr: 'موسى',
    prophetUr: 'موسیٰ',
    category: 'forgiveness',
    arabic: 'رَبِّ إِنِّى ظَلَمْتُ نَفْسِى فَٱغْفِرْ لِى',
    transliteration: 'Rabbi innī ẓalamtu nafsī fa-ghfir lī',
    english: 'My Lord, indeed I have wronged myself, so forgive me.',
    urdu: 'میرے پروردگار! میں نے اپنی جان پر ظلم کیا، پس مجھے بخش دے۔',
    reference: 'Surah Al-Qasas 28:16',
    note: 'Allah forgave him in the same verse: “so He forgave him.”',
  },
  {
    id: 'musa-save',
    prophet: 'Musa',
    prophetAr: 'موسى',
    prophetUr: 'موسیٰ',
    category: 'protection',
    arabic: 'رَبِّ نَجِّنِى مِنَ ٱلْقَوْمِ ٱلظَّٰلِمِينَ',
    transliteration: 'Rabbi najjinī mina-l-qawmi-ẓ-ẓālimīn',
    english: 'My Lord, save me from the wrongdoing people.',
    urdu: 'میرے پروردگار! مجھے ظالم لوگوں سے نجات دے۔',
    reference: 'Surah Al-Qasas 28:21',
  },
  {
    id: 'musa-pharaoh',
    prophet: 'Musa',
    prophetAr: 'موسى',
    prophetUr: 'موسیٰ',
    category: 'justice',
    arabic:
      'رَبَّنَآ إِنَّكَ ءَاتَيْتَ فِرْعَوْنَ وَمَلَأَهُۥ زِينَةً وَأَمْوَٰلًا فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا رَبَّنَا لِيُضِلُّوا۟ عَن سَبِيلِكَ ۖ رَبَّنَا ٱطْمِسْ عَلَىٰٓ أَمْوَٰلِهِمْ وَٱشْدُدْ عَلَىٰ قُلُوبِهِمْ فَلَا يُؤْمِنُوا۟ حَتَّىٰ يَرَوُا۟ ٱلْعَذَابَ ٱلْأَلِيمَ',
    transliteration:
      'Rabbanā innaka ātayta Fir‘awna wa mala’ahū zīnatan wa amwālan fi-l-ḥayāti-d-dunyā, Rabbanā li-yuḍillū ‘an sabīlik, Rabbana-ṭmis ‘alā amwālihim wa-shdud ‘alā qulūbihim falā yu’minū ḥattā yarawu-l-‘adhāba-l-alīm',
    english:
      'Our Lord, You have given Pharaoh and his establishment splendour and wealth in the worldly life, our Lord, that they may lead [men] astray from Your way. Our Lord, obliterate their wealth and harden their hearts so that they will not believe until they see the painful punishment.',
    urdu: 'اے ہمارے پروردگار! تو نے فرعون اور اس کے سرداروں کو دنیاوی زندگی میں زینت اور مال و دولت دے رکھی ہے، اے پروردگار! (نتیجہ یہ کہ) وہ تیرے راستے سے گمراہ کرتے ہیں۔ اے پروردگار! اِن کے مال برباد کر دے اور اِن کے دلوں کو سخت کر دے کہ یہ ایمان نہ لائیں جب تک دردناک عذاب نہ دیکھ لیں۔',
    reference: 'Surah Yunus 10:88',
  },
  {
    id: 'musa-separate',
    prophet: 'Musa',
    prophetAr: 'موسى',
    prophetUr: 'موسیٰ',
    category: 'justice',
    arabic:
      'رَبِّ إِنِّى لَآ أَمْلِكُ إِلَّا نَفْسِى وَأَخِى ۖ فَٱفْرُقْ بَيْنَنَا وَبَيْنَ ٱلْقَوْمِ ٱلْفَٰسِقِينَ',
    transliteration:
      'Rabbi innī lā amliku illā nafsī wa akhī, fa-fruq baynanā wa bayna-l-qawmi-l-fāsiqīn',
    english:
      'My Lord, indeed I do not control except myself and my brother, so part us from the defiantly disobedient people.',
    urdu: 'میرے پروردگار! میں اپنے اور اپنے بھائی کے سوا کسی پر اختیار نہیں رکھتا، پس ہمارے اور اِن نافرمان لوگوں کے درمیان جدائی ڈال دے۔',
    reference: 'Surah Al-Ma’idah 5:25',
  },

  // Sulaiman عليه السلام
  {
    id: 'sulaiman-kingdom',
    prophet: 'Sulaiman',
    prophetAr: 'سليمان',
    prophetUr: 'سلیمان',
    category: 'provision',
    arabic:
      'رَبِّ ٱغْفِرْ لِى وَهَبْ لِى مُلْكًا لَّا يَنۢبَغِى لِأَحَدٍ مِّنۢ بَعْدِىٓ ۖ إِنَّكَ أَنتَ ٱلْوَهَّابُ',
    transliteration:
      'Rabbi-ghfir lī wa hab lī mulkan lā yanbaghī li-aḥadin min ba‘dī, innaka anta-l-Wahhāb',
    english:
      'My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me. Indeed, You are the Bestower.',
    urdu: 'میرے پروردگار! مجھے بخش دے اور مجھے ایسی بادشاہی عطا فرما جو میرے بعد کسی کو حاصل نہ ہو۔ بے شک تو ہی بڑا عطا کرنے والا ہے۔',
    reference: 'Surah Sad 38:35',
  },

  // Ayyub عليه السلام
  {
    id: 'ayyub-shaytan',
    prophet: 'Ayyub',
    prophetAr: 'أيوب',
    prophetUr: 'ایوب',
    category: 'distress',
    arabic: 'أَنِّى مَسَّنِىَ ٱلشَّيْطَٰنُ بِنُصْبٍ وَعَذَابٍ',
    transliteration: 'Annī massaniya-sh-Shayṭānu bi-nuṣbin wa ‘adhāb',
    english: 'Indeed, Satan has touched me with hardship and torment.',
    urdu: '(اے رب) شیطان نے مجھے سخت تکلیف اور عذاب پہنچا رکھا ہے۔',
    reference: 'Surah Sad 38:41',
  },

  // Zakariya عليه السلام
  {
    id: 'zakariya-old',
    prophet: 'Zakariya',
    prophetAr: 'زكريا',
    prophetUr: 'زکریا',
    category: 'progeny',
    arabic:
      'رَبِّ إِنِّى وَهَنَ ٱلْعَظْمُ مِنِّى وَٱشْتَعَلَ ٱلرَّأْسُ شَيْبًا وَلَمْ أَكُنۢ بِدُعَآئِكَ رَبِّ شَقِيًّا وَإِنِّى خِفْتُ ٱلْمَوَٰلِىَ مِن وَرَآءِى وَكَانَتِ ٱمْرَأَتِى عَاقِرًا فَهَبْ لِى مِن لَّدُنكَ وَلِيًّا يَرِثُنِى وَيَرِثُ مِنْ ءَالِ يَعْقُوبَ ۖ وَٱجْعَلْهُ رَبِّ رَضِيًّا',
    transliteration:
      'Rabbi innī wahana-l-‘aẓmu minnī wa-shta‘ala-r-ra’su shayban wa lam akun bi-du‘ā’ika Rabbi shaqiyyā. Wa innī khiftu-l-mawāliya min warā’ī wa kānati-mra’atī ‘āqiran fa-hab lī min ladunka waliyyā. Yarithunī wa yarithu min āli Ya‘qūb, wa-j‘alhu Rabbi raḍiyyā',
    english:
      'My Lord, my bones have weakened, and my head has filled with white, and never have I been unhappy in my supplication to You, my Lord. And indeed, I fear the successors after me, and my wife has been barren, so give me from Yourself an heir who will inherit me and inherit from the family of Jacob. And make him, my Lord, pleasing [to You].',
    urdu: 'میرے پروردگار! میری ہڈیاں کمزور ہو گئی ہیں اور سر بڑھاپے سے سفید ہو چکا ہے، اور اے میرے رب! میں تجھ سے مانگ کر کبھی محروم نہیں رہا۔ اور میں اپنے بعد اپنے رشتہ داروں سے ڈرتا ہوں اور میری بیوی بانجھ ہے، سو مجھے اپنے پاس سے ایک وارث عطا فرما جو میری اور یعقوبؑ کی اولاد کی میراث کا وارث ہو، اور اے میرے رب! اُسے پسندیدہ بنا۔',
    reference: 'Surah Maryam 19:4–6',
  },

  // Isa عليه السلام
  {
    id: 'isa-servants',
    prophet: 'Isa',
    prophetAr: 'عيسى',
    prophetUr: 'عیسیٰ',
    category: 'mercy',
    arabic:
      'إِن تُعَذِّبْهُمْ فَإِنَّهُمْ عِبَادُكَ ۖ وَإِن تَغْفِرْ لَهُمْ فَإِنَّكَ أَنتَ ٱلْعَزِيزُ ٱلْحَكِيمُ',
    transliteration:
      'In tu‘adhdhibhum fa-innahum ‘ibāduk, wa in taghfir lahum fa-innaka anta-l-‘Azīzu-l-Ḥakīm',
    english:
      'If You should punish them — indeed they are Your servants; but if You forgive them — indeed it is You who is the Exalted in Might, the Wise.',
    urdu: 'اگر تو انہیں عذاب دے تو یہ تیرے بندے ہیں، اور اگر تو انہیں بخش دے تو بے شک تو ہی غالب، حکمت والا ہے۔',
    reference: 'Surah Al-Ma’idah 5:118',
  },

  // Muhammad ﷺ
  {
    id: 'muhammad-shaytan',
    prophet: 'Muhammad ﷺ',
    prophetAr: 'محمد ﷺ',
    prophetUr: 'محمد ﷺ',
    category: 'protection',
    arabic:
      'رَّبِّ أَعُوذُ بِكَ مِنْ هَمَزَٰتِ ٱلشَّيَٰطِينِ وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ',
    transliteration:
      'Rabbi a‘ūdhu bika min hamazāti-sh-Shayāṭīn, wa a‘ūdhu bika Rabbi an yaḥḍurūn',
    english:
      'My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You, my Lord, lest they be present with me.',
    urdu: 'میرے پروردگار! میں شیطانوں کے وسوسوں سے تیری پناہ مانگتا ہوں، اور اے میرے رب! اِس سے بھی تیری پناہ مانگتا ہوں کہ وہ میرے پاس آ موجود ہوں۔',
    reference: 'Surah Al-Mu’minun 23:97–98',
  },
  {
    id: 'muhammad-entrance',
    prophet: 'Muhammad ﷺ',
    prophetAr: 'محمد ﷺ',
    prophetUr: 'محمد ﷺ',
    category: 'protection',
    arabic:
      'رَّبِّ أَدْخِلْنِى مُدْخَلَ صِدْقٍ وَأَخْرِجْنِى مُخْرَجَ صِدْقٍ وَٱجْعَل لِّى مِن لَّدُنكَ سُلْطَٰنًا نَّصِيرًا',
    transliteration:
      'Rabbi adkhilnī mudkhala ṣidqin wa akhrijnī mukhraja ṣidqin wa-j‘al lī min ladunka sulṭānan naṣīrā',
    english:
      'My Lord, cause me to enter a sound entrance and to exit a sound exit and grant me from Yourself a supporting authority.',
    urdu: 'میرے پروردگار! مجھے سچائی کے ساتھ داخل فرما اور سچائی کے ساتھ نکال، اور اپنے پاس سے میرے لیے ایک مددگار غلبہ عطا فرما۔',
    reference: 'Surah Al-Isra 17:80',
  },
  {
    id: 'muhammad-parents',
    prophet: 'Muhammad ﷺ',
    prophetAr: 'محمد ﷺ',
    prophetUr: 'محمد ﷺ',
    category: 'mercy',
    arabic: 'رَّبِّ ٱرْحَمْهُمَا كَمَا رَبَّيَانِى صَغِيرًا',
    transliteration: 'Rabbi-rḥamhumā kamā rabbayānī ṣaghīrā',
    english: 'My Lord, have mercy upon them as they brought me up [when I was] small.',
    urdu: 'میرے پروردگار! اِن دونوں پر رحم فرما جیسا اِنہوں نے بچپن میں مجھے (محبت سے) پالا۔',
    reference: 'Surah Al-Isra 17:24',
    note: 'The Qur’an’s prayer for one’s parents.',
  },
  {
    id: 'muhammad-judge',
    prophet: 'Muhammad ﷺ',
    prophetAr: 'محمد ﷺ',
    prophetUr: 'محمد ﷺ',
    category: 'justice',
    arabic: 'رَبِّ ٱحْكُم بِٱلْحَقِّ ۗ وَرَبُّنَا ٱلرَّحْمَٰنُ ٱلْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ',
    transliteration:
      'Rabbi-ḥkum bil-ḥaqq, wa Rabbuna-r-Raḥmānu-l-musta‘ānu ‘alā mā taṣifūn',
    english:
      'My Lord, judge in truth. And our Lord is the Most Merciful, the One whose help is sought against that which you describe.',
    urdu: 'میرے پروردگار! حق کے ساتھ فیصلہ فرما دے۔ اور ہمارا پروردگار بڑا مہربان ہے، اُسی سے اُن باتوں پر مدد مانگی جاتی ہے جو تم بیان کرتے ہو۔',
    reference: 'Surah Al-Anbiya 21:112',
  },
]
