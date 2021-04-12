import React, { useState } from 'react';

export const mockIonCheckbox: React.FC<{
  checked: boolean,
  onIonChange: (e: CustomEvent) => void,
  onIonFocus: (e: CustomEvent) => void,
  onIonBlur: (e: CustomEvent) => void,
  onClick: (e: React.SyntheticEvent<MouseEvent>) => void;
}> = ({ checked, onIonChange, onIonFocus, onIonBlur, onClick, ...rest }) => {

  return (
    <input type="checkbox" onClick={e => {
      onIonChange(new CustomEvent('ionChange', { detail: { checked: e.currentTarget.checked } }));
    }} onFocus={() => { onIonFocus(new CustomEvent('ionFocus'))}} onBlur={() => { onIonBlur(new CustomEvent('ionBlur'))}} role="toggle" {...rest} />
  );
};
