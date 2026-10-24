/**
 * Lessons for the Karabük University (KBU) computer engineering courses,
 * following the department curriculum. Same shape as `lessons.ts`.
 */

import type { LessonSource } from '@/data/lessons';

export const kbuLessonsByCourse: Record<string, LessonSource[]> = {
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
