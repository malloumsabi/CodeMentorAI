/**
 * BLM221 Lojik Tasarım (Logic Design), 14 weeks: number systems, Boolean algebra, minimization,
 * combinational circuits, then flip-flops and sequential circuits. Weeks 1–7 prepare the midterm,
 * weeks 8–14 the final. Weeks 1, 3 and 4 keep the ids of the former 3-lesson course.
 */

import type { LessonSource } from '@/data/lessons';

export const blm221Lessons: LessonSource[] = [
  {
    id: 'logic-binary',
    week: 1,
    title: {
      fr: 'Systèmes de numération et conversions',
      en: 'Number systems and conversions',
      tr: 'Sayı sistemleri ve dönüşümler',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un circuit numérique ne connaît que deux états, 0 et 1 : il calcule en base 2. On utilise aussi la base 8 (octal) et la base 16 (hexadécimal, chiffres 0–9 puis A–F) pour écrire le binaire de façon plus courte : un chiffre octal = 3 bits, un chiffre hexadécimal = 4 bits.',
          en: 'A digital circuit only knows two states, 0 and 1: it computes in base 2. Base 8 (octal) and base 16 (hexadecimal, digits 0–9 then A–F) are also used to write binary more compactly: one octal digit = 3 bits, one hex digit = 4 bits.',
          tr: 'Sayısal bir devre yalnızca iki durum bilir, 0 ve 1: 2 tabanında hesaplar. İkiliyi daha kısa yazmak için 8 tabanı (sekizli) ve 16 tabanı (onaltılı, 0–9 sonra A–F rakamları) da kullanılır: bir sekizli rakam = 3 bit, bir onaltılı rakam = 4 bit.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Binaire → décimal : somme des puissances de 2\n1101₂ = 8 + 4 + 0 + 1 = 13\n\nDécimal → binaire : divisions successives par 2, restes lus de bas en haut\n13 / 2 = 6 r 1\n 6 / 2 = 3 r 0\n 3 / 2 = 1 r 1\n 1 / 2 = 0 r 1      → 1101₂\n\nBinaire → hexa : groupes de 4 bits depuis la droite\n1011 0110₂ = B6₁₆        Binaire → octal : groupes de 3 bits',
          en: 'Binary → decimal: sum of powers of 2\n1101₂ = 8 + 4 + 0 + 1 = 13\n\nDecimal → binary: repeated division by 2, remainders read bottom-up\n13 / 2 = 6 r 1\n 6 / 2 = 3 r 0\n 3 / 2 = 1 r 1\n 1 / 2 = 0 r 1      → 1101₂\n\nBinary → hex: groups of 4 bits from the right\n1011 0110₂ = B6₁₆        Binary → octal: groups of 3 bits',
          tr: 'İkili → onlu: 2’nin kuvvetlerinin toplamı\n1101₂ = 8 + 4 + 0 + 1 = 13\n\nOnlu → ikili: art arda 2’ye bölme, kalanlar aşağıdan yukarı okunur\n13 / 2 = 6 k 1\n 6 / 2 = 3 k 0\n 3 / 2 = 1 k 1\n 1 / 2 = 0 k 1      → 1101₂\n\nİkili → onaltılı: sağdan 4 bitlik gruplar\n1011 0110₂ = B6₁₆        İkili → sekizli: 3 bitlik gruplar',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Convertis 156 (décimal) en binaire, en hexadécimal et en octal.',
          en: 'Convert 156 (decimal) to binary, hexadecimal and octal.',
          tr: '156’yı (onlu) ikili, onaltılı ve sekizli tabana çevir.',
        },
        solution: {
          fr: '156 = 128 + 16 + 8 + 4 → 1001 1100₂. Groupes de 4 : 1001 = 9, 1100 = C → 9C₁₆. Groupes de 3 depuis la droite : 10 011 100 → 2 3 4 → 234₈. Vérification : 2 × 64 + 3 × 8 + 4 = 156.',
          en: '156 = 128 + 16 + 8 + 4 → 1001 1100₂. Groups of 4: 1001 = 9, 1100 = C → 9C₁₆. Groups of 3 from the right: 10 011 100 → 2 3 4 → 234₈. Check: 2 × 64 + 3 × 8 + 4 = 156.',
          tr: '156 = 128 + 16 + 8 + 4 → 1001 1100₂. 4’lü gruplar: 1001 = 9, 1100 = C → 9C₁₆. Sağdan 3’lü gruplar: 10 011 100 → 2 3 4 → 234₈. Sağlama: 2 × 64 + 3 × 8 + 4 = 156.',
        },
      },
    ],
    quiz: {
      question: { fr: 'Que vaut 1010₂ en décimal ?', en: 'What is 1010₂ in decimal?', tr: '1010₂ onlu tabanda kaçtır?' },
      options: { fr: ['8', '10', '12'], en: ['8', '10', '12'], tr: ['8', '10', '12'] },
      answerIndex: 1,
      explanation: {
        fr: '1010₂ = 8 + 0 + 2 + 0 = 10.',
        en: '1010₂ = 8 + 0 + 2 + 0 = 10.',
        tr: '1010₂ = 8 + 0 + 2 + 0 = 10.',
      },
    },
  },
  {
    id: 'logic-w02-arithmetic-codes',
    week: 2,
    title: {
      fr: 'Arithmétique binaire, complément à 2 et codes',
      en: 'Binary arithmetic, two’s complement and codes',
      tr: 'İkili aritmetik, 2’ye tümleyen ve kodlar',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Pour représenter les nombres négatifs, on utilise le complément à 2 : on inverse tous les bits puis on ajoute 1. Sur 8 bits, on représente de −128 à +127, et le bit de gauche indique le signe. Avantage : la soustraction devient une addition, A − B = A + (complément à 2 de B). Codes utiles : BCD (chaque chiffre décimal sur 4 bits) et code Gray (un seul bit change entre deux valeurs voisines).',
          en: 'Negative numbers are represented in two’s complement: flip every bit then add 1. With 8 bits, values go from −128 to +127, and the leftmost bit gives the sign. Advantage: subtraction becomes addition, A − B = A + (two’s complement of B). Useful codes: BCD (each decimal digit on 4 bits) and Gray code (only one bit changes between neighboring values).',
          tr: 'Negatif sayılar 2’ye tümleyenle gösterilir: tüm bitler terslenir, sonra 1 eklenir. 8 bitle −128’den +127’ye kadar gösterilir ve en soldaki bit işareti verir. Avantajı: çıkarma toplamaya dönüşür, A − B = A + (B’nin 2’ye tümleyeni). Kullanışlı kodlar: BCD (her onlu rakam 4 bitte) ve Gray kodu (komşu iki değer arasında yalnızca bir bit değişir).',
        },
      },
      {
        type: 'code',
        code: {
          fr: '+45 sur 8 bits        0010 1101\nInverser les bits      1101 0010   (complément à 1)\nAjouter 1              1101 0011   = −45 en complément à 2\n\nBCD : 59 → 0101 1001     (5 puis 9, chacun sur 4 bits)\nGray : g = b XOR (b >> 1)\n   binaire 0011 → Gray 0010,   binaire 0100 → Gray 0110',
          en: '+45 on 8 bits         0010 1101\nFlip the bits          1101 0010   (one’s complement)\nAdd 1                  1101 0011   = −45 in two’s complement\n\nBCD: 59 → 0101 1001      (5 then 9, each on 4 bits)\nGray: g = b XOR (b >> 1)\n   binary 0011 → Gray 0010,   binary 0100 → Gray 0110',
          tr: '8 bitte +45           0010 1101\nBitleri tersle         1101 0010   (1’e tümleyen)\n1 ekle                 1101 0011   = 2’ye tümleyende −45\n\nBCD: 59 → 0101 1001      (önce 5 sonra 9, her biri 4 bit)\nGray: g = b XOR (b >> 1)\n   ikili 0011 → Gray 0010,   ikili 0100 → Gray 0110',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Sur 8 bits, calcule 25 − 13 en additionnant 25 et le complément à 2 de 13. Montre l’addition. Puis convertis le binaire 1011 en code Gray.',
          en: 'With 8 bits, compute 25 − 13 by adding 25 and the two’s complement of 13. Show the addition. Then convert binary 1011 to Gray code.',
          tr: '8 bitte 25 ile 13’ün 2’ye tümleyenini toplayarak 25 − 13’ü hesapla. Toplamayı göster. Sonra ikili 1011’i Gray koduna çevir.',
        },
        solution: {
          fr: '25 = 0001 1001. 13 = 0000 1101 → inversé 1111 0010 → +1 = 1111 0011. Somme : 0001 1001 + 1111 0011 = 1 0000 1100. On ignore la retenue sortante du 9e bit : 0000 1100 = 12. Correct ! Gray de 1011 : 1011 XOR 0101 = 1110.',
          en: '25 = 0001 1001. 13 = 0000 1101 → flipped 1111 0010 → +1 = 1111 0011. Sum: 0001 1001 + 1111 0011 = 1 0000 1100. Drop the carry out of the 9th bit: 0000 1100 = 12. Correct! Gray of 1011: 1011 XOR 0101 = 1110.',
          tr: '25 = 0001 1001. 13 = 0000 1101 → terslenmiş 1111 0010 → +1 = 1111 0011. Toplam: 0001 1001 + 1111 0011 = 1 0000 1100. 9. bitten çıkan elde atılır: 0000 1100 = 12. Doğru! 1011’in Gray kodu: 1011 XOR 0101 = 1110.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Sur 8 bits en complément à 2, que représente 1111 1111 ?',
        en: 'With 8 bits in two’s complement, what does 1111 1111 represent?',
        tr: '8 bit 2’ye tümleyende 1111 1111 neyi gösterir?',
      },
      options: { fr: ['255', '−1', '−127'], en: ['255', '−1', '−127'], tr: ['255', '−1', '−127'] },
      answerIndex: 1,
      explanation: {
        fr: 'Le bit de signe vaut 1, donc le nombre est négatif. Inverser donne 0000 0000, +1 donne 0000 0001 : c’est −1.',
        en: 'The sign bit is 1, so the number is negative. Flipping gives 0000 0000, +1 gives 0000 0001: it is −1.',
        tr: 'İşaret biti 1, yani sayı negatiftir. Terslemek 0000 0000, +1 de 0000 0001 verir: −1’dir.',
      },
    },
  },
  {
    id: 'logic-gates',
    week: 3,
    title: { fr: 'Les portes logiques', en: 'Logic gates', tr: 'Mantık kapıları' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une porte logique calcule une sortie à partir de ses entrées binaires. On la décrit par sa table de vérité, qui liste toutes les combinaisons d’entrées : 2ⁿ lignes pour n entrées. NAND et NOR sont dites universelles : avec l’une seule, on peut construire toutes les autres portes.',
          en: 'A logic gate computes an output from its binary inputs. It is described by its truth table, listing every input combination: 2ⁿ rows for n inputs. NAND and NOR are called universal: with just one of them, every other gate can be built.',
          tr: 'Mantık kapısı ikili girişlerinden bir çıkış hesaplar. Tüm giriş kombinasyonlarını listeleyen doğruluk tablosuyla tanımlanır: n giriş için 2ⁿ satır. NAND ve NOR evrensel kapılardır: yalnızca biriyle diğer tüm kapılar kurulabilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'A B | ET  OU  XOR  NAND  NOR  XNOR\n0 0 |  0   0   0    1     1    1\n0 1 |  0   1   1    1     0    0\n1 0 |  0   1   1    1     0    0\n1 1 |  1   1   0    0     0    1\n\nNON : A\' (inverse)     ET : A·B     OU : A + B\nXOR : A ⊕ B = A\'B + AB\'   (1 si les entrées diffèrent)',
          en: 'A B | AND  OR  XOR  NAND  NOR  XNOR\n0 0 |  0    0   0    1     1    1\n0 1 |  0    1   1    1     0    0\n1 0 |  0    1   1    1     0    0\n1 1 |  1    1   0    0     0    1\n\nNOT: A\' (inverse)      AND: A·B     OR: A + B\nXOR: A ⊕ B = A\'B + AB\'   (1 when the inputs differ)',
          tr: 'A B | VE  VEYA  XOR  NAND  NOR  XNOR\n0 0 |  0    0    0    1     1    1\n0 1 |  0    1    1    1     0    0\n1 0 |  0    1    1    1     0    0\n1 1 |  1    1    0    0     0    1\n\nDEĞİL: A\' (tersi)      VE: A·B     VEYA: A + B\nXOR: A ⊕ B = A\'B + AB\'   (girişler farklıysa 1)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Le circuit calcule F = (A + B)·C\'. Écris sa table de vérité complète (8 lignes). Pour quelles combinaisons F vaut-elle 1 ?',
          en: 'The circuit computes F = (A + B)·C\'. Write its full truth table (8 rows). For which combinations is F equal to 1?',
          tr: 'Devre F = (A + B)·C\' hesaplıyor. Tam doğruluk tablosunu yaz (8 satır). F hangi kombinasyonlarda 1 olur?',
        },
        solution: {
          fr: 'F = 1 seulement si C = 0 et (A ou B) = 1. Lignes ABC : 000 → 0, 001 → 0, 010 → 1, 011 → 0, 100 → 1, 101 → 0, 110 → 1, 111 → 0. F vaut 1 pour 010, 100 et 110 (mintermes 2, 4 et 6).',
          en: 'F = 1 only when C = 0 and (A or B) = 1. Rows ABC: 000 → 0, 001 → 0, 010 → 1, 011 → 0, 100 → 1, 101 → 0, 110 → 1, 111 → 0. F is 1 for 010, 100 and 110 (minterms 2, 4 and 6).',
          tr: 'F = 1 yalnızca C = 0 ve (A veya B) = 1 iken. ABC satırları: 000 → 0, 001 → 0, 010 → 1, 011 → 0, 100 → 1, 101 → 0, 110 → 1, 111 → 0. F; 010, 100 ve 110 için 1’dir (2, 4 ve 6 numaralı mintermler).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle porte donne 1 seulement quand ses deux entrées sont différentes ?',
        en: 'Which gate outputs 1 only when its two inputs differ?',
        tr: 'Hangi kapı yalnızca iki girişi farklıyken 1 verir?',
      },
      options: { fr: ['ET', 'XOR', 'NOR'], en: ['AND', 'XOR', 'NOR'], tr: ['VE', 'XOR', 'NOR'] },
      answerIndex: 1,
      explanation: {
        fr: 'XOR (OU exclusif) vaut 1 pour 01 et 10, 0 pour 00 et 11. C’est la base de l’additionneur : la somme de deux bits.',
        en: 'XOR (exclusive OR) is 1 for 01 and 10, 0 for 00 and 11. It is the basis of the adder: the sum of two bits.',
        tr: 'XOR (özel VEYA) 01 ve 10 için 1, 00 ve 11 için 0’dır. Toplayıcının temelidir: iki bitin toplamı.',
      },
    },
  },
  {
    id: 'logic-boolean-algebra',
    week: 4,
    title: { fr: 'L’algèbre de Boole', en: 'Boolean algebra', tr: 'Boole cebri' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’algèbre de Boole permet de simplifier une expression logique, donc de construire un circuit avec moins de portes. Les théorèmes de De Morgan sont essentiels : l’inverse d’un ET est le OU des inverses, et l’inverse d’un OU est le ET des inverses.',
          en: 'Boolean algebra simplifies a logic expression, so a circuit can be built with fewer gates. De Morgan’s theorems are essential: the inverse of an AND is the OR of the inverses, and the inverse of an OR is the AND of the inverses.',
          tr: 'Boole cebri bir mantık ifadesini sadeleştirir; böylece devre daha az kapıyla kurulur. De Morgan teoremleri temeldir: VE’nin tersi terslerin VEYA’sıdır, VEYA’nın tersi de terslerin VE’sidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'A + 0 = A      A · 1 = A      A + 1 = 1      A · 0 = 0\nA + A = A      A · A = A      A + A\' = 1     A · A\' = 0\n(A\')\' = A\nAbsorption :  A + AB = A        A(A + B) = A\n              A + A\'B = A + B\nDistributivité : A(B + C) = AB + AC     A + BC = (A + B)(A + C)\nDe Morgan :   (AB)\' = A\' + B\'     (A + B)\' = A\'B\'\nConsensus :   AB + A\'C + BC = AB + A\'C',
          en: 'A + 0 = A      A · 1 = A      A + 1 = 1      A · 0 = 0\nA + A = A      A · A = A      A + A\' = 1     A · A\' = 0\n(A\')\' = A\nAbsorption:   A + AB = A        A(A + B) = A\n              A + A\'B = A + B\nDistributive: A(B + C) = AB + AC     A + BC = (A + B)(A + C)\nDe Morgan:    (AB)\' = A\' + B\'     (A + B)\' = A\'B\'\nConsensus:    AB + A\'C + BC = AB + A\'C',
          tr: 'A + 0 = A      A · 1 = A      A + 1 = 1      A · 0 = 0\nA + A = A      A · A = A      A + A\' = 1     A · A\' = 0\n(A\')\' = A\nYutma:        A + AB = A        A(A + B) = A\n              A + A\'B = A + B\nDağılma:      A(B + C) = AB + AC     A + BC = (A + B)(A + C)\nDe Morgan:    (AB)\' = A\' + B\'     (A + B)\' = A\'B\'\nUzlaşma:      AB + A\'C + BC = AB + A\'C',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Simplifie (1) F = AB + AB\' + A\'B et (2) G = ((A + B)\' + C)\'. Justifie chaque étape.',
          en: 'Simplify (1) F = AB + AB\' + A\'B and (2) G = ((A + B)\' + C)\'. Justify each step.',
          tr: '(1) F = AB + AB\' + A\'B ve (2) G = ((A + B)\' + C)\' ifadelerini sadeleştir. Her adımı gerekçelendir.',
        },
        solution: {
          fr: '(1) AB + AB\' = A(B + B\') = A · 1 = A. Puis F = A + A\'B = A + B (absorption). (2) De Morgan sur le OU extérieur : G = ((A + B)\')\' · C\' = (A + B)C\' = AC\' + BC\'. On reconnaît le circuit de la semaine 3.',
          en: '(1) AB + AB\' = A(B + B\') = A · 1 = A. Then F = A + A\'B = A + B (absorption). (2) De Morgan on the outer OR: G = ((A + B)\')\' · C\' = (A + B)C\' = AC\' + BC\'. That is the week 3 circuit.',
          tr: '(1) AB + AB\' = A(B + B\') = A · 1 = A. Sonra F = A + A\'B = A + B (yutma). (2) Dıştaki VEYA’ya De Morgan: G = ((A + B)\')\' · C\' = (A + B)C\' = AC\' + BC\'. Bu 3. haftanın devresidir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Selon De Morgan, à quoi est égal (A · B)\' ?',
        en: 'By De Morgan, what does (A · B)\' equal?',
        tr: 'De Morgan’a göre (A · B)\' neye eşittir?',
      },
      options: { fr: ["A' · B'", "A' + B'", 'A + B'], en: ["A' · B'", "A' + B'", 'A + B'], tr: ["A' · B'", "A' + B'", 'A + B'] },
      answerIndex: 1,
      explanation: {
        fr: 'On inverse chaque variable et on change ET en OU : (AB)\' = A\' + B\'. C’est pourquoi une porte NAND équivaut à un OU d’entrées inversées.',
        en: 'Invert each variable and turn AND into OR: (AB)\' = A\' + B\'. That is why a NAND gate equals an OR with inverted inputs.',
        tr: 'Her değişken terslenir ve VE, VEYA’ya dönüşür: (AB)\' = A\' + B\'. Bu yüzden NAND kapısı girişleri terslenmiş bir VEYA’ya eşittir.',
      },
    },
  },
  {
    id: 'logic-w05-canonical-forms',
    week: 5,
    title: {
      fr: 'Formes canoniques : mintermes et maxtermes',
      en: 'Canonical forms: minterms and maxterms',
      tr: 'Kanonik biçimler: mintermler ve maxtermler',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Toute fonction logique s’écrit directement depuis sa table de vérité. Somme de produits (SOP, Σm) : un produit, appelé minterme, pour chaque ligne où F = 1. Produit de sommes (POS, ΠM) : une somme, appelée maxterme, pour chaque ligne où F = 0. Dans un minterme, une variable à 0 apparaît inversée ; dans un maxterme, c’est une variable à 1 qui apparaît inversée.',
          en: 'Any logic function can be written straight from its truth table. Sum of products (SOP, Σm): one product, called a minterm, for each row where F = 1. Product of sums (POS, ΠM): one sum, called a maxterm, for each row where F = 0. In a minterm, a variable equal to 0 appears inverted; in a maxterm, a variable equal to 1 appears inverted.',
          tr: 'Her mantık fonksiyonu doğrudan doğruluk tablosundan yazılabilir. Çarpımların toplamı (SOP, Σm): F = 1 olan her satır için minterm denen bir çarpım. Toplamların çarpımı (POS, ΠM): F = 0 olan her satır için maxterm denen bir toplam. Mintermde 0 olan değişken tersli, maxtermde ise 1 olan değişken tersli yazılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Ligne ABC = 101 (n° 5)\nminterme m5 = A B\' C       (vaut 1 seulement sur cette ligne)\nmaxterme M5 = A\' + B + C\'  (vaut 0 seulement sur cette ligne)\n\nF(A,B,C) = Σm(1, 4, 7)\n         = A\'B\'C + AB\'C\' + ABC\n         = ΠM(0, 2, 3, 5, 6)     (les numéros restants)',
          en: 'Row ABC = 101 (no. 5)\nminterm m5 = A B\' C        (1 only on that row)\nmaxterm M5 = A\' + B + C\'   (0 only on that row)\n\nF(A,B,C) = Σm(1, 4, 7)\n         = A\'B\'C + AB\'C\' + ABC\n         = ΠM(0, 2, 3, 5, 6)     (the remaining numbers)',
          tr: 'ABC = 101 satırı (5 numara)\nminterm m5 = A B\' C        (yalnızca bu satırda 1)\nmaxterm M5 = A\' + B + C\'   (yalnızca bu satırda 0)\n\nF(A,B,C) = Σm(1, 4, 7)\n         = A\'B\'C + AB\'C\' + ABC\n         = ΠM(0, 2, 3, 5, 6)     (kalan numaralar)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'La fonction majorité M(A, B, C) vaut 1 quand au moins deux entrées valent 1. Donne-la en Σm et en ΠM, écris la forme SOP canonique, puis simplifie-la.',
          en: 'The majority function M(A, B, C) is 1 when at least two inputs are 1. Give it as Σm and ΠM, write the canonical SOP form, then simplify it.',
          tr: 'Çoğunluk fonksiyonu M(A, B, C), en az iki giriş 1 olduğunda 1’dir. Σm ve ΠM olarak ver, kanonik SOP biçimini yaz, sonra sadeleştir.',
        },
        solution: {
          fr: 'Lignes avec au moins deux 1 : 011, 101, 110, 111 → M = Σm(3, 5, 6, 7) = ΠM(0, 1, 2, 4). SOP canonique : A\'BC + AB\'C + ABC\' + ABC. On réutilise ABC trois fois (X + X = X) : (A\'BC + ABC) + (AB\'C + ABC) + (ABC\' + ABC) = BC + AC + AB. Résultat : M = AB + AC + BC.',
          en: 'Rows with at least two 1s: 011, 101, 110, 111 → M = Σm(3, 5, 6, 7) = ΠM(0, 1, 2, 4). Canonical SOP: A\'BC + AB\'C + ABC\' + ABC. Reuse ABC three times (X + X = X): (A\'BC + ABC) + (AB\'C + ABC) + (ABC\' + ABC) = BC + AC + AB. Result: M = AB + AC + BC.',
          tr: 'En az iki 1 olan satırlar: 011, 101, 110, 111 → M = Σm(3, 5, 6, 7) = ΠM(0, 1, 2, 4). Kanonik SOP: A\'BC + AB\'C + ABC\' + ABC. ABC üç kez kullanılır (X + X = X): (A\'BC + ABC) + (AB\'C + ABC) + (ABC\' + ABC) = BC + AC + AB. Sonuç: M = AB + AC + BC.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est le minterme m6 pour les variables A, B, C ?',
        en: 'What is minterm m6 for variables A, B, C?',
        tr: 'A, B, C değişkenleri için m6 minterm’i nedir?',
      },
      options: { fr: ["AB'C", "ABC'", "A'BC"], en: ["AB'C", "ABC'", "A'BC"], tr: ["AB'C", "ABC'", "A'BC"] },
      answerIndex: 1,
      explanation: {
        fr: '6 = 110 : A = 1, B = 1, C = 0. Dans un minterme, les 1 restent tels quels et les 0 sont inversés : ABC\'.',
        en: '6 = 110: A = 1, B = 1, C = 0. In a minterm, 1s stay as they are and 0s are inverted: ABC\'.',
        tr: '6 = 110: A = 1, B = 1, C = 0. Mintermde 1’ler olduğu gibi kalır, 0’lar terslenir: ABC\'.',
      },
    },
  },
  {
    id: 'logic-w06-karnaugh',
    week: 6,
    title: { fr: 'Les tableaux de Karnaugh', en: 'Karnaugh maps', tr: 'Karnaugh haritaları' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un tableau de Karnaugh range la table de vérité de sorte que deux cases voisines ne diffèrent que d’une variable (ordre de Gray 00, 01, 11, 10). On regroupe les 1 en rectangles de 1, 2, 4, 8 cases, les plus grands possibles ; les bords se rejoignent (le tableau « s’enroule »). Chaque groupe donne un produit où ne restent que les variables constantes dans le groupe. Les cases « X » (indifférentes) peuvent servir à agrandir les groupes.',
          en: 'A Karnaugh map arranges the truth table so neighboring cells differ by only one variable (Gray order 00, 01, 11, 10). Group the 1s into rectangles of 1, 2, 4, 8 cells, as large as possible; edges wrap around. Each group gives a product keeping only the variables constant within the group. “X” (don’t care) cells can be used to make groups larger.',
          tr: 'Karnaugh haritası doğruluk tablosunu komşu hücreler yalnızca bir değişkende farklı olacak şekilde dizer (Gray sırası 00, 01, 11, 10). 1’ler mümkün olan en büyük 1, 2, 4, 8 hücrelik dikdörtgenlerde gruplanır; kenarlar birbirine bağlanır (harita “sarılır”). Her grup, yalnızca grup içinde sabit kalan değişkenleri içeren bir çarpım verir. “X” (önemsiz) hücreler grupları büyütmek için kullanılabilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'F(A,B,C,D) = Σm(0, 2, 5, 7, 8, 10, 13, 15)\n\n          CD 00  01  11  10\nAB = 00       1   0   0   1\nAB = 01       0   1   1   0\nAB = 11       0   1   1   0\nAB = 10       1   0   0   1\n\nGroupe des 4 coins (m0, m2, m8, m10) → B = 0 et D = 0 → B\'D\'\nCarré central (m5, m7, m13, m15)     → B = 1 et D = 1 → BD',
          en: 'F(A,B,C,D) = Σm(0, 2, 5, 7, 8, 10, 13, 15)\n\n          CD 00  01  11  10\nAB = 00       1   0   0   1\nAB = 01       0   1   1   0\nAB = 11       0   1   1   0\nAB = 10       1   0   0   1\n\nThe 4 corners group (m0, m2, m8, m10) → B = 0 and D = 0 → B\'D\'\nCentral square (m5, m7, m13, m15)     → B = 1 and D = 1 → BD',
          tr: 'F(A,B,C,D) = Σm(0, 2, 5, 7, 8, 10, 13, 15)\n\n          CD 00  01  11  10\nAB = 00       1   0   0   1\nAB = 01       0   1   1   0\nAB = 11       0   1   1   0\nAB = 10       1   0   0   1\n\n4 köşe grubu (m0, m2, m8, m10) → B = 0 ve D = 0 → B\'D\'\nOrta kare (m5, m7, m13, m15)    → B = 1 ve D = 1 → BD',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Simplifie avec un tableau de Karnaugh F(A,B,C,D) = Σm(0, 1, 4, 5, 6, 7, 14, 15). Donne les groupes et l’expression finale.',
          en: 'Simplify with a Karnaugh map F(A,B,C,D) = Σm(0, 1, 4, 5, 6, 7, 14, 15). Give the groups and the final expression.',
          tr: 'Karnaugh haritasıyla F(A,B,C,D) = Σm(0, 1, 4, 5, 6, 7, 14, 15) ifadesini sadeleştir. Grupları ve son ifadeyi ver.',
        },
        solution: {
          fr: 'Groupe 1 : m0, m1, m4, m5 (AB = 00 ou 01, CD = 00 ou 01) → A = 0 et C = 0 constants → A\'C\'. Groupe 2 : m6, m7, m14, m15 (AB = 01 ou 11, CD = 11 ou 10) → B = 1 et C = 1 → BC. m4 et m5 pourraient aussi entrer dans un groupe avec m6 et m7, mais ce n’est pas nécessaire. F = A\'C\' + BC, contre 8 mintermes de 4 variables au départ.',
          en: 'Group 1: m0, m1, m4, m5 (AB = 00 or 01, CD = 00 or 01) → A = 0 and C = 0 constant → A\'C\'. Group 2: m6, m7, m14, m15 (AB = 01 or 11, CD = 11 or 10) → B = 1 and C = 1 → BC. m4 and m5 could also join m6 and m7 in a group, but it is not needed. F = A\'C\' + BC, against 8 four-variable minterms at first.',
          tr: '1. grup: m0, m1, m4, m5 (AB = 00 veya 01, CD = 00 veya 01) → A = 0 ve C = 0 sabit → A\'C\'. 2. grup: m6, m7, m14, m15 (AB = 01 veya 11, CD = 11 veya 10) → B = 1 ve C = 1 → BC. m4 ve m5, m6 ve m7 ile de gruplanabilir ama gerekmez. F = A\'C\' + BC; başta 8 adet 4 değişkenli minterm vardı.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans un tableau de Karnaugh à 4 variables, combien de variables reste-t-il dans le produit d’un groupe de 4 cases ?',
        en: 'In a 4-variable Karnaugh map, how many variables remain in the product of a 4-cell group?',
        tr: '4 değişkenli bir Karnaugh haritasında 4 hücrelik bir grubun çarpımında kaç değişken kalır?',
      },
      options: { fr: ['1', '2', '3'], en: ['1', '2', '3'], tr: ['1', '2', '3'] },
      answerIndex: 1,
      explanation: {
        fr: 'Un groupe de 2ᵏ cases élimine k variables : 4 = 2² cases éliminent 2 variables, il en reste 4 − 2 = 2.',
        en: 'A group of 2ᵏ cells removes k variables: 4 = 2² cells remove 2 variables, leaving 4 − 2 = 2.',
        tr: '2ᵏ hücrelik bir grup k değişkeni eler: 4 = 2² hücre 2 değişkeni eler, 4 − 2 = 2 kalır.',
      },
    },
  },
  {
    id: 'logic-w07-nand-nor',
    week: 7,
    title: {
      fr: 'Réalisation en NAND / NOR et révision de la vize',
      en: 'NAND / NOR implementation and midterm review',
      tr: 'NAND / NOR ile gerçekleme ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Les circuits intégrés sont souvent fabriqués avec un seul type de porte. Une expression SOP (somme de produits) se réalise en NAND sur deux niveaux : on remplace chaque ET et le OU final par des NAND (double inversion de De Morgan). Une expression POS se réalise de même en NOR. Un NAND aux entrées reliées est un inverseur.',
          en: 'Integrated circuits are often made with a single gate type. A SOP expression (sum of products) is built with two levels of NAND: replace every AND and the final OR with NANDs (De Morgan double inversion). A POS expression is built the same way with NOR. A NAND with its inputs tied together is an inverter.',
          tr: 'Tümleşik devreler çoğu zaman tek tip kapıyla üretilir. SOP (çarpımların toplamı) ifadesi iki seviyeli NAND ile kurulur: her VE ve son VEYA, NAND ile değiştirilir (De Morgan çift tersleme). POS ifadesi de aynı şekilde NOR ile kurulur. Girişleri birleştirilmiş bir NAND bir tersleyicidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'F = AB + CD\n  = ((AB + CD)\')\'          double inversion\n  = ((AB)\' · (CD)\')\'       De Morgan\n  = NAND( NAND(A,B), NAND(C,D) )      → 3 portes NAND\n\nNON avec NAND :  A\' = NAND(A, A)\nET  avec NAND :  AB = NAND( NAND(A,B), NAND(A,B) )\nOU  avec NAND :  A + B = NAND( A\', B\' )',
          en: 'F = AB + CD\n  = ((AB + CD)\')\'          double inversion\n  = ((AB)\' · (CD)\')\'       De Morgan\n  = NAND( NAND(A,B), NAND(C,D) )      → 3 NAND gates\n\nNOT with NAND:  A\' = NAND(A, A)\nAND with NAND:  AB = NAND( NAND(A,B), NAND(A,B) )\nOR  with NAND:  A + B = NAND( A\', B\' )',
          tr: 'F = AB + CD\n  = ((AB + CD)\')\'          çift tersleme\n  = ((AB)\' · (CD)\')\'       De Morgan\n  = NAND( NAND(A,B), NAND(C,D) )      → 3 NAND kapısı\n\nNAND ile DEĞİL:  A\' = NAND(A, A)\nNAND ile VE:     AB = NAND( NAND(A,B), NAND(A,B) )\nNAND ile VEYA:   A + B = NAND( A\', B\' )',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Conversions binaire / décimal / octal / hexadécimal\n✔ Complément à 2, soustraction par addition, BCD, code Gray\n✔ Portes et tables de vérité ; NAND et NOR universelles\n✔ Algèbre de Boole : absorption, De Morgan, consensus\n✔ Mintermes, maxtermes, Σm et ΠM\n✔ Tableaux de Karnaugh à 3 et 4 variables, cases indifférentes\n✔ Réalisation en NAND (SOP) et en NOR (POS)',
          en: '✔ Binary / decimal / octal / hexadecimal conversions\n✔ Two’s complement, subtraction by addition, BCD, Gray code\n✔ Gates and truth tables; universal NAND and NOR\n✔ Boolean algebra: absorption, De Morgan, consensus\n✔ Minterms, maxterms, Σm and ΠM\n✔ 3- and 4-variable Karnaugh maps, don’t care cells\n✔ NAND (SOP) and NOR (POS) implementations',
          tr: '✔ İkili / onlu / sekizli / onaltılı dönüşümler\n✔ 2’ye tümleyen, toplamayla çıkarma, BCD, Gray kodu\n✔ Kapılar ve doğruluk tabloları; evrensel NAND ve NOR\n✔ Boole cebri: yutma, De Morgan, uzlaşma\n✔ Mintermler, maxtermler, Σm ve ΠM\n✔ 3 ve 4 değişkenli Karnaugh haritaları, önemsiz hücreler\n✔ NAND (SOP) ve NOR (POS) ile gerçekleme',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Réalise F = A\'C\' + BC (trouvée en semaine 6) uniquement avec des portes NAND à 2 entrées. Combien de portes faut-il ?',
          en: 'Build F = A\'C\' + BC (found in week 6) using only 2-input NAND gates. How many gates are needed?',
          tr: 'F = A\'C\' + BC’yi (6. haftada bulunan) yalnızca 2 girişli NAND kapılarıyla gerçekle. Kaç kapı gerekir?',
        },
        solution: {
          fr: 'Il faut d’abord A\' = NAND(A, A) et C\' = NAND(C, C) : 2 portes. Puis le premier niveau : X = NAND(A\', C\') et Y = NAND(B, C) : 2 portes. Enfin F = NAND(X, Y) : 1 porte. Total : 5 NAND. Vérification : NAND(X, Y) = X\' + Y\' = A\'C\' + BC.',
          en: 'First A\' = NAND(A, A) and C\' = NAND(C, C): 2 gates. Then the first level: X = NAND(A\', C\') and Y = NAND(B, C): 2 gates. Finally F = NAND(X, Y): 1 gate. Total: 5 NANDs. Check: NAND(X, Y) = X\' + Y\' = A\'C\' + BC.',
          tr: 'Önce A\' = NAND(A, A) ve C\' = NAND(C, C): 2 kapı. Sonra birinci seviye: X = NAND(A\', C\') ve Y = NAND(B, C): 2 kapı. Son olarak F = NAND(X, Y): 1 kapı. Toplam: 5 NAND. Sağlama: NAND(X, Y) = X\' + Y\' = A\'C\' + BC.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que donne une porte NAND dont les deux entrées sont reliées à A ?',
        en: 'What does a NAND gate with both inputs tied to A give?',
        tr: 'İki girişi de A’ya bağlı bir NAND kapısı ne verir?',
      },
      options: { fr: ['A', "A'", '1'], en: ['A', "A'", '1'], tr: ['A', "A'", '1'] },
      answerIndex: 1,
      explanation: {
        fr: 'NAND(A, A) = (A · A)\' = A\'. C’est ainsi qu’on fabrique un inverseur avec une porte NAND.',
        en: 'NAND(A, A) = (A · A)\' = A\'. That is how an inverter is made from a NAND gate.',
        tr: 'NAND(A, A) = (A · A)\' = A\'. Bir NAND kapısından tersleyici böyle yapılır.',
      },
    },
  },
  {
    id: 'logic-w08-adders',
    week: 8,
    title: {
      fr: 'Circuits combinatoires : additionneurs',
      en: 'Combinational circuits: adders',
      tr: 'Kombinasyonel devreler: toplayıcılar',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un circuit combinatoire a des sorties qui ne dépendent que des entrées actuelles, sans mémoire. Méthode de conception : énoncé → table de vérité → simplification (Karnaugh) → schéma. Le demi-additionneur additionne deux bits ; l’additionneur complet ajoute aussi la retenue entrante. En chaînant n additionneurs complets, on obtient un additionneur n bits à propagation de retenue (ripple carry).',
          en: 'A combinational circuit has outputs that depend only on the current inputs, with no memory. Design method: specification → truth table → simplification (Karnaugh) → schematic. A half adder adds two bits; a full adder also adds the incoming carry. Chaining n full adders gives an n-bit ripple carry adder.',
          tr: 'Kombinasyonel devrenin çıkışları yalnızca o anki girişlere bağlıdır, belleği yoktur. Tasarım yöntemi: tanım → doğruluk tablosu → sadeleştirme (Karnaugh) → şema. Yarım toplayıcı iki biti toplar; tam toplayıcı gelen eldeyi de ekler. n tam toplayıcı zincirlenerek n bitlik elde taşımalı (ripple carry) toplayıcı elde edilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Demi-additionneur          S = A ⊕ B        C = A·B\n\nAdditionneur complet\nA B Cin | S Cout\n0 0  0  | 0  0\n0 1  0  | 1  0\n1 0  1  | 0  1\n1 1  1  | 1  1      (extrait, 8 lignes en tout)\nS    = A ⊕ B ⊕ Cin\nCout = AB + Cin(A ⊕ B)\n\nAdditionneur 4 bits : la Cout de chaque étage → Cin de l’étage suivant',
          en: 'Half adder                 S = A ⊕ B        C = A·B\n\nFull adder\nA B Cin | S Cout\n0 0  0  | 0  0\n0 1  0  | 1  0\n1 0  1  | 0  1\n1 1  1  | 1  1      (excerpt, 8 rows in all)\nS    = A ⊕ B ⊕ Cin\nCout = AB + Cin(A ⊕ B)\n\n4-bit adder: each stage’s Cout → the next stage’s Cin',
          tr: 'Yarım toplayıcı            S = A ⊕ B        C = A·B\n\nTam toplayıcı\nA B Cin | S Cout\n0 0  0  | 0  0\n0 1  0  | 1  0\n1 0  1  | 0  1\n1 1  1  | 1  1      (alıntı, toplam 8 satır)\nS    = A ⊕ B ⊕ Cin\nCout = AB + Cin(A ⊕ B)\n\n4 bitlik toplayıcı: her katın Cout’u → sonraki katın Cin’i',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un additionneur 4 bits à propagation de retenue reçoit A = 1011 et B = 0110 (Cin = 0). Donne, étage par étage (du bit 0 au bit 3), le bit de somme et la retenue. Quel est le résultat sur 5 bits, et en décimal ?',
          en: 'A 4-bit ripple carry adder gets A = 1011 and B = 0110 (Cin = 0). Give, stage by stage (bit 0 to bit 3), the sum bit and the carry. What is the 5-bit result, and in decimal?',
          tr: '4 bitlik elde taşımalı bir toplayıcıya A = 1011 ve B = 0110 (Cin = 0) giriliyor. Kat kat (0. bitten 3. bite) toplam bitini ve eldeyi ver. 5 bitlik sonuç nedir, onlu olarak kaçtır?',
        },
        solution: {
          fr: 'Bit 0 : 1 + 0 + 0 → S = 1, C = 0. Bit 1 : 1 + 1 + 0 → S = 0, C = 1. Bit 2 : 0 + 1 + 1 → S = 0, C = 1. Bit 3 : 1 + 0 + 1 → S = 0, C = 1. Résultat 1 0001 = 17, et en effet 11 + 6 = 17. La retenue traverse trois étages : c’est ce délai de propagation que les additionneurs à retenue anticipée (carry lookahead) réduisent.',
          en: 'Bit 0: 1 + 0 + 0 → S = 1, C = 0. Bit 1: 1 + 1 + 0 → S = 0, C = 1. Bit 2: 0 + 1 + 1 → S = 0, C = 1. Bit 3: 1 + 0 + 1 → S = 0, C = 1. Result 1 0001 = 17, and indeed 11 + 6 = 17. The carry crosses three stages: carry lookahead adders reduce this propagation delay.',
          tr: '0. bit: 1 + 0 + 0 → S = 1, C = 0. 1. bit: 1 + 1 + 0 → S = 0, C = 1. 2. bit: 0 + 1 + 1 → S = 0, C = 1. 3. bit: 1 + 0 + 1 → S = 0, C = 1. Sonuç 1 0001 = 17; gerçekten de 11 + 6 = 17. Elde üç kattan geçer: elde öngörülü (carry lookahead) toplayıcılar bu yayılma gecikmesini azaltır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle porte donne le bit de somme d’un demi-additionneur ?',
        en: 'Which gate gives a half adder’s sum bit?',
        tr: 'Yarım toplayıcının toplam bitini hangi kapı verir?',
      },
      options: { fr: ['ET', 'OU', 'XOR'], en: ['AND', 'OR', 'XOR'], tr: ['VE', 'VEYA', 'XOR'] },
      answerIndex: 2,
      explanation: {
        fr: '0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, 1 + 1 = 10 (somme 0, retenue 1) : la somme est A ⊕ B et la retenue A · B.',
        en: '0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, 1 + 1 = 10 (sum 0, carry 1): the sum is A ⊕ B and the carry A · B.',
        tr: '0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, 1 + 1 = 10 (toplam 0, elde 1): toplam A ⊕ B, elde A · B’dir.',
      },
    },
  },
  {
    id: 'logic-w09-decoders-mux',
    week: 9,
    title: {
      fr: 'Décodeurs, codeurs et multiplexeurs',
      en: 'Decoders, encoders and multiplexers',
      tr: 'Kod çözücüler, kodlayıcılar ve çoklayıcılar',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un décodeur n → 2ⁿ active une seule sortie, celle dont le numéro est écrit en binaire sur les entrées : chaque sortie est un minterme. Un codeur fait l’inverse ; le codeur à priorité donne le numéro de l’entrée active la plus prioritaire. Un multiplexeur (MUX) 2ⁿ → 1 recopie sur sa sortie l’entrée choisie par n bits de sélection, comme un aiguillage.',
          en: 'An n → 2ⁿ decoder activates a single output, the one whose number is written in binary on the inputs: each output is a minterm. An encoder does the reverse; a priority encoder gives the number of the highest-priority active input. A 2ⁿ → 1 multiplexer (MUX) copies to its output the input chosen by n select bits, like a railway switch.',
          tr: 'n → 2ⁿ kod çözücü, numarası girişlerde ikili olarak yazılan tek bir çıkışı etkinleştirir: her çıkış bir mintermdir. Kodlayıcı bunun tersini yapar; öncelikli kodlayıcı en yüksek öncelikli etkin girişin numarasını verir. 2ⁿ → 1 çoklayıcı (MUX), n seçme bitiyle seçilen girişi çıkışına aktarır, bir makas gibi.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Décodeur 3 → 8 : entrées A B C, sorties D0 … D7\nABC = 101 → seule D5 = 1        (D5 = A B\' C = m5)\n→ Toute fonction Σm = un OU des sorties correspondantes\n\nMUX 4 → 1 : entrées I0 I1 I2 I3, sélection S1 S0\nY = S1\'S0\' I0 + S1\'S0 I1 + S1 S0\' I2 + S1 S0 I3\nS1 S0 = 10 → Y = I2',
          en: '3 → 8 decoder: inputs A B C, outputs D0 … D7\nABC = 101 → only D5 = 1         (D5 = A B\' C = m5)\n→ Any Σm function = an OR of the matching outputs\n\n4 → 1 MUX: inputs I0 I1 I2 I3, select S1 S0\nY = S1\'S0\' I0 + S1\'S0 I1 + S1 S0\' I2 + S1 S0 I3\nS1 S0 = 10 → Y = I2',
          tr: '3 → 8 kod çözücü: girişler A B C, çıkışlar D0 … D7\nABC = 101 → yalnızca D5 = 1     (D5 = A B\' C = m5)\n→ Her Σm fonksiyonu = ilgili çıkışların VEYA’sı\n\n4 → 1 MUX: girişler I0 I1 I2 I3, seçme S1 S0\nY = S1\'S0\' I0 + S1\'S0 I1 + S1 S0\' I2 + S1 S0 I3\nS1 S0 = 10 → Y = I2',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Réalise la fonction majorité M = Σm(3, 5, 6, 7) (semaine 5) de deux façons : (1) avec un décodeur 3 → 8 et une porte OU ; (2) avec un MUX 4 → 1 dont les sélections sont A et B. Que relie-t-on à I0, I1, I2 et I3 ?',
          en: 'Build the majority function M = Σm(3, 5, 6, 7) (week 5) two ways: (1) with a 3 → 8 decoder and an OR gate; (2) with a 4 → 1 MUX whose selects are A and B. What goes to I0, I1, I2 and I3?',
          tr: 'Çoğunluk fonksiyonu M = Σm(3, 5, 6, 7)’yi (5. hafta) iki yoldan gerçekle: (1) 3 → 8 kod çözücü ve bir VEYA kapısıyla; (2) seçme girişleri A ve B olan bir 4 → 1 MUX ile. I0, I1, I2 ve I3’e ne bağlanır?',
        },
        solution: {
          fr: '(1) M = D3 + D5 + D6 + D7 : un OU à 4 entrées sur ces sorties. (2) On regarde M selon AB : AB = 00 → M = 0 quel que soit C → I0 = 0. AB = 01 → M = 1 seulement si C = 1 → I1 = C. AB = 10 → I2 = C. AB = 11 → M = 1 → I3 = 1. Un MUX à n sélections réalise ainsi toute fonction de n + 1 variables.',
          en: '(1) M = D3 + D5 + D6 + D7: a 4-input OR on those outputs. (2) Look at M for each AB: AB = 00 → M = 0 whatever C → I0 = 0. AB = 01 → M = 1 only if C = 1 → I1 = C. AB = 10 → I2 = C. AB = 11 → M = 1 → I3 = 1. A MUX with n selects thus builds any function of n + 1 variables.',
          tr: '(1) M = D3 + D5 + D6 + D7: bu çıkışlarda 4 girişli bir VEYA. (2) Her AB için M’ye bakılır: AB = 00 → C ne olursa olsun M = 0 → I0 = 0. AB = 01 → M yalnızca C = 1 ise 1 → I1 = C. AB = 10 → I2 = C. AB = 11 → M = 1 → I3 = 1. n seçmeli bir MUX böylece n + 1 değişkenli her fonksiyonu gerçekler.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de bits de sélection faut-il pour un multiplexeur 8 → 1 ?',
        en: 'How many select bits does an 8 → 1 multiplexer need?',
        tr: '8 → 1 çoklayıcı için kaç seçme biti gerekir?',
      },
      options: { fr: ['2', '3', '8'], en: ['2', '3', '8'], tr: ['2', '3', '8'] },
      answerIndex: 1,
      explanation: {
        fr: 'Il faut numéroter 8 entrées : 2³ = 8, donc 3 bits de sélection.',
        en: '8 inputs must be numbered: 2³ = 8, so 3 select bits.',
        tr: '8 giriş numaralandırılmalıdır: 2³ = 8, yani 3 seçme biti.',
      },
    },
  },
  {
    id: 'logic-w10-arithmetic-circuits',
    week: 10,
    title: {
      fr: 'Additionneur-soustracteur et comparateurs',
      en: 'Adder-subtractor and comparators',
      tr: 'Toplayıcı-çıkarıcı ve karşılaştırıcılar',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Avec le complément à 2, un seul circuit additionne et soustrait : une entrée de mode M passe chaque bit de B dans une porte XOR (B ⊕ 1 = B\') et sert aussi de retenue initiale. M = 0 : A + B. M = 1 : A + B\' + 1 = A − B. Un comparateur indique si A = B, A > B ou A < B ; l’égalité bit à bit se teste avec des XNOR.',
          en: 'With two’s complement, a single circuit adds and subtracts: a mode input M passes every bit of B through an XOR gate (B ⊕ 1 = B\') and also serves as the initial carry. M = 0: A + B. M = 1: A + B\' + 1 = A − B. A comparator tells whether A = B, A > B or A < B; bitwise equality is tested with XNORs.',
          tr: '2’ye tümleyenle tek bir devre hem toplar hem çıkarır: M mod girişi B’nin her bitini bir XOR kapısından geçirir (B ⊕ 1 = B\') ve ilk elde olarak da kullanılır. M = 0: A + B. M = 1: A + B\' + 1 = A − B. Karşılaştırıcı A = B, A > B veya A < B olduğunu söyler; bit bit eşitlik XNOR’larla sınanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Additionneur-soustracteur 4 bits\nBi\' = Bi ⊕ M      Cin = M\nM = 0 → A + B          M = 1 → A − B\n\nComparateur 2 bits (A1A0 et B1B0)\nxi = (Ai ⊕ Bi)\'               (1 si les bits sont égaux)\nA = B  ⇔  x1 · x0\nA > B  ⇔  A1 B1\' + x1 A0 B0\'\nA < B  ⇔  A1\' B1 + x1 A0\' B0',
          en: '4-bit adder-subtractor\nBi\' = Bi ⊕ M      Cin = M\nM = 0 → A + B          M = 1 → A − B\n\n2-bit comparator (A1A0 and B1B0)\nxi = (Ai ⊕ Bi)\'               (1 if the bits are equal)\nA = B  ⇔  x1 · x0\nA > B  ⇔  A1 B1\' + x1 A0 B0\'\nA < B  ⇔  A1\' B1 + x1 A0\' B0',
          tr: '4 bitlik toplayıcı-çıkarıcı\nBi\' = Bi ⊕ M      Cin = M\nM = 0 → A + B          M = 1 → A − B\n\n2 bitlik karşılaştırıcı (A1A0 ve B1B0)\nxi = (Ai ⊕ Bi)\'               (bitler eşitse 1)\nA = B  ⇔  x1 · x0\nA > B  ⇔  A1 B1\' + x1 A0 B0\'\nA < B  ⇔  A1\' B1 + x1 A0\' B0',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) L’additionneur-soustracteur reçoit A = 0110, B = 0011 et M = 1. Que voit l’additionneur sur ses entrées, et quel est le résultat ? (2) Avec le comparateur 2 bits, que donnent les trois sorties pour A = 10 et B = 01 ?',
          en: '(1) The adder-subtractor gets A = 0110, B = 0011 and M = 1. What does the adder see on its inputs, and what is the result? (2) With the 2-bit comparator, what do the three outputs give for A = 10 and B = 01?',
          tr: '(1) Toplayıcı-çıkarıcıya A = 0110, B = 0011 ve M = 1 giriliyor. Toplayıcı girişlerinde ne görür ve sonuç nedir? (2) 2 bitlik karşılaştırıcıyla A = 10 ve B = 01 için üç çıkış ne verir?',
        },
        solution: {
          fr: '(1) Les XOR inversent B : 1100, et Cin = 1. 0110 + 1100 + 1 = 1 0011 ; on ignore la retenue sortante → 0011 = 3, et 6 − 3 = 3. (2) A1 = 1, B1 = 0 : A1 B1\' = 1, donc A > B = 1 ; x1 = 0, donc A = B = 0 ; A1\' B1 = 0 et x1 = 0, donc A < B = 0. En effet 2 > 1.',
          en: '(1) The XORs flip B: 1100, and Cin = 1. 0110 + 1100 + 1 = 1 0011; drop the carry out → 0011 = 3, and 6 − 3 = 3. (2) A1 = 1, B1 = 0: A1 B1\' = 1, so A > B = 1; x1 = 0, so A = B = 0; A1\' B1 = 0 and x1 = 0, so A < B = 0. Indeed 2 > 1.',
          tr: '(1) XOR’lar B’yi tersler: 1100 ve Cin = 1. 0110 + 1100 + 1 = 1 0011; çıkan elde atılır → 0011 = 3; 6 − 3 = 3. (2) A1 = 1, B1 = 0: A1 B1\' = 1, yani A > B = 1; x1 = 0, yani A = B = 0; A1\' B1 = 0 ve x1 = 0, yani A < B = 0. Gerçekten 2 > 1.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans l’additionneur-soustracteur, pourquoi relie-t-on M à la retenue d’entrée Cin ?',
        en: 'In the adder-subtractor, why is M wired to the carry input Cin?',
        tr: 'Toplayıcı-çıkarıcıda M neden giriş eldesi Cin’e bağlanır?',
      },
      options: {
        fr: ['Pour ajouter le +1 du complément à 2', 'Pour inverser A', 'Pour détecter un débordement'],
        en: ['To add the +1 of two’s complement', 'To invert A', 'To detect an overflow'],
        tr: ['2’ye tümleyenin +1’ini eklemek için', 'A’yı terslemek için', 'Taşmayı algılamak için'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Les XOR donnent seulement le complément à 1 (B\'). Le complément à 2 vaut B\' + 1 : le 1 est apporté par Cin = M.',
        en: 'The XORs only give the one’s complement (B\'). Two’s complement is B\' + 1: the 1 comes from Cin = M.',
        tr: 'XOR’lar yalnızca 1’e tümleyeni (B\') verir. 2’ye tümleyen B\' + 1’dir: 1, Cin = M’den gelir.',
      },
    },
  },
  {
    id: 'logic-w11-flip-flops',
    week: 11,
    title: { fr: 'Verrous et bascules', en: 'Latches and flip-flops', tr: 'Mandallar ve flip-floplar' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un circuit séquentiel a une mémoire : sa sortie dépend des entrées et de l’état précédent. L’élément de base est le verrou SR (deux NOR ou deux NAND rebouclés). Une bascule (flip-flop) ne change d’état que sur un front d’horloge. Chaque bascule a une équation caractéristique qui donne l’état suivant Q⁺.',
          en: 'A sequential circuit has memory: its output depends on the inputs and on the previous state. The basic element is the SR latch (two cross-coupled NORs or NANDs). A flip-flop only changes state on a clock edge. Each flip-flop has a characteristic equation giving the next state Q⁺.',
          tr: 'Ardışık devrenin belleği vardır: çıkışı girişlere ve önceki duruma bağlıdır. Temel eleman SR mandalıdır (geri beslemeli iki NOR veya iki NAND). Flip-flop yalnızca saat kenarında durum değiştirir. Her flip-flop’un bir sonraki durumu Q⁺’yı veren bir karakteristik denklemi vardır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'D  : Q⁺ = D                         (recopie D au front d’horloge)\nJK : Q⁺ = JQ\' + K\'Q\n     J K = 00 garde, 01 met à 0, 10 met à 1, 11 inverse\nT  : Q⁺ = T ⊕ Q                     (T = 1 → bascule)\nSR : S R = 11 interdit (verrou NOR)\n\nTable d’excitation JK (pour la conception)\nQ → Q⁺ :  0→0 : J=0 K=X   0→1 : J=1 K=X\n          1→0 : J=X K=1   1→1 : J=X K=0',
          en: 'D  : Q⁺ = D                         (copies D on the clock edge)\nJK : Q⁺ = JQ\' + K\'Q\n     J K = 00 hold, 01 reset, 10 set, 11 toggle\nT  : Q⁺ = T ⊕ Q                     (T = 1 → toggles)\nSR : S R = 11 forbidden (NOR latch)\n\nJK excitation table (for design)\nQ → Q⁺ :  0→0 : J=0 K=X   0→1 : J=1 K=X\n          1→0 : J=X K=1   1→1 : J=X K=0',
          tr: 'D  : Q⁺ = D                         (saat kenarında D’yi kopyalar)\nJK : Q⁺ = JQ\' + K\'Q\n     J K = 00 korur, 01 sıfırlar, 10 kurar, 11 tersler\nT  : Q⁺ = T ⊕ Q                     (T = 1 → tersler)\nSR : S R = 11 yasak (NOR mandalı)\n\nJK uyarma tablosu (tasarım için)\nQ → Q⁺ :  0→0 : J=0 K=X   0→1 : J=1 K=X\n          1→0 : J=X K=1   1→1 : J=X K=0',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une bascule JK part de Q = 0. Aux cinq fronts d’horloge suivants, (J, K) vaut (1, 0), (0, 0), (1, 1), (0, 1), (1, 1). Donne Q après chaque front. Puis : une bascule T avec T = 1 en permanence reçoit une horloge de 8 kHz ; quelle est la fréquence de Q ?',
          en: 'A JK flip-flop starts at Q = 0. On the next five clock edges, (J, K) is (1, 0), (0, 0), (1, 1), (0, 1), (1, 1). Give Q after each edge. Then: a T flip-flop with T = 1 all the time gets an 8 kHz clock; what is Q’s frequency?',
          tr: 'Bir JK flip-flop Q = 0’dan başlıyor. Sonraki beş saat kenarında (J, K): (1, 0), (0, 0), (1, 1), (0, 1), (1, 1). Her kenardan sonra Q’yu ver. Sonra: T = 1 sürekli olan bir T flip-flop 8 kHz’lik saat alıyor; Q’nun frekansı nedir?',
        },
        solution: {
          fr: '(1, 0) met à 1 → Q = 1. (0, 0) garde → 1. (1, 1) inverse → 0. (0, 1) met à 0 → 0. (1, 1) inverse → 1. Suite : 1, 1, 0, 0, 1. Avec T = 1, Q s’inverse à chaque front : il faut deux fronts pour une période complète, donc Q a une fréquence de 4 kHz. Une bascule T est un diviseur de fréquence par 2.',
          en: '(1, 0) sets → Q = 1. (0, 0) holds → 1. (1, 1) toggles → 0. (0, 1) resets → 0. (1, 1) toggles → 1. Sequence: 1, 1, 0, 0, 1. With T = 1, Q flips on every edge: two edges make one full period, so Q runs at 4 kHz. A T flip-flop is a divide-by-2 frequency divider.',
          tr: '(1, 0) kurar → Q = 1. (0, 0) korur → 1. (1, 1) tersler → 0. (0, 1) sıfırlar → 0. (1, 1) tersler → 1. Dizi: 1, 1, 0, 0, 1. T = 1 iken Q her kenarda terslenir: tam bir periyot iki kenar sürer, yani Q’nun frekansı 4 kHz’dir. T flip-flop frekansı 2’ye bölen bir devredir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est l’équation caractéristique de la bascule D ?',
        en: 'What is the D flip-flop’s characteristic equation?',
        tr: 'D flip-flop’un karakteristik denklemi nedir?',
      },
      options: { fr: ['Q⁺ = D', 'Q⁺ = D ⊕ Q', "Q⁺ = D'"], en: ['Q⁺ = D', 'Q⁺ = D ⊕ Q', "Q⁺ = D'"], tr: ['Q⁺ = D', 'Q⁺ = D ⊕ Q', "Q⁺ = D'"] },
      answerIndex: 0,
      explanation: {
        fr: 'La bascule D recopie son entrée au front d’horloge et la garde jusqu’au front suivant : c’est l’élément de base des registres. Q⁺ = T ⊕ Q est celle de la bascule T.',
        en: 'The D flip-flop copies its input on the clock edge and keeps it until the next edge: it is the building block of registers. Q⁺ = T ⊕ Q belongs to the T flip-flop.',
        tr: 'D flip-flop saat kenarında girişini kopyalar ve sonraki kenara kadar tutar: yazmaçların temel elemanıdır. Q⁺ = T ⊕ Q ise T flip-flop’a aittir.',
      },
    },
  },
  {
    id: 'logic-w12-sequential-analysis',
    week: 12,
    title: {
      fr: 'Analyse des circuits séquentiels',
      en: 'Analysis of sequential circuits',
      tr: 'Ardışık devrelerin analizi',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Analyser un circuit séquentiel synchrone : (1) écrire les équations d’entrée des bascules et de la sortie ; (2) remplir la table d’états (état présent + entrée → état suivant + sortie) ; (3) dessiner le diagramme d’états. Machine de Mealy : la sortie dépend de l’état et de l’entrée. Machine de Moore : la sortie ne dépend que de l’état.',
          en: 'Analyzing a synchronous sequential circuit: (1) write the flip-flop input equations and the output equation; (2) fill in the state table (present state + input → next state + output); (3) draw the state diagram. Mealy machine: the output depends on the state and the input. Moore machine: the output depends only on the state.',
          tr: 'Senkron ardışık devre analizi: (1) flip-flop giriş denklemlerini ve çıkış denklemini yaz; (2) durum tablosunu doldur (şimdiki durum + giriş → sonraki durum + çıkış); (3) durum diyagramını çiz. Mealy makinesi: çıkış duruma ve girişe bağlıdır. Moore makinesi: çıkış yalnızca duruma bağlıdır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Deux bascules D (A, B), entrée x, sortie y\nDA = Ax + Bx      DB = A\'x      y = (A + B)x\'\n\nÉtat AB | x = 0 : suivant, y | x = 1 : suivant, y\n  00    |      00, 0         |      01, 0\n  01    |      00, 1         |      11, 0\n  10    |      00, 1         |      10, 0\n  11    |      00, 1         |      10, 0\n(Mealy : y dépend de x)',
          en: 'Two D flip-flops (A, B), input x, output y\nDA = Ax + Bx      DB = A\'x      y = (A + B)x\'\n\nState AB | x = 0: next, y | x = 1: next, y\n  00     |    00, 0       |    01, 0\n  01     |    00, 1       |    11, 0\n  10     |    00, 1       |    10, 0\n  11     |    00, 1       |    10, 0\n(Mealy: y depends on x)',
          tr: 'İki D flip-flop (A, B), giriş x, çıkış y\nDA = Ax + Bx      DB = A\'x      y = (A + B)x\'\n\nDurum AB | x = 0: sonraki, y | x = 1: sonraki, y\n  00     |     00, 0        |     01, 0\n  01     |     00, 1        |     11, 0\n  10     |     00, 1        |     10, 0\n  11     |     00, 1        |     10, 0\n(Mealy: y, x’e bağlı)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Le circuit ci-dessus part de AB = 00. L’entrée x vaut successivement 1, 1, 0, 1, 0. Donne, à chaque front d’horloge, la sortie y (calculée avant le front) et le nouvel état.',
          en: 'The circuit above starts at AB = 00. Input x is successively 1, 1, 0, 1, 0. Give, at each clock edge, the output y (computed before the edge) and the new state.',
          tr: 'Yukarıdaki devre AB = 00’dan başlıyor. x girişi sırasıyla 1, 1, 0, 1, 0. Her saat kenarında y çıkışını (kenardan önce hesaplanan) ve yeni durumu ver.',
        },
        solution: {
          fr: 'x = 1 depuis 00 : y = 0, état 01. x = 1 depuis 01 : y = 0, état 11. x = 0 depuis 11 : y = 1, état 00. x = 1 depuis 00 : y = 0, état 01. x = 0 depuis 01 : y = 1, état 00. Sortie : 0, 0, 1, 0, 1. Le circuit donne y = 1 quand un 0 arrive après une suite de 1 : il détecte la fin d’une suite de 1.',
          en: 'x = 1 from 00: y = 0, state 01. x = 1 from 01: y = 0, state 11. x = 0 from 11: y = 1, state 00. x = 1 from 00: y = 0, state 01. x = 0 from 01: y = 1, state 00. Output: 0, 0, 1, 0, 1. The circuit gives y = 1 when a 0 follows a run of 1s: it detects the end of a run of 1s.',
          tr: '00’dan x = 1: y = 0, durum 01. 01’den x = 1: y = 0, durum 11. 11’den x = 0: y = 1, durum 00. 00’dan x = 1: y = 0, durum 01. 01’den x = 0: y = 1, durum 00. Çıkış: 0, 0, 1, 0, 1. Devre, bir 1 dizisinden sonra 0 gelince y = 1 verir: 1 dizisinin sonunu algılar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans une machine de Moore, de quoi dépend la sortie ?',
        en: 'In a Moore machine, what does the output depend on?',
        tr: 'Moore makinesinde çıkış neye bağlıdır?',
      },
      options: {
        fr: ['De l’état seulement', 'De l’état et de l’entrée', 'De l’entrée seulement'],
        en: ['The state only', 'The state and the input', 'The input only'],
        tr: ['Yalnızca duruma', 'Duruma ve girişe', 'Yalnızca girişe'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Moore : sortie liée à l’état, écrite dans les cercles du diagramme. Mealy : sortie liée à l’état et à l’entrée, écrite sur les flèches.',
        en: 'Moore: output tied to the state, written inside the diagram circles. Mealy: output tied to the state and input, written on the arrows.',
        tr: 'Moore: çıkış duruma bağlıdır, diyagramda dairelerin içine yazılır. Mealy: çıkış duruma ve girişe bağlıdır, okların üzerine yazılır.',
      },
    },
  },
  {
    id: 'logic-w13-counters-registers',
    week: 13,
    title: { fr: 'Compteurs et registres', en: 'Counters and registers', tr: 'Sayıcılar ve yazmaçlar' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un registre est un groupe de bascules D qui mémorise un mot de n bits. Un registre à décalage déplace ses bits d’une position à chaque front : conversion série ↔ parallèle. Un compteur parcourt une suite d’états fixée. Dans un compteur synchrone, toutes les bascules reçoivent la même horloge. Un compteur modulo N compte de 0 à N − 1 puis revient à 0.',
          en: 'A register is a group of D flip-flops storing an n-bit word. A shift register moves its bits one position on each edge: serial ↔ parallel conversion. A counter goes through a fixed sequence of states. In a synchronous counter, every flip-flop gets the same clock. A modulo-N counter counts from 0 to N − 1 then returns to 0.',
          tr: 'Yazmaç, n bitlik bir sözcüğü saklayan bir D flip-flop grubudur. Kaydırmalı yazmaç her kenarda bitlerini bir konum kaydırır: seri ↔ paralel dönüşüm. Sayıcı belirli bir durum dizisini dolaşır. Senkron sayıcıda tüm flip-flop’lar aynı saati alır. Mod-N sayıcı 0’dan N − 1’e sayar, sonra 0’a döner.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Compteur synchrone 3 bits avec bascules T\nT0 = 1          (Q0 bascule à chaque front)\nT1 = Q0         (Q1 bascule quand Q0 = 1)\nT2 = Q1 · Q0    (Q2 bascule quand Q1 = Q0 = 1)\n000 → 001 → 010 → 011 → 100 → 101 → 110 → 111 → 000\n\nRegistre à décalage 4 bits vers la droite\nentrée série → Q3 → Q2 → Q1 → Q0 → sortie série\n\nCompteur Johnson : sortie Q0 inversée ramenée en entrée → 2n états',
          en: '3-bit synchronous counter with T flip-flops\nT0 = 1          (Q0 toggles on every edge)\nT1 = Q0         (Q1 toggles when Q0 = 1)\nT2 = Q1 · Q0    (Q2 toggles when Q1 = Q0 = 1)\n000 → 001 → 010 → 011 → 100 → 101 → 110 → 111 → 000\n\n4-bit shift-right register\nserial input → Q3 → Q2 → Q1 → Q0 → serial output\n\nJohnson counter: inverted Q0 fed back to the input → 2n states',
          tr: 'T flip-flop’lu 3 bitlik senkron sayıcı\nT0 = 1          (Q0 her kenarda terslenir)\nT1 = Q0         (Q0 = 1 iken Q1 terslenir)\nT2 = Q1 · Q0    (Q1 = Q0 = 1 iken Q2 terslenir)\n000 → 001 → 010 → 011 → 100 → 101 → 110 → 111 → 000\n\n4 bitlik sağa kaydırmalı yazmaç\nseri giriş → Q3 → Q2 → Q1 → Q0 → seri çıkış\n\nJohnson sayıcı: terslenmiş Q0 girişe geri beslenir → 2n durum',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Le registre à décalage vers la droite vaut 0000 (Q3Q2Q1Q0). On envoie en série 1, puis 0, puis 1, puis 1. Donne le contenu après chaque front. (2) Comment transformer le compteur 3 bits ci-dessus en compteur modulo 6 ? (3) Combien d’états a un compteur Johnson de 4 bascules ?',
          en: '(1) The shift-right register holds 0000 (Q3Q2Q1Q0). Send 1, then 0, then 1, then 1 serially. Give the contents after each edge. (2) How can the 3-bit counter above become a modulo-6 counter? (3) How many states does a 4-flip-flop Johnson counter have?',
          tr: '(1) Sağa kaydırmalı yazmaç 0000 (Q3Q2Q1Q0) tutuyor. Seri olarak 1, sonra 0, sonra 1, sonra 1 gönderiliyor. Her kenardan sonraki içeriği ver. (2) Yukarıdaki 3 bitlik sayıcı mod-6 sayıcıya nasıl dönüştürülür? (3) 4 flip-flop’lu bir Johnson sayıcının kaç durumu vardır?',
        },
        solution: {
          fr: '(1) 1000, puis 0100, puis 1010, puis 1101. Chaque nouveau bit entre en Q3 et les autres glissent vers la droite. (2) Il doit compter 0 à 5 (000 à 101) : on détecte 110 (Q2 · Q1) et on remet les bascules à 0 (effacement asynchrone), ou on conçoit les équations pour que 101 → 000. (3) 2 × 4 = 8 états : 0000, 1000, 1100, 1110, 1111, 0111, 0011, 0001.',
          en: '(1) 1000, then 0100, then 1010, then 1101. Each new bit enters Q3 and the others slide right. (2) It must count 0 to 5 (000 to 101): detect 110 (Q2 · Q1) and reset the flip-flops (asynchronous clear), or design the equations so that 101 → 000. (3) 2 × 4 = 8 states: 0000, 1000, 1100, 1110, 1111, 0111, 0011, 0001.',
          tr: '(1) 1000, sonra 0100, sonra 1010, sonra 1101. Her yeni bit Q3’e girer, diğerleri sağa kayar. (2) 0’dan 5’e (000’dan 101’e) saymalıdır: 110 (Q2 · Q1) algılanır ve flip-flop’lar sıfırlanır (asenkron silme) ya da denklemler 101 → 000 olacak şekilde tasarlanır. (3) 2 × 4 = 8 durum: 0000, 1000, 1100, 1110, 1111, 0111, 0011, 0001.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de bascules faut-il au minimum pour un compteur modulo 10 ?',
        en: 'At least how many flip-flops does a modulo-10 counter need?',
        tr: 'Mod-10 sayıcı için en az kaç flip-flop gerekir?',
      },
      options: { fr: ['3', '4', '10'], en: ['3', '4', '10'], tr: ['3', '4', '10'] },
      answerIndex: 1,
      explanation: {
        fr: '3 bascules donnent 2³ = 8 états, trop peu ; 4 bascules donnent 16 états ≥ 10. C’est le compteur décimal (BCD) classique.',
        en: '3 flip-flops give 2³ = 8 states, too few; 4 flip-flops give 16 states ≥ 10. This is the classic decade (BCD) counter.',
        tr: '3 flip-flop 2³ = 8 durum verir, yetmez; 4 flip-flop 16 ≥ 10 durum verir. Bu klasik onluk (BCD) sayıcıdır.',
      },
    },
  },
  {
    id: 'logic-w14-sequential-design',
    week: 14,
    title: {
      fr: 'Conception d’un circuit séquentiel et révision du final',
      en: 'Sequential circuit design and final review',
      tr: 'Ardışık devre tasarımı ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Concevoir un circuit séquentiel : (1) diagramme d’états à partir de l’énoncé ; (2) table d’états ; (3) codage binaire des états ; (4) choix des bascules et table d’excitation ; (5) simplification des équations d’entrée et de sortie (Karnaugh) ; (6) schéma. Exemple classique : un détecteur de la séquence 101 (machine de Mealy, avec recouvrement).',
          en: 'Designing a sequential circuit: (1) state diagram from the specification; (2) state table; (3) binary state encoding; (4) choice of flip-flops and excitation table; (5) simplifying the input and output equations (Karnaugh); (6) schematic. Classic example: a detector for the sequence 101 (Mealy machine, with overlap).',
          tr: 'Ardışık devre tasarımı: (1) tanımdan durum diyagramı; (2) durum tablosu; (3) durumların ikili kodlanması; (4) flip-flop seçimi ve uyarma tablosu; (5) giriş ve çıkış denklemlerinin sadeleştirilmesi (Karnaugh); (6) şema. Klasik örnek: 101 dizisi algılayıcısı (örtüşmeli Mealy makinesi).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'S0 : rien d’utile    S1 : on a lu « 1 »    S2 : on a lu « 10 »\n\nÉtat | x = 0      | x = 1\nS0   | S0, y = 0  | S1, y = 0\nS1   | S2, y = 0  | S1, y = 0\nS2   | S0, y = 0  | S1, y = 1    ← « 101 » détecté ; le dernier 1 resert\n\nCodage S0 = 00, S1 = 01, S2 = 10 (11 inutilisé = X), bascules D (A, B)\nDA = B x\'      DB = x      y = A x',
          en: 'S0: nothing useful    S1: read “1”    S2: read “10”\n\nState | x = 0      | x = 1\nS0    | S0, y = 0  | S1, y = 0\nS1    | S2, y = 0  | S1, y = 0\nS2    | S0, y = 0  | S1, y = 1    ← “101” detected; the last 1 is reused\n\nEncoding S0 = 00, S1 = 01, S2 = 10 (11 unused = X), D flip-flops (A, B)\nDA = B x\'      DB = x      y = A x',
          tr: 'S0: işe yarar bir şey yok    S1: “1” okundu    S2: “10” okundu\n\nDurum | x = 0      | x = 1\nS0    | S0, y = 0  | S1, y = 0\nS1    | S2, y = 0  | S1, y = 0\nS2    | S0, y = 0  | S1, y = 1    ← “101” algılandı; son 1 yeniden kullanılır\n\nKodlama S0 = 00, S1 = 01, S2 = 10 (11 kullanılmaz = X), D flip-flop (A, B)\nDA = B x\'      DB = x      y = A x',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Méthode combinatoire : table de vérité → Karnaugh → schéma\n✔ Demi-additionneur, additionneur complet, additionneur n bits\n✔ Décodeurs, codeurs à priorité, multiplexeurs (réaliser une fonction)\n✔ Additionneur-soustracteur (XOR + Cin), comparateurs\n✔ Verrou SR, bascules D, JK, T : équations et tables d’excitation\n✔ Analyse : équations → table d’états → diagramme (Mealy / Moore)\n✔ Compteurs, registres à décalage, conception d’un détecteur',
          en: '✔ Combinational method: truth table → Karnaugh → schematic\n✔ Half adder, full adder, n-bit adder\n✔ Decoders, priority encoders, multiplexers (building a function)\n✔ Adder-subtractor (XOR + Cin), comparators\n✔ SR latch, D, JK, T flip-flops: equations and excitation tables\n✔ Analysis: equations → state table → diagram (Mealy / Moore)\n✔ Counters, shift registers, designing a detector',
          tr: '✔ Kombinasyonel yöntem: doğruluk tablosu → Karnaugh → şema\n✔ Yarım toplayıcı, tam toplayıcı, n bitlik toplayıcı\n✔ Kod çözücüler, öncelikli kodlayıcılar, çoklayıcılar (fonksiyon gerçekleme)\n✔ Toplayıcı-çıkarıcı (XOR + Cin), karşılaştırıcılar\n✔ SR mandalı, D, JK, T flip-flop’lar: denklemler ve uyarma tabloları\n✔ Analiz: denklemler → durum tablosu → diyagram (Mealy / Moore)\n✔ Sayıcılar, kaydırmalı yazmaçlar, algılayıcı tasarımı',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Le détecteur de 101 part de S0 et reçoit 1101011. Quelle suite de sorties y produit-il ? (2) Vérifie l’équation DA = Bx\' avec la table d’états.',
          en: '(1) The 101 detector starts at S0 and gets 1101011. Which output sequence y does it produce? (2) Check the equation DA = Bx\' against the state table.',
          tr: '(1) 101 algılayıcısı S0’dan başlıyor ve 1101011 alıyor. Hangi y çıkış dizisini üretir? (2) DA = Bx\' denklemini durum tablosuyla doğrula.',
        },
        solution: {
          fr: '(1) États : S0 →1→ S1 →1→ S1 →0→ S2 →1→ S1 (y = 1) →0→ S2 →1→ S1 (y = 1) →1→ S1. Sortie : 0001010. Les deux 101 se chevauchent (positions 3-5 et 5-7) et sont bien détectés tous les deux. (2) A⁺ = 1 seulement pour aller en S2 = 10, ce qui n’arrive que depuis S1 (AB = 01, donc B = 1) avec x = 0. L’état 11 n’existe pas, donc B = 1 suffit : DA = Bx\'.',
          en: '(1) States: S0 →1→ S1 →1→ S1 →0→ S2 →1→ S1 (y = 1) →0→ S2 →1→ S1 (y = 1) →1→ S1. Output: 0001010. The two 101s overlap (positions 3-5 and 5-7) and both are detected. (2) A⁺ = 1 only when going to S2 = 10, which only happens from S1 (AB = 01, so B = 1) with x = 0. State 11 doesn’t exist, so B = 1 is enough: DA = Bx\'.',
          tr: '(1) Durumlar: S0 →1→ S1 →1→ S1 →0→ S2 →1→ S1 (y = 1) →0→ S2 →1→ S1 (y = 1) →1→ S1. Çıkış: 0001010. İki 101 örtüşür (3-5 ve 5-7 konumları) ve ikisi de algılanır. (2) A⁺ = 1 yalnızca S2 = 10’a gidilirken olur; bu da yalnızca S1’den (AB = 01, yani B = 1) x = 0 ile olur. 11 durumu yoktur, yani B = 1 yeterlidir: DA = Bx\'.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de bascules faut-il au minimum pour une machine à 5 états ?',
        en: 'At least how many flip-flops does a 5-state machine need?',
        tr: '5 durumlu bir makine için en az kaç flip-flop gerekir?',
      },
      options: { fr: ['2', '3', '5'], en: ['2', '3', '5'], tr: ['2', '3', '5'] },
      answerIndex: 1,
      explanation: {
        fr: 'n bascules codent 2ⁿ états : 2² = 4 < 5 ≤ 8 = 2³, donc 3 bascules. Les 3 codes inutilisés deviennent des cases indifférentes.',
        en: 'n flip-flops encode 2ⁿ states: 2² = 4 < 5 ≤ 8 = 2³, so 3 flip-flops. The 3 unused codes become don’t care cells.',
        tr: 'n flip-flop 2ⁿ durum kodlar: 2² = 4 < 5 ≤ 8 = 2³, yani 3 flip-flop. Kullanılmayan 3 kod önemsiz hücre olur.',
      },
    },
  },
];
