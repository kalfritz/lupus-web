import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.article`
  background: #fff;

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

  & > div {
    display: flex;
    flex-direction: column;

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
  width: 100%;
  border: 0;
  outline: 0;
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

  & > form {
    width: 94%;
    margin: 0px auto;

    & > textarea {
      color: #222;
      font-size: 15px;
      line-height: 18px;
      resize: none;
      overflow: hidden;
      font-family: roboto;
      width: 100%;
      margin-bottom: 10px;
      border: 0;
    }

    & > div {
      display: flex;
      margin-bottom: 10px;

      & > button {
        width: 50%;
        border: 0;
        outline: 0;
        padding: 8px 0px;
        background: #f64c75;
        font-size: 16px;
        color: #fff;
        border-radius: 6px;
        &:focus {
          outline: none;
        }
        &::-moz-focus-inner {
          border: 0;
        }
        &:hover {
          background: ${darken(0.03, '#f64c75')};
        }

        &:last-child {
          margin: 0 0 0 15px;
          background: rgba(66, 183, 42, 1);

          &:hover {
            background: ${darken(0.03, 'rgba(66, 183, 42, 1)')};
          }
        }
      }
    }
  }
`;

export const ConfirmSpan = styled.span`
  color: #d07502 !important;
  flex-direction: row;
  align-items: center;

  & > svg {
    margin-right: 5px;
  }
  ${props =>
    props.confirm
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
`;
export const DeleteSpan = styled.span`
  ${props =>
    props.confirm
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
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
  padding: 0px;
  display: ${props => (props.visible ? 'block' : 'none')};

  & > button {
    border: 0;
    outline: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 10px;
    width: 100%;
    background: #fff;

    &:focus {
      outline: none;
    }
    &::-moz-focus-inner {
      border: 0;
    }

    &:hover {
      background: #eee;
    }

    &:first-child {
      ${props =>
        props.editable &&
        css`
          border-bottom: 1px solid #eee;
        `}
    }

    & > svg {
      margin-right: 5px;
    }

    & > span {
      color: #333;
    }

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

export const ImgLink = styled(Link)`
  & > img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const NameLinkBox = styled.div`
  position: relative;
`;

export const NameLink = styled(Link)`
  span {
    font-size: 15px;
    color: #7159c1;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }

  &:link {
    color: unset;
  }
  &:visited {
    color: unset;
  }
`;
