import React from 'react';
import { Typography, Button } from '@material-ui/core';

import { Wrapper } from 'views/ui';

const FourOFour = ({ history }) => {
  const handleGoHome = () => {
    history.push('/');
  };

  return (
    <Wrapper flex justify="center" mt={['25vh', '10vh']}>
      <Wrapper>
        <Typography align="center" variant="h1">
          404!
        </Typography>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleGoHome}
        >
          Go Home
        </Button>
      </Wrapper>
    </Wrapper>
  );
};

export default FourOFour;
