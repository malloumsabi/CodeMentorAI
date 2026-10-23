/**
 * CME225 Object Oriented Programming, 14 weeks. The KBU course uses C++; at the user's request it is
 * taught in Java, each C++ topic mapped to its Java counterpart (garbage collection for destructors,
 * equals/toString for operator overloading, references for pointers, generics for templates,
 * collections for the STL). Weeks 1–7 prepare the midterm, weeks 8–14 the final.
 * Weeks 2, 3 and 6 keep the ids of the former 3-lesson course.
 */

import type { LessonSource } from '@/data/lessons';

export const cme225Lessons: LessonSource[] = [
  {
    id: 'oop-w01-intro',
    week: 1,
    title: {
      fr: 'Introduction à Java et à la programmation orientée objet',
      en: 'Introduction to Java and object oriented programming',
      tr: 'Java’ya ve nesne yönelimli programlamaya giriş',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En programmation procédurale (C), on écrit des fonctions qui manipulent des données séparées. En programmation orientée objet, on regroupe données et traitements dans des objets qui représentent des choses du problème : un étudiant, un compte, un bouton. Les quatre piliers : encapsulation, abstraction, héritage, polymorphisme.',
          en: 'In procedural programming (C), functions handle separate data. In object oriented programming, data and behavior are grouped into objects that represent things from the problem: a student, an account, a button. The four pillars: encapsulation, abstraction, inheritance, polymorphism.',
          tr: 'Yordamsal programlamada (C) fonksiyonlar ayrı verileri işler. Nesne yönelimli programlamada veriler ve davranışlar problemin varlıklarını temsil eden nesnelerde toplanır: bir öğrenci, bir hesap, bir düğme. Dört temel ilke: kapsülleme, soyutlama, kalıtım, çok biçimlilik.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '// Fichier Bonjour.java (même nom que la classe public)\npublic class Bonjour {\n    public static void main(String[] args) {\n        System.out.println("Bonjour KBU !");\n    }\n}\n\njavac Bonjour.java   → Bonjour.class (bytecode)\njava Bonjour         → la machine virtuelle (JVM) l’exécute',
          en: '// File Hello.java (same name as the public class)\npublic class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello KBU!");\n    }\n}\n\njavac Hello.java   → Hello.class (bytecode)\njava Hello         → the virtual machine (JVM) runs it',
          tr: '// Merhaba.java dosyası (public sınıfla aynı ad)\npublic class Merhaba {\n    public static void main(String[] args) {\n        System.out.println("Merhaba KBU!");\n    }\n}\n\njavac Merhaba.java   → Merhaba.class (bytecode)\njava Merhaba         → sanal makine (JVM) çalıştırır',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Associe chaque situation à un pilier de la POO : (1) le solde d’un compte n’est modifiable que par deposer() ; (2) Chien et Chat reprennent le code d’Animal ; (3) on appelle crier() sur une liste d’animaux et chacun crie à sa façon ; (4) on utilise une voiture sans connaître le moteur.',
          en: 'Match each case with an OOP pillar: (1) an account balance can only change through deposit(); (2) Dog and Cat reuse Animal’s code; (3) speak() is called on a list of animals and each speaks its own way; (4) you drive a car without knowing the engine.',
          tr: 'Her durumu bir NYP ilkesiyle eşleştir: (1) hesap bakiyesi yalnızca yatir() ile değişebilir; (2) Kopek ve Kedi, Hayvan’ın kodunu kullanır; (3) bir hayvan listesinde ses() çağrılır ve her biri kendi sesini çıkarır; (4) motoru bilmeden araba kullanılır.',
        },
        solution: {
          fr: '(1) Encapsulation : les données sont cachées et protégées. (2) Héritage. (3) Polymorphisme : un même appel, des comportements différents. (4) Abstraction : on ne montre que l’essentiel (volant, pédales), pas les détails internes.',
          en: '(1) Encapsulation: the data is hidden and protected. (2) Inheritance. (3) Polymorphism: one call, different behaviors. (4) Abstraction: only the essentials are shown (wheel, pedals), not the internal details.',
          tr: '(1) Kapsülleme: veriler gizlenir ve korunur. (2) Kalıtım. (3) Çok biçimlilik: aynı çağrı, farklı davranışlar. (4) Soyutlama: yalnızca gerekli olan (direksiyon, pedallar) gösterilir, iç ayrıntılar değil.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que produit la commande javac ?',
        en: 'What does the javac command produce?',
        tr: 'javac komutu ne üretir?',
      },
      options: {
        fr: ['Du code machine pour un seul processeur', 'Du bytecode exécuté par la JVM', 'Un fichier HTML'],
        en: ['Machine code for a single processor', 'Bytecode run by the JVM', 'An HTML file'],
        tr: ['Tek bir işlemci için makine kodu', 'JVM’in çalıştırdığı bytecode', 'Bir HTML dosyası'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'javac compile en bytecode (.class), indépendant du processeur. La JVM de chaque système l’exécute : « écrire une fois, exécuter partout ».',
        en: 'javac compiles to bytecode (.class), processor-independent. Each system’s JVM runs it: “write once, run anywhere”.',
        tr: 'javac, işlemciden bağımsız bytecode’a (.class) derler. Her sistemin JVM’i onu çalıştırır: “bir kez yaz, her yerde çalıştır”.',
      },
    },
  },
  {
    id: 'java-classes',
    week: 2,
    title: { fr: 'Classes et objets', en: 'Classes and objects', tr: 'Sınıflar ve nesneler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une classe est un plan : elle décrit des attributs (les données) et des méthodes (les actions). Un objet est construit à partir de ce plan avec new ; chaque objet a ses propres valeurs d’attributs. On accède aux membres d’un objet avec un point.',
          en: 'A class is a blueprint: it describes attributes (the data) and methods (the actions). An object is built from that blueprint with new; each object has its own attribute values. An object’s members are reached with a dot.',
          tr: 'Sınıf bir plandır: özellikleri (veriler) ve metotları (eylemler) tanımlar. Nesne bu plandan new ile oluşturulur; her nesnenin kendi özellik değerleri vardır. Bir nesnenin üyelerine nokta ile erişilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'public class Etudiant {\n    String nom;\n    int age;\n\n    void sePresenter() {\n        System.out.println("Je suis " + nom + ", " + age + " ans");\n    }\n}\n\n// Dans main :\nEtudiant e1 = new Etudiant();\ne1.nom = "Awa";  e1.age = 20;\nEtudiant e2 = new Etudiant();\ne2.nom = "Emre"; e2.age = 22;\ne1.sePresenter();   // Je suis Awa, 20 ans\ne2.sePresenter();   // Je suis Emre, 22 ans',
          en: 'public class Student {\n    String name;\n    int age;\n\n    void introduce() {\n        System.out.println("I am " + name + ", " + age + " years old");\n    }\n}\n\n// In main:\nStudent s1 = new Student();\ns1.name = "Awa";  s1.age = 20;\nStudent s2 = new Student();\ns2.name = "Emre"; s2.age = 22;\ns1.introduce();   // I am Awa, 20 years old\ns2.introduce();   // I am Emre, 22 years old',
          tr: 'public class Ogrenci {\n    String ad;\n    int yas;\n\n    void tanit() {\n        System.out.println("Ben " + ad + ", " + yas + " yaşındayım");\n    }\n}\n\n// main içinde:\nOgrenci o1 = new Ogrenci();\no1.ad = "Ayşe"; o1.yas = 20;\nOgrenci o2 = new Ogrenci();\no2.ad = "Emre"; o2.yas = 22;\no1.tanit();   // Ben Ayşe, 20 yaşındayım\no2.tanit();   // Ben Emre, 22 yaşındayım',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris une classe Rectangle avec deux attributs largeur et hauteur (double) et deux méthodes aire() et perimetre(). Que donnent-elles pour un rectangle 3 × 4 ?',
          en: 'Write a Rectangle class with two attributes width and height (double) and two methods area() and perimeter(). What do they give for a 3 × 4 rectangle?',
          tr: 'genislik ve yukseklik (double) olmak üzere iki özelliği ve alan() ile cevre() olmak üzere iki metodu olan bir Dikdortgen sınıfı yaz. 3 × 4 bir dikdörtgen için ne verirler?',
        },
        solution: {
          fr: 'class Rectangle { double largeur, hauteur; double aire() { return largeur * hauteur; } double perimetre() { return 2 * (largeur + hauteur); } }. Pour 3 × 4 : aire = 12.0 et périmètre = 14.0. Les méthodes utilisent directement les attributs de l’objet sur lequel on les appelle.',
          en: 'class Rectangle { double width, height; double area() { return width * height; } double perimeter() { return 2 * (width + height); } }. For 3 × 4: area = 12.0 and perimeter = 14.0. The methods use the attributes of the object they are called on.',
          tr: 'class Dikdortgen { double genislik, yukseklik; double alan() { return genislik * yukseklik; } double cevre() { return 2 * (genislik + yukseklik); } }. 3 × 4 için: alan = 12.0 ve çevre = 14.0. Metotlar çağrıldıkları nesnenin özelliklerini doğrudan kullanır.',
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
        fr: 'public class Etudiant { /* ... */ }\n\nEtudiant a = new Etudiant();\nEtudiant b = new Etudiant();',
        en: 'public class Student { /* ... */ }\n\nStudent a = new Student();\nStudent b = new Student();',
        tr: 'public class Ogrenci { /* ... */ }\n\nOgrenci a = new Ogrenci();\nOgrenci b = new Ogrenci();',
      },
      options: {
        fr: ['1 classe et 1 objet', '1 classe et 2 objets', '2 classes et 2 objets'],
        en: ['1 class and 1 object', '1 class and 2 objects', '2 classes and 2 objects'],
        tr: ['1 sınıf ve 1 nesne', '1 sınıf ve 2 nesne', '2 sınıf ve 2 nesne'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Il n’y a qu’un seul plan (la classe), mais chaque new construit un objet différent : a et b.',
        en: 'There is only one blueprint (the class), but each new builds a different object: a and b.',
        tr: 'Tek bir plan (sınıf) vardır, ama her new farklı bir nesne oluşturur: a ve b.',
      },
    },
  },
  {
    id: 'java-constructors',
    week: 3,
    title: {
      fr: 'Constructeurs, this et ramasse-miettes',
      en: 'Constructors, this and garbage collection',
      tr: 'Yapıcılar, this ve çöp toplayıcı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le constructeur porte le nom de la classe, n’a pas de type de retour et s’exécute à chaque new. On peut en écrire plusieurs (surcharge). this désigne l’objet courant : this.nom = nom distingue l’attribut du paramètre. En C++, un destructeur libère la mémoire ; en Java, c’est le ramasse-miettes (garbage collector) qui supprime automatiquement les objets qui ne sont plus référencés.',
          en: 'The constructor has the class’s name, no return type and runs on every new. Several can be written (overloading). this means the current object: this.name = name tells the attribute from the parameter. In C++, a destructor frees memory; in Java, the garbage collector automatically removes objects that are no longer referenced.',
          tr: 'Yapıcı sınıfla aynı adı taşır, dönüş tipi yoktur ve her new’de çalışır. Birden fazla yazılabilir (aşırı yükleme). this o anki nesneyi gösterir: this.ad = ad özelliği parametreden ayırır. C++’ta yıkıcı belleği serbest bırakır; Java’da artık başvurulmayan nesneleri çöp toplayıcı (garbage collector) otomatik siler.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'public class Compte {\n    private double solde;\n    private String titulaire;\n\n    public Compte(String titulaire) {          // solde à 0\n        this(titulaire, 0);                    // appelle l’autre constructeur\n    }\n    public Compte(String titulaire, double depart) {\n        this.titulaire = titulaire;\n        this.solde = depart;\n    }\n    public void deposer(double montant) {\n        if (montant > 0) solde += montant;\n    }\n    public double getSolde() { return solde; }\n}\n\nCompte c = new Compte("Ali", 100);\nc.deposer(50);\nSystem.out.println(c.getSolde());   // 150.0',
          en: 'public class Account {\n    private double balance;\n    private String owner;\n\n    public Account(String owner) {             // balance 0\n        this(owner, 0);                        // calls the other constructor\n    }\n    public Account(String owner, double start) {\n        this.owner = owner;\n        this.balance = start;\n    }\n    public void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n    public double getBalance() { return balance; }\n}\n\nAccount a = new Account("Ali", 100);\na.deposit(50);\nSystem.out.println(a.getBalance());   // 150.0',
          tr: 'public class Hesap {\n    private double bakiye;\n    private String sahip;\n\n    public Hesap(String sahip) {               // bakiye 0\n        this(sahip, 0);                        // diğer yapıcıyı çağırır\n    }\n    public Hesap(String sahip, double baslangic) {\n        this.sahip = sahip;\n        this.bakiye = baslangic;\n    }\n    public void yatir(double miktar) {\n        if (miktar > 0) bakiye += miktar;\n    }\n    public double getBakiye() { return bakiye; }\n}\n\nHesap h = new Hesap("Ali", 100);\nh.yatir(50);\nSystem.out.println(h.getBakiye());   // 150.0',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Que vaut le solde de new Compte("Ayse") ? (2) Que se passe-t-il si on écrit, dans le 2e constructeur, titulaire = titulaire; sans this ? (3) Après c = null;, que devient l’ancien objet ?',
          en: '(1) What is the balance of new Account("Ayse")? (2) What happens if the 2nd constructor says owner = owner; without this? (3) After a = null;, what happens to the old object?',
          tr: '(1) new Hesap("Ayse") nesnesinin bakiyesi kaçtır? (2) 2. yapıcıda this olmadan sahip = sahip; yazılırsa ne olur? (3) h = null; sonrasında eski nesneye ne olur?',
        },
        solution: {
          fr: '(1) 0.0 : le 1er constructeur appelle this(titulaire, 0). (2) Le paramètre se copie sur lui-même : l’attribut titulaire reste null. this.titulaire est nécessaire pour viser l’attribut. (3) Plus aucune variable ne le référence : il devient éligible au ramasse-miettes, qui libérera sa mémoire plus tard, sans free ni delete.',
          en: '(1) 0.0: the 1st constructor calls this(owner, 0). (2) The parameter is copied onto itself: the owner attribute stays null. this.owner is needed to target the attribute. (3) No variable references it anymore: it becomes eligible for garbage collection, which frees its memory later, with no free or delete.',
          tr: '(1) 0.0: 1. yapıcı this(sahip, 0) çağırır. (2) Parametre kendi üzerine kopyalanır: sahip özelliği null kalır. Özelliği hedeflemek için this.sahip gerekir. (3) Artık hiçbir değişken ona başvurmaz: çöp toplayıcı için uygun hale gelir ve bellek free veya delete olmadan sonra serbest bırakılır.',
        },
      },
    ],
    quiz: {
      question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
      code: {
        fr: 'Compte c = new Compte("Ali", 100);\nc.deposer(-30);\nSystem.out.println(c.getSolde());',
        en: 'Account a = new Account("Ali", 100);\na.deposit(-30);\nSystem.out.println(a.getBalance());',
        tr: 'Hesap h = new Hesap("Ali", 100);\nh.yatir(-30);\nSystem.out.println(h.getBakiye());',
      },
      options: { fr: ['70.0', '100.0', '130.0'], en: ['70.0', '100.0', '130.0'], tr: ['70.0', '100.0', '130.0'] },
      answerIndex: 1,
      explanation: {
        fr: 'La méthode n’ajoute le montant que s’il est positif. -30 est refusé, le solde reste à 100.0.',
        en: 'The method only adds the amount when it is positive. -30 is refused, so the balance stays at 100.0.',
        tr: 'Metot, miktarı yalnızca pozitifse ekler. -30 reddedilir, bakiye 100.0 olarak kalır.',
      },
    },
  },
  {
    id: 'oop-w04-encapsulation',
    week: 4,
    title: {
      fr: 'Encapsulation, modificateurs d’accès et static',
      en: 'Encapsulation, access modifiers and static',
      tr: 'Kapsülleme, erişim belirleyiciler ve static',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Modificateurs d’accès\nprivate   : seulement dans la classe\n(rien)    : dans le même paquet (package)\nprotected : paquet + sous-classes\npublic    : partout\n\nRègle : attributs private, accès par des getters / setters qui vérifient\n\npublic class Etudiant {\n    private static int compteur = 0;   // partagé par TOUS les objets\n    private final int numero;          // final : ne change plus\n    public Etudiant() { compteur++; numero = compteur; }\n    public static int getCompteur() { return compteur; }\n}',
          en: 'Access modifiers\nprivate   : only inside the class\n(none)    : within the same package\nprotected : package + subclasses\npublic    : everywhere\n\nRule: private attributes, access through getters / setters that check\n\npublic class Student {\n    private static int counter = 0;    // shared by ALL objects\n    private final int number;          // final: never changes\n    public Student() { counter++; number = counter; }\n    public static int getCounter() { return counter; }\n}',
          tr: 'Erişim belirleyiciler\nprivate   : yalnızca sınıf içinde\n(yok)     : aynı paket içinde\nprotected : paket + alt sınıflar\npublic    : her yerde\n\nKural: özellikler private, denetleyen getter / setter ile erişim\n\npublic class Ogrenci {\n    private static int sayac = 0;      // TÜM nesnelerce paylaşılır\n    private final int numara;          // final: bir daha değişmez\n    public Ogrenci() { sayac++; numara = sayac; }\n    public static int getSayac() { return sayac; }\n}',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Un membre static appartient à la classe, pas à un objet : il existe une seule copie, partagée. On l’appelle par le nom de la classe (Etudiant.getCompteur(), Math.sqrt()). Une méthode static ne peut pas utiliser this ni les attributs non static.',
          en: 'A static member belongs to the class, not to an object: there is a single shared copy. It is called through the class name (Student.getCounter(), Math.sqrt()). A static method cannot use this or non-static attributes.',
          tr: 'static bir üye nesneye değil sınıfa aittir: tek bir ortak kopyası vardır. Sınıf adıyla çağrılır (Ogrenci.getSayac(), Math.sqrt()). static bir metot this’i ve static olmayan özellikleri kullanamaz.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'On crée trois objets Etudiant avec la classe ci-dessus. Que valent numero pour chacun et Etudiant.getCompteur() ? Que se passerait-il si compteur n’était pas static ?',
          en: 'Three Student objects are created with the class above. What is number for each and Student.getCounter()? What would happen if counter were not static?',
          tr: 'Yukarıdaki sınıfla üç Ogrenci nesnesi oluşturuluyor. Her birinin numara’sı ve Ogrenci.getSayac() kaçtır? sayac static olmasaydı ne olurdu?',
        },
        solution: {
          fr: 'Le compteur partagé augmente à chaque new : numéros 1, 2 et 3, et getCompteur() renvoie 3. Sans static, chaque objet aurait son propre compteur qui partirait de 0 : tous auraient le numéro 1, et getCompteur ne pourrait d’ailleurs plus être static.',
          en: 'The shared counter grows on every new: numbers 1, 2 and 3, and getCounter() returns 3. Without static, each object would have its own counter starting at 0: every student would get number 1, and getCounter could no longer be static.',
          tr: 'Ortak sayaç her new’de artar: numaralar 1, 2 ve 3; getSayac() 3 döndürür. static olmasaydı her nesnenin 0’dan başlayan kendi sayacı olurdu: hepsi 1 numarasını alırdı ve getSayac artık static olamazdı.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel modificateur rend un attribut visible seulement dans sa propre classe ?',
        en: 'Which modifier makes an attribute visible only inside its own class?',
        tr: 'Hangi belirleyici bir özelliği yalnızca kendi sınıfı içinde görünür yapar?',
      },
      options: { fr: ['public', 'protected', 'private'], en: ['public', 'protected', 'private'], tr: ['public', 'protected', 'private'] },
      answerIndex: 2,
      explanation: {
        fr: 'private cache l’attribut au reste du programme : on y accède seulement par les méthodes de la classe, qui peuvent vérifier les valeurs.',
        en: 'private hides the attribute from the rest of the program: it is only reached through the class’s methods, which can check the values.',
        tr: 'private özelliği programın geri kalanından gizler: yalnızca değerleri denetleyebilen sınıf metotlarıyla erişilir.',
      },
    },
  },
  {
    id: 'oop-w05-references',
    week: 5,
    title: {
      fr: 'Références, tableaux d’objets et composition',
      en: 'References, arrays of objects and composition',
      tr: 'Referanslar, nesne dizileri ve bileşim',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En Java, une variable d’objet ne contient pas l’objet mais une référence vers lui (l’équivalent d’un pointeur en C++, sans arithmétique). b = a copie la référence : a et b désignent alors le même objet. == compare les références, pas le contenu. La composition, c’est quand un objet contient d’autres objets : une Voiture « a un » Moteur.',
          en: 'In Java, an object variable doesn’t hold the object but a reference to it (the equivalent of a C++ pointer, without arithmetic). b = a copies the reference: a and b then name the same object. == compares references, not contents. Composition is when an object contains other objects: a Car “has a” Engine.',
          tr: 'Java’da bir nesne değişkeni nesnenin kendisini değil, ona bir referansı tutar (C++’taki işaretçinin karşılığı, aritmetiği yok). b = a referansı kopyalar: a ve b artık aynı nesneyi gösterir. == içerikleri değil referansları karşılaştırır. Bileşim, bir nesnenin başka nesneler içermesidir: bir Araba bir Motor’a “sahiptir”.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Point a = new Point(1, 2);\nPoint b = a;          // même objet !\nb.x = 10;\nSystem.out.println(a.x);   // 10\n\nPoint[] t = new Point[3];   // 3 références à null, aucun Point créé\nfor (int i = 0; i < t.length; i++) t[i] = new Point(i, i);\n\nclass Voiture {                       // composition\n    private Moteur moteur = new Moteur(110);\n    void demarrer() { moteur.allumer(); }\n}',
          en: 'Point a = new Point(1, 2);\nPoint b = a;          // same object!\nb.x = 10;\nSystem.out.println(a.x);   // 10\n\nPoint[] t = new Point[3];   // 3 null references, no Point created\nfor (int i = 0; i < t.length; i++) t[i] = new Point(i, i);\n\nclass Car {                           // composition\n    private Engine engine = new Engine(110);\n    void start() { engine.turnOn(); }\n}',
          tr: 'Nokta a = new Nokta(1, 2);\nNokta b = a;          // aynı nesne!\nb.x = 10;\nSystem.out.println(a.x);   // 10\n\nNokta[] t = new Nokta[3];   // 3 null referans, hiç Nokta oluşmadı\nfor (int i = 0; i < t.length; i++) t[i] = new Nokta(i, i);\n\nclass Araba {                         // bileşim\n    private Motor motor = new Motor(110);\n    void calistir() { motor.ac(); }\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Point p = new Point(3, 4); Point q = new Point(3, 4); Point r = p; r.y = 9;. Que valent p == q, p == r et p.y ? Et que se passe-t-il si on fait t[0].x = 1 juste après new Point[3] ?',
          en: 'Point p = new Point(3, 4); Point q = new Point(3, 4); Point r = p; r.y = 9;. What are p == q, p == r and p.y? And what happens with t[0].x = 1 right after new Point[3]?',
          tr: 'Nokta p = new Nokta(3, 4); Nokta q = new Nokta(3, 4); Nokta r = p; r.y = 9;. p == q, p == r ve p.y nedir? new Nokta[3]’ten hemen sonra t[0].x = 1 yapılırsa ne olur?',
        },
        solution: {
          fr: 'p == q est false : deux objets différents, même avec le même contenu. p == r est true : même référence. p.y vaut 9, car r et p désignent le même objet. t[0] vaut encore null : t[0].x provoque une NullPointerException. Il faut d’abord créer chaque objet avec new.',
          en: 'p == q is false: two different objects, even with the same contents. p == r is true: same reference. p.y is 9, because r and p name the same object. t[0] is still null: t[0].x throws a NullPointerException. Each object must be created with new first.',
          tr: 'p == q false’tur: içerik aynı olsa da iki farklı nesne. p == r true’dur: aynı referans. p.y 9’dur, çünkü r ve p aynı nesneyi gösterir. t[0] hâlâ null’dır: t[0].x bir NullPointerException fırlatır. Önce her nesne new ile oluşturulmalıdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que compare l’opérateur == entre deux objets ?',
        en: 'What does the == operator compare between two objects?',
        tr: '== işleci iki nesne arasında neyi karşılaştırır?',
      },
      options: {
        fr: ['Leur contenu', 'Leurs références (même objet ou non)', 'Leur classe'],
        en: ['Their contents', 'Their references (same object or not)', 'Their class'],
        tr: ['İçeriklerini', 'Referanslarını (aynı nesne mi değil mi)', 'Sınıflarını'],
      },
      answerIndex: 1,
      explanation: {
        fr: '== vérifie si les deux variables désignent le même objet. Pour comparer le contenu, on utilise equals, vu en semaine 10.',
        en: '== checks whether both variables name the same object. To compare contents, use equals, covered in week 10.',
        tr: '== iki değişkenin aynı nesneyi gösterip göstermediğine bakar. İçeriği karşılaştırmak için 10. haftada görülen equals kullanılır.',
      },
    },
  },
  {
    id: 'java-inheritance',
    week: 6,
    title: { fr: 'L’héritage', en: 'Inheritance', tr: 'Kalıtım' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’héritage permet de créer une classe à partir d’une autre avec extends. La sous-classe reçoit les attributs et méthodes non private de la classe mère, et peut en ajouter. On l’utilise pour une relation « est un » : un Chien est un Animal. En Java, une classe n’a qu’une seule classe mère (pas d’héritage multiple de classes, contrairement au C++).',
          en: 'Inheritance creates a class from another with extends. The subclass receives the non-private attributes and methods of the parent class, and can add its own. It is used for an “is a” relationship: a Dog is an Animal. In Java, a class has only one parent class (no multiple class inheritance, unlike C++).',
          tr: 'Kalıtım, extends ile bir sınıftan başka bir sınıf oluşturur. Alt sınıf üst sınıfın private olmayan özelliklerini ve metotlarını alır ve kendi üyelerini ekleyebilir. “bir ... dır” ilişkisi için kullanılır: Köpek bir Hayvan’dır. Java’da bir sınıfın tek bir üst sınıfı olur (C++’ın aksine sınıflarda çoklu kalıtım yoktur).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'class Animal {\n    protected String nom;\n    Animal(String nom) { this.nom = nom; }\n    void manger() { System.out.println(nom + " mange"); }\n}\n\nclass Chien extends Animal {\n    Chien(String nom) { super(nom); }      // appelle le constructeur d’Animal\n    void aboyer() { System.out.println(nom + " aboie"); }\n}\n\nChien c = new Chien("Rex");\nc.manger();   // Rex mange   (hérité)\nc.aboyer();   // Rex aboie   (ajouté)',
          en: 'class Animal {\n    protected String name;\n    Animal(String name) { this.name = name; }\n    void eat() { System.out.println(name + " eats"); }\n}\n\nclass Dog extends Animal {\n    Dog(String name) { super(name); }      // calls Animal’s constructor\n    void bark() { System.out.println(name + " barks"); }\n}\n\nDog d = new Dog("Rex");\nd.eat();    // Rex eats    (inherited)\nd.bark();   // Rex barks   (added)',
          tr: 'class Hayvan {\n    protected String ad;\n    Hayvan(String ad) { this.ad = ad; }\n    void ye() { System.out.println(ad + " yiyor"); }\n}\n\nclass Kopek extends Hayvan {\n    Kopek(String ad) { super(ad); }        // Hayvan’ın yapıcısını çağırır\n    void havla() { System.out.println(ad + " havlıyor"); }\n}\n\nKopek k = new Kopek("Karabaş");\nk.ye();      // Karabaş yiyor     (kalıtılan)\nk.havla();   // Karabaş havlıyor  (eklenen)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'On ajoute un println dans chaque constructeur : « Animal créé » dans Animal, « Chien créé » dans Chien. Qu’affiche new Chien("Rex") ? Et pourquoi Chien ne peut-il pas lire nom si on le déclare private dans Animal ?',
          en: 'A println is added to each constructor: “Animal created” in Animal, “Dog created” in Dog. What does new Dog("Rex") print? And why can’t Dog read name if it is declared private in Animal?',
          tr: 'Her yapıcıya bir println ekleniyor: Hayvan’da “Hayvan oluştu”, Kopek’te “Kopek oluştu”. new Kopek("Karabaş") ne yazdırır? ad, Hayvan’da private tanımlanırsa Kopek neden onu okuyamaz?',
        },
        solution: {
          fr: '« Animal créé » puis « Chien créé » : super(nom) est la première instruction du constructeur de Chien, la partie Animal est donc construite d’abord. private limite l’accès à la classe Animal elle-même, même pour ses sous-classes ; protected (ou un getter) permet aux sous-classes d’y accéder.',
          en: '“Animal created” then “Dog created”: super(name) is the first statement of Dog’s constructor, so the Animal part is built first. private limits access to the Animal class itself, even for its subclasses; protected (or a getter) lets subclasses reach it.',
          tr: 'Önce “Hayvan oluştu”, sonra “Kopek oluştu”: super(ad), Kopek yapıcısının ilk komutudur, yani önce Hayvan kısmı oluşturulur. private erişimi alt sınıflar dahil yalnızca Hayvan sınıfıyla sınırlar; protected (veya bir getter) alt sınıfların erişmesini sağlar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que fait le mot-clé extends ?',
        en: 'What does the extends keyword do?',
        tr: 'extends anahtar kelimesi ne yapar?',
      },
      code: 'class Cat extends Animal { }',
      options: {
        fr: ['Il copie le fichier Animal.java', 'Cat hérite des membres d’Animal', 'Il crée un objet Animal'],
        en: ['It copies the Animal.java file', 'Cat inherits Animal’s members', 'It creates an Animal object'],
        tr: ['Animal.java dosyasını kopyalar', 'Cat, Animal’ın üyelerini kalıtır', 'Bir Animal nesnesi oluşturur'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'extends crée une relation d’héritage : Cat reçoit les attributs et méthodes non privés d’Animal, sans rien copier ni créer d’objet.',
        en: 'extends creates an inheritance relationship: Cat receives Animal’s non-private attributes and methods, without copying anything or creating an object.',
        tr: 'extends bir kalıtım ilişkisi kurar: Cat, Animal’ın private olmayan özelliklerini ve metotlarını alır; hiçbir şey kopyalanmaz, nesne oluşmaz.',
      },
    },
  },
  {
    id: 'oop-w07-overriding',
    week: 7,
    title: {
      fr: 'Redéfinition, surcharge et révision de la vize',
      en: 'Overriding, overloading and midterm review',
      tr: 'Geçersiz kılma, aşırı yükleme ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Surcharge (overloading) : même nom de méthode, paramètres différents, dans la même classe ; le compilateur choisit selon les arguments. Redéfinition (overriding) : une sous-classe réécrit une méthode héritée avec la même signature ; on l’annote @Override. super.methode() appelle la version de la classe mère.',
          en: 'Overloading: same method name, different parameters, in the same class; the compiler chooses by the arguments. Overriding: a subclass rewrites an inherited method with the same signature; it is annotated @Override. super.method() calls the parent version.',
          tr: 'Aşırı yükleme (overloading): aynı sınıfta aynı metot adı, farklı parametreler; derleyici argümanlara göre seçer. Geçersiz kılma (overriding): alt sınıf kalıtılan bir metodu aynı imzayla yeniden yazar; @Override ile işaretlenir. super.metot() üst sınıfın sürümünü çağırır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'class Employe {\n    double salaire() { return 20000; }\n}\nclass Chef extends Employe {\n    @Override\n    double salaire() { return super.salaire() + 5000; }   // redéfinition\n}\n\nclass Calcul {                                  // surcharge\n    int somme(int a, int b) { return a + b; }\n    int somme(int a, int b, int c) { return a + b + c; }\n    double somme(double a, double b) { return a + b; }\n}',
          en: 'class Employee {\n    double salary() { return 20000; }\n}\nclass Manager extends Employee {\n    @Override\n    double salary() { return super.salary() + 5000; }     // overriding\n}\n\nclass Calc {                                    // overloading\n    int sum(int a, int b) { return a + b; }\n    int sum(int a, int b, int c) { return a + b + c; }\n    double sum(double a, double b) { return a + b; }\n}',
          tr: 'class Calisan {\n    double maas() { return 20000; }\n}\nclass Mudur extends Calisan {\n    @Override\n    double maas() { return super.maas() + 5000; }         // geçersiz kılma\n}\n\nclass Hesapla {                                 // aşırı yükleme\n    int topla(int a, int b) { return a + b; }\n    int topla(int a, int b, int c) { return a + b + c; }\n    double topla(double a, double b) { return a + b; }\n}',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Les 4 piliers ; javac / JVM / bytecode\n✔ Classe, objet, new, attributs, méthodes\n✔ Constructeurs, surcharge de constructeurs, this, this(...)\n✔ private / protected / public, getters et setters, static, final\n✔ Références, ==, null, tableaux d’objets, composition (« a un »)\n✔ Héritage (« est un »), extends, super(...), ordre des constructeurs\n✔ Surcharge vs redéfinition, @Override, super.methode()',
          en: '✔ The 4 pillars; javac / JVM / bytecode\n✔ Class, object, new, attributes, methods\n✔ Constructors, constructor overloading, this, this(...)\n✔ private / protected / public, getters and setters, static, final\n✔ References, ==, null, arrays of objects, composition (“has a”)\n✔ Inheritance (“is a”), extends, super(...), constructor order\n✔ Overloading vs overriding, @Override, super.method()',
          tr: '✔ 4 temel ilke; javac / JVM / bytecode\n✔ Sınıf, nesne, new, özellikler, metotlar\n✔ Yapıcılar, yapıcı aşırı yükleme, this, this(...)\n✔ private / protected / public, getter ve setter, static, final\n✔ Referanslar, ==, null, nesne dizileri, bileşim (“sahiptir”)\n✔ Kalıtım (“bir ... dır”), extends, super(...), yapıcı sırası\n✔ Aşırı yükleme ve geçersiz kılma, @Override, super.metot()',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec les classes ci-dessus : (1) que renvoie new Chef().salaire() ? (2) Quelle méthode est appelée par somme(2, 3), somme(2, 3, 4) et somme(2.5, 1) ? Donne les résultats.',
          en: 'With the classes above: (1) what does new Manager().salary() return? (2) Which method do sum(2, 3), sum(2, 3, 4) and sum(2.5, 1) call? Give the results.',
          tr: 'Yukarıdaki sınıflarla: (1) new Mudur().maas() ne döndürür? (2) topla(2, 3), topla(2, 3, 4) ve topla(2.5, 1) hangi metodu çağırır? Sonuçları ver.',
        },
        solution: {
          fr: '(1) 25000.0 : super.salaire() donne 20000, plus 5000. (2) somme(2, 3) → la version (int, int) : 5. somme(2, 3, 4) → la version à trois int : 9. somme(2.5, 1) → la version (double, double), le 1 est converti en 1.0 : 3.5.',
          en: '(1) 25000.0: super.salary() gives 20000, plus 5000. (2) sum(2, 3) → the (int, int) version: 5. sum(2, 3, 4) → the three-int version: 9. sum(2.5, 1) → the (double, double) version, 1 is converted to 1.0: 3.5.',
          tr: '(1) 25000.0: super.maas() 20000 verir, artı 5000. (2) topla(2, 3) → (int, int) sürümü: 5. topla(2, 3, 4) → üç int’li sürüm: 9. topla(2.5, 1) → (double, double) sürümü, 1 değeri 1.0’a çevrilir: 3.5.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Une sous-classe réécrit une méthode héritée avec exactement la même signature. Comment s’appelle cela ?',
        en: 'A subclass rewrites an inherited method with exactly the same signature. What is this called?',
        tr: 'Bir alt sınıf kalıtılan bir metodu tamamen aynı imzayla yeniden yazıyor. Buna ne denir?',
      },
      options: {
        fr: ['La surcharge (overloading)', 'La redéfinition (overriding)', 'L’encapsulation'],
        en: ['Overloading', 'Overriding', 'Encapsulation'],
        tr: ['Aşırı yükleme (overloading)', 'Geçersiz kılma (overriding)', 'Kapsülleme'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Redéfinir = même signature dans une sous-classe. Surcharger = même nom avec des paramètres différents, ce qui n’exige aucun héritage.',
        en: 'Overriding = same signature in a subclass. Overloading = same name with different parameters, which needs no inheritance.',
        tr: 'Geçersiz kılma = alt sınıfta aynı imza. Aşırı yükleme = farklı parametrelerle aynı ad; kalıtım gerektirmez.',
      },
    },
  },
  {
    id: 'oop-w08-polymorphism',
    week: 8,
    title: { fr: 'Le polymorphisme', en: 'Polymorphism', tr: 'Çok biçimlilik' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une variable du type de la classe mère peut référencer un objet d’une sous-classe : Animal a = new Chien();. À l’exécution, Java appelle la méthode redéfinie de l’objet réel (liaison dynamique). En C++, il faut déclarer la méthode virtual ; en Java, toutes les méthodes non static, non final et non private sont « virtuelles » par défaut.',
          en: 'A variable of the parent type can reference a subclass object: Animal a = new Dog();. At run time, Java calls the real object’s overridden method (dynamic binding). In C++, the method must be declared virtual; in Java, every non-static, non-final, non-private method is “virtual” by default.',
          tr: 'Üst sınıf türünden bir değişken bir alt sınıf nesnesine başvurabilir: Hayvan h = new Kopek();. Çalışma anında Java gerçek nesnenin geçersiz kılınmış metodunu çağırır (dinamik bağlama). C++’ta metot virtual tanımlanmalıdır; Java’da static, final ve private olmayan tüm metotlar varsayılan olarak “sanal”dır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'class Forme { double aire() { return 0; } }\nclass Cercle extends Forme {\n    double r; Cercle(double r) { this.r = r; }\n    @Override double aire() { return Math.PI * r * r; }\n}\nclass Carre extends Forme {\n    double c; Carre(double c) { this.c = c; }\n    @Override double aire() { return c * c; }\n}\n\nForme[] formes = { new Carre(3), new Cercle(1), new Carre(2) };\ndouble total = 0;\nfor (Forme f : formes) total += f.aire();   // la bonne aire pour chacun\n\nif (formes[1] instanceof Cercle c) System.out.println(c.r);  // test du type réel',
          en: 'class Shape { double area() { return 0; } }\nclass Circle extends Shape {\n    double r; Circle(double r) { this.r = r; }\n    @Override double area() { return Math.PI * r * r; }\n}\nclass Square extends Shape {\n    double s; Square(double s) { this.s = s; }\n    @Override double area() { return s * s; }\n}\n\nShape[] shapes = { new Square(3), new Circle(1), new Square(2) };\ndouble total = 0;\nfor (Shape sh : shapes) total += sh.area();   // the right area for each\n\nif (shapes[1] instanceof Circle c) System.out.println(c.r);  // test the real type',
          tr: 'class Sekil { double alan() { return 0; } }\nclass Daire extends Sekil {\n    double r; Daire(double r) { this.r = r; }\n    @Override double alan() { return Math.PI * r * r; }\n}\nclass Kare extends Sekil {\n    double k; Kare(double k) { this.k = k; }\n    @Override double alan() { return k * k; }\n}\n\nSekil[] sekiller = { new Kare(3), new Daire(1), new Kare(2) };\ndouble toplam = 0;\nfor (Sekil s : sekiller) toplam += s.alan();   // her biri için doğru alan\n\nif (sekiller[1] instanceof Daire d) System.out.println(d.r);  // gerçek türü sına',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Que vaut total après la boucle (π ≈ 3,14) ? Pourquoi peut-on écrire formes[0].aire() mais pas formes[0].c ?',
          en: 'What is total after the loop (π ≈ 3.14)? Why can you write shapes[0].area() but not shapes[0].s?',
          tr: 'Döngüden sonra toplam kaçtır (π ≈ 3,14)? Neden sekiller[0].alan() yazılabilir ama sekiller[0].k yazılamaz?',
        },
        solution: {
          fr: 'Carré 3 : 9 ; cercle de rayon 1 : π ≈ 3,14 ; carré 2 : 4. Total ≈ 16,14. Le compilateur ne connaît que le type déclaré, Forme : aire() existe dans Forme (et la version de Carre est choisie à l’exécution), mais c n’existe que dans Carre. Il faut d’abord tester et convertir le type, par exemple avec instanceof.',
          en: 'Square 3: 9; circle of radius 1: π ≈ 3.14; square 2: 4. Total ≈ 16.14. The compiler only knows the declared type, Shape: area() exists in Shape (and Square’s version is chosen at run time), but s only exists in Square. The type must be tested and converted first, for example with instanceof.',
          tr: 'Kare 3: 9; yarıçapı 1 olan daire: π ≈ 3,14; kare 2: 4. Toplam ≈ 16,14. Derleyici yalnızca tanımlanan türü, Sekil’i bilir: alan() Sekil’de vardır (Kare’nin sürümü çalışma anında seçilir), ama k yalnızca Kare’de vardır. Önce tür sınanmalı ve dönüştürülmelidir, örneğin instanceof ile.',
        },
      },
    ],
    quiz: {
      question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
      code: 'class A { String name() { return "A"; } }\nclass B extends A { @Override String name() { return "B"; } }\n\nA x = new B();\nSystem.out.println(x.name());',
      options: { fr: ['A', 'B', 'Une erreur de compilation'], en: ['A', 'B', 'A compile error'], tr: ['A', 'B', 'Derleme hatası'] },
      answerIndex: 1,
      explanation: {
        fr: 'La variable est de type A, mais l’objet réel est un B : la liaison dynamique appelle la version redéfinie de B.',
        en: 'The variable has type A, but the real object is a B: dynamic binding calls B’s overriding version.',
        tr: 'Değişkenin türü A’dır ama gerçek nesne bir B’dir: dinamik bağlama B’nin geçersiz kılan sürümünü çağırır.',
      },
    },
  },
  {
    id: 'oop-w09-abstract-interfaces',
    week: 9,
    title: { fr: 'Classes abstraites et interfaces', en: 'Abstract classes and interfaces', tr: 'Soyut sınıflar ve arayüzler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une classe abstract ne peut pas être instanciée ; elle peut contenir des méthodes abstract (sans corps) que les sous-classes doivent écrire. Une interface décrit seulement ce qu’une classe sait faire ; une classe peut implémenter plusieurs interfaces (implements A, B). C’est la réponse de Java à l’héritage multiple et aux fonctions virtuelles pures du C++.',
          en: 'An abstract class cannot be instantiated; it can contain abstract methods (no body) that subclasses must write. An interface only describes what a class can do; a class can implement several interfaces (implements A, B). This is Java’s answer to multiple inheritance and C++ pure virtual functions.',
          tr: 'abstract bir sınıftan nesne oluşturulamaz; alt sınıfların yazması gereken abstract (gövdesiz) metotlar içerebilir. Arayüz yalnızca bir sınıfın neler yapabildiğini tanımlar; bir sınıf birden fazla arayüzü uygulayabilir (implements A, B). Bu, Java’nın çoklu kalıtıma ve C++’ın saf sanal fonksiyonlarına cevabıdır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'abstract class Forme {\n    abstract double aire();                     // pas de corps\n    void decrire() { System.out.println("Aire : " + aire()); }\n}\n\ninterface Dessinable { void dessiner(); }\ninterface Redimensionnable { void agrandir(double facteur); }\n\nclass Carre extends Forme implements Dessinable, Redimensionnable {\n    double c;\n    Carre(double c) { this.c = c; }\n    @Override double aire() { return c * c; }\n    @Override public void dessiner() { System.out.println("□"); }\n    @Override public void agrandir(double f) { c *= f; }\n}\n\n// new Forme();   → erreur : Forme est abstraite',
          en: 'abstract class Shape {\n    abstract double area();                     // no body\n    void describe() { System.out.println("Area: " + area()); }\n}\n\ninterface Drawable { void draw(); }\ninterface Resizable { void enlarge(double factor); }\n\nclass Square extends Shape implements Drawable, Resizable {\n    double s;\n    Square(double s) { this.s = s; }\n    @Override double area() { return s * s; }\n    @Override public void draw() { System.out.println("□"); }\n    @Override public void enlarge(double f) { s *= f; }\n}\n\n// new Shape();   → error: Shape is abstract',
          tr: 'abstract class Sekil {\n    abstract double alan();                     // gövde yok\n    void tanimla() { System.out.println("Alan: " + alan()); }\n}\n\ninterface Cizilebilir { void ciz(); }\ninterface Boyutlanabilir { void buyut(double carpan); }\n\nclass Kare extends Sekil implements Cizilebilir, Boyutlanabilir {\n    double k;\n    Kare(double k) { this.k = k; }\n    @Override double alan() { return k * k; }\n    @Override public void ciz() { System.out.println("□"); }\n    @Override public void buyut(double c) { k *= c; }\n}\n\n// new Sekil();   → hata: Sekil soyuttur',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Carre q = new Carre(2); q.agrandir(1.5); q.decrire();. Qu’est-ce qui s’affiche ? Et que se passe-t-il si Carre oublie d’écrire aire() ?',
          en: 'Square q = new Square(2); q.enlarge(1.5); q.describe();. What is printed? And what happens if Square forgets to write area()?',
          tr: 'Kare q = new Kare(2); q.buyut(1.5); q.tanimla();. Ne yazdırılır? Kare, alan() metodunu yazmayı unutursa ne olur?',
        },
        solution: {
          fr: 'Le côté passe de 2 à 2 × 1,5 = 3, donc « Aire : 9.0 ». decrire() est écrite une seule fois dans Forme et appelle la version de aire() de Carre. Si Carre n’écrit pas aire(), le code ne compile pas : une classe concrète doit implémenter toutes les méthodes abstraites (ou être elle-même déclarée abstract).',
          en: 'The side goes from 2 to 2 × 1.5 = 3, so “Area: 9.0”. describe() is written once in Shape and calls Square’s area(). If Square doesn’t write area(), the code doesn’t compile: a concrete class must implement every abstract method (or be declared abstract itself).',
          tr: 'Kenar 2’den 2 × 1,5 = 3’e çıkar, yani “Alan: 9.0”. tanimla() Sekil’de bir kez yazılmıştır ve Kare’nin alan() sürümünü çağırır. Kare alan() yazmazsa kod derlenmez: somut bir sınıf tüm soyut metotları uygulamalıdır (ya da kendisi abstract tanımlanmalıdır).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de classes mères et d’interfaces une classe Java peut-elle avoir ?',
        en: 'How many parent classes and interfaces can a Java class have?',
        tr: 'Bir Java sınıfının kaç üst sınıfı ve kaç arayüzü olabilir?',
      },
      options: {
        fr: ['Une classe mère, plusieurs interfaces', 'Plusieurs classes mères, une interface', 'Une seule des deux'],
        en: ['One parent class, several interfaces', 'Several parent classes, one interface', 'Only one of either'],
        tr: ['Bir üst sınıf, birden fazla arayüz', 'Birden fazla üst sınıf, bir arayüz', 'İkisinden yalnızca biri'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'extends n’accepte qu’une classe, mais implements accepte une liste d’interfaces. On évite ainsi les conflits de l’héritage multiple du C++.',
        en: 'extends takes only one class, but implements takes a list of interfaces. This avoids the conflicts of C++ multiple inheritance.',
        tr: 'extends yalnızca bir sınıf alır, ama implements bir arayüz listesi alır. Böylece C++’taki çoklu kalıtım çatışmaları önlenir.',
      },
    },
  },
  {
    id: 'oop-w10-object-methods',
    week: 10,
    title: {
      fr: 'equals, toString et compareTo (à la place de la surcharge d’opérateurs)',
      en: 'equals, toString and compareTo (instead of operator overloading)',
      tr: 'equals, toString ve compareTo (işleç aşırı yükleme yerine)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En C++, on surcharge ==, << ou < pour ses propres classes. Java ne permet pas de surcharger les opérateurs : on redéfinit des méthodes héritées de Object. equals compare le contenu (avec hashCode, qui doit rester cohérent), toString donne le texte de println, et compareTo (interface Comparable) donne l’ordre utilisé par les tris.',
          en: 'In C++, ==, << or < are overloaded for your own classes. Java doesn’t allow operator overloading: methods inherited from Object are overridden instead. equals compares contents (with hashCode, which must stay consistent), toString gives println’s text, and compareTo (Comparable interface) gives the order used by sorting.',
          tr: 'C++’ta kendi sınıflarınız için ==, << veya < aşırı yüklenir. Java işleç aşırı yüklemeye izin vermez: bunun yerine Object’ten kalıtılan metotlar geçersiz kılınır. equals içeriği karşılaştırır (tutarlı kalması gereken hashCode ile), toString println’in metnini verir ve compareTo (Comparable arayüzü) sıralamalarda kullanılan düzeni verir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'class Fraction implements Comparable<Fraction> {\n    final int num, den;\n    Fraction(int num, int den) { this.num = num; this.den = den; }\n\n    @Override public String toString() { return num + "/" + den; }\n\n    @Override public boolean equals(Object o) {\n        if (!(o instanceof Fraction f)) return false;\n        return num * f.den == f.num * den;          // 1/2 égale 2/4\n    }\n    @Override public int hashCode() {               // fractions égales → même code\n        int g = java.math.BigInteger.valueOf(num).gcd(java.math.BigInteger.valueOf(den)).intValue();\n        return java.util.Objects.hash(num / g, den / g);\n    }\n    @Override public int compareTo(Fraction f) {\n        return Integer.compare(num * f.den, f.num * den);   // < 0, 0 ou > 0\n    }\n}',
          en: 'class Fraction implements Comparable<Fraction> {\n    final int num, den;\n    Fraction(int num, int den) { this.num = num; this.den = den; }\n\n    @Override public String toString() { return num + "/" + den; }\n\n    @Override public boolean equals(Object o) {\n        if (!(o instanceof Fraction f)) return false;\n        return num * f.den == f.num * den;          // 1/2 equals 2/4\n    }\n    @Override public int hashCode() {               // equal fractions → same code\n        int g = java.math.BigInteger.valueOf(num).gcd(java.math.BigInteger.valueOf(den)).intValue();\n        return java.util.Objects.hash(num / g, den / g);\n    }\n    @Override public int compareTo(Fraction f) {\n        return Integer.compare(num * f.den, f.num * den);   // < 0, 0 or > 0\n    }\n}',
          tr: 'class Kesir implements Comparable<Kesir> {\n    final int pay, payda;\n    Kesir(int pay, int payda) { this.pay = pay; this.payda = payda; }\n\n    @Override public String toString() { return pay + "/" + payda; }\n\n    @Override public boolean equals(Object o) {\n        if (!(o instanceof Kesir k)) return false;\n        return pay * k.payda == k.pay * payda;      // 1/2, 2/4’e eşittir\n    }\n    @Override public int hashCode() {               // eşit kesirler → aynı kod\n        int g = java.math.BigInteger.valueOf(pay).gcd(java.math.BigInteger.valueOf(payda)).intValue();\n        return java.util.Objects.hash(pay / g, payda / g);\n    }\n    @Override public int compareTo(Kesir k) {\n        return Integer.compare(pay * k.payda, k.pay * payda);   // < 0, 0 veya > 0\n    }\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'a = new Fraction(1, 2), b = new Fraction(2, 4), c = new Fraction(3, 4). Donne a == b, a.equals(b), le signe de a.compareTo(c), et ce qu’affiche System.out.println(c). Que montrerait println(c) sans toString ?',
          en: 'a = new Fraction(1, 2), b = new Fraction(2, 4), c = new Fraction(3, 4). Give a == b, a.equals(b), the sign of a.compareTo(c), and what System.out.println(c) prints. What would println(c) show without toString?',
          tr: 'a = new Kesir(1, 2), b = new Kesir(2, 4), c = new Kesir(3, 4). a == b, a.equals(b), a.compareTo(c)’nin işaretini ve System.out.println(c)’nin ne yazdırdığını ver. toString olmasaydı println(c) ne gösterirdi?',
        },
        solution: {
          fr: 'a == b est false (deux objets). a.equals(b) est true : 1 × 4 = 2 × 2. a.compareTo(c) compare 1 × 4 = 4 et 3 × 2 = 6 : résultat négatif, donc 1/2 < 3/4. println(c) affiche 3/4. Sans toString, on verrait la version d’Object, du genre Fraction@1b6d3586 (nom de la classe et code de hachage).',
          en: 'a == b is false (two objects). a.equals(b) is true: 1 × 4 = 2 × 2. a.compareTo(c) compares 1 × 4 = 4 and 3 × 2 = 6: negative result, so 1/2 < 3/4. println(c) prints 3/4. Without toString, Object’s version would show, something like Fraction@1b6d3586 (class name and hash code).',
          tr: 'a == b false’tur (iki nesne). a.equals(b) true’dur: 1 × 4 = 2 × 2. a.compareTo(c), 1 × 4 = 4 ile 3 × 2 = 6’yı karşılaştırır: sonuç negatiftir, yani 1/2 < 3/4. println(c) 3/4 yazdırır. toString olmasaydı Object’in sürümü görünürdü, Kesir@1b6d3586 gibi (sınıf adı ve karma kodu).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Comment compare-t-on correctement le contenu de deux String en Java ?',
        en: 'How do you correctly compare the contents of two Strings in Java?',
        tr: 'Java’da iki String’in içeriği doğru olarak nasıl karşılaştırılır?',
      },
      options: { fr: ['s1 == s2', 's1.equals(s2)', 's1 = s2'], en: ['s1 == s2', 's1.equals(s2)', 's1 = s2'], tr: ['s1 == s2', 's1.equals(s2)', 's1 = s2'] },
      answerIndex: 1,
      explanation: {
        fr: 'String redéfinit equals pour comparer les caractères. == ne compare que les références et peut donner false pour deux textes identiques.',
        en: 'String overrides equals to compare characters. == only compares references and can give false for two identical texts.',
        tr: 'String, karakterleri karşılaştırmak için equals’u geçersiz kılar. == yalnızca referansları karşılaştırır ve aynı iki metin için false verebilir.',
      },
    },
  },
  {
    id: 'oop-w11-exceptions',
    week: 11,
    title: { fr: 'Les exceptions', en: 'Exceptions', tr: 'İstisnalar' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une exception signale une erreur pendant l’exécution. try contient le code risqué, catch traite l’erreur, finally s’exécute dans tous les cas. Les exceptions vérifiées (checked, comme IOException) doivent être attrapées ou déclarées avec throws ; les autres (RuntimeException, comme NullPointerException) non. On lance une exception avec throw, et on peut créer ses propres classes d’exception.',
          en: 'An exception signals an error at run time. try holds the risky code, catch handles the error, finally runs in every case. Checked exceptions (like IOException) must be caught or declared with throws; the others (RuntimeException, like NullPointerException) need not. An exception is thrown with throw, and custom exception classes can be created.',
          tr: 'İstisna, çalışma anındaki bir hatayı bildirir. try riskli kodu içerir, catch hatayı işler, finally her durumda çalışır. Denetlenen istisnalar (IOException gibi) yakalanmalı veya throws ile bildirilmelidir; diğerleri (NullPointerException gibi RuntimeException’lar) gerekmez. İstisna throw ile fırlatılır ve kendi istisna sınıflarımız oluşturulabilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'class SoldeInsuffisant extends Exception {\n    SoldeInsuffisant(String msg) { super(msg); }\n}\n\nvoid retirer(double montant) throws SoldeInsuffisant {\n    if (montant > solde) throw new SoldeInsuffisant("Il manque " + (montant - solde));\n    solde -= montant;\n}\n\ntry {\n    compte.retirer(500);\n    System.out.println("OK");\n} catch (SoldeInsuffisant e) {\n    System.out.println("Refusé : " + e.getMessage());\n} finally {\n    System.out.println("Fin de l’opération");\n}',
          en: 'class InsufficientFunds extends Exception {\n    InsufficientFunds(String msg) { super(msg); }\n}\n\nvoid withdraw(double amount) throws InsufficientFunds {\n    if (amount > balance) throw new InsufficientFunds("Missing " + (amount - balance));\n    balance -= amount;\n}\n\ntry {\n    account.withdraw(500);\n    System.out.println("OK");\n} catch (InsufficientFunds e) {\n    System.out.println("Refused: " + e.getMessage());\n} finally {\n    System.out.println("End of operation");\n}',
          tr: 'class YetersizBakiye extends Exception {\n    YetersizBakiye(String msg) { super(msg); }\n}\n\nvoid cek(double miktar) throws YetersizBakiye {\n    if (miktar > bakiye) throw new YetersizBakiye("Eksik: " + (miktar - bakiye));\n    bakiye -= miktar;\n}\n\ntry {\n    hesap.cek(500);\n    System.out.println("Tamam");\n} catch (YetersizBakiye e) {\n    System.out.println("Reddedildi: " + e.getMessage());\n} finally {\n    System.out.println("İşlem sonu");\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Le compte a un solde de 300. Qu’affiche le bloc try / catch / finally ci-dessus ? Et si le solde était de 800 ?',
          en: 'The account has a balance of 300. What does the try / catch / finally block above print? And with a balance of 800?',
          tr: 'Hesabın bakiyesi 300. Yukarıdaki try / catch / finally bloğu ne yazdırır? Bakiye 800 olsaydı?',
        },
        solution: {
          fr: 'Solde 300 : 500 > 300, l’exception est lancée avant « OK » ; affichage « Refusé : Il manque 200.0 » puis « Fin de l’opération ». Solde 800 : pas d’exception, le solde passe à 300 ; affichage « OK » puis « Fin de l’opération ». finally s’exécute dans les deux cas.',
          en: 'Balance 300: 500 > 300, the exception is thrown before “OK”; output “Refused: Missing 200.0” then “End of operation”. Balance 800: no exception, the balance becomes 300; output “OK” then “End of operation”. finally runs in both cases.',
          tr: 'Bakiye 300: 500 > 300, istisna “Tamam”dan önce fırlatılır; çıktı “Reddedildi: Eksik: 200.0”, sonra “İşlem sonu”. Bakiye 800: istisna yok, bakiye 300 olur; çıktı “Tamam”, sonra “İşlem sonu”. finally her iki durumda da çalışır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quand le bloc finally s’exécute-t-il ?',
        en: 'When does the finally block run?',
        tr: 'finally bloğu ne zaman çalışır?',
      },
      options: {
        fr: ['Seulement s’il y a une exception', 'Seulement s’il n’y en a pas', 'Dans tous les cas'],
        en: ['Only when there is an exception', 'Only when there is none', 'In every case'],
        tr: ['Yalnızca istisna varsa', 'Yalnızca istisna yoksa', 'Her durumda'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'finally s’exécute toujours, avec ou sans exception : on y place le nettoyage, comme fermer un fichier ou une connexion.',
        en: 'finally always runs, with or without an exception: cleanup goes there, like closing a file or a connection.',
        tr: 'finally istisna olsun olmasın her zaman çalışır: dosya veya bağlantı kapatma gibi temizlik işleri oraya konur.',
      },
    },
  },
  {
    id: 'oop-w12-generics',
    week: 12,
    title: {
      fr: 'Les génériques (équivalent des templates C++)',
      en: 'Generics (the counterpart of C++ templates)',
      tr: 'Jenerikler (C++ şablonlarının karşılığı)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un générique est une classe ou une méthode paramétrée par un type : Boite<T> fonctionne pour Boite<String>, Boite<Integer>… Le compilateur vérifie les types, et on évite les conversions forcées. Les génériques ne prennent que des types objets : Integer, Double, Character au lieu de int, double, char (conversion automatique, appelée autoboxing).',
          en: 'A generic is a class or method parameterized by a type: Box<T> works for Box<String>, Box<Integer>… The compiler checks the types, and casts are avoided. Generics only take object types: Integer, Double, Character instead of int, double, char (automatic conversion, called autoboxing).',
          tr: 'Jenerik, bir türle parametrelenmiş bir sınıf veya metottur: Kutu<T>, Kutu<String>, Kutu<Integer>… için çalışır. Derleyici türleri denetler ve zorla dönüştürmeler önlenir. Jenerikler yalnızca nesne türleri alır: int, double, char yerine Integer, Double, Character (otomatik dönüşüm, autoboxing).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'class Paire<A, B> {\n    private final A premier;\n    private final B second;\n    Paire(A premier, B second) { this.premier = premier; this.second = second; }\n    A getPremier() { return premier; }\n    B getSecond() { return second; }\n}\n\nPaire<String, Integer> p = new Paire<>("Ali", 85);\nint note = p.getSecond();          // pas de conversion forcée\n\nstatic <T extends Comparable<T>> T max(T a, T b) {   // méthode générique\n    return a.compareTo(b) >= 0 ? a : b;\n}\nmax(3, 7);            // 7\nmax("kiwi", "pomme"); // "pomme"',
          en: 'class Pair<A, B> {\n    private final A first;\n    private final B second;\n    Pair(A first, B second) { this.first = first; this.second = second; }\n    A getFirst() { return first; }\n    B getSecond() { return second; }\n}\n\nPair<String, Integer> p = new Pair<>("Ali", 85);\nint grade = p.getSecond();         // no cast needed\n\nstatic <T extends Comparable<T>> T max(T a, T b) {   // generic method\n    return a.compareTo(b) >= 0 ? a : b;\n}\nmax(3, 7);            // 7\nmax("kiwi", "pear");  // "pear"',
          tr: 'class Cift<A, B> {\n    private final A birinci;\n    private final B ikinci;\n    Cift(A birinci, B ikinci) { this.birinci = birinci; this.ikinci = ikinci; }\n    A getBirinci() { return birinci; }\n    B getIkinci() { return ikinci; }\n}\n\nCift<String, Integer> c = new Cift<>("Ali", 85);\nint not_ = c.getIkinci();          // zorla dönüştürme yok\n\nstatic <T extends Comparable<T>> T max(T a, T b) {   // jenerik metot\n    return a.compareTo(b) >= 0 ? a : b;\n}\nmax(3, 7);            // 7\nmax("elma", "kiraz"); // "kiraz"',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Que renvoient max(2.5, 1.8) et max("Zeynep", "ali") ? (2) Pourquoi Paire<int, int> est-il refusé ? (3) Quelle erreur le compilateur signale-t-il pour String s = p.getSecond(); avec la paire ci-dessus ?',
          en: '(1) What do max(2.5, 1.8) and max("Zeynep", "ali") return? (2) Why is Pair<int, int> refused? (3) What does the compiler report for String s = p.getSecond(); with the pair above?',
          tr: '(1) max(2.5, 1.8) ve max("Zeynep", "ali") ne döndürür? (2) Cift<int, int> neden reddedilir? (3) Yukarıdaki çiftle String s = c.getIkinci(); için derleyici hangi hatayı bildirir?',
        },
        solution: {
          fr: '(1) 2.5, puis "ali" : compareTo des String suit l’ordre des codes Unicode, et toutes les majuscules (Z = 90) passent avant les minuscules (a = 97). Donc "ali" est plus grand. (2) Les paramètres de type doivent être des classes : on écrit Paire<Integer, Integer>. (3) Une erreur de types incompatibles (Integer ne peut pas être converti en String), détectée dès la compilation.',
          en: '(1) 2.5, then "ali": String compareTo follows Unicode code order, and every uppercase letter (Z = 90) comes before lowercase (a = 97). So "ali" is larger. (2) Type parameters must be classes: write Pair<Integer, Integer>. (3) An incompatible types error (Integer cannot be converted to String), caught at compile time.',
          tr: '(1) 2.5, sonra "ali": String compareTo Unicode kod sırasını izler ve tüm büyük harfler (Z = 90) küçük harflerden (a = 97) önce gelir. Yani "ali" daha büyüktür. (2) Tür parametreleri sınıf olmalıdır: Cift<Integer, Integer> yazılır. (3) Uyumsuz türler hatası (Integer, String’e dönüştürülemez), derleme anında yakalanır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est le principal avantage des génériques ?',
        en: 'What is the main advantage of generics?',
        tr: 'Jeneriklerin temel avantajı nedir?',
      },
      options: {
        fr: ['Un programme plus rapide', 'Un seul code réutilisable pour plusieurs types, vérifié à la compilation', 'Ils remplacent l’héritage'],
        en: ['A faster program', 'One reusable code for several types, checked at compile time', 'They replace inheritance'],
        tr: ['Daha hızlı bir program', 'Birden fazla tür için derleme anında denetlenen tek bir yeniden kullanılabilir kod', 'Kalıtımın yerini alırlar'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'On écrit la classe une fois, et le compilateur refuse les mauvais types au lieu de laisser une erreur arriver à l’exécution.',
        en: 'The class is written once, and the compiler rejects wrong types instead of letting an error happen at run time.',
        tr: 'Sınıf bir kez yazılır ve derleyici, hatanın çalışma anında olmasına izin vermek yerine yanlış türleri reddeder.',
      },
    },
  },
  {
    id: 'oop-w13-collections',
    week: 13,
    title: {
      fr: 'Les collections (équivalent de la STL)',
      en: 'Collections (the counterpart of the STL)',
      tr: 'Koleksiyonlar (STL’nin karşılığı)',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'List<String> l = new ArrayList<>();     // liste ordonnée, doublons permis (vector)\nl.add("Ali"); l.add("Ayse"); l.add("Ali");\nl.get(1);          // "Ayse"\nl.size();          // 3\n\nSet<String> s = new HashSet<>(l);       // sans doublons (set)\ns.size();          // 2\n\nMap<String, Integer> notes = new HashMap<>();   // clé → valeur (map)\nnotes.put("Ali", 70);\nnotes.put("Ayse", 85);\nnotes.put("Ali", 90);                    // remplace 70\nnotes.getOrDefault("Emre", 0);           // 0\nfor (Map.Entry<String, Integer> e : notes.entrySet())\n    System.out.println(e.getKey() + " : " + e.getValue());',
          en: 'List<String> l = new ArrayList<>();     // ordered list, duplicates allowed (vector)\nl.add("Ali"); l.add("Ayse"); l.add("Ali");\nl.get(1);          // "Ayse"\nl.size();          // 3\n\nSet<String> s = new HashSet<>(l);       // no duplicates (set)\ns.size();          // 2\n\nMap<String, Integer> grades = new HashMap<>();  // key → value (map)\ngrades.put("Ali", 70);\ngrades.put("Ayse", 85);\ngrades.put("Ali", 90);                   // replaces 70\ngrades.getOrDefault("Emre", 0);          // 0\nfor (Map.Entry<String, Integer> e : grades.entrySet())\n    System.out.println(e.getKey() + ": " + e.getValue());',
          tr: 'List<String> l = new ArrayList<>();     // sıralı liste, tekrar serbest (vector)\nl.add("Ali"); l.add("Ayse"); l.add("Ali");\nl.get(1);          // "Ayse"\nl.size();          // 3\n\nSet<String> s = new HashSet<>(l);       // tekrarsız (set)\ns.size();          // 2\n\nMap<String, Integer> notlar = new HashMap<>();  // anahtar → değer (map)\nnotlar.put("Ali", 70);\nnotlar.put("Ayse", 85);\nnotlar.put("Ali", 90);                   // 70’in yerine geçer\nnotlar.getOrDefault("Emre", 0);          // 0\nfor (Map.Entry<String, Integer> e : notlar.entrySet())\n    System.out.println(e.getKey() + ": " + e.getValue());',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Choisir la bonne collection : ArrayList pour un accès rapide par indice, LinkedList pour beaucoup d’insertions en tête, HashSet pour tester rapidement l’appartenance, HashMap pour retrouver une valeur par sa clé, TreeMap / TreeSet quand on veut les clés triées.',
          en: 'Picking the right collection: ArrayList for fast index access, LinkedList for many insertions at the front, HashSet for fast membership tests, HashMap to find a value by its key, TreeMap / TreeSet when keys must stay sorted.',
          tr: 'Doğru koleksiyonu seçmek: indisle hızlı erişim için ArrayList, başa çok ekleme için LinkedList, hızlı üyelik sınaması için HashSet, anahtarla değer bulmak için HashMap, anahtarlar sıralı kalmalıysa TreeMap / TreeSet.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Écris le code qui compte le nombre d’apparitions de chaque mot dans String[] mots = {"a", "b", "a", "c", "a", "b"}. Que contient la Map à la fin ?',
          en: 'Write the code that counts how many times each word appears in String[] words = {"a", "b", "a", "c", "a", "b"}. What does the Map contain at the end?',
          tr: 'String[] kelimeler = {"a", "b", "a", "c", "a", "b"} dizisinde her kelimenin kaç kez geçtiğini sayan kodu yaz. Sonunda Map neyi içerir?',
        },
        solution: {
          fr: 'Map<String, Integer> compte = new HashMap<>(); for (String m : mots) compte.put(m, compte.getOrDefault(m, 0) + 1);. Résultat : a → 3, b → 2, c → 1. getOrDefault évite le cas où le mot n’est pas encore dans la Map (get renverrait null). On peut aussi écrire compte.merge(m, 1, Integer::sum).',
          en: 'Map<String, Integer> count = new HashMap<>(); for (String w : words) count.put(w, count.getOrDefault(w, 0) + 1);. Result: a → 3, b → 2, c → 1. getOrDefault handles a word not yet in the Map (get would return null). count.merge(w, 1, Integer::sum) also works.',
          tr: 'Map<String, Integer> sayac = new HashMap<>(); for (String k : kelimeler) sayac.put(k, sayac.getOrDefault(k, 0) + 1);. Sonuç: a → 3, b → 2, c → 1. getOrDefault, kelimenin henüz Map’te olmadığı durumu çözer (get null döndürürdü). sayac.merge(k, 1, Integer::sum) de kullanılabilir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle collection choisir pour stocker des numéros d’étudiants sans doublons ?',
        en: 'Which collection should store student numbers without duplicates?',
        tr: 'Öğrenci numaralarını tekrarsız saklamak için hangi koleksiyon seçilmelidir?',
      },
      options: { fr: ['ArrayList', 'HashSet', 'LinkedList'], en: ['ArrayList', 'HashSet', 'LinkedList'], tr: ['ArrayList', 'HashSet', 'LinkedList'] },
      answerIndex: 1,
      explanation: {
        fr: 'Un Set refuse les doublons : add renvoie false si l’élément y est déjà. Les listes, elles, acceptent les doublons.',
        en: 'A Set refuses duplicates: add returns false when the element is already there. Lists accept duplicates.',
        tr: 'Set tekrarları reddeder: eleman zaten varsa add false döndürür. Listeler ise tekrarları kabul eder.',
      },
    },
  },
  {
    id: 'oop-w14-lambdas',
    week: 14,
    title: {
      fr: 'Lambdas, tri avec Comparator et révision du final',
      en: 'Lambdas, sorting with Comparator and final review',
      tr: 'Lambdalar, Comparator ile sıralama ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une lambda est une petite fonction anonyme : (a, b) -> a + b. Elle remplace une classe qui n’implémente qu’une seule méthode (interface fonctionnelle), comme Comparator. Les streams enchaînent filtrer, transformer et réduire une collection en une seule expression.',
          en: 'A lambda is a small anonymous function: (a, b) -> a + b. It replaces a class that implements a single method (functional interface), like Comparator. Streams chain filtering, mapping and reducing a collection in one expression.',
          tr: 'Lambda küçük, isimsiz bir fonksiyondur: (a, b) -> a + b. Comparator gibi tek bir metot uygulayan bir sınıfın (fonksiyonel arayüz) yerini alır. Stream’ler bir koleksiyonu filtrelemeyi, dönüştürmeyi ve indirgemeyi tek bir ifadede zincirler.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'record Etudiant(String nom, int note) { }\n\nList<Etudiant> classe = new ArrayList<>(List.of(\n    new Etudiant("Ali", 72), new Etudiant("Ayse", 91),\n    new Etudiant("Emre", 58), new Etudiant("Zeynep", 85)));\n\nclasse.sort(Comparator.comparingInt(Etudiant::note).reversed());   // note décroissante\n\nList<String> admis = classe.stream()\n    .filter(e -> e.note() >= 60)\n    .map(Etudiant::nom)\n    .toList();\n\ndouble moyenne = classe.stream().mapToInt(Etudiant::note).average().orElse(0);',
          en: 'record Student(String name, int grade) { }\n\nList<Student> group = new ArrayList<>(List.of(\n    new Student("Ali", 72), new Student("Ayse", 91),\n    new Student("Emre", 58), new Student("Zeynep", 85)));\n\ngroup.sort(Comparator.comparingInt(Student::grade).reversed());   // grade descending\n\nList<String> passed = group.stream()\n    .filter(s -> s.grade() >= 60)\n    .map(Student::name)\n    .toList();\n\ndouble average = group.stream().mapToInt(Student::grade).average().orElse(0);',
          tr: 'record Ogrenci(String ad, int not_) { }\n\nList<Ogrenci> sinif = new ArrayList<>(List.of(\n    new Ogrenci("Ali", 72), new Ogrenci("Ayse", 91),\n    new Ogrenci("Emre", 58), new Ogrenci("Zeynep", 85)));\n\nsinif.sort(Comparator.comparingInt(Ogrenci::not_).reversed());   // nota göre azalan\n\nList<String> gecenler = sinif.stream()\n    .filter(o -> o.not_() >= 60)\n    .map(Ogrenci::ad)\n    .toList();\n\ndouble ortalama = sinif.stream().mapToInt(Ogrenci::not_).average().orElse(0);',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Polymorphisme : référence de type mère, liaison dynamique, instanceof\n✔ Classes abstraites, interfaces, implements multiple\n✔ equals / hashCode / toString / compareTo (au lieu des opérateurs C++)\n✔ Exceptions : try / catch / finally, throw, throws, checked / unchecked\n✔ Génériques : <T>, méthodes génériques, Integer au lieu de int\n✔ Collections : List, Set, Map, choisir la bonne\n✔ Lambdas, Comparator, streams (filter, map, average)',
          en: '✔ Polymorphism: parent-type reference, dynamic binding, instanceof\n✔ Abstract classes, interfaces, multiple implements\n✔ equals / hashCode / toString / compareTo (instead of C++ operators)\n✔ Exceptions: try / catch / finally, throw, throws, checked / unchecked\n✔ Generics: <T>, generic methods, Integer instead of int\n✔ Collections: List, Set, Map, choosing the right one\n✔ Lambdas, Comparator, streams (filter, map, average)',
          tr: '✔ Çok biçimlilik: üst tür referansı, dinamik bağlama, instanceof\n✔ Soyut sınıflar, arayüzler, çoklu implements\n✔ equals / hashCode / toString / compareTo (C++ işleçleri yerine)\n✔ İstisnalar: try / catch / finally, throw, throws, denetlenen / denetlenmeyen\n✔ Jenerikler: <T>, jenerik metotlar, int yerine Integer\n✔ Koleksiyonlar: List, Set, Map, doğru olanı seçmek\n✔ Lambdalar, Comparator, stream’ler (filter, map, average)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec la liste ci-dessus : (1) dans quel ordre sont les étudiants après le tri ? (2) Que contient admis ? (3) Que vaut moyenne ?',
          en: 'With the list above: (1) in which order are the students after sorting? (2) What does passed contain? (3) What is average?',
          tr: 'Yukarıdaki listeyle: (1) sıralamadan sonra öğrenciler hangi sıradadır? (2) gecenler neyi içerir? (3) ortalama kaçtır?',
        },
        solution: {
          fr: '(1) Note décroissante : Ayse 91, Zeynep 85, Ali 72, Emre 58. (2) Le filtre garde les notes ≥ 60, dans l’ordre trié : [Ayse, Zeynep, Ali]. (3) (72 + 91 + 58 + 85) / 4 = 306 / 4 = 76,5.',
          en: '(1) Grade descending: Ayse 91, Zeynep 85, Ali 72, Emre 58. (2) The filter keeps grades ≥ 60, in sorted order: [Ayse, Zeynep, Ali]. (3) (72 + 91 + 58 + 85) / 4 = 306 / 4 = 76.5.',
          tr: '(1) Nota göre azalan: Ayse 91, Zeynep 85, Ali 72, Emre 58. (2) Filtre ≥ 60 olan notları sıralı düzende tutar: [Ayse, Zeynep, Ali]. (3) (72 + 91 + 58 + 85) / 4 = 306 / 4 = 76,5.',
        },
      },
    ],
    quiz: {
      question: { fr: 'Que renvoie ce code ?', en: 'What does this code return?', tr: 'Bu kod ne döndürür?' },
      code: 'List.of(1, 2, 3, 4, 5).stream()\n    .filter(n -> n % 2 == 1)\n    .map(n -> n * n)\n    .toList();',
      options: { fr: ['[1, 9, 25]', '[4, 16]', '[1, 4, 9, 16, 25]'], en: ['[1, 9, 25]', '[4, 16]', '[1, 4, 9, 16, 25]'], tr: ['[1, 9, 25]', '[4, 16]', '[1, 4, 9, 16, 25]'] },
      answerIndex: 0,
      explanation: {
        fr: 'filter garde les impairs (1, 3, 5), puis map met chacun au carré : [1, 9, 25].',
        en: 'filter keeps the odd numbers (1, 3, 5), then map squares each one: [1, 9, 25].',
        tr: 'filter tek sayıları (1, 3, 5) tutar, sonra map her birinin karesini alır: [1, 9, 25].',
      },
    },
  },
];
