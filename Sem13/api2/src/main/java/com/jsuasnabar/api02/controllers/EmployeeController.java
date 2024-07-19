package com.jsuasnabar.api02.controllers;

import com.jsuasnabar.api02.models.EmployeeModel;
import com.jsuasnabar.api02.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @GetMapping("/empleados")
    public ArrayList<EmployeeModel> obtenerEmpleados(){
        return employeeService.obtenerEmpleados();
    }

    @GetMapping(path="/empleados/{id}")
    public Optional<EmployeeModel> obtenerEmpleado(@PathVariable("id") Long id){
        return employeeService.obtenerEmpleado(id);
    }

    @PostMapping("/empleados")
    public EmployeeModel guardarEmpleado(@RequestBody EmployeeModel employeeModel){
        return employeeService.guardarEmpleado(employeeModel);
    }
    @DeleteMapping(path="/empleados/{id}")
    public String eliminarEmpleado(@PathVariable("id") Long id){
        boolean eliminado = employeeService.eliminarEmpleado(id);
        if(eliminado){
            return "Eliminado Correctamente!!";
        }else{
            return "No se pudo eliminar!!";
        }
    }
}
