import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #eee;
  display: flex;
  /* width: calc(100% / 12 * 11 - 13px); */
  width: 100%;
  margin: 0;
  height: 350px;

  justify-content: center;

  form {
    width: 100%;
    label {
      cursor: pointer;
      background: #eee;
      width: 100%;

      &:hover {
        opacity: 0.9;
      }

      & > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 1;
        opacity: 0.5;
      }

      & > img {
        height: 100%;
        width: 100%;
      }
      & > input {
        display: none;
      }
    }
  }
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  & > button {
    outline: 0;
    padding: 5px;
    font-weight: 600;
    &:first-child {
      border: 1px solid #bbb;
      background: #eee;
      color: #666;
      margin-right: 5px;
    }
    &:last-child {
      border: 1px solid #666;
      background: rgb(66, 103, 178);
      color: #eee;
    }
  }
`;
