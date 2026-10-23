/**
 * BLM111 Programlama Dilleri I (Programming Languages I, in C), 14 weeks following the KBU course contents.
 * Weeks 1–7 prepare the midterm, weeks 8–14 the final. Weeks 2, 3 and 7 keep the ids of the former
 * 3-lesson course, so earlier progress and mentor conversations stay attached to them.
 */

import type { LessonSource } from '@/data/lessons';

export const blm111Lessons: LessonSource[] = [
  {
    id: 'c-w01-algorithms',
    week: 1,
    title: {
      fr: 'Résoudre un problème : algorithmes et organigrammes',
      en: 'Problem solving: algorithms and flowcharts',
      tr: 'Problem çözme: algoritmalar ve akış şemaları',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Avant d’écrire du code, on décrit la solution comme une suite d’étapes précises : un algorithme. On peut l’écrire en pseudo-code (des phrases simples et structurées) ou le dessiner sous forme d’organigramme.',
          en: 'Before writing code, the solution is described as a sequence of precise steps: an algorithm. It can be written in pseudocode (simple, structured sentences) or drawn as a flowchart.',
          tr: 'Kod yazmadan önce çözüm kesin adımlar dizisi olarak tanımlanır: algoritma. Sözde kodla (basit, yapılandırılmış cümleler) yazılabilir veya akış şeması olarak çizilebilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Symboles d’un organigramme\n(  ovale  )     début / fin\n/ parallélo /   entrée / sortie (lire, afficher)\n[ rectangle ]   traitement (calcul, affectation)\n< losange  >    décision (oui / non)\n   flèches      ordre d’exécution',
          en: 'Flowchart symbols\n(  oval    )    start / end\n/ parallelogram / input / output (read, print)\n[ rectangle ]   process (computation, assignment)\n< diamond  >    decision (yes / no)\n   arrows       order of execution',
          tr: 'Akış şeması sembolleri\n(  oval    )    başla / bitir\n/ paralelkenar / giriş / çıkış (oku, yaz)\n[ dikdörtgen ]  işlem (hesap, atama)\n< eşkenar dörtgen > karar (evet / hayır)\n   oklar        yürütme sırası',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris en pseudo-code un algorithme qui lit trois nombres a, b, c et affiche le plus grand.',
          en: 'Write in pseudocode an algorithm that reads three numbers a, b, c and prints the largest.',
          tr: 'Üç sayı a, b, c okuyup en büyüğünü yazdıran bir algoritmayı sözde kodla yaz.',
        },
        solution: {
          fr: '1. Lire a, b, c. 2. max ← a. 3. Si b > max alors max ← b. 4. Si c > max alors max ← c. 5. Afficher max. On garde « le plus grand vu jusqu’ici » : cette idée marche pour n’importe quel nombre de valeurs, avec une boucle.',
          en: '1. Read a, b, c. 2. max ← a. 3. If b > max then max ← b. 4. If c > max then max ← c. 5. Print max. We keep “the largest seen so far”: this idea works for any number of values, with a loop.',
          tr: '1. a, b, c’yi oku. 2. max ← a. 3. b > max ise max ← b. 4. c > max ise max ← c. 5. max’ı yazdır. “Şimdiye kadar görülen en büyük” tutulur: bu fikir bir döngüyle istenen sayıda değer için çalışır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel symbole d’organigramme représente une décision ?',
        en: 'Which flowchart symbol represents a decision?',
        tr: 'Hangi akış şeması sembolü bir kararı gösterir?',
      },
      options: {
        fr: ['Le rectangle', 'Le losange', 'L’ovale'],
        en: ['The rectangle', 'The diamond', 'The oval'],
        tr: ['Dikdörtgen', 'Eşkenar dörtgen', 'Oval'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le losange contient une question (par ex. « b > max ? ») et a deux sorties, oui et non. Le rectangle est un traitement, l’ovale le début ou la fin.',
        en: 'The diamond holds a question (e.g. “b > max?”) and has two exits, yes and no. The rectangle is a process, the oval the start or end.',
        tr: 'Eşkenar dörtgen bir soru içerir (örn. “b > max?”) ve evet ile hayır olmak üzere iki çıkışı vardır. Dikdörtgen bir işlem, oval ise başlangıç veya sonu gösterir.',
      },
    },
  },
  {
    id: 'c-first-program',
    week: 2,
    title: {
      fr: 'Langages de programmation et premier programme en C',
      en: 'Programming languages and your first C program',
      tr: 'Programlama dilleri ve ilk C programı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le processeur ne comprend que le langage machine (des 0 et des 1). L’assembleur en donne une version lisible (MOV, ADD). Les langages de haut niveau comme le C sont proches de l’humain et indépendants du processeur : un compilateur les traduit en langage machine.',
          en: 'The processor only understands machine language (0s and 1s). Assembly gives a readable version of it (MOV, ADD). High-level languages like C are close to humans and processor-independent: a compiler translates them into machine language.',
          tr: 'İşlemci yalnızca makine dilini (0 ve 1’ler) anlar. Assembly onun okunabilir bir sürümünü verir (MOV, ADD). C gibi yüksek seviyeli diller insana yakındır ve işlemciden bağımsızdır: bir derleyici onları makine diline çevirir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '#include <stdio.h>\n\nint main(void) {\n    printf("Bonjour !\\n");\n    return 0;\n}\n\nprog.c → préprocesseur (#include) → compilateur → prog.o\n       → éditeur de liens (bibliothèques) → exécutable',
          en: '#include <stdio.h>\n\nint main(void) {\n    printf("Hello!\\n");\n    return 0;\n}\n\nprog.c → preprocessor (#include) → compiler → prog.o\n       → linker (libraries) → executable',
          tr: '#include <stdio.h>\n\nint main(void) {\n    printf("Merhaba!\\n");\n    return 0;\n}\n\nprog.c → önişlemci (#include) → derleyici → prog.o\n       → bağlayıcı (kütüphaneler) → çalıştırılabilir dosya',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Tout programme C commence dans main. printf affiche du texte, \\n passe à la ligne, chaque instruction finit par ; et return 0 signale que tout s’est bien passé.',
          en: 'Every C program starts in main. printf prints text, \\n moves to a new line, every statement ends with ; and return 0 signals that everything went well.',
          tr: 'Her C programı main’de başlar. printf metin yazdırır, \\n yeni satıra geçer, her komut ; ile biter ve return 0 her şeyin yolunda gittiğini bildirir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'À quelle étape apparaît chaque erreur ? (1) Un point-virgule oublié. (2) pritnf au lieu de printf. (3) Le programme affiche une moyenne fausse sans aucun message d’erreur.',
          en: 'At which stage does each error appear? (1) A missing semicolon. (2) pritnf instead of printf. (3) The program prints a wrong average with no error message.',
          tr: 'Her hata hangi aşamada ortaya çıkar? (1) Unutulmuş bir noktalı virgül. (2) printf yerine pritnf. (3) Program hiçbir hata mesajı vermeden yanlış bir ortalama yazdırıyor.',
        },
        solution: {
          fr: '(1) Erreur de compilation (syntaxe). (2) Le compilateur avertit d’une fonction inconnue, puis l’éditeur de liens échoue : « undefined reference to pritnf ». (3) Erreur logique : le programme est valide mais l’algorithme est faux ; on la trouve en testant et en déboguant.',
          en: '(1) Compile error (syntax). (2) The compiler warns about an unknown function, then the linker fails: “undefined reference to pritnf”. (3) Logic error: the program is valid but the algorithm is wrong; it is found by testing and debugging.',
          tr: '(1) Derleme hatası (sözdizimi). (2) Derleyici bilinmeyen bir fonksiyon için uyarır, sonra bağlayıcı başarısız olur: “undefined reference to pritnf”. (3) Mantık hatası: program geçerlidir ama algoritma yanlıştır; test ve hata ayıklamayla bulunur.',
        },
      },
    ],
    quiz: {
      question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
      code: 'printf("A");\nprintf("B\\n");',
      options: {
        fr: ['A B', 'AB', 'A et B sur deux lignes'],
        en: ['A B', 'AB', 'A and B on two lines'],
        tr: ['A B', 'AB', 'A ve B iki ayrı satırda'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'printf n’ajoute ni espace ni retour à la ligne tout seul : A et B se suivent, puis \\n passe à la ligne.',
        en: 'printf adds no space or new line by itself: A and B follow each other, then \\n moves to a new line.',
        tr: 'printf kendiliğinden boşluk ya da yeni satır eklemez: A ve B yan yana yazılır, sonra \\n yeni satıra geçer.',
      },
    },
  },
  {
    id: 'c-variables-types',
    week: 3,
    title: { fr: 'Variables, types et constantes', en: 'Variables, types and constants', tr: 'Değişkenler, veri tipleri ve sabitler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En C, chaque variable a un type, déclaré avant usage. Le type fixe la taille en mémoire et les valeurs possibles. Un nom de variable commence par une lettre ou _, ne contient ni espace ni tiret, et ne peut pas être un mot réservé (int, for…).',
          en: 'In C, every variable has a type, declared before use. The type sets the memory size and the possible values. A variable name starts with a letter or _, contains no space or dash, and cannot be a reserved word (int, for…).',
          tr: 'C’de her değişkenin kullanılmadan önce bildirilen bir tipi vardır. Tip bellekteki boyutu ve olası değerleri belirler. Değişken adı bir harf veya _ ile başlar, boşluk veya tire içermez ve ayrılmış bir kelime (int, for…) olamaz.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'char    1 octet   caractère \'A\' (en fait un petit entier, 65)\nint     4 octets  entier (sur la plupart des PC)\nfloat   4 octets  réel, environ 7 chiffres significatifs\ndouble  8 octets  réel, environ 15 chiffres significatifs\n\nint age = 19;\nfloat moyenne = 14.5;\nchar mention = \'B\';\nconst double PI = 3.14159;     // ne peut plus changer\n#define TVA 0.20               // remplacé avant la compilation\nprintf("%d %.1f %c\\n", age, moyenne, mention);  // 19 14.5 B',
          en: 'char    1 byte    character \'A\' (really a small integer, 65)\nint     4 bytes   integer (on most PCs)\nfloat   4 bytes   real, about 7 significant digits\ndouble  8 bytes   real, about 15 significant digits\n\nint age = 19;\nfloat average = 14.5;\nchar grade = \'B\';\nconst double PI = 3.14159;     // can no longer change\n#define TAX 0.20               // replaced before compiling\nprintf("%d %.1f %c\\n", age, average, grade);  // 19 14.5 B',
          tr: 'char    1 bayt    karakter \'A\' (aslında küçük bir tam sayı, 65)\nint     4 bayt    tam sayı (çoğu PC’de)\nfloat   4 bayt    gerçel, yaklaşık 7 anlamlı basamak\ndouble  8 bayt    gerçel, yaklaşık 15 anlamlı basamak\n\nint yas = 19;\nfloat ortalama = 14.5;\nchar harfNotu = \'B\';\nconst double PI = 3.14159;     // artık değişemez\n#define KDV 0.20               // derlemeden önce yerine konur\nprintf("%d %.1f %c\\n", yas, ortalama, harfNotu);  // 19 14.5 B',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quels noms de variables sont valides en C ? 2eme_note, _total, int, ma-variable, sommeTotale, note finale.',
          en: 'Which variable names are valid in C? 2nd_grade, _total, int, my-variable, totalSum, final grade.',
          tr: 'Hangi değişken adları C’de geçerlidir? 2_not, _toplam, int, benim-degiskenim, toplamDeger, final notu.',
        },
        solution: {
          fr: 'Valides : _total et sommeTotale. Invalides : 2eme_note (commence par un chiffre), int (mot réservé), ma-variable (le tiret est l’opérateur moins), note finale (espace). Attention aussi : le C distingue majuscules et minuscules, total et Total sont deux variables différentes.',
          en: 'Valid: _total and totalSum. Invalid: 2nd_grade (starts with a digit), int (reserved word), my-variable (the dash is the minus operator), final grade (space). Also note: C is case-sensitive, total and Total are two different variables.',
          tr: 'Geçerli: _toplam ve toplamDeger. Geçersiz: 2_not (rakamla başlar), int (ayrılmış kelime), benim-degiskenim (tire eksi işlecidir), final notu (boşluk). Ayrıca dikkat: C büyük-küçük harfe duyarlıdır, toplam ve Toplam iki ayrı değişkendir.',
        },
      },
    ],
    quiz: {
      question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
      code: 'int a = 7;\nint b = 2;\nprintf("%d", a / b);',
      options: { fr: ['3.5', '3', '4'], en: ['3.5', '3', '4'], tr: ['3.5', '3', '4'] },
      answerIndex: 1,
      explanation: {
        fr: 'a et b sont des int : la division entre deux entiers garde seulement la partie entière, donc 7 / 2 donne 3.',
        en: 'a and b are ints: dividing two whole numbers keeps only the whole part, so 7 / 2 gives 3.',
        tr: 'a ve b int’tir: iki tam sayının bölümünde yalnızca tam kısım kalır, bu yüzden 7 / 2 sonucu 3’tür.',
      },
    },
  },
  {
    id: 'c-w04-expressions',
    week: 4,
    title: {
      fr: 'Expressions arithmétiques et logiques',
      en: 'Arithmetic and logical expressions',
      tr: 'Aritmetik ve mantıksal ifadeler',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Arithmétique : +  −  *  /  %  (reste, entiers seulement)\nIncrément    : x++ (utilise x puis ajoute 1)   ++x (ajoute 1 puis utilise x)\nConversion   : (float)a / b   force une division réelle\nComparaison  : ==  !=  <  <=  >  >=   (résultat 1 = vrai, 0 = faux)\nLogique      : &&  (et)   ||  (ou)   !  (non)\nPriorité     : !  puis * / %  puis + −  puis < > <= >=  puis == !=\n               puis &&  puis ||  puis =',
          en: 'Arithmetic : +  −  *  /  %  (remainder, integers only)\nIncrement  : x++ (uses x then adds 1)   ++x (adds 1 then uses x)\nCast       : (float)a / b   forces a real division\nComparison : ==  !=  <  <=  >  >=   (result 1 = true, 0 = false)\nLogic      : &&  (and)   ||  (or)   !  (not)\nPrecedence : !  then * / %  then + −  then < > <= >=  then == !=\n             then &&  then ||  then =',
          tr: 'Aritmetik  : +  −  *  /  %  (kalan, yalnızca tam sayılar)\nArttırma   : x++ (önce x’i kullanır sonra 1 ekler)   ++x (önce 1 ekler)\nTür dönüşümü: (float)a / b   gerçel bölmeyi zorlar\nKarşılaştırma: ==  !=  <  <=  >  >=   (sonuç 1 = doğru, 0 = yanlış)\nMantık     : &&  (ve)   ||  (veya)   !  (değil)\nÖncelik    : !  sonra * / %  sonra + −  sonra < > <= >=  sonra == !=\n             sonra &&  sonra ||  sonra =',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'En C, toute valeur non nulle est « vraie ». && et || s’arrêtent dès que le résultat est connu (évaluation court-circuit) : dans (b != 0 && a / b > 2), la division n’est jamais faite si b vaut 0. Piège classique : écrire if (x = 5) au lieu de if (x == 5).',
          en: 'In C, any non-zero value is “true”. && and || stop as soon as the result is known (short-circuit evaluation): in (b != 0 && a / b > 2), the division never happens when b is 0. Classic trap: writing if (x = 5) instead of if (x == 5).',
          tr: 'C’de sıfır olmayan her değer “doğru”dur. && ve || sonuç belli olur olmaz durur (kısa devre değerlendirme): (b != 0 && a / b > 2) ifadesinde b 0 ise bölme hiç yapılmaz. Klasik tuzak: if (x == 5) yerine if (x = 5) yazmak.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec int a = 7, b = 2, x = 5; donne la valeur de : (1) a % b ; (2) (float)a / b ; (3) y après int y = x++ * 2; et la nouvelle valeur de x ; (4) a > 5 && b > 5 ; (5) a > 5 || b > 5.',
          en: 'With int a = 7, b = 2, x = 5; give the value of: (1) a % b; (2) (float)a / b; (3) y after int y = x++ * 2; and x’s new value; (4) a > 5 && b > 5; (5) a > 5 || b > 5.',
          tr: 'int a = 7, b = 2, x = 5; ile şunların değerini ver: (1) a % b; (2) (float)a / b; (3) int y = x++ * 2; sonrası y ve x’in yeni değeri; (4) a > 5 && b > 5; (5) a > 5 || b > 5.',
        },
        solution: {
          fr: '(1) 7 = 3 × 2 + 1, donc 1. (2) 3.5 : a est converti en float avant la division. (3) x++ utilise d’abord 5 : y = 10, puis x devient 6. (4) 1 && 0 = 0 (faux). (5) 1 || 0 = 1 (vrai).',
          en: '(1) 7 = 3 × 2 + 1, so 1. (2) 3.5: a is converted to float before dividing. (3) x++ first uses 5: y = 10, then x becomes 6. (4) 1 && 0 = 0 (false). (5) 1 || 0 = 1 (true).',
          tr: '(1) 7 = 3 × 2 + 1, yani 1. (2) 3.5: a bölmeden önce float’a çevrilir. (3) x++ önce 5’i kullanır: y = 10, sonra x 6 olur. (4) 1 && 0 = 0 (yanlış). (5) 1 || 0 = 1 (doğru).',
        },
      },
    ],
    quiz: {
      question: { fr: 'Que vaut 17 % 5 ?', en: 'What is 17 % 5?', tr: '17 % 5 kaçtır?' },
      options: { fr: ['2', '3', '3.4'], en: ['2', '3', '3.4'], tr: ['2', '3', '3.4'] },
      answerIndex: 0,
      explanation: {
        fr: '% donne le reste de la division entière : 17 = 5 × 3 + 2, donc 17 % 5 = 2. Très utile pour tester la parité (n % 2 == 0).',
        en: '% gives the remainder of integer division: 17 = 5 × 3 + 2, so 17 % 5 = 2. Very useful to test parity (n % 2 == 0).',
        tr: '% tam bölmenin kalanını verir: 17 = 5 × 3 + 2, yani 17 % 5 = 2. Tek-çift testi için çok kullanışlıdır (n % 2 == 0).',
      },
    },
  },
  {
    id: 'c-w05-input-output',
    week: 5,
    title: { fr: 'Entrées et sorties : printf et scanf', en: 'Input and output: printf and scanf', tr: 'Giriş ve çıkış: printf ve scanf' },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Formats : %d entier   %f réel (float)   %lf double dans scanf\n          %c caractère   %s chaîne   %x hexadécimal\nLargeur et précision : %5d (5 colonnes)   %.2f (2 décimales)\nSéquences : \\n nouvelle ligne   \\t tabulation   \\\\ barre   %% signe %\n\nint a, b;\nprintf("Deux entiers : ");\nscanf("%d %d", &a, &b);      // & = adresse où ranger la valeur\nprintf("Somme : %d, moyenne : %.2f\\n", a + b, (a + b) / 2.0);',
          en: 'Formats: %d integer   %f real (float)   %lf double in scanf\n         %c character   %s string   %x hexadecimal\nWidth and precision: %5d (5 columns)   %.2f (2 decimals)\nSequences: \\n new line   \\t tab   \\\\ backslash   %% percent sign\n\nint a, b;\nprintf("Two integers: ");\nscanf("%d %d", &a, &b);      // & = address where the value goes\nprintf("Sum: %d, average: %.2f\\n", a + b, (a + b) / 2.0);',
          tr: 'Biçimler: %d tam sayı   %f gerçel (float)   scanf’te double için %lf\n          %c karakter   %s dizgi   %x onaltılık\nGenişlik ve duyarlık: %5d (5 sütun)   %.2f (2 ondalık)\nKaçış dizileri: \\n yeni satır   \\t sekme   \\\\ ters bölü   %% yüzde\n\nint a, b;\nprintf("Iki tam sayi: ");\nscanf("%d %d", &a, &b);      // & = değerin yazılacağı adres\nprintf("Toplam: %d, ortalama: %.2f\\n", a + b, (a + b) / 2.0);',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Piège : après scanf("%d", …), la touche Entrée reste dans le tampon ; un scanf("%c", …) suivant la lirait. On écrit scanf(" %c", &c) avec un espace pour sauter les blancs. Remarquez aussi (a + b) / 2.0 : le 2.0 force une division réelle.',
          en: 'Trap: after scanf("%d", …), the Enter key stays in the buffer; a following scanf("%c", …) would read it. Write scanf(" %c", &c) with a space to skip whitespace. Also note (a + b) / 2.0: the 2.0 forces a real division.',
          tr: 'Tuzak: scanf("%d", …) sonrasında Enter tuşu tamponda kalır; ardından gelen bir scanf("%c", …) onu okur. Boşlukları atlamak için scanf(" %c", &c) gibi bir boşlukla yazılır. Ayrıca (a + b) / 2.0’a dikkat: 2.0 gerçel bölmeyi zorlar.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec le programme ci-dessus, l’utilisateur tape 7 8. Qu’affiche-t-il ? Et si on écrivait (a + b) / 2 avec %d ?',
          en: 'With the program above, the user types 7 8. What does it print? And what if we wrote (a + b) / 2 with %d?',
          tr: 'Yukarıdaki programda kullanıcı 7 8 yazıyor. Ne yazdırır? (a + b) / 2’yi %d ile yazsaydık ne olurdu?',
        },
        solution: {
          fr: 'Somme : 15, moyenne : 7.50. Avec (a + b) / 2 et %d, la division est entière : 15 / 2 = 7, la moyenne affichée serait 7, ce qui est faux. Attention : afficher un int avec %f (ou l’inverse) donne n’importe quoi.',
          en: 'Sum: 15, average: 7.50. With (a + b) / 2 and %d, the division is integer: 15 / 2 = 7, the printed average would be 7, which is wrong. Careful: printing an int with %f (or the reverse) prints garbage.',
          tr: 'Toplam: 15, ortalama: 7.50. (a + b) / 2 ve %d ile bölme tam sayı bölmesidir: 15 / 2 = 7, yazdırılan ortalama 7 olurdu ki bu yanlıştır. Dikkat: bir int’i %f ile (veya tersi) yazdırmak anlamsız değerler verir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi écrit-on scanf("%d", &n) avec le signe & ?',
        en: 'Why is scanf("%d", &n) written with the & sign?',
        tr: 'scanf("%d", &n) neden & işaretiyle yazılır?',
      },
      options: {
        fr: ['Pour lire deux nombres', 'Parce que scanf a besoin de l’adresse de n pour y ranger la valeur', 'Pour afficher n en hexadécimal'],
        en: ['To read two numbers', 'Because scanf needs n’s address to store the value there', 'To print n in hexadecimal'],
        tr: ['İki sayı okumak için', 'Çünkü scanf değeri yazmak için n’in adresine ihtiyaç duyar', 'n’i onaltılık yazdırmak için'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'En C, une fonction reçoit des copies. Pour modifier n, scanf doit savoir où il se trouve en mémoire : &n donne cette adresse. Oublier le & est une erreur très fréquente.',
        en: 'In C, a function receives copies. To change n, scanf must know where it is in memory: &n gives that address. Forgetting the & is a very common error.',
        tr: 'C’de bir fonksiyon kopyalar alır. n’i değiştirmek için scanf onun bellekte nerede olduğunu bilmelidir: &n bu adresi verir. & işaretini unutmak çok sık yapılan bir hatadır.',
      },
    },
  },
  {
    id: 'c-w06-conditions',
    week: 6,
    title: { fr: 'Les structures de décision', en: 'Decision structures', tr: 'Karar yapıları' },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'if (note >= 90)       lettre = \'A\';\nelse if (note >= 80)  lettre = \'B\';\nelse if (note >= 70)  lettre = \'C\';\nelse if (note >= 60)  lettre = \'D\';\nelse                  lettre = \'F\';\n\nswitch (choix) {            // entier ou caractère seulement\n    case 1:  printf("Ajouter\\n");  break;\n    case 2:  printf("Supprimer\\n"); break;\n    default: printf("Choix inconnu\\n");\n}\n\nmax = (a > b) ? a : b;      // opérateur ternaire',
          en: 'if (grade >= 90)       letter = \'A\';\nelse if (grade >= 80)  letter = \'B\';\nelse if (grade >= 70)  letter = \'C\';\nelse if (grade >= 60)  letter = \'D\';\nelse                   letter = \'F\';\n\nswitch (choice) {           // integer or character only\n    case 1:  printf("Add\\n");    break;\n    case 2:  printf("Delete\\n"); break;\n    default: printf("Unknown choice\\n");\n}\n\nmax = (a > b) ? a : b;      // ternary operator',
          tr: 'if (puan >= 90)       harf = \'A\';\nelse if (puan >= 80)  harf = \'B\';\nelse if (puan >= 70)  harf = \'C\';\nelse if (puan >= 60)  harf = \'D\';\nelse                  harf = \'F\';\n\nswitch (secim) {            // yalnızca tam sayı veya karakter\n    case 1:  printf("Ekle\\n"); break;\n    case 2:  printf("Sil\\n");  break;\n    default: printf("Bilinmeyen secim\\n");\n}\n\nmax = (a > b) ? a : b;      // üçlü işleç',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Dans une chaîne de else if, seule la première condition vraie s’exécute : l’ordre compte. Dans un switch, sans break, l’exécution « tombe » dans les case suivants (fall-through).',
          en: 'In an else-if chain, only the first true condition runs: order matters. In a switch, without break, execution “falls through” into the following cases.',
          tr: 'Bir else if zincirinde yalnızca ilk doğru koşul çalışır: sıra önemlidir. Bir switch’te break olmazsa yürütme sonraki case’lere “düşer” (fall-through).',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Avec la chaîne de notes ci-dessus, quelle lettre pour 85 ? Et si on avait mis le test « >= 60 » en premier ? (2) Réécris max = (a > b) ? a : b; avec if / else.',
          en: '(1) With the grade chain above, which letter for 85? And what if the “>= 60” test had come first? (2) Rewrite max = (a > b) ? a : b; with if / else.',
          tr: '(1) Yukarıdaki not zinciriyle 85 için hangi harf? “>= 60” testi ilk sırada olsaydı ne olurdu? (2) max = (a > b) ? a : b; ifadesini if / else ile yeniden yaz.',
        },
        solution: {
          fr: '(1) 85 n’est pas ≥ 90, mais il est ≥ 80 : lettre B. Si « >= 60 » était testé en premier, 85 le satisferait et toutes les notes de 60 à 100 recevraient D : il faut tester du plus haut au plus bas. (2) if (a > b) max = a; else max = b;',
          en: '(1) 85 is not ≥ 90, but it is ≥ 80: letter B. If “>= 60” were tested first, 85 would satisfy it and every grade from 60 to 100 would get D: test from highest to lowest. (2) if (a > b) max = a; else max = b;',
          tr: '(1) 85, ≥ 90 değildir ama ≥ 80’dir: B harfi. “>= 60” ilk test edilseydi 85 onu sağlardı ve 60-100 arası tüm notlar D alırdı: en yüksekten en düşüğe test edilmelidir. (2) if (a > b) max = a; else max = b;',
        },
      },
    ],
    quiz: {
      question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
      code: 'int k = 2;\nswitch (k) {\n    case 1: printf("A");\n    case 2: printf("B");\n    case 3: printf("C"); break;\n    default: printf("D");\n}',
      options: { fr: ['B', 'BC', 'BCD'], en: ['B', 'BC', 'BCD'], tr: ['B', 'BC', 'BCD'] },
      answerIndex: 1,
      explanation: {
        fr: 'On entre au case 2 et on affiche B ; sans break, on continue dans le case 3 (C), puis le break arrête le switch avant default.',
        en: 'Execution enters at case 2 and prints B; with no break, it continues into case 3 (C), then the break stops the switch before default.',
        tr: 'case 2’den girilir ve B yazılır; break olmadığı için case 3’e devam edilir (C), sonra break switch’i default’tan önce durdurur.',
      },
    },
  },
  {
    id: 'c-loops',
    week: 7,
    title: {
      fr: 'Les boucles et révision de la vize',
      en: 'Loops and midterm review',
      tr: 'Döngüler ve vize tekrarı',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'for (int i = 1; i <= 3; i++)   // départ ; condition ; pas\n    printf("%d\\n", i);        // 1 2 3\n\nwhile (n > 0) {               // teste AVANT chaque tour\n    somme += n % 10;          // dernier chiffre\n    n /= 10;                  // on l’enlève\n}\n\ndo {                          // teste APRÈS : au moins un tour\n    scanf("%d", &note);\n} while (note < 0 || note > 100);',
          en: 'for (int i = 1; i <= 3; i++)   // start ; condition ; step\n    printf("%d\\n", i);        // 1 2 3\n\nwhile (n > 0) {               // tests BEFORE each round\n    sum += n % 10;            // last digit\n    n /= 10;                  // remove it\n}\n\ndo {                          // tests AFTER: at least one round\n    scanf("%d", &grade);\n} while (grade < 0 || grade > 100);',
          tr: 'for (int i = 1; i <= 3; i++)   // başlangıç ; koşul ; adım\n    printf("%d\\n", i);        // 1 2 3\n\nwhile (n > 0) {               // her turdan ÖNCE sınar\n    toplam += n % 10;         // son basamak\n    n /= 10;                  // onu çıkar\n}\n\ndo {                          // SONRA sınar: en az bir tur\n    scanf("%d", &puan);\n} while (puan < 0 || puan > 100);',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Algorithme, pseudo-code, symboles d’organigramme\n✔ Langage machine / assembleur / haut niveau, compilation et édition de liens\n✔ Types, tailles, noms valides, const et #define\n✔ Opérateurs, %, division entière, cast, x++ / ++x, && || !\n✔ printf / scanf, formats, &, tampon d’entrée\n✔ if / else if, switch et break, ternaire\n✔ for, while, do-while',
          en: '✔ Algorithm, pseudocode, flowchart symbols\n✔ Machine / assembly / high-level language, compiling and linking\n✔ Types, sizes, valid names, const and #define\n✔ Operators, %, integer division, casts, x++ / ++x, && || !\n✔ printf / scanf, formats, &, input buffer\n✔ if / else if, switch and break, ternary\n✔ for, while, do-while',
          tr: '✔ Algoritma, sözde kod, akış şeması sembolleri\n✔ Makine / assembly / yüksek seviyeli dil, derleme ve bağlama\n✔ Tipler, boyutlar, geçerli adlar, const ve #define\n✔ İşleçler, %, tam sayı bölmesi, tür dönüşümü, x++ / ++x, && || !\n✔ printf / scanf, biçimler, &, giriş tamponu\n✔ if / else if, switch ve break, üçlü işleç\n✔ for, while, do-while',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec la boucle while ci-dessus et n = 1234 au départ (somme = 0), suis chaque tour. Que valent somme et n à la fin ?',
          en: 'With the while loop above and n = 1234 at the start (sum = 0), trace each round. What are sum and n at the end?',
          tr: 'Yukarıdaki while döngüsünde başlangıçta n = 1234 (toplam = 0) iken her turu izle. Sonunda toplam ve n kaçtır?',
        },
        solution: {
          fr: 'Tour 1 : +4 → 4, n = 123. Tour 2 : +3 → 7, n = 12. Tour 3 : +2 → 9, n = 1. Tour 4 : +1 → 10, n = 0, la condition n > 0 devient fausse. Fin : somme = 10 (somme des chiffres) et n = 0. % 10 donne le dernier chiffre, / 10 l’enlève.',
          en: 'Round 1: +4 → 4, n = 123. Round 2: +3 → 7, n = 12. Round 3: +2 → 9, n = 1. Round 4: +1 → 10, n = 0, the condition n > 0 becomes false. End: sum = 10 (the digit sum) and n = 0. % 10 gives the last digit, / 10 removes it.',
          tr: '1. tur: +4 → 4, n = 123. 2. tur: +3 → 7, n = 12. 3. tur: +2 → 9, n = 1. 4. tur: +1 → 10, n = 0, n > 0 koşulu yanlış olur. Son: toplam = 10 (basamaklar toplamı) ve n = 0. % 10 son basamağı verir, / 10 onu çıkarır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien d’étoiles ce code affiche-t-il ?',
        en: 'How many stars does this code print?',
        tr: 'Bu kod kaç yıldız yazdırır?',
      },
      code: 'for (int i = 0; i < 5; i++) {\n    printf("*");\n}',
      options: { fr: ['4', '5', '6'], en: ['4', '5', '6'], tr: ['4', '5', '6'] },
      answerIndex: 1,
      explanation: {
        fr: 'i prend les valeurs 0, 1, 2, 3 et 4 : cela fait 5 tours. Quand i vaut 5, la condition i < 5 est fausse et la boucle s’arrête.',
        en: 'i takes the values 0, 1, 2, 3 and 4: that is 5 rounds. When i is 5, the condition i < 5 is false and the loop stops.',
        tr: 'i sırasıyla 0, 1, 2, 3 ve 4 olur: bu 5 tur eder. i 5 olunca i < 5 koşulu yanlış olur ve döngü durur.',
      },
    },
  },
  {
    id: 'c-w08-nested-loops',
    week: 8,
    title: {
      fr: 'Boucles imbriquées, break et continue',
      en: 'Nested loops, break and continue',
      tr: 'İç içe döngüler, break ve continue',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une boucle peut en contenir une autre : pour chaque tour de la boucle extérieure, la boucle intérieure fait tous ses tours. break sort immédiatement de la boucle la plus proche ; continue saute la fin du tour en cours et passe au suivant.',
          en: 'A loop can contain another: for each round of the outer loop, the inner loop does all its rounds. break leaves the nearest loop immediately; continue skips the rest of the current round and moves to the next.',
          tr: 'Bir döngü başka bir döngü içerebilir: dış döngünün her turunda iç döngü tüm turlarını yapar. break en yakın döngüden hemen çıkar; continue o anki turun geri kalanını atlayıp bir sonrakine geçer.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'for (int i = 1; i <= 4; i++) {        // triangle d’étoiles\n    for (int j = 1; j <= i; j++)\n        printf("*");\n    printf("\\n");\n}\n\nint premier = 1;                        // n est-il premier ?\nfor (int d = 2; d * d <= n; d++) {\n    if (n % d == 0) { premier = 0; break; }\n}',
          en: 'for (int i = 1; i <= 4; i++) {        // triangle of stars\n    for (int j = 1; j <= i; j++)\n        printf("*");\n    printf("\\n");\n}\n\nint prime = 1;                          // is n prime?\nfor (int d = 2; d * d <= n; d++) {\n    if (n % d == 0) { prime = 0; break; }\n}',
          tr: 'for (int i = 1; i <= 4; i++) {        // yıldız üçgeni\n    for (int j = 1; j <= i; j++)\n        printf("*");\n    printf("\\n");\n}\n\nint asal = 1;                           // n asal mı?\nfor (int d = 2; d * d <= n; d++) {\n    if (n % d == 0) { asal = 0; break; }\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Qu’affiche le triangle ci-dessus ? (2) Pour n = 29, quels diviseurs d sont testés et quel est le résultat ? (3) Pourquoi s’arrêter à d × d ≤ n ?',
          en: '(1) What does the triangle above print? (2) For n = 29, which divisors d are tested and what is the result? (3) Why stop at d × d ≤ n?',
          tr: '(1) Yukarıdaki üçgen ne yazdırır? (2) n = 29 için hangi d bölenleri sınanır ve sonuç nedir? (3) Neden d × d ≤ n’de durulur?',
        },
        solution: {
          fr: '(1) 4 lignes : *, **, ***, **** (la ligne i contient i étoiles). (2) d = 2, 3, 4, 5 (car 6 × 6 = 36 > 29) ; aucun ne divise 29, donc premier reste 1 : 29 est premier. (3) Si n = a × b avec a ≤ b, alors a ≤ √n : s’il existe un diviseur, on en trouve un avant √n. Cela économise beaucoup de tours.',
          en: '(1) 4 lines: *, **, ***, **** (line i holds i stars). (2) d = 2, 3, 4, 5 (since 6 × 6 = 36 > 29); none divides 29, so prime stays 1: 29 is prime. (3) If n = a × b with a ≤ b, then a ≤ √n: if a divisor exists, one is found before √n. That saves many rounds.',
          tr: '(1) 4 satır: *, **, ***, **** (i. satırda i yıldız var). (2) d = 2, 3, 4, 5 (çünkü 6 × 6 = 36 > 29); hiçbiri 29’u bölmez, asal 1 kalır: 29 asaldır. (3) n = a × b ve a ≤ b ise a ≤ √n’dir: bir bölen varsa √n’den önce bulunur. Bu çok sayıda turu kurtarır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de fois la ligne compte++ s’exécute-t-elle ?',
        en: 'How many times does the line count++ run?',
        tr: 'sayac++ satırı kaç kez çalışır?',
      },
      code: {
        fr: 'for (int i = 0; i < 3; i++)\n    for (int j = 0; j < 4; j++)\n        compte++;',
        en: 'for (int i = 0; i < 3; i++)\n    for (int j = 0; j < 4; j++)\n        count++;',
        tr: 'for (int i = 0; i < 3; i++)\n    for (int j = 0; j < 4; j++)\n        sayac++;',
      },
      options: { fr: ['7', '12', '16'], en: ['7', '12', '16'], tr: ['7', '12', '16'] },
      answerIndex: 1,
      explanation: {
        fr: 'La boucle intérieure fait 4 tours pour chacun des 3 tours de la boucle extérieure : 3 × 4 = 12.',
        en: 'The inner loop does 4 rounds for each of the outer loop’s 3 rounds: 3 × 4 = 12.',
        tr: 'İç döngü, dış döngünün 3 turunun her biri için 4 tur yapar: 3 × 4 = 12.',
      },
    },
  },
  {
    id: 'c-w09-functions',
    week: 9,
    title: { fr: 'Les fonctions', en: 'Functions', tr: 'Fonksiyonlar' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une fonction regroupe un traitement sous un nom, avec des paramètres et une valeur de retour (ou void si elle ne renvoie rien). Si elle est définie après main, on déclare son prototype avant. Une variable déclarée dans une fonction est locale : elle disparaît à la fin de l’appel, sauf si elle est static.',
          en: 'A function groups a task under a name, with parameters and a return value (or void if it returns nothing). If it is defined after main, its prototype is declared before. A variable declared in a function is local: it disappears at the end of the call, unless it is static.',
          tr: 'Fonksiyon bir işi parametreleri ve bir dönüş değeriyle (hiçbir şey döndürmüyorsa void) bir ad altında toplar. main’den sonra tanımlanırsa prototipi önceden bildirilir. Fonksiyon içinde bildirilen değişken yereldir: static değilse çağrının sonunda yok olur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'int max(int a, int b);            // prototype\n\nint main(void) {\n    printf("%d\\n", max(4, 9));    // 9\n    return 0;\n}\n\nint max(int a, int b) {           // définition\n    return (a > b) ? a : b;\n}\n\nvoid compteur(void) {\n    static int n = 0;             // garde sa valeur entre les appels\n    n++;\n    printf("%d ", n);\n}',
          en: 'int max(int a, int b);            // prototype\n\nint main(void) {\n    printf("%d\\n", max(4, 9));    // 9\n    return 0;\n}\n\nint max(int a, int b) {           // definition\n    return (a > b) ? a : b;\n}\n\nvoid counter(void) {\n    static int n = 0;             // keeps its value between calls\n    n++;\n    printf("%d ", n);\n}',
          tr: 'int max(int a, int b);            // prototip\n\nint main(void) {\n    printf("%d\\n", max(4, 9));    // 9\n    return 0;\n}\n\nint max(int a, int b) {           // tanım\n    return (a > b) ? a : b;\n}\n\nvoid sayac(void) {\n    static int n = 0;             // değerini çağrılar arasında korur\n    n++;\n    printf("%d ", n);\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'On appelle la fonction compteur ci-dessus 3 fois de suite. Qu’affiche-t-elle ? Et si on enlevait le mot static ?',
          en: 'The counter function above is called 3 times in a row. What does it print? And what if the word static were removed?',
          tr: 'Yukarıdaki sayac fonksiyonu art arda 3 kez çağrılıyor. Ne yazdırır? static kelimesi kaldırılsaydı ne olurdu?',
        },
        solution: {
          fr: 'Avec static : 1 2 3. La variable n est initialisée une seule fois et garde sa valeur d’un appel à l’autre. Sans static : 1 1 1, car n est recréée à 0 à chaque appel puis disparaît.',
          en: 'With static: 1 2 3. The variable n is initialized only once and keeps its value from one call to the next. Without static: 1 1 1, because n is recreated at 0 on every call, then disappears.',
          tr: 'static ile: 1 2 3. n değişkeni yalnızca bir kez başlatılır ve değerini çağrıdan çağrıya korur. static olmadan: 1 1 1, çünkü n her çağrıda 0 olarak yeniden oluşturulur, sonra yok olur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que renvoie une fonction déclarée void ?',
        en: 'What does a function declared void return?',
        tr: 'void olarak bildirilen bir fonksiyon ne döndürür?',
      },
      options: { fr: ['0', 'Rien', 'Un caractère'], en: ['0', 'Nothing', 'A character'], tr: ['0', 'Hiçbir şey', 'Bir karakter'] },
      answerIndex: 1,
      explanation: {
        fr: 'void veut dire « aucune valeur » : la fonction fait un traitement (afficher, modifier) mais ne renvoie rien. On ne peut pas écrire x = f(); avec elle.',
        en: 'void means “no value”: the function does a task (print, change) but returns nothing. You cannot write x = f(); with it.',
        tr: 'void “değer yok” demektir: fonksiyon bir iş yapar (yazdırma, değiştirme) ama hiçbir şey döndürmez. Onunla x = f(); yazılamaz.',
      },
    },
  },
  {
    id: 'c-w10-parameters-recursion',
    week: 10,
    title: {
      fr: 'Passage de paramètres et récursivité',
      en: 'Parameter passing and recursion',
      tr: 'Parametre aktarımı ve özyineleme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Par valeur : la fonction reçoit une copie, l’original ne change pas. Par adresse : on passe &x et la fonction reçoit un pointeur int *p ; avec *p, elle modifie l’original (détails en Programmation II). Une fonction récursive s’appelle elle-même ; il lui faut un cas de base qui arrête les appels.',
          en: 'By value: the function receives a copy, the original doesn’t change. By address: pass &x and the function receives a pointer int *p; with *p it changes the original (details in Programming II). A recursive function calls itself; it needs a base case that stops the calls.',
          tr: 'Değerle: fonksiyon bir kopya alır, asıl değer değişmez. Adresle: &x geçirilir ve fonksiyon int *p işaretçisini alır; *p ile asıl değeri değiştirir (ayrıntılar Programlama II’de). Özyinelemeli bir fonksiyon kendini çağırır; çağrıları durduran bir temel duruma ihtiyacı vardır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'void doubler(int *p) { *p = *p * 2; }   // doubler(&x); modifie x\n\nint fact(int n) {\n    if (n <= 1) return 1;          // cas de base\n    return n * fact(n - 1);        // appel récursif\n}',
          en: 'void twice(int *p) { *p = *p * 2; }     // twice(&x); changes x\n\nint fact(int n) {\n    if (n <= 1) return 1;          // base case\n    return n * fact(n - 1);        // recursive call\n}',
          tr: 'void ikiKat(int *p) { *p = *p * 2; }    // ikiKat(&x); x’i değiştirir\n\nint fakt(int n) {\n    if (n <= 1) return 1;          // temel durum\n    return n * fakt(n - 1);        // özyinelemeli çağrı\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Suis les appels de fact(4) jusqu’au résultat. (2) Avec int x = 5; doubler(&x);, que vaut x ? (3) Que se passerait-il sans la ligne du cas de base ?',
          en: '(1) Trace the calls of fact(4) up to the result. (2) With int x = 5; twice(&x);, what is x? (3) What would happen without the base case line?',
          tr: '(1) fakt(4) çağrılarını sonuca kadar izle. (2) int x = 5; ikiKat(&x); ile x kaçtır? (3) Temel durum satırı olmasaydı ne olurdu?',
        },
        solution: {
          fr: '(1) fact(4) = 4 × fact(3) = 4 × 3 × fact(2) = 4 × 3 × 2 × fact(1) = 4 × 3 × 2 × 1 = 24. Les appels s’empilent, puis les multiplications se font au retour. (2) x = 10, car la fonction travaille sur l’adresse de x. (3) fact s’appellerait sans fin (fact(0), fact(−1)…) jusqu’à remplir la pile : le programme plante (stack overflow).',
          en: '(1) fact(4) = 4 × fact(3) = 4 × 3 × fact(2) = 4 × 3 × 2 × fact(1) = 4 × 3 × 2 × 1 = 24. The calls stack up, then the multiplications happen on the way back. (2) x = 10, because the function works on x’s address. (3) fact would call itself forever (fact(0), fact(−1)…) until the stack fills up: the program crashes (stack overflow).',
          tr: '(1) fakt(4) = 4 × fakt(3) = 4 × 3 × fakt(2) = 4 × 3 × 2 × fakt(1) = 4 × 3 × 2 × 1 = 24. Çağrılar yığına eklenir, çarpmalar dönüşte yapılır. (2) x = 10, çünkü fonksiyon x’in adresi üzerinde çalışır. (3) fakt kendini sonsuza dek çağırırdı (fakt(0), fakt(−1)…) ve yığın dolunca program çökerdi (stack overflow).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est le rôle du cas de base dans une fonction récursive ?',
        en: 'What is the role of the base case in a recursive function?',
        tr: 'Özyinelemeli bir fonksiyonda temel durumun görevi nedir?',
      },
      options: {
        fr: ['Accélérer le calcul', 'Arrêter la chaîne d’appels', 'Afficher le résultat'],
        en: ['Speed up the computation', 'Stop the chain of calls', 'Print the result'],
        tr: ['Hesabı hızlandırmak', 'Çağrı zincirini durdurmak', 'Sonucu yazdırmak'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Sans cas de base, chaque appel en déclenche un autre, sans fin. Le cas de base renvoie une valeur directement, et les appels en attente peuvent alors se terminer.',
        en: 'Without a base case, each call triggers another, endlessly. The base case returns a value directly, so the waiting calls can then finish.',
        tr: 'Temel durum olmadan her çağrı sonsuza dek bir başkasını tetikler. Temel durum doğrudan bir değer döndürür, böylece bekleyen çağrılar tamamlanabilir.',
      },
    },
  },
  {
    id: 'c-w11-library',
    week: 11,
    title: { fr: 'Les fonctions de bibliothèque', en: 'Library functions', tr: 'Hazır fonksiyonlar' },
    blocks: [
      {
        type: 'code',
        code: {
          fr: '<math.h>   sqrt(x)  pow(x, y)  fabs(x)  ceil(x)  floor(x)  sin(x)\n           (avec gcc, compiler avec -lm)\n<stdlib.h> abs(n)  rand()  srand(graine)  exit(code)  malloc / free\n<ctype.h>  toupper(c)  tolower(c)  isdigit(c)  isalpha(c)\n<time.h>   time(NULL) → graine pour srand\n\nsrand(time(NULL));          // une fois au début\nint de = rand() % 6 + 1;    // dé : 1 à 6',
          en: '<math.h>   sqrt(x)  pow(x, y)  fabs(x)  ceil(x)  floor(x)  sin(x)\n           (with gcc, compile with -lm)\n<stdlib.h> abs(n)  rand()  srand(seed)  exit(code)  malloc / free\n<ctype.h>  toupper(c)  tolower(c)  isdigit(c)  isalpha(c)\n<time.h>   time(NULL) → seed for srand\n\nsrand(time(NULL));          // once at the start\nint die = rand() % 6 + 1;   // die: 1 to 6',
          tr: '<math.h>   sqrt(x)  pow(x, y)  fabs(x)  ceil(x)  floor(x)  sin(x)\n           (gcc ile -lm seçeneğiyle derlenir)\n<stdlib.h> abs(n)  rand()  srand(tohum)  exit(kod)  malloc / free\n<ctype.h>  toupper(c)  tolower(c)  isdigit(c)  isalpha(c)\n<time.h>   time(NULL) → srand için tohum\n\nsrand(time(NULL));          // başta bir kez\nint zar = rand() % 6 + 1;   // zar: 1-6',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'rand() donne toujours la même suite si on ne change pas la graine : srand(time(NULL)) la change à chaque exécution. rand() % 6 donne un reste entre 0 et 5, d’où le + 1.',
          en: 'rand() always gives the same sequence if the seed doesn’t change: srand(time(NULL)) changes it on every run. rand() % 6 gives a remainder from 0 to 5, hence the + 1.',
          tr: 'Tohum değişmezse rand() her zaman aynı diziyi verir: srand(time(NULL)) onu her çalıştırmada değiştirir. rand() % 6, 0 ile 5 arasında bir kalan verir, + 1 bu yüzdendir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Que valent : (1) sqrt(3 * 3 + 4 * 4) ; (2) pow(2, 10) ; (3) ceil(2.1) et floor(−2.1) ; (4) toupper(\'k\') ; (5) abs(−7) ?',
          en: 'What are: (1) sqrt(3 * 3 + 4 * 4); (2) pow(2, 10); (3) ceil(2.1) and floor(−2.1); (4) toupper(\'k\'); (5) abs(−7)?',
          tr: 'Şunlar kaçtır: (1) sqrt(3 * 3 + 4 * 4); (2) pow(2, 10); (3) ceil(2.1) ve floor(−2.1); (4) toupper(\'k\'); (5) abs(−7)?',
        },
        solution: {
          fr: '(1) √25 = 5.0 (l’hypoténuse du triangle 3-4-5). (2) 1024.0 : pow renvoie un double. (3) ceil arrondit vers le haut : 3.0 ; floor vers le bas : −3.0 (et non −2). (4) \'K\'. (5) 7.',
          en: '(1) √25 = 5.0 (the hypotenuse of the 3-4-5 triangle). (2) 1024.0: pow returns a double. (3) ceil rounds up: 3.0; floor rounds down: −3.0 (not −2). (4) \'K\'. (5) 7.',
          tr: '(1) √25 = 5.0 (3-4-5 üçgeninin hipotenüsü). (2) 1024.0: pow bir double döndürür. (3) ceil yukarı yuvarlar: 3.0; floor aşağı yuvarlar: −3.0 (−2 değil). (4) \'K\'. (5) 7.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelles valeurs peut prendre rand() % 6 + 1 ?',
        en: 'Which values can rand() % 6 + 1 take?',
        tr: 'rand() % 6 + 1 hangi değerleri alabilir?',
      },
      options: { fr: ['0 à 5', '1 à 6', '1 à 7'], en: ['0 to 5', '1 to 6', '1 to 7'], tr: ['0-5', '1-6', '1-7'] },
      answerIndex: 1,
      explanation: {
        fr: 'Le reste d’une division par 6 va de 0 à 5 ; en ajoutant 1, on obtient 1 à 6, comme un dé.',
        en: 'The remainder of a division by 6 goes from 0 to 5; adding 1 gives 1 to 6, like a die.',
        tr: '6’ya bölümden kalan 0 ile 5 arasındadır; 1 eklenince bir zar gibi 1-6 elde edilir.',
      },
    },
  },
  {
    id: 'c-w12-arrays',
    week: 12,
    title: { fr: 'Tableaux et matrices', en: 'Arrays and matrices', tr: 'Diziler ve matrisler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un tableau range n valeurs du même type, côte à côte en mémoire, numérotées de 0 à n − 1. Le C ne vérifie pas les indices : écrire t[n] déborde du tableau et provoque un comportement imprévisible. Une matrice est un tableau à deux dimensions, ligne puis colonne.',
          en: 'An array stores n values of the same type, side by side in memory, numbered 0 to n − 1. C does not check indexes: writing t[n] overflows the array and causes unpredictable behavior. A matrix is a two-dimensional array, row then column.',
          tr: 'Dizi aynı tipten n değeri bellekte yan yana, 0’dan n − 1’e numaralanmış şekilde saklar. C indisleri denetlemez: t[n] yazmak dizinin dışına taşar ve öngörülemeyen davranışa yol açar. Matris iki boyutlu bir dizidir: önce satır, sonra sütun.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'int notes[5] = {12, 15, 9, 18, 11};\nint max = notes[0];\nfor (int i = 1; i < 5; i++)\n    if (notes[i] > max) max = notes[i];\n\nint m[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nint trace = 0;\nfor (int i = 0; i < 3; i++)\n    trace += m[i][i];             // diagonale principale\n\n// passer un tableau à une fonction : on donne aussi sa taille\nint somme(int t[], int n);',
          en: 'int grades[5] = {12, 15, 9, 18, 11};\nint max = grades[0];\nfor (int i = 1; i < 5; i++)\n    if (grades[i] > max) max = grades[i];\n\nint m[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nint trace = 0;\nfor (int i = 0; i < 3; i++)\n    trace += m[i][i];             // main diagonal\n\n// passing an array to a function: also give its size\nint sum(int t[], int n);',
          tr: 'int notlar[5] = {12, 15, 9, 18, 11};\nint max = notlar[0];\nfor (int i = 1; i < 5; i++)\n    if (notlar[i] > max) max = notlar[i];\n\nint m[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nint iz = 0;\nfor (int i = 0; i < 3; i++)\n    iz += m[i][i];                // ana köşegen\n\n// diziyi fonksiyona geçirirken boyutu da verilir\nint toplam(int t[], int n);',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec le code ci-dessus : (1) que vaut max ? (2) que vaut la somme de la diagonale principale ? (3) que vaut m[2][0] ? (4) Écris la boucle qui calcule la somme de la dernière colonne.',
          en: 'With the code above: (1) what is max? (2) what is the sum of the main diagonal? (3) what is m[2][0]? (4) Write the loop that sums the last column.',
          tr: 'Yukarıdaki kodla: (1) max kaçtır? (2) ana köşegenin toplamı kaçtır? (3) m[2][0] kaçtır? (4) Son sütunu toplayan döngüyü yaz.',
        },
        solution: {
          fr: '(1) 18. (2) m[0][0] + m[1][1] + m[2][2] = 1 + 5 + 9 = 15. (3) Ligne 2, colonne 0 : 7. (4) int s = 0; for (int i = 0; i < 3; i++) s += m[i][2]; donne 3 + 6 + 9 = 18.',
          en: '(1) 18. (2) m[0][0] + m[1][1] + m[2][2] = 1 + 5 + 9 = 15. (3) Row 2, column 0: 7. (4) int s = 0; for (int i = 0; i < 3; i++) s += m[i][2]; gives 3 + 6 + 9 = 18.',
          tr: '(1) 18. (2) m[0][0] + m[1][1] + m[2][2] = 1 + 5 + 9 = 15. (3) 2. satır, 0. sütun: 7. (4) int s = 0; for (int i = 0; i < 3; i++) s += m[i][2]; sonucu 3 + 6 + 9 = 18.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est le dernier indice valide de int t[10] ?',
        en: 'What is the last valid index of int t[10]?',
        tr: 'int t[10] dizisinin son geçerli indisi nedir?',
      },
      options: { fr: ['9', '10', '11'], en: ['9', '10', '11'], tr: ['9', '10', '11'] },
      answerIndex: 0,
      explanation: {
        fr: 'Les indices vont de 0 à 9 : 10 cases. t[10] est en dehors du tableau, et le C ne le signale pas.',
        en: 'Indexes go from 0 to 9: 10 cells. t[10] is outside the array, and C does not report it.',
        tr: 'İndisler 0’dan 9’a kadardır: 10 hücre. t[10] dizinin dışındadır ve C bunu bildirmez.',
      },
    },
  },
  {
    id: 'c-w13-structs',
    week: 13,
    title: { fr: 'Les structures (struct)', en: 'Structures (struct)', tr: 'Yapılar (struct)' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une structure regroupe des données de types différents qui décrivent une même chose : un étudiant a un nom, un numéro et des notes. On accède à un champ avec un point (e.nom), ou avec une flèche à travers un pointeur (p->nom, qui vaut (*p).nom).',
          en: 'A structure groups data of different types describing one thing: a student has a name, a number and grades. A field is reached with a dot (s.name), or with an arrow through a pointer (p->name, which equals (*p).name).',
          tr: 'Yapı, aynı şeyi tanımlayan farklı tipteki verileri bir araya getirir: bir öğrencinin adı, numarası ve notları vardır. Bir alana nokta ile (o.ad) veya bir işaretçi üzerinden ok ile erişilir (p->ad, yani (*p).ad).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'typedef struct {\n    char nom[20];\n    int vize;\n    int final;\n} Etudiant;\n\nEtudiant classe[2] = {{"Ali", 60, 80}, {"Ayse", 45, 50}};\nfor (int i = 0; i < 2; i++) {\n    double moy = classe[i].vize * 0.4 + classe[i].final * 0.6;\n    printf("%s : %.1f\\n", classe[i].nom, moy);\n}\n\nEtudiant *p = &classe[0];\np->final = 90;              // même chose que (*p).final = 90',
          en: 'typedef struct {\n    char name[20];\n    int vize;\n    int final;\n} Student;\n\nStudent group[2] = {{"Ali", 60, 80}, {"Ayse", 45, 50}};\nfor (int i = 0; i < 2; i++) {\n    double avg = group[i].vize * 0.4 + group[i].final * 0.6;\n    printf("%s: %.1f\\n", group[i].name, avg);\n}\n\nStudent *p = &group[0];\np->final = 90;              // same as (*p).final = 90',
          tr: 'typedef struct {\n    char ad[20];\n    int vize;\n    int final;\n} Ogrenci;\n\nOgrenci sinif[2] = {{"Ali", 60, 80}, {"Ayse", 45, 50}};\nfor (int i = 0; i < 2; i++) {\n    double ort = sinif[i].vize * 0.4 + sinif[i].final * 0.6;\n    printf("%s: %.1f\\n", sinif[i].ad, ort);\n}\n\nOgrenci *p = &sinif[0];\np->final = 90;              // (*p).final = 90 ile aynı',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Qu’affiche la boucle ci-dessus ? Après p->final = 90, quelle est la nouvelle moyenne d’Ali ?',
          en: 'What does the loop above print? After p->final = 90, what is Ali’s new average?',
          tr: 'Yukarıdaki döngü ne yazdırır? p->final = 90’dan sonra Ali’nin yeni ortalaması kaçtır?',
        },
        solution: {
          fr: 'Ali : 60 × 0,4 + 80 × 0,6 = 24 + 48 = 72.0 ; Ayse : 45 × 0,4 + 50 × 0,6 = 18 + 30 = 48.0. Après p->final = 90 (p pointe sur classe[0], donc Ali) : 24 + 54 = 78.0. Le pointeur modifie bien l’élément du tableau, pas une copie.',
          en: 'Ali: 60 × 0.4 + 80 × 0.6 = 24 + 48 = 72.0; Ayse: 45 × 0.4 + 50 × 0.6 = 18 + 30 = 48.0. After p->final = 90 (p points to group[0], so Ali): 24 + 54 = 78.0. The pointer really changes the array element, not a copy.',
          tr: 'Ali: 60 × 0,4 + 80 × 0,6 = 24 + 48 = 72.0; Ayse: 45 × 0,4 + 50 × 0,6 = 18 + 30 = 48.0. p->final = 90’dan sonra (p, sinif[0]’ı yani Ali’yi gösterir): 24 + 54 = 78.0. İşaretçi bir kopyayı değil dizinin elemanını değiştirir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Avec Etudiant *p, comment accède-t-on au champ nom ?',
        en: 'With Student *p, how is the name field reached?',
        tr: 'Ogrenci *p ile ad alanına nasıl erişilir?',
      },
      options: { fr: ['p.nom', 'p->nom', '*p.nom'], en: ['p.name', 'p->name', '*p.name'], tr: ['p.ad', 'p->ad', '*p.ad'] },
      answerIndex: 1,
      explanation: {
        fr: 'p->nom est l’écriture courte de (*p).nom. *p.nom est faux : le point est prioritaire sur l’étoile, cela voudrait dire *(p.nom).',
        en: 'p->name is short for (*p).name. *p.name is wrong: the dot binds tighter than the star, so it would mean *(p.name).',
        tr: 'p->ad, (*p).ad’ın kısa yazılışıdır. *p.ad yanlıştır: nokta yıldızdan önceliklidir, bu *(p.ad) anlamına gelirdi.',
      },
    },
  },
  {
    id: 'c-w14-strings',
    week: 14,
    title: {
      fr: 'Chaînes de caractères et révision du final',
      en: 'Strings and final review',
      tr: 'Dizgiler (katarlar) ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En C, une chaîne est un tableau de char terminé par le caractère nul \'\\0\'. "Ali" occupe donc 4 octets. On ne compare pas deux chaînes avec == (cela compare des adresses) : on utilise strcmp, qui renvoie 0 si elles sont égales.',
          en: 'In C, a string is a char array ended by the null character \'\\0\'. "Ali" therefore takes 4 bytes. Two strings are not compared with == (that compares addresses): use strcmp, which returns 0 when they are equal.',
          tr: 'C’de dizgi, \'\\0\' boş karakteriyle biten bir char dizisidir. Bu yüzden "Ali" 4 bayt kaplar. İki dizgi == ile karşılaştırılmaz (bu adresleri karşılaştırır): eşitlerse 0 döndüren strcmp kullanılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '#include <string.h>\nchar s[20] = "Bonjour";\nstrlen(s)            // 7 (sans le \'\\0\')\nstrcpy(d, s)         // copie s dans d\nstrcat(s, " Ali")    // ajoute à la fin : "Bonjour Ali"\nstrcmp(a, b)         // 0 si égales, < 0 si a avant b, > 0 sinon\nfgets(s, 20, stdin)  // lit une ligne sans déborder (gets est dangereux)\n\nint longueur(const char *s) {   // notre propre strlen\n    int n = 0;\n    while (s[n] != \'\\0\') n++;\n    return n;\n}',
          en: '#include <string.h>\nchar s[20] = "Hello";\nstrlen(s)            // 5 (without the \'\\0\')\nstrcpy(d, s)         // copies s into d\nstrcat(s, " Ali")    // appends: "Hello Ali"\nstrcmp(a, b)         // 0 if equal, < 0 if a comes first, > 0 otherwise\nfgets(s, 20, stdin)  // reads a line without overflowing (gets is dangerous)\n\nint length(const char *s) {     // our own strlen\n    int n = 0;\n    while (s[n] != \'\\0\') n++;\n    return n;\n}',
          tr: '#include <string.h>\nchar s[20] = "Merhaba";\nstrlen(s)            // 7 (\'\\0\' hariç)\nstrcpy(d, s)         // s’yi d’ye kopyalar\nstrcat(s, " Ali")    // sona ekler: "Merhaba Ali"\nstrcmp(a, b)         // eşitse 0, a önce gelirse < 0, değilse > 0\nfgets(s, 20, stdin)  // taşmadan bir satır okur (gets tehlikelidir)\n\nint uzunluk(const char *s) {    // kendi strlen fonksiyonumuz\n    int n = 0;\n    while (s[n] != \'\\0\') n++;\n    return n;\n}',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Boucles imbriquées, break, continue, test de primalité\n✔ Fonctions : prototype, return, void, portée, static\n✔ Passage par valeur / par adresse, récursivité et cas de base\n✔ math.h, stdlib.h, ctype.h, rand / srand\n✔ Tableaux, indices 0 à n − 1, matrices, passage à une fonction\n✔ struct, typedef, point et flèche\n✔ Chaînes : \'\\0\', strlen, strcpy, strcat, strcmp, fgets',
          en: '✔ Nested loops, break, continue, primality test\n✔ Functions: prototype, return, void, scope, static\n✔ Pass by value / by address, recursion and base case\n✔ math.h, stdlib.h, ctype.h, rand / srand\n✔ Arrays, indexes 0 to n − 1, matrices, passing to a function\n✔ struct, typedef, dot and arrow\n✔ Strings: \'\\0\', strlen, strcpy, strcat, strcmp, fgets',
          tr: '✔ İç içe döngüler, break, continue, asallık testi\n✔ Fonksiyonlar: prototip, return, void, kapsam, static\n✔ Değerle / adresle aktarım, özyineleme ve temel durum\n✔ math.h, stdlib.h, ctype.h, rand / srand\n✔ Diziler, 0’dan n − 1’e indisler, matrisler, fonksiyona geçirme\n✔ struct, typedef, nokta ve ok\n✔ Dizgiler: \'\\0\', strlen, strcpy, strcat, strcmp, fgets',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris une fonction int voyelles(const char *s) qui compte les voyelles (a, e, i, o, u, en minuscules) d’une chaîne. Que renvoie-t-elle pour "programmation" ?',
          en: 'Write a function int vowels(const char *s) that counts the vowels (a, e, i, o, u, lowercase) in a string. What does it return for "programming"?',
          tr: 'Bir dizgideki ünlüleri (a, e, i, o, u, küçük harf) sayan int unluler(const char *s) fonksiyonunu yaz. "programlama" için ne döndürür?',
        },
        solution: {
          fr: 'int voyelles(const char *s) { int n = 0; for (int i = 0; s[i] != \'\\0\'; i++) if (strchr("aeiou", s[i])) n++; return n; } (ou un switch sur s[i]). "programmation" : o, a, a, i, o, soit 5 voyelles.',
          en: 'int vowels(const char *s) { int n = 0; for (int i = 0; s[i] != \'\\0\'; i++) if (strchr("aeiou", s[i])) n++; return n; } (or a switch on s[i]). "programming": o, a, i, so 3 vowels.',
          tr: 'int unluler(const char *s) { int n = 0; for (int i = 0; s[i] != \'\\0\'; i++) if (strchr("aeiou", s[i])) n++; return n; } (veya s[i] üzerinde bir switch). "programlama": o, a, a, a, yani 4 ünlü.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien d’octets la chaîne "Ali" occupe-t-elle en mémoire ?',
        en: 'How many bytes does the string "Ali" take in memory?',
        tr: '"Ali" dizgisi bellekte kaç bayt kaplar?',
      },
      options: { fr: ['3', '4', '6'], en: ['3', '4', '6'], tr: ['3', '4', '6'] },
      answerIndex: 1,
      explanation: {
        fr: 'Trois lettres plus le caractère nul \'\\0\' qui marque la fin : 4 octets. strlen("Ali") vaut 3, sizeof("Ali") vaut 4.',
        en: 'Three letters plus the null character \'\\0\' marking the end: 4 bytes. strlen("Ali") is 3, sizeof("Ali") is 4.',
        tr: 'Üç harf ve sonu belirten \'\\0\' boş karakteri: 4 bayt. strlen("Ali") 3, sizeof("Ali") 4’tür.',
      },
    },
  },
];
