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
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class BMIServiceImpl implements BMIService {

    private BMIRepo bmiRepository;

    private UserServiceImpl userService;

    @Autowired
    public BMIServiceImpl(BMIRepo bmiRepository, UserServiceImpl userService) {
        this.bmiRepository = bmiRepository;
        this.userService = userService;
    }



    @Override
    public BMI saveBMI(BMI bmi , int userId) {



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



@Override

public List<BMIDto> getBMIsByUserId(Integer userId) {
    List<BMI> bmiList = bmiRepository.findByUserId(userId);
    return bmiList.stream()
            .map(this::toBMIDto)
            .collect(Collectors.toList());
}

//    private BMIDto toBMIDto(BMI bmi) {
//        return new BMIDto(bmi.getUser().getUsername(), bmi.getWeight(), bmi.getHeight(), bmi.getBmi());
//    }
private BMIDto toBMIDto(BMI bmi) {
    // Assuming you have a method to get userId by username
    Integer userId = userService.getUserIdByUsername(bmi.getUser().getUsername());
    return new BMIDto(userId, bmi.getWeight(), bmi.getHeight(), bmi.getBmi());
}

}
