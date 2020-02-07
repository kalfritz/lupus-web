import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  padding: 0px 15px 0px;
  padding-top: calc(64px + 10px);
  grid-template-columns: 25fr 59fr 18fr;
  grid-template-areas: '. feed .';
  grid-gap: 15px;

  @media (max-width: 1050px) {
    grid-gap: 10px;
    padding-left: 10px;
    padding-top: calc(64px + 10px);
    grid-template-columns: 4fr 8fr;
    grid-template-areas: '. feed';
  }

  @media (max-width: 800px) {
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
  height: calc(100vh - 10px - 64px); /*64px = header, 10px = extra margin*/
  position: fixed;
  width: 25vw;
  left: 0px;
  top: calc(64px + 10px); /*64px = header, 10px = extra margin*/

  @media (max-width: 1050px) {
    width: 33vw;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
export const PostList = styled.section`
  width: 100%;
  display: grid;
  grid-area: feed;
  background: #eee;
  margin: 0 2px;
  padding: 10px 20px 15px;

  @media (max-width: 1050px) {
    padding: 10px 15px 15px;
  }
  @media (max-width: 800px) {
    margin: 0px 0px;
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
