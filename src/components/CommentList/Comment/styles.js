import styled, { css } from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: row;

  & + li {
    margin-top: 15px;
  }

  & > img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;
export const UsernameAndContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;

  p {
    font-size: 14px;
    color: #111;

    strong {
      color: #7159c1;
      font-weight: bold;
      margin-right: 3px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
export const LikeAndTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

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
