package com.unifei.gerenciadorhabitos.controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.unifei.gerenciadorhabitos.Exceptions.HabitNotFoundException;
import com.unifei.gerenciadorhabitos.dtos.HabitDto;
import com.unifei.gerenciadorhabitos.dtos.UserHabitDto;
import com.unifei.gerenciadorhabitos.services.UserHabitService;
import com.unifei.gerenciadorhabitos.util.HabitMapper;
import com.unifei.gerenciadorhabitos.util.UserHabitMapper;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/user-habits")
public class UserHabitController {

    private final UserHabitService userHabitService;

    @GetMapping
    public ResponseEntity<List<UserHabitDto>> findAll() {
        return ResponseEntity.ok(UserHabitMapper.INSTANCE.modelsToDtos(userHabitService.findAll()));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveUserHabit(@RequestBody @Valid HabitDto dto, Principal principal)
            throws HabitNotFoundException {
        userHabitService.saveUserHabit(HabitMapper.INSTANCE.dtoToModel(dto), principal);
    }

}