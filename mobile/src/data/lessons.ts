/**
 * Placeholder lesson content, in order, by course id, written in every app language.
 * Screens never read this directly: `getCourses(language)` resolves it to plain texts.
 */

import { blm113Lessons } from '@/data/kbu/blm113';
import { blm320Lessons } from '@/data/kbu/blm320';
import { blm322Lessons } from '@/data/kbu/blm322';
import { kbuLessonsByCourse } from '@/data/kbu-lessons';
import type { Language, Localized } from '@/i18n/languages';

/** A text that is either the same in every language (some code) or written per language. */
type MaybeLocalized = string | Localized;

type LessonBlockSource =
  | { type: 'text'; text: Localized }
  | { type: 'code'; code: MaybeLocalized }
  /** A subtitle inside the lesson, e.g. "Example". */
  | { type: 'heading'; text: Localized }
  /** An exam-style exercise, with its solution hidden until the student asks for it. */
  | { type: 'exercise'; question: Localized; code?: MaybeLocalized; solution: Localized };

type QuizSource = {
  question: Localized;
  code?: MaybeLocalized;
  options: Localized<string[]>;
  answerIndex: number;
  explanation: Localized;
};

export type LessonSource = {
  id: string;
  /** Week of the semester (1–14) for courses that follow the university calendar. */
  week?: number;
  title: Localized;
  blocks: LessonBlockSource[];
  quiz: QuizSource;
};

/** Lesson resolved to one language: what the screens use. */
export type LessonBlock =
  | { type: 'text'; text: string }
  | { type: 'code'; code: string }
  | { type: 'heading'; text: string }
  | { type: 'exercise'; question: string; code?: string; solution: string };

