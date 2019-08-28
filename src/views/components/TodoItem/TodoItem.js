import React from 'react';
import { Checkbox, Grid, Box } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { Todo, IconButton } from 'views/ui';

const TodoItem = ({ todo, hanldeTodoDelete, handleCheckboxChange }) => {
  const { id, title, completed } = todo;

  return (
    <Box mb={2}>
      <Grid container alignItems="center">
        <Grid item xs={2} sm={1}>
          <Checkbox
            checked={completed}
            onChange={handleCheckboxChange}
            value={completed}
            color="primary"
          />
        </Grid>
        <Grid item xs={8} sm={9}>
          <Todo checked={completed}>{title}</Todo>
        </Grid>
        <Grid item xs={1} sm={1}>
          <IconButton aria-label="edit" component={Link} to={`edit/${id}`}>
            <Edit />
          </IconButton>
        </Grid>
        <Grid item xs={1} sm={1}>
          <IconButton aria-label="delete" onClick={hanldeTodoDelete}>
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoItem;
