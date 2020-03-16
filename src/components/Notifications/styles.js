import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  z-index: 2;
  position: relative;

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

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
        color: #fff;
        right: -2px;
        top: -5px;
        width: 10px;
        height: 10px; 
        background: #ff892e;
        border-radius: 50%;
        content: '${props => props.unreadCount}';
      }
    `}
`;

export const NotificationList = styled.div`
  border: 1px solid #bbb;
  position: absolute;
  width: 400px;
  left: calc(50% - 201px);
  top: calc(100% + 30px);
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 5px 0px 15px;
  display: ${props => (props.visible ? 'block' : 'none')};

  @media (max-width: 1050px) {
    left: calc(50% - 251px);
  }
  @media (max-width: 700px) {
    left: calc(50% - 320px);
  }
  @media (max-width: 500px) {
    width: 350px;
    left: calc(50% - 260px);
  }

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

    @media (max-width: 700px) {
      left: 75%;
    }

    @media (max-width: 500px) {
      left: calc(68%);
    }
  }

  & > header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    & > h2 {
      font-size: 16px;
      color: #333;
    }

    & > button {
      border: 0;
      outline: 0;
      background: none;
    }
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 380px;
  padding: 0px 15px 5px;
`;

export const Notification = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  color: #222;
  padding: 5px 10px;

  & > section {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  &:hover {
    background: #ddd;
  }

  margin-top: 5px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  ${props =>
    props.unread &&
    css`
      background: #ddd;

      &:hover {
        background: #ccc;
      }
    `}
`;

export const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;

export const NotifActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 3px;

  & > button {
    border: 0;
    background: transparent;
    &:first-child {
      width: 7px;
      height: 7px;
      margin-bottom: 5px;
      div {
        margin: 0;
        height: 7px;
        width: 7px;
        border-radius: 50%;
        border: 0;
        outline: 0;
        cursor: pointer;
        background: #aaa;
      }
    }
  }

  svg {
    cursor: pointer;
  }
`;
