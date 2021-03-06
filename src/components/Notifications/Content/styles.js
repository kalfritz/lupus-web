import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NotifContent = styled(Link)`
  display: flex;
  margin-left: 10px;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > div {
      display: flex;
      flex-direction: column;
      min-height: 55px;
      justify-content: center;

      p {
        color: #111;
        font-size: 13px;
        line-height: 16px;

        overflow: hidden;
        text-overflow: ellipsis;

        span {
          color: black;
          font-weight: bold;
          margin-right: 5px;

          & + span {
            margin-left: ${props =>
              props.notif.context === 'friendship' && '5px'};
          }
        }
      }
    }

    & > img {
      margin-left: 5px;
      width: 50px;
      height: 50px;
    }
  }
`;

export const Time = styled.h3`
  color: #aaa;
  display: block;
  font-size: 12px;
`;
