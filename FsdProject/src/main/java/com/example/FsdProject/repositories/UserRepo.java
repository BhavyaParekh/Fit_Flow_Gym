package com.example.FsdProject.repositories;

import com.example.FsdProject.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User , Integer> {
//    User findByUsername(String username);
    User findByUsernameAndPassword(String username, String password);
}
