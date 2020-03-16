import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  background: #fff;
  padding: 0 30px;
  width: 100%;
  position: fixed;
  top: 0px;
  right: 17px;
  z-index: 1;

  @media (max-width: 1000px) {
    right: 0px;
  }
  @media (max-width: 600px) {
    padding: 0 15px;
  }
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    @media (max-width: 560px) {
      width: 100%;
    }

    & > img {
      padding-right: 20px;
      margin-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: bold;
      text-transform: uppercase;
      color: #444;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  position: relative;
  display: flex;
  margin-left: 15px;
  padding-left: 15px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    cursor: pointer;
  }

  & > div {
    &:first-child {
      @media (max-width: 700px) {
        display: none;
      }
    }
  }
`;

export const HeaderOptions = styled.div`
  position: absolute;
  border: 1px solid #eee;
  width: 200px;
  left: calc(100% - 200px);
  top: calc(100% + 5px);
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 10px 10px;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export const HeaderLink = styled(Link)`
  border: 0;
  width: 100%;
  padding: 6px 0px;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      font-size: 12px;
      margin-left: 10px;
      color: #444;
    }
  }
  &:hover {
    background: #eee;
  }
`;

export const LogoutButton = styled.button`
  margin-top: 6px;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 0px;
  border: 0;
  outline: 0;
  width: 100%;
  cursor: pointer;

  span {
    font-size: 12px;
    margin-left: 10px;
    color: #444;
  }

  &:hover {
    background: #eee;
  }

  border-top: 1px solid #ddd;
`;
