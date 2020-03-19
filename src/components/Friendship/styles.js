import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  ${props =>
    props.context === 'hover' &&
    css`
      background: #eee;
      width: 100%;
    `}

  ${props =>
    props.context === 'blocks_and_sents' &&
    css`
      background: #fff;
    `}
`;

export const ContentButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border: 1px solid #bbb;
  outline: 0;
  opacity: ${props => props.invisible && '0'};
  cursor: ${props => props.invisible && 'default'};
  & > svg {
    margin-right: 5px;
  }

  &:hover {
    background: #ddd;
  }

  ${props =>
    props.context === 'profile' &&
    css`
      background: #eee;
      padding: 3px 5px;
    `}

  ${props =>
    props.context === 'friend_grid' &&
    css`
      background: #eee;
    `}
`;

export const ContentDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  border: 1px solid #bbb;
  outline: 0;
  opacity: ${props => props.invisible && '0'};
  cursor: ${props => props.invisible && 'default'};
  & > svg {
    margin-right: 5px;
  }
  & > span {
    font-size: 14px;
    font-weight: 400;
    color: #333;
  }

  &:hover {
    background: #ddd;
  }

  ${props =>
    props.context === 'profile' &&
    css`
      background: #eee;
      padding: 3px 5px;
    `}

  ${props =>
    props.context === 'friend_grid' &&
    css`
      background: #eee;
    `}
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
