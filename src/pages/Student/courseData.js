const buildResource = (id, title, meta, summary) => ({
  id,
  title,
  meta,
  summary,
});

const buildAttachment = (id, name, meta) => ({
  id,
  name,
  meta,
});

const buildAnalysis = (distribution) => ({
  distribution,
  totalStudents: distribution.reduce((total, item) => total + item.students, 0),
});

export const courseFilterOptions = [
  'All Courses',
  'Constitutional Law',
  'Contract Law',
  'Criminal Law',
];

export const courseCatalogEntries = [
  { id: 'constitutional-law-1', courseKey: 'constitutional-law' },
  { id: 'contract-law-1', courseKey: 'contract-law' },
  { id: 'criminal-law-1', courseKey: 'criminal-law' },
  { id: 'criminal-law-2', courseKey: 'criminal-law' },
  { id: 'constitutional-law-2', courseKey: 'constitutional-law' },
  { id: 'contract-law-2', courseKey: 'contract-law' },
  { id: 'contract-law-3', courseKey: 'contract-law' },
  { id: 'criminal-law-3', courseKey: 'criminal-law' },
  { id: 'constitutional-law-3', courseKey: 'constitutional-law' },
];

export const initialCoursesState = {
  'constitutional-law': {
    id: 'constitutional-law',
    title: 'Constitutional Law',
    shortTitle: 'Constitutional Law',
    institution: 'University of Ghana School of Law',
    lessons: 4,
    theme: 'constitutional',
    topics: [
      {
        id: 'topic-separation-of-powers',
        title: 'Separation of Powers',
        pages: 26,
        summary:
          'An introduction to how legislative, executive, and judicial powers are distributed and balanced in constitutional governance.',
      },
      {
        id: 'topic-fundamental-rights',
        title: 'Fundamental Rights',
        pages: 25,
        summary:
          'A review of enforceable constitutional rights, limitations, and the remedies available when those rights are breached.',
      },
      {
        id: 'topic-judicial-review',
        title: 'Judicial Review',
        pages: 25,
        summary:
          'Explores how courts review the legality of government action and protect the supremacy of the constitution.',
      },
      {
        id: 'topic-constitutional-interpretation',
        title: 'Constitutional Interpretation',
        pages: 25,
        summary:
          'Focuses on the methods judges use when interpreting constitutional text in complex public law disputes.',
      },
    ],
    assignments: [
      {
        id: 'constitutional-assignment-1',
        title: 'Assignment 1: Introduction to Law',
        dueDate: 'Jul 30,2025, 09:59PM',
        dueMeta: 'Due July 30, 2025',
        submissions: 'Unlimited',
        gradeScale: '100 marks',
        submissionType: 'file Upload',
        plagiarismReport: '10%',
        instructions: 'Make sure to answer all questions',
        status: 'Submitted',
        resources: [
          buildResource('assignment-questions', 'Assignment Questions', '5MB - Sept 17,2025 - 10:00AM', 'Core assignment brief and marking guide.'),
        ],
        submittedAttachments: [
          buildAttachment('intro-criminal-law', 'Introduction to Criminal Law', '5MB - Sept 17,2025 - 10:00AM'),
          buildAttachment('intro-constitutional-law', 'Introduction to Constitutional Law 8', '5MB - Sept 17,2025 - 10:00AM'),
        ],
      },
      {
        id: 'constitutional-assignment-2',
        title: 'Assignment 2: Bill of Rights Case Brief',
        dueDate: 'Aug 14,2025, 11:59PM',
        dueMeta: 'Due August 14, 2025',
        submissions: 'Unlimited',
        gradeScale: '50 marks',
        submissionType: 'file Upload',
        plagiarismReport: 'Pending',
        instructions: 'Prepare a concise case brief highlighting the constitutional issue, holding, and significance.',
        status: 'Pending',
        resources: [
          buildResource('case-brief-template', 'Case Brief Template', '3MB - Aug 01,2025 - 08:20AM', 'Template for structuring your case brief submission.'),
        ],
        submittedAttachments: [],
      },
      {
        id: 'constitutional-assignment-3',
        title: 'Assignment 3: Constitutional Interpretation Essay',
        dueDate: 'Sep 02,2025, 11:59PM',
        dueMeta: 'Due September 02, 2025',
        submissions: 'Unlimited',
        gradeScale: '75 marks',
        submissionType: 'file Upload',
        plagiarismReport: '8%',
        instructions: 'Discuss two competing approaches to constitutional interpretation and support your argument with authorities.',
        status: 'Submitted',
        resources: [
          buildResource('essay-guide', 'Essay Writing Guide', '2MB - Aug 18,2025 - 12:10PM', 'Guidance on argument structure and citation standards.'),
        ],
        submittedAttachments: [
          buildAttachment('interpretation-essay', 'Constitutional Interpretation Essay', '4MB - Aug 29,2025 - 04:40PM'),
        ],
      },
    ],
    quizzes: {
      currentAssessment: null,
      submitted: [
        {
          id: 'constitutional-quiz-1',
          title: 'Quiz one',
          subtitle: "This Unit's General Knowledge",
          dueMeta: 'Due Sept 17,2025 - 10:10AM',
          questions: 45,
          duration: '50Minutes',
        },
        {
          id: 'constitutional-quiz-2',
          title: 'Quiz Two',
          subtitle: 'Mid Sem 1',
          dueMeta: 'Due Sept 17,2025 - 10:10AM',
          questions: 45,
          duration: '50Minutes',
        },
        {
          id: 'constitutional-quiz-3',
          title: 'Quiz Three',
          subtitle: 'Mid Sem 2',
          dueMeta: 'Due Sept 17,2025 - 10:10AM',
          questions: 45,
          duration: '50Minutes',
        },
      ],
    },
    gradeBook: [
      {
        id: 'constitutional-grade-1',
        title: 'Quiz 1: Intro to Law',
        dueMeta: 'Due October 12,2025',
        score: 19,
        outOf: 20,
        percentage: '99%',
        analysis: buildAnalysis([
          { label: '0-50', students: 18, color: '#ef4444' },
          { label: '51-60', students: 14, color: '#f97316' },
          { label: '61-70', students: 32, color: '#39ff14' },
          { label: '71-80', students: 64, color: '#4b7ee0' },
          { label: '81-90', students: 40, color: '#0f8b0f' },
          { label: '91-100', students: 32, color: '#f87171' },
        ]),
      },
      {
        id: 'constitutional-grade-2',
        title: 'Assignment 2: Evidence Law 1',
        dueMeta: 'Due October 27,2025',
        score: 18,
        outOf: 20,
        percentage: '95%',
        analysis: buildAnalysis([
          { label: '0-50', students: 10, color: '#ef4444' },
          { label: '51-60', students: 18, color: '#f97316' },
          { label: '61-70', students: 40, color: '#39ff14' },
          { label: '71-80', students: 58, color: '#4b7ee0' },
          { label: '81-90', students: 42, color: '#0f8b0f' },
          { label: '91-100', students: 32, color: '#f87171' },
        ]),
      },
      {
        id: 'constitutional-grade-3',
        title: 'Assignment 3: Evidence Law 2',
        dueMeta: 'Due October 26,2025',
        score: null,
        outOf: 20,
        percentage: '--',
        analysis: null,
      },
      {
        id: 'constitutional-grade-4',
        title: 'Assignment 4: Evidence Law 2',
        dueMeta: 'Due October 25,2025',
        score: null,
        outOf: 20,
        percentage: '--',
        analysis: null,
      },
      {
        id: 'constitutional-grade-5',
        title: 'Assignment 4: Evidence Law 3',
        dueMeta: 'Due October 24,2025',
        score: null,
        outOf: 20,
        percentage: '--',
        analysis: null,
      },
    ],
    resources: [
      buildResource('constitutional-resource-1', 'Course Outline', 'PDF - 1.2MB', 'Week-by-week breakdown of constitutional law topics and reading expectations.'),
      buildResource('constitutional-resource-2', 'Lecture Slides: Fundamental Rights', 'PPT - 5.1MB', 'Slide deck covering constitutional rights, limitations, and enforcement.'),
      buildResource('constitutional-resource-3', 'Landmark Cases Digest', 'PDF - 3.4MB', 'Summary of essential constitutional law cases discussed in class.'),
    ],
    qa: [
      {
        id: 'constitutional-qa-1',
        question: 'How do I differentiate judicial review from judicial activism?',
        answer:
          'Judicial review is the court power to assess legality, while judicial activism is a descriptive label about how expansively judges use that power.',
      },
      {
        id: 'constitutional-qa-2',
        question: 'Will we be tested on interpretive canons?',
        answer:
          'Yes. Focus on the text, purpose, context, and precedent-based approaches introduced in the interpretation module.',
      },
    ],
  },
  'contract-law': {
    id: 'contract-law',
    title: 'Contract Law',
    shortTitle: 'Contract Law',
    institution: 'University of Ghana School of Law',
    lessons: 4,
    theme: 'contract',
    topics: [
      {
        id: 'contract-topic-1',
        title: 'Offer and Acceptance',
        pages: 24,
        summary:
          'Covers the formation stage of contracts, invitations to treat, and the legal effect of acceptance.',
      },
      {
        id: 'contract-topic-2',
        title: 'Consideration',
        pages: 23,
        summary:
          'Introduces the doctrine of consideration and the value exchange that supports enforceable promises.',
      },
      {
        id: 'contract-topic-3',
        title: 'Intention to Create Legal Relations',
        pages: 21,
        summary:
          'Examines when parties are presumed to intend their agreements to have legal consequences.',
      },
      {
        id: 'contract-topic-4',
        title: 'Misrepresentation and Duress',
        pages: 28,
        summary:
          'Explains vitiating factors that may render a contract voidable or unenforceable.',
      },
    ],
    assignments: [
      {
        id: 'contract-assignment-1',
        title: 'Assignment 1: Contract Formation Problem',
        dueDate: 'Jul 21,2025, 09:59PM',
        dueMeta: 'Due July 21, 2025',
        submissions: 'Unlimited',
        gradeScale: '100 marks',
        submissionType: 'file Upload',
        plagiarismReport: '12%',
        instructions: 'Analyse whether a valid contract was formed using the supplied fact scenario.',
        status: 'Submitted',
        resources: [
          buildResource('contract-problem-sheet', 'Problem Question Sheet', '4MB - Jul 11,2025 - 09:30AM', 'Scenario facts and submission expectations.'),
        ],
        submittedAttachments: [
          buildAttachment('contract-formation-submission', 'Contract Formation Submission', '3MB - Jul 19,2025 - 03:18PM'),
        ],
      },
      {
        id: 'contract-assignment-2',
        title: 'Assignment 2: Consideration Memo',
        dueDate: 'Aug 09,2025, 11:59PM',
        dueMeta: 'Due August 09, 2025',
        submissions: 'Unlimited',
        gradeScale: '60 marks',
        submissionType: 'file Upload',
        plagiarismReport: 'Pending',
        instructions: 'Prepare a short memo distinguishing consideration from gratuitous promises.',
        status: 'Pending',
        resources: [
          buildResource('consideration-reading-pack', 'Reading Pack', '6MB - Aug 01,2025 - 10:45AM', 'Selected authorities on consideration and estoppel.'),
        ],
        submittedAttachments: [],
      },
    ],
    quizzes: {
      currentAssessment: {
        title: 'Current Assessment',
        description: 'Quiz 4 is available now and closes in 48 hours.',
      },
      submitted: [
        {
          id: 'contract-quiz-1',
          title: 'Quiz one',
          subtitle: 'Formation Basics',
          dueMeta: 'Due Sept 07,2025 - 10:10AM',
          questions: 30,
          duration: '40Minutes',
        },
        {
          id: 'contract-quiz-2',
          title: 'Quiz Two',
          subtitle: 'Consideration Review',
          dueMeta: 'Due Sept 20,2025 - 10:10AM',
          questions: 35,
          duration: '45Minutes',
        },
      ],
    },
    gradeBook: [
      {
        id: 'contract-grade-1',
        title: 'Quiz 1: Contract Basics',
        dueMeta: 'Due October 12,2025',
        score: 17,
        outOf: 20,
        percentage: '85%',
        analysis: buildAnalysis([
          { label: '0-50', students: 20, color: '#ef4444' },
          { label: '51-60', students: 18, color: '#f97316' },
          { label: '61-70', students: 36, color: '#39ff14' },
          { label: '71-80', students: 50, color: '#4b7ee0' },
          { label: '81-90', students: 42, color: '#0f8b0f' },
          { label: '91-100', students: 24, color: '#f87171' },
        ]),
      },
      {
        id: 'contract-grade-2',
        title: 'Assignment 1: Formation Problem',
        dueMeta: 'Due October 21,2025',
        score: 16,
        outOf: 20,
        percentage: '80%',
        analysis: null,
      },
      {
        id: 'contract-grade-3',
        title: 'Assignment 2: Consideration Memo',
        dueMeta: 'Due October 28,2025',
        score: null,
        outOf: 20,
        percentage: '--',
        analysis: null,
      },
    ],
    resources: [
      buildResource('contract-resource-1', 'Offer and Acceptance Notes', 'PDF - 2.1MB', 'Concise notes on formation principles and core cases.'),
      buildResource('contract-resource-2', 'Contract Drafting Exercise', 'DOCX - 1.8MB', 'Practice exercise for drafting simple contract clauses.'),
    ],
    qa: [
      {
        id: 'contract-qa-1',
        question: 'Can past consideration ever be valid?',
        answer:
          'Past consideration is generally not valid unless the act was done at the promisor\'s request and both parties understood payment would follow.',
      },
    ],
  },
  'criminal-law': {
    id: 'criminal-law',
    title: 'Criminal Law',
    shortTitle: 'Criminal Law',
    institution: 'University of Ghana School of Law',
    lessons: 4,
    theme: 'criminal',
    topics: [
      {
        id: 'criminal-topic-1',
        title: 'Actus Reus and Mens Rea',
        pages: 29,
        summary:
          'Introduces the physical and mental elements of criminal liability and how they work together.',
      },
      {
        id: 'criminal-topic-2',
        title: 'Defences in Criminal Law',
        pages: 22,
        summary:
          'Reviews common defences including self-defence, necessity, duress, and insanity.',
      },
      {
        id: 'criminal-topic-3',
        title: 'Inchoate Offences',
        pages: 19,
        summary:
          'Examines attempt, conspiracy, and other preparatory offences before the substantive crime is completed.',
      },
      {
        id: 'criminal-topic-4',
        title: 'Sentencing Principles',
        pages: 21,
        summary:
          'Focuses on deterrence, retribution, rehabilitation, and proportionality in sentencing.',
      },
    ],
    assignments: [
      {
        id: 'criminal-assignment-1',
        title: 'Assignment 1: Mens Rea Analysis',
        dueDate: 'Jul 18,2025, 09:59PM',
        dueMeta: 'Due July 18, 2025',
        submissions: 'Unlimited',
        gradeScale: '100 marks',
        submissionType: 'file Upload',
        plagiarismReport: '7%',
        instructions: 'Apply the doctrine of mens rea to the supplied problem scenario and justify your reasoning.',
        status: 'Submitted',
        resources: [
          buildResource('criminal-problem-pack', 'Problem Pack', '4MB - Jul 08,2025 - 11:20AM', 'Scenario documents and authority list.'),
        ],
        submittedAttachments: [
          buildAttachment('mens-rea-analysis', 'Mens Rea Analysis', '4MB - Jul 15,2025 - 01:20PM'),
        ],
      },
      {
        id: 'criminal-assignment-2',
        title: 'Assignment 2: Defence Comparison',
        dueDate: 'Aug 05,2025, 11:59PM',
        dueMeta: 'Due August 05, 2025',
        submissions: 'Unlimited',
        gradeScale: '60 marks',
        submissionType: 'file Upload',
        plagiarismReport: 'Pending',
        instructions: 'Compare duress and necessity using one decided case for each doctrine.',
        status: 'Pending',
        resources: [
          buildResource('defence-reading-list', 'Reading List', '2MB - Jul 24,2025 - 09:00AM', 'Cases and commentary for the comparative analysis task.'),
        ],
        submittedAttachments: [],
      },
    ],
    quizzes: {
      currentAssessment: null,
      submitted: [
        {
          id: 'criminal-quiz-1',
          title: 'Quiz one',
          subtitle: 'General Principles',
          dueMeta: 'Due Sept 02,2025 - 10:10AM',
          questions: 40,
          duration: '50Minutes',
        },
      ],
    },
    gradeBook: [
      {
        id: 'criminal-grade-1',
        title: 'Quiz 1: General Principles',
        dueMeta: 'Due October 04,2025',
        score: 15,
        outOf: 20,
        percentage: '75%',
        analysis: buildAnalysis([
          { label: '0-50', students: 24, color: '#ef4444' },
          { label: '51-60', students: 24, color: '#f97316' },
          { label: '61-70', students: 40, color: '#39ff14' },
          { label: '71-80', students: 48, color: '#4b7ee0' },
          { label: '81-90', students: 36, color: '#0f8b0f' },
          { label: '91-100', students: 28, color: '#f87171' },
        ]),
      },
      {
        id: 'criminal-grade-2',
        title: 'Assignment 1: Mens Rea Analysis',
        dueMeta: 'Due October 17,2025',
        score: 18,
        outOf: 20,
        percentage: '90%',
        analysis: null,
      },
    ],
    resources: [
      buildResource('criminal-resource-1', 'Lecture Summary: Criminal Liability', 'PDF - 2.5MB', 'Overview of liability principles and key criminal law doctrines.'),
      buildResource('criminal-resource-2', 'Case Table: Criminal Defences', 'XLSX - 0.9MB', 'A comparative table of major criminal defences and authorities.'),
    ],
    qa: [
      {
        id: 'criminal-qa-1',
        question: 'How do I remember the difference between intention and recklessness?',
        answer:
          'Intention is aimed at a result, while recklessness concerns conscious risk-taking despite foreseeing the possibility of harm.',
      },
    ],
  },
};
