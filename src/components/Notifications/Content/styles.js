import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  margin-left: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 13px;
      line-height: 18px;
      margin-bottom: 5px;
      display: block;

      span {
        font-weight: bold;
        margin-right: 5px;

        & + span {
          margin-left: ${props =>
            props.notif.context === 'friendship' && '5px'};
        }
      }
    }
    time {
      display: block;
      font-size: 12px;
      opacity: 0.6;
    }
  }

  img {
    width: 50px;
    height: 60px;
  }
`;
