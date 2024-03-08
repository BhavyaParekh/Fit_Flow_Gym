package com.example.FsdProject.services;

import com.example.FsdProject.entities.BMI;
import com.example.FsdProject.entities.User;
import com.example.FsdProject.exceptions.ResourceNotFoundException;
import com.example.FsdProject.payloads.BMIDto;
import com.example.FsdProject.payloads.UserDto;

import java.util.List;

public interface BMIService {
    public BMI saveBMI(BMI bmi);
    public List<BMI> getAllBMIs();

    public void deleteBMI(Long bmiId);


}
