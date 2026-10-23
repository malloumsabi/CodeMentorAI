/**
 * BLM436 Örüntü Tanımaya Giriş (Introduction to Pattern Recognition), 14 weeks following the KBU course
 * contents, in the spirit of Duda, Hart & Stork, "Pattern Classification".
 * Weeks 1–7 prepare the midterm, weeks 8–14 the final.
 */

import type { LessonSource } from '@/data/lessons';

export const blm436Lessons: LessonSource[] = [
  {
    id: 'pr-w01-intro',
    week: 1,
    title: {
      fr: 'Qu’est-ce que la reconnaissance de formes ?',
      en: 'What is pattern recognition?',
      tr: 'Örüntü tanıma nedir?',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Nous reconnaissons sans effort des visages, des voix ou des écritures. La reconnaissance de formes (pattern recognition) apprend à une machine à faire pareil : à partir de mesures, décider à quelle classe appartient un objet.',
          en: 'We effortlessly recognize faces, voices or handwriting. Pattern recognition teaches a machine to do the same: from measurements, decide which class an object belongs to.',
          tr: 'Yüzleri, sesleri veya el yazılarını zahmetsizce tanırız. Örüntü tanıma bir makineye aynısını öğretir: ölçümlerden bir nesnenin hangi sınıfa ait olduğuna karar vermek.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Chaîne d’un système de reconnaissance\ncapteur → segmentation → extraction de caractéristiques\n        → classification → post-traitement → décision\n\nCycle de conception : collecter les données, choisir les caractéristiques,\nchoisir le modèle, entraîner, évaluer (et recommencer)',
          en: 'Pipeline of a recognition system\nsensor → segmentation → feature extraction\n       → classification → post-processing → decision\n\nDesign cycle: collect data, choose features,\nchoose the model, train, evaluate (and repeat)',
          tr: 'Bir tanıma sisteminin akışı\nalgılayıcı → bölütleme → öznitelik çıkarma\n           → sınıflandırma → son işleme → karar\n\nTasarım döngüsü: veri toplamak, öznitelikleri seçmek,\nmodeli seçmek, eğitmek, değerlendirmek (ve tekrarlamak)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Exemple classique de Duda et Hart : trier des poissons (saumon ou bar) sur un tapis roulant. Une caméra filme chaque poisson, on isole le poisson de l’arrière-plan, on mesure sa clarté et sa largeur, puis un classifieur décide.',
          en: 'Classic Duda and Hart example: sorting fish (salmon or sea bass) on a conveyor belt. A camera films each fish, the fish is separated from the background, its lightness and width are measured, then a classifier decides.',
          tr: 'Duda ve Hart’ın klasik örneği: bir taşıma bandındaki balıkları (somon veya levrek) ayırmak. Bir kamera her balığı çeker, balık arka plandan ayrılır, parlaklığı ve genişliği ölçülür, sonra bir sınıflandırıcı karar verir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pour un système qui lit les plaques d’immatriculation à l’entrée d’un parking, décris chaque étape de la chaîne : capteur, segmentation, caractéristiques, classification, post-traitement.',
          en: 'For a system that reads license plates at a parking entrance, describe each pipeline step: sensor, segmentation, features, classification, post-processing.',
          tr: 'Bir otopark girişinde plaka okuyan bir sistem için akışın her adımını açıkla: algılayıcı, bölütleme, öznitelikler, sınıflandırma, son işleme.',
        },
        solution: {
          fr: 'Capteur : une caméra. Segmentation : trouver la plaque dans l’image, puis découper chaque caractère. Caractéristiques : par exemple les pixels normalisés de chaque caractère, ou des descripteurs de forme. Classification : reconnaître chaque caractère (0-9, A-Z). Post-traitement : vérifier le format d’une plaque valide (par ex. « 78 ABC 123 » en Turquie) et corriger les confusions comme O et 0.',
          en: 'Sensor: a camera. Segmentation: find the plate in the image, then cut out each character. Features: e.g. the normalized pixels of each character, or shape descriptors. Classification: recognize each character (0-9, A-Z). Post-processing: check a valid plate format (e.g. “78 ABC 123” in Turkey) and fix confusions such as O and 0.',
          tr: 'Algılayıcı: bir kamera. Bölütleme: görüntüde plakayı bulmak, sonra her karakteri ayırmak. Öznitelikler: örneğin her karakterin normalleştirilmiş pikselleri veya şekil tanımlayıcıları. Sınıflandırma: her karakteri tanımak (0-9, A-Z). Son işleme: geçerli bir plaka biçimini kontrol etmek (örn. Türkiye’de “78 ABC 123”) ve O ile 0 gibi karışıklıkları düzeltmek.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle étape isole l’objet du reste de l’image ?',
        en: 'Which step separates the object from the rest of the image?',
        tr: 'Hangi adım nesneyi görüntünün geri kalanından ayırır?',
      },
      options: {
        fr: ['La segmentation', 'La classification', 'Le post-traitement'],
        en: ['Segmentation', 'Classification', 'Post-processing'],
        tr: ['Bölütleme', 'Sınıflandırma', 'Son işleme'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'La segmentation découpe les données pour ne garder que l’objet à reconnaître. C’est souvent l’une des étapes les plus difficiles.',
        en: 'Segmentation cuts the data to keep only the object to recognize. It is often one of the hardest steps.',
        tr: 'Bölütleme, yalnızca tanınacak nesneyi tutmak için veriyi ayırır. Çoğu zaman en zor adımlardan biridir.',
      },
    },
  },
  {
    id: 'pr-w02-features',
    week: 2,
    title: {
      fr: 'Caractéristiques et espace des caractéristiques',
      en: 'Features and feature space',
      tr: 'Öznitelikler ve öznitelik uzayı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Chaque objet est décrit par un vecteur de caractéristiques x = (x₁, …, x_d), un point dans un espace à d dimensions. Un classifieur découpe cet espace en régions de décision, séparées par des frontières de décision.',
          en: 'Each object is described by a feature vector x = (x₁, …, x_d), a point in a d-dimensional space. A classifier splits this space into decision regions, separated by decision boundaries.',
          tr: 'Her nesne bir öznitelik vektörü x = (x₁, …, x_d) ile tanımlanır; bu, d boyutlu bir uzayda bir noktadır. Sınıflandırıcı bu uzayı karar sınırlarıyla ayrılan karar bölgelerine böler.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Une bonne caractéristique est :\n- discriminante  : ses valeurs diffèrent nettement d’une classe à l’autre\n- invariante     : elle ne change pas avec la position, la taille, l’éclairage\n- robuste        : peu sensible au bruit\n- peu corrélée   : elle apporte une information nouvelle\n\nOn normalise souvent : x′ = (x − moyenne) / écart-type',
          en: 'A good feature is:\n- discriminative: its values clearly differ between classes\n- invariant     : it doesn’t change with position, size, lighting\n- robust        : not very sensitive to noise\n- uncorrelated  : it brings new information\n\nFeatures are often normalized: x′ = (x − mean) / standard deviation',
          tr: 'İyi bir öznitelik:\n- ayırt edicidir : değerleri sınıftan sınıfa açıkça farklıdır\n- değişmezdir   : konum, boyut, ışıkla değişmez\n- sağlamdır     : gürültüye az duyarlıdır\n- ilişkisizdir  : yeni bilgi getirir\n\nÇoğunlukla normalleştirilir: x′ = (x − ortalama) / standart sapma',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pour distinguer des pommes et des bananes sur une photo, évalue ces caractéristiques : (1) la couleur moyenne ; (2) le rapport longueur / largeur ; (3) la position dans l’image ; (4) la surface en pixels.',
          en: 'To tell apples from bananas in a photo, evaluate these features: (1) the average color; (2) the length / width ratio; (3) the position in the image; (4) the area in pixels.',
          tr: 'Bir fotoğrafta elmayı muzdan ayırmak için bu öznitelikleri değerlendir: (1) ortalama renk; (2) uzunluk / genişlik oranı; (3) görüntüdeki konum; (4) piksel cinsinden alan.',
        },
        solution: {
          fr: '(1) Assez discriminante, mais sensible à l’éclairage et aux pommes jaunes. (2) Très bonne : la banane est allongée, la pomme ronde, et un rapport ne dépend pas de la taille ni de la distance. (3) Inutile : la position ne dit rien de la classe. (4) Mauvaise seule : elle dépend de la distance à la caméra (pas invariante à l’échelle).',
          en: '(1) Fairly discriminative, but sensitive to lighting and to yellow apples. (2) Very good: a banana is elongated, an apple round, and a ratio does not depend on size or distance. (3) Useless: position says nothing about the class. (4) Poor on its own: it depends on the distance to the camera (not scale-invariant).',
          tr: '(1) Oldukça ayırt edici, ama ışığa ve sarı elmalara duyarlı. (2) Çok iyi: muz uzun, elma yuvarlaktır ve bir oran boyuta veya uzaklığa bağlı değildir. (3) Yararsız: konum sınıf hakkında hiçbir şey söylemez. (4) Tek başına kötü: kameraya uzaklığa bağlıdır (ölçeğe göre değişmez değildir).',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi un rapport comme longueur / largeur est-il souvent meilleur qu’une longueur seule ?',
        en: 'Why is a ratio such as length / width often better than a length alone?',
        tr: 'Uzunluk / genişlik gibi bir oran neden çoğu zaman tek başına uzunluktan daha iyidir?',
      },
      options: {
        fr: ['Il est plus rapide à calculer', 'Il est invariant à l’échelle', 'Il utilise moins de mémoire'],
        en: ['It is faster to compute', 'It is scale-invariant', 'It uses less memory'],
        tr: ['Hesaplaması daha hızlıdır', 'Ölçeğe göre değişmezdir', 'Daha az bellek kullanır'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Si l’objet est plus proche, longueur et largeur grandissent ensemble : le rapport reste le même. La caractéristique ne dépend plus de la distance.',
        en: 'If the object is closer, length and width grow together: the ratio stays the same. The feature no longer depends on distance.',
        tr: 'Nesne yaklaşırsa uzunluk ve genişlik birlikte büyür: oran aynı kalır. Öznitelik artık uzaklığa bağlı değildir.',
      },
    },
  },
  {
    id: 'pr-w03-bayes',
    week: 3,
    title: {
      fr: 'Théorie de la décision bayésienne',
      en: 'Bayesian decision theory',
      tr: 'Bayes karar teorisi',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'On connaît la probabilité a priori P(ωᵢ) de chaque classe et la vraisemblance p(x | ωᵢ) (la loi des mesures dans la classe). La formule de Bayes donne la probabilité a posteriori : P(ωᵢ | x) = p(x | ωᵢ) P(ωᵢ) / p(x). La règle de Bayes choisit la classe dont la probabilité a posteriori est la plus grande : c’est elle qui minimise la probabilité d’erreur.',
          en: 'We know each class’s prior probability P(ωᵢ) and the likelihood p(x | ωᵢ) (the distribution of measurements in the class). Bayes’ formula gives the posterior probability: P(ωᵢ | x) = p(x | ωᵢ) P(ωᵢ) / p(x). Bayes’ rule picks the class with the largest posterior: it minimizes the probability of error.',
          tr: 'Her sınıfın önsel olasılığı P(ωᵢ) ve olabilirliği p(x | ωᵢ) (sınıftaki ölçümlerin dağılımı) bilinir. Bayes formülü sonsal olasılığı verir: P(ωᵢ | x) = p(x | ωᵢ) P(ωᵢ) / p(x). Bayes kuralı en büyük sonsal olasılıklı sınıfı seçer: hata olasılığını en aza indiren budur.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'postérieure = vraisemblance × a priori / évidence\np(x) = Σ p(x | ωⱼ) P(ωⱼ)   (sert seulement à normaliser)\n\nDécider ω₁ si p(x | ω₁) P(ω₁) > p(x | ω₂) P(ω₂), sinon ω₂\nP(erreur | x) = min(P(ω₁ | x), P(ω₂ | x))',
          en: 'posterior = likelihood × prior / evidence\np(x) = Σ p(x | ωⱼ) P(ωⱼ)   (only used to normalize)\n\nDecide ω₁ if p(x | ω₁) P(ω₁) > p(x | ω₂) P(ω₂), otherwise ω₂\nP(error | x) = min(P(ω₁ | x), P(ω₂ | x))',
          tr: 'sonsal = olabilirlik × önsel / kanıt\np(x) = Σ p(x | ωⱼ) P(ωⱼ)   (yalnızca normalleştirme için)\n\np(x | ω₁) P(ω₁) > p(x | ω₂) P(ω₂) ise ω₁, değilse ω₂ seç\nP(hata | x) = min(P(ω₁ | x), P(ω₂ | x))',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'P(ω₁) = 2/3 et P(ω₂) = 1/3. Pour une mesure x, p(x | ω₁) = 0,2 et p(x | ω₂) = 0,5. Calcule les probabilités a posteriori, la décision de Bayes et la probabilité d’erreur pour ce x.',
          en: 'P(ω₁) = 2/3 and P(ω₂) = 1/3. For a measurement x, p(x | ω₁) = 0.2 and p(x | ω₂) = 0.5. Compute the posteriors, Bayes’ decision and the probability of error for this x.',
          tr: 'P(ω₁) = 2/3 ve P(ω₂) = 1/3. Bir x ölçümü için p(x | ω₁) = 0,2 ve p(x | ω₂) = 0,5. Sonsal olasılıkları, Bayes kararını ve bu x için hata olasılığını hesapla.',
        },
        solution: {
          fr: 'p(x | ω₁) P(ω₁) = 0,2 × 2/3 ≈ 0,133 ; p(x | ω₂) P(ω₂) = 0,5 × 1/3 ≈ 0,167. p(x) ≈ 0,300. P(ω₁ | x) ≈ 0,444 et P(ω₂ | x) ≈ 0,556. On choisit ω₂, même si ω₁ est plus fréquente a priori : la mesure penche assez vers ω₂. P(erreur | x) = 0,444.',
          en: 'p(x | ω₁) P(ω₁) = 0.2 × 2/3 ≈ 0.133; p(x | ω₂) P(ω₂) = 0.5 × 1/3 ≈ 0.167. p(x) ≈ 0.300. P(ω₁ | x) ≈ 0.444 and P(ω₂ | x) ≈ 0.556. Choose ω₂, even though ω₁ is more frequent a priori: the measurement leans enough toward ω₂. P(error | x) = 0.444.',
          tr: 'p(x | ω₁) P(ω₁) = 0,2 × 2/3 ≈ 0,133; p(x | ω₂) P(ω₂) = 0,5 × 1/3 ≈ 0,167. p(x) ≈ 0,300. P(ω₁ | x) ≈ 0,444 ve P(ω₂ | x) ≈ 0,556. Önsel olarak ω₁ daha sık olsa da ω₂ seçilir: ölçüm yeterince ω₂’ye yakındır. P(hata | x) = 0,444.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Sans aucune mesure, quelle classe la règle de Bayes choisit-elle ?',
        en: 'With no measurement at all, which class does Bayes’ rule choose?',
        tr: 'Hiç ölçüm yokken Bayes kuralı hangi sınıfı seçer?',
      },
      options: {
        fr: ['Une classe au hasard', 'La classe de plus grande probabilité a priori', 'La classe la plus rare'],
        en: ['A random class', 'The class with the largest prior', 'The rarest class'],
        tr: ['Rastgele bir sınıf', 'En büyük önsel olasılıklı sınıf', 'En nadir sınıf'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Sans information, la meilleure décision est la classe la plus probable a priori : c’est elle qui donne le moins d’erreurs en moyenne.',
        en: 'Without information, the best decision is the most probable class a priori: it gives the fewest errors on average.',
        tr: 'Bilgi yokken en iyi karar önsel olarak en olası sınıftır: ortalamada en az hatayı o verir.',
      },
    },
  },
  {
    id: 'pr-w04-risk',
    week: 4,
    title: {
      fr: 'Coût des erreurs et risque minimal',
      en: 'Cost of errors and minimum risk',
      tr: 'Hata maliyeti ve en küçük risk',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Toutes les erreurs ne coûtent pas la même chose : rater un cancer est bien plus grave qu’une fausse alerte. On définit une fonction de perte λᵢⱼ = coût de choisir ωᵢ quand la vraie classe est ωⱼ. Le risque conditionnel d’une action est R(αᵢ | x) = Σⱼ λᵢⱼ P(ωⱼ | x). La règle de Bayes générale choisit l’action de risque minimal.',
          en: 'Not all errors cost the same: missing a cancer is far worse than a false alarm. A loss function λᵢⱼ = cost of choosing ωᵢ when the true class is ωⱼ is defined. The conditional risk of an action is R(αᵢ | x) = Σⱼ λᵢⱼ P(ωⱼ | x). The general Bayes rule picks the action with the minimum risk.',
          tr: 'Tüm hataların maliyeti aynı değildir: bir kanseri kaçırmak yanlış bir alarmdan çok daha ağırdır. Bir kayıp fonksiyonu tanımlanır: λᵢⱼ = gerçek sınıf ωⱼ iken ωᵢ seçmenin maliyeti. Bir eylemin koşullu riski R(αᵢ | x) = Σⱼ λᵢⱼ P(ωⱼ | x)’dir. Genel Bayes kuralı en küçük riskli eylemi seçer.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Deux classes :\nR(α₁ | x) = λ₁₁ P(ω₁ | x) + λ₁₂ P(ω₂ | x)\nR(α₂ | x) = λ₂₁ P(ω₁ | x) + λ₂₂ P(ω₂ | x)\n\nTest du rapport de vraisemblance : décider ω₁ si\np(x | ω₁) / p(x | ω₂) > [(λ₁₂ − λ₂₂) P(ω₂)] / [(λ₂₁ − λ₁₁) P(ω₁)]\nPerte 0-1 (λ = 0 si juste, 1 sinon) → on retrouve « plus grande postérieure »',
          en: 'Two classes:\nR(α₁ | x) = λ₁₁ P(ω₁ | x) + λ₁₂ P(ω₂ | x)\nR(α₂ | x) = λ₂₁ P(ω₁ | x) + λ₂₂ P(ω₂ | x)\n\nLikelihood ratio test: decide ω₁ if\np(x | ω₁) / p(x | ω₂) > [(λ₁₂ − λ₂₂) P(ω₂)] / [(λ₂₁ − λ₁₁) P(ω₁)]\n0-1 loss (λ = 0 if right, 1 otherwise) → back to “largest posterior”',
          tr: 'İki sınıf:\nR(α₁ | x) = λ₁₁ P(ω₁ | x) + λ₁₂ P(ω₂ | x)\nR(α₂ | x) = λ₂₁ P(ω₁ | x) + λ₂₂ P(ω₂ | x)\n\nOlabilirlik oranı testi: şu durumda ω₁ seç\np(x | ω₁) / p(x | ω₂) > [(λ₁₂ − λ₂₂) P(ω₂)] / [(λ₂₁ − λ₁₁) P(ω₁)]\n0-1 kaybı (doğruysa λ = 0, değilse 1) → “en büyük sonsal” kuralına dönülür',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un test médical donne P(sain | x) = 0,7 et P(malade | x) = 0,3. Dire « sain » à un malade coûte 10, dire « malade » à une personne saine coûte 1, une bonne réponse coûte 0. Quelle décision prendre ?',
          en: 'A medical test gives P(healthy | x) = 0.7 and P(sick | x) = 0.3. Saying “healthy” to a sick person costs 10, saying “sick” to a healthy person costs 1, a right answer costs 0. Which decision should be taken?',
          tr: 'Bir tıbbi test P(sağlıklı | x) = 0,7 ve P(hasta | x) = 0,3 veriyor. Hasta birine “sağlıklı” demenin maliyeti 10, sağlıklı birine “hasta” demenin maliyeti 1, doğru cevabın maliyeti 0. Hangi karar verilmeli?',
        },
        solution: {
          fr: 'R(dire sain) = 0 × 0,7 + 10 × 0,3 = 3. R(dire malade) = 1 × 0,7 + 0 × 0,3 = 0,7. Le risque est plus faible en disant « malade » (on fera des examens complémentaires), alors que « sain » est plus probable : c’est tout l’intérêt d’intégrer les coûts.',
          en: 'R(say healthy) = 0 × 0.7 + 10 × 0.3 = 3. R(say sick) = 1 × 0.7 + 0 × 0.3 = 0.7. The risk is lower when saying “sick” (more tests will follow), even though “healthy” is more probable: that is the whole point of including costs.',
          tr: 'R(sağlıklı de) = 0 × 0,7 + 10 × 0,3 = 3. R(hasta de) = 1 × 0,7 + 0 × 0,3 = 0,7. “Sağlıklı” daha olası olsa da “hasta” demenin riski daha düşüktür (ek tetkikler yapılır): maliyetleri hesaba katmanın amacı budur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Avec une perte 0-1, la décision de risque minimal revient à…',
        en: 'With a 0-1 loss, the minimum-risk decision amounts to…',
        tr: '0-1 kaybıyla en küçük riskli karar neye denk gelir?',
      },
      options: {
        fr: ['choisir la plus grande probabilité a posteriori', 'choisir la plus petite vraisemblance', 'choisir toujours la classe 1'],
        en: ['choosing the largest posterior', 'choosing the smallest likelihood', 'always choosing class 1'],
        tr: ['En büyük sonsal olasılığı seçmeye', 'En küçük olabilirliği seçmeye', 'Her zaman 1. sınıfı seçmeye'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Avec λ = 0 si juste et 1 sinon, R(αᵢ | x) = 1 − P(ωᵢ | x) : minimiser le risque, c’est maximiser la postérieure, donc minimiser la probabilité d’erreur.',
        en: 'With λ = 0 if right and 1 otherwise, R(αᵢ | x) = 1 − P(ωᵢ | x): minimizing risk means maximizing the posterior, so minimizing the probability of error.',
        tr: 'Doğruysa λ = 0, değilse 1 iken R(αᵢ | x) = 1 − P(ωᵢ | x) olur: riski en aza indirmek sonsalı en büyük yapmak, yani hata olasılığını en aza indirmektir.',
      },
    },
  },
  {
    id: 'pr-w05-gaussian',
    week: 5,
    title: {
      fr: 'Lois normales et fonctions discriminantes',
      en: 'Normal densities and discriminant functions',
      tr: 'Normal dağılımlar ve ayırtaç fonksiyonları',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un classifieur peut s’écrire avec une fonction discriminante gᵢ(x) par classe : on choisit la classe dont gᵢ(x) est la plus grande. Pour Bayes, on prend gᵢ(x) = ln p(x | ωᵢ) + ln P(ωᵢ). Quand les classes suivent des lois normales (gaussiennes), ces fonctions ont une forme simple.',
          en: 'A classifier can be written with one discriminant function gᵢ(x) per class: pick the class with the largest gᵢ(x). For Bayes, take gᵢ(x) = ln p(x | ωᵢ) + ln P(ωᵢ). When the classes follow normal (Gaussian) distributions, these functions have a simple form.',
          tr: 'Bir sınıflandırıcı her sınıf için bir ayırtaç fonksiyonu gᵢ(x) ile yazılabilir: gᵢ(x)’i en büyük olan sınıf seçilir. Bayes için gᵢ(x) = ln p(x | ωᵢ) + ln P(ωᵢ) alınır. Sınıflar normal (Gauss) dağılıma uyduğunda bu fonksiyonlar basit bir biçim alır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Loi normale 1D : p(x) = (1 / (σ√(2π))) exp(−(x − μ)² / (2σ²))\n\nDeux classes, même variance σ² :\nfrontière x₀ = (μ₁ + μ₂) / 2 + σ² ln(P(ω₂) / P(ω₁)) / (μ₁ − μ₂)\n→ si les a priori sont égaux, x₀ est au milieu des deux moyennes\n→ sinon, la frontière s’éloigne de la classe la plus probable\n\nEn d dimensions, covariances égales → frontière linéaire (hyperplan)\n                 covariances différentes → frontière quadratique',
          en: '1D normal density: p(x) = (1 / (σ√(2π))) exp(−(x − μ)² / (2σ²))\n\nTwo classes, same variance σ²:\nboundary x₀ = (μ₁ + μ₂) / 2 + σ² ln(P(ω₂) / P(ω₁)) / (μ₁ − μ₂)\n→ with equal priors, x₀ is halfway between the means\n→ otherwise, the boundary moves away from the more probable class\n\nIn d dimensions, equal covariances → linear boundary (hyperplane)\n                 different covariances → quadratic boundary',
          tr: '1B normal dağılım: p(x) = (1 / (σ√(2π))) exp(−(x − μ)² / (2σ²))\n\nİki sınıf, aynı varyans σ²:\nsınır x₀ = (μ₁ + μ₂) / 2 + σ² ln(P(ω₂) / P(ω₁)) / (μ₁ − μ₂)\n→ önseller eşitse x₀ iki ortalamanın tam ortasındadır\n→ değilse sınır daha olası sınıftan uzaklaşır\n\nd boyutta eşit kovaryans → doğrusal sınır (hiperdüzlem)\n          farklı kovaryans → ikinci dereceden sınır',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'ω₁ : μ₁ = 2 ; ω₂ : μ₂ = 6 ; même σ = 1. (1) Avec des a priori égaux, où est la frontière ? (2) Avec P(ω₁) = 0,8 et P(ω₂) = 0,2 ? (3) Comment classer x = 4,2 dans chaque cas ?',
          en: 'ω₁: μ₁ = 2; ω₂: μ₂ = 6; same σ = 1. (1) With equal priors, where is the boundary? (2) With P(ω₁) = 0.8 and P(ω₂) = 0.2? (3) How is x = 4.2 classified in each case?',
          tr: 'ω₁: μ₁ = 2; ω₂: μ₂ = 6; aynı σ = 1. (1) Eşit önsellerle sınır nerededir? (2) P(ω₁) = 0,8 ve P(ω₂) = 0,2 ile? (3) Her durumda x = 4,2 nasıl sınıflandırılır?',
        },
        solution: {
          fr: '(1) x₀ = (2 + 6) / 2 = 4. (2) x₀ = 4 + 1 × ln(0,2 / 0,8) / (2 − 6) = 4 + (−1,386) / (−4) ≈ 4,35 : la frontière se décale vers μ₂, car ω₁ est plus fréquente. (3) A priori égaux : 4,2 > 4, donc ω₂. Avec 0,8 / 0,2 : 4,2 < 4,35, donc ω₁. Le même point change de classe selon les a priori.',
          en: '(1) x₀ = (2 + 6) / 2 = 4. (2) x₀ = 4 + 1 × ln(0.2 / 0.8) / (2 − 6) = 4 + (−1.386) / (−4) ≈ 4.35: the boundary shifts toward μ₂, because ω₁ is more frequent. (3) Equal priors: 4.2 > 4, so ω₂. With 0.8 / 0.2: 4.2 < 4.35, so ω₁. The same point changes class depending on the priors.',
          tr: '(1) x₀ = (2 + 6) / 2 = 4. (2) x₀ = 4 + 1 × ln(0,2 / 0,8) / (2 − 6) = 4 + (−1,386) / (−4) ≈ 4,35: ω₁ daha sık olduğu için sınır μ₂’ye doğru kayar. (3) Eşit önseller: 4,2 > 4, yani ω₂. 0,8 / 0,2 ile: 4,2 < 4,35, yani ω₁. Aynı nokta önsellere göre sınıf değiştirir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Deux classes gaussiennes ont la même matrice de covariance. Quelle est la forme de la frontière de Bayes ?',
        en: 'Two Gaussian classes share the same covariance matrix. What shape is the Bayes boundary?',
        tr: 'İki Gauss sınıfı aynı kovaryans matrisine sahip. Bayes sınırının biçimi nedir?',
      },
      options: { fr: ['Linéaire', 'Circulaire', 'Il n’y en a pas'], en: ['Linear', 'Circular', 'There is none'], tr: ['Doğrusal', 'Çember', 'Sınır yoktur'] },
      answerIndex: 0,
      explanation: {
        fr: 'Avec des covariances égales, les termes quadratiques s’annulent dans g₁(x) − g₂(x) : il reste une fonction linéaire, donc un hyperplan.',
        en: 'With equal covariances, the quadratic terms cancel in g₁(x) − g₂(x): a linear function remains, so a hyperplane.',
        tr: 'Kovaryanslar eşitken g₁(x) − g₂(x) içinde ikinci dereceden terimler birbirini götürür: doğrusal bir fonksiyon, yani bir hiperdüzlem kalır.',
      },
    },
  },
  {
    id: 'pr-w06-mle',
    week: 6,
    title: {
      fr: 'Estimation par maximum de vraisemblance',
      en: 'Maximum likelihood estimation',
      tr: 'En büyük olabilirlik kestirimi',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'En pratique, on ne connaît pas p(x | ωᵢ) : on suppose une forme (par exemple gaussienne) et on estime ses paramètres à partir des exemples. Le maximum de vraisemblance choisit les paramètres θ qui rendent les données observées les plus probables : θ̂ = argmax Π p(xₖ | θ), en pratique en maximisant la somme des logarithmes.',
          en: 'In practice p(x | ωᵢ) is unknown: a form is assumed (for example Gaussian) and its parameters are estimated from the samples. Maximum likelihood picks the parameters θ that make the observed data most probable: θ̂ = argmax Π p(xₖ | θ), in practice by maximizing the sum of logarithms.',
          tr: 'Pratikte p(x | ωᵢ) bilinmez: bir biçim varsayılır (örneğin Gauss) ve parametreleri örneklerden kestirilir. En büyük olabilirlik, gözlenen verileri en olası kılan θ parametrelerini seçer: θ̂ = argmax Π p(xₖ | θ), pratikte logaritmaların toplamı en büyük yapılarak.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Gaussienne 1D, n exemples :\nμ̂  = (1/n) Σ xₖ                    (moyenne de l’échantillon)\nσ̂² = (1/n) Σ (xₖ − μ̂)²             (biaisée : divise par n)\nversion non biaisée : divise par n − 1\n\nEstimation bayésienne : θ est aléatoire, on combine un a priori p(θ)\navec les données pour obtenir p(θ | données)',
          en: '1D Gaussian, n samples:\nμ̂  = (1/n) Σ xₖ                    (sample mean)\nσ̂² = (1/n) Σ (xₖ − μ̂)²             (biased: divides by n)\nunbiased version: divides by n − 1\n\nBayesian estimation: θ is random, a prior p(θ) is combined\nwith the data to get p(θ | data)',
          tr: '1B Gauss, n örnek:\nμ̂  = (1/n) Σ xₖ                    (örneklem ortalaması)\nσ̂² = (1/n) Σ (xₖ − μ̂)²             (yanlı: n’ye böler)\nyansız sürüm: n − 1’e böler\n\nBayesçi kestirim: θ rastgeledir, önsel p(θ) verilerle\nbirleştirilerek p(θ | veri) elde edilir',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Données : 2, 4, 4, 4, 5, 5, 7, 9. Estime μ et σ² par maximum de vraisemblance, puis donne la variance non biaisée.',
          en: 'Data: 2, 4, 4, 4, 5, 5, 7, 9. Estimate μ and σ² by maximum likelihood, then give the unbiased variance.',
          tr: 'Veriler: 2, 4, 4, 4, 5, 5, 7, 9. μ ve σ²’yi en büyük olabilirlikle kestir, sonra yansız varyansı ver.',
        },
        solution: {
          fr: 'μ̂ = 40 / 8 = 5. Écarts au carré : 9, 1, 1, 1, 0, 0, 4, 16, de somme 32. σ̂² (MV) = 32 / 8 = 4, donc σ̂ = 2. Variance non biaisée = 32 / 7 ≈ 4,57. Avec peu de données, la version MV sous-estime un peu la variance.',
          en: 'μ̂ = 40 / 8 = 5. Squared deviations: 9, 1, 1, 1, 0, 0, 4, 16, summing to 32. σ̂² (ML) = 32 / 8 = 4, so σ̂ = 2. Unbiased variance = 32 / 7 ≈ 4.57. With little data, the ML version slightly underestimates the variance.',
          tr: 'μ̂ = 40 / 8 = 5. Kare sapmalar: 9, 1, 1, 1, 0, 0, 4, 16; toplamı 32. σ̂² (EBO) = 32 / 8 = 4, yani σ̂ = 2. Yansız varyans = 32 / 7 ≈ 4,57. Az veriyle EBO sürümü varyansı biraz düşük tahmin eder.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel est l’estimateur du maximum de vraisemblance de la moyenne d’une gaussienne ?',
        en: 'What is the maximum likelihood estimator of a Gaussian’s mean?',
        tr: 'Bir Gauss dağılımının ortalamasının en büyük olabilirlik kestiricisi nedir?',
      },
      options: {
        fr: ['La médiane', 'La moyenne de l’échantillon', 'La plus grande valeur'],
        en: ['The median', 'The sample mean', 'The largest value'],
        tr: ['Medyan', 'Örneklem ortalaması', 'En büyük değer'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'En dérivant la log-vraisemblance par rapport à μ et en l’annulant, on obtient μ̂ = (1/n) Σ xₖ, la moyenne arithmétique.',
        en: 'Differentiating the log-likelihood with respect to μ and setting it to zero gives μ̂ = (1/n) Σ xₖ, the arithmetic mean.',
        tr: 'Log-olabilirliğin μ’ye göre türevi alınıp sıfıra eşitlenince μ̂ = (1/n) Σ xₖ, yani aritmetik ortalama bulunur.',
      },
    },
  },
  {
    id: 'pr-w07-dimensionality',
    week: 7,
    title: {
      fr: 'Malédiction de la dimension et révision de la vize',
      en: 'Curse of dimensionality and midterm review',
      tr: 'Boyut laneti ve vize tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Ajouter des caractéristiques semble toujours utile, mais avec un nombre fixe d’exemples, les performances finissent par baisser : c’est la malédiction de la dimension (phénomène de Hughes). L’espace grandit si vite que les exemples deviennent rares partout.',
          en: 'Adding features always seems useful, but with a fixed number of samples, performance eventually drops: that is the curse of dimensionality (Hughes phenomenon). The space grows so fast that samples become sparse everywhere.',
          tr: 'Öznitelik eklemek her zaman yararlı görünür, ama örnek sayısı sabitken başarım sonunda düşer: buna boyut laneti (Hughes olgusu) denir. Uzay o kadar hızlı büyür ki örnekler her yerde seyrekleşir.',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Solutions : choisir les caractéristiques les plus utiles (sélection), ou en créer moins de nouvelles par combinaison (extraction) : l’ACP (PCA) garde les directions de plus grande variance, l’analyse discriminante de Fisher (LDA) garde celles qui séparent le mieux les classes.',
          en: 'Remedies: pick the most useful features (selection), or build fewer new ones by combination (extraction): PCA keeps the directions of greatest variance, Fisher’s discriminant analysis (LDA) keeps those that best separate the classes.',
          tr: 'Çözümler: en yararlı öznitelikleri seçmek (seçim) veya birleştirerek daha az sayıda yeni öznitelik oluşturmak (çıkarım): PCA en büyük varyanslı yönleri, Fisher ayırtaç analizi (LDA) ise sınıfları en iyi ayıran yönleri tutar.',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Chaîne d’un système de reconnaissance, cycle de conception\n✔ Bonnes caractéristiques : discriminantes, invariantes, robustes\n✔ Bayes : a priori, vraisemblance, postérieure, erreur\n✔ Fonction de perte, risque conditionnel, rapport de vraisemblance\n✔ Lois normales, fonctions discriminantes, frontière x₀\n✔ Maximum de vraisemblance (μ̂, σ̂²), estimation bayésienne\n✔ Malédiction de la dimension, sélection / extraction',
          en: '✔ Recognition system pipeline, design cycle\n✔ Good features: discriminative, invariant, robust\n✔ Bayes: prior, likelihood, posterior, error\n✔ Loss function, conditional risk, likelihood ratio\n✔ Normal densities, discriminant functions, boundary x₀\n✔ Maximum likelihood (μ̂, σ̂²), Bayesian estimation\n✔ Curse of dimensionality, selection / extraction',
          tr: '✔ Tanıma sistemi akışı, tasarım döngüsü\n✔ İyi öznitelikler: ayırt edici, değişmez, sağlam\n✔ Bayes: önsel, olabilirlik, sonsal, hata\n✔ Kayıp fonksiyonu, koşullu risk, olabilirlik oranı\n✔ Normal dağılımlar, ayırtaç fonksiyonları, x₀ sınırı\n✔ En büyük olabilirlik (μ̂, σ̂²), Bayesçi kestirim\n✔ Boyut laneti, seçim / çıkarım',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'On découpe chaque caractéristique en 10 intervalles et on veut au moins 5 exemples par case pour estimer les densités. Combien d’exemples faut-il avec 1, 3 puis 10 caractéristiques ?',
          en: 'Each feature is split into 10 intervals and we want at least 5 samples per cell to estimate the densities. How many samples are needed with 1, 3, then 10 features?',
          tr: 'Her öznitelik 10 aralığa bölünüyor ve yoğunlukları kestirmek için hücre başına en az 5 örnek isteniyor. 1, 3 ve 10 öznitelikle kaç örnek gerekir?',
        },
        solution: {
          fr: 'Le nombre de cases est 10^d. d = 1 : 10 cases → 50 exemples. d = 3 : 1000 cases → 5000 exemples. d = 10 : 10¹⁰ cases → 5 × 10¹⁰ exemples, impossible à collecter. La quantité de données nécessaire croît exponentiellement avec la dimension.',
          en: 'The number of cells is 10^d. d = 1: 10 cells → 50 samples. d = 3: 1000 cells → 5000 samples. d = 10: 10¹⁰ cells → 5 × 10¹⁰ samples, impossible to collect. The data needed grows exponentially with the dimension.',
          tr: 'Hücre sayısı 10^d’dir. d = 1: 10 hücre → 50 örnek. d = 3: 1000 hücre → 5000 örnek. d = 10: 10¹⁰ hücre → 5 × 10¹⁰ örnek, toplanması imkânsız. Gereken veri miktarı boyutla üstel olarak artar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle méthode réduit la dimension en gardant les directions qui séparent le mieux les classes ?',
        en: 'Which method reduces the dimension while keeping the directions that best separate the classes?',
        tr: 'Hangi yöntem sınıfları en iyi ayıran yönleri koruyarak boyutu azaltır?',
      },
      options: { fr: ['ACP (PCA)', 'LDA de Fisher', 'k-means'], en: ['PCA', 'Fisher’s LDA', 'k-means'], tr: ['PCA', 'Fisher LDA', 'k-means'] },
      answerIndex: 1,
      explanation: {
        fr: 'LDA utilise les étiquettes et maximise la séparation entre classes. L’ACP ne regarde pas les classes : elle garde la variance, qui n’est pas toujours ce qui sépare.',
        en: 'LDA uses the labels and maximizes class separation. PCA ignores the classes: it keeps variance, which is not always what separates.',
        tr: 'LDA etiketleri kullanır ve sınıf ayrımını en büyük yapar. PCA sınıflara bakmaz: varyansı korur, bu her zaman ayıran şey değildir.',
      },
    },
  },
  {
    id: 'pr-w08-markov',
    week: 8,
    title: {
      fr: 'Modèles de Markov et modèles de Markov cachés',
      en: 'Markov models and hidden Markov models',
      tr: 'Markov modelleri ve gizli Markov modelleri',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Pour les données en séquence (parole, écriture, ADN), l’ordre compte. Une chaîne de Markov suppose que l’état suivant ne dépend que de l’état actuel : P(sₜ₊₁ | sₜ, …, s₁) = P(sₜ₊₁ | sₜ). Elle est décrite par une matrice de transition A, où aᵢⱼ = P(passer de i à j).',
          en: 'For sequential data (speech, handwriting, DNA), order matters. A Markov chain assumes the next state only depends on the current one: P(sₜ₊₁ | sₜ, …, s₁) = P(sₜ₊₁ | sₜ). It is described by a transition matrix A, where aᵢⱼ = P(going from i to j).',
          tr: 'Sıralı veriler için (konuşma, el yazısı, DNA) sıra önemlidir. Markov zinciri bir sonraki durumun yalnızca mevcut duruma bağlı olduğunu varsayar: P(sₜ₊₁ | sₜ, …, s₁) = P(sₜ₊₁ | sₜ). aᵢⱼ = P(i’den j’ye geçmek) olan bir geçiş matrisi A ile tanımlanır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Modèle de Markov caché (HMM) : on ne voit pas les états, seulement\ndes observations émises avec des probabilités B = P(observation | état)\nλ = (A, B, π)   π = probabilités de l’état de départ\n\nTrois problèmes classiques :\nÉvaluation    : P(observations | λ)          → algorithme forward\nDécodage      : suite d’états la plus probable → algorithme de Viterbi\nApprentissage : estimer A, B, π                → Baum-Welch',
          en: 'Hidden Markov model (HMM): the states are not seen, only\nobservations emitted with probabilities B = P(observation | state)\nλ = (A, B, π)   π = starting state probabilities\n\nThree classic problems:\nEvaluation : P(observations | λ)           → forward algorithm\nDecoding   : most likely state sequence    → Viterbi algorithm\nLearning   : estimate A, B, π              → Baum-Welch',
          tr: 'Gizli Markov modeli (HMM): durumlar görülmez, yalnızca\nB = P(gözlem | durum) olasılıklarıyla üretilen gözlemler görülür\nλ = (A, B, π)   π = başlangıç durumu olasılıkları\n\nÜç klasik problem:\nDeğerlendirme : P(gözlemler | λ)          → ileri (forward) algoritması\nÇözümleme     : en olası durum dizisi     → Viterbi algoritması\nÖğrenme       : A, B, π kestirimi         → Baum-Welch',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Météo : après un jour ensoleillé, il fait beau le lendemain avec probabilité 0,8 (pluie 0,2) ; après un jour de pluie, beau 0,4 et pluie 0,6. Aujourd’hui il fait beau. (1) Probabilité de la suite « beau, puis pluie » pour les deux prochains jours ? (2) Probabilité qu’il pleuve dans deux jours ?',
          en: 'Weather: after a sunny day, the next day is sunny with probability 0.8 (rain 0.2); after a rainy day, sunny 0.4 and rain 0.6. Today is sunny. (1) Probability of the sequence “sunny, then rain” for the next two days? (2) Probability of rain in two days?',
          tr: 'Hava: güneşli bir günden sonra ertesi gün 0,8 olasılıkla güneşli (yağmur 0,2); yağmurlu bir günden sonra güneşli 0,4, yağmur 0,6. Bugün güneşli. (1) Önümüzdeki iki gün için “güneşli, sonra yağmur” dizisinin olasılığı? (2) İki gün sonra yağmur yağma olasılığı?',
        },
        solution: {
          fr: '(1) Beau → beau (0,8), puis beau → pluie (0,2) : 0,8 × 0,2 = 0,16. (2) Deux chemins mènent à la pluie au jour 2 : beau-pluie (0,8 × 0,2 = 0,16) et pluie-pluie (0,2 × 0,6 = 0,12). Total 0,28. C’est l’élément de A² en ligne « beau », colonne « pluie ».',
          en: '(1) Sunny → sunny (0.8), then sunny → rain (0.2): 0.8 × 0.2 = 0.16. (2) Two paths lead to rain on day 2: sunny-rain (0.8 × 0.2 = 0.16) and rain-rain (0.2 × 0.6 = 0.12). Total 0.28. It is the entry of A² in row “sunny”, column “rain”.',
          tr: '(1) Güneşli → güneşli (0,8), sonra güneşli → yağmur (0,2): 0,8 × 0,2 = 0,16. (2) 2. günde yağmura iki yol çıkar: güneşli-yağmur (0,8 × 0,2 = 0,16) ve yağmur-yağmur (0,2 × 0,6 = 0,12). Toplam 0,28. Bu, A²’nin “güneşli” satırı ile “yağmur” sütunundaki elemanıdır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel algorithme trouve la suite d’états cachés la plus probable dans un HMM ?',
        en: 'Which algorithm finds the most likely hidden state sequence in an HMM?',
        tr: 'Bir HMM’de en olası gizli durum dizisini hangi algoritma bulur?',
      },
      options: { fr: ['Forward', 'Viterbi', 'k-means'], en: ['Forward', 'Viterbi', 'k-means'], tr: ['İleri (forward)', 'Viterbi', 'k-means'] },
      answerIndex: 1,
      explanation: {
        fr: 'Viterbi garde, à chaque instant, le meilleur chemin vers chaque état (programmation dynamique). Forward calcule la probabilité totale, en sommant sur tous les chemins.',
        en: 'Viterbi keeps, at each step, the best path to each state (dynamic programming). Forward computes the total probability by summing over all paths.',
        tr: 'Viterbi her adımda her duruma giden en iyi yolu tutar (dinamik programlama). İleri algoritması tüm yollar üzerinden toplayarak toplam olasılığı hesaplar.',
      },
    },
  },
  {
    id: 'pr-w09-parzen',
    week: 9,
    title: {
      fr: 'Méthodes non paramétriques : Parzen',
      en: 'Nonparametric methods: Parzen windows',
      tr: 'Parametrik olmayan yöntemler: Parzen pencereleri',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Si on ne veut pas supposer de forme (gaussienne…), on estime la densité directement à partir des exemples. Idée de base : p(x) ≈ k / (n · V), où k est le nombre d’exemples dans un petit volume V autour de x, parmi n exemples.',
          en: 'If we don’t want to assume a form (Gaussian…), the density is estimated directly from the samples. Basic idea: p(x) ≈ k / (n · V), where k is the number of samples in a small volume V around x, out of n samples.',
          tr: 'Bir biçim (Gauss…) varsaymak istemiyorsak yoğunluk doğrudan örneklerden kestirilir. Temel fikir: n örnek içinde x etrafındaki küçük bir V hacmindeki örnek sayısı k olmak üzere p(x) ≈ k / (n · V).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Fenêtres de Parzen : V fixé (largeur h), on compte k\n  fenêtre rectangulaire : on compte les xᵢ avec |x − xᵢ| ≤ h/2\n  fenêtre gaussienne    : chaque exemple ajoute une petite cloche\n  h trop petit → estimation pleine de pics ; h trop grand → trop lisse\nkₙ plus proches voisins : k fixé, on agrandit V jusqu’à contenir k exemples',
          en: 'Parzen windows: V fixed (width h), count k\n  rectangular window: count the xᵢ with |x − xᵢ| ≤ h/2\n  Gaussian window   : each sample adds a small bump\n  h too small → spiky estimate; h too large → too smooth\nkₙ nearest neighbors: k fixed, grow V until it holds k samples',
          tr: 'Parzen pencereleri: V sabit (genişlik h), k sayılır\n  dikdörtgen pencere: |x − xᵢ| ≤ h/2 olan xᵢ’ler sayılır\n  Gauss penceresi   : her örnek küçük bir tümsek ekler\n  h çok küçük → sivri tahmin; h çok büyük → fazla düz\nkₙ en yakın komşu: k sabit, V, k örnek içerene kadar büyütülür',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Exemples 1D : 1, 2, 3, 6 (n = 4). Avec une fenêtre rectangulaire de largeur h = 2, estime la densité en x = 2 et en x = 5.',
          en: '1D samples: 1, 2, 3, 6 (n = 4). With a rectangular window of width h = 2, estimate the density at x = 2 and at x = 5.',
          tr: '1B örnekler: 1, 2, 3, 6 (n = 4). Genişliği h = 2 olan dikdörtgen bir pencereyle x = 2 ve x = 5’teki yoğunluğu kestir.',
        },
        solution: {
          fr: 'La fenêtre couvre [x − 1, x + 1], de longueur V = 2. En x = 2 : l’intervalle [1, 3] contient 1, 2 et 3, donc k = 3 et p(2) ≈ 3 / (4 × 2) = 0,375. En x = 5 : [4, 6] contient seulement 6, donc k = 1 et p(5) ≈ 1 / 8 = 0,125. La densité est plus forte là où les exemples sont groupés.',
          en: 'The window covers [x − 1, x + 1], of length V = 2. At x = 2: the interval [1, 3] contains 1, 2 and 3, so k = 3 and p(2) ≈ 3 / (4 × 2) = 0.375. At x = 5: [4, 6] contains only 6, so k = 1 and p(5) ≈ 1 / 8 = 0.125. The density is higher where samples are grouped.',
          tr: 'Pencere uzunluğu V = 2 olan [x − 1, x + 1] aralığını kapsar. x = 2’de: [1, 3] aralığı 1, 2 ve 3’ü içerir, yani k = 3 ve p(2) ≈ 3 / (4 × 2) = 0,375. x = 5’te: [4, 6] yalnızca 6’yı içerir, yani k = 1 ve p(5) ≈ 1 / 8 = 0,125. Örneklerin toplandığı yerde yoğunluk daha yüksektir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que se passe-t-il si la largeur h de la fenêtre de Parzen est très petite ?',
        en: 'What happens if the Parzen window width h is very small?',
        tr: 'Parzen pencere genişliği h çok küçükse ne olur?',
      },
      options: {
        fr: ['L’estimation devient trop lisse', 'L’estimation devient pleine de pics', 'Rien ne change'],
        en: ['The estimate becomes too smooth', 'The estimate becomes spiky', 'Nothing changes'],
        tr: ['Tahmin fazla düzleşir', 'Tahmin sivri tepelerle dolar', 'Hiçbir şey değişmez'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Avec une fenêtre minuscule, chaque exemple forme un pic isolé : l’estimation colle aux données (variance élevée). Une fenêtre trop large efface les détails (biais élevé).',
        en: 'With a tiny window, each sample forms an isolated spike: the estimate sticks to the data (high variance). A window too wide erases the details (high bias).',
        tr: 'Çok küçük bir pencerede her örnek ayrı bir tepe oluşturur: tahmin verilere yapışır (yüksek varyans). Çok geniş bir pencere ayrıntıları siler (yüksek yanlılık).',
      },
    },
  },
  {
    id: 'pr-w10-nearest-neighbor',
    week: 10,
    title: {
      fr: 'La règle du plus proche voisin',
      en: 'The nearest neighbor rule',
      tr: 'En yakın komşu kuralı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La règle 1-NN donne à x la classe de l’exemple le plus proche. Résultat célèbre (Cover et Hart) : avec beaucoup d’exemples, son taux d’erreur P vérifie P* ≤ P ≤ 2P*, où P* est l’erreur de Bayes, la meilleure possible. La règle k-NN, avec un vote majoritaire, se rapproche de P* quand k et n grandissent.',
          en: 'The 1-NN rule gives x the class of the closest sample. Famous result (Cover and Hart): with many samples, its error rate P satisfies P* ≤ P ≤ 2P*, where P* is the Bayes error, the best possible. The k-NN rule, with a majority vote, gets closer to P* as k and n grow.',
          tr: '1-NN kuralı x’e en yakın örneğin sınıfını verir. Ünlü sonuç (Cover ve Hart): çok sayıda örnekle hata oranı P, P* ≤ P ≤ 2P* sağlar; P* mümkün olan en iyi hata, yani Bayes hatasıdır. Çoğunluk oylu k-NN kuralı, k ve n büyüdükçe P*’ye yaklaşır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Distances\nEuclidienne : √(Σ (xᵢ − yᵢ)²)\nManhattan   : Σ |xᵢ − yᵢ|\nMahalanobis : √((x − y)ᵀ Σ⁻¹ (x − y))   tient compte des variances et corrélations\n\nCoût : il faut comparer x à tous les exemples → arbres k-d, édition des\nexemples inutiles pour accélérer',
          en: 'Distances\nEuclidean   : √(Σ (xᵢ − yᵢ)²)\nManhattan   : Σ |xᵢ − yᵢ|\nMahalanobis : √((x − y)ᵀ Σ⁻¹ (x − y))   accounts for variances and correlations\n\nCost: x must be compared to every sample → k-d trees, editing out\nuseless samples to speed up',
          tr: 'Uzaklıklar\nÖklid       : √(Σ (xᵢ − yᵢ)²)\nManhattan   : Σ |xᵢ − yᵢ|\nMahalanobis : √((x − y)ᵀ Σ⁻¹ (x − y))   varyans ve ilişkileri dikkate alır\n\nMaliyet: x her örnekle karşılaştırılmalıdır → k-d ağaçları, hızlandırmak\niçin yararsız örneklerin ayıklanması',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Calcule les distances euclidienne et de Manhattan entre (1, 2) et (4, 6). (2) Si l’erreur de Bayes d’un problème vaut 5 %, entre quelles valeurs se trouve l’erreur asymptotique du 1-NN ?',
          en: '(1) Compute the Euclidean and Manhattan distances between (1, 2) and (4, 6). (2) If a problem’s Bayes error is 5%, between which values is the asymptotic 1-NN error?',
          tr: '(1) (1, 2) ile (4, 6) arasındaki Öklid ve Manhattan uzaklıklarını hesapla. (2) Bir problemin Bayes hatası %5 ise 1-NN’in asimptotik hatası hangi değerler arasındadır?',
        },
        solution: {
          fr: '(1) Écarts : 3 et 4. Euclidienne : √(9 + 16) = 5. Manhattan : 3 + 4 = 7. (2) 5 % ≤ P ≤ 10 % (borne de Cover et Hart P ≤ 2P*). Une règle aussi simple fait donc au pire deux fois plus d’erreurs que le meilleur classifieur possible, avec assez de données.',
          en: '(1) Differences: 3 and 4. Euclidean: √(9 + 16) = 5. Manhattan: 3 + 4 = 7. (2) 5% ≤ P ≤ 10% (Cover and Hart bound P ≤ 2P*). Such a simple rule makes at worst twice as many errors as the best possible classifier, given enough data.',
          tr: '(1) Farklar: 3 ve 4. Öklid: √(9 + 16) = 5. Manhattan: 3 + 4 = 7. (2) %5 ≤ P ≤ %10 (Cover ve Hart sınırı P ≤ 2P*). Bu kadar basit bir kural, yeterli veriyle en iyi olası sınıflandırıcının en fazla iki katı hata yapar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle distance tient compte des corrélations entre caractéristiques ?',
        en: 'Which distance accounts for correlations between features?',
        tr: 'Hangi uzaklık öznitelikler arasındaki ilişkileri dikkate alır?',
      },
      options: { fr: ['Euclidienne', 'Manhattan', 'Mahalanobis'], en: ['Euclidean', 'Manhattan', 'Mahalanobis'], tr: ['Öklid', 'Manhattan', 'Mahalanobis'] },
      answerIndex: 2,
      explanation: {
        fr: 'La distance de Mahalanobis utilise l’inverse de la matrice de covariance Σ : elle « redresse » les nuages de points allongés ou inclinés.',
        en: 'The Mahalanobis distance uses the inverse covariance matrix Σ: it “straightens” elongated or tilted point clouds.',
        tr: 'Mahalanobis uzaklığı kovaryans matrisi Σ’nın tersini kullanır: uzamış veya eğik nokta bulutlarını “düzeltir”.',
      },
    },
  },
  {
    id: 'pr-w11-linear-discriminants',
    week: 11,
    title: {
      fr: 'Fonctions discriminantes linéaires et perceptron',
      en: 'Linear discriminant functions and the perceptron',
      tr: 'Doğrusal ayırtaç fonksiyonları ve perceptron',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Au lieu d’estimer des densités, on peut chercher directement la frontière : g(x) = wᵀx + w₀. On choisit ω₁ si g(x) > 0, ω₂ sinon. La frontière g(x) = 0 est un hyperplan ; w est sa normale et w₀ son décalage.',
          en: 'Instead of estimating densities, the boundary can be searched directly: g(x) = wᵀx + w₀. Choose ω₁ if g(x) > 0, ω₂ otherwise. The boundary g(x) = 0 is a hyperplane; w is its normal and w₀ its offset.',
          tr: 'Yoğunlukları kestirmek yerine sınır doğrudan aranabilir: g(x) = wᵀx + w₀. g(x) > 0 ise ω₁, değilse ω₂ seçilir. g(x) = 0 sınırı bir hiperdüzlemdir; w onun normali, w₀ ise kaymasıdır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Algorithme du perceptron (étiquettes y = +1 / −1)\npour chaque exemple mal classé (y · g(x) ≤ 0) :\n    w  ← w  + η · y · x\n    w₀ ← w₀ + η · y\nConverge si les classes sont linéairement séparables ;\nsinon il ne s’arrête jamais → moindres carrés (MSE), SVM',
          en: 'Perceptron algorithm (labels y = +1 / −1)\nfor each misclassified sample (y · g(x) ≤ 0):\n    w  ← w  + η · y · x\n    w₀ ← w₀ + η · y\nConverges if the classes are linearly separable;\notherwise it never stops → least squares (MSE), SVM',
          tr: 'Perceptron algoritması (etiketler y = +1 / −1)\nyanlış sınıflandırılan her örnek için (y · g(x) ≤ 0):\n    w  ← w  + η · y · x\n    w₀ ← w₀ + η · y\nSınıflar doğrusal ayrılabilirse yakınsar;\nayrılamıyorsa hiç durmaz → en küçük kareler (MSE), SVM',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'w = (0, 0), w₀ = 0, η = 1. On présente x = (1, 2) de classe +1, puis x = (2, 0) de classe −1. Donne w et w₀ après chaque exemple.',
          en: 'w = (0, 0), w₀ = 0, η = 1. Present x = (1, 2) of class +1, then x = (2, 0) of class −1. Give w and w₀ after each sample.',
          tr: 'w = (0, 0), w₀ = 0, η = 1. Önce +1 sınıfından x = (1, 2), sonra −1 sınıfından x = (2, 0) veriliyor. Her örnekten sonra w ve w₀’ı ver.',
        },
        solution: {
          fr: 'Exemple 1 : g = 0, donc y · g = 0 ≤ 0, mal classé. w = (0, 0) + (1, 2) = (1, 2), w₀ = 1. Exemple 2 : g = 1 × 2 + 2 × 0 + 1 = 3, y · g = −3 ≤ 0, mal classé. w = (1, 2) − (2, 0) = (−1, 2), w₀ = 1 − 1 = 0. Vérification : g(1, 2) = −1 + 4 = 3 > 0 et g(2, 0) = −2 < 0, les deux sont maintenant bien classés.',
          en: 'Sample 1: g = 0, so y · g = 0 ≤ 0, misclassified. w = (0, 0) + (1, 2) = (1, 2), w₀ = 1. Sample 2: g = 1 × 2 + 2 × 0 + 1 = 3, y · g = −3 ≤ 0, misclassified. w = (1, 2) − (2, 0) = (−1, 2), w₀ = 1 − 1 = 0. Check: g(1, 2) = −1 + 4 = 3 > 0 and g(2, 0) = −2 < 0, both are now correctly classified.',
          tr: '1. örnek: g = 0, yani y · g = 0 ≤ 0, yanlış sınıflandırılmış. w = (0, 0) + (1, 2) = (1, 2), w₀ = 1. 2. örnek: g = 1 × 2 + 2 × 0 + 1 = 3, y · g = −3 ≤ 0, yanlış. w = (1, 2) − (2, 0) = (−1, 2), w₀ = 1 − 1 = 0. Kontrol: g(1, 2) = −1 + 4 = 3 > 0 ve g(2, 0) = −2 < 0, ikisi de artık doğru sınıflandırılmış.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quand l’algorithme du perceptron est-il garanti de converger ?',
        en: 'When is the perceptron algorithm guaranteed to converge?',
        tr: 'Perceptron algoritmasının yakınsaması ne zaman garantidir?',
      },
      options: {
        fr: ['Toujours', 'Si les classes sont linéairement séparables', 'Si les données sont gaussiennes'],
        en: ['Always', 'If the classes are linearly separable', 'If the data is Gaussian'],
        tr: ['Her zaman', 'Sınıflar doğrusal ayrılabilirse', 'Veriler Gauss dağılımlıysa'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'S’il existe un hyperplan qui sépare parfaitement les classes, le perceptron le trouve en un nombre fini d’étapes. Sinon, il oscille indéfiniment.',
        en: 'If some hyperplane perfectly separates the classes, the perceptron finds one in a finite number of steps. Otherwise it oscillates forever.',
        tr: 'Sınıfları kusursuz ayıran bir hiperdüzlem varsa perceptron onu sonlu adımda bulur. Yoksa sonsuza dek salınır.',
      },
    },
  },
  {
    id: 'pr-w12-fisher',
    week: 12,
    title: {
      fr: 'Discriminant de Fisher et cas multi-classes',
      en: 'Fisher’s discriminant and the multi-class case',
      tr: 'Fisher ayırtacı ve çok sınıflı durum',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le discriminant linéaire de Fisher projette les données sur une droite de direction w, choisie pour que les deux classes soient le plus séparées possible : moyennes projetées éloignées, et chaque classe resserrée autour de sa moyenne.',
          en: 'Fisher’s linear discriminant projects the data onto a line with direction w, chosen so the two classes are as separated as possible: projected means far apart, and each class tight around its mean.',
          tr: 'Fisher doğrusal ayırtacı verileri, iki sınıf mümkün olduğunca ayrı olacak şekilde seçilmiş w yönlü bir doğruya izdüşürür: izdüşen ortalamalar birbirinden uzak, her sınıf kendi ortalaması etrafında sıkı.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Critère de Fisher : J(w) = (m̃₁ − m̃₂)² / (s̃₁² + s̃₂²)\nm̃ᵢ = moyenne projetée, s̃ᵢ² = dispersion projetée de la classe i\nSolution : w ∝ S_W⁻¹ (m₁ − m₂)   (S_W = dispersion intra-classe)\n\nPlusieurs classes (c > 2) :\nun-contre-tous : c classifieurs « classe i ou le reste »\nun-contre-un   : c(c − 1)/2 classifieurs, puis vote\nmachine linéaire : c fonctions gᵢ(x), on prend la plus grande',
          en: 'Fisher criterion: J(w) = (m̃₁ − m̃₂)² / (s̃₁² + s̃₂²)\nm̃ᵢ = projected mean, s̃ᵢ² = projected scatter of class i\nSolution: w ∝ S_W⁻¹ (m₁ − m₂)   (S_W = within-class scatter)\n\nSeveral classes (c > 2):\none-vs-rest : c classifiers “class i or the rest”\none-vs-one  : c(c − 1)/2 classifiers, then a vote\nlinear machine: c functions gᵢ(x), take the largest',
          tr: 'Fisher ölçütü: J(w) = (m̃₁ − m̃₂)² / (s̃₁² + s̃₂²)\nm̃ᵢ = izdüşen ortalama, s̃ᵢ² = i sınıfının izdüşen saçılımı\nÇözüm: w ∝ S_W⁻¹ (m₁ − m₂)   (S_W = sınıf içi saçılım)\n\nBirden çok sınıf (c > 2):\nbire karşı hepsi : c sınıflandırıcı “i sınıfı veya geri kalanı”\nbire karşı bir   : c(c − 1)/2 sınıflandırıcı, sonra oylama\ndoğrusal makine  : c adet gᵢ(x) fonksiyonu, en büyüğü alınır',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Deux projections possibles. A : moyennes 2 et 8, dispersions 4 et 5. B : moyennes 3 et 6, dispersions 0,5 et 0,5. Calcule le critère de Fisher de chacune : laquelle choisir ? Combien de classifieurs faut-il en un-contre-un pour 5 classes ?',
          en: 'Two possible projections. A: means 2 and 8, scatters 4 and 5. B: means 3 and 6, scatters 0.5 and 0.5. Compute each one’s Fisher criterion: which should be chosen? How many classifiers does one-vs-one need for 5 classes?',
          tr: 'İki olası izdüşüm. A: ortalamalar 2 ve 8, saçılımlar 4 ve 5. B: ortalamalar 3 ve 6, saçılımlar 0,5 ve 0,5. Her birinin Fisher ölçütünü hesapla: hangisi seçilmeli? 5 sınıf için bire karşı bir yönteminde kaç sınıflandırıcı gerekir?',
        },
        solution: {
          fr: 'J(A) = (8 − 2)² / (4 + 5) = 36 / 9 = 4. J(B) = (6 − 3)² / (0,5 + 0,5) = 9 / 1 = 9. On choisit B : ses moyennes sont plus proches, mais les classes sont beaucoup plus serrées, donc mieux séparées. Un-contre-un avec 5 classes : 5 × 4 / 2 = 10 classifieurs.',
          en: 'J(A) = (8 − 2)² / (4 + 5) = 36 / 9 = 4. J(B) = (6 − 3)² / (0.5 + 0.5) = 9 / 1 = 9. Choose B: its means are closer, but the classes are much tighter, so better separated. One-vs-one with 5 classes: 5 × 4 / 2 = 10 classifiers.',
          tr: 'J(A) = (8 − 2)² / (4 + 5) = 36 / 9 = 4. J(B) = (6 − 3)² / (0,5 + 0,5) = 9 / 1 = 9. B seçilir: ortalamaları daha yakındır ama sınıflar çok daha sıkıdır, dolayısıyla daha iyi ayrılır. 5 sınıfla bire karşı bir: 5 × 4 / 2 = 10 sınıflandırıcı.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que maximise le critère de Fisher ?',
        en: 'What does Fisher’s criterion maximize?',
        tr: 'Fisher ölçütü neyi en büyük yapar?',
      },
      options: {
        fr: ['La variance totale des données', 'L’écart entre classes rapporté à la dispersion dans les classes', 'Le nombre de classes'],
        en: ['The total variance of the data', 'The between-class gap relative to the within-class scatter', 'The number of classes'],
        tr: ['Verilerin toplam varyansını', 'Sınıflar arası farkın sınıf içi saçılıma oranını', 'Sınıf sayısını'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Fisher veut des moyennes éloignées ET des classes compactes. Maximiser seulement la variance totale, c’est ce que fait l’ACP, qui ignore les classes.',
        en: 'Fisher wants means far apart AND compact classes. Maximizing only the total variance is what PCA does, ignoring the classes.',
        tr: 'Fisher hem birbirinden uzak ortalamalar hem de sıkı sınıflar ister. Yalnızca toplam varyansı en büyük yapmak, sınıfları yok sayan PCA’nın yaptığıdır.',
      },
    },
  },
  {
    id: 'pr-w13-clustering',
    week: 13,
    title: {
      fr: 'Apprentissage non supervisé et clustering',
      en: 'Unsupervised learning and clustering',
      tr: 'Öğreticisiz öğrenme ve kümeleme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Sans étiquettes, on cherche des groupes naturels. Le k-means minimise la somme des distances au carré entre chaque point et le centre de son groupe. Le clustering hiérarchique agglomératif part d’un groupe par point et fusionne à chaque étape les deux groupes les plus proches ; le résultat se dessine en dendrogramme.',
          en: 'Without labels, natural groups are searched. k-means minimizes the sum of squared distances between each point and its group center. Agglomerative hierarchical clustering starts with one group per point and merges the two closest groups at each step; the result is drawn as a dendrogram.',
          tr: 'Etiket yokken doğal gruplar aranır. k-means her noktayla grubunun merkezi arasındaki kare uzaklıkların toplamını en aza indirir. Birleştirici hiyerarşik kümeleme her nokta için bir grupla başlar ve her adımda en yakın iki grubu birleştirir; sonuç bir dendrogram olarak çizilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Distance entre deux groupes\nlien simple   (single)   : distance minimale entre leurs points\nlien complet  (complete) : distance maximale\nlien moyen    (average)  : distance moyenne\nWard                     : augmentation de la variance intra-groupe\n\nOn coupe le dendrogramme à la hauteur voulue pour obtenir k groupes.',
          en: 'Distance between two groups\nsingle linkage   : minimum distance between their points\ncomplete linkage : maximum distance\naverage linkage  : mean distance\nWard             : increase in within-group variance\n\nCut the dendrogram at the desired height to get k groups.',
          tr: 'İki grup arasındaki uzaklık\ntek bağlantı   (single)   : noktaları arasındaki en küçük uzaklık\ntam bağlantı   (complete) : en büyük uzaklık\nortalama bağlantı         : ortalama uzaklık\nWard                      : grup içi varyanstaki artış\n\nk grup elde etmek için dendrogram istenen yükseklikte kesilir.',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Points 1D : 1, 2, 6, 7, 15. Fais le clustering hiérarchique avec le lien simple : donne l’ordre des fusions et leur hauteur. Quels groupes obtient-on si on coupe à la hauteur 5 ?',
          en: '1D points: 1, 2, 6, 7, 15. Run hierarchical clustering with single linkage: give the order of the merges and their height. Which groups do you get when cutting at height 5?',
          tr: '1B noktalar: 1, 2, 6, 7, 15. Tek bağlantıyla hiyerarşik kümeleme yap: birleştirmelerin sırasını ve yüksekliğini ver. 5 yüksekliğinde kesilirse hangi gruplar elde edilir?',
        },
        solution: {
          fr: 'Fusion 1 : {1, 2} à la hauteur 1. Fusion 2 : {6, 7} à 1. Fusion 3 : {1, 2} et {6, 7} à 4 (6 − 2). Fusion 4 : avec {15} à 8 (15 − 7). En coupant à 5, on garde les fusions de hauteur inférieure à 5 : deux groupes, {1, 2, 6, 7} et {15}. Avec le lien complet, la fusion 3 se ferait à 6 (7 − 1).',
          en: 'Merge 1: {1, 2} at height 1. Merge 2: {6, 7} at 1. Merge 3: {1, 2} and {6, 7} at 4 (6 − 2). Merge 4: with {15} at 8 (15 − 7). Cutting at 5 keeps the merges below 5: two groups, {1, 2, 6, 7} and {15}. With complete linkage, merge 3 would happen at 6 (7 − 1).',
          tr: '1. birleştirme: 1 yüksekliğinde {1, 2}. 2. birleştirme: 1’de {6, 7}. 3. birleştirme: 4’te {1, 2} ve {6, 7} (6 − 2). 4. birleştirme: 8’de {15} ile (15 − 7). 5’te kesmek 5’in altındaki birleştirmeleri tutar: iki grup, {1, 2, 6, 7} ve {15}. Tam bağlantıyla 3. birleştirme 6’da (7 − 1) olurdu.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Avec le lien simple, comment mesure-t-on la distance entre deux groupes ?',
        en: 'With single linkage, how is the distance between two groups measured?',
        tr: 'Tek bağlantıda iki grup arasındaki uzaklık nasıl ölçülür?',
      },
      options: {
        fr: ['La plus petite distance entre leurs points', 'La plus grande distance', 'La distance entre leurs centres'],
        en: ['The smallest distance between their points', 'The largest distance', 'The distance between their centers'],
        tr: ['Noktaları arasındaki en küçük uzaklık', 'En büyük uzaklık', 'Merkezleri arasındaki uzaklık'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Le lien simple prend les deux points les plus proches. Il suit bien les formes allongées, mais peut créer des « chaînes » qui relient des groupes différents.',
        en: 'Single linkage takes the two closest points. It follows elongated shapes well, but can create “chains” linking different groups.',
        tr: 'Tek bağlantı en yakın iki noktayı alır. Uzamış şekilleri iyi izler ama farklı grupları bağlayan “zincirler” oluşturabilir.',
      },
    },
  },
  {
    id: 'pr-w14-evaluation',
    week: 14,
    title: {
      fr: 'Évaluer un classifieur et révision du final',
      en: 'Evaluating a classifier and final review',
      tr: 'Sınıflandırıcı değerlendirme ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un classifieur s’évalue sur des données qu’il n’a pas vues : ensemble de test séparé ou validation croisée. La matrice de confusion donne les vrais et faux positifs et négatifs. La courbe ROC trace le taux de vrais positifs (TPR) en fonction du taux de faux positifs (FPR) quand on fait varier le seuil ; l’aire sous la courbe (AUC) résume la qualité : 1 = parfait, 0,5 = hasard.',
          en: 'A classifier is evaluated on data it has not seen: a separate test set or cross-validation. The confusion matrix gives true and false positives and negatives. The ROC curve plots the true positive rate (TPR) against the false positive rate (FPR) as the threshold varies; the area under the curve (AUC) sums up quality: 1 = perfect, 0.5 = chance.',
          tr: 'Bir sınıflandırıcı görmediği veriler üzerinde değerlendirilir: ayrı bir test kümesi veya çapraz doğrulama. Karışıklık matrisi doğru ve yanlış pozitifleri ve negatifleri verir. ROC eğrisi, eşik değiştikçe doğru pozitif oranını (TPR) yanlış pozitif oranına (FPR) göre çizer; eğri altındaki alan (AUC) kaliteyi özetler: 1 = kusursuz, 0,5 = şans.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'TPR (rappel, sensibilité) = TP / (TP + FN)\nFPR = FP / (FP + TN)          spécificité = 1 − FPR\n\nApplications : reconnaissance de caractères (OCR), de la parole,\nde visages, d’empreintes, diagnostic médical, détection de fraude',
          en: 'TPR (recall, sensitivity) = TP / (TP + FN)\nFPR = FP / (FP + TN)          specificity = 1 − FPR\n\nApplications: character recognition (OCR), speech, faces,\nfingerprints, medical diagnosis, fraud detection',
          tr: 'TPR (duyarlılık) = TP / (TP + FN)\nFPR = FP / (FP + TN)          özgüllük = 1 − FPR\n\nUygulamalar: karakter tanıma (OCR), konuşma, yüz,\nparmak izi tanıma, tıbbi teşhis, dolandırıcılık tespiti',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Chaînes de Markov, HMM, forward, Viterbi, Baum-Welch\n✔ Parzen, kₙ plus proches voisins, choix de h\n✔ Règle 1-NN / k-NN, borne P ≤ 2P*, distances\n✔ g(x) = wᵀx + w₀, algorithme du perceptron\n✔ Critère de Fisher, un-contre-tous / un-contre-un\n✔ k-means, clustering hiérarchique, liens, dendrogramme\n✔ Matrice de confusion, TPR, FPR, ROC, AUC',
          en: '✔ Markov chains, HMM, forward, Viterbi, Baum-Welch\n✔ Parzen, kₙ nearest neighbors, choosing h\n✔ 1-NN / k-NN rule, bound P ≤ 2P*, distances\n✔ g(x) = wᵀx + w₀, perceptron algorithm\n✔ Fisher criterion, one-vs-rest / one-vs-one\n✔ k-means, hierarchical clustering, linkages, dendrogram\n✔ Confusion matrix, TPR, FPR, ROC, AUC',
          tr: '✔ Markov zincirleri, HMM, ileri algoritma, Viterbi, Baum-Welch\n✔ Parzen, kₙ en yakın komşu, h seçimi\n✔ 1-NN / k-NN kuralı, P ≤ 2P* sınırı, uzaklıklar\n✔ g(x) = wᵀx + w₀, perceptron algoritması\n✔ Fisher ölçütü, bire karşı hepsi / bire karşı bir\n✔ k-means, hiyerarşik kümeleme, bağlantılar, dendrogram\n✔ Karışıklık matrisi, TPR, FPR, ROC, AUC',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pour un seuil donné : TP = 45, FN = 5, FP = 10, TN = 40. Calcule TPR, FPR et la spécificité. Si on baisse le seuil, comment évoluent TPR et FPR ?',
          en: 'For a given threshold: TP = 45, FN = 5, FP = 10, TN = 40. Compute the TPR, the FPR and the specificity. If the threshold is lowered, how do TPR and FPR change?',
          tr: 'Belirli bir eşik için: TP = 45, FN = 5, FP = 10, TN = 40. TPR, FPR ve özgüllüğü hesapla. Eşik düşürülürse TPR ve FPR nasıl değişir?',
        },
        solution: {
          fr: 'TPR = 45 / 50 = 0,9. FPR = 10 / 50 = 0,2. Spécificité = 0,8. En baissant le seuil, on dit « positif » plus souvent : on rattrape des vrais positifs (TPR augmente), mais on crée plus de fausses alertes (FPR augmente aussi). On monte le long de la courbe ROC.',
          en: 'TPR = 45 / 50 = 0.9. FPR = 10 / 50 = 0.2. Specificity = 0.8. Lowering the threshold says “positive” more often: more true positives are caught (TPR goes up), but more false alarms appear (FPR goes up too). We move up along the ROC curve.',
          tr: 'TPR = 45 / 50 = 0,9. FPR = 10 / 50 = 0,2. Özgüllük = 0,8. Eşik düşürülünce daha sık “pozitif” denir: daha fazla doğru pozitif yakalanır (TPR artar), ama daha fazla yanlış alarm olur (FPR de artar). ROC eğrisi boyunca yukarı çıkılır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Que signifie une AUC de 0,5 ?',
        en: 'What does an AUC of 0.5 mean?',
        tr: '0,5’lik bir AUC ne anlama gelir?',
      },
      options: {
        fr: ['Un classifieur parfait', 'Un classifieur qui ne fait pas mieux que le hasard', 'Une erreur de 50 % exactement sur chaque classe'],
        en: ['A perfect classifier', 'A classifier no better than chance', 'Exactly 50% error on every class'],
        tr: ['Kusursuz bir sınıflandırıcı', 'Şanstan daha iyi olmayan bir sınıflandırıcı', 'Her sınıfta tam olarak %50 hata'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Une AUC de 0,5 correspond à la diagonale de la courbe ROC : le classifieur ne sépare pas mieux les classes qu’un tirage au hasard.',
        en: 'An AUC of 0.5 matches the ROC curve’s diagonal: the classifier separates the classes no better than random guessing.',
        tr: '0,5’lik AUC, ROC eğrisinin köşegenine karşılık gelir: sınıflandırıcı sınıfları rastgele tahminden daha iyi ayırmaz.',
      },
    },
  },
];
