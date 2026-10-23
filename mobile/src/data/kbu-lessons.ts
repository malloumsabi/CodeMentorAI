/**
 * Lessons for the Karabük University (KBU) computer engineering courses,
 * following the department curriculum. Same shape as `lessons.ts`.
 */

import type { LessonSource } from '@/data/lessons';

export const kbuLessonsByCourse: Record<string, LessonSource[]> = {
  'kbu-blm111': [
    {
      id: 'c-first-program',
      title: { fr: 'Premier programme en C', en: 'Your first C program', tr: 'İlk C programı' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Tout programme C commence dans la fonction main. printf affiche du texte à l’écran.',
            en: 'Every C program starts in the main function. printf displays text on the screen.',
            tr: 'Her C programı main fonksiyonunda başlar. printf ekrana metin yazdırır.',
          },
        },
        {
          type: 'code',
          code: {
            fr: '#include <stdio.h>\n\nint main(void) {\n    printf("Bonjour !\\n");\n    return 0;\n}',
            en: '#include <stdio.h>\n\nint main(void) {\n    printf("Hello!\\n");\n    return 0;\n}',
            tr: '#include <stdio.h>\n\nint main(void) {\n    printf("Merhaba!\\n");\n    return 0;\n}',
          },
        },
        {
          type: 'text',
          text: {
            fr: '\\n passe à la ligne. Chaque instruction se termine par un point-virgule ; et return 0 indique que tout s’est bien passé.',
            en: '\\n moves to a new line. Every statement ends with a semicolon ; and return 0 means everything went well.',
            tr: '\\n yeni satıra geçer. Her komut noktalı virgül ; ile biter ve return 0 her şeyin yolunda gittiğini gösterir.',
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
      title: { fr: 'Variables et types', en: 'Variables and types', tr: 'Değişkenler ve veri tipleri' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'En C, on doit donner le type de chaque variable : int pour un entier, float pour un nombre à virgule, char pour un caractère.',
            en: 'In C, you must give the type of every variable: int for a whole number, float for a decimal number, char for a character.',
            tr: 'C’de her değişkenin tipini belirtmek gerekir: tam sayı için int, ondalıklı sayı için float, karakter için char.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'int age = 19;\nfloat moyenne = 14.5;\nchar mention = \'B\';\nprintf("%d %.1f %c\\n", age, moyenne, mention);  // 19 14.5 B',
            en: 'int age = 19;\nfloat average = 14.5;\nchar grade = \'B\';\nprintf("%d %.1f %c\\n", age, average, grade);  // 19 14.5 B',
            tr: 'int yas = 19;\nfloat ortalama = 14.5;\nchar harfNotu = \'B\';\nprintf("%d %.1f %c\\n", yas, ortalama, harfNotu);  // 19 14.5 B',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Dans printf, %d affiche un int, %f un float (%.1f avec un seul chiffre après la virgule) et %c un char.',
            en: 'In printf, %d prints an int, %f a float (%.1f with one digit after the point) and %c a char.',
            tr: 'printf içinde %d bir int, %f bir float (%.1f virgülden sonra tek basamakla) ve %c bir char yazdırır.',
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
      id: 'c-loops',
      title: { fr: 'La boucle for', en: 'The for loop', tr: 'for döngüsü' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Une boucle for répète un bloc de code. Elle a trois parties : le départ, la condition pour continuer, et le pas.',
            en: 'A for loop repeats a block of code. It has three parts: the start, the condition to keep going, and the step.',
            tr: 'for döngüsü bir kod bloğunu tekrarlar. Üç bölümü vardır: başlangıç, devam etme koşulu ve artış adımı.',
          },
        },
        {
          type: 'code',
          code: 'for (int i = 1; i <= 3; i++) {\n    printf("%d\\n", i);\n}\n// 1\n// 2\n// 3',
        },
        {
          type: 'text',
          text: {
            fr: 'i commence à 1, la boucle continue tant que i <= 3, et i++ ajoute 1 à i après chaque tour.',
            en: 'i starts at 1, the loop goes on while i <= 3, and i++ adds 1 to i after each round.',
            tr: 'i 1’den başlar, döngü i <= 3 olduğu sürece devam eder ve i++ her turdan sonra i’ye 1 ekler.',
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
  ],
  'kbu-blm112': [
    {
      id: 'c-pointers',
      title: { fr: 'Les pointeurs', en: 'Pointers', tr: 'İşaretçiler' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Chaque variable est rangée à une adresse dans la mémoire. Un pointeur est une variable qui contient une adresse.',
            en: 'Every variable is stored at an address in memory. A pointer is a variable that holds an address.',
            tr: 'Her değişken bellekte bir adreste saklanır. İşaretçi, bir adres tutan değişkendir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'int x = 10;\nint *p = &x;   // p contient l’adresse de x\n*p = 25;       // on modifie x à travers p\nprintf("%d\\n", x);  // 25',
            en: 'int x = 10;\nint *p = &x;   // p holds the address of x\n*p = 25;       // we change x through p\nprintf("%d\\n", x);  // 25',
            tr: 'int x = 10;\nint *p = &x;   // p, x’in adresini tutar\n*p = 25;       // x’i p üzerinden değiştiriyoruz\nprintf("%d\\n", x);  // 25',
          },
        },
        {
          type: 'text',
          text: {
            fr: '&x donne l’adresse de x. *p donne accès à la valeur rangée à cette adresse : modifier *p, c’est modifier x.',
            en: '&x gives the address of x. *p gives access to the value stored at that address: changing *p changes x.',
            tr: '&x, x’in adresini verir. *p ise o adresteki değere erişir: *p’yi değiştirmek x’i değiştirmektir.',
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
      title: {
        fr: 'Pointeurs et fonctions',
        en: 'Pointers and functions',
        tr: 'İşaretçiler ve fonksiyonlar',
      },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'En C, une fonction reçoit une copie de ses paramètres. Pour qu’elle modifie une variable, on lui passe son adresse.',
            en: 'In C, a function receives a copy of its parameters. For it to change a variable, you pass it the variable’s address.',
            tr: 'C’de bir fonksiyon parametrelerinin bir kopyasını alır. Bir değişkeni değiştirebilmesi için ona değişkenin adresini veririz.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'void echanger(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main(void) {\n    int x = 1, y = 2;\n    echanger(&x, &y);\n    printf("%d %d\\n", x, y);  // 2 1\n    return 0;\n}',
            en: 'void swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main(void) {\n    int x = 1, y = 2;\n    swap(&x, &y);\n    printf("%d %d\\n", x, y);  // 2 1\n    return 0;\n}',
            tr: 'void degistir(int *a, int *b) {\n    int gecici = *a;\n    *a = *b;\n    *b = gecici;\n}\n\nint main(void) {\n    int x = 1, y = 2;\n    degistir(&x, &y);\n    printf("%d %d\\n", x, y);  // 2 1\n    return 0;\n}',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'C’est aussi pour cela que scanf("%d", &n) demande &n : scanf doit savoir où ranger la valeur lue.',
            en: 'That is also why scanf("%d", &n) needs &n: scanf must know where to store the value it reads.',
            tr: 'scanf("%d", &n) ifadesinin &n istemesinin nedeni de budur: scanf okuduğu değeri nereye yazacağını bilmelidir.',
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
        options: {
          fr: ['5', '6', 'Une erreur'],
          en: ['5', '6', 'An error'],
          tr: ['5', '6', 'Bir hata'],
        },
        answerIndex: 0,
        explanation: {
          fr: 'La fonction reçoit une copie de x : elle modifie sa copie n, pas x. Pour changer x, il faudrait passer &x et un paramètre int *n.',
          en: 'The function receives a copy of x: it changes its copy n, not x. To change x, you would pass &x and use an int *n parameter.',
          tr: 'Fonksiyon x’in bir kopyasını alır: x’i değil, kendi kopyası olan n’yi değiştirir. x’i değiştirmek için &x verilmeli ve int *n parametresi kullanılmalıdır.',
        },
      },
    },
    {
      id: 'c-files',
      title: { fr: 'Les fichiers', en: 'Files', tr: 'Dosya işlemleri' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'fopen ouvre un fichier et renvoie un pointeur FILE *. Si l’ouverture échoue, il renvoie NULL : il faut toujours le vérifier.',
            en: 'fopen opens a file and returns a FILE * pointer. If opening fails, it returns NULL: always check it.',
            tr: 'fopen bir dosyayı açar ve bir FILE * işaretçisi döndürür. Açılamazsa NULL döndürür: bunu her zaman kontrol etmek gerekir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'FILE *f = fopen("notes.txt", "w");\nif (f == NULL) {\n    printf("Impossible d’ouvrir le fichier\\n");\n    return 1;\n}\nfprintf(f, "Ali 15\\n");\nfclose(f);',
            en: 'FILE *f = fopen("grades.txt", "w");\nif (f == NULL) {\n    printf("Cannot open the file\\n");\n    return 1;\n}\nfprintf(f, "Ali 15\\n");\nfclose(f);',
            tr: 'FILE *f = fopen("notlar.txt", "w");\nif (f == NULL) {\n    printf("Dosya açılamadı\\n");\n    return 1;\n}\nfprintf(f, "Ali 15\\n");\nfclose(f);',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Le mode "r" lit, "w" écrit en effaçant l’ancien contenu, "a" ajoute à la fin. fprintf écrit comme printf, mais dans le fichier. N’oublie pas fclose.',
            en: 'Mode "r" reads, "w" writes and erases the old content, "a" appends to the end. fprintf writes like printf, but into the file. Don’t forget fclose.',
            tr: '"r" modu okur, "w" eski içeriği silerek yazar, "a" sona ekler. fprintf, printf gibi yazar ama dosyaya. fclose’u unutma.',
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
  ],
  'kbu-cme225': [
    {
      id: 'cpp-classes',
      title: { fr: 'Classes et objets', en: 'Classes and objects', tr: 'Sınıflar ve nesneler' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Une classe est un plan : elle décrit des données (attributs) et des actions (méthodes). Un objet est une chose construite à partir de ce plan.',
            en: 'A class is a blueprint: it describes data (attributes) and actions (methods). An object is a thing built from that blueprint.',
            tr: 'Sınıf bir plandır: verileri (özellikler) ve eylemleri (metotlar) tanımlar. Nesne ise bu plandan oluşturulan bir varlıktır.',
          },
        },
        {
          type: 'code',
          code: {
            fr: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Etudiant {\npublic:\n    string nom;\n    int age;\n\n    void sePresenter() {\n        cout << "Je suis " << nom << ", " << age << " ans" << endl;\n    }\n};\n\nint main() {\n    Etudiant e;\n    e.nom = "Awa";\n    e.age = 20;\n    e.sePresenter();  // Je suis Awa, 20 ans\n}',
            en: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int age;\n\n    void introduce() {\n        cout << "I am " << name << ", " << age << " years old" << endl;\n    }\n};\n\nint main() {\n    Student s;\n    s.name = "Awa";\n    s.age = 20;\n    s.introduce();  // I am Awa, 20 years old\n}',
            tr: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Ogrenci {\npublic:\n    string ad;\n    int yas;\n\n    void tanit() {\n        cout << "Ben " << ad << ", " << yas << " yaşındayım" << endl;\n    }\n};\n\nint main() {\n    Ogrenci o;\n    o.ad = "Ayşe";\n    o.yas = 20;\n    o.tanit();  // Ben Ayşe, 20 yaşındayım\n}',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'On accède aux attributs et aux méthodes d’un objet avec un point. cout << affiche du texte en C++, comme printf en C.',
            en: 'You reach an object’s attributes and methods with a dot. cout << prints text in C++, like printf in C.',
            tr: 'Bir nesnenin özelliklerine ve metotlarına nokta ile erişilir. cout <<, C’deki printf gibi C++’ta metin yazdırır.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Combien de classes et d’objets ce code crée-t-il ?',
          en: 'How many classes and objects does this code create?',
          tr: 'Bu kod kaç sınıf ve kaç nesne oluşturur?',
        },
        code: {
          fr: 'class Etudiant { /* ... */ };\n\nEtudiant a;\nEtudiant b;',
          en: 'class Student { /* ... */ };\n\nStudent a;\nStudent b;',
          tr: 'class Ogrenci { /* ... */ };\n\nOgrenci a;\nOgrenci b;',
        },
        options: {
          fr: ['1 classe et 1 objet', '1 classe et 2 objets', '2 classes et 2 objets'],
          en: ['1 class and 1 object', '1 class and 2 objects', '2 classes and 2 objects'],
          tr: ['1 sınıf ve 1 nesne', '1 sınıf ve 2 nesne', '2 sınıf ve 2 nesne'],
        },
        answerIndex: 1,
        explanation: {
          fr: 'Il n’y a qu’un seul plan (la classe), mais on construit deux objets différents à partir de lui : a et b.',
          en: 'There is only one blueprint (the class), but two different objects are built from it: a and b.',
          tr: 'Tek bir plan (sınıf) vardır, ama ondan iki farklı nesne oluşturulur: a ve b.',
        },
      },
    },
    {
      id: 'cpp-constructors',
      title: {
        fr: 'Constructeur et encapsulation',
        en: 'Constructors and encapsulation',
        tr: 'Yapıcı ve kapsülleme',
      },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Le constructeur porte le nom de la classe et s’exécute à la création de l’objet. Les attributs private ne sont accessibles que par les méthodes de la classe.',
            en: 'The constructor has the class’s name and runs when the object is created. private attributes can only be reached by the class’s own methods.',
            tr: 'Yapıcı (constructor) sınıfla aynı adı taşır ve nesne oluşturulurken çalışır. private özelliklere yalnızca sınıfın kendi metotları erişebilir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'class Compte {\nprivate:\n    double solde;\npublic:\n    Compte(double depart) {\n        solde = depart;\n    }\n    void deposer(double montant) {\n        if (montant > 0) solde += montant;\n    }\n    double getSolde() { return solde; }\n};\n\nCompte c(100);\nc.deposer(50);\ncout << c.getSolde();  // 150',
            en: 'class Account {\nprivate:\n    double balance;\npublic:\n    Account(double start) {\n        balance = start;\n    }\n    void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n    double getBalance() { return balance; }\n};\n\nAccount a(100);\na.deposit(50);\ncout << a.getBalance();  // 150',
            tr: 'class Hesap {\nprivate:\n    double bakiye;\npublic:\n    Hesap(double baslangic) {\n        bakiye = baslangic;\n    }\n    void yatir(double miktar) {\n        if (miktar > 0) bakiye += miktar;\n    }\n    double getBakiye() { return bakiye; }\n};\n\nHesap h(100);\nh.yatir(50);\ncout << h.getBakiye();  // 150',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'C’est l’encapsulation : personne ne peut écrire c.solde = -500 depuis l’extérieur. On passe par des méthodes qui vérifient les valeurs.',
            en: 'This is encapsulation: nobody can write a.balance = -500 from outside. You go through methods that check the values.',
            tr: 'Buna kapsülleme denir: kimse dışarıdan h.bakiye = -500 yazamaz. Değerleri kontrol eden metotlar kullanılır.',
          },
        },
      ],
      quiz: {
        question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
        code: {
          fr: 'Compte c(100);\nc.deposer(-30);\ncout << c.getSolde();',
          en: 'Account a(100);\na.deposit(-30);\ncout << a.getBalance();',
          tr: 'Hesap h(100);\nh.yatir(-30);\ncout << h.getBakiye();',
        },
        options: { fr: ['70', '100', '130'], en: ['70', '100', '130'], tr: ['70', '100', '130'] },
        answerIndex: 1,
        explanation: {
          fr: 'La méthode n’ajoute le montant que s’il est positif. -30 est refusé, le solde reste à 100.',
          en: 'The method only adds the amount when it is positive. -30 is refused, so the balance stays at 100.',
          tr: 'Metot, miktarı yalnızca pozitifse ekler. -30 reddedilir, bakiye 100 olarak kalır.',
        },
      },
    },
    {
      id: 'cpp-inheritance',
      title: { fr: 'L’héritage', en: 'Inheritance', tr: 'Kalıtım' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'L’héritage permet de créer une classe à partir d’une autre : la classe fille reçoit tout ce que contient la classe mère, et peut ajouter ses propres méthodes.',
            en: 'Inheritance lets you build a class from another one: the child class gets everything the parent class has, and can add its own methods.',
            tr: 'Kalıtım, bir sınıfı başka bir sınıftan türetmeyi sağlar: alt sınıf, üst sınıftaki her şeyi alır ve kendi metotlarını ekleyebilir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'class Animal {\npublic:\n    void manger() { cout << "Je mange" << endl; }\n};\n\nclass Chien : public Animal {\npublic:\n    void aboyer() { cout << "Wouf !" << endl; }\n};\n\nChien rex;\nrex.manger();  // Je mange (hérité de Animal)\nrex.aboyer();  // Wouf !',
            en: 'class Animal {\npublic:\n    void eat() { cout << "I am eating" << endl; }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() { cout << "Woof!" << endl; }\n};\n\nDog rex;\nrex.eat();   // I am eating (inherited from Animal)\nrex.bark();  // Woof!',
            tr: 'class Hayvan {\npublic:\n    void ye() { cout << "Yemek yiyorum" << endl; }\n};\n\nclass Kopek : public Hayvan {\npublic:\n    void havla() { cout << "Hav hav!" << endl; }\n};\n\nKopek karabas;\nkarabas.ye();     // Yemek yiyorum (Hayvan’dan miras)\nkarabas.havla();  // Hav hav!',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Un Chien est un Animal, mais un Animal n’est pas forcément un Chien : l’héritage ne marche que dans un sens.',
            en: 'A Dog is an Animal, but an Animal is not necessarily a Dog: inheritance only works one way.',
            tr: 'Her Kopek bir Hayvan’dır, ama her Hayvan bir Kopek değildir: kalıtım tek yönde çalışır.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Quelle ligne provoque une erreur ?',
          en: 'Which line causes an error?',
          tr: 'Hangi satır hataya neden olur?',
        },
        code: {
          fr: 'Chien c;\nAnimal a;\nc.manger();\nc.aboyer();\na.aboyer();',
          en: 'Dog d;\nAnimal a;\nd.eat();\nd.bark();\na.bark();',
          tr: 'Kopek k;\nHayvan h;\nk.ye();\nk.havla();\nh.havla();',
        },
        options: {
          fr: ['c.manger();', 'c.aboyer();', 'a.aboyer();'],
          en: ['d.eat();', 'd.bark();', 'a.bark();'],
          tr: ['k.ye();', 'k.havla();', 'h.havla();'],
        },
        answerIndex: 2,
        explanation: {
          fr: 'aboyer est défini seulement dans Chien. Un Animal ne connaît que manger, donc a.aboyer() ne compile pas.',
          en: 'bark is only defined in Dog. An Animal only knows eat, so a.bark() does not compile.',
          tr: 'havla yalnızca Kopek sınıfında tanımlıdır. Hayvan yalnızca ye metodunu bilir, bu yüzden h.havla() derlenmez.',
        },
      },
    },
  ],
  'kbu-cme227': [
    {
      id: 'ds-stack',
      title: { fr: 'La pile', en: 'The stack', tr: 'Yığın (Stack)' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Une pile fonctionne comme une pile d’assiettes : on pose en haut et on retire en haut. Le dernier entré est le premier sorti (LIFO).',
            en: 'A stack works like a pile of plates: you put on top and take from the top. The last one in is the first one out (LIFO).',
            tr: 'Yığın, üst üste konmuş tabaklar gibi çalışır: en üste koyar, en üstten alırız. Son giren ilk çıkar (LIFO).',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'int pile[10];\nint sommet = -1;  // pile vide\n\nvoid empiler(int x) { pile[++sommet] = x; }\nint depiler(void) { return pile[sommet--]; }\n\n// Dans main :\nempiler(1);\nempiler(2);\nempiler(3);\nprintf("%d\\n", depiler());  // 3',
            en: 'int stack[10];\nint top = -1;  // empty stack\n\nvoid push(int x) { stack[++top] = x; }\nint pop(void) { return stack[top--]; }\n\n// In main:\npush(1);\npush(2);\npush(3);\nprintf("%d\\n", pop());  // 3',
            tr: 'int yigin[10];\nint tepe = -1;  // boş yığın\n\nvoid push(int x) { yigin[++tepe] = x; }\nint pop(void) { return yigin[tepe--]; }\n\n// main içinde:\npush(1);\npush(2);\npush(3);\nprintf("%d\\n", pop());  // 3',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Le bouton « Annuler » d’un éditeur et les appels de fonctions utilisent une pile. Une vraie pile doit aussi vérifier qu’elle n’est ni pleine ni vide.',
            en: 'An editor’s “Undo” button and function calls use a stack. A real stack must also check that it is neither full nor empty.',
            tr: 'Bir düzenleyicideki “Geri al” düğmesi ve fonksiyon çağrıları yığın kullanır. Gerçek bir yığın ayrıca dolu ya da boş olmadığını kontrol etmelidir.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Que renvoie le dernier appel ?',
          en: 'What does the last call return?',
          tr: 'Son çağrı ne döndürür?',
        },
        code: {
          fr: 'empiler(5);\nempiler(8);\ndepiler();\nempiler(2);\ndepiler();  // ?',
          en: 'push(5);\npush(8);\npop();\npush(2);\npop();  // ?',
          tr: 'push(5);\npush(8);\npop();\npush(2);\npop();  // ?',
        },
        options: { fr: ['5', '8', '2'], en: ['5', '8', '2'], tr: ['5', '8', '2'] },
        answerIndex: 2,
        explanation: {
          fr: 'Le premier retrait enlève 8. Ensuite on pose 2 au-dessus de 5 : le dernier entré, 2, sort en premier.',
          en: 'The first removal takes out 8. Then 2 is put on top of 5: the last one in, 2, comes out first.',
          tr: 'İlk çıkarma 8’i alır. Sonra 2, 5’in üstüne konur: son giren 2 ilk çıkar.',
        },
      },
    },
    {
      id: 'ds-queue',
      title: { fr: 'La file', en: 'The queue', tr: 'Kuyruk (Queue)' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Une file fonctionne comme une file d’attente à la cafétéria : on arrive à la fin et on sort au début. Le premier entré est le premier sorti (FIFO).',
            en: 'A queue works like the line at the cafeteria: you join at the back and leave from the front. The first one in is the first one out (FIFO).',
            tr: 'Kuyruk, yemekhanedeki sıra gibi çalışır: sona girilir, baştan çıkılır. İlk giren ilk çıkar (FIFO).',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'int file[10];\nint debut = 0, fin = 0;\n\nvoid enfiler(int x) { file[fin++] = x; }\nint defiler(void) { return file[debut++]; }\n\n// Dans main :\nenfiler(1);\nenfiler(2);\nenfiler(3);\nprintf("%d\\n", defiler());  // 1',
            en: 'int queue[10];\nint front = 0, back = 0;\n\nvoid enqueue(int x) { queue[back++] = x; }\nint dequeue(void) { return queue[front++]; }\n\n// In main:\nenqueue(1);\nenqueue(2);\nenqueue(3);\nprintf("%d\\n", dequeue());  // 1',
            tr: 'int kuyruk[10];\nint bas = 0, son = 0;\n\nvoid enqueue(int x) { kuyruk[son++] = x; }\nint dequeue(void) { return kuyruk[bas++]; }\n\n// main içinde:\nenqueue(1);\nenqueue(2);\nenqueue(3);\nprintf("%d\\n", dequeue());  // 1',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Les imprimantes et les serveurs traitent les demandes avec une file. En pratique, on réutilise les cases libérées au début du tableau : c’est la file circulaire.',
            en: 'Printers and servers handle requests with a queue. In practice, the freed cells at the start of the array are reused: that is a circular queue.',
            tr: 'Yazıcılar ve sunucular istekleri bir kuyrukla işler. Uygulamada dizinin başında boşalan hücreler yeniden kullanılır: buna dairesel kuyruk denir.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Que renvoie le dernier appel ?',
          en: 'What does the last call return?',
          tr: 'Son çağrı ne döndürür?',
        },
        code: {
          fr: 'enfiler(5);\nenfiler(8);\ndefiler();\nenfiler(2);\ndefiler();  // ?',
          en: 'enqueue(5);\nenqueue(8);\ndequeue();\nenqueue(2);\ndequeue();  // ?',
          tr: 'enqueue(5);\nenqueue(8);\ndequeue();\nenqueue(2);\ndequeue();  // ?',
        },
        options: { fr: ['5', '8', '2'], en: ['5', '8', '2'], tr: ['5', '8', '2'] },
        answerIndex: 1,
        explanation: {
          fr: 'Le premier retrait enlève 5, le plus ancien. La file contient alors 8 puis 2 : c’est 8 qui sort ensuite.',
          en: 'The first removal takes out 5, the oldest. The queue then holds 8 then 2: 8 comes out next.',
          tr: 'İlk çıkarma en eski eleman olan 5’i alır. Kuyrukta sırasıyla 8 ve 2 kalır: sonra 8 çıkar.',
        },
      },
    },
    {
      id: 'ds-linked-list',
      title: { fr: 'La liste chaînée', en: 'The linked list', tr: 'Bağlı liste' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Une liste chaînée est une suite de nœuds. Chaque nœud contient une valeur et un pointeur vers le nœud suivant ; le dernier pointe vers NULL.',
            en: 'A linked list is a chain of nodes. Each node holds a value and a pointer to the next node; the last one points to NULL.',
            tr: 'Bağlı liste, düğümlerden oluşan bir zincirdir. Her düğüm bir değer ve bir sonraki düğümü gösteren bir işaretçi tutar; sonuncusu NULL’ı gösterir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'struct Noeud {\n    int valeur;\n    struct Noeud *suivant;\n};\n\nvoid afficher(struct Noeud *tete) {\n    for (struct Noeud *n = tete; n != NULL; n = n->suivant) {\n        printf("%d ", n->valeur);\n    }\n}',
            en: 'struct Node {\n    int value;\n    struct Node *next;\n};\n\nvoid print_list(struct Node *head) {\n    for (struct Node *n = head; n != NULL; n = n->next) {\n        printf("%d ", n->value);\n    }\n}',
            tr: 'struct Dugum {\n    int deger;\n    struct Dugum *sonraki;\n};\n\nvoid yazdir(struct Dugum *bas) {\n    for (struct Dugum *d = bas; d != NULL; d = d->sonraki) {\n        printf("%d ", d->deger);\n    }\n}',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Avantage : la liste grandit sans taille fixe, et ajouter un nœud au début est rapide. Inconvénient : pour atteindre un élément, il faut suivre les pointeurs un par un.',
            en: 'Upside: the list grows with no fixed size, and adding a node at the start is fast. Downside: to reach an element, you must follow the pointers one by one.',
            tr: 'Avantajı: liste sabit bir boyut olmadan büyür ve başa düğüm eklemek hızlıdır. Dezavantajı: bir elemana ulaşmak için işaretçileri tek tek izlemek gerekir.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Pour lire le 100e élément d’une liste chaînée, il faut…',
          en: 'To read the 100th element of a linked list, you must…',
          tr: 'Bağlı listenin 100. elemanını okumak için…',
        },
        options: {
          fr: [
            'y accéder directement, comme dans un tableau',
            'parcourir les 99 nœuds qui le précèdent',
            'trier la liste d’abord',
          ],
          en: [
            'access it directly, like in an array',
            'walk through the 99 nodes before it',
            'sort the list first',
          ],
          tr: [
            'dizideki gibi doğrudan erişmek gerekir',
            'ondan önceki 99 düğümü dolaşmak gerekir',
            'önce listeyi sıralamak gerekir',
          ],
        },
        answerIndex: 1,
        explanation: {
          fr: 'Les nœuds ne sont pas rangés côte à côte en mémoire : seul le nœud précédent sait où se trouve le suivant. On part donc de la tête et on avance.',
          en: 'The nodes are not stored side by side in memory: only the previous node knows where the next one is. So you start from the head and move forward.',
          tr: 'Düğümler bellekte yan yana durmaz: bir sonrakinin yerini yalnızca önceki düğüm bilir. Bu yüzden baştan başlayıp ilerlemek gerekir.',
        },
      },
    },
  ],
  'kbu-cme226': [
    {
      id: 'sql-select',
      title: { fr: 'Tables et SELECT', en: 'Tables and SELECT', tr: 'Tablolar ve SELECT' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Une base de données relationnelle range les informations dans des tables, avec des colonnes et des lignes. SQL est le langage pour les interroger.',
            en: 'A relational database stores information in tables, with columns and rows. SQL is the language used to query them.',
            tr: 'İlişkisel bir veritabanı bilgileri sütun ve satırlardan oluşan tablolarda saklar. SQL, bu tabloları sorgulamak için kullanılan dildir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: '-- Table etudiants\n-- id | nom  | ville   | note\n-- 1  | Ali  | Karabük | 15\n-- 2  | Awa  | Ankara  | 12\n-- 3  | Emre | Karabük | 17\n\nSELECT nom, note FROM etudiants;',
            en: '-- Table students\n-- id | name | city    | grade\n-- 1  | Ali  | Karabük | 15\n-- 2  | Awa  | Ankara  | 12\n-- 3  | Emre | Karabük | 17\n\nSELECT name, grade FROM students;',
            tr: '-- ogrenciler tablosu\n-- id | ad   | sehir   | puan\n-- 1  | Ali  | Karabük | 15\n-- 2  | Awa  | Ankara  | 12\n-- 3  | Emre | Karabük | 17\n\nSELECT ad, puan FROM ogrenciler;',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'SELECT choisit les colonnes à afficher, FROM indique la table. Cette requête renvoie le nom et la note des 3 étudiants.',
            en: 'SELECT picks the columns to show, FROM names the table. This query returns the name and grade of the 3 students.',
            tr: 'SELECT gösterilecek sütunları seçer, FROM tabloyu belirtir. Bu sorgu 3 öğrencinin adını ve puanını döndürür.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Que renvoie cette requête ?',
          en: 'What does this query return?',
          tr: 'Bu sorgu ne döndürür?',
        },
        code: {
          fr: 'SELECT * FROM etudiants;',
          en: 'SELECT * FROM students;',
          tr: 'SELECT * FROM ogrenciler;',
        },
        options: {
          fr: ['Seulement la première colonne', 'Toutes les colonnes de toutes les lignes', 'Seulement la première ligne'],
          en: ['Only the first column', 'Every column of every row', 'Only the first row'],
          tr: ['Yalnızca ilk sütun', 'Tüm satırların tüm sütunları', 'Yalnızca ilk satır'],
        },
        answerIndex: 1,
        explanation: {
          fr: '* veut dire « toutes les colonnes ». Sans condition, SELECT renvoie toutes les lignes de la table.',
          en: '* means “every column”. With no condition, SELECT returns every row of the table.',
          tr: '* “tüm sütunlar” demektir. Koşul olmadan SELECT tablonun tüm satırlarını döndürür.',
        },
      },
    },
    {
      id: 'sql-where',
      title: { fr: 'Filtrer et trier', en: 'Filtering and sorting', tr: 'Filtreleme ve sıralama' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'WHERE garde seulement les lignes qui respectent une condition. ORDER BY trie le résultat : ASC du plus petit au plus grand (par défaut), DESC dans l’autre sens.',
            en: 'WHERE keeps only the rows that match a condition. ORDER BY sorts the result: ASC from smallest to largest (the default), DESC the other way.',
            tr: 'WHERE yalnızca bir koşulu sağlayan satırları tutar. ORDER BY sonucu sıralar: ASC küçükten büyüğe (varsayılan), DESC ise tersine.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'SELECT nom, note\nFROM etudiants\nWHERE ville = \'Karabük\'\nORDER BY note DESC;\n\n-- Emre | 17\n-- Ali  | 15',
            en: 'SELECT name, grade\nFROM students\nWHERE city = \'Karabük\'\nORDER BY grade DESC;\n\n-- Emre | 17\n-- Ali  | 15',
            tr: 'SELECT ad, puan\nFROM ogrenciler\nWHERE sehir = \'Karabük\'\nORDER BY puan DESC;\n\n-- Emre | 17\n-- Ali  | 15',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Les textes s’écrivent entre apostrophes simples. On peut combiner des conditions avec AND et OR.',
            en: 'Text values go between single quotes. You can combine conditions with AND and OR.',
            tr: 'Metin değerleri tek tırnak içinde yazılır. Koşullar AND ve OR ile birleştirilebilir.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Avec la table etudiants, que renvoie cette requête ?',
          en: 'With the students table, what does this query return?',
          tr: 'ogrenciler tablosuyla bu sorgu ne döndürür?',
        },
        code: {
          fr: 'SELECT nom FROM etudiants\nWHERE note > 12\nORDER BY note;',
          en: 'SELECT name FROM students\nWHERE grade > 12\nORDER BY grade;',
          tr: 'SELECT ad FROM ogrenciler\nWHERE puan > 12\nORDER BY puan;',
        },
        options: {
          fr: ['Ali, Emre', 'Emre, Ali', 'Awa, Ali, Emre'],
          en: ['Ali, Emre', 'Emre, Ali', 'Awa, Ali, Emre'],
          tr: ['Ali, Emre', 'Emre, Ali', 'Awa, Ali, Emre'],
        },
        answerIndex: 0,
        explanation: {
          fr: 'Awa (12) n’a pas plus de 12, elle est écartée. Il reste Ali (15) et Emre (17), triés du plus petit au plus grand.',
          en: 'Awa (12) does not have more than 12, so she is left out. Ali (15) and Emre (17) remain, sorted from smallest to largest.',
          tr: 'Awa’nın puanı (12), 12’den büyük değildir; elenir. Ali (15) ve Emre (17) kalır ve küçükten büyüğe sıralanır.',
        },
      },
    },
    {
      id: 'sql-join',
      title: { fr: 'Relier deux tables : JOIN', en: 'Linking two tables: JOIN', tr: 'İki tabloyu birleştirmek: JOIN' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Pour éviter de répéter les informations, on les répartit dans plusieurs tables reliées par un identifiant. JOIN les rassemble dans une seule réponse.',
            en: 'To avoid repeating information, it is split across several tables linked by an id. JOIN brings them back together in one answer.',
            tr: 'Bilgileri tekrar etmemek için, bir kimlik (id) ile bağlı birkaç tabloya bölünür. JOIN bunları tek bir sonuçta bir araya getirir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: '-- etudiants : (1, Ali), (2, Awa)\n-- inscriptions (etudiant_id, cours) :\n--   (1, BLM111), (1, CME226), (2, CME226)\n\nSELECT e.nom, i.cours\nFROM etudiants e\nJOIN inscriptions i ON i.etudiant_id = e.id;\n\n-- Ali | BLM111\n-- Ali | CME226\n-- Awa | CME226',
            en: '-- students: (1, Ali), (2, Awa)\n-- enrollments (student_id, course):\n--   (1, BLM111), (1, CME226), (2, CME226)\n\nSELECT s.name, e.course\nFROM students s\nJOIN enrollments e ON e.student_id = s.id;\n\n-- Ali | BLM111\n-- Ali | CME226\n-- Awa | CME226',
            tr: '-- ogrenciler: (1, Ali), (2, Awa)\n-- kayitlar (ogrenci_id, ders):\n--   (1, BLM111), (1, CME226), (2, CME226)\n\nSELECT o.ad, k.ders\nFROM ogrenciler o\nJOIN kayitlar k ON k.ogrenci_id = o.id;\n\n-- Ali | BLM111\n-- Ali | CME226\n-- Awa | CME226',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'ON dit comment relier les lignes : ici, l’etudiant_id de l’inscription doit être égal à l’id de l’étudiant. e et i sont des noms courts pour les tables.',
            en: 'ON says how to match the rows: here, the enrollment’s student_id must equal the student’s id. s and e are short names for the tables.',
            tr: 'ON satırların nasıl eşleşeceğini söyler: burada kaydın ogrenci_id’si öğrencinin id’sine eşit olmalıdır. o ve k, tablolar için kısa adlardır.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Si Awa s’inscrit aussi à BLM111, combien de lignes la requête renverra-t-elle ?',
          en: 'If Awa also enrolls in BLM111, how many rows will the query return?',
          tr: 'Awa BLM111’e de kaydolursa, sorgu kaç satır döndürür?',
        },
        options: { fr: ['3', '4', '5'], en: ['3', '4', '5'], tr: ['3', '4', '5'] },
        answerIndex: 1,
        explanation: {
          fr: 'JOIN produit une ligne par inscription qui correspond à un étudiant. Il y aura 4 inscriptions, donc 4 lignes.',
          en: 'JOIN produces one row per enrollment that matches a student. There will be 4 enrollments, so 4 rows.',
          tr: 'JOIN, bir öğrenciyle eşleşen her kayıt için bir satır üretir. 4 kayıt olacağı için 4 satır döner.',
        },
      },
    },
  ],
  'kbu-cme228': [
    {
      id: 'php-first-script',
      title: { fr: 'Premier script PHP', en: 'Your first PHP script', tr: 'İlk PHP betiği' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'PHP s’exécute sur le serveur : il fabrique une page HTML, puis l’envoie au navigateur. Le code PHP s’écrit entre <?php et ?>.',
            en: 'PHP runs on the server: it builds an HTML page, then sends it to the browser. PHP code goes between <?php and ?>.',
            tr: 'PHP sunucuda çalışır: bir HTML sayfası oluşturur ve tarayıcıya gönderir. PHP kodu <?php ile ?> arasına yazılır.',
          },
        },
        {
          type: 'code',
          code: {
            fr: '<?php\n$nom = "Awa";\n$age = 20;\necho "Bonjour $nom, tu as $age ans";\n// Bonjour Awa, tu as 20 ans\n?>',
            en: '<?php\n$name = "Awa";\n$age = 20;\necho "Hello $name, you are $age";\n// Hello Awa, you are 20\n?>',
            tr: '<?php\n$ad = "Ayşe";\n$yas = 20;\necho "Merhaba $ad, $yas yaşındasın";\n// Merhaba Ayşe, 20 yaşındasın\n?>',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Les variables commencent par $ et n’ont pas besoin de type. echo envoie du texte dans la page. Entre guillemets doubles, PHP remplace les variables par leur valeur.',
            en: 'Variables start with $ and need no type. echo sends text into the page. Inside double quotes, PHP replaces variables with their value.',
            tr: 'Değişkenler $ ile başlar ve tip gerektirmez. echo sayfaya metin gönderir. Çift tırnak içinde PHP, değişkenlerin yerine değerlerini yazar.',
          },
        },
      ],
      quiz: {
        question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
        code: '$x = 5;\necho \'x = $x\';',
        options: {
          fr: ['x = 5', 'x = $x', 'Une erreur'],
          en: ['x = 5', 'x = $x', 'An error'],
          tr: ['x = 5', 'x = $x', 'Bir hata'],
        },
        answerIndex: 1,
        explanation: {
          fr: 'Entre apostrophes simples, PHP n’interprète pas les variables : le texte est affiché tel quel. Avec des guillemets doubles, on aurait x = 5.',
          en: 'Inside single quotes, PHP does not read variables: the text is printed as is. With double quotes, you would get x = 5.',
          tr: 'Tek tırnak içinde PHP değişkenleri yorumlamaz: metin olduğu gibi yazılır. Çift tırnakla x = 5 çıkardı.',
        },
      },
    },
    {
      id: 'php-arrays-loops',
      title: { fr: 'Tableaux et boucles', en: 'Arrays and loops', tr: 'Diziler ve döngüler' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Un tableau PHP contient plusieurs valeurs. foreach parcourt chaque valeur, ce qui est pratique pour générer du HTML, comme une liste.',
            en: 'A PHP array holds several values. foreach goes through each value, which is handy for generating HTML, like a list.',
            tr: 'Bir PHP dizisi birden fazla değer tutar. foreach her değeri tek tek dolaşır; liste gibi HTML üretmek için çok kullanışlıdır.',
          },
        },
        {
          type: 'code',
          code: '<?php\n$cours = ["BLM111", "CME226", "CME228"];\n\necho "<ul>";\nforeach ($cours as $c) {\n    echo "<li>$c</li>";\n}\necho "</ul>";\n?>',
        },
        {
          type: 'text',
          text: {
            fr: 'Le navigateur reçoit seulement le HTML produit : <ul><li>BLM111</li>…</ul>. count($cours) donne le nombre d’éléments, ici 3.',
            en: 'The browser only receives the generated HTML: <ul><li>BLM111</li>…</ul>. count($cours) gives the number of items, here 3.',
            tr: 'Tarayıcı yalnızca üretilen HTML’i alır: <ul><li>BLM111</li>…</ul>. count($cours) eleman sayısını verir, burada 3.',
          },
        },
      ],
      quiz: {
        question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
        code: '$notes = [12, 15, 9];\n$total = 0;\nforeach ($notes as $n) {\n    $total += $n;\n}\necho $total;',
        options: { fr: ['3', '36', '15'], en: ['3', '36', '15'], tr: ['3', '36', '15'] },
        answerIndex: 1,
        explanation: {
          fr: 'La boucle ajoute chaque note au total : 12 + 15 + 9 = 36.',
          en: 'The loop adds each grade to the total: 12 + 15 + 9 = 36.',
          tr: 'Döngü her notu toplama ekler: 12 + 15 + 9 = 36.',
        },
      },
    },
    {
      id: 'php-forms',
      title: { fr: 'Les formulaires', en: 'Forms', tr: 'Formlar' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Un formulaire HTML envoie ce que l’utilisateur a tapé à un script PHP. Avec method="post", PHP le retrouve dans le tableau $_POST.',
            en: 'An HTML form sends what the user typed to a PHP script. With method="post", PHP finds it in the $_POST array.',
            tr: 'Bir HTML formu, kullanıcının yazdıklarını bir PHP betiğine gönderir. method="post" ile PHP bu bilgiyi $_POST dizisinde bulur.',
          },
        },
        {
          type: 'code',
          code: {
            fr: '<!-- formulaire.html -->\n<form action="bonjour.php" method="post">\n  <input name="prenom">\n  <button>Envoyer</button>\n</form>\n\n<?php // bonjour.php\n$prenom = htmlspecialchars($_POST["prenom"]);\necho "Bonjour $prenom !";\n?>',
            en: '<!-- form.html -->\n<form action="hello.php" method="post">\n  <input name="first_name">\n  <button>Send</button>\n</form>\n\n<?php // hello.php\n$firstName = htmlspecialchars($_POST["first_name"]);\necho "Hello $firstName!";\n?>',
            tr: '<!-- form.html -->\n<form action="merhaba.php" method="post">\n  <input name="isim">\n  <button>Gönder</button>\n</form>\n\n<?php // merhaba.php\n$isim = htmlspecialchars($_POST["isim"]);\necho "Merhaba $isim!";\n?>',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Le name du champ devient la clé dans $_POST. Ne fais jamais confiance à ce que tape l’utilisateur : htmlspecialchars le rend inoffensif avant de l’afficher.',
            en: 'The field’s name becomes the key in $_POST. Never trust what the user types: htmlspecialchars makes it harmless before you display it.',
            tr: 'Alanın name değeri $_POST içinde anahtar olur. Kullanıcının yazdığına asla güvenme: htmlspecialchars onu göstermeden önce zararsız hale getirir.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Pourquoi utilise-t-on htmlspecialchars ici ?',
          en: 'Why is htmlspecialchars used here?',
          tr: 'Burada htmlspecialchars neden kullanılır?',
        },
        options: {
          fr: [
            'Pour que la page se charge plus vite',
            'Pour empêcher l’utilisateur d’injecter du HTML ou du JavaScript',
            'Pour enregistrer le prénom dans la base de données',
          ],
          en: [
            'To make the page load faster',
            'To stop the user from injecting HTML or JavaScript',
            'To save the first name in the database',
          ],
          tr: [
            'Sayfanın daha hızlı yüklenmesi için',
            'Kullanıcının HTML veya JavaScript enjekte etmesini önlemek için',
            'İsmi veritabanına kaydetmek için',
          ],
        },
        answerIndex: 1,
        explanation: {
          fr: 'Sans lui, quelqu’un pourrait taper <script>…</script> et ce code s’exécuterait chez les autres visiteurs : c’est une faille XSS. htmlspecialchars transforme < et > en texte simple.',
          en: 'Without it, someone could type <script>…</script> and that code would run for other visitors: that is an XSS flaw. htmlspecialchars turns < and > into plain text.',
          tr: 'O olmadan biri <script>…</script> yazabilir ve bu kod diğer ziyaretçilerde çalışır: buna XSS açığı denir. htmlspecialchars, < ve > karakterlerini düz metne dönüştürür.',
        },
      },
    },
  ],
};
