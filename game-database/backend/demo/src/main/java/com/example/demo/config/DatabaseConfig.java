package com.example.demo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration; 
import org.springframework.jdbc.datasource.DriverManagerDataSource; 
import javax.sql.DataSource; //Interfaccia che fornisce un'API standard per la gestione delle connessioni ai database

@Configuration //Configuration è una classe che permette di configurare il contesto di Spring
public class DatabaseConfig {

    @Value("${spring.datasource.url}") // @Value è un'annotazione di Spring che permette di iniettare valori di application.properties
    private String url;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    @Bean // @Bean è un'annotazione di Spring che permette di iniettare un oggetto all'interno del contesto di Spring
    public DataSource dataSource() { 
        DriverManagerDataSource dataSource = new DriverManagerDataSource(); // Permette di configurare un datasource
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        return dataSource;
    }
}
