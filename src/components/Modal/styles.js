import styled, { css } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 16fr 1fr;
  grid-template-rows: 1fr 14fr 1fr;
  grid-template-areas:
    '.    .    .'
    '. content .'
    '.    .    .';

  & > button {
    position: absolute;
    top: 1%;
    right: 1%;
    border: 0;
    outline: 0;
    background: none;
  }
`;

export const Content = styled.div`
  grid-area: content;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 14fr 8fr;
  grid-template-areas: 'img post';
  background: white;

  & > img {
    grid-area: img;
    width: 100%;
    height: 90vh;
  }

  section {
    position: relative;
    width: 100%;
    transform: translate(0, 0);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'post';

    & > img {
      display: none;
    }
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  padding: 20px 20px;
  max-height: 80vh;
  width: 100%;
  grid-area: post;

  & > p {
    margin-bottom: 10px;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  footer {
    margin-top: 35px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;

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

export const MoreActions = styled.div`
  position: relative;
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

  & > strong {
    color: #111;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const MoreActionsModel = styled.div`
  position: absolute;
  border: 1px solid #bbb;
  box-shadow: 2px 2px 2px #bbb;
  width: 200px;
  right: 0px;
  top: calc(20px);
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
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

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0px;

  strong {
  }

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

export const PostContent = styled.div`
  width: 100%;
  border: 0;
  outline: 0;
  & > p {
    color: #222;
    font-size: 15px;
    line-height: 18px;
    margin: 15px 0px;
  }

  & > img {
    width: 100%;
    max-height: 40vh;
    cursor: pointer;
    display: none;

    @media (max-width: 800px) {
      display: block;
    }
  }

  & > form {
    display: block;
    width: 94%;
    margin: 15px 0px;

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
