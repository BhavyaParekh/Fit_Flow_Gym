package com.example.FsdProject.payloads;

import com.example.FsdProject.services.impl.UserServiceImpl;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class BMIDto {

//    private Integer id;
//    private double height;
//    private double weight;
//    private double bmi;
//    private Integer userId;
//
//    UserServiceImpl userService;
//
//
//    public BMIDto(String username, double weight, double height, double bmi) {
//
//
//        this.userId = userService.getUserIdByUsername(username);
//        this.height = height;
//        this.weight = weight;
//        this.bmi = bmi;
//
//    }
private Integer id;
    private double height;
    private double weight;
    private double bmi;
    private Integer userId;

    public BMIDto(Integer userId, double weight, double height, double bmi) {
        this.userId = userId;
        this.height = height;
        this.weight = weight;
        this.bmi = bmi;
    }
}
