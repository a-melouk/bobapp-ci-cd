package com.openclassrooms.bobapp;

import com.openclassrooms.bobapp.model.Joke;
import com.openclassrooms.bobapp.service.JokeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BobappApplicationTests {

    @Autowired
    private JokeService jokeService;

    @Test
    void contextLoads() {
        assertTrue(true);
    }

    @Test
    void jokeServiceShouldReturnJoke() {
        Joke joke = jokeService.getRandomJoke();
        assertNotNull(joke);
    }

}
