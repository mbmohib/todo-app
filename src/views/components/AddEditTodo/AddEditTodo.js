import React from 'react';
import { TextField } from '@material-ui/core';
import { ArrowBack, Save } from '@material-ui/icons';

import { Wrapper, Button } from 'views/ui';

const AddTodo = ({ history }) => {
  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <Wrapper
      justify="center"
      mt={3}
      width={{ xs: '100%', sm: '80%', md: '70%' }}
      mx="auto"
      mt={10}
    >
      <TextField fullWidth id="standard-name" placeholder="Buy foods.." />

      <Wrapper flex mt={2} justify="center">
        <Button
          variant="contained"
          color="default"
          mr={1}
          onClick={handleBackButton}
        >
          <ArrowBack />
          Back
        </Button>
        <Button variant="contained" color="primary">
          <Save />
          Add Todo
        </Button>
      </Wrapper>
    </Wrapper>
  );
};

export default AddTodo;
