import styled from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
  padding: 10px 0px;
  background: #ddd;
  height: calc(100vh - 64px - 15px); /*64px = header, 15px = extra margin*/
  position: fixed;
  width: 23.5vw;
  right: calc(17px + 15px); /*17px = scrolllbar, 15px = extra margin*/
  top: calc(64px + 15px); /*64px = header, 15px = extra margin*/
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 15px;
    padding: 0px 10px;
  }

  img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    margin-right: 10px;
  }

  @media (max-width: 1000px) {
    right: calc(17px + 10px);
    top: calc(64px + 10px);
    height: calc(100vh - 64px - 10px);
  }

  @media (max-width: 950px) {
    width: 32vw;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  padding: 15px 5px 0px;
  border-top: 1px solid #ccc;
`;

export const Friend = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &:hover {
    background: #ccc;
    cursor: pointer;
  }
`;

export const GreenCircle = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: rgba(66, 183, 42, 1);
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;

  svg {
    margin-right: 5px;

    &:hover {
      fill: #777;
    }
  }

  input {
    width: 100%;
    outline: 0;
    border-radius: 4px;
    border: 0;
    padding: 5px 10px;
    color: #222;
    background: transparent;
  }
`;
