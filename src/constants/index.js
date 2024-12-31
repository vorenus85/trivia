export const pages = {
  language: 'LANGUAGE',
  category: 'CATEGORY',
  difficulty: 'DIFFICULTY',
  questions: 'QUESTIONS',
  result: 'RESULT',
  detailedResult: 'DETAILED_RESULTS'
}

export const difficulties = [
  { key: 'easy', questions: 8, time: 12 },
  { key: 'medium', questions: 10, time: 10 },
  { key: 'hard', questions: 12, time: 8 }
]

export const translation = {
  hu: {
    chooseLanguage: 'Üdv a Tríviában kérlek válassz nyelvet.',
    chooseCategory: 'Válassz kategóriát.',
    chooseDifficulty: 'Válassz nehézséget.',
    difficultyHint: '[amount] kérdést kapsz amikre [time] másodperc időd lesz válaszolni',
    question: 'Kérdés',
    easy: 'Könnyű',
    medium: 'Közepes',
    hard: 'Nehéz',
    general: 'Általános tudás',
    animals: 'Állatok',
    history: 'Történelem',
    science: 'Tudomány és természet',
    sports: 'Sportok',
    filmsTv: 'Filmek és sorozatok',
    yourScore: 'Pontszám',
    completion: 'Teljesítmény',
    totalQuestion: 'Összes kérdés',
    correct: 'Helyes',
    wrong: 'Rossz',
    playAgain: 'Új játék',
    viewAnswers: 'Válaszok',
    detailedResult: 'Részletes eredmény'
  },
  en: {
    chooseLanguage: 'Hello in Trivia please choose language.',
    chooseCategory: 'Choose category.',
    chooseDifficulty: 'Choose difficulty.',
    difficultyHint: 'Get [amount] questions, each with [time] seconds to answer.',
    question: 'Question',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    general: 'General Knowledge',
    animals: 'Animals',
    history: 'History',
    science: 'Science & Nature',
    sports: 'Sports',
    filmsTv: 'Film & TV',
    yourScore: 'Your score',
    completion: 'Completion',
    totalQuestion: 'Total question',
    correct: 'Correct',
    wrong: 'Wrong',
    playAgain: 'Play again',
    viewAnswers: 'View Answers',
    detailedResult: 'Detailed Results'
  }
}

export const categories = [
  {
    key: 'general',
    id: '9'
  },
  {
    key: 'animals',
    id: '27'
  },
  {
    key: 'history',
    id: '23'
  },
  {
    key: 'science',
    id: '17'
  },
  {
    key: 'sports',
    id: '21'
  },
  {
    key: 'filmsTv',
    id: '14'
  }
]
