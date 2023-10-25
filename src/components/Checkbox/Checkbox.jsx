import React from 'react';

export function Checkbox({ label, field }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={field.name}
          checked={field.value}
          onChange={field.onChange}
        />
        {label}
      </label>
    </div>
  );
}
