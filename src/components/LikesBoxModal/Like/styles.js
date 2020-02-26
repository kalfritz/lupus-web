import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  & + div {
    border-top: 1px solid #ddd;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    position: relative;
    & > img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-right: 10px;
      position: relative;

      &:hover {
        cursor: pointer;
      }
    }
    & > svg {
      position: absolute;
      bottom: 2px;
      right: 8px;
      width: 16px;
      height: 16px;
    }
  }
`;
