export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
  /** First year of the program, when the résumé states a range. */
  startYear?: number;
}

const degrees: Degree[] = [
  {
    school: 'AMA Computer University – Sta. Cruz Laguna Branch',
    degree: 'Bachelor of Science in Information Technology',
    link: 'https://www.amaes.edu.ph/',
    startYear: 2017,
    year: 2020,
  },
];

export default degrees;
