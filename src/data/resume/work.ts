/** Based on the JSON Resume work item, with a local `commitment` extension. */
export interface Position {
  name: string;
  position: string;
  /**
   * Public company site, when the résumé names one. Omitted rather than
   * guessed: a printed résumé reveals this href as text.
   */
  url?: string;
  startDate: string;
  endDate?: string;
  /**
   * Marks an open-ended role that ran alongside the primary career. Omitted
   * means full-time; `sortPositions` uses this to keep an enduring side role
   * from outranking every later full-time position.
   */
  commitment?: 'part-time';
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'YouCode Technologies Corp',
    position: 'System Developer',
    startDate: '2024-02-01',
    endDate: '2026-03-01',
    highlights: [
      'Developed and maintained high-performance web applications using Vue.js and Next.js, optimizing frontend interfaces and full-stack features to enhance client experience.',
      'Engineered and integrated RESTful APIs using Laravel, streamlining data communication between frontend interfaces and backend services to improve system modularity.',
      'Standardized local development environments with Laragon, eliminating environment-related deployment inconsistencies.',
      'Collaborated with UI/UX designers in Figma to translate prototypes into pixel-perfect, responsive frontend components.',
      'Managed version control and team collaboration using GitHub, implementing branching strategies and code review workflows to streamline feature delivery and maintain high code quality.',
      'Utilized the MERN stack (MongoDB, Express.js, React.js, and Node.js) to develop and maintain responsive full-stack web applications and RESTful APIs.',
      'Built dynamic frontend interfaces with React and integrated backend services and database operations using Node.js, Express, and MongoDB.',
      'Utilized Drupal 10.5 for website content management, module configuration, and frontend customization for client needs.',
      'Used Composer and Drush to manage Drupal dependencies, install and update modules, clear cache, and streamline development and maintenance workflows.',
    ],
  },
  {
    name: 'Sharks Billiard Association',
    position: 'Full Stack Developer',
    startDate: '2023-01-01',
    endDate: '2024-01-01',
    highlights: [
      'Designed and developed the user interface of a stat collector web application using React and Tailwind CSS, keeping each module simple and user-friendly.',
    ],
  },
];

export default work;
