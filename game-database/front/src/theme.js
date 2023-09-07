import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  // Aggiungi la proprietà 'dark' e imposta il valore booleano in base alla modalità desiderata
  // In questo esempio, l'ho impostato su 'true' per attivare la modalità scura
  dark: true,
});

export default theme;
