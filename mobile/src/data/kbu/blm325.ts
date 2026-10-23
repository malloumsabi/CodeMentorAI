/**
 * BLM325 Veri İletişim Sistemleri (Data Communication Systems), 14 weeks following the KBU course contents,
 * in the order of W. Stallings, "Data and Computer Communications".
 * Weeks 1–7 prepare the midterm, weeks 8–14 the final.
 */

import type { LessonSource } from '@/data/lessons';

export const blm325Lessons: LessonSource[] = [
  {
    id: 'dc-w01-model',
    week: 1,
    title: {
      fr: 'Le modèle de communication de données',
      en: 'The data communications model',
      tr: 'Veri iletişimi modeli',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Toute communication de données suit le même modèle : une source produit les données, un émetteur les transforme en signal, un système de transmission les transporte, un récepteur reconvertit le signal, et la destination utilise les données.',
          en: 'All data communication follows the same model: a source produces the data, a transmitter turns it into a signal, a transmission system carries it, a receiver converts the signal back, and the destination uses the data.',
          tr: 'Tüm veri iletişimi aynı modeli izler: kaynak veriyi üretir, verici onu sinyale dönüştürür, iletim sistemi taşır, alıcı sinyali geri çevirir ve hedef veriyi kullanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Source → Émetteur → Système de transmission → Récepteur → Destination\n(PC)     (modem)     (ligne, fibre, radio)       (modem)    (serveur)\n\nModes : simplex (un seul sens, ex. radio FM)\n        half-duplex (les deux sens, chacun son tour, ex. talkie-walkie)\n        full-duplex (les deux sens en même temps, ex. téléphone)\nTopologies : bus, étoile, anneau, maillage',
          en: 'Source → Transmitter → Transmission system → Receiver → Destination\n(PC)     (modem)       (line, fiber, radio)    (modem)    (server)\n\nModes: simplex (one way only, e.g. FM radio)\n       half-duplex (both ways, one at a time, e.g. walkie-talkie)\n       full-duplex (both ways at once, e.g. telephone)\nTopologies: bus, star, ring, mesh',
          tr: 'Kaynak → Verici → İletim sistemi → Alıcı → Hedef\n(PC)     (modem)  (hat, fiber, radyo)  (modem)  (sunucu)\n\nModlar: simpleks (tek yön, örn. FM radyo)\n        yarı çift yönlü (iki yön, sırayla, örn. telsiz)\n        tam çift yönlü (aynı anda iki yön, örn. telefon)\nTopolojiler: yol (bus), yıldız, halka, örgü',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Les tâches clés d’un système de communication : utiliser efficacement le canal, s’interfacer avec le support, synchroniser émetteur et récepteur, détecter et corriger les erreurs, contrôler le flux, adresser et router les messages, assurer la sécurité.',
          en: 'Key tasks of a communication system: use the channel efficiently, interface with the medium, synchronize transmitter and receiver, detect and correct errors, control the flow, address and route messages, provide security.',
          tr: 'Bir iletişim sisteminin temel görevleri: kanalı verimli kullanmak, ortamla arayüz sağlamak, verici ile alıcıyı eşzamanlamak, hataları sezmek ve düzeltmek, akışı denetlemek, mesajları adreslemek ve yönlendirmek, güvenliği sağlamak.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Simplex, half-duplex ou full-duplex ? (1) Une télécommande de télévision. (2) Un appel vidéo. (3) Une radio de police où il faut appuyer sur un bouton pour parler. (4) Un clavier relié à un ordinateur.',
          en: 'Simplex, half-duplex or full-duplex? (1) A TV remote control. (2) A video call. (3) A police radio where you press a button to talk. (4) A keyboard connected to a computer.',
          tr: 'Simpleks, yarı çift yönlü mü, tam çift yönlü mü? (1) Bir televizyon kumandası. (2) Bir görüntülü arama. (3) Konuşmak için düğmeye basılan bir polis telsizi. (4) Bilgisayara bağlı bir klavye.',
        },
        solution: {
          fr: '(1) Simplex : la télécommande envoie, la télé ne répond pas. (2) Full-duplex : les deux personnes parlent et s’entendent en même temps. (3) Half-duplex : les deux sens existent, mais un seul à la fois. (4) Simplex au sens des données de frappe (du clavier vers le PC), même si le PC peut allumer les voyants du clavier.',
          en: '(1) Simplex: the remote sends, the TV does not answer. (2) Full-duplex: both people talk and hear each other at the same time. (3) Half-duplex: both directions exist, but only one at a time. (4) Simplex for keystroke data (keyboard to PC), even though the PC can light the keyboard’s LEDs.',
          tr: '(1) Simpleks: kumanda gönderir, televizyon cevap vermez. (2) Tam çift yönlü: iki kişi aynı anda konuşur ve birbirini duyar. (3) Yarı çift yönlü: iki yön vardır ama aynı anda yalnızca biri. (4) Tuş verisi açısından simpleks (klavyeden PC’ye), PC klavyenin ışıklarını yakabilse de.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel élément transforme les données en signal adapté au support ?',
        en: 'Which element turns the data into a signal suited to the medium?',
        tr: 'Hangi öğe veriyi ortama uygun bir sinyale dönüştürür?',
      },
      options: { fr: ['La source', 'L’émetteur', 'La destination'], en: ['The source', 'The transmitter', 'The destination'], tr: ['Kaynak', 'Verici', 'Hedef'] },
      answerIndex: 1,
      explanation: {
        fr: 'L’émetteur (par exemple un modem ou une carte réseau) code les données en signal électrique, lumineux ou radio pour le système de transmission.',
        en: 'The transmitter (for example a modem or a network card) encodes the data as an electrical, light or radio signal for the transmission system.',
        tr: 'Verici (örneğin bir modem veya ağ kartı) veriyi iletim sistemi için elektrik, ışık veya radyo sinyali olarak kodlar.',
      },
    },
  },
  {
    id: 'dc-w02-protocols',
    week: 2,
    title: {
      fr: 'Architecture des protocoles : OSI et TCP/IP',
      en: 'Protocol architecture: OSI and TCP/IP',
      tr: 'Protokol mimarisi: OSI ve TCP/IP',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un protocole fixe les règles d’un échange : syntaxe (format), sémantique (sens) et synchronisation (ordre et vitesse). On découpe la communication en couches : chaque couche rend un service à celle du dessus et utilise celle du dessous.',
          en: 'A protocol sets the rules of an exchange: syntax (format), semantics (meaning) and timing (order and speed). Communication is split into layers: each layer serves the one above and uses the one below.',
          tr: 'Protokol bir iletişimin kurallarını belirler: sözdizimi (biçim), anlam ve zamanlama (sıra ve hız). İletişim katmanlara bölünür: her katman üstündekine hizmet verir ve altındakini kullanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'OSI (7)              TCP/IP           Unité (PDU)\n7 Application   ┐\n6 Présentation  ├─  Application      message\n5 Session       ┘\n4 Transport     ──  Transport        segment (TCP, UDP)\n3 Réseau        ──  Internet         paquet (IP)\n2 Liaison       ┐\n1 Physique      ┘─  Accès réseau     trame / bits',
          en: 'OSI (7)              TCP/IP           Unit (PDU)\n7 Application   ┐\n6 Presentation  ├─  Application      message\n5 Session       ┘\n4 Transport     ──  Transport        segment (TCP, UDP)\n3 Network       ──  Internet         packet (IP)\n2 Data link     ┐\n1 Physical      ┘─  Network access   frame / bits',
          tr: 'OSI (7)              TCP/IP           Birim (PDU)\n7 Uygulama      ┐\n6 Sunum         ├─  Uygulama         mesaj\n5 Oturum        ┘\n4 Taşıma        ──  Taşıma           segment (TCP, UDP)\n3 Ağ            ──  İnternet         paket (IP)\n2 Veri bağı     ┐\n1 Fiziksel      ┘─  Ağ erişimi       çerçeve / bitler',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'À l’envoi, chaque couche ajoute son en-tête : c’est l’encapsulation. À la réception, chaque couche enlève l’en-tête de son niveau. TCP garantit une livraison fiable et ordonnée ; UDP est plus léger, sans garantie.',
          en: 'When sending, each layer adds its header: that is encapsulation. When receiving, each layer removes its own header. TCP guarantees reliable, ordered delivery; UDP is lighter, with no guarantee.',
          tr: 'Gönderirken her katman kendi başlığını ekler: buna kapsülleme denir. Alırken her katman kendi başlığını çıkarır. TCP güvenilir ve sıralı teslimi garanti eder; UDP daha hafiftir ama garanti vermez.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'À quelle couche OSI se trouve chaque élément ? (1) une adresse IP ; (2) une adresse MAC ; (3) un numéro de port TCP ; (4) le câble et les niveaux de tension ; (5) HTTP ; (6) le chiffrement et la compression des données.',
          en: 'At which OSI layer is each item? (1) an IP address; (2) a MAC address; (3) a TCP port number; (4) the cable and voltage levels; (5) HTTP; (6) data encryption and compression.',
          tr: 'Her öğe hangi OSI katmanındadır? (1) IP adresi; (2) MAC adresi; (3) TCP port numarası; (4) kablo ve gerilim seviyeleri; (5) HTTP; (6) verilerin şifrelenmesi ve sıkıştırılması.',
        },
        solution: {
          fr: '(1) Couche 3, réseau. (2) Couche 2, liaison de données. (3) Couche 4, transport. (4) Couche 1, physique. (5) Couche 7, application. (6) Couche 6, présentation (dans TCP/IP, c’est fait dans la couche application, par exemple TLS).',
          en: '(1) Layer 3, network. (2) Layer 2, data link. (3) Layer 4, transport. (4) Layer 1, physical. (5) Layer 7, application. (6) Layer 6, presentation (in TCP/IP this happens in the application layer, e.g. TLS).',
          tr: '(1) 3. katman, ağ. (2) 2. katman, veri bağı. (3) 4. katman, taşıma. (4) 1. katman, fiziksel. (5) 7. katman, uygulama. (6) 6. katman, sunum (TCP/IP’de bu uygulama katmanında yapılır, örn. TLS).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Comment s’appelle l’unité de données de la couche liaison ?',
        en: 'What is the data unit of the data link layer called?',
        tr: 'Veri bağı katmanının veri birimine ne ad verilir?',
      },
      options: { fr: ['Segment', 'Paquet', 'Trame'], en: ['Segment', 'Packet', 'Frame'], tr: ['Segment', 'Paket', 'Çerçeve'] },
      answerIndex: 2,
      explanation: {
        fr: 'Transport → segment, réseau → paquet, liaison → trame, physique → bits.',
        en: 'Transport → segment, network → packet, data link → frame, physical → bits.',
        tr: 'Taşıma → segment, ağ → paket, veri bağı → çerçeve, fiziksel → bitler.',
      },
    },
  },
  {
    id: 'dc-w03-transmission',
    week: 3,
    title: {
      fr: 'Transmission des données et capacité du canal',
      en: 'Data transmission and channel capacity',
      tr: 'Veri iletimi ve kanal kapasitesi',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un signal périodique est décrit par son amplitude A, sa fréquence f (en Hz), sa période T = 1/f, sa phase φ et sa longueur d’onde λ = v/f. La bande passante B d’un canal est la largeur de la plage de fréquences qu’il laisse passer. Plus B est grande, plus le débit possible est élevé.',
          en: 'A periodic signal is described by its amplitude A, frequency f (in Hz), period T = 1/f, phase φ and wavelength λ = v/f. A channel’s bandwidth B is the width of the frequency range it lets through. The larger B, the higher the possible data rate.',
          tr: 'Periyodik bir sinyal genliği A, frekansı f (Hz), periyodu T = 1/f, fazı φ ve dalga boyu λ = v/f ile tanımlanır. Bir kanalın bant genişliği B, geçirdiği frekans aralığının genişliğidir. B büyüdükçe mümkün olan veri hızı artar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Nyquist (canal sans bruit) : C = 2B log₂ M     (M niveaux de signal)\nShannon (canal bruité)     : C = B log₂(1 + SNR)\nSNR en dB = 10 log₁₀(SNR)  →  30 dB = 1000',
          en: 'Nyquist (noiseless channel): C = 2B log₂ M     (M signal levels)\nShannon (noisy channel)     : C = B log₂(1 + SNR)\nSNR in dB = 10 log₁₀(SNR)  →  30 dB = 1000',
          tr: 'Nyquist (gürültüsüz kanal): C = 2B log₂ M     (M sinyal seviyesi)\nShannon (gürültülü kanal)  : C = B log₂(1 + SNR)\nSNR dB cinsinden = 10 log₁₀(SNR)  →  30 dB = 1000',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Un canal sans bruit de 3100 Hz utilise 8 niveaux de signal : débit maximal selon Nyquist ? (2) Une ligne téléphonique de 3000 Hz a un SNR de 30 dB : capacité selon Shannon ?',
          en: '(1) A noiseless 3100 Hz channel uses 8 signal levels: maximum rate according to Nyquist? (2) A 3000 Hz phone line has an SNR of 30 dB: capacity according to Shannon?',
          tr: '(1) 3100 Hz’lik gürültüsüz bir kanal 8 sinyal seviyesi kullanıyor: Nyquist’e göre en yüksek hız? (2) 3000 Hz’lik bir telefon hattının SNR’si 30 dB: Shannon’a göre kapasite?',
        },
        solution: {
          fr: '(1) C = 2 × 3100 × log₂ 8 = 2 × 3100 × 3 = 18 600 bit/s. (2) 30 dB donne SNR = 10³ = 1000. C = 3000 × log₂(1001) ≈ 3000 × 9,97 ≈ 29 900 bit/s, environ 30 kbit/s. C’est une limite théorique qu’aucun modem ne peut dépasser sur cette ligne.',
          en: '(1) C = 2 × 3100 × log₂ 8 = 2 × 3100 × 3 = 18,600 bit/s. (2) 30 dB gives SNR = 10³ = 1000. C = 3000 × log₂(1001) ≈ 3000 × 9.97 ≈ 29,900 bit/s, about 30 kbit/s. It is a theoretical limit no modem can exceed on that line.',
          tr: '(1) C = 2 × 3100 × log₂ 8 = 2 × 3100 × 3 = 18.600 bit/s. (2) 30 dB, SNR = 10³ = 1000 verir. C = 3000 × log₂(1001) ≈ 3000 × 9,97 ≈ 29.900 bit/s, yaklaşık 30 kbit/s. Bu, hiçbir modemin bu hatta aşamayacağı teorik bir sınırdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle formule tient compte du bruit dans le canal ?',
        en: 'Which formula takes the channel noise into account?',
        tr: 'Hangi formül kanaldaki gürültüyü hesaba katar?',
      },
      options: { fr: ['Nyquist', 'Shannon', 'Les deux'], en: ['Nyquist', 'Shannon', 'Both'], tr: ['Nyquist', 'Shannon', 'İkisi de'] },
      answerIndex: 1,
      explanation: {
        fr: 'Shannon utilise le rapport signal sur bruit (SNR). Nyquist suppose un canal sans bruit et dépend du nombre de niveaux M.',
        en: 'Shannon uses the signal-to-noise ratio (SNR). Nyquist assumes a noiseless channel and depends on the number of levels M.',
        tr: 'Shannon sinyal-gürültü oranını (SNR) kullanır. Nyquist gürültüsüz bir kanal varsayar ve seviye sayısı M’ye bağlıdır.',
      },
    },
  },
  {
    id: 'dc-w04-media',
    week: 4,
    title: {
      fr: 'Dégradations et supports de transmission',
      en: 'Impairments and transmission media',
      tr: 'İletim bozulmaları ve iletim ortamları',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un signal se dégrade en chemin : l’atténuation (il s’affaiblit avec la distance, on la mesure en décibels), la distorsion de délai (les fréquences n’arrivent pas en même temps) et le bruit : thermique, d’intermodulation, diaphonie (crosstalk) et bruit impulsif.',
          en: 'A signal degrades on its way: attenuation (it weakens with distance, measured in decibels), delay distortion (frequencies don’t arrive at the same time) and noise: thermal, intermodulation, crosstalk and impulse noise.',
          tr: 'Bir sinyal yolda bozulur: zayıflama (mesafeyle zayıflar, desibel ile ölçülür), gecikme bozulması (frekanslar aynı anda varmaz) ve gürültü: ısıl, ara modülasyon, karışma (crosstalk) ve dürtü gürültüsü.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Gain (dB) = 10 log₁₀(P_sortie / P_entrée)    (négatif = perte)\n\nSupports guidés\n  Paire torsadée (UTP Cat5e, Cat6) : bon marché, réseaux locaux\n  Câble coaxial                    : TV, anciens réseaux\n  Fibre optique                    : très haut débit, longue distance,\n                                     insensible aux parasites\nSans fil : radio (Wi-Fi), micro-ondes terrestres, satellite, infrarouge',
          en: 'Gain (dB) = 10 log₁₀(P_out / P_in)    (negative = loss)\n\nGuided media\n  Twisted pair (UTP Cat5e, Cat6) : cheap, local networks\n  Coaxial cable                  : TV, older networks\n  Optical fiber                  : very high speed, long distance,\n                                   immune to interference\nWireless: radio (Wi-Fi), terrestrial microwave, satellite, infrared',
          tr: 'Kazanç (dB) = 10 log₁₀(P_çıkış / P_giriş)    (negatif = kayıp)\n\nKılavuzlu ortamlar\n  Bükümlü çift (UTP Cat5e, Cat6) : ucuz, yerel ağlar\n  Koaksiyel kablo                : TV, eski ağlar\n  Fiber optik                    : çok yüksek hız, uzun mesafe,\n                                   parazitten etkilenmez\nKablosuz: radyo (Wi-Fi), karasal mikrodalga, uydu, kızılötesi',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Un signal entre à 10 mW et sort à 5 mW : quelle est la perte en dB ? (2) Un câble perd 3 dB, puis un amplificateur ajoute 10 dB, puis un autre câble perd 4 dB : quel est le gain total ?',
          en: '(1) A signal enters at 10 mW and leaves at 5 mW: what is the loss in dB? (2) A cable loses 3 dB, then an amplifier adds 10 dB, then another cable loses 4 dB: what is the total gain?',
          tr: '(1) Bir sinyal 10 mW ile girip 5 mW ile çıkıyor: dB cinsinden kayıp nedir? (2) Bir kablo 3 dB kaybediyor, sonra bir yükselteç 10 dB ekliyor, sonra başka bir kablo 4 dB kaybediyor: toplam kazanç nedir?',
        },
        solution: {
          fr: '(1) 10 log₁₀(5/10) = 10 log₁₀(0,5) ≈ −3 dB : diviser la puissance par 2 fait perdre 3 dB. (2) L’avantage des décibels : on additionne simplement. −3 + 10 − 4 = +3 dB, donc la puissance de sortie est environ le double de celle d’entrée.',
          en: '(1) 10 log₁₀(5/10) = 10 log₁₀(0.5) ≈ −3 dB: halving the power loses 3 dB. (2) The advantage of decibels: you just add. −3 + 10 − 4 = +3 dB, so the output power is about twice the input power.',
          tr: '(1) 10 log₁₀(5/10) = 10 log₁₀(0,5) ≈ −3 dB: gücü yarıya indirmek 3 dB kaybettirir. (2) Desibelin avantajı: basitçe toplanır. −3 + 10 − 4 = +3 dB, yani çıkış gücü girişin yaklaşık iki katıdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel support est insensible aux interférences électromagnétiques ?',
        en: 'Which medium is immune to electromagnetic interference?',
        tr: 'Hangi ortam elektromanyetik girişimden etkilenmez?',
      },
      options: {
        fr: ['La paire torsadée', 'Le câble coaxial', 'La fibre optique'],
        en: ['Twisted pair', 'Coaxial cable', 'Optical fiber'],
        tr: ['Bükümlü çift', 'Koaksiyel kablo', 'Fiber optik'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'La fibre transporte de la lumière, pas un courant électrique : les champs électromagnétiques ne la perturbent pas.',
        en: 'Fiber carries light, not an electric current: electromagnetic fields do not disturb it.',
        tr: 'Fiber elektrik akımı değil ışık taşır: elektromanyetik alanlar onu etkilemez.',
      },
    },
  },
  {
    id: 'dc-w05-line-coding',
    week: 5,
    title: {
      fr: 'Codage des signaux numériques',
      en: 'Digital signal encoding',
      tr: 'Sayısal sinyal kodlama',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Pour envoyer des bits sur un fil, on choisit un code de ligne. Un bon code garde l’émetteur et le récepteur synchronisés (beaucoup de transitions), n’a pas de composante continue et résiste au bruit. Attention : les conventions changent selon les livres, il faut toujours les préciser.',
          en: 'To send bits over a wire, a line code is chosen. A good code keeps the transmitter and receiver synchronized (many transitions), has no DC component and resists noise. Careful: conventions differ between books, always state them.',
          tr: 'Bitleri bir kablo üzerinden göndermek için bir hat kodu seçilir. İyi bir kod verici ile alıcıyı eşzamanlı tutar (çok sayıda geçiş), DC bileşeni yoktur ve gürültüye dayanıklıdır. Dikkat: kurallar kitaptan kitaba değişir, her zaman belirtilmelidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'NRZ-L      : le niveau dépend du bit (Stallings : 0 = haut, 1 = bas)\nNRZI       : 1 = transition au début du bit, 0 = pas de transition\nAMI        : 0 = 0 V, 1 = alternativement +V et −V\nManchester : transition au milieu de chaque bit\n             (IEEE 802.3 : 0 = haut→bas, 1 = bas→haut)\nManchester différentiel : transition au milieu toujours,\n             0 = transition au début, 1 = pas de transition au début',
          en: 'NRZ-L      : the level depends on the bit (Stallings: 0 = high, 1 = low)\nNRZI       : 1 = transition at the start of the bit, 0 = no transition\nAMI        : 0 = 0 V, 1 = alternately +V and −V\nManchester : transition in the middle of every bit\n             (IEEE 802.3: 0 = high→low, 1 = low→high)\nDifferential Manchester: always a mid-bit transition,\n             0 = transition at the start, 1 = no transition at the start',
          tr: 'NRZ-L      : seviye bite bağlıdır (Stallings: 0 = yüksek, 1 = düşük)\nNRZI       : 1 = bit başında geçiş, 0 = geçiş yok\nAMI        : 0 = 0 V, 1 = sırayla +V ve −V\nManchester : her bitin ortasında geçiş\n             (IEEE 802.3: 0 = yüksek→düşük, 1 = düşük→yüksek)\nDiferansiyel Manchester: ortada her zaman geçiş,\n             0 = başta geçiş, 1 = başta geçiş yok',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Code la suite 1 0 1 1 0 en NRZI (en partant du niveau bas), en AMI (le premier 1 en +) et en Manchester IEEE 802.3. Écris B pour bas et H pour haut.',
          en: 'Encode the sequence 1 0 1 1 0 in NRZI (starting from the low level), in AMI (first 1 as +) and in IEEE 802.3 Manchester. Write L for low and H for high.',
          tr: '1 0 1 1 0 dizisini NRZI (düşük seviyeden başlayarak), AMI (ilk 1 + olarak) ve IEEE 802.3 Manchester ile kodla. Düşük için D, yüksek için Y yaz.',
        },
        solution: {
          fr: 'NRZI : 1 → transition vers H ; 0 → reste H ; 1 → B ; 1 → H ; 0 → reste H. Résultat : H H B H H. AMI : +, 0, −, +, 0. Manchester (une moitié de bit par lettre) : 1 = BH, 0 = HB, donc BH HB BH BH HB. Manchester a une transition à chaque bit : le récepteur retrouve l’horloge, mais il faut deux fois plus de bande passante.',
          en: 'NRZI: 1 → transition to H; 0 → stays H; 1 → L; 1 → H; 0 → stays H. Result: H H L H H. AMI: +, 0, −, +, 0. Manchester (one half-bit per letter): 1 = LH, 0 = HL, so LH HL LH LH HL. Manchester has a transition in every bit: the receiver recovers the clock, but it needs twice the bandwidth.',
          tr: 'NRZI: 1 → Y’ye geçiş; 0 → Y kalır; 1 → D; 1 → Y; 0 → Y kalır. Sonuç: Y Y D Y Y. AMI: +, 0, −, +, 0. Manchester (harf başına yarım bit): 1 = DY, 0 = YD, yani DY YD DY DY YD. Manchester’da her bitte geçiş vardır: alıcı saati yakalar, ama iki kat bant genişliği gerekir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est le principal avantage du codage Manchester ?',
        en: 'What is the main advantage of Manchester encoding?',
        tr: 'Manchester kodlamanın temel avantajı nedir?',
      },
      options: {
        fr: ['Il utilise moins de bande passante', 'Il contient l’horloge (une transition par bit)', 'Il n’a besoin que d’un niveau de tension'],
        en: ['It uses less bandwidth', 'It carries the clock (one transition per bit)', 'It needs only one voltage level'],
        tr: ['Daha az bant genişliği kullanır', 'Saati taşır (her bitte bir geçiş)', 'Tek bir gerilim seviyesi yeterlidir'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'La transition au milieu de chaque bit permet au récepteur de se synchroniser, même sur une longue suite de 0 ou de 1. Le prix : une bande passante doublée.',
        en: 'The transition in the middle of each bit lets the receiver stay synchronized, even on a long run of 0s or 1s. The price: doubled bandwidth.',
        tr: 'Her bitin ortasındaki geçiş, uzun 0 veya 1 dizilerinde bile alıcının eşzamanlı kalmasını sağlar. Bedeli: iki katı bant genişliği.',
      },
    },
  },
  {
    id: 'dc-w06-modulation',
    week: 6,
    title: { fr: 'Modulation et numérisation (PCM)', en: 'Modulation and digitization (PCM)', tr: 'Modülasyon ve sayısallaştırma (PCM)' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Pour envoyer des données numériques sur un support analogique (radio, ligne téléphonique), on module une porteuse : ASK change l’amplitude, FSK la fréquence, PSK la phase, et QAM combine amplitude et phase. Avec M symboles différents, chaque symbole porte log₂ M bits.',
          en: 'To send digital data over an analog medium (radio, phone line), a carrier is modulated: ASK changes the amplitude, FSK the frequency, PSK the phase, and QAM combines amplitude and phase. With M different symbols, each symbol carries log₂ M bits.',
          tr: 'Sayısal verileri analog bir ortamda (radyo, telefon hattı) göndermek için bir taşıyıcı modüle edilir: ASK genliği, FSK frekansı, PSK fazı değiştirir; QAM genlik ve fazı birleştirir. M farklı simgeyle her simge log₂ M bit taşır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Débit binaire (bit/s) = rapidité de modulation (baud) × log₂ M\n\nAnalogique → numérique : PCM\n1. Échantillonnage à au moins 2 × f_max (théorème de Nyquist)\n2. Quantification sur n bits (2ⁿ niveaux)\n3. Codage → débit = fréquence d’échantillonnage × n',
          en: 'Bit rate (bit/s) = modulation rate (baud) × log₂ M\n\nAnalog → digital: PCM\n1. Sample at least at 2 × f_max (Nyquist theorem)\n2. Quantize on n bits (2ⁿ levels)\n3. Encode → rate = sampling rate × n',
          tr: 'Bit hızı (bit/s) = modülasyon hızı (baud) × log₂ M\n\nAnalog → sayısal: PCM\n1. En az 2 × f_maks hızında örnekleme (Nyquist teoremi)\n2. n bit üzerinde nicemleme (2ⁿ seviye)\n3. Kodlama → hız = örnekleme hızı × n',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Un modem 16-QAM émet 2400 baud : quel est son débit ? (2) La voix téléphonique va jusqu’à 4 kHz et chaque échantillon est codé sur 8 bits : quel débit PCM ? (3) Pour transmettre 9600 bit/s à 1200 baud, combien de symboles M faut-il ?',
          en: '(1) A 16-QAM modem sends 2400 baud: what is its bit rate? (2) Telephone voice goes up to 4 kHz and each sample uses 8 bits: what PCM rate? (3) To send 9600 bit/s at 1200 baud, how many symbols M are needed?',
          tr: '(1) 16-QAM bir modem 2400 baud gönderiyor: bit hızı nedir? (2) Telefon sesi 4 kHz’e kadar çıkıyor ve her örnek 8 bitle kodlanıyor: PCM hızı nedir? (3) 1200 baud ile 9600 bit/s göndermek için kaç simge M gerekir?',
        },
        solution: {
          fr: '(1) log₂ 16 = 4 bits par symbole : 2400 × 4 = 9600 bit/s. (2) Échantillonnage à 2 × 4000 = 8000 échantillons/s, × 8 bits = 64 000 bit/s : c’est le canal téléphonique numérique classique (64 kbit/s). (3) 9600 / 1200 = 8 bits par symbole, donc M = 2⁸ = 256.',
          en: '(1) log₂ 16 = 4 bits per symbol: 2400 × 4 = 9600 bit/s. (2) Sampling at 2 × 4000 = 8000 samples/s, × 8 bits = 64,000 bit/s: the classic digital phone channel (64 kbit/s). (3) 9600 / 1200 = 8 bits per symbol, so M = 2⁸ = 256.',
          tr: '(1) log₂ 16 = simge başına 4 bit: 2400 × 4 = 9600 bit/s. (2) 2 × 4000 = saniyede 8000 örnek, × 8 bit = 64.000 bit/s: klasik sayısal telefon kanalı (64 kbit/s). (3) 9600 / 1200 = simge başına 8 bit, yani M = 2⁸ = 256.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle modulation change à la fois l’amplitude et la phase ?',
        en: 'Which modulation changes both the amplitude and the phase?',
        tr: 'Hangi modülasyon hem genliği hem fazı değiştirir?',
      },
      options: { fr: ['FSK', 'PSK', 'QAM'], en: ['FSK', 'PSK', 'QAM'], tr: ['FSK', 'PSK', 'QAM'] },
      answerIndex: 2,
      explanation: {
        fr: 'QAM (modulation d’amplitude en quadrature) combine plusieurs amplitudes et plusieurs phases, ce qui donne beaucoup de symboles et donc un débit élevé.',
        en: 'QAM (quadrature amplitude modulation) combines several amplitudes and phases, giving many symbols and therefore a high bit rate.',
        tr: 'QAM (dördün genlik modülasyonu) birkaç genlik ve fazı birleştirir; bu çok sayıda simge ve dolayısıyla yüksek bit hızı sağlar.',
      },
    },
  },
  {
    id: 'dc-w07-error-detection',
    week: 7,
    title: {
      fr: 'Transmission et détection d’erreurs, révision de la vize',
      en: 'Transmission and error detection, midterm review',
      tr: 'İletim ve hata sezme, vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En transmission asynchrone, chaque caractère est encadré par un bit de start et au moins un bit de stop : simple, mais 8 bits utiles sur 10 envoyés, soit 80 % d’efficacité. En transmission synchrone, on envoie de gros blocs avec une horloge commune : beaucoup plus efficace.',
          en: 'In asynchronous transmission, each character is framed by a start bit and at least one stop bit: simple, but 8 useful bits out of 10 sent, 80% efficiency. In synchronous transmission, large blocks are sent with a shared clock: much more efficient.',
          tr: 'Eşzamansız iletimde her karakter bir başlangıç biti ve en az bir durdurma biti ile çerçevelenir: basit ama gönderilen 10 bitin 8’i yararlıdır, yani %80 verim. Eşzamanlı iletimde ortak bir saatle büyük bloklar gönderilir: çok daha verimlidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Parité     : 1 bit pour rendre le nombre de 1 pair (ou impair)\n             détecte un nombre impair d’erreurs seulement\nCRC        : diviser (données + n zéros) par le générateur (n + 1 bits)\n             en XOR ; le reste de n bits est envoyé avec les données\nChecksum   : somme des mots, utilisée par IP, TCP, UDP\nHamming    : bits de contrôle qui permettent de CORRIGER 1 erreur',
          en: 'Parity     : 1 bit to make the number of 1s even (or odd)\n             detects only an odd number of errors\nCRC        : divide (data + n zeros) by the generator (n + 1 bits)\n             using XOR; the n-bit remainder is sent with the data\nChecksum   : sum of words, used by IP, TCP, UDP\nHamming    : check bits that can CORRECT 1 error',
          tr: 'Eşlik      : 1 sayısını çift (veya tek) yapan 1 bit\n             yalnızca tek sayıda hatayı sezer\nCRC        : (veri + n sıfır) üretece (n + 1 bit) XOR ile bölünür;\n             n bitlik kalan veriyle birlikte gönderilir\nSağlama toplamı : kelimelerin toplamı, IP, TCP, UDP kullanır\nHamming    : 1 hatayı DÜZELTEBİLEN denetim bitleri',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Modèle source-émetteur-canal-récepteur, simplex / half / full-duplex\n✔ OSI et TCP/IP, encapsulation, PDU\n✔ Fréquence, période, bande passante, Nyquist, Shannon, dB\n✔ Atténuation, bruit, supports guidés et sans fil\n✔ NRZ-L, NRZI, AMI, Manchester (avec les conventions)\n✔ ASK, FSK, PSK, QAM, baud et bit/s, PCM\n✔ Asynchrone / synchrone, parité, CRC, checksum',
          en: '✔ Source-transmitter-channel-receiver model, simplex / half / full-duplex\n✔ OSI and TCP/IP, encapsulation, PDUs\n✔ Frequency, period, bandwidth, Nyquist, Shannon, dB\n✔ Attenuation, noise, guided and wireless media\n✔ NRZ-L, NRZI, AMI, Manchester (with conventions)\n✔ ASK, FSK, PSK, QAM, baud and bit/s, PCM\n✔ Asynchronous / synchronous, parity, CRC, checksum',
          tr: '✔ Kaynak-verici-kanal-alıcı modeli, simpleks / yarı / tam çift yönlü\n✔ OSI ve TCP/IP, kapsülleme, PDU’lar\n✔ Frekans, periyot, bant genişliği, Nyquist, Shannon, dB\n✔ Zayıflama, gürültü, kılavuzlu ve kablosuz ortamlar\n✔ NRZ-L, NRZI, AMI, Manchester (kurallarıyla)\n✔ ASK, FSK, PSK, QAM, baud ve bit/s, PCM\n✔ Eşzamansız / eşzamanlı, eşlik, CRC, sağlama toplamı',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Calcule le CRC des données 1101 avec le générateur 1011 (x³ + x + 1), puis donne la trame envoyée.',
          en: 'Compute the CRC of the data 1101 with the generator 1011 (x³ + x + 1), then give the transmitted frame.',
          tr: '1101 verisinin CRC’sini 1011 üreteciyle (x³ + x + 1) hesapla, sonra gönderilen çerçeveyi ver.',
        },
        code: '1101 000   (1101 + 000)\n1011\n----\n0110 00 → 1100 ÷ 1011 → 0111\n         → 1110 ÷ 1011 → 0101\n         → 1010 ÷ 1011 → 0001',
        solution: {
          fr: 'Le générateur a 4 bits : on ajoute 3 zéros, 1101000. Divisions successives en XOR : 1101 ⊕ 1011 = 0110 ; on abaisse 0 : 1100 ⊕ 1011 = 0111 ; on abaisse 0 : 1110 ⊕ 1011 = 0101 ; on abaisse 0 : 1010 ⊕ 1011 = 0001. Le reste sur 3 bits est 001. Trame envoyée : 1101 001. Le récepteur divise la trame par 1011 : un reste nul signifie « pas d’erreur détectée ».',
          en: 'The generator has 4 bits: append 3 zeros, 1101000. Successive XOR divisions: 1101 ⊕ 1011 = 0110; bring down 0: 1100 ⊕ 1011 = 0111; bring down 0: 1110 ⊕ 1011 = 0101; bring down 0: 1010 ⊕ 1011 = 0001. The 3-bit remainder is 001. Transmitted frame: 1101 001. The receiver divides the frame by 1011: a zero remainder means “no error detected”.',
          tr: 'Üreteç 4 bittir: 3 sıfır eklenir, 1101000. Art arda XOR bölmeleri: 1101 ⊕ 1011 = 0110; 0 indirilir: 1100 ⊕ 1011 = 0111; 0 indirilir: 1110 ⊕ 1011 = 0101; 0 indirilir: 1010 ⊕ 1011 = 0001. 3 bitlik kalan 001’dir. Gönderilen çerçeve: 1101 001. Alıcı çerçeveyi 1011’e böler: kalanın sıfır olması “hata sezilmedi” demektir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Un bit de parité paire détecte-t-il deux bits inversés dans le même octet ?',
        en: 'Does an even parity bit detect two flipped bits in the same byte?',
        tr: 'Çift eşlik biti aynı baytta ters dönmüş iki biti sezer mi?',
      },
      options: {
        fr: ['Oui, toujours', 'Non, la parité reste la même', 'Oui, et il les corrige'],
        en: ['Yes, always', 'No, the parity stays the same', 'Yes, and it corrects them'],
        tr: ['Evet, her zaman', 'Hayır, eşlik aynı kalır', 'Evet ve onları düzeltir'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Deux inversions changent le nombre de 1 d’un nombre pair (+2, 0 ou −2) : la parité ne bouge pas, l’erreur passe inaperçue. C’est pourquoi on préfère le CRC.',
        en: 'Two flips change the number of 1s by an even amount (+2, 0 or −2): the parity does not move and the error goes unnoticed. That is why CRC is preferred.',
        tr: 'İki ters dönme 1 sayısını çift miktarda değiştirir (+2, 0 veya −2): eşlik değişmez ve hata fark edilmez. Bu yüzden CRC tercih edilir.',
      },
    },
  },
  {
    id: 'dc-w08-flow-control',
    week: 8,
    title: { fr: 'Contrôle de flux', en: 'Flow control', tr: 'Akış denetimi' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le contrôle de flux empêche un émetteur rapide de noyer un récepteur lent. Avec « envoyer et attendre » (stop-and-wait), l’émetteur envoie une trame puis attend l’accusé de réception (ACK). Avec la fenêtre glissante, il peut envoyer jusqu’à W trames avant d’attendre.',
          en: 'Flow control stops a fast sender from flooding a slow receiver. With stop-and-wait, the sender sends one frame then waits for the acknowledgment (ACK). With a sliding window, it can send up to W frames before waiting.',
          tr: 'Akış denetimi hızlı bir göndericinin yavaş bir alıcıyı boğmasını önler. Dur-bekle (stop-and-wait) yönteminde gönderici bir çerçeve gönderir ve onayı (ACK) bekler. Kayan pencerede beklemeden önce W çerçeveye kadar gönderebilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'a = temps de propagation / temps d’émission d’une trame\n\nStop-and-wait      : U = 1 / (1 + 2a)\nFenêtre glissante  : U = 1                si W ≥ 1 + 2a\n                     U = W / (1 + 2a)     sinon\nNuméros de séquence sur k bits → W ≤ 2ᵏ − 1',
          en: 'a = propagation time / frame transmission time\n\nStop-and-wait   : U = 1 / (1 + 2a)\nSliding window  : U = 1                if W ≥ 1 + 2a\n                  U = W / (1 + 2a)     otherwise\nk-bit sequence numbers → W ≤ 2ᵏ − 1',
          tr: 'a = yayılım süresi / bir çerçevenin iletim süresi\n\nDur-bekle       : U = 1 / (1 + 2a)\nKayan pencere   : W ≥ 1 + 2a ise U = 1\n                  aksi halde U = W / (1 + 2a)\nk bitlik sıra numaraları → W ≤ 2ᵏ − 1',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Des trames de 1000 bits sont envoyées à 1 Mbit/s sur une liaison dont le temps de propagation est de 5 ms. Calcule l’utilisation de la ligne avec stop-and-wait, puis avec une fenêtre glissante W = 7 et W = 15.',
          en: '1000-bit frames are sent at 1 Mbit/s over a link with a 5 ms propagation time. Compute the line utilization with stop-and-wait, then with a sliding window W = 7 and W = 15.',
          tr: '1000 bitlik çerçeveler, yayılım süresi 5 ms olan bir hatta 1 Mbit/s ile gönderiliyor. Hat kullanımını dur-bekle ile, sonra W = 7 ve W = 15 kayan pencereyle hesapla.',
        },
        solution: {
          fr: 'Temps d’émission = 1000 / 10⁶ = 1 ms, donc a = 5 / 1 = 5 et 1 + 2a = 11. Stop-and-wait : U = 1/11 ≈ 9,1 %, la ligne est presque toujours vide. W = 7 : 7 < 11, donc U = 7/11 ≈ 63,6 %. W = 15 : 15 ≥ 11, donc U = 100 % : l’émetteur ne s’arrête jamais.',
          en: 'Transmission time = 1000 / 10⁶ = 1 ms, so a = 5 / 1 = 5 and 1 + 2a = 11. Stop-and-wait: U = 1/11 ≈ 9.1%, the line is almost always idle. W = 7: 7 < 11, so U = 7/11 ≈ 63.6%. W = 15: 15 ≥ 11, so U = 100%: the sender never stops.',
          tr: 'İletim süresi = 1000 / 10⁶ = 1 ms, yani a = 5 / 1 = 5 ve 1 + 2a = 11. Dur-bekle: U = 1/11 ≈ %9,1, hat neredeyse hep boştur. W = 7: 7 < 11, yani U = 7/11 ≈ %63,6. W = 15: 15 ≥ 11, yani U = %100: gönderici hiç durmaz.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Avec des numéros de séquence sur 3 bits, quelle est la taille maximale de la fenêtre en Go-Back-N ?',
        en: 'With 3-bit sequence numbers, what is the maximum window size in Go-Back-N?',
        tr: '3 bitlik sıra numaralarıyla Go-Back-N’de en büyük pencere boyutu nedir?',
      },
      options: { fr: ['3', '7', '8'], en: ['3', '7', '8'], tr: ['3', '7', '8'] },
      answerIndex: 1,
      explanation: {
        fr: '3 bits donnent 8 numéros (0 à 7), mais la fenêtre ne doit pas dépasser 2³ − 1 = 7 : sinon, après une perte d’ACK, le récepteur ne pourrait pas distinguer une nouvelle trame d’un doublon.',
        en: '3 bits give 8 numbers (0 to 7), but the window must not exceed 2³ − 1 = 7: otherwise, after a lost ACK, the receiver couldn’t tell a new frame from a duplicate.',
        tr: '3 bit 8 numara verir (0-7), ama pencere 2³ − 1 = 7’yi aşmamalıdır: aksi halde kaybolan bir ACK’ten sonra alıcı yeni bir çerçeveyi kopyasından ayıramaz.',
      },
    },
  },
  {
    id: 'dc-w09-arq-hdlc',
    week: 9,
    title: {
      fr: 'Contrôle d’erreurs (ARQ) et HDLC',
      en: 'Error control (ARQ) and HDLC',
      tr: 'Hata denetimi (ARQ) ve HDLC',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'ARQ (Automatic Repeat reQuest) retransmet les trames perdues ou erronées. Stop-and-wait ARQ : une trame à la fois, avec un délai d’attente. Go-Back-N : en cas d’erreur sur la trame i, on renvoie i et toutes les suivantes. Selective Reject : on ne renvoie que la trame erronée, mais le récepteur doit stocker les trames hors ordre.',
          en: 'ARQ (Automatic Repeat reQuest) retransmits lost or damaged frames. Stop-and-wait ARQ: one frame at a time, with a timeout. Go-Back-N: on an error in frame i, resend i and all the following ones. Selective Reject: resend only the damaged frame, but the receiver must buffer out-of-order frames.',
          tr: 'ARQ (Otomatik Tekrar İsteği) kaybolan veya bozulan çerçeveleri yeniden gönderir. Dur-bekle ARQ: zaman aşımıyla birlikte bir seferde bir çerçeve. Go-Back-N: i. çerçevede hata olursa i ve sonraki tüm çerçeveler yeniden gönderilir. Selective Reject: yalnızca bozuk çerçeve yeniden gönderilir, ama alıcı sıra dışı çerçeveleri saklamalıdır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Trame HDLC\n| Fanion | Adresse | Contrôle | Données | FCS (CRC) | Fanion |\n| 01111110 |                                       | 01111110 |\n\nTypes : I (information), S (supervision : RR, RNR, REJ, SREJ),\n        U (non numérotées : établir / libérer la liaison)\n\nTransparence par bourrage de bits : après cinq 1 de suite dans\nles données, l’émetteur insère un 0 ; le récepteur l’enlève.',
          en: 'HDLC frame\n| Flag | Address | Control | Data | FCS (CRC) | Flag |\n| 01111110 |                                | 01111110 |\n\nTypes: I (information), S (supervisory: RR, RNR, REJ, SREJ),\n       U (unnumbered: set up / release the link)\n\nTransparency by bit stuffing: after five 1s in a row in\nthe data, the sender inserts a 0; the receiver removes it.',
          tr: 'HDLC çerçevesi\n| Bayrak | Adres | Denetim | Veri | FCS (CRC) | Bayrak |\n| 01111110 |                                 | 01111110 |\n\nTürler: I (bilgi), S (gözetim: RR, RNR, REJ, SREJ),\n        U (numarasız: bağlantı kurma / bırakma)\n\nBit doldurma ile saydamlık: veride art arda beş 1’den sonra\ngönderici bir 0 ekler; alıcı onu çıkarır.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Applique le bourrage de bits HDLC aux données 0111111101111100. (2) En Go-Back-N, les trames 0 à 6 sont envoyées et la trame 3 est perdue : lesquelles sont renvoyées ? Et en Selective Reject ?',
          en: '(1) Apply HDLC bit stuffing to the data 0111111101111100. (2) In Go-Back-N, frames 0 to 6 are sent and frame 3 is lost: which ones are resent? And with Selective Reject?',
          tr: '(1) 0111111101111100 verisine HDLC bit doldurma uygula. (2) Go-Back-N’de 0-6 arası çerçeveler gönderiliyor ve 3. çerçeve kayboluyor: hangileri yeniden gönderilir? Selective Reject’te?',
        },
        solution: {
          fr: '(1) Après chaque série de cinq 1, on insère un 0 : 0 11111 0 11 0 11111 0 00, soit 011111011011111000 (18 bits). Ainsi, le motif 01111110 n’apparaît jamais dans les données. (2) Go-Back-N : 3, 4, 5 et 6 (4 trames). Selective Reject : seulement la trame 3.',
          en: '(1) After every run of five 1s, insert a 0: 0 11111 0 11 0 11111 0 00, giving 011111011011111000 (18 bits). That way the pattern 01111110 never appears in the data. (2) Go-Back-N: 3, 4, 5 and 6 (4 frames). Selective Reject: only frame 3.',
          tr: '(1) Her beş 1’den sonra bir 0 eklenir: 0 11111 0 11 0 11111 0 00, yani 011111011011111000 (18 bit). Böylece 01111110 deseni veride hiç görünmez. (2) Go-Back-N: 3, 4, 5 ve 6 (4 çerçeve). Selective Reject: yalnızca 3. çerçeve.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est le fanion qui délimite une trame HDLC ?',
        en: 'Which flag marks the boundaries of an HDLC frame?',
        tr: 'Bir HDLC çerçevesinin sınırlarını hangi bayrak belirler?',
      },
      options: { fr: ['11111111', '01111110', '10101010'], en: ['11111111', '01111110', '10101010'], tr: ['11111111', '01111110', '10101010'] },
      answerIndex: 1,
      explanation: {
        fr: 'Le fanion est 01111110. Le bourrage de bits garantit qu’il n’apparaît jamais à l’intérieur des données.',
        en: 'The flag is 01111110. Bit stuffing guarantees it never appears inside the data.',
        tr: 'Bayrak 01111110’dur. Bit doldurma, onun veri içinde hiç görünmemesini garanti eder.',
      },
    },
  },
  {
    id: 'dc-w10-multiplexing',
    week: 10,
    title: { fr: 'Le multiplexage', en: 'Multiplexing', tr: 'Çoğullama' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le multiplexage fait passer plusieurs communications sur un seul support. FDM partage les fréquences (radio, télévision, ADSL). TDM synchrone donne à chaque source un intervalle de temps fixe, même si elle n’a rien à dire. TDM statistique n’alloue le temps qu’aux sources actives. WDM est le FDM des fibres optiques, avec plusieurs couleurs de lumière.',
          en: 'Multiplexing carries several communications over one medium. FDM shares the frequencies (radio, TV, ADSL). Synchronous TDM gives each source a fixed time slot, even when it has nothing to send. Statistical TDM only gives time to active sources. WDM is FDM for optical fiber, with several colors of light.',
          tr: 'Çoğullama birkaç iletişimi tek bir ortam üzerinden taşır. FDM frekansları paylaştırır (radyo, televizyon, ADSL). Eşzamanlı TDM her kaynağa, gönderecek bir şeyi olmasa bile sabit bir zaman dilimi verir. İstatistiksel TDM yalnızca etkin kaynaklara zaman ayırır. WDM, birkaç ışık rengiyle fiber optiğin FDM’idir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Ligne T1 (Amérique du Nord), TDM synchrone\n24 voies × 8 bits + 1 bit de trame = 193 bits par trame\n8000 trames/s → 193 × 8000 = 1,544 Mbit/s\nLigne E1 (Europe, Turquie) : 32 intervalles × 8 bits × 8000 = 2,048 Mbit/s',
          en: 'T1 line (North America), synchronous TDM\n24 channels × 8 bits + 1 framing bit = 193 bits per frame\n8000 frames/s → 193 × 8000 = 1.544 Mbit/s\nE1 line (Europe, Turkey): 32 slots × 8 bits × 8000 = 2.048 Mbit/s',
          tr: 'T1 hattı (Kuzey Amerika), eşzamanlı TDM\n24 kanal × 8 bit + 1 çerçeve biti = çerçeve başına 193 bit\nsaniyede 8000 çerçeve → 193 × 8000 = 1,544 Mbit/s\nE1 hattı (Avrupa, Türkiye): 32 dilim × 8 bit × 8000 = 2,048 Mbit/s',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Retrouve le débit d’une ligne T1. (2) Dix terminaux à 9600 bit/s sont actifs en moyenne 20 % du temps. Quel débit faut-il en TDM synchrone ? Et environ en TDM statistique ?',
          en: '(1) Work out the rate of a T1 line. (2) Ten terminals at 9600 bit/s are active 20% of the time on average. What rate does synchronous TDM need? And roughly statistical TDM?',
          tr: '(1) Bir T1 hattının hızını bul. (2) 9600 bit/s’lik on terminal ortalama zamanın %20’sinde etkin. Eşzamanlı TDM için hangi hız gerekir? İstatistiksel TDM için yaklaşık ne kadar?',
        },
        solution: {
          fr: '(1) 24 × 8 + 1 = 193 bits par trame, 8000 trames par seconde (une par échantillon de voix) : 193 × 8000 = 1 544 000 bit/s. (2) TDM synchrone : 10 × 9600 = 96 000 bit/s, car chaque terminal garde son intervalle même inactif. TDM statistique : en moyenne 10 × 9600 × 0,2 = 19 200 bit/s ; on prévoit un peu plus et un tampon pour les pics.',
          en: '(1) 24 × 8 + 1 = 193 bits per frame, 8000 frames per second (one per voice sample): 193 × 8000 = 1,544,000 bit/s. (2) Synchronous TDM: 10 × 9600 = 96,000 bit/s, since every terminal keeps its slot even when idle. Statistical TDM: on average 10 × 9600 × 0.2 = 19,200 bit/s; plan a bit more and a buffer for peaks.',
          tr: '(1) 24 × 8 + 1 = çerçeve başına 193 bit, saniyede 8000 çerçeve (her ses örneği için bir): 193 × 8000 = 1.544.000 bit/s. (2) Eşzamanlı TDM: 10 × 9600 = 96.000 bit/s, çünkü her terminal boştayken bile dilimini korur. İstatistiksel TDM: ortalama 10 × 9600 × 0,2 = 19.200 bit/s; tepe anları için biraz fazlası ve bir tampon öngörülür.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle technique multiplexe plusieurs longueurs d’onde de lumière dans une fibre ?',
        en: 'Which technique multiplexes several wavelengths of light in a fiber?',
        tr: 'Bir fiberde birkaç ışık dalga boyunu hangi teknik çoğullar?',
      },
      options: { fr: ['TDM', 'WDM', 'CDMA'], en: ['TDM', 'WDM', 'CDMA'], tr: ['TDM', 'WDM', 'CDMA'] },
      answerIndex: 1,
      explanation: {
        fr: 'WDM (Wavelength Division Multiplexing) envoie plusieurs « couleurs » de lumière en même temps dans la même fibre : c’est du multiplexage en fréquence pour l’optique.',
        en: 'WDM (Wavelength Division Multiplexing) sends several “colors” of light at once in the same fiber: it is frequency multiplexing for optics.',
        tr: 'WDM (Dalga Boyu Bölmeli Çoğullama) aynı fiberde aynı anda birkaç ışık “rengi” gönderir: optik için frekans çoğullamasıdır.',
      },
    },
  },
  {
    id: 'dc-w11-spread-spectrum',
    week: 11,
    title: { fr: 'Étalement de spectre et CDMA', en: 'Spread spectrum and CDMA', tr: 'Yayılı spektrum ve CDMA' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’étalement de spectre répartit le signal sur une bande bien plus large que nécessaire : il devient résistant au brouillage et aux interférences, et difficile à intercepter. FHSS saute d’une fréquence à l’autre selon une suite connue des deux côtés (Bluetooth). DSSS multiplie chaque bit par une suite rapide de « chips » (Wi-Fi 802.11b).',
          en: 'Spread spectrum spreads the signal over a much wider band than needed: it becomes resistant to jamming and interference, and hard to intercept. FHSS hops from frequency to frequency following a sequence known to both sides (Bluetooth). DSSS multiplies each bit by a fast sequence of “chips” (802.11b Wi-Fi).',
          tr: 'Yayılı spektrum sinyali gerekenden çok daha geniş bir banda yayar: karıştırmaya ve girişime dayanıklı olur, yakalanması zorlaşır. FHSS her iki tarafın bildiği bir diziye göre frekanstan frekansa atlar (Bluetooth). DSSS her biti hızlı bir “chip” dizisiyle çarpar (802.11b Wi-Fi).',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'CDMA (accès multiple par répartition de code) donne à chaque utilisateur un code orthogonal aux autres : le produit scalaire de deux codes différents vaut 0. Tous émettent en même temps sur la même fréquence ; le récepteur retrouve un utilisateur en faisant le produit scalaire du signal reçu avec son code. On envoie +code pour un 1 et −code pour un 0.',
          en: 'CDMA (code division multiple access) gives each user a code orthogonal to the others: the dot product of two different codes is 0. Everyone transmits at the same time on the same frequency; the receiver recovers one user by taking the dot product of the received signal with that user’s code. Send +code for a 1 and −code for a 0.',
          tr: 'CDMA (kod bölmeli çoklu erişim) her kullanıcıya diğerlerine dik bir kod verir: iki farklı kodun skaler çarpımı 0’dır. Herkes aynı anda aynı frekansta gönderir; alıcı, alınan sinyali kullanıcının koduyla skaler çarparak o kullanıcıyı geri elde eder. 1 için +kod, 0 için −kod gönderilir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'A a le code (1, −1, −1, 1) et B le code (1, 1, −1, −1). A envoie un 1 et B envoie un 0 en même temps. Quel signal circule sur le canal ? Montre que chaque récepteur retrouve son bit.',
          en: 'A has the code (1, −1, −1, 1) and B the code (1, 1, −1, −1). A sends a 1 and B sends a 0 at the same time. What signal is on the channel? Show that each receiver recovers its bit.',
          tr: 'A’nın kodu (1, −1, −1, 1), B’ninki (1, 1, −1, −1). A bir 1, B aynı anda bir 0 gönderiyor. Kanalda hangi sinyal var? Her alıcının kendi bitini bulduğunu göster.',
        },
        solution: {
          fr: 'Les codes sont orthogonaux : 1 − 1 + 1 − 1 = 0. A envoie +codeA = (1, −1, −1, 1), B envoie −codeB = (−1, −1, 1, 1). Somme sur le canal : (0, −2, 0, 2). Récepteur A : (0, −2, 0, 2) · (1, −1, −1, 1) = 0 + 2 + 0 + 2 = 4, divisé par 4 : +1, donc le bit 1. Récepteur B : (0, −2, 0, 2) · (1, 1, −1, −1) = 0 − 2 + 0 − 2 = −4, soit −1, donc le bit 0.',
          en: 'The codes are orthogonal: 1 − 1 + 1 − 1 = 0. A sends +codeA = (1, −1, −1, 1), B sends −codeB = (−1, −1, 1, 1). Sum on the channel: (0, −2, 0, 2). Receiver A: (0, −2, 0, 2) · (1, −1, −1, 1) = 0 + 2 + 0 + 2 = 4, divided by 4: +1, so bit 1. Receiver B: (0, −2, 0, 2) · (1, 1, −1, −1) = 0 − 2 + 0 − 2 = −4, so −1, bit 0.',
          tr: 'Kodlar diktir: 1 − 1 + 1 − 1 = 0. A, +kodA = (1, −1, −1, 1) gönderir; B, −kodB = (−1, −1, 1, 1) gönderir. Kanaldaki toplam: (0, −2, 0, 2). A alıcısı: (0, −2, 0, 2) · (1, −1, −1, 1) = 0 + 2 + 0 + 2 = 4, 4’e bölününce +1, yani bit 1. B alıcısı: (0, −2, 0, 2) · (1, 1, −1, −1) = 0 − 2 + 0 − 2 = −4, yani −1, bit 0.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle propriété doivent avoir les codes CDMA de deux utilisateurs ?',
        en: 'Which property must two users’ CDMA codes have?',
        tr: 'İki kullanıcının CDMA kodları hangi özelliğe sahip olmalıdır?',
      },
      options: {
        fr: ['Être identiques', 'Être orthogonaux (produit scalaire nul)', 'Avoir des fréquences différentes'],
        en: ['Be identical', 'Be orthogonal (zero dot product)', 'Use different frequencies'],
        tr: ['Aynı olmak', 'Dik olmak (skaler çarpım sıfır)', 'Farklı frekanslar kullanmak'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Grâce à l’orthogonalité, le signal des autres utilisateurs s’annule dans le produit scalaire : chaque récepteur n’« entend » que son émetteur, sur la même fréquence.',
        en: 'Thanks to orthogonality, the other users’ signal cancels out in the dot product: each receiver only “hears” its own sender, on the same frequency.',
        tr: 'Diklik sayesinde diğer kullanıcıların sinyali skaler çarpımda sıfırlanır: her alıcı aynı frekansta yalnızca kendi göndericisini “duyar”.',
      },
    },
  },
  {
    id: 'dc-w12-switching',
    week: 12,
    title: {
      fr: 'Réseaux étendus : commutation de circuits et de paquets',
      en: 'Wide area networks: circuit and packet switching',
      tr: 'Geniş alan ağları: devre ve paket anahtarlama',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En commutation de circuits (téléphone classique), un chemin est réservé de bout en bout pendant toute la communication : débit garanti, mais ressources gaspillées pendant les silences. En commutation de paquets (Internet), les données sont découpées en paquets qui partagent les liens : chaque nœud les reçoit en entier puis les retransmet (store-and-forward).',
          en: 'In circuit switching (classic telephone), a path is reserved end to end for the whole call: guaranteed rate, but resources wasted during silences. In packet switching (the Internet), data is cut into packets sharing the links: each node receives a packet fully, then forwards it (store-and-forward).',
          tr: 'Devre anahtarlamada (klasik telefon) bütün görüşme boyunca uçtan uca bir yol ayrılır: hız garantilidir ama sessizliklerde kaynaklar boşa harcanır. Paket anahtarlamada (İnternet) veriler bağlantıları paylaşan paketlere bölünür: her düğüm paketi tamamen alır, sonra iletir (sakla ve ilet).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Datagramme       : chaque paquet est routé seul (ordre non garanti), ex. IP\nCircuit virtuel  : un chemin est choisi au début, tous les paquets le suivent\n\nDélai (sans propagation), n paquets, k liens, t = temps d’émission d’un paquet\nCommutation de paquets : (n + k − 1) × t\nCommutation de messages (un seul bloc) : k × n × t',
          en: 'Datagram         : each packet is routed on its own (order not guaranteed), e.g. IP\nVirtual circuit  : a path is chosen at the start, every packet follows it\n\nDelay (no propagation), n packets, k links, t = transmission time of a packet\nPacket switching : (n + k − 1) × t\nMessage switching (one single block) : k × n × t',
          tr: 'Datagram         : her paket tek başına yönlendirilir (sıra garanti değil), örn. IP\nSanal devre      : başta bir yol seçilir, tüm paketler onu izler\n\nGecikme (yayılım yok), n paket, k bağlantı, t = bir paketin iletim süresi\nPaket anahtarlama : (n + k − 1) × t\nMesaj anahtarlama (tek blok) : k × n × t',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un message de 3000 bits traverse 3 liens à 1 Mbit/s (on néglige la propagation). Calcule le délai : (1) en commutation de messages (un seul bloc) ; (2) en commutation de paquets avec 3 paquets de 1000 bits ; (3) en commutation de circuits avec 2 ms d’établissement.',
          en: 'A 3000-bit message crosses 3 links at 1 Mbit/s (ignore propagation). Compute the delay: (1) with message switching (one single block); (2) with packet switching using 3 packets of 1000 bits; (3) with circuit switching and a 2 ms setup.',
          tr: '3000 bitlik bir mesaj 1 Mbit/s hızında 3 bağlantıdan geçiyor (yayılım ihmal ediliyor). Gecikmeyi hesapla: (1) mesaj anahtarlamayla (tek blok); (2) 1000 bitlik 3 paketle paket anahtarlamayla; (3) 2 ms kurulum süreli devre anahtarlamayla.',
        },
        solution: {
          fr: '(1) Chaque lien met 3 ms pour le bloc entier : 3 × 3 = 9 ms. (2) Un paquet met t = 1 ms par lien ; avec le pipeline des paquets : (3 + 3 − 1) × 1 = 5 ms. (3) 2 ms d’établissement, puis les bits traversent sans arrêt : 2 + 3 = 5 ms. Découper en paquets réduit nettement le délai par rapport au message entier.',
          en: '(1) Each link takes 3 ms for the whole block: 3 × 3 = 9 ms. (2) A packet takes t = 1 ms per link; with packets pipelined: (3 + 3 − 1) × 1 = 5 ms. (3) 2 ms of setup, then the bits flow through without stopping: 2 + 3 = 5 ms. Splitting into packets clearly reduces the delay compared with the whole message.',
          tr: '(1) Her bağlantı bloğun tamamı için 3 ms harcar: 3 × 3 = 9 ms. (2) Bir paket bağlantı başına t = 1 ms harcar; paketler ardışık ilerlediği için: (3 + 3 − 1) × 1 = 5 ms. (3) 2 ms kurulum, sonra bitler durmadan geçer: 2 + 3 = 5 ms. Paketlere bölmek, mesajın tamamına göre gecikmeyi belirgin şekilde azaltır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est l’inconvénient principal de la commutation de circuits pour des données ?',
        en: 'What is the main drawback of circuit switching for data?',
        tr: 'Veri için devre anahtarlamanın temel dezavantajı nedir?',
      },
      options: {
        fr: ['Les paquets arrivent dans le désordre', 'Le circuit reste réservé même quand rien n’est envoyé', 'Il n’y a aucune garantie de débit'],
        en: ['Packets arrive out of order', 'The circuit stays reserved even when nothing is sent', 'There is no rate guarantee'],
        tr: ['Paketler sırasız gelir', 'Hiçbir şey gönderilmezken bile devre ayrılmış kalır', 'Hız garantisi yoktur'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Les données arrivent par rafales : un circuit réservé est souvent vide. La commutation de paquets partage les liens et les utilise beaucoup mieux.',
        en: 'Data comes in bursts: a reserved circuit is often idle. Packet switching shares the links and uses them much better.',
        tr: 'Veri patlamalar halinde gelir: ayrılmış bir devre çoğu zaman boştur. Paket anahtarlama bağlantıları paylaşır ve çok daha iyi kullanır.',
      },
    },
  },
  {
    id: 'dc-w13-routing',
    week: 13,
    title: { fr: 'Le routage', en: 'Routing', tr: 'Yönlendirme' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le routage choisit le chemin des paquets à travers le réseau, en général le moins coûteux (délai, nombre de sauts, débit). À vecteur de distance (Bellman-Ford, RIP) : chaque routeur partage sa table avec ses voisins. À état de liens (Dijkstra, OSPF) : chaque routeur connaît toute la carte du réseau et calcule les plus courts chemins.',
          en: 'Routing chooses the packets’ path through the network, usually the cheapest one (delay, hop count, bandwidth). Distance vector (Bellman-Ford, RIP): each router shares its table with its neighbors. Link state (Dijkstra, OSPF): each router knows the whole network map and computes the shortest paths.',
          tr: 'Yönlendirme paketlerin ağdaki yolunu seçer; genellikle en ucuz yolu (gecikme, atlama sayısı, bant genişliği). Uzaklık vektörü (Bellman-Ford, RIP): her yönlendirici tablosunu komşularıyla paylaşır. Bağlantı durumu (Dijkstra, OSPF): her yönlendirici ağın tüm haritasını bilir ve en kısa yolları hesaplar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Dijkstra depuis la source s\n1. dist(s) = 0, toutes les autres = ∞\n2. Choisir le nœud non visité de plus petite distance, le marquer\n3. Pour chaque voisin v : dist(v) = min(dist(v), dist(u) + coût(u, v))\n4. Recommencer jusqu’à avoir visité tous les nœuds',
          en: 'Dijkstra from the source s\n1. dist(s) = 0, every other = ∞\n2. Pick the unvisited node with the smallest distance, mark it\n3. For each neighbor v: dist(v) = min(dist(v), dist(u) + cost(u, v))\n4. Repeat until every node is visited',
          tr: 's kaynağından Dijkstra\n1. dist(s) = 0, diğer tümü = ∞\n2. En küçük uzaklıklı ziyaret edilmemiş düğümü seç, işaretle\n3. Her v komşusu için: dist(v) = min(dist(v), dist(u) + maliyet(u, v))\n4. Tüm düğümler ziyaret edilene kadar tekrarla',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Liens et coûts : A-B 4, A-C 2, C-B 1, B-D 5, C-D 8, C-E 10, D-E 2. Avec Dijkstra depuis A, trouve la distance vers chaque nœud et le chemin vers E.',
          en: 'Links and costs: A-B 4, A-C 2, C-B 1, B-D 5, C-D 8, C-E 10, D-E 2. With Dijkstra from A, find the distance to every node and the path to E.',
          tr: 'Bağlantılar ve maliyetler: A-B 4, A-C 2, C-B 1, B-D 5, C-D 8, C-E 10, D-E 2. A’dan Dijkstra ile her düğüme uzaklığı ve E’ye giden yolu bul.',
        },
        solution: {
          fr: 'Départ A = 0 ; B = 4, C = 2. On visite C (2) : B = min(4, 2 + 1) = 3, D = 10, E = 12. On visite B (3) : D = min(10, 3 + 5) = 8. On visite D (8) : E = min(12, 8 + 2) = 10. Résultat : A 0, C 2, B 3, D 8, E 10. Chemin vers E : A → C → B → D → E, coût 2 + 1 + 5 + 2 = 10.',
          en: 'Start A = 0; B = 4, C = 2. Visit C (2): B = min(4, 2 + 1) = 3, D = 10, E = 12. Visit B (3): D = min(10, 3 + 5) = 8. Visit D (8): E = min(12, 8 + 2) = 10. Result: A 0, C 2, B 3, D 8, E 10. Path to E: A → C → B → D → E, cost 2 + 1 + 5 + 2 = 10.',
          tr: 'Başlangıç A = 0; B = 4, C = 2. C ziyaret edilir (2): B = min(4, 2 + 1) = 3, D = 10, E = 12. B ziyaret edilir (3): D = min(10, 3 + 5) = 8. D ziyaret edilir (8): E = min(12, 8 + 2) = 10. Sonuç: A 0, C 2, B 3, D 8, E 10. E’ye yol: A → C → B → D → E, maliyet 2 + 1 + 5 + 2 = 10.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel protocole utilise l’algorithme de Dijkstra (état de liens) ?',
        en: 'Which protocol uses Dijkstra’s algorithm (link state)?',
        tr: 'Hangi protokol Dijkstra algoritmasını (bağlantı durumu) kullanır?',
      },
      options: { fr: ['RIP', 'OSPF', 'HTTP'], en: ['RIP', 'OSPF', 'HTTP'], tr: ['RIP', 'OSPF', 'HTTP'] },
      answerIndex: 1,
      explanation: {
        fr: 'OSPF est un protocole à état de liens : chaque routeur construit la carte complète et lance Dijkstra. RIP est à vecteur de distance (Bellman-Ford), et HTTP n’est pas un protocole de routage.',
        en: 'OSPF is a link-state protocol: each router builds the full map and runs Dijkstra. RIP is distance-vector (Bellman-Ford), and HTTP is not a routing protocol.',
        tr: 'OSPF bir bağlantı durumu protokolüdür: her yönlendirici tam haritayı kurar ve Dijkstra çalıştırır. RIP uzaklık vektörlüdür (Bellman-Ford), HTTP ise bir yönlendirme protokolü değildir.',
      },
    },
  },
  {
    id: 'dc-w14-atm',
    week: 14,
    title: { fr: 'ATM et révision du final', en: 'ATM and final review', tr: 'ATM ve final tekrarı' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'ATM (Asynchronous Transfer Mode) est une commutation de cellules de taille fixe, 53 octets : 5 octets d’en-tête et 48 octets de données. La taille fixe permet une commutation matérielle très rapide. Les connexions passent par des chemins virtuels (VPI) et des canaux virtuels (VCI), avec des classes de qualité de service : CBR, VBR, ABR, UBR.',
          en: 'ATM (Asynchronous Transfer Mode) switches fixed-size cells of 53 bytes: a 5-byte header and 48 bytes of data. The fixed size allows very fast hardware switching. Connections use virtual paths (VPI) and virtual channels (VCI), with quality of service classes: CBR, VBR, ABR, UBR.',
          tr: 'ATM (Eşzamansız Aktarım Modu) 53 baytlık sabit boyutlu hücreleri anahtarlar: 5 baytlık başlık ve 48 bayt veri. Sabit boyut çok hızlı donanımsal anahtarlamaya olanak verir. Bağlantılar sanal yollar (VPI) ve sanal kanallar (VCI) üzerinden geçer; hizmet kalitesi sınıfları vardır: CBR, VBR, ABR, UBR.',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Contrôle de flux : stop-and-wait, fenêtre glissante, U et a\n✔ ARQ : stop-and-wait, Go-Back-N, Selective Reject\n✔ HDLC : trame, fanion 01111110, bourrage de bits\n✔ FDM, TDM synchrone et statistique, WDM, T1 / E1\n✔ FHSS, DSSS, CDMA (codes orthogonaux)\n✔ Commutation de circuits / de paquets, datagramme, circuit virtuel\n✔ Routage : Dijkstra, Bellman-Ford, RIP, OSPF\n✔ ATM : cellules de 53 octets, VPI / VCI',
          en: '✔ Flow control: stop-and-wait, sliding window, U and a\n✔ ARQ: stop-and-wait, Go-Back-N, Selective Reject\n✔ HDLC: frame, 01111110 flag, bit stuffing\n✔ FDM, synchronous and statistical TDM, WDM, T1 / E1\n✔ FHSS, DSSS, CDMA (orthogonal codes)\n✔ Circuit / packet switching, datagram, virtual circuit\n✔ Routing: Dijkstra, Bellman-Ford, RIP, OSPF\n✔ ATM: 53-byte cells, VPI / VCI',
          tr: '✔ Akış denetimi: dur-bekle, kayan pencere, U ve a\n✔ ARQ: dur-bekle, Go-Back-N, Selective Reject\n✔ HDLC: çerçeve, 01111110 bayrağı, bit doldurma\n✔ FDM, eşzamanlı ve istatistiksel TDM, WDM, T1 / E1\n✔ FHSS, DSSS, CDMA (dik kodlar)\n✔ Devre / paket anahtarlama, datagram, sanal devre\n✔ Yönlendirme: Dijkstra, Bellman-Ford, RIP, OSPF\n✔ ATM: 53 baytlık hücreler, VPI / VCI',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Quelle part d’une cellule ATM est de l’en-tête ? (2) Un paquet IP de 1500 octets passe en ATM avec AAL5, qui ajoute 8 octets de fin : combien de cellules faut-il, et quelle est l’efficacité ?',
          en: '(1) What share of an ATM cell is header? (2) A 1500-byte IP packet goes over ATM with AAL5, which adds an 8-byte trailer: how many cells are needed, and what is the efficiency?',
          tr: '(1) Bir ATM hücresinin ne kadarı başlıktır? (2) 1500 baytlık bir IP paketi, 8 baytlık bir son ek ekleyen AAL5 ile ATM üzerinden geçiyor: kaç hücre gerekir ve verim nedir?',
        },
        solution: {
          fr: '(1) 5 / 53 ≈ 9,4 % d’en-tête. (2) 1500 + 8 = 1508 octets ; 1508 / 48 ≈ 31,4, on arrondit au-dessus : 32 cellules (la dernière est complétée). Sur le lien : 32 × 53 = 1696 octets pour 1500 octets utiles, soit une efficacité d’environ 88,4 %. C’est le « cell tax » souvent reproché à ATM.',
          en: '(1) 5 / 53 ≈ 9.4% header. (2) 1500 + 8 = 1508 bytes; 1508 / 48 ≈ 31.4, rounded up: 32 cells (the last one is padded). On the link: 32 × 53 = 1696 bytes for 1500 useful bytes, an efficiency of about 88.4%. That is the “cell tax” often held against ATM.',
          tr: '(1) 5 / 53 ≈ %9,4 başlık. (2) 1500 + 8 = 1508 bayt; 1508 / 48 ≈ 31,4, yukarı yuvarlanır: 32 hücre (sonuncusu doldurulur). Hatta: 1500 yararlı bayt için 32 × 53 = 1696 bayt, yani yaklaşık %88,4 verim. Bu, ATM’ye sıkça yöneltilen “hücre vergisi”dir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est la taille d’une cellule ATM ?',
        en: 'What is the size of an ATM cell?',
        tr: 'Bir ATM hücresinin boyutu nedir?',
      },
      options: {
        fr: ['48 octets', '53 octets', '1500 octets'],
        en: ['48 bytes', '53 bytes', '1500 bytes'],
        tr: ['48 bayt', '53 bayt', '1500 bayt'],
      },
      answerIndex: 1,
      explanation: {
        fr: '53 octets au total : 5 d’en-tête et 48 de données. 48 est seulement la charge utile, et 1500 est la taille habituelle d’une trame Ethernet.',
        en: '53 bytes in total: 5 of header and 48 of data. 48 is only the payload, and 1500 is the usual Ethernet frame size.',
        tr: 'Toplam 53 bayt: 5 başlık ve 48 veri. 48 yalnızca yüktür, 1500 ise olağan Ethernet çerçeve boyutudur.',
      },
    },
  },
];
