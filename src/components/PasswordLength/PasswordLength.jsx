import React from 'react';
import {
  LengthWrapper,
  LengthLabel,
  LengthSpan,
  LangthInput,
} from './PasswordLength.styled';
export function PasswordLength({ passwordLength, setPasswordLength }) {
  const handleLengthChange = event => {
    const newLength = event.target.value;
    setPasswordLength(newLength);
  };

  return (
    <LengthWrapper>
      <LengthLabel>
        Character Length <LengthSpan> {passwordLength}</LengthSpan>
      </LengthLabel>
      <LangthInput
        type="range"
        min="8"
        max="16"
        value={passwordLength}
        onChange={handleLengthChange}
      />
    </LengthWrapper>
  );
}
