import React, { useState, useEffect, useRef } from 'react';
import { AlertButton } from '@ionic/react';

const MockControllerInner: React.FC<{
  forwardedRef: any;
  isOpen: boolean,
  header?: string,
  message?: string,
  buttons?: AlertButton[];
  onDidDismiss?: () => void;
}> = ({ children, isOpen, header = '', buttons = [], onDidDismiss, message, forwardedRef, ...rest }) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen && !open) {
      setOpen(true);
    } else if (!isOpen && open) {
      setOpen(false);
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