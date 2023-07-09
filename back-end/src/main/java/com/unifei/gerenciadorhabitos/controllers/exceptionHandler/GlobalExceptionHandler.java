package com.unifei.gerenciadorhabitos.controllers.exceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.unifei.gerenciadorhabitos.Exceptions.HabitNotFoundException;
import com.unifei.gerenciadorhabitos.Exceptions.UserAlreadyExistException;
import com.unifei.gerenciadorhabitos.Exceptions.UserHabitNotFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {
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

    @ExceptionHandler(HabitNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<String> handleHabitNotFoundException(HabitNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }

    @ExceptionHandler(UserHabitNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> handleUserHabitNotFoundException(UserHabitNotFoundException ex) {
        return ResponseEntity.notFound().build();
    }
}
