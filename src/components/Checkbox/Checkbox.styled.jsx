import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const CustomCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 21px;
  height: 21px;
  border: 2px solid #a4ffaf; // Колір рамки чекбокса
  border-radius: 4px; // Закруглені кути
  cursor: pointer;
  margin-right: 8px; // Зменшимо відступ від тексту
  transition: background-color 0.3s; // Додамо плавну анімацію для зміни кольору фону
  position: relative;
  overflow: hidden;

  &:checked {
    background-color: #a4ffaf; // Колір фону, коли чекбокс вибраний
  }

  &:active {
    background-color: #4caf50; // Колір фону при натисканні на чекбокс
  }

  // Псевдоелемент для вставки іконки
  &::before {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect width="20" height="20" fill="%23A4FFAF"/><path d="M4 10.6066L7.39341 14L15.3934 6" stroke="%2318171F" stroke-width="3"/></svg>');
    position: absolute;
    top: -1px;
    left: -1px;
    width: 19px;
    height: 19px;
    display: none; // Приховуємо спочатку
    border-radius: 40%;
  }

  &:checked::before {
    display: inline; // Показуємо іконку при активації
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center; // Розташовує елементи вертикально по центру
  cursor: pointer;
  font-family: JetBrains Mono;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #e6e5ea; // Колір тексту
`;
