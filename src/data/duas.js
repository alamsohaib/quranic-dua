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
  dussary: {
    id: 'dussary',
    name: 'Yasser Ad-Dussary',
    nameAr: 'ياسر الدوسري',
    type: 'segment',
  },
  baset: {
    id: 'baset',
    name: 'AbdulBaset AbdulSamad',
    nameAr: 'عبد الباسط عبد الصمد',
    type: 'segment',
  },
  sudais: {
    id: 'sudais',
    name: 'Abdur-Rahman as-Sudais',
    nameAr: 'عبد الرحمٰن السديس',
    type: 'segment',
  },
}

// Per-dua audio map: which surah/ayah(s) each dua covers, plus precise
// per-reciter verse timings (seconds) within each gapless full-surah recording.
// Timings sourced from the Quran.com (QDC) segment data for these exact recordings.
// Alafasy uses exact per-ayah files (everyayah.com), so it needs no timings here.
export const AUDIO = {
  'adam-1': { surah: 7, ayahs: [23], bandar: { from: 324.42, to: 341.53 }, dussary: { from: 363.95, to: 379.1 }, baset: { from: 440.96, to: 460.45 }, sudais: { from: 287.99, to: 299.64 } },
  'nuh-1': { surah: 71, ayahs: [28], bandar: { from: 294.13, to: 317.1 }, dussary: { from: 241.37, to: 265.44 }, baset: { from: 329.05, to: 351.0 }, sudais: { from: 231.51, to: 250.47 } },
  'nuh-2': { surah: 54, ayahs: [10], bandar: { from: 85.77, to: 93.94 }, dussary: { from: 74.0, to: 82.07 }, baset: { from: 96.33, to: 106.16 }, sudais: { from: 63.42, to: 69.25 } },
  'ibrahim-1': { surah: 37, ayahs: [100], bandar: { from: 701.3, to: 705.71 }, dussary: { from: 574.88, to: 578.49 }, baset: { from: 636.08, to: 640.0 }, sudais: { from: 474.87, to: 477.69 } },
  'ibrahim-2': { surah: 14, ayahs: [40], bandar: { from: 1054.63, to: 1068.7 }, dussary: { from: 871.81, to: 882.41 }, baset: { from: 831.8, to: 843.51 }, sudais: { from: 630.61, to: 640.41 } },
  'ibrahim-3': { surah: 14, ayahs: [41], bandar: { from: 1068.7, to: 1079.37 }, dussary: { from: 882.52, to: 890.5 }, baset: { from: 843.51, to: 851.82 }, sudais: { from: 640.41, to: 648.33 } },
  'ibrahim-4': { surah: 2, ayahs: [127], bandar: { from: 2386.94, to: 2401.16 }, dussary: { from: 2718.07, to: 2732.84 }, baset: { from: 3114.04, to: 3137.4 }, sudais: { from: 2219.98, to: 2235.39 } },
  'ibrahim-5': { surah: 2, ayahs: [126], bandar: { from: 2343.63, to: 2386.94 }, dussary: { from: 2678.89, to: 2717.91 }, baset: { from: 3067.88, to: 3114.04 }, sudais: { from: 2189.63, to: 2219.98 } },
  'yusuf-1': { surah: 12, ayahs: [101], bandar: { from: 2014.13, to: 2046.57 }, dussary: { from: 1926.16, to: 1947.4 }, baset: { from: 1998.15, to: 2022.24 }, sudais: { from: 1466.13, to: 1486.3 } },
  'musa-1': { surah: 20, ayahs: [25, 26, 27, 28], bandar: { from: 208.8, to: 222.98 }, dussary: { from: 177.58, to: 189.14 }, baset: { from: 234.45, to: 252.51 }, sudais: { from: 148.12, to: 157.76 } },
  'musa-2': { surah: 28, ayahs: [24], bandar: { from: 488.21, to: 507.73 }, dussary: { from: 391.76, to: 407.92 }, baset: { from: 569.81, to: 590.97 }, sudais: { from: 323.75, to: 335.48 } },
  'musa-3': { surah: 7, ayahs: [151], bandar: { from: 2659.35, to: 2673.93 }, dussary: { from: 3123.06, to: 3132.03 }, baset: { from: 4016.1, to: 4032.67 }, sudais: { from: 2319.0, to: 2329.16 } },
  'ayyub-1': { surah: 21, ayahs: [83], bandar: { from: 1174.89, to: 1189.91 }, dussary: { from: 1005.2, to: 1017.39 }, baset: { from: 1271.04, to: 1287.66 }, sudais: { from: 827.95, to: 836.54 } },
  'yunus-1': { surah: 21, ayahs: [87], bandar: { from: 1237.49, to: 1268.67 }, dussary: { from: 1061.69, to: 1090.89 }, baset: { from: 1351.79, to: 1397.61 }, sudais: { from: 863.24, to: 883.22 } },
  'zakariya-1': { surah: 3, ayahs: [38], bandar: { from: 730.86, to: 744.91 }, dussary: { from: 865.03, to: 881.66 }, baset: { from: 907.01, to: 926.69 }, sudais: { from: 647.47, to: 659.64 } },
  'zakariya-2': { surah: 21, ayahs: [89], bandar: { from: 1281.47, to: 1304.13 }, dussary: { from: 1100.97, to: 1119.15 }, baset: { from: 1412.56, to: 1429.1 }, sudais: { from: 892.49, to: 901.27 } },
  'sulaiman-1': { surah: 27, ayahs: [19], bandar: { from: 331.01, to: 363.18 }, dussary: { from: 265.85, to: 294.24 }, baset: { from: 354.47, to: 397.92 }, sudais: { from: 196.76, to: 217.55 } },
  'lut-1': { surah: 26, ayahs: [169], bandar: { from: 1251.93, to: 1258.78 }, dussary: { from: 1174.58, to: 1180.1 }, baset: { from: 1343.01, to: 1350.49 }, sudais: { from: 889.87, to: 894.49 } },
  'shuayb-1': { surah: 7, ayahs: [89], bandar: { from: 1684.21, to: 1721.51 }, dussary: { from: 2001.21, to: 2038.55 }, baset: { from: 2442.45, to: 2504.52 }, sudais: { from: 1450.66, to: 1483.21 } },
  'isa-1': { surah: 5, ayahs: [114], bandar: { from: 2875.95, to: 2899.24 }, dussary: { from: 3185.92, to: 3219.46 }, baset: { from: 3843.36, to: 3878.13 }, sudais: { from: 2521.04, to: 2542.17 } },
  'muhammad-1': { surah: 2, ayahs: [201], bandar: { from: 4015.35, to: 4036.78 }, dussary: { from: 4488.85, to: 4513.66 }, baset: { from: 5328.71, to: 5352.3 }, sudais: { from: 3761.33, to: 3774.84 } },
  'muhammad-2': { surah: 20, ayahs: [114], bandar: { from: 1414.49, to: 1438.03 }, dussary: { from: 1164.48, to: 1180.06 }, baset: { from: 1505.26, to: 1527.34 }, sudais: { from: 901.0, to: 915.29 } },
  'muhammad-3': { surah: 23, ayahs: [118], bandar: { from: 1561.21, to: 1573.26 }, dussary: { from: 1244.94, to: 1255.65 }, baset: { from: 1524.04, to: 1533.21 }, sudais: { from: 987.31, to: 993.81 } },
  'nuh-knowledge': { surah: 11, ayahs: [47], bandar: { from: 1044.08, to: 1063.59 }, dussary: { from: 992.89, to: 1008.33 }, baset: { from: 1013.13, to: 1032.54 }, sudais: { from: 687.81, to: 701.52 } },
  'nuh-against': { surah: 71, ayahs: [26], bandar: { from: 269.87, to: 279.97 }, dussary: { from: 221.99, to: 229.73 }, baset: { from: 301.35, to: 313.08 }, sudais: { from: 211.71, to: 220.33 } },
  'nuh-decide': { surah: 26, ayahs: [117, 118], bandar: { from: 865.08, to: 879.97 }, dussary: { from: 846.15, to: 861.35 }, baset: { from: 911.7, to: 930.73 }, sudais: { from: 624.89, to: 636.94 } },
  'ibrahim-secure': { surah: 14, ayahs: [35], bandar: { from: 927.09, to: 942.64 }, dussary: { from: 780.32, to: 791.55 }, baset: { from: 725.8, to: 738.19 }, sudais: { from: 561.49, to: 571.13 } },
  'ibrahim-wisdom': { surah: 26, ayahs: [83, 84, 85], bandar: { from: 631.88, to: 653.02 }, dussary: { from: 648.7, to: 668.21 }, baset: { from: 668.98, to: 691.09 }, sudais: { from: 462.87, to: 478.96 } },
  'ibrahim-submit': { surah: 2, ayahs: [128], bandar: { from: 2401.16, to: 2420.23 }, dussary: { from: 2732.93, to: 2753.11 }, baset: { from: 3137.4, to: 3177.24 }, sudais: { from: 2235.39, to: 2254.56 } },
  'ibrahim-messenger': { surah: 2, ayahs: [129], bandar: { from: 2420.23, to: 2438.88 }, dussary: { from: 2753.35, to: 2774.32 }, baset: { from: 3177.24, to: 3208.75 }, sudais: { from: 2254.56, to: 2269.35 } },
  'ibrahim-trust': { surah: 60, ayahs: [5], bandar: { from: 193.54, to: 210.93 }, dussary: { from: 158.45, to: 170.84 }, baset: { from: 237.08, to: 255.08 }, sudais: { from: 143.47, to: 155.41 } },
  'lut-help': { surah: 29, ayahs: [30], bandar: { from: 597.25, to: 603.89 }, dussary: { from: 500.57, to: 507.06 }, baset: { from: 640.9, to: 649.13 }, sudais: { from: 386.45, to: 393.61 } },
  'yusuf-prison': { surah: 12, ayahs: [33], bandar: { from: 645.89, to: 665.45 }, dussary: { from: 647.21, to: 664.75 }, baset: { from: 629.88, to: 659.22 }, sudais: { from: 436.67, to: 450.85 } },
  'musa-self': { surah: 28, ayahs: [16], bandar: { from: 323.5, to: 337.0 }, dussary: { from: 238.54, to: 250.71 }, baset: { from: 355.15, to: 372.32 }, sudais: { from: 198.63, to: 207.85 } },
  'musa-save': { surah: 28, ayahs: [21], bandar: { from: 425.72, to: 439.47 }, dussary: { from: 331.64, to: 344.02 }, baset: { from: 495.25, to: 510.64 }, sudais: { from: 277.43, to: 287.15 } },
  'musa-pharaoh': { surah: 10, ayahs: [88], bandar: { from: 2096.12, to: 2128.34 }, dussary: { from: 1756.48, to: 1786.37 }, baset: { from: 1886.82, to: 1943.12 }, sudais: { from: 1399.49, to: 1425.9 } },
  'musa-separate': { surah: 5, ayahs: [25], bandar: { from: 732.98, to: 745.35 }, dussary: { from: 793.22, to: 805.79 }, baset: { from: 1025.19, to: 1041.57 }, sudais: { from: 619.9, to: 630.32 } },
  'sulaiman-kingdom': { surah: 38, ayahs: [35], bandar: { from: 483.62, to: 498.59 }, dussary: { from: 413.77, to: 428.22 }, baset: { from: 441.58, to: 459.4 }, sudais: { from: 339.1, to: 350.49 } },
  'ayyub-shaytan': { surah: 38, ayahs: [41], bandar: { from: 541.99, to: 556.51 }, dussary: { from: 468.17, to: 480.54 }, baset: { from: 501.53, to: 518.46 }, sudais: { from: 384.63, to: 394.16 } },
  'zakariya-old': { surah: 19, ayahs: [4, 5, 6], bandar: { from: 25.73, to: 61.38 }, dussary: { from: 26.55, to: 66.13 }, baset: { from: 26.92, to: 74.07 }, sudais: { from: 19.9, to: 54.0 } },
  'isa-servants': { surah: 5, ayahs: [118], bandar: { from: 2987.84, to: 3003.92 }, dussary: { from: 3323.5, to: 3347.3 }, baset: { from: 3999.18, to: 4015.15 }, sudais: { from: 2610.04, to: 2632.58 } },
  'muhammad-shaytan': { surah: 23, ayahs: [97, 98], bandar: { from: 1263.18, to: 1277.42 }, dussary: { from: 973.99, to: 984.22 }, baset: { from: 1257.81, to: 1270.7 }, sudais: { from: 827.55, to: 835.44 } },
  'muhammad-entrance': { surah: 17, ayahs: [80], bandar: { from: 1647.01, to: 1666.65 }, dussary: { from: 1271.0, to: 1284.59 }, baset: { from: 1569.93, to: 1588.3 }, sudais: { from: 1075.88, to: 1087.4 } },
  'muhammad-parents': { surah: 17, ayahs: [24], bandar: { from: 536.44, to: 561.05 }, dussary: { from: 446.72, to: 457.65 }, baset: { from: 502.46, to: 516.12 }, sudais: { from: 371.75, to: 387.84 } },
  'muhammad-judge': { surah: 21, ayahs: [112], bandar: { from: 1660.77, to: 1679.06 }, dussary: { from: 1403.22, to: 1418.14 }, baset: { from: 1811.72, to: 1826.88 }, sudais: { from: 1128.48, to: 1142.95 } },
  'gen-baqarah-end': { surah: 2, ayahs: [286], bandar: { from: 6463.65, to: 6522.96 }, dussary: { from: 7186.76, to: 7247.38 }, baset: { from: 8597.5, to: 8655.99 }, sudais: { from: 5909.02, to: 5952.17 } },
  'gen-imran-firm': { surah: 3, ayahs: [8], bandar: { from: 126.86, to: 148.16 }, dussary: { from: 138.94, to: 157.71 }, baset: { from: 148.5, to: 165.85 }, sudais: { from: 100.01, to: 113.49 } },
  'gen-imran-believers': { surah: 3, ayahs: [16], bandar: { from: 297.14, to: 313.87 }, dussary: { from: 335.98, to: 366.62 }, baset: { from: 342.96, to: 360.7 }, sudais: { from: 252.71, to: 264.31 } },
  'gen-imran-reflect': { surah: 3, ayahs: [191], bandar: { from: 3481.74, to: 3506.54 }, dussary: { from: 4095.94, to: 4123.97 }, baset: { from: 4978.34, to: 5014.03 }, sudais: { from: 3116.29, to: 3138.15 } },
  'gen-imran-forgive': { surah: 3, ayahs: [193, 194], bandar: { from: 3519.25, to: 3563.99 }, dussary: { from: 4148.18, to: 4199.25 }, baset: { from: 5031.09, to: 5079.4 }, sudais: { from: 3149.83, to: 3181.65 } },
  'gen-kahf-youth': { surah: 18, ayahs: [10], bandar: { from: 88.11, to: 106.59 }, dussary: { from: 92.07, to: 113.95 }, baset: { from: 121.36, to: 139.57 }, sudais: { from: 75.13, to: 86.21 } },
  'gen-yunus-believers': { surah: 10, ayahs: [85, 86], bandar: { from: 2044.36, to: 2074.26 }, dussary: { from: 1716.96, to: 1734.84 }, baset: { from: 1846.42, to: 1863.7 }, sudais: { from: 1365.11, to: 1379.66 } },
  'gen-hashr-brotherhood': { surah: 59, ayahs: [10], bandar: { from: 275.03, to: 313.13 }, dussary: { from: 241.42, to: 273.03 }, baset: { from: 310.54, to: 350.25 }, sudais: { from: 216.42, to: 239.46 } },
  'gen-tahrim-light': { surah: 66, ayahs: [8], bandar: { from: 217.66, to: 300.08 }, dussary: { from: 161.09, to: 216.75 }, baset: { from: 208.95, to: 291.37 }, sudais: { from: 132.71, to: 190.23 } },
  'gen-furqan-servants': { surah: 25, ayahs: [74], bandar: { from: 1006.6, to: 1022.36 }, dussary: { from: 988.96, to: 1002.9 }, baset: { from: 961.87, to: 977.0 }, sudais: { from: 802.1, to: 815.14 } },
  'gen-furqan-hell': { surah: 25, ayahs: [65, 66], bandar: { from: 892.66, to: 914.1 }, dussary: { from: 860.05, to: 880.08 }, baset: { from: 852.21, to: 872.41 }, sudais: { from: 716.48, to: 732.85 } },
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
      'Allah honoured Ādam — created by His hand, taught the names of all things, and given Paradise to dwell in — but Iblīs, expelled for his arrogant refusal to prostrate, vowed revenge and whispered relentlessly until Ādam and Hawwā ate from the one forbidden tree. The moment they slipped their shame became apparent to them, yet they did not argue or despair as Iblīs had; they turned at once to confession and remorse, pleading that without Allah’s forgiveness and mercy they would be among the losers. Tafsīr al-Muyassar presents these words as the very template of repentance — owning the wrong without excuse and casting oneself wholly on Allah — and Allah accepted Ādam’s tawbah, chose him, and guided him (Qur’an 2:37, 20:122).',
    backgroundUr:
      'اللہ نے آدمؑ کو عزت بخشی — اپنے ہاتھ سے پیدا کیا، تمام چیزوں کے نام سکھائے اور جنت میں ٹھہرایا — مگر ابلیس، جو سجدے سے تکبر کے باعث نکالا گیا تھا، انتقام پر تُل گیا اور مسلسل وسوسے ڈالتا رہا یہاں تک کہ آدمؑ اور حوّا نے واحد ممنوعہ درخت سے کھا لیا۔ لغزش کے فوراً بعد اُن کی شرم گاہیں اُن پر کھل گئیں، پھر بھی انہوں نے ابلیس کی طرح نہ بحث کی نہ مایوسی اختیار کی؛ بلکہ فوراً اعتراف اور ندامت کی طرف پلٹے اور التجا کی کہ اللہ کی مغفرت و رحمت کے بغیر وہ نقصان اٹھانے والوں میں سے ہو جائیں گے۔ تفسیر المیسّر اِن الفاظ کو توبہ کا اصل نمونہ قرار دیتی ہے — بغیر کسی عذر کے اپنی خطا کا اعتراف اور مکمل طور پر اللہ کے سامنے جھک جانا — اور اللہ نے آدمؑ کی توبہ قبول کی، انہیں چن لیا اور ہدایت دی (قرآن ۲:۳۷، ۲۰:۱۲۲)۔',
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
      'Prophet Nūḥ called his people to the worship of Allah alone for nine hundred and fifty years, by night and day, openly and in secret, yet only a few believed and the rest met him with mockery and obstinacy. Near the end of his mission, in Sūrat Nūḥ, he gathered the believers of every age into a single sweeping prayer: forgiveness for himself, for his believing parents, for everyone who entered his home as a believer, and for all believing men and women until the Day of Judgement. Tafsīr al-Muyassar highlights the breadth of a sincere caller’s heart, who does not confine his concern to himself but embraces the whole community of faith; the believing dead are included, which scholars cite as a basis for praying for deceased Muslims.',
    backgroundUr:
      'نوحؑ نے ساڑھے نو سو سال تک، رات دن، علانیہ اور پوشیدہ، اپنی قوم کو صرف اللہ کی عبادت کی دعوت دی، مگر چند ہی ایمان لائے اور باقی نے استہزاء اور ہٹ دھرمی سے سامنا کیا۔ اپنی دعوت کے اختتام کے قریب، سورۂ نوح میں، انہوں نے ہر دور کے مومنوں کو ایک جامع دعا میں سمیٹ لیا: اپنے لیے، اپنے مومن والدین کے لیے، ہر اُس شخص کے لیے جو ایمان کے ساتھ اُن کے گھر داخل ہوا، اور قیامت تک کے تمام مومن مردوں اور عورتوں کے لیے مغفرت۔ تفسیر المیسّر مخلص داعی کے دل کی وسعت کو نمایاں کرتی ہے جو اپنی فکر کو اپنی ذات تک محدود نہیں رکھتا بلکہ پوری امّتِ ایمان کو شامل کر لیتا ہے؛ اِس میں فوت شدہ مومن بھی شامل ہیں، جسے علماء فوت شدہ مسلمانوں کے لیے دعا کی بنیاد قرار دیتے ہیں۔',
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
      'Sūrat al-Qamar recounts how Nūḥ’s people denied him, called him a madman, and drove him away with threats. Worn down after generations of rejection and left utterly outnumbered, he turned to his Lord with the briefest of cries — declaring himself overpowered and asking Allah Himself to take charge of the response. Tafsīr al-Muyassar notes that this surrender of the matter to Allah was answered decisively: the sky was opened with torrential water and the earth burst with springs, and the Flood drowned the deniers while the believers were carried to safety in the Ark.',
    backgroundUr:
      'سورۂ القمر بیان کرتی ہے کہ نوحؑ کی قوم نے انہیں جھٹلایا، مجنون کہا اور دھمکیوں سے دھتکارا۔ نسلوں کی تکذیب سے تھک کر اور بالکل بے یار و مددگار رہ کر، انہوں نے مختصر ترین پکار کے ساتھ اپنے رب کی طرف رجوع کیا — خود کو مغلوب قرار دیا اور اللہ ہی سے بدلہ لینے کی درخواست کی۔ تفسیر المیسّر بتاتی ہے کہ معاملہ اللہ کے سپرد کرنا قطعی طور پر قبول ہوا: آسمان موسلا دھار پانی سے کھول دیا گیا، زمین چشموں سے پھوٹ پڑی، اور طوفان نے منکرین کو غرق کر دیا جبکہ مومن کشتی میں محفوظ کر لیے گئے۔',
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
      'In Sūrat aṣ-Ṣāffāt, after Ibrāhīm broke with his idol-worshipping people, survived being cast into the fire, and migrated for the sake of Allah, he found himself without offspring in a strange land. He did not simply ask for a son but for one ‘from among the righteous,’ placing piety above mere progeny. Tafsīr al-Muyassar notes that Allah answered with the glad tidings of a forbearing boy — Ismā‘īl — through whom Ibrāhīm would be tested with the command to sacrifice, and later He granted Isḥāq, making Ibrāhīm a father of prophets.',
    backgroundUr:
      'سورۂ الصافات میں، جب ابراہیمؑ نے اپنی بُت پرست قوم سے قطع تعلق کیا، آگ میں ڈالے جانے سے بچے اور اللہ کی راہ میں ہجرت کی، تو وہ ایک اجنبی سرزمین میں بے اولاد تھے۔ انہوں نے محض بیٹا نہیں مانگا بلکہ ’نیکوکاروں میں سے‘ ایک بیٹا مانگا، یعنی اولاد پر تقویٰ کو مقدم رکھا۔ تفسیر المیسّر بتاتی ہے کہ اللہ نے ایک بردبار بیٹے — اسماعیلؑ — کی بشارت سے جواب دیا، جن کے ذریعے ابراہیمؑ کو قربانی کے حکم سے آزمایا گیا، اور بعد ازاں اسحاقؑ عطا کیے، یوں ابراہیمؑ کو انبیاء کا باپ بنا دیا۔',
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
      'Towards the end of Sūrat Ibrāhīm comes the long supplication he made after leaving Hājar and the infant Ismā‘īl in the barren valley of Makkah. In it he asks that he and his descendants be kept as those who establish the prayer — not merely perform it, but uphold it with its conditions and at its times — and seals it by begging Allah to accept his supplication. Tafsīr al-Muyassar observes that of all the gifts a father could request for his line, Ibrāhīm prized constancy in ṣalāh above wealth or status, knowing it is the pillar that keeps faith alive.',
    backgroundUr:
      'سورۂ ابراہیم کے آخر میں وہ طویل دعا آتی ہے جو انہوں نے ہاجرہ اور شیر خوار اسماعیلؑ کو مکہ کی بے آب و گیاہ وادی میں چھوڑنے کے بعد مانگی۔ اِس میں وہ دعا کرتے ہیں کہ انہیں اور اُن کی اولاد کو نماز قائم کرنے والا بنایا جائے — محض ادا کرنے والا نہیں بلکہ اُس کی شرائط اور اوقات کے ساتھ قائم رکھنے والا — اور اِسے اِس التجا پر ختم کرتے ہیں کہ اللہ اُن کی دعا قبول فرمائے۔ تفسیر المیسّر بتاتی ہے کہ اپنی نسل کے لیے ہر ممکن تحفے میں سے ابراہیمؑ نے مال یا مرتبے پر نماز کی پابندی کو ترجیح دی، یہ جانتے ہوئے کہ یہی وہ ستون ہے جو ایمان کو زندہ رکھتا ہے۔',
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
      'This closing line of Ibrāhīm’s great prayer lifts his gaze from this world to the Day the reckoning is established, asking forgiveness for himself, his parents, and all the believers. Tafsīr al-Muyassar and Ibn Kathīr explain that his prayer for his father here was made before it became certain that his father would die upon disbelief as an enemy of Allah; once that was clear, Ibrāhīm disowned him, as the Qur’an itself clarifies (9:114). The verse teaches the believer to remember parents and the wider Muslim community in supplication, especially with an eye to the Hereafter.',
    backgroundUr:
      'ابراہیمؑ کی عظیم دعا کا یہ اختتامی جملہ اُن کی نگاہ کو دنیا سے اٹھا کر اُس دن کی طرف لے جاتا ہے جب حساب قائم ہوگا، اور وہ اپنے، اپنے والدین اور تمام مومنوں کے لیے مغفرت مانگتے ہیں۔ تفسیر المیسّر اور ابن کثیر واضح کرتے ہیں کہ یہاں والد کے لیے دعا اُس وقت تھی جب تک یہ یقینی نہ ہوا تھا کہ والد کفر پر، اللہ کے دشمن کی حیثیت سے، مرے گا؛ جب یہ ظاہر ہو گیا تو ابراہیمؑ نے اُس سے براءت کر لی، جیسا کہ قرآن خود وضاحت کرتا ہے (۹:۱۱۴)۔ آیت مومن کو سکھاتی ہے کہ دعا میں والدین اور وسیع تر امّتِ مسلمہ کو، خاص طور پر آخرت کے پیشِ نظر، یاد رکھے۔',
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
      'As Ibrāhīm and his son Ismā‘īl raised the foundations of the Ka‘bah — the first house built for the worship of Allah — they performed the noblest of deeds yet feared it might not be accepted. So with every stone they repeated, ‘Our Lord, accept from us,’ acknowledging that He alone is the All-Hearing of words and All-Knowing of intentions. Tafsīr al-Muyassar draws the lesson that the truly righteous never feel self-satisfied with their worship; they crown their best works with a plea for acceptance rather than a sense of entitlement.',
    backgroundUr:
      'جب ابراہیمؑ اور اُن کے بیٹے اسماعیلؑ کعبہ کی بنیادیں اٹھا رہے تھے — وہ پہلا گھر جو اللہ کی عبادت کے لیے بنایا گیا — تو وہ سب سے عظیم عمل سرانجام دے رہے تھے پھر بھی ڈرتے تھے کہ کہیں قبول نہ ہو۔ سو ہر پتھر کے ساتھ وہ دہراتے: ’اے ہمارے رب! ہم سے قبول فرما‘، یہ اعتراف کرتے ہوئے کہ وہی باتوں کا سننے والا اور نیتوں کا جاننے والا ہے۔ تفسیر المیسّر سبق دیتی ہے کہ سچے نیک لوگ اپنی عبادت پر کبھی خود پسند نہیں ہوتے؛ وہ اپنے بہترین اعمال کو حقداری کے احساس کے بجائے قبولیت کی دعا سے مکمل کرتے ہیں۔',
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
      'Standing in the empty, crop-less valley of Makkah, Ibrāhīm prayed for two things in a deliberate order: first that Allah make it a city of security, then that He provide its people with fruits. Tafsīr al-Muyassar notes the wisdom in this sequence — safety must precede sustenance, for provision can only be enjoyed where there is peace. He further restricted his prayer for provision to the believers among them, and Allah answered by making Makkah an inviolable sanctuary to which the fruits of every land are still carried.',
    backgroundUr:
      'مکہ کی خالی، بے کاشت وادی میں کھڑے ہو کر ابراہیمؑ نے سوچے سمجھے ترتیب سے دو چیزیں مانگیں: پہلے یہ کہ اللہ اِسے امن والا شہر بنائے، پھر یہ کہ اُس کے باشندوں کو پھلوں سے رزق دے۔ تفسیر المیسّر اِس ترتیب کی حکمت بیان کرتی ہے — امن رزق سے مقدم ہونا چاہیے، کیونکہ رزق کا لطف وہیں ہے جہاں امن ہو۔ پھر انہوں نے رزق کی دعا کو اُن میں سے مومنوں تک محدود کیا، اور اللہ نے مکہ کو ایسا حرمت والا شہر بنا کر جواب دیا جہاں آج بھی ہر سرزمین کے پھل لائے جاتے ہیں۔',
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
      'At the summit of worldly success — appointed over the treasures of Egypt, reunited with the parents and brothers who had wronged him, and seeing his childhood vision fulfilled as they bowed before him — Yūsuf turned away from the world he had been given and longed only for a good end. Acknowledging Allah as Creator of the heavens and earth and his sole Protector in both abodes, he asked to die in submission and to be joined with the righteous. Tafsīr al-Muyassar notes that Yūsuf is the first recorded to ask for death upon Islam, and that he made this request at the very moment of greatest ease, when others are most heedless.',
    backgroundUr:
      'دنیاوی کامیابی کے عروج پر — مصر کے خزانوں کا نگران مقرر ہونے، اپنے اُن والدین اور بھائیوں سے ملاپ جنہوں نے زیادتی کی تھی، اور اپنے بچپن کے خواب کی تعبیر دیکھنے پر کہ وہ اُن کے سامنے جھک رہے ہیں — یوسفؑ نے عطا کردہ دنیا سے منہ موڑ کر صرف اچھے انجام کی تمنا کی۔ اللہ کو آسمانوں اور زمین کا خالق اور دونوں جہانوں میں اپنا واحد کارساز مان کر، انہوں نے اسلام پر موت اور نیک لوگوں میں شامل ہونے کی دعا کی۔ تفسیر المیسّر بتاتی ہے کہ یوسفؑ پہلے شخص ہیں جن کا اسلام پر موت مانگنا منقول ہے، اور یہ دعا انہوں نے سب سے زیادہ آسائش کے لمحے میں کی، جب لوگ عموماً سب سے زیادہ غافل ہوتے ہیں۔',
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
      'At the sacred valley of Ṭuwā, Allah commissioned Mūsā to go to Pharaoh, the most tyrannical ruler of his age. Faced with so daunting a task, Mūsā asked not for armies or wealth but for inner equipment: an expanded chest to absorb the burden, ease in his affair, and the untying of the knot in his tongue — a speech difficulty — so his words would be understood. Tafsīr al-Muyassar notes that Allah granted every part of this request in the same passage, and the duʿāʾ remains a model for anyone undertaking a heavy responsibility or fearing to speak the truth.',
    backgroundUr:
      'وادیِ مقدس طویٰ میں اللہ نے موسیٰؑ کو اپنے دور کے سب سے سرکش حکمران فرعون کے پاس جانے پر مامور کیا۔ اِس قدر دشوار کام کے سامنے موسیٰؑ نے لشکر یا مال نہیں بلکہ باطنی وسائل مانگے: بوجھ سہنے کے لیے کھلا سینہ، کام میں آسانی، اور زبان کی گرہ — جو لکنت تھی — کا کھلنا تاکہ اُن کی بات سمجھی جائے۔ تفسیر المیسّر بتاتی ہے کہ اللہ نے اِسی مقام پر اِس دعا کا ہر حصہ قبول فرما لیا، اور یہ دعا ہر اُس شخص کے لیے نمونہ ہے جو کوئی بھاری ذمہ داری اٹھائے یا حق کہنے سے ڈرے۔',
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
      'Having fled Egypt as a wanted man, Mūsā crossed the desert alone, hungry and afraid, until he reached the water of Madyan. There he saw two women holding back their flock and, out of courtesy, watered their animals for them; then he withdrew to the shade and laid his need before Allah without specifying any particular request. Tafsīr al-Muyassar admires the adab of leaving the matter to Allah’s wisdom; the prayer was answered swiftly with food, shelter, honourable work, and marriage into the household of a righteous man.',
    backgroundUr:
      'مصر سے ایک مطلوب شخص کے طور پر بھاگ کر موسیٰؑ تنہا، بھوکے اور خوف زدہ صحرا عبور کرتے ہوئے مدین کے پانی تک پہنچے۔ وہاں انہوں نے دو عورتوں کو اپنے ریوڑ کو روکے دیکھا اور مروّت کے طور پر اُن کے جانوروں کو پانی پلا دیا؛ پھر سائے میں آ کر بغیر کسی خاص درخواست کے اپنی حاجت اللہ کے سامنے رکھ دی۔ تفسیر المیسّر معاملہ اللہ کی حکمت پر چھوڑنے کے ادب کو سراہتی ہے؛ دعا جلد ہی کھانے، پناہ، باعزت کام اور ایک نیک شخص کے گھرانے میں نکاح کی صورت میں قبول ہوئی۔',
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
      'When Mūsā returned from his appointment with his Lord and found his people worshipping the calf, he was overcome with zeal for Allah and, in his anger, seized his brother Hārūn by the head, suspecting him of negligence. When Hārūn explained that he had been overpowered and feared causing division, Mūsā prayed for forgiveness for them both and for entry into Allah’s mercy. Tafsīr al-Muyassar notes his care to include his brother and to appeal to Allah as the Most Merciful of the merciful, modelling how anger should resolve into prayer rather than injustice.',
    backgroundUr:
      'جب موسیٰؑ اپنے رب سے ملاقات سے لوٹے اور اپنی قوم کو بچھڑے کی پرستش کرتے پایا تو اللہ کے لیے غیرت سے بھر گئے اور غصے میں اپنے بھائی ہارونؑ کو سر سے پکڑ لیا، انہیں غفلت کا گمان کرتے ہوئے۔ جب ہارونؑ نے بتایا کہ وہ بے بس کر دیے گئے تھے اور تفرقے کے خوف سے رکے رہے، تو موسیٰؑ نے دونوں کے لیے مغفرت اور اللہ کی رحمت میں داخلے کی دعا کی۔ تفسیر المیسّر اِس بات کو نمایاں کرتی ہے کہ انہوں نے بھائی کو شامل کیا اور اللہ کو سب رحم کرنے والوں سے بڑھ کر رحم کرنے والا پکارا، یوں یہ سکھایا کہ غصہ ناانصافی کے بجائے دعا میں ڈھلنا چاہیے۔',
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
      'Ayyūb was a prophet richly blessed with family, wealth and health, all of which were stripped away as a trial, leaving him afflicted with long illness which he bore with legendary patience. When the hardship had run its course, he did not complain or demand relief but gently placed his state before Allah — ‘adversity has touched me’ — appealing to His mercy with perfect courtesy. Tafsīr al-Muyassar notes the beauty of this adab: he stated his need while praising the One he asked, and Allah responded by removing his suffering, restoring his health, and returning his family and the like of them with it (21:84).',
    backgroundUr:
      'ایوبؑ ایک ایسے نبی تھے جنہیں اہل و عیال، مال اور صحت کی فراوانی سے نوازا گیا تھا، جو سب آزمائش کے طور پر چھین لیے گئے اور وہ طویل بیماری میں مبتلا ہو گئے جسے انہوں نے مثالی صبر سے سہا۔ جب تکلیف اپنی انتہا کو پہنچی تو انہوں نے نہ شکایت کی نہ نجات کا مطالبہ کیا بلکہ نہایت نرمی سے اپنی حالت اللہ کے سامنے رکھی — ’مجھے تکلیف پہنچی ہے‘ — اور کامل ادب کے ساتھ اُس کی رحمت سے فریاد کی۔ تفسیر المیسّر اِس ادب کے حُسن کو بیان کرتی ہے: انہوں نے حاجت کا اظہار اُسی کی تعریف کے ساتھ کیا جس سے مانگ رہے تھے، اور اللہ نے اُن کی تکلیف دور کر کے، صحت بحال کر کے، اور اہل و عیال کو اُن کے ساتھ اُن جیسوں سمیت لوٹا کر جواب دیا (۲۱:۸۴)۔',
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
      'Yūnus grew frustrated when his people delayed in believing and departed in anger before Allah had permitted him to leave. He boarded a ship, was cast into the sea, and swallowed by a great fish, finding himself in three layers of darkness — the night, the sea, and the belly of the fish. There he proclaimed Allah’s oneness, declared Him free of all imperfection, and confessed his own wrongdoing. Tafsīr al-Muyassar and the ḥadīth (Tirmidhī) record that no distressed Muslim supplicates with these words but Allah relieves him; Yūnus was cast onto the shore and his people, a hundred thousand or more, came to believe.',
    backgroundUr:
      'یونسؑ اُس وقت بے صبری کا شکار ہوئے جب اُن کی قوم ایمان لانے میں دیر کرنے لگی، اور وہ اللہ کی اجازت سے پہلے ناراض ہو کر چل دیے۔ وہ ایک کشتی پر سوار ہوئے، سمندر میں ڈالے گئے، اور ایک بڑی مچھلی نے انہیں نگل لیا، یوں وہ تین تاریکیوں میں گھر گئے — رات، سمندر اور مچھلی کا پیٹ۔ وہاں انہوں نے اللہ کی توحید کا اعلان کیا، اُسے ہر نقص سے پاک قرار دیا اور اپنی خطا کا اعتراف کیا۔ تفسیر المیسّر اور حدیث (ترمذی) میں ہے کہ جو پریشان حال مسلمان اِن الفاظ سے دعا کرے، اللہ اُسے ضرور نجات دیتا ہے؛ یونسؑ کنارے پر ڈال دیے گئے اور اُن کی قوم، جو ایک لاکھ یا اِس سے زیادہ تھی، ایمان لے آئی۔',
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
      'Zakariyyā was the guardian of Maryam, and whenever he entered her prayer-niche he found her supplied with provision out of season. Realising that the One who provides without apparent means could grant him a child despite his old age and his wife’s barrenness, he was moved on the spot to ask for pure, righteous offspring, affirming that Allah is the Hearer of supplication. Tafsīr al-Muyassar notes that Allah answered by giving him Yaḥyā — a prophet confirming the word of Allah, noble and chaste.',
    backgroundUr:
      'زکریاؑ مریمؑ کے کفیل تھے، اور جب بھی وہ اُن کی عبادت گاہ میں داخل ہوتے، انہیں بے موسم رزق میسر پاتے۔ یہ جان کر کہ جو ظاہری اسباب کے بغیر رزق دیتا ہے وہ بڑھاپے اور بیوی کے بانجھ پن کے باوجود اولاد بھی دے سکتا ہے، وہ اُسی وقت پاکیزہ، نیک اولاد مانگنے پر آمادہ ہو گئے، یہ اقرار کرتے ہوئے کہ اللہ دعا سننے والا ہے۔ تفسیر المیسّر بتاتی ہے کہ اللہ نے انہیں یحییٰؑ عطا کر کے جواب دیا — ایک نبی جو اللہ کے کلمے کی تصدیق کرنے والا، شریف اور پاک دامن تھا۔',
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
      'In Sūrat al-Anbiyāʾ, among the prayers of the prophets, Zakariyyā’s plea appears in a concise form: he asks his Lord not to leave him single and without an heir. Even while voicing his deep longing, he immediately submits to Allah’s decree by adding, ‘and You are the best of inheritors’ — content that if no child came, Allah Himself would remain. Tafsīr al-Muyassar notes that this balance of earnest asking and complete trust is the hallmark of the prophets’ supplications, and Allah responded by granting him Yaḥyā and setting his wife’s affairs aright for him.',
    backgroundUr:
      'سورۂ الانبیاء میں، انبیاء کی دعاؤں کے ضمن میں، زکریاؑ کی التجا مختصر صورت میں آتی ہے: وہ اپنے رب سے دعا کرتے ہیں کہ اُنہیں اکیلا اور بے وارث نہ چھوڑے۔ اپنی گہری تمنا کا اظہار کرتے ہوئے بھی وہ فوراً اللہ کے فیصلے کے سامنے سر تسلیم خم کرتے ہیں اور کہتے ہیں ’اور تو سب سے بہتر وارث ہے‘ — یعنی اگر اولاد نہ بھی ملے تو اللہ خود باقی ہے، اِس پر مطمئن۔ تفسیر المیسّر بتاتی ہے کہ خلوص بھری طلب اور مکمل توکّل کا یہ توازن انبیاء کی دعاؤں کی پہچان ہے، اور اللہ نے انہیں یحییٰؑ عطا کر کے اور اُن کی بیوی کو اُن کے لیے درست کر کے جواب دیا۔',
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
      'Sulaymān was given a kingdom unlike any other — command over the wind, the jinn, and understanding of the speech of birds and beasts. As his army marched, he overheard an ant warning its colony to take cover lest they be crushed unknowingly; instead of pride at his power, he smiled and turned to Allah asking for the grace to be grateful for His favours upon him and his parents, and to do deeds He approves. Tafsīr al-Muyassar draws the lesson that the more a servant is given, the more he needs Allah’s help to remain thankful and to be admitted by mercy among the righteous.',
    backgroundUr:
      'سلیمانؑ کو ایک بے مثل بادشاہی دی گئی تھی — ہوا اور جنّات پر اختیار اور پرندوں اور جانوروں کی بولی کی سمجھ۔ جب اُن کا لشکر چلا تو انہوں نے ایک چیونٹی کو اپنی برادری کو خبردار کرتے سنا کہ چھپ جاؤ کہیں انجانے میں کچلے نہ جاؤ؛ اپنی طاقت پر تکبر کے بجائے وہ مسکرا دیے اور اللہ کی طرف متوجہ ہو کر دعا کی کہ اُسے اپنی اُن نعمتوں پر، جو اُس نے اُن پر اور اُن کے والدین پر کیں، شکر کی توفیق دے اور ایسے عمل کرنے دے جنہیں وہ پسند کرے۔ تفسیر المیسّر سبق دیتی ہے کہ بندے کو جتنا زیادہ دیا جائے، اُسے شکر گزار رہنے اور رحمت سے نیک بندوں میں داخل ہونے کے لیے اتنی ہی زیادہ اللہ کی مدد درکار ہوتی ہے۔',
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
      'Lūṭ was sent to a people who committed an obscenity no nation had committed before them, openly approaching men instead of women. When they answered his sincere warnings with ridicule and threatened to expel him and his followers, he prayed for Allah to save him and his family from both their evil deeds and the punishment those deeds would surely bring. Tafsīr al-Muyassar notes that Allah delivered him and his household at dawn — all except his wife, who inclined to her people and was destroyed with them when the towns were overturned and rained with stones.',
    backgroundUr:
      'لوطؑ ایسی قوم کی طرف بھیجے گئے جو ایسی بے حیائی کرتی تھی جو اُن سے پہلے کسی قوم نے نہ کی تھی، یعنی عورتوں کے بجائے علانیہ مردوں کے پاس جانا۔ جب انہوں نے اُن کی مخلصانہ تنبیہات کا جواب استہزاء سے دیا اور انہیں اور اُن کے پیروکاروں کو نکالنے کی دھمکی دی، تو انہوں نے دعا کی کہ اللہ انہیں اور اُن کے گھر والوں کو اِن کے بُرے اعمال اور اُن اعمال کے یقینی عذاب دونوں سے بچا لے۔ تفسیر المیسّر بتاتی ہے کہ اللہ نے انہیں اور اُن کے گھرانے کو فجر کے وقت نجات دی — سوائے اُن کی بیوی کے، جو اپنی قوم کی طرف مائل تھی اور بستیوں کے الٹائے جانے اور پتھر برسائے جانے پر اُن کے ساتھ ہلاک ہوئی۔',
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
      'Shu‘ayb was sent to the people of Madyan, who cheated in weights and measures and worshipped others besides Allah. When the arrogant chiefs threatened to drive him and the believers out of the town unless they returned to the religion of their forefathers, he refused to invent a lie against Allah after He had saved him, and entrusted the dispute to Allah’s perfect judgement, calling Him the best of those who decide. Tafsīr al-Muyassar notes that the verdict came as a mighty earthquake and the cry that seized the deniers, leaving them lifeless in their homes.',
    backgroundUr:
      'شعیبؑ مدین والوں کی طرف بھیجے گئے، جو ناپ تول میں کمی کرتے اور اللہ کے سوا دوسروں کی پرستش کرتے تھے۔ جب متکبر سرداروں نے دھمکی دی کہ یا تو وہ اور اہلِ ایمان آبائی دین کی طرف لوٹ آئیں یا بستی سے نکال دیے جائیں، تو انہوں نے اللہ کے نجات دینے کے بعد اُس پر جھوٹ گھڑنے سے انکار کر دیا اور جھگڑے کو اللہ کے کامل فیصلے کے سپرد کر دیا، اُسے سب سے بہتر فیصلہ کرنے والا پکارتے ہوئے۔ تفسیر المیسّر بتاتی ہے کہ فیصلہ ایک زبردست زلزلے اور اُس چنگھاڑ کی صورت میں آیا جس نے منکرین کو آ لیا اور انہیں اُن کے گھروں میں بے جان چھوڑ دیا۔',
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
      'When the disciples of ‘Īsā asked whether his Lord could send down a table spread with food from heaven, he cautioned them to fear Allah, then — at their wish to strengthen their hearts and bear witness — he made this dignified request that it be a recurring festival for the first and last of them and a clear sign from Allah, asking too for provision from the best of providers. Tafsīr al-Muyassar relates that Allah promised to send it down, but with a stern warning that whoever disbelieved afterward would be punished as none in the worlds had been, given the magnitude of the sign they had witnessed.',
    backgroundUr:
      'جب عیسیٰؑ کے حواریوں نے پوچھا کہ کیا اُن کا رب آسمان سے کھانے کا دستر خوان اتار سکتا ہے، تو انہوں نے انہیں اللہ سے ڈرنے کی تلقین کی، پھر — اُن کی دلوں کے اطمینان اور گواہی کی خواہش پر — یہ باوقار دعا کی کہ وہ اُن کے اگلوں اور پچھلوں کے لیے بار بار آنے والی عید اور اللہ کی طرف سے ایک واضح نشانی ہو، اور سب سے بہتر رزق دینے والے سے رزق بھی مانگا۔ تفسیر المیسّر بیان کرتی ہے کہ اللہ نے اُسے اتارنے کا وعدہ کیا، مگر اِس سخت تنبیہ کے ساتھ کہ اِس کے بعد جو کفر کرے گا اُسے ایسا عذاب ہوگا جو جہانوں میں کسی کو نہ ہوا ہوگا، اُس عظیم نشانی کے باعث جسے انہوں نے دیکھا۔',
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
      'In Sūrat al-Baqarah, Allah contrasts the shortsighted who ask only for the good of this world and have no share in the Hereafter with the believers who are taught this perfectly balanced prayer, gathering the welfare of both abodes and refuge from the Fire. Anas ibn Mālik reported that this was the supplication the Prophet ﷺ made most often (Bukhārī and Muslim). Tafsīr al-Muyassar explains that ‘good in this world’ embraces every lawful blessing — health, knowledge, sound provision and a righteous spouse — while ‘good in the Hereafter’ is Paradise and being saved from the punishment of Hell.',
    backgroundUr:
      'سورۂ البقرہ میں اللہ اُن کوتاہ نظر لوگوں کا، جو صرف دنیا کی بھلائی مانگتے ہیں اور آخرت میں اُن کا کوئی حصہ نہیں، اُن مومنوں سے موازنہ کرتا ہے جنہیں یہ کامل متوازن دعا سکھائی گئی، جو دونوں جہانوں کی بھلائی اور آگ سے پناہ کو سمیٹ لیتی ہے۔ انس بن مالکؓ سے روایت ہے کہ یہی وہ دعا تھی جو نبی ﷺ سب سے زیادہ مانگتے تھے (بخاری و مسلم)۔ تفسیر المیسّر بتاتی ہے کہ ’دنیا کی بھلائی‘ ہر حلال نعمت کو شامل ہے — صحت، علم، عمدہ رزق اور نیک شریکِ حیات — جبکہ ’آخرت کی بھلائی‘ جنت اور جہنم کے عذاب سے نجات ہے۔',
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
      'As the Qur’an was being revealed, the Prophet ﷺ would hasten to move his tongue with it for fear of forgetting; Allah reassured him that He would gather and preserve it, and instead directed him to ask for an increase in knowledge. Tafsīr al-Muyassar highlights that this is the only thing in the entire Qur’an that Allah commanded His Messenger ﷺ to seek more of, underscoring the supreme rank of beneficial knowledge. Scholars have loved to recite ‘Rabbi zidnī ‘ilmā’ when opening books, entering gatherings of learning, and seeking understanding.',
    backgroundUr:
      'جب قرآن نازل ہو رہا تھا تو نبی ﷺ بھول جانے کے خوف سے اُسے اپنی زبان پر جلدی جلدی دہراتے؛ اللہ نے انہیں تسلی دی کہ وہی اُسے جمع اور محفوظ کرے گا، اور اِس کے بجائے انہیں علم میں اضافے کی دعا کا حکم دیا۔ تفسیر المیسّر بتاتی ہے کہ پورے قرآن میں یہ واحد چیز ہے جس میں اضافہ مانگنے کا حکم اللہ نے اپنے رسول ﷺ کو دیا، جو نافع علم کے بلند ترین مرتبے کو ظاہر کرتا ہے۔ علماء کتابیں کھولتے، علمی مجالس میں داخل ہوتے اور سمجھ بوجھ طلب کرتے وقت ’رَبِّ زِدْنِی عِلْمًا‘ پڑھنا پسند کرتے رہے ہیں۔',
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
      'Sūrat al-Muʾminūn opens by describing the successful believers and closes by warning the deniers of their fate, then teaches the Prophet ﷺ and the believers to seal it with a plea for forgiveness and mercy from the One who is the very best of those who show mercy. Tafsīr al-Muyassar notes the eloquent symmetry: a chapter that began with the triumph of the faithful ends by directing them to the forgiveness and mercy through which that triumph is secured, never relying on deeds alone.',
    backgroundUr:
      'سورۂ المؤمنون کا آغاز کامیاب مومنوں کے بیان سے ہوتا ہے اور اختتام منکرین کو اُن کے انجام سے خبردار کرنے پر، پھر نبی ﷺ اور مومنوں کو سکھایا جاتا ہے کہ اِسے اُس ذات سے مغفرت و رحمت کی دعا پر ختم کریں جو سب سے بہتر رحم کرنے والی ہے۔ تفسیر المیسّر اِس بلیغ توازن کو بیان کرتی ہے: جو سورت اہلِ ایمان کی کامیابی سے شروع ہوئی، وہ انہیں اُسی مغفرت و رحمت کی طرف متوجہ کر کے ختم ہوتی ہے جس کے ذریعے یہ کامیابی حاصل ہوتی ہے، نہ کہ صرف اعمال کے بھروسے پر۔',
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
      'As the Flood rose, Nūḥ saw one of his sons drowning and called out, ‘my son is of my family, and Your promise is true,’ for Allah had promised to save his household. He was told that the boy was not of his family in faith, since his deeds were unrighteous, and was warned not to ask for what he did not know. Nūḥ at once withdrew the request and sought refuge in Allah from ever asking such a thing again, fearing loss if not forgiven. Tafsīr al-Muyassar notes how a prophet turns even a moment of fatherly grief into renewed humility and submission.',
    backgroundUr:
      'جب طوفان بڑھا تو نوحؑ نے اپنے ایک بیٹے کو ڈوبتے دیکھا اور پکارا، ’میرا بیٹا میرے گھر والوں میں سے ہے، اور تیرا وعدہ سچا ہے‘، کیونکہ اللہ نے اُن کے گھرانے کو بچانے کا وعدہ کیا تھا۔ انہیں بتایا گیا کہ وہ لڑکا ایمان کے اعتبار سے اُن کے گھر والوں میں سے نہیں، کیونکہ اُس کے عمل نیک نہ تھے، اور انہیں تنبیہ کی گئی کہ ایسی چیز نہ مانگیں جس کا انہیں علم نہیں۔ نوحؑ نے فوراً اپنا سوال واپس لے لیا اور اللہ سے پناہ مانگی کہ پھر کبھی ایسی چیز نہ مانگیں، نہ بخشے جانے کی صورت میں نقصان سے ڈرتے ہوئے۔ تفسیر المیسّر بتاتی ہے کہ نبی باپ کے دکھ کے لمحے کو بھی نئی عاجزی اور تسلیم میں بدل دیتا ہے۔',
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
      'Sūrat Nūḥ records that he called his people to Allah for a vast span of time, openly and secretly, promising forgiveness and abundant provision, yet they only grew more obstinate and clung to their idols. Only after Allah revealed that none of them would believe any longer did Nūḥ pray that not a single disbeliever be left to dwell on the earth. Tafsīr al-Muyassar notes he added the reason — that they would only beget wicked, ungrateful deniers — so his prayer was for the purification of the earth from corruption, not personal revenge, and the Flood answered it.',
    backgroundUr:
      'سورۂ نوح میں ہے کہ انہوں نے ایک طویل مدت تک، علانیہ اور پوشیدہ، اپنی قوم کو اللہ کی طرف بلایا، مغفرت اور فراواں رزق کا وعدہ کیا، مگر وہ صرف زیادہ ہٹ دھرم ہوتے گئے اور اپنے بُتوں سے چمٹے رہے۔ صرف اُس وقت، جب اللہ نے ظاہر کر دیا کہ اب اِن میں سے کوئی ایمان نہ لائے گا، نوحؑ نے دعا کی کہ زمین پر کوئی کافر بسنے والا نہ رہے۔ تفسیر المیسّر بتاتی ہے کہ انہوں نے سبب بھی بیان کیا — کہ یہ صرف بدکار، ناشکرے منکر ہی جنیں گے — سو اُن کی دعا زمین کو فساد سے پاک کرنے کے لیے تھی نہ کہ ذاتی انتقام، اور طوفان نے اِس کا جواب دیا۔',
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
      'In Sūrat ash-Shu‘arāʾ, after presenting the long record of his people’s denial and abuse, Nūḥ laid his case before Allah, declaring that his people had rejected him, and asked for a decisive judgement between them. In the same breath he sought the rescue of himself and the believers who were with him. Tafsīr al-Muyassar notes that the sincere caller’s concern is always twofold — justice against falsehood and safety for the faithful — and Allah saved Nūḥ and those with him in the laden Ark while drowning the rest.',
    backgroundUr:
      'سورۂ الشعراء میں، اپنی قوم کی تکذیب اور ایذا کا طویل بیان پیش کرنے کے بعد، نوحؑ نے اپنا معاملہ اللہ کے سامنے رکھا، یہ اعلان کرتے ہوئے کہ اُن کی قوم نے انہیں جھٹلا دیا، اور اُن کے درمیان قطعی فیصلے کی درخواست کی۔ اِسی سانس میں انہوں نے اپنے اور اپنے ساتھ کے مومنوں کی نجات بھی مانگی۔ تفسیر المیسّر بتاتی ہے کہ مخلص داعی کی فکر ہمیشہ دو طرفہ ہوتی ہے — باطل کے خلاف انصاف اور اہلِ ایمان کی سلامتی — اور اللہ نے نوحؑ اور اُن کے ساتھیوں کو بھری ہوئی کشتی میں بچا لیا جبکہ باقیوں کو غرق کر دیا۔',
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
      'This is the opening of Ibrāhīm’s great supplication for Makkah, where he had settled his family. The very destroyer of idols, who had smashed the false gods of his people, still feared idolatry for himself and his children and prayed to be kept far from it. Tafsīr al-Muyassar quotes the saying that no one should feel secure from trial, for hearts can turn; Ibrāhīm’s humility here teaches that firmness in tawḥīd is a gift to be continually begged from Allah, never taken for granted.',
    backgroundUr:
      'یہ مکہ کے لیے ابراہیمؑ کی عظیم دعا کا آغاز ہے، جہاں انہوں نے اپنے اہلِ خانہ کو بسایا تھا۔ بُتوں کو توڑنے والے، جنہوں نے اپنی قوم کے جھوٹے معبود پاش پاش کیے تھے، پھر بھی اپنے اور اپنی اولاد کے لیے شرک سے ڈرتے رہے اور دعا کی کہ اُن سے دور رکھا جائے۔ تفسیر المیسّر اِس قول کو نقل کرتی ہے کہ کسی کو آزمائش سے بے خوف نہیں ہونا چاہیے، کیونکہ دل پلٹ سکتے ہیں؛ ابراہیمؑ کی یہ عاجزی سکھاتی ہے کہ توحید پر ثابت قدمی ایک ایسی نعمت ہے جو ہمیشہ اللہ سے مانگتے رہنا چاہیے، اِسے اپنا حق نہیں سمجھنا چاہیے۔',
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
      'Having openly disowned the idols of his father and people in Sūrat ash-Shu‘arāʾ and declared his devotion to the Lord of the worlds, Ibrāhīm prayed for sound judgement (ḥukm), to be joined with the righteous, for a truthful and honourable mention among later generations, and to be made an heir of the Garden of Bliss. Tafsīr al-Muyassar notes that Allah granted the prayer for lasting good remembrance in full: every faith honours Ibrāhīm, and the Muslims invoke blessings upon him in every prayer, in the very words of the Ibrāhīmī ṣalāh.',
    backgroundUr:
      'سورۂ الشعراء میں اپنے والد اور قوم کے بُتوں سے کھلی براءت اور رب العالمین کے لیے اپنی عبادت کے اعلان کے بعد، ابراہیمؑ نے درست فیصلہ (حکم)، نیکوکاروں میں شمولیت، بعد میں آنے والوں میں سچا اور باعزت ذکر، اور جنتِ نعیم کے وارثوں میں سے بننے کی دعا کی۔ تفسیر المیسّر بتاتی ہے کہ اللہ نے دائمی ذکرِ خیر کی دعا مکمل طور پر قبول فرمائی: ہر مذہب ابراہیمؑ کی تعظیم کرتا ہے، اور مسلمان ہر نماز میں درودِ ابراہیمی کے انہی الفاظ میں اُن پر برکت بھیجتے ہیں۔',
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
      'Continuing at the foundations of the Ka‘bah, Ibrāhīm and Ismā‘īl prayed not only that they themselves remain submitters to Allah but that a nation of their descendants be raised in submission to Him, that they be shown the rites of their worship, and that their repentance be accepted. Tafsīr al-Muyassar notes that this is the prophetic root of the Muslim nation and of the rites of Ḥajj performed to this day, and that they sought Allah by His names ‘the Accepting of repentance, the Merciful.’',
    backgroundUr:
      'کعبہ کی بنیادوں پر اپنی دعا جاری رکھتے ہوئے ابراہیمؑ اور اسماعیلؑ نے نہ صرف اپنے اللہ کے فرمانبردار رہنے کی دعا کی بلکہ یہ کہ اُن کی اولاد میں سے ایک امّت اُس کی فرمانبرداری میں اٹھائی جائے، انہیں عبادت کے طریقے سکھائے جائیں، اور اُن کی توبہ قبول کی جائے۔ تفسیر المیسّر بتاتی ہے کہ یہی مسلم امّت اور آج تک ادا کیے جانے والے مناسکِ حج کی نبوی جڑ ہے، اور انہوں نے اللہ کو اُس کے ناموں ’توبہ قبول کرنے والا، رحم کرنے والا‘ سے پکارا۔',
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
      'The seal of Ibrāhīm’s prayer at the Ka‘bah was a request for a messenger raised from among the people of Makkah, who would recite Allah’s verses to them, teach them the Book and wisdom, and purify them. The Prophet ﷺ said, ‘I am the supplication of my father Ibrāhīm,’ for this very prayer was answered, generations later, in his own blessed person. Tafsīr al-Muyassar notes the order of the request — recitation, teaching, then purification — mirroring how a soul is reformed.',
    backgroundUr:
      'کعبہ پر ابراہیمؑ کی دعا کا اختتام اِس درخواست پر ہوا کہ اہلِ مکہ میں سے ایک ایسا رسول اٹھایا جائے جو انہیں اللہ کی آیتیں پڑھ کر سنائے، انہیں کتاب و حکمت سکھائے اور اُن کا تزکیہ کرے۔ نبی ﷺ نے فرمایا، ’میں اپنے باپ ابراہیمؑ کی دعا ہوں‘، کیونکہ یہی دعا نسلوں بعد خود اُن کی بابرکت ذات میں قبول ہوئی۔ تفسیر المیسّر اِس درخواست کی ترتیب کو نمایاں کرتی ہے — تلاوت، تعلیم، پھر تزکیہ — جو اِس کی عکاسی کرتی ہے کہ روح کی اصلاح کیسے ہوتی ہے۔',
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
      'Sūrat al-Mumtaḥanah presents Ibrāhīm and those with him as an excellent example for the believers, openly dissociating from their idol-worshipping people and putting their trust entirely in Allah. Part of their prayer is ‘make us not a trial for the disbelievers’ — meaning, as Tafsīr al-Muyassar explains, do not give the disbelievers power over us, lest they imagine they are upon truth, or lest we be tempted or tested beyond our endurance — and they ask forgiveness, affirming Allah as the Mighty, the Wise.',
    backgroundUr:
      'سورۂ الممتحنہ ابراہیمؑ اور اُن کے ساتھیوں کو مومنوں کے لیے بہترین نمونہ پیش کرتی ہے، جو اپنی بُت پرست قوم سے کھلی براءت کرتے اور اپنا مکمل بھروسہ اللہ پر رکھتے ہیں۔ اُن کی دعا کا ایک حصہ ’ہمیں کافروں کے لیے آزمائش نہ بنا‘ ہے — یعنی، جیسا تفسیر المیسّر بیان کرتی ہے، کافروں کو ہم پر غلبہ نہ دے کہ کہیں وہ یہ نہ سمجھ بیٹھیں کہ وہ حق پر ہیں، یا ہم آزمائش میں نہ پڑ جائیں یا اپنی برداشت سے زیادہ نہ آزمائے جائیں — اور وہ مغفرت مانگتے ہیں، اللہ کو غالب، حکمت والا مانتے ہوئے۔',
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
      'In Sūrat al-‘Ankabūt, when Lūṭ’s people answered his warning by demanding he bring on Allah’s punishment if he were truthful, and persisted in their corruption, he turned to his Lord asking for help against a people spreading corruption in the land. Tafsīr al-Muyassar notes that the help came swiftly: the angelic messengers who had brought Ibrāhīm glad tidings of a son proceeded to the towns of Lūṭ’s people and overturned them, raining down stones of baked clay.',
    backgroundUr:
      'سورۂ العنکبوت میں، جب لوطؑ کی قوم نے اُن کی تنبیہ کا جواب یہ کہہ کر دیا کہ اگر تم سچے ہو تو اللہ کا عذاب لے آؤ، اور اپنے فساد پر اڑے رہے، تو انہوں نے اپنے رب کی طرف رجوع کر کے زمین میں فساد پھیلانے والی قوم کے خلاف مدد مانگی۔ تفسیر المیسّر بتاتی ہے کہ مدد جلد آ گئی: وہی فرشتے جو ابراہیمؑ کے پاس بیٹے کی بشارت لائے تھے، لوطؑ کی قوم کی بستیوں کی طرف بڑھے اور انہیں الٹ دیا، اُن پر پکی ہوئی مٹی کے پتھر برسا دیے۔',
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
      'When the minister’s wife failed to seduce Yūsuf and the women of the city likewise pressed him, the powerful conspired to imprison him unless he yielded. Faced with sin or jail, Yūsuf declared that prison was dearer to him than what they called him to, and humbly confessed that without Allah’s protection even he might incline toward them and become one of the ignorant. Tafsīr al-Muyassar highlights that true strength lies not in self-reliance but in turning to Allah to avert temptation, and Allah answered him and turned their plot away.',
    backgroundUr:
      'جب عزیز کی بیوی یوسفؑ کو ورغلانے میں ناکام رہی اور شہر کی عورتوں نے بھی اُن پر دباؤ ڈالا، تو بااثر لوگوں نے سازش کی کہ اگر وہ نہ مانیں تو انہیں قید کر دیا جائے۔ گناہ یا قید کے سامنے، یوسفؑ نے کہا کہ جس کی طرف یہ بلاتی ہیں اُس سے قید انہیں زیادہ محبوب ہے، اور عاجزی سے اعتراف کیا کہ اللہ کی حفاظت کے بغیر وہ بھی اِن کی طرف مائل ہو کر نادانوں میں سے ہو سکتے ہیں۔ تفسیر المیسّر بتاتی ہے کہ اصل قوت خود اعتمادی میں نہیں بلکہ آزمائش ٹالنے کے لیے اللہ کی طرف رجوع میں ہے، اور اللہ نے اُن کی دعا قبول کر کے اُن کا فریب ہٹا دیا۔',
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
      'While still in Egypt, Mūsā came upon two men fighting — one of his own people and one of the enemy — and, intervening to help, struck the Egyptian with his fist and unintentionally killed him. Recognising that he had exceeded what he intended, he turned at once to Allah, owning it as a wrong against himself and seeking forgiveness. Tafsīr al-Muyassar notes the swiftness of mercy: Allah’s forgiveness is recorded in the very same verse, ‘so He forgave him; indeed He is the Forgiving, the Merciful.’',
    backgroundUr:
      'ابھی مصر ہی میں موسیٰؑ کا گزر دو لڑتے ہوئے آدمیوں پر ہوا — ایک اُن کی اپنی قوم کا اور ایک دشمن کا — اور مدد کے لیے بیچ میں پڑتے ہوئے انہوں نے قبطی کو مکّا مارا جس سے وہ غیر ارادی طور پر مر گیا۔ یہ جان کر کہ اُن سے ارادے سے زیادہ ہو گیا، انہوں نے فوراً اللہ کی طرف رجوع کیا، اِسے اپنی جان پر ظلم تسلیم کیا اور مغفرت مانگی۔ تفسیر المیسّر رحمت کی سرعت بیان کرتی ہے: اللہ کی مغفرت اِسی آیت میں درج ہے، ’پس اُس نے اُسے بخش دیا، بے شک وہی بخشنے والا، رحم کرنے والا ہے۔‘',
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
      'The next morning, a sincere man came from the far side of the city to warn Mūsā that the chiefs were taking counsel to kill him for the previous day’s killing, and urged him to leave. Mūsā departed the city fearful and watchful, praying to Allah to save him from the wrongdoing people. Tafsīr al-Muyassar notes that the prayer was answered with safe passage to Madyan, far from Pharaoh’s reach, where a new and blessed chapter of his life began.',
    backgroundUr:
      'اگلی صبح ایک خیر خواہ شخص شہر کے دور کنارے سے دوڑتا ہوا آیا کہ موسیٰؑ کو خبردار کرے کہ سردار پچھلے دن کے قتل کی پاداش میں انہیں مارنے کا مشورہ کر رہے ہیں، اور اُسے نکل جانے کی تاکید کی۔ موسیٰؑ ڈرتے، چوکنّے ہو کر شہر سے نکلے اور اللہ سے دعا کی کہ انہیں ظالم قوم سے بچا لے۔ تفسیر المیسّر بتاتی ہے کہ یہ دعا مدین تک محفوظ پہنچنے کی صورت میں قبول ہوئی، فرعون کی پہنچ سے دور، جہاں سے اُن کی زندگی کا ایک نیا اور بابرکت باب شروع ہوا۔',
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
      'After Pharaoh had used the splendour and wealth Allah granted him to turn people away from the path of Allah, and showed no sign of yielding despite every sign, Mūsā invoked against him and his chiefs that their wealth be wiped out and their hearts hardened so they would not believe until they saw the painful punishment. Tafsīr al-Muyassar and the narrations relate that Hārūn said ‘āmīn’ to the prayer, so both are regarded as supplicants, and Allah accepted it after long forbearance — drowning Pharaoh and his army in the sea.',
    backgroundUr:
      'جب فرعون نے اللہ کے عطا کردہ مال و شان کو لوگوں کو اللہ کے راستے سے پھیرنے کے لیے استعمال کیا، اور ہر نشانی کے باوجود باز آنے کا کوئی اشارہ نہ دیا، تو موسیٰؑ نے اُس کے اور اُس کے سرداروں کے خلاف بددعا کی کہ اُن کے مال مٹا دیے جائیں اور اُن کے دل سخت کر دیے جائیں تاکہ وہ دردناک عذاب دیکھنے تک ایمان نہ لائیں۔ تفسیر المیسّر اور روایات بیان کرتی ہیں کہ ہارونؑ نے اِس دعا پر ’آمین‘ کہا، سو دونوں دعا کرنے والے شمار ہوتے ہیں، اور اللہ نے طویل تحمل کے بعد اِسے قبول کیا — فرعون اور اُس کے لشکر کو سمندر میں غرق کر دیا۔',
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
      'When the Children of Israel were commanded to enter the holy land but refused out of fear of its powerful inhabitants, saying they would never enter while those people remained, Mūsā was left supported by none but his brother Hārūn. He laid his helplessness before Allah, confessing that he controlled only himself and his brother, and asked Allah to separate them from the defiantly disobedient people. Tafsīr al-Muyassar notes the consequence Allah decreed: the land was forbidden to that generation for forty years, during which they wandered the wilderness.',
    backgroundUr:
      'جب بنی اسرائیل کو ارضِ مقدس میں داخل ہونے کا حکم ملا مگر انہوں نے اُس کے زورآور باشندوں کے خوف سے انکار کر دیا، اور کہا کہ جب تک وہ لوگ موجود ہیں ہم ہرگز داخل نہ ہوں گے، تو موسیٰؑ کو اپنے بھائی ہارونؑ کے سوا کسی کا ساتھ نہ رہا۔ انہوں نے اپنی بے بسی اللہ کے سامنے رکھی، اعتراف کیا کہ وہ صرف اپنے اور اپنے بھائی پر اختیار رکھتے ہیں، اور اللہ سے دعا کی کہ انہیں اِن نافرمان لوگوں سے جدا کر دے۔ تفسیر المیسّر اللہ کے مقرر کردہ نتیجے کو بیان کرتی ہے: وہ سرزمین اُس نسل پر چالیس سال کے لیے حرام کر دی گئی، جس دوران وہ صحرا میں سرگرداں رہے۔',
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
      'After Sulaymān underwent a trial that turned him back to his Lord in repentance, he began his prayer with forgiveness and then asked for a kingdom that would belong to no one after him. Tafsīr al-Muyassar explains that he sought this unique dominion not out of vanity but as a miracle confirming his prophethood, and that Allah answered by subjecting to him the wind that ran at his command and the devils who built and dived for him, affirming He is the Bestower without measure.',
    backgroundUr:
      'جب سلیمانؑ ایک آزمائش سے گزرے جس نے انہیں اپنے رب کی طرف توبہ میں لوٹا دیا، تو انہوں نے اپنی دعا کا آغاز مغفرت سے کیا اور پھر ایسی بادشاہی مانگی جو اُن کے بعد کسی کو نہ ملے۔ تفسیر المیسّر بیان کرتی ہے کہ انہوں نے یہ بے مثل سلطنت فخر کے لیے نہیں بلکہ اپنی نبوت کی تصدیق کرنے والے معجزے کے طور پر مانگی، اور اللہ نے ہوا کو، جو اُن کے حکم پر چلتی تھی، اور اُن شیطانوں کو، جو اُن کے لیے عمارتیں بناتے اور غوطے لگاتے تھے، اُن کے تابع کر کے جواب دیا، یہ ثابت کرتے ہوئے کہ وہی بے حساب عطا کرنے والا ہے۔',
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
      'Sūrat Ṣād gives a second account of Ayyūb’s call, in which he attributes the weariness and torment that afflicted him to the touch of Shayṭān, while maintaining perfect courtesy with his Lord and never complaining of Him. Tafsīr al-Muyassar relates Allah’s immediate answer in the verses that follow: ‘Strike with your foot’ — and a cool spring gushed forth from the ground, by which he washed and drank and was completely healed, and his family was restored to him.',
    backgroundUr:
      'سورۂ ص میں ایوبؑ کی پکار کا دوسرا بیان ہے، جس میں وہ اپنی تھکن اور اذیت کو شیطان کے اثر سے منسوب کرتے ہیں، مگر اپنے رب کے ساتھ کامل ادب برقرار رکھتے اور اُس کی کبھی شکایت نہیں کرتے۔ تفسیر المیسّر اگلی آیات میں اللہ کا فوری جواب بیان کرتی ہے: ’اپنا پاؤں مارو‘ — اور زمین سے ایک ٹھنڈا چشمہ پھوٹ پڑا، جس سے انہوں نے نہایا اور پیا اور مکمل شفایاب ہو گئے، اور اُن کے اہل و عیال انہیں لوٹا دیے گئے۔',
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
      'Sūrat Maryam preserves the fuller, intimate form of Zakariyyā’s prayer, made quietly in secret. He opens by recalling Allah’s long habit of never disappointing him, then describes his frailty — his bones grown weak and his head ablaze with grey — his fear for the faith among his relatives after him, and his wife’s barrenness. He asks not merely for an heir but for one who would inherit prophethood and knowledge from the family of Ya‘qūb and be pleasing to Allah. Tafsīr al-Muyassar notes the excellence of supplicating Allah privately and with hope grounded in His past favours.',
    backgroundUr:
      'سورۂ مریم زکریاؑ کی دعا کی مکمل اور دلی صورت محفوظ رکھتی ہے، جو انہوں نے چپکے سے پوشیدہ مانگی۔ وہ آغاز اللہ کی اِس دیرینہ عادت کے ذکر سے کرتے ہیں کہ اُس نے انہیں کبھی محروم نہیں کیا، پھر اپنی کمزوری بیان کرتے ہیں — ہڈیاں کمزور اور سر بڑھاپے سے سفید — اپنے بعد رشتہ داروں میں دین کے بارے میں اپنا خوف، اور اپنی بیوی کا بانجھ پن۔ وہ محض وارث نہیں بلکہ ایسا وارث مانگتے ہیں جو آلِ یعقوب سے نبوت اور علم کا وارث ہو اور اللہ کو پسند ہو۔ تفسیر المیسّر اللہ سے پوشیدہ اور اُس کے سابقہ احسانات پر امید کے ساتھ دعا کرنے کی فضیلت بیان کرتی ہے۔',
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
      'On the Day of Resurrection, Allah will ask ‘Īsā whether he told people to take him and his mother as gods beside Allah; he will disown it entirely, affirming that he only conveyed what he was commanded — to worship Allah alone. Then, regarding his people, he will say with flawless adab: ‘If You punish them, they are Your servants; and if You forgive them, You are the Mighty, the Wise.’ Tafsīr al-Muyassar admires the perfect balance of his words — neither interceding for the guilty against Allah’s justice nor presuming upon His decree — leaving all to His wisdom.',
    backgroundUr:
      'روزِ قیامت اللہ عیسیٰؑ سے پوچھے گا کہ کیا انہوں نے لوگوں سے کہا تھا کہ اللہ کے سوا مجھے اور میری ماں کو معبود بنا لو؛ وہ اِس سے مکمل براءت کریں گے، یہ بیان کرتے ہوئے کہ انہوں نے صرف وہی پہنچایا جس کا حکم تھا — کہ صرف اللہ کی عبادت کرو۔ پھر اپنی قوم کے بارے میں وہ کامل ادب کے ساتھ کہیں گے: ’اگر تو انہیں عذاب دے تو یہ تیرے بندے ہیں، اور اگر تو انہیں بخش دے تو تو ہی غالب، حکمت والا ہے۔‘ تفسیر المیسّر اُن کے الفاظ کے کامل توازن کو سراہتی ہے — نہ اللہ کے انصاف کے خلاف مجرموں کی سفارش، نہ اُس کے فیصلے پر جسارت — سب کچھ اُس کی حکمت پر چھوڑتے ہوئے۔',
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
      'At the close of Sūrat al-Muʾminūn, Allah teaches His Prophet ﷺ to repel evil not with anger but by taking refuge in Him — first from the goading whispers (hamazāt) of the devils that stir a person to sin or rage, and then even from their mere presence around him in any affair. Tafsīr al-Muyassar draws the lesson that protection from sin begins by guarding against its very approach; these words are a refuge especially when anger rises or when one fears the intrusion of evil suggestions.',
    backgroundUr:
      'سورۂ المؤمنون کے اختتام پر اللہ اپنے نبی ﷺ کو سکھاتا ہے کہ بُرائی کو غصے سے نہیں بلکہ اُس کی پناہ لے کر دفع کریں — پہلے شیطانوں کے اُن وسوسوں (ہمزات) سے جو انسان کو گناہ یا غصے پر اکساتے ہیں، اور پھر ہر معاملے میں اُن کی محض موجودگی سے بھی۔ تفسیر المیسّر سبق دیتی ہے کہ گناہ سے حفاظت اُس کے قریب آنے سے بچنے ہی سے شروع ہوتی ہے؛ یہ الفاظ خاص طور پر اُس وقت پناہ ہیں جب غصہ بھڑکے یا بُرے وسوسوں کے داخلے کا اندیشہ ہو۔',
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
      'Many of the mufassirūn connect this verse to the Hijrah: a prayer that Allah grant the Prophet ﷺ a truthful exit from Makkah and a truthful entry into Madinah, supported by an authority from Him to establish the religion. Tafsīr al-Muyassar takes it more broadly as a request that every entering and leaving be upon truth and sincerity and accompanied by Allah’s help, so the believer asks that all his comings and goings be sound in their beginnings and endings.',
    backgroundUr:
      'بہت سے مفسرین اِس آیت کو ہجرت سے جوڑتے ہیں: ایک دعا کہ اللہ نبی ﷺ کو مکہ سے سچائی کے ساتھ نکلنا اور مدینہ میں سچائی کے ساتھ داخل ہونا نصیب کرے، اور دین قائم کرنے کے لیے اپنی طرف سے ایک غلبہ عطا کرے۔ تفسیر المیسّر اِسے وسیع تر معنی میں لیتی ہے کہ ہر داخلہ اور خروج حق اور خلوص پر ہو اور اللہ کی مدد کے ساتھ ہو، سو مومن دعا کرتا ہے کہ اُس کی ساری آمد و رفت اپنے آغاز و انجام میں درست ہو۔',
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
      'Immediately after commanding that parents be treated with such kindness that one does not even utter a word of irritation to them in their old age, the Qur’an teaches this tender prayer of mercy for them, recalling how they raised us when we were small and helpless. Tafsīr al-Muyassar notes it is asked especially for parents who are alive, repaying their patient care of us in our infancy with constant prayer in their frailty; for parents who have passed, supplication remains among the best gifts a child can send.',
    backgroundUr:
      'والدین کے ساتھ ایسے حسنِ سلوک کے حکم کے فوراً بعد کہ بڑھاپے میں اُن سے ’اُف‘ تک نہ کہا جائے، قرآن اُن کے لیے یہ نرم دعائے رحمت سکھاتا ہے، یہ یاد دلاتے ہوئے کہ انہوں نے ہمیں اُس وقت پالا جب ہم چھوٹے اور بے بس تھے۔ تفسیر المیسّر بتاتی ہے کہ یہ خاص طور پر زندہ والدین کے لیے ہے، کہ بچپن میں اُن کی صبر بھری پرورش کا بدلہ اُن کی کمزوری میں مسلسل دعا سے دیا جائے؛ اور فوت شدہ والدین کے لیے دعا اولاد کے بہترین تحائف میں سے ہے۔',
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
      'Sūrat al-Anbiyāʾ closes with the Prophet ﷺ instructed, in the face of his people’s denial and false claims about Allah, to leave the matter to Allah’s just judgement and to seek the help of the Most Merciful against what they fabricate. Tafsīr al-Muyassar notes the calm certainty of one who entrusts the verdict to the perfectly Just Judge, knowing that truth will prevail and falsehood perish, however long the deniers persist.',
    backgroundUr:
      'سورۂ الانبیاء کا اختتام اِس پر ہوتا ہے کہ نبی ﷺ کو، اپنی قوم کی تکذیب اور اللہ کے بارے میں جھوٹے دعوؤں کے سامنے، حکم دیا جاتا ہے کہ معاملہ اللہ کے عادلانہ فیصلے پر چھوڑ دیں اور اُن کی گھڑی ہوئی باتوں کے خلاف رحمٰن سے مدد مانگیں۔ تفسیر المیسّر اُس پُرسکون یقین کو بیان کرتی ہے جو فیصلہ کامل عادل منصف کے سپرد کرنے سے آتا ہے، یہ جانتے ہوئے کہ حق غالب آئے گا اور باطل مٹ جائے گا، خواہ منکر کتنا ہی اڑے رہیں۔',
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
      'These are the final two verses of Sūrat al-Baqarah, which the Prophet ﷺ said were given to him from a treasure beneath the Throne and which suffice whoever recites them at night (Bukhārī, Muslim). After affirming that Allah burdens no soul beyond its capacity, the believers make a layered plea: not to be taken to task for forgetfulness or honest mistakes, not to be laden with the heavy covenants placed on earlier nations, not to be burdened beyond endurance, and for pardon, forgiveness, mercy and victory over the disbelievers. Tafsīr al-Muyassar relates the ḥadīth that to each request Allah replied, ‘I have done so.’',
    backgroundUr:
      'یہ سورۂ البقرہ کی آخری دو آیات ہیں، جن کے بارے میں نبی ﷺ نے فرمایا کہ یہ انہیں عرش کے نیچے ایک خزانے سے عطا کی گئیں، اور جو شخص انہیں رات کو پڑھ لے یہ اُس کے لیے کافی ہو جاتی ہیں (بخاری، مسلم)۔ یہ بیان کرنے کے بعد کہ اللہ کسی جان پر اُس کی طاقت سے زیادہ بوجھ نہیں ڈالتا، مومن ایک پے در پے دعا کرتے ہیں: بھول یا سچی خطا پر مؤاخذہ نہ ہو، پہلی امتوں پر رکھے گئے بھاری عہد جیسا بوجھ نہ ڈالا جائے، برداشت سے زیادہ بوجھ نہ ہو، اور معافی، مغفرت، رحمت اور کافروں پر نصرت ملے۔ تفسیر المیسّر وہ حدیث بیان کرتی ہے کہ ہر درخواست پر اللہ نے فرمایا، ’میں نے ایسا کر دیا۔‘',
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
      'This is the supplication of those firmly grounded in knowledge (ar-rāsikhūna fi-l-‘ilm), made in Sūrat Āl ‘Imrān just after a warning against the people of crookedness who chase the ambiguous verses to stir discord. Knowing that hearts are turned between the fingers of the Most Merciful, the wise never trust their own steadfastness but beg Allah not to let their hearts swerve after guidance, and to grant mercy from Himself. Tafsīr al-Muyassar links it to the Prophet’s ﷺ frequent prayer, ‘O Turner of hearts, make my heart firm upon Your religion.’',
    backgroundUr:
      'یہ علم میں پختہ لوگوں (الراسخون فی العلم) کی دعا ہے، جو سورۂ آلِ عمران میں اُن کج رو لوگوں سے تنبیہ کے فوراً بعد آئی جو متشابہ آیات کے پیچھے پڑ کر فتنہ بھڑکاتے ہیں۔ یہ جانتے ہوئے کہ دل رحمٰن کی انگلیوں کے درمیان پھیرے جاتے ہیں، دانا اپنی ثابت قدمی پر بھروسہ نہیں کرتے بلکہ اللہ سے دعا کرتے ہیں کہ ہدایت کے بعد اُن کے دل ٹیڑھے نہ ہوں، اور اپنی طرف سے رحمت عطا فرمائے۔ تفسیر المیسّر اِسے نبی ﷺ کی کثرت سے کی جانے والی دعا سے جوڑتی ہے، ’اے دلوں کے پھیرنے والے! میرے دل کو اپنے دین پر جما دے۔‘',
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
      'Among the qualities of the God-fearing whom Allah praises in Sūrat Āl ‘Imrān is this prayer, in which they offer their very faith as the grounds of their plea: ‘we have believed, so forgive us our sins and protect us from the Fire.’ Tafsīr al-Muyassar describes them in the surrounding verses as the patient, the truthful, the devoutly obedient, those who spend in Allah’s way, and those who seek forgiveness in the last hours of the night before dawn, showing that this duʿāʾ is the voice of an active, striving faith.',
    backgroundUr:
      'سورۂ آلِ عمران میں اللہ جن متقین کی تعریف کرتا ہے اُن کی صفات میں یہ دعا بھی ہے، جس میں وہ اپنے ایمان ہی کو اپنی التجا کی بنیاد بناتے ہیں: ’ہم ایمان لائے، پس ہمارے گناہ بخش دے اور ہمیں آگ سے بچا۔‘ تفسیر المیسّر اردگرد کی آیات میں انہیں صبر کرنے والے، سچے، فرمانبردار، اللہ کی راہ میں خرچ کرنے والے، اور رات کے آخری پہر میں سحر سے پہلے استغفار کرنے والے قرار دیتی ہے، جو ظاہر کرتا ہے کہ یہ دعا ایک متحرک، کوشاں ایمان کی آواز ہے۔',
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
      'This is the prayer of the people of understanding (ulu-l-albāb), described in Sūrat Āl ‘Imrān as those who remember Allah standing, sitting and lying on their sides, and reflect deeply on the creation of the heavens and the earth. Their contemplation does not end in idle wonder but leads them to declare that Allah created nothing in vain, to glorify Him, and to beg protection from the Fire. Tafsīr al-Muyassar notes that genuine reflection on the universe produces conviction in the Hereafter and humble fear of Allah’s punishment.',
    backgroundUr:
      'یہ اہلِ دانش (اولو الالباب) کی دعا ہے، جنہیں سورۂ آلِ عمران میں ایسے لوگ کہا گیا جو کھڑے، بیٹھے اور اپنی کروٹوں پر لیٹے اللہ کو یاد کرتے اور آسمانوں اور زمین کی تخلیق پر گہرا غور کرتے ہیں۔ اُن کا تفکّر بے مقصد حیرت پر ختم نہیں ہوتا بلکہ انہیں اِس اعلان تک لے جاتا ہے کہ اللہ نے کچھ بھی بے مقصد پیدا نہیں کیا، پھر وہ اُس کی تسبیح کرتے اور آگ سے پناہ مانگتے ہیں۔ تفسیر المیسّر بتاتی ہے کہ کائنات پر حقیقی غور آخرت کا یقین اور اللہ کے عذاب کا عاجزانہ خوف پیدا کرتا ہے۔',
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
      'This is the climax of the prayer of the people of understanding: having responded to the caller to faith — the Messenger ﷺ, or the Qur’an itself — by believing in their Lord, they ask Him to forgive their sins, efface their misdeeds, take their souls along with the righteous, and grant them what He promised through His messengers without disgracing them on the Day of Resurrection, affirming that He never breaks His promise. Tafsīr al-Muyassar notes that Allah answered them in the next verse, declaring that He never lets the deed of any doer of good, male or female, go to waste.',
    backgroundUr:
      'یہ اہلِ دانش کی دعا کا نقطۂ عروج ہے: ایمان کی طرف بلانے والے — رسول ﷺ یا خود قرآن — کی پکار پر اپنے رب پر ایمان لانے کے بعد، وہ اُس سے دعا کرتے ہیں کہ اُن کے گناہ بخش دے، اُن کی برائیاں مٹا دے، انہیں نیک لوگوں کے ساتھ موت دے، اور جو اُس نے اپنے رسولوں کے ذریعے وعدہ کیا وہ عطا کرے اور قیامت کے دن انہیں رسوا نہ کرے، یہ مانتے ہوئے کہ وہ کبھی وعدہ خلافی نہیں کرتا۔ تفسیر المیسّر بتاتی ہے کہ اللہ نے اگلی آیت میں انہیں جواب دیا کہ وہ کسی نیکی کرنے والے کا عمل، خواہ مرد ہو یا عورت، کبھی ضائع نہیں کرتا۔',
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
      'Sūrat al-Kahf tells of a group of young believers living under a tyrant who would force his people into idolatry. To preserve their faith they fled to a cave, making this prayer for mercy from Allah and for Him to set their affair aright with guidance. Tafsīr al-Muyassar relates that Allah answered by casting a sleep over them for three hundred and nine years and then raising them as a sign, showing that He protects and provides for those who flee to Him with their religion, however overwhelming the odds.',
    backgroundUr:
      'سورۂ الکہف چند نوجوان مومنوں کا قصہ بیان کرتی ہے جو ایک ایسے ظالم بادشاہ کے زیرِ اثر تھے جو اپنی قوم کو شرک پر مجبور کرتا تھا۔ اپنے ایمان کی حفاظت کے لیے وہ ایک غار میں بھاگ گئے اور یہ دعا کی کہ اللہ انہیں اپنی رحمت عطا فرمائے اور اُن کے کام کو ہدایت کے ساتھ درست کر دے۔ تفسیر المیسّر بیان کرتی ہے کہ اللہ نے انہیں تین سو نو سال کی نیند میں ڈال کر پھر ایک نشانی کے طور پر اٹھایا، یہ ظاہر کرتے ہوئے کہ وہ اُن کی حفاظت اور کفالت کرتا ہے جو اپنے دین سمیت اُس کی طرف بھاگتے ہیں، خواہ حالات کتنے ہی مشکل ہوں۔',
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
      'These were the few young believers among the people of Mūsā who, in terror of Pharaoh’s persecution, declared their trust in Allah and prayed not to be made a trial for the wrongdoers, and to be delivered by His mercy from the disbelieving people. Tafsīr al-Muyassar explains ‘a trial for the wrongdoers’ to mean: do not give them power over us so they imagine they are upon truth, nor let them torment us to turn us from our faith. It models reliance on Allah at the moment of greatest fear and weakness.',
    backgroundUr:
      'یہ موسیٰؑ کی قوم کے وہ چند نوجوان مومن تھے جنہوں نے فرعون کے ظلم کے خوف میں اللہ پر اپنے بھروسے کا اعلان کیا اور دعا کی کہ انہیں ظالموں کے لیے آزمائش نہ بنایا جائے، اور اللہ کی رحمت سے انہیں کافر قوم سے نجات ملے۔ تفسیر المیسّر ’ظالموں کے لیے آزمائش‘ کا مطلب یہ بیان کرتی ہے: انہیں ہم پر غلبہ نہ دے کہ وہ سمجھ بیٹھیں کہ وہ حق پر ہیں، نہ انہیں ہم پر مسلط کر کہ وہ ہمیں ہمارے ایمان سے پھیر دیں۔ یہ سب سے زیادہ خوف اور کمزوری کے لمحے میں اللہ پر توکّل کا نمونہ ہے۔',
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
      'Sūrat al-Ḥashr describes those who come after the first believers praying for forgiveness for themselves and for the brethren who preceded them in faith, and asking that Allah place no rancour in their hearts toward any believer. Tafsīr al-Muyassar notes that this verse is a foundation for honouring the Companions and the righteous predecessors, for invoking mercy on earlier Muslims, and for guarding the unity and purity of the believers’ hearts against envy and resentment.',
    backgroundUr:
      'سورۂ الحشر اُن لوگوں کا ذکر کرتی ہے جو پہلے مومنوں کے بعد آئے، اپنے اور ایمان میں اپنے سے پہلے گزرنے والے بھائیوں کے لیے مغفرت مانگتے ہیں، اور دعا کرتے ہیں کہ اللہ اُن کے دلوں میں کسی مومن کے لیے کینہ نہ رکھے۔ تفسیر المیسّر بتاتی ہے کہ یہ آیت صحابہ اور اسلافِ صالحین کی تعظیم، پہلے مسلمانوں کے لیے رحمت کی دعا، اور مومنوں کے دلوں کو حسد و کینے سے بچا کر اُن کی وحدت و پاکیزگی کی حفاظت کی بنیاد ہے۔',
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
      'After calling the believers to sincere repentance (tawbatan naṣūḥā), Sūrat at-Taḥrīm describes them on the Day of Judgement with their light streaming before them and to their right as they cross the Bridge; they pray, ‘Our Lord, perfect our light for us and forgive us.’ Tafsīr al-Muyassar connects the light to one’s deeds — the more faithful and sincere the worship, the brighter and more lasting the light — and on that Day some will see theirs flicker, so the believers beg for it to be completed.',
    backgroundUr:
      'سچی توبہ (توبۂ نصوح) کی دعوت کے بعد سورۂ التحریم مومنوں کا حال قیامت کے دن یوں بیان کرتی ہے کہ اُن کا نور پل صراط عبور کرتے وقت اُن کے آگے اور دائیں دوڑ رہا ہوگا؛ وہ دعا کرتے ہیں، ’اے ہمارے رب! ہمارا نور ہمارے لیے مکمل فرما دے اور ہمیں بخش دے۔‘ تفسیر المیسّر اِس نور کو اعمال سے جوڑتی ہے — عبادت جتنی باوفا اور مخلص، نور اتنا ہی روشن اور دیرپا — اور اُس دن بعض کا نور لرزتا ہوگا، اِس لیے مومن اُس کے مکمل ہونے کی التجا کرتے ہیں۔',
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
      'Sūrat al-Furqān closes by portraying the servants of the Most Merciful (‘ibād ar-Raḥmān) — humble, prayerful, moderate and chaste — and this is among their crowning aspirations: that Allah make their spouses and offspring a coolness of the eyes, and make them leaders for the righteous. Tafsīr al-Muyassar explains that the ‘coolness of the eyes’ is to see one’s family upon obedience and faith, and that they seek not merely good company but to be foremost in guiding others to good.',
    backgroundUr:
      'سورۂ الفرقان کا اختتام رحمٰن کے بندوں (عباد الرحمٰن) کی تصویر کشی پر ہوتا ہے — عاجز، نمازی، میانہ رو اور پاک دامن — اور اُن کی بلند ترین آرزوؤں میں یہ بھی ہے: کہ اللہ اُن کی بیویوں اور اولاد کو آنکھوں کی ٹھنڈک بنائے، اور انہیں پرہیزگاروں کا پیشوا بنائے۔ تفسیر المیسّر بتاتی ہے کہ ’آنکھوں کی ٹھنڈک‘ سے مراد اپنے اہلِ خانہ کو اطاعت اور ایمان پر دیکھنا ہے، اور وہ محض اچھی صحبت نہیں بلکہ دوسروں کو نیکی کی طرف رہنمائی میں سب سے آگے ہونا چاہتے ہیں۔',
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
      'Another trait of the servants of the Most Merciful in Sūrat al-Furqān is that, despite their long nights of worship, they do not feel secure from the punishment of Hell but earnestly beg Allah to avert it, calling its torment clinging and unrelenting and an evil abode. Tafsīr al-Muyassar notes that this balance of hope in Allah’s mercy with fear of His punishment is the believer’s state; dread of the Fire keeps the heart sincere and humble rather than complacent in good deeds.',
    backgroundUr:
      'سورۂ الفرقان میں رحمٰن کے بندوں کی ایک اور صفت یہ ہے کہ راتوں کی طویل عبادت کے باوجود وہ جہنم کے عذاب سے بے خوف نہیں ہوتے بلکہ نہایت عاجزی سے اللہ سے اُسے ٹالنے کی التجا کرتے ہیں، اُس کے عذاب کو چمٹ جانے والا، نہ ٹلنے والا اور بُری جائے قرار دیتے ہیں۔ تفسیر المیسّر بتاتی ہے کہ اللہ کی رحمت کی امید اور اُس کے عذاب کے خوف کا یہ توازن مومن کی حالت ہے؛ آگ کا ڈر دل کو مخلص اور عاجز رکھتا ہے، نیک اعمال پر مطمئن نہیں ہونے دیتا۔',
  },
]
