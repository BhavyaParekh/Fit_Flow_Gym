package com.example.FsdProject.controllers;

import com.example.FsdProject.entities.BMI;
import com.example.FsdProject.payloads.BMIDto;
import com.example.FsdProject.services.BMIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/bmi")
public class BMIController {
    @Autowired
    private BMIService bmiService;

    @PostMapping("/save")
    public BMI saveBMI(@RequestBody BMI bmi) {
        return bmiService.saveBMI(bmi);
    }

    @GetMapping("/all")
    public List<BMI> getAllBMIs() {
        return bmiService.getAllBMIs();
    }
    @DeleteMapping("/{bmiId}")
    public ResponseEntity<?> deleteBMI(@PathVariable Long bmiId){
        this.bmiService.deleteBMI(bmiId);
        return new ResponseEntity(Map.of("message","BMI deleted Successfully"), HttpStatus.OK);
    }

}
