import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #eee;
  margin-left: 10px;
  width: 350px;
  border-radius: 5px;
  position: relative;

  @media (max-width: 800px) {
    width: 325px;
  }

  @media (max-width: 560px) {
    ${props =>
      props.showSearchBar
        ? css`
            width: 100%;
          `
        : css`
            width: auto;
            border: 0;
          `}
  }

  & > input {
    border: 0;
    padding: 5px;
    width: 100%;

    &::placeholder {
      color: #999;
    }

    ${props =>
      !props.showSearchBar &&
      css`
        display: none;
      `}
  }

  & > button {
    padding: 5px 10px;
    background: #eee;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props =>
      !props.showSearchBar &&
      css`
        background: transparent;
      `}

    & > svg {
      &:hover {
        fill: #666;
      }
    }
  }
`;

export const Users = styled.div`
  position: absolute;
  width: 100%;
  top: 28px;
  left: 0;
  border: 1px solid #ddd;
  border-top: 1px solid #999;
  border-radius: 5px;
  background: #fff;
`;

export const UserLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  & > span {
    font-weight: normal;
    text-transform: lowercase;
  }

  & > img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  &:hover {
    background: rgb(236, 240, 247);
  }
  &:link {
    color: unset;
  }
  &:visited {
    color: unset;
  }
`;
