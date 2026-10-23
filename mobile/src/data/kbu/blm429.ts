/**
 * BLM429 Görüntü İşlemeye Giriş (Introduction to Image Processing), 14 weeks following the KBU course
 * contents, in the order of Gonzalez & Woods, "Digital Image Processing".
 * Weeks 1–7 prepare the midterm, weeks 8–14 the final.
 */

import type { LessonSource } from '@/data/lessons';

export const blm429Lessons: LessonSource[] = [
  {
    id: 'ip-w01-fundamentals',
    week: 1,
    title: {
      fr: 'L’image numérique',
      en: 'The digital image',
      tr: 'Sayısal görüntü',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une image numérique est une fonction f(x, y) échantillonnée sur une grille de M × N pixels, et quantifiée sur L niveaux d’intensité. Avec k bits par pixel, L = 2ᵏ : 8 bits donnent 256 niveaux de gris, de 0 (noir) à 255 (blanc).',
          en: 'A digital image is a function f(x, y) sampled on a grid of M × N pixels and quantized to L intensity levels. With k bits per pixel, L = 2ᵏ: 8 bits give 256 gray levels, from 0 (black) to 255 (white).',
          tr: 'Sayısal görüntü, M × N piksellik bir ızgarada örneklenmiş ve L yoğunluk seviyesine nicemlenmiş bir f(x, y) fonksiyonudur. Piksel başına k bitle L = 2ᵏ olur: 8 bit, 0 (siyah) ile 255 (beyaz) arasında 256 gri seviye verir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Échantillonnage : nombre de pixels → résolution spatiale\nQuantification  : nombre de niveaux → résolution en intensité\nTaille en bits  = M × N × k\nImage couleur RGB : 3 canaux de 8 bits = 24 bits par pixel\n\nVoisinages d’un pixel : N4 (haut, bas, gauche, droite), N8 (+ diagonales)',
          en: 'Sampling     : number of pixels → spatial resolution\nQuantization : number of levels → intensity resolution\nSize in bits = M × N × k\nRGB color image: 3 channels of 8 bits = 24 bits per pixel\n\nPixel neighborhoods: N4 (up, down, left, right), N8 (+ diagonals)',
          tr: 'Örnekleme  : piksel sayısı → uzamsal çözünürlük\nNicemleme  : seviye sayısı → yoğunluk çözünürlüğü\nBit cinsinden boyut = M × N × k\nRGB renkli görüntü: 8 bitlik 3 kanal = piksel başına 24 bit\n\nPiksel komşulukları: N4 (yukarı, aşağı, sol, sağ), N8 (+ köşegenler)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quelle place prend une image de 1024 × 768 pixels (1) en niveaux de gris sur 8 bits ? (2) en couleur RGB 24 bits ? (3) Combien de niveaux de gris avec 4 bits par pixel ?',
          en: 'How much space does a 1024 × 768 image take (1) in 8-bit grayscale? (2) in 24-bit RGB color? (3) How many gray levels with 4 bits per pixel?',
          tr: '1024 × 768 piksellik bir görüntü (1) 8 bit gri tonlamada (2) 24 bit RGB renkte ne kadar yer kaplar? (3) Piksel başına 4 bitle kaç gri seviye olur?',
        },
        solution: {
          fr: '(1) 1024 × 768 × 1 octet = 786 432 octets = 768 Ko. (2) Trois fois plus : 2 359 296 octets = 2,25 Mo (sans compression). (3) 2⁴ = 16 niveaux : avec si peu de niveaux, on voit apparaître de faux contours dans les zones dégradées.',
          en: '(1) 1024 × 768 × 1 byte = 786,432 bytes = 768 KB. (2) Three times more: 2,359,296 bytes = 2.25 MB (uncompressed). (3) 2⁴ = 16 levels: with so few levels, false contours appear in smooth gradients.',
          tr: '(1) 1024 × 768 × 1 bayt = 786.432 bayt = 768 KB. (2) Üç katı: 2.359.296 bayt = 2,25 MB (sıkıştırmasız). (3) 2⁴ = 16 seviye: bu kadar az seviyeyle yumuşak geçişlerde sahte konturlar görünür.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Combien de niveaux de gris peut-on coder avec 8 bits par pixel ?',
        en: 'How many gray levels can be coded with 8 bits per pixel?',
        tr: 'Piksel başına 8 bitle kaç gri seviye kodlanabilir?',
      },
      options: { fr: ['8', '255', '256'], en: ['8', '255', '256'], tr: ['8', '255', '256'] },
      answerIndex: 2,
      explanation: {
        fr: '2⁸ = 256 niveaux, numérotés de 0 à 255. Piège classique : 255 est la valeur maximale, pas le nombre de niveaux.',
        en: '2⁸ = 256 levels, numbered from 0 to 255. Classic trap: 255 is the maximum value, not the number of levels.',
        tr: '2⁸ = 256 seviye, 0’dan 255’e numaralanır. Klasik tuzak: 255 en büyük değerdir, seviye sayısı değildir.',
      },
    },
  },
  {
    id: 'ip-w02-intensity',
    week: 2,
    title: {
      fr: 'Transformations d’intensité',
      en: 'Intensity transformations',
      tr: 'Yoğunluk dönüşümleri',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Une transformation ponctuelle s = T(r) change chaque niveau r en un niveau s, pixel par pixel, sans regarder les voisins. Elle sert à améliorer le contraste ou à faire ressortir certains détails.',
          en: 'A point transformation s = T(r) maps each level r to a level s, pixel by pixel, without looking at the neighbors. It is used to improve contrast or bring out certain details.',
          tr: 'Nokta dönüşümü s = T(r), komşulara bakmadan her r seviyesini piksel piksel bir s seviyesine dönüştürür. Karşıtlığı iyileştirmek veya bazı ayrıntıları öne çıkarmak için kullanılır.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Négatif      : s = (L − 1) − r\nLogarithme   : s = c log(1 + r)        éclaircit les zones sombres\nPuissance    : s = c r^γ  (r entre 0 et 1)\n               γ < 1 éclaircit, γ > 1 assombrit (correction gamma)\nÉtirement du contraste : étale [r_min, r_max] sur [0, L − 1]\nSeuillage    : s = L − 1 si r ≥ T, sinon 0',
          en: 'Negative     : s = (L − 1) − r\nLog          : s = c log(1 + r)        brightens dark areas\nPower-law    : s = c r^γ  (r between 0 and 1)\n               γ < 1 brightens, γ > 1 darkens (gamma correction)\nContrast stretching: spreads [r_min, r_max] over [0, L − 1]\nThresholding : s = L − 1 if r ≥ T, otherwise 0',
          tr: 'Negatif      : s = (L − 1) − r\nLogaritma    : s = c log(1 + r)        koyu bölgeleri aydınlatır\nKuvvet       : s = c r^γ  (r, 0 ile 1 arası)\n               γ < 1 aydınlatır, γ > 1 karartır (gama düzeltmesi)\nKarşıtlık germe: [r_min, r_max] aralığını [0, L − 1]’e yayar\nEşikleme     : r ≥ T ise s = L − 1, değilse 0',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Image 8 bits. (1) Quel est le négatif d’un pixel de valeur 50 ? (2) Avec c = 1 et γ = 0,5, que devient un pixel normalisé r = 0,25 ? (3) Une image n’utilise que les niveaux 50 à 100 : quelle transformation linéaire l’étire sur 0 à 255 ?',
          en: '8-bit image. (1) What is the negative of a pixel valued 50? (2) With c = 1 and γ = 0.5, what does a normalized pixel r = 0.25 become? (3) An image only uses levels 50 to 100: which linear transformation stretches it to 0 to 255?',
          tr: '8 bitlik görüntü. (1) 50 değerli bir pikselin negatifi nedir? (2) c = 1 ve γ = 0,5 ile normalleştirilmiş r = 0,25 pikseli ne olur? (3) Bir görüntü yalnızca 50-100 seviyelerini kullanıyor: onu 0-255’e geren doğrusal dönüşüm nedir?',
        },
        solution: {
          fr: '(1) s = 255 − 50 = 205. (2) s = 0,25^0,5 = 0,5 : le pixel devient deux fois plus clair (en valeur normalisée), γ < 1 éclaircit. (3) s = (r − 50) × 255 / (100 − 50) = (r − 50) × 5,1. Ainsi 50 → 0, 75 → 127,5 et 100 → 255.',
          en: '(1) s = 255 − 50 = 205. (2) s = 0.25^0.5 = 0.5: the pixel becomes twice as bright (in normalized value), γ < 1 brightens. (3) s = (r − 50) × 255 / (100 − 50) = (r − 50) × 5.1. So 50 → 0, 75 → 127.5 and 100 → 255.',
          tr: '(1) s = 255 − 50 = 205. (2) s = 0,25^0,5 = 0,5: piksel (normalleştirilmiş değerde) iki kat parlak olur, γ < 1 aydınlatır. (3) s = (r − 50) × 255 / (100 − 50) = (r − 50) × 5,1. Böylece 50 → 0, 75 → 127,5 ve 100 → 255.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle valeur de γ éclaircit une image dans la transformation s = r^γ ?',
        en: 'Which value of γ brightens an image in the transformation s = r^γ?',
        tr: 's = r^γ dönüşümünde γ’nin hangi değeri görüntüyü aydınlatır?',
      },
      options: { fr: ['γ < 1', 'γ = 1', 'γ > 1'], en: ['γ < 1', 'γ = 1', 'γ > 1'], tr: ['γ < 1', 'γ = 1', 'γ > 1'] },
      answerIndex: 0,
      explanation: {
        fr: 'Pour r entre 0 et 1, r^γ > r quand γ < 1 : les niveaux montent, surtout les sombres. γ = 1 ne change rien, γ > 1 assombrit.',
        en: 'For r between 0 and 1, r^γ > r when γ < 1: levels go up, especially the dark ones. γ = 1 changes nothing, γ > 1 darkens.',
        tr: 'r, 0 ile 1 arasındayken γ < 1 ise r^γ > r olur: seviyeler, özellikle koyular, yükselir. γ = 1 hiçbir şey değiştirmez, γ > 1 karartır.',
      },
    },
  },
  {
    id: 'ip-w03-histogram',
    week: 3,
    title: {
      fr: 'Histogramme et égalisation',
      en: 'Histogram and equalization',
      tr: 'Histogram ve eşitleme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’histogramme compte combien de pixels ont chaque niveau. Une image sombre a un histogramme tassé à gauche, une image peu contrastée un histogramme étroit. L’égalisation répartit les niveaux sur toute la plage pour augmenter le contraste.',
          en: 'The histogram counts how many pixels have each level. A dark image has a histogram packed on the left, a low-contrast image a narrow histogram. Equalization spreads the levels over the whole range to increase contrast.',
          tr: 'Histogram, her seviyede kaç piksel olduğunu sayar. Koyu bir görüntünün histogramı sola yığılır, düşük karşıtlıklı bir görüntününki dardır. Eşitleme, karşıtlığı artırmak için seviyeleri tüm aralığa yayar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Égalisation : sₖ = round( (L − 1) × Σ_{j ≤ k} nⱼ / (M × N) )\n             (L − 1) × fonction de répartition cumulée\n\nExemple (Gonzalez) : image 64 × 64 = 4096 pixels, L = 8\nr :   0     1     2    3    4    5    6   7\nn :  790  1023  850  656  329  245  122  81',
          en: 'Equalization: sₖ = round( (L − 1) × Σ_{j ≤ k} nⱼ / (M × N) )\n              (L − 1) × cumulative distribution function\n\nExample (Gonzalez): 64 × 64 image = 4096 pixels, L = 8\nr :   0     1     2    3    4    5    6   7\nn :  790  1023  850  656  329  245  122  81',
          tr: 'Eşitleme: sₖ = round( (L − 1) × Σ_{j ≤ k} nⱼ / (M × N) )\n          (L − 1) × birikimli dağılım fonksiyonu\n\nÖrnek (Gonzalez): 64 × 64 görüntü = 4096 piksel, L = 8\nr :   0     1     2    3    4    5    6   7\nn :  790  1023  850  656  329  245  122  81',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Égalise l’histogramme de l’exemple ci-dessus : donne la valeur sₖ de chaque niveau r = 0 à 7.',
          en: 'Equalize the histogram of the example above: give the value sₖ of each level r = 0 to 7.',
          tr: 'Yukarıdaki örneğin histogramını eşitle: r = 0’dan 7’ye her seviyenin sₖ değerini ver.',
        },
        solution: {
          fr: 'Cumul / 4096 : 0,19 ; 0,44 ; 0,65 ; 0,81 ; 0,89 ; 0,95 ; 0,98 ; 1,00. Multiplié par 7 : 1,33 ; 3,08 ; 4,55 ; 5,67 ; 6,23 ; 6,65 ; 6,86 ; 7,00. Arrondi : s = 1, 3, 5, 6, 6, 7, 7, 7. Les niveaux sombres très peuplés sont écartés, les niveaux clairs rares sont regroupés : le contraste augmente.',
          en: 'Cumulative / 4096: 0.19; 0.44; 0.65; 0.81; 0.89; 0.95; 0.98; 1.00. Times 7: 1.33; 3.08; 4.55; 5.67; 6.23; 6.65; 6.86; 7.00. Rounded: s = 1, 3, 5, 6, 6, 7, 7, 7. The crowded dark levels are spread apart, the rare bright levels are merged: contrast increases.',
          tr: 'Birikimli / 4096: 0,19; 0,44; 0,65; 0,81; 0,89; 0,95; 0,98; 1,00. 7 ile çarpılınca: 1,33; 3,08; 4,55; 5,67; 6,23; 6,65; 6,86; 7,00. Yuvarlanınca: s = 1, 3, 5, 6, 6, 7, 7, 7. Kalabalık koyu seviyeler birbirinden ayrılır, nadir açık seviyeler birleşir: karşıtlık artar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'À quoi ressemble l’histogramme d’une image surexposée (trop claire) ?',
        en: 'What does the histogram of an overexposed (too bright) image look like?',
        tr: 'Aşırı pozlanmış (çok açık) bir görüntünün histogramı nasıl görünür?',
      },
      options: {
        fr: ['Tassé à gauche', 'Tassé à droite', 'Parfaitement plat'],
        en: ['Packed on the left', 'Packed on the right', 'Perfectly flat'],
        tr: ['Sola yığılmış', 'Sağa yığılmış', 'Tamamen düz'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Les niveaux élevés (clairs) sont à droite : une image trop claire a ses pixels concentrés vers 255.',
        en: 'High (bright) levels are on the right: a too-bright image has its pixels concentrated near 255.',
        tr: 'Yüksek (açık) seviyeler sağdadır: çok açık bir görüntünün pikselleri 255 civarında toplanır.',
      },
    },
  },
  {
    id: 'ip-w04-spatial-filtering',
    week: 4,
    title: { fr: 'Filtrage spatial', en: 'Spatial filtering', tr: 'Uzamsal süzgeçleme' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Un filtre spatial fait glisser un masque (noyau) sur l’image : le nouveau pixel est calculé à partir de son voisinage. Les filtres linéaires font une somme pondérée (corrélation ou convolution) ; les filtres non linéaires, comme la médiane, trient les valeurs.',
          en: 'A spatial filter slides a mask (kernel) over the image: the new pixel is computed from its neighborhood. Linear filters take a weighted sum (correlation or convolution); non-linear filters, like the median, sort the values.',
          tr: 'Uzamsal süzgeç görüntü üzerinde bir maskeyi (çekirdek) kaydırır: yeni piksel komşuluğundan hesaplanır. Doğrusal süzgeçler ağırlıklı toplam alır (korelasyon veya evrişim); medyan gibi doğrusal olmayan süzgeçler değerleri sıralar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Lissage (passe-bas)  : moyenne 3 × 3 (1/9 partout), gaussien\nMédiane              : excellente contre le bruit « sel et poivre »\nRehaussement (passe-haut) :\n  Laplacien  [ 0  1  0 ]\n             [ 1 −4  1 ]      g = f − ∇²f accentue les détails\n             [ 0  1  0 ]\n  Sobel (gradient horizontal) [−1 0 1; −2 0 2; −1 0 1] → contours',
          en: 'Smoothing (low-pass) : 3 × 3 mean (1/9 everywhere), Gaussian\nMedian               : excellent against “salt and pepper” noise\nSharpening (high-pass):\n  Laplacian  [ 0  1  0 ]\n             [ 1 −4  1 ]      g = f − ∇²f enhances details\n             [ 0  1  0 ]\n  Sobel (horizontal gradient) [−1 0 1; −2 0 2; −1 0 1] → edges',
          tr: 'Yumuşatma (alçak geçiren): 3 × 3 ortalama (her yer 1/9), Gauss\nMedyan               : “tuz ve biber” gürültüsüne karşı çok iyi\nKeskinleştirme (yüksek geçiren):\n  Laplasyen  [ 0  1  0 ]\n             [ 1 −4  1 ]      g = f − ∇²f ayrıntıları vurgular\n             [ 0  1  0 ]\n  Sobel (yatay gradyan) [−1 0 1; −2 0 2; −1 0 1] → kenarlar',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un voisinage 3 × 3 contient : 10, 12, 11, 13, 255, 12, 11, 10, 12 (le 255 est un pixel « sel » au centre). Calcule le résultat du filtre moyenne et du filtre médiane. Lequel est le meilleur ici ?',
          en: 'A 3 × 3 neighborhood contains: 10, 12, 11, 13, 255, 12, 11, 10, 12 (the 255 is a “salt” pixel in the center). Compute the mean filter and median filter results. Which one is better here?',
          tr: 'Bir 3 × 3 komşuluk şunları içeriyor: 10, 12, 11, 13, 255, 12, 11, 10, 12 (merkezdeki 255 bir “tuz” pikseli). Ortalama ve medyan süzgeçlerinin sonucunu hesapla. Burada hangisi daha iyidir?',
        },
        solution: {
          fr: 'Moyenne : 346 / 9 ≈ 38,4, le pixel reste très faux. Médiane : valeurs triées 10, 10, 11, 11, 12, 12, 12, 13, 255, la 5e est 12. La médiane élimine complètement le bruit impulsionnel sans flouter les contours, alors que la moyenne étale l’erreur sur les voisins.',
          en: 'Mean: 346 / 9 ≈ 38.4, the pixel stays very wrong. Median: sorted values 10, 10, 11, 11, 12, 12, 12, 13, 255, the 5th is 12. The median removes the impulse noise completely without blurring edges, while the mean spreads the error to the neighbors.',
          tr: 'Ortalama: 346 / 9 ≈ 38,4, piksel hâlâ çok yanlış. Medyan: sıralı değerler 10, 10, 11, 11, 12, 12, 12, 13, 255; 5.’si 12. Medyan dürtü gürültüsünü kenarları bulanıklaştırmadan tamamen giderir, ortalama ise hatayı komşulara yayar.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel filtre fait ressortir les contours et les détails fins ?',
        en: 'Which filter brings out edges and fine details?',
        tr: 'Hangi süzgeç kenarları ve ince ayrıntıları öne çıkarır?',
      },
      options: {
        fr: ['La moyenne 3 × 3', 'Le Laplacien', 'Le flou gaussien'],
        en: ['The 3 × 3 mean', 'The Laplacian', 'The Gaussian blur'],
        tr: ['3 × 3 ortalama', 'Laplasyen', 'Gauss bulanıklığı'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Le Laplacien est une dérivée seconde : il réagit aux changements brusques d’intensité (passe-haut). La moyenne et le gaussien sont des passe-bas qui lissent.',
        en: 'The Laplacian is a second derivative: it reacts to sharp intensity changes (high-pass). The mean and Gaussian are low-pass filters that smooth.',
        tr: 'Laplasyen ikinci türevdir: ani yoğunluk değişimlerine tepki verir (yüksek geçiren). Ortalama ve Gauss yumuşatan alçak geçiren süzgeçlerdir.',
      },
    },
  },
  {
    id: 'ip-w05-frequency',
    week: 5,
    title: {
      fr: 'Amélioration dans le domaine fréquentiel',
      en: 'Enhancement in the frequency domain',
      tr: 'Frekans ortamında iyileştirme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La transformée de Fourier 2D (DFT) décompose l’image en fréquences : les basses fréquences décrivent les zones lisses, les hautes fréquences les contours, les détails et le bruit. Théorème de convolution : filtrer dans l’espace (convolution) revient à multiplier dans le domaine fréquentiel.',
          en: 'The 2D Fourier transform (DFT) breaks the image into frequencies: low frequencies describe smooth areas, high frequencies edges, details and noise. Convolution theorem: filtering in space (convolution) equals multiplying in the frequency domain.',
          tr: '2B Fourier dönüşümü (DFT) görüntüyü frekanslarına ayırır: düşük frekanslar düzgün bölgeleri, yüksek frekanslar kenarları, ayrıntıları ve gürültüyü tanımlar. Evrişim teoremi: uzayda süzgeçlemek (evrişim), frekans ortamında çarpmaya eşittir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Démarche : F = DFT(f) → G = H × F → g = DFT⁻¹(G)\n\nPasse-bas  (garde le centre du spectre) → flou, lissage\nPasse-haut (garde le bord du spectre)   → contours, netteté\nIdéal       : coupure brutale à D₀ → effet d’anneaux (ringing)\nButterworth : transition douce, réglée par l’ordre n\nGaussien    : aucune oscillation, pas d’anneaux',
          en: 'Approach: F = DFT(f) → G = H × F → g = DFT⁻¹(G)\n\nLow-pass  (keeps the spectrum’s center) → blur, smoothing\nHigh-pass (keeps the spectrum’s edge)   → edges, sharpness\nIdeal       : sharp cutoff at D₀ → ringing\nButterworth : smooth transition, set by the order n\nGaussian    : no oscillation, no ringing',
          tr: 'Yöntem: F = DFT(f) → G = H × F → g = DFT⁻¹(G)\n\nAlçak geçiren (spektrumun merkezini tutar) → bulanıklık, yumuşatma\nYüksek geçiren (spektrumun kenarını tutar) → kenarlar, keskinlik\nİdeal       : D₀’da keskin kesim → halkalanma (ringing)\nButterworth : n derecesiyle ayarlanan yumuşak geçiş\nGauss       : salınım yok, halkalanma yok',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quel filtre fréquentiel choisir ? (1) Réduire le bruit fin sans créer d’anneaux. (2) Faire ressortir les contours d’une radiographie. (3) Pourquoi un passe-bas idéal crée-t-il des anneaux autour des contours ?',
          en: 'Which frequency filter should be used? (1) Reduce fine noise without ringing. (2) Bring out the edges in an X-ray. (3) Why does an ideal low-pass filter create rings around edges?',
          tr: 'Hangi frekans süzgeci seçilmeli? (1) Halkalanma olmadan ince gürültüyü azaltmak. (2) Bir röntgendeki kenarları öne çıkarmak. (3) İdeal alçak geçiren süzgeç kenarların çevresinde neden halkalar oluşturur?',
        },
        solution: {
          fr: '(1) Un passe-bas gaussien (ou Butterworth d’ordre faible). (2) Un passe-haut, gaussien ou Butterworth, souvent ajouté à l’image d’origine (high-boost) pour garder les zones lisses. (3) Une coupure brutale dans le domaine fréquentiel correspond, dans l’espace, à une fonction sinc qui oscille : ses oscillations apparaissent comme des anneaux.',
          en: '(1) A Gaussian low-pass (or a low-order Butterworth). (2) A high-pass, Gaussian or Butterworth, often added to the original image (high-boost) to keep the smooth areas. (3) A sharp cutoff in the frequency domain corresponds, in space, to a sinc function that oscillates: its oscillations show up as rings.',
          tr: '(1) Gauss alçak geçiren (veya düşük dereceli Butterworth). (2) Düzgün bölgeleri korumak için çoğu zaman özgün görüntüye eklenen (high-boost) Gauss veya Butterworth yüksek geçiren. (3) Frekans ortamındaki keskin bir kesim uzayda salınan bir sinc fonksiyonuna karşılık gelir: salınımları halkalar olarak görünür.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans le spectre d’une image, où se trouvent surtout les informations de contours et de bruit ?',
        en: 'In an image’s spectrum, where is most of the edge and noise information?',
        tr: 'Bir görüntünün spektrumunda kenar ve gürültü bilgisi daha çok nerededir?',
      },
      options: {
        fr: ['Dans les basses fréquences', 'Dans les hautes fréquences', 'Uniquement à la fréquence zéro'],
        en: ['In the low frequencies', 'In the high frequencies', 'Only at zero frequency'],
        tr: ['Düşük frekanslarda', 'Yüksek frekanslarda', 'Yalnızca sıfır frekansta'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Les changements rapides d’intensité (contours, bruit) sont des hautes fréquences. La fréquence zéro correspond à la luminosité moyenne de l’image.',
        en: 'Fast intensity changes (edges, noise) are high frequencies. Zero frequency matches the image’s average brightness.',
        tr: 'Hızlı yoğunluk değişimleri (kenarlar, gürültü) yüksek frekanslardır. Sıfır frekans görüntünün ortalama parlaklığına karşılık gelir.',
      },
    },
  },
  {
    id: 'ip-w06-restoration',
    week: 6,
    title: { fr: 'Restauration d’images', en: 'Image restoration', tr: 'Görüntü onarımı' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'L’amélioration rend l’image plus agréable ; la restauration cherche à retrouver l’image d’origine à partir d’un modèle de dégradation : g(x, y) = h(x, y) ∗ f(x, y) + η(x, y), où h est la dégradation (flou de bougé, de mise au point) et η le bruit.',
          en: 'Enhancement makes an image more pleasing; restoration tries to recover the original image from a degradation model: g(x, y) = h(x, y) ∗ f(x, y) + η(x, y), where h is the degradation (motion blur, defocus) and η the noise.',
          tr: 'İyileştirme görüntüyü daha hoş yapar; onarım ise bir bozulma modelinden özgün görüntüyü geri elde etmeye çalışır: g(x, y) = h(x, y) ∗ f(x, y) + η(x, y); h bozulma (hareket, odak bulanıklığı), η gürültüdür.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Bruits            → filtre conseillé\nGaussien          → moyenne arithmétique ou géométrique, gaussien\nSel et poivre     → médiane\nSel seulement     → minimum      Poivre seulement → maximum\nPériodique        → filtre coupe-bande dans le domaine fréquentiel\n\nFlou connu (h) : filtre inverse F = G / H (explose avec le bruit)\n                 filtre de Wiener (tient compte du bruit)',
          en: 'Noise              → suggested filter\nGaussian           → arithmetic or geometric mean, Gaussian\nSalt and pepper    → median\nSalt only          → minimum      Pepper only → maximum\nPeriodic           → band-reject filter in the frequency domain\n\nKnown blur (h): inverse filter F = G / H (blows up with noise)\n                Wiener filter (accounts for noise)',
          tr: 'Gürültü           → önerilen süzgeç\nGauss             → aritmetik veya geometrik ortalama, Gauss\nTuz ve biber      → medyan\nYalnızca tuz      → minimum      Yalnızca biber → maksimum\nPeriyodik         → frekans ortamında bant durduran süzgeç\n\nBilinen bulanıklık (h): ters süzgeç F = G / H (gürültüyle patlar)\n                        Wiener süzgeci (gürültüyü hesaba katar)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Pourquoi le filtre minimum convient-il au bruit « sel » (pixels blancs isolés) et pas au bruit « poivre » ? Et pourquoi le filtre inverse donne-t-il souvent un résultat catastrophique ?',
          en: 'Why does the minimum filter suit “salt” noise (isolated white pixels) but not “pepper” noise? And why does the inverse filter often give a disastrous result?',
          tr: 'Minimum süzgeç neden “tuz” gürültüsüne (yalıtılmış beyaz pikseller) uygundur da “biber” gürültüsüne uygun değildir? Ters süzgeç neden çoğu zaman felaket bir sonuç verir?',
        },
        solution: {
          fr: 'Un pixel « sel » vaut 255 : le minimum du voisinage ne le choisit jamais, il disparaît. Un pixel « poivre » vaut 0 : le minimum le choisirait et l’étendrait ; c’est le maximum qui le supprime. Le filtre inverse divise par H(u, v) : là où H est presque nul (hautes fréquences d’un flou), il divise aussi le bruit par presque zéro, ce qui l’amplifie énormément. Wiener évite ce problème.',
          en: 'A “salt” pixel is 255: the neighborhood minimum never picks it, so it disappears. A “pepper” pixel is 0: the minimum would pick and spread it; the maximum removes it. The inverse filter divides by H(u, v): where H is almost zero (high frequencies of a blur), it also divides the noise by almost zero, amplifying it hugely. Wiener avoids this.',
          tr: '“Tuz” pikseli 255’tir: komşuluk minimumu onu asla seçmez, kaybolur. “Biber” pikseli 0’dır: minimum onu seçip yayardı; onu maksimum giderir. Ters süzgeç H(u, v) ile böler: H’nin neredeyse sıfır olduğu yerlerde (bulanıklığın yüksek frekansları) gürültüyü de neredeyse sıfıra böler ve onu çok büyütür. Wiener bu sorunu önler.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel filtre est le plus adapté au bruit « sel et poivre » ?',
        en: 'Which filter best suits “salt and pepper” noise?',
        tr: '“Tuz ve biber” gürültüsüne en uygun süzgeç hangisidir?',
      },
      options: {
        fr: ['La moyenne arithmétique', 'La médiane', 'Le passe-haut'],
        en: ['The arithmetic mean', 'The median', 'The high-pass filter'],
        tr: ['Aritmetik ortalama', 'Medyan', 'Yüksek geçiren'],
      },
      answerIndex: 1,
      explanation: {
        fr: 'Les pixels 0 et 255 sont des valeurs extrêmes : le tri de la médiane les met aux bords et ne les choisit pas.',
        en: 'Pixels at 0 and 255 are extreme values: the median’s sorting puts them at the ends and never picks them.',
        tr: '0 ve 255 pikselleri uç değerlerdir: medyanın sıralaması onları uçlara koyar ve seçmez.',
      },
    },
  },
  {
    id: 'ip-w07-color',
    week: 7,
    title: {
      fr: 'Images couleur et révision de la vize',
      en: 'Color images and midterm review',
      tr: 'Renkli görüntüler ve vize tekrarı',
    },
    blocks: [
      {
        type: 'code',
        code: {
          fr: 'RGB  : additif (écrans), 3 canaux R, G, B\nCMY(K) : soustractif (impression), C = 1 − R, M = 1 − G, Y = 1 − B\nHSI / HSV : teinte (H), saturation (S), intensité (I) ou valeur (V)\n            → proche de la perception humaine, pratique pour segmenter\nNiveaux de gris : Y = 0,299 R + 0,587 G + 0,114 B\n                  (l’œil est plus sensible au vert)',
          en: 'RGB    : additive (screens), 3 channels R, G, B\nCMY(K) : subtractive (printing), C = 1 − R, M = 1 − G, Y = 1 − B\nHSI / HSV: hue (H), saturation (S), intensity (I) or value (V)\n           → close to human perception, handy for segmentation\nGrayscale: Y = 0.299 R + 0.587 G + 0.114 B\n           (the eye is most sensitive to green)',
          tr: 'RGB    : toplamsal (ekranlar), 3 kanal R, G, B\nCMY(K) : çıkarımsal (baskı), C = 1 − R, M = 1 − G, Y = 1 − B\nHSI / HSV: ton (H), doygunluk (S), yoğunluk (I) veya değer (V)\n           → insan algısına yakın, bölütleme için kullanışlı\nGri ton: Y = 0,299 R + 0,587 G + 0,114 B\n         (göz en çok yeşile duyarlıdır)',
        },
      },
      {
        type: 'text',
        text: {
          fr: 'Pour traiter une image couleur, on peut appliquer un traitement à chaque canal RGB, mais l’égalisation canal par canal fausse les couleurs. Mieux vaut passer en HSI et n’égaliser que l’intensité I, puis revenir en RGB.',
          en: 'To process a color image, each RGB channel can be processed, but channel-by-channel equalization distorts the colors. It is better to convert to HSI, equalize only the intensity I, then convert back to RGB.',
          tr: 'Renkli bir görüntüyü işlemek için her RGB kanalı işlenebilir, ama kanal kanal eşitleme renkleri bozar. HSI’ya geçip yalnızca I yoğunluğunu eşitlemek, sonra RGB’ye dönmek daha iyidir.',
        },
      },
      { type: 'heading', text: { fr: 'Révision de la vize', en: 'Midterm review', tr: 'Vize tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Échantillonnage, quantification, taille d’une image, N4 / N8\n✔ Négatif, log, gamma, étirement, seuillage\n✔ Histogramme, égalisation (calcul complet)\n✔ Moyenne, gaussien, médiane, Laplacien, Sobel\n✔ DFT, passe-bas / passe-haut, idéal / Butterworth / gaussien, anneaux\n✔ Modèle de dégradation, types de bruit, filtre inverse, Wiener\n✔ RGB, CMY, HSI, conversion en niveaux de gris',
          en: '✔ Sampling, quantization, image size, N4 / N8\n✔ Negative, log, gamma, stretching, thresholding\n✔ Histogram, equalization (full computation)\n✔ Mean, Gaussian, median, Laplacian, Sobel\n✔ DFT, low-pass / high-pass, ideal / Butterworth / Gaussian, ringing\n✔ Degradation model, noise types, inverse filter, Wiener\n✔ RGB, CMY, HSI, grayscale conversion',
          tr: '✔ Örnekleme, nicemleme, görüntü boyutu, N4 / N8\n✔ Negatif, log, gama, germe, eşikleme\n✔ Histogram, eşitleme (tam hesap)\n✔ Ortalama, Gauss, medyan, Laplasyen, Sobel\n✔ DFT, alçak / yüksek geçiren, ideal / Butterworth / Gauss, halkalanma\n✔ Bozulma modeli, gürültü türleri, ters süzgeç, Wiener\n✔ RGB, CMY, HSI, gri tona dönüşüm',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Un pixel a pour couleur (R, G, B) = (200, 100, 50). Calcule son niveau de gris et ses valeurs CMY sur 8 bits.',
          en: 'A pixel has color (R, G, B) = (200, 100, 50). Compute its gray level and its 8-bit CMY values.',
          tr: 'Bir pikselin rengi (R, G, B) = (200, 100, 50). Gri seviyesini ve 8 bitlik CMY değerlerini hesapla.',
        },
        solution: {
          fr: 'Gris = 0,299 × 200 + 0,587 × 100 + 0,114 × 50 = 59,8 + 58,7 + 5,7 = 124,2, donc 124. CMY sur 8 bits : C = 255 − 200 = 55, M = 255 − 100 = 155, Y = 255 − 50 = 205. Cette couleur orangée contient peu de cyan et beaucoup de jaune.',
          en: 'Gray = 0.299 × 200 + 0.587 × 100 + 0.114 × 50 = 59.8 + 58.7 + 5.7 = 124.2, so 124. 8-bit CMY: C = 255 − 200 = 55, M = 255 − 100 = 155, Y = 255 − 50 = 205. This orange color has little cyan and a lot of yellow.',
          tr: 'Gri = 0,299 × 200 + 0,587 × 100 + 0,114 × 50 = 59,8 + 58,7 + 5,7 = 124,2, yani 124. 8 bitlik CMY: C = 255 − 200 = 55, M = 255 − 100 = 155, Y = 255 − 50 = 205. Bu turuncu renkte az camgöbeği, çok sarı vardır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel modèle de couleur sépare la teinte de l’intensité lumineuse ?',
        en: 'Which color model separates hue from light intensity?',
        tr: 'Hangi renk modeli tonu ışık yoğunluğundan ayırır?',
      },
      options: { fr: ['RGB', 'CMY', 'HSI'], en: ['RGB', 'CMY', 'HSI'], tr: ['RGB', 'CMY', 'HSI'] },
      answerIndex: 2,
      explanation: {
        fr: 'HSI isole la teinte (H) et la saturation (S) de l’intensité (I). On peut ainsi modifier la luminosité sans changer les couleurs.',
        en: 'HSI separates hue (H) and saturation (S) from intensity (I). Brightness can then change without altering the colors.',
        tr: 'HSI, ton (H) ve doygunluğu (S) yoğunluktan (I) ayırır. Böylece renkleri değiştirmeden parlaklık değiştirilebilir.',
      },
    },
  },
  {
    id: 'ip-w08-wavelets',
    week: 8,
    title: {
      fr: 'Ondelettes et multirésolution',
      en: 'Wavelets and multiresolution',
      tr: 'Dalgacıklar ve çoklu çözünürlük',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Fourier dit quelles fréquences sont présentes, mais pas où. Les ondelettes analysent l’image à plusieurs échelles et gardent la position : une version grossière de l’image plus des détails à chaque niveau. C’est la base de JPEG 2000.',
          en: 'Fourier says which frequencies are present, but not where. Wavelets analyze the image at several scales and keep the position: a coarse version of the image plus details at each level. It is the basis of JPEG 2000.',
          tr: 'Fourier hangi frekansların var olduğunu söyler ama nerede olduklarını söylemez. Dalgacıklar görüntüyü birkaç ölçekte inceler ve konumu korur: görüntünün kaba bir sürümü artı her seviyede ayrıntılar. JPEG 2000’in temelidir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Ondelette de Haar (version moyenne / demi-différence)\npaire (a, b) → moyenne (a + b) / 2 et détail (a − b) / 2\nreconstruction : a = moyenne + détail, b = moyenne − détail\n\nEn 2D, un niveau donne 4 sous-bandes :\nLL (approximation)  LH, HL, HH (détails horizontaux, verticaux, diagonaux)\nPyramide d’images : réduire la taille de moitié à chaque niveau',
          en: 'Haar wavelet (average / half-difference version)\npair (a, b) → average (a + b) / 2 and detail (a − b) / 2\nreconstruction: a = average + detail, b = average − detail\n\nIn 2D, one level gives 4 subbands:\nLL (approximation)  LH, HL, HH (horizontal, vertical, diagonal details)\nImage pyramid: halve the size at each level',
          tr: 'Haar dalgacığı (ortalama / yarım fark sürümü)\n(a, b) çifti → ortalama (a + b) / 2 ve ayrıntı (a − b) / 2\ngeri oluşturma: a = ortalama + ayrıntı, b = ortalama − ayrıntı\n\n2B’de bir seviye 4 alt bant verir:\nLL (yaklaşık)  LH, HL, HH (yatay, dikey, köşegen ayrıntılar)\nGörüntü piramidi: her seviyede boyutu yarıya indirmek',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Applique deux niveaux de la transformée de Haar au signal [9, 7, 3, 5], puis vérifie la reconstruction.',
          en: 'Apply two levels of the Haar transform to the signal [9, 7, 3, 5], then check the reconstruction.',
          tr: '[9, 7, 3, 5] sinyaline Haar dönüşümünün iki seviyesini uygula, sonra geri oluşturmayı doğrula.',
        },
        solution: {
          fr: 'Niveau 1 : (9, 7) → moyenne 8, détail 1 ; (3, 5) → moyenne 4, détail −1. Niveau 2 sur (8, 4) : moyenne 6, détail 2. Résultat : [6, 2, 1, −1]. Reconstruction : 6 + 2 = 8 et 6 − 2 = 4 ; puis 8 ± 1 = 9 et 7, 4 ± (−1) = 3 et 5. Les petits détails peuvent être mis à zéro pour compresser.',
          en: 'Level 1: (9, 7) → average 8, detail 1; (3, 5) → average 4, detail −1. Level 2 on (8, 4): average 6, detail 2. Result: [6, 2, 1, −1]. Reconstruction: 6 + 2 = 8 and 6 − 2 = 4; then 8 ± 1 = 9 and 7, 4 ± (−1) = 3 and 5. Small details can be set to zero to compress.',
          tr: '1. seviye: (9, 7) → ortalama 8, ayrıntı 1; (3, 5) → ortalama 4, ayrıntı −1. (8, 4) üzerinde 2. seviye: ortalama 6, ayrıntı 2. Sonuç: [6, 2, 1, −1]. Geri oluşturma: 6 + 2 = 8 ve 6 − 2 = 4; sonra 8 ± 1 = 9 ve 7, 4 ± (−1) = 3 ve 5. Sıkıştırmak için küçük ayrıntılar sıfırlanabilir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quel avantage les ondelettes ont-elles sur la transformée de Fourier ?',
        en: 'What advantage do wavelets have over the Fourier transform?',
        tr: 'Dalgacıkların Fourier dönüşümüne göre avantajı nedir?',
      },
      options: {
        fr: ['Elles localisent les détails dans l’espace et en fréquence', 'Elles sont toujours sans perte', 'Elles n’utilisent que des sinus'],
        en: ['They locate details in both space and frequency', 'They are always lossless', 'They only use sines'],
        tr: ['Ayrıntıları hem uzayda hem frekansta konumlandırırlar', 'Her zaman kayıpsızdırlar', 'Yalnızca sinüs kullanırlar'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Les sinus de Fourier s’étendent sur toute l’image ; les ondelettes sont courtes, donc chaque coefficient correspond à un endroit précis et à une échelle.',
        en: 'Fourier’s sines span the whole image; wavelets are short, so each coefficient matches a precise place and a scale.',
        tr: 'Fourier’in sinüsleri tüm görüntüye yayılır; dalgacıklar kısadır, bu yüzden her katsayı belirli bir yere ve ölçeğe karşılık gelir.',
      },
    },
  },
  {
    id: 'ip-w09-compression',
    week: 9,
    title: { fr: 'Compression d’images', en: 'Image compression', tr: 'Görüntü sıkıştırma' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'On compresse en supprimant les redondances : de codage (codes plus courts pour les valeurs fréquentes), spatiale (pixels voisins semblables) et psychovisuelle (détails que l’œil ne voit pas). Sans perte (PNG, GIF) : l’image est retrouvée exactement. Avec pertes (JPEG) : beaucoup plus compact, mais irréversible.',
          en: 'Compression removes redundancy: coding (shorter codes for frequent values), spatial (similar neighboring pixels) and psychovisual (details the eye doesn’t see). Lossless (PNG, GIF): the image is recovered exactly. Lossy (JPEG): much more compact, but irreversible.',
          tr: 'Sıkıştırma fazlalıkları giderir: kodlama (sık değerlere daha kısa kodlar), uzamsal (benzer komşu pikseller) ve psikogörsel (gözün görmediği ayrıntılar). Kayıpsız (PNG, GIF): görüntü tam olarak geri elde edilir. Kayıplı (JPEG): çok daha küçük, ama geri döndürülemez.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Taux de compression C = taille d’origine / taille compressée\nRLE      : WWWWBBBWWWWWWB → 4W 3B 6W 1B\nHuffman  : code préfixe, les symboles fréquents ont les codes les plus courts\nEntropie : H = − Σ pᵢ log₂ pᵢ = limite basse en bits par symbole\nJPEG     : blocs 8 × 8 → DCT → quantification (perte) → zigzag → RLE + Huffman',
          en: 'Compression ratio C = original size / compressed size\nRLE      : WWWWBBBWWWWWWB → 4W 3B 6W 1B\nHuffman  : prefix code, frequent symbols get the shortest codes\nEntropy  : H = − Σ pᵢ log₂ pᵢ = lower bound in bits per symbol\nJPEG     : 8 × 8 blocks → DCT → quantization (loss) → zigzag → RLE + Huffman',
          tr: 'Sıkıştırma oranı C = özgün boyut / sıkıştırılmış boyut\nRLE      : WWWWBBBWWWWWWB → 4W 3B 6W 1B\nHuffman  : önek kod, sık simgeler en kısa kodları alır\nEntropi  : H = − Σ pᵢ log₂ pᵢ = simge başına bit cinsinden alt sınır\nJPEG     : 8 × 8 bloklar → DCT → nicemleme (kayıp) → zikzak → RLE + Huffman',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Quatre niveaux de gris ont les probabilités 0,4 ; 0,3 ; 0,2 ; 0,1. (1) Construis un code de Huffman et calcule la longueur moyenne. (2) Compare au code fixe de 2 bits et à l’entropie.',
          en: 'Four gray levels have probabilities 0.4; 0.3; 0.2; 0.1. (1) Build a Huffman code and compute the average length. (2) Compare with a fixed 2-bit code and the entropy.',
          tr: 'Dört gri seviyenin olasılıkları 0,4; 0,3; 0,2; 0,1. (1) Bir Huffman kodu oluştur ve ortalama uzunluğu hesapla. (2) Sabit 2 bitlik kodla ve entropiyle karşılaştır.',
        },
        solution: {
          fr: 'On fusionne les deux plus petits : 0,1 + 0,2 = 0,3 ; puis 0,3 + 0,3 = 0,6 ; puis 0,6 + 0,4 = 1. Codes possibles : 0,4 → 0 ; 0,3 → 10 ; 0,2 → 110 ; 0,1 → 111. Longueur moyenne = 0,4 × 1 + 0,3 × 2 + 0,2 × 3 + 0,1 × 3 = 1,9 bit. Code fixe : 2 bits. Entropie ≈ 1,846 bit : Huffman en est très proche.',
          en: 'Merge the two smallest: 0.1 + 0.2 = 0.3; then 0.3 + 0.3 = 0.6; then 0.6 + 0.4 = 1. Possible codes: 0.4 → 0; 0.3 → 10; 0.2 → 110; 0.1 → 111. Average length = 0.4 × 1 + 0.3 × 2 + 0.2 × 3 + 0.1 × 3 = 1.9 bits. Fixed code: 2 bits. Entropy ≈ 1.846 bits: Huffman is very close.',
          tr: 'En küçük ikisi birleştirilir: 0,1 + 0,2 = 0,3; sonra 0,3 + 0,3 = 0,6; sonra 0,6 + 0,4 = 1. Olası kodlar: 0,4 → 0; 0,3 → 10; 0,2 → 110; 0,1 → 111. Ortalama uzunluk = 0,4 × 1 + 0,3 × 2 + 0,2 × 3 + 0,1 × 3 = 1,9 bit. Sabit kod: 2 bit. Entropi ≈ 1,846 bit: Huffman ona çok yakındır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans JPEG, quelle étape fait perdre de l’information ?',
        en: 'In JPEG, which step loses information?',
        tr: 'JPEG’de hangi adım bilgi kaybettirir?',
      },
      options: { fr: ['La DCT', 'La quantification', 'Le codage de Huffman'], en: ['The DCT', 'Quantization', 'Huffman coding'], tr: ['DCT', 'Nicemleme', 'Huffman kodlama'] },
      answerIndex: 1,
      explanation: {
        fr: 'La DCT et Huffman sont réversibles. La quantification arrondit les coefficients DCT, surtout les hautes fréquences peu visibles : c’est là que se joue le compromis qualité / taille.',
        en: 'The DCT and Huffman are reversible. Quantization rounds the DCT coefficients, mostly the barely visible high frequencies: that is where the quality / size trade-off happens.',
        tr: 'DCT ve Huffman geri döndürülebilir. Nicemleme, DCT katsayılarını, özellikle az görünen yüksek frekansları yuvarlar: kalite / boyut dengesi burada kurulur.',
      },
    },
  },
  {
    id: 'ip-w10-morphology',
    week: 10,
    title: {
      fr: 'Morphologie mathématique',
      en: 'Morphological image processing',
      tr: 'Morfolojik görüntü işleme',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La morphologie traite la forme des objets dans une image binaire, avec un petit élément structurant B. L’érosion amincit les objets (un pixel reste à 1 seulement si B tient entièrement dans l’objet) ; la dilatation les épaissit (un pixel passe à 1 si B touche l’objet).',
          en: 'Morphology handles the shape of objects in a binary image, with a small structuring element B. Erosion thins objects (a pixel stays 1 only if B fits entirely inside the object); dilation thickens them (a pixel becomes 1 if B touches the object).',
          tr: 'Morfoloji, ikili bir görüntüdeki nesnelerin biçimini küçük bir yapı elemanı B ile işler. Aşındırma nesneleri inceltir (B tamamen nesnenin içine sığıyorsa piksel 1 kalır); genişletme onları kalınlaştırır (B nesneye değiyorsa piksel 1 olur).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Érosion    A ⊖ B      Dilatation A ⊕ B\nOuverture  A ∘ B = (A ⊖ B) ⊕ B   enlève les petits objets et le bruit\nFermeture  A • B = (A ⊕ B) ⊖ B   bouche les petits trous et les fentes\nContour    = A − (A ⊖ B)\nAussi : remplissage de trous, composantes connexes, squelette',
          en: 'Erosion    A ⊖ B      Dilation A ⊕ B\nOpening    A ∘ B = (A ⊖ B) ⊕ B   removes small objects and noise\nClosing    A • B = (A ⊕ B) ⊖ B   fills small holes and gaps\nBoundary   = A − (A ⊖ B)\nAlso: hole filling, connected components, skeleton',
          tr: 'Aşındırma  A ⊖ B      Genişletme A ⊕ B\nAçma       A ∘ B = (A ⊖ B) ⊕ B   küçük nesneleri ve gürültüyü siler\nKapama     A • B = (A ⊕ B) ⊖ B   küçük delikleri ve boşlukları doldurur\nSınır      = A − (A ⊖ B)\nAyrıca: delik doldurma, bağlantılı bileşenler, iskelet',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Ligne binaire A = 0 1 1 1 0 0 1 0, élément structurant B = [1 1 1] centré. Calcule l’érosion, puis l’ouverture. Qu’est devenu le 1 isolé ?',
          en: 'Binary row A = 0 1 1 1 0 0 1 0, structuring element B = [1 1 1] centered. Compute the erosion, then the opening. What happened to the isolated 1?',
          tr: 'İkili satır A = 0 1 1 1 0 0 1 0, merkezli yapı elemanı B = [1 1 1]. Aşındırmayı, sonra açmayı hesapla. Yalıtılmış 1’e ne oldu?',
        },
        solution: {
          fr: 'Érosion : un pixel reste à 1 si lui et ses deux voisins valent 1. Seule la 3e position (milieu de 1 1 1) passe : 0 0 1 0 0 0 0 0. Ouverture = dilatation de ce résultat : le 1 s’étend à ses voisins, 0 1 1 1 0 0 0 0. Le bloc de trois 1 est retrouvé intact, mais le 1 isolé (du bruit) a disparu : c’est tout l’intérêt de l’ouverture.',
          en: 'Erosion: a pixel stays 1 if it and its two neighbors are 1. Only the 3rd position (middle of 1 1 1) survives: 0 0 1 0 0 0 0 0. Opening = dilation of this result: the 1 spreads to its neighbors, 0 1 1 1 0 0 0 0. The block of three 1s comes back intact, but the isolated 1 (noise) is gone: that is the whole point of opening.',
          tr: 'Aşındırma: bir piksel kendisi ve iki komşusu 1 ise 1 kalır. Yalnızca 3. konum (1 1 1’in ortası) kalır: 0 0 1 0 0 0 0 0. Açma = bu sonucun genişletilmesi: 1 komşularına yayılır, 0 1 1 1 0 0 0 0. Üç 1’lik blok bozulmadan geri gelir ama yalıtılmış 1 (gürültü) kaybolmuştur: açmanın amacı tam olarak budur.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle opération morphologique bouche les petits trous à l’intérieur des objets ?',
        en: 'Which morphological operation fills small holes inside objects?',
        tr: 'Hangi morfolojik işlem nesnelerin içindeki küçük delikleri doldurur?',
      },
      options: { fr: ['L’érosion', 'L’ouverture', 'La fermeture'], en: ['Erosion', 'Opening', 'Closing'], tr: ['Aşındırma', 'Açma', 'Kapama'] },
      answerIndex: 2,
      explanation: {
        fr: 'La fermeture dilate d’abord (les trous se bouchent), puis érode (l’objet reprend sa taille). L’ouverture fait l’inverse et enlève les petits objets.',
        en: 'Closing dilates first (holes get filled), then erodes (the object returns to its size). Opening does the opposite and removes small objects.',
        tr: 'Kapama önce genişletir (delikler dolar), sonra aşındırır (nesne boyutuna döner). Açma tersini yapar ve küçük nesneleri siler.',
      },
    },
  },
  {
    id: 'ip-w11-segmentation',
    week: 11,
    title: { fr: 'Segmentation', en: 'Segmentation', tr: 'Bölütleme' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Segmenter, c’est découper l’image en régions qui correspondent aux objets. Deux familles : chercher les discontinuités (points, lignes, contours, avec Sobel, Canny, la transformée de Hough) ou chercher les similitudes (seuillage, croissance de régions, division et fusion).',
          en: 'Segmenting means splitting the image into regions matching the objects. Two families: look for discontinuities (points, lines, edges, with Sobel, Canny, the Hough transform) or for similarities (thresholding, region growing, split and merge).',
          tr: 'Bölütleme, görüntüyü nesnelere karşılık gelen bölgelere ayırmaktır. İki aile vardır: süreksizlikleri aramak (Sobel, Canny, Hough dönüşümüyle noktalar, çizgiler, kenarlar) veya benzerlikleri aramak (eşikleme, bölge büyütme, bölme ve birleştirme).',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Seuillage global itératif\n1. T = moyenne de l’image\n2. G1 = pixels > T, G2 = pixels ≤ T\n3. T = (moyenne(G1) + moyenne(G2)) / 2\n4. Recommencer jusqu’à ce que T ne bouge plus\n\nOtsu : choisit le seuil qui maximise la variance entre les deux classes\nCroissance de régions : partir d’un germe, ajouter les voisins semblables',
          en: 'Iterative global thresholding\n1. T = mean of the image\n2. G1 = pixels > T, G2 = pixels ≤ T\n3. T = (mean(G1) + mean(G2)) / 2\n4. Repeat until T stops changing\n\nOtsu: picks the threshold that maximizes the between-class variance\nRegion growing: start from a seed, add similar neighbors',
          tr: 'Yinelemeli global eşikleme\n1. T = görüntünün ortalaması\n2. G1 = T’den büyük pikseller, G2 = T’ye eşit veya küçük pikseller\n3. T = (ortalama(G1) + ortalama(G2)) / 2\n4. T değişmeyene kadar tekrarla\n\nOtsu: sınıflar arası varyansı en büyük yapan eşiği seçer\nBölge büyütme: bir tohumdan başla, benzer komşuları ekle',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Une petite image a les niveaux 20, 25, 30, 200, 210, 220. Applique le seuillage global itératif. Quel est le seuil final et quelles sont les deux régions ?',
          en: 'A small image has the levels 20, 25, 30, 200, 210, 220. Apply iterative global thresholding. What is the final threshold and what are the two regions?',
          tr: 'Küçük bir görüntünün seviyeleri 20, 25, 30, 200, 210, 220. Yinelemeli global eşikleme uygula. Son eşik nedir ve iki bölge hangileridir?',
        },
        solution: {
          fr: 'T₀ = (20 + 25 + 30 + 200 + 210 + 220) / 6 = 705 / 6 = 117,5. G2 = {20, 25, 30}, moyenne 25 ; G1 = {200, 210, 220}, moyenne 210. T₁ = (25 + 210) / 2 = 117,5 : T ne bouge plus, c’est le seuil final. Régions : fond sombre {20, 25, 30} et objet clair {200, 210, 220}. Un histogramme bimodal comme celui-ci se seuille très facilement.',
          en: 'T₀ = (20 + 25 + 30 + 200 + 210 + 220) / 6 = 705 / 6 = 117.5. G2 = {20, 25, 30}, mean 25; G1 = {200, 210, 220}, mean 210. T₁ = (25 + 210) / 2 = 117.5: T no longer changes, it is the final threshold. Regions: dark background {20, 25, 30} and bright object {200, 210, 220}. A bimodal histogram like this one is very easy to threshold.',
          tr: 'T₀ = (20 + 25 + 30 + 200 + 210 + 220) / 6 = 705 / 6 = 117,5. G2 = {20, 25, 30}, ortalama 25; G1 = {200, 210, 220}, ortalama 210. T₁ = (25 + 210) / 2 = 117,5: T artık değişmez, son eşiktir. Bölgeler: koyu arka plan {20, 25, 30} ve açık nesne {200, 210, 220}. Bunun gibi iki tepeli bir histogram çok kolay eşiklenir.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle méthode trouve automatiquement le seuil qui sépare le mieux deux classes de pixels ?',
        en: 'Which method automatically finds the threshold that best separates two pixel classes?',
        tr: 'İki piksel sınıfını en iyi ayıran eşiği hangi yöntem otomatik bulur?',
      },
      options: {
        fr: ['La méthode d’Otsu', 'Le filtre médian', 'La transformée de Haar'],
        en: ['Otsu’s method', 'The median filter', 'The Haar transform'],
        tr: ['Otsu yöntemi', 'Medyan süzgeci', 'Haar dönüşümü'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'Otsu teste tous les seuils et garde celui qui maximise la variance entre les classes, ce qui revient à minimiser la variance à l’intérieur de chacune.',
        en: 'Otsu tries every threshold and keeps the one that maximizes between-class variance, which amounts to minimizing the variance within each class.',
        tr: 'Otsu tüm eşikleri dener ve sınıflar arası varyansı en büyük yapanı tutar; bu, her sınıfın içindeki varyansı en küçük yapmaya denktir.',
      },
    },
  },
  {
    id: 'ip-w12-description',
    week: 12,
    title: {
      fr: 'Représentation et description des formes',
      en: 'Representation and description of shapes',
      tr: 'Biçimlerin gösterimi ve tanımlanması',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Après la segmentation, chaque région est décrite par des nombres pour pouvoir la reconnaître : par son contour (code de chaîne, signature) ou par son intérieur (aire, moments, texture). On cherche des descripteurs invariants à la translation, à la rotation et à l’échelle.',
          en: 'After segmentation, each region is described by numbers so it can be recognized: by its boundary (chain code, signature) or by its interior (area, moments, texture). Descriptors invariant to translation, rotation and scale are preferred.',
          tr: 'Bölütlemeden sonra her bölge tanınabilmesi için sayılarla tanımlanır: sınırıyla (zincir kod, imza) veya iç kısmıyla (alan, momentler, doku). Ötelemeye, dönmeye ve ölçeğe göre değişmeyen tanımlayıcılar tercih edilir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Code de chaîne de Freeman (4 directions) : 0 droite, 1 haut, 2 gauche, 3 bas\nDifférence première (mod 4) → invariant à la rotation\n\nDescripteurs de région\nAire A, périmètre P\nCompacité C = P² / (4πA)   (1 pour un disque, plus grand sinon)\nRapport d’aspect, excentricité, moments de Hu (invariants)',
          en: 'Freeman chain code (4 directions): 0 right, 1 up, 2 left, 3 down\nFirst difference (mod 4) → rotation invariant\n\nRegion descriptors\nArea A, perimeter P\nCompactness C = P² / (4πA)   (1 for a disk, larger otherwise)\nAspect ratio, eccentricity, Hu moments (invariant)',
          tr: 'Freeman zincir kodu (4 yön): 0 sağ, 1 yukarı, 2 sol, 3 aşağı\nBirinci fark (mod 4) → dönmeye göre değişmez\n\nBölge tanımlayıcıları\nAlan A, çevre P\nSıkılık C = P² / (4πA)   (daire için 1, diğerleri için daha büyük)\nEn-boy oranı, dışmerkezlik, Hu momentleri (değişmez)',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: '(1) Calcule la compacité P² / (4πA) d’un disque de rayon r et d’un carré de côté a. (2) Le contour d’un carré parcouru dans le sens inverse des aiguilles d’une montre, depuis le coin bas-gauche, avec 2 pas par côté : donne son code de chaîne en 4 directions.',
          en: '(1) Compute the compactness P² / (4πA) of a disk of radius r and of a square of side a. (2) The boundary of a square traversed counterclockwise from the bottom-left corner, with 2 steps per side: give its 4-direction chain code.',
          tr: '(1) r yarıçaplı bir dairenin ve a kenarlı bir karenin sıkılığını P² / (4πA) hesapla. (2) Sol alt köşeden saat yönünün tersine, kenar başına 2 adımla dolaşılan bir karenin sınırı: 4 yönlü zincir kodunu ver.',
        },
        solution: {
          fr: '(1) Disque : P = 2πr et A = πr², donc C = 4π²r² / (4π × πr²) = 1. Carré : P = 4a et A = a², donc C = 16a² / (4πa²) = 4/π ≈ 1,27. Cette valeur ne dépend pas de la taille : elle mesure l’écart à un cercle. (2) Droite, droite, haut, haut, gauche, gauche, bas, bas : 0 0 1 1 2 2 3 3.',
          en: '(1) Disk: P = 2πr and A = πr², so C = 4π²r² / (4π × πr²) = 1. Square: P = 4a and A = a², so C = 16a² / (4πa²) = 4/π ≈ 1.27. The value does not depend on size: it measures how far the shape is from a circle. (2) Right, right, up, up, left, left, down, down: 0 0 1 1 2 2 3 3.',
          tr: '(1) Daire: P = 2πr ve A = πr², yani C = 4π²r² / (4π × πr²) = 1. Kare: P = 4a ve A = a², yani C = 16a² / (4πa²) = 4/π ≈ 1,27. Değer boyuta bağlı değildir: biçimin daireden ne kadar uzak olduğunu ölçer. (2) Sağ, sağ, yukarı, yukarı, sol, sol, aşağı, aşağı: 0 0 1 1 2 2 3 3.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Quelle forme a la plus petite compacité P² / (4πA) ?',
        en: 'Which shape has the smallest compactness P² / (4πA)?',
        tr: 'Hangi biçimin sıkılığı P² / (4πA) en küçüktür?',
      },
      options: { fr: ['Le disque', 'Le carré', 'Un rectangle très allongé'], en: ['The disk', 'The square', 'A very elongated rectangle'], tr: ['Daire', 'Kare', 'Çok uzun bir dikdörtgen'] },
      answerIndex: 0,
      explanation: {
        fr: 'À aire égale, le disque a le plus petit périmètre : sa compacité vaut 1, le minimum. Plus la forme est allongée ou irrégulière, plus la valeur grandit.',
        en: 'For a given area, the disk has the smallest perimeter: its compactness is 1, the minimum. The more elongated or irregular the shape, the larger the value.',
        tr: 'Aynı alanda en küçük çevreye daire sahiptir: sıkılığı en küçük değer olan 1’dir. Biçim uzadıkça veya düzensizleştikçe değer büyür.',
      },
    },
  },
  {
    id: 'ip-w13-recognition',
    week: 13,
    title: { fr: 'Reconnaissance d’objets', en: 'Object recognition', tr: 'Nesne tanıma' },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'La reconnaissance attribue une classe à chaque objet décrit. La correspondance de modèle (template matching) fait glisser une petite image modèle et cherche l’endroit le plus ressemblant. Les méthodes à caractéristiques (coins, SIFT, ORB) résistent mieux à la rotation et à l’échelle. Aujourd’hui, les réseaux de neurones convolutifs (CNN) apprennent eux-mêmes les caractéristiques.',
          en: 'Recognition assigns a class to each described object. Template matching slides a small model image and looks for the most similar place. Feature-based methods (corners, SIFT, ORB) handle rotation and scale better. Today, convolutional neural networks (CNNs) learn the features themselves.',
          tr: 'Tanıma, tanımlanan her nesneye bir sınıf atar. Şablon eşleştirme küçük bir model görüntüsünü kaydırır ve en benzer yeri arar. Özniteliğe dayalı yöntemler (köşeler, SIFT, ORB) dönme ve ölçeğe daha dayanıklıdır. Bugün evrişimli sinir ağları (CNN) öznitelikleri kendileri öğrenir.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'Mesures de ressemblance pour le template matching\nSSD  = Σ (I − T)²          (le plus petit = le meilleur)\nNCC  = corrélation normalisée (proche de 1 = le meilleur,\n       insensible aux changements de luminosité)\n\nCNN : convolution → activation (ReLU) → pooling → … → couches denses → classe',
          en: 'Similarity measures for template matching\nSSD  = Σ (I − T)²          (the smallest = the best)\nNCC  = normalized cross-correlation (close to 1 = the best,\n       insensitive to brightness changes)\n\nCNN: convolution → activation (ReLU) → pooling → … → dense layers → class',
          tr: 'Şablon eşleştirme için benzerlik ölçüleri\nSSD  = Σ (I − T)²          (en küçüğü = en iyisi)\nNCC  = normalleştirilmiş çapraz korelasyon (1’e yakın = en iyisi,\n       parlaklık değişimlerine duyarsız)\n\nCNN: evrişim → aktivasyon (ReLU) → havuzlama → … → yoğun katmanlar → sınıf',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'On cherche le modèle T = [1, 2, 1] dans le signal I = [0, 1, 2, 1, 5, 2]. Calcule la SSD à chaque position possible et trouve la meilleure correspondance.',
          en: 'Search for the template T = [1, 2, 1] in the signal I = [0, 1, 2, 1, 5, 2]. Compute the SSD at every possible position and find the best match.',
          tr: 'T = [1, 2, 1] şablonunu I = [0, 1, 2, 1, 5, 2] sinyalinde ara. Her olası konumda SSD’yi hesapla ve en iyi eşleşmeyi bul.',
        },
        solution: {
          fr: 'Position 0, [0, 1, 2] : 1 + 1 + 1 = 3. Position 1, [1, 2, 1] : 0. Position 2, [2, 1, 5] : 1 + 1 + 16 = 18. Position 3, [1, 5, 2] : 0 + 9 + 1 = 10. Le minimum (0) est à la position 1 : correspondance parfaite. En 2D, on fait la même chose en faisant glisser une petite image sur la grande.',
          en: 'Position 0, [0, 1, 2]: 1 + 1 + 1 = 3. Position 1, [1, 2, 1]: 0. Position 2, [2, 1, 5]: 1 + 1 + 16 = 18. Position 3, [1, 5, 2]: 0 + 9 + 1 = 10. The minimum (0) is at position 1: a perfect match. In 2D, the same is done by sliding a small image over the large one.',
          tr: '0. konum, [0, 1, 2]: 1 + 1 + 1 = 3. 1. konum, [1, 2, 1]: 0. 2. konum, [2, 1, 5]: 1 + 1 + 16 = 18. 3. konum, [1, 5, 2]: 0 + 9 + 1 = 10. En küçük değer (0) 1. konumdadır: kusursuz eşleşme. 2B’de aynısı küçük bir görüntüyü büyüğün üzerinde kaydırarak yapılır.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Pourquoi préférer la corrélation normalisée (NCC) à la SSD pour le template matching ?',
        en: 'Why prefer normalized cross-correlation (NCC) over SSD for template matching?',
        tr: 'Şablon eşleştirmede neden SSD yerine normalleştirilmiş çapraz korelasyon (NCC) tercih edilir?',
      },
      options: {
        fr: ['Elle est insensible aux changements de luminosité et de contraste', 'Elle est toujours plus rapide', 'Elle gère toutes les rotations'],
        en: ['It is insensitive to brightness and contrast changes', 'It is always faster', 'It handles every rotation'],
        tr: ['Parlaklık ve karşıtlık değişimlerine duyarsızdır', 'Her zaman daha hızlıdır', 'Tüm dönmeleri karşılar'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'NCC retire la moyenne et divise par l’écart-type : un objet plus éclairé donne quand même une bonne correspondance. Aucune des deux ne gère bien la rotation.',
        en: 'NCC removes the mean and divides by the standard deviation: a brighter object still gives a good match. Neither handles rotation well.',
        tr: 'NCC ortalamayı çıkarır ve standart sapmaya böler: daha aydınlık bir nesne yine iyi bir eşleşme verir. İkisi de dönmeyi iyi karşılamaz.',
      },
    },
  },
  {
    id: 'ip-w14-applications',
    week: 14,
    title: {
      fr: 'Applications, OpenCV et révision du final',
      en: 'Applications, OpenCV and final review',
      tr: 'Uygulamalar, OpenCV ve final tekrarı',
    },
    blocks: [
      {
        type: 'text',
        text: {
          fr: 'Le traitement d’images est partout : imagerie médicale, contrôle qualité industriel, lecture de plaques, reconnaissance de visages, véhicules autonomes, images satellites. La bibliothèque OpenCV (Python ou C++) fournit toutes les opérations vues dans ce cours.',
          en: 'Image processing is everywhere: medical imaging, industrial quality control, license plate reading, face recognition, self-driving cars, satellite imagery. The OpenCV library (Python or C++) provides every operation seen in this course.',
          tr: 'Görüntü işleme her yerdedir: tıbbi görüntüleme, endüstriyel kalite kontrol, plaka okuma, yüz tanıma, sürücüsüz araçlar, uydu görüntüleri. OpenCV kütüphanesi (Python veya C++) bu derste görülen tüm işlemleri sağlar.',
        },
      },
      {
        type: 'code',
        code: {
          fr: 'import cv2\n\nimg = cv2.imread(\'pieces.jpg\')                      # compter des pièces\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nblur = cv2.GaussianBlur(gray, (5, 5), 0)           # lisser le bruit\n_, bw = cv2.threshold(blur, 0, 255,\n                      cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)\nkernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))\nbw = cv2.morphologyEx(bw, cv2.MORPH_OPEN, kernel)  # enlever les petits points\nn, labels = cv2.connectedComponents(bw)\nprint(n - 1)                                       # nombre d’objets (0 = fond)',
          en: 'import cv2\n\nimg = cv2.imread(\'coins.jpg\')                       # count coins\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nblur = cv2.GaussianBlur(gray, (5, 5), 0)           # smooth the noise\n_, bw = cv2.threshold(blur, 0, 255,\n                      cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)\nkernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))\nbw = cv2.morphologyEx(bw, cv2.MORPH_OPEN, kernel)  # remove small specks\nn, labels = cv2.connectedComponents(bw)\nprint(n - 1)                                       # number of objects (0 = background)',
          tr: 'import cv2\n\nimg = cv2.imread(\'paralar.jpg\')                     # madeni para saymak\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nblur = cv2.GaussianBlur(gray, (5, 5), 0)           # gürültüyü yumuşat\n_, bw = cv2.threshold(blur, 0, 255,\n                      cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)\nkernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))\nbw = cv2.morphologyEx(bw, cv2.MORPH_OPEN, kernel)  # küçük noktaları sil\nn, labels = cv2.connectedComponents(bw)\nprint(n - 1)                                       # nesne sayısı (0 = arka plan)',
        },
      },
      { type: 'heading', text: { fr: 'Révision du final', en: 'Final review', tr: 'Final tekrarı' } },
      {
        type: 'code',
        code: {
          fr: '✔ Ondelettes de Haar, sous-bandes LL / LH / HL / HH, pyramides\n✔ Compression : redondances, taux, RLE, Huffman, entropie, JPEG\n✔ Érosion, dilatation, ouverture, fermeture, contour\n✔ Contours (Sobel, Canny, Hough), seuillage itératif, Otsu, régions\n✔ Code de chaîne, compacité, moments\n✔ Template matching (SSD, NCC), SIFT, CNN\n✔ Chaîne complète avec OpenCV',
          en: '✔ Haar wavelets, LL / LH / HL / HH subbands, pyramids\n✔ Compression: redundancy, ratio, RLE, Huffman, entropy, JPEG\n✔ Erosion, dilation, opening, closing, boundary\n✔ Edges (Sobel, Canny, Hough), iterative thresholding, Otsu, regions\n✔ Chain code, compactness, moments\n✔ Template matching (SSD, NCC), SIFT, CNN\n✔ Full pipeline with OpenCV',
          tr: '✔ Haar dalgacıkları, LL / LH / HL / HH alt bantları, piramitler\n✔ Sıkıştırma: fazlalıklar, oran, RLE, Huffman, entropi, JPEG\n✔ Aşındırma, genişletme, açma, kapama, sınır\n✔ Kenarlar (Sobel, Canny, Hough), yinelemeli eşikleme, Otsu, bölgeler\n✔ Zincir kod, sıkılık, momentler\n✔ Şablon eşleştirme (SSD, NCC), SIFT, CNN\n✔ OpenCV ile tam akış',
        },
      },
      {
        type: 'exercise',
        question: {
          fr: 'Explique le rôle de chaque étape du programme OpenCV ci-dessus. Pourquoi utilise-t-on THRESH_BINARY_INV, et que se passe-t-il si deux pièces se touchent ?',
          en: 'Explain the role of each step of the OpenCV program above. Why is THRESH_BINARY_INV used, and what happens if two coins touch?',
          tr: 'Yukarıdaki OpenCV programının her adımının görevini açıkla. Neden THRESH_BINARY_INV kullanılır ve iki para birbirine değerse ne olur?',
        },
        solution: {
          fr: 'Niveaux de gris (une seule intensité), flou gaussien (réduire le bruit avant le seuillage), seuil d’Otsu (choisi automatiquement), ouverture (supprimer les petites taches), composantes connexes (étiqueter et compter les objets). BINARY_INV sert quand les pièces sont plus sombres que le fond : elles deviennent blanches (1). Deux pièces qui se touchent forment une seule composante et sont comptées une fois : il faudrait les séparer, par exemple avec une érosion plus forte ou l’algorithme watershed.',
          en: 'Grayscale (a single intensity), Gaussian blur (reduce noise before thresholding), Otsu threshold (picked automatically), opening (remove small specks), connected components (label and count the objects). BINARY_INV is used when the coins are darker than the background: they become white (1). Two touching coins form one component and are counted once: they would need separating, for example with stronger erosion or the watershed algorithm.',
          tr: 'Gri ton (tek bir yoğunluk), Gauss bulanıklığı (eşiklemeden önce gürültüyü azaltmak), Otsu eşiği (otomatik seçilir), açma (küçük lekeleri silmek), bağlantılı bileşenler (nesneleri etiketlemek ve saymak). Paralar arka plandan koyuysa BINARY_INV kullanılır: beyaz (1) olurlar. Birbirine değen iki para tek bir bileşen oluşturur ve bir kez sayılır: onları ayırmak gerekir, örneğin daha güçlü bir aşındırma veya watershed algoritmasıyla.',
        },
      },
    ],
    quiz: {
      question: {
        fr: 'Dans cv2.connectedComponents, pourquoi soustrait-on 1 au nombre d’étiquettes ?',
        en: 'In cv2.connectedComponents, why is 1 subtracted from the number of labels?',
        tr: 'cv2.connectedComponents’te etiket sayısından neden 1 çıkarılır?',
      },
      options: {
        fr: ['Parce que l’étiquette 0 correspond au fond', 'Parce que le premier objet est toujours faux', 'Pour arrondir le résultat'],
        en: ['Because label 0 is the background', 'Because the first object is always wrong', 'To round the result'],
        tr: ['Çünkü 0 etiketi arka plandır', 'Çünkü ilk nesne her zaman yanlıştır', 'Sonucu yuvarlamak için'],
      },
      answerIndex: 0,
      explanation: {
        fr: 'La fonction compte aussi le fond comme une région, avec l’étiquette 0. Le nombre d’objets est donc n − 1.',
        en: 'The function also counts the background as a region, with label 0. The number of objects is therefore n − 1.',
        tr: 'Fonksiyon arka planı da 0 etiketli bir bölge olarak sayar. Bu yüzden nesne sayısı n − 1’dir.',
      },
    },
  },
];
