import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import BaseStyle from './baseStyle';
import theme from './theme';

const Theme = ({ children }) => {
  const MuiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={MuiTheme}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <CssBaseline />
          <BaseStyle />
          {children}
        </Fragment>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default Theme;
