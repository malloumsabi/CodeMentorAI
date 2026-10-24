/**
 * BLM431 Yapay Zeka (Artificial Intelligence), 14 weeks following Russell and Norvig: agents, search,
 * games, constraints, logic and uncertainty before the midterm; learning, decision trees, neurons,
 * training, deep learning, reinforcement learning, language models and ethics before the final.
 * Every numeric answer was checked with Python. Weeks 8, 10 and 11 keep the ids of the former course.
 */

import type { LessonSource } from '@/data/lessons';

export const blm431Lessons: LessonSource[] = [
  {
    id: 'ai-w01-agents',
    week: 1,
    title: {
      fr: 'Introduction à l’IA et agents intelligents',
      en: 'Introduction to AI and intelligent agents',
      tr: 'Yapay zekaya giriş ve akıllı etmenler',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un agent perçoit son environnement avec des capteurs et agit avec des effecteurs. Un agent rationnel choisit l’action qui maximise sa mesure de performance attendue. On décrit une tâche par PEAS : Performance, Environnement, Actuateurs, Senseurs. Types d’agents, du plus simple au plus évolué : réflexe simple, réflexe avec modèle, basé sur des buts, basé sur l’utilité, et agent qui apprend.',
          en: 'An agent perceives its environment through sensors and acts through actuators. A rational agent picks the action that maximizes its expected performance measure. A task is described by PEAS: Performance, Environment, Actuators, Sensors. Agent types, from simplest to most advanced: simple reflex, model-based reflex, goal-based, utility-based, and learning agent.',
          tr: 'Etmen, çevresini algılayıcılarla algılar ve eyleyicilerle hareket eder. Rasyonel etmen beklenen başarım ölçüsünü en büyük yapan eylemi seçer. Bir görev PEAS ile tanımlanır: Performans, Ortam (Environment), Eyleyiciler (Actuators), Algılayıcılar (Sensors). Etmen türleri, en basitten en gelişmişe: basit refleks, modelli refleks, hedef tabanlı, fayda tabanlı ve öğrenen etmen.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Propriétés d’un environnement\nobservable totalement / partiellement      (échecs / poker)\ndéterministe / stochastique                (puzzle / dés)\népisodique / séquentiel                    (tri d’images / conduite)\nstatique / dynamique                       (mots croisés / circulation)\ndiscret / continu                          (échecs / pilotage)\nun agent / plusieurs agents                (sudoku / football)',
          en: 'Environment properties\nfully / partially observable              (chess / poker)\ndeterministic / stochastic                 (puzzle / dice)\nepisodic / sequential                      (image sorting / driving)\nstatic / dynamic                           (crossword / traffic)\ndiscrete / continuous                      (chess / steering)\nsingle agent / multi-agent                 (sudoku / football)',
          tr: 'Ortam özellikleri\ntam / kısmi gözlemlenebilir                (satranç / poker)\ndeterministik / stokastik                  (bulmaca / zar)\nepizodik / ardışık                         (resim ayıklama / sürüş)\nstatik / dinamik                           (çengel bulmaca / trafik)\nayrık / sürekli                            (satranç / direksiyon)\ntek etmen / çok etmenli                    (sudoku / futbol)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Donne la description PEAS d’un taxi autonome, puis classe son environnement selon les six propriétés ci-dessus.',
          en: 'Give the PEAS description of a self-driving taxi, then classify its environment by the six properties above.',
          tr: 'Sürücüsüz bir taksinin PEAS tanımını ver, sonra ortamını yukarıdaki altı özelliğe göre sınıflandır.',
        },
        solution: {
          fr: 'P : sécurité, arriver à destination, rapidité, confort, respect du code, coût. E : routes, circulation, piétons, météo, clients. A : volant, accélérateur, frein, clignotants, écran. S : caméras, lidar, radar, GPS, compteur de vitesse. Environnement partiellement observable, stochastique, séquentiel, dynamique, continu et multi-agent : c’est le cas le plus difficile.',
          en: 'P: safety, reaching the destination, speed, comfort, obeying traffic rules, cost. E: roads, traffic, pedestrians, weather, customers. A: steering, accelerator, brake, indicators, display. S: cameras, lidar, radar, GPS, speedometer. The environment is partially observable, stochastic, sequential, dynamic, continuous and multi-agent: the hardest case.',
          tr: 'P: güvenlik, hedefe ulaşma, hız, konfor, trafik kurallarına uyma, maliyet. E: yollar, trafik, yayalar, hava, müşteriler. A: direksiyon, gaz, fren, sinyaller, ekran. S: kameralar, lidar, radar, GPS, hız göstergesi. Ortam kısmi gözlemlenebilir, stokastik, ardışık, dinamik, sürekli ve çok etmenlidir: en zor durumdur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Un jeu d’échecs sans horloge est un environnement…',
        en: 'A chess game without a clock is an environment that is…',
        tr: 'Saatsiz bir satranç oyunu hangi tür ortamdır?',
      },
      options: {
        fr: ['totalement observable et déterministe', 'partiellement observable et stochastique', 'continu et dynamique'],
        en: ['fully observable and deterministic', 'partially observable and stochastic', 'continuous and dynamic'],
        tr: ['tam gözlemlenebilir ve deterministik', 'kısmi gözlemlenebilir ve stokastik', 'sürekli ve dinamik'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'On voit tout l’échiquier, et chaque coup a un résultat certain. Seul l’adversaire rend le jeu multi-agent.',
        en: 'The whole board is visible, and each move has a certain outcome. Only the opponent makes it multi-agent.',
        tr: 'Tüm tahta görünür ve her hamlenin sonucu kesindir. Yalnızca rakip onu çok etmenli yapar.',
      },
    },
  },
  {
    id: 'ai-w02-uninformed-search',
    week: 2,
    title: {
      fr: 'Recherche non informée : BFS, DFS et coût uniforme',
      en: 'Uninformed search: BFS, DFS and uniform cost',
      tr: 'Bilgisiz arama: BFS, DFS ve tek biçimli maliyet',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Résoudre un problème, c’est chercher un chemin de l’état initial à un état but dans un espace d’états. Une recherche non informée ne sait rien de la distance au but. En largeur (BFS, file) : trouve le chemin avec le moins d’étapes, mais demande beaucoup de mémoire. En profondeur (DFS, pile) : peu de mémoire, mais ni optimale ni toujours complète. Coût uniforme (UCS, file de priorité sur le coût g) : trouve le chemin le moins coûteux, comme Dijkstra.',
          en: 'Solving a problem means searching for a path from the initial state to a goal state in a state space. Uninformed search knows nothing about the distance to the goal. Breadth-first (BFS, queue): finds the path with the fewest steps, but needs a lot of memory. Depth-first (DFS, stack): little memory, but neither optimal nor always complete. Uniform cost (UCS, priority queue on cost g): finds the cheapest path, like Dijkstra.',
          tr: 'Bir problemi çözmek, durum uzayında başlangıç durumundan bir hedef duruma giden yolu aramaktır. Bilgisiz arama hedefe uzaklık hakkında hiçbir şey bilmez. Genişlik öncelikli (BFS, kuyruk): en az adımlı yolu bulur ama çok bellek ister. Derinlik öncelikli (DFS, yığın): az bellek kullanır ama ne en iyidir ne de her zaman tamdır. Tek biçimli maliyet (UCS, g maliyetine göre öncelik kuyruğu): Dijkstra gibi en ucuz yolu bulur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Graphe (arêtes et coûts), départ S, but G\nS–A 1   S–B 4   A–B 2   A–C 5   B–C 1   C–G 3   A–G 12\n\n             complète   optimale          temps / mémoire\nBFS          oui        si coûts égaux    O(bᵈ) / O(bᵈ)\nDFS          non*       non               O(bᵐ) / O(b·m)\nUCS          oui        oui               selon le coût optimal\nb = facteur de branchement, d = profondeur du but, m = profondeur max\n* oui si l’espace est fini et qu’on évite les cycles',
          en: 'Graph (edges and costs), start S, goal G\nS–A 1   S–B 4   A–B 2   A–C 5   B–C 1   C–G 3   A–G 12\n\n             complete   optimal           time / memory\nBFS          yes        if costs equal    O(bᵈ) / O(bᵈ)\nDFS          no*        no                O(bᵐ) / O(b·m)\nUCS          yes        yes               depends on the optimal cost\nb = branching factor, d = goal depth, m = max depth\n* yes if the space is finite and cycles are avoided',
          tr: 'Graf (kenarlar ve maliyetler), başlangıç S, hedef G\nS–A 1   S–B 4   A–B 2   A–C 5   B–C 1   C–G 3   A–G 12\n\n             tam        en iyi            zaman / bellek\nBFS          evet       maliyetler eşitse O(bᵈ) / O(bᵈ)\nDFS          hayır*     hayır             O(bᵐ) / O(b·m)\nUCS          evet       evet              en iyi maliyete bağlı\nb = dallanma çarpanı, d = hedef derinliği, m = en büyük derinlik\n* uzay sonluysa ve döngülerden kaçınılırsa evet',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Sur ce graphe, voisins pris dans l’ordre alphabétique et but testé quand on retire un nœud de la file : (1) quel chemin trouve BFS, et à quel coût ? (2) Quel chemin trouve UCS ? Donne l’ordre d’expansion avec les coûts g.',
          en: 'On this graph, neighbors taken in alphabetical order and the goal tested when a node is taken out of the frontier: (1) which path does BFS find, and at what cost? (2) Which path does UCS find? Give the expansion order with the g costs.',
          tr: 'Bu grafta komşular alfabetik sırayla alınıyor ve hedef bir düğüm sınırdan çıkarılınca sınanıyor: (1) BFS hangi yolu, hangi maliyetle bulur? (2) UCS hangi yolu bulur? Açılma sırasını g maliyetleriyle ver.',
        },
        solution: {
          fr: '(1) BFS explore par niveaux : S, puis A et B, puis C et G (atteint depuis A). Il trouve S → A → G : seulement 2 arêtes, mais un coût de 13. (2) UCS développe toujours le nœud de plus petit coût : S (0), A (1), B (3, via A), C (4, via B), G (7). Chemin S → A → B → C → G, coût 7. BFS minimise le nombre d’étapes, UCS le coût.',
          en: '(1) BFS explores level by level: S, then A and B, then C and G (reached from A). It finds S → A → G: only 2 edges, but a cost of 13. (2) UCS always expands the cheapest node: S (0), A (1), B (3, via A), C (4, via B), G (7). Path S → A → B → C → G, cost 7. BFS minimizes the number of steps, UCS the cost.',
          tr: '(1) BFS seviye seviye arar: S, sonra A ve B, sonra C ve G (A’dan ulaşılır). S → A → G yolunu bulur: yalnızca 2 kenar ama maliyet 13. (2) UCS her zaman en ucuz düğümü açar: S (0), A (1), B (3, A üzerinden), C (4, B üzerinden), G (7). Yol S → A → B → C → G, maliyet 7. BFS adım sayısını, UCS maliyeti en aza indirir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle structure de données utilise la recherche en largeur ?',
        en: 'Which data structure does breadth-first search use?',
        tr: 'Genişlik öncelikli arama hangi veri yapısını kullanır?',
      },
      options: { fr: ['Une pile', 'Une file FIFO', 'Une file de priorité'], en: ['A stack', 'A FIFO queue', 'A priority queue'], tr: ['Yığın', 'FIFO kuyruğu', 'Öncelik kuyruğu'] },
      answerIndex: 1,
      explanation: {
        fr: 'La file FIFO traite les nœuds dans l’ordre de découverte, niveau par niveau. DFS utilise une pile, UCS et A* une file de priorité.',
        en: 'The FIFO queue handles nodes in discovery order, level by level. DFS uses a stack, UCS and A* a priority queue.',
        tr: 'FIFO kuyruğu düğümleri keşif sırasıyla, seviye seviye işler. DFS yığın, UCS ve A* öncelik kuyruğu kullanır.',
      },
    },
  },
  {
    id: 'ai-w03-astar',
    week: 3,
    title: {
      fr: 'Recherche informée : A* et heuristiques',
      en: 'Informed search: A* and heuristics',
      tr: 'Bilgili arama: A* ve sezgiseller',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une heuristique h(n) estime le coût restant jusqu’au but, par exemple la distance à vol d’oiseau. La recherche gloutonne développe le nœud de plus petit h : elle est rapide mais pas optimale. A* développe le nœud de plus petit f(n) = g(n) + h(n) : le coût déjà payé plus l’estimation du reste. Si h est admissible (elle ne surestime jamais le vrai coût), A* trouve le chemin optimal. Plus h est proche du vrai coût, moins A* développe de nœuds.',
          en: 'A heuristic h(n) estimates the remaining cost to the goal, for example the straight-line distance. Greedy search expands the node with the smallest h: fast but not optimal. A* expands the node with the smallest f(n) = g(n) + h(n): the cost paid so far plus the estimate of the rest. If h is admissible (never overestimates the true cost), A* finds the optimal path. The closer h is to the true cost, the fewer nodes A* expands.',
          tr: 'Sezgisel h(n), hedefe kalan maliyeti tahmin eder, örneğin kuş uçuşu uzaklık. Açgözlü arama h’si en küçük düğümü açar: hızlıdır ama en iyi değildir. A*, f(n) = g(n) + h(n)’si en küçük düğümü açar: şimdiye kadar ödenen maliyet artı kalanın tahmini. h kabul edilebilirse (gerçek maliyeti asla fazla tahmin etmezse), A* en iyi yolu bulur. h gerçek maliyete ne kadar yakınsa A* o kadar az düğüm açar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Même graphe qu’en semaine 2\nVrais coûts jusqu’à G : h*(S) = 7, h*(A) = 6, h*(B) = 4, h*(C) = 3\nHeuristique choisie   : h(S) = 6, h(A) = 5, h(B) = 3, h(C) = 2, h(G) = 0\n\nf(n) = g(n) + h(n)\nadmissible   : h(n) ≤ h*(n) pour tout n\ncohérente    : h(n) ≤ c(n, n′) + h(n′)  (implique admissible)\n\nTaquin : h₁ = nombre de pièces mal placées, h₂ = somme des distances de Manhattan\n         h₂ ≥ h₁, toutes deux admissibles → h₂ domine et explore moins',
          en: 'Same graph as in week 2\nTrue costs to G: h*(S) = 7, h*(A) = 6, h*(B) = 4, h*(C) = 3\nChosen heuristic: h(S) = 6, h(A) = 5, h(B) = 3, h(C) = 2, h(G) = 0\n\nf(n) = g(n) + h(n)\nadmissible  : h(n) ≤ h*(n) for every n\nconsistent  : h(n) ≤ c(n, n′) + h(n′)  (implies admissible)\n\n8-puzzle: h₁ = number of misplaced tiles, h₂ = sum of Manhattan distances\n          h₂ ≥ h₁, both admissible → h₂ dominates and explores less',
          tr: '2. haftadaki grafın aynısı\nG’ye gerçek maliyetler: h*(S) = 7, h*(A) = 6, h*(B) = 4, h*(C) = 3\nSeçilen sezgisel     : h(S) = 6, h(A) = 5, h(B) = 3, h(C) = 2, h(G) = 0\n\nf(n) = g(n) + h(n)\nkabul edilebilir : her n için h(n) ≤ h*(n)\ntutarlı          : h(n) ≤ c(n, n′) + h(n′)  (kabul edilebilirliği gerektirir)\n\n8 taş bulmacası: h₁ = yanlış yerdeki taş sayısı, h₂ = Manhattan uzaklıkları toplamı\n                 h₂ ≥ h₁, ikisi de kabul edilebilir → h₂ baskındır, daha az arar',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) L’heuristique choisie est-elle admissible ? (2) Applique A* : donne l’ordre de développement avec g et f. Quel chemin obtient-on ? (3) Si on avait h(B) = 6, que pourrait-il se passer ?',
          en: '(1) Is the chosen heuristic admissible? (2) Run A*: give the expansion order with g and f. Which path results? (3) If h(B) were 6, what could happen?',
          tr: '(1) Seçilen sezgisel kabul edilebilir mi? (2) A* uygula: açılma sırasını g ve f ile ver. Hangi yol elde edilir? (3) h(B) = 6 olsaydı ne olabilirdi?',
        },
        solution: {
          fr: '(1) Oui : 6 ≤ 7, 5 ≤ 6, 3 ≤ 4, 2 ≤ 3 et 0 ≤ 0, elle ne surestime jamais. (2) S (g = 0, f = 6), A (g = 1, f = 6), B (g = 3, f = 6), C (g = 4, f = 6), G (g = 7, f = 7). Chemin S → A → B → C → G, coût 7, optimal. f reste à 6 tout le long, car h est presque parfaite. (3) h(B) = 6 > 4 surestime : B (f = 9 via A) pourrait passer après un autre chemin vers G, et A* pourrait rendre une solution non optimale.',
          en: '(1) Yes: 6 ≤ 7, 5 ≤ 6, 3 ≤ 4, 2 ≤ 3 and 0 ≤ 0, it never overestimates. (2) S (g = 0, f = 6), A (g = 1, f = 6), B (g = 3, f = 6), C (g = 4, f = 6), G (g = 7, f = 7). Path S → A → B → C → G, cost 7, optimal. f stays at 6 all along, since h is nearly perfect. (3) h(B) = 6 > 4 overestimates: B (f = 9 via A) could be pushed behind another path to G, and A* could return a non-optimal solution.',
          tr: '(1) Evet: 6 ≤ 7, 5 ≤ 6, 3 ≤ 4, 2 ≤ 3 ve 0 ≤ 0, asla fazla tahmin etmez. (2) S (g = 0, f = 6), A (g = 1, f = 6), B (g = 3, f = 6), C (g = 4, f = 6), G (g = 7, f = 7). Yol S → A → B → C → G, maliyet 7, en iyi. h neredeyse mükemmel olduğundan f hep 6’da kalır. (3) h(B) = 6 > 4 fazla tahmin eder: B (A üzerinden f = 9), G’ye giden başka bir yolun arkasına düşebilir ve A* en iyi olmayan bir çözüm döndürebilir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle condition garantit qu’A* (en recherche arborescente) trouve une solution optimale ?',
        en: 'Which condition guarantees that A* (tree search) finds an optimal solution?',
        tr: 'Hangi koşul A*’ın (ağaç aramasında) en iyi çözümü bulmasını garanti eder?',
      },
      options: {
        fr: ['h(n) = 0 partout', 'h est admissible', 'h surestime toujours'],
        en: ['h(n) = 0 everywhere', 'h is admissible', 'h always overestimates'],
        tr: ['her yerde h(n) = 0', 'h kabul edilebilirdir', 'h hep fazla tahmin eder'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Une heuristique admissible ne surestime jamais : A* ne peut pas écarter à tort le bon chemin. h = 0 est aussi admissible, mais A* devient alors UCS, sans aucune aide.',
        en: 'An admissible heuristic never overestimates: A* can’t wrongly set the right path aside. h = 0 is admissible too, but A* then becomes UCS, with no help at all.',
        tr: 'Kabul edilebilir sezgisel asla fazla tahmin etmez: A* doğru yolu yanlışlıkla bir kenara bırakamaz. h = 0 da kabul edilebilirdir ama A* o zaman hiçbir yardım almadan UCS’ye dönüşür.',
      },
    },
  },
  {
    id: 'ai-w04-games',
    week: 4,
    title: {
      fr: 'Jeux : minimax et élagage alpha-bêta',
      en: 'Games: minimax and alpha-beta pruning',
      tr: 'Oyunlar: minimax ve alfa-beta budama',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Dans un jeu à deux joueurs à somme nulle, MAX cherche à maximiser le score et MIN à le minimiser. Minimax remonte les valeurs depuis les feuilles : un nœud MAX prend le maximum de ses enfants, un nœud MIN le minimum. L’élagage alpha-bêta donne le même résultat en ignorant des branches qui ne peuvent pas changer la décision. α est la meilleure valeur garantie pour MAX, β pour MIN ; on coupe dès que α ≥ β. Avec un bon ordre des coups, on explore environ deux fois plus profond.',
          en: 'In a two-player zero-sum game, MAX tries to maximize the score and MIN to minimize it. Minimax propagates values up from the leaves: a MAX node takes the maximum of its children, a MIN node the minimum. Alpha-beta pruning gives the same result while skipping branches that can’t change the decision. α is the best value guaranteed for MAX, β for MIN; prune as soon as α ≥ β. With good move ordering, it searches about twice as deep.',
          tr: 'İki oyunculu sıfır toplamlı bir oyunda MAX skoru en büyük, MIN en küçük yapmaya çalışır. Minimax değerleri yapraklardan yukarı taşır: MAX düğümü çocuklarının en büyüğünü, MIN düğümü en küçüğünü alır. Alfa-beta budama, kararı değiştiremeyecek dalları atlayarak aynı sonucu verir. α MAX için, β MIN için garanti edilen en iyi değerdir; α ≥ β olur olmaz budanır. İyi hamle sıralamasıyla yaklaşık iki kat derin arar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '                 MAX\n        ┌─────────┼─────────┐\n       MIN       MIN       MIN\n     3 12 8     2 4 6    14 5 2      (feuilles, de gauche à droite)\n\nfunction minimax(n, estMax):\n    si n est une feuille : renvoyer valeur(n)\n    si estMax : renvoyer max(minimax(e, faux) pour chaque enfant e)\n    sinon     : renvoyer min(minimax(e, vrai) pour chaque enfant e)',
          en: '                 MAX\n        ┌─────────┼─────────┐\n       MIN       MIN       MIN\n     3 12 8     2 4 6    14 5 2      (leaves, left to right)\n\nfunction minimax(n, isMax):\n    if n is a leaf: return value(n)\n    if isMax: return max(minimax(c, false) for each child c)\n    else    : return min(minimax(c, true) for each child c)',
          tr: '                 MAX\n        ┌─────────┼─────────┐\n       MIN       MIN       MIN\n     3 12 8     2 4 6    14 5 2      (yapraklar, soldan sağa)\n\nfunction minimax(n, maxMi):\n    n bir yapraksa: deger(n) döndür\n    maxMi ise    : her c çocuğu için max(minimax(c, yanlış)) döndür\n    değilse      : her c çocuğu için min(minimax(c, doğru)) döndür',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Calcule la valeur minimax de la racine et le coup choisi par MAX. (2) Avec alpha-bêta, de gauche à droite, quelles feuilles ne sont jamais évaluées ? Explique pourquoi.',
          en: '(1) Compute the minimax value of the root and MAX’s chosen move. (2) With alpha-beta, left to right, which leaves are never evaluated? Explain why.',
          tr: '(1) Kökün minimax değerini ve MAX’ın seçtiği hamleyi hesapla. (2) Soldan sağa alfa-beta ile hangi yapraklar hiç değerlendirilmez? Nedenini açıkla.',
        },
        solution: {
          fr: '(1) MIN gauche : min(3, 12, 8) = 3 ; MIN milieu : min(2, 4, 6) = 2 ; MIN droit : min(14, 5, 2) = 2. Racine : max(3, 2, 2) = 3 ; MAX joue la branche de gauche. (2) Après la gauche, α = 3. Au milieu, la première feuille vaut 2 : ce MIN vaudra au plus 2 < 3, donc MAX ne le choisira jamais. On coupe : 4 et 6 ne sont pas évaluées. À droite, 14 puis 5 restent au-dessus de 3, il faut aller jusqu’à 2 : pas de coupe.',
          en: '(1) Left MIN: min(3, 12, 8) = 3; middle MIN: min(2, 4, 6) = 2; right MIN: min(14, 5, 2) = 2. Root: max(3, 2, 2) = 3; MAX plays the left branch. (2) After the left, α = 3. In the middle, the first leaf is 2: this MIN will be at most 2 < 3, so MAX will never pick it. Prune: 4 and 6 are not evaluated. On the right, 14 then 5 stay above 3, so we must reach 2: no pruning.',
          tr: '(1) Sol MIN: min(3, 12, 8) = 3; orta MIN: min(2, 4, 6) = 2; sağ MIN: min(14, 5, 2) = 2. Kök: max(3, 2, 2) = 3; MAX sol dalı oynar. (2) Soldan sonra α = 3. Ortada ilk yaprak 2’dir: bu MIN en fazla 2 < 3 olacak, yani MAX onu asla seçmez. Budanır: 4 ve 6 değerlendirilmez. Sağda 14 sonra 5, 3’ün üstünde kalır, 2’ye kadar gitmek gerekir: budama yok.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'L’élagage alpha-bêta change-t-il la valeur trouvée par minimax ?',
        en: 'Does alpha-beta pruning change the value found by minimax?',
        tr: 'Alfa-beta budama minimax’ın bulduğu değeri değiştirir mi?',
      },
      options: {
        fr: ['Oui, il donne une approximation', 'Non, il donne exactement la même valeur, plus vite', 'Oui, il favorise MIN'],
        en: ['Yes, it gives an approximation', 'No, it gives exactly the same value, faster', 'Yes, it favors MIN'],
        tr: ['Evet, yaklaşık bir değer verir', 'Hayır, aynı değeri daha hızlı verir', 'Evet, MIN’i kayırır'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Les branches coupées ne peuvent pas modifier la décision : le résultat est identique, avec moins de nœuds évalués.',
        en: 'Pruned branches can’t change the decision: the result is identical, with fewer nodes evaluated.',
        tr: 'Budanan dallar kararı değiştiremez: sonuç aynıdır, daha az düğüm değerlendirilir.',
      },
    },
  },
  {
    id: 'ai-w05-csp',
    week: 5,
    title: {
      fr: 'Problèmes de satisfaction de contraintes',
      en: 'Constraint satisfaction problems',
      tr: 'Kısıt sağlama problemleri',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un CSP est défini par des variables, un domaine de valeurs pour chacune, et des contraintes entre elles : sudoku, emplois du temps, coloriage de carte. On le résout par retour arrière (backtracking) : on affecte une variable à la fois et on revient en arrière dès qu’une contrainte est violée. Heuristiques : MRV (la variable qui a le moins de valeurs possibles), degré (celle qui a le plus de contraintes avec les autres) et vérification en avant (forward checking : retirer tout de suite les valeurs devenues impossibles chez les voisins).',
          en: 'A CSP is defined by variables, a domain of values for each, and constraints between them: sudoku, timetables, map coloring. It is solved by backtracking: assign one variable at a time and step back as soon as a constraint is violated. Heuristics: MRV (the variable with the fewest legal values), degree (the one with the most constraints on others) and forward checking (immediately removing values that became impossible for the neighbors).',
          tr: 'Bir CSP değişkenler, her biri için bir değer alanı ve aralarındaki kısıtlarla tanımlanır: sudoku, ders programları, harita boyama. Geri izleme (backtracking) ile çözülür: değişkenlere birer birer değer atanır ve bir kısıt bozulur bozulmaz geri dönülür. Sezgiseller: MRV (en az geçerli değeri olan değişken), derece (diğerleriyle en çok kısıtı olan) ve ileri denetim (forward checking: komşularda imkânsız hale gelen değerleri hemen çıkarmak).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Coloriage de l’Australie, couleurs {R, V, B}\nVariables : WA, NT, SA, Q, NSW, V, T\nContraintes (voisins différents) :\nWA–NT  WA–SA  NT–SA  NT–Q  SA–Q  SA–NSW  SA–V  Q–NSW  NSW–V\n(T, la Tasmanie, n’a aucun voisin)\n\nDegrés : SA 5 ; NT, Q, NSW 3 ; WA, V 2 ; T 0',
          en: 'Coloring Australia, colors {R, G, B}\nVariables: WA, NT, SA, Q, NSW, V, T\nConstraints (neighbors differ):\nWA–NT  WA–SA  NT–SA  NT–Q  SA–Q  SA–NSW  SA–V  Q–NSW  NSW–V\n(T, Tasmania, has no neighbor)\n\nDegrees: SA 5; NT, Q, NSW 3; WA, V 2; T 0',
          tr: 'Avustralya’yı boyama, renkler {K, Y, M}\nDeğişkenler: WA, NT, SA, Q, NSW, V, T\nKısıtlar (komşular farklı):\nWA–NT  WA–SA  NT–SA  NT–Q  SA–Q  SA–NSW  SA–V  Q–NSW  NSW–V\n(T, Tazmanya, hiç komşusu yok)\n\nDereceler: SA 5; NT, Q, NSW 3; WA, V 2; T 0',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Avec l’heuristique du degré, quelle variable colorie-t-on en premier ? (2) On pose WA = R. Avec la vérification en avant, quels domaines changent ? (3) Donne une solution complète. Combien de solutions y a-t-il au total ?',
          en: '(1) With the degree heuristic, which variable is colored first? (2) Set WA = R. With forward checking, which domains change? (3) Give a complete solution. How many solutions are there in total?',
          tr: '(1) Derece sezgiseliyle ilk hangi değişken boyanır? (2) WA = K olsun. İleri denetimle hangi alanlar değişir? (3) Eksiksiz bir çözüm ver. Toplam kaç çözüm vardır?',
        },
        solution: {
          fr: '(1) SA, qui a 5 voisins : la colorier d’abord contraint le plus le reste. (2) Les voisins de WA perdent R : NT = {V, B} et SA = {V, B}. Les autres ne changent pas. (3) Par exemple WA = R, NT = V, SA = B, Q = R, NSW = V, V = R, T = n’importe quelle couleur. Pour le continent, une fois les couleurs de SA, WA et NT choisies (3 × 2 = 6 possibilités), tout le reste est imposé ; T a 3 choix : 6 × 3 = 18 solutions.',
          en: '(1) SA, with 5 neighbors: coloring it first constrains the rest the most. (2) WA’s neighbors lose R: NT = {G, B} and SA = {G, B}. The others don’t change. (3) For example WA = R, NT = G, SA = B, Q = R, NSW = G, V = R, T = any color. On the mainland, once the colors of SA, WA and NT are picked (3 × 2 = 6 ways), everything else is forced; T has 3 choices: 6 × 3 = 18 solutions.',
          tr: '(1) 5 komşusu olan SA: önce onu boyamak geri kalanı en çok kısıtlar. (2) WA’nın komşuları K’yi kaybeder: NT = {Y, M} ve SA = {Y, M}. Diğerleri değişmez. (3) Örneğin WA = K, NT = Y, SA = M, Q = K, NSW = Y, V = K, T = herhangi bir renk. Kıtada SA, WA ve NT’nin renkleri seçilince (3 × 2 = 6 yol) geri kalan her şey zorunludur; T’nin 3 seçeneği vardır: 6 × 3 = 18 çözüm.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que choisit l’heuristique MRV ?',
        en: 'What does the MRV heuristic choose?',
        tr: 'MRV sezgiseli neyi seçer?',
      },
      options: {
        fr: ['La variable qui a le moins de valeurs encore possibles', 'La valeur la plus fréquente', 'La variable qui a le plus de valeurs'],
        en: ['The variable with the fewest remaining legal values', 'The most frequent value', 'The variable with the most values'],
        tr: ['Kalan geçerli değeri en az olan değişkeni', 'En sık görülen değeri', 'En çok değeri olan değişkeni'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'MRV (Minimum Remaining Values) traite d’abord la variable la plus contrainte : si elle n’a plus de valeur possible, on le découvre tout de suite au lieu de perdre du temps ailleurs.',
        en: 'MRV (Minimum Remaining Values) handles the most constrained variable first: if it has no legal value left, that shows up at once instead of wasting time elsewhere.',
        tr: 'MRV (Minimum Remaining Values) önce en kısıtlı değişkeni ele alır: hiç geçerli değeri kalmadıysa bu, başka yerde zaman kaybetmek yerine hemen ortaya çıkar.',
      },
    },
  },
  {
    id: 'ai-w06-logic',
    week: 6,
    title: {
      fr: 'Logique et représentation des connaissances',
      en: 'Logic and knowledge representation',
      tr: 'Mantık ve bilgi gösterimi',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un agent fondé sur les connaissances garde une base de connaissances (KB) de phrases logiques et en déduit de nouvelles. KB ⊨ α signifie que α est vraie dans tous les modèles où KB l’est. La résolution prouve α par l’absurde : on ajoute ¬α à KB, on met tout en forme normale conjonctive (clauses), et si on dérive la clause vide, α est démontrée. La logique du premier ordre ajoute objets, prédicats et quantificateurs : ∀x Etudiant(x) → Apprend(x).',
          en: 'A knowledge-based agent keeps a knowledge base (KB) of logical sentences and infers new ones. KB ⊨ α means α is true in every model where KB is. Resolution proves α by contradiction: add ¬α to KB, put everything in conjunctive normal form (clauses), and if the empty clause is derived, α is proven. First-order logic adds objects, predicates and quantifiers: ∀x Student(x) → Learns(x).',
          tr: 'Bilgi tabanlı bir etmen mantıksal tümcelerden oluşan bir bilgi tabanı (KB) tutar ve yenilerini çıkarır. KB ⊨ α, KB’nin doğru olduğu her modelde α’nın doğru olduğu anlamına gelir. Çözümleme (resolution) α’yı çelişkiyle ispatlar: KB’ye ¬α eklenir, her şey birleşimli normal biçime (tümceler) getirilir ve boş tümce türetilirse α ispatlanmıştır. Birinci dereceden mantık nesneleri, yüklemleri ve niceleyicileri ekler: ∀x Ogrenci(x) → Ogrenir(x).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Mise en clauses (FNC)\nP → Q        devient   ¬P ∨ Q\nP ↔ Q        devient   (¬P ∨ Q) ∧ (¬Q ∨ P)\n¬(P ∧ Q)     devient   ¬P ∨ ¬Q          (De Morgan)\n\nRègle de résolution\n(A ∨ B), (¬B ∨ C)  ⊢  (A ∨ C)\n(B), (¬B)          ⊢  □ (clause vide = contradiction)\n\nChaînage avant : partir des faits ; chaînage arrière : partir du but (Prolog)',
          en: 'Clause form (CNF)\nP → Q        becomes   ¬P ∨ Q\nP ↔ Q        becomes   (¬P ∨ Q) ∧ (¬Q ∨ P)\n¬(P ∧ Q)     becomes   ¬P ∨ ¬Q          (De Morgan)\n\nResolution rule\n(A ∨ B), (¬B ∨ C)  ⊢  (A ∨ C)\n(B), (¬B)          ⊢  □ (empty clause = contradiction)\n\nForward chaining: start from facts; backward chaining: start from the goal (Prolog)',
          tr: 'Tümce biçimi (BNB)\nP → Q        olur   ¬P ∨ Q\nP ↔ Q        olur   (¬P ∨ Q) ∧ (¬Q ∨ P)\n¬(P ∧ Q)     olur   ¬P ∨ ¬Q          (De Morgan)\n\nÇözümleme kuralı\n(A ∨ B), (¬B ∨ C)  ⊢  (A ∨ C)\n(B), (¬B)          ⊢  □ (boş tümce = çelişki)\n\nİleri zincirleme: olgulardan başla; geri zincirleme: hedeften başla (Prolog)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'KB : « s’il pleut, la route est mouillée » (P → Q), « si la route est mouillée, elle est glissante » (Q → R), « il pleut » (P). Démontre R par résolution. Puis traduis en logique du premier ordre : « tout étudiant de KBU qui révise réussit ».',
          en: 'KB: “if it rains, the road is wet” (P → Q), “if the road is wet, it is slippery” (Q → R), “it rains” (P). Prove R by resolution. Then translate into first-order logic: “every KBU student who revises passes”.',
          tr: 'KB: “yağmur yağarsa yol ıslaktır” (P → Q), “yol ıslaksa kaygandır” (Q → R), “yağmur yağıyor” (P). R’yi çözümlemeyle ispatla. Sonra birinci dereceden mantığa çevir: “çalışan her KBU öğrencisi geçer”.',
        },
        solution: {
          fr: 'Clauses : ¬P ∨ Q, ¬Q ∨ R, P, plus la négation du but ¬R. (¬Q ∨ R) avec ¬R donne ¬Q. (¬P ∨ Q) avec ¬Q donne ¬P. ¬P avec P donne la clause vide □ : contradiction, donc KB ⊨ R. Traduction : ∀x (EtudiantKBU(x) ∧ Revise(x)) → Reussit(x).',
          en: 'Clauses: ¬P ∨ Q, ¬Q ∨ R, P, plus the negated goal ¬R. (¬Q ∨ R) with ¬R gives ¬Q. (¬P ∨ Q) with ¬Q gives ¬P. ¬P with P gives the empty clause □: contradiction, so KB ⊨ R. Translation: ∀x (KBUStudent(x) ∧ Revises(x)) → Passes(x).',
          tr: 'Tümceler: ¬P ∨ Q, ¬Q ∨ R, P ve hedefin değili ¬R. (¬Q ∨ R) ile ¬R, ¬Q verir. (¬P ∨ Q) ile ¬Q, ¬P verir. ¬P ile P boş tümce □ verir: çelişki, yani KB ⊨ R. Çeviri: ∀x (KBUOgrencisi(x) ∧ Calisir(x)) → Gecer(x).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pour prouver α par résolution, que faut-il ajouter à la base de connaissances ?',
        en: 'To prove α by resolution, what must be added to the knowledge base?',
        tr: 'α’yı çözümlemeyle ispatlamak için bilgi tabanına ne eklenmelidir?',
      },
      options: { fr: ['α', '¬α', 'α ∨ ¬α'], en: ['α', '¬α', 'α ∨ ¬α'], tr: ['α', '¬α', 'α ∨ ¬α'] },
      answerIndex: 1,
      explanation: {
        fr: 'C’est une preuve par l’absurde : si KB ∧ ¬α mène à la clause vide, alors ¬α est impossible avec KB, donc α en découle.',
        en: 'It is proof by contradiction: if KB ∧ ¬α leads to the empty clause, then ¬α is impossible with KB, so α follows.',
        tr: 'Bu çelişkiyle ispattır: KB ∧ ¬α boş tümceye götürürse ¬α, KB ile imkânsızdır, yani α çıkar.',
      },
    },
  },
  {
    id: 'ai-w07-uncertainty',
    week: 7,
    title: {
      fr: 'Incertitude, règle de Bayes et révision de la vize',
      en: 'Uncertainty, Bayes’ rule and midterm review',
      tr: 'Belirsizlik, Bayes kuralı ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Dans le monde réel, un agent est rarement sûr de quoi que ce soit : il raisonne avec des probabilités. La règle de Bayes permet d’inverser une probabilité conditionnelle : P(Cause | Effet) = P(Effet | Cause) · P(Cause) / P(Effet). C’est la base du diagnostic médical, des filtres anti-spam (Bayes naïf) et des réseaux bayésiens, qui représentent les dépendances entre variables par un graphe.',
          en: 'In the real world an agent is rarely sure of anything: it reasons with probabilities. Bayes’ rule inverts a conditional probability: P(Cause | Effect) = P(Effect | Cause) · P(Cause) / P(Effect). It underlies medical diagnosis, spam filters (naive Bayes) and Bayesian networks, which represent dependencies between variables as a graph.',
          tr: 'Gerçek dünyada bir etmen nadiren bir şeyden emindir: olasılıklarla akıl yürütür. Bayes kuralı koşullu bir olasılığı tersine çevirir: P(Neden | Etki) = P(Etki | Neden) · P(Neden) / P(Etki). Tıbbi tanının, spam süzgeçlerinin (naif Bayes) ve değişkenler arası bağımlılıkları bir grafla gösteren Bayes ağlarının temelidir.',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Agents rationnels, PEAS, propriétés des environnements\n✔ BFS, DFS, UCS : complétude, optimalité, complexité\n✔ Gloutonne, A*, f = g + h, heuristique admissible / cohérente\n✔ Minimax, alpha-bêta (quelles feuilles sont coupées)\n✔ CSP : backtracking, MRV, degré, vérification en avant\n✔ Logique : FNC, résolution, premier ordre\n✔ Probabilités : conditionnelle, Bayes, Bayes naïf',
          en: '✔ Rational agents, PEAS, environment properties\n✔ BFS, DFS, UCS: completeness, optimality, complexity\n✔ Greedy, A*, f = g + h, admissible / consistent heuristic\n✔ Minimax, alpha-beta (which leaves get pruned)\n✔ CSP: backtracking, MRV, degree, forward checking\n✔ Logic: CNF, resolution, first order\n✔ Probability: conditional, Bayes, naive Bayes',
          tr: '✔ Rasyonel etmenler, PEAS, ortam özellikleri\n✔ BFS, DFS, UCS: tamlık, en iyilik, karmaşıklık\n✔ Açgözlü, A*, f = g + h, kabul edilebilir / tutarlı sezgisel\n✔ Minimax, alfa-beta (hangi yapraklar budanır)\n✔ CSP: geri izleme, MRV, derece, ileri denetim\n✔ Mantık: BNB, çözümleme, birinci derece\n✔ Olasılık: koşullu, Bayes, naif Bayes',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une maladie touche 1 % de la population. Le test est positif chez 90 % des malades, et faussement positif chez 5 % des personnes saines. Une personne est testée positive : quelle est la probabilité qu’elle soit malade ? Pourquoi ce résultat surprend-il ?',
          en: 'A disease affects 1% of the population. The test is positive for 90% of sick people, and falsely positive for 5% of healthy people. A person tests positive: what is the probability they are sick? Why is the result surprising?',
          tr: 'Bir hastalık nüfusun %1’ini etkiliyor. Test hastaların %90’ında pozitif, sağlıklıların %5’inde yanlışlıkla pozitif çıkıyor. Bir kişinin testi pozitif çıktı: hasta olma olasılığı nedir? Bu sonuç neden şaşırtıcıdır?',
        },
        solution: {
          fr: 'P(+) = 0,9 × 0,01 + 0,05 × 0,99 = 0,009 + 0,0495 = 0,0585. P(M | +) = 0,009 / 0,0585 ≈ 0,154, soit environ 15 %. Sur 1000 personnes, 10 sont malades (9 testées positives), mais 990 sont saines et ≈ 49,5 d’entre elles sont positives aussi : la plupart des positifs sont sains. Quand une maladie est rare, la probabilité de départ (1 %) pèse beaucoup.',
          en: 'P(+) = 0.9 × 0.01 + 0.05 × 0.99 = 0.009 + 0.0495 = 0.0585. P(S | +) = 0.009 / 0.0585 ≈ 0.154, about 15%. Out of 1000 people, 10 are sick (9 test positive), but 990 are healthy and ≈ 49.5 of them test positive too: most positives are healthy. When a disease is rare, the prior probability (1%) weighs a lot.',
          tr: 'P(+) = 0,9 × 0,01 + 0,05 × 0,99 = 0,009 + 0,0495 = 0,0585. P(H | +) = 0,009 / 0,0585 ≈ 0,154, yani yaklaşık %15. 1000 kişiden 10’u hastadır (9’u pozitif çıkar), ama 990’ı sağlıklıdır ve bunların ≈ 49,5’i de pozitif çıkar: pozitiflerin çoğu sağlıklıdır. Hastalık nadirse önsel olasılık (%1) çok ağır basar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi appelle-t-on « naïf » le classifieur de Bayes naïf ?',
        en: 'Why is the naive Bayes classifier called “naive”?',
        tr: 'Naif Bayes sınıflandırıcısına neden “naif” denir?',
      },
      options: {
        fr: ['Il suppose les attributs indépendants entre eux sachant la classe', 'Il ignore les probabilités', 'Il n’a pas besoin de données'],
        en: ['It assumes the features are independent given the class', 'It ignores probabilities', 'It needs no data'],
        tr: ['Özniteliklerin sınıf bilindiğinde birbirinden bağımsız olduğunu varsayar', 'Olasılıkları yok sayar', 'Veriye ihtiyaç duymaz'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Cette hypothèse est souvent fausse (dans un spam, « gratuit » et « gagner » vont ensemble), mais elle simplifie énormément les calculs, et le classifieur marche quand même bien.',
        en: 'The assumption is often false (in spam, “free” and “win” go together), but it simplifies the computation enormously and the classifier still works well.',
        tr: 'Bu varsayım çoğu zaman yanlıştır (spamda “ücretsiz” ve “kazan” birlikte gelir), ama hesabı çok basitleştirir ve sınıflandırıcı yine iyi çalışır.',
      },
    },
  },
  {
    id: 'ai-learning-types',
    week: 8,
    title: {
      fr: 'Les types d’apprentissage automatique',
      en: 'Types of machine learning',
      tr: 'Makine öğrenmesi türleri',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Au lieu d’écrire les règles à la main, on laisse l’agent les apprendre à partir de données. Supervisé : chaque exemple a sa réponse (étiquette) ; on prédit une classe (classification) ou un nombre (régression). Non supervisé : pas d’étiquette, on cherche une structure, comme des groupes (clustering). Par renforcement : l’agent agit, reçoit des récompenses et apprend une stratégie. On évalue toujours un modèle sur des données de test qu’il n’a jamais vues.',
          en: 'Instead of writing rules by hand, the agent learns them from data. Supervised: each example has its answer (label); predict a class (classification) or a number (regression). Unsupervised: no labels, look for structure, like groups (clustering). Reinforcement: the agent acts, receives rewards and learns a strategy. A model is always evaluated on test data it has never seen.',
          tr: 'Kuralları elle yazmak yerine etmen onları verilerden öğrenir. Denetimli: her örneğin yanıtı (etiketi) vardır; bir sınıf (sınıflandırma) veya bir sayı (bağlanım) tahmin edilir. Denetimsiz: etiket yoktur, gruplar gibi bir yapı aranır (kümeleme). Pekiştirmeli: etmen hareket eder, ödül alır ve bir strateji öğrenir. Bir model her zaman hiç görmediği test verileriyle değerlendirilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Découpage des données : entraînement 70 % | validation 15 % | test 15 %\n\nSous-apprentissage : modèle trop simple → mauvais partout\nSur-apprentissage   : modèle qui « apprend par cœur »\n                      → très bon sur l’entraînement, mauvais sur le test\nRemèdes : plus de données, régularisation, modèle plus simple,\n          validation croisée, arrêt précoce',
          en: 'Data split: training 70% | validation 15% | test 15%\n\nUnderfitting: model too simple → bad everywhere\nOverfitting : model that “memorizes”\n              → very good on training, bad on test\nRemedies: more data, regularization, simpler model,\n          cross-validation, early stopping',
          tr: 'Veri bölme: eğitim %70 | doğrulama %15 | test %15\n\nEksik öğrenme: model çok basit → her yerde kötü\nAşırı öğrenme: “ezberleyen” model\n               → eğitimde çok iyi, testte kötü\nÇözümler: daha çok veri, düzenlileştirme, daha basit model,\n          çapraz doğrulama, erken durdurma',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quel type d’apprentissage, et quelle tâche (classification, régression, clustering…), pour : (1) reconnaître les spams ; (2) prédire le prix d’une maison ; (3) regrouper des clients selon leurs achats, sans catégories connues ; (4) apprendre à un robot à marcher ? Puis : un modèle a 99 % de réussite sur l’entraînement et 62 % sur le test. Quel est le problème ?',
          en: 'Which type of learning, and which task (classification, regression, clustering…), for: (1) recognizing spam; (2) predicting a house price; (3) grouping customers by purchases, with no known categories; (4) teaching a robot to walk? Then: a model scores 99% on training and 62% on test. What is the problem?',
          tr: 'Şunlar için hangi öğrenme türü ve hangi görev (sınıflandırma, bağlanım, kümeleme…): (1) spamları tanımak; (2) bir evin fiyatını tahmin etmek; (3) bilinen kategori olmadan müşterileri alışverişlerine göre gruplamak; (4) bir robota yürümeyi öğretmek? Sonra: bir model eğitimde %99, testte %62 başarılı. Sorun nedir?',
        },
        solution: {
          fr: '(1) Supervisé, classification (spam / pas spam). (2) Supervisé, régression (un nombre). (3) Non supervisé, clustering. (4) Apprentissage par renforcement : il essaie, tombe, et reçoit une récompense quand il avance. Le modèle est en sur-apprentissage : il a mémorisé les exemples d’entraînement au lieu d’apprendre une règle générale.',
          en: '(1) Supervised, classification (spam / not spam). (2) Supervised, regression (a number). (3) Unsupervised, clustering. (4) Reinforcement learning: it tries, falls, and is rewarded when it moves forward. The model is overfitting: it memorized the training examples instead of learning a general rule.',
          tr: '(1) Denetimli, sınıflandırma (spam / spam değil). (2) Denetimli, bağlanım (bir sayı). (3) Denetimsiz, kümeleme. (4) Pekiştirmeli öğrenme: dener, düşer ve ilerleyince ödül alır. Model aşırı öğrenmiştir: genel bir kural öğrenmek yerine eğitim örneklerini ezberlemiştir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Regrouper des étudiants selon leurs notes sans catégories données à l’avance, c’est…',
        en: 'Grouping students by their grades with no categories given in advance is…',
        tr: 'Öğrencileri önceden verilmiş kategoriler olmadan notlarına göre gruplamak…',
      },
      options: {
        fr: ['de l’apprentissage supervisé', 'de l’apprentissage non supervisé', 'de l’apprentissage par renforcement'],
        en: ['supervised learning', 'unsupervised learning', 'reinforcement learning'],
        tr: ['denetimli öğrenmedir', 'denetimsiz öğrenmedir', 'pekiştirmeli öğrenmedir'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Il n’y a pas d’étiquettes : l’algorithme (par exemple k-moyennes) découvre lui-même les groupes.',
        en: 'There are no labels: the algorithm (for example k-means) discovers the groups itself.',
        tr: 'Etiket yoktur: algoritma (örneğin k-ortalamalar) grupları kendisi keşfeder.',
      },
    },
  },
  {
    id: 'ai-w09-decision-trees',
    week: 9,
    title: {
      fr: 'Arbres de décision et entropie',
      en: 'Decision trees and entropy',
      tr: 'Karar ağaçları ve entropi',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un arbre de décision pose des questions successives sur les attributs jusqu’à une feuille qui donne la classe. Pour choisir l’attribut à tester, ID3 mesure le désordre par l’entropie : H = −Σ p·log₂(p), qui vaut 0 si tous les exemples ont la même classe et 1 pour un mélange 50/50 entre deux classes. Le gain d’information d’un attribut est l’entropie avant la séparation moins la moyenne pondérée des entropies après. On choisit l’attribut de plus grand gain.',
          en: 'A decision tree asks successive questions about attributes until a leaf gives the class. To choose the attribute to test, ID3 measures disorder with entropy: H = −Σ p·log₂(p), which is 0 if every example has the same class and 1 for a 50/50 mix of two classes. An attribute’s information gain is the entropy before the split minus the weighted average of the entropies after. The attribute with the largest gain is chosen.',
          tr: 'Karar ağacı, sınıfı veren bir yaprağa ulaşana kadar öznitelikler hakkında art arda sorular sorar. Sınanacak özniteliği seçmek için ID3 düzensizliği entropiyle ölçer: H = −Σ p·log₂(p); tüm örnekler aynı sınıftaysa 0, iki sınıfın 50/50 karışımında 1’dir. Bir özniteliğin bilgi kazancı, bölünmeden önceki entropi eksi sonraki entropilerin ağırlıklı ortalamasıdır. En büyük kazançlı öznitelik seçilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Données « jouer au tennis » : 14 jours, 9 Oui / 5 Non\nH(S) = −(9/14)·log₂(9/14) − (5/14)·log₂(5/14) ≈ 0,940\n\nAttribut Ciel :\nensoleillé : 5 jours (2 Oui, 3 Non)\ncouvert    : 4 jours (4 Oui, 0 Non)\npluie      : 5 jours (3 Oui, 2 Non)\n\nGain(Ciel) = H(S) − Σ (|Sᵥ| / |S|) · H(Sᵥ)',
          en: '“Play tennis” data: 14 days, 9 Yes / 5 No\nH(S) = −(9/14)·log₂(9/14) − (5/14)·log₂(5/14) ≈ 0.940\n\nAttribute Outlook:\nsunny    : 5 days (2 Yes, 3 No)\novercast : 4 days (4 Yes, 0 No)\nrain     : 5 days (3 Yes, 2 No)\n\nGain(Outlook) = H(S) − Σ (|Sᵥ| / |S|) · H(Sᵥ)',
          tr: '“Tenis oyna” verisi: 14 gün, 9 Evet / 5 Hayır\nH(S) = −(9/14)·log₂(9/14) − (5/14)·log₂(5/14) ≈ 0,940\n\nGökyüzü özniteliği:\ngüneşli  : 5 gün (2 Evet, 3 Hayır)\nbulutlu  : 4 gün (4 Evet, 0 Hayır)\nyağmurlu : 5 gün (3 Evet, 2 Hayır)\n\nKazanç(Gökyüzü) = H(S) − Σ (|Sᵥ| / |S|) · H(Sᵥ)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Calcule l’entropie de chaque branche de Ciel, puis le gain d’information de Ciel. Pourquoi la branche « couvert » devient-elle directement une feuille ?',
          en: 'Compute the entropy of each Outlook branch, then Outlook’s information gain. Why does the “overcast” branch become a leaf right away?',
          tr: 'Gökyüzü’nün her dalının entropisini, sonra Gökyüzü’nün bilgi kazancını hesapla. “Bulutlu” dalı neden hemen yaprak olur?',
        },
        solution: {
          fr: 'Ensoleillé (2, 3) : H ≈ 0,971. Couvert (4, 0) : H = 0. Pluie (3, 2) : H ≈ 0,971. Moyenne pondérée : (5/14) × 0,971 + (4/14) × 0 + (5/14) × 0,971 ≈ 0,694. Gain = 0,940 − 0,694 ≈ 0,247. C’est le plus grand gain de ce jeu de données : Ciel devient la racine. « Couvert » est pur (100 % Oui, entropie 0) : il n’y a plus rien à séparer, c’est une feuille « Oui ».',
          en: 'Sunny (2, 3): H ≈ 0.971. Overcast (4, 0): H = 0. Rain (3, 2): H ≈ 0.971. Weighted average: (5/14) × 0.971 + (4/14) × 0 + (5/14) × 0.971 ≈ 0.694. Gain = 0.940 − 0.694 ≈ 0.247. It is the largest gain in this dataset: Outlook becomes the root. “Overcast” is pure (100% Yes, entropy 0): nothing is left to split, so it is a “Yes” leaf.',
          tr: 'Güneşli (2, 3): H ≈ 0,971. Bulutlu (4, 0): H = 0. Yağmurlu (3, 2): H ≈ 0,971. Ağırlıklı ortalama: (5/14) × 0,971 + (4/14) × 0 + (5/14) × 0,971 ≈ 0,694. Kazanç = 0,940 − 0,694 ≈ 0,247. Bu veri kümesindeki en büyük kazançtır: Gökyüzü kök olur. “Bulutlu” saftır (%100 Evet, entropi 0): bölünecek bir şey kalmaz, bir “Evet” yaprağıdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est l’entropie d’un ensemble avec 50 % de Oui et 50 % de Non ?',
        en: 'What is the entropy of a set with 50% Yes and 50% No?',
        tr: '%50 Evet ve %50 Hayır içeren bir kümenin entropisi nedir?',
      },
      options: { fr: ['0', '0,5', '1'], en: ['0', '0.5', '1'], tr: ['0', '0,5', '1'] },
      answerIndex: 2,
      explanation: {
        fr: '−0,5·log₂(0,5) − 0,5·log₂(0,5) = 0,5 + 0,5 = 1 : c’est le désordre maximal pour deux classes.',
        en: '−0.5·log₂(0.5) − 0.5·log₂(0.5) = 0.5 + 0.5 = 1: maximum disorder for two classes.',
        tr: '−0,5·log₂(0,5) − 0,5·log₂(0,5) = 0,5 + 0,5 = 1: iki sınıf için en büyük düzensizlik.',
      },
    },
  },
  {
    id: 'ai-neuron',
    week: 10,
    title: { fr: 'Le neurone artificiel et le perceptron', en: 'The artificial neuron and the perceptron', tr: 'Yapay nöron ve algılayıcı' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un neurone artificiel calcule une somme pondérée de ses entrées plus un biais, z = w₁x₁ + … + wₙxₙ + b, puis applique une fonction d’activation : seuil (perceptron), sigmoïde, ReLU (max(0, z)). La règle d’apprentissage du perceptron corrige les poids après chaque erreur : w ← w + η·(y − ŷ)·x et b ← b + η·(y − ŷ). Un perceptron seul ne sépare les classes que par une droite : il ne peut pas apprendre XOR.',
          en: 'An artificial neuron computes a weighted sum of its inputs plus a bias, z = w₁x₁ + … + wₙxₙ + b, then applies an activation function: threshold (perceptron), sigmoid, ReLU (max(0, z)). The perceptron learning rule corrects the weights after each mistake: w ← w + η·(y − ŷ)·x and b ← b + η·(y − ŷ). A single perceptron only separates classes with a straight line: it can’t learn XOR.',
          tr: 'Yapay nöron girişlerinin ağırlıklı toplamını ve bir sapmayı hesaplar, z = w₁x₁ + … + wₙxₙ + b, sonra bir etkinleştirme fonksiyonu uygular: eşik (algılayıcı), sigmoid, ReLU (max(0, z)). Algılayıcının öğrenme kuralı her hatadan sonra ağırlıkları düzeltir: w ← w + η·(y − ŷ)·x ve b ← b + η·(y − ŷ). Tek bir algılayıcı sınıfları yalnızca bir doğruyla ayırır: XOR’u öğrenemez.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Perceptron qui calcule ET : w₁ = 1, w₂ = 1, b = −1,5\nsortie = 1 si z > 0, sinon 0\nx₁ x₂ |  z     | sortie\n 0  0 | −1,5   | 0\n 0  1 | −0,5   | 0\n 1  0 | −0,5   | 0\n 1  1 |  0,5   | 1\n\nXOR (1 si x₁ ≠ x₂) : aucune droite ne sépare (0,1), (1,0) de (0,0), (1,1)\n→ il faut une couche cachée : un réseau multicouche',
          en: 'Perceptron computing AND: w₁ = 1, w₂ = 1, b = −1.5\noutput = 1 if z > 0, else 0\nx₁ x₂ |  z     | output\n 0  0 | −1.5   | 0\n 0  1 | −0.5   | 0\n 1  0 | −0.5   | 0\n 1  1 |  0.5   | 1\n\nXOR (1 if x₁ ≠ x₂): no line separates (0,1), (1,0) from (0,0), (1,1)\n→ a hidden layer is needed: a multilayer network',
          tr: 'VE hesaplayan algılayıcı: w₁ = 1, w₂ = 1, b = −1,5\nçıkış = z > 0 ise 1, değilse 0\nx₁ x₂ |  z     | çıkış\n 0  0 | −1,5   | 0\n 0  1 | −0,5   | 0\n 1  0 | −0,5   | 0\n 1  1 |  0,5   | 1\n\nXOR (x₁ ≠ x₂ ise 1): hiçbir doğru (0,1), (1,0)’ı (0,0), (1,1)’den ayıramaz\n→ gizli katman gerekir: çok katmanlı bir ağ',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Quel biais b faut-il, avec w₁ = w₂ = 1, pour obtenir OU au lieu de ET ? (2) On apprend OU avec w = (0, 0), b = 0 et η = 1. On présente (1, 1) → 1, puis (0, 0) → 0. Donne w et b après chaque exemple.',
          en: '(1) With w₁ = w₂ = 1, which bias b gives OR instead of AND? (2) OR is learned with w = (0, 0), b = 0 and η = 1. Present (1, 1) → 1, then (0, 0) → 0. Give w and b after each example.',
          tr: '(1) w₁ = w₂ = 1 iken VE yerine VEYA elde etmek için hangi b sapması gerekir? (2) VEYA, w = (0, 0), b = 0 ve η = 1 ile öğreniliyor. Önce (1, 1) → 1, sonra (0, 0) → 0 veriliyor. Her örnekten sonra w ve b’yi ver.',
        },
        solution: {
          fr: '(1) Il faut z > 0 dès qu’une entrée vaut 1, mais pas pour (0, 0) : b = −0,5 convient (z = −0,5, 0,5, 0,5, 1,5). (2) (1, 1) : z = 0, sortie 0, erreur y − ŷ = 1 → w = (0 + 1, 0 + 1) = (1, 1), b = 0 + 1 = 1. (0, 0) : z = 1 > 0, sortie 1, erreur −1 → w reste (1, 1) car x = 0, b = 1 − 1 = 0.',
          en: '(1) z must be > 0 as soon as one input is 1, but not for (0, 0): b = −0.5 works (z = −0.5, 0.5, 0.5, 1.5). (2) (1, 1): z = 0, output 0, error y − ŷ = 1 → w = (0 + 1, 0 + 1) = (1, 1), b = 0 + 1 = 1. (0, 0): z = 1 > 0, output 1, error −1 → w stays (1, 1) since x = 0, b = 1 − 1 = 0.',
          tr: '(1) Bir giriş 1 olur olmaz z > 0 olmalı, ama (0, 0) için olmamalı: b = −0,5 uygundur (z = −0,5, 0,5, 0,5, 1,5). (2) (1, 1): z = 0, çıkış 0, hata y − ŷ = 1 → w = (0 + 1, 0 + 1) = (1, 1), b = 0 + 1 = 1. (0, 0): z = 1 > 0, çıkış 1, hata −1 → x = 0 olduğundan w (1, 1) kalır, b = 1 − 1 = 0.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle fonction un perceptron seul ne peut-il pas apprendre ?',
        en: 'Which function can a single perceptron not learn?',
        tr: 'Tek bir algılayıcı hangi fonksiyonu öğrenemez?',
      },
      options: { fr: ['ET', 'OU', 'XOR'], en: ['AND', 'OR', 'XOR'], tr: ['VE', 'VEYA', 'XOR'] },
      answerIndex: 2,
      explanation: {
        fr: 'XOR n’est pas linéairement séparable. Ce résultat (Minsky et Papert, 1969) a freiné la recherche jusqu’aux réseaux multicouches entraînés par rétropropagation.',
        en: 'XOR is not linearly separable. That result (Minsky and Papert, 1969) slowed research until multilayer networks trained by backpropagation.',
        tr: 'XOR doğrusal olarak ayrılabilir değildir. Bu sonuç (Minsky ve Papert, 1969), geri yayılımla eğitilen çok katmanlı ağlara kadar araştırmaları yavaşlattı.',
      },
    },
  },
  {
    id: 'ai-training',
    week: 11,
    title: {
      fr: 'Entraîner un réseau : descente de gradient et rétropropagation',
      en: 'Training a network: gradient descent and backpropagation',
      tr: 'Ağ eğitmek: gradyan inişi ve geri yayılım',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Entraîner un réseau, c’est trouver les poids qui minimisent une fonction de perte L (par exemple l’erreur quadratique). La descente de gradient fait de petits pas dans la direction qui fait baisser la perte : w ← w − η · ∂L/∂w, où η est le taux d’apprentissage. La rétropropagation calcule efficacement tous ces gradients, de la sortie vers l’entrée, grâce à la règle de dérivation en chaîne. Une époque correspond à un passage complet sur les données.',
          en: 'Training a network means finding the weights that minimize a loss function L (for example squared error). Gradient descent takes small steps in the direction that lowers the loss: w ← w − η · ∂L/∂w, where η is the learning rate. Backpropagation computes all those gradients efficiently, from the output back to the input, using the chain rule. An epoch is one full pass over the data.',
          tr: 'Bir ağı eğitmek, bir kayıp fonksiyonunu L (örneğin karesel hata) en küçük yapan ağırlıkları bulmaktır. Gradyan inişi kaybı azaltan yönde küçük adımlar atar: w ← w − η · ∂L/∂w; η öğrenme oranıdır. Geri yayılım, zincir kuralı sayesinde tüm bu gradyanları çıkıştan girişe doğru verimli şekilde hesaplar. Bir dönem (epoch), veriler üzerinden tam bir geçiştir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Modèle à un poids : ŷ = w · x     perte L = (y − ŷ)²\n∂L/∂w = −2 · x · (y − ŷ)\n\nExemple : x = 2, y = 4 (le bon poids est w = 2), départ w = 0,5, η = 0,1\n\nη trop petit  → apprentissage très lent\nη trop grand  → les pas sautent par-dessus le minimum, la perte peut exploser\nFonctions de perte : erreur quadratique (régression), entropie croisée (classification)',
          en: 'One-weight model: ŷ = w · x     loss L = (y − ŷ)²\n∂L/∂w = −2 · x · (y − ŷ)\n\nExample: x = 2, y = 4 (the right weight is w = 2), start w = 0.5, η = 0.1\n\nη too small → very slow learning\nη too large → steps jump over the minimum, the loss can blow up\nLoss functions: squared error (regression), cross-entropy (classification)',
          tr: 'Tek ağırlıklı model: ŷ = w · x     kayıp L = (y − ŷ)²\n∂L/∂w = −2 · x · (y − ŷ)\n\nÖrnek: x = 2, y = 4 (doğru ağırlık w = 2), başlangıç w = 0,5, η = 0,1\n\nη çok küçük → çok yavaş öğrenme\nη çok büyük → adımlar en küçüğün üzerinden atlar, kayıp patlayabilir\nKayıp fonksiyonları: karesel hata (bağlanım), çapraz entropi (sınıflandırma)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec l’exemple ci-dessus, fais trois pas de descente de gradient : à chaque pas, donne ŷ, le gradient et le nouveau w. Vers quelle valeur w converge-t-il ?',
          en: 'With the example above, take three gradient descent steps: at each step, give ŷ, the gradient and the new w. Which value does w converge to?',
          tr: 'Yukarıdaki örnekle üç gradyan inişi adımı at: her adımda ŷ’yi, gradyanı ve yeni w’yi ver. w hangi değere yakınsar?',
        },
        solution: {
          fr: 'Pas 1 : ŷ = 0,5 × 2 = 1, gradient = −2 × 2 × (4 − 1) = −12, w = 0,5 − 0,1 × (−12) = 1,7. Pas 2 : ŷ = 3,4, gradient = −4 × 0,6 = −2,4, w = 1,94. Pas 3 : ŷ = 3,88, gradient = −0,48, w = 1,988. w converge vers 2 ; les pas rétrécissent à mesure que l’erreur diminue.',
          en: 'Step 1: ŷ = 0.5 × 2 = 1, gradient = −2 × 2 × (4 − 1) = −12, w = 0.5 − 0.1 × (−12) = 1.7. Step 2: ŷ = 3.4, gradient = −4 × 0.6 = −2.4, w = 1.94. Step 3: ŷ = 3.88, gradient = −0.48, w = 1.988. w converges to 2; the steps shrink as the error decreases.',
          tr: '1. adım: ŷ = 0,5 × 2 = 1, gradyan = −2 × 2 × (4 − 1) = −12, w = 0,5 − 0,1 × (−12) = 1,7. 2. adım: ŷ = 3,4, gradyan = −4 × 0,6 = −2,4, w = 1,94. 3. adım: ŷ = 3,88, gradyan = −0,48, w = 1,988. w, 2’ye yakınsar; hata azaldıkça adımlar küçülür.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que risque-t-on avec un taux d’apprentissage beaucoup trop grand ?',
        en: 'What is the risk with a far too large learning rate?',
        tr: 'Çok büyük bir öğrenme oranıyla ne riski vardır?',
      },
      options: {
        fr: ['Un apprentissage très lent', 'Des pas qui dépassent le minimum : la perte oscille ou diverge', 'Aucun risque'],
        en: ['Very slow learning', 'Steps overshoot the minimum: the loss oscillates or diverges', 'No risk'],
        tr: ['Çok yavaş öğrenme', 'Adımlar en küçüğü aşar: kayıp salınır veya ıraksar', 'Hiçbir risk yok'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Dans l’exemple, avec η = 0,6, le premier pas donne w = 0,5 + 7,2 = 7,7, bien au-delà de 2, puis l’écart grandit à chaque pas. Un η trop petit, lui, rend seulement l’apprentissage lent.',
        en: 'In the example, with η = 0.6, the first step gives w = 0.5 + 7.2 = 7.7, far past 2, and the gap then grows at every step. A too small η only makes learning slow.',
        tr: 'Örnekte η = 0,6 ile ilk adım w = 0,5 + 7,2 = 7,7 verir, 2’nin çok ötesinde, sonra fark her adımda büyür. Çok küçük bir η ise yalnızca öğrenmeyi yavaşlatır.',
      },
    },
  },
  {
    id: 'ai-w12-deep-learning',
    week: 12,
    title: {
      fr: 'Apprentissage profond et réseaux convolutifs',
      en: 'Deep learning and convolutional networks',
      tr: 'Derin öğrenme ve evrişimli ağlar',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un réseau profond empile de nombreuses couches : les premières détectent des motifs simples (bords), les suivantes des motifs de plus en plus abstraits (yeux, visages). Pour les images, on utilise des réseaux convolutifs (CNN). Un filtre de petite taille glisse sur l’image et partage ses poids partout, ce qui demande bien moins de paramètres qu’une couche dense. Le pooling réduit la taille. Contre le sur-apprentissage, on utilise le dropout, l’augmentation de données et l’arrêt précoce.',
          en: 'A deep network stacks many layers: the first detect simple patterns (edges), later ones increasingly abstract patterns (eyes, faces). For images, convolutional networks (CNNs) are used. A small filter slides over the image and shares its weights everywhere, which needs far fewer parameters than a dense layer. Pooling shrinks the size. Against overfitting: dropout, data augmentation and early stopping.',
          tr: 'Derin bir ağ birçok katmanı üst üste koyar: ilk katmanlar basit örüntüleri (kenarlar), sonrakiler giderek daha soyut örüntüleri (gözler, yüzler) algılar. Görüntüler için evrişimli ağlar (CNN) kullanılır. Küçük bir süzgeç görüntü üzerinde kayar ve ağırlıklarını her yerde paylaşır; bu, yoğun bir katmandan çok daha az parametre gerektirir. Havuzlama boyutu küçültür. Aşırı öğrenmeye karşı: dropout, veri artırma ve erken durdurma.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Taille de sortie d’une convolution :\n(N − F + 2P) / S + 1     N = entrée, F = filtre, P = marge (padding), S = pas\n\nParamètres d’une couche convolutive :\nK filtres × (F × F × C + 1)     C = canaux d’entrée, +1 pour le biais\n\nPooling max 2 × 2, pas 2 : divise largeur et hauteur par 2\nArchitecture type : [conv → ReLU → pool] × n → couches denses → softmax',
          en: 'Output size of a convolution:\n(N − F + 2P) / S + 1     N = input, F = filter, P = padding, S = stride\n\nParameters of a convolutional layer:\nK filters × (F × F × C + 1)     C = input channels, +1 for the bias\n\nMax pooling 2 × 2, stride 2: halves width and height\nTypical architecture: [conv → ReLU → pool] × n → dense layers → softmax',
          tr: 'Bir evrişimin çıkış boyutu:\n(N − F + 2P) / S + 1     N = giriş, F = süzgeç, P = dolgu, S = adım\n\nBir evrişim katmanının parametreleri:\nK süzgeç × (F × F × C + 1)     C = giriş kanalları, sapma için +1\n\n2 × 2 en büyük havuzlama, adım 2: genişlik ve yüksekliği yarıya indirir\nTipik mimari: [evrişim → ReLU → havuzlama] × n → yoğun katmanlar → softmax',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une image couleur de 32 × 32 × 3 passe dans une couche de 6 filtres 5 × 5, pas 1, sans marge, puis dans un pooling max 2 × 2 de pas 2. (1) Quelle est la taille après la convolution ? Après le pooling ? (2) Combien de paramètres a la couche convolutive ? (3) Et une couche dense reliant les 32 × 32 × 3 entrées à 6 neurones ?',
          en: 'A 32 × 32 × 3 color image goes through a layer of 6 filters of 5 × 5, stride 1, no padding, then a 2 × 2 max pooling with stride 2. (1) What is the size after the convolution? After pooling? (2) How many parameters does the convolutional layer have? (3) And a dense layer linking the 32 × 32 × 3 inputs to 6 neurons?',
          tr: '32 × 32 × 3 renkli bir görüntü 6 adet 5 × 5 süzgeçli, adım 1, dolgusuz bir katmandan, sonra adımı 2 olan 2 × 2 en büyük havuzlamadan geçiyor. (1) Evrişimden sonra boyut nedir? Havuzlamadan sonra? (2) Evrişim katmanının kaç parametresi vardır? (3) 32 × 32 × 3 girişi 6 nörona bağlayan yoğun bir katmanın?',
        },
        solution: {
          fr: '(1) (32 − 5 + 0) / 1 + 1 = 28 : 28 × 28 × 6. Après le pooling : 14 × 14 × 6. (2) 6 × (5 × 5 × 3 + 1) = 6 × 76 = 456 paramètres. (3) 32 × 32 × 3 = 3072 entrées : 6 × (3072 + 1) = 18 438 paramètres, environ 40 fois plus. C’est le partage des poids qui rend les CNN efficaces.',
          en: '(1) (32 − 5 + 0) / 1 + 1 = 28: 28 × 28 × 6. After pooling: 14 × 14 × 6. (2) 6 × (5 × 5 × 3 + 1) = 6 × 76 = 456 parameters. (3) 32 × 32 × 3 = 3072 inputs: 6 × (3072 + 1) = 18,438 parameters, about 40 times more. Weight sharing is what makes CNNs efficient.',
          tr: '(1) (32 − 5 + 0) / 1 + 1 = 28: 28 × 28 × 6. Havuzlamadan sonra: 14 × 14 × 6. (2) 6 × (5 × 5 × 3 + 1) = 6 × 76 = 456 parametre. (3) 32 × 32 × 3 = 3072 giriş: 6 × (3072 + 1) = 18.438 parametre, yaklaşık 40 kat fazla. CNN’leri verimli yapan ağırlık paylaşımıdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'À quoi sert le dropout pendant l’entraînement ?',
        en: 'What is dropout for during training?',
        tr: 'Eğitim sırasında dropout ne işe yarar?',
      },
      options: {
        fr: ['À accélérer le calcul du gradient', 'À désactiver des neurones au hasard pour limiter le sur-apprentissage', 'À augmenter la taille des images'],
        en: ['To speed up the gradient computation', 'To randomly switch neurons off to limit overfitting', 'To enlarge the images'],
        tr: ['Gradyan hesabını hızlandırmak', 'Aşırı öğrenmeyi sınırlamak için nöronları rastgele kapatmak', 'Görüntüleri büyütmek'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le réseau ne peut pas compter sur un neurone précis, il apprend donc des représentations plus robustes. Au moment de la prédiction, tous les neurones sont actifs.',
        en: 'The network can’t rely on any single neuron, so it learns sturdier representations. At prediction time, every neuron is active.',
        tr: 'Ağ belirli bir nörona güvenemez, bu yüzden daha sağlam gösterimler öğrenir. Tahmin sırasında tüm nöronlar etkindir.',
      },
    },
  },
  {
    id: 'ai-w13-reinforcement',
    week: 13,
    title: {
      fr: 'Apprentissage par renforcement et Q-learning',
      en: 'Reinforcement learning and Q-learning',
      tr: 'Pekiştirmeli öğrenme ve Q-öğrenme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En apprentissage par renforcement, un agent agit dans un environnement modélisé par un processus de décision markovien (états, actions, récompenses, transitions). Il cherche à maximiser la somme des récompenses futures actualisées : r₀ + γr₁ + γ²r₂ + …, avec 0 ≤ γ < 1. Le Q-learning apprend Q(s, a), la valeur d’une action dans un état, sans connaître le modèle. Il doit équilibrer exploration (essayer de nouvelles actions) et exploitation (choisir la meilleure connue) : stratégie ε-greedy.',
          en: 'In reinforcement learning, an agent acts in an environment modeled as a Markov decision process (states, actions, rewards, transitions). It tries to maximize the sum of discounted future rewards: r₀ + γr₁ + γ²r₂ + …, with 0 ≤ γ < 1. Q-learning learns Q(s, a), the value of an action in a state, without knowing the model. It must balance exploration (trying new actions) and exploitation (picking the best known one): the ε-greedy strategy.',
          tr: 'Pekiştirmeli öğrenmede etmen, bir Markov karar süreciyle (durumlar, eylemler, ödüller, geçişler) modellenen ortamda hareket eder. İndirimli gelecek ödüllerin toplamını en büyük yapmaya çalışır: r₀ + γr₁ + γ²r₂ + …, 0 ≤ γ < 1. Q-öğrenme, modeli bilmeden Q(s, a)’yı, yani bir durumdaki bir eylemin değerini öğrenir. Keşif (yeni eylemler denemek) ile sömürü (bilinen en iyiyi seçmek) arasında denge kurmalıdır: ε-açgözlü strateji.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Mise à jour du Q-learning (après l’action a dans l’état s) :\nQ(s, a) ← Q(s, a) + α · [ r + γ · max Q(s′, a′) − Q(s, a) ]\nα = taux d’apprentissage, γ = facteur d’actualisation\nr = récompense reçue, s′ = nouvel état\n\nε-greedy : avec la probabilité ε, action au hasard ;\n           sinon, l’action de plus grand Q\n\nSomme infinie de récompenses 1 avec γ : 1 + γ + γ² + … = 1 / (1 − γ)',
          en: 'Q-learning update (after action a in state s):\nQ(s, a) ← Q(s, a) + α · [ r + γ · max Q(s′, a′) − Q(s, a) ]\nα = learning rate, γ = discount factor\nr = reward received, s′ = new state\n\nε-greedy: with probability ε, a random action;\n          otherwise, the action with the largest Q\n\nInfinite sum of rewards of 1 with γ: 1 + γ + γ² + … = 1 / (1 − γ)',
          tr: 'Q-öğrenme güncellemesi (s durumunda a eyleminden sonra):\nQ(s, a) ← Q(s, a) + α · [ r + γ · max Q(s′, a′) − Q(s, a) ]\nα = öğrenme oranı, γ = indirim çarpanı\nr = alınan ödül, s′ = yeni durum\n\nε-açgözlü: ε olasılıkla rastgele bir eylem;\n           aksi halde Q’su en büyük eylem\n\nγ ile 1’lik ödüllerin sonsuz toplamı: 1 + γ + γ² + … = 1 / (1 − γ)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Q(s, a) = 0, α = 0,5, γ = 0,9. L’agent reçoit r = 10 et arrive dans s′, où le meilleur Q vaut 4. Que vaut le nouveau Q(s, a) ? (2) Un agent reçoit 1 point à chaque étape, pour toujours, avec γ = 0,9 : quelle est la valeur totale ? (3) Pourquoi un agent qui choisit toujours l’action de plus grand Q peut-il rester bloqué ?',
          en: '(1) Q(s, a) = 0, α = 0.5, γ = 0.9. The agent gets r = 10 and reaches s′, where the best Q is 4. What is the new Q(s, a)? (2) An agent gets 1 point at every step, forever, with γ = 0.9: what is the total value? (3) Why can an agent that always picks the largest-Q action get stuck?',
          tr: '(1) Q(s, a) = 0, α = 0,5, γ = 0,9. Etmen r = 10 alıyor ve en iyi Q’nun 4 olduğu s′’ye varıyor. Yeni Q(s, a) kaçtır? (2) Bir etmen sonsuza dek her adımda 1 puan alıyor, γ = 0,9: toplam değer nedir? (3) Her zaman Q’su en büyük eylemi seçen bir etmen neden takılıp kalabilir?',
        },
        solution: {
          fr: '(1) Q ← 0 + 0,5 × (10 + 0,9 × 4 − 0) = 0,5 × 13,6 = 6,8. (2) 1 / (1 − 0,9) = 10 : grâce à γ < 1, la somme infinie reste finie, et les récompenses lointaines comptent moins. (3) Sans exploration, il répète la première action qui a rapporté quelque chose et ne découvre jamais les meilleures. Avec ε-greedy, il essaie parfois une action au hasard.',
          en: '(1) Q ← 0 + 0.5 × (10 + 0.9 × 4 − 0) = 0.5 × 13.6 = 6.8. (2) 1 / (1 − 0.9) = 10: thanks to γ < 1, the infinite sum stays finite, and distant rewards count less. (3) Without exploration, it repeats the first action that paid off and never discovers better ones. With ε-greedy, it sometimes tries a random action.',
          tr: '(1) Q ← 0 + 0,5 × (10 + 0,9 × 4 − 0) = 0,5 × 13,6 = 6,8. (2) 1 / (1 − 0,9) = 10: γ < 1 sayesinde sonsuz toplam sonlu kalır ve uzak ödüller daha az sayılır. (3) Keşif olmadan ilk işe yarayan eylemi tekrarlar ve daha iyilerini hiç keşfetmez. ε-açgözlü ile ara sıra rastgele bir eylem dener.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que représente γ (gamma) en apprentissage par renforcement ?',
        en: 'What does γ (gamma) represent in reinforcement learning?',
        tr: 'Pekiştirmeli öğrenmede γ (gama) neyi temsil eder?',
      },
      options: {
        fr: ['Le taux d’apprentissage', 'L’importance donnée aux récompenses futures', 'La probabilité d’explorer'],
        en: ['The learning rate', 'How much future rewards matter', 'The probability of exploring'],
        tr: ['Öğrenme oranını', 'Gelecekteki ödüllerin önemini', 'Keşif olasılığını'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'γ proche de 0 : l’agent ne pense qu’à la récompense immédiate ; proche de 1 : il planifie à long terme. Le taux d’apprentissage est α, et la probabilité d’explorer ε.',
        en: 'γ near 0: the agent only cares about the immediate reward; near 1: it plans long term. The learning rate is α, and the exploration probability ε.',
        tr: 'γ 0’a yakınsa etmen yalnızca anlık ödülü düşünür; 1’e yakınsa uzun vadeli plan yapar. Öğrenme oranı α, keşif olasılığı ise ε’dur.',
      },
    },
  },
  {
    id: 'ai-w14-language-ethics',
    week: 14,
    title: {
      fr: 'Modèles de langage, éthique et révision du final',
      en: 'Language models, ethics and final review',
      tr: 'Dil modelleri, etik ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Les grands modèles de langage (LLM, comme Claude ou GPT) sont des réseaux de type Transformer. Le texte est découpé en jetons (tokens), et le mécanisme d’attention permet à chaque jeton de tenir compte de tous les autres. Entraînés à prédire le jeton suivant sur d’énormes corpus, ils produisent une distribution de probabilités (softmax) sur le vocabulaire. Questions éthiques : biais appris dans les données, hallucinations (réponses fausses mais convaincantes), vie privée, transparence et responsabilité.',
          en: 'Large language models (LLMs, like Claude or GPT) are Transformer networks. Text is split into tokens, and the attention mechanism lets each token take every other one into account. Trained to predict the next token on huge corpora, they produce a probability distribution (softmax) over the vocabulary. Ethical issues: biases learned from the data, hallucinations (false but convincing answers), privacy, transparency and accountability.',
          tr: 'Büyük dil modelleri (Claude veya GPT gibi LLM’ler) Transformer ağlarıdır. Metin jetonlara (token) bölünür ve dikkat mekanizması her jetonun diğer tüm jetonları hesaba katmasını sağlar. Dev derlemlerde bir sonraki jetonu tahmin etmek üzere eğitilirler ve sözcük dağarcığı üzerinde bir olasılık dağılımı (softmax) üretirler. Etik sorunlar: verilerden öğrenilen önyargılar, halüsinasyonlar (yanlış ama ikna edici yanıtlar), gizlilik, şeffaflık ve hesap verebilirlik.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'softmax(zᵢ) = e^(zᵢ) / Σⱼ e^(zⱼ)     (des scores → des probabilités qui somment à 1)\n\nTempérature T : softmax(z / T)\nT petit → le jeton le plus probable domine (réponses prévisibles)\nT grand → distribution plus plate (réponses plus variées)',
          en: 'softmax(zᵢ) = e^(zᵢ) / Σⱼ e^(zⱼ)     (scores → probabilities summing to 1)\n\nTemperature T: softmax(z / T)\nsmall T → the most likely token dominates (predictable answers)\nlarge T → flatter distribution (more varied answers)',
          tr: 'softmax(zᵢ) = e^(zᵢ) / Σⱼ e^(zⱼ)     (puanlar → toplamı 1 olan olasılıklar)\n\nSıcaklık T: softmax(z / T)\nküçük T → en olası jeton baskın olur (öngörülebilir yanıtlar)\nbüyük T → daha düz dağılım (daha çeşitli yanıtlar)',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Types d’apprentissage, entraînement / test, sur- et sous-apprentissage\n✔ Arbres de décision : entropie, gain d’information\n✔ Perceptron : somme pondérée, activation, règle d’apprentissage, XOR\n✔ Descente de gradient, taux d’apprentissage, rétropropagation\n✔ CNN : taille de sortie, nombre de paramètres, pooling, dropout\n✔ Renforcement : MDP, γ, Q-learning, ε-greedy\n✔ LLM : jetons, attention, softmax, température ; éthique',
          en: '✔ Learning types, training / test, overfitting and underfitting\n✔ Decision trees: entropy, information gain\n✔ Perceptron: weighted sum, activation, learning rule, XOR\n✔ Gradient descent, learning rate, backpropagation\n✔ CNN: output size, parameter count, pooling, dropout\n✔ Reinforcement: MDP, γ, Q-learning, ε-greedy\n✔ LLMs: tokens, attention, softmax, temperature; ethics',
          tr: '✔ Öğrenme türleri, eğitim / test, aşırı ve eksik öğrenme\n✔ Karar ağaçları: entropi, bilgi kazancı\n✔ Algılayıcı: ağırlıklı toplam, etkinleştirme, öğrenme kuralı, XOR\n✔ Gradyan inişi, öğrenme oranı, geri yayılım\n✔ CNN: çıkış boyutu, parametre sayısı, havuzlama, dropout\n✔ Pekiştirme: MDP, γ, Q-öğrenme, ε-açgözlü\n✔ LLM’ler: jetonlar, dikkat, softmax, sıcaklık; etik',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Un modèle donne les scores 2, 1 et 0 à trois jetons possibles. Calcule les probabilités softmax (e ≈ 2,718). (2) Un système de recrutement est entraîné sur dix ans d’embauches d’une entreprise qui recrutait surtout des hommes. Quel risque cela pose-t-il, et comment le réduire ?',
          en: '(1) A model gives scores 2, 1 and 0 to three possible tokens. Compute the softmax probabilities (e ≈ 2.718). (2) A hiring system is trained on ten years of hires at a company that mostly hired men. What risk does that pose, and how can it be reduced?',
          tr: '(1) Bir model üç olası jetona 2, 1 ve 0 puanlarını veriyor. Softmax olasılıklarını hesapla (e ≈ 2,718). (2) Bir işe alım sistemi, çoğunlukla erkek işe alan bir şirketin on yıllık işe alımlarıyla eğitiliyor. Bu hangi riski doğurur ve nasıl azaltılabilir?',
        },
        solution: {
          fr: '(1) e² ≈ 7,389, e¹ ≈ 2,718, e⁰ = 1 ; total ≈ 11,107. Probabilités ≈ 0,665, 0,245 et 0,090 : leur somme vaut 1, et l’écart de scores devient un écart de probabilités. (2) Le modèle apprend le biais des données passées et peut défavoriser les candidates, même sans voir le genre, à travers des indices indirects (clubs, écoles). Pour le réduire : auditer les résultats par groupe, rééquilibrer les données, retirer les variables qui servent d’indice, garder une décision humaine et expliquer les critères.',
          en: '(1) e² ≈ 7.389, e¹ ≈ 2.718, e⁰ = 1; total ≈ 11.107. Probabilities ≈ 0.665, 0.245 and 0.090: they sum to 1, and the gap in scores becomes a gap in probabilities. (2) The model learns the bias of past data and may disadvantage women, even without seeing gender, through indirect clues (clubs, schools). To reduce it: audit the results by group, rebalance the data, remove proxy variables, keep a human decision and explain the criteria.',
          tr: '(1) e² ≈ 7,389, e¹ ≈ 2,718, e⁰ = 1; toplam ≈ 11,107. Olasılıklar ≈ 0,665, 0,245 ve 0,090: toplamları 1’dir ve puan farkı olasılık farkına dönüşür. (2) Model geçmiş verilerin önyargısını öğrenir ve cinsiyeti görmese bile dolaylı ipuçlarıyla (kulüpler, okullar) kadın adayları dezavantajlı duruma düşürebilir. Azaltmak için: sonuçları gruplara göre denetle, verileri dengele, vekil değişkenleri çıkar, kararı bir insanda tut ve ölçütleri açıkla.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Qu’appelle-t-on une « hallucination » d’un modèle de langage ?',
        en: 'What is a language model “hallucination”?',
        tr: 'Bir dil modelinin “halüsinasyonu” nedir?',
      },
      options: {
        fr: ['Une réponse fausse présentée avec assurance', 'Une réponse trop courte', 'Un refus de répondre'],
        en: ['A false answer stated with confidence', 'An answer that is too short', 'A refusal to answer'],
        tr: ['Kendinden emin şekilde sunulan yanlış bir yanıt', 'Çok kısa bir yanıt', 'Yanıt vermeyi reddetme'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Le modèle génère un texte plausible, pas forcément vrai : une date, une référence ou un chiffre inventés. Il faut vérifier les faits importants dans une source fiable.',
        en: 'The model generates plausible text, not necessarily true text: an invented date, reference or figure. Important facts must be checked against a reliable source.',
        tr: 'Model doğru olmak zorunda olmayan, akla yatkın bir metin üretir: uydurulmuş bir tarih, kaynak veya sayı. Önemli olgular güvenilir bir kaynaktan doğrulanmalıdır.',
      },
    },
  },
];
