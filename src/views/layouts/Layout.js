import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    <main style={{ flexGrow: 1 }}>{children}</main>
    <Footer />
  </Wrapper>
);

export default Layout;
