package com.example.FsdProject.payloads;


import jakarta.persistence.Column;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {

    private int id;


    private String username;
    private String email;
    private String password;
//    private String confirmPassword;

}
