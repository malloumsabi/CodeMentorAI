/**
 * Introduction to Machine Learning, 14 weeks. Not in the official KBU curriculum: it follows a classic
 * introductory syllabus, with Python (scikit-learn) examples. Weeks 1–7 prepare the midterm, 8–14 the final.
 */

import type { LessonSource } from '@/data/lessons';

export const mlLessons: LessonSource[] = [
  {
    id: 'ml-w01-intro',
    week: 1,
    title: {
      fr: 'Qu’est-ce que l’apprentissage automatique ?',
      en: 'What is machine learning?',
      tr: 'Makine öğrenmesi nedir?',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’apprentissage automatique (machine learning) permet à un programme d’apprendre une tâche à partir de données, au lieu de suivre des règles écrites à la main. Définition de Mitchell : un programme apprend d’une expérience E pour une tâche T si sa performance P sur T s’améliore avec E.',
          en: 'Machine learning lets a program learn a task from data, instead of following hand-written rules. Mitchell’s definition: a program learns from experience E for a task T if its performance P on T improves with E.',
          tr: 'Makine öğrenmesi, bir programın elle yazılmış kurallar yerine verilerden bir görevi öğrenmesini sağlar. Mitchell’in tanımı: bir program, T görevindeki P başarımı E deneyimiyle artıyorsa, T görevi için E deneyiminden öğrenir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Supervisé      : données avec la bonne réponse (étiquette)\n  régression     → prédire un nombre (prix d’une maison)\n  classification → prédire une classe (spam ou non)\nNon supervisé  : données sans étiquette → trouver des groupes, réduire\nPar renforcement : un agent apprend par essais, récompenses et pénalités\n\nVocabulaire : exemple (ligne), caractéristiques X (features),\n              étiquette y (label), modèle, entraînement, prédiction',
          en: 'Supervised    : data with the right answer (label)\n  regression     → predict a number (a house price)\n  classification → predict a class (spam or not)\nUnsupervised  : unlabeled data → find groups, reduce dimensions\nReinforcement : an agent learns by trial, rewards and penalties\n\nVocabulary: sample (row), features X, label y,\n            model, training, prediction',
          tr: 'Denetimli      : doğru cevabı (etiketi) olan veriler\n  regresyon     → bir sayı tahmin etmek (ev fiyatı)\n  sınıflandırma → bir sınıf tahmin etmek (spam mı değil mi)\nDenetimsiz     : etiketsiz veriler → gruplar bulmak, boyut azaltmak\nPekiştirmeli   : bir ajan deneme, ödül ve cezayla öğrenir\n\nSözlük: örnek (satır), öznitelikler X (features),\n        etiket y (label), model, eğitim, tahmin',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Le déroulé type d’un projet : collecter les données, les nettoyer, les séparer en ensembles d’entraînement et de test, entraîner un modèle, l’évaluer sur des données qu’il n’a jamais vues, puis le déployer.',
          en: 'A typical project flow: collect the data, clean it, split it into training and test sets, train a model, evaluate it on data it has never seen, then deploy it.',
          tr: 'Tipik bir proje akışı: verileri toplamak, temizlemek, eğitim ve test kümelerine ayırmak, bir model eğitmek, hiç görmediği veriler üzerinde değerlendirmek, sonra devreye almak.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pour chaque problème, dis s’il est supervisé (régression ou classification), non supervisé ou par renforcement : (1) prédire la note finale d’un étudiant ; (2) dire si une radio montre une fracture ; (3) regrouper des clients aux achats proches ; (4) apprendre à un robot à marcher.',
          en: 'For each problem, say whether it is supervised (regression or classification), unsupervised or reinforcement learning: (1) predict a student’s final grade; (2) tell whether an X-ray shows a fracture; (3) group customers with similar purchases; (4) teach a robot to walk.',
          tr: 'Her problem için denetimli (regresyon veya sınıflandırma), denetimsiz veya pekiştirmeli olduğunu söyle: (1) bir öğrencinin final notunu tahmin etmek; (2) bir röntgende kırık olup olmadığını söylemek; (3) benzer alışveriş yapan müşterileri gruplamak; (4) bir robota yürümeyi öğretmek.',
        },
        solution: {
          fr: '(1) Supervisé, régression : la note est un nombre. (2) Supervisé, classification : deux classes, fracture ou non. (3) Non supervisé, clustering : on n’a pas de groupes donnés à l’avance. (4) Par renforcement : le robot essaie, tombe (pénalité) ou avance (récompense).',
          en: '(1) Supervised, regression: the grade is a number. (2) Supervised, classification: two classes, fracture or not. (3) Unsupervised, clustering: no groups are given in advance. (4) Reinforcement: the robot tries, falls (penalty) or moves forward (reward).',
          tr: '(1) Denetimli, regresyon: not bir sayıdır. (2) Denetimli, sınıflandırma: iki sınıf, kırık var ya da yok. (3) Denetimsiz, kümeleme: önceden verilmiş gruplar yoktur. (4) Pekiştirmeli: robot dener, düşer (ceza) veya ilerler (ödül).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Prédire le prix d’un appartement à partir de sa surface est un problème de…',
        en: 'Predicting an apartment’s price from its area is a…',
        tr: 'Bir dairenin fiyatını alanından tahmin etmek hangi problemdir?',
      },
      options: {
        fr: ['classification', 'régression', 'clustering'],
        en: ['classification problem', 'regression problem', 'clustering problem'],
        tr: ['Sınıflandırma', 'Regresyon', 'Kümeleme'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le prix est une valeur numérique continue : c’est de la régression supervisée (on connaît les prix des exemples d’entraînement).',
        en: 'The price is a continuous numeric value: it is supervised regression (the training samples’ prices are known).',
        tr: 'Fiyat sürekli bir sayısal değerdir: bu denetimli regresyondur (eğitim örneklerinin fiyatları bilinir).',
      },
    },
  },
  {
    id: 'ml-w02-data',
    week: 2,
    title: { fr: 'Préparer les données', en: 'Preparing the data', tr: 'Verilerin hazırlanması' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un modèle n’est jamais meilleur que ses données. On traite les valeurs manquantes (supprimer la ligne, ou remplacer par la moyenne ou la médiane), on encode les catégories en nombres (one-hot : une colonne 0/1 par catégorie) et on met les caractéristiques à la même échelle.',
          en: 'A model is never better than its data. Handle missing values (drop the row, or fill with the mean or median), encode categories as numbers (one-hot: one 0/1 column per category) and put features on the same scale.',
          tr: 'Bir model asla verilerinden daha iyi değildir. Eksik değerler ele alınır (satırı silmek veya ortalama ya da medyanla doldurmak), kategoriler sayılara dönüştürülür (one-hot: her kategori için bir 0/1 sütunu) ve öznitelikler aynı ölçeğe getirilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Min-max      : x′ = (x − min) / (max − min)       → entre 0 et 1\nStandardisation (z-score) : x′ = (x − moyenne) / écart-type\n\nfrom sklearn.preprocessing import MinMaxScaler, StandardScaler\nscaler = StandardScaler()\nX_train = scaler.fit_transform(X_train)   # apprend moyenne et écart-type\nX_test = scaler.transform(X_test)         # réutilise ceux du train',
          en: 'Min-max      : x′ = (x − min) / (max − min)       → between 0 and 1\nStandardization (z-score): x′ = (x − mean) / standard deviation\n\nfrom sklearn.preprocessing import MinMaxScaler, StandardScaler\nscaler = StandardScaler()\nX_train = scaler.fit_transform(X_train)   # learns mean and std\nX_test = scaler.transform(X_test)         # reuses the train ones',
          tr: 'Min-maks     : x′ = (x − min) / (maks − min)      → 0 ile 1 arası\nStandartlaştırma (z-skoru): x′ = (x − ortalama) / standart sapma\n\nfrom sklearn.preprocessing import MinMaxScaler, StandardScaler\nscaler = StandardScaler()\nX_train = scaler.fit_transform(X_train)   # ortalama ve sapmayı öğrenir\nX_test = scaler.transform(X_test)         # eğitimdekileri kullanır',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'La mise à l’échelle est indispensable pour les méthodes qui mesurent des distances (k-NN, k-means) : sinon, une caractéristique en milliers (salaire) écrase une caractéristique en unités (âge).',
          en: 'Scaling is essential for distance-based methods (k-NN, k-means): otherwise a feature in thousands (salary) crushes a feature in units (age).',
          tr: 'Ölçekleme, uzaklık kullanan yöntemler (k-NN, k-means) için şarttır: aksi halde binlerle ifade edilen bir öznitelik (maaş), birimlerle ifade edilen bir özniteliği (yaş) ezer.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Les valeurs d’une caractéristique sont 10, 20 et 40. (1) Applique la normalisation min-max. (2) Calcule la moyenne et dis si 20 sera positif ou négatif après standardisation.',
          en: 'A feature’s values are 10, 20 and 40. (1) Apply min-max normalization. (2) Compute the mean and say whether 20 will be positive or negative after standardization.',
          tr: 'Bir özniteliğin değerleri 10, 20 ve 40. (1) Min-maks normalleştirmesi uygula. (2) Ortalamayı hesapla ve standartlaştırmadan sonra 20’nin pozitif mi negatif mi olacağını söyle.',
        },
        solution: {
          fr: '(1) min = 10, max = 40, donc max − min = 30. 10 → 0, 20 → 10/30 ≈ 0,33, 40 → 1. (2) Moyenne = (10 + 20 + 40) / 3 ≈ 23,3. 20 est sous la moyenne : son z-score sera négatif (≈ −0,27 avec l’écart-type de population ≈ 12,5).',
          en: '(1) min = 10, max = 40, so max − min = 30. 10 → 0, 20 → 10/30 ≈ 0.33, 40 → 1. (2) Mean = (10 + 20 + 40) / 3 ≈ 23.3. 20 is below the mean: its z-score will be negative (≈ −0.27 with the population standard deviation ≈ 12.5).',
          tr: '(1) min = 10, maks = 40, yani maks − min = 30. 10 → 0, 20 → 10/30 ≈ 0,33, 40 → 1. (2) Ortalama = (10 + 20 + 40) / 3 ≈ 23,3. 20 ortalamanın altındadır: z-skoru negatif olur (popülasyon standart sapması ≈ 12,5 ile ≈ −0,27).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi appelle-t-on scaler.fit sur l’ensemble d’entraînement seulement ?',
        en: 'Why is scaler.fit called on the training set only?',
        tr: 'scaler.fit neden yalnızca eğitim kümesinde çağrılır?',
      },
      options: {
        fr: ['C’est plus rapide', 'Pour que le test ne « fuie » pas dans l’entraînement', 'Parce que le test n’a pas d’étiquettes'],
        en: ['It is faster', 'So the test set does not “leak” into training', 'Because the test set has no labels'],
        tr: ['Daha hızlı olduğu için', 'Test kümesinin eğitime “sızmaması” için', 'Test kümesinin etiketi olmadığı için'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Si la moyenne et l’écart-type sont calculés avec le test, le modèle reçoit indirectement des informations sur le test : c’est une fuite de données, et le score devient trop optimiste.',
        en: 'If the mean and standard deviation are computed with the test set, the model indirectly gets information about it: that is data leakage, and the score becomes too optimistic.',
        tr: 'Ortalama ve standart sapma test kümesiyle hesaplanırsa model dolaylı olarak test hakkında bilgi alır: bu bir veri sızıntısıdır ve skor fazla iyimser olur.',
      },
    },
  },
  {
    id: 'ml-w03-linear-regression',
    week: 3,
    title: { fr: 'Régression linéaire', en: 'Linear regression', tr: 'Doğrusal regresyon' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La régression linéaire cherche une droite ŷ = w·x + b qui passe au plus près des points. On mesure l’erreur avec l’erreur quadratique moyenne MSE = (1/n) Σ (yᵢ − ŷᵢ)². La méthode des moindres carrés donne directement les meilleurs w et b.',
          en: 'Linear regression looks for a line ŷ = w·x + b that passes as close as possible to the points. The error is measured with the mean squared error MSE = (1/n) Σ (yᵢ − ŷᵢ)². The least squares method directly gives the best w and b.',
          tr: 'Doğrusal regresyon noktalara en yakın geçen ŷ = w·x + b doğrusunu arar. Hata, ortalama kare hata MSE = (1/n) Σ (yᵢ − ŷᵢ)² ile ölçülür. En küçük kareler yöntemi en iyi w ve b’yi doğrudan verir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Moindres carrés (une variable)\nw = Σ (xᵢ − x̄)(yᵢ − ȳ) / Σ (xᵢ − x̄)²\nb = ȳ − w·x̄\n\nfrom sklearn.linear_model import LinearRegression\nmodel = LinearRegression().fit(X, y)\nprint(model.coef_, model.intercept_)   # w et b',
          en: 'Least squares (one variable)\nw = Σ (xᵢ − x̄)(yᵢ − ȳ) / Σ (xᵢ − x̄)²\nb = ȳ − w·x̄\n\nfrom sklearn.linear_model import LinearRegression\nmodel = LinearRegression().fit(X, y)\nprint(model.coef_, model.intercept_)   # w and b',
          tr: 'En küçük kareler (tek değişken)\nw = Σ (xᵢ − x̄)(yᵢ − ȳ) / Σ (xᵢ − x̄)²\nb = ȳ − w·x̄\n\nfrom sklearn.linear_model import LinearRegression\nmodel = LinearRegression().fit(X, y)\nprint(model.coef_, model.intercept_)   # w ve b',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Trouve la droite des moindres carrés pour les points (1, 2), (2, 4) et (3, 5), puis prédis y pour x = 4.',
          en: 'Find the least squares line for the points (1, 2), (2, 4) and (3, 5), then predict y for x = 4.',
          tr: '(1, 2), (2, 4) ve (3, 5) noktaları için en küçük kareler doğrusunu bul, sonra x = 4 için y’yi tahmin et.',
        },
        solution: {
          fr: 'x̄ = 2 et ȳ = 11/3 ≈ 3,67. Numérateur : (−1)(2 − 3,67) + 0 + (1)(5 − 3,67) = 1,67 + 1,33 = 3. Dénominateur : 1 + 0 + 1 = 2. Donc w = 1,5 et b = 3,67 − 1,5 × 2 ≈ 0,67. La droite est ŷ = 1,5x + 0,67 ; pour x = 4 : ŷ ≈ 6,67.',
          en: 'x̄ = 2 and ȳ = 11/3 ≈ 3.67. Numerator: (−1)(2 − 3.67) + 0 + (1)(5 − 3.67) = 1.67 + 1.33 = 3. Denominator: 1 + 0 + 1 = 2. So w = 1.5 and b = 3.67 − 1.5 × 2 ≈ 0.67. The line is ŷ = 1.5x + 0.67; for x = 4: ŷ ≈ 6.67.',
          tr: 'x̄ = 2 ve ȳ = 11/3 ≈ 3,67. Pay: (−1)(2 − 3,67) + 0 + (1)(5 − 3,67) = 1,67 + 1,33 = 3. Payda: 1 + 0 + 1 = 2. Yani w = 1,5 ve b = 3,67 − 1,5 × 2 ≈ 0,67. Doğru ŷ = 1,5x + 0,67; x = 4 için ŷ ≈ 6,67.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que mesure la MSE ?',
        en: 'What does the MSE measure?',
        tr: 'MSE neyi ölçer?',
      },
      options: {
        fr: ['Le pourcentage de bonnes classes', 'La moyenne des carrés des erreurs', 'La pente de la droite'],
        en: ['The percentage of correct classes', 'The mean of the squared errors', 'The slope of the line'],
        tr: ['Doğru sınıfların yüzdesi', 'Hataların karelerinin ortalaması', 'Doğrunun eğimi'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'MSE = moyenne de (vrai − prédit)². Le carré rend toutes les erreurs positives et pénalise fortement les grosses erreurs.',
        en: 'MSE = mean of (true − predicted)². Squaring makes every error positive and strongly penalizes large errors.',
        tr: 'MSE = (gerçek − tahmin)² ortalaması. Kare alma tüm hataları pozitif yapar ve büyük hataları güçlü şekilde cezalandırır.',
      },
    },
  },
  {
    id: 'ml-w04-gradient-descent',
    week: 4,
    title: { fr: 'Descente de gradient', en: 'Gradient descent', tr: 'Gradyan inişi' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Quand on ne peut pas calculer directement les meilleurs paramètres, on les cherche pas à pas : on part de valeurs quelconques et on avance dans la direction où l’erreur J baisse le plus, c’est-à-dire à l’opposé du gradient.',
          en: 'When the best parameters can’t be computed directly, they are searched step by step: start from any values and move in the direction where the error J decreases fastest, that is opposite to the gradient.',
          tr: 'En iyi parametreler doğrudan hesaplanamadığında adım adım aranır: herhangi bir değerden başlanır ve J hatasının en hızlı azaldığı yönde, yani gradyanın tersine ilerlenir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'w ← w − α · ∂J/∂w        (α = taux d’apprentissage)\n\nα trop petit  → convergence très lente\nα trop grand  → on saute par-dessus le minimum, ça diverge\n\nBatch : tout le jeu de données à chaque pas\nStochastique (SGD) : un exemple à la fois\nMini-batch : un petit groupe d’exemples (le plus utilisé)',
          en: 'w ← w − α · ∂J/∂w        (α = learning rate)\n\nα too small → very slow convergence\nα too large → jumps over the minimum, diverges\n\nBatch: the whole dataset at each step\nStochastic (SGD): one sample at a time\nMini-batch: a small group of samples (the most used)',
          tr: 'w ← w − α · ∂J/∂w        (α = öğrenme oranı)\n\nα çok küçük → çok yavaş yakınsama\nα çok büyük → minimumun üzerinden atlanır, ıraksar\n\nToplu (batch): her adımda tüm veri kümesi\nStokastik (SGD): her seferinde tek örnek\nMini-batch: küçük bir örnek grubu (en çok kullanılan)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'On minimise J(w) = (w − 3)² en partant de w = 0, avec α = 0,1. Fais deux pas de descente de gradient.',
          en: 'Minimize J(w) = (w − 3)² starting from w = 0, with α = 0.1. Do two gradient descent steps.',
          tr: 'J(w) = (w − 3)² fonksiyonunu w = 0’dan başlayarak α = 0,1 ile minimize et. İki gradyan inişi adımı yap.',
        },
        solution: {
          fr: 'Le gradient est J′(w) = 2(w − 3). Pas 1 : J′(0) = −6, donc w = 0 − 0,1 × (−6) = 0,6. Pas 2 : J′(0,6) = 2 × (−2,4) = −4,8, donc w = 0,6 + 0,48 = 1,08. w se rapproche de 3, le minimum, et les pas deviennent plus petits car la pente diminue.',
          en: 'The gradient is J′(w) = 2(w − 3). Step 1: J′(0) = −6, so w = 0 − 0.1 × (−6) = 0.6. Step 2: J′(0.6) = 2 × (−2.4) = −4.8, so w = 0.6 + 0.48 = 1.08. w gets closer to 3, the minimum, and the steps shrink as the slope decreases.',
          tr: 'Gradyan J′(w) = 2(w − 3). 1. adım: J′(0) = −6, yani w = 0 − 0,1 × (−6) = 0,6. 2. adım: J′(0,6) = 2 × (−2,4) = −4,8, yani w = 0,6 + 0,48 = 1,08. w minimum olan 3’e yaklaşır ve eğim azaldıkça adımlar küçülür.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que se passe-t-il si le taux d’apprentissage α est beaucoup trop grand ?',
        en: 'What happens if the learning rate α is far too large?',
        tr: 'Öğrenme oranı α çok büyük olursa ne olur?',
      },
      options: {
        fr: ['L’entraînement est plus précis', 'Les pas sautent le minimum et l’erreur peut augmenter', 'Rien ne change'],
        en: ['Training becomes more precise', 'Steps jump over the minimum and the error can grow', 'Nothing changes'],
        tr: ['Eğitim daha hassas olur', 'Adımlar minimumu atlar ve hata büyüyebilir', 'Hiçbir şey değişmez'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Des pas trop grands dépassent le fond de la courbe à chaque fois : l’algorithme oscille, voire diverge.',
        en: 'Steps that are too big overshoot the bottom of the curve every time: the algorithm oscillates or even diverges.',
        tr: 'Çok büyük adımlar her seferinde eğrinin dibini aşar: algoritma salınır, hatta ıraksar.',
      },
    },
  },
  {
    id: 'ml-w05-logistic',
    week: 5,
    title: {
      fr: 'Régression logistique et classification',
      en: 'Logistic regression and classification',
      tr: 'Lojistik regresyon ve sınıflandırma',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Malgré son nom, la régression logistique sert à classer. Elle calcule un score linéaire z = w·x + b, puis le transforme en probabilité avec la fonction sigmoïde σ(z) = 1 / (1 + e^−z), qui donne un nombre entre 0 et 1. On prédit la classe 1 si σ(z) ≥ 0,5, c’est-à-dire si z ≥ 0.',
          en: 'Despite its name, logistic regression is used to classify. It computes a linear score z = w·x + b, then turns it into a probability with the sigmoid function σ(z) = 1 / (1 + e^−z), which gives a number between 0 and 1. Class 1 is predicted when σ(z) ≥ 0.5, that is when z ≥ 0.',
          tr: 'Adına rağmen lojistik regresyon sınıflandırma için kullanılır. Doğrusal bir skor z = w·x + b hesaplar, sonra onu 0 ile 1 arasında bir sayı veren sigmoid fonksiyonu σ(z) = 1 / (1 + e^−z) ile olasılığa çevirir. σ(z) ≥ 0,5 yani z ≥ 0 ise sınıf 1 tahmin edilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'σ(0) = 0,5     σ(2) ≈ 0,88     σ(−2) ≈ 0,12\n\nFrontière de décision : w·x + b = 0 (une droite en 2D)\nPerte : entropie croisée (log loss), pas la MSE\n\nfrom sklearn.linear_model import LogisticRegression\nclf = LogisticRegression().fit(X_train, y_train)\nclf.predict_proba(X_test)   # probabilités de chaque classe',
          en: 'σ(0) = 0.5     σ(2) ≈ 0.88     σ(−2) ≈ 0.12\n\nDecision boundary: w·x + b = 0 (a line in 2D)\nLoss: cross-entropy (log loss), not MSE\n\nfrom sklearn.linear_model import LogisticRegression\nclf = LogisticRegression().fit(X_train, y_train)\nclf.predict_proba(X_test)   # probability of each class',
          tr: 'σ(0) = 0,5     σ(2) ≈ 0,88     σ(−2) ≈ 0,12\n\nKarar sınırı: w·x + b = 0 (2B’de bir doğru)\nKayıp: çapraz entropi (log loss), MSE değil\n\nfrom sklearn.linear_model import LogisticRegression\nclf = LogisticRegression().fit(X_train, y_train)\nclf.predict_proba(X_test)   # her sınıfın olasılığı',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un modèle a w = (2, −1) et b = 0,5. Pour x = (1, 2), calcule z, la probabilité σ(z) et la classe prédite.',
          en: 'A model has w = (2, −1) and b = 0.5. For x = (1, 2), compute z, the probability σ(z) and the predicted class.',
          tr: 'Bir modelde w = (2, −1) ve b = 0,5. x = (1, 2) için z’yi, σ(z) olasılığını ve tahmin edilen sınıfı hesapla.',
        },
        solution: {
          fr: 'z = 2 × 1 + (−1) × 2 + 0,5 = 0,5. σ(0,5) = 1 / (1 + e^−0,5) ≈ 1 / (1 + 0,607) ≈ 0,62. Comme 0,62 ≥ 0,5 (ou simplement z ≥ 0), la classe prédite est 1, avec une confiance modérée.',
          en: 'z = 2 × 1 + (−1) × 2 + 0.5 = 0.5. σ(0.5) = 1 / (1 + e^−0.5) ≈ 1 / (1 + 0.607) ≈ 0.62. Since 0.62 ≥ 0.5 (or simply z ≥ 0), the predicted class is 1, with moderate confidence.',
          tr: 'z = 2 × 1 + (−1) × 2 + 0,5 = 0,5. σ(0,5) = 1 / (1 + e^−0,5) ≈ 1 / (1 + 0,607) ≈ 0,62. 0,62 ≥ 0,5 (ya da kısaca z ≥ 0) olduğundan tahmin edilen sınıf 1’dir, orta düzeyde bir güvenle.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que vaut σ(0) ?',
        en: 'What is σ(0)?',
        tr: 'σ(0) kaçtır?',
      },
      options: { fr: ['0', '0,5', '1'], en: ['0', '0.5', '1'], tr: ['0', '0,5', '1'] },
      answerIndex: 1,
      explanation: {
        fr: 'σ(0) = 1 / (1 + e⁰) = 1 / 2 = 0,5 : quand le score vaut 0, le modèle hésite autant entre les deux classes. C’est la frontière de décision.',
        en: 'σ(0) = 1 / (1 + e⁰) = 1 / 2 = 0.5: when the score is 0, the model is equally unsure between both classes. That is the decision boundary.',
        tr: 'σ(0) = 1 / (1 + e⁰) = 1 / 2 = 0,5: skor 0 iken model iki sınıf arasında eşit derecede kararsızdır. Karar sınırı budur.',
      },
    },
  },
  {
    id: 'ml-w06-knn',
    week: 6,
    title: { fr: 'Les k plus proches voisins (k-NN)', en: 'k-nearest neighbors (k-NN)', tr: 'k-en yakın komşu (k-NN)' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le k-NN n’apprend presque rien à l’avance : il garde les exemples. Pour classer un nouveau point, il cherche les k exemples les plus proches (distance euclidienne en général) et choisit la classe majoritaire. Pour une régression, il fait la moyenne de leurs valeurs.',
          en: 'k-NN learns almost nothing in advance: it keeps the samples. To classify a new point, it finds the k closest samples (usually with Euclidean distance) and picks the majority class. For regression, it averages their values.',
          tr: 'k-NN önceden neredeyse hiçbir şey öğrenmez: örnekleri saklar. Yeni bir noktayı sınıflandırmak için en yakın k örneği bulur (genellikle Öklid uzaklığıyla) ve çoğunluk sınıfını seçer. Regresyonda değerlerinin ortalamasını alır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Distance euclidienne : d(p, q) = √((p₁ − q₁)² + (p₂ − q₂)²)\n\nk petit (1)  → sensible au bruit, surapprentissage\nk grand      → frontières trop lisses, sous-apprentissage\nk impair     → pas d’égalité entre deux classes\n\nfrom sklearn.neighbors import KNeighborsClassifier\nknn = KNeighborsClassifier(n_neighbors=3).fit(X_train, y_train)',
          en: 'Euclidean distance: d(p, q) = √((p₁ − q₁)² + (p₂ − q₂)²)\n\nsmall k (1)  → sensitive to noise, overfitting\nlarge k      → boundaries too smooth, underfitting\nodd k        → no tie between two classes\n\nfrom sklearn.neighbors import KNeighborsClassifier\nknn = KNeighborsClassifier(n_neighbors=3).fit(X_train, y_train)',
          tr: 'Öklid uzaklığı: d(p, q) = √((p₁ − q₁)² + (p₂ − q₂)²)\n\nküçük k (1) → gürültüye duyarlı, aşırı öğrenme\nbüyük k     → çok düz sınırlar, eksik öğrenme\ntek k       → iki sınıf arasında eşitlik olmaz\n\nfrom sklearn.neighbors import KNeighborsClassifier\nknn = KNeighborsClassifier(n_neighbors=3).fit(X_train, y_train)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Exemples : A(1, 1) rouge, B(2, 1) rouge, C(4, 4) bleu, D(5, 4) bleu, E(4, 5) bleu. Classe Q(2, 2) avec k = 1, puis avec k = 3.',
          en: 'Samples: A(1, 1) red, B(2, 1) red, C(4, 4) blue, D(5, 4) blue, E(4, 5) blue. Classify Q(2, 2) with k = 1, then with k = 3.',
          tr: 'Örnekler: A(1, 1) kırmızı, B(2, 1) kırmızı, C(4, 4) mavi, D(5, 4) mavi, E(4, 5) mavi. Q(2, 2) noktasını önce k = 1, sonra k = 3 ile sınıflandır.',
        },
        solution: {
          fr: 'Distances à Q : B = 1, A = √2 ≈ 1,41, C = √8 ≈ 2,83, D = √13 ≈ 3,61, E = √13 ≈ 3,61. k = 1 : le plus proche est B, rouge. k = 3 : B, A et C, soit 2 rouges et 1 bleu : rouge. Q est classé rouge dans les deux cas.',
          en: 'Distances to Q: B = 1, A = √2 ≈ 1.41, C = √8 ≈ 2.83, D = √13 ≈ 3.61, E = √13 ≈ 3.61. k = 1: the closest is B, red. k = 3: B, A and C, so 2 red and 1 blue: red. Q is classified red in both cases.',
          tr: 'Q’ya uzaklıklar: B = 1, A = √2 ≈ 1,41, C = √8 ≈ 2,83, D = √13 ≈ 3,61, E = √13 ≈ 3,61. k = 1: en yakın B, kırmızı. k = 3: B, A ve C, yani 2 kırmızı 1 mavi: kırmızı. Q her iki durumda da kırmızı sınıflandırılır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi faut-il mettre les caractéristiques à la même échelle avant un k-NN ?',
        en: 'Why must features be scaled before k-NN?',
        tr: 'k-NN’den önce öznitelikler neden aynı ölçeğe getirilmelidir?',
      },
      options: {
        fr: ['Pour que les distances ne soient pas dominées par une seule caractéristique', 'Pour accélérer l’affichage', 'Ce n’est pas nécessaire'],
        en: ['So distances are not dominated by a single feature', 'To speed up display', 'It is not necessary'],
        tr: ['Uzaklıkların tek bir öznitelik tarafından baskılanmaması için', 'Görüntülemeyi hızlandırmak için', 'Gerekli değildir'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Le k-NN repose sur des distances : une caractéristique de grande amplitude (un salaire en milliers) écraserait les autres (l’âge).',
        en: 'k-NN relies on distances: a feature with a large range (a salary in thousands) would crush the others (age).',
        tr: 'k-NN uzaklıklara dayanır: geniş aralıklı bir öznitelik (binlerle ifade edilen maaş) diğerlerini (yaş) ezerdi.',
      },
    },
  },
  {
    id: 'ml-w07-evaluation',
    week: 7,
    title: {
      fr: 'Évaluer un modèle et révision de la vize',
      en: 'Evaluating a model and midterm review',
      tr: 'Model değerlendirme ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'On sépare les données en entraînement, validation (pour régler les hyperparamètres comme k) et test (pour la note finale, utilisé une seule fois). La validation croisée à k plis découpe les données en k parts : chaque part sert une fois de validation, et on fait la moyenne des scores.',
          en: 'Data is split into training, validation (to tune hyperparameters such as k) and test (for the final score, used only once). k-fold cross-validation splits the data into k parts: each part is the validation set once, and the scores are averaged.',
          tr: 'Veriler eğitim, doğrulama (k gibi hiperparametreleri ayarlamak için) ve test (son not için, yalnızca bir kez kullanılır) olarak ayrılır. k katlı çapraz doğrulama verileri k parçaya böler: her parça bir kez doğrulama olur ve skorların ortalaması alınır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Sous-apprentissage : mauvais à l’entraînement ET au test\n  → modèle trop simple (biais élevé)\nSurapprentissage  : excellent à l’entraînement, mauvais au test\n  → modèle trop complexe, il apprend le bruit (variance élevée)\nRemèdes : plus de données, modèle plus simple, régularisation,\n          arrêt précoce, validation croisée',
          en: 'Underfitting: poor on training AND test\n  → model too simple (high bias)\nOverfitting : excellent on training, poor on test\n  → model too complex, it learns the noise (high variance)\nRemedies: more data, simpler model, regularization,\n          early stopping, cross-validation',
          tr: 'Eksik öğrenme: eğitimde VE testte kötü\n  → model çok basit (yüksek yanlılık)\nAşırı öğrenme : eğitimde mükemmel, testte kötü\n  → model çok karmaşık, gürültüyü öğrenir (yüksek varyans)\nÇözümler: daha fazla veri, daha basit model, düzenlileştirme,\n          erken durdurma, çapraz doğrulama',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Supervisé / non supervisé / renforcement, régression / classification\n✔ Valeurs manquantes, one-hot, min-max, z-score, fuite de données\n✔ Régression linéaire : moindres carrés, MSE\n✔ Descente de gradient, taux d’apprentissage\n✔ Régression logistique : sigmoïde, frontière de décision\n✔ k-NN : distance euclidienne, choix de k\n✔ Entraînement / validation / test, sur- et sous-apprentissage',
          en: '✔ Supervised / unsupervised / reinforcement, regression / classification\n✔ Missing values, one-hot, min-max, z-score, data leakage\n✔ Linear regression: least squares, MSE\n✔ Gradient descent, learning rate\n✔ Logistic regression: sigmoid, decision boundary\n✔ k-NN: Euclidean distance, choosing k\n✔ Train / validation / test, over- and underfitting',
          tr: '✔ Denetimli / denetimsiz / pekiştirmeli, regresyon / sınıflandırma\n✔ Eksik değerler, one-hot, min-maks, z-skoru, veri sızıntısı\n✔ Doğrusal regresyon: en küçük kareler, MSE\n✔ Gradyan inişi, öğrenme oranı\n✔ Lojistik regresyon: sigmoid, karar sınırı\n✔ k-NN: Öklid uzaklığı, k seçimi\n✔ Eğitim / doğrulama / test, aşırı ve eksik öğrenme',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Trois modèles : M1 a 99 % de précision à l’entraînement et 70 % au test ; M2 a 62 % et 60 % ; M3 a 88 % et 86 %. Diagnostique chacun et choisis le meilleur.',
          en: 'Three models: M1 has 99% accuracy on training and 70% on test; M2 has 62% and 60%; M3 has 88% and 86%. Diagnose each one and pick the best.',
          tr: 'Üç model: M1’in doğruluğu eğitimde %99, testte %70; M2’ninki %62 ve %60; M3’ünki %88 ve %86. Her birini teşhis et ve en iyisini seç.',
        },
        solution: {
          fr: 'M1 : surapprentissage, grand écart entre entraînement et test ; le simplifier ou le régulariser. M2 : sous-apprentissage, mauvais partout ; prendre un modèle plus riche ou de meilleures caractéristiques. M3 : bon score et petit écart, il généralise bien : c’est le meilleur, même s’il est moins bon que M1 à l’entraînement.',
          en: 'M1: overfitting, a big gap between training and test; simplify or regularize it. M2: underfitting, poor everywhere; use a richer model or better features. M3: good score and small gap, it generalizes well: it is the best, even though it is worse than M1 on training.',
          tr: 'M1: aşırı öğrenme, eğitim ile test arasında büyük fark; sadeleştirilmeli veya düzenlileştirilmeli. M2: eksik öğrenme, her yerde kötü; daha zengin bir model veya daha iyi öznitelikler kullanılmalı. M3: iyi skor ve küçük fark, iyi genelleştiriyor: eğitimde M1’den kötü olsa da en iyisi odur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Un modèle très bon à l’entraînement mais mauvais au test souffre de…',
        en: 'A model very good on training but poor on test suffers from…',
        tr: 'Eğitimde çok iyi ama testte kötü olan bir model neden muzdariptir?',
      },
      options: {
        fr: ['sous-apprentissage', 'surapprentissage', 'fuite de mémoire'],
        en: ['underfitting', 'overfitting', 'a memory leak'],
        tr: ['Eksik öğrenme', 'Aşırı öğrenme', 'Bellek sızıntısı'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Il a appris par cœur les exemples d’entraînement, bruit compris, et ne généralise pas aux nouvelles données.',
        en: 'It memorized the training samples, noise included, and does not generalize to new data.',
        tr: 'Eğitim örneklerini gürültüsüyle birlikte ezberlemiştir ve yeni verilere genelleyemez.',
      },
    },
  },
  {
    id: 'ml-w08-metrics',
    week: 8,
    title: {
      fr: 'Matrice de confusion, précision et rappel',
      en: 'Confusion matrix, precision and recall',
      tr: 'Karışıklık matrisi, kesinlik ve duyarlılık',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’exactitude (accuracy) seule peut tromper : si 95 % des e-mails sont normaux, un modèle qui dit toujours « normal » a 95 % d’exactitude mais ne trouve aucun spam. La matrice de confusion détaille les erreurs.',
          en: 'Accuracy alone can mislead: if 95% of emails are normal, a model that always says “normal” is 95% accurate but finds no spam. The confusion matrix details the errors.',
          tr: 'Doğruluk (accuracy) tek başına yanıltabilir: e-postaların %95’i normalse, her zaman “normal” diyen bir model %95 doğrudur ama hiç spam bulmaz. Karışıklık matrisi hataları ayrıntılı gösterir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: '                 prédit positif   prédit négatif\nvrai positif         TP               FN\nvrai négatif         FP               TN\n\nExactitude = (TP + TN) / total\nPrécision  = TP / (TP + FP)   parmi les alertes, combien sont vraies ?\nRappel     = TP / (TP + FN)   parmi les vrais cas, combien trouvés ?\nF1         = 2 × P × R / (P + R)',
          en: '                 predicted positive   predicted negative\nactual positive        TP                   FN\nactual negative        FP                   TN\n\nAccuracy  = (TP + TN) / total\nPrecision = TP / (TP + FP)   of the alerts, how many are real?\nRecall    = TP / (TP + FN)   of the real cases, how many found?\nF1        = 2 × P × R / (P + R)',
          tr: '                 tahmin pozitif   tahmin negatif\ngerçek pozitif        TP               FN\ngerçek negatif        FP               TN\n\nDoğruluk     = (TP + TN) / toplam\nKesinlik     = TP / (TP + FP)   uyarıların kaçı gerçek?\nDuyarlılık   = TP / (TP + FN)   gerçek durumların kaçı bulundu?\nF1           = 2 × K × D / (K + D)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Pour un test médical, on veut un rappel élevé (ne rater aucun malade). Pour un filtre anti-spam, on veut une précision élevée (ne pas jeter un vrai e-mail).',
          en: 'For a medical test, high recall matters (miss no patient). For a spam filter, high precision matters (don’t throw away a real email).',
          tr: 'Bir tıbbi test için yüksek duyarlılık önemlidir (hiçbir hastayı kaçırmamak). Bir spam filtresi için yüksek kesinlik önemlidir (gerçek bir e-postayı atmamak).',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Sur 100 cas : TP = 40, FP = 10, FN = 20, TN = 30. Calcule l’exactitude, la précision, le rappel et le F1.',
          en: 'Out of 100 cases: TP = 40, FP = 10, FN = 20, TN = 30. Compute the accuracy, precision, recall and F1.',
          tr: '100 durumda: TP = 40, FP = 10, FN = 20, TN = 30. Doğruluğu, kesinliği, duyarlılığı ve F1’i hesapla.',
        },
        solution: {
          fr: 'Exactitude = (40 + 30) / 100 = 0,70. Précision = 40 / (40 + 10) = 0,80. Rappel = 40 / (40 + 20) ≈ 0,67. F1 = 2 × 0,80 × 0,67 / (0,80 + 0,67) ≈ 0,73. Le modèle rate un tiers des vrais positifs : son rappel est son point faible.',
          en: 'Accuracy = (40 + 30) / 100 = 0.70. Precision = 40 / (40 + 10) = 0.80. Recall = 40 / (40 + 20) ≈ 0.67. F1 = 2 × 0.80 × 0.67 / (0.80 + 0.67) ≈ 0.73. The model misses a third of the true positives: recall is its weak point.',
          tr: 'Doğruluk = (40 + 30) / 100 = 0,70. Kesinlik = 40 / (40 + 10) = 0,80. Duyarlılık = 40 / (40 + 20) ≈ 0,67. F1 = 2 × 0,80 × 0,67 / (0,80 + 0,67) ≈ 0,73. Model gerçek pozitiflerin üçte birini kaçırıyor: zayıf noktası duyarlılıktır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pour dépister une maladie grave, quelle mesure veut-on surtout élevée ?',
        en: 'To screen for a serious disease, which measure should be especially high?',
        tr: 'Ciddi bir hastalığın taramasında özellikle hangi ölçünün yüksek olması istenir?',
      },
      options: { fr: ['Le rappel', 'La précision', 'Le nombre de TN'], en: ['Recall', 'Precision', 'The number of TN'], tr: ['Duyarlılık', 'Kesinlik', 'TN sayısı'] },
      answerIndex: 0,
      explanation: {
        fr: 'Un faux négatif (un malade non détecté) coûte très cher : on veut donc le rappel TP / (TP + FN) le plus élevé possible, quitte à avoir quelques fausses alertes.',
        en: 'A false negative (an undetected patient) is very costly: recall TP / (TP + FN) should be as high as possible, even at the cost of some false alarms.',
        tr: 'Yanlış negatif (tespit edilmemiş hasta) çok pahalıdır: bazı yanlış alarmlar pahasına da olsa duyarlılık TP / (TP + FN) olabildiğince yüksek olmalıdır.',
      },
    },
  },
  {
    id: 'ml-w09-decision-trees',
    week: 9,
    title: { fr: 'Arbres de décision', en: 'Decision trees', tr: 'Karar ağaçları' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un arbre de décision pose des questions successives sur les caractéristiques (« âge > 30 ? ») jusqu’à une feuille qui donne la classe. À chaque nœud, on choisit la question qui sépare le mieux les classes, mesurée par l’entropie ou l’indice de Gini.',
          en: 'A decision tree asks successive questions about the features (“age > 30?”) until a leaf gives the class. At each node, the question that best separates the classes is chosen, measured with entropy or the Gini index.',
          tr: 'Karar ağacı öznitelikler hakkında art arda sorular sorar (“yaş > 30 mu?”) ve sınıfı veren bir yaprağa ulaşır. Her düğümde sınıfları en iyi ayıran soru seçilir; bu, entropi veya Gini indeksiyle ölçülür.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Entropie   H(S) = − Σ pᵢ log₂ pᵢ     (0 = pur, 1 = 50/50 pour 2 classes)\nGain d’information = H(parent) − Σ (|Sᵥ| / |S|) × H(Sᵥ)\n\nAvantages : facile à expliquer, pas besoin de mise à l’échelle\nRisque    : surapprentissage si l’arbre est trop profond\n            → limiter max_depth, élaguer (pruning)',
          en: 'Entropy   H(S) = − Σ pᵢ log₂ pᵢ     (0 = pure, 1 = 50/50 for 2 classes)\nInformation gain = H(parent) − Σ (|Sᵥ| / |S|) × H(Sᵥ)\n\nPros : easy to explain, no scaling needed\nRisk : overfitting when the tree is too deep\n       → limit max_depth, prune',
          tr: 'Entropi   H(S) = − Σ pᵢ log₂ pᵢ     (0 = saf, 2 sınıf için 1 = 50/50)\nBilgi kazancı = H(ebeveyn) − Σ (|Sᵥ| / |S|) × H(Sᵥ)\n\nArtılar: açıklaması kolay, ölçekleme gerekmez\nRisk   : ağaç çok derinse aşırı öğrenme\n         → max_depth sınırlandırılır, budama yapılır',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un nœud contient 10 exemples : 6 « oui » et 4 « non ». Une question les sépare en un groupe de 4 (4 oui, 0 non) et un groupe de 6 (2 oui, 4 non). Calcule l’entropie du parent et le gain d’information.',
          en: 'A node holds 10 samples: 6 “yes” and 4 “no”. A question splits them into a group of 4 (4 yes, 0 no) and a group of 6 (2 yes, 4 no). Compute the parent’s entropy and the information gain.',
          tr: 'Bir düğümde 10 örnek var: 6 “evet” ve 4 “hayır”. Bir soru onları 4’lük bir grup (4 evet, 0 hayır) ve 6’lık bir grup (2 evet, 4 hayır) olarak ayırıyor. Ebeveynin entropisini ve bilgi kazancını hesapla.',
        },
        solution: {
          fr: 'H(parent) = −0,6 log₂ 0,6 − 0,4 log₂ 0,4 ≈ 0,971. Groupe de 4 : pur, H = 0. Groupe de 6 : p = 1/3 et 2/3, H ≈ 0,918. Moyenne pondérée = 0,4 × 0 + 0,6 × 0,918 ≈ 0,551. Gain = 0,971 − 0,551 ≈ 0,420. Plus le gain est grand, meilleure est la question.',
          en: 'H(parent) = −0.6 log₂ 0.6 − 0.4 log₂ 0.4 ≈ 0.971. Group of 4: pure, H = 0. Group of 6: p = 1/3 and 2/3, H ≈ 0.918. Weighted average = 0.4 × 0 + 0.6 × 0.918 ≈ 0.551. Gain = 0.971 − 0.551 ≈ 0.420. The larger the gain, the better the question.',
          tr: 'H(ebeveyn) = −0,6 log₂ 0,6 − 0,4 log₂ 0,4 ≈ 0,971. 4’lük grup: saf, H = 0. 6’lık grup: p = 1/3 ve 2/3, H ≈ 0,918. Ağırlıklı ortalama = 0,4 × 0 + 0,6 × 0,918 ≈ 0,551. Kazanç = 0,971 − 0,551 ≈ 0,420. Kazanç ne kadar büyükse soru o kadar iyidir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle est l’entropie d’un nœud qui ne contient qu’une seule classe ?',
        en: 'What is the entropy of a node containing a single class?',
        tr: 'Tek bir sınıf içeren bir düğümün entropisi nedir?',
      },
      options: { fr: ['0', '0,5', '1'], en: ['0', '0.5', '1'], tr: ['0', '0,5', '1'] },
      answerIndex: 0,
      explanation: {
        fr: 'Un nœud pur n’a aucune incertitude : H = −1 × log₂ 1 = 0. L’entropie vaut 1 quand deux classes sont à égalité (50/50).',
        en: 'A pure node has no uncertainty: H = −1 × log₂ 1 = 0. Entropy is 1 when two classes are tied (50/50).',
        tr: 'Saf bir düğümde belirsizlik yoktur: H = −1 × log₂ 1 = 0. İki sınıf eşitse (50/50) entropi 1’dir.',
      },
    },
  },
  {
    id: 'ml-w10-naive-bayes',
    week: 10,
    title: { fr: 'Classifieur bayésien naïf', en: 'Naive Bayes classifier', tr: 'Naive Bayes sınıflandırıcı' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le théorème de Bayes inverse une probabilité : P(classe | données) = P(données | classe) × P(classe) / P(données). Le classifieur est dit « naïf » car il suppose que les caractéristiques sont indépendantes entre elles, ce qui simplifie énormément le calcul et marche souvent bien, par exemple pour les textes.',
          en: 'Bayes’ theorem inverts a probability: P(class | data) = P(data | class) × P(class) / P(data). The classifier is called “naive” because it assumes the features are independent of each other, which hugely simplifies the computation and often works well, for example for text.',
          tr: 'Bayes teoremi bir olasılığı tersine çevirir: P(sınıf | veri) = P(veri | sınıf) × P(sınıf) / P(veri). Sınıflandırıcıya “naive” (saf) denir çünkü özniteliklerin birbirinden bağımsız olduğunu varsayar; bu hesaplamayı çok basitleştirir ve örneğin metinlerde çoğu zaman iyi çalışır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'P(c | x₁, …, xₙ) ∝ P(c) × P(x₁ | c) × … × P(xₙ | c)\nOn choisit la classe c qui donne le plus grand produit.\n\nLissage de Laplace : ajouter 1 aux comptes, pour qu’un mot\njamais vu ne donne pas une probabilité nulle.',
          en: 'P(c | x₁, …, xₙ) ∝ P(c) × P(x₁ | c) × … × P(xₙ | c)\nPick the class c with the largest product.\n\nLaplace smoothing: add 1 to the counts, so a word never\nseen doesn’t give a zero probability.',
          tr: 'P(c | x₁, …, xₙ) ∝ P(c) × P(x₁ | c) × … × P(xₙ | c)\nEn büyük çarpımı veren c sınıfı seçilir.\n\nLaplace düzeltmesi: hiç görülmemiş bir kelime sıfır olasılık\nvermesin diye sayımlara 1 eklenir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '40 % des e-mails sont des spams. Le mot « gratuit » apparaît dans 50 % des spams et dans 10 % des e-mails normaux. Un e-mail contient « gratuit » : quelle est la probabilité que ce soit un spam ?',
          en: '40% of emails are spam. The word “free” appears in 50% of spam and in 10% of normal emails. An email contains “free”: what is the probability it is spam?',
          tr: 'E-postaların %40’ı spam. “Bedava” kelimesi spamların %50’sinde ve normal e-postaların %10’unda geçiyor. Bir e-posta “bedava” içeriyor: spam olma olasılığı nedir?',
        },
        solution: {
          fr: 'P(gratuit | spam) × P(spam) = 0,5 × 0,4 = 0,20. P(gratuit | normal) × P(normal) = 0,1 × 0,6 = 0,06. P(gratuit) = 0,20 + 0,06 = 0,26. P(spam | gratuit) = 0,20 / 0,26 ≈ 0,77 : environ 77 %, à cause d’un seul mot.',
          en: 'P(free | spam) × P(spam) = 0.5 × 0.4 = 0.20. P(free | normal) × P(normal) = 0.1 × 0.6 = 0.06. P(free) = 0.20 + 0.06 = 0.26. P(spam | free) = 0.20 / 0.26 ≈ 0.77: about 77%, from a single word.',
          tr: 'P(bedava | spam) × P(spam) = 0,5 × 0,4 = 0,20. P(bedava | normal) × P(normal) = 0,1 × 0,6 = 0,06. P(bedava) = 0,20 + 0,06 = 0,26. P(spam | bedava) = 0,20 / 0,26 ≈ 0,77: tek bir kelimeyle yaklaşık %77.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi le classifieur bayésien est-il appelé « naïf » ?',
        en: 'Why is the Bayes classifier called “naive”?',
        tr: 'Bayes sınıflandırıcıya neden “naive” (saf) denir?',
      },
      options: {
        fr: ['Il est très simple à coder', 'Il suppose les caractéristiques indépendantes', 'Il ignore les probabilités a priori'],
        en: ['It is very simple to code', 'It assumes features are independent', 'It ignores prior probabilities'],
        tr: ['Kodlaması çok basit olduğu için', 'Öznitelikleri bağımsız varsaydığı için', 'Önsel olasılıkları yok saydığı için'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'L’hypothèse d’indépendance est rarement vraie (les mots d’un texte sont liés), mais elle permet de multiplier simplement les probabilités de chaque caractéristique.',
        en: 'The independence assumption is rarely true (words in a text are related), but it lets you simply multiply each feature’s probabilities.',
        tr: 'Bağımsızlık varsayımı nadiren doğrudur (bir metindeki kelimeler birbiriyle ilişkilidir), ama her özniteliğin olasılıklarını basitçe çarpmayı sağlar.',
      },
    },
  },
  {
    id: 'ml-w11-svm-ensembles',
    week: 11,
    title: { fr: 'SVM et méthodes d’ensemble', en: 'SVM and ensemble methods', tr: 'SVM ve topluluk yöntemleri' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une machine à vecteurs de support (SVM) cherche la frontière qui sépare les classes avec la plus grande marge. Les points les plus proches de la frontière sont les vecteurs de support. Avec l’astuce du noyau (kernel : polynomial, RBF), elle sépare aussi des données qui ne sont pas séparables par une droite.',
          en: 'A support vector machine (SVM) looks for the boundary that separates the classes with the largest margin. The points closest to the boundary are the support vectors. With the kernel trick (polynomial, RBF), it also separates data that a straight line cannot.',
          tr: 'Destek vektör makinesi (SVM) sınıfları en geniş marjla ayıran sınırı arar. Sınıra en yakın noktalar destek vektörleridir. Çekirdek hilesiyle (kernel: polinom, RBF) bir doğruyla ayrılamayan verileri de ayırabilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Méthodes d’ensemble : combiner plusieurs modèles\nBagging (ex. forêt aléatoire) : modèles entraînés en parallèle sur des\n  échantillons tirés au hasard, puis vote → réduit la variance\nBoosting (ex. AdaBoost, XGBoost) : modèles entraînés l’un après l’autre,\n  chacun corrige les erreurs du précédent → réduit le biais\n\nfrom sklearn.ensemble import RandomForestClassifier\nrf = RandomForestClassifier(n_estimators=100).fit(X_train, y_train)',
          en: 'Ensemble methods: combine several models\nBagging (e.g. random forest): models trained in parallel on random\n  samples, then a vote → reduces variance\nBoosting (e.g. AdaBoost, XGBoost): models trained one after another,\n  each fixing the previous one’s errors → reduces bias\n\nfrom sklearn.ensemble import RandomForestClassifier\nrf = RandomForestClassifier(n_estimators=100).fit(X_train, y_train)',
          tr: 'Topluluk yöntemleri: birkaç modeli birleştirmek\nBagging (örn. rastgele orman): rastgele örneklemler üzerinde paralel\n  eğitilen modeller, sonra oylama → varyansı azaltır\nBoosting (örn. AdaBoost, XGBoost): art arda eğitilen modeller,\n  her biri öncekinin hatalarını düzeltir → yanlılığı azaltır\n\nfrom sklearn.ensemble import RandomForestClassifier\nrf = RandomForestClassifier(n_estimators=100).fit(X_train, y_train)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une forêt de 5 arbres classe un e-mail. Les arbres votent : spam, normal, spam, spam, normal. (1) Quelle est la décision ? (2) Pourquoi une forêt est-elle en général meilleure qu’un seul arbre profond ?',
          en: 'A forest of 5 trees classifies an email. The trees vote: spam, normal, spam, spam, normal. (1) What is the decision? (2) Why is a forest usually better than a single deep tree?',
          tr: '5 ağaçlı bir orman bir e-postayı sınıflandırıyor. Ağaçların oyları: spam, normal, spam, spam, normal. (1) Karar nedir? (2) Bir orman neden genellikle tek ve derin bir ağaçtan daha iyidir?',
        },
        solution: {
          fr: '(1) 3 votes spam contre 2 : spam. (2) Un arbre profond surapprend (variance élevée). Chaque arbre de la forêt voit un échantillon différent et des caractéristiques tirées au hasard ; leurs erreurs sont en partie indépendantes, donc le vote les compense : c’est le principe du bagging, qui réduit la variance.',
          en: '(1) 3 spam votes against 2: spam. (2) A deep tree overfits (high variance). Each tree in the forest sees a different sample and randomly chosen features; their errors are partly independent, so the vote cancels them out: that is bagging, which reduces variance.',
          tr: '(1) 2’ye karşı 3 spam oyu: spam. (2) Derin bir ağaç aşırı öğrenir (yüksek varyans). Ormandaki her ağaç farklı bir örneklem ve rastgele seçilmiş öznitelikler görür; hataları kısmen bağımsızdır, bu yüzden oylama onları dengeler: bu, varyansı azaltan bagging ilkesidir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que cherche à maximiser une SVM ?',
        en: 'What does an SVM try to maximize?',
        tr: 'Bir SVM neyi en büyük yapmaya çalışır?',
      },
      options: {
        fr: ['Le nombre de vecteurs de support', 'La marge entre les classes', 'La profondeur de l’arbre'],
        en: ['The number of support vectors', 'The margin between the classes', 'The depth of the tree'],
        tr: ['Destek vektörlerinin sayısını', 'Sınıflar arasındaki marjı', 'Ağacın derinliğini'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Une marge large rend la frontière plus robuste : de nouveaux points légèrement différents restent du bon côté.',
        en: 'A wide margin makes the boundary more robust: new, slightly different points stay on the right side.',
        tr: 'Geniş bir marj sınırı daha sağlam yapar: biraz farklı yeni noktalar doğru tarafta kalır.',
      },
    },
  },
  {
    id: 'ml-w12-kmeans',
    week: 12,
    title: { fr: 'Clustering : k-means', en: 'Clustering: k-means', tr: 'Kümeleme: k-means' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le clustering regroupe des données sans étiquettes. L’algorithme k-means choisit k centres, puis répète deux étapes jusqu’à ce que rien ne change : affecter chaque point au centre le plus proche, puis déplacer chaque centre à la moyenne de ses points.',
          en: 'Clustering groups unlabeled data. The k-means algorithm picks k centers, then repeats two steps until nothing changes: assign each point to the nearest center, then move each center to the mean of its points.',
          tr: 'Kümeleme etiketsiz verileri gruplar. k-means algoritması k merkez seçer, sonra hiçbir şey değişmeyene kadar iki adımı tekrarlar: her noktayı en yakın merkeze atamak, sonra her merkezi kendi noktalarının ortalamasına taşımak.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Choisir k : méthode du coude (inertie selon k), score de silhouette\nLimites : sensible aux centres de départ (k-means++ aide),\n          suppose des groupes plutôt ronds et de taille proche\n\nfrom sklearn.cluster import KMeans\nkm = KMeans(n_clusters=3, n_init=10).fit(X)\nkm.labels_, km.cluster_centers_',
          en: 'Choosing k: elbow method (inertia versus k), silhouette score\nLimits: sensitive to the starting centers (k-means++ helps),\n        assumes roughly round clusters of similar size\n\nfrom sklearn.cluster import KMeans\nkm = KMeans(n_clusters=3, n_init=10).fit(X)\nkm.labels_, km.cluster_centers_',
          tr: 'k seçimi: dirsek yöntemi (k’ya göre atalet), siluet skoru\nSınırlar: başlangıç merkezlerine duyarlı (k-means++ yardımcı olur),\n          kabaca yuvarlak ve benzer boyutlu kümeler varsayar\n\nfrom sklearn.cluster import KMeans\nkm = KMeans(n_clusters=3, n_init=10).fit(X)\nkm.labels_, km.cluster_centers_',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Applique k-means avec k = 2 aux valeurs 1, 2, 3, 10, 11, 12, en partant des centres c1 = 1 et c2 = 2.',
          en: 'Run k-means with k = 2 on the values 1, 2, 3, 10, 11, 12, starting from the centers c1 = 1 and c2 = 2.',
          tr: '1, 2, 3, 10, 11, 12 değerlerine c1 = 1 ve c2 = 2 merkezlerinden başlayarak k = 2 ile k-means uygula.',
        },
        solution: {
          fr: 'Tour 1 : 1 va à c1 ; 2, 3, 10, 11, 12 sont plus proches de c2. Nouveaux centres : c1 = 1, c2 = (2 + 3 + 10 + 11 + 12) / 5 = 7,6. Tour 2 : 1, 2 et 3 vont à c1 (par ex. 3 est à 2 de c1 et à 4,6 de c2) ; 10, 11 et 12 vont à c2. Centres : c1 = 2, c2 = 11. Tour 3 : plus aucun changement. Résultat : {1, 2, 3} et {10, 11, 12}.',
          en: 'Round 1: 1 goes to c1; 2, 3, 10, 11, 12 are closer to c2. New centers: c1 = 1, c2 = (2 + 3 + 10 + 11 + 12) / 5 = 7.6. Round 2: 1, 2 and 3 go to c1 (e.g. 3 is 2 from c1 and 4.6 from c2); 10, 11 and 12 go to c2. Centers: c1 = 2, c2 = 11. Round 3: nothing changes. Result: {1, 2, 3} and {10, 11, 12}.',
          tr: '1. tur: 1, c1’e gider; 2, 3, 10, 11, 12 c2’ye daha yakındır. Yeni merkezler: c1 = 1, c2 = (2 + 3 + 10 + 11 + 12) / 5 = 7,6. 2. tur: 1, 2 ve 3 c1’e gider (örn. 3, c1’e 2, c2’ye 4,6 uzaklıktadır); 10, 11 ve 12 c2’ye gider. Merkezler: c1 = 2, c2 = 11. 3. tur: değişiklik yok. Sonuç: {1, 2, 3} ve {10, 11, 12}.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans k-means, comment met-on à jour un centre ?',
        en: 'In k-means, how is a center updated?',
        tr: 'k-means’te bir merkez nasıl güncellenir?',
      },
      options: {
        fr: ['On prend le point le plus éloigné', 'On prend la moyenne des points de son groupe', 'On le tire au hasard'],
        en: ['Take the farthest point', 'Take the mean of its group’s points', 'Pick it at random'],
        tr: ['En uzak nokta alınır', 'Grubundaki noktaların ortalaması alınır', 'Rastgele seçilir'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'C’est le « means » de k-means : chaque centre devient la moyenne des points qui lui sont affectés.',
        en: 'That is the “means” in k-means: each center becomes the mean of the points assigned to it.',
        tr: 'k-means’teki “means” budur: her merkez kendisine atanan noktaların ortalaması olur.',
      },
    },
  },
  {
    id: 'ml-w13-pca-neural',
    week: 13,
    title: {
      fr: 'Réduction de dimension (PCA) et réseaux de neurones',
      en: 'Dimensionality reduction (PCA) and neural networks',
      tr: 'Boyut indirgeme (PCA) ve yapay sinir ağları',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’analyse en composantes principales (PCA) remplace beaucoup de caractéristiques corrélées par quelques nouvelles directions, les composantes principales, qui gardent le plus de variance possible. Elle sert à visualiser des données en 2D et à accélérer les modèles.',
          en: 'Principal component analysis (PCA) replaces many correlated features with a few new directions, the principal components, that keep as much variance as possible. It is used to visualize data in 2D and to speed up models.',
          tr: 'Temel bileşen analizi (PCA), birbiriyle ilişkili çok sayıda özniteliği, mümkün olduğunca fazla varyansı koruyan birkaç yeni yönle, yani temel bileşenlerle değiştirir. Verileri 2B’de görselleştirmek ve modelleri hızlandırmak için kullanılır.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Un neurone artificiel (perceptron) calcule une somme pondérée plus un biais, puis applique une fonction d’activation (marche, sigmoïde, ReLU). Un réseau multicouche (MLP) empile des couches de neurones ; il est entraîné par rétropropagation du gradient. Avec beaucoup de couches, on parle d’apprentissage profond (deep learning).',
          en: 'An artificial neuron (perceptron) computes a weighted sum plus a bias, then applies an activation function (step, sigmoid, ReLU). A multilayer network (MLP) stacks layers of neurons; it is trained by backpropagation. With many layers, it is called deep learning.',
          tr: 'Yapay nöron (perceptron) ağırlıklı toplam artı bir eşik hesaplar, sonra bir aktivasyon fonksiyonu uygular (basamak, sigmoid, ReLU). Çok katmanlı ağ (MLP) nöron katmanlarını üst üste koyar; geri yayılımla eğitilir. Çok sayıda katman varsa derin öğrenme denir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un perceptron a les poids w = (1, 1), le biais b = −1,5 et l’activation marche (sortie 1 si la somme > 0, sinon 0). Calcule sa sortie pour les 4 entrées (0, 0), (0, 1), (1, 0), (1, 1). Quelle porte logique réalise-t-il ?',
          en: 'A perceptron has weights w = (1, 1), bias b = −1.5 and a step activation (output 1 if the sum > 0, otherwise 0). Compute its output for the 4 inputs (0, 0), (0, 1), (1, 0), (1, 1). Which logic gate does it implement?',
          tr: 'Bir perceptronun ağırlıkları w = (1, 1), eşiği b = −1,5 ve basamak aktivasyonu var (toplam > 0 ise çıkış 1, değilse 0). 4 giriş (0, 0), (0, 1), (1, 0), (1, 1) için çıkışını hesapla. Hangi mantık kapısını gerçekleştirir?',
        },
        solution: {
          fr: '(0, 0) : −1,5 → 0. (0, 1) et (1, 0) : 1 − 1,5 = −0,5 → 0. (1, 1) : 2 − 1,5 = 0,5 → 1. C’est la porte AND. Un seul perceptron ne peut pas réaliser XOR, qui n’est pas séparable par une droite : il faut au moins une couche cachée.',
          en: '(0, 0): −1.5 → 0. (0, 1) and (1, 0): 1 − 1.5 = −0.5 → 0. (1, 1): 2 − 1.5 = 0.5 → 1. It is the AND gate. A single perceptron cannot implement XOR, which is not separable by a line: at least one hidden layer is needed.',
          tr: '(0, 0): −1,5 → 0. (0, 1) ve (1, 0): 1 − 1,5 = −0,5 → 0. (1, 1): 2 − 1,5 = 0,5 → 1. Bu AND kapısıdır. Tek bir perceptron, bir doğruyla ayrılamayan XOR’u gerçekleştiremez: en az bir gizli katman gerekir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle fonction un seul perceptron ne peut-il pas apprendre ?',
        en: 'Which function can a single perceptron not learn?',
        tr: 'Tek bir perceptron hangi fonksiyonu öğrenemez?',
      },
      options: { fr: ['AND', 'OR', 'XOR'], en: ['AND', 'OR', 'XOR'], tr: ['AND', 'OR', 'XOR'] },
      answerIndex: 2,
      explanation: {
        fr: 'Un perceptron trace une seule droite de séparation. Les points de XOR (classe 1 en (0, 1) et (1, 0)) ne peuvent pas être séparés par une seule droite.',
        en: 'A perceptron draws a single separating line. The XOR points (class 1 at (0, 1) and (1, 0)) cannot be separated by a single line.',
        tr: 'Perceptron tek bir ayırıcı doğru çizer. XOR noktaları ((0, 1) ve (1, 0)’da sınıf 1) tek bir doğruyla ayrılamaz.',
      },
    },
  },
  {
    id: 'ml-w14-practice-ethics',
    week: 14,
    title: {
      fr: 'Un projet complet, éthique et révision du final',
      en: 'A full project, ethics and final review',
      tr: 'Uçtan uca proje, etik ve final tekrarı',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'from sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y)\nmodel = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))\nmodel.fit(X_train, y_train)          # la mise à l’échelle n’apprend que sur le train\nprint(model.score(X_test, y_test))   # exactitude sur le test',
          en: 'from sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y)\nmodel = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))\nmodel.fit(X_train, y_train)          # scaling only learns from train\nprint(model.score(X_test, y_test))   # accuracy on the test set',
          tr: 'from sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y)\nmodel = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))\nmodel.fit(X_train, y_train)          # ölçekleme yalnızca eğitimden öğrenir\nprint(model.score(X_test, y_test))   # test kümesindeki doğruluk',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Un modèle reproduit les biais de ses données : s’il apprend sur des recrutements passés injustes, il recommencera. Il faut vérifier les résultats par groupe, protéger les données personnelles (KVKK, RGPD), expliquer les décisions importantes et garder un humain dans la boucle.',
          en: 'A model reproduces the biases in its data: if it learns from unfair past hiring, it will repeat it. Results should be checked per group, personal data protected (KVKK, GDPR), important decisions explained and a human kept in the loop.',
          tr: 'Bir model verilerindeki önyargıları yeniden üretir: geçmişteki adaletsiz işe alımlardan öğrenirse aynısını tekrarlar. Sonuçlar gruplara göre kontrol edilmeli, kişisel veriler korunmalı (KVKK, GDPR), önemli kararlar açıklanmalı ve süreçte bir insan bulunmalıdır.',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Matrice de confusion, exactitude, précision, rappel, F1\n✔ Arbres de décision : entropie, gain d’information, élagage\n✔ Bayes naïf : théorème de Bayes, indépendance, lissage\n✔ SVM (marge, noyau), bagging, forêt aléatoire, boosting\n✔ k-means : affectation, mise à jour, choix de k\n✔ PCA, perceptron, MLP, XOR\n✔ Pipeline, fuite de données, biais et éthique',
          en: '✔ Confusion matrix, accuracy, precision, recall, F1\n✔ Decision trees: entropy, information gain, pruning\n✔ Naive Bayes: Bayes’ theorem, independence, smoothing\n✔ SVM (margin, kernel), bagging, random forest, boosting\n✔ k-means: assignment, update, choosing k\n✔ PCA, perceptron, MLP, XOR\n✔ Pipeline, data leakage, bias and ethics',
          tr: '✔ Karışıklık matrisi, doğruluk, kesinlik, duyarlılık, F1\n✔ Karar ağaçları: entropi, bilgi kazancı, budama\n✔ Naive Bayes: Bayes teoremi, bağımsızlık, düzeltme\n✔ SVM (marj, çekirdek), bagging, rastgele orman, boosting\n✔ k-means: atama, güncelleme, k seçimi\n✔ PCA, perceptron, MLP, XOR\n✔ Pipeline, veri sızıntısı, önyargı ve etik',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un étudiant normalise toutes les données avec StandardScaler, puis les sépare en entraînement et test, et obtient 98 % au test. Pourquoi ce score est-il suspect, et comment corriger ?',
          en: 'A student normalizes all the data with StandardScaler, then splits it into training and test, and gets 98% on the test. Why is this score suspicious, and how should it be fixed?',
          tr: 'Bir öğrenci tüm verileri StandardScaler ile normalleştiriyor, sonra eğitim ve test olarak ayırıyor ve testte %98 alıyor. Bu skor neden şüphelidir ve nasıl düzeltilmeli?',
        },
        solution: {
          fr: 'La moyenne et l’écart-type ont été calculés avec les données de test : c’est une fuite de données, le test n’est plus vraiment « inconnu » et le score est trop optimiste. Il faut séparer d’abord, puis apprendre la mise à l’échelle sur l’entraînement seulement, le plus simplement avec un Pipeline, comme dans l’exemple ci-dessus.',
          en: 'The mean and standard deviation were computed with the test data: that is data leakage, the test is no longer truly “unseen” and the score is too optimistic. Split first, then learn the scaling on the training set only, most simply with a Pipeline as in the example above.',
          tr: 'Ortalama ve standart sapma test verileriyle hesaplanmıştır: bu bir veri sızıntısıdır, test artık gerçekten “görülmemiş” değildir ve skor fazla iyimserdir. Önce ayırmak, sonra ölçeklemeyi yalnızca eğitim kümesinde öğrenmek gerekir; en basiti yukarıdaki örnekteki gibi bir Pipeline kullanmaktır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'À quoi sert stratify=y dans train_test_split ?',
        en: 'What is stratify=y for in train_test_split?',
        tr: 'train_test_split içinde stratify=y ne işe yarar?',
      },
      options: {
        fr: ['À trier les données', 'À garder les mêmes proportions de classes dans l’entraînement et le test', 'À supprimer les valeurs manquantes'],
        en: ['To sort the data', 'To keep the same class proportions in training and test', 'To remove missing values'],
        tr: ['Verileri sıralamak', 'Eğitim ve testte aynı sınıf oranlarını korumak', 'Eksik değerleri silmek'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Avec des classes déséquilibrées, un tirage au hasard pourrait mettre presque tous les cas rares d’un seul côté. La stratification garde la même répartition des deux côtés.',
        en: 'With imbalanced classes, a random split could put almost all the rare cases on one side. Stratification keeps the same distribution on both sides.',
        tr: 'Dengesiz sınıflarda rastgele bir ayırma nadir durumların neredeyse hepsini bir tarafa koyabilir. Tabakalama her iki tarafta da aynı dağılımı korur.',
      },
    },
  },
];
