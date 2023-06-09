# react-provider-stack

[![npm downloads](https://img.shields.io/npm/dm/react-wizard-flow.svg?style=flat-square)](https://www.npmjs.com/package/react-wizard-flow)
[![gzip size](https://img.badgesize.io/https://unpkg.com/react-wizard-flow?compression=gzip&amp;style=flat-square)](https://unpkg.com/react-wizard-flow)
[![npm version](https://img.shields.io/npm/v/react-wizard-flows.svg?style=flat-square)](https://www.npmjs.com/package/react-wizard-flow)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Usage

This lets you avoid a deeply nested set of providers by defining them as an array.

```javascript
import ProviderStack from 'react-provider-stack';

function App() {
  return (
    <ProviderStack providers={[Provider1, Provider2, Provider3]}>
      <AppLogic />
    </ProviderStack
  );
}
```

The only requirement is that each provider is a react component that only takes `children`.

This README was generated by [anansi](https://github.com/ntucker/anansi/tree/master/packages/generator-js#readme).
