# react-native-analyticsample

sample app

## Installation

```sh
npm install react-native-analyticsample
```

## Usage

```js
import { multiply, initializeApp } from 'react-native-analyticsample';

// ...

const result = await multiply(3, 7);

// ...
<Button onPress={() => initializeApp()} />;
```

## Steps

1. run `npx create-react-native-library@latest awesome-module`
2. Read CONTRIBUTING.md file and run yarn to install nodemodules
3. install dependencies given in [firebase library setup](https://rnfirebase.io/) and [crashlytics setup](https://rnfirebase.io/crashlytics/usage) in the example(client side) app.
4. Add peer-dependencies of both in root [package.json](package.json) file
5. Write methods to export to client-side in root [index.tsx](src/index.tsx)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
