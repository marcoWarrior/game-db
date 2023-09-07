import React from 'react';
import ReactDOM from 'react-dom'; // Importa ReactDOM invece di createRoot
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './components/App';
import AdminPage from './components/AdminPage';
import GameList from './components/GameList'; // Importa il componente GameList
import theme from './theme'; // Importa il tema personalizzato

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/games/*" element={<GameList />} /> 
      <Route path="/admin" element={<AdminPage />} />
      {/* Aggiungi altre rotte qui se necessario */}
    </Routes>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render( 
  <React.StrictMode> 
    <ThemeProvider theme={createTheme(theme)}>
      <Router>
        <CustomRoutes />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
