# Roost

Welcome to Roost! This is an open-source website dedicated to supporting local businesses during difficult times. We aim to provide consumers with a quick-and-easy method of utilizing (or otherwise supporting) local services. 

## Developer Quick Start

### Before you start developing...

- Make sure that you have [Yarn](https://classic.yarnpkg.com/en/docs/install/) installed

- Our Google Maps component will require an API key, exported as environment variable `MAPS_API_KEY`. Please ensure that you have [grabbed a personal api key](https://developers.google.com/maps/documentation/javascript/get-api-key) from Google for personal development.

### Local Development

- Install local dependencies with

```bash
yarn install
```

- ensure that your API key is exposed

```
> echo $MAPS_API_KEY
XXXX-XXXX-XXXX
```

- run the local server with

```
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology

We use several technologies to improve our ability to deliver a solid experience. These tools have been listed below:

### Framework

- **React**: Allows us to develop component-based UI that can be reusable and use state efficiently. Also enables server-side rendering solutions and is the default framework for NextJS
- **Material UI**: Provides a large set of layout, interaction, and content components to improve developer velocity

### Build

- **NextJS**: a relatively new build utility that focuses on generating server-side content. NextJS provides many options for efficient rendering and is well supported/updated.
- **Now.sh**: Made by the same group as NextJS, Now provides a simple (and cheap) way to deploy a NextJS application. We get automatic PR-based previews and rapid deployments to a standard domain.

### Test

- **Jest**: Jest is a widely-used framework for writing unit tests. It ships many valuable tools that empower developers to design and implement tests.
- **Testing Library (React)**: This is a set of simple tools to allow for test writing that is more clear and concise. This library is built off of a framework-agnostic API, allowing for testing flexibility.

### Developer Operations (DevOps)

- **Husky**: This module provides easy handling and configuration of Git hooks, allowing the hooks to be integrated more closely with the project.
- **Lint Staged**: A utility for applying lint rules only on the files that have been changed. This improves performance while also allowing us to configure different linters based on the file extension.
- **Commitlint**: A simple utility that enforces strict style on the commit messages. This, coupled with the conventional commit configuration, allows us to enforce clarity, and leverage commit messages in the future for release notes.
