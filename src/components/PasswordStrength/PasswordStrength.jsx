// import React from 'react';
// import styled from 'styled-components';

// const StrengthSquare = styled.div`
//   width: 20px;
//   height: 20px;
//   margin: 0 5px;
//   border: 1px solid #000;
//   background-color: ${props =>
//     props.isFilled ? props.fillColor : 'transparent'};
// `;

// const StrengthSquaresContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export function PasswordStrength({ password }) {
//   function getPasswordStrength(password) {
//     if (password.length < 8) {
//       return '';
//     } else if (password.length < 10) {
//       return 'TO WEAK!';
//     } else if (password.length < 12) {
//       return 'WEAK';
//     } else if (password.match(/[0-9]/) && password.match(/[a-zA-Z]/)) {
//       return 'MEDIUM';
//     } else {
//       return 'STRONG';
//     }
//   }

//   const strength = getPasswordStrength(password);

//   return (
//     <div>
//       <p>Password Strength: {strength}</p>
//       <StrengthSquaresContainer>
//         <StrengthSquare isFilled={strength === 'TO WEAK!'} fillColor="red" />
//         <StrengthSquare isFilled={strength === 'WEAK'} fillColor="orange" />
//         <StrengthSquare isFilled={strength === 'MEDIUM'} fillColor="yellow" />
//         <StrengthSquare isFilled={strength === 'STRONG'} fillColor="green" />
//       </StrengthSquaresContainer>
//     </div>
//   );
// }

import React from 'react';
import styled from 'styled-components';

const StrengthSquare = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  border: 1px solid #000;
  background-color: ${props =>
    props.isFilled ? props.fillColor : 'transparent'};
`;

const StrengthSquaresContainer = styled.div`
  display: flex;
  align-items: center;
`;

export function PasswordStrength({ password }) {
  function getPasswordStrength(password) {
    if (password.length < 8) {
      return '';
    } else if (password.length < 10) {
      return 'TO WEAK!';
    } else if (password.length < 12) {
      return 'WEAK';
    } else if (password.match(/[0-9]/) && password.match(/[a-zA-Z]/)) {
      return 'MEDIUM';
    } else {
      return 'STRONG';
    }
  }

  const strength = getPasswordStrength(password);

  // Визначення рівня міцності
  let level;
  if (strength === '') {
    return '';
  } else if (strength === 'TO WEAK!') {
    level = 1;
  } else if (strength === 'WEAK') {
    level = 2;
  } else if (strength === 'MEDIUM') {
    level = 3;
  } else {
    level = 4;
  }

  return (
    <div>
      <p>Password Strength: {strength}</p>
      <StrengthSquaresContainer>
        <StrengthSquare
          isFilled={level >= 1}
          fillColor={level >= 1 ? 'red' : 'transparent'}
        />
        <StrengthSquare
          isFilled={level >= 2}
          fillColor={level >= 2 ? 'orange' : 'transparent'}
        />
        <StrengthSquare
          isFilled={level >= 3}
          fillColor={level >= 3 ? 'yellow' : 'transparent'}
        />
        <StrengthSquare
          isFilled={level >= 4}
          fillColor={level >= 4 ? 'green' : 'transparent'}
        />
      </StrengthSquaresContainer>
    </div>
  );
}
