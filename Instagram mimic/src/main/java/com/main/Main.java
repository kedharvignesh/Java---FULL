package com.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("*")
@ComponentScan({"com"})
public class Main {

	public static void main(String[] args) {

		SpringApplication.run(Main.class ,args);

	}

}
