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
    date: '2024-02-19',
    endDate: '2024-06-08',
    desc: 'Managed responsive frontend development in Drupal 10.5 by implementing custom themes and modular components to improve accessibility and content management efficiency.',
    tech: ['Drupal'],
    status: 'shipped',
  },
  {
    title: 'Frontend Developer for Event Management System (EMS)',
    subtitle: 'YouCode Technologies Corp',
    link: 'https://www.eventmanage.biz/events/n1OLK8jAEe3Y/view',
    sourceWork: 'YouCode Technologies Corp',
    date: '2025-11-10',
    endDate: '2026-02-09',
    desc: 'Developed responsive frontend interfaces using Vue.js and integrated Laravel/PHP backend functionalities to deliver secure, scalable, and seamless user experiences.',
    tech: ['Vue.js', 'Laravel', 'PHP'],
    status: 'shipped',
  },
  {
    title: 'Frontend Developer for School Management Information System (SMIS)',
    subtitle: 'YouCode Technologies Corp',
    link: 'https://youguard.ph/',
    sourceWork: 'YouCode Technologies Corp',
    date: '2024-10-14',
    endDate: '2025-11-10',
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
    link: 'https://alpar-trading.vercel.app/',
    image: '/images/projects/alpar.png',
    date: '2026-06-1',
    desc: 'A modern business website built with React, Tailwind CSS, Vite, and Supabase for backend services.',
    tech: ['React", "Tailwind CSS", "Vite", "Supabase'],
    status: 'archive',
  },
  {
    title: 'My Shopify',
    subtitle: '',
    link: 'https://myshopify-frontend.vercel.app/',
    image: '/images/projects/myshopify.png',
    date: '2026-02-20',
    desc: 'Mini e-commerce platform with a user-friendly interface for seamless shopping experiences',
    tech: ['React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB'],
    status: 'archive',
  },
  {
    title: 'User Management System',
    subtitle: 'Kickstarter-funded weather balloon',
    link: "https://user-management-system-rho-three.vercel.app/",
    image: '/images/projects/usermanagesys.jpg',
    date: '2026-02-24',
    desc: 'An admin panel for user management.',
    tech: ['React", "TypeScript", "Node.js'],
    status: 'archive',
  },
  {
    title: 'Manila Power Home Website',
    subtitle: '',
    link: "https://manilapower.net/",
    image: '/images/projects/project3.png',
    date: '2018-01-08',
    desc: 'A modern, responsive website for Manila Power with clean design and easy navigation.',
    tech: ['JavaScript", "CSS", "HTML'],
    status: 'archive',
  },
  {
    title: 'RAMWebX',
    subtitle: '',
    image: '/images/projects/duda.png',
    link: "https://ramwebx.multiscreensite.com/",
    date: '2026',
    endDate: '',
    desc: 'A sample business website using the Duda platform',
    tech: ["Duda"],
    status: 'archive',
  },
  {
    title: "Online Enrollment System",
    desc:
      "Originally built for thesis — real-time enrollment, scheduling, and admin tools.",
    image: '/images/projects/project4.png',
    date: '2020',
    endDate: '',
    tech: ["PHP", "MySQL", "JavaScript"],
    status: 'archive',
  },
];

export default data;

/** The register: production work, most recent first. */
export const shipped = data.filter((project) => project.status === 'shipped');

/** Student-era history, most recent first. */
export const archive = data.filter((project) => project.status === 'archive');
