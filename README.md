# Personas.Space JS client library

This library is a wrapper for [Persons Space](https://personas.space)'s data APIs. It does not actually fetch or return data, it only returns the correct data endpoint for you to use to fetch the data.

This library is published to NPM at: [https://www.npmjs.com/package/@personas/client](https://www.npmjs.com/package/@personas/client).

## Installation

Install using:
```bash
yarn add @personas/client
```
or 
```bash
npm i @personas/client
```

## Usage
```javascript
const { get } = require('@personas/client');

const address = '0x...';
const { avatar, explorer } = get.url(address);

const imgComponent = () => (<img src={avatar.small} />);
const openProfileExplorer = () => window.open(explorer);
// ...
```

## API Docs
See the [Personas docs](https://docs.personas.space/integrations/integrations) for more information.
