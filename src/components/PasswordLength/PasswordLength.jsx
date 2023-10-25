import React, { useState } from 'react';

export function PasswordLength() {
  const [length, setLength] = useState(8); // Початкова довжина паролю 8 символів

  const handleLengthChange = event => {
    setLength(event.target.value);
  };

  return (
    <div>
      <label>Password Length: {length}</label>
      <input
        type="range"
        min="8"
        max="16"
        value={length}
        onChange={handleLengthChange}
      />
    </div>
  );
}
