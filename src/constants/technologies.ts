export type TechItem = { name: string; logo: string };

export const frontEnd: TechItem[] = [
  {
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'ReactJS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
];

export const backEnd: TechItem[] = [
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  },
  {
    name: 'Fastify',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Nest.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
  },
  {
    name: 'PHP',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
];

export const additional: TechItem[] = [
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Prisma ORM',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
  },
  {
    name: 'Jest',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
  {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
];

export const mobile: TechItem[] = [
  {
    name: 'React Native',
    logo: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg',
  },
  {
    name: 'Expo Go',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg',
  },
  { name: 'NativeWind', logo: 'https://github.com/nativewind.png' },
  {
    name: 'SQLite',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
];

export const techDocs: Record<string, { desc: string; url: string }> = {
  HTML: {
    desc: 'Linguagem de marcação para estruturar conteúdo na web.',
    url: 'https://developer.mozilla.org/docs/Web/HTML',
  },
  CSS: {
    desc: 'Folhas de estilo para controlar layout, cores e tipografia.',
    url: 'https://developer.mozilla.org/docs/Web/CSS',
  },
  JavaScript: {
    desc: 'Linguagem de programação para interatividade no navegador.',
    url: 'https://developer.mozilla.org/docs/Web/JavaScript',
  },
  TypeScript: {
    desc: 'Superset do JavaScript com tipagem estática.',
    url: 'https://www.typescriptlang.org/docs',
  },
  ReactJS: {
    desc: 'Biblioteca para construir interfaces com componentes.',
    url: 'https://react.dev/learn',
  },
  'Next.js': {
    desc: 'Framework React com rotas, rendering e tooling moderno.',
    url: 'https://nextjs.org/docs',
  },
  'Tailwind CSS': {
    desc: 'Framework utilitário de CSS para criar interfaces rápidas.',
    url: 'https://tailwindcss.com/docs',
  },
  'Node.js': {
    desc: 'Ambiente de execução JavaScript no servidor.',
    url: 'https://nodejs.org/en/docs',
  },
  'Nest.js': {
    desc: 'Framework Node para APIs escaláveis usando TypeScript.',
    url: 'https://docs.nestjs.com',
  },
  Express: {
    desc: 'Framework web minimalista para Node.js.',
    url: 'https://expressjs.com',
  },
  Fastify: {
    desc: 'Framework web para Node.js com foco em performance.',
    url: 'https://fastify.io/docs/latest',
  },
  PHP: {
    desc: 'Linguagem de script para aplicações web no servidor.',
    url: 'https://www.php.net/manual/en/',
  },
  MySQL: {
    desc: 'Banco de dados relacional popular e amplamente usado.',
    url: 'https://dev.mysql.com/doc/',
  },
  PostgreSQL: {
    desc: 'Banco de dados relacional avançado e extensível.',
    url: 'https://www.postgresql.org/docs/',
  },
  Docker: {
    desc: 'Plataforma de containers para empacotar e distribuir apps.',
    url: 'https://docs.docker.com',
  },
  Git: {
    desc: 'Sistema de controle de versão distribuído para código.',
    url: 'https://git-scm.com/doc',
  },
  'Prisma ORM': {
    desc: 'ORM para TypeScript/Node com schema e migrações.',
    url: 'https://www.prisma.io/docs',
  },
  Jest: {
    desc: 'Framework de testes em JavaScript com mocks e asserts.',
    url: 'https://jestjs.io/docs',
  },
  Figma: {
    desc: 'Ferramenta de design colaborativa para UI/UX.',
    url: 'https://help.figma.com/hc/en-us',
  },
  'React Native': {
    desc: 'Framework para apps móveis usando React e JavaScript.',
    url: 'https://reactnative.dev/docs',
  },
  'Expo Go': {
    desc: 'Ferramenta para rodar e desenvolver apps React Native.',
    url: 'https://docs.expo.dev',
  },
  NativeWind: {
    desc: 'Estilização utilitária para React Native inspirada em Tailwind.',
    url: 'https://www.nativewind.dev',
  },
  SQLite: {
    desc: 'Banco de dados leve embutido para apps locais.',
    url: 'https://sqlite.org/docs.html',
  },
};
