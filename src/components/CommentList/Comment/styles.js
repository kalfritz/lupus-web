import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 15px;

  & > div {
    width: 100%;
  }

  &:last-child {
    ${props =>
      props.isRenderedInModal
        ? css`
            margin-bottom: 15px;
            @media (max-width: 800px) {
              margin-bottom: 30px;
            }
          `
        : css`
            margin-bottom: 0px;
          `};
  }
`;
export const UsernameAndContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  padding: 0px 5px;
  width: 100%;

  & > p {
    font-size: 14px;
    color: #111;

    /* word-break: break-all; Only one that actually worked */
  }
`;
export const LikeAndTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;

  /* button {
    margin-right: 10px;
    outline: 0;
    border: 0;
    background: transparent;
    color
  } */
  svg {
    height: 14px;
    width: 14px;
    margin-right: 3px;
    cursor: pointer;

    ${props =>
      props.liked &&
      css`
        g,
        path {
          fill: rgba(237, 73, 86, 1);
          stroke: rgba(237, 73, 86, 1);
        }
      `}

    &:hover {
      g,
      path {
        fill: rgba(237, 73, 86, 1);
        stroke: rgba(237, 73, 86, 1);
      }
    }
  }
  span {
    margin-right: 8px;
    &:hover {
      cursor: pointer;
    }
  }
  small {
    font-size: 13px;
    color: #999;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const UsernameLinkBox = styled.div`
  border: 0;
  position: relative;
  color: #7159c1;
  font-weight: bold;
  display: inline-block;
  margin-right: 3px;

  @media (max-width: 700px) {
    /* display: block; */
  }

  &:hover {
    cursor: pointer;
  }
`;

export const LikeBox = styled.div`
  position: relative;
  display: block;

  & > strong {
    color: #111;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ImgLink = styled(Link)`
  & > img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
export const UsernameLink = styled(Link)`
  & > span {
    font-size: 15px;
    color: #7159c1;
    font-weight: bold;
  }

  &:link {
    color: unset;
  }
  &:visited {
    color: unset;
  }
`;
