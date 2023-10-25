import React from 'react';

export function ButtonGenerator({ onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        Generate Password
      </button>
    </div>
  );
}
