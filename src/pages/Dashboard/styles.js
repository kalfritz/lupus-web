import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    margin-top: 30px;
    display: flex;
    align-self: center;
    align-items: center;

    button {
      background: none;
      border: 0;
    }
    strong {
      font-size: 24px;
      color: #fff;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  opacity: ${props => (props.past ? 0.6 : 1)};
  strong {
    display: block;
    font-size: 20px;
    font-weight: normal;
    color: ${props => (props.available ? '#999' : '#7159c1')};
  }
  span {
    display: block;
    margin-top: 3px;
    color: #666;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
