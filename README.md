# Ionic React Test Utils

This is a set of helper methods to make testing easier in Ionic React with React Testing Library and Jest.

## Installation

```
yarn add -D @ionic/react-test-utils
```

or

```
npm install --dev @ionic/react-test-utils
```

## Custom ionFireEvent

`ionFireEvent` extends [Testing Library's](https://testing-library.com/docs/dom-testing-library/api-events) `fireEvent` by adding the custom `ion*` events. This can be used as a drop in replacement for `fireEvent` or used in conjunction with.

```javascript
import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';

...


fireEvent.ionChange(element, 'my text');
```

## mockIonicReact

This method mocks out certain Ionic components that have issues rendering in JSDOM. To use it, open up `setupTests.ts` and add this to the file:

```javascript
import { mockIonicReact } from '@ionic/react-test-utils';
mockIonicReact();
```

## waitForIonicReact

This function waits for Ionic React to be fully initialized. Use this in tests that need to check the HTML as it will be rendered at runtime, where you aren't able to watch for specific elements to be loaded. For example, snapshot tests that should check a whole component without being tightly coupled to the markup.

```jsx
import { render } from '@testing-library/react';
import { waitForIonicReact } from '@ionic/react-test-utils';
import MyComponent from './MyComponent';

describe('<MyComponent />', () => {
  it('renders consistently', async () => {
    const { baseElement } = render(<MyComponent/>);
    await waitForIonicReact();
    expect(baseElement).toMatchSnapshot();
  });
});
```