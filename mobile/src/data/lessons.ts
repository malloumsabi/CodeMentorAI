/**
 * Placeholder lesson content: one lesson per course, matching `Course.nextLesson`.
 */

export type LessonBlock = { type: 'text'; text: string } | { type: 'code'; code: string };

export type Quiz = {
  question: string;
  code?: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type Lesson = {
  courseId: string;
  blocks: LessonBlock[];
  quiz: Quiz;
};

const lessons: Lesson[] = [
  {
    courseId: 'python-basics',
    blocks: [
      {
        type: 'text',
        text: 'Une boucle for répète des instructions pour chaque élément d’une liste.',
      },
      {
        type: 'code',
        code: 'fruits = ["pomme", "banane", "kiwi"]\nfor fruit in fruits:\n    print(fruit)',
      },
      {
        type: 'text',
        text: 'À chaque tour, la variable fruit prend la valeur suivante de la liste. Le code décalé (indenté) sous le for est exécuté à chaque tour.',
      },
      {
        type: 'text',
        text: 'Pour répéter un nombre précis de fois, on utilise range() :',
      },
      {
        type: 'code',
        code: 'for i in range(3):\n    print(i)  # affiche 0, puis 1, puis 2',
      },
    ],
    quiz: {
      question: 'Qu’affiche ce code ?',
      code: 'for i in range(2):\n    print(i)',
      options: ['1 puis 2', '0 puis 1', '0, 1 puis 2'],
      answerIndex: 1,
      explanation: 'range(2) produit 0 puis 1 : il commence à 0 et s’arrête juste avant 2.',
    },
  },
  {
    courseId: 'javascript-essentials',
    blocks: [
      {
        type: 'text',
        text: 'Une fonction regroupe des instructions sous un nom, pour pouvoir les réutiliser.',
      },
      {
        type: 'code',
        code: 'function saluer(prenom) {\n  return "Bonjour " + prenom;\n}\n\nconsole.log(saluer("Awa")); // Bonjour Awa',
      },
      {
        type: 'text',
        text: 'prenom est un paramètre : une valeur que l’on donne à la fonction quand on l’appelle. return renvoie le résultat.',
      },
    ],
    quiz: {
      question: 'Qu’affiche ce code ?',
      code: 'function double(n) {\n  return n * 2;\n}\n\nconsole.log(double(4));',
      options: ['4', '8', 'n * 2'],
      answerIndex: 1,
      explanation: 'double(4) remplace n par 4 et renvoie 4 * 2, soit 8.',
    },
  },
  {
    courseId: 'html-css',
    blocks: [
      {
        type: 'text',
        text: 'Une page HTML est faite de balises. La plupart ont une ouverture, comme <p>, et une fermeture, comme </p>.',
      },
      {
        type: 'code',
        code: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Ma page</title>\n  </head>\n  <body>\n    <h1>Bonjour !</h1>\n    <p>Ma première page.</p>\n  </body>\n</html>',
      },
      {
        type: 'text',
        text: '<head> contient des informations sur la page, comme son titre dans l’onglet du navigateur. <body> contient ce qui s’affiche à l’écran.',
      },
    ],
    quiz: {
      question: 'Dans quelle balise place-t-on le contenu visible de la page ?',
      options: ['<head>', '<title>', '<body>'],
      answerIndex: 2,
      explanation: 'Tout ce qui s’affiche à l’écran se place dans <body>. <head> décrit la page.',
    },
  },
  {
    courseId: 'algorithms',
    blocks: [
      {
        type: 'text',
        text: 'La complexité mesure comment le temps d’un algorithme augmente quand les données grandissent.',
      },
      {
        type: 'code',
        code: 'def contient(liste, valeur):\n    for element in liste:\n        if element == valeur:\n            return True\n    return False',
      },
      {
        type: 'text',
        text: 'Dans le pire cas, on regarde chaque élément une fois. Si la liste est deux fois plus longue, le temps double aussi : on dit que la complexité est O(n).',
      },
    ],
    quiz: {
      question:
        'Une liste passe de 1 000 à 2 000 éléments. Pour un algorithme en O(n), le temps est environ :',
      options: ['Identique', 'Multiplié par 2', 'Multiplié par 4'],
      answerIndex: 1,
      explanation:
        'En O(n), le temps grandit comme la taille des données : deux fois plus d’éléments, environ deux fois plus de temps.',
    },
  },
];

export function getLesson(courseId: string) {
  return lessons.find((lesson) => lesson.courseId === courseId);
}
