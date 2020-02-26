import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  cursor: default;
  left: 0px;
  width: 370px;
  margin: 0;
  height: 255px;
  transform: translateX(0);
  top: 10px;
  z-index: 10;

  ${props =>
    props.aboveMiddleOfScreenOnYAxis
      ? css`
          top: 10px;
          padding: 10px 0 0 0;
        `
      : css`
          top: -250px;
          padding: 0 0 10px 0;
        `}
`;

export const Content = styled.div`
  border: 1px solid #999;
  background: #fff;
  display: flex;
  height: 245px;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Cover = styled.img`
  height: 55%;
  width: 100%;
  background: #eee;
`;

export const ProfilePic = styled.img`
  position: absolute;
  top: 60%;
  left: 7px;
  box-sizing: content-box;
  transform: translateY(-50%);
  height: 100px;
  width: 100px;
  padding: 5px;
  border: 1px solid #999;
  background: #fff;
`;

export const Username = styled(Link)`
  position: absolute;
  top: 40%;
  left: calc(8px + 110px + 8px);
  color: #fff;
  font-weight: bold;
  & > span {
    color: #fff;
  }
  &:link {
    color: unset;
  }
  &:visited {
    color: unset;
  }
`;

export const LocationAndFriends = styled.div`
  transform: translateY(-5px);
  margin-left: calc(10px + 110px + 10px);
  display: flex;
  flex-direction: column;
`;

export const Friends = styled.div`
  margin-bottom: 2px;
  h4 {
    color: #555;
    font-weight: 400;

    & > svg {
      margin-right: 5px;
      transform: translateY(3px);
    }
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 10px;

  h4 {
    color: #555;
    font-weight: 400;
    & > svg {
      margin-right: 5px;
      transform: translateY(3px);
    }

    & > span {
      margin-left: 3px;
      color: rgba(0, 0, 255, 0.5);
    }
  }
`;

export const FriendshipOptions = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: end;

  align-items: center;
  background: #eee;

  & > div {
    margin-right: 5px;

    & > button {
      padding: 3px 5px;
      background: #fff;
    }
  }
`;
