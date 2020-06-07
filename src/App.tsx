import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import { ThemeProvider } from './hooks/theme';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider>
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </AppProvider>
  </ThemeProvider>
);

export default App;
