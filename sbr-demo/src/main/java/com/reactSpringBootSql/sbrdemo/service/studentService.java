package com.reactSpringBootSql.sbrdemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reactSpringBootSql.sbrdemo.model.Student;
import com.reactSpringBootSql.sbrdemo.repository.StudentRepositoryINTERFACE;

@Service
public class studentService implements StudentServiceINTERFACE {

    @Autowired
    private StudentRepositoryINTERFACE studentRepositoryINTERFACE;

    @Override
    public Student saveStudent(Student student) {
        return studentRepositoryINTERFACE.save(student);
    }

}
