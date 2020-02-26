import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;
`;

export const Content = styled.div`
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 3px;
  padding: 0 3px 3px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const Photo = styled.div`
  position: relative;
  cursor: pointer;
  & > img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
  }

  &:before {
    content: '';
    padding: 50% 0%;
    display: inline-block;
  }
`;
