/**
 * BLM425 Veri Madenciliğine Giriş (Introduction to Data Mining), 14 weeks following the KBU course
 * contents, in the spirit of Han & Kamber, "Data Mining: Concepts and Techniques".
 * Weeks 1–7 prepare the midterm, weeks 8–14 the final.
 */

import type { LessonSource } from '@/data/lessons';

export const blm425Lessons: LessonSource[] = [
  {
    id: 'dm-w01-intro',
    week: 1,
    title: {
      fr: 'Introduction à la fouille de données',
      en: 'Introduction to data mining',
      tr: 'Veri madenciliğine giriş',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La fouille de données (data mining) découvre des motifs utiles, nouveaux et compréhensibles dans de grandes quantités de données. Elle est l’étape centrale du processus KDD (Knowledge Discovery in Databases).',
          en: 'Data mining discovers useful, new and understandable patterns in large amounts of data. It is the central step of the KDD process (Knowledge Discovery in Databases).',
          tr: 'Veri madenciliği büyük miktardaki verilerde yararlı, yeni ve anlaşılır örüntüler keşfeder. KDD (Veritabanlarında Bilgi Keşfi) sürecinin merkezi adımıdır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Processus KDD\nsélection → nettoyage → transformation → FOUILLE → interprétation\n\nTâches\nClassification : prédire une classe (client fidèle ou non)\nPrédiction     : prédire une valeur (chiffre d’affaires)\nAssociation    : « qui achète A achète aussi B »\nClustering     : former des groupes sans étiquettes\nDétection d’anomalies : repérer les cas anormaux (fraude)',
          en: 'KDD process\nselection → cleaning → transformation → MINING → interpretation\n\nTasks\nClassification : predict a class (loyal customer or not)\nPrediction     : predict a value (revenue)\nAssociation    : “who buys A also buys B”\nClustering     : form groups without labels\nAnomaly detection: spot abnormal cases (fraud)',
          tr: 'KDD süreci\nseçim → temizleme → dönüştürme → MADENCİLİK → yorumlama\n\nGörevler\nSınıflandırma  : bir sınıf tahmin etmek (sadık müşteri mi değil mi)\nKestirim       : bir değer tahmin etmek (ciro)\nBirliktelik    : “A’yı alan B’yi de alır”\nKümeleme       : etiketsiz gruplar oluşturmak\nAykırı değer tespiti: anormal durumları bulmak (dolandırıcılık)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quelle tâche de fouille ? (1) Un supermarché veut savoir quels produits mettre côte à côte. (2) Une banque veut prédire si un client remboursera son crédit. (3) Un opérateur veut repérer des appels frauduleux. (4) Un site veut regrouper ses visiteurs par comportement.',
          en: 'Which mining task? (1) A supermarket wants to know which products to place side by side. (2) A bank wants to predict whether a customer will repay a loan. (3) A telecom operator wants to spot fraudulent calls. (4) A website wants to group its visitors by behavior.',
          tr: 'Hangi madencilik görevi? (1) Bir süpermarket hangi ürünleri yan yana koyacağını bilmek istiyor. (2) Bir banka bir müşterinin kredisini ödeyip ödemeyeceğini tahmin etmek istiyor. (3) Bir operatör dolandırıcılık amaçlı aramaları bulmak istiyor. (4) Bir web sitesi ziyaretçilerini davranışlarına göre gruplamak istiyor.',
        },
        solution: {
          fr: '(1) Règles d’association (analyse du panier). (2) Classification (remboursera ou non). (3) Détection d’anomalies. (4) Clustering : on ne connaît pas les groupes à l’avance.',
          en: '(1) Association rules (market basket analysis). (2) Classification (will repay or not). (3) Anomaly detection. (4) Clustering: the groups are not known in advance.',
          tr: '(1) Birliktelik kuralları (sepet analizi). (2) Sınıflandırma (öder veya ödemez). (3) Aykırı değer tespiti. (4) Kümeleme: gruplar önceden bilinmez.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans le processus KDD, quelle étape vient juste avant la fouille de données ?',
        en: 'In the KDD process, which step comes right before data mining?',
        tr: 'KDD sürecinde veri madenciliğinden hemen önce hangi adım gelir?',
      },
      options: {
        fr: ['L’interprétation', 'La transformation des données', 'La publication des résultats'],
        en: ['Interpretation', 'Data transformation', 'Publishing the results'],
        tr: ['Yorumlama', 'Verilerin dönüştürülmesi', 'Sonuçların yayımlanması'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Sélection, nettoyage, transformation, puis fouille, puis interprétation. La préparation prend souvent la majorité du temps d’un projet.',
        en: 'Selection, cleaning, transformation, then mining, then interpretation. Preparation often takes most of a project’s time.',
        tr: 'Seçim, temizleme, dönüştürme, sonra madencilik, sonra yorumlama. Hazırlık çoğu zaman bir projenin zamanının büyük kısmını alır.',
      },
    },
  },
  {
    id: 'dm-w02-data',
    week: 2,
    title: {
      fr: 'Types de données et statistiques descriptives',
      en: 'Data types and descriptive statistics',
      tr: 'Veri türleri ve tanımlayıcı istatistikler',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Types d’attributs\nNominal   : catégories sans ordre (couleur, ville)\nOrdinal   : catégories ordonnées (faible / moyen / fort)\nIntervalle: écarts significatifs, pas de vrai zéro (°C, date)\nRapport   : vrai zéro, rapports significatifs (âge, salaire)\n\nTendance centrale : moyenne, médiane, mode\nDispersion        : étendue, quartiles Q1 et Q3, IQR = Q3 − Q1, écart-type\nValeurs aberrantes : < Q1 − 1,5 × IQR ou > Q3 + 1,5 × IQR (boîte à moustaches)',
          en: 'Attribute types\nNominal  : categories with no order (color, city)\nOrdinal  : ordered categories (low / medium / high)\nInterval : meaningful differences, no true zero (°C, date)\nRatio    : true zero, meaningful ratios (age, salary)\n\nCentral tendency: mean, median, mode\nSpread          : range, quartiles Q1 and Q3, IQR = Q3 − Q1, standard deviation\nOutliers        : < Q1 − 1.5 × IQR or > Q3 + 1.5 × IQR (box plot)',
          tr: 'Nitelik türleri\nNominal  : sırasız kategoriler (renk, şehir)\nSıralı   : sıralı kategoriler (düşük / orta / yüksek)\nAralık   : farklar anlamlı, gerçek sıfır yok (°C, tarih)\nOran     : gerçek sıfır var, oranlar anlamlı (yaş, maaş)\n\nMerkezi eğilim: ortalama, medyan, mod\nYayılım       : açıklık, çeyrekler Q1 ve Q3, IQR = Q3 − Q1, standart sapma\nAykırı değer  : < Q1 − 1,5 × IQR veya > Q3 + 1,5 × IQR (kutu grafiği)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'La moyenne est sensible aux valeurs extrêmes, la médiane beaucoup moins : pour des salaires, la médiane décrit mieux une personne « typique ».',
          en: 'The mean is sensitive to extreme values, the median much less: for salaries, the median better describes a “typical” person.',
          tr: 'Ortalama uç değerlere duyarlıdır, medyan çok daha az: maaşlar için medyan “tipik” bir kişiyi daha iyi tanımlar.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Données : 2, 4, 4, 5, 7, 9, 30. Calcule la moyenne, la médiane, le mode, Q1, Q3 (médianes des moitiés inférieure et supérieure) et l’IQR. 30 est-il une valeur aberrante ?',
          en: 'Data: 2, 4, 4, 5, 7, 9, 30. Compute the mean, median, mode, Q1, Q3 (medians of the lower and upper halves) and the IQR. Is 30 an outlier?',
          tr: 'Veriler: 2, 4, 4, 5, 7, 9, 30. Ortalamayı, medyanı, modu, Q1’i, Q3’ü (alt ve üst yarıların medyanları) ve IQR’yi hesapla. 30 aykırı değer midir?',
        },
        solution: {
          fr: 'Moyenne = 61 / 7 ≈ 8,7. Médiane = 5 (4e valeur). Mode = 4. Moitié basse 2, 4, 4 → Q1 = 4 ; moitié haute 7, 9, 30 → Q3 = 9 ; IQR = 5. Limite haute = 9 + 1,5 × 5 = 16,5 : 30 est une valeur aberrante. Elle tire la moyenne vers le haut (8,7), alors que la médiane reste 5.',
          en: 'Mean = 61 / 7 ≈ 8.7. Median = 5 (4th value). Mode = 4. Lower half 2, 4, 4 → Q1 = 4; upper half 7, 9, 30 → Q3 = 9; IQR = 5. Upper fence = 9 + 1.5 × 5 = 16.5: 30 is an outlier. It pulls the mean up (8.7), while the median stays 5.',
          tr: 'Ortalama = 61 / 7 ≈ 8,7. Medyan = 5 (4. değer). Mod = 4. Alt yarı 2, 4, 4 → Q1 = 4; üst yarı 7, 9, 30 → Q3 = 9; IQR = 5. Üst sınır = 9 + 1,5 × 5 = 16,5: 30 aykırı değerdir. Ortalamayı yukarı çeker (8,7), medyan ise 5 kalır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel type d’attribut est « niveau d’études : lycée / licence / master » ?',
        en: 'What attribute type is “education level: high school / bachelor / master”?',
        tr: '“Eğitim düzeyi: lise / lisans / yüksek lisans” hangi nitelik türüdür?',
      },
      options: { fr: ['Nominal', 'Ordinal', 'Rapport'], en: ['Nominal', 'Ordinal', 'Ratio'], tr: ['Nominal', 'Sıralı', 'Oran'] },
      answerIndex: 1,
      explanation: {
        fr: 'Les catégories ont un ordre naturel, mais l’écart entre elles n’a pas de valeur numérique : c’est un attribut ordinal.',
        en: 'The categories have a natural order, but the gap between them has no numeric value: it is an ordinal attribute.',
        tr: 'Kategorilerin doğal bir sırası vardır ama aralarındaki farkın sayısal bir değeri yoktur: bu sıralı bir niteliktir.',
      },
    },
  },
  {
    id: 'dm-w03-preprocessing',
    week: 3,
    title: {
      fr: 'Préparation des données',
      en: 'Data preprocessing',
      tr: 'Veri önişleme',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Nettoyage     : valeurs manquantes (ignorer, remplir par moyenne / médiane),\n                bruit (lissage par intervalles, régression), incohérences\nIntégration   : fusionner plusieurs sources (mêmes clients écrits autrement)\nTransformation: normalisation min-max, z-score, mise à l’échelle décimale\nRéduction     : échantillonnage, sélection d’attributs, ACP, agrégation\nDiscrétisation: transformer un nombre en intervalles (âge → jeune / adulte)',
          en: 'Cleaning      : missing values (ignore, fill with mean / median),\n                noise (smoothing by binning, regression), inconsistencies\nIntegration   : merge several sources (same customers written differently)\nTransformation: min-max normalization, z-score, decimal scaling\nReduction     : sampling, attribute selection, PCA, aggregation\nDiscretization: turn a number into intervals (age → young / adult)',
          tr: 'Temizleme     : eksik değerler (yok say, ortalama / medyanla doldur),\n                gürültü (aralıklarla düzeltme, regresyon), tutarsızlıklar\nBütünleştirme : birkaç kaynağı birleştirmek (farklı yazılmış aynı müşteriler)\nDönüştürme    : min-maks normalleştirme, z-skoru, ondalık ölçekleme\nİndirgeme     : örnekleme, nitelik seçimi, PCA, toplama\nAyrıklaştırma : bir sayıyı aralıklara çevirmek (yaş → genç / yetişkin)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Lissage par intervalles (binning) : on trie les valeurs, on les découpe en paquets de même taille (equal-frequency) et on remplace chaque valeur par la moyenne de son paquet (ou par la borne la plus proche). Le bruit est ainsi atténué.',
          en: 'Smoothing by binning: sort the values, split them into equal-size bins (equal-frequency) and replace each value by its bin’s mean (or the closest bin boundary). This dampens noise.',
          tr: 'Aralıklarla düzeltme (binning): değerler sıralanır, eşit büyüklükte kutulara bölünür (eşit sıklık) ve her değer kutusunun ortalamasıyla (veya en yakın sınırla) değiştirilir. Böylece gürültü azalır.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Prix triés : 4, 8, 15, 21, 21, 24, 25, 28, 34. Découpe-les en 3 intervalles de même effectif et lisse par la moyenne, puis par les bornes.',
          en: 'Sorted prices: 4, 8, 15, 21, 21, 24, 25, 28, 34. Split them into 3 equal-frequency bins and smooth by the mean, then by the boundaries.',
          tr: 'Sıralı fiyatlar: 4, 8, 15, 21, 21, 24, 25, 28, 34. Onları eşit sıklıkta 3 kutuya böl ve önce ortalamayla, sonra sınırlarla düzelt.',
        },
        solution: {
          fr: 'Intervalles : [4, 8, 15], [21, 21, 24], [25, 28, 34]. Par la moyenne : 9, 9, 9 | 22, 22, 22 | 29, 29, 29. Par les bornes (chaque valeur prend la borne la plus proche) : 4, 4, 15 | 21, 21, 24 | 25, 25, 34.',
          en: 'Bins: [4, 8, 15], [21, 21, 24], [25, 28, 34]. By the mean: 9, 9, 9 | 22, 22, 22 | 29, 29, 29. By the boundaries (each value takes the closest boundary): 4, 4, 15 | 21, 21, 24 | 25, 25, 34.',
          tr: 'Kutular: [4, 8, 15], [21, 21, 24], [25, 28, 34]. Ortalamayla: 9, 9, 9 | 22, 22, 22 | 29, 29, 29. Sınırlarla (her değer en yakın sınırı alır): 4, 4, 15 | 21, 21, 24 | 25, 25, 34.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle opération fusionne des données venant de plusieurs sources ?',
        en: 'Which operation merges data coming from several sources?',
        tr: 'Hangi işlem birkaç kaynaktan gelen verileri birleştirir?',
      },
      options: { fr: ['La réduction', 'L’intégration', 'La discrétisation'], en: ['Reduction', 'Integration', 'Discretization'], tr: ['İndirgeme', 'Bütünleştirme', 'Ayrıklaştırma'] },
      answerIndex: 1,
      explanation: {
        fr: 'L’intégration rassemble plusieurs bases et doit résoudre les conflits : mêmes entités écrites différemment, unités différentes, doublons.',
        en: 'Integration brings several databases together and must resolve conflicts: same entities written differently, different units, duplicates.',
        tr: 'Bütünleştirme birkaç veritabanını bir araya getirir ve çatışmaları çözmelidir: farklı yazılmış aynı varlıklar, farklı birimler, tekrarlar.',
      },
    },
  },
  {
    id: 'dm-w04-warehouse',
    week: 4,
    title: {
      fr: 'Entrepôts de données et OLAP',
      en: 'Data warehouses and OLAP',
      tr: 'Veri ambarları ve OLAP',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un entrepôt de données (data warehouse) est, selon Inmon, une collection de données orientée sujet, intégrée, historisée et non volatile, pour aider à la décision. Les bases opérationnelles (OLTP) gèrent les transactions du quotidien ; l’entrepôt sert à l’analyse (OLAP).',
          en: 'A data warehouse is, according to Inmon, a subject-oriented, integrated, time-variant and non-volatile collection of data to support decisions. Operational databases (OLTP) handle daily transactions; the warehouse serves analysis (OLAP).',
          tr: 'Inmon’a göre veri ambarı, karar desteği için konu odaklı, bütünleşik, zaman boyutlu ve kalıcı bir veri koleksiyonudur. Operasyonel veritabanları (OLTP) günlük işlemleri yürütür; ambar ise analize (OLAP) hizmet eder.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Schéma en étoile : une table de faits (ventes : montant, quantité)\nreliée à des tables de dimensions (temps, produit, magasin, client)\nSchéma en flocon : les dimensions sont elles-mêmes normalisées\n\nOpérations OLAP sur le cube de données\nRoll-up    : agréger (mois → trimestre → année)\nDrill-down : détailler (année → mois)\nSlice      : fixer une dimension (année = 2025)\nDice       : sous-cube sur plusieurs dimensions\nPivot      : faire tourner les axes du tableau',
          en: 'Star schema: one fact table (sales: amount, quantity)\nlinked to dimension tables (time, product, store, customer)\nSnowflake schema: the dimensions are themselves normalized\n\nOLAP operations on the data cube\nRoll-up    : aggregate (month → quarter → year)\nDrill-down : detail (year → month)\nSlice      : fix one dimension (year = 2025)\nDice       : sub-cube over several dimensions\nPivot      : rotate the table’s axes',
          tr: 'Yıldız şeması: bir olgu tablosu (satışlar: tutar, miktar)\nboyut tablolarına bağlıdır (zaman, ürün, mağaza, müşteri)\nKar tanesi şeması: boyutlar da normalleştirilmiştir\n\nVeri küpünde OLAP işlemleri\nRoll-up    : toplamak (ay → çeyrek → yıl)\nDrill-down : ayrıntıya inmek (yıl → ay)\nSlice      : bir boyutu sabitlemek (yıl = 2025)\nDice       : birkaç boyut üzerinde alt küp\nPivot      : tablonun eksenlerini döndürmek',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quelle opération OLAP ? (1) Passer des ventes par ville aux ventes par pays. (2) Ne regarder que l’année 2025. (3) Passer des ventes annuelles aux ventes mensuelles. (4) Ne garder que les produits « électronique » à Ankara et Istanbul en 2024-2025.',
          en: 'Which OLAP operation? (1) Go from sales per city to sales per country. (2) Look only at the year 2025. (3) Go from yearly to monthly sales. (4) Keep only “electronics” products in Ankara and Istanbul in 2024-2025.',
          tr: 'Hangi OLAP işlemi? (1) Şehir bazlı satışlardan ülke bazlı satışlara geçmek. (2) Yalnızca 2025 yılına bakmak. (3) Yıllık satışlardan aylık satışlara geçmek. (4) 2024-2025’te Ankara ve İstanbul’daki yalnızca “elektronik” ürünleri tutmak.',
        },
        solution: {
          fr: '(1) Roll-up : on monte dans la hiérarchie géographique. (2) Slice : une seule valeur sur une dimension. (3) Drill-down. (4) Dice : on restreint plusieurs dimensions à la fois (produit, lieu, temps).',
          en: '(1) Roll-up: going up the geographic hierarchy. (2) Slice: a single value on one dimension. (3) Drill-down. (4) Dice: several dimensions restricted at once (product, place, time).',
          tr: '(1) Roll-up: coğrafi hiyerarşide yukarı çıkılır. (2) Slice: tek bir boyutta tek bir değer. (3) Drill-down. (4) Dice: aynı anda birkaç boyut kısıtlanır (ürün, yer, zaman).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans un schéma en étoile, que contient la table de faits ?',
        en: 'In a star schema, what does the fact table contain?',
        tr: 'Yıldız şemasında olgu tablosu ne içerir?',
      },
      options: {
        fr: ['Les descriptions des produits', 'Les mesures (montants, quantités) et les clés des dimensions', 'Les mots de passe des utilisateurs'],
        en: ['Product descriptions', 'The measures (amounts, quantities) and the dimension keys', 'User passwords'],
        tr: ['Ürün açıklamaları', 'Ölçüler (tutarlar, miktarlar) ve boyut anahtarları', 'Kullanıcı parolaları'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'La table de faits contient les valeurs à analyser et les clés vers chaque dimension. Les descriptions (nom du produit, ville) sont dans les tables de dimensions.',
        en: 'The fact table holds the values to analyze and the keys to each dimension. The descriptions (product name, city) live in the dimension tables.',
        tr: 'Olgu tablosu analiz edilecek değerleri ve her boyuta giden anahtarları tutar. Açıklamalar (ürün adı, şehir) boyut tablolarındadır.',
      },
    },
  },
  {
    id: 'dm-w05-association',
    week: 5,
    title: {
      fr: 'Règles d’association : support, confiance, lift',
      en: 'Association rules: support, confidence, lift',
      tr: 'Birliktelik kuralları: destek, güven, lift',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une règle d’association A → B dit : « quand A est dans le panier, B l’est souvent aussi ». On la juge avec trois mesures, calculées sur l’ensemble des transactions.',
          en: 'An association rule A → B says: “when A is in the basket, B often is too”. It is judged with three measures, computed over all transactions.',
          tr: 'A → B birliktelik kuralı şunu söyler: “A sepetteyse çoğu zaman B de vardır”. Tüm işlemler üzerinden hesaplanan üç ölçüyle değerlendirilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'support(A → B)   = part des transactions qui contiennent A et B\nconfiance(A → B) = support(A ∪ B) / support(A)\nlift(A → B)      = confiance(A → B) / support(B)\n  lift > 1 : A et B vont ensemble plus que par hasard\n  lift = 1 : indépendants        lift < 1 : s’évitent\n\nT1 : pain, lait\nT2 : pain, couches, bière, œufs\nT3 : lait, couches, bière, cola\nT4 : pain, lait, couches, bière\nT5 : pain, lait, couches, cola',
          en: 'support(A → B)    = share of transactions containing A and B\nconfidence(A → B) = support(A ∪ B) / support(A)\nlift(A → B)       = confidence(A → B) / support(B)\n  lift > 1: A and B go together more than by chance\n  lift = 1: independent        lift < 1: they avoid each other\n\nT1: bread, milk\nT2: bread, diapers, beer, eggs\nT3: milk, diapers, beer, cola\nT4: bread, milk, diapers, beer\nT5: bread, milk, diapers, cola',
          tr: 'destek(A → B) = A ve B’yi içeren işlemlerin payı\ngüven(A → B)  = destek(A ∪ B) / destek(A)\nlift(A → B)   = güven(A → B) / destek(B)\n  lift > 1: A ve B rastlantıdan fazla birlikte bulunur\n  lift = 1: bağımsız          lift < 1: birbirinden kaçınır\n\nT1: ekmek, süt\nT2: ekmek, bebek bezi, bira, yumurta\nT3: süt, bebek bezi, bira, kola\nT4: ekmek, süt, bebek bezi, bira\nT5: ekmek, süt, bebek bezi, kola',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec les 5 transactions ci-dessus, calcule le support, la confiance et le lift de {pain} → {lait}, puis de {couches} → {bière}. Quelle règle est la plus intéressante ?',
          en: 'With the 5 transactions above, compute the support, confidence and lift of {bread} → {milk}, then of {diapers} → {beer}. Which rule is more interesting?',
          tr: 'Yukarıdaki 5 işlemle {ekmek} → {süt} ve sonra {bebek bezi} → {bira} kurallarının destek, güven ve lift değerlerini hesapla. Hangi kural daha ilginçtir?',
        },
        solution: {
          fr: '{pain, lait} est dans T1, T4 et T5 : support = 3/5 = 0,6. Pain est dans 4 transactions : confiance = 3/4 = 0,75. Lait est dans 4/5 = 0,8 : lift = 0,75 / 0,8 ≈ 0,94, un peu moins que le hasard. {couches, bière} : support = 3/5 = 0,6, confiance = 3/4 = 0,75, support(bière) = 0,6, lift = 0,75 / 0,6 = 1,25. C’est la règle la plus intéressante : un lift > 1 montre un vrai lien.',
          en: '{bread, milk} is in T1, T4 and T5: support = 3/5 = 0.6. Bread is in 4 transactions: confidence = 3/4 = 0.75. Milk is in 4/5 = 0.8: lift = 0.75 / 0.8 ≈ 0.94, slightly below chance. {diapers, beer}: support = 3/5 = 0.6, confidence = 3/4 = 0.75, support(beer) = 0.6, lift = 0.75 / 0.6 = 1.25. That is the more interesting rule: a lift > 1 shows a real link.',
          tr: '{ekmek, süt} T1, T4 ve T5’te var: destek = 3/5 = 0,6. Ekmek 4 işlemde var: güven = 3/4 = 0,75. Süt 4/5 = 0,8: lift = 0,75 / 0,8 ≈ 0,94, rastlantının biraz altında. {bebek bezi, bira}: destek = 3/5 = 0,6, güven = 3/4 = 0,75, destek(bira) = 0,6, lift = 0,75 / 0,6 = 1,25. Daha ilginç kural budur: lift > 1 gerçek bir bağ gösterir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Une règle a une confiance élevée mais un lift de 1. Que peut-on en conclure ?',
        en: 'A rule has a high confidence but a lift of 1. What can be concluded?',
        tr: 'Bir kuralın güveni yüksek ama lift değeri 1. Ne sonuç çıkarılabilir?',
      },
      options: {
        fr: ['A et B sont fortement liés', 'A et B sont indépendants : B est simplement très fréquent', 'La règle est fausse'],
        en: ['A and B are strongly linked', 'A and B are independent: B is simply very frequent', 'The rule is wrong'],
        tr: ['A ve B güçlü şekilde bağlıdır', 'A ve B bağımsızdır: B sadece çok sıktır', 'Kural yanlıştır'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Si B est dans presque tous les paniers, toute règle → B a une forte confiance. Le lift corrige cela en comparant à la fréquence de B : lift = 1 signifie aucun lien.',
        en: 'If B is in almost every basket, any rule → B has high confidence. Lift corrects this by comparing with B’s frequency: lift = 1 means no link.',
        tr: 'B neredeyse her sepette varsa → B biçimindeki her kuralın güveni yüksektir. Lift bunu B’nin sıklığıyla karşılaştırarak düzeltir: lift = 1 bağ olmadığı anlamına gelir.',
      },
    },
  },
  {
    id: 'dm-w06-apriori',
    week: 6,
    title: { fr: 'L’algorithme Apriori', en: 'The Apriori algorithm', tr: 'Apriori algoritması' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Apriori trouve les ensembles d’articles fréquents (support ≥ minsup) niveau par niveau. Propriété clé : tout sous-ensemble d’un ensemble fréquent est fréquent. Donc si {pain, bière} n’est pas fréquent, aucun ensemble qui le contient ne peut l’être : on élague sans compter.',
          en: 'Apriori finds frequent itemsets (support ≥ minsup) level by level. Key property: every subset of a frequent itemset is frequent. So if {bread, beer} is not frequent, no itemset containing it can be: it is pruned without counting.',
          tr: 'Apriori sık öğe kümelerini (destek ≥ minsup) seviye seviye bulur. Temel özellik: sık bir kümenin her alt kümesi de sıktır. Yani {ekmek, bira} sık değilse onu içeren hiçbir küme sık olamaz: sayılmadan budanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '1. L₁ = articles fréquents\n2. Pour k = 2, 3, … :\n   Cₖ = candidats de taille k obtenus en joignant Lₖ₋₁\n   élaguer les candidats dont un sous-ensemble n’est pas fréquent\n   compter le support des candidats restants → Lₖ\n3. S’arrêter quand Lₖ est vide\n4. Générer les règles de confiance ≥ minconf',
          en: '1. L₁ = frequent items\n2. For k = 2, 3, …:\n   Cₖ = size-k candidates obtained by joining Lₖ₋₁\n   prune candidates with a non-frequent subset\n   count the remaining candidates’ support → Lₖ\n3. Stop when Lₖ is empty\n4. Generate rules with confidence ≥ minconf',
          tr: '1. L₁ = sık öğeler\n2. k = 2, 3, … için:\n   Cₖ = Lₖ₋₁ birleştirilerek elde edilen k boyutlu adaylar\n   sık olmayan bir alt kümesi olan adaylar budanır\n   kalan adayların desteği sayılır → Lₖ\n3. Lₖ boşalınca durulur\n4. Güveni ≥ minconf olan kurallar üretilir',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec les 5 transactions de la semaine 5 et minsup = 3 transactions, applique Apriori : donne L₁, L₂ et dis s’il existe des ensembles fréquents de taille 3.',
          en: 'With the 5 transactions from week 5 and minsup = 3 transactions, run Apriori: give L₁, L₂ and say whether there are frequent itemsets of size 3.',
          tr: '5. haftanın 5 işlemiyle ve minsup = 3 işlemle Apriori uygula: L₁, L₂’yi ver ve 3 boyutlu sık kümeler olup olmadığını söyle.',
        },
        solution: {
          fr: 'Comptes : pain 4, lait 4, couches 4, bière 3, cola 2, œufs 1. L₁ = {pain, lait, couches, bière}. Paires : pain-lait 3, pain-couches 3, lait-couches 3, couches-bière 3, pain-bière 2, lait-bière 2. L₂ = {pain, lait}, {pain, couches}, {lait, couches}, {couches, bière}. Taille 3 : {pain, lait, couches} est le seul candidat dont tous les sous-ensembles sont fréquents, mais il n’apparaît que 2 fois (T4, T5) : aucun ensemble fréquent de taille 3.',
          en: 'Counts: bread 4, milk 4, diapers 4, beer 3, cola 2, eggs 1. L₁ = {bread, milk, diapers, beer}. Pairs: bread-milk 3, bread-diapers 3, milk-diapers 3, diapers-beer 3, bread-beer 2, milk-beer 2. L₂ = {bread, milk}, {bread, diapers}, {milk, diapers}, {diapers, beer}. Size 3: {bread, milk, diapers} is the only candidate whose subsets are all frequent, but it appears only twice (T4, T5): no frequent itemset of size 3.',
          tr: 'Sayımlar: ekmek 4, süt 4, bebek bezi 4, bira 3, kola 2, yumurta 1. L₁ = {ekmek, süt, bebek bezi, bira}. Çiftler: ekmek-süt 3, ekmek-bebek bezi 3, süt-bebek bezi 3, bebek bezi-bira 3, ekmek-bira 2, süt-bira 2. L₂ = {ekmek, süt}, {ekmek, bebek bezi}, {süt, bebek bezi}, {bebek bezi, bira}. 3 boyut: tüm alt kümeleri sık olan tek aday {ekmek, süt, bebek bezi}’dir, ama yalnızca 2 kez görünür (T4, T5): 3 boyutlu sık küme yoktur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Sur quelle propriété repose l’élagage d’Apriori ?',
        en: 'Which property does Apriori’s pruning rely on?',
        tr: 'Apriori’nin budaması hangi özelliğe dayanır?',
      },
      options: {
        fr: ['Tout sur-ensemble d’un ensemble fréquent est fréquent', 'Tout sous-ensemble d’un ensemble fréquent est fréquent', 'Les articles rares sont les plus importants'],
        en: ['Every superset of a frequent itemset is frequent', 'Every subset of a frequent itemset is frequent', 'Rare items matter most'],
        tr: ['Sık bir kümenin her üst kümesi sıktır', 'Sık bir kümenin her alt kümesi sıktır', 'Nadir öğeler en önemlisidir'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Ajouter un article ne peut que diminuer le support. Donc si un sous-ensemble est rare, l’ensemble plus grand l’est aussi : inutile de le compter.',
        en: 'Adding an item can only lower the support. So if a subset is rare, the larger set is too: no need to count it.',
        tr: 'Bir öğe eklemek desteği yalnızca düşürebilir. Yani bir alt küme nadirse daha büyük küme de nadirdir: saymaya gerek yoktur.',
      },
    },
  },
  {
    id: 'dm-w07-decision-trees',
    week: 7,
    title: {
      fr: 'Classification par arbres de décision et révision de la vize',
      en: 'Decision tree classification and midterm review',
      tr: 'Karar ağaçlarıyla sınıflandırma ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un arbre de décision teste un attribut à chaque nœud et donne une classe dans chaque feuille. Les algorithmes classiques choisissent l’attribut qui sépare le mieux : ID3 avec le gain d’information, C4.5 avec le rapport de gain (gain ratio), CART avec l’indice de Gini.',
          en: 'A decision tree tests one attribute at each node and gives a class in each leaf. Classic algorithms pick the attribute that splits best: ID3 with information gain, C4.5 with gain ratio, CART with the Gini index.',
          tr: 'Karar ağacı her düğümde bir niteliği sınar ve her yaprakta bir sınıf verir. Klasik algoritmalar en iyi ayıran niteliği seçer: ID3 bilgi kazancıyla, C4.5 kazanç oranıyla, CART Gini indeksiyle.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Gini(D) = 1 − Σ pᵢ²        (0 = nœud pur, 0,5 = 50/50 pour 2 classes)\nEntropie(D) = − Σ pᵢ log₂ pᵢ\nGain d’un attribut = impureté avant − impureté moyenne pondérée après\n\nÉlagage : couper les branches qui n’améliorent pas le test\n→ évite le surapprentissage',
          en: 'Gini(D) = 1 − Σ pᵢ²        (0 = pure node, 0.5 = 50/50 for 2 classes)\nEntropy(D) = − Σ pᵢ log₂ pᵢ\nAn attribute’s gain = impurity before − weighted average impurity after\n\nPruning: cut branches that don’t improve the test\n→ avoids overfitting',
          tr: 'Gini(D) = 1 − Σ pᵢ²        (0 = saf düğüm, 2 sınıf için 0,5 = 50/50)\nEntropi(D) = − Σ pᵢ log₂ pᵢ\nBir niteliğin kazancı = önceki saflıksızlık − sonraki ağırlıklı ortalama\n\nBudama: testi iyileştirmeyen dalları kesmek\n→ aşırı öğrenmeyi önler',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Processus KDD, tâches de fouille\n✔ Types d’attributs, moyenne / médiane / mode, quartiles, IQR, aberrants\n✔ Nettoyage, intégration, transformation, réduction, binning\n✔ Entrepôt de données, étoile / flocon, roll-up, drill-down, slice, dice\n✔ Support, confiance, lift\n✔ Apriori : niveaux, élagage, règles\n✔ Arbres de décision : Gini, entropie, gain, élagage',
          en: '✔ KDD process, mining tasks\n✔ Attribute types, mean / median / mode, quartiles, IQR, outliers\n✔ Cleaning, integration, transformation, reduction, binning\n✔ Data warehouse, star / snowflake, roll-up, drill-down, slice, dice\n✔ Support, confidence, lift\n✔ Apriori: levels, pruning, rules\n✔ Decision trees: Gini, entropy, gain, pruning',
          tr: '✔ KDD süreci, madencilik görevleri\n✔ Nitelik türleri, ortalama / medyan / mod, çeyrekler, IQR, aykırılar\n✔ Temizleme, bütünleştirme, dönüştürme, indirgeme, binning\n✔ Veri ambarı, yıldız / kar tanesi, roll-up, drill-down, slice, dice\n✔ Destek, güven, lift\n✔ Apriori: seviyeler, budama, kurallar\n✔ Karar ağaçları: Gini, entropi, kazanç, budama',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un nœud contient 6 « oui » et 4 « non ». (1) Calcule son indice de Gini. (2) Un attribut le coupe en deux nœuds purs de 6 et 4 exemples : quel est le Gini après la coupure et le gain obtenu ?',
          en: 'A node holds 6 “yes” and 4 “no”. (1) Compute its Gini index. (2) An attribute splits it into two pure nodes of 6 and 4 samples: what is the Gini after the split and the gain obtained?',
          tr: 'Bir düğümde 6 “evet” ve 4 “hayır” var. (1) Gini indeksini hesapla. (2) Bir nitelik onu 6 ve 4 örnekli iki saf düğüme bölüyor: bölmeden sonraki Gini ve elde edilen kazanç nedir?',
        },
        solution: {
          fr: '(1) Gini = 1 − (0,6² + 0,4²) = 1 − (0,36 + 0,16) = 0,48. (2) Deux nœuds purs : Gini = 0 chacun, moyenne pondérée 0. Gain = 0,48 − 0 = 0,48, le maximum possible ici : cet attribut sépare parfaitement les classes.',
          en: '(1) Gini = 1 − (0.6² + 0.4²) = 1 − (0.36 + 0.16) = 0.48. (2) Two pure nodes: Gini = 0 each, weighted average 0. Gain = 0.48 − 0 = 0.48, the maximum possible here: this attribute separates the classes perfectly.',
          tr: '(1) Gini = 1 − (0,6² + 0,4²) = 1 − (0,36 + 0,16) = 0,48. (2) İki saf düğüm: her birinin Gini’si 0, ağırlıklı ortalama 0. Kazanç = 0,48 − 0 = 0,48; burada mümkün olan en yüksek değer: bu nitelik sınıfları kusursuz ayırır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel algorithme d’arbre utilise l’indice de Gini ?',
        en: 'Which tree algorithm uses the Gini index?',
        tr: 'Hangi ağaç algoritması Gini indeksini kullanır?',
      },
      options: { fr: ['ID3', 'C4.5', 'CART'], en: ['ID3', 'C4.5', 'CART'], tr: ['ID3', 'C4.5', 'CART'] },
      answerIndex: 2,
      explanation: {
        fr: 'CART utilise Gini et produit des arbres binaires. ID3 utilise le gain d’information et C4.5 le rapport de gain, qui pénalise les attributs à très nombreuses valeurs.',
        en: 'CART uses Gini and builds binary trees. ID3 uses information gain and C4.5 the gain ratio, which penalizes attributes with very many values.',
        tr: 'CART, Gini kullanır ve ikili ağaçlar üretir. ID3 bilgi kazancını, C4.5 ise çok sayıda değeri olan nitelikleri cezalandıran kazanç oranını kullanır.',
      },
    },
  },
  {
    id: 'dm-w08-bayes',
    week: 8,
    title: {
      fr: 'Classification bayésienne naïve',
      en: 'Naive Bayesian classification',
      tr: 'Naive Bayes sınıflandırma',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le classifieur bayésien naïf choisit la classe C qui maximise P(C) × Π P(xᵢ | C), en supposant les attributs indépendants sachant la classe. Les probabilités se calculent simplement en comptant dans la table d’entraînement.',
          en: 'The naive Bayes classifier picks the class C that maximizes P(C) × Π P(xᵢ | C), assuming the attributes are independent given the class. The probabilities are simply computed by counting in the training table.',
          tr: 'Naive Bayes sınıflandırıcı, nitelikleri sınıf verildiğinde bağımsız varsayarak P(C) × Π P(xᵢ | C) değerini en büyük yapan C sınıfını seçer. Olasılıklar eğitim tablosunda sayılarak kolayca hesaplanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Jeu « jouer au tennis » : 14 jours, 9 « oui » et 5 « non »\nCiel = ensoleillé : 2 fois parmi les oui, 3 fois parmi les non\nHumidité = élevée  : 3 fois parmi les oui, 4 fois parmi les non\n\nP(oui) = 9/14     P(ensoleillé | oui) = 2/9    P(élevée | oui) = 3/9\nP(non) = 5/14     P(ensoleillé | non) = 3/5    P(élevée | non) = 4/5',
          en: '“Play tennis” dataset: 14 days, 9 “yes” and 5 “no”\nOutlook = sunny  : 2 times among yes, 3 times among no\nHumidity = high  : 3 times among yes, 4 times among no\n\nP(yes) = 9/14     P(sunny | yes) = 2/9    P(high | yes) = 3/9\nP(no)  = 5/14     P(sunny | no)  = 3/5    P(high | no)  = 4/5',
          tr: '“Tenis oynamak” veri kümesi: 14 gün, 9 “evet” ve 5 “hayır”\nHava = güneşli : evetler arasında 2, hayırlar arasında 3 kez\nNem = yüksek   : evetler arasında 3, hayırlar arasında 4 kez\n\nP(evet) = 9/14    P(güneşli | evet) = 2/9    P(yüksek | evet) = 3/9\nP(hayır) = 5/14   P(güneşli | hayır) = 3/5   P(yüksek | hayır) = 4/5',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Avec les comptes ci-dessus, faut-il jouer un jour ensoleillé et très humide ? Calcule les deux scores et la probabilité de « non ».',
          en: 'With the counts above, should we play on a sunny, very humid day? Compute both scores and the probability of “no”.',
          tr: 'Yukarıdaki sayımlarla güneşli ve çok nemli bir günde oynanmalı mı? İki skoru ve “hayır” olasılığını hesapla.',
        },
        solution: {
          fr: 'Oui : 9/14 × 2/9 × 3/9 ≈ 0,0476. Non : 5/14 × 3/5 × 4/5 ≈ 0,1714. On choisit « non ». En normalisant, P(non | x) = 0,1714 / (0,0476 + 0,1714) ≈ 0,78. Si un compte vaut 0, on applique le lissage de Laplace pour ne pas annuler tout le produit.',
          en: 'Yes: 9/14 × 2/9 × 3/9 ≈ 0.0476. No: 5/14 × 3/5 × 4/5 ≈ 0.1714. Choose “no”. Normalizing, P(no | x) = 0.1714 / (0.0476 + 0.1714) ≈ 0.78. If a count is 0, apply Laplace smoothing so the whole product isn’t wiped out.',
          tr: 'Evet: 9/14 × 2/9 × 3/9 ≈ 0,0476. Hayır: 5/14 × 3/5 × 4/5 ≈ 0,1714. “Hayır” seçilir. Normalleştirince P(hayır | x) = 0,1714 / (0,0476 + 0,1714) ≈ 0,78. Bir sayım 0 ise çarpımın tamamı sıfırlanmasın diye Laplace düzeltmesi uygulanır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi utilise-t-on le lissage de Laplace ?',
        en: 'Why is Laplace smoothing used?',
        tr: 'Laplace düzeltmesi neden kullanılır?',
      },
      options: {
        fr: ['Pour accélérer le calcul', 'Pour qu’une valeur jamais vue ne donne pas une probabilité nulle', 'Pour supprimer les attributs inutiles'],
        en: ['To speed up the computation', 'So a value never seen doesn’t give a zero probability', 'To remove useless attributes'],
        tr: ['Hesabı hızlandırmak için', 'Hiç görülmemiş bir değer sıfır olasılık vermesin diye', 'Yararsız nitelikleri silmek için'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Un seul P(xᵢ | C) = 0 annulerait tout le produit, quelles que soient les autres preuves. On ajoute 1 à chaque compte pour éviter cela.',
        en: 'A single P(xᵢ | C) = 0 would wipe out the whole product, whatever the other evidence. Adding 1 to every count avoids this.',
        tr: 'Tek bir P(xᵢ | C) = 0, diğer kanıtlar ne olursa olsun çarpımın tamamını sıfırlardı. Bunu önlemek için her sayıma 1 eklenir.',
      },
    },
  },
  {
    id: 'dm-w09-evaluation',
    week: 9,
    title: {
      fr: 'Autres classifieurs et évaluation',
      en: 'Other classifiers and evaluation',
      tr: 'Diğer sınıflandırıcılar ve değerlendirme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'D’autres classifieurs sont très utilisés en fouille : k plus proches voisins, règles « si … alors … » (extraites d’un arbre ou apprises directement), réseaux de neurones, SVM, et ensembles comme la forêt aléatoire. Quel que soit le modèle, on l’évalue sur des données qu’il n’a pas vues.',
          en: 'Other classifiers are widely used in mining: k-nearest neighbors, “if … then …” rules (extracted from a tree or learned directly), neural networks, SVMs, and ensembles such as random forests. Whatever the model, it is evaluated on data it has not seen.',
          tr: 'Madencilikte başka sınıflandırıcılar da yaygındır: k-en yakın komşu, “eğer … ise …” kuralları (bir ağaçtan çıkarılan veya doğrudan öğrenilen), yapay sinir ağları, SVM ve rastgele orman gibi topluluklar. Model ne olursa olsun görmediği veriler üzerinde değerlendirilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Holdout         : 2/3 entraînement, 1/3 test (par exemple)\nValidation croisée k plis : k découpages, chaque pli sert une fois de test\nLeave-one-out   : k = n, un seul exemple de test à chaque fois\nBootstrap       : tirage avec remise\n\nMesures : exactitude, précision, rappel, F1, matrice de confusion\nClasses déséquilibrées → ne pas se fier à la seule exactitude',
          en: 'Holdout        : 2/3 training, 1/3 test (for example)\nk-fold cross-validation: k splits, each fold is the test set once\nLeave-one-out  : k = n, a single test sample each time\nBootstrap      : sampling with replacement\n\nMeasures: accuracy, precision, recall, F1, confusion matrix\nImbalanced classes → don’t rely on accuracy alone',
          tr: 'Holdout          : 2/3 eğitim, 1/3 test (örneğin)\nk katlı çapraz doğrulama: k bölme, her kat bir kez test olur\nBirini dışarıda bırak: k = n, her seferinde tek test örneği\nBootstrap        : yerine koyarak örnekleme\n\nÖlçüler: doğruluk, kesinlik, duyarlılık, F1, karışıklık matrisi\nDengesiz sınıflar → yalnızca doğruluğa güvenme',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une base contient 1000 enregistrements. (1) En validation croisée à 10 plis, combien d’exemples de test et d’entraînement par pli, et combien de modèles entraîne-t-on ? (2) Seuls 2 % des clients fraudent : un modèle qui dit toujours « pas de fraude » a quelle exactitude ? Est-il utile ?',
          en: 'A database has 1000 records. (1) With 10-fold cross-validation, how many test and training samples per fold, and how many models are trained? (2) Only 2% of customers commit fraud: what accuracy does a model that always says “no fraud” get? Is it useful?',
          tr: 'Bir veritabanında 1000 kayıt var. (1) 10 katlı çapraz doğrulamada her katta kaç test ve eğitim örneği olur ve kaç model eğitilir? (2) Müşterilerin yalnızca %2’si dolandırıcılık yapıyor: her zaman “dolandırıcılık yok” diyen bir modelin doğruluğu nedir? Yararlı mıdır?',
        },
        solution: {
          fr: '(1) 100 exemples de test et 900 d’entraînement par pli ; on entraîne 10 modèles et on fait la moyenne des 10 scores. (2) 98 % d’exactitude, mais un rappel de 0 sur la fraude : le modèle est inutile. Il faut regarder le rappel et la précision de la classe rare, et rééquilibrer les données (sur- ou sous-échantillonnage).',
          en: '(1) 100 test and 900 training samples per fold; 10 models are trained and the 10 scores averaged. (2) 98% accuracy, but a recall of 0 on fraud: the model is useless. Look at the rare class’s recall and precision, and rebalance the data (over- or undersampling).',
          tr: '(1) Her katta 100 test ve 900 eğitim örneği; 10 model eğitilir ve 10 skorun ortalaması alınır. (2) %98 doğruluk, ama dolandırıcılıkta duyarlılık 0: model yararsızdır. Nadir sınıfın duyarlılığına ve kesinliğine bakmak ve verileri yeniden dengelemek (fazla veya az örnekleme) gerekir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'En validation croisée « leave-one-out » sur n exemples, combien de modèles entraîne-t-on ?',
        en: 'In leave-one-out cross-validation on n samples, how many models are trained?',
        tr: 'n örnek üzerinde birini dışarıda bırak çapraz doğrulamasında kaç model eğitilir?',
      },
      options: { fr: ['1', '10', 'n'], en: ['1', '10', 'n'], tr: ['1', '10', 'n'] },
      answerIndex: 2,
      explanation: {
        fr: 'Chaque exemple sert une fois de test : n modèles, chacun entraîné sur n − 1 exemples. Précis mais coûteux pour de grandes bases.',
        en: 'Each sample is the test set once: n models, each trained on n − 1 samples. Accurate but costly for large databases.',
        tr: 'Her örnek bir kez test olur: her biri n − 1 örnekle eğitilen n model. Hassas ama büyük veritabanları için maliyetlidir.',
      },
    },
  },
  {
    id: 'dm-w10-estimation',
    week: 10,
    title: {
      fr: 'Estimation (prédiction numérique)',
      en: 'Estimation (numeric prediction)',
      tr: 'Kestirim (sayısal tahmin)',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’estimation prédit une valeur numérique : prix, ventes, température. La régression linéaire multiple modélise y = b₀ + b₁x₁ + … + bₖxₖ. Il existe aussi des arbres de régression et des réseaux de neurones pour les relations non linéaires.',
          en: 'Estimation predicts a numeric value: price, sales, temperature. Multiple linear regression models y = b₀ + b₁x₁ + … + bₖxₖ. Regression trees and neural networks also handle non-linear relations.',
          tr: 'Kestirim sayısal bir değer tahmin eder: fiyat, satış, sıcaklık. Çoklu doğrusal regresyon y = b₀ + b₁x₁ + … + bₖxₖ modelini kurar. Doğrusal olmayan ilişkiler için regresyon ağaçları ve yapay sinir ağları da vardır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Erreurs (eᵢ = réel − prédit)\nMAE  = (1/n) Σ |eᵢ|          erreur absolue moyenne\nMSE  = (1/n) Σ eᵢ²           erreur quadratique moyenne\nRMSE = √MSE                  dans l’unité de y\nR²   = 1 − Σ eᵢ² / Σ (yᵢ − ȳ)²   part de la variance expliquée (1 = parfait)',
          en: 'Errors (eᵢ = actual − predicted)\nMAE  = (1/n) Σ |eᵢ|          mean absolute error\nMSE  = (1/n) Σ eᵢ²           mean squared error\nRMSE = √MSE                  in y’s unit\nR²   = 1 − Σ eᵢ² / Σ (yᵢ − ȳ)²   share of variance explained (1 = perfect)',
          tr: 'Hatalar (eᵢ = gerçek − tahmin)\nMAE  = (1/n) Σ |eᵢ|          ortalama mutlak hata\nMSE  = (1/n) Σ eᵢ²           ortalama kare hata\nRMSE = √MSE                  y’nin biriminde\nR²   = 1 − Σ eᵢ² / Σ (yᵢ − ȳ)²   açıklanan varyans payı (1 = kusursuz)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Valeurs réelles : 3, 5, 7. Valeurs prédites : 2, 5, 9. Calcule MAE, MSE, RMSE et R².',
          en: 'Actual values: 3, 5, 7. Predicted values: 2, 5, 9. Compute MAE, MSE, RMSE and R².',
          tr: 'Gerçek değerler: 3, 5, 7. Tahmin edilen değerler: 2, 5, 9. MAE, MSE, RMSE ve R² değerlerini hesapla.',
        },
        solution: {
          fr: 'Erreurs : 1, 0, −2. MAE = (1 + 0 + 2) / 3 = 1. MSE = (1 + 0 + 4) / 3 ≈ 1,67. RMSE ≈ 1,29. Moyenne réelle ȳ = 5, Σ (y − ȳ)² = 4 + 0 + 4 = 8, donc R² = 1 − 5/8 = 0,375. Le RMSE est plus grand que le MAE car il punit davantage la grosse erreur de 2.',
          en: 'Errors: 1, 0, −2. MAE = (1 + 0 + 2) / 3 = 1. MSE = (1 + 0 + 4) / 3 ≈ 1.67. RMSE ≈ 1.29. Actual mean ȳ = 5, Σ (y − ȳ)² = 4 + 0 + 4 = 8, so R² = 1 − 5/8 = 0.375. RMSE is larger than MAE because it punishes the big error of 2 more.',
          tr: 'Hatalar: 1, 0, −2. MAE = (1 + 0 + 2) / 3 = 1. MSE = (1 + 0 + 4) / 3 ≈ 1,67. RMSE ≈ 1,29. Gerçek ortalama ȳ = 5, Σ (y − ȳ)² = 4 + 0 + 4 = 8, yani R² = 1 − 5/8 = 0,375. RMSE, 2’lik büyük hatayı daha çok cezalandırdığı için MAE’den büyüktür.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle mesure s’exprime dans la même unité que la variable prédite et pénalise fort les grosses erreurs ?',
        en: 'Which measure is in the same unit as the predicted variable and strongly penalizes large errors?',
        tr: 'Hangi ölçü tahmin edilen değişkenle aynı birimdedir ve büyük hataları güçlü şekilde cezalandırır?',
      },
      options: { fr: ['MSE', 'RMSE', 'R²'], en: ['MSE', 'RMSE', 'R²'], tr: ['MSE', 'RMSE', 'R²'] },
      answerIndex: 1,
      explanation: {
        fr: 'Le MSE est au carré (unité²) ; sa racine, le RMSE, revient dans l’unité de y tout en gardant le poids fort des grandes erreurs. R² n’a pas d’unité.',
        en: 'MSE is squared (unit²); its root, the RMSE, comes back to y’s unit while keeping the heavy weight on large errors. R² has no unit.',
        tr: 'MSE karesel birimdedir; karekökü olan RMSE, büyük hatalara verilen ağırlığı koruyarak y’nin birimine döner. R²’nin birimi yoktur.',
      },
    },
  },
  {
    id: 'dm-w11-clustering',
    week: 11,
    title: {
      fr: 'Méthodes de clustering et DBSCAN',
      en: 'Clustering methods and DBSCAN',
      tr: 'Kümeleme yöntemleri ve DBSCAN',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Partitionnement : k-means (centres = moyennes),\n                  k-medoids / PAM (centres = vrais points, plus robuste)\nHiérarchique    : agglomératif (fusions) ou divisif (découpes)\nDensité         : DBSCAN, trouve des groupes de forme quelconque\n                  et marque le bruit\nGrille, modèles : STING, mélanges gaussiens (EM)',
          en: 'Partitioning : k-means (centers = means),\n               k-medoids / PAM (centers = real points, more robust)\nHierarchical : agglomerative (merges) or divisive (splits)\nDensity      : DBSCAN, finds clusters of any shape\n               and marks noise\nGrid, models : STING, Gaussian mixtures (EM)',
          tr: 'Bölümleme  : k-means (merkez = ortalama),\n             k-medoids / PAM (merkez = gerçek nokta, daha sağlam)\nHiyerarşik : birleştirici veya bölücü\nYoğunluk   : DBSCAN, her biçimde küme bulur\n             ve gürültüyü işaretler\nIzgara, model: STING, Gauss karışımları (EM)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'DBSCAN a deux paramètres : un rayon ε et un nombre minimal de points minPts. Un point est central (core) s’il a au moins minPts voisins dans son rayon (lui compris). Un point de bordure est dans le rayon d’un point central sans être central lui-même. Les autres sont du bruit. Les points centraux voisins forment un même groupe.',
          en: 'DBSCAN has two parameters: a radius ε and a minimum number of points minPts. A point is a core point if it has at least minPts neighbors within its radius (itself included). A border point is within a core point’s radius without being core itself. The others are noise. Neighboring core points form one cluster.',
          tr: 'DBSCAN’in iki parametresi vardır: bir ε yarıçapı ve en az nokta sayısı minPts. Yarıçapı içinde (kendisi dahil) en az minPts komşusu olan nokta çekirdek noktadır. Kendisi çekirdek olmadan bir çekirdek noktanın yarıçapı içinde kalan nokta sınır noktasıdır. Diğerleri gürültüdür. Komşu çekirdek noktalar aynı kümeyi oluşturur.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Points 1D : 1, 2, 3, 8, 9, 20. Applique DBSCAN avec ε = 1,5 et minPts = 3 : quels points sont centraux, de bordure ou du bruit ? Combien de groupes ?',
          en: '1D points: 1, 2, 3, 8, 9, 20. Run DBSCAN with ε = 1.5 and minPts = 3: which points are core, border or noise? How many clusters?',
          tr: '1B noktalar: 1, 2, 3, 8, 9, 20. ε = 1,5 ve minPts = 3 ile DBSCAN uygula: hangi noktalar çekirdek, sınır veya gürültüdür? Kaç küme var?',
        },
        solution: {
          fr: 'Voisinages (rayon 1,5) : 1 → {1, 2} ; 2 → {1, 2, 3} ; 3 → {2, 3} ; 8 → {8, 9} ; 9 → {8, 9} ; 20 → {20}. Seul 2 a 3 voisins : il est central. 1 et 3 sont de bordure (dans le rayon de 2). 8, 9 et 20 sont du bruit : 8 et 9 sont proches, mais ils ne sont que 2 et aucun n’est central. Résultat : un groupe {1, 2, 3}. Avec minPts = 2, {8, 9} formerait un deuxième groupe.',
          en: 'Neighborhoods (radius 1.5): 1 → {1, 2}; 2 → {1, 2, 3}; 3 → {2, 3}; 8 → {8, 9}; 9 → {8, 9}; 20 → {20}. Only 2 has 3 neighbors: it is core. 1 and 3 are border points (within 2’s radius). 8, 9 and 20 are noise: 8 and 9 are close, but there are only 2 of them and neither is core. Result: one cluster {1, 2, 3}. With minPts = 2, {8, 9} would form a second cluster.',
          tr: 'Komşuluklar (yarıçap 1,5): 1 → {1, 2}; 2 → {1, 2, 3}; 3 → {2, 3}; 8 → {8, 9}; 9 → {8, 9}; 20 → {20}. Yalnızca 2’nin 3 komşusu var: çekirdektir. 1 ve 3 sınır noktalarıdır (2’nin yarıçapında). 8, 9 ve 20 gürültüdür: 8 ve 9 yakındır ama yalnızca 2 tanedirler ve hiçbiri çekirdek değildir. Sonuç: tek küme {1, 2, 3}. minPts = 2 olsaydı {8, 9} ikinci bir küme oluştururdu.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel avantage DBSCAN a-t-il sur k-means ?',
        en: 'What advantage does DBSCAN have over k-means?',
        tr: 'DBSCAN’in k-means’e göre avantajı nedir?',
      },
      options: {
        fr: ['Il faut lui donner le nombre de groupes', 'Il trouve des groupes de forme quelconque et repère le bruit', 'Il est toujours plus rapide'],
        en: ['You must give it the number of clusters', 'It finds clusters of any shape and detects noise', 'It is always faster'],
        tr: ['Küme sayısını vermek gerekir', 'Her biçimde küme bulur ve gürültüyü tespit eder', 'Her zaman daha hızlıdır'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'DBSCAN n’a pas besoin de k, suit des formes non rondes (anneaux, croissants) et laisse les points isolés en bruit. Il est en revanche sensible au choix de ε et minPts.',
        en: 'DBSCAN needs no k, follows non-round shapes (rings, crescents) and leaves isolated points as noise. On the other hand, it is sensitive to the choice of ε and minPts.',
        tr: 'DBSCAN k’ya ihtiyaç duymaz, yuvarlak olmayan biçimleri (halkalar, hilaller) izler ve yalıtılmış noktaları gürültü olarak bırakır. Buna karşın ε ve minPts seçimine duyarlıdır.',
      },
    },
  },
  {
    id: 'dm-w12-problems',
    week: 12,
    title: {
      fr: 'Problèmes de la fouille et détection d’anomalies',
      en: 'Data mining issues and outlier detection',
      tr: 'Veri madenciliği sorunları ve aykırı değer tespiti',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'Problèmes courants\nQualité   : données manquantes, bruitées, incohérentes\nVolume    : passage à l’échelle (millions de lignes, flux en continu)\nDimension : trop d’attributs → malédiction de la dimension\nDéséquilibre : classe rare (fraude, maladie)\nVie privée : données personnelles, anonymisation, KVKK / RGPD\nInterprétation : un motif peut être un hasard (corrélation ≠ causalité)',
          en: 'Common issues\nQuality    : missing, noisy, inconsistent data\nVolume     : scalability (millions of rows, data streams)\nDimension  : too many attributes → curse of dimensionality\nImbalance  : a rare class (fraud, disease)\nPrivacy    : personal data, anonymization, KVKK / GDPR\nInterpretation: a pattern can be chance (correlation ≠ causation)',
          tr: 'Yaygın sorunlar\nKalite     : eksik, gürültülü, tutarsız veri\nHacim      : ölçeklenebilirlik (milyonlarca satır, veri akışları)\nBoyut      : çok fazla nitelik → boyut laneti\nDengesizlik: nadir bir sınıf (dolandırıcılık, hastalık)\nGizlilik   : kişisel veriler, anonimleştirme, KVKK / GDPR\nYorumlama  : bir örüntü rastlantı olabilir (korelasyon ≠ nedensellik)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Une valeur aberrante (outlier) s’éloigne nettement des autres. On la détecte par des statistiques (z-score, règle de l’IQR), par la distance (peu de voisins proches) ou par la densité (LOF). Elle peut être une erreur à corriger… ou exactement ce qu’on cherche, comme une fraude.',
          en: 'An outlier clearly stands apart from the others. It is detected with statistics (z-score, IQR rule), distance (few close neighbors) or density (LOF). It may be an error to fix… or exactly what we are looking for, such as fraud.',
          tr: 'Aykırı değer diğerlerinden belirgin şekilde uzaktır. İstatistikle (z-skoru, IQR kuralı), uzaklıkla (az sayıda yakın komşu) veya yoğunlukla (LOF) tespit edilir. Düzeltilmesi gereken bir hata olabilir… ya da dolandırıcılık gibi tam aranan şey.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Les montants des achats d’un client ont une moyenne de 50 € et un écart-type de 5 €. Trois nouveaux achats : 58 €, 68 € et 41 €. Avec la règle |z| > 3, lesquels sont suspects ?',
          en: 'A customer’s purchases have a mean of 50 € and a standard deviation of 5 €. Three new purchases: 58 €, 68 € and 41 €. With the rule |z| > 3, which ones are suspicious?',
          tr: 'Bir müşterinin alışverişlerinin ortalaması 50 € ve standart sapması 5 €. Üç yeni alışveriş: 58 €, 68 € ve 41 €. |z| > 3 kuralıyla hangileri şüphelidir?',
        },
        solution: {
          fr: 'z = (x − 50) / 5. 58 € : z = 1,6. 68 € : z = 3,6. 41 € : z = −1,8. Seul 68 € dépasse 3 en valeur absolue : il est signalé pour vérification. Attention : le z-score suppose une distribution à peu près normale ; sinon, la règle de l’IQR est plus sûre.',
          en: 'z = (x − 50) / 5. 58 €: z = 1.6. 68 €: z = 3.6. 41 €: z = −1.8. Only 68 € exceeds 3 in absolute value: it is flagged for review. Careful: the z-score assumes a roughly normal distribution; otherwise the IQR rule is safer.',
          tr: 'z = (x − 50) / 5. 58 €: z = 1,6. 68 €: z = 3,6. 41 €: z = −1,8. Yalnızca 68 € mutlak değerce 3’ü aşar: kontrol için işaretlenir. Dikkat: z-skoru yaklaşık normal bir dağılım varsayar; değilse IQR kuralı daha güvenlidir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Une forte corrélation entre ventes de glaces et noyades prouve-t-elle que les glaces causent des noyades ?',
        en: 'Does a strong correlation between ice cream sales and drownings prove that ice cream causes drownings?',
        tr: 'Dondurma satışları ile boğulmalar arasındaki güçlü bir korelasyon, dondurmanın boğulmaya neden olduğunu kanıtlar mı?',
      },
      options: {
        fr: ['Oui', 'Non : un troisième facteur (la chaleur) explique les deux', 'Seulement si le lift est supérieur à 1'],
        en: ['Yes', 'No: a third factor (hot weather) explains both', 'Only if the lift is above 1'],
        tr: ['Evet', 'Hayır: üçüncü bir etken (sıcak hava) ikisini de açıklar', 'Yalnızca lift 1’den büyükse'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Corrélation n’est pas causalité : en été, on mange plus de glaces ET on se baigne plus. La fouille trouve des liens, l’analyste doit les interpréter avec prudence.',
        en: 'Correlation is not causation: in summer people eat more ice cream AND swim more. Mining finds links; the analyst must interpret them carefully.',
        tr: 'Korelasyon nedensellik değildir: yazın hem daha çok dondurma yenir HEM de daha çok yüzülür. Madencilik bağları bulur, analist onları dikkatle yorumlamalıdır.',
      },
    },
  },
  {
    id: 'dm-w13-text-mining',
    week: 13,
    title: { fr: 'La fouille de textes', en: 'Text mining', tr: 'Metin madenciliği' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Pour fouiller des textes, on les transforme en nombres. Prétraitement : découper en mots (tokenisation), mettre en minuscules, retirer les mots vides (« et », « le »), ramener les mots à leur racine (stemming). En turc, langue agglutinante, c’est essentiel : « kitaplarımızdan » vient de « kitap ».',
          en: 'To mine texts, they are turned into numbers. Preprocessing: split into words (tokenization), lowercase, remove stop words (“and”, “the”), reduce words to their root (stemming). In Turkish, an agglutinative language, this is essential: “kitaplarımızdan” comes from “kitap”.',
          tr: 'Metinleri madenciliğe uygun hale getirmek için sayılara çevrilir. Önişleme: kelimelere ayırma (tokenleştirme), küçük harfe çevirme, durak kelimeleri (“ve”, “bir”) çıkarma, kelimeleri köklerine indirme (gövdeleme). Sondan eklemeli bir dil olan Türkçede bu çok önemlidir: “kitaplarımızdan” kelimesi “kitap” kökündendir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Sac de mots : chaque document = vecteur de fréquences des mots\nTF-IDF(t, d) = tf(t, d) × log(N / df(t))\n  tf = fréquence du mot dans le document\n  df = nombre de documents qui contiennent le mot, N = nombre total\n  un mot présent partout (« le ») a un poids presque nul\nSimilarité cosinus : cos(A, B) = A·B / (‖A‖ ‖B‖)\nApplications : classification de textes, analyse de sentiment, résumé',
          en: 'Bag of words: each document = vector of word frequencies\nTF-IDF(t, d) = tf(t, d) × log(N / df(t))\n  tf = frequency of the word in the document\n  df = number of documents containing the word, N = total number\n  a word found everywhere (“the”) gets a near-zero weight\nCosine similarity: cos(A, B) = A·B / (‖A‖ ‖B‖)\nApplications: text classification, sentiment analysis, summarization',
          tr: 'Kelime torbası: her belge = kelime sıklıkları vektörü\nTF-IDF(t, d) = tf(t, d) × log(N / df(t))\n  tf = kelimenin belgedeki sıklığı\n  df = kelimeyi içeren belge sayısı, N = toplam belge sayısı\n  her yerde geçen bir kelime (“ve”) neredeyse sıfır ağırlık alır\nKosinüs benzerliği: cos(A, B) = A·B / (‖A‖ ‖B‖)\nUygulamalar: metin sınıflandırma, duygu analizi, özetleme',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un document de 100 mots contient 3 fois le mot « algorithme ». Ce mot apparaît dans 10 des 1000 documents de la collection. Calcule son TF-IDF (log en base 10). Que vaudrait l’IDF d’un mot présent dans les 1000 documents ?',
          en: 'A 100-word document contains the word “algorithm” 3 times. The word appears in 10 of the collection’s 1000 documents. Compute its TF-IDF (base-10 log). What would the IDF be for a word found in all 1000 documents?',
          tr: '100 kelimelik bir belgede “algoritma” kelimesi 3 kez geçiyor. Kelime koleksiyondaki 1000 belgenin 10’unda var. TF-IDF değerini hesapla (10 tabanında log). 1000 belgenin hepsinde geçen bir kelimenin IDF’i ne olurdu?',
        },
        solution: {
          fr: 'tf = 3 / 100 = 0,03. idf = log₁₀(1000 / 10) = log₁₀(100) = 2. TF-IDF = 0,03 × 2 = 0,06. Pour un mot présent partout, idf = log₁₀(1000 / 1000) = log₁₀(1) = 0 : il ne distingue aucun document, son poids est nul.',
          en: 'tf = 3 / 100 = 0.03. idf = log₁₀(1000 / 10) = log₁₀(100) = 2. TF-IDF = 0.03 × 2 = 0.06. For a word found everywhere, idf = log₁₀(1000 / 1000) = log₁₀(1) = 0: it distinguishes no document, its weight is zero.',
          tr: 'tf = 3 / 100 = 0,03. idf = log₁₀(1000 / 10) = log₁₀(100) = 2. TF-IDF = 0,03 × 2 = 0,06. Her yerde geçen bir kelime için idf = log₁₀(1000 / 1000) = log₁₀(1) = 0: hiçbir belgeyi ayırt etmez, ağırlığı sıfırdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi le stemming est-il particulièrement utile en turc ?',
        en: 'Why is stemming especially useful in Turkish?',
        tr: 'Gövdeleme neden özellikle Türkçede yararlıdır?',
      },
      options: {
        fr: ['Le turc n’a pas de mots vides', 'Le turc ajoute beaucoup de suffixes à une même racine', 'Le turc s’écrit sans espaces'],
        en: ['Turkish has no stop words', 'Turkish adds many suffixes to the same root', 'Turkish is written without spaces'],
        tr: ['Türkçede durak kelime yoktur', 'Türkçe aynı köke çok sayıda ek ekler', 'Türkçe boşluksuz yazılır'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Sans stemming, « kitap », « kitaplar », « kitabımız » compteraient comme des mots différents : les vecteurs seraient énormes et la même idée serait dispersée.',
        en: 'Without stemming, “kitap”, “kitaplar”, “kitabımız” would count as different words: the vectors would be huge and the same idea scattered.',
        tr: 'Gövdeleme olmadan “kitap”, “kitaplar”, “kitabımız” farklı kelimeler sayılırdı: vektörler çok büyür ve aynı fikir dağılırdı.',
      },
    },
  },
  {
    id: 'dm-w14-web-mining',
    week: 14,
    title: {
      fr: 'Fouille du web, applications et révision du final',
      en: 'Web mining, applications and final review',
      tr: 'Web madenciliği, uygulamalar ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La fouille du web a trois branches : le contenu (le texte et les images des pages), la structure (les liens entre pages, par exemple PageRank de Google) et l’usage (les journaux de navigation, pour la recommandation et la personnalisation).',
          en: 'Web mining has three branches: content (the pages’ text and images), structure (the links between pages, e.g. Google’s PageRank) and usage (browsing logs, for recommendation and personalization).',
          tr: 'Web madenciliğinin üç dalı vardır: içerik (sayfaların metni ve görüntüleri), yapı (sayfalar arasındaki bağlantılar, örn. Google’ın PageRank’i) ve kullanım (öneri ve kişiselleştirme için gezinme kayıtları).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'PageRank, facteur d’amortissement d = 0,85, N pages\nPR(A) = (1 − d) / N + d × Σ PR(T) / L(T)\n        pour chaque page T qui pointe vers A, L(T) = nombre de liens sortants de T\nUne page importante est une page citée par des pages importantes.\n\nApplications : recommandation (e-commerce), détection de fraude,\nsegmentation des clients, santé, éducation (prédire l’abandon)',
          en: 'PageRank, damping factor d = 0.85, N pages\nPR(A) = (1 − d) / N + d × Σ PR(T) / L(T)\n        for each page T linking to A, L(T) = number of T’s outgoing links\nAn important page is one cited by important pages.\n\nApplications: recommendation (e-commerce), fraud detection,\ncustomer segmentation, health, education (predicting dropout)',
          tr: 'PageRank, sönümleme katsayısı d = 0,85, N sayfa\nPR(A) = (1 − d) / N + d × Σ PR(T) / L(T)\n        A’ya bağlantı veren her T sayfası için, L(T) = T’nin dış bağlantı sayısı\nÖnemli sayfa, önemli sayfaların atıf yaptığı sayfadır.\n\nUygulamalar: öneri (e-ticaret), dolandırıcılık tespiti,\nmüşteri bölümleme, sağlık, eğitim (okulu bırakmayı tahmin etmek)',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Bayes naïf, lissage de Laplace\n✔ k-NN, règles, ensembles ; holdout, validation croisée, classes rares\n✔ Régression, MAE, MSE, RMSE, R²\n✔ k-means, k-medoids, hiérarchique, DBSCAN (central / bordure / bruit)\n✔ Problèmes de la fouille, z-score, IQR, corrélation ≠ causalité\n✔ Fouille de textes : prétraitement, stemming, TF-IDF, cosinus\n✔ Fouille du web : contenu, structure (PageRank), usage',
          en: '✔ Naive Bayes, Laplace smoothing\n✔ k-NN, rules, ensembles; holdout, cross-validation, rare classes\n✔ Regression, MAE, MSE, RMSE, R²\n✔ k-means, k-medoids, hierarchical, DBSCAN (core / border / noise)\n✔ Mining issues, z-score, IQR, correlation ≠ causation\n✔ Text mining: preprocessing, stemming, TF-IDF, cosine\n✔ Web mining: content, structure (PageRank), usage',
          tr: '✔ Naive Bayes, Laplace düzeltmesi\n✔ k-NN, kurallar, topluluklar; holdout, çapraz doğrulama, nadir sınıflar\n✔ Regresyon, MAE, MSE, RMSE, R²\n✔ k-means, k-medoids, hiyerarşik, DBSCAN (çekirdek / sınır / gürültü)\n✔ Madencilik sorunları, z-skoru, IQR, korelasyon ≠ nedensellik\n✔ Metin madenciliği: önişleme, gövdeleme, TF-IDF, kosinüs\n✔ Web madenciliği: içerik, yapı (PageRank), kullanım',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Trois pages : A pointe vers B et C, B pointe vers C, C pointe vers A. Au départ, chaque page vaut 1/3. Fais une itération de PageRank avec d = 0,85. Quelle page est la plus importante ?',
          en: 'Three pages: A links to B and C, B links to C, C links to A. At the start each page is worth 1/3. Run one PageRank iteration with d = 0.85. Which page is the most important?',
          tr: 'Üç sayfa: A, B ve C’ye; B, C’ye; C, A’ya bağlantı veriyor. Başlangıçta her sayfa 1/3 değerinde. d = 0,85 ile bir PageRank yinelemesi yap. En önemli sayfa hangisidir?',
        },
        solution: {
          fr: '(1 − d) / N = 0,15 / 3 = 0,05. PR(A) = 0,05 + 0,85 × (1/3) / 1 ≈ 0,333 (seul C pointe vers A). PR(B) = 0,05 + 0,85 × (1/3) / 2 ≈ 0,192 (A a 2 liens). PR(C) = 0,05 + 0,85 × [(1/3) / 2 + (1/3) / 1] = 0,05 + 0,85 × 0,5 = 0,475. C est la plus importante : elle reçoit des liens de A et de B. La somme reste 1.',
          en: '(1 − d) / N = 0.15 / 3 = 0.05. PR(A) = 0.05 + 0.85 × (1/3) / 1 ≈ 0.333 (only C links to A). PR(B) = 0.05 + 0.85 × (1/3) / 2 ≈ 0.192 (A has 2 links). PR(C) = 0.05 + 0.85 × [(1/3) / 2 + (1/3) / 1] = 0.05 + 0.85 × 0.5 = 0.475. C is the most important: it gets links from both A and B. The sum stays 1.',
          tr: '(1 − d) / N = 0,15 / 3 = 0,05. PR(A) = 0,05 + 0,85 × (1/3) / 1 ≈ 0,333 (A’ya yalnızca C bağlanır). PR(B) = 0,05 + 0,85 × (1/3) / 2 ≈ 0,192 (A’nın 2 bağlantısı var). PR(C) = 0,05 + 0,85 × [(1/3) / 2 + (1/3) / 1] = 0,05 + 0,85 × 0,5 = 0,475. En önemlisi C’dir: hem A’dan hem B’den bağlantı alır. Toplam 1 kalır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle branche de la fouille du web utilise les journaux de navigation des visiteurs ?',
        en: 'Which web mining branch uses visitors’ browsing logs?',
        tr: 'Web madenciliğinin hangi dalı ziyaretçilerin gezinme kayıtlarını kullanır?',
      },
      options: {
        fr: ['Fouille du contenu', 'Fouille de la structure', 'Fouille de l’usage'],
        en: ['Content mining', 'Structure mining', 'Usage mining'],
        tr: ['İçerik madenciliği', 'Yapı madenciliği', 'Kullanım madenciliği'],
      },
      answerIndex: 2,
      explanation: {
        fr: 'La fouille de l’usage analyse les clics, les pages visitées et les sessions, par exemple pour recommander des produits ou réorganiser un site.',
        en: 'Usage mining analyzes clicks, visited pages and sessions, for example to recommend products or reorganize a site.',
        tr: 'Kullanım madenciliği tıklamaları, ziyaret edilen sayfaları ve oturumları analiz eder; örneğin ürün önermek veya bir siteyi yeniden düzenlemek için.',
      },
    },
  },
];
