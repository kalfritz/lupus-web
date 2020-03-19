import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
  z-index: 3;

  @media (max-width: 560px) {
    ${props =>
      props.showSearchBar &&
      css`
        display: none;
      `}
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
  margin-right: 15px;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const RequestList = styled.div`
  border: 1px solid #bbb;
  position: absolute;
  width: 400px;
  left: calc(50% - 208px);
  top: calc(100% + 30px);
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 5px 0px 0px;
  @media (max-width: 1050px) {
    left: calc(50% - 258px);
  }
  @media (max-width: 500px) {
    width: 350px;
    left: calc(50% - 229px);
  }

  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);

    @media (max-width: 1050px) {
      left: calc(58% - 2px);
    }
    @media (max-width: 500px) {
      left: calc(58% - 2px);
    }
  }

  h2 {
    font-size: 16px;
    color: #333;
    margin-left: 15px;
    margin-bottom: 5px;
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 380px;
  padding: 0px 15px 15px;
`;

export const Request = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  color: #222;
  padding: 5px 10px;

  & > div {
    display: flex;
    align-items: center;
  }

  & + div {
    margin-top: 5px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.unread &&
    css`
      background: rgba(128, 0, 128, 0.1);

      &:hover {
        background: rgba(128, 0, 128, 0.2);
      }
    `}
`;

export const ProfileLink = styled(Link)`
  & > img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  & > span {
    font-size: 15px;
    color: #7159c1;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: 0;
  outline: 0;
  margin-left: 5px;
  color: #fff;
  font-weight: 550;
  ${props =>
    props.color === 'accept' &&
    css`
      /* background: #3b9eff; */
      background: #3b9eff;

      &:hover {
      }
    `}
  ${props =>
    props.color === 'reject' &&
    css`
      /* background: #f64c75; */
      background: #ddd;
      color: #111;
    `};
`;
