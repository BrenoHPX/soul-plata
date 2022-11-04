import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { CssBaseline } from '@mui/material';
import { store } from './store';
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <CssBaseline />
      <Home />
    </Provider>
  </>
);
