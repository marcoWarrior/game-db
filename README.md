# Game Database

## Storage:
* Requisiti: Il progetto richiede un sistema di storage per memorizzare i dati dei giochi e i relativi voti.
* Soluzione: Viene utilizzato MySQL come sistema di gestione del database. XAMPP viene utilizzato per avviare i server Apache e MySQL.
L'amministrazione del database avviene tramite l'interfaccia web di phpMyAdmin
* Creare un database denominato "game_database" ed una tabella chiamata "game".
Successivamente avviare query SQL per il riempimento della tabella con:
```INSERT INTO game (title, description, cover_image, rating, total_votes) VALUES ('Gioco 1', 'Descrizione del Gioco 1', 'cover1.jpg', 2, 7);```
E' possibile iterare questa procedura fino a 'Gioco 10', avendo cosi a disposizione un elenco di giochi già presenti, aventi titolo, descrizione, cover_image, rating e total_votes preimpostati.

## Backend:
* Requisiti: Il backend è responsabile della gestione delle richieste del frontend, dell'interazione con il database MySQL e del ritorno dei dati al frontend.
* Strumenti utilizzati: Il backend è sviluppato in Java utilizzando Spring Boot come framework. La gestione delle dipendenze e la compilazione del progetto avviene tramite Maven.
* API: Il backend espone un'API REST per consentire al frontend di ottenere e inviare dati al database.
* Architettura MVC: La struttura del progetto backend è organizzata con i package per la configurazione, i controller, i modelli, i repository e i servizi.

## Frontend:
* Requisiti: Il frontend è responsabile dell'interfaccia utente dell'applicazione, consentendo agli utenti di visualizzare i giochi, votarli e visualizzare i dettagli.
* Strumenti utilizzati: Il frontend è sviluppato in React, utilizzando il framework Material-UI per il design e lo stile dell'interfaccia. Le rotte vengono gestite tramite React Router.
* API: Il frontend comunica con il backend tramite richieste HTTP utilizzando l'axios per ottenere e inviare i dati al database.
* Struttura del progetto: La struttura del progetto frontend è organizzata con i componenti principali come AdminPage, App, GameDetail e GameList. L'API viene gestita tramite il file api.js.

## Guida per l'utilizzo del progetto:

1. Assicurati di aver installato XAMPP per avviare il server Apache e MySQL e avere accesso all'interfaccia di phpMyAdmin per gestire il database.

2. Importa il progetto nel tuo IDE preferito e assicurati di aver configurato correttamente il progetto, compresi i file di configurazione e le dipendenze.


3. Il Backend sarà responsabile della gestione delle richieste del frontend e dell'interazione con il database MySQL. 
Aprire un terminale (CLI) e posizionarsi in \game-database\backend\demo e avviare Spring Boot con il comando ```mvn spring-boot:run```, verificare che tra i logs finali sia presente una stringa simile alla seguente:
```2023-07-28 16:24:22.014  INFO 8324 --- [ main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path``` 
Questa stringa dovrebbe conferma che il backend è avviato e in ascolto su una porta specifica (es. 8080).
**Ricorda: Il terminale deve essere sempre in esecuzione, non va chiuso**


4. Frontend:
5. Assicurati di avere Node.js installato sul tuo sistema.
6. Aprire **un'altro terminale**, naviga alla directory \game-database\front ed esegui il comando ```npm install``` per installare tutte le dipendenze necessarie.
7. NB: Potrebbe essere necessario l'uso del comando ```npm install -g react-scripts```
8. Successivamente, esegui il comando ```npm start``` per avviare l'applicazione frontend.
9. Assicurati che il Front End sia avviato e in ascolto su una porta specifica (es. 3000).
Quindi anche il secondo terminale deve restare attivo.

Se tutto è configurato correttamente si aprirà un Browser mostrandoti il Game Database, se ciò non dovesse accadere, puoi cliccare il 
link avviato dal frontend.

**ENJOY IT! :D**
