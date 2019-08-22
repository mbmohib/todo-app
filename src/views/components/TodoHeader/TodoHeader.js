import React from 'react';
import { Grid, Typography, Button, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { Wrapper } from 'views/ui';

const TodoHeader = () => (
  <Grid container>
    <Grid item xs={8}>
      <Typography variant="h3">6 to go!</Typography>
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
);

export default TodoHeader;
