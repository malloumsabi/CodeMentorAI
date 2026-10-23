/**
 * BLM426 Yazılım Mühendisliği (Software Engineering), 14 weeks following the KBU course contents:
 * weeks 1–7 prepare the midterm, weeks 8–14 the final.
 */

import type { LessonSource } from '@/data/lessons';

export const blm426Lessons: LessonSource[] = [
  {
    id: 'se-w01-intro',
    week: 1,
    title: {
      fr: 'Qu’est-ce que le génie logiciel ?',
      en: 'What is software engineering?',
      tr: 'Yazılım mühendisliği nedir?',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Selon l’IEEE, le génie logiciel est l’application d’une approche systématique, disciplinée et mesurable au développement, à l’exploitation et à la maintenance du logiciel. Le but : livrer un logiciel utile, fiable, à temps et dans le budget.',
          en: 'According to IEEE, software engineering is the application of a systematic, disciplined, quantifiable approach to the development, operation and maintenance of software. The goal: deliver useful, reliable software on time and within budget.',
          tr: 'IEEE’ye göre yazılım mühendisliği, yazılımın geliştirilmesine, işletilmesine ve bakımına sistematik, disiplinli ve ölçülebilir bir yaklaşımın uygulanmasıdır. Amaç: yararlı, güvenilir yazılımı zamanında ve bütçe içinde teslim etmek.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Dans les années 1960-70, on a parlé de « crise du logiciel » : projets en retard, hors budget, pleins de bugs, parfois abandonnés. Le génie logiciel est né pour y répondre avec des méthodes d’ingénieur. Un logiciel ne s’use pas comme une machine, mais il se dégrade à force de modifications mal faites.',
          en: 'In the 1960s–70s people spoke of a “software crisis”: late, over-budget, bug-ridden, sometimes abandoned projects. Software engineering was born to answer it with engineering methods. Software does not wear out like a machine, but it deteriorates through badly made changes.',
          tr: '1960-70’lerde “yazılım krizinden” söz edildi: geciken, bütçeyi aşan, hatalarla dolu, bazen terk edilen projeler. Yazılım mühendisliği buna mühendislik yöntemleriyle cevap vermek için doğdu. Yazılım bir makine gibi aşınmaz ama kötü yapılan değişikliklerle bozulur.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'Types de produits logiciels', en: 'Types of software products', tr: 'Yazılım ürün tipleri' },
      },
      {
        type: 'code',
        code: {
          fr: 'Générique (produit sur étagère) : vendu à de nombreux clients,\n  le fabricant décide des fonctions (ex. traitement de texte)\nSur mesure (spécifique)          : développé pour un client précis,\n  le client fixe les besoins (ex. système d’un hôpital)\n\nUn bon logiciel est : maintenable, fiable et sûr, efficace, utilisable.',
          en: 'Generic (off-the-shelf) product: sold to many customers,\n  the developer decides the features (e.g. word processor)\nCustomized (bespoke) product   : built for one specific customer,\n  the customer sets the requirements (e.g. a hospital’s system)\n\nGood software is: maintainable, dependable and secure, efficient, usable.',
          tr: 'Genel (hazır) ürün       : birçok müşteriye satılır,\n  özellikleri geliştirici belirler (örn. kelime işlemci)\nÖzel (ısmarlama) ürün     : belirli bir müşteri için geliştirilir,\n  gereksinimleri müşteri belirler (örn. bir hastanenin sistemi)\n\nİyi yazılım: bakımı kolay, güvenilir ve güvenli, verimli, kullanışlıdır.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Générique ou sur mesure ? (1) Microsoft Word ; (2) le système de gestion des patients d’un hôpital précis ; (3) un jeu mobile sur le Play Store ; (4) le système d’information étudiant (OBS) d’une université.',
          en: 'Generic or customized? (1) Microsoft Word; (2) the patient management system of one specific hospital; (3) a mobile game on the Play Store; (4) a university’s student information system (OBS).',
          tr: 'Genel mi, özel mi? (1) Microsoft Word; (2) belirli bir hastanenin hasta yönetim sistemi; (3) Play Store’daki bir mobil oyun; (4) bir üniversitenin öğrenci bilgi sistemi (OBS).',
        },
        solution: {
          fr: '(1) Générique. (2) Sur mesure. (3) Générique. (4) En général sur mesure, développé ou adapté pour cette université. La frontière peut bouger : un produit générique (ERP) est souvent configuré pour un client précis.',
          en: '(1) Generic. (2) Customized. (3) Generic. (4) Usually customized, built or adapted for that university. The line can blur: a generic product (an ERP) is often configured for one specific customer.',
          tr: '(1) Genel. (2) Özel. (3) Genel. (4) Genellikle özel; o üniversite için geliştirilmiş veya uyarlanmıştır. Sınır değişebilir: genel bir ürün (ERP) çoğu zaman belirli bir müşteri için yapılandırılır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi un logiciel se dégrade-t-il avec le temps, alors qu’il ne s’use pas ?',
        en: 'Why does software deteriorate over time, even though it does not wear out?',
        tr: 'Yazılım aşınmadığı halde neden zamanla bozulur?',
      },
      options: {
        fr: ['Les bits s’effacent', 'Les modifications successives ajoutent des défauts et de la complexité', 'Le processeur ralentit'],
        en: ['The bits fade away', 'Successive changes add defects and complexity', 'The processor slows down'],
        tr: ['Bitler silinir', 'Art arda yapılan değişiklikler hata ve karmaşıklık ekler', 'İşlemci yavaşlar'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Chaque changement mal maîtrisé peut introduire des bugs et rendre le code plus difficile à comprendre : c’est pour cela que la maintenance demande de la méthode.',
        en: 'Every poorly controlled change can introduce bugs and make the code harder to understand: that is why maintenance needs method.',
        tr: 'Kontrolsüz her değişiklik hata getirebilir ve kodu anlamayı zorlaştırabilir: bakımın yöntem gerektirmesinin sebebi budur.',
      },
    },
  },
  {
    id: 'se-w02-process-models',
    week: 2,
    title: {
      fr: 'Modèles de processus : cascade, V, incrémental, prototype',
      en: 'Process models: waterfall, V, incremental, prototyping',
      tr: 'Süreç modelleri: şelale, V, artımlı, prototipleme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un modèle de processus décrit l’ordre des activités : spécification des besoins, conception, réalisation, validation, évolution. Chaque modèle convient à un type de projet.',
          en: 'A process model describes the order of activities: requirements specification, design, implementation, validation, evolution. Each model suits a kind of project.',
          tr: 'Süreç modeli faaliyetlerin sırasını tanımlar: gereksinim belirleme, tasarım, gerçekleştirme, doğrulama, evrim. Her model belirli bir proje türüne uygundur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Cascade (waterfall)\nBesoins → Conception → Codage → Tests → Déploiement → Maintenance\n+ simple, bien documenté     − changements tardifs très coûteux\n\nModèle en V : chaque phase a son niveau de test\nBesoins        ↔ tests d’acceptation\nConception     ↔ tests système / d’intégration\nCodage         ↔ tests unitaires\n\nIncrémental : livrer le système par morceaux utilisables\nPrototypage : maquette rapide pour clarifier les besoins\n              (jetable ou évolutive)',
          en: 'Waterfall\nRequirements → Design → Coding → Testing → Deployment → Maintenance\n+ simple, well documented     − late changes are very costly\n\nV-model: every phase has its test level\nRequirements   ↔ acceptance tests\nDesign         ↔ system / integration tests\nCoding         ↔ unit tests\n\nIncremental: deliver the system in usable pieces\nPrototyping: quick mock-up to clarify requirements\n             (throwaway or evolutionary)',
          tr: 'Şelale (waterfall)\nGereksinimler → Tasarım → Kodlama → Test → Dağıtım → Bakım\n+ basit, iyi belgelenmiş     − geç değişiklikler çok pahalı\n\nV modeli: her aşamanın bir test seviyesi vardır\nGereksinimler  ↔ kabul testleri\nTasarım        ↔ sistem / tümleştirme testleri\nKodlama        ↔ birim testleri\n\nArtımlı: sistemi kullanılabilir parçalar halinde teslim etmek\nPrototipleme: gereksinimleri netleştirmek için hızlı taslak\n              (atılabilir veya evrimsel)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quel modèle choisir ? (1) Un logiciel de contrôle de freinage, aux besoins stables et très critiques. (2) Une start-up qui ne sait pas encore exactement ce que veulent ses utilisateurs. (3) Un grand système de gestion qu’on veut mettre en service module par module.',
          en: 'Which model fits? (1) Braking control software, with stable and very critical requirements. (2) A start-up that doesn’t yet know exactly what its users want. (3) A large management system to be put into service module by module.',
          tr: 'Hangi model uygun? (1) Gereksinimleri kararlı ve çok kritik bir fren kontrol yazılımı. (2) Kullanıcılarının tam olarak ne istediğini henüz bilmeyen bir girişim. (3) Modül modül devreye alınacak büyük bir yönetim sistemi.',
        },
        solution: {
          fr: '(1) Modèle en V (ou cascade) : besoins clairs et stables, et le V associe chaque étape à des tests rigoureux, essentiels pour un système critique. (2) Prototypage ou méthode agile : on montre vite quelque chose et on ajuste avec les retours. (3) Incrémental : chaque module livré est déjà utilisable.',
          en: '(1) V-model (or waterfall): clear, stable requirements, and the V ties each step to rigorous tests, essential for a critical system. (2) Prototyping or an agile method: show something quickly and adjust with feedback. (3) Incremental: each delivered module is already usable.',
          tr: '(1) V modeli (veya şelale): gereksinimler net ve kararlı; V her adımı kritik bir sistem için vazgeçilmez olan sıkı testlere bağlar. (2) Prototipleme veya çevik yöntem: hızlıca bir şey gösterilir ve geri bildirimle ayarlanır. (3) Artımlı: teslim edilen her modül zaten kullanılabilir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans le modèle en V, à quel niveau de test correspond l’analyse des besoins ?',
        en: 'In the V-model, which test level matches requirements analysis?',
        tr: 'V modelinde gereksinim analizi hangi test seviyesine karşılık gelir?',
      },
      options: {
        fr: ['Tests unitaires', 'Tests d’intégration', 'Tests d’acceptation'],
        en: ['Unit tests', 'Integration tests', 'Acceptance tests'],
        tr: ['Birim testleri', 'Tümleştirme testleri', 'Kabul testleri'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'Les tests d’acceptation vérifient avec le client que le système répond à ses besoins : ils sont le reflet de l’analyse des besoins, de l’autre côté du V.',
        en: 'Acceptance tests check with the customer that the system meets their needs: they mirror requirements analysis on the other side of the V.',
        tr: 'Kabul testleri, sistemin müşterinin ihtiyaçlarını karşıladığını müşteriyle birlikte kontrol eder: V’nin diğer tarafında gereksinim analizinin karşılığıdır.',
      },
    },
  },
  {
    id: 'se-w03-agile',
    week: 3,
    title: {
      fr: 'Spirale, méthodes agiles et Scrum',
      en: 'Spiral, agile methods and Scrum',
      tr: 'Spiral model, çevik yöntemler ve Scrum',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le modèle en spirale (Boehm) est guidé par les risques : chaque tour de spirale passe par quatre étapes, fixer les objectifs, analyser et réduire les risques, développer et tester, planifier le tour suivant.',
          en: 'The spiral model (Boehm) is risk-driven: each loop goes through four steps, set objectives, analyze and reduce risks, develop and test, plan the next loop.',
          tr: 'Spiral model (Boehm) risk odaklıdır: her döngü dört adımdan geçer: hedefleri belirlemek, riskleri analiz edip azaltmak, geliştirmek ve test etmek, bir sonraki döngüyü planlamak.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Le Manifeste agile (2001) préfère : les individus et leurs interactions aux processus et outils, un logiciel qui fonctionne à une documentation exhaustive, la collaboration avec le client à la négociation du contrat, l’adaptation au changement au suivi d’un plan.',
          en: 'The Agile Manifesto (2001) values: individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, responding to change over following a plan.',
          tr: 'Çevik Manifesto (2001) şunları öne çıkarır: süreçler ve araçlar yerine bireyler ve etkileşimler, kapsamlı dokümantasyon yerine çalışan yazılım, sözleşme pazarlığı yerine müşteriyle iş birliği, bir planı izlemek yerine değişime yanıt vermek.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Scrum\nRôles      : Product Owner (priorités), Scrum Master (méthode),\n             Développeurs (réalisation)\nArtefacts  : Product Backlog, Sprint Backlog, Incrément\nÉvénements : Sprint (1 à 4 semaines), Sprint Planning,\n             Daily Scrum (15 min), Sprint Review, Rétrospective\n\nXP : programmation en binôme, TDD, intégration continue\nDevOps : développement + exploitation, livraison continue (CI/CD)',
          en: 'Scrum\nRoles     : Product Owner (priorities), Scrum Master (process),\n            Developers (building)\nArtifacts : Product Backlog, Sprint Backlog, Increment\nEvents    : Sprint (1 to 4 weeks), Sprint Planning,\n            Daily Scrum (15 min), Sprint Review, Retrospective\n\nXP: pair programming, TDD, continuous integration\nDevOps: development + operations, continuous delivery (CI/CD)',
          tr: 'Scrum\nRoller      : Ürün Sahibi (öncelikler), Scrum Master (süreç),\n              Geliştiriciler (yapım)\nÇıktılar    : Ürün İş Listesi, Sprint İş Listesi, Artım\nEtkinlikler : Sprint (1-4 hafta), Sprint Planlama,\n              Günlük Scrum (15 dk), Sprint Gözden Geçirme, Retrospektif\n\nXP: eşli programlama, TDD, sürekli entegrasyon\nDevOps: geliştirme + operasyon, sürekli teslim (CI/CD)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quel rôle ou événement Scrum ? (1) Chaque matin, l’équipe se synchronise 15 minutes. (2) Quelqu’un décide de l’ordre des fonctionnalités dans le backlog. (3) À la fin du sprint, on montre le travail aux parties prenantes. (4) L’équipe se demande comment mieux travailler au prochain sprint.',
          en: 'Which Scrum role or event? (1) Every morning the team syncs for 15 minutes. (2) Someone decides the order of features in the backlog. (3) At the end of the sprint, the work is shown to stakeholders. (4) The team asks how to work better in the next sprint.',
          tr: 'Hangi Scrum rolü veya etkinliği? (1) Ekip her sabah 15 dakika eşgüdüm yapar. (2) Biri iş listesindeki özelliklerin sırasına karar verir. (3) Sprint sonunda iş paydaşlara gösterilir. (4) Ekip bir sonraki sprintte nasıl daha iyi çalışacağını tartışır.',
        },
        solution: {
          fr: '(1) Daily Scrum. (2) Product Owner, qui gère le Product Backlog. (3) Sprint Review : on inspecte le produit. (4) Rétrospective : on inspecte la façon de travailler. Piège classique : confondre la review (le produit) et la rétrospective (le processus).',
          en: '(1) Daily Scrum. (2) Product Owner, who manages the Product Backlog. (3) Sprint Review: inspecting the product. (4) Retrospective: inspecting the way of working. Classic trap: mixing up the review (the product) and the retrospective (the process).',
          tr: '(1) Günlük Scrum. (2) Ürün İş Listesini yöneten Ürün Sahibi. (3) Sprint Gözden Geçirme: ürün incelenir. (4) Retrospektif: çalışma şekli incelenir. Klasik tuzak: gözden geçirme (ürün) ile retrospektifi (süreç) karıştırmak.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel modèle de processus est guidé par l’analyse des risques ?',
        en: 'Which process model is driven by risk analysis?',
        tr: 'Hangi süreç modeli risk analizine dayanır?',
      },
      options: { fr: ['Cascade', 'Spirale', 'Prototypage jetable'], en: ['Waterfall', 'Spiral', 'Throwaway prototyping'], tr: ['Şelale', 'Spiral', 'Atılabilir prototipleme'] },
      answerIndex: 1,
      explanation: {
        fr: 'Chaque tour de la spirale de Boehm comporte une étape d’analyse et de réduction des risques avant de développer.',
        en: 'Every loop of Boehm’s spiral includes a risk analysis and reduction step before development.',
        tr: 'Boehm spiralinin her döngüsü, geliştirmeden önce bir risk analizi ve azaltma adımı içerir.',
      },
    },
  },
  {
    id: 'se-w04-planning',
    week: 4,
    title: {
      fr: 'Planification et chemin critique',
      en: 'Planning and the critical path',
      tr: 'Planlama ve kritik yol',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Planifier, c’est découper le projet en tâches, estimer leur durée, trouver leurs dépendances et affecter les personnes. Le diagramme de Gantt montre les tâches sur une ligne du temps. La méthode du chemin critique (CPM) trouve la suite de tâches la plus longue : elle fixe la durée minimale du projet.',
          en: 'Planning means splitting the project into tasks, estimating their duration, finding their dependencies and assigning people. A Gantt chart shows the tasks on a timeline. The critical path method (CPM) finds the longest chain of tasks: it sets the project’s minimum duration.',
          tr: 'Planlamak, projeyi görevlere bölmek, sürelerini tahmin etmek, bağımlılıklarını bulmak ve kişileri atamaktır. Gantt şeması görevleri bir zaman çizelgesinde gösterir. Kritik yol yöntemi (CPM) en uzun görev zincirini bulur: projenin en kısa süresini o belirler.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Une tâche du chemin critique n’a aucune marge (slack) : si elle prend du retard, tout le projet est en retard. Les autres tâches ont une marge = date de fin au plus tard − date de fin au plus tôt.',
          en: 'A task on the critical path has no slack: if it is late, the whole project is late. Other tasks have slack = latest finish − earliest finish.',
          tr: 'Kritik yoldaki bir görevin hiç bolluğu (slack) yoktur: gecikirse bütün proje gecikir. Diğer görevlerin bolluğu = en geç bitiş − en erken bitiştir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Trouve le chemin critique, la durée du projet et la marge de B et D.',
          en: 'Find the critical path, the project duration and the slack of B and D.',
          tr: 'Kritik yolu, proje süresini ve B ile D’nin bolluğunu bul.',
        },
        code: {
          fr: 'Tâche | Durée (jours) | Après\n  A   |      3        |  –\n  B   |      2        |  A\n  C   |      4        |  A\n  D   |      2        |  B\n  E   |      3        |  C\n  F   |      1        |  D, E',
          en: 'Task | Duration (days) | After\n  A  |       3         |  –\n  B  |       2         |  A\n  C  |       4         |  A\n  D  |       2         |  B\n  E  |       3         |  C\n  F  |       1         |  D, E',
          tr: 'Görev | Süre (gün) | Önce gelen\n  A   |     3      |  –\n  B   |     2      |  A\n  C   |     4      |  A\n  D   |     2      |  B\n  E   |     3      |  C\n  F   |     1      |  D, E',
        },
        solution: {
          fr: 'Deux chemins : A-B-D-F = 3 + 2 + 2 + 1 = 8 jours, et A-C-E-F = 3 + 4 + 3 + 1 = 11 jours. Le chemin critique est A-C-E-F et le projet dure 11 jours. F doit commencer au jour 10 au plus tard ; D finit au plus tôt au jour 7 (3 + 2 + 2), donc D a 3 jours de marge, et B aussi (il peut glisser de 3 jours sans retarder D au-delà du jour 10).',
          en: 'Two paths: A-B-D-F = 3 + 2 + 2 + 1 = 8 days, and A-C-E-F = 3 + 4 + 3 + 1 = 11 days. The critical path is A-C-E-F and the project takes 11 days. F must start by day 10 at the latest; D finishes at the earliest on day 7 (3 + 2 + 2), so D has 3 days of slack, and so does B (it can slip 3 days without pushing D past day 10).',
          tr: 'İki yol var: A-B-D-F = 3 + 2 + 2 + 1 = 8 gün ve A-C-E-F = 3 + 4 + 3 + 1 = 11 gün. Kritik yol A-C-E-F’dir ve proje 11 gün sürer. F en geç 10. günde başlamalıdır; D en erken 7. günde biter (3 + 2 + 2), yani D’nin 3 gün bolluğu vardır, B’nin de (D’yi 10. günden öteye itmeden 3 gün kayabilir).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est la marge d’une tâche sur le chemin critique ?',
        en: 'What is the slack of a task on the critical path?',
        tr: 'Kritik yoldaki bir görevin bolluğu nedir?',
      },
      options: {
        fr: ['Zéro', 'La moitié de sa durée', 'La durée du projet'],
        en: ['Zero', 'Half its duration', 'The project duration'],
        tr: ['Sıfır', 'Süresinin yarısı', 'Proje süresi'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Par définition, le chemin critique ne laisse aucune marge : le moindre retard sur l’une de ses tâches retarde la fin du projet.',
        en: 'By definition, the critical path leaves no slack: the slightest delay on one of its tasks delays the end of the project.',
        tr: 'Tanım gereği kritik yol hiç bolluk bırakmaz: görevlerinden birindeki en küçük gecikme projenin sonunu geciktirir.',
      },
    },
  },
  {
    id: 'se-w05-estimation',
    week: 5,
    title: {
      fr: 'Métriques et estimation (COCOMO)',
      en: 'Metrics and estimation (COCOMO)',
      tr: 'Ölçütler ve kestirim (COCOMO)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Pour estimer un projet, on mesure sa taille : en lignes de code (LOC, KLOC = milliers de lignes) ou en points de fonction, qui comptent ce que le logiciel fait pour l’utilisateur (entrées, sorties, requêtes, fichiers internes, interfaces externes), indépendamment du langage.',
          en: 'To estimate a project, measure its size: in lines of code (LOC, KLOC = thousands of lines) or in function points, which count what the software does for the user (inputs, outputs, inquiries, internal files, external interfaces), independent of the language.',
          tr: 'Bir projeyi tahmin etmek için boyutu ölçülür: kod satırı (LOC, KLOC = bin satır) veya yazılımın kullanıcı için yaptıklarını (girdiler, çıktılar, sorgular, iç dosyalar, dış arayüzler) dilden bağımsız sayan fonksiyon noktalarıyla.',
        },
      },
      {
        type: 'heading',
        text: { fr: 'COCOMO de base (Boehm)', en: 'Basic COCOMO (Boehm)', tr: 'Temel COCOMO (Boehm)' },
      },
      {
        type: 'code',
        code: {
          fr: 'Effort  E = a × (KLOC)^b    personnes-mois\nDurée   D = c × E^d          mois\nÉquipe  = E / D              personnes\n\nMode            a     b      c     d\nOrganique      2,4   1,05   2,5   0,38   (petite équipe, projet connu)\nSemi-détaché   3,0   1,12   2,5   0,35\nEmbarqué       3,6   1,20   2,5   0,32   (fortes contraintes)',
          en: 'Effort  E = a × (KLOC)^b    person-months\nTime    D = c × E^d          months\nStaff   = E / D              people\n\nMode            a     b      c     d\nOrganic        2.4   1.05   2.5   0.38   (small team, familiar project)\nSemi-detached  3.0   1.12   2.5   0.35\nEmbedded       3.6   1.20   2.5   0.32   (tight constraints)',
          tr: 'Efor   E = a × (KLOC)^b    kişi-ay\nSüre   D = c × E^d          ay\nEkip   = E / D              kişi\n\nMod             a     b      c     d\nOrganik        2,4   1,05   2,5   0,38   (küçük ekip, bilinen proje)\nYarı ayrık     3,0   1,12   2,5   0,35\nGömülü         3,6   1,20   2,5   0,32   (sıkı kısıtlar)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Loi de Brooks : ajouter des personnes à un projet en retard le retarde encore plus, car il faut les former et communiquer avec elles.',
          en: 'Brooks’s law: adding people to a late project makes it later, because they must be trained and communicated with.',
          tr: 'Brooks yasası: geciken bir projeye kişi eklemek onu daha da geciktirir, çünkü onları eğitmek ve onlarla iletişim kurmak gerekir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un projet organique est estimé à 32 KLOC. Calcule l’effort, la durée et la taille moyenne de l’équipe avec COCOMO de base.',
          en: 'An organic project is estimated at 32 KLOC. Compute the effort, time and average team size with basic COCOMO.',
          tr: 'Organik bir projenin 32 KLOC olduğu tahmin ediliyor. Temel COCOMO ile eforu, süreyi ve ortalama ekip büyüklüğünü hesapla.',
        },
        solution: {
          fr: 'E = 2,4 × 32^1,05. 32^1,05 ≈ 38,05, donc E ≈ 91,3 personnes-mois. D = 2,5 × 91,3^0,38 ≈ 2,5 × 5,56 ≈ 13,9 mois. Équipe ≈ 91,3 / 13,9 ≈ 6,6, soit environ 7 personnes en moyenne.',
          en: 'E = 2.4 × 32^1.05. 32^1.05 ≈ 38.05, so E ≈ 91.3 person-months. D = 2.5 × 91.3^0.38 ≈ 2.5 × 5.56 ≈ 13.9 months. Staff ≈ 91.3 / 13.9 ≈ 6.6, about 7 people on average.',
          tr: 'E = 2,4 × 32^1,05. 32^1,05 ≈ 38,05, yani E ≈ 91,3 kişi-ay. D = 2,5 × 91,3^0,38 ≈ 2,5 × 5,56 ≈ 13,9 ay. Ekip ≈ 91,3 / 13,9 ≈ 6,6, yani ortalama yaklaşık 7 kişi.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel mode COCOMO convient à une petite équipe expérimentée sur un projet qu’elle connaît bien ?',
        en: 'Which COCOMO mode suits a small experienced team on a project it knows well?',
        tr: 'İyi bildiği bir projede çalışan küçük ve deneyimli bir ekip için hangi COCOMO modu uygundur?',
      },
      options: { fr: ['Organique', 'Semi-détaché', 'Embarqué'], en: ['Organic', 'Semi-detached', 'Embedded'], tr: ['Organik', 'Yarı ayrık', 'Gömülü'] },
      answerIndex: 0,
      explanation: {
        fr: 'Le mode organique décrit les projets simples et familiers. Le mode embarqué correspond aux contraintes fortes (matériel, temps réel), le semi-détaché est entre les deux.',
        en: 'Organic mode describes simple, familiar projects. Embedded mode matches tight constraints (hardware, real time), and semi-detached sits in between.',
        tr: 'Organik mod basit ve tanıdık projeleri tanımlar. Gömülü mod sıkı kısıtlara (donanım, gerçek zaman) karşılık gelir, yarı ayrık ise ikisinin arasındadır.',
      },
    },
  },
  {
    id: 'se-w06-risk',
    week: 6,
    title: { fr: 'Analyse des risques', en: 'Risk analysis', tr: 'Risk analizi' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un risque est un événement possible qui nuirait au projet. On distingue les risques de projet (planning, ressources), de produit (qualité, performance) et métier (marché, concurrence). La gestion des risques suit quatre étapes : identifier, analyser, planifier, surveiller.',
          en: 'A risk is a possible event that would harm the project. There are project risks (schedule, resources), product risks (quality, performance) and business risks (market, competition). Risk management has four steps: identify, analyze, plan, monitor.',
          tr: 'Risk, projeye zarar verebilecek olası bir olaydır. Proje riskleri (takvim, kaynaklar), ürün riskleri (kalite, performans) ve iş riskleri (pazar, rekabet) vardır. Risk yönetimi dört adımdan oluşur: belirlemek, analiz etmek, planlamak, izlemek.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Exposition au risque = probabilité × impact\n\nStratégies :\nÉviter     : changer le plan pour que le risque disparaisse\nRéduire    : diminuer la probabilité ou l’impact\nTransférer : le faire porter par un autre (assurance, sous-traitant)\nAccepter   : prévoir un plan de secours',
          en: 'Risk exposure = probability × impact\n\nStrategies:\nAvoid    : change the plan so the risk disappears\nMitigate : lower the probability or the impact\nTransfer : let someone else carry it (insurance, contractor)\nAccept   : prepare a contingency plan',
          tr: 'Risk maruziyeti = olasılık × etki\n\nStratejiler:\nKaçınmak   : riskin ortadan kalkması için planı değiştirmek\nAzaltmak   : olasılığı veya etkiyi düşürmek\nAktarmak   : başkasına taşıtmak (sigorta, taşeron)\nKabullenmek: bir yedek plan hazırlamak',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Classe ces risques par exposition (impact sur 10) et propose une stratégie pour chacun : (1) un développeur clé quitte l’équipe, probabilité 0,3, impact 8 ; (2) les besoins changent souvent, 0,7 et 5 ; (3) panne du serveur de production, 0,1 et 9.',
          en: 'Rank these risks by exposure (impact out of 10) and propose a strategy for each: (1) a key developer leaves the team, probability 0.3, impact 8; (2) requirements change often, 0.7 and 5; (3) production server outage, 0.1 and 9.',
          tr: 'Bu riskleri maruziyete göre sırala (etki 10 üzerinden) ve her biri için bir strateji öner: (1) kilit bir geliştirici ekipten ayrılır, olasılık 0,3, etki 8; (2) gereksinimler sık değişir, 0,7 ve 5; (3) üretim sunucusu çöker, 0,1 ve 9.',
        },
        solution: {
          fr: 'Expositions : (2) 0,7 × 5 = 3,5 ; (1) 0,3 × 8 = 2,4 ; (3) 0,1 × 9 = 0,9. Ordre : 2, 1, 3. (2) Réduire : sprints courts et validation fréquente avec le client. (1) Réduire : documentation, revue de code, binômes pour partager les connaissances. (3) Réduire ou transférer : sauvegardes, serveur de secours, hébergeur avec garantie de disponibilité.',
          en: 'Exposures: (2) 0.7 × 5 = 3.5; (1) 0.3 × 8 = 2.4; (3) 0.1 × 9 = 0.9. Order: 2, 1, 3. (2) Mitigate: short sprints and frequent validation with the customer. (1) Mitigate: documentation, code reviews, pairing to share knowledge. (3) Mitigate or transfer: backups, a standby server, a host with an availability guarantee.',
          tr: 'Maruziyetler: (2) 0,7 × 5 = 3,5; (1) 0,3 × 8 = 2,4; (3) 0,1 × 9 = 0,9. Sıra: 2, 1, 3. (2) Azaltmak: kısa sprintler ve müşteriyle sık doğrulama. (1) Azaltmak: dokümantasyon, kod gözden geçirme, bilgi paylaşımı için eşli çalışma. (3) Azaltmak veya aktarmak: yedekler, yedek sunucu, erişilebilirlik garantisi veren barındırma.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Comment calcule-t-on l’exposition à un risque ?',
        en: 'How is risk exposure computed?',
        tr: 'Risk maruziyeti nasıl hesaplanır?',
      },
      options: {
        fr: ['Probabilité + impact', 'Probabilité × impact', 'Impact − probabilité'],
        en: ['Probability + impact', 'Probability × impact', 'Impact − probability'],
        tr: ['Olasılık + etki', 'Olasılık × etki', 'Etki − olasılık'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'On multiplie la probabilité par l’impact (la perte) : un risque peu probable mais grave peut peser autant qu’un risque fréquent mais léger.',
        en: 'Multiply the probability by the impact (the loss): an unlikely but severe risk can weigh as much as a frequent but mild one.',
        tr: 'Olasılık etkiyle (kayıpla) çarpılır: olası olmayan ama ağır bir risk, sık ama hafif bir risk kadar ağır basabilir.',
      },
    },
  },
  {
    id: 'se-w07-requirements',
    week: 7,
    title: {
      fr: 'Ingénierie des besoins et révision de la vize',
      en: 'Requirements engineering and midterm review',
      tr: 'Gereksinim mühendisliği ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un besoin fonctionnel décrit ce que le système doit faire (« l’étudiant peut emprunter un livre »). Un besoin non fonctionnel décrit une qualité ou une contrainte : performance, sécurité, fiabilité, ergonomie, portabilité (« la recherche répond en moins de 2 secondes »).',
          en: 'A functional requirement describes what the system must do (“a student can borrow a book”). A non-functional requirement describes a quality or constraint: performance, security, reliability, usability, portability (“search answers in under 2 seconds”).',
          tr: 'İşlevsel gereksinim sistemin ne yapması gerektiğini tanımlar (“öğrenci kitap ödünç alabilir”). İşlevsel olmayan gereksinim bir nitelik veya kısıt tanımlar: performans, güvenlik, güvenilirlik, kullanılabilirlik, taşınabilirlik (“arama 2 saniyeden kısa sürede yanıt verir”).',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'On recueille les besoins par entretiens, questionnaires, observation et ateliers, puis on les écrit dans un cahier des charges (SRS, norme IEEE 830). Un bon besoin est correct, non ambigu, complet, cohérent et vérifiable.',
          en: 'Requirements are gathered through interviews, questionnaires, observation and workshops, then written in a specification (SRS, IEEE 830 standard). A good requirement is correct, unambiguous, complete, consistent and verifiable.',
          tr: 'Gereksinimler görüşmeler, anketler, gözlem ve çalıştaylarla toplanır, ardından bir gereksinim belgesine (SRS, IEEE 830 standardı) yazılır. İyi bir gereksinim doğru, açık, eksiksiz, tutarlı ve doğrulanabilirdir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Cas d’utilisation : Emprunter un livre\nActeur       : Étudiant\nPré-condition : l’étudiant est connecté et n’a pas de retard\nScénario principal :\n  1. L’étudiant cherche le livre\n  2. Le système affiche les exemplaires disponibles\n  3. L’étudiant confirme l’emprunt\n  4. Le système enregistre le prêt et la date de retour\nAlternative 2a : aucun exemplaire libre → proposer une réservation',
          en: 'Use case: Borrow a book\nActor        : Student\nPrecondition : the student is logged in and has no overdue book\nMain flow:\n  1. The student searches for the book\n  2. The system shows the available copies\n  3. The student confirms the loan\n  4. The system records the loan and the return date\nAlternative 2a: no free copy → offer a reservation',
          tr: 'Kullanım durumu: Kitap ödünç almak\nAktör       : Öğrenci\nÖn koşul    : öğrenci oturum açmıştır ve gecikmiş kitabı yoktur\nAna akış:\n  1. Öğrenci kitabı arar\n  2. Sistem mevcut kopyaları gösterir\n  3. Öğrenci ödünç almayı onaylar\n  4. Sistem ödüncü ve iade tarihini kaydeder\nAlternatif 2a: boş kopya yok → rezervasyon önerilir',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Définition IEEE, crise du logiciel, générique / sur mesure\n✔ Cascade, V, incrémental, prototypage : avantages et limites\n✔ Spirale, Manifeste agile, Scrum (rôles, artefacts, événements)\n✔ Gantt, chemin critique, marges\n✔ LOC, points de fonction, COCOMO de base, loi de Brooks\n✔ Risques : exposition = probabilité × impact, stratégies\n✔ Besoins fonctionnels / non fonctionnels, cas d’utilisation, SRS',
          en: '✔ IEEE definition, software crisis, generic / customized\n✔ Waterfall, V, incremental, prototyping: pros and limits\n✔ Spiral, Agile Manifesto, Scrum (roles, artifacts, events)\n✔ Gantt, critical path, slack\n✔ LOC, function points, basic COCOMO, Brooks’s law\n✔ Risks: exposure = probability × impact, strategies\n✔ Functional / non-functional requirements, use cases, SRS',
          tr: '✔ IEEE tanımı, yazılım krizi, genel / özel ürün\n✔ Şelale, V, artımlı, prototipleme: artılar ve sınırlar\n✔ Spiral, Çevik Manifesto, Scrum (roller, çıktılar, etkinlikler)\n✔ Gantt, kritik yol, bolluk\n✔ LOC, fonksiyon noktaları, temel COCOMO, Brooks yasası\n✔ Riskler: maruziyet = olasılık × etki, stratejiler\n✔ İşlevsel / işlevsel olmayan gereksinimler, kullanım durumu, SRS',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pour une application de bibliothèque, classe ces besoins : (1) l’étudiant peut prolonger un prêt ; (2) l’application fonctionne sur Android et iOS ; (3) les mots de passe sont chiffrés ; (4) le bibliothécaire peut ajouter un livre ; (5) l’application doit être « rapide ». Lequel est mal écrit ?',
          en: 'For a library app, classify these requirements: (1) a student can renew a loan; (2) the app runs on Android and iOS; (3) passwords are encrypted; (4) the librarian can add a book; (5) the app must be “fast”. Which one is badly written?',
          tr: 'Bir kütüphane uygulaması için bu gereksinimleri sınıflandır: (1) öğrenci ödüncü uzatabilir; (2) uygulama Android ve iOS’ta çalışır; (3) parolalar şifrelenir; (4) kütüphaneci kitap ekleyebilir; (5) uygulama “hızlı” olmalı. Hangisi kötü yazılmış?',
        },
        solution: {
          fr: 'Fonctionnels : (1) et (4). Non fonctionnels : (2) portabilité, (3) sécurité, (5) performance. Le (5) est mal écrit : « rapide » n’est pas vérifiable. Il faut une mesure, par exemple « 95 % des recherches répondent en moins de 2 secondes ».',
          en: 'Functional: (1) and (4). Non-functional: (2) portability, (3) security, (5) performance. (5) is badly written: “fast” cannot be verified. It needs a measure, for example “95% of searches answer in under 2 seconds”.',
          tr: 'İşlevsel: (1) ve (4). İşlevsel olmayan: (2) taşınabilirlik, (3) güvenlik, (5) performans. (5) kötü yazılmıştır: “hızlı” doğrulanamaz. Bir ölçü gerekir, örneğin “aramaların %95’i 2 saniyeden kısa sürede yanıt verir”.',
        },
      },
    ],
    quiz: {
      question: {
        fr: '« Le système doit répondre en moins de 2 secondes » est un besoin…',
        en: '“The system must respond in under 2 seconds” is a…',
        tr: '“Sistem 2 saniyeden kısa sürede yanıt vermelidir” bir…',
      },
      options: {
        fr: ['fonctionnel', 'non fonctionnel', 'cas d’utilisation'],
        en: ['functional requirement', 'non-functional requirement', 'use case'],
        tr: ['işlevsel gereksinimdir', 'işlevsel olmayan gereksinimdir', 'kullanım durumudur'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Il ne dit pas ce que fait le système, mais avec quelle qualité (performance) : c’est un besoin non fonctionnel, et il est bien écrit car mesurable.',
        en: 'It does not say what the system does, but with which quality (performance): it is non-functional, and well written because it is measurable.',
        tr: 'Sistemin ne yaptığını değil, hangi nitelikle (performans) yaptığını söyler: işlevsel olmayan bir gereksinimdir ve ölçülebilir olduğu için iyi yazılmıştır.',
      },
    },
  },
  {
    id: 'se-w08-uml',
    week: 8,
    title: { fr: 'Conception avec UML', en: 'Design with UML', tr: 'UML ile tasarım' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'UML (Unified Modeling Language) est le langage graphique standard pour modéliser un logiciel. Les trois diagrammes les plus demandés : cas d’utilisation (qui fait quoi avec le système), classes (la structure) et séquence (les échanges de messages dans le temps).',
          en: 'UML (Unified Modeling Language) is the standard graphical language for modeling software. The three most asked diagrams: use case (who does what with the system), class (the structure) and sequence (message exchanges over time).',
          tr: 'UML (Birleşik Modelleme Dili) yazılımı modellemek için standart grafik dildir. En çok sorulan üç diyagram: kullanım durumu (sistemle kim ne yapar), sınıf (yapı) ve sıralama (zaman içindeki mesaj alışverişi).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Diagramme de classes\n+ public   − privé   # protégé\nAssociation        A ——— B      multiplicités : 1, 0..1, *, 1..*\nHéritage           B ——▷ A      (triangle vide vers la classe mère)\nAgrégation         A ◇—— B      (A contient B, B peut exister seul)\nComposition        A ◆—— B      (B meurt avec A)\n\nCas d’utilisation : <<include>> = toujours inclus\n                    <<extend>>  = ajouté sous condition',
          en: 'Class diagram\n+ public   − private   # protected\nAssociation        A ——— B      multiplicities: 1, 0..1, *, 1..*\nInheritance        B ——▷ A      (hollow triangle toward the parent)\nAggregation        A ◇—— B      (A contains B, B can live alone)\nComposition        A ◆—— B      (B dies with A)\n\nUse cases: <<include>> = always included\n           <<extend>>  = added under a condition',
          tr: 'Sınıf diyagramı\n+ public   − private   # protected\nİlişki (association)  A ——— B   çokluklar: 1, 0..1, *, 1..*\nKalıtım               B ——▷ A   (boş üçgen üst sınıfa doğru)\nKümeleme (aggregation) A ◇—— B  (A, B’yi içerir; B tek başına yaşayabilir)\nBileşim (composition) A ◆—— B   (B, A ile birlikte yok olur)\n\nKullanım durumu: <<include>> = her zaman dahil\n                 <<extend>>  = bir koşulla eklenir',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Propose un diagramme de classes simple pour une bibliothèque : des membres empruntent des livres ; un prêt a une date de début et une date de retour ; un livre a un ISBN et un titre.',
          en: 'Propose a simple class diagram for a library: members borrow books; a loan has a start date and a due date; a book has an ISBN and a title.',
          tr: 'Bir kütüphane için basit bir sınıf diyagramı öner: üyeler kitap ödünç alır; bir ödüncün başlangıç ve iade tarihi vardır; bir kitabın ISBN’i ve başlığı vardır.',
        },
        solution: {
          fr: 'Classes : Membre (−nom, −numero ; +emprunter(livre)), Livre (−isbn, −titre ; +estDisponible()), Pret (−dateDebut, −dateRetour ; +prolonger()). Associations : Membre 1 ——— 0..* Pret (un membre a plusieurs prêts) et Pret 0..* ——— 1 Livre (un livre peut être prêté plusieurs fois dans le temps). Pret est une classe à part, car le prêt a ses propres attributs (les dates).',
          en: 'Classes: Member (−name, −number; +borrow(book)), Book (−isbn, −title; +isAvailable()), Loan (−startDate, −dueDate; +renew()). Associations: Member 1 ——— 0..* Loan (a member has several loans) and Loan 0..* ——— 1 Book (a book can be lent many times over time). Loan is its own class, because a loan has its own attributes (the dates).',
          tr: 'Sınıflar: Uye (−ad, −numara; +oduncAl(kitap)), Kitap (−isbn, −baslik; +musaitMi()), Odunc (−baslangicTarihi, −iadeTarihi; +uzat()). İlişkiler: Uye 1 ——— 0..* Odunc (bir üyenin birden çok ödüncü olur) ve Odunc 0..* ——— 1 Kitap (bir kitap zaman içinde birçok kez ödünç verilebilir). Odunc ayrı bir sınıftır, çünkü ödüncün kendi özellikleri (tarihler) vardır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que représente un losange plein (◆) dans un diagramme de classes ?',
        en: 'What does a filled diamond (◆) mean in a class diagram?',
        tr: 'Sınıf diyagramında dolu bir eşkenar dörtgen (◆) neyi gösterir?',
      },
      options: { fr: ['L’héritage', 'L’agrégation', 'La composition'], en: ['Inheritance', 'Aggregation', 'Composition'], tr: ['Kalıtım', 'Kümeleme', 'Bileşim'] },
      answerIndex: 2,
      explanation: {
        fr: 'La composition (◆) est une relation forte : les parties disparaissent avec le tout, comme les pièces d’une maison. L’agrégation (◇) est plus faible, l’héritage est un triangle.',
        en: 'Composition (◆) is a strong relationship: the parts disappear with the whole, like the rooms of a house. Aggregation (◇) is weaker, inheritance is a triangle.',
        tr: 'Bileşim (◆) güçlü bir ilişkidir: parçalar bütünle birlikte yok olur, bir evin odaları gibi. Kümeleme (◇) daha zayıftır, kalıtım ise bir üçgendir.',
      },
    },
  },
  {
    id: 'se-w09-design-principles',
    week: 9,
    title: {
      fr: 'Couplage, cohésion et patrons de conception',
      en: 'Coupling, cohesion and design patterns',
      tr: 'Bağlaşım, uyum ve tasarım kalıpları',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une bonne conception découpe le logiciel en modules avec un couplage faible (les modules dépendent peu les uns des autres) et une cohésion forte (chaque module fait une seule chose bien définie). Ainsi, on peut modifier un module sans casser les autres.',
          en: 'A good design splits software into modules with low coupling (modules depend little on each other) and high cohesion (each module does one well-defined thing). That way a module can change without breaking the others.',
          tr: 'İyi bir tasarım yazılımı düşük bağlaşımlı (modüller birbirine az bağımlı) ve yüksek uyumlu (her modül tek ve iyi tanımlı bir iş yapar) modüllere böler. Böylece bir modül diğerlerini bozmadan değiştirilebilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Couplage, du pire au meilleur :\ncontenu → commun (variables globales) → contrôle (drapeaux)\n→ timbre (structure entière) → données (paramètres simples)\n\nCohésion, de la pire à la meilleure :\ncoïncidente → logique → temporelle → procédurale\n→ communicationnelle → séquentielle → fonctionnelle\n\nPatrons : MVC (modèle / vue / contrôleur), Singleton (une seule\ninstance), Observer (prévenir les abonnés), Factory (créer des objets)\nArchitectures : en couches, client-serveur, microservices',
          en: 'Coupling, from worst to best:\ncontent → common (global variables) → control (flags)\n→ stamp (whole structure) → data (simple parameters)\n\nCohesion, from worst to best:\ncoincidental → logical → temporal → procedural\n→ communicational → sequential → functional\n\nPatterns: MVC (model / view / controller), Singleton (a single\ninstance), Observer (notify subscribers), Factory (create objects)\nArchitectures: layered, client-server, microservices',
          tr: 'Bağlaşım, en kötüden en iyiye:\niçerik → ortak (global değişkenler) → kontrol (bayraklar)\n→ damga (bütün yapı) → veri (basit parametreler)\n\nUyum, en kötüden en iyiye:\nrastlantısal → mantıksal → zamansal → yordamsal\n→ iletişimsel → ardışık → işlevsel\n\nKalıplar: MVC (model / görünüm / denetleyici), Singleton (tek\nörnek), Observer (abonelere haber ver), Factory (nesne üret)\nMimariler: katmanlı, istemci-sunucu, mikro hizmetler',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Évalue ces modules : (1) un module « Utils » qui imprime des factures, calcule la TVA et ouvre la connexion à la base de données ; (2) deux modules qui communiquent en lisant et modifiant la même variable globale ; (3) une fonction calculerMoyenne(notes) qui ne fait que renvoyer la moyenne de la liste reçue.',
          en: 'Evaluate these modules: (1) a “Utils” module that prints invoices, computes VAT and opens the database connection; (2) two modules that communicate by reading and changing the same global variable; (3) a function computeAverage(grades) that only returns the average of the list it receives.',
          tr: 'Bu modülleri değerlendir: (1) fatura yazdıran, KDV hesaplayan ve veritabanı bağlantısını açan bir “Utils” modülü; (2) aynı global değişkeni okuyup değiştirerek haberleşen iki modül; (3) yalnızca aldığı listenin ortalamasını döndüren ortalamaHesapla(notlar) fonksiyonu.',
        },
        solution: {
          fr: '(1) Cohésion coïncidente, la pire : les tâches n’ont aucun rapport ; il faut séparer en trois modules. (2) Couplage commun, mauvais : un changement de la variable peut casser l’autre module sans qu’on le voie ; il faut passer les données en paramètres. (3) Cohésion fonctionnelle et couplage de données : c’est l’idéal.',
          en: '(1) Coincidental cohesion, the worst: the tasks are unrelated; split it into three modules. (2) Common coupling, bad: a change to the variable can silently break the other module; pass the data as parameters instead. (3) Functional cohesion and data coupling: the ideal.',
          tr: '(1) Rastlantısal uyum, en kötüsü: görevlerin birbiriyle ilgisi yok; üç modüle ayrılmalı. (2) Ortak bağlaşım, kötü: değişkendeki bir değişiklik diğer modülü fark edilmeden bozabilir; veriler parametre olarak geçirilmeli. (3) İşlevsel uyum ve veri bağlaşımı: ideal olan budur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle combinaison vise une bonne conception ?',
        en: 'Which combination does a good design aim for?',
        tr: 'İyi bir tasarım hangi birleşimi hedefler?',
      },
      options: {
        fr: ['Couplage fort, cohésion forte', 'Couplage faible, cohésion forte', 'Couplage faible, cohésion faible'],
        en: ['High coupling, high cohesion', 'Low coupling, high cohesion', 'Low coupling, low cohesion'],
        tr: ['Yüksek bağlaşım, yüksek uyum', 'Düşük bağlaşım, yüksek uyum', 'Düşük bağlaşım, düşük uyum'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Des modules indépendants (couplage faible) et centrés sur une seule tâche (cohésion forte) sont plus faciles à comprendre, tester, réutiliser et modifier.',
        en: 'Independent modules (low coupling) focused on a single task (high cohesion) are easier to understand, test, reuse and change.',
        tr: 'Bağımsız (düşük bağlaşım) ve tek bir göreve odaklanmış (yüksek uyum) modüller daha kolay anlaşılır, test edilir, yeniden kullanılır ve değiştirilir.',
      },
    },
  },
  {
    id: 'se-w10-implementation',
    week: 10,
    title: {
      fr: 'Réalisation : code propre, Git et revue',
      en: 'Implementation: clean code, Git and reviews',
      tr: 'Gerçekleştirim: temiz kod, Git ve gözden geçirme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une équipe suit des normes de codage : noms clairs, fonctions courtes, pas de « nombres magiques », commentaires utiles. Le code est géré avec un système de versions comme Git : commits, branches, fusions (merge) et demandes de fusion (pull requests) relues par un collègue avant d’entrer dans la branche principale.',
          en: 'A team follows coding standards: clear names, short functions, no “magic numbers”, useful comments. Code is managed with a version control system like Git: commits, branches, merges and pull requests reviewed by a teammate before entering the main branch.',
          tr: 'Bir ekip kodlama standartlarına uyar: açık adlar, kısa fonksiyonlar, “sihirli sayı” yok, yararlı yorumlar. Kod Git gibi bir sürüm kontrol sistemiyle yönetilir: commit’ler, dallar, birleştirmeler (merge) ve ana dala girmeden önce bir ekip arkadaşının incelediği birleştirme istekleri (pull request).',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'La refactorisation améliore la structure du code sans changer son comportement visible : renommer, extraire une fonction, supprimer une duplication. Les tests automatiques garantissent que rien n’a été cassé.',
          en: 'Refactoring improves the structure of code without changing its visible behavior: rename, extract a function, remove duplication. Automated tests make sure nothing broke.',
          tr: 'Yeniden düzenleme (refactoring), kodun görünür davranışını değiştirmeden yapısını iyileştirir: yeniden adlandırma, fonksiyon çıkarma, tekrarı kaldırma. Otomatik testler hiçbir şeyin bozulmadığını garanti eder.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Trouve les problèmes de ce code et propose une version propre.',
          en: 'Find the problems in this code and propose a clean version.',
          tr: 'Bu koddaki sorunları bul ve temiz bir sürüm öner.',
        },
        code: 'def f(l):\n    t = 0\n    for i in range(len(l)):\n        t = t + l[i] * 1.18\n    return t',
        solution: {
          fr: 'Problèmes : noms sans sens (f, l, t), nombre magique 1.18 (une taxe de 18 % ?), boucle par indice inutile. Version propre : TAX_RATE = 0.18, puis def total_with_tax(prices): return sum(price * (1 + TAX_RATE) for price in prices). Le comportement est le même, mais le code se lit tout seul et le taux se change à un seul endroit.',
          en: 'Problems: meaningless names (f, l, t), magic number 1.18 (an 18% tax?), needless index loop. Clean version: TAX_RATE = 0.18, then def total_with_tax(prices): return sum(price * (1 + TAX_RATE) for price in prices). Same behavior, but the code reads by itself and the rate changes in one place.',
          tr: 'Sorunlar: anlamsız adlar (f, l, t), sihirli sayı 1.18 (%18’lik bir vergi mi?), gereksiz indisli döngü. Temiz sürüm: TAX_RATE = 0.18, ardından def total_with_tax(prices): return sum(price * (1 + TAX_RATE) for price in prices). Davranış aynı, ama kod kendini anlatır ve oran tek bir yerde değişir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que doit garantir une refactorisation ?',
        en: 'What must a refactoring guarantee?',
        tr: 'Bir yeniden düzenleme neyi garanti etmelidir?',
      },
      options: {
        fr: ['Ajouter une fonctionnalité', 'Ne pas changer le comportement visible', 'Rendre le code plus court à tout prix'],
        en: ['Add a feature', 'Not change the visible behavior', 'Make the code shorter at any cost'],
        tr: ['Yeni bir özellik eklemek', 'Görünür davranışı değiştirmemek', 'Kodu ne pahasına olursa olsun kısaltmak'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Refactoriser, c’est améliorer la structure interne à comportement égal. Ajouter une fonctionnalité est un autre type de changement, à faire séparément.',
        en: 'Refactoring means improving the internal structure while keeping the same behavior. Adding a feature is a different kind of change, done separately.',
        tr: 'Yeniden düzenleme, davranışı aynı tutarak iç yapıyı iyileştirmektir. Özellik eklemek ayrı yapılması gereken farklı bir değişikliktir.',
      },
    },
  },
  {
    id: 'se-w11-testing',
    week: 11,
    title: { fr: 'Les tests logiciels', en: 'Software testing', tr: 'Yazılım testi' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Vérification : construit-on le produit correctement ? Validation : construit-on le bon produit ? Les niveaux de test : unitaire (une fonction), intégration (des modules ensemble), système (le tout) et acceptation (avec le client). En TDD, on écrit d’abord un test qui échoue, puis le code qui le fait passer, puis on refactorise.',
          en: 'Verification: are we building the product right? Validation: are we building the right product? Test levels: unit (one function), integration (modules together), system (the whole) and acceptance (with the customer). In TDD, first write a failing test, then the code that passes it, then refactor.',
          tr: 'Doğrulama (verification): ürünü doğru mu yapıyoruz? Geçerleme (validation): doğru ürünü mü yapıyoruz? Test seviyeleri: birim (tek fonksiyon), tümleştirme (modüller birlikte), sistem (bütün) ve kabul (müşteriyle). TDD’de önce başarısız olan bir test yazılır, sonra onu geçiren kod, sonra yeniden düzenlenir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Boîte noire (on ignore le code)\n  classes d’équivalence : un représentant par groupe de valeurs\n  valeurs limites       : tester aux bords des intervalles\nBoîte blanche (on regarde le code)\n  couverture des instructions, des branches\n  complexité cyclomatique V(G) = E − N + 2 = décisions + 1\n  = nombre minimal de chemins indépendants à tester',
          en: 'Black box (code ignored)\n  equivalence partitioning: one value per group of values\n  boundary values        : test at the edges of ranges\nWhite box (code examined)\n  statement and branch coverage\n  cyclomatic complexity V(G) = E − N + 2 = decisions + 1\n  = minimum number of independent paths to test',
          tr: 'Kara kutu (kod dikkate alınmaz)\n  denklik sınıfları : her değer grubundan bir temsilci\n  sınır değerleri   : aralıkların kenarlarında test\nBeyaz kutu (koda bakılır)\n  komut ve dal kapsamı\n  çevrimsel karmaşıklık V(G) = E − N + 2 = karar sayısı + 1\n  = test edilecek en az bağımsız yol sayısı',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Un champ âge accepte les valeurs de 18 à 65. Donne les classes d’équivalence et les valeurs limites à tester. (2) Calcule la complexité cyclomatique de cette fonction.',
          en: '(1) An age field accepts values from 18 to 65. Give the equivalence classes and the boundary values to test. (2) Compute the cyclomatic complexity of this function.',
          tr: '(1) Bir yaş alanı 18 ile 65 arasındaki değerleri kabul ediyor. Denklik sınıflarını ve test edilecek sınır değerlerini ver. (2) Bu fonksiyonun çevrimsel karmaşıklığını hesapla.',
        },
        code: 'def classify(numbers):\n    positives = negatives = 0\n    for n in numbers:\n        if n > 0:\n            positives += 1\n        elif n < 0:\n            negatives += 1\n    return positives, negatives',
        solution: {
          fr: '(1) Trois classes : âge < 18 (invalide), 18 à 65 (valide), âge > 65 (invalide), par exemple 10, 40 et 80. Valeurs limites : 17, 18, 65 et 66 (on peut ajouter 19 et 64). (2) Il y a 3 décisions : la boucle for, le if et le elif. V(G) = 3 + 1 = 4 chemins indépendants à tester, par exemple : liste vide, un positif, un négatif, un zéro.',
          en: '(1) Three classes: age < 18 (invalid), 18 to 65 (valid), age > 65 (invalid), for example 10, 40 and 80. Boundary values: 17, 18, 65 and 66 (19 and 64 can be added). (2) There are 3 decisions: the for loop, the if and the elif. V(G) = 3 + 1 = 4 independent paths to test, for example: empty list, one positive, one negative, one zero.',
          tr: '(1) Üç sınıf: yaş < 18 (geçersiz), 18-65 (geçerli), yaş > 65 (geçersiz), örneğin 10, 40 ve 80. Sınır değerleri: 17, 18, 65 ve 66 (19 ve 64 de eklenebilir). (2) 3 karar vardır: for döngüsü, if ve elif. V(G) = 3 + 1 = test edilecek 4 bağımsız yol, örneğin: boş liste, bir pozitif, bir negatif, bir sıfır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'En développement piloté par les tests (TDD), que fait-on en premier ?',
        en: 'In test-driven development (TDD), what comes first?',
        tr: 'Test güdümlü geliştirmede (TDD) önce ne yapılır?',
      },
      options: {
        fr: ['Écrire le code complet', 'Écrire un test qui échoue', 'Refactoriser'],
        en: ['Write the whole code', 'Write a failing test', 'Refactor'],
        tr: ['Kodun tamamını yazmak', 'Başarısız olan bir test yazmak', 'Yeniden düzenlemek'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le cycle TDD est « rouge, vert, refactoriser » : un test qui échoue, le code minimal qui le fait passer, puis le nettoyage.',
        en: 'The TDD cycle is “red, green, refactor”: a failing test, the minimal code that passes it, then the cleanup.',
        tr: 'TDD döngüsü “kırmızı, yeşil, yeniden düzenle”dir: başarısız bir test, onu geçiren en az kod, sonra temizlik.',
      },
    },
  },
  {
    id: 'se-w12-quality',
    week: 12,
    title: {
      fr: 'Qualité et fiabilité du logiciel',
      en: 'Software quality and reliability',
      tr: 'Yazılım kalitesi ve güvenilirliği',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’assurance qualité (QA) organise le processus pour éviter les défauts ; le contrôle qualité (QC) cherche les défauts dans le produit. La norme ISO/IEC 25010 définit huit caractéristiques : adéquation fonctionnelle, performance, compatibilité, utilisabilité, fiabilité, sécurité, maintenabilité et portabilité.',
          en: 'Quality assurance (QA) organizes the process to prevent defects; quality control (QC) looks for defects in the product. The ISO/IEC 25010 standard defines eight characteristics: functional suitability, performance efficiency, compatibility, usability, reliability, security, maintainability and portability.',
          tr: 'Kalite güvencesi (QA) hataları önlemek için süreci düzenler; kalite kontrol (QC) üründeki hataları arar. ISO/IEC 25010 standardı sekiz özellik tanımlar: işlevsel uygunluk, performans verimliliği, uyumluluk, kullanılabilirlik, güvenilirlik, güvenlik, bakım kolaylığı ve taşınabilirlik.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'CMMI, maturité d’une organisation\n1 Initial   2 Géré   3 Défini   4 Géré quantitativement   5 En optimisation\n\nFiabilité\nMTTF = durée moyenne de fonctionnement avant panne\nMTTR = durée moyenne de réparation\nMTBF = MTTF + MTTR\nDisponibilité A = MTTF / (MTTF + MTTR)',
          en: 'CMMI, maturity of an organization\n1 Initial   2 Managed   3 Defined   4 Quantitatively managed   5 Optimizing\n\nReliability\nMTTF = mean time to failure\nMTTR = mean time to repair\nMTBF = MTTF + MTTR\nAvailability A = MTTF / (MTTF + MTTR)',
          tr: 'CMMI, bir kurumun olgunluğu\n1 Başlangıç   2 Yönetilen   3 Tanımlanmış   4 Nicel yönetilen   5 Optimize eden\n\nGüvenilirlik\nMTTF = arızaya kadar ortalama süre\nMTTR = ortalama onarım süresi\nMTBF = MTTF + MTTR\nErişilebilirlik A = MTTF / (MTTF + MTTR)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un serveur fonctionne en moyenne 500 heures avant de tomber en panne, et sa réparation prend en moyenne 20 heures. Calcule le MTBF, la disponibilité et le temps d’arrêt sur une année (8760 heures).',
          en: 'A server runs 500 hours on average before failing, and repair takes 20 hours on average. Compute the MTBF, the availability and the downtime over a year (8760 hours).',
          tr: 'Bir sunucu arızalanmadan önce ortalama 500 saat çalışıyor ve onarımı ortalama 20 saat sürüyor. MTBF’yi, erişilebilirliği ve bir yıldaki (8760 saat) kesinti süresini hesapla.',
        },
        solution: {
          fr: 'MTBF = 500 + 20 = 520 h. A = 500 / 520 ≈ 0,9615, soit environ 96,2 %. Temps d’arrêt ≈ (1 − 0,9615) × 8760 ≈ 337 heures par an, environ 14 jours. Pour un service important, c’est beaucoup : il faudrait réduire le MTTR (pièces de rechange, redondance).',
          en: 'MTBF = 500 + 20 = 520 h. A = 500 / 520 ≈ 0.9615, about 96.2%. Downtime ≈ (1 − 0.9615) × 8760 ≈ 337 hours a year, about 14 days. For an important service that is a lot: the MTTR should be reduced (spare parts, redundancy).',
          tr: 'MTBF = 500 + 20 = 520 sa. A = 500 / 520 ≈ 0,9615, yaklaşık %96,2. Kesinti ≈ (1 − 0,9615) × 8760 ≈ yılda 337 saat, yaklaşık 14 gün. Önemli bir hizmet için bu çoktur: MTTR düşürülmelidir (yedek parça, yedeklilik).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est le niveau le plus élevé du CMMI ?',
        en: 'What is the highest CMMI level?',
        tr: 'CMMI’nin en yüksek seviyesi hangisidir?',
      },
      options: {
        fr: ['Défini', 'Géré quantitativement', 'En optimisation'],
        en: ['Defined', 'Quantitatively managed', 'Optimizing'],
        tr: ['Tanımlanmış', 'Nicel yönetilen', 'Optimize eden'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'Le niveau 5, « en optimisation », est celui où l’organisation améliore continuellement ses processus à partir de mesures.',
        en: 'Level 5, “optimizing”, is where the organization continuously improves its processes based on measurements.',
        tr: '5. seviye “optimize eden”, kurumun süreçlerini ölçümlere dayanarak sürekli iyileştirdiği seviyedir.',
      },
    },
  },
  {
    id: 'se-w13-maintenance',
    week: 13,
    title: { fr: 'La maintenance du logiciel', en: 'Software maintenance', tr: 'Yazılım bakımı' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La maintenance commence après la livraison et représente souvent la plus grande part du coût total d’un logiciel. Les lois de Lehman disent qu’un logiciel utilisé doit changer sans cesse (changement continu) et que sa complexité augmente si on ne fait rien pour la réduire.',
          en: 'Maintenance starts after delivery and is often the largest part of a software’s total cost. Lehman’s laws say that software in use must keep changing (continuing change) and that its complexity grows unless work is done to reduce it.',
          tr: 'Bakım teslimden sonra başlar ve çoğu zaman bir yazılımın toplam maliyetinin en büyük kısmını oluşturur. Lehman yasaları, kullanılan bir yazılımın sürekli değişmesi gerektiğini (sürekli değişim) ve azaltmak için çaba gösterilmezse karmaşıklığının arttığını söyler.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Corrective  : corriger des défauts\nAdaptative  : s’adapter à un nouvel environnement (OS, loi, matériel)\nPerfective  : ajouter ou améliorer des fonctions à la demande\nPréventive  : faciliter les changements futurs (refactoriser, documenter)\n\nDette technique : raccourcis pris aujourd’hui qu’il faudra « rembourser »\nRétro-ingénierie / réingénierie : comprendre puis refaire un ancien système',
          en: 'Corrective : fixing defects\nAdaptive   : adapting to a new environment (OS, law, hardware)\nPerfective : adding or improving features on request\nPreventive : making future changes easier (refactoring, documenting)\n\nTechnical debt: shortcuts taken today that must be “paid back”\nReverse engineering / reengineering: understanding then rebuilding a legacy system',
          tr: 'Düzeltici   : hataları gidermek\nUyarlayıcı  : yeni bir ortama uyum (işletim sistemi, yasa, donanım)\nMükemmelleştirici : istek üzerine özellik eklemek veya iyileştirmek\nÖnleyici    : gelecekteki değişiklikleri kolaylaştırmak (yeniden düzenleme, belgeleme)\n\nTeknik borç: bugün yapılan ve ileride “ödenmesi” gereken kestirmeler\nTersine mühendislik / yeniden mühendislik: eski bir sistemi anlayıp yeniden yapmak',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quel type de maintenance ? (1) Corriger un plantage quand le fichier est vide. (2) Mettre l’application à jour pour la nouvelle version d’Android. (3) Ajouter un mode sombre demandé par les utilisateurs. (4) Réorganiser un module pour qu’il soit plus facile à faire évoluer. (5) Adapter les factures à une nouvelle loi fiscale.',
          en: 'Which type of maintenance? (1) Fix a crash when the file is empty. (2) Update the app for the new Android version. (3) Add a dark mode requested by users. (4) Reorganize a module so it is easier to evolve. (5) Adapt invoices to a new tax law.',
          tr: 'Hangi bakım türü? (1) Dosya boşken oluşan çökmeyi düzeltmek. (2) Uygulamayı yeni Android sürümüne güncellemek. (3) Kullanıcıların istediği karanlık modu eklemek. (4) Bir modülü daha kolay geliştirilecek şekilde yeniden düzenlemek. (5) Faturaları yeni bir vergi yasasına uyarlamak.',
        },
        solution: {
          fr: '(1) Corrective. (2) Adaptative. (3) Perfective. (4) Préventive. (5) Adaptative : c’est l’environnement (la loi) qui change, pas un défaut du logiciel ni une demande de confort.',
          en: '(1) Corrective. (2) Adaptive. (3) Perfective. (4) Preventive. (5) Adaptive: the environment (the law) changes, it is neither a defect nor a comfort request.',
          tr: '(1) Düzeltici. (2) Uyarlayıcı. (3) Mükemmelleştirici. (4) Önleyici. (5) Uyarlayıcı: değişen ortamdır (yasa); ne bir yazılım hatası ne de bir konfor isteğidir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Adapter un logiciel à un nouveau système d’exploitation, c’est de la maintenance…',
        en: 'Adapting software to a new operating system is…',
        tr: 'Bir yazılımı yeni bir işletim sistemine uyarlamak hangi bakımdır?',
      },
      options: {
        fr: ['corrective', 'adaptative', 'préventive'],
        en: ['corrective maintenance', 'adaptive maintenance', 'preventive maintenance'],
        tr: ['Düzeltici', 'Uyarlayıcı', 'Önleyici'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le logiciel n’a pas de défaut : c’est son environnement qui change. C’est la définition de la maintenance adaptative.',
        en: 'The software has no defect: its environment changes. That is the definition of adaptive maintenance.',
        tr: 'Yazılımda hata yoktur: değişen ortamıdır. Uyarlayıcı bakımın tanımı budur.',
      },
    },
  },
  {
    id: 'se-w14-hci',
    week: 14,
    title: {
      fr: 'Interaction, aide, documentation et révision du final',
      en: 'Interaction, help, documentation and final review',
      tr: 'Kullanıcı etkileşimi, yardım, dokümantasyon ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une interface utilisable suit des principes reconnus, comme les 10 heuristiques de Nielsen : montrer l’état du système, parler le langage de l’utilisateur, lui laisser le contrôle (annuler), rester cohérent, prévenir les erreurs, montrer plutôt que faire mémoriser, aller à l’essentiel, aider à comprendre et corriger les erreurs, fournir de l’aide.',
          en: 'A usable interface follows known principles, such as Nielsen’s 10 heuristics: show the system status, speak the user’s language, leave the user in control (undo), stay consistent, prevent errors, show rather than make users remember, keep it minimal, help users understand and fix errors, provide help.',
          tr: 'Kullanılabilir bir arayüz Nielsen’in 10 sezgisel ilkesi gibi bilinen ilkelere uyar: sistemin durumunu göstermek, kullanıcının dilini konuşmak, kontrolü kullanıcıya bırakmak (geri alma), tutarlı olmak, hataları önlemek, ezberletmek yerine göstermek, sade olmak, hataları anlamaya ve düzeltmeye yardım etmek, yardım sunmak.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Le système d’aide va de l’aide contextuelle (infobulles, bouton « ? ») à la FAQ. La documentation utilisateur comprend le guide d’installation, le manuel d’utilisation et les tutoriels ; elle est différente de la documentation système, écrite pour les développeurs.',
          en: 'The help system ranges from contextual help (tooltips, a “?” button) to an FAQ. User documentation includes the installation guide, the user manual and tutorials; it differs from system documentation, written for developers.',
          tr: 'Yardım sistemi bağlamsal yardımdan (araç ipuçları, “?” düğmesi) SSS’ye kadar uzanır. Kullanıcı dokümantasyonu kurulum kılavuzunu, kullanım kılavuzunu ve eğitimleri içerir; geliştiriciler için yazılan sistem dokümantasyonundan farklıdır.',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ UML : cas d’utilisation, classes (multiplicités, ◇, ◆, ▷), séquence\n✔ Couplage faible, cohésion forte, MVC, Singleton, Observer\n✔ Normes de codage, Git, revue de code, refactorisation\n✔ Niveaux de test, TDD, classes d’équivalence, valeurs limites, V(G)\n✔ ISO 25010, CMMI, MTTF / MTTR / MTBF, disponibilité\n✔ Maintenance corrective / adaptative / perfective / préventive, Lehman\n✔ Heuristiques de Nielsen, aide, documentation',
          en: '✔ UML: use case, class (multiplicities, ◇, ◆, ▷), sequence\n✔ Low coupling, high cohesion, MVC, Singleton, Observer\n✔ Coding standards, Git, code review, refactoring\n✔ Test levels, TDD, equivalence classes, boundary values, V(G)\n✔ ISO 25010, CMMI, MTTF / MTTR / MTBF, availability\n✔ Corrective / adaptive / perfective / preventive maintenance, Lehman\n✔ Nielsen’s heuristics, help, documentation',
          tr: '✔ UML: kullanım durumu, sınıf (çokluklar, ◇, ◆, ▷), sıralama\n✔ Düşük bağlaşım, yüksek uyum, MVC, Singleton, Observer\n✔ Kodlama standartları, Git, kod gözden geçirme, yeniden düzenleme\n✔ Test seviyeleri, TDD, denklik sınıfları, sınır değerleri, V(G)\n✔ ISO 25010, CMMI, MTTF / MTTR / MTBF, erişilebilirlik\n✔ Düzeltici / uyarlayıcı / mükemmelleştirici / önleyici bakım, Lehman\n✔ Nielsen ilkeleri, yardım, dokümantasyon',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quelle heuristique de Nielsen est violée ? (1) Un message d’erreur « Erreur 0x80004005 ». (2) Pendant l’envoi d’un gros fichier, l’écran ne montre rien. (3) Le bouton « Supprimer le compte » agit sans confirmation et sans annulation possible.',
          en: 'Which Nielsen heuristic is broken? (1) An error message “Error 0x80004005”. (2) While a large file uploads, the screen shows nothing. (3) The “Delete account” button acts with no confirmation and no undo.',
          tr: 'Hangi Nielsen ilkesi çiğneniyor? (1) “Hata 0x80004005” şeklinde bir hata mesajı. (2) Büyük bir dosya yüklenirken ekranda hiçbir şey görünmüyor. (3) “Hesabı sil” düğmesi onay ve geri alma olmadan çalışıyor.',
        },
        solution: {
          fr: '(1) Aider à comprendre et corriger les erreurs (et parler le langage de l’utilisateur) : il faut dire ce qui s’est passé et quoi faire. (2) Montrer l’état du système : une barre de progression. (3) Prévenir les erreurs et laisser le contrôle à l’utilisateur : demander une confirmation, ou permettre d’annuler.',
          en: '(1) Help users recognize and recover from errors (and speak their language): say what happened and what to do. (2) Visibility of system status: a progress bar. (3) Error prevention and user control: ask for confirmation, or allow undo.',
          tr: '(1) Hataları anlamaya ve düzeltmeye yardım etmek (ve kullanıcının dilini konuşmak): ne olduğunu ve ne yapılacağını söylemek gerekir. (2) Sistem durumunun görünürlüğü: bir ilerleme çubuğu. (3) Hata önleme ve kullanıcı kontrolü: onay istemek veya geri almaya izin vermek.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Afficher une barre de progression pendant un téléchargement répond à quelle heuristique ?',
        en: 'Showing a progress bar during a download follows which heuristic?',
        tr: 'İndirme sırasında ilerleme çubuğu göstermek hangi ilkeye uyar?',
      },
      options: {
        fr: ['Visibilité de l’état du système', 'Esthétique minimaliste', 'Documentation'],
        en: ['Visibility of system status', 'Minimalist design', 'Documentation'],
        tr: ['Sistem durumunun görünürlüğü', 'Sade tasarım', 'Dokümantasyon'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'L’utilisateur doit toujours savoir ce que fait le système : la barre de progression montre que le travail avance et combien de temps il reste.',
        en: 'Users should always know what the system is doing: the progress bar shows that work is moving and how much is left.',
        tr: 'Kullanıcı sistemin ne yaptığını her zaman bilmelidir: ilerleme çubuğu işin ilerlediğini ve ne kadar kaldığını gösterir.',
      },
    },
  },
];
