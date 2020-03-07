import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 4fr 8fr;
  grid-template-areas: 'aside route';
  grid-gap: 10px;

  @media (max-width: 1050px) {
    grid-gap: 10px;
    padding-left: 10px;
    grid-template-columns: 4fr 8fr;
    grid-template-areas: 'aside route';
  }

  @media (max-width: 800px) {
    grid-template-columns: 40px 1fr 40px;
    grid-template-areas: '. route .';
  }
  @media (max-width: 750px) {
    grid-template-columns: 20px 1fr 20px;
    grid-template-areas: '. route .';
  }
  @media (max-width: 700px) {
    grid-template-columns: 0px 1fr 0px;
    grid-template-areas: '. route .';
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'route';
    padding: 0;
  }

  @media (max-width: 500px) {
  }
  @media (max-width: 450px) {
  }
  @media (max-width: 400px) {
  }
`;

export const RouteBox = styled.div`
  grid-area: route;
`;

export const Aside = styled.aside`
  position: relative;
  width: 100%;
  & > nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 26.5%;
    display: flex;
    flex-direction: column;
    background: #eee;
    min-height: 100vh;
    height: 100%;
    padding: calc(10px + 64px) 10px 0px 25px;

    @media (max-width: 1050px) {
      width: 32.6%;
    }

    & > div {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const HomeNavLink = styled(NavLink)`
  & + a {
    margin-top: 15px;
  }
  &:link {
    color: #222;
    &.is-active {
      font-weight: bold;
    }
  }
  &:visited {
    color: #222;
    &.is-active {
      font-weight: bold;
    }
  }
`;

export const ProfileLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #222;

  & > img {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin-right: 10px;
  }

  & > span {
  }

  &:link {
    color: unset;
  }
  &:visited {
    color: unset;
  }
`;
