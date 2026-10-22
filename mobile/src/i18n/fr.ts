/**
 * French texts: the reference dictionary. `en.ts` and `tr.ts` must have exactly the same shape
 * (enforced by the `Dictionary` type), so a missing translation is a type error.
 * Texts with values are functions, so each language can order the words its own way.
 */
export const fr = {
  common: {
    back: 'Retour',
    cancel: 'Annuler',
    close: 'Fermer',
    progressOf: (title: string) => `Progression ${title}`,
  },
  tabs: {
    home: 'Accueil',
    courses: 'Parcours',
    mentor: 'Mentor IA',
  },
  levels: {
    beginner: 'Débutant',
    intermediate: 'Intermédiaire',
    advanced: 'Avancé',
  },
  home: {
    greeting: 'Bonjour 👋',
    title: 'Prêt à coder aujourd’hui ?',
    resume: 'CONTINUER',
    resumeDetails: (course: string, lesson: number, total: number) => `${course} · Leçon ${lesson}/${total}`,
    resumeButton: 'Continuer ma leçon',
    myCourses: 'Mes parcours',
  },
  courseCard: {
    notStarted: (total: number) => `${total} leçons · Pas encore commencé`,
    lessonsDone: (done: number, total: number) => `${done}/${total} leçons`,
    accessibilityLabel: (title: string, level: string) => `${title}, ${level}. Voir les leçons du parcours`,
  },
  courses: {
    title: 'Parcours',
    inProgress: 'En cours',
    toDiscover: 'À découvrir',
    language: 'Langue',
    myProgress: 'Ma progression',
    noProgress: 'Aucune leçon terminée pour l’instant.',
    resetHint: 'Recommence tous les parcours depuis le début.',
    resetButton: 'Réinitialiser ma progression',
    resetConfirmTitle: 'Réinitialiser ta progression ?',
    resetConfirmMessage:
      'Toutes les leçons terminées seront remises à zéro, dans tous les parcours. Cette action est définitive.',
    resetConfirmLabel: 'Réinitialiser',
  },
  course: {
    fallbackTitle: 'Parcours',
    notFound: 'Parcours introuvable',
    summary: (level: string, total: number) => `${level} · ${total} leçons`,
    finished: 'Parcours terminé 🎉',
    lessonsCompleted: (done: number, total: number) => `${done}/${total} leçons terminées`,
    start: 'Commencer le parcours',
    continue: 'Continuer',
  },
  lessonRow: {
    done: 'Terminée · Revoir',
    next: 'À faire maintenant',
    locked: 'Verrouillée',
    accessibilityLabel: (number: number, title: string, status: string) => `Leçon ${number} : ${title}. ${status}`,
  },
  lesson: {
    fallbackTitle: 'Leçon',
    notFound: 'Leçon introuvable',
    notFoundHint: 'Cette leçon n’existe pas ou n’est plus disponible.',
    locked: 'Leçon verrouillée 🔒',
    lockedHint: (course: string) => `Termine d’abord les leçons précédentes de « ${course} ».`,
    counter: (lesson: number, total: number) => `Leçon ${lesson}/${total}`,
    alreadyDone: ' · Déjà terminée',
    positionOf: (course: string) => `Position dans le parcours ${course}`,
    askMentor: 'Une question ? Demander au mentor',
    answerQuizToFinish: 'Réponds au quiz pour terminer',
    nextLesson: 'Leçon suivante',
    finishCourse: 'Terminer le parcours',
  },
  quiz: {
    label: 'À TOI DE JOUER',
    correct: (explanation: string) => `Bonne réponse ! ${explanation}`,
    wrong: 'Pas tout à fait. Réessaie !',
  },
  mentor: {
    title: 'Mentor IA',
    author: 'Mentor',
    about: (lesson: string, course: string) => `À propos de : ${lesson} · ${course}`,
    welcome:
      'Salut ! Je suis ton mentor. Pose-moi une question sur ton code ou sur une leçon, et je t’explique pas à pas.',
    lessonWelcome: 'Je connais la leçon que tu es en train de suivre. Qu’est-ce qui te bloque ?',
    suggestionsTitle: 'Questions suggérées',
    suggestions: ['Explique-moi une boucle for', 'Pourquoi mon code ne marche pas ?', 'Donne-moi un exercice facile'],
    lessonSuggestions: [
      'Explique-moi cette leçon autrement',
      'Donne-moi un autre exemple',
      'Aide-moi pour le quiz sans me donner la réponse',
    ],
    thinking: 'Le mentor réfléchit…',
    placeholder: 'Pose ta question…',
    inputLabel: 'Ta question pour le mentor',
    send: 'Envoyer',
    startOver: 'Recommencer',
    startOverLabel: 'Nouvelle conversation',
    disclaimer: 'Le mentor est une IA : ses réponses peuvent contenir des erreurs.',
  },
  /** Also used by the server route, so the mentor's errors follow the app language. */
  mentorErrors: {
    unreachable: 'Impossible de joindre le serveur. Vérifie ta connexion et que `npx expo start` tourne.',
    interrupted: 'La réponse du mentor a été interrompue. Réessaie.',
    server: (status: number) => `Le serveur a répondu avec une erreur (${status}).`,
    generic: 'Une erreur est survenue.',
    noApiKey: 'Le serveur n’a pas de clé API (ANTHROPIC_API_KEY manquante dans mobile/.env.local).',
    invalidRequest: 'Message invalide ou trop long.',
    keyRefused: 'Clé API refusée. Vérifie la clé dans mobile/.env.local et le crédit du compte.',
    rateLimited: 'Trop de questions en peu de temps. Attends un peu avant de réessayer.',
    apiUnreachable: 'Le serveur n’arrive pas à joindre l’API Claude. Vérifie la connexion internet.',
    apiError: (status: string) => `Erreur de l’API Claude (${status}). Réessaie plus tard.`,
    unexpected: 'Une erreur inattendue est survenue sur le serveur. Réessaie.',
    truncated: '\n\n(Réponse coupée car trop longue.)',
    refusal:
      'Je ne peux pas répondre à cette demande. Essaie de la reformuler, ou pose-moi une autre question sur le code.',
  },
};

export type Dictionary = typeof fr;
