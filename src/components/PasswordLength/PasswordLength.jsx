import React from 'react';

export function PasswordLength({ passwordLength, setPasswordLength }) {
  const handleLengthChange = event => {
    const newLength = event.target.value;
    setPasswordLength(newLength);
  };

  return (
    <div>
      <label>Password Length: {passwordLength}</label>
      <input
        type="range"
        min="8"
        max="16"
        value={passwordLength}
        onChange={handleLengthChange}
      />
    </div>
  );
}
