import styled, { css } from 'styled-components';

export const Container = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  margin-top: 15px;

  &:first-child {
    margin-top: 0;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
  }

  footer {
    padding: 0px 15px 10px;
  }

  ul {
    padding: 10px 20px;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 15px;
      color: #7159c1;
      font-weight: bold;

      &:hover {
        cursor: pointer;
      }
    }

    small {
      font-size: 13px;
      color: #999;
      margin-top: 2px;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export const Content = styled.div`
  & > p {
    color: #222;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 15px;
    margin-left: 20px;
  }

  & > img {
    width: 100%;
    max-height: 70vh;
    margin-bottom: 15px;
    cursor: pointer;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;

  img {
    margin-right: 10px;
    cursor: pointer;
  }
  svg {
    margin-right: 10px;
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
`;

export const MoreActions = styled.div`
  position: relative;
  transform: translateY(-10px);
  & > img {
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export const LikeBox = styled.div`
  position: relative;
  display: block;

  & > span {
    color: #111;
    font-weight: bold;
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const MoreActionsModel = styled.div`
  position: absolute;
  border: 1px solid #eee;
  width: 200px;
  left: calc(100% - 200px);
  top: calc(100% + 5px);
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 15px 10px;
  display: ${props => (props.visible ? 'block' : 'none')};

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 10px;

      strong {
        color: #333;
        font-weight: bold;
      }
      span {
        font-size: 12px;
        color: #999;
        margin-top: 2px;
      }
    }
  }
`;
