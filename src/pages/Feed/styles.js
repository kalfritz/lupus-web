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
