import React from 'react';
import {
  CheckBoxWrapper,
  CheckboxLabel,
  CustomCheckbox,
} from './Checkbox.styled';
export function Checkbox({ label, field }) {
  return (
    <CheckBoxWrapper>
      <CheckboxLabel>
        <CustomCheckbox
          type="checkbox"
          name={field.name}
          checked={field.value}
          onChange={field.onChange}
        />
        {label}
      </CheckboxLabel>
    </CheckBoxWrapper>
  );
}
