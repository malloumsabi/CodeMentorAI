/**
 * BLM446 Bilgi Güvenliği (Information Security), 14 weeks in the spirit of Stallings: security goals,
 * classical and modern cryptography, hashes and signatures, authentication and access control before
 * the midterm; malware, network and web attacks, firewalls and IDS, TLS and PKI, software flaws, risk
 * and law before the final. Every numeric answer was checked with Python.
 * Weeks 1, 3 and 6 keep the ids of the former 3-lesson course.
 */

import type { LessonSource } from '@/data/lessons';

export const blm446Lessons: LessonSource[] = [
  {
    id: 'sec-cia',
    week: 1,
    title: {
      fr: 'Les objectifs de la sécurité : la triade CIA',
      en: 'Security goals: the CIA triad',
      tr: 'Güvenliğin amaçları: CIA üçlüsü',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La sécurité de l’information protège trois propriétés. Confidentialité : seules les personnes autorisées lisent les données. Intégrité : les données ne sont pas modifiées sans autorisation. Disponibilité : le service fonctionne quand on en a besoin. On y ajoute souvent l’authenticité et la non-répudiation (impossible de nier avoir envoyé un message). Une vulnérabilité est une faiblesse ; une menace est ce qui peut l’exploiter ; le risque combine la probabilité et l’impact.',
          en: 'Information security protects three properties. Confidentiality: only authorized people read the data. Integrity: data isn’t changed without authorization. Availability: the service works when needed. Authenticity and non-repudiation (being unable to deny having sent a message) are often added. A vulnerability is a weakness; a threat is what can exploit it; risk combines likelihood and impact.',
          tr: 'Bilgi güvenliği üç özelliği korur. Gizlilik: verileri yalnızca yetkili kişiler okur. Bütünlük: veriler izinsiz değiştirilmez. Erişilebilirlik: hizmet gerektiğinde çalışır. Genellikle kimlik doğrulama ve inkâr edilemezlik (bir mesajı gönderdiğini inkâr edememe) de eklenir. Zafiyet bir zayıflıktır; tehdit onu kullanabilecek şeydir; risk olasılık ile etkiyi birleştirir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Attaque                                      Propriété touchée\nécoute d’un réseau Wi-Fi non chiffré        confidentialité\nmodification d’une note dans une base       intégrité\nattaque par déni de service (DDoS)           disponibilité\nusurpation d’identité (phishing)             authenticité\n\nDéfense en profondeur : plusieurs couches de protection\n(pare-feu + mots de passe forts + chiffrement + sauvegardes + formation)\nMoindre privilège : chacun n’a que les droits strictement nécessaires',
          en: 'Attack                                       Property affected\neavesdropping on an unencrypted Wi-Fi       confidentiality\nchanging a grade in a database              integrity\ndenial of service attack (DDoS)             availability\nidentity theft (phishing)                   authenticity\n\nDefense in depth: several layers of protection\n(firewall + strong passwords + encryption + backups + training)\nLeast privilege: everyone has only the rights strictly needed',
          tr: 'Saldırı                                      Etkilenen özellik\nşifresiz Wi-Fi’yi dinlemek                   gizlilik\nbir veritabanında not değiştirmek            bütünlük\nhizmet engelleme saldırısı (DDoS)            erişilebilirlik\nkimlik avı (phishing)                        kimlik doğrulama\n\nDerinlemesine savunma: birkaç koruma katmanı\n(güvenlik duvarı + güçlü parolalar + şifreleme + yedekler + eğitim)\nEn az yetki: herkes yalnızca kesinlikle gereken haklara sahiptir',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pour chaque incident, quelle propriété de la triade CIA est touchée ? (1) Un rançongiciel chiffre tous les fichiers de l’hôpital. (2) Un employé copie la liste des clients sur une clé USB. (3) Un pirate modifie le montant d’un virement en transit. (4) Pourquoi des sauvegardes régulières protègent-elles contre le cas (1) ?',
          en: 'For each incident, which CIA property is affected? (1) Ransomware encrypts every file of the hospital. (2) An employee copies the customer list to a USB stick. (3) An attacker changes the amount of a transfer in transit. (4) Why do regular backups protect against case (1)?',
          tr: 'Her olayda CIA üçlüsünün hangi özelliği etkilenir? (1) Bir fidye yazılımı hastanenin tüm dosyalarını şifreliyor. (2) Bir çalışan müşteri listesini bir USB belleğe kopyalıyor. (3) Bir saldırgan aktarım sırasındaki bir havalenin tutarını değiştiriyor. (4) Düzenli yedekler neden (1) durumuna karşı korur?',
        },
        solution: {
          fr: '(1) Disponibilité : les données existent toujours mais sont inutilisables (et souvent aussi la confidentialité, si elles sont volées avant). (2) Confidentialité. (3) Intégrité. (4) On peut restaurer les fichiers sans payer la rançon, à condition que les sauvegardes soient hors ligne : sinon, le rançongiciel les chiffre aussi.',
          en: '(1) Availability: the data still exists but can’t be used (and often confidentiality too, if it was stolen first). (2) Confidentiality. (3) Integrity. (4) Files can be restored without paying the ransom, provided the backups are offline: otherwise the ransomware encrypts them too.',
          tr: '(1) Erişilebilirlik: veriler hâlâ vardır ama kullanılamaz (önce çalındıysa çoğu zaman gizlilik de). (2) Gizlilik. (3) Bütünlük. (4) Fidye ödemeden dosyalar geri yüklenebilir; yeter ki yedekler çevrim dışı olsun: yoksa fidye yazılımı onları da şifreler.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Une attaque DDoS rend un site web inaccessible. Quelle propriété est touchée ?',
        en: 'A DDoS attack makes a website unreachable. Which property is affected?',
        tr: 'Bir DDoS saldırısı bir web sitesini erişilemez yapıyor. Hangi özellik etkilenir?',
      },
      options: { fr: ['Confidentialité', 'Intégrité', 'Disponibilité'], en: ['Confidentiality', 'Integrity', 'Availability'], tr: ['Gizlilik', 'Bütünlük', 'Erişilebilirlik'] },
      answerIndex: 2,
      explanation: {
        fr: 'Rien n’est lu ni modifié, mais le service n’est plus accessible aux utilisateurs légitimes : c’est la disponibilité.',
        en: 'Nothing is read or changed, but the service is no longer reachable by legitimate users: that is availability.',
        tr: 'Hiçbir şey okunmaz veya değiştirilmez, ama hizmete meşru kullanıcılar artık erişemez: bu erişilebilirliktir.',
      },
    },
  },
  {
    id: 'sec-w02-classical-ciphers',
    week: 2,
    title: { fr: 'Chiffrements classiques', en: 'Classical ciphers', tr: 'Klasik şifreler' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le chiffrement de César décale chaque lettre de k positions : il n’y a que 25 clés, on les essaie toutes (force brute). Une substitution quelconque a 26! ≈ 4 × 10²⁶ clés, mais elle se casse par analyse de fréquences : en turc ou en anglais, certaines lettres (A, E…) sont bien plus fréquentes. Vigenère utilise un mot-clé, donc plusieurs décalages, ce qui brouille les fréquences. Principe de Kerckhoffs : la sécurité doit reposer sur le secret de la clé, pas de l’algorithme.',
          en: 'The Caesar cipher shifts each letter by k positions: there are only 25 keys, so try them all (brute force). A general substitution has 26! ≈ 4 × 10²⁶ keys, but frequency analysis breaks it: in Turkish or English, some letters (A, E…) are far more frequent. Vigenère uses a keyword, so several shifts, which blurs the frequencies. Kerckhoffs’s principle: security must rest on the secrecy of the key, not of the algorithm.',
          tr: 'Sezar şifresi her harfi k konum kaydırır: yalnızca 25 anahtar vardır, hepsi denenir (kaba kuvvet). Genel bir yerine koyma şifresinin 26! ≈ 4 × 10²⁶ anahtarı vardır ama sıklık analiziyle kırılır: Türkçede veya İngilizcede bazı harfler (A, E…) çok daha sık geçer. Vigenère bir anahtar sözcük, yani birkaç kaydırma kullanır; bu da sıklıkları bulanıklaştırır. Kerckhoffs ilkesi: güvenlik algoritmanın değil, anahtarın gizliliğine dayanmalıdır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'César : C = (P + k) mod 26          P = (C − k) mod 26\nA B C D E F G H I J K L M N O P Q R S T U V W X Y Z\n0 1 2 3 4 5 6 7 8 9 …                          25\n\nVigenère : clé répétée sous le texte, on additionne lettre par lettre\ntexte  A T T A C K\nclé    K E Y K E Y\nchiffré: A+K = K, T+E = X, T+Y = R, …',
          en: 'Caesar: C = (P + k) mod 26          P = (C − k) mod 26\nA B C D E F G H I J K L M N O P Q R S T U V W X Y Z\n0 1 2 3 4 5 6 7 8 9 …                          25\n\nVigenère: key repeated under the text, add letter by letter\ntext   A T T A C K\nkey    K E Y K E Y\ncipher: A+K = K, T+E = X, T+Y = R, …',
          tr: 'Sezar: C = (P + k) mod 26          P = (C − k) mod 26\nA B C D E F G H I J K L M N O P Q R S T U V W X Y Z\n0 1 2 3 4 5 6 7 8 9 …                          25\n\nVigenère: anahtar metnin altında tekrarlanır, harf harf toplanır\nmetin  A T T A C K\nanahtar K E Y K E Y\nşifreli: A+K = K, T+E = X, T+Y = R, …',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Chiffre KARABUK avec César, k = 3. (2) Déchiffre PHHW, chiffré avec k = 3. (3) Termine le chiffrement Vigenère de ATTACK avec la clé KEY. (4) Combien d’essais au maximum pour casser un César par force brute ?',
          en: '(1) Encrypt KARABUK with Caesar, k = 3. (2) Decrypt PHHW, encrypted with k = 3. (3) Finish the Vigenère encryption of ATTACK with the key KEY. (4) At most how many tries does brute-forcing a Caesar cipher take?',
          tr: '(1) KARABUK’u Sezar ile, k = 3, şifrele. (2) k = 3 ile şifrelenmiş PHHW’yi çöz. (3) ATTACK’in KEY anahtarıyla Vigenère şifrelemesini tamamla. (4) Bir Sezar şifresini kaba kuvvetle kırmak en fazla kaç deneme ister?',
        },
        solution: {
          fr: '(1) K→N, A→D, R→U, A→D, B→E, U→X, K→N : NDUDEXN. (2) P→M, H→E, H→E, W→T : MEET. (3) K, X, R, puis A+K = K, C+E = G, K+Y = I : KXRKGI. Les deux A du texte donnent ici le même K, car ils tombent sous la même lettre de clé ; un A sous E aurait donné E. (4) 25 décalages possibles (k = 0 ne chiffre rien) : un ordinateur les teste instantanément.',
          en: '(1) K→N, A→D, R→U, A→D, B→E, U→X, K→N: NDUDEXN. (2) P→M, H→E, H→E, W→T: MEET. (3) K, X, R, then A+K = K, C+E = G, K+Y = I: KXRKGI. The text’s two A’s both give K here, since they fall under the same key letter; an A under E would have given E. (4) 25 possible shifts (k = 0 encrypts nothing): a computer tests them instantly.',
          tr: '(1) K→N, A→D, R→U, A→D, B→E, U→X, K→N: NDUDEXN. (2) P→M, H→E, H→E, W→T: MEET. (3) K, X, R, sonra A+K = K, C+E = G, K+Y = I: KXRKGI. Metindeki iki A burada aynı anahtar harfinin altına düştüğü için ikisi de K verir; E altındaki bir A, E verirdi. (4) 25 olası kaydırma (k = 0 hiçbir şeyi şifrelemez): bir bilgisayar hepsini anında dener.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Comment casse-t-on une substitution monoalphabétique malgré ses 26! clés ?',
        en: 'How is a monoalphabetic substitution broken despite its 26! keys?',
        tr: '26! anahtarına rağmen tek alfabeli bir yerine koyma şifresi nasıl kırılır?',
      },
      options: {
        fr: ['En essayant toutes les clés', 'Par analyse de fréquences des lettres', 'C’est impossible'],
        en: ['By trying every key', 'By letter frequency analysis', 'It can’t be done'],
        tr: ['Tüm anahtarları deneyerek', 'Harf sıklığı analiziyle', 'Kırılamaz'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Chaque lettre est toujours remplacée par la même : la lettre la plus fréquente du chiffré correspond sans doute à la plus fréquente de la langue. Un grand nombre de clés ne suffit pas à rendre un chiffrement sûr.',
        en: 'Each letter is always replaced by the same one: the most frequent ciphertext letter likely matches the language’s most frequent letter. A huge key space alone doesn’t make a cipher secure.',
        tr: 'Her harf hep aynı harfle değiştirilir: şifreli metindeki en sık harf büyük olasılıkla dilin en sık harfine karşılık gelir. Çok büyük bir anahtar uzayı tek başına bir şifreyi güvenli yapmaz.',
      },
    },
  },
  {
    id: 'sec-encryption',
    week: 3,
    title: {
      fr: 'Chiffrement symétrique moderne : AES et modes',
      en: 'Modern symmetric encryption: AES and modes',
      tr: 'Modern simetrik şifreleme: AES ve kipler',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En chiffrement symétrique, la même clé sert à chiffrer et à déchiffrer. DES (clé de 56 bits) se casse aujourd’hui par force brute ; AES chiffre des blocs de 128 bits avec des clés de 128, 192 ou 256 bits. Un message plus long qu’un bloc utilise un mode. ECB chiffre chaque bloc séparément : deux blocs identiques donnent le même chiffré, et des motifs restent visibles. CBC combine chaque bloc avec le chiffré précédent et part d’un vecteur d’initialisation (IV) aléatoire. GCM chiffre et protège aussi l’intégrité.',
          en: 'In symmetric encryption, the same key encrypts and decrypts. DES (a 56-bit key) is brute-forced today; AES encrypts 128-bit blocks with 128-, 192- or 256-bit keys. A message longer than one block uses a mode. ECB encrypts each block separately: two identical blocks give the same ciphertext, and patterns stay visible. CBC combines each block with the previous ciphertext and starts from a random initialization vector (IV). GCM encrypts and protects integrity too.',
          tr: 'Simetrik şifrelemede aynı anahtar hem şifreler hem çözer. DES (56 bitlik anahtar) bugün kaba kuvvetle kırılır; AES, 128, 192 veya 256 bitlik anahtarlarla 128 bitlik blokları şifreler. Bir bloktan uzun mesaj bir kip kullanır. ECB her bloğu ayrı şifreler: iki aynı blok aynı şifreli metni verir ve örüntüler görünür kalır. CBC her bloğu önceki şifreli blokla birleştirir ve rastgele bir başlangıç vektöründen (IV) başlar. GCM şifrelemenin yanında bütünlüğü de korur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'ECB : Cᵢ = E(K, Pᵢ)\nCBC : Cᵢ = E(K, Pᵢ ⊕ Cᵢ₋₁),  C₀ = IV aléatoire\n\nForce brute :\nDES  2⁵⁶  ≈ 7,2 × 10¹⁶ clés   → cassé en quelques heures avec du matériel dédié\nAES  2¹²⁸ ≈ 3,4 × 10³⁸ clés   → hors de portée\n\nProblème du chiffrement symétrique : échanger la clé en secret\n(n personnes qui veulent toutes communiquer : n(n − 1)/2 clés)',
          en: 'ECB: Cᵢ = E(K, Pᵢ)\nCBC: Cᵢ = E(K, Pᵢ ⊕ Cᵢ₋₁),  C₀ = random IV\n\nBrute force:\nDES  2⁵⁶  ≈ 7.2 × 10¹⁶ keys   → broken in hours with dedicated hardware\nAES  2¹²⁸ ≈ 3.4 × 10³⁸ keys   → out of reach\n\nThe symmetric problem: exchanging the key secretly\n(n people who all want to talk: n(n − 1)/2 keys)',
          tr: 'ECB: Cᵢ = E(K, Pᵢ)\nCBC: Cᵢ = E(K, Pᵢ ⊕ Cᵢ₋₁),  C₀ = rastgele IV\n\nKaba kuvvet:\nDES  2⁵⁶  ≈ 7,2 × 10¹⁶ anahtar   → özel donanımla saatlerde kırılır\nAES  2¹²⁸ ≈ 3,4 × 10³⁸ anahtar   → erişilemez\n\nSimetrik şifrelemenin sorunu: anahtarı gizlice paylaşmak\n(hepsi birbiriyle konuşmak isteyen n kişi: n(n − 1)/2 anahtar)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) On chiffre une image bitmap avec AES en mode ECB : pourquoi peut-on encore deviner sa forme ? Que change CBC ? (2) Une entreprise de 100 employés veut une clé symétrique pour chaque paire d’employés : combien de clés ? (3) Que se passe-t-il si on réutilise le même IV pour deux messages en CBC ?',
          en: '(1) A bitmap image is encrypted with AES in ECB mode: why can its shape still be guessed? What does CBC change? (2) A company of 100 employees wants one symmetric key per pair of employees: how many keys? (3) What happens if the same IV is reused for two CBC messages?',
          tr: '(1) Bir bitmap görüntü ECB kipinde AES ile şifreleniyor: şekli neden hâlâ tahmin edilebilir? CBC neyi değiştirir? (2) 100 çalışanlı bir şirket her çalışan çifti için bir simetrik anahtar istiyor: kaç anahtar? (3) CBC’de iki mesaj için aynı IV kullanılırsa ne olur?',
        },
        solution: {
          fr: '(1) Les zones de même couleur donnent des blocs clairs identiques, donc des blocs chiffrés identiques : les contours restent visibles (le célèbre « pingouin ECB »). Avec CBC, chaque bloc dépend de tous les précédents et de l’IV : des blocs identiques donnent des chiffrés différents. (2) 100 × 99 / 2 = 4950 clés. C’est pour cela qu’on utilise la cryptographie à clé publique (semaine 4). (3) Deux messages qui commencent pareil donnent le même début de chiffré : un espion voit qu’ils ont un préfixe commun. L’IV doit être imprévisible et différent à chaque message.',
          en: '(1) Same-colored areas give identical plaintext blocks, hence identical ciphertext blocks: the outlines stay visible (the famous “ECB penguin”). With CBC, each block depends on all previous ones and on the IV: identical blocks give different ciphertexts. (2) 100 × 99 / 2 = 4950 keys. That is why public-key cryptography is used (week 4). (3) Two messages starting the same give the same ciphertext start: an eavesdropper sees they share a prefix. The IV must be unpredictable and different for every message.',
          tr: '(1) Aynı renkli bölgeler aynı açık blokları, dolayısıyla aynı şifreli blokları verir: hatlar görünür kalır (ünlü “ECB penguenı”). CBC’de her blok öncekilerin hepsine ve IV’ye bağlıdır: aynı bloklar farklı şifreli metinler verir. (2) 100 × 99 / 2 = 4950 anahtar. Açık anahtarlı kriptografi (4. hafta) bu yüzden kullanılır. (3) Aynı şekilde başlayan iki mesaj aynı şifreli başlangıcı verir: dinleyen biri ortak bir önek olduğunu görür. IV tahmin edilemez ve her mesajda farklı olmalıdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel mode de chiffrement ne faut-il pas utiliser pour des données longues ou structurées ?',
        en: 'Which encryption mode should not be used for long or structured data?',
        tr: 'Uzun veya yapılandırılmış veriler için hangi şifreleme kipi kullanılmamalıdır?',
      },
      options: { fr: ['ECB', 'CBC', 'GCM'], en: ['ECB', 'CBC', 'GCM'], tr: ['ECB', 'CBC', 'GCM'] },
      answerIndex: 0,
      explanation: {
        fr: 'ECB laisse voir les répétitions du message. CBC (avec un IV aléatoire) et GCM les masquent, et GCM protège en plus l’intégrité.',
        en: 'ECB reveals repetitions in the message. CBC (with a random IV) and GCM hide them, and GCM also protects integrity.',
        tr: 'ECB mesajdaki tekrarları gösterir. CBC (rastgele IV ile) ve GCM onları gizler; GCM ayrıca bütünlüğü korur.',
      },
    },
  },
  {
    id: 'sec-w04-public-key',
    week: 4,
    title: {
      fr: 'Cryptographie à clé publique : Diffie-Hellman et RSA',
      en: 'Public-key cryptography: Diffie-Hellman and RSA',
      tr: 'Açık anahtarlı kriptografi: Diffie-Hellman ve RSA',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Chaque personne a une paire de clés : une clé publique, diffusée à tous, et une clé privée, gardée secrète. Diffie-Hellman permet à deux personnes de fabriquer une clé secrète commune en n’échangeant que des valeurs publiques : retrouver le secret demanderait de résoudre un logarithme discret. RSA repose sur la difficulté de factoriser n = p × q quand p et q sont de très grands nombres premiers. Ces calculs sont lents : on s’en sert pour échanger une clé AES, pas pour chiffrer de gros fichiers.',
          en: 'Each person has a key pair: a public key, shared with everyone, and a private key, kept secret. Diffie-Hellman lets two people build a shared secret key while exchanging only public values: recovering the secret would require solving a discrete logarithm. RSA rests on the difficulty of factoring n = p × q when p and q are very large primes. These computations are slow: they are used to exchange an AES key, not to encrypt large files.',
          tr: 'Her kişinin bir anahtar çifti vardır: herkese dağıtılan açık anahtar ve gizli tutulan özel anahtar. Diffie-Hellman, iki kişinin yalnızca açık değerler paylaşarak ortak bir gizli anahtar oluşturmasını sağlar: sırrı bulmak ayrık logaritma çözmeyi gerektirirdi. RSA, p ve q çok büyük asal sayılarken n = p × q’yu çarpanlara ayırmanın zorluğuna dayanır. Bu hesaplar yavaştır: büyük dosyaları şifrelemek için değil, bir AES anahtarı paylaşmak için kullanılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Diffie-Hellman (valeurs publiques p = 23, g = 5)\nAlice choisit a = 6 (secret)   → envoie A = gᵃ mod p\nBob   choisit b = 15 (secret)  → envoie B = gᵇ mod p\nAlice calcule Bᵃ mod p,  Bob calcule Aᵇ mod p  → la même clé K\n\nAttaque de l’homme du milieu : sans authentification, Ève peut faire\nun échange avec Alice et un autre avec Bob → il faut des signatures\nou des certificats (semaine 12)',
          en: 'Diffie-Hellman (public values p = 23, g = 5)\nAlice picks a = 6 (secret)   → sends A = gᵃ mod p\nBob   picks b = 15 (secret)  → sends B = gᵇ mod p\nAlice computes Bᵃ mod p,  Bob computes Aᵇ mod p  → the same key K\n\nMan-in-the-middle attack: without authentication, Eve can run\none exchange with Alice and another with Bob → signatures\nor certificates are needed (week 12)',
          tr: 'Diffie-Hellman (açık değerler p = 23, g = 5)\nAlice a = 6 seçer (gizli)   → A = gᵃ mod p gönderir\nBob   b = 15 seçer (gizli)  → B = gᵇ mod p gönderir\nAlice Bᵃ mod p, Bob Aᵇ mod p hesaplar  → aynı K anahtarı\n\nOrtadaki adam saldırısı: kimlik doğrulama olmadan Eve,\nAlice ile bir, Bob ile başka bir değişim yapabilir → imzalar\nveya sertifikalar gerekir (12. hafta)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Calcule les valeurs de l’échange Diffie-Hellman ci-dessus : A, B, puis la clé K obtenue par Alice et par Bob. Qu’est-ce qu’un espion voit passer, et pourquoi ne peut-il pas trouver K quand p est très grand ?',
          en: 'Compute the values of the Diffie-Hellman exchange above: A, B, then the key K obtained by Alice and by Bob. What does an eavesdropper see, and why can’t they find K when p is very large?',
          tr: 'Yukarıdaki Diffie-Hellman değişiminin değerlerini hesapla: A, B, sonra Alice’in ve Bob’un elde ettiği K anahtarı. Dinleyen biri neyi görür ve p çok büyükken K’yi neden bulamaz?',
        },
        solution: {
          fr: 'A = 5⁶ mod 23 = 15 625 mod 23 = 8. B = 5¹⁵ mod 23 = 19. Alice : 19⁶ mod 23 = 2. Bob : 8¹⁵ mod 23 = 2. Les deux obtiennent K = 2. L’espion voit p = 23, g = 5, A = 8 et B = 19. Pour trouver K, il lui faudrait a ou b, c’est-à-dire résoudre 5ᵃ ≡ 8 (mod 23). C’est facile ici, mais impossible en pratique avec un p de 2048 bits.',
          en: 'A = 5⁶ mod 23 = 15,625 mod 23 = 8. B = 5¹⁵ mod 23 = 19. Alice: 19⁶ mod 23 = 2. Bob: 8¹⁵ mod 23 = 2. Both get K = 2. The eavesdropper sees p = 23, g = 5, A = 8 and B = 19. To find K, they would need a or b, i.e. solve 5ᵃ ≡ 8 (mod 23). Easy here, but impossible in practice with a 2048-bit p.',
          tr: 'A = 5⁶ mod 23 = 15.625 mod 23 = 8. B = 5¹⁵ mod 23 = 19. Alice: 19⁶ mod 23 = 2. Bob: 8¹⁵ mod 23 = 2. İkisi de K = 2 elde eder. Dinleyen p = 23, g = 5, A = 8 ve B = 19’u görür. K’yi bulmak için a veya b gerekir, yani 5ᵃ ≡ 8 (mod 23) çözülmelidir. Burada kolaydır ama 2048 bitlik bir p ile pratikte imkânsızdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Sur quelle difficulté repose la sécurité de RSA ?',
        en: 'Which hard problem does RSA’s security rest on?',
        tr: 'RSA’nın güvenliği hangi zor probleme dayanır?',
      },
      options: {
        fr: ['Factoriser un grand nombre en nombres premiers', 'Trier une très grande liste', 'Trouver le plus court chemin dans un graphe'],
        en: ['Factoring a large number into primes', 'Sorting a very large list', 'Finding the shortest path in a graph'],
        tr: ['Büyük bir sayıyı asal çarpanlarına ayırmak', 'Çok büyük bir listeyi sıralamak', 'Bir grafta en kısa yolu bulmak'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Connaître p et q permet de calculer la clé privée, mais retrouver p et q à partir de n (2048 bits) est hors de portée des ordinateurs actuels. Un futur ordinateur quantique pourrait le faire : on prépare donc une cryptographie post-quantique.',
        en: 'Knowing p and q lets you compute the private key, but recovering p and q from n (2048 bits) is beyond today’s computers. A future quantum computer could do it, so post-quantum cryptography is being prepared.',
        tr: 'p ve q’yu bilmek özel anahtarı hesaplamayı sağlar, ama n’den (2048 bit) p ve q’yu bulmak bugünkü bilgisayarların ötesindedir. Gelecekteki bir kuantum bilgisayar bunu yapabilir; bu yüzden kuantum sonrası kriptografi hazırlanıyor.',
      },
    },
  },
  {
    id: 'sec-w05-hash-signatures',
    week: 5,
    title: {
      fr: 'Fonctions de hachage, MAC et signatures numériques',
      en: 'Hash functions, MACs and digital signatures',
      tr: 'Özet fonksiyonları, MAC ve sayısal imzalar',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une fonction de hachage (SHA-256) transforme un message de taille quelconque en une empreinte de taille fixe. Elle doit être à sens unique (impossible de retrouver le message), résistante aux collisions (impossible de trouver deux messages de même empreinte), et changer complètement si on modifie un seul bit (effet avalanche). Un MAC (HMAC) mélange une clé secrète au hachage : il prouve l’intégrité et l’origine entre deux personnes qui partagent la clé. Une signature numérique se fait avec une clé privée : tout le monde peut la vérifier, et le signataire ne peut pas la nier.',
          en: 'A hash function (SHA-256) turns a message of any size into a fixed-size digest. It must be one-way (the message can’t be recovered), collision-resistant (no two messages with the same digest can be found), and change completely when a single bit changes (avalanche effect). A MAC (HMAC) mixes a secret key into the hash: it proves integrity and origin between two people sharing the key. A digital signature is made with a private key: anyone can verify it, and the signer can’t deny it.',
          tr: 'Özet fonksiyonu (SHA-256) herhangi boyuttaki bir mesajı sabit boyutlu bir özete dönüştürür. Tek yönlü olmalı (mesaj geri bulunamaz), çakışmaya dayanıklı olmalı (aynı özete sahip iki mesaj bulunamaz) ve tek bir bit değişince tamamen değişmelidir (çığ etkisi). MAC (HMAC) özete gizli bir anahtar karıştırır: anahtarı paylaşan iki kişi arasında bütünlüğü ve kaynağı kanıtlar. Sayısal imza özel anahtarla yapılır: herkes doğrulayabilir ve imzalayan inkâr edemez.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'SHA-256("abc") = ba7816bf8f01cfea…\nSHA-256("abd") = a52d159f262b2c6d…   ← une lettre change, tout change\n\nParadoxe des anniversaires : avec une empreinte de n bits,\non trouve une collision après environ 2^(n/2) essais (pas 2ⁿ)\n\nSignature RSA (mini clé : n = 33, e = 3, d = 7)\nsigner   : s = h(m)^d mod n        (clé privée)\nvérifier : s^e mod n = h(m) ?      (clé publique)\nMD5 et SHA-1 sont cassés : utiliser SHA-256 ou SHA-3',
          en: 'SHA-256("abc") = ba7816bf8f01cfea…\nSHA-256("abd") = a52d159f262b2c6d…   ← one letter changes, everything changes\n\nBirthday paradox: with an n-bit digest,\na collision is found after about 2^(n/2) tries (not 2ⁿ)\n\nRSA signature (mini key: n = 33, e = 3, d = 7)\nsign   : s = h(m)^d mod n        (private key)\nverify : s^e mod n = h(m)?       (public key)\nMD5 and SHA-1 are broken: use SHA-256 or SHA-3',
          tr: 'SHA-256("abc") = ba7816bf8f01cfea…\nSHA-256("abd") = a52d159f262b2c6d…   ← bir harf değişir, her şey değişir\n\nDoğum günü paradoksu: n bitlik bir özetle\nyaklaşık 2^(n/2) denemede (2ⁿ değil) bir çakışma bulunur\n\nRSA imzası (mini anahtar: n = 33, e = 3, d = 7)\nimzala   : s = h(m)^d mod n        (özel anahtar)\ndoğrula  : s^e mod n = h(m)?       (açık anahtar)\nMD5 ve SHA-1 kırılmıştır: SHA-256 veya SHA-3 kullan',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Avec la mini clé RSA, signe un message dont l’empreinte vaut h(m) = 5, puis vérifie la signature. (2) Combien d’essais faut-il environ pour trouver une collision sur une empreinte de 64 bits ? Pourquoi est-ce trop peu ? (3) Pourquoi un simple hachage, sans clé, ne prouve-t-il pas qui a envoyé le message ?',
          en: '(1) With the mini RSA key, sign a message whose digest is h(m) = 5, then verify the signature. (2) About how many tries find a collision on a 64-bit digest? Why is that too few? (3) Why doesn’t a plain hash, without a key, prove who sent the message?',
          tr: '(1) Mini RSA anahtarıyla özeti h(m) = 5 olan bir mesajı imzala, sonra imzayı doğrula. (2) 64 bitlik bir özette çakışma bulmak yaklaşık kaç deneme ister? Bu neden çok azdır? (3) Anahtarsız basit bir özet, mesajı kimin gönderdiğini neden kanıtlamaz?',
        },
        solution: {
          fr: '(1) s = 5⁷ mod 33 = 78 125 mod 33 = 14. Vérification : 14³ mod 33 = 2744 mod 33 = 5 = h(m), la signature est valide. (2) 2³² ≈ 4,3 milliards d’essais, ce qu’un ordinateur fait en quelques secondes : c’est pour cela que les empreintes font au moins 256 bits. (3) N’importe qui peut recalculer l’empreinte d’un message modifié : un attaquant change le message ET l’empreinte. Il faut une clé (MAC) ou une signature.',
          en: '(1) s = 5⁷ mod 33 = 78,125 mod 33 = 14. Check: 14³ mod 33 = 2744 mod 33 = 5 = h(m), the signature is valid. (2) 2³² ≈ 4.3 billion tries, which a computer does in seconds: that is why digests are at least 256 bits. (3) Anyone can recompute the digest of a modified message: an attacker changes the message AND the digest. A key (MAC) or a signature is needed.',
          tr: '(1) s = 5⁷ mod 33 = 78.125 mod 33 = 14. Doğrulama: 14³ mod 33 = 2744 mod 33 = 5 = h(m), imza geçerlidir. (2) 2³² ≈ 4,3 milyar deneme; bir bilgisayar bunu saniyeler içinde yapar: özetler bu yüzden en az 256 bittir. (3) Herkes değiştirilmiş bir mesajın özetini yeniden hesaplayabilir: saldırgan mesajı VE özeti değiştirir. Bir anahtar (MAC) veya imza gerekir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Avec quelle clé Alice signe-t-elle un document ?',
        en: 'Which key does Alice use to sign a document?',
        tr: 'Alice bir belgeyi hangi anahtarla imzalar?',
      },
      options: {
        fr: ['Sa clé privée', 'Sa clé publique', 'La clé publique du destinataire'],
        en: ['Her private key', 'Her public key', 'The recipient’s public key'],
        tr: ['Kendi özel anahtarı', 'Kendi açık anahtarı', 'Alıcının açık anahtarı'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Seule Alice possède sa clé privée, donc seule elle peut produire la signature ; tout le monde la vérifie avec sa clé publique. C’est l’inverse du chiffrement, où l’on utilise la clé publique du destinataire.',
        en: 'Only Alice holds her private key, so only she can produce the signature; anyone verifies it with her public key. It is the reverse of encryption, which uses the recipient’s public key.',
        tr: 'Özel anahtar yalnızca Alice’tedir, bu yüzden imzayı yalnızca o üretebilir; herkes onun açık anahtarıyla doğrular. Bu, alıcının açık anahtarının kullanıldığı şifrelemenin tersidir.',
      },
    },
  },
  {
    id: 'sec-passwords',
    week: 6,
    title: {
      fr: 'Authentification et mots de passe',
      en: 'Authentication and passwords',
      tr: 'Kimlik doğrulama ve parolalar',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'S’authentifier, c’est prouver son identité avec quelque chose que l’on sait (mot de passe), que l’on possède (téléphone, clé de sécurité) ou que l’on est (empreinte digitale). L’authentification multifacteur combine au moins deux de ces catégories. Le serveur ne stocke jamais les mots de passe en clair : il garde un hachage lent (bcrypt, Argon2) avec un sel aléatoire propre à chaque utilisateur. Le sel empêche les tables précalculées et fait que deux mots de passe identiques ne donnent pas le même hachage.',
          en: 'Authenticating means proving your identity with something you know (password), have (phone, security key) or are (fingerprint). Multi-factor authentication combines at least two of these categories. The server never stores passwords in plain text: it keeps a slow hash (bcrypt, Argon2) with a random salt unique to each user. The salt defeats precomputed tables and makes two identical passwords give different hashes.',
          tr: 'Kimlik doğrulama, kimliğini bildiğin (parola), sahip olduğun (telefon, güvenlik anahtarı) veya olduğun (parmak izi) bir şeyle kanıtlamaktır. Çok faktörlü kimlik doğrulama bu kategorilerden en az ikisini birleştirir. Sunucu parolaları asla düz metin saklamaz: her kullanıcıya özel rastgele bir tuzla yavaş bir özet (bcrypt, Argon2) tutar. Tuz önceden hesaplanmış tabloları işe yaramaz kılar ve aynı iki parolanın farklı özetler vermesini sağlar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Nombre de mots de passe possibles = (taille de l’alphabet)^(longueur)\nminuscules (26), 8 caractères               : 26⁸  ≈ 2,1 × 10¹¹\nminuscules + majuscules + chiffres (62), 8  : 62⁸  ≈ 2,2 × 10¹⁴\n94 caractères imprimables, 12 caractères     : 94¹² ≈ 4,8 × 10²³\n\nAttaquant : 10¹⁰ essais par seconde sur un hachage rapide (GPU)\nAttaques : force brute, dictionnaire, réutilisation de mots de passe volés\n(credential stuffing), hameçonnage (phishing)',
          en: 'Number of possible passwords = (alphabet size)^(length)\nlowercase (26), 8 characters                 : 26⁸  ≈ 2.1 × 10¹¹\nlower + upper + digits (62), 8               : 62⁸  ≈ 2.2 × 10¹⁴\n94 printable characters, 12 characters       : 94¹² ≈ 4.8 × 10²³\n\nAttacker: 10¹⁰ guesses per second on a fast hash (GPU)\nAttacks: brute force, dictionary, reusing stolen passwords\n(credential stuffing), phishing',
          tr: 'Olası parola sayısı = (alfabe boyutu)^(uzunluk)\nküçük harf (26), 8 karakter                  : 26⁸  ≈ 2,1 × 10¹¹\nküçük + büyük + rakam (62), 8                : 62⁸  ≈ 2,2 × 10¹⁴\n94 yazdırılabilir karakter, 12 karakter      : 94¹² ≈ 4,8 × 10²³\n\nSaldırgan: hızlı bir özette saniyede 10¹⁰ deneme (GPU)\nSaldırılar: kaba kuvvet, sözlük, çalınan parolaları yeniden kullanma\n(credential stuffing), kimlik avı (phishing)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'L’attaquant teste 10¹⁰ mots de passe par seconde. Combien de temps lui faut-il au pire pour (1) 8 minuscules, (2) 8 caractères parmi 62, (3) 12 caractères parmi 94 ? (4) Pourquoi bcrypt, qui ne permet que quelques milliers d’essais par seconde, change-t-il tout ?',
          en: 'The attacker tests 10¹⁰ passwords per second. How long does it take at worst for (1) 8 lowercase letters, (2) 8 characters out of 62, (3) 12 characters out of 94? (4) Why does bcrypt, which allows only a few thousand guesses per second, change everything?',
          tr: 'Saldırgan saniyede 10¹⁰ parola deniyor. En kötü durumda ne kadar sürer: (1) 8 küçük harf, (2) 62 karakterden 8, (3) 94 karakterden 12? (4) Saniyede yalnızca birkaç bin denemeye izin veren bcrypt neden her şeyi değiştirir?',
        },
        solution: {
          fr: '(1) 2,1 × 10¹¹ / 10¹⁰ ≈ 21 secondes. (2) 2,2 × 10¹⁴ / 10¹⁰ ≈ 21 800 s, environ 6 heures. (3) 4,8 × 10²³ / 10¹⁰ ≈ 4,8 × 10¹³ s, environ 1,5 million d’années. La longueur compte énormément. (4) Ralentir chaque essai d’un facteur d’environ un million transforme les 21 secondes en des mois. Pour l’utilisateur honnête, qui ne fait qu’un essai, la différence est invisible.',
          en: '(1) 2.1 × 10¹¹ / 10¹⁰ ≈ 21 seconds. (2) 2.2 × 10¹⁴ / 10¹⁰ ≈ 21,800 s, about 6 hours. (3) 4.8 × 10²³ / 10¹⁰ ≈ 4.8 × 10¹³ s, about 1.5 million years. Length matters enormously. (4) Slowing each guess by a factor of about a million turns 21 seconds into months. For the honest user, who makes a single try, the difference is invisible.',
          tr: '(1) 2,1 × 10¹¹ / 10¹⁰ ≈ 21 saniye. (2) 2,2 × 10¹⁴ / 10¹⁰ ≈ 21.800 s, yaklaşık 6 saat. (3) 4,8 × 10²³ / 10¹⁰ ≈ 4,8 × 10¹³ s, yaklaşık 1,5 milyon yıl. Uzunluk çok önemlidir. (4) Her denemeyi yaklaşık bir milyon kat yavaşlatmak 21 saniyeyi aylara çevirir. Tek bir deneme yapan dürüst kullanıcı için fark görünmez.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Un mot de passe et un code reçu par SMS : combien de facteurs différents ?',
        en: 'A password plus a code received by SMS: how many different factors?',
        tr: 'Bir parola ve SMS ile gelen bir kod: kaç farklı faktör?',
      },
      options: { fr: ['1', '2', '3'], en: ['1', '2', '3'], tr: ['1', '2', '3'] },
      answerIndex: 1,
      explanation: {
        fr: 'Le mot de passe est quelque chose que l’on sait, le téléphone quelque chose que l’on possède : deux facteurs. Deux mots de passe ne compteraient que pour un seul facteur.',
        en: 'The password is something you know, the phone something you have: two factors. Two passwords would count as a single factor.',
        tr: 'Parola bildiğin bir şey, telefon sahip olduğun bir şeydir: iki faktör. İki parola tek bir faktör sayılırdı.',
      },
    },
  },
  {
    id: 'sec-w07-access-control',
    week: 7,
    title: {
      fr: 'Contrôle d’accès et révision de la vize',
      en: 'Access control and midterm review',
      tr: 'Erişim denetimi ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le contrôle d’accès décide qui (sujet) peut faire quoi (lire, écrire, exécuter) sur quelle ressource (objet). DAC (discrétionnaire) : le propriétaire distribue les droits, comme les permissions Unix. MAC (obligatoire) : le système impose des niveaux, par exemple Bell-LaPadula pour la confidentialité. RBAC : les droits sont donnés à des rôles (étudiant, enseignant, administrateur), et les utilisateurs reçoivent des rôles.',
          en: 'Access control decides who (subject) can do what (read, write, execute) to which resource (object). DAC (discretionary): the owner grants rights, like Unix permissions. MAC (mandatory): the system enforces levels, for example Bell-LaPadula for confidentiality. RBAC: rights go to roles (student, teacher, administrator), and users are given roles.',
          tr: 'Erişim denetimi kimin (özne) hangi kaynak (nesne) üzerinde ne yapabileceğine (okuma, yazma, çalıştırma) karar verir. DAC (isteğe bağlı): hakları sahip dağıtır, Unix izinleri gibi. MAC (zorunlu): sistem seviyeleri dayatır, örneğin gizlilik için Bell-LaPadula. RBAC: haklar rollere (öğrenci, öğretmen, yönetici) verilir, kullanıcılara roller atanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Bell-LaPadula (niveaux : Non classifié < Confidentiel < Secret < Très secret)\n« pas de lecture vers le haut »  : on ne lit pas un niveau supérieur au sien\n« pas d’écriture vers le bas »   : on n’écrit pas dans un niveau inférieur\n(sinon on pourrait recopier un secret dans un document moins protégé)',
          en: 'Bell-LaPadula (levels: Unclassified < Confidential < Secret < Top secret)\n“no read up”   : you can’t read a level above your own\n“no write down”: you can’t write to a level below your own\n(otherwise a secret could be copied into a less protected document)',
          tr: 'Bell-LaPadula (seviyeler: Gizli değil < Hizmete özel < Gizli < Çok gizli)\n“yukarı okuma yok” : kendi seviyesinden yüksek bir seviye okunamaz\n“aşağı yazma yok”  : kendi seviyesinden düşük bir seviyeye yazılamaz\n(yoksa bir sır daha az korunan bir belgeye kopyalanabilirdi)',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ CIA, authenticité, non-répudiation ; vulnérabilité, menace, risque\n✔ César, substitution, Vigenère, analyse de fréquences, Kerckhoffs\n✔ AES, DES, modes ECB / CBC / GCM, IV ; nombre de clés symétriques\n✔ Clé publique : Diffie-Hellman, RSA, homme du milieu\n✔ Hachage, avalanche, anniversaires, MAC, signatures\n✔ Facteurs d’authentification, MFA, sel, bcrypt, calculs de force brute\n✔ DAC, MAC (Bell-LaPadula), RBAC, moindre privilège',
          en: '✔ CIA, authenticity, non-repudiation; vulnerability, threat, risk\n✔ Caesar, substitution, Vigenère, frequency analysis, Kerckhoffs\n✔ AES, DES, ECB / CBC / GCM modes, IV; number of symmetric keys\n✔ Public key: Diffie-Hellman, RSA, man in the middle\n✔ Hashing, avalanche, birthday bound, MAC, signatures\n✔ Authentication factors, MFA, salt, bcrypt, brute-force estimates\n✔ DAC, MAC (Bell-LaPadula), RBAC, least privilege',
          tr: '✔ CIA, kimlik doğrulama, inkâr edilemezlik; zafiyet, tehdit, risk\n✔ Sezar, yerine koyma, Vigenère, sıklık analizi, Kerckhoffs\n✔ AES, DES, ECB / CBC / GCM kipleri, IV; simetrik anahtar sayısı\n✔ Açık anahtar: Diffie-Hellman, RSA, ortadaki adam\n✔ Özet, çığ etkisi, doğum günü sınırı, MAC, imzalar\n✔ Kimlik doğrulama faktörleri, MFA, tuz, bcrypt, kaba kuvvet hesapları\n✔ DAC, MAC (Bell-LaPadula), RBAC, en az yetki',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec Bell-LaPadula, un utilisateur habilité « Secret » peut-il : (1) lire un document « Confidentiel » ? (2) lire un document « Très secret » ? (3) écrire dans un document « Confidentiel » ? (4) écrire dans un document « Très secret » ? Puis : dans l’application de notes de KBU, quels rôles RBAC proposerais-tu ?',
          en: 'Under Bell-LaPadula, can a user cleared “Secret”: (1) read a “Confidential” document? (2) read a “Top secret” document? (3) write to a “Confidential” document? (4) write to a “Top secret” document? Then: in KBU’s grades app, which RBAC roles would you suggest?',
          tr: 'Bell-LaPadula’da “Gizli” yetkili bir kullanıcı: (1) “Hizmete özel” bir belgeyi okuyabilir mi? (2) “Çok gizli” bir belgeyi okuyabilir mi? (3) “Hizmete özel” bir belgeye yazabilir mi? (4) “Çok gizli” bir belgeye yazabilir mi? Sonra: KBU not uygulaması için hangi RBAC rollerini önerirsin?',
        },
        solution: {
          fr: '(1) Oui : lecture vers le bas. (2) Non : pas de lecture vers le haut. (3) Non : pas d’écriture vers le bas, il pourrait y recopier des secrets. (4) Oui : écrire vers le haut ne divulgue rien, même s’il ne pourra pas relire le document. RBAC : Étudiant (voir ses propres notes), Enseignant (saisir les notes de ses cours), Secrétariat (gérer les inscriptions), Administrateur (gérer les comptes), chacun avec le minimum de droits nécessaires.',
          en: '(1) Yes: reading down. (2) No: no read up. (3) No: no write down, the user could copy secrets into it. (4) Yes: writing up leaks nothing, even though the user won’t be able to read the document back. RBAC: Student (see own grades), Teacher (enter grades for own courses), Registrar (manage enrollments), Administrator (manage accounts), each with the minimum rights needed.',
          tr: '(1) Evet: aşağı okuma. (2) Hayır: yukarı okuma yok. (3) Hayır: aşağı yazma yok, oraya sır kopyalayabilirdi. (4) Evet: yukarı yazmak hiçbir şey sızdırmaz, belgeyi geri okuyamayacak olsa da. RBAC: Öğrenci (kendi notlarını görür), Öğretmen (kendi derslerinin notlarını girer), Öğrenci işleri (kayıtları yönetir), Yönetici (hesapları yönetir); her biri gereken en az yetkiyle.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Les permissions rwx des fichiers Unix sont un exemple de…',
        en: 'Unix rwx file permissions are an example of…',
        tr: 'Unix dosyalarının rwx izinleri neye örnektir?',
      },
      options: { fr: ['DAC', 'MAC', 'RBAC'], en: ['DAC', 'MAC', 'RBAC'], tr: ['DAC', 'MAC', 'RBAC'] },
      answerIndex: 0,
      explanation: {
        fr: 'Le propriétaire du fichier décide lui-même qui peut le lire ou le modifier (chmod) : c’est un contrôle d’accès discrétionnaire.',
        en: 'The file’s owner decides who can read or change it (chmod): that is discretionary access control.',
        tr: 'Dosyanın sahibi onu kimin okuyup değiştirebileceğine kendisi karar verir (chmod): bu isteğe bağlı erişim denetimidir.',
      },
    },
  },
  {
    id: 'sec-w08-malware',
    week: 8,
    title: { fr: 'Les logiciels malveillants', en: 'Malware', tr: 'Kötü amaçlı yazılımlar' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un virus s’attache à un programme ou à un document et se propage quand on l’ouvre. Un ver se propage seul par le réseau en exploitant une faille. Un cheval de Troie se fait passer pour un logiciel utile. Un rançongiciel chiffre les fichiers et demande une rançon ; un logiciel espion vole des informations ; un rootkit se cache au plus profond du système. Les machines infectées forment un botnet, piloté à distance pour envoyer du spam ou lancer des attaques DDoS.',
          en: 'A virus attaches to a program or document and spreads when it is opened. A worm spreads by itself over the network by exploiting a flaw. A Trojan horse poses as useful software. Ransomware encrypts files and demands a ransom; spyware steals information; a rootkit hides deep in the system. Infected machines form a botnet, controlled remotely to send spam or launch DDoS attacks.',
          tr: 'Virüs bir programa veya belgeye yapışır ve açıldığında yayılır. Solucan bir açığı kullanarak ağ üzerinden kendi kendine yayılır. Truva atı yararlı bir yazılım gibi görünür. Fidye yazılımı dosyaları şifreler ve fidye ister; casus yazılım bilgi çalar; rootkit sistemin derinliklerine gizlenir. Bulaşmış makineler, spam göndermek veya DDoS saldırıları başlatmak için uzaktan yönetilen bir botnet oluşturur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Détection\nsignatures      : empreinte d’un malware connu (rapide, rate les nouveaux)\nheuristique     : comportement suspect (chiffrer beaucoup de fichiers…)\nbac à sable     : exécuter le fichier dans un environnement isolé\n\nPropagation d’un ver qui double chaque heure :\n1 → 2 → 4 → … → 2ⁿ machines après n heures\nDéfenses : mises à jour, antivirus / EDR, moindre privilège,\nsauvegardes hors ligne, ne pas ouvrir les pièces jointes inattendues',
          en: 'Detection\nsignatures      : fingerprint of known malware (fast, misses new ones)\nheuristics      : suspicious behavior (encrypting many files…)\nsandbox         : run the file in an isolated environment\n\nSpread of a worm that doubles every hour:\n1 → 2 → 4 → … → 2ⁿ machines after n hours\nDefenses: updates, antivirus / EDR, least privilege,\noffline backups, don’t open unexpected attachments',
          tr: 'Tespit\nimzalar        : bilinen kötü yazılımın parmak izi (hızlı, yenileri kaçırır)\nsezgisel       : şüpheli davranış (çok sayıda dosyayı şifrelemek…)\nkum havuzu     : dosyayı yalıtılmış bir ortamda çalıştırmak\n\nHer saat ikiye katlanan bir solucanın yayılması:\nn saat sonra 1 → 2 → 4 → … → 2ⁿ makine\nSavunmalar: güncellemeler, antivirüs / EDR, en az yetki,\nçevrim dışı yedekler, beklenmeyen ekleri açmamak',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Quel type de malware ? (a) Un faux « générateur de licence » qui ouvre une porte dérobée ; (b) un programme qui infecte tout seul les PC Windows non mis à jour du campus ; (c) un programme qui note tout ce que l’on tape. (2) Un ver infecte 1 machine et le nombre double chaque heure : combien après 10 heures ? Après 20 heures ? Pourquoi la vitesse de réaction compte-t-elle autant ?',
          en: '(1) Which type of malware? (a) A fake “license generator” that opens a backdoor; (b) a program that infects unpatched Windows PCs on campus on its own; (c) a program that records every keystroke. (2) A worm infects 1 machine and the number doubles every hour: how many after 10 hours? After 20 hours? Why does reaction speed matter so much?',
          tr: '(1) Hangi tür kötü yazılım? (a) Arka kapı açan sahte bir “lisans üreteci”; (b) kampüsteki güncellenmemiş Windows PC’lere kendi kendine bulaşan bir program; (c) basılan her tuşu kaydeden bir program. (2) Bir solucan 1 makineye bulaşıyor ve sayı her saat ikiye katlanıyor: 10 saat sonra kaç? 20 saat sonra? Tepki hızı neden bu kadar önemlidir?',
        },
        solution: {
          fr: '(1) (a) Cheval de Troie. (b) Ver : il se propage seul en exploitant une faille non corrigée. (c) Logiciel espion, plus précisément un enregistreur de frappes (keylogger). (2) 2¹⁰ = 1024 machines après 10 heures, 2²⁰ ≈ 1 million après 20 heures. La croissance est exponentielle : une heure de retard double les dégâts. Il faut appliquer les correctifs vite et isoler les machines infectées.',
          en: '(1) (a) Trojan horse. (b) Worm: it spreads by itself by exploiting an unpatched flaw. (c) Spyware, more precisely a keylogger. (2) 2¹⁰ = 1024 machines after 10 hours, 2²⁰ ≈ 1 million after 20 hours. Growth is exponential: an hour’s delay doubles the damage. Patches must be applied quickly and infected machines isolated.',
          tr: '(1) (a) Truva atı. (b) Solucan: düzeltilmemiş bir açığı kullanarak kendi kendine yayılır. (c) Casus yazılım, daha doğrusu tuş kaydedici (keylogger). (2) 10 saat sonra 2¹⁰ = 1024 makine, 20 saat sonra 2²⁰ ≈ 1 milyon. Büyüme üsteldir: bir saatlik gecikme hasarı ikiye katlar. Yamalar hızla uygulanmalı ve bulaşmış makineler yalıtılmalıdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est la différence entre un virus et un ver ?',
        en: 'What is the difference between a virus and a worm?',
        tr: 'Virüs ile solucan arasındaki fark nedir?',
      },
      options: {
        fr: ['Le ver se propage seul par le réseau, le virus a besoin qu’on ouvre un fichier', 'Le virus est toujours plus dangereux', 'Il n’y en a aucune'],
        en: ['A worm spreads by itself over the network, a virus needs a file to be opened', 'A virus is always more dangerous', 'There is none'],
        tr: ['Solucan ağ üzerinden kendi kendine yayılır, virüs bir dosyanın açılmasına ihtiyaç duyar', 'Virüs her zaman daha tehlikelidir', 'Hiçbir fark yoktur'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Le virus a besoin d’un hôte et d’une action de l’utilisateur ; le ver est autonome. C’est pourquoi des vers comme WannaCry (2017) ont infecté des centaines de milliers de machines en quelques jours.',
        en: 'A virus needs a host and a user action; a worm is self-contained. That is why worms like WannaCry (2017) infected hundreds of thousands of machines within days.',
        tr: 'Virüsün bir konağa ve kullanıcı eylemine ihtiyacı vardır; solucan bağımsızdır. WannaCry (2017) gibi solucanların birkaç günde yüz binlerce makineye bulaşması bu yüzdendir.',
      },
    },
  },
  {
    id: 'sec-w09-network-attacks',
    week: 9,
    title: { fr: 'Attaques réseau', en: 'Network attacks', tr: 'Ağ saldırıları' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Écoute (sniffing) : capturer le trafic non chiffré sur un réseau. Usurpation (spoofing) : falsifier une adresse IP, MAC ou un nom DNS. Homme du milieu : s’intercaler entre deux machines, par exemple par empoisonnement ARP, en répondant aux requêtes ARP à la place de la passerelle. Déni de service : saturer un service, comme l’inondation SYN qui remplit la table des connexions à moitié ouvertes. Une attaque par amplification envoie de petites requêtes à des serveurs qui renvoient de grosses réponses vers la victime.',
          en: 'Sniffing: capturing unencrypted traffic on a network. Spoofing: forging an IP address, MAC address or DNS name. Man in the middle: slipping in between two machines, for example by ARP poisoning, answering ARP requests in place of the gateway. Denial of service: flooding a service, like a SYN flood that fills the table of half-open connections. An amplification attack sends small requests to servers that send big responses to the victim.',
          tr: 'Dinleme (sniffing): bir ağdaki şifresiz trafiği yakalamak. Sahtecilik (spoofing): bir IP, MAC adresini veya DNS adını taklit etmek. Ortadaki adam: iki makinenin arasına girmek, örneğin ARP zehirlemesiyle ağ geçidinin yerine ARP isteklerini yanıtlayarak. Hizmet engelleme: bir hizmeti boğmak, yarı açık bağlantılar tablosunu dolduran SYN seli gibi. Yükseltme saldırısı, kurbana büyük yanıtlar gönderen sunuculara küçük istekler yollar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Amplification DNS\nl’attaquant envoie : requête de 60 octets, adresse source = celle de la victime\nle serveur répond   : 3000 octets… à la victime\nfacteur d’amplification = taille réponse / taille requête\n\nDéfenses\nécoute          → chiffrement (TLS, VPN, WPA3)\nARP spoofing    → ARP statique, inspection ARP dynamique sur le commutateur\nSYN flood       → SYN cookies, limitation de débit\nDDoS            → filtrage chez le fournisseur, CDN, anti-usurpation (BCP 38)',
          en: 'DNS amplification\nthe attacker sends: a 60-byte request, source address = the victim’s\nthe server answers: 3000 bytes… to the victim\namplification factor = response size / request size\n\nDefenses\nsniffing        → encryption (TLS, VPN, WPA3)\nARP spoofing    → static ARP, dynamic ARP inspection on the switch\nSYN flood       → SYN cookies, rate limiting\nDDoS            → filtering at the provider, CDN, anti-spoofing (BCP 38)',
          tr: 'DNS yükseltme\nsaldırgan gönderir : 60 baytlık istek, kaynak adres = kurbanınki\nsunucu yanıtlar    : 3000 bayt… kurbana\nyükseltme çarpanı = yanıt boyutu / istek boyutu\n\nSavunmalar\ndinleme         → şifreleme (TLS, VPN, WPA3)\nARP sahteciliği → statik ARP, anahtarda dinamik ARP denetimi\nSYN seli        → SYN çerezleri, hız sınırlama\nDDoS            → sağlayıcıda süzme, CDN, sahtecilik önleme (BCP 38)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Quel est le facteur d’amplification de l’exemple DNS ? Avec une connexion de 10 Mbit/s, quel trafic l’attaquant envoie-t-il vers la victime ? (2) Pourquoi l’adresse source usurpée est-elle indispensable à cette attaque ? (3) Dans un café, un pirate fait de l’empoisonnement ARP. Pourquoi les sites en HTTPS restent-ils protégés ?',
          en: '(1) What is the amplification factor in the DNS example? With a 10 Mbit/s connection, how much traffic does the attacker send at the victim? (2) Why is the spoofed source address essential to this attack? (3) In a café, an attacker does ARP poisoning. Why do HTTPS sites stay protected?',
          tr: '(1) DNS örneğindeki yükseltme çarpanı nedir? 10 Mbit/s bağlantıyla saldırgan kurbana ne kadar trafik gönderir? (2) Bu saldırı için sahte kaynak adres neden zorunludur? (3) Bir kafede saldırgan ARP zehirlemesi yapıyor. HTTPS siteler neden korunmuş kalır?',
        },
        solution: {
          fr: '(1) 3000 / 60 = 50 : 10 Mbit/s envoyés deviennent environ 500 Mbit/s reçus par la victime, sans que le trafic vienne de l’attaquant. (2) Le serveur répond à l’adresse source du paquet : en mettant celle de la victime, l’attaquant lui fait envoyer les réponses, et il reste caché. (3) Le pirate voit passer les paquets, mais ils sont chiffrés par TLS ; s’il présente un faux certificat, le navigateur affiche un avertissement. Les sites en simple HTTP, eux, sont lisibles.',
          en: '(1) 3000 / 60 = 50: 10 Mbit/s sent becomes about 500 Mbit/s received by the victim, without the traffic coming from the attacker. (2) The server answers the packet’s source address: by putting the victim’s, the attacker has the responses sent there and stays hidden. (3) The attacker sees the packets, but TLS encrypts them; if they present a fake certificate, the browser shows a warning. Plain HTTP sites, however, are readable.',
          tr: '(1) 3000 / 60 = 50: gönderilen 10 Mbit/s, kurbanın aldığı yaklaşık 500 Mbit/s’ye dönüşür ve trafik saldırgandan gelmez. (2) Sunucu paketin kaynak adresine yanıt verir: oraya kurbanın adresini koyan saldırgan yanıtları kurbana yönlendirir ve gizli kalır. (3) Saldırgan paketleri görür ama TLS onları şifreler; sahte bir sertifika sunarsa tarayıcı uyarı gösterir. Düz HTTP siteler ise okunabilir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle attaque remplit la table des connexions TCP à moitié ouvertes d’un serveur ?',
        en: 'Which attack fills a server’s table of half-open TCP connections?',
        tr: 'Hangi saldırı bir sunucunun yarı açık TCP bağlantıları tablosunu doldurur?',
      },
      options: { fr: ['L’inondation SYN', 'L’empoisonnement ARP', 'L’hameçonnage'], en: ['SYN flood', 'ARP poisoning', 'Phishing'], tr: ['SYN seli', 'ARP zehirlemesi', 'Kimlik avı'] },
      answerIndex: 0,
      explanation: {
        fr: 'L’attaquant envoie des SYN sans jamais terminer la poignée de main : chaque connexion à moitié ouverte occupe une place jusqu’au délai d’expiration. Les SYN cookies évitent de réserver de la mémoire avant le ACK final.',
        en: 'The attacker sends SYNs without ever completing the handshake: each half-open connection holds a slot until it times out. SYN cookies avoid reserving memory before the final ACK.',
        tr: 'Saldırgan el sıkışmayı hiç tamamlamadan SYN’ler gönderir: her yarı açık bağlantı zaman aşımına kadar bir yer tutar. SYN çerezleri son ACK’tan önce bellek ayırmayı önler.',
      },
    },
  },
  {
    id: 'sec-w10-web-security',
    week: 10,
    title: {
      fr: 'Sécurité des applications web (OWASP)',
      en: 'Web application security (OWASP)',
      tr: 'Web uygulaması güvenliği (OWASP)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’OWASP publie la liste des failles web les plus fréquentes. Parmi elles : contrôle d’accès défaillant (voir les données d’un autre en changeant l’id dans l’URL), injections (SQL, commandes), XSS, mauvaise configuration, composants vulnérables (bibliothèques non mises à jour), authentification faible. Le principe commun : ne jamais faire confiance aux entrées et vérifier les droits côté serveur, à chaque requête.',
          en: 'OWASP publishes the list of the most frequent web flaws. Among them: broken access control (seeing someone else’s data by changing the id in the URL), injections (SQL, commands), XSS, misconfiguration, vulnerable components (outdated libraries), weak authentication. The common principle: never trust input, and check permissions server-side, on every request.',
          tr: 'OWASP en sık görülen web açıklarının listesini yayınlar. Aralarında: bozuk erişim denetimi (URL’deki id’yi değiştirerek başkasının verilerini görmek), enjeksiyonlar (SQL, komut), XSS, yanlış yapılandırma, zafiyetli bileşenler (güncellenmemiş kütüphaneler), zayıf kimlik doğrulama. Ortak ilke: girdilere asla güvenme ve izinleri her istekte sunucu tarafında denetle.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Injection SQL\nSELECT * FROM users WHERE name = \'$n\' AND pass = \'$p\'\nn = admin\' --   →  … WHERE name = \'admin\' -- \' AND pass = …\n→ requêtes préparées\n\nIDOR (contrôle d’accès)\nGET /api/notes?etudiant=1042   ← on remplace par 1043\n→ vérifier côté serveur que l’utilisateur connecté a le droit\n\nTraversée de répertoire\nGET /download?file=../../etc/passwd\n→ ne jamais concaténer un chemin reçu ; utiliser une liste autorisée',
          en: 'SQL injection\nSELECT * FROM users WHERE name = \'$n\' AND pass = \'$p\'\nn = admin\' --   →  … WHERE name = \'admin\' -- \' AND pass = …\n→ prepared statements\n\nIDOR (access control)\nGET /api/grades?student=1042   ← replaced by 1043\n→ check server-side that the logged-in user is allowed\n\nPath traversal\nGET /download?file=../../etc/passwd\n→ never concatenate a received path; use an allow list',
          tr: 'SQL enjeksiyonu\nSELECT * FROM users WHERE name = \'$n\' AND pass = \'$p\'\nn = admin\' --   →  … WHERE name = \'admin\' -- \' AND pass = …\n→ hazırlanmış sorgular\n\nIDOR (erişim denetimi)\nGET /api/notlar?ogrenci=1042   ← 1043 ile değiştirilir\n→ giriş yapmış kullanıcının yetkisi sunucuda denetlenmeli\n\nDizin geçişi\nGET /download?file=../../etc/passwd\n→ gelen bir yolu asla birleştirme; izin listesi kullan',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un portail étudiant affiche le relevé de notes à l’adresse /releve?id=1042, et seul le bouton « Mon relevé » mène à cette page. (1) Quelle faille risque-t-il d’avoir ? (2) Cacher le bouton ou chiffrer l’id dans l’URL suffit-il à la corriger ? (3) Quelle est la bonne correction ?',
          en: 'A student portal shows the transcript at /transcript?id=1042, and only the “My transcript” button leads there. (1) Which flaw is it likely to have? (2) Is hiding the button or encrypting the id in the URL enough to fix it? (3) What is the right fix?',
          tr: 'Bir öğrenci portalı not dökümünü /transcript?id=1042 adresinde gösteriyor ve oraya yalnızca “Not dökümüm” düğmesi götürüyor. (1) Hangi açık olması muhtemeldir? (2) Düğmeyi gizlemek veya URL’deki id’yi şifrelemek düzeltmeye yeter mi? (3) Doğru düzeltme nedir?',
        },
        solution: {
          fr: '(1) Un IDOR (contrôle d’accès défaillant) : en tapant /releve?id=1043, on verrait le relevé d’un autre étudiant si le serveur ne vérifie rien. (2) Non : c’est de la « sécurité par l’obscurité ». L’adresse peut être devinée, partagée ou retrouvée dans l’historique. (3) Côté serveur, à chaque requête : prendre l’identité de l’utilisateur dans sa session et refuser (403) si l’id demandé n’est pas le sien, sauf pour un rôle autorisé comme le secrétariat.',
          en: '(1) An IDOR (broken access control): typing /transcript?id=1043 would show another student’s transcript if the server checks nothing. (2) No: that is “security through obscurity”. The address can be guessed, shared or found in history. (3) Server-side, on every request: take the user’s identity from their session and refuse (403) if the requested id isn’t theirs, except for an allowed role like the registrar.',
          tr: '(1) Bir IDOR (bozuk erişim denetimi): sunucu hiçbir şeyi denetlemiyorsa /transcript?id=1043 yazmak başka bir öğrencinin dökümünü gösterir. (2) Hayır: bu “belirsizlikle güvenlik”tir. Adres tahmin edilebilir, paylaşılabilir veya geçmişte bulunabilir. (3) Sunucu tarafında, her istekte: kullanıcının kimliğini oturumundan al ve istenen id onun değilse, öğrenci işleri gibi yetkili bir rol dışında reddet (403).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Où faut-il vérifier les droits d’accès d’un utilisateur ?',
        en: 'Where must a user’s access rights be checked?',
        tr: 'Bir kullanıcının erişim hakları nerede denetlenmelidir?',
      },
      options: {
        fr: ['Dans le JavaScript du navigateur', 'Sur le serveur, à chaque requête', 'Seulement au moment de la connexion'],
        en: ['In the browser’s JavaScript', 'On the server, on every request', 'Only at login time'],
        tr: ['Tarayıcının JavaScript’inde', 'Sunucuda, her istekte', 'Yalnızca giriş anında'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Tout ce qui est dans le navigateur peut être modifié par l’utilisateur. Le serveur doit contrôler chaque requête, car on peut appeler l’API directement sans passer par l’interface.',
        en: 'Everything in the browser can be changed by the user. The server must check every request, since the API can be called directly, bypassing the interface.',
        tr: 'Tarayıcıdaki her şey kullanıcı tarafından değiştirilebilir. API arayüz atlanarak doğrudan çağrılabileceği için sunucu her isteği denetlemelidir.',
      },
    },
  },
  {
    id: 'sec-w11-firewalls-ids',
    week: 11,
    title: { fr: 'Pare-feu, IDS et VPN', en: 'Firewalls, IDS and VPNs', tr: 'Güvenlik duvarları, IDS ve VPN' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un pare-feu applique une liste de règles dans l’ordre : la première règle qui correspond décide. Une bonne politique se termine par « tout refuser ». Un pare-feu à états suit les connexions et laisse passer les réponses aux connexions ouvertes de l’intérieur. Un IDS détecte les intrusions (par signatures ou par anomalies) et alerte ; un IPS peut aussi bloquer. Un VPN crée un tunnel chiffré à travers Internet. La DMZ est une zone isolée pour les serveurs accessibles depuis l’extérieur.',
          en: 'A firewall applies a list of rules in order: the first matching rule decides. A good policy ends with “deny everything”. A stateful firewall tracks connections and lets through replies to connections opened from inside. An IDS detects intrusions (by signatures or anomalies) and raises alerts; an IPS can also block. A VPN builds an encrypted tunnel across the Internet. The DMZ is an isolated zone for servers reachable from outside.',
          tr: 'Güvenlik duvarı bir kural listesini sırayla uygular: eşleşen ilk kural karar verir. İyi bir politika “her şeyi reddet” ile biter. Durum bilgili bir güvenlik duvarı bağlantıları izler ve içeriden açılan bağlantıların yanıtlarını geçirir. IDS saldırıları (imzalarla veya anormalliklerle) tespit eder ve uyarır; IPS ayrıca engelleyebilir. VPN İnternet üzerinden şifreli bir tünel kurar. DMZ, dışarıdan erişilebilen sunucular için yalıtılmış bir bölgedir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Règles (la première qui correspond s’applique)\n1. autoriser TCP  source quelconque   → 10.0.0.5 port 443\n2. autoriser TCP  source 10.0.0.0/24  → destination quelconque port 80\n3. refuser   tout\n\nIDS : taux de base\n1 attaque pour 10 000 événements, détection 99 %, fausses alertes 1 %',
          en: 'Rules (the first match applies)\n1. allow TCP  any source           → 10.0.0.5 port 443\n2. allow TCP  source 10.0.0.0/24    → any destination port 80\n3. deny  all\n\nIDS: base rate\n1 attack per 10,000 events, 99% detection, 1% false alarms',
          tr: 'Kurallar (eşleşen ilk kural uygulanır)\n1. izin ver TCP  herhangi kaynak    → 10.0.0.5 port 443\n2. izin ver TCP  kaynak 10.0.0.0/24 → herhangi hedef port 80\n3. reddet  hepsi\n\nIDS: temel oran\n10.000 olayda 1 saldırı, %99 tespit, %1 yanlış alarm',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Quelle règle s’applique, et le paquet passe-t-il ? (a) 8.8.8.8 → 10.0.0.5:443 ; (b) 10.0.0.7 → 93.1.1.1:80 ; (c) 8.8.8.8 → 10.0.0.5:22 ; (d) 10.0.0.7 → 93.1.1.1:443. (2) Avec l’IDS ci-dessus, quelle fraction des alertes correspond à de vraies attaques ?',
          en: '(1) Which rule applies, and does the packet pass? (a) 8.8.8.8 → 10.0.0.5:443; (b) 10.0.0.7 → 93.1.1.1:80; (c) 8.8.8.8 → 10.0.0.5:22; (d) 10.0.0.7 → 93.1.1.1:443. (2) With the IDS above, what share of the alerts are real attacks?',
          tr: '(1) Hangi kural uygulanır ve paket geçer mi? (a) 8.8.8.8 → 10.0.0.5:443; (b) 10.0.0.7 → 93.1.1.1:80; (c) 8.8.8.8 → 10.0.0.5:22; (d) 10.0.0.7 → 93.1.1.1:443. (2) Yukarıdaki IDS ile uyarıların ne kadarı gerçek saldırıdır?',
        },
        solution: {
          fr: '(1) (a) Règle 1 : autorisé. (b) Règle 2 : autorisé. (c) Aucune règle d’autorisation ne correspond, la règle 3 refuse. (d) La règle 2 ne vise que le port 80 : la règle 3 refuse, les postes internes ne peuvent pas aller sur des sites HTTPS, ce qui est sans doute une erreur de configuration. (2) Sur 10 000 événements : 0,99 vraie alerte et 0,01 × 9999 ≈ 100 fausses. Seulement 0,99 / 100,98 ≈ 1 % des alertes sont réelles : c’est le paradoxe du taux de base, comme pour le test médical de Bayes.',
          en: '(1) (a) Rule 1: allowed. (b) Rule 2: allowed. (c) No allow rule matches, so rule 3 denies. (d) Rule 2 only covers port 80: rule 3 denies, so internal machines can’t reach HTTPS sites, probably a configuration mistake. (2) Out of 10,000 events: 0.99 true alert and 0.01 × 9999 ≈ 100 false ones. Only 0.99 / 100.98 ≈ 1% of alerts are real: the base-rate fallacy, as with the Bayes medical test.',
          tr: '(1) (a) Kural 1: izin. (b) Kural 2: izin. (c) Hiçbir izin kuralı eşleşmez, kural 3 reddeder. (d) Kural 2 yalnızca 80. portu kapsar: kural 3 reddeder, iç makineler HTTPS sitelere erişemez; muhtemelen bir yapılandırma hatası. (2) 10.000 olayda: 0,99 gerçek uyarı ve 0,01 × 9999 ≈ 100 yanlış uyarı. Uyarıların yalnızca 0,99 / 100,98 ≈ %1’i gerçektir: Bayes tıbbi testindeki gibi temel oran yanılgısı.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est la différence entre un IDS et un IPS ?',
        en: 'What is the difference between an IDS and an IPS?',
        tr: 'IDS ile IPS arasındaki fark nedir?',
      },
      options: {
        fr: ['L’IDS détecte et alerte, l’IPS peut aussi bloquer', 'L’IDS chiffre le trafic', 'L’IPS ne fonctionne que sur le Wi-Fi'],
        en: ['An IDS detects and alerts, an IPS can also block', 'An IDS encrypts traffic', 'An IPS only works on Wi-Fi'],
        tr: ['IDS tespit eder ve uyarır, IPS ayrıca engelleyebilir', 'IDS trafiği şifreler', 'IPS yalnızca Wi-Fi’de çalışır'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'L’IPS est placé sur le chemin du trafic et peut le couper. Revers de la médaille : une fausse alerte peut alors bloquer du trafic légitime.',
        en: 'An IPS sits in the traffic path and can cut it. The downside: a false alarm can then block legitimate traffic.',
        tr: 'IPS trafiğin yolundadır ve onu kesebilir. Diğer yüzü: yanlış bir alarm meşru trafiği de engelleyebilir.',
      },
    },
  },
  {
    id: 'sec-w12-tls-pki',
    week: 12,
    title: {
      fr: 'TLS, certificats et infrastructure à clé publique',
      en: 'TLS, certificates and public key infrastructure',
      tr: 'TLS, sertifikalar ve açık anahtar altyapısı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un certificat lie une clé publique à une identité (un nom de domaine) ; il est signé par une autorité de certification (AC). Le navigateur fait confiance à quelques AC racines installées d’avance et vérifie la chaîne : racine → intermédiaire → site. TLS 1.3 utilise le certificat pour authentifier le serveur, un échange Diffie-Hellman éphémère pour créer les clés de session, puis AES-GCM ou ChaCha20 pour chiffrer. Avec Diffie-Hellman éphémère, voler la clé privée plus tard ne permet pas de déchiffrer les anciennes sessions (confidentialité persistante).',
          en: 'A certificate binds a public key to an identity (a domain name); it is signed by a certificate authority (CA). The browser trusts a few root CAs installed in advance and checks the chain: root → intermediate → site. TLS 1.3 uses the certificate to authenticate the server, an ephemeral Diffie-Hellman exchange to create the session keys, then AES-GCM or ChaCha20 to encrypt. With ephemeral Diffie-Hellman, stealing the private key later doesn’t decrypt past sessions (forward secrecy).',
          tr: 'Sertifika bir açık anahtarı bir kimliğe (alan adına) bağlar; bir sertifika otoritesi (CA) tarafından imzalanır. Tarayıcı önceden yüklenmiş birkaç kök CA’ya güvenir ve zinciri denetler: kök → ara → site. TLS 1.3, sunucunun kimliğini doğrulamak için sertifikayı, oturum anahtarlarını oluşturmak için geçici bir Diffie-Hellman değişimini, sonra şifreleme için AES-GCM veya ChaCha20’yi kullanır. Geçici Diffie-Hellman sayesinde özel anahtarın sonradan çalınması eski oturumları çözmeye yetmez (ileriye dönük gizlilik).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Ce que vérifie le navigateur pour https://obs.kbu.edu.tr\n1. la chaîne de signatures remonte jusqu’à une AC racine de confiance\n2. le certificat est dans sa période de validité\n3. le nom du certificat correspond au domaine visité\n4. le certificat n’est pas révoqué (OCSP, listes de révocation)\n\nPoignée de main TLS 1.3 : 1 aller-retour (ClientHello → ServerHello + certificat)\nHSTS : le site impose HTTPS, le navigateur refuse ensuite le HTTP simple',
          en: 'What the browser checks for https://obs.kbu.edu.tr\n1. the signature chain goes up to a trusted root CA\n2. the certificate is within its validity period\n3. the certificate’s name matches the visited domain\n4. the certificate isn’t revoked (OCSP, revocation lists)\n\nTLS 1.3 handshake: 1 round trip (ClientHello → ServerHello + certificate)\nHSTS: the site enforces HTTPS, the browser then refuses plain HTTP',
          tr: 'https://obs.kbu.edu.tr için tarayıcının denetledikleri\n1. imza zinciri güvenilen bir kök CA’ya kadar uzanır\n2. sertifika geçerlilik süresi içindedir\n3. sertifikadaki ad ziyaret edilen alan adıyla eşleşir\n4. sertifika iptal edilmemiştir (OCSP, iptal listeleri)\n\nTLS 1.3 el sıkışması: 1 gidiş-dönüş (ClientHello → ServerHello + sertifika)\nHSTS: site HTTPS’yi zorunlu kılar, tarayıcı sonra düz HTTP’yi reddeder',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Le navigateur affiche un avertissement de sécurité. Quel contrôle a échoué dans chaque cas ? (1) Le certificat a expiré la semaine dernière. (2) Le certificat est pour www.kbu.edu.tr, mais on visite obs.kbu.edu.tr. (3) Le certificat a été signé par l’attaquant lui-même. (4) Pourquoi l’empoisonnement ARP de la semaine 9 échoue-t-il face à ces contrôles ?',
          en: 'The browser shows a security warning. Which check failed in each case? (1) The certificate expired last week. (2) The certificate is for www.kbu.edu.tr, but obs.kbu.edu.tr is visited. (3) The certificate was signed by the attacker themselves. (4) Why does the week 9 ARP poisoning fail against these checks?',
          tr: 'Tarayıcı bir güvenlik uyarısı gösteriyor. Her durumda hangi denetim başarısız oldu? (1) Sertifikanın süresi geçen hafta doldu. (2) Sertifika www.kbu.edu.tr için, ama obs.kbu.edu.tr ziyaret ediliyor. (3) Sertifikayı saldırganın kendisi imzaladı. (4) 9. haftadaki ARP zehirlemesi bu denetimler karşısında neden başarısız olur?',
        },
        solution: {
          fr: '(1) La période de validité (contrôle 2). (2) Le nom de domaine (contrôle 3) ; un certificat *.kbu.edu.tr aurait couvert les deux. (3) La chaîne de confiance (contrôle 1) : ce certificat est auto-signé, aucune AC reconnue ne l’a signé. (4) L’attaquant reçoit bien le trafic, mais il n’a pas la clé privée de obs.kbu.edu.tr, et il ne peut pas obtenir d’une AC un certificat valide pour ce nom : le navigateur détecte l’usurpation.',
          en: '(1) The validity period (check 2). (2) The domain name (check 3); a *.kbu.edu.tr certificate would have covered both. (3) The chain of trust (check 1): this certificate is self-signed, no recognized CA signed it. (4) The attacker does receive the traffic, but lacks the private key of obs.kbu.edu.tr and can’t get a valid certificate for that name from a CA: the browser detects the impersonation.',
          tr: '(1) Geçerlilik süresi (denetim 2). (2) Alan adı (denetim 3); *.kbu.edu.tr sertifikası ikisini de kapsardı. (3) Güven zinciri (denetim 1): bu sertifika kendinden imzalıdır, hiçbir tanınmış CA imzalamamıştır. (4) Saldırgan trafiği alır ama obs.kbu.edu.tr’nin özel anahtarına sahip değildir ve bir CA’dan bu ad için geçerli bir sertifika alamaz: tarayıcı sahteciliği fark eder.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Qui signe le certificat d’un site web ?',
        en: 'Who signs a website’s certificate?',
        tr: 'Bir web sitesinin sertifikasını kim imzalar?',
      },
      options: {
        fr: ['Le navigateur', 'Une autorité de certification', 'Le fournisseur d’accès du visiteur'],
        en: ['The browser', 'A certificate authority', 'The visitor’s internet provider'],
        tr: ['Tarayıcı', 'Bir sertifika otoritesi', 'Ziyaretçinin internet sağlayıcısı'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'L’AC vérifie que le demandeur contrôle bien le domaine, puis signe le certificat avec sa clé privée. Le navigateur vérifie cette signature avec la clé publique de l’AC, qu’il connaît déjà.',
        en: 'The CA checks that the requester really controls the domain, then signs the certificate with its private key. The browser checks that signature with the CA’s public key, which it already knows.',
        tr: 'CA, başvuranın alan adını gerçekten denetlediğini doğrular, sonra sertifikayı özel anahtarıyla imzalar. Tarayıcı bu imzayı zaten bildiği CA açık anahtarıyla doğrular.',
      },
    },
  },
  {
    id: 'sec-w13-software-vulnerabilities',
    week: 13,
    title: {
      fr: 'Failles logicielles : dépassement de tampon',
      en: 'Software flaws: buffer overflow',
      tr: 'Yazılım açıkları: arabellek taşması',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En C, rien n’empêche d’écrire au-delà de la fin d’un tableau. Sur la pile, un tampon local est suivi d’autres données, dont l’adresse de retour de la fonction. Une entrée trop longue l’écrase, et un attaquant peut ainsi faire sauter le programme vers son propre code. Protections : canaris de pile (une valeur témoin vérifiée avant le retour), ASLR (adresses aléatoires), pile non exécutable (NX/DEP), fonctions bornées et langages sûrs pour la mémoire (Rust, Java, Go).',
          en: 'In C, nothing stops writing past the end of an array. On the stack, a local buffer is followed by other data, including the function’s return address. Input that is too long overwrites it, so an attacker can make the program jump to their own code. Protections: stack canaries (a check value tested before returning), ASLR (random addresses), non-executable stack (NX/DEP), bounded functions and memory-safe languages (Rust, Java, Go).',
          tr: 'C’de bir dizinin sonunun ötesine yazmayı engelleyen hiçbir şey yoktur. Yığında yerel bir arabelleği fonksiyonun dönüş adresi dahil başka veriler izler. Çok uzun bir girdi onu ezer ve saldırgan böylece programı kendi koduna atlatabilir. Korumalar: yığın kanaryaları (dönmeden önce sınanan bir tanık değer), ASLR (rastgele adresler), çalıştırılamaz yığın (NX/DEP), sınırlı fonksiyonlar ve bellek güvenli diller (Rust, Java, Go).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'void verifier(void) {\n    char nom[16];\n    gets(nom);                         // DANGEREUX : aucune limite\n    …\n}\n\nPile (adresses croissantes vers le bas) :\n[ nom : 16 octets ][ canari ][ ancien pointeur de pile ][ adresse de retour ]\n\nVersion sûre :\nfgets(nom, sizeof nom, stdin);       // lit au plus 15 caractères + \'\\0\'\n(utiliser aussi snprintf au lieu de sprintf, strncpy avec précaution)',
          en: 'void check(void) {\n    char name[16];\n    gets(name);                        // DANGEROUS: no limit\n    …\n}\n\nStack (addresses growing downward):\n[ name: 16 bytes ][ canary ][ saved frame pointer ][ return address ]\n\nSafe version:\nfgets(name, sizeof name, stdin);     // reads at most 15 characters + \'\\0\'\n(also use snprintf instead of sprintf, strncpy with care)',
          tr: 'void denetle(void) {\n    char ad[16];\n    gets(ad);                          // TEHLİKELİ: sınır yok\n    …\n}\n\nYığın (adresler aşağı doğru artar):\n[ ad: 16 bayt ][ kanarya ][ kayıtlı çerçeve işaretçisi ][ dönüş adresi ]\n\nGüvenli sürüm:\nfgets(ad, sizeof ad, stdin);         // en fazla 15 karakter + \'\\0\' okur\n(sprintf yerine snprintf, strncpy’yi de dikkatle kullan)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) L’utilisateur tape 24 lettres « A » dans la version avec gets. Combien d’octets sont écrits en tout, et combien dépassent du tableau ? (2) Que détecte le canari, et à quel moment ? (3) Pourquoi l’ASLR complique-t-il l’attaque même sans canari ?',
          en: '(1) The user types 24 letters “A” into the gets version. How many bytes are written in all, and how many go past the array? (2) What does the canary detect, and when? (3) Why does ASLR make the attack harder even without a canary?',
          tr: '(1) Kullanıcı gets’li sürüme 24 “A” harfi yazıyor. Toplam kaç bayt yazılır ve kaçı dizinin dışına taşar? (2) Kanarya neyi, ne zaman tespit eder? (3) ASLR, kanarya olmasa bile saldırıyı neden zorlaştırır?',
        },
        solution: {
          fr: '(1) 24 caractères + le \'\\0\' final = 25 octets, pour un tableau de 16 : 9 octets débordent. Ils écrasent le canari et peut-être l’ancien pointeur de pile ; avec une entrée plus longue, l’adresse de retour. (2) Le canari est une valeur aléatoire placée juste après le tampon. Avant de quitter la fonction, le programme vérifie qu’il n’a pas changé ; ici il a été écrasé, donc le programme s’arrête au lieu d’exécuter l’adresse de retour modifiée. (3) L’attaquant doit écrire une adresse précise (son code, une fonction de la bibliothèque) ; avec l’ASLR, ces adresses changent à chaque exécution et il ne peut pas les deviner.',
          en: '(1) 24 characters + the final \'\\0\' = 25 bytes, for a 16-byte array: 9 bytes overflow. They overwrite the canary and maybe the saved frame pointer; with longer input, the return address. (2) The canary is a random value placed right after the buffer. Before leaving the function, the program checks it hasn’t changed; here it was overwritten, so the program stops instead of using the modified return address. (3) The attacker must write a precise address (their code, a library function); with ASLR, those addresses change on every run and can’t be guessed.',
          tr: '(1) 24 karakter + sondaki \'\\0\' = 25 bayt, 16 baytlık bir dizi için: 9 bayt taşar. Kanaryayı ve belki kayıtlı çerçeve işaretçisini ezer; daha uzun bir girdiyle dönüş adresini. (2) Kanarya arabellekten hemen sonra konan rastgele bir değerdir. Program fonksiyondan çıkmadan önce değişmediğini denetler; burada ezildiği için program değiştirilmiş dönüş adresini kullanmak yerine durur. (3) Saldırgan kesin bir adres yazmalıdır (kendi kodu, bir kütüphane fonksiyonu); ASLR ile bu adresler her çalıştırmada değişir ve tahmin edilemez.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle fonction C ne faut-il jamais utiliser pour lire une ligne ?',
        en: 'Which C function must never be used to read a line?',
        tr: 'Bir satır okumak için hangi C fonksiyonu asla kullanılmamalıdır?',
      },
      options: { fr: ['fgets', 'gets', 'fscanf avec %15s'], en: ['fgets', 'gets', 'fscanf with %15s'], tr: ['fgets', 'gets', '%15s ile fscanf'] },
      answerIndex: 1,
      explanation: {
        fr: 'gets ne connaît pas la taille du tableau et ne peut donc jamais être utilisé sans risque : elle a été retirée du standard C11. fgets et %15s limitent la lecture.',
        en: 'gets doesn’t know the array size, so it can never be used safely: it was removed from the C11 standard. fgets and %15s limit the read.',
        tr: 'gets dizinin boyutunu bilmez, bu yüzden asla güvenle kullanılamaz: C11 standardından çıkarılmıştır. fgets ve %15s okumayı sınırlar.',
      },
    },
  },
  {
    id: 'sec-w14-risk-law',
    week: 14,
    title: {
      fr: 'Gestion du risque, incidents, loi et révision du final',
      en: 'Risk management, incidents, law and final review',
      tr: 'Risk yönetimi, olaylar, hukuk ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La sécurité coûte de l’argent : on la justifie par l’analyse de risque. Perte unitaire SLE = valeur de l’actif × facteur d’exposition (part perdue lors d’un incident) ; perte annuelle ALE = SLE × ARO (nombre d’incidents par an). Une mesure vaut la peine si elle réduit l’ALE de plus que son coût annuel. Réponse aux incidents : préparation, détection, confinement, éradication, restauration, retour d’expérience. Côté loi, la KVKK (loi turque n° 6698) et le RGPD européen protègent les données personnelles.',
          en: 'Security costs money: it is justified by risk analysis. Single loss SLE = asset value × exposure factor (share lost in an incident); annual loss ALE = SLE × ARO (incidents per year). A measure is worth it if it reduces the ALE by more than its yearly cost. Incident response: preparation, detection, containment, eradication, recovery, lessons learned. On the legal side, KVKK (Turkish law no. 6698) and the European GDPR protect personal data.',
          tr: 'Güvenlik para tutar: risk analiziyle gerekçelendirilir. Tek kayıp SLE = varlık değeri × maruz kalma çarpanı (bir olayda kaybedilen pay); yıllık kayıp ALE = SLE × ARO (yılda olay sayısı). Bir önlem, ALE’yi yıllık maliyetinden fazla azaltıyorsa değerlidir. Olay müdahalesi: hazırlık, tespit, sınırlama, temizleme, kurtarma, alınan dersler. Hukuk tarafında KVKK (6698 sayılı kanun) ve Avrupa GDPR’ı kişisel verileri korur.',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Malwares : virus, ver, cheval de Troie, rançongiciel, botnet ; détection\n✔ Attaques réseau : écoute, usurpation, ARP, SYN flood, amplification\n✔ Web (OWASP) : injection, IDOR, traversée de répertoire, XSS\n✔ Pare-feu (ordre des règles), IDS / IPS, taux de base, VPN, DMZ\n✔ TLS, chaîne de certificats, contrôles du navigateur, confidentialité persistante\n✔ Dépassement de tampon, canari, ASLR, NX, fonctions bornées\n✔ Risque : SLE, ARO, ALE ; réponse aux incidents ; KVKK / RGPD',
          en: '✔ Malware: virus, worm, Trojan, ransomware, botnet; detection\n✔ Network attacks: sniffing, spoofing, ARP, SYN flood, amplification\n✔ Web (OWASP): injection, IDOR, path traversal, XSS\n✔ Firewall (rule order), IDS / IPS, base rate, VPN, DMZ\n✔ TLS, certificate chain, browser checks, forward secrecy\n✔ Buffer overflow, canary, ASLR, NX, bounded functions\n✔ Risk: SLE, ARO, ALE; incident response; KVKK / GDPR',
          tr: '✔ Kötü yazılımlar: virüs, solucan, Truva atı, fidye yazılımı, botnet; tespit\n✔ Ağ saldırıları: dinleme, sahtecilik, ARP, SYN seli, yükseltme\n✔ Web (OWASP): enjeksiyon, IDOR, dizin geçişi, XSS\n✔ Güvenlik duvarı (kural sırası), IDS / IPS, temel oran, VPN, DMZ\n✔ TLS, sertifika zinciri, tarayıcı denetimleri, ileriye dönük gizlilik\n✔ Arabellek taşması, kanarya, ASLR, NX, sınırlı fonksiyonlar\n✔ Risk: SLE, ARO, ALE; olay müdahalesi; KVKK / GDPR',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un serveur vaut 100 000 TL. Une attaque en détruirait 30 % et arrive en moyenne une fois tous les deux ans. (1) Calcule SLE, ARO et ALE. (2) Une solution coûte 8 000 TL par an et réduit l’ARO à 0,1. Vaut-elle la peine ? (3) Après une fuite de données personnelles, quelle est la première étape de la réponse à l’incident, et pourquoi ?',
          en: 'A server is worth 100,000 TL. An attack would destroy 30% of it and happens on average once every two years. (1) Compute SLE, ARO and ALE. (2) A solution costs 8,000 TL per year and cuts the ARO to 0.1. Is it worth it? (3) After a personal data leak, what is the first incident response step, and why?',
          tr: 'Bir sunucunun değeri 100.000 TL. Bir saldırı onun %30’unu yok eder ve ortalama iki yılda bir olur. (1) SLE, ARO ve ALE’yi hesapla. (2) Bir çözüm yılda 8.000 TL tutuyor ve ARO’yu 0,1’e indiriyor. Değer mi? (3) Bir kişisel veri sızıntısından sonra olay müdahalesinin ilk adımı nedir ve neden?',
        },
        solution: {
          fr: '(1) SLE = 100 000 × 0,3 = 30 000 TL ; ARO = 0,5 (une fois tous les deux ans) ; ALE = 30 000 × 0,5 = 15 000 TL par an. (2) Nouvelle ALE = 30 000 × 0,1 = 3 000 TL. Gain : 15 000 − 3 000 = 12 000 TL par an, pour un coût de 8 000 TL, soit un bénéfice net de 4 000 TL par an : oui. (3) Le confinement (isoler les systèmes touchés) pour arrêter la fuite, tout en conservant les preuves. Ensuite seulement viennent l’éradication et la restauration, sans oublier de notifier l’autorité (KVKK) et les personnes concernées dans les délais légaux.',
          en: '(1) SLE = 100,000 × 0.3 = 30,000 TL; ARO = 0.5 (once every two years); ALE = 30,000 × 0.5 = 15,000 TL per year. (2) New ALE = 30,000 × 0.1 = 3,000 TL. Saving: 15,000 − 3,000 = 12,000 TL per year, for a cost of 8,000 TL, so a net benefit of 4,000 TL per year: yes. (3) Containment (isolating the affected systems) to stop the leak, while preserving evidence. Only then come eradication and recovery, without forgetting to notify the authority (KVKK) and the people concerned within the legal deadlines.',
          tr: '(1) SLE = 100.000 × 0,3 = 30.000 TL; ARO = 0,5 (iki yılda bir); ALE = 30.000 × 0,5 = yılda 15.000 TL. (2) Yeni ALE = 30.000 × 0,1 = 3.000 TL. Kazanç: yılda 15.000 − 3.000 = 12.000 TL, maliyet 8.000 TL, yani yılda 4.000 TL net fayda: evet. (3) Sızıntıyı durdurmak için kanıtları koruyarak sınırlama (etkilenen sistemleri yalıtmak). Temizleme ve kurtarma ancak bundan sonra gelir; kuruma (KVKK) ve ilgili kişilere yasal süreler içinde bildirim yapmayı da unutmamak gerekir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Comment calcule-t-on la perte annuelle attendue (ALE) ?',
        en: 'How is the annualized loss expectancy (ALE) computed?',
        tr: 'Yıllık beklenen kayıp (ALE) nasıl hesaplanır?',
      },
      options: { fr: ['SLE × ARO', 'SLE + ARO', 'Valeur de l’actif × ARO'], en: ['SLE × ARO', 'SLE + ARO', 'Asset value × ARO'], tr: ['SLE × ARO', 'SLE + ARO', 'Varlık değeri × ARO'] },
      answerIndex: 0,
      explanation: {
        fr: 'Perte par incident multipliée par le nombre d’incidents par an. La valeur totale de l’actif surestimerait la perte, sauf si chaque incident le détruit entièrement.',
        en: 'Loss per incident times the number of incidents per year. The full asset value would overstate the loss, unless each incident destroys it completely.',
        tr: 'Olay başına kayıp çarpı yıllık olay sayısı. Her olay varlığı tamamen yok etmedikçe varlığın tam değeri kaybı olduğundan büyük gösterirdi.',
      },
    },
  },
];
