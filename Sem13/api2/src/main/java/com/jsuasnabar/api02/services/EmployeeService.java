package com.jsuasnabar.api02.services;

import com.jsuasnabar.api02.models.EmployeeModel;
import com.jsuasnabar.api02.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    public ArrayList<EmployeeModel> obtenerEmpleados(){
        return (ArrayList<EmployeeModel>) employeeRepository.findAll();
    }
    public Optional<EmployeeModel> obtenerEmpleado(Long id){

        return employeeRepository.findById(id);
    }
    public EmployeeModel guardarEmpleado(EmployeeModel employeeModel){

        return employeeRepository.save(employeeModel);
    }
    public boolean eliminarEmpleado(Long id){
        try {
            employeeRepository.deleteById(id);
            return true;
        }catch (Exception error){
            return false;
        }
    }

}
