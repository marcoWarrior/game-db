import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios'; // Importa il client HTTP axios che semplifica le chiamate alle API 
import { Container, Typography, Button, Modal } from '@mui/material';
import './GameList.css'; 

const backendUrl = 'http://localhost:8080'; // Modifica questa riga con l'URL del tuo backend

const GameList = () => { 
  const [games, setGames] = useState([]); 
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => { // useEffect è un hook che viene eseguito quando il componente viene montato
    axios
      .get(`${backendUrl}/api/games`)
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error('Errore durante la richiesta API:', error);
      });
  }, []);

  const handleVote = (gameId, vote) => { // Funzione per aggiungere un voto
    const requestData = {
      vote: parseInt(vote),
    };

    axios
      .post(`${backendUrl}/api/games/${gameId}/vote`, requestData)
      .then((response) => {
        console.log('Voto aggiunto con successo:', response.data);
        // Effettua un aggiornamento della pagina dopo l'aggiunta del voto
        window.location.reload();
      })
      .catch((error) => {
        console.error('Errore durante la richiesta API:', error);
      });
  };

  // Funzione per aprire la finestra modale con l'immagine selezionata
  const handleOpenModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpenModal(true);
  };

  // Funzione per chiudere la finestra modale
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container maxWidth="sm" style={{marginLeft:'10%'}}>
      <Typography variant="h4">Elenco dei giochi</Typography>
      {/* Aggiungi il link al pannello di amministrazione */}
      <Link to="/admin" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
          Pannello di amministrazione
        </Button>
      </Link>
      {games.length === 0 ? (
        <Typography variant="body1">Nessun gioco censito al momento.</Typography>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Titolo</th>
              <th>Immagine di copertina</th>
              <th>Descrizione</th>
              <th>Voti</th>
              <th>Media</th>
              <th>Vota</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id}>
                <td>
                  <span to={`/games/${game.id}`} style={{ textDecoration: 'none' }}>
                    {game.title}
                  </span>
                </td>
                <td>
                  <div className="game-image-container">
                    <img
                      src={`/images/${game.coverImage}`}
                      alt={game.title}
                      onClick={() => handleOpenModal(`/images/${game.coverImage}`)}
                    />
                  </div>
                </td>
                <td>{game.description}</td>
                <td>{game.totalVotes}</td>
                <td>{game.rating.toFixed(2)}</td>
                <td>
                  <Button variant="contained" color="primary" onClick={() => handleVote(game.id, 1)}>
                    1
                  </Button>
                  <Button className="button-margin" variant="contained" color="primary" onClick={() => handleVote(game.id, 2)}>
                    2
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => handleVote(game.id, 3)}>
                    3
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => handleVote(game.id, 4)}>
                    4
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => handleVote(game.id, 5)}>
                    5
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Finestra modale per mostrare l'immagine */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-container">
          <div className="modal-image">
            {/* Aggiungi il pulsante di chiusura */}
            <Typography variant="body2" className="modal-escape-text">
              Premi Esc per chiudere la visualizzazione
            </Typography>
            <span className="modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected Image" />
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default GameList;
