/**
 * Lessons for the Karabük University (KBU) computer engineering courses,
 * following the department curriculum. Same shape as `lessons.ts`.
 */

import type { LessonSource } from '@/data/lessons';

export const kbuLessonsByCourse: Record<string, LessonSource[]> = {
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
  'kbu-blm220': [
    {
      id: 'discrete-logic',
      title: { fr: 'Propositions et implication', en: 'Propositions and implication', tr: 'Önermeler ve gerektirme' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Une proposition est une phrase vraie ou fausse. On les combine avec ∧ (et), ∨ (ou), ¬ (non) et → (si… alors).',
            en: 'A proposition is a sentence that is either true or false. They are combined with ∧ (and), ∨ (or), ¬ (not) and → (if… then).',
            tr: 'Önerme, doğru ya da yanlış olan bir cümledir. Önermeler ∧ (ve), ∨ (veya), ¬ (değil) ve → (ise) ile birleştirilir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'p | q | p → q\nV | V |   V\nV | F |   F\nF | V |   V\nF | F |   V\n\n(V = vrai, F = faux)',
            en: 'p | q | p → q\nT | T |   T\nT | F |   F\nF | T |   T\nF | F |   T\n\n(T = true, F = false)',
            tr: 'p | q | p → q\nD | D |   D\nD | Y |   Y\nY | D |   D\nY | Y |   D\n\n(D = doğru, Y = yanlış)',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'p → q n’est fausse que dans un seul cas : quand p est vraie et q fausse. Si p est fausse, la promesse n’est pas rompue.',
            en: 'p → q is false in only one case: when p is true and q is false. If p is false, the promise isn’t broken.',
            tr: 'p → q yalnızca tek bir durumda yanlıştır: p doğru ve q yanlış olduğunda. p yanlışsa söz bozulmuş olmaz.',
          },
        },
      ],
      quiz: {
        question: {
          fr: '« S’il pleut, je prends un parapluie. » Il ne pleut pas et je prends un parapluie. La phrase est…',
          en: '“If it rains, I take an umbrella.” It is not raining and I take an umbrella. The sentence is…',
          tr: '“Yağmur yağarsa şemsiye alırım.” Yağmur yağmıyor ve şemsiye alıyorum. Bu önerme…',
        },
        options: {
          fr: ['Vraie', 'Fausse', 'Ni vraie ni fausse'],
          en: ['True', 'False', 'Neither true nor false'],
          tr: ['Doğrudur', 'Yanlıştır', 'Ne doğru ne yanlıştır'],
        },
        answerIndex: 0,
        explanation: {
          fr: 'p (il pleut) est fausse. Une implication dont la condition est fausse est toujours vraie : la règle n’a pas été violée.',
          en: 'p (it rains) is false. An implication whose condition is false is always true: the rule wasn’t broken.',
          tr: 'p (yağmur yağıyor) yanlıştır. Koşulu yanlış olan bir gerektirme her zaman doğrudur: kural çiğnenmemiştir.',
        },
      },
    },
    {
      id: 'discrete-sets',
      title: { fr: 'Les ensembles', en: 'Sets', tr: 'Kümeler' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Un ensemble est une collection d’éléments sans doublon et sans ordre. On peut les réunir, prendre ce qu’ils ont en commun, ou leur différence.',
            en: 'A set is a collection of elements with no duplicates and no order. You can join sets, take what they share, or their difference.',
            tr: 'Küme, tekrarsız ve sırasız elemanlardan oluşan bir topluluktur. Kümeler birleştirilebilir, ortak elemanları ya da farkları alınabilir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'A = {1, 2, 3}     B = {2, 3, 4}\n\nA ∪ B = {1, 2, 3, 4}   (union)\nA ∩ B = {2, 3}         (intersection)\nA − B = {1}            (différence)',
            en: 'A = {1, 2, 3}     B = {2, 3, 4}\n\nA ∪ B = {1, 2, 3, 4}   (union)\nA ∩ B = {2, 3}         (intersection)\nA − B = {1}            (difference)',
            tr: 'A = {1, 2, 3}     B = {2, 3, 4}\n\nA ∪ B = {1, 2, 3, 4}   (birleşim)\nA ∩ B = {2, 3}         (kesişim)\nA − B = {1}            (fark)',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Un ensemble de n éléments a 2ⁿ sous-ensembles : pour chaque élément, on choisit de le prendre ou non. L’ensemble vide en fait partie.',
            en: 'A set of n elements has 2ⁿ subsets: for each element, you choose to take it or not. The empty set is one of them.',
            tr: 'n elemanlı bir kümenin 2ⁿ alt kümesi vardır: her eleman için onu alıp almamayı seçeriz. Boş küme de bunlardan biridir.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Combien de sous-ensembles a l’ensemble {a, b, c} ?',
          en: 'How many subsets does the set {a, b, c} have?',
          tr: '{a, b, c} kümesinin kaç alt kümesi vardır?',
        },
        options: { fr: ['3', '6', '8'], en: ['3', '6', '8'], tr: ['3', '6', '8'] },
        answerIndex: 2,
        explanation: {
          fr: 'Il y a 3 éléments, donc 2³ = 8 sous-ensembles : {}, {a}, {b}, {c}, {a,b}, {a,c}, {b,c} et {a,b,c}.',
          en: 'There are 3 elements, so 2³ = 8 subsets: {}, {a}, {b}, {c}, {a,b}, {a,c}, {b,c} and {a,b,c}.',
          tr: '3 eleman vardır, yani 2³ = 8 alt küme: {}, {a}, {b}, {c}, {a,b}, {a,c}, {b,c} ve {a,b,c}.',
        },
      },
    },
    {
      id: 'discrete-graphs',
      title: { fr: 'Les graphes', en: 'Graphs', tr: 'Graflar' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Un graphe est un ensemble de sommets reliés par des arêtes : des villes et des routes, des amis sur un réseau social, des pages web et leurs liens.',
            en: 'A graph is a set of vertices joined by edges: cities and roads, friends on a social network, web pages and their links.',
            tr: 'Graf, kenarlarla birbirine bağlanan düğümlerden oluşur: şehirler ve yollar, sosyal ağdaki arkadaşlar, web sayfaları ve bağlantıları gibi.',
          },
        },
        {
          type: 'code',
          code: {
            fr: '// Liste d’adjacence (qui est relié à qui)\nA : B, C\nB : A, C\nC : A, B, D\nD : C\n\n// degré(C) = 3, 4 arêtes au total',
            en: '// Adjacency list (who is linked to whom)\nA: B, C\nB: A, C\nC: A, B, D\nD: C\n\n// degree(C) = 3, 4 edges in total',
            tr: '// Komşuluk listesi (kim kime bağlı)\nA: B, C\nB: A, C\nC: A, B, D\nD: C\n\n// derece(C) = 3, toplam 4 kenar',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Le degré d’un sommet est son nombre d’arêtes. Chaque arête touche deux sommets, donc la somme des degrés vaut toujours 2 × le nombre d’arêtes.',
            en: 'A vertex’s degree is its number of edges. Each edge touches two vertices, so the sum of the degrees is always 2 × the number of edges.',
            tr: 'Bir düğümün derecesi, kenar sayısıdır. Her kenar iki düğüme değer; bu yüzden derecelerin toplamı her zaman 2 × kenar sayısıdır.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Un graphe a 5 arêtes. Que vaut la somme des degrés de ses sommets ?',
          en: 'A graph has 5 edges. What is the sum of the degrees of its vertices?',
          tr: 'Bir grafın 5 kenarı var. Düğümlerinin derecelerinin toplamı kaçtır?',
        },
        options: { fr: ['5', '10', '25'], en: ['5', '10', '25'], tr: ['5', '10', '25'] },
        answerIndex: 1,
        explanation: {
          fr: 'Chaque arête compte une fois pour chacun de ses deux bouts : 2 × 5 = 10.',
          en: 'Each edge counts once for each of its two ends: 2 × 5 = 10.',
          tr: 'Her kenar, iki ucunun her biri için bir kez sayılır: 2 × 5 = 10.',
        },
      },
    },
  ],
  'kbu-cme324': [
    {
      id: 'os-processes',
      title: { fr: 'Les processus', en: 'Processes', tr: 'Süreçler' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Un programme est un fichier sur le disque. Quand on le lance, il devient un processus : un programme en cours d’exécution, avec sa propre mémoire.',
            en: 'A program is a file on disk. When you run it, it becomes a process: a running program, with its own memory.',
            tr: 'Program, diskteki bir dosyadır. Çalıştırıldığında süreç (process) olur: kendi belleği olan, çalışmakta olan bir program.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'Nouveau → Prêt → En exécution → Terminé\n\nEn exécution → Bloqué   (attend une entrée/sortie)\nBloqué       → Prêt     (l’entrée/sortie est finie)\nEn exécution → Prêt     (son temps est écoulé)',
            en: 'New → Ready → Running → Terminated\n\nRunning → Blocked   (waits for input/output)\nBlocked → Ready     (the input/output is done)\nRunning → Ready     (its time slice is over)',
            tr: 'Yeni → Hazır → Çalışıyor → Sonlandı\n\nÇalışıyor → Bekliyor   (giriş/çıkış bekler)\nBekliyor  → Hazır      (giriş/çıkış bitti)\nÇalışıyor → Hazır      (zaman dilimi doldu)',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Un processeur n’exécute qu’un processus à la fois par cœur. Le système d’exploitation passe très vite de l’un à l’autre : on a l’impression qu’ils tournent tous ensemble.',
            en: 'A processor runs only one process at a time per core. The operating system switches between them very fast, so they seem to run together.',
            tr: 'İşlemci her çekirdekte aynı anda yalnızca bir süreç çalıştırır. İşletim sistemi süreçler arasında çok hızlı geçiş yapar, bu yüzden hepsi birlikte çalışıyormuş gibi görünür.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Un processus attend que l’utilisateur tape au clavier. Dans quel état est-il ?',
          en: 'A process is waiting for the user to type on the keyboard. Which state is it in?',
          tr: 'Bir süreç, kullanıcının klavyeden yazmasını bekliyor. Hangi durumdadır?',
        },
        options: {
          fr: ['Prêt', 'En exécution', 'Bloqué'],
          en: ['Ready', 'Running', 'Blocked'],
          tr: ['Hazır', 'Çalışıyor', 'Bekliyor'],
        },
        answerIndex: 2,
        explanation: {
          fr: 'Il ne peut pas avancer tant que l’entrée n’est pas arrivée, même si le processeur est libre : il est bloqué. Il redeviendra prêt après la saisie.',
          en: 'It can’t go on until the input arrives, even if the processor is free: it is blocked. It becomes ready again after the input.',
          tr: 'İşlemci boş olsa bile giriş gelene kadar ilerleyemez: bekleme durumundadır. Giriş yapılınca yeniden hazır olur.',
        },
      },
    },
    {
      id: 'os-scheduling',
      title: { fr: 'L’ordonnancement', en: 'CPU scheduling', tr: 'İşlemci zamanlama' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'L’ordonnanceur choisit quel processus prêt utilise le processeur. Avec FCFS (premier arrivé, premier servi), on les traite dans l’ordre d’arrivée.',
            en: 'The scheduler picks which ready process gets the processor. With FCFS (first come, first served), they are handled in order of arrival.',
            tr: 'Zamanlayıcı, hazır süreçlerden hangisinin işlemciyi kullanacağını seçer. FCFS (ilk gelen ilk hizmet alır) ile süreçler geliş sırasına göre işlenir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'Durées : P1 = 6, P2 = 3, P3 = 1 (tous arrivés à 0)\n\nFCFS (P1, P2, P3) :\n  attentes 0, 6, 9    → moyenne 5\n\nSJF, le plus court d’abord (P3, P2, P1) :\n  attentes 0, 1, 4    → moyenne 1,67',
            en: 'Burst times: P1 = 6, P2 = 3, P3 = 1 (all arrive at 0)\n\nFCFS (P1, P2, P3):\n  waits 0, 6, 9    → average 5\n\nSJF, shortest job first (P3, P2, P1):\n  waits 0, 1, 4    → average 1.67',
            tr: 'Süreler: P1 = 6, P2 = 3, P3 = 1 (hepsi 0’da geldi)\n\nFCFS (P1, P2, P3):\n  beklemeler 0, 6, 9    → ortalama 5\n\nSJF, en kısa iş önce (P3, P2, P1):\n  beklemeler 0, 1, 4    → ortalama 1,67',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Faire passer les tâches courtes d’abord réduit l’attente moyenne. Round Robin, lui, donne à chacun un petit temps à tour de rôle : c’est ce qu’utilisent les systèmes interactifs.',
            en: 'Running short jobs first lowers the average wait. Round Robin gives each process a small time slice in turn: that is what interactive systems use.',
            tr: 'Kısa işleri önce çalıştırmak ortalama beklemeyi azaltır. Round Robin ise her sürece sırayla küçük bir zaman dilimi verir: etkileşimli sistemler bunu kullanır.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'En FCFS, P1 dure 2, P2 dure 4 et P3 dure 3, arrivés dans cet ordre à l’instant 0. Combien de temps P3 attend-il ?',
          en: 'With FCFS, P1 takes 2, P2 takes 4 and P3 takes 3, arriving in that order at time 0. How long does P3 wait?',
          tr: 'FCFS ile P1 2, P2 4 ve P3 3 birim sürüyor ve 0 anında bu sırayla geliyorlar. P3 ne kadar bekler?',
        },
        options: { fr: ['3', '6', '9'], en: ['3', '6', '9'], tr: ['3', '6', '9'] },
        answerIndex: 1,
        explanation: {
          fr: 'P3 doit attendre la fin de P1 et de P2 : 2 + 4 = 6.',
          en: 'P3 must wait for P1 and P2 to finish: 2 + 4 = 6.',
          tr: 'P3, P1 ve P2’nin bitmesini bekler: 2 + 4 = 6.',
        },
      },
    },
    {
      id: 'os-deadlock',
      title: { fr: 'L’interblocage', en: 'Deadlock', tr: 'Kilitlenme' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Il y a interblocage quand des processus s’attendent les uns les autres pour toujours : aucun ne peut avancer.',
            en: 'A deadlock happens when processes wait for each other forever: none of them can move on.',
            tr: 'Kilitlenme (deadlock), süreçlerin birbirini sonsuza kadar beklemesidir: hiçbiri ilerleyemez.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'Processus A : tient l’Imprimante, attend le Scanner\nProcessus B : tient le Scanner, attend l’Imprimante\n\n→ chacun attend l’autre : interblocage',
            en: 'Process A: holds the Printer, waits for the Scanner\nProcess B: holds the Scanner, waits for the Printer\n\n→ each waits for the other: deadlock',
            tr: 'Süreç A: Yazıcıyı tutuyor, Tarayıcıyı bekliyor\nSüreç B: Tarayıcıyı tutuyor, Yazıcıyı bekliyor\n\n→ ikisi de birbirini bekliyor: kilitlenme',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Il faut 4 conditions à la fois : exclusion mutuelle, attente en tenant une ressource, pas de réquisition, et attente circulaire. Casser une seule suffit à l’éviter.',
            en: 'It needs 4 conditions at once: mutual exclusion, hold and wait, no preemption, and circular wait. Breaking just one is enough to avoid it.',
            tr: 'Aynı anda 4 koşul gerekir: karşılıklı dışlama, tut ve bekle, kesintisizlik (geri alınamama) ve döngüsel bekleme. Birini bozmak kilitlenmeyi önlemeye yeter.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Quelle règle supprime l’attente circulaire de l’exemple ?',
          en: 'Which rule removes the circular wait in the example?',
          tr: 'Hangi kural örnekteki döngüsel beklemeyi ortadan kaldırır?',
        },
        options: {
          fr: [
            'Donner plus de mémoire aux processus',
            'Toujours demander les ressources dans le même ordre',
            'Redémarrer l’ordinateur plus souvent',
          ],
          en: [
            'Give the processes more memory',
            'Always request resources in the same order',
            'Restart the computer more often',
          ],
          tr: [
            'Süreçlere daha fazla bellek vermek',
            'Kaynakları her zaman aynı sırayla istemek',
            'Bilgisayarı daha sık yeniden başlatmak',
          ],
        },
        answerIndex: 1,
        explanation: {
          fr: 'Si tout le monde demande l’Imprimante avant le Scanner, B ne peut pas tenir le Scanner en attendant l’Imprimante : le cercle ne peut plus se former.',
          en: 'If everyone asks for the Printer before the Scanner, B can’t hold the Scanner while waiting for the Printer: the circle can no longer form.',
          tr: 'Herkes Yazıcıyı Tarayıcıdan önce isterse, B Yazıcıyı beklerken Tarayıcıyı tutamaz: döngü artık oluşamaz.',
        },
      },
    },
  ],
  'kbu-cme326': [
    {
      id: 'net-ip-addresses',
      title: { fr: 'Les adresses IP', en: 'IP addresses', tr: 'IP adresleri' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Chaque appareil d’un réseau a une adresse IP. En IPv4, c’est 4 nombres de 0 à 255. Le masque indique quelle partie désigne le réseau et quelle partie désigne l’appareil.',
            en: 'Every device on a network has an IP address. In IPv4, it is 4 numbers from 0 to 255. The mask says which part names the network and which part names the device.',
            tr: 'Ağdaki her cihazın bir IP adresi vardır. IPv4’te bu, 0 ile 255 arasında 4 sayıdır. Maske, hangi kısmın ağı, hangi kısmın cihazı gösterdiğini belirtir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'Adresse : 192.168.1.25\nMasque  : 255.255.255.0   (/24)\nRéseau  : 192.168.1.0\n\nAppareils possibles : 192.168.1.1 à 192.168.1.254',
            en: 'Address: 192.168.1.25\nMask   : 255.255.255.0   (/24)\nNetwork: 192.168.1.0\n\nPossible devices: 192.168.1.1 to 192.168.1.254',
            tr: 'Adres : 192.168.1.25\nMaske : 255.255.255.0   (/24)\nAğ    : 192.168.1.0\n\nOlası cihazlar: 192.168.1.1 – 192.168.1.254',
          },
        },
        {
          type: 'text',
          text: {
            fr: '/24 veut dire que les 24 premiers bits (les 3 premiers nombres) désignent le réseau. Deux appareils avec les mêmes 3 premiers nombres sont sur le même réseau.',
            en: '/24 means the first 24 bits (the first 3 numbers) name the network. Two devices with the same first 3 numbers are on the same network.',
            tr: '/24, ilk 24 bitin (ilk 3 sayının) ağı gösterdiği anlamına gelir. İlk 3 sayısı aynı olan iki cihaz aynı ağdadır.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Quelle adresse est sur le même réseau que 192.168.1.25/24 ?',
          en: 'Which address is on the same network as 192.168.1.25/24?',
          tr: 'Hangi adres 192.168.1.25/24 ile aynı ağdadır?',
        },
        options: {
          fr: ['192.168.2.25', '192.168.1.200', '10.0.0.25'],
          en: ['192.168.2.25', '192.168.1.200', '10.0.0.25'],
          tr: ['192.168.2.25', '192.168.1.200', '10.0.0.25'],
        },
        answerIndex: 1,
        explanation: {
          fr: 'Avec /24, il faut les mêmes 3 premiers nombres : 192.168.1. Seule 192.168.1.200 les a.',
          en: 'With /24, the first 3 numbers must match: 192.168.1. Only 192.168.1.200 has them.',
          tr: '/24 ile ilk 3 sayı aynı olmalıdır: 192.168.1. Yalnızca 192.168.1.200 buna uyar.',
        },
      },
    },
    {
      id: 'net-dns-dhcp',
      title: { fr: 'DHCP et DNS', en: 'DHCP and DNS', tr: 'DHCP ve DNS' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'DHCP donne automatiquement une adresse IP à un appareil qui se connecte. DNS traduit un nom de site, facile à retenir, en adresse IP.',
            en: 'DHCP automatically gives an IP address to a device that connects. DNS turns a site name, easy to remember, into an IP address.',
            tr: 'DHCP, ağa bağlanan cihaza otomatik olarak IP adresi verir. DNS ise akılda kalması kolay site adını IP adresine çevirir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: '1. DHCP : « Je viens d’arriver, une adresse ? »\n           → 192.168.1.42\n2. DNS  : « karabuk.edu.tr, c’est quelle IP ? »\n           → l’adresse IP du serveur\n3. Le navigateur se connecte à cette adresse',
            en: '1. DHCP: “I just joined, can I have an address?”\n           → 192.168.1.42\n2. DNS : “What IP is karabuk.edu.tr?”\n           → the server’s IP address\n3. The browser connects to that address',
            tr: '1. DHCP: “Yeni bağlandım, bir adres alabilir miyim?”\n           → 192.168.1.42\n2. DNS : “karabuk.edu.tr hangi IP?”\n           → sunucunun IP adresi\n3. Tarayıcı bu adrese bağlanır',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Sans DHCP, il faudrait configurer chaque appareil à la main. Sans DNS, il faudrait connaître l’adresse IP de chaque site.',
            en: 'Without DHCP, every device would have to be set up by hand. Without DNS, you would need to know every site’s IP address.',
            tr: 'DHCP olmasaydı her cihazı elle ayarlamak gerekirdi. DNS olmasaydı her sitenin IP adresini bilmek gerekirdi.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Un site s’ouvre avec son adresse IP, mais pas avec son nom. Quel service est en panne ?',
          en: 'A site opens with its IP address, but not with its name. Which service is down?',
          tr: 'Bir site IP adresiyle açılıyor ama adıyla açılmıyor. Hangi hizmet arızalı?',
        },
        options: {
          fr: ['DHCP', 'DNS', 'Le câble réseau'],
          en: ['DHCP', 'DNS', 'The network cable'],
          tr: ['DHCP', 'DNS', 'Ağ kablosu'],
        },
        answerIndex: 1,
        explanation: {
          fr: 'La connexion marche (l’IP fonctionne), donc le câble et DHCP vont bien. C’est la traduction nom → IP qui échoue : c’est le rôle de DNS.',
          en: 'The connection works (the IP works), so the cable and DHCP are fine. It is the name → IP translation that fails: that is DNS’s job.',
          tr: 'Bağlantı çalışıyor (IP ile açılıyor), yani kablo ve DHCP sorunsuz. Başarısız olan ad → IP çevirisidir: bu DNS’in görevidir.',
        },
      },
    },
    {
      id: 'net-subnetting',
      title: { fr: 'Découper en sous-réseaux', en: 'Subnetting', tr: 'Alt ağlara bölme' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'On découpe un réseau en sous-réseaux plus petits, par exemple un par service. Plus le nombre après / est grand, plus le sous-réseau est petit.',
            en: 'A network is split into smaller subnets, for example one per department. The bigger the number after /, the smaller the subnet.',
            tr: 'Bir ağ, örneğin her bölüm için bir tane olmak üzere daha küçük alt ağlara bölünür. / işaretinden sonraki sayı büyüdükçe alt ağ küçülür.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'Appareils possibles = 2^(32 − n) − 2\n\n/24 → 2^8 − 2 = 254\n/26 → 2^6 − 2 = 62\n/30 → 2^2 − 2 = 2   (lien entre deux routeurs)',
            en: 'Usable devices = 2^(32 − n) − 2\n\n/24 → 2^8 − 2 = 254\n/26 → 2^6 − 2 = 62\n/30 → 2^2 − 2 = 2   (link between two routers)',
            tr: 'Kullanılabilir cihaz = 2^(32 − n) − 2\n\n/24 → 2^8 − 2 = 254\n/26 → 2^6 − 2 = 62\n/30 → 2^2 − 2 = 2   (iki yönlendirici arası bağlantı)',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'On retire 2 adresses : la première désigne le réseau lui-même, la dernière sert à la diffusion (broadcast) vers tous les appareils.',
            en: 'We remove 2 addresses: the first one names the network itself, the last one is for broadcast to every device.',
            tr: '2 adres çıkarılır: ilki ağın kendisini, sonuncusu ise tüm cihazlara yayın (broadcast) için kullanılır.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Combien d’appareils peut-on placer dans un sous-réseau /28 ?',
          en: 'How many devices fit in a /28 subnet?',
          tr: 'Bir /28 alt ağına kaç cihaz yerleştirilebilir?',
        },
        options: { fr: ['14', '16', '28'], en: ['14', '16', '28'], tr: ['14', '16', '28'] },
        answerIndex: 0,
        explanation: {
          fr: 'Il reste 32 − 28 = 4 bits pour les appareils : 2⁴ = 16 adresses, moins l’adresse réseau et la diffusion, soit 14.',
          en: 'There are 32 − 28 = 4 bits left for devices: 2⁴ = 16 addresses, minus the network and broadcast addresses, so 14.',
          tr: 'Cihazlar için 32 − 28 = 4 bit kalır: 2⁴ = 16 adres; ağ ve yayın adresleri çıkarılınca 14.',
        },
      },
    },
  ],
  'kbu-blm431': [
    {
      id: 'ai-neuron',
      title: { fr: 'Le neurone artificiel', en: 'The artificial neuron', tr: 'Yapay nöron' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Un neurone artificiel multiplie chaque entrée par un poids, additionne le tout avec un biais, puis passe le résultat dans une fonction d’activation.',
            en: 'An artificial neuron multiplies each input by a weight, adds everything up with a bias, then passes the result through an activation function.',
            tr: 'Yapay nöron her girişi bir ağırlıkla çarpar, hepsini bir eşik (bias) değeriyle toplar ve sonucu bir aktivasyon fonksiyonundan geçirir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'entrees = [1, 0, 1]\npoids = [0.5, -1.0, 0.8]\nbiais = -1.0\n\nsomme = sum(x * w for x, w in zip(entrees, poids)) + biais  # 0.3\nsortie = 1 if somme > 0 else 0  # 1',
            en: 'inputs = [1, 0, 1]\nweights = [0.5, -1.0, 0.8]\nbias = -1.0\n\ntotal = sum(x * w for x, w in zip(inputs, weights)) + bias  # 0.3\noutput = 1 if total > 0 else 0  # 1',
            tr: 'girisler = [1, 0, 1]\nagirliklar = [0.5, -1.0, 0.8]\nesik = -1.0\n\ntoplam = sum(x * w for x, w in zip(girisler, agirliklar)) + esik  # 0.3\ncikis = 1 if toplam > 0 else 0  # 1',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Les poids disent l’importance de chaque entrée. Un réseau de neurones relie beaucoup de neurones en couches : la sortie d’une couche devient l’entrée de la suivante.',
            en: 'The weights tell how much each input matters. A neural network links many neurons in layers: one layer’s output becomes the next layer’s input.',
            tr: 'Ağırlıklar, her girişin ne kadar önemli olduğunu gösterir. Yapay sinir ağı birçok nöronu katmanlar halinde bağlar: bir katmanın çıkışı sonrakinin girişi olur.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Entrées [1, 1], poids [0.4, 0.4], biais −1. Que vaut la sortie (1 si somme > 0, sinon 0) ?',
          en: 'Inputs [1, 1], weights [0.4, 0.4], bias −1. What is the output (1 if total > 0, else 0)?',
          tr: 'Girişler [1, 1], ağırlıklar [0.4, 0.4], eşik −1. Çıkış kaçtır (toplam > 0 ise 1, değilse 0)?',
        },
        options: { fr: ['0', '1', '0.8'], en: ['0', '1', '0.8'], tr: ['0', '1', '0.8'] },
        answerIndex: 0,
        explanation: {
          fr: '1 × 0.4 + 1 × 0.4 − 1 = −0.2. Ce n’est pas plus grand que 0, donc la sortie vaut 0.',
          en: '1 × 0.4 + 1 × 0.4 − 1 = −0.2. That is not greater than 0, so the output is 0.',
          tr: '1 × 0.4 + 1 × 0.4 − 1 = −0.2. Bu 0’dan büyük değildir, bu yüzden çıkış 0’dır.',
        },
      },
    },
    {
      id: 'ai-learning-types',
      title: {
        fr: 'Supervisé ou non supervisé',
        en: 'Supervised or unsupervised',
        tr: 'Eğiticili ve eğiticisiz öğrenme',
      },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'En apprentissage supervisé, on donne au modèle des exemples avec la bonne réponse. En non supervisé, on lui donne des données sans réponse et il cherche lui-même des groupes.',
            en: 'In supervised learning, the model gets examples with the right answer. In unsupervised learning, it gets data with no answers and finds groups by itself.',
            tr: 'Eğiticili öğrenmede modele doğru cevabı olan örnekler verilir. Eğiticisiz öğrenmede ise cevapsız veriler verilir ve model grupları kendisi bulur.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'Supervisé :\n  (photo, "chat"), (photo, "chien"), …\n  → le modèle apprend à mettre la bonne étiquette\n\nNon supervisé :\n  [photo, photo, photo, …]   (sans étiquette)\n  → le modèle forme des groupes qui se ressemblent',
            en: 'Supervised:\n  (photo, "cat"), (photo, "dog"), …\n  → the model learns to give the right label\n\nUnsupervised:\n  [photo, photo, photo, …]   (no labels)\n  → the model forms groups that look alike',
            tr: 'Eğiticili:\n  (fotoğraf, "kedi"), (fotoğraf, "köpek"), …\n  → model doğru etiketi vermeyi öğrenir\n\nEğiticisiz:\n  [fotoğraf, fotoğraf, …]   (etiketsiz)\n  → model birbirine benzeyen gruplar oluşturur',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Détecter le spam ou reconnaître des chiffres écrits à la main : supervisé. Regrouper des clients qui achètent la même chose : non supervisé (clustering).',
            en: 'Detecting spam or recognizing handwritten digits: supervised. Grouping customers who buy similar things: unsupervised (clustering).',
            tr: 'İstenmeyen e-postaları tespit etmek ya da el yazısı rakamları tanımak: eğiticili. Benzer şeyler alan müşterileri gruplamak: eğiticisiz (kümeleme).',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Un magasin veut répartir ses clients en groupes semblables, sans savoir à l’avance quels groupes existent. C’est…',
          en: 'A shop wants to split its customers into similar groups, without knowing in advance which groups exist. This is…',
          tr: 'Bir mağaza, hangi grupların olduğunu önceden bilmeden müşterilerini benzer gruplara ayırmak istiyor. Bu…',
        },
        options: {
          fr: ['de l’apprentissage supervisé', 'de l’apprentissage non supervisé', 'ce n’est pas de l’apprentissage'],
          en: ['supervised learning', 'unsupervised learning', 'not learning at all'],
          tr: ['eğiticili öğrenmedir', 'eğiticisiz öğrenmedir', 'öğrenme değildir'],
        },
        answerIndex: 1,
        explanation: {
          fr: 'Il n’y a pas de bonne réponse donnée à l’avance : le modèle doit trouver seul les groupes. C’est du clustering, donc non supervisé.',
          en: 'No right answer is given in advance: the model must find the groups alone. That is clustering, so unsupervised.',
          tr: 'Önceden verilen doğru cevap yoktur: model grupları kendisi bulmalıdır. Bu kümelemedir, yani eğiticisiz öğrenme.',
        },
      },
    },
    {
      id: 'ai-training',
      title: { fr: 'Entraîner un modèle', en: 'Training a model', tr: 'Model eğitimi' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Entraîner, c’est ajuster les poids petit à petit. Après chaque exemple, on mesure l’erreur et on corrige les poids dans le bon sens.',
            en: 'Training means adjusting the weights little by little. After each example, you measure the error and nudge the weights the right way.',
            tr: 'Eğitim, ağırlıkları azar azar ayarlamaktır. Her örnekten sonra hata ölçülür ve ağırlıklar doğru yönde düzeltilir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: '# Règle du perceptron\nerreur = attendu - sortie\nfor i in range(len(poids)):\n    poids[i] += taux * erreur * entrees[i]\nbiais += taux * erreur',
            en: '# Perceptron rule\nerror = expected - output\nfor i in range(len(weights)):\n    weights[i] += rate * error * inputs[i]\nbias += rate * error',
            tr: '# Perceptron kuralı\nhata = beklenen - cikis\nfor i in range(len(agirliklar)):\n    agirliklar[i] += oran * hata * girisler[i]\nesik += oran * hata',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'On garde toujours une partie des données de côté pour le test. Un modèle qui réussit l’entraînement mais rate le test a appris par cœur : c’est le surapprentissage.',
            en: 'You always keep part of the data aside for testing. A model that does well in training but fails the test has memorized: that is overfitting.',
            tr: 'Verilerin bir kısmı her zaman test için ayrılır. Eğitimde başarılı olup testte başarısız olan model ezberlemiştir: buna aşırı öğrenme (overfitting) denir.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Pourquoi garde-t-on des données de test à part ?',
          en: 'Why do we keep test data separate?',
          tr: 'Test verileri neden ayrı tutulur?',
        },
        options: {
          fr: [
            'Pour que l’entraînement aille plus vite',
            'Pour vérifier que le modèle marche sur des exemples qu’il n’a jamais vus',
            'Pour avoir plus de poids dans le réseau',
          ],
          en: [
            'To make training faster',
            'To check that the model works on examples it has never seen',
            'To have more weights in the network',
          ],
          tr: [
            'Eğitimin daha hızlı olması için',
            'Modelin hiç görmediği örneklerde de çalıştığını kontrol etmek için',
            'Ağda daha fazla ağırlık olması için',
          ],
        },
        answerIndex: 1,
        explanation: {
          fr: 'Le vrai but est de bien répondre sur de nouvelles données. Tester sur les exemples d’entraînement ne montrerait pas si le modèle a juste appris par cœur.',
          en: 'The real goal is to answer well on new data. Testing on the training examples wouldn’t show whether the model just memorized them.',
          tr: 'Asıl amaç yeni verilerde doğru cevap vermektir. Eğitim örnekleriyle test etmek, modelin sadece ezberleyip ezberlemediğini göstermez.',
        },
      },
    },
  ],
  'kbu-blm446': [
    {
      id: 'sec-cia',
      title: {
        fr: 'Les 3 piliers de la sécurité',
        en: 'The 3 pillars of security',
        tr: 'Güvenliğin 3 temeli',
      },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'La sécurité informatique protège trois choses, qu’on appelle la triade CIA : la confidentialité, l’intégrité et la disponibilité.',
            en: 'Computer security protects three things, known as the CIA triad: confidentiality, integrity and availability.',
            tr: 'Bilgi güvenliği, CIA üçlüsü denen üç şeyi korur: gizlilik, bütünlük ve erişilebilirlik.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'Confidentialité : seules les bonnes personnes lisent les données\n                  (chiffrement, mots de passe, droits d’accès)\nIntégrité       : personne ne modifie les données en cachette\n                  (empreintes, signatures)\nDisponibilité   : le service reste accessible\n                  (sauvegardes, protection contre les surcharges)',
            en: 'Confidentiality: only the right people can read the data\n                 (encryption, passwords, access rights)\nIntegrity      : nobody changes the data secretly\n                 (hashes, signatures)\nAvailability   : the service stays reachable\n                 (backups, protection against overload)',
            tr: 'Gizlilik       : verileri yalnızca yetkili kişiler okuyabilir\n                 (şifreleme, parolalar, erişim izinleri)\nBütünlük       : kimse verileri gizlice değiştiremez\n                 (özetler, imzalar)\nErişilebilirlik: hizmet her zaman ulaşılabilir kalır\n                 (yedekler, aşırı yüke karşı koruma)',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Face à une attaque, on se demande toujours lequel des trois piliers est touché. Cela aide à choisir la bonne protection.',
            en: 'When facing an attack, always ask which of the three pillars is hit. That helps you pick the right protection.',
            tr: 'Bir saldırıyla karşılaşınca hangi temelin etkilendiğini sormak gerekir. Bu, doğru korumayı seçmeye yardımcı olur.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Un attaquant modifie une note dans la base de données de l’université. Quel pilier est touché ?',
          en: 'An attacker changes a grade in the university’s database. Which pillar is hit?',
          tr: 'Bir saldırgan üniversitenin veritabanındaki bir notu değiştiriyor. Hangi temel etkilenir?',
        },
        options: {
          fr: ['Confidentialité', 'Intégrité', 'Disponibilité'],
          en: ['Confidentiality', 'Integrity', 'Availability'],
          tr: ['Gizlilik', 'Bütünlük', 'Erişilebilirlik'],
        },
        answerIndex: 1,
        explanation: {
          fr: 'La donnée a été modifiée sans autorisation : c’est l’intégrité qui est touchée. S’il l’avait seulement lue, ce serait la confidentialité.',
          en: 'The data was changed without permission: integrity is hit. If the attacker had only read it, it would be confidentiality.',
          tr: 'Veri izinsiz değiştirilmiştir: bütünlük etkilenir. Saldırgan yalnızca okusaydı gizlilik etkilenmiş olurdu.',
        },
      },
    },
    {
      id: 'sec-passwords',
      title: {
        fr: 'Stocker les mots de passe',
        en: 'Storing passwords',
        tr: 'Parolaları saklamak',
      },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'On ne stocke jamais un mot de passe en clair. On stocke son empreinte (hash) : une fonction à sens unique qu’on ne peut pas inverser.',
            en: 'Never store a password in plain text. Store its hash instead: a one-way function that can’t be reversed.',
            tr: 'Parola asla düz metin olarak saklanmaz. Onun yerine özeti (hash) saklanır: geri döndürülemeyen tek yönlü bir fonksiyon.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'import hashlib, os\n\nsel = os.urandom(16)  # aléatoire, différent pour chaque utilisateur\nempreinte = hashlib.pbkdf2_hmac("sha256", b"motdepasse", sel, 100_000)\n\n# On enregistre sel + empreinte, jamais le mot de passe',
            en: 'import hashlib, os\n\nsalt = os.urandom(16)  # random, different for each user\ndigest = hashlib.pbkdf2_hmac("sha256", b"password", salt, 100_000)\n\n# Save salt + digest, never the password',
            tr: 'import hashlib, os\n\ntuz = os.urandom(16)  # rastgele, her kullanıcı için farklı\nozet = hashlib.pbkdf2_hmac("sha256", b"parola", tuz, 100_000)\n\n# tuz + ozet kaydedilir, parola asla kaydedilmez',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'À la connexion, on recalcule l’empreinte avec le même sel et on compare. Les 100 000 répétitions rendent chaque essai lent pour un attaquant.',
            en: 'At login, you compute the hash again with the same salt and compare. The 100,000 rounds make every guess slow for an attacker.',
            tr: 'Girişte özet aynı tuzla yeniden hesaplanır ve karşılaştırılır. 100.000 tekrar, saldırganın her denemesini yavaşlatır.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'À quoi sert le sel ?',
          en: 'What is the salt for?',
          tr: 'Tuz (salt) ne işe yarar?',
        },
        options: {
          fr: [
            'À pouvoir retrouver le mot de passe à partir de l’empreinte',
            'À ce que deux mots de passe identiques n’aient pas la même empreinte',
            'À rendre l’empreinte plus courte',
          ],
          en: [
            'To get the password back from the hash',
            'To make two identical passwords have different hashes',
            'To make the hash shorter',
          ],
          tr: [
            'Özetten parolayı geri elde etmek için',
            'Aynı iki parolanın farklı özetlere sahip olması için',
            'Özeti kısaltmak için',
          ],
        },
        answerIndex: 1,
        explanation: {
          fr: 'Sans sel, tous les utilisateurs de « 123456 » auraient la même empreinte, et un attaquant pourrait utiliser des tables d’empreintes déjà calculées.',
          en: 'Without salt, every user of “123456” would have the same hash, and an attacker could use tables of precomputed hashes.',
          tr: 'Tuz olmasaydı “123456” kullanan herkesin özeti aynı olurdu ve saldırgan önceden hesaplanmış özet tablolarını kullanabilirdi.',
        },
      },
    },
    {
      id: 'sec-encryption',
      title: {
        fr: 'Chiffrement symétrique et asymétrique',
        en: 'Symmetric and asymmetric encryption',
        tr: 'Simetrik ve asimetrik şifreleme',
      },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Chiffrer, c’est rendre un message illisible sans la bonne clé. Il existe deux grandes familles de chiffrement.',
            en: 'Encrypting means making a message unreadable without the right key. There are two main families of encryption.',
            tr: 'Şifrelemek, bir mesajı doğru anahtar olmadan okunamaz hale getirmektir. İki ana şifreleme türü vardır.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'Symétrique (ex. AES)\n  une seule clé pour chiffrer et déchiffrer\n  → rapide, mais il faut partager la clé en secret\n\nAsymétrique (ex. RSA)\n  clé publique : chiffre (tout le monde peut l’avoir)\n  clé privée   : déchiffre (gardée secrète)\n  → pas besoin de partager un secret à l’avance',
            en: 'Symmetric (e.g. AES)\n  one key to encrypt and decrypt\n  → fast, but the key must be shared secretly\n\nAsymmetric (e.g. RSA)\n  public key : encrypts (anyone can have it)\n  private key: decrypts (kept secret)\n  → no need to share a secret in advance',
            tr: 'Simetrik (ör. AES)\n  şifreleme ve çözme için tek anahtar\n  → hızlı, ama anahtar gizlice paylaşılmalı\n\nAsimetrik (ör. RSA)\n  açık anahtar: şifreler (herkeste olabilir)\n  özel anahtar: çözer (gizli tutulur)\n  → önceden sır paylaşmaya gerek yok',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'HTTPS combine les deux : l’asymétrique sert à se mettre d’accord sur une clé, puis le symétrique, plus rapide, chiffre toutes les données.',
            en: 'HTTPS combines both: asymmetric encryption is used to agree on a key, then faster symmetric encryption protects all the data.',
            tr: 'HTTPS ikisini birleştirir: asimetrik şifreleme bir anahtar üzerinde anlaşmak için kullanılır, sonra daha hızlı olan simetrik şifreleme tüm verileri korur.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Ali veut envoyer un message secret à Awa avec RSA. Quelle clé faut-il utiliser pour chiffrer ?',
          en: 'Ali wants to send a secret message to Awa with RSA. Which key must be used to encrypt it?',
          tr: 'Ali, RSA ile Ayşe’ye gizli bir mesaj göndermek istiyor. Şifrelemek için hangi anahtarı kullanır?',
        },
        options: {
          fr: ['La clé privée d’Ali', 'La clé publique d’Awa', 'La clé privée d’Awa'],
          en: ['Ali’s own private key', 'Awa’s public key', 'Awa’s private key'],
          tr: ['Kendi özel anahtarını', 'Ayşe’nin açık anahtarını', 'Ayşe’nin özel anahtarını'],
        },
        answerIndex: 1,
        explanation: {
          fr: 'Ali chiffre avec la clé publique d’Awa, que tout le monde peut connaître. Seule la clé privée d’Awa, que personne d’autre ne possède, peut déchiffrer le message.',
          en: 'Ali encrypts with Awa’s public key, which anyone may know. Only Awa’s private key, which nobody else has, can decrypt the message.',
          tr: 'Ali, herkesin bilebileceği Ayşe’nin açık anahtarıyla şifreler. Mesajı yalnızca Ayşe’nin sahip olduğu özel anahtar çözebilir.',
        },
      },
    },
  ],
};
