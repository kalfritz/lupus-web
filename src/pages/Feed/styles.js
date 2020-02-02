import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-areas: 'trends feed friends';
  grid-gap: 15px;

  @media (max-width: 700px) {
    margin: 0;
    padding: 0px;
    grid-template-columns: 1fr;
    grid-template-areas: 'feed';
  }
`;

export const Trends = styled.aside`
  display: grid;
  grid-area: trends;
  background: green;

  @media (max-width: 700px) {
    display: none;
    min-width: 100%;
  }
`;
export const PostList = styled.section`
  width: 100%;
  display: grid;
  grid-area: feed;
  background: #eee;
  margin: 0 auto;
  padding: 10px 20px 15px;

  @media (max-width: 700px) {
    padding: 5px 5px 10px;
    margin: 0;
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
