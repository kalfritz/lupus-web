import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: calc(80vw - 17px);
  padding: 0px 15px;

  @media (max-width: 1050px) {
    width: calc(100vw - 17px - 2vw);
    width: calc(100vw - 17px);
    padding: 0px 5px 0px;
  }
  @media (max-width: 800px) {
    padding: 0;
    width: 100%;
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
  background: #eee;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  /* width: calc(100% / 12 * 11 - 13px); */
  width: 100%;
  margin: 0;
  height: 350px;
`;

export const ProfilePic = styled.img`
  position: absolute;
  top: -125px;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 0 auto;
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

export const UserNameAndOptions = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 15px 0px;
  background: #fff;
  width: 100%;
  line-height: 24px;
  font-size: 24px;
  color: #222;

  & > div {
    &:last-child {
    }
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Options = styled.div`
  flex: 0 1 auto;
  margin-left: auto;
  transform: translateY(-5px);

  display: flex;
  flex-direction: row;
  min-height: 32px;

  @media (max-width: 550px) {
    transform: translateY(0px);
  }
`;

export const BlockButton = styled.button`
  margin-left: 5px;
  border: 1px solid #ccc;
  outline: 0;
  background: #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 5px;

  & > svg {
    margin-right: 5px;
  }
  & > span {
    font-size: 14px;
    font-weight: 400;
    color: #333;
  }

  ${props =>
    props.context === 'left'
      ? css`
          display: none;
          @media (max-width: 550px) {
            display: flex;
            margin-left: 0px;
            padding: 7px;
          }
        `
      : css`
          @media (max-width: 550px) {
            display: none;
          }
        `}
`;

export const Name = styled.div`
  margin-right: auto;
  flex: 0 1 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Nav = styled.nav`
  padding: 0 0 0;
  /* width: calc(100% / 12 * 11 - 13px); */
  width: 100%;
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
