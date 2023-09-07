import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2">Game Database</Typography>
      <div className="card">
        {/* Codice rimanente del componente App */}
      </div>
      <p className="read-the-docs">
        Clicca il link seguente per visualizzare l'elenco dei giochi censiti nel 2023
      </p>
      <Link to="/games">Visualizza l'elenco dei giochi</Link>
    </Container>
  );
}

export default App;
