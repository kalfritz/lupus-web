import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #fff;
  grid-area: friends;

  header {
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;

    span {
      margin: 0 5px;

      &:last-child {
        color: #999;
        font-size: 15px;
      }
    }
  }
`;

export const FriendsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 3px;
  padding: 0 3px 3px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
export const Friend = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    &:nth-child(n + 7):nth-child(-n + 9) {
      display: none;
    }
  }
  @media (max-width: 600px) {
    &:nth-child(n + 5):nth-child(-n + 9) {
      display: none;
    }
  }
  @media (max-width: 450px) {
    &:nth-child(n + 5):nth-child(-n + 7) {
      display: block;
    }
  }

  &:link {
    color: rgb(74, 88, 168);
  }
  &:visited {
    color: rgb(74, 88, 168);
  }

  & > img {
    height: 100px;
    width: 100px;

    @media (max-width: 600px) {
      width: 115px;
    }
    @media (max-width: 500px) {
      width: 100px;
    }
    @media (max-width: 450px) {
      width: 115px;
    }
    @media (max-width: 400px) {
      width: 105px;
    }
  }

  & > p {
    font-size: 14px;
    align-self: start;
  }
`;

export const FriendsLink = styled(Link)`
  &:link {
    color: unset;
  }
  &:visited {
    color: unset;
  }

  display: flex;
  align-items: center;
`;
