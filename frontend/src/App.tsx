import React from 'react';
import Main from './components/home/Main';
// import logo from './logo.svg';
// import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "./theme"
import AllRoutes from './components/routes';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <CssBaseline />
<AllRoutes />
        {/* <Main /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
