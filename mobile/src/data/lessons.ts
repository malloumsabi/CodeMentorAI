/**
 * Placeholder lesson content, in order, by course id.
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
  id: string;
  title: string;
  blocks: LessonBlock[];
  quiz: Quiz;
};

export const lessonsByCourse: Record<string, Lesson[]> = {
  'python-basics': [
    {
      id: 'python-variables',
      title: 'Les variables',
      blocks: [
        {
          type: 'text',
          text: 'Une variable, c’est une boîte avec un nom, dans laquelle on range une valeur.',
        },
        { type: 'code', code: 'prenom = "Awa"\nage = 17\nprint(prenom, age)  # Awa 17' },
        {
          type: 'text',
          text: 'Le signe = ne veut pas dire « égal » : il range la valeur de droite dans la variable de gauche. On peut changer cette valeur plus tard.',
        },
      ],
      quiz: {
        question: 'Qu’affiche ce code ?',
        code: 'score = 10\nscore = score + 5\nprint(score)',
        options: ['10', '15', 'score + 5'],
        answerIndex: 1,
        explanation: 'score vaut d’abord 10, puis on y range 10 + 5, soit 15.',
      },
    },
    {
      id: 'python-conditions',
      title: 'Les conditions if',
      blocks: [
        {
          type: 'text',
          text: 'if permet d’exécuter du code seulement si une condition est vraie. else gère le cas contraire.',
        },
        {
          type: 'code',
          code: 'age = 17\nif age >= 18:\n    print("Majeur")\nelse:\n    print("Mineur")',
        },
        {
          type: 'text',
          text: 'Les deux-points et le décalage (indentation) indiquent quel code appartient au if et lequel appartient au else.',
        },
      ],
      quiz: {
        question: 'Qu’affiche ce code ?',
        code: 'note = 12\nif note >= 10:\n    print("Réussi")\nelse:\n    print("Raté")',
        options: ['Réussi', 'Raté', 'Rien du tout'],
        answerIndex: 0,
        explanation: '12 est bien supérieur ou égal à 10, donc c’est le bloc du if qui s’exécute.',
      },
    },
    {
      id: 'python-loops',
      title: 'Les boucles for',
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
        { type: 'text', text: 'Pour répéter un nombre précis de fois, on utilise range() :' },
        { type: 'code', code: 'for i in range(3):\n    print(i)  # affiche 0, puis 1, puis 2' },
      ],
      quiz: {
        question: 'Qu’affiche ce code ?',
        code: 'for i in range(2):\n    print(i)',
        options: ['1 puis 2', '0 puis 1', '0, 1 puis 2'],
        answerIndex: 1,
        explanation: 'range(2) produit 0 puis 1 : il commence à 0 et s’arrête juste avant 2.',
      },
    },
  ],
  'javascript-essentials': [
    {
      id: 'js-variables',
      title: 'let et const',
      blocks: [
        {
          type: 'text',
          text: 'En JavaScript, on crée une variable avec let si sa valeur peut changer, et avec const si elle ne doit jamais changer.',
        },
        {
          type: 'code',
          code: 'const prenom = "Awa";\nlet score = 0;\nscore = score + 10;\n\nconsole.log(prenom, score); // Awa 10',
        },
        {
          type: 'text',
          text: 'Essayer de changer une variable const provoque une erreur. Par défaut, préfère const, et utilise let seulement quand c’est nécessaire.',
        },
      ],
      quiz: {
        question: 'Quel mot utiliser pour un compteur qui augmente à chaque clic ?',
        options: ['const', 'let', 'Les deux conviennent'],
        answerIndex: 1,
        explanation: 'La valeur d’un compteur change, il faut donc let. Avec const, la modification provoquerait une erreur.',
      },
    },
    {
      id: 'js-functions',
      title: 'Les fonctions',
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
      id: 'js-arrays',
      title: 'Les tableaux',
      blocks: [
        {
          type: 'text',
          text: 'Un tableau range plusieurs valeurs dans l’ordre. On accède à chaque valeur par sa position, qui commence à 0.',
        },
        {
          type: 'code',
          code: 'const langages = ["Python", "JavaScript", "HTML"];\n\nconsole.log(langages[0]);      // Python\nconsole.log(langages.length);  // 3',
        },
        {
          type: 'text',
          text: 'length donne le nombre d’éléments. push() ajoute un élément à la fin du tableau.',
        },
      ],
      quiz: {
        question: 'Qu’affiche ce code ?',
        code: 'const notes = [12, 15, 9];\nconsole.log(notes[1]);',
        options: ['12', '15', '9'],
        answerIndex: 1,
        explanation: 'Les positions commencent à 0 : notes[0] vaut 12, donc notes[1] vaut 15.',
      },
    },
  ],
  'html-css': [
    {
      id: 'html-structure',
      title: 'Structure d’une page',
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
      id: 'html-links-images',
      title: 'Liens et images',
      blocks: [
        {
          type: 'text',
          text: 'La balise <a> crée un lien. Son attribut href indique l’adresse vers laquelle il mène.',
        },
        { type: 'code', code: '<a href="https://developer.mozilla.org">Documentation MDN</a>' },
        {
          type: 'text',
          text: 'La balise <img> affiche une image. Elle n’a pas de fermeture. src donne le fichier, et alt décrit l’image pour les personnes qui ne la voient pas.',
        },
        { type: 'code', code: '<img src="chat.jpg" alt="Un chat roux endormi">' },
      ],
      quiz: {
        question: 'Quel attribut donne l’adresse d’un lien ?',
        options: ['src', 'href', 'alt'],
        answerIndex: 1,
        explanation: 'href donne la destination d’un lien <a>. src sert aux images, alt à leur description.',
      },
    },
    {
      id: 'css-first-styles',
      title: 'Premiers styles CSS',
      blocks: [
        {
          type: 'text',
          text: 'Le CSS décrit l’apparence de la page. Une règle choisit des éléments (le sélecteur), puis leur donne des propriétés.',
        },
        { type: 'code', code: 'h1 {\n  color: indigo;\n  font-size: 32px;\n}' },
        {
          type: 'text',
          text: 'Ici, tous les titres <h1> deviennent indigo, avec une taille de 32 pixels. Chaque propriété se termine par un point-virgule.',
        },
      ],
      quiz: {
        question: 'Dans « p { color: red; } », quel est le sélecteur ?',
        options: ['p', 'color', 'red'],
        answerIndex: 0,
        explanation: 'Le sélecteur p choisit tous les paragraphes. color est la propriété, red sa valeur.',
      },
    },
  ],
  algorithms: [
    {
      id: 'algo-intro',
      title: 'Qu’est-ce qu’un algorithme ?',
      blocks: [
        {
          type: 'text',
          text: 'Un algorithme est une suite d’étapes précises pour résoudre un problème, comme une recette de cuisine.',
        },
        {
          type: 'code',
          code: 'def plus_grand(a, b):\n    if a > b:\n        return a\n    return b\n\nprint(plus_grand(4, 9))  # 9',
        },
        {
          type: 'text',
          text: 'Un bon algorithme donne toujours le bon résultat, se termine, et n’effectue pas d’étapes inutiles.',
        },
      ],
      quiz: {
        question: 'Que renvoie plus_grand(7, 3) ?',
        options: ['3', '7', '10'],
        answerIndex: 1,
        explanation: '7 est plus grand que 3, donc la condition a > b est vraie et la fonction renvoie a, soit 7.',
      },
    },
    {
      id: 'algo-complexity',
      title: 'Complexité et notation O',
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
    {
      id: 'algo-binary-search',
      title: 'La recherche dichotomique',
      blocks: [
        {
          type: 'text',
          text: 'Dans une liste triée, on peut trouver une valeur bien plus vite : on regarde le milieu, puis on garde seulement la moitié où la valeur peut se trouver.',
        },
        {
          type: 'code',
          code: 'Chercher 42 dans [3, 8, 15, 23, 42, 57, 61]\n\n1. Milieu : 23  → 42 est plus grand, on garde la droite\n2. Milieu : 57  → 42 est plus petit, on garde la gauche\n3. Milieu : 42  → trouvé !',
        },
        {
          type: 'text',
          text: 'À chaque étape, la zone de recherche est coupée en deux. Cette méthode est en O(log n) : même pour un million d’éléments, une vingtaine d’étapes suffisent.',
        },
      ],
      quiz: {
        question: 'De quoi la recherche dichotomique a-t-elle besoin pour fonctionner ?',
        options: ['D’une liste triée', 'D’une liste courte', 'De valeurs toutes différentes'],
        answerIndex: 0,
        explanation:
          'Elle compare la valeur au milieu pour savoir de quel côté continuer : cela ne marche que si la liste est triée.',
      },
    },
  ],
};
