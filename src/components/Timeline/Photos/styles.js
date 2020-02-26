import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: auto;
  background: #fff;
  grid-area: photos;
  header {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 10px;
  }
`;

export const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  grid-gap: 3px;
  padding: 0 3px 3px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 120px 120px;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 120px 120px;
  }
`;
export const Photo = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;

  @media (max-width: 800px) {
    &:nth-child(n + 5):nth-child(-n + 9) {
      display: none;
    }
  }
  @media (max-width: 450px) {
    &:nth-child(n + 5):nth-child(-n + 6) {
      display: block;
    }
  }
`;

export const PhotosLink = styled(Link)`
  &:link {
    color: unset;
  }
  &:visited {
    color: unset;
  }

  & > svg {
    margin-right: 5px;
  }

  display: flex;
  align-items: center;
`;
