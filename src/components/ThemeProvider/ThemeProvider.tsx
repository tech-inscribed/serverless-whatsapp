import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { lightTheme } from '../../themes/lightTheme';

const ThemeProvider: React.FC = (props) => {
  return (
    <MuiThemeProvider theme={lightTheme}>
      {props.children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider;