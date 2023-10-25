import React from 'react';
import { PasswordLength } from '../PasswordLength/PasswordLength';
import { Checkbox } from '../Checkbox/Checkbox';
import { PasswordStrength } from '../PasswordStrength/PasswordStrength';
import { ButtonGenerator } from '../ButtonGenerator/ButtonGenerator';
import { Formik, Field, Form } from 'formik';
export function PasswordGenerator() {
  return (
    <div>
      <Formik
        initialValues={{ password: '' }}
        onSubmit={(values, { resetForm }) => {
          // Додайте логіку генерації паролю тут
          resetForm();
        }}
      >
        <Form>
          <div>
            <Field type="text" name="password" readOnly />
          </div>
          <PasswordLength />
          <Checkbox label="Uppercase Letters" />
          <Checkbox label="Lowercase Letters" />
          <Checkbox label="Numbers" />
          <Checkbox label="Special Characters" />
          <PasswordStrength />
          <ButtonGenerator />
        </Form>
      </Formik>
    </div>
  );
}
