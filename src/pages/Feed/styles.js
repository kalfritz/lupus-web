import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-areas: 'trends feed friends';
  grid-gap: 15px;
`;

export const Trends = styled.aside`
  display: grid;
  grid-area: trends;
  background: green;
`;
export const PostList = styled.section`
  display: grid;
  grid-area: feed;
  background: #eee;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;
