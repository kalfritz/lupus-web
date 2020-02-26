import styled from 'styled-components';

export const Container = styled.div``;

export const PostList = styled.section`
  width: 100%;
  display: grid;
  grid-area: feed;
  background: #eee;
  margin-top: 10px;

  padding: 10px 20px 15px;

  @media (max-width: 1050px) {
    padding: 10px 15px 15px;
  }
`;
export const CreatePostBox = styled.div`
  width: 100%;
  border: 1px solid #eee;

  header {
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 20px;
      color: #111;
    }
  }
  & > div {
    width: 100%;
    position: relative;
    margin-top: 10px;
    background: white;
    padding: 10px 10px;
    display: flex;
    align-items: flex-start;

    & > svg {
      position: absolute;
      top: 10px;
      right: 15px;
    }

    & > img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 10px;

      &:hover {
        cursor: pointer;
      }
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > label {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        & > input {
          display: none;
        }
        &:hover {
          opacity: 0.9;
        }
      }
      & > div {
        width: 100%;
        position: relative;
        & > img {
          width: 100%;
          max-height: 300px;
          margin-top: 10px;
        }
      }
      textarea {
        font-family: roboto;
        font-size: 16px;
        line-height: 18px;
        border: 0;
        width: 100%;
        padding: 0 30px 0px 15px;
        resize: none;
        overflow: hidden;
        height: unset;
      }
      & > button {
        width: 100%;
        margin: 0 auto;
        border: 0;
        outline: 0;
        padding: 8px 0px;
        margin-top: 10px;
        margin-bottom: 0px;
        background: gold;
        font-size: 16px;
        color: #555;
        border-radius: 6px;
        &:focus {
          outline: none;
        }
        &::-moz-focus-inner {
          border: 0;
        }
      }
    }
  }
`;

export const Actions = styled.div`
  position: absolute;
  top: 18px;
  right: 10px;

  & > button {
    border: 0;
    outline: 0;
    background: transparent;
  }
`;
