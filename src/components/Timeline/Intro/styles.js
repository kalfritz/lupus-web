import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background: #fff;
  margin-bottom: 15px;
  position: relative;

  header {
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    & > svg {
      margin-right: 5px;
    }
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;
export const Bio = styled.div`
  margin-bottom: 10px;
  & > p {
    text-align: center;
    margin-right: 5px;
  }

  & > svg {
    opacity: 0;
    position: absolute;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
  }
`;
export const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > svg {
    margin-right: 5px;
  }

  span {
    color: blue;
  }
`;
