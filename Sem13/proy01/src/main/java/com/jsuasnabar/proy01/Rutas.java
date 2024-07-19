package com.jsuasnabar.proy01;

import org.springframework.web.bind.annotation.*;

@RestController
public class Rutas {
    @GetMapping("/home")
    public String home(){
        return "<h2>Desde home Hola</h2>";
    }
    @GetMapping(path = "/cursos")
    public String cursos(){
        return "<h2>Desde cursos Hola</h2>";
    }
    @GetMapping("/estudiantes/{fname}/{lname}")
    public String estudiantes(@PathVariable String fname, @PathVariable String lname){
        return "<h2>Desde estudiantes Hola: </h2>"+fname+" "+lname;
    }
    @GetMapping("/estudiantes")
    public String estudiantes2(@RequestParam String name, @RequestParam String address){
        return "<h2>Desde estudiantes Hola: </h2>"+name+" "+address;
    }

}
