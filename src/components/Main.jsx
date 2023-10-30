import React, { useState } from 'react';
import { App } from './App'; // Імпортуйте ваш застосунок
import { StartWrapper, StartBtn } from 'Components.styled';

export function Main() {
  const [showApp, setShowApp] = useState(false);

  const handleButtonClick = () => {
    setShowApp(true);
  };

  return (
    <div>
      {!showApp ? (
        <StartWrapper className="App">
          <StartBtn onClick={handleButtonClick}>
            START GENERATE PASSWORDS
          </StartBtn>
        </StartWrapper>
      ) : (
        <App />
      )}
    </div>
  );
}
