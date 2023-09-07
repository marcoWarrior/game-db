package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer; //Interfaccia per Spring MVC

@SpringBootApplication 
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() { // Consente di personalizzare la configurazione del WebMvc, inclusi i dettagli CORS.
        return new WebMvcConfigurer() { 
            @Override
            public void addCorsMappings(CorsRegistry registry) { // Consente di aggiungere mapping CORS personalizzati.
                registry.addMapping("/**") // Mappa tutte le richieste
                        .allowedOrigins("http://localhost:3000") // URL del frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedHeaders("*") // Accetta tutte le intestazioni
                        .allowCredentials(true); //Include i cookie nelle richieste
            }
        };
    }
}
