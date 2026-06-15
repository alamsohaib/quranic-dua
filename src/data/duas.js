// Quranic Duas — supplications preserved in the Holy Qur'an.
// These include the duas of the Prophets (عليهم السلام) as well as general
// supplications taught in the Qur'an (the believers, the People of the Cave,
// the servants of the Most Merciful, etc.).
//
// Each entry carries: Arabic (Uthmani-style), transliteration, Urdu & English
// translations, the Qur'anic reference, and a `background` (with `backgroundUr`)
// giving the context / tafsir of the dua.
//
// Tafsir & context are based on Tafsīr al-Muyassar as published by the
// King Fahd Complex for the Printing of the Holy Qur'an (qurancomplex.gov.sa),
// cross-checked with Tafsīr Ibn Kathīr. See SOURCE below.

export const SOURCE = {
  name: 'King Fahd Complex for the Printing of the Holy Qur’an — Tafsīr al-Muyassar',
  nameUr: 'مجمع الملک فہد لطباعۃ المصحف الشریف — تفسیر المیسّر',
  url: 'https://qurancomplex.gov.sa',
}

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
  general: { label: 'General / Other Duas', labelUr: 'عام دعائیں', icon: '📿', color: '#7a6cae' },
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
// Entries without `bandar` timings fall back to the per-ayah recitation.
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

  // General / other Quranic duas
  'gen-baqarah-end': { surah: 2, ayahs: [286], bandar: { from: 6463.65, to: 6522.96 } },
  'gen-imran-firm': { surah: 3, ayahs: [8], bandar: { from: 126.86, to: 148.16 } },
  'gen-imran-believers': { surah: 3, ayahs: [16], bandar: { from: 297.14, to: 313.87 } },
  'gen-imran-reflect': { surah: 3, ayahs: [191], bandar: { from: 3481.74, to: 3506.54 } },
  'gen-imran-forgive': { surah: 3, ayahs: [193, 194], bandar: { from: 3519.25, to: 3563.99 } },
  'gen-kahf-youth': { surah: 18, ayahs: [10], bandar: { from: 88.11, to: 106.59 } },
  'gen-yunus-believers': { surah: 10, ayahs: [85, 86], bandar: { from: 2044.36, to: 2074.26 } },
  'gen-hashr-brotherhood': { surah: 59, ayahs: [10], bandar: { from: 275.03, to: 313.13 } },
  'gen-tahrim-light': { surah: 66, ayahs: [8], bandar: { from: 217.66, to: 300.08 } },
  'gen-furqan-servants': { surah: 25, ayahs: [74], bandar: { from: 1006.6, to: 1022.36 } },
  'gen-furqan-hell': { surah: 25, ayahs: [65, 66], bandar: { from: 892.66, to: 914.1 } },
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
    background:
      'After Iblīs deceived Adam and Hawwā into eating from the forbidden tree, they did not despair or blame anyone — they at once owned their wrong and threw themselves on Allah’s mercy. The tafsir notes this verse as the very pattern of repentance: confessing the sin and pleading for forgiveness. Allah then accepted Adam’s repentance and guided him (Qur’an 2:37, 20:122).',
    backgroundUr:
      'جب ابلیس نے آدم اور حوّا کو دھوکا دے کر ممنوعہ درخت سے کھلوا دیا تو انہوں نے نہ مایوسی اختیار کی نہ کسی کو الزام دیا، بلکہ فوراً اپنی خطا کا اعتراف کر کے اللہ کی رحمت کے سامنے جھک گئے۔ تفسیر کے مطابق یہ آیت توبہ کا نمونہ ہے: گناہ کا اقرار اور معافی کی التجا۔ پھر اللہ نے آدمؑ کی توبہ قبول فرمائی (قرآن ۲:۳۷، ۲۰:۱۲۲)۔',
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
    background:
      'At the close of a 950-year mission of calling his people, Nūḥ widened his prayer beyond himself: to his believing parents, every believer who entered his home, and all believing men and women until the end of time. The tafsir highlights this as the generous heart of the caller who prays for the whole community of faith.',
    backgroundUr:
      'ساڑھے نو سو سال کی دعوت کے اختتام پر نوحؑ نے اپنی دعا کو صرف اپنی ذات تک محدود نہ رکھا، بلکہ اپنے مومن والدین، ہر اُس شخص کے لیے جو ایمان کے ساتھ اُن کے گھر داخل ہوا، اور قیامت تک کے تمام مومن مردوں اور عورتوں کے لیے مانگی۔ تفسیر اسے داعی کے کشادہ دل کی علامت قرار دیتی ہے جو پوری امّتِ ایمان کے لیے دعا کرتا ہے۔',
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
    background:
      'After centuries of rejection, ridicule and threats, and with the disbelievers wholly dominant, Nūḥ turned to his Lord declaring himself overpowered and seeking divine help. The tafsir notes Allah answered this short, desperate cry by opening the gates of heaven with the Flood that destroyed the deniers.',
    backgroundUr:
      'صدیوں کی تکذیب، استہزاء اور دھمکیوں کے بعد، جب منکرین مکمل غالب ہو چکے تھے، نوحؑ نے اپنے رب کے سامنے خود کو مغلوب قرار دے کر مدد طلب کی۔ تفسیر بیان کرتی ہے کہ اللہ نے اِس مختصر و بے قرار پکار کا جواب آسمان کے دروازے کھول کر اُس طوفان سے دیا جس نے منکرین کو غرق کر دیا۔',
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
    background:
      'Having left his people and migrated for the sake of Allah, the childless Ibrāhīm asked not merely for a son but for a *righteous* one. The tafsir notes this prayer was answered with the forbearing Ismā‘īl, and later with Isḥāq — a lineage of prophets.',
    backgroundUr:
      'اپنی قوم کو چھوڑ کر اللہ کی راہ میں ہجرت کرنے والے بے اولاد ابراہیمؑ نے محض بیٹا نہیں بلکہ ایک *نیک* بیٹا مانگا۔ تفسیر کے مطابق اِس دعا کا جواب بردبار اسماعیلؑ اور بعد ازاں اسحاقؑ کی صورت میں دیا گیا — انبیاء کا ایک سلسلہ۔',
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
    background:
      'Part of the long prayer Ibrāhīm made in old age after settling his family in the barren valley of Makkah. The tafsir observes that he prized constancy in ṣalāh above all worldly gifts, asking it for himself and his progeny.',
    backgroundUr:
      'یہ اُس طویل دعا کا حصہ ہے جو ابراہیمؑ نے بڑھاپے میں اپنے اہلِ خانہ کو مکہ کی بے آب و گیاہ وادی میں آباد کرنے کے بعد مانگی۔ تفسیر بتاتی ہے کہ انہوں نے ہر دنیاوی نعمت پر نماز کی پابندی کو ترجیح دی اور یہ اپنے اور اپنی اولاد کے لیے مانگی۔',
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
    background:
      'The closing line of Ibrāhīm’s Makkah prayer, looking ahead to the Day of Reckoning. The tafsir clarifies that his prayer for his father here was before it became clear his father was an enemy of Allah, after which he dissociated from him (Qur’an 9:114).',
    backgroundUr:
      'ابراہیمؑ کی مکّی دعا کا اختتامی جملہ، جو روزِ حساب کی طرف نظر رکھتا ہے۔ تفسیر واضح کرتی ہے کہ یہاں والد کے لیے دعا اُس وقت تھی جب تک یہ ظاہر نہ ہوا تھا کہ والد اللہ کا دشمن ہے؛ بعد میں انہوں نے اُس سے براءت کر لی (قرآن ۹:۱۱۴)۔',
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
    background:
      'As Ibrāhīm and Ismā‘īl raised the foundations of the Ka‘bah, they did not see themselves as having done Allah a favour; they begged Him to *accept* the work. The tafsir draws the lesson that the righteous fear their deeds may be rejected, so they crown their good works with a plea for acceptance.',
    backgroundUr:
      'جب ابراہیمؑ اور اسماعیلؑ کعبہ کی بنیادیں اٹھا رہے تھے تو انہوں نے خود کو اللہ پر احسان کرنے والا نہ سمجھا، بلکہ التجا کی کہ وہ اِس عمل کو *قبول* فرما لے۔ تفسیر سبق دیتی ہے کہ نیک لوگ اپنے اعمال کے ردّ ہو جانے سے ڈرتے ہیں، اِس لیے وہ اپنے نیک کاموں کو قبولیت کی دعا سے مکمل کرتے ہیں۔',
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
    background:
      'Standing in the empty, cultivation-less valley of Makkah, Ibrāhīm asked first for *security* and then for *provision* — in that order. The tafsir notes the wisdom: safety precedes sustenance, for provision is enjoyed only where there is peace; Allah made Makkah a sanctuary to which fruits are brought from every land.',
    backgroundUr:
      'مکہ کی خالی، بے کاشت وادی میں کھڑے ہو کر ابراہیمؑ نے پہلے *امن* مانگا اور پھر *رزق* — اِسی ترتیب سے۔ تفسیر حکمت بیان کرتی ہے کہ امن رزق سے مقدم ہے، کیونکہ رزق کا لطف وہیں ہے جہاں امن ہو؛ اللہ نے مکہ کو حرمت والا شہر بنایا جہاں ہر سرزمین سے پھل لائے جاتے ہیں۔',
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
    background:
      'At the summit of worldly success — minister of Egypt, reunited with his parents and brothers, his childhood dream fulfilled — Yūsuf turned to Allah not for more of this world but to die a Muslim. The tafsir notes he is the first recorded to ask for death upon Islam, asking it at the very moment of greatest comfort.',
    backgroundUr:
      'دنیاوی کامیابی کے عروج پر — مصر کا عزیز، والدین اور بھائیوں سے ملاپ، بچپن کا خواب پورا — یوسفؑ نے اللہ سے دنیا میں اضافہ نہیں بلکہ اسلام پر موت مانگی۔ تفسیر بتاتی ہے کہ سب سے زیادہ آسائش کے لمحے میں اسلام پر موت مانگنے والے وہ پہلے شخص ہیں جن کا ذکر ملتا ہے۔',
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
    background:
      'The moment Mūsā was commanded at the sacred valley to confront the tyrant Pharaoh, he asked for the inner tools of a caller: an open chest to bear the burden, ease in a daunting task, and release from the impediment in his speech so his message would be understood. The tafsir notes Allah granted every request in the same passage.',
    backgroundUr:
      'جب موسیٰؑ کو وادیِ مقدس میں سرکش فرعون کے سامنے جانے کا حکم ملا، تو انہوں نے داعی کے باطنی وسائل مانگے: بوجھ اٹھانے کے لیے کھلا سینہ، دشوار کام میں آسانی، اور زبان کی گرہ کھلنا تاکہ اُن کی بات سمجھی جائے۔ تفسیر بتاتی ہے کہ اللہ نے اِسی مقام پر ہر دعا قبول فرما لی۔',
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
    background:
      'A fugitive in Madyan — hungry, alone and penniless after fleeing Egypt — Mūsā watered the flocks of two women and then withdrew to the shade, voicing his need to Allah without naming any specific want. The tafsir notes the courtesy of leaving the matter to Allah; it was soon answered with food, shelter, marriage and work.',
    backgroundUr:
      'مصر سے فرار کے بعد مدین میں بھوکے، تنہا اور بے سرمایہ موسیٰؑ نے دو عورتوں کے ریوڑ کو پانی پلایا اور سائے میں آ کر اللہ کے سامنے اپنی حاجت بیان کی، بغیر کسی خاص چیز کا نام لیے۔ تفسیر اِس ادب کو سراہتی ہے کہ معاملہ اللہ پر چھوڑ دیا؛ جلد ہی کھانا، پناہ، نکاح اور کام عطا ہوا۔',
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
    background:
      'Returning from Mount Ṭūr to find his people worshipping the golden calf, Mūsā had seized Hārūn’s head in anger; when it became clear Hārūn was blameless, Mūsā prayed for forgiveness for them both. The tafsir notes his care to include his brother and seek Allah’s embracing mercy.',
    backgroundUr:
      'کوہِ طور سے واپسی پر جب موسیٰؑ نے اپنی قوم کو بچھڑے کی پرستش کرتے پایا تو غصے میں ہارونؑ کا سر پکڑ لیا؛ مگر جب ہارونؑ کا بے قصور ہونا واضح ہوا تو موسیٰؑ نے دونوں کے لیے مغفرت کی دعا کی۔ تفسیر اِس بات کو نمایاں کرتی ہے کہ انہوں نے بھائی کو شامل کر کے اللہ کی وسیع رحمت طلب کی۔',
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
    background:
      'After years of illness and the loss of wealth and children, all borne with famed patience, Ayyūb did not complain but gently placed his condition before Allah and appealed to His mercy. The tafsir notes the perfect adab: stating the need while praising the One asked. Allah then removed his affliction and restored his family (Qur’an 21:84).',
    backgroundUr:
      'برسوں کی بیماری اور مال و اولاد کے نقصان کو مشہور صبر کے ساتھ سہنے کے بعد ایوبؑ نے شکایت نہیں کی بلکہ نہایت نرمی سے اپنی حالت اللہ کے سامنے رکھی اور اُس کی رحمت سے فریاد کی۔ تفسیر اِس کامل ادب کو بیان کرتی ہے: حاجت کا اظہار اُسی کی تعریف کے ساتھ جس سے مانگا جا رہا ہے۔ پھر اللہ نے اُن کی تکلیف دور کی اور اہل و عیال لوٹا دیے (قرآن ۲۱:۸۴)۔',
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
    background:
      'Yūnus left his people in anger before Allah’s permission; swallowed by the great fish, he found himself in three-fold darkness — of the night, the sea and the fish’s belly. There he affirmed Allah’s oneness, glorified Him, and confessed his own wrong. The Prophet ﷺ said no distressed Muslim makes this duʿāʾ but Allah answers him (Tirmidhī).',
    backgroundUr:
      'یونسؑ اللہ کی اجازت سے پہلے ناراض ہو کر اپنی قوم کو چھوڑ گئے؛ مچھلی نے انہیں نگل لیا تو وہ تہری تاریکیوں میں گھر گئے — رات، سمندر اور مچھلی کے پیٹ کی۔ وہاں انہوں نے اللہ کی توحید کا اقرار کیا، اُس کی تسبیح کی اور اپنی خطا کا اعتراف کیا۔ نبی ﷺ نے فرمایا کہ جو پریشان حال مسلمان یہ دعا مانگے، اللہ اُس کی دعا قبول فرماتا ہے (ترمذی)۔',
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
    background:
      'When Zakariyyā saw the out-of-season provision Allah sent to Maryam in her prayer-niche, his hope was kindled: the One who provides without means can grant a child despite old age and a barren wife. On the spot he asked for pure offspring — answered with Yaḥyā.',
    backgroundUr:
      'جب زکریاؑ نے دیکھا کہ اللہ مریمؑ کو محراب میں بے موسم رزق عطا فرما رہا ہے تو اُن کی امید جاگ اٹھی: جو بغیر اسباب کے رزق دیتا ہے وہ بڑھاپے اور بانجھ بیوی کے باوجود اولاد بھی دے سکتا ہے۔ اُسی وقت انہوں نے پاکیزہ اولاد مانگی — جس کا جواب یحییٰؑ کی صورت میں ملا۔',
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
    background:
      'A second form of Zakariyyā’s plea, recorded in Sūrat al-Anbiyāʾ among the prayers of the prophets. The tafsir notes that even while longing for an heir he sealed his request with contentment — “You are the best of inheritors” — entrusting the outcome wholly to Allah.',
    backgroundUr:
      'زکریاؑ کی فریاد کی دوسری صورت، جو سورۃ الانبیاء میں انبیاء کی دعاؤں کے ضمن میں مذکور ہے۔ تفسیر بتاتی ہے کہ وارث کی تمنا کے باوجود انہوں نے اپنی دعا کو رضا پر ختم کیا — ”تو سب سے بہتر وارث ہے“ — یعنی نتیجہ مکمل طور پر اللہ کے سپرد کر دیا۔',
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
    background:
      'Sulaymān, given dominion over wind, jinn and the speech of creatures, smiled on overhearing an ant warn its colony of his marching army — then, instead of pride, he asked for the *grace to be grateful*. The tafsir notes that the more Allah gives a servant, the more he should seek help in thanking Him.',
    backgroundUr:
      'سلیمانؑ کو ہوا، جنّات اور جانوروں کی بولی پر اختیار دیا گیا تھا؛ جب انہوں نے ایک چیونٹی کو اپنے لشکر سے اپنی برادری کو خبردار کرتے سنا تو مسکرا دیے — اور تکبر کے بجائے *شکر کی توفیق* مانگی۔ تفسیر بتاتی ہے کہ اللہ بندے کو جتنا زیادہ دے، اُسے اتنا ہی زیادہ شکر کی توفیق مانگنی چاہیے۔',
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
    background:
      'Surrounded by a people sunk in open immorality who would not heed his call, Lūṭ asked Allah to deliver him and his believing household from both their deeds and the punishment those deeds would bring. The tafsir notes Allah saved him and his family except his wife, who sided with the wrongdoers.',
    backgroundUr:
      'کھلی بے حیائی میں ڈوبی ہوئی قوم کے درمیان، جو اُن کی دعوت نہ سنتی تھی، لوطؑ نے اللہ سے دعا کی کہ اُنہیں اور اُن کے مومن گھرانے کو اِن کے اعمال اور اُن اعمال کے عذاب دونوں سے بچا لے۔ تفسیر بتاتی ہے کہ اللہ نے انہیں اور اُن کے گھر والوں کو نجات دی سوائے اُن کی بیوی کے، جو مجرموں کے ساتھ تھی۔',
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
    background:
      'Threatened with expulsion unless he and the believers returned to the false ways of Madyan, Shu‘ayb refused to abandon the truth and left the dispute to Allah’s just verdict. The tafsir notes the decision came as the earthquake that seized the deniers.',
    backgroundUr:
      'جب شعیبؑ اور اہلِ ایمان کو دھمکی دی گئی کہ یا تو مدین کے باطل طریقوں کی طرف لوٹ آؤ یا نکال دیے جاؤ گے، تو انہوں نے حق چھوڑنے سے انکار کر دیا اور جھگڑے کو اللہ کے عادلانہ فیصلے پر چھوڑ دیا۔ تفسیر بتاتی ہے کہ فیصلہ اُس زلزلے کی صورت میں آیا جس نے منکرین کو آ پکڑا۔',
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
    background:
      'When the disciples asked for a table spread from heaven to settle their hearts, ‘Īsā made this dignified request — that it be both a festival and a sign of Allah. The tafsir notes Allah promised to send it, but with a warning that any who then disbelieved would face a punishment like none other.',
    backgroundUr:
      'جب حواریوں نے دلوں کے اطمینان کے لیے آسمان سے دستر خوان مانگا تو عیسیٰؑ نے یہ باوقار دعا کی — کہ وہ عید بھی ہو اور اللہ کی نشانی بھی۔ تفسیر بتاتی ہے کہ اللہ نے اُسے بھیجنے کا وعدہ کیا، مگر اِس تنبیہ کے ساتھ کہ اِس کے بعد جو کفر کرے گا اُسے ایسا عذاب ہوگا جو کسی اور کو نہ ہوا ہوگا۔',
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
    background:
      'The Qur’an contrasts those who ask only for this world with the believers taught this all-encompassing prayer that gathers the good of both abodes. Anas (رضي الله عنه) reported the Prophet ﷺ said it most often (Bukhārī, Muslim), and that “good in this world” embraces every blessing — health, knowledge, lawful provision and a righteous spouse.',
    backgroundUr:
      'قرآن اُن لوگوں کا، جو صرف دنیا مانگتے ہیں، اہلِ ایمان سے موازنہ کرتا ہے جنہیں یہ جامع دعا سکھائی گئی جو دونوں جہانوں کی بھلائی سمیٹ لیتی ہے۔ انسؓ سے روایت ہے کہ نبی ﷺ یہ دعا سب سے زیادہ مانگتے تھے (بخاری، مسلم)، اور ”دنیا کی بھلائی“ ہر نعمت کو شامل ہے — صحت، علم، حلال رزق اور نیک شریکِ حیات۔',
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
    background:
      'Allah told His Prophet ﷺ not to hasten in reciting the Qur’an before its revelation was complete, and instead to pray for more knowledge. The tafsir highlights that this is the only thing in the Qur’an Allah commanded His Messenger ﷺ to ask for more of — a proof of the rank of beneficial knowledge.',
    backgroundUr:
      'اللہ نے اپنے نبی ﷺ کو حکم دیا کہ وحی مکمل ہونے سے پہلے قرآن پڑھنے میں جلدی نہ کریں، بلکہ علم میں اضافے کی دعا کریں۔ تفسیر بتاتی ہے کہ پورے قرآن میں یہ واحد چیز ہے جس میں اضافہ مانگنے کا حکم اللہ نے اپنے رسول ﷺ کو دیا — جو نافع علم کے مرتبے کی دلیل ہے۔',
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
    background:
      'The closing verse of Sūrat al-Muʾminūn, which opened by describing the successful believers. Allah teaches His Prophet ﷺ and the believers to seal the sūrah with a plea for forgiveness and mercy from the One who is the best of those who show mercy.',
    backgroundUr:
      'سورۃ المؤمنون کی اختتامی آیت، جس کا آغاز کامیاب مومنوں کے ذکر سے ہوا تھا۔ اللہ اپنے نبی ﷺ اور مومنوں کو سکھاتا ہے کہ سورت کا اختتام اُس ذات سے مغفرت و رحمت کی دعا پر کریں جو سب سے بہتر رحم کرنے والی ہے۔',
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
    background:
      'When Nūḥ asked about his drowned son — “he is of my family” — he was gently corrected that the boy’s disbelief had cut the tie. He immediately withdrew the request and sought refuge from ever asking what he had no knowledge of. The tafsir notes how a prophet turns even a slip into renewed humility.',
    backgroundUr:
      'جب نوحؑ نے اپنے غرق ہونے والے بیٹے کے بارے میں کہا — ”یہ میرے گھر والوں میں سے ہے“ — تو انہیں نرمی سے بتایا گیا کہ بیٹے کے کفر نے یہ رشتہ کاٹ دیا۔ انہوں نے فوراً اپنا سوال واپس لے لیا اور ایسی چیز مانگنے سے پناہ طلب کی جس کا انہیں علم نہ تھا۔ تفسیر بتاتی ہے کہ نبی لغزش کو بھی نئی عاجزی میں بدل دیتا ہے۔',
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
    background:
      'Only after every means of calling — openly, secretly, by night and day — had been exhausted over centuries did Nūḥ invoke against his people, having been told none of them would believe any longer. The tafsir notes he added that they would only beget more wicked deniers, so his prayer was for the earth’s purification, not personal vengeance.',
    backgroundUr:
      'صدیوں تک دعوت کے ہر طریقے — علانیہ، خفیہ، رات اور دن — کو آزمانے کے بعد ہی نوحؑ نے اپنی قوم کے خلاف بددعا کی، جب انہیں بتا دیا گیا کہ اب اِن میں سے کوئی ایمان نہ لائے گا۔ تفسیر بتاتی ہے کہ انہوں نے یہ بھی کہا کہ یہ صرف بدکار منکر ہی جنیں گے، سو اُن کی دعا زمین کی پاکی کے لیے تھی نہ کہ ذاتی انتقام کے لیے۔',
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
    background:
      'Laying his case before Allah after relentless denial, Nūḥ asked for a decisive verdict and, in the same breath, for the rescue of the believers with him. The tafsir notes the caller’s concern is always twofold: justice against falsehood and safety for the faithful.',
    backgroundUr:
      'مسلسل تکذیب کے بعد اپنا معاملہ اللہ کے سامنے رکھتے ہوئے نوحؑ نے ایک قطعی فیصلہ مانگا اور اِسی سانس میں اپنے ساتھ کے مومنوں کی نجات بھی۔ تفسیر بتاتی ہے کہ داعی کی فکر ہمیشہ دو طرفہ ہوتی ہے: باطل کے خلاف انصاف اور اہلِ ایمان کی سلامتی۔',
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
    background:
      'The opening of Ibrāhīm’s great prayer for Makkah. The tafsir notes that the destroyer of idols still feared idolatry for himself and his children — “and who feels safe from trial?” — teaching that no one should be complacent about their faith.',
    backgroundUr:
      'مکہ کے لیے ابراہیمؑ کی عظیم دعا کا آغاز۔ تفسیر بتاتی ہے کہ بتوں کو توڑنے والے نے بھی اپنے اور اپنی اولاد کے لیے شرک سے خوف کھایا — ”اور کون آزمائش سے بے خوف ہو سکتا ہے؟“ — یہ سکھاتے ہوئے کہ کسی کو اپنے ایمان پر مطمئن نہیں ہونا چاہیے۔',
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
    background:
      'After disowning the idols of his people, Ibrāhīm prayed for sound judgement, righteous company, and an honourable remembrance among those who would come after him. The tafsir notes Allah answered the prayer for lasting good mention: every nation honours Ibrāhīm, and the believers send blessings on him in every ṣalāh.',
    backgroundUr:
      'اپنی قوم کے بتوں سے براءت کے بعد ابراہیمؑ نے صحیح فیصلہ، نیکوں کی صحبت اور بعد میں آنے والوں میں ذکرِ خیر کی دعا کی۔ تفسیر بتاتی ہے کہ اللہ نے دائمی ذکرِ خیر کی دعا قبول فرمائی: ہر قوم ابراہیمؑ کی تعظیم کرتی ہے، اور مومن ہر نماز میں اُن پر درود بھیجتے ہیں۔',
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
    background:
      'Continuing at the foundations of the Ka‘bah, Ibrāhīm and Ismā‘īl prayed not only for their own submission but for a Muslim nation among their offspring, and to be shown the rites of pilgrimage. The tafsir notes this is the prophetic root of the Hajj that Muslims perform to this day.',
    backgroundUr:
      'کعبہ کی بنیادوں پر اپنی دعا جاری رکھتے ہوئے ابراہیمؑ اور اسماعیلؑ نے صرف اپنی فرمانبرداری ہی نہیں بلکہ اپنی اولاد میں سے ایک مسلمان امّت اور مناسکِ حج سکھائے جانے کی دعا کی۔ تفسیر بتاتی ہے کہ یہی وہ نبوی جڑ ہے جس سے آج تک مسلمان حج ادا کرتے ہیں۔',
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
    background:
      'The final petition at the Ka‘bah: a messenger raised from among the people of Makkah to teach and purify them. The Prophet ﷺ said, “I am the supplication of my father Ibrāhīm,” for this prayer was answered, centuries later, in his own person.',
    backgroundUr:
      'کعبہ پر آخری التجا: اہلِ مکہ میں سے ایک ایسا رسول جو انہیں تعلیم دے اور پاک کرے۔ نبی ﷺ نے فرمایا، ”میں اپنے باپ ابراہیمؑ کی دعا ہوں“، کیونکہ یہ دعا صدیوں بعد خود اُن کی ذات میں قبول ہوئی۔',
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
    background:
      'Part of the “excellent example” of Ibrāhīm and the believers with him as they openly dissociated from idolaters. The tafsir explains the plea “make us not a trial” means: do not give the disbelievers power over us, lest they think they are upon truth, or lest we be tested beyond our strength.',
    backgroundUr:
      'یہ ابراہیمؑ اور اُن کے ساتھ کے مومنوں کے ”بہترین نمونے“ کا حصہ ہے جب انہوں نے کھلے عام مشرکین سے براءت کی۔ تفسیر بتاتی ہے کہ ”ہمیں آزمائش نہ بنا“ کا مطلب ہے: کافروں کو ہم پر غلبہ نہ دے، کہیں وہ یہ نہ سمجھیں کہ وہ حق پر ہیں، یا ہم اپنی طاقت سے زیادہ آزمائے نہ جائیں۔',
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
    background:
      'When his people met his warning with mockery and threatened to expel him, Lūṭ turned to Allah for support against those spreading corruption in the land. The tafsir notes the help came swiftly: the angels who had visited Ibrāhīm went on to overturn the cities of Lūṭ’s people.',
    backgroundUr:
      'جب اُن کی قوم نے اُن کی تنبیہ کا جواب استہزاء سے دیا اور انہیں نکالنے کی دھمکی دی تو لوطؑ نے زمین میں فساد پھیلانے والوں کے مقابلے میں اللہ سے مدد طلب کی۔ تفسیر بتاتی ہے کہ مدد جلد آ گئی: وہی فرشتے جو ابراہیمؑ کے پاس آئے تھے، آگے بڑھ کر لوطؑ کی قوم کی بستیاں الٹ گئے۔',
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
    background:
      'Tempted by the minister’s wife and then by the women of the city, Yūsuf chose prison over sin and confessed his own weakness before Allah — that without divine help even he might yield. The tafsir highlights that true strength lies not in self-reliance but in begging Allah to turn temptation away.',
    backgroundUr:
      'عزیز کی بیوی اور پھر شہر کی عورتوں کی آزمائش میں یوسفؑ نے گناہ پر قید کو ترجیح دی اور اللہ کے سامنے اپنی کمزوری کا اعتراف کیا — کہ توفیقِ الٰہی کے بغیر وہ بھی پھسل سکتے ہیں۔ تفسیر بتاتی ہے کہ اصل قوت خود اعتمادی میں نہیں بلکہ اللہ سے آزمائش کو ہٹانے کی التجا میں ہے۔',
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
    background:
      'After Mūsā struck and unintentionally killed an Egyptian while defending an Israelite, he turned at once to Allah, owning the act as a wrong against himself. The tafsir notes the swiftness of mercy: Allah’s forgiveness is recorded in the very same verse — “so He forgave him.”',
    backgroundUr:
      'ایک اسرائیلی کی مدد کرتے ہوئے موسیٰؑ کے ہاتھوں جب غیر ارادی طور پر ایک قبطی مارا گیا تو انہوں نے فوراً اللہ کی طرف رجوع کیا اور اِسے اپنی جان پر ظلم تسلیم کیا۔ تفسیر رحمت کی سرعت بیان کرتی ہے: اللہ کی مغفرت اِسی آیت میں درج ہے — ”پس اُس نے اُسے بخش دیا۔“',
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
    background:
      'Warned by a sincere man that the chiefs of Egypt were plotting to kill him, Mūsā fled the city watchful and afraid, asking Allah to save him from the oppressors. The tafsir notes the prayer was answered with safe passage to Madyan and a new chapter of his life.',
    backgroundUr:
      'ایک خیر خواہ شخص کے خبردار کرنے پر کہ مصر کے سردار اُنہیں قتل کرنے کی سازش کر رہے ہیں، موسیٰؑ ڈرتے ہوئے، چوکنّے ہو کر شہر سے نکلے اور اللہ سے ظالموں سے نجات کی دعا کی۔ تفسیر بتاتی ہے کہ یہ دعا مدین تک محفوظ پہنچنے اور اُن کی زندگی کے نئے باب کی صورت میں قبول ہوئی۔',
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
    background:
      'After Pharaoh used his wealth and splendour to turn people from the path of Allah and showed no sign of relenting, Mūsā invoked against him — with Hārūn saying “āmīn,” as the tafsir relates. The supplication was answered after long forbearance, when the believers’ patience had been fully shown.',
    backgroundUr:
      'جب فرعون نے اپنے مال و شان کو لوگوں کو اللہ کے راستے سے پھیرنے کے لیے استعمال کیا اور باز آنے کا کوئی اشارہ نہ دیا، تو موسیٰؑ نے اُس کے خلاف بددعا کی — اور تفسیر کے مطابق ہارونؑ ”آمین“ کہتے رہے۔ یہ دعا طویل تحمل کے بعد، جب مومنوں کا صبر پوری طرح ظاہر ہو چکا، قبول ہوئی۔',
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
    background:
      'When the Children of Israel refused to enter the holy land as commanded, saying they would never go in while its people were there, Mūsā — abandoned by all but Hārūn — placed his helplessness before Allah and asked for separation from the rebellious. The tafsir notes the consequence: forty years of wandering in the wilderness.',
    backgroundUr:
      'جب بنی اسرائیل نے حکم کے باوجود ارضِ مقدس میں داخل ہونے سے انکار کیا اور کہا کہ جب تک وہاں کے لوگ موجود ہیں ہم ہرگز داخل نہ ہوں گے، تو موسیٰؑ نے — جنہیں ہارونؑ کے سوا سب نے چھوڑ دیا تھا — اپنی بے بسی اللہ کے سامنے رکھی اور نافرمانوں سے جدائی مانگی۔ تفسیر بتاتی ہے کہ نتیجہ چالیس سال کی صحرا نوردی تھی۔',
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
    background:
      'After a trial that turned him back to Allah, Sulaymān began with forgiveness and then asked for a unique kingdom — sought not for vanity but as a miracle proving his prophethood. The tafsir notes Allah granted it, subjecting to him the wind and the jinn.',
    backgroundUr:
      'ایک آزمائش کے بعد جس نے انہیں اللہ کی طرف لوٹایا، سلیمانؑ نے پہلے مغفرت مانگی اور پھر ایک بے مثل بادشاہی — جو فخر کے لیے نہیں بلکہ اپنی نبوت کی نشانی کے طور پر۔ تفسیر بتاتی ہے کہ اللہ نے اُسے عطا فرمایا اور ہوا اور جنّات کو اُن کے تابع کر دیا۔',
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
    background:
      'A second account of Ayyūb’s call, where he attributes the weariness and pain to Satan’s touch while keeping perfect courtesy with Allah. The tafsir notes Allah’s answer in the next verses: “Strike with your foot” — and a cool spring gushed forth for washing and drinking that healed him.',
    backgroundUr:
      'ایوبؑ کی پکار کا دوسرا بیان، جہاں وہ تھکن اور تکلیف کو شیطان کے اثر سے منسوب کرتے ہیں مگر اللہ کے ساتھ کامل ادب برقرار رکھتے ہیں۔ تفسیر بتاتی ہے کہ اللہ کا جواب اگلی آیات میں ہے: ”اپنا پاؤں مارو“ — اور ایک ٹھنڈا چشمہ پھوٹ پڑا جس سے نہا کر اور پی کر انہیں شفا ملی۔',
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
    background:
      'The fuller, intimate form of Zakariyyā’s prayer: he opens by recalling Allah’s long habit of answering him, then lays out his frailty, his barren wife, and his fear for the faith after him — asking for an heir to religion, not merely wealth. The tafsir notes he prayed quietly, in secret, the dearest manner of asking.',
    backgroundUr:
      'زکریاؑ کی دعا کی مکمل اور دلی صورت: وہ آغاز اللہ کی اِس دیرینہ عادت کے ذکر سے کرتے ہیں کہ اُس نے ہمیشہ اُن کی سنی، پھر اپنی کمزوری، بانجھ بیوی اور اپنے بعد دین کے بارے میں اپنا خوف بیان کرتے ہیں — اور مال نہیں بلکہ دین کا وارث مانگتے ہیں۔ تفسیر بتاتی ہے کہ انہوں نے چپکے سے، پوشیدہ مانگا، جو سب سے پسندیدہ طریقہ ہے۔',
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
    background:
      'On the Day of Judgement, when ‘Īsā is asked whether he told people to take him and his mother as gods, he disowns it entirely and hands their fate back to Allah with flawless adab — neither pleading for the guilty nor presuming on Allah’s decree. The tafsir admires the perfect balance of his words.',
    backgroundUr:
      'روزِ قیامت جب عیسیٰؑ سے پوچھا جائے گا کہ کیا انہوں نے لوگوں سے کہا تھا کہ مجھے اور میری ماں کو معبود بنا لو، تو وہ اِس سے مکمل براءت کریں گے اور لوگوں کا فیصلہ کامل ادب کے ساتھ اللہ کے سپرد کر دیں گے — نہ مجرموں کی سفارش، نہ اللہ کے فیصلے پر جسارت۔ تفسیر اُن کے الفاظ کے کامل توازن کو سراہتی ہے۔',
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
    background:
      'Allah instructs the Prophet ﷺ to repel evil not with anger but with refuge in Him — first from the devils’ promptings, then even from their nearness in any affair. The tafsir notes the lesson that protection from sin begins by guarding against its very approach.',
    backgroundUr:
      'اللہ نبی ﷺ کو ہدایت دیتا ہے کہ بُرائی کو غصے سے نہیں بلکہ اپنی پناہ سے دفع کریں — پہلے شیطانوں کے وسوسوں سے، پھر ہر معاملے میں اُن کی قربت سے بھی۔ تفسیر سبق دیتی ہے کہ گناہ سے حفاظت اُس کے قریب آنے سے بچنے ہی سے شروع ہوتی ہے۔',
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
    background:
      'Many scholars link this verse to the Hijrah: a prayer for a truthful exit from Makkah and a truthful entry into Madinah, crowned by a victory granted by Allah. The tafsir takes it more broadly as asking that every entry and exit be upon truth and divine support.',
    backgroundUr:
      'بہت سے علماء اِس آیت کو ہجرت سے جوڑتے ہیں: مکہ سے سچائی کے ساتھ نکلنے اور مدینہ میں سچائی کے ساتھ داخل ہونے کی دعا، جس پر اللہ کی عطا کردہ فتح کا تاج ہو۔ تفسیر اِسے وسیع تر معنی میں لیتی ہے کہ ہر آمد و رفت حق اور تائیدِ الٰہی پر ہو۔',
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
    background:
      'Immediately after commanding kindness to parents in their old age — not even a word of irritation — the Qur’an teaches this prayer of mercy for them. The tafsir notes it is asked especially for living parents, repaying their care in our helpless infancy with prayer in their frail years.',
    backgroundUr:
      'والدین کے ساتھ، خصوصاً بڑھاپے میں، حسنِ سلوک کے حکم کے فوراً بعد — یہاں تک کہ ”اُف“ تک نہ کہنے کے — قرآن اُن کے لیے یہ دعائے رحمت سکھاتا ہے۔ تفسیر بتاتی ہے کہ یہ خاص طور پر زندہ والدین کے لیے ہے، کہ بے بس بچپن میں اُن کی پرورش کا بدلہ اُن کی کمزوری کے سالوں میں دعا سے دیا جائے۔',
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
    background:
      'The closing verse of Sūrat al-Anbiyāʾ. Facing the denials and false claims of his people, the Prophet ﷺ is taught to leave judgement to Allah and to seek the Most Merciful’s help against what they fabricate. The tafsir notes the calm confidence of one who entrusts the verdict to the perfectly Just.',
    backgroundUr:
      'سورۃ الانبیاء کی اختتامی آیت۔ اپنی قوم کی تکذیب اور جھوٹے دعوؤں کے سامنے نبی ﷺ کو سکھایا جاتا ہے کہ فیصلہ اللہ پر چھوڑ دیں اور اُن کی بنائی ہوئی باتوں کے خلاف رحمٰن سے مدد مانگیں۔ تفسیر اُس پُرسکون اطمینان کو بیان کرتی ہے جو فیصلہ کامل عادل کے سپرد کرنے سے آتا ہے۔',
  },

  // ---------------- General / Other Quranic Duas ----------------

  {
    id: 'gen-baqarah-end',
    prophet: 'The Believers',
    prophetAr: 'المؤمنون',
    prophetUr: 'مومنین',
    category: 'forgiveness',
    arabic:
      'رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
    transliteration:
      'Rabbanā lā tu’ākhidhnā in nasīnā aw akhṭa’nā. Rabbanā wa lā taḥmil ‘alaynā iṣran kamā ḥamaltahū ‘ala-lladhīna min qablinā. Rabbanā wa lā tuḥammilnā mā lā ṭāqata lanā bih, wa-‘fu ‘annā wa-ghfir lanā wa-rḥamnā, anta mawlānā fa-nṣurnā ‘ala-l-qawmi-l-kāfirīn',
    english:
      'Our Lord, do not impose blame upon us if we forget or make a mistake. Our Lord, lay not upon us a burden like that which You laid upon those before us. Our Lord, burden us not with that which we have no ability to bear. Pardon us, forgive us, and have mercy upon us. You are our protector, so give us victory over the disbelieving people.',
    urdu: 'اے ہمارے رب! اگر ہم بھول جائیں یا خطا کر بیٹھیں تو ہمارا مؤاخذہ نہ فرما۔ اے ہمارے رب! ہم پر ایسا بوجھ نہ ڈال جیسا تو نے ہم سے پہلے لوگوں پر ڈالا تھا۔ اے ہمارے رب! ہم پر وہ بوجھ نہ ڈال جس کی ہم میں طاقت نہیں، اور ہمیں معاف فرما، ہمیں بخش دے اور ہم پر رحم فرما۔ تو ہی ہمارا مولا ہے، پس کافروں کے مقابلے میں ہماری مدد فرما۔',
    reference: 'Surah Al-Baqarah 2:286',
    note: 'The closing verses of Surah Al-Baqarah.',
    background:
      'These are the closing words of the longest sūrah, granted — per a ḥadīth in Muslim — as a special treasure on the night of the Ascent. After affirming that Allah burdens no soul beyond its capacity, the believers make this layered plea for pardon, ease and victory. The tafsir relates that Allah answered each request with “I have done so.”',
    backgroundUr:
      'یہ سب سے طویل سورت کی اختتامی آیات ہیں، جو — مسلم کی حدیث کے مطابق — شبِ معراج ایک خاص خزانے کے طور پر عطا ہوئیں۔ یہ بیان کرنے کے بعد کہ اللہ کسی جان پر اُس کی طاقت سے زیادہ بوجھ نہیں ڈالتا، مومن معافی، آسانی اور نصرت کی یہ پے در پے دعا کرتے ہیں۔ تفسیر بیان کرتی ہے کہ اللہ نے ہر درخواست پر فرمایا: ”میں نے ایسا کر دیا۔“',
  },
  {
    id: 'gen-imran-firm',
    prophet: 'The Believers',
    prophetAr: 'المؤمنون',
    prophetUr: 'مومنین',
    category: 'steadfastness',
    arabic:
      'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ',
    transliteration:
      'Rabbanā lā tuzigh qulūbanā ba‘da idh hadaytanā wa hab lanā min ladunka raḥmah, innaka anta-l-Wahhāb',
    english:
      'Our Lord, let not our hearts deviate after You have guided us, and grant us from Yourself mercy. Indeed, You are the Bestower.',
    urdu: 'اے ہمارے رب! ہمارے دلوں کو ہدایت دینے کے بعد ٹیڑھا نہ کر، اور ہمیں اپنے پاس سے رحمت عطا فرما۔ بے شک تو ہی بہت بڑا عطا کرنے والا ہے۔',
    reference: 'Surah Aal ‘Imran 3:8',
    background:
      'The supplication of those firmly grounded in knowledge, made right after a warning against chasing the ambiguous verses to cause discord. The tafsir notes that hearts turn between Allah’s fingers, so the wise never trust their own constancy but beg Him to keep them firm. The Prophet ﷺ often prayed, “O Turner of hearts, keep my heart firm upon Your religion.”',
    backgroundUr:
      'یہ علم میں پختہ لوگوں کی دعا ہے، جو متشابہ آیات کے پیچھے پڑ کر فتنہ پھیلانے سے تنبیہ کے فوراً بعد آئی۔ تفسیر بتاتی ہے کہ دل اللہ کی انگلیوں کے درمیان پھرتے رہتے ہیں، اِس لیے دانا اپنی ثابت قدمی پر بھروسہ نہیں کرتے بلکہ اُس سے استقامت مانگتے ہیں۔ نبی ﷺ اکثر دعا کرتے: ”اے دلوں کے پھیرنے والے! میرے دل کو اپنے دین پر جما دے۔“',
  },
  {
    id: 'gen-imran-believers',
    prophet: 'The Believers',
    prophetAr: 'المؤمنون',
    prophetUr: 'مومنین',
    category: 'forgiveness',
    arabic: 'رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ',
    transliteration: 'Rabbanā innanā āmannā fa-ghfir lanā dhunūbanā wa qinā ‘adhāba-n-nār',
    english:
      'Our Lord, indeed we have believed, so forgive us our sins and protect us from the punishment of the Fire.',
    urdu: 'اے ہمارے رب! بے شک ہم ایمان لائے، پس ہمارے گناہ بخش دے اور ہمیں آگ کے عذاب سے بچا۔',
    reference: 'Surah Aal ‘Imran 3:16',
    background:
      'Among the qualities of the God-fearing whom Allah praises is this prayer: they offer their faith as the means of their plea — “we have believed, *so* forgive us.” The tafsir lists them as the patient, truthful, devoutly obedient, and those who seek forgiveness in the depths of the night before dawn.',
    backgroundUr:
      'جن متقین کی اللہ تعریف کرتا ہے اُن کی صفات میں یہ دعا بھی ہے: وہ اپنے ایمان کو اپنی التجا کا وسیلہ بناتے ہیں — ”ہم ایمان لائے، *پس* ہمیں بخش دے۔“ تفسیر انہیں صبر کرنے والے، سچے، فرمانبردار اور سحر کے وقت استغفار کرنے والے قرار دیتی ہے۔',
  },
  {
    id: 'gen-imran-reflect',
    prophet: 'People of Understanding',
    prophetAr: 'أولو الألباب',
    prophetUr: 'اہلِ دانش',
    category: 'guidance',
    arabic: 'رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ',
    transliteration: 'Rabbanā mā khalaqta hādhā bāṭilan subḥānaka fa-qinā ‘adhāba-n-nār',
    english:
      'Our Lord, You did not create this in vain; exalted are You above such a thing; so protect us from the punishment of the Fire.',
    urdu: 'اے ہمارے رب! تو نے یہ سب بے مقصد نہیں بنایا، تو پاک ہے، پس ہمیں آگ کے عذاب سے بچا۔',
    reference: 'Surah Aal ‘Imran 3:191',
    background:
      'The prayer of the “people of understanding” (ulu-l-albāb) who remember Allah standing, sitting and lying down, and reflect on the creation of the heavens and earth. The tafsir notes that genuine contemplation of the universe leads not to idle wonder but to conviction in the Hereafter and a plea for safety from the Fire.',
    backgroundUr:
      'یہ ”اہلِ دانش“ کی دعا ہے جو کھڑے، بیٹھے اور لیٹے اللہ کو یاد کرتے اور آسمانوں و زمین کی تخلیق پر غور کرتے ہیں۔ تفسیر بتاتی ہے کہ کائنات پر حقیقی تدبر بے مقصد حیرت کی طرف نہیں بلکہ آخرت کے یقین اور آگ سے پناہ کی التجا کی طرف لے جاتا ہے۔',
  },
  {
    id: 'gen-imran-forgive',
    prophet: 'People of Understanding',
    prophetAr: 'أولو الألباب',
    prophetUr: 'اہلِ دانش',
    category: 'forgiveness',
    arabic:
      'رَبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلْإِيمَانِ أَنْ آمِنُوا بِرَبِّكُمْ فَآمَنَّا ۚ رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ ۚ رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَىٰ رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ الْقِيَامَةِ ۗ إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ',
    transliteration:
      'Rabbanā innanā sami‘nā munādiyan yunādī lil-īmāni an āminū bi-Rabbikum fa-āmannā. Rabbanā fa-ghfir lanā dhunūbanā wa kaffir ‘annā sayyi’ātinā wa tawaffanā ma‘a-l-abrār. Rabbanā wa ātinā mā wa‘adtanā ‘alā rusulika wa lā tukhzinā yawma-l-qiyāmah, innaka lā tukhlifu-l-mī‘ād',
    english:
      'Our Lord, indeed we have heard a caller calling to faith, [saying], “Believe in your Lord,” and we have believed. Our Lord, so forgive us our sins and remove from us our misdeeds and cause us to die with the righteous. Our Lord, and grant us what You promised us through Your messengers and do not disgrace us on the Day of Resurrection. Indeed, You do not fail in [Your] promise.',
    urdu: 'اے ہمارے رب! بے شک ہم نے ایک پکارنے والے کو ایمان کی طرف پکارتے سنا کہ اپنے رب پر ایمان لاؤ، سو ہم ایمان لے آئے۔ اے ہمارے رب! ہمارے گناہ بخش دے اور ہماری برائیاں ہم سے دور کر دے اور ہمیں نیک لوگوں کے ساتھ موت دے۔ اے ہمارے رب! ہمیں وہ عطا فرما جس کا تو نے اپنے رسولوں کے ذریعے ہم سے وعدہ کیا، اور قیامت کے دن ہمیں رسوا نہ کر۔ بے شک تو وعدہ خلافی نہیں کرتا۔',
    reference: 'Surah Aal ‘Imran 3:193–194',
    background:
      'The climax of the prayer of the people of understanding: having answered the caller to faith — the Messenger ﷺ, or the Qur’an itself — they ask for forgiveness, a righteous death, and the fulfilment of Allah’s promise without disgrace on Judgement Day. The tafsir notes Allah responds in the next verse that He never lets the work of any worker be lost.',
    backgroundUr:
      'اہلِ دانش کی دعا کا نقطۂ عروج: ایمان کی طرف بلانے والے — رسول ﷺ یا خود قرآن — کی پکار پر لبیک کہنے کے بعد وہ مغفرت، نیک موت اور قیامت کے دن رسوائی کے بغیر اللہ کے وعدے کی تکمیل مانگتے ہیں۔ تفسیر بتاتی ہے کہ اللہ اگلی آیت میں جواب دیتا ہے کہ وہ کسی عمل کرنے والے کے عمل کو ہرگز ضائع نہیں کرتا۔',
  },
  {
    id: 'gen-kahf-youth',
    prophet: 'People of the Cave',
    prophetAr: 'أصحاب الكهف',
    prophetUr: 'اصحابِ کہف',
    category: 'guidance',
    arabic: 'رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',
    transliteration: 'Rabbanā ātinā min ladunka raḥmatan wa hayyi’ lanā min amrinā rashadā',
    english:
      'Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.',
    urdu: 'اے ہمارے رب! ہمیں اپنے پاس سے رحمت عطا فرما اور ہمارے کام میں ہمارے لیے درستی (و ہدایت) مہیا فرما۔',
    reference: 'Surah Al-Kahf 18:10',
    background:
      'A group of young believers, fleeing a tyrant who would force them into idolatry, took refuge in a cave and made this prayer for mercy and a sound way out. The tafsir notes Allah answered by casting sleep over them for over three centuries and then raising them — a sign that He protects those who flee to Him with their faith.',
    backgroundUr:
      'چند نوجوان مومن، ایک ظالم بادشاہ سے بھاگ کر جو انہیں شرک پر مجبور کرنا چاہتا تھا، ایک غار میں پناہ گزین ہوئے اور رحمت اور درست راستے کی یہ دعا کی۔ تفسیر بتاتی ہے کہ اللہ نے انہیں تین صدیوں سے زیادہ نیند میں ڈال کر پھر اٹھایا — اِس بات کی نشانی کہ وہ اپنے ایمان سمیت اُس کی طرف بھاگنے والوں کی حفاظت کرتا ہے۔',
  },
  {
    id: 'gen-yunus-believers',
    prophet: 'The Believers',
    prophetAr: 'المؤمنون',
    prophetUr: 'مومنین',
    category: 'protection',
    arabic:
      'عَلَى اللَّهِ تَوَكَّلْنَا رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ',
    transliteration:
      '‘Ala-llāhi tawakkalnā, Rabbanā lā taj‘alnā fitnatan lil-qawmi-ẓ-ẓālimīn, wa najjinā bi-raḥmatika mina-l-qawmi-l-kāfirīn',
    english:
      'Upon Allah we have relied. Our Lord, make us not [objects of] trial for the wrongdoing people, and save us by Your mercy from the disbelieving people.',
    urdu: 'ہم نے اللہ ہی پر بھروسہ کیا۔ اے ہمارے رب! ہمیں ظالم لوگوں کے لیے آزمائش نہ بنا، اور ہمیں اپنی رحمت سے کافر قوم سے نجات دے۔',
    reference: 'Surah Yunus 10:85–86',
    background:
      'The few young believers among Mūsā’s people, in terror of Pharaoh’s persecution, declared their reliance on Allah and asked not to be made a means by which the oppressors are emboldened, and to be delivered from the disbelievers. The tafsir explains “a trial for the wrongdoers” as: do not let them gain power over us and so suppose they are upon truth.',
    backgroundUr:
      'موسیٰؑ کی قوم کے چند نوجوان مومن، فرعون کے ظلم سے خوف زدہ، اللہ پر اپنے بھروسے کا اعلان کر کے دعا کرتے ہیں کہ انہیں ظالموں کے لیے ایسا ذریعہ نہ بنایا جائے جس سے اُن کی جسارت بڑھے، اور انہیں کافروں سے نجات دی جائے۔ تفسیر ”ظالموں کے لیے آزمائش“ کا مطلب یہ بتاتی ہے: انہیں ہم پر غلبہ نہ دے کہ وہ سمجھ بیٹھیں کہ وہ حق پر ہیں۔',
  },
  {
    id: 'gen-hashr-brotherhood',
    prophet: 'The Believers',
    prophetAr: 'المؤمنون',
    prophetUr: 'مومنین',
    category: 'mercy',
    arabic:
      'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِّلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَّحِيمٌ',
    transliteration:
      'Rabbana-ghfir lanā wa li-ikhwānina-lladhīna sabaqūnā bil-īmāni wa lā taj‘al fī qulūbinā ghillan lilladhīna āmanū, Rabbanā innaka ra’ūfun raḥīm',
    english:
      'Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts [any] resentment toward those who have believed. Our Lord, indeed You are Kind and Merciful.',
    urdu: 'اے ہمارے رب! ہمیں اور ہمارے اُن بھائیوں کو بخش دے جو ایمان میں ہم سے پہلے گزرے، اور ہمارے دلوں میں اہلِ ایمان کے لیے کوئی کینہ نہ رکھ۔ اے ہمارے رب! بے شک تو نہایت شفقت کرنے والا، رحم کرنے والا ہے۔',
    reference: 'Surah Al-Hashr 59:10',
    background:
      'The prayer of those who come after the first believers, asking forgiveness for themselves and for the earlier generations, and that their hearts hold no rancour toward any believer. The tafsir notes this verse is the basis for honouring the Companions and the pious predecessors and for guarding the unity of the believers’ hearts.',
    backgroundUr:
      'یہ اُن لوگوں کی دعا ہے جو پہلے مومنوں کے بعد آئے، اپنے اور پہلوں کے لیے مغفرت مانگتے ہیں، اور یہ کہ اُن کے دلوں میں کسی مومن کے لیے کینہ نہ ہو۔ تفسیر بتاتی ہے کہ یہ آیت صحابہ اور اسلافِ صالحین کی تعظیم اور مومنوں کے دلوں کی وحدت کی حفاظت کی بنیاد ہے۔',
  },
  {
    id: 'gen-tahrim-light',
    prophet: 'The Believers',
    prophetAr: 'المؤمنون',
    prophetUr: 'مومنین',
    category: 'guidance',
    arabic: 'رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: 'Rabbanā atmim lanā nūranā wa-ghfir lanā, innaka ‘alā kulli shay’in qadīr',
    english:
      'Our Lord, perfect for us our light and forgive us. Indeed, You are over all things competent.',
    urdu: 'اے ہمارے رب! ہمارے لیے ہمارا نور مکمل فرما دے اور ہمیں بخش دے۔ بے شک تو ہر چیز پر قادر ہے۔',
    reference: 'Surah At-Tahrim 66:8',
    background:
      'After the call to sincere repentance (tawbah naṣūḥah), the verse describes the believers on the Day of Judgement: their light runs ahead of them across the Bridge, and they pray that Allah complete it — for some will see their light flicker. The tafsir links it to deeds: the more faithful the worship, the brighter and more lasting the light.',
    backgroundUr:
      'سچی توبہ (توبۂ نصوح) کی دعوت کے بعد یہ آیت قیامت کے دن مومنوں کا حال بیان کرتی ہے: اُن کا نور پل صراط پر اُن کے آگے آگے دوڑتا ہے، اور وہ دعا کرتے ہیں کہ اللہ اُسے مکمل کر دے — کیونکہ بعض کا نور لرزتا ہوگا۔ تفسیر اِسے اعمال سے جوڑتی ہے: عبادت جتنی خالص، نور اتنا ہی روشن اور دیرپا۔',
  },
  {
    id: 'gen-furqan-servants',
    prophet: 'Servants of the Most Merciful',
    prophetAr: 'عباد الرحمٰن',
    prophetUr: 'عباد الرحمٰن',
    category: 'progeny',
    arabic:
      'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    transliteration:
      'Rabbanā hab lanā min azwājinā wa dhurriyyātinā qurrata a‘yunin wa-j‘alnā lil-muttaqīna imāmā',
    english:
      'Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us a leader (an example) for the righteous.',
    urdu: 'اے ہمارے رب! ہمیں ہماری بیویوں اور اولاد سے آنکھوں کی ٹھنڈک عطا فرما، اور ہمیں پرہیزگاروں کا پیشوا بنا۔',
    reference: 'Surah Al-Furqan 25:74',
    background:
      'Among the marks of the “servants of the Most Merciful” described at the end of Sūrat al-Furqān is this aspiration: that their families be a source of joy through obedience to Allah, and that they themselves lead the righteous in good. The tafsir notes the “comfort of the eyes” here is seeing one’s loved ones upon faith and uprightness.',
    backgroundUr:
      'سورۃ الفرقان کے آخر میں بیان کردہ ”عبادُ الرحمٰن“ کی علامات میں یہ آرزو بھی ہے: کہ اُن کے اہلِ خانہ اللہ کی فرمانبرداری کے ذریعے خوشی کا باعث بنیں، اور وہ خود نیکی میں پرہیزگاروں کے پیشوا ہوں۔ تفسیر بتاتی ہے کہ یہاں ”آنکھوں کی ٹھنڈک“ سے مراد اپنے پیاروں کو ایمان و استقامت پر دیکھنا ہے۔',
  },
  {
    id: 'gen-furqan-hell',
    prophet: 'Servants of the Most Merciful',
    prophetAr: 'عباد الرحمٰن',
    prophetUr: 'عباد الرحمٰن',
    category: 'protection',
    arabic:
      'رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ ۖ إِنَّ عَذَابَهَا كَانَ غَرَامًا إِنَّهَا سَاءَتْ مُسْتَقَرًّا وَمُقَامًا',
    transliteration:
      'Rabbana-ṣrif ‘annā ‘adhāba jahannama, inna ‘adhābahā kāna gharāmā. Innahā sā’at mustaqarran wa muqāmā',
    english:
      'Our Lord, avert from us the punishment of Hell. Indeed, its punishment is ever adhering; indeed, it is evil as a settlement and residence.',
    urdu: 'اے ہمارے رب! ہم سے جہنم کا عذاب ہٹا دے، بے شک اُس کا عذاب چمٹ جانے والا ہے۔ بے شک وہ ٹھہرنے اور رہنے کی بہت بری جگہ ہے۔',
    reference: 'Surah Al-Furqan 25:65–66',
    background:
      'Another trait of the servants of the Most Merciful: despite their worship through the night, they do not feel secure from the Fire but humbly beg to be saved from it. The tafsir notes that fear of Hell alongside hope in Allah’s mercy is the balanced state of the believer; the dread of its clinging, unending torment keeps the heart sincere.',
    backgroundUr:
      'عبادُ الرحمٰن کی ایک اور صفت: رات بھر عبادت کے باوجود وہ جہنم سے بے خوف نہیں ہوتے بلکہ عاجزی سے اُس سے بچنے کی التجا کرتے ہیں۔ تفسیر بتاتی ہے کہ اللہ کی رحمت کی امید کے ساتھ جہنم کا خوف مومن کی متوازن حالت ہے؛ اُس کے چمٹ جانے والے، نہ ختم ہونے والے عذاب کا ڈر دل کو مخلص رکھتا ہے۔',
  },
]
