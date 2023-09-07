import axios from 'axios'; // Importa il modulo axios per effettuare le richieste HTTP

const backendUrl = 'http://localhost:8080'; // Modifica questa riga con l'URL del tuo backend

// Funzione per ottenere l'elenco completo dei giochi
export const getGames = () => {
  return axios.get(`${backendUrl}/api/games`) // Usa l'URL del backend qui
    .then(response => response.data)
    .catch(error => {
      console.error('Errore durante la richiesta API:', error);
      return [];
    });
};

// Funzione per aggiungere un nuovo gioco
export const addGame = (gameData) => {
  return axios.post(`${backendUrl}/api/games`, gameData) // Usa l'URL del backend qui
    .then(response => response.data)
    .catch(error => {
      console.error('Errore durante la richiesta API:', error);
      return null;
    });
};

// Funzione per ottenere i dettagli di un gioco specifico
export const getGameById = (gameId) => {
  return axios.get(`${backendUrl}/api/games/${gameId}`) // Usa l'URL del backend qui
    .then(response => response.data)
    .catch(error => {
      console.error('Errore durante la richiesta API:', error);
      return null;
    });
};
