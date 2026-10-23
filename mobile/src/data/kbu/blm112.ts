/**
 * BLM112 Programlama Dilleri II (Programming Languages II), 14 weeks following the KBU course contents:
 * C (bitwise operations, pointers, sorting and searching, files, lists), then visual programming
 * (examples in C# Windows Forms). Weeks 1–7 prepare the midterm, weeks 8–14 the final.
 * Weeks 3, 4 and 8 keep the ids of the former 3-lesson course.
 */

import type { LessonSource } from '@/data/lessons';

export const blm112Lessons: LessonSource[] = [
  {
    id: 'c2-w01-bitwise',
    week: 1,
    title: { fr: 'Les opérateurs bit à bit', en: 'Bitwise operators', tr: 'Bit düzeyinde işleçler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Les opérateurs bit à bit travaillent directement sur les bits d’un entier. Ils sont très utilisés en programmation système et embarquée : registres de périphériques, options codées dans un seul octet, calculs rapides.',
          en: 'Bitwise operators work directly on the bits of an integer. They are widely used in systems and embedded programming: device registers, options packed into a single byte, fast computations.',
          tr: 'Bit düzeyinde işleçler bir tam sayının bitleri üzerinde doğrudan çalışır. Sistem ve gömülü programlamada çok kullanılır: aygıt yazmaçları, tek bir bayta sığdırılmış seçenekler, hızlı hesaplamalar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '&   ET bit à bit          1 & 1 = 1, sinon 0\n|   OU bit à bit          0 | 0 = 0, sinon 1\n^   OU exclusif (XOR)     1 si les bits sont différents\n~   NON (inverse tous les bits)\n<<  décalage à gauche     x << n = x × 2ⁿ\n>>  décalage à droite     x >> n = x / 2ⁿ (entiers positifs)\n\nAttention : & et && sont différents (bit à bit / logique)',
          en: '&   bitwise AND          1 & 1 = 1, otherwise 0\n|   bitwise OR           0 | 0 = 0, otherwise 1\n^   exclusive OR (XOR)   1 if the bits differ\n~   NOT (flips every bit)\n<<  left shift           x << n = x × 2ⁿ\n>>  right shift          x >> n = x / 2ⁿ (positive integers)\n\nCareful: & and && are different (bitwise / logical)',
          tr: '&   bit düzeyinde VE        1 & 1 = 1, aksi halde 0\n|   bit düzeyinde VEYA      0 | 0 = 0, aksi halde 1\n^   özel VEYA (XOR)         bitler farklıysa 1\n~   DEĞİL (tüm bitleri tersler)\n<<  sola kaydırma           x << n = x × 2ⁿ\n>>  sağa kaydırma           x >> n = x / 2ⁿ (pozitif tam sayılar)\n\nDikkat: & ile && farklıdır (bit düzeyinde / mantıksal)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec a = 12 et b = 10, calcule a & b, a | b, a ^ b, a << 1 et a >> 2. Écris d’abord a et b en binaire sur 4 bits.',
          en: 'With a = 12 and b = 10, compute a & b, a | b, a ^ b, a << 1 and a >> 2. First write a and b in 4-bit binary.',
          tr: 'a = 12 ve b = 10 için a & b, a | b, a ^ b, a << 1 ve a >> 2 değerlerini hesapla. Önce a ve b’yi 4 bit ikilik olarak yaz.',
        },
        solution: {
          fr: 'a = 1100, b = 1010. a & b = 1000 = 8. a | b = 1110 = 14. a ^ b = 0110 = 6. a << 1 = 11000 = 24 (× 2). a >> 2 = 0011 = 3 (÷ 4). Les décalages sont une façon très rapide de multiplier ou diviser par une puissance de 2.',
          en: 'a = 1100, b = 1010. a & b = 1000 = 8. a | b = 1110 = 14. a ^ b = 0110 = 6. a << 1 = 11000 = 24 (× 2). a >> 2 = 0011 = 3 (÷ 4). Shifts are a very fast way to multiply or divide by a power of 2.',
          tr: 'a = 1100, b = 1010. a & b = 1000 = 8. a | b = 1110 = 14. a ^ b = 0110 = 6. a << 1 = 11000 = 24 (× 2). a >> 2 = 0011 = 3 (÷ 4). Kaydırmalar 2’nin kuvvetleriyle çarpmanın veya bölmenin çok hızlı bir yoludur.',
        },
      },
    ],
    quiz: {
      question: { fr: 'Que vaut 5 << 3 ?', en: 'What is 5 << 3?', tr: '5 << 3 kaçtır?' },
      options: { fr: ['15', '40', '8'], en: ['15', '40', '8'], tr: ['15', '40', '8'] },
      answerIndex: 1,
      explanation: {
        fr: 'Décaler de 3 vers la gauche multiplie par 2³ = 8 : 5 × 8 = 40 (101 devient 101000).',
        en: 'Shifting left by 3 multiplies by 2³ = 8: 5 × 8 = 40 (101 becomes 101000).',
        tr: '3 sola kaydırmak 2³ = 8 ile çarpar: 5 × 8 = 40 (101, 101000 olur).',
      },
    },
  },
  {
    id: 'c2-w02-masks',
    week: 2,
    title: { fr: 'Masques et manipulation de bits', en: 'Masks and bit manipulation', tr: 'Maskeler ve bit işlemleri' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un masque est un nombre qui ne contient des 1 qu’aux positions qui nous intéressent. (1 << n) est le masque du bit n. Avec |, & et ^, on met un bit à 1, à 0, on l’inverse ou on le teste sans toucher aux autres.',
          en: 'A mask is a number with 1s only at the positions of interest. (1 << n) is the mask of bit n. With |, & and ^, a bit is set, cleared, toggled or tested without touching the others.',
          tr: 'Maske, yalnızca ilgilenilen konumlarda 1 içeren bir sayıdır. (1 << n), n. bitin maskesidir. |, & ve ^ ile bir bit diğerlerine dokunmadan 1 yapılır, 0 yapılır, terslenir veya sınanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'x |=  (1 << n);        // mettre le bit n à 1\nx &= ~(1 << n);        // mettre le bit n à 0\nx ^=  (1 << n);        // inverser le bit n\n(x >> n) & 1           // lire le bit n (0 ou 1)\nx & 1                  // 1 si x est impair\n\nint compter(unsigned x) {          // nombre de bits à 1\n    int c = 0;\n    while (x) { c += x & 1; x >>= 1; }\n    return c;\n}',
          en: 'x |=  (1 << n);        // set bit n\nx &= ~(1 << n);        // clear bit n\nx ^=  (1 << n);        // toggle bit n\n(x >> n) & 1           // read bit n (0 or 1)\nx & 1                  // 1 if x is odd\n\nint count(unsigned x) {            // number of 1 bits\n    int c = 0;\n    while (x) { c += x & 1; x >>= 1; }\n    return c;\n}',
          tr: 'x |=  (1 << n);        // n. biti 1 yap\nx &= ~(1 << n);        // n. biti 0 yap\nx ^=  (1 << n);        // n. biti tersle\n(x >> n) & 1           // n. biti oku (0 veya 1)\nx & 1                  // x tekse 1\n\nint say(unsigned x) {              // 1 olan bitlerin sayısı\n    int c = 0;\n    while (x) { c += x & 1; x >>= 1; }\n    return c;\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'x = 80 (0101 0000). On fait, dans l’ordre : mettre le bit 1 à 1, mettre le bit 4 à 0, inverser le bit 7. Donne x après chaque étape et le nombre de bits à 1 à la fin.',
          en: 'x = 80 (0101 0000). In order: set bit 1, clear bit 4, toggle bit 7. Give x after each step and the number of 1 bits at the end.',
          tr: 'x = 80 (0101 0000). Sırasıyla: 1. biti 1 yap, 4. biti 0 yap, 7. biti tersle. Her adımdan sonra x’i ve sonunda 1 olan bit sayısını ver.',
        },
        solution: {
          fr: 'Bit 1 à 1 : 0101 0010 = 82. Bit 4 à 0 : 0100 0010 = 66. Inverser le bit 7 : 1100 0010 = 194. Bits à 1 : les bits 7, 6 et 1, soit 3.',
          en: 'Set bit 1: 0101 0010 = 82. Clear bit 4: 0100 0010 = 66. Toggle bit 7: 1100 0010 = 194. 1 bits: bits 7, 6 and 1, so 3.',
          tr: '1. biti 1 yap: 0101 0010 = 82. 4. biti 0 yap: 0100 0010 = 66. 7. biti tersle: 1100 0010 = 194. 1 olan bitler: 7, 6 ve 1. bitler, yani 3.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle expression met le bit 3 de x à 0 sans changer les autres ?',
        en: 'Which expression clears bit 3 of x without changing the others?',
        tr: 'Hangi ifade diğerlerini değiştirmeden x’in 3. bitini 0 yapar?',
      },
      options: { fr: ['x |= (1 << 3)', 'x &= ~(1 << 3)', 'x ^= 3'], en: ['x |= (1 << 3)', 'x &= ~(1 << 3)', 'x ^= 3'], tr: ['x |= (1 << 3)', 'x &= ~(1 << 3)', 'x ^= 3'] },
      answerIndex: 1,
      explanation: {
        fr: '~(1 << 3) a des 1 partout sauf au bit 3 : le ET garde tous les bits sauf celui-là, qui passe à 0. | le mettrait à 1.',
        en: '~(1 << 3) has 1s everywhere except bit 3: the AND keeps every bit except that one, which becomes 0. | would set it to 1.',
        tr: '~(1 << 3), 3. bit dışında her yerde 1 içerir: VE işlemi o bit dışındaki tüm bitleri korur, o bit 0 olur. | onu 1 yapardı.',
      },
    },
  },
  {
    id: 'c-pointers',
    week: 3,
    title: { fr: 'Les pointeurs', en: 'Pointers', tr: 'İşaretçiler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Chaque variable est rangée à une adresse dans la mémoire. Un pointeur est une variable qui contient une adresse. &x donne l’adresse de x ; *p donne la valeur rangée à l’adresse contenue dans p.',
          en: 'Every variable is stored at an address in memory. A pointer is a variable that holds an address. &x gives the address of x; *p gives the value stored at the address p holds.',
          tr: 'Her değişken bellekte bir adreste saklanır. İşaretçi, bir adres tutan değişkendir. &x, x’in adresini verir; *p, p’nin tuttuğu adresteki değeri verir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'int x = 10;\nint *p = &x;     // p contient l’adresse de x\n*p = 25;         // on modifie x à travers p\nprintf("%d\\n", x);    // 25\nprintf("%p\\n", (void *)p);   // affiche l’adresse\n\nint *q = NULL;   // pointeur qui ne pointe sur rien\nif (q != NULL) printf("%d", *q);   // toujours vérifier avant *q',
          en: 'int x = 10;\nint *p = &x;     // p holds the address of x\n*p = 25;         // we change x through p\nprintf("%d\\n", x);    // 25\nprintf("%p\\n", (void *)p);   // prints the address\n\nint *q = NULL;   // pointer to nothing\nif (q != NULL) printf("%d", *q);   // always check before *q',
          tr: 'int x = 10;\nint *p = &x;     // p, x’in adresini tutar\n*p = 25;         // x’i p üzerinden değiştiriyoruz\nprintf("%d\\n", x);    // 25\nprintf("%p\\n", (void *)p);   // adresi yazdırır\n\nint *q = NULL;   // hiçbir şeyi göstermeyen işaretçi\nif (q != NULL) printf("%d", *q);   // *q’dan önce hep kontrol et',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Suis ce code et donne la valeur de a, b et *p à la fin : int a = 3, b = 8; int *p = &a; *p += 4; p = &b; *p = *p * 2;',
          en: 'Trace this code and give a, b and *p at the end: int a = 3, b = 8; int *p = &a; *p += 4; p = &b; *p = *p * 2;',
          tr: 'Bu kodu izle ve sonunda a, b ve *p’yi ver: int a = 3, b = 8; int *p = &a; *p += 4; p = &b; *p = *p * 2;',
        },
        solution: {
          fr: 'p pointe sur a : *p += 4 donne a = 7. Puis p pointe sur b : *p = 8 × 2 donne b = 16. Fin : a = 7, b = 16, *p = 16 (p pointe maintenant sur b). Un pointeur peut changer de cible ; *p désigne toujours la cible actuelle.',
          en: 'p points to a: *p += 4 gives a = 7. Then p points to b: *p = 8 × 2 gives b = 16. End: a = 7, b = 16, *p = 16 (p now points to b). A pointer can change target; *p always means the current target.',
          tr: 'p, a’yı gösterir: *p += 4, a = 7 yapar. Sonra p, b’yi gösterir: *p = 8 × 2, b = 16 yapar. Son: a = 7, b = 16, *p = 16 (p artık b’yi gösterir). İşaretçi hedef değiştirebilir; *p her zaman o anki hedefi gösterir.',
        },
      },
    ],
    quiz: {
      question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
      code: 'int a = 3;\nint *p = &a;\n*p = *p + 4;\nprintf("%d", a);',
      options: { fr: ['3', '4', '7'], en: ['3', '4', '7'], tr: ['3', '4', '7'] },
      answerIndex: 2,
      explanation: {
        fr: 'p pointe sur a. *p + 4 vaut 3 + 4 = 7, et ce résultat est rangé dans *p, c’est-à-dire dans a.',
        en: 'p points to a. *p + 4 is 3 + 4 = 7, and that result is stored in *p, which means in a.',
        tr: 'p, a’yı gösterir. *p + 4 = 3 + 4 = 7 olur ve bu sonuç *p’ye, yani a’ya yazılır.',
      },
    },
  },
  {
    id: 'c-pointers-functions',
    week: 4,
    title: {
      fr: 'Pointeurs, fonctions et tableaux',
      en: 'Pointers, functions and arrays',
      tr: 'İşaretçiler, fonksiyonlar ve diziler',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une fonction reçoit une copie de ses paramètres. Pour qu’elle modifie une variable, on lui passe son adresse. Un tableau est passé par son adresse : le nom t vaut &t[0], et t[i] est la même chose que *(t + i). Ajouter 1 à un pointeur avance d’un élément entier (4 octets pour un int).',
          en: 'A function receives a copy of its parameters. For it to change a variable, pass the variable’s address. An array is passed by its address: the name t equals &t[0], and t[i] is the same as *(t + i). Adding 1 to a pointer moves by one whole element (4 bytes for an int).',
          tr: 'Bir fonksiyon parametrelerinin bir kopyasını alır. Bir değişkeni değiştirebilmesi için adresi verilir. Dizi adresiyle geçirilir: t adı &t[0]’a eşittir ve t[i], *(t + i) ile aynıdır. Bir işaretçiye 1 eklemek bir eleman ilerletir (int için 4 bayt).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'void echanger(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint x = 1, y = 2;\nechanger(&x, &y);              // x = 2, y = 1\n\nint t[4] = {10, 20, 30, 40};\nint *p = t;                    // p = &t[0]\nprintf("%d %d\\n", *(p + 2), p[3]);   // 30 40',
          en: 'void swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint x = 1, y = 2;\nswap(&x, &y);                  // x = 2, y = 1\n\nint t[4] = {10, 20, 30, 40};\nint *p = t;                    // p = &t[0]\nprintf("%d %d\\n", *(p + 2), p[3]);   // 30 40',
          tr: 'void degistir(int *a, int *b) {\n    int gecici = *a;\n    *a = *b;\n    *b = gecici;\n}\n\nint x = 1, y = 2;\ndegistir(&x, &y);              // x = 2, y = 1\n\nint t[4] = {10, 20, 30, 40};\nint *p = t;                    // p = &t[0]\nprintf("%d %d\\n", *(p + 2), p[3]);   // 30 40',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris une fonction void minmax(int t[], int n, int *min, int *max) qui renvoie le minimum et le maximum d’un tableau par ses paramètres. Comment l’appelle-t-on ?',
          en: 'Write a function void minmax(int t[], int n, int *min, int *max) that returns an array’s minimum and maximum through its parameters. How is it called?',
          tr: 'Bir dizinin en küçük ve en büyük değerini parametreleri üzerinden döndüren void minmax(int t[], int n, int *min, int *max) fonksiyonunu yaz. Nasıl çağrılır?',
        },
        solution: {
          fr: '*min = *max = t[0]; for (int i = 1; i < n; i++) { if (t[i] < *min) *min = t[i]; if (t[i] > *max) *max = t[i]; }. Appel : int mi, ma; minmax(t, 4, &mi, &ma);. Une fonction ne renvoie qu’une valeur avec return ; les pointeurs permettent d’en « renvoyer » plusieurs.',
          en: '*min = *max = t[0]; for (int i = 1; i < n; i++) { if (t[i] < *min) *min = t[i]; if (t[i] > *max) *max = t[i]; }. Call: int lo, hi; minmax(t, 4, &lo, &hi);. A function returns only one value with return; pointers let it “return” several.',
          tr: '*min = *max = t[0]; for (int i = 1; i < n; i++) { if (t[i] < *min) *min = t[i]; if (t[i] > *max) *max = t[i]; }. Çağrı: int en_kucuk, en_buyuk; minmax(t, 4, &en_kucuk, &en_buyuk);. Bir fonksiyon return ile yalnızca bir değer döndürür; işaretçiler birden fazla değer “döndürmeyi” sağlar.',
        },
      },
    ],
    quiz: {
      question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
      code: {
        fr: 'void ajouterUn(int n) {\n    n = n + 1;\n}\n\nint x = 5;\najouterUn(x);\nprintf("%d", x);',
        en: 'void addOne(int n) {\n    n = n + 1;\n}\n\nint x = 5;\naddOne(x);\nprintf("%d", x);',
        tr: 'void birEkle(int n) {\n    n = n + 1;\n}\n\nint x = 5;\nbirEkle(x);\nprintf("%d", x);',
      },
      options: { fr: ['5', '6', 'Une erreur'], en: ['5', '6', 'An error'], tr: ['5', '6', 'Bir hata'] },
      answerIndex: 0,
      explanation: {
        fr: 'La fonction reçoit une copie de x : elle modifie sa copie n, pas x. Pour changer x, il faudrait passer &x et un paramètre int *n.',
        en: 'The function receives a copy of x: it changes its copy n, not x. To change x, you would pass &x and use an int *n parameter.',
        tr: 'Fonksiyon x’in bir kopyasını alır: x’i değil, kendi kopyası olan n’yi değiştirir. x’i değiştirmek için &x verilmeli ve int *n parametresi kullanılmalıdır.',
      },
    },
  },
  {
    id: 'c2-w05-dynamic-memory',
    week: 5,
    title: { fr: 'Allocation dynamique de mémoire', en: 'Dynamic memory allocation', tr: 'Dinamik bellek yönetimi' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un tableau classique a une taille fixée à la compilation. Avec malloc, on réserve la mémoire pendant l’exécution, quand on connaît la taille. Cette mémoire vient du tas (heap) et reste réservée jusqu’à free : l’oublier crée une fuite de mémoire.',
          en: 'A regular array has a size fixed at compile time. With malloc, memory is reserved at run time, once the size is known. This memory comes from the heap and stays reserved until free: forgetting it causes a memory leak.',
          tr: 'Normal bir dizinin boyutu derleme anında sabittir. malloc ile bellek, boyut bilindiğinde çalışma anında ayrılır. Bu bellek yığından (heap) gelir ve free çağrılana kadar ayrılmış kalır: unutmak bellek sızıntısına yol açar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '#include <stdlib.h>\nint n;\nscanf("%d", &n);\nint *t = malloc(n * sizeof(int));     // n entiers\nif (t == NULL) { printf("Plus de mémoire\\n"); return 1; }\nfor (int i = 0; i < n; i++) t[i] = i * i;\n\nt = realloc(t, 2 * n * sizeof(int));  // agrandir (vérifier NULL aussi)\nfree(t);                              // rendre la mémoire\nt = NULL;                             // éviter un pointeur pendant\n\ncalloc(n, sizeof(int))   // comme malloc, mais met tout à 0',
          en: '#include <stdlib.h>\nint n;\nscanf("%d", &n);\nint *t = malloc(n * sizeof(int));     // n integers\nif (t == NULL) { printf("Out of memory\\n"); return 1; }\nfor (int i = 0; i < n; i++) t[i] = i * i;\n\nt = realloc(t, 2 * n * sizeof(int));  // grow it (check NULL too)\nfree(t);                              // give the memory back\nt = NULL;                             // avoid a dangling pointer\n\ncalloc(n, sizeof(int))   // like malloc, but sets everything to 0',
          tr: '#include <stdlib.h>\nint n;\nscanf("%d", &n);\nint *t = malloc(n * sizeof(int));     // n tam sayı\nif (t == NULL) { printf("Bellek yetersiz\\n"); return 1; }\nfor (int i = 0; i < n; i++) t[i] = i * i;\n\nt = realloc(t, 2 * n * sizeof(int));  // büyüt (NULL kontrolü de yap)\nfree(t);                              // belleği geri ver\nt = NULL;                             // sarkan işaretçiyi önle\n\ncalloc(n, sizeof(int))   // malloc gibi ama her şeyi 0 yapar',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Trouve les deux erreurs de ce code et corrige-les : int *t = malloc(10); for (int i = 0; i < 10; i++) t[i] = 0; (puis la fonction se termine).',
          en: 'Find the two errors in this code and fix them: int *t = malloc(10); for (int i = 0; i < 10; i++) t[i] = 0; (then the function ends).',
          tr: 'Bu koddaki iki hatayı bul ve düzelt: int *t = malloc(10); for (int i = 0; i < 10; i++) t[i] = 0; (sonra fonksiyon biter).',
        },
        solution: {
          fr: '(1) malloc(10) réserve 10 octets, pas 10 entiers : avec des int de 4 octets, on déborde dès t[3]. Il faut malloc(10 * sizeof(int)), et vérifier que le résultat n’est pas NULL. (2) Pas de free(t) avant la fin : la mémoire est perdue à chaque appel (fuite). On ajoute free(t);.',
          en: '(1) malloc(10) reserves 10 bytes, not 10 integers: with 4-byte ints, it overflows from t[3] on. Use malloc(10 * sizeof(int)), and check the result is not NULL. (2) No free(t) before the end: the memory is lost on every call (leak). Add free(t);.',
          tr: '(1) malloc(10) 10 tam sayı değil 10 bayt ayırır: 4 baytlık int’lerle t[3]’ten itibaren taşar. malloc(10 * sizeof(int)) kullanılmalı ve sonucun NULL olmadığı kontrol edilmelidir. (2) Sonda free(t) yok: bellek her çağrıda kaybolur (sızıntı). free(t); eklenir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que se passe-t-il si on oublie free après malloc dans une fonction appelée souvent ?',
        en: 'What happens if free is forgotten after malloc in a frequently called function?',
        tr: 'Sık çağrılan bir fonksiyonda malloc’tan sonra free unutulursa ne olur?',
      },
      options: {
        fr: ['Rien, le C libère tout seul', 'Une fuite de mémoire : la mémoire utilisée augmente sans cesse', 'Le programme ne compile pas'],
        en: ['Nothing, C frees it automatically', 'A memory leak: memory use keeps growing', 'The program does not compile'],
        tr: ['Hiçbir şey, C otomatik serbest bırakır', 'Bellek sızıntısı: kullanılan bellek sürekli artar', 'Program derlenmez'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le C n’a pas de ramasse-miettes : chaque bloc non libéré reste réservé jusqu’à la fin du programme. Dans un serveur qui tourne longtemps, cela peut épuiser la mémoire.',
        en: 'C has no garbage collector: every block not freed stays reserved until the program ends. In a long-running server, this can exhaust memory.',
        tr: 'C’de çöp toplayıcı yoktur: serbest bırakılmayan her blok program bitene kadar ayrılmış kalır. Uzun süre çalışan bir sunucuda bu belleği tüketebilir.',
      },
    },
  },
  {
    id: 'c2-w06-sorting',
    week: 6,
    title: { fr: 'Algorithmes de tri', en: 'Sorting algorithms', tr: 'Sıralama algoritmaları' },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Tri à bulles : on compare les voisins et on les échange s’ils sont mal\nrangés ; après chaque passage, le plus grand est à la fin.\nfor (int i = 0; i < n - 1; i++)\n    for (int j = 0; j < n - 1 - i; j++)\n        if (t[j] > t[j + 1]) echanger(&t[j], &t[j + 1]);\n\nTri par sélection : on cherche le minimum et on le met en tête.\nTri par insertion : on insère chaque élément à sa place dans la\npartie déjà triée (comme des cartes à jouer).\nCes trois tris coûtent O(n²) comparaisons ; qsort de stdlib.h est bien plus rapide.',
          en: 'Bubble sort: compare neighbors and swap them when out of order;\nafter each pass, the largest is at the end.\nfor (int i = 0; i < n - 1; i++)\n    for (int j = 0; j < n - 1 - i; j++)\n        if (t[j] > t[j + 1]) swap(&t[j], &t[j + 1]);\n\nSelection sort: find the minimum and put it at the front.\nInsertion sort: insert each element at its place in the\nalready sorted part (like playing cards).\nThese three cost O(n²) comparisons; qsort from stdlib.h is much faster.',
          tr: 'Kabarcık sıralama: komşular karşılaştırılır ve yanlış sıradaysa\nyer değiştirilir; her geçişten sonra en büyük sona gelir.\nfor (int i = 0; i < n - 1; i++)\n    for (int j = 0; j < n - 1 - i; j++)\n        if (t[j] > t[j + 1]) degistir(&t[j], &t[j + 1]);\n\nSeçmeli sıralama: en küçük bulunur ve başa konur.\nEklemeli sıralama: her eleman sıralı kısımdaki yerine eklenir\n(iskambil kartları gibi).\nBu üç sıralama O(n²) karşılaştırma yapar; stdlib.h’deki qsort çok daha hızlıdır.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Applique le premier passage du tri à bulles à [5, 1, 4, 2, 8]. Combien d’échanges fait-on, et quel élément est à sa place définitive ?',
          en: 'Apply the first bubble sort pass to [5, 1, 4, 2, 8]. How many swaps are made, and which element is in its final place?',
          tr: '[5, 1, 4, 2, 8] dizisine kabarcık sıralamanın ilk geçişini uygula. Kaç yer değiştirme yapılır ve hangi eleman son yerindedir?',
        },
        solution: {
          fr: '(5, 1) échange → [1, 5, 4, 2, 8] ; (5, 4) échange → [1, 4, 5, 2, 8] ; (5, 2) échange → [1, 4, 2, 5, 8] ; (5, 8) rien. Résultat : [1, 4, 2, 5, 8], 3 échanges. Le 8, le plus grand, est à sa place définitive ; le passage suivant mettra 5 avant lui… et échangera 4 et 2.',
          en: '(5, 1) swap → [1, 5, 4, 2, 8]; (5, 4) swap → [1, 4, 5, 2, 8]; (5, 2) swap → [1, 4, 2, 5, 8]; (5, 8) nothing. Result: [1, 4, 2, 5, 8], 3 swaps. The 8, the largest, is in its final place; the next pass will settle 5 before it… and swap 4 and 2.',
          tr: '(5, 1) değiş → [1, 5, 4, 2, 8]; (5, 4) değiş → [1, 4, 5, 2, 8]; (5, 2) değiş → [1, 4, 2, 5, 8]; (5, 8) bir şey yok. Sonuç: [1, 4, 2, 5, 8], 3 yer değiştirme. En büyük olan 8 son yerindedir; sonraki geçiş 5’i ondan önceye yerleştirecek… ve 4 ile 2’yi değiştirecek.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de comparaisons fait environ le tri à bulles sur 1000 éléments ?',
        en: 'About how many comparisons does bubble sort make on 1000 elements?',
        tr: 'Kabarcık sıralama 1000 elemanda yaklaşık kaç karşılaştırma yapar?',
      },
      options: { fr: ['Environ 1000', 'Environ 500 000', 'Environ 10'], en: ['About 1,000', 'About 500,000', 'About 10'], tr: ['Yaklaşık 1000', 'Yaklaşık 500.000', 'Yaklaşık 10'] },
      answerIndex: 1,
      explanation: {
        fr: 'n(n − 1)/2 = 1000 × 999 / 2 ≈ 500 000 : le coût est en O(n²). Doubler la taille multiplie le temps par 4.',
        en: 'n(n − 1)/2 = 1000 × 999 / 2 ≈ 500,000: the cost is O(n²). Doubling the size multiplies the time by 4.',
        tr: 'n(n − 1)/2 = 1000 × 999 / 2 ≈ 500.000: maliyet O(n²)’dir. Boyutu iki katına çıkarmak süreyi 4 ile çarpar.',
      },
    },
  },
  {
    id: 'c2-w07-searching',
    week: 7,
    title: {
      fr: 'Algorithmes de recherche et révision de la vize',
      en: 'Searching algorithms and midterm review',
      tr: 'Arama algoritmaları ve vize tekrarı',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Recherche linéaire : on regarde chaque case, O(n), marche toujours\n\nRecherche dichotomique (tableau TRIÉ obligatoire), O(log n)\nint chercher(int t[], int n, int x) {\n    int bas = 0, haut = n - 1;\n    while (bas <= haut) {\n        int milieu = (bas + haut) / 2;\n        if (t[milieu] == x) return milieu;\n        if (t[milieu] < x) bas = milieu + 1;\n        else haut = milieu - 1;\n    }\n    return -1;                      // pas trouvé\n}',
          en: 'Linear search: look at every cell, O(n), always works\n\nBinary search (SORTED array required), O(log n)\nint search(int t[], int n, int x) {\n    int low = 0, high = n - 1;\n    while (low <= high) {\n        int mid = (low + high) / 2;\n        if (t[mid] == x) return mid;\n        if (t[mid] < x) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;                      // not found\n}',
          tr: 'Doğrusal arama: her hücreye bakılır, O(n), her zaman çalışır\n\nİkili arama (SIRALI dizi şart), O(log n)\nint ara(int t[], int n, int x) {\n    int alt = 0, ust = n - 1;\n    while (alt <= ust) {\n        int orta = (alt + ust) / 2;\n        if (t[orta] == x) return orta;\n        if (t[orta] < x) alt = orta + 1;\n        else ust = orta - 1;\n    }\n    return -1;                      // bulunamadı\n}',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ &, |, ^, ~, <<, >> ; masques : mettre, effacer, inverser, lire un bit\n✔ Pointeurs : &, *, NULL, changer de cible\n✔ Passage par adresse, tableaux et pointeurs, *(t + i)\n✔ malloc / calloc / realloc / free, sizeof, fuites\n✔ Tri à bulles, sélection, insertion (traces à la main)\n✔ Recherche linéaire et dichotomique',
          en: '✔ &, |, ^, ~, <<, >>; masks: set, clear, toggle, read a bit\n✔ Pointers: &, *, NULL, changing target\n✔ Pass by address, arrays and pointers, *(t + i)\n✔ malloc / calloc / realloc / free, sizeof, leaks\n✔ Bubble, selection, insertion sort (traced by hand)\n✔ Linear and binary search',
          tr: '✔ &, |, ^, ~, <<, >>; maskeler: bit 1 yap, 0 yap, tersle, oku\n✔ İşaretçiler: &, *, NULL, hedef değiştirme\n✔ Adresle aktarım, diziler ve işaretçiler, *(t + i)\n✔ malloc / calloc / realloc / free, sizeof, sızıntılar\n✔ Kabarcık, seçmeli, eklemeli sıralama (elle izleme)\n✔ Doğrusal ve ikili arama',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Cherche 23 dans [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] avec la recherche dichotomique. Donne bas, haut et milieu à chaque étape. Combien de comparaisons ?',
          en: 'Search for 23 in [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] with binary search. Give low, high and mid at each step. How many comparisons?',
          tr: '[2, 5, 8, 12, 16, 23, 38, 56, 72, 91] dizisinde ikili aramayla 23’ü ara. Her adımda alt, üst ve ortayı ver. Kaç karşılaştırma yapılır?',
        },
        solution: {
          fr: 'Étape 1 : bas 0, haut 9, milieu 4 → 16 < 23, donc bas = 5. Étape 2 : bas 5, haut 9, milieu 7 → 56 > 23, donc haut = 6. Étape 3 : bas 5, haut 6, milieu 5 → 23 trouvé à l’indice 5. Trois comparaisons, contre six en recherche linéaire.',
          en: 'Step 1: low 0, high 9, mid 4 → 16 < 23, so low = 5. Step 2: low 5, high 9, mid 7 → 56 > 23, so high = 6. Step 3: low 5, high 6, mid 5 → 23 found at index 5. Three comparisons, against six with linear search.',
          tr: '1. adım: alt 0, üst 9, orta 4 → 16 < 23, yani alt = 5. 2. adım: alt 5, üst 9, orta 7 → 56 > 23, yani üst = 6. 3. adım: alt 5, üst 6, orta 5 → 23, 5. indiste bulundu. Doğrusal aramadaki altıya karşı üç karşılaştırma.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Au maximum, combien de comparaisons faut-il pour une recherche dichotomique dans 1000 éléments ?',
        en: 'At most, how many comparisons does a binary search in 1000 elements need?',
        tr: '1000 elemanda ikili arama en fazla kaç karşılaştırma gerektirir?',
      },
      options: { fr: ['10', '500', '1000'], en: ['10', '500', '1,000'], tr: ['10', '500', '1000'] },
      answerIndex: 0,
      explanation: {
        fr: 'Chaque étape divise la zone par 2 : 2¹⁰ = 1024 ≥ 1000, donc environ 10 comparaisons au plus. C’est tout l’intérêt de garder les données triées.',
        en: 'Each step halves the range: 2¹⁰ = 1024 ≥ 1000, so about 10 comparisons at most. That is the whole point of keeping data sorted.',
        tr: 'Her adım aralığı ikiye böler: 2¹⁰ = 1024 ≥ 1000, yani en fazla yaklaşık 10 karşılaştırma. Verileri sıralı tutmanın amacı budur.',
      },
    },
  },
  {
    id: 'c-files',
    week: 8,
    title: { fr: 'Les fichiers texte', en: 'Text files', tr: 'Metin dosyaları' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'fopen ouvre un fichier et renvoie un pointeur FILE *, ou NULL en cas d’échec : il faut toujours le vérifier. Les modes : "r" lire, "w" écrire en effaçant, "a" ajouter à la fin ; "r+", "w+", "a+" permettent lire et écrire.',
          en: 'fopen opens a file and returns a FILE * pointer, or NULL on failure: always check it. Modes: "r" read, "w" write and erase, "a" append; "r+", "w+", "a+" allow reading and writing.',
          tr: 'fopen bir dosyayı açar ve bir FILE * işaretçisi, başarısız olursa NULL döndürür: her zaman kontrol edilmelidir. Modlar: "r" okuma, "w" silerek yazma, "a" sona ekleme; "r+", "w+", "a+" hem okumaya hem yazmaya izin verir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'FILE *f = fopen("notes.txt", "w");\nif (f == NULL) { printf("Impossible d’ouvrir\\n"); return 1; }\nfprintf(f, "Ali 15\\nAyse 12\\n");\nfclose(f);\n\nf = fopen("notes.txt", "r");\nchar nom[20]; int note;\nwhile (fscanf(f, "%19s %d", nom, &note) == 2)   // 2 valeurs lues\n    printf("%s a %d\\n", nom, note);\nfclose(f);',
          en: 'FILE *f = fopen("grades.txt", "w");\nif (f == NULL) { printf("Cannot open\\n"); return 1; }\nfprintf(f, "Ali 15\\nAyse 12\\n");\nfclose(f);\n\nf = fopen("grades.txt", "r");\nchar name[20]; int grade;\nwhile (fscanf(f, "%19s %d", name, &grade) == 2)   // 2 values read\n    printf("%s has %d\\n", name, grade);\nfclose(f);',
          tr: 'FILE *f = fopen("notlar.txt", "w");\nif (f == NULL) { printf("Dosya acilamadi\\n"); return 1; }\nfprintf(f, "Ali 15\\nAyse 12\\n");\nfclose(f);\n\nf = fopen("notlar.txt", "r");\nchar ad[20]; int not_;\nwhile (fscanf(f, "%19s %d", ad, &not_) == 2)   // 2 değer okundu\n    printf("%s: %d\\n", ad, not_);\nfclose(f);',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pourquoi la boucle teste-t-elle fscanf(...) == 2 plutôt que while (!feof(f)) ? Et à quoi sert %19s au lieu de %s ?',
          en: 'Why does the loop test fscanf(...) == 2 rather than while (!feof(f))? And what is %19s for instead of %s?',
          tr: 'Döngü neden while (!feof(f)) yerine fscanf(...) == 2 sınar? %s yerine %19s ne işe yarar?',
        },
        solution: {
          fr: 'feof ne devient vrai qu’APRÈS une lecture ratée : avec while (!feof(f)), la dernière ligne serait traitée deux fois. Tester la valeur de retour de fscanf (le nombre de valeurs lues) arrête la boucle au bon moment. %19s limite la lecture à 19 caractères, plus le \'\\0\', pour ne pas déborder du tableau nom[20].',
          en: 'feof only becomes true AFTER a failed read: with while (!feof(f)), the last line would be processed twice. Testing fscanf’s return value (the number of values read) stops the loop at the right time. %19s limits reading to 19 characters, plus the \'\\0\', so the name[20] array never overflows.',
          tr: 'feof ancak başarısız bir okumadan SONRA doğru olur: while (!feof(f)) ile son satır iki kez işlenirdi. fscanf’in dönüş değerini (okunan değer sayısı) sınamak döngüyü doğru anda durdurur. %19s, ad[20] dizisi taşmasın diye okumayı \'\\0\' hariç 19 karakterle sınırlar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel mode ajoute du texte à la fin d’un fichier sans effacer ce qu’il contient ?',
        en: 'Which mode adds text to the end of a file without erasing what it contains?',
        tr: 'Hangi mod, dosyadaki içeriği silmeden sonuna metin ekler?',
      },
      options: { fr: ['"r"', '"w"', '"a"'], en: ['"r"', '"w"', '"a"'], tr: ['"r"', '"w"', '"a"'] },
      answerIndex: 2,
      explanation: {
        fr: '"a" veut dire append (ajouter). "w" effacerait le fichier, et "r" ne permet que de lire.',
        en: '"a" stands for append. "w" would erase the file, and "r" only allows reading.',
        tr: '"a", append (ekleme) demektir. "w" dosyayı silerdi, "r" ise yalnızca okumaya izin verir.',
      },
    },
  },
  {
    id: 'c2-w09-binary-files',
    week: 9,
    title: {
      fr: 'Lire ligne par ligne et fichiers binaires',
      en: 'Reading line by line and binary files',
      tr: 'Satır satır okuma ve ikili dosyalar',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'fgets(ligne, taille, f) lit une ligne entière, sans déborder, et renvoie NULL à la fin du fichier. Un fichier binaire (mode "rb", "wb") enregistre les octets tels qu’ils sont en mémoire : avec fwrite et fread, on sauve et relit un tableau de structures en une seule instruction.',
          en: 'fgets(line, size, f) reads a whole line without overflowing and returns NULL at the end of the file. A binary file (mode "rb", "wb") stores bytes exactly as they are in memory: with fwrite and fread, an array of structures is saved and read back in a single statement.',
          tr: 'fgets(satir, boyut, f) taşmadan bütün bir satırı okur ve dosyanın sonunda NULL döndürür. İkili bir dosya ("rb", "wb" modları) baytları bellekteki halleriyle saklar: fwrite ve fread ile bir yapı dizisi tek bir komutla kaydedilir ve geri okunur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'char ligne[100]; int lignes = 0;\nwhile (fgets(ligne, sizeof ligne, f) != NULL) lignes++;\n\ntypedef struct { char nom[20]; int note; } Etudiant;\nEtudiant t[3] = {{"Ali", 15}, {"Ayse", 12}, {"Emre", 17}};\nFILE *b = fopen("classe.dat", "wb");\nfwrite(t, sizeof(Etudiant), 3, b);      // 3 éléments d’un coup\nfclose(b);\n\nEtudiant lu[3];\nb = fopen("classe.dat", "rb");\nsize_t n = fread(lu, sizeof(Etudiant), 3, b);   // n = éléments lus\nfclose(b);',
          en: 'char line[100]; int lines = 0;\nwhile (fgets(line, sizeof line, f) != NULL) lines++;\n\ntypedef struct { char name[20]; int grade; } Student;\nStudent t[3] = {{"Ali", 15}, {"Ayse", 12}, {"Emre", 17}};\nFILE *b = fopen("class.dat", "wb");\nfwrite(t, sizeof(Student), 3, b);       // 3 elements at once\nfclose(b);\n\nStudent read_back[3];\nb = fopen("class.dat", "rb");\nsize_t n = fread(read_back, sizeof(Student), 3, b);   // n = elements read\nfclose(b);',
          tr: 'char satir[100]; int satirlar = 0;\nwhile (fgets(satir, sizeof satir, f) != NULL) satirlar++;\n\ntypedef struct { char ad[20]; int not_; } Ogrenci;\nOgrenci t[3] = {{"Ali", 15}, {"Ayse", 12}, {"Emre", 17}};\nFILE *b = fopen("sinif.dat", "wb");\nfwrite(t, sizeof(Ogrenci), 3, b);       // 3 eleman birden\nfclose(b);\n\nOgrenci okunan[3];\nb = fopen("sinif.dat", "rb");\nsize_t n = fread(okunan, sizeof(Ogrenci), 3, b);   // n = okunan eleman\nfclose(b);',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Si sizeof(Etudiant) vaut 24 octets, quelle est la taille du fichier classe.dat ? Comment lire seulement le 3e étudiant sans lire les deux premiers ?',
          en: 'If sizeof(Student) is 24 bytes, what is the size of class.dat? How can the 3rd student be read without reading the first two?',
          tr: 'sizeof(Ogrenci) 24 bayt ise sinif.dat dosyasının boyutu nedir? İlk ikisini okumadan yalnızca 3. öğrenci nasıl okunur?',
        },
        solution: {
          fr: '3 × 24 = 72 octets. Dans un fichier binaire, chaque enregistrement a la même taille : on saute directement au 3e avec fseek(b, 2 * sizeof(Etudiant), SEEK_SET), puis fread(&e, sizeof(Etudiant), 1, b). C’est l’accès direct, impossible à faire simplement dans un fichier texte aux lignes de longueurs différentes.',
          en: '3 × 24 = 72 bytes. In a binary file every record has the same size: jump straight to the 3rd with fseek(b, 2 * sizeof(Student), SEEK_SET), then fread(&s, sizeof(Student), 1, b). This is direct access, not simply possible in a text file whose lines have different lengths.',
          tr: '3 × 24 = 72 bayt. İkili dosyada her kaydın boyutu aynıdır: fseek(b, 2 * sizeof(Ogrenci), SEEK_SET) ile doğrudan 3.’ye atlanır, sonra fread(&o, sizeof(Ogrenci), 1, b). Bu doğrudan erişimdir; satır uzunlukları farklı olan bir metin dosyasında bu kadar basit yapılamaz.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que renvoie fgets à la fin du fichier ?',
        en: 'What does fgets return at the end of the file?',
        tr: 'fgets dosyanın sonunda ne döndürür?',
      },
      options: { fr: ['0', 'NULL', 'EOF'], en: ['0', 'NULL', 'EOF'], tr: ['0', 'NULL', 'EOF'] },
      answerIndex: 1,
      explanation: {
        fr: 'fgets renvoie un pointeur sur la ligne lue, ou NULL quand il n’y a plus rien à lire. C’est fgetc et getc qui renvoient EOF.',
        en: 'fgets returns a pointer to the line read, or NULL when there is nothing left. It is fgetc and getc that return EOF.',
        tr: 'fgets okunan satırı gösteren bir işaretçi, okunacak bir şey kalmayınca NULL döndürür. EOF döndürenler fgetc ve getc’dir.',
      },
    },
  },
  {
    id: 'c2-w10-linked-lists',
    week: 10,
    title: { fr: 'Les listes chaînées', en: 'Linked lists', tr: 'Bağlı listeler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une liste chaînée est une suite de nœuds alloués avec malloc ; chaque nœud contient une valeur et un pointeur vers le suivant, le dernier pointe vers NULL. On ajoute ou retire un élément en changeant quelques pointeurs, sans décaler les autres comme dans un tableau.',
          en: 'A linked list is a chain of nodes allocated with malloc; each node holds a value and a pointer to the next, the last one points to NULL. An element is added or removed by changing a few pointers, without shifting the others as in an array.',
          tr: 'Bağlı liste malloc ile ayrılan düğümlerden oluşan bir zincirdir; her düğüm bir değer ve bir sonrakini gösteren bir işaretçi tutar, sonuncusu NULL’ı gösterir. Bir dizideki gibi diğerlerini kaydırmadan, birkaç işaretçi değiştirilerek eleman eklenir veya silinir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'typedef struct Noeud {\n    int valeur;\n    struct Noeud *suivant;\n} Noeud;\n\nNoeud *ajouterDebut(Noeud *tete, int v) {\n    Noeud *n = malloc(sizeof(Noeud));\n    n->valeur = v;\n    n->suivant = tete;      // le nouveau pointe vers l’ancienne tête\n    return n;               // et devient la tête\n}\n\nvoid afficher(Noeud *tete) {\n    for (Noeud *p = tete; p != NULL; p = p->suivant)\n        printf("%d -> ", p->valeur);\n    printf("NULL\\n");\n}',
          en: 'typedef struct Node {\n    int value;\n    struct Node *next;\n} Node;\n\nNode *pushFront(Node *head, int v) {\n    Node *n = malloc(sizeof(Node));\n    n->value = v;\n    n->next = head;         // the new node points to the old head\n    return n;               // and becomes the head\n}\n\nvoid print(Node *head) {\n    for (Node *p = head; p != NULL; p = p->next)\n        printf("%d -> ", p->value);\n    printf("NULL\\n");\n}',
          tr: 'typedef struct Dugum {\n    int deger;\n    struct Dugum *sonraki;\n} Dugum;\n\nDugum *basaEkle(Dugum *bas, int v) {\n    Dugum *n = malloc(sizeof(Dugum));\n    n->deger = v;\n    n->sonraki = bas;       // yeni düğüm eski başı gösterir\n    return n;               // ve baş olur\n}\n\nvoid yazdir(Dugum *bas) {\n    for (Dugum *p = bas; p != NULL; p = p->sonraki)\n        printf("%d -> ", p->deger);\n    printf("NULL\\n");\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'On part d’une liste vide (tete = NULL) et on ajoute au début 3, puis 7, puis 1. Qu’affiche afficher(tete) ? Comment libérer toute la liste ensuite ?',
          en: 'Starting from an empty list (head = NULL), push 3, then 7, then 1 at the front. What does print(head) show? How is the whole list freed afterwards?',
          tr: 'Boş bir listeden (bas = NULL) başlayarak başa önce 3, sonra 7, sonra 1 ekleniyor. yazdir(bas) ne gösterir? Sonra tüm liste nasıl serbest bırakılır?',
        },
        solution: {
          fr: 'Chaque ajout se fait devant : 3 → puis 7 → 3 → puis 1 → 7 → 3. Affichage : 1 -> 7 -> 3 -> NULL. Pour libérer : while (tete != NULL) { Noeud *s = tete->suivant; free(tete); tete = s; }. On garde le suivant AVANT le free, sinon on ne pourrait plus y accéder.',
          en: 'Each push goes in front: 3 → then 7 → 3 → then 1 → 7 → 3. Output: 1 -> 7 -> 3 -> NULL. To free it: while (head != NULL) { Node *n = head->next; free(head); head = n; }. Keep the next node BEFORE free, otherwise it can no longer be reached.',
          tr: 'Her ekleme öne yapılır: 3 → sonra 7 → 3 → sonra 1 → 7 → 3. Çıktı: 1 -> 7 -> 3 -> NULL. Serbest bırakmak için: while (bas != NULL) { Dugum *s = bas->sonraki; free(bas); bas = s; }. Sonraki düğüm free’den ÖNCE saklanır, yoksa ona artık erişilemez.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est l’avantage d’une liste chaînée sur un tableau ?',
        en: 'What is the advantage of a linked list over an array?',
        tr: 'Bağlı listenin diziye göre avantajı nedir?',
      },
      options: {
        fr: ['Accès direct à l’élément i', 'Insertion au début sans décaler les autres éléments', 'Elle prend moins de mémoire par élément'],
        en: ['Direct access to element i', 'Insertion at the front without shifting the other elements', 'It uses less memory per element'],
        tr: ['i. elemana doğrudan erişim', 'Diğer elemanları kaydırmadan başa ekleme', 'Eleman başına daha az bellek kullanır'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Insérer au début coûte O(1) avec une liste, contre O(n) dans un tableau. En revanche, la liste n’a pas d’accès direct et chaque nœud stocke en plus un pointeur.',
        en: 'Inserting at the front costs O(1) with a list, against O(n) in an array. On the other hand, a list has no direct access and every node also stores a pointer.',
        tr: 'Başa ekleme listede O(1), dizide O(n) maliyetlidir. Buna karşın listede doğrudan erişim yoktur ve her düğüm ayrıca bir işaretçi saklar.',
      },
    },
  },
  {
    id: 'c2-w11-visual-programming',
    week: 11,
    title: {
      fr: 'Introduction à la programmation visuelle et composants',
      en: 'Introduction to visual programming and components',
      tr: 'Görsel programlamaya giriş ve bileşenler',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En programmation visuelle (par exemple C# avec Windows Forms dans Visual Studio), on dessine l’interface en déposant des composants sur une fenêtre (Form). Chaque composant a des propriétés (Text, Color, Size), des méthodes (Clear, Focus) et des événements (Click, TextChanged).',
          en: 'In visual programming (for example C# with Windows Forms in Visual Studio), the interface is drawn by dropping components onto a window (Form). Each component has properties (Text, Color, Size), methods (Clear, Focus) and events (Click, TextChanged).',
          tr: 'Görsel programlamada (örneğin Visual Studio’da Windows Forms ile C#) arayüz, bir pencereye (Form) bileşenler bırakılarak çizilir. Her bileşenin özellikleri (Text, Color, Size), metotları (Clear, Focus) ve olayları (Click, TextChanged) vardır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Composants courants\nLabel     : texte affiché          TextBox  : saisie de texte\nButton    : bouton cliquable       CheckBox / RadioButton : choix\nListBox / ComboBox : listes        PictureBox : image\nTimer     : événement à intervalle régulier (invisible)\n\n// Propriétés modifiées par le code\nlabel1.Text = "Bonjour";\nbutton1.Enabled = false;\ntextBox1.BackColor = Color.LightYellow;',
          en: 'Common components\nLabel     : displayed text         TextBox  : text input\nButton    : clickable button       CheckBox / RadioButton : choices\nListBox / ComboBox : lists         PictureBox : image\nTimer     : event at a regular interval (invisible)\n\n// Properties changed by code\nlabel1.Text = "Hello";\nbutton1.Enabled = false;\ntextBox1.BackColor = Color.LightYellow;',
          tr: 'Yaygın bileşenler\nLabel     : gösterilen metin       TextBox  : metin girişi\nButton    : tıklanabilir düğme     CheckBox / RadioButton : seçimler\nListBox / ComboBox : listeler      PictureBox : resim\nTimer     : düzenli aralıklarla olay (görünmez)\n\n// Kodla değiştirilen özellikler\nlabel1.Text = "Merhaba";\nbutton1.Enabled = false;\ntextBox1.BackColor = Color.LightYellow;',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pour une petite application de conversion « degrés Celsius → Fahrenheit », quels composants poser, et quelle propriété de chacun utilise-t-on ?',
          en: 'For a small “Celsius → Fahrenheit” converter app, which components should be placed, and which property of each is used?',
          tr: 'Küçük bir “Celsius → Fahrenheit” dönüştürücü uygulaması için hangi bileşenler konmalı ve her birinin hangi özelliği kullanılır?',
        },
        solution: {
          fr: 'Un Label « Celsius : » (Text), un TextBox pour la saisie (Text, lu par le code), un Button « Convertir » (Text, et son événement Click), un Label pour le résultat (Text, écrit par le code). Dans le Click : double c = double.Parse(textBox1.Text); labelResultat.Text = (c * 9 / 5 + 32).ToString();.',
          en: 'A Label “Celsius:” (Text), a TextBox for input (Text, read by code), a Button “Convert” (Text, and its Click event), a Label for the result (Text, written by code). In Click: double c = double.Parse(textBox1.Text); labelResult.Text = (c * 9 / 5 + 32).ToString();.',
          tr: 'Bir Label “Celsius:” (Text), giriş için bir TextBox (koddan okunan Text), bir Button “Dönüştür” (Text ve Click olayı), sonuç için bir Label (koda yazılan Text). Click içinde: double c = double.Parse(textBox1.Text); labelSonuc.Text = (c * 9 / 5 + 32).ToString();.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel composant sert à saisir du texte au clavier ?',
        en: 'Which component is used to type text with the keyboard?',
        tr: 'Klavyeden metin girmek için hangi bileşen kullanılır?',
      },
      options: { fr: ['Label', 'TextBox', 'Timer'], en: ['Label', 'TextBox', 'Timer'], tr: ['Label', 'TextBox', 'Timer'] },
      answerIndex: 1,
      explanation: {
        fr: 'Le TextBox permet à l’utilisateur de taper ; on lit sa propriété Text. Le Label affiche seulement, et le Timer est invisible.',
        en: 'A TextBox lets the user type; its Text property is read. A Label only displays, and a Timer is invisible.',
        tr: 'TextBox kullanıcının yazmasını sağlar; Text özelliği okunur. Label yalnızca gösterir, Timer ise görünmezdir.',
      },
    },
  },
  {
    id: 'c2-w12-classes',
    week: 12,
    title: {
      fr: 'Classes et objets dans un langage visuel',
      en: 'Classes and objects in a visual language',
      tr: 'Görsel dillerde sınıf ve nesne kavramları',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En C#, tout est objet : la fenêtre elle-même est une classe (public partial class Form1 : Form), et chaque bouton est un objet de la classe Button. Une classe regroupe des champs, des propriétés (avec get / set), des méthodes et un constructeur.',
          en: 'In C#, everything is an object: the window itself is a class (public partial class Form1 : Form), and each button is an object of the Button class. A class groups fields, properties (with get / set), methods and a constructor.',
          tr: 'C#’ta her şey nesnedir: pencerenin kendisi bir sınıftır (public partial class Form1 : Form) ve her düğme Button sınıfının bir nesnesidir. Bir sınıf alanları, özellikleri (get / set ile), metotları ve bir yapıcıyı bir araya getirir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'public class Compte {\n    private decimal solde;                 // champ privé\n    public string Titulaire { get; set; }  // propriété\n\n    public Compte(string titulaire) {      // constructeur\n        Titulaire = titulaire;\n    }\n\n    public decimal Solde => solde;         // lecture seule\n\n    public void Deposer(decimal montant) {\n        if (montant <= 0) throw new ArgumentException("Montant invalide");\n        solde += montant;\n    }\n}\n\nvar c = new Compte("Ali");\nc.Deposer(150);\nlabel1.Text = $"{c.Titulaire} : {c.Solde} TL";',
          en: 'public class Account {\n    private decimal balance;               // private field\n    public string Owner { get; set; }      // property\n\n    public Account(string owner) {         // constructor\n        Owner = owner;\n    }\n\n    public decimal Balance => balance;     // read-only\n\n    public void Deposit(decimal amount) {\n        if (amount <= 0) throw new ArgumentException("Invalid amount");\n        balance += amount;\n    }\n}\n\nvar a = new Account("Ali");\na.Deposit(150);\nlabel1.Text = $"{a.Owner}: {a.Balance} TL";',
          tr: 'public class Hesap {\n    private decimal bakiye;                // özel alan\n    public string Sahip { get; set; }      // özellik\n\n    public Hesap(string sahip) {           // yapıcı\n        Sahip = sahip;\n    }\n\n    public decimal Bakiye => bakiye;       // salt okunur\n\n    public void Yatir(decimal miktar) {\n        if (miktar <= 0) throw new ArgumentException("Gecersiz miktar");\n        bakiye += miktar;\n    }\n}\n\nvar h = new Hesap("Ali");\nh.Yatir(150);\nlabel1.Text = $"{h.Sahip}: {h.Bakiye} TL";',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec la classe ci-dessus : (1) que montre label1 ? (2) Que se passe-t-il avec c.Deposer(−20) ? (3) Pourquoi ne peut-on pas écrire c.Solde = 1000; ?',
          en: 'With the class above: (1) what does label1 show? (2) What happens with a.Deposit(−20)? (3) Why can’t you write a.Balance = 1000;?',
          tr: 'Yukarıdaki sınıfla: (1) label1 ne gösterir? (2) h.Yatir(−20) ile ne olur? (3) Neden h.Bakiye = 1000; yazılamaz?',
        },
        solution: {
          fr: '(1) « Ali : 150 TL ». (2) La méthode lance une ArgumentException : le solde ne change pas, et si on ne l’attrape pas avec try / catch, l’application affiche une erreur. (3) Solde n’a qu’un get (=>) : c’est une propriété en lecture seule. Le solde ne peut changer qu’à travers Deposer, qui vérifie les montants : c’est l’encapsulation.',
          en: '(1) “Ali: 150 TL”. (2) The method throws an ArgumentException: the balance doesn’t change, and unless it is caught with try / catch, the app shows an error. (3) Balance only has a get (=>): it is a read-only property. The balance can only change through Deposit, which checks amounts: that is encapsulation.',
          tr: '(1) “Ali: 150 TL”. (2) Metot bir ArgumentException fırlatır: bakiye değişmez ve try / catch ile yakalanmazsa uygulama bir hata gösterir. (3) Bakiye’nin yalnızca get’i (=>) vardır: salt okunur bir özelliktir. Bakiye yalnızca miktarları denetleyen Yatir ile değişebilir: buna kapsülleme denir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'En Windows Forms, qu’est-ce que la fenêtre Form1 ?',
        en: 'In Windows Forms, what is the Form1 window?',
        tr: 'Windows Forms’ta Form1 penceresi nedir?',
      },
      options: {
        fr: ['Une fonction globale', 'Une classe qui hérite de Form', 'Un fichier texte'],
        en: ['A global function', 'A class inheriting from Form', 'A text file'],
        tr: ['Global bir fonksiyon', 'Form’dan türeyen bir sınıf', 'Bir metin dosyası'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Form1 hérite de Form : elle reçoit toutes ses propriétés (Text, Size…) et on y ajoute nos composants comme champs, et nos gestionnaires d’événements comme méthodes.',
        en: 'Form1 inherits from Form: it gets all its properties (Text, Size…), and our components are added as fields, our event handlers as methods.',
        tr: 'Form1, Form’dan türer: tüm özelliklerini (Text, Size…) alır; bileşenlerimiz alan, olay işleyicilerimiz metot olarak eklenir.',
      },
    },
  },
  {
    id: 'c2-w13-events',
    week: 13,
    title: { fr: 'La programmation événementielle', en: 'Event-driven programming', tr: 'Olay tabanlı programlama' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un programme visuel n’a pas un déroulement de haut en bas : il attend des événements (clic, frappe, minuterie) et exécute le gestionnaire correspondant. Un gestionnaire reçoit sender (le composant qui a déclenché l’événement) et e (les détails).',
          en: 'A visual program doesn’t run from top to bottom: it waits for events (click, keystroke, timer) and runs the matching handler. A handler receives sender (the component that raised the event) and e (the details).',
          tr: 'Görsel bir program yukarıdan aşağıya akmaz: olayları (tıklama, tuş vuruşu, zamanlayıcı) bekler ve ilgili işleyiciyi çalıştırır. Bir işleyici sender’ı (olayı tetikleyen bileşen) ve e’yi (ayrıntılar) alır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'private void buttonAjouter_Click(object sender, EventArgs e) {\n    if (int.TryParse(textBoxA.Text, out int a) &&\n        int.TryParse(textBoxB.Text, out int b))\n        labelResultat.Text = (a + b).ToString();\n    else\n        MessageBox.Show("Entrez deux nombres entiers");\n}\n\nint secondes = 0;\nprivate void timer1_Tick(object sender, EventArgs e) {  // Interval = 1000 ms\n    secondes++;\n    labelTemps.Text = secondes + " s";\n}',
          en: 'private void buttonAdd_Click(object sender, EventArgs e) {\n    if (int.TryParse(textBoxA.Text, out int a) &&\n        int.TryParse(textBoxB.Text, out int b))\n        labelResult.Text = (a + b).ToString();\n    else\n        MessageBox.Show("Enter two whole numbers");\n}\n\nint seconds = 0;\nprivate void timer1_Tick(object sender, EventArgs e) {  // Interval = 1000 ms\n    seconds++;\n    labelTime.Text = seconds + " s";\n}',
          tr: 'private void buttonTopla_Click(object sender, EventArgs e) {\n    if (int.TryParse(textBoxA.Text, out int a) &&\n        int.TryParse(textBoxB.Text, out int b))\n        labelSonuc.Text = (a + b).ToString();\n    else\n        MessageBox.Show("Iki tam sayi girin");\n}\n\nint saniye = 0;\nprivate void timer1_Tick(object sender, EventArgs e) {  // Interval = 1000 ms\n    saniye++;\n    labelZaman.Text = saniye + " sn";\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) L’utilisateur tape 12 et « abc » puis clique : que se passe-t-il ? Et avec int.Parse au lieu de TryParse ? (2) Le Timer est démarré (Enabled = true) : que montre labelTemps après 5 secondes ?',
          en: '(1) The user types 12 and “abc” then clicks: what happens? And with int.Parse instead of TryParse? (2) The Timer is started (Enabled = true): what does labelTime show after 5 seconds?',
          tr: '(1) Kullanıcı 12 ve “abc” yazıp tıklıyor: ne olur? TryParse yerine int.Parse ile ne olurdu? (2) Timer başlatılmış (Enabled = true): 5 saniye sonra labelZaman ne gösterir?',
        },
        solution: {
          fr: '(1) TryParse échoue sur « abc » et renvoie false : on affiche le message « Entrez deux nombres entiers », sans planter. Avec int.Parse, une FormatException serait levée et l’application s’arrêterait si on ne l’attrape pas. (2) L’événement Tick a lieu toutes les 1000 ms : après 5 secondes, « 5 s ».',
          en: '(1) TryParse fails on “abc” and returns false: the message “Enter two whole numbers” appears, without crashing. With int.Parse, a FormatException would be thrown and the app would stop unless it is caught. (2) The Tick event fires every 1000 ms: after 5 seconds, “5 s”.',
          tr: '(1) TryParse “abc” için başarısız olur ve false döndürür: çökmeden “Iki tam sayi girin” mesajı görünür. int.Parse ile bir FormatException fırlatılır ve yakalanmazsa uygulama dururdu. (2) Tick olayı her 1000 ms’de tetiklenir: 5 saniye sonra “5 sn”.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans un gestionnaire d’événement, que contient le paramètre sender ?',
        en: 'In an event handler, what does the sender parameter hold?',
        tr: 'Bir olay işleyicisinde sender parametresi neyi tutar?',
      },
      options: {
        fr: ['Le texte tapé', 'Le composant qui a déclenché l’événement', 'L’heure de l’événement'],
        en: ['The typed text', 'The component that raised the event', 'The time of the event'],
        tr: ['Yazılan metni', 'Olayı tetikleyen bileşeni', 'Olayın zamanını'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'sender est l’objet à l’origine de l’événement. Si plusieurs boutons partagent le même gestionnaire, on sait ainsi lequel a été cliqué : ((Button)sender).Text.',
        en: 'sender is the object that raised the event. When several buttons share one handler, this tells which one was clicked: ((Button)sender).Text.',
        tr: 'sender olayı başlatan nesnedir. Birkaç düğme aynı işleyiciyi paylaştığında hangisinin tıklandığı böyle anlaşılır: ((Button)sender).Text.',
      },
    },
  },
  {
    id: 'c2-w14-graphics',
    week: 14,
    title: {
      fr: 'Graphiques de base et révision du final',
      en: 'Basic graphics and final review',
      tr: 'Temel grafik işlemleri ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'On dessine dans l’événement Paint avec l’objet Graphics (e.Graphics). L’origine (0, 0) est en haut à gauche, x va vers la droite et y vers le BAS. Un Pen trace des contours, un Brush remplit des formes. Pour redessiner, on appelle Invalidate().',
          en: 'Drawing happens in the Paint event with the Graphics object (e.Graphics). The origin (0, 0) is at the top left, x goes right and y goes DOWN. A Pen draws outlines, a Brush fills shapes. To redraw, call Invalidate().',
          tr: 'Çizim Paint olayında Graphics nesnesiyle (e.Graphics) yapılır. Başlangıç noktası (0, 0) sol üsttedir, x sağa, y AŞAĞI gider. Pen kenar çizer, Brush şekilleri doldurur. Yeniden çizmek için Invalidate() çağrılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'private void Form1_Paint(object sender, PaintEventArgs e) {\n    Graphics g = e.Graphics;\n    using var stylo = new Pen(Color.Blue, 2);\n    g.DrawLine(stylo, 0, 0, 200, 100);           // de (0,0) à (200,100)\n    g.DrawRectangle(stylo, 50, 20, 100, 60);     // x, y, largeur, hauteur\n    g.FillEllipse(Brushes.Orange, 50, 20, 100, 60);  // ellipse dans ce rectangle\n    g.DrawString("KBU", Font, Brushes.Black, 10, 120);\n}',
          en: 'private void Form1_Paint(object sender, PaintEventArgs e) {\n    Graphics g = e.Graphics;\n    using var pen = new Pen(Color.Blue, 2);\n    g.DrawLine(pen, 0, 0, 200, 100);             // from (0,0) to (200,100)\n    g.DrawRectangle(pen, 50, 20, 100, 60);       // x, y, width, height\n    g.FillEllipse(Brushes.Orange, 50, 20, 100, 60);  // ellipse inside that rectangle\n    g.DrawString("KBU", Font, Brushes.Black, 10, 120);\n}',
          tr: 'private void Form1_Paint(object sender, PaintEventArgs e) {\n    Graphics g = e.Graphics;\n    using var kalem = new Pen(Color.Blue, 2);\n    g.DrawLine(kalem, 0, 0, 200, 100);           // (0,0)’dan (200,100)’e\n    g.DrawRectangle(kalem, 50, 20, 100, 60);     // x, y, genişlik, yükseklik\n    g.FillEllipse(Brushes.Orange, 50, 20, 100, 60);  // bu dikdörtgenin içinde elips\n    g.DrawString("KBU", Font, Brushes.Black, 10, 120);\n}',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Fichiers texte : fopen et modes, fprintf, fscanf, fgets, fclose\n✔ Fichiers binaires : fwrite, fread, fseek\n✔ Listes chaînées : nœud, ajout au début, parcours, libération\n✔ Composants : propriétés, méthodes, événements\n✔ Classes C# : champs, propriétés get / set, constructeur, encapsulation\n✔ Événements : Click, Tick, sender, TryParse\n✔ Graphics : Paint, Pen / Brush, coordonnées (y vers le bas)',
          en: '✔ Text files: fopen and modes, fprintf, fscanf, fgets, fclose\n✔ Binary files: fwrite, fread, fseek\n✔ Linked lists: node, push front, traversal, freeing\n✔ Components: properties, methods, events\n✔ C# classes: fields, get / set properties, constructor, encapsulation\n✔ Events: Click, Tick, sender, TryParse\n✔ Graphics: Paint, Pen / Brush, coordinates (y goes down)',
          tr: '✔ Metin dosyaları: fopen ve modlar, fprintf, fscanf, fgets, fclose\n✔ İkili dosyalar: fwrite, fread, fseek\n✔ Bağlı listeler: düğüm, başa ekleme, dolaşma, serbest bırakma\n✔ Bileşenler: özellikler, metotlar, olaylar\n✔ C# sınıfları: alanlar, get / set özellikleri, yapıcı, kapsülleme\n✔ Olaylar: Click, Tick, sender, TryParse\n✔ Graphics: Paint, Pen / Brush, koordinatlar (y aşağı)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Où est le coin en bas à droite du rectangle DrawRectangle(stylo, 50, 20, 100, 60) ? (2) Sur une fenêtre de 400 × 300, quel appel dessine un cercle de rayon 50 centré au milieu ?',
          en: '(1) Where is the bottom-right corner of DrawRectangle(pen, 50, 20, 100, 60)? (2) On a 400 × 300 window, which call draws a circle of radius 50 centered in the middle?',
          tr: '(1) DrawRectangle(kalem, 50, 20, 100, 60) dikdörtgeninin sağ alt köşesi nerededir? (2) 400 × 300’lük bir pencerede, ortada merkezli 50 yarıçaplı bir çemberi hangi çağrı çizer?',
        },
        solution: {
          fr: '(1) x = 50 + 100 = 150 et y = 20 + 60 = 80 (y vers le bas) : le coin est en (150, 80). (2) Le centre est (200, 150). DrawEllipse attend le rectangle englobant : coin en haut à gauche (200 − 50, 150 − 50) = (150, 100), taille 100 × 100. Appel : g.DrawEllipse(stylo, 150, 100, 100, 100).',
          en: '(1) x = 50 + 100 = 150 and y = 20 + 60 = 80 (y goes down): the corner is at (150, 80). (2) The center is (200, 150). DrawEllipse expects the bounding rectangle: top-left corner (200 − 50, 150 − 50) = (150, 100), size 100 × 100. Call: g.DrawEllipse(pen, 150, 100, 100, 100).',
          tr: '(1) x = 50 + 100 = 150 ve y = 20 + 60 = 80 (y aşağı): köşe (150, 80)’dedir. (2) Merkez (200, 150)’dir. DrawEllipse çevreleyen dikdörtgeni bekler: sol üst köşe (200 − 50, 150 − 50) = (150, 100), boyut 100 × 100. Çağrı: g.DrawEllipse(kalem, 150, 100, 100, 100).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans les coordonnées d’une fenêtre Windows Forms, dans quel sens augmente y ?',
        en: 'In Windows Forms window coordinates, which way does y increase?',
        tr: 'Windows Forms pencere koordinatlarında y hangi yönde artar?',
      },
      options: { fr: ['Vers le haut', 'Vers le bas', 'Vers la droite'], en: ['Upward', 'Downward', 'To the right'], tr: ['Yukarı', 'Aşağı', 'Sağa'] },
      answerIndex: 1,
      explanation: {
        fr: 'L’origine est en haut à gauche et y grandit vers le bas, contrairement au repère des mathématiques. C’est le cas de presque toutes les bibliothèques graphiques d’écran.',
        en: 'The origin is at the top left and y grows downward, unlike the math axes. Almost every screen graphics library works this way.',
        tr: 'Başlangıç sol üsttedir ve matematik eksenlerinin aksine y aşağı doğru büyür. Ekran grafik kütüphanelerinin neredeyse tümü böyledir.',
      },
    },
  },
];
