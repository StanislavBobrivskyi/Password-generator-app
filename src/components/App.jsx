import React from 'react';
import { PasswordGenerator } from './PasswordGenerator/PasswordGenerator';

import { MainWrapper } from './App.styled';
export const App = () => {
  return (
    <MainWrapper>
      <PasswordGenerator></PasswordGenerator>
    </MainWrapper>
  );
};
