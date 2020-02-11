import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  margin-top: 15px;
  position: relative;
  width: 100%;
  grid-template-columns: 4fr 7fr 1fr;
  grid-template-areas: 'aside timeline .';
  grid-gap: 15px;

  & > aside {
    grid-area: aside;
  }
`;

export const PostList = styled.section`
  grid-area: timeline;
  background: transparent;
  padding: 0px 0px 15px;
  display: flex;
  flex-direction: column;
`;
