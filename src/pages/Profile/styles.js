import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  padding: 0px 15px 0px;
  padding-top: calc(64px + 15px);
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-areas: '. timeline .';
  grid-gap: 15px;
`;
export const Trends = styled.aside`
  display: grid;
  background: green;

  /* @media (max-width: 700px) {
    display: none;
    min-width: 100%;
  }*/
`;
export const PostList = styled.section`
  display: grid;
  grid-area: timeline;
  width: 100%;
  margin: 0 auto;
  background: #eee;
  transform: translateX(-10px);

  /*@media (max-width: 700px) {
    padding: 5px 15px 10px;
    margin: 0;
  }*/
`;
