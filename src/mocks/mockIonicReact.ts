import { mockUseIonPicker } from './hooks/mockUseIonPicker';

export function mockIonicReact() {
  jest.mock('@ionic/react', () => {
    const rest = jest.requireActual('@ionic/react');
    return {
      ...rest,
      useIonPicker: mockUseIonPicker
    };
  });
}
