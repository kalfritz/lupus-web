import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  padding: 15px;
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-areas: 'trends feed friends';
  grid-gap: 15px;
`;
export const Trends = styled.aside`
  display: grid;
  grid-area: trends;
  background: green;

  /* @media (max-width: 700px) {
    display: none;
    min-width: 100%;
  }*/
`;
export const PostList = styled.section`
  display: grid;
  grid-area: feed;
  background: #eee;

  /*@media (max-width: 700px) {
    padding: 5px 15px 10px;
    margin: 0;
  }*/
`;

export const FriendList = styled.div`
  display: grid;
  grid-area: friends;
  background: blue;

  /* @media (max-width: 700px) {
    display: none;
    min-width: 100%;
  }*/
`;
