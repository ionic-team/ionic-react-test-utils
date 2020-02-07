import React, { useState } from 'react';

export const mockIonCheckbox: React.FC<{
  checked: boolean,
  onIonChange: (e: CustomEvent) => void,
  onClick: (e: React.SyntheticEvent<MouseEvent>) => void;
}> = ({ checked, onIonChange, onClick, ...rest }) => {

  return (
    <input type="checkbox" onClick={e => {
      onIonChange(new CustomEvent('ionChange', { detail: { checked: e.currentTarget.checked } }));
    }} role="toggle" {...rest} />
  );
};
