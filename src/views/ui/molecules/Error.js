import React from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const Error = ({ message }) => {
  const handleClose = () => {};

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={!!message}
      autoHideDuration={10000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={message}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Close />
        </IconButton>,
      ]}
    />
  );
};

export default Error;
