export const useExperienceConfig = () => {
  const frontend = [
    'Creating pixel-perfect user interfaces from wireframes using React, NextJS and Gatsby',
    'Using React Query to efficiently fetch and cache data',
    'Applying the principles of Atomic Design to encourage component reusage and improve project organisation',
    'Using Storybook to develop components in isolation and create component documentation',
    'Using Tailwind and Styled Components to apply responsive CSS',
    'Implementing rigourous testing of components using Jest and Cypress component testing to guarantee code quality',
    'Refactoring outdated components to meet up-to-date React standards',
    'Developing mobile applications using Expo and React Native',
  ];
  const backend = [
    'Implementing REST-style architecture using Express',
    'Implementing fully-typed Apollo GraphQL servers with TypeGraphQL',
    'Converting REST-style backend architectures to GraphQL to improve performance and simplify authorisation',
    'Performing CRUD operations on Postgres databases using ORMs like Prisma and Sequelize',
    ' Creating extensive unit and integration tests using Jest to ensure code quality',
  ];
  const other = [
    'Writing end-to-end tests in Cypress to ensure confidence in code',
    'Implementing hygen to allow for code component generation to increase developer efficiency',
    'Implementing and using continuous integration tools such as CircleCI and Github Actions to ensure code quality and catch errors',
    'Using Docker to simplify local database management',
    'Giving lightning talks and trainings to introduce developers to new concepts and tools',
    ' Interviewing potential developers to assess talent',
    'Training new developers to teach them fundamentals and get them up to speed with the stack used',
  ];
  const writing = [
    {
      text: 'The ultimate component testing suite - Cypress, Storybook and Mock Service Worker',
      link: 'https://www.contic.co.uk/blog/the-ultimate-component-testing-suite-cypress-storybook-and-mock-service-worker',
    },
    {
      text: 'Migrating from a RESTful Express API to TypeGraphQL',
      link: 'https://www.contic.co.uk/blog/migrating-from-a-restful-express-api-to-typegraphql',
    },
    {
      text: 'Local database management with Docker',
      link: 'https://www.contic.co.uk/blog/local-database-management-with-docker',
    },
    {
      text: 'What is Hygen and how could it help speed up your project?',
      link: 'https://www.contic.co.uk/blog/what-is-hygen',
    },
    {
      text: 'Setting up a Gatsby Project with Typescript, Prettier and ESLint',
      link: 'https://www.contic.co.uk/blog/setting-up-a-gatsby-project-with-typescript-prettier-and-eslint',
    },
  ];
  const education = [
    'MSc Advanced Computer Science, University of Leeds',
    'BSc Computer Science and Mathematics, University of Leeds',
  ];
  return { frontend, backend, other, writing, education };
};
