import { fireEvent as fireEvent } from '@testing-library/react';

function ionBlur(element: Document | Element | Window) {
  fireEvent(element, new CustomEvent('ionBlur'));
}

function ionCancel(element: Document | Element | Window) {
  fireEvent(element, new CustomEvent('ionCancel'));
}

function ionChange(element: Document | Element | Window, value: string) {
  fireEvent(element, new CustomEvent('ionChange', {
    detail: {
      value
    }
  }));
}

function ionDidClose(element: Document | Element | Window) {
  fireEvent(element, new CustomEvent('ionDidClose'));
}

function ionDrag(element: Document | Element | Window, amount?: number, drag?: number) {
  fireEvent(element, new CustomEvent('ionDrag', {
    detail: {
      amount,
      drag
    }
  }));
}

function ionDidOpen(element: Document | Element | Window) {
  fireEvent(element, new CustomEvent('ionDidOpen'));
}

function ionFocus(element: Document | Element | Window) {
  fireEvent(element, new CustomEvent('ionFocus'));
}

function ionInput(element: Document | Element | Window, value: string) {
  fireEvent(element, new CustomEvent('ionInput', {
    detail: {
      value
    }
  }));
}

function ionPull(element: Document | Element | Window) {
  fireEvent(element, new CustomEvent('ionPull'));
}

function ionRefresh(element: Document | Element | Window, complete?: () => void) {
  fireEvent(element, new CustomEvent('ionRefresh', {
    detail: {
      complete
    }
  }));
}

function ionScrollEnd(element: Document | Element | Window) {
  fireEvent(element, new CustomEvent('ionScrollEnd', {
    detail: {
      isScrolling: false
    }
  }));
}

function ionScrollStart(element: Document | Element | Window) {
  fireEvent(element, new CustomEvent('ionScrollStart', {
    detail: {
      isScrolling: true
    }
  }));
}

function ionSelect(element: Document | Element | Window, value: string, checked: boolean) {
  fireEvent(element, new CustomEvent('ionSelect', {
    detail: {
      value,
      checked
    }
  }));
}

function ionStart(element: Document | Element | Window, ) {
  fireEvent(element, new CustomEvent('ionStart'));
}

function ionSwipe(element: Document | Element | Window, side: string) {
  fireEvent(element, new CustomEvent('ionSwipe', {
    detail: {
      side
    }
  }));
}

function ionWillClose(element: Document | Element | Window) {
  fireEvent(element, new CustomEvent('ionWillClose'));
}

function ionWillOpen(element: Document | Element | Window) {
  fireEvent(element, new CustomEvent('ionWillOpen'));
}

export const ionFireEvent = Object.assign(fireEvent, {
  ionBlur,
  ionCancel,
  ionChange,
  ionDidClose,
  ionDrag,
  ionDidOpen,
  ionFocus,
  ionInput,
  ionPull,
  ionRefresh,
  ionScrollEnd,
  ionScrollStart,
  ionSelect,
  ionStart,
  ionSwipe,
  ionWillClose,
  ionWillOpen
});
