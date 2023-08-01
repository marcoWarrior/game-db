# game-database

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
Non è richiesta autenticazione per il pannello di amministrazione.

Requisiti:
1. le API dovranno essere di tipo REST e realizzate utilizzando spring boot (puoi inizializzare un nuovo progetto spring utilizzando: https://start.spring.io/)
2. il progetto di frontend dovrà essere realizzato con tecnologia ReactJS (puoi inizializzare un nuovo progetto utilizzando vite: https://vitejs.dev/guide/) 
3. per lo storage, sto utilizzando MySQL, avviato tramite XAMPP e gestito con phpMyAdmin
