export const helpTopics = [
  { id: 'help-get-started', label: 'Get Started', icon: 'flag', type: 'article' },
  { id: 'help-cases', label: 'Cases', icon: 'cases', type: 'article' },
  { id: 'help-quiz', label: 'Quiz', icon: 'quiz', type: 'article' },
  { id: 'help-courses', label: 'Courses', icon: 'courses', type: 'article' },
  { id: 'help-ask-ai', label: 'Ask AI', icon: 'ai', type: 'article' },
  { id: 'notes', label: 'Take Notes', icon: 'notes', type: 'page' },
];

export const helpArticleIds = helpTopics
  .filter((topic) => topic.type === 'article')
  .map((topic) => topic.id);

export const helpArticles = {
  'help-get-started': {
    topTitle: 'Get Started',
    sections: [
      {
        title: 'Welcome to LexGo',
        paragraphs: [
          'LexGo helps you learn, practice, and engage with law content through interactive lessons, case studies, and quizzes. Get ready to explore and make learning law easier and fun.',
        ],
      },
      {
        title: 'Signing In and Getting Access',
        paragraphs: [
          'Use your registered email or school account to sign in. Once logged in, your personalized dashboard will appear, showing all your enrolled courses and key features.',
        ],
      },
      {
        title: 'Exploring the Dashboard',
        paragraphs: [
          'The dashboard is your main control center. From here, you can access your courses, assignments, quizzes, and cases. Use the tabs at the side to switch between sections easily.',
        ],
      },
      {
        title: 'Taking Your First Quiz',
        paragraphs: [
          'Go to the Quiz tab to start practicing. Select a quiz, check its duration and number of questions, and begin. Your progress saves automatically until you submit.',
        ],
      },
      {
        title: 'Accessing Course Resources',
        paragraphs: [
          'Under each course, you will find a Resources tab. Here, your lecturer may upload notes, readings, or videos you can open directly or download for later.',
        ],
      },
      {
        title: 'Reading Case Summaries',
        paragraphs: [
          'The Cases feature helps you review important legal cases quickly. Each case includes summaries, key points, and related topics to help you study more effectively.',
        ],
      },
      {
        title: 'Using the Legal Dictionary',
        paragraphs: [
          "Can't remember a legal term? Tap Dictionary to look up definitions and meanings instantly. The search works smoothly and helps you stay on track while studying.",
        ],
      },
      {
        title: 'Ask AI',
        paragraphs: [
          'Use the Ask AI tool to get instant explanations or clarifications on legal concepts, case laws, or assignment hints. Simply type your question and the AI will guide you with summarized and easy-to-understand answers.',
        ],
      },
      {
        title: 'Meet Your AI Companion',
        paragraphs: [
          'Chat naturally with your AI Companion - your personal study buddy. You can type or speak your questions and get quick, conversational answers. It can help explain topics, summarize cases, or even quiz you verbally.',
        ],
      },
    ],
  },
  'help-cases': {
    topTitle: 'Understanding Case Summaries',
    introParagraphs: [
      'Reading and analyzing legal cases can feel overwhelming, especially if you are new to law studies. Each case is broken down into specific sections to help you understand the background, the questions before the court, the decision, and why it matters.',
      'This guide explains what each section of a case summary means so that you can follow along more easily and get the most out of your reading. Use it whenever you need clarity on how cases are structured in the app.',
    ],
    sections: [
      {
        title: 'Case Sessions Explained',
        items: [
          {
            title: 'Case Title',
            paragraphs: [
              'The official name of the case, usually written as Person A v. Person B for civil cases or The Republic v. Person for criminal cases. Example: Republic v. Mensah.',
            ],
          },
          {
            title: 'Court & Citation',
            paragraphs: [
              'Shows the court that delivered the judgment and the citation used to identify the case later.',
            ],
          },
          {
            title: 'Date of Judgment',
            paragraphs: [
              'The exact day the decision was given. It helps place the case in time.',
            ],
          },
          {
            title: 'Coram (Judges)',
            paragraphs: [
              'The judges who heard the case. This matters because senior judges often shape how future cases are interpreted.',
            ],
          },
          {
            title: 'Parties',
            paragraphs: [
              'The people or entities involved in the case. In criminal cases it is usually the Republic versus the accused, while in civil cases it is one private party against another.',
            ],
          },
          {
            title: 'Facts',
            paragraphs: [
              'A short background story of what happened before the case came to court. It helps explain the context.',
            ],
          },
          {
            title: 'Issues',
            paragraphs: [
              'The key legal questions the court had to answer before reaching a decision.',
            ],
          },
          {
            title: 'Decision/Holding',
            paragraphs: [
              'The short answer to the issues - what the court ultimately decided.',
            ],
          },
          {
            title: 'Reasoning',
            paragraphs: [
              'Why the judges reached that decision. This section explains the thought process behind the ruling.',
            ],
          },
        ],
      },
    ],
  },
  'help-quiz': {
    sections: [
      {
        title: 'Overview',
        paragraphs: [
          'The Quiz feature helps you test your knowledge across different legal topics. Choose a topic, select a difficulty level, and answer a set of questions designed to strengthen your understanding of key legal principles.',
        ],
      },
      {
        title: 'Selecting a Legal Topic',
        paragraphs: [
          'Start by choosing a legal topic from the list provided, such as Contract Law, Criminal Law, or Constitutional Law. Each topic focuses on a particular area of study, allowing you to practice and master one subject at a time.',
        ],
      },
      {
        title: 'Choosing Difficulty Level',
        paragraphs: [
          'You can select from three difficulty levels depending on your comfort and experience. Each level adjusts the question types and depth of reasoning required, helping you learn progressively.',
        ],
      },
      {
        title: 'Setting Number of Questions',
        paragraphs: [
          'Decide how many questions you want in your quiz. This flexibility lets you take a quick test or a full-length challenge depending on your available time.',
        ],
      },
      {
        title: 'Starting the Quiz',
        paragraphs: [
          'Once your preferences are selected, tap Start Quiz to begin. Each question appears one at a time, often with multiple-choice answers. You can move through the quiz and submit when you are done.',
        ],
      },
      {
        title: 'Reviewing Your Answers',
        paragraphs: [
          'After completing the quiz, you can review your questions and see which answers were correct or incorrect. The app highlights your score, explanations for correct answers, and areas to improve.',
        ],
      },
      {
        title: 'Need Help with a Question?',
        paragraphs: [
          "If you find a question confusing, tap Ask AI for instant clarification. LexGo's AI can explain the question, provide reasoning behind the right answer, and simplify complex legal terms.",
        ],
      },
    ],
  },
  'help-courses': {
    sections: [
      {
        title: 'Topics',
        paragraphs: [
          'Here, you will find all the lessons under your selected course. Each topic shows its title and number of pages or sections. You can tap any topic to start reading and track your progress as you go along.',
        ],
      },
      {
        title: 'Assignments',
        paragraphs: [
          "When your lecturer posts an assignment, it appears right here. You can read the instructions, check the due date, and submit your work directly in the app. Once it is graded, you will be able to see your score, feedback, and submission details in the same section.",
        ],
      },
      {
        title: 'Test & Quizzes',
        paragraphs: [
          "All your course quizzes and tests are displayed here. You can take them directly through the app and view your results once they are graded. You will also be able to review your answers and see which ones you got right or wrong.",
        ],
      },
      {
        title: 'Resources',
        paragraphs: [
          'This is where your lecturer uploads materials for your course, such as notes, textbooks, slides, or case documents. You can view or download them anytime to help with your studies.',
        ],
      },
      {
        title: 'GradeBook',
        paragraphs: [
          'Your GradeBook shows all your scores from assignments, quizzes, and tests in one place. You can quickly check your performance on each task and see how well you are doing. Tap the chart icon to view detailed insights, including score analysis, comparisons, and performance graphs.',
        ],
      },
      {
        title: 'Q&A(Questions & Answers)',
        paragraphs: [
          "You can ask your lecturer questions about anything you do not understand. Your question goes straight to your lecturer, and their reply appears right under it.",
        ],
      },
    ],
  },
  'help-ask-ai': {
    topTitle: 'Ask AI',
    introParagraphs: [
      'Your AI Legal Assistant helps you learn and explore legal concepts instantly. You can type your question or tap the speaker icon to speak directly and have a real conversation with the AI.',
      'Use the suggested topics like Constitutional Law, Contract Law, Criminal Law, Tort Law, or What is Law as starting points to ask about anything you are curious about, from definitions to case explanations.',
      "The AI's responses are for learning purposes only. Always verify legal information with your lecturer or other trusted legal sources.",
    ],
    note: {
      text: 'Note: AI responses are for educational purposes. Always verify legal information with authoritative sources.',
    },
  },
};
