export const quizAreas = [
  'Criminal Law',
  'Contract Law',
  'Tort Law',
  'Constitutional Law',
];

export const quizQuestionBank = [
  {
    id: 'criminal-1',
    area: 'Criminal Law',
    prompt: 'Which type of crime typically does NOT require a mens rea?',
    options: [
      { key: 'A', text: 'Robbery' },
      { key: 'B', text: 'Murder' },
      { key: 'C', text: 'Strict liability offenses' },
      { key: 'D', text: 'Assault' },
    ],
    correctAnswer: 'C',
    explanation:
      'Strict liability offences can lead to conviction without proving a guilty mind, unlike robbery, murder, and assault which usually require mens rea.',
  },
  {
    id: 'criminal-2',
    area: 'Criminal Law',
    prompt: 'What is the main purpose of bail in criminal proceedings?',
    options: [
      { key: 'A', text: 'To punish the accused before trial' },
      { key: 'B', text: 'To guarantee attendance in court' },
      { key: 'C', text: 'To replace the criminal trial' },
      { key: 'D', text: 'To determine guilt immediately' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bail primarily ensures that the accused returns to court while preserving liberty before trial.',
  },
  {
    id: 'criminal-3',
    area: 'Criminal Law',
    prompt: 'Actus reus refers to which part of a criminal offence?',
    options: [
      { key: 'A', text: 'The guilty intention' },
      { key: 'B', text: 'The unlawful act or omission' },
      { key: 'C', text: 'The sentence imposed' },
      { key: 'D', text: "The accused person's defence" },
    ],
    correctAnswer: 'B',
    explanation:
      'Actus reus is the physical element of a crime, meaning the prohibited act or omission.',
  },
  {
    id: 'criminal-4',
    area: 'Criminal Law',
    prompt: 'Which defence succeeds when the accused acted to avoid an immediate threat of death or serious harm?',
    options: [
      { key: 'A', text: 'Necessity or duress' },
      { key: 'B', text: 'Mistake of law' },
      { key: 'C', text: 'Contributory negligence' },
      { key: 'D', text: 'Estoppel' },
    ],
    correctAnswer: 'A',
    explanation:
      'Necessity or duress may excuse conduct when the accused acted under immediate and serious pressure.',
  },
  {
    id: 'criminal-5',
    area: 'Criminal Law',
    prompt: 'Which court usually determines guilt after hearing evidence at trial?',
    options: [
      { key: 'A', text: 'A trial court' },
      { key: 'B', text: 'A law reform commission' },
      { key: 'C', text: 'A legislative committee' },
      { key: 'D', text: 'A police station' },
    ],
    correctAnswer: 'A',
    explanation:
      'The trial court receives evidence, hears witnesses, and determines guilt or innocence.',
  },
  {
    id: 'contract-1',
    area: 'Contract Law',
    prompt: 'What makes an offer different from an invitation to treat?',
    options: [
      { key: 'A', text: 'An offer shows intention to be bound on acceptance' },
      { key: 'B', text: 'An offer must always be in writing' },
      { key: 'C', text: 'An offer never requires communication' },
      { key: 'D', text: 'An offer cannot be revoked' },
    ],
    correctAnswer: 'A',
    explanation:
      'An offer is a definite promise capable of acceptance, while an invitation to treat only invites negotiations.',
  },
  {
    id: 'contract-2',
    area: 'Contract Law',
    prompt: 'Consideration in contract law usually means:',
    options: [
      { key: 'A', text: "A judge's sympathy for the parties" },
      { key: 'B', text: 'Something of value exchanged between parties' },
      { key: 'C', text: 'A written seal on every contract' },
      { key: 'D', text: 'A contract registered in court' },
    ],
    correctAnswer: 'B',
    explanation:
      "Consideration is the value or promise each party gives in exchange for the other's promise.",
  },
  {
    id: 'contract-3',
    area: 'Contract Law',
    prompt: 'A contract formed under duress is generally:',
    options: [
      { key: 'A', text: 'Voidable at the option of the pressured party' },
      { key: 'B', text: 'Always valid' },
      { key: 'C', text: 'Automatically criminal' },
      { key: 'D', text: 'Converted into a tort claim only' },
    ],
    correctAnswer: 'A',
    explanation:
      'Duress makes a contract voidable because genuine consent was not freely given.',
  },
  {
    id: 'tort-1',
    area: 'Tort Law',
    prompt: 'What is the primary purpose of tort law?',
    options: [
      { key: 'A', text: 'To punish criminal conduct' },
      { key: 'B', text: 'To provide compensation for harm' },
      { key: 'C', text: 'To regulate parliamentary procedure' },
      { key: 'D', text: 'To create new criminal offences' },
    ],
    correctAnswer: 'B',
    explanation:
      "Tort law mainly compensates a person who has suffered loss or injury due to another's wrongful conduct.",
  },
  {
    id: 'tort-2',
    area: 'Tort Law',
    prompt: 'Negligence requires proving which of the following?',
    options: [
      { key: 'A', text: 'Duty, breach, causation, and damage' },
      { key: 'B', text: 'Only intention to harm' },
      { key: 'C', text: 'Only damage without breach' },
      { key: 'D', text: 'A written agreement' },
    ],
    correctAnswer: 'A',
    explanation:
      'A negligence claim requires duty of care, breach, causation, and legally recognized damage.',
  },
  {
    id: 'constitutional-1',
    area: 'Constitutional Law',
    prompt: 'Judicial review allows courts to:',
    options: [
      { key: 'A', text: 'Rewrite the constitution' },
      { key: 'B', text: 'Review the legality of government action' },
      { key: 'C', text: 'Elect members of parliament' },
      { key: 'D', text: 'Create taxes without legislation' },
    ],
    correctAnswer: 'B',
    explanation:
      'Judicial review is the power of courts to assess whether government action complies with the constitution and the law.',
  },
  {
    id: 'constitutional-2',
    area: 'Constitutional Law',
    prompt: 'Separation of powers is meant to:',
    options: [
      { key: 'A', text: 'Concentrate power in one branch' },
      { key: 'B', text: 'Prevent abuse by distributing authority' },
      { key: 'C', text: 'Abolish the judiciary' },
      { key: 'D', text: 'Remove checks and balances' },
    ],
    correctAnswer: 'B',
    explanation:
      'Separating power among branches helps prevent abuse and supports checks and balances.',
  },
];
