const kofiMensahCase = {
  id: 'case-kofi-mensah',
  title: 'The Republic v. Kofi Mensah',
  court: 'Supreme Court of Ghana',
  citation: '[2023] GHASC 15',
  area: 'Administrative Law',
  coram: 'Anin-Yeboah CJ, Dotse JSC, Appau JSC',
  facts: [
    'The accused allegedly robbed a shopkeeper at night.',
    'Witnesses claimed they saw Mensah fleeing the scene.',
  ],
  factsText:
    'Kofi Mensah was charged with robbery under the Criminal Offences Act, 1960 (Act 29). It was alleged that on the 3rd of January 2022, he attacked and robbed a shopkeeper in Kumasi. Mensah denied the charges, claiming mistaken identity. The case escalated to the Supreme Court after an appeal from the Court of Appeal.',
  issues: [
    'Whether the identification of Mensah was reliable.',
    'Whether the conviction at the lower court was valid.',
  ],
  decisionHolding: 'The Supreme Court overturned the conviction.',
  reasoning: [
    'Whether the conviction at the lower court was valid.',
    'Identification evidence was unreliable; prosecution failed to prove guilt beyond reasonable doubt.',
  ],
  significance:
    'Reinforces the principle that criminal convictions must rest on strong, reliable identification evidence.',
  relatedCases: ['Republic v. Arthur [2018] GHASC 10', 'Republic v. Boateng [2015] GCA 22'],
};

export const mockStudentProfile = {
  role: 'Law Student',
  fullName: 'Ekohah Wiseman',
  notificationCount: 8,
};

export const mockDashboardFeaturedCase = {
  title: kofiMensahCase.title,
  summary:
    'This case examines the scope of citizens rights against unlawful search and seizure.',
};

export const mockDashboardRecentActivity = [
  { id: 1, title: 'New Cases Added', time: '2 mins ago' },
  { id: 2, title: 'Quiz Score Updated', time: '12 mins ago' },
  { id: 3, title: 'Assignment Feedback Ready', time: '1 hour ago' },
  { id: 4, title: 'New Resource Uploaded', time: '3 hours ago' },
];

export const mockDashboardQuickStats = [
  { id: 'streak', label: 'Study Streak', value: '5 days', valueClass: 'text-[#f08a33]' },
  { id: 'cases', label: 'Cases Studied', value: '23', valueClass: 'text-[#2857ff]' },
  { id: 'ai-chats', label: 'AI Chats', value: '47', valueClass: 'text-[#1f2937]' },
];

export const mockCaseReaderDefaultCase = kofiMensahCase;

export const mockCaseItems = [
  kofiMensahCase,
  {
    id: 'case-state-v-adjei',
    title: 'State v. Adjei',
    court: 'Court of Appeal, Ghana',
    citation: '[2024] GHACA 11',
    area: 'Criminal Law',
    coram: 'Sackey JA, Torkornoo JA, Kulendi JA',
    facts: [
      'The accused was charged after an armed robbery at a transport terminal.',
      'The prosecution relied on circumstantial evidence and phone records.',
    ],
    factsText:
      'Adjei appealed after conviction for conspiracy and robbery. The main issue was whether the circumstantial evidence and call data records were enough to sustain the conviction beyond reasonable doubt.',
    issues: [
      'Whether the circumstantial evidence was sufficient.',
      'Whether the trial court properly evaluated the alibi defence.',
    ],
    decisionHolding: 'The Court of Appeal affirmed the conviction in part.',
    reasoning: [
      'The phone records strongly connected the accused to the planning stage.',
      'The alibi was raised late and was inconsistent with the objective evidence.',
    ],
    significance:
      'Shows how appellate courts assess circumstantial evidence in serious criminal proceedings.',
    relatedCases: ['Republic v. Ofori [2021] GHASC 3', 'State v. Lamptey [2019] GHA 41'],
  },
  {
    id: 'case-republic-v-boateng',
    title: 'Republic v. Boateng',
    court: 'Supreme Court of Ghana',
    citation: '[2024] GHASC 21',
    area: 'Constitutional Law',
    coram: 'Akufo JSC, Pwamang JSC, Lovelace-Johnson JSC',
    facts: [
      'Boateng challenged an administrative directive affecting public assembly permits.',
      'Civil society groups argued that the directive limited constitutional rights.',
    ],
    factsText:
      'The case raised questions about whether executive directions could lawfully restrict constitutional freedoms without a clear statutory basis.',
    issues: [
      'Whether the directive infringed the right to assembly.',
      'Whether the directive had sufficient legal foundation.',
    ],
    decisionHolding: 'The Supreme Court struck down the directive.',
    reasoning: [
      'The restriction was broader than necessary in a constitutional democracy.',
      'No adequate statutory authority supported the directive in the form issued.',
    ],
    significance:
      'Clarifies that administrative convenience cannot override constitutional safeguards.',
    relatedCases: ['Republic v. Mensima [2020] GHASC 18', 'Attorney-General v. Appiah [2017] GHA 9'],
  },
];

