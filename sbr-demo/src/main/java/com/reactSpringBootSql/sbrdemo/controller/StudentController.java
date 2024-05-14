package com.reactSpringBootSql.sbrdemo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reactSpringBootSql.sbrdemo.model.Student;
import com.reactSpringBootSql.sbrdemo.service.StudentServiceINTERFACE;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentServiceINTERFACE studentServiceINTERFACE;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentServiceINTERFACE.saveStudent(student);

        return "fonction add";
    }

}
