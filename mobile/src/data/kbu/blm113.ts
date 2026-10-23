/**
 * BLM113 Bilgisayar Mühendisliğine Giriş (Introduction to Computer Engineering), 14 weeks following
 * the KBU course contents: weeks 1–7 prepare the midterm, weeks 8–14 the final.
 */

import type { LessonSource } from '@/data/lessons';

export const blm113Lessons: LessonSource[] = [
  {
    id: 'ce-w01-profession',
    week: 1,
    title: {
      fr: 'Le génie informatique et ses métiers',
      en: 'Computer engineering and its careers',
      tr: 'Bilgisayar mühendisliği ve meslekleri',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le génie informatique conçoit des systèmes informatiques complets : le matériel (processeurs, circuits, objets connectés) et le logiciel (programmes, systèmes, applications). Il se situe entre l’électronique et l’informatique théorique.',
          en: 'Computer engineering designs complete computing systems: hardware (processors, circuits, connected devices) and software (programs, systems, applications). It sits between electronics and computer science.',
          tr: 'Bilgisayar mühendisliği eksiksiz bilişim sistemleri tasarlar: donanım (işlemciler, devreler, bağlı cihazlar) ve yazılım (programlar, sistemler, uygulamalar). Elektronik ile bilgisayar bilimi arasında yer alır.',
        },
      },
      { type: 'heading', text: { fr: 'Les grands domaines', en: 'The main fields', tr: 'Başlıca alanlar' } },
      {
        type: 'code',
        code: {
          fr: 'Logiciel        : applications web et mobiles, jeux, logiciels d’entreprise\nMatériel        : processeurs, systèmes embarqués, robotique\nRéseaux         : Internet, télécommunications, cloud\nDonnées et IA   : bases de données, apprentissage automatique\nSécurité        : protection des systèmes et des données',
          en: 'Software        : web and mobile apps, games, business software\nHardware        : processors, embedded systems, robotics\nNetworks        : the Internet, telecommunications, cloud\nData and AI     : databases, machine learning\nSecurity        : protecting systems and data',
          tr: 'Yazılım         : web ve mobil uygulamalar, oyunlar, kurumsal yazılımlar\nDonanım         : işlemciler, gömülü sistemler, robotik\nAğlar           : İnternet, telekomünikasyon, bulut\nVeri ve YZ      : veritabanları, makine öğrenmesi\nGüvenlik        : sistemlerin ve verilerin korunması',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Un ingénieur informaticien analyse un problème, conçoit une solution, la réalise, la teste et la maintient, souvent en équipe. Il doit aussi respecter des règles éthiques : vie privée, sécurité, droits d’auteur.',
          en: 'A computer engineer analyzes a problem, designs a solution, builds it, tests it and maintains it, often in a team. They must also follow ethical rules: privacy, security, copyright.',
          tr: 'Bir bilgisayar mühendisi bir problemi analiz eder, çözüm tasarlar, gerçekleştirir, test eder ve bakımını yapar; çoğu zaman ekip içinde çalışır. Ayrıca etik kurallara uymalıdır: mahremiyet, güvenlik, telif hakları.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Associe chaque métier à son domaine : (1) développeur d’applications mobiles, (2) ingénieur systèmes embarqués, (3) administrateur réseau, (4) data scientist, (5) analyste en cybersécurité.',
          en: 'Match each job with its field: (1) mobile app developer, (2) embedded systems engineer, (3) network administrator, (4) data scientist, (5) cybersecurity analyst.',
          tr: 'Her mesleği alanıyla eşleştir: (1) mobil uygulama geliştirici, (2) gömülü sistemler mühendisi, (3) ağ yöneticisi, (4) veri bilimci, (5) siber güvenlik analisti.',
        },
        solution: {
          fr: '(1) Logiciel. (2) Matériel : il programme des cartes électroniques (voitures, électroménager). (3) Réseaux. (4) Données et IA. (5) Sécurité. Dans la réalité, ces domaines se mélangent souvent : un développeur mobile doit aussi connaître la sécurité et les réseaux.',
          en: '(1) Software. (2) Hardware: they program electronic boards (cars, home appliances). (3) Networks. (4) Data and AI. (5) Security. In practice these fields often overlap: a mobile developer also needs security and networking skills.',
          tr: '(1) Yazılım. (2) Donanım: elektronik kartları programlar (otomobiller, ev aletleri). (3) Ağlar. (4) Veri ve YZ. (5) Güvenlik. Gerçekte bu alanlar sıkça iç içedir: mobil geliştirici güvenlik ve ağ bilgisine de ihtiyaç duyar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel métier relève surtout du matériel ?',
        en: 'Which job is mainly about hardware?',
        tr: 'Hangi meslek ağırlıklı olarak donanımla ilgilidir?',
      },
      options: {
        fr: ['Développeur web', 'Ingénieur en systèmes embarqués', 'Data scientist'],
        en: ['Web developer', 'Embedded systems engineer', 'Data scientist'],
        tr: ['Web geliştirici', 'Gömülü sistemler mühendisi', 'Veri bilimci'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Les systèmes embarqués sont des ordinateurs intégrés à des appareils : l’ingénieur travaille au plus près des circuits et du processeur.',
        en: 'Embedded systems are computers built into devices: the engineer works closest to the circuits and the processor.',
        tr: 'Gömülü sistemler cihazlara yerleştirilmiş bilgisayarlardır: mühendis devrelere ve işlemciye en yakın şekilde çalışır.',
      },
    },
  },
  {
    id: 'ce-w02-terms',
    week: 2,
    title: {
      fr: 'Termes de base et histoire de l’ordinateur',
      en: 'Basic terms and computer history',
      tr: 'Temel terimler ve bilgisayarın tarihçesi',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un ordinateur est une machine qui reçoit des données, les traite selon un programme, les stocke et produit des résultats. Toute information y est codée avec des bits : un bit vaut 0 ou 1, et un octet (byte) contient 8 bits.',
          en: 'A computer is a machine that takes in data, processes it following a program, stores it and produces results. All information is coded with bits: a bit is 0 or 1, and a byte holds 8 bits.',
          tr: 'Bilgisayar, verileri alan, bir programa göre işleyen, saklayan ve sonuç üreten bir makinedir. Tüm bilgiler bitlerle kodlanır: bir bit 0 veya 1’dir, bir bayt (byte) 8 bit içerir.',
        },
      },
      { type: 'heading', text: { fr: 'Les unités', en: 'Units', tr: 'Birimler' } },
      {
        type: 'code',
        code: {
          fr: '1 octet (B)   = 8 bits (b)\n1 Ko (KB)     = 1024 octets   (2¹⁰)\n1 Mo (MB)     = 1024 Ko       (2²⁰ octets)\n1 Go (GB)     = 1024 Mo       (2³⁰ octets)\n1 To (TB)     = 1024 Go\n\nAttention : les vendeurs de disques comptent souvent 1 Go = 1000 Mo,\net les débits sont en bits : 100 Mbit/s = 12,5 Mo/s.',
          en: '1 byte (B)    = 8 bits (b)\n1 KB          = 1024 bytes    (2¹⁰)\n1 MB          = 1024 KB       (2²⁰ bytes)\n1 GB          = 1024 MB       (2³⁰ bytes)\n1 TB          = 1024 GB\n\nNote: disk makers often count 1 GB = 1000 MB,\nand speeds are in bits: 100 Mbit/s = 12.5 MB/s.',
          tr: '1 bayt (B)    = 8 bit (b)\n1 KB          = 1024 bayt     (2¹⁰)\n1 MB          = 1024 KB       (2²⁰ bayt)\n1 GB          = 1024 MB       (2³⁰ bayt)\n1 TB          = 1024 GB\n\nDikkat: disk üreticileri çoğu zaman 1 GB = 1000 MB sayar,\nhızlar ise bit cinsindendir: 100 Mbit/s = 12,5 MB/s.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Les générations d’ordinateurs', en: 'Computer generations', tr: 'Bilgisayar nesilleri' },
      },
      {
        type: 'text',
        text: {
          fr: '1re génération (années 1940-50) : tubes à vide, comme l’ENIAC. 2e : transistors. 3e : circuits intégrés. 4e (depuis les années 1970) : microprocesseurs, puis ordinateurs personnels, smartphones et cloud. À chaque génération, les machines deviennent plus petites, plus rapides et moins chères.',
          en: '1st generation (1940s–50s): vacuum tubes, like ENIAC. 2nd: transistors. 3rd: integrated circuits. 4th (since the 1970s): microprocessors, then personal computers, smartphones and the cloud. Each generation made machines smaller, faster and cheaper.',
          tr: '1. nesil (1940-50’ler): ENIAC gibi vakum tüplü. 2. nesil: transistörler. 3. nesil: entegre devreler. 4. nesil (1970’lerden beri): mikroişlemciler, ardından kişisel bilgisayarlar, akıllı telefonlar ve bulut. Her nesilde makineler daha küçük, daha hızlı ve daha ucuz oldu.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Combien de Mo fait un fichier de 2 Go ? (2) Avec une connexion à 80 Mbit/s, combien de secondes faut-il au minimum pour télécharger un fichier de 100 Mo ?',
          en: '(1) How many MB is a 2 GB file? (2) With an 80 Mbit/s connection, at least how many seconds does it take to download a 100 MB file?',
          tr: '(1) 2 GB’lık bir dosya kaç MB’tır? (2) 80 Mbit/s’lik bir bağlantıyla 100 MB’lık bir dosyayı indirmek en az kaç saniye sürer?',
        },
        solution: {
          fr: '(1) 2 × 1024 = 2048 Mo. (2) On convertit le débit en octets : 80 Mbit/s ÷ 8 = 10 Mo/s. Temps = 100 Mo ÷ 10 Mo/s = 10 secondes. Piège classique : oublier de diviser par 8, ce qui donnerait 1,25 s.',
          en: '(1) 2 × 1024 = 2048 MB. (2) Convert the speed to bytes: 80 Mbit/s ÷ 8 = 10 MB/s. Time = 100 MB ÷ 10 MB/s = 10 seconds. Classic trap: forgetting to divide by 8, which would give 1.25 s.',
          tr: '(1) 2 × 1024 = 2048 MB. (2) Hız bayta çevrilir: 80 Mbit/s ÷ 8 = 10 MB/s. Süre = 100 MB ÷ 10 MB/s = 10 saniye. Klasik tuzak: 8’e bölmeyi unutmak, bu 1,25 s verirdi.',
        },
      },
    ],
    quiz: {
      question: { fr: 'Combien de bits y a-t-il dans 4 octets ?', en: 'How many bits are there in 4 bytes?', tr: '4 baytta kaç bit vardır?' },
      options: { fr: ['4', '32', '1024'], en: ['4', '32', '1024'], tr: ['4', '32', '1024'] },
      answerIndex: 1,
      explanation: {
        fr: 'Un octet contient 8 bits : 4 × 8 = 32 bits.',
        en: 'A byte holds 8 bits: 4 × 8 = 32 bits.',
        tr: 'Bir bayt 8 bit içerir: 4 × 8 = 32 bit.',
      },
    },
  },
  {
    id: 'ce-w03-von-neumann',
    week: 3,
    title: {
      fr: 'Comment fonctionne un ordinateur',
      en: 'How a computer works',
      tr: 'Bilgisayar nasıl çalışır',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Presque tous les ordinateurs suivent le modèle de von Neumann : un processeur (CPU), une mémoire qui contient à la fois le programme et les données, des entrées-sorties, et des bus qui relient le tout.',
          en: 'Almost every computer follows the von Neumann model: a processor (CPU), a memory that holds both the program and the data, input/output devices, and buses connecting everything.',
          tr: 'Bilgisayarların neredeyse tamamı von Neumann modelini izler: bir işlemci (CPU), hem programı hem verileri tutan bir bellek, giriş/çıkış birimleri ve hepsini birbirine bağlayan yollar (bus).',
        },
      },
      {
        type: 'code',
        code: {
          fr: '            +---------------------------+\n Entrées -> |  CPU                      | -> Sorties\n            |   UC  : unité de contrôle |\n            |   UAL : calculs, logique  |\n            |   registres (PC, IR…)     |\n            +-------------+-------------+\n                          | bus\n            +-------------+-------------+\n            |  Mémoire : programme      |\n            |            + données      |\n            +---------------------------+',
          en: '            +---------------------------+\n Input  ->  |  CPU                      | -> Output\n            |   CU  : control unit      |\n            |   ALU : arithmetic, logic |\n            |   registers (PC, IR…)     |\n            +-------------+-------------+\n                          | bus\n            +-------------+-------------+\n            |  Memory : program         |\n            |           + data          |\n            +---------------------------+',
          tr: '            +---------------------------+\n Giriş  ->  |  CPU                      | -> Çıkış\n            |   CU  : kontrol birimi    |\n            |   ALU : aritmetik, mantık |\n            |   yazmaçlar (PC, IR…)     |\n            +-------------+-------------+\n                          | yol (bus)\n            +-------------+-------------+\n            |  Bellek : program         |\n            |           + veriler       |\n            +---------------------------+',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Le cycle d’une instruction',
          en: 'The instruction cycle',
          tr: 'Komut döngüsü',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Le processeur répète sans arrêt trois étapes. Chercher (fetch) : lire en mémoire l’instruction dont l’adresse est dans le compteur de programme (PC), la placer dans le registre d’instruction (IR) et avancer le PC. Décoder (decode) : l’unité de contrôle comprend l’instruction. Exécuter (execute) : l’UAL calcule, ou une donnée est lue ou écrite.',
          en: 'The processor repeats three steps endlessly. Fetch: read from memory the instruction whose address is in the program counter (PC), put it in the instruction register (IR) and advance the PC. Decode: the control unit works out the instruction. Execute: the ALU computes, or data is read or written.',
          tr: 'İşlemci üç adımı durmadan tekrarlar. Getir (fetch): adresi program sayacında (PC) olan komutu bellekten oku, komut yazmacına (IR) koy ve PC’yi ilerlet. Çöz (decode): kontrol birimi komutu anlar. Yürüt (execute): ALU hesaplar ya da bir veri okunur veya yazılır.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Remets dans l’ordre : (a) l’UAL additionne deux nombres, (b) le PC passe à l’instruction suivante, (c) l’instruction est copiée de la mémoire vers l’IR, (d) l’unité de contrôle décode l’instruction.',
          en: 'Put in order: (a) the ALU adds two numbers, (b) the PC moves to the next instruction, (c) the instruction is copied from memory to the IR, (d) the control unit decodes the instruction.',
          tr: 'Sıraya koy: (a) ALU iki sayıyı toplar, (b) PC bir sonraki komuta geçer, (c) komut bellekten IR’ye kopyalanır, (d) kontrol birimi komutu çözer.',
        },
        solution: {
          fr: 'c → b → d → a. On cherche d’abord l’instruction (c) et on avance le PC pendant cette étape (b), puis on décode (d), puis on exécute (a). Ensuite le cycle recommence avec la nouvelle adresse du PC.',
          en: 'c → b → d → a. First fetch the instruction (c) and advance the PC during that step (b), then decode (d), then execute (a). Then the cycle starts again at the PC’s new address.',
          tr: 'c → b → d → a. Önce komut getirilir (c) ve bu adımda PC ilerletilir (b), sonra çözülür (d), sonra yürütülür (a). Ardından döngü PC’nin yeni adresiyle yeniden başlar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que contient le compteur de programme (PC) ?',
        en: 'What does the program counter (PC) hold?',
        tr: 'Program sayacı (PC) neyi tutar?',
      },
      options: {
        fr: ['Le résultat du dernier calcul', 'L’adresse de la prochaine instruction', 'Le nombre de programmes ouverts'],
        en: ['The result of the last computation', 'The address of the next instruction', 'The number of open programs'],
        tr: ['Son hesaplamanın sonucu', 'Bir sonraki komutun adresi', 'Açık programların sayısı'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le PC indique où se trouve la prochaine instruction à chercher en mémoire. Il avance à chaque cycle, sauf lors d’un saut.',
        en: 'The PC tells where the next instruction to fetch is in memory. It advances every cycle, except on a jump.',
        tr: 'PC, bellekten getirilecek bir sonraki komutun nerede olduğunu gösterir. Atlama dışında her döngüde ilerler.',
      },
    },
  },
  {
    id: 'ce-w04-number-systems',
    week: 4,
    title: { fr: 'Systèmes de numération', en: 'Number systems', tr: 'Sayı sistemleri' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un nombre s’écrit dans une base b avec des chiffres de 0 à b − 1 ; chaque position vaut une puissance de b. L’ordinateur utilise la base 2 (binaire). On utilise aussi la base 8 (octal) et surtout la base 16 (hexadécimal, chiffres 0-9 puis A-F), plus courte à lire.',
          en: 'A number is written in base b with digits 0 to b − 1; each position is worth a power of b. Computers use base 2 (binary). Base 8 (octal) and above all base 16 (hexadecimal, digits 0-9 then A-F) are also used, as they are shorter to read.',
          tr: 'Bir sayı b tabanında 0’dan b − 1’e kadar rakamlarla yazılır; her basamak b’nin bir kuvveti değerindedir. Bilgisayar 2 tabanını (ikilik) kullanır. Ayrıca 8 tabanı (sekizlik) ve özellikle okunması daha kısa olan 16 tabanı (onaltılık, 0-9 sonra A-F) kullanılır.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Conversions', en: 'Conversions', tr: 'Dönüşümler' },
      },
      {
        type: 'code',
        code: {
          fr: 'Binaire → décimal : on additionne les puissances de 2\n1011₂ = 8 + 0 + 2 + 1 = 11₁₀\n\nDécimal → binaire : divisions successives par 2\n13 ÷ 2 = 6 reste 1\n 6 ÷ 2 = 3 reste 0\n 3 ÷ 2 = 1 reste 1\n 1 ÷ 2 = 0 reste 1   → on lit les restes de bas en haut : 1101₂\n\nBinaire → hexadécimal : groupes de 4 bits\n1010 1111₂ = A F = AF₁₆        (groupes de 3 bits pour l’octal)',
          en: 'Binary → decimal: add the powers of 2\n1011₂ = 8 + 0 + 2 + 1 = 11₁₀\n\nDecimal → binary: repeated division by 2\n13 ÷ 2 = 6 remainder 1\n 6 ÷ 2 = 3 remainder 0\n 3 ÷ 2 = 1 remainder 1\n 1 ÷ 2 = 0 remainder 1   → read the remainders bottom to top: 1101₂\n\nBinary → hexadecimal: groups of 4 bits\n1010 1111₂ = A F = AF₁₆        (groups of 3 bits for octal)',
          tr: 'İkilik → onluk: 2’nin kuvvetleri toplanır\n1011₂ = 8 + 0 + 2 + 1 = 11₁₀\n\nOnluk → ikilik: art arda 2’ye bölme\n13 ÷ 2 = 6 kalan 1\n 6 ÷ 2 = 3 kalan 0\n 3 ÷ 2 = 1 kalan 1\n 1 ÷ 2 = 0 kalan 1   → kalanlar aşağıdan yukarı okunur: 1101₂\n\nİkilik → onaltılık: 4 bitlik gruplar\n1010 1111₂ = A F = AF₁₆        (sekizlik için 3 bitlik gruplar)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Convertis 156₁₀ en binaire, en hexadécimal et en octal.',
          en: 'Convert 156₁₀ to binary, hexadecimal and octal.',
          tr: '156₁₀ sayısını ikilik, onaltılık ve sekizlik tabana çevir.',
        },
        solution: {
          fr: 'Binaire : 156 = 128 + 16 + 8 + 4, donc 10011100₂. Hexadécimal : groupes de 4 bits 1001 | 1100 = 9 | C, donc 9C₁₆. Octal : groupes de 3 bits depuis la droite 010 | 011 | 100 = 2 | 3 | 4, donc 234₈. Vérification : 2 × 64 + 3 × 8 + 4 = 156.',
          en: 'Binary: 156 = 128 + 16 + 8 + 4, so 10011100₂. Hexadecimal: groups of 4 bits 1001 | 1100 = 9 | C, so 9C₁₆. Octal: groups of 3 bits from the right 010 | 011 | 100 = 2 | 3 | 4, so 234₈. Check: 2 × 64 + 3 × 8 + 4 = 156.',
          tr: 'İkilik: 156 = 128 + 16 + 8 + 4, yani 10011100₂. Onaltılık: 4 bitlik gruplar 1001 | 1100 = 9 | C, yani 9C₁₆. Sekizlik: sağdan 3 bitlik gruplar 010 | 011 | 100 = 2 | 3 | 4, yani 234₈. Kontrol: 2 × 64 + 3 × 8 + 4 = 156.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien vaut FF₁₆ en décimal ?',
        en: 'What is FF₁₆ in decimal?',
        tr: 'FF₁₆ onluk sistemde kaçtır?',
      },
      options: { fr: ['255', '256', '1515'], en: ['255', '256', '1515'], tr: ['255', '256', '1515'] },
      answerIndex: 0,
      explanation: {
        fr: 'F vaut 15 : 15 × 16 + 15 = 255. C’est aussi 11111111₂, la plus grande valeur sur un octet.',
        en: 'F is 15: 15 × 16 + 15 = 255. It is also 11111111₂, the largest value in one byte.',
        tr: 'F, 15’tir: 15 × 16 + 15 = 255. Bu aynı zamanda 11111111₂’dir, bir bayttaki en büyük değer.',
      },
    },
  },
  {
    id: 'ce-w05-binary-arithmetic',
    week: 5,
    title: {
      fr: 'Arithmétique binaire et codage des données',
      en: 'Binary arithmetic and data encoding',
      tr: 'İkilik aritmetik ve veri gösterimi',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’addition binaire se pose comme en décimal : 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (on écrit 0 et on retient 1), 1 + 1 + 1 = 11.',
          en: 'Binary addition works like decimal: 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (write 0, carry 1), 1 + 1 + 1 = 11.',
          tr: 'İkilik toplama onluktaki gibi yapılır: 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (0 yaz, 1 elde), 1 + 1 + 1 = 11.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Nombres négatifs : le complément à 2', en: 'Negative numbers: two’s complement', tr: 'Negatif sayılar: ikiye tümleyen' },
      },
      {
        type: 'text',
        text: {
          fr: 'Pour écrire −x sur n bits, on inverse tous les bits de x puis on ajoute 1. Le bit de gauche indique le signe (1 = négatif). Sur 8 bits, on représente les nombres de −128 à 127. Une soustraction a − b devient une addition a + (−b), et on ignore la retenue qui sort à gauche.',
          en: 'To write −x on n bits, flip every bit of x then add 1. The leftmost bit gives the sign (1 = negative). On 8 bits, numbers from −128 to 127 can be represented. A subtraction a − b becomes an addition a + (−b), ignoring the carry out on the left.',
          tr: 'n bit üzerinde −x yazmak için x’in tüm bitleri ters çevrilir, sonra 1 eklenir. En soldaki bit işareti gösterir (1 = negatif). 8 bit üzerinde −128 ile 127 arası sayılar gösterilebilir. a − b çıkarması a + (−b) toplamasına dönüşür ve soldan taşan elde yok sayılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: ' 5 = 00000101\ninverser : 11111010\n+1       : 11111011  = −5\n\nCaractères (ASCII) :\n\'A\' = 65 = 01000001     \'a\' = 97     \'0\' = 48\nUnicode (UTF-8) code aussi ç, ğ, ş, é, 你…',
          en: ' 5 = 00000101\nflip     : 11111010\n+1       : 11111011  = −5\n\nCharacters (ASCII):\n\'A\' = 65 = 01000001     \'a\' = 97     \'0\' = 48\nUnicode (UTF-8) also encodes ç, ğ, ş, é, 你…',
          tr: ' 5 = 00000101\nters çevir : 11111010\n+1         : 11111011  = −5\n\nKarakterler (ASCII):\n\'A\' = 65 = 01000001     \'a\' = 97     \'0\' = 48\nUnicode (UTF-8) ç, ğ, ş, é, 你… karakterlerini de kodlar',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Calcule 13 − 7 en complément à 2 sur 8 bits.',
          en: 'Compute 13 − 7 using two’s complement on 8 bits.',
          tr: '13 − 7 işlemini 8 bit ikiye tümleyen ile hesapla.',
        },
        solution: {
          fr: '13 = 00001101. 7 = 00000111, inversé 11111000, +1 : −7 = 11111001. Addition : 00001101 + 11111001 = 1 00000110. On ignore la 9e retenue : 00000110 = 6. Le résultat est bien 13 − 7 = 6.',
          en: '13 = 00001101. 7 = 00000111, flipped 11111000, +1: −7 = 11111001. Addition: 00001101 + 11111001 = 1 00000110. Ignore the 9th carry: 00000110 = 6. The result is indeed 13 − 7 = 6.',
          tr: '13 = 00001101. 7 = 00000111, ters çevrilmiş 11111000, +1: −7 = 11111001. Toplama: 00001101 + 11111001 = 1 00000110. 9. elde yok sayılır: 00000110 = 6. Sonuç gerçekten 13 − 7 = 6.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est l’écriture de −5 en complément à 2 sur 8 bits ?',
        en: 'What is −5 in two’s complement on 8 bits?',
        tr: '−5’in 8 bit ikiye tümleyen gösterimi nedir?',
      },
      options: {
        fr: ['11111010', '11111011', '10000101'],
        en: ['11111010', '11111011', '10000101'],
        tr: ['11111010', '11111011', '10000101'],
      },
      answerIndex: 1,
      explanation: {
        fr: '5 = 00000101, inversé 11111010, puis +1 : 11111011. 11111010 est seulement l’inversion (complément à 1) et 10000101 le « signe + valeur ».',
        en: '5 = 00000101, flipped 11111010, then +1: 11111011. 11111010 is only the flip (one’s complement) and 10000101 is “sign + magnitude”.',
        tr: '5 = 00000101, ters çevrilmiş 11111010, sonra +1: 11111011. 11111010 yalnızca ters çevirmedir (bire tümleyen), 10000101 ise “işaret + büyüklük” gösterimidir.',
      },
    },
  },
  {
    id: 'ce-w06-hardware',
    week: 6,
    title: { fr: 'Le matériel', en: 'Hardware', tr: 'Donanım' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le processeur (CPU) exécute les instructions ; sa vitesse dépend de sa fréquence (en GHz) et de son nombre de cœurs. La carte mère relie tous les composants. Les périphériques d’entrée (clavier, souris, micro) et de sortie (écran, imprimante) échangent avec l’utilisateur.',
          en: 'The processor (CPU) executes the instructions; its speed depends on its clock frequency (in GHz) and number of cores. The motherboard connects every component. Input devices (keyboard, mouse, microphone) and output devices (screen, printer) talk with the user.',
          tr: 'İşlemci (CPU) komutları yürütür; hızı saat frekansına (GHz) ve çekirdek sayısına bağlıdır. Anakart tüm bileşenleri birbirine bağlar. Giriş birimleri (klavye, fare, mikrofon) ve çıkış birimleri (ekran, yazıcı) kullanıcıyla iletişim kurar.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'La hiérarchie mémoire', en: 'The memory hierarchy', tr: 'Bellek hiyerarşisi' },
      },
      {
        type: 'code',
        code: {
          fr: 'plus rapide, plus petit, plus cher\n  Registres     (dans le CPU, quelques octets)\n  Cache L1-L3   (quelques Mo)\n  RAM           (quelques Go, volatile)\n  SSD           (centaines de Go, permanent)\n  Disque dur    (To, permanent, mécanique)\nplus lent, plus grand, moins cher',
          en: 'faster, smaller, more expensive\n  Registers     (inside the CPU, a few bytes)\n  Cache L1-L3   (a few MB)\n  RAM           (a few GB, volatile)\n  SSD           (hundreds of GB, permanent)\n  Hard disk     (TB, permanent, mechanical)\nslower, larger, cheaper',
          tr: 'daha hızlı, daha küçük, daha pahalı\n  Yazmaçlar     (CPU içinde, birkaç bayt)\n  Önbellek L1-L3 (birkaç MB)\n  RAM           (birkaç GB, uçucu)\n  SSD           (yüzlerce GB, kalıcı)\n  Sabit disk    (TB, kalıcı, mekanik)\ndaha yavaş, daha büyük, daha ucuz',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'La RAM est volatile : elle perd son contenu quand on coupe le courant. La ROM et les disques sont permanents. Le cache garde près du processeur les données utilisées récemment, pour éviter d’attendre la RAM.',
          en: 'RAM is volatile: it loses its content when the power is cut. ROM and disks are permanent. The cache keeps recently used data close to the processor, to avoid waiting for RAM.',
          tr: 'RAM uçucudur: elektrik kesilince içeriğini kaybeder. ROM ve diskler kalıcıdır. Önbellek, RAM’i beklememek için yakın zamanda kullanılan verileri işlemcinin yakınında tutar.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Classe du plus rapide au plus lent : SSD, registre, RAM, disque dur, cache L2. Lesquels gardent les données sans courant ?',
          en: 'Sort from fastest to slowest: SSD, register, RAM, hard disk, L2 cache. Which ones keep data without power?',
          tr: 'En hızlıdan en yavaşa sırala: SSD, yazmaç, RAM, sabit disk, L2 önbellek. Hangileri elektrik olmadan veriyi korur?',
        },
        solution: {
          fr: 'Registre → cache L2 → RAM → SSD → disque dur. Seuls le SSD et le disque dur sont permanents ; le registre, le cache et la RAM sont volatiles.',
          en: 'Register → L2 cache → RAM → SSD → hard disk. Only the SSD and the hard disk are permanent; the register, cache and RAM are volatile.',
          tr: 'Yazmaç → L2 önbellek → RAM → SSD → sabit disk. Yalnızca SSD ve sabit disk kalıcıdır; yazmaç, önbellek ve RAM uçucudur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle mémoire perd son contenu quand on éteint l’ordinateur ?',
        en: 'Which memory loses its content when the computer is turned off?',
        tr: 'Bilgisayar kapatılınca hangi bellek içeriğini kaybeder?',
      },
      options: { fr: ['La RAM', 'Le SSD', 'Le disque dur'], en: ['RAM', 'SSD', 'Hard disk'], tr: ['RAM', 'SSD', 'Sabit disk'] },
      answerIndex: 0,
      explanation: {
        fr: 'La RAM est volatile. C’est pour cela qu’il faut enregistrer un document : il passe alors de la RAM au disque.',
        en: 'RAM is volatile. That is why you must save a document: it then goes from RAM to the disk.',
        tr: 'RAM uçucudur. Bu yüzden bir belgeyi kaydetmek gerekir: belge RAM’den diske aktarılır.',
      },
    },
  },
  {
    id: 'ce-w07-software',
    week: 7,
    title: {
      fr: 'Le logiciel et révision de la vize',
      en: 'Software and midterm review',
      tr: 'Yazılım ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le logiciel système gère la machine : système d’exploitation, pilotes, utilitaires. Le logiciel d’application répond aux besoins de l’utilisateur : navigateur, traitement de texte, jeux. Les programmes sont écrits dans des langages de bas niveau (assembleur, proche du matériel) ou de haut niveau (C, Java, Python, plus proches de l’humain).',
          en: 'System software runs the machine: operating system, drivers, utilities. Application software serves the user: browser, word processor, games. Programs are written in low-level languages (assembly, close to the hardware) or high-level languages (C, Java, Python, closer to humans).',
          tr: 'Sistem yazılımı makineyi yönetir: işletim sistemi, sürücüler, yardımcı programlar. Uygulama yazılımı kullanıcının ihtiyaçlarını karşılar: tarayıcı, kelime işlemci, oyunlar. Programlar düşük seviyeli (donanıma yakın assembly) veya yüksek seviyeli dillerle (C, Java, Python, insana daha yakın) yazılır.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Compilateur ou interpréteur', en: 'Compiler or interpreter', tr: 'Derleyici veya yorumlayıcı' },
      },
      {
        type: 'text',
        text: {
          fr: 'Un compilateur traduit tout le programme en langage machine avant l’exécution (C, C++) : le programme démarre vite, mais il faut recompiler à chaque modification. Un interpréteur lit et exécute le programme au fur et à mesure (Python, JavaScript) : plus souple, souvent plus lent. Java compile vers un bytecode exécuté par une machine virtuelle (JVM).',
          en: 'A compiler translates the whole program into machine code before running it (C, C++): the program starts fast, but must be recompiled after each change. An interpreter reads and runs the program step by step (Python, JavaScript): more flexible, often slower. Java compiles to bytecode run by a virtual machine (JVM).',
          tr: 'Derleyici, programın tamamını çalıştırmadan önce makine diline çevirir (C, C++): program hızlı başlar ama her değişiklikte yeniden derlenmelidir. Yorumlayıcı, programı adım adım okuyup çalıştırır (Python, JavaScript): daha esnek, çoğu zaman daha yavaştır. Java, bir sanal makinenin (JVM) çalıştırdığı bytecode’a derlenir.',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Domaines et métiers du génie informatique\n✔ Bit, octet, unités (Ko, Mo, Go), débits en bits\n✔ Générations d’ordinateurs\n✔ Modèle de von Neumann, cycle chercher-décoder-exécuter\n✔ Conversions binaire / octal / décimal / hexadécimal\n✔ Addition binaire, complément à 2, ASCII\n✔ Hiérarchie mémoire, matériel, logiciel, compilateur / interpréteur',
          en: '✔ Fields and careers in computer engineering\n✔ Bit, byte, units (KB, MB, GB), speeds in bits\n✔ Computer generations\n✔ Von Neumann model, fetch-decode-execute cycle\n✔ Binary / octal / decimal / hexadecimal conversions\n✔ Binary addition, two’s complement, ASCII\n✔ Memory hierarchy, hardware, software, compiler / interpreter',
          tr: '✔ Bilgisayar mühendisliğinin alanları ve meslekleri\n✔ Bit, bayt, birimler (KB, MB, GB), bit cinsinden hızlar\n✔ Bilgisayar nesilleri\n✔ Von Neumann modeli, getir-çöz-yürüt döngüsü\n✔ İkilik / sekizlik / onluk / onaltılık dönüşümler\n✔ İkilik toplama, ikiye tümleyen, ASCII\n✔ Bellek hiyerarşisi, donanım, yazılım, derleyici / yorumlayıcı',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pour chaque situation, choisis compilateur ou interpréteur : (1) un jeu vidéo qui doit être le plus rapide possible ; (2) un petit script qu’on modifie et teste toutes les minutes ; (3) une application qui doit tourner sur Windows, Linux et macOS sans recompiler.',
          en: 'For each case, choose compiler or interpreter: (1) a video game that must run as fast as possible; (2) a small script you change and test every minute; (3) an app that must run on Windows, Linux and macOS without recompiling.',
          tr: 'Her durum için derleyici veya yorumlayıcı seç: (1) olabildiğince hızlı çalışması gereken bir video oyunu; (2) her dakika değiştirip test ettiğin küçük bir betik; (3) yeniden derlemeden Windows, Linux ve macOS’ta çalışması gereken bir uygulama.',
        },
        solution: {
          fr: '(1) Compilateur (C++ par exemple) : le code machine est optimisé à l’avance. (2) Interpréteur (Python) : pas d’étape de compilation, on relance tout de suite. (3) Une solution intermédiaire, comme Java : compilé une fois en bytecode, puis exécuté par la JVM de chaque système. Un langage interprété marche aussi, s’il existe un interpréteur sur chaque système.',
          en: '(1) Compiler (C++ for example): the machine code is optimized in advance. (2) Interpreter (Python): no compile step, you rerun right away. (3) A middle ground like Java: compiled once to bytecode, then run by each system’s JVM. An interpreted language also works if every system has an interpreter.',
          tr: '(1) Derleyici (örneğin C++): makine kodu önceden optimize edilir. (2) Yorumlayıcı (Python): derleme adımı yok, hemen yeniden çalıştırılır. (3) Java gibi ara bir çözüm: bir kez bytecode’a derlenir, sonra her sistemin JVM’i tarafından çalıştırılır. Her sistemde yorumlayıcı varsa yorumlanan bir dil de olur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Lequel est un logiciel système ?',
        en: 'Which one is system software?',
        tr: 'Hangisi bir sistem yazılımıdır?',
      },
      options: {
        fr: ['Un traitement de texte', 'Le système d’exploitation', 'Un jeu vidéo'],
        en: ['A word processor', 'The operating system', 'A video game'],
        tr: ['Bir kelime işlemci', 'İşletim sistemi', 'Bir video oyunu'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le système d’exploitation gère le matériel et fait tourner les autres programmes. Le traitement de texte et le jeu sont des logiciels d’application.',
        en: 'The operating system manages the hardware and runs the other programs. The word processor and the game are application software.',
        tr: 'İşletim sistemi donanımı yönetir ve diğer programları çalıştırır. Kelime işlemci ve oyun uygulama yazılımıdır.',
      },
    },
  },
  {
    id: 'ce-w08-architecture',
    week: 8,
    title: {
      fr: 'Architecture générale de l’ordinateur',
      en: 'General computer architecture',
      tr: 'Genel bilgisayar mimarisi',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Les composants communiquent par trois bus : le bus de données transporte les valeurs, le bus d’adresses indique la case mémoire visée, le bus de contrôle transporte les ordres (lire, écrire). Avec un bus d’adresses de n bits, on peut désigner 2ⁿ cases mémoire.',
          en: 'Components talk through three buses: the data bus carries values, the address bus tells which memory cell is targeted, the control bus carries the commands (read, write). With an n-bit address bus, 2ⁿ memory cells can be addressed.',
          tr: 'Bileşenler üç yol üzerinden iletişim kurar: veri yolu değerleri taşır, adres yolu hedeflenen bellek hücresini gösterir, kontrol yolu komutları (oku, yaz) taşır. n bitlik bir adres yoluyla 2ⁿ bellek hücresi adreslenebilir.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Le processeur contient des registres : PC (adresse de la prochaine instruction), IR (instruction en cours), ACC (accumulateur, résultat des calculs), MAR et MDR (adresse et donnée échangées avec la mémoire). Son jeu d’instructions est la liste des opérations qu’il sait faire.',
          en: 'The processor contains registers: PC (address of the next instruction), IR (current instruction), ACC (accumulator, result of computations), MAR and MDR (address and data exchanged with memory). Its instruction set is the list of operations it can perform.',
          tr: 'İşlemci yazmaçlar içerir: PC (bir sonraki komutun adresi), IR (yürütülen komut), ACC (akümülatör, hesaplama sonucu), MAR ve MDR (bellekle alınıp verilen adres ve veri). Komut kümesi, yapabildiği işlemlerin listesidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Mini jeu d’instructions (machine à accumulateur)\nLOAD  x   ACC ← M[x]\nADD   x   ACC ← ACC + M[x]\nSUB   x   ACC ← ACC − M[x]\nSTORE x   M[x] ← ACC\nJUMP  x   PC ← x',
          en: 'Mini instruction set (accumulator machine)\nLOAD  x   ACC ← M[x]\nADD   x   ACC ← ACC + M[x]\nSUB   x   ACC ← ACC − M[x]\nSTORE x   M[x] ← ACC\nJUMP  x   PC ← x',
          tr: 'Küçük komut kümesi (akümülatörlü makine)\nLOAD  x   ACC ← M[x]\nADD   x   ACC ← ACC + M[x]\nSUB   x   ACC ← ACC − M[x]\nSTORE x   M[x] ← ACC\nJUMP  x   PC ← x',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Au départ, M[10] = 4, M[11] = 3 et M[12] = 0. Que valent ACC et M[12] après chaque instruction ?',
          en: 'At the start, M[10] = 4, M[11] = 3 and M[12] = 0. What are ACC and M[12] after each instruction?',
          tr: 'Başlangıçta M[10] = 4, M[11] = 3 ve M[12] = 0. Her komuttan sonra ACC ve M[12] kaçtır?',
        },
        code: 'LOAD  10\nADD   11\nSTORE 12\nSUB   10',
        solution: {
          fr: 'LOAD 10 : ACC = 4, M[12] = 0. ADD 11 : ACC = 4 + 3 = 7. STORE 12 : M[12] = 7 (ACC reste 7). SUB 10 : ACC = 7 − 4 = 3, M[12] reste 7. Le programme a calculé M[10] + M[11] dans M[12].',
          en: 'LOAD 10: ACC = 4, M[12] = 0. ADD 11: ACC = 4 + 3 = 7. STORE 12: M[12] = 7 (ACC stays 7). SUB 10: ACC = 7 − 4 = 3, M[12] stays 7. The program computed M[10] + M[11] into M[12].',
          tr: 'LOAD 10: ACC = 4, M[12] = 0. ADD 11: ACC = 4 + 3 = 7. STORE 12: M[12] = 7 (ACC 7 kalır). SUB 10: ACC = 7 − 4 = 3, M[12] 7 kalır. Program M[10] + M[11] toplamını M[12]’ye yazdı.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de cases mémoire peut-on adresser avec un bus d’adresses de 16 bits ?',
        en: 'How many memory cells can a 16-bit address bus address?',
        tr: '16 bitlik bir adres yolu kaç bellek hücresini adresleyebilir?',
      },
      options: { fr: ['16', '65 536', '1 048 576'], en: ['16', '65,536', '1,048,576'], tr: ['16', '65.536', '1.048.576'] },
      answerIndex: 1,
      explanation: {
        fr: 'Chaque adresse est un nombre de 16 bits : il y en a 2¹⁶ = 65 536. Avec 20 bits, ce serait 2²⁰ = 1 048 576.',
        en: 'Each address is a 16-bit number: there are 2¹⁶ = 65,536 of them. With 20 bits it would be 2²⁰ = 1,048,576.',
        tr: 'Her adres 16 bitlik bir sayıdır: 2¹⁶ = 65.536 tane vardır. 20 bit olsaydı 2²⁰ = 1.048.576 olurdu.',
      },
    },
  },
  {
    id: 'ce-w09-operating-system',
    week: 9,
    title: { fr: 'Le système d’exploitation', en: 'The operating system', tr: 'İşletim sistemi' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le système d’exploitation (Windows, Linux, macOS, Android) fait l’intermédiaire entre le matériel et les programmes. Sans lui, chaque programme devrait savoir piloter lui-même le disque, l’écran et le clavier.',
          en: 'The operating system (Windows, Linux, macOS, Android) sits between the hardware and the programs. Without it, every program would have to drive the disk, screen and keyboard by itself.',
          tr: 'İşletim sistemi (Windows, Linux, macOS, Android) donanım ile programlar arasında aracılık yapar. O olmasaydı her program diski, ekranı ve klavyeyi kendisi yönetmek zorunda kalırdı.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Les rôles du système d’exploitation\n1. Gestion des processus  : partager le processeur entre les programmes\n2. Gestion de la mémoire  : donner la RAM, mémoire virtuelle\n3. Système de fichiers    : dossiers, fichiers, droits\n4. Entrées-sorties        : pilotes des périphériques\n5. Sécurité               : utilisateurs, mots de passe, permissions\n6. Interface              : graphique ou ligne de commande',
          en: 'The roles of the operating system\n1. Process management  : share the processor between programs\n2. Memory management   : hand out RAM, virtual memory\n3. File system         : folders, files, permissions\n4. Input/output        : device drivers\n5. Security            : users, passwords, permissions\n6. Interface           : graphical or command line',
          tr: 'İşletim sisteminin görevleri\n1. Süreç yönetimi      : işlemciyi programlar arasında paylaştırmak\n2. Bellek yönetimi     : RAM vermek, sanal bellek\n3. Dosya sistemi       : klasörler, dosyalar, izinler\n4. Giriş/çıkış         : aygıt sürücüleri\n5. Güvenlik            : kullanıcılar, parolalar, izinler\n6. Arayüz              : grafik veya komut satırı',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Un programme est un fichier sur le disque ; un processus est un programme en cours d’exécution, avec sa mémoire. Le système passe très vite d’un processus à l’autre : c’est le multitâche.',
          en: 'A program is a file on disk; a process is a running program, with its own memory. The system switches very fast from one process to another: that is multitasking.',
          tr: 'Program diskteki bir dosyadır; süreç ise kendi belleğiyle çalışmakta olan bir programdır. Sistem süreçler arasında çok hızlı geçiş yapar: buna çoklu görev denir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quel rôle du système d’exploitation intervient ? (1) Tu écoutes de la musique en écrivant un rapport. (2) Une clé USB apparaît comme un nouveau lecteur. (3) Tu dois taper ton mot de passe pour ouvrir ta session. (4) Un programme demande plus de mémoire que la RAM disponible.',
          en: 'Which role of the operating system is involved? (1) You listen to music while writing a report. (2) A USB stick shows up as a new drive. (3) You type your password to log in. (4) A program asks for more memory than the RAM available.',
          tr: 'İşletim sisteminin hangi görevi devrede? (1) Rapor yazarken müzik dinliyorsun. (2) Bir USB bellek yeni bir sürücü olarak görünüyor. (3) Oturum açmak için parolanı yazıyorsun. (4) Bir program mevcut RAM’den fazla bellek istiyor.',
        },
        solution: {
          fr: '(1) Gestion des processus : deux processus partagent le processeur. (2) Entrées-sorties et système de fichiers : le pilote USB, puis le montage du lecteur. (3) Sécurité : identification de l’utilisateur. (4) Gestion de la mémoire : le système utilise la mémoire virtuelle et place une partie des données sur le disque.',
          en: '(1) Process management: two processes share the processor. (2) Input/output and file system: the USB driver, then mounting the drive. (3) Security: identifying the user. (4) Memory management: the system uses virtual memory and puts part of the data on disk.',
          tr: '(1) Süreç yönetimi: iki süreç işlemciyi paylaşır. (2) Giriş/çıkış ve dosya sistemi: USB sürücüsü, ardından sürücünün bağlanması. (3) Güvenlik: kullanıcının kimliğinin doğrulanması. (4) Bellek yönetimi: sistem sanal belleği kullanır ve verilerin bir kısmını diske koyar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est la différence entre un programme et un processus ?',
        en: 'What is the difference between a program and a process?',
        tr: 'Program ile süreç arasındaki fark nedir?',
      },
      options: {
        fr: ['Il n’y en a aucune', 'Un processus est un programme en cours d’exécution', 'Un programme est toujours plus rapide'],
        en: ['There is none', 'A process is a program being run', 'A program is always faster'],
        tr: ['Hiçbir fark yok', 'Süreç, çalışmakta olan bir programdır', 'Program her zaman daha hızlıdır'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le programme est le fichier ; le processus existe quand on le lance. Un même programme peut d’ailleurs donner plusieurs processus, par exemple deux fenêtres du navigateur.',
        en: 'The program is the file; the process exists once it is launched. One program can even give several processes, for example two browser windows.',
        tr: 'Program dosyanın kendisidir; süreç, program başlatıldığında var olur. Aynı program birden fazla süreç de oluşturabilir, örneğin iki tarayıcı penceresi.',
      },
    },
  },
  {
    id: 'ce-w10-security',
    week: 10,
    title: { fr: 'Sécurité informatique', en: 'Computer security', tr: 'Bilgisayar güvenliği' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La sécurité protège trois choses : la confidentialité (seules les bonnes personnes lisent), l’intégrité (personne ne modifie en cachette) et la disponibilité (le service reste accessible).',
          en: 'Security protects three things: confidentiality (only the right people can read), integrity (nobody changes things secretly) and availability (the service stays reachable).',
          tr: 'Güvenlik üç şeyi korur: gizlilik (yalnızca yetkili kişiler okur), bütünlük (kimse gizlice değiştiremez) ve erişilebilirlik (hizmet ulaşılabilir kalır).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Virus      : s’accroche à un fichier, se lance quand on l’ouvre\nVer (worm) : se propage tout seul par le réseau\nCheval de Troie : se fait passer pour un programme utile\nRançongiciel    : chiffre les fichiers et demande une rançon\nLogiciel espion : observe l’utilisateur en cachette\nHameçonnage (phishing) : faux message pour voler un mot de passe',
          en: 'Virus      : attaches to a file, runs when the file is opened\nWorm       : spreads by itself over the network\nTrojan     : pretends to be a useful program\nRansomware : encrypts files and demands a ransom\nSpyware    : secretly watches the user\nPhishing   : fake message to steal a password',
          tr: 'Virüs        : bir dosyaya yapışır, dosya açılınca çalışır\nSolucan      : ağ üzerinden kendi kendine yayılır\nTruva atı    : yararlı bir program gibi görünür\nFidye yazılımı : dosyaları şifreler ve fidye ister\nCasus yazılım : kullanıcıyı gizlice izler\nOltalama (phishing) : parola çalmak için sahte mesaj',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Bonnes pratiques : mettre à jour le système et les logiciels, utiliser un antivirus, faire des sauvegardes hors ligne, choisir des mots de passe longs et différents, activer la double authentification (2FA), vérifier le cadenas HTTPS et l’adresse avant de se connecter. Le chiffrement rend les données illisibles sans la bonne clé.',
          en: 'Good practices: update the system and software, use an antivirus, keep offline backups, choose long and different passwords, turn on two-factor authentication (2FA), check the HTTPS padlock and the address before logging in. Encryption makes data unreadable without the right key.',
          tr: 'İyi uygulamalar: sistemi ve yazılımları güncellemek, antivirüs kullanmak, çevrimdışı yedek almak, uzun ve farklı parolalar seçmek, iki adımlı doğrulamayı (2FA) açmak, giriş yapmadan önce HTTPS kilidini ve adresi kontrol etmek. Şifreleme, verileri doğru anahtar olmadan okunamaz hale getirir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Identifie l’attaque et la bonne protection : (1) Un e-mail « Votre compte bancaire est bloqué, cliquez ici et entrez votre mot de passe ». (2) Tous tes fichiers sont devenus illisibles et un message demande un paiement. (3) Un programme se copie seul d’un ordinateur à l’autre dans le réseau de l’école.',
          en: 'Identify the attack and the right protection: (1) An email “Your bank account is blocked, click here and enter your password”. (2) All your files became unreadable and a message demands a payment. (3) A program copies itself from computer to computer on the school network.',
          tr: 'Saldırıyı ve doğru korumayı belirle: (1) “Banka hesabınız bloke edildi, buraya tıklayıp parolanızı girin” diyen bir e-posta. (2) Tüm dosyaların okunamaz hale geldi ve bir mesaj ödeme istiyor. (3) Bir program okul ağında bilgisayardan bilgisayara kendini kopyalıyor.',
        },
        solution: {
          fr: '(1) Hameçonnage : ne jamais cliquer, vérifier l’expéditeur et l’adresse du site, passer par l’application officielle, activer la 2FA. (2) Rançongiciel : restaurer depuis une sauvegarde hors ligne, ne pas payer, garder le système à jour pour éviter l’infection. (3) Ver : mises à jour de sécurité, pare-feu, antivirus, et isoler les machines infectées du réseau.',
          en: '(1) Phishing: never click, check the sender and the site address, use the official app, turn on 2FA. (2) Ransomware: restore from an offline backup, don’t pay, keep the system updated to avoid infection. (3) Worm: security updates, firewall, antivirus, and isolate infected machines from the network.',
          tr: '(1) Oltalama: asla tıklamamak, göndereni ve site adresini kontrol etmek, resmi uygulamayı kullanmak, 2FA’yı açmak. (2) Fidye yazılımı: çevrimdışı yedekten geri yüklemek, ödeme yapmamak, enfeksiyonu önlemek için sistemi güncel tutmak. (3) Solucan: güvenlik güncellemeleri, güvenlik duvarı, antivirüs ve enfekte makineleri ağdan ayırmak.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel logiciel malveillant se propage tout seul par le réseau, sans qu’on ouvre de fichier ?',
        en: 'Which malware spreads by itself over the network, without anyone opening a file?',
        tr: 'Hangi kötü amaçlı yazılım, kimse dosya açmadan ağ üzerinden kendi kendine yayılır?',
      },
      options: {
        fr: ['Le virus', 'Le ver', 'Le cheval de Troie'],
        en: ['Virus', 'Worm', 'Trojan'],
        tr: ['Virüs', 'Solucan', 'Truva atı'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le ver exploite des failles pour passer d’une machine à l’autre. Le virus a besoin qu’on ouvre le fichier infecté, et le cheval de Troie qu’on l’installe en croyant qu’il est utile.',
        en: 'A worm exploits flaws to move from machine to machine. A virus needs someone to open the infected file, and a trojan needs someone to install it believing it is useful.',
        tr: 'Solucan, makineden makineye geçmek için açıklardan yararlanır. Virüs, enfekte dosyanın açılmasını; Truva atı ise yararlı sanılarak kurulmasını gerektirir.',
      },
    },
  },
  {
    id: 'ce-w11-office',
    week: 11,
    title: {
      fr: 'Bureautique : le tableur',
      en: 'Office software: spreadsheets',
      tr: 'Ofis programları: hesap tablosu',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Les logiciels de bureautique servent au travail quotidien : traitement de texte (rapports, styles, table des matières automatique), présentation (diapositives) et surtout tableur (Excel, LibreOffice Calc), très demandé aux examens.',
          en: 'Office software is used for everyday work: word processing (reports, styles, automatic table of contents), presentations (slides) and above all spreadsheets (Excel, LibreOffice Calc), often asked in exams.',
          tr: 'Ofis yazılımları günlük işler için kullanılır: kelime işlemci (raporlar, stiller, otomatik içindekiler), sunum (slaytlar) ve özellikle sınavlarda sıkça sorulan hesap tablosu (Excel, LibreOffice Calc).',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Une formule commence par =. Une référence relative (A1) se décale quand on copie la formule ; une référence absolue ($A$1) reste fixe. Dans un Excel en français, les fonctions s’appellent SOMME, MOYENNE et SI, et les arguments sont séparés par ;.',
          en: 'A formula starts with =. A relative reference (A1) shifts when the formula is copied; an absolute reference ($A$1) stays fixed. In English Excel, the functions are SUM, AVERAGE and IF, with arguments separated by commas.',
          tr: 'Formül = ile başlar. Göreli başvuru (A1) formül kopyalanınca kayar; mutlak başvuru ($A$1) sabit kalır. Türkçe Excel’de fonksiyonlar TOPLA, ORTALAMA ve EĞER’dir ve bağımsız değişkenler ; ile ayrılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '     A       B      C       D\n1   Nom     Vize   Final   Moyenne\n2   Ali     60     80      =B2*0,4+C2*0,6     → 72\n3   Ayşe    45     50      =B3*0,4+C3*0,6     → 48\n\n=SOMME(B2:B3)          → 105\n=MOYENNE(D2:D3)        → 60\n=SI(D2>=50;"Réussi";"Échoué")',
          en: '     A       B      C       D\n1   Name    Vize   Final   Average\n2   Ali     60     80      =B2*0.4+C2*0.6     → 72\n3   Ayşe    45     50      =B3*0.4+C3*0.6     → 48\n\n=SUM(B2:B3)            → 105\n=AVERAGE(D2:D3)        → 60\n=IF(D2>=50,"Passed","Failed")',
          tr: '     A       B      C       D\n1   Ad      Vize   Final   Ortalama\n2   Ali     60     80      =B2*0,4+C2*0,6     → 72\n3   Ayşe    45     50      =B3*0,4+C3*0,6     → 48\n\n=TOPLA(B2:B3)          → 105\n=ORTALAMA(D2:D3)       → 60\n=EĞER(D2>=50;"Geçti";"Kaldı")',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'La cellule E2 contient =D2*$G$1 (G1 contient un coefficient). (1) Que devient la formule si on la copie en E3 ? (2) Écris en F2 une formule qui affiche « Réussi » si E2 vaut au moins 50, sinon « Échoué ».',
          en: 'Cell E2 contains =D2*$G$1 (G1 holds a coefficient). (1) What does the formula become when copied to E3? (2) Write in F2 a formula that shows “Passed” if E2 is at least 50, otherwise “Failed”.',
          tr: 'E2 hücresinde =D2*$G$1 var (G1 bir katsayı içeriyor). (1) Formül E3’e kopyalanınca ne olur? (2) F2’ye, E2 en az 50 ise “Geçti”, değilse “Kaldı” yazan bir formül yaz.',
        },
        solution: {
          fr: '(1) =D3*$G$1 : la référence relative D2 descend d’une ligne, la référence absolue $G$1 ne bouge pas. C’est exactement pour cela qu’on met des $ sur le coefficient. (2) =SI(E2>=50;"Réussi";"Échoué").',
          en: '(1) =D3*$G$1: the relative reference D2 moves down one row, the absolute reference $G$1 does not move. That is exactly why the coefficient gets $ signs. (2) =IF(E2>=50,"Passed","Failed").',
          tr: '(1) =D3*$G$1: göreli başvuru D2 bir satır aşağı kayar, mutlak başvuru $G$1 kaymaz. Katsayıya $ konmasının sebebi tam olarak budur. (2) =EĞER(E2>=50;"Geçti";"Kaldı").',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'On copie la formule =A1+$B$1 une ligne plus bas. Que devient-elle ?',
        en: 'The formula =A1+$B$1 is copied one row down. What does it become?',
        tr: '=A1+$B$1 formülü bir satır aşağı kopyalanıyor. Ne olur?',
      },
      options: {
        fr: ['=A1+$B$1', '=A2+$B$1', '=A2+$B$2'],
        en: ['=A1+$B$1', '=A2+$B$1', '=A2+$B$2'],
        tr: ['=A1+$B$1', '=A2+$B$1', '=A2+$B$2'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'A1 est relative : elle devient A2. $B$1 est absolue : elle reste $B$1.',
        en: 'A1 is relative: it becomes A2. $B$1 is absolute: it stays $B$1.',
        tr: 'A1 göreli başvurudur: A2 olur. $B$1 mutlaktır: $B$1 kalır.',
      },
    },
  },
  {
    id: 'ce-w12-databases',
    week: 12,
    title: { fr: 'Les bases de données', en: 'Databases', tr: 'Veritabanları' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une base de données range des informations de façon organisée pour les retrouver vite et sans doublon. Un SGBD (système de gestion de bases de données : MySQL, PostgreSQL, SQL Server…) la gère. Dans une base relationnelle, les données sont dans des tables.',
          en: 'A database stores information in an organized way so it can be found quickly and without duplicates. A DBMS (database management system: MySQL, PostgreSQL, SQL Server…) manages it. In a relational database, data lives in tables.',
          tr: 'Veritabanı, bilgileri hızlı ve tekrarsız bulunabilecek şekilde düzenli olarak saklar. Onu bir VTYS (veritabanı yönetim sistemi: MySQL, PostgreSQL, SQL Server…) yönetir. İlişkisel bir veritabanında veriler tablolarda bulunur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Table etudiants\n numero (clé) | nom   | departement   | annee\n 2024001      | Ali   | Informatique  | 1\n 2024002      | Ayşe  | Mécanique     | 2\n 2024003      | Emre  | Informatique  | 2\n\nligne = enregistrement     colonne = champ\nclé primaire : identifie chaque ligne, unique et jamais vide\nclé étrangère : renvoie à la clé primaire d’une autre table',
          en: 'Table students\n number (key) | name  | department    | year\n 2024001      | Ali   | Computer Eng. | 1\n 2024002      | Ayşe  | Mechanical    | 2\n 2024003      | Emre  | Computer Eng. | 2\n\nrow = record     column = field\nprimary key: identifies each row, unique and never empty\nforeign key: points to the primary key of another table',
          tr: 'ogrenciler tablosu\n numara (anahtar) | ad    | bolum         | sinif\n 2024001          | Ali   | Bilgisayar    | 1\n 2024002          | Ayşe  | Makine        | 2\n 2024003          | Emre  | Bilgisayar    | 2\n\nsatır = kayıt     sütun = alan\nbirincil anahtar: her satırı tanımlar, benzersizdir ve asla boş değildir\nyabancı anahtar: başka bir tablonun birincil anahtarını gösterir',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'On interroge la base avec le langage SQL. SELECT choisit les colonnes, FROM la table, WHERE filtre les lignes.',
          en: 'The database is queried with the SQL language. SELECT picks the columns, FROM the table, WHERE filters the rows.',
          tr: 'Veritabanı SQL diliyle sorgulanır. SELECT sütunları, FROM tabloyu seçer, WHERE satırları filtreler.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec la table etudiants : (1) quel champ choisir comme clé primaire, et pourquoi pas le nom ? (2) Écris une requête qui donne le nom des étudiants en Informatique.',
          en: 'With the students table: (1) which field should be the primary key, and why not the name? (2) Write a query that gives the names of the Computer Eng. students.',
          tr: 'ogrenciler tablosuyla: (1) birincil anahtar hangi alan olmalı, neden ad olmamalı? (2) Bilgisayar bölümündeki öğrencilerin adlarını veren bir sorgu yaz.',
        },
        solution: {
          fr: '(1) Le numéro d’étudiant : il est unique et toujours renseigné. Deux étudiants peuvent avoir le même nom, donc le nom ne peut pas identifier une ligne. (2) SELECT nom FROM etudiants WHERE departement = \'Informatique\'; → Ali, Emre.',
          en: '(1) The student number: it is unique and always filled in. Two students can share a name, so the name cannot identify a row. (2) SELECT name FROM students WHERE department = \'Computer Eng.\'; → Ali, Emre.',
          tr: '(1) Öğrenci numarası: benzersizdir ve her zaman doludur. İki öğrencinin adı aynı olabilir, bu yüzden ad bir satırı tanımlayamaz. (2) SELECT ad FROM ogrenciler WHERE bolum = \'Bilgisayar\'; → Ali, Emre.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle propriété doit avoir une clé primaire ?',
        en: 'Which property must a primary key have?',
        tr: 'Birincil anahtarın hangi özelliği olmalıdır?',
      },
      options: {
        fr: ['Être un nombre pair', 'Être unique et jamais vide', 'Être la première colonne'],
        en: ['Be an even number', 'Be unique and never empty', 'Be the first column'],
        tr: ['Çift sayı olmak', 'Benzersiz olmak ve asla boş olmamak', 'İlk sütun olmak'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'La clé primaire sert à désigner une ligne sans ambiguïté : deux lignes ne peuvent pas avoir la même, et elle ne peut pas être vide. Sa position dans la table n’a aucune importance.',
        en: 'The primary key identifies a row without ambiguity: two rows cannot share it, and it cannot be empty. Its position in the table does not matter.',
        tr: 'Birincil anahtar bir satırı belirsizlik olmadan tanımlar: iki satırda aynı olamaz ve boş olamaz. Tablodaki konumu önemli değildir.',
      },
    },
  },
  {
    id: 'ce-w13-networks',
    week: 13,
    title: { fr: 'Internet et réseaux', en: 'The Internet and networks', tr: 'İnternet ve bilgisayar ağları' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un réseau relie des ordinateurs pour qu’ils échangent des données. Un LAN (réseau local) couvre une maison ou une école ; un WAN couvre une grande zone. Internet est le réseau des réseaux. Le routeur fait passer les données d’un réseau à l’autre.',
          en: 'A network connects computers so they can exchange data. A LAN (local area network) covers a home or a school; a WAN covers a large area. The Internet is the network of networks. The router passes data from one network to another.',
          tr: 'Ağ, bilgisayarları veri alışverişi yapabilmeleri için birbirine bağlar. LAN (yerel ağ) bir evi veya okulu kapsar; WAN geniş bir alanı kapsar. İnternet, ağların ağıdır. Yönlendirici (router) verileri bir ağdan diğerine geçirir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Adresse IP : identifie un appareil, ex. 192.168.1.25 (IPv4)\nDNS        : traduit un nom (karabuk.edu.tr) en adresse IP\nHTTP(S)    : protocole du web ; le S veut dire chiffré\nClient     : demande (navigateur)\nServeur    : répond (site web)',
          en: 'IP address : identifies a device, e.g. 192.168.1.25 (IPv4)\nDNS        : turns a name (karabuk.edu.tr) into an IP address\nHTTP(S)    : the web protocol; the S means encrypted\nClient     : asks (browser)\nServer     : answers (website)',
          tr: 'IP adresi : bir cihazı tanımlar, örn. 192.168.1.25 (IPv4)\nDNS       : bir adı (karabuk.edu.tr) IP adresine çevirir\nHTTP(S)   : web protokolü; S şifreli demektir\nİstemci   : ister (tarayıcı)\nSunucu    : cevap verir (web sitesi)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Explique dans l’ordre ce qui se passe quand tu tapes https://www.karabuk.edu.tr dans ton navigateur.',
          en: 'Explain in order what happens when you type https://www.karabuk.edu.tr in your browser.',
          tr: 'Tarayıcına https://www.karabuk.edu.tr yazdığında neler olduğunu sırasıyla açıkla.',
        },
        solution: {
          fr: '1. Le navigateur demande au DNS l’adresse IP de www.karabuk.edu.tr. 2. Il ouvre une connexion vers ce serveur ; avec HTTPS, une connexion chiffrée est mise en place. 3. Il envoie une requête HTTP (GET /). 4. Le serveur renvoie la page (HTML, CSS, images), souvent en plusieurs requêtes. 5. Le navigateur affiche la page. Les données passent par plusieurs routeurs entre ton réseau et celui de l’université.',
          en: '1. The browser asks DNS for the IP address of www.karabuk.edu.tr. 2. It opens a connection to that server; with HTTPS, an encrypted connection is set up. 3. It sends an HTTP request (GET /). 4. The server sends back the page (HTML, CSS, images), often over several requests. 5. The browser displays the page. The data goes through several routers between your network and the university’s.',
          tr: '1. Tarayıcı, DNS’ten www.karabuk.edu.tr’nin IP adresini ister. 2. Bu sunucuya bir bağlantı açar; HTTPS ile şifreli bir bağlantı kurulur. 3. Bir HTTP isteği gönderir (GET /). 4. Sunucu sayfayı (HTML, CSS, resimler) genellikle birkaç istekte geri gönderir. 5. Tarayıcı sayfayı gösterir. Veriler senin ağın ile üniversitenin ağı arasında birkaç yönlendiriciden geçer.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel service traduit un nom de site en adresse IP ?',
        en: 'Which service turns a site name into an IP address?',
        tr: 'Hangi hizmet bir site adını IP adresine çevirir?',
      },
      options: { fr: ['HTTP', 'DNS', 'Le routeur'], en: ['HTTP', 'DNS', 'The router'], tr: ['HTTP', 'DNS', 'Yönlendirici'] },
      answerIndex: 1,
      explanation: {
        fr: 'Le DNS est l’annuaire d’Internet. HTTP transporte les pages, et le routeur achemine les paquets, mais aucun des deux ne traduit les noms.',
        en: 'DNS is the Internet’s phone book. HTTP carries the pages and the router forwards packets, but neither translates names.',
        tr: 'DNS, İnternet’in rehberidir. HTTP sayfaları taşır, yönlendirici paketleri iletir, ama ikisi de adları çevirmez.',
      },
    },
  },
  {
    id: 'ce-w14-trends',
    week: 14,
    title: {
      fr: 'Tendances, éthique et révision du final',
      en: 'Trends, ethics and final review',
      tr: 'Güncel eğilimler, etik ve final tekrarı',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Cloud computing   : utiliser des serveurs à distance (stockage, calcul)\nIntelligence artificielle : des programmes qui apprennent à partir de données\nInternet des objets (IoT) : objets connectés (capteurs, montres, maison)\nBig data          : analyser des volumes énormes de données',
          en: 'Cloud computing   : using remote servers (storage, computing)\nArtificial intelligence : programs that learn from data\nInternet of Things (IoT) : connected objects (sensors, watches, home)\nBig data          : analyzing huge volumes of data',
          tr: 'Bulut bilişim     : uzak sunucuları kullanmak (depolama, hesaplama)\nYapay zekâ        : verilerden öğrenen programlar\nNesnelerin İnterneti (IoT) : bağlı nesneler (sensörler, saatler, ev)\nBüyük veri        : çok büyük veri hacimlerini analiz etmek',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'L’ingénieur a aussi des responsabilités : protéger les données personnelles (en Turquie, la loi KVKK n° 6698 ; en Europe, le RGPD), respecter les droits d’auteur et les licences, écrire des logiciels fiables quand des vies en dépendent, et rester honnête sur ce qu’un système sait faire.',
          en: 'Engineers also have responsibilities: protecting personal data (in Turkey, the KVKK law no. 6698; in Europe, the GDPR), respecting copyright and licenses, writing reliable software when lives depend on it, and staying honest about what a system can do.',
          tr: 'Mühendisin sorumlulukları da vardır: kişisel verileri korumak (Türkiye’de 6698 sayılı KVKK, Avrupa’da GDPR), telif haklarına ve lisanslara saygı göstermek, hayatların bağlı olduğu durumlarda güvenilir yazılım yazmak ve bir sistemin neler yapabildiği konusunda dürüst olmak.',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Bus de données, d’adresses, de contrôle ; registres PC, IR, ACC\n✔ Suivre un mini-programme LOAD / ADD / STORE\n✔ Rôles du système d’exploitation, programme / processus\n✔ Menaces (virus, ver, rançongiciel, hameçonnage) et protections\n✔ Formules de tableur, références relatives et absolues ($)\n✔ Table, enregistrement, champ, clé primaire, SELECT … WHERE\n✔ LAN / WAN, IP, DNS, HTTP(S), client-serveur\n✔ Cloud, IA, IoT, big data, éthique',
          en: '✔ Data, address and control buses; PC, IR, ACC registers\n✔ Follow a LOAD / ADD / STORE mini program\n✔ Operating system roles, program / process\n✔ Threats (virus, worm, ransomware, phishing) and protections\n✔ Spreadsheet formulas, relative and absolute references ($)\n✔ Table, record, field, primary key, SELECT … WHERE\n✔ LAN / WAN, IP, DNS, HTTP(S), client-server\n✔ Cloud, AI, IoT, big data, ethics',
          tr: '✔ Veri, adres ve kontrol yolları; PC, IR, ACC yazmaçları\n✔ LOAD / ADD / STORE küçük programını izlemek\n✔ İşletim sisteminin görevleri, program / süreç\n✔ Tehditler (virüs, solucan, fidye yazılımı, oltalama) ve korunma\n✔ Hesap tablosu formülleri, göreli ve mutlak başvurular ($)\n✔ Tablo, kayıt, alan, birincil anahtar, SELECT … WHERE\n✔ LAN / WAN, IP, DNS, HTTP(S), istemci-sunucu\n✔ Bulut, YZ, IoT, büyük veri, etik',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Classe chaque exemple (cloud, IA, IoT ou big data) : (1) tes photos sauvegardées sur Google Drive ; (2) un thermostat qui envoie la température à ton téléphone ; (3) une application qui reconnaît les visages ; (4) une banque qui analyse des millions de transactions pour repérer la fraude.',
          en: 'Classify each example (cloud, AI, IoT or big data): (1) your photos backed up on Google Drive; (2) a thermostat that sends the temperature to your phone; (3) an app that recognizes faces; (4) a bank analyzing millions of transactions to spot fraud.',
          tr: 'Her örneği sınıflandır (bulut, YZ, IoT veya büyük veri): (1) Google Drive’a yedeklenen fotoğrafların; (2) sıcaklığı telefonuna gönderen bir termostat; (3) yüzleri tanıyan bir uygulama; (4) dolandırıcılığı tespit etmek için milyonlarca işlemi analiz eden bir banka.',
        },
        solution: {
          fr: '(1) Cloud : stockage sur des serveurs distants. (2) IoT : objet connecté avec un capteur. (3) IA : un modèle appris à partir d’images. (4) Big data, souvent avec de l’IA : l’énorme volume de données est la clé. Les catégories se combinent souvent : (4) utilise aussi le cloud.',
          en: '(1) Cloud: storage on remote servers. (2) IoT: a connected object with a sensor. (3) AI: a model learned from images. (4) Big data, often with AI: the huge data volume is the key. The categories often combine: (4) also uses the cloud.',
          tr: '(1) Bulut: uzak sunucularda depolama. (2) IoT: sensörlü bağlı nesne. (3) YZ: resimlerden öğrenilmiş bir model. (4) Büyük veri, çoğu zaman YZ ile birlikte: anahtar çok büyük veri hacmidir. Kategoriler sıkça birleşir: (4) bulutu da kullanır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Lequel est un exemple d’Internet des objets ?',
        en: 'Which one is an Internet of Things example?',
        tr: 'Hangisi bir Nesnelerin İnterneti örneğidir?',
      },
      options: {
        fr: ['Un tableur hors ligne', 'Une montre connectée qui envoie ton rythme cardiaque', 'Un livre papier'],
        en: ['An offline spreadsheet', 'A smartwatch sending your heart rate', 'A paper book'],
        tr: ['Çevrimdışı bir hesap tablosu', 'Kalp atışını gönderen akıllı saat', 'Basılı bir kitap'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'L’IoT, ce sont des objets du quotidien équipés de capteurs et connectés à Internet, comme une montre connectée.',
        en: 'IoT means everyday objects with sensors connected to the Internet, like a smartwatch.',
        tr: 'IoT, akıllı saat gibi sensörlerle donatılmış ve İnternet’e bağlı gündelik nesnelerdir.',
      },
    },
  },
];
