package com.example.FsdProject.services.impl;

import com.example.FsdProject.entities.BMI;
import com.example.FsdProject.entities.User;
import com.example.FsdProject.exceptions.ResourceNotFoundException;
import com.example.FsdProject.payloads.BMIDto;
import com.example.FsdProject.payloads.UserDto;
import com.example.FsdProject.repositories.BMIRepo;
import com.example.FsdProject.services.BMIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BMIServiceImpl implements BMIService {

    @Autowired
    private BMIRepo bmiRepository;

    @Override
    public BMI saveBMI(BMI bmi) {
        return bmiRepository.save(bmi);
    }
    @Override
    public List<BMI> getAllBMIs() {
        return bmiRepository.findAll();
    }

    @Override
    public void deleteBMI(Long bmiId) {

            BMI bmi = this.bmiRepository.findById(bmiId).orElseThrow(()-> new ResourceNotFoundException("BMI","id",bmiId));
            this.bmiRepository.delete(bmi);

    }










}
