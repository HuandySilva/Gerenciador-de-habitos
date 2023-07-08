package com.unifei.gerenciadorhabitos.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
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

    @ExceptionHandler(UserAlreadyExistException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    public ResponseEntity<String> handleUserAlreadyExistsException(UserAlreadyExistException e) {
        return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(e.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<String> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        BindingResult result = e.getBindingResult();
        FieldError error = result.getFieldError();
        String fieldName = error.getField();
        String errorMessage = error.getDefaultMessage();
        String responseMessage = fieldName + ": " + errorMessage;
        return ResponseEntity.badRequest().body(responseMessage);
    }

}
