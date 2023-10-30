import styled from 'styled-components';

export const StartWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 22px 18px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  flex-shrink: 0;
  background: var(--Dark-Grayish-Blue, #313a48);
  box-shadow: 30px 50px 80px 0px rgba(0, 0, 0, 0.1);
  height: 104px;
`;

export const StartBtn = styled.button`
  color: #e6e5ea;

  font-family: JetBrains Mono;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 100%;
  border: none;
  border-radius: 20%;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
    border: 1px solid #53ffaa;
    box-shadow: 0 0 10px #53ffaa; /* Додамо тінь при наведенні */
  }
  &:active {
    transform: scale(1.1);
  }
`;
