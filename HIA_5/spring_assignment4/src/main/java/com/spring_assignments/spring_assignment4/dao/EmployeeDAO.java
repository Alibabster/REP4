package com.spring_assignments.spring_assignment4.dao;

import com.spring_assignments.spring_assignment4.models.Employee;

import javax.sql.DataSource;
import java.util.List;

public interface EmployeeDAO {

    public void setDataSource(DataSource ds);
    
    public void create(String name, Integer salary);

    public Employee getEmployee(Integer id);
    
    public List<Employee> listEmployees();

    public void delete(Integer id);
    
    public void update(Integer id, Double salary);
}
