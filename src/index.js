import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RoleProvider } from './providers/RoleProvider.provider';
import { createTheme } from './theme/theme.index';

ReactDOM.render(
    <ThemeProvider theme={createTheme('defaultTheme')}>
      <RoleProvider>
        <CssBaseline>
          <App />
        </CssBaseline>
      </RoleProvider>
    </ThemeProvider>,
  document.getElementById('root')
);
