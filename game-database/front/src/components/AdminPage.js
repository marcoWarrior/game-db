import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField, Typography, Collapse } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles'; // Importa useTheme da @mui/material/styles

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [games, setGames] = useState([]);
  const [editingGame, setEditingGame] = useState(null);
  const [showAddGameForm, setShowAddGameForm] = useState(false); // Aggiunto stato per il form di inserimento
  const navigate = useNavigate();

  // Aggiungi il hook useTheme per accedere al tema personalizzato
  const theme = useTheme();

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/games')
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error('Errore durante la richiesta API:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/games', {
        title,
        description,
        coverImage,
      })
      .then((response) => {
        console.log('Gioco aggiunto con successo:', response.data);
        setTitle('');
        setDescription('');
        setCoverImage('');
        navigate('/games');
      })
      .catch((error) => {
        console.error('Errore durante la richiesta API:', error);
      });
  };

  const handleDelete = (gameId) => {
    axios
      .delete(`http://localhost:8080/api/games/${gameId}`)
      .then((response) => {
        console.log('Gioco eliminato con successo:', gameId);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Errore durante la richiesta API:', error);
      });
  };

  const handleEdit = (game) => {
    setEditingGame(game);
  };

  const saveEditedGame = () => {
    axios
      .put(`http://localhost:8080/api/games/${editingGame.id}`, editingGame)
      .then((response) => {
        console.log('Gioco modificato con successo:', response.data);
        setEditingGame(null);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Errore durante la richiesta API:', error);
      });
  };

  const handleAddNewGame = () => {
    navigate('/admin/add');
  };

  const toggleAddGameForm = () => {
    setShowAddGameForm((prevState) => !prevState);
  };

  // Stile personalizzato per il pulsante "Modifica" (disattiva la modalità scura)
  const editButtonStyle = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    marginLeft: '1rem',
  };

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <Container maxWidth="sm">
        <Typography variant="h4" style={{ display: 'flex', alignItems: 'center' }}>
        <SettingsIcon style={{ marginRight: '0.5rem' }} />
          Pannello di amministrazione
        </Typography>
        <Button color="primary" onClick={toggleAddGameForm}>
          {showAddGameForm ? 'Nascondi Form' : 'Mostra Form di Inserimento'}
        </Button>

        <Collapse in={showAddGameForm}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Titolo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              fullWidth
              label="Descrizione"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              fullWidth
              label="URL Immagine di Copertina"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Aggiungi Gioco
            </Button>
          </form>
        </Collapse>

        <Typography variant="h5">Elenco dei giochi</Typography>
        <table style={{ width: '100%', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>Titolo</th>
              <th>Voti totali</th>
              <th>Media voto</th>
              <th>Modifica</th>
              <th>Elimina</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id}>
                <td>{game.title}</td>
                <td>{game.totalVotes}</td>
                <td>{game.rating.toFixed(2)}</td>
                <td>
                  {editingGame?.id === game.id ? (
                    <div>
                      <TextField
                        fullWidth
                        label="Titolo"
                        value={editingGame.title}
                        onChange={(e) => setEditingGame({ ...editingGame, title: e.target.value })}
                      />
                      <TextField
                        fullWidth
                        label="Descrizione"
                        multiline
                        rows={4}
                        value={editingGame.description}
                        onChange={(e) => setEditingGame({ ...editingGame, description: e.target.value })}
                      />
                      <TextField
                        fullWidth
                        label="URL Immagine di Copertina"
                        value={editingGame.coverImage}
                        onChange={(e) => setEditingGame({ ...editingGame, coverImage: e.target.value })}
                      />
                      <Button variant="contained" color="primary" onClick={saveEditedGame}>
                        Salva
                      </Button>
                      <Button
                        variant="contained"
                        style={editButtonStyle}
                        onClick={() => setEditingGame(null)}
                      >
                        Annulla
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Button
                        variant="contained"
                        style={editButtonStyle}
                        onClick={() => handleEdit(game)}
                      >
                        Modifica
                      </Button>
                    </div>
                  )}
                </td>
                <td>
                  <Button variant="outlined" color="secondary" onClick={() => handleDelete(game.id)}>
                    Elimina
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </ThemeProvider>
  );
};

export default AdminPage;