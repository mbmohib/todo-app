import React from 'react';
import { Checkbox, Grid, Box, Fade } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Todo, IconButton } from 'views/ui';

const TodoItem = ({ todo, index, hanldeTodoDelete, handleCheckboxChange }) => {
  const { id, title, completed } = todo;

  return (
    <Fade
      in={!!todo.id}
      style={{
        transitionDelay: !!todo.id ? `${300 + index * 50}ms` : '500ms',
      }}
    >
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
              <Edit style={{ fontSize: 20 }} />
            </IconButton>
          </Grid>
          <Grid item xs={1} sm={1}>
            <IconButton aria-label="delete" onClick={hanldeTodoDelete}>
              <Delete style={{ fontSize: 20 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  hanldeTodoDelete: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default TodoItem;
