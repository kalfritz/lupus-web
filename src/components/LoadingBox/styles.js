import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  width: 100%;
  margin-top: ${props => (props.context === 'feed' ? '10px' : '0px')};
  @media (max-width: 1050px) {
    padding: 10px 15px 15px;
  }
`;
export const LoadingPost = styled.div`
  height: 300px;
  width: 100%;
  background: #fff;
  margin-bottom: 15px;
  padding: 15px 20px;
`;
export const Header = styled.header`
  height: 50px;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
export const ProfileCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 5px;
  background: #eee;
`;
export const TwoLinesBox = styled.div`
  div {
    &:first-child {
      width: 60px;
      height: 7px;
      background: #eee;
      margin-bottom: 10px;
    }
    &:last-child {
      width: 45px;
      height: 7px;
      background: #eee;
    }
  }
`;
export const ThreeLinesBox = styled.div`
  margin-top: 15px;
  width: 100%;
  div {
    &:nth-child(1) {
      width: 85%;
      height: 7px;
      background: #eee;
      margin-bottom: 20px;
    }
    &:nth-child(2) {
      width: 90%;
      height: 7px;
      background: #eee;
      margin-bottom: 20px;
    }
    &:nth-child(3) {
      width: 40%;
      height: 7px;
      background: #eee;
    }
  }
`;
