import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  width: 100%;
  margin-top: 15px;
`;

export const Content = styled.div`
  background: #fff;

  & > header {
    display: flex;
    align-items: center;
    font-size: 24px;
    padding: 10px;

    & > svg {
      margin-right: 5px;
    }
  }
`;

export const Intro = styled.div`
  padding: 10px;
  background: #fff;
  margin-bottom: 15px;
  position: relative;

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
      border: 0;
      font-family: roboto;
      font-size: 14px;
      color: blue;
    }
    textarea {
      font-family: roboto;
      font-size: 14px;
      text-align: center;
      border: 0;
      width: 100%;
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

  & > p {
    & > span {
      color: blue;
    }
  }
`;

export const AboutGrid = styled.div`
  border: 1px solid #ccc;
  display: grid;
  grid-template-columns: 2fr 5fr;

  & > nav {
    display: flex;
    padding: 15px;
    flex-direction: column;
    border-right: 1px solid #ccc;

    @media (max-width: 600px) {
      flex-direction: row;
      padding: 0px 15px;
      align-items: center;
      border-right: 0;
      & > a {
        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    border: 0;
  }
`;

export const AboutNavLink = styled(NavLink)`
  margin-bottom: 15px;
  font-size: 16px;
  &:link {
    color: #aaa;
    &.is-active {
      color: #333;
      font-weight: bold;
    }
  }
  &:visited {
    color: #aaa;
    &.is-active {
      color: #333;
      font-weight: bold;
    }
  }
`;

export const RouteBox = styled.div`
  @media (max-width: 600px) {
    border-top: 1px solid #ddd;
    padding: 0px 20px;
  }
`;
