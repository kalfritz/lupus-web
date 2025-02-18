import styled from 'styled-components';

export const Container = styled.div`
  height: ${props => props.height || '100%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
