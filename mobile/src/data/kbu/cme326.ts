/**
 * CME326 Computer Networks, 14 weeks in the top-down order of Kurose and Ross: layers, delays, HTTP,
 * DNS and DHCP, UDP and TCP before the midterm; IP addressing, subnetting, routing, NAT and IPv6,
 * the link layer, switches and Wi-Fi, and security before the final. Every numeric answer (addresses,
 * subnets, CRC, delays) was checked with Python. Weeks 4, 8 and 9 keep the ids of the former course.
 */

import type { LessonSource } from '@/data/lessons';

export const cme326Lessons: LessonSource[] = [
  {
    id: 'net-w01-layers',
    week: 1,
    title: {
      fr: 'Introduction : couches et encapsulation',
      en: 'Introduction: layers and encapsulation',
      tr: 'Giriş: katmanlar ve sarmalama',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un réseau est organisé en couches : chacune rend un service à la couche du dessus et utilise celle du dessous. Le modèle TCP/IP en a cinq : application, transport, réseau, liaison et physique. Le modèle OSI en a sept : il ajoute présentation et session. À l’envoi, chaque couche ajoute son en-tête aux données reçues de la couche supérieure : c’est l’encapsulation. Le destinataire retire les en-têtes dans l’ordre inverse.',
          en: 'A network is organized in layers: each one serves the layer above and uses the one below. The TCP/IP model has five: application, transport, network, link and physical. The OSI model has seven: it adds presentation and session. When sending, each layer adds its header to the data from the layer above: that is encapsulation. The receiver removes the headers in reverse order.',
          tr: 'Ağ katmanlar halinde düzenlenir: her katman üstündekine hizmet verir ve altındakini kullanır. TCP/IP modelinde beş katman vardır: uygulama, taşıma, ağ, bağlantı ve fiziksel. OSI modelinde yedi katman vardır: sunum ve oturum katmanlarını ekler. Gönderirken her katman üst katmandan gelen veriye kendi başlığını ekler: buna sarmalama denir. Alıcı başlıkları ters sırayla çıkarır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Couche         Unité        Adresse / exemple\nApplication    message      HTTP, DNS, SMTP\nTransport      segment      port (80, 443) — TCP, UDP\nRéseau         datagramme   adresse IP — IP, ICMP, routeurs\nLiaison        trame        adresse MAC — Ethernet, Wi-Fi, commutateurs\nPhysique       bits         câble, fibre, ondes radio\n\n[ Ethernet | IP | TCP | données HTTP | FCS ]\n  14 o      20 o  20 o                4 o',
          en: 'Layer          Unit         Address / example\nApplication    message      HTTP, DNS, SMTP\nTransport      segment      port (80, 443) — TCP, UDP\nNetwork        datagram     IP address — IP, ICMP, routers\nLink           frame        MAC address — Ethernet, Wi-Fi, switches\nPhysical       bits         cable, fiber, radio waves\n\n[ Ethernet | IP | TCP | HTTP data | FCS ]\n  14 B      20 B 20 B             4 B',
          tr: 'Katman         Birim        Adres / örnek\nUygulama       mesaj        HTTP, DNS, SMTP\nTaşıma         segment      port (80, 443) — TCP, UDP\nAğ             datagram     IP adresi — IP, ICMP, yönlendiriciler\nBağlantı       çerçeve      MAC adresi — Ethernet, Wi-Fi, anahtarlar\nFiziksel       bitler       kablo, fiber, radyo dalgaları\n\n[ Ethernet | IP | TCP | HTTP verisi | FCS ]\n  14 B      20 B 20 B               4 B',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une application envoie 1000 octets de données par TCP sur Ethernet. (1) Quelle est la taille de la trame (en-têtes TCP 20, IP 20, Ethernet 14 + FCS 4) ? (2) Quel pourcentage de la trame sert aux en-têtes ? (3) À quelle couche travaillent un routeur et un commutateur ?',
          en: 'An application sends 1000 bytes of data over TCP on Ethernet. (1) What is the frame size (headers TCP 20, IP 20, Ethernet 14 + FCS 4)? (2) What share of the frame is headers? (3) At which layer do a router and a switch work?',
          tr: 'Bir uygulama Ethernet üzerinde TCP ile 1000 bayt veri gönderiyor. (1) Çerçeve boyutu nedir (başlıklar TCP 20, IP 20, Ethernet 14 + FCS 4)? (2) Çerçevenin yüzde kaçı başlıktır? (3) Yönlendirici ve anahtar hangi katmanda çalışır?',
        },
        solution: {
          fr: '(1) 1000 + 20 + 20 + 14 + 4 = 1058 octets. (2) 58 / 1058 ≈ 5,5 % d’en-têtes. Pour de très petits messages, la part des en-têtes devient énorme. (3) Le routeur travaille à la couche réseau : il lit l’adresse IP. Le commutateur travaille à la couche liaison : il lit l’adresse MAC.',
          en: '(1) 1000 + 20 + 20 + 14 + 4 = 1058 bytes. (2) 58 / 1058 ≈ 5.5% headers. For very small messages, the header share becomes huge. (3) The router works at the network layer: it reads the IP address. The switch works at the link layer: it reads the MAC address.',
          tr: '(1) 1000 + 20 + 20 + 14 + 4 = 1058 bayt. (2) 58 / 1058 ≈ %5,5 başlık. Çok küçük mesajlarda başlıkların payı çok büyük olur. (3) Yönlendirici ağ katmanında çalışır: IP adresini okur. Anahtar bağlantı katmanında çalışır: MAC adresini okur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'À quelle couche se trouvent les numéros de port ?',
        en: 'Which layer do port numbers belong to?',
        tr: 'Port numaraları hangi katmandadır?',
      },
      options: { fr: ['Réseau', 'Transport', 'Liaison'], en: ['Network', 'Transport', 'Link'], tr: ['Ağ', 'Taşıma', 'Bağlantı'] },
      answerIndex: 1,
      explanation: {
        fr: 'L’adresse IP désigne la machine (couche réseau) ; le port désigne l’application sur cette machine : c’est le rôle de TCP et UDP (couche transport).',
        en: 'The IP address names the machine (network layer); the port names the application on that machine: that is the job of TCP and UDP (transport layer).',
        tr: 'IP adresi makineyi (ağ katmanı), port ise o makinedeki uygulamayı gösterir: bu TCP ve UDP’nin (taşıma katmanı) görevidir.',
      },
    },
  },
  {
    id: 'net-w02-delays',
    week: 2,
    title: { fr: 'Délais et débit', en: 'Delays and throughput', tr: 'Gecikmeler ve iş hacmi' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le délai d’un paquet sur un lien a quatre composantes. Le délai de traitement, dans le routeur. Le délai d’attente, dans la file. Le délai de transmission, le temps de « pousser » tous les bits sur le lien : L/R. Le délai de propagation, le temps pour qu’un bit traverse le lien : d/s. Ne confonds pas les deux derniers : la transmission dépend du débit du lien, la propagation de la distance.',
          en: 'A packet’s delay on a link has four parts. Processing delay, in the router. Queuing delay, in the buffer. Transmission delay, the time to “push” every bit onto the link: L/R. Propagation delay, the time for a bit to cross the link: d/s. Don’t mix up the last two: transmission depends on the link rate, propagation on the distance.',
          tr: 'Bir paketin bir bağlantıdaki gecikmesinin dört bileşeni vardır. İşleme gecikmesi, yönlendiricide. Kuyruk gecikmesi, tamponda. İletim gecikmesi, tüm bitleri bağlantıya “itme” süresi: L/R. Yayılım gecikmesi, bir bitin bağlantıyı geçme süresi: d/s. Son ikisini karıştırma: iletim bağlantı hızına, yayılım mesafeye bağlıdır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'd_trans = L / R     L = taille du paquet (bits), R = débit (bit/s)\nd_prop  = d / s     d = longueur du lien (m), s ≈ 2 × 10⁸ m/s\nd_noeud = d_proc + d_file + d_trans + d_prop\n\nIntensité du trafic = L·a / R   (a = paquets par seconde)\n→ proche de 1 : la file et l’attente explosent\nProduit débit × délai = nombre de bits « en vol » sur le lien\nDébit de bout en bout = débit du lien le plus lent (goulot)',
          en: 'd_trans = L / R     L = packet size (bits), R = rate (bit/s)\nd_prop  = d / s     d = link length (m), s ≈ 2 × 10⁸ m/s\nd_nodal = d_proc + d_queue + d_trans + d_prop\n\nTraffic intensity = L·a / R   (a = packets per second)\n→ close to 1: the queue and the wait blow up\nBandwidth-delay product = number of bits “in flight” on the link\nEnd-to-end throughput = rate of the slowest link (bottleneck)',
          tr: 'd_iletim = L / R     L = paket boyutu (bit), R = hız (bit/s)\nd_yayilim = d / s     d = bağlantı uzunluğu (m), s ≈ 2 × 10⁸ m/s\nd_dugum = d_isleme + d_kuyruk + d_iletim + d_yayilim\n\nTrafik yoğunluğu = L·a / R   (a = saniyedeki paket sayısı)\n→ 1’e yakınsa kuyruk ve bekleme patlar\nBant genişliği × gecikme = bağlantıda “yoldaki” bit sayısı\nUçtan uca iş hacmi = en yavaş bağlantının hızı (darboğaz)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un paquet de 1500 octets traverse un lien de 10 Mbit/s long de 2000 km (s = 2 × 10⁸ m/s). (1) Calcule les délais de transmission et de propagation. (2) Lequel domine ? Que se passerait-il avec un lien de 1 Gbit/s ? (3) Un fichier passe par des liens de 100, 20 et 50 Mbit/s : quel est le débit de bout en bout ?',
          en: 'A 1500-byte packet crosses a 10 Mbit/s link 2000 km long (s = 2 × 10⁸ m/s). (1) Compute the transmission and propagation delays. (2) Which dominates? What would happen with a 1 Gbit/s link? (3) A file goes through 100, 20 and 50 Mbit/s links: what is the end-to-end throughput?',
          tr: '1500 baytlık bir paket 2000 km uzunluğunda 10 Mbit/s’lik bir bağlantıdan geçiyor (s = 2 × 10⁸ m/s). (1) İletim ve yayılım gecikmelerini hesapla. (2) Hangisi baskındır? 1 Gbit/s’lik bağlantıyla ne olurdu? (3) Bir dosya 100, 20 ve 50 Mbit/s’lik bağlantılardan geçiyor: uçtan uca iş hacmi nedir?',
        },
        solution: {
          fr: '(1) L = 1500 × 8 = 12 000 bits ; d_trans = 12 000 / 10⁷ = 1,2 ms. d_prop = 2 × 10⁶ / 2 × 10⁸ = 10 ms. (2) La propagation domine (10 ms contre 1,2 ms). À 1 Gbit/s, la transmission tombe à 12 µs mais la propagation reste 10 ms : un lien plus rapide ne rapproche pas les villes. (3) 20 Mbit/s, le lien le plus lent.',
          en: '(1) L = 1500 × 8 = 12,000 bits; d_trans = 12,000 / 10⁷ = 1.2 ms. d_prop = 2 × 10⁶ / 2 × 10⁸ = 10 ms. (2) Propagation dominates (10 ms versus 1.2 ms). At 1 Gbit/s, transmission drops to 12 µs but propagation stays 10 ms: a faster link doesn’t bring cities closer. (3) 20 Mbit/s, the slowest link.',
          tr: '(1) L = 1500 × 8 = 12.000 bit; d_iletim = 12.000 / 10⁷ = 1,2 ms. d_yayilim = 2 × 10⁶ / 2 × 10⁸ = 10 ms. (2) Yayılım baskındır (1,2 ms’ye karşı 10 ms). 1 Gbit/s’de iletim 12 µs’ye düşer ama yayılım 10 ms kalır: daha hızlı bağlantı şehirleri yaklaştırmaz. (3) En yavaş bağlantı olan 20 Mbit/s.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'De quoi dépend le délai de propagation ?',
        en: 'What does propagation delay depend on?',
        tr: 'Yayılım gecikmesi neye bağlıdır?',
      },
      options: {
        fr: ['De la taille du paquet', 'Du débit du lien', 'De la longueur du lien'],
        en: ['The packet size', 'The link rate', 'The link length'],
        tr: ['Paket boyutuna', 'Bağlantı hızına', 'Bağlantı uzunluğuna'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'd_prop = d / s : seulement la distance et la vitesse du signal dans le support. La taille du paquet et le débit déterminent le délai de transmission.',
        en: 'd_prop = d / s: only the distance and the signal speed in the medium. Packet size and rate set the transmission delay.',
        tr: 'd_yayilim = d / s: yalnızca mesafe ve sinyalin ortamdaki hızı. Paket boyutu ve hız ise iletim gecikmesini belirler.',
      },
    },
  },
  {
    id: 'net-w03-http',
    week: 3,
    title: { fr: 'Couche application : le Web et HTTP', en: 'Application layer: the Web and HTTP', tr: 'Uygulama katmanı: Web ve HTTP' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une page web est un fichier HTML de base qui référence d’autres objets (images, CSS, scripts), chacun avec son URL. HTTP fonctionne en client-serveur sur TCP (port 80, ou 443 avec HTTPS). Chaque requête coûte au moins un aller-retour (RTT). En HTTP non persistant, on ouvre une nouvelle connexion TCP pour chaque objet ; en HTTP persistant (HTTP/1.1), une seule connexion sert pour toute la page. HTTP est sans état : les cookies permettent au serveur de reconnaître le client.',
          en: 'A web page is a base HTML file referencing other objects (images, CSS, scripts), each with its URL. HTTP runs client-server over TCP (port 80, or 443 with HTTPS). Each request costs at least one round trip (RTT). With non-persistent HTTP, a new TCP connection is opened per object; with persistent HTTP (HTTP/1.1), one connection serves the whole page. HTTP is stateless: cookies let the server recognize the client.',
          tr: 'Bir web sayfası, her biri kendi URL’sine sahip başka nesnelere (resimler, CSS, betikler) başvuran temel bir HTML dosyasıdır. HTTP, TCP üzerinde istemci-sunucu olarak çalışır (port 80, HTTPS ile 443). Her istek en az bir gidiş-dönüş (RTT) tutar. Kalıcı olmayan HTTP’de her nesne için yeni bir TCP bağlantısı açılır; kalıcı HTTP’de (HTTP/1.1) tüm sayfa için tek bağlantı kullanılır. HTTP durumsuzdur: çerezler sunucunun istemciyi tanımasını sağlar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'GET /cours/reseaux.html HTTP/1.1\nHost: www.kbu.edu.tr\nUser-Agent: Mozilla/5.0\nAccept-Language: tr, fr\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=UTF-8\nContent-Length: 5120\nSet-Cookie: sid=8f3a2c\n\n<html>…\n\nCache web (proxy) : garde des copies proches des clients ;\nrequête conditionnelle If-Modified-Since → 304 Not Modified si inchangé',
          en: 'GET /courses/networks.html HTTP/1.1\nHost: www.kbu.edu.tr\nUser-Agent: Mozilla/5.0\nAccept-Language: tr, en\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=UTF-8\nContent-Length: 5120\nSet-Cookie: sid=8f3a2c\n\n<html>…\n\nWeb cache (proxy): keeps copies close to clients;\nconditional request If-Modified-Since → 304 Not Modified if unchanged',
          tr: 'GET /dersler/aglar.html HTTP/1.1\nHost: www.kbu.edu.tr\nUser-Agent: Mozilla/5.0\nAccept-Language: tr, en\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=UTF-8\nContent-Length: 5120\nSet-Cookie: sid=8f3a2c\n\n<html>…\n\nWeb önbelleği (vekil): kopyaları istemcilere yakın tutar;\nkoşullu istek If-Modified-Since → değişmemişse 304 Not Modified',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une page contient un fichier HTML et 10 images. RTT = 50 ms ; on néglige les temps de transmission. Ouvrir une connexion TCP coûte 1 RTT, et chaque requête-réponse 1 RTT. Combien de temps faut-il pour (1) HTTP non persistant sans parallélisme, (2) HTTP persistant sans pipeline, (3) HTTP persistant avec pipeline ?',
          en: 'A page holds one HTML file and 10 images. RTT = 50 ms; transmission times are ignored. Opening a TCP connection costs 1 RTT, and each request-response 1 RTT. How long does it take with (1) non-persistent HTTP without parallelism, (2) persistent HTTP without pipelining, (3) persistent HTTP with pipelining?',
          tr: 'Bir sayfada bir HTML dosyası ve 10 resim var. RTT = 50 ms; iletim süreleri yok sayılıyor. TCP bağlantısı açmak 1 RTT, her istek-yanıt 1 RTT tutar. (1) Paralelliksiz kalıcı olmayan HTTP, (2) ardışık işlemesiz kalıcı HTTP, (3) ardışık işlemeli kalıcı HTTP ile ne kadar sürer?',
        },
        solution: {
          fr: '(1) 11 objets × 2 RTT (connexion + requête) = 22 RTT = 1,1 s. (2) 1 RTT pour la connexion, 1 pour le HTML, puis 10 requêtes l’une après l’autre : 12 RTT = 600 ms. (3) Connexion et HTML : 2 RTT, puis les 10 requêtes envoyées d’un coup : 1 RTT de plus, soit 3 RTT = 150 ms.',
          en: '(1) 11 objects × 2 RTT (connection + request) = 22 RTT = 1.1 s. (2) 1 RTT for the connection, 1 for the HTML, then 10 requests one after the other: 12 RTT = 600 ms. (3) Connection and HTML: 2 RTT, then the 10 requests sent at once: 1 more RTT, so 3 RTT = 150 ms.',
          tr: '(1) 11 nesne × 2 RTT (bağlantı + istek) = 22 RTT = 1,1 s. (2) Bağlantı için 1 RTT, HTML için 1, sonra art arda 10 istek: 12 RTT = 600 ms. (3) Bağlantı ve HTML: 2 RTT, sonra 10 istek bir kerede gönderilir: 1 RTT daha, yani 3 RTT = 150 ms.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que signifie la réponse HTTP 304 Not Modified ?',
        en: 'What does the HTTP response 304 Not Modified mean?',
        tr: 'HTTP 304 Not Modified yanıtı ne anlama gelir?',
      },
      options: {
        fr: ['La page n’existe pas', 'La copie en cache est encore à jour', 'Le serveur est en panne'],
        en: ['The page doesn’t exist', 'The cached copy is still up to date', 'The server is down'],
        tr: ['Sayfa yok', 'Önbellekteki kopya hâlâ güncel', 'Sunucu çalışmıyor'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le cache a demandé « modifié depuis telle date ? » ; 304 répond non, sans renvoyer l’objet, ce qui économise de la bande passante. « N’existe pas » serait 404, et une panne du serveur 500 ou 503.',
        en: 'The cache asked “modified since this date?”; 304 answers no, without resending the object, which saves bandwidth. “Doesn’t exist” would be 404, and a server failure 500 or 503.',
        tr: 'Önbellek “şu tarihten beri değişti mi?” diye sordu; 304 nesneyi yeniden göndermeden “hayır” der ve bant genişliğinden tasarruf sağlar. “Yok” 404, sunucu arızası ise 500 veya 503 olurdu.',
      },
    },
  },
  {
    id: 'net-dns-dhcp',
    week: 4,
    title: { fr: 'DNS et DHCP', en: 'DNS and DHCP', tr: 'DNS ve DHCP' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le DNS traduit un nom (www.kbu.edu.tr) en adresse IP. C’est une base distribuée et hiérarchique : serveurs racine, serveurs de domaine de premier niveau (.tr, .com), serveurs faisant autorité pour chaque domaine, et le serveur DNS local du fournisseur, qui garde les réponses en cache (TTL). Le DHCP donne automatiquement à une machine qui arrive sur le réseau son adresse IP, son masque, sa passerelle et son serveur DNS, en quatre messages.',
          en: 'DNS translates a name (www.kbu.edu.tr) into an IP address. It is a distributed, hierarchical database: root servers, top-level domain servers (.tr, .com), authoritative servers for each domain, and the provider’s local DNS server, which caches answers (TTL). DHCP automatically gives a machine joining the network its IP address, mask, gateway and DNS server, in four messages.',
          tr: 'DNS bir adı (www.kbu.edu.tr) IP adresine çevirir. Dağıtık ve hiyerarşik bir veritabanıdır: kök sunucular, üst düzey alan sunucuları (.tr, .com), her alan için yetkili sunucular ve yanıtları önbellekte tutan (TTL) sağlayıcının yerel DNS sunucusu. DHCP ağa katılan bir makineye IP adresini, maskesini, ağ geçidini ve DNS sunucusunu dört mesajla otomatik olarak verir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Résolution itérative de www.kbu.edu.tr (cache vide)\nPC → DNS local : « www.kbu.edu.tr ? »\nDNS local → racine         : « voir les serveurs de .tr »\nDNS local → serveur .tr     : « voir les serveurs de edu.tr »\nDNS local → serveur edu.tr  : « voir les serveurs de kbu.edu.tr »\nDNS local → kbu.edu.tr      : « 193.140.x.x »  (réponse qui fait autorité)\nDNS local → PC              : adresse + mise en cache (TTL)\n\nEnregistrements : A (IPv4), AAAA (IPv6), CNAME (alias), MX (courrier), NS\n\nDHCP (UDP 67/68) : DISCOVER → OFFER → REQUEST → ACK   (« DORA »)',
          en: 'Iterative resolution of www.kbu.edu.tr (empty cache)\nPC → local DNS: “www.kbu.edu.tr?”\nlocal DNS → root          : “ask the .tr servers”\nlocal DNS → .tr server     : “ask the edu.tr servers”\nlocal DNS → edu.tr server  : “ask the kbu.edu.tr servers”\nlocal DNS → kbu.edu.tr     : “193.140.x.x”  (authoritative answer)\nlocal DNS → PC             : address + caching (TTL)\n\nRecords: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), NS\n\nDHCP (UDP 67/68): DISCOVER → OFFER → REQUEST → ACK   (“DORA”)',
          tr: 'www.kbu.edu.tr için yinelemeli çözümleme (önbellek boş)\nPC → yerel DNS: “www.kbu.edu.tr?”\nyerel DNS → kök            : “.tr sunucularına sor”\nyerel DNS → .tr sunucusu    : “edu.tr sunucularına sor”\nyerel DNS → edu.tr sunucusu : “kbu.edu.tr sunucularına sor”\nyerel DNS → kbu.edu.tr      : “193.140.x.x”  (yetkili yanıt)\nyerel DNS → PC              : adres + önbelleğe alma (TTL)\n\nKayıtlar: A (IPv4), AAAA (IPv6), CNAME (takma ad), MX (posta), NS\n\nDHCP (UDP 67/68): DISCOVER → OFFER → REQUEST → ACK   (“DORA”)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Avec un cache vide, combien de serveurs le DNS local interroge-t-il pour www.kbu.edu.tr ? Et si une seconde plus tard un autre PC demande obs.kbu.edu.tr ? (2) Pourquoi le premier message DHCP est-il envoyé en diffusion, avec l’adresse source 0.0.0.0 ?',
          en: '(1) With an empty cache, how many servers does the local DNS query for www.kbu.edu.tr? And if, a second later, another PC asks for obs.kbu.edu.tr? (2) Why is the first DHCP message broadcast, with source address 0.0.0.0?',
          tr: '(1) Önbellek boşken yerel DNS, www.kbu.edu.tr için kaç sunucuyu sorgular? Bir saniye sonra başka bir PC obs.kbu.edu.tr isterse? (2) İlk DHCP mesajı neden 0.0.0.0 kaynak adresiyle yayın olarak gönderilir?',
        },
        solution: {
          fr: '(1) Quatre : racine, .tr, edu.tr, puis le serveur de kbu.edu.tr. Pour obs.kbu.edu.tr, l’adresse du serveur de kbu.edu.tr est déjà en cache : une seule requête suffit. C’est pourquoi les serveurs racine sont peu sollicités. (2) La machine n’a pas encore d’adresse IP (d’où 0.0.0.0) et ne connaît pas l’adresse du serveur DHCP : elle diffuse sa demande à tout le réseau local (255.255.255.255).',
          en: '(1) Four: root, .tr, edu.tr, then the kbu.edu.tr server. For obs.kbu.edu.tr, the kbu.edu.tr server’s address is already cached: a single query is enough. That is why root servers are rarely hit. (2) The machine has no IP address yet (hence 0.0.0.0) and doesn’t know the DHCP server’s address: it broadcasts its request to the whole local network (255.255.255.255).',
          tr: '(1) Dört: kök, .tr, edu.tr, sonra kbu.edu.tr sunucusu. obs.kbu.edu.tr için kbu.edu.tr sunucusunun adresi zaten önbellektedir: tek bir sorgu yeter. Kök sunuculara bu yüzden az başvurulur. (2) Makinenin henüz IP adresi yoktur (bu yüzden 0.0.0.0) ve DHCP sunucusunun adresini bilmez: isteğini tüm yerel ağa yayınlar (255.255.255.255).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel enregistrement DNS indique le serveur de courrier d’un domaine ?',
        en: 'Which DNS record gives a domain’s mail server?',
        tr: 'Hangi DNS kaydı bir alanın posta sunucusunu verir?',
      },
      options: { fr: ['A', 'MX', 'CNAME'], en: ['A', 'MX', 'CNAME'], tr: ['A', 'MX', 'CNAME'] },
      answerIndex: 1,
      explanation: {
        fr: 'MX (Mail eXchanger) désigne le serveur de messagerie. A donne une adresse IPv4, CNAME un autre nom (alias).',
        en: 'MX (Mail eXchanger) names the mail server. A gives an IPv4 address, CNAME another name (alias).',
        tr: 'MX (Mail eXchanger) posta sunucusunu belirtir. A bir IPv4 adresi, CNAME başka bir ad (takma ad) verir.',
      },
    },
  },
  {
    id: 'net-w05-tcp-udp',
    week: 5,
    title: {
      fr: 'Couche transport : UDP et connexion TCP',
      en: 'Transport layer: UDP and the TCP connection',
      tr: 'Taşıma katmanı: UDP ve TCP bağlantısı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La couche transport relie des applications grâce aux ports. UDP est minimal : en-tête de 8 octets, pas de connexion, pas de garantie de livraison ni d’ordre. Il est utilisé pour le DNS, la vidéo en direct et les jeux. TCP est fiable et ordonné, avec contrôle de flux et de congestion : en-tête d’au moins 20 octets, connexion ouverte par une poignée de main en trois temps. Les numéros de séquence comptent les octets ; l’acquittement (ACK) annonce le prochain octet attendu.',
          en: 'The transport layer links applications through ports. UDP is minimal: an 8-byte header, no connection, no delivery or ordering guarantee. It is used for DNS, live video and games. TCP is reliable and ordered, with flow and congestion control: a header of at least 20 bytes, and a connection opened by a three-way handshake. Sequence numbers count bytes; the acknowledgment (ACK) announces the next byte expected.',
          tr: 'Taşıma katmanı uygulamaları portlar aracılığıyla bağlar. UDP en yalın olanıdır: 8 baytlık başlık, bağlantı yok, teslim veya sıra garantisi yok. DNS, canlı video ve oyunlarda kullanılır. TCP güvenilir ve sıralıdır, akış ve tıkanıklık denetimi yapar: en az 20 baytlık başlık, üç yönlü el sıkışmayla açılan bağlantı. Sıra numaraları baytları sayar; onay (ACK) beklenen sonraki baytı bildirir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Poignée de main TCP (ISN client = 100, ISN serveur = 300)\nClient → Serveur : SYN       seq = 100\nServeur → Client : SYN-ACK   seq = 300, ack = 101\nClient → Serveur : ACK       seq = 101, ack = 301\n\nPuis le client envoie 500 octets : seq = 101 → le serveur répond ack = 601\nFermeture : FIN → ACK, FIN → ACK (4 messages)\n\nPorts connus : 20/21 FTP, 22 SSH, 25 SMTP, 53 DNS, 80 HTTP, 443 HTTPS',
          en: 'TCP handshake (client ISN = 100, server ISN = 300)\nClient → Server: SYN       seq = 100\nServer → Client: SYN-ACK   seq = 300, ack = 101\nClient → Server: ACK       seq = 101, ack = 301\n\nThen the client sends 500 bytes: seq = 101 → the server answers ack = 601\nClosing: FIN → ACK, FIN → ACK (4 messages)\n\nWell-known ports: 20/21 FTP, 22 SSH, 25 SMTP, 53 DNS, 80 HTTP, 443 HTTPS',
          tr: 'TCP el sıkışma (istemci ISN = 100, sunucu ISN = 300)\nİstemci → Sunucu: SYN       seq = 100\nSunucu → İstemci: SYN-ACK   seq = 300, ack = 101\nİstemci → Sunucu: ACK       seq = 101, ack = 301\n\nSonra istemci 500 bayt gönderir: seq = 101 → sunucu ack = 601 ile yanıtlar\nKapatma: FIN → ACK, FIN → ACK (4 mesaj)\n\nBilinen portlar: 20/21 FTP, 22 SSH, 25 SMTP, 53 DNS, 80 HTTP, 443 HTTPS',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Après la poignée de main ci-dessus, le client envoie deux segments : 200 octets puis 300 octets. (1) Quels sont leurs numéros de séquence ? (2) Si le premier segment est perdu mais le second arrive, quel ACK le serveur renvoie-t-il ? (3) Pour un jeu en ligne, pourquoi préférer UDP ?',
          en: 'After the handshake above, the client sends two segments: 200 bytes then 300 bytes. (1) What are their sequence numbers? (2) If the first segment is lost but the second arrives, what ACK does the server send? (3) Why prefer UDP for an online game?',
          tr: 'Yukarıdaki el sıkışmadan sonra istemci iki segment gönderiyor: önce 200, sonra 300 bayt. (1) Sıra numaraları nedir? (2) İlk segment kaybolur ama ikincisi ulaşırsa sunucu hangi ACK’ı gönderir? (3) Çevrimiçi bir oyun için neden UDP tercih edilir?',
        },
        solution: {
          fr: '(1) Le premier commence à seq = 101 (octets 101 à 300), le second à seq = 301 (octets 301 à 600). (2) ack = 101 : TCP acquitte de façon cumulative le prochain octet attendu dans l’ordre. Il manque toujours l’octet 101, même si les octets 301 à 600 sont arrivés. (3) Une position reçue en retard ne sert plus à rien : mieux vaut perdre un paquet que tout bloquer pour le retransmettre. UDP n’attend pas et n’a pas de surcoût de connexion.',
          en: '(1) The first starts at seq = 101 (bytes 101 to 300), the second at seq = 301 (bytes 301 to 600). (2) ack = 101: TCP cumulatively acknowledges the next in-order byte expected. Byte 101 is still missing, even though bytes 301 to 600 arrived. (3) A position received late is useless: better to lose a packet than block everything to resend it. UDP doesn’t wait and has no connection overhead.',
          tr: '(1) İlki seq = 101’den (101–300 baytları), ikincisi seq = 301’den (301–600 baytları) başlar. (2) ack = 101: TCP sıradaki beklenen baytı birikimli olarak onaylar. 301–600 baytları gelmiş olsa da 101. bayt hâlâ eksiktir. (3) Geç gelen bir konum artık işe yaramaz: yeniden göndermek için her şeyi durdurmaktansa bir paketi kaybetmek iyidir. UDP beklemez ve bağlantı yükü yoktur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de messages compte l’ouverture d’une connexion TCP ?',
        en: 'How many messages does opening a TCP connection take?',
        tr: 'TCP bağlantısı açmak kaç mesaj gerektirir?',
      },
      options: { fr: ['2', '3', '4'], en: ['2', '3', '4'], tr: ['2', '3', '4'] },
      answerIndex: 1,
      explanation: {
        fr: 'SYN, SYN-ACK, ACK : la poignée de main en trois temps. La fermeture, elle, utilise en général quatre messages.',
        en: 'SYN, SYN-ACK, ACK: the three-way handshake. Closing usually takes four messages.',
        tr: 'SYN, SYN-ACK, ACK: üç yönlü el sıkışma. Kapatma ise genellikle dört mesaj kullanır.',
      },
    },
  },
  {
    id: 'net-w06-reliable-transfer',
    week: 6,
    title: {
      fr: 'Transfert fiable et fenêtre glissante',
      en: 'Reliable transfer and sliding window',
      tr: 'Güvenilir aktarım ve kayan pencere',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Pour un transfert fiable, on utilise des numéros de séquence, des acquittements, des temporisateurs et des retransmissions. Avec « envoyer et attendre » (stop-and-wait), l’émetteur attend l’ACK avant d’envoyer le paquet suivant : simple, mais le lien reste vide la plupart du temps. Le pipelining envoie jusqu’à W paquets sans attendre. Go-Back-N renvoie tout à partir du paquet perdu ; Selective Repeat ne renvoie que les paquets perdus. Le contrôle de flux de TCP adapte W à la place libre chez le récepteur.',
          en: 'Reliable transfer uses sequence numbers, acknowledgments, timers and retransmissions. With stop-and-wait, the sender waits for the ACK before sending the next packet: simple, but the link stays idle most of the time. Pipelining sends up to W packets without waiting. Go-Back-N resends everything from the lost packet on; Selective Repeat only resends the lost packets. TCP flow control fits W to the free space at the receiver.',
          tr: 'Güvenilir aktarımda sıra numaraları, onaylar, zamanlayıcılar ve yeniden gönderimler kullanılır. Gönder ve bekle (stop-and-wait) yönteminde gönderici bir sonraki paketi göndermeden önce ACK’ı bekler: basittir ama bağlantı çoğu zaman boş kalır. Ardışık gönderim (pipelining) beklemeden W pakete kadar gönderir. Go-Back-N kaybolan paketten itibaren her şeyi yeniden gönderir; Selective Repeat yalnızca kaybolanları yeniden gönderir. TCP akış denetimi W’yi alıcıdaki boş alana göre ayarlar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Utilisation du lien en stop-and-wait\nU = (L/R) / (RTT + L/R)\nAvec une fenêtre de W paquets (si W·L/R < RTT + L/R) :\nU = W × (L/R) / (RTT + L/R)\n\nGo-Back-N, fenêtre 4, paquet 2 perdu :\nenvoyés 0 1 2 3 → reçus 0 1 _ 3 (3 rejeté, hors ordre)\ntimeout du 2 → on renvoie 2 3\nSelective Repeat : 3 est gardé en mémoire, on ne renvoie que 2',
          en: 'Link utilization with stop-and-wait\nU = (L/R) / (RTT + L/R)\nWith a window of W packets (if W·L/R < RTT + L/R):\nU = W × (L/R) / (RTT + L/R)\n\nGo-Back-N, window 4, packet 2 lost:\nsent 0 1 2 3 → received 0 1 _ 3 (3 dropped, out of order)\ntimeout of 2 → resend 2 3\nSelective Repeat: 3 is buffered, only 2 is resent',
          tr: 'Gönder ve bekle ile bağlantı kullanımı\nU = (L/R) / (RTT + L/R)\nW paketlik pencereyle (W·L/R < RTT + L/R ise):\nU = W × (L/R) / (RTT + L/R)\n\nGo-Back-N, pencere 4, 2. paket kayıp:\ngönderilen 0 1 2 3 → alınan 0 1 _ 3 (3 reddedilir, sıra dışı)\n2’nin zaman aşımı → 2 3 yeniden gönderilir\nSelective Repeat: 3 tamponda tutulur, yalnızca 2 yeniden gönderilir',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Lien de 1 Gbit/s, RTT = 30 ms, paquets de 1000 octets. (1) Quelle est l’utilisation du lien en stop-and-wait ? Quel débit utile cela donne-t-il ? (2) Et avec une fenêtre de 1000 paquets ? (3) Quelle fenêtre faudrait-il pour remplir le lien ?',
          en: '1 Gbit/s link, RTT = 30 ms, 1000-byte packets. (1) What is the link utilization with stop-and-wait? What useful throughput does it give? (2) And with a window of 1000 packets? (3) What window would fill the link?',
          tr: '1 Gbit/s bağlantı, RTT = 30 ms, 1000 baytlık paketler. (1) Gönder ve bekle ile bağlantı kullanımı nedir? Bu ne kadar yararlı iş hacmi verir? (2) 1000 paketlik pencereyle? (3) Bağlantıyı doldurmak için ne kadar pencere gerekir?',
        },
        solution: {
          fr: '(1) L/R = 8000 bits / 10⁹ = 8 µs. U = 0,008 / 30,008 ≈ 0,00027 : le lien est utilisé à 0,027 %, soit environ 267 kbit/s sur un lien de 1 Gbit/s. (2) U ≈ 1000 × 0,00027 ≈ 0,27, soit 27 %. (3) Il faut W ≥ (RTT + L/R) / (L/R) = 30,008 / 0,008 ≈ 3751 paquets en vol : c’est le produit débit × délai divisé par la taille d’un paquet.',
          en: '(1) L/R = 8000 bits / 10⁹ = 8 µs. U = 0.008 / 30.008 ≈ 0.00027: the link is used at 0.027%, about 267 kbit/s on a 1 Gbit/s link. (2) U ≈ 1000 × 0.00027 ≈ 0.27, i.e. 27%. (3) W ≥ (RTT + L/R) / (L/R) = 30.008 / 0.008 ≈ 3751 packets in flight are needed: the bandwidth-delay product divided by the packet size.',
          tr: '(1) L/R = 8000 bit / 10⁹ = 8 µs. U = 0,008 / 30,008 ≈ 0,00027: bağlantı %0,027 kullanılır, 1 Gbit/s’lik bağlantıda yaklaşık 267 kbit/s. (2) U ≈ 1000 × 0,00027 ≈ 0,27, yani %27. (3) W ≥ (RTT + L/R) / (L/R) = 30,008 / 0,008 ≈ 3751 paket yolda olmalıdır: bant genişliği × gecikme çarpımının paket boyutuna bölümü.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Avec Go-Back-N, que fait le récepteur d’un paquet arrivé hors ordre ?',
        en: 'With Go-Back-N, what does the receiver do with an out-of-order packet?',
        tr: 'Go-Back-N’de alıcı sıra dışı gelen bir paketle ne yapar?',
      },
      options: {
        fr: ['Il le garde en mémoire', 'Il le rejette et réacquitte le dernier paquet reçu dans l’ordre', 'Il le transmet à l’application'],
        en: ['It buffers it', 'It drops it and re-acknowledges the last in-order packet', 'It passes it to the application'],
        tr: ['Tamponda tutar', 'Reddeder ve sırayla alınan son paketi yeniden onaylar', 'Uygulamaya iletir'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le récepteur Go-Back-N est très simple : il n’accepte que le paquet attendu. C’est Selective Repeat qui garde les paquets hors ordre en mémoire.',
        en: 'The Go-Back-N receiver is very simple: it only accepts the expected packet. Selective Repeat is the one that buffers out-of-order packets.',
        tr: 'Go-Back-N alıcısı çok basittir: yalnızca beklenen paketi kabul eder. Sıra dışı paketleri tamponda tutan Selective Repeat’tir.',
      },
    },
  },
  {
    id: 'net-w07-congestion',
    week: 7,
    title: {
      fr: 'Contrôle de congestion TCP et révision de la vize',
      en: 'TCP congestion control and midterm review',
      tr: 'TCP tıkanıklık denetimi ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'TCP limite son envoi par une fenêtre de congestion (cwnd), comptée ici en segments. Démarrage lent (slow start) : cwnd part de 1 et double à chaque RTT, jusqu’au seuil ssthresh. Évitement de congestion : au-delà, cwnd augmente de 1 par RTT (croissance additive). Sur un timeout, ssthresh = cwnd / 2 et cwnd repart à 1. Sur trois ACK dupliqués (TCP Reno), ssthresh = cwnd / 2 et cwnd = ssthresh : décroissance multiplicative (AIMD).',
          en: 'TCP limits its sending with a congestion window (cwnd), counted here in segments. Slow start: cwnd starts at 1 and doubles every RTT, up to the threshold ssthresh. Congestion avoidance: beyond it, cwnd grows by 1 per RTT (additive increase). On a timeout, ssthresh = cwnd / 2 and cwnd restarts at 1. On three duplicate ACKs (TCP Reno), ssthresh = cwnd / 2 and cwnd = ssthresh: multiplicative decrease (AIMD).',
          tr: 'TCP gönderimini tıkanıklık penceresiyle (cwnd) sınırlar; burada segment olarak sayılır. Yavaş başlangıç: cwnd 1’den başlar ve her RTT’de ssthresh eşiğine kadar ikiye katlanır. Tıkanıklıktan kaçınma: eşiğin ötesinde cwnd her RTT’de 1 artar (toplamsal artış). Zaman aşımında ssthresh = cwnd / 2 olur ve cwnd 1’den yeniden başlar. Üç yinelenen ACK’ta (TCP Reno) ssthresh = cwnd / 2 ve cwnd = ssthresh: çarpımsal azalma (AIMD).',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Couches TCP/IP et OSI, unités, encapsulation, taille des en-têtes\n✔ Délais : traitement, attente, transmission L/R, propagation d/s ; goulot\n✔ HTTP : requête / réponse, codes, persistant, cookies, cache, RTT\n✔ DNS : hiérarchie, résolution itérative, cache, enregistrements ; DHCP DORA\n✔ UDP vs TCP, ports, poignée de main, seq / ack\n✔ Stop-and-wait, utilisation, Go-Back-N, Selective Repeat\n✔ Congestion : slow start, ssthresh, AIMD, timeout, 3 ACK dupliqués',
          en: '✔ TCP/IP and OSI layers, units, encapsulation, header sizes\n✔ Delays: processing, queuing, transmission L/R, propagation d/s; bottleneck\n✔ HTTP: request / response, codes, persistent, cookies, cache, RTT\n✔ DNS: hierarchy, iterative resolution, cache, records; DHCP DORA\n✔ UDP vs TCP, ports, handshake, seq / ack\n✔ Stop-and-wait, utilization, Go-Back-N, Selective Repeat\n✔ Congestion: slow start, ssthresh, AIMD, timeout, 3 duplicate ACKs',
          tr: '✔ TCP/IP ve OSI katmanları, birimler, sarmalama, başlık boyutları\n✔ Gecikmeler: işleme, kuyruk, iletim L/R, yayılım d/s; darboğaz\n✔ HTTP: istek / yanıt, kodlar, kalıcı, çerezler, önbellek, RTT\n✔ DNS: hiyerarşi, yinelemeli çözümleme, önbellek, kayıtlar; DHCP DORA\n✔ UDP ve TCP, portlar, el sıkışma, seq / ack\n✔ Gönder ve bekle, kullanım, Go-Back-N, Selective Repeat\n✔ Tıkanıklık: yavaş başlangıç, ssthresh, AIMD, zaman aşımı, 3 yinelenen ACK',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'cwnd = 1 au départ et ssthresh = 8. (1) Donne cwnd au début de chacun des 8 premiers RTT. (2) Au RTT suivant, avec cwnd = 13, un timeout se produit : que deviennent ssthresh et cwnd ? (3) Et si c’était 3 ACK dupliqués avec TCP Reno ?',
          en: 'cwnd = 1 at the start and ssthresh = 8. (1) Give cwnd at the start of each of the first 8 RTTs. (2) At the next RTT, with cwnd = 13, a timeout happens: what become ssthresh and cwnd? (3) And if it were 3 duplicate ACKs with TCP Reno?',
          tr: 'Başta cwnd = 1 ve ssthresh = 8. (1) İlk 8 RTT’nin her birinin başında cwnd’yi ver. (2) Sonraki RTT’de cwnd = 13 iken zaman aşımı oluyor: ssthresh ve cwnd ne olur? (3) TCP Reno ile 3 yinelenen ACK olsaydı?',
        },
        solution: {
          fr: '(1) Démarrage lent : 1, 2, 4, 8 ; ssthresh atteint, puis croissance de 1 par RTT : 9, 10, 11, 12. (2) ssthresh = 13 / 2 = 6 (arrondi vers le bas) et cwnd = 1 : on recommence un démarrage lent jusqu’à 6. (3) ssthresh = 6 et cwnd = 6 : on continue directement en croissance additive (récupération rapide), car des ACK dupliqués montrent que des paquets passent encore.',
          en: '(1) Slow start: 1, 2, 4, 8; ssthresh reached, then +1 per RTT: 9, 10, 11, 12. (2) ssthresh = 13 / 2 = 6 (rounded down) and cwnd = 1: slow start again up to 6. (3) ssthresh = 6 and cwnd = 6: additive increase continues directly (fast recovery), since duplicate ACKs show packets are still getting through.',
          tr: '(1) Yavaş başlangıç: 1, 2, 4, 8; ssthresh’e ulaşılır, sonra RTT başına +1: 9, 10, 11, 12. (2) ssthresh = 13 / 2 = 6 (aşağı yuvarlanır) ve cwnd = 1: 6’ya kadar yeniden yavaş başlangıç. (3) ssthresh = 6 ve cwnd = 6: doğrudan toplamsal artışla devam edilir (hızlı kurtarma), çünkü yinelenen ACK’lar paketlerin hâlâ geçtiğini gösterir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pendant le démarrage lent, comment évolue cwnd à chaque RTT ?',
        en: 'During slow start, how does cwnd change each RTT?',
        tr: 'Yavaş başlangıçta cwnd her RTT’de nasıl değişir?',
      },
      options: { fr: ['+1', '× 2', '÷ 2'], en: ['+1', '× 2', '÷ 2'], tr: ['+1', '× 2', '÷ 2'] },
      answerIndex: 1,
      explanation: {
        fr: 'Malgré son nom, le démarrage lent est exponentiel : chaque ACK ajoute 1 segment, donc cwnd double par RTT. Le +1 par RTT, c’est l’évitement de congestion.',
        en: 'Despite its name, slow start is exponential: each ACK adds 1 segment, so cwnd doubles per RTT. +1 per RTT is congestion avoidance.',
        tr: 'Adına rağmen yavaş başlangıç üsteldir: her ACK 1 segment ekler, yani cwnd her RTT’de ikiye katlanır. RTT başına +1, tıkanıklıktan kaçınmadır.',
      },
    },
  },
  {
    id: 'net-ip-addresses',
    week: 8,
    title: {
      fr: 'Adresses IPv4, masques et CIDR',
      en: 'IPv4 addresses, masks and CIDR',
      tr: 'IPv4 adresleri, maskeler ve CIDR',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une adresse IPv4 fait 32 bits, écrits en quatre octets décimaux (192.168.10.37). Le masque sépare la partie réseau de la partie hôte ; en notation CIDR, /26 signifie 26 bits de réseau. L’adresse réseau a tous les bits d’hôte à 0, l’adresse de diffusion les a tous à 1 : aucune des deux ne peut être donnée à une machine. Plages privées, non routées sur Internet : 10.0.0.0/8, 172.16.0.0/12 et 192.168.0.0/16.',
          en: 'An IPv4 address is 32 bits, written as four decimal bytes (192.168.10.37). The mask splits the network part from the host part; in CIDR notation, /26 means 26 network bits. The network address has every host bit at 0, the broadcast address every host bit at 1: neither can be given to a machine. Private ranges, not routed on the Internet: 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16.',
          tr: 'Bir IPv4 adresi 32 bittir ve dört onlu bayt olarak yazılır (192.168.10.37). Maske ağ kısmını ana bilgisayar kısmından ayırır; CIDR gösteriminde /26, 26 ağ biti demektir. Ağ adresinde tüm ana bilgisayar bitleri 0, yayın adresinde hepsi 1’dir: ikisi de bir makineye verilemez. İnternette yönlendirilmeyen özel aralıklar: 10.0.0.0/8, 172.16.0.0/12 ve 192.168.0.0/16.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '192.168.10.37/26\nmasque /26 = 11111111.11111111.11111111.11000000 = 255.255.255.192\n37 = 00 100101   → bits d’hôte (6 derniers) = 100101\n\nréseau      : 192.168.10.0     (hôte = 000000)\ndiffusion   : 192.168.10.63    (hôte = 111111)\nhôtes       : 192.168.10.1 à 192.168.10.62  → 2⁶ − 2 = 62\n\nRègle : nombre d’hôtes = 2^(32 − préfixe) − 2',
          en: '192.168.10.37/26\nmask /26 = 11111111.11111111.11111111.11000000 = 255.255.255.192\n37 = 00 100101   → host bits (last 6) = 100101\n\nnetwork     : 192.168.10.0     (host = 000000)\nbroadcast   : 192.168.10.63    (host = 111111)\nhosts       : 192.168.10.1 to 192.168.10.62  → 2⁶ − 2 = 62\n\nRule: number of hosts = 2^(32 − prefix) − 2',
          tr: '192.168.10.37/26\nmaske /26 = 11111111.11111111.11111111.11000000 = 255.255.255.192\n37 = 00 100101   → ana bilgisayar bitleri (son 6) = 100101\n\nağ         : 192.168.10.0     (ana bilgisayar = 000000)\nyayın      : 192.168.10.63    (ana bilgisayar = 111111)\nana bilg.  : 192.168.10.1 – 192.168.10.62  → 2⁶ − 2 = 62\n\nKural: ana bilgisayar sayısı = 2^(32 − önek) − 2',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Pour 172.16.45.14/20, donne le masque, l’adresse réseau, l’adresse de diffusion et le nombre d’hôtes. (2) Lesquelles de ces adresses sont privées : 10.4.5.6, 172.20.1.1, 172.32.0.1, 8.8.8.8 ?',
          en: '(1) For 172.16.45.14/20, give the mask, network address, broadcast address and number of hosts. (2) Which of these addresses are private: 10.4.5.6, 172.20.1.1, 172.32.0.1, 8.8.8.8?',
          tr: '(1) 172.16.45.14/20 için maskeyi, ağ adresini, yayın adresini ve ana bilgisayar sayısını ver. (2) Bu adreslerden hangileri özeldir: 10.4.5.6, 172.20.1.1, 172.32.0.1, 8.8.8.8?',
        },
        solution: {
          fr: '(1) /20 = 255.255.240.0 : le 3e octet garde ses 4 premiers bits. 45 = 0010 1101 → 0010 0000 = 32 : réseau 172.16.32.0. Diffusion : bits d’hôte à 1 → 0010 1111 = 47 dans le 3e octet, et 255 → 172.16.47.255. Hôtes : 2¹² − 2 = 4094. (2) 10.4.5.6 (dans 10.0.0.0/8) et 172.20.1.1 (172.16.0.0/12 va de 172.16 à 172.31) sont privées. 172.32.0.1 est juste hors de la plage ; 8.8.8.8 (le DNS de Google) est publique.',
          en: '(1) /20 = 255.255.240.0: the 3rd byte keeps its first 4 bits. 45 = 0010 1101 → 0010 0000 = 32: network 172.16.32.0. Broadcast: host bits at 1 → 0010 1111 = 47 in the 3rd byte, and 255 → 172.16.47.255. Hosts: 2¹² − 2 = 4094. (2) 10.4.5.6 (in 10.0.0.0/8) and 172.20.1.1 (172.16.0.0/12 runs from 172.16 to 172.31) are private. 172.32.0.1 is just outside the range; 8.8.8.8 (Google’s DNS) is public.',
          tr: '(1) /20 = 255.255.240.0: 3. bayt ilk 4 bitini korur. 45 = 0010 1101 → 0010 0000 = 32: ağ 172.16.32.0. Yayın: ana bilgisayar bitleri 1 → 3. baytta 0010 1111 = 47 ve 255 → 172.16.47.255. Ana bilgisayar: 2¹² − 2 = 4094. (2) 10.4.5.6 (10.0.0.0/8 içinde) ve 172.20.1.1 (172.16.0.0/12, 172.16’dan 172.31’e) özeldir. 172.32.0.1 aralığın hemen dışındadır; 8.8.8.8 (Google DNS) geneldir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien d’adresses utilisables pour des machines dans un réseau /24 ?',
        en: 'How many usable host addresses in a /24 network?',
        tr: 'Bir /24 ağında kaç kullanılabilir ana bilgisayar adresi vardır?',
      },
      options: { fr: ['254', '255', '256'], en: ['254', '255', '256'], tr: ['254', '255', '256'] },
      answerIndex: 0,
      explanation: {
        fr: '8 bits d’hôte donnent 2⁸ = 256 adresses, moins l’adresse réseau et l’adresse de diffusion : 254.',
        en: '8 host bits give 2⁸ = 256 addresses, minus the network and broadcast addresses: 254.',
        tr: '8 ana bilgisayar biti 2⁸ = 256 adres verir; ağ ve yayın adresleri çıkarılınca 254.',
      },
    },
  },
  {
    id: 'net-subnetting',
    week: 9,
    title: { fr: 'Sous-réseaux et VLSM', en: 'Subnetting and VLSM', tr: 'Alt ağlar ve VLSM' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Découper un réseau en sous-réseaux, c’est emprunter des bits à la partie hôte : chaque bit emprunté double le nombre de sous-réseaux et divise par deux leur taille. Avec le VLSM (masques de longueur variable), chaque sous-réseau reçoit la taille qu’il lui faut. On place d’abord le plus grand, pour que chaque bloc commence sur une frontière alignée sur sa taille.',
          en: 'Subnetting means borrowing bits from the host part: each borrowed bit doubles the number of subnets and halves their size. With VLSM (variable length subnet masks), each subnet gets the size it needs. The largest one is placed first, so each block starts on a boundary aligned with its size.',
          tr: 'Alt ağlara bölmek ana bilgisayar kısmından bit ödünç almaktır: ödünç alınan her bit alt ağ sayısını ikiye katlar ve boyutlarını yarıya indirir. VLSM’de (değişken uzunluklu alt ağ maskeleri) her alt ağ ihtiyaç duyduğu boyutu alır. Her bloğun boyutuna hizalı bir sınırda başlaması için önce en büyüğü yerleştirilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '200.10.5.0/24 en 4 sous-réseaux → emprunter 2 bits → /26 (64 adresses)\n200.10.5.0/26     hôtes .1 – .62     diffusion .63\n200.10.5.64/26    hôtes .65 – .126   diffusion .127\n200.10.5.128/26   hôtes .129 – .190  diffusion .191\n200.10.5.192/26   hôtes .193 – .254  diffusion .255\n\nTaille d’un bloc pour h hôtes : la plus petite puissance de 2 ≥ h + 2\n/25 → 126 hôtes   /26 → 62   /27 → 30   /28 → 14   /30 → 2 (lien point à point)',
          en: '200.10.5.0/24 into 4 subnets → borrow 2 bits → /26 (64 addresses)\n200.10.5.0/26     hosts .1 – .62     broadcast .63\n200.10.5.64/26    hosts .65 – .126   broadcast .127\n200.10.5.128/26   hosts .129 – .190  broadcast .191\n200.10.5.192/26   hosts .193 – .254  broadcast .255\n\nBlock size for h hosts: the smallest power of 2 ≥ h + 2\n/25 → 126 hosts   /26 → 62   /27 → 30   /28 → 14   /30 → 2 (point-to-point link)',
          tr: '200.10.5.0/24’ü 4 alt ağa bölmek → 2 bit ödünç al → /26 (64 adres)\n200.10.5.0/26     ana bilg. .1 – .62     yayın .63\n200.10.5.64/26    ana bilg. .65 – .126   yayın .127\n200.10.5.128/26   ana bilg. .129 – .190  yayın .191\n200.10.5.192/26   ana bilg. .193 – .254  yayın .255\n\nh ana bilgisayar için blok boyutu: h + 2’den büyük veya eşit en küçük 2’nin kuvveti\n/25 → 126   /26 → 62   /27 → 30   /28 → 14   /30 → 2 (noktadan noktaya bağlantı)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec 192.168.1.0/24, crée en VLSM trois sous-réseaux : bâtiment A (100 machines), bâtiment B (50) et laboratoire (25). Pour chacun, donne le préfixe, l’adresse réseau, le masque et l’adresse de diffusion. Combien d’adresses restent libres ?',
          en: 'With 192.168.1.0/24, build three VLSM subnets: building A (100 machines), building B (50) and the lab (25). For each, give the prefix, network address, mask and broadcast address. How many addresses are left free?',
          tr: '192.168.1.0/24 ile VLSM kullanarak üç alt ağ oluştur: A binası (100 makine), B binası (50) ve laboratuvar (25). Her biri için öneki, ağ adresini, maskeyi ve yayın adresini ver. Kaç adres boş kalır?',
        },
        solution: {
          fr: 'A : 100 + 2 = 102 → bloc de 128 → 192.168.1.0/25, masque 255.255.255.128, diffusion .127 (126 hôtes). B : 52 → bloc de 64 → 192.168.1.128/26, masque 255.255.255.192, diffusion .191 (62 hôtes). Labo : 27 → bloc de 32 → 192.168.1.192/27, masque 255.255.255.224, diffusion .223 (30 hôtes). Il reste 192.168.1.224/27, soit 32 adresses libres pour plus tard.',
          en: 'A: 100 + 2 = 102 → block of 128 → 192.168.1.0/25, mask 255.255.255.128, broadcast .127 (126 hosts). B: 52 → block of 64 → 192.168.1.128/26, mask 255.255.255.192, broadcast .191 (62 hosts). Lab: 27 → block of 32 → 192.168.1.192/27, mask 255.255.255.224, broadcast .223 (30 hosts). 192.168.1.224/27 remains: 32 free addresses for later.',
          tr: 'A: 100 + 2 = 102 → 128’lik blok → 192.168.1.0/25, maske 255.255.255.128, yayın .127 (126 ana bilg.). B: 52 → 64’lük blok → 192.168.1.128/26, maske 255.255.255.192, yayın .191 (62 ana bilg.). Laboratuvar: 27 → 32’lik blok → 192.168.1.192/27, maske 255.255.255.224, yayın .223 (30 ana bilg.). Geriye 192.168.1.224/27 kalır: ileride kullanılmak üzere 32 boş adres.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel préfixe utiliser pour un sous-réseau de 14 machines, sans gaspiller ?',
        en: 'Which prefix suits a 14-machine subnet without waste?',
        tr: 'İsraf etmeden 14 makinelik bir alt ağ için hangi önek kullanılır?',
      },
      options: { fr: ['/27', '/28', '/29'], en: ['/27', '/28', '/29'], tr: ['/27', '/28', '/29'] },
      answerIndex: 1,
      explanation: {
        fr: '14 + 2 = 16 = 2⁴ : 4 bits d’hôte, donc /28, exactement 14 adresses utilisables. /29 n’en donne que 6.',
        en: '14 + 2 = 16 = 2⁴: 4 host bits, so /28, exactly 14 usable addresses. /29 gives only 6.',
        tr: '14 + 2 = 16 = 2⁴: 4 ana bilgisayar biti, yani /28, tam 14 kullanılabilir adres. /29 yalnızca 6 verir.',
      },
    },
  },
  {
    id: 'net-w10-routing',
    week: 10,
    title: {
      fr: 'Transfert et routage',
      en: 'Forwarding and routing',
      tr: 'İletme ve yönlendirme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le transfert (forwarding) est l’action locale d’un routeur : choisir la sortie d’un paquet dans sa table, selon la règle du plus long préfixe correspondant. Le routage est le calcul global des tables. À état de liens (OSPF) : chaque routeur connaît toute la carte et applique Dijkstra. À vecteur de distances (RIP) : chaque routeur échange ses distances avec ses voisins et applique Bellman-Ford, Dx(y) = min sur v de (c(x,v) + Dv(y)). Entre organisations, on utilise BGP.',
          en: 'Forwarding is a router’s local action: choosing a packet’s output from its table, by the longest matching prefix rule. Routing is the global computation of the tables. Link state (OSPF): each router knows the whole map and runs Dijkstra. Distance vector (RIP): each router swaps distances with its neighbors and applies Bellman-Ford, Dx(y) = min over v of (c(x,v) + Dv(y)). Between organizations, BGP is used.',
          tr: 'İletme (forwarding), yönlendiricinin yerel eylemidir: en uzun eşleşen önek kuralıyla tablosundan paketin çıkışını seçmek. Yönlendirme (routing) tabloların genel hesaplanmasıdır. Bağlantı durumu (OSPF): her yönlendirici tüm haritayı bilir ve Dijkstra uygular. Uzaklık vektörü (RIP): her yönlendirici uzaklıklarını komşularıyla paylaşır ve Bellman-Ford uygular, Dx(y) = v üzerinden min (c(x,v) + Dv(y)). Kuruluşlar arasında BGP kullanılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Table de transfert\n200.23.16.0/21    → interface 0\n200.23.24.0/24    → interface 1\n200.23.24.0/21    → interface 2\nsinon (défaut)    → interface 3\n\nVecteur de distances : liens x–y = 2, y–z = 1, x–z = 7\nDx(z) = min( c(x,z), c(x,y) + Dy(z) ) = min(7, 2 + 1) = 3   via y',
          en: 'Forwarding table\n200.23.16.0/21    → interface 0\n200.23.24.0/24    → interface 1\n200.23.24.0/21    → interface 2\notherwise         → interface 3\n\nDistance vector: links x–y = 2, y–z = 1, x–z = 7\nDx(z) = min( c(x,z), c(x,y) + Dy(z) ) = min(7, 2 + 1) = 3   via y',
          tr: 'İletme tablosu\n200.23.16.0/21    → arayüz 0\n200.23.24.0/24    → arayüz 1\n200.23.24.0/21    → arayüz 2\naksi halde        → arayüz 3\n\nUzaklık vektörü: bağlantılar x–y = 2, y–z = 1, x–z = 7\nDx(z) = min( c(x,z), c(x,y) + Dy(z) ) = min(7, 2 + 1) = 3   y üzerinden',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec la table ci-dessus, sur quelle interface part un paquet destiné à (1) 200.23.22.161, (2) 200.23.24.170, (3) 200.23.30.5, (4) 200.23.40.1 ?',
          en: 'With the table above, which interface does a packet go out on for (1) 200.23.22.161, (2) 200.23.24.170, (3) 200.23.30.5, (4) 200.23.40.1?',
          tr: 'Yukarıdaki tabloyla şu adreslere giden paket hangi arayüzden çıkar: (1) 200.23.22.161, (2) 200.23.24.170, (3) 200.23.30.5, (4) 200.23.40.1?',
        },
        solution: {
          fr: '/21 couvre des blocs de 8 valeurs dans le 3e octet : 200.23.16.0/21 va de .16 à .23, et 200.23.24.0/21 de .24 à .31. (1) 22 est dans 16–23 : interface 0. (2) 24.170 correspond au /24 ET au /21 de .24 ; le plus long préfixe gagne : interface 1. (3) 30 est dans 24–31 mais pas dans le /24 : interface 2. (4) 40 ne correspond à rien : interface 3, la route par défaut.',
          en: 'A /21 covers blocks of 8 values in the 3rd byte: 200.23.16.0/21 runs from .16 to .23, and 200.23.24.0/21 from .24 to .31. (1) 22 is in 16–23: interface 0. (2) 24.170 matches the /24 AND the .24 /21; the longest prefix wins: interface 1. (3) 30 is in 24–31 but not in the /24: interface 2. (4) 40 matches nothing: interface 3, the default route.',
          tr: '/21, 3. baytta 8 değerlik blokları kapsar: 200.23.16.0/21 .16’dan .23’e, 200.23.24.0/21 .24’ten .31’e gider. (1) 22, 16–23 arasındadır: arayüz 0. (2) 24.170 hem /24 HEM .24’teki /21 ile eşleşir; en uzun önek kazanır: arayüz 1. (3) 30, 24–31 arasındadır ama /24’te değildir: arayüz 2. (4) 40 hiçbiriyle eşleşmez: arayüz 3, varsayılan yol.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel algorithme utilise un protocole à état de liens comme OSPF ?',
        en: 'Which algorithm does a link-state protocol like OSPF use?',
        tr: 'OSPF gibi bir bağlantı durumu protokolü hangi algoritmayı kullanır?',
      },
      options: { fr: ['Dijkstra', 'Bellman-Ford', 'Kruskal'], en: ['Dijkstra', 'Bellman-Ford', 'Kruskal'], tr: ['Dijkstra', 'Bellman-Ford', 'Kruskal'] },
      answerIndex: 0,
      explanation: {
        fr: 'Chaque routeur OSPF reçoit l’état de tous les liens et calcule localement ses plus courts chemins avec Dijkstra. Bellman-Ford est utilisé par les protocoles à vecteur de distances comme RIP.',
        en: 'Each OSPF router receives every link’s state and computes its shortest paths locally with Dijkstra. Bellman-Ford is used by distance-vector protocols like RIP.',
        tr: 'Her OSPF yönlendiricisi tüm bağlantıların durumunu alır ve en kısa yollarını yerel olarak Dijkstra ile hesaplar. Bellman-Ford, RIP gibi uzaklık vektörü protokollerince kullanılır.',
      },
    },
  },
  {
    id: 'net-w11-nat-ipv6',
    week: 11,
    title: { fr: 'NAT, ICMP et IPv6', en: 'NAT, ICMP and IPv6', tr: 'NAT, ICMP ve IPv6' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le NAT permet à tout un réseau privé de sortir sur Internet avec une seule adresse publique : le routeur remplace l’adresse et le port source, et note la correspondance dans une table pour retrouver le destinataire des réponses. ICMP transporte les messages de contrôle : ping (echo request / reply) et traceroute, qui envoie des paquets avec un TTL de 1, 2, 3… et attend les messages « TTL expiré ». IPv6 utilise des adresses de 128 bits pour remédier au manque d’adresses IPv4.',
          en: 'NAT lets a whole private network reach the Internet with a single public address: the router replaces the source address and port, and records the mapping in a table to deliver replies. ICMP carries control messages: ping (echo request / reply) and traceroute, which sends packets with TTL 1, 2, 3… and waits for “TTL exceeded” messages. IPv6 uses 128-bit addresses to fix the shortage of IPv4 addresses.',
          tr: 'NAT, bütün bir özel ağın tek bir genel adresle İnternete çıkmasını sağlar: yönlendirici kaynak adresini ve portunu değiştirir ve yanıtları teslim etmek için eşlemeyi bir tabloya kaydeder. ICMP denetim mesajlarını taşır: ping (echo request / reply) ve TTL’si 1, 2, 3… olan paketler gönderip “TTL aşıldı” mesajlarını bekleyen traceroute. IPv6, IPv4 adres sıkıntısını gidermek için 128 bitlik adresler kullanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Table NAT (adresse publique 88.24.1.5)\ncôté privé             côté public\n192.168.1.10 : 3345    88.24.1.5 : 5001\n192.168.1.11 : 3345    88.24.1.5 : 5002\n\nIPv6 : 8 groupes de 16 bits en hexadécimal\n2001:0db8:0000:0000:0000:ff00:0042:8329\n→ zéros de tête supprimés, une suite de groupes nuls remplacée par ::\n→ 2001:db8::ff00:42:8329\nEn-tête fixe de 40 octets, pas de fragmentation par les routeurs, pas de somme de contrôle',
          en: 'NAT table (public address 88.24.1.5)\nprivate side           public side\n192.168.1.10 : 3345    88.24.1.5 : 5001\n192.168.1.11 : 3345    88.24.1.5 : 5002\n\nIPv6: 8 groups of 16 bits in hexadecimal\n2001:0db8:0000:0000:0000:ff00:0042:8329\n→ leading zeros dropped, one run of zero groups replaced by ::\n→ 2001:db8::ff00:42:8329\nFixed 40-byte header, no fragmentation by routers, no checksum',
          tr: 'NAT tablosu (genel adres 88.24.1.5)\nözel taraf             genel taraf\n192.168.1.10 : 3345    88.24.1.5 : 5001\n192.168.1.11 : 3345    88.24.1.5 : 5002\n\nIPv6: onaltılı 8 adet 16 bitlik grup\n2001:0db8:0000:0000:0000:ff00:0042:8329\n→ baştaki sıfırlar atılır, bir sıfır grubu dizisi :: ile değiştirilir\n→ 2001:db8::ff00:42:8329\n40 baytlık sabit başlık, yönlendiricilerde parçalama yok, sağlama toplamı yok',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Une réponse arrive de l’extérieur sur 88.24.1.5:5002. À quelle machine, et sur quel port, le routeur la transmet-il ? (2) Combien d’adresses IPv6 existe-t-il, environ ? (3) Pourquoi un serveur web installé chez soi derrière un NAT n’est-il pas joignable sans configuration ?',
          en: '(1) A reply arrives from outside on 88.24.1.5:5002. To which machine and port does the router pass it? (2) About how many IPv6 addresses exist? (3) Why can’t a web server at home behind a NAT be reached without configuration?',
          tr: '(1) Dışarıdan 88.24.1.5:5002’ye bir yanıt geliyor. Yönlendirici onu hangi makineye, hangi porta iletir? (2) Yaklaşık kaç IPv6 adresi vardır? (3) Evde NAT arkasına kurulan bir web sunucusuna neden yapılandırma olmadan erişilemez?',
        },
        solution: {
          fr: '(1) La ligne 5002 de la table correspond à 192.168.1.11, port 3345. Le port public distingue les deux machines, qui utilisaient le même port privé. (2) 2¹²⁸ ≈ 3,4 × 10³⁸ adresses. (3) Une connexion qui arrive de l’extérieur ne correspond à aucune ligne de la table : le routeur ne sait pas à quelle machine l’envoyer. Il faut une redirection de port (port forwarding), par exemple 80 → 192.168.1.10:80.',
          en: '(1) Table line 5002 maps to 192.168.1.11, port 3345. The public port tells apart the two machines, which used the same private port. (2) 2¹²⁸ ≈ 3.4 × 10³⁸ addresses. (3) An incoming connection matches no table row: the router doesn’t know which machine to send it to. Port forwarding is needed, for example 80 → 192.168.1.10:80.',
          tr: '(1) Tablodaki 5002 satırı 192.168.1.11, port 3345’e karşılık gelir. Aynı özel portu kullanan iki makineyi genel port ayırt eder. (2) 2¹²⁸ ≈ 3,4 × 10³⁸ adres. (3) Dışarıdan gelen bir bağlantı tablodaki hiçbir satırla eşleşmez: yönlendirici onu hangi makineye göndereceğini bilmez. Port yönlendirme gerekir, örneğin 80 → 192.168.1.10:80.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Comment s’écrit en abrégé l’adresse IPv6 2001:0db8:0000:0000:0000:0000:0000:0001 ?',
        en: 'How is the IPv6 address 2001:0db8:0000:0000:0000:0000:0000:0001 written in short form?',
        tr: '2001:0db8:0000:0000:0000:0000:0000:0001 IPv6 adresi kısaca nasıl yazılır?',
      },
      options: { fr: ['2001:db8::1', '2001:db8:0:1', '2001::db8::1'], en: ['2001:db8::1', '2001:db8:0:1', '2001::db8::1'], tr: ['2001:db8::1', '2001:db8:0:1', '2001::db8::1'] },
      answerIndex: 0,
      explanation: {
        fr: 'On supprime les zéros de tête (0db8 → db8) et on remplace la suite de groupes nuls par :: — une seule fois, sinon on ne saurait plus combien de groupes chaque :: représente.',
        en: 'Drop leading zeros (0db8 → db8) and replace the run of zero groups with :: — only once, otherwise you couldn’t tell how many groups each :: stands for.',
        tr: 'Baştaki sıfırlar atılır (0db8 → db8) ve sıfır grubu dizisi :: ile değiştirilir — yalnızca bir kez, yoksa her ::’nin kaç grubu temsil ettiği anlaşılamazdı.',
      },
    },
  },
  {
    id: 'net-w12-link-layer',
    week: 12,
    title: {
      fr: 'Couche liaison : Ethernet, ARP et CRC',
      en: 'Link layer: Ethernet, ARP and CRC',
      tr: 'Bağlantı katmanı: Ethernet, ARP ve CRC',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La couche liaison transporte une trame d’une machine à la machine voisine. Chaque carte réseau a une adresse MAC de 48 bits (ex. 3C:5A:B4:12:9E:01). ARP trouve l’adresse MAC qui correspond à une adresse IP du réseau local : on diffuse « qui a 192.168.1.1 ? » et la machine concernée répond. Pour détecter les erreurs de transmission, Ethernet ajoute un CRC : le reste de la division polynomiale (en XOR) des données par un générateur G.',
          en: 'The link layer carries a frame from one machine to the neighboring one. Each network card has a 48-bit MAC address (e.g. 3C:5A:B4:12:9E:01). ARP finds the MAC address matching an IP address on the local network: it broadcasts “who has 192.168.1.1?” and that machine answers. To detect transmission errors, Ethernet adds a CRC: the remainder of the polynomial (XOR) division of the data by a generator G.',
          tr: 'Bağlantı katmanı bir çerçeveyi bir makineden komşu makineye taşır. Her ağ kartının 48 bitlik bir MAC adresi vardır (örn. 3C:5A:B4:12:9E:01). ARP, yerel ağdaki bir IP adresine karşılık gelen MAC adresini bulur: “192.168.1.1 kimde?” diye yayın yapılır ve o makine yanıtlar. İletim hatalarını tespit etmek için Ethernet bir CRC ekler: verinin bir G üreteciyle polinom (XOR) bölümünden kalan.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'CRC : données D = 101110, générateur G = 1001 (r = 3 bits de contrôle)\n1. ajouter r zéros : 101110 000\n2. diviser en XOR par 1001 :\n   101110000\n   1001      → 0010\n     1010    → 0011\n      1100   → 0101\n       1010  → 0011\n           → reste final (3 derniers bits) : 011\n3. trame envoyée : 101110 011\nLe récepteur divise la trame par G : reste 000 → pas d’erreur détectée',
          en: 'CRC: data D = 101110, generator G = 1001 (r = 3 check bits)\n1. append r zeros: 101110 000\n2. divide with XOR by 1001:\n   101110000\n   1001      → 0010\n     1010    → 0011\n      1100   → 0101\n       1010  → 0011\n           → final remainder (last 3 bits): 011\n3. frame sent: 101110 011\nThe receiver divides the frame by G: remainder 000 → no error detected',
          tr: 'CRC: veri D = 101110, üreteç G = 1001 (r = 3 denetim biti)\n1. r sıfır ekle: 101110 000\n2. 1001 ile XOR bölmesi yap:\n   101110000\n   1001      → 0010\n     1010    → 0011\n      1100   → 0101\n       1010  → 0011\n           → son kalan (son 3 bit): 011\n3. gönderilen çerçeve: 101110 011\nAlıcı çerçeveyi G’ye böler: kalan 000 → hata tespit edilmedi',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Calcule le CRC de D = 1101011011 avec G = 10011. Quelle trame envoie-t-on ? (2) Le PC 192.168.1.20 veut envoyer un paquet à 8.8.8.8, hors du réseau local. De quelle adresse MAC demande-t-il la valeur avec ARP ?',
          en: '(1) Compute the CRC of D = 1101011011 with G = 10011. Which frame is sent? (2) PC 192.168.1.20 wants to send a packet to 8.8.8.8, outside the local network. Which MAC address does it ask for with ARP?',
          tr: '(1) G = 10011 ile D = 1101011011’in CRC’sini hesapla. Hangi çerçeve gönderilir? (2) 192.168.1.20 PC’si yerel ağ dışındaki 8.8.8.8’e bir paket göndermek istiyor. ARP ile hangi MAC adresini sorar?',
        },
        solution: {
          fr: '(1) G a 5 bits, donc r = 4 : on ajoute 4 zéros, 1101011011 0000, puis on divise en XOR par 10011. Le reste est 1110. Trame envoyée : 1101011011 1110. (2) Celle de sa passerelle par défaut (le routeur, par exemple 192.168.1.1), pas celle de 8.8.8.8 : la trame Ethernet ne va que jusqu’au routeur. L’adresse IP de destination reste 8.8.8.8, mais l’adresse MAC change à chaque saut.',
          en: '(1) G has 5 bits, so r = 4: append 4 zeros, 1101011011 0000, then divide with XOR by 10011. The remainder is 1110. Frame sent: 1101011011 1110. (2) Its default gateway’s (the router, e.g. 192.168.1.1), not 8.8.8.8’s: the Ethernet frame only goes as far as the router. The destination IP address stays 8.8.8.8, but the MAC address changes at every hop.',
          tr: '(1) G 5 bittir, yani r = 4: 4 sıfır eklenir, 1101011011 0000, sonra 10011 ile XOR bölmesi yapılır. Kalan 1110’dur. Gönderilen çerçeve: 1101011011 1110. (2) 8.8.8.8’in değil, varsayılan ağ geçidinin (yönlendirici, örn. 192.168.1.1) MAC adresini: Ethernet çerçevesi yalnızca yönlendiriciye kadar gider. Hedef IP adresi 8.8.8.8 olarak kalır, ama MAC adresi her atlamada değişir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est le rôle du protocole ARP ?',
        en: 'What is the ARP protocol for?',
        tr: 'ARP protokolünün görevi nedir?',
      },
      options: {
        fr: ['Donner une adresse IP à une machine', 'Trouver l’adresse MAC d’une adresse IP locale', 'Traduire un nom en adresse IP'],
        en: ['Give a machine an IP address', 'Find the MAC address of a local IP address', 'Translate a name into an IP address'],
        tr: ['Bir makineye IP adresi vermek', 'Yerel bir IP adresinin MAC adresini bulmak', 'Bir adı IP adresine çevirmek'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'ARP fait le lien entre la couche réseau (IP) et la couche liaison (MAC). Donner une adresse IP, c’est DHCP ; traduire un nom, c’est DNS.',
        en: 'ARP links the network layer (IP) to the link layer (MAC). Giving an IP address is DHCP; translating a name is DNS.',
        tr: 'ARP ağ katmanı (IP) ile bağlantı katmanı (MAC) arasında bağ kurar. IP adresi vermek DHCP’nin, ad çevirmek DNS’in işidir.',
      },
    },
  },
  {
    id: 'net-w13-switches-wifi',
    week: 13,
    title: {
      fr: 'Commutateurs, VLAN et Wi-Fi',
      en: 'Switches, VLANs and Wi-Fi',
      tr: 'Anahtarlar, VLAN’lar ve Wi-Fi',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un commutateur (switch) apprend tout seul : quand une trame arrive, il note « telle adresse MAC source est derrière tel port ». Si la destination est connue, il envoie la trame seulement sur ce port ; sinon, il l’inonde sur tous les autres ports. Chaque port forme un domaine de collision séparé, alors qu’un concentrateur (hub) répète tout partout. Les VLAN découpent un commutateur en plusieurs réseaux logiques. En Wi-Fi, on ne peut pas détecter les collisions : on utilise CSMA/CA (éviter les collisions) au lieu du CSMA/CD de l’Ethernet classique.',
          en: 'A switch learns on its own: when a frame arrives, it records “this source MAC address is behind this port”. If the destination is known, it sends the frame only on that port; otherwise it floods it on every other port. Each port is a separate collision domain, whereas a hub repeats everything everywhere. VLANs split a switch into several logical networks. In Wi-Fi, collisions can’t be detected: CSMA/CA (collision avoidance) is used instead of classic Ethernet’s CSMA/CD.',
          tr: 'Anahtar (switch) kendi kendine öğrenir: bir çerçeve geldiğinde “bu kaynak MAC adresi şu portun arkasında” diye kaydeder. Hedef biliniyorsa çerçeveyi yalnızca o porta, bilinmiyorsa diğer tüm portlara gönderir (taşırma). Her port ayrı bir çarpışma alanıdır; göbek (hub) ise her şeyi her yere tekrarlar. VLAN’lar bir anahtarı birkaç mantıksal ağa böler. Wi-Fi’de çarpışmalar algılanamaz: klasik Ethernet’in CSMA/CD’si yerine CSMA/CA (çarpışmadan kaçınma) kullanılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Commutateur à 3 ports, table vide\nA sur le port 1, B sur le port 2, C sur le port 3\n\nDomaines           concentrateur      commutateur      routeur\ncollision          1 pour tous        1 par port       1 par port\ndiffusion          1                  1 (sans VLAN)    1 par interface\n\nWi-Fi 802.11 : point d’accès, SSID, chaque trame reçue est acquittée,\nRTS / CTS contre le problème du terminal caché',
          en: '3-port switch, empty table\nA on port 1, B on port 2, C on port 3\n\nDomains            hub                switch           router\ncollision          1 for all          1 per port       1 per port\nbroadcast          1                  1 (no VLAN)      1 per interface\n\nWi-Fi 802.11: access point, SSID, every received frame is acknowledged,\nRTS / CTS against the hidden terminal problem',
          tr: '3 portlu anahtar, tablo boş\nA 1. portta, B 2. portta, C 3. portta\n\nAlanlar            göbek              anahtar          yönlendirici\nçarpışma           hepsi için 1       port başına 1    port başına 1\nyayın              1                  1 (VLAN’sız)     arayüz başına 1\n\nWi-Fi 802.11: erişim noktası, SSID, alınan her çerçeve onaylanır,\ngizli terminal sorununa karşı RTS / CTS',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec le commutateur ci-dessus, la table est vide. Pour chaque trame, dis sur quels ports elle part et ce que le commutateur apprend : (1) A → B ; (2) B → A ; (3) C → A ; (4) A → C. Puis : 8 PC reliés à un concentrateur, ou à un commutateur : combien de domaines de collision dans chaque cas ?',
          en: 'With the switch above, the table is empty. For each frame, say which ports it goes out on and what the switch learns: (1) A → B; (2) B → A; (3) C → A; (4) A → C. Then: 8 PCs on a hub, or on a switch: how many collision domains in each case?',
          tr: 'Yukarıdaki anahtarda tablo boş. Her çerçeve için hangi portlardan çıktığını ve anahtarın ne öğrendiğini söyle: (1) A → B; (2) B → A; (3) C → A; (4) A → C. Sonra: bir göbeğe veya bir anahtara bağlı 8 PC: her durumda kaç çarpışma alanı vardır?',
        },
        solution: {
          fr: '(1) Destination B inconnue : inondée sur les ports 2 et 3 ; il apprend A → port 1. (2) A est connu : envoyée seulement sur le port 1 ; il apprend B → port 2. (3) Envoyée seulement sur le port 1 ; il apprend C → port 3. (4) C est connu : seulement sur le port 3. Le commutateur ne renvoie jamais une trame sur son port d’arrivée. Concentrateur : 1 seul domaine de collision pour les 8 PC. Commutateur : 8 domaines, un par port. Dans les deux cas, un seul domaine de diffusion.',
          en: '(1) Destination B unknown: flooded on ports 2 and 3; it learns A → port 1. (2) A is known: sent only on port 1; it learns B → port 2. (3) Sent only on port 1; it learns C → port 3. (4) C is known: only on port 3. A switch never sends a frame back on its arrival port. Hub: a single collision domain for the 8 PCs. Switch: 8 domains, one per port. In both cases, a single broadcast domain.',
          tr: '(1) B hedefi bilinmiyor: 2. ve 3. portlara taşırılır; A → 1. port öğrenilir. (2) A biliniyor: yalnızca 1. porta gönderilir; B → 2. port öğrenilir. (3) Yalnızca 1. porta gönderilir; C → 3. port öğrenilir. (4) C biliniyor: yalnızca 3. porta. Anahtar bir çerçeveyi geldiği porta asla geri göndermez. Göbek: 8 PC için tek bir çarpışma alanı. Anahtar: port başına bir, 8 alan. İki durumda da tek bir yayın alanı.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi le Wi-Fi utilise-t-il CSMA/CA plutôt que CSMA/CD ?',
        en: 'Why does Wi-Fi use CSMA/CA rather than CSMA/CD?',
        tr: 'Wi-Fi neden CSMA/CD yerine CSMA/CA kullanır?',
      },
      options: {
        fr: ['Parce qu’une station radio ne peut pas détecter une collision pendant qu’elle émet', 'Parce que le Wi-Fi est plus rapide', 'Parce qu’il n’y a jamais de collision en Wi-Fi'],
        en: ['Because a radio station can’t detect a collision while transmitting', 'Because Wi-Fi is faster', 'Because there are never collisions in Wi-Fi'],
        tr: ['Çünkü bir radyo istasyonu yayın yaparken çarpışmayı algılayamaz', 'Çünkü Wi-Fi daha hızlıdır', 'Çünkü Wi-Fi’de hiç çarpışma olmaz'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Le signal émis est bien plus fort que les signaux reçus, et une station peut ne pas entendre une autre (terminal caché). On évite donc les collisions : attente aléatoire, RTS/CTS et acquittements.',
        en: 'The outgoing signal is far stronger than incoming ones, and a station may not hear another (hidden terminal). So collisions are avoided instead: random backoff, RTS/CTS and acknowledgments.',
        tr: 'Gönderilen sinyal gelenlerden çok daha güçlüdür ve bir istasyon diğerini duymayabilir (gizli terminal). Bu yüzden çarpışmalardan kaçınılır: rastgele bekleme, RTS/CTS ve onaylar.',
      },
    },
  },
  {
    id: 'net-w14-security',
    week: 14,
    title: {
      fr: 'Sécurité des réseaux et révision du final',
      en: 'Network security and final review',
      tr: 'Ağ güvenliği ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Objectifs : confidentialité, intégrité, authentification et disponibilité. Le chiffrement symétrique (AES) utilise la même clé des deux côtés : il est rapide, mais il faut partager la clé. Le chiffrement asymétrique (RSA) utilise une clé publique pour chiffrer et une clé privée pour déchiffrer, et sert aussi aux signatures. TLS (HTTPS) combine les deux : un échange asymétrique établit une clé de session symétrique. Les certificats prouvent à qui appartient une clé publique. Le pare-feu filtre le trafic selon des règles.',
          en: 'Goals: confidentiality, integrity, authentication and availability. Symmetric encryption (AES) uses the same key on both sides: fast, but the key must be shared. Asymmetric encryption (RSA) uses a public key to encrypt and a private key to decrypt, and also serves for signatures. TLS (HTTPS) combines both: an asymmetric exchange sets up a symmetric session key. Certificates prove who owns a public key. A firewall filters traffic by rules.',
          tr: 'Amaçlar: gizlilik, bütünlük, kimlik doğrulama ve erişilebilirlik. Simetrik şifreleme (AES) iki tarafta aynı anahtarı kullanır: hızlıdır ama anahtar paylaşılmalıdır. Asimetrik şifreleme (RSA) şifrelemek için açık anahtar, çözmek için özel anahtar kullanır ve imzalar için de kullanılır. TLS (HTTPS) ikisini birleştirir: asimetrik bir değişim simetrik bir oturum anahtarı kurar. Sertifikalar bir açık anahtarın kime ait olduğunu kanıtlar. Güvenlik duvarı trafiği kurallara göre süzer.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'RSA en miniature\np = 3, q = 11 → n = 33, φ(n) = (3 − 1)(11 − 1) = 20\ne = 3 (premier avec 20)   d = 7, car 3 × 7 = 21 ≡ 1 (mod 20)\nclé publique (e, n) = (3, 33)    clé privée (d, n) = (7, 33)\nchiffrer   m = 4 : c = 4³ mod 33 = 64 mod 33 = 31\ndéchiffrer       : m = 31⁷ mod 33 = 4\n\nPare-feu : « autoriser TCP entrant vers le port 443, refuser le reste »',
          en: 'Miniature RSA\np = 3, q = 11 → n = 33, φ(n) = (3 − 1)(11 − 1) = 20\ne = 3 (coprime with 20)   d = 7, since 3 × 7 = 21 ≡ 1 (mod 20)\npublic key (e, n) = (3, 33)    private key (d, n) = (7, 33)\nencrypt   m = 4: c = 4³ mod 33 = 64 mod 33 = 31\ndecrypt        : m = 31⁷ mod 33 = 4\n\nFirewall: “allow incoming TCP to port 443, deny the rest”',
          tr: 'Küçük RSA\np = 3, q = 11 → n = 33, φ(n) = (3 − 1)(11 − 1) = 20\ne = 3 (20 ile aralarında asal)   d = 7, çünkü 3 × 7 = 21 ≡ 1 (mod 20)\naçık anahtar (e, n) = (3, 33)    özel anahtar (d, n) = (7, 33)\nşifrele   m = 4: c = 4³ mod 33 = 64 mod 33 = 31\nçöz            : m = 31⁷ mod 33 = 4\n\nGüvenlik duvarı: “443 numaralı porta gelen TCP’ye izin ver, gerisini reddet”',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ IPv4 : masque, CIDR, réseau / diffusion / hôtes, plages privées\n✔ Sous-réseaux et VLSM (le plus grand d’abord)\n✔ Plus long préfixe ; état de liens (Dijkstra, OSPF) et vecteur de distances (Bellman-Ford, RIP), BGP\n✔ NAT, ICMP (ping, traceroute), IPv6 (128 bits, ::)\n✔ MAC, ARP, CRC, trame Ethernet\n✔ Commutateur auto-apprenant, domaines de collision / diffusion, VLAN, CSMA/CA\n✔ Sécurité : symétrique / asymétrique, RSA, TLS, certificats, pare-feu',
          en: '✔ IPv4: mask, CIDR, network / broadcast / hosts, private ranges\n✔ Subnetting and VLSM (largest first)\n✔ Longest prefix; link state (Dijkstra, OSPF) and distance vector (Bellman-Ford, RIP), BGP\n✔ NAT, ICMP (ping, traceroute), IPv6 (128 bits, ::)\n✔ MAC, ARP, CRC, Ethernet frame\n✔ Self-learning switch, collision / broadcast domains, VLAN, CSMA/CA\n✔ Security: symmetric / asymmetric, RSA, TLS, certificates, firewall',
          tr: '✔ IPv4: maske, CIDR, ağ / yayın / ana bilgisayar, özel aralıklar\n✔ Alt ağlar ve VLSM (önce en büyüğü)\n✔ En uzun önek; bağlantı durumu (Dijkstra, OSPF) ve uzaklık vektörü (Bellman-Ford, RIP), BGP\n✔ NAT, ICMP (ping, traceroute), IPv6 (128 bit, ::)\n✔ MAC, ARP, CRC, Ethernet çerçevesi\n✔ Kendi kendine öğrenen anahtar, çarpışma / yayın alanları, VLAN, CSMA/CA\n✔ Güvenlik: simetrik / asimetrik, RSA, TLS, sertifikalar, güvenlik duvarı',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Avec la clé publique (3, 33) ci-dessus, chiffre m = 4 et vérifie qu’on retrouve 4 avec la clé privée. (2) Pourquoi TLS n’utilise-t-il pas RSA pour chiffrer toute la page ? (3) Alice veut prouver qu’un message vient bien d’elle : avec quelle clé le signe-t-elle ?',
          en: '(1) With the public key (3, 33) above, encrypt m = 4 and check that the private key gives back 4. (2) Why doesn’t TLS use RSA to encrypt the whole page? (3) Alice wants to prove a message comes from her: which key does she sign it with?',
          tr: '(1) Yukarıdaki (3, 33) açık anahtarıyla m = 4’ü şifrele ve özel anahtarla 4’ün geri geldiğini doğrula. (2) TLS neden tüm sayfayı RSA ile şifrelemez? (3) Alice bir mesajın kendisinden geldiğini kanıtlamak istiyor: hangi anahtarla imzalar?',
        },
        solution: {
          fr: '(1) c = 4³ mod 33 = 64 − 33 = 31. Déchiffrement : 31 ≡ −2 (mod 33), donc 31⁷ ≡ (−2)⁷ = −128 ≡ −128 + 132 = 4 (mod 33). On retrouve bien m = 4. (2) RSA est des centaines de fois plus lent qu’AES. TLS ne s’en sert que pour établir ou authentifier une clé de session, puis chiffre les données en symétrique. (3) Avec sa clé PRIVÉE, que personne d’autre ne connaît. Tout le monde peut vérifier la signature avec sa clé publique.',
          en: '(1) c = 4³ mod 33 = 64 − 33 = 31. Decryption: 31 ≡ −2 (mod 33), so 31⁷ ≡ (−2)⁷ = −128 ≡ −128 + 132 = 4 (mod 33). We do get m = 4 back. (2) RSA is hundreds of times slower than AES. TLS only uses it to set up or authenticate a session key, then encrypts the data symmetrically. (3) With her PRIVATE key, which nobody else knows. Anyone can check the signature with her public key.',
          tr: '(1) c = 4³ mod 33 = 64 − 33 = 31. Çözme: 31 ≡ −2 (mod 33), yani 31⁷ ≡ (−2)⁷ = −128 ≡ −128 + 132 = 4 (mod 33). Gerçekten m = 4 geri gelir. (2) RSA, AES’ten yüzlerce kat yavaştır. TLS onu yalnızca bir oturum anahtarı kurmak veya doğrulamak için kullanır, sonra veriyi simetrik olarak şifreler. (3) Kendisinden başka kimsenin bilmediği ÖZEL anahtarıyla. Herkes imzayı onun açık anahtarıyla doğrulayabilir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pour envoyer un message confidentiel à Bob avec RSA, avec quelle clé le chiffre-t-on ?',
        en: 'To send Bob a confidential message with RSA, which key encrypts it?',
        tr: 'RSA ile Bob’a gizli bir mesaj göndermek için hangi anahtarla şifrelenir?',
      },
      options: {
        fr: ['La clé publique de Bob', 'La clé privée de Bob', 'La clé privée de l’expéditeur'],
        en: ['Bob’s public key', 'Bob’s private key', 'The sender’s private key'],
        tr: ['Bob’un açık anahtarı', 'Bob’un özel anahtarı', 'Gönderenin özel anahtarı'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Tout le monde peut chiffrer avec la clé publique de Bob, mais seul Bob, avec sa clé privée, peut déchiffrer. La clé privée de l’expéditeur sert à signer, pas à rendre le message secret.',
        en: 'Anyone can encrypt with Bob’s public key, but only Bob, with his private key, can decrypt. The sender’s private key is for signing, not for secrecy.',
        tr: 'Herkes Bob’un açık anahtarıyla şifreleyebilir, ama yalnızca özel anahtarına sahip Bob çözebilir. Gönderenin özel anahtarı gizlilik için değil, imzalamak içindir.',
      },
    },
  },
];
