package com.example.FsdProject.repositories;

import com.example.FsdProject.entities.BMI;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BMIRepo extends JpaRepository<BMI,Long> {

    @Query("SELECT users FROM BMI users WHERE users.user.id = :userId")
    List<BMI> findByUserId(@Param("userId") Integer userId);
}
