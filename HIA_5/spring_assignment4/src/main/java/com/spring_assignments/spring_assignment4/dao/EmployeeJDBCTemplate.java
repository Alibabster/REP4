package com.spring_assignments.spring_assignment4.dao;

import com.spring_assignments.spring_assignment4.events.SalaryChangeEvent;
import com.spring_assignments.spring_assignment4.models.Employee;
import com.spring_assignments.spring_assignment4.models.EmployeeRowMapper;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import java.util.List;

public class EmployeeJDBCTemplate implements EmployeeDAO, ApplicationEventPublisherAware {

    private DataSource dataSource;
    private JdbcTemplate jdbcTemplateObject;
    private ApplicationEventPublisher eventPublisher;

    @Override
    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        this.jdbcTemplateObject = new JdbcTemplate(dataSource);
    }

    @Override
    public void create(String name, Integer salary) {
        String SQL = "insert into Employee (name, salary) values (?, ?)";
        jdbcTemplateObject.update(SQL, name, salary);
        System.out.println("Created Record Name = " + name + " Salary = " + salary);
    }

    @Override
    public Employee getEmployee(Integer id) {
        String SQL = "select * from Employee where id = ?";
        Employee employee = jdbcTemplateObject.queryForObject(SQL, new Object[]{id}, new EmployeeRowMapper());
        return employee;
    }

    @Override
    public List<Employee> listEmployees() {
        String SQL = "select * from Employee";
        List <Employee> employees = jdbcTemplateObject.query(SQL, new EmployeeRowMapper());
        return employees;
    }

    @Override
    public void delete(Integer id) {
        String SQL = "delete from Employee where id = ?";
        jdbcTemplateObject.update(SQL, id);
        System.out.println("Deleted Record with ID = " + id );
    }

    @Override
    public void update(Integer id, Double salary) {
        String SQL = "update Employee set salary = ? where id = ?";
        jdbcTemplateObject.update(SQL, salary, id);
        eventPublisher.publishEvent(new SalaryChangeEvent(this, getEmployee(id)));
        System.out.println("Updated Record with ID = " + id);
    }

    @Override
    public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {
        this.eventPublisher = applicationEventPublisher;
    }
}
