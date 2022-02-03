# Contributing

## Developer Quick Start

### Before you start developing...

- Make sure you have Node installed. LTE is recommended and currently serving Roost purposes.

- The supported package manager and scripting tool for Roost is [Yarn](https://classic.yarnpkg.com/en/docs/install/). This is our preferred package manager; if you choose to use `npm` please know you have signed up to maintaining a new part of this doc 😀.

- Our Google Maps component will require an API key, exported as environment variable `MAPS_API_KEY`. Contributors will have to [grabbed a personal api key](https://developers.google.com/maps/documentation/javascript/get-api-key) from Google for personal development, and add it to their own `.env.dev` file.

```bash
$ cp .env.local.template .env.dev
$ vi .env.dev # insert your API key
```

### Local Development

```bash
yarn install
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000).

## Technology

We use several technologies to improve our ability to deliver a solid experience. These tools have been listed below:

### Framework

- [**React**](https://reactjs.org/): Allows us to develop component-based UI that can be reusable and use state efficiently. Also enables server-side rendering solutions and is the default framework for NextJS
- [**Material UI**](https://material-ui.com/): Provides a large set of layout, interaction, and content components to improve developer velocity

### Build

- [**NextJS**](https://nextjs.org/): a relatively new build utility that focuses on generating server-side content. NextJS provides many options for efficient rendering and is well supported/updated.
- [**Now.sh**](https://zeit.co/): Made by the same group as NextJS, Now provides a simple (and cheap) way to deploy a NextJS application. We get automatic PR-based previews and rapid deployments to a standard domain.

### Test

- [**Jest**](https://jestjs.io/): Jest is a widely-used framework for writing unit tests. It ships many valuable tools that empower developers to design and implement tests.
- [**Testing Library (React)**](https://testing-library.com/docs/react-testing-library/intro): This is a set of simple tools to allow for test writing that is more clear and concise. This library is built off of a framework-agnostic API, allowing for testing flexibility.

### Developer Operations (DevOps)

- [**Husky**](https://github.com/typicode/husky): This module provides easy handling and configuration of Git hooks, allowing the hooks to be integrated more closely with the project.
- [**Lint Staged**](https://github.com/okonet/lint-staged): A utility for applying lint rules only on the files that have been changed. This improves performance while also allowing us to configure different linters based on the file extension.
- [**Commitlint**](https://github.com/conventional-changelog/commitlint): A simple utility that enforces strict style on the commit messages. This, coupled with the conventional commit configuration, allows us to enforce clarity, and leverage commit messages in the future for release notes.