export const mockAcademicCourseGroups = [
  {
    id: '400-2',
    title: 'LEVEL 400 - 2ND SEM - 26/27',
    courses: [
      { code: 'IAW001', title: 'Introduction to Law', credits: '3 credit hrs' },
      { code: 'IAW002', title: 'Evidence Law', credits: '3 credit hrs' },
      { code: 'IAW003', title: 'Prosperity Law', credits: '3 credit hrs' },
    ],
  },
  {
    id: '400-1',
    title: 'LEVEL 400 - 1ST SEM - 26/27',
    courses: [
      { code: 'IAW001', title: 'Introduction to Law', credits: '3 credit hrs' },
      { code: 'IAW002', title: 'Evidence Law', credits: '2 credit hrs' },
      { code: 'IAW003', title: 'Prosperity Law', credits: '3 credit hrs' },
    ],
  },
  {
    id: '300-2',
    title: 'LEVEL 300 - 2ND SEM - 25/26',
    courses: [
      { code: 'IAW001', title: 'Introduction to Law', credits: '3 credit hrs' },
      { code: 'IAW002', title: 'Evidence Law', credits: '3 credit hrs' },
      { code: 'IAW003', title: 'Prosperity Law', credits: '3 credit hrs' },
    ],
  },
  {
    id: '300-1',
    title: 'LEVEL 300 - 1ST SEM - 25/26',
    courses: [
      { code: 'IAW001', title: 'Introduction to Law', credits: '3 credit hrs' },
      { code: 'IAW002', title: 'Evidence Law', credits: '3 credit hrs' },
      { code: 'IAW003', title: 'Prosperity Law', credits: '3 credit hrs' },
    ],
  },
];

export const mockAcademicTranscriptItems = [
  { session: '2026/27', semester: '2nd Semester', gpa: '3.84', status: 'Excellent' },
  { session: '2026/27', semester: '1st Semester', gpa: '3.65', status: 'Very Good' },
  { session: '2025/26', semester: '2nd Semester', gpa: '3.52', status: 'Very Good' },
  { session: '2025/26', semester: '1st Semester', gpa: '3.41', status: 'Good Standing' },
];

export const mockAiSuggestionItems = [
  {
    id: 'constitutional-law',
    label: 'Constitutional Law',
    prompt: 'Explain the foundation of constitutional law in simple terms.',
    icon: 'scales',
  },
  {
    id: 'contract-law',
    label: 'Contract Law',
    prompt: 'What are the key elements required for a valid contract?',
    icon: 'book',
  },
  {
    id: 'criminal-law',
    label: 'Criminal Law',
    prompt: 'Help me understand the core principles of criminal law.',
    icon: 'globe',
  },
  {
    id: 'tort-law',
    label: 'Tort Law',
    prompt: 'What is tort law and when does negligence apply?',
    icon: 'spark',
  },
  {
    id: 'what-is-law',
    label: 'What is Law',
    prompt: 'What is law and why is it important in society?',
    icon: 'list',
  },
];

