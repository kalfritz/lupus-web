import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
`;
export const Content = styled.div`
  background: #fff;
  padding: 12px;
  display: flex;
  flex-direction: row;

  & > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ddd;
    margin-right: 10px;
  }
`;

export const Time = styled.h3`
  margin-top: 5px;
  color: rgb(151, 166, 189);
  font-weight: 300;
  display: block;
  font-size: 12px;
`;

export const NotifLink = styled(Link)`
  & > svg {
    position: absolute;
    top: 8px;
    right: 8px;
  }
  p {
    color: #333;
    max-width: 220px;
    span {
      font-weight: bold;
      color: #333;
    }
  }
`;
