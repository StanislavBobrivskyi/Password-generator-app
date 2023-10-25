import React from 'react';

export function PasswordStrength({ password }) {
  function getPasswordStrength(password) {
    if (password.length < 8) {
      return 'Password Strength: Very Weak';
    } else if (password.length < 12) {
      return 'Password Strength: Weak';
    } else if (password.match(/[0-9]/) && password.match(/[a-zA-Z]/)) {
      return 'Password Strength: Medium';
    } else {
      return 'Password Strength: Strong';
    }
  }

  const strength = getPasswordStrength(password);

  return (
    <div>
      <p>{strength}</p>
    </div>
  );
}
