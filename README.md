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
