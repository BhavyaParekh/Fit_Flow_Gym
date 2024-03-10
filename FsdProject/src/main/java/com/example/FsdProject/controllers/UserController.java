package com.example.FsdProject.controllers;

import com.example.FsdProject.entities.User;
import com.example.FsdProject.payloads.UserDto;
import com.example.FsdProject.services.BMIService;
import com.example.FsdProject.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

//    private BMIService bmiService;



    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        User authenticatedUser = userService.loginUser(user.getUsername(), user.getPassword());
        if (authenticatedUser != null) {
            return ResponseEntity.ok(authenticatedUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
    @PostMapping("/signup")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto){
        UserDto createUserDto = this.userService.createUser(userDto);
        return  new ResponseEntity<>(createUserDto, HttpStatus.CREATED);
    }
    //put - update user
    @PutMapping("/{userId}")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto,@PathVariable Integer userId){
         UserDto updatedUser = this.userService.updateUser(userDto,userId);
         return  ResponseEntity.ok(updatedUser);
    }
    // delete - delete user
    @DeleteMapping("/{userId}")
    public  ResponseEntity<?> deleteUser(@PathVariable Integer userId){
        this.userService.deleteUser(userId);
        return new ResponseEntity(Map.of("message","User deleted Successfully"),HttpStatus.OK);
    }
    // get - get user
    @GetMapping("/")
    public  ResponseEntity<List<UserDto>> getAllUsers(){
        return ResponseEntity.ok(this.userService.getAllUsers());
    }

    @GetMapping("/{userId}")
    public  ResponseEntity<UserDto> getSingleUsers(@PathVariable Integer userId){
        return ResponseEntity.ok(this.userService.getUserById(userId));
    }


//    @GetMapping("/{userId}/bmi")
//    public ResponseEntity<UserBMIInfo> getUserBMIInfo(@PathVariable Long userId) {
//        User user = userService.findUserById(userId);
//        BMI bmi = bmiService.findBMIByUserId(userId);
//        UserBMIInfo userBMIInfo = new UserBMIInfo(user.getName(), bmi.getBMI(), bmi.getHeight(), bmi.getWeight());
//        return ResponseEntity.ok(userBMIInfo);
//    }
}