export type Quiz = {
  question: string;
  code?: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type Lesson = {
  id: string;
  week?: number;
  title: string;
  blocks: LessonBlock[];
  quiz: Quiz;
};

function localize(value: MaybeLocalized, language: Language): string {
  return typeof value === 'string' ? value : value[language];
}

function localizeBlock(block: LessonBlockSource, language: Language): LessonBlock {
  switch (block.type) {
    case 'code':
      return { type: 'code', code: localize(block.code, language) };
    case 'exercise':
      return {
        type: 'exercise',
        question: block.question[language],
        code: block.code === undefined ? undefined : localize(block.code, language),
        solution: block.solution[language],
      };
    default:
      return { type: block.type, text: block.text[language] };
  }
}

export function localizeLesson(lesson: LessonSource, language: Language): Lesson {
  const { quiz } = lesson;
  return {
    id: lesson.id,
    week: lesson.week,
    title: lesson.title[language],
    blocks: lesson.blocks.map((block) => localizeBlock(block, language)),
    quiz: {
      question: quiz.question[language],
      code: quiz.code === undefined ? undefined : localize(quiz.code, language),
      options: quiz.options[language],
      answerIndex: quiz.answerIndex,
      explanation: quiz.explanation[language],
    },
  };
}

export const lessonsByCourse: Record<string, LessonSource[]> = {
  'python-basics': [
    {
      id: 'python-variables',
      title: { fr: 'Les variables', en: 'Variables', tr: 'Değişkenler' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Une variable, c’est une boîte avec un nom, dans laquelle on range une valeur.',
            en: 'A variable is a box with a name, in which you store a value.',
            tr: 'Değişken, içine bir değer koyduğumuz, adı olan bir kutudur.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'prenom = "Awa"\nage = 17\nprint(prenom, age)  # Awa 17',
            en: 'name = "Awa"\nage = 17\nprint(name, age)  # Awa 17',
            tr: 'isim = "Ayşe"\nyas = 17\nprint(isim, yas)  # Ayşe 17',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Le signe = ne veut pas dire « égal » : il range la valeur de droite dans la variable de gauche. On peut changer cette valeur plus tard.',
            en: 'The = sign doesn’t mean “equals”: it stores the value on the right in the variable on the left. You can change that value later.',
            tr: '= işareti “eşittir” anlamına gelmez: sağdaki değeri soldaki değişkene koyar. Bu değeri daha sonra değiştirebilirsin.',
          },
        },
      ],
      quiz: {
        question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
        code: {
          fr: 'score = 10\nscore = score + 5\nprint(score)',
          en: 'score = 10\nscore = score + 5\nprint(score)',
          tr: 'puan = 10\npuan = puan + 5\nprint(puan)',
        },
        options: {
          fr: ['10', '15', 'score + 5'],
          en: ['10', '15', 'score + 5'],
          tr: ['10', '15', 'puan + 5'],
        },
        answerIndex: 1,
        explanation: {
          fr: 'score vaut d’abord 10, puis on y range 10 + 5, soit 15.',
          en: 'score is 10 at first, then we store 10 + 5 in it, which is 15.',
          tr: 'puan önce 10’dur, sonra içine 10 + 5, yani 15 koyulur.',
        },
      },
    },
    {
      id: 'python-conditions',
      title: { fr: 'Les conditions if', en: 'if conditions', tr: 'if koşulları' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'if permet d’exécuter du code seulement si une condition est vraie. else gère le cas contraire.',
            en: 'if runs code only when a condition is true. else handles the opposite case.',
            tr: 'if, kodu yalnızca bir koşul doğruysa çalıştırır. else ise tersi durumu ele alır.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'age = 17\nif age >= 18:\n    print("Majeur")\nelse:\n    print("Mineur")',
            en: 'age = 17\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")',
            tr: 'yas = 17\nif yas >= 18:\n    print("Reşit")\nelse:\n    print("Reşit değil")',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Les deux-points et le décalage (indentation) indiquent quel code appartient au if et lequel appartient au else.',
            en: 'The colon and the indentation show which code belongs to the if and which belongs to the else.',
            tr: 'İki nokta üst üste ve girinti, hangi kodun if’e, hangisinin else’e ait olduğunu gösterir.',
          },
        },
      ],
      quiz: {
        question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
        code: {
          fr: 'note = 12\nif note >= 10:\n    print("Réussi")\nelse:\n    print("Raté")',
          en: 'grade = 12\nif grade >= 10:\n    print("Passed")\nelse:\n    print("Failed")',
          tr: 'not_ = 12\nif not_ >= 10:\n    print("Geçti")\nelse:\n    print("Kaldı")',
        },
        options: {
          fr: ['Réussi', 'Raté', 'Rien du tout'],
          en: ['Passed', 'Failed', 'Nothing at all'],
          tr: ['Geçti', 'Kaldı', 'Hiçbir şey'],
        },
        answerIndex: 0,
        explanation: {
          fr: '12 est bien supérieur ou égal à 10, donc c’est le bloc du if qui s’exécute.',
          en: '12 is greater than or equal to 10, so the if block runs.',
          tr: '12, 10’dan büyük ya da eşit olduğu için if bloğu çalışır.',
        },
      },
    },
    {
      id: 'python-loops',
      title: { fr: 'Les boucles for', en: 'for loops', tr: 'for döngüleri' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Une boucle for répète des instructions pour chaque élément d’une liste.',
            en: 'A for loop repeats instructions for each item of a list.',
            tr: 'for döngüsü, bir listenin her elemanı için komutları tekrarlar.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'fruits = ["pomme", "banane", "kiwi"]\nfor fruit in fruits:\n    print(fruit)',
            en: 'fruits = ["apple", "banana", "kiwi"]\nfor fruit in fruits:\n    print(fruit)',
            tr: 'meyveler = ["elma", "muz", "kivi"]\nfor meyve in meyveler:\n    print(meyve)',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'À chaque tour, la variable fruit prend la valeur suivante de la liste. Le code décalé (indenté) sous le for est exécuté à chaque tour.',
            en: 'On each turn, the fruit variable takes the next value of the list. The indented code under the for runs on each turn.',
            tr: 'Her turda meyve değişkeni listenin sıradaki değerini alır. for’un altındaki girintili kod her turda çalışır.',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Pour répéter un nombre précis de fois, on utilise range() :',
            en: 'To repeat an exact number of times, use range():',
            tr: 'Belirli bir sayıda tekrarlamak için range() kullanılır:',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'for i in range(3):\n    print(i)  # affiche 0, puis 1, puis 2',
            en: 'for i in range(3):\n    print(i)  # prints 0, then 1, then 2',
            tr: 'for i in range(3):\n    print(i)  # önce 0, sonra 1, sonra 2 yazdırır',
          },
        },
      ],
      quiz: {
        question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
        code: 'for i in range(2):\n    print(i)',
        options: {
          fr: ['1 puis 2', '0 puis 1', '0, 1 puis 2'],
          en: ['1 then 2', '0 then 1', '0, 1 then 2'],
          tr: ['1 sonra 2', '0 sonra 1', '0, 1 sonra 2'],
        },
        answerIndex: 1,
        explanation: {
          fr: 'range(2) produit 0 puis 1 : il commence à 0 et s’arrête juste avant 2.',
          en: 'range(2) produces 0 then 1: it starts at 0 and stops just before 2.',
          tr: 'range(2) önce 0, sonra 1 üretir: 0’dan başlar ve 2’den hemen önce durur.',
        },
      },
    },
  ],
  'javascript-essentials': [
    {
      id: 'js-variables',
      title: { fr: 'let et const', en: 'let and const', tr: 'let ve const' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'En JavaScript, on crée une variable avec let si sa valeur peut changer, et avec const si elle ne doit jamais changer.',
            en: 'In JavaScript, you create a variable with let if its value can change, and with const if it must never change.',
            tr: 'JavaScript’te değeri değişebilecek bir değişkeni let ile, hiç değişmemesi gerekeni const ile oluştururuz.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'const prenom = "Awa";\nlet score = 0;\nscore = score + 10;\n\nconsole.log(prenom, score); // Awa 10',
            en: 'const name = "Awa";\nlet score = 0;\nscore = score + 10;\n\nconsole.log(name, score); // Awa 10',
            tr: 'const isim = "Ayşe";\nlet puan = 0;\npuan = puan + 10;\n\nconsole.log(isim, puan); // Ayşe 10',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Essayer de changer une variable const provoque une erreur. Par défaut, préfère const, et utilise let seulement quand c’est nécessaire.',
            en: 'Trying to change a const variable causes an error. Prefer const by default, and use let only when needed.',
            tr: 'Bir const değişkeni değiştirmeye çalışmak hataya yol açar. Varsayılan olarak const’u tercih et, let’i yalnızca gerektiğinde kullan.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Quel mot utiliser pour un compteur qui augmente à chaque clic ?',
          en: 'Which keyword should you use for a counter that goes up on each click?',
          tr: 'Her tıklamada artan bir sayaç için hangi kelime kullanılmalı?',
        },
        options: {
          fr: ['const', 'let', 'Les deux conviennent'],
          en: ['const', 'let', 'Both work'],
          tr: ['const', 'let', 'İkisi de olur'],
        },
        answerIndex: 1,
        explanation: {
          fr: 'La valeur d’un compteur change, il faut donc let. Avec const, la modification provoquerait une erreur.',
          en: 'A counter’s value changes, so you need let. With const, changing it would cause an error.',
          tr: 'Sayacın değeri değişir, bu yüzden let gerekir. const ile değiştirmek hataya yol açardı.',
        },
      },
    },
    {
      id: 'js-functions',
      title: { fr: 'Les fonctions', en: 'Functions', tr: 'Fonksiyonlar' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Une fonction regroupe des instructions sous un nom, pour pouvoir les réutiliser.',
            en: 'A function groups instructions under a name, so you can reuse them.',
            tr: 'Fonksiyon, komutları tekrar kullanabilmek için bir isim altında toplar.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'function saluer(prenom) {\n  return "Bonjour " + prenom;\n}\n\nconsole.log(saluer("Awa")); // Bonjour Awa',
            en: 'function greet(name) {\n  return "Hello " + name;\n}\n\nconsole.log(greet("Awa")); // Hello Awa',
            tr: 'function selamla(isim) {\n  return "Merhaba " + isim;\n}\n\nconsole.log(selamla("Ayşe")); // Merhaba Ayşe',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'prenom est un paramètre : une valeur que l’on donne à la fonction quand on l’appelle. return renvoie le résultat.',
            en: 'name is a parameter: a value you give the function when you call it. return sends back the result.',
            tr: 'isim bir parametredir: fonksiyonu çağırırken ona verdiğimiz bir değer. return sonucu geri döndürür.',
          },
        },
      ],
      quiz: {
        question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
        code: {
          fr: 'function double(n) {\n  return n * 2;\n}\n\nconsole.log(double(4));',
          en: 'function double(n) {\n  return n * 2;\n}\n\nconsole.log(double(4));',
          tr: 'function ikiKat(n) {\n  return n * 2;\n}\n\nconsole.log(ikiKat(4));',
        },
        options: { fr: ['4', '8', 'n * 2'], en: ['4', '8', 'n * 2'], tr: ['4', '8', 'n * 2'] },
        answerIndex: 1,
        explanation: {
          fr: 'double(4) remplace n par 4 et renvoie 4 * 2, soit 8.',
          en: 'double(4) replaces n with 4 and returns 4 * 2, which is 8.',
          tr: 'ikiKat(4), n yerine 4 koyar ve 4 * 2, yani 8 döndürür.',
        },
      },
    },
    {
      id: 'js-arrays',
      title: { fr: 'Les tableaux', en: 'Arrays', tr: 'Diziler' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Un tableau range plusieurs valeurs dans l’ordre. On accède à chaque valeur par sa position, qui commence à 0.',
            en: 'An array stores several values in order. You access each value by its position, which starts at 0.',
            tr: 'Dizi, birden fazla değeri sırayla saklar. Her değere, 0’dan başlayan konumuyla erişilir.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'const langages = ["Python", "JavaScript", "HTML"];\n\nconsole.log(langages[0]);      // Python\nconsole.log(langages.length);  // 3',
            en: 'const languages = ["Python", "JavaScript", "HTML"];\n\nconsole.log(languages[0]);      // Python\nconsole.log(languages.length);  // 3',
            tr: 'const diller = ["Python", "JavaScript", "HTML"];\n\nconsole.log(diller[0]);      // Python\nconsole.log(diller.length);  // 3',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'length donne le nombre d’éléments. push() ajoute un élément à la fin du tableau.',
            en: 'length gives the number of items. push() adds an item at the end of the array.',
            tr: 'length eleman sayısını verir. push() dizinin sonuna bir eleman ekler.',
          },
        },
      ],
      quiz: {
        question: { fr: 'Qu’affiche ce code ?', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' },
        code: {
          fr: 'const notes = [12, 15, 9];\nconsole.log(notes[1]);',
          en: 'const grades = [12, 15, 9];\nconsole.log(grades[1]);',
          tr: 'const notlar = [12, 15, 9];\nconsole.log(notlar[1]);',
        },
        options: { fr: ['12', '15', '9'], en: ['12', '15', '9'], tr: ['12', '15', '9'] },
        answerIndex: 1,
        explanation: {
          fr: 'Les positions commencent à 0 : notes[0] vaut 12, donc notes[1] vaut 15.',
          en: 'Positions start at 0: grades[0] is 12, so grades[1] is 15.',
          tr: 'Konumlar 0’dan başlar: notlar[0] 12’dir, yani notlar[1] 15’tir.',
        },
      },
    },
  ],
  'html-css': [
    {
      id: 'html-structure',
      title: { fr: 'Structure d’une page', en: 'Structure of a page', tr: 'Bir sayfanın yapısı' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Une page HTML est faite de balises. La plupart ont une ouverture, comme <p>, et une fermeture, comme </p>.',
            en: 'An HTML page is made of tags. Most have an opening tag, like <p>, and a closing tag, like </p>.',
            tr: 'Bir HTML sayfası etiketlerden oluşur. Çoğunun <p> gibi bir açılışı ve </p> gibi bir kapanışı vardır.',
          },
        },
        {
          type: 'code',
          code: {
            fr: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Ma page</title>\n  </head>\n  <body>\n    <h1>Bonjour !</h1>\n    <p>Ma première page.</p>\n  </body>\n</html>',
            en: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My page</title>\n  </head>\n  <body>\n    <h1>Hello!</h1>\n    <p>My first page.</p>\n  </body>\n</html>',
            tr: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Sayfam</title>\n  </head>\n  <body>\n    <h1>Merhaba!</h1>\n    <p>İlk sayfam.</p>\n  </body>\n</html>',
          },
        },
        {
          type: 'text',
          text: {
            fr: '<head> contient des informations sur la page, comme son titre dans l’onglet du navigateur. <body> contient ce qui s’affiche à l’écran.',
            en: '<head> holds information about the page, like its title in the browser tab. <body> holds what is shown on screen.',
            tr: '<head>, tarayıcı sekmesindeki başlık gibi sayfa hakkındaki bilgileri içerir. <body> ekranda görünenleri içerir.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Dans quelle balise place-t-on le contenu visible de la page ?',
          en: 'In which tag do you put the visible content of the page?',
          tr: 'Sayfanın görünen içeriği hangi etikete yazılır?',
        },
        options: {
          fr: ['<head>', '<title>', '<body>'],
          en: ['<head>', '<title>', '<body>'],
          tr: ['<head>', '<title>', '<body>'],
        },
        answerIndex: 2,
        explanation: {
          fr: 'Tout ce qui s’affiche à l’écran se place dans <body>. <head> décrit la page.',
          en: 'Everything shown on screen goes in <body>. <head> describes the page.',
          tr: 'Ekranda görünen her şey <body> içine yazılır. <head> sayfayı tanımlar.',
        },
      },
    },
    {
      id: 'html-links-images',
      title: { fr: 'Liens et images', en: 'Links and images', tr: 'Bağlantılar ve resimler' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'La balise <a> crée un lien. Son attribut href indique l’adresse vers laquelle il mène.',
            en: 'The <a> tag creates a link. Its href attribute gives the address it leads to.',
            tr: '<a> etiketi bir bağlantı oluşturur. href özniteliği, bağlantının gittiği adresi belirtir.',
          },
        },
        { type: 'code', code: '<a href="https://developer.mozilla.org">MDN</a>' },
        {
          type: 'text',
          text: {
            fr: 'La balise <img> affiche une image. Elle n’a pas de fermeture. src donne le fichier, et alt décrit l’image pour les personnes qui ne la voient pas.',
            en: 'The <img> tag shows an image. It has no closing tag. src gives the file, and alt describes the image for people who can’t see it.',
            tr: '<img> etiketi bir resim gösterir. Kapanış etiketi yoktur. src dosyayı belirtir, alt ise resmi göremeyenler için tanımlar.',
          },
        },
        {
          type: 'code',
          code: {
            fr: '<img src="chat.jpg" alt="Un chat roux endormi">',
            en: '<img src="cat.jpg" alt="A sleeping ginger cat">',
            tr: '<img src="kedi.jpg" alt="Uyuyan sarı bir kedi">',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Quel attribut donne l’adresse d’un lien ?',
          en: 'Which attribute gives the address of a link?',
          tr: 'Bir bağlantının adresini hangi öznitelik verir?',
        },
        options: { fr: ['src', 'href', 'alt'], en: ['src', 'href', 'alt'], tr: ['src', 'href', 'alt'] },
        answerIndex: 1,
        explanation: {
          fr: 'href donne la destination d’un lien <a>. src sert aux images, alt à leur description.',
          en: 'href gives the destination of an <a> link. src is for images, alt for their description.',
          tr: 'href, bir <a> bağlantısının hedefini verir. src resimler için, alt ise açıklamaları için kullanılır.',
        },
      },
    },
    {
      id: 'css-first-styles',
      title: { fr: 'Premiers styles CSS', en: 'First CSS styles', tr: 'İlk CSS stilleri' },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Le CSS décrit l’apparence de la page. Une règle choisit des éléments (le sélecteur), puis leur donne des propriétés.',
            en: 'CSS describes how the page looks. A rule selects elements (the selector), then gives them properties.',
            tr: 'CSS sayfanın görünümünü tanımlar. Bir kural öğeleri seçer (seçici), sonra onlara özellikler verir.',
          },
        },
        { type: 'code', code: 'h1 {\n  color: indigo;\n  font-size: 32px;\n}' },
        {
          type: 'text',
          text: {
            fr: 'Ici, tous les titres <h1> deviennent indigo, avec une taille de 32 pixels. Chaque propriété se termine par un point-virgule.',
            en: 'Here, every <h1> heading becomes indigo, 32 pixels in size. Each property ends with a semicolon.',
            tr: 'Burada tüm <h1> başlıkları 32 piksel boyutunda ve çivit mavisi olur. Her özellik noktalı virgülle biter.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Dans « p { color: red; } », quel est le sélecteur ?',
          en: 'In “p { color: red; }”, what is the selector?',
          tr: '“p { color: red; }” içinde seçici hangisidir?',
        },
        options: { fr: ['p', 'color', 'red'], en: ['p', 'color', 'red'], tr: ['p', 'color', 'red'] },
        answerIndex: 0,
        explanation: {
          fr: 'Le sélecteur p choisit tous les paragraphes. color est la propriété, red sa valeur.',
          en: 'The p selector picks every paragraph. color is the property, red its value.',
          tr: 'p seçicisi tüm paragrafları seçer. color özelliktir, red ise değeridir.',
        },
      },
    },
  ],
  algorithms: [
    {
      id: 'algo-intro',
      title: {
        fr: 'Qu’est-ce qu’un algorithme ?',
        en: 'What is an algorithm?',
        tr: 'Algoritma nedir?',
      },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Un algorithme est une suite d’étapes précises pour résoudre un problème, comme une recette de cuisine.',
            en: 'An algorithm is a sequence of precise steps to solve a problem, like a cooking recipe.',
            tr: 'Algoritma, bir problemi çözmek için izlenen kesin adımlar dizisidir; bir yemek tarifi gibi.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'def plus_grand(a, b):\n    if a > b:\n        return a\n    return b\n\nprint(plus_grand(4, 9))  # 9',
            en: 'def largest(a, b):\n    if a > b:\n        return a\n    return b\n\nprint(largest(4, 9))  # 9',
            tr: 'def buyuk_olan(a, b):\n    if a > b:\n        return a\n    return b\n\nprint(buyuk_olan(4, 9))  # 9',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Un bon algorithme donne toujours le bon résultat, se termine, et n’effectue pas d’étapes inutiles.',
            en: 'A good algorithm always gives the right result, finishes, and doesn’t take useless steps.',
            tr: 'İyi bir algoritma her zaman doğru sonucu verir, sona erer ve gereksiz adımlar atmaz.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Que renvoie plus_grand(7, 3) ?',
          en: 'What does largest(7, 3) return?',
          tr: 'buyuk_olan(7, 3) ne döndürür?',
        },
        options: { fr: ['3', '7', '10'], en: ['3', '7', '10'], tr: ['3', '7', '10'] },
        answerIndex: 1,
        explanation: {
          fr: '7 est plus grand que 3, donc la condition a > b est vraie et la fonction renvoie a, soit 7.',
          en: '7 is greater than 3, so the condition a > b is true and the function returns a, which is 7.',
          tr: '7, 3’ten büyüktür; bu yüzden a > b koşulu doğrudur ve fonksiyon a’yı, yani 7’yi döndürür.',
        },
      },
    },
    {
      id: 'algo-complexity',
      title: {
        fr: 'Complexité et notation O',
        en: 'Complexity and big O notation',
        tr: 'Karmaşıklık ve büyük O gösterimi',
      },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'La complexité mesure comment le temps d’un algorithme augmente quand les données grandissent.',
            en: 'Complexity measures how an algorithm’s running time grows when the data grows.',
            tr: 'Karmaşıklık, veri büyüdükçe bir algoritmanın çalışma süresinin nasıl arttığını ölçer.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'def contient(liste, valeur):\n    for element in liste:\n        if element == valeur:\n            return True\n    return False',
            en: 'def contains(items, value):\n    for item in items:\n        if item == value:\n            return True\n    return False',
            tr: 'def iceriyor_mu(liste, deger):\n    for eleman in liste:\n        if eleman == deger:\n            return True\n    return False',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'Dans le pire cas, on regarde chaque élément une fois. Si la liste est deux fois plus longue, le temps double aussi : on dit que la complexité est O(n).',
            en: 'In the worst case, we look at each item once. If the list is twice as long, the time doubles too: we say the complexity is O(n).',
            tr: 'En kötü durumda her elemana bir kez bakarız. Liste iki kat uzarsa süre de iki katına çıkar: karmaşıklık O(n) denir.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'Une liste passe de 1 000 à 2 000 éléments. Pour un algorithme en O(n), le temps est environ :',
          en: 'A list grows from 1,000 to 2,000 items. For an O(n) algorithm, the time is about:',
          tr: 'Bir liste 1.000 elemandan 2.000 elemana çıkıyor. O(n) bir algoritma için süre yaklaşık olarak:',
        },
        options: {
          fr: ['Identique', 'Multiplié par 2', 'Multiplié par 4'],
          en: ['The same', 'Twice as long', 'Four times as long'],
          tr: ['Aynı kalır', 'İki katına çıkar', 'Dört katına çıkar'],
        },
        answerIndex: 1,
        explanation: {
          fr: 'En O(n), le temps grandit comme la taille des données : deux fois plus d’éléments, environ deux fois plus de temps.',
          en: 'With O(n), time grows like the size of the data: twice as many items, about twice as much time.',
          tr: 'O(n) için süre, veri boyutuyla birlikte artar: iki kat eleman, yaklaşık iki kat süre demektir.',
        },
      },
    },
    {
      id: 'algo-binary-search',
      title: {
        fr: 'La recherche dichotomique',
        en: 'Binary search',
        tr: 'İkili arama',
      },
      blocks: [
        {
          type: 'text',
          text: {
            fr: 'Dans une liste triée, on peut trouver une valeur bien plus vite : on regarde le milieu, puis on garde seulement la moitié où la valeur peut se trouver.',
            en: 'In a sorted list, you can find a value much faster: look at the middle, then keep only the half where the value can be.',
            tr: 'Sıralı bir listede bir değeri çok daha hızlı bulabiliriz: ortaya bakarız, sonra yalnızca değerin bulunabileceği yarıyı tutarız.',
          },
        },
        {
          type: 'code',
          code: {
            fr: 'Chercher 42 dans [3, 8, 15, 23, 42, 57, 61]\n\n1. Milieu : 23  → 42 est plus grand, on garde la droite\n2. Milieu : 57  → 42 est plus petit, on garde la gauche\n3. Milieu : 42  → trouvé !',
            en: 'Find 42 in [3, 8, 15, 23, 42, 57, 61]\n\n1. Middle: 23  → 42 is bigger, keep the right side\n2. Middle: 57  → 42 is smaller, keep the left side\n3. Middle: 42  → found!',
            tr: '[3, 8, 15, 23, 42, 57, 61] içinde 42’yi ara\n\n1. Orta: 23  → 42 daha büyük, sağ tarafı tut\n2. Orta: 57  → 42 daha küçük, sol tarafı tut\n3. Orta: 42  → bulundu!',
          },
        },
        {
          type: 'text',
          text: {
            fr: 'À chaque étape, la zone de recherche est coupée en deux. Cette méthode est en O(log n) : même pour un million d’éléments, une vingtaine d’étapes suffisent.',
            en: 'At each step, the search area is cut in half. This method is O(log n): even for a million items, about twenty steps are enough.',
            tr: 'Her adımda arama alanı ikiye bölünür. Bu yöntem O(log n)’dir: bir milyon eleman için bile yaklaşık yirmi adım yeterlidir.',
          },
        },
      ],
      quiz: {
        question: {
          fr: 'De quoi la recherche dichotomique a-t-elle besoin pour fonctionner ?',
          en: 'What does binary search need in order to work?',
          tr: 'İkili aramanın çalışması için ne gerekir?',
        },
        options: {
          fr: ['D’une liste triée', 'D’une liste courte', 'De valeurs toutes différentes'],
          en: ['A sorted list', 'A short list', 'All values being different'],
          tr: ['Sıralı bir liste', 'Kısa bir liste', 'Tüm değerlerin farklı olması'],
        },
        answerIndex: 0,
        explanation: {
          fr: 'Elle compare la valeur au milieu pour savoir de quel côté continuer : cela ne marche que si la liste est triée.',
          en: 'It compares the value with the middle to know which side to continue on: that only works if the list is sorted.',
          tr: 'Hangi taraftan devam edeceğini bilmek için değeri ortadaki elemanla karşılaştırır: bu yalnızca liste sıralıysa işe yarar.',
        },
      },
    },
  ],
  ...kbuLessonsByCourse,
  'kbu-blm113': blm113Lessons,
  'kbu-blm320': blm320Lessons,
  'kbu-blm322': blm322Lessons,
};
