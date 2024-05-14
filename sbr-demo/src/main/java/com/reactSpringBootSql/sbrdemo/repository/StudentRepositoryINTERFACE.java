package com.reactSpringBootSql.sbrdemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.reactSpringBootSql.sbrdemo.model.Student;

@Repository
public interface StudentRepositoryINTERFACE extends JpaRepository<Student, Integer> {

}
