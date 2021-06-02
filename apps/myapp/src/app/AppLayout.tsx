import TopNavBar from './components/TopNavBar';

import styled from '@emotion/styled';

const Container = styled.div`
  background-color: white;
  font-size: 16px;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 600px;

  > * {
    padding: 10px 12px;
  }

  > .navbar {
    padding: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <TopNavBar />
      {children}
    </Container>
  );
};

export default Layout;
