import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-area: friends;
  background: blue;

  @media (max-width: 700px) {
    display: none;
    min-width: 100%;
  }
`;
