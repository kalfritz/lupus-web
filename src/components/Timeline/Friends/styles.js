import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #fff;

  header {
    padding: 10px;
    font-size: 18px;
    margin-bottom: 10px;

    div {
      display: flex;
      align-items: center;

      span {
        margin: 0 5px;

        &:last-child {
          color: #999;
          font-size: 15px;
        }
      }
    }
  }
`;

export const FriendsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 3px;
  padding: 0 3px 3px;
`;
export const Friend = styled(Link)`
  &:link {
    color: rgb(74, 88, 168);
  }
  &:visited {
    color: rgb(74, 88, 168);
  }
  & > img {
    height: 100px;
    width: 100px;
  }
  & > p {
    font-size: 14px;
  }
`;
