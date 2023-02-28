import styled from 'styled-components';

export const MainPage = styled.div`
  background: url('/background3.jpg');
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  
  @media (max-width: 768px) {
    background-size: contain;
  }
`;


export function App () {
  return (
    <MainPage>
    </MainPage>
  );
}
