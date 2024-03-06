package com.example.FsdProject.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="users")
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_name",nullable = false,length = 100)
    private String name;
    private String email;
    private String password;
    private float height;
    private float weight;
    private float bmi;

}
