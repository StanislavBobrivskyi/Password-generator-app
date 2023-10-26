import React from 'react';
import { ButtonGenerat } from './ButtonGenerator.styled';

export function ButtonGenerator({ onClick }) {
  return (
    <div>
      <ButtonGenerat type="button" onClick={onClick}>
        Generate Password
      </ButtonGenerat>
    </div>
  );
}
