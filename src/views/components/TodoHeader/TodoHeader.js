import React from 'react';
import { Grid, Typography, Button, Fab, Box } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Wrapper } from 'views/ui';

const TodoHeader = ({ todalTodos, hideAddButton, handleClearAllTodos }) => (
  <Box mb={3}>
    <Grid container alignItems="center">
      <Grid item xs={8}>
        <Box ml={1}>
          <Typography variant="h4">
            You have total <strong>{todalTodos}</strong> todos!
          </Typography>
        </Box>
        {!hideAddButton && (
          <Button color="secondary" onClick={handleClearAllTodos}>
            Clear All Completed Task
          </Button>
        )}
      </Grid>
      <Grid item xs={4}>
        {!hideAddButton && (
          <Wrapper flex justify="flex-end" align="center">
            <Fab color="primary" aria-label="add" component={Link} to="/add">
              <Add />
            </Fab>
          </Wrapper>
        )}
      </Grid>
    </Grid>
  </Box>
);

TodoHeader.propTypes = {
  todalTodos: PropTypes.number.isRequired,
  hideAddButton: PropTypes.bool.isRequired,
  handleClearAllTodos: PropTypes.func.isRequired,
};

export default TodoHeader;
