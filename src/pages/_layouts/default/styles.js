import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  background: #888888;
  display: grid;
  grid-template-columns: 84fr 18fr;
  grid-template-areas: 'children aside';
  grid-gap: 20px;

  @media (max-width: 1050px) {
    margin: 0;
    padding: 0;
    grid-gap: 0px;
    grid-template-columns: 1fr 10px;
    grid-template-areas: 'children .';
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'children';
  }
`;

export const Children = styled.div`
  grid-area: children;
  margin-top: 64px;
`;

export const Aside = styled.div`
  grid-area: aside;
`;
