import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  margin-bottom: 15px;
  background: #fff;
  header {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 10px;

    & > svg {
      margin-right: 5px;
    }
  }
`;

export const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  grid-gap: 3px;
  padding: 0 3px 3px;
`;
export const Photo = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
