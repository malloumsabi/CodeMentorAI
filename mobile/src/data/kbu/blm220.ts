/**
 * BLM220 Ayrık İşlemsel Yapılar (Discrete Mathematics), 14 weeks in the spirit of Rosen: logic, proofs,
 * sets, functions, counting before the midterm; recurrences, number theory, relations, graphs, trees and
 * discrete probability before the final. Every numeric answer was checked with Python.
 * Weeks 1, 4 and 11 keep the ids of the former 3-lesson course.
 */

import type { LessonSource } from '@/data/lessons';

export const blm220Lessons: LessonSource[] = [
  {
    id: 'discrete-logic',
    week: 1,
    title: { fr: 'Logique propositionnelle', en: 'Propositional logic', tr: 'Önermeler mantığı' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une proposition est une phrase vraie ou fausse (« 7 est premier »). On les combine avec des connecteurs : non (¬), et (∧), ou (∨), implication (→), équivalence (↔). Une tautologie est toujours vraie, une contradiction toujours fausse. Deux formules sont équivalentes si elles ont la même table de vérité.',
          en: 'A proposition is a sentence that is true or false (“7 is prime”). They are combined with connectives: not (¬), and (∧), or (∨), implication (→), biconditional (↔). A tautology is always true, a contradiction always false. Two formulas are equivalent if they have the same truth table.',
          tr: 'Önerme doğru ya da yanlış olan bir cümledir (“7 asaldır”). Bağlaçlarla birleştirilir: değil (¬), ve (∧), veya (∨), koşullu (→), çift koşullu (↔). Totoloji her zaman doğru, çelişki her zaman yanlıştır. Doğruluk tabloları aynı olan iki formül denktir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'p q | p→q  p↔q\nV V |  V    V\nV F |  F    F      p→q n’est faux que si p est vrai et q faux\nF V |  V    F\nF F |  V    V\n\np → q  ≡  ¬p ∨ q\nContraposée :  p → q  ≡  ¬q → ¬p     (même valeur)\nRéciproque  :  q → p                  (pas équivalente !)\nDe Morgan   :  ¬(p ∧ q) ≡ ¬p ∨ ¬q     ¬(p ∨ q) ≡ ¬p ∧ ¬q',
          en: 'p q | p→q  p↔q\nT T |  T    T\nT F |  F    F      p→q is false only when p is true and q false\nF T |  T    F\nF F |  T    T\n\np → q  ≡  ¬p ∨ q\nContrapositive: p → q  ≡  ¬q → ¬p     (same value)\nConverse:       q → p                  (not equivalent!)\nDe Morgan:      ¬(p ∧ q) ≡ ¬p ∨ ¬q     ¬(p ∨ q) ≡ ¬p ∧ ¬q',
          tr: 'p q | p→q  p↔q\nD D |  D    D\nD Y |  Y    Y      p→q yalnızca p doğru ve q yanlışken yanlıştır\nY D |  D    Y\nY Y |  D    D\n\np → q  ≡  ¬p ∨ q\nKarşıt ters:  p → q  ≡  ¬q → ¬p     (aynı değer)\nKarşıt:       q → p                  (denk değil!)\nDe Morgan:    ¬(p ∧ q) ≡ ¬p ∨ ¬q     ¬(p ∨ q) ≡ ¬p ∧ ¬q',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Montre avec une table de vérité que (p ∧ (p → q)) → q est une tautologie. Comment s’appelle cette règle de raisonnement ?',
          en: 'Show with a truth table that (p ∧ (p → q)) → q is a tautology. What is this rule of inference called?',
          tr: '(p ∧ (p → q)) → q’nun bir totoloji olduğunu doğruluk tablosuyla göster. Bu çıkarım kuralının adı nedir?',
        },
        solution: {
          fr: 'VV : p→q = V, p ∧ (p→q) = V, puis V → V = V. VF : p→q = F, la conjonction vaut F, et F → F = V. FV et FF : p = F, la conjonction vaut F, et F → … = V. Les 4 lignes sont vraies : c’est une tautologie, le modus ponens (« p, et p implique q, donc q »).',
          en: 'TT: p→q = T, p ∧ (p→q) = T, then T → T = T. TF: p→q = F, the conjunction is F, and F → F = T. FT and FF: p = F, the conjunction is F, and F → … = T. All 4 rows are true: it is a tautology, modus ponens (“p, and p implies q, so q”).',
          tr: 'DD: p→q = D, p ∧ (p→q) = D, sonra D → D = D. DY: p→q = Y, bağlaç Y olur ve Y → Y = D. YD ve YY: p = Y, bağlaç Y olur ve Y → … = D. 4 satırın hepsi doğru: bu bir totolojidir, modus ponens (“p, ve p ise q, o halde q”).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle formule est équivalente à p → q ?',
        en: 'Which formula is equivalent to p → q?',
        tr: 'Hangi formül p → q’ya denktir?',
      },
      options: { fr: ['q → p', '¬q → ¬p', '¬p → ¬q'], en: ['q → p', '¬q → ¬p', '¬p → ¬q'], tr: ['q → p', '¬q → ¬p', '¬p → ¬q'] },
      answerIndex: 1,
      explanation: {
        fr: 'La contraposée ¬q → ¬p a toujours la même valeur que p → q. La réciproque q → p et l’inverse ¬p → ¬q ne lui sont pas équivalentes.',
        en: 'The contrapositive ¬q → ¬p always has the same value as p → q. The converse q → p and the inverse ¬p → ¬q are not equivalent to it.',
        tr: 'Karşıt ters ¬q → ¬p her zaman p → q ile aynı değeri alır. Karşıt q → p ve ters ¬p → ¬q ona denk değildir.',
      },
    },
  },
  {
    id: 'discrete-w02-predicates',
    week: 2,
    title: { fr: 'Prédicats et quantificateurs', en: 'Predicates and quantifiers', tr: 'Yüklemler ve niceleyiciler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un prédicat P(x) devient une proposition quand on fixe x. Le quantificateur universel ∀x P(x) signifie « pour tout x » ; l’existentiel ∃x P(x) signifie « il existe au moins un x ». Pour nier, on échange les quantificateurs et on nie la propriété : ¬∀x P(x) ≡ ∃x ¬P(x). L’ordre des quantificateurs compte.',
          en: 'A predicate P(x) becomes a proposition once x is fixed. The universal quantifier ∀x P(x) means “for every x”; the existential ∃x P(x) means “there is at least one x”. To negate, swap the quantifiers and negate the property: ¬∀x P(x) ≡ ∃x ¬P(x). The order of quantifiers matters.',
          tr: 'P(x) yüklemi x sabitlenince bir önerme olur. Evrensel niceleyici ∀x P(x) “her x için”, varlıksal ∃x P(x) “en az bir x vardır” demektir. Değillemek için niceleyiciler değiştirilir ve özellik değillenir: ¬∀x P(x) ≡ ∃x ¬P(x). Niceleyicilerin sırası önemlidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Domaine : les entiers ℤ\n∀x ∃y (x + y = 0)     VRAI : pour chaque x, on prend y = −x\n∃y ∀x (x + y = 0)     FAUX : aucun y unique ne marche pour tous les x\n\nNégations\n¬∀x P(x)  ≡  ∃x ¬P(x)\n¬∃x P(x)  ≡  ∀x ¬P(x)\n¬∀x (P(x) → Q(x))  ≡  ∃x (P(x) ∧ ¬Q(x))\n\nContre-exemple : un seul x suffit à réfuter un ∀',
          en: 'Domain: the integers ℤ\n∀x ∃y (x + y = 0)     TRUE: for each x, take y = −x\n∃y ∀x (x + y = 0)     FALSE: no single y works for every x\n\nNegations\n¬∀x P(x)  ≡  ∃x ¬P(x)\n¬∃x P(x)  ≡  ∀x ¬P(x)\n¬∀x (P(x) → Q(x))  ≡  ∃x (P(x) ∧ ¬Q(x))\n\nCounterexample: a single x is enough to refute a ∀',
          tr: 'Tanım kümesi: tam sayılar ℤ\n∀x ∃y (x + y = 0)     DOĞRU: her x için y = −x alınır\n∃y ∀x (x + y = 0)     YANLIŞ: hiçbir tek y tüm x’ler için işe yaramaz\n\nDeğillemeler\n¬∀x P(x)  ≡  ∃x ¬P(x)\n¬∃x P(x)  ≡  ∀x ¬P(x)\n¬∀x (P(x) → Q(x))  ≡  ∃x (P(x) ∧ ¬Q(x))\n\nKarşı örnek: bir ∀’yı çürütmek için tek bir x yeter',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Écris la négation de « Tous les étudiants de KBU ont réussi un cours de mathématiques » sans commencer par « il est faux que ». (2) Sur les entiers naturels ℕ, ∀x ∃y (y > x) et ∃y ∀x (y > x) sont-elles vraies ?',
          en: '(1) Write the negation of “Every KBU student passed a math course” without starting with “it is false that”. (2) On the natural numbers ℕ, are ∀x ∃y (y > x) and ∃y ∀x (y > x) true?',
          tr: '(1) “KBU’nun tüm öğrencileri bir matematik dersini geçti” önermesinin değilini “şu yanlıştır ki” ile başlamadan yaz. (2) Doğal sayılarda ℕ, ∀x ∃y (y > x) ve ∃y ∀x (y > x) doğru mudur?',
        },
        solution: {
          fr: '(1) « Il existe un étudiant de KBU qui n’a réussi aucun cours de mathématiques. » Le ∀ devient ∃, et « a réussi un cours » (un ∃ caché) devient « n’en a réussi aucun ». (2) La première est vraie : pour tout x, y = x + 1 convient. La seconde est fausse : il faudrait un entier plus grand que tous les entiers, y compris que lui-même.',
          en: '(1) “There is a KBU student who passed no math course.” The ∀ becomes ∃, and “passed a course” (a hidden ∃) becomes “passed none”. (2) The first is true: for every x, y = x + 1 works. The second is false: it would need an integer larger than every integer, itself included.',
          tr: '(1) “Hiçbir matematik dersini geçmemiş bir KBU öğrencisi vardır.” ∀, ∃ olur ve “bir dersi geçti” (gizli bir ∃) “hiçbirini geçmedi” olur. (2) Birincisi doğrudur: her x için y = x + 1 uygundur. İkincisi yanlıştır: kendisi dahil tüm tam sayılardan büyük bir tam sayı gerekirdi.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est la négation de ∀x (x² ≥ 0) ?',
        en: 'What is the negation of ∀x (x² ≥ 0)?',
        tr: '∀x (x² ≥ 0)’ın değili nedir?',
      },
      options: { fr: ['∀x (x² < 0)', '∃x (x² < 0)', '∃x (x² ≥ 0)'], en: ['∀x (x² < 0)', '∃x (x² < 0)', '∃x (x² ≥ 0)'], tr: ['∀x (x² < 0)', '∃x (x² < 0)', '∃x (x² ≥ 0)'] },
      answerIndex: 1,
      explanation: {
        fr: 'On change ∀ en ∃ et on nie la propriété : « il existe un x dont le carré est négatif ». Sur les réels, cette négation est fausse, car la proposition de départ est vraie.',
        en: 'Turn ∀ into ∃ and negate the property: “there is an x whose square is negative”. Over the reals this negation is false, since the original statement is true.',
        tr: '∀, ∃ olur ve özellik değillenir: “karesi negatif olan bir x vardır”. Gerçel sayılarda bu değil yanlıştır, çünkü baştaki önerme doğrudur.',
      },
    },
  },
  {
    id: 'discrete-w03-proofs',
    week: 3,
    title: {
      fr: 'Méthodes de preuve et récurrence',
      en: 'Proof methods and induction',
      tr: 'İspat yöntemleri ve tümevarım',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Preuve directe        : on suppose p, on déduit q\nPar contraposée       : on suppose ¬q, on déduit ¬p\nPar l’absurde         : on suppose le contraire, on obtient une contradiction\nPar cas               : on traite séparément tous les cas possibles\n\nRécurrence (induction) pour prouver P(n) pour tout n ≥ 1 :\n1. Initialisation : on vérifie P(1)\n2. Hérédité       : on suppose P(k) (hypothèse de récurrence)\n                    et on démontre P(k + 1)',
          en: 'Direct proof          : assume p, derive q\nBy contrapositive     : assume ¬q, derive ¬p\nBy contradiction      : assume the opposite, reach a contradiction\nBy cases              : handle every possible case separately\n\nInduction to prove P(n) for every n ≥ 1:\n1. Basis step     : check P(1)\n2. Inductive step : assume P(k) (inductive hypothesis)\n                    and prove P(k + 1)',
          tr: 'Doğrudan ispat       : p varsayılır, q çıkarılır\nKarşıt tersle         : ¬q varsayılır, ¬p çıkarılır\nÇelişkiyle            : tersi varsayılır, bir çelişkiye varılır\nDurumlarla            : tüm olası durumlar ayrı ayrı incelenir\n\nTüm n ≥ 1 için P(n)’yi tümevarımla ispatlamak:\n1. Temel adım     : P(1) doğrulanır\n2. Tümevarım adımı: P(k) varsayılır (tümevarım hipotezi)\n                    ve P(k + 1) ispatlanır',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Exemple par contraposée : « si n² est pair, alors n est pair ». On suppose n impair, n = 2k + 1 ; alors n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1 est impair. La contraposée est vraie, donc la proposition aussi.',
          en: 'Example by contrapositive: “if n² is even, then n is even”. Assume n odd, n = 2k + 1; then n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1 is odd. The contrapositive holds, so the statement does too.',
          tr: 'Karşıt tersle örnek: “n² çiftse n çifttir”. n tek varsayılır, n = 2k + 1; o zaman n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1 tektir. Karşıt ters doğrudur, o halde önerme de doğrudur.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Démontre par récurrence que 1 + 3 + 5 + … + (2n − 1) = n² pour tout n ≥ 1.',
          en: 'Prove by induction that 1 + 3 + 5 + … + (2n − 1) = n² for every n ≥ 1.',
          tr: 'Her n ≥ 1 için 1 + 3 + 5 + … + (2n − 1) = n² olduğunu tümevarımla ispatla.',
        },
        solution: {
          fr: 'Initialisation : pour n = 1, le membre de gauche vaut 1 et 1² = 1. Hérédité : on suppose 1 + 3 + … + (2k − 1) = k². On ajoute le terme suivant, 2(k + 1) − 1 = 2k + 1 : la somme vaut k² + 2k + 1 = (k + 1)². C’est P(k + 1). Donc P(n) est vraie pour tout n ≥ 1. Vérification : 1 + 3 + 5 + 7 = 16 = 4².',
          en: 'Basis: for n = 1, the left side is 1 and 1² = 1. Inductive step: assume 1 + 3 + … + (2k − 1) = k². Add the next term, 2(k + 1) − 1 = 2k + 1: the sum is k² + 2k + 1 = (k + 1)². That is P(k + 1). So P(n) holds for every n ≥ 1. Check: 1 + 3 + 5 + 7 = 16 = 4².',
          tr: 'Temel adım: n = 1 için sol taraf 1’dir ve 1² = 1. Tümevarım adımı: 1 + 3 + … + (2k − 1) = k² varsayılır. Sonraki terim 2(k + 1) − 1 = 2k + 1 eklenir: toplam k² + 2k + 1 = (k + 1)² olur. Bu P(k + 1)’dir. O halde P(n) her n ≥ 1 için doğrudur. Sağlama: 1 + 3 + 5 + 7 = 16 = 4².',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans une récurrence, que suppose-t-on pendant l’étape d’hérédité ?',
        en: 'In an induction proof, what is assumed during the inductive step?',
        tr: 'Tümevarım ispatında, tümevarım adımında ne varsayılır?',
      },
      options: {
        fr: ['P(k + 1)', 'P(k)', 'P(n) pour tout n'],
        en: ['P(k + 1)', 'P(k)', 'P(n) for every n'],
        tr: ['P(k + 1)', 'P(k)', 'Her n için P(n)'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'On suppose P(k) pour démontrer P(k + 1). Supposer P(n) pour tout n reviendrait à supposer ce qu’on veut prouver.',
        en: 'Assume P(k) to prove P(k + 1). Assuming P(n) for every n would assume what you want to prove.',
        tr: 'P(k + 1)’i ispatlamak için P(k) varsayılır. Her n için P(n)’yi varsaymak ispatlanmak isteneni varsaymak olurdu.',
      },
    },
  },
  {
    id: 'discrete-sets',
    week: 4,
    title: { fr: 'Les ensembles', en: 'Sets', tr: 'Kümeler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un ensemble est une collection d’éléments distincts, sans ordre. Opérations : union A ∪ B, intersection A ∩ B, différence A − B, complémentaire Ā. L’ensemble des parties P(A) contient tous les sous-ensembles de A : si |A| = n, |P(A)| = 2ⁿ. Le produit cartésien A × B contient tous les couples (a, b) : |A × B| = |A| · |B|.',
          en: 'A set is a collection of distinct elements, with no order. Operations: union A ∪ B, intersection A ∩ B, difference A − B, complement Ā. The power set P(A) holds every subset of A: if |A| = n, |P(A)| = 2ⁿ. The Cartesian product A × B holds every pair (a, b): |A × B| = |A| · |B|.',
          tr: 'Küme, sırasız ve birbirinden farklı elemanların topluluğudur. İşlemler: birleşim A ∪ B, kesişim A ∩ B, fark A − B, tümleyen Ā. Kuvvet kümesi P(A), A’nın tüm alt kümelerini içerir: |A| = n ise |P(A)| = 2ⁿ. Kartezyen çarpım A × B tüm (a, b) çiftlerini içerir: |A × B| = |A| · |B|.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'A = {1, 2, 3}      B = {2, 3, 4}\nA ∪ B = {1, 2, 3, 4}       A ∩ B = {2, 3}\nA − B = {1}                B − A = {4}\nP({a, b}) = { ∅, {a}, {b}, {a, b} }       2² = 4 parties\n\n|A ∪ B| = |A| + |B| − |A ∩ B|            (inclusion-exclusion)\nDe Morgan : complémentaire(A ∪ B) = Ā ∩ B̄',
          en: 'A = {1, 2, 3}      B = {2, 3, 4}\nA ∪ B = {1, 2, 3, 4}       A ∩ B = {2, 3}\nA − B = {1}                B − A = {4}\nP({a, b}) = { ∅, {a}, {b}, {a, b} }       2² = 4 subsets\n\n|A ∪ B| = |A| + |B| − |A ∩ B|            (inclusion-exclusion)\nDe Morgan: complement(A ∪ B) = Ā ∩ B̄',
          tr: 'A = {1, 2, 3}      B = {2, 3, 4}\nA ∪ B = {1, 2, 3, 4}       A ∩ B = {2, 3}\nA − B = {1}                B − A = {4}\nP({a, b}) = { ∅, {a}, {b}, {a, b} }       2² = 4 alt küme\n\n|A ∪ B| = |A| + |B| − |A ∩ B|            (içerme-dışlama)\nDe Morgan: tümleyen(A ∪ B) = Ā ∩ B̄',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'A = {1, 2, 3, 4} et B = {3, 4, 5}. Donne A ∪ B, A ∩ B, A − B, |P(A)| et |A × B|. Puis : dans une classe de 40 étudiants, 25 suivent le cours de C, 18 celui de Java et 10 les deux. Combien n’en suivent aucun ?',
          en: 'A = {1, 2, 3, 4} and B = {3, 4, 5}. Give A ∪ B, A ∩ B, A − B, |P(A)| and |A × B|. Then: in a class of 40 students, 25 take C, 18 take Java and 10 take both. How many take neither?',
          tr: 'A = {1, 2, 3, 4} ve B = {3, 4, 5}. A ∪ B, A ∩ B, A − B, |P(A)| ve |A × B|’yi ver. Sonra: 40 öğrencilik bir sınıfta 25 kişi C, 18 kişi Java, 10 kişi ikisini birden alıyor. Kaç kişi hiçbirini almıyor?',
        },
        solution: {
          fr: 'A ∪ B = {1, 2, 3, 4, 5}, A ∩ B = {3, 4}, A − B = {1, 2}, |P(A)| = 2⁴ = 16, |A × B| = 4 × 3 = 12. Classe : |C ∪ J| = 25 + 18 − 10 = 33 étudiants suivent au moins un cours, donc 40 − 33 = 7 n’en suivent aucun.',
          en: 'A ∪ B = {1, 2, 3, 4, 5}, A ∩ B = {3, 4}, A − B = {1, 2}, |P(A)| = 2⁴ = 16, |A × B| = 4 × 3 = 12. Class: |C ∪ J| = 25 + 18 − 10 = 33 students take at least one course, so 40 − 33 = 7 take neither.',
          tr: 'A ∪ B = {1, 2, 3, 4, 5}, A ∩ B = {3, 4}, A − B = {1, 2}, |P(A)| = 2⁴ = 16, |A × B| = 4 × 3 = 12. Sınıf: |C ∪ J| = 25 + 18 − 10 = 33 öğrenci en az bir ders alıyor, yani 40 − 33 = 7 kişi hiçbirini almıyor.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de sous-ensembles a un ensemble de 5 éléments ?',
        en: 'How many subsets does a 5-element set have?',
        tr: '5 elemanlı bir kümenin kaç alt kümesi vardır?',
      },
      options: { fr: ['10', '25', '32'], en: ['10', '25', '32'], tr: ['10', '25', '32'] },
      answerIndex: 2,
      explanation: {
        fr: 'Chaque élément est dedans ou non : 2 choix pour chacun des 5 éléments, soit 2⁵ = 32 sous-ensembles (∅ et l’ensemble lui-même compris).',
        en: 'Each element is in or out: 2 choices for each of the 5 elements, so 2⁵ = 32 subsets (∅ and the set itself included).',
        tr: 'Her eleman ya içindedir ya değildir: 5 elemanın her biri için 2 seçenek, yani 2⁵ = 32 alt küme (∅ ve kümenin kendisi dahil).',
      },
    },
  },
  {
    id: 'discrete-w05-functions',
    week: 5,
    title: { fr: 'Les fonctions', en: 'Functions', tr: 'Fonksiyonlar' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une fonction f : A → B associe à chaque élément de A exactement un élément de B. Elle est injective si deux éléments différents ont toujours des images différentes, surjective si tout élément de B est atteint, bijective si elle est les deux : elle a alors une fonction réciproque f⁻¹. La composée (g ∘ f)(x) = g(f(x)) applique f d’abord.',
          en: 'A function f : A → B maps each element of A to exactly one element of B. It is injective (one-to-one) if different elements always have different images, surjective (onto) if every element of B is reached, bijective if both: it then has an inverse f⁻¹. The composition (g ∘ f)(x) = g(f(x)) applies f first.',
          tr: 'f : A → B fonksiyonu A’nın her elemanını B’nin tam olarak bir elemanına eşler. Farklı elemanların görüntüleri hep farklıysa birebir, B’nin her elemanına ulaşılıyorsa örten, ikisi birdense birebir örtendir: o zaman f⁻¹ ters fonksiyonu vardır. Bileşke (g ∘ f)(x) = g(f(x)) önce f’yi uygular.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'f : ℝ → ℝ, f(x) = 2x + 3     bijective, f⁻¹(y) = (y − 3) / 2\ng : ℝ → ℝ, g(x) = x²         ni injective (g(−2) = g(2)), ni surjective (−1 jamais atteint)\nPartie entière inférieure et supérieure : ⌊3,7⌋ = 3   ⌈3,2⌉ = 4   ⌊−1,5⌋ = −2\n\nFonctions entre ensembles finis, |A| = m, |B| = n\nnombre total de fonctions A → B : nᵐ\ninjection possible seulement si m ≤ n, surjection si m ≥ n',
          en: 'f : ℝ → ℝ, f(x) = 2x + 3     bijective, f⁻¹(y) = (y − 3) / 2\ng : ℝ → ℝ, g(x) = x²         neither injective (g(−2) = g(2)) nor surjective (−1 never reached)\nFloor and ceiling: ⌊3.7⌋ = 3   ⌈3.2⌉ = 4   ⌊−1.5⌋ = −2\n\nFunctions between finite sets, |A| = m, |B| = n\ntotal number of functions A → B: nᵐ\nan injection needs m ≤ n, a surjection m ≥ n',
          tr: 'f : ℝ → ℝ, f(x) = 2x + 3     birebir örten, f⁻¹(y) = (y − 3) / 2\ng : ℝ → ℝ, g(x) = x²         ne birebir (g(−2) = g(2)) ne örten (−1’e hiç ulaşılmaz)\nTaban ve tavan: ⌊3,7⌋ = 3   ⌈3,2⌉ = 4   ⌊−1,5⌋ = −2\n\nSonlu kümeler arası fonksiyonlar, |A| = m, |B| = n\nA → B fonksiyonlarının toplam sayısı: nᵐ\nbirebir için m ≤ n, örten için m ≥ n gerekir',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'f(x) = 2x + 3 et g(x) = x². (1) Calcule (f ∘ g)(2) et (g ∘ f)(2). Que montre ce résultat ? (2) Considérée de ℤ dans ℤ, f est-elle injective ? surjective ? (3) Combien y a-t-il de fonctions de {a, b, c} dans {0, 1} ?',
          en: 'f(x) = 2x + 3 and g(x) = x². (1) Compute (f ∘ g)(2) and (g ∘ f)(2). What does it show? (2) Seen from ℤ to ℤ, is f injective? surjective? (3) How many functions are there from {a, b, c} to {0, 1}?',
          tr: 'f(x) = 2x + 3 ve g(x) = x². (1) (f ∘ g)(2) ve (g ∘ f)(2)’yi hesapla. Bu ne gösterir? (2) ℤ’den ℤ’ye düşünülürse f birebir midir? örten midir? (3) {a, b, c}’den {0, 1}’e kaç fonksiyon vardır?',
        },
        solution: {
          fr: '(1) (f ∘ g)(2) = f(4) = 11 et (g ∘ f)(2) = g(7) = 49 : la composition n’est pas commutative. (2) Injective : 2x + 3 = 2y + 3 donne x = y. Pas surjective : 2x + 3 est toujours impair, donc 4 n’est jamais atteint. Sur ℝ, au contraire, elle est bijective. (3) 2³ = 8 fonctions : 2 choix d’image pour chacun des 3 éléments.',
          en: '(1) (f ∘ g)(2) = f(4) = 11 and (g ∘ f)(2) = g(7) = 49: composition is not commutative. (2) Injective: 2x + 3 = 2y + 3 gives x = y. Not surjective: 2x + 3 is always odd, so 4 is never reached. Over ℝ, on the contrary, it is bijective. (3) 2³ = 8 functions: 2 possible images for each of the 3 elements.',
          tr: '(1) (f ∘ g)(2) = f(4) = 11 ve (g ∘ f)(2) = g(7) = 49: bileşke değişmeli değildir. (2) Birebir: 2x + 3 = 2y + 3, x = y verir. Örten değil: 2x + 3 hep tektir, yani 4’e hiç ulaşılmaz. ℝ’de ise birebir örtendir. (3) 2³ = 8 fonksiyon: 3 elemanın her biri için 2 olası görüntü.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Une fonction qui a une réciproque est forcément…',
        en: 'A function that has an inverse is necessarily…',
        tr: 'Tersi olan bir fonksiyon kesinlikle…',
      },
      options: { fr: ['injective seulement', 'surjective seulement', 'bijective'], en: ['injective only', 'surjective only', 'bijective'], tr: ['yalnızca birebir', 'yalnızca örten', 'birebir örten'] },
      answerIndex: 2,
      explanation: {
        fr: 'Pour que f⁻¹ soit une fonction, chaque élément de B doit avoir exactement un antécédent : au moins un (surjective) et au plus un (injective).',
        en: 'For f⁻¹ to be a function, every element of B must have exactly one preimage: at least one (surjective) and at most one (injective).',
        tr: 'f⁻¹’in bir fonksiyon olması için B’nin her elemanının tam olarak bir ön görüntüsü olmalıdır: en az bir (örten) ve en fazla bir (birebir).',
      },
    },
  },
  {
    id: 'discrete-w06-counting',
    week: 6,
    title: {
      fr: 'Dénombrement : permutations et combinaisons',
      en: 'Counting: permutations and combinations',
      tr: 'Sayma: permütasyon ve kombinasyon',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Règle du produit : étapes successives → on multiplie\nRègle de la somme : cas qui s’excluent → on additionne\n\nPermutations (l’ordre compte)     P(n, k) = n! / (n − k)!\nCombinaisons (l’ordre ne compte pas)  C(n, k) = n! / (k! (n − k)!)\nP(10, 3) = 10 × 9 × 8 = 720        C(10, 3) = 720 / 3! = 120\n\nAvec répétition : nᵏ suites de longueur k\nAnagrammes avec lettres répétées : n! / (n₁! n₂! …)\n« Au moins un » : total − cas où il n’y en a aucun',
          en: 'Product rule: successive steps → multiply\nSum rule: mutually exclusive cases → add\n\nPermutations (order matters)      P(n, k) = n! / (n − k)!\nCombinations (order doesn’t)      C(n, k) = n! / (k! (n − k)!)\nP(10, 3) = 10 × 9 × 8 = 720        C(10, 3) = 720 / 3! = 120\n\nWith repetition: nᵏ sequences of length k\nArrangements with repeated letters: n! / (n₁! n₂! …)\n“At least one”: total − cases with none',
          tr: 'Çarpma kuralı: ardışık adımlar → çarpılır\nToplama kuralı: ayrık durumlar → toplanır\n\nPermütasyon (sıra önemli)          P(n, k) = n! / (n − k)!\nKombinasyon (sıra önemsiz)         C(n, k) = n! / (k! (n − k)!)\nP(10, 3) = 10 × 9 × 8 = 720        C(10, 3) = 720 / 3! = 120\n\nTekrarlı: k uzunluğunda nᵏ dizi\nTekrarlı harflerle dizilişler: n! / (n₁! n₂! …)\n“En az bir”: toplam − hiç olmayan durumlar',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Un mot de passe a 6 caractères, chacun une lettre minuscule (26) ou un chiffre (10). Combien de mots de passe possibles ? Combien contiennent au moins un chiffre ? (2) Un comité de 3 personnes est choisi parmi 6 hommes et 5 femmes. Combien de comités ont au moins une femme ?',
          en: '(1) A password has 6 characters, each a lowercase letter (26) or a digit (10). How many passwords are possible? How many contain at least one digit? (2) A 3-person committee is chosen from 6 men and 5 women. How many committees have at least one woman?',
          tr: '(1) Bir parola 6 karakterden oluşuyor; her biri küçük harf (26) veya rakam (10). Kaç parola mümkündür? Kaçı en az bir rakam içerir? (2) 6 erkek ve 5 kadın arasından 3 kişilik bir komite seçiliyor. Kaç komitede en az bir kadın vardır?',
        },
        solution: {
          fr: '(1) 36⁶ = 2 176 782 336 mots de passe. Sans aucun chiffre : 26⁶ = 308 915 776. Au moins un chiffre : 2 176 782 336 − 308 915 776 = 1 867 866 560. (2) Total : C(11, 3) = 165. Sans femme (3 hommes) : C(6, 3) = 20. Au moins une femme : 165 − 20 = 145. Le passage par le complémentaire évite d’additionner les cas 1, 2 et 3 femmes.',
          en: '(1) 36⁶ = 2,176,782,336 passwords. With no digit: 26⁶ = 308,915,776. At least one digit: 2,176,782,336 − 308,915,776 = 1,867,866,560. (2) Total: C(11, 3) = 165. No woman (3 men): C(6, 3) = 20. At least one woman: 165 − 20 = 145. Using the complement avoids adding the 1, 2 and 3 women cases.',
          tr: '(1) 36⁶ = 2.176.782.336 parola. Hiç rakam olmayan: 26⁶ = 308.915.776. En az bir rakam: 2.176.782.336 − 308.915.776 = 1.867.866.560. (2) Toplam: C(11, 3) = 165. Kadınsız (3 erkek): C(6, 3) = 20. En az bir kadın: 165 − 20 = 145. Tümleyeni kullanmak 1, 2 ve 3 kadınlı durumları toplamayı önler.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'De combien de façons peut-on choisir un président, un vice-président et un secrétaire parmi 10 étudiants ?',
        en: 'In how many ways can a president, a vice-president and a secretary be chosen from 10 students?',
        tr: '10 öğrenci arasından bir başkan, bir başkan yardımcısı ve bir sekreter kaç farklı şekilde seçilebilir?',
      },
      options: { fr: ['120', '720', '1000'], en: ['120', '720', '1,000'], tr: ['120', '720', '1000'] },
      answerIndex: 1,
      explanation: {
        fr: 'Les postes sont différents, donc l’ordre compte : P(10, 3) = 10 × 9 × 8 = 720. C(10, 3) = 120 compterait des groupes de 3 sans rôle.',
        en: 'The roles differ, so order matters: P(10, 3) = 10 × 9 × 8 = 720. C(10, 3) = 120 would count groups of 3 with no roles.',
        tr: 'Görevler farklı olduğundan sıra önemlidir: P(10, 3) = 10 × 9 × 8 = 720. C(10, 3) = 120 görevsiz 3’lü grupları sayardı.',
      },
    },
  },
  {
    id: 'discrete-w07-pigeonhole',
    week: 7,
    title: {
      fr: 'Principe des tiroirs, inclusion-exclusion et révision de la vize',
      en: 'Pigeonhole principle, inclusion-exclusion and midterm review',
      tr: 'Güvercin yuvası ilkesi, içerme-dışlama ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Principe des tiroirs : si on range n + 1 objets dans n tiroirs, un tiroir en contient au moins deux. Forme générale : N objets dans k tiroirs, un tiroir en contient au moins ⌈N / k⌉. Inclusion-exclusion pour trois ensembles : |A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|.',
          en: 'Pigeonhole principle: if n + 1 objects go into n boxes, some box holds at least two. General form: N objects in k boxes, some box holds at least ⌈N / k⌉. Inclusion-exclusion for three sets: |A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|.',
          tr: 'Güvercin yuvası ilkesi: n + 1 nesne n kutuya konursa bir kutuda en az iki nesne olur. Genel biçim: N nesne k kutuda, bir kutuda en az ⌈N / k⌉ nesne vardır. Üç küme için içerme-dışlama: |A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|.',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Connecteurs, tables de vérité, tautologies, contraposée, De Morgan\n✔ Prédicats, ∀ / ∃, négation, ordre des quantificateurs\n✔ Preuves : directe, contraposée, absurde, récurrence\n✔ Ensembles : ∪, ∩, −, P(A), A × B, cardinalités\n✔ Fonctions : injective, surjective, bijective, composée, réciproque\n✔ Dénombrement : produit, somme, P(n, k), C(n, k), « au moins un »\n✔ Principe des tiroirs, inclusion-exclusion',
          en: '✔ Connectives, truth tables, tautologies, contrapositive, De Morgan\n✔ Predicates, ∀ / ∃, negation, order of quantifiers\n✔ Proofs: direct, contrapositive, contradiction, induction\n✔ Sets: ∪, ∩, −, P(A), A × B, cardinalities\n✔ Functions: injective, surjective, bijective, composition, inverse\n✔ Counting: product, sum, P(n, k), C(n, k), “at least one”\n✔ Pigeonhole principle, inclusion-exclusion',
          tr: '✔ Bağlaçlar, doğruluk tabloları, totolojiler, karşıt ters, De Morgan\n✔ Yüklemler, ∀ / ∃, değilleme, niceleyici sırası\n✔ İspatlar: doğrudan, karşıt ters, çelişki, tümevarım\n✔ Kümeler: ∪, ∩, −, P(A), A × B, eleman sayıları\n✔ Fonksiyonlar: birebir, örten, birebir örten, bileşke, ters\n✔ Sayma: çarpma, toplama, P(n, k), C(n, k), “en az bir”\n✔ Güvercin yuvası ilkesi, içerme-dışlama',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Combien d’entiers de 1 à 100 sont divisibles par 2, par 3 ou par 5 ? (2) Combien d’étudiants faut-il au minimum pour être sûr que deux sont nés le même mois ? Et pour être sûr que 5 sont nés le même mois ?',
          en: '(1) How many integers from 1 to 100 are divisible by 2, 3 or 5? (2) At least how many students are needed to be sure two were born in the same month? And to be sure 5 were?',
          tr: '(1) 1’den 100’e kadar kaç tam sayı 2’ye, 3’e veya 5’e bölünür? (2) İkisinin aynı ayda doğduğundan emin olmak için en az kaç öğrenci gerekir? 5’inin aynı ayda doğduğundan emin olmak için?',
        },
        solution: {
          fr: '(1) |A₂| = 50, |A₃| = 33, |A₅| = 20 ; |A₂ ∩ A₃| = ⌊100/6⌋ = 16, |A₂ ∩ A₅| = 10, |A₃ ∩ A₅| = 6 ; |A₂ ∩ A₃ ∩ A₅| = ⌊100/30⌋ = 3. Total : 50 + 33 + 20 − 16 − 10 − 6 + 3 = 74. (2) 12 mois = 12 tiroirs : 13 étudiants suffisent pour deux. Pour 5, il faut ⌈N/12⌉ ≥ 5, soit N > 48 : 49 étudiants.',
          en: '(1) |A₂| = 50, |A₃| = 33, |A₅| = 20; |A₂ ∩ A₃| = ⌊100/6⌋ = 16, |A₂ ∩ A₅| = 10, |A₃ ∩ A₅| = 6; |A₂ ∩ A₃ ∩ A₅| = ⌊100/30⌋ = 3. Total: 50 + 33 + 20 − 16 − 10 − 6 + 3 = 74. (2) 12 months = 12 boxes: 13 students are enough for two. For 5, ⌈N/12⌉ ≥ 5 is needed, so N > 48: 49 students.',
          tr: '(1) |A₂| = 50, |A₃| = 33, |A₅| = 20; |A₂ ∩ A₃| = ⌊100/6⌋ = 16, |A₂ ∩ A₅| = 10, |A₃ ∩ A₅| = 6; |A₂ ∩ A₃ ∩ A₅| = ⌊100/30⌋ = 3. Toplam: 50 + 33 + 20 − 16 − 10 − 6 + 3 = 74. (2) 12 ay = 12 kutu: iki kişi için 13 öğrenci yeter. 5 kişi için ⌈N/12⌉ ≥ 5 gerekir, yani N > 48: 49 öğrenci.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'On tire des chaussettes au hasard dans un tiroir qui contient des chaussettes de 4 couleurs. Combien faut-il en tirer pour être sûr d’avoir une paire de la même couleur ?',
        en: 'Socks are drawn at random from a drawer holding socks of 4 colors. How many must be drawn to be sure of a matching pair?',
        tr: '4 renkte çorap bulunan bir çekmeceden rastgele çorap çekiliyor. Aynı renkten bir çift olduğundan emin olmak için kaç çorap çekilmelidir?',
      },
      options: { fr: ['4', '5', '8'], en: ['4', '5', '8'], tr: ['4', '5', '8'] },
      answerIndex: 1,
      explanation: {
        fr: '4 couleurs = 4 tiroirs. Avec 4 chaussettes, elles peuvent toutes être différentes ; la 5e tombe forcément dans une couleur déjà tirée.',
        en: '4 colors = 4 boxes. With 4 socks they may all differ; the 5th must match a color already drawn.',
        tr: '4 renk = 4 kutu. 4 çorap birbirinden farklı olabilir; 5. çorap mutlaka daha önce çekilen bir renge düşer.',
      },
    },
  },
  {
    id: 'discrete-w08-recurrences',
    week: 8,
    title: { fr: 'Relations de récurrence', en: 'Recurrence relations', tr: 'Yineleme bağıntıları' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une relation de récurrence définit chaque terme d’une suite à partir des précédents, avec des conditions initiales. Pour une récurrence linéaire homogène d’ordre 2, aₙ = c₁aₙ₋₁ + c₂aₙ₋₂, on résout l’équation caractéristique r² − c₁r − c₂ = 0. Avec deux racines distinctes r₁ et r₂, aₙ = α·r₁ⁿ + β·r₂ⁿ, et on trouve α et β avec a₀ et a₁.',
          en: 'A recurrence relation defines each term of a sequence from the previous ones, with initial conditions. For a second-order linear homogeneous recurrence, aₙ = c₁aₙ₋₁ + c₂aₙ₋₂, solve the characteristic equation r² − c₁r − c₂ = 0. With two distinct roots r₁ and r₂, aₙ = α·r₁ⁿ + β·r₂ⁿ, and α and β come from a₀ and a₁.',
          tr: 'Yineleme bağıntısı bir dizinin her terimini öncekilerden, başlangıç koşullarıyla tanımlar. İkinci mertebeden doğrusal homojen bir yinelemede, aₙ = c₁aₙ₋₁ + c₂aₙ₋₂, karakteristik denklem r² − c₁r − c₂ = 0 çözülür. İki farklı kök r₁ ve r₂ ile aₙ = α·r₁ⁿ + β·r₂ⁿ olur; α ve β, a₀ ve a₁’den bulunur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Fibonacci     : Fₙ = Fₙ₋₁ + Fₙ₋₂,  F₀ = 0, F₁ = 1\nHanoï         : Hₙ = 2Hₙ₋₁ + 1,    H₁ = 1   →  Hₙ = 2ⁿ − 1\nIntérêts 10 % : Pₙ = 1,1 · Pₙ₋₁               →  Pₙ = 1,1ⁿ · P₀\n\nMéthode (racines distinctes)\n1. équation caractéristique  r² − c₁r − c₂ = 0\n2. racines r₁, r₂  →  aₙ = α r₁ⁿ + β r₂ⁿ\n3. système avec a₀ et a₁  →  α, β\n4. vérifier avec a₂',
          en: 'Fibonacci     : Fₙ = Fₙ₋₁ + Fₙ₋₂,  F₀ = 0, F₁ = 1\nHanoi         : Hₙ = 2Hₙ₋₁ + 1,    H₁ = 1   →  Hₙ = 2ⁿ − 1\n10% interest  : Pₙ = 1.1 · Pₙ₋₁               →  Pₙ = 1.1ⁿ · P₀\n\nMethod (distinct roots)\n1. characteristic equation  r² − c₁r − c₂ = 0\n2. roots r₁, r₂  →  aₙ = α r₁ⁿ + β r₂ⁿ\n3. system with a₀ and a₁  →  α, β\n4. check with a₂',
          tr: 'Fibonacci     : Fₙ = Fₙ₋₁ + Fₙ₋₂,  F₀ = 0, F₁ = 1\nHanoi         : Hₙ = 2Hₙ₋₁ + 1,    H₁ = 1   →  Hₙ = 2ⁿ − 1\n%10 faiz      : Pₙ = 1,1 · Pₙ₋₁               →  Pₙ = 1,1ⁿ · P₀\n\nYöntem (farklı kökler)\n1. karakteristik denklem  r² − c₁r − c₂ = 0\n2. kökler r₁, r₂  →  aₙ = α r₁ⁿ + β r₂ⁿ\n3. a₀ ve a₁ ile sistem  →  α, β\n4. a₂ ile sağla',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Résous aₙ = 5aₙ₋₁ − 6aₙ₋₂ avec a₀ = 1 et a₁ = 4. Vérifie ta formule sur a₂ et a₃.',
          en: 'Solve aₙ = 5aₙ₋₁ − 6aₙ₋₂ with a₀ = 1 and a₁ = 4. Check your formula on a₂ and a₃.',
          tr: 'a₀ = 1 ve a₁ = 4 ile aₙ = 5aₙ₋₁ − 6aₙ₋₂ yinelemesini çöz. Formülünü a₂ ve a₃ ile sağla.',
        },
        solution: {
          fr: 'r² − 5r + 6 = 0 → r = 2 ou r = 3, donc aₙ = α·2ⁿ + β·3ⁿ. a₀ : α + β = 1 ; a₁ : 2α + 3β = 4. On trouve β = 2 et α = −1 : aₙ = 2·3ⁿ − 2ⁿ. Vérification : par la récurrence, a₂ = 5·4 − 6·1 = 14 et a₃ = 5·14 − 6·4 = 46 ; par la formule, 2·9 − 4 = 14 et 2·27 − 8 = 46.',
          en: 'r² − 5r + 6 = 0 → r = 2 or r = 3, so aₙ = α·2ⁿ + β·3ⁿ. a₀: α + β = 1; a₁: 2α + 3β = 4. This gives β = 2 and α = −1: aₙ = 2·3ⁿ − 2ⁿ. Check: from the recurrence, a₂ = 5·4 − 6·1 = 14 and a₃ = 5·14 − 6·4 = 46; from the formula, 2·9 − 4 = 14 and 2·27 − 8 = 46.',
          tr: 'r² − 5r + 6 = 0 → r = 2 veya r = 3, yani aₙ = α·2ⁿ + β·3ⁿ. a₀: α + β = 1; a₁: 2α + 3β = 4. Buradan β = 2 ve α = −1: aₙ = 2·3ⁿ − 2ⁿ. Sağlama: yinelemeden a₂ = 5·4 − 6·1 = 14 ve a₃ = 5·14 − 6·4 = 46; formülden 2·9 − 4 = 14 ve 2·27 − 8 = 46.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de déplacements faut-il pour résoudre les tours de Hanoï avec 6 disques ?',
        en: 'How many moves are needed to solve the Towers of Hanoi with 6 disks?',
        tr: '6 diskli Hanoi kulelerini çözmek için kaç hamle gerekir?',
      },
      options: { fr: ['36', '63', '64'], en: ['36', '63', '64'], tr: ['36', '63', '64'] },
      answerIndex: 1,
      explanation: {
        fr: 'Hₙ = 2ⁿ − 1, donc H₆ = 64 − 1 = 63.',
        en: 'Hₙ = 2ⁿ − 1, so H₆ = 64 − 1 = 63.',
        tr: 'Hₙ = 2ⁿ − 1, yani H₆ = 64 − 1 = 63.',
      },
    },
  },
  {
    id: 'discrete-w09-number-theory',
    week: 9,
    title: {
      fr: 'Divisibilité, PGCD et arithmétique modulaire',
      en: 'Divisibility, GCD and modular arithmetic',
      tr: 'Bölünebilme, EBOB ve modüler aritmetik',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'a ≡ b (mod m) signifie que m divise a − b : a et b ont le même reste dans la division par m. On peut additionner et multiplier des congruences, ce qui permet de calculer de grandes puissances modulo m. L’algorithme d’Euclide calcule le PGCD par divisions successives ; en remontant les calculs, on obtient l’identité de Bézout : pgcd(a, b) = sa + tb. L’inverse de a modulo m existe si pgcd(a, m) = 1. C’est la base de la cryptographie RSA.',
          en: 'a ≡ b (mod m) means m divides a − b: a and b leave the same remainder when divided by m. Congruences can be added and multiplied, which allows computing large powers modulo m. Euclid’s algorithm finds the GCD by repeated division; working back through the steps gives Bézout’s identity: gcd(a, b) = sa + tb. The inverse of a modulo m exists if gcd(a, m) = 1. This is the basis of RSA cryptography.',
          tr: 'a ≡ b (mod m), m’nin a − b’yi böldüğü anlamına gelir: a ve b’nin m’ye bölümünden kalan aynıdır. Denklikler toplanıp çarpılabilir; böylece büyük kuvvetler mod m hesaplanabilir. Öklid algoritması EBOB’u art arda bölmelerle bulur; adımlar geriye izlenince Bézout özdeşliği elde edilir: ebob(a, b) = sa + tb. ebob(a, m) = 1 ise a’nın mod m tersi vardır. RSA şifrelemesinin temeli budur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Euclide : pgcd(252, 198)\n252 = 1 × 198 + 54\n198 = 3 × 54 + 36\n 54 = 1 × 36 + 18\n 36 = 2 × 18 + 0         → pgcd = 18 (dernier reste non nul)\n\nBézout : 18 = 4 × 252 − 5 × 198\n\nPuissances : 7¹ ≡ 7, 7² ≡ 9, 7³ ≡ 3, 7⁴ ≡ 1 (mod 10) → cycle de longueur 4\nInverse : 3 × 5 = 15 ≡ 1 (mod 7)  → l’inverse de 3 modulo 7 est 5',
          en: 'Euclid: gcd(252, 198)\n252 = 1 × 198 + 54\n198 = 3 × 54 + 36\n 54 = 1 × 36 + 18\n 36 = 2 × 18 + 0         → gcd = 18 (last non-zero remainder)\n\nBézout: 18 = 4 × 252 − 5 × 198\n\nPowers: 7¹ ≡ 7, 7² ≡ 9, 7³ ≡ 3, 7⁴ ≡ 1 (mod 10) → a cycle of length 4\nInverse: 3 × 5 = 15 ≡ 1 (mod 7)  → the inverse of 3 modulo 7 is 5',
          tr: 'Öklid: ebob(252, 198)\n252 = 1 × 198 + 54\n198 = 3 × 54 + 36\n 54 = 1 × 36 + 18\n 36 = 2 × 18 + 0         → ebob = 18 (sıfır olmayan son kalan)\n\nBézout: 18 = 4 × 252 − 5 × 198\n\nKuvvetler: 7¹ ≡ 7, 7² ≡ 9, 7³ ≡ 3, 7⁴ ≡ 1 (mod 10) → 4 uzunluğunda döngü\nTers: 3 × 5 = 15 ≡ 1 (mod 7)  → 3’ün mod 7 tersi 5’tir',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Quel est le dernier chiffre de 7²²² ? (2) Que vaut 2¹⁰⁰ mod 7 ? (3) Vérifie l’identité de Bézout 18 = 4 × 252 − 5 × 198.',
          en: '(1) What is the last digit of 7²²²? (2) What is 2¹⁰⁰ mod 7? (3) Check Bézout’s identity 18 = 4 × 252 − 5 × 198.',
          tr: '(1) 7²²²’nin son basamağı nedir? (2) 2¹⁰⁰ mod 7 kaçtır? (3) 18 = 4 × 252 − 5 × 198 Bézout özdeşliğini doğrula.',
        },
        solution: {
          fr: '(1) Le dernier chiffre est la valeur mod 10. Le cycle de 7 est de longueur 4, et 222 = 4 × 55 + 2, donc 7²²² ≡ 7² ≡ 49 ≡ 9 : le dernier chiffre est 9. (2) 2³ = 8 ≡ 1 (mod 7) et 100 = 3 × 33 + 1, donc 2¹⁰⁰ = (2³)³³ × 2 ≡ 1 × 2 = 2. (3) 4 × 252 = 1008 et 5 × 198 = 990 ; 1008 − 990 = 18.',
          en: '(1) The last digit is the value mod 10. The cycle of 7 has length 4, and 222 = 4 × 55 + 2, so 7²²² ≡ 7² ≡ 49 ≡ 9: the last digit is 9. (2) 2³ = 8 ≡ 1 (mod 7) and 100 = 3 × 33 + 1, so 2¹⁰⁰ = (2³)³³ × 2 ≡ 1 × 2 = 2. (3) 4 × 252 = 1008 and 5 × 198 = 990; 1008 − 990 = 18.',
          tr: '(1) Son basamak mod 10 değeridir. 7’nin döngüsü 4 uzunluğundadır ve 222 = 4 × 55 + 2, yani 7²²² ≡ 7² ≡ 49 ≡ 9: son basamak 9’dur. (2) 2³ = 8 ≡ 1 (mod 7) ve 100 = 3 × 33 + 1, yani 2¹⁰⁰ = (2³)³³ × 2 ≡ 1 × 2 = 2. (3) 4 × 252 = 1008 ve 5 × 198 = 990; 1008 − 990 = 18.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que vaut 17 mod 5 ?',
        en: 'What is 17 mod 5?',
        tr: '17 mod 5 kaçtır?',
      },
      options: { fr: ['2', '3', '12'], en: ['2', '3', '12'], tr: ['2', '3', '12'] },
      answerIndex: 0,
      explanation: {
        fr: '17 = 3 × 5 + 2 : le reste est 2, donc 17 ≡ 2 (mod 5).',
        en: '17 = 3 × 5 + 2: the remainder is 2, so 17 ≡ 2 (mod 5).',
        tr: '17 = 3 × 5 + 2: kalan 2’dir, yani 17 ≡ 2 (mod 5).',
      },
    },
  },
  {
    id: 'discrete-w10-relations',
    week: 10,
    title: {
      fr: 'Relations d’équivalence et d’ordre',
      en: 'Equivalence and order relations',
      tr: 'Denklik ve sıralama bağıntıları',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Relation R sur A : un sous-ensemble de A × B (ici B = A)\nréflexive     : (a, a) ∈ R pour tout a\nsymétrique    : (a, b) ∈ R ⇒ (b, a) ∈ R\nantisymétrique: (a, b) et (b, a) ∈ R ⇒ a = b\ntransitive    : (a, b) et (b, c) ∈ R ⇒ (a, c) ∈ R\n\nÉquivalence  = réflexive + symétrique + transitive\n               → partage A en classes  (ex. « même reste mod 3 »)\nOrdre partiel = réflexive + antisymétrique + transitive\n               → diagramme de Hasse     (ex. « divise », ⊆, ≤)',
          en: 'Relation R on A: a subset of A × B (here B = A)\nreflexive     : (a, a) ∈ R for every a\nsymmetric     : (a, b) ∈ R ⇒ (b, a) ∈ R\nantisymmetric : (a, b) and (b, a) ∈ R ⇒ a = b\ntransitive    : (a, b) and (b, c) ∈ R ⇒ (a, c) ∈ R\n\nEquivalence   = reflexive + symmetric + transitive\n                → splits A into classes  (e.g. “same remainder mod 3”)\nPartial order = reflexive + antisymmetric + transitive\n                → Hasse diagram          (e.g. “divides”, ⊆, ≤)',
          tr: 'A üzerinde R bağıntısı: A × B’nin bir alt kümesi (burada B = A)\nyansıyan      : her a için (a, a) ∈ R\nsimetrik      : (a, b) ∈ R ⇒ (b, a) ∈ R\nters simetrik : (a, b) ve (b, a) ∈ R ⇒ a = b\ngeçişken      : (a, b) ve (b, c) ∈ R ⇒ (a, c) ∈ R\n\nDenklik       = yansıyan + simetrik + geçişken\n                → A’yı sınıflara ayırır  (örn. “mod 3’te aynı kalan”)\nKısmi sıralama = yansıyan + ters simetrik + geçişken\n                → Hasse diyagramı        (örn. “böler”, ⊆, ≤)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Sur A = {1, 2, 3}, R = {(1,1), (2,2), (3,3), (1,2), (2,1)}. R est-elle une relation d’équivalence ? Donne ses classes. (2) Sur {0, 1, …, 8}, donne les classes de « a ≡ b (mod 3) ». (3) Dessine le diagramme de Hasse de « divise » sur {1, 2, 3, 6, 12}.',
          en: '(1) On A = {1, 2, 3}, R = {(1,1), (2,2), (3,3), (1,2), (2,1)}. Is R an equivalence relation? Give its classes. (2) On {0, 1, …, 8}, give the classes of “a ≡ b (mod 3)”. (3) Draw the Hasse diagram of “divides” on {1, 2, 3, 6, 12}.',
          tr: '(1) A = {1, 2, 3} üzerinde R = {(1,1), (2,2), (3,3), (1,2), (2,1)}. R bir denklik bağıntısı mıdır? Sınıflarını ver. (2) {0, 1, …, 8} üzerinde “a ≡ b (mod 3)” bağıntısının sınıflarını ver. (3) {1, 2, 3, 6, 12} üzerinde “böler” bağıntısının Hasse diyagramını çiz.',
        },
        solution: {
          fr: '(1) Réflexive (les trois (a, a) sont là), symétrique ((1,2) et (2,1)), transitive (les seules chaînes, comme (1,2) puis (2,1), donnent (1,1), présent). C’est une équivalence, de classes {1, 2} et {3}. (2) {0, 3, 6}, {1, 4, 7}, {2, 5, 8}. (3) 1 en bas ; au-dessus, 2 et 3 ; 6 au-dessus des deux ; 12 en haut au-dessus de 6. On ne dessine pas les arêtes déduites par transitivité (comme 1–6) ni les boucles.',
          en: '(1) Reflexive (all three (a, a) are there), symmetric ((1,2) and (2,1)), transitive (the only chains, like (1,2) then (2,1), give (1,1), which is present). It is an equivalence, with classes {1, 2} and {3}. (2) {0, 3, 6}, {1, 4, 7}, {2, 5, 8}. (3) 1 at the bottom; above it 2 and 3; 6 above both; 12 at the top above 6. Edges implied by transitivity (like 1–6) and loops are not drawn.',
          tr: '(1) Yansıyan (üç (a, a) da var), simetrik ((1,2) ve (2,1)), geçişken ((1,2) sonra (2,1) gibi tek zincirler, var olan (1,1)’i verir). Denkliktir; sınıfları {1, 2} ve {3}. (2) {0, 3, 6}, {1, 4, 7}, {2, 5, 8}. (3) En altta 1; üstünde 2 ve 3; ikisinin üstünde 6; en üstte 6’nın üstünde 12. Geçişkenlikten çıkan kenarlar (1–6 gibi) ve döngüler çizilmez.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'La relation ≤ sur les entiers est-elle symétrique ?',
        en: 'Is the relation ≤ on the integers symmetric?',
        tr: 'Tam sayılarda ≤ bağıntısı simetrik midir?',
      },
      options: {
        fr: ['Oui', 'Non, elle est antisymétrique', 'Elle n’est ni l’une ni l’autre'],
        en: ['Yes', 'No, it is antisymmetric', 'It is neither'],
        tr: ['Evet', 'Hayır, ters simetriktir', 'İkisi de değildir'],
      },
      answerIndex: 1,
      explanation: {
        fr: '2 ≤ 5 mais pas 5 ≤ 2 : pas symétrique. Si a ≤ b et b ≤ a, alors a = b : antisymétrique. Avec réflexivité et transitivité, ≤ est un ordre (total).',
        en: '2 ≤ 5 but not 5 ≤ 2: not symmetric. If a ≤ b and b ≤ a, then a = b: antisymmetric. With reflexivity and transitivity, ≤ is a (total) order.',
        tr: '2 ≤ 5 ama 5 ≤ 2 değil: simetrik değildir. a ≤ b ve b ≤ a ise a = b: ters simetriktir. Yansıma ve geçişkenlikle ≤ bir (tam) sıralamadır.',
      },
    },
  },
  {
    id: 'discrete-graphs',
    week: 11,
    title: { fr: 'Introduction aux graphes', en: 'Introduction to graphs', tr: 'Graflara giriş' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un graphe G = (V, E) est formé de sommets reliés par des arêtes. Le degré d’un sommet est son nombre d’arêtes. Lemme des poignées de main : la somme des degrés vaut 2|E|, donc le nombre de sommets de degré impair est toujours pair. Graphes particuliers : complet Kₙ (toutes les arêtes), cycle Cₙ, biparti (deux groupes, arêtes seulement entre eux), biparti complet Kₘ,ₙ.',
          en: 'A graph G = (V, E) is made of vertices linked by edges. A vertex’s degree is its number of edges. Handshaking lemma: the degrees add up to 2|E|, so the number of odd-degree vertices is always even. Special graphs: complete Kₙ (every edge), cycle Cₙ, bipartite (two groups, edges only between them), complete bipartite Kₘ,ₙ.',
          tr: 'G = (V, E) grafı, kenarlarla bağlanan düğümlerden oluşur. Bir düğümün derecesi kenar sayısıdır. El sıkışma önermesi: derecelerin toplamı 2|E|’dir; bu yüzden tek dereceli düğümlerin sayısı hep çifttir. Özel graflar: tam graf Kₙ (tüm kenarlar), döngü Cₙ, iki parçalı (iki grup, kenarlar yalnızca aralarında), tam iki parçalı Kₘ,ₙ.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Kₙ   : n(n − 1)/2 arêtes          K₆ → 15\nKₘ,ₙ : m × n arêtes               K₃,₄ → 12\nCₙ   : n arêtes, tous les sommets de degré 2\n\nReprésentations : matrice d’adjacence (n × n) ou listes d’adjacence\nChemin : suite d’arêtes qui se suivent ; cycle : chemin qui revient au départ\nConnexe : il existe un chemin entre toute paire de sommets\nIsomorphes : même graphe aux noms des sommets près',
          en: 'Kₙ   : n(n − 1)/2 edges           K₆ → 15\nKₘ,ₙ : m × n edges                K₃,₄ → 12\nCₙ   : n edges, every vertex of degree 2\n\nRepresentations: adjacency matrix (n × n) or adjacency lists\nPath: a sequence of consecutive edges; cycle: a path back to the start\nConnected: there is a path between every pair of vertices\nIsomorphic: the same graph up to vertex names',
          tr: 'Kₙ   : n(n − 1)/2 kenar           K₆ → 15\nKₘ,ₙ : m × n kenar                K₃,₄ → 12\nCₙ   : n kenar, tüm düğümler 2. dereceden\n\nGösterimler: komşuluk matrisi (n × n) veya komşuluk listeleri\nYol: art arda gelen kenarlar dizisi; döngü: başa dönen yol\nBağlantılı: her düğüm çifti arasında bir yol vardır\nEşyapılı (izomorf): düğüm adları dışında aynı graf',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Combien d’arêtes a un graphe à 10 sommets où chaque sommet a le degré 4 ? (2) Existe-t-il un graphe dont les degrés sont 3, 3, 3, 2, 2 ? (3) 8 équipes jouent chacune une fois contre toutes les autres : combien de matchs ?',
          en: '(1) How many edges does a 10-vertex graph have if every vertex has degree 4? (2) Is there a graph with degrees 3, 3, 3, 2, 2? (3) 8 teams each play every other team once: how many matches?',
          tr: '(1) Her düğümün derecesi 4 olan 10 düğümlü bir grafın kaç kenarı vardır? (2) Dereceleri 3, 3, 3, 2, 2 olan bir graf var mıdır? (3) 8 takım birbiriyle birer kez oynuyor: kaç maç yapılır?',
        },
        solution: {
          fr: '(1) Somme des degrés = 10 × 4 = 40 = 2|E|, donc 20 arêtes. (2) Non : la somme 3 + 3 + 3 + 2 + 2 = 13 est impaire, alors qu’elle doit valoir 2|E| ; on a 3 sommets de degré impair, un nombre impair. (3) C’est le graphe complet K₈ : 8 × 7 / 2 = 28 matchs.',
          en: '(1) Sum of degrees = 10 × 4 = 40 = 2|E|, so 20 edges. (2) No: the sum 3 + 3 + 3 + 2 + 2 = 13 is odd, while it must equal 2|E|; there are 3 odd-degree vertices, an odd number. (3) It is the complete graph K₈: 8 × 7 / 2 = 28 matches.',
          tr: '(1) Dereceler toplamı = 10 × 4 = 40 = 2|E|, yani 20 kenar. (2) Hayır: 3 + 3 + 3 + 2 + 2 = 13 toplamı tektir, oysa 2|E|’ye eşit olmalıdır; 3 tek dereceli düğüm vardır, bu tek bir sayıdır. (3) Bu K₈ tam grafıdır: 8 × 7 / 2 = 28 maç.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien d’arêtes a le graphe complet K₆ ?',
        en: 'How many edges does the complete graph K₆ have?',
        tr: 'K₆ tam grafının kaç kenarı vardır?',
      },
      options: { fr: ['12', '15', '30'], en: ['12', '15', '30'], tr: ['12', '15', '30'] },
      answerIndex: 1,
      explanation: {
        fr: 'Chaque paire de sommets est reliée : C(6, 2) = 6 × 5 / 2 = 15. 30 compterait chaque arête deux fois.',
        en: 'Every pair of vertices is linked: C(6, 2) = 6 × 5 / 2 = 15. 30 would count each edge twice.',
        tr: 'Her düğüm çifti bağlıdır: C(6, 2) = 6 × 5 / 2 = 15. 30, her kenarı iki kez sayardı.',
      },
    },
  },
  {
    id: 'discrete-w12-paths',
    week: 12,
    title: {
      fr: 'Chemins eulériens, hamiltoniens et plus court chemin',
      en: 'Euler and Hamilton paths, shortest path',
      tr: 'Euler ve Hamilton yolları, en kısa yol',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un chemin eulérien passe une fois par chaque ARÊTE. Un graphe connexe a un cycle eulérien si tous ses sommets ont un degré pair, et un chemin eulérien (non fermé) s’il a exactement deux sommets impairs : on part de l’un et on arrive à l’autre. Un chemin hamiltonien passe une fois par chaque SOMMET ; il n’existe pas de critère simple pour savoir s’il y en a un. L’algorithme de Dijkstra donne les plus courts chemins depuis un sommet dans un graphe à poids positifs.',
          en: 'An Euler path uses every EDGE once. A connected graph has an Euler circuit if every vertex has even degree, and an (open) Euler path if exactly two vertices are odd: it starts at one and ends at the other. A Hamilton path visits every VERTEX once; there is no simple test for whether one exists. Dijkstra’s algorithm gives the shortest paths from one vertex in a graph with positive weights.',
          tr: 'Euler yolu her KENARDAN bir kez geçer. Bağlantılı bir grafta tüm düğümlerin derecesi çiftse Euler devresi, tam olarak iki düğüm tekse (kapalı olmayan) Euler yolu vardır: birinden başlar, diğerinde biter. Hamilton yolu her DÜĞÜMÜ bir kez ziyaret eder; var olup olmadığını söyleyen basit bir ölçüt yoktur. Dijkstra algoritması pozitif ağırlıklı bir grafta bir düğümden en kısa yolları verir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Graphe pondéré\nA-B 4   A-C 2   B-C 1   B-D 5   C-D 8\nC-E 10  D-E 2   D-F 6   E-F 3\n\nDijkstra depuis A : on fixe à chaque étape le sommet non fixé le plus proche,\npuis on met à jour ses voisins (dist[v] = min(dist[v], dist[u] + poids)).\n\nDegrés : A 2, B 3, C 4, D 4, E 3, F 2',
          en: 'Weighted graph\nA-B 4   A-C 2   B-C 1   B-D 5   C-D 8\nC-E 10  D-E 2   D-F 6   E-F 3\n\nDijkstra from A: at each step, fix the closest unfixed vertex,\nthen update its neighbors (dist[v] = min(dist[v], dist[u] + weight)).\n\nDegrees: A 2, B 3, C 4, D 4, E 3, F 2',
          tr: 'Ağırlıklı graf\nA-B 4   A-C 2   B-C 1   B-D 5   C-D 8\nC-E 10  D-E 2   D-F 6   E-F 3\n\nA’dan Dijkstra: her adımda sabitlenmemiş en yakın düğüm sabitlenir,\nsonra komşuları güncellenir (dist[v] = min(dist[v], dist[u] + ağırlık)).\n\nDereceler: A 2, B 3, C 4, D 4, E 3, F 2',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Applique Dijkstra depuis A : dans quel ordre les sommets sont-ils fixés, avec quelle distance ? Quel est le plus court chemin de A à F ? (2) Ce graphe a-t-il un cycle eulérien ? Un chemin eulérien ?',
          en: '(1) Run Dijkstra from A: in which order are the vertices fixed, and at what distance? What is the shortest path from A to F? (2) Does this graph have an Euler circuit? An Euler path?',
          tr: '(1) A’dan Dijkstra uygula: düğümler hangi sırayla, hangi uzaklıkla sabitlenir? A’dan F’ye en kısa yol nedir? (2) Bu grafın Euler devresi var mı? Euler yolu var mı?',
        },
        solution: {
          fr: '(1) A = 0. Voisins : C = 2, B = 4. On fixe C (2) : B passe à 2 + 1 = 3, D = 10, E = 12. On fixe B (3) : D passe à 3 + 5 = 8. On fixe D (8) : E passe à 10, F = 14. On fixe E (10) : F passe à 13. On fixe F (13). Ordre : A 0, C 2, B 3, D 8, E 10, F 13. Chemin : A → C → B → D → E → F, longueur 13. (2) B et E sont de degré impair, exactement deux : pas de cycle eulérien, mais un chemin eulérien de B à E.',
          en: '(1) A = 0. Neighbors: C = 2, B = 4. Fix C (2): B becomes 2 + 1 = 3, D = 10, E = 12. Fix B (3): D becomes 3 + 5 = 8. Fix D (8): E becomes 10, F = 14. Fix E (10): F becomes 13. Fix F (13). Order: A 0, C 2, B 3, D 8, E 10, F 13. Path: A → C → B → D → E → F, length 13. (2) B and E have odd degree, exactly two: no Euler circuit, but an Euler path from B to E.',
          tr: '(1) A = 0. Komşular: C = 2, B = 4. C sabitlenir (2): B, 2 + 1 = 3 olur, D = 10, E = 12. B sabitlenir (3): D, 3 + 5 = 8 olur. D sabitlenir (8): E 10 olur, F = 14. E sabitlenir (10): F 13 olur. F sabitlenir (13). Sıra: A 0, C 2, B 3, D 8, E 10, F 13. Yol: A → C → B → D → E → F, uzunluk 13. (2) B ve E tek derecelidir, tam olarak iki tane: Euler devresi yok, ama B’den E’ye bir Euler yolu var.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Un graphe connexe a tous ses sommets de degré pair. Que peut-on dire ?',
        en: 'A connected graph has every vertex of even degree. What follows?',
        tr: 'Bağlantılı bir grafın tüm düğümleri çift derecelidir. Ne söylenebilir?',
      },
      options: {
        fr: ['Il a un cycle eulérien', 'Il a un cycle hamiltonien', 'C’est un arbre'],
        en: ['It has an Euler circuit', 'It has a Hamilton circuit', 'It is a tree'],
        tr: ['Euler devresi vardır', 'Hamilton devresi vardır', 'Bir ağaçtır'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'C’est le théorème d’Euler (problème des ponts de Königsberg). Pour les cycles hamiltoniens, aucune règle aussi simple n’existe. Un arbre a des feuilles, de degré 1, donc impair.',
        en: 'That is Euler’s theorem (the Königsberg bridges problem). No rule this simple exists for Hamilton circuits. A tree has leaves of degree 1, which is odd.',
        tr: 'Bu Euler teoremidir (Königsberg köprüleri problemi). Hamilton devreleri için bu kadar basit bir kural yoktur. Ağacın yaprakları vardır; dereceleri 1, yani tektir.',
      },
    },
  },
  {
    id: 'discrete-w13-trees',
    week: 13,
    title: {
      fr: 'Arbres et arbres couvrants minimaux',
      en: 'Trees and minimum spanning trees',
      tr: 'Ağaçlar ve en küçük kapsayan ağaçlar',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un arbre est un graphe connexe sans cycle : entre deux sommets, il y a exactement un chemin, et un arbre à n sommets a n − 1 arêtes. Un arbre m-aire plein (chaque nœud interne a m enfants) avec i nœuds internes a m·i + 1 sommets et (m − 1)·i + 1 feuilles. Un arbre couvrant minimal relie tous les sommets d’un graphe pondéré avec un poids total minimal : algorithmes de Kruskal et de Prim.',
          en: 'A tree is a connected graph with no cycle: between two vertices there is exactly one path, and a tree with n vertices has n − 1 edges. A full m-ary tree (every internal node has m children) with i internal nodes has m·i + 1 vertices and (m − 1)·i + 1 leaves. A minimum spanning tree links every vertex of a weighted graph with the least total weight: Kruskal’s and Prim’s algorithms.',
          tr: 'Ağaç, döngüsüz bağlantılı bir graftır: iki düğüm arasında tam olarak bir yol vardır ve n düğümlü bir ağacın n − 1 kenarı vardır. i iç düğümlü tam bir m’li ağacın (her iç düğümün m çocuğu var) m·i + 1 düğümü ve (m − 1)·i + 1 yaprağı vardır. En küçük kapsayan ağaç, ağırlıklı bir grafın tüm düğümlerini en küçük toplam ağırlıkla bağlar: Kruskal ve Prim algoritmaları.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Kruskal\n1. trier les arêtes par poids croissant\n2. prendre chaque arête dans l’ordre, SAUF si elle crée un cycle\n3. s’arrêter à n − 1 arêtes\n\nPrim\n1. partir d’un sommet\n2. ajouter l’arête la plus légère qui relie l’arbre à un nouveau sommet\n3. recommencer jusqu’à avoir tous les sommets\n\n(même graphe qu’en semaine 12)',
          en: 'Kruskal\n1. sort the edges by increasing weight\n2. take each edge in order, UNLESS it creates a cycle\n3. stop at n − 1 edges\n\nPrim\n1. start from a vertex\n2. add the lightest edge linking the tree to a new vertex\n3. repeat until every vertex is included\n\n(same graph as in week 12)',
          tr: 'Kruskal\n1. kenarları artan ağırlığa göre sırala\n2. her kenarı sırayla al, döngü oluşturuyorsa ALMA\n3. n − 1 kenarda dur\n\nPrim\n1. bir düğümden başla\n2. ağacı yeni bir düğüme bağlayan en hafif kenarı ekle\n3. tüm düğümler eklenene kadar tekrarla\n\n(12. haftadaki grafın aynısı)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Applique Kruskal au graphe de la semaine 12. Quelles arêtes garde-t-on, laquelle refuse-t-on, et quel est le poids total ? (2) Un arbre ternaire plein a 10 nœuds internes : combien a-t-il de feuilles et de sommets ?',
          en: '(1) Apply Kruskal to the week 12 graph. Which edges are kept, which one is refused, and what is the total weight? (2) A full ternary tree has 10 internal nodes: how many leaves and vertices does it have?',
          tr: '(1) 12. haftanın grafına Kruskal uygula. Hangi kenarlar alınır, hangisi reddedilir ve toplam ağırlık nedir? (2) Tam bir üçlü ağacın 10 iç düğümü var: kaç yaprağı ve kaç düğümü vardır?',
        },
        solution: {
          fr: '(1) Ordre : B-C 1 (gardée), A-C 2 (gardée), D-E 2 (gardée), E-F 3 (gardée), A-B 4 (refusée : A, B et C sont déjà reliés, elle ferait le cycle A-B-C), B-D 5 (gardée). On a 5 = 6 − 1 arêtes, on s’arrête. Poids total : 1 + 2 + 2 + 3 + 5 = 13. (2) m = 3, i = 10 : feuilles = 2 × 10 + 1 = 21, sommets = 3 × 10 + 1 = 31 (= 10 + 21).',
          en: '(1) Order: B-C 1 (kept), A-C 2 (kept), D-E 2 (kept), E-F 3 (kept), A-B 4 (refused: A, B and C are already linked, it would make the cycle A-B-C), B-D 5 (kept). That is 5 = 6 − 1 edges, so stop. Total weight: 1 + 2 + 2 + 3 + 5 = 13. (2) m = 3, i = 10: leaves = 2 × 10 + 1 = 21, vertices = 3 × 10 + 1 = 31 (= 10 + 21).',
          tr: '(1) Sıra: B-C 1 (alınır), A-C 2 (alınır), D-E 2 (alınır), E-F 3 (alınır), A-B 4 (reddedilir: A, B ve C zaten bağlı, A-B-C döngüsünü oluştururdu), B-D 5 (alınır). 5 = 6 − 1 kenar oldu, durulur. Toplam ağırlık: 1 + 2 + 2 + 3 + 5 = 13. (2) m = 3, i = 10: yaprak = 2 × 10 + 1 = 21, düğüm = 3 × 10 + 1 = 31 (= 10 + 21).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien d’arêtes a un arbre à 50 sommets ?',
        en: 'How many edges does a 50-vertex tree have?',
        tr: '50 düğümlü bir ağacın kaç kenarı vardır?',
      },
      options: { fr: ['49', '50', '100'], en: ['49', '50', '100'], tr: ['49', '50', '100'] },
      answerIndex: 0,
      explanation: {
        fr: 'Un arbre à n sommets a toujours n − 1 arêtes : une de plus créerait un cycle, une de moins le rendrait non connexe.',
        en: 'A tree with n vertices always has n − 1 edges: one more would create a cycle, one fewer would disconnect it.',
        tr: 'n düğümlü bir ağacın her zaman n − 1 kenarı vardır: bir fazlası döngü oluşturur, bir eksiği bağlantıyı koparır.',
      },
    },
  },
  {
    id: 'discrete-w14-probability',
    week: 14,
    title: {
      fr: 'Probabilités discrètes et révision du final',
      en: 'Discrete probability and final review',
      tr: 'Ayrık olasılık ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Quand tous les résultats sont équiprobables, P(E) = |E| / |Ω| : on compte les cas favorables et les cas possibles avec les outils du dénombrement. P(Ē) = 1 − P(E). Probabilité conditionnelle : P(A | B) = P(A ∩ B) / P(B). Deux événements sont indépendants si P(A ∩ B) = P(A) · P(B). L’espérance E(X) = Σ x · P(X = x) est la valeur moyenne attendue.',
          en: 'When every outcome is equally likely, P(E) = |E| / |Ω|: count favorable and possible outcomes with the counting tools. P(Ē) = 1 − P(E). Conditional probability: P(A | B) = P(A ∩ B) / P(B). Two events are independent if P(A ∩ B) = P(A) · P(B). The expected value E(X) = Σ x · P(X = x) is the mean value to expect.',
          tr: 'Tüm sonuçlar eşit olasılıklıysa P(E) = |E| / |Ω|: istenen ve olası durumlar sayma araçlarıyla sayılır. P(Ē) = 1 − P(E). Koşullu olasılık: P(A | B) = P(A ∩ B) / P(B). P(A ∩ B) = P(A) · P(B) ise iki olay bağımsızdır. Beklenen değer E(X) = Σ x · P(X = x), beklenen ortalama değerdir.',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Récurrences : équation caractéristique, α et β, Hanoï, Fibonacci\n✔ Divisibilité, Euclide, Bézout, congruences, puissances mod m, inverse\n✔ Relations : réflexive, symétrique, antisymétrique, transitive\n✔ Équivalence (classes) et ordre partiel (Hasse)\n✔ Graphes : degrés, poignées de main, Kₙ, Kₘ,ₙ, connexité\n✔ Euler (degrés pairs), Hamilton, Dijkstra\n✔ Arbres : n − 1 arêtes, arbres m-aires, Kruskal, Prim\n✔ Probabilités : P(E) = |E|/|Ω|, complémentaire, conditionnelle, espérance',
          en: '✔ Recurrences: characteristic equation, α and β, Hanoi, Fibonacci\n✔ Divisibility, Euclid, Bézout, congruences, powers mod m, inverse\n✔ Relations: reflexive, symmetric, antisymmetric, transitive\n✔ Equivalence (classes) and partial order (Hasse)\n✔ Graphs: degrees, handshaking, Kₙ, Kₘ,ₙ, connectivity\n✔ Euler (even degrees), Hamilton, Dijkstra\n✔ Trees: n − 1 edges, m-ary trees, Kruskal, Prim\n✔ Probability: P(E) = |E|/|Ω|, complement, conditional, expected value',
          tr: '✔ Yinelemeler: karakteristik denklem, α ve β, Hanoi, Fibonacci\n✔ Bölünebilme, Öklid, Bézout, denklikler, mod m kuvvetler, ters\n✔ Bağıntılar: yansıyan, simetrik, ters simetrik, geçişken\n✔ Denklik (sınıflar) ve kısmi sıralama (Hasse)\n✔ Graflar: dereceler, el sıkışma, Kₙ, Kₘ,ₙ, bağlantılılık\n✔ Euler (çift dereceler), Hamilton, Dijkstra\n✔ Ağaçlar: n − 1 kenar, m’li ağaçlar, Kruskal, Prim\n✔ Olasılık: P(E) = |E|/|Ω|, tümleyen, koşullu, beklenen değer',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'On lance des dés équilibrés. (1) Probabilité que la somme de deux dés fasse 7 ? (2) Probabilité d’obtenir au moins un 6 en 4 lancers ? (3) Sachant que le premier dé est pair, probabilité que la somme fasse 8 ? (4) Espérance d’un seul dé ?',
          en: 'Fair dice are rolled. (1) Probability that two dice add up to 7? (2) Probability of at least one 6 in 4 rolls? (3) Given that the first die is even, probability that the sum is 8? (4) Expected value of a single die?',
          tr: 'Hilesiz zarlar atılıyor. (1) İki zarın toplamının 7 olma olasılığı? (2) 4 atışta en az bir 6 gelme olasılığı? (3) İlk zarın çift olduğu bilindiğine göre toplamın 8 olma olasılığı? (4) Tek bir zarın beklenen değeri?',
        },
        solution: {
          fr: '(1) 36 résultats ; somme 7 : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), soit 6/36 = 1/6. (2) Complémentaire : aucun 6 en 4 lancers, (5/6)⁴ = 625/1296. Au moins un 6 : 1 − 625/1296 = 671/1296 ≈ 0,518. (3) Premier dé pair : 18 résultats ; parmi eux, somme 8 : (2,6), (4,4), (6,2), soit 3/18 = 1/6. (4) (1 + 2 + 3 + 4 + 5 + 6)/6 = 21/6 = 3,5.',
          en: '(1) 36 outcomes; sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), so 6/36 = 1/6. (2) Complement: no 6 in 4 rolls, (5/6)⁴ = 625/1296. At least one 6: 1 − 625/1296 = 671/1296 ≈ 0.518. (3) First die even: 18 outcomes; among them, sum 8: (2,6), (4,4), (6,2), so 3/18 = 1/6. (4) (1 + 2 + 3 + 4 + 5 + 6)/6 = 21/6 = 3.5.',
          tr: '(1) 36 sonuç; toplam 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), yani 6/36 = 1/6. (2) Tümleyen: 4 atışta hiç 6 yok, (5/6)⁴ = 625/1296. En az bir 6: 1 − 625/1296 = 671/1296 ≈ 0,518. (3) İlk zar çift: 18 sonuç; bunlardan toplamı 8 olanlar: (2,6), (4,4), (6,2), yani 3/18 = 1/6. (4) (1 + 2 + 3 + 4 + 5 + 6)/6 = 21/6 = 3,5.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'On tire une carte dans un jeu de 52 cartes. Quelle est la probabilité d’obtenir un as ?',
        en: 'A card is drawn from a 52-card deck. What is the probability of an ace?',
        tr: '52’lik bir desteden bir kart çekiliyor. As gelme olasılığı nedir?',
      },
      options: { fr: ['1/52', '1/13', '1/4'], en: ['1/52', '1/13', '1/4'], tr: ['1/52', '1/13', '1/4'] },
      answerIndex: 1,
      explanation: {
        fr: 'Il y a 4 as sur 52 cartes : 4/52 = 1/13.',
        en: 'There are 4 aces among 52 cards: 4/52 = 1/13.',
        tr: '52 kartta 4 as vardır: 4/52 = 1/13.',
      },
    },
  },
];
