import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background: #fff;
  margin-bottom: 15px;
  position: relative;

  & > header {
    font-size: 18px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: end;

    & > button {
      border: 0;
      outline: 0;
      background: none;
    }
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }

  & > form {
    & > header {
      font-size: 18px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: end;

      & > button {
        border: 0;
        outline: 0;
        background: none;

        &:last-child {
          margin: 0px 5px 0px 10px;
        }
      }
    }
    input {
      border: 0;
      font-family: roboto;
      font-size: 14px;
      color: blue;
      border: 1px solid #ddd;
      padding: 5px;
    }
    textarea {
      font-family: roboto;
      font-size: 14px;
      text-align: center;
      border: 1px solid #ddd;
      width: 100%;
      resize: none;
    }
  }
`;
export const Bio = styled.div`
  margin-bottom: 10px;

  & > header {
    background: transparent;
    margin-bottom: 5px;
    & > span {
      font-size: 18px;
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin: 0px 5px;
    }

    & > p {
      margin-right: 5px;
      ${props =>
        props.hasBio &&
        css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 100%;
          text-align: center;
        `}
    }

    & > button {
      border: 0;
      outline: 0;
      background: transparent;
      position: absolute;
      right: 8px;
      bottom: 8px;
      cursor: pointer;
      & > svg {
        opacity: 0;
      }
    }
  }
`;
export const Location = styled.div`
  margin-top: 15px;

  & > header {
    background: transparent;
    margin-bottom: 5px;
    & > span {
      font-size: 18px;
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > svg {
      margin: 0px 5px;
    }

    & > p {
      & > span {
        color: blue;
      }
    }
  }
`;
