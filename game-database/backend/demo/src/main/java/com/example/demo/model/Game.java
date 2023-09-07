package com.example.demo.model;

import javax.persistence.Entity; 
import javax.persistence.GeneratedValue; 
import javax.persistence.GenerationType; 
import javax.persistence.Id;

@Entity // JPA annotazione per indicare che la classe è un'entità da mappare nel database
public class Game {

    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Autoincrement id 
    private Long id; // Long per evitare problemi di overflow

    private String title;
    private String description;
    private double rating;
    private double totalVotes;
    private String coverImage; 

    // Costruttori, getter e setter

    public Game() {
    }

    public Game(String title, String description, double rating, double totalVotes, String coverImage) {
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.totalVotes = totalVotes;
        this.coverImage = coverImage;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public double getTotalVotes() {
        return totalVotes;
    }

    public void setTotalVotes(double totalVotes) {
        this.totalVotes = totalVotes;
    }

    public String getCoverImage() {
        return coverImage;
    }

    public void setCoverImage(String coverImage) {
        this.coverImage = coverImage;
    }
}
