import styled from 'styled-components';

export const StrengthSquare = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'isFilled' && prop !== 'fillColor',
})`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  border: 1px solid #000;
  background-color: ${props =>
    props.isFilled ? props.fillColor : 'transparent'};
`;

export const StrengthSquaresContainer = styled.div`
  display: flex;
  align-items: center;
`;
