/**
 * Central project data. Used by homepage, projects index, and project detail pages.
 * Add or edit projects here to keep the site in sync.
 *
 * Set `hidden: true` to keep a project's data/content in the repo without
 * showing it anywhere on the live site (not listed, not statically built).
 */
export const projectsData = [
  {
    slug: 'sentinel',
    title: 'Sentinel',
    description: 'Real-time incident detection from traffic camera footage using computer vision and vision-language models.',
    status: 'Complete',
    url: 'https://github.com/kliu3115/sentinel.git',
    tags: ['AI', 'CV'],
    image: '/images/sentinel.png',
  },
  {
    slug: 'gold-price-prediction',
    title: 'GDX Prediction',
    description: 'Model trained to predict next-day GDX (gold miners ETF) direction with ~73% accuracy and 0.80 AUC.',
    status: 'Complete',
    tags: ['ML'],
    image: '/images/gold.png',
  },
  {
    slug: 'aegis',
    title: 'Aegis',
    description: 'Navigation app that routes pedestrians around crime and poor lighting. Won Best Use of Statistics at PennApps XXVI.',
    status: 'Complete',
    tags: ['Full Stack', 'Optimization'],
    image: '/images/aegis.png',
  },
  {
    slug: 'ramsey-games',
    title: 'Ramsey Games',
    description: 'Research on draw thresholds in Ramsey Two-Player Games using various strategies. Mentored by Dr. William Gasarch at UMD.',
    status: 'Complete',
    website: 'https://ramsey-game.vercel.app/',
    websiteLabel: 'Try playing Ramsey Games!',
    tags: ['Game Theory', 'ML'],
    image: '/images/ramsey_game.png',
  },
  {
    slug: 'quiz-corrections',
    title: 'Quiz Corrections',
    description: 'Full stack app for learning through quiz review.',
    status: 'Deprecated',
    hidden: true,
    url: 'https://github.com/kliu3115/quiz-corrections',
    tags: ['React.js', 'Node.js', 'SQL'],
    image: '/images/quiz_corrections.png',
  },
  {
    slug: 'phex-ai',
    title: 'PHEX AI',
    description: 'AI powered pigment mixing tool.',
    status: 'Deprecated',
    hidden: true,
    url: 'https://github.com/kliu3115/phex',
    website: 'https://phex.vercel.app/',
    tags: ['AI', 'Full Stack'],
    image: '/images/phex-ai.jpg',
  },
];

/** Projects actually shown on the site; hidden ones stay in the data above for later. */
export const visibleProjects = projectsData.filter((p) => !p.hidden);
