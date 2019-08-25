import React from 'react';
import { Grid, Typography, Button, Fab, Box } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { Wrapper } from 'views/ui';

const TodoHeader = () => (
  <Box mb={3}>
    <Grid container alignItems="center">
      <Grid item xs={8}>
        <Box ml={1}>
          <Typography variant="h3">
            <strong>6</strong> todos to go!
          </Typography>
        </Box>
        <Button color="secondary">Clear 5 Completed Task</Button>
      </Grid>
      <Grid item xs={4}>
        <Wrapper flex justify="flex-end" align="center">
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
        </Wrapper>
      </Grid>
    </Grid>
  </Box>
);

export default TodoHeader;
