/**
 * CME227 Data Structures, 14 weeks, examples in C: complexity, arrays, lists, stacks, queues, recursion,
 * trees, heaps, hashing, graphs and sorting. Weeks 1–7 prepare the midterm, weeks 8–14 the final.
 * Weeks 3, 5 and 6 keep the ids of the former 3-lesson course.
 */

import type { LessonSource } from '@/data/lessons';

export const cme227Lessons: LessonSource[] = [
  {
    id: 'ds-w01-complexity',
    week: 1,
    title: {
      fr: 'Introduction et complexité des algorithmes',
      en: 'Introduction and algorithm complexity',
      tr: 'Giriş ve algoritma karmaşıklığı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une structure de données est une façon d’organiser les données pour que certaines opérations soient rapides. Pour comparer des solutions, on compte le nombre d’opérations en fonction de la taille n des données, et on garde le terme dominant : c’est la notation grand O.',
          en: 'A data structure is a way of organizing data so that some operations are fast. To compare solutions, count the number of operations as a function of the data size n, and keep the dominant term: that is big O notation.',
          tr: 'Veri yapısı, verileri bazı işlemler hızlı olacak şekilde düzenleme yoludur. Çözümleri karşılaştırmak için işlem sayısı veri boyutu n’ye göre sayılır ve baskın terim tutulur: bu büyük O gösterimidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'O(1)        accès à t[i]\nO(log n)    recherche dichotomique, boucle où i double\nO(n)        parcours d’un tableau\nO(n log n)  tri fusion, tri rapide (en moyenne)\nO(n²)       deux boucles imbriquées, tri à bulles\nO(2ⁿ)       essayer tous les sous-ensembles\n\nRègles : on enlève les constantes (3n + 5 → O(n))\net on garde le terme le plus grand (n² + n → O(n²)).',
          en: 'O(1)        access to t[i]\nO(log n)    binary search, loop where i doubles\nO(n)        going through an array\nO(n log n)  merge sort, quick sort (on average)\nO(n²)       two nested loops, bubble sort\nO(2ⁿ)       trying every subset\n\nRules: drop constants (3n + 5 → O(n))\nand keep the largest term (n² + n → O(n²)).',
          tr: 'O(1)        t[i]’ye erişim\nO(log n)    ikili arama, i’nin ikiye katlandığı döngü\nO(n)        bir diziyi dolaşmak\nO(n log n)  birleştirmeli sıralama, hızlı sıralama (ortalama)\nO(n²)       iç içe iki döngü, kabarcık sıralama\nO(2ⁿ)       tüm alt kümeleri denemek\n\nKurallar: sabitler atılır (3n + 5 → O(n))\nve en büyük terim tutulur (n² + n → O(n²)).',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Combien de fois s’exécute compteur++ dans chaque boucle pour n = 10 et n = 1000, et quelle est la complexité ? (A) for (i = 0; i < n; i++) for (j = 0; j < i; j++) compteur++;  (B) for (i = 1; i < n; i *= 2) compteur++;',
          en: 'How many times does counter++ run in each loop for n = 10 and n = 1000, and what is the complexity? (A) for (i = 0; i < n; i++) for (j = 0; j < i; j++) counter++;  (B) for (i = 1; i < n; i *= 2) counter++;',
          tr: 'Her döngüde sayac++ n = 10 ve n = 1000 için kaç kez çalışır ve karmaşıklık nedir? (A) for (i = 0; i < n; i++) for (j = 0; j < i; j++) sayac++;  (B) for (i = 1; i < n; i *= 2) sayac++;',
        },
        solution: {
          fr: '(A) 0 + 1 + … + (n − 1) = n(n − 1)/2 : 45 pour n = 10, 499 500 pour n = 1000. C’est O(n²). (B) i vaut 1, 2, 4, 8 : 4 fois pour n = 10 ; 1, 2, …, 512 : 10 fois pour n = 1000. C’est O(log n) : multiplier n par 100 n’ajoute que 6 tours.',
          en: '(A) 0 + 1 + … + (n − 1) = n(n − 1)/2: 45 for n = 10, 499,500 for n = 1000. That is O(n²). (B) i is 1, 2, 4, 8: 4 times for n = 10; 1, 2, …, 512: 10 times for n = 1000. That is O(log n): multiplying n by 100 adds only 6 rounds.',
          tr: '(A) 0 + 1 + … + (n − 1) = n(n − 1)/2: n = 10 için 45, n = 1000 için 499.500. Bu O(n²)’dir. (B) i: 1, 2, 4, 8: n = 10 için 4 kez; 1, 2, …, 512: n = 1000 için 10 kez. Bu O(log n)’dir: n’yi 100 ile çarpmak yalnızca 6 tur ekler.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est la complexité de 4n² + 100n + 7 ?',
        en: 'What is the complexity of 4n² + 100n + 7?',
        tr: '4n² + 100n + 7’nin karmaşıklığı nedir?',
      },
      options: { fr: ['O(n)', 'O(n²)', 'O(100n)'], en: ['O(n)', 'O(n²)', 'O(100n)'], tr: ['O(n)', 'O(n²)', 'O(100n)'] },
      answerIndex: 1,
      explanation: {
        fr: 'Pour n grand, n² l’emporte sur n et sur la constante, et on ignore le facteur 4 : O(n²).',
        en: 'For large n, n² outgrows n and the constant, and the factor 4 is ignored: O(n²).',
        tr: 'Büyük n için n², n’yi ve sabiti geçer; 4 çarpanı yok sayılır: O(n²).',
      },
    },
  },
  {
    id: 'ds-w02-arrays',
    week: 2,
    title: { fr: 'Tableaux et tableaux dynamiques', en: 'Arrays and dynamic arrays', tr: 'Diziler ve dinamik diziler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un tableau range ses éléments côte à côte en mémoire : l’accès à t[i] est en O(1), mais insérer ou supprimer au milieu oblige à décaler les suivants, en O(n). Un tableau dynamique (comme vector en C++ ou ArrayList en Java) double sa capacité quand il est plein : chaque ajout coûte O(1) en moyenne (coût amorti).',
          en: 'An array stores its elements side by side in memory: accessing t[i] is O(1), but inserting or deleting in the middle requires shifting the following ones, O(n). A dynamic array (like C++ vector or Java ArrayList) doubles its capacity when full: each append costs O(1) on average (amortized cost).',
          tr: 'Dizi elemanlarını bellekte yan yana saklar: t[i]’ye erişim O(1)’dir, ama ortaya ekleme veya silme sonrakileri kaydırmayı gerektirir, O(n). Dinamik dizi (C++ vector veya Java ArrayList gibi) dolunca kapasitesini ikiye katlar: her ekleme ortalama O(1) tutar (amortize maliyet).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'typedef struct { int *donnees; int taille, capacite; } Vecteur;\n\nvoid ajouter(Vecteur *v, int x) {\n    if (v->taille == v->capacite) {               // plein : on double\n        v->capacite *= 2;\n        v->donnees = realloc(v->donnees, v->capacite * sizeof(int));\n    }\n    v->donnees[v->taille++] = x;\n}\n\nvoid inserer(Vecteur *v, int pos, int x) {      // O(n) : décalage\n    ajouter(v, 0);                                 // fait de la place\n    for (int i = v->taille - 1; i > pos; i--) v->donnees[i] = v->donnees[i - 1];\n    v->donnees[pos] = x;\n}',
          en: 'typedef struct { int *data; int size, capacity; } Vector;\n\nvoid push(Vector *v, int x) {\n    if (v->size == v->capacity) {                  // full: double it\n        v->capacity *= 2;\n        v->data = realloc(v->data, v->capacity * sizeof(int));\n    }\n    v->data[v->size++] = x;\n}\n\nvoid insert(Vector *v, int pos, int x) {        // O(n): shifting\n    push(v, 0);                                    // makes room\n    for (int i = v->size - 1; i > pos; i--) v->data[i] = v->data[i - 1];\n    v->data[pos] = x;\n}',
          tr: 'typedef struct { int *veri; int boyut, kapasite; } Vektor;\n\nvoid ekle(Vektor *v, int x) {\n    if (v->boyut == v->kapasite) {                 // dolu: ikiye katla\n        v->kapasite *= 2;\n        v->veri = realloc(v->veri, v->kapasite * sizeof(int));\n    }\n    v->veri[v->boyut++] = x;\n}\n\nvoid araya_ekle(Vektor *v, int konum, int x) {  // O(n): kaydırma\n    ekle(v, 0);                                    // yer açar\n    for (int i = v->boyut - 1; i > konum; i--) v->veri[i] = v->veri[i - 1];\n    v->veri[konum] = x;\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un vecteur commence avec une capacité de 1 et est vide. On ajoute 10 éléments. Combien de fois la capacité double-t-elle, quelle est la capacité finale et combien d’éléments sont recopiés au total ?',
          en: 'A vector starts empty with capacity 1. 10 elements are added. How many times does the capacity double, what is the final capacity and how many elements are copied in total?',
          tr: 'Bir vektör kapasitesi 1 olarak boş başlıyor. 10 eleman ekleniyor. Kapasite kaç kez ikiye katlanır, son kapasite kaçtır ve toplam kaç eleman kopyalanır?',
        },
        solution: {
          fr: 'La capacité passe 1 → 2 → 4 → 8 → 16 : 4 doublements, capacité finale 16. À chaque doublement, on recopie les éléments présents : 1 + 2 + 4 + 8 = 15 copies pour 10 ajouts. Le total des copies reste inférieur à 2n : c’est pourquoi l’ajout est O(1) amorti.',
          en: 'Capacity goes 1 → 2 → 4 → 8 → 16: 4 doublings, final capacity 16. On each doubling the present elements are copied: 1 + 2 + 4 + 8 = 15 copies for 10 appends. Total copies stay below 2n: that is why appending is amortized O(1).',
          tr: 'Kapasite 1 → 2 → 4 → 8 → 16 olur: 4 kez ikiye katlanır, son kapasite 16. Her katlamada mevcut elemanlar kopyalanır: 10 ekleme için 1 + 2 + 4 + 8 = 15 kopya. Toplam kopya 2n’in altında kalır: ekleme bu yüzden amortize O(1)’dir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle opération coûte O(n) dans un tableau de n éléments ?',
        en: 'Which operation costs O(n) in an array of n elements?',
        tr: 'n elemanlı bir dizide hangi işlem O(n) tutar?',
      },
      options: {
        fr: ['Lire t[i]', 'Insérer un élément au début', 'Modifier t[i]'],
        en: ['Reading t[i]', 'Inserting an element at the front', 'Changing t[i]'],
        tr: ['t[i]’yi okumak', 'Başa bir eleman eklemek', 't[i]’yi değiştirmek'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Insérer au début oblige à décaler les n éléments d’une case. Lire ou modifier t[i] se fait directement par l’adresse : O(1).',
        en: 'Inserting at the front shifts all n elements by one cell. Reading or changing t[i] goes straight to the address: O(1).',
        tr: 'Başa eklemek n elemanın hepsini bir hücre kaydırır. t[i]’yi okumak veya değiştirmek doğrudan adrese gider: O(1).',
      },
    },
  },
  {
    id: 'ds-linked-list',
    week: 3,
    title: { fr: 'Les listes chaînées simples', en: 'Singly linked lists', tr: 'Tek yönlü bağlı listeler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une liste chaînée est une suite de nœuds : chacun contient une valeur et l’adresse du nœud suivant ; le dernier pointe vers NULL. On insère ou supprime en O(1) une fois la position trouvée, mais il faut parcourir la liste depuis la tête pour atteindre un élément : O(n).',
          en: 'A linked list is a chain of nodes: each holds a value and the address of the next node; the last one points to NULL. Inserting or deleting is O(1) once the position is found, but reaching an element means walking from the head: O(n).',
          tr: 'Bağlı liste bir düğüm zinciridir: her düğüm bir değer ve sonraki düğümün adresini tutar; sonuncusu NULL’ı gösterir. Konum bulunduktan sonra ekleme veya silme O(1)’dir, ama bir elemana ulaşmak için baştan dolaşmak gerekir: O(n).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'struct Noeud { int valeur; struct Noeud *suivant; };\n\n// Insérer x dans une liste triée (renvoie la nouvelle tête)\nstruct Noeud *insererTrie(struct Noeud *tete, int x) {\n    struct Noeud *n = malloc(sizeof *n);\n    n->valeur = x;\n    if (tete == NULL || x < tete->valeur) { n->suivant = tete; return n; }\n    struct Noeud *p = tete;\n    while (p->suivant != NULL && p->suivant->valeur < x) p = p->suivant;\n    n->suivant = p->suivant;\n    p->suivant = n;\n    return tete;\n}\n\n// Supprimer la première valeur x\nstruct Noeud *supprimer(struct Noeud *tete, int x) {\n    if (tete == NULL) return NULL;\n    if (tete->valeur == x) { struct Noeud *s = tete->suivant; free(tete); return s; }\n    struct Noeud *p = tete;\n    while (p->suivant != NULL && p->suivant->valeur != x) p = p->suivant;\n    if (p->suivant != NULL) { struct Noeud *d = p->suivant; p->suivant = d->suivant; free(d); }\n    return tete;\n}',
          en: 'struct Node { int value; struct Node *next; };\n\n// Insert x into a sorted list (returns the new head)\nstruct Node *insertSorted(struct Node *head, int x) {\n    struct Node *n = malloc(sizeof *n);\n    n->value = x;\n    if (head == NULL || x < head->value) { n->next = head; return n; }\n    struct Node *p = head;\n    while (p->next != NULL && p->next->value < x) p = p->next;\n    n->next = p->next;\n    p->next = n;\n    return head;\n}\n\n// Delete the first value x\nstruct Node *removeValue(struct Node *head, int x) {\n    if (head == NULL) return NULL;\n    if (head->value == x) { struct Node *s = head->next; free(head); return s; }\n    struct Node *p = head;\n    while (p->next != NULL && p->next->value != x) p = p->next;\n    if (p->next != NULL) { struct Node *d = p->next; p->next = d->next; free(d); }\n    return head;\n}',
          tr: 'struct Dugum { int deger; struct Dugum *sonraki; };\n\n// Sıralı listeye x ekle (yeni başı döndürür)\nstruct Dugum *siraliEkle(struct Dugum *bas, int x) {\n    struct Dugum *n = malloc(sizeof *n);\n    n->deger = x;\n    if (bas == NULL || x < bas->deger) { n->sonraki = bas; return n; }\n    struct Dugum *p = bas;\n    while (p->sonraki != NULL && p->sonraki->deger < x) p = p->sonraki;\n    n->sonraki = p->sonraki;\n    p->sonraki = n;\n    return bas;\n}\n\n// İlk x değerini sil\nstruct Dugum *sil(struct Dugum *bas, int x) {\n    if (bas == NULL) return NULL;\n    if (bas->deger == x) { struct Dugum *s = bas->sonraki; free(bas); return s; }\n    struct Dugum *p = bas;\n    while (p->sonraki != NULL && p->sonraki->deger != x) p = p->sonraki;\n    if (p->sonraki != NULL) { struct Dugum *d = p->sonraki; p->sonraki = d->sonraki; free(d); }\n    return bas;\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'La liste est 4 → 8 → 15 → NULL. On appelle insererTrie(tete, 10), puis insererTrie(tete, 2), puis supprimer(tete, 8). Donne la liste après chaque appel. Dans quel cas la tête change-t-elle ?',
          en: 'The list is 4 → 8 → 15 → NULL. Call insertSorted(head, 10), then insertSorted(head, 2), then removeValue(head, 8). Give the list after each call. When does the head change?',
          tr: 'Liste 4 → 8 → 15 → NULL. siraliEkle(bas, 10), sonra siraliEkle(bas, 2), sonra sil(bas, 8) çağrılıyor. Her çağrıdan sonra listeyi ver. Baş ne zaman değişir?',
        },
        solution: {
          fr: 'Après 10 : p s’arrête sur 8 (car 15 > 10) → 4 → 8 → 10 → 15. Après 2 : 2 < 4, le nouveau nœud devient la tête → 2 → 4 → 8 → 10 → 15. Après suppression de 8 : p s’arrête sur 4 et saute le nœud 8 → 2 → 4 → 10 → 15. La tête ne change qu’en insérant 2, d’où la nécessité de renvoyer la tête (ou de passer un pointeur vers elle).',
          en: 'After 10: p stops at 8 (since 15 > 10) → 4 → 8 → 10 → 15. After 2: 2 < 4, the new node becomes the head → 2 → 4 → 8 → 10 → 15. After removing 8: p stops at 4 and skips node 8 → 2 → 4 → 10 → 15. The head only changes when inserting 2, which is why the head is returned (or a pointer to it is passed).',
          tr: '10’dan sonra: p, 8’de durur (çünkü 15 > 10) → 4 → 8 → 10 → 15. 2’den sonra: 2 < 4, yeni düğüm baş olur → 2 → 4 → 8 → 10 → 15. 8 silindikten sonra: p, 4’te durur ve 8 düğümünü atlar → 2 → 4 → 10 → 15. Baş yalnızca 2 eklenirken değişir; bu yüzden baş döndürülür (veya ona bir işaretçi verilir).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est la complexité pour lire le k-ième élément d’une liste chaînée ?',
        en: 'What is the complexity of reading the k-th element of a linked list?',
        tr: 'Bağlı listenin k. elemanını okumanın karmaşıklığı nedir?',
      },
      options: { fr: ['O(1)', 'O(k)', 'O(log k)'], en: ['O(1)', 'O(k)', 'O(log k)'], tr: ['O(1)', 'O(k)', 'O(log k)'] },
      answerIndex: 1,
      explanation: {
        fr: 'Il n’y a pas d’accès direct : on suit k pointeurs depuis la tête. C’est le prix à payer pour des insertions sans décalage.',
        en: 'There is no direct access: k pointers are followed from the head. That is the price for insertions without shifting.',
        tr: 'Doğrudan erişim yoktur: baştan k işaretçi izlenir. Kaydırmasız eklemenin bedeli budur.',
      },
    },
  },
  {
    id: 'ds-w04-double-circular',
    week: 4,
    title: {
      fr: 'Listes doublement chaînées et circulaires',
      en: 'Doubly linked and circular lists',
      tr: 'Çift yönlü ve dairesel bağlı listeler',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Dans une liste doublement chaînée, chaque nœud connaît aussi le précédent : on parcourt dans les deux sens et on supprime un nœud dont on a l’adresse en O(1). Dans une liste circulaire, le dernier nœud pointe vers le premier : on tourne en rond, ce qui est utile pour un tourniquet (ordonnancement à tour de rôle, joueurs d’un jeu).',
          en: 'In a doubly linked list each node also knows the previous one: it can be walked both ways, and a node whose address is known is deleted in O(1). In a circular list the last node points to the first: you go round in circles, useful for a round robin (turn-based scheduling, players in a game).',
          tr: 'Çift yönlü bağlı listede her düğüm öncekini de bilir: iki yönde dolaşılır ve adresi bilinen bir düğüm O(1)’de silinir. Dairesel listede son düğüm ilkini gösterir: döngüsel dolaşılır; sıralı paylaşım (sırayla zamanlama, bir oyundaki oyuncular) için kullanışlıdır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'struct DNoeud { int valeur; struct DNoeud *prec, *suiv; };\n\n// Retirer n de la liste double, en O(1)\nvoid retirer(struct DNoeud **tete, struct DNoeud *n) {\n    if (n->prec) n->prec->suiv = n->suiv; else *tete = n->suiv;\n    if (n->suiv) n->suiv->prec = n->prec;\n    free(n);\n}\n\n// Liste circulaire : parcours d’un tour complet\nvoid afficherCirculaire(struct Noeud *tete) {\n    if (tete == NULL) return;\n    struct Noeud *p = tete;\n    do { printf("%d ", p->valeur); p = p->suivant; } while (p != tete);\n}',
          en: 'struct DNode { int value; struct DNode *prev, *next; };\n\n// Remove n from the doubly linked list, in O(1)\nvoid unlink(struct DNode **head, struct DNode *n) {\n    if (n->prev) n->prev->next = n->next; else *head = n->next;\n    if (n->next) n->next->prev = n->prev;\n    free(n);\n}\n\n// Circular list: one full round\nvoid printCircular(struct Node *head) {\n    if (head == NULL) return;\n    struct Node *p = head;\n    do { printf("%d ", p->value); p = p->next; } while (p != head);\n}',
          tr: 'struct CDugum { int deger; struct CDugum *onceki, *sonraki; };\n\n// n’yi çift yönlü listeden O(1)’de çıkar\nvoid cikar(struct CDugum **bas, struct CDugum *n) {\n    if (n->onceki) n->onceki->sonraki = n->sonraki; else *bas = n->sonraki;\n    if (n->sonraki) n->sonraki->onceki = n->onceki;\n    free(n);\n}\n\n// Dairesel liste: tam bir tur\nvoid daireselYazdir(struct Dugum *bas) {\n    if (bas == NULL) return;\n    struct Dugum *p = bas;\n    do { printf("%d ", p->deger); p = p->sonraki; } while (p != bas);\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Problème de Josèphe : 5 joueurs numérotés 1 à 5 sont placés dans une liste circulaire. En partant du joueur 1, on compte 2 et on élimine le 2e, puis on recommence à compter depuis le suivant. Dans quel ordre les joueurs sont-ils éliminés, et qui reste ?',
          en: 'Josephus problem: 5 players numbered 1 to 5 sit in a circular list. Starting from player 1, count 2 and eliminate the 2nd, then count again from the next one. In which order are players eliminated, and who remains?',
          tr: 'Josephus problemi: 1’den 5’e numaralı 5 oyuncu dairesel bir listede. 1. oyuncudan başlayarak 2 sayılır ve 2. elenir, sonra sonrakinden yeniden sayılır. Oyuncular hangi sırayla elenir ve kim kalır?',
        },
        solution: {
          fr: 'Cercle 1-2-3-4-5 : on élimine 2 (reste 1, 3, 4, 5), on repart de 3 → élimine 4, on repart de 5 → élimine 1 (le cercle reboucle), on repart de 3 → élimine 5. Ordre : 2, 4, 1, 5 ; le joueur 3 reste. La liste circulaire rend le « retour au début » automatique.',
          en: 'Circle 1-2-3-4-5: eliminate 2 (left 1, 3, 4, 5), restart at 3 → eliminate 4, restart at 5 → eliminate 1 (the circle wraps), restart at 3 → eliminate 5. Order: 2, 4, 1, 5; player 3 remains. The circular list makes “going back to the start” automatic.',
          tr: 'Daire 1-2-3-4-5: 2 elenir (kalan 1, 3, 4, 5), 3’ten başlanır → 4 elenir, 5’ten başlanır → 1 elenir (daire başa döner), 3’ten başlanır → 5 elenir. Sıra: 2, 4, 1, 5; 3. oyuncu kalır. Dairesel liste “başa dönmeyi” otomatik yapar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans une liste circulaire non vide, comment sait-on qu’on a fait un tour complet ?',
        en: 'In a non-empty circular list, how do you know a full round is done?',
        tr: 'Boş olmayan dairesel bir listede tam bir turun bittiği nasıl anlaşılır?',
      },
      options: {
        fr: ['p devient NULL', 'p revient à la tête', 'La valeur vaut 0'],
        en: ['p becomes NULL', 'p comes back to the head', 'The value is 0'],
        tr: ['p, NULL olur', 'p başa geri döner', 'Değer 0 olur'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Aucun nœud ne pointe vers NULL dans une liste circulaire : on s’arrête quand on retrouve le nœud de départ, d’où la boucle do … while.',
        en: 'No node points to NULL in a circular list: stop when the starting node comes back, hence the do … while loop.',
        tr: 'Dairesel listede hiçbir düğüm NULL’ı göstermez: başlangıç düğümüne dönülünce durulur, bu yüzden do … while döngüsü kullanılır.',
      },
    },
  },
  {
    id: 'ds-stack',
    week: 5,
    title: { fr: 'Les piles', en: 'Stacks', tr: 'Yığınlar' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une pile suit la règle LIFO (Last In, First Out) : le dernier élément ajouté est le premier retiré, comme une pile d’assiettes. Opérations en O(1) : empiler (push), dépiler (pop), regarder le sommet (peek). Usages : annuler (Ctrl+Z), pile des appels de fonctions, vérification des parenthèses, évaluation d’expressions postfixées.',
          en: 'A stack follows the LIFO rule (Last In, First Out): the last element added is the first removed, like a stack of plates. O(1) operations: push, pop, peek at the top. Uses: undo (Ctrl+Z), the function call stack, checking parentheses, evaluating postfix expressions.',
          tr: 'Yığın LIFO (Last In, First Out) kuralına uyar: son eklenen eleman ilk çıkarılır, tabak yığını gibi. O(1) işlemler: ekleme (push), çıkarma (pop), tepeye bakma (peek). Kullanımlar: geri al (Ctrl+Z), fonksiyon çağrı yığını, parantez denetimi, sonek ifadelerin hesaplanması.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '#define MAX 100\nint pile[MAX];\nint sommet = -1;                       // pile vide\n\nint estVide(void) { return sommet == -1; }\nvoid empiler(int x) {\n    if (sommet == MAX - 1) { printf("Débordement\\n"); return; }\n    pile[++sommet] = x;\n}\nint depiler(void) {\n    if (estVide()) { printf("Pile vide\\n"); return -1; }\n    return pile[sommet--];\n}\n\n// Expression postfixée "5 3 + 2 *" : chaque nombre est empilé,\n// chaque opérateur dépile b puis a et empile a op b',
          en: '#define MAX 100\nint stack[MAX];\nint top = -1;                          // empty stack\n\nint isEmpty(void) { return top == -1; }\nvoid push(int x) {\n    if (top == MAX - 1) { printf("Overflow\\n"); return; }\n    stack[++top] = x;\n}\nint pop(void) {\n    if (isEmpty()) { printf("Empty stack\\n"); return -1; }\n    return stack[top--];\n}\n\n// Postfix expression "5 3 + 2 *": each number is pushed,\n// each operator pops b then a and pushes a op b',
          tr: '#define MAX 100\nint yigin[MAX];\nint tepe = -1;                         // boş yığın\n\nint bosMu(void) { return tepe == -1; }\nvoid ekle(int x) {\n    if (tepe == MAX - 1) { printf("Tasma\\n"); return; }\n    yigin[++tepe] = x;\n}\nint cikar(void) {\n    if (bosMu()) { printf("Yigin bos\\n"); return -1; }\n    return yigin[tepe--];\n}\n\n// Sonek ifade "5 3 + 2 *": her sayı yığına eklenir,\n// her işleç b’yi sonra a’yı çıkarır ve a işleç b’yi ekler',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Évalue l’expression postfixée 5 3 + 8 2 - * avec une pile. Donne le contenu de la pile après chaque symbole. Quelle est l’expression habituelle (infixée) correspondante ?',
          en: 'Evaluate the postfix expression 5 3 + 8 2 - * with a stack. Give the stack contents after each symbol. What is the matching usual (infix) expression?',
          tr: '5 3 + 8 2 - * sonek ifadesini bir yığınla hesapla. Her simgeden sonra yığının içeriğini ver. Karşılık gelen olağan (araek) ifade nedir?',
        },
        solution: {
          fr: '5 → [5] ; 3 → [5, 3] ; + → [8] ; 8 → [8, 8] ; 2 → [8, 8, 2] ; − → 8 − 2 = 6 → [8, 6] ; × → 8 × 6 = 48 → [48]. Résultat : 48. L’expression infixée est (5 + 3) × (8 − 2) : la notation postfixée n’a pas besoin de parenthèses.',
          en: '5 → [5]; 3 → [5, 3]; + → [8]; 8 → [8, 8]; 2 → [8, 8, 2]; − → 8 − 2 = 6 → [8, 6]; × → 8 × 6 = 48 → [48]. Result: 48. The infix expression is (5 + 3) × (8 − 2): postfix notation needs no parentheses.',
          tr: '5 → [5]; 3 → [5, 3]; + → [8]; 8 → [8, 8]; 2 → [8, 8, 2]; − → 8 − 2 = 6 → [8, 6]; × → 8 × 6 = 48 → [48]. Sonuç: 48. Araek ifade (5 + 3) × (8 − 2)’dir: sonek gösterim parantez gerektirmez.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'On empile 1, puis 2, puis 3, puis on dépile une fois. Quel élément sort ?',
        en: 'Push 1, then 2, then 3, then pop once. Which element comes out?',
        tr: '1, sonra 2, sonra 3 yığına ekleniyor, sonra bir kez çıkarılıyor. Hangi eleman çıkar?',
      },
      options: { fr: ['1', '2', '3'], en: ['1', '2', '3'], tr: ['1', '2', '3'] },
      answerIndex: 2,
      explanation: {
        fr: 'Une pile est LIFO : le dernier entré, 3, sort le premier.',
        en: 'A stack is LIFO: the last one in, 3, is the first out.',
        tr: 'Yığın LIFO’dur: son giren 3, ilk çıkar.',
      },
    },
  },
  {
    id: 'ds-queue',
    week: 6,
    title: { fr: 'Les files et la file circulaire', en: 'Queues and the circular queue', tr: 'Kuyruklar ve dairesel kuyruk' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une file suit la règle FIFO (First In, First Out), comme une file d’attente : on ajoute à l’arrière (enfiler) et on retire à l’avant (défiler). Avec un tableau simple, les cases libérées à l’avant sont perdues ; la file circulaire réutilise ces cases grâce au modulo. Usages : file d’impression, parcours en largeur, tampons réseau.',
          en: 'A queue follows the FIFO rule (First In, First Out), like a waiting line: add at the back (enqueue), remove from the front (dequeue). With a plain array, cells freed at the front are lost; a circular queue reuses them thanks to modulo. Uses: print queue, breadth-first search, network buffers.',
          tr: 'Kuyruk FIFO (First In, First Out) kuralına uyar, bekleme sırası gibi: arkaya eklenir (enqueue), önden çıkarılır (dequeue). Basit dizide öndeki boşalan hücreler kaybolur; dairesel kuyruk mod işlemiyle bu hücreleri yeniden kullanır. Kullanımlar: yazdırma kuyruğu, genişlik öncelikli arama, ağ tamponları.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '#define N 5\nint file[N];\nint debut = 0, fin = 0, nb = 0;     // fin = prochaine case libre\n\nint enfiler(int x) {\n    if (nb == N) return 0;            // pleine\n    file[fin] = x;\n    fin = (fin + 1) % N;              // revient à 0 après N - 1\n    nb++;\n    return 1;\n}\nint defiler(int *x) {\n    if (nb == 0) return 0;            // vide\n    *x = file[debut];\n    debut = (debut + 1) % N;\n    nb--;\n    return 1;\n}',
          en: '#define N 5\nint queue[N];\nint front = 0, rear = 0, count = 0;   // rear = next free cell\n\nint enqueue(int x) {\n    if (count == N) return 0;          // full\n    queue[rear] = x;\n    rear = (rear + 1) % N;             // wraps to 0 after N - 1\n    count++;\n    return 1;\n}\nint dequeue(int *x) {\n    if (count == 0) return 0;          // empty\n    *x = queue[front];\n    front = (front + 1) % N;\n    count--;\n    return 1;\n}',
          tr: '#define N 5\nint kuyruk[N];\nint bas = 0, son = 0, adet = 0;      // son = sonraki boş hücre\n\nint ekle(int x) {\n    if (adet == N) return 0;          // dolu\n    kuyruk[son] = x;\n    son = (son + 1) % N;              // N - 1’den sonra 0’a döner\n    adet++;\n    return 1;\n}\nint cikar(int *x) {\n    if (adet == 0) return 0;          // boş\n    *x = kuyruk[bas];\n    bas = (bas + 1) % N;\n    adet--;\n    return 1;\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'File circulaire de taille 5, vide au départ. On enfile 10, 20, 30, 40 ; on défile deux fois ; puis on enfile 50, 60, 70. Donne le contenu du tableau, debut, fin et nb à la fin. Quels éléments ont été défilés ? Peut-on encore enfiler 80 ?',
          en: 'Circular queue of size 5, empty at first. Enqueue 10, 20, 30, 40; dequeue twice; then enqueue 50, 60, 70. Give the array contents, front, rear and count at the end. Which elements were dequeued? Can 80 still be enqueued?',
          tr: '5 boyutlu dairesel kuyruk, başta boş. 10, 20, 30, 40 eklenir; iki kez çıkarılır; sonra 50, 60, 70 eklenir. Sonunda dizinin içeriğini, bas, son ve adet değerlerini ver. Hangi elemanlar çıkarıldı? 80 hâlâ eklenebilir mi?',
        },
        solution: {
          fr: 'Après 4 ajouts : [10, 20, 30, 40, _], fin = 4. Les deux retraits donnent 10 puis 20 (FIFO), debut = 2. 50 va en case 4, puis fin revient à 0 : 60 en case 0, 70 en case 1, fin = 2. Tableau [60, 70, 30, 40, 50], debut = 2, fin = 2, nb = 5. La file est pleine : enfiler(80) renvoie 0. Remarque : debut == fin à la fois pour une file vide et pleine, d’où le compteur nb.',
          en: 'After 4 adds: [10, 20, 30, 40, _], rear = 4. The two removals give 10 then 20 (FIFO), front = 2. 50 goes in cell 4, then rear wraps to 0: 60 in cell 0, 70 in cell 1, rear = 2. Array [60, 70, 30, 40, 50], front = 2, rear = 2, count = 5. The queue is full: enqueue(80) returns 0. Note: front == rear for both an empty and a full queue, hence the count.',
          tr: '4 eklemeden sonra: [10, 20, 30, 40, _], son = 4. İki çıkarma 10 ve sonra 20’yi verir (FIFO), bas = 2. 50, 4. hücreye gider, sonra son 0’a döner: 60 0. hücreye, 70 1. hücreye, son = 2. Dizi [60, 70, 30, 40, 50], bas = 2, son = 2, adet = 5. Kuyruk dolu: ekle(80) 0 döndürür. Not: bas == son hem boş hem dolu kuyrukta olur, adet sayacı bu yüzden gerekir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'On enfile A, B, C puis on défile une fois. Quel élément sort ?',
        en: 'Enqueue A, B, C then dequeue once. Which element comes out?',
        tr: 'A, B, C kuyruğa eklenir, sonra bir kez çıkarılır. Hangi eleman çıkar?',
      },
      options: { fr: ['A', 'B', 'C'], en: ['A', 'B', 'C'], tr: ['A', 'B', 'C'] },
      answerIndex: 0,
      explanation: {
        fr: 'Une file est FIFO : le premier arrivé, A, est le premier servi.',
        en: 'A queue is FIFO: the first to arrive, A, is the first served.',
        tr: 'Kuyruk FIFO’dur: ilk gelen A, ilk hizmet alır.',
      },
    },
  },
  {
    id: 'ds-w07-recursion',
    week: 7,
    title: {
      fr: 'Récursivité et révision de la vize',
      en: 'Recursion and midterm review',
      tr: 'Özyineleme ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une fonction récursive s’appelle elle-même sur un problème plus petit, jusqu’à un cas de base qui s’arrête. Chaque appel est placé sur la pile des appels : sans cas de base, la pile déborde (stack overflow). Certaines récursions recalculent les mêmes valeurs et deviennent exponentielles.',
          en: 'A recursive function calls itself on a smaller problem, down to a base case that stops. Each call is placed on the call stack: without a base case, the stack overflows. Some recursions recompute the same values and become exponential.',
          tr: 'Özyinelemeli fonksiyon, duran bir temel duruma kadar daha küçük bir problem için kendini çağırır. Her çağrı çağrı yığınına konur: temel durum yoksa yığın taşar (stack overflow). Bazı özyinelemeler aynı değerleri yeniden hesaplar ve üstel olur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'int fib(int n) {                      // 1 appel → 2 appels → …\n    if (n <= 1) return n;              // cas de base\n    return fib(n - 1) + fib(n - 2);\n}\n\nvoid hanoi(int n, char de, char vers, char via) {\n    if (n == 0) return;\n    hanoi(n - 1, de, via, vers);       // n - 1 disques sur le piquet intermédiaire\n    printf("%c -> %c\\n", de, vers);    // le plus grand disque\n    hanoi(n - 1, via, vers, de);       // n - 1 disques par-dessus\n}',
          en: 'int fib(int n) {                      // 1 call → 2 calls → …\n    if (n <= 1) return n;              // base case\n    return fib(n - 1) + fib(n - 2);\n}\n\nvoid hanoi(int n, char from, char to, char via) {\n    if (n == 0) return;\n    hanoi(n - 1, from, via, to);       // n - 1 disks onto the spare peg\n    printf("%c -> %c\\n", from, to);    // the largest disk\n    hanoi(n - 1, via, to, from);       // n - 1 disks on top\n}',
          tr: 'int fib(int n) {                      // 1 çağrı → 2 çağrı → …\n    if (n <= 1) return n;              // temel durum\n    return fib(n - 1) + fib(n - 2);\n}\n\nvoid hanoi(int n, char kaynak, char hedef, char ara) {\n    if (n == 0) return;\n    hanoi(n - 1, kaynak, ara, hedef);  // n - 1 disk ara direğe\n    printf("%c -> %c\\n", kaynak, hedef);  // en büyük disk\n    hanoi(n - 1, ara, hedef, kaynak);  // n - 1 disk üstüne\n}',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Grand O : compter les boucles, garder le terme dominant\n✔ Tableau dynamique : doublement, coût amorti\n✔ Listes simples : insertion triée, suppression, changement de tête\n✔ Listes doubles et circulaires, problème de Josèphe\n✔ Pile LIFO : push / pop, expressions postfixées, parenthèses\n✔ File FIFO : file circulaire, modulo, pleine / vide\n✔ Récursivité : cas de base, pile des appels, Hanoï',
          en: '✔ Big O: count loops, keep the dominant term\n✔ Dynamic array: doubling, amortized cost\n✔ Singly linked lists: sorted insert, delete, head change\n✔ Doubly linked and circular lists, Josephus problem\n✔ LIFO stack: push / pop, postfix expressions, parentheses\n✔ FIFO queue: circular queue, modulo, full / empty\n✔ Recursion: base case, call stack, Hanoi',
          tr: '✔ Büyük O: döngüleri say, baskın terimi tut\n✔ Dinamik dizi: ikiye katlama, amortize maliyet\n✔ Tek yönlü listeler: sıralı ekleme, silme, baş değişimi\n✔ Çift yönlü ve dairesel listeler, Josephus problemi\n✔ LIFO yığın: push / pop, sonek ifadeler, parantezler\n✔ FIFO kuyruk: dairesel kuyruk, mod, dolu / boş\n✔ Özyineleme: temel durum, çağrı yığını, Hanoi',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Combien de déplacements fait hanoi(4, \'A\', \'C\', \'B\') ? (2) Combien d’appels à fib au total (y compris le premier) pour calculer fib(5), et quelle est sa valeur ?',
          en: '(1) How many moves does hanoi(4, \'A\', \'C\', \'B\') make? (2) How many calls to fib in total (including the first) does computing fib(5) take, and what is its value?',
          tr: '(1) hanoi(4, \'A\', \'C\', \'B\') kaç hamle yapar? (2) fib(5) hesaplanırken toplam kaç fib çağrısı yapılır (ilki dahil) ve değeri nedir?',
        },
        solution: {
          fr: '(1) D(n) = 2·D(n − 1) + 1 avec D(0) = 0 : 1, 3, 7, 15. Donc 15 = 2⁴ − 1 déplacements. (2) Appels A(n) = A(n − 1) + A(n − 2) + 1 avec A(0) = A(1) = 1 : A(2) = 3, A(3) = 5, A(4) = 9, A(5) = 15 appels, pour fib(5) = 5. Le nombre d’appels croît de façon exponentielle : mémoriser les résultats (ou une boucle) ramène le calcul à O(n).',
          en: '(1) M(n) = 2·M(n − 1) + 1 with M(0) = 0: 1, 3, 7, 15. So 15 = 2⁴ − 1 moves. (2) Calls C(n) = C(n − 1) + C(n − 2) + 1 with C(0) = C(1) = 1: C(2) = 3, C(3) = 5, C(4) = 9, C(5) = 15 calls, for fib(5) = 5. The number of calls grows exponentially: storing results (or a loop) brings it down to O(n).',
          tr: '(1) H(n) = 2·H(n − 1) + 1, H(0) = 0: 1, 3, 7, 15. Yani 15 = 2⁴ − 1 hamle. (2) Çağrılar Ç(n) = Ç(n − 1) + Ç(n − 2) + 1, Ç(0) = Ç(1) = 1: Ç(2) = 3, Ç(3) = 5, Ç(4) = 9, Ç(5) = 15 çağrı; fib(5) = 5. Çağrı sayısı üstel artar: sonuçları saklamak (veya döngü) hesabı O(n)’e indirir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que se passe-t-il si une fonction récursive n’a pas de cas de base ?',
        en: 'What happens if a recursive function has no base case?',
        tr: 'Özyinelemeli bir fonksiyonun temel durumu yoksa ne olur?',
      },
      options: {
        fr: ['Elle renvoie 0', 'La pile des appels déborde', 'Le compilateur l’arrête'],
        en: ['It returns 0', 'The call stack overflows', 'The compiler stops it'],
        tr: ['0 döndürür', 'Çağrı yığını taşar', 'Derleyici onu durdurur'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Les appels s’empilent sans fin jusqu’à épuiser la mémoire de la pile : le programme plante (stack overflow). Le compilateur ne détecte pas ce problème.',
        en: 'Calls pile up endlessly until the stack memory runs out: the program crashes (stack overflow). The compiler doesn’t detect it.',
        tr: 'Çağrılar yığın belleği bitene kadar sonsuza dek birikir: program çöker (stack overflow). Derleyici bunu fark etmez.',
      },
    },
  },
  {
    id: 'ds-w08-trees',
    week: 8,
    title: { fr: 'Arbres binaires et parcours', en: 'Binary trees and traversals', tr: 'İkili ağaçlar ve dolaşma' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un arbre est une structure hiérarchique : une racine, des nœuds enfants, des feuilles (sans enfant). Dans un arbre binaire, chaque nœud a au plus deux enfants (gauche et droit). Vocabulaire : la profondeur d’un nœud est sa distance à la racine, la hauteur de l’arbre est la plus grande profondeur. Trois parcours en profondeur : préfixe (racine, gauche, droite), infixe (gauche, racine, droite) et postfixe (gauche, droite, racine).',
          en: 'A tree is a hierarchical structure: a root, child nodes, leaves (no children). In a binary tree each node has at most two children (left and right). Vocabulary: a node’s depth is its distance from the root, the tree’s height is the largest depth. Three depth-first traversals: preorder (root, left, right), inorder (left, root, right) and postorder (left, right, root).',
          tr: 'Ağaç hiyerarşik bir yapıdır: bir kök, çocuk düğümler, yapraklar (çocuksuz). İkili ağaçta her düğümün en fazla iki çocuğu (sol ve sağ) vardır. Terimler: bir düğümün derinliği köke uzaklığıdır, ağacın yüksekliği en büyük derinliktir. Üç derinlik öncelikli dolaşma: önce kök (kök, sol, sağ), ortada kök (sol, kök, sağ) ve sonda kök (sol, sağ, kök).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'struct Arbre { char cle; struct Arbre *g, *d; };\n\nvoid prefixe(struct Arbre *a) {\n    if (a == NULL) return;\n    printf("%c ", a->cle);   // racine d’abord\n    prefixe(a->g);\n    prefixe(a->d);\n}\n// infixe : g, racine, d      postfixe : g, d, racine\n\nint hauteur(struct Arbre *a) {          // en nombre d’arêtes\n    if (a == NULL) return -1;\n    int hg = hauteur(a->g), hd = hauteur(a->d);\n    return 1 + (hg > hd ? hg : hd);\n}\n\n        A\n      /   \\\n     B     C\n    / \\   /\n   D   E F',
          en: 'struct Tree { char key; struct Tree *l, *r; };\n\nvoid preorder(struct Tree *t) {\n    if (t == NULL) return;\n    printf("%c ", t->key);   // root first\n    preorder(t->l);\n    preorder(t->r);\n}\n// inorder: l, root, r      postorder: l, r, root\n\nint height(struct Tree *t) {            // counted in edges\n    if (t == NULL) return -1;\n    int hl = height(t->l), hr = height(t->r);\n    return 1 + (hl > hr ? hl : hr);\n}\n\n        A\n      /   \\\n     B     C\n    / \\   /\n   D   E F',
          tr: 'struct Agac { char anahtar; struct Agac *sol, *sag; };\n\nvoid onceKok(struct Agac *a) {\n    if (a == NULL) return;\n    printf("%c ", a->anahtar);   // önce kök\n    onceKok(a->sol);\n    onceKok(a->sag);\n}\n// ortada kök: sol, kök, sağ      sonda kök: sol, sağ, kök\n\nint yukseklik(struct Agac *a) {         // kenar sayısıyla\n    if (a == NULL) return -1;\n    int ys = yukseklik(a->sol), yg = yukseklik(a->sag);\n    return 1 + (ys > yg ? ys : yg);\n}\n\n        A\n      /   \\\n     B     C\n    / \\   /\n   D   E F',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pour l’arbre dessiné ci-dessus (F est l’enfant gauche de C), donne les parcours préfixe, infixe et postfixe, la hauteur et la liste des feuilles.',
          en: 'For the tree drawn above (F is C’s left child), give the preorder, inorder and postorder traversals, the height and the list of leaves.',
          tr: 'Yukarıda çizilen ağaç için (F, C’nin sol çocuğudur) önce kök, ortada kök ve sonda kök dolaşmalarını, yüksekliği ve yaprakların listesini ver.',
        },
        solution: {
          fr: 'Préfixe : A B D E C F. Infixe : D B E A F C. Postfixe : D E B F C A. Hauteur : 2 (A → B → D). Feuilles : D, E, F. Astuce d’examen : en préfixe, la racine est toujours la première ; en postfixe, la dernière.',
          en: 'Preorder: A B D E C F. Inorder: D B E A F C. Postorder: D E B F C A. Height: 2 (A → B → D). Leaves: D, E, F. Exam tip: in preorder the root is always first; in postorder, last.',
          tr: 'Önce kök: A B D E C F. Ortada kök: D B E A F C. Sonda kök: D E B F C A. Yükseklik: 2 (A → B → D). Yapraklar: D, E, F. Sınav ipucu: önce kökte kök her zaman ilk, sonda kökte ise sondadır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel parcours visite la racine en dernier ?',
        en: 'Which traversal visits the root last?',
        tr: 'Hangi dolaşma kökü en son ziyaret eder?',
      },
      options: { fr: ['Préfixe', 'Infixe', 'Postfixe'], en: ['Preorder', 'Inorder', 'Postorder'], tr: ['Önce kök', 'Ortada kök', 'Sonda kök'] },
      answerIndex: 2,
      explanation: {
        fr: 'Postfixe = gauche, droite, puis racine. On l’utilise par exemple pour libérer un arbre : les enfants doivent être libérés avant leur parent.',
        en: 'Postorder = left, right, then root. It is used for example to free a tree: children must be freed before their parent.',
        tr: 'Sonda kök = sol, sağ, sonra kök. Örneğin bir ağacı serbest bırakmak için kullanılır: çocuklar ebeveynden önce serbest bırakılmalıdır.',
      },
    },
  },
  {
    id: 'ds-w09-bst',
    week: 9,
    title: { fr: 'Arbres binaires de recherche', en: 'Binary search trees', tr: 'İkili arama ağaçları' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Dans un arbre binaire de recherche (ABR), pour chaque nœud, les clés du sous-arbre gauche sont plus petites et celles du sous-arbre droit plus grandes. Recherche, insertion et suppression coûtent O(h), où h est la hauteur : O(log n) si l’arbre est équilibré, mais O(n) s’il dégénère en liste (clés insérées dans l’ordre). Le parcours infixe donne les clés triées.',
          en: 'In a binary search tree (BST), for every node, keys in the left subtree are smaller and keys in the right subtree larger. Search, insertion and deletion cost O(h), where h is the height: O(log n) if the tree is balanced, but O(n) if it degenerates into a list (keys inserted in order). The inorder traversal gives the keys sorted.',
          tr: 'İkili arama ağacında (BST) her düğüm için sol alt ağaçtaki anahtarlar daha küçük, sağ alt ağaçtakiler daha büyüktür. Arama, ekleme ve silme O(h) tutar, h yüksekliktir: ağaç dengeliyse O(log n), ama listeye dönüşürse (anahtarlar sırayla eklenirse) O(n). Ortada kök dolaşma anahtarları sıralı verir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'struct Noeud *inserer(struct Noeud *r, int x) {\n    if (r == NULL) { r = calloc(1, sizeof *r); r->cle = x; return r; }\n    if (x < r->cle) r->g = inserer(r->g, x);\n    else if (x > r->cle) r->d = inserer(r->d, x);\n    return r;                                  // doublons ignorés\n}\n\nSupprimer un nœud :\n• feuille            → on l’enlève\n• un seul enfant     → l’enfant prend sa place\n• deux enfants       → on remplace sa clé par son successeur\n                       (le minimum du sous-arbre droit),\n                       puis on supprime ce successeur',
          en: 'struct Node *insert(struct Node *r, int x) {\n    if (r == NULL) { r = calloc(1, sizeof *r); r->key = x; return r; }\n    if (x < r->key) r->l = insert(r->l, x);\n    else if (x > r->key) r->r = insert(r->r, x);\n    return r;                                  // duplicates ignored\n}\n\nDeleting a node:\n• leaf               → just remove it\n• one child          → the child takes its place\n• two children       → replace its key with its successor\n                       (the minimum of the right subtree),\n                       then delete that successor',
          tr: 'struct Dugum *ekle(struct Dugum *k, int x) {\n    if (k == NULL) { k = calloc(1, sizeof *k); k->anahtar = x; return k; }\n    if (x < k->anahtar) k->sol = ekle(k->sol, x);\n    else if (x > k->anahtar) k->sag = ekle(k->sag, x);\n    return k;                                  // tekrarlar yok sayılır\n}\n\nDüğüm silme:\n• yaprak             → doğrudan çıkarılır\n• tek çocuk          → çocuk onun yerine geçer\n• iki çocuk          → anahtarı ardılıyla değiştirilir\n                       (sağ alt ağacın en küçüğü),\n                       sonra o ardıl silinir',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Insère dans un ABR vide : 50, 30, 70, 20, 40, 60, 80, 35. Dessine l’arbre, donne sa hauteur et son parcours infixe. Puis supprime 30 : quelle clé le remplace et à quoi ressemble l’arbre ?',
          en: 'Insert into an empty BST: 50, 30, 70, 20, 40, 60, 80, 35. Draw the tree, give its height and inorder traversal. Then delete 30: which key replaces it and what does the tree look like?',
          tr: 'Boş bir BST’ye ekle: 50, 30, 70, 20, 40, 60, 80, 35. Ağacı çiz, yüksekliğini ve ortada kök dolaşmasını ver. Sonra 30’u sil: yerine hangi anahtar geçer ve ağaç nasıl görünür?',
        },
        solution: {
          fr: 'Racine 50 ; 30 à gauche (enfants 20 et 40), 70 à droite (enfants 60 et 80) ; 35 est l’enfant gauche de 40. Hauteur 3 (50 → 30 → 40 → 35). Infixe : 20 30 35 40 50 60 70 80, bien trié. 30 a deux enfants : son successeur est le minimum du sous-arbre droit (40 → 35), donc 35. Après suppression : 50 ; à gauche 35 (enfants 20 et 40) ; à droite 70 (enfants 60 et 80). L’ordre infixe reste trié.',
          en: 'Root 50; 30 on the left (children 20 and 40), 70 on the right (children 60 and 80); 35 is 40’s left child. Height 3 (50 → 30 → 40 → 35). Inorder: 20 30 35 40 50 60 70 80, sorted. 30 has two children: its successor is the right subtree’s minimum (40 → 35), so 35. After deletion: 50; on the left 35 (children 20 and 40); on the right 70 (children 60 and 80). The inorder stays sorted.',
          tr: 'Kök 50; solda 30 (çocukları 20 ve 40), sağda 70 (çocukları 60 ve 80); 35, 40’ın sol çocuğudur. Yükseklik 3 (50 → 30 → 40 → 35). Ortada kök: 20 30 35 40 50 60 70 80, sıralı. 30’un iki çocuğu var: ardılı sağ alt ağacın en küçüğüdür (40 → 35), yani 35. Silmeden sonra: 50; solda 35 (çocukları 20 ve 40); sağda 70 (çocukları 60 ve 80). Ortada kök sırası sıralı kalır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'On insère 1, 2, 3, 4, 5 dans cet ordre dans un ABR vide. Quelle est la hauteur obtenue ?',
        en: '1, 2, 3, 4, 5 are inserted in that order into an empty BST. What is the resulting height?',
        tr: '1, 2, 3, 4, 5 bu sırayla boş bir BST’ye ekleniyor. Elde edilen yükseklik nedir?',
      },
      options: { fr: ['2', '4', '5'], en: ['2', '4', '5'], tr: ['2', '4', '5'] },
      answerIndex: 1,
      explanation: {
        fr: 'Chaque clé va à droite de la précédente : l’arbre devient une liste 1 → 2 → 3 → 4 → 5 de hauteur 4. D’où l’intérêt des arbres équilibrés (AVL, rouge-noir).',
        en: 'Each key goes to the right of the previous one: the tree becomes a list 1 → 2 → 3 → 4 → 5 of height 4. Hence balanced trees (AVL, red-black).',
        tr: 'Her anahtar öncekinin sağına gider: ağaç yüksekliği 4 olan 1 → 2 → 3 → 4 → 5 listesine dönüşür. Dengeli ağaçların (AVL, kırmızı-siyah) önemi buradan gelir.',
      },
    },
  },
  {
    id: 'ds-w10-heaps',
    week: 10,
    title: { fr: 'Tas et files de priorité', en: 'Heaps and priority queues', tr: 'Yığın ağaçları ve öncelik kuyrukları' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un tas min est un arbre binaire complet où chaque parent est plus petit que ses enfants : le minimum est à la racine. On le range dans un tableau : les enfants de la case i sont en 2i + 1 et 2i + 2, son parent en (i − 1) / 2. Insertion : on ajoute à la fin puis on remonte. Extraction du minimum : on met le dernier à la racine puis on le descend. Les deux coûtent O(log n). C’est la structure d’une file de priorité.',
          en: 'A min-heap is a complete binary tree where every parent is smaller than its children: the minimum is at the root. It is stored in an array: the children of cell i are at 2i + 1 and 2i + 2, its parent at (i − 1) / 2. Insert: add at the end then sift up. Extract the minimum: move the last element to the root then sift down. Both cost O(log n). This is the structure behind a priority queue.',
          tr: 'Min yığın (min-heap), her ebeveynin çocuklarından küçük olduğu tam bir ikili ağaçtır: en küçük kökte bulunur. Dizide saklanır: i hücresinin çocukları 2i + 1 ve 2i + 2’de, ebeveyni (i − 1) / 2’dedir. Ekleme: sona eklenir, sonra yukarı taşınır. En küçüğü çıkarma: son eleman köke konur, sonra aşağı taşınır. İkisi de O(log n) tutar. Öncelik kuyruğunun yapısı budur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'int tas[100], n = 0;\n\nvoid insererTas(int x) {\n    int i = n++;\n    tas[i] = x;\n    while (i > 0 && tas[(i - 1) / 2] > tas[i]) {     // remonter\n        echanger(&tas[i], &tas[(i - 1) / 2]);\n        i = (i - 1) / 2;\n    }\n}\n\nint extraireMin(void) {\n    int min = tas[0];\n    tas[0] = tas[--n];                               // le dernier à la racine\n    int i = 0;\n    for (;;) {                                       // descendre\n        int g = 2 * i + 1, d = 2 * i + 2, p = i;\n        if (g < n && tas[g] < tas[p]) p = g;\n        if (d < n && tas[d] < tas[p]) p = d;\n        if (p == i) break;\n        echanger(&tas[i], &tas[p]);\n        i = p;\n    }\n    return min;\n}',
          en: 'int heap[100], n = 0;\n\nvoid heapInsert(int x) {\n    int i = n++;\n    heap[i] = x;\n    while (i > 0 && heap[(i - 1) / 2] > heap[i]) {   // sift up\n        swap(&heap[i], &heap[(i - 1) / 2]);\n        i = (i - 1) / 2;\n    }\n}\n\nint extractMin(void) {\n    int min = heap[0];\n    heap[0] = heap[--n];                             // last one to the root\n    int i = 0;\n    for (;;) {                                       // sift down\n        int l = 2 * i + 1, r = 2 * i + 2, s = i;\n        if (l < n && heap[l] < heap[s]) s = l;\n        if (r < n && heap[r] < heap[s]) s = r;\n        if (s == i) break;\n        swap(&heap[i], &heap[s]);\n        i = s;\n    }\n    return min;\n}',
          tr: 'int yigin[100], n = 0;\n\nvoid yiginaEkle(int x) {\n    int i = n++;\n    yigin[i] = x;\n    while (i > 0 && yigin[(i - 1) / 2] > yigin[i]) { // yukarı taşı\n        degistir(&yigin[i], &yigin[(i - 1) / 2]);\n        i = (i - 1) / 2;\n    }\n}\n\nint enKucuguCikar(void) {\n    int min = yigin[0];\n    yigin[0] = yigin[--n];                           // sonuncu köke\n    int i = 0;\n    for (;;) {                                       // aşağı taşı\n        int s = 2 * i + 1, g = 2 * i + 2, k = i;\n        if (s < n && yigin[s] < yigin[k]) k = s;\n        if (g < n && yigin[g] < yigin[k]) k = g;\n        if (k == i) break;\n        degistir(&yigin[i], &yigin[k]);\n        i = k;\n    }\n    return min;\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Insère 9, 4, 7, 1, 8, 2 dans un tas min vide. Donne le tableau après chaque insertion, puis après un appel à extraireMin.',
          en: 'Insert 9, 4, 7, 1, 8, 2 into an empty min-heap. Give the array after each insertion, then after one call to extractMin.',
          tr: 'Boş bir min yığına 9, 4, 7, 1, 8, 2 ekle. Her eklemeden sonra diziyi, sonra bir enKucuguCikar çağrısından sonra diziyi ver.',
        },
        solution: {
          fr: '9 → [9]. 4 remonte → [4, 9]. 7 → [4, 9, 7]. 1 en case 3 : parent 9, échange ; puis parent 4, échange → [1, 4, 7, 9]. 8 en case 4, parent 4 plus petit → [1, 4, 7, 9, 8]. 2 en case 5, parent 7, échange ; parent 1 plus petit → [1, 4, 2, 9, 8, 7]. extraireMin renvoie 1 : 7 passe à la racine [7, 4, 2, 9, 8], il descend vers le plus petit enfant 2 → [2, 4, 7, 9, 8].',
          en: '9 → [9]. 4 sifts up → [4, 9]. 7 → [4, 9, 7]. 1 in cell 3: parent 9, swap; then parent 4, swap → [1, 4, 7, 9]. 8 in cell 4, parent 4 is smaller → [1, 4, 7, 9, 8]. 2 in cell 5, parent 7, swap; parent 1 is smaller → [1, 4, 2, 9, 8, 7]. extractMin returns 1: 7 moves to the root [7, 4, 2, 9, 8], then sifts down toward the smaller child 2 → [2, 4, 7, 9, 8].',
          tr: '9 → [9]. 4 yukarı çıkar → [4, 9]. 7 → [4, 9, 7]. 1, 3. hücrede: ebeveyn 9, değiş; sonra ebeveyn 4, değiş → [1, 4, 7, 9]. 8, 4. hücrede, ebeveyn 4 daha küçük → [1, 4, 7, 9, 8]. 2, 5. hücrede, ebeveyn 7, değiş; ebeveyn 1 daha küçük → [1, 4, 2, 9, 8, 7]. enKucuguCikar 1 döndürür: 7 köke geçer [7, 4, 2, 9, 8], küçük çocuk 2’ye doğru iner → [2, 4, 7, 9, 8].',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans un tas rangé dans un tableau, où sont les enfants de la case 3 ?',
        en: 'In a heap stored in an array, where are the children of cell 3?',
        tr: 'Dizide saklanan bir yığında 3. hücrenin çocukları nerededir?',
      },
      options: { fr: ['Cases 6 et 7', 'Cases 7 et 8', 'Cases 4 et 5'], en: ['Cells 6 and 7', 'Cells 7 and 8', 'Cells 4 and 5'], tr: ['6. ve 7. hücreler', '7. ve 8. hücreler', '4. ve 5. hücreler'] },
      answerIndex: 1,
      explanation: {
        fr: 'Avec des indices à partir de 0 : 2 × 3 + 1 = 7 et 2 × 3 + 2 = 8.',
        en: 'With indexes starting at 0: 2 × 3 + 1 = 7 and 2 × 3 + 2 = 8.',
        tr: '0’dan başlayan indislerle: 2 × 3 + 1 = 7 ve 2 × 3 + 2 = 8.',
      },
    },
  },
  {
    id: 'ds-w11-hashing',
    week: 11,
    title: { fr: 'Tables de hachage', en: 'Hash tables', tr: 'Özet (hash) tabloları' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une table de hachage range chaque clé dans une case calculée par une fonction de hachage, par exemple h(k) = k mod m. Recherche, insertion et suppression coûtent O(1) en moyenne. Deux clés peuvent tomber dans la même case : c’est une collision. Deux solutions : le chaînage (une liste par case) ou l’adressage ouvert (sondage linéaire : on essaie la case suivante).',
          en: 'A hash table stores each key in a cell computed by a hash function, for example h(k) = k mod m. Search, insert and delete cost O(1) on average. Two keys can land in the same cell: a collision. Two solutions: chaining (one list per cell) or open addressing (linear probing: try the next cell).',
          tr: 'Özet tablosu her anahtarı bir özet fonksiyonunun hesapladığı hücreye koyar, örneğin h(k) = k mod m. Arama, ekleme ve silme ortalama O(1) tutar. İki anahtar aynı hücreye düşebilir: buna çakışma denir. İki çözüm: zincirleme (her hücre için bir liste) veya açık adresleme (doğrusal sınama: sonraki hücre denenir).',
        },
      },
      {
        type: 'code',
        code: {
          fr: '#define M 7\nint table[M];                      // -1 = case vide\n\nvoid inserer(int k) {              // sondage linéaire\n    int i = k % M;\n    while (table[i] != -1) i = (i + 1) % M;\n    table[i] = k;\n}\n\nFacteur de charge α = n / m (clés / cases)\nα proche de 1 → beaucoup de collisions → on agrandit et on re-hache\nm premier → les clés se répartissent mieux',
          en: '#define M 7\nint table[M];                      // -1 = empty cell\n\nvoid insert(int k) {               // linear probing\n    int i = k % M;\n    while (table[i] != -1) i = (i + 1) % M;\n    table[i] = k;\n}\n\nLoad factor α = n / m (keys / cells)\nα close to 1 → many collisions → grow the table and rehash\nm prime → keys spread out better',
          tr: '#define M 7\nint tablo[M];                      // -1 = boş hücre\n\nvoid ekle(int k) {                 // doğrusal sınama\n    int i = k % M;\n    while (tablo[i] != -1) i = (i + 1) % M;\n    tablo[i] = k;\n}\n\nDoluluk oranı α = n / m (anahtar / hücre)\nα 1’e yakın → çok çakışma → tablo büyütülür ve yeniden özetlenir\nm asal → anahtarlar daha iyi dağılır',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Table de taille 7, h(k) = k mod 7, sondage linéaire. Insère 10, 22, 31, 4, 15. Donne la case de chaque clé, le nombre de collisions et la table finale. Quel est le facteur de charge ?',
          en: 'Table of size 7, h(k) = k mod 7, linear probing. Insert 10, 22, 31, 4, 15. Give each key’s cell, the number of collisions and the final table. What is the load factor?',
          tr: '7 boyutlu tablo, h(k) = k mod 7, doğrusal sınama. 10, 22, 31, 4, 15 ekle. Her anahtarın hücresini, çakışma sayısını ve son tabloyu ver. Doluluk oranı nedir?',
        },
        solution: {
          fr: '10 mod 7 = 3 → case 3. 22 mod 7 = 1 → case 1. 31 mod 7 = 3, occupée → case 4. 4 mod 7 = 4, occupée → case 5. 15 mod 7 = 1, occupée → case 2. Trois collisions. Table : [_, 22, 15, 10, 31, 4, _]. α = 5 / 7 ≈ 0,71. On voit les clés s’agglutiner (cases 1 à 5) : c’est le regroupement primaire du sondage linéaire.',
          en: '10 mod 7 = 3 → cell 3. 22 mod 7 = 1 → cell 1. 31 mod 7 = 3, taken → cell 4. 4 mod 7 = 4, taken → cell 5. 15 mod 7 = 1, taken → cell 2. Three collisions. Table: [_, 22, 15, 10, 31, 4, _]. α = 5 / 7 ≈ 0.71. The keys bunch together (cells 1 to 5): that is the primary clustering of linear probing.',
          tr: '10 mod 7 = 3 → 3. hücre. 22 mod 7 = 1 → 1. hücre. 31 mod 7 = 3, dolu → 4. hücre. 4 mod 7 = 4, dolu → 5. hücre. 15 mod 7 = 1, dolu → 2. hücre. Üç çakışma. Tablo: [_, 22, 15, 10, 31, 4, _]. α = 5 / 7 ≈ 0,71. Anahtarlar kümeleniyor (1’den 5’e hücreler): bu doğrusal sınamanın birincil kümelenmesidir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est la complexité moyenne d’une recherche dans une table de hachage bien dimensionnée ?',
        en: 'What is the average complexity of a search in a well-sized hash table?',
        tr: 'İyi boyutlandırılmış bir özet tablosunda aramanın ortalama karmaşıklığı nedir?',
      },
      options: { fr: ['O(1)', 'O(log n)', 'O(n)'], en: ['O(1)', 'O(log n)', 'O(n)'], tr: ['O(1)', 'O(log n)', 'O(n)'] },
      answerIndex: 0,
      explanation: {
        fr: 'La fonction de hachage donne directement la case ; avec peu de collisions, on n’examine que quelques cases. Le pire cas (tout en collision) reste O(n).',
        en: 'The hash function gives the cell directly; with few collisions, only a few cells are checked. The worst case (everything colliding) is still O(n).',
        tr: 'Özet fonksiyonu hücreyi doğrudan verir; az çakışmayla yalnızca birkaç hücreye bakılır. En kötü durum (her şey çakışırsa) yine O(n)’dir.',
      },
    },
  },
  {
    id: 'ds-w12-graphs',
    week: 12,
    title: { fr: 'Les graphes et leur représentation', en: 'Graphs and their representation', tr: 'Graflar ve gösterimleri' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un graphe est un ensemble de sommets reliés par des arêtes : réseau routier, amis d’un réseau social, pages web. Il peut être orienté ou non, pondéré ou non. Deux représentations : la matrice d’adjacence (n × n cases, test d’une arête en O(1), mais O(n²) mémoire) et les listes d’adjacence (une liste de voisins par sommet, O(n + m) mémoire, idéale pour les graphes peu denses).',
          en: 'A graph is a set of vertices linked by edges: road networks, friends in a social network, web pages. It can be directed or not, weighted or not. Two representations: the adjacency matrix (n × n cells, O(1) edge test, but O(n²) memory) and adjacency lists (one neighbor list per vertex, O(n + m) memory, ideal for sparse graphs).',
          tr: 'Graf, kenarlarla bağlanan düğümler kümesidir: yol ağları, bir sosyal ağdaki arkadaşlar, web sayfaları. Yönlü veya yönsüz, ağırlıklı veya ağırlıksız olabilir. İki gösterim: komşuluk matrisi (n × n hücre, kenar sınaması O(1), ama O(n²) bellek) ve komşuluk listeleri (her düğüm için bir komşu listesi, O(n + m) bellek, seyrek graflar için ideal).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Graphe non orienté, 6 sommets, 7 arêtes :\nA-B  A-C  B-D  C-D  C-E  D-F  E-F\n\nMatrice d’adjacence (1 = arête)      Listes d’adjacence\n    A B C D E F                       A : B, C\nA   0 1 1 0 0 0                       B : A, D\nB   1 0 0 1 0 0                       C : A, D, E\nC   1 0 0 1 1 0                       D : B, C, F\nD   0 1 1 0 0 1                       E : C, F\nE   0 0 1 0 0 1                       F : D, E\nF   0 0 0 1 1 0\n\nint adj[6][6];   adj[i][j] = adj[j][i] = 1;   // non orienté : symétrique',
          en: 'Undirected graph, 6 vertices, 7 edges:\nA-B  A-C  B-D  C-D  C-E  D-F  E-F\n\nAdjacency matrix (1 = edge)          Adjacency lists\n    A B C D E F                       A: B, C\nA   0 1 1 0 0 0                       B: A, D\nB   1 0 0 1 0 0                       C: A, D, E\nC   1 0 0 1 1 0                       D: B, C, F\nD   0 1 1 0 0 1                       E: C, F\nE   0 0 1 0 0 1                       F: D, E\nF   0 0 0 1 1 0\n\nint adj[6][6];   adj[i][j] = adj[j][i] = 1;   // undirected: symmetric',
          tr: 'Yönsüz graf, 6 düğüm, 7 kenar:\nA-B  A-C  B-D  C-D  C-E  D-F  E-F\n\nKomşuluk matrisi (1 = kenar)         Komşuluk listeleri\n    A B C D E F                       A: B, C\nA   0 1 1 0 0 0                       B: A, D\nB   1 0 0 1 0 0                       C: A, D, E\nC   1 0 0 1 1 0                       D: B, C, F\nD   0 1 1 0 0 1                       E: C, F\nE   0 0 1 0 0 1                       F: D, E\nF   0 0 0 1 1 0\n\nint adj[6][6];   adj[i][j] = adj[j][i] = 1;   // yönsüz: simetrik',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pour ce graphe, donne le degré de chaque sommet et leur somme. Quel lien y a-t-il avec le nombre d’arêtes ? Combien de cases la matrice utilise-t-elle, et combien d’entrées au total dans les listes ?',
          en: 'For this graph, give each vertex’s degree and their sum. How does it relate to the number of edges? How many cells does the matrix use, and how many entries in total in the lists?',
          tr: 'Bu graf için her düğümün derecesini ve toplamlarını ver. Kenar sayısıyla ilişkisi nedir? Matris kaç hücre kullanır, listelerde toplam kaç kayıt vardır?',
        },
        solution: {
          fr: 'Degrés : A 2, B 2, C 3, D 3, E 2, F 2. Somme : 14 = 2 × 7 arêtes, car chaque arête compte pour ses deux extrémités (lemme des poignées de main). La matrice a 6 × 6 = 36 cases, dont seulement 14 valent 1 ; les listes contiennent 14 entrées. Pour un grand graphe peu dense, les listes économisent beaucoup de mémoire.',
          en: 'Degrees: A 2, B 2, C 3, D 3, E 2, F 2. Sum: 14 = 2 × 7 edges, since each edge counts for both its ends (handshaking lemma). The matrix has 6 × 6 = 36 cells, only 14 of them equal to 1; the lists hold 14 entries. For a large sparse graph, lists save a lot of memory.',
          tr: 'Dereceler: A 2, B 2, C 3, D 3, E 2, F 2. Toplam: 14 = 2 × 7 kenar, çünkü her kenar iki ucu için sayılır (el sıkışma önermesi). Matris 6 × 6 = 36 hücredir, yalnızca 14’ü 1’dir; listeler 14 kayıt tutar. Büyük ve seyrek bir grafta listeler çok bellek kazandırır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle représentation permet de savoir en O(1) si deux sommets sont reliés ?',
        en: 'Which representation tells in O(1) whether two vertices are linked?',
        tr: 'Hangi gösterim iki düğümün bağlı olup olmadığını O(1)’de söyler?',
      },
      options: {
        fr: ['La matrice d’adjacence', 'Les listes d’adjacence', 'Aucune des deux'],
        en: ['The adjacency matrix', 'Adjacency lists', 'Neither'],
        tr: ['Komşuluk matrisi', 'Komşuluk listeleri', 'Hiçbiri'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Il suffit de lire adj[i][j]. Avec les listes, il faut parcourir les voisins de i, ce qui coûte O(degré).',
        en: 'Just read adj[i][j]. With lists, i’s neighbors must be scanned, which costs O(degree).',
        tr: 'adj[i][j] okumak yeterlidir. Listelerde i’nin komşuları taranmalıdır; bu O(derece) tutar.',
      },
    },
  },
  {
    id: 'ds-w13-graph-traversal',
    week: 13,
    title: {
      fr: 'Parcours en largeur (BFS) et en profondeur (DFS)',
      en: 'Breadth-first (BFS) and depth-first (DFS) search',
      tr: 'Genişlik öncelikli (BFS) ve derinlik öncelikli (DFS) arama',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le parcours en largeur (BFS) utilise une file : il visite les sommets par niveaux, d’abord les voisins, puis les voisins des voisins. Il donne le plus court chemin en nombre d’arêtes. Le parcours en profondeur (DFS) utilise une pile ou la récursivité : il va le plus loin possible avant de revenir en arrière. Il sert à détecter des cycles et à trouver les composantes. Les deux coûtent O(n + m) avec des listes d’adjacence.',
          en: 'Breadth-first search (BFS) uses a queue: it visits vertices level by level, neighbors first, then neighbors of neighbors. It gives the shortest path in number of edges. Depth-first search (DFS) uses a stack or recursion: it goes as far as possible before backtracking. It is used to detect cycles and find components. Both cost O(n + m) with adjacency lists.',
          tr: 'Genişlik öncelikli arama (BFS) bir kuyruk kullanır: düğümleri seviye seviye ziyaret eder, önce komşular, sonra komşuların komşuları. Kenar sayısı bakımından en kısa yolu verir. Derinlik öncelikli arama (DFS) yığın veya özyineleme kullanır: geri dönmeden önce gidebildiği kadar ilerler. Döngüleri bulmak ve bileşenleri belirlemek için kullanılır. İkisi de komşuluk listeleriyle O(n + m) tutar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'void bfs(int s) {\n    int file[N], debut = 0, fin = 0;\n    vu[s] = 1; file[fin++] = s;\n    while (debut < fin) {\n        int u = file[debut++];\n        printf("%c ", \'A\' + u);\n        for (int v = 0; v < N; v++)            // voisins dans l’ordre\n            if (adj[u][v] && !vu[v]) { vu[v] = 1; file[fin++] = v; }\n    }\n}\n\nvoid dfs(int u) {\n    vu[u] = 1;\n    printf("%c ", \'A\' + u);\n    for (int v = 0; v < N; v++)\n        if (adj[u][v] && !vu[v]) dfs(v);      // on plonge tout de suite\n}',
          en: 'void bfs(int s) {\n    int queue[N], front = 0, rear = 0;\n    seen[s] = 1; queue[rear++] = s;\n    while (front < rear) {\n        int u = queue[front++];\n        printf("%c ", \'A\' + u);\n        for (int v = 0; v < N; v++)            // neighbors in order\n            if (adj[u][v] && !seen[v]) { seen[v] = 1; queue[rear++] = v; }\n    }\n}\n\nvoid dfs(int u) {\n    seen[u] = 1;\n    printf("%c ", \'A\' + u);\n    for (int v = 0; v < N; v++)\n        if (adj[u][v] && !seen[v]) dfs(v);    // dive in right away\n}',
          tr: 'void bfs(int s) {\n    int kuyruk[N], bas = 0, son = 0;\n    goruldu[s] = 1; kuyruk[son++] = s;\n    while (bas < son) {\n        int u = kuyruk[bas++];\n        printf("%c ", \'A\' + u);\n        for (int v = 0; v < N; v++)            // komşular sırayla\n            if (adj[u][v] && !goruldu[v]) { goruldu[v] = 1; kuyruk[son++] = v; }\n    }\n}\n\nvoid dfs(int u) {\n    goruldu[u] = 1;\n    printf("%c ", \'A\' + u);\n    for (int v = 0; v < N; v++)\n        if (adj[u][v] && !goruldu[v]) dfs(v); // hemen derine dal\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec le graphe de la semaine 12 (A-B, A-C, B-D, C-D, C-E, D-F, E-F), voisins pris dans l’ordre alphabétique, donne l’ordre de visite du BFS et du DFS depuis A. Quelle est la distance (en arêtes) de A à F ?',
          en: 'With the week 12 graph (A-B, A-C, B-D, C-D, C-E, D-F, E-F), neighbors taken in alphabetical order, give the BFS and DFS visit order from A. What is the distance (in edges) from A to F?',
          tr: '12. haftanın grafıyla (A-B, A-C, B-D, C-D, C-E, D-F, E-F), komşular alfabetik sırayla alınarak A’dan BFS ve DFS ziyaret sırasını ver. A’dan F’ye uzaklık (kenar sayısı) nedir?',
        },
        solution: {
          fr: 'BFS : A ; ses voisins B, C ; depuis B : D ; depuis C : E (D déjà vu) ; depuis D : F. Ordre A B C D E F. Niveaux : A 0, B et C 1, D et E 2, F 3 : la distance A–F est 3. DFS : A → B → D (premier voisin non vu de D : C) → C → E (seul voisin non vu de C) → F. Ordre A B D C E F.',
          en: 'BFS: A; its neighbors B, C; from B: D; from C: E (D already seen); from D: F. Order A B C D E F. Levels: A 0, B and C 1, D and E 2, F 3: the A–F distance is 3. DFS: A → B → D (D’s first unseen neighbor: C) → C → E (C’s only unseen neighbor) → F. Order A B D C E F.',
          tr: 'BFS: A; komşuları B, C; B’den: D; C’den: E (D zaten görüldü); D’den: F. Sıra A B C D E F. Seviyeler: A 0, B ve C 1, D ve E 2, F 3: A–F uzaklığı 3’tür. DFS: A → B → D (D’nin görülmemiş ilk komşusu: C) → C → E (C’nin görülmemiş tek komşusu) → F. Sıra A B D C E F.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle structure le parcours en largeur (BFS) utilise-t-il ?',
        en: 'Which structure does breadth-first search (BFS) use?',
        tr: 'Genişlik öncelikli arama (BFS) hangi yapıyı kullanır?',
      },
      options: { fr: ['Une pile', 'Une file', 'Un tas'], en: ['A stack', 'A queue', 'A heap'], tr: ['Yığın', 'Kuyruk', 'Yığın ağacı (heap)'] },
      answerIndex: 1,
      explanation: {
        fr: 'La file FIFO garantit qu’on traite tous les sommets d’un niveau avant ceux du niveau suivant. Le DFS, lui, utilise une pile (ou la pile des appels récursifs).',
        en: 'The FIFO queue ensures all vertices of one level are handled before the next level. DFS uses a stack (or the recursive call stack).',
        tr: 'FIFO kuyruk, bir seviyedeki tüm düğümlerin sonraki seviyeden önce işlenmesini sağlar. DFS ise yığın (veya özyinelemeli çağrı yığını) kullanır.',
      },
    },
  },
  {
    id: 'ds-w14-sorting',
    week: 14,
    title: {
      fr: 'Tri fusion, tri rapide et révision du final',
      en: 'Merge sort, quick sort and final review',
      tr: 'Birleştirmeli sıralama, hızlı sıralama ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le tri fusion (merge sort) coupe le tableau en deux, trie chaque moitié récursivement puis fusionne les deux moitiés triées : toujours O(n log n), mais il utilise un tableau auxiliaire. Le tri rapide (quick sort) choisit un pivot, place les plus petits à gauche et les plus grands à droite (partition), puis trie chaque côté : O(n log n) en moyenne, O(n²) si le pivot est toujours mal choisi, et il trie sur place.',
          en: 'Merge sort splits the array in two, sorts each half recursively, then merges the two sorted halves: always O(n log n), but it uses an auxiliary array. Quick sort picks a pivot, puts smaller elements on the left and larger ones on the right (partition), then sorts each side: O(n log n) on average, O(n²) if the pivot is always badly chosen, and it sorts in place.',
          tr: 'Birleştirmeli sıralama (merge sort) diziyi ikiye böler, her yarıyı özyinelemeyle sıralar, sonra sıralı iki yarıyı birleştirir: her zaman O(n log n), ama yardımcı bir dizi kullanır. Hızlı sıralama (quick sort) bir pivot seçer, küçükleri sola, büyükleri sağa yerleştirir (bölümleme), sonra her tarafı sıralar: ortalama O(n log n), pivot hep kötü seçilirse O(n²); yerinde sıralar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'int partition(int t[], int bas, int haut) {   // pivot = dernier élément\n    int pivot = t[haut], i = bas - 1;\n    for (int j = bas; j < haut; j++)\n        if (t[j] <= pivot) echanger(&t[++i], &t[j]);\n    echanger(&t[i + 1], &t[haut]);\n    return i + 1;                               // position finale du pivot\n}\n\nvoid triRapide(int t[], int bas, int haut) {\n    if (bas < haut) {\n        int p = partition(t, bas, haut);\n        triRapide(t, bas, p - 1);\n        triRapide(t, p + 1, haut);\n    }\n}',
          en: 'int partition(int t[], int low, int high) {   // pivot = last element\n    int pivot = t[high], i = low - 1;\n    for (int j = low; j < high; j++)\n        if (t[j] <= pivot) swap(&t[++i], &t[j]);\n    swap(&t[i + 1], &t[high]);\n    return i + 1;                               // pivot’s final position\n}\n\nvoid quickSort(int t[], int low, int high) {\n    if (low < high) {\n        int p = partition(t, low, high);\n        quickSort(t, low, p - 1);\n        quickSort(t, p + 1, high);\n    }\n}',
          tr: 'int bolumle(int t[], int alt, int ust) {      // pivot = son eleman\n    int pivot = t[ust], i = alt - 1;\n    for (int j = alt; j < ust; j++)\n        if (t[j] <= pivot) degistir(&t[++i], &t[j]);\n    degistir(&t[i + 1], &t[ust]);\n    return i + 1;                               // pivotun son konumu\n}\n\nvoid hizliSirala(int t[], int alt, int ust) {\n    if (alt < ust) {\n        int p = bolumle(t, alt, ust);\n        hizliSirala(t, alt, p - 1);\n        hizliSirala(t, p + 1, ust);\n    }\n}',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Arbres : vocabulaire, hauteur, parcours préfixe / infixe / postfixe\n✔ ABR : insertion, recherche, suppression (successeur), cas dégénéré\n✔ Tas min : tableau, 2i + 1 / 2i + 2, remonter / descendre, O(log n)\n✔ Hachage : k mod m, collisions, chaînage, sondage linéaire, α\n✔ Graphes : matrice et listes d’adjacence, degrés\n✔ BFS (file, plus court chemin) et DFS (pile / récursivité)\n✔ Tri fusion et tri rapide : partition, O(n log n), pire cas',
          en: '✔ Trees: vocabulary, height, preorder / inorder / postorder\n✔ BST: insert, search, delete (successor), degenerate case\n✔ Min-heap: array, 2i + 1 / 2i + 2, sift up / down, O(log n)\n✔ Hashing: k mod m, collisions, chaining, linear probing, α\n✔ Graphs: adjacency matrix and lists, degrees\n✔ BFS (queue, shortest path) and DFS (stack / recursion)\n✔ Merge sort and quick sort: partition, O(n log n), worst case',
          tr: '✔ Ağaçlar: terimler, yükseklik, önce / ortada / sonda kök dolaşma\n✔ BST: ekleme, arama, silme (ardıl), dejenere durum\n✔ Min yığın: dizi, 2i + 1 / 2i + 2, yukarı / aşağı taşıma, O(log n)\n✔ Özetleme: k mod m, çakışmalar, zincirleme, doğrusal sınama, α\n✔ Graflar: komşuluk matrisi ve listeleri, dereceler\n✔ BFS (kuyruk, en kısa yol) ve DFS (yığın / özyineleme)\n✔ Birleştirmeli ve hızlı sıralama: bölümleme, O(n log n), en kötü durum',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Applique une partition (pivot = dernier) à [7, 2, 9, 4, 3, 8, 5]. Quel est le tableau obtenu et la position du pivot ? (2) Tri fusion de [38, 27, 43, 3, 9, 82, 10] : quelles sont les deux moitiés triées juste avant la dernière fusion ?',
          en: '(1) Apply one partition (pivot = last) to [7, 2, 9, 4, 3, 8, 5]. What array results and where is the pivot? (2) Merge sort of [38, 27, 43, 3, 9, 82, 10]: what are the two sorted halves just before the final merge?',
          tr: '(1) [7, 2, 9, 4, 3, 8, 5] dizisine bir bölümleme uygula (pivot = son). Hangi dizi elde edilir ve pivot nerededir? (2) [38, 27, 43, 3, 9, 82, 10] için birleştirmeli sıralama: son birleştirmeden hemen önceki iki sıralı yarı nedir?',
        },
        solution: {
          fr: '(1) Pivot 5. j parcourt 7 (non), 2 (échange avec la case 0) → [2, 7, 9, 4, 3, 8, 5] ; 9 (non) ; 4 (échange avec la case 1) → [2, 4, 9, 7, 3, 8, 5] ; 3 (échange avec la case 2) → [2, 4, 3, 7, 9, 8, 5] ; 8 (non). Puis le pivot va en case 3 : [2, 4, 3, 5, 9, 8, 7]. Pivot à l’indice 3, plus petits à gauche, plus grands à droite. (2) Coupe au milieu (indice 3) : [38, 27, 43, 3] devient [3, 27, 38, 43] et [9, 82, 10] devient [9, 10, 82]. La fusion donne [3, 9, 10, 27, 38, 43, 82].',
          en: '(1) Pivot 5. j goes over 7 (no), 2 (swap with cell 0) → [2, 7, 9, 4, 3, 8, 5]; 9 (no); 4 (swap with cell 1) → [2, 4, 9, 7, 3, 8, 5]; 3 (swap with cell 2) → [2, 4, 3, 7, 9, 8, 5]; 8 (no). Then the pivot goes to cell 3: [2, 4, 3, 5, 9, 8, 7]. Pivot at index 3, smaller on the left, larger on the right. (2) Split in the middle (index 3): [38, 27, 43, 3] becomes [3, 27, 38, 43] and [9, 82, 10] becomes [9, 10, 82]. Merging gives [3, 9, 10, 27, 38, 43, 82].',
          tr: '(1) Pivot 5. j şunlardan geçer: 7 (hayır), 2 (0. hücreyle değiş) → [2, 7, 9, 4, 3, 8, 5]; 9 (hayır); 4 (1. hücreyle değiş) → [2, 4, 9, 7, 3, 8, 5]; 3 (2. hücreyle değiş) → [2, 4, 3, 7, 9, 8, 5]; 8 (hayır). Sonra pivot 3. hücreye gider: [2, 4, 3, 5, 9, 8, 7]. Pivot 3. indiste, küçükler solda, büyükler sağda. (2) Ortadan bölme (3. indis): [38, 27, 43, 3], [3, 27, 38, 43] olur ve [9, 82, 10], [9, 10, 82] olur. Birleştirme [3, 9, 10, 27, 38, 43, 82] verir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans quel cas le tri rapide avec pivot = dernier élément est-il en O(n²) ?',
        en: 'When is quick sort with pivot = last element O(n²)?',
        tr: 'Pivotu son eleman olan hızlı sıralama ne zaman O(n²) olur?',
      },
      options: {
        fr: ['Tableau déjà trié', 'Tableau aléatoire', 'Tableau de taille paire'],
        en: ['An already sorted array', 'A random array', 'An array of even size'],
        tr: ['Zaten sıralı bir dizi', 'Rastgele bir dizi', 'Çift boyutlu bir dizi'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Si le tableau est trié, le pivot est toujours le maximum : chaque partition ne retire qu’un élément, d’où n + (n − 1) + … ≈ n²/2 comparaisons. Choisir un pivot au hasard ou la médiane de trois évite ce cas.',
        en: 'If the array is sorted, the pivot is always the maximum: each partition removes only one element, giving n + (n − 1) + … ≈ n²/2 comparisons. A random pivot or median of three avoids this.',
        tr: 'Dizi sıralıysa pivot hep en büyüktür: her bölümleme yalnızca bir eleman ayırır, böylece n + (n − 1) + … ≈ n²/2 karşılaştırma olur. Rastgele pivot veya üçün ortancası bunu önler.',
      },
    },
  },
];
