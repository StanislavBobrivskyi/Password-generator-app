// import React from 'react';
// import { PasswordGenerator } from './PasswordGenerator/PasswordGenerator';

// import { MainWrapper } from './App.styled';
// export const App = () => {
//   return (
//     <MainWrapper>
//       <PasswordGenerator></PasswordGenerator>
//     </MainWrapper>
//   );
// };

import React, { useState, useEffect } from 'react';
import { PasswordGenerator } from './PasswordGenerator/PasswordGenerator';
import { BarLoader } from 'react-spinners'; // Імпорт спінера

import { MainWrapper } from './App.styled';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Початково дані завантажуються
  const [data, setData] = useState(null); // Дані, які будуть завантажені

  // Симулюємо завантаження даних після компонента був відмонтований
  useEffect(() => {
    setTimeout(() => {
      // Після завантаження даних
      setIsLoading(false); // Встановлюємо isLoading в false
      setData('Ваші дані тут'); // Встановлюємо завантажені дані
    }, 2000); // Симулюємо завантаження даних після 2 секунд
  }, []);

  return (
    <MainWrapper>
      {isLoading ? (
        <BarLoader color="#A4FFAF" loading={isLoading} />
      ) : (
        <PasswordGenerator data={data} /> // Передаємо дані у компонент PasswordGenerator
      )}
    </MainWrapper>
  );
};
