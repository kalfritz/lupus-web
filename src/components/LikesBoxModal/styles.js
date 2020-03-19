import styled from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 5fr 6fr 5fr;
  grid-template-rows: 1fr 14fr 2fr;
  grid-template-areas:
    '.    .    .'
    '. content .'
    '.    .    .';

  & > button {
    position: absolute;
    top: 1%;
    right: 1%;
    border: 0;
    outline: 0;
    background: none;
  }

  @media (max-width: 1050px) {
    grid-template-columns: 4fr 6fr 4fr;
  }
  @media (max-width: 900px) {
    grid-template-columns: 3fr 6fr 3fr;
  }
  @media (max-width: 750px) {
    grid-template-columns: 2fr 8fr 2fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 8fr 1fr;
  }
`;

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  background: white;

  border: 1px solid #bbb;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 5px 5px;
  cursor: auto;
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 400px;
  padding: 0px 8px;
`;
