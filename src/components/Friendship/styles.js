import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 5px;
  border: 1px solid #bbb;
  outline: 0;
  background: #eee;
  opacity: ${props => props.invisible && '0'};
  cursor: ${props => props.invisible && 'default'};
  & > svg {
    margin-right: 5px;
  }

  & > span {
    display: bold;
  }

  &:hover {
    background: #ddd;
  }
`;

export const FriendshipOptions = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
  padding-top: 15px;
  background: transparent;
  left: 0;
  cursor: default;
  z-index: 10;

  display: ${props => (props.visible ? 'block' : 'none')};

  @media (max-width: 1050px) {
  }
  @media (max-width: 800px) {
  }
`;

export const FriendshipOptionsContent = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  z-index: 20px;
  padding: 5px;
  & > button {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;

    &:nth-child(2) {
      border-top: 1px solid #eee;
    }

    &:hover {
      background: #eee;
    }
  }
`;
