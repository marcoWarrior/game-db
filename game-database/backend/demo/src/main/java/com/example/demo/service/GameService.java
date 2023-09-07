package com.example.demo.service;

import com.example.demo.model.Game;
import com.example.demo.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service //Una classe Service contiene la logica di business dell'applicazione
public class GameService { 

    private final GameRepository gameRepository;

    @Autowired // @Autowired è un'annotazione di Spring che permette di iniettare un oggetto all'interno del contesto di Spring
    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    @Transactional //Una transazione è un'unità di lavoro atomica che può essere eseguita e confermata o annullata
    public Game addOrUpdateGame(Game game) {
        return gameRepository.save(game); 
    }

    @Transactional 
    public void deleteGame(Long gameId) {
        gameRepository.deleteById(gameId);
    }

    @Transactional
    public Game addVoteToGame(Long gameId, double vote) {
        Game game = gameRepository.findById(gameId)
                .orElseThrow(() -> new IllegalArgumentException("Gioco non trovato con ID: " + gameId));

        double totalVotes = game.getTotalVotes();
        double totalRating = game.getRating() * totalVotes;
        totalVotes++;
        totalRating += vote;
        double averageRating = totalRating / totalVotes;

        // Salva l'averageRating e il totalVotes con precisione di tipo double
        game.setRating(averageRating);
        game.setTotalVotes(totalVotes);

        return gameRepository.save(game);
    }
}
