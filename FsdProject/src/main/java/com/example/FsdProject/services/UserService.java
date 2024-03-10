package com.example.FsdProject.services;

import com.example.FsdProject.entities.User;
import com.example.FsdProject.payloads.UserDto;

import java.util.List;

public interface UserService {

    UserDto createUser(UserDto userDto);
    UserDto updateUser(UserDto userDto,Integer userId);
    UserDto getUserById(Integer userId);
    List<UserDto> getAllUsers();
    void deleteUser(Integer userId);
    //public boolean loginUser(UserDto userDto);
    public User loginUser(String username, String password);
    public UserDto userToDto(User user);
    public User dtoToUser(UserDto userDto);
}
