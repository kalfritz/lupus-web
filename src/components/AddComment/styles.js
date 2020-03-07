import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Container = styled.div`
  width: 100%;
  min-height: 56px;
  max-height: 85vh;
  display: flex;
  flex-direction: row;
  padding: 10px 15px 0px;
  align-items: flex-start;
  border-top: 1px solid #ddd;

  ${props =>
    props.fixed &&
    css`
      position: fixed;
      bottom: 0;
      left: 0;
      background: #eee;
    `}

  img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    &:last-child {
      display: none;
    }
  }
`;

export const TextareaAutosizeStyled = styled(TextareaAutosize)`
  color: #222;
  resize: none;
  overflow: hidden;
  font-family: roboto;
  width: 100%;
  min-height: 38px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 30px;
  font-size: 16px;
  padding: 8px 20px 5px;
  &::placeholder {
  }
`;
