import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';

import { Footer } from 'views/components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  background: #ffffff;
  min-height: 60vh;
  box-shadow: ${props => props.theme.shadows[5]};
  border-radius: 20px;
  width: 40%;
  margin: 80px auto 0;
  padding: 30px;
`;

const Layout = ({ children }) => (
  <Wrapper>
    <main style={{ flexGrow: 1 }}>
      <Container>
        <Main>{children}</Main>
      </Container>
    </main>
    <Footer />
  </Wrapper>
);

export default Layout;
