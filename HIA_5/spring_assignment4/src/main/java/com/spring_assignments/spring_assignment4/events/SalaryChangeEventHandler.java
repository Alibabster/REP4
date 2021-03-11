package com.spring_assignments.spring_assignment4.events;

import org.springframework.context.ApplicationListener;

public class SalaryChangeEventHandler implements ApplicationListener<SalaryChangeEvent> {

    @Override
    public void onApplicationEvent(SalaryChangeEvent salaryChangeEvent) {
        System.out.println("SalaryChangeEventHandler.onApplicationEvent");
        System.out.println("Salary changed info: " + salaryChangeEvent.getEmployee().getId() + " " + salaryChangeEvent.getEmployee().getName());
    }
}
