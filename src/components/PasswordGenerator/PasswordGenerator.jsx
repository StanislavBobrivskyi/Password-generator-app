import React from 'react';
import { PasswordLength } from '../PasswordLength/PasswordLength';
import { Checkbox } from '../Checkbox/Checkbox';
import { PasswordStrength } from '../PasswordStrength/PasswordStrength';
import { ButtonGenerator } from '../ButtonGenerator/ButtonGenerator';

export function PasswordGenerator() {
  return (
    <div>
      <h1>Password Generator</h1>
      <PasswordLength />
      <Checkbox label="Uppercase Letters" />
      <Checkbox label="Lowercase Letters" />
      <Checkbox label="Numbers" />
      <Checkbox label="Special Characters" />
      <PasswordStrength />
      <ButtonGenerator />
    </div>
  );
}
