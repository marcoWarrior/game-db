-- Creazione della tabella "game"
CREATE TABLE game (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  cover_image VARCHAR(255),
  rating DOUBLE NOT NULL,
  total_votes DOUBLE NOT NULL
)ENGINE=InnoDB;

-- Inserimento di dati di esempio nella tabella "game"
INSERT INTO game (title, description, cover_image, rating, total_votes)
VALUES ('Gioco 1', 'Descrizione del Gioco 1', 'cover1.jpg', 4, 10);

INSERT INTO game (title, description, cover_image, rating, total_votes)
VALUES ('Gioco 2', 'Descrizione del Gioco 2', 'cover2.jpg', 3, 5);
