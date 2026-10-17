export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
}

/**
 * The résumé lists these as the tools used in the roles. It does not rank
 * them, so every entry shares one competency and the categories only group
 * the list the way the résumé does.
 */
const skills: Skill[] = [
  { title: 'Drupal', competency: 4, category: ['Frontend'] },
  { title: 'Vue.js', competency: 4, category: ['Frontend'] },
  { title: 'Next.js', competency: 4, category: ['Frontend'] },
  { title: 'React.js', competency: 4, category: ['Frontend'] },
  { title: 'Tailwind CSS', competency: 4, category: ['Frontend'] },
  { title: 'Node.js', competency: 4, category: ['Backend'] },
  { title: 'Express.js', competency: 4, category: ['Backend'] },
  { title: 'Laravel', competency: 4, category: ['Backend'] },
  { title: 'PHP', competency: 4, category: ['Backend'] },
  { title: 'MySQL Workbench', competency: 4, category: ['Database'] },
  { title: 'GitHub', competency: 4, category: ['Tools'] },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * The distinct category names, sorted, so the filter row and the group order
 * both fall out of the skill list itself.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({ name: category }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
