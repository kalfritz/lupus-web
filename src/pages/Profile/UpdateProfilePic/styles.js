import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: -125px;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 0 auto;

  form {
    width: 100%;

    label {
      cursor: pointer;

      &:hover {
        opacity: 0.9;
      }

      & > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 3;
        opacity: 0.5;
      }

      & > img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
      }
      & > input {
        display: none;
      }
    }
  }
`;

export const Actions = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5px;
  right: 0px;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;

  & > button {
    border: 0;
    outline: 0;
    background: transparent;

    & > svg {
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
