/**
 * The register of things I have built.
 *
 * Two groups, both kept deliberately:
 *
 * - `shipped` — selected production work Michael built, led, or contributed
 *   to, and can be pointed at.
 * - `archive` — student-era experiments. A register that deletes its own
 *   history is a brochure, so these stay, stepped down rather than removed.
 *
 * Every shipped entry declares the role in `src/data/resume/work.ts` that
 * backs its dates and numeric claims. Archive entries are maintained here
 * directly. Those checks establish internal consistency; factual claims and
 * public destinations still need primary-source and live-link review.
 */
export type ProjectStatus = 'shipped' | 'archive';

export interface Project {
  title: string;
  /** Role, venue, or one-line positioning. Rendered as a mono label. */
  subtitle?: string;
  /**
   * Public destination for the work. Entries without one are rendered as
   * visibly inert rather than as cards that look clickable and are not.
   */
  link?: string;
  /** Résumé role that backs a shipped entry's dates and numeric claims. */
  sourceWork?: string;
  /**
   * Screenshot, where one exists. Optional: the card and the register row are
   * both designed to read on type and rules alone, so a new entry does not
   * need art invented for it.
   */
  image?: string;
  /**
   * ISO date Michael's work on the project started, or a one-off shipped.
   * This is project activity, not necessarily a public launch date.
   */
  date: string;
  /** ISO date project activity ended. Omitted on one-offs and live work. */
  endDate?: string;
  /**
   * The project is still active. This is deliberately independent of the
   * historical role named by `subtitle`: a project can continue after an
   * acquisition or employment transition. Drives the amber `Present` reading
   * and is mutually exclusive with `endDate`.
   */
  ongoing?: boolean;
  desc: string;
  /** Technologies the résumé names for this work. Omitted when it names none. */
  tech?: string[];
  status: ProjectStatus;
}

/**
 * Hand-ordered, most recent activity first within each group. Live work leads,
 * then sorts by its own start date; finished work sorts by its end (or one-off)
 * date. `projects.test.ts` pins the complete comparator, including ties.
 */
const data: Project[] = [
  {
    title: 'Frontend Developer for E-Library',
    subtitle: 'YouCode Technologies Corp',
    sourceWork: 'YouCode Technologies Corp',
    date: '2024-02-01',
    endDate: '2026-03-01',
    desc: 'Managed responsive frontend development in Drupal 10.5 by implementing custom themes and modular components to improve accessibility and content management efficiency.',
    tech: ['Drupal'],
    status: 'shipped',
  },
  {
    title: 'Frontend Developer for Event Management System (EMS)',
    subtitle: 'YouCode Technologies Corp',
    link: 'https://www.eventmanage.biz/events/n1OLK8jAEe3Y/view',
    sourceWork: 'YouCode Technologies Corp',
    date: '2024-02-01',
    endDate: '2026-03-01',
    desc: 'Developed responsive frontend interfaces using Vue.js and integrated Laravel/PHP backend functionalities to deliver secure, scalable, and seamless user experiences.',
    tech: ['Vue.js', 'Laravel', 'PHP'],
    status: 'shipped',
  },
  {
    title: 'Frontend Developer for School Management Information System (SMIS)',
    subtitle: 'YouCode Technologies Corp',
    link: 'https://youguard.ph/',
    sourceWork: 'YouCode Technologies Corp',
    date: '2024-02-01',
    endDate: '2026-03-01',
    desc: 'Implemented responsive UI components and managed application routing using React Router, ensuring seamless navigation and protected route authentication for enhanced security and user experience.',
    tech: ['React', 'React Router'],
    status: 'shipped',
  },
  {
    title: 'Fullstack Developer for Robotics E-Commerce Management Platform',
    subtitle: 'YouCode Technologies Corp',
    sourceWork: 'YouCode Technologies Corp',
    date: '2024-02-01',
    endDate: '2026-03-01',
    desc: 'Developed using React, JavaScript, Tailwind CSS, Express, and Node.js with Shopify integration for managing robotics products, inventory, orders, and responsive user experiences.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Express', 'Node.js'],
    status: 'shipped',
  },
  {
    title: 'Frontend Developer for Stat Collector Web App',
    subtitle: 'Sharks Billiard Association',
    sourceWork: 'Sharks Billiard Association',
    date: '2023-01-01',
    endDate: '2024-01-01',
    desc: 'Engineered a responsive user interface using React and Tailwind CSS, implementing dynamic navigation with React Router to ensure a seamless and intuitive user experience.',
    tech: ['React', 'Tailwind CSS', 'React Router'],
    status: 'shipped',
  },
  {
    title: 'alPar Trading Inc',
    subtitle: '',
    image: '/images/projects/nearestdollar.jpg',
    date: '2026-5-1',
    desc: 'A modern business website built with React, Tailwind CSS, Vite, and Supabase for backend services.',
    tech: ['React", "Tailwind CSS", "Vite", "Supabase'],
    status: 'archive',
  },
  {
    title: 'Harvest',
    subtitle: '3rd place at TechCrunch Disrupt SF',
    link: 'https://devpost.com/software/harvest',
    image: '/images/projects/harvest.jpg',
    date: '2015-09-20',
    desc: 'Low-cost crop monitoring to catch irrigation leaks and nutrient deficiencies.',
    tech: ['Python', 'Arduino', 'Computer vision', 'AWS'],
    status: 'archive',
  },
  {
    title: 'Space Potato',
    subtitle: 'Kickstarter-funded weather balloon',
    image: '/images/projects/spacepotato.jpg',
    date: '2015-06-28',
    desc: 'Potato-powered weather balloon with cameras. Photos published in a coffee table book.',
    tech: ['Hardware', 'GPS', 'Photography'],
    status: 'archive',
  },
  {
    title: 'Cat Detector',
    subtitle: 'CNN for cat breed classification',
    image: '/images/projects/catdetector.jpg',
    date: '2015-05-15',
    desc: 'Classified 60,000+ cats across 80 breeds before server costs shut it down.',
    // TensorFlow was not open-sourced until November 2015, six months after
    // this project date. No primary source establishes a later port.
    tech: ['Python', 'CNN', 'AWS'],
    status: 'archive',
  },
  {
    title: 'UB Nanosatellite Program',
    subtitle: 'AFRL University Nanosatellite Program',
    link: 'https://ubnl.space/glados/',
    date: '2011-06-01',
    endDate: '2012-05-01',
    desc: 'Co-authored the grant to design and build a multi-spectral imaging satellite, designed its attitude determination and control, and led a 60-person student team through the development lifecycle.',
    status: 'archive',
  },
];

export default data;

/** The register: production work, most recent first. */
export const shipped = data.filter((project) => project.status === 'shipped');

/** Student-era history, most recent first. */
export const archive = data.filter((project) => project.status === 'archive');
