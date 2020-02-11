import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: calc(100vw - 17px - 18vw);
  padding: 0px 15px;
  padding-top: 64px;

  @media (max-width: 1050px) {
    width: calc(100vw - 17px - 2vw);
    padding: 0px 5px 0px;
  }
  @media (max-width: 800px) {
    width: 100vw;
    padding: 0;
  }

  section {
    display: flex;
  }
`;

export const Cover = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  width: calc(100% / 12 * 11 - 13px);
  margin: 0;
  height: 350px;
`;

export const ProfilePic = styled.img`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translate(-50%, 0);
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  background: #fff;
  width: calc(100% / 12 * 11 - 13px);
  line-height: 24px;
  font-size: 24px;
  color: #222;
`;

export const Nav = styled.nav`
  padding: 0 0 0;
  width: calc(100% / 12 * 11 - 13px);
  margin: 0;
  background: #fff;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  color: none;
  margin: 0 20px;

  &:link {
    color: #333;
  }
  &:visited {
    color: #333;
  }
`;
