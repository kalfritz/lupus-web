import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
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

export const NotificationList = styled.div`
  position: absolute;
  width: 400px;
  left: calc(50% - 200px);
  top: calc(100% + 30px);
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 15px 0px;
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
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 380px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  display: flex;
  align-items: center;
  background: #eee;
  color: #222;
  display: flex;
  padding: 5px 10px;

  &:hover {
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
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;
