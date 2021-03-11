package com.spring_assignments.spring_assignment4.services;

import com.spring_assignments.spring_assignment4.dao.EmployeeDAO;
import com.spring_assignments.spring_assignment4.models.Employee;
import com.spring_assignments.spring_assignment4.models.EmployeeType;
import org.springframework.stereotype.Service;

@Service
public class SalaryCalculatorService {

    private EmployeeDAO employeeDAO;

    public double calculateSalary(Integer id) {

        Employee employee = employeeDAO.getEmployee(id);

        if (employee.getEmployeeType() == EmployeeType.COMMISSION)
            return employee.getSales() * employee.getCommissionRate();
        else if (employee.getEmployeeType() == EmployeeType.SALARIED)
            return employee.getSalary();
        else if (employee.getEmployeeType() == EmployeeType.HOURLY) {
            if (employee.getHours() <= 40)
                return employee.getWage() * employee.getHours();
            else
                return 40 * employee.getWage() + (employee.getHours() - 40) * employee.getWage() * 1.5;
        } else if (employee.getEmployeeType() == EmployeeType.SALARIED_COMMISSION)
            return employee.getSales() * employee.getCommissionRate() + employee.getSalary();
        else
            return 0;
    }
}
