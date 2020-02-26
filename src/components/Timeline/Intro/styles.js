import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background: #fff;
  position: relative;
  grid-area: intro;

  header {
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 5px;
    }
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }

  & > form {
    input {
      font-family: roboto;
      font-size: 14px;
      color: blue;
      border: 1px solid #ddd;
    }
    textarea {
      font-family: roboto;
      font-size: 14px;
      text-align: center;
      width: 100%;
      border: 1px solid #ddd;
      resize: none;
    }
  }
`;
export const Bio = styled.div`
  margin-bottom: 10px;
  & > p {
    text-align: center;
    margin-right: 5px;
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
`;
export const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;

  & > svg {
    margin-right: 5px;
  }

  span {
    color: blue;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  margin-top: 5px;

  & > button {
    border: 0;
    outline: 0;
    background: transparent;
    &:last-child {
      margin-left: 10px;
    }
  }
`;
