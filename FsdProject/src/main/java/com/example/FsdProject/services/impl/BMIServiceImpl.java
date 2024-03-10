package com.example.FsdProject.services.impl;

import com.example.FsdProject.entities.BMI;
import com.example.FsdProject.entities.User;
import com.example.FsdProject.exceptions.ResourceNotFoundException;
import com.example.FsdProject.payloads.BMIDto;
import com.example.FsdProject.payloads.UserDto;
import com.example.FsdProject.repositories.BMIRepo;
import com.example.FsdProject.services.BMIService;
import com.example.FsdProject.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BMIServiceImpl implements BMIService {

    @Autowired
    private BMIRepo bmiRepository;
    @Autowired
    private UserServiceImpl userService;



    @Override
    public BMI saveBMI(BMI bmi , int userId) {


//        User user = bmi.getUser();
//        User user = bmi.getUser();
//
//        // Check if the user is not null
//        if (user != null) {
//            // Set the user object in the BMI entity
//            bmi.setUser(user);
//        }
//         Get the user ID from the BMI object
//        Integer userId = bmi.getUser().getId();

        // Retrieve the user from the database using the user ID

        UserDto userDto = userService.getUserById(userId);
        User user = userService.dtoToUser(userDto);
        // Set the user object in the BMI entity
        bmi.setUser(user);


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
