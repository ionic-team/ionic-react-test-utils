import React, { useState, useEffect, useRef } from 'react';
import { AlertButton } from '@ionic/react';

const MockControllerInner: React.FC<{
  backdropDismiss?: boolean;
  enterAnimation?: any;
  cssClass?: string;
  forwardedRef: any;
  isOpen: boolean,
  header?: string,
  leaveAnimation?: any;
  mode?: 'ios' | 'md',
  message?: string,
  subHeader?: string,
  buttons?: AlertButton[];
  translucent?: boolean;
  showBackdrop?: boolean;
  keyboardClose?: boolean;
  onDidDismiss?: () => void;
  onDidPresent?: () => void;
  onWillDismiss?: () => void;
  onWillPresent?: () => void;
}> = ({
  children,
  isOpen,
  header = '',
  buttons = [],
  onDidDismiss,
  onDidPresent,
  onWillDismiss,
  onWillPresent,
  message,
  forwardedRef,
  backdropDismiss,
  enterAnimation,
  leaveAnimation,
  cssClass,
  subHeader,
  showBackdrop,
  keyboardClose,
  ...rest
}) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen && !open) {
      setOpen(true);
      onWillPresent && onWillPresent();
      onDidPresent && onDidPresent();
    } else if (!isOpen && open) {
      setOpen(false);
      onWillDismiss && onWillDismiss();
      onDidDismiss && onDidDismiss();
    }
  }, [isOpen]);

  return (
    isOpen ?
      <div {...rest} ref={forwardedRef}>
        {header && <h2>{header}</h2>}
        {message && <p>{message}</p>}
        {buttons.map((b, i) => <button key={i} onClick={b.handler}>{b.text}</button>)}
        {children && <div>{children}</div>}
      </div> : null
  );
};

export const mockController = React.forwardRef<any, any>((props, ref) => (
  <MockControllerInner {...props} forwardedRef={ref} />
));
