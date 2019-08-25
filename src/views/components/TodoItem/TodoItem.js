import React, { useState } from 'react';
import { Checkbox, Grid, Box, Hidden } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

import { Todo, IconButtonExtended } from 'views/ui';

const TodoItem = ({ todo }) => {
  const [checkboxValue, setCheckbox] = useState(false);

  const handleChange = () => {
    setCheckbox(!checkboxValue);
  };

  return (
    <Box mb={2}>
      <Grid container alignItems="center">
        <Grid item xs={2} sm={1}>
          <Checkbox
            checked={checkboxValue}
            onChange={handleChange}
            value={checkboxValue}
            color="primary"
          />
        </Grid>
        <Grid item xs={10} sm={9}>
          <Todo checked={checkboxValue}>{todo}</Todo>
        </Grid>
        <Hidden smUp>
          <Grid item xs={8} />
        </Hidden>
        <Grid item xs={2} sm={1}>
          <IconButtonExtended aria-label="edit">
            <Edit />
          </IconButtonExtended>
        </Grid>
        <Grid item xs={2} sm={1}>
          <IconButtonExtended aria-label="delete">
            <Delete />
          </IconButtonExtended>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoItem;
