ESERCIZIO:

Ciao Marco,
come da accordi riporto di seguito un esercizio che, ipoteticamente, andrebbe terminato entro la fine della prossima settimana e discusso in presenza qui da noi.

L'obiettivo è la realizzazione di un Game Database, cioè di un'applicazione web che consenta di:
1. visualizzare una pagina con l'elenco completo dei giochi censiti;
2. accedere ad un pannello di amministrazione che consenta di:
	1. registrare nuove schede gioco;
	2. modificare schede gioco esistenti;
	3. cancellare schede gioco esistenti;
3. specificare un voto, nella home page, che si accoda a tutti i voti precedentemente registrati e fornisce una media degli stessi (ogni voto può avere un valore compreso tra 1 e 5).

Ogni gioco sarà composto dai seguenti campi:
Titolo
Descrizione
Immagine di copertina
Numero dei voti e il voto che rappresenta la sua media

Non è richiesta autenticazione per il pannello di amministrazione.

Requisiti:
1. le API dovranno essere di tipo REST e realizzate utilizzando spring boot (puoi inizializzare un nuovo progetto spring utilizzando: https://start.spring.io/)
2. il progetto di frontend dovrà essere realizzato con tecnologia ReactJS (puoi inizializzare un nuovo progetto utilizzando vite: https://vitejs.dev/guide/) 
3. per lo storage, qualora tu abbia difficoltà ad utilizzare un qualsiasi database (mysql, postgres etc.), puoi sempre ripiegare sul File System, in ogni caso Spring offre ottimi spunti di riflessione sul tema gestione dati.
Ovviamente siamo a tua completa disposizione per qualsiasi domanda e/o chiarimento,
qualora lo ritenessi necessario, potremmo anche fissare delle call intermedie, prima della discussione in ufficio, in cui potresti avvalerti di eventuali suggerimenti da parte nostra,
--------------------------------------------------------------------------------------------------------------------------------------------------------------
REALIZZAZIONE:

***Backend - Spring Boot:***

1. Crea un nuovo progetto Spring Boot utilizzando il link fornito: https://start.spring.io/. Assicurati di includere le dipendenze per "Spring Web" e "Spring Data JPA".
> DONE: Creato un nuovo progetto Spring Boot con le dipendenze necessarie per "Spring Web" e "Spring Data JPA". Il progetto utilizza Java 20 come versione del linguaggio.

1. Definisci l'entità Game per rappresentare i giochi nel database. L'entità Game avrà i campi: Titolo, Descrizione, e un'immagine di copertina (puoi gestire l'immagine come un URL o salvare il percorso dell'immagine nel file system).
> DONE: Creato l'entità "Game" all'interno del package "com.example.demo.model" con i campi richiesti: "Titolo", "Descrizione", "Immagine di copertina", "Voto" e "Numero totale di voti".

1. Implementa un controller REST per gestire le operazioni CRUD (Create, Read, Update, Delete) sui giochi. Assicurati di includere API per ottenere l'elenco completo dei giochi e per aggiungere, modificare e cancellare giochi.
> DONE: Creato il controller "GameController" all'interno del package "com.example.demo.controller". Questo controller gestisce le operazioni CRUD sui giochi e le API per ottenere l'elenco completo dei giochi, aggiungere nuovi giochi, modificare giochi esistenti e cancellare giochi.

1. Per gestire la media dei voti, aggiungi un campo "Voto" all'entità Game. Ad ogni voto inserito, aggiorna il valore del campo "Voto" e calcola la media dei voti.
> DONE: Aggiunto il campo "Voto" all'entità "Game". Nella classe "GameController", hai implementato un metodo per gestire l'aggiunta dei voti ai giochi e il calcolo della media dei voti.

1. Implementa le API per gestire i voti e per calcolare la media.
> DONE: Implementato le API nel "GameController" per gestire l'aggiunta dei voti ai giochi e il calcolo della media dei voti.

1. Per semplificare le cose, poiché non è richiesta l'autenticazione per il pannello di amministrazione, ti consiglio di implementare un semplice meccanismo di sicurezza come l'uso di un token di autenticazione nei tuoi header delle richieste.
> Non necessario

***Frontend - ReactJS:***
1. Crea un nuovo progetto ReactJS utilizzando Vite: https://vitejs.dev/guide/.
> DONE:

2. Configura il tuo progetto per comunicare con le API REST del backend utilizzando Axios o Fetch API.
> DONE: creata cartella "components" nel percorso ~/Workspace/game-database/frontend/game-database-frontend
	Al suo interno sono creati:
	"GameList.js": Questo componente visualizzerà l'elenco completo dei giochi. Utilizza Axios per effettuare una richiesta GET al backend e ottenere i dati dei giochi.

	"AdminPage.js": Questo componente rappresenterà la pagina di amministrazione con il form per aggiungere nuovi giochi. Utilizza Axios per effettuare una richiesta POST al backend e 	inviare i dati del nuovo gioco.

	"GameDetail.js": Questo componente visualizzerà i dettagli di un singolo gioco, inclusi i voti e la media dei voti. Utilizza Axios per effettuare una richiesta GET al backend e 	ottenere i dati del gioco specifico.

	"api.js"Questo file conterrà le funzioni per eseguire le richieste HTTP al backend utilizzando Axios. 

3. Crea una pagina per visualizzare l'elenco completo dei giochi censiti, ottenendo i dati dal backend attraverso l'apposita API.
> DONE: Completare l'implementazione del componente "GameList.js" in modo che visualizzi l'elenco completo dei giochi ottenuti dal backend
 
4. Implementa una pagina di amministrazione con un form per aggiungere nuove schede gioco. Utilizza un'interfaccia semplice per consentire all'utente di inserire Titolo, Descrizione e Immagine di copertina. Al momento della registrazione di un nuovo gioco, invia i dati al backend tramite l'apposita API di creazione.
> DONE: Implementazione del componente "AdminPage.js" per consentire l'aggiunta di nuovi giochi tramite il form e l'invio dei dati al backend.

5. Crea una pagina di dettaglio per visualizzare i singoli giochi, compresi i voti e la media dei voti.
> DONE: Implementazione del componente "AdminPage.js" per consentire l'aggiunta di nuovi giochi tramite il form e l'invio dei dati al backend.

6. Per gestire la valutazione dei giochi, aggiungi un campo input con un valore compreso tra 1 e 5 per permettere all'utente di votare un gioco. Implementa la chiamata API per inviare il voto al backend e calcolare la media dei voti aggiornata.
> DONE: Implementazione del componente "GameDetail.js" per consentire agli utenti di votare i giochi e inviare i voti al backend.

***Storage:***
Per quanto riguarda lo storage dei dati, puoi utilizzare un database relazionale come MySQL o PostgreSQL, utilizzando Spring Data JPA per interagire con il database.
> DA VERIFICARE: Hai creato un database MySQL chiamato "game_database" e un utente con privilegi amministrativi chiamato "game_user". Hai configurato l'applicazione Spring Boot per connettersi a questo database utilizzando Spring Data JPA nel file "application.properties".
URL di connessione al database: jdbc:mysql://localhost:3306/game_database
Username: game_user
Password: Psw_userdb

**Avvio del progetto:**
Avvia il backend Spring Boot e assicurati che sia in ascolto su una determinata porta.
> DONE:  mvn spring-boot:run
OUTPUT:
2023-07-28 16:24:22.014  INFO 8324 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''


**Avvia il frontend ReactJS e verifica che sia configurato per comunicare con l'URL del backend.**
npm install
npm run build
npx serve -s build
-------------------------------------------------------------------------------------------------------------------------------


