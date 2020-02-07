# Ionic React Test Utils

This is a set of helper methods to make testing easier in Ionic React with React Testing Library and Jest.

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