export const mockDictionaryEntries = [
  {
    term: 'Abandonment',
    definition:
      'The voluntary relinquishment of a legal right or claim, such as abandoning property or a lawsuit.',
    examples: [
      "The tenant's abandonment of the apartment released the landlord from further obligations.",
      'A party may be found to have abandoned a claim when they fail to pursue it for a long period.',
    ],
    relatedTerms: ['Abatement', 'Waiver', 'Surrender'],
  },
  {
    term: 'Abatement',
    definition:
      'A reduction, suspension, or termination of a legal proceeding, burden, or nuisance under the law.',
    examples: [
      'The court ordered an abatement of the nuisance after repeated complaints from residents.',
      'Tax relief was granted as an abatement due to exceptional hardship.',
    ],
    relatedTerms: ['Nuisance', 'Remedy', 'Relief'],
  },
  {
    term: 'Waiver',
    definition:
      'The intentional and voluntary giving up of a known legal right, claim, or privilege.',
    examples: [
      'By signing the form, the student gave a waiver of certain procedural objections.',
      'A waiver of notice may allow a hearing to proceed without formal service.',
    ],
    relatedTerms: ['Consent', 'Estoppel', 'Abandonment'],
  },
  {
    term: 'Surrender',
    definition:
      'The yielding up of an estate, lease, claim, or legal interest to another person with authority to receive it.',
    examples: [
      'The tenant executed a surrender of the lease before the end of the term.',
      'The accused made a voluntary surrender to the police station the next morning.',
    ],
    relatedTerms: ['Lease', 'Delivery', 'Abandonment'],
  },
];

export const mockNoteCategoryOptions = [
  'Criminal Law',
  'Contract Law',
  'Tort Law',
  'Evidence Law',
  'Property Law',
  'Administrative Law',
  'Corporate Law',
  'Family Law',
];

export const mockNotePriorityOptions = ['High', 'Medium', 'Low'];

export const mockNotePreviewByCategory = {
  'Criminal Law': 'Criminal law involves rules set by the state to which would...',
  'Contract Law': 'Contract law governs agreements, obligations, and enforceable promises...',
  'Tort Law': 'Tort law focuses on civil wrongs and the remedies available to injured parties...',
  'Evidence Law': 'Evidence law determines what materials may be presented before the court...',
  'Property Law': 'Property law examines ownership, possession, transfer, and land interests...',
  'Administrative Law': 'Administrative law reviews the powers and decisions of public institutions...',
  'Corporate Law': 'Corporate law regulates companies, governance duties, and business structures...',
  'Family Law': 'Family law addresses marriage, custody, maintenance, and domestic relations...',
};

export const mockInitialNotes = [
  {
    id: 'note-1',
    title: 'Criminal Law - Key Term',
    category: 'Criminal Law',
    priority: 'Medium',
    preview: mockNotePreviewByCategory['Criminal Law'],
    createdShort: 'Aug 24,2025',
    createdFull: 'August 24, 2025, 07:06PM',
    groupLabel: 'Yesterday',
  },
  {
    id: 'note-2',
    title: 'Criminal Law - Key Term',
    category: 'Criminal Law',
    priority: 'Medium',
    preview: mockNotePreviewByCategory['Criminal Law'],
    createdShort: 'Aug 24,2025',
    createdFull: 'August 24, 2025, 06:42PM',
    groupLabel: 'Yesterday',
  },
  {
    id: 'note-3',
    title: 'Criminal Law - Key Term',
    category: 'Criminal Law',
    priority: 'Medium',
    preview: mockNotePreviewByCategory['Criminal Law'],
    createdShort: 'Aug 24,2025',
    createdFull: 'August 24, 2025, 05:18PM',
    groupLabel: 'Yesterday',
  },
  {
    id: 'note-4',
    title: 'Criminal Law - Key Term',
    category: 'Criminal Law',
    priority: 'Medium',
    preview: mockNotePreviewByCategory['Criminal Law'],
    createdShort: 'Aug 24,2025',
    createdFull: 'August 24, 2025, 04:04PM',
    groupLabel: 'Yesterday',
  },
  {
    id: 'note-5',
    title: 'Criminal Law - Key Term',
    category: 'Criminal Law',
    priority: 'Low',
    preview: mockNotePreviewByCategory['Criminal Law'],
    createdShort: 'Nov 24,2025',
    createdFull: 'November 24, 2025, 07:06PM',
    groupLabel: '24th November 2025',
  },
];
