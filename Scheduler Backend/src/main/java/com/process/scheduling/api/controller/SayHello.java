package com.process.scheduling.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class SayHello {
	
//	@CrossOrigin(origins = "http://localhost:3000/")
	@PostMapping("/endpoint")
    public String handleFormData(@RequestBody String data) {
        // Process the received data here
        System.out.println("Received data: " + data );
        // Return a response as needed
        return "Data received successfully"+"response from spring boot";
    }
}
