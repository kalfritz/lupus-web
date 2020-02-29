import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 10px;
  padding: 10px 20px 15px;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 315px;
  text-align: center;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      & > label {
        margin-bottom: 5px;
      }
    }

    input {
      border: 0;
      border-radius: 4px;
      align-self: stretch;
      color: rgba(0, 0, 0, 0.7);
      background: rgba(0, 0, 0, 0.1);
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button[type='submit'] {
      border: 1px solid #ddd;
      background: rgba(66, 183, 42, 1);
      color: #fff;
      outline: 0;
      padding: 10px 10px;
      margin: 20px 0px;
      align-self: flex-end;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

export const ChangePasswordButton = styled.button`
  border: 0;
  outline: 0;
  background: transparent;
  margin: 10px 0px;
`;

export const DeleteAccountButton = styled.button`
  margin: 5px 0 0;
  width: 100%;
  height: 44px;
  background: #f64c75;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#f64c75')};
  }
`;

export const DangerZone = styled.div`
  margin-top: 60px;
  & > h2 {
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

export const ConfirmSpan = styled.span`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > svg {
    margin-right: 5px;
  }
  ${props =>
    props.confirm
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`;
export const DeleteSpan = styled.span`
  ${props =>
    props.confirm
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;
