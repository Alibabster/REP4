package com.spring_assignments.spring_assignment4.models;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EmployeeRowMapper implements RowMapper<Employee> {
    @Override
    public Employee mapRow(ResultSet resultSet, int i) throws SQLException {

        Employee employee = new Employee();

        employee.setId(resultSet.getInt("id"));
        employee.setName(resultSet.getString("name"));
        employee.setEmployeeType(EmployeeType.valueOf(resultSet.getString("employeeType")));

        employee.setSalary(resultSet.getDouble("salary"));

        employee.setWage(resultSet.getDouble("wage"));
        employee.setHours(resultSet.getDouble("hours"));

        employee.setSales(resultSet.getDouble("sales"));
        employee.setCommissionRate(resultSet.getDouble("commissionRate"));

        return employee;
    }
}
