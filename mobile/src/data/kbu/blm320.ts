/**
 * BLM320 Bilgisayar Mimarisi (Computer Architecture), 14 weeks following the KBU course contents,
 * which match the chapters of M. Morris Mano, "Computer System Architecture" (and its basic computer).
 * Weeks 1–7 prepare the midterm, weeks 8–14 the final.
 */

import type { LessonSource } from '@/data/lessons';

export const blm320Lessons: LessonSource[] = [
  {
    id: 'arch-w01-logic',
    week: 1,
    title: {
      fr: 'Rappels de logique numérique',
      en: 'Digital logic review',
      tr: 'Sayısal mantık devreleri (tekrar)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un ordinateur est construit avec des portes logiques (AND, OR, NOT, NAND, NOR, XOR). Les circuits combinatoires calculent leur sortie à partir des entrées seulement ; les circuits séquentiels ont aussi une mémoire, grâce aux bascules (flip-flops).',
          en: 'A computer is built from logic gates (AND, OR, NOT, NAND, NOR, XOR). Combinational circuits compute their output from the inputs only; sequential circuits also have memory, thanks to flip-flops.',
          tr: 'Bilgisayar mantık kapılarıyla (AND, OR, NOT, NAND, NOR, XOR) kurulur. Birleşik (kombinasyonel) devreler çıkışlarını yalnızca girişlerden hesaplar; ardışıl devreler ise flip-floplar sayesinde bir belleğe de sahiptir.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Simplifier avec une table de Karnaugh', en: 'Simplifying with a Karnaugh map', tr: 'Karnaugh haritasıyla sadeleştirme' },
      },
      {
        type: 'text',
        text: {
          fr: 'On place les 1 de la fonction dans la table, on regroupe les cases voisines par paquets de 1, 2, 4 ou 8 (les bords se touchent), et chaque groupe donne un terme : on garde seulement les variables qui ne changent pas dans le groupe.',
          en: 'Put the function’s 1s in the map, group neighboring cells in blocks of 1, 2, 4 or 8 (edges wrap around), and each group gives one term: keep only the variables that do not change inside the group.',
          tr: 'Fonksiyonun 1’leri haritaya yerleştirilir, komşu hücreler 1, 2, 4 veya 8’lik gruplar halinde birleştirilir (kenarlar birbirine değer) ve her grup bir terim verir: yalnızca grup içinde değişmeyen değişkenler kalır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Bascules (Q(t+1) = état suivant)\nD  : Q(t+1) = D\nT  : T = 0 → garde Q ;  T = 1 → inverse Q\nJK : J K = 00 garde, 01 met à 0, 10 met à 1, 11 inverse',
          en: 'Flip-flops (Q(t+1) = next state)\nD  : Q(t+1) = D\nT  : T = 0 → keep Q ;  T = 1 → toggle Q\nJK : J K = 00 keep, 01 reset, 10 set, 11 toggle',
          tr: 'Flip-floplar (Q(t+1) = sonraki durum)\nD  : Q(t+1) = D\nT  : T = 0 → Q korunur ;  T = 1 → Q tersine döner\nJK : J K = 00 korur, 01 sıfırlar, 10 birler, 11 tersine çevirir',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Simplifie F(x, y, z) = Σ(0, 2, 4, 6).',
          en: 'Simplify F(x, y, z) = Σ(0, 2, 4, 6).',
          tr: 'F(x, y, z) = Σ(0, 2, 4, 6) fonksiyonunu sadeleştir.',
        },
        solution: {
          fr: 'Les mintermes sont 000, 010, 100 et 110 : dans les quatre, z = 0, alors que x et y prennent toutes les valeurs. Ces 4 cases forment un seul groupe de 4 dans la table de Karnaugh. Il reste F = z′.',
          en: 'The minterms are 000, 010, 100 and 110: in all four, z = 0, while x and y take every value. These 4 cells form a single group of 4 in the Karnaugh map. What remains is F = z′.',
          tr: 'Mintermler 000, 010, 100 ve 110’dur: dördünde de z = 0 iken x ve y tüm değerleri alır. Bu 4 hücre Karnaugh haritasında tek bir 4’lü grup oluşturur. Geriye F = z′ kalır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que fait une bascule JK quand J = 1 et K = 1 ?',
        en: 'What does a JK flip-flop do when J = 1 and K = 1?',
        tr: 'J = 1 ve K = 1 olduğunda JK flip-flop ne yapar?',
      },
      options: {
        fr: ['Elle garde son état', 'Elle se met à 0', 'Elle inverse son état'],
        en: ['It keeps its state', 'It resets to 0', 'It toggles its state'],
        tr: ['Durumunu korur', '0’a sıfırlanır', 'Durumunu tersine çevirir'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'Avec J = K = 1, la bascule JK bascule (toggle) : Q(t+1) = Q′. C’est ce qui la distingue de la bascule SR, pour laquelle cette combinaison est interdite.',
        en: 'With J = K = 1, the JK flip-flop toggles: Q(t+1) = Q′. That is what sets it apart from the SR flip-flop, where this combination is forbidden.',
        tr: 'J = K = 1 iken JK flip-flop tersine döner: Q(t+1) = Q′. Bu kombinasyonun yasak olduğu SR flip-floptan farkı budur.',
      },
    },
  },
  {
    id: 'arch-w02-components',
    week: 2,
    title: { fr: 'Composants numériques', en: 'Digital components', tr: 'Sayısal bileşenler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un décodeur n × 2ⁿ active une seule de ses 2ⁿ sorties, celle dont le numéro est écrit en binaire sur ses n entrées. Un multiplexeur (MUX) 2ⁿ × 1 choisit une entrée parmi 2ⁿ grâce à n lignes de sélection et la recopie sur sa sortie.',
          en: 'An n × 2ⁿ decoder activates exactly one of its 2ⁿ outputs, the one whose number is written in binary on its n inputs. A 2ⁿ × 1 multiplexer (MUX) picks one input out of 2ⁿ using n select lines and copies it to its output.',
          tr: 'n × 2ⁿ kod çözücü, 2ⁿ çıkışından yalnızca birini, numarası n girişinde ikilik olarak yazılı olanı etkinleştirir. 2ⁿ × 1 çoklayıcı (MUX), n seçme hattıyla 2ⁿ girişten birini seçer ve çıkışa aktarır.',
        },
      },
      {
        type: 'code',
        code: 'MUX 4 × 1\nS1 S0 | Y\n 0  0 | I0\n 0  1 | I1\n 1  0 | I2\n 1  1 | I3\n\nY = S1′S0′·I0 + S1′S0·I1 + S1S0′·I2 + S1S0·I3',
      },
      {
        type: 'text',
        text: {
          fr: 'Un registre est un groupe de bascules qui stocke un mot de n bits ; certains peuvent décaler leur contenu (registre à décalage) ou compter (compteur binaire). Une unité mémoire de 2ᵏ mots de n bits a k lignes d’adresse et n lignes de données.',
          en: 'A register is a group of flip-flops storing an n-bit word; some can shift their content (shift register) or count (binary counter). A memory unit of 2ᵏ words of n bits has k address lines and n data lines.',
          tr: 'Yazmaç, n bitlik bir kelimeyi saklayan flip-flop grubudur; bazıları içeriğini kaydırabilir (kaydırmalı yazmaç) veya sayabilir (ikilik sayıcı). 2ᵏ adet n bitlik kelimeden oluşan bir bellek biriminin k adres hattı ve n veri hattı vardır.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Combien de lignes de sélection faut-il pour un MUX 8 × 1 ? (2) Une mémoire de 4096 mots de 16 bits : combien de lignes d’adresse et de données ? (3) Quelle sortie d’un décodeur 3 × 8 est active pour l’entrée 101 ?',
          en: '(1) How many select lines does an 8 × 1 MUX need? (2) A memory of 4096 words of 16 bits: how many address and data lines? (3) Which output of a 3 × 8 decoder is active for input 101?',
          tr: '(1) 8 × 1 MUX için kaç seçme hattı gerekir? (2) 16 bitlik 4096 kelimelik bir bellek: kaç adres ve veri hattı? (3) 3 × 8 kod çözücüde 101 girişi için hangi çıkış etkin olur?',
        },
        solution: {
          fr: '(1) 8 = 2³ : 3 lignes de sélection. (2) 4096 = 2¹² : 12 lignes d’adresse, et 16 lignes de données (une par bit du mot). C’est la mémoire de l’ordinateur de base de Mano. (3) 101₂ = 5 : la sortie D5.',
          en: '(1) 8 = 2³: 3 select lines. (2) 4096 = 2¹²: 12 address lines, and 16 data lines (one per bit of the word). This is the memory of Mano’s basic computer. (3) 101₂ = 5: output D5.',
          tr: '(1) 8 = 2³: 3 seçme hattı. (2) 4096 = 2¹²: 12 adres hattı ve 16 veri hattı (kelimenin her biti için bir). Bu, Mano’nun temel bilgisayarının belleğidir. (3) 101₂ = 5: D5 çıkışı.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pour un MUX 4 × 1, quelle entrée est recopiée quand S1 S0 = 10 ?',
        en: 'For a 4 × 1 MUX, which input is copied when S1 S0 = 10?',
        tr: '4 × 1 MUX’ta S1 S0 = 10 iken hangi giriş aktarılır?',
      },
      options: { fr: ['I1', 'I2', 'I3'], en: ['I1', 'I2', 'I3'], tr: ['I1', 'I2', 'I3'] },
      answerIndex: 1,
      explanation: {
        fr: 'S1 S0 = 10₂ = 2 : c’est l’entrée I2 qui passe.',
        en: 'S1 S0 = 10₂ = 2: input I2 goes through.',
        tr: 'S1 S0 = 10₂ = 2: I2 girişi geçer.',
      },
    },
  },
  {
    id: 'arch-w03-data-representation',
    week: 3,
    title: { fr: 'Représentation des données', en: 'Data representation', tr: 'Veri gösterimi' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Les entiers signés se codent en complément à 2 : sur n bits, de −2ⁿ⁻¹ à 2ⁿ⁻¹ − 1. Un débordement (overflow) arrive quand on additionne deux nombres de même signe et que le résultat change de signe.',
          en: 'Signed integers use two’s complement: on n bits, from −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1. An overflow happens when two numbers of the same sign are added and the result changes sign.',
          tr: 'İşaretli tam sayılar ikiye tümleyenle kodlanır: n bit üzerinde −2ⁿ⁻¹’den 2ⁿ⁻¹ − 1’e kadar. Aynı işaretli iki sayı toplanıp sonucun işareti değişirse taşma (overflow) olur.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Virgule flottante (IEEE 754, 32 bits)', en: 'Floating point (IEEE 754, 32 bits)', tr: 'Kayan nokta (IEEE 754, 32 bit)' },
      },
      {
        type: 'code',
        code: {
          fr: '| signe (1) | exposant (8) | mantisse (23) |\nvaleur = (−1)^signe × 1,mantisse × 2^(exposant − 127)\n\nCodes : BCD (chaque chiffre décimal sur 4 bits),\n        code Gray (un seul bit change entre deux valeurs voisines),\n        ASCII, Unicode, bit de parité (détection d’erreur)',
          en: '| sign (1) | exponent (8) | mantissa (23) |\nvalue = (−1)^sign × 1.mantissa × 2^(exponent − 127)\n\nCodes: BCD (each decimal digit on 4 bits),\n       Gray code (only one bit changes between neighbors),\n       ASCII, Unicode, parity bit (error detection)',
          tr: '| işaret (1) | üs (8) | mantis (23) |\ndeğer = (−1)^işaret × 1,mantis × 2^(üs − 127)\n\nKodlar: BCD (her onluk basamak 4 bit),\n        Gray kodu (komşu değerler arasında tek bit değişir),\n        ASCII, Unicode, eşlik biti (hata sezme)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris −6,75 au format IEEE 754 simple précision (32 bits), en binaire puis en hexadécimal.',
          en: 'Write −6.75 in IEEE 754 single precision (32 bits), in binary then in hexadecimal.',
          tr: '−6,75 sayısını IEEE 754 tek duyarlıklı (32 bit) formatta önce ikilik, sonra onaltılık olarak yaz.',
        },
        solution: {
          fr: '6,75 = 110,11₂ = 1,1011 × 2². Signe = 1 (négatif). Exposant = 2 + 127 = 129 = 10000001. Mantisse = 1011 suivi de 19 zéros (on n’écrit pas le 1 avant la virgule). Résultat : 1 10000001 10110000000000000000000 = 1100 0000 1101 1000 0000… = C0D80000₁₆.',
          en: '6.75 = 110.11₂ = 1.1011 × 2². Sign = 1 (negative). Exponent = 2 + 127 = 129 = 10000001. Mantissa = 1011 followed by 19 zeros (the leading 1 is not stored). Result: 1 10000001 10110000000000000000000 = 1100 0000 1101 1000 0000… = C0D80000₁₆.',
          tr: '6,75 = 110,11₂ = 1,1011 × 2². İşaret = 1 (negatif). Üs = 2 + 127 = 129 = 10000001. Mantis = 1011 ve ardından 19 sıfır (baştaki 1 saklanmaz). Sonuç: 1 10000001 10110000000000000000000 = 1100 0000 1101 1000 0000… = C0D80000₁₆.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Sur 8 bits en complément à 2, quel est le plus petit nombre représentable ?',
        en: 'On 8 bits in two’s complement, what is the smallest number that can be represented?',
        tr: '8 bit ikiye tümleyende gösterilebilen en küçük sayı nedir?',
      },
      options: { fr: ['−127', '−128', '−255'], en: ['−127', '−128', '−255'], tr: ['−127', '−128', '−255'] },
      answerIndex: 1,
      explanation: {
        fr: 'La plage est de −2⁷ = −128 à 2⁷ − 1 = 127. Le nombre −128 s’écrit 10000000.',
        en: 'The range is −2⁷ = −128 to 2⁷ − 1 = 127. The number −128 is written 10000000.',
        tr: 'Aralık −2⁷ = −128’den 2⁷ − 1 = 127’ye kadardır. −128 sayısı 10000000 olarak yazılır.',
      },
    },
  },
  {
    id: 'arch-w04-rtl',
    week: 4,
    title: {
      fr: 'Transfert entre registres (RTL) et bus',
      en: 'Register transfer (RTL) and buses',
      tr: 'Yazmaç aktarımı (RTL) ve yollar',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le langage de transfert entre registres (RTL) décrit ce que fait le matériel à chaque impulsion d’horloge. R2 ← R1 copie R1 dans R2. P: R2 ← R1 ne le fait que si la fonction de contrôle P vaut 1. Une virgule sépare des opérations faites en même temps : T: R2 ← R1, R1 ← R2 échange les deux registres.',
          en: 'Register transfer language (RTL) describes what the hardware does at each clock pulse. R2 ← R1 copies R1 into R2. P: R2 ← R1 does it only when the control function P is 1. A comma separates operations done at the same time: T: R2 ← R1, R1 ← R2 swaps the two registers.',
          tr: 'Yazmaç aktarım dili (RTL), donanımın her saat darbesinde ne yaptığını tanımlar. R2 ← R1, R1’i R2’ye kopyalar. P: R2 ← R1 bunu yalnızca kontrol fonksiyonu P = 1 iken yapar. Virgül, aynı anda yapılan işlemleri ayırır: T: R2 ← R1, R1 ← R2 iki yazmacı değiştirir.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Le bus commun', en: 'The common bus', tr: 'Ortak yol' },
      },
      {
        type: 'text',
        text: {
          fr: 'Pour relier k registres de n bits sans un fil entre chaque paire, on utilise un bus commun fait de n multiplexeurs k × 1 : les lignes de sélection choisissent le registre qui écrit sur le bus, et le signal de chargement (LD) du registre destination le fait lire. Mémoire : lecture DR ← M[AR], écriture M[AR] ← R1.',
          en: 'To connect k registers of n bits without a wire between every pair, use a common bus made of n k × 1 multiplexers: the select lines choose which register drives the bus, and the destination register’s load signal (LD) makes it read. Memory: read DR ← M[AR], write M[AR] ← R1.',
          tr: 'n bitlik k yazmacı her çift arasında tel olmadan bağlamak için n adet k × 1 çoklayıcıdan oluşan ortak bir yol kullanılır: seçme hatları yola hangi yazmacın yazacağını seçer, hedef yazmacın yükleme (LD) sinyali onu okutur. Bellek: okuma DR ← M[AR], yazma M[AR] ← R1.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un bus commun relie 8 registres de 16 bits. (1) Combien de multiplexeurs, de quelle taille ? (2) Combien de lignes de sélection ? (3) Que fait T1: R3 ← R5, si le bus a 8 sources numérotées 0 à 7 ?',
          en: 'A common bus connects 8 registers of 16 bits. (1) How many multiplexers, of what size? (2) How many select lines? (3) What does T1: R3 ← R5 do, if the bus has 8 sources numbered 0 to 7?',
          tr: 'Ortak bir yol 16 bitlik 8 yazmacı bağlıyor. (1) Kaç çoklayıcı, hangi boyutta? (2) Kaç seçme hattı? (3) Yolun 0’dan 7’ye numaralı 8 kaynağı varsa T1: R3 ← R5 ne yapar?',
        },
        solution: {
          fr: '(1) Un multiplexeur par bit : 16 MUX 8 × 1. (2) 8 = 2³ : 3 lignes de sélection, communes aux 16 MUX. (3) Quand T1 = 1 : les lignes de sélection valent 101 (5) pour que R5 écrive sur le bus, et le LD de R3 est activé ; au front d’horloge suivant, R3 reçoit le contenu de R5. R5 ne change pas.',
          en: '(1) One multiplexer per bit: 16 MUX 8 × 1. (2) 8 = 2³: 3 select lines, shared by the 16 MUXes. (3) When T1 = 1: the select lines are 101 (5) so R5 drives the bus, and R3’s LD is enabled; at the next clock edge, R3 receives R5’s content. R5 does not change.',
          tr: '(1) Her bit için bir çoklayıcı: 16 adet 8 × 1 MUX. (2) 8 = 2³: 16 MUX’un ortak kullandığı 3 seçme hattı. (3) T1 = 1 iken: R5’in yola yazması için seçme hatları 101 (5) olur ve R3’ün LD’si etkinleşir; sonraki saat kenarında R3, R5’in içeriğini alır. R5 değişmez.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que signifie T: R1 ← R2, R2 ← R1 ?',
        en: 'What does T: R1 ← R2, R2 ← R1 mean?',
        tr: 'T: R1 ← R2, R2 ← R1 ne anlama gelir?',
      },
      options: {
        fr: ['R1 et R2 reçoivent tous deux l’ancien R2', 'R1 et R2 échangent leur contenu quand T = 1', 'Une erreur, c’est impossible'],
        en: ['R1 and R2 both get the old R2', 'R1 and R2 swap their contents when T = 1', 'An error, it is impossible'],
        tr: ['R1 ve R2’nin ikisi de eski R2’yi alır', 'T = 1 iken R1 ve R2 içeriklerini değiştirir', 'Bir hata, bu imkânsız'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Les deux transferts se font au même front d’horloge, avec les valeurs d’avant : les bascules permettent l’échange sans registre temporaire.',
        en: 'Both transfers happen on the same clock edge, using the values from before: flip-flops make the swap possible without a temporary register.',
        tr: 'İki aktarım da aynı saat kenarında, önceki değerlerle yapılır: flip-floplar geçici yazmaç olmadan değişimi mümkün kılar.',
      },
    },
  },
  {
    id: 'arch-w05-microoperations',
    week: 5,
    title: { fr: 'Micro-opérations et UAL', en: 'Micro-operations and the ALU', tr: 'Mikro işlemler ve ALU' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une micro-opération est une opération élémentaire faite sur des registres en une impulsion d’horloge. Il en existe quatre familles : transfert, arithmétique, logique et décalage. L’UAL (unité arithmétique et logique) les regroupe dans un même circuit.',
          en: 'A micro-operation is an elementary operation done on registers in one clock pulse. There are four families: transfer, arithmetic, logic and shift. The ALU (arithmetic logic unit) combines them in one circuit.',
          tr: 'Mikro işlem, yazmaçlar üzerinde bir saat darbesinde yapılan temel bir işlemdir. Dört ailesi vardır: aktarım, aritmetik, mantık ve kaydırma. ALU (aritmetik mantık birimi) bunları tek bir devrede toplar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Arithmétique : R3 ← R1 + R2      R2 ← R2′ + 1 (complément à 2)\n              R3 ← R1 + R2′ + 1 (soustraction)   R1 ← R1 + 1\nLogique     : R1 ← R1 ∧ R2 (masque : met des bits à 0)\n              R1 ← R1 ∨ R2 (met des bits à 1)\n              R1 ← R1 ⊕ R2 (inverse des bits)\nDécalage    : shl, shr (logiques, entre un 0)\n              cil, cir (circulaires, le bit sorti revient)\n              ashl, ashr (arithmétiques, ashr garde le signe)',
          en: 'Arithmetic: R3 ← R1 + R2      R2 ← R2′ + 1 (two’s complement)\n            R3 ← R1 + R2′ + 1 (subtraction)   R1 ← R1 + 1\nLogic     : R1 ← R1 ∧ R2 (mask: clears bits)\n            R1 ← R1 ∨ R2 (sets bits)\n            R1 ← R1 ⊕ R2 (complements bits)\nShift     : shl, shr (logical, a 0 enters)\n            cil, cir (circular, the bit shifted out comes back)\n            ashl, ashr (arithmetic, ashr keeps the sign)',
          tr: 'Aritmetik : R3 ← R1 + R2      R2 ← R2′ + 1 (ikiye tümleyen)\n            R3 ← R1 + R2′ + 1 (çıkarma)   R1 ← R1 + 1\nMantık    : R1 ← R1 ∧ R2 (maske: bitleri sıfırlar)\n            R1 ← R1 ∨ R2 (bitleri 1 yapar)\n            R1 ← R1 ⊕ R2 (bitleri tersler)\nKaydırma  : shl, shr (mantıksal, 0 girer)\n            cil, cir (dairesel, çıkan bit geri girer)\n            ashl, ashr (aritmetik, ashr işareti korur)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'R1 = 1010 1100 et R2 = 1111 0000. Calcule R1 ∧ R2, R1 ⊕ R2, puis shl R1, cir R1 et ashr R1 (chaque fois à partir de la valeur de départ de R1).',
          en: 'R1 = 1010 1100 and R2 = 1111 0000. Compute R1 ∧ R2, R1 ⊕ R2, then shl R1, cir R1 and ashr R1 (each time from R1’s starting value).',
          tr: 'R1 = 1010 1100 ve R2 = 1111 0000. R1 ∧ R2, R1 ⊕ R2, ardından shl R1, cir R1 ve ashr R1’i hesapla (her seferinde R1’in başlangıç değerinden).',
        },
        solution: {
          fr: 'R1 ∧ R2 = 1010 0000 (les 4 bits de droite sont masqués). R1 ⊕ R2 = 0101 1100 (les 4 bits de gauche sont inversés). shl R1 = 0101 1000 (le 1 de gauche sort, un 0 entre à droite). cir R1 = 0101 0110 (le 0 de droite revient à gauche). ashr R1 = 1101 0110 (le bit de signe 1 est recopié à gauche).',
          en: 'R1 ∧ R2 = 1010 0000 (the 4 right bits are masked). R1 ⊕ R2 = 0101 1100 (the 4 left bits are complemented). shl R1 = 0101 1000 (the left 1 leaves, a 0 enters on the right). cir R1 = 0101 0110 (the right 0 comes back on the left). ashr R1 = 1101 0110 (the sign bit 1 is copied on the left).',
          tr: 'R1 ∧ R2 = 1010 0000 (sağdaki 4 bit maskelenir). R1 ⊕ R2 = 0101 1100 (soldaki 4 bit terslenir). shl R1 = 0101 1000 (soldaki 1 çıkar, sağdan 0 girer). cir R1 = 0101 0110 (sağdaki 0 sola geri gelir). ashr R1 = 1101 0110 (işaret biti 1 solda kopyalanır).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle micro-opération calcule R1 − R2 dans R3 ?',
        en: 'Which micro-operation computes R1 − R2 into R3?',
        tr: 'Hangi mikro işlem R1 − R2’yi R3’e hesaplar?',
      },
      options: {
        fr: ['R3 ← R1 + R2′', 'R3 ← R1 + R2′ + 1', 'R3 ← R1 ⊕ R2'],
        en: ['R3 ← R1 + R2′', 'R3 ← R1 + R2′ + 1', 'R3 ← R1 ⊕ R2'],
        tr: ['R3 ← R1 + R2′', 'R3 ← R1 + R2′ + 1', 'R3 ← R1 ⊕ R2'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'R2′ + 1 est le complément à 2 de R2, c’est-à-dire −R2. R1 + R2′ seul donne R1 − R2 − 1.',
        en: 'R2′ + 1 is the two’s complement of R2, that is −R2. R1 + R2′ alone gives R1 − R2 − 1.',
        tr: 'R2′ + 1, R2’nin ikiye tümleyeni yani −R2’dir. Tek başına R1 + R2′, R1 − R2 − 1 verir.',
      },
    },
  },
  {
    id: 'arch-w06-basic-computer',
    week: 6,
    title: {
      fr: 'L’ordinateur de base de Mano',
      en: 'Mano’s basic computer',
      tr: 'Mano’nun temel bilgisayarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’ordinateur de base a une mémoire de 4096 mots de 16 bits et des registres reliés par un bus commun : AR (adresse, 12 bits), PC (compteur de programme, 12 bits), DR (donnée, 16), AC (accumulateur, 16), IR (instruction, 16), TR (temporaire, 16), INPR et OUTR (entrée et sortie, 8 bits), plus la bascule E (retenue).',
          en: 'The basic computer has a memory of 4096 words of 16 bits and registers connected by a common bus: AR (address, 12 bits), PC (program counter, 12 bits), DR (data, 16), AC (accumulator, 16), IR (instruction, 16), TR (temporary, 16), INPR and OUTR (input and output, 8 bits), plus the E flip-flop (carry).',
          tr: 'Temel bilgisayarın 16 bitlik 4096 kelimelik bir belleği ve ortak yolla bağlı yazmaçları vardır: AR (adres, 12 bit), PC (program sayacı, 12 bit), DR (veri, 16), AC (akümülatör, 16), IR (komut, 16), TR (geçici, 16), INPR ve OUTR (giriş ve çıkış, 8 bit) ile E flip-flopu (elde).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Format d’une instruction (16 bits)\n| 15 | 14 13 12 | 11 ................ 0 |\n|  I |  opcode  |        adresse        |\nI = 0 : adressage direct     I = 1 : adressage indirect\n\nopcode 000-110 : référence mémoire (AND, ADD, LDA, STA, BUN, BSA, ISZ)\nopcode 111, I = 0 : référence registre (7xxx, ex. 7800 = CLA)\nopcode 111, I = 1 : entrée-sortie (Fxxx)',
          en: 'Instruction format (16 bits)\n| 15 | 14 13 12 | 11 ................ 0 |\n|  I |  opcode  |        address        |\nI = 0: direct addressing     I = 1: indirect addressing\n\nopcode 000-110: memory reference (AND, ADD, LDA, STA, BUN, BSA, ISZ)\nopcode 111, I = 0: register reference (7xxx, e.g. 7800 = CLA)\nopcode 111, I = 1: input-output (Fxxx)',
          tr: 'Komut formatı (16 bit)\n| 15 | 14 13 12 | 11 ................ 0 |\n|  I |  opcode  |         adres         |\nI = 0: doğrudan adresleme     I = 1: dolaylı adresleme\n\nopcode 000-110: bellek başvurulu (AND, ADD, LDA, STA, BUN, BSA, ISZ)\nopcode 111, I = 0: yazmaç başvurulu (7xxx, örn. 7800 = CLA)\nopcode 111, I = 1: giriş-çıkış (Fxxx)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Le contrôle utilise un compteur de séquence SC et un décodeur qui produit les signaux de temps T0, T1, T2… Le décodeur de l’opcode produit D0 à D7. Chaque micro-opération est déclenchée par une combinaison comme D1T4.',
          en: 'Control uses a sequence counter SC and a decoder producing the timing signals T0, T1, T2… The opcode decoder produces D0 to D7. Each micro-operation is triggered by a combination such as D1T4.',
          tr: 'Kontrol, bir sıra sayıcı SC ve T0, T1, T2… zamanlama sinyallerini üreten bir kod çözücü kullanır. Opcode kod çözücüsü D0’dan D7’ye kadar sinyaller üretir. Her mikro işlem D1T4 gibi bir kombinasyonla tetiklenir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Décode les instructions hexadécimales 2025 et 9025 : bit I, opcode, adresse, et ce que fait l’instruction.',
          en: 'Decode the hexadecimal instructions 2025 and 9025: I bit, opcode, address, and what the instruction does.',
          tr: '2025 ve 9025 onaltılık komutlarını çöz: I biti, opcode, adres ve komutun ne yaptığı.',
        },
        solution: {
          fr: '2025 = 0010 0000 0010 0101 : I = 0, opcode 010 = LDA, adresse 025 : AC ← M[025] (adressage direct). 9025 = 1001 0000 0010 0101 : I = 1, opcode 001 = ADD, adresse 025 : adressage indirect, M[025] contient l’adresse de l’opérande, donc AC ← AC + M[M[025]].',
          en: '2025 = 0010 0000 0010 0101: I = 0, opcode 010 = LDA, address 025: AC ← M[025] (direct addressing). 9025 = 1001 0000 0010 0101: I = 1, opcode 001 = ADD, address 025: indirect addressing, M[025] holds the operand’s address, so AC ← AC + M[M[025]].',
          tr: '2025 = 0010 0000 0010 0101: I = 0, opcode 010 = LDA, adres 025: AC ← M[025] (doğrudan adresleme). 9025 = 1001 0000 0010 0101: I = 1, opcode 001 = ADD, adres 025: dolaylı adresleme, M[025] işlenenin adresini tutar, yani AC ← AC + M[M[025]].',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans l’ordinateur de base, une instruction dont l’opcode est 111 et le bit I vaut 0 est…',
        en: 'In the basic computer, an instruction with opcode 111 and I bit 0 is…',
        tr: 'Temel bilgisayarda opcode’u 111 ve I biti 0 olan bir komut…',
      },
      options: {
        fr: ['une référence mémoire', 'une référence registre', 'une entrée-sortie'],
        en: ['a memory reference', 'a register reference', 'an input-output instruction'],
        tr: ['bellek başvurulu', 'yazmaç başvurulu', 'giriş-çıkış komutu'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Opcode 111 avec I = 0 donne les instructions 7xxx (CLA, CMA, INC, HLT…) ; avec I = 1 ce sont les entrées-sorties Fxxx.',
        en: 'Opcode 111 with I = 0 gives the 7xxx instructions (CLA, CMA, INC, HLT…); with I = 1 they are the Fxxx input-output instructions.',
        tr: 'Opcode 111 ve I = 0, 7xxx komutlarını (CLA, CMA, INC, HLT…) verir; I = 1 ise Fxxx giriş-çıkış komutlarıdır.',
      },
    },
  },
  {
    id: 'arch-w07-instruction-cycle',
    week: 7,
    title: {
      fr: 'Cycle d’instruction et révision de la vize',
      en: 'Instruction cycle and midterm review',
      tr: 'Komut döngüsü ve vize tekrarı',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Recherche et décodage (pour toutes les instructions)\nT0 : AR ← PC\nT1 : IR ← M[AR], PC ← PC + 1\nT2 : D0…D7 ← décodage IR(12-14), AR ← IR(0-11), I ← IR(15)\nT3 : si D7′ et I = 1 : AR ← M[AR]   (adresse indirecte)\n\nExécution (instructions de référence mémoire)\nADD : D1T4 : DR ← M[AR]\n      D1T5 : AC ← AC + DR, E ← retenue, SC ← 0\nLDA : D2T4 : DR ← M[AR]      D2T5 : AC ← DR, SC ← 0\nSTA : D3T4 : M[AR] ← AC, SC ← 0\nBUN : D4T4 : PC ← AR, SC ← 0',
          en: 'Fetch and decode (for every instruction)\nT0 : AR ← PC\nT1 : IR ← M[AR], PC ← PC + 1\nT2 : D0…D7 ← decode IR(12-14), AR ← IR(0-11), I ← IR(15)\nT3 : if D7′ and I = 1: AR ← M[AR]   (indirect address)\n\nExecute (memory-reference instructions)\nADD : D1T4 : DR ← M[AR]\n      D1T5 : AC ← AC + DR, E ← carry, SC ← 0\nLDA : D2T4 : DR ← M[AR]      D2T5 : AC ← DR, SC ← 0\nSTA : D3T4 : M[AR] ← AC, SC ← 0\nBUN : D4T4 : PC ← AR, SC ← 0',
          tr: 'Getirme ve çözme (tüm komutlar için)\nT0 : AR ← PC\nT1 : IR ← M[AR], PC ← PC + 1\nT2 : D0…D7 ← IR(12-14) çöz, AR ← IR(0-11), I ← IR(15)\nT3 : D7′ ve I = 1 ise: AR ← M[AR]   (dolaylı adres)\n\nYürütme (bellek başvurulu komutlar)\nADD : D1T4 : DR ← M[AR]\n      D1T5 : AC ← AC + DR, E ← elde, SC ← 0\nLDA : D2T4 : DR ← M[AR]      D2T5 : AC ← DR, SC ← 0\nSTA : D3T4 : M[AR] ← AC, SC ← 0\nBUN : D4T4 : PC ← AR, SC ← 0',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Les interruptions', en: 'Interrupts', tr: 'Kesmeler' },
      },
      {
        type: 'text',
        text: {
          fr: 'Si IEN = 1 et qu’un périphérique est prêt, la bascule R passe à 1 et, au lieu de chercher l’instruction suivante, le cycle d’interruption sauvegarde le PC : RT0 : AR ← 0, TR ← PC ; RT1 : M[AR] ← TR, PC ← 0 ; RT2 : PC ← PC + 1, IEN ← 0, R ← 0, SC ← 0. Le programme de service commence à l’adresse 1, et l’adresse de retour est en M[0].',
          en: 'If IEN = 1 and a device is ready, flip-flop R becomes 1 and, instead of fetching the next instruction, the interrupt cycle saves the PC: RT0: AR ← 0, TR ← PC; RT1: M[AR] ← TR, PC ← 0; RT2: PC ← PC + 1, IEN ← 0, R ← 0, SC ← 0. The service routine starts at address 1, and the return address is in M[0].',
          tr: 'IEN = 1 ve bir aygıt hazırsa R flip-flopu 1 olur ve bir sonraki komutu getirmek yerine kesme döngüsü PC’yi saklar: RT0: AR ← 0, TR ← PC; RT1: M[AR] ← TR, PC ← 0; RT2: PC ← PC + 1, IEN ← 0, R ← 0, SC ← 0. Hizmet programı 1 adresinden başlar, dönüş adresi M[0]’dadır.',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Karnaugh, bascules D, T, JK\n✔ Décodeur, MUX, registres, taille d’une mémoire\n✔ Complément à 2, débordement, IEEE 754\n✔ RTL, bus commun (nombre et taille des MUX)\n✔ Micro-opérations arithmétiques, logiques, décalages\n✔ Registres et format d’instruction de l’ordinateur de base\n✔ Cycle T0-T3, exécution de ADD/LDA/STA/BUN, interruption',
          en: '✔ Karnaugh maps, D, T, JK flip-flops\n✔ Decoder, MUX, registers, memory size\n✔ Two’s complement, overflow, IEEE 754\n✔ RTL, common bus (number and size of MUXes)\n✔ Arithmetic, logic and shift micro-operations\n✔ Basic computer registers and instruction format\n✔ T0-T3 cycle, ADD/LDA/STA/BUN execution, interrupt',
          tr: '✔ Karnaugh haritası, D, T, JK flip-flopları\n✔ Kod çözücü, MUX, yazmaçlar, bellek boyutu\n✔ İkiye tümleyen, taşma, IEEE 754\n✔ RTL, ortak yol (MUX sayısı ve boyutu)\n✔ Aritmetik, mantık ve kaydırma mikro işlemleri\n✔ Temel bilgisayarın yazmaçları ve komut formatı\n✔ T0-T3 döngüsü, ADD/LDA/STA/BUN yürütme, kesme',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'PC = 200, M[200] = 1350 (ADD direct, adresse 350), M[350] = 0007 et AC = 0005. Donne le contenu des registres après chaque temps T0 à T5.',
          en: 'PC = 200, M[200] = 1350 (direct ADD, address 350), M[350] = 0007 and AC = 0005. Give the register contents after each timing step T0 to T5.',
          tr: 'PC = 200, M[200] = 1350 (doğrudan ADD, adres 350), M[350] = 0007 ve AC = 0005. T0’dan T5’e kadar her zaman adımından sonra yazmaçların içeriğini ver.',
        },
        solution: {
          fr: 'T0 : AR = 200. T1 : IR = 1350, PC = 201. T2 : D1 = 1 (opcode 001 = ADD), AR = 350, I = 0. T3 : rien, l’adressage est direct. T4 : DR = M[350] = 0007. T5 : AC = 0005 + 0007 = 000C (12 en décimal), E = 0, SC = 0 : on repart en T0 avec PC = 201.',
          en: 'T0: AR = 200. T1: IR = 1350, PC = 201. T2: D1 = 1 (opcode 001 = ADD), AR = 350, I = 0. T3: nothing, addressing is direct. T4: DR = M[350] = 0007. T5: AC = 0005 + 0007 = 000C (12 in decimal), E = 0, SC = 0: back to T0 with PC = 201.',
          tr: 'T0: AR = 200. T1: IR = 1350, PC = 201. T2: D1 = 1 (opcode 001 = ADD), AR = 350, I = 0. T3: bir şey yok, adresleme doğrudandır. T4: DR = M[350] = 0007. T5: AC = 0005 + 0007 = 000C (onlukta 12), E = 0, SC = 0: PC = 201 ile T0’a dönülür.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'À quel temps le PC est-il incrémenté pendant la recherche d’instruction ?',
        en: 'At which timing step is the PC incremented during the fetch?',
        tr: 'Komut getirme sırasında PC hangi zaman adımında artırılır?',
      },
      options: { fr: ['T0', 'T1', 'T2'], en: ['T0', 'T1', 'T2'], tr: ['T0', 'T1', 'T2'] },
      answerIndex: 1,
      explanation: {
        fr: 'En T1, on lit l’instruction (IR ← M[AR]) et en même temps PC ← PC + 1. En T0, on copie seulement le PC dans AR.',
        en: 'At T1, the instruction is read (IR ← M[AR]) and at the same time PC ← PC + 1. At T0, the PC is only copied into AR.',
        tr: 'T1’de komut okunur (IR ← M[AR]) ve aynı anda PC ← PC + 1 yapılır. T0’da PC yalnızca AR’ye kopyalanır.',
      },
    },
  },
  {
    id: 'arch-w08-programming',
    week: 8,
    title: {
      fr: 'Programmer l’ordinateur de base',
      en: 'Programming the basic computer',
      tr: 'Temel bilgisayarın programlanması',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le langage d’assemblage remplace les codes binaires par des mnémoniques (LDA, ADD…) et des étiquettes. L’assembleur le traduit en langage machine, en deux passes : la première calcule l’adresse de chaque étiquette, la seconde produit le code. Les pseudo-instructions guident l’assembleur sans devenir des instructions : ORG (adresse de départ), DEC et HEX (données), END (fin).',
          en: 'Assembly language replaces binary codes with mnemonics (LDA, ADD…) and labels. The assembler translates it into machine code in two passes: the first computes each label’s address, the second produces the code. Pseudo-instructions guide the assembler without becoming instructions: ORG (start address), DEC and HEX (data), END (end).',
          tr: 'Assembly dili ikilik kodların yerine anımsatıcılar (LDA, ADD…) ve etiketler kullanır. Assembler onu iki geçişte makine diline çevirir: birinci geçiş her etiketin adresini hesaplar, ikincisi kodu üretir. Sözde komutlar komut olmadan assembler’a yol gösterir: ORG (başlangıç adresi), DEC ve HEX (veri), END (son).',
        },
      },
      {
        type: 'code',
        code: {
          fr: '        ORG 100      / le programme commence à l’adresse 100 (hexa)\n        LDA A        / AC ← A\n        ADD B        / AC ← AC + B\n        STA C        / C ← AC\n        HLT\nA,      DEC 83\nB,      DEC -23\nC,      DEC 0        / contiendra 60\n        END',
          en: '        ORG 100      / the program starts at address 100 (hex)\n        LDA A        / AC ← A\n        ADD B        / AC ← AC + B\n        STA C        / C ← AC\n        HLT\nA,      DEC 83\nB,      DEC -23\nC,      DEC 0        / will hold 60\n        END',
          tr: '        ORG 100      / program 100 (onaltılık) adresinden başlar\n        LDA A        / AC ← A\n        ADD B        / AC ← AC + B\n        STA C        / C ← AC\n        HLT\nA,      DEC 83\nB,      DEC -23\nC,      DEC 0        / 60 değerini alacak\n        END',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Il n’y a pas d’instruction de soustraction : on calcule −B avec CMA (complémenter AC) puis INC (ajouter 1). Pour une boucle, ISZ incrémente un compteur négatif en mémoire et saute l’instruction suivante quand il atteint 0. BSA appelle un sous-programme, qui revient avec BUN I.',
          en: 'There is no subtract instruction: compute −B with CMA (complement AC) then INC (add 1). For a loop, ISZ increments a negative counter in memory and skips the next instruction when it reaches 0. BSA calls a subroutine, which returns with BUN I.',
          tr: 'Çıkarma komutu yoktur: −B, CMA (AC’yi tümle) ve ardından INC (1 ekle) ile hesaplanır. Döngü için ISZ bellekteki negatif bir sayacı artırır ve 0’a ulaşınca bir sonraki komutu atlar. BSA bir alt programı çağırır, alt program BUN I ile döner.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris un programme pour l’ordinateur de base qui calcule C = A − B, avec A = 83 et B = 23.',
          en: 'Write a basic computer program that computes C = A − B, with A = 83 and B = 23.',
          tr: 'A = 83 ve B = 23 için C = A − B hesaplayan bir temel bilgisayar programı yaz.',
        },
        solution: {
          fr: 'ORG 100 / LDA B / CMA / INC / ADD A / STA C / HLT / A, DEC 83 / B, DEC 23 / C, DEC 0 / END. LDA B charge 23, CMA puis INC donnent −23 en complément à 2, ADD A donne 83 − 23 = 60, STA C range le résultat.',
          en: 'ORG 100 / LDA B / CMA / INC / ADD A / STA C / HLT / A, DEC 83 / B, DEC 23 / C, DEC 0 / END. LDA B loads 23, CMA then INC give −23 in two’s complement, ADD A gives 83 − 23 = 60, STA C stores the result.',
          tr: 'ORG 100 / LDA B / CMA / INC / ADD A / STA C / HLT / A, DEC 83 / B, DEC 23 / C, DEC 0 / END. LDA B 23’ü yükler, CMA ve INC ikiye tümleyenle −23 verir, ADD A 83 − 23 = 60 verir, STA C sonucu saklar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Laquelle est une pseudo-instruction ?',
        en: 'Which one is a pseudo-instruction?',
        tr: 'Hangisi bir sözde komuttur?',
      },
      options: { fr: ['ADD', 'ORG', 'BUN'], en: ['ADD', 'ORG', 'BUN'], tr: ['ADD', 'ORG', 'BUN'] },
      answerIndex: 1,
      explanation: {
        fr: 'ORG indique seulement à l’assembleur où placer le code : elle ne produit aucune instruction machine. ADD et BUN sont de vraies instructions.',
        en: 'ORG only tells the assembler where to place the code: it produces no machine instruction. ADD and BUN are real instructions.',
        tr: 'ORG, assembler’a yalnızca kodun nereye yerleştirileceğini söyler: hiçbir makine komutu üretmez. ADD ve BUN gerçek komutlardır.',
      },
    },
  },
  {
    id: 'arch-w09-microprogrammed',
    week: 9,
    title: { fr: 'Contrôle microprogrammé', en: 'Microprogrammed control', tr: 'Mikroprogramlı kontrol' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’unité de contrôle peut être câblée (des portes logiques produisent les signaux : rapide mais difficile à modifier) ou microprogrammée : les signaux de contrôle sont rangés comme des mots, les micro-instructions, dans une mémoire de contrôle (souvent une ROM). Un microprogramme exécute chaque instruction machine.',
          en: 'The control unit can be hardwired (logic gates produce the signals: fast but hard to change) or microprogrammed: the control signals are stored as words, the microinstructions, in a control memory (often a ROM). A microprogram carries out each machine instruction.',
          tr: 'Kontrol birimi donanımsal (sinyalleri mantık kapıları üretir: hızlı ama değiştirmesi zor) veya mikroprogramlı olabilir: kontrol sinyalleri mikro komut denen kelimeler olarak bir kontrol belleğinde (çoğunlukla ROM) saklanır. Her makine komutunu bir mikroprogram yürütür.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Le registre d’adresse de contrôle (CAR) indique la micro-instruction suivante. Le séquenceur choisit cette adresse : incrémenter CAR, sauter (si une condition est vraie), utiliser une correspondance (mapping) depuis l’opcode pour trouver le microprogramme de l’instruction, ou appeler et revenir d’une sous-routine.',
          en: 'The control address register (CAR) points to the next microinstruction. The sequencer chooses that address: increment CAR, branch (when a condition is true), use a mapping from the opcode to find the instruction’s microprogram, or call and return from a subroutine.',
          tr: 'Kontrol adres yazmacı (CAR) bir sonraki mikro komutu gösterir. Sıralayıcı bu adresi seçer: CAR’ı artırmak, dallanmak (bir koşul doğruysa), komutun mikroprogramını bulmak için opcode’dan eşleme (mapping) kullanmak veya bir alt rutini çağırıp dönmek.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Micro-instruction de Mano (20 bits, mémoire de contrôle 128 × 20)\n| F1 (3) | F2 (3) | F3 (3) | CD (2) | BR (2) | AD (7) |\nF1-F3 : micro-opérations     CD : condition\nBR    : type de saut         AD : adresse de saut (2⁷ = 128 mots)',
          en: 'Mano’s microinstruction (20 bits, control memory 128 × 20)\n| F1 (3) | F2 (3) | F3 (3) | CD (2) | BR (2) | AD (7) |\nF1-F3: micro-operations     CD: condition\nBR   : branch type          AD: branch address (2⁷ = 128 words)',
          tr: 'Mano’nun mikro komutu (20 bit, kontrol belleği 128 × 20)\n| F1 (3) | F2 (3) | F3 (3) | CD (2) | BR (2) | AD (7) |\nF1-F3: mikro işlemler       CD: koşul\nBR   : dallanma tipi        AD: dallanma adresi (2⁷ = 128 kelime)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une mémoire de contrôle contient 256 micro-instructions de 24 bits. (1) Combien de bits faut-il pour le CAR ? (2) Quelle est sa taille en bits ? (3) Si chaque micro-instruction contient un champ adresse, combien de bits reste-t-il pour les autres champs ?',
          en: 'A control memory holds 256 microinstructions of 24 bits. (1) How many bits does the CAR need? (2) What is its size in bits? (3) If every microinstruction contains an address field, how many bits are left for the other fields?',
          tr: 'Bir kontrol belleği 24 bitlik 256 mikro komut içeriyor. (1) CAR için kaç bit gerekir? (2) Boyutu kaç bittir? (3) Her mikro komut bir adres alanı içeriyorsa diğer alanlar için kaç bit kalır?',
        },
        solution: {
          fr: '(1) 256 = 2⁸ : 8 bits. (2) 256 × 24 = 6144 bits (768 octets). (3) Le champ adresse doit pouvoir désigner n’importe quelle micro-instruction : 8 bits, donc il reste 24 − 8 = 16 bits pour les micro-opérations, la condition et le type de saut.',
          en: '(1) 256 = 2⁸: 8 bits. (2) 256 × 24 = 6144 bits (768 bytes). (3) The address field must point to any microinstruction: 8 bits, so 24 − 8 = 16 bits are left for the micro-operations, the condition and the branch type.',
          tr: '(1) 256 = 2⁸: 8 bit. (2) 256 × 24 = 6144 bit (768 bayt). (3) Adres alanı herhangi bir mikro komutu gösterebilmelidir: 8 bit, yani mikro işlemler, koşul ve dallanma tipi için 24 − 8 = 16 bit kalır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel type d’unité de contrôle est le plus facile à modifier ?',
        en: 'Which kind of control unit is easiest to modify?',
        tr: 'Hangi tür kontrol birimi en kolay değiştirilir?',
      },
      options: {
        fr: ['Câblée', 'Microprogrammée', 'Aucune différence'],
        en: ['Hardwired', 'Microprogrammed', 'No difference'],
        tr: ['Donanımsal', 'Mikroprogramlı', 'Fark yok'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Pour changer une unité microprogrammée, il suffit de changer le contenu de la mémoire de contrôle. Une unité câblée demande de refaire le circuit, mais elle est plus rapide.',
        en: 'Changing a microprogrammed unit only means changing the control memory’s content. A hardwired unit needs a new circuit, but it is faster.',
        tr: 'Mikroprogramlı bir birimi değiştirmek yalnızca kontrol belleğinin içeriğini değiştirmektir. Donanımsal birim yeni bir devre gerektirir ama daha hızlıdır.',
      },
    },
  },
  {
    id: 'arch-w10-cpu',
    week: 10,
    title: {
      fr: 'Unité centrale : formats et modes d’adressage',
      en: 'CPU: instruction formats and addressing modes',
      tr: 'Merkezi işlem birimi: komut formatları ve adresleme modları',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un processeur peut être organisé autour d’un accumulateur, de registres généraux ou d’une pile. Cela donne des instructions à 1, 2, 3 ou 0 adresse. Moins il y a d’adresses par instruction, plus les instructions sont courtes, mais plus il en faut.',
          en: 'A processor can be organized around an accumulator, general registers or a stack. This gives instructions with 1, 2, 3 or 0 addresses. Fewer addresses per instruction means shorter instructions, but more of them.',
          tr: 'Bir işlemci akümülatör, genel yazmaçlar veya yığın etrafında düzenlenebilir. Bu, 1, 2, 3 veya 0 adresli komutlar verir. Komut başına adres azaldıkça komutlar kısalır ama daha fazla komut gerekir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'X = (A + B) * (C + D)\n\n3 adresses : ADD R1, A, B    ADD R2, C, D    MUL X, R1, R2\n2 adresses : MOV R1, A   ADD R1, B   MOV R2, C   ADD R2, D\n             MUL R1, R2  MOV X, R1\n1 adresse  : LOAD A  ADD B  STORE T  LOAD C  ADD D  MUL T  STORE X\n0 adresse  : PUSH A  PUSH B  ADD  PUSH C  PUSH D  ADD  MUL  POP X\n             (pile, notation polonaise inverse : A B + C D + *)',
          en: 'X = (A + B) * (C + D)\n\n3 addresses: ADD R1, A, B    ADD R2, C, D    MUL X, R1, R2\n2 addresses: MOV R1, A   ADD R1, B   MOV R2, C   ADD R2, D\n             MUL R1, R2  MOV X, R1\n1 address  : LOAD A  ADD B  STORE T  LOAD C  ADD D  MUL T  STORE X\n0 address  : PUSH A  PUSH B  ADD  PUSH C  PUSH D  ADD  MUL  POP X\n             (stack, reverse Polish notation: A B + C D + *)',
          tr: 'X = (A + B) * (C + D)\n\n3 adresli : ADD R1, A, B    ADD R2, C, D    MUL X, R1, R2\n2 adresli : MOV R1, A   ADD R1, B   MOV R2, C   ADD R2, D\n            MUL R1, R2  MOV X, R1\n1 adresli : LOAD A  ADD B  STORE T  LOAD C  ADD D  MUL T  STORE X\n0 adresli : PUSH A  PUSH B  ADD  PUSH C  PUSH D  ADD  MUL  POP X\n            (yığın, ters Polonya gösterimi: A B + C D + *)',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Modes d’adressage', en: 'Addressing modes', tr: 'Adresleme modları' },
      },
      {
        type: 'text',
        text: {
          fr: 'Le mode d’adressage dit comment trouver l’adresse effective (EA) de l’opérande. Immédiat : l’opérande est dans l’instruction. Direct : EA = champ adresse. Indirect : EA = M[champ adresse]. Registre indirect : EA = contenu d’un registre. Relatif : EA = PC + champ adresse. Indexé : EA = XR + champ adresse. Auto-incrément : comme registre indirect, puis le registre augmente.',
          en: 'The addressing mode says how to find the operand’s effective address (EA). Immediate: the operand is in the instruction. Direct: EA = address field. Indirect: EA = M[address field]. Register indirect: EA = a register’s content. Relative: EA = PC + address field. Indexed: EA = XR + address field. Autoincrement: like register indirect, then the register grows.',
          tr: 'Adresleme modu, işlenenin etkin adresinin (EA) nasıl bulunacağını söyler. Anında (immediate): işlenen komutun içindedir. Doğrudan: EA = adres alanı. Dolaylı: EA = M[adres alanı]. Yazmaç dolaylı: EA = bir yazmacın içeriği. Göreli: EA = PC + adres alanı. İndisli: EA = XR + adres alanı. Otomatik artırma: yazmaç dolaylı gibi, sonra yazmaç artar.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une instruction de 2 mots est aux adresses 200-201 ; son champ adresse (en 201) vaut 500, donc l’instruction suivante est en 202. R1 = 400, XR = 100 et M[500] = 800. Donne l’adresse effective en mode direct, immédiat, indirect, relatif, indexé et registre indirect (R1).',
          en: 'A 2-word instruction is at addresses 200-201; its address field (at 201) is 500, so the next instruction is at 202. R1 = 400, XR = 100 and M[500] = 800. Give the effective address in direct, immediate, indirect, relative, indexed and register indirect (R1) mode.',
          tr: '2 kelimelik bir komut 200-201 adreslerinde; adres alanı (201’de) 500, yani bir sonraki komut 202’de. R1 = 400, XR = 100 ve M[500] = 800. Doğrudan, anında, dolaylı, göreli, indisli ve yazmaç dolaylı (R1) modlarda etkin adresi ver.',
        },
        solution: {
          fr: 'Direct : 500. Immédiat : l’opérande est dans l’instruction elle-même, en 201. Indirect : M[500] = 800. Relatif : PC + 500 = 202 + 500 = 702 (le PC pointe déjà sur l’instruction suivante). Indexé : XR + 500 = 100 + 500 = 600. Registre indirect : R1 = 400.',
          en: 'Direct: 500. Immediate: the operand is in the instruction itself, at 201. Indirect: M[500] = 800. Relative: PC + 500 = 202 + 500 = 702 (the PC already points to the next instruction). Indexed: XR + 500 = 100 + 500 = 600. Register indirect: R1 = 400.',
          tr: 'Doğrudan: 500. Anında: işlenen komutun kendisindedir, 201’de. Dolaylı: M[500] = 800. Göreli: PC + 500 = 202 + 500 = 702 (PC zaten bir sonraki komutu gösterir). İndisli: XR + 500 = 100 + 500 = 600. Yazmaç dolaylı: R1 = 400.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans quel mode d’adressage l’adresse effective vaut-elle PC + champ adresse ?',
        en: 'In which addressing mode is the effective address PC + address field?',
        tr: 'Hangi adresleme modunda etkin adres PC + adres alanıdır?',
      },
      options: { fr: ['Indexé', 'Relatif', 'Indirect'], en: ['Indexed', 'Relative', 'Indirect'], tr: ['İndisli', 'Göreli', 'Dolaylı'] },
      answerIndex: 1,
      explanation: {
        fr: 'Le mode relatif ajoute le champ adresse au PC : il est très utilisé pour les sauts. Le mode indexé ajoute le registre d’index XR.',
        en: 'Relative mode adds the address field to the PC: it is widely used for branches. Indexed mode adds the index register XR.',
        tr: 'Göreli mod adres alanını PC’ye ekler: dallanmalarda çok kullanılır. İndisli mod ise indis yazmacı XR’yi ekler.',
      },
    },
  },
  {
    id: 'arch-w11-pipeline',
    week: 11,
    title: {
      fr: 'RISC, CISC et pipeline',
      en: 'RISC, CISC and pipelining',
      tr: 'RISC, CISC ve ardışık düzen (pipeline)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'CISC (Complex Instruction Set Computer, ex. x86) : beaucoup d’instructions complexes de tailles variables, beaucoup de modes d’adressage, souvent microprogrammé. RISC (Reduced, ex. ARM, RISC-V) : peu d’instructions simples de taille fixe, accès mémoire seulement par LOAD et STORE, beaucoup de registres, contrôle câblé, pensé pour le pipeline.',
          en: 'CISC (Complex Instruction Set Computer, e.g. x86): many complex instructions of varying size, many addressing modes, often microprogrammed. RISC (Reduced, e.g. ARM, RISC-V): few simple fixed-size instructions, memory accessed only through LOAD and STORE, many registers, hardwired control, designed for pipelining.',
          tr: 'CISC (Karmaşık Komut Kümeli Bilgisayar, örn. x86): değişken boyutlu çok sayıda karmaşık komut, çok sayıda adresleme modu, çoğu zaman mikroprogramlı. RISC (İndirgenmiş, örn. ARM, RISC-V): sabit boyutlu az sayıda basit komut, belleğe yalnızca LOAD ve STORE ile erişim, çok sayıda yazmaç, donanımsal kontrol, pipeline için tasarlanmış.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Le pipeline', en: 'Pipelining', tr: 'Ardışık düzen' },
      },
      {
        type: 'text',
        text: {
          fr: 'Un pipeline découpe le travail en k étages qui travaillent en même temps sur des tâches différentes, comme une chaîne de montage. Avec un cycle tp, n tâches prennent (k + n − 1) × tp au lieu de n × k × tp sans pipeline. L’accélération tend vers k quand n est grand.',
          en: 'A pipeline splits the work into k stages working at the same time on different tasks, like an assembly line. With a clock cycle tp, n tasks take (k + n − 1) × tp instead of n × k × tp without a pipeline. The speedup tends to k when n is large.',
          tr: 'Pipeline, işi bir montaj hattı gibi aynı anda farklı görevler üzerinde çalışan k aşamaya böler. tp saat çevrimiyle n görev, pipeline olmadan n × k × tp yerine (k + n − 1) × tp sürer. n büyüdükçe hızlanma k’ya yaklaşır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Conflits (hazards) qui cassent le rythme :\nstructurel : deux étages veulent la même ressource (ex. la mémoire)\nde données : une instruction a besoin du résultat de la précédente\n             → bulles, ou transmission directe (forwarding)\nde contrôle : un saut change le PC → prédiction de branchement\n\nTraitement vectoriel (SIMD) : une instruction agit sur tout un vecteur',
          en: 'Hazards that break the rhythm:\nstructural: two stages want the same resource (e.g. memory)\ndata      : an instruction needs the previous one’s result\n            → bubbles, or forwarding\ncontrol   : a branch changes the PC → branch prediction\n\nVector processing (SIMD): one instruction works on a whole vector',
          tr: 'Ritmi bozan çatışmalar (hazard):\nyapısal : iki aşama aynı kaynağı ister (örn. bellek)\nveri    : bir komut öncekinin sonucuna ihtiyaç duyar\n          → kabarcıklar veya doğrudan iletim (forwarding)\nkontrol : bir dallanma PC’yi değiştirir → dallanma tahmini\n\nVektör işleme (SIMD): tek komut bütün bir vektör üzerinde çalışır',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un pipeline à 4 étages a un cycle de 20 ns. Il traite 100 tâches. (1) Combien de temps avec le pipeline ? (2) Sans pipeline (une tâche = 4 × 20 ns) ? (3) Quelle est l’accélération ?',
          en: 'A 4-stage pipeline has a 20 ns cycle. It processes 100 tasks. (1) How long with the pipeline? (2) Without a pipeline (one task = 4 × 20 ns)? (3) What is the speedup?',
          tr: '4 aşamalı bir pipeline’ın çevrimi 20 ns. 100 görev işliyor. (1) Pipeline ile ne kadar sürer? (2) Pipeline olmadan (bir görev = 4 × 20 ns)? (3) Hızlanma nedir?',
        },
        solution: {
          fr: '(1) (k + n − 1) × tp = (4 + 100 − 1) × 20 = 103 × 20 = 2060 ns. (2) n × k × tp = 100 × 80 = 8000 ns. (3) S = 8000 / 2060 ≈ 3,88, proche du maximum théorique k = 4.',
          en: '(1) (k + n − 1) × tp = (4 + 100 − 1) × 20 = 103 × 20 = 2060 ns. (2) n × k × tp = 100 × 80 = 8000 ns. (3) S = 8000 / 2060 ≈ 3.88, close to the theoretical maximum k = 4.',
          tr: '(1) (k + n − 1) × tp = (4 + 100 − 1) × 20 = 103 × 20 = 2060 ns. (2) n × k × tp = 100 × 80 = 8000 ns. (3) S = 8000 / 2060 ≈ 3,88; teorik en yüksek değer k = 4’e yakın.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est l’accélération maximale théorique d’un pipeline à k étages ?',
        en: 'What is the maximum theoretical speedup of a k-stage pipeline?',
        tr: 'k aşamalı bir pipeline’ın teorik en yüksek hızlanması nedir?',
      },
      options: { fr: ['k', '2k', 'k²'], en: ['k', '2k', 'k²'], tr: ['k', '2k', 'k²'] },
      answerIndex: 0,
      explanation: {
        fr: 'Quand n devient très grand, n × k × tp / ((k + n − 1) × tp) tend vers k. Dans la réalité, les conflits la font baisser.',
        en: 'As n grows very large, n × k × tp / ((k + n − 1) × tp) tends to k. In practice, hazards lower it.',
        tr: 'n çok büyüdükçe n × k × tp / ((k + n − 1) × tp) oranı k’ya yaklaşır. Gerçekte çatışmalar onu düşürür.',
      },
    },
  },
  {
    id: 'arch-w12-arithmetic',
    week: 12,
    title: {
      fr: 'Arithmétique de l’ordinateur : multiplication de Booth',
      en: 'Computer arithmetic: Booth multiplication',
      tr: 'Bilgisayar aritmetiği: Booth çarpması',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En complément à 2, l’addition et la soustraction utilisent le même additionneur : A − B = A + B′ + 1. Il y a débordement quand les deux retenues entrant et sortant du bit de signe sont différentes. La multiplication se fait par additions et décalages ; l’algorithme de Booth traite directement les nombres signés.',
          en: 'In two’s complement, addition and subtraction use the same adder: A − B = A + B′ + 1. Overflow happens when the carries into and out of the sign bit differ. Multiplication is done with additions and shifts; Booth’s algorithm handles signed numbers directly.',
          tr: 'İkiye tümleyende toplama ve çıkarma aynı toplayıcıyı kullanır: A − B = A + B′ + 1. İşaret bitine giren ve çıkan eldeler farklıysa taşma olur. Çarpma toplama ve kaydırmalarla yapılır; Booth algoritması işaretli sayıları doğrudan işler.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Algorithme de Booth (multiplicande M, multiplicateur Q, n bits)\nAC = 0, Q₋₁ = 0, répéter n fois :\n  Q₀ Q₋₁ = 10 → AC ← AC − M\n  Q₀ Q₋₁ = 01 → AC ← AC + M\n  Q₀ Q₋₁ = 00 ou 11 → rien\n  puis décalage arithmétique à droite de (AC, Q, Q₋₁)\nRésultat sur 2n bits : AC Q',
          en: 'Booth’s algorithm (multiplicand M, multiplier Q, n bits)\nAC = 0, Q₋₁ = 0, repeat n times:\n  Q₀ Q₋₁ = 10 → AC ← AC − M\n  Q₀ Q₋₁ = 01 → AC ← AC + M\n  Q₀ Q₋₁ = 00 or 11 → nothing\n  then arithmetic shift right of (AC, Q, Q₋₁)\nResult on 2n bits: AC Q',
          tr: 'Booth algoritması (çarpılan M, çarpan Q, n bit)\nAC = 0, Q₋₁ = 0, n kez tekrarla:\n  Q₀ Q₋₁ = 10 → AC ← AC − M\n  Q₀ Q₋₁ = 01 → AC ← AC + M\n  Q₀ Q₋₁ = 00 veya 11 → hiçbir şey\n  sonra (AC, Q, Q₋₁) aritmetik sağa kaydırma\nSonuç 2n bit: AC Q',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'En virgule flottante, l’addition se fait en trois temps : aligner les exposants (décaler la mantisse du plus petit nombre), additionner les mantisses, puis normaliser le résultat.',
          en: 'In floating point, addition takes three steps: align the exponents (shift the smaller number’s mantissa), add the mantissas, then normalize the result.',
          tr: 'Kayan noktada toplama üç adımda yapılır: üsleri hizala (küçük sayının mantisini kaydır), mantisleri topla, sonra sonucu normalleştir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Multiplie 7 × (−3) avec l’algorithme de Booth sur 4 bits (M = 0111, Q = 1101).',
          en: 'Multiply 7 × (−3) with Booth’s algorithm on 4 bits (M = 0111, Q = 1101).',
          tr: '7 × (−3) çarpımını 4 bit Booth algoritmasıyla yap (M = 0111, Q = 1101).',
        },
        solution: {
          fr: '−M = 1001. Départ : AC = 0000, Q = 1101, Q₋₁ = 0. Tour 1 : Q₀Q₋₁ = 10 → AC = 1001 ; décalage → AC = 1100, Q = 1110, Q₋₁ = 1. Tour 2 : 01 → AC = 1100 + 0111 = 0011 (retenue ignorée) ; décalage → 0001, 1111, 0. Tour 3 : 10 → AC = 0001 + 1001 = 1010 ; décalage → 1101, 0111, 1. Tour 4 : 11 → rien ; décalage → 1110, 1011, 1. Résultat AC Q = 11101011 = −21. On retrouve bien 7 × (−3) = −21.',
          en: '−M = 1001. Start: AC = 0000, Q = 1101, Q₋₁ = 0. Round 1: Q₀Q₋₁ = 10 → AC = 1001; shift → AC = 1100, Q = 1110, Q₋₁ = 1. Round 2: 01 → AC = 1100 + 0111 = 0011 (carry ignored); shift → 0001, 1111, 0. Round 3: 10 → AC = 0001 + 1001 = 1010; shift → 1101, 0111, 1. Round 4: 11 → nothing; shift → 1110, 1011, 1. Result AC Q = 11101011 = −21, which is indeed 7 × (−3).',
          tr: '−M = 1001. Başlangıç: AC = 0000, Q = 1101, Q₋₁ = 0. 1. tur: Q₀Q₋₁ = 10 → AC = 1001; kaydırma → AC = 1100, Q = 1110, Q₋₁ = 1. 2. tur: 01 → AC = 1100 + 0111 = 0011 (elde yok sayılır); kaydırma → 0001, 1111, 0. 3. tur: 10 → AC = 0001 + 1001 = 1010; kaydırma → 1101, 0111, 1. 4. tur: 11 → hiçbir şey; kaydırma → 1110, 1011, 1. Sonuç AC Q = 11101011 = −21; gerçekten 7 × (−3).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans l’algorithme de Booth, que fait-on quand Q₀ Q₋₁ = 10 ?',
        en: 'In Booth’s algorithm, what is done when Q₀ Q₋₁ = 10?',
        tr: 'Booth algoritmasında Q₀ Q₋₁ = 10 olduğunda ne yapılır?',
      },
      options: {
        fr: ['AC ← AC + M', 'AC ← AC − M', 'On ne fait rien'],
        en: ['AC ← AC + M', 'AC ← AC − M', 'Nothing'],
        tr: ['AC ← AC + M', 'AC ← AC − M', 'Hiçbir şey yapılmaz'],
      },
      answerIndex: 1,
      explanation: {
        fr: '10 marque le début d’un bloc de 1 dans le multiplicateur : on soustrait M. 01 marque la fin du bloc : on ajoute M. Ensuite, on décale toujours.',
        en: '10 marks the start of a block of 1s in the multiplier: subtract M. 01 marks the end of the block: add M. Then always shift.',
        tr: '10, çarpandaki bir 1’ler bloğunun başlangıcını gösterir: M çıkarılır. 01 bloğun sonunu gösterir: M eklenir. Ardından her zaman kaydırılır.',
      },
    },
  },
  {
    id: 'arch-w13-io',
    week: 13,
    title: {
      fr: 'Organisation des entrées-sorties',
      en: 'Input-output organization',
      tr: 'Giriş-çıkış organizasyonu',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Les périphériques sont reliés au processeur par une interface, qui adapte les vitesses, les formats et les signaux. Comme le périphérique et le processeur n’ont pas la même horloge, le transfert est asynchrone : il utilise un signal d’échantillonnage (strobe) ou mieux une poignée de main (handshaking), où chaque côté confirme ce qu’il a reçu.',
          en: 'Peripherals connect to the processor through an interface, which adapts speeds, formats and signals. As the device and the processor do not share a clock, transfer is asynchronous: it uses a strobe signal or, better, handshaking, where each side confirms what it received.',
          tr: 'Çevre birimleri işlemciye hızları, formatları ve sinyalleri uyarlayan bir arayüz üzerinden bağlanır. Aygıt ve işlemci aynı saati paylaşmadığı için aktarım eşzamansızdır: bir strobe sinyali ya da daha iyisi, her tarafın aldığını onayladığı el sıkışma (handshaking) kullanılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Trois façons de transférer les données\nE/S programmées  : le CPU teste sans arrêt un indicateur (polling)\n                   → simple, mais le CPU perd son temps à attendre\nPar interruption : le périphérique prévient le CPU quand il est prêt\n                   → le CPU travaille entre-temps\nDMA              : un contrôleur DMA copie un bloc entre périphérique\n                   et mémoire ; le CPU n’intervient qu’au début et à la fin\n                   (vol de cycles ou transfert en rafale)',
          en: 'Three ways to transfer data\nProgrammed I/O     : the CPU keeps checking a flag (polling)\n                     → simple, but the CPU wastes time waiting\nInterrupt-driven   : the device tells the CPU when it is ready\n                     → the CPU works in the meantime\nDMA                : a DMA controller copies a block between device\n                     and memory; the CPU only acts at the start and end\n                     (cycle stealing or burst transfer)',
          tr: 'Veri aktarmanın üç yolu\nProgramlı G/Ç      : CPU sürekli bir bayrağı kontrol eder (yoklama)\n                     → basit ama CPU beklerken zaman kaybeder\nKesmeli G/Ç        : aygıt hazır olunca CPU’ya haber verir\n                     → CPU bu arada çalışır\nDMA                : bir DMA denetleyicisi aygıt ile bellek arasında\n                     bir bloğu kopyalar; CPU yalnızca başta ve sonda\n                     devreye girer (çevrim çalma veya toplu aktarım)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Quand plusieurs périphériques demandent une interruption en même temps, une priorité les départage : par chaînage (daisy chain, le plus proche du CPU passe d’abord) ou par un circuit de priorité parallèle.',
          en: 'When several devices request an interrupt at the same time, a priority scheme chooses: a daisy chain (the device closest to the CPU goes first) or a parallel priority circuit.',
          tr: 'Birden fazla aygıt aynı anda kesme istediğinde bir öncelik düzeni seçim yapar: papatya zinciri (daisy chain, CPU’ya en yakın aygıt önce) veya paralel öncelik devresi.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quelle méthode de transfert choisir ? (1) Copier un fichier de 2 Go du disque vers la mémoire. (2) Recevoir les touches d’un clavier. (3) Lire un capteur dans un petit microcontrôleur qui n’a rien d’autre à faire.',
          en: 'Which transfer method should be used? (1) Copying a 2 GB file from disk to memory. (2) Receiving keyboard keystrokes. (3) Reading a sensor in a small microcontroller with nothing else to do.',
          tr: 'Hangi aktarım yöntemi seçilmeli? (1) 2 GB’lık bir dosyayı diskten belleğe kopyalamak. (2) Klavye tuşlarını almak. (3) Başka işi olmayan küçük bir mikrodenetleyicide bir sensörü okumak.',
        },
        solution: {
          fr: '(1) DMA : un gros bloc à copier, le CPU ne doit pas traiter chaque octet. (2) Interruption : les touches arrivent rarement et à des moments imprévisibles, le CPU fait autre chose entre-temps. (3) E/S programmées (polling) : c’est le plus simple, et le processeur n’a rien d’autre à faire pendant qu’il attend.',
          en: '(1) DMA: a large block to copy, the CPU should not handle every byte. (2) Interrupt: keystrokes arrive rarely and at unpredictable times, the CPU does other work meanwhile. (3) Programmed I/O (polling): it is the simplest, and the processor has nothing else to do while it waits.',
          tr: '(1) DMA: kopyalanacak büyük bir blok var, CPU her baytla uğraşmamalı. (2) Kesme: tuşlar seyrek ve öngörülemeyen anlarda gelir, CPU bu arada başka iş yapar. (3) Programlı G/Ç (yoklama): en basitidir ve işlemcinin beklerken yapacak başka işi yoktur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Avec quelle méthode le processeur intervient-il le moins pendant le transfert d’un gros bloc ?',
        en: 'With which method is the processor least involved when transferring a large block?',
        tr: 'Büyük bir blok aktarılırken işlemci hangi yöntemde en az devreye girer?',
      },
      options: {
        fr: ['E/S programmées', 'Interruption', 'DMA'],
        en: ['Programmed I/O', 'Interrupt-driven', 'DMA'],
        tr: ['Programlı G/Ç', 'Kesmeli G/Ç', 'DMA'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'Avec le DMA, le contrôleur gère tout le bloc et ne prévient le CPU qu’à la fin. Avec une interruption par octet ou par mot, le CPU serait dérangé à chaque fois.',
        en: 'With DMA, the controller handles the whole block and only notifies the CPU at the end. With one interrupt per byte or word, the CPU would be disturbed every time.',
        tr: 'DMA’da denetleyici bloğun tamamını yönetir ve CPU’ya yalnızca sonda haber verir. Her bayt veya kelime için bir kesmede CPU her seferinde rahatsız edilirdi.',
      },
    },
  },
  {
    id: 'arch-w14-memory',
    week: 14,
    title: {
      fr: 'Organisation de la mémoire et révision du final',
      en: 'Memory organization and final review',
      tr: 'Bellek organizasyonu ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La mémoire cache marche grâce à la localité : un programme réutilise les mêmes données (localité temporelle) et lit des adresses voisines (localité spatiale). Le taux de succès (hit ratio) est la part des accès trouvés dans le cache.',
          en: 'Cache memory works thanks to locality: a program reuses the same data (temporal locality) and reads nearby addresses (spatial locality). The hit ratio is the share of accesses found in the cache.',
          tr: 'Önbellek yerellik sayesinde çalışır: bir program aynı verileri yeniden kullanır (zamansal yerellik) ve yakın adresleri okur (uzamsal yerellik). İsabet oranı (hit ratio), önbellekte bulunan erişimlerin payıdır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Correspondance (mapping) du cache\nDirecte         : chaque bloc va dans UNE seule ligne\n                  adresse = | tag | index | offset |\nAssociative     : un bloc peut aller dans n’importe quelle ligne\nAssociative par ensembles : un bloc va dans un ensemble de k lignes\n\nMémoire virtuelle : pages + table des pages ;\ndéfaut de page → la page est chargée depuis le disque (remplacement FIFO, LRU)',
          en: 'Cache mapping\nDirect          : each block goes into ONE single line\n                  address = | tag | index | offset |\nAssociative     : a block can go into any line\nSet-associative : a block goes into one set of k lines\n\nVirtual memory: pages + page table;\npage fault → the page is loaded from disk (FIFO, LRU replacement)',
          tr: 'Önbellek eşleme\nDoğrudan        : her blok YALNIZCA bir satıra gider\n                  adres = | etiket | indis | ofset |\nİlişkisel       : bir blok herhangi bir satıra gidebilir\nKüme ilişkili   : bir blok k satırlık bir kümeye gider\n\nSanal bellek: sayfalar + sayfa tablosu;\nsayfa hatası → sayfa diskten yüklenir (FIFO, LRU değiştirme)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Les multiprocesseurs partagent la mémoire par un bus commun, un crossbar ou un réseau d’interconnexion ; chaque processeur ayant son cache, il faut garder les copies cohérentes (cohérence de cache).',
          en: 'Multiprocessors share memory through a common bus, a crossbar or an interconnection network; as every processor has its own cache, the copies must be kept consistent (cache coherence).',
          tr: 'Çok işlemcili sistemler belleği ortak bir yol, çapraz anahtar (crossbar) veya ara bağlantı ağı üzerinden paylaşır; her işlemcinin kendi önbelleği olduğundan kopyalar tutarlı tutulmalıdır (önbellek tutarlılığı).',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Assembleur de l’ordinateur de base (ORG, DEC, CMA, INC, ISZ, BSA)\n✔ Contrôle câblé / microprogrammé, CAR, taille de la mémoire de contrôle\n✔ Instructions à 0, 1, 2, 3 adresses ; modes d’adressage (EA)\n✔ RISC / CISC, temps et accélération d’un pipeline, conflits\n✔ Algorithme de Booth, addition en virgule flottante\n✔ E/S programmées, interruption, DMA, priorités\n✔ Cache (tag / index / offset), mémoire virtuelle, multiprocesseurs',
          en: '✔ Basic computer assembly (ORG, DEC, CMA, INC, ISZ, BSA)\n✔ Hardwired / microprogrammed control, CAR, control memory size\n✔ 0, 1, 2, 3 address instructions; addressing modes (EA)\n✔ RISC / CISC, pipeline time and speedup, hazards\n✔ Booth’s algorithm, floating-point addition\n✔ Programmed I/O, interrupts, DMA, priorities\n✔ Cache (tag / index / offset), virtual memory, multiprocessors',
          tr: '✔ Temel bilgisayar assembly’si (ORG, DEC, CMA, INC, ISZ, BSA)\n✔ Donanımsal / mikroprogramlı kontrol, CAR, kontrol belleği boyutu\n✔ 0, 1, 2, 3 adresli komutlar; adresleme modları (EA)\n✔ RISC / CISC, pipeline süresi ve hızlanması, çatışmalar\n✔ Booth algoritması, kayan nokta toplama\n✔ Programlı G/Ç, kesmeler, DMA, öncelikler\n✔ Önbellek (etiket / indis / ofset), sanal bellek, çok işlemcililik',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Adresses de 16 bits (une adresse par octet), cache à correspondance directe de 4 Ko, blocs de 16 octets. (1) Combien de bits pour l’offset, l’index et le tag ? (2) Découpe l’adresse 3A7C₁₆.',
          en: '16-bit addresses (one address per byte), a 4 KB direct-mapped cache, 16-byte blocks. (1) How many bits for the offset, index and tag? (2) Split the address 3A7C₁₆.',
          tr: '16 bitlik adresler (her bayta bir adres), 4 KB doğrudan eşlemeli önbellek, 16 baytlık bloklar. (1) Ofset, indis ve etiket için kaç bit? (2) 3A7C₁₆ adresini böl.',
        },
        solution: {
          fr: '(1) Bloc de 16 = 2⁴ octets : offset de 4 bits. Nombre de lignes = 4096 / 16 = 256 = 2⁸ : index de 8 bits. Tag = 16 − 8 − 4 = 4 bits. (2) 3A7C = 0011 | 1010 0111 | 1100 : tag = 0011 (3), index = 10100111 (A7, soit la ligne 167), offset = 1100 (octet 12 du bloc).',
          en: '(1) 16 = 2⁴-byte block: 4-bit offset. Number of lines = 4096 / 16 = 256 = 2⁸: 8-bit index. Tag = 16 − 8 − 4 = 4 bits. (2) 3A7C = 0011 | 1010 0111 | 1100: tag = 0011 (3), index = 10100111 (A7, line 167), offset = 1100 (byte 12 of the block).',
          tr: '(1) 16 = 2⁴ baytlık blok: 4 bitlik ofset. Satır sayısı = 4096 / 16 = 256 = 2⁸: 8 bitlik indis. Etiket = 16 − 8 − 4 = 4 bit. (2) 3A7C = 0011 | 1010 0111 | 1100: etiket = 0011 (3), indis = 10100111 (A7, yani 167. satır), ofset = 1100 (bloğun 12. baytı).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans un cache à correspondance directe, où peut aller un bloc de mémoire ?',
        en: 'In a direct-mapped cache, where can a memory block go?',
        tr: 'Doğrudan eşlemeli bir önbellekte bir bellek bloğu nereye gidebilir?',
      },
      options: {
        fr: ['Dans n’importe quelle ligne', 'Dans une seule ligne, donnée par l’index', 'Dans un ensemble de k lignes'],
        en: ['Into any line', 'Into a single line, given by the index', 'Into a set of k lines'],
        tr: ['Herhangi bir satıra', 'İndisin belirlediği tek bir satıra', 'k satırlık bir kümeye'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'C’est la définition de la correspondance directe : l’index de l’adresse impose la ligne. N’importe quelle ligne, c’est l’associatif ; un ensemble de k lignes, l’associatif par ensembles.',
        en: 'That is the definition of direct mapping: the address index fixes the line. Any line is fully associative; a set of k lines is set-associative.',
        tr: 'Doğrudan eşlemenin tanımı budur: adresin indisi satırı belirler. Herhangi bir satır tam ilişkisel; k satırlık küme ise küme ilişkilidir.',
      },
    },
  },
];
