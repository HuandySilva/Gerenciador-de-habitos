package com.unifei.gerenciadorhabitos.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.unifei.gerenciadorhabitos.dtos.UserDto;
import com.unifei.gerenciadorhabitos.models.UserModel;
import com.unifei.gerenciadorhabitos.services.UserService;
import com.unifei.gerenciadorhabitos.util.UserMapper;

import jakarta.validation.Valid;

@RestController
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<UserModel> hello() {
        return userService.findAll();
    }

    @PostMapping("/users")
    public ResponseEntity<UserDto> createUser(@RequestBody @Valid UserDto user, UriComponentsBuilder builder) {
        UserModel userModel = UserMapper.INSTANCE.dtoToModel(user);

        userService.saveUser(userModel);
        return ResponseEntity.ok(UserMapper.INSTANCE.modelToDto(userModel));
    }

}
