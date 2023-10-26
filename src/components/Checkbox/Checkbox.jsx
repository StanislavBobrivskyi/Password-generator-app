import React from 'react';
import { CheckBoxWrapper } from './Checkbox.styled';
export function Checkbox({ label, field }) {
  return (
    <CheckBoxWrapper>
      <label>
        <input
          type="checkbox"
          name={field.name}
          checked={field.value}
          onChange={field.onChange}
        />
        {label}
      </label>
    </CheckBoxWrapper>
  );
}
