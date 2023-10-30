import { Field } from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 540px;
  height: 528px;
  /* background: #24232c; */
  display: flex;
  justify-content: center;
`;
export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;

  height: 80px;

  background-color: #24232c;
  position: relative;
  margin-bottom: 24px;
`;

export const StyledInput = styled(Field)`
  padding: 19px 32px;
  color: #e6e5ea;
  font-feature-settings: 'clig' off, 'liga' off;

  /* Heading (L) */
  width: 100%;
  font-family: JetBrains Mono;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: transparent;
  border: none;
  &:hover {
    border: none;
  }
`;

export const CopyBtn = styled.button`
  border: none;
  position: absolute;
  transform: translate(0, 0);
  top: 40%;
  right: 8%;
  padding: 0;
  width: 21px;
  height: 24px;
  background: transparent;
  &:hover {
    color: #24232c;
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

export const MainBlock = styled.div`
  background-color: #24232c;
  padding: 19px 32px;
`;
