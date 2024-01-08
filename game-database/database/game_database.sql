-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Gen 07, 2024 alle 14:55
-- Versione del server: 10.4.28-MariaDB
-- Versione PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game_database`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `rating` double NOT NULL,
  `total_votes` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `game`
--

INSERT INTO `game` (`id`, `title`, `description`, `cover_image`, `rating`, `total_votes`) VALUES
(14, 'One Piece Odyssey', 'Gioco di ruolo d\'azione che permette ai giocatori di esplorare il mondo di One Piece e vivere avventure al fianco di Luffy e i suoi amici. I giocatori potranno navigare sui sette mari, combattere i pirati nemici e trovare il leggendario One Piece. Potrai usare le abilità di Luffy e dei suoi amici per esplorare il mondo di One Piece e trovare il leggendario One Piece!', 'cover2.jpg', 3.625, 8),
(15, 'Hogwarts Legacy', 'Ambientato nel mondo di Harry Potter. I giocatori potranno creare il proprio mago o strega e frequentare la Scuola di Magia e Stregoneria di Hogwarts. I giocatori potranno imparare incantesimi, creare pozioni e affrontare le forze del male. Potrai creare il tuo mago o strega e vivere la tua avventura a Hogwarts.', 'cover3.jpg', 3, 6),
(16, 'Diablo 4', 'Gioco di ruolo d\'azione hack and slash che fa parte della serie Diablo. I giocatori potranno scegliere tra diverse classi e affrontare orde di nemici in un mondo oscuro e terrificante. I giocatori potranno trovare potenti oggetti, potenziare i loro personaggi e conquistare il trono di Diablo. Potrai scegliere la tua classe e diventare il più potente cacciatore di demoni dell\'universo! WHROO', 'cover4.jpg', 4, 4),
(17, 'The Legend of Zelda: Tears of the Kingdom', 'I giocatori dovranno esplorare un nuovo regno e risolvere enigmi per salvare Hyrule. I giocatori potranno utilizzare un\'ampia varietà di armi e oggetti per sconfiggere i nemici e salvare il mondo. Potrai esplorare il mondo di Hyrule e salvare il mondo dal male!', 'cover5.jpg', 3, 4),
(18, 'Resident Evil 4', 'Remake del gioco di sopravvivenza horror Resident Evil 4. Il gioco è stato completamente rifatto graficamente e presenta alcune nuove meccaniche di gioco. I giocatori dovranno affrontare orde di zombie e risolvere enigmi per sopravvivere. Potrai sopravvivere alle orde di zombie e risolvere gli enigmi di Resident Evil 4 Remake', 'cover6.jpg', 3.8333333333333335, 6),
(20, 'Dead Space 2023', 'Riuscirai a sopravvivere alle orde di necromorfi e risolvere gli enigmi di Dead Space!?\nBuona fortuna.. ', 'cover8.jpg', 3.5714285714285716, 7),
(61, 'Final Fantasy XVI', 'È il sedicesimo capitolo della serie di Final Fantasy. Il gioco è stato rilasciato il 16 febbraio 2023.\n\nLa storia del gioco si svolge nel mondo di Valisthea, un continente diviso in sei nazioni. Ogni nazione ha il proprio Cristallo Madre, fonte di potere e prosperità. Il gioco segue le avventure di Clive Rosfield, un giovane guerriero che è stato investito del titolo di “Primo Scudo di Rosaria” con il compito di proteggere suo fratello minore Joshua, l\'Araldo della Fenice, Eikon del Fuoco.', 'cover9.jpg', 2.5, 2),
(62, 'Dead Island 2 \"Welcome to Hell-A\" ', 'Dead Island 2: Welcome to Hell-A è un trailer del videogioco Dead Island 2, rilasciato nel 2015. Il trailer mostra il protagonista del gioco, John Morgan, mentre si risveglia in un ospedale abbandonato a Los Angeles, che è stata invasa dai morti viventi. Morgan deve trovare un modo per sopravvivere e fuggire dalla città.', 'cover10.jpg', 3, 2),
(68, 'Dragonball Z: Kakarot', 'Dragonball Z: Kakarot è un gioco di ruolo d\'azione che permette ai giocatori di rivivere le epiche battaglie di Dragonball Z. I giocatori potranno controllare Goku e i suoi amici mentre combattono contro i nemici più potenti dell\'universo, tra cui Freezer, Cell e Majin Buu. Potrai usare i poteri di Goku e dei suoi amici per sconfiggere i nemici e salvare l\'universo!', 'cover1.jpg', 4, 1);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
