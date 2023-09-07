package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {

    @Autowired
    private DemoApplication demoApplication;

    @Test
    void contextLoads() {
        // Verifica che il contesto dell'applicazione sia stato caricato correttamente
        assertThat(demoApplication).isNotNull();
    }

}
