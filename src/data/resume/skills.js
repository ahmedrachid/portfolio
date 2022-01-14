// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Cloud'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Cloud'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Natural Language Processing (NLP)',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'Machine Learning',
    competency: 5,
    category: ['Data Science'],
  },
  {
    title: 'Deep Learning',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Tableau',
    competency: 2,
    category: ['Data Visualization'],
  },
  {
    title: 'D3',
    competency: 2,
    category: ['Data Visualization'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'GCP',
    competency: 2,
    category: ['Cloud'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'SciPy',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'OpenCV',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Transformers',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development'],
  },

  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'XGBoost',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Gensim',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'NLTK',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Dash Plotly',
    competency: 5,
    category: ['Data Visualization'],
  },
  {
    title: 'Seaborn',
    competency: 4,
    category: ['Data Visualization'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Python', 'Data Visualization'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Hadoop',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Spark',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'Kafka',
    competency: 2,
    category: ['Data Engineering'],
  },
  {
    title: 'Hive',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Time Series Analysis',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#37b1f5',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
