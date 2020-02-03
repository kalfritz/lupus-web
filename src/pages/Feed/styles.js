import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  padding: 0px 15px 0px;
  padding-top: calc(64px + 15px);
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-areas: '. feed .';
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-gap: 10px;
    padding-left: 10px;
    padding-top: calc(64px + 10px);
  }

  @media (max-width: 950px) {
    grid-template-columns: 8fr 4fr;
    grid-template-areas: 'feed .';
  }

  @media (max-width: 760px) {
    margin: 0;
    padding: 0;
    padding-top: 64px;
    grid-template-columns: 1fr;
    grid-template-areas: 'feed';
  }
`;

export const Trends = styled.aside`
  position: relative;
  background: yellowgreen;
  height: calc(100vh - 15px - 64px); /*64px = header, 15px = extra margin*/
  position: fixed;
  width: 23.5vw;
  left: calc(15px); /*margin*/
  top: calc(64px + 15px); /*64px = header, 15px = extra margin*/

  @media (max-width: 1000px) {
    left: 10px;
    top: calc(64px + 10px);
    height: calc(100vh - 10px - 64px);
  }

  @media (max-width: 950px) {
    display: none;
  }
`;
export const PostList = styled.section`
  width: 100%;
  display: grid;
  grid-area: feed;
  background: #eee;
  margin: 0 auto;
  padding: 10px 20px 15px;

  @media (max-width: 1000px) {
    padding: 10px 15px 15px;
  }
  @media (max-width: 950px) {
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
  div {
    width: 100%;
    margin-top: 10px;
    background: white;
    padding: 10px 10px;
    display: flex;
    align-items: flex-start;

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
      textarea {
        font-size: 16px;
        line-height: 18px;
        border: 0;
        width: 100%;
        padding: 0 15px;
        resize: none;
        overflow: hidden;
        height: unset;
      }
      button {
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
      }
    }
  }
`;
