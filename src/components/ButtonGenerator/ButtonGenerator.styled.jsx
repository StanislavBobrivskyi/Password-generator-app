import styled from 'styled-components';

export const ButtonGenerat = styled.button`
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  cursor: pointer;
  font-family: JetBrains Mono;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 25px;
  background-color: #a4ffaf;
  color: #18171f;
  width: 476px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 15px;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    background-color: transparent;
    border: 2px solid var(--Neon-Green, #a4ffaf);
    color: #a4ffaf;
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.9);
  }
`;
