import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background-image: url(${props => props.backgroundImage});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  header {
    transform: translateY(-10px);
    color: #fff;
    font-size: 50px;
  }

  h3 {
    transform: translateY(-5px);
    color: #ddd;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 0;
      border-radius: 4px;
      color: #fff;
      background: rgba(0, 0, 0, 0.1);
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    & > button {
      margin: 5px 0 0;
      height: 44px;
      background: gold;
      font-weight: bold;
      color: black;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, 'gold')};
      }
    }
  }

  div {
    margin-top: 45px;
    background: #444;
    padding: 5px;
    span {
      margin: 0 5px;
    }
    p {
      color: #eee;
      margin-bottom: 5px;
    }
    & > button {
      background: none;
      color: gold;
      font-weight: bold;
      border: 0;
      outline: 0;

      &:hover {
        text-decoration: underline;
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
