package com.unifei.gerenciadorhabitos.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.unifei.gerenciadorhabitos.Exceptions.UserAlreadyExistException;
import com.unifei.gerenciadorhabitos.dtos.UserGetDto;
import com.unifei.gerenciadorhabitos.dtos.UserPostDto;
import com.unifei.gerenciadorhabitos.models.UserModel;
import com.unifei.gerenciadorhabitos.services.UserService;
import com.unifei.gerenciadorhabitos.util.UserMapper;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping
    public List<UserModel> hello() {
        return userService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserGetDto createUser(@RequestBody @Valid UserPostDto user)
            throws UserAlreadyExistException {
        UserModel userModel = UserMapper.INSTANCE.dtoToModel(user);
        userService.saveUser(userModel);
        return UserMapper.INSTANCE.modelToGet(userModel);
    }

}
