package com.example.FsdProject.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="bmi")
@Getter@Setter
@NoArgsConstructor
public class BMI {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private double height;
    private double weight;
    private double bmi;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
