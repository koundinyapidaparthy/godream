import React from 'react';
import AllRoutes from './routers/routers';
import { ThemeProvider } from '@material-ui/core';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AllRoutes/>
    </ThemeProvider>
  );
}
export default App;
