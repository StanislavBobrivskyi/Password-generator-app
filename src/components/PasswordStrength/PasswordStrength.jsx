import React from 'react';
import {
  StrengthSquare,
  StrengthSquaresContainer,
  PasswordDescr,
  Wrapper,
} from './PasswordStrength.styled';

export function PasswordStrength({ password }) {
  function getPasswordStrength(password) {
    if (password.length < 8) {
      return '';
    } else if (password.length < 10) {
      return 'TO WEAK!';
    } else if (password.length < 12) {
      return 'WEAK';
    } else if (password.match(/[0-9]/) && password.match(/[a-zA-Z]/)) {
      return 'MEDIUM';
    } else {
      return 'STRONG';
    }
  }

  const strength = getPasswordStrength(password);

  // Визначення рівня міцності
  let level;
  if (strength === '') {
    return '';
  } else if (strength === 'TO WEAK!') {
    level = 1;
  } else if (strength === 'WEAK') {
    level = 2;
  } else if (strength === 'MEDIUM') {
    level = 3;
  } else {
    level = 4;
  }

  return (
    <Wrapper>
      <PasswordDescr>Strength: {strength}</PasswordDescr>
      <StrengthSquaresContainer>
        <StrengthSquare
          isFilled={level >= 1}
          fillColor={level >= 1 ? 'red' : 'transparent'}
        />
        <StrengthSquare
          isFilled={level >= 2}
          fillColor={level >= 2 ? 'orange' : 'transparent'}
        />
        <StrengthSquare
          isFilled={level >= 3}
          fillColor={level >= 3 ? 'yellow' : 'transparent'}
        />
        <StrengthSquare
          isFilled={level >= 4}
          fillColor={level >= 4 ? 'green' : 'transparent'}
        />
      </StrengthSquaresContainer>
    </Wrapper>
  );
}
