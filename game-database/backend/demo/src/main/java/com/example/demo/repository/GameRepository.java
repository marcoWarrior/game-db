package com.example.demo.repository;

import com.example.demo.model.Game;
import org.springframework.data.jpa.repository.JpaRepository; //JpaRepository appartiene a Spring Data JPA
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
    
    // GameRepository estende JpaRepository, il quale è un'interfaccia che fornisce tutti i metodi CRUD per l'entità Game. 

}
