import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3px;
  padding: 15px;
  grid-gap: 15px;

  @media (max-width: 800px) {
    grid-gap: 5px;
    padding: 0px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 450px) {
    padding: 0px;
  }
`;
export const Person = styled.div`
  padding: 0 10px 0 0;
  border: 1px solid #ddd;
  background: #eee;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 400px) {
    padding: 5px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ImageLink = styled(Link)`
  margin: 0;

  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > img {
    height: 100px;
    width: 100px;
    margin-right: 10px;

    @media (max-width: 900px) {
      height: 90px;
      width: 90px;
    }

    @media (max-width: 750px) {
      height: 75px;
      width: 75px;
      margin-right: 5px;
    }

    @media (max-width: 400px) {
      height: 80px;
      width: 80px;
      margin-right: 5px;
    }
    @media (max-width: 350px) {
      height: 75px;
      width: 75px;
    }
  }
`;
export const NameLink = styled(Link)`
  & > p {
    font-size: 14px;
  }

  &:link {
    color: rgb(74, 88, 168);
  }
  &:visited {
    color: rgb(74, 88, 168);
  }
`;

export const NoBlocks = styled.div`
  background: #ddd;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
