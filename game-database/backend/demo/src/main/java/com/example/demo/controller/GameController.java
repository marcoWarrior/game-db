package com.example.demo.controller;

import com.example.demo.model.Game;
import com.example.demo.repository.GameRepository;
import com.example.demo.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController // Indica che la classe è un controller REST (Risponde a richieste HTTP -> GET, POST, PUT, DELETE)
@CrossOrigin // Abilita le richieste CORS da qualsiasi origine
@RequestMapping("/api/games") // Mappa le richieste HTTP che iniziano con /api/games
public class GameController {

    private final GameRepository gameRepository; 
    private final GameService gameService;

    @Autowired
    public GameController(GameRepository gameRepository, GameService gameService) {
        this.gameRepository = gameRepository;
        this.gameService = gameService;
    }

    @GetMapping 
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    @PostMapping
    public Game addGame(@RequestBody Game game) { // @RequestBody indica che il parametro game è un oggetto JSON
        return gameService.addOrUpdateGame(game);
    }

    @PutMapping("/{id}")
    public Game updateGame(@PathVariable Long id, @RequestBody Game updatedGame) {
        return gameService.addOrUpdateGame(updatedGame);
    }

    @DeleteMapping("/{id}")
    public void deleteGame(@PathVariable Long id) {
        gameService.deleteGame(id);
    }

    @PostMapping("/{id}/vote")
    public ResponseEntity<Game> addVote(@PathVariable Long id, @RequestBody Map<String, Integer> requestData) {
        int vote = requestData.get("vote");
        Game game = gameService.addVoteToGame(id, vote);
        return ResponseEntity.ok(game); 
    }
}
