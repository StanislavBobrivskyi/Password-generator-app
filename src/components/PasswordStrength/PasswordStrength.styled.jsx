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
export const PasswordDescr = styled.div`
  color: var(--Almost-White, #e6e5ea);
  text-align: right;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Heading (M) */
  font-family: JetBrains Mono;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Wrapper = styled.div`
  width: 476px;
  height: 72px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  background-color: transparent;
`;
