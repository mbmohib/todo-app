import React, { Fragment } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid } from '@material-ui/core';

const TodoSkeletons = ({ times = 1 }) => {
  return (
    <Fragment>
      {[...Array(times)].map((item, index) => (
        <Grid container key={index}>
          <Grid item xs={1}>
            <Skeleton width="50%" height={30} />
          </Grid>
          <Grid item xs={9}>
            <Skeleton width="95%" height={25} />
          </Grid>
          <Grid item xs={1}>
            <Skeleton width="50%" height={30} />
          </Grid>
          <Grid item xs={1}>
            <Skeleton width="50%" height={30} />
          </Grid>
        </Grid>
      ))}
    </Fragment>
  );
};

export default TodoSkeletons;
