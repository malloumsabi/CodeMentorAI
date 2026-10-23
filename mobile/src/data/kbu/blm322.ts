/**
 * BLM322 Otomata Teorisi (Automata Theory), 14 weeks following the KBU course contents:
 * weeks 1–7 prepare the midterm (regular languages), weeks 8–14 the final
 * (context-free languages, pushdown automata, Turing machines, undecidability).
 */

import type { LessonSource } from '@/data/lessons';

export const blm322Lessons: LessonSource[] = [
  {
    id: 'auto-w01-languages',
    week: 1,
    title: { fr: 'Alphabets, mots et langages', en: 'Alphabets, strings and languages', tr: 'Alfabeler, diziler ve diller' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La théorie des automates étudie des machines abstraites et ce qu’elles peuvent calculer. Tout commence par trois notions : l’alphabet, le mot et le langage.',
          en: 'Automata theory studies abstract machines and what they can compute. Everything starts with three notions: the alphabet, the string and the language.',
          tr: 'Otomata teorisi soyut makineleri ve bu makinelerin neyi hesaplayabildiğini inceler. Her şey üç kavramla başlar: alfabe, dizi (kelime) ve dil.',
        },
      },
      { type: 'heading', text: { fr: 'Définitions', en: 'Definitions', tr: 'Tanımlar' } },
      {
        type: 'text',
        text: {
          fr: 'Un alphabet Σ est un ensemble fini et non vide de symboles. Un mot (string) est une suite finie de symboles de Σ ; |w| est sa longueur. Le mot vide ε a une longueur 0. Σ* est l’ensemble de tous les mots sur Σ, y compris ε. Un langage est un sous-ensemble de Σ*.',
          en: 'An alphabet Σ is a finite, non-empty set of symbols. A string (word) is a finite sequence of symbols of Σ; |w| is its length. The empty string ε has length 0. Σ* is the set of all strings over Σ, including ε. A language is a subset of Σ*.',
          tr: 'Alfabe Σ, sonlu ve boş olmayan bir semboller kümesidir. Dizi (kelime, string), Σ’daki sembollerin sonlu bir sıralamasıdır; |w| uzunluğudur. Boş dizi ε’nin uzunluğu 0’dır. Σ*, ε dahil Σ üzerindeki tüm dizilerin kümesidir. Dil, Σ*’ın bir alt kümesidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Σ = {a, b}\nw = abba        |w| = 4\nε               |ε| = 0\nΣ* = {ε, a, b, aa, ab, ba, bb, aaa, …}\nL  = {w ∈ Σ* | w commence par a} = {a, aa, ab, aaa, …}',
          en: 'Σ = {a, b}\nw = abba        |w| = 4\nε               |ε| = 0\nΣ* = {ε, a, b, aa, ab, ba, bb, aaa, …}\nL  = {w ∈ Σ* | w starts with a} = {a, aa, ab, aaa, …}',
          tr: 'Σ = {a, b}\nw = abba        |w| = 4\nε               |ε| = 0\nΣ* = {ε, a, b, aa, ab, ba, bb, aaa, …}\nL  = {w ∈ Σ* | w, a ile başlar} = {a, aa, ab, aaa, …}',
        },
      },
      { type: 'heading', text: { fr: 'Opérations', en: 'Operations', tr: 'İşlemler' } },
      {
        type: 'text',
        text: {
          fr: 'Sur les mots : la concaténation xy (mettre bout à bout), la puissance xⁿ et le miroir x^R. Sur les langages : l’union, la concaténation L1L2 (un mot de L1 suivi d’un mot de L2) et l’étoile de Kleene L* = L⁰ ∪ L¹ ∪ L² ∪ …, qui contient toujours ε. On note aussi L⁺ = LL*.',
          en: 'On strings: concatenation xy (putting them end to end), the power xⁿ and the reverse x^R. On languages: union, concatenation L1L2 (a string of L1 followed by a string of L2) and the Kleene star L* = L⁰ ∪ L¹ ∪ L² ∪ …, which always contains ε. We also write L⁺ = LL*.',
          tr: 'Diziler üzerinde: birleştirme xy (uç uca ekleme), kuvvet xⁿ ve ters çevirme x^R. Diller üzerinde: birleşim, birleştirme L1L2 (L1’den bir dizi ardından L2’den bir dizi) ve her zaman ε’yi içeren Kleene yıldızı L* = L⁰ ∪ L¹ ∪ L² ∪ … Ayrıca L⁺ = LL* yazılır.',
        },
      },
      {
        type: 'code',
        code: 'x = ab, y = ba\nxy = abba      x² = abab      x^R = ba\n\nL1 = {a, b},  L2 = {c}\nL1 ∪ L2 = {a, b, c}\nL1L2    = {ac, bc}\nL2*     = {ε, c, cc, ccc, …}',
      },
      {
        type: 'exercise',
        question: {
          fr: 'Σ = {0, 1} et L = {w ∈ Σ* | w contient exactement un 1}. Donne tous les mots de L de longueur au plus 3.',
          en: 'Σ = {0, 1} and L = {w ∈ Σ* | w contains exactly one 1}. List every string of L of length at most 3.',
          tr: 'Σ = {0, 1} ve L = {w ∈ Σ* | w tam olarak bir tane 1 içerir}. L’nin uzunluğu en fazla 3 olan tüm dizilerini yaz.',
        },
        solution: {
          fr: 'On classe par longueur. Longueur 0 : ε ne contient pas de 1, il n’est pas dans L. Longueur 1 : 1. Longueur 2 : 01 et 10. Longueur 3 : 001, 010 et 100. Réponse : {1, 01, 10, 001, 010, 100}, soit 6 mots.',
          en: 'Sort by length. Length 0: ε has no 1, so it is not in L. Length 1: 1. Length 2: 01 and 10. Length 3: 001, 010 and 100. Answer: {1, 01, 10, 001, 010, 100}, 6 strings.',
          tr: 'Uzunluğa göre sıralayalım. Uzunluk 0: ε hiç 1 içermez, L’de değildir. Uzunluk 1: 1. Uzunluk 2: 01 ve 10. Uzunluk 3: 001, 010 ve 100. Cevap: {1, 01, 10, 001, 010, 100}, yani 6 dizi.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien y a-t-il de mots de longueur 3 sur l’alphabet Σ = {a, b} ?',
        en: 'How many strings of length 3 are there over the alphabet Σ = {a, b}?',
        tr: 'Σ = {a, b} alfabesi üzerinde uzunluğu 3 olan kaç dizi vardır?',
      },
      options: { fr: ['3', '6', '8'], en: ['3', '6', '8'], tr: ['3', '6', '8'] },
      answerIndex: 2,
      explanation: {
        fr: 'Chaque position peut prendre 2 symboles : 2 × 2 × 2 = 2³ = 8 mots (aaa, aab, …, bbb).',
        en: 'Each position can take 2 symbols: 2 × 2 × 2 = 2³ = 8 strings (aaa, aab, …, bbb).',
        tr: 'Her konum 2 sembolden birini alabilir: 2 × 2 × 2 = 2³ = 8 dizi (aaa, aab, …, bbb).',
      },
    },
  },
  {
    id: 'auto-w02-dfa',
    week: 2,
    title: {
      fr: 'Automate fini déterministe (DFA)',
      en: 'Deterministic finite automaton (DFA)',
      tr: 'Deterministik sonlu otomat (DFA)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un DFA lit le mot symbole par symbole. Dans chaque état, il y a exactement une transition pour chaque symbole. À la fin du mot, le mot est accepté si l’automate est dans un état final.',
          en: 'A DFA reads the string one symbol at a time. In each state there is exactly one transition for each symbol. At the end of the string, it is accepted if the automaton is in a final state.',
          tr: 'DFA diziyi sembol sembol okur. Her durumda her sembol için tam olarak bir geçiş vardır. Dizinin sonunda otomat bir kabul durumundaysa dizi kabul edilir.',
        },
      },
      { type: 'heading', text: { fr: 'Définition formelle', en: 'Formal definition', tr: 'Biçimsel tanım' } },
      {
        type: 'text',
        text: {
          fr: 'M = (Q, Σ, δ, q0, F) : Q est l’ensemble fini des états, Σ l’alphabet, δ : Q × Σ → Q la fonction de transition, q0 l’état initial et F ⊆ Q l’ensemble des états finaux (acceptants).',
          en: 'M = (Q, Σ, δ, q0, F): Q is the finite set of states, Σ the alphabet, δ: Q × Σ → Q the transition function, q0 the start state and F ⊆ Q the set of final (accepting) states.',
          tr: 'M = (Q, Σ, δ, q0, F): Q sonlu durumlar kümesi, Σ alfabe, δ: Q × Σ → Q geçiş fonksiyonu, q0 başlangıç durumu ve F ⊆ Q kabul (son) durumlarının kümesidir.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Exemple : les mots qui finissent par ab', en: 'Example: strings ending with ab', tr: 'Örnek: ab ile biten diziler' },
      },
      {
        type: 'code',
        code: {
          fr: 'Σ = {a, b}\n\n        |  a  |  b\n→ q0    |  q1 |  q0\n  q1    |  q1 |  q2\n* q2    |  q1 |  q0\n\n→ = état initial    * = état final',
          en: 'Σ = {a, b}\n\n        |  a  |  b\n→ q0    |  q1 |  q0\n  q1    |  q1 |  q2\n* q2    |  q1 |  q0\n\n→ = start state    * = final state',
          tr: 'Σ = {a, b}\n\n        |  a  |  b\n→ q0    |  q1 |  q0\n  q1    |  q1 |  q2\n* q2    |  q1 |  q0\n\n→ = başlangıç durumu    * = kabul durumu',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Chaque état retient une information : q0 = « rien d’utile », q1 = « je viens de lire a », q2 = « je viens de lire ab ». Pour aab : q0 →a q1 →a q1 →b q2, accepté. Pour aba : q0 →a q1 →b q2 →a q1, refusé.',
          en: 'Each state remembers something: q0 = “nothing useful”, q1 = “I just read a”, q2 = “I just read ab”. For aab: q0 →a q1 →a q1 →b q2, accepted. For aba: q0 →a q1 →b q2 →a q1, rejected.',
          tr: 'Her durum bir bilgiyi hatırlar: q0 = “işe yarar bir şey yok”, q1 = “az önce a okudum”, q2 = “az önce ab okudum”. aab için: q0 →a q1 →a q1 →b q2, kabul. aba için: q0 →a q1 →b q2 →a q1, ret.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Construis un DFA sur Σ = {0, 1} qui accepte les mots contenant un nombre pair de 1.',
          en: 'Build a DFA over Σ = {0, 1} that accepts the strings with an even number of 1s.',
          tr: 'Σ = {0, 1} üzerinde çift sayıda 1 içeren dizileri kabul eden bir DFA tasarla.',
        },
        solution: {
          fr: 'Il suffit de retenir la parité. Deux états : P (pair) et I (impair). P est initial (0 est pair) et final. Transitions : δ(P, 0) = P, δ(P, 1) = I, δ(I, 0) = I, δ(I, 1) = P. Un 0 ne change pas la parité, un 1 l’inverse. Exemple : 1010 → P, I, I, P, P : accepté.',
          en: 'We only need to remember the parity. Two states: E (even) and O (odd). E is the start state (0 is even) and final. Transitions: δ(E, 0) = E, δ(E, 1) = O, δ(O, 0) = O, δ(O, 1) = E. A 0 keeps the parity, a 1 flips it. Example: 1010 → E, O, O, E, E: accepted.',
          tr: 'Sadece tekliği/çiftliği hatırlamak yeterli. İki durum: Ç (çift) ve T (tek). Ç başlangıç (0 çifttir) ve kabul durumudur. Geçişler: δ(Ç, 0) = Ç, δ(Ç, 1) = T, δ(T, 0) = T, δ(T, 1) = Ç. 0 paritesi değiştirmez, 1 tersine çevirir. Örnek: 1010 → Ç, T, T, Ç, Ç: kabul.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Avec le DFA de l’exemple, dans quel état est-on après avoir lu abb ?',
        en: 'With the DFA of the example, which state are we in after reading abb?',
        tr: 'Örnekteki DFA ile abb okunduktan sonra hangi durumdayız?',
      },
      code: '        |  a  |  b\n→ q0    |  q1 |  q0\n  q1    |  q1 |  q2\n* q2    |  q1 |  q0',
      options: { fr: ['q0', 'q1', 'q2'], en: ['q0', 'q1', 'q2'], tr: ['q0', 'q1', 'q2'] },
      answerIndex: 0,
      explanation: {
        fr: 'q0 →a q1 →b q2 →b q0. Le mot finit par bb, pas par ab : il est refusé.',
        en: 'q0 →a q1 →b q2 →b q0. The string ends with bb, not ab: it is rejected.',
        tr: 'q0 →a q1 →b q2 →b q0. Dizi ab ile değil bb ile biter: reddedilir.',
      },
    },
  },
  {
    id: 'auto-w03-nfa',
    week: 3,
    title: {
      fr: 'Automate non déterministe (NFA, ε-NFA)',
      en: 'Nondeterministic automaton (NFA, ε-NFA)',
      tr: 'Deterministik olmayan otomat (NFA, ε-NFA)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Dans un NFA, un état peut avoir 0, 1 ou plusieurs transitions pour le même symbole. Un mot est accepté s’il existe au moins un chemin qui se termine dans un état final.',
          en: 'In an NFA, a state can have 0, 1 or several transitions for the same symbol. A string is accepted if at least one path ends in a final state.',
          tr: 'NFA’da bir durumun aynı sembol için 0, 1 veya birden fazla geçişi olabilir. En az bir yol kabul durumunda bitiyorsa dizi kabul edilir.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Formellement, seule la fonction de transition change : δ : Q × (Σ ∪ {ε}) → P(Q). Elle renvoie un ensemble d’états, éventuellement vide (∅).',
          en: 'Formally, only the transition function changes: δ: Q × (Σ ∪ {ε}) → P(Q). It returns a set of states, possibly empty (∅).',
          tr: 'Biçimsel olarak yalnızca geçiş fonksiyonu değişir: δ: Q × (Σ ∪ {ε}) → P(Q). Bir durumlar kümesi döndürür, bu küme boş (∅) olabilir.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Exemple : les mots qui finissent par ab', en: 'Example: strings ending with ab', tr: 'Örnek: ab ile biten diziler' },
      },
      { type: 'code', code: '        |    a       |   b\n→ p0    | {p0, p1}   | {p0}\n  p1    |    ∅       | {p2}\n* p2    |    ∅       |  ∅' },
      {
        type: 'text',
        text: {
          fr: 'Le NFA « devine » où commence le ab final. Pour suivre un mot, on garde l’ensemble des états possibles. Pour aab : {p0} →a {p0, p1} →a {p0, p1} →b {p0, p2}. L’ensemble contient p2, donc le mot est accepté.',
          en: 'The NFA “guesses” where the final ab starts. To follow a string, keep the set of possible states. For aab: {p0} →a {p0, p1} →a {p0, p1} →b {p0, p2}. The set contains p2, so the string is accepted.',
          tr: 'NFA, sondaki ab’nin nerede başladığını “tahmin eder”. Bir diziyi izlemek için olası durumların kümesi tutulur. aab için: {p0} →a {p0, p1} →a {p0, p1} →b {p0, p2}. Küme p2’yi içerdiği için dizi kabul edilir.',
        },
      },
      { type: 'heading', text: { fr: 'Les ε-transitions', en: 'ε-transitions', tr: 'ε-geçişleri' } },
      {
        type: 'text',
        text: {
          fr: 'Un ε-NFA peut changer d’état sans lire de symbole. L’ε-fermeture d’un état q, notée ECLOSE(q), est l’ensemble des états atteignables depuis q avec seulement des ε-transitions, q compris. Les NFA, ε-NFA et DFA reconnaissent exactement les mêmes langages : les langages réguliers.',
          en: 'An ε-NFA can change state without reading a symbol. The ε-closure of a state q, written ECLOSE(q), is the set of states reachable from q using only ε-transitions, q included. NFAs, ε-NFAs and DFAs recognize exactly the same languages: the regular languages.',
          tr: 'ε-NFA sembol okumadan durum değiştirebilir. Bir q durumunun ε-kapanışı ECLOSE(q), q dahil, yalnızca ε-geçişleriyle q’dan ulaşılabilen durumların kümesidir. NFA, ε-NFA ve DFA tam olarak aynı dilleri tanır: düzenli dilleri.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'NFA sur {0, 1} : δ(q0, 0) = {q0}, δ(q0, 1) = {q0, q1}, δ(q1, 0) = δ(q1, 1) = {q2}, q2 final sans transition. Le mot 110 est-il accepté ? Quel est le langage reconnu ?',
          en: 'NFA over {0, 1}: δ(q0, 0) = {q0}, δ(q0, 1) = {q0, q1}, δ(q1, 0) = δ(q1, 1) = {q2}, q2 final with no transition. Is 110 accepted? Which language does it recognize?',
          tr: '{0, 1} üzerinde NFA: δ(q0, 0) = {q0}, δ(q0, 1) = {q0, q1}, δ(q1, 0) = δ(q1, 1) = {q2}, q2 geçişi olmayan kabul durumu. 110 kabul edilir mi? Hangi dili tanır?',
        },
        solution: {
          fr: 'On suit les ensembles : {q0} →1 {q0, q1} →1 {q0, q1, q2} →0 {q0, q2}. L’ensemble final contient q2 : 110 est accepté. Pour arriver en q2, il faut lire un 1 (q0 → q1) puis exactement un dernier symbole : le langage est celui des mots dont l’avant-dernier symbole est 1.',
          en: 'Follow the sets: {q0} →1 {q0, q1} →1 {q0, q1, q2} →0 {q0, q2}. The last set contains q2: 110 is accepted. To reach q2 you read a 1 (q0 → q1) then exactly one last symbol: the language is the strings whose second-to-last symbol is 1.',
          tr: 'Kümeleri izleyelim: {q0} →1 {q0, q1} →1 {q0, q1, q2} →0 {q0, q2}. Son küme q2’yi içerir: 110 kabul edilir. q2’ye ulaşmak için bir 1 okunur (q0 → q1), ardından tam olarak bir son sembol: dil, sondan ikinci sembolü 1 olan dizilerdir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Avec le NFA de l’exemple, quel est l’ensemble des états après avoir lu ba ?',
        en: 'With the NFA of the example, what is the set of states after reading ba?',
        tr: 'Örnekteki NFA ile ba okunduktan sonra durumlar kümesi nedir?',
      },
      options: {
        fr: ['{p0}', '{p0, p1}', '{p2}'],
        en: ['{p0}', '{p0, p1}', '{p2}'],
        tr: ['{p0}', '{p0, p1}', '{p2}'],
      },
      answerIndex: 1,
      explanation: {
        fr: '{p0} →b {p0} →a {p0, p1}. p2 n’est pas atteint : ba est refusé.',
        en: '{p0} →b {p0} →a {p0, p1}. p2 is not reached: ba is rejected.',
        tr: '{p0} →b {p0} →a {p0, p1}. p2’ye ulaşılmaz: ba reddedilir.',
      },
    },
  },
  {
    id: 'auto-w04-subset',
    week: 4,
    title: {
      fr: 'Conversion NFA → DFA',
      en: 'Converting an NFA to a DFA',
      tr: 'NFA’dan DFA’ya dönüşüm',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Tout NFA a un DFA équivalent (théorème de Rabin et Scott). L’idée : chaque état du DFA est un ensemble d’états du NFA. Avec n états dans le NFA, le DFA a au plus 2ⁿ états, souvent beaucoup moins.',
          en: 'Every NFA has an equivalent DFA (Rabin–Scott theorem). The idea: each DFA state is a set of NFA states. With n NFA states, the DFA has at most 2ⁿ states, often far fewer.',
          tr: 'Her NFA’nın eşdeğer bir DFA’sı vardır (Rabin–Scott teoremi). Fikir: DFA’nın her durumu, NFA durumlarından oluşan bir kümedir. NFA’da n durum varsa DFA’da en fazla 2ⁿ durum olur, genellikle çok daha az.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'La méthode des sous-ensembles', en: 'The subset construction', tr: 'Alt küme yöntemi' },
      },
      {
        type: 'code',
        code: {
          fr: '1. État initial du DFA = ECLOSE({q0})\n2. Pour chaque ensemble S et chaque symbole a :\n   S --a--> ECLOSE( union des δ(q, a) pour q ∈ S )\n3. Recommencer avec chaque nouvel ensemble\n4. États finaux = ensembles qui contiennent un état final du NFA',
          en: '1. DFA start state = ECLOSE({q0})\n2. For each set S and each symbol a:\n   S --a--> ECLOSE( union of δ(q, a) for q ∈ S )\n3. Repeat with every new set\n4. Final states = sets containing an NFA final state',
          tr: '1. DFA başlangıç durumu = ECLOSE({q0})\n2. Her S kümesi ve her a sembolü için:\n   S --a--> ECLOSE( q ∈ S için δ(q, a) birleşimi )\n3. Her yeni küme için tekrarla\n4. Kabul durumları = NFA kabul durumu içeren kümeler',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Exemple : le NFA de la semaine 3', en: 'Example: the NFA of week 3', tr: 'Örnek: 3. haftanın NFA’sı' },
      },
      {
        type: 'code',
        code: '              |    a       |    b\n→ {p0}        | {p0, p1}   | {p0}\n  {p0, p1}    | {p0, p1}   | {p0, p2}\n* {p0, p2}    | {p0, p1}   | {p0}',
      },
      {
        type: 'text',
        text: {
          fr: 'Par exemple {p0, p1} →b : p0 donne {p0} et p1 donne {p2}, d’où {p0, p2}. Seuls 3 ensembles sur 2³ = 8 sont atteignables. On retrouve exactement le DFA de la semaine 2 : {p0} = q0, {p0, p1} = q1, {p0, p2} = q2.',
          en: 'For example {p0, p1} →b: p0 gives {p0} and p1 gives {p2}, hence {p0, p2}. Only 3 sets out of 2³ = 8 are reachable. We get exactly the DFA of week 2: {p0} = q0, {p0, p1} = q1, {p0, p2} = q2.',
          tr: 'Örneğin {p0, p1} →b: p0 {p0} verir, p1 {p2} verir, sonuç {p0, p2}. 2³ = 8 kümeden yalnızca 3’üne ulaşılabilir. 2. haftanın DFA’sını aynen elde ederiz: {p0} = q0, {p0, p1} = q1, {p0, p2} = q2.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Convertis en DFA le NFA de l’exercice de la semaine 3 : δ(q0, 0) = {q0}, δ(q0, 1) = {q0, q1}, δ(q1, 0) = δ(q1, 1) = {q2}, q2 final.',
          en: 'Convert to a DFA the NFA from the week 3 exercise: δ(q0, 0) = {q0}, δ(q0, 1) = {q0, q1}, δ(q1, 0) = δ(q1, 1) = {q2}, q2 final.',
          tr: '3. haftanın alıştırmasındaki NFA’yı DFA’ya dönüştür: δ(q0, 0) = {q0}, δ(q0, 1) = {q0, q1}, δ(q1, 0) = δ(q1, 1) = {q2}, q2 kabul.',
        },
        solution: {
          fr: 'A = {q0} : 0 → A, 1 → B = {q0, q1}. B : 0 → C = {q0, q2}, 1 → D = {q0, q1, q2}. C : 0 → A, 1 → B. D : 0 → C, 1 → D. Aucun nouvel ensemble : le DFA a 4 états A, B, C, D. C et D contiennent q2 : ce sont les états finaux.',
          en: 'A = {q0}: 0 → A, 1 → B = {q0, q1}. B: 0 → C = {q0, q2}, 1 → D = {q0, q1, q2}. C: 0 → A, 1 → B. D: 0 → C, 1 → D. No new set: the DFA has 4 states A, B, C, D. C and D contain q2: they are the final states.',
          tr: 'A = {q0}: 0 → A, 1 → B = {q0, q1}. B: 0 → C = {q0, q2}, 1 → D = {q0, q1, q2}. C: 0 → A, 1 → B. D: 0 → C, 1 → D. Yeni küme yok: DFA’nın 4 durumu vardır: A, B, C, D. C ve D, q2’yi içerdiği için kabul durumlarıdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Un NFA a 3 états. Combien d’états au maximum peut avoir le DFA obtenu par la méthode des sous-ensembles ?',
        en: 'An NFA has 3 states. At most how many states can the DFA from the subset construction have?',
        tr: 'Bir NFA’nın 3 durumu var. Alt küme yöntemiyle elde edilen DFA en fazla kaç duruma sahip olabilir?',
      },
      options: { fr: ['3', '6', '8'], en: ['3', '6', '8'], tr: ['3', '6', '8'] },
      answerIndex: 2,
      explanation: {
        fr: 'Chaque état du DFA est un sous-ensemble des 3 états : il y en a 2³ = 8 (ensemble vide compris).',
        en: 'Each DFA state is a subset of the 3 states: there are 2³ = 8 of them (the empty set included).',
        tr: 'DFA’nın her durumu 3 durumun bir alt kümesidir: 2³ = 8 tane vardır (boş küme dahil).',
      },
    },
  },
  {
    id: 'auto-w05-regex',
    week: 5,
    title: { fr: 'Expressions régulières', en: 'Regular expressions', tr: 'Düzenli ifadeler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une expression régulière décrit un langage régulier avec trois opérations : l’union r + s (aussi notée r | s), la concaténation rs et l’étoile r*. On part de ∅, ε et des symboles. Priorité : d’abord *, puis la concaténation, puis +.',
          en: 'A regular expression describes a regular language with three operations: union r + s (also written r | s), concatenation rs and star r*. You start from ∅, ε and the symbols. Precedence: * first, then concatenation, then +.',
          tr: 'Düzenli ifade, düzenli bir dili üç işlemle tanımlar: birleşim r + s (r | s olarak da yazılır), birleştirme rs ve yıldız r*. ∅, ε ve sembollerden başlanır. Öncelik: önce *, sonra birleştirme, sonra +.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '(a+b)*          tous les mots sur {a, b}\n(a+b)*ab        les mots qui finissent par ab\na*b*            des a puis des b : ε, aab, bbb…\n(0+1)*1(0+1)    avant-dernier symbole = 1\n0*(10*10*)*     nombre pair de 1',
          en: '(a+b)*          every string over {a, b}\n(a+b)*ab        strings ending with ab\na*b*            some a then some b: ε, aab, bbb…\n(0+1)*1(0+1)    second-to-last symbol = 1\n0*(10*10*)*     even number of 1s',
          tr: '(a+b)*          {a, b} üzerindeki tüm diziler\n(a+b)*ab        ab ile biten diziler\na*b*            önce a’lar sonra b’ler: ε, aab, bbb…\n(0+1)*1(0+1)    sondan ikinci sembol = 1\n0*(10*10*)*     çift sayıda 1',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Théorème de Kleene', en: 'Kleene’s theorem', tr: 'Kleene teoremi' },
      },
      {
        type: 'text',
        text: {
          fr: 'Un langage est décrit par une expression régulière si et seulement s’il est reconnu par un automate fini. Expression → automate : la construction de Thompson assemble de petits ε-NFA. Automate → expression : on élimine les états un par un en mettant des expressions sur les flèches.',
          en: 'A language is described by a regular expression if and only if it is recognized by a finite automaton. Expression → automaton: Thompson’s construction glues small ε-NFAs together. Automaton → expression: eliminate the states one by one, putting expressions on the arrows.',
          tr: 'Bir dil ancak ve ancak sonlu bir otomat tarafından tanınıyorsa düzenli bir ifadeyle tanımlanır. İfade → otomat: Thompson yapısı küçük ε-NFA’ları birleştirir. Otomat → ifade: durumlar tek tek elenir ve oklara ifadeler yazılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Thompson (N(r) = automate de r) :\nr + s : nouvel état initial --ε--> N(r) et --ε--> N(s),\n        les deux finissent --ε--> nouvel état final\nr s   : fin de N(r) --ε--> début de N(s)\nr*    : nouvel initial --ε--> N(r) --ε--> nouveau final,\n        fin de N(r) --ε--> début de N(r), initial --ε--> final',
          en: 'Thompson (N(r) = automaton of r):\nr + s : new start state --ε--> N(r) and --ε--> N(s),\n        both end --ε--> new final state\nr s   : end of N(r) --ε--> start of N(s)\nr*    : new start --ε--> N(r) --ε--> new final,\n        end of N(r) --ε--> start of N(r), start --ε--> final',
          tr: 'Thompson (N(r) = r’nin otomatı):\nr + s : yeni başlangıç --ε--> N(r) ve --ε--> N(s),\n        ikisinin sonu --ε--> yeni kabul durumu\nr s   : N(r) sonu --ε--> N(s) başı\nr*    : yeni başlangıç --ε--> N(r) --ε--> yeni kabul,\n        N(r) sonu --ε--> N(r) başı, başlangıç --ε--> kabul',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Sur Σ = {a, b}, écris une expression régulière pour : (1) les mots qui contiennent aa ; (2) les mots qui commencent et finissent par a.',
          en: 'Over Σ = {a, b}, write a regular expression for: (1) the strings that contain aa; (2) the strings that start and end with a.',
          tr: 'Σ = {a, b} üzerinde şu diller için düzenli ifade yaz: (1) aa içeren diziler; (2) a ile başlayıp a ile biten diziler.',
        },
        solution: {
          fr: '(1) (a+b)*aa(a+b)* : n’importe quoi, puis aa, puis n’importe quoi. (2) a + a(a+b)*a : soit le mot a tout seul, soit un a, n’importe quoi, puis un a. Attention à ne pas oublier le mot a, qui commence et finit par a.',
          en: '(1) (a+b)*aa(a+b)*: anything, then aa, then anything. (2) a + a(a+b)*a: either the string a alone, or an a, anything, then an a. Don’t forget the string a, which starts and ends with a.',
          tr: '(1) (a+b)*aa(a+b)*: herhangi bir şey, sonra aa, sonra herhangi bir şey. (2) a + a(a+b)*a: ya tek başına a dizisi ya da bir a, herhangi bir şey ve bir a. a ile başlayıp a ile biten a dizisini unutma.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel mot n’appartient PAS au langage de a*b* ?',
        en: 'Which string does NOT belong to the language of a*b*?',
        tr: 'Hangi dizi a*b* dilinde DEĞİLDİR?',
      },
      options: { fr: ['aab', 'b', 'aba'], en: ['aab', 'b', 'aba'], tr: ['aab', 'b', 'aba'] },
      answerIndex: 2,
      explanation: {
        fr: 'a*b* veut dire : tous les a d’abord, puis tous les b. Dans aba, un a vient après un b.',
        en: 'a*b* means: all the a’s first, then all the b’s. In aba, an a comes after a b.',
        tr: 'a*b*, önce tüm a’lar sonra tüm b’ler demektir. aba’da bir a, b’den sonra gelir.',
      },
    },
  },
  {
    id: 'auto-w06-minimization',
    week: 6,
    title: {
      fr: 'Propriétés de clôture et minimisation',
      en: 'Closure properties and minimization',
      tr: 'Kapanış özellikleri ve minimizasyon',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Les langages réguliers sont clos par union, intersection, complément, concaténation, étoile et miroir : appliquer ces opérations à des langages réguliers donne encore un langage régulier.',
          en: 'Regular languages are closed under union, intersection, complement, concatenation, star and reverse: applying these operations to regular languages still gives a regular language.',
          tr: 'Düzenli diller birleşim, kesişim, tümleme, birleştirme, yıldız ve ters çevirme altında kapalıdır: bu işlemleri düzenli dillere uygulamak yine düzenli bir dil verir.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Complément : dans un DFA complet, on échange états finaux et non finaux. Intersection : la construction produit fait tourner les deux DFA en parallèle ; ses états sont des couples (p, q), finaux quand p et q le sont.',
          en: 'Complement: in a complete DFA, swap final and non-final states. Intersection: the product construction runs both DFAs in parallel; its states are pairs (p, q), final when both p and q are.',
          tr: 'Tümleme: tam bir DFA’da kabul olan ve olmayan durumlar yer değiştirir. Kesişim: çarpım yapısı iki DFA’yı paralel çalıştırır; durumları (p, q) çiftleridir ve p ile q’nun ikisi de kabulse kabul durumudur.',
        },
      },
      { type: 'heading', text: { fr: 'Minimiser un DFA', en: 'Minimizing a DFA', tr: 'DFA minimizasyonu' } },
      {
        type: 'text',
        text: {
          fr: 'Deux états sont équivalents si, pour tout mot, ils acceptent ou refusent ensemble. Méthode des partitions : enlever les états inatteignables, partir de {finaux} et {non finaux}, puis séparer un groupe dès que ses états vont dans des groupes différents pour un même symbole. On répète jusqu’à ce que rien ne change ; chaque groupe devient un état.',
          en: 'Two states are equivalent if, for every string, they accept or reject together. Partition method: remove unreachable states, start from {final} and {non-final}, then split a group as soon as its states go to different groups on the same symbol. Repeat until nothing changes; each group becomes one state.',
          tr: 'İki durum, her dizi için birlikte kabul ya da birlikte ret ediyorsa eşdeğerdir. Bölüntü yöntemi: ulaşılamayan durumlar silinir, {kabul} ve {kabul olmayan} gruplarıyla başlanır, aynı sembolde farklı gruplara giden durumlar ayrılır. Hiçbir şey değişmeyene kadar tekrarlanır; her grup tek bir durum olur.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Minimise ce DFA sur {a, b} (A initial, E final).',
          en: 'Minimize this DFA over {a, b} (A start, E final).',
          tr: '{a, b} üzerindeki bu DFA’yı minimize et (A başlangıç, E kabul).',
        },
        code: '        |  a  |  b\n→ A     |  B  |  C\n  B     |  B  |  D\n  C     |  B  |  C\n  D     |  B  |  E\n* E     |  B  |  C',
        solution: {
          fr: 'P0 = {A, B, C, D} {E}. Avec b, D va vers E (final) et les autres non : P1 = {A, B, C} {D} {E}. Avec b, B va vers D alors que A et C restent dans {A, B, C} : P2 = {A, C} {B} {D} {E}. A et C vont tous deux vers B avec a et vers C avec b : plus rien ne change. Le DFA minimal a 4 états : AC, B, D, E. Il reconnaît les mots qui finissent par abb.',
          en: 'P0 = {A, B, C, D} {E}. On b, D goes to E (final) and the others don’t: P1 = {A, B, C} {D} {E}. On b, B goes to D while A and C stay in {A, B, C}: P2 = {A, C} {B} {D} {E}. A and C both go to B on a and to C on b: nothing changes anymore. The minimal DFA has 4 states: AC, B, D, E. It recognizes the strings ending with abb.',
          tr: 'P0 = {A, B, C, D} {E}. b ile D, E’ye (kabul) gider, diğerleri gitmez: P1 = {A, B, C} {D} {E}. b ile B, D’ye giderken A ve C {A, B, C} içinde kalır: P2 = {A, C} {B} {D} {E}. A ve C, a ile B’ye, b ile C’ye gider: artık değişiklik yok. Minimal DFA’nın 4 durumu vardır: AC, B, D, E. abb ile biten dizileri tanır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Comment obtient-on un DFA pour le complément d’un langage reconnu par un DFA complet ?',
        en: 'How do you get a DFA for the complement of a language recognized by a complete DFA?',
        tr: 'Tam bir DFA’nın tanıdığı dilin tümleyeni için DFA nasıl elde edilir?',
      },
      options: {
        fr: ['En inversant le sens des flèches', 'En échangeant états finaux et non finaux', 'En ajoutant une ε-transition'],
        en: ['By reversing every arrow', 'By swapping final and non-final states', 'By adding an ε-transition'],
        tr: ['Tüm okları ters çevirerek', 'Kabul olan ve olmayan durumları değiştirerek', 'Bir ε-geçişi ekleyerek'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Un DFA complet finit toujours dans exactement un état : en échangeant finaux et non finaux, chaque mot accepté devient refusé et inversement.',
        en: 'A complete DFA always ends in exactly one state: swapping final and non-final states turns every accepted string into a rejected one and vice versa.',
        tr: 'Tam bir DFA her zaman tam olarak bir durumda biter: kabul ve kabul olmayan durumlar değişince kabul edilen her dizi reddedilir ve tersi.',
      },
    },
  },
  {
    id: 'auto-w07-pumping',
    week: 7,
    title: {
      fr: 'Lemme de pompage et révision de la vize',
      en: 'Pumping lemma and midterm review',
      tr: 'Pompalama önsavı ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le lemme de pompage sert à prouver qu’un langage n’est PAS régulier. Si L est régulier, il existe p ≥ 1 tel que tout mot w ∈ L avec |w| ≥ p s’écrit w = xyz avec |xy| ≤ p, |y| ≥ 1, et xyⁱz ∈ L pour tout i ≥ 0.',
          en: 'The pumping lemma is used to prove that a language is NOT regular. If L is regular, there is p ≥ 1 such that every string w ∈ L with |w| ≥ p can be written w = xyz with |xy| ≤ p, |y| ≥ 1, and xyⁱz ∈ L for every i ≥ 0.',
          tr: 'Pompalama önsavı bir dilin düzenli OLMADIĞINI kanıtlamak için kullanılır. L düzenliyse, |w| ≥ p olan her w ∈ L dizisi w = xyz şeklinde yazılabilecek bir p ≥ 1 vardır: |xy| ≤ p, |y| ≥ 1 ve her i ≥ 0 için xyⁱz ∈ L.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'On raisonne par l’absurde, comme un jeu : on suppose L régulier, on choisit un mot w bien choisi, le découpage xyz est imposé par l’adversaire (on doit traiter tous les cas), puis on choisit i pour sortir du langage.',
          en: 'Reason by contradiction, like a game: assume L is regular, pick a well-chosen string w, the split xyz is chosen by the opponent (you must handle every case), then pick i to leave the language.',
          tr: 'Olmayana ergi yöntemiyle, bir oyun gibi düşünülür: L’nin düzenli olduğu varsayılır, uygun bir w seçilir, xyz bölmesini rakip seçer (tüm durumlar ele alınmalıdır), sonra dilden çıkaran bir i seçilir.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Exemple : L = {aⁿbⁿ | n ≥ 0}', en: 'Example: L = {aⁿbⁿ | n ≥ 0}', tr: 'Örnek: L = {aⁿbⁿ | n ≥ 0}' },
      },
      {
        type: 'text',
        text: {
          fr: 'Supposons L régulier, de constante p. On prend w = aᵖbᵖ ∈ L. Comme |xy| ≤ p, x et y ne contiennent que des a : y = aᵏ avec k ≥ 1. Alors xy²z = aᵖ⁺ᵏbᵖ a plus de a que de b, donc n’est pas dans L. Contradiction : L n’est pas régulier.',
          en: 'Assume L is regular with constant p. Take w = aᵖbᵖ ∈ L. Since |xy| ≤ p, x and y contain only a’s: y = aᵏ with k ≥ 1. Then xy²z = aᵖ⁺ᵏbᵖ has more a’s than b’s, so it is not in L. Contradiction: L is not regular.',
          tr: 'L’nin p sabitiyle düzenli olduğunu varsayalım. w = aᵖbᵖ ∈ L alalım. |xy| ≤ p olduğundan x ve y yalnızca a içerir: k ≥ 1 olmak üzere y = aᵏ. O zaman xy²z = aᵖ⁺ᵏbᵖ dizisinde b’den fazla a vardır, L’de değildir. Çelişki: L düzenli değildir.',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Définir Σ, Σ*, ε, langage, L*\n✔ Construire un DFA (table) et suivre un mot\n✔ Suivre un NFA avec des ensembles d’états, ε-fermeture\n✔ Convertir un NFA en DFA (sous-ensembles)\n✔ Expression régulière ↔ automate\n✔ Minimiser un DFA (partitions)\n✔ Lemme de pompage : prouver qu’un langage n’est pas régulier',
          en: '✔ Define Σ, Σ*, ε, language, L*\n✔ Build a DFA (table) and follow a string\n✔ Follow an NFA with sets of states, ε-closure\n✔ Convert an NFA to a DFA (subsets)\n✔ Regular expression ↔ automaton\n✔ Minimize a DFA (partitions)\n✔ Pumping lemma: prove a language is not regular',
          tr: '✔ Σ, Σ*, ε, dil, L* tanımları\n✔ DFA tasarlamak (tablo) ve bir diziyi izlemek\n✔ NFA’yı durum kümeleriyle izlemek, ε-kapanışı\n✔ NFA’yı DFA’ya dönüştürmek (alt kümeler)\n✔ Düzenli ifade ↔ otomat\n✔ DFA minimizasyonu (bölüntüler)\n✔ Pompalama önsavı: dilin düzenli olmadığını kanıtlamak',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Prouve que L = {aⁱbʲ | i > j} n’est pas régulier.',
          en: 'Prove that L = {aⁱbʲ | i > j} is not regular.',
          tr: 'L = {aⁱbʲ | i > j} dilinin düzenli olmadığını kanıtla.',
        },
        solution: {
          fr: 'Supposons L régulier, de constante p. On prend w = aᵖ⁺¹bᵖ ∈ L. Comme |xy| ≤ p, y = aᵏ avec k ≥ 1. On « pompe vers le bas » avec i = 0 : xz = aᵖ⁺¹⁻ᵏbᵖ. Comme k ≥ 1, le nombre de a est au plus p, donc il n’est plus strictement plus grand que le nombre de b : xz ∉ L. Contradiction. Astuce : ici, pomper vers le haut (i = 2) ne marche pas, car on ajoute des a.',
          en: 'Assume L is regular with constant p. Take w = aᵖ⁺¹bᵖ ∈ L. Since |xy| ≤ p, y = aᵏ with k ≥ 1. “Pump down” with i = 0: xz = aᵖ⁺¹⁻ᵏbᵖ. As k ≥ 1, there are at most p a’s, no longer strictly more than the b’s: xz ∉ L. Contradiction. Tip: pumping up (i = 2) doesn’t work here, since it adds a’s.',
          tr: 'L’nin p sabitiyle düzenli olduğunu varsayalım. w = aᵖ⁺¹bᵖ ∈ L alalım. |xy| ≤ p olduğundan k ≥ 1 için y = aᵏ. i = 0 ile “aşağı pompalayalım”: xz = aᵖ⁺¹⁻ᵏbᵖ. k ≥ 1 olduğundan a sayısı en fazla p’dir, artık b sayısından kesin büyük değildir: xz ∉ L. Çelişki. İpucu: burada yukarı pompalamak (i = 2) işe yaramaz, çünkü a ekler.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans le lemme de pompage pour les langages réguliers, quelle condition est exigée ?',
        en: 'In the pumping lemma for regular languages, which condition is required?',
        tr: 'Düzenli diller için pompalama önsavında hangi koşul gereklidir?',
      },
      options: {
        fr: ['y peut être vide', '|xy| ≤ p et |y| ≥ 1', 'w doit être plus court que p'],
        en: ['y may be empty', '|xy| ≤ p and |y| ≥ 1', 'w must be shorter than p'],
        tr: ['y boş olabilir', '|xy| ≤ p ve |y| ≥ 1', 'w, p’den kısa olmalıdır'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'y n’est jamais vide (|y| ≥ 1), et il se trouve dans les p premiers symboles (|xy| ≤ p). Le lemme s’applique aux mots de longueur au moins p.',
        en: 'y is never empty (|y| ≥ 1), and it lies within the first p symbols (|xy| ≤ p). The lemma applies to strings of length at least p.',
        tr: 'y asla boş değildir (|y| ≥ 1) ve ilk p sembol içindedir (|xy| ≤ p). Önsav uzunluğu en az p olan dizilere uygulanır.',
      },
    },
  },
  {
    id: 'auto-w08-cfg',
    week: 8,
    title: {
      fr: 'Grammaires hors contexte (CFG)',
      en: 'Context-free grammars (CFG)',
      tr: 'Bağlamdan bağımsız gramerler (CFG)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une grammaire hors contexte G = (V, Σ, R, S) a des variables V, des terminaux Σ, des règles A → α (une variable à gauche) et une variable de départ S. Son langage contient tous les mots de terminaux qu’on peut dériver depuis S. Elle décrit des langages que les automates finis ne peuvent pas reconnaître, comme aⁿbⁿ.',
          en: 'A context-free grammar G = (V, Σ, R, S) has variables V, terminals Σ, rules A → α (one variable on the left) and a start variable S. Its language contains every string of terminals that can be derived from S. It describes languages finite automata cannot recognize, such as aⁿbⁿ.',
          tr: 'Bağlamdan bağımsız gramer G = (V, Σ, R, S): değişkenler V, terminaller Σ, A → α kuralları (solda tek değişken) ve başlangıç değişkeni S’den oluşur. Dili, S’den türetilebilen tüm terminal dizilerini içerir. aⁿbⁿ gibi sonlu otomatların tanıyamadığı dilleri tanımlar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'G : S → aSb | ε          (langage aⁿbⁿ, n ≥ 0)\n\nDérivation de aabb :\nS ⇒ aSb ⇒ aaSbb ⇒ aabb',
          en: 'G: S → aSb | ε           (language aⁿbⁿ, n ≥ 0)\n\nDerivation of aabb:\nS ⇒ aSb ⇒ aaSbb ⇒ aabb',
          tr: 'G: S → aSb | ε           (dil aⁿbⁿ, n ≥ 0)\n\naabb’nin türetilmesi:\nS ⇒ aSb ⇒ aaSbb ⇒ aabb',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Arbre de dérivation et ambiguïté', en: 'Parse trees and ambiguity', tr: 'Ayrıştırma ağacı ve belirsizlik' },
      },
      {
        type: 'text',
        text: {
          fr: 'Une dérivation à gauche remplace toujours la variable la plus à gauche. Une grammaire est ambiguë si un mot a deux arbres de dérivation différents, c’est-à-dire deux dérivations à gauche différentes. Exemple : E → E + E | E * E | id, avec le mot id + id * id.',
          en: 'A leftmost derivation always replaces the leftmost variable. A grammar is ambiguous if some string has two different parse trees, that is two different leftmost derivations. Example: E → E + E | E * E | id, with the string id + id * id.',
          tr: 'En soldan türetme her zaman en soldaki değişkeni değiştirir. Bir dizinin iki farklı ayrıştırma ağacı, yani iki farklı en soldan türetmesi varsa gramer belirsizdir. Örnek: E → E + E | E * E | id ve id + id * id dizisi.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '1) E ⇒ E + E ⇒ id + E ⇒ id + E * E ⇒ id + id * E ⇒ id + id * id\n2) E ⇒ E * E ⇒ E + E * E ⇒ id + E * E ⇒ id + id * E ⇒ id + id * id\n\nVersion non ambiguë (priorité de * sur +) :\nE → E + T | T\nT → T * F | F\nF → id | ( E )',
          en: '1) E ⇒ E + E ⇒ id + E ⇒ id + E * E ⇒ id + id * E ⇒ id + id * id\n2) E ⇒ E * E ⇒ E + E * E ⇒ id + E * E ⇒ id + id * E ⇒ id + id * id\n\nUnambiguous version (* binds tighter than +):\nE → E + T | T\nT → T * F | F\nF → id | ( E )',
          tr: '1) E ⇒ E + E ⇒ id + E ⇒ id + E * E ⇒ id + id * E ⇒ id + id * id\n2) E ⇒ E * E ⇒ E + E * E ⇒ id + E * E ⇒ id + id * E ⇒ id + id * id\n\nBelirsiz olmayan sürüm (* önceliği + dan yüksek):\nE → E + T | T\nT → T * F | F\nF → id | ( E )',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris une grammaire pour les palindromes sur {a, b}, puis donne la dérivation de abba.',
          en: 'Write a grammar for the palindromes over {a, b}, then give the derivation of abba.',
          tr: '{a, b} üzerindeki palindromlar için bir gramer yaz, sonra abba’nın türetmesini ver.',
        },
        solution: {
          fr: 'S → aSa | bSb | a | b | ε. On ajoute la même lettre des deux côtés ; le centre est vide (longueur paire) ou une seule lettre (longueur impaire). Dérivation : S ⇒ aSa ⇒ abSba ⇒ abba, avec S → ε à la fin.',
          en: 'S → aSa | bSb | a | b | ε. Add the same letter on both sides; the middle is empty (even length) or a single letter (odd length). Derivation: S ⇒ aSa ⇒ abSba ⇒ abba, using S → ε at the end.',
          tr: 'S → aSa | bSb | a | b | ε. Her iki tarafa aynı harf eklenir; orta boş (çift uzunluk) ya da tek harftir (tek uzunluk). Türetme: S ⇒ aSa ⇒ abSba ⇒ abba, sonda S → ε kullanılarak.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel mot est engendré par S → aSb | ε ?',
        en: 'Which string is generated by S → aSb | ε?',
        tr: 'S → aSb | ε hangi diziyi üretir?',
      },
      options: { fr: ['aab', 'aabb', 'abab'], en: ['aab', 'aabb', 'abab'], tr: ['aab', 'aabb', 'abab'] },
      answerIndex: 1,
      explanation: {
        fr: 'Chaque règle ajoute un a à gauche et un b à droite : on obtient aⁿbⁿ. aabb = a²b².',
        en: 'Each rule adds an a on the left and a b on the right: we get aⁿbⁿ. aabb = a²b².',
        tr: 'Her kural sola bir a, sağa bir b ekler: aⁿbⁿ elde edilir. aabb = a²b².',
      },
    },
  },
  {
    id: 'auto-w09-cnf',
    week: 9,
    title: {
      fr: 'Simplification et forme normale de Chomsky',
      en: 'Simplification and Chomsky normal form',
      tr: 'Sadeleştirme ve Chomsky normal formu',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une grammaire est en forme normale de Chomsky (CNF) si chaque règle est de la forme A → BC (deux variables) ou A → a (un terminal), avec S → ε seulement si ε est dans le langage. La CNF sert à l’algorithme CYK et aux preuves : un mot de longueur n se dérive en exactement 2n − 1 étapes.',
          en: 'A grammar is in Chomsky normal form (CNF) if every rule is A → BC (two variables) or A → a (one terminal), with S → ε only if ε is in the language. CNF is used by the CYK algorithm and in proofs: a string of length n is derived in exactly 2n − 1 steps.',
          tr: 'Her kural A → BC (iki değişken) veya A → a (bir terminal) biçimindeyse gramer Chomsky normal formundadır (CNF); S → ε yalnızca ε dilde ise bulunur. CNF, CYK algoritmasında ve kanıtlarda kullanılır: n uzunluğundaki bir dizi tam olarak 2n − 1 adımda türetilir.',
        },
      },
      { type: 'heading', text: { fr: 'Les étapes', en: 'The steps', tr: 'Adımlar' } },
      {
        type: 'code',
        code: {
          fr: '1. Si besoin, nouveau départ S0 → S\n2. Supprimer les règles ε (A → ε)\n3. Supprimer les règles unitaires (A → B)\n4. Supprimer les symboles inutiles\n5. Remplacer les terminaux dans les règles longues : X → a\n6. Couper les règles longues : A → BCD devient A → BY, Y → CD',
          en: '1. If needed, new start S0 → S\n2. Remove ε-rules (A → ε)\n3. Remove unit rules (A → B)\n4. Remove useless symbols\n5. Replace terminals in long rules: X → a\n6. Split long rules: A → BCD becomes A → BY, Y → CD',
          tr: '1. Gerekirse yeni başlangıç S0 → S\n2. ε-kurallarını sil (A → ε)\n3. Birim kuralları sil (A → B)\n4. Yararsız sembolleri sil\n5. Uzun kurallardaki terminalleri değiştir: X → a\n6. Uzun kuralları böl: A → BCD, A → BY ve Y → CD olur',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Exemple : S → aSb | ab', en: 'Example: S → aSb | ab', tr: 'Örnek: S → aSb | ab' },
      },
      {
        type: 'code',
        code: {
          fr: 'Terminaux :  A → a,  B → b\n             S → ASB | AB\nRègle longue : S → ASB devient S → AY, Y → SB\n\nCNF :\nS → AY | AB\nY → SB\nA → a\nB → b',
          en: 'Terminals:  A → a,  B → b\n            S → ASB | AB\nLong rule:  S → ASB becomes S → AY, Y → SB\n\nCNF:\nS → AY | AB\nY → SB\nA → a\nB → b',
          tr: 'Terminaller:  A → a,  B → b\n              S → ASB | AB\nUzun kural:   S → ASB, S → AY ve Y → SB olur\n\nCNF:\nS → AY | AB\nY → SB\nA → a\nB → b',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Mets en CNF : S → AB, A → aA | ε, B → b.',
          en: 'Convert to CNF: S → AB, A → aA | ε, B → b.',
          tr: 'CNF’ye dönüştür: S → AB, A → aA | ε, B → b.',
        },
        solution: {
          fr: 'Règles ε : A peut donner ε, donc on ajoute les versions sans A : S → AB | B et A → aA | a. Règle unitaire S → B : on la remplace par ce que donne B, d’où S → AB | b. Terminal dans A → aA : X → a et A → XA. Résultat : S → AB | b, A → XA | a, X → a, B → b. Le langage est a*b.',
          en: 'ε-rules: A can give ε, so add the versions without A: S → AB | B and A → aA | a. Unit rule S → B: replace it with what B gives, so S → AB | b. Terminal in A → aA: X → a and A → XA. Result: S → AB | b, A → XA | a, X → a, B → b. The language is a*b.',
          tr: 'ε-kuralları: A, ε verebilir; A’sız sürümler eklenir: S → AB | B ve A → aA | a. Birim kural S → B: B’nin verdiğiyle değiştirilir, S → AB | b. A → aA’daki terminal: X → a ve A → XA. Sonuç: S → AB | b, A → XA | a, X → a, B → b. Dil a*b’dir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle règle est autorisée en forme normale de Chomsky ?',
        en: 'Which rule is allowed in Chomsky normal form?',
        tr: 'Chomsky normal formunda hangi kurala izin verilir?',
      },
      options: { fr: ['A → aB', 'A → BC', 'A → B'], en: ['A → aB', 'A → BC', 'A → B'], tr: ['A → aB', 'A → BC', 'A → B'] },
      answerIndex: 1,
      explanation: {
        fr: 'En CNF, on a soit deux variables (A → BC), soit un seul terminal (A → a). A → aB mélange les deux et A → B est une règle unitaire.',
        en: 'In CNF, a rule has either two variables (A → BC) or a single terminal (A → a). A → aB mixes both and A → B is a unit rule.',
        tr: 'CNF’de kural ya iki değişken (A → BC) ya da tek terminal (A → a) içerir. A → aB ikisini karıştırır, A → B ise birim kuraldır.',
      },
    },
  },
  {
    id: 'auto-w10-pda',
    week: 10,
    title: { fr: 'Automates à pile (PDA)', en: 'Pushdown automata (PDA)', tr: 'Yığıtlı otomatlar (PDA)' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un automate à pile est un NFA avec une pile en plus, une mémoire illimitée où l’on n’accède qu’au sommet. P = (Q, Σ, Γ, δ, q0, Z0, F) : Γ est l’alphabet de pile et Z0 le symbole de fond de pile.',
          en: 'A pushdown automaton is an NFA plus a stack: unlimited memory where only the top is accessible. P = (Q, Σ, Γ, δ, q0, Z0, F): Γ is the stack alphabet and Z0 the bottom-of-stack symbol.',
          tr: 'Yığıtlı otomat, bir yığıt eklenmiş NFA’dır: yalnızca tepesine erişilebilen sınırsız bir bellek. P = (Q, Σ, Γ, δ, q0, Z0, F): Γ yığıt alfabesi, Z0 yığıt dibi sembolüdür.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Une transition « a, X / γ » veut dire : lire a (ou ε), dépiler X, puis empiler γ. Exemple pour aⁿbⁿ : on empile un A par a, on dépile un A par b, et on accepte quand on retrouve Z0.',
          en: 'A transition “a, X / γ” means: read a (or ε), pop X, then push γ. Example for aⁿbⁿ: push one A per a, pop one A per b, and accept when Z0 is back on top.',
          tr: '“a, X / γ” geçişi şu demektir: a (veya ε) oku, X’i çıkar, sonra γ’yı it. aⁿbⁿ örneği: her a için bir A itilir, her b için bir A çıkarılır, Z0 tekrar tepede olunca kabul edilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'q0 --a, Z0 / A Z0--> q0      q0 --a, A / A A--> q0\nq0 --b, A / ε--> q1          q1 --b, A / ε--> q1\nq1 --ε, Z0 / Z0--> q2        q0 --ε, Z0 / Z0--> q2\nq2 final\n\n(q0, aabb, Z0) ⊢ (q0, abb, A Z0) ⊢ (q0, bb, A A Z0)\n⊢ (q1, b, A Z0) ⊢ (q1, ε, Z0) ⊢ (q2, ε, Z0)   accepté',
          en: 'q0 --a, Z0 / A Z0--> q0      q0 --a, A / A A--> q0\nq0 --b, A / ε--> q1          q1 --b, A / ε--> q1\nq1 --ε, Z0 / Z0--> q2        q0 --ε, Z0 / Z0--> q2\nq2 final\n\n(q0, aabb, Z0) ⊢ (q0, abb, A Z0) ⊢ (q0, bb, A A Z0)\n⊢ (q1, b, A Z0) ⊢ (q1, ε, Z0) ⊢ (q2, ε, Z0)   accepted',
          tr: 'q0 --a, Z0 / A Z0--> q0      q0 --a, A / A A--> q0\nq0 --b, A / ε--> q1          q1 --b, A / ε--> q1\nq1 --ε, Z0 / Z0--> q2        q0 --ε, Z0 / Z0--> q2\nq2 kabul\n\n(q0, aabb, Z0) ⊢ (q0, abb, A Z0) ⊢ (q0, bb, A A Z0)\n⊢ (q1, b, A Z0) ⊢ (q1, ε, Z0) ⊢ (q2, ε, Z0)   kabul',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Un PDA peut accepter par état final ou par pile vide : les deux modes ont la même puissance. En revanche, les PDA non déterministes sont strictement plus puissants que les déterministes : le langage {wwᴿ} des palindromes de longueur paire demande de « deviner » le milieu.',
          en: 'A PDA can accept by final state or by empty stack: both modes have the same power. However, nondeterministic PDAs are strictly more powerful than deterministic ones: the language {wwᴿ} of even-length palindromes requires “guessing” the middle.',
          tr: 'PDA kabul durumuyla veya boş yığıtla kabul edebilir: iki yöntemin gücü aynıdır. Ancak deterministik olmayan PDA’lar deterministik olanlardan kesinlikle daha güçlüdür: çift uzunluklu palindromlar dili {wwᴿ}, ortayı “tahmin etmeyi” gerektirir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Construis un PDA pour L = {wcwᴿ | w ∈ {a, b}*}, par exemple abcba.',
          en: 'Build a PDA for L = {wcwᴿ | w ∈ {a, b}*}, for example abcba.',
          tr: 'L = {wcwᴿ | w ∈ {a, b}*} için bir PDA tasarla, örneğin abcba.',
        },
        solution: {
          fr: 'Avant le c, on empile chaque lettre ; après le c, chaque lettre lue doit être égale au sommet, qu’on dépile. q0 --a, X / aX--> q0 et q0 --b, X / bX--> q0 (pour tout X) ; q0 --c, X / X--> q1 ; q1 --a, a / ε--> q1 ; q1 --b, b / ε--> q1 ; q1 --ε, Z0 / Z0--> q2, avec q2 final. Ici le c marque le milieu : ce PDA est même déterministe.',
          en: 'Before c, push every letter; after c, each letter read must match the top, which is popped. q0 --a, X / aX--> q0 and q0 --b, X / bX--> q0 (for any X); q0 --c, X / X--> q1; q1 --a, a / ε--> q1; q1 --b, b / ε--> q1; q1 --ε, Z0 / Z0--> q2, with q2 final. Here c marks the middle: this PDA is even deterministic.',
          tr: 'c’den önce her harf itilir; c’den sonra okunan her harf tepedekiyle aynı olmalı ve çıkarılır. q0 --a, X / aX--> q0 ve q0 --b, X / bX--> q0 (her X için); q0 --c, X / X--> q1; q1 --a, a / ε--> q1; q1 --b, b / ε--> q1; q1 --ε, Z0 / Z0--> q2, q2 kabul. Burada c ortayı gösterir: bu PDA deterministiktir bile.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Avec le PDA de l’exemple, que contient la pile après avoir lu aa depuis (q0, Z0) ?',
        en: 'With the PDA of the example, what is on the stack after reading aa from (q0, Z0)?',
        tr: 'Örnekteki PDA ile (q0, Z0)’dan aa okunduktan sonra yığıtta ne vardır?',
      },
      options: { fr: ['Z0', 'A Z0', 'A A Z0'], en: ['Z0', 'A Z0', 'A A Z0'], tr: ['Z0', 'A Z0', 'A A Z0'] },
      answerIndex: 2,
      explanation: {
        fr: 'Chaque a empile un A au-dessus de Z0 : après deux a, la pile contient A A Z0 (sommet à gauche).',
        en: 'Each a pushes an A above Z0: after two a’s, the stack holds A A Z0 (top on the left).',
        tr: 'Her a, Z0’ın üstüne bir A iter: iki a’dan sonra yığıtta A A Z0 vardır (tepe solda).',
      },
    },
  },
  {
    id: 'auto-w11-cfl-properties',
    week: 11,
    title: {
      fr: 'CFG ↔ PDA et pompage des langages hors contexte',
      en: 'CFG ↔ PDA and pumping context-free languages',
      tr: 'CFG ↔ PDA ve bağlamdan bağımsız dillerde pompalama',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Théorème : un langage est hors contexte (CFL) si et seulement s’il est reconnu par un PDA. De la grammaire au PDA : on empile S ; si le sommet est une variable A, on la remplace par la partie droite d’une règle (transition ε) ; si c’est un terminal a, on lit a et on le dépile. On accepte par pile vide.',
          en: 'Theorem: a language is context-free (CFL) if and only if a PDA recognizes it. From grammar to PDA: push S; if the top is a variable A, replace it by the right side of a rule (ε-transition); if it is a terminal a, read a and pop it. Accept by empty stack.',
          tr: 'Teorem: bir dil ancak ve ancak bir PDA tarafından tanınıyorsa bağlamdan bağımsızdır (CFL). Gramerden PDA’ya: S itilir; tepe bir A değişkeniyse bir kuralın sağ tarafıyla değiştirilir (ε-geçişi); bir a terminaliyse a okunur ve çıkarılır. Boş yığıtla kabul edilir.',
        },
      },
      {
        type: 'code',
        code: 'S → aSb | ε\n\nδ(q, ε, S) = { (q, aSb), (q, ε) }\nδ(q, a, a) = { (q, ε) }\nδ(q, b, b) = { (q, ε) }',
      },
      {
        type: 'heading',
        text: {
          fr: 'Lemme de pompage pour les CFL',
          en: 'Pumping lemma for CFLs',
          tr: 'CFL’ler için pompalama önsavı',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Si L est hors contexte, il existe p tel que tout w ∈ L avec |w| ≥ p s’écrit w = uvxyz avec |vxy| ≤ p, |vy| ≥ 1 et uvⁱxyⁱz ∈ L pour tout i ≥ 0. On pompe deux morceaux en même temps.',
          en: 'If L is context-free, there is p such that every w ∈ L with |w| ≥ p can be written w = uvxyz with |vxy| ≤ p, |vy| ≥ 1 and uvⁱxyⁱz ∈ L for every i ≥ 0. Two pieces are pumped together.',
          tr: 'L bağlamdan bağımsızsa, |w| ≥ p olan her w ∈ L dizisi w = uvxyz şeklinde yazılabilecek bir p vardır: |vxy| ≤ p, |vy| ≥ 1 ve her i ≥ 0 için uvⁱxyⁱz ∈ L. İki parça birlikte pompalanır.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Exemple : aⁿbⁿcⁿ n’est pas hors contexte. On prend w = aᵖbᵖcᵖ. Comme |vxy| ≤ p, vxy touche au plus deux sortes de lettres. Avec i = 2, on augmente au plus deux des trois nombres (ou on mélange l’ordre) : le mot sort du langage.',
          en: 'Example: aⁿbⁿcⁿ is not context-free. Take w = aᵖbᵖcᵖ. Since |vxy| ≤ p, vxy touches at most two kinds of letters. With i = 2, at most two of the three counts grow (or the order breaks): the string leaves the language.',
          tr: 'Örnek: aⁿbⁿcⁿ bağlamdan bağımsız değildir. w = aᵖbᵖcᵖ alınır. |vxy| ≤ p olduğundan vxy en fazla iki tür harfe değer. i = 2 ile üç sayıdan en fazla ikisi artar (veya sıra bozulur): dizi dilden çıkar.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Les CFL sont clos par union, concaténation et étoile, mais PAS par intersection ni par complément.',
          en: 'CFLs are closed under union, concatenation and star, but NOT under intersection or complement.',
          tr: 'CFL’ler birleşim, birleştirme ve yıldız altında kapalıdır, ancak kesişim ve tümleme altında kapalı DEĞİLDİR.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Montre que les langages hors contexte ne sont pas clos par intersection.',
          en: 'Show that context-free languages are not closed under intersection.',
          tr: 'Bağlamdan bağımsız dillerin kesişim altında kapalı olmadığını göster.',
        },
        solution: {
          fr: 'L1 = {aⁿbⁿcᵐ} est hors contexte : S → XC, X → aXb | ε, C → cC | ε. De même L2 = {aᵐbⁿcⁿ} : S → AY, A → aA | ε, Y → bYc | ε. Mais L1 ∩ L2 = {aⁿbⁿcⁿ}, qui n’est pas hors contexte (lemme de pompage). L’intersection de deux CFL n’est donc pas toujours un CFL.',
          en: 'L1 = {aⁿbⁿcᵐ} is context-free: S → XC, X → aXb | ε, C → cC | ε. Likewise L2 = {aᵐbⁿcⁿ}: S → AY, A → aA | ε, Y → bYc | ε. But L1 ∩ L2 = {aⁿbⁿcⁿ}, which is not context-free (pumping lemma). So the intersection of two CFLs is not always a CFL.',
          tr: 'L1 = {aⁿbⁿcᵐ} bağlamdan bağımsızdır: S → XC, X → aXb | ε, C → cC | ε. Benzer şekilde L2 = {aᵐbⁿcⁿ}: S → AY, A → aA | ε, Y → bYc | ε. Ama L1 ∩ L2 = {aⁿbⁿcⁿ} bağlamdan bağımsız değildir (pompalama önsavı). Yani iki CFL’nin kesişimi her zaman CFL değildir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel langage n’est PAS hors contexte ?',
        en: 'Which language is NOT context-free?',
        tr: 'Hangi dil bağlamdan bağımsız DEĞİLDİR?',
      },
      options: {
        fr: ['{aⁿbⁿ}', '{aⁿbⁿcⁿ}', '{wwᴿ}'],
        en: ['{aⁿbⁿ}', '{aⁿbⁿcⁿ}', '{wwᴿ}'],
        tr: ['{aⁿbⁿ}', '{aⁿbⁿcⁿ}', '{wwᴿ}'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'aⁿbⁿ et wwᴿ ont des grammaires (S → aSb | ε, S → aSa | bSb | ε). aⁿbⁿcⁿ demande de comparer trois nombres : une seule pile ne suffit pas.',
        en: 'aⁿbⁿ and wwᴿ have grammars (S → aSb | ε, S → aSa | bSb | ε). aⁿbⁿcⁿ requires comparing three counts: one stack is not enough.',
        tr: 'aⁿbⁿ ve wwᴿ’nin gramerleri vardır (S → aSb | ε, S → aSa | bSb | ε). aⁿbⁿcⁿ üç sayıyı karşılaştırmayı gerektirir: tek yığıt yetmez.',
      },
    },
  },
  {
    id: 'auto-w12-turing',
    week: 12,
    title: { fr: 'Machines de Turing', en: 'Turing machines', tr: 'Turing makineleri' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une machine de Turing (TM) a un ruban infini et une tête de lecture qui peut lire, écrire et se déplacer à gauche ou à droite. M = (Q, Σ, Γ, δ, q0, q_acc, q_rej), avec δ(q, X) = (p, Y, D) : dans l’état q en lisant X, écrire Y, se déplacer dans la direction D ∈ {L, R} et passer en p. ⊔ est le symbole blanc.',
          en: 'A Turing machine (TM) has an infinite tape and a head that can read, write and move left or right. M = (Q, Σ, Γ, δ, q0, q_acc, q_rej), with δ(q, X) = (p, Y, D): in state q reading X, write Y, move in direction D ∈ {L, R} and go to p. ⊔ is the blank symbol.',
          tr: 'Turing makinesinin (TM) sonsuz bir şeridi ve okuyup yazabilen, sola veya sağa gidebilen bir kafası vardır. M = (Q, Σ, Γ, δ, q0, q_acc, q_rej), δ(q, X) = (p, Y, D): q durumunda X okununca Y yazılır, D ∈ {L, R} yönüne gidilir ve p’ye geçilir. ⊔ boşluk sembolüdür.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Une configuration s’écrit u q v : le ruban contient uv, la machine est dans l’état q et la tête est sur le premier symbole de v.',
          en: 'A configuration is written u q v: the tape holds uv, the machine is in state q and the head is on the first symbol of v.',
          tr: 'Bir konfigürasyon u q v şeklinde yazılır: şeritte uv vardır, makine q durumundadır ve kafa v’nin ilk sembolü üzerindedir.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Exemple : une TM pour aⁿbⁿ', en: 'Example: a TM for aⁿbⁿ', tr: 'Örnek: aⁿbⁿ için bir TM' },
      },
      {
        type: 'code',
        code: {
          fr: 'Idée : barrer un a (X), aller barrer le premier b (Y), revenir, recommencer.\n\nq0 : a → X, R, q1     Y → Y, R, q3     ⊔ → ⊔, R, q_acc\nq1 : a → a, R, q1     Y → Y, R, q1     b → Y, L, q2\nq2 : a → a, L, q2     Y → Y, L, q2     X → X, R, q0\nq3 : Y → Y, R, q3     ⊔ → ⊔, R, q_acc\nTout autre cas → q_rej',
          en: 'Idea: cross out an a (X), go cross out the first b (Y), come back, repeat.\n\nq0 : a → X, R, q1     Y → Y, R, q3     ⊔ → ⊔, R, q_acc\nq1 : a → a, R, q1     Y → Y, R, q1     b → Y, L, q2\nq2 : a → a, L, q2     Y → Y, L, q2     X → X, R, q0\nq3 : Y → Y, R, q3     ⊔ → ⊔, R, q_acc\nAny other case → q_rej',
          tr: 'Fikir: bir a’yı işaretle (X), ilk b’yi işaretlemeye git (Y), geri dön, tekrarla.\n\nq0 : a → X, R, q1     Y → Y, R, q3     ⊔ → ⊔, R, q_acc\nq1 : a → a, R, q1     Y → Y, R, q1     b → Y, L, q2\nq2 : a → a, L, q2     Y → Y, L, q2     X → X, R, q0\nq3 : Y → Y, R, q3     ⊔ → ⊔, R, q_acc\nDiğer tüm durumlar → q_rej',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Pour aab, après un tour le ruban est X a Y. On barre le deuxième a, puis q1 cherche un b et ne trouve que ⊔ : refus. Pour abb, après un tour le ruban est X Y b ; q3 rencontre un b au lieu de ⊔ : refus.',
          en: 'For aab, after one round the tape is X a Y. The second a is crossed out, then q1 looks for a b and finds only ⊔: rejected. For abb, after one round the tape is X Y b; q3 meets a b instead of ⊔: rejected.',
          tr: 'aab için bir turdan sonra şerit X a Y olur. İkinci a işaretlenir, sonra q1 bir b arar ve yalnızca ⊔ bulur: ret. abb için bir turdan sonra şerit X Y b olur; q3, ⊔ yerine b ile karşılaşır: ret.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris la suite des configurations de cette machine sur le mot ab.',
          en: 'Write the sequence of configurations of this machine on the string ab.',
          tr: 'Bu makinenin ab dizisi üzerindeki konfigürasyon dizisini yaz.',
        },
        solution: {
          fr: 'q0 a b ⊢ X q1 b ⊢ q2 X Y ⊢ X q0 Y ⊢ X Y q3 ⊔ ⊢ X Y ⊔ q_acc. Le a devient X, le b devient Y, la machine revient sur X, repart à droite, ne voit plus que des Y puis un blanc : le mot est accepté.',
          en: 'q0 a b ⊢ X q1 b ⊢ q2 X Y ⊢ X q0 Y ⊢ X Y q3 ⊔ ⊢ X Y ⊔ q_acc. The a becomes X, the b becomes Y, the machine goes back to X, moves right again, sees only Y’s then a blank: the string is accepted.',
          tr: 'q0 a b ⊢ X q1 b ⊢ q2 X Y ⊢ X q0 Y ⊢ X Y q3 ⊔ ⊢ X Y ⊔ q_acc. a, X olur; b, Y olur; makine X’e döner, tekrar sağa gider, yalnızca Y’ler ve bir boşluk görür: dizi kabul edilir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que peut faire une machine de Turing qu’un automate à pile ne peut pas faire ?',
        en: 'What can a Turing machine do that a pushdown automaton cannot?',
        tr: 'Turing makinesi, yığıtlı otomatın yapamadığı neyi yapabilir?',
      },
      options: {
        fr: ['Lire le mot d’entrée', 'Écrire sur son ruban et s’y déplacer dans les deux sens', 'Utiliser des états'],
        en: ['Read the input string', 'Write on its tape and move both ways on it', 'Use states'],
        tr: ['Giriş dizisini okumak', 'Şeridine yazmak ve iki yönde hareket etmek', 'Durum kullanmak'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Un PDA lit l’entrée une seule fois de gauche à droite et n’accède qu’au sommet de sa pile. La TM peut relire, réécrire et revenir en arrière : c’est ce qui lui permet de reconnaître aⁿbⁿcⁿ.',
        en: 'A PDA reads the input once from left to right and only sees the top of its stack. A TM can re-read, rewrite and go back: that is what lets it recognize aⁿbⁿcⁿ.',
        tr: 'PDA girişi soldan sağa yalnızca bir kez okur ve yığıtının yalnızca tepesini görür. TM tekrar okuyabilir, yeniden yazabilir ve geri dönebilir: aⁿbⁿcⁿ’yi bu sayede tanır.',
      },
    },
  },
  {
    id: 'auto-w13-decidability',
    week: 13,
    title: {
      fr: 'Thèse de Church-Turing et décidabilité',
      en: 'Church–Turing thesis and decidability',
      tr: 'Church–Turing tezi ve karar verilebilirlik',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Les variantes des machines de Turing (plusieurs rubans, non déterminisme) ont la même puissance que la TM de base : elles se simulent l’une l’autre, parfois plus lentement. Thèse de Church-Turing : tout ce qu’un algorithme peut calculer, une machine de Turing peut le calculer.',
          en: 'Turing machine variants (several tapes, nondeterminism) have the same power as the basic TM: they simulate each other, sometimes more slowly. Church–Turing thesis: anything an algorithm can compute, a Turing machine can compute.',
          tr: 'Turing makinesinin türevleri (çok şeritli, deterministik olmayan) temel TM ile aynı güce sahiptir: birbirlerini, bazen daha yavaş, simüle ederler. Church–Turing tezi: bir algoritmanın hesaplayabildiği her şeyi bir Turing makinesi hesaplayabilir.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Décidable ou reconnaissable', en: 'Decidable or recognizable', tr: 'Karar verilebilir veya tanınabilir' },
      },
      {
        type: 'text',
        text: {
          fr: 'L est décidable s’il existe une TM qui s’arrête sur toute entrée et accepte exactement les mots de L. L est reconnaissable (récursivement énumérable) si une TM accepte exactement les mots de L, mais peut boucler sur les autres. L est décidable si et seulement si L et son complément sont reconnaissables.',
          en: 'L is decidable if some TM halts on every input and accepts exactly the strings of L. L is recognizable (recursively enumerable) if a TM accepts exactly the strings of L but may loop on the others. L is decidable if and only if both L and its complement are recognizable.',
          tr: 'Her girişte duran ve tam olarak L’nin dizilerini kabul eden bir TM varsa L karar verilebilirdir. Bir TM tam olarak L’nin dizilerini kabul ediyor ama diğerlerinde sonsuz döngüye girebiliyorsa L tanınabilirdir (özyinelemeli sayılabilir). L ancak ve ancak hem L hem tümleyeni tanınabilirse karar verilebilirdir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Réguliers ⊂ Hors contexte ⊂ Décidables ⊂ Reconnaissables ⊂ Tous les langages\n\nA_DFA = {⟨B, w⟩ | le DFA B accepte w}        décidable\nE_DFA = {⟨B⟩ | L(B) = ∅}                      décidable\nA_TM  = {⟨M, w⟩ | la TM M accepte w}          reconnaissable, non décidable',
          en: 'Regular ⊂ Context-free ⊂ Decidable ⊂ Recognizable ⊂ All languages\n\nA_DFA = {⟨B, w⟩ | DFA B accepts w}        decidable\nE_DFA = {⟨B⟩ | L(B) = ∅}                  decidable\nA_TM  = {⟨M, w⟩ | TM M accepts w}         recognizable, not decidable',
          tr: 'Düzenli ⊂ Bağlamdan bağımsız ⊂ Karar verilebilir ⊂ Tanınabilir ⊂ Tüm diller\n\nA_DFA = {⟨B, w⟩ | B DFA’sı w’yu kabul eder}     karar verilebilir\nE_DFA = {⟨B⟩ | L(B) = ∅}                         karar verilebilir\nA_TM  = {⟨M, w⟩ | M TM’si w’yu kabul eder}      tanınabilir, karar verilemez',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Explique pourquoi A_DFA est décidable, alors que A_TM est seulement reconnaissable.',
          en: 'Explain why A_DFA is decidable, while A_TM is only recognizable.',
          tr: 'A_DFA’nın neden karar verilebilir, A_TM’nin ise yalnızca tanınabilir olduğunu açıkla.',
        },
        solution: {
          fr: 'Pour A_DFA, une TM simule B sur w : un DFA lit chaque symbole une fois, donc la simulation s’arrête après |w| étapes, puis on accepte si B est dans un état final. Elle s’arrête toujours : c’est un décideur. Pour A_TM, la machine universelle U simule M sur w et accepte si M accepte. Mais si M boucle, U boucle aussi : U reconnaît A_TM sans le décider.',
          en: 'For A_DFA, a TM simulates B on w: a DFA reads each symbol once, so the simulation stops after |w| steps, then accept if B is in a final state. It always halts: it is a decider. For A_TM, the universal machine U simulates M on w and accepts if M accepts. But if M loops, U loops too: U recognizes A_TM without deciding it.',
          tr: 'A_DFA için bir TM, B’yi w üzerinde simüle eder: DFA her sembolü bir kez okuduğu için simülasyon |w| adımda biter, sonra B kabul durumundaysa kabul edilir. Her zaman durur: bir karar vericidir. A_TM için evrensel makine U, M’yi w üzerinde simüle eder ve M kabul ederse kabul eder. Ama M sonsuz döngüye girerse U da girer: U, A_TM’yi tanır ama karar veremez.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Un langage L est décidable si…',
        en: 'A language L is decidable if…',
        tr: 'Bir L dili şu durumda karar verilebilirdir…',
      },
      options: {
        fr: [
          'une TM accepte L et s’arrête sur toute entrée',
          'une TM accepte L mais peut boucler sur certains mots',
          'un automate à pile accepte L',
        ],
        en: [
          'a TM accepts L and halts on every input',
          'a TM accepts L but may loop on some strings',
          'a pushdown automaton accepts L',
        ],
        tr: [
          'bir TM L’yi kabul eder ve her girişte durur',
          'bir TM L’yi kabul eder ama bazı dizilerde döngüye girebilir',
          'bir yığıtlı otomat L’yi kabul eder',
        ],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Décider, c’est toujours répondre oui ou non en un temps fini. Pouvoir boucler, c’est seulement reconnaître. Un langage accepté par un PDA est bien décidable, mais ce n’est pas la définition.',
        en: 'Deciding means always answering yes or no in finite time. Being allowed to loop is only recognizing. A language accepted by a PDA is indeed decidable, but that is not the definition.',
        tr: 'Karar vermek, her zaman sonlu sürede evet veya hayır demektir. Döngüye girebilmek yalnızca tanımaktır. PDA’nın kabul ettiği bir dil gerçekten karar verilebilirdir, ama tanım bu değildir.',
      },
    },
  },
  {
    id: 'auto-w14-undecidability',
    week: 14,
    title: {
      fr: 'Indécidabilité et révision du final',
      en: 'Undecidability and final review',
      tr: 'Karar verilemezlik ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le problème de l’arrêt HALT_TM = {⟨M, w⟩ | M s’arrête sur w} est indécidable : aucun programme ne peut dire, pour tout programme et toute entrée, s’il va s’arrêter. La preuve utilise la diagonalisation.',
          en: 'The halting problem HALT_TM = {⟨M, w⟩ | M halts on w} is undecidable: no program can tell, for every program and every input, whether it will halt. The proof uses diagonalization.',
          tr: 'Durma problemi HALT_TM = {⟨M, w⟩ | M, w üzerinde durur} karar verilemezdir: hiçbir program, her program ve her giriş için durup durmayacağını söyleyemez. Kanıt köşegenleştirme kullanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Supposons que H décide A_TM.\nOn construit D(⟨M⟩) :\n  lancer H sur ⟨M, ⟨M⟩⟩\n  si H accepte → D refuse ; si H refuse → D accepte\n\nD(⟨D⟩) accepte ⇔ D n’accepte pas ⟨D⟩  → contradiction\nDonc A_TM n’est pas décidable.',
          en: 'Assume H decides A_TM.\nBuild D(⟨M⟩):\n  run H on ⟨M, ⟨M⟩⟩\n  if H accepts → D rejects; if H rejects → D accepts\n\nD(⟨D⟩) accepts ⇔ D does not accept ⟨D⟩  → contradiction\nSo A_TM is not decidable.',
          tr: 'H’nin A_TM’ye karar verdiğini varsayalım.\nD(⟨M⟩) kurulur:\n  H’yi ⟨M, ⟨M⟩⟩ üzerinde çalıştır\n  H kabul ederse → D reddeder; H reddederse → D kabul eder\n\nD(⟨D⟩) kabul eder ⇔ D, ⟨D⟩’yi kabul etmez  → çelişki\nYani A_TM karar verilemezdir.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Réduction : si A se réduit à B et que A est indécidable, alors B est indécidable. On transforme un décideur hypothétique pour B en décideur pour A. Théorème de Rice : toute propriété non triviale du langage d’une TM est indécidable.',
          en: 'Reduction: if A reduces to B and A is undecidable, then B is undecidable. Turn a hypothetical decider for B into a decider for A. Rice’s theorem: every non-trivial property of the language of a TM is undecidable.',
          tr: 'İndirgeme: A, B’ye indirgenirse ve A karar verilemezse B de karar verilemezdir. B için varsayılan bir karar verici, A için bir karar vericiye dönüştürülür. Rice teoremi: bir TM’nin dilinin önemsiz olmayan her özelliği karar verilemezdir.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Hiérarchie de Chomsky', en: 'Chomsky hierarchy', tr: 'Chomsky hiyerarşisi' },
      },
      {
        type: 'code',
        code: {
          fr: 'Type 0 : grammaires générales   ↔ machines de Turing\nType 1 : contextuelles          ↔ automates linéairement bornés\nType 2 : hors contexte          ↔ automates à pile (PDA)\nType 3 : régulières             ↔ automates finis (DFA, NFA)',
          en: 'Type 0: unrestricted grammars  ↔ Turing machines\nType 1: context-sensitive      ↔ linear bounded automata\nType 2: context-free           ↔ pushdown automata (PDA)\nType 3: regular                ↔ finite automata (DFA, NFA)',
          tr: 'Tip 0: kısıtsız gramerler        ↔ Turing makineleri\nTip 1: bağlama duyarlı           ↔ doğrusal sınırlı otomatlar\nTip 2: bağlamdan bağımsız        ↔ yığıtlı otomatlar (PDA)\nTip 3: düzenli                   ↔ sonlu otomatlar (DFA, NFA)',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Écrire une CFG, dériver un mot, montrer une ambiguïté\n✔ Mettre une grammaire en CNF\n✔ Construire un PDA et suivre ses configurations\n✔ CFG ↔ PDA, lemme de pompage des CFL, clôture\n✔ Construire une TM et suivre ses configurations\n✔ Décidable / reconnaissable, A_DFA, A_TM\n✔ Problème de l’arrêt, réductions, hiérarchie de Chomsky',
          en: '✔ Write a CFG, derive a string, show an ambiguity\n✔ Convert a grammar to CNF\n✔ Build a PDA and follow its configurations\n✔ CFG ↔ PDA, CFL pumping lemma, closure\n✔ Build a TM and follow its configurations\n✔ Decidable / recognizable, A_DFA, A_TM\n✔ Halting problem, reductions, Chomsky hierarchy',
          tr: '✔ CFG yazmak, dizi türetmek, belirsizlik göstermek\n✔ Grameri CNF’ye dönüştürmek\n✔ PDA tasarlamak ve konfigürasyonlarını izlemek\n✔ CFG ↔ PDA, CFL pompalama önsavı, kapanış\n✔ TM tasarlamak ve konfigürasyonlarını izlemek\n✔ Karar verilebilir / tanınabilir, A_DFA, A_TM\n✔ Durma problemi, indirgemeler, Chomsky hiyerarşisi',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Sachant que A_TM est indécidable, montre par réduction que HALT_TM est indécidable.',
          en: 'Knowing that A_TM is undecidable, show by reduction that HALT_TM is undecidable.',
          tr: 'A_TM’nin karar verilemez olduğunu bilerek, HALT_TM’nin karar verilemez olduğunu indirgemeyle göster.',
        },
        solution: {
          fr: 'Supposons que R décide HALT_TM. On construit S pour A_TM : sur ⟨M, w⟩, lancer R. Si R dit que M ne s’arrête pas sur w, refuser (M n’accepte pas w). Sinon, simuler M sur w, ce qui se termine forcément, et répondre comme M. S s’arrête toujours et décide A_TM : impossible. Donc R n’existe pas et HALT_TM est indécidable.',
          en: 'Assume R decides HALT_TM. Build S for A_TM: on ⟨M, w⟩, run R. If R says M does not halt on w, reject (M does not accept w). Otherwise simulate M on w, which must finish, and answer like M. S always halts and decides A_TM: impossible. So R does not exist and HALT_TM is undecidable.',
          tr: 'R’nin HALT_TM’ye karar verdiğini varsayalım. A_TM için S kurulur: ⟨M, w⟩ üzerinde R çalıştırılır. R, M’nin w üzerinde durmadığını söylerse reddedilir (M, w’yu kabul etmez). Aksi halde M, w üzerinde simüle edilir (mutlaka biter) ve M gibi cevap verilir. S her zaman durur ve A_TM’ye karar verir: imkânsız. Yani R yoktur ve HALT_TM karar verilemezdir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle machine correspond aux grammaires de type 2 (hors contexte) ?',
        en: 'Which machine matches type 2 (context-free) grammars?',
        tr: 'Tip 2 (bağlamdan bağımsız) gramerlere hangi makine karşılık gelir?',
      },
      options: {
        fr: ['L’automate fini', 'L’automate à pile', 'La machine de Turing'],
        en: ['The finite automaton', 'The pushdown automaton', 'The Turing machine'],
        tr: ['Sonlu otomat', 'Yığıtlı otomat', 'Turing makinesi'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Type 3 ↔ automates finis, type 2 ↔ automates à pile, type 1 ↔ automates linéairement bornés, type 0 ↔ machines de Turing.',
        en: 'Type 3 ↔ finite automata, type 2 ↔ pushdown automata, type 1 ↔ linear bounded automata, type 0 ↔ Turing machines.',
        tr: 'Tip 3 ↔ sonlu otomatlar, tip 2 ↔ yığıtlı otomatlar, tip 1 ↔ doğrusal sınırlı otomatlar, tip 0 ↔ Turing makineleri.',
      },
    },
  },
];
