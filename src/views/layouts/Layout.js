import React from 'react';
import styled from 'styled-components';

import { Footer, TodoHeader } from 'views/components';
import media from 'theme/mediaQuery';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  background: #ffffff;
  min-height: calc(100vh - 41px);
  box-shadow: ${props => props.theme.shadows[5]};
  width: 100%;
  margin: 0 auto;
  padding: 20px 10px;

  ${media.sm`
    min-height: 60vh;
    width: 85%;
    padding: 20px;
    margin-top: 40px;
    border-radius: 10px;
    `}

  ${media.md`
    width: 65%;
    padding: 30px;
    margin-top: 80px;
    border-radius: 20px;
    `}

  ${media.lg`
    width: 40%;
    `}

  ${media.xl`
    width: 40%;
    `}
`;

const Layout = ({ children }) => (
  <Wrapper>
    <main style={{ flexGrow: 1 }}>
      <Main>
        <TodoHeader />
        {children}
      </Main>
    </main>
    <Footer />
  </Wrapper>
);

export default Layout;
