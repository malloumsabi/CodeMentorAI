/**
 * Lessons for the Karabük University (KBU) computer engineering courses,
 * following the department curriculum. Same shape as `lessons.ts`.
 */

import type { LessonSource } from '@/data/lessons';

export const kbuLessonsByCourse: Record<string, LessonSource[]> = {
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
