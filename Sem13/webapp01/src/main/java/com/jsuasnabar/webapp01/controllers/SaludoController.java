package com.jsuasnabar.webapp01.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SaludoController {
    @GetMapping("/saludo")
    public String saludo(){
        return "Saludo desde Spring";
    }

}
