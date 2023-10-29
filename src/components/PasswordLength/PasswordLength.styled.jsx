import styled from 'styled-components';

export const LengthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 32px;
`;

export const LengthLabel = styled.label`
  display: flex;
  justify-content: space-between;
  color: #e6e5ea;

  font-family: JetBrains Mono;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LengthSpan = styled.span`
  color: #a4ffaf;
  font-feature-settings: 'clig' off, 'liga' off;

  font-family: JetBrains Mono;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LangthInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  border-radius: 5px;
 
  );

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #a4ffaf;
    cursor: pointer;
  }
`;
