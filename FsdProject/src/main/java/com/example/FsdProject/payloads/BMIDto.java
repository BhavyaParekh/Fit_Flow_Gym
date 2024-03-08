package com.example.FsdProject.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BMIDto {

    private Integer id;
    private double height;
    private double weight;
    private double bmi;
    private Integer userId;
}
