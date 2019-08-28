import React from 'react';
import { Container, Typography } from '@material-ui/core';

import { Wrapper } from 'views/ui';

const Footer = () => (
  <Wrapper bgcolor="background.light" py={1} align="center" color="#fff">
    <Container>
      <Typography>Designed & Developed by Mohib</Typography>
    </Container>
  </Wrapper>
);

export default Footer;
