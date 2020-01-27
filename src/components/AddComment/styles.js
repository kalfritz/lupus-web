import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  padding: 0px 15px;
  align-items: center;
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

  form {
    width: 100%;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      height: 38px;
      border: 1px solid #ddd;
      border-radius: 30px;
      font-size: 16px;
      padding: 0 20px;
    }

    button {
      display: none;
    }
  }
`;
