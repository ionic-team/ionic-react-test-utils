import { IonInput } from '@ionic/react';
import { mockController } from './mockController';
import { mockIonCheckbox } from './mockIonCheckbox';

export function mockIonicReact() {
  jest.mock('@ionic/react', () => {
    const rest = jest.requireActual('@ionic/react');
    return {
      ...rest,
      IonActionSheet: mockController,
      IonAlert: mockController,
      IonCheckbox: mockIonCheckbox,
      IonDatetime: IonInput,
      IonLoading: mockController,
      IonPicker: mockController,
      IonPopover: mockController,
      IonToast: mockController,
      IonModal: mockController,
      IonToggle: mockIonCheckbox
    };
  });
}
