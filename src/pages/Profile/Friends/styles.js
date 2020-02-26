import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;
`;

export const Content = styled.div`
  background: #fff;

  & > div {
    padding: 10px;
    font-size: 18px;
    margin-bottom: 0px;

    &:first-child {
      display: flex;
      align-items: center;
      padding: 10px 10px 0px;

      & > svg {
        margin-right: 5px;
      }
    }
  }

  header {
    padding: 10px;
    font-size: 18px;
    margin-bottom: 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FriendNavLink = styled(NavLink)`
  margin: 0 20px 0 0;
  font-size: 15px;

  &:link {
    color: rgb(74, 88, 168);

    &.is-active {
      color: #333;
    }
  }
  &:visited {
    color: rgb(74, 88, 168);

    &.is-active {
      color: #333;
    }
  }

  & > span {
    margin: 0 2px;
    color: #999;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  border: 1px solid #ccc;

  svg {
    margin-right: 0px;

    &:hover {
      fill: #777;
    }
  }

  @media (max-width: 500px) {
    padding: 0px 2px;
  }

  input {
    width: 100%;
    outline: 0;
    border-radius: 4px;
    border: 0;
    padding: 5px 5px;
    color: #222;
    background: transparent;

    @media (max-width: 800px) {
      width: 160px;
    }
    @media (max-width: 500px) {
      width: 140px;
      padding: 5px 2px;
    }
  }
`;

export const FriendContainer = styled.div`
  padding: 50px;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;
