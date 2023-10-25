import React, { useState } from 'react';
import { PasswordLength } from '../PasswordLength/PasswordLength';
import { Checkbox } from '../Checkbox/Checkbox';
import { PasswordStrength } from '../PasswordStrength/PasswordStrength';
import { ButtonGenerator } from '../ButtonGenerator/ButtonGenerator';
import { Formik, Field, Form } from 'formik';

export function PasswordGenerator() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] =
    useState(false);

  function generatePassword(length, options) {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characters = '';
    let password = '';

    if (options.includeLowercase) {
      characters += lowercaseLetters;
    }
    if (options.includeUppercase) {
      characters += uppercaseLetters;
    }
    if (options.includeNumbers) {
      characters += numbers;
    }
    if (options.includeSpecialCharacters) {
      characters += specialCharacters;
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }

    return password;
  }

  const handleGeneratePasswordClick = () => {
    const options = {
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSpecialCharacters,
    };

    const newPassword = generatePassword(passwordLength, options);
    setGeneratedPassword(newPassword);
  };

  return (
    <div>
      <Formik
        initialValues={{
          password: '',
          passwordLength: 8,
          includeLowercase: false,
          includeUppercase: false,
          includeNumbers: false,
          includeSpecialCharacters: false,
        }}
        onSubmit={(values, { resetForm }) => {
          setIncludeLowercase(values.includeLowercase);
          setIncludeUppercase(values.includeUppercase);
          setIncludeNumbers(values.includeNumbers);
          setIncludeSpecialCharacters(values.includeSpecialCharacters);

          const newPassword = generatePassword(values.passwordLength, {
            includeLowercase: values.includeLowercase,
            includeUppercase: values.includeUppercase,
            includeNumbers: values.includeNumbers,
            includeSpecialCharacters: values.includeSpecialCharacters,
          });
          setGeneratedPassword(newPassword);

          resetForm();
        }}
      >
        <Form>
          <div>
            <Field
              type="text"
              name="password"
              readOnly
              value={generatedPassword}
            />
          </div>
          <PasswordLength
            passwordLength={passwordLength}
            setPasswordLength={setPasswordLength}
          />
          // Оновлений код для компонента Checkbox
          <Checkbox
            label="Uppercase Letters"
            field={{
              name: 'includeUppercase',
              value: includeUppercase,
              onChange: () => setIncludeUppercase(!includeUppercase),
            }}
          />
          <Checkbox
            label="Lowercase Letters"
            field={{
              name: 'includeLowercase',
              value: includeLowercase,
              onChange: () => setIncludeLowercase(!includeLowercase),
            }}
          />
          <Checkbox
            label="Numbers"
            field={{
              name: 'includeNumbers',
              value: includeNumbers,
              onChange: () => setIncludeNumbers(!includeNumbers),
            }}
          />
          <Checkbox
            label="Special Characters"
            field={{
              name: 'includeSpecialCharacters',
              value: includeSpecialCharacters,
              onChange: () =>
                setIncludeSpecialCharacters(!includeSpecialCharacters),
            }}
          />
          <PasswordStrength password={generatedPassword} />
          <ButtonGenerator onClick={handleGeneratePasswordClick} />
        </Form>
      </Formik>
    </div>
  );
}
