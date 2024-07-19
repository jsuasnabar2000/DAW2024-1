package com.jsuasnabar.api02.repositories;

import com.jsuasnabar.api02.models.EmployeeModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<EmployeeModel, Long> {

}
