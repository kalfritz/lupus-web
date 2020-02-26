import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  margin-top: 15px;
  width: 100%;
  grid-template-columns: 4fr 8fr;
  grid-template-areas:
    'aside timeline'
    ' . timeline';
  grid-template-rows: auto auto;
  grid-gap: 15px;

  @media (max-width: 800px) {
    margin-top: 5px;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    grid-template-areas:
      'aside aside'
      'timeline timeline ';
  }

  & > aside {
    grid-area: aside;
    display: grid;
    padding-bottom: 5px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'intro'
      'photos'
      'friends';
    grid-gap: 15px;

    @media (max-width: 800px) {
      display: grid;
      grid-gap: 5px;
      grid-template-columns: 3fr 5fr;

      grid-template-areas:
        'intro intro'
        'friends photos';
    }
    @media (max-width: 600px) {
      grid-template-columns: 5fr 7fr;
    }
    @media (max-width: 450px) {
      grid-template-columns: 1fr;
      grid-gap: 0px;
      grid-row-gap: 5px;
      grid-template-areas:
        'intro'
        'photos'
        'friends';
    }

    /* @media (max-width: 700px) {
      grid-template-columns: 3fr 5fr;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        'intro intro'
        'friends photos'
        'friends photos';
    } */
  }
`;

export const PostList = styled.section`
  grid-area: timeline;
  background: transparent;
  padding: 0px 0px 15px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    background: #eee;
    padding: 40px 40px 15px;
  }
  @media (max-width: 750px) {
    background: #eee;
    padding: 35px 35px 15px;
  }
  @media (max-width: 700px) {
    background: #eee;
    padding: 30px 30px 15px;
  }
  @media (max-width: 650px) {
    background: #eee;
    padding: 25px 25px 15px;
  }
  @media (max-width: 600px) {
    background: #eee;
    padding: 20px 20px 15px;
  }
  @media (max-width: 550px) {
    background: #eee;
    padding: 20px 20px 15px;
  }
  @media (max-width: 500px) {
    background: #eee;
    padding: 15px 15px 15px;
  }
  @media (max-width: 450px) {
    background: #eee;
    padding: 0px 0px 15px;
  }
`;
