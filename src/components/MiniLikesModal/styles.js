import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  background: #333;
  padding: 5px 6px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
`;

export const Like = styled.div`
  color: #fff;
  display: block;

  & > span {
    display: block;
  }
`;
